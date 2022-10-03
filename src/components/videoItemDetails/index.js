import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Navbar from '../navbar'
import Sidebar from '../sidebar'
import Video from './videoItem'

import {
  HomeSectionMainContainer,
  SectionContainer,
  HomeSectionContent,
  MainContainer,
} from '../Home/styledComponents'
import WatchContext from '../../context/nxtWatchContext'

const apiConstants = {
  initial: 'INITIAL',
  progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiConstants.initial,
    videosData: {},
    likedVideosList: [],
    disLikedVideosList: [],
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  dislikeVideo = id => {
    const {disLikedVideosList, likedVideosList} = this.state
    const isPresent = disLikedVideosList.find(each => each === id)
    if (isPresent === undefined) {
      this.setState(prevState => ({
        disLikedVideosList: [...prevState.disLikedVideosList, id],
      }))
    }

    const isPresentInLikedVideosList = likedVideosList.find(each => each === id)
    if (isPresentInLikedVideosList !== undefined) {
      this.setState(prevState => ({
        likedVideosList: prevState.likedVideosList.filter(each => {
          if (each !== id) {
            return each
          }
          return null
        }),
      }))
    }
  }

  likeVideo = id => {
    const {disLikedVideosList, likedVideosList} = this.state
    const isPresent = likedVideosList.find(each => each === id)
    if (isPresent === undefined) {
      this.setState(prevState => ({
        likedVideosList: [...prevState.disLikedVideosList, id],
      }))
    }

    const isPresentInDisLikedVideosList = disLikedVideosList.find(
      each => each === id,
    )
    if (isPresentInDisLikedVideosList !== undefined) {
      this.setState(prevState => ({
        disLikedVideosList: prevState.disLikedVideosList.filter(each => {
          if (each !== id) {
            return each
          }
          return null
        }),
      }))
    }
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiConstants.progress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const each = data.video_details
      const updatedData = {
        channelName: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        title: each.title,
        description: each.description,
        videoUrl: each.video_url,
      }
      this.setState({apiStatus: apiConstants.success, videosData: updatedData})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderProgressView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </div>
  )

  renderSuccessView = () => {
    const {likedVideosList, disLikedVideosList, videosData} = this.state
    const {id} = videosData
    const likeButtonActive = likedVideosList.find(each => each === id)
    const dislike = likeButtonActive !== undefined
    const dislikeButtonActive = disLikedVideosList.find(each => each === id)

    return (
      <Video
        details={videosData}
        likeActive={dislike}
        likeVideo={this.likeVideo}
        dislikeActive={dislikeButtonActive !== undefined}
        dislikeVideo={this.dislikeVideo}
      />
    )
  }

  renderVideoItem = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderSuccessView()
      case apiConstants.progress:
        return this.renderProgressView()
      default:
        return null
    }
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {mode} = value
          return (
            <MainContainer data-testid="videoItemDetails" bgColor={mode}>
              <Navbar />
              <HomeSectionMainContainer>
                <SectionContainer>
                  <Sidebar />
                </SectionContainer>
                <HomeSectionContent bgColor={mode}>
                  {this.renderVideoItem()}
                </HomeSectionContent>
              </HomeSectionMainContainer>
            </MainContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default VideoItemDetails

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import WatchContext from '../../context/nxtWatchContext'
import BannerSection from '../bannerSection'
import Navbar from '../navbar'
import Sidebar from '../sidebar'

import VideoItem from '../videoItem'
import {FailureView} from '../FailureView'
import {FailureViewButton} from '../FailureView/styledComponents'
import {
  TrendingVideosPageContainer,
  TrendingVideosContainer,
  TrendingContentSection,
  TrendingVideosUnorderedListContainer,
  SideContainer,
  FailureViewElement,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingVideo extends Component {
  state = {videosData: [], apiStatus: apiConstants.initial, showBanner: true}

  componentDidMount() {
    this.getTrendingVideos()
  }

  hideBanner = () => {
    this.setState({showBanner: false})
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiConstants.progress})
    const url = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        channelName: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
        title: each.title,
      }))
      this.setState({apiStatus: apiConstants.success, videosData: updatedData})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {videosData} = this.state
    return (
      <TrendingVideosUnorderedListContainer>
        {videosData.map(each => (
          <VideoItem details={each} key={each.id} />
        ))}
      </TrendingVideosUnorderedListContainer>
    )
  }

  renderProgressView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <FailureViewElement>
      <FailureView />
      <FailureViewButton type="button" onClick={this.getTrendingVideos}>
        Retry
      </FailureViewButton>
    </FailureViewElement>
  )

  getRenderResult = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.progress:
        return this.renderProgressView()
      case apiConstants.success:
        return this.renderSuccessView()
      case apiConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {showBanner} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {mode} = value
          return (
            <TrendingVideosPageContainer bgColor={mode} data-testid="trending">
              <Navbar />
              <TrendingVideosContainer>
                <SideContainer>
                  <Sidebar />
                </SideContainer>
                <TrendingContentSection>
                  {showBanner ? (
                    <BannerSection hideBanner={this.hideBanner} />
                  ) : null}

                  {this.getRenderResult()}
                  <h1>Trending</h1>
                </TrendingContentSection>
              </TrendingVideosContainer>
            </TrendingVideosPageContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default TrendingVideo

import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FiSearch} from 'react-icons/fi'
import {
  HomePageContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideosContainer,
  FailureViewElement,
} from './styledComponents'
import WatchContext from '../../context/nxtWatchContext'
import VideoItem from '../videoItem'
import {FailureView, NoVideosView} from '../FailureView'
import {FailureViewButton} from '../FailureView/styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class HomePage extends Component {
  state = {
    apiStatus: apiConstants.initial,
    videosData: [],
    searchValue: '',
  }

  componentDidMount() {
    this.getHomePageVideos()
  }

  searchVideo = event => {
    this.setState({searchValue: event.target.value})
  }

  retrySearch = () => {
    this.setState({searchValue: ''}, this.getHomePageVideos)
  }

  filterVideos = () => {
    this.getHomePageVideos()
  }

  getHomePageVideos = async () => {
    const {searchValue} = this.state
    this.setState({apiStatus: apiConstants.progress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const {videos} = data
      const updatedData = videos.map(each => ({
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

  renderProgressView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </div>
  )

  noVideosView = () => (
    <FailureViewElement>
      <NoVideosView />
      <FailureViewButton type="button" onClick={this.retrySearch}>
        Retry
      </FailureViewButton>
    </FailureViewElement>
  )

  renderSuccessView = () => {
    const {videosData} = this.state
    if (videosData.length === 0) {
      return this.noVideosView()
    }
    return (
      <VideosContainer>
        {videosData.map(each => (
          <VideoItem details={each} key={each.id} />
        ))}
      </VideosContainer>
    )
  }

  renderFailureView = () => (
    <FailureViewElement>
      <FailureView />
      <FailureViewButton type="button" onClick={this.getHomePageVideos}>
        Retry
      </FailureViewButton>
    </FailureViewElement>
  )

  renderResult = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.progress:
        return this.renderProgressView()
      case apiConstants.failure:
        return this.renderFailureView()
      case apiConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    const {searchValue} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {mode} = value
          return (
            <HomePageContainer bgColor={mode}>
              <SearchContainer>
                <SearchInput
                  type="search"
                  placeholder="Search"
                  bgColor={mode}
                  value={searchValue}
                  onChange={this.searchVideo}
                />
                <SearchButton
                  onClick={this.filterVideos}
                  data-testid="searchButton"
                >
                  <FiSearch />
                </SearchButton>
              </SearchContainer>
              {this.renderResult()}
            </HomePageContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default HomePage

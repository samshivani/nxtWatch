import {Component} from 'react'
import {ImFire} from 'react-icons/im'
import WatchContext from '../../context/nxtWatchContext'
import {NoSavedVideosView} from '../FailureView'
import Navbar from '../navbar'
import Sidebar from '../sidebar'
import VideoItem from '../videoItem'
import {
  GamingVideosPageContainer,
  GamingVideosContainer,
  GamingContentSection,
  SidebarContainer,
  GamingVideosUnorderedListContainer,
  BannerContainer,
  BannerElement,
  HeadingElement,
} from './styledComponent'

class SavedVideos extends Component {
  noVideosView = () => <NoSavedVideosView />

  successView = () => (
    <WatchContext.Consumer>
      {value => {
        const {savedVideosList, mode} = value
        return (
          <>
            <BannerContainer bgColor={mode} data-testid="banner">
              <BannerElement bgColor={mode}>
                <ImFire className="trending-icon" />
              </BannerElement>

              <HeadingElement bgColor={mode}>Saved Videos</HeadingElement>
            </BannerContainer>

            <GamingVideosUnorderedListContainer>
              {savedVideosList.map(each => (
                <VideoItem details={each} key={each.id} />
              ))}
            </GamingVideosUnorderedListContainer>
          </>
        )
      }}
    </WatchContext.Consumer>
  )

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {savedVideosList, mode} = value
          return (
            <GamingVideosPageContainer bgColor={mode} data-testid="savedVideos">
              <Navbar />
              <GamingVideosContainer>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                <GamingContentSection>
                  {savedVideosList.length === 0
                    ? this.noVideosView()
                    : this.successView()}
                </GamingContentSection>
              </GamingVideosContainer>
            </GamingVideosPageContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default SavedVideos

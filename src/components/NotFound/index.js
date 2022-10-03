import {
  GamingVideosPageContainer,
  GamingVideosContainer,
  GamingContentSection,
  SidebarContainer,
} from './styledComponents'
import Navbar from '../navbar'
import Sidebar from '../sidebar'
import {NotFoundRoute} from '../FailureView'
import WatchContext from '../../context/nxtWatchContext'

const NotFoundView = () => (
  <WatchContext.Consumer>
    {value => {
      const {mode} = value
      return (
        <GamingVideosPageContainer bgColor={mode}>
          <Navbar />
          <GamingVideosContainer>
            <SidebarContainer>
              <Sidebar />
            </SidebarContainer>
            <GamingContentSection>
              <NotFoundRoute />
            </GamingContentSection>
          </GamingVideosContainer>
        </GamingVideosPageContainer>
      )
    }}
  </WatchContext.Consumer>
)

export default NotFoundView

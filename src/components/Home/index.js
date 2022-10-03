import {MdClose} from 'react-icons/md'
import {Component} from 'react'
import WatchContext from '../../context/nxtWatchContext'
import Navbar from '../navbar'
import Sidebar from '../sidebar'
import {WebsiteLogo} from '../navbar/styledComponent'
import HomePage from '../HomePage'
import {
  HomeSectionMainContainer,
  HomeSectionContent,
  BannerContainer,
  BannerElement,
  BannerCloseButton,
  BannerButton,
  BannerContent,
  SectionContainer,
  MainContainer,
} from './styledComponents'

const Banner = props => {
  const {appMode, showBanner} = props

  const hideBanner = () => {
    showBanner()
  }

  return (
    <BannerContainer data-testid="banner">
      <BannerElement>
        <BannerContent>
          {appMode ? (
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
          ) : (
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              alt="nxt watch logo"
            />
          )}
          <p>Buy Nxt Watch Premium Prepaid plans with UPI</p>
          <BannerButton type="button">GET IT NOW</BannerButton>
        </BannerContent>
        <BannerCloseButton
          type="button"
          onClick={hideBanner}
          data-testid="close"
        >
          <MdClose />
        </BannerCloseButton>
      </BannerElement>
    </BannerContainer>
  )
}

class Home extends Component {
  state = {showItem: true}

  showBanner = () => {
    this.setState({showItem: false})
  }

  render() {
    const {showItem} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {mode} = value
          return (
            <MainContainer data-testid="home" bgColor={mode}>
              <Navbar />
              <HomeSectionMainContainer>
                <SectionContainer>
                  <Sidebar />
                </SectionContainer>
                <HomeSectionContent bgColor={mode}>
                  {showItem ? (
                    <Banner appMode={mode} showBanner={this.showBanner} />
                  ) : null}
                  <HomePage />
                </HomeSectionContent>
              </HomeSectionMainContainer>
            </MainContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}
export default Home

import {AiFillHome} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  SideBarContainer,
  AppLinksContainer,
  HomeContainer,
  HomeDescription,
  ContactUsSection,
  ContactUsHeading,
  ContactUsIconContainer,
  ContactUsIcon,
  ContactUsDescription,
} from './styledComponents'
import './index.css'
import WatchContext from '../../context/nxtWatchContext'

const Sidebar = () => (
  <WatchContext.Consumer>
    {value => {
      const {mode} = value
      return (
        <SideBarContainer bgColor={mode}>
          <AppLinksContainer>
            <Link to="/">
              <HomeContainer key="home">
                <AiFillHome
                  className={
                    mode
                      ? 'link-home-icon-inactive'
                      : 'link-home-icon-inactive-dark '
                  }
                />
                <HomeDescription bgColor={mode}>Home</HomeDescription>
              </HomeContainer>
            </Link>
            <Link to="/trending">
              <HomeContainer key="trending">
                <HiFire
                  className={
                    mode
                      ? 'link-home-icon-inactive'
                      : 'link-home-icon-inactive-dark '
                  }
                />

                <HomeDescription bgColor={mode}>Trending</HomeDescription>
              </HomeContainer>
            </Link>
            <Link to="/gaming">
              <HomeContainer key="gaming">
                <SiYoutubegaming
                  className={
                    mode
                      ? 'link-home-icon-inactive'
                      : 'link-home-icon-inactive-dark '
                  }
                />
                <HomeDescription bgColor={mode}>Gaming</HomeDescription>
              </HomeContainer>
            </Link>
            <Link to="/saved-videos">
              <HomeContainer key="savedVideos">
                <MdPlaylistAdd
                  className={
                    mode
                      ? 'link-home-icon-inactive'
                      : 'link-home-icon-inactive-dark '
                  }
                />
                <HomeDescription bgColor={mode}>Saved videos</HomeDescription>
              </HomeContainer>
            </Link>
          </AppLinksContainer>
          <ContactUsSection>
            <ContactUsHeading bgColor={mode}>CONTACT US</ContactUsHeading>
            <ContactUsIconContainer>
              <ContactUsIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <ContactUsIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <ContactUsIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ContactUsIconContainer>
            <ContactUsDescription bgColor={mode}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsDescription>
          </ContactUsSection>
        </SideBarContainer>
      )
    }}
  </WatchContext.Consumer>
)

export default Sidebar

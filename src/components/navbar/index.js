import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import {MdMenu, MdClose} from 'react-icons/md'
import {RiMoonFill} from 'react-icons/ri'
import {BsSun} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import {
  NavbarMainContainer,
  NavItemsContainer,
  WebsiteLogo,
  LogoutButton,
  NavBarIcons,
  ProfileImage,
  PopUpContainer,
  PopupHeading,
  PopUpButtonContainer,
} from './styledComponent'
import Sidebar from '../sidebar'
import WatchContext from '../../context/nxtWatchContext'
import './index.css'

const Navbar = props => {
  const logoutUser = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <WatchContext.Consumer>
      {value => {
        const {mode, changeMode} = value
        const lightMode = mode
        return (
          <NavbarMainContainer bgColor={lightMode}>
            <Link to="/">
              {lightMode ? (
                <WebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
              ) : (
                <WebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                />
              )}
            </Link>
            <NavItemsContainer>
              <li key="theme">
                {lightMode ? (
                  <NavBarIcons
                    type="button"
                    onClick={changeMode}
                    data-testid="theme"
                  >
                    <RiMoonFill
                      className={
                        lightMode ? 'light-mode-icon' : 'dark-mode-icon'
                      }
                    />
                  </NavBarIcons>
                ) : (
                  <NavBarIcons
                    type="button"
                    onClick={changeMode}
                    data-testid="theme"
                  >
                    <BsSun
                      className={
                        lightMode ? 'light-mode-icon' : 'dark-mode-icon'
                      }
                    />
                  </NavBarIcons>
                )}
              </li>
              <li>
                <Popup
                  position="left top"
                  trigger={
                    <button
                      type="button"
                      className={
                        lightMode
                          ? 'light-mode-menu-icon'
                          : 'dark-mode-menu-icon'
                      }
                    >
                      <MdMenu
                        className={
                          lightMode
                            ? 'light-mode-menu-icon'
                            : 'dark-mode-menu-icon'
                        }
                      />
                    </button>
                  }
                >
                  {close => (
                    <>
                      <Sidebar />
                      <MdClose onClick={() => close()} />
                    </>
                  )}
                </Popup>
              </li>
              <li key="logout">
                <Popup
                  modal
                  trigger={
                    <button
                      type="button"
                      className={
                        lightMode
                          ? 'light-mode-menu-icon'
                          : 'dark-mode-menu-icon'
                      }
                    >
                      <FiLogOut
                        className={
                          lightMode
                            ? 'light-mode-menu-icon'
                            : 'dark-mode-menu-icon'
                        }
                      />
                    </button>
                  }
                >
                  {close => (
                    <PopUpContainer bgColor={mode}>
                      <PopupHeading bgColor={mode}>
                        Are you sure, you want to logout?
                      </PopupHeading>
                      <LogoutButton type="button" onClick={() => close()}>
                        cancel
                      </LogoutButton>
                      <LogoutButton type="button" onClick={logoutUser}>
                        Confirm
                      </LogoutButton>
                    </PopUpContainer>
                  )}
                </Popup>
              </li>
              <li key="profileImage">
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </li>
              <li>
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" onClick={logoutUser}>
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => (
                    <PopUpContainer bgColor={mode}>
                      <PopupHeading bgColor={mode}>
                        Are you sure, you want to logout
                      </PopupHeading>
                      <PopUpButtonContainer bgColor={mode}>
                        <LogoutButton type="button" onClick={() => close()}>
                          Cancel
                        </LogoutButton>
                        <LogoutButton type="button" onClick={logoutUser}>
                          Confirm
                        </LogoutButton>
                      </PopUpButtonContainer>
                    </PopUpContainer>
                  )}
                </Popup>
              </li>
            </NavItemsContainer>
          </NavbarMainContainer>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default withRouter(Navbar)

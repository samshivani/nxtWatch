import styled from 'styled-components'

export const NavbarMainContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 14vh;
  width: 100vw;
  padding-left: 5px;
  padding-right: 5px;
  background-color: ${props => (props.bgColor ? '#f9f9f9' : '#313131')};
`

export const NavItemsContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  align-items: center;
  width: 30vw;
`

export const WebsiteLogo = styled.img`
  height: 5vh;
  width: 12vw;
`
export const NavBarIcons = styled.button`
  border: none;
  background-color: transparent;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 2px solid #3b82f6;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  color: #3b82f6;
  font-weight: 700;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ProfileImage = styled.img`
  width: 25px;
  height: 25px;
`
export const PopUpContainer = styled.div`
  background-color: ${props => (props.bgColor ? '#ffffff' : '#000000')};
  font-family: 'Roboto';
  height: 30vh;
  border-radius: 12px;
  width: 30vw;
  color: ${props => (props.bgColor ? '#000000' : '#ffffff')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PopupHeading = styled.p`
  color: ${props => (props.bgColor ? '#0000000' : '#ffffff')};
  font-size: small;
`
export const PopUpButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

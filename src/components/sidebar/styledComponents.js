import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4px;
  font-family: 'Roboto';
  width: 15vw;
  min-height: 120vh;
  background-color: ${props => (props.bgColor ? '#f9f9ff ' : '#424242 ')};
  @media screen and (max-width: 768px) {
    width: 50vw;
  }
`
export const AppLinksContainer = styled.ul`
  height: 20vh;
  list-style-type: none;
`

export const HomeContainer = styled.li`
  display: flex;
  align-items: center;
`

export const HomeDescription = styled.h1`
  color: ${props => (props.bgColor ? '#212121' : '#f9f9ff ')};
  font-weight: 400;
  font-size: 16px;
  margin-left: 10px;
`
export const ContactUsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 40%;
  width: 20vw;
`

export const ContactUsHeading = styled.p`
  color: ${props => (props.bgColor ? '#475569' : '#ffffff')};
  font-size: 18px;
  margin-left: 4px;
  font-weight: 500;
`

export const ContactUsIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ContactUsIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 6px;
`

export const ContactUsDescription = styled.p`
  color: ${props => (props.bgColor ? '#475569' : '#ffffff')};
  font-weight: 400;
  font-size: 18px;
  max-width: 80%;
`

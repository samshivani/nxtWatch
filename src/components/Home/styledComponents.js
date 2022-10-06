import styled from 'styled-components'

export const HomeSectionMainContainer = styled.div`
  display: flex;
  width: 100vw;
`

export const HomeSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 60vh;
  width: 100vw;
  background-color: ${props => (props.bgColor ? '#f9f9f9' : '#181818')};
`

export const BannerContainer = styled.div`
  height: 30vh;
  margin: 7px;
  padding: 8px;
  align-self: flex-start;
  margin-top: 5px;
  margin-top: 4px;
  margin-bottom: 5px;
  @media screen and (max-width: 768px) {
    height: 30vh;
    width: 100vw;
  }
  background-color: transparent;
`
export const BannerElement = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 75vw;
  align-self: flex-start;
  color: #1e293b;
  font-size: large;
  font-weight: 500;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  height: 20px;
  width: 20px;
`
export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20vw;
  @media screen and (max-width: 768px) {
    max-width: 90%;
  }
`

export const BannerButton = styled.button`
  background-color: transparent;
  border: 2px solid #1e293b;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  cursor: pointer;
  color: #1e293b;
  font-weight: 700;
  cursor: pointer;
  width: 10vw;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`
export const SectionContainer = styled.div`
  width: 15vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => (props.bgColor ? '#f9f9f9' : '#181818')};
`
export const HomePageContainer = styled.div`
  margin-top: 9px;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.bgColor ? '#f9f9f9 ' : '#181818 ')}
  padding: 6px;
  min-height: 60vh;
  min-width: 100vw;
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #606060;
  background-color: #ffffff;
  height: 5vh;
  width: 70%;
  margin-left: 4px;
`

export const SearchInput = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  font-size: larger;
  font-family: 'Roboto';
  color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`
export const SearchButton = styled.button`
  background-color: #e2e8f0;
  padding-left: 2px;
  padding-right: 2px;
  border: none;
  width: 10%;
  border-left: 1px solid #606060;
  color: #606060;
`
export const VideosContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
export const FailureViewElement = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`

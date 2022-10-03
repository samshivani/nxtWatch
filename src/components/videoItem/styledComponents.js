import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  width: 100%;
  padding: 2%;
  height: 50vh;
  @media screen and (min-width: 767px and max-width:  576px) {
    width: 45%;
  }
  @media screen and (min-width: 768px) {
    max-width: 27vw;
  }
`

export const VideoImage = styled.img`
  width: 100%;
  height: 70%;
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 6px;
  margin-top: 3px;
  align-self: flex-start;
`

export const VideoBottomContent = styled.div`
  display: flex;
  font-family: 'Roboto';
  color: ${props => (props.bgColor ? '#475569' : '#ffffff')};
  align-items: center;
`
export const VideoDescriptionContainer = styled.div`
  display: column;
  color: ${props => (props.bgColor ? '#1e293b' : '#ffffff')};
`
export const VideoTitle = styled.p`
  font-size: 14px;
  color: ${props => (props.bgColor ? '#1e293b' : '#ffffff')};
  font-weight: 500;
  line-height: 19px;
`
export const VideoViewsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 90%;
`

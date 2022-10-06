import styled from 'styled-components'

export const VideosContainer = styled.div`
  width: 100vw;
`
export const HorizontalLine = styled.hr`
  width: 100%;
  color: #cccccc;
`
export const LikeButton = styled.button`
  border: none;
  background-color: #909090;
  width: 90px;
  display: flex;
  justify-content: space-between;
  height: 20px;
  align-self: center;
  font-weight: 600;
  margin-right: 6px;
  color: ${props => (props.buttonColor ? '#2563eb' : '#64748b')};
`
export const VideoBottomSection = styled.div`
  display: flex;
  max-width: 50vw;
  flex-direction: column;
  font-family: 'Roboto';
  color: ${props => (props.bgColor ? '#000000' : '#cccccc')};
`
export const ButtonsContainer = styled.div`
  align-self: flex-start;
  display: flex;
  max-width: 20vw;
`
export const FailureViewElement = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`

import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  font-family: 'Roboto';
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.bgColor ? '#f9f9f9' : '#181818')};
`
export const FailureViewImage = styled.img`
  width: 40vw;
  height: 40vh;
`

export const FailureViewHeading = styled.h1`
  color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`

export const FailureViewParagraph = styled.p`
  color: ${props => (props.bgColor ? '#475569' : '#f9f9f9')};
`

export const FailureViewButton = styled.button`
  background-color: #00306e;
  width: 20vw;
  cursor: pointer;
  height: 8vh;
  border: none;
  color: #ffffff;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-right: 12px;
  padding-left: 12px;
`

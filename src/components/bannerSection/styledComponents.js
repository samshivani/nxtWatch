import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-color: transparent;
  max-width: 80vw;
  max-height: 20vh;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #cccccc;
`
export const BannerElement = styled.div`
  background-color: #cccccc;
  margin: 5px;
  border-radius: 45px;
  width: 90px;
  padding-left: 25px;
  padding-right: 4px;
  color: #ff0000;
  padding-top: 15px;
  height: 80px;
`
export const BannerCloseButton = styled.button`
  background-color: #d7dfe9;
  width: 4vw;
  border: none;
  background-color: transparent;
  height: 3vh;
  color: ${props => (props.bgColor ? '#000000' : '#ffffff')};
`
export const HeadingElement = styled.h1`
  color: ${props => (props.bgColor ? '#000000' : '#ffffff')};
  align-self: center;
`

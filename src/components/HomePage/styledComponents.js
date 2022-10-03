import styled from 'styled-components'

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

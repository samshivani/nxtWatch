import styled from 'styled-components'

export const TrendingVideosPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  background-color: ${props => (props.bgColor ? '#f9f9f9' : '#0f0f0f')};
`

export const TrendingVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 5px;
  width: 80vw;
`
export const TrendingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
`
export const TrendingVideosUnorderedListContainer = styled.ul`
  width: 90vw;
  align-self: flex-start;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`
export const SideContainer = styled.div`
  width: 80vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

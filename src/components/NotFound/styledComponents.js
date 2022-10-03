import styled from 'styled-components'

export const GamingVideosPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  background-color: ${props => (props.bgColor ? '#f9f9f9' : '#0f0f0f')};
`

export const GamingVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 5px;
  width: 80vw;
`

export const SidebarContainer = styled.div`
  width: 80vw;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
`

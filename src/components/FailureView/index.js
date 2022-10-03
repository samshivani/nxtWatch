import WatchContext from '../../context/nxtWatchContext'
import {
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewParagraph,
} from './styledComponents'

export const FailureView = () => (
  <WatchContext.Consumer>
    {value => {
      const {mode} = value
      return (
        <FailureViewContainer bgColor={mode}>
          <FailureViewImage
            src={
              mode
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            }
            alt="failure view"
          />
          <FailureViewHeading bgColor={mode}>
            Oops! Something Went Wrong
          </FailureViewHeading>
          <FailureViewParagraph bgColor={mode}>
            We are having some trouble to complete your request. Please try
            again.
          </FailureViewParagraph>
        </FailureViewContainer>
      )
    }}
  </WatchContext.Consumer>
)

export const NoVideosView = () => (
  <WatchContext.Consumer>
    {value => {
      const {mode} = value
      return (
        <FailureViewContainer bgColor={mode}>
          <FailureViewImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <FailureViewHeading bgColor={mode}>
            No Search results found
          </FailureViewHeading>
          <FailureViewParagraph bgColor={mode}>
            Try different key words or remove search filter
          </FailureViewParagraph>
        </FailureViewContainer>
      )
    }}
  </WatchContext.Consumer>
)

export const NoSavedVideosView = () => (
  <WatchContext.Consumer>
    {value => {
      const {mode} = value
      return (
        <FailureViewContainer bgColor={mode}>
          <FailureViewImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <FailureViewHeading bgColor={mode}>
            No saved videos found
          </FailureViewHeading>
          <FailureViewParagraph bgColor={mode}>
            You can save your videos while watching them
          </FailureViewParagraph>
        </FailureViewContainer>
      )
    }}
  </WatchContext.Consumer>
)

export const NotFoundRoute = () => (
  <WatchContext.Consumer>
    {value => {
      const {mode} = value
      return (
        <FailureViewContainer bgColor={mode}>
          <FailureViewImage
            src={
              mode
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
            }
            alt="not found"
          />

          <FailureViewHeading bgColor={mode}>Page Not Found</FailureViewHeading>
          <FailureViewParagraph bgColor={mode}>
            We are sorry, the page you requested could not be found.
          </FailureViewParagraph>
        </FailureViewContainer>
      )
    }}
  </WatchContext.Consumer>
)

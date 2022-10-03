import {MdClose} from 'react-icons/md'
import {ImFire} from 'react-icons/im'
import {SiYoutubegaming} from 'react-icons/si'
import {
  BannerContainer,
  BannerElement,
  BannerCloseButton,
  HeadingElement,
} from './styledComponents'
import WatchContext from '../../context/nxtWatchContext'

const BannerSection = props => {
  const {icon, hideBanner} = props
  return (
    <WatchContext.Consumer>
      {value => {
        const {mode} = value
        return (
          <BannerContainer bgColor={mode} data-testid="banner">
            <BannerElement bgColor={mode}>
              {icon === 'gaming' ? (
                <SiYoutubegaming className="trending-icon" />
              ) : (
                <ImFire className="trending-icon" />
              )}
            </BannerElement>
            {icon === 'gaming' ? (
              <HeadingElement bgColor={mode}>Gaming</HeadingElement>
            ) : (
              <HeadingElement bgColor={mode}> Trending</HeadingElement>
            )}

            <BannerCloseButton
              type="button"
              onClick={hideBanner}
              bgColor={mode}
            >
              <MdClose className="trending-icon" />
            </BannerCloseButton>
          </BannerContainer>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default BannerSection

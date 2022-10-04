import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import '../sidebar/index.css'

import ReactPlayer from 'react-player'
import {
  VideosContainer,
  HorizontalLine,
  LikeButton,
  VideoBottomSection,
  ButtonsContainer,
} from './styledComponents'

import {
  VideoDescriptionContainer,
  VideoTitle,
  VideoViewsContainer,
  ProfileImage,
} from '../videoItem/styledComponents'
import WatchContext from '../../context/nxtWatchContext'

const Video = props => {
  const {details, likeVideo, dislikeVideo, likeActive, dislikeActive} = props
  console.log(likeActive, dislikeActive)
  const {
    videoUrl,
    title,
    channelName,
    viewCount,
    publishedAt,
    profileImageUrl,
    description,
    id,
  } = details

  const dislikeClicked = () => {
    dislikeVideo(id)
  }

  const likeButtonClicked = () => {
    likeVideo(id)
  }

  const date = formatDistanceToNow(new Date(publishedAt))
  return (
    <WatchContext.Consumer>
      {value => {
        const {mode, saveVideo} = value
        const save = () => {
          const item = {...details}
          saveVideo(item)
        }
        return (
          <VideosContainer>
            <ReactPlayer url={videoUrl} />
            <VideoDescriptionContainer bgColor={mode}>
              <VideoTitle>{title}</VideoTitle>
              <VideoViewsContainer>
                <p>{date}</p>
                <ButtonsContainer>
                  <LikeButton
                    onClick={likeButtonClicked}
                    buttonColor={likeActive}
                  >
                    <BiLike
                      className={
                        mode
                          ? 'link-home-icon-inactive-light'
                          : 'link-home-icon-inactive-dark'
                      }
                    />
                    Like
                  </LikeButton>

                  <LikeButton
                    onClick={dislikeClicked}
                    buttonColor={dislikeActive}
                  >
                    <BiDislike
                      className={
                        mode
                          ? 'link-home-icon-inactive-light'
                          : 'link-home-icon-inactive-dark'
                      }
                    />
                    Dislike
                  </LikeButton>
                  <LikeButton onClick={save}>
                    <MdPlaylistAdd
                      className={
                        mode
                          ? 'link-home-icon-inactive-light'
                          : 'link-home-icon-inactive-dark'
                      }
                    />
                    Save
                  </LikeButton>
                </ButtonsContainer>
              </VideoViewsContainer>
            </VideoDescriptionContainer>
            <HorizontalLine />
            <ProfileImage src={profileImageUrl} alt="channel logo" />
            <VideoBottomSection bgColor={mode}>
              <div>
                {channelName !== undefined ? <p>{channelName}</p> : null}
                <p>{viewCount} </p>
              </div>
              <p>{description}</p>
            </VideoBottomSection>
          </VideosContainer>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default Video

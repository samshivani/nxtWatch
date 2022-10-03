import {GoPrimitiveDot} from 'react-icons/go'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import WatchContext from '../../context/nxtWatchContext'
import {
  VideoItemContainer,
  VideoImage,
  VideoBottomContent,
  ProfileImage,
  VideoDescriptionContainer,
  VideoTitle,
  VideoViewsContainer,
} from './styledComponents'

const VideoItem = props => {
  const {details} = props
  const {
    thumbnailUrl,
    profileImageUrl,
    title,
    channelName,
    viewCount,
    publishedAt,
    id,
  } = details

  let date
  if (publishedAt !== undefined) {
    date = formatDistanceToNow(new Date(publishedAt))
  }

  return (
    <WatchContext.Consumer>
      {value => {
        const {mode} = value
        return (
          <VideoItemContainer>
            <Link to={`/videos/${id}`}>
              <VideoImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoBottomContent bgColor={mode}>
                {profileImageUrl !== undefined ? (
                  <ProfileImage src={profileImageUrl} alt="channel logo" />
                ) : null}
                <VideoDescriptionContainer bgColor={mode}>
                  <VideoTitle bgColor={mode}>{title}</VideoTitle>
                  <VideoViewsContainer>
                    {channelName !== undefined ? <p>{channelName}</p> : null}
                    <p>{viewCount} </p>
                    <>
                      <GoPrimitiveDot />
                      {date !== undefined ? <p>{date}</p> : null}
                    </>
                  </VideoViewsContainer>
                </VideoDescriptionContainer>
              </VideoBottomContent>
            </Link>
          </VideoItemContainer>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default VideoItem

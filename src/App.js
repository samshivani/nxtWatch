import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css'
import Login from './components/LoginForm'
import WatchContext from './context/nxtWatchContext'
import ProtectedRoute from './components/protectedRoute'
import Home from './components/Home'
import VideoItemDetails from './components/videoItemDetails'
import TrendingVideo from './components/trendingVideos'
import GamingVideo from './components/GamingComponent'
import SavedVideos from './components/savedVideos'
import NotFoundView from './components/NotFound'

// Replace your code here

class App extends Component {
  state = {appMode: true, savedVideosList: []}

  saveVideo = item => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, item],
    }))
  }

  changeMode = () => {
    this.setState(prevState => ({appMode: !prevState.appMode}))
  }

  render() {
    const {appMode, savedVideosList} = this.state
    return (
      <WatchContext.Provider
        value={{
          mode: appMode,
          changeMode: this.changeMode,
          saveVideo: this.saveVideo,
          savedVideosList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={TrendingVideo} />
          <ProtectedRoute exact path="/gaming" component={GamingVideo} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFoundView} />
        </Switch>
      </WatchContext.Provider>
    )
  }
}

export default App

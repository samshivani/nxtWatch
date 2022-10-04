import React from 'react'

const WatchContext = React.createContext({
  mode: '',
  changeMode: {},
  savedVideosList: [],
  saveVideo: {},
})

export default WatchContext

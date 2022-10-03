import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginContainer,
  LoginFormContainer,
  LoginForm,
  PageContainer,
  WebsiteLogo,
  Label,
  Input,
  ShowPasswordContainer,
  ShowPasswordElement,
  LoginButton,
  ErrorView,
} from './styledComponents'
import WatchContext from '../../context/nxtWatchContext'

class Login extends Component {
  state = {
    password: '',
    username: '',
    showError: false,
    errorMessage: '',
    showPassword: false,
  }

  enterPassword = event => {
    this.setState({password: event.target.value})
  }

  enterUsername = event => {
    this.setState({username: event.target.value})
  }

  passwordVisibility = event => {
    if (event.target.checked) {
      return this.setState({showPassword: true})
    }
    return this.setState({showPassword: false})
  }

  loginUser = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      this.setState({errorMessage: '', showError: false})
      const {history} = this.props
      history.replace('/')
    } else {
      const message = data.error_msg
      this.setState({showError: true, errorMessage: message})
    }
  }

  render() {
    const {
      username,
      password,
      showError,
      errorMessage,
      showPassword,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <WatchContext.Consumer>
        {value => {
          const {mode} = value
          const light = mode
          return (
            <PageContainer>
              <LoginContainer bgColor={light}>
                <LoginFormContainer bgColor={light}>
                  {light ? (
                    <WebsiteLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="website logo"
                    />
                  ) : (
                    <WebsiteLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                      alt="website logo"
                    />
                  )}

                  <LoginForm onSubmit={this.loginUser}>
                    <Label htmlFor="username" colour={light}>
                      USERNAME
                    </Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Username"
                      colour={light}
                      onChange={this.enterUsername}
                      value={username}
                    />
                    <Label htmlFor="password" colour={light}>
                      PASSWORD
                    </Label>
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      colour={light}
                      value={password}
                      onChange={this.enterPassword}
                    />
                    <ShowPasswordContainer>
                      <input
                        type="checkbox"
                        id="showPassword"
                        onChange={this.passwordVisibility}
                      />
                      <ShowPasswordElement
                        htmlFor="showPassword"
                        colour={light}
                      >
                        Show Password
                      </ShowPasswordElement>
                    </ShowPasswordContainer>
                    <LoginButton type="submit">Login</LoginButton>
                    {showError ? <ErrorView>*{errorMessage}</ErrorView> : null}
                  </LoginForm>
                </LoginFormContainer>
              </LoginContainer>
            </PageContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Login

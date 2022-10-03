import styled from 'styled-components'

export const PageContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000;
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 100vh;
  background-color: ${props => (props.bgColor ? '#f9f9f9' : '#231f20')};
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`
export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 60%;
  background-color: ${props => (props.bgColor ? '#ffffff' : '#181818')};
`

export const WebsiteLogo = styled.img`
  width: 15vw;
  height: 6vh;
`

export const LoginForm = styled.form`
  font-family: 'Roboto';
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-self: flex-start;
  padding-top: 7px;
  padding-right: 6px;
  margin-left: 3vw;
`

export const Label = styled.label`
  color: ${props => (props.colour ? '#616e7c' : '#ffffff')};
  font-weight: 500;
  margin-bottom: 6px;
  margin-top: 2vh;
`
export const Input = styled.input`
  border: 1px solid ${props => (props.colour ? '#d7dfe9' : '#94a3b8')};
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: transparent;
  height: 5vh;
  padding-left: 4px;
  outline: none;
  color: ${props => (props.colour ? '#000000' : '#d7dfe9')};
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  margin-top: 6px;
`
export const ShowPasswordElement = styled.label`
  color: ${props => (props.colour ? '#000000' : '#ffffff')};
  font-weight: 400;
  margin-left: 5px;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  border: none;
  color: #ffffff;
  font-size: 16px;
  margin-top: 5px;
  border-radius: 5px;
  padding-top: 1vh;
  padding-bottom: 1vh;
`
export const ErrorView = styled.p`
  color: #ff0b37;
`

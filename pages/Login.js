import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/home_page1.png"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Log In"
      desc1="The body is the foremost tool for manifesting our mind."
      desc2=""
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login

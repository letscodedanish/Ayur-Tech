import React from 'react'
import signupImg from "../assets/home_page2.png"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Sign Up"
      desc1="The body is the foremost tool for manifesting our mind."
      desc2=""
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup

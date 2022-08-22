import React from 'react'
import linkedin from '../images/logo/linkedin.png'
import github from '../images/logo/github.png'
import  tweet from '../images/logo/tweeter.png'
import quora from '../images/logo/quora.png'
import insta from '../images/logo/insta.png'
const footer = () => {
  return (
    
    <footer className='footer'>

    <ul>
        <li className='imageli '><a href='#'><img src={linkedin}/></a></li>
        <li className='imageli '><a href='#'><img src={github}/></a></li>
        <li className='imageli '><a href='#'><img src={tweet} /></a></li>
        <li className='imageli '><a href='#'><img src={quora}/></a></li>
        <li className='imageli '><a href='#'><img src={insta}/></a></li>
      </ul>
      
    </footer>
  )
}

export default footer
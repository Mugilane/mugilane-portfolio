import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='container=fluid top-div'>
      <div className="container">
        <div className="footer-top ">
         <div className="footer-top-left">
            <h2>I'M MUGILANE</h2>
            <p>Software Developer based in india,I am Fresher for seeking software developer role</p>
         </div>
      
        <div className="footer-top-right">
         <div className="resu"> <a className='' href="https://github.com/Mugilane/mugilane-portfolio/raw/main/public/MUGILANE%20CV%20RESUME.pdf">
            My Resume/CV</a></div>
         <div className="hire">Hire Me</div>
        </div>
        </div>
        </div>
        <div className="footer-bottom">
            <p>© 2024 devilhackii&ensp;&#40;MUGILANE&#41;, &ensp;All rights.</p>
        </div>

    </div>
  )
}

export default Footer
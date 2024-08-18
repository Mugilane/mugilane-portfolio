import React from 'react'
import './Header.css'
import pro_img from '../../assets/prof_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
  const pdf_link = 'https://github.com/Mugilane/mugilane-portfolio/blob/main/public/MUGILANE%20CV-RESUME%20updated.pdf';
  return (
    <div id='home' className='header container'>
        <img src={pro_img} alt="" className='pro-img mx-auto d-block'/>
        <h1 className='mx-auto'><span>I'm Mugilane,</span> B.Tech Computer Science Student at Pondicherry University </h1>
        <p className='mx-auto' style={{textAlign:'justify'}}>I am Fresher for seeking Web application and Andorid Application developer role. I have a knowledeg for
          python, SQL, Java, C# and Dot Net related roles are sutable for me.
        </p>
        <div className="header-action mx-auto">
            <div className="hire-action" onClick={()=> setMenu("contact")}>
            <AnchorLink className='anchor-link' offset={50} href="#contact">
              Hire Me</AnchorLink>
              </div>
            <div className="resume" >
            <a className='div-btn' href="https://github.com/Mugilane/mugilane-portfolio/raw/main/public/MUGILANE%20CV-RESUME%20updated.pdf">
            My Resume/CV</a></div>
        </div>
    </div>
  )
}

export default Header
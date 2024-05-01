import React from 'react'
import './About.css'
import about_img from '../../assests/decora.jpg'
import play_icon from '../../assests/play.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>
        {setPlayState(true)}}/>
      </div>
      <div className='about-right'>
        <h3>ABOUT US</h3>
        <h2>From Events to Escapes, We've Got You Covered</h2>
        <p>Welcome to Hotel Harsh N.c., your premier destination for events and accommodations in Birgunj, Vishwua-15.</p>
        <p>We take pride in providing exceptional experiences for our guests. Our spacious event halls are meticulously designed to host weddings, conferences, and special celebrations of all kinds. With versatile spaces and impeccable service, we ensure that every event is a memorable success.</p>
        <p>Conveniently located near the India-Nepal border, our hotel offers easy access to local attractions and major transportation hubs. Whether you're here for business or leisure, our comfortable accommodations provide a peaceful retreat after a day of exploration.</p>
        <p>Experience the perfect blend of elegance and comfort at Hotel Harsh N.C. Contact us today to plan your event or reserve accommodations for your stay.</p>
        </div>
  </div>
  )
}

export default About

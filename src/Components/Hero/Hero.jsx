import React from 'react'
import './Hero.css'
import white_arrow from '../../assests/arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
      <h1>Welcome to Hotel Harsh N.C - Your Home Away from Home</h1>
      <br /><p>Experience warmth and convenience at Hotel Harsh N.C. Enjoy cozy rooms, delicious dining, and our spacious halls - ideal for weddings and events. Your satisfaction is our priority, ensuring a memorable stay.</p>
      <br /><button className='btn'>Explore more <img src={white_arrow} alt="" /> </button>
      </div>
      
    </div>
  )
}

export default Hero

import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Photos from './Components/Photos/Photos'
import Accommodation from './Components/Accommodation/Accommodation'
import Contact from './Components/Contact/Contact'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'


const App = () => {

const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='Our Services' title='What We Offer'/>
        <Services/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Accommodation' title='Room Varieties'/>
        <Accommodation/>
        <Title subTitle='Gallery' title='Hotel Highlights'/>
        <Photos/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        
      </div>
      <Contact/>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>

    </div>
  )
}

export default App

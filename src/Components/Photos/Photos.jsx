import React, { useRef } from 'react';
import './Photos.css';
import back_icon from '../../assests/left.png';
import next_icon from '../../assests/next.png';
import gallery_1 from '../../assests/building.jpg';
import gallery_2 from '../../assests/gallery-1.jpg';
import gallery_3 from '../../assests/service_4.jpg';
import gallery_4 from '../../assests/service_3.jpg';
import gallery_5 from '../../assests/decora.jpg'

const Photos = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 300; // Adjust scroll distance as needed
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += 300; // Adjust scroll distance as needed
  };

  return (
    <div className='photos'>
      <img src={back_icon} alt="" className='back-btn' onClick={scrollLeft} />
      <div className="slider" ref={sliderRef}>
        <div className='slide'>
          <img src={gallery_1} alt="" />
          <img src={gallery_2} alt="" />
          <img src={gallery_3} alt="" />
          <img src={gallery_4} alt="" />
          <img src={gallery_5} alt="" />
        </div>
      </div>
      <img src={next_icon} alt="" className='next-btn' onClick={scrollRight} />
    </div>
  );
}

export default Photos;



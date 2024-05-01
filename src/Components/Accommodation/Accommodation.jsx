import React from "react";
import './Accommodation.css';
import image1 from '../../assests/masterbed.jpeg';
import image2 from '../../assests/twobed.jpeg';
import image3 from '../../assests/family-Room.jpeg';

const Accommodation = () => {
  return (
    <div className="accommodation">
      <div className="accommodation-item">
        <div className="image">
          <img src={image1} alt="Accommodation 1" />
        </div>
        <div className="description">
        <p>Master Bedroom - This spacious room features a comfortable master bed with a balcony, air conditioning, an attached bathroom, and ample cupboard space.</p>
        </div>
      </div>

      <div className="accommodation-item">
        <div className="description">
        <p>Two-Bedroom Suite - Enjoy the convenience of two cozy beds in this suite, complete with a balcony, air conditioning, an attached bathroom, and generous cupboard space.</p>
        </div>
        <div className="image">
          <img src={image2} alt="Accommodation 2" />
        </div>
      </div>

      <div className="accommodation-item">
        <div className="image">
          <img src={image3} alt="Accommodation 3" />
        </div>
        <div className="description">
        <p>Family Suite - Our family suite offers the perfect retreat for families, featuring multiple rooms with comfortable beds, a balcony, air conditioning, attached bathrooms, and plenty of cupboard space for your belongings.</p>
        </div>
      </div>
    </div>
  );
}

export default Accommodation;

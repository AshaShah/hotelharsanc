import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assests/logobg.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [reservationResult, setReservationResult] = React.useState("");

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleReservationModal = () => {
    setShowReservationModal(!showReservationModal);
  };

  const handleReservationSubmit = async (event) => {
    event.preventDefault();
    setReservationResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "37f27ee5-3aca-414e-92f1-30e363ffdca8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setReservationResult("Reservation Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setReservationResult(data.message);
    }
  };


  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={`nav-links ${showDropdown ? 'show' : ''}`}>
        <li><Link to="hero" smooth={true} offset={0} duration={500}> Home</Link></li>
        <li><Link to="service" smooth={true} offset={-260} duration={500}> Services </Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500}>About us </Link> </li>
        <li><Link to="accommodation" smooth={true} offset={-260} duration={500}>Accommodation</Link></li>
        <li><Link to="photos" smooth={true} offset={-260} duration={500}>Highlights</Link></li>
        <li><button className='btn' onClick={toggleReservationModal}>Reservation</button></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500}><button className='btn'>Contact Us</button> </Link> </li>
      </ul>
      <div className="menu-icon" onClick={toggleDropdown}>
        <div className={`bar ${showDropdown ? 'open' : ''}`}></div>
        <div className={`bar ${showDropdown ? 'open' : ''}`}></div>
        <div className={`bar ${showDropdown ? 'open' : ''}`}></div>
      </div>

      {showReservationModal && (
  <div className="reservation-modal">
    <form onSubmit={handleReservationSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="phone">Phone</label>
      <input type="tel" id="phone" name="phone" required />

      <label htmlFor="event">Event Type</label>
      <input type="text" id="event" name="event" required />

      <label htmlFor="fromDate">From</label>
      <input type="date" id="fromDate" name="fromDate" required />

      <label htmlFor="toDate">To</label>
      <input type="date" id="toDate" name="toDate" required />

      <button type="submit" className="book-btn">Book</button>
    </form> 
    <button onClick={toggleReservationModal} className="close-btn">Cancel</button> <br />
    <span>{reservationResult}</span>
  </div>
)}

    </nav>
  );
}

export default Navbar;


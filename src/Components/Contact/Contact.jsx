import React from 'react'
import './Contact.css'
import message_icon from '../../assests/message.png'
import email_icon from '../../assests/email.png'
import phone_icon from '../../assests/telephone.png'
import location_icon from '../../assests/placeholder.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "37f27ee5-3aca-414e-92f1-30e363ffdca8");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact-section'>
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={message_icon} alt="" /></h3>
        <p>For any inquiries or bookings, feel free to reach out to us using the contact information below. Our team is available to assist you with any questions you may have.</p>
        <ul>
        <li><a href="mailto:asha.shah228@gmail.com"><img src={email_icon} alt="" /> asha.shah228@gmail.com</a></li>
                        <li><a href="tel:9845022349"><img src={phone_icon} alt="" />9845022349</a></li>
                        <li><a href="tel:9855035990"><img src={phone_icon} alt="" />9855035990</a></li>
                        <li><a href="https://www.google.com/maps?q=2V7P+9HR+Birgunj,Vishuwa+44300,Nepal" target="_blank" rel="noopener noreferrer"><img src={location_icon} alt="" />2V7P+9HR Birgunj, Vishuwa-15, Nepal</a></li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name'  required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label>Write your concern here</label>
            <textarea name="message" rows="6" placeholder='Enter your message...' required></textarea>
            <button type='submit' className='light-btn'> Send Message</button>
        </form>
        <span>{result}</span>
        </div>
    </div>
    </div>
  )
}

export default Contact
 
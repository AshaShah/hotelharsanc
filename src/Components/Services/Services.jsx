import React from "react";
import './Services.css'
import service_1 from '../../assests/service_1.jpg'
import service_2 from '../../assests/service_2.jpg'
import service_3 from '../../assests/service_3.jpg'
import service_icon_1 from '../../assests/theater.png'
import service_icon_2 from '../../assests/hall.png'
import service_icon_3 from '../../assests/hotel.png'


const Services = () =>{
    return (
        <div className="services">
            <div className="service">
                <img src={service_1} alt="" />
                <div className="caption">
                    <img src={service_icon_1} alt="" />
                    <p> Reception & Dining Hall</p>
                </div>
            </div>

            <div className="service">
              <img src={service_2} alt="" />
              <div className="caption">
                    <img src={service_icon_2} alt="" />
                    <p>Event Space</p>
                </div>
           </div>

            <div className="service">
                <img src={service_3} alt="" />
                <div className="caption">
                    <img src={service_icon_3} alt="" />
                    <p>Comfort Room </p>
                </div>
            </div>
        </div>
    )
}

export default Services
import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ imageUrl, iconUrl, text }) => {
   return (
      <div className="contact-details-card">
         <div className="icon">{/* <img src={imageUrl} alt={text} /> */}</div>
         {/* <p>{text}</p> */}
      </div>
   );
};

export default ContactInfoCard;

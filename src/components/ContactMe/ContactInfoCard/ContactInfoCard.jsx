import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ imageUrl, iconUrl, text }) => {
   return (
      <div className="contact-details-card">
         <div className="icon">
            <img src={iconUrl} alt={text} />
         </div>
      </div>
   );
};

export default ContactInfoCard;

import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import EmailIcon from "../../assets/images/email-icon.svg";
import GithubIcon from "../../assets/images/github-icon.svg";
const ContactMe = () => {
   return (
      <>
         <section className="contact-container">
            <h5>Contact Me</h5>

            <div className="contact-content">
               <div style={{ flex: 1 }}>
                  <ContactInfoCard
                     iconUrl={EmailIcon}
                     text="cswebdev@gmail.com"
                  />
                  <ContactInfoCard
                     iconUrl={GithubIcon}
                     text="https://github.com/cswebdev"
                  />
               </div>
               <div style={{ flex: 1 }}></div>
            </div>
         </section>
      </>
   );
};

export default ContactMe;

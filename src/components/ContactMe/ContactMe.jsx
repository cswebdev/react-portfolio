import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import EmailIcon from "../../assets/images/email-icon.svg";
import LinkedinIcon from "../../assets/images/linkedin-icon.svg";
import GithubIcon from "../../assets/images/github-icon.svg";
import ContactForm from "./ContactForm/ContactForm";
// import selfie from "../../assets/images/selfie.png";
import contactIllustration from "../../assets/images/2.png";

const ContactMe = () => {
   return (
      <>
         <section className="contact-container">
            <h5>Contact Me</h5>

            <div className="contact-content">
               <div style={{ flex: 1 }}>
                  <img src={contactIllustration} alt="" />
               </div>
               <div>
                  <p>
                     Let's connect and work together! You can send me an email,
                     or message me on LinkedIn. I'm eager to hear from you and
                     explore exciting opportunities together. Reach out, and
                     let's create something incredible!
                  </p>

                  <div className="socials-bar">
                     <a
                        href="https://www.linkedin.com/in/chelsea-snider/"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <ContactInfoCard
                           iconUrl={LinkedinIcon}
                           text="Add me on Linkedin"
                        />
                     </a>
                     <a
                        href="mailto:cswebdev91@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                     >
                        <ContactInfoCard
                           iconUrl={EmailIcon}
                           text="Send me an email"
                        />
                     </a>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ContactMe;

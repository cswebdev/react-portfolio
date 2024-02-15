import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import EmailIcon from "../../assets/images/email-icon.svg";
import LinkedinIcon from "../../assets/images/linkedin-icon.svg";
// import selfie   from "../../assets/images/selfie.png";
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
                     I am thrilled about the possibility of collaborating with
                     you! Whether it's consulting work you're seeking or adding
                     a fresh perspective to your team, I'm here and ready to
                     make a difference.
                  </p>
                  <p>
                     Feel free to reach out via email or connect with me on
                     LinkedIn. Let's embark on this journey together and craft
                     remarkable solutions that exceed expectations.
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

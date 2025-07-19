import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaWhatsapp,
  FaTelegramPlane,
  FaLinkedinIn,
} from "react-icons/fa";
import PageHeaderContent from "../../Components/PageHeaders/Index";
import "./Styles.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      {/* Section Header */}
      <PageHeaderContent
        headerText="Contact Me "
        icon={<FaEnvelope size={40} />}
      />

      <div className="contact-section animated-fadeInUp">
        <form>
          <div className="input-box">
            <input id="fullname" type="text" placeholder="Full Name" required />
            <input id="email" type="email" placeholder="Email" required />
          </div>

          <div className="input-box">
            <input
              id="number"
              type="number"
              placeholder="Phone number"
              required
            />
            <input id="subject" type="text" placeholder="Subject" />
          </div>

          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>

          <input type="submit" value="Send Message" className="btn-1" />
        </form>

        <footer className="footer">
          <div id="socials" className="social">
            <a
              href="https://web.facebook.com/soliu.abdullahi.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://wa.me/2349072300895"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://t.me/Aladireadamsolih"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/aladire-soliu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;

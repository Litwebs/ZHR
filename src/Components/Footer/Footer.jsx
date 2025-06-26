import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";
import { FaEnvelope, FaPhone, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`footer-container ${
        isVisible ? "animate-in" : "animate-out"
      }`}>
      <div className='footer-content'>
        <div className='footer-left'>
          <h2>Contact Me</h2>
          <p>Feel free to drop an email or leave a message</p>

          <div className='footer-item'>
            <FaEnvelope className='footer-icon' />
            <p>ZHR.nails@hotmail.com</p>
          </div>

          <div className='footer-item'>
            <FaPhone className='footer-icon' />
            <p>+44 7599 872050</p>
          </div>

          <div className='social-icons'>
            <FaInstagram
              className='social-icon'
              onClick={() =>
                window.open("https://www.instagram.com/zhr.nails_", "_blank")
              }
            />
            <FaTiktok
              className='social-icon'
              onClick={() =>
                window.open("https://www.tiktok.com/@zhr.nails_", "_blank")
              }
            />
          </div>
          <div>
            <p>2025 © ZHR Nails All Rights Reserved</p>
            <p>
              Powered by{" "}
              <a
                target='_blank'
                href='https://litwebs.co.uk'
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "#fff",
                }}>
                Lit Webs
              </a>
            </p>
          </div>
        </div>

        <div className='footer-right'>
          <form
            style={{
              boxShadow: "none",
              backgroundColor: "#f5f5f5",
            }}
            action='https://formsubmit.co/ZHR.nails@hotmail.com'
            // action="https://usebasin.com/f/8a72e7850b52"
            method='POST'
            className={`contact-form ${
              isVisible ? "animate-in" : "animate-out"
            }`}>
            <div className='input-group'>
              <input
                type='text'
                name='first_name'
                placeholder='First Name'
                required
              />
              <input
                type='text'
                name='last_name'
                placeholder='Last Name'
                required
              />
            </div>
            <input
              type='tel'
              name='phone'
              placeholder='Phone Number'
              required
            />
            <textarea
              style={{ minHeight: "200px" }}
              name='message'
              placeholder='Type your message here...'
              required></textarea>
            <button
              type='submit'
              className='submit-btn '
              style={{
                boxShadow: "none",
                color: "#999",
                backgroundColor: "#fff",
                border: "1px solid #baa368",
              }}>
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className='footer-bottom'></div>
    </footer>
  );
};

export default Footer;

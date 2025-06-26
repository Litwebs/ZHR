import React, { useEffect, useRef, useState } from "react";
import "./Press.css";
import img3 from "../../../Images/IMG28.jpeg";
import img from "../../../Images/rug.jpeg";

const Press = () => {
  const [loc, setLoc] = useState("UK");
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={sectionRef} className='press-section'>
      <div className='press-gallery'>
        <div
          className={`press-item ${isVisible ? "animate-in" : "animate-out"}`}>
          <h2
            className={`press-title ${
              isVisible ? "animate-in" : "animate-out"
            }`}>
            'Desi' Inspired Press-ons
          </h2>
          <img src={img3} alt='Press-On Nails' />
          <p className='des'>
            Custom Press-On Nails: Featuring Our Signature Design. This set,
            influenced by traditional Desi art, is available for custom orders.
            Interested in a one-of-a-kind design?
          </p>
          <button className='submit-btn' onClick={scrollToForm}>
            Enquire now
          </button>
        </div>
        <img src={img} alt='' className='rug' />
      </div>

      {/* Contact Form Section */}
      <div className='contact-section' ref={formRef}>
        <h2
          className={`contact-title ${
            isVisible ? "animate-in" : "animate-out"
          }`}>
          Press-ons Contact Form
        </h2>
        <form
          action='https://formsubmit.co/ZHR.nails@hotmail.com'
          // action="https://formsubmit.co/ZHR.nails@hotmail.com"
          // action="https://usebasin.com/f/8a72e7850b52"
          method='POST'
          className={`contact-form ${isVisible ? "animate-in" : "animate-out"}`}
          id='local-form'>
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
          <input type='email' name='email' placeholder='Email' required />
          <input type='tel' name='phone' placeholder='Phone Number' required />
          <div className='input-group'>
            <select name='service_type' required>
              <option value='' disabled selected>
                Shape*
              </option>
              <option>Almond</option>
              <option>Square</option>
              <option>Tapered Square</option>
              <option>Stiletto</option>
              <option>Oval</option>
            </select>
            <select name='nail_shape' required>
              <option value='' disabled selected>
                Length*
              </option>
              <option>Short</option>
              <option>Medium</option>
              <option>Long</option>
              <option>Extra-Long</option>
            </select>
          </div>
          <div className='input-group'>
            <select name='number_of_sets' required>
              <option value='' disabled selected>
                Number of sets*
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
            <select
              name='location'
              required
              onChange={(e) => setLoc(e.target.value)}>
              <option value='' disabled selected>
                Location*
              </option>
              <option>UK</option>
              <option>International</option>
            </select>
          </div>
          {loc === "International" && (
            <input
              type='text'
              name='location'
              placeholder='Location'
              required
            />
          )}
          <textarea
            name='message'
            placeholder='Type your message here...'
            required></textarea>
          <button type='submit' className='submit-btn'>
            Enquire Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Press;

import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_rui8q7i",
      "template_gelb1dq",
      form.current,
      "rg_duj2PReAIdbe6L"
    );
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contactMe">Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>meronmekonnen1992@gmail.com</h5>
            <a href="mailto:meronmekonnen1992@gmail.com" rel="noreferrer" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" className="bgColorContact" name="name" placeholder="Your full name" />
          <input type="email" className="bgColorContact" name="email" placeholder="Your Email" />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            className="bgColorContact"
            required
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;


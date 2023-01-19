import './Contact.css'
import logo from "../../assets/img/logo.png";

function Contact() {
  return (
    <section className="contact">
      <h2 className="overline">Want to know more?</h2>
      <h2 className="title">Get In Touch</h2>
      <p>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <a
        className="email-link"
        href="mailto:alexander@akdev.nl"
        rel="noopener noreferrer"
        target="_blank"
      >
        Say Hi
      </a>
    </section>
  );
}

export default Contact
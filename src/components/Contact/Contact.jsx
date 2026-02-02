import "./Contact.css";
import logo from "../../..//img/logo.svg";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="overline">Want to know more?</h2>
      <h2 className="title">Get In Touch</h2>
      {/* <p>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p> */}
      <p>
        I’m currently looking for new opportunities, and my inbox is always
        open. Whether you have a role in mind, a question, or just want to say
        hi, I’ll do my best to get back to you!
      </p>
      <a
        className="email-link"
        href="mailto:a.kacharava94@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Say Hi
      </a>
    </section>
  );
}

export default Contact;

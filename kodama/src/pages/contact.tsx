import "../style/contact.scss";
import Header from "../components/header";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState<string>();
  const [firstName, setFirstName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [object, setObject] = useState<string>();
  const [message, setMessage] = useState<string>();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7ybbi09",
        "template_325m0yk",
        form.current,
        "-x34lFA1uw4tkRzBz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact_wrapper">
      <Header />
      <div className="text_contact_contain">
        <p className="text_contact">
          Si vous souhaitez me contacter, pour toute question ou pour un projet
          freelance c'est par ici, n'hésitez pas !
        </p>
      </div>
      <div className="form_wrapper">
        <form ref={form} className="form" onSubmit={sendEmail}>
          <div className="fullName">
            <input
              type="text"
              id="name"
              name="name"
              className="input_name"
              placeholder="Nom"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="input_name"
              placeholder="Prénom"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mini_wrapper">
            <input
              type="email"
              name="email"
              id="email"
              className="input_mail"
              placeholder="Votre email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              id="object"
              name="object"
              className="input_object"
              placeholder="Objet"
              value={object}
              onChange={(e) => setObject(e.target.value)}
            />
            <textarea
              id="message"
              name="message"
              className="message_area"
              maxlength="1000"
              placeholder="Votre message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" id="send">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

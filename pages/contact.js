import React, {useState} from 'react';
import Layout from "../components/Layout";
import Head from "next/head";
import axios from "axios";
import { server } from "../config";

export default function contact(props) {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [buttonText, setButtonText] = useState("Submit");


  const handleSubmit = (e) => {
    e.preventDefault();


      setButtonText("Sending");


    let data = {
      name: name,
      email: email,
      message: message
    };

    axios
      .post(`${server}/api/send-email`, data)
      .then(res => {
        resetForm();
        console.log(res);
      })
      .catch(() => {
        console.log("Message not sent");
      });
  }

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setButtonText("Submit");
};

    return (
      <Layout>
        <Head>
          <title>Jesal Patel ｜ Contact</title>
        </Head>
        <div className="container">
          <section>
            <div className="contact">
              <p>
                Got an opportunity or would like to have a chat?
              </p>
              <br />
              <p>Please contact me via the form below:</p>
              <div className="form-container">
                <form onSubmit={e => handleSubmit(e)}>
                  <label>Name *</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    value={name}
                    onChange={evt => setName(evt.target.value)}
                    required
                  />
                  <label>Email *</label>
                  <input
                    type="email"
                    placeholder="Your email"
                    name="email"
                    value={email}
                    onChange={evt => setEmail(evt.target.value)}
                    required
                  />
                  <label>Message *</label>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    name="message"
                    value={message}
                    onChange={evt => setMessage(evt.target.value)}
                    required
                  />
                  <input type="submit" value={buttonText} />
                </form>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );

}

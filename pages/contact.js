import Layout from "../components/Layout";
import Head from "next/head";
import axios from "axios";
import { server } from "../config";

export default class extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    buttonText: "Submit"
  };

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      buttonText: "Sending"
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    axios
      .post(`${server}/api/send-email`, data)
      .then(res => {
        this.setState(this.resetForm());
        console.log(res);
      })
      .catch(() => {
        console.log("Message not sent");
      });
  }

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      message: "Message Sent",
      buttonText: "Submit"
    });
  };

  render() {
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
                <form onSubmit={e => this.handleSubmit(e)}>
                  <label>Name *</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    value={this.state.name}
                    onChange={evt => this.setState({ name: evt.target.value })}
                    required
                  />
                  <label>Email *</label>
                  <input
                    type="email"
                    placeholder="Your email"
                    name="email"
                    value={this.state.email}
                    onChange={evt => this.setState({ email: evt.target.value })}
                    required
                  />
                  <label>Message *</label>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    name="message"
                    value={this.state.message}
                    onChange={evt =>
                      this.setState({ message: evt.target.value })
                    }
                    required
                  />
                  <input type="submit" value={this.state.buttonText} />
                </form>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

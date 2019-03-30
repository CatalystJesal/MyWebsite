import Layout from "../components/Layout";
import Head from "next/head";

export default () => (
  <Layout>
    <Head>
      <title>Jesal Patel ｜ Contact</title>
    </Head>
    <div className="container">
      <section>
        <div className="contact">
          <p>
            Got an opportunity for me? I am currently interested in roles
            involving database or web development.
          </p>
          <br />
          <p>Please contact me via the form below:</p>
          <div className="form-container">
            <form action="/send-email" method="post">
              <label for="name">Name *</label>
              <input type="text" placeholder="Your name" required />
              <label for="email">Email *</label>
              <input type="email" placeholder="Your email" required />
              <label type="message">Message *</label>
              <textarea name="message" placeholder="Your message" required />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

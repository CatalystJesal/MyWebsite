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
          <p>Contact me via:</p>
          <div id="links">
            <a
              className="LI-simple-link"
              href="https://uk.linkedin.com/in/jesalpatel1?trk=profile-badge"
            >
              <img src="https://i.imgur.com/yKjZRZe.png" />
            </a>
            <a className="LI-simple-link" href="https://twitter.com/Jesal_P24">
              <img src="https://i.imgur.com/JJtkRj5.png" />
            </a>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

import React, { Component } from "react";
import Layout from "../components/Layout";
import Siema from "siema";
import Head from "next/head";

class Projects extends Component {
  componentDidMount() {
    this.siema = new Siema({
      loop: false
    });
  }

  prev = () => {
    this.siema.prev();
  };

  next = () => {
    this.siema.next();
  };

  render() {
    return (
      <Layout>
        <Head>
          <title>Jesal Patel ｜ Projects</title>
        </Head>
        <div className="container">
          <section>
            <div className="projects">
              <div className="siema">
                <div>
                  <img src="../static/Dextero.png" />
                  <div className="overlay">
                    <div id="overlay_title">Dextero</div>
                    <div id="overlay_description">
                      I developed a multi-touch mobile game for stroke patients
                      to rehabilitate their finger coordination and dexterity.
                    </div>
                    <div id="overlay_tech">Java, Android, LibGDX, SQLite</div>
                  </div>
                </div>
              </div>
              <div />

              <button onClick={this.prev}>Prev</button>
              <button onClick={this.next}>Next</button>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Projects;

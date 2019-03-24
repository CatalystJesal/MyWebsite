import React, { Component } from "react";
import Layout from "../components/Layout";
import Siema from "siema";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

import { server } from "../config";

export default class extends React.Component {
  componentDidMount() {
    this.siema = new Siema({
      loop: false
    });

    this.setState({
      projects: this.props.projectData
    });
  }

  prev = () => {
    this.siema.prev();
  };

  next = () => {
    this.siema.next();
  };

  mapProjects = function(data) {
    return Object.keys(data).map(key => {
      const project = data[key];
      const { _id: id, img, name, description, tech } = project;

      return (
        <div key={id} id={id}>
          <img src={img} />
          <div className="overlay">
            <div className="overlay_title">{name}</div>
            <div className="overlay_description">{description}</div>
            <div className="overlay_tech">{tech}</div>
          </div>
        </div>
      );
    });
  };

  render() {
    const { projectData } = this.props;
    return (
      <Layout>
        <Head>
          <title>Jesal Patel ｜ Projects</title>
        </Head>
        <div className="container">
          <section>
            <div className="projects">
              <div className="siema">{this.mapProjects(projectData)}</div>
              <button onClick={this.prev}>Prev</button>
              <button onClick={this.next}>Next</button>
            </div>
          </section>
        </div>
      </Layout>
    );
  }

  static async getInitialProps({ req }) {
    const apiUrl = `${server}/api/projects`;
    try {
      const response = await fetch(apiUrl);
      const projectData = await response.json();
      return { projectData };
    } catch (ex) {
      console.log(`Unable to fetch data from"  ${apiUrl}   -   ${ex}`);
      return { projectData: null };
    }
  }
}

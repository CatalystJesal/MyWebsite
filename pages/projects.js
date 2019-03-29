import React, { Component } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

import { server } from "../config";

export default class extends React.Component {
  componentDidMount() {
    this.setState({
      projects: this.props.projectData
    });
  }

  mapProjects = function(projects) {
    return projects.map(doc => {
      const { _id: id, img, name, description, tech } = doc;

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
            <div className="project-description">
              <p>
                Here are some of the projects I have worked on during my spare
                time:
              </p>
            </div>
            <div className="grid-container">
              {this.mapProjects(projectData)}
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

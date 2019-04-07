import React, { Component } from "react";
import Header from "./Header";
import Navigation from "./Navigate";
import Footer from "./Footer";
import Head from "next/head";

class Layout extends Component {
  state = {};
  render() {
    return (
      <div>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
        </Head>
        <Header />
        <Navigation />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;

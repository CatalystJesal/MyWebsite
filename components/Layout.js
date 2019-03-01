import React, { Component } from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";

class Layout extends Component {
  state = {};
  render() {
    return (
      <div id="wrapper">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Header />
        <Navigation />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;

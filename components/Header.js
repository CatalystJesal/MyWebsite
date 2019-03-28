import React, { Component } from "react";
import "../styles/styles.css";
import Link from "next/link";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <header>
          <div id="avatar">
            <Link href="/">
              <a>
                <img id="avatar_img" src="https://i.imgur.com/yPqtDkl.png" />
              </a>
            </Link>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;

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
          <div className="media-links">
            <a
              className="LI-simple-link"
              href="https://uk.linkedin.com/in/jesalpatel1?trk=profile-badge"
              target="_blank"
            >
              <img src="https://i.imgur.com/FyP38AW.png" />
            </a>
            <a className="LI-simple-link" href="https://twitter.com/Jesal_P24">
              <img src="https://i.imgur.com/tcuU1EE.png" target="_blank" />
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;

import React, { Component } from "react";
import Link from "next/link";
import "../styles/styles.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <header>
          <div id="avatar">
            <Link href="/">
              <a>
                <img src="../static/Jesal.jpg" alt="Avatar" />
              </a>
            </Link>
          </div>
        </header>
      </div>
    );
  }

  handleClick = () => {
    <Link href="/">
      <a>Home</a>
    </Link>;
  };
}

export default Header;

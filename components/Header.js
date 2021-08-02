import React from "react";
import "../styles/styles.css";
import Link from "next/link";

export default function Header(props)  {

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
          </div>
        </header>
      </div>
    )
  }



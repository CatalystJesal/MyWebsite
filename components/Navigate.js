import React from 'react';
import "../styles/styles.css";
import Link from "next/link";

export default function Navigation(props) {
  return (
    <div className="container">
      <nav id="nav">
        <ul>
          <li className="nav_li">
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li className="nav_li">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};


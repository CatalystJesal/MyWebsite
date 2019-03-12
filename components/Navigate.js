import Link from "next/link";
import "../styles/styles.css";

const Navigation = () => {
  return (
    <div className="container">
      <nav id="nav">
        <ul id="nav_ul">
          <li id="nav_li">
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li id="nav_li">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

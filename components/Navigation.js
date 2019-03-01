import Link from "next/link";
import "../styles/styles.css";

const Navigation = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <Link href="/Skills">
            <a>Skills</a>
          </Link>
          <Link href="/Contact">
            <a>Contact</a>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;

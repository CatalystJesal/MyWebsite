import React, { useState } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import { AgeFromDate } from "age-calculator";

export default function Index(props) {
  const [dob, setDob] = useState(
    new AgeFromDate(new Date("1994", "06", "24")).age
  );

  return (
    <Layout>
      <Head>
        <title>Jesal Patel ｜ Home</title>
      </Head>
      <div className="container">
        <section>
          <div className="aboutme">
            <h1>About me</h1>
            <h2>
              Name: Jesal Patel <br />
              Age: {dob} <br />
              Location: London, UK
            </h2>
            <p>
              I am a SQL Developer with a Bachelor's degree in Computer Science
              from City University London. I have over two years of experience
              as a back-end developer using C# and SQL.
            </p>
            <p>
              My passion for programming started during my university studies,
              where I was constantly challenged to find solutions and learn
              something new every day. Even after graduation, I continued to
              learn and expand my skills, currently focusing on Blockchain
              technology and related technologies such as Solidity, ReactJS,
              HTML5, CSS, and more.
            </p>
            <p>
              In my free time, I enjoy volunteering for charity, playing
              football, badminton, running, gaming, and listening to music.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}

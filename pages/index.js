import React, {useState} from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import { AgeFromDate } from "age-calculator";


export default function Index (props) {
  
  const [dob, setDob] = useState(new AgeFromDate(new Date('1994', '06', '24')).age);

    return (
      <Layout >
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
                I am a Graduate SQL Developer graduated from City University London
                with a Bachelor’s degree in Computer Science. Currently, I have
                more than two years experience combined working as a back-end developer with
                technologies such as C# and SQL.
              </p>
              <p>
                My journey of becoming a developer started since my first year
                studies at university. I really enjoyed digging into programming
                problems, trying to find solutions and learning something new
                each day. It was the same when I was working in my first job as
                a developer after graduating. I may have finished my studies but
                I remain a student as I try to learn new skills in my spare time.
              </p>
              <p>
                Currently I am furthering my skills in Blockchain technology with technologies
                such as Solidity, ReactJS, HTML5, CSS and more.
              </p>
              <p>
                Outside of development my interests involve: volunteering for
                charity, football, playing badminton, running, gaming and listening to
                music.
              </p>
            </div>
          </section>
        </div>
      </Layout>
    )
  }

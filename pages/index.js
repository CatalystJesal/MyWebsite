import React, { Component } from "react";
import Layout from "../components/Layout";
import Head from "next/head";

export default () => (
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
            Age: 24 <br />
            Location: London, UK
          </h2>
          <p>
            I am a Software Developer graduated from City University London with
            a Bachelor’s degree in Computer Science. Currently, I have one
            year’s experience working as a back-end developer with technologies
            such as C# and SQL.
          </p>
          <p>
            My journey of becoming a developer started since my first year
            studies at university. I really enjoyed digging into programming
            problems, trying to find solutions and learning something new each
            day. It was the same when I was working in my first job as a
            developer after graduating. I may have finished my studies but I
            remain a student as I try to learn new skills/technologies in my
            spare time. Take this website as an example, learning to develop
            skills in HTML5, CSS3, JavaScript, Next.js, React.js, MongoDB and
            Node.js.
          </p>
          <p>
            Outside of development my interests involve: volunteering for
            charity, playing badminton, running, gaming and listening to music.
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

// class App extends Component {
//   state = {};
//   render() {
//     return (
//       <Layout>
//         <Head>
//           <title>Jesal Patel ｜ Home</title>
//         </Head>
//         <div className="container">
//           <section>
//             <div className="aboutme">
//               <h1>About me</h1>
//               <h2>
//                 Name: Jesal Patel <br />
//                 Age: 24 <br />
//                 Location: London, UK
//               </h2>
//               <p>
//                 I am a Software Developer graduated from City University London
//                 with a Bachelor’s degree in Computer Science. Currently, I have
//                 one year’s experience working as a back-end developer with
//                 technologies such as C# and SQL.
//               </p>
//               <p>
//                 My journey of becoming a developer started since my first year
//                 studies at university. I really enjoyed digging into programming
//                 problems, trying to find solutions and learning something new
//                 each day. It was the same when I was working in my first job as
//                 a developer after graduating. I may have finished my studies but
//                 I remain a student as I try to learn new skills/technologies in
//                 my spare time. Take this website as an example, learning to
//                 develop skills in HTML5, CSS3, JavaScript, Next.js, React.js and
//                 Node.js.
//               </p>
//               <p>
//                 Outside of development my interests involve: volunteering for
//                 charity, playing badminton, running, gaming and listening to
//                 music.
//               </p>
//             </div>
//           </section>
//         </div>
//       </Layout>
//     );
//   }
// }

// export default Index;

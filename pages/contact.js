import Layout from "../components/Layout";
import Head from "next/head";
import { server } from "../config";

export default class extends React.Component {
  state = {};

  handleSubmit(data) {}

  render() {
    return (
      <Layout>
        <Head>
          <title>Jesal Patel ｜ Contact</title>
        </Head>
        <div className="container">
          <section>
            <div className="contact">
              <p>
                Got an opportunity for me? I am currently interested in roles
                involving database or web development.
              </p>
              <br />
              <p>Please contact me via the form below:</p>
              <div className="form-container">
                <form action={`${server}/send-email`} method="post">
                  <label>Name *</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    required
                  />
                  <label>Email *</label>
                  <input
                    type="email"
                    placeholder="Your email"
                    name="email"
                    required
                  />
                  <label>Message *</label>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    name="message"
                    required
                  />
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

// export default () => (
//   <Layout>
//     <Head>
//       <title>Jesal Patel ｜ Contact</title>
//     </Head>
//     <div className="container">
//       <section>
//         <div className="contact">
//           <p>
//             Got an opportunity for me? I am currently interested in roles
//             involving database or web development.
//           </p>
//           <br />
//           <p>Please contact me via the form below:</p>
//           <div className="form-container">
//             <form onSubmit={} method="post">
//               <label>Name *</label>
//               <input type="text" placeholder="Your name" name="name" required />
//               <label>Email *</label>
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 name="email"
//                 required
//               />
//               <label>Message *</label>
//               <textarea
//                 name="message"
//                 placeholder="Your message"
//                 name="message"
//                 required
//               />
//               <input type="submit" value="Submit" />
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   </Layout>
// );

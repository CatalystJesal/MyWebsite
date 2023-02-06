import React from "react";
import Header from "./Header";
import Navigation from "./Navigate";
import Footer from "./Footer";
import Head from "next/head";


export default function Layout(props) {


    return (
      <div>
        <Head>
          <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
          </head>
        </Head>
        <Header />
        <Navigation/>
         {props.children}
        <Footer />
      </div>
    );
  
}


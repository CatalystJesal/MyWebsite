import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import { server } from "../config";
import {v4 as uuidv4} from "uuid";

export default function Projects ({data}) {

  const [projectData, setProjectData] = useState([]);

  useEffect(function(){
      if(projectData.length == 0){
        setProjectData(data);
        
        console.log("projectData is empty")
      }

  })



  const initProjectData = () => {
    const newProjectData =   [{
      id: uuidv4(),
      name: "Dextero",
      img: "https://i.imgur.com/EFoOtqJ.png",
      description:"Developed a multi-touch mobile game for stroke patients to rehabilitate their finger coordination and dexterity skills.",
      tech: "Java, Android, LibGDX, SQLite",
      link: "https://github.com/CatalystJesal/Dextero"
    },

    {
      id: uuidv4(),
      name: "Mirror Jump",
      img: "https://i.imgur.com/Uk7sUdY.png",
      description:"Created and published a run and jump Android 2D Game using Unity Game Engine.",
      tech: "C#, Unity, Google Play Services, AdMob",
      link: "https://play.google.com/store/apps/details?id=com.MirrorJump"
    },

    {
      id: uuidv4(),
      name: "Coin Flip",
      img: "https://i.imgur.com/sv1he8W.png",
      description:"Made a simple coin flip betting application for the Ethereum Blockchain.",
      tech: "Solidity, Truffle, Ganache, Bootstrap CSS",
      link: "https://github.com/CatalystJesal/CoinFlip"
    },

    {
      id: uuidv4(),
      name: "Coin Exchange",
      img: "https://i.imgur.com/PflNcXO.png",
      description:"Created a basic coin exchange application.",
      tech: "ReactJS, HTML, CSS, Bootstrap",
      link: "https://github.com/CatalystJesal/coin-exchange"
    }

  ]

  setProjectData(newProjectData);
  }
  


    const mapData = function() {
      return projectData.map(({_id, name, img, description, tech, link}) =>{
        return (
          <div key={_id} id={_id}>
            <a className="LI-simple-link" href={link} target="_blank">
              <img src={img} />
  
              <div className="overlay noselect">
                <div className="overlay_title">{name}</div>
                <div className="overlay_description">{description}</div>
                <div className="overlay_tech">{tech}</div>
              </div>
            </a>
          </div>
        );
      
      })
    }


    return (
      <Layout>
        <Head>
          <title>Jesal Patel ｜ Projects</title>
        </Head>
        <div className="container">
          <section>
            <div className="project-description">
              <p>
                Here are some of the projects I have worked on during my spare
                time: 
              </p>
            </div>
            <div className="grid-container"> 
              {mapData()}

            </div>
          </section>
        </div>
      </Layout>
    );


}


export async function getStaticProps ()  {
  console.log("Inside getStaticProps()");
  const apiUrl = `${server}/api/projects`;
  try {
    const response = await fetch(apiUrl,
      {
        method: "GET",
        headers: {
          // update with your user-agent
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36", 
          Accept: "application/json; charset=UTF-8",
        },
      });
    const projectData = await response.json();

    return { 
      props: {
      data : projectData 
    }
  }
  } catch (ex) {
    console.log(`Unable to fetch data from"  ${apiUrl}   -   ${ex}`);
    return {   props: {
      data : [] 
    }};
  }
}

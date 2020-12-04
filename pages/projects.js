import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import {v4 as uuidv4} from "uuid";
import dbConnect from '../utils/dbConnect';
import Project from '../model/Project';

export default function Projects ({data}) {

  const [projectData, setProjectData] = useState([]);

  useEffect(function(){
      if(projectData.length == 0){
        setProjectData(data);
        
        console.log("projectData is empty")
      }

  })

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


export async function getServerSideProps(){
    await dbConnect();

    try {
    const result = await Project.find({});
    const projectData = JSON.parse(JSON.stringify(result));
  
    return {
      props: {
        data: projectData
      }
    }

  } 
  catch (ex) {
        console.log(`Unable to fetch data from" ${ex}`);
        return {   props: {
          data : [] 
        }};
  }
}
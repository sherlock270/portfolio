import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Headshot from './components/Headshot';
import MissionStatement from './components/MissionStatement';
import Project from './components/Project';
import sveza from './assets/sveza.png';
import lambdaNotes from './assets/lambda-notes.png';
import conway from './assets/conway.png';
import mud from './assets/mud.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Headshot />
        <MissionStatement />
        <Project
          title="Sveza"
          description="This was my capstone project at Lambda School. A team of 5 with varying levels of expertise
            came together and over the course of five weeks we built a message board app from the ground up. This project
            uses React and Apollo Client on the front end, Apollo Server, Express, and GraphQL on the back end with a MongoDB database."
          link="sveza.app"
          pic={sveza}
          frontLink="github.com/Lambda-School-Labs/labs-team-home/tree/labs9-master" />
        <Project
          title="Lambda Notes"
          description="This project is the culmination of the Full Stack Web portion of the Lambda School curriculum.
            It uses a React front end to display saved notes, the back end is built with Node and Express. It uses Knex and SQLite 3 for the database."
          link="charles-notes.netlify.com"
          pic={lambdaNotes}
          frontLink="github.com/sherlock270/front-end-project-week"
          backLink="github.com/sherlock270/back-end-project-week" />
        <Project
          title="Conway's Game of Life"
          description="Recreated Conway's Game of Life as the culmination of the Computer Science portion of the Lambda School curriculum.
            This is a React App using an HTML Canvas element for animation. I designed the algorithms to implement the rules of Conway's Game of Life."
          link="charles-game-of-life.netlify.com"
          pic={conway}
          frontLink="github.com/sherlock270/Conways-Life" />
        <Project
          title="Lambda MUD"
          description="Created a very basic Multi-user dungeon using React, Node, Python, and Django with a SQLite3 database. Used the Pusher
          library for communications between players."
          link="charles-mud.netlify.com"
          pic={mud}
          frontLink="github.com/sherlock270/LambdaMUD-Client"
          backLink="github.com/sherlock270/LambdaMUD-Project" />
      </div>
    );
  }
}

export default App;

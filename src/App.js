import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Headshot from './components/Headshot';
import MissionStatement from './components/MissionStatement';
import Project from './components/Project';
import ContactForm from './components/ContactForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Headshot />
        <MissionStatement />
        <Project
          title="Sveza"
          description="Capstone project. Super awesome"
          link="sveza.app" />
        <Project
          title="Lambda Notes"
          description="Combination of front end and back end projects"
          link="link to lambda notes" />
        <Project
          title=""
          description=""
          link="" />
        <ContactForm />
      </div>
    );
  }
}

export default App;

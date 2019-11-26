import React from 'react';
import './App.css';
import Header from './Components/Header.js';
import About from './Components/About.js';
import Experience from './Components/Experience.js';
import Education from './Components/Education.js';
import Skills from './Components/Skills.js';
import 'bootstrap/dist/css/bootstrap.min.css'; //fundamental import in React!!


const jobExperience = [
  {
    position: 'Social Media and Marketing/Sales/Adminstration',
    company: 'Evobikes Online',
    year: 'February 2018 - Present',
    duties: 'Sales, Switchboard, handling of couriers, stationary, loading products on the backend of our website, processing orders, processing waybills, admin '
  },

  {
    position: 'Workshop Manager', 
    company: 'Giant Durbanville - Bicycle Shop',
    year: 'June 2017 - January 2018',
    duties: 'Managing the mechanics, handling the day to day workings of the workshop, customer service',
  },

  {
    position:'Other experience: Assistance Business Administrator, Day-to-day business management of a team,Business owner',
    company: 'Various',
    year: '2011-2017'
  }
]

const education = [
  {
    qualification: 'National Senior Certificate (Matric Exemption)',
    institution: 'Fairmont High School, Durbanville',
    year: '2009',
  },

  {
    qualification: 'Hairdressing International diploma - NQF4',
    institution: 'Carlton Hair International',
    year: '2010',
  },

  {
    qualification: 'Full Stack Web Developer Bootcamp',
    institution: 'Hyperiondev',
    year: '2019',
  }
]

const skills = ['HTML', 'CSS', 'JavaScript', 'GIT', 'React', 'Node.js', 'Express.js', 'JQuery', 'CommandLine Interface', 'Wordpress']

function App() {
  return (
    <div className="App">
      <div className="header_flex">
        <Header name="Chelsea Anne Schnider" title="Aspiring Developer" />
        <About about="I’m Chelsea and I am a novice developer currently honing my skills in order to become a proficient full-stack web developer. 
                      After spending some time in a variety of industries and different businesses, I realised that almost every business requires a solid IT infrastructure in order to be successful. I also noted that almost every business can increase its efficiency and profitability by building the necessary systems and leveraging off software opportunities.
                      The creative satisfaction that I get from building solutions that allow businesses to thrive, while also constantly improving the valuable skillset that is web-development, I look forward to having the opportunity to join a fun and energising work environment where I can continue to learn and grow within a team of like-minded individuals."
        />
      </div>
      <Experience experience={jobExperience} />
      <Education education={education} />
      <Skills skills={skills} />
    </div>
  );
};

export default App;
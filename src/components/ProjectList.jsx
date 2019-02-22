import React from 'react';
import Project from './Project';
import nba from '../assets/images/nba_project.png';
import doctor from '../assets/images/doctor_project.png';
import furniture from '../assets/images/furniture_project.png';
import tv from '../assets/images/tv_project.png';

const projectsList = [
  {
    title: 'NBA Angular Rebuild',
    link: 'https://angular-nba-rebuild.firebaseapp.com/',
    description:
      'Rebuild of NBA.com using Angular, dynamic routing and services',
    img: nba
  },
  {
    title: 'Better Doctor App',
    link: 'https://github.com/hwisoo/js-better-doctor-api/',
    description:
      'A web app that outputs a list of relevant doctors and the details of each doctor using API calls',
    img: doctor
  },
  {
    title: 'Furniture App',
    link: 'https://github.com/hwisoo/furniture-store',
    description:
      'A web app that outputs a list of furnitures by type and item details for each item using API calls',
    img: furniture
  },
  {
    title: 'TV Runtime App',
    link: 'https://github.com/hwisoo/tv-runtime-api',
    description:
      'A simple web app, that takes the user input tv genre and outputs a list of relevant shows sorted by popularity using TV database API',
    img: tv
  }
];

function ProjectsList() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="grid">
        {projectsList.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsList;

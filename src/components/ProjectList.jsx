import React from 'react';
import Project from './Project';
import nba from '../assets/images/nba_project.png';

const projectsList = [
  {
    title: 'NBA Angular Rebuild',
    link: 'https://angular-nba-rebuild.firebaseapp.com/',
    description:
      'Rebuild of NBA.com using Angular, dynamic routing and services',
    img: nba
  }
];

function ProjectsList() {
  return (
    <div>
      {projectsList.map((project, index) => (
        <Project
          title={project.title}
          link={project.link}
          description={project.description}
          img={project.img}
          key={index}
        />
      ))}
    </div>
  );
}

export default ProjectsList;

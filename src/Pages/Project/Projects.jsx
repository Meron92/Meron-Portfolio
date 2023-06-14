import React from 'react';
import './projects.css';

import Bröllop from '../../Assets/bröllopsfoto.png'; 
import Hamster from '../../Assets/hamster.png';
import Hangman from '../../Assets/hangman.png';
import Interval from '../../Assets/interval.png';
import Planets from '../../Assets/planet.png';
import Stickan from '../../Assets/stickan.png';
import Whereit from '../../Assets/whereit.png';

const projectsData = [ 
  {
    name: 'Bröllops Fotografen',
    image: Bröllop,
    githubLink: 'https://github.com/Meron92/inlamning-dynamisk',
  },
  {
    name: 'HamsterWars',
    image:  Hamster,
    githubLink: 'https://github.com/Meron92/HamsterWar-Fullstack',
  },
  {
    name: 'Hangman',
    image:  Hangman,
    githubLink: 'https://github.com/Meron92/hangman',
  },
  {
    name: 'Interval',
    image:  Interval,
    githubLink: 'https://github.com/Meron92/interval-app-main',
  },
  {
    name: 'Planets',
    image:  Planets,
    githubLink: 'https://github.com/Meron92/planets',
  },
  {
    name: 'Stickan',
    image:  Stickan,
    githubLink: 'https://www.figma.com/proto/z74ZfrWorawfRfSzkDRBOm/Stickan-uthyrning?node-id=17-834&starting-point-node-id=17%3A834',
  },
  {
    name: 'Where it at',
    image:  Whereit,
    githubLink: 'https://github.com/Meron92/Where-its-at',
  },
 
];

export default function Projects() {
  return (
    <div className='projectsWrapper' id="projects">
        <h2>My Projects</h2>
        <div className="projects-container">
            {projectsData.map((project, index) => (
                <div key={index} className="project-card">
                    <img src={project.image} alt={project.name} />
                    <div className="project-info">
                        <h3>{project.name}</h3>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className='textGithub'>View on Github</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

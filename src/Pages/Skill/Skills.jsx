import React from 'react';
import './skills.css';

const Skill = ({ name, level }) => (
  <div className="skill-container">
    <div className="skill-name">{name}</div>
    <div className="skill-bar">
      <div className="skill-level" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

export default function Skills() {
  const skills = [
    { name: 'Javascript', level: 90 },
    { name: 'Typescript', level: 80 },
    { name: 'React', level: 85 },
    {name: 'HTML', level: 90},
    {name: 'CSS', level: 90},
    {name: 'Git', level: 80},
    {name: 'MongoDb', level: 80},
    {name: 'Node.js', level: 70},
    {name: 'Redux', level: 65},
    {name: 'Figma', level: 75},
    {name: 'Tailwind', level: 85},
    
  ];

  return (
    <div className='skillsWrapper' id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
}

import React from 'react'
import Pic from '../../Assets/CV.jpg'
import './about.css'

export default function About() {
  return (
    <div className='wrapper' id="about">
        <div className="intro">
          <h3>Hi, I'm</h3>
          <h1>Meron Mekonnen</h1>
        </div>
        <div className='content-flex'>
            <div className='pic'>
                <img className='img' src={Pic} alt="Meron Mekonnen" />
            </div>
            <div className='about-text'>
                <h4>About Me</h4>
                <p>
                After many years as a warehouse employee, I made the decision to
          finally apply to the program I had been eyeing for a long time,
            frontend developer at NBI/Handelsakademin, and am now in my second
            and final academic year.
             <br />
            <br />
            The first academic year has been extremely educational and with each
            passing day, I became even more certain that I have made the right
            decision and that it is within this industry that I want to continue
            to develop within.
             <br />
             <br />I have the drive and desire within me to constantly continue
             to develop. The qualities I bring to you are innovative thinking,
             drive, problem solver, and the desire to learn.
                </p>
            </div>
        </div>
    </div>
  );
}


import React from 'react';

import {FaCheck} from 'react-icons/fa'

function Skills() {
  return (
    <div className="skills-card">
      <div className="profile-main">
        <h1 className="skills-name">Skills</h1>

        {/* <h4>Elk River, MN jgoth23@gmail.com</h4> */}

        <p className="ed-body">Programming languages & tools</p>
        
        <ul className="dates">
          <li className="checklist"><FaCheck /> html/css</li>
          <li className="checklist"><FaCheck /> JavaScript</li>
          <li className="checklist"><FaCheck /> jQuery</li>
          <li className="checklist"><FaCheck /> React</li>
          <li className="checklist"><FaCheck /> Redux</li>
          <li className="checklist"><FaCheck /> Node.js</li>
          <li className="checklist"><FaCheck /> Express</li>
          <li className="checklist"><FaCheck /> PostgreSQL</li>
          <li className="checklist"><FaCheck /> Python</li>
          <li className="checklist"><FaCheck /> Material-ui</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;

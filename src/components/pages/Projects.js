import React from 'react';
import * as AiIcons from 'react-icons/ai';
// import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="ed-card">
      <div className="profile-main">
        <h1 className="pro-name">Projects</h1>
        <h3 className="pro-position">Coach's Tracker</h3>

        <p className="pro-body">FullStack(mobile/web)</p>
        <p className="pro-body">Technologies I used</p>
        <p className="pro-body">React, Redux</p>
        <p className="pro-details">
          Heres some info might change because the font color might be off but
          we'll see what ends up being the result in the end just gonna try and
          let it fill up then gp from there
        </p>
        <h4 className="pro-position">Nature of the North</h4>
        <p className="pro-body">FullStack(mobile/web) </p>
        <p className="pro-body">Technologies I used </p>
        <p className="pro-details">september 2009 - may 2010</p>
      </div>

      {/* <div className="home">
        <div className="profile-sidebar"></div>
        <img src="" alt=""></img>
        <ul class="social-list">
          <li className="social-item">
            <a className="social-link" href="#"></a>
            <Link to="#" className="menu-bars">
              <AiIcons.AiFillGithub />
            </Link>
          </li>
          <li className="social-item">
            <a className="social-link" href="#"></a>
            <Link to="#" className="menu-bars">
              <AiIcons.AiFillLinkedin />
            </Link>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

//     {/* /* <div className="education">
//     <h1 className="ed-position">Education</h1>
//     <div></div>
//     <p className="ed-name">Prime Digital Academy</p>
//       <h1></h1>
//     </div>
//     </div>
//   );
// } */ */}

export default Projects;

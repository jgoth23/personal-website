import React from 'react';
import * as AiIcons from 'react-icons/ai';
// import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="ed-card">
      <div className="profile-main">
        <h1 className="ed-name">Projects</h1>
        <h3 className="ed-position">Coach's Tracker</h3>
        

        <p className="ed-body">Full Stack developer</p>
        <p className="dates">December 2020 - April 2021</p>
        <h4 className="ed-position">Nature of the North</h4>
        <p className="ed-body">graphic design</p>
        <p className="dates">september 2009 - may 2010</p>
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
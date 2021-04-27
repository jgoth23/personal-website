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
        <p className="pro-body">
          React, Redux, JavaScript, Express, PostgreSQL, CSS
        </p>
        <p className="pro-details">
          Coaches tracker is a web app built as a scheduling and booking program
          for coaches and athletes to have a direct line of communication. A
          user can login and schedule an event with their coach and the coach
          can leave feedback for the user to view upon login.
        </p>
        <h4 className="pro-position">Nature of the North</h4>
        <p className="pro-body">FullStack(mobile/web) </p>
        <p className="pro-body">Technologies I used </p>
        <p className="pro-details">
          Nature Of The North is a bouldering gym that myself and my group built
          an app for their bouldering league. This app is used by the members of
          the league to keep track of scores, handicaps, and team scores. A
          leaderboard tracks all the scores and shows current leaders after each
          week's event. 
        </p>
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

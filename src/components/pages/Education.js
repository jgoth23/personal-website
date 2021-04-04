import React from 'react'
import * as AiIcons from 'react-icons/ai';
// import { Link } from 'react-router-dom';

function Education() {
  return (
   
      <div className="ed-card">
      <div className="profile-main">
        <h1 className="ed-name">Education</h1>
        <h3 className="ed-position">prime digital academy</h3>
        {/* <h4>Elk River, MN jgoth23@gmail.com</h4> */}

        <p className="ed-body">
        Full Stack developer
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

export default Education;
import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="card">
      <div className="profile-main">
        <h1 className="profile-name">Johnny Goth</h1>
        <h3 className="profile-position">Software Engineer</h3>
        {/* <h4>Elk River, MN jgoth23@gmail.com</h4> */}

        <p className="profile-body">
          I am Johnny Goth, an enthusiastic, self-motivated, and confident
          software developer residing in Elk River, MN. I started a rigorous coding program at Prime Digital Academy in
          Minneapolis. I am now pursuing positions within companies here in the
          Twin Cities to build my career as a software developer.
        </p>
      </div>
      <div className="home">
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
      </div>
    </div>
  );
}

export default Home;

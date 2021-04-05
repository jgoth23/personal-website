import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-card">
      <div className="profile-main">
        <h1 className="profile-name">Johnny Goth</h1>
        <h3 className="profile-position">Software Engineer</h3>
        {/* <h4>Elk River, MN jgoth23@gmail.com</h4> */}

        <p className="profile-body">
          I am Johnny Goth, an enthusiastic, self-motivated, and curious
          software developer. I started a full immersion coding program at Prime
          Digital Academy in Minneapolis. I currently seeking a chance to
          showcase all I've learned, and will continue to learn as I start my
          journey as a software developer.
        </p>
      </div>
      <div className="home">
        <div className="profile-sidebar"></div>
        <img src="" alt=""></img>
        <ul class="social-list">
          <li className="social-item">
            <a className="social-link" href="https://github.com/jgoth23/"></a>
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

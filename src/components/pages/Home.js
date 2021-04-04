import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="card">
      <div className="profile-main">
        <h1 className="profile-name">Johnny Goth</h1>
        <h3 className="profile-position">Software Engineer</h3>
        <p className="profile-body">
          sdkmsdlkf;ksdf;lkdsjsljg;lskg;lkas ds.nds.m,nds.fnm
        </p>
      </div>
      <div className="home">
        <div className="profile-sidebar"></div>
        <img src="" alt=""></img>
        <ul>
          <li>
            <a href="#"></a>
            <Link to="#" className="menu-bars">
              <AiIcons.AiFillGithub />
            </Link>
          </li>
          <li>
            <a href="#"></a>
            <Link to="#" className="menu-bars">
              <AiIcons.AiFillLinkedin />
            </Link>
          </li>
          <li>
            <a href="#"></a>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default Home;

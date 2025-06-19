import React from 'react';
import './Home.css';
import GifText_Box from '../Components/GifText_Box';
import proj1 from '../assets/bandicam 2025-06-19 17-16-09-300.mp4'
import proj2 from '../assets/bandicam 2025-06-19 17-19-54-034.mp4'
import proj3 from '../assets/bandicam 2025-06-19 17-40-56-028.mp4'

function Home() {
  return (
    <div className="home_box">
      <div className="info_home">
        <div className="zag">
          <GifText_Box />
        </div>
      </div>
      <div className="projects">
        <div className="projects_box">
          <h1>～•Проекти•～</h1>
          <div className="projectLink">
            <h3><a href={proj1}>"Dragon Adventures Shop"</a></h3>
            <h3><a href={proj2}>"Book Store"</a></h3>
            <h3><a href={proj3}>"Travel Website"</a></h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

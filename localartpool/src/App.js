import React from 'react';

import arrow from './images/arrow-right.svg'
import './App.scss';

import imgSmile from './images/smile.png'
import imgCool from './images/cool.png'


function App() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner">
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Reliving the burden</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">of desease caused</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviors.</div>
                </div>
              </h1>
              <p>Better treats serious before you move monk style is mentaly strong </p>
              <div className="btn-row">
                <button className="explore-button">
                  Explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="arrow" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div class="hero-images">
            <div class="hero-images-inner">
              <div class="hero-image smile">
                <img src={imgSmile} alt="smile" />
              </div>
              <div class="hero-image cool">
                <img src={imgCool} alt="cool" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

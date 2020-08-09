import React, { useRef, useEffect } from 'react';
import gsap from 'gsap'
import { TimelineMax, Power3 } from "gsap";
import './App.scss';

//Assets
import imgSmile from './images/smile.png'
import imgCool from './images/cool.png'
import arrow from './images/arrow-right.svg'

function App() {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  let tl = gsap.timeline({delay: .8});

    useEffect(() => {
      //Images Vars
      const smileImage = images.firstElementChild;
      const coolImage = images.lastElementChild;

      //Content vars
      const headlineFirst = content.children[0].children[0];
      const headlineSecond = headlineFirst.nextSibling;
      const headlineThird = headlineSecond.nextSibling;
      const contentP = content.children[1];
      const contentButton = content.children[2]

      //REmove init flash
      gsap.to(app, 0, {css: {visibility: 'visible'}})
      console.log(images)

      //Images Animation
      tl.from(smileImage, 1.2, {y: 1280, ease: Power3.easeOut}, 'start')
        .from(smileImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
        .from(coolImage, 1.2, {y: 1280, ease: Power3.easeOut}, .2)
        .from(coolImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)

        //Content Animation
        tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1, {
          y: 44,
          ease: Power3.easeOut,
          delay: .8
        }, .15, 'start')
        .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
        .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)

    }, [tl])

  return (
    <div className="hero" ref={el => app = el}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
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
          <div className="hero-images">
            <div className="hero-images-inner" ref={el => images = el}>
              <div className="hero-image smile">
                <img src={imgSmile} alt="smile" />
              </div>
              <div className="hero-image cool">
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

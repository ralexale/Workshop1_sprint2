import React from 'react';
import './styles.scss';

//DESKTOP IMAGE
import img1 from '../assets/img/desktop/image-deep-earth.jpg';
import img2 from '../assets/img/desktop/image-night-arcade.jpg';
import img3 from '../assets/img/desktop/image-soccer-team.jpg';
import img4 from '../assets/img/desktop/image-grid.jpg';
import img5 from '../assets/img/desktop/image-from-above.jpg';
import img6 from '../assets/img/desktop/image-pocket-borealis.jpg';
import img7 from '../assets/img/desktop/image-curiosity.jpg';
import img8 from '../assets/img/desktop/image-fisheye.jpg';

//MOBILE IMAGE
import imgMobile1 from '../assets/img/mobile/image-deep-earth.jpg';
import imgMobile2 from '../assets/img/mobile/image-night-arcade.jpg';
import imgMobile3 from '../assets/img/mobile/image-soccer-team.jpg';
import imgMobile4 from '../assets/img/mobile/image-grid.jpg';
import imgMobile5 from '../assets/img/mobile/image-from-above.jpg';
import imgMobile6 from '../assets/img/mobile/image-pocket-borealis.jpg';
import imgMobile7 from '../assets/img/mobile/image-curiosity.jpg';
import imgMobile8 from '../assets/img/mobile/image-fisheye.jpg';

//vr image

import imgVr from '../assets/img/desktop/image-interactive.jpg';
import imgVrmobile from '../assets/img/mobile/image-interactive.jpg';
const vrImgDesktop = imgVr;
const vrmobile = imgVrmobile;

const Galery = () => {
  const arrayCard = [
    {
      image: img1,
      title: 'DEEP EARTH',
    },
    {
      image: img2,
      title: 'NIGTH ARCADE',
    },
    {
      image: img3,
      title: 'SOCCER TEAM VR',
    },
    {
      image: img4,
      title: 'THE GRID',
    },
    {
      image: img5,
      title: 'FROM UP ABOVE VR',
    },
    {
      image: img6,
      title: 'POCKET BOREALIS',
    },
    {
      image: img7,
      title: 'THE CURIOSITY',
    },
    {
      image: img8,
      title: 'MAKE IT FISHEYE',
    },
  ];

  const arrayMobile = [
    {
      image: imgMobile1,
      title: 'DEEP EARTH',
    },
    {
      image: imgMobile2,
      title: 'NIGTH ARCADE',
    },
    {
      image: imgMobile3,
      title: 'SOCCER TEAM VR',
    },
    {
      image: imgMobile4,
      title: 'THE GRID',
    },
    {
      image: imgMobile5,
      title: 'FROM UP ABOVE VR',
    },
    {
      image: imgMobile6,
      title: 'POCKET BOREALIS',
    },
    {
      image: imgMobile7,
      title: 'THE CURIOSITY',
    },
    {
      image: imgMobile8,
      title: 'MAKE IT FISHEYE',
    },
  ];
  return (
    <>
      <section className="galery__container">
        <div class="vrContainer" id="vrContainer">
          <figure className="galery__vrimg">
            <img className="vrimg__desktop" src={vrImgDesktop} alt="vrImg" />
            <img className="vrimg__mobile" src={vrmobile} alt="vrImg" />
          </figure>
          <div class="leader">
            <h2>
              THE LEADER IN <br />
              INTERACTIVE VR
            </h2>
            <p>
              Founded in 2011,Loopstudios has been prducing world-class virutal
              reality projects for some of the best companies around the globle.
              Our award-winnig creations have transformed businesses through
              digital experiences that bind to their band
            </p>
          </div>
        </div>

        <article className="title__galery">
          <h2>OUR CREATIONS</h2>
          <button>SEE ALL</button>
        </article>

        <div className="card__container">
          {arrayCard.map((item, index) => (
            <article className="main__article" key={index}>
              <figure>
                <img src={item.image} alt={item.title} />
                <div className="img__gradient"></div>
                <h3>{item.title}</h3>
              </figure>
            </article>
          ))}
        </div>

        <div className="cardmobile__container">
          {arrayMobile.map((item, index) => (
            <article className="main__article" key={index}>
              <figure>
                <img className="img" src={item.image} alt={item.title} />
                <div className="img__gradient"></div>
                <h3>{item.title}</h3>
              </figure>
            </article>
          ))}
        </div>
        <article className="btn__mobile">
          <button>SEE ALL</button>
        </article>
      </section>
    </>
  );
};

export default Galery;

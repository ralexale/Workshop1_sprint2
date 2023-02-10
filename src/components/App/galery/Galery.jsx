import React, { useState } from 'react';
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

const Galery = () => {
  const [responsive, setResponsive] = useState(false);

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
      <div>
        <h2>OUR CREATIONS</h2>
        <button>SEE ALL</button>
      </div>

      <div className="card__contaier">
        {arrayCard.map((item, index) => (
          <article className="main__article" key={index}>
            <h3>{item.title}</h3>
            <figure>
              <img src={item.image} alt={item.title} />
            </figure>
          </article>
        ))}
      </div>
    </>
  );
};

export default Galery;

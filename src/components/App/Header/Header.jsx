import React from 'react'
import './styles.scss';

import logo from '../assets/img/logo.svg';

const logoheader = logo

export const Header = () => {
  const arraylinks = [
    {
      link: "About",
    },
    {
      link: "Careers",
    },
    {
      link: "Events",
    },
    {
      link: "Products",
    },
    {
      link: "Support",
    },
  ];

  return (
    <>
      <div className="Container">
        <div className="links">
          <img src={logoheader} alt="logo" />
          <div>
            {arraylinks.map((item, index) => (
              <a href="">{item.link}</a>

            ))}
          </div>
        </div>
        <p className='text'>
          IMMERSIVE EXPERIENCES <br /> THAT DELIVER
        </p>
      </div>
    </>
  );
}
export default Header;



import React, { useState } from "react";
import "./styles.scss";

import logo from "../assets/img/logo.svg";
import iconhamburguer from "../assets/img/icon-hamburger.svg";
import closeIcon from "../assets/img/icon-close.svg";
const logoheader = logo;
const hamburger = iconhamburguer;
const closeIconm = closeIcon;

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

  const [slideBar, setslideBar] = useState(false);

  const openMenu = () => {
    if (slideBar == false) {
      setslideBar(true);
    } else setslideBar(false);
  };

  return (
    <>
      <section className={`menu__mobile ${slideBar == false ? "hidden" : ""}`}>
        <figure className="slide__header">
          <img src={logoheader} alt="logo" />
          <img onClick={openMenu} src={closeIconm} alt="close" />
        </figure>
        {arraylinks.map((item, index) => (
          <a key={index} href="#">
            {item.link}
          </a>
        ))}
      </section>
      <div className="Container">
        <section className="nav__container">
          <nav className="navContainer">
            <figure>
              <img src={logoheader} alt="logo" />
            </figure>
            <div className="links">
              <div className="links__navs">
                {arraylinks.map((item, index) => (
                  <a key={index} href="#">
                    {item.link}
                  </a>
                ))}
              </div>
            </div>
            <img
              className="menu__nav"
              onClick={openMenu}
              src={hamburger}
              alt=""
            />
          </nav>
          <article className="text__container">
            <p className="text">
              IMMERSIVE EXPERIENCES <br /> THAT DELIVER
            </p>
          </article>
        </section>
      </div>
    </>
  );
};
export default Header;

{
  /* {`.links__navs ${slideBar == false ? "hidden" : ""}`} */
}

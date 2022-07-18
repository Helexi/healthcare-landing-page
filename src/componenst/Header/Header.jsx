import Marquee from "react-fast-marquee";
import React from "react";
import './Header.css'

export const Header = ({ showBugreg }) => {
  return (
    <header className="header">
      <div className="header-marquee-wrap">
        <div className="header-marquee">
          <Marquee
            gradientWidth={0}
            className="marquee"
          >
            <div className="header-flag">We ship inside the US only </div>
            <div className="header-flag">We ship inside the US only </div>
            <div className="header-flag">We ship inside the US only </div>
            <div className="header-flag">We ship inside the US only </div>
            <div className="header-flag">We ship inside the US only </div>
            <div className="header-flag">We ship inside the US only </div>
            <div className="header-flag">We ship inside the US only </div>
            <div className="header-flag">We ship inside the US only </div>
          </Marquee>
        </div>
      </div>
      <div className="header__menu">
        <ul className="header__menu-ul">
          <li className="header__menu-li">
            <a
              className="header__menu-link"
              href="/"
            >
              About
            </a>
          </li>
          <li className="header__menu-li">
            <a
              className="header__menu-link"
              href="/"
            >
              How it works
            </a>
          </li>
          <li className="header__menu-li">
            <a
              className="header__menu-link"
              href="/"
            >
              Blog
            </a>
          </li>
          <li className="header__menu-li">
            <a
              className="header__menu-link"
              href="/"
            >
              Contacts
            </a>
          </li>
        </ul>
        <div className="header__menu-buttons">
          <button className="header__menu-kit button">
            Get a Kit 📦
          </button>
          <button 
            className="header__menu-burger button"
            onClick={showBugreg}
          />
          <button 
            className="header__menu-user button"
          />
        </div>
      </div>
    </header>
  )
}
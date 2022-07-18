import React from "react";
import './BurgerMenu.css';

export const BurgerMenu = ({ show, close }) => {
  return (
    <>
      {show ?
        (<div className="burgerMenu-wrap">
          <div className="burgerMenu">
            <ul className="burgerMenu__menu-ul">
              <li className="burgerMenu__menu-li">
                <a
                  className="burgerMenu__menu-link"
                  href="/"
                >
                  About
                </a>
              </li>
              <li className="burgerMenu__menu-li">
                <a
                  className="burgerMenu__menu-link"
                  href="/"
                >
                  How it works
                </a>
              </li>
              <li className="burgerMenu__menu-li">
                <a
                  className="burgerMenu__menu-link"
                  href="/"
                >
                  Blog
                </a>
              </li>
              <button
                className="burgerMenu__menu-user button"
              />
              <div onClick={close} className="burgerMenu__close"></div>
            </ul>
          </div>
        </div>
        ) : null}
    </>
  )
}
import React from "react";
import './GetStarted.css';
import blueCross from '../../../img/blue-cross-blue-shield-vector-logo.png';
import united from '../../../img/unitedhealthcare-vector-logo-2021.png';
import cigna from '../../../img/Cigna.png';
import aetna from '../../../img/aetna.png';

export const GetStarted = () => {
  return (
    <div>
      <div className="getStarted-container">
        <div className="getStarted-wrap">
          <div className="getStarted">
            <div className="getStarted-wrapper">
              <p className="getStarted__emphasize">Emphasize PrEP</p>
              <div className="getStarted__lab-visit">
                Replace awkward lab visits with at-home
                {' '}
                <span className="getStarted__blue">
                  STI testing
                </span>
                {' '}
                and
                {' '}
                <span className="getStarted__red">
                  treatment
                </span>.
              </div>
              <button className="getStarted__button button">
                Get started
              </button>
            </div>
            <div className="getStarted__img"></div>
          </div>
        </div>
      </div>
      <div className="getStartedButtons-container">
        <div className="getStartedButtons-wrap">
          <div className="getStartedButtons">
            <div className="getStartedButtons-logo">
              <a className="getStartedButtons-logo__blueCross logo-flex" href="/">
                <img src={blueCross} alt="blueCross" />
              </a>
              <a className="getStartedButtons-logo__united logo-flex" href="/">
                <img src={united} alt="blueCross" />
              </a>
              <a className="getStartedButtons-logo__cigna logo-flex" href="/">
                <img src={cigna} alt="blueCross" />
              </a>
              <a className="getStartedButtons-logo__aetna logo-flex" href="/">
                <img src={aetna} alt="blueCross" />
              </a>
            </div>
            <div className="getStartedButtons-button-wrap">
              <button className="getStartedButtons-button button">
                Check insurance
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
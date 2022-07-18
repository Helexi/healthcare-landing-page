import React from "react";
import './Mission.css';

export const Mission = () => {
  return (
    <div className="mission-container">
      <div className="mission-wrap">
        <div className="mission">
          <div className="mission__head">
            Our mission is simple: to make healthcare accessible
            {' '}
            <span className="mission__red">
              accessible,
            </span>
            {' '}
            <span className="mission__salmon">
              affordable,
            </span>
            {' '}
            and
            {' '}
            <span className="mission__blue">
              easy to use
            </span>.
          </div>
          <div className="mission__title">
            <p className="misson__p">
              STI rates are hitting record numbers, yet testing is lacking.
              We want to fix this by providing a more discreet and convenient
              way of maintaining sexual health for you. The easier it is to
              access and learn about your health, the easier it is for you to
              take meaningful action, whenever you need it.
            </p>
          </div>
          <button className="mission-button button">
            Get started
          </button>


        </div>
        <div className="mission__img">
        </div>
      </div>
    </div>
  )
}
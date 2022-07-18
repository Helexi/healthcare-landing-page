import React from "react";
import './Slide.css';

export const Slide = ({
  slideEmphasize,
  slideHeader,
  slideSalmon,
  slideTitle,
  slideImg }) => {
  return (
    <div className="slide-container">
      <div className="slide-wrap">
        <div className="slide">
          <p className="slide__emphasize">{slideEmphasize}</p>
          <div className="slide__header">
            {slideHeader}
            {' '}
            <span className="slide__salmon">
              {slideSalmon}
            </span>
          </div>
          <div className="slide__title">
            <div className="slide__p">
              {slideTitle}
            </div>
          </div>
        </div>
        <div className="slide__img">
          <img className="slide__picture" src={slideImg} alt="slideImg" />
        </div>
      </div>
    </div>
  )
}
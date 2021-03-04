import React from "react";
import PropTypes from "prop-types";
import "./hero.scss";

Hero.propTypes = {};

function Hero(props) {
  return (
    <div className="Hero">
      <h2 className="title">Your own books store</h2>
      <p>Get your favourite books from our wide range of books.</p>
    </div>
  );
}

export default Hero;

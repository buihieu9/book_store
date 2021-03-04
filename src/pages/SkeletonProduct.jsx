import React from "react";
import PropTypes from "prop-types";
import "../scss/pages/skeletonProduct.scss";
SkeletonProduct.propTypes = {};

function SkeletonProduct(props) {
  return (
    <div className="skeleton">
      <div className="skeleton__img loading"></div>
      <div className="skeleton__text loading"></div>
      <div className="skeleton__text loading"></div>
    </div>
  );
}

export default SkeletonProduct;

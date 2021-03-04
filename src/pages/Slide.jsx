import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "antd";
import "../scss/pages/slide.scss";

import Slider from "react-slick";
import Layout, { Content } from "antd/lib/layout/layout";
const slideImg = [
  "https://res.cloudinary.com/dofqucuyy/image/upload/v1609159248/Books/3778871_wnzhse.jpg",
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/200",
  "https://res.cloudinary.com/dofqucuyy/image/upload/v1609159248/Books/3778871_wnzhse.jpg",
  "https://res.cloudinary.com/dofqucuyy/image/upload/v1609159248/Books/3778871_wnzhse.jpg",
  "https://res.cloudinary.com/dofqucuyy/image/upload/v1609159248/Books/3778871_wnzhse.jpg",
  "https://res.cloudinary.com/dofqucuyy/image/upload/v1609159248/Books/3778871_wnzhse.jpg",
];
var settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
function Slide(props) {
  return (
    <Layout style={{ padding: "24px 0" }}>
      <Content>
        <Slider style={{ width: "100%" }} {...settings}>
          {slideImg.map((value, index) => (
            <div key={index} className="box-img">
              <img src={value} alt="logo" style={{ margin: "0 auto" }} />
            </div>
          ))}
        </Slider>
      </Content>
    </Layout>
  );
}

export default Slide;

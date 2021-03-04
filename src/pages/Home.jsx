import React from "react";
import Hero from "./Hero";
import { Carousel } from "antd";
import Slide from "./Slide";
import { Content } from "antd/lib/layout/layout";
import Main from "./Main";

function Home(props) {
  return (
    <>
      <Hero />
      <Content style={{ padding: "0 20px" }}>
        <Slide />
        <Main />
      </Content>
    </>
  );
}

export default Home;

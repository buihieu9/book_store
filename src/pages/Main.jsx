import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import Menu from "./Menu";
import "../scss/pages/main.scss";
import ShowListCard from "./ShowListCard";
import { useDispatch, useSelector } from "react-redux";
import booksApi from "../api/bookApi";
import { addBooks, getList } from "../Actions/bookAction";
import { loadingFiler } from "../Actions/loadingAction";
import BtnLoad from "./BtnLoad";
import user from "../Reducers/user";
Main.propTypes = {};

function Main(props) {
  const [lengthData, setLenghtData] = useState(0);
  const dispatch = useDispatch();
  const checkCategory = useSelector((state) => state.listBook.category);
  const dataNow = useSelector((state) => state.listBook);

  useEffect(() => {
    (async function getFullData() {
      let fullData = await booksApi.getMany({
        filter: checkCategory,
      });
      setLenghtData(fullData.length);
    })();
  }, [checkCategory]);

  useEffect(() => {
    (async function getData() {
      let data = await booksApi.getMany({
        filter: null,
        page: 1,
        limit: 8,
      });
      dispatch(getList({ data, category: null }));
    })();
    let timeOut = setTimeout(() => {
      dispatch(loadingFiler(false));
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  return (
    <>
      <Row className="main">
        <Col lg={{ span: 6 }} xl={{ span: 4 }}>
          <Menu />
        </Col>
        <Col
          className="col-top"
          lg={{ span: 17, offset: 1 }}
          xl={{ span: 19, offset: 1 }}
        >
          <ShowListCard />
          {lengthData > 8 && dataNow.listBook.length < lengthData - 1 && (
            <Row justify="center">
              <BtnLoad category={checkCategory} />
            </Row>
          )}
        </Col>
      </Row>
    </>
  );
}

export default Main;

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "./CardItem";
import { Col, Row } from "antd";
import SkeletonProduct from "./SkeletonProduct";


function ShowListCard(props) {
  const totalSkeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  const isLoading = useSelector((state) => state.isLoading);
  const bookList = useSelector((state) => state.listBook);

  return (
    <Row gutter={[24, 24]}>
      {isLoading
        ? totalSkeleton.map((value) => (
            <Col
              xs={{ span: "24" }}
              sm={{ span: "12" }}
              md={{ span: "8" }}
              xl={{ span: "6" }}
              key={value}
            >
              <SkeletonProduct />
            </Col>
          ))
        : bookList.listBook.map((value) => (
            <Col
              xs={{ span: "24" }}
              sm={{ span: "12" }}
              md={{ span: "8" }}
              xl={{ span: "6" }}
              key={value._id}
            >
              <CardItem bookList={value} loading={isLoading} />
            </Col>
          ))}
    </Row>
  );
}

export default ShowListCard;

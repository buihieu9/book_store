import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Card, Skeleton } from "antd";
import Meta from "antd/lib/card/Meta";
import { Link } from "react-router-dom";

CardItem.propTypes = {};

function CardItem({ bookList, loading }) {
  return (
    <Link to={`/books/${bookList._id}`}>
      <Card
        hoverable
        style={{ padding: "20px", height: "100%" }}
        // bodyStyle={{ width: "100%" }}
        cover={<img alt="example" src={bookList.image} />}
      >
        <Meta
          title={bookList.title}
          description={bookList.author}
          style={{ textAlign: "center" }}
        />
      </Card>
    </Link>
  );
}

export default CardItem;

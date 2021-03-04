import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import booksApi from "../api/bookApi";
import { addBooks } from "../Actions/bookAction";

BtnLoad.propTypes = {};

function BtnLoad({ category }) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const lengthData = useSelector((state) => state.listBook.listBook);

  const loadData = async () => {
    let data = await booksApi.getMany({
      filter: category,
      page: lengthData.length / 8 + 1,
      limit: 8,
    });
    dispatch(addBooks({ data, category }));
    setIsLoading(false);
  };

  return (
    <div style={{ paddingBottom: "20px" }}>
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <Button
          type="primary"
          onClick={() => {
            setIsLoading(true);
            loadData();
          }}
          size="large"
          style={{ background: "rgb(0 158 127)" }}
        >
          Load More
        </Button>
      )}
    </div>
  );
}

export default BtnLoad;

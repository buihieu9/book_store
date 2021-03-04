import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./input-search.scss";
import { SearchOutlined } from "@ant-design/icons";
import booksApi from "../../api/bookApi";
import ShowListSearch from "./ShowListSearch";
InputSearch.propTypes = {};

function InputSearch(props) {
  const typingTimeoutRef = useRef(null);
  const [listSearch, setListSearch] = useState(null);
  const [isLoading, setIsLoaling] = useState(false);

  const handleChange = (e) => {
    setIsLoaling(true);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    if (e.target.value === "") {
      setListSearch(null);
      setIsLoaling(false);
      return;
    }

    typingTimeoutRef.current = setTimeout(async () => {
      let itemSearch = await booksApi.getMany({
        search: e.target.value,
        p: 1,
        l: 10,
      });
      // if (itemSearch.length > 0) {
      //   setListSearch(itemSearch);
      // }
      setListSearch(itemSearch);
      setIsLoaling(false);
    }, 500);
  };

  const handleOffModal = () => {
    setListSearch(null);
  };
  return (
    <div className="box-search">
      <form className="box-input">
        <div className="icon-search">
          <SearchOutlined />
        </div>
        <input
          type="text"
          placeholder="search anything you want"
          onChange={handleChange}
        />
      </form>
      <ShowListSearch
        listSearch={listSearch}
        isLoading={isLoading}
        handleOffModal={handleOffModal}
      />
    </div>
  );
}

export default InputSearch;

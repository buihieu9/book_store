import React, { useState } from "react";
import PropTypes from "prop-types";
import "../scss/pages/menu.scss";
import { Link, NavLink } from "react-router-dom";
import {
  AppstoreOutlined,
  CloseOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import booksApi from "../api/bookApi";
import { useDispatch } from "react-redux";
import { filterCategory } from "../Actions/bookAction";
import { loadingFiler } from "../Actions/loadingAction";
Menu.propTypes = {};

const category = [
  "Children Literature",
  "Comic Book",
  "Fantasy",
  "Horror",
  "Novel",
  "Romantic",
  "Science Fiction",
  "Thriller",
];

function Menu(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState("");
  const dispatch = useDispatch();

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  const fillterCategory = async (value) => {
    dispatch(loadingFiler(true));
    let filter = await booksApi.getMany({
      filter: value,
      page: 1,
      limit: 8,
    });
    dispatch(filterCategory({ filter, category: value }));
    dispatch(loadingFiler(false));
  };

  return (
    <div className="category">
      <h3 className="title">
        <AppstoreOutlined style={{ paddingRight: "10px", fontSize: "20px" }} />
        Select Category
      </h3>

      <ul className={showMenu ? "menu showMenu" : "menu"}>
        {category.map((value, index) => (
          <li key={index} className="menu__item">
            <div
              className={active === value ? "active-btn menu-btn" : "menu-btn"}
              onClick={(e) => {
                setActive(e.target.textContent);
                fillterCategory(value);
              }}
            >
              {value}
            </div>
          </li>
        ))}
      </ul>
      <div className="hide" onClick={handleMenu}>
        {showMenu ? <CloseOutlined /> : <MenuOutlined />}
      </div>
    </div>
  );
}

export default Menu;

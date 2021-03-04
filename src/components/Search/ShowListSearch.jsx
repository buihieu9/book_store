import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Spin } from "antd";
import "./show-search.scss";

function ShowListSearch({ listSearch, isLoading, handleOffModal }) {
  const test = useRef(null);

  window.onclick = (e) => {
    if (!test.current) return;
    if (!test.current.contains(e.target)) {
      handleOffModal();
      return;
    }
  };
  return (
    <div ref={test}>
      {isLoading && (
        <div className="box-loading">
          <Spin tip="Loading..." />
        </div>
      )}
      {listSearch && listSearch.length < 1 && (
        <div className="box-loading">No result</div>
      )}
      {listSearch && listSearch.length > 0 && (
        <ul className="box-show">
          {listSearch.map((value) => (
            <li key={value._id}>
              <Link className="item" to={`/books/${value._id}`}
              onClick =
              {() => {
                handleOffModal();
              }}
              >
                <div className="box-img">
                  <img src={value.image} alt="" />
                </div>
                <div className="box-content">
                  <p className="name-book">{value.title}</p>
                  <p className="author-book">
                    <span className="field-book">Author :</span> {value.author}
                  </p>
                  <p className="description">
                    <span className="field-book">description :</span>
                    {value.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShowListSearch;

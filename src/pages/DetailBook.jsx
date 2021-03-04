import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import booksApi from "../api/bookApi";
import { Button, Col, Row, Spin } from "antd";
import BtnAddCart from "./BtnAddCart";
import "../scss/pages/detail-book.scss";
import { ArrowLeftOutlined } from "@ant-design/icons";
import ShowListCard from "./ShowListCard";
import { useDispatch } from "react-redux";
import { loadingFiler } from "../Actions/loadingAction";

function DetailBook(props) {
  const [book, setBook] = useState(null);
  const [isShowDes, setIsShowDes] = useState(false);
  const [isLoading,setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const param = useParams();
  const history = useHistory();
  useEffect(() => {
    (async function () {
      dispatch(loadingFiler(true));
      setIsLoading(true)
      let data = await booksApi.get(param.id);

      let timeOut = setTimeout(() => {
        setBook(data);
        setIsLoading(false)
      }, 1000);

      setTimeout(() => {
        dispatch(loadingFiler(false));
      }, 2000)


      return () => {
        clearTimeout(timeOut);
      };
    })();
  }, [param]);

  return (
    <>
      {isLoading ? (
        <div style={{
          height:"100vh",
          display:"flex",
          justifyContent:"center",
          alignItems: "center",
          marginTop: "-5rem"
        }}>
          {" "}
          <Spin size="large"  />
        </div>
      ) : (
        book && (
          <>
          <Row
            className="box-detail"
            style={{
              background: "#ffffff",
              marginTop: "30px",
              padding: "40px 20px",
            }}
          >
            <Col xs={{ span: 24 }} md={{ span: 12 }} span={12}>
              <div className="btn-back">
                <Button
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  {" "}
                  <ArrowLeftOutlined /> Back
                </Button>
              </div>

              <div className="box-img">
                <img src={book.image} alt="img" />
              </div>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} span={12}>
              <div className="box-content">
                <h3 className="name-book">{book.title}</h3>
                <p className="author">By {book.author}</p>
                <div className="box-des">
                  <p className={isShowDes ? "des show-des" : "des"}>
                    {book.description}
                  </p>

                  <span
                    className="read-more"
                    onClick={() => {
                      setIsShowDes(!isShowDes);
                    }}
                  >
                    {isShowDes ? "Less" : "Read More"}
                  </span>
                </div>
                <div className="price">${book.price}</div>
                  <div className="btn-card">
                    Add to card
                  </div>
              </div>
            </Col>
          </Row>



          <Row style={{margin: "20px"}}>
              <div style={{
                fontSize:"3rem",
                fontWeight:"600",
                margin: "1rem 0"
              }}>
              Related Items
              </div>
            <ShowListCard />
          </Row>
          </>
        )
      )}
    </>
  );
}

export default DetailBook;




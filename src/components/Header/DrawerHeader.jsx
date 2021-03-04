import React, { useState } from "react";
import PropTypes from "prop-types";
import { Drawer, Button } from "antd";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
DrawerHeader.propTypes = {};

function DrawerHeader(props) {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div style={{ display: "flex", height: "64px", alignItems: "center" }}>
      <MenuOutlined onClick={showDrawer} style={{ fontSize: "32px" }} />
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <CloseOutlined
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "10px",
            fontSize: "20px",
          }}
        />
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}

export default DrawerHeader;

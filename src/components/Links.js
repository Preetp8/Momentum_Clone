import React, { Component, useState } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

function Links() {
  const menu = (
    <Menu style={{ backgroundColor: "rgba(15,15,15,0.925)" }}>
      <Menu.Item key="0">
        <a
          href="https://chrome.google.com/webstore/user/purchases"
          style={{ color: "#fff" }}
        >
          Apps
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a
          href="https://chrome.google.com/webstore/category/extensions"
          style={{ color: "#fff" }}
        >
          Chrome Web Store
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="links">
        <Dropdown overlay={menu} trigger={["click"]}>
          <a className="links" onClick={(e) => e.preventDefault()}>
            Links <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </>
  );
}

export default Links;

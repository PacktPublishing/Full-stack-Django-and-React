import React from "react";
import Navigationbar from "./Navbar";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Layout(props) {
  const navigate = useNavigate();
  const { hasNavigationBack } = props;
  return (
    <div>
      <Navigationbar />
      {hasNavigationBack && (
        <ArrowLeftOutlined
          style={{
            color: "#0D6EFD",
            fontSize: "24px",
            marginLeft: "5%",
            marginTop: "1%",
          }}
          onClick={() => navigate(-1)}
        />
      )}
      <div className="container my-5">{props.children}</div>
    </div>
  );
}

export default Layout;

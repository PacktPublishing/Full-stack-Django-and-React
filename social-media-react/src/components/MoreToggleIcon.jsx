import React from "react";
import { MoreOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const MoreToggleIcon = React.forwardRef(({ onClick }, ref) => (
  <Link
    to="#"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <MoreOutlined />
  </Link>
));

export default MoreToggleIcon;

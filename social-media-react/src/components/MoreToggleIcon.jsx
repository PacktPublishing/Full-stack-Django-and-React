import React from "react";
import { MoreOutlined } from "@ant-design/icons";

const MoreToggleIcon = React.forwardRef(({ onClick }, ref) => (
  <a
    href="@"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <MoreOutlined />
  </a>
));

export default MoreToggleIcon;

import { Menu } from "antd";
import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

import { getSideBarData } from "../../../utils";

function MenuComponent({ routes }) {
  const location = useLocation();

  const sideBarData = getSideBarData(routes);
  const items = useMemo(() => {
    let arr = [];
    sideBarData.map((item) => {
      let obj = {};
      obj.label = (
        <Link to={item?.path} onClick={item.onClick}>
          {item.label}
        </Link>
      );
      obj.key = item.path;
      obj.icon = item?.icon;
      arr.push(obj);
    });
    return arr;
  }, [sideBarData]);

  return (
    <Menu
      theme="dark"
      mode="inline"
      collapsible
      defaultSelectedKeys={0}
      selectedKeys={[location?.pathname]}
      items={items}
    />
  );
}

export default MenuComponent;

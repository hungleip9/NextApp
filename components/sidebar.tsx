"use client";
import React, { useState, useContext } from "react";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { AppContext } from "@/context/appContext";
const { Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

export default function SidebarPage() {
  const { isOpen, setIsOpen } = useContext(AppContext) as {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
  };
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  const items: MenuItem[] = [
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("User", "sub1", <UserOutlined />, [
      getItem("Tom", "3"),
      getItem("Bill", "4"),
      getItem("Alex", "5"),
    ]),
    getItem("Team", "sub2", <TeamOutlined />, [
      getItem("Team 1", "6"),
      getItem("Team 2", "8"),
    ]),
    getItem("Files", "9", <FileOutlined />),
  ];
  return (
    <>
      <Sider
        collapsible
        collapsed={!isOpen}
        onCollapse={(value) => setIsOpen(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu defaultSelectedKeys={["3"]} mode="inline" items={items} />
      </Sider>
    </>
  );
}

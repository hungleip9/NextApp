"use client";
import Cookies from "js-cookie";
import React, { useState, useEffect, useMemo } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme, ConfigProvider } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

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

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export default function App({
  children,
  initialTheme,
}: {
  children: React.ReactNode;
  initialTheme: "light" | "dark";
}) {
  const [darkLight, setDarkLight] = useState<"light" | "dark">(initialTheme);
  const [collapsed, setCollapsed] = useState(false);
  const tables = [
    { title: "Trang chủ", path: "/" },
    { title: "Demo", path: "/demo" },
    { title: "Sản phẩm 1", path: "/products/1" },
    { title: "Sản phẩm 2", path: "/products/2" },
    { title: "Table", path: "/table" },
  ];

  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  const pathname = usePathname();
  const breadcrumbItems = useMemo(() => {
    const items: { title: string }[] = [];
    const segments = pathname.split("/");
    segments.forEach((e) => {
      if (!e && !items.length) {
        items.push({ title: "Home" });
        return;
      }
      items.push({ title: e });
    });

    return items;
  }, [pathname]);
  function setMode() {
    setDarkLight((prev) => (prev === "dark" ? "light" : "dark"));
  }
  useEffect(() => {
    Cookies.set("theme", darkLight, { expires: 7 });
    document.documentElement.classList.toggle("dark", darkLight === "dark");
  }, [darkLight]);

  return (
    <ConfigProvider
      theme={{
        algorithm:
          darkLight === "dark" ? theme.darkAlgorithm : theme.compactAlgorithm,
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <Menu defaultSelectedKeys={["3"]} mode="inline" items={items} />
        </Sider>
        <Layout>
          <Header className="flex justify-between" style={{ padding: 0 }}>
            {/* Navigation */}
            <nav>
              <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
                {tables.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={
                      pathname === item.path
                        ? "text-color-active border"
                        : "text-color border"
                    }
                  >
                    {item.title}
                  </Link>
                ))}
                <li></li>
              </ul>
            </nav>
            {/* THAY ĐỔI PHẦN NÀY */}
            <button
              className="border cursor-pointer"
              onClick={setMode}
              suppressHydrationWarning // THÊM DÒNG NÀY
            >
              {darkLight === "dark" ? "light" : "dark"}
            </button>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb
              className="ant-breadcrumb"
              style={{ margin: "16px 0" }}
              items={breadcrumbItems}
            />
            <div
              style={{
                padding: 24,
                minHeight: 360,
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

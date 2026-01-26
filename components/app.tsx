"use client";

import React, { useMemo, useContext } from "react";
import { Breadcrumb, Layout, theme, ConfigProvider } from "antd";

import { usePathname } from "next/navigation";
import HeaderPage from "@/components/header";
import SidebarPage from "@/components/sidebar";
import { AppContext } from "@/context/appContext";

const { Content, Footer } = Layout;

export default function App({ children }: { children: React.ReactNode }) {
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
  const { mode } = useContext(AppContext) as {
    mode: string;
  };

  return (
    <ConfigProvider
      theme={{
        algorithm:
          mode === "dark" ? theme.darkAlgorithm : theme.compactAlgorithm,
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <SidebarPage />
        <Layout>
          <HeaderPage />
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

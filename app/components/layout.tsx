"use client";

import { ConfigProvider, Layout } from "antd";
import Sidebar from "./sider";
import AppHeader from "./header";
import React, { useState } from "react";
import themeDark from "../styles/themeDark";
import themeLight from "../styles/themeLight";

const { Content } = Layout;

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ConfigProvider theme={isDark ? themeDark : themeLight}>
      <Layout style={{ minHeight: "100vh" }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Layout หลักสำหรับ Header และ Content */}
        <Layout style={{ marginLeft: 200 }}>
          {/* Header */}
          <AppHeader onThemeToggle={toggleTheme} isDark={isDark} />

          {/* Content */}
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: "80vh" }}>
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default ClientLayout;

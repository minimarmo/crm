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
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <ConfigProvider theme={isDark ? themeDark : themeLight}>
      <Layout style={{ minHeight: "100vh" }}>
        {/* Sidebar */}
        <Sidebar collapsed={collapsed} onCollapse={toggleCollapsed} />

        {/* Layout หลักสำหรับ Header และ Content */}
        <Layout style={{ marginLeft: collapsed ? 80 : 240 }}>
          {/* Header */}
          <AppHeader onThemeToggle={toggleTheme} isDark={isDark} />

          {/* Content */}
          <Content
            style={{
              overflow: "initial",
              padding: 16,
              minHeight: "calc(100vh - 64vh)",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default ClientLayout;

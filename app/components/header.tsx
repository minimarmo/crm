"use client";

import { Layout, Switch } from "antd";
import React from "react";

const { Header } = Layout;

const AppHeader: React.FC<{ onThemeToggle: () => void; isDark: boolean }> = ({
  onThemeToggle,
  isDark,
}) => {
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="logo" style={{ fontSize: "24px" }}>
        MARMO
      </div>
      <Switch
        checked={isDark}
        onChange={onThemeToggle}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
    </Header>
  );
};

export default AppHeader;

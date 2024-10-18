"use client";

import { Button, Layout, List, Typography } from "antd";

const { Content, Footer } = Layout;
const { Title } = Typography;

export default function Home() {
  return (
    <List>
      <Title level={2}>Welcome to the App</Title>
    </List>
  );
}

"use client";

import { List, Typography } from "antd";

const { Title } = Typography;

export default function Home() {
  return (
    <List>
      <Title level={2}>Welcome to the App</Title>
    </List>
  );
}

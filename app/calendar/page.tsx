"use client";

import { Calendar as AntCalendar, CalendarProps, List, Typography } from "antd";
import type { Dayjs } from "dayjs";

const { Title } = Typography;

export default function Calendar() {
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  return (
    <List>
      <Title level={4}>Calendar</Title>
      <AntCalendar onPanelChange={onPanelChange} />
    </List>
  );
}

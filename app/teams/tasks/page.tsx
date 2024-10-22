"use client";

import React from "react";
import { Button, message, Popconfirm, Space, Table, Typography } from "antd";
import { Delete02Icon, PencilEdit02Icon, ViewIcon } from "hugeicons-react";
import { ITask } from "@app/interfaces/page";
import { dataSourceTask } from "@app/utilities/example-data";

const { Title } = Typography;

export default function Tasks() {
  const handleAdd = () => {
    message.info("Add Contact clicked!");
  };

  const handleEdit = (record: ITask) => {
    message.info(`Editing company: ${record.title}`);
  };

  const handlePreview = (record: ITask) => {
    message.info(`Previewing company: ${record.title}`);
  };

  const handleDelete = (key: string) => {
    message.success(`Deleted company with key: ${key}`);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "Assigned To",
      dataIndex: "assigned",
      key: "assigned",
    },
    {
      title: "Related To",
      dataIndex: "related",
      key: "related",
    },
    {
      title: "Due Date",
      dataIndex: "due_date",
      key: "due_date",
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Created Date",
      dataIndex: "created_date",
      key: "created_date",
    },
    {
      title: "Completed Date",
      dataIndex: "completed_date",
      key: "completed_date",
    },
    {
      title: "Created Date",
      dataIndex: "created_date",
      key: "created_date",
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
    },
    {
      title: "Reminder",
      dataIndex: "reminder",
      key: "reminder",
    },
    {
      title: "Notes",
      dataIndex: "notes",
      key: "notes",
    },
    {
      title: "Action",
      key: "action",
      render: (_: unknown, record: ITask) => (
        <Space size="small">
          <Button
            icon={<ViewIcon size={20} />}
            onClick={() => handlePreview(record)}
            type="link"
          />
          <Button
            icon={<PencilEdit02Icon size={20} />}
            onClick={() => handleEdit(record)}
            type="link"
          />
          <Popconfirm
            title="Are you sure you want to delete this company?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<Delete02Icon size={20} />} type="link" danger />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Title level={4}>Tasks</Title>
      <Button type="primary" onClick={handleAdd} style={{ marginBottom: 16 }}>
        Add
      </Button>
      <Table
        dataSource={dataSourceTask}
        columns={columns}
        size="small"
        scroll={{ x: "max-content" }}
      />
    </div>
  );
}

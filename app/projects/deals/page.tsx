"use client";

import React from "react";
import { Button, message, Popconfirm, Space, Table, Typography } from "antd";
import { Delete02Icon, PencilEdit02Icon, ViewIcon } from "hugeicons-react";
import { IDeal } from "@app/interfaces/page";
import { dataSourceDeals } from "@app/utilities/example-data";

const { Title } = Typography;

export default function Deals() {
  const handleAdd = () => {
    message.info("Add Contact clicked!");
  };

  const handleEdit = (record: IDeal) => {
    message.info(`Editing company: ${record.name}`);
  };

  const handlePreview = (record: IDeal) => {
    message.info(`Previewing company: ${record.name}`);
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
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Stage",
      dataIndex: "stage",
      key: "stage",
    },
    {
      title: "Start Date",
      dataIndex: "start_date",
      key: "start_date",
    },
    {
      title: "Expected Close Date",
      dataIndex: "expected_close_date",
      key: "expected_close_date",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "Source",
      dataIndex: "source",
      key: "source",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Notes",
      dataIndex: "notes",
      key: "notes",
    },
    {
      title: "Products/Services",
      dataIndex: "products_services",
      key: "products_services",
    },
    {
      title: "Action",
      key: "action",
      render: (_: unknown, record: IDeal) => (
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
      <Title level={4}>Deals</Title>
      <Button type="primary" onClick={handleAdd} style={{ marginBottom: 16 }}>
        Add
      </Button>
      <Table
        dataSource={dataSourceDeals}
        columns={columns}
        size="small"
        scroll={{ x: "max-content" }}
      />
    </div>
  );
}

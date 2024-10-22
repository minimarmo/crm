"use client";

import React from "react";
import { Button, message, Popconfirm, Space, Table, Typography } from "antd";
import { Delete02Icon, PencilEdit02Icon, ViewIcon } from "hugeicons-react";
import { IContact } from "@app/interfaces/page";
import { dataSourceContact } from "@app/utilities/example-data";

const { Title } = Typography;

export default function Contacts() {
  const handleAdd = () => {
    message.info("Add Contact clicked!");
  };

  const handleEdit = (record: IContact) => {
    message.info(`Editing company: ${record.name}`);
  };

  const handlePreview = (record: IContact) => {
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
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Department",
      dataIndex: "dept",
      key: "dept",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Source",
      dataIndex: "source",
      key: "source",
    },
    {
      title: "Last Contracted",
      dataIndex: "last_contracted",
      key: "last_contracted",
    },
    {
      title: "Notes",
      dataIndex: "notes",
      key: "notes",
    },
    {
      title: "Action",
      key: "action",
      render: (_: unknown, record: IContact) => (
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
      <Title level={4}>Contact List</Title>
      <Button type="primary" onClick={handleAdd} style={{ marginBottom: 16 }}>
        Add
      </Button>
      <Table
        dataSource={dataSourceContact}
        columns={columns}
        size="small"
        scroll={{ x: "max-content" }}
      />
    </div>
  );
}

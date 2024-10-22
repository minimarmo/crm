"use client";

import React from "react";
import { Button, message, Popconfirm, Space, Table, Typography } from "antd";
import { Delete02Icon, PencilEdit02Icon, ViewIcon } from "hugeicons-react";
import { ILead } from "@app/interfaces/page";
import { dataSourceLead } from "@app/utilities/example-data";

const { Title } = Typography;

export default function Leads() {
  const handleAdd = () => {
    message.info("Add Contact clicked!");
  };

  const handleEdit = (record: ILead) => {
    message.info(`Editing company: ${record.name}`);
  };

  const handlePreview = (record: ILead) => {
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
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Job Title",
      dataIndex: "job_title",
      key: "job_title",
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
      title: "Interest",
      dataIndex: "interest",
      key: "interest",
    },
    {
      title: "Follow Up",
      dataIndex: "follow_up",
      key: "follow_up",
    },
    {
      title: "Scoring",
      dataIndex: "scoring",
      key: "scoring",
    },
    {
      title: "Created Date",
      dataIndex: "created_date",
      key: "created_date",
    },
    {
      title: "Action",
      key: "action",
      render: (_: unknown, record: ILead) => (
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
      <Title level={4}>Leads</Title>
      <Button type="primary" onClick={handleAdd} style={{ marginBottom: 16 }}>
        Add
      </Button>
      <Table
        dataSource={dataSourceLead}
        columns={columns}
        size="small"
        scroll={{ x: "max-content" }}
      />
    </div>
  );
}

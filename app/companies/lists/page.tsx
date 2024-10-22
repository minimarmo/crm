"use client";

import React, { useState } from "react";
import {
  Table,
  Card,
  Button,
  List,
  Typography,
  Space,
  Segmented,
  Popconfirm,
  message,
  Image,
  Menu,
  Dropdown,
} from "antd";
import {
  AppstoreOutlined,
  MoreOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Delete02Icon, PencilEdit02Icon, ViewIcon } from "hugeicons-react";
import { ICompany } from "@app/interfaces/page";
import { dataSourceCompany } from "@app/utilities/example-data";

const { Title } = Typography;

export default function CompanyList() {
  const [viewMode, setViewMode] = useState<"table" | "card">("table");

  const handleEdit = (record: ICompany) => {
    message.info(`Editing company: ${record.name}`);
  };

  const handlePreview = (record: ICompany) => {
    message.info(`Previewing company: ${record.name}`);
  };

  const handleDelete = (key: string) => {
    message.success(`Deleted company with key: ${key}`);
  };

  const handleAddCompany = () => {
    message.info("Add Company clicked!");
  };

  const menu = (item: ICompany) => (
    <Menu>
      <Menu.Item key="1" onClick={() => handlePreview(item)}>
        <ViewIcon size={20} />
        Preview
      </Menu.Item>
      <Menu.Item key="2" onClick={() => handleEdit(item)}>
        <PencilEdit02Icon size={20} />
        Edit
      </Menu.Item>
      <Menu.Item key="3">
        <Popconfirm
          title="Are you sure you want to delete this company?"
          onConfirm={() => handleDelete(item.id)}
          okText="Yes"
          cancelText="No"
        >
          <Delete02Icon size={20} />
          Delete
        </Popconfirm>
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
      render: (logo: string) => <Image src={logo} width={50} alt="logo" />,
    },
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
      title: "Website",
      dataIndex: "website",
      key: "website",
    },
    {
      title: "Industry",
      dataIndex: "industry",
      key: "industry",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tax ID",
      dataIndex: "tax_id",
      key: "tax_id",
    },
    {
      title: "Revenue",
      dataIndex: "revenue",
      key: "revenue",
    },
    {
      title: "Source",
      dataIndex: "source",
      key: "source",
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
    },
    {
      title: "Relationship",
      dataIndex: "relationship",
      key: "relationship",
    },
    {
      title: "Action",
      key: "action",
      render: (_: unknown, record: ICompany) => (
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
      <Title level={4}>Company List</Title>
      <Space
        style={{
          marginBottom: 16,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button type="primary" onClick={handleAddCompany}>
          Add Company
        </Button>
        <Segmented
          options={[
            {
              label: <UnorderedListOutlined />,
              value: "table",
              title: "Table View",
            },
            {
              label: <AppstoreOutlined />,
              value: "card",
              title: "Card View",
            },
          ]}
          value={viewMode}
          onChange={(value) => setViewMode(value as "table" | "card")}
        />
      </Space>

      {viewMode === "table" ? (
        <Table
          dataSource={dataSourceCompany}
          columns={columns}
          size="small"
          scroll={{ x: "max-content" }}
        />
      ) : (
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={dataSourceCompany}
          renderItem={(item) => (
            <List.Item>
              <Card
                style={{ borderRadius: 12 }}
                cover={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                      padding: "16px",
                    }}
                  >
                    {/* โลโก้ตรงกลาง */}
                    <Image
                      src={item.logo}
                      alt="Company Logo"
                      width={80}
                      height={80}
                      preview={false}
                      style={{ borderRadius: "50%" }}
                    />
                    {/* ปุ่มสามจุดชิดขวา */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                      }}
                    >
                      <Dropdown overlay={menu(item)} trigger={["click"]}>
                        <Button icon={<MoreOutlined />} type="text" />
                      </Dropdown>
                    </div>
                  </div>
                }
              >
                <Title level={5} style={{ textAlign: "center" }}>
                  {item.name}
                </Title>
                <p style={{ textAlign: "center" }}>Email: {item.email}</p>
                <p style={{ textAlign: "center" }}>Phone: {item.phone}</p>
              </Card>
            </List.Item>
          )}
        />
      )}
    </div>
  );
}

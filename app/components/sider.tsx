import { Layout, Menu } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  PieChartOutlined,
  CustomerServiceOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Sider } = Layout;

interface MenuItem {
  key: string;
  icon?: JSX.Element; // ใช้ JSX.Element แทน Element
  title: string;
  link?: string; // ลิงค์สำหรับ Item
  children?: MenuItem[]; // เมนูย่อย
}

const menuItems: MenuItem[] = [
  {
    key: "1",
    icon: <PieChartOutlined />,
    title: "Dashboard",
    link: "/",
  },
  {
    key: "sub1",
    icon: <UserOutlined />,
    title: "Customers",
    children: [
      { key: "2", title: "Profile", link: "/profile" },
      { key: "3", title: "Leads", link: "/leads" },
      { key: "4", title: "Tasks", link: "/tasks" },
    ],
  },
  {
    key: "sub2",
    icon: <BarChartOutlined />,
    title: "Sales & Marketing",
    children: [
      { key: "5", title: "Sales", link: "/sales" },
      { key: "6", title: "Marketing", link: "/marketing" },
      { key: "7", title: "Products/Services", link: "/products-sevices" },
    ],
  },
  {
    key: "sub3",
    icon: <CustomerServiceOutlined />,
    title: "Support",
    children: [
      { key: "8", title: "Helpdesk", link: "/helpdesk" },
      { key: "9", title: "Knowledge Base", link: "/knowledge-base" },
    ],
  },
  {
    key: "sub4",
    icon: <BarChartOutlined />,
    title: "Document",
    children: [
      { key: "10", title: "Billing", link: "/billing" },
      { key: "11", title: "Invoices", link: "/invoices" },
    ],
  },
  {
    key: "sub5",
    icon: <BarChartOutlined />,
    title: "Reports",
    children: [{ key: "12", title: "Reports", link: "/reports" }],
  },
  {
    key: "sub6",
    icon: <SettingOutlined />,
    title: "Settings",
    children: [
      { key: "13", title: "Users", link: "/users" },
      { key: "14", title: "Team Collaboration", link: "/team" },
    ],
  },
];

const Sidebar: React.FC = () => {
  return (
    <Sider width={240} style={{ height: "100vh", position: "fixed", left: 0 }}>
      <div
        className="logo"
        style={{
          padding: "16px",
          color: "white",
          fontSize: "24px",
          textAlign: "center",
        }}
      >
        CRM
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={menuItems.map((item) => {
          if (item.children) {
            return {
              key: item.key,
              icon: item.icon,
              label: item.title,
              children: item.children.map((subItem) => ({
                key: subItem.key,
                label: <Link href={subItem.link!}>{subItem.title}</Link>,
              })),
            };
          }
          return {
            key: item.key,
            icon: item.icon,
            label: <Link href={item.link!}>{item.title}</Link>,
          };
        })}
      />
    </Sider>
  );
};

export default Sidebar;

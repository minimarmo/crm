import { Button, Layout, Menu, Typography } from "antd";
import Link from "next/link";
import {
  ArrowRightDoubleIcon,
  ArrowLeftDoubleIcon,
  ChartRoseIcon,
  Calendar03Icon,
  Store03Icon,
  LeftToRightListBulletIcon,
  ContactBookIcon,
  Task01Icon,
  Agreement02Icon,
  StackStarIcon,
  CheckListIcon,
  UserGroupIcon,
  TaskEdit01Icon,
  News01Icon,
  Invoice02Icon,
  Invoice01Icon,
  AnalyticsUpIcon,
  AnalysisTextLinkIcon,
  ChartAverageIcon,
  ChartColumnIcon,
  Settings02Icon,
  UserAccountIcon,
  CustomerSupportIcon,
  ModernTvIssueIcon,
  LibraryIcon,
  LeftToRightBlockQuoteIcon,
  MentoringIcon,
} from "hugeicons-react";
import { usePathname } from "next/navigation";

const { Sider } = Layout;
const { Text } = Typography;

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
    icon: <ChartRoseIcon size={20} />,
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    key: "2",
    icon: <Calendar03Icon size={20} />,
    title: "Calendar",
    link: "/calendar",
  },
  {
    key: "companies",
    icon: <Store03Icon size={20} />,
    title: "Companies",
    children: [
      {
        key: "3",
        icon: <LeftToRightListBulletIcon size={20} />,
        title: "Company List",
        link: "/companies/lists",
      },
      {
        key: "4",
        icon: <ContactBookIcon size={20} />,
        title: "Contacts",
        link: "/companies/contacts",
      },
    ],
  },
  {
    key: "projects",
    icon: <Task01Icon size={20} />,
    title: "Projects",
    children: [
      {
        key: "5-leads",
        icon: <StackStarIcon size={20} />,
        title: "Leads",
        link: "/projects/leads",
      },
      {
        key: "6-deals",
        icon: <Agreement02Icon size={20} />,
        title: "Deals",
        link: "/projects/deals",
      },
      {
        key: "7-pipeline",
        icon: <CheckListIcon size={20} />,
        title: "Pipeline",
        link: "/projects/pipeline",
      },
    ],
  },
  {
    key: "teams",
    icon: <UserGroupIcon size={20} />,
    title: "Teams",
    children: [
      {
        key: "8-task",
        icon: <TaskEdit01Icon size={20} />,
        title: "Tasks",
        link: "/teams/tasks",
      },
      {
        key: "9-timeline",
        icon: <LeftToRightBlockQuoteIcon size={20} />,
        title: "Timeline",
        link: "/teams/timeline",
      },
    ],
  },
  {
    key: "documents",
    icon: <News01Icon size={20} />,
    title: "Documents",
    children: [
      {
        key: "10-invoice",
        icon: <Invoice02Icon size={20} />,
        title: "Invoices",
        link: "/documents/invoices",
      },
      {
        key: "11-receipt",
        icon: <Invoice01Icon size={20} />,
        title: "Receipts",
        link: "/documents/receipts",
      },
    ],
  },
  {
    key: "analytics-reports",
    icon: <AnalyticsUpIcon size={20} />,
    title: "Analytics & Reports",
    children: [
      {
        key: "12-lead",
        icon: <AnalysisTextLinkIcon size={20} />,
        title: "Leads",
        link: "/analytics-reports/leads",
      },
      {
        key: "13-deal",
        icon: <ChartAverageIcon size={20} />,
        title: "Deals",
        link: "/analytics-reports/deals",
      },
      {
        key: "14-customer",
        icon: <ChartColumnIcon size={20} />,
        title: "Customers",
        link: "/analytics-reports/customers",
      },
    ],
  },
  {
    key: "settings",
    icon: <Settings02Icon size={20} />,
    title: "Settings",
    children: [
      {
        key: "15-user",
        icon: <UserAccountIcon size={20} />,
        title: "Users",
        link: "/settings/users",
      },
      {
        key: "16-role",
        icon: <MentoringIcon size={20} />,
        title: "Roles",
        link: "/settings/roles",
      },
    ],
  },
  {
    key: "helpdesk",
    icon: <CustomerSupportIcon size={20} />,
    title: "Helpdesk",
    children: [
      {
        key: "17-issue",
        icon: <ModernTvIssueIcon size={20} />,
        title: "Issues",
        link: "/helpdesk/issues",
      },
      {
        key: "18-knowledge",
        icon: <LibraryIcon size={20} />,
        title: "Knowledge",
        link: "/helpdesk/knowledges",
      },
    ],
  },
];

const Sidebar: React.FC<{ collapsed: boolean; onCollapse: () => void }> = ({
  collapsed,
  onCollapse,
}) => {
  const pathname = usePathname();

  const selectedKey =
    menuItems.find((item) => item.link === pathname)?.key ||
    menuItems
      .find((item) =>
        item.children?.some((subItem) => subItem.link === pathname)
      )
      ?.children?.find((subItem) => subItem.link === pathname)?.key ||
    "1";

  return (
    <Sider
      // collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={240}
      style={{
        height: "100vh",
        position: "fixed",
        left: 0,
        overflow: "auto",
        scrollbarWidth: "thin",
      }}
    >
      <div
        className="logo"
        style={{
          padding: "16px",
          fontSize: "24px",
          textAlign: "center",
        }}
      >
        CRM
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={[selectedKey]}
        items={menuItems.map((item) => {
          const isSelected = pathname.includes(item.link || item.key!);
          if (item.children) {
            return {
              key: item.key,
              icon: (
                <span style={{ color: isSelected ? "#699735" : undefined }}>
                  {item.icon}
                </span>
              ),
              label: (
                <span style={{ color: isSelected ? "#699735" : undefined }}>
                  {item.title}
                </span>
              ),
              children: item.children.map((subItem, index) => ({
                key: `${item.key}-${subItem.key}-${index}`,
                icon: subItem.icon,
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
        style={{
          fontWeight: 600, // ตัวหนา
        }}
      />

      <div
        style={{
          textAlign: "center",
        }}
      >
        <Button
          type="primary"
          onClick={onCollapse}
          style={{
            marginBottom: 6,
            fontSize: "12px",
            width: 24,
            height: 24,
            lineHeight: "24px",
            borderRadius: "50%",
            padding: 0,
          }}
        >
          {collapsed ? (
            <ArrowRightDoubleIcon size={18} />
          ) : (
            <ArrowLeftDoubleIcon size={18} />
          )}
        </Button>
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Text type="secondary" style={{ fontSize: "13px" }}>
          {collapsed ? "v.1.0.0" : "version 1.0.0"}
        </Text>
      </div>
    </Sider>
  );
};

export default Sidebar;

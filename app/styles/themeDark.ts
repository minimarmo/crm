import type { ThemeConfig } from "antd";

const themeDark: ThemeConfig = {
  token: {
    colorPrimary: "#1e4c92", // สามารถคงไว้ได้
    colorInfo: "#1e4c92",
    colorLink: "#00bfff",
    fontSize: 16,
    colorSuccess: "#4caf50",
    colorWarning: "#ffc107",
    colorError: "#f44336",
    colorTextBase: "#ffffff", // เปลี่ยนเป็นสีขาว
    colorBgBase: "#000000", // เปลี่ยนพื้นหลังเป็นสีดำ
    sizeStep: 4,
    borderRadius: 12,
  },
  components: {
    Button: {
      contentFontSize: 16,
      onlyIconSize: 16,
      controlHeight: 40,
      controlHeightLG: 48,
      controlHeightSM: 32,
      borderRadius: 16,
      borderRadiusLG: 18,
      borderRadiusSM: 10,
    },
    Layout: {
      bodyBg: "#000000",
    },
    Menu: {
      fontSize: 14,
      subMenuItemBg: "rgba(255, 255, 255, 0.1)", // ทำให้สีพื้นหลังของ SubMenu โปร่งแสง
      itemHeight: 40,
      colorSplit: "rgba(255, 255, 255, 0.2)", // สีแบ่งของ Menu
    },
    Input: {
      controlHeight: 40,
    },
    InputNumber: {
      controlHeight: 40,
    },
    Mentions: {
      controlHeight: 40,
    },
    Radio: {
      controlHeight: 40,
    },
    Select: {
      controlHeight: 40,
    },
    Slider: {
      controlHeight: 36,
    },
    TreeSelect: {
      controlInteractiveSize: 20,
    },
    Calendar: {
      controlItemBgActive: "rgb(30,76,146)", // สามารถคงไว้ได้
      colorPrimary: "rgb(255,255,255)", // เปลี่ยนเป็นสีขาว
    },
    Segmented: {
      controlHeight: 36,
    },
    Table: {
      headerBg: "rgba(30,76,146,0.3)", // สามารถคงไว้ได้
      lineHeight: 2,
    },
    Spin: {
      dotSize: 24,
      dotSizeLG: 36,
      dotSizeSM: 18,
    },
  },
};

export default themeDark;

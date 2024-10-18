import type { ThemeConfig } from "antd";

const themeLight: ThemeConfig = {
  token: {
    colorPrimary: "#1e4c92",
    colorInfo: "#1e4c92",
    colorLink: "#00bfff",
    fontSize: 16,
    colorSuccess: "#4caf50",
    colorWarning: "#ffc107",
    colorError: "#f44336",
    colorTextBase: "#000000",
    colorBgBase: "#ffffff",
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
      bodyBg: "rgb(255,255,255)",
    },
    Menu: {
      fontSize: 14,
      subMenuItemBg: "rgba(0,0,0,0)",
      itemHeight: 40,
      colorSplit: "rgb(255,255,255)",
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
      controlItemBgActive: "rgb(30,76,146)",
      colorPrimary: "rgb(255,255,255)",
    },
    Segmented: {
      controlHeight: 36,
    },
    Table: {
      headerBg: "rgba(30,76,146,0.3)",
      lineHeight: 2,
    },
    Spin: {
      dotSize: 24,
      dotSizeLG: 36,
      dotSizeSM: 18,
    },
  },
};

export default themeLight;

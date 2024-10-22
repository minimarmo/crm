import type { ThemeConfig } from "antd";

const themeLight: ThemeConfig = {
  token: {
    colorPrimary: "#33363D",
    colorInfo: "#96C65E",
    colorLink: "#CCCAB0",
    fontSize: 16,
    colorSuccess: "#95D5B2",
    colorWarning: "#F2CC8F",
    colorError: "#F28482",
    colorTextBase: "#000000",
    colorBgBase: "#FFFFFF",
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
      headerBg: "#F4F4F4",
      siderBg: "#F4F4F4",
      bodyBg: "#F4F4F4",
    },
    Menu: {
      fontSize: 15,
      itemHeight: 40,
      subMenuItemBg: "transparent",
      colorSplit: "transparent",
      colorItemBg: "#F4F4F4",
      colorItemText: "#000000",
      colorItemBgHover: "#CCCAB0",
      colorItemBgSelected: "#96C65E",
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
      fullBg: "#F4F4F4",
      controlItemBgActive: "#96C65E",
      colorPrimary: "#FFFFFF",
    },
    Segmented: {
      controlHeight: 36,
    },
    Table: {
      headerBg: "#33363D",
      headerColor: "#F4F4F4",
      lineHeight: 2,
      fontSize: 14,
    },
    Spin: {
      dotSize: 24,
      dotSizeLG: 36,
      dotSizeSM: 18,
    },
  },
};

export default themeLight;

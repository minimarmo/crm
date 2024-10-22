import type { ThemeConfig } from "antd";

const themeDark: ThemeConfig = {
  token: {
    colorPrimary: "#96C65E",
    colorInfo: "#1e4c92",
    colorLink: "#00bfff",
    fontSize: 16,
    colorSuccess: "#95D5B2",
    colorWarning: "#F2CC8F",
    colorError: "#F28482",
    colorTextBase: "#ffffff",
    colorBgBase: "#33363D",
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
      headerBg: "#000000",
      siderBg: "#000000",
      bodyBg: "#000000",
    },
    Menu: {
      fontSize: 15,
      itemHeight: 40,
      subMenuItemBg: "transparent",
      colorSplit: "transparent",
      colorItemBg: "#000000",
      colorItemText: "#ffffff",
      colorItemBgHover: "#33363D",
      colorItemBgSelected: "#96C65E",
      colorItemTextSelected: "#000000",
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
      fullBg: "#33363D",
      controlItemBgActive: "#96C65E",
      colorPrimary: "#000000",
    },
    Segmented: {
      controlHeight: 36,
    },
    Table: {
      headerBg: "#CCCAB0",
      headerColor: "#33363D",
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

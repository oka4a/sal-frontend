import { ComponentStyleConfig } from "@chakra-ui/react";

const tabs: ComponentStyleConfig = {
  variants: {
    "solid-rounded-two-tabs": (props) => {
      const solidRoundedStyles =
        props.theme.components.Tabs.variants?.["solid-rounded"](props);
      return {
        ...solidRoundedStyles,
        tab: {
          ...solidRoundedStyles.tab,
          px: 4,
          boxShadow: "md",
          fontWeight: "normal",
          bg: "white",
          color: "primary.500",
          ":first-of-type": {
            me: "-40px",
            pe: "45px",
          },
          ":nth-of-type(2)": {
            ps: "45px",
          },
          _selected: {
            bg: "primary.500",
            color: "white",
            zIndex: 2,
            ":first-of-type": {
              pe: "4",
            },
            ":nth-of-type(2)": {
              ps: "4",
            },
          },
        },
      };
    },
  },
  sizes: {},
};

export default tabs;

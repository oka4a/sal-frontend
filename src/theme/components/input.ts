import { ComponentStyleConfig } from "@chakra-ui/react";

const input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      rounded: "full",
      fontSize: "xl",
      px: 6,
      py: 5,
      boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.05)",
    },
  },
  variants: {
    outline: {
      field: {
        bg: "white",
        border: "1px solid white",
        "::placeholder": {
          color: "#939598"
        }
      },
    },
  },
  sizes: {},
};

export default input;

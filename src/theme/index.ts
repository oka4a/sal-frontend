import { extendTheme } from "@chakra-ui/react";
import colors from "./foundations/colors";
import fonts from "./foundations/fonts";
import Button from "./components/button";
import Input from "./components/input";
import Tabs from "./components/tabs";
import styles from "./styles";

const theme = extendTheme({
  styles,
  fonts,
  colors,
  radii: {
    "8xl": "3.125rem"
  },
  components: {
    Button,
    Input,
    Tabs,
  },
});

export default theme;

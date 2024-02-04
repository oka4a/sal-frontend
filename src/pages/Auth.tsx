import {
  Box,
  Flex,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import authImage from "../assets/images/authImage.png";
import logoImage from "../assets/images/Logo.png";
// import Login from "./Login";
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const enum AuthForms {
  LOGIN,
  REGISTER,
}

const Auth = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabQueryParam = searchParams.get("tab");
  const tabNumber = tabQueryParam ? Number(tabQueryParam) : AuthForms.LOGIN;

  const [tabIndex, setTabIndex] = useState<AuthForms>(tabNumber);

  const handleTabsChange = (index: AuthForms) => {
    setTabIndex(index);
    setSearchParams({ tab: index.toString() });
  };
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minW="100vw"
      minH="100vh"
      bg="#F5F5F5"
    >
      <Stack
        direction={{
          base: "column",
          md: "row",
        }}
        maxW="3xl"
        border="1px solid green"
      >
        <Box bg="#EBFBFF" textAlign="center">
          <Image src={logoImage} maxW="120" display="inline-block" />
          <Tabs
            index={tabIndex}
            onChange={handleTabsChange}
            variant="soft-rounded"
            colorScheme="green"
            as={VStack}
          >
            <TabList>
              <Tab>Sign In</Tab>
              <Tab>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <LoginForm />
              </TabPanel>
              <TabPanel>
                <RegisterForm />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Flex bg="white" alignItems="flex-end" justifyContent="center">
          <Image src={authImage} maxW="400" />
        </Flex>
      </Stack>
    </Flex>
  );
};
export default Auth;

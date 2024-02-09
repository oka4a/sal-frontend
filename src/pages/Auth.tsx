import {
  Box,
  Center,
  HStack,
  Image,
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
    <Center minH="100vh" w="min(100%, 1200px)" mx="auto">
      <HStack
        flexGrow="1"
        borderRadius="8xl"
        spacing="0"
        alignItems="stretch"
        boxShadow={{base: 0, md: "lg"}}
      >
        <Box
          bg="#EBFBFF"
          px="4"
          textAlign="center"
          flexGrow="1"
          py="10"
          borderTopLeftRadius={{base: 0, md: "8xl"}}
          borderBottomLeftRadius={{base: 0, md: "8xl"}}
        >
          <Image src={logoImage} maxW="120" display="inline-block" />
          <Tabs
            index={tabIndex}
            onChange={handleTabsChange}
            variant="solid-rounded-two-tabs"
            colorScheme="primary"
            as={VStack}
            maxW="sm"
            mx="auto"
            size="lg"
          >
            <TabList justifyContent="center" py="8">
              <Tab>Sign in</Tab>
              <Tab>Sign up</Tab>
            </TabList>
            <TabPanels sx={{ "> div": { p: 0 } }}>
              <TabPanel>
                <LoginForm />
              </TabPanel>
              <TabPanel>
                <RegisterForm />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box
          w="48%"
          ms="-50px"
          display={{ base: "none", md: "flex" }}
          justifyContent="center"
          alignItems="flex-end"
          bg="white"
          borderRadius="8xl"
        >
          <Image src={authImage} borderRadius="8xl" />
        </Box>
      </HStack>
    </Center>
  );
};
export default Auth;

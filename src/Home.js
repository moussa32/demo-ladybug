import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Image,
  Button,
  Divider,
} from "@mantine/core";
import Logo from "./assets/images/Logo.PNG";
import { Link, NavLink } from "react-router-dom";
import { ImNewspaper } from "react-icons/im";
import { MdShoppingBag, MdOutlineOndemandVideo } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Input } from "@mantine/core";

export default function Home() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="md" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Text>الشريط</Text>
        </Navbar>
      }
      header={
        <Header height={90} p="sm">
          <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Image width={160} height={40} src={Logo} alt="logo" title="logo" />
            <ul>
              <Button
                as={Link}
                to="/"
                leftIcon={<ImNewspaper />}
                variant="subtle"
                radius="md"
                sx={(theme) => ({
                  // or use any other static values from theme
                  color: "#b9b8be",
                  fontSize: theme.fontSizes.xl,
                  fontWeight: 700,
                  transition: "0.4s",
                  "&:hover": {
                    color: "#4caf50",
                    backgroundColor: "rgb(76 175 80 / 20%)",
                  },
                })}
                p="xs"
                size="lg"
              >
                الرئيسية
              </Button>
              <Button
                as={Link}
                to="/"
                leftIcon={<MdOutlineOndemandVideo />}
                variant="subtle"
                radius="md"
                sx={(theme) => ({
                  // or use any other static values from theme
                  color: "#b9b8be",
                  fontSize: theme.fontSizes.xl,
                  fontWeight: 700,
                  transition: "0.4s",
                  "&:hover": {
                    color: "#4caf50",
                    backgroundColor: "rgb(76 175 80 / 20%)",
                  },
                })}
                p="xs"
                size="lg"
                mx="md"
              >
                فيديوهات
              </Button>
              <Button
                component={NavLink}
                to="/"
                leftIcon={<MdOutlineOndemandVideo />}
                variant="subtle"
                radius="md"
                sx={(theme, isActive) => ({
                  // or use any other static values from theme
                  color: isActive ? "#4caf50" : "#b9b8be",
                  fontSize: theme.fontSizes.xl,
                  fontWeight: 700,
                  transition: "0.4s",
                  "&:hover": {
                    color: "#4caf50",
                    backgroundColor: "rgb(76 175 80 / 20%)",
                  },
                })}
                mx="md"
                p="xs"
                size="lg"
              >
                الأعمال
              </Button>
              <Button
                mx="md"
                as={Link}
                to="/"
                leftIcon={<MdShoppingBag />}
                variant="subtle"
                radius="md"
                sx={(theme) => ({
                  // or use any other static values from theme
                  color: "#b9b8be",
                  fontSize: theme.fontSizes.xl,
                  fontWeight: 700,
                  transition: "0.4s",
                  "&:hover": {
                    color: "#4caf50",
                    backgroundColor: "rgb(76 175 80 / 20%)",
                  },
                })}
                p="xs"
                size="lg"
              >
                السوق
              </Button>
            </ul>
            <Input width={600} variant="filled" icon={<CiSearch />} placeholder="عن ماذا تريد ان تبحث ؟" />
            <div style={{ marginRight: "auto" }}>
              <Divider ml="md" size="sm" orientation="vertical" />
              <Button variant="filled" sx={(theme) => ({})} py={10} px={25} mr="md" size="lg">
                تسجيل الدخول
              </Button>
              <Button variant="outline" size="lg">
                إنشاء حساب
              </Button>
            </div>
          </div>
        </Header>
      }
    >
      <Text>محتوى</Text>
    </AppShell>
  );
}

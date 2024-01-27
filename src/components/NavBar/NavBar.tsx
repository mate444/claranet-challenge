import { FC } from "react";
import { Link, Text, Center } from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";

const NavBar: FC = () => {
  const currentUrl = useLocation();
  return (
    <>
      <Center
      h={"120px"}
      w={"100%"}
      gap={3}
      bgColor={"rgba(131, 0, 0, 0.5)"}>
        <Link
          as={ReactRouterLink}
          to="/"
          fontSize={50}
          color={currentUrl.pathname === "/" ? "red" : "black"}
          >
          Home
        </Link>
        <Text fontSize={50}>
          |
        </Text>
        <Link
          fontSize={50}
          as={ReactRouterLink}
          to="/profile"
          color={currentUrl.pathname === "/profile" ? "red" : "black"}>
          Profilo
        </Link>
      </Center>
    </>
  )
}

export default NavBar;

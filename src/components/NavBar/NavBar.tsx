import { FC } from "react";
import { Link, Text, Center, Flex, Box } from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import PlaylistMenu from "../PlaylistMenu/PlaylistMenu";

const NavBar: FC = () => {
  const currentUrl = useLocation();
  return (
    <Flex
      h={"120px"}
      w={"100%"}
      gap={3}
      bgColor={"rgba(131, 0, 0, 0.5)"}
      alignItems={"center"}>
      {
        currentUrl.pathname === "/profile" && <PlaylistMenu />
      }
      <Box position={"absolute"} left={"50%"} right={"50%"}>
      <Center>
        <Link
          as={ReactRouterLink}
          to="/"
          fontSize={["2.5rem","3rem"]}
          color={currentUrl.pathname === "/" ? "red" : "black"}
          >
          Home
        </Link>
        <Text mx={2} fontSize={["2.5rem","3rem"]}>
          |
        </Text>
        <Link
          fontSize={["2.5rem","3rem"]}
          as={ReactRouterLink}
          to="/profile"
          color={currentUrl.pathname === "/profile" ? "red" : "black"}>
          Profilo
        </Link>
      </Center>

      </Box>
    </Flex>
  )
}

export default NavBar;

import { FC, useState } from "react";
import { Flex, Button, Input } from "@chakra-ui/react";
import useSearch from "../../hooks/useSearch";

const SearchBar: FC = () => {
  const [search, setSearch] = useState<string>("");
  const fetchSearch = useSearch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <Flex
      alignItems={"center"}
      mt={"5rem"}>
    <Input
      borderLeftRadius={"20px"}
      borderRightRadius={"0px"}
      bgColor={"#D9D9D9"}
      border={"0px"}
      w={"500px"}
      placeholder={"Cerca video"}
      onKeyDown={(e) => {
        if (e.key === "Enter") fetchSearch(search);
      }} onChange={handleChange} value={search} />
    <Button
      borderLeftRadius={"0px"}
      borderRightRadius={"20px"}
      bgColor={"#D9D9D9"}
      _hover={{ bg: "#D9D9D9" }}
      onClick={() => fetchSearch(search)}>
        🔍
    </Button>
  </Flex>
  )
}

export default SearchBar;

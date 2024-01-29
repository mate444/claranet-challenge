import { FC, useState } from "react";
import { Flex, Button, Input } from "@chakra-ui/react";
import useSearch from "../../hooks/useSearch";

interface ISearchBarProps {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar: FC<ISearchBarProps> = (props) => {
  const [search, setSearch] = useState<string>("");
  const fetchSearch = useSearch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    props.setIsLoading(true);
    fetchSearch(search).then(() => {
      props.setIsLoading(false);
    });
  }
  return (
    <Flex
      alignItems={"center"}
      mt={"5rem"}
      width={["55vw", "45vw", "45vw", "30vw"]}>
    <Input
      borderLeftRadius={"20px"}
      borderRightRadius={"0px"}
      bgColor={"#D9D9D9"}
      border={"0px"}
      h={"50px"}
      placeholder={"Cerca video"}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleSearch();
      }} onChange={handleChange} value={search} />
    <Button
      borderLeftRadius={"0px"}
      borderRightRadius={"20px"}
      h={"50px"}
      bgColor={"#D9D9D9"}
      _hover={{ bg: "#D9D9D9" }}
      onClick={handleSearch}>
        🔍
    </Button>
  </Flex>
  )
}

export default SearchBar;

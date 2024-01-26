import { FC, useState } from "react";
import { Center } from "@chakra-ui/react";
import SearchBar from "../components/SearchBar/SearchBar";
import VideoList from "../components/VideoList/VideoList";
const Home: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <Center flexDir={"column"} gap={40}>
    <SearchBar setIsLoading={setIsLoading}/>
    <VideoList isLoading={isLoading} setIsLoading={setIsLoading}/>
    </Center>
  )
}

export default Home;

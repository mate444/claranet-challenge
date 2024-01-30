import { FC, useState } from "react";
import { Center } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { VideosAtom } from "../state/Videos";
import useSearch from "../hooks/useSearch"
import SearchBar from "../components/SearchBar/SearchBar";
import VideoList from "../components/VideoList/VideoList";
import { VideoType } from "../interfaces/Video";
const Home: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { videos, nextPage, search } = useRecoilValue(VideosAtom);
  const fetchSearch = useSearch();
  const handleLoad = () => {
    setIsLoading(true);
    fetchSearch(search, nextPage).then(() => {
      setIsLoading(false);
    });
  }
  return (
    <Center flexDir={"column"} gap={40}>
    <SearchBar setIsLoading={setIsLoading}/>
    <VideoList
      type={VideoType.Home}
      onLoad={handleLoad}
      videos={videos}
      isLoading={isLoading}
      setIsLoading={setIsLoading}/>
    </Center>
  )
}

export default Home;

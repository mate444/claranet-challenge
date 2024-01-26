import { FC } from "react";
import { useRecoilValue } from "recoil";
import { VideosAtom } from "../../state/Videos";
import { Flex, SimpleGrid, Button } from "@chakra-ui/react";
import Loader from "../Loader/Loader";
import Video from "../Video/Video";
import useSearch from "../../hooks/useSearch";

interface  IVideoListProps {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const VideoList: FC<IVideoListProps> = (props) => {
  const { videos, nextPage, search } = useRecoilValue(VideosAtom);
  const fetchSearch = useSearch();
  const handleSearch = () => {
    props.setIsLoading(true);
    fetchSearch(search, nextPage).then(() => {
      props.setIsLoading(false);
    });
  }
  return (
    <Flex flexDir={"column"}>
      { (!props.isLoading || videos.length > 0) &&
        <SimpleGrid
        columns={3}
        spacing={"30px"}>
          { videos.map((v, i) => (
            <Video
            key={i}
            video={{...v.snippet, id: v.id.videoId}}
            /> 
            )) }
        </SimpleGrid>
      }
      { videos.length > 0 &&
      <Button
        w={"50%"}
        m={"auto"}
        my={"1em"}
        borderRadius={20}
        bgColor={"rgba(131, 0, 0, 0.5)"}
        _hover={{ bgColor: "rgba(131, 0, 0, 0.5)" }}
        onClick={handleSearch}>
        Carica più video
      </Button> }
      { props.isLoading && <Loader /> }
    </Flex>
  )
}

export default VideoList;

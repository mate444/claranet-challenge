import { FC } from "react";
import { Flex, SimpleGrid, Button } from "@chakra-ui/react";
import Loader from "../Loader/Loader";
import Video from "../Video/Video";
import { IVideo, VideoType } from "../../interfaces/Video";

interface  IVideoListProps {
  isLoading?: boolean;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  videos: IVideo[];
  onLoad?: () => void;
  type: VideoType;
}

const VideoList: FC<IVideoListProps> = (props) => {
  const { videos, type } = props;
  return (
    <Flex flexDir={"column"}>
      { (!props.isLoading || videos.length > 0) &&
        <SimpleGrid
        columns={[1, 1, 2, 3, 3, 4]}
        spacing={"30px"}>
          { videos.map((v, i) => (
            <Video
            type={type}
            key={i}
            video={v}
            /> 
            )) }
        </SimpleGrid>
      }
      { videos.length > 0 && props.onLoad !== undefined &&
      <Button
        w={"50%"}
        m={"auto"}
        my={"1em"}
        borderRadius={20}
        bgColor={"rgba(131, 0, 0, 0.5)"}
        _hover={{ bgColor: "rgba(131, 0, 0, 0.5)" }}
        onClick={props.onLoad}>
        Carica più video
      </Button> }
      { props.isLoading && <Loader /> }
    </Flex>
  )
}

export default VideoList;

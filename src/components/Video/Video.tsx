import { FC } from "react";
import { 
  Grid,
  Text,
  Image,
  Heading,
  GridItem,
  IconButton,
  useDisclosure
 } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { IVideoSnippet } from "../../interfaces/Video";
import { getTimeSince } from "../../utils/GetTimeSince"
import he from "he";
import AddVideoModal from "../AddVideoModal/AddVideoModal";

const Video: FC<{ video: IVideoSnippet }> = (props) => {
  const { title, thumbnails, channelTitle, publishedAt } = props.video;
  const { isOpen, onClose, onOpen } = useDisclosure();
  const fixedTitle = he.decode((title.length >= 80 ? `${title.substring(0, 80)}...` : title));
  return (
    <>
      <Grid
        gap={1}
        templateRows={"180px 0.1fr 0.1fr"}
        gridTemplateColumns={"270px 50px"}>
        <GridItem
          rowStart={1}
          rowEnd={2}
          colSpan={2}>
          <Image
            borderRadius={15}
            src={thumbnails.medium.url}
            gridRow={""}/>
        </GridItem>
        <GridItem
          rowStart={2}
          rowEnd={3}
          colSpan={2}>
          <Heading
            size={"s"}
            maxW={"320px"}> {fixedTitle} </Heading>
        </GridItem>
        <GridItem rowStart={3}>
          <Text> {channelTitle} </Text>
          <Text> {getTimeSince(new Date(publishedAt))} </Text>
        </GridItem>
        <GridItem
          colStart={2}
          rowStart={3}
          rowSpan={2}>
          <IconButton
              aria-label="Aggiungi video"
              bgColor={"#FFFFFF"}
              _hover={{ bgColor: "#FFFFFF" }}
              fontSize={"1em"}
              onClick={onOpen}
              icon={<AddIcon />}/>
        </GridItem>
      </Grid>
      <AddVideoModal isOpen={isOpen} onClose={onClose} video={props.video}/>
    </>
  )
}

export default Video;

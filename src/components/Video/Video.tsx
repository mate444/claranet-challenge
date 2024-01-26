import { FC } from "react";
import { 
  Grid,
  Text,
  Image,
  Heading,
  GridItem,
  IconButton
 } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { IVideoSnippet } from "../../interfaces/Video";
import { getTimeSince } from "../../utils/GetTimeSince"
import he from "he";

const Video: FC<IVideoSnippet> = (props) => {
  
  const fixedTitle = he.decode((props.title.length >= 80 ? `${props.title.substring(0, 80)}...` : props.title));
  return (
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
          src={props.thumbnails.medium.url}
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
        <Text> {props.channelTitle} </Text>
        <Text> {getTimeSince(new Date(props.publishedAt))} </Text>
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
            icon={<AddIcon />}/>
      </GridItem>
    </Grid>
  )
}

export default Video;

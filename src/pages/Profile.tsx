import { FC } from "react";
import { useRecoilValue } from "recoil";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import { PlaylistsAtom } from "../state/Playlist";
import VideoList from "../components/VideoList/VideoList";
import { VideoType } from "../interfaces/Video";

const Profile: FC = () => {
  const { currentPlaylist, playlists } = useRecoilValue(PlaylistsAtom);
  return (
    <Flex w={"100%"}>
      {
        currentPlaylist ? currentPlaylist.videos.length > 0 ? <Box w={"100%"}>
          <Center my={"30px"}>
            <Heading>{currentPlaylist.title}</Heading>
          </Center>
          <Center py={"10px"}>
          <VideoList type={VideoType.Profile} videos={currentPlaylist.videos}/>
          </Center>
          </Box> : <Box w={"100%"}>
            <Center>
              <Heading my={"30px"}>{currentPlaylist.title}</Heading>
            </Center>
            <Center pt={"30px"} w={"100%"}>
              <Heading> Nessun Video </Heading>
          </Center>
          </Box> : null
      }
      {
        !currentPlaylist && !!playlists.length && <Center w={"100%"}> <Heading>Seleziona una playlist</Heading> </Center>
      }
      {
        !playlists.length &&  <Center w={"100%"}> <Heading>Nessuna playlist ancora</Heading> </Center>
      }
    </Flex>
  )
}

export default Profile;

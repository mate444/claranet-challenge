import { FC } from "react";
import { useRecoilValue } from "recoil";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import { PlaylistsAtom } from "../state/Playlist";
import PlaylistMenu from "../components/PlaylistMenu/PlaylistMenu";
import VideoList from "../components/VideoList/VideoList";

const Profile: FC = () => {
  const { currentPlaylist, playlists } = useRecoilValue(PlaylistsAtom);
  console.log(currentPlaylist)
  return (
    <Flex w={"100%"}>
      <PlaylistMenu />
      {
        currentPlaylist ? currentPlaylist.videos.length > 0 ? <Box
          p={"100px"}
          w={"100%"}
          m={"50px 100px 50px 100px"}>
          <Center mb={"30px"}>
            <Heading>{currentPlaylist.title}</Heading>
          </Center>
          <VideoList videos={currentPlaylist.videos}/>
          </Box> : <Box
          p={"100px"}
          w={"100%"}
          m={"50px 100px 50px 100px"}>
            <Center>
            <Heading>{currentPlaylist.title}</Heading>
            </Center>
            <Center pt={"30px"} w={"100%"}>
            <Heading> Nessun Video </Heading>
          </Center>
          </Box> : null
      }
      {
        !currentPlaylist && playlists.length && <Center w={"100%"}> <Heading>Seleziona una playlist</Heading> </Center>
      }
    </Flex>
  )
}

export default Profile;

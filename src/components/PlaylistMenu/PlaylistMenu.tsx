import { FC, useState } from "react";
import { PlaylistsAtom } from "../../state/Playlist";
import { useRecoilValue } from "recoil";
import {
    Flex,
    Heading,
    Button,
    useDisclosure,
  } from "@chakra-ui/react";
import { IPlaylist } from "../../interfaces/Playlist";
import { useSetPlaylist } from "../../hooks/useSetPlaylist";
import CreatePlaylistModal from "../CreatePlaylistModal/CreatePlaylistModal";
import Playlist from "../Playlist/Playlist";

const PlaylistMenu: FC = () => {
  const { playlists } = useRecoilValue(PlaylistsAtom);
  const [selected, setSelected] = useState<number | null>(null);
  const { setCurrentPlaylist, deletePlaylist, editPlaylistTitle } = useSetPlaylist();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const handleSelected = (index: number, playlist: IPlaylist) => {
    setSelected(index);
    setCurrentPlaylist(playlist);
  }
  const handleDeletePlaylist = (id: number) => {
    setSelected(null);
    setCurrentPlaylist(null);
    deletePlaylist(id);
  }
  return (
    <Flex
      m={"20px"}
      p={"10px"}
      flexDir={"column"}
      w={"200px"}>
      <Heading size={"2xl"} m={"30px 0px 50px 0px"} alignSelf={"center"}> Playlists </Heading>
      <Flex flexDir={"column"} overflow={"auto"}>
        {
          playlists.length > 0 && playlists.map((p, i) => (
            <Playlist 
              key={p.id}
              playlist={p}
              handleSelected={handleSelected}
              selected={selected}
              index={i}
              deletePlaylist={handleDeletePlaylist}
              editPlaylistTitle={editPlaylistTitle}
              />
          ))
        }
      </Flex>
      <Button
        onClick={onOpen}
        borderRadius={20}
        my={"30px"}
        w={"100px"}
        alignSelf={"center"}
        bgColor={"rgba(131, 0, 0, 0.5)"}
        _hover={{ bgColor: "rgba(131, 0, 0, 0.5)" }}>
          Crea
      </Button>
      <CreatePlaylistModal isOpen={isOpen} onClose={onClose}/>
    </Flex>
  );
}

export default PlaylistMenu;

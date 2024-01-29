import { FC, useState } from "react";
import { PlaylistsAtom } from "../../state/Playlist";
import { useRecoilValue } from "recoil";
import {
  Flex,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  IconButton
} from "@chakra-ui/react";
import { IPlaylist } from "../../interfaces/Playlist";
import { useSetPlaylist } from "../../hooks/useSetPlaylist";
import CreatePlaylistModal from "../CreatePlaylistModal/CreatePlaylistModal";
import Playlist from "../Playlist/Playlist";
import { HamburgerIcon } from "@chakra-ui/icons";

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
    <>
    <IconButton
      icon={<HamburgerIcon />}
      aria-label="OpenPlaylistMenu"
      onClick={onOpen}
      borderRadius={20}
      my={"30px"}
      mx={"10px"}
      maxW={"8vw"}
      size={"lg"}
      bgColor={"rgba(131, 0, 0, 0.5)"}
      _hover={{ bgColor: "rgba(131, 0, 0, 0.5)" }}>Playlists</IconButton>
    <Drawer
    size={"xs"}
    isOpen={isOpen}
    onClose={onClose}
    placement="left">
    <DrawerOverlay />
    <DrawerContent>
    <DrawerCloseButton />
    <DrawerHeader> Playlists </DrawerHeader>
    <DrawerBody>
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
    <CreatePlaylistModal />
    </DrawerBody>
    </DrawerContent>
  </Drawer>    
    
    </>
  );
}

export default PlaylistMenu;

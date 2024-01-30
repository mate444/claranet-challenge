import { FC, useState } from "react";
import {
  useDisclosure,
  Button,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalContent,
  Input,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  useToast
} from "@chakra-ui/react";
import { HamburgerIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { IPlaylist } from "../../interfaces/Playlist";
import { useSetPlaylist } from "../../hooks/useSetPlaylist";

interface IPlaylistProps {
  playlist: IPlaylist;
  selected: number | null;
  index: number;
  handleSelected: (index: number, playlist: IPlaylist) => void;
  setSelected: (index: number | null) => void;
  editPlaylistTitle: (newTitle: string, id: number) => void;
}

const Playlist: FC<IPlaylistProps> = (props) => {
  const { setCurrentPlaylist, deletePlaylist } = useSetPlaylist(useToast());
  const { playlist: { id, title }, selected, handleSelected, setSelected, index, editPlaylistTitle } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newTitle, setNewTitle] = useState<string>(title);
  const handleEditTitle = () => {
    if (newTitle !== title) {
      editPlaylistTitle(newTitle, id);
    }
    onClose();
  }
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();
    setSelected(null);
    setCurrentPlaylist(null);
    deletePlaylist(id)
  }
  return (
    <Flex
      p={"10px"}
      h={"40px"}
      gap={2}
      alignItems={"center"}
      justifyContent={"space-between"}
      key={id}
      borderRadius={10}
      _hover={{ bgColor: "lightgray", cursor: "pointer" }}
      bgColor={selected === index ? `lightgray` : `white`}
      overflow={"hidden"}
      onClick={() => handleSelected(index, props.playlist)}
      >
        <Heading
          fontWeight={"500"}
          size={"md"}
          textOverflow={"ellipsis"}
          overflow={"hidden"}
          whiteSpace={"nowrap"}> {title}
        </Heading>
        { 
          selected === index &&
          <Menu>
            <MenuButton
              size={"sm"}
              as={IconButton}
              aria-label="PlaylistAction"
              icon={<HamburgerIcon />}
              bgColor={"inherit"}
              transition={"0s"}
              alignSelf={"center"}
              _hover={{ bgColor: "inherit" }}
              onClick={(e) => {
                e.stopPropagation();
              }}>
            </MenuButton>
            <MenuList>
              <MenuItem icon={<EditIcon />} onClick={onOpen}> Cambia nome </MenuItem>
              <MenuItem icon={<DeleteIcon />} onClick={(e) => handleDelete(e, id)}> Elimina </MenuItem>
            </MenuList>
          </Menu>
        }
        <Modal isCentered  isOpen={isOpen} onClose={handleEditTitle}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader> Edita playlist </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}/>
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleEditTitle}>Edita</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </Flex>
  );
}

export default Playlist;

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
} from "@chakra-ui/react";
import { HamburgerIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { IPlaylist } from "../../interfaces/Playlist";

interface IPlaylistProps {
  playlist: IPlaylist;
  selected: number | null;
  index: number;
  handleSelected: (index: number, playlist: IPlaylist) => void;
  deletePlaylist: (id: number) => void;
  editPlaylistTitle: (newTitle: string, id: number) => void;
}

const Playlist: FC<IPlaylistProps> = (props) => {
  const { playlist: { id, title }, selected, handleSelected, index, deletePlaylist, editPlaylistTitle } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newTitle, setNewTitle] = useState<string>(title);
  const handleEditTitle = () => {
    editPlaylistTitle(newTitle, id);
    onClose();
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
      onClick={() => handleSelected(index, props.playlist)}
      overflow={"hidden"}>
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
              _hover={{ bgColor: "inherit" }}>
            </MenuButton>
            <MenuList>
              <MenuItem icon={<EditIcon />} onClick={onOpen}> Cambia nome </MenuItem>
              <MenuItem icon={<DeleteIcon />} onClick={() => deletePlaylist(id)}> Elimina </MenuItem>
            </MenuList>
          </Menu>
        }
        <Modal isCentered  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader> Edita playlist </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                onBlur={handleEditTitle}
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

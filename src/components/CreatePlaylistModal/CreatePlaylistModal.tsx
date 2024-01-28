import { FC, useState } from "react";
import { useSetPlaylist } from "../../hooks/useSetPlaylist";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Button,
  Input,
  ModalCloseButton,
  ModalBody,
  ModalFooter
} from "@chakra-ui/react";

interface ICreatePlaylistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreatePlaylistModal: FC<ICreatePlaylistModalProps> = (props) => {
  const { createPlaylist } = useSetPlaylist();
  const [title, setTitle] = useState("Nuova Playlist");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }
  const handleCreate = () => {
    createPlaylist(title)
    props.onClose();
  }
  return (
    <Modal
      onClose={props.onClose}
      isOpen={props.isOpen}
      size={"md"}
      isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign={"center"}>
          Crea una playlist
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input value={title} placeholder="Nuova Playlist" onChange={handleChange}/>
        </ModalBody>
      <ModalFooter>
      <Button
        borderRadius={20}
        w={"100px"}
        alignSelf={"center"}
        bgColor={"rgba(131, 0, 0, 0.5)"}
        _hover={{ bgColor: "rgba(131, 0, 0, 0.5)" }}
        onClick={handleCreate}>
          Crea
      </Button>
      </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CreatePlaylistModal;

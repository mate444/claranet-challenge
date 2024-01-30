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
  ModalFooter,
  useDisclosure,
  useToast
} from "@chakra-ui/react";

const CreatePlaylistModal: FC = () => {
  const { createPlaylist } = useSetPlaylist(useToast());
  const [title, setTitle] = useState("Nuova Playlist");
  const { isOpen, onClose, onOpen } = useDisclosure();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }
  const handleCreate = () => {
    createPlaylist(title)
    onClose();
  }
  return (
    <>
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
    <Modal
      onClose={onClose}
      isOpen={isOpen}
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
    </>
  );
}

export default CreatePlaylistModal;

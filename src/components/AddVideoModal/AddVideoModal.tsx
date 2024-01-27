import { FC } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Flex,
  Heading,
  Text,
  Link,
  ModalFooter,
  ModalBody
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { PlaylistsAtom } from "../../state/Playlist";
import { useRecoilValue } from "recoil";
import { IVideo } from "../../interfaces/Video";
import { useAddVideo } from "../../hooks/useAddVideo";

interface IAddVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: IVideo
}

const AddVideoModal: FC<IAddVideoModalProps> = (props) => {
  const { playlists } = useRecoilValue(PlaylistsAtom);
  const addVideo = useAddVideo();
  const handleVideoAdd = (playlistId: number) => {
    addVideo(props.video, playlistId)
  };
  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      size={"xl"}
      isCentered>
      <ModalOverlay />
      <ModalContent
        py={"40px"}
        px={"80px"}
        >
      {
        playlists.length > 0 ?
          <Flex
            flexDir={"column"}
            maxH={"300px"}>
          <Heading textAlign={"center"}>Aggiungi alla playlist</Heading>
          <ModalCloseButton />
          <Flex
            flexDir={"column"}
            overflowY={"scroll"}
            mt={"40px"}
            py={"5px"}>
          {
            playlists.map((p) => (
              <Flex
                key={p.id}
                flexDir={"column"}
                cursor={"pointer"}
                borderBottom={"1px"}
                py={"10px"}
                width={"100%"}
                _hover={{ bgColor: "lightgray" }}
                onClick={() => handleVideoAdd(p.id)}>
                <Heading size={"sm"}> {p.title} </Heading>
                <Text>{p.videos.length === 1 ? `1 video` : `${p.videos.length} videos`}</Text>
              </Flex>
            ))
          }
        </Flex>
        </Flex> : <>
          <ModalCloseButton />
          <ModalBody>
          <Heading textAlign={"center"}>
            Nessuna Playlist
            </Heading>
          </ModalBody>
            <ModalFooter>
            <Heading textAlign={"end"} size={"s"}>
            Crea una nuova <Link color={"blue"} to="/profile" as={ReactLink}>qui</Link>
            </Heading>
            </ModalFooter>
              
        </>
      }
      </ModalContent>
    </Modal>
  )
}

export default AddVideoModal;

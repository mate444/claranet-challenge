import { FC, useRef } from "react";
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogCloseButton,
  IconButton,
  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogHeader,
  useToast
} from "@chakra-ui/react";
import { IVideo } from "../../interfaces/Video";
import { useAddVideo } from "../../hooks/useSetVideo";
import { CheckIcon, CloseIcon, DeleteIcon } from "@chakra-ui/icons";

interface IRemoveVideoAlertProps {
  isOpen: boolean;
  onClose: () => void;
  video: IVideo
}

const RemoveVideoAlert: FC<IRemoveVideoAlertProps> = (props) => {
  const { removeVideoFromPlaylist } = useAddVideo(useToast());
  const cancelRef = useRef(null)
  const handleVideoRemoval = () => {
    removeVideoFromPlaylist(props.video);
    props.onClose();
  };
  return (
    <AlertDialog leastDestructiveRef={cancelRef} onClose={props.onClose} isOpen={props.isOpen} isCentered>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <DeleteIcon mt={3} ml={3}/>
        <AlertDialogCloseButton />
        <AlertDialogHeader> Rimuovere Video dalla playlist </AlertDialogHeader>
        <AlertDialogBody>Sei sicuro? Non potrai annullare questa azione</AlertDialogBody>
        <AlertDialogFooter>
          <IconButton bgColor={"white"} mr={3} aria-label="CancelVideoRemoval" onClick={props.onClose} ref={cancelRef} icon={<CloseIcon />}/>
          <IconButton colorScheme={"orange"} aria-label="ConfirmVideoRemoval" ml={3} onClick={handleVideoRemoval} icon={<CheckIcon />}/>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
};

export default RemoveVideoAlert;

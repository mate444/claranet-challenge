import { FC, useState, useRef } from "react";
import { 
  Editable,
  EditablePreview,
  EditableInput,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
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
  const [editMode, setEditMode] = useState<boolean>(false);
  const { playlist: { id, title }, selected, handleSelected, index, deletePlaylist, editPlaylistTitle } = props;
  const [newTitle, setNewTitle] = useState<string>(title);
  const inputRef = useRef<null | HTMLInputElement>(null);
  const handleEditMode = () => {
    setEditMode(true)
    console.log(inputRef.current?.focus())
    inputRef.current && inputRef.current.focus();
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
      {
        !editMode ?
        <Heading
          fontWeight={"500"}
          size={"md"}
          textOverflow={"ellipsis"}
          overflow={"hidden"}
          whiteSpace={"nowrap"}> {title}
        </Heading> :
        <Editable defaultValue={newTitle} onChange={(e) => setNewTitle(e)}>
          <EditablePreview as={Heading}
          fontWeight={"500"}
          size={"md"}
          textOverflow={"ellipsis"}
          overflow={"hidden"}
          whiteSpace={"nowrap"}/>
          <EditableInput
           ref={inputRef}
           onBlur={() => { 
            editPlaylistTitle(newTitle, id);
            setEditMode(false)}}
            />
        </Editable>
      }
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
              <MenuItem icon={<EditIcon />} onClick={handleEditMode}> Cambia nome </MenuItem>
              <MenuItem icon={<DeleteIcon />} onClick={() => deletePlaylist(id)}> Elimina </MenuItem>
            </MenuList>
          </Menu>
        }
    </Flex>
  );
}

export default Playlist;

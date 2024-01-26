import { atom } from "recoil";
import { IPlaylist } from "../interfaces/Playlist";

interface PlaylistsAtom {
  playlists: IPlaylist[]
}

export const PlaylistsAtom = atom<PlaylistsAtom>({
  key: "playlists",
  default: {
    playlists: []
  }
});

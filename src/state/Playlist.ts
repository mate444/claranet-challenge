import { atom } from "recoil";
import { IPlaylist } from "../interfaces/Playlist";

interface PlaylistsAtom {
  playlists: IPlaylist[];
  currentPlaylist: IPlaylist | null;
}

export const PlaylistsAtom = atom<PlaylistsAtom>({
  key: "playlists",
  default: {
    playlists: JSON.parse(localStorage.getItem("playlists") || `[]`),
    currentPlaylist: null
  }
});

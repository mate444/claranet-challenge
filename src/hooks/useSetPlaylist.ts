import { useSetRecoilState } from "recoil";
import { PlaylistsAtom } from "../state/Playlist";
import { IPlaylist } from "../interfaces/Playlist";

export const useSetPlaylist = () => {
  const setRecoilState = useSetRecoilState(PlaylistsAtom);

  const setCurrentPlaylist = (playlist: IPlaylist | null) => {
    setRecoilState((oldState) => {
      return {
        ...oldState,
        currentPlaylist: playlist
      }
    });
  }

  const createPlaylist = (title: string) => {
    if (!localStorage.getItem("playlists")) localStorage.setItem("playlists", `[]`);
    setRecoilState((oldState) => {
      const newPlaylist:IPlaylist = {
        title,
        videos: [],
        id: Date.now()
      }
      const playlists = oldState.playlists.concat(newPlaylist);
      localStorage.setItem("playlists", JSON.stringify(playlists));
      return {
        ...oldState,
        playlists: playlists
      }
    });
  }

  const deletePlaylist = (id: number) => {
    setRecoilState((oldState) => {
      const filteredPlaylists = oldState.playlists.filter((p) => p.id !== id)
      localStorage.setItem("playlists", JSON.stringify(filteredPlaylists));
      return {
        ...oldState,
        playlists: filteredPlaylists
      }
    });
  }

  const editPlaylistTitle = (newTitle: string, id: number) => {
    if (!newTitle.length) return;
    setRecoilState((oldState) => {
      const editedPlaylist = oldState.playlists.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            title: newTitle
          }
        } else return p;
      })
      localStorage.setItem("playlists", JSON.stringify(editedPlaylist));
      return {
        ...oldState,
        playlists: editedPlaylist
      }
    });
  }
  return {
    setCurrentPlaylist,
    createPlaylist,
    deletePlaylist,
    editPlaylistTitle
  }
};

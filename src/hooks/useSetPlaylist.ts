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
    setRecoilState((oldState) => {
      const newPlaylist:IPlaylist = {
        title,
        videos: [],
        id: Date.now()
      }
      return {
        ...oldState,
        playlists: oldState.playlists.concat(newPlaylist)
      }
    });
  }

  const deletePlaylist = (id: number) => {
    setRecoilState((oldState) => {
      return {
        ...oldState,
        playlists: oldState.playlists.filter((p) => p.id !== id)
      }
    });
  }
  const editPlaylistTitle = (newTitle: string, id: number) => {
    if (!newTitle.length) return;
    setRecoilState((oldState) => {
      return {
        ...oldState,
        playlists: oldState.playlists.map((p) => {
          if (p.id === id) {
            return {
              ...p,
              title: newTitle
            }
          } else return p;
        })
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

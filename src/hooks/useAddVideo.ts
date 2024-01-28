import { useSetRecoilState } from "recoil";
import { PlaylistsAtom } from "../state/Playlist";
import { IVideo } from "../interfaces/Video";
import { IPlaylist } from "../interfaces/Playlist";

// Aggiungi un video ad una playlist specifica
export const useAddVideo = () => {
  const setPlaylistVideos = useSetRecoilState(PlaylistsAtom);
  return (video: IVideo, playlistId: number) => {
    setPlaylistVideos((oldState) => {
      let currentPlaylist: IPlaylist = { id: playlistId, videos: [], title: "" };
      // Logica per aggiungere/eliminare un video della playlist
      const newVideo = oldState.playlists.map((p) =>  {
        if (p.id === playlistId) {
          const existingVideoIndex = p.videos.findIndex((v) => v.id.videoId === video.id.videoId);
          if (existingVideoIndex === -1) {
            return {
              ...p,
              videos: [...p.videos, video],
            };
          } else {
            const updatedPlaylist = {
              ...p,
              videos: [...p.videos]
            }
            updatedPlaylist.videos.splice(existingVideoIndex, 1);
            currentPlaylist = updatedPlaylist;
            return updatedPlaylist;
          }
        } else {
          return p;
        }
      });
      localStorage.setItem("playlists", JSON.stringify(newVideo))
      return {
        ...oldState,
        playlists: newVideo,
        currentPlaylist
      }
    });
  }
}

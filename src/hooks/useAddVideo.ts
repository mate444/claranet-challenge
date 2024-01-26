import { useSetRecoilState } from "recoil";
import { PlaylistsAtom } from "../state/Playlist";
import { IVideoSnippet } from "../interfaces/Video";

// Aggiungi un video ad una playlist specifica
export const useAddVideo = () => {
  const setPlaylistVideos = useSetRecoilState(PlaylistsAtom);
  return (video: IVideoSnippet, playlistId: number) => {
    setPlaylistVideos((oldState) => {
      let existingVideo: IVideoSnippet | undefined;
      const newVideo = oldState.playlists.map((p) =>  {
        if (p.id === playlistId) {
          existingVideo = p.videos.find((v) => v.id === video.id);
          return {
            ...p,
            videos: p.videos.concat([video])
          }
        } else return p;
      });
      if (existingVideo) return oldState;
      return {
        ...oldState,
        playlists: newVideo
      }
    });
  }
}

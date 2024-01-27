import { useSetRecoilState } from "recoil";
import { PlaylistsAtom } from "../state/Playlist";
import { IVideo } from "../interfaces/Video";

// Aggiungi un video ad una playlist specifica
export const useAddVideo = () => {
  const setPlaylistVideos = useSetRecoilState(PlaylistsAtom);
  return (video: IVideo, playlistId: number) => {
    setPlaylistVideos((oldState) => {
      let existingVideo: IVideo | undefined;
      const newVideo = oldState.playlists.map((p) =>  {
        if (p.id === playlistId) {
          existingVideo = p.videos.find((v) => v.id.videoId === video.id.videoId);
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

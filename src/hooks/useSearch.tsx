import axios from "axios";
import { useSetRecoilState } from "recoil";
import { VideosAtom } from "../state/Videos";


export default function useSearch () {
  const setVideos = useSetRecoilState(VideosAtom);
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = "https://www.googleapis.com/youtube/v3/search";
    return async (search: string, nextPageToken?: string) => {
      const fixedSearch = search.trim().toLowerCase();
      if (!fixedSearch) return;
      const response = await axios.get(`${url}?key=${apiKey}&q=${search}${nextPageToken ? `&pageToken=${nextPageToken}` : ""}&maxResults=20&part=snippet&type=video`);
      const { data } = response;
      setVideos((oldState) => {
        const newVideos = data.prevPageToken ? oldState.videos.concat(data.items) : data.items;
        return {
          ...oldState,
          videos: newVideos,
          nextPage: data.nextPageToken,
          search
        }
      });
    };
}

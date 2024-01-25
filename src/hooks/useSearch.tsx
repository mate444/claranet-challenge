import axios from "axios";
import { useSetRecoilState } from "recoil";
import { VideosAtom } from "../state/Videos";


export default function useSearch () {
  const setVideos = useSetRecoilState(VideosAtom);
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = "https://www.googleapis.com/youtube/v3/search";
    return async (search: string) => {
      const fixedSearch = search.trim().toLowerCase();
      if (!fixedSearch) return;
      const response = await axios.get(`${url}?key=${apiKey}&q=${search}&maxResults=50&part=snippet&type=video`);
      const { data } = response;
      setVideos(data.items);
    };
}

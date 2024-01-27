import { atom } from "recoil";
import { IVideo } from "../interfaces/Video";

interface VideosAtom {
  videos: IVideo[];
  nextPage: string;
  search: string;
}

export const VideosAtom = atom<VideosAtom>({
  key: "videos",
  default: {
    videos: [],
    nextPage: "",
    search: ""
  }
})

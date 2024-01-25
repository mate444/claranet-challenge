import { atom } from "recoil";

export const VideosAtom = atom({
  key: "videos",
  default: {
    videos: []
  }
})

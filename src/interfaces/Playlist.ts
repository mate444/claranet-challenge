import { IVideoSnippet } from "./Video";

export interface IPlaylist {
  title: string;
  id: number;
  videos: IVideoSnippet[];
}

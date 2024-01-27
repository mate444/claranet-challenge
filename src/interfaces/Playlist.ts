import { IVideo } from "./Video";

export interface IPlaylist {
  title: string;
  id: number;
  videos: IVideo[];
}

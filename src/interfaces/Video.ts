export interface IVideoSnippet {
  channelTitle: string;
  thumbnails: {
    medium: {
      url: string;
    }
  }
  title: string;
  publishedAt: string;
}

export interface IVideo {
  etag: string;
  kind: string;
  snippet: IVideoSnippet;
  id: {
    videoId: string;
    kind: string;
  } 
}
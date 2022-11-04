import { baseApiSlice } from "../app/api/baseApiSlice";

interface IVideoParams {
  videoId: string;
}

interface IRelatedVideosParams {
  videoId: number;
  tags: string[];
}

const videoApi = baseApiSlice.injectEndpoints({
  endpoints: (build) => ({
    // fetch videos
    videos: build.query<IVideos, void>({
      query: () => "/videos",
    }),

    // fetch single video
    video: build.query<IVideo, IVideoParams>({
      query: ({ videoId }: IVideoParams) => `/videos/${videoId}`,
    }),

    // fetch related video
    relatedVideos: build.query<IVideos, IRelatedVideosParams>({
      query: ({ videoId, tags }: IRelatedVideosParams) => {
        const query = tags?.length > 0 && tags.map((tag: string) => `tags_like=${tag}`).join("&") + `&id_ne=${videoId}`;
        return `/videos?${query}`;
      },
    }),
  }),
});

export const { useVideosQuery, useVideoQuery, useRelatedVideosQuery } = videoApi;

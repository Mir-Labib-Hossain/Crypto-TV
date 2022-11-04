import { baseApiSlice } from "../app/api/baseApiSlice";

interface IVideoParams {
  videoId:  string;
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
  }),
});

export const { useVideosQuery, useVideoQuery } = videoApi;

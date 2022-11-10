import { baseApiSlice } from "../app/api/baseApiSlice";

interface IVideosParams {
  selectedTags: string[];
  searched: string;
}

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
    videos: build.query<IVideos, IVideosParams>({
      query: ({ selectedTags, searched }) => {
        let query = "";
        query += selectedTags?.length > 0 && selectedTags.map((tag: string) => `tags_like=${tag}`).join("&");
        query += searched && `&q=${searched}`;
        console.log("Videos api called.");
        
        // return `/videos?_limit=8&${query}`;
        return `/videos?&${query}`;
      },
    }),

    // fetch single video
    video: build.query<IVideo, IVideoParams>({
      query: ({ videoId }: IVideoParams) => `/videos/${videoId}`,
    }),

    // fetch related video
    relatedVideos: build.query<IVideos, IRelatedVideosParams>({
      query: ({ videoId, tags }: IRelatedVideosParams) => {
        const query = tags?.length > 0 ? tags.map((tag: string) => `tags_like=${tag}`).join("&") + `&id_ne=${videoId}` : "";
        return `/videos?${query}`;
      },
    }),
  }),
});

export const { useVideosQuery, useVideoQuery, useRelatedVideosQuery } = videoApi;

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
  author?: string;
}

interface IUpdateReaction {
  videoId: number;
  type: string;
  currentNum: number;
}

interface IAddVideo {
  title: string;
  description: string;
  author: string;
  avatar: string;
  date: string;
  duration: string;
  views: number;
  link: string;
  thumbnail: string;
  tags: string[];
}

const videoApi = baseApiSlice.injectEndpoints({
  endpoints: (build) => ({
    // fetch videos
    videos: build.query<IVideos, IVideosParams>({
      providesTags: ["videos"],
      query: ({ selectedTags, searched }) => {
        let query = "";
        if (selectedTags?.length > 0) query += selectedTags.map((tag: string) => `tags_like=${tag}`).join("&");
        if (searched) query += `&q=${searched}`;
        return `/videos?${query}`;
      },
    }),

    // fetch single video
    video: build.query<IVideo, IVideoParams>({
      query: ({ videoId }: IVideoParams) => `/videos/${videoId}`,
    }),

    // fetch related video
    relatedVideos: build.query<IVideos, IRelatedVideosParams>({
      query: ({ videoId, tags, author }: IRelatedVideosParams) => {
        let query = "";

        if (author) query = `author_like=${author}`;
        else query = tags?.length > 0 ? tags.map((tag: string) => `tags_like=${tag}`).join("&") : "";

        return `/videos?${query}&id_ne=${videoId}`;
      },
    }),

    // update reaction
    updateReaction: build.mutation<IVideo, IUpdateReaction>({
      query: ({ videoId, type, currentNum }) => {
        const body =
          type === "like"
            ? {
                likes: currentNum + 1,
              }
            : {
                unlikes: currentNum - 1,
              };
        return {
          url: `/videos/${videoId}`,
          method: "PATCH",
          body,
        };
      },
    }),

    // add video
    addVideo: build.mutation<IVideo, IAddVideo>({
      invalidatesTags: ["videos"],
      query: (data) => ({
        url: `/videos`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useVideosQuery, useVideoQuery, useRelatedVideosQuery, useUpdateReactionMutation, useAddVideoMutation } = videoApi;

import { baseApiSlice } from "../app/api/baseApiSlice";

interface IVideosParams {
  selectedTags: string[];
  searched: string;
}

interface IVideoIdParams {
  videoId: string | number; // string type for useParams(videoId) and number type for props{id}
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

interface IAddVideoPayload {
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

interface IEditVideoPayloadParam {
  videoId: number;
  data: IAddVideoPayload;
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
    video: build.query<IVideo, IVideoIdParams>({
      providesTags: (result, error, args) => [
        {
          type: "video",
          id: args.videoId,
        },
      ],
      query: ({ videoId }: IVideoIdParams) => `/videos/${videoId}`,
    }),

    // fetch related video
    relatedVideos: build.query<IVideos, IRelatedVideosParams>({
      providesTags: (result, error, args) => [
        {
          type: "relatedVideos",
          id: args.videoId,
        },
      ],
      query: ({ videoId, tags, author }: IRelatedVideosParams) => {
        let query = "";
        if (author) {
          query = `author_like=${author}`;
        } else {
          query = tags?.length > 0 ? tags.map((tag: string) => `tags_like=${tag}`).join("&") : "";
        }
        return `/videos?${query}&id_ne=${videoId}`;
      },
    }),

    // update reaction
    updateReaction: build.mutation<IVideo, IUpdateReaction>({
      invalidatesTags: (result, error, args) => [
        {
          type: "video",
          id: args.videoId,
        },
      ],
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
    addVideo: build.mutation<IVideo, IAddVideoPayload>({
      invalidatesTags: ["videos"],
      query: (data) => ({
        url: `/videos`,
        method: "POST",
        body: data,
      }),
    }),

    // edit video
    editVideo: build.mutation<IVideo, IEditVideoPayloadParam>({
      invalidatesTags: ["videos", "relatedVideos"],
      query: ({ videoId, data }) => ({
        url: `/videos/${videoId}`,
        method: "PUT",
        body: data,
      }),
    }),

    // delete vide
    // add video
    deleteVideo: build.mutation<void, IVideoIdParams>({
      invalidatesTags: ["videos"],
      query: ({ videoId }) => ({
        url: `/videos/${videoId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useVideosQuery, useVideoQuery, useRelatedVideosQuery, useUpdateReactionMutation, useAddVideoMutation, useEditVideoMutation, useDeleteVideoMutation } = videoApi;

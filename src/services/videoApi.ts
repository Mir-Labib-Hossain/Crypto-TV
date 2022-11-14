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

interface IUpdateLike {
  videoId: number;
  likes: number;
}

interface IUpdateUnlike {
  videoId: number;
  unlikes: number;
}

interface IUpdateReaction {
  videoId: number;
  type: string;
  currentNum: number;
}

const videoApi = baseApiSlice.injectEndpoints({
  endpoints: (build) => ({
    // fetch videos
    videos: build.query<IVideos, IVideosParams>({
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
        console.log(author);

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

    // update like
    updateLike: build.mutation<IVideo, IUpdateLike>({
      query: ({ videoId, likes }) => {
        return {
          url: `/videos/${videoId}`,
          method: "PATCH",
          body: {
            likes: likes,
          },
        };
      },
    }),

    // update unlike
    updateUnlike: build.mutation<IVideo, IUpdateUnlike>({
      query: ({ videoId, unlikes }) => {
        return {
          url: `/videos/${videoId}`,
          method: "PATCH",
          body: {
            unlikes: unlikes,
          },
        };
      },
    }),
    //   return async (dispatch: any) => {
    //     const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
    //       method: "PATCH",
    //       headers: { "Content-Type": "application/json; charset=UTF-8" },
    //       body: JSON.stringify({ color: todoColor }),
    //     });

    //     const todo = await response.json();
    //     dispatch(setColor(todo.id, todo.color));
    //   };
  }),
});

export const { useVideosQuery, useVideoQuery, useRelatedVideosQuery, useUpdateReactionMutation } = videoApi;

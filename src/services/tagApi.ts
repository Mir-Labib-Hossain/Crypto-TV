import { baseApiSlice } from "../app/api/baseApiSlice";

const tagApi = baseApiSlice.injectEndpoints({
  endpoints: (build) => ({
    tags: build.query<ITags, void>({
      query: () => "/tags",
    }),
  }),
});

export const { useTagsQuery } = tagApi;

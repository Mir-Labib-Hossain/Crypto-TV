import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
  baseUrl: " http://localhost:9000",
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

export const baseApiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
  tagTypes:["videos"]
});

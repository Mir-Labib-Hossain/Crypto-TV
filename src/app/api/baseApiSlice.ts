import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
  baseUrl: " http://localhost:9000",
});

export const baseApiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
});

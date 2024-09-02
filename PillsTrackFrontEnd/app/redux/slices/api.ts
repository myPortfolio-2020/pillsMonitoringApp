import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/0",
  }),
  endpoints: (builder) => ({
    getPatients: builder.query<>({
      query: () => ({
        url: "/0",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPatientsQuery } = api;

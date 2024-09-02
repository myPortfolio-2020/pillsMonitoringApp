import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  endpoints: (builder) => ({
    getPatients: builder.query<IPatient[], void>({
      query: () => ({
        url: "/0",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPatientsQuery } = api;

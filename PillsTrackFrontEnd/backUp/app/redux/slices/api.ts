import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.10.24:3001",
  }),
  endpoints: (builder) => ({
    getPatients: builder.query<IPatient[], void>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPatientsQuery } = api;

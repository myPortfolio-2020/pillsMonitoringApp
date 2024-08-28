import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl:'https://66cf0f00901aab248420bac8.mockapi.io/notes'
    }),
    endpoints:(builder)=>({
        getNotes:builder.query<NotesItem[], void>({
            query:()=>({
                url:'/notes',
                method:'GET'
            })
        })
    }),
})

export const {useGetNotesQuery} = api 
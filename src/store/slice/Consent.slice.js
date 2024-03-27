import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = "http://127.0.0.1:8080"

export const Consent = createApi({
  reducerPath: 'ConsentApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: ({ userToken }) => ({
        url: "get-all-data",
        headers: {
          Logintoken: `Bearer ${userToken}`
        }
      }),
    }),
  }),
});

export const { useGetAllDataQuery } = Consent;

export default Consent;

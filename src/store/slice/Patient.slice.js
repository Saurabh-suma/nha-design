
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://127.0.0.1:8080';


const Patient = createApi({
 reducerPath: 'Patient',
 baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
 endpoints: (builder) => ({
   getSessionToken: builder.query({
     query: () => ({
       url: '/v0.5/sessions',
       method: 'POST',
       body: {
         clientId: "sumasoft_demo",
         clientSecret: "107c8c027-cdaa-402f-8f10-fcb6fb971a61"
       },
     }),
   }),

   getData: builder.query({
     query: ({ accessToken, abhaAddress }) => ({
       url: '/api-hiu/v1/patients',
       method: 'GET',
       headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        AbhaAddress: abhaAddress, 
      },
    }),
  }),

  consentRequest: builder.mutation({
    query: ({ accessToken, requestBody }) => ({
      url: '/mock-hiu/consent/request',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: requestBody,
    }),
  }),
}),
});

export const { useGetSessionTokenQuery, useGetDataQuery, useConsentRequestMutation } = Patient;

export default Patient;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://127.0.0.1:8080';

const Consent = createApi({
 reducerPath: 'Consent',
 baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
 endpoints: (builder) => ({
    getSessionToken: builder.query({
      query: () => ({
        url: '/v0.5/sessions',
        method: 'POST',
        body: JSON.stringify({
          clientId: "sumasoft_demo",
          clientSecret: "107c8c027-cdaa-402f-8f10-fcb6fb971a61"
        }),
        headers: { 'Content-Type': 'application/json' },
      }),
    }),

    getData: builder.query({
      query: ({accessToken}) => ({
        url: '/v0.5/patients/find',
        method: 'POST',
        body: JSON.stringify({
          "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
          "timestamp": "2024-02-12T05:18:12.540Z",
          "query": {
            "patient": {
                "id": "Sharma_10"
            },
            "requester": {
                "type": "HIU",
                "id": "100005"
            }
        }
        }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      }),
    }),
 }),
});

export const { useGetSessionTokenQuery, useGetDataQuery } = Consent;

export default Consent;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const BASE_URL = 'http://127.0.0.1:8080';

// const Consent = createApi({
//   reducerPath: 'Consent',
//   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
//   endpoints: (builder) => ({
//     getSessionToken: builder.query({
//       query: () => ({
//         url: '/v0.5/sessions',
//         method: 'POST',
//         body: JSON.stringify({
//           clientId: "sumasoft_demo",
//           clientSecret: "107c8c027-cdaa-402f-8f10-fcb6fb971a61"
//         }),
//         headers: { 'Content-Type': 'application/json' },
//       }),
//     }),

//     getData: builder.query({
//       query: ({ accessToken }) => ({
//         url: '/v0.5/patients/find',
//         method: 'POST',
//         body: JSON.stringify({
//           "requestId": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
//           "timestamp": "2024-02-12T05:18:12.540Z",
//           "query": {
//             "patient": {
//                 "id": "Sharma_10"
//             },
//             "requester": {
//                 "type": "HIU",
//                 "id": "100005"
//             }
//         }
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${accessToken}`,
//         },
//       }),
//     }),
//  }),
// });

// export const { useGetSessionTokenQuery, useGetDataQuery } = Consent;

// export default Consent;

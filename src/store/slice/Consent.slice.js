import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://127.0.0.1:8080";

const Consent = createApi({
  reducerPath: "Consent",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getSessionToken: builder.query({
      query: () => ({
        url: "/v0.5/sessions",
        method: "POST",
        body: JSON.stringify({
          clientId: "sumasoft_demo",
          clientSecret: "107c8c027-cdaa-402f-8f10-fcb6fb971a61",
        }),
        headers: { "Content-Type": "application/json" },
      }),
    }),

    consentRequest: builder.query({
      query: ({ accessToken }) => ({
        url: "/mock-hiu/consent/request",
        method: "POST",
        body: JSON.stringify({}),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
  }),
});

export const { useGetSessionTokenQuery, useConsentRequestQuery } = Consent;

export default Consent;

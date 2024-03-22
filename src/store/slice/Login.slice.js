








//   // Login.slice.js
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const Login = createApi({
//   reducerPath: "Login",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8080" }), // Update base URL
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (credentials) => ({
//         url: "/login",
//         method: "POST",
//         body: credentials,
//       }),
//     }),
//   }),
// });

// export const { useLoginMutation } = Login;

// export default Login;


// Login.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define base URL for your API
const baseUrl =  "http://127.0.0.1:8080" ; // Replace this with your actual API URL

export const Login = createApi({
  reducerPath: 'Login',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

// Export the generated hooks for use in functional components
export const { useLoginUserMutation } = Login;

export default Login;
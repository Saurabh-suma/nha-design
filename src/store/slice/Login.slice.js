// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseUrl =  "http://127.0.0.1:8080" ; 

// export const Login = createApi({
//   reducerPath: 'Login',
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     loginUser: builder.mutation({
//       query: (credentials) => ({
//         url: '/login',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//   }),
// });

// export const { useLoginUserMutation } = Login;

// export default Login;



import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl =  "http://127.0.0.1:8080"; 
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
      onSuccess: (response, credentials, api) => {
        const { token, username } = response; 
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
      },
    }),
  }),
});

export const { useLoginUserMutation } = Login;

export default Login;

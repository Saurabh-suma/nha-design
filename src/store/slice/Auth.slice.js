import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const initialState = {
  token: null,
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8080",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/v0.5/sessions", // Adjust the login endpoint
        method: "POST",
        body: credentials,
      }),
      onSuccess: (response, { dispatch }) => {
        dispatch(setToken(response.token)); 
      },
    }),
    // Add other authentication-related endpoints here
  }),
});

// Export the authentication API endpoints
export const { useLoginMutation } = authApi;

// Define the authentication slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    // other authentication-related reducers
  },
});

// Export the authentication slice actions
export const { setToken } = authSlice.actions;

// Export the authentication slice reducer
export default authSlice.reducer;

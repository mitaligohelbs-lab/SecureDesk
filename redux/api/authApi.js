import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query";
import { supabaseClient } from "../../lib/supabaseClient";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    login: builder.mutation({
      async queryFn({ email, password }) {
        await supabaseClient.auth.signInWithPassword({
          email,
          password,
        });

        if (error) return { error };
        return { data: data.user };
      },
    }),

    logout: builder.mutation({
      async queryFn() {
        await supabaseClient.auth.signOut();
        return { data: true };
      },
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;

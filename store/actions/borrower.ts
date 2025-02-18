import baseAPI from "@/utils/config/api";
import Cookies from "js-cookie";

const token = Cookies.get("access_token");
const userApi = baseAPI.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    borrower: builder.mutation<any, any>({
      query: (body: any) => {
        return {
          url: "/borrows",
          method: "POST",
          body,
          headers: token
            ? {
                Authorization: `Bearer ${token}`,
              }
            : {},
        };
      },
      invalidatesTags: ["borrowers"],
    }),
    borrowers: builder.query<any, void>({
      query: () => ({
        url: "/borrows",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["borrowers"],
    }),
  }),
});

export const { useBorrowerMutation, useBorrowersQuery } = userApi;

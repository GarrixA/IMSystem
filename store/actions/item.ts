import baseAPI from "@/utils/config/api";
import Cookies from "js-cookie";

const token = Cookies.get("access_token");

const userApi = baseAPI.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    postItem: builder.mutation<any, FormData>({
      query: (body: FormData) => {
        return {
          url: "/items",
          method: "POST",
          body,
          headers: token
            ? {
                Authorization: `Bearer ${token}`,
              }
            : {},
        };
      },
      invalidatesTags: ["items"],
    }),
    editItem: builder.mutation<any, { id: string; body: FormData }>({
      query: ({ id, body }) => ({
        url: `/items/${id}`,
        method: "PATCH",
        body,
        headers: token
          ? {
              Authorization: `Bearer ${token}`,
            }
          : {},
      }),
      invalidatesTags: ["items"],
    }),
    allItems: builder.query<any, void>({
      query: () => ({
        url: "/items",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["items"],
    }),
    singleItem: builder.query<any, string>({
      query: (id) => ({
        url: `/items/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["items"],
    }),
  }),
});

export const {
  usePostItemMutation,
  useEditItemMutation,
  useAllItemsQuery,
  useSingleItemQuery,
} = userApi;

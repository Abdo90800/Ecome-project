import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const CartSliceApi = createApi({
    reducerPath: "CartSliceApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }), // تأكد من أن هذا هو عنوان API الجذر
    endpoints: (builder) => ({
        getCartSliceByName: builder.query({
            query: (name) => `${name}`, // تأكد من أن هذا هو المسار الصحيح
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCartSliceByNameQuery } = CartSliceApi;
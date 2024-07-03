import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const createHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "abcb35d440msh7c5bd7e8af59e49p11103ejsn2e0a914f1577",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: createHeaders });

export const globalStatsApi = createApi({
  reducerPath: "globalStatsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getStats: builder.query({
      query: () => createRequest(`/stats?referenceCurrencyUuid=yhjMzLPhuIDl`),
    }),
  }),
});

export const { useGetStatsQuery } = globalStatsApi;

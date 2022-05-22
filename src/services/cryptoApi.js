import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Host' : 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'abcb35d440msh7c5bd7e8af59e49p11103ejsn2e0a914f1577'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos : builder.query({
            query: () => createRequest(
                '/coins'
            )
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
    // headers: {
    //   'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    //   'X-RapidAPI-Key': 'abcb35d440msh7c5bd7e8af59e49p11103ejsn2e0a914f1577'
    // }
//   };
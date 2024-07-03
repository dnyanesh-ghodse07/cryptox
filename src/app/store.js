import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { newsApi } from "../services/newApi";
import { globalStatsApi } from "../services/globalStatsApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [globalStatsApi.reducerPath]: globalStatsApi.reducer,
  },
});

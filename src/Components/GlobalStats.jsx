import React from "react";
import { useGetStatsQuery } from "../services/globalStatsApi";

const GlobalStats = () => {
  const { data: stats, isLoading } = useGetStatsQuery();

  console.log(stats);
  return (
    <div>
      <h1>Global Stats</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div>
            <div>
              <h2>Total Coins</h2>
              <h1>{stats?.data?.totalCoins}</h1>
            </div>
            <div>
              <h2>Total Market Cap</h2>
              <h1>{stats?.data?.totalMarketCap}</h1>
            </div>
            <div>
              <h2>Total Markets</h2>
              <h1>{stats?.data?.totalMarkets}</h1>
            </div>
          </div>
          <div>
            <h1>Newest Coins</h1>
            {
                stats?.data?.newestCoins?.map(item => {
                    return <div>
                        <img width={50} src={item.iconUrl} alt={item.name} />
                        <h3>{item.name}</h3>
                    </div>
                })
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalStats;

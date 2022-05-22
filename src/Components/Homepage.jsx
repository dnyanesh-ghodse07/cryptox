import React from "react";
import millify from "millify";
import { Row, Col, Typography, Statistic,Spin } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";
import Crypto from "./Crypto";

const { Title } = Typography;
const Homepage = () => {
  const {data,isError,isFetching} = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  if(isFetching){
    return <Spin/>
  }
  
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(globalStats?.totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(globalStats?.totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={millify(globalStats?.total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(globalStats?.totalMarkets)} />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 cryptocurrencies in the world</Title>
        <Title level={3} className="show-more"><Link to='/cryptocurrencies'>
          Show more
        </Link></Title>
      </div>
      <Crypto/>
    </>
  );
};

export default Homepage;

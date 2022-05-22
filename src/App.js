import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Crypto,
  Exchange,
  Homepage,
  Navbar,
  CryptoDetail,
  News,
} from "./Components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchange" element={<Exchange />} />
              <Route exact path="/cryptocurrencies" element={<Crypto />} />
              <Route exact path="/crypto/:coinId" element={<CryptoDetail />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: "white" }}>
            CryptoX <br />
            All right reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchange">Exchange</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;

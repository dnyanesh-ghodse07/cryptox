import React, { useState } from "react";
import { Card, Row, Col, Input,Spin,Typography } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import { Link } from "react-router-dom";

const { Search } = Input;
const {Title} = Typography;
const Crypto = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptolist, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setcryptos] = useState(cryptolist?.data?.coins);

  const onSearch = (value) => {
    if(value.length > 0){
      const filtered = cryptos.filter(item => item?.name?.toLowerCase().includes(value.toLowerCase()));
      setcryptos(filtered);
    }else{
      setcryptos(cryptolist?.data?.coins);
    }
  };

  if(isFetching){
    return <Spin />
  }

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Title level={3}>Cryptocurrencies</Title>
      {count > 10 && (
          <Search
            placeholder="Search coins"
            allowClear
            enterButton="Search"
            size="middle"
            onSearch={onSearch}
            style={{width: 300}}
          />
          )}
      </div>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {isFetching ? <Spin /> : cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={currency.iconUrl}
                    alt=""
                    width="30px"
                  />
                }
                hoverable
              >
                <p>Price : {millify(currency.price)}</p>
                <p>Market Cap : {millify(currency.marketCap)}</p>
                <p>Change : {millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Crypto;

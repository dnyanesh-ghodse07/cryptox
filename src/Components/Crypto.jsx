import React,{useState} from "react";
import { Card,Row,Col,Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from 'millify';
import { Link } from "react-router-dom";

const Crypto = () => {
  const {data: cryptolist, isFetching} = useGetCryptosQuery();
  const [cryptos, setcryptos] = useState(cryptolist?.data?.coins);
  return <>
      <Row gutter={[32,32]} className='crypto-card-container'>
          {cryptos.map((currency) => (
            <Col xs={24} sm={12} lg={6}>
              <Link to={`/crypto/${currency.id}`}>
                  <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={<img className="crypto-image" src={currency.iconUrl} alt='' width='30px'/>}
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
  </>;
};

export default Crypto;

import React, {useState} from "react";
import {Select,Typography,Row,Col,Avatar,Card, Spin} from 'antd';
import moment from "moment";
import { useGetNewsQuery } from "../services/newApi";
import { useGetCryptosQuery } from "../services/cryptoApi";

const demoImgUrl = 'https://i.ibb.co/Z11pcGG/cryptocurrency.png'
const {Title,Text} = Typography;
const {Option} = Select;

const News = () => {
  const [newsCategory, setNewsCategory] = useState('cryptocurrency');
  const {data: newsList, isFetching: newsLoading} = useGetNewsQuery({newsCategory: newsCategory,  count: 10});
  const { data: cryptolist, isFetching: cryptoLoading } = useGetCryptosQuery(100);

  if(newsLoading){
    return <Spin/>
  }
  return (
    <Row gutter={[24,24]}>
      {
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder='Select a crypto'
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input,option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="cryptocurrency"></Option>
            { cryptoLoading ? <Spin/> :
              cryptolist?.data?.coins.map(coin => <Option value={coin.name}>{coin.name}</Option> )
            }
          </Select>
        </Col>
      }
        {newsLoading ? <Spin/> :
          newsList.value.map(news => (
            <Col xs={24} sm={12} lg={8} key={news.id}>
                <Card hoverable className="news-card">
                  <a href={news.url} target='_blank' rel='noreferrer'>
                      <div className="news-image-container">
                        <Title className='news-title' level={4}>
                            {news.name}
                        </Title>
                        <img src={news?.image?.thumbnail?.contentUrl || demoImgUrl} alt="news" style={{maxWidth:'200px',maxHeight: '100px'}} />
                      </div>
                      <p>{news.description.length > 100 ? `${news.description.substring(0,100)} ...` : news.description}</p>
                      <div className="provoder-container">
                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImgUrl} alt="news"/>
                        <Text className="provider-name">{news.provider[0]?.name}</Text>
                      </div>
                        <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                  </a>
                </Card>
            </Col>
          ))
        }
    </Row>
  )
};

export default News;

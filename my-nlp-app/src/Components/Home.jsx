import React from "react";
import { CommentOutlined, LikeOutlined, SendOutlined } from "@ant-design/icons";
import { Avatar, Card, List } from "antd";
import Comments from "./Comments";
import "./Home.css";

const { Meta } = Card;

const data = [
  {
    title: (
      <Meta
        avatar={
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        }
        title="Card title"
        description="This is the description"
      />
    ),
    cover:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <List
        grid={{
          gutter: 16,
          column: 1,
        }}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <Card
              className="custom-card"
              cover={<img alt="example" src={item.cover} />}
              //   actions={[
              //     <LikeOutlined key="like" />,
              //     <SendOutlined key="send" />,
              //     <CommentOutlined key="comment" />,
              //   ]}
            >
              {item.title}
              <Comments />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Home;

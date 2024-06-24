import React from "react";
import { Card, List } from "antd";
import "./Post.css";
import Header from "./Header";


const Post = ({ username, imageUrl, likes, caption }) => {
  const data = [
    {
      title: (
        <>
          <Header
           
            username={username}
            location={"USA"}
          />
        </>
      ),
    },
  ];
  return (
    <>
      <List
        grid={{
          gutter: 16,
          column: 4,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>
              <div className="post">
                {/* <div className="post__header">
                  <h3>{username}</h3>
                </div> */}

                <img
                  className="post__image"
                  src={imageUrl}
                  alt="Post"
                  style={{ width: "17.5rem", height: "17.5rem" }}
                />
                <div className="post__footer">
                  <p className="post__caption">{caption}</p>
                  <p className="post__likes">{likes} likes</p>
                </div>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};

export default Post;

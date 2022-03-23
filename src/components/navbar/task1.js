import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Layout } from "antd";
import TaskNav from './taskNv'

export default function Task1() {
  const { Content } = Layout;
  const [user, setUser] = useState([]);
  const getUserList = async () => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      console.log(data);
      setUser(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  useEffect(() => {
    getUserList();
  }, []);
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "name",
    },
    {
      title: "UserId",
      dataIndex: "userId",
      key: "userId",
    },
  ];

  return (
    <div>
      <Content>
        <TaskNav/>
        <h1 style={{ color: "" }}>Task1</h1>
        <Table columns={columns} dataSource={user} />
      </Content>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Table} from "antd";
import TaskNav from './taskNv'

export default function Task2() {
  const [user,setUser] = useState([]);
  const getUserInfo = async()=> {
    try{
      fetch('https://api.github.com/users/hacktivist123/repos')
  .then(response => response.json())
  .then(data =>{
  setUser(data);
  }
  );
    }
    catch (error){
      console.log(error)
    }
  }
  console.log(user);
  useEffect(()=>{
    getUserInfo();
  },[])

  const columns = [
    {
      title:"ID",
      dataIndex:"id"
    },
    {
      title:"nodeId",
      dataIndex:"node_id"
    },
    {
      title:"Name",
      dataIndex:"name"
    },
    {
      title:"FullName",
      dataIndex:"full_name"
    },
]
  return (
    <div>
      <TaskNav/>
      <h1>Task2</h1>
      <Table columns={columns} dataSource={user}/>

      </div>
  )
}

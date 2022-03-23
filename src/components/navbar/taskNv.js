import React from "react";
import { Layout,Col,Row} from "antd";
import {Link} from "react-router-dom";
import './taskNv.css'

function TaskNav() {
  const { Header} = Layout;
return(
<div>
  <Header className="navHeader">
    <Row>
      <Col xl={12} lg={12} md={12} sm={24} xs={24} ><h1>Suriyaprakash</h1></Col>
      <Col xl={12} lg={12} md={12} sm={24} xs={24} >
     <Link to='/task1' className="navLink">task1</Link>
     <Link to='/task2' className="navLink">task2</Link>
     <Link to='/task3' className="navLink">task3</Link>
     <Link to='/task4' className="navLink">task4</Link>
     <Link to='/task5' className="navLink">task5</Link>
     <Link to='/task6' className="navLink">task6</Link>
     </Col>
     </Row>
     </Header>
 </div>
);
}

export default TaskNav;

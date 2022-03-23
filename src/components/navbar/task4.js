import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Card, Col, Row } from "antd";
import './task4.css';

export default function Task4() {
  const [val, setVal] = useState("");
  const [name, setName] = useState("");

  const onSubmitForm = async (values) => {
    const payload = {
      name: values.Name,
      job: values.Job,
    };
    const requestOption = {
      metod: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ payload }),
    };
    const data = await axios.post("https://reqres.in/api/users", requestOption);
    console.log(data);
    setVal(data.data.createdAt);
    setName(data.data.id);
  };
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
      }}
    >
      <h1>task4... post api</h1>
      <div className="cardAlign">
        <Row>
          <Col
            xl={{ span: 6, offset: 9 }}
            lg={{ span: 8, offset: 8 }}
            md={{ span: 12, offset: 6 }}
            sm={{ span: 20, offset: 2 }}
            xs={{ span: 20, offset: 2 }}
          >
            <Card>
              <Form
                onFinish={onSubmitForm}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                <Form.Item
                  name="Name"
                  label="Name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your name!",
                    },
                  ]}
                >
                  <Input placeholder="Enter your Name"></Input>
                </Form.Item>
                <Form.Item
                  name="Job"
                  label="Job"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Job!",
                    },
                  ]}
                >
                  <Input placeholder="Enter your Job"></Input>
                </Form.Item>
                <Form.Item style={{ display: "flex", float: "right" }}>
                  <Button type="primary" htmlType="submit">
                    submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
            <h1 className="footer">
              craetedAt : {val}, ID : {name}
            </h1>
      </div>
    </div>
  );
}

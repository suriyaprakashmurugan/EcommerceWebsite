import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Col, Card, Row } from "antd";
import "./task3.css";
import TaskNav from './taskNv'

function Task3() {
  const [data, setData] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fVakid = (Data) => {
    console.log(Data);
    setData(Data);
    JSON.stringify(data);
  };
  return (
    <div className="demo">
      <TaskNav/>
      <div style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <Col
          xl={{ span: 8, offset: 8 }}
          lg={{ span: 8, offset: 8 }}
          md={{ span: 12, offset: 4 }}
          sm={{ span: 24, offset: 0 }}
        >
          <Card hoverable style={{cursor:"context-menu"}}>
            <form
              className="cardSize"
              id="myForm"
              method="post"
              onSubmit={handleSubmit(fVakid)}
            >
              <label>
                name
                <br />
                <input
                  className = "inputDesign"
                  type="text"
                  name="myName"
                  id="myName"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                />
                <br />
              </label>
              {errors.name && (
                <p style={{ color: "red" }}>Please check the name</p>
              )}
              <br />
              <label>
                email
                <br />
                <input
                  className = "inputDesign"
                  type="email"
                  name="myEmail"
                  id="myEmail"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
                <br />
              </label>
              {errors.email && (
                <p style={{ color: "red" }}>Please check the email</p>
              )}
              <br />
              <label>
                age
                <br />
                <input
                  className = "inputDesign"
                  type="number"
                  name="age"
                  id="myAge"
                  placeholder="Enter your Age"
                  {...register("age", { required: true, min: 18, max: 100 })}
                />
                <br />
              </label>
              {errors.age && (
                <p style={{ color: "red" }}>Please check the age</p>
              )}
              <br />
              <lable>
                Gender
                <br />
                <Row>
                  <Col xl={8} sm={24} md={24}>
                    <input
                      type="radio"
                      name="gender"
                      value={"male"}
                      {...register("gender", { required: true })}
                    />
                    male
                  </Col>
                  <Col xl={8} sm={24} md={24}>
                    <input
                      type="radio"
                      name="gender"
                      value={"female"}
                      {...register("gender", { required: true })}
                    />
                    female
                  </Col>
                  <Col xl={8} sm={24} md={24}>
                    <input
                      type="radio"
                      name="gender"
                      value={"others"}
                      {...register("gender", { required: true })}
                    />
                    others
                  </Col>
                  <br />
                  {errors.gender && (
                    <p style={{ color: "red" }}>Please choose the gender</p>
                  )}
                </Row>
              </lable>
              <br />
              <lable>
                Your favourite subjects
                <br />
                <Row>
                <div className="checkBox">
                  <Col xl={8} md={12} sm={24}>
                  <input
                    type="checkbox"
                    name="subjects[]"
                    value={"HTML"}
                    {...register("fSubject", { required: true })}
                  />
                  HTML
                  </Col>
                  <Col xl={8} md={12} sm={24}>
                  <input
                    type="checkbox"
                    name="subjects[]"
                    value={"CSS"}
                    {...register("fSubject", { required: true })}
                  />
                  CSS
                  </Col>
                  <Col xl={8} md={12} sm={24}>
                  <input
                    type="checkbox"
                    name="subjects[]"
                    value={"javascript"}
                    {...register("fSubject", { required: true })}
                  />
                  javascript
                  </Col>
                  <Col xl={8} md={12} sm={24}>
                  <input
                    type="checkbox"
                    name="subjects[]"
                    value={"react"}
                    {...register("fSubject", { required: true })}
                  />
                  react
                  </Col>
                  <Col xl={8} md={12} sm={24}>
                  <input
                    type="checkbox"
                    name="subjects[]"
                    value={"bootstrap"}
                    {...register("fSubject", { required: true })}
                  />
                  bootstrap
                  </Col>
                  <Col xl={8} md={12} sm={24}>
                  <input
                    type="checkbox"
                    name="subjects[]"
                    value={"java"}
                    {...register("fSubject", { required: true })}
                  />
                  java
                  </Col>
                  <br />
                </div>
                {errors.fSubject && (
                  <p style={{ color: "red" }}>
                    Please choose the favourite subject
                  </p>
                )}
                </Row>
              </lable>
              <br />
                <div className="buttonAlign">
                <button type="submit" className="butDesign" style={{padding:"10",marginLeft:"20"}} onClick={()=>{
                  alert("Successfully submited ")
                }}>submit</button>
                
                <button type="reset" className="butDesign" style={{padding:"10",marginLeft:"20"}}>reset</button>
                </div>
            </form>
          </Card>
        </Col>
      </div>
    </div>
  );
}

export default Task3;

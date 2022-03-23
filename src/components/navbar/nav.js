import { Layout, Menu, Input, Avatar, Col } from "antd";

import {
  HomeFilled,
  TeamOutlined,
  MessageOutlined,
  ShoppingFilled,
  AppstoreFilled,
  BellFilled,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./nav.css";

function MyNav() {
  const { Header, Content } = Layout;
  return (
    <div>
      <Layout>
        <Header className="head">
          <Menu
            className="menu"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ paddingLeft: 17, paddingRight: 17 }}
          >
            <Menu.Item key="8">
              <img
                src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo-512x512.png"
                alt="logo"
                style={{ width: 50, left: 110, position: "absalute" }}
              />
            </Menu.Item>
            <Menu.Item key="9" style={{ paddingLeft: 51, marginTop: -6,width:350, transition:"none" }}>
              <Input
                size="large"
                placeholder="search"
                prefix={<SearchOutlined style={{backgroundColor:"rgb(236, 236, 236)"}}/>}
                style={{
                    backgroundColor:"rgb(236, 236, 236)",
                    border:"none"
                }}
              />
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              key="1"
              style={{ marginLeft: 210 }}
            >
              <HomeFilled
                className="nav-icon"
                style={{ fontSize: 23, marginTop: 2, marginLeft: 5 }}
              />
              Home
            </Menu.Item>
            <Menu.Item className="" key="2">
              <TeamOutlined
                className="nav-icon"
                style={{ fontSize: 23, marginTop: 2, marginLeft: 15 }}
              />
              MY Network
            </Menu.Item>
            <Menu.Item className="" key="3">
              <ShoppingFilled
                className="nav-icon"
                style={{ fontSize: 23, marginTop: 2, marginLeft: 7 }}
              />
              My Jobs
            </Menu.Item>
            <Menu.Item className="" key="4">
              <MessageOutlined
                className="nav-icon"
                style={{ fontSize: 23, marginTop: 2, marginLeft: 20 }}
              />
              MyMessages
            </Menu.Item>
            <Menu.Item className="" key="5">
              <BellFilled
                className="nav-icon"
                style={{ fontSize: 23, marginTop: 2, marginLeft: 15 }}
              />
              Notification
            </Menu.Item>
            <Menu.Item className="" key="6">
              <Avatar
                size={30}
                icon={<UserOutlined />}
                className="nav-icon"
                style={{ fontSize: 23, right: 12 }}
              />
              me
            </Menu.Item>
            <Menu.Item className="V-line" key="7">
              <AppstoreFilled
                className="nav-icon"
                style={{ fontSize: 23, marginTop: 2, marginLeft: 3 }}
              />
              Work
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Col xl={24}>
            <Col xl={4} md={12} sm={24}></Col>
            <Col xl={13} md={12} sm={24}>
            </Col>
            <Col xl={7} md={24} sm={24}></Col>
          </Col>
        </Content>
      </Layout>
    </div>
  );
}

export default MyNav;

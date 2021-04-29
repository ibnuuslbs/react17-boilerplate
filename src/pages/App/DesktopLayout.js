import React, { useState } from "react";
import { Button, Layout, Menu, PageHeader, Popover, Typography } from "antd";
import { MenuList } from "./MenuList";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { AppRoute } from "../../routes/app";

const { Text, Paragraph } = Typography;
const { Header, Content, Sider } = Layout;

export const DesktopLayout = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <Layout
      theme={"light"}
      className={"transparent"}
      hasSider={true}
      style={{
        paddingLeft: 0,
        display: "flex",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Sider
        className={"transparent"}
        width={240}
        style={{
          overflowX: "hidden",
          backgroundColor: "#ffffff",
          bottom: 0,
          boxShadow: "5px 0px 9px 0px rgba(0,0,0,0.2)",
          webkitBoxShadow: "5px 0px 9px 0px rgba(0,0,0,0.2)",
          mozBoxShadow: "5px 0px 9px 0px rgba(0,0,0,0.2)",
          justifyContent: "flex-start",
          paddingTop: 20,
          paddingLeft: 20,
          position: "fixed",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            paddingLeft: 20,
            marginBottom: 40,
          }}
        >
          <Paragraph
            style={{
              margin: 0,
              padding: 0,
              fontSize: 25,
              marginLeft: 5,
              fontWeight: 600,
              color: "#413d3e",
            }}
          >
            Boilerplate
          </Paragraph>
        </div>
        <MenuList closeLeftDrawer={() => {}} />
      </Sider>

      <Layout
        style={{
          paddingLeft: 240,
        }}
      >
        <Header
          theme={"light"}
          style={{
            height: 54,
            paddingLeft: 0,
            paddingRight: "5%",
            backgroundColor: "transparent",
            // maxWidth: 1024,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Popover
            autoAdjustOverflow={true}
            placement="bottomRight"
            content={
              <Menu
                type={"line"}
                inlineIndent={0}
                theme="light"
                style={{
                  backgroundColor: "transparent",
                  borderRightWidth: 0,
                }}
                mode="inline"
              >
                <Menu.Item>
                  <Link to="/app/profile">
                    <span>Profile</span>
                  </Link>
                </Menu.Item>
                <Menu.Item
                  onClick={() => {
                    // store.authentication.logout();
                    // return history.push("/login");
                  }}
                >
                  <span>Sign out</span>
                </Menu.Item>
              </Menu>
            }
            title={
              <Text>
                info@bangun-kreatif.com
                {/*{store.userData.email}{" "}*/}
                <Paragraph style={{ fontWeight: 400 }} type={"secondary-dark"}>
                  Administrator
                  {/*{store.userData.role}*/}
                </Paragraph>
              </Text>
            }
            trigger="click"
            visible={clicked}
            onVisibleChange={() => setClicked(!clicked)}
          >
            <Button
              size={"default"}
              style={{}}
              icon={<UserOutlined style={{ fontSize: "13px" }} />}
            />
          </Popover>
        </Header>
        <Content
          style={{
            // maxWidth: 1024,
            // marginTop: 32,
            paddingTop: "40px",
            paddingRight: "10%",
            paddingLeft: "100px",
            
          }}
        >
          <AppRoute />
        </Content>
      </Layout>
    </Layout>
  );
};

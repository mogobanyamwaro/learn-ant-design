import React from "react";
import { Redirect } from "react-router-dom";
// import { useOktaAuth } from "@okta/okta-react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { Layout, Row, Col, Card } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Home = () => {
  //   const { authState } = useOktaAuth();
  const authState = {};

  authState.isAuthenticated = true;
  const { Content } = Layout;
  const { Meta } = Card;

  return authState.isAuthenticated ? (
    <Redirect to={{ pathname: "/Dashboard" }} />
  ) : (
    <Layout>
      <SiteHeader selectedKey="home"> </SiteHeader>
      <Content>
        <Row style={{ padding: 20 }}>
          <Col span="4"></Col>
          <Col span="4"></Col>
        </Row>

        <Row style={{ padding: 20 }}>
          <Col span="4"></Col>
          <Col style={{ padding: 10 }} span="4">
            <Card
              cover={
                <img
                  alt="Okta"
                  src="https://www.okta.com/sites/all/themes/Okta/images/blog/Logos/Okta_Logo_BrightBlue_Medium.png"
                  height="100px"
                />
              }
              actions={[
                <a href="https://www.okta.com" target="_blank">
                  {" "}
                  <SearchOutlined key="ellipsis" />
                </a>,
              ]}
            >
              <Meta title="Okta" />
            </Card>
          </Col>

          <Col style={{ padding: 10 }} span="4">
            <Card
              cover={
                <img
                  alt="Ant.Design"
                  src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                  height="100px"
                />
              }
              actions={[
                <a href="https://ant.design/" target="_blank">
                  {" "}
                  <SearchOutlined key="ellipsis" />
                </a>,
              ]}
            >
              <Meta title="Ant.Design" />
            </Card>
          </Col>

          <Col style={{ padding: 10 }} span="4">
            <Card
              cover={
                <img
                  alt="React"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  height="100px"
                />
              }
              actions={[
                <a href="https://reactjs.org/" target="_blank">
                  {" "}
                  <SearchOutlined key="ellipsis" />
                </a>,
              ]}
            >
              <Meta title="React" />
            </Card>
          </Col>

          <Col style={{ padding: 10 }} span="4">
            <Card
              cover={
                <img
                  alt="Fishbowl"
                  src="https://fishbowlllc.com/images/logo_web.png"
                  height="100px"
                  width="50px"
                />
              }
              actions={[
                <a href="https://profile.fishbowlllc.com/" target="_blank">
                  {" "}
                  <SearchOutlined key="ellipsis" />
                </a>,
              ]}
            >
              <Meta title="Fishbowl Software" />
            </Card>
          </Col>
        </Row>
      </Content>

      <SiteFooter></SiteFooter>
    </Layout>
  );
};
export default Home;

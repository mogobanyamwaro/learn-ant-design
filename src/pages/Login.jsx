import React from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../components/LoginForm";
// import { useOktaAuth } from "@okta/okta-react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { Layout } from "antd";

const { Content } = Layout;

const Login = ({ baseUrl, issuer }) => {
  const authState = {};

  authState.isAuthenticated = true;
  authState.isPending = false;

  if (authState.isPending) {
    return <div>Loading...</div>;
  }
  return authState.isAuthenticated ? (
    <Redirect to={{ pathname: "/Dashboard" }} />
  ) : (
    <Layout>
      <SiteHeader selectedKey="login"></SiteHeader>
      <Content style={{ padding: 40 }}>
        <LoginForm baseUrl={baseUrl} issuer={issuer} />
      </Content>

      <SiteFooter></SiteFooter>
    </Layout>
  );
};

export default Login;

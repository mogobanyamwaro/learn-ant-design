import React, { Component } from "react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { Layout, Breadcrumb, Menu, Anchor, Table, Tag, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Content, Header, Sider } = Layout;
const { SubMenu } = Menu;
const { Link } = Anchor;

class Dashboard extends Component {
  constructor(props, context) {
    super(props, context);

    const accounts = [
      {
        id: 1,
        name: "Checking",
        transactions: [
          {
            id: 1,
            amount: -100.0,
            type: "debit",
            tags: ["groceries"],
          },
          {
            id: 2,
            amount: 2000.0,
            type: "credit",
            tags: ["payroll"],
          },
          {
            id: 3,
            amount: -50.0,
            type: "debit",
            tags: ["credit card", "bills"],
          },
          {
            id: 4,
            amount: -300.0,
            type: "debit",
            tags: ["car", "bills"],
          },
          {
            id: 5,
            amount: -1000.0,
            type: "transfer out",
            tags: ["savings"],
          },
          {
            id: 5,
            amount: -1000.0,
            type: "transfer out",
            tags: ["mm account"],
          },
        ],
      },
      {
        id: 2,
        name: "Savings",
        transactions: [
          {
            id: 1,
            amount: 1000.0,
            type: "transfer in",
            tags: ["savings"],
          },
        ],
      },
      {
        id: 3,
        name: "Mutual Market",
        transactions: [
          {
            id: 1,
            amount: 1000.0,
            type: "transfer in",
            tags: ["groceries"],
          },
        ],
      },
    ];

    var selectedAccount = {};
    if (this.props.account) {
      selectedAccount = this.state.accounts.filter(
        (account) => account.id == this.props.account
      )[0];
    } else {
      selectedAccount = accounts[0];
    }

    this.state = {
      selectedAccount: selectedAccount,
      accounts: accounts,
      viewingTransactions: false,
    };
  }

  changeDashboard = (e) => {
    var key = e.key;
    this.setState({
      selectedAccount: this.state.accounts.filter(
        (account) => account.id == key
      )[0],
    });
  };

  render() {
    const columns = [
      {
        title: "Type",
        dataIndex: "type",
        key: "type",
      },
      {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
        sorter: {
          compare: (a, b) => a.amount - b.amount,
        },
      },
      {
        title: "Tags",
        dataIndex: "tags",
        key: "tags",
        render: (tags) => {
          return tags.map((tag) => {
            return (
              <Tag color="blue" key={tag}>
                {tag}
              </Tag>
            );
          });
        },
      },
    ];

    var table = this.state.selectedAccount.transactions ? (
      <Table
        dataSource={this.state.selectedAccount.transactions}
        columns={columns}
      ></Table>
    ) : (
      ""
    );

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible>
          <div style={{ height: "32px", margin: "16px" }}></div>
          <Menu
            defaultOpenKeys={["accounts"]}
            defaultSelectedKeys={[
              this.state.selectedAccount.id
                ? this.state.selectedAccount.id.toString()
                : "",
            ]}
            theme="dark"
            mode="inline"
          >
            <SubMenu key="accounts" icon={<UserOutlined />} title="Accounts">
              {this.state.accounts.map((account, i) => {
                return (
                  <Menu.Item
                    onClick={(e) => this.changeDashboard(e)}
                    key={account.id}
                  >
                    {account.name}
                  </Menu.Item>
                );
              })}
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <SiteHeader />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>
                <a href="Dashboard">Dashboard</a>
              </Breadcrumb.Item>
            </Breadcrumb>

            <Row>
              <Col>
                <h2>{this.state.selectedAccount.name}</h2>
              </Col>
            </Row>
            <Row>
              <Col span="4"></Col>
              <Col span="16">{table}</Col>
              <Col span="4"></Col>
            </Row>
          </Content>

          <SiteFooter></SiteFooter>
        </Layout>
      </Layout>
    );
  }
}
export default Dashboard;

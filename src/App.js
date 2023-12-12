import React, { useState } from 'react';
import { useRoutes, useLocation, useNavigate } from 'react-router-dom';

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import routes from "./routes";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('routerBase', 'sub1', <PieChartOutlined />, [
    getItem('about', '/about'),
    getItem('home', '/home'),
  ]
  ),
  getItem('reactDocs', 'sub2', <TeamOutlined />, [
    getItem('base', '/reactDocs/base'),
    getItem('test', '/reactDocs/test'),
    getItem('reducerlearn', '/reactDocs/reducerlearn'),
    getItem('contextLearn', '/reactDocs/contextLearn'),
    getItem('escapeHatches', '/reactDocs/escapeHatches'),

  ]),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub3', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub4', <TeamOutlined />, [
    getItem('Team 1', '6'),
    getItem('Team 2', '8')
  ]),
  getItem('Files', '9', <FileOutlined />),
];

const App = () => {
  const routerElement = useRoutes(routes)
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const location = useLocation();
  const navigate = useNavigate()
  const onMenuClick = (e) => {
    // navigate(e.key,{ state:loginUserInfo });
    navigate(e.key);
  }

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={[location.pathname]} selectedKeys={[location.pathname]} defaultOpenKeys={['Sub1', 'Sub2']} mode="inline" items={items} onClick={onMenuClick} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {routerElement}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Design ©2024 Created by fitwate
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
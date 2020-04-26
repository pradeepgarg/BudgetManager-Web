import React from "react";

import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import ModalView from './containers/Modal';
import RegistrationForm from './containers/Signup';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    
      
      
    <Router>
      <Layout className="layout">
      <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"> <Link to="/login">Login</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/dashboard">Dashboard</Link></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '10px 50px' }}> 
    <div className="site-layout-content">
        <Switch>
        <Route path="/dashboard">
            <Dashboard />
            <ModalView />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <RegistrationForm />
          </Route>
        </Switch>
        </div>
        </Content>
      
        <Footer style={{ textAlign: 'center'}}>
          Footer
          </Footer>
        </Layout>
       </Router>
  );
}






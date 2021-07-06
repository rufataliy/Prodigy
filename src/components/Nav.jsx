import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { browserHistory } from "react-router"
import { Layout, Menu, Icon } from 'antd';
import About from "./About";
import Contact from "./Contact.jsx";
import Schedule from "./Schedule.jsx";
import Vocabulary from "./vocabulary.jsx"
import Home from "./Home.jsx"
import Context from "../store/context";
import useGlobalState from "../store/useGlobalState";

const { Header, Sider, Content, Footer } = Layout;

const SideNav = () => {
    const [collapsed, setCollapse] = useState(false)
    const state = useGlobalState()
    console.log("sidenav rendered");
    const onCollapse = () => {
        setCollapse(!collapsed)
    };

    return (
        <Router history={browserHistory} >
            <Layout style={
                { minHeight: '100vh' }
            } >
                <Sider collapsible collapsed={collapsed}
                    onCollapse={onCollapse} >
                    <div className="logo" />
                    <Menu theme="dark"
                        defaultSelectedKeys={['1']}
                        mode="inline" >
                        <Menu.Item key="1" >
                            <Link className="active item"
                                to="/" >
                                <Icon type="home" />
                                <span >
                                    Home
                                </span>
                            </Link >
                        </Menu.Item>
                        <Menu.Item key="3" >
                            <Link className="active item"
                                to="/Schedule" >
                                <Icon type="schedule" />
                                <span >
                                    Schedule
                                </span>
                            </Link >
                        </Menu.Item>
                        <Menu.Item key="5" >
                            <Link className="active item"
                                to="/Contact" >
                                <Icon type="book" />
                                <span >
                                    Lessons
                                </span>
                            </Link >
                        </Menu.Item>
                        <Menu.Item key="6" >
                            <Link className="active item"
                                to="/Vocabulary" >
                                <Icon type="book" />
                                <span >
                                    Vocablary
                                </span>
                            </Link >
                        </Menu.Item>
                    </Menu >
                </Sider>
                <Layout>
                    <Header style={{
                        background: '#fff',
                        padding: 0
                    }} />
                    <Content style={
                        { margin: '0 16px' }
                    } >
                        <div style={{
                            padding: 24,
                            background: '#fff',
                            minHeight: 360
                        }} >
                            <Switch >
                                <Route path="/" exact component={Home} />
                                <Route path="/Schedule" exact component={Schedule} />
                                <Route path="/Vocabulary" exact component={Vocabulary} />
                            </Switch >
                        </div>
                    </Content >
                    <Footer style={{ textAlign: 'center' }} >
                        Prodigy© 2019
                    </Footer>
                </Layout >
            </Layout>
        </Router >
    )
}


export default SideNav
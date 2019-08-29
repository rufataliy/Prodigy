import React from "react";
import { BrowserRouter as Router, Switch,  Route, Link, browserHistory } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';

import About from "./About";
import Contact from "./Contact";

const { Header, Sider, Content, Footer } = Layout;




class SiderDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          collapsed: false
        };
        this.onCollapse = this.onCollapse.bind(this);
      }

  onCollapse ()  {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
        <Router history={browserHistory}>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                        <Link className="active item" to="/">
                            <Icon type="home"/>
                            <span>Home</span>
                        </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                        <Link className="active item" to="/About">
                            <Icon type="team" />
                            <span>About</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="9">
                        <Link className="active item" to="/Contact">
                            <Icon type="book" />
                            <span>Contact</span>
                        </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <Switch>
                                <Route path="/" exact/>
                                <Route path="/About/" component={About} />
                                <Route path="/Contact/" component={Contact} />
                            </Switch>
                        </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Prodigy © 2019 </Footer>
                </Layout>
            </Layout>
      </Router> 
    )
  }
}

export default SiderDemo


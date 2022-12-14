import {createBrowserRouter, RouterProvider, createHashRouter} from "react-router-dom";
import React from 'react';
import {Layout, Menu, theme} from 'antd';
import {routes} from "./routes";

const {Header, Content, Footer} = Layout;

const App: React.FC = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const router = createHashRouter(routes);
    // const router = createBrowserRouter(routes);

    return (
        <Layout className="layout">
            <Header>
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={new Array(15).fill(null).map((_, index) => {
                        const key = index + 1;
                        return {
                            key,
                            label: `nav ${key}`,
                        };
                    })}
                />
            </Header>
            <Content>
                <RouterProvider router={router}/>
            </Content>
            <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
};

export default App;

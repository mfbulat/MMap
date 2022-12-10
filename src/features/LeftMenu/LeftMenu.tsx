import React, {FC, useState} from "react";
import {Layout, Menu, MenuProps, Row, theme} from "antd";
import {
    ApartmentOutlined,
    DesktopOutlined, FileOutlined,
    LeftOutlined,
    PieChartOutlined,
    RightOutlined, TeamOutlined,
    UserOutlined
} from "@ant-design/icons";

const {Sider} = Layout;

interface IProps {

}

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '0', <ApartmentOutlined />),
    getItem('Option 1', '1', <PieChartOutlined/>),
    getItem('Option 2', '2', <DesktopOutlined/>),
    getItem('User', 'sub1', <UserOutlined/>, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined/>, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined/>),
];


const LeftMenu: FC<IProps> = () => {
    const [collapsed, setCollapsed] = useState(true);


    const {
        token: {colorBgContainer},
    } = theme.useToken();


    return (
        <Sider collapsible collapsed={collapsed} trigger={null}>
            <Row className={'trigger'}
                 justify="center"
                 align="middle"
                 style={{height: 48, background: '#002140'}}
                 onClick={() => setCollapsed(!collapsed)}
            >
                {React.createElement(collapsed ? RightOutlined : LeftOutlined, {style: {color: '#fff'}})}
            </Row>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
        </Sider>
    );
}
export default LeftMenu;

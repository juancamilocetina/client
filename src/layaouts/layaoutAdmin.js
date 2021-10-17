import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import MenuTop from "../components/Admin/MenuTop";
import MenuSider from "../components/Admin/MenuSider";



import "./layaoutAdmin.scss";
import { Header } from "antd/lib/layout/layout";

export default function LayaoutAdmin(props) {
    const { routes } = props;
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { Header, Content, Footer} = Layout;

    return (
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed} />
            <Layout className="layout-admin" style={{marginLeft: menuCollapsed ? "80px" : "200px"}}>
                <Header className="layout-admin__header">
                   <MenuTop 
                   menuCollapsed={menuCollapsed} 
                   setMenuCollapsed={setMenuCollapsed} /> 
                </Header>
                <Content className="layout-admin__content">
                    <CargarRutas routes = {routes} />
                </Content>
                <Footer className="layout-admin__footer">Escuela Ingenieria de Sistemas - Proyecto Desarrollo Web</Footer>
            </Layout>
        </Layout>
    );
}

function CargarRutas( { routes } ) {

    return (
        <Switch>
            {routes.map((route, index) => (
        <Route
            key = {index}
            path = {route.path}
            exact = {route.exact}
            component = {route.component}  
        />
    )) }              
        </Switch>
    );
   
}
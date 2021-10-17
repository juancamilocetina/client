import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";



import "./layaoutAdmin.scss";
import { Header } from "antd/lib/layout/layout";

export default function layaoutAdmin(props) {
    const { routes } = props;
    const { Header, Content, Footer} = Layout;

    return (
        <Layout>
            <h2> Menu Sider admin</h2>
            <Layout>
                <Header>Header...</Header>
                <Content>
                    <CargarRutas routes = {routes} />
                </Content>
                <Footer>Escuela Ingenieria de Sistemas</Footer>
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
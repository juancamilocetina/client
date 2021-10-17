import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import "./layaoutBasic.scss";

export default function layaoutBasic(props) {
    const { routes } = props;
    const { Content, Footer } = Layout;

    return (
        <Layout>
            <h2> Menu...</h2>
            <Layout>
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
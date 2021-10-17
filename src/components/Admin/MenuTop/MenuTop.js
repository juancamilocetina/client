import { Button } from "antd";
import React from "react";
import SistLogo from '../../../assets/img/png/logoEscuela.png'
import { DatabaseOutlined, PoweroffOutlined } from "@ant-design/icons";



import "./MenuTop.scss"

export default function MenuTop(props) {
    const {menuCollapsed, setMenuCollapsed} = props;
    
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img 
                    className="menu-top__left-logo"
                    src={SistLogo}
                    alt="Escuela Ingenieria de Sistemas"
                />
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    <DatabaseOutlined />
                </Button>
            </div>    
            <div className="menu-top__right">
                <Button type="link" onClick={() => console.log('Desconexion')}>
                <PoweroffOutlined />
                </Button>
            </div>           
        </div>
    )
}
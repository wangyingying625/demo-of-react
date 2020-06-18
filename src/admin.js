import React from "react";
import {Col, Row} from "antd";
import Header from './component/header'
import Footer from  './component/footer'
import NavLeft from "./component/navLeft";
import Home from './page/home'
import './style/common.less'
import 'antd/dist/antd.css'
export default class Admin extends React.Component{
    render() {
        return (
            <Row className='container'>
                <Col span='4' className='nav-left'>
                   <NavLeft/>
                </Col>
                <Col span='20' className='main'>
                    <Header/>
                    <Row className='content'>
                        <Home/>
                        {/*{this.props.children}*/}
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        );
    }
}

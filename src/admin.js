import React from "react";
import {Col, Row} from "antd";
import Header from './component/header'
import Footer from  './component/footer'
import NavLeft from "./component/navLeft";
import './style/common.less'
import 'antd/dist/antd.css'
export default class Admin extends React.Component{
    render() {
        return (
            <Row className='container'>
                <Col span='3' className='nav-left'>
                   <NavLeft/>
                </Col>
                <Col span='21' className='main'>
                    <Header/>
                    <Row className='content'>
                        content
                        {/*{this.props.children}*/}
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        );
    }
}

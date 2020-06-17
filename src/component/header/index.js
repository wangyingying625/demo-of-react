import React from "react";
import {Col, Row} from "antd";
import './index.less';
import Util from '../../util/util'
export default class Header extends React.Component{
    state ={}
    componentWillMount() {
        this.setState({
            userName : 'wyy'
        })
        setInterval(()=>{
            let system = Util.formateDate(new Date().getTime())
            this.setState({
                time :system
            })
        })
    }

    render() {
        return (
            <div className='header'>
                <Row className='header-top'>
                    <Col span='24'>
                        {/*一个row中的col span总和为24*/}
                        <span>hello{this.state.userName}</span>
                        <a href='#'>退出</a>
                    </Col>
                </Row>
                <Row className='header-bottom'>
                    <Col span='4' className='bottom-title'>首页</Col>
                    <Col span='20' className='bottom-data'>
                        <span className='bottom-date'>{this.state.time}</span>
                        <span className='bottom-weather'>晴</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

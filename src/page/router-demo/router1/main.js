import React from 'react'
import './main.less';
import {Col, Row, Input} from "antd";
import Gantt from './gantt'

const data = {
    data: [
        { id: 1, text: 'Task #1', start_date: '2019-04-21', duration: 3, progress: 0.6 },
        { id: 2, text: 'Task #2', start_date: '2019-05-29', duration: 3, progress: 0.4 }
    ]
};
export default class Main extends React.Component {
    render() {
        return (
            <div className='gantt-content'>
                <Row className='main-top'>
                    <Col span='8' className='top-left'>
                        <p>国网北京延庆供电公司110kV西湖站火灾自动报警装置更新改造</p>
                        <p>yq010001</p>
                        <p>火灾自动报警系统消隐改造</p>
                    </Col>
                    <Col span='8' className='top-middle'>middle</Col>
                    <Col span='8' className='top-right'>right</Col>
                </Row>
                <Row className='main-middle'>
                    <Col span='11'>甘特图</Col>
                    <Col span='2'>/</Col>
                    <Col span='11'>推进日志</Col>
                </Row>
                <div className='main-bottom'>
                    <Row className='bottom-top'>
                        <Col span='6' className='bottom-input'>
                            <Input placeholder="Basic usage" />
                        </Col>
                        <Col span='6' className='bottom-input'>
                            <Input placeholder="Basic usage" />
                        </Col>
                        <Col span='6' className='bottom-input'>
                            <Input placeholder="Basic usage" />
                        </Col>
                        <Col span='6' className='bottom-input'>
                            <Input placeholder="Basic usage" />
                        </Col>
                    </Row>
                    <div className='bottom-bottom'>
                        <Gantt tasks={data}/>
                    </div>
                </div>
            </div>
        );
    }
}

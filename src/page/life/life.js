import React from 'react'
import Chart from '../chart/chart'
import './life.less'
// import 'antd/dist/antd.css'
import {Button} from 'antd'
export default class Life extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            count :0
        }
    }

    handleClick = () => {
        this.setState({
            count: this.state.count+1
        })
    }

    handleAdd(){
        this.setState({
            count:this.state.count+1
        })
    }
    // 调用时候需要更改this指向
    render() {
        return <div style={{padding: 50}} className='container'><p>hello</p>
            <Button onClick={this.handleAdd.bind(this)}>click</Button>
            <button onClick={this.handleClick}>click</button>
            <p>{this.state.count}</p>
            <Chart></Chart>
        </div>;
    }
}

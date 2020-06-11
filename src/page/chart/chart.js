import React from "react";
export default class Chart extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            data :1
        }
    }
    componentWillMount() {
        console.log('willMount')
    }
    componentDidMount() {
        console.log('didMount')
    }
    componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps||nextContext:'  + nextContext +'||nextProps:' + nextProps)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate||nextProps:' + nextProps +'||nextState:'+nextState+'||nextContext:'+nextContext)
    }

    render() {
        return (
            <div>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

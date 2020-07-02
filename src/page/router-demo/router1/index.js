import React from 'react'
// import {Route, BrowserRouter as Router} from 'react-router-dom'
// import {HashRouter, Router, Link} from 'react-router-dom'
import { HashRouter, Route,Link} from 'react-router-dom'
import Main from './main'
import Header from './../../../component/header'
import Topic from './topic'

export default class Home extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>index</Link>
                        </li>
                        <li>
                            <Link to='/main'>main</Link>
                        </li>
                        <li>
                            <Link to='/topic'>topic</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Route exact path = '/' component={Header}></Route>
                    <Route path = '/main' component={Main}></Route>
                    <Route path = '/topic' component={Topic}></Route>
                </div>
            </HashRouter>
        );
    }
}

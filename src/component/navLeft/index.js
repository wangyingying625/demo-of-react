import React from "react";
import {Menu} from "antd";
import Icon from '@ant-design/icons';
import './index.less'
import MenuConfig from './../../config/menuConfig'
const SubMenu = Menu.SubMenu
export default class NavLeft extends React.Component{
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);

        this.setState({
            menuTreeNode
        })
    }
    // 菜单渲染
    renderMenu = (data)=>{
        return data.map((item)=>{
            if(item.children){
               return(
                   <SubMenu title={item.title} key={item.key}>
                       { this.renderMenu(item.children)}
                   </SubMenu>
               )
            }
            return  <Menu.Item key="1">
                <span>{item.title}</span>
            </Menu.Item>
        })
    }
    render() {
        return (
            <div>
                <div className='logo'>
                    <img src="/assets/logo-ant.svg" alt='logo'/>
                    <h1>hello</h1>
                </div>
                <Menu theme='dark' >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}

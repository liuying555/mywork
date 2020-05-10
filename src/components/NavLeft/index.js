import React, {Component} from 'react';
import MenuConfig from'./../../config/menuConfig'
import {NavLink} from 'react-router-dom'
import { Menu } from 'antd';
import  './index.less'
const { SubMenu } = Menu;

export default class NavLeft extends Component {
    componentWillMount(){
       const menuTreeNode=this.renderMenu(MenuConfig);
       this.setState({
           menuTreeNode
       })
    }
    // 菜单渲染
    renderMenu= (data)=>{
        return data.map((item)=>{
            if(item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                   <NavLink to={item.key}>{item.title}</NavLink>
                </Menu.Item>
        })
    }

    render() {
        return (
            <div >
                <div className="logo">
                    <img src="./assets/qq_logo_2x.png" alt=""/>
                    <h1>
                       boss
                    </h1>
                </div>
                <Menu
                    theme="dark"
                >
                    { this.state.menuTreeNode }
                </Menu>
            </div>
        )
    }
}

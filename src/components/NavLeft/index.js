import React, { Component } from 'react';
import { Menu } from 'antd';
import MenuConfig from '../../config/menuConfig';
import './index.css';
// import { NavLink } from 'react-router-dom';

const { SubMenu } = Menu

export default class NavLeft extends Component {
  // componentWillMount() {
  //   const menuTreeNode = this.renderMenu(MenuConfig)
  //   this.setState({
  //     menuTreeNode
  //   })
  // }
  constructor(props) {
    super(props)
    this.state = {
      menuTreeNode: this.renderMenu(MenuConfig)
    }
  }
  renderMenu = data => {
    return data.map((item, index) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          {/* <NavLink to={item.key}>{item.title}</NavLink> */}
          {item.title}
        </Menu.Item>
      )
    })
  }
  render() {
    return (
      <div>
        <div className="logo">
          <h1>HyperMedia</h1>
        </div>
        <Menu style={{ marginRight: -1 }}>
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Menu } from 'antd';
import MenuConfig from '../../config/menuConfig';
import './index.css';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux"; // 连接器
import { switchMenu } from "../../redux/action"; //事件行为

const { SubMenu } = Menu

class NavLeft extends Component {
  // componentWillMount() {
  //   const menuTreeNode = this.renderMenu(MenuConfig)
  //   this.setState({
  //     menuTreeNode
  //   })
  // }
  constructor (props) {
    super(props)
    this.state = {
      menuTreeNode: this.renderMenu(MenuConfig),
      currentKey: ''
    }
  }
  handleClick = ({ item, key }) => {
    if (key === this.state.currentKey) {
      return false
    }
    // console.log(item.props.title)
    // 事件派发
    const { dispatch } = this.props
    dispatch(switchMenu(item.props.title))
    this.setState({
      currentKey: key
    })
  }
  componentDidMount() {
    let currentKey = window.location.hash.replace(/#|\?.*$/g, "")
    this.setState({
      currentKey
    })
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
          <NavLink to={item.key}>{item.title}</NavLink>
          {/* {item.title} */}
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
        <Menu onClick={this.handleClick} style={{ marginRight: -1 }} >
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}

export default connect()(NavLeft)

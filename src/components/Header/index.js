import React, { Component } from 'react';
import { Row, Col, Button, Modal } from 'antd';
import MenuConfig from '../../config/menuConfig';
import './index.css';
import Util from '../../utils/utils';
const { confirm } = Modal

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: 'Stephen Tian'
    }
    setInterval(() => {
      let systemTime = Util.formateTime(new Date())
      this.setState({
        systemTime
      })
    }, 1000);
  }
  componentDidMount() {
    this.getWeatherDate()
    this.handleMenuUpdate(MenuConfig)
  }
  getWeatherDate() {

  }
  // 路由变化会触发 componentWillReceiveProps
  componentWillReceiveProps() {
    this.handleMenuUpdate(MenuConfig)
  }
  handleMenuUpdate = (data) => {
    let currentKey = window.location.hash.replace(/#|\?.*$/g, "")
    let obj = []
    data.map((item) => {
      if (item.children) {
        return obj.push(...item.children)
      } else {
        return obj.push(item)
      }
    })
    const menuName = obj
    menuName.forEach((item) => {
      if (currentKey === item.key) {
        this.setState({
          MenuName: item.title
        })
      }
    })
  }
  logout = () => {
    confirm({
      title: '提示',
      content: '确认退出吗？',
      onOk() {
        alert('ok')
      },
      onCancel() { }
    })
  }
  render() {
    const menuType = this.props.menuType
    return (
      <div className="header">
        <Row className="header-top">
          {
            menuType ? (
              <Col className="logo" span={6}>
                <span style={{ fontSize: '18px' }}>综合媒体</span>
                <span>后台管理系统</span>
              </Col>
            ) : ("")
          }
          <Col span={menuType ? 18 : 24}>
            <span>欢迎，{this.state.username}</span>
            <Button className="logout" onClick={this.logout}>退出</Button>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col className="breadcrumb-title">{this.state.MenuName}</Col>
          <Col className="weather">
            <span className="date">{this.state.systemTime}</span>
            <span className="weather-detail">{this.state.weather}</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header

import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header'
import NavLeft from './components/NavLeft'
import Footer from './components/Footer'

export default class Layout extends Component {
  render() {
    return (
      <Row className="container">
        <Col className="nav-left" span={4}>
          <NavLeft />
        </Col>
        <Col className="main" span={20}>
          <Header />
          <Row className="content">
            {/* <Home /> */}
            {this.props.children}
          </Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}

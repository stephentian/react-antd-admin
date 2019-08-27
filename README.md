# react-antd-admin


## Introduction


In the project directory, you can run:
```
npm install
npm start
```
or
```
yarn install
yarn start
```

Open http://localhost:3000 to view it in the browser

## Build the project step by step

#### Create the project

```
create react-app react-antd-admin
cd react-antd-admin
npm start
```

#### Import Antd
```
yarn add antd
```

#### Layout
```
// layout.js

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
```
Create Header, Footer, NavLeft in `components`.

#### Use react-router

```
yarn add react-router-dom
```

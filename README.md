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
create-react-app react-antd-admin
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

1. import react-router
    ```
    yarn add react-router-dom
    ```

2. create router.js
    ```
    import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
    // ...
    ```
3. modify `NavLeft`
    ```
    import { NavLink } from 'react-router-dom';
    // ...
    <NavLink to={item.key}>{item.title}</NavLink>
    ```

## Use Redux

```
yarn add redux --save
 
yarn add react-redux --save
```

src 下新建 redux 文件夹,
并建立 action, reducer, store 文件.

1. action 里构建事件名称返回对象
2. reducer 构建函数
3. store 里
    ```
    // 引入 createStore 保存数据
    import { createStore } from 'redux';
    ```
4. 根组件
    ```
    import { Provider } from 'react-redux';
    import iniStore from './redux/store'
    const store = iniStore()

    <Provider store={store}>
      <IRouter />
    </Provider>
    ```
5. 组件连接 redux, 并触发事件
    ```
    import { connect } from "react-redux"; // 连接器
    import { switchMenu } from "../../redux/action";
    
    // 事件派发
    const { dispatch } = this.props
    dispatch(switchMenu(item.props.title))
    
    export default connect()(NavLeft)
    ```
6. 接收数据
    ```
    import {connect} from "react-redux";

    const mapStateToProps = state => {
      console.log(state)
      return {
        menuName: state.menuName
      }
    }

    export default connect(mapStateToProps)(Header)
    ```

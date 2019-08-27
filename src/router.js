import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/home';
import RichText from './pages/richText';
import City from './pages/city';


export default class IRouter extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" render={() => {
            return (
              <Layout>
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/rich" component={RichText} />
                  <Route path="/city" component={City} />
                  <Redirect to="/home" />
                </Switch>
              </Layout>
            )
          }}></Route>
        </Switch>
      </HashRouter>
    )
  }
}

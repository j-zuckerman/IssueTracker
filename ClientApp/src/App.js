import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Projects } from './components/projects';

import { ProjectDetails } from './components/projects/ProjectDetails';

import { Issues } from './components/issues/index';
import { Issue } from './components/issues/Issue';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <AuthorizeRoute path="/fetch-data" component={FetchData} />

        <Route exact path="/projects" component={Projects} />
        <Route exact path="/project/detail/:id" component={ProjectDetails} />

        <Route exact path="/issues" component={Issues} />
        <Route exact path="/issue/detail/:id" component={Issue} />

        <Route
          path={ApplicationPaths.ApiAuthorizationPrefix}
          component={ApiAuthorizationRoutes}
        />
      </Layout>
    );
  }
}

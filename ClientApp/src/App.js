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
import { Project } from './components/projects/Project';
import { CreateProject } from './components/projects/CreateProject';
import { EditProject } from './components/projects/EditProject';

import { Issues } from './components/issues/index';
import { Issue } from './components/issues/Issue';
import { CreateIssue } from './components/issues/CreateIssue';
import { EditIssue } from './components/issues/EditIssue';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <AuthorizeRoute path="/fetch-data" component={FetchData} />

        <Route path="/projects" component={Projects} />
        <Route path="/projects/edit/:id" component={EditProject} />
        <Route path="/projects/create/:id" component={CreateProject} />
        <Route path="/projects/:id" component={Project} />

        <Route path="/issues" component={Issues} />
        <Route path="/issues/edit/:id" component={EditIssue} />
        <Route path="/issues/create/:id" component={CreateIssue} />
        <Route path="/issues/:id" component={Issue} />

        <Route
          path={ApplicationPaths.ApiAuthorizationPrefix}
          component={ApiAuthorizationRoutes}
        />
      </Layout>
    );
  }
}

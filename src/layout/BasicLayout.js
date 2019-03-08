import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router-dom'

import './BasicLayout.less';
import PageHeader from '@/components/header';
import TagItem from '@/components/tagItem';

export default class App extends PureComponent {
  render() {
    const { routerData } = this.props;
    const RouteComponents = [];
    Object.keys(routerData).forEach((path, idx) => {
      if (path === '/') {
        RouteComponents.push(<Route exact key={idx + 1} path="/" render={() => <Redirect to="/home" />} />);
      } else {
        const ChildComponent = (props) => {
          const ChildComp = routerData[path].component;
          return (
            <div className="App">
              <PageHeader {...props} />
              <div className="layout-content">
                <div className="content">
                  <ChildComp {...props} />
                </div>
                <div className="sider">
                  <TagItem {...props} />
                </div>
              </div>
            </div>
          );
        };
        RouteComponents.push(
          <Route exact key={idx + 1} path={path} render={ChildComponent} />
        );
      }
    });
    return (
      <div>
        {RouteComponents}
      </div>
    );
  }
}

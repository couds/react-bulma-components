import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from 'layout';
import 'helpers.scss';

// import Index from './screens/index';
// import GettingStarted from './screens/getting-started';

const Index = React.lazy(() => import('./screens/index'));
const GettingStarted = React.lazy(() => import('./screens/getting-started'));

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={WaitingComponent(Index)} />
            <Route path="/getting-started/" component={WaitingComponent(GettingStarted)} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;

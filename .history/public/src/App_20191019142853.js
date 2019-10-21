import React, { useState, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LocaleContext from 'locales/context';
import Layout from 'layout';
import Loader from 'components/page-loader';
import { I18nProvider } from '@lingui/react';

import 'helpers.scss';
// import Index from './screens/index';
// import GettingStarted from './screens/getting-started';

const Home = React.lazy(() => import('./screens/home'));
const GettingStarted = React.lazy(() => import('./screens/getting-started'));
const NotFound = React.lazy(() => import('./screens/not-found'));
const Documentation = React.lazy(() => import('./screens/documentation'));

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<Loader  />}>
      <Component {...props} />
    </Suspense>
  );
}
const LocaleRouteHandler = ({ match, location }) => {
  const defaultMessages = {};

  const [catalogs, setCatalogs] = useState(defaultMessages);
  useEffect(() => {
    import(`./locales/${match.params.lang}/messages`)
    .then(catalog => setCatalogs((c) => ({
      ...c,
      [match.params.lang]: catalog,
    })));
  }, [match.params.lang]);

  if (catalogs === defaultMessages) {
    return (<div />);
  }

  return (
    <LocaleContext.Provider value={match.params.lang}>
      <I18nProvider language={match.params.lang} catalogs={catalogs}>
        <Layout currentPath={location.pathname} >
          <Switch>
            <Route path={match.url} exact component={WaitingComponent(Home)}  />
            <Route path={`${match.url}/getting-started/`} component={WaitingComponent(GettingStarted)} />
            <Route path={`${match.url}/documentation`} component={WaitingComponent(Documentation)} />
            <Route path={`${match.url}/*`} component={WaitingComponent(NotFound)} />
          </Switch>
        </Layout>
      </I18nProvider>
    </LocaleContext.Provider>
  )
}

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:lang(es|en)" component={LocaleRouteHandler} />
        <Route path="/" component={() => (<Redirect to="/en"/>)} />
      </Switch>
    </Router>
  );
}

export default App;

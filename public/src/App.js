import React, { useState, Suspense, useEffect } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LocaleContext from 'locales/context';
import Layout from 'layout';
import Loader from 'components/page-loader';
import 'helpers.scss';

// import Index from './screens/index';
// import GettingStarted from './screens/getting-started';

const Home = React.lazy(() => import('./screens/home'));
const GettingStarted = React.lazy(() => import('./screens/getting-started'));

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<Loader  />}>
      <Component {...props} />
    </Suspense>
  );
}
const LocaleRouteHandler = ({ match }) => {
  const defaultMessages = {};

  const [messages, setMessages] = useState(defaultMessages);
  useEffect(() => {
    import(`react-intl/locale-data/${match.params.lang}`)
      .then((localeData) => addLocaleData(localeData.default))
      .then(() => import(`./locales/lang/${match.params.lang}`))
      .then((({ default: m } )=> setMessages(m)));
  }, [match.params.lang]);

  if (defaultMessages === messages) {
    return (<div />);
  }

  return (
    <LocaleContext.Provider value={match.params.lang}>
      <IntlProvider locale={match.params.lang} messages={messages}>
        <Layout >
          <Switch>
            <Route path={match.url} exact component={WaitingComponent(Home)}  />
            <Route path={`${match.url}/getting-started/`} component={WaitingComponent(GettingStarted)} />
          </Switch>
        </Layout>
      </IntlProvider>
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

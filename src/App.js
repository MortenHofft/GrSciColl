// import { css } from '@emotion/react';
import React, { useContext, Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { StandaloneWrapper, Institution, InstitutionSearch, Collection, CollectionSearch, RouteContext } from 'gbif-react-components';

class App extends Component {
  render() {
    let config = {
      siteConfig: {
        routes: {
          ssr_location: this.props.path,
          collectionSearch: {
            route: '/collection/search',
            isHref: false,
            url: () => {
              return `/collection/search`;
            },
          },
          collectionKey: {
            route: '/collection/:key',
            isHref: false,
            url: ({ key }) => {
              return `/collection/${key}`;
            },
          },
          institutionKey: {
            route: '/institution/:key',
            isHref: false,
            url: ({ key }) => {
              return `/institution/${key}`;
            },
          },
          institutionSearch: {
            route: '/institution/search',
            isHref: false,
            url: ({ key }) => {
              return `/institution/search`;
            },
          }
        },
        occurrence: {
          occurrenceSearchTabs: ['TABLE', 'GALLERY', 'MAP', 'DATASETS'],
        }
      }
    };

    return (
      <StandaloneWrapper siteConfig={config.siteConfig}>
        <Routes {...config} />
      </StandaloneWrapper>
    );
  }
}

function Routes(props) {
  const routeContext = useContext(RouteContext);
  return <Switch>
    <Route
      path={routeContext.collectionSearch.route}
      render={routeProps => <CollectionSearch {...props} pageLayout style={{ margin: 'auto', height: 'calc(100vh - 64px)' }} />}
    />
    <Route
      path={routeContext.collectionKey.route}
      render={routeProps => <Collection id={routeProps.match.params.key} {...props} {...routeProps} />}
    />
    <Route
      path={routeContext.institutionSearch.route}
      render={routeProps => <InstitutionSearch {...props} pageLayout style={{ margin: 'auto', height: 'calc(100vh - 64px)' }} />}
    />
    <Route
      path={routeContext.institutionKey.route}
      render={routeProps => <ErrorBoundary>
        <Institution id={routeProps.match.params.key} {...props} {...routeProps} />
      </ErrorBoundary>}
    />
  </Switch>
}

export default App;



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
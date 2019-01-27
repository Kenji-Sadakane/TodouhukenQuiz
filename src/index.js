import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './configureStore'

import { Sample, Hello, BookmarkManager } from './components';
import CalculatorContainer from './containers/CalculatorContainer';

const store = configureStore()

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route path="/hello" component={Hello} />
        <Route path="/sample" component={Sample} />
        <Route path="/bookmark" component={BookmarkManager} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
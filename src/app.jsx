import React from 'react';
import {render} from 'react-dom';
import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import Customers from 'components/Customers';
import Invoices from 'components/Invoices';
import Products from 'components/Products';
import 'react-select/dist/react-select.css';
import {rootReducer} from './reducers';

import createHistory from 'history/createBrowserHistory';
import {Route} from 'react-router';
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';


const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        rootReducer,
        router: routerReducer
    }),
    composeWithDevTools(
        applyMiddleware(thunk, middleware),
    ));

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={Products}/>
                <Route path="/invoices" component={Invoices}/>
                <Route path="/products" component={Products}/>
                <Route path="/customers" component={Customers}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app-root')
);

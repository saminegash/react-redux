import { createStore, applyMiddleware  } from "redux";
import rootReducer from "./rootReducer";
import logger from 'redux-logger'
import thunk from "redux-thunk";

import { composeWithDevToolsLogOnlyInProduction } from '@redux-devtools/extension';

const composeEnhancers = composeWithDevToolsLogOnlyInProduction({});

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger,thunk)));

export default store;

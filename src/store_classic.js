import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import customerReducer from './features/customers/customerSlice';
import accountReducer from './features/accounts/accountSlice';
import { composeWithDevTools } from 'redux-devtools-extension';

export const rootReducer = combineReducers({
	account: accountReducer,
	customer: customerReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

// instalujemy npm i redux-devtools-extension i importujemy composeWithDevTools

// do korzystania z modern redux toolkit instalujemy
// npm i @reduxjs/toolkit

import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';

const store = configureStore({
	reducer: {
		account: accountReducer,
		customer: customerReducer,
	},
});

export default store;

// instalujemy npm i redux-devtools-extension i importujemy composeWithDevTools

// do korzystania z modern redux toolkit instalujemy
// npm i @reduxjs/toolkit

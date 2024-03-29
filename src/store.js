import { createStore, combineReducers, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import { productsReducer, productDetailsReducer } from './reducers/productReducer'
import { authReducer } from './reducers/userReducer'

const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    auth: authReducer
})

let initialState = { }

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;
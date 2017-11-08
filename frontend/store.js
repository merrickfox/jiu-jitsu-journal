import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import { reducer, initialState } from './reducers/position'

export const initStore = () => {
	return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
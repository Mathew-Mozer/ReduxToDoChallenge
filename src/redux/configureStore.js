import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { ToDo } from './todo'

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      ToDo: ToDo,
    }),
    applyMiddleware(thunk, logger)
  )
  return store
}

import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../Reducers';

export default function configureStore () {
  const logger = createLogger()
  const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)
  const store = createStoreWithMiddleware(rootReducer)

  if (module.hot) {
      module.hot.accept(() => {
        const nextRootReducer = require('../Reducers/index').default
        store.replaceReducer(nextRootReducer)
      })
  }

  return store
}

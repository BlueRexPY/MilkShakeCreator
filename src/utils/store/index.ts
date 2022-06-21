import { combineReducers, createStore, applyMiddleware } from 'redux';
import { CurrentShakeReducer } from './CurrentShakeReducer';
import { ListReducer } from './ListReducer';




const rootReducer = combineReducers({list:ListReducer,currentShake:CurrentShakeReducer})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>;
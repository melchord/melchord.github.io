import { useMemo } from 'react';
import { createStore } from 'redux';

let store;

const initialState = {
  active = false,
  currentPreview = 'nextjs',
  lastUpdate: 0,
  light: false,
}

const reducer = ( state = initialState, action) => {
  switch(action.type) {
    case 'tick': 
      return {
        ...state,
        lastUpdate: action.lastUpdate,
        light: !!action.light,
      }
    case 'update':
      return {
          ...state,
          currentPreview: action.preview,
      }
    case 'setActive':
    default: 
      return state
  }
}

const initStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState
  )
}

export const initialStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an inital Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export const useStore = (initialState) => {
  const store = useMemo(() => initialStore(initialState, [initialState]))
  return store;
}
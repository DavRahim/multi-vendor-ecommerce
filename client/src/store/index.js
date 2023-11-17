import {configureStore} from '@reduxjs/toolkit'
import rooReducers from './rootReducer'
const store = configureStore({
  reducer: rooReducers,
  devTools: true,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
export default store;
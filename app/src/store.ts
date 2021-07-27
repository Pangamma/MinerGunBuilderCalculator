import { AnyAction, Dispatch, bindActionCreators } from 'redux';
import { configureStore, createSlice, PayloadAction, CaseReducer, SliceCaseReducers } from '@reduxjs/toolkit';
import { Logger } from './utils/logger';

export interface AppState {
  innerWidth: number;
}

const initialState: AppState = {
  innerWidth: window.innerWidth
};

interface AppStateReducers extends SliceCaseReducers<AppState> {
  setInnerWidth: CaseReducer<AppState, PayloadAction<number>>;
}

const storeSlice = createSlice<AppState, AppStateReducers>({
  name: 'appStore',
  initialState,
  reducers: {
    setInnerWidth: (state, action) => {
      state.innerWidth = action.payload;
    }
  }
});

const storeLogger = () => {
  return (next: Dispatch<AnyAction>) => (action: AnyAction) => {
    Logger.debug(`Dispatching action ${action.type}`);
    return next(action);
  };
};

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: false }).concat(storeLogger),
  reducer: storeSlice.reducer,
});

export const actions = bindActionCreators(storeSlice.actions, store.dispatch);

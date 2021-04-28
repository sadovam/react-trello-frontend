import { createStore } from 'redux';
import rootReducer from './reducer';

import { BoardsState } from './modules/boards/reducer';
import { BoardState } from './modules/board/reducer';
import { UserState } from './modules/user/reducer';

export interface AppState {
  board: BoardState;
  boards: BoardsState;
  user: UserState;
}

const initialState: AppState = {
  board: { title: '', lists: [] },
  boards: { boards: [] },
  user: { user: [] },
};

const store = createStore(rootReducer, initialState);

export const asyncDispatch = store.dispatch;
export default store;

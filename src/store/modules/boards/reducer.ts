import { IBoard } from '../../../common/interfaces/interfaces';

export interface BoardsState {
  boards: IBoard[];
}

const initialState: BoardsState = {
  boards: [],
};

export default function reducer(state = initialState, action: { type: string }): BoardsState {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
}

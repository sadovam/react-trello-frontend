import { IBoard } from '../../../common/interfaces/interfaces';

export interface BoardsState {
  boards: IBoard[];
}

const initialState: BoardsState = {
  boards: [],
};

export default function reducer(state = initialState, action: { type: string; boards: IBoard[] }): BoardsState {
  switch (action.type) {
    case 'UPDATE_BOARDS': {
      return {
        ...state,
        boards: action.boards,
      };
    }

    case 'UPDATE_BOARDS_ERROR': {
      return {
        ...state,
        boards: [],
      };
    }

    default: {
      return { ...state };
    }
  }
}

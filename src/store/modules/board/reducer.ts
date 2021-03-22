import { IList } from '../../../common/interfaces/interfaces';

export interface BoardState {
  title: string;
  lists: IList[];
}

const initialState: BoardState = {
  title: '',
  lists: [],
};

export default function reducer(state = initialState, action: { type: string }): BoardState {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
}

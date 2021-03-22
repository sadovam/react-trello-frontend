import { IUser } from '../../../common/interfaces/interfaces';

export interface UserState {
  user: IUser[];
}

const initialState: UserState = {
  user: [],
};

export default function reducer(state = initialState, action: { type: string }): UserState {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
}

import { Dispatch } from 'react';
import api from '../../../api/request';
import config from '../../../common/constants/api';
import { IBoard } from '../../../common/interfaces/interfaces';

export const getBoards = () => async (
  dispatch: Dispatch<{ type: 'UPDATE_BOARDS'; boards: IBoard[] } | { type: 'UPDATE_BOARDS_ERROR' }>
): Promise<void> => {
  try {
    const { data: boards } = await api.get(config.boards);
    dispatch({ type: 'UPDATE_BOARDS', boards });
  } catch (e) {
    dispatch({ type: 'UPDATE_BOARDS_ERROR' });
  }
};

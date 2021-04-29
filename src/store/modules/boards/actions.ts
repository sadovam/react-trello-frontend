import { asyncDispatch } from '../../store';
import api from '../../../api/request';
import config from '../../../common/constants/api';

export const getBoards = async (): Promise<void> => {
  try {
    const { data: boards } = await api.get(config.boards);
    asyncDispatch({ type: 'UPDATE_BOARDS', boards });
  } catch (e) {
    asyncDispatch({ type: 'UPDATE_BOARDS_ERROR' });
  }
};

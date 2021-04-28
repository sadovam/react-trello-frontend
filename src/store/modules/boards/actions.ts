// import store from '../../store';
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

// export const getBoards = (): Promise<unknown> =>
//   api.get('board').then(
//     ({ data: boards }) => store.dispatch({ type: 'UPDATE_BOARDS', boards }),
//     () => store.dispatch({ type: 'UPDATE_BOARDS_ERROR' })
//   );

// const { data: boards } = await api.get('/boards');
// store.dispatch({ type: 'UPDATE_BOARDS', boards });
//   store.dispatch({ type: 'UPDATE_BOARDS_ERROR' });
// }

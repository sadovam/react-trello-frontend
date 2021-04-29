import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Board } from './components/Board/Board';
import { getBoards } from '../../store/modules/boards/actions';
import { AppState } from '../../store/store';
import { IBoard } from '../../common/interfaces/interfaces';

type PropsType = {
  getBoards: () => Promise<void>;
  boards: IBoard[];
};

class Home extends React.Component<PropsType, Record<string, never>> {
  async componentDidMount(): Promise<void> {
    // eslint-disable-next-line react/destructuring-assignment
    await this.props.getBoards();
  }

  makeBoards(): React.ReactElement[] {
    const { boards } = this.props;
    return boards?.map((board) => (
      <Link to={`/board/${board.id}`}>
        <Board key={board.id} title={board.title} />
      </Link>
    ));
  }

  render(): React.ReactElement {
    return (
      <div className="board__main">
        {this.makeBoards()}
        <button className="board__btn">Добавить доску</button>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): IBoard[] => ({ ...state.boards.boards });

export default connect(mapStateToProps, { getBoards })(Home);

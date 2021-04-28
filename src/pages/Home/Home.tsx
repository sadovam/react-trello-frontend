import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Board } from './components/Board/Board';
import { getBoards } from '../../store/modules/boards/actions';
import { AppState } from '../../store/store';
import { BoardsState } from '../../store/modules/boards/reducer';

type PropsType = {
  getBoards: () => Promise<void>;
};

class Home extends React.Component<PropsType, BoardsState> {
  async componentDidMount(): Promise<void> {
    // eslint-disable-next-line react/destructuring-assignment
    await this.props.getBoards();
  }

  makeBoards(): React.ReactElement[] {
    const { boards } = this.state || { boards: [{ title: 'Your trello is empty. Create first board!', id: 0 }] };
    return boards.map((board) => (
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

const mapStateToProps = (state: AppState): BoardsState => state.boards;

export default connect(mapStateToProps, { getBoards })(Home);

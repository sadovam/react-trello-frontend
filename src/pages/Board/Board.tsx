import React, { ReactElement } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { List } from './components/List/List';
import { IList } from '../../common/interfaces/interfaces';

interface BoardState {
  title: string;
  lists: IList[];
}

interface MatchParams {
  id: string;
}

class Board extends React.Component<RouteComponentProps<MatchParams>, BoardState> {
  constructor(props: RouteComponentProps<MatchParams>) {
    super(props);
    this.state = {
      title: 'Моя тестовая доска',
      lists: [
        {
          id: 1,
          title: 'Планы',
          cards: [
            { id: 1, title: 'помыть кота' },
            { id: 2, title: 'приготовить суп' },
            { id: 3, title: 'сходить в магазин' },
          ],
        },
        {
          id: 2,
          title: 'В процессе',
          cards: [{ id: 4, title: 'посмотреть сериал' }],
        },
        {
          id: 3,
          title: 'Сделано',
          cards: [
            { id: 5, title: 'сделать домашку' },
            { id: 6, title: 'погулять с собакой' },
          ],
        },
      ],
    };
  }

  makeLists(): ReactElement[] {
    const { lists } = this.state;
    return lists.map((list) => <List {...list} />);
  }

  render(): ReactElement {
    const { title } = this.state;
    // eslint-disable-next-line react/destructuring-assignment
    const { id } = this.props.match.params;
    return (
      <section className="board">
        <header className="board__header">
          <Link to="/" className="board__home-link">
            Домой
          </Link>
          <h1 className="board__title">
            {title} | {id}
          </h1>
        </header>
        <div className="board__main">
          {this.makeLists()}
          <button className="board__btn">Добавить список</button>
        </div>
      </section>
    );
  }
}

export default withRouter(Board);

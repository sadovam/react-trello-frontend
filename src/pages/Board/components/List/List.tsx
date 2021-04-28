import React, { FC, ReactElement } from 'react';
import { IList, ICard } from '../../../../common/interfaces/interfaces';
import { Card } from '../Card/Card';

function makeCardList(cards: ICard[]): ReactElement[] {
  return cards.map((card) => <Card key={card.id.toString()} title={card.title} />);
}

export const List: FC<IList> = ({ title, cards }): ReactElement => (
  <section className="list">
    <h2 className="list__title">{title}</h2>
    <ul className="list__cards">{makeCardList(cards)}</ul>
    <button className="list__btn btn">Добавить карту</button>
  </section>
);

import React, { FC, ReactElement } from 'react';
// import './card.scss';

interface CardProps {
  title: string;
}

export const Card: FC<CardProps> = ({ title }): ReactElement => <li className="card">{title}</li>;

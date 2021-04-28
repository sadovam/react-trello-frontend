import React from 'react';

interface BoardProps {
  title: string;
}

export const Board: React.FC<BoardProps> = ({ title }): React.ReactElement => <h2>{title}</h2>;

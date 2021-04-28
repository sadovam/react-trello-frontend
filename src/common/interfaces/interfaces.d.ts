export interface ICard {
  id: number;
  title: string;
  // position: number;
  //  description: string;
  // users: number[];
}

export interface IList {
  id: number;
  // position: number;
  title: string;
  cards: ICard[];
}

export interface IBoard {
  id: number;
  title: string;
}

export interface IUser {
  id: number;
  email: string;
  username: string;
}

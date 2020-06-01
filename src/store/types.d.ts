export type Player = "X" | "O";
export type Cell = Player | "EMPTY";
export type GameState = Player | "DRAW" | "CONTINUE";
export type Board = Cell[][];

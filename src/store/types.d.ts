export type Player = "X" | "O";
export type Cell = Player | null;
export type GameState = Player | "DRAW" | null;
export type Board = Cell[][];

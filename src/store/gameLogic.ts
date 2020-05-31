/**
 * All functions expect the following 2D array as input for 'board':
 * const board =
 *   [[null, null, null],
 *    [null, null, null],
 *    [null, null, null]];
 *
 * The board values can be either:
 * * "X": PlayerX
 * * "O": PlayerO
 * * null
 */

// This lib contains powerful functions for list transformations.
import * as R from "ramda";
import { Board, Cell, GameState } from "./types";

/**
 * Helps debugging the board
 */
export const logBoard = (board: Board): Board => {
  console.table(board);
  return board;
};

/**
 * Updates a single board value by x and y coordinates and returns the modified board.
 * Leaves the original board unchanged.
 */
export const updateBoard = (
  board: Board,
  x: number,
  y: number,
  value: Cell
): Board => R.assocPath<Cell, Board>([x, y], value)(board);

/**
 * Gets a single board value by x and y coordinates
 */
export const getCell = (board: Board, x: number, y: number): Cell | null =>
  R.path<Cell>([x, y])(board) || null;

/**
 * Checks if a board value can be updated (simply checks if the board contains null)
 */
export const canUpdateCell = (board: Board, x: number, y: number): boolean =>
  R.equals(getCell(board, x, y), null);

/**
 * Checks if all elements a row contain the same value 'v'.
 * Checks all three rows.
 */
const checkRowsForWinner = (board: Board, cell: Cell): boolean => {
  const check = R.all(R.equals(cell));
  return check(board[0]) || check(board[1]) || check(board[2]);
};

/**
 * Cheks if all elements of a column contain the same value 'v'.
 * Checks all three columns.
 *
 * Uses a simple trick by transposing the board so that the whole board
 * gets rotated and the columns become rows. Then the "rows" can be passed
 * to checkRowsForWinner
 */
const checkColsForWinner = (board: Board, cell: Cell): boolean => {
  const transposedBoard = R.transpose(board);
  return checkRowsForWinner(transposedBoard, cell);
};

/**
 * Checks if all elements of a diagnola contain the same value 'v'.
 * Checks the two diagonals.
 */
const checkDiagonalsForWinner = (board: Board, cell: Cell): boolean => {
  const diag1 = [board[0][0], board[1][1], board[2][2]];
  const diag2 = [board[2][0], board[1][1], board[0][2]];
  const check = R.all(R.equals(cell));
  return check(diag1) || check(diag2);
};

/**
 * Checks if any one of the
 * * rows
 * * columns
 * * diagonals
 * of the board contain the same value 'v'.
 */
const checkForWinner = (board: Board, cell: Cell): boolean =>
  checkRowsForWinner(board, cell) ||
  checkColsForWinner(board, cell) ||
  checkDiagonalsForWinner(board, cell);

/**
 * Checks if the game is a draw
 *
 * It does check if all of the boards aren't null.
 */
const checkForDraw = (board: Board): boolean => {
  const check = R.all<Cell>((x) => !R.equals(x, null));
  return check(R.flatten(board));
};

/**
 * Determines either the winner or a draw.
 * If null is returned the game continues.
 */
export const getWinner = (board: Board): GameState => {
  if (checkForWinner(board, "X")) return "X";
  else if (checkForWinner(board, "O")) return "O";
  else if (checkForDraw(board)) return "DRAW";
  else return null;
};

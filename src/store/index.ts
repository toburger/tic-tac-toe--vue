import { createStore, MutationTree, ActionTree, GetterTree } from "vuex";
import * as GameLogic from "./gameLogic";
import { Board, GameState, Player } from "./types";

export interface State {
  board: Board;
  winner: GameState;
  currentPlayer: Player;
}

const initialBoard: Board = [
  ["EMPTY", "EMPTY", "EMPTY"],
  ["EMPTY", "EMPTY", "EMPTY"],
  ["EMPTY", "EMPTY", "EMPTY"],
];

const state: State = {
  board: initialBoard,
  currentPlayer: "X",
  winner: "CONTINUE",
};

const mutations: MutationTree<State> = {
  move(state: State, { x = 0, y = 0 }) {
    if (!GameLogic.canUpdateCell(state.board, x, y)) return;
    const newBoard = GameLogic.updateBoard(
      state.board,
      x,
      y,
      state.currentPlayer
    );
    const winner = GameLogic.getWinner(newBoard);
    state.board = newBoard;
    state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
    state.winner = winner;
    console.log("ok");
  },
  restart(state: State) {
    state.board = initialBoard;
    state.currentPlayer = "X";
    state.winner = "CONTINUE";
  },
};

const actions: ActionTree<State, State> = {
  move: ({ commit }, payload) => commit("move", payload),
  restart: ({ commit }) => commit("restart"),
};

const getters: GetterTree<State, State> = {
  isGameOver: (state) => state.winner !== "CONTINUE",
};

export default createStore<State>({
  state,
  getters,
  actions,
  mutations,
});

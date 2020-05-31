import { createStore, MutationTree, ActionTree, GetterTree } from "vuex";

export type State = { count: number };
export type Action = "increment" | "decrement"; // How do I define the possible dispatch values?

const state: State = {
  count: 0,
};

const mutations: MutationTree<State> = {
  increment(state: State) {
    state.count++;
  },
  decrement(state: State) {
    state.count--;
  },
};

const actions: ActionTree<State, State> = {
  increment: ({ commit }) => commit("increment"),
  decrement: ({ commit }) => commit("decrement"),
};

const getters: GetterTree<State, State> = {
  evenOrOdd: (state) => (state.count % 2 === 0 ? "even" : "odd"),
};

export default createStore<State>({
  state,
  getters,
  actions,
  mutations,
});

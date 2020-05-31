<template>
  <div>
    <div v-for="(row, x) in board" :key="x" class="Board__Row">
      <cell
        v-for="(cell, y) in row"
        :key="y"
        :value="cell"
        @click="move(x, y)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { State } from "../store";
import Cell from "./Cell.vue";

export default defineComponent({
  components: {
    cell: Cell,
  },
  setup() {
    const store = useStore<State>();
    return {
      board: computed(() => store.state.board),
      move: (x, y) => store.dispatch("move", { x, y }),
    };
  },
});
</script>

<style>
.Board__Row {
  white-space: nowrap;
}

.Board__Row:first-child .Cell {
  padding-top: 18px;
}

.Board__Row:last-child .Cell {
  border-bottom: none;
  padding-bottom: 18px;
}
</style>

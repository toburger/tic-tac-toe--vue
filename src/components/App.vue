<template>
  <div class="App">
    <game-over v-if="isGameOver" />
    <game v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { State } from "../store";
import Game from "./Game.vue";
import GameOver from "./GameOver.vue";

export default defineComponent({
  components: {
    "game-over": GameOver,
    game: Game,
  },
  setup() {
    const store = useStore<State>();
    return {
      isGameOver: computed(() => store.getters.isGameOver),
    };
  },
});
</script>

<style>
.App {
  margin: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

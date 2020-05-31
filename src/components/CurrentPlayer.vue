<template>
  <div class="CurrentPlayer">
    <span class="CurrentPlayer__Text">
      Player:
      <player :player="currentPlayer" small />
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Player from "./Player.vue";
import { useStore } from "vuex";
import { State } from "../store";

export default defineComponent({
  components: {
    player: Player,
  },
  setup() {
    const store = useStore<State>();
    return {
      currentPlayer: computed(() => store.state.currentPlayer),
    };
  },
});
</script>

<style>
.CurrentPlayer {
  color: #939393;
  font-weight: bold;
  text-transform: uppercase;
  height: 50px;
  display: flex;
  align-items: center;
}

.CurrentPlayer__Text {
  padding: 7px 20px 4px;
  font-size: 1em;
  height: 20px;
  border: 1px solid #dddddd;
  border-radius: 20px;
  white-space: nowrap;
  margin: auto;
  margin-top: 20px;
}
</style>

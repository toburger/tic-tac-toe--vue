<template>
  <div class="GameOver">
    <img
      class="GameOver__Image"
      @click="restart"
      :src="restartImage"
      alt="Restart"
    />
    <p class="GameOver__Text">
      <span v-if="isDraw">It's a draw!</span>
      <span v-else>
        Player
        <player :player="winner" small />
        wins!
      </span>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Player from "./Player.vue";
import RestartImage from "../assets/restart.png";
import { useStore } from "vuex";
import { State } from "../store";

export default defineComponent({
  components: {
    player: Player,
  },
  setup() {
    const store = useStore<State>();
    return {
      winner: store.state.winner,
      isDraw: computed(() => store.state.winner === "DRAW"),
      restart: () => store.dispatch("restart"),
    };
  },
  data() {
    return {
      restartImage: RestartImage,
    };
  },
});
</script>

<style>
.GameOver {
  color: #939393;
  font-weight: bold;
  text-transform: uppercase;
  height: 50px;
  display: flex;
  align-items: center;
}

.GameOver__Image {
  margin-right: 10px;
}

.GameOver__Image:hover {
  filter: saturate(3);
}

.GameOver__Text {
  padding: 7px 20px 4px;
  font-size: 1em;
  height: 20px;
  border: 1px solid #dddddd;
  border-radius: 20px;
  white-space: nowrap;
}
</style>

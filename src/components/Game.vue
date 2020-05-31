<template>
  <div>
    <board />
    <current-player />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Board from "./Board.vue";
import CurrentPlayer from "./CurrentPlayer.vue";

export default defineComponent({
  components: {
    board: Board,
    "current-player": CurrentPlayer,
  },
});
</script>

<style></style>

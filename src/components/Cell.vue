<template>
  <div class="Cell">
    <player v-if="value" :player="value" />
    <no-player v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Player from "./Player.vue";
import NoPlayer from "./NoPlayer.vue";
import { Cell } from "../store/types";

export default defineComponent({
  components: {
    player: Player,
    "no-player": NoPlayer,
  },
  props: {
    value: String as () => Cell,
  },
});
</script>

<style>
.Cell {
  background: none;
  border: solid 2px #dddddd;
  border-left: none;
  border-top: none;
  border-collapse: collapse;
  display: inline-block;
  padding: 14px;
}

.Cell:focus {
  outline: none;
}

.Cell:first-child {
  padding-left: 18px;
}

.Cell:last-child {
  border-right: none;
  padding-right: 18px;
}
</style>

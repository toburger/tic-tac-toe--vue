<template>
  <span>
    <img v-if="small" :src="image" class="PlayerX PlayerX--Small" />
    <img v-else :src="image" class="PlayerX" />
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlayerXImage from "../assets/PlayerX.svg";
import PlayerOImage from "../assets/PlayerO.svg";

export default defineComponent({
  props: {
    player: String,
    small: Boolean,
  },
  computed: {
    image() {
      switch (this.player) {
        case "X":
          return PlayerXImage;
        case "O":
          return PlayerOImage;
        default:
          null;
      }
    },
  },
});
</script>

<style>
.PlayerX {
  animation: retract 0.3s ease;
}

.PlayerO {
  animation: expand 0.3s ease;
}

@keyframes expand {
  from {
    transform: scale(0);
    opacity: 0;
  }
}

@keyframes retract {
  from {
    transform: scale(2);
    opacity: 0;
  }
}

.PlayerX,
.PlayerO {
  width: 35px;
  height: 35px;
  box-sizing: content-box;
}

.PlayerX--Small,
.PlayerO--Small {
  width: 12px;
  height: 12px;
  margin: 0 5px;
}
</style>

<template>
  <div class="traffic-light">
    <!-- <light v-for = "light in lights" v-bind:key = "light" curColor="red" :opacTrue="isRed" :timer = timer /> -->
    <light curColor="red" :opacTrue="isRed" :timer = timer />
    <light curColor="yellow" :opacTrue="isYellow" :timer = timer />
    <light curColor="green" :opacTrue="isGreen" :timer = timer />
  </div>
</template>

<script>
import light from "./light";
export default {
  name: "lights",
  props: {
    timer: Number,
    isRed: {
      type: Boolean,
      default: false
    },
    isYellow: {
      type: Boolean,
      default: false
    },
    isGreen: {
      type: Boolean,
      default: false
    }
  },
  components: {
    light
  },
};
</script>

<style scoped>
.traffic-light {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
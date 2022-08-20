<template>
  <div
    class="h-full relative items-center justify-center w-full overflow-x-hidden bg-black"
  >
    <div class="h-full relative">
      <HeroVisuals></HeroVisuals>
      <HeroText></HeroText>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeroText from "./components/HeroText.vue";
import HeroVisuals from "./components/HeroVisuals.vue";

export default defineComponent({
  name: "App",
  components: { HeroText, HeroVisuals },
});
</script>

<style lang="scss">
html,
body,
#app {
  min-height: 100%;
  height: 100%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

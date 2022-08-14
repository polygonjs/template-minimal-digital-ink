<template>
  <div
    class="h-full relative items-center justify-center w-full overflow-x-hidden lg:pt-40 lg:pb-40 xl:pt-40 xl:pb-64"
  >
    <div
      class="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0"
    >
      <div
        class="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left"
      >
        <h1
          class="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-6xl xl:mb-8"
        >
          Build the Next Great Thing
        </h1>
        <p
          class="pr-0 mb-8 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20"
        >
          Are you ready to start your adventure and start building the next
          greatest SAAS app on the market?
        </p>
        <a
          href="#_"
          class="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-indigo-600 border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0"
          >Signup Today!</a
        >
        <!-- Integrates with section -->
      </div>
      <div
        class="relative z-50 flex flex-col items-end justify-center w-full h-full lg:w-1/2 ms:pl-10"
      >
        <div
          class="container relative left-0 w-full max-w-4xl lg:absolute xl:max-w-6xl lg:w-screen"
        >
          <img
            src="https://cdn.devdojo.com/images/september2020/macbook-mockup.png"
            class="w-full h-auto mt-20 mb-20 ml-0 lg:mt-24 xl:mt-40 lg:mb-0 lg:h-full lg:-ml-12"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
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

<template>
  <div class="grid place-items-center h-screen">
    <div>
      <h1
        class="relative mb-4 text-2xl font-black leading-tight text-gray-100 sm:text-6xl xl:mb-8"
      >
        We love digital ink
      </h1>
      <h2 class="relative mb-8 text-base text-gray-200 sm:text-lg xl:text-xl">
        <span class="block">Are you ready to dazzle your audience with</span>
        <span>wonderful and interactive websites?</span>
      </h2>
      <a
        href="mailto:youremail@yourdomain.com"
        class="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-indigo-600 hover:bg-indigo-500 border-t border-gray-800 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0"
        >Let's talk</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Hero-Text",
});
</script>

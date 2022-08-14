<template>
  <div class="flex-1 text-right pr-20">
    <h1
      class="relative mb-4 text-2xl font-black leading-tight text-gray-900 sm:text-6xl xl:mb-8"
    >
      We love digital ink
    </h1>
    <p class="pr-0 mb-8 text-base text-gray-600 sm:text-lg xl:text-xl pl-32">
      <span class="block">Are you ready to dazzle your audience with</span>
      <span>wonderful and interactive websites?</span>
    </p>
    <a
      href="mailto:youremail@yourdomain.com"
      class="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-indigo-600 border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0"
      >Let's talk</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Hero-Text",
});
</script>

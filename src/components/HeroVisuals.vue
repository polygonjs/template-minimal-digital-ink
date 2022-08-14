<template>
  <div class="flex-1 h-full">
    <Lavalamp01></Lavalamp01>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Lavalamp01 from "@/polygonjs/components/Lavalamp01.vue";

export default defineComponent({
  name: "Hero-Visuals",
  components: { Lavalamp01 },
});
</script>

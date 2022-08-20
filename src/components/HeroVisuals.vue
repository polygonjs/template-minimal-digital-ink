<template>
  <div class="absolute h-full inset-0">
    <Scene01></Scene01>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Scene01 from "@/polygonjs/components/Scene01.vue";

export default defineComponent({
  name: "Hero-Visuals",
  components: { Scene01 },
});
</script>

<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  margin: 0;
}
</style>

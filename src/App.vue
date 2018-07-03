<template>
  <div id="app">
    <v-home></v-home>
  </div>
</template>

<script>
import Home from '@/views/Home'
export default {
  name: 'App',
  components: {
    'v-home': Home
  }
}
</script>

<style lang="scss">
span.icon {
  margin-right: .25rem;
  margin-left: 0;
}
</style>

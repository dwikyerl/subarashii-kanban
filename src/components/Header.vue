<template>
  <nav class="navbar has-shadow">
      <div class="navbar-brand">
        <a @click.prevent class="navbar-item brand-text">
          <v-logo></v-logo>
        </a>
      </div>
  </nav>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  name: 'Header',
  components: {
    'v-logo': Logo
  }
}
</script>

<style lang="scss">
.navbar.is-white {
  background: #f0f2f4;
}
.navbar-brand .brand-text {
  font-size: .8rem;
  font-weight: bold;
}
</style>

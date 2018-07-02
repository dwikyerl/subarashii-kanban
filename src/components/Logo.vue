<template>
  <a class="logo">
    <b-icon icon="cards-variant" custom-class="logo__icon"></b-icon>
    <p class="logo__text">
      <span class="logo__text-subtitle">Subarashii</span>
      <span class="logo__text-title">Kanban</span>
    </p>
  </a>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss">
.logo {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  &__text {
    display: flex;
    flex-flow: column nowrap;

    &-title {
      font-weight: 800;
      font-size: 1rem;
      letter-spacing: .2rem;
    }

    &-subtitle {
      font-weight: lighter;
    }
  }
}
</style>

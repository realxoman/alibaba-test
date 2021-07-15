<template>
<div>
    <Header />
    <Nuxt />
</div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: this.$store.state.mytheme.darkMode ? 'dark' : 'light',
      },
    }
  },
}
</script>
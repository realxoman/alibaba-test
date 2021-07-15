<template>
<div>
    <Header />
    <div class="main">
        <Nuxt />
    </div>
    
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
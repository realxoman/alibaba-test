<template>
    <button :class="[$style.themeSwitcher, 'ml-auto']" @click="toggleColor">
        <font-awesome-icon :icon="toggleIcon" />
        <span>{{darkMode}} Mode</span>
    </button>
</template>

<script>
export default {
  computed: {
    darkMode() {
      return this.$store.state.mytheme.darkMode ? 'Light' : 'Dark'
    },
    toggleIcon() {
      return this.$store.state.mytheme.darkMode ? 'sun' : 'moon'
    },
  },

  methods: {
    toggleColor() {
      this.$store.commit('mytheme/toggle')
    },
  },

}
</script>


<style lang="scss" module>
@import './styles.scss';
</style>

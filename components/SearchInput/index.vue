<template>
  <div :class="$style.searchInput">
    <font-awesome-icon :class="$style.icon" icon="search" />
    <input v-model="search" type="text" placeholder="Search for a country" @input="search" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        keyword: '',
      }
    },
    methods: {
      async search(val) {

          const result = await fetch(
            `https://restcountries.eu/rest/v2/name/${this.keyword}`
          ).then((res) => res.json())
          this.$store.commit('mycountry/set', result)
        

      },
    },
  }

</script>

<style lang="scss" module>
  @import './styles.scss';

</style>

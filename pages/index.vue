<template>
  <div class="container">
    <div class="d-flex-column">
      <div v-if="countriesList" :class="[$style.row, 'd-flex', 'wrap']">
        <div
          v-for="(country, index) in countriesList"
          :key="index"
          :class="$style.cardWrapper"
        >
          <Countries :country="country" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, error, store }) {
    const countries = await $axios.$get(`https://restcountries.eu/rest/v2/all`)
    store.commit('mycountry/set', countries)
    if (error) return { countries: false }
    return { countries }
  },
  computed: {
    countriesList() {
      return this.$store.state.mycountry.countries || false
    },
  },
}
</script>

<style lang="scss" module>
@import './styles.scss';
</style>
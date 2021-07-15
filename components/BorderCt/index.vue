<template>
  <nuxt-link :class="[$style.button, $style.small]" :to="`/country/${code}`">
            <span>{{country.name}}</span>
    </nuxt-link>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      country: {
        name: '',
      },
    }
  },
  async fetch() {
    this.country = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${this.code}`
    ).then((res) => res.json())
  },
  fetchOnServer: true,
}
</script>

<style lang="scss" module>
@import './styles.scss';
</style>

<template>
  <nuxt-link :class="$style.Country" :to="`/country/${country.alpha3Code}`">
    <img
      :class="$style.ct_flag"
      :src="country.flag"
      :alt="country.name"
      loading="lazy"
    />
    <div :class="$style.ct_texts">
      <h2 :class="$style.ct_name">{{ country.name }}</h2>
      <ul :class="$style.ct_details">
        <li>
          <span :class="$style.ct_key">Population:</span>
          <span :class="$style.value">{{ formatedPopulation }}</span>
        </li>
        <li>
          <span :class="$style.ct_key">Region:</span>
          <span :class="$style.value">{{ country.region }}</span>
        </li>
        <li>
          <span :class="$style.ct_key">Capital:</span>
          <span :class="$style.value">{{ country.capital }}</span>
        </li>
      </ul>
    </div>
  </nuxt-link>
</template>

<script>
export default {
    props: ["country"],
  computed: {
    formatedPopulation() {
      return this.country.population
        .toLocaleString()
    },
  },  data() {
    return {};
  }
}
</script>

<style lang="scss" module>
@import './styles.scss';
</style>

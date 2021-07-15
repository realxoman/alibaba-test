<template>
  <div class="container">
    <div :class="[$style.singleCountry, 'd-flex-column']">
      <div :class="[$style.top, 'd-flex']">
        <nuxt-link :class="$style.button" to="/">
          <font-awesome-icon :class="$style.icon" icon="arrow-left" />
          <span>Back</span>
        </nuxt-link>
      </div>
      <div :class="[$style.row, 'd-flex']">
        <div :class="$style.left">
          <img :class="$style.flag" :src="country.flag" :alt="country.name" />
        </div>
        <div :class="$style.right">
          <h1>{{ country.name }}</h1>
          <ul :class="[$style.details, 'd-flex', 'wrap']">
            <li>
              <span :class="$style.key">Native Name:</span>
              <span :class="$style.value">{{ country.nativeName }}</span>
            </li>

            <li>
              <span :class="$style.key">Population:</span>
              <span :class="$style.value">{{ formatedPopulation }}</span>
            </li>
            <li>
              <span :class="$style.key">Region:</span>
              <span :class="$style.value">{{ country.region }}</span>
            </li>
            <li>
              <span :class="$style.key">Sub Region:</span>
              <span :class="$style.value">{{ country.subregion }}</span>
            </li>
            <li>
              <span :class="$style.key">Capital:</span>
              <span :class="$style.value">{{ country.capital }}</span>
            </li>

            <div :class="$style.mbct">
            <li>
              <span :class="$style.key">Top Level Domain:</span>
              <span :class="$style.value">{{
                country.topLevelDomain.toString()
              }}</span>
            </li>

            <li>
              <span :class="$style.key">Currencies:</span>
              <span :class="$style.value">{{
                country.currencies[0].name
              }}</span>
            </li>

            <li>
              <span :class="$style.key">Languages:</span>
              <span :class="$style.value">{{ country.languages[0].name }}</span>
            </li>
          </div>
          </ul>
          <div :class="[$style.borderCountries, 'd-flex', 'wrap']">
            <span>Border Countries:</span>
            <div :class="[$style.countryList, 'd-flex', 'wrap']">

              <BorderCt v-for="(border, index) in country.borders" :key="index" :code="border" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
head(){
      return {
      title: this.formatedname + " Country Details"
      }
    },
    async asyncData({
      $axios,
      params
    }) {
      const country = await $axios.$get(
        `https://restcountries.eu/rest/v2/alpha/${params.code}`
      )
      return {
        country
      }
    },
    computed: {
      formatedPopulation() {
        return this.country.population
          .toLocaleString()
      },formatedname(){
        return this.country.name
      }
    },
  }

</script>

<style lang="scss" module>
  @import './styles.scss';

</style>

<template>
  <div class="container">
    <div class="d-flex-column">
      <div :class="[$style.searchForm,'d-flex']">
        <form @submit.prevent>
        <div :class="$style.searchInput">
          <font-awesome-icon :class="$style.icon" icon="search" />
         <input
            v-model="search"
            type="text"
            v-on:keyup="filterByName($event)"
            @focus="search = ''"
            placeholder="Search for a country..."
          />
        </div></form>
        <select :class="$style.selection" v-on:change="onChange($event)" :selected="selectedReg">
        <option value="none">Filter by Region</option>
        <option v-for="region in regions" :key="region" :value="region">{{region}}</option>
      </select>
      
      </div>
      
    
      <div v-if="countriesList" :class="[$style.row, 'd-flex', 'wrap']">
        <div v-for="country in filtered" :class="$style.cardWrapper">
          <Countries  :country="country" :key="country.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        countries: [],
        filtered: [],
        selectedReg: "",
        search: "",
        regions: []
      };
    },
    async asyncData({
      $axios
    }) {
      const res = await $axios.$get("https://restcountries.eu/rest/v2/all");
      return {
        res
      };
    },
    async created() {
    this.countries = await this.res;
    this.getRegions();
    this.filtered = this.countries;
  },
    computed: {
      countriesList() {
        return this.countries || false
      },
      
  },methods: {
        getRegions() {
          const regions = this.countries.map(c => c.region);
          let arr = [];
          regions.forEach(el => {
            return arr.push(el);
          });
          const regionsList = arr.filter((item, pos) => {
            return arr.indexOf(item) == pos && item != "";
          });
          this.regions = regionsList;
        },
        onChange(e) {
          this.search = e.target.value;
          if (this.selectedReg !== e.target.value) {
            const filteredList = this.countries.filter(
              item => item.region === e.target.value
            );
            this.filtered = filteredList;
            this.selectedReg = e.target.value;
          }
        },
        focusInput() {
          this.search = "";
        },
        filterByName(e) {
          const val = e.target.value;
          const filteredName = this.countries.filter(c => {
            return c.name.toLowerCase().includes(val);
          });
          this.filtered = filteredName;
        }
      }
    }

</script>

<style lang="scss" module>
  @import './styles.scss';

</style>

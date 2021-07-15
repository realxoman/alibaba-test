export const state = () => ({
    countries: [],
  })
  
  export const mutations = {
    set(state, countries) {
      state.countries = countries
    },
  }
  

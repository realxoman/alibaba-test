export const state = () => ({
    countries: [],
  })
  
  export const mutations = {
    set(state, countries) {
      state.countries = countries
    },SET_LIST(state, payload) {
      state.countries = payload
  },
  }
  
  export const actions = {
    async get_countries({ commit }, payload) {
        await this.$axios.get('all').then(({ data }) => {
            commit('SET_LIST', data)
        })
    },
    async search_countries({ commit }, payload) {
        await this.$axios.get(`name/${payload}`).then(({ data }) => {
            commit('SET_LIST', data)
        })
    },
    async region_filter({ commit }, payload) {
        await this.$axios.get(`/region/${payload}`).then(({ data }) => {
            commit('SET_LIST', data)
        })
    },
    async get_country({ commit }, payload) {
        await this.$axios.get(`/alpha/${payload}`).then(({ data }) => {
            commit('SET_COUNTRY', data)
        })
    },
}
export const state = () => ({
    darkMode: false,
  })
  
  export const mutations = {
    toggle(state) {
      state.darkMode = !state.darkMode
    },
  }
  
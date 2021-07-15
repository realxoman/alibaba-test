export const state = () => ({
    darkMode: false,
  })
  
  export const mutations = {
    togglemode(state) {
      state.darkMode = !state.darkMode
    },
  }
  
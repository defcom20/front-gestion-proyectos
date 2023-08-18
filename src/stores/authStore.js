import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    token: localStorage.getItem('token') || null,
  }),
  getters: {
    isAuthenticated: state => state.user !== null && state.token !== null
  },
  actions: {
    setUser(payload) {
      this.user = payload.data.user
      this.token = payload.data.accessToken
    },
    logout({ state }) {
      state.user = null
      state.token = null
    }
  }
})

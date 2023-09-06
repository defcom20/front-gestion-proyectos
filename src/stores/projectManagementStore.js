import { defineStore } from 'pinia'

export const useProyectManagementStore = defineStore('proyectManagement', {
  state: () => ({
    listProyect: []
  }),
  getters: {
    //isAuthenticated: state => state.user !== null && state.token !== null
  },
  actions: {
    setProyectList(payload) {
      this.listProyect = payload
    },
    addProject(payload) {
      this.listProyect.push(payload)
    }
  }
})

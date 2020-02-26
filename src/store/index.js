import Vue from 'vue';
import Vuex from 'vuex';

import api from '@/api/db';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
  },
  mutations: {
    setItems(state, playload) {
      state.list = playload;
    },
  },
  actions: {
    async getItems({ commit }) {
      const data = await api.getItems();
      commit('setItems', data);
    },
    async addItem({ dispatch }, data) {
      await api.addItem(data);
      dispatch('getItems');
    },
    async updateItem({ dispatch }, data) {
      await api.updateItem(data);
      dispatch('getItems');
    },
    async deleteItem({ dispatch }, data) {
      await api.deleteItem(data);
      dispatch('getItems');
    },
  },
  getters: {
    activeItems(state) {
      return state.list.filter((item) => item.inTrash === false).reverse();
    },
    trashItems(state) {
      return state.list.filter((item) => item.inTrash === true).reverse();
    },
  },
});

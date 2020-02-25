import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
    trash: [],
  },
  mutations: {
    setItemToList(state, playload) {
      state.list.push(playload);
    },
    setItemToTrash(state, playload) {
      state.trash.push(playload);
    },
    deleteItemFromList(state, index) {
      state.list.splice(index, 1);
    },
    deleteItemFromTrash(state, index) {
      state.trash.splice(index, 1);
    },
  },
  actions: {
    addNewItem({ commit }, data) {
      commit('setItemToList', data);
    },
    moveToList({ commit }, data) {
      const { index, item } = data;
      commit('deleteItemFromTrash', index);
      commit('setItemToList', item);
    },
    moveToTrash({ commit }, data) {
      const { index, item } = data;
      commit('deleteItemFromList', index);
      commit('setItemToTrash', item);
    },
  },
});

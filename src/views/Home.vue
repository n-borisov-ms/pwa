<template>
  <div class="page">
    <div class="logo">
      <img src="../assets/img/logo.png" alt="" />
    </div>
    <add-form @submit="addNewItem" />
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item }}
        <button class="trash" @click="moveToTrash({item, index})">in trash</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AddForm from '../components/AddForm';

export default {
  components: {
    AddForm,
  },

  computed: {
    ...mapState(['list']),
  },

  methods: {
    ...mapActions(['addNewItem', 'moveToTrash']),
  },
};
</script>

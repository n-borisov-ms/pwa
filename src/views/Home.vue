<template>
  <div class="page">
    <div class="logo">
      <img src="../assets/img/logo.png" alt="" />
    </div>
    <add-form @submit="addItem({value: $event, inTrash: false})" />
    <ul>
      <li v-for="item in activeItems" :key="item.id">
        {{ item.id }}. {{ item.value }}
        <button class="trash" @click="updateItem({ ...item, inTrash: true })">in trash</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AddForm from '../components/AddForm';

export default {
  components: {
    AddForm,
  },

  computed: {
    ...mapGetters(['activeItems']),
  },

  methods: {
    ...mapActions(['getItems', 'addItem', 'updateItem']),
  },

  mounted() {
    this.getItems();
  },
};
</script>

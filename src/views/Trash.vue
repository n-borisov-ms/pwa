<template>
  <div class="page">
    <div class="logo">
      <img src="../assets/img/logo.png" alt="" />
    </div>
    <ul>
      <li v-for="item in trashItems" :key="item.id">
        {{ item.id }}. {{ item.value }}
        <div>
          <button class="restore" @click="updateItem({ ...item, inTrash: false })">restore</button>
          <button class="delete" @click="deleteItem(item)">delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['trashItems']),
  },

  methods: {
    ...mapActions(['getItems', 'updateItem', 'deleteItem']),
  },

  mounted() {
    this.getItems();
  },
};
</script>

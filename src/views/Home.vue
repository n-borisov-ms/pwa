<template>
  <div class="page">
    <div class="logo">
      <img src="../assets/img/logo.png" alt="" />
    </div>
    <div class="nav-bar">
      <button class="nav-bar__add" @click="addItem({ inTrash: false })">add single</button>
      <button
        class="nav-bar__add"
        :class="{ 'is-loading': !isLoaded }"
        :disabled="!isLoaded"
        @click="addMultiple"
      >
        add with worker
      </button>
    </div>
    <ul>
      <li v-for="item in activeItems" :key="item.id">
        {{ item.id }}
        <button class="trash" @click="updateItem({ ...item, inTrash: true })">in trash</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import myWorker from '@/workers';

export default {
  data() {
    return {
      isLoaded: true,
      myWorker: null,
    };
  },

  computed: {
    ...mapGetters(['activeItems']),
  },

  methods: {
    ...mapActions(['getItems', 'addItem', 'updateItem']),

    addMultiple() {
      this.isLoaded = false;
      myWorker.send({ inTrash: false })
        .then((reply) => {
          this.isLoaded = true;
          this.addItem(reply);
        });
    },
  },

  mounted() {
    this.getItems();
  },
};
</script>

<template>
  <div class="page">
    <div class="logo">
      <img src="../assets/img/logo.png" alt="" />
    </div>
    <ul>
      <li v-for="(item, index) in trash" :key="index">
        {{ item }}
        <button class="restore" @click="moveToList({index, item})">restore</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['trash']),
  },

  methods: {
    ...mapActions(['moveToList']),
  },
};
</script>

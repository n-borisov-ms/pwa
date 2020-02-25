<template>
  <form class="form" @submit.prevent="submitForm">
    <input class="form__input" type="text" v-model="value" />
    <button class="form__submit" type="submit">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    };
  },

  methods: {
    submitForm() {
      this.$emit('submit', this.value);
      this.value = null;
    },
  },
};
</script>

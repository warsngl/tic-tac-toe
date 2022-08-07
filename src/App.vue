<script>
import TheNavbar from "./components/TheNavbar.vue";
import user from './mixins/user'
export default {
  mixins:[user],
  components: { TheNavbar },
};
</script>

<template lang='pug'>
.fc.flex-col
  TheNavbar.mb-8(v-if='user')
  router-view
</template>

<style>
</style>

<template lang="pug">
.fc.h-6
  router-link.mr-10.b(to='/lobby') {{text('lobby')}}
  router-link.b(to='/rating') {{text('rating')}}
</template>

<script>
import text from "../mixins/text";
export default {
  mixins: [text],
};
</script>

<style>
.router-link-exact-active {
  text-decoration: underline;
}
</style>

<template lang='pug'>
ul
  li(v-for="a,idx in i") {{ idx+1 }}: {{a}}
</template>

<script>
export default {
  props: {},
  data: () => ({
    i: ["God", "Dog", "Godzilla","God", "Dog", "Godzilla","God", "Dog", "Godzilla"],
  }),
  methods: {},
  computed: {},
};
</script>

<style>
</style>
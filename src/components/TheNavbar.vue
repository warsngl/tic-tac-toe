<template lang='pug'>
ul.navbar
  li
    router-link(to='/') Home
  li
    router-link(to='/about') About
</template>

<script>
export default {

}
</script>

<style>
.navbar{
  @apply flex justify-around
}
.router-link-exact-active{
  text-decoration: underline;
}
</style>
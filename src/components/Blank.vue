<template lang="pug">
input.mb-3.pl-2(v-model="name", ref="userName")
button.b(@click="auth", @keydown.enter="auth") {{text('startGame')}}
</template>

<script>
// import {db} from '../config'
// import {ref,get} from 'firebase/database'
import user from "../mixins/user";
import text from "../mixins/text";
export default {
  mixins: [user, text],
  data: () => ({
    name: "",
  }),
  methods: {
    auth() {
      this.user = this.name;
      localStorage.setItem(
        "tic-tac-toe-user",
        JSON.stringify({ name: this.user, stats: this.stats })
      );
      this.$router.push("lobby");
    },
    authFromLS() {
      let user = JSON.parse(localStorage.getItem("tic-tac-toe-user"));
      if (user) {
        this.stats = user.stats;
        this.user = user.name;
        this.$router.push("lobby");
      }
    },
  },
  created() {
    this.authFromLS();
  },
};
</script>

<style>
.warn {
  @apply border-2 border-red-500;
}
</style>

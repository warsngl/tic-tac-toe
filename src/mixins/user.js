export default {
  computed: {
    user: {
      get() {
        return this.$store.state.user.name;
      },
      set(val) {
        this.$store.commit('setUser', val);
      },
    },
    stats:{
      get(){
        return this.$store.state.user.stats
      },
      set(val){
        this.$store.commit('setStats',val)
      }
    }
  },
};

<template lang='pug'>
.w-40.fc.flex-col
  button.b.mb-4.w-full(@click='createGame') +
  ul.w-full(v-if='availableGames.length>0')
    li.b.bg-blue-400.text-center.mb-3(v-for='game in availableGames' @click='joinGame(game.id)') Join to {{game.host}}
  p(v-else) No available games...
  p {{error}}
</template>

<script>
import { ref, get, push, onValue,update } from "firebase/database";
import { db } from "../config";
import user from '../mixins/user'
export default {
  mixins:[user],
  data: () => ({
    games: [],
    error: "",
  }),
  methods: {
    getGames() {
      try{
        onValue(ref(db), (snap) => {
          if (snap.exists()) {
            this.games = snap.val();
          }
        })
      }catch(error){
        this.error=error
      }
    },
    createGame() {
      try{
        let key=push(ref(db), { host: this.user }).key
        this.$router.push('/id/'+key)
      }catch(error){
        this.error=error
      }
    },
    joinGame(id) {
      try{
        get(ref(db,id)).then(snap=>{
          let {host}=snap.val()
          if(host==this.user){
            this.$router.push('/id/'+id)
          }else{
            update(ref(db,id), { host,player: this.user }).then((res) =>
              this.$router.push('/id/'+id)
            );
          }
        }).catch(error=>this.error=error)
      }catch(error){
        this.error=error
      }
    },
  },
  computed:{
    availableGames(){
      return this.games?Object.keys(this.games).filter(k=>!this.games[k].player || !this.games[k].host).map(k=>{
        return {...this.games[k],id:k}
      }):[]
    }
  },
  created() {
    this.getGames();
  },
};
</script>

<style>
</style>
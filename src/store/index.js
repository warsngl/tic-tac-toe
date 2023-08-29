import { createStore } from "vuex";
import { ref, get, remove, update } from "firebase/database";
import { db } from "../config";
const store = createStore({
  state() {
    return {
      user: { name: "", stats: {} },
      lang: "ru",
    };
  },
  mutations: {
    setUser(state, name) {
      state.user.name = name;
    },
    setStats(state, stats) {
      state.user.stats = stats;
    },
  },
  actions: {
    kick({ state }, url) {
      get(ref(db, "/" + url)).then((snap) => {
        let game = snap.val();
        let host = { host: game.host };
        if (game.host == state.user.name) {
          if (game.player) {
            console.log("host->player2");
            update(ref(db, "/" + url), { host: game.player });
            remove(ref(db, "/" + url + "/player"));
          } else {
            remove(ref(db, "/" + url)).then((res) => {
              // this.$router.push('rating')
            });
          }
        } else {
          remove(ref(db, "/" + url + "/player"));
        }
      });
    },
  },
});
export default store;

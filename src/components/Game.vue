<template lang="pug">
span {{winner}}
span
  button.b(@click="refresh" :disabled='!isHost') {{text('again')}}
p {{ text('turn')}} {{turn=='o'?'O':'X' }}
.fc.mt-6
  .rounded.pb-2.leading-3.text-pri(
    class='-ml-10',
    v-if='isHost'
    :class="this.turn == 'o' ? 'bg-sec' : 'bg-error'"
  )
    p.text-center.p-2(
      v-for="i in o",
      :style="{ 'font-size': i * 6 + 8 + 'px' }",
      :class="{'hidden':!i,'text-white':i==oo}",
      @click="pickO(i)"
    ) o
  .flex.w-36.flex-wrap.mx-8
    .border.border-sec.w-12.h-12.fc(
      v-for="i,idx in z",
      @click="set(idx)",
      :style="{ 'font-size': i.v == 0 ? '0px' : i.v * 6 + 8 + 'px' }"
    )
      p {{ i.s }}
  .rounded.pb-2.leading-3.text-pri(
    class='-mr-10',
    v-if='!isHost'
    :class="this.turn =='x' ? 'bg-sec' : 'bg-error'"
  )
    p.text-center.p-2(
      v-for="i in x",
      :style="{ 'font-size': i * 6 + 8 + 'px' }",
      :class="{'hidden':!i,'text-white':i==xx}",
      @click="pickX(i)"
    ) x
p X: {{ x?.filter(x=>x!=0) }}
p O: {{ o?.filter(o=>o!=0) }}
</template>

<script>
import { get, ref, update, remove, onValue } from "firebase/database";
import { db } from "../config";
import user from "../mixins/user";
import text from "../mixins/text";
export default {
  mixins: [user, text],
  data: () => ({
    isHost: false,
    url: "",
    initialX: [1, 1, 3, 3, 6, 6],
    initialO: [1, 1, 3, 3, 6, 6],
    initialZ: [
      { s: ".", v: 0 },
      { s: ".", v: 0 },
      { s: ".", v: 0 },
      { s: ".", v: 0 },
      { s: ".", v: 0 },
      { s: ".", v: 0 },
      { s: ".", v: 0 },
      { s: ".", v: 0 },
      { s: ".", v: 0 },
    ],
    //TODO set any initialO and initialX to change game rule
    xx: 0,
    oo: 0,
    game: {},
  }),
  watch: {},
  computed: {
    winner: {
      get() {
        return this.game?.winner ?? "";
      },
      set(val) {
        update(ref(db, "/" + this.url), { winner: val });
      },
    },
    gameURL() {
      return this.$route.params.game;
    },
    turn: {
      get() {
        return this.game.turn == "o" ? "o" : "x";
      },
      set(val) {
        update(ref(db, "/" + this.url), { turn: val });
      },
    },
    z() {
      return this.game?.z?.map((z) =>
        z.s != "." ? { s: z.s, v: z.v } : { s: [], v: z.v }
      );
    },
    x() {
      return this.game?.x?.map((x) => x);
    },
    o() {
      return this.game?.o?.map((o) => o);
    },
  },
  methods: {
    set(i) {
      this.turn == "o" ? this.setO(i) : this.setX(i);
    },
    setX(i) {
      if (this.z[i].v < this.xx) {
        update(ref(db, "/" + this.url + "/z/" + i), { s: "x", v: this.xx });
        this.checkWin().then(
          (resolve) => {
            this.winner = this.text("winner") + this.turn == "o" ? " O" : " X";
            this.refresh();
          },
          (reject) => {
            this.turn = "o";
            let index = this.x.indexOf(this.xx);
            update(ref(db, "/" + this.url + "/x/"), { [index]: 0 });
            this.xx = 0;
          }
        );
      }
    },
    setO(i) {
      if (this.z[i].v < this.oo) {
        update(ref(db, "/" + this.url + "/z/" + i), { s: "o", v: this.oo });
        this.checkWin().then(
          (resolve) => {
            this.winner = this.text("winner") + this.turn == "o" ? " O" : " X";
            this.refresh();
          },
          (reject) => {
            this.turn = "x";
            let index = this.o.indexOf(this.oo);
            update(ref(db, "/" + this.url + "/o/"), { [index]: 0 });
            this.oo = 0;
          }
        );
      }
    },
    pickX(i) {
      this.turn == "x" && (this.xx = i);
    },
    pickO(i) {
      this.turn == "o" && (this.oo = i);
    },
    refresh() {
      let initialGame = {
        z: this.initialZ,
        x: this.initialX,
        o: this.initialO,
      };
      Math.random() > 0.5
        ? update(ref(db, "/" + this.url), { ...initialGame, turn: "x" })
        : update(ref(db, "/" + this.url), { ...initialGame, turn: "o" });
    },
    checkWin() {
      return new Promise((resolve, reject) => {
        if (this.z[0].s == [] && this.z[4].s == [] && this.z[8].s == [])
          reject();
        if (
          (this.z[0].s == this.z[1].s && this.z[1].s == this.z[2].s) ||
          (this.z[3].s == this.z[4].s && this.z[4].s == this.z[5].s) ||
          (this.z[6].s == this.z[7].s && this.z[7].s == this.z[8].s) ||
          (this.z[0].s == this.z[3].s && this.z[3].s == this.z[6].s) ||
          (this.z[1].s == this.z[4].s && this.z[4].s == this.z[7].s) ||
          (this.z[2].s == this.z[5].s && this.z[5].s == this.z[8].s) ||
          (this.z[0].s == this.z[4].s && this.z[4].s == this.z[8].s) ||
          (this.z[2].s == this.z[4].s && this.z[4].s == this.z[6].s)
        ) {
          resolve();
        } else {
          reject();
        }
      });
    },
  },
  created() {
    this.url = this.$route.params.game;
    get(ref(db, this.url)).then((snap) => {
      let { host } = snap.val();
      this.isHost = host == this.user;
      this.refresh();
      onValue(ref(db, "/" + this.gameURL), (snap) => (this.game = snap.val()));
    });
  },
  beforeUnmount() {
    this.$store.dispatch("kick", this.url);
  },
};
</script>

<style></style>

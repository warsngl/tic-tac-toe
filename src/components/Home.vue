<template lang='pug'>
button.px-4.rounded(@click="refresh") Again
p {{ turn }}
.fc.mt-6.ml-6
  .flex.flex-col.pb-2.px-2.rounded(
    :class="this.oo != -1 ? 'bg-green-600' : 'bg-red-600'"
  )
    .w-6.h-6.fc(
      v-for="i in o",
      :style="{ 'font-size': i * 6 + 8 + 'px' }",
      @click="pickO(i)"
    ) o
  .flex.w-36.flex-wrap.mx-8
    .border.border-black.w-12.h-12.fc(
      v-for="i,idx in z",
      @click="set(idx)",
      :style="{ 'font-size': i.v == 0 ? '0px' : i.v * 6 + 8 + 'px' }"
    )
      p {{ i.s }}
  .flex.flex-col.pb-2.px-2.rounded(
    :class="this.xx != -1 ? 'bg-green-600' : 'bg-red-600'"
  )
    .w-6.h-6.fc(
      v-for="i in x",
      :style="{ 'font-size': i * 6 + 8 + 'px' }",
      @click="pickX(i)"
    ) x
p X: {{ x }}
p O: {{ o }}
p xx: {{xx}}
p oo: {{oo}}
</template>

<script>
export default {
  data: () => ({
    x: [1, 2, 3, 4, 5],
    o: [1, 2, 3, 4, 5],
    z: [
      { s: [], v: 0 },
      { s: [], v: 0 },
      { s: [], v: 0 },
      { s: [], v: 0 },
      { s: [], v: 0 },
      { s: [], v: 0 },
      { s: [], v: 0 },
      { s: [], v: 0 },
      { s: [], v: 0 },
    ],
    xx: -1,
    oo: -1,
  }),
  computed: {
    turn(){
      return this.oo == -1?"Turn X":"Turn O"
    },
  },
  methods: {
    set(i) {
      if (this.xx == -1) {
        this.setO(i);
      } else {
        this.setX(i);
      }
    },
    setX(i) {
      if (this.z[i].v < this.xx) {
        this.z[i] = { s: "x", v: this.xx };
        this.x = this.x.filter((x) => x != this.xx);
        this.check()
        this.xx = -1;
        this.oo = 0;
      }
    },
    setO(i) {
      if (this.z[i].v < this.oo) {
        this.z[i] = { s: "o", v: this.oo };
        this.o = this.o.filter((o) => o != this.oo);
        this.check()
        this.oo = -1;
        this.xx = 0;
      }
    },
    pickX(i) {
      if(this.xx!=-1){
        this.xx = i;
      }
    },
    pickO(i) {
      if(this.oo!=-1){
        this.oo = i;
      }
    },
    refresh() {
      this.x = [1, 2, 3, 4, 5];
      this.o = [1, 2, 3, 4, 5];
      (this.z = [
        { s: [], v: 0 },
        { s: [], v: 0 },
        { s: [], v: 0 },
        { s: [], v: 0 },
        { s: [], v: 0 },
        { s: [], v: 0 },
        { s: [], v: 0 },
        { s: [], v: 0 },
        { s: [], v: 0 },
      ]),
        Math.random() > 0.5
          ? ((this.xx = 0), (this.oo = -1))
          : ((this.oo = 0), (this.xx = -1));
    },
    check(){
      if(this.z[0].s=='.'&&this.z[4].s=='.'&&this.z[8].s=='.') return 
      if((this.z[0].s == this.z[1].s && this.z[1].s == this.z[2].s) ||
      (this.z[3].s == this.z[4].s && this.z[4].s == this.z[5].s) ||
      (this.z[6].s == this.z[7].s && this.z[7].s == this.z[8].s) ||
      (this.z[0].s == this.z[3].s && this.z[3].s == this.z[6].s) ||
      (this.z[1].s == this.z[4].s && this.z[4].s == this.z[7].s) ||
      (this.z[2].s == this.z[7].s && this.z[5].s == this.z[8].s) ||
      (this.z[0].s == this.z[4].s && this.z[4].s == this.z[8].s) ||
      (this.z[2].s == this.z[4].s && this.z[4].s == this.z[6].s)){
        this.refresh()
      }
    }
  },
  created() {
    this.refresh()
  },
};
</script>

<style>
button {
  @apply bg-slate-400 border border-blue-600 shadow-xl;
}
.fc {
  @apply flex justify-center items-center cursor-pointer;
}
</style>
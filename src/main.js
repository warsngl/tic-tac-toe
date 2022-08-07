import { createApp } from 'vue'
import { createRouter,createWebHashHistory } from 'vue-router'

import store from './store'
import App from './App.vue'
import './assets/index.css'
import Game from './components/Game.vue'
import Blank from './components/Blank.vue'
import Rating from './components/Rating.vue'
import Lobby from './components/Lobby.vue'

const routes=[
  {path:'/', component: Blank},
  {path:'/id/:game', component: Game},
  {path:'/rating', component: Rating},
  {path:'/lobby', component: Lobby},

]
const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

createApp(App).use(router).use(store).mount('#app')

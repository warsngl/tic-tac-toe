export default {
  data() {
    return {
      lang: this.$store.state.lang,
      dictionary: {
        startGame: {
          ru: "Начать игру",
          en: "Start Game",
        },
        joinTo: {
          ru: "Присоединится к",
          en: "Join to",
        },
        turn: {
          ru: "Ход",
          en: "Turn",
        },
        winner: {
          ru: "Победитель",
          en: "Winner",
        },
        again: {
          ru: "Новая игра",
          en: "Again",
        },
        noGames: {
          ru: "Нет свободных игр",
          en: "No Games",
        },
        lobby: {
          ru: "Лобби",
          en: "Lobby",
        },
        rating: {
          ru: "Рейтинг",
          en: "Raiting",
        },
      },
    };
  },
  methods: {
    text(ph) {
      return this.dictionary[ph][this.lang];
    },
  },
};

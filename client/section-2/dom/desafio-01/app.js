new Vue({
  el: '#desafio',
  data: {
    nome: 'Wagner',
    idade: 36,
    imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg',
  },
  methods: {
    exibirNumeroRandonicoEntre0e1() {
      return Math.random();
    },
  },
});

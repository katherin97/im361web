import Vue from 'vue/dist/vue.js'

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Chaos!',
    counter: 0
  }
});

window.app = app;

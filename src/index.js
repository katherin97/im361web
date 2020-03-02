import Vue from 'vue/dist/vue.js'
import "./style.css";

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Chaos!',
    currentPage: "home",
    
  }
});

window.app = app;

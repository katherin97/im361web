import Vue from 'vue/dist/vue.js'
import "./style.css";

var app = new Vue({
  el: '#app',
  data: {
    currentPage: "home",
    disasterTypes: [
      "home",
      "tordano",
      "hurricane",
      "earthquake",
      "tsunami",
      "wildfire",
      "volcano",
      "flood",
      "blizzard",
      "drought"
    ],
  }
});

window.app = app;

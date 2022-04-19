import Vue from "vue";
import { gsap } from "gsap";

export default new Vue({
  data() {
    return {
      boxes: null
    };
  },
  methods: {
    registerComponent(name, component) {
      this[name] = component;

      if (this.boxes) {
        this.createAnimation();
      }
    },
    createAnimation() {
      console.log("BOXES", this.boxes.$refs.boxes);

      this.tl = gsap
      .timeline()
      .from(
          ".anime-card",  
          {y: -25, opacity:0, stagger: 0.25},

      );
    }
  }
});

(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{240:function(t,e,o){var content=o(244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(70).default)("109039a0",content,!0,{sourceMap:!1})},243:function(t,e,o){"use strict";o(240)},244:function(t,e,o){var n=o(69)(!1);n.push([t.i,".container[data-v-13e09a94]{width:100%;background-attachment:fixed}.bg[data-v-13e09a94]{z-index:1;height:115vh;width:100%;background:linear-gradient(141deg,rgba(245,223,77,.3),rgba(207,92,120,.3))}.anim-holder[data-v-13e09a94],.bg[data-v-13e09a94]{position:fixed;top:0;left:0}.anim-holder[data-v-13e09a94]{width:100vw;height:100vh;z-index:11}.anim-holder .anim-frame[data-v-13e09a94]{position:relative;width:100%;height:100%;background-color:#00f}.section[data-v-13e09a94]{position:relative;width:100%;height:100vh;z-index:10}.bottom[data-v-13e09a94]{position:absolute;width:100%;padding:1rem 0;left:0;bottom:0}.bottom .bottom-container[data-v-13e09a94]{display:flex;align-items:center;justify-content:center}.bottom .bottom-container .next[data-v-13e09a94]{flex:1 1 auto;margin-bottom:5rem}@media only screen and (max-width:768px){.bottom .bottom-container .next[data-v-13e09a94]{margin-bottom:5rem}}.content-parent[data-v-13e09a94]{display:flex;align-items:center;justify-content:center;height:100%}.content-parent .header .title h1[data-v-13e09a94]{margin-top:.3em;margin-bottom:.3em}.content-parent .header .below-title h2[data-v-13e09a94]{margin-top:.3em;margin-bottom:.3em;font-size:1em}",""]),t.exports=n},254:function(t,e,o){"use strict";o.r(e);var n={layout:"dialogity",mounted:function(){this.animateOnScroll()},beforeDestroy:function(){this.$gsap.killTweensOf(".container"),this.$gsap.killTweensOf(".section")},methods:{animateOnScroll:function(){document.querySelector(".container");var header=document.querySelector("#menu-main"),t=(document.querySelector(".footer"),document.querySelector(".bg")),e=document.querySelector("#hide"),o=document.querySelector(".anim-holder"),n=this.$gsap;this.$gsap.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".section1",start:"top top",end:"bottom top",scrub:!0}}).fromTo(t,{},{duration:1,ease:"none",onUpdate:function(element){if(void 0!==this.ratio&&1!==this.ratio){var e=.3*(1-this.ratio);n.set(t,{background:"linear-gradient(141deg, rgba(245,223,77,"+e+") 0%, rgba(207,92,120,"+e+") 100%)"})}}}),this.$gsap.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".section1",start:"bottom center",end:"bottom top",scrub:!0}}).fromTo(o,{opacity:0},{opacity:1,duration:1,ease:"none"}),this.$gsap.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".section1",start:"top top",end:"bottom top",scrub:!0}}).fromTo(header,{background:"rgba(255, 255, 255, 0.0)"},{duration:1,background:"rgba(255, 255, 255, 1)",ease:"none"}).to(e,{duration:1,opacity:0,ease:"none"},"<"),this.$gsap.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".section3",start:"top bottom",end:"bottom top",scrub:!0}}).to(t,{duration:1,background:"rgba(0,88,155,0.2)",ease:"none"}).to(t,{duration:1,background:"rgba(255,255,255,0)",ease:"none"}),this.$gsap.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".footer",start:"top bottom",end:"bottom bottom",scrub:!0}}).to(t,{duration:1,background:"rgba(245,223,77,0.549918014012026)",ease:"none"}).to(o,{duration:1,opacity:0,ease:"none"})}}},r=(o(243),o(27)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container",attrs:{id:"scrollDist"}},[o("div",{staticClass:"bg"}),t._v(" "),o("div",{attrs:{id:"trigger"}}),t._v(" "),o("div",{staticClass:"section section1"},[o("div",{staticClass:"content-parent"},[o("div",{staticClass:"header max-width"},[o("div",{staticClass:"above-title"}),t._v(" "),o("div",{staticClass:"title font-XXL"},[o("h1",[o("div",[t._v("FRIENDLY LIVE CHAT\n            ")])])]),t._v(" "),o("div",{staticClass:"below-title font-XL"},[o("h2",[t._v("with handy features")])])])]),t._v(" "),o("div",{staticClass:"bottom"},[o("div",{staticClass:"bottom-container max-width"},[o("div",{staticClass:"flex-space"}),t._v(" "),o("div",{staticClass:"next font-hand-L",attrs:{id:"hide"}},[t._v("\n          see features 🕶️👇\n        ")])])])]),t._v(" "),o("div",{staticClass:"section section2"}),t._v(" "),o("div",{staticClass:"section section3"}),t._v(" "),o("div",{staticClass:"section section4"}),t._v(" "),o("div",{staticClass:"anim-holder"},[o("div",{staticClass:"anim-frame"})])])}],!1,null,"13e09a94",null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{238:function(t,e,n){var content=n(242);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("bc5d5d44",content,!0,{sourceMap:!1})},241:function(t,e,n){"use strict";n(238)},242:function(t,e,n){var o=n(69)(!1);o.push([t.i,".container[data-v-1ace1dfc]{width:100%;background:linear-gradient(141deg,rgba(0,160,176,.299918014),rgba(207,92,120,.3027270028));background:red;background-attachment:fixed}.section[data-v-1ace1dfc]{width:100%;height:100vh;z-index:1}",""]),t.exports=o},249:function(t,e,n){"use strict";n.r(e);var o={layout:"dialogity",mounted:function(){this.animateOnScroll()},beforeDestroy:function(){this.$gsap.killTweensOf(".container"),this.$gsap.killTweensOf(".section")},methods:{animateOnScroll:function(){var t=document.querySelector(".container");this.$gsap.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".section1",start:"top top",end:"bottom top",scrub:!0}}).fromTo(t,{background:"linear-gradient(141deg, rgba(0,160,176,0.299918014012026) 0%, rgba(207,92,120,0.3027270027760709) 100%)"},{duration:1,background:"rgba(255, 0, 0, 0.0)",ease:"none"})}}},c=(n(241),n(27)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"scrollDist"}},[n("div",{attrs:{id:"trigger"}}),t._v(" "),n("div",{staticClass:"section section1"},[t._v("\n    Live Chat\n  ")]),t._v(" "),n("div",{staticClass:"section section2"},[t._v("\n    Live Chat 2\n  ")]),t._v(" "),n("div",{staticClass:"section section3"},[t._v("\n    Live Chat 3\n  ")]),t._v(" "),n("div",{staticClass:"section section4"},[t._v("\n    Live Chat 4\n  ")])])}],!1,null,"1ace1dfc",null);e.default=component.exports}}]);
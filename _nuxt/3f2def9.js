(window.webpackJsonp=window.webpackJsonp||[]).push([[12,2,3],{233:function(t,e,r){var content=r(237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(70).default)("72108b1b",content,!0,{sourceMap:!1})},235:function(t,e,r){"use strict";r.r(e);var n={props:["number","title"]},l=(r(236),r(29)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"numbered-paragraph"},[r("div",{staticClass:"title"},[r("div",{staticClass:"number"},[t._v(t._s(t.number)+".")]),t._v(" "),r("div",{staticClass:"title-text"},[t._v(t._s(t.title)+".")])]),t._v(" "),t._t("default")],2)}),[],!1,null,"080f29d8",null);e.default=component.exports},236:function(t,e,r){"use strict";r(233)},237:function(t,e,r){var n=r(69)(!1);n.push([t.i,".numbered-paragraph[data-v-080f29d8]{margin:2rem 2rem 0 0;max-width:60rem}.numbered-paragraph .title[data-v-080f29d8]{font-weight:600}.numbered-paragraph .title .number[data-v-080f29d8],.numbered-paragraph .title .title-text[data-v-080f29d8]{display:inline-block}[dir=ltr] .numbered-paragraph ol[data-v-080f29d8]{margin-left:.5rem}[dir=rtl] .numbered-paragraph ol[data-v-080f29d8]{margin-right:.5rem}.numbered-paragraph ol[data-v-080f29d8]{margin-top:1rem;margin-bottom:1rem;padding-left:1rem}.numbered-paragraph ol li[data-v-080f29d8]{margin-top:.5rem;text-align:justify}.numbered-paragraph .paragraph-head[data-v-080f29d8]{text-decoration:underline;display:block;margin-bottom:.3rem}",""]),t.exports=n},240:function(t,e,r){var content=r(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(70).default)("5aafa4c8",content,!0,{sourceMap:!1})},246:function(t,e,r){t.exports=r.p+"img/close-button.d5b3a63.svg"},247:function(t,e,r){"use strict";r(240)},248:function(t,e,r){var n=r(69)(!1);n.push([t.i,".modal-overlay[data-v-09969515]{z-index:9999;position:fixed;top:0;height:100vh;left:0;right:0;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.8549)}.modal[data-v-09969515]{background-color:#fff;max-height:90vh;width:min(30rem,90%);padding:2rem;border-radius:1rem}.modal[data-v-09969515],.modal form[data-v-09969515]{position:relative}.modal form .field[data-v-09969515]{margin-top:.5rem;width:100%}.modal form .field .label[data-v-09969515]{width:100%;margin-bottom:.2rem}.modal form .field input[data-v-09969515]{width:calc(100% - 8px);line-height:1.5em}.modal .submit[data-v-09969515]{margin-top:2rem;margin-bottom:.5rem;width:100%;position:relative;padding:.5rem;border:1px solid #000;text-align:center;cursor:pointer;background-color:rgba(0,0,0,.7);color:#fff}.modal .submit[data-v-09969515]:hover{background-color:transparent;color:#000}.close[data-v-09969515]{position:absolute;top:1rem;right:1rem;cursor:pointer}.close-img[data-v-09969515]{width:25px}h6[data-v-09969515]{font-weight:500;font-size:28px}h6[data-v-09969515],p[data-v-09969515]{margin:20px 0}p[data-v-09969515]{font-size:16px}",""]),t.exports=n},249:function(t,e,r){"use strict";r.r(e);var n,l=r(8),o=(r(42),{props:["formId"],data:function(){return{isSubmitted:!1,form:{firstname:"",lastname:"",email:"",url:""}}},methods:{handleSubmit:(n=Object(l.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e="default_form",this.formId&&""!==this.formId&&(e=this.formId),r=this.handleSubmitEnd,this.$dialogityFormsSubmit("d09fbd61d20c42de9023c7a8f2b0154e",e,this.form,(function(){r()}));case 5:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),handleSubmitEnd:function(){this.isSubmitted=!0},handleClose:function(){this.isSubmitted=!1,this.$emit("close-modal")}}}),c=o,d=(r(247),r(29)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-overlay"},[n("div",{staticClass:"modal"},[n("div",{staticClass:"close",on:{click:function(e){return t.handleClose()}}},[n("img",{staticClass:"close-img",attrs:{src:r(246),alt:""}})]),t._v(" "),t.isSubmitted?t._e():n("div",[n("h6",[t._v("Register for beta")]),t._v(" "),n("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[n("p",[t._v("\n                  By filling this form you can register for our beta features.\n                  After the registration we will contact you on the email provided.\n              ")]),t._v(" "),n("div",{staticClass:"field"},[n("div",{staticClass:"label"},[t._v("First name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.firstname,expression:"form.firstname"}],attrs:{type:"text",name:"firstname"},domProps:{value:t.form.firstname},on:{input:function(e){e.target.composing||t.$set(t.form,"firstname",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"field"},[n("div",{staticClass:"label"},[t._v("Last name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.lastname,expression:"form.lastname"}],attrs:{type:"text",name:"lastname"},domProps:{value:t.form.lastname},on:{input:function(e){e.target.composing||t.$set(t.form,"lastname",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"field"},[n("div",{staticClass:"label"},[t._v("Email")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"field"},[n("div",{staticClass:"label"},[t._v("Company URL")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.url,expression:"form.url"}],attrs:{type:"text",name:"url"},domProps:{value:t.form.url},on:{input:function(e){e.target.composing||t.$set(t.form,"url",e.target.value)}}})]),t._v(" "),n("input",{staticClass:"submit",attrs:{type:"submit"}})])]),t._v(" "),t.isSubmitted?n("div",{staticClass:"frame"},[n("div",{staticClass:"content"},[n("h6",[t._v("Thank you for contacting us. We will reach out to you in a couple of days.")]),t._v(" "),n("div",{staticClass:"submit",on:{click:function(e){return t.handleClose()}}},[t._v("Close")])])]):t._e()])])}),[],!1,null,"09969515",null);e.default=component.exports},253:function(t,e,r){var content=r(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(70).default)("18ca4ac2",content,!0,{sourceMap:!1})},284:function(t,e,r){"use strict";r(253)},285:function(t,e,r){var n=r(69)(!1);n.push([t.i,'.plans[data-v-235688e7]{display:flex;grid-gap:1rem;gap:1rem}@media only screen and (max-width:1100px){.plans[data-v-235688e7]{flex-direction:column}}.plans .pricingPlans__planCard[data-v-235688e7]{flex:1;background:hsla(0,0%,100%,.2);padding:2.5rem;border:1px solid #000}.plans .pricingPlans__planCard .margin--vertical-c4 .pricingGrid__rowItem a[data-v-235688e7]{text-decoration:none;color:#000}.plans .pricingPlans__planCard .margin--vertical-c4 .pricingGrid__rowItem h2[data-v-235688e7]{font-family:"Gotham-Black","Roboto",sans-serif;font-size:2rem}.plans .pricingPlans__planCard .margin--vertical-c4 .pricingGrid__rowItem .copy[data-v-235688e7]{min-height:2.7em}.plans .pricingPlans__planCard .margin--vertical-c4 .pricingGrid__rowItem .pricingPlans__priceWrapper .formattedPrice[data-v-235688e7]{display:flex;flex-direction:row;align-items:flex-start}.plans .pricingPlans__planCard .margin--vertical-c4 .pricingGrid__rowItem .pricingPlans__priceWrapper .formattedPrice .formattedPrice__price--symbol--left[data-v-235688e7]{font-size:.75rem;margin-top:.2rem;margin-right:.1rem}.plans .pricingPlans__planCard .margin--vertical-c4 .pricingGrid__rowItem .pricingPlans__priceWrapper .formattedPrice .formattedPrice__price--integer[data-v-235688e7]{font-family:"Gotham-Black","Roboto",sans-serif;font-size:2rem}.plans .pricingPlans__planCard .margin--vertical-c4 .pricingGrid__rowItem .pricingPlans__priceWrapper .formattedPrice .formattedPrice__price--fraction[data-v-235688e7]{font-size:.75rem;margin-top:.2rem;margin-left:.1rem}.plans .pricingPlans__planCard .margin--vertical-c4 .pricingGrid__rowItem .pricingPlans__priceWrapper .pricingPlans--compare__perMonth[data-v-235688e7]{font-size:.75rem;margin-left:.75rem}.plans .pricingPlans__planCard .margin--vertical-c4 .pricingGrid__rowItem .pricingPlans__priceWrapper .transparent[data-v-235688e7]{color:transparent}.plans .pricingPlans__planCard .margin--vertical-c4 .pricingGrid__rowItem .cta-button[data-v-235688e7]{margin-top:2rem;margin-bottom:2rem;width:100%;position:relative;padding:.5rem;border:1px solid #000;text-align:center;cursor:pointer;background-color:rgba(0,0,0,.7);color:#fff}.plans .pricingPlans__planCard .margin--vertical-c4 .pricingGrid__rowItem .cta-button[data-v-235688e7]:hover{background-color:transparent;color:#000}.plans .pricingPlans__planCard .margin--vertical-c4 .pricingPlans__featuresRow__list[data-v-235688e7]{list-style:none}.plans .pricingPlans__planCard .margin--vertical-c4 .pricingPlans__featuresRow__list li[data-v-235688e7]:before{content:"✓";margin-left:-1.2rem;margin-right:.4rem}.plans .pricingPlans__planCard .margin--vertical-c4 .pricingPlans__featuresRow__list .feature-list-item[data-v-235688e7]{margin-bottom:.3rem}.plans .pricingPlans__planCard .cta[data-v-235688e7]{color:#000}.plans .pricingPlans__planCard .features[data-v-235688e7]{min-height:11em}@media only screen and (max-width:1100px){.plans .pricingPlans__planCard .features[data-v-235688e7]{min-height:0}}.container[data-v-235688e7]{width:100%;background-attachment:fixed}.bg[data-v-235688e7]{z-index:1;height:115vh;width:100%;background:linear-gradient(141deg,rgba(245,223,77,.55),rgba(207,92,120,.3));position:fixed;top:0;left:0}.section[data-v-235688e7]{position:relative;width:100%;z-index:10}.content-parent[data-v-235688e7]{display:flex;align-items:flex-start;justify-content:center;padding-top:6rem;flex-direction:column}.content-parent .block[data-v-235688e7]{display:flex;flex-direction:row}@media only screen and (max-width:768px){.content-parent .block[data-v-235688e7]{flex-direction:column;align-items:center}}[dir=ltr] .content-parent .block .p[data-v-235688e7]{margin-left:0}[dir=ltr] .content-parent .block .p[data-v-235688e7],[dir=rtl] .content-parent .block .p[data-v-235688e7]{margin-right:0}[dir=rtl] .content-parent .block .p[data-v-235688e7]{margin-left:0}.content-parent .block .p[data-v-235688e7]{display:block;margin-top:1em;margin-bottom:1em}.content-parent .block .s[data-v-235688e7]{display:inline;font-size:1.3em;font-weight:600}.content-parent .block .block-subtitle[data-v-235688e7]{font-family:"Beyond-Infinity";font-size:min(2rem,min(4.5454545455vh,6.6666666667vw))}.content-parent .block .block-title[data-v-235688e7]{font-size:min(4rem,min(5.5555555556vh,7.6923076923vw));font-family:"Gotham-Black","Roboto",sans-serif;margin-bottom:1rem}.content-parent .block .read-more[data-v-235688e7]{cursor:pointer;display:flex;align-content:center}.content-parent .block .read-more .text[data-v-235688e7]{text-decoration:underline;display:inline-block;font-family:"Beyond-Infinity";font-size:min(2rem,min(5.5555555556vh,6.6666666667vw));color:#000}.content-parent .block .read-more .pointer[data-v-235688e7]{display:inline-block;margin-left:.5rem}.content-parent .block .l-image[data-v-235688e7]{position:relative;width:40%;display:flex;align-content:center;justify-content:center}@media only screen and (max-width:768px){.content-parent .block .l-image[data-v-235688e7]{width:60%;padding-bottom:2rem}}.content-parent .block .l-image img[data-v-235688e7]{max-width:100%;height:auto;margin:auto}.content-parent .block .r-text[data-v-235688e7]{width:60%;padding-left:10%}@media only screen and (max-width:768px){.content-parent .block .r-text[data-v-235688e7]{width:80%;padding-left:0}}.content-parent .header .title .title-main[data-v-235688e7]{margin:1rem 0 2rem}.content-parent .header .below-title h2[data-v-235688e7]{margin-top:.3em;margin-bottom:.3em;font-size:1em}',""]),t.exports=n},295:function(t,e,r){"use strict";r.r(e);var n=r(235),l=r(249),o={components:{NumberedParagraph:n.default,FormModal:l.default},layout:"dialogity",data:function(){return{showModal:!1,formId:"default"}},mounted:function(){this.animateOnScroll()},beforeDestroy:function(){this.$gsap.killTweensOf(".container"),this.$gsap.killTweensOf(".section")},methods:{animateOnScroll:function(){document.querySelector(".container"),document.querySelector("#menu-main"),document.querySelector(".footer"),document.querySelector(".bg"),document.querySelector("#hide")},goToRegistration:function(){window.location.href="https://app.dialogity.com/registration"}}},c=(r(284),r(29)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",attrs:{id:"scrollDist"}},[r("div",{staticClass:"bg"}),t._v(" "),r("div",{attrs:{id:"trigger"}}),t._v(" "),r("div",{staticClass:"section section1"},[r("div",{staticClass:"content-parent"},[t._m(0),t._v(" "),r("div",{staticClass:"plans max-width-wide"},[r("div",{staticClass:"pricingPlans__planCard"},[t._m(1),t._v(" "),r("div",{staticClass:"margin--vertical-c4"},[r("div",{staticClass:"pricingGrid__rowItem"},[r("div",{staticClass:"copy-regular margin--bottom-c1 isVisible"}),t._v(" "),t._m(2),t._v(" "),r("div",{staticClass:"cta-button",on:{click:function(e){return t.goToRegistration()}}},[t._v("\n                \n                  Sign Up Free\n                \n              ")])])]),t._v(" "),t._m(3),t._v(" "),r("div",[r("NuxtLink",{staticClass:"cta",attrs:{to:"/live_chat"}},[t._v("\n              About Live Chat\n            ")])],1)]),t._v(" "),r("div",{staticClass:"pricingPlans__planCard"},[t._m(4),t._v(" "),r("div",{staticClass:"margin--vertical-c4"},[r("div",{staticClass:"pricingGrid__rowItem"},[r("div",{staticClass:"copy-regular margin--bottom-c1 isVisible"}),t._v(" "),t._m(5),t._v(" "),r("div",{staticClass:"cta-button",on:{click:function(e){t.formId="Chatbot_registration",t.showModal=!0}}},[t._v("\n                \n                  Register for FREE Beta Test\n\n              ")])])]),t._v(" "),t._m(6),t._v(" "),r("div",[r("NuxtLink",{staticClass:"cta",attrs:{to:"/chat_automation/"}},[t._v("\n              About Chatbots\n            ")])],1)]),t._v(" "),r("div",{staticClass:"pricingPlans__planCard"},[t._m(7),t._v(" "),r("div",{staticClass:"margin--vertical-c4"},[r("div",{staticClass:"pricingGrid__rowItem"},[r("div",{staticClass:"copy-regular margin--bottom-c1 isVisible"}),t._v(" "),t._m(8),t._v(" "),r("div",{staticClass:"cta-button",on:{click:function(e){t.formId="AI_sales_agent_registration",t.showModal=!0}}},[t._v("\n                \n                  Register for Beta Test\n\n              ")])])]),t._v(" "),t._m(9),t._v(" "),r("div",[r("NuxtLink",{staticClass:"cta",attrs:{to:"/ai_sales_assistant/"}},[t._v("\n              About AI Sales Assistant\n            ")])],1)])])])]),t._v(" "),r("FormModal",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],attrs:{formId:this.formId},on:{"close-modal":function(e){t.showModal=!1}}})],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header max-width"},[r("div",{staticClass:"above-title"}),t._v(" "),r("div",{staticClass:"title font-XXL"},[r("div",{staticClass:"title-main"},[t._v("PRICING")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"margin--vertical-c4"},[r("div",{staticClass:"pricingGrid__rowItem"},[r("a",{attrs:{href:"/pricing/premium-details/"}},[r("h2",{staticClass:"h5 pricingPlans__header "},[t._v("Live Chat")]),t._v(" "),r("p",{staticClass:"copy margin--top-c4"},[t._v("\n                  Communicate with your customers for FREE.\n                ")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pricingPlans__priceWrapper"},[r("div",{staticClass:"flex flex--bottom",attrs:{"aria-hidden":"true"}},[r("div",{staticClass:"formattedPrice flex flex--left"},[r("div",{staticClass:"formattedPrice__price--symbol--left"},[t._v("\n                      $\n                    ")]),t._v(" "),r("div",{staticClass:"formattedPrice__price--integer"},[t._v("\n                      0\n                    ")]),t._v(" "),r("div",{staticClass:"formattedPrice__price--fraction"}),t._v(" "),r("div",{staticClass:"formattedPrice__price--symbol--right"}),t._v(" "),r("div",{staticClass:" formattedPrice__disclaimerAsterisk formattedPrice__hide "})]),t._v(" "),r("div",{staticClass:"copy-regular pricingPlans--compare__perMonth"},[t._v("\n                    /month\n                  ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"margin--vertical-c4 features"},[t._v("\n              Everything a small business need for real-time communication:\n              "),r("ul",{staticClass:"pricingPlans__featuresRow__list"},[r("li",{staticClass:"feature-list-item"},[r("span",{staticClass:"tooltip"},[r("span",{staticClass:"tooltip__originalText",attrs:{tabindex:"0"}},[t._v("No limitation in number of customers or agents")])])]),t._v(" "),r("li",{staticClass:"feature-list-item"},[r("span",{staticClass:"tooltip"},[r("span",{staticClass:"tooltip__originalText",attrs:{tabindex:"0"}},[t._v("Customization")])])]),t._v(" "),r("li",{staticClass:"feature-list-item"},[r("span",{staticClass:"tooltip"},[r("span",{staticClass:"tooltip__originalText",attrs:{tabindex:"0"}},[t._v("Gmail integration")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"margin--vertical-c4"},[r("div",{staticClass:"pricingGrid__rowItem"},[r("a",{attrs:{href:"/pricing/premium-details/"}},[r("h2",{staticClass:"h5 pricingPlans__header "},[t._v("Chatbots")]),t._v(" "),r("p",{staticClass:"copy margin--top-c4"},[t._v("\n                  Decrease response time and increase conversion rate by automation.\n                ")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pricingPlans__priceWrapper"},[r("div",{staticClass:"flex flex--bottom",attrs:{"aria-hidden":"true"}},[r("div",{staticClass:"formattedPrice flex flex--left"},[r("div",{staticClass:"formattedPrice__price--symbol--left"},[t._v("\n                      $\n                    ")]),t._v(" "),r("div",{staticClass:"formattedPrice__price--integer"},[t._v("\n                      9\n                    ")]),t._v(" "),r("div",{staticClass:"formattedPrice__price--fraction"},[t._v(".99")]),t._v(" "),r("div",{staticClass:"formattedPrice__price--symbol--right"}),t._v(" "),r("div",{staticClass:" formattedPrice__disclaimerAsterisk formattedPrice__hide "})]),t._v(" "),r("div",{staticClass:"copy-regular pricingPlans--compare__perMonth"},[t._v("\n                    /month\n                  ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"margin--vertical-c4 features"},[t._v("\n              Everything in Live Chat, plus:\n              "),r("ul",{staticClass:"pricingPlans__featuresRow__list"},[r("li",{staticClass:"feature-list-item"},[r("span",{staticClass:"tooltip"},[r("span",{staticClass:"tooltip__originalText",attrs:{tabindex:"0"}},[t._v("Automated conversations")])])]),t._v(" "),r("li",{staticClass:"feature-list-item"},[r("span",{staticClass:"tooltip"},[r("span",{staticClass:"tooltip__originalText",attrs:{tabindex:"0"}},[t._v("Decreased response times")])])]),t._v(" "),r("li",{staticClass:"feature-list-item"},[r("span",{staticClass:"tooltip"},[r("span",{staticClass:"tooltip__originalText",attrs:{tabindex:"0"}},[t._v("Increased conversion rate")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"margin--vertical-c4"},[r("div",{staticClass:"pricingGrid__rowItem"},[r("a",{attrs:{href:"/pricing/premium-details/"}},[r("h2",{staticClass:"h5 pricingPlans__header "},[t._v("AI Sales Assistant")]),t._v(" "),r("p",{staticClass:"copy margin--top-c4"},[t._v("\n                  Extend your team with AI\n                ")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pricingPlans__priceWrapper"},[r("div",{staticClass:"flex flex--bottom",attrs:{"aria-hidden":"true"}},[r("div",{staticClass:"formattedPrice flex flex--left"},[r("div",{staticClass:"formattedPrice__price--symbol--left"}),t._v(" "),r("div",{staticClass:"formattedPrice__price--integer"},[t._v("\n                      Contact us\n                    ")]),t._v(" "),r("div",{staticClass:"formattedPrice__price--fraction"}),t._v(" "),r("div",{staticClass:"formattedPrice__price--symbol--right"}),t._v(" "),r("div",{staticClass:" formattedPrice__disclaimerAsterisk formattedPrice__hide "})]),t._v(" "),r("div",{staticClass:"copy-regular pricingPlans--compare__perMonth transparent"},[t._v("\n                    .\n                  ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"margin--vertical-c4 features"},[t._v("\n              Everything in Chatbots, plus:\n              "),r("ul",{staticClass:"pricingPlans__featuresRow__list"},[r("li",{staticClass:"feature-list-item"},[r("span",{staticClass:"tooltip"},[r("span",{staticClass:"tooltip__originalText",attrs:{tabindex:"0"}},[t._v("Meaningful conversation automated")])])]),t._v(" "),r("li",{staticClass:"feature-list-item"},[r("span",{staticClass:"tooltip"},[r("span",{staticClass:"tooltip__originalText",attrs:{tabindex:"0"}},[t._v("Machine learning based dialog flow building")])])]),t._v(" "),r("li",{staticClass:"feature-list-item"},[r("span",{staticClass:"tooltip"},[r("span",{staticClass:"tooltip__originalText",attrs:{tabindex:"0"}},[t._v("Managing complex conversations automatically")])])])])])}],!1,null,"235688e7",null);e.default=component.exports;installComponents(component,{FormModal:r(249).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[46,24,25],{302:function(t,e,o){var content=o(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(143).default)("2d93d75e",content,!0,{sourceMap:!1})},303:function(t,e,o){"use strict";o.r(e);var n={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)}},mounted:function(){this.setFileURL()}},l=o(56),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"footer"}},[e("div",{staticClass:"footer wf-section"},[e("div",{staticClass:"contain"},[e("div",{staticClass:"footer-holder"},[e("div",{staticClass:"footer-top-holder"},[t._m(0),t._v(" "),e("div",{staticClass:"each-footer-content"},[t._m(1),t._v(" "),e("div",{staticClass:"div-block-46"},[e("div",{staticClass:"footer-link-holder"},[e("nuxt-link",{staticClass:"footer-link",attrs:{to:"/services"}},[t._v("Internet Banking")])],1),t._v(" "),e("div",{staticClass:"footer-link-holder"},[e("nuxt-link",{staticClass:"footer-link",attrs:{to:"/services"}},[t._v("Mobile Banking")])],1)])]),t._v(" "),e("div",{staticClass:"each-footer-content"},[t._m(2),t._v(" "),e("div",{staticClass:"div-block-46"},[e("div",{staticClass:"footer-link-holder"},[e("nuxt-link",{staticClass:"footer-link",attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),e("div",{staticClass:"footer-link-holder"},[e("nuxt-link",{staticClass:"footer-link",attrs:{to:"/contact"}},[t._v("Contact Us")])],1),t._v(" "),e("div",{staticClass:"footer-link-holder"},[e("nuxt-link",{staticClass:"footer-link",attrs:{to:"terms"}},[t._v("Legal")])],1)])]),t._v(" "),t._m(3)]),t._v(" "),e("div",{staticClass:"footer-down-line"}),t._v(" "),e("div",{staticClass:"footer-last-link-holder"},[e("div",{staticClass:"footer-copyright-text-holder"},[e("div",{staticClass:"footer-copyright-text"},[t._v("\n              Zivik Bank © "+t._s((new Date).getFullYear())+" / All Rights\n              Reserved\n            ")])]),t._v(" "),e("div",{staticClass:"footer-bottom-link-holder"},[e("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/about"}},[t._v("About Bank")]),e("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/services"}},[t._v("Services")]),e("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/crdit-cards"}},[t._v("Credit Cards")]),e("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/services"}},[t._v("Careers")]),e("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/blog"}},[t._v("Blog")]),e("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"each-footer-content"},[e("div",{staticClass:"footer-logo-holder"},[e("img",{staticClass:"image-16",attrs:{src:"/images/Dark-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"div-block-46"},[e("div",{staticClass:"footer-link-holder"},[e("a",{staticClass:"footer-link",attrs:{href:"#"}},[t._v("Communities")])]),t._v(" "),e("div",{staticClass:"footer-link-holder"},[e("a",{staticClass:"footer-link",attrs:{href:"#"}},[t._v("Alister Bank Group")])]),t._v(" "),e("div",{staticClass:"footer-link-holder"},[e("a",{staticClass:"footer-link",attrs:{href:"#"}},[t._v("Careers")])]),t._v(" "),e("div",{staticClass:"footer-link-holder"},[e("a",{staticClass:"footer-link",attrs:{href:"#"}},[t._v("Website Disclaimer")])])])])},function(){var t=this._self._c;return t("div",{staticClass:"footer-logo-holder"},[t("h1",{staticClass:"footer-header"},[this._v("Banking with Us")])])},function(){var t=this._self._c;return t("div",{staticClass:"footer-logo-holder"},[t("h1",{staticClass:"footer-header"},[this._v("Customer Service")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"each-footer-content"},[e("div",{staticClass:"footer-logo-holder"},[e("h1",{staticClass:"footer-header"},[t._v("Socials")])]),t._v(" "),e("div",{staticClass:"div-block-46"},[e("div",{staticClass:"footer-link-holder"},[e("a",{staticClass:"footer-link",attrs:{href:"https://twitter.com"}},[t._v("Twitter")])]),t._v(" "),e("div",{staticClass:"footer-link-holder"},[e("a",{staticClass:"footer-link",attrs:{href:"https://instagram.com"}},[t._v("Instagram")])]),t._v(" "),e("div",{staticClass:"footer-link-holder"},[e("a",{staticClass:"footer-link",attrs:{href:"https://facebook.com"}},[t._v("Facebook")])]),t._v(" "),e("div",{staticClass:"footer-link-holder"},[e("a",{staticClass:"footer-link",attrs:{href:"https://youtube.com"}},[t._v("YouTube")])]),t._v(" "),e("div",{staticClass:"footer-link-holder"},[e("a",{staticClass:"footer-link",attrs:{href:"https://pinterest.com"}},[t._v("Pinterest")])])])])}],!1,null,null,null);e.default=component.exports},306:function(t,e,o){"use strict";o.r(e);var n=o(8),l=(o(48),{head:function(){return{link:[{rel:"stylesheet",href:"/css/home.css",type:"text/css"}]}},methods:{logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:case"end":return e.stop()}}),e)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),r=(o(310),o(56)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav-holder"},[e("div",{staticClass:"nav-contains"},[e("div",{staticClass:"top-header"},[e("nuxt-link",{staticClass:"logo-link w-inline-block",attrs:{to:"/"}},[e("img",{staticClass:"image-33",attrs:{src:"/images/Zivik-Logo.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"top-nav-info-holder"},[e("nuxt-link",{staticClass:"nav-link-block last w-inline-block",attrs:{to:"/contact"}},[e("img",{staticClass:"link-icon",attrs:{src:"https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/64062db80c1ec3bec200ef36_send-message-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-block-text"},[t._v("Contact us")])]),t._v(" "),t.isAuthenticated?e("a",{staticClass:"nav-link-block last w-inline-block",attrs:{href:"#"},on:{click:t.logout}},[e("img",{staticClass:"link-icon _4",attrs:{src:"/images/logout-round.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-block-text"},[t._v("Logout")])]):e("nuxt-link",{staticClass:"nav-link-block last w-inline-block",attrs:{to:"login"},on:{click:t.logout}},[e("img",{staticClass:"link-icon _4",attrs:{src:"/images/login.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-block-text"},[t._v("Login")])]),t._v(" "),t.isAuthenticated?e("nuxt-link",{staticClass:"nav-link-block w-inline-block",attrs:{to:"/dashboard"}},[e("img",{staticClass:"link-icon _3",attrs:{src:"https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/6406403f5b16231c4daa13d4_persona-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-block-text"},[t._v("Dashboard")])]):e("nuxt-link",{staticClass:"nav-link-block w-inline-block",attrs:{to:"signup"}},[e("img",{staticClass:"link-icon _3",attrs:{src:"https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/6406403f5b16231c4daa13d4_persona-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-block-text"},[t._v("Sign Up")])])],1)],1)]),t._v(" "),e("div",{staticClass:"nav-hold"},[e("div",{staticClass:"navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"nav-contain"},[e("div",[e("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[e("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/about"}},[t._v("About")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/credit-cards"}},[t._v("Credit Cards")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/services"}},[t._v("Services")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/contact"}},[t._v("Contact")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/news"}},[t._v("Blog")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/faq"}},[t._v("FAQ")])],1),t._v(" "),t._m(0)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"menu-button w-nav-button"},[t("div",{staticClass:"icon w-icon-nav-menu"})])}],!1,null,null,null);e.default=component.exports},310:function(t,e,o){"use strict";o(302)},311:function(t,e,o){var n=o(142)((function(i){return i[1]}));n.push([t.i,".logo-link.w-inline-block{display:flex;justify-content:center}img.image-33{height:70px;margin:0 auto;width:auto}",""]),n.locals={},t.exports=n},437:function(t,e,o){"use strict";o.r(e);var n=o(8),l=(o(48),{data:function(){return{company:"",faqs:[]}},methods:{loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/scripts/home.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")},getCompany:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return o=e.sent,e.next=6,o.data.data[0];case 6:t.company=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},getQuestion:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/faq");case 3:return o=e.sent,e.next=6,o.data.data;case 6:t.faqs=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mounted:function(){this.loadScript(),this.getQuestion(),this.getCompany()},components:{HomeFooter:o(303).default}}),r=o(56),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"faq"},[e("home-header"),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"faq-content wf-section"},[e("div",{staticClass:"contain"},[e("div",{staticClass:"faq-content-holder"},[e("div",{staticClass:"faq-holder"},t._l(t.faqs,(function(o){return e("div",{key:o._id,staticClass:"each-faq-holder active"},[e("div",{staticClass:"faq-heading-holder"},[e("h1",{staticClass:"faq-header active"},[t._v("\n                "+t._s(o.question)+"\n              ")]),t._v(" "),t._m(1,!0)]),t._v(" "),e("div",{staticClass:"faq-text-holder"},[e("div",{staticClass:"faq-texts"},[t._v("\n                "+t._s(o.answer)+"\n              ")])])])})),0),t._v(" "),e("div",{staticClass:"faq-background-img-holder"},[e("div",{staticClass:"faq-background-img"}),t._v(" "),e("div",{staticClass:"faq-number-holder"},[e("img",{staticClass:"image-43",attrs:{src:"https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/64140af5f4c32a16eaab6889_call-us-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),t.company.media?e("div",[e("h5",{staticClass:"heading-7"},[t._v("CALL ANYTIME")]),t._v(" "),t.company.media[2]?e("div",{staticClass:"text-block-6"},[t._v("\n                "+t._s(t.company.media[2].text)),e("br")]):t._e()]):t._e()])])])])]),t._v(" "),e("home-footer")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"faq-hero wf-section"},[e("div",{staticClass:"contain"},[e("div",{staticClass:"hero-holder"},[e("div",{staticClass:"div-block-53"},[e("h1",{staticClass:"headings"},[t._v("Faq")])]),t._v(" "),e("div",[e("div",{staticClass:"sub-hero-texts"},[e("a",{staticClass:"link",attrs:{href:"#"}},[t._v("Home")]),t._v(" / Faq\n          ")])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"faq-icon-holder"},[t("img",{staticClass:"image-40",attrs:{src:"https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/641404889d689f40f60e0914_plus-line-icon%202.svg",loading:"lazy",alt:""}}),t("img",{staticClass:"image-41",attrs:{src:"https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/641404bf0ee69a3ca8ab857e_minus-line-icon%201.svg",loading:"lazy",alt:""}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeHeader:o(306).default,HomeFooter:o(303).default})}}]);
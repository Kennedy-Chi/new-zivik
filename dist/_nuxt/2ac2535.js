(window.webpackJsonp=window.webpackJsonp||[]).push([[43,24,25],{302:function(t,n,e){var content=e(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(143).default)("2d93d75e",content,!0,{sourceMap:!1})},303:function(t,n,e){"use strict";e.r(n);var o={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)}},mounted:function(){this.setFileURL()}},l=e(56),component=Object(l.a)(o,(function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"footer"}},[n("div",{staticClass:"footer wf-section"},[n("div",{staticClass:"contain"},[n("div",{staticClass:"footer-holder"},[n("div",{staticClass:"footer-top-holder"},[t._m(0),t._v(" "),n("div",{staticClass:"each-footer-content"},[t._m(1),t._v(" "),n("div",{staticClass:"div-block-46"},[n("div",{staticClass:"footer-link-holder"},[n("nuxt-link",{staticClass:"footer-link",attrs:{to:"/services"}},[t._v("Internet Banking")])],1),t._v(" "),n("div",{staticClass:"footer-link-holder"},[n("nuxt-link",{staticClass:"footer-link",attrs:{to:"/services"}},[t._v("Mobile Banking")])],1)])]),t._v(" "),n("div",{staticClass:"each-footer-content"},[t._m(2),t._v(" "),n("div",{staticClass:"div-block-46"},[n("div",{staticClass:"footer-link-holder"},[n("nuxt-link",{staticClass:"footer-link",attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),n("div",{staticClass:"footer-link-holder"},[n("nuxt-link",{staticClass:"footer-link",attrs:{to:"/contact"}},[t._v("Contact Us")])],1),t._v(" "),n("div",{staticClass:"footer-link-holder"},[n("nuxt-link",{staticClass:"footer-link",attrs:{to:"terms"}},[t._v("Legal")])],1)])]),t._v(" "),t._m(3)]),t._v(" "),n("div",{staticClass:"footer-down-line"}),t._v(" "),n("div",{staticClass:"footer-last-link-holder"},[n("div",{staticClass:"footer-copyright-text-holder"},[n("div",{staticClass:"footer-copyright-text"},[t._v("\n              Zivik Bank © "+t._s((new Date).getFullYear())+" / All Rights\n              Reserved\n            ")])]),t._v(" "),n("div",{staticClass:"footer-bottom-link-holder"},[n("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/about"}},[t._v("About Bank")]),n("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/services"}},[t._v("Services")]),n("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/crdit-cards"}},[t._v("Credit Cards")]),n("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/services"}},[t._v("Careers")]),n("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/blog"}},[t._v("Blog")]),n("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])])])}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"each-footer-content"},[n("div",{staticClass:"footer-logo-holder"},[n("img",{staticClass:"image-16",attrs:{src:"/images/Dark-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),n("div",{staticClass:"div-block-46"},[n("div",{staticClass:"footer-link-holder"},[n("a",{staticClass:"footer-link",attrs:{href:"#"}},[t._v("Communities")])]),t._v(" "),n("div",{staticClass:"footer-link-holder"},[n("a",{staticClass:"footer-link",attrs:{href:"#"}},[t._v("Alister Bank Group")])]),t._v(" "),n("div",{staticClass:"footer-link-holder"},[n("a",{staticClass:"footer-link",attrs:{href:"#"}},[t._v("Careers")])]),t._v(" "),n("div",{staticClass:"footer-link-holder"},[n("a",{staticClass:"footer-link",attrs:{href:"#"}},[t._v("Website Disclaimer")])])])])},function(){var t=this._self._c;return t("div",{staticClass:"footer-logo-holder"},[t("h1",{staticClass:"footer-header"},[this._v("Banking with Us")])])},function(){var t=this._self._c;return t("div",{staticClass:"footer-logo-holder"},[t("h1",{staticClass:"footer-header"},[this._v("Customer Service")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"each-footer-content"},[n("div",{staticClass:"footer-logo-holder"},[n("h1",{staticClass:"footer-header"},[t._v("Socials")])]),t._v(" "),n("div",{staticClass:"div-block-46"},[n("div",{staticClass:"footer-link-holder"},[n("a",{staticClass:"footer-link",attrs:{href:"https://twitter.com"}},[t._v("Twitter")])]),t._v(" "),n("div",{staticClass:"footer-link-holder"},[n("a",{staticClass:"footer-link",attrs:{href:"https://instagram.com"}},[t._v("Instagram")])]),t._v(" "),n("div",{staticClass:"footer-link-holder"},[n("a",{staticClass:"footer-link",attrs:{href:"https://facebook.com"}},[t._v("Facebook")])]),t._v(" "),n("div",{staticClass:"footer-link-holder"},[n("a",{staticClass:"footer-link",attrs:{href:"https://youtube.com"}},[t._v("YouTube")])]),t._v(" "),n("div",{staticClass:"footer-link-holder"},[n("a",{staticClass:"footer-link",attrs:{href:"https://pinterest.com"}},[t._v("Pinterest")])])])])}],!1,null,null,null);n.default=component.exports},306:function(t,n,e){"use strict";e.r(n);var o=e(8),l=(e(48),{head:function(){return{link:[{rel:"stylesheet",href:"/css/home.css",type:"text/css"}]}},methods:{logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$auth.logout();case 2:case"end":return n.stop()}}),n)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),r=(e(310),e(56)),component=Object(r.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"nav-holder"},[n("div",{staticClass:"nav-contains"},[n("div",{staticClass:"top-header"},[n("nuxt-link",{staticClass:"logo-link w-inline-block",attrs:{to:"/"}},[n("img",{staticClass:"image-33",attrs:{src:"/images/Zivik-Logo.svg",loading:"lazy",alt:""}})]),t._v(" "),n("div",{staticClass:"top-nav-info-holder"},[n("nuxt-link",{staticClass:"nav-link-block last w-inline-block",attrs:{to:"/contact"}},[n("img",{staticClass:"link-icon",attrs:{src:"https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/64062db80c1ec3bec200ef36_send-message-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-block-text"},[t._v("Contact us")])]),t._v(" "),t.isAuthenticated?n("a",{staticClass:"nav-link-block last w-inline-block",attrs:{href:"#"},on:{click:t.logout}},[n("img",{staticClass:"link-icon _4",attrs:{src:"/images/logout-round.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-block-text"},[t._v("Logout")])]):n("nuxt-link",{staticClass:"nav-link-block last w-inline-block",attrs:{to:"login"},on:{click:t.logout}},[n("img",{staticClass:"link-icon _4",attrs:{src:"/images/login.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-block-text"},[t._v("Login")])]),t._v(" "),t.isAuthenticated?n("nuxt-link",{staticClass:"nav-link-block w-inline-block",attrs:{to:"/dashboard"}},[n("img",{staticClass:"link-icon _3",attrs:{src:"https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/6406403f5b16231c4daa13d4_persona-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-block-text"},[t._v("Dashboard")])]):n("nuxt-link",{staticClass:"nav-link-block w-inline-block",attrs:{to:"signup"}},[n("img",{staticClass:"link-icon _3",attrs:{src:"https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/6406403f5b16231c4daa13d4_persona-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-block-text"},[t._v("Sign Up")])])],1)],1)]),t._v(" "),n("div",{staticClass:"nav-hold"},[n("div",{staticClass:"navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[n("div",{staticClass:"nav-contain"},[n("div",[n("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[n("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/about"}},[t._v("About")]),t._v(" "),n("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/credit-cards"}},[t._v("Credit Cards")]),t._v(" "),n("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/services"}},[t._v("Services")]),t._v(" "),n("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/contact"}},[t._v("Contact")]),t._v(" "),n("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/news"}},[t._v("Blog")]),t._v(" "),n("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/faq"}},[t._v("FAQ")])],1),t._v(" "),t._m(0)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"menu-button w-nav-button"},[t("div",{staticClass:"icon w-icon-nav-menu"})])}],!1,null,null,null);n.default=component.exports},310:function(t,n,e){"use strict";e(302)},311:function(t,n,e){var o=e(142)((function(i){return i[1]}));o.push([t.i,".logo-link.w-inline-block{display:flex;justify-content:center}img.image-33{height:70px;margin:0 auto;width:auto}",""]),o.locals={},t.exports=o},434:function(t,n,e){"use strict";e.r(n);e(57);var o=e(8),l=(e(48),{data:function(){return{banner:""}},methods:{loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/scripts/home.js",script.async=!0,script.id="script";var n=document.querySelector("#footer");n?n.appendChild(script):console.error("Could not find app node to append script element")},getBanner:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$axios.get("/banner/?bannerCategory=Banking");case 3:e=n.sent,t.banner=e.data.data[0],t.loadScript(),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}},mounted:function(){this.getBanner()},computed:{FILE_URL:function(){return this.$store.state.fileURL}},components:{HomeFooter:e(303).default}}),r=e(56),component=Object(r.a)(l,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"credit-cards-pages"},[n("home-header"),t._v(" "),n("div",{staticClass:"credit-cards-hero wf-section",style:{backgroundImage:"url(".concat(t.FILE_URL,"/").concat(t.banner.bannerImage,")")}},[t._m(0)]),t._v(" "),n("div",{staticClass:"credit-cards-content wf-section"},[n("div",{staticClass:"contain"},[n("div",{staticClass:"visa-holder"},[n("div",{staticClass:"card-switch"},[t._m(1),t._v(" "),n("div",{staticClass:"card-holder-write-up"},[t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("nuxt-link",{staticClass:"red-button w-button",attrs:{to:"login"}},[t._v("Order Now")])],1)])])])]),t._v(" "),n("div",{staticClass:"credit-cards-content-2 wf-section"},[n("div",{staticClass:"contain"},[n("div",{staticClass:"div-block-62"},[n("div",{staticClass:"content-holder"},[n("div",{staticClass:"background-write"},[t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),n("nuxt-link",{staticClass:"red-button w-button",attrs:{to:"login"}},[t._v("Order Now")])],1),t._v(" "),n("div",{staticClass:"background"})])])])]),t._v(" "),n("div",{staticClass:"credit-cards-content-3 wf-section"},[n("div",{staticClass:"contain"},[n("div",{staticClass:"visa-holder"},[n("div",{staticClass:"card-switch"},[t._m(8),t._v(" "),n("div",{staticClass:"card-holder-write-up"},[t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),n("nuxt-link",{staticClass:"red-button w-button",attrs:{to:"deposit"}},[t._v("Order Now")])],1)])])])]),t._v(" "),n("div",{staticClass:"credit-cards-content-4 wf-section"},[n("div",{staticClass:"contain"},[n("div",{staticClass:"div-block-152"},[n("div",{staticClass:"content-holder"},[n("div",{staticClass:"background-write"},[t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),n("div",{staticClass:"div-block-64"},[n("div",[n("nuxt-link",{staticClass:"red-button w-button",attrs:{to:"deposit"}},[t._v("Deposit Now")])],1),t._v(" "),n("nuxt-link",{staticClass:"black-button w-button",attrs:{to:"about"}},[t._v("Learn more")])],1)]),t._v(" "),n("div",{staticClass:"block-img"})])])])]),t._v(" "),n("home-footer")],1)}),[function(){var t=this,n=t._self._c;return n("div",{staticClass:"contain"},[n("div",{staticClass:"hero-holder"},[n("div",{staticClass:"div-block-53"},[n("h1",{staticClass:"headings"},[t._v("Credit Cards")])]),t._v(" "),n("div",[n("div",{staticClass:"sub-hero-texts"},[n("a",{staticClass:"link",attrs:{href:"#"}},[t._v("Home")]),t._v(" / Credit Cards\n          ")])])])])},function(){var t=this._self._c;return t("div",{staticClass:"card-holder"},[t("img",{staticClass:"image-17",attrs:{src:"/images/zivik-blue-card.png",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"texts-header-holder-2"},[t("div",{staticClass:"texts-header"},[this._v("PREMIUM")])])},function(){var t=this._self._c;return t("div",{staticClass:"top-heading-holder-3"},[t("h1",{staticClass:"top-heading"},[this._v("Visa and MasterCard Gold Cards")])])},function(){var t=this._self._c;return t("div",{staticClass:"text-style-holder-2"},[t("div",{staticClass:"text-style"},[this._v("\n                Account currency: USD, EURDiscounts and privileges from Visa\n                and MasterCard payment systemsIssue of additional bank\n                cardsCard issue within a payroll card programme\n              ")])])},function(){var t=this._self._c;return t("div",{staticClass:"texts-header-holder-2"},[t("div",{staticClass:"texts-header"},[this._v("PREMIUM")])])},function(){var t=this._self._c;return t("div",{staticClass:"top-heading-holder-3"},[t("h1",{staticClass:"top-heading"},[this._v("Join To Enjoy")])])},function(){var t=this._self._c;return t("div",{staticClass:"text-style-holder-2"},[t("div",{staticClass:"text-style"},[this._v("\n                Join the Zivik Bank community and simplify your banking.\n                Discover quick, simple and convenient way to take command of\n                your bank account, on your mobile phone.\n              ")])])},function(){var t=this._self._c;return t("div",{staticClass:"card-holder"},[t("img",{staticClass:"image-17",attrs:{src:"/images/zivik-blue-card.png",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"texts-header-holder-2"},[t("div",{staticClass:"texts-header"},[this._v("PREMIUM")])])},function(){var t=this._self._c;return t("div",{staticClass:"top-heading-holder-3"},[t("h1",{staticClass:"top-heading"},[this._v("\n                Visa Classic and MasterCard Standard Cards\n              ")])])},function(){var t=this._self._c;return t("div",{staticClass:"text-style-holder-2"},[t("div",{staticClass:"text-style"},[this._v("\n                Account currency: USD, EURDiscounts and privileges from Visa\n                and MasterCard payment systemsIssue of additional bank\n                cardsCard issue within a payroll card programme\n              ")])])},function(){var t=this._self._c;return t("div",{staticClass:"texts-header-holder-2"},[t("div",{staticClass:"texts-header"},[this._v("PREMIUM")])])},function(){var t=this._self._c;return t("div",{staticClass:"top-heading-holder-3"},[t("h1",{staticClass:"top-heading"},[this._v("No More Worries")])])},function(){var t=this._self._c;return t("div",{staticClass:"text-style-holder-2"},[t("div",{staticClass:"text-style"},[this._v("\n                Join the Zivik Bank community and simplify transactions\n                internationally. Discover quick, simple and convenient way to\n                take command of your bank account, on your mobile phone.\n              ")])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{HomeHeader:e(306).default,HomeFooter:e(303).default})}}]);
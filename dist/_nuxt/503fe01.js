(window.webpackJsonp=window.webpackJsonp||[]).push([[52,17,24,25],{302:function(t,e,l){var content=l(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(143).default)("2d93d75e",content,!0,{sourceMap:!1})},303:function(t,e,l){"use strict";l.r(e);var o={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)}},mounted:function(){this.setFileURL()}},n=l(56),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"footer"}},[e("div",{staticClass:"footer wf-section"},[e("div",{staticClass:"contain"},[e("div",{staticClass:"footer-holder"},[e("div",{staticClass:"footer-top-holder"},[t._m(0),t._v(" "),e("div",{staticClass:"each-footer-content"},[t._m(1),t._v(" "),e("div",{staticClass:"div-block-46"},[e("div",{staticClass:"footer-link-holder"},[e("nuxt-link",{staticClass:"footer-link",attrs:{to:"/services"}},[t._v("Internet Banking")])],1),t._v(" "),e("div",{staticClass:"footer-link-holder"},[e("nuxt-link",{staticClass:"footer-link",attrs:{to:"/services"}},[t._v("Mobile Banking")])],1)])]),t._v(" "),e("div",{staticClass:"each-footer-content"},[t._m(2),t._v(" "),e("div",{staticClass:"div-block-46"},[e("div",{staticClass:"footer-link-holder"},[e("nuxt-link",{staticClass:"footer-link",attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),e("div",{staticClass:"footer-link-holder"},[e("nuxt-link",{staticClass:"footer-link",attrs:{to:"/contact"}},[t._v("Contact Us")])],1),t._v(" "),e("div",{staticClass:"footer-link-holder"},[e("nuxt-link",{staticClass:"footer-link",attrs:{to:"terms"}},[t._v("Legal")])],1)])]),t._v(" "),t._m(3)]),t._v(" "),e("div",{staticClass:"footer-down-line"}),t._v(" "),e("div",{staticClass:"footer-last-link-holder"},[e("div",{staticClass:"footer-copyright-text-holder"},[e("div",{staticClass:"footer-copyright-text"},[t._v("\n              Zivik Bank © "+t._s((new Date).getFullYear())+" / All Rights\n              Reserved\n            ")])]),t._v(" "),e("div",{staticClass:"footer-bottom-link-holder"},[e("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/about"}},[t._v("About Bank")]),e("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/services"}},[t._v("Services")]),e("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/crdit-cards"}},[t._v("Credit Cards")]),e("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/services"}},[t._v("Careers")]),e("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/blog"}},[t._v("Blog")]),e("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"each-footer-content"},[e("div",{staticClass:"footer-logo-holder"},[e("img",{staticClass:"image-16",attrs:{src:"/images/Dark-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"div-block-46"},[e("div",{staticClass:"footer-link-holder"},[e("a",{staticClass:"footer-link",attrs:{href:"#"}},[t._v("Communities")])]),t._v(" "),e("div",{staticClass:"footer-link-holder"},[e("a",{staticClass:"footer-link",attrs:{href:"#"}},[t._v("Alister Bank Group")])]),t._v(" "),e("div",{staticClass:"footer-link-holder"},[e("a",{staticClass:"footer-link",attrs:{href:"#"}},[t._v("Careers")])]),t._v(" "),e("div",{staticClass:"footer-link-holder"},[e("a",{staticClass:"footer-link",attrs:{href:"#"}},[t._v("Website Disclaimer")])])])])},function(){var t=this._self._c;return t("div",{staticClass:"footer-logo-holder"},[t("h1",{staticClass:"footer-header"},[this._v("Banking with Us")])])},function(){var t=this._self._c;return t("div",{staticClass:"footer-logo-holder"},[t("h1",{staticClass:"footer-header"},[this._v("Customer Service")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"each-footer-content"},[e("div",{staticClass:"footer-logo-holder"},[e("h1",{staticClass:"footer-header"},[t._v("Socials")])]),t._v(" "),e("div",{staticClass:"div-block-46"},[e("div",{staticClass:"footer-link-holder"},[e("a",{staticClass:"footer-link",attrs:{href:"https://twitter.com"}},[t._v("Twitter")])]),t._v(" "),e("div",{staticClass:"footer-link-holder"},[e("a",{staticClass:"footer-link",attrs:{href:"https://instagram.com"}},[t._v("Instagram")])]),t._v(" "),e("div",{staticClass:"footer-link-holder"},[e("a",{staticClass:"footer-link",attrs:{href:"https://facebook.com"}},[t._v("Facebook")])]),t._v(" "),e("div",{staticClass:"footer-link-holder"},[e("a",{staticClass:"footer-link",attrs:{href:"https://youtube.com"}},[t._v("YouTube")])]),t._v(" "),e("div",{staticClass:"footer-link-holder"},[e("a",{staticClass:"footer-link",attrs:{href:"https://pinterest.com"}},[t._v("Pinterest")])])])])}],!1,null,null,null);e.default=component.exports},306:function(t,e,l){"use strict";l.r(e);var o=l(8),n=(l(48),{head:function(){return{link:[{rel:"stylesheet",href:"/css/home.css",type:"text/css"}]}},methods:{logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:case"end":return e.stop()}}),e)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),r=(l(310),l(56)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav-holder"},[e("div",{staticClass:"nav-contains"},[e("div",{staticClass:"top-header"},[e("nuxt-link",{staticClass:"logo-link w-inline-block",attrs:{to:"/"}},[e("img",{staticClass:"image-33",attrs:{src:"/images/Zivik-Logo.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"top-nav-info-holder"},[e("nuxt-link",{staticClass:"nav-link-block last w-inline-block",attrs:{to:"/contact"}},[e("img",{staticClass:"link-icon",attrs:{src:"https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/64062db80c1ec3bec200ef36_send-message-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-block-text"},[t._v("Contact us")])]),t._v(" "),t.isAuthenticated?e("a",{staticClass:"nav-link-block last w-inline-block",attrs:{href:"#"},on:{click:t.logout}},[e("img",{staticClass:"link-icon _4",attrs:{src:"/images/logout-round.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-block-text"},[t._v("Logout")])]):e("nuxt-link",{staticClass:"nav-link-block last w-inline-block",attrs:{to:"login"},on:{click:t.logout}},[e("img",{staticClass:"link-icon _4",attrs:{src:"/images/login.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-block-text"},[t._v("Login")])]),t._v(" "),t.isAuthenticated?e("nuxt-link",{staticClass:"nav-link-block w-inline-block",attrs:{to:"/dashboard"}},[e("img",{staticClass:"link-icon _3",attrs:{src:"https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/6406403f5b16231c4daa13d4_persona-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-block-text"},[t._v("Dashboard")])]):e("nuxt-link",{staticClass:"nav-link-block w-inline-block",attrs:{to:"signup"}},[e("img",{staticClass:"link-icon _3",attrs:{src:"https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/6406403f5b16231c4daa13d4_persona-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-block-text"},[t._v("Sign Up")])])],1)],1)]),t._v(" "),e("div",{staticClass:"nav-hold"},[e("div",{staticClass:"navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"nav-contain"},[e("div",[e("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[e("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/about"}},[t._v("About")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/credit-cards"}},[t._v("Credit Cards")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/services"}},[t._v("Services")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/contact"}},[t._v("Contact")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/news"}},[t._v("Blog")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/faq"}},[t._v("FAQ")])],1),t._v(" "),t._m(0)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"menu-button w-nav-button"},[t("div",{staticClass:"icon w-icon-nav-menu"})])}],!1,null,null,null);e.default=component.exports},310:function(t,e,l){"use strict";l(302)},311:function(t,e,l){var o=l(142)((function(i){return i[1]}));o.push([t.i,".logo-link.w-inline-block{display:flex;justify-content:center}img.image-33{height:70px;margin:0 auto;width:auto}",""]),o.locals={},t.exports=o},345:function(t,e,l){"use strict";l.r(e);var o=l(8),n=(l(48),{data:function(){return{company:""}},methods:{getCompany:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return l=e.sent,e.next=6,l.data.data[0];case 6:t.company=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mounted:function(){this.getCompany()}}),r=l(56),component=Object(r.a)(n,(function(){var t,e,l=this,o=l._self._c;return o("div",{staticClass:"second-blog-content-holder"},[o("div",[l._m(0),l._v(" "),l._m(1),l._v(" "),l._m(2),l._v(" "),l._m(3),l._v(" "),o("div",{staticClass:"fourth-blog-side-link-holder"},[l._m(4),l._v(" "),o("div",{staticClass:"div-bottom-border-holder"},[o("div",{staticClass:"div-bottom-border"},[o("div",{staticClass:"texts-headers"},[l._v("Address:")]),l._v(" "),l.company.media?o("div",{staticClass:"texts-headers"},[l._v("\n            "+l._s(null===(t=l.company.media[0])||void 0===t?void 0:t.text)+"\n          ")]):l._e()]),l._v(" "),o("div",{staticClass:"div-bottom-border"},[o("div",{staticClass:"texts-headers"},[l._v("Email:")]),l._v(" "),o("a",{staticClass:"email-link",attrs:{href:"#"}},[l._v(l._s(l.company.systemEmail))])]),l._v(" "),o("div",{staticClass:"div-bottom-border"},[o("div",{staticClass:"texts-headers"},[l._v("Phone:")]),l._v(" "),l.company.media?o("div",{staticClass:"texts-headers"},[l._v("\n            "+l._s(null===(e=l.company.media[2])||void 0===e?void 0:e.text)+"\n          ")]):l._e()])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"form-space-bar-holder w-form"},[t("form",{attrs:{id:"email-form",name:"email-form","data-name":"Email Form",method:"get"}},[t("div",{staticClass:"space-bar-holder"},[t("input",{staticClass:"space-bar w-input",attrs:{type:"text",maxlength:"256",name:"name","data-name":"Name",placeholder:"enter Keywords",id:"name"}}),t("img",{staticClass:"image-31",attrs:{src:"https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/64063f49ee6ec7493c7588d5_search-line-icon%20(1)%202.svg",loading:"lazy",alt:""}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"each-side-link-holder"},[e("h1",{staticClass:"blog-link-header"},[t._v("Categories")]),t._v(" "),e("div",[e("div",{staticClass:"div-block-115"},[e("a",{staticClass:"link-3",attrs:{href:"#"}},[t._v("Advice")])]),t._v(" "),e("div",{staticClass:"div-block-115"},[e("a",{staticClass:"link-3",attrs:{href:"#"}},[t._v("Zivik Bank")])]),t._v(" "),e("div",{staticClass:"div-block-115"},[e("a",{staticClass:"link-3",attrs:{href:"#"}},[t._v("Credit Cards")])]),t._v(" "),e("div",{staticClass:"div-block-115"},[e("a",{staticClass:"link-3",attrs:{href:"#"}},[t._v("Financial Fraud")])]),t._v(" "),e("div",{staticClass:"div-block-115"},[e("a",{staticClass:"link-3",attrs:{href:"#"}},[t._v("Making Money")])]),t._v(" "),e("div",{staticClass:"div-block-115"},[e("a",{staticClass:"link-3",attrs:{href:"#"}},[t._v("Personal Financial")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"second-blog-side-link-holder"},[e("div",{staticClass:"blog-link-header-holder"},[e("h1",{staticClass:"blog-link-header"},[t._v("Blog")])]),t._v(" "),e("div",{staticClass:"blog-post-link-holder"},[e("div",{staticClass:"comment-holder"},[e("a",{staticClass:"comment red",attrs:{href:"#"}},[t._v("Latest")])]),t._v(" "),e("div",{staticClass:"comment-holder"},[e("a",{staticClass:"comment",attrs:{href:"#"}},[t._v("- Popular")])]),t._v(" "),e("a",{staticClass:"comment",attrs:{href:"#"}},[t._v("- Comment")])]),t._v(" "),e("div",{staticClass:"blog-post-holder"},[e("div",{staticClass:"each-blog-post"},[e("div",{staticClass:"blog-post-img-holder"},[e("img",{staticClass:"image-32",attrs:{src:"https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/6408df24e4cf6a2ab0fb0f3a_8-150x150.jpg",loading:"lazy",alt:""}})]),t._v(" "),e("div",[e("div",{staticClass:"blog-post-text-link-holder"},[e("a",{staticClass:"blog-post-text-link",attrs:{href:"#"}},[t._v("Zivik Bank Receives Top Workplace Award")])]),t._v(" "),e("div",{staticClass:"blog-post-link-text"},[t._v("August 15, 2017")])])]),t._v(" "),e("div",{staticClass:"each-blog-post"},[e("div",{staticClass:"blog-post-img-holder"},[e("img",{staticClass:"image-32",attrs:{src:"https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/6408e6218291c60570f4ecc9_6-150x150.jpg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"blog-post-text"},[e("div",{staticClass:"blog-post-text-link-holder"},[e("a",{staticClass:"blog-post-text-link",attrs:{href:"#"}},[t._v("Zivik Bank Announce Officer promotion")])]),t._v(" "),e("div",{staticClass:"blog-post-link-text"},[t._v("August 15, 2017")])])]),t._v(" "),e("div",{staticClass:"each-blog-post"},[e("div",{staticClass:"blog-post-img-holder"},[e("img",{staticClass:"image-32",attrs:{src:"https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/6408e6a1e4cf6a832afb8f53_7-75x75.jpg",loading:"lazy",alt:""}})]),t._v(" "),e("div",[e("div",{staticClass:"blog-post-text-link-holder"},[e("a",{staticClass:"blog-post-text-link",attrs:{href:"#"}},[t._v("Zivik Bank Receives Top Workplace Award")])]),t._v(" "),e("div",{staticClass:"blog-post-link-text"},[t._v("August 15, 2017")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"third-blog-side-link-holder"},[e("div",{staticClass:"blog-link-header-holder"},[e("h1",{staticClass:"blog-link-header"},[t._v("Blog")])]),t._v(" "),e("div",{staticClass:"slider-4 w-slider",attrs:{"data-delay":"4000","data-animation":"slide","data-autoplay":"false","data-easing":"ease","data-hide-arrows":"false","data-disable-swipe":"false","data-autoplay-limit":"0","data-nav-spacing":"3","data-duration":"500","data-infinite":"true"}},[e("div",{staticClass:"w-slider-mask"},[e("div",{staticClass:"slide-post w-slide"},[e("a",{staticClass:"slide-post-img w-inline-block",attrs:{href:"#"}})]),t._v(" "),e("div",{staticClass:"slide-post w-slide"},[e("a",{staticClass:"slide-post-img second w-inline-block",attrs:{href:"#"}})]),t._v(" "),e("div",{staticClass:"slide-post w-slide"},[e("a",{staticClass:"slide-post-img third w-inline-block",attrs:{href:"#"}})])]),t._v(" "),e("div",{staticClass:"left-arrow-4 w-slider-arrow-left"},[e("div",{staticClass:"w-icon-slider-left"})]),t._v(" "),e("div",{staticClass:"right-arrow-4 w-slider-arrow-right"},[e("div",{staticClass:"w-icon-slider-right"})]),t._v(" "),e("div",{staticClass:"w-slider-nav w-slider-nav-invert w-round"})])])},function(){var t=this._self._c;return t("div",{staticClass:"blog-link-header-holder"},[t("h1",{staticClass:"blog-link-header"},[this._v("Contacts:")])])}],!1,null,null,null);e.default=component.exports},442:function(t,e,l){"use strict";l.r(e);l(57),l(39);var o=l(8),n=(l(48),l(345)),r={data:function(){return{blogs:[]}},methods:{loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/scripts/home.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")},getBlogs:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/blog");case 3:l=e.sent,t.blogs=l.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},formatDate:function(data){if(null==data||null==data)return"N/A";var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)}},mounted:function(){this.loadScript(),this.getBlogs()},computed:{FILE_URL:function(){return this.$store.state.fileURL}},components:{HomeFooter:l(303).default,AsideNews:n.default}},c=l(56),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"news"},[e("home-header"),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"news-content wf-section"},[e("div",{staticClass:"contain"},[e("div",{staticClass:"blog-content-holder"},[e("div",{staticClass:"first-blog-content-holder"},t._l(t.blogs,(function(l){return e("div",{key:l._id,staticClass:"blog-holder"},[e("div",{staticClass:"blog-link-background-holder"},[e("nuxt-link",{staticClass:"blog-link-background w-inline-block",style:{backgroundImage:"url(".concat(t.FILE_URL,"/").concat(l.banner,")")},attrs:{to:"/news-details/".concat(l._id)}})],1),t._v(" "),t._m(1,!0),t._v(" "),e("div",{staticClass:"news-head-link-holder"},[e("nuxt-link",{staticClass:"news-head-link",attrs:{to:"/news-details/".concat(l._id)}},[t._v(t._s(l.title))])],1),t._v(" "),e("div",{staticClass:"blog-content-text-holder"},[e("div",{staticClass:"blog-content-text"},[t._v("\n                "+t._s(l.content.slice(0,100))+"...\n              ")])]),t._v(" "),e("div",{staticClass:"news-text-link-holder"},[e("nuxt-link",{staticClass:"news-text-link",attrs:{to:"/news-details/".concat(l._id)}},[t._v("Read More")])],1),t._v(" "),e("div",{staticClass:"last-news-text-holder"},[e("div",{staticClass:"hold-last-news-text"},[e("div",{staticClass:"last-news-text"},[t._v("\n                  "+t._s(t.formatDate(l.date))+" -\n                ")])]),t._v(" "),e("a",{staticClass:"last-news-texts-link",attrs:{href:"#"}},[t._v("cmsmasters")])])])})),0),t._v(" "),e("aside-news")],1)])]),t._v(" "),e("home-footer")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"news-hero wf-section"},[e("div",{staticClass:"contain"},[e("div",{staticClass:"blog-hero-holder"},[e("div",{staticClass:"div-block-53"},[e("h1",{staticClass:"headings change"},[t._v("Blog")])]),t._v(" "),e("div",[e("div",{staticClass:"sub-hero-texts change-color"},[e("a",{staticClass:"link change-color",attrs:{href:"#"}},[t._v("Home ")]),t._v("/ Blog\n          ")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-bottom-text-holder"},[e("div",{staticClass:"blog-bottom-link-holder"},[e("div",{staticClass:"div-block-101"},[e("a",{staticClass:"news-text-link",attrs:{href:"#"}},[t._v("Adivce,")])]),t._v(" "),e("a",{staticClass:"news-text-link",attrs:{href:"#"}},[t._v("AS Finance")])]),t._v(" "),e("div",{staticClass:"blog-icon-holder"},[e("a",{staticClass:"comment-amount-holder w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-29",attrs:{src:"https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/64062db80c1ec3bec200ef36_send-message-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-amount"},[t._v("0")])]),e("a",{staticClass:"comment-amount-holder change w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-30",attrs:{src:"https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/64085c037186c673b80086a6_Group.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"div-block-104"},[e("div",{staticClass:"div-block-107"},[e("div",{staticClass:"link-amount"},[t._v("2")]),t._v(" "),e("div",{staticClass:"link-amount"},[t._v("2")])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeHeader:l(306).default,AsideNews:l(345).default,HomeFooter:l(303).default})}}]);
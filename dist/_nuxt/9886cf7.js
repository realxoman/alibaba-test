(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{249:function(t,e,r){var content=r(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("2a4987a3",content,!0,{sourceMap:!1})},251:function(t,e,r){var content=r(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("8e7fb528",content,!0,{sourceMap:!1})},253:function(t,e,r){"use strict";var n=r(249),o=r.n(n);r.d(e,"default",(function(){return o.a}))},254:function(t,e,r){var n=r(37)(!1);n.push([t.i,".button_3LJL{border-radius:var(--brd-rd);box-shadow:var(--bx-shdw);background-color:var(--elements-bg);padding:1rem 2rem}.button_3LJL.small_3tcn{padding:.5rem;margin-right:.25rem;margin-bottom:.25rem;text-align:center}",""]),n.locals={button:"button_3LJL",small:"small_3tcn"},t.exports=n},257:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(54),r(9),r(69),{props:{code:{type:String,required:!0}},data:function(){return{country:{name:""}}},fetch:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/alpha/".concat(t.code)).then((function(t){return t.json()}));case 2:t.country=e.sent;case 3:case"end":return e.stop()}}),e)})))()})),fetchOnServer:!0}),l=r(253),_=r(23);var component=Object(_.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{class:[t.$style.button,t.$style.small],attrs:{to:"/country/"+t.code}},[r("span",[t._v(t._s(t.country.name))])])}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.default=component.exports},259:function(t,e,r){"use strict";var n=r(251),o=r.n(n);r.d(e,"default",(function(){return o.a}))},260:function(t,e,r){var n=r(37)(!1);n.push([t.i,".singleCountry_10Bx .top_1Wtv{margin-bottom:3rem}.singleCountry_10Bx .row_2G6I{flex-direction:column}.singleCountry_10Bx .row_2G6I .left_ANPZ,.singleCountry_10Bx .row_2G6I .right_wBtF{width:100%}.singleCountry_10Bx .row_2G6I .left_ANPZ .flag_ehwK{width:100%;height:auto;aspect-ratio:3/2}.singleCountry_10Bx .row_2G6I .right_wBtF{padding:0}.singleCountry_10Bx .row_2G6I .right_wBtF h1{margin-bottom:1rem}.singleCountry_10Bx .row_2G6I .right_wBtF .details_1Btu .mbct_27MW{margin:1rem 0}.singleCountry_10Bx .row_2G6I .right_wBtF .details_1Btu li{margin-top:.3rem;width:100%;font-size:var(--details-isize)}.singleCountry_10Bx .row_2G6I .right_wBtF .details_1Btu li .key_jLYn{font-weight:600}.singleCountry_10Bx .row_2G6I .right_wBtF .borderCountries_13qg{flex-direction:column}.singleCountry_10Bx .row_2G6I .right_wBtF .borderCountries_13qg span{font-weight:600;margin-bottom:1rem;flex:1}.singleCountry_10Bx .row_2G6I .right_wBtF .borderCountries_13qg .countryList_1tbP{flex:5}.button_3SRg{border-radius:var(--brd-rd);box-shadow:var(--bx-shdw);background-color:var(--elements-bg);padding:1rem 2rem}.button_3SRg.small_1nuI{padding:.25rem .5rem}.button_3SRg .icon_lFqx{margin-right:.5rem}@media screen and (min-width:768px){.singleCountry_10Bx{padding-left:5rem}.singleCountry_10Bx .top_1Wtv{margin-bottom:5rem}.singleCountry_10Bx .row_2G6I{flex-direction:row}.singleCountry_10Bx .row_2G6I .left_ANPZ{width:40%}.singleCountry_10Bx .row_2G6I .left_ANPZ .flag_ehwK{width:100%;height:auto;aspect-ratio:3/2}.singleCountry_10Bx .row_2G6I .right_wBtF{width:60%;padding-left:5rem}.singleCountry_10Bx .row_2G6I .right_wBtF h1{margin-bottom:2rem}.singleCountry_10Bx .row_2G6I .right_wBtF .details_1Btu{font-size:var(--details-isize);margin-bottom:3rem}.singleCountry_10Bx .row_2G6I .right_wBtF .details_1Btu li{margin-bottom:1rem;width:50%}.singleCountry_10Bx .row_2G6I .right_wBtF .details_1Btu li .key_jLYn{font-weight:600}.singleCountry_10Bx .row_2G6I .right_wBtF .borderCountries_13qg span{font-weight:600;margin-right:1rem;flex:1}.singleCountry_10Bx .row_2G6I .right_wBtF .borderCountries_13qg .countryList_1tbP{flex:5}}",""]),n.locals={singleCountry:"singleCountry_10Bx",top:"top_1Wtv",row:"row_2G6I",left:"left_ANPZ",right:"right_wBtF",flag:"flag_ehwK",details:"details_1Btu",mbct:"mbct_27MW",key:"key_jLYn",borderCountries:"borderCountries_13qg",countryList:"countryList_1tbP",button:"button_3SRg",small:"small_1nuI",icon:"icon_lFqx"},t.exports=n},263:function(t,e,r){"use strict";r.r(e);var n=r(6),o=(r(54),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.params,e.next=3,r.$get("https://restcountries.eu/rest/v2/alpha/".concat(n.code));case 3:return o=e.sent,e.abrupt("return",{country:o});case 5:case"end":return e.stop()}}),e)})))()},computed:{formatedPopulation:function(){return this.country.population.toLocaleString()}}}),l=r(259),_=r(23);var component=Object(_.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{class:[t.$style.singleCountry,"d-flex-column"]},[r("div",{class:[t.$style.top,"d-flex"]},[r("nuxt-link",{class:t.$style.button,attrs:{to:"/"}},[r("font-awesome-icon",{class:t.$style.icon,attrs:{icon:"arrow-left"}}),t._v(" "),r("span",[t._v("Back")])],1)],1),t._v(" "),r("div",{class:[t.$style.row,"d-flex"]},[r("div",{class:t.$style.left},[r("img",{class:t.$style.flag,attrs:{src:t.country.flag,alt:t.country.name}})]),t._v(" "),r("div",{class:t.$style.right},[r("h1",[t._v(t._s(t.country.name))]),t._v(" "),r("ul",{class:[t.$style.details,"d-flex","wrap"]},[r("li",[r("span",{class:t.$style.key},[t._v("Native Name:")]),t._v(" "),r("span",{class:t.$style.value},[t._v(t._s(t.country.nativeName))])]),t._v(" "),r("li",[r("span",{class:t.$style.key},[t._v("Population:")]),t._v(" "),r("span",{class:t.$style.value},[t._v(t._s(t.formatedPopulation))])]),t._v(" "),r("li",[r("span",{class:t.$style.key},[t._v("Region:")]),t._v(" "),r("span",{class:t.$style.value},[t._v(t._s(t.country.region))])]),t._v(" "),r("li",[r("span",{class:t.$style.key},[t._v("Sub Region:")]),t._v(" "),r("span",{class:t.$style.value},[t._v(t._s(t.country.subregion))])]),t._v(" "),r("li",[r("span",{class:t.$style.key},[t._v("Capital:")]),t._v(" "),r("span",{class:t.$style.value},[t._v(t._s(t.country.capital))])]),t._v(" "),r("div",{class:t.$style.mbct},[r("li",[r("span",{class:t.$style.key},[t._v("Top Level Domain:")]),t._v(" "),r("span",{class:t.$style.value},[t._v(t._s(t.country.topLevelDomain.toString()))])]),t._v(" "),r("li",[r("span",{class:t.$style.key},[t._v("Currencies:")]),t._v(" "),r("span",{class:t.$style.value},[t._v(t._s(t.country.currencies[0].name))])]),t._v(" "),r("li",[r("span",{class:t.$style.key},[t._v("Languages:")]),t._v(" "),r("span",{class:t.$style.value},[t._v(t._s(t.country.languages[0].name))])])])]),t._v(" "),r("div",{class:[t.$style.borderCountries,"d-flex","wrap"]},[r("span",[t._v("Border Countries:")]),t._v(" "),r("div",{class:[t.$style.countryList,"d-flex","wrap"]},t._l(t.country.borders,(function(t,e){return r("BorderCt",{key:e,attrs:{code:t}})})),1)])])])])])}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.default=component.exports;installComponents(component,{BorderCt:r(257).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{250:function(t,e,n){var content=n(256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("1b4e69b8",content,!0,{sourceMap:!1})},255:function(t,e,n){"use strict";var l=n(250),o=n.n(l);n.d(e,"default",(function(){return o.a}))},256:function(t,e,n){var l=n(37)(!1);l.push([t.i,".Country_2zXA{background-color:var(--elements-bg);width:80%;display:block;border-radius:var(--brd-rd);box-shadow:var(--bx-shdw);overflow:hidden;margin-bottom:2rem;margin-right:auto;margin-left:auto}.Country_2zXA .ct_flag_3XLx{width:100%;aspect-ratio:3/2}.Country_2zXA .ct_texts_1T5j{padding:1.8rem 1.3rem}.Country_2zXA .ct_texts_1T5j .ct_name_2ir-{margin-bottom:1.2rem}.Country_2zXA .ct_texts_1T5j .ct_details_2k5y{font-size:var(--home-isize)}.Country_2zXA .ct_texts_1T5j .ct_details_2k5y li{margin-bottom:.4rem}.Country_2zXA .ct_texts_1T5j .ct_details_2k5y li .ct_key_2jn9{font-weight:600}",""]),l.locals={Country:"Country_2zXA",ct_flag:"ct_flag_3XLx",ct_texts:"ct_texts_1T5j",ct_name:"ct_name_2ir-",ct_details:"ct_details_2k5y",ct_key:"ct_key_2jn9"},t.exports=l},258:function(t,e,n){"use strict";n.r(e);var l={props:["country"],computed:{formatedPopulation:function(){return this.country.population.toLocaleString()}},data:function(){return{}}},o=n(255),c=n(23);var component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{class:t.$style.Country,attrs:{to:"/country/"+t.country.alpha3Code}},[n("img",{class:t.$style.ct_flag,attrs:{src:t.country.flag,alt:t.country.name,loading:"lazy"}}),t._v(" "),n("div",{class:t.$style.ct_texts},[n("h2",{class:t.$style.ct_name},[t._v(t._s(t.country.name))]),t._v(" "),n("ul",{class:t.$style.ct_details},[n("li",[n("span",{class:t.$style.ct_key},[t._v("Population:")]),t._v(" "),n("span",{class:t.$style.value},[t._v(t._s(t.formatedPopulation))])]),t._v(" "),n("li",[n("span",{class:t.$style.ct_key},[t._v("Region:")]),t._v(" "),n("span",{class:t.$style.value},[t._v(t._s(t.country.region))])]),t._v(" "),n("li",[n("span",{class:t.$style.ct_key},[t._v("Capital:")]),t._v(" "),n("span",{class:t.$style.value},[t._v(t._s(t.country.capital))])])])])])}),[],!1,(function(t){this.$style=o.default.locals||o.default}),null,null);e.default=component.exports}}]);
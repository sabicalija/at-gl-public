(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{205:function(t,r){t.exports={append:function(t,r){var n="?";for(var e in r){var a=r[e];n+="boolean"==typeof a?"".concat(e,"=").concat(a?"1":"0"):"".concat(e,"=").concat(a)}return t+n}}},206:function(t,r,n){"use strict";var e=n(72);n.n(e).a},211:function(t,r,n){"use strict";n.r(r);var e=n(205),a={name:"Video",props:{id:{type:String,required:!0}},data:function(){return{src:"https://www.youtube.com/embed/",params:{autoplay:!1,controle:!1,rel:!1,modestbranding:!0,origin:""}}},computed:{url:function(){var t=this.src+this.id;return Object(e.append)(t,this.params)}}},o=(n(206),n(0)),i=Object(o.a)(a,(function(){var t=this.$createElement,r=this._self._c||t;return r("div",{attrs:{id:"container"}},[r("iframe",{attrs:{id:"player",type:"text/html",src:this.url,frameborder:"0"}})])}),[],!1,null,"42b354b5",null);r.default=i.exports},72:function(t,r,n){}}]);
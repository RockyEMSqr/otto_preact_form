!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("preact"),require("linkstate"),require("dlv")):"function"==typeof define&&define.amd?define(["exports","preact","linkstate","dlv"],e):e((t||self).ottoPreactForm={},t.preact,t.linkstate,t.dlv)}(this,function(t,e,n,r){function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=/*#__PURE__*/i(n),p=/*#__PURE__*/i(r);function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s.apply(this,arguments)}function l(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,a(t,e)}function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}var u=/*#__PURE__*/function(t){function n(){for(var e,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))||this).prepend=void 0,e.append=void 0,e.inp=void 0,e}l(n,t);var r,i,a=n.prototype;return a.getValue=function(){return this.state.value?this.state.value:null!=this.props.value?this.props.value:this.props.linkTo?p.default(this.props.linkTo.state,this.props.name,void 0):this.inp?this.inp.value:null},a.getOnChange=function(){var t=this;if(this.props.linkTo){var e=o.default(this.props.linkTo,this.props.name);return this.props.onChange?function(n){e(n),t.props.onChange&&t.props.onChange(n)}:e}return this.props.onChange},a.getOnInput=function(){var t=this;if(this.props.onInput&&this.props.linkTo){var e=o.default(this.props.linkTo,this.props.name);return function(n){e(n),n.value=t.getValue(),t.props.onInput&&t.props.onInput(n)}}},a.render=function(t,n){var r=this,i=s({},t,{linkTo:null,label:null}),o=t.placeholder;return o||"string"!=typeof t.label||(o=t.label),e.h("div",{class:"form-group"},this.label&&e.h("label",{for:this.id,class:this.labelClass},this.label),e.h("div",{class:"input-group"},this.prepend,e.h("input",s({},i,{ref:function(t){return r.inp=t},onChange:this.getOnChange(),onInput:this.getOnInput(),value:this.getValue(),type:this.type,class:this.inputClass,name:null==t?void 0:t.name,id:this.id,placeholder:o})),this.append))},r=n,(i=[{key:"label",get:function(){return this.props.label}},{key:"isRequired",get:function(){return this.props.required}},{key:"inputClass",get:function(){return"form-control "+(this.props.inputClass||null)+" "+(this.isRequired?"required":"")}},{key:"labelClass",get:function(){return this.isRequired?"required":""}},{key:"id",get:function(){return this.props.id||this.props.name}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(r.prototype,i),Object.defineProperty(r,"prototype",{writable:!1}),n}(e.Component),h=/*#__PURE__*/function(t){function e(){for(var e,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))||this).type="text",e}return l(e,t),e.prototype.render=function(e,n){return t.prototype.render.call(this,e,n)},e}(u),f={Text:h};t.Text=h,t.default=f});
//# sourceMappingURL=index.umd.js.map

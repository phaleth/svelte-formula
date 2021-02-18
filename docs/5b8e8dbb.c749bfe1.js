(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{73:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return p}));var n=t(3),o=t(7),a=(t(0),t(90)),i={id:"stores-form-validity",title:"formValidity",sidebar_label:"formValidity"},s={unversionedId:"stores/stores-form-validity",id:"stores/stores-form-validity",isDocsHomePage:!1,title:"formValidity",description:"Description",source:"@site/docs/stores/form-validity.mdx",slug:"/stores/stores-form-validity",permalink:"/docs/stores/stores-form-validity",version:"current",sidebar_label:"formValidity",sidebar:"someSidebar",previous:{title:"enrichment",permalink:"/docs/stores/stores-enrichment"},next:{title:"formValues",permalink:"/docs/stores/stores-form-values"}},l=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]}],c={toc:l};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"This store provides the overall form status when using custom form validations, provided in the ",Object(a.b)("inlineCode",{parentName:"p"},"formValidation")," options object. If none are provided this store will not update."),Object(a.b)("p",null,"The store contains a ",Object(a.b)("inlineCode",{parentName:"p"},"Object")," that can contains the key of any validations that have failed, and a string value of the error message."),Object(a.b)("p",null,"Every time there is a value update the store is reset and any custom validations called, they should return ",Object(a.b)("inlineCode",{parentName:"p"},"null")," for a valid result,\nor a string for an invalid result, which can be used to display error messages."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-svelte"},"<script>\n  import { formula } from 'svelte-formula';\n  const { form, formValidity } = formula({\n    formValidation: {\n        passwordsMatch: (values) => values.password === values.passwordMatch ? null : 'Your passwords must match'\n    }\n  });\n<\/script>\n<form use:form>\n  <label for='password'>Password</label>\n  <input type='password' required id='password' name='password' />\n  <label for='passwordMatch'>Password Match</label>\n  <input type='password' required id='passwordMatch' name='passwordMatch' />\n\n  <div hidden={$!formValidity?.passwordsMatch}>{$formValidity?.passwordsMatch}</div>\n</form>\n")))}p.isMDXComponent=!0},90:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),p=function(e){var r=o.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=p(e.components);return o.a.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=n,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return t?o.a.createElement(m,s(s({ref:r},c),{},{components:t})):o.a.createElement(m,s({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);
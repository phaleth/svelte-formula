(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(90)),i={id:"stores-touched",title:"touched",sidebar_label:"touched"},c={unversionedId:"stores/stores-touched",id:"stores/stores-touched",isDocsHomePage:!1,title:"touched",description:"Description",source:"@site/docs/stores/touched.mdx",slug:"/stores/stores-touched",permalink:"/docs/stores/stores-touched",version:"current",sidebar_label:"touched",sidebar:"someSidebar",previous:{title:"submitValues",permalink:"/docs/stores/stores-submit-values"},next:{title:"validity",permalink:"/docs/stores/stores-validity"}},s=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"This store provides the touched status of a field, or group of fields under a single ",Object(a.b)("inlineCode",{parentName:"p"},"name")," property."),Object(a.b)("p",null,"On form creation every form field is assigned a ",Object(a.b)("inlineCode",{parentName:"p"},"focus")," handler. The touched status for the group ",Object(a.b)("inlineCode",{parentName:"p"},"name")," is also set to ",Object(a.b)("inlineCode",{parentName:"p"},"false"),"."),Object(a.b)("p",null,"When the user clicks or tabs on to the field the store is updated to reflect the ",Object(a.b)("inlineCode",{parentName:"p"},"name")," as ",Object(a.b)("inlineCode",{parentName:"p"},"true"),".\nAll of the ",Object(a.b)("inlineCode",{parentName:"p"},"focus")," handlers for the group and then immediately removed, so this group will no longer update the status."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-svelte"},"<script>\n  import { formula } from 'svelte-formula';\n  const { form, touched } = formula();\n<\/script>\n<form use:form>\n  <label for='text-input'>Text Input</label>\n  <input type='text' required id='text-input' name='textvalue' />\n  <span hidden={!touched?.textvalue}>This field has been activted by the user</span>\n</form>\n")))}u.isMDXComponent=!0},90:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return r?o.a.createElement(b,c(c({ref:t},l),{},{components:r})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{88:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(92)),s={id:"stores",title:"Formula Stores",sidebar_label:"Formula Stores"},i={unversionedId:"stores/stores",id:"stores/stores",isDocsHomePage:!1,title:"Formula Stores",description:"Accessing Stores",source:"@site/docs/stores/stores.md",slug:"/stores/stores",permalink:"/docs/stores/stores",version:"current",sidebar_label:"Formula Stores",sidebar:"someSidebar",previous:{title:"Beaker API",permalink:"/docs/beaker"},next:{title:"dirty",permalink:"/docs/stores/stores-dirty"}},c=[{value:"Accessing Stores",id:"accessing-stores",children:[]},{value:"Global Store",id:"global-store",children:[]}],l={toc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"accessing-stores"},"Accessing Stores"),Object(a.b)("p",null,"Formula provides a set of Svelte ",Object(a.b)("a",{parentName:"p",href:"https://svelte.dev/docs#svelte_store"},"stores")," as part of each instance created\nwith ",Object(a.b)("inlineCode",{parentName:"p"},"formula()"),". These stores provide different types of values at different lifecycles of your application."),Object(a.b)("p",null,"The available stores are listed in the sidebar - to access them provide them as part of the initial object returned\nfrom ",Object(a.b)("inlineCode",{parentName:"p"},"formula")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"const { form, enrichement, formValdity, formValues, isFormValid, submitValues, touched, validity } = formula();\n")),Object(a.b)("h2",{id:"global-store"},"Global Store"),Object(a.b)("p",null,"When attaching a form to an element, if you provide an ",Object(a.b)("inlineCode",{parentName:"p"},"id")," property the stores will be added to a global ",Object(a.b)("inlineCode",{parentName:"p"},"Map")," that can\nbe accessed from anywhere else in your application from via `formulaStores"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-svelte"},"\n<script>\n  import { get } from 'svelte/store'\n  import { formula, formulaStores } from 'svelte-formula';\n\n  const { form } = formula();\n\n  function formSubmit() {\n    const otherForm = formulaStores.get('otherForm');\n    const otherValues = get(otherForm.formValues);\n  }\n\n<\/script>\n\n<form use:form id='myForm' on:submit={formSubmit}>\n\n</form>\n")))}u.isMDXComponent=!0},92:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,b=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return r?o.a.createElement(b,i(i({ref:t},l),{},{components:r})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);
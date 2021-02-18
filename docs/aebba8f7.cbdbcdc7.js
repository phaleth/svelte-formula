(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(90)),i={id:"options",title:"Formula Options",sidebar_label:"Formula Options"},l={unversionedId:"options",id:"options",isDocsHomePage:!1,title:"Formula Options",description:"Formula is zero-configuration - Out-of-the-box - using standard HTML5 validation properties to build up its validation",source:"@site/docs/options.md",slug:"/options",permalink:"/docs/options",version:"current",sidebar_label:"Formula Options",sidebar:"someSidebar",previous:{title:"Formula API",permalink:"/docs/formula"},next:{title:"Formula Lifecycle",permalink:"/docs/lifecycle"}},s=[{value:"<code>enrich</code>",id:"enrich",children:[{value:"<code>messages</code>",id:"messages",children:[]},{value:"<code>validators</code>",id:"validators",children:[]},{value:"<code>formValidators</code>",id:"formvalidators",children:[]}]},{value:"Example",id:"example",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Formula is zero-configuration - Out-of-the-box - using standard HTML5 validation properties to build up its validation\nrules - however it is also possible to pass custom validation rules via the ",Object(o.b)("inlineCode",{parentName:"p"},"formula()")," options object."),Object(o.b)("h2",{id:"enrich"},Object(o.b)("inlineCode",{parentName:"h2"},"enrich")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"enrich")," object is used to pass methods to the Formula instance that allow the generation of computed values for\ncurrent form values - these are added at the field level, and each field can have multiple. All the calculated values\nare available via the ",Object(o.b)("a",{parentName:"p",href:"/docs/stores/stores-enrichment"},"enrichment store"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-svelte"},"<script>\n  import { formula } from 'svelte-forms';\n\n  const { form, enrichment } = formula({\n    enrich: {\n      content: {\n        contentLength: (value) => value.length\n      }\n    }\n  })\n<\/script>\n\n<div use:form>\n  <textarea name='content'></textarea>\n  <span>Length ${$enrichment?.content?.contentLength}</span>\n</div>\n")),Object(o.b)("h3",{id:"messages"},Object(o.b)("inlineCode",{parentName:"h3"},"messages")),Object(o.b)("p",null,"Used for localisation and custom messages, this is a ",Object(o.b)("inlineCode",{parentName:"p"},"Object")," containing a key that is the field ",Object(o.b)("inlineCode",{parentName:"p"},"name")," to apply the\nmessages to. The value is another ",Object(o.b)("inlineCode",{parentName:"p"},"Object")," that contains the key for each error (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"valueMissing"),") and the value is\nthe replacement string."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-svelte"},"\n<script>\n  import { formula } from 'svelte-forms';\n\n  const { form, validity } = formula({\n    messages: {\n      username: {\n        valueMissing: 'This service requires you enter a username'\n      }\n    },\n  })\n<\/script>\n")),Object(o.b)("h3",{id:"validators"},Object(o.b)("inlineCode",{parentName:"h3"},"validators")),Object(o.b)("p",null,"An ",Object(o.b)("inlineCode",{parentName:"p"},"Object")," containing a key that is the field ",Object(o.b)("inlineCode",{parentName:"p"},"name")," to apply the validation to, the value is another object that\ncontains each named validation function. The result are made available in the ",Object(o.b)("inlineCode",{parentName:"p"},"validity")," store."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-svelte"},"\n<script>\n  import { formula } from 'svelte-forms';\n\n  const { form, validity } = formula({\n    validators: {\n      content: {\n        username: (value) => value.includes('@svelte.codes') ? null : 'Your username must be in the domain @svelte.codes'\n      }\n    }\n  })\n<\/script>\n")),Object(o.b)("h3",{id:"formvalidators"},Object(o.b)("inlineCode",{parentName:"h3"},"formValidators")),Object(o.b)("p",null,"An ",Object(o.b)("inlineCode",{parentName:"p"},"Object")," containing a key that is the name of the validation rule, and the function that returns the validation\nresult. The results are available in the ",Object(o.b)("inlineCode",{parentName:"p"},"formValidity")," store"),Object(o.b)("p",null,"When using custom ",Object(o.b)("inlineCode",{parentName:"p"},"validators")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-svelte"},"\n<script>\n  import { formula } from 'svelte-formula';\n  const { form, validity, formValidity } = formula({\n    formValidators: {\n      // With form validators you can compare values\n      passwordsMatch: (values) => values.password === values.passwordMatch ? null : 'Your passwords must match',\n      // Or check conditions between values across the form\n      didTickConfirm: (values) => Boolean(values.createAccount) && Boolean(values.agreeTandCs) ? null : 'You must agree to Terms & Conditions before creating an account'\n    }\n  });\n<\/script>\n\n<div class:error={$formValidity?.passwordsMatch} hidden={$formValidity?.passwordsMatch}>\n  {$formValidity?.passwordsMatch}\n</div>\n")))}u.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.a.createElement(b,l(l({ref:t},c),{},{components:n})):r.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
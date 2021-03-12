(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),o=(a(0),a(97)),i={id:"attributes",title:"Formula Attributes",sidebar_label:"Formula Attributes"},l={unversionedId:"attributes",id:"attributes",isDocsHomePage:!1,title:"Formula Attributes",description:"Formula has several data-formula-* attributes that can be read and applied to forms",source:"@site/docs/attributes.md",slug:"/attributes",permalink:"/docs/attributes",version:"current",sidebar_label:"Formula Attributes",sidebar:"someSidebar",previous:{title:"Formula Lifecycle",permalink:"/docs/lifecycle"},next:{title:"Beaker API",permalink:"/docs/groups/beaker"}},u=[{value:"Writable",id:"writable",children:[{value:"<code>data-formula-name</code>",id:"data-formula-name",children:[]},{value:"<code>data-formula-bind</code>",id:"data-formula-bind",children:[]}]},{value:"Readable",id:"readable",children:[{value:"<code>data-formula-touched</code>",id:"data-formula-touched",children:[]},{value:"<code>data-formula-dirty</code>",id:"data-formula-dirty",children:[]},{value:"<code>data-formula-invalid</code>",id:"data-formula-invalid",children:[]}]},{value:"Custom Messages",id:"custom-messages",children:[]}],c={toc:u};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Formula has several ",Object(o.b)("inlineCode",{parentName:"p"},"data-formula-*")," attributes that can be read and applied to forms"),Object(o.b)("h2",{id:"writable"},"Writable"),Object(o.b)("h3",{id:"data-formula-name"},Object(o.b)("inlineCode",{parentName:"h3"},"data-formula-name")),Object(o.b)("p",null,"This attribute is used when you want to provide a custom name for your data group - this is required when using Radio\ngroups with ",Object(o.b)("a",{parentName:"p",href:"/docs/groups/beaker"},"beaker")," as each group requires a unique ",Object(o.b)("inlineCode",{parentName:"p"},'<input name="...">')," value. It is optional for\nany other field - if used all stores will use this key."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},"<input type='text' name='dataValue' data-formula-name='message' maxlength='250' />\n<span>{$enrichment?.message?.length} / 250</span>\n")),Object(o.b)("h3",{id:"data-formula-bind"},Object(o.b)("inlineCode",{parentName:"h3"},"data-formula-bind")),Object(o.b)("p",null,"This attribute is used when you want to bind different, or custom events to an input - for example when writing a custom\ncomponent, or when you want to bind other events to a component. When using this attribute the default binding won't\nhappen, so it must also be passed if you want to use this."),Object(o.b)("p",null,"Multiple events can be bound by using the pipe (",Object(o.b)("inlineCode",{parentName:"p"},"|"),") separator."),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"/docs/examples/custom-event"},"example")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},"\x3c!-- Use other browser event types to bind to --\x3e\n<input type='text' name='myValue' data-formula-bind='mouseover' />\n\x3c!-- Bind to more than one event type, such as including the original event  --\x3e\n<input type='text' name='myValue' data-formula-bind='mouseover|keyup' />\n\x3c!-- You can also emit your own custom events via elements inside custom components --\x3e\n<input type='number' name='myValue' data-formula-bind='customEvent' bind:this='{el}' />\n<button on:click|preventDefault='{()' => el.dispatchEvent(new Event('customEvent'))}>Click Me</button>\n")),Object(o.b)("h2",{id:"readable"},"Readable"),Object(o.b)("h3",{id:"data-formula-touched"},Object(o.b)("inlineCode",{parentName:"h3"},"data-formula-touched")),Object(o.b)("p",null,"Set if the form field or group has been touched"),Object(o.b)("h3",{id:"data-formula-dirty"},Object(o.b)("inlineCode",{parentName:"h3"},"data-formula-dirty")),Object(o.b)("p",null,"Set if the form field or group is a dirty value"),Object(o.b)("h3",{id:"data-formula-invalid"},Object(o.b)("inlineCode",{parentName:"h3"},"data-formula-invalid")),Object(o.b)("p",null,"Set if the form field or group is invalid"),Object(o.b)("h2",{id:"custom-messages"},"Custom Messages"),Object(o.b)("p",null,"While custom messages for errors can be passed via the ",Object(o.b)("inlineCode",{parentName:"p"},"formula")," options they can also be set on any element using a\nKebab-case version of the error name."),Object(o.b)("p",null,"For example if you want to override the default ",Object(o.b)("inlineCode",{parentName:"p"},"typeMismatch")," error use ",Object(o.b)("inlineCode",{parentName:"p"},"data-type-mismatch")," and provide the message.\nThese will always override any custom option messages."),Object(o.b)("p",null,"You can override any ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/ValidityState"},"ValidityState")," messages, or custom\nvalidation messages"))}s.isMDXComponent=!0},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,p=d["".concat(i,".").concat(m)]||d[m]||b[m]||o;return a?r.a.createElement(p,l(l({ref:t},c),{},{components:a})):r.a.createElement(p,l({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{76:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return c}));var t=r(3),a=r(7),s=(r(0),r(97)),o={id:"signup",title:"Example - Signup Form",sidebar_label:"Complex Form"},i={unversionedId:"examples/signup",id:"examples/signup",isDocsHomePage:!1,title:"Example - Signup Form",description:"`svelte",source:"@site/docs/examples/signup.md",slug:"/examples/signup",permalink:"/docs/examples/signup",version:"current",sidebar_label:"Complex Form",sidebar:"someSidebar",previous:{title:"validity",permalink:"/docs/stores/stores-validity"},next:{title:"Example - Customer Rows",permalink:"/docs/examples/customer-rows"}},l=[],d={toc:l};function c(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},d,r,{components:n,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-svelte"},"<script>\n  import { get } from 'svelte/store'\n  import { createEventDispatcher} from 'svelte';\n  import { formula } from 'svelte-formula';\n  import { checkPasswordScore } from './password'\n\n  const dispatch = createEventDispatcher();\n\n  const { form, dirty, enrichment, formValidity, formValues, isFormValid, submitValues, touched, validity } = formula({\n    messages: {\n      username: {\n        valueMissing: 'This service requires you enter a username'\n      }\n    },\n    enrich: {\n      password: {\n        passwordStrength: (value) => checkPasswordScore(value),\n      }\n    },\n    validators: {\n      username: {\n        inDomain: (value) => value.includes('@svelte.codes') ? null : 'You can only sign up wit a @svelte.codes domain'\n      },\n      t_and_c: {\n        isChecked: (value) => value ? null : 'You must check the T&Cs to sign up'\n      }\n    },\n    formValidators: {\n      passwordsMatch: (values) => values.password === values.matchPassword ? null : 'Your passwords must match'\n    }\n  })\n\n  $: usernameErr = $touched?.username && $validity?.username?.invalid\n  $: passwordErr = $touched?.password && $validity?.password?.invalid\n  $: passwordsMatchErr = $touched.passwordMatch && $formValidity?.passwordsMatch;\n  $: passwordStrength = $enrichment?.password?.passwordStrength || 0;\n\n\n  function onSubmit() {\n    dispatch('signup', {\n      user: get(submitValues)\n    })\n  }\n<\/script>\n{passwordStrength}\n<form use:form id='signup' on:submit={onSubmit}>\n  <div hidden={$isFormValid}>\n    There are errors\n  </div>\n\n  <div class='form-field' on:submit={onSubmit}>\n    <label for='username'>Username</label>\n    <input type='email' id='username' name='username' required class:error={usernameErr}>\n    <span hidden={!usernameErr}>{$validity?.username?.message}</span>\n  </div>\n  <div class='form-field'>\n    <label for='password'>Password</label>\n    <input type='password' id='password' name='password' required minlength='8' class:error={passwordErr}>\n    <span hidden={!passwordErr}>{$validity?.password?.message}</span>\n    <meter value={$enrichment?.password?.passwordStrength || 0} min='0' max='100' low='33' high='66'\n           optimum='80'></meter>\n  </div>\n  <div class='form-field'>\n    <label for='passwordMatch'>Password Match</label>\n    <input type='password' id='passwordMatch' name='passwordMatch' required minlength='8'\n           class:error={passwordsMatchErr}>\n    <span hidden={!passwordsMatchErr}>{$formValidity?.passwordsMatch}</span>\n  </div>\n  <div class='form-field'>\n    <label for='t_and_c'>Agree to T&amp;Cs</label>\n    <input type='checkbox' id='t_and_c' name='t_and_c' />\n    <span hidden={$validity?.t_and_c?.valid}>{$validity?.t_and_c?.message}</span>\n  </div>\n\n  <button type='submit' disabled={!$isFormValid}>Signup For Service</button>\n</form>\n\n<style>\n  .error {\n    border: 1px solid red;\n  }\n</style>\n\n")))}c.isMDXComponent=!0},97:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return f}));var t=r(0),a=r.n(t);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),c=function(e){var n=a.a.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=t,f=p["".concat(o,".").concat(m)]||p[m]||u[m]||s;return r?a.a.createElement(f,i(i({ref:n},d),{},{components:r})):a.a.createElement(f,i({ref:n},d))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var d=2;d<s;d++)o[d]=r[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
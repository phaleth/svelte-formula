(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    80: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'frontMatter', function () {
          return c;
        }),
        n.d(t, 'metadata', function () {
          return i;
        }),
        n.d(t, 'toc', function () {
          return l;
        }),
        n.d(t, 'default', function () {
          return u;
        });
      var r = n(3),
        o = n(7),
        a = (n(0), n(90)),
        c = { id: 'lifecycle', title: 'Formula Lifecycle', sidebar_label: 'Formula Lifecycle' },
        i = {
          unversionedId: 'lifecycle',
          id: 'lifecycle',
          isDocsHomePage: !1,
          title: 'Formula Lifecycle',
          description: 'Create',
          source: '@site/docs/lifecycle.md',
          slug: '/lifecycle',
          permalink: '/docs/lifecycle',
          version: 'current',
          sidebar_label: 'Formula Lifecycle',
          sidebar: 'someSidebar',
          previous: { title: 'Formula Options', permalink: '/docs/options' },
          next: { title: 'Formula Stores', permalink: '/docs/stores/stores' },
        },
        l = [
          { value: 'Create', id: 'create', children: [] },
          { value: 'Update', id: 'update', children: [] },
          { value: 'Destroy', id: 'destroy', children: [] },
        ],
        s = { toc: l };
      function u(e) {
        var t = e.components,
          n = Object(o.a)(e, ['components']);
        return Object(a.b)(
          'wrapper',
          Object(r.a)({}, s, n, { components: t, mdxType: 'MDXLayout' }),
          Object(a.b)('h2', { id: 'create' }, 'Create'),
          Object(a.b)(
            'p',
            null,
            'To create your form instance call the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'formula()'),
            ' method, this creates a ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'form'),
            ' instance that can be attached to any\nelement with the ',
            Object(a.b)('a', { parentName: 'p', href: 'https://svelte.dev/docs#use_action' }, 'use'),
            ' directive.',
          ),
          Object(a.b)('p', null, 'When using like this, on component destruction the form will automatically unbind'),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              { parentName: 'pre', className: 'language-svelte' },
              "<script>\n  import { formula } from 'svelte-formula';\n\n  const { form } = formula()\n</script>\n\n\x3c!-- Use with a form element to get access to submission values --\x3e\n<form use:form></form>\n\n\x3c!-- Use on any other element to create reactive components --\x3e\n<div use:form></div>\n",
            ),
          ),
          Object(a.b)('h2', { id: 'update' }, 'Update'),
          Object(a.b)(
            'p',
            null,
            'Any Formula instance can be updated using the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'update'),
            ' method, which accepts a new ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'FormulaOptions'),
            ' object. When\nusing ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'update'),
            ' all existing handlers will be removed and rebound.',
          ),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              { parentName: 'pre', className: 'language-svelte' },
              "<script>\n  import { formula } from 'svelte-formula';\n  import { getMessges } from './libs/lang'\n\n  const { form, update } = formula();\n\n  function switchLanguage(lang) {\n    const messages = getMessges(lang);\n    update({ messages });\n  }\n\n</script>\n\n<div class='lang-switcher'>\n  <button on:click={() => switchLanguage('en')}>English</button>\n  <button on:click={() => switchLanguage('nl')}>Nederlands</button>\n  <button on:click={() => switchLanguage('fr')}>Fran\xe7ais</button>\n</div>\n\n<form use:form>\n\n</form>\n",
            ),
          ),
          Object(a.b)('h2', { id: 'destroy' }, 'Destroy'),
          Object(a.b)(
            'p',
            null,
            'The ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'destroy'),
            ' method allows the form to be destroyed early, which removes all handlers and removes the stores from the\nglobal store.',
          ),
        );
      }
      u.isMDXComponent = !0;
    },
    90: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return p;
      }),
        n.d(t, 'b', function () {
          return b;
        });
      var r = n(0),
        o = n.n(r);
      function a(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      var s = o.a.createContext({}),
        u = function (e) {
          var t = o.a.useContext(s),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : i(i({}, t), e)), n;
        },
        p = function (e) {
          var t = u(e.components);
          return o.a.createElement(s.Provider, { value: t }, e.children);
        },
        m = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return o.a.createElement(o.a.Fragment, {}, t);
          },
        },
        d = o.a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            a = e.originalType,
            c = e.parentName,
            s = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = u(n),
            d = r,
            b = p[''.concat(c, '.').concat(d)] || p[d] || m[d] || a;
          return n
            ? o.a.createElement(b, i(i({ ref: t }, s), {}, { components: n }))
            : o.a.createElement(b, i({ ref: t }, s));
        });
      function b(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var a = n.length,
            c = new Array(a);
          c[0] = d;
          var i = {};
          for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
          (i.originalType = e), (i.mdxType = 'string' == typeof e ? e : r), (c[1] = i);
          for (var s = 2; s < a; s++) c[s] = n[s];
          return o.a.createElement.apply(null, c);
        }
        return o.a.createElement.apply(null, n);
      }
      d.displayName = 'MDXCreateElement';
    },
  },
]);

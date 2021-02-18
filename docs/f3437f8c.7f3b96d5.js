(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    85: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'frontMatter', function () {
          return i;
        }),
        n.d(t, 'metadata', function () {
          return s;
        }),
        n.d(t, 'toc', function () {
          return l;
        }),
        n.d(t, 'default', function () {
          return c;
        });
      var r = n(3),
        a = n(7),
        o = (n(0), n(90)),
        i = { id: 'stores-submit-values', title: 'submitValues', sidebar_label: 'submitValues' },
        s = {
          unversionedId: 'stores/stores-submit-values',
          id: 'stores/stores-submit-values',
          isDocsHomePage: !1,
          title: 'submitValues',
          description: 'Description',
          source: '@site/docs/stores/submit-values.md',
          slug: '/stores/stores-submit-values',
          permalink: '/docs/stores/stores-submit-values',
          version: 'current',
          sidebar_label: 'submitValues',
          sidebar: 'someSidebar',
          previous: { title: 'isFormValid', permalink: '/docs/stores/stores-form-valid' },
          next: { title: 'touched', permalink: '/docs/stores/stores-touched' },
        },
        l = [
          { value: 'Description', id: 'description', children: [] },
          { value: 'Example', id: 'example', children: [] },
        ],
        u = { toc: l };
      function c(e) {
        var t = e.components,
          n = Object(a.a)(e, ['components']);
        return Object(o.b)(
          'wrapper',
          Object(r.a)({}, u, n, { components: t, mdxType: 'MDXLayout' }),
          Object(o.b)('h2', { id: 'description' }, 'Description'),
          Object(o.b)(
            'p',
            null,
            'This store contains all the form values at submit time, only if the bound element is a ',
            Object(o.b)('inlineCode', { parentName: 'p' }, 'form'),
            ' element. The values are\nan ',
            Object(o.b)('inlineCode', { parentName: 'p' }, 'Object'),
            ' with the key per group ',
            Object(o.b)('inlineCode', { parentName: 'p' }, 'name'),
            " and it's value.",
          ),
          Object(o.b)(
            'p',
            null,
            'The value can be a single value, or an array or values depending on there being fields with the same ',
            Object(o.b)('inlineCode', { parentName: 'p' }, 'name'),
            ' (e.g.\nmultiple checkboxes), or a ',
            Object(o.b)('inlineCode', { parentName: 'p' }, '<select>'),
            ' element with the ',
            Object(o.b)('inlineCode', { parentName: 'p' }, 'multiple'),
            ' attribute.',
          ),
          Object(o.b)('h2', { id: 'example' }, 'Example'),
          Object(o.b)(
            'pre',
            null,
            Object(o.b)(
              'code',
              { parentName: 'pre', className: 'language-svelte' },
              "<script>\n  import {formula} from 'svelte-formula';\n  const {form, submitValues} = formula();\n  const { postToApi } '../libs/api'\n\n  function submit() {\n    $: result = $submitValues\n    postToApi(result);\n  }\n});\n</script>\n<form use:form>\n  <label for='value-1'>Value 1</label>\n  <input type='number' required id='value-1' name='value1' />\n  <label for='value-2'>Value 2</label>\n  <input type='number' required id='value-2' name='value2' />\n\n <button on:click={submit}>Submit</submit>\n</form>\n",
            ),
          ),
        );
      }
      c.isMDXComponent = !0;
    },
    90: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return p;
      }),
        n.d(t, 'b', function () {
          return d;
        });
      var r = n(0),
        a = n.n(r);
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function i(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
        }
        return a;
      }
      var u = a.a.createContext({}),
        c = function (e) {
          var t = a.a.useContext(u),
            n = t;
          return e && (n = 'function' == typeof e ? e(t) : s(s({}, t), e)), n;
        },
        p = function (e) {
          var t = c(e.components);
          return a.a.createElement(u.Provider, { value: t }, e.children);
        },
        b = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return a.a.createElement(a.a.Fragment, {}, t);
          },
        },
        m = a.a.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            o = e.originalType,
            i = e.parentName,
            u = l(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = c(n),
            m = r,
            d = p[''.concat(i, '.').concat(m)] || p[m] || b[m] || o;
          return n
            ? a.a.createElement(d, s(s({ ref: t }, u), {}, { components: n }))
            : a.a.createElement(d, s({ ref: t }, u));
        });
      function d(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ('string' == typeof e || r) {
          var o = n.length,
            i = new Array(o);
          i[0] = m;
          var s = {};
          for (var l in t) hasOwnProperty.call(t, l) && (s[l] = t[l]);
          (s.originalType = e), (s.mdxType = 'string' == typeof e ? e : r), (i[1] = s);
          for (var u = 2; u < o; u++) i[u] = n[u];
          return a.a.createElement.apply(null, i);
        }
        return a.a.createElement.apply(null, n);
      }
      m.displayName = 'MDXCreateElement';
    },
  },
]);

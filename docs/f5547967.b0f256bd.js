(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    86: function (e, r, t) {
      'use strict';
      t.r(r),
        t.d(r, 'frontMatter', function () {
          return l;
        }),
        t.d(r, 'metadata', function () {
          return i;
        }),
        t.d(r, 'toc', function () {
          return u;
        }),
        t.d(r, 'default', function () {
          return c;
        });
      var n = t(3),
        a = t(7),
        o = (t(0), t(90)),
        l = { id: 'stores-form-values', title: 'formValues', sidebar_label: 'formValues' },
        i = {
          unversionedId: 'stores/stores-form-values',
          id: 'stores/stores-form-values',
          isDocsHomePage: !1,
          title: 'formValues',
          description: 'Description',
          source: '@site/docs/stores/form-values.mdx',
          slug: '/stores/stores-form-values',
          permalink: '/docs/stores/stores-form-values',
          version: 'current',
          sidebar_label: 'formValues',
          sidebar: 'someSidebar',
          previous: { title: 'formValidity', permalink: '/docs/stores/stores-form-validity' },
          next: { title: 'isFormValid', permalink: '/docs/stores/stores-form-valid' },
        },
        u = [
          { value: 'Description', id: 'description', children: [] },
          { value: 'Example', id: 'example', children: [] },
        ],
        s = { toc: u };
      function c(e) {
        var r = e.components,
          t = Object(a.a)(e, ['components']);
        return Object(o.b)(
          'wrapper',
          Object(n.a)({}, s, t, { components: r, mdxType: 'MDXLayout' }),
          Object(o.b)('h2', { id: 'description' }, 'Description'),
          Object(o.b)(
            'p',
            null,
            'This store contains all the current form values at the time any value changes on a bound element. The values are an ',
            Object(o.b)('inlineCode', { parentName: 'p' }, 'Object'),
            ' with the\nkey per group ',
            Object(o.b)('inlineCode', { parentName: 'p' }, 'name'),
            " and it's value.",
          ),
          Object(o.b)(
            'p',
            null,
            'The value can be a single value, or an array or values depending on there being fields with the same ',
            Object(o.b)('inlineCode', { parentName: 'p' }, 'name'),
            ' (e.g. multiple checkboxes), or a ',
            Object(o.b)('inlineCode', { parentName: 'p' }, '<select>'),
            ' element\nwith the ',
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
              "<script>\n  import {formula} from 'svelte-formula';\n  const {form, formValues} = formula();\n\n  $ total = ($formValues?.value1 || 0) + ($formValues?.value2 || 0)\n});\n</script>\n<form use:form>\n  <label for='value-1'>Value 1</label>\n  <input type='number' required id='value-1' name='value1' />\n  <label for='value-2'>Value 2</label>\n  <input type='number' required id='value-2' name='value2' />\n\n  <div>{$formValues?.value1} + {$formValues?.value2} = {total}</div>\n</form>\n",
            ),
          ),
        );
      }
      c.isMDXComponent = !0;
    },
    90: function (e, r, t) {
      'use strict';
      t.d(r, 'a', function () {
        return p;
      }),
        t.d(r, 'b', function () {
          return b;
        });
      var n = t(0),
        a = t.n(n);
      function o(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
            : (e[r] = t),
          e
        );
      }
      function l(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function i(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? l(Object(t), !0).forEach(function (r) {
                o(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              });
        }
        return e;
      }
      function u(e, r) {
        if (null == e) return {};
        var t,
          n,
          a = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              a = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++) (t = o[n]), r.indexOf(t) >= 0 || (a[t] = e[t]);
            return a;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (t = o[n]), r.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]));
        }
        return a;
      }
      var s = a.a.createContext({}),
        c = function (e) {
          var r = a.a.useContext(s),
            t = r;
          return e && (t = 'function' == typeof e ? e(r) : i(i({}, r), e)), t;
        },
        p = function (e) {
          var r = c(e.components);
          return a.a.createElement(s.Provider, { value: r }, e.children);
        },
        m = {
          inlineCode: 'code',
          wrapper: function (e) {
            var r = e.children;
            return a.a.createElement(a.a.Fragment, {}, r);
          },
        },
        f = a.a.forwardRef(function (e, r) {
          var t = e.components,
            n = e.mdxType,
            o = e.originalType,
            l = e.parentName,
            s = u(e, ['components', 'mdxType', 'originalType', 'parentName']),
            p = c(t),
            f = n,
            b = p[''.concat(l, '.').concat(f)] || p[f] || m[f] || o;
          return t
            ? a.a.createElement(b, i(i({ ref: r }, s), {}, { components: t }))
            : a.a.createElement(b, i({ ref: r }, s));
        });
      function b(e, r) {
        var t = arguments,
          n = r && r.mdxType;
        if ('string' == typeof e || n) {
          var o = t.length,
            l = new Array(o);
          l[0] = f;
          var i = {};
          for (var u in r) hasOwnProperty.call(r, u) && (i[u] = r[u]);
          (i.originalType = e), (i.mdxType = 'string' == typeof e ? e : n), (l[1] = i);
          for (var s = 2; s < o; s++) l[s] = t[s];
          return a.a.createElement.apply(null, l);
        }
        return a.a.createElement.apply(null, t);
      }
      f.displayName = 'MDXCreateElement';
    },
  },
]);

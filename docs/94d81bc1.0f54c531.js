(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    75: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'frontMatter', function () {
          return a;
        }),
        r.d(t, 'metadata', function () {
          return s;
        }),
        r.d(t, 'toc', function () {
          return c;
        }),
        r.d(t, 'default', function () {
          return p;
        });
      var n = r(3),
        o = r(7),
        i = (r(0), r(90)),
        a = { id: 'stores-dirty', title: 'dirty', sidebar_label: 'dirty' },
        s = {
          unversionedId: 'stores/stores-dirty',
          id: 'stores/stores-dirty',
          isDocsHomePage: !1,
          title: 'dirty',
          description: 'Description',
          source: '@site/docs/stores/dirty.mdx',
          slug: '/stores/stores-dirty',
          permalink: '/docs/stores/stores-dirty',
          version: 'current',
          sidebar_label: 'dirty',
          sidebar: 'someSidebar',
          previous: { title: 'Formula Stores', permalink: '/docs/stores/stores' },
          next: { title: 'enrichment', permalink: '/docs/stores/stores-enrichment' },
        },
        c = [
          { value: 'Description', id: 'description', children: [] },
          { value: 'Example', id: 'example', children: [] },
        ],
        l = { toc: c };
      function p(e) {
        var t = e.components,
          r = Object(o.a)(e, ['components']);
        return Object(i.b)(
          'wrapper',
          Object(n.a)({}, l, r, { components: t, mdxType: 'MDXLayout' }),
          Object(i.b)('h2', { id: 'description' }, 'Description'),
          Object(i.b)(
            'p',
            null,
            'This store provides the dirty status of a field, or group of fields under a single ',
            Object(i.b)('inlineCode', { parentName: 'p' }, 'name'),
            ' property.',
          ),
          Object(i.b)(
            'p',
            null,
            'On form creation every form field is assigned a ',
            Object(i.b)('inlineCode', { parentName: 'p' }, 'blur'),
            ' handler, and it reads the current value of the field. The dirty status for the group ',
            Object(i.b)('inlineCode', { parentName: 'p' }, 'name'),
            ' is also set to ',
            Object(i.b)('inlineCode', { parentName: 'p' }, 'false'),
            '.',
          ),
          Object(i.b)(
            'p',
            null,
            'When the user exits the field with a ',
            Object(i.b)('inlineCode', { parentName: 'p' }, 'blur'),
            ' event the value is checked, and if changed the store is updated to reflect the ',
            Object(i.b)('inlineCode', { parentName: 'p' }, 'name'),
            ' as ',
            Object(i.b)('inlineCode', { parentName: 'p' }, 'true'),
            '.\nAll of the ',
            Object(i.b)('inlineCode', { parentName: 'p' }, 'blur'),
            ' handlers for the group and then immediately removed, so this group will no longer update the status.',
          ),
          Object(i.b)('h2', { id: 'example' }, 'Example'),
          Object(i.b)(
            'pre',
            null,
            Object(i.b)(
              'code',
              { parentName: 'pre', className: 'language-svelte' },
              "<script>\n  import { formula } from 'svelte-formula';\n  const { form, dirty } = formula();\n</script>\n<form use:form>\n  <label for='text-input'>Text Input</label>\n  <input type='text' required id='text-input' name='textvalue' />\n  <span hidden={!$dirty?.textvalue}>The value of this field has been changed</span>\n</form>\n",
            ),
          ),
        );
      }
      p.isMDXComponent = !0;
    },
    90: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return u;
      }),
        r.d(t, 'b', function () {
          return b;
        });
      var n = r(0),
        o = r.n(n);
      function i(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = r),
          e
        );
      }
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function c(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
        }
        return o;
      }
      var l = o.a.createContext({}),
        p = function (e) {
          var t = o.a.useContext(l),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : s(s({}, t), e)), r;
        },
        u = function (e) {
          var t = p(e.components);
          return o.a.createElement(l.Provider, { value: t }, e.children);
        },
        d = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return o.a.createElement(o.a.Fragment, {}, t);
          },
        },
        f = o.a.forwardRef(function (e, t) {
          var r = e.components,
            n = e.mdxType,
            i = e.originalType,
            a = e.parentName,
            l = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
            u = p(r),
            f = n,
            b = u[''.concat(a, '.').concat(f)] || u[f] || d[f] || i;
          return r
            ? o.a.createElement(b, s(s({ ref: t }, l), {}, { components: r }))
            : o.a.createElement(b, s({ ref: t }, l));
        });
      function b(e, t) {
        var r = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var i = r.length,
            a = new Array(i);
          a[0] = f;
          var s = {};
          for (var c in t) hasOwnProperty.call(t, c) && (s[c] = t[c]);
          (s.originalType = e), (s.mdxType = 'string' == typeof e ? e : n), (a[1] = s);
          for (var l = 2; l < i; l++) a[l] = r[l];
          return o.a.createElement.apply(null, a);
        }
        return o.a.createElement.apply(null, r);
      }
      f.displayName = 'MDXCreateElement';
    },
  },
]);

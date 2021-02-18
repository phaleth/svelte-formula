(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    84: function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'frontMatter', function () {
          return o;
        }),
        r.d(t, 'metadata', function () {
          return l;
        }),
        r.d(t, 'toc', function () {
          return c;
        }),
        r.d(t, 'default', function () {
          return p;
        });
      var n = r(3),
        i = r(7),
        a = (r(0), r(90)),
        o = { id: 'stores-validity', title: 'validity', sidebar_label: 'validity' },
        l = {
          unversionedId: 'stores/stores-validity',
          id: 'stores/stores-validity',
          isDocsHomePage: !1,
          title: 'validity',
          description: 'Description',
          source: '@site/docs/stores/validity.mdx',
          slug: '/stores/stores-validity',
          permalink: '/docs/stores/stores-validity',
          version: 'current',
          sidebar_label: 'validity',
          sidebar: 'someSidebar',
          previous: { title: 'touched', permalink: '/docs/stores/stores-touched' },
        },
        c = [
          { value: 'Description', id: 'description', children: [] },
          { value: 'Example', id: 'example', children: [] },
        ],
        s = { toc: c };
      function p(e) {
        var t = e.components,
          r = Object(i.a)(e, ['components']);
        return Object(a.b)(
          'wrapper',
          Object(n.a)({}, s, r, { components: t, mdxType: 'MDXLayout' }),
          Object(a.b)('h2', { id: 'description' }, 'Description'),
          Object(a.b)(
            'p',
            null,
            'This store emits on every value change the validity of every ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'name'),
            ' group. The value is an object that contains the ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'name'),
            ' and\nan ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'Object'),
            ' that contains the following properties:',
          ),
          Object(a.b)(
            'ul',
            null,
            Object(a.b)(
              'li',
              { parentName: 'ul' },
              Object(a.b)('inlineCode', { parentName: 'li' }, 'valid'),
              ' - If the field is valid',
            ),
            Object(a.b)(
              'li',
              { parentName: 'ul' },
              Object(a.b)('inlineCode', { parentName: 'li' }, 'invalid'),
              ' - If the field is invalid',
            ),
            Object(a.b)(
              'li',
              { parentName: 'ul' },
              Object(a.b)('inlineCode', { parentName: 'li' }, 'message'),
              ' - If the form is invalid, the message to display.',
            ),
            Object(a.b)(
              'li',
              { parentName: 'ul' },
              Object(a.b)('inlineCode', { parentName: 'li' }, 'errors'),
              ' - An object with the keys of the current errors applied to the field (the value is ',
              Object(a.b)('inlineCode', { parentName: 'li' }, 'true'),
              ')',
            ),
          ),
          Object(a.b)(
            'p',
            null,
            'The ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'message'),
            ' will always be the first one to match, HTML5 errors first (e.g HTML required comes before HTML minlength)\nthen custom errors from ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'validators'),
            '. The ',
            Object(a.b)('inlineCode', { parentName: 'p' }, 'errors'),
            ' object may contain more than one key for errors that apply.',
          ),
          Object(a.b)('h2', { id: 'example' }, 'Example'),
          Object(a.b)(
            'pre',
            null,
            Object(a.b)(
              'code',
              { parentName: 'pre', className: 'language-svelte' },
              "<script>\n  import {formula} from 'svelte-formula';\n  const {form, validity} = formula();\n</script>\n<form use:form>\n  <label for='text-input'>Text Input</label>\n  <input type='text' required id='text-input' name='textvalue' class:error={$validity?.textvalue?.invalid}/>\n  <span hidden={$validity?.textvalue?.valid}>{$validity?.textvalue?.message}</span>\n</form>\n",
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
          return m;
        });
      var n = r(0),
        i = r.n(n);
      function a(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = r),
          e
        );
      }
      function o(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                a(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function c(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      var s = i.a.createContext({}),
        p = function (e) {
          var t = i.a.useContext(s),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : l(l({}, t), e)), r;
        },
        u = function (e) {
          var t = p(e.components);
          return i.a.createElement(s.Provider, { value: t }, e.children);
        },
        d = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return i.a.createElement(i.a.Fragment, {}, t);
          },
        },
        b = i.a.forwardRef(function (e, t) {
          var r = e.components,
            n = e.mdxType,
            a = e.originalType,
            o = e.parentName,
            s = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
            u = p(r),
            b = n,
            m = u[''.concat(o, '.').concat(b)] || u[b] || d[b] || a;
          return r
            ? i.a.createElement(m, l(l({ ref: t }, s), {}, { components: r }))
            : i.a.createElement(m, l({ ref: t }, s));
        });
      function m(e, t) {
        var r = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var a = r.length,
            o = new Array(a);
          o[0] = b;
          var l = {};
          for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
          (l.originalType = e), (l.mdxType = 'string' == typeof e ? e : n), (o[1] = l);
          for (var s = 2; s < a; s++) o[s] = r[s];
          return i.a.createElement.apply(null, o);
        }
        return i.a.createElement.apply(null, r);
      }
      b.displayName = 'MDXCreateElement';
    },
  },
]);

(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    89: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        l = a.n(n),
        r = a(24),
        c = a(91),
        i = a(22),
        o = a(95),
        m = a(94);
      var s = function (e) {
          var t = e.metadata;
          return l.a.createElement(
            'nav',
            { className: 'pagination-nav', 'aria-label': 'Blog list page navigation' },
            l.a.createElement(
              'div',
              { className: 'pagination-nav__item' },
              t.previous &&
                l.a.createElement(
                  m.a,
                  { className: 'pagination-nav__link', to: t.previous.permalink },
                  l.a.createElement('div', { className: 'pagination-nav__sublabel' }, 'Previous'),
                  l.a.createElement('div', { className: 'pagination-nav__label' }, '\xab ', t.previous.title),
                ),
            ),
            l.a.createElement(
              'div',
              { className: 'pagination-nav__item pagination-nav__item--next' },
              t.next &&
                l.a.createElement(
                  m.a,
                  { className: 'pagination-nav__link', to: t.next.permalink },
                  l.a.createElement('div', { className: 'pagination-nav__sublabel' }, 'Next'),
                  l.a.createElement('div', { className: 'pagination-nav__label' }, t.next.title, ' \xbb'),
                ),
            ),
          );
        },
        d = a(93);
      var u = function () {
          var e = Object(i.default)().siteConfig.title,
            t = Object(d.useActivePlugin)({ failfast: !0 }).pluginId,
            a = Object(c.useDocsPreferredVersion)(t).savePreferredVersionName,
            n = Object(d.useActiveVersion)(t),
            r = Object(d.useDocVersionSuggestions)(t),
            o = r.latestDocSuggestion,
            s = r.latestVersionSuggestion;
          if (!s) return l.a.createElement(l.a.Fragment, null);
          var u,
            v =
              null != o
                ? o
                : (u = s).docs.find(function (e) {
                    return e.id === u.mainDocId;
                  });
          return l.a.createElement(
            'div',
            { className: 'alert alert--warning margin-bottom--md', role: 'alert' },
            'current' === n.name
              ? l.a.createElement(
                  'div',
                  null,
                  'This is unreleased documentation for ',
                  e,
                  ' ',
                  l.a.createElement('strong', null, n.label),
                  ' version.',
                )
              : l.a.createElement(
                  'div',
                  null,
                  'This is documentation for ',
                  e,
                  ' ',
                  l.a.createElement('strong', null, n.label),
                  ', which is no longer actively maintained.',
                ),
            l.a.createElement(
              'div',
              { className: 'margin-top--md' },
              'For up-to-date documentation, see the',
              ' ',
              l.a.createElement(
                'strong',
                null,
                l.a.createElement(
                  m.a,
                  {
                    to: v.path,
                    onClick: function () {
                      return a(s.name);
                    },
                  },
                  'latest version',
                ),
              ),
              ' ',
              '(',
              s.label,
              ').',
            ),
          );
        },
        v = a(92);
      var E = function (e, t, a) {
          var l = Object(n.useState)(void 0),
            r = l[0],
            c = l[1];
          Object(n.useEffect)(function () {
            function n() {
              var n = (function () {
                var e = Array.from(document.getElementsByClassName('anchor')),
                  t = e.find(function (e) {
                    return e.getBoundingClientRect().top >= a;
                  });
                if (t) {
                  if (t.getBoundingClientRect().top >= a) {
                    var n = e[e.indexOf(t) - 1];
                    return null != n ? n : t;
                  }
                  return t;
                }
                return e[e.length - 1];
              })();
              if (n)
                for (var l = 0, i = !1, o = document.getElementsByClassName(e); l < o.length && !i; ) {
                  var m = o[l],
                    s = m.href,
                    d = decodeURIComponent(s.substring(s.indexOf('#') + 1));
                  n.id === d && (r && r.classList.remove(t), m.classList.add(t), c(m), (i = !0)), (l += 1);
                }
            }
            return (
              document.addEventListener('scroll', n),
              document.addEventListener('resize', n),
              n(),
              function () {
                document.removeEventListener('scroll', n), document.removeEventListener('resize', n);
              }
            );
          });
        },
        g = a(64),
        f = a.n(g);
      function p(e) {
        var t = e.toc,
          a = e.isChild;
        return t.length
          ? l.a.createElement(
              'ul',
              { className: a ? '' : 'table-of-contents table-of-contents__left-border' },
              t.map(function (e) {
                return l.a.createElement(
                  'li',
                  { key: e.id },
                  l.a.createElement('a', {
                    href: '#' + e.id,
                    className: 'table-of-contents__link',
                    dangerouslySetInnerHTML: { __html: e.value },
                  }),
                  l.a.createElement(p, { isChild: !0, toc: e.children }),
                );
              }),
            )
          : null;
      }
      var b = function (e) {
          var t = e.toc;
          return (
            E('table-of-contents__link', 'table-of-contents__link--active', 100),
            l.a.createElement(
              'div',
              { className: Object(v.a)(f.a.tableOfContents, 'thin-scrollbar') },
              l.a.createElement(p, { toc: t }),
            )
          );
        },
        N = a(3),
        h = a(7),
        _ = a(65),
        O = a.n(_),
        j = function (e) {
          var t = e.className,
            a = Object(h.a)(e, ['className']);
          return l.a.createElement(
            'svg',
            Object(N.a)(
              {
                fill: 'currentColor',
                height: '1.2em',
                width: '1.2em',
                preserveAspectRatio: 'xMidYMid meet',
                role: 'img',
                viewBox: '0 0 40 40',
                className: Object(v.a)(O.a.iconEdit, t),
              },
              a,
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d:
                  'm34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z',
              }),
            ),
          );
        },
        w = a(66),
        k = a.n(w);
      t.default = function (e) {
        var t,
          a = Object(i.default)().siteConfig.url,
          n = e.content,
          m = n.metadata,
          E = n.frontMatter,
          g = E.image,
          f = E.keywords,
          p = E.hide_title,
          N = E.hide_table_of_contents,
          h = m.description,
          _ = m.title,
          O = m.permalink,
          w = m.editUrl,
          y = m.lastUpdatedAt,
          C = m.lastUpdatedBy,
          x = Object(d.useActivePlugin)({ failfast: !0 }).pluginId,
          L = Object(d.useVersions)(x),
          I = Object(d.useActiveVersion)(x),
          A = L.length > 1,
          S = Object(c.useTitleFormatter)(_),
          V = Object(o.a)(g, { absolute: !0 });
        return l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            r.a,
            null,
            l.a.createElement('title', null, S),
            l.a.createElement('meta', { property: 'og:title', content: S }),
            h && l.a.createElement('meta', { name: 'description', content: h }),
            h && l.a.createElement('meta', { property: 'og:description', content: h }),
            f && f.length && l.a.createElement('meta', { name: 'keywords', content: f.join(',') }),
            g && l.a.createElement('meta', { property: 'og:image', content: V }),
            g && l.a.createElement('meta', { name: 'twitter:image', content: V }),
            g && l.a.createElement('meta', { name: 'twitter:image:alt', content: 'Image for ' + _ }),
            O && l.a.createElement('meta', { property: 'og:url', content: a + O }),
            O && l.a.createElement('link', { rel: 'canonical', href: a + O }),
          ),
          l.a.createElement(
            'div',
            { className: 'row' },
            l.a.createElement(
              'div',
              { className: Object(v.a)('col', ((t = {}), (t[k.a.docItemCol] = !N), t)) },
              l.a.createElement(u, null),
              l.a.createElement(
                'div',
                { className: k.a.docItemContainer },
                l.a.createElement(
                  'article',
                  null,
                  A &&
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement('span', { className: 'badge badge--secondary' }, 'Version: ', I.label),
                    ),
                  !p && l.a.createElement('header', null, l.a.createElement('h1', { className: k.a.docTitle }, _)),
                  l.a.createElement('div', { className: 'markdown' }, l.a.createElement(n, null)),
                ),
                (w || y || C) &&
                  l.a.createElement(
                    'div',
                    { className: 'margin-vert--xl' },
                    l.a.createElement(
                      'div',
                      { className: 'row' },
                      l.a.createElement(
                        'div',
                        { className: 'col' },
                        w &&
                          l.a.createElement(
                            'a',
                            { href: w, target: '_blank', rel: 'noreferrer noopener' },
                            l.a.createElement(j, null),
                            'Edit this page',
                          ),
                      ),
                      (y || C) &&
                        l.a.createElement(
                          'div',
                          { className: 'col text--right' },
                          l.a.createElement(
                            'em',
                            null,
                            l.a.createElement(
                              'small',
                              null,
                              'Last updated',
                              ' ',
                              y &&
                                l.a.createElement(
                                  l.a.Fragment,
                                  null,
                                  'on',
                                  ' ',
                                  l.a.createElement(
                                    'time',
                                    { dateTime: new Date(1e3 * y).toISOString(), className: k.a.docLastUpdatedAt },
                                    new Date(1e3 * y).toLocaleDateString(),
                                  ),
                                  C && ' ',
                                ),
                              C && l.a.createElement(l.a.Fragment, null, 'by ', l.a.createElement('strong', null, C)),
                              !1,
                            ),
                          ),
                        ),
                    ),
                  ),
                l.a.createElement('div', { className: 'margin-vert--lg' }, l.a.createElement(s, { metadata: m })),
              ),
            ),
            !N && n.toc && l.a.createElement('div', { className: 'col col--3' }, l.a.createElement(b, { toc: n.toc })),
          ),
        );
      };
    },
  },
]);

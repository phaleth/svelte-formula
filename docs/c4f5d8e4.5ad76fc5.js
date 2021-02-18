(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    81: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(3),
        l = a(0),
        r = a.n(l),
        i = a(92),
        c = a(99),
        o = a(94),
        m = a(22),
        s = a(95),
        u = a(82),
        g = a.n(u),
        d = [
          {
            title: r.a.createElement(r.a.Fragment, null, 'Zero Configuration'),
            imageUrl: 'img/undraw_form.svg',
            description: r.a.createElement(
              r.a.Fragment,
              null,
              'Formula works out-of-the-box with HTML5 forms and validation without the need for any JavaScript configuration',
            ),
          },
          {
            title: r.a.createElement(r.a.Fragment, null, 'Fully Reactive'),
            imageUrl: 'img/undraw_apps.svg',
            description: r.a.createElement(
              r.a.Fragment,
              null,
              'Build powerful reactive data-driven applications with custom validation, enrichment and messages',
            ),
          },
          {
            title: r.a.createElement(r.a.Fragment, null, 'Built for Svelte'),
            imageUrl: 'img/svelte-logo.svg',
            description: r.a.createElement(
              r.a.Fragment,
              null,
              'Easy to install Action and Subscriptions that just work with your application without getting in the way',
            ),
          },
        ];
      function E(e) {
        var t = e.imageUrl,
          a = e.title,
          n = e.description,
          l = Object(s.a)(t);
        return r.a.createElement(
          'div',
          { className: Object(i.a)('col col--4', g.a.feature) },
          l &&
            r.a.createElement(
              'div',
              { className: 'text--center' },
              r.a.createElement('img', { className: g.a.featureImage, src: l, alt: a }),
              r.a.createElement('h3', null, a),
              r.a.createElement('p', null, n),
            ),
        );
      }
      t.default = function () {
        var e = Object(m.default)().siteConfig,
          t = void 0 === e ? {} : e;
        return r.a.createElement(
          c.a,
          { title: t.title + ' - ' + t.tagline, description: '' + t.tagline },
          r.a.createElement(
            'header',
            { className: Object(i.a)('hero hero--primary', g.a.heroBanner) },
            r.a.createElement(
              'div',
              { className: 'container' },
              r.a.createElement('img', { src: Object(s.a)('/img/logo_256.png'), alt: 'The Svelte Formula Logo' }),
              r.a.createElement('h1', { className: 'hero__title' }, t.title),
              r.a.createElement('p', { className: 'hero__subtitle' }, t.tagline),
              r.a.createElement(
                'div',
                { className: g.a.buttons },
                r.a.createElement(
                  o.a,
                  {
                    className: Object(i.a)('button button--outline button--secondary button--lg', g.a.getStarted),
                    to: Object(s.a)('docs/formula'),
                  },
                  'Get Started',
                ),
              ),
            ),
          ),
          r.a.createElement(
            'main',
            null,
            d &&
              d.length > 0 &&
              r.a.createElement(
                'section',
                { className: g.a.features },
                r.a.createElement(
                  'div',
                  { className: 'container' },
                  r.a.createElement(
                    'div',
                    { className: 'row' },
                    d.map(function (e, t) {
                      return r.a.createElement(E, Object(n.a)({ key: t }, e));
                    }),
                  ),
                ),
              ),
          ),
        );
      };
    },
  },
]);

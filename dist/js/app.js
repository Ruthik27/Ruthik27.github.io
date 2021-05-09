!(function (t) {
  function e(i) {
    if (n[i]) return n[i].exports;
    var r = (n[i] = { i: i, l: !1, exports: {} });
    return t[i].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
  }
  var n = {};
  return (
    (e.m = t),
    (e.c = n),
    (e.d = function (t, n, i) {
      e.o(t, n) ||
        Object.defineProperty(t, n, {
          configurable: !1,
          enumerable: !0,
          get: i,
        });
    }),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return e.d(n, "a", n), n;
    }),
    (e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = ""),
    e((e.s = 3))
  );
})([
  function (t, e, n) {
    var i, r;
    !(function (e, n) {
      "use strict";
      "object" == typeof t && "object" == typeof t.exports
        ? (t.exports = e.document
            ? n(e, !0)
            : function (t) {
                if (!t.document)
                  throw new Error("jQuery requires a window with a document");
                return n(t);
              })
        : n(e);
    })("undefined" != typeof window ? window : this, function (n, o) {
      "use strict";
      function a(t, e, n) {
        n = n || pt;
        var i,
          r,
          o = n.createElement("script");
        if (((o.text = t), e))
          for (i in St)
            (r = e[i] || (e.getAttribute && e.getAttribute(i))),
              r && o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function s(t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? yt[bt.call(t)] || "object"
          : typeof t;
      }
      function l(t) {
        var e = !!t && "length" in t && t.length,
          n = s(t);
        return (
          !xt(t) &&
          !Ct(t) &&
          ("array" === n ||
            0 === e ||
            ("number" == typeof e && e > 0 && e - 1 in t))
        );
      }
      function c(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      }
      function u(t, e, n) {
        return xt(e)
          ? Ot.grep(t, function (t, i) {
              return !!e.call(t, i, t) !== n;
            })
          : e.nodeType
          ? Ot.grep(t, function (t) {
              return (t === e) !== n;
            })
          : "string" != typeof e
          ? Ot.grep(t, function (t) {
              return vt.call(e, t) > -1 !== n;
            })
          : Ot.filter(e, t, n);
      }
      function f(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; );
        return t;
      }
      function p(t) {
        var e = {};
        return (
          Ot.each(t.match(Ft) || [], function (t, n) {
            e[n] = !0;
          }),
          e
        );
      }
      function d(t) {
        return t;
      }
      function h(t) {
        throw t;
      }
      function m(t, e, n, i) {
        var r;
        try {
          t && xt((r = t.promise))
            ? r.call(t).done(e).fail(n)
            : t && xt((r = t.then))
            ? r.call(t, e, n)
            : e.apply(void 0, [t].slice(i));
        } catch (t) {
          n.apply(void 0, [t]);
        }
      }
      function g() {
        pt.removeEventListener("DOMContentLoaded", g),
          n.removeEventListener("load", g),
          Ot.ready();
      }
      function v(t, e) {
        return e.toUpperCase();
      }
      function y(t) {
        return t.replace(Ut, "ms-").replace(zt, v);
      }
      function b() {
        this.expando = Ot.expando + b.uid++;
      }
      function w(t) {
        return (
          "true" === t ||
          ("false" !== t &&
            ("null" === t
              ? null
              : t === +t + ""
              ? +t
              : Kt.test(t)
              ? JSON.parse(t)
              : t))
        );
      }
      function _(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
          if (
            ((i = "data-" + e.replace($t, "-$&").toLowerCase()),
            (n = t.getAttribute(i)),
            "string" == typeof n)
          ) {
            try {
              n = w(n);
            } catch (r) {}
            Gt.set(t, e, n);
          } else n = void 0;
        return n;
      }
      function E(t, e, n, i) {
        var r,
          o,
          a = 20,
          s = i
            ? function () {
                return i.cur();
              }
            : function () {
                return Ot.css(t, e, "");
              },
          l = s(),
          c = (n && n[3]) || (Ot.cssNumber[e] ? "" : "px"),
          u =
            t.nodeType &&
            (Ot.cssNumber[e] || ("px" !== c && +l)) &&
            Jt.exec(Ot.css(t, e));
        if (u && u[3] !== c) {
          for (l /= 2, c = c || u[3], u = +l || 1; a--; )
            Ot.style(t, e, u + c),
              (1 - o) * (1 - (o = s() / l || 0.5)) <= 0 && (a = 0),
              (u /= o);
          (u = 2 * u), Ot.style(t, e, u + c), (n = n || []);
        }
        return (
          n &&
            ((u = +u || +l || 0),
            (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = c), (i.start = u), (i.end = r))),
          r
        );
      }
      function T(t) {
        var e,
          n = t.ownerDocument,
          i = t.nodeName,
          r = oe[i];
        return r
          ? r
          : ((e = n.body.appendChild(n.createElement(i))),
            (r = Ot.css(e, "display")),
            e.parentNode.removeChild(e),
            "none" === r && (r = "block"),
            (oe[i] = r),
            r);
      }
      function x(t, e) {
        for (var n, i, r = [], o = 0, a = t.length; o < a; o++)
          (i = t[o]),
            i.style &&
              ((n = i.style.display),
              e
                ? ("none" === n &&
                    ((r[o] = Xt.get(i, "display") || null),
                    r[o] || (i.style.display = "")),
                  "" === i.style.display && ie(i) && (r[o] = T(i)))
                : "none" !== n && ((r[o] = "none"), Xt.set(i, "display", n)));
        for (o = 0; o < a; o++) null != r[o] && (t[o].style.display = r[o]);
        return t;
      }
      function C(t, e) {
        var n;
        return (
          (n =
            "undefined" != typeof t.getElementsByTagName
              ? t.getElementsByTagName(e || "*")
              : "undefined" != typeof t.querySelectorAll
              ? t.querySelectorAll(e || "*")
              : []),
          void 0 === e || (e && c(t, e)) ? Ot.merge([t], n) : n
        );
      }
      function S(t, e) {
        for (var n = 0, i = t.length; n < i; n++)
          Xt.set(t[n], "globalEval", !e || Xt.get(e[n], "globalEval"));
      }
      function A(t, e, n, i, r) {
        for (
          var o,
            a,
            l,
            c,
            u,
            f,
            p = e.createDocumentFragment(),
            d = [],
            h = 0,
            m = t.length;
          h < m;
          h++
        )
          if (((o = t[h]), o || 0 === o))
            if ("object" === s(o)) Ot.merge(d, o.nodeType ? [o] : o);
            else if (ue.test(o)) {
              for (
                a = a || p.appendChild(e.createElement("div")),
                  l = (se.exec(o) || ["", ""])[1].toLowerCase(),
                  c = ce[l] || ce._default,
                  a.innerHTML = c[1] + Ot.htmlPrefilter(o) + c[2],
                  f = c[0];
                f--;

              )
                a = a.lastChild;
              Ot.merge(d, a.childNodes),
                (a = p.firstChild),
                (a.textContent = "");
            } else d.push(e.createTextNode(o));
        for (p.textContent = "", h = 0; (o = d[h++]); )
          if (i && Ot.inArray(o, i) > -1) r && r.push(o);
          else if (
            ((u = ee(o)), (a = C(p.appendChild(o), "script")), u && S(a), n)
          )
            for (f = 0; (o = a[f++]); ) le.test(o.type || "") && n.push(o);
        return p;
      }
      function O() {
        return !0;
      }
      function D() {
        return !1;
      }
      function k(t, e) {
        return (t === I()) == ("focus" === e);
      }
      function I() {
        try {
          return pt.activeElement;
        } catch (t) {}
      }
      function N(t, e, n, i, r, o) {
        var a, s;
        if ("object" == typeof e) {
          "string" != typeof n && ((i = i || n), (n = void 0));
          for (s in e) N(t, s, n, i, e[s], o);
          return t;
        }
        if (
          (null == i && null == r
            ? ((r = n), (i = n = void 0))
            : null == r &&
              ("string" == typeof n
                ? ((r = i), (i = void 0))
                : ((r = i), (i = n), (n = void 0))),
          r === !1)
        )
          r = D;
        else if (!r) return t;
        return (
          1 === o &&
            ((a = r),
            (r = function (t) {
              return Ot().off(t), a.apply(this, arguments);
            }),
            (r.guid = a.guid || (a.guid = Ot.guid++))),
          t.each(function () {
            Ot.event.add(this, e, r, i, n);
          })
        );
      }
      function L(t, e, n) {
        return n
          ? (Xt.set(t, e, !1),
            void Ot.event.add(t, e, {
              namespace: !1,
              handler: function (t) {
                var i,
                  r,
                  o = Xt.get(this, e);
                if (1 & t.isTrigger && this[e]) {
                  if (o.length)
                    (Ot.event.special[e] || {}).delegateType &&
                      t.stopPropagation();
                  else if (
                    ((o = ht.call(arguments)),
                    Xt.set(this, e, o),
                    (i = n(this, e)),
                    this[e](),
                    (r = Xt.get(this, e)),
                    o !== r || i ? Xt.set(this, e, !1) : (r = {}),
                    o !== r)
                  )
                    return (
                      t.stopImmediatePropagation(), t.preventDefault(), r.value
                    );
                } else
                  o.length &&
                    (Xt.set(this, e, {
                      value: Ot.event.trigger(
                        Ot.extend(o[0], Ot.Event.prototype),
                        o.slice(1),
                        this
                      ),
                    }),
                    t.stopImmediatePropagation());
              },
            }))
          : void (void 0 === Xt.get(t, e) && Ot.event.add(t, e, O));
      }
      function H(t, e) {
        return c(t, "table") && c(11 !== e.nodeType ? e : e.firstChild, "tr")
          ? Ot(t).children("tbody")[0] || t
          : t;
      }
      function P(t) {
        return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
      }
      function j(t) {
        return (
          "true/" === (t.type || "").slice(0, 5)
            ? (t.type = t.type.slice(5))
            : t.removeAttribute("type"),
          t
        );
      }
      function M(t, e) {
        var n, i, r, o, a, s, l, c;
        if (1 === e.nodeType) {
          if (
            Xt.hasData(t) &&
            ((o = Xt.access(t)), (a = Xt.set(e, o)), (c = o.events))
          ) {
            delete a.handle, (a.events = {});
            for (r in c)
              for (n = 0, i = c[r].length; n < i; n++)
                Ot.event.add(e, r, c[r][n]);
          }
          Gt.hasData(t) &&
            ((s = Gt.access(t)), (l = Ot.extend({}, s)), Gt.set(e, l));
        }
      }
      function R(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && ae.test(t.type)
          ? (e.checked = t.checked)
          : ("input" !== n && "textarea" !== n) ||
            (e.defaultValue = t.defaultValue);
      }
      function W(t, e, n, i) {
        e = mt.apply([], e);
        var r,
          o,
          s,
          l,
          c,
          u,
          f = 0,
          p = t.length,
          d = p - 1,
          h = e[0],
          m = xt(h);
        if (
          m ||
          (p > 1 && "string" == typeof h && !Tt.checkClone && ge.test(h))
        )
          return t.each(function (r) {
            var o = t.eq(r);
            m && (e[0] = h.call(this, r, o.html())), W(o, e, n, i);
          });
        if (
          p &&
          ((r = A(e, t[0].ownerDocument, !1, t, i)),
          (o = r.firstChild),
          1 === r.childNodes.length && (r = o),
          o || i)
        ) {
          for (s = Ot.map(C(r, "script"), P), l = s.length; f < p; f++)
            (c = r),
              f !== d &&
                ((c = Ot.clone(c, !0, !0)), l && Ot.merge(s, C(c, "script"))),
              n.call(t[f], c, f);
          if (l)
            for (
              u = s[s.length - 1].ownerDocument, Ot.map(s, j), f = 0;
              f < l;
              f++
            )
              (c = s[f]),
                le.test(c.type || "") &&
                  !Xt.access(c, "globalEval") &&
                  Ot.contains(u, c) &&
                  (c.src && "module" !== (c.type || "").toLowerCase()
                    ? Ot._evalUrl &&
                      !c.noModule &&
                      Ot._evalUrl(c.src, {
                        nonce: c.nonce || c.getAttribute("nonce"),
                      })
                    : a(c.textContent.replace(ve, ""), c, u));
        }
        return t;
      }
      function F(t, e, n) {
        for (var i, r = e ? Ot.filter(e, t) : t, o = 0; null != (i = r[o]); o++)
          n || 1 !== i.nodeType || Ot.cleanData(C(i)),
            i.parentNode &&
              (n && ee(i) && S(C(i, "script")), i.parentNode.removeChild(i));
        return t;
      }
      function q(t, e, n) {
        var i,
          r,
          o,
          a,
          s = t.style;
        return (
          (n = n || be(t)),
          n &&
            ((a = n.getPropertyValue(e) || n[e]),
            "" !== a || ee(t) || (a = Ot.style(t, e)),
            !Tt.pixelBoxStyles() &&
              ye.test(a) &&
              we.test(e) &&
              ((i = s.width),
              (r = s.minWidth),
              (o = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = a),
              (a = n.width),
              (s.width = i),
              (s.minWidth = r),
              (s.maxWidth = o))),
          void 0 !== a ? a + "" : a
        );
      }
      function B(t, e) {
        return {
          get: function () {
            return t()
              ? void delete this.get
              : (this.get = e).apply(this, arguments);
          },
        };
      }
      function V(t) {
        for (var e = t[0].toUpperCase() + t.slice(1), n = _e.length; n--; )
          if (((t = _e[n] + e), t in Ee)) return t;
      }
      function U(t) {
        var e = Ot.cssProps[t] || Te[t];
        return e ? e : t in Ee ? t : (Te[t] = V(t) || t);
      }
      function z(t, e, n) {
        var i = Jt.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
      }
      function Y(t, e, n, i, r, o) {
        var a = "width" === e ? 1 : 0,
          s = 0,
          l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === n && (l += Ot.css(t, n + Zt[a], !0, r)),
            i
              ? ("content" === n && (l -= Ot.css(t, "padding" + Zt[a], !0, r)),
                "margin" !== n &&
                  (l -= Ot.css(t, "border" + Zt[a] + "Width", !0, r)))
              : ((l += Ot.css(t, "padding" + Zt[a], !0, r)),
                "padding" !== n
                  ? (l += Ot.css(t, "border" + Zt[a] + "Width", !0, r))
                  : (s += Ot.css(t, "border" + Zt[a] + "Width", !0, r)));
        return (
          !i &&
            o >= 0 &&
            (l +=
              Math.max(
                0,
                Math.ceil(
                  t["offset" + e[0].toUpperCase() + e.slice(1)] -
                    o -
                    l -
                    s -
                    0.5
                )
              ) || 0),
          l
        );
      }
      function X(t, e, n) {
        var i = be(t),
          r = !Tt.boxSizingReliable() || n,
          o = r && "border-box" === Ot.css(t, "boxSizing", !1, i),
          a = o,
          s = q(t, e, i),
          l = "offset" + e[0].toUpperCase() + e.slice(1);
        if (ye.test(s)) {
          if (!n) return s;
          s = "auto";
        }
        return (
          ((!Tt.boxSizingReliable() && o) ||
            "auto" === s ||
            (!parseFloat(s) && "inline" === Ot.css(t, "display", !1, i))) &&
            t.getClientRects().length &&
            ((o = "border-box" === Ot.css(t, "boxSizing", !1, i)),
            (a = l in t),
            a && (s = t[l])),
          (s = parseFloat(s) || 0),
          s + Y(t, e, n || (o ? "border" : "content"), a, i, s) + "px"
        );
      }
      function G(t, e, n, i, r) {
        return new G.prototype.init(t, e, n, i, r);
      }
      function K() {
        De &&
          (pt.hidden === !1 && n.requestAnimationFrame
            ? n.requestAnimationFrame(K)
            : n.setTimeout(K, Ot.fx.interval),
          Ot.fx.tick());
      }
      function $() {
        return (
          n.setTimeout(function () {
            Oe = void 0;
          }),
          (Oe = Date.now())
        );
      }
      function Q(t, e) {
        var n,
          i = 0,
          r = { height: t };
        for (e = e ? 1 : 0; i < 4; i += 2 - e)
          (n = Zt[i]), (r["margin" + n] = r["padding" + n] = t);
        return e && (r.opacity = r.width = t), r;
      }
      function J(t, e, n) {
        for (
          var i,
            r = (et.tweeners[e] || []).concat(et.tweeners["*"]),
            o = 0,
            a = r.length;
          o < a;
          o++
        )
          if ((i = r[o].call(n, e, t))) return i;
      }
      function Z(t, e, n) {
        var i,
          r,
          o,
          a,
          s,
          l,
          c,
          u,
          f = "width" in e || "height" in e,
          p = this,
          d = {},
          h = t.style,
          m = t.nodeType && ie(t),
          g = Xt.get(t, "fxshow");
        n.queue ||
          ((a = Ot._queueHooks(t, "fx")),
          null == a.unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, Ot.queue(t, "fx").length || a.empty.fire();
            });
          }));
        for (i in e)
          if (((r = e[i]), ke.test(r))) {
            if (
              (delete e[i],
              (o = o || "toggle" === r),
              r === (m ? "hide" : "show"))
            ) {
              if ("show" !== r || !g || void 0 === g[i]) continue;
              m = !0;
            }
            d[i] = (g && g[i]) || Ot.style(t, i);
          }
        if (((l = !Ot.isEmptyObject(e)), l || !Ot.isEmptyObject(d))) {
          f &&
            1 === t.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            (c = g && g.display),
            null == c && (c = Xt.get(t, "display")),
            (u = Ot.css(t, "display")),
            "none" === u &&
              (c
                ? (u = c)
                : (x([t], !0),
                  (c = t.style.display || c),
                  (u = Ot.css(t, "display")),
                  x([t]))),
            ("inline" === u || ("inline-block" === u && null != c)) &&
              "none" === Ot.css(t, "float") &&
              (l ||
                (p.done(function () {
                  h.display = c;
                }),
                null == c && ((u = h.display), (c = "none" === u ? "" : u))),
              (h.display = "inline-block"))),
            n.overflow &&
              ((h.overflow = "hidden"),
              p.always(function () {
                (h.overflow = n.overflow[0]),
                  (h.overflowX = n.overflow[1]),
                  (h.overflowY = n.overflow[2]);
              })),
            (l = !1);
          for (i in d)
            l ||
              (g
                ? "hidden" in g && (m = g.hidden)
                : (g = Xt.access(t, "fxshow", { display: c })),
              o && (g.hidden = !m),
              m && x([t], !0),
              p.done(function () {
                m || x([t]), Xt.remove(t, "fxshow");
                for (i in d) Ot.style(t, i, d[i]);
              })),
              (l = J(m ? g[i] : 0, i, p)),
              i in g ||
                ((g[i] = l.start), m && ((l.end = l.start), (l.start = 0)));
        }
      }
      function tt(t, e) {
        var n, i, r, o, a;
        for (n in t)
          if (
            ((i = y(n)),
            (r = e[i]),
            (o = t[n]),
            Array.isArray(o) && ((r = o[1]), (o = t[n] = o[0])),
            n !== i && ((t[i] = o), delete t[n]),
            (a = Ot.cssHooks[i]),
            a && "expand" in a)
          ) {
            (o = a.expand(o)), delete t[i];
            for (n in o) n in t || ((t[n] = o[n]), (e[n] = r));
          } else e[i] = r;
      }
      function et(t, e, n) {
        var i,
          r,
          o = 0,
          a = et.prefilters.length,
          s = Ot.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (r) return !1;
            for (
              var e = Oe || $(),
                n = Math.max(0, c.startTime + c.duration - e),
                i = n / c.duration || 0,
                o = 1 - i,
                a = 0,
                l = c.tweens.length;
              a < l;
              a++
            )
              c.tweens[a].run(o);
            return (
              s.notifyWith(t, [c, o, n]),
              o < 1 && l
                ? n
                : (l || s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c]), !1)
            );
          },
          c = s.promise({
            elem: t,
            props: Ot.extend({}, e),
            opts: Ot.extend(
              !0,
              { specialEasing: {}, easing: Ot.easing._default },
              n
            ),
            originalProperties: e,
            originalOptions: n,
            startTime: Oe || $(),
            duration: n.duration,
            tweens: [],
            createTween: function (e, n) {
              var i = Ot.Tween(
                t,
                c.opts,
                e,
                n,
                c.opts.specialEasing[e] || c.opts.easing
              );
              return c.tweens.push(i), i;
            },
            stop: function (e) {
              var n = 0,
                i = e ? c.tweens.length : 0;
              if (r) return this;
              for (r = !0; n < i; n++) c.tweens[n].run(1);
              return (
                e
                  ? (s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c, e]))
                  : s.rejectWith(t, [c, e]),
                this
              );
            },
          }),
          u = c.props;
        for (tt(u, c.opts.specialEasing); o < a; o++)
          if ((i = et.prefilters[o].call(c, t, u, c.opts)))
            return (
              xt(i.stop) &&
                (Ot._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
              i
            );
        return (
          Ot.map(u, J, c),
          xt(c.opts.start) && c.opts.start.call(t, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          Ot.fx.timer(Ot.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
          c
        );
      }
      function nt(t) {
        var e = t.match(Ft) || [];
        return e.join(" ");
      }
      function it(t) {
        return (t.getAttribute && t.getAttribute("class")) || "";
      }
      function rt(t) {
        return Array.isArray(t)
          ? t
          : "string" == typeof t
          ? t.match(Ft) || []
          : [];
      }
      function ot(t, e, n, i) {
        var r;
        if (Array.isArray(e))
          Ot.each(e, function (e, r) {
            n || Be.test(t)
              ? i(t, r)
              : ot(
                  t + "[" + ("object" == typeof r && null != r ? e : "") + "]",
                  r,
                  n,
                  i
                );
          });
        else if (n || "object" !== s(e)) i(t, e);
        else for (r in e) ot(t + "[" + r + "]", e[r], n, i);
      }
      function at(t) {
        return function (e, n) {
          "string" != typeof e && ((n = e), (e = "*"));
          var i,
            r = 0,
            o = e.toLowerCase().match(Ft) || [];
          if (xt(n))
            for (; (i = o[r++]); )
              "+" === i[0]
                ? ((i = i.slice(1) || "*"), (t[i] = t[i] || []).unshift(n))
                : (t[i] = t[i] || []).push(n);
        };
      }
      function st(t, e, n, i) {
        function r(s) {
          var l;
          return (
            (o[s] = !0),
            Ot.each(t[s] || [], function (t, s) {
              var c = s(e, n, i);
              return "string" != typeof c || a || o[c]
                ? a
                  ? !(l = c)
                  : void 0
                : (e.dataTypes.unshift(c), r(c), !1);
            }),
            l
          );
        }
        var o = {},
          a = t === tn;
        return r(e.dataTypes[0]) || (!o["*"] && r("*"));
      }
      function lt(t, e) {
        var n,
          i,
          r = Ot.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && Ot.extend(!0, t, i), t;
      }
      function ct(t, e, n) {
        for (var i, r, o, a, s = t.contents, l = t.dataTypes; "*" === l[0]; )
          l.shift(),
            void 0 === i &&
              (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
          for (r in s)
            if (s[r] && s[r].test(i)) {
              l.unshift(r);
              break;
            }
        if (l[0] in n) o = l[0];
        else {
          for (r in n) {
            if (!l[0] || t.converters[r + " " + l[0]]) {
              o = r;
              break;
            }
            a || (a = r);
          }
          o = o || a;
        }
        if (o) return o !== l[0] && l.unshift(o), n[o];
      }
      function ut(t, e, n, i) {
        var r,
          o,
          a,
          s,
          l,
          c = {},
          u = t.dataTypes.slice();
        if (u[1]) for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
        for (o = u.shift(); o; )
          if (
            (t.responseFields[o] && (n[t.responseFields[o]] = e),
            !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
            (l = o),
            (o = u.shift()))
          )
            if ("*" === o) o = l;
            else if ("*" !== l && l !== o) {
              if (((a = c[l + " " + o] || c["* " + o]), !a))
                for (r in c)
                  if (
                    ((s = r.split(" ")),
                    s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]]))
                  ) {
                    a === !0
                      ? (a = c[r])
                      : c[r] !== !0 && ((o = s[0]), u.unshift(s[1]));
                    break;
                  }
              if (a !== !0)
                if (a && t["throws"]) e = a(e);
                else
                  try {
                    e = a(e);
                  } catch (f) {
                    return {
                      state: "parsererror",
                      error: a ? f : "No conversion from " + l + " to " + o,
                    };
                  }
            }
        return { state: "success", data: e };
      }
      var ft = [],
        pt = n.document,
        dt = Object.getPrototypeOf,
        ht = ft.slice,
        mt = ft.concat,
        gt = ft.push,
        vt = ft.indexOf,
        yt = {},
        bt = yt.toString,
        wt = yt.hasOwnProperty,
        _t = wt.toString,
        Et = _t.call(Object),
        Tt = {},
        xt = function (t) {
          return "function" == typeof t && "number" != typeof t.nodeType;
        },
        Ct = function (t) {
          return null != t && t === t.window;
        },
        St = { type: !0, src: !0, nonce: !0, noModule: !0 },
        At = "3.4.1",
        Ot = function (t, e) {
          return new Ot.fn.init(t, e);
        },
        Dt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (Ot.fn = Ot.prototype = {
        jquery: At,
        constructor: Ot,
        length: 0,
        toArray: function () {
          return ht.call(this);
        },
        get: function (t) {
          return null == t
            ? ht.call(this)
            : t < 0
            ? this[t + this.length]
            : this[t];
        },
        pushStack: function (t) {
          var e = Ot.merge(this.constructor(), t);
          return (e.prevObject = this), e;
        },
        each: function (t) {
          return Ot.each(this, t);
        },
        map: function (t) {
          return this.pushStack(
            Ot.map(this, function (e, n) {
              return t.call(e, n, e);
            })
          );
        },
        slice: function () {
          return this.pushStack(ht.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (t) {
          var e = this.length,
            n = +t + (t < 0 ? e : 0);
          return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: gt,
        sort: ft.sort,
        splice: ft.splice,
      }),
        (Ot.extend = Ot.fn.extend = function () {
          var t,
            e,
            n,
            i,
            r,
            o,
            a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
          for (
            "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
              "object" == typeof a || xt(a) || (a = {}),
              s === l && ((a = this), s--);
            s < l;
            s++
          )
            if (null != (t = arguments[s]))
              for (e in t)
                (i = t[e]),
                  "__proto__" !== e &&
                    a !== i &&
                    (c && i && (Ot.isPlainObject(i) || (r = Array.isArray(i)))
                      ? ((n = a[e]),
                        (o =
                          r && !Array.isArray(n)
                            ? []
                            : r || Ot.isPlainObject(n)
                            ? n
                            : {}),
                        (r = !1),
                        (a[e] = Ot.extend(c, o, i)))
                      : void 0 !== i && (a[e] = i));
          return a;
        }),
        Ot.extend({
          expando: "jQuery" + (At + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (t) {
            throw new Error(t);
          },
          noop: function () {},
          isPlainObject: function (t) {
            var e, n;
            return (
              !(!t || "[object Object]" !== bt.call(t)) &&
              (!(e = dt(t)) ||
                ((n = wt.call(e, "constructor") && e.constructor),
                "function" == typeof n && _t.call(n) === Et))
            );
          },
          isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0;
          },
          globalEval: function (t, e) {
            a(t, { nonce: e && e.nonce });
          },
          each: function (t, e) {
            var n,
              i = 0;
            if (l(t))
              for (n = t.length; i < n && e.call(t[i], i, t[i]) !== !1; i++);
            else for (i in t) if (e.call(t[i], i, t[i]) === !1) break;
            return t;
          },
          trim: function (t) {
            return null == t ? "" : (t + "").replace(Dt, "");
          },
          makeArray: function (t, e) {
            var n = e || [];
            return (
              null != t &&
                (l(Object(t))
                  ? Ot.merge(n, "string" == typeof t ? [t] : t)
                  : gt.call(n, t)),
              n
            );
          },
          inArray: function (t, e, n) {
            return null == e ? -1 : vt.call(e, t, n);
          },
          merge: function (t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n; i++)
              t[r++] = e[i];
            return (t.length = r), t;
          },
          grep: function (t, e, n) {
            for (var i, r = [], o = 0, a = t.length, s = !n; o < a; o++)
              (i = !e(t[o], o)), i !== s && r.push(t[o]);
            return r;
          },
          map: function (t, e, n) {
            var i,
              r,
              o = 0,
              a = [];
            if (l(t))
              for (i = t.length; o < i; o++)
                (r = e(t[o], o, n)), null != r && a.push(r);
            else for (o in t) (r = e(t[o], o, n)), null != r && a.push(r);
            return mt.apply([], a);
          },
          guid: 1,
          support: Tt,
        }),
        "function" == typeof Symbol &&
          (Ot.fn[Symbol.iterator] = ft[Symbol.iterator]),
        Ot.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (t, e) {
            yt["[object " + e + "]"] = e.toLowerCase();
          }
        );
      var kt = (function (t) {
        function e(t, e, n, i) {
          var r,
            o,
            a,
            s,
            l,
            c,
            u,
            p = e && e.ownerDocument,
            h = e ? e.nodeType : 9;
          if (
            ((n = n || []),
            "string" != typeof t || !t || (1 !== h && 9 !== h && 11 !== h))
          )
            return n;
          if (
            !i &&
            ((e ? e.ownerDocument || e : q) !== L && N(e), (e = e || L), P)
          ) {
            if (11 !== h && (l = bt.exec(t)))
              if ((r = l[1])) {
                if (9 === h) {
                  if (!(a = e.getElementById(r))) return n;
                  if (a.id === r) return n.push(a), n;
                } else if (
                  p &&
                  (a = p.getElementById(r)) &&
                  W(e, a) &&
                  a.id === r
                )
                  return n.push(a), n;
              } else {
                if (l[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
                if (
                  (r = l[3]) &&
                  E.getElementsByClassName &&
                  e.getElementsByClassName
                )
                  return Z.apply(n, e.getElementsByClassName(r)), n;
              }
            if (
              E.qsa &&
              !X[t + " "] &&
              (!j || !j.test(t)) &&
              (1 !== h || "object" !== e.nodeName.toLowerCase())
            ) {
              if (((u = t), (p = e), 1 === h && ft.test(t))) {
                for (
                  (s = e.getAttribute("id"))
                    ? (s = s.replace(Tt, xt))
                    : e.setAttribute("id", (s = F)),
                    c = S(t),
                    o = c.length;
                  o--;

                )
                  c[o] = "#" + s + " " + d(c[o]);
                (u = c.join(",")), (p = (wt.test(t) && f(e.parentNode)) || e);
              }
              try {
                return Z.apply(n, p.querySelectorAll(u)), n;
              } catch (m) {
                X(t, !0);
              } finally {
                s === F && e.removeAttribute("id");
              }
            }
          }
          return O(t.replace(lt, "$1"), e, n, i);
        }
        function n() {
          function t(n, i) {
            return (
              e.push(n + " ") > T.cacheLength && delete t[e.shift()],
              (t[n + " "] = i)
            );
          }
          var e = [];
          return t;
        }
        function i(t) {
          return (t[F] = !0), t;
        }
        function r(t) {
          var e = L.createElement("fieldset");
          try {
            return !!t(e);
          } catch (n) {
            return !1;
          } finally {
            e.parentNode && e.parentNode.removeChild(e), (e = null);
          }
        }
        function o(t, e) {
          for (var n = t.split("|"), i = n.length; i--; )
            T.attrHandle[n[i]] = e;
        }
        function a(t, e) {
          var n = e && t,
            i =
              n &&
              1 === t.nodeType &&
              1 === e.nodeType &&
              t.sourceIndex - e.sourceIndex;
          if (i) return i;
          if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
          return t ? 1 : -1;
        }
        function s(t) {
          return function (e) {
            var n = e.nodeName.toLowerCase();
            return "input" === n && e.type === t;
          };
        }
        function l(t) {
          return function (e) {
            var n = e.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && e.type === t;
          };
        }
        function c(t) {
          return function (e) {
            return "form" in e
              ? e.parentNode && e.disabled === !1
                ? "label" in e
                  ? "label" in e.parentNode
                    ? e.parentNode.disabled === t
                    : e.disabled === t
                  : e.isDisabled === t || (e.isDisabled !== !t && St(e) === t)
                : e.disabled === t
              : "label" in e && e.disabled === t;
          };
        }
        function u(t) {
          return i(function (e) {
            return (
              (e = +e),
              i(function (n, i) {
                for (var r, o = t([], n.length, e), a = o.length; a--; )
                  n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
              })
            );
          });
        }
        function f(t) {
          return t && "undefined" != typeof t.getElementsByTagName && t;
        }
        function p() {}
        function d(t) {
          for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
          return i;
        }
        function h(t, e, n) {
          var i = e.dir,
            r = e.next,
            o = r || i,
            a = n && "parentNode" === o,
            s = V++;
          return e.first
            ? function (e, n, r) {
                for (; (e = e[i]); )
                  if (1 === e.nodeType || a) return t(e, n, r);
                return !1;
              }
            : function (e, n, l) {
                var c,
                  u,
                  f,
                  p = [B, s];
                if (l) {
                  for (; (e = e[i]); )
                    if ((1 === e.nodeType || a) && t(e, n, l)) return !0;
                } else
                  for (; (e = e[i]); )
                    if (1 === e.nodeType || a)
                      if (
                        ((f = e[F] || (e[F] = {})),
                        (u = f[e.uniqueID] || (f[e.uniqueID] = {})),
                        r && r === e.nodeName.toLowerCase())
                      )
                        e = e[i] || e;
                      else {
                        if ((c = u[o]) && c[0] === B && c[1] === s)
                          return (p[2] = c[2]);
                        if (((u[o] = p), (p[2] = t(e, n, l)))) return !0;
                      }
                return !1;
              };
        }
        function m(t) {
          return t.length > 1
            ? function (e, n, i) {
                for (var r = t.length; r--; ) if (!t[r](e, n, i)) return !1;
                return !0;
              }
            : t[0];
        }
        function g(t, n, i) {
          for (var r = 0, o = n.length; r < o; r++) e(t, n[r], i);
          return i;
        }
        function v(t, e, n, i, r) {
          for (var o, a = [], s = 0, l = t.length, c = null != e; s < l; s++)
            (o = t[s]) && ((n && !n(o, i, r)) || (a.push(o), c && e.push(s)));
          return a;
        }
        function y(t, e, n, r, o, a) {
          return (
            r && !r[F] && (r = y(r)),
            o && !o[F] && (o = y(o, a)),
            i(function (i, a, s, l) {
              var c,
                u,
                f,
                p = [],
                d = [],
                h = a.length,
                m = i || g(e || "*", s.nodeType ? [s] : s, []),
                y = !t || (!i && e) ? m : v(m, p, t, s, l),
                b = n ? (o || (i ? t : h || r) ? [] : a) : y;
              if ((n && n(y, b, s, l), r))
                for (c = v(b, d), r(c, [], s, l), u = c.length; u--; )
                  (f = c[u]) && (b[d[u]] = !(y[d[u]] = f));
              if (i) {
                if (o || t) {
                  if (o) {
                    for (c = [], u = b.length; u--; )
                      (f = b[u]) && c.push((y[u] = f));
                    o(null, (b = []), c, l);
                  }
                  for (u = b.length; u--; )
                    (f = b[u]) &&
                      (c = o ? et(i, f) : p[u]) > -1 &&
                      (i[c] = !(a[c] = f));
                }
              } else (b = v(b === a ? b.splice(h, b.length) : b)), o ? o(null, a, b, l) : Z.apply(a, b);
            })
          );
        }
        function b(t) {
          for (
            var e,
              n,
              i,
              r = t.length,
              o = T.relative[t[0].type],
              a = o || T.relative[" "],
              s = o ? 1 : 0,
              l = h(
                function (t) {
                  return t === e;
                },
                a,
                !0
              ),
              c = h(
                function (t) {
                  return et(e, t) > -1;
                },
                a,
                !0
              ),
              u = [
                function (t, n, i) {
                  var r =
                    (!o && (i || n !== D)) ||
                    ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                  return (e = null), r;
                },
              ];
            s < r;
            s++
          )
            if ((n = T.relative[t[s].type])) u = [h(m(u), n)];
            else {
              if (((n = T.filter[t[s].type].apply(null, t[s].matches)), n[F])) {
                for (i = ++s; i < r && !T.relative[t[i].type]; i++);
                return y(
                  s > 1 && m(u),
                  s > 1 &&
                    d(
                      t
                        .slice(0, s - 1)
                        .concat({ value: " " === t[s - 2].type ? "*" : "" })
                    ).replace(lt, "$1"),
                  n,
                  s < i && b(t.slice(s, i)),
                  i < r && b((t = t.slice(i))),
                  i < r && d(t)
                );
              }
              u.push(n);
            }
          return m(u);
        }
        function w(t, n) {
          var r = n.length > 0,
            o = t.length > 0,
            a = function (i, a, s, l, c) {
              var u,
                f,
                p,
                d = 0,
                h = "0",
                m = i && [],
                g = [],
                y = D,
                b = i || (o && T.find.TAG("*", c)),
                w = (B += null == y ? 1 : Math.random() || 0.1),
                _ = b.length;
              for (
                c && (D = a === L || a || c);
                h !== _ && null != (u = b[h]);
                h++
              ) {
                if (o && u) {
                  for (
                    f = 0, a || u.ownerDocument === L || (N(u), (s = !P));
                    (p = t[f++]);

                  )
                    if (p(u, a || L, s)) {
                      l.push(u);
                      break;
                    }
                  c && (B = w);
                }
                r && ((u = !p && u) && d--, i && m.push(u));
              }
              if (((d += h), r && h !== d)) {
                for (f = 0; (p = n[f++]); ) p(m, g, a, s);
                if (i) {
                  if (d > 0) for (; h--; ) m[h] || g[h] || (g[h] = Q.call(l));
                  g = v(g);
                }
                Z.apply(l, g),
                  c &&
                    !i &&
                    g.length > 0 &&
                    d + n.length > 1 &&
                    e.uniqueSort(l);
              }
              return c && ((B = w), (D = y)), m;
            };
          return r ? i(a) : a;
        }
        var _,
          E,
          T,
          x,
          C,
          S,
          A,
          O,
          D,
          k,
          I,
          N,
          L,
          H,
          P,
          j,
          M,
          R,
          W,
          F = "sizzle" + 1 * new Date(),
          q = t.document,
          B = 0,
          V = 0,
          U = n(),
          z = n(),
          Y = n(),
          X = n(),
          G = function (t, e) {
            return t === e && (I = !0), 0;
          },
          K = {}.hasOwnProperty,
          $ = [],
          Q = $.pop,
          J = $.push,
          Z = $.push,
          tt = $.slice,
          et = function (t, e) {
            for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
            return -1;
          },
          nt =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          it = "[\\x20\\t\\r\\n\\f]",
          rt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          ot =
            "\\[" +
            it +
            "*(" +
            rt +
            ")(?:" +
            it +
            "*([*^$|!~]?=)" +
            it +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            rt +
            "))|)" +
            it +
            "*\\]",
          at =
            ":(" +
            rt +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            ot +
            ")*)|.*)\\)|)",
          st = new RegExp(it + "+", "g"),
          lt = new RegExp(
            "^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$",
            "g"
          ),
          ct = new RegExp("^" + it + "*," + it + "*"),
          ut = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
          ft = new RegExp(it + "|>"),
          pt = new RegExp(at),
          dt = new RegExp("^" + rt + "$"),
          ht = {
            ID: new RegExp("^#(" + rt + ")"),
            CLASS: new RegExp("^\\.(" + rt + ")"),
            TAG: new RegExp("^(" + rt + "|[*])"),
            ATTR: new RegExp("^" + ot),
            PSEUDO: new RegExp("^" + at),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                it +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                it +
                "*(?:([+-]|)" +
                it +
                "*(\\d+)|))" +
                it +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + nt + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                it +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                it +
                "*((?:-\\d)?\\d*)" +
                it +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          mt = /HTML$/i,
          gt = /^(?:input|select|textarea|button)$/i,
          vt = /^h\d$/i,
          yt = /^[^{]+\{\s*\[native \w/,
          bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          wt = /[+~]/,
          _t = new RegExp(
            "\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)",
            "ig"
          ),
          Et = function (t, e, n) {
            var i = "0x" + e - 65536;
            return i !== i || n
              ? e
              : i < 0
              ? String.fromCharCode(i + 65536)
              : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
          },
          Tt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          xt = function (t, e) {
            return e
              ? "\0" === t
                ? "�"
                : t.slice(0, -1) +
                  "\\" +
                  t.charCodeAt(t.length - 1).toString(16) +
                  " "
              : "\\" + t;
          },
          Ct = function () {
            N();
          },
          St = h(
            function (t) {
              return (
                t.disabled === !0 && "fieldset" === t.nodeName.toLowerCase()
              );
            },
            { dir: "parentNode", next: "legend" }
          );
        try {
          Z.apply(($ = tt.call(q.childNodes)), q.childNodes),
            $[q.childNodes.length].nodeType;
        } catch (At) {
          Z = {
            apply: $.length
              ? function (t, e) {
                  J.apply(t, tt.call(e));
                }
              : function (t, e) {
                  for (var n = t.length, i = 0; (t[n++] = e[i++]); );
                  t.length = n - 1;
                },
          };
        }
        (E = e.support = {}),
          (C = e.isXML = function (t) {
            var e = t.namespaceURI,
              n = (t.ownerDocument || t).documentElement;
            return !mt.test(e || (n && n.nodeName) || "HTML");
          }),
          (N = e.setDocument = function (t) {
            var e,
              n,
              i = t ? t.ownerDocument || t : q;
            return i !== L && 9 === i.nodeType && i.documentElement
              ? ((L = i),
                (H = L.documentElement),
                (P = !C(L)),
                q !== L &&
                  (n = L.defaultView) &&
                  n.top !== n &&
                  (n.addEventListener
                    ? n.addEventListener("unload", Ct, !1)
                    : n.attachEvent && n.attachEvent("onunload", Ct)),
                (E.attributes = r(function (t) {
                  return (t.className = "i"), !t.getAttribute("className");
                })),
                (E.getElementsByTagName = r(function (t) {
                  return (
                    t.appendChild(L.createComment("")),
                    !t.getElementsByTagName("*").length
                  );
                })),
                (E.getElementsByClassName = yt.test(L.getElementsByClassName)),
                (E.getById = r(function (t) {
                  return (
                    (H.appendChild(t).id = F),
                    !L.getElementsByName || !L.getElementsByName(F).length
                  );
                })),
                E.getById
                  ? ((T.filter.ID = function (t) {
                      var e = t.replace(_t, Et);
                      return function (t) {
                        return t.getAttribute("id") === e;
                      };
                    }),
                    (T.find.ID = function (t, e) {
                      if ("undefined" != typeof e.getElementById && P) {
                        var n = e.getElementById(t);
                        return n ? [n] : [];
                      }
                    }))
                  : ((T.filter.ID = function (t) {
                      var e = t.replace(_t, Et);
                      return function (t) {
                        var n =
                          "undefined" != typeof t.getAttributeNode &&
                          t.getAttributeNode("id");
                        return n && n.value === e;
                      };
                    }),
                    (T.find.ID = function (t, e) {
                      if ("undefined" != typeof e.getElementById && P) {
                        var n,
                          i,
                          r,
                          o = e.getElementById(t);
                        if (o) {
                          if (
                            ((n = o.getAttributeNode("id")), n && n.value === t)
                          )
                            return [o];
                          for (
                            r = e.getElementsByName(t), i = 0;
                            (o = r[i++]);

                          )
                            if (
                              ((n = o.getAttributeNode("id")),
                              n && n.value === t)
                            )
                              return [o];
                        }
                        return [];
                      }
                    })),
                (T.find.TAG = E.getElementsByTagName
                  ? function (t, e) {
                      return "undefined" != typeof e.getElementsByTagName
                        ? e.getElementsByTagName(t)
                        : E.qsa
                        ? e.querySelectorAll(t)
                        : void 0;
                    }
                  : function (t, e) {
                      var n,
                        i = [],
                        r = 0,
                        o = e.getElementsByTagName(t);
                      if ("*" === t) {
                        for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                        return i;
                      }
                      return o;
                    }),
                (T.find.CLASS =
                  E.getElementsByClassName &&
                  function (t, e) {
                    if ("undefined" != typeof e.getElementsByClassName && P)
                      return e.getElementsByClassName(t);
                  }),
                (M = []),
                (j = []),
                (E.qsa = yt.test(L.querySelectorAll)) &&
                  (r(function (t) {
                    (H.appendChild(t).innerHTML =
                      "<a id='" +
                      F +
                      "'></a><select id='" +
                      F +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      t.querySelectorAll("[msallowcapture^='']").length &&
                        j.push("[*^$]=" + it + "*(?:''|\"\")"),
                      t.querySelectorAll("[selected]").length ||
                        j.push("\\[" + it + "*(?:value|" + nt + ")"),
                      t.querySelectorAll("[id~=" + F + "-]").length ||
                        j.push("~="),
                      t.querySelectorAll(":checked").length ||
                        j.push(":checked"),
                      t.querySelectorAll("a#" + F + "+*").length ||
                        j.push(".#.+[+~]");
                  }),
                  r(function (t) {
                    t.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = L.createElement("input");
                    e.setAttribute("type", "hidden"),
                      t.appendChild(e).setAttribute("name", "D"),
                      t.querySelectorAll("[name=d]").length &&
                        j.push("name" + it + "*[*^$|!~]?="),
                      2 !== t.querySelectorAll(":enabled").length &&
                        j.push(":enabled", ":disabled"),
                      (H.appendChild(t).disabled = !0),
                      2 !== t.querySelectorAll(":disabled").length &&
                        j.push(":enabled", ":disabled"),
                      t.querySelectorAll("*,:x"),
                      j.push(",.*:");
                  })),
                (E.matchesSelector = yt.test(
                  (R =
                    H.matches ||
                    H.webkitMatchesSelector ||
                    H.mozMatchesSelector ||
                    H.oMatchesSelector ||
                    H.msMatchesSelector)
                )) &&
                  r(function (t) {
                    (E.disconnectedMatch = R.call(t, "*")),
                      R.call(t, "[s!='']:x"),
                      M.push("!=", at);
                  }),
                (j = j.length && new RegExp(j.join("|"))),
                (M = M.length && new RegExp(M.join("|"))),
                (e = yt.test(H.compareDocumentPosition)),
                (W =
                  e || yt.test(H.contains)
                    ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                          i = e && e.parentNode;
                        return (
                          t === i ||
                          !(
                            !i ||
                            1 !== i.nodeType ||
                            !(n.contains
                              ? n.contains(i)
                              : t.compareDocumentPosition &&
                                16 & t.compareDocumentPosition(i))
                          )
                        );
                      }
                    : function (t, e) {
                        if (e)
                          for (; (e = e.parentNode); ) if (e === t) return !0;
                        return !1;
                      }),
                (G = e
                  ? function (t, e) {
                      if (t === e) return (I = !0), 0;
                      var n =
                        !t.compareDocumentPosition - !e.compareDocumentPosition;
                      return n
                        ? n
                        : ((n =
                            (t.ownerDocument || t) === (e.ownerDocument || e)
                              ? t.compareDocumentPosition(e)
                              : 1),
                          1 & n ||
                          (!E.sortDetached &&
                            e.compareDocumentPosition(t) === n)
                            ? t === L || (t.ownerDocument === q && W(q, t))
                              ? -1
                              : e === L || (e.ownerDocument === q && W(q, e))
                              ? 1
                              : k
                              ? et(k, t) - et(k, e)
                              : 0
                            : 4 & n
                            ? -1
                            : 1);
                    }
                  : function (t, e) {
                      if (t === e) return (I = !0), 0;
                      var n,
                        i = 0,
                        r = t.parentNode,
                        o = e.parentNode,
                        s = [t],
                        l = [e];
                      if (!r || !o)
                        return t === L
                          ? -1
                          : e === L
                          ? 1
                          : r
                          ? -1
                          : o
                          ? 1
                          : k
                          ? et(k, t) - et(k, e)
                          : 0;
                      if (r === o) return a(t, e);
                      for (n = t; (n = n.parentNode); ) s.unshift(n);
                      for (n = e; (n = n.parentNode); ) l.unshift(n);
                      for (; s[i] === l[i]; ) i++;
                      return i
                        ? a(s[i], l[i])
                        : s[i] === q
                        ? -1
                        : l[i] === q
                        ? 1
                        : 0;
                    }),
                L)
              : L;
          }),
          (e.matches = function (t, n) {
            return e(t, null, null, n);
          }),
          (e.matchesSelector = function (t, n) {
            if (
              ((t.ownerDocument || t) !== L && N(t),
              E.matchesSelector &&
                P &&
                !X[n + " "] &&
                (!M || !M.test(n)) &&
                (!j || !j.test(n)))
            )
              try {
                var i = R.call(t, n);
                if (
                  i ||
                  E.disconnectedMatch ||
                  (t.document && 11 !== t.document.nodeType)
                )
                  return i;
              } catch (r) {
                X(n, !0);
              }
            return e(n, L, null, [t]).length > 0;
          }),
          (e.contains = function (t, e) {
            return (t.ownerDocument || t) !== L && N(t), W(t, e);
          }),
          (e.attr = function (t, e) {
            (t.ownerDocument || t) !== L && N(t);
            var n = T.attrHandle[e.toLowerCase()],
              i =
                n && K.call(T.attrHandle, e.toLowerCase())
                  ? n(t, e, !P)
                  : void 0;
            return void 0 !== i
              ? i
              : E.attributes || !P
              ? t.getAttribute(e)
              : (i = t.getAttributeNode(e)) && i.specified
              ? i.value
              : null;
          }),
          (e.escape = function (t) {
            return (t + "").replace(Tt, xt);
          }),
          (e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t);
          }),
          (e.uniqueSort = function (t) {
            var e,
              n = [],
              i = 0,
              r = 0;
            if (
              ((I = !E.detectDuplicates),
              (k = !E.sortStable && t.slice(0)),
              t.sort(G),
              I)
            ) {
              for (; (e = t[r++]); ) e === t[r] && (i = n.push(r));
              for (; i--; ) t.splice(n[i], 1);
            }
            return (k = null), t;
          }),
          (x = e.getText = function (t) {
            var e,
              n = "",
              i = 0,
              r = t.nodeType;
            if (r) {
              if (1 === r || 9 === r || 11 === r) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) n += x(t);
              } else if (3 === r || 4 === r) return t.nodeValue;
            } else for (; (e = t[i++]); ) n += x(e);
            return n;
          }),
          (T = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (t) {
                return (
                  (t[1] = t[1].replace(_t, Et)),
                  (t[3] = (t[3] || t[4] || t[5] || "").replace(_t, Et)),
                  "~=" === t[2] && (t[3] = " " + t[3] + " "),
                  t.slice(0, 4)
                );
              },
              CHILD: function (t) {
                return (
                  (t[1] = t[1].toLowerCase()),
                  "nth" === t[1].slice(0, 3)
                    ? (t[3] || e.error(t[0]),
                      (t[4] = +(t[4]
                        ? t[5] + (t[6] || 1)
                        : 2 * ("even" === t[3] || "odd" === t[3]))),
                      (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                    : t[3] && e.error(t[0]),
                  t
                );
              },
              PSEUDO: function (t) {
                var e,
                  n = !t[6] && t[2];
                return ht.CHILD.test(t[0])
                  ? null
                  : (t[3]
                      ? (t[2] = t[4] || t[5] || "")
                      : n &&
                        pt.test(n) &&
                        (e = S(n, !0)) &&
                        (e = n.indexOf(")", n.length - e) - n.length) &&
                        ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                    t.slice(0, 3));
              },
            },
            filter: {
              TAG: function (t) {
                var e = t.replace(_t, Et).toLowerCase();
                return "*" === t
                  ? function () {
                      return !0;
                    }
                  : function (t) {
                      return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
              },
              CLASS: function (t) {
                var e = U[t + " "];
                return (
                  e ||
                  ((e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) &&
                    U(t, function (t) {
                      return e.test(
                        ("string" == typeof t.className && t.className) ||
                          ("undefined" != typeof t.getAttribute &&
                            t.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (t, n, i) {
                return function (r) {
                  var o = e.attr(r, t);
                  return null == o
                    ? "!=" === n
                    : !n ||
                        ((o += ""),
                        "=" === n
                          ? o === i
                          : "!=" === n
                          ? o !== i
                          : "^=" === n
                          ? i && 0 === o.indexOf(i)
                          : "*=" === n
                          ? i && o.indexOf(i) > -1
                          : "$=" === n
                          ? i && o.slice(-i.length) === i
                          : "~=" === n
                          ? (" " + o.replace(st, " ") + " ").indexOf(i) > -1
                          : "|=" === n &&
                            (o === i || o.slice(0, i.length + 1) === i + "-"));
                };
              },
              CHILD: function (t, e, n, i, r) {
                var o = "nth" !== t.slice(0, 3),
                  a = "last" !== t.slice(-4),
                  s = "of-type" === e;
                return 1 === i && 0 === r
                  ? function (t) {
                      return !!t.parentNode;
                    }
                  : function (e, n, l) {
                      var c,
                        u,
                        f,
                        p,
                        d,
                        h,
                        m = o !== a ? "nextSibling" : "previousSibling",
                        g = e.parentNode,
                        v = s && e.nodeName.toLowerCase(),
                        y = !l && !s,
                        b = !1;
                      if (g) {
                        if (o) {
                          for (; m; ) {
                            for (p = e; (p = p[m]); )
                              if (
                                s
                                  ? p.nodeName.toLowerCase() === v
                                  : 1 === p.nodeType
                              )
                                return !1;
                            h = m = "only" === t && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [a ? g.firstChild : g.lastChild]), a && y)) {
                          for (
                            p = g,
                              f = p[F] || (p[F] = {}),
                              u = f[p.uniqueID] || (f[p.uniqueID] = {}),
                              c = u[t] || [],
                              d = c[0] === B && c[1],
                              b = d && c[2],
                              p = d && g.childNodes[d];
                            (p = (++d && p && p[m]) || (b = d = 0) || h.pop());

                          )
                            if (1 === p.nodeType && ++b && p === e) {
                              u[t] = [B, d, b];
                              break;
                            }
                        } else if (
                          (y &&
                            ((p = e),
                            (f = p[F] || (p[F] = {})),
                            (u = f[p.uniqueID] || (f[p.uniqueID] = {})),
                            (c = u[t] || []),
                            (d = c[0] === B && c[1]),
                            (b = d)),
                          b === !1)
                        )
                          for (
                            ;
                            (p =
                              (++d && p && p[m]) || (b = d = 0) || h.pop()) &&
                            ((s
                              ? p.nodeName.toLowerCase() !== v
                              : 1 !== p.nodeType) ||
                              !++b ||
                              (y &&
                                ((f = p[F] || (p[F] = {})),
                                (u = f[p.uniqueID] || (f[p.uniqueID] = {})),
                                (u[t] = [B, b])),
                              p !== e));

                          );
                        return (b -= r), b === i || (b % i === 0 && b / i >= 0);
                      }
                    };
              },
              PSEUDO: function (t, n) {
                var r,
                  o =
                    T.pseudos[t] ||
                    T.setFilters[t.toLowerCase()] ||
                    e.error("unsupported pseudo: " + t);
                return o[F]
                  ? o(n)
                  : o.length > 1
                  ? ((r = [t, t, "", n]),
                    T.setFilters.hasOwnProperty(t.toLowerCase())
                      ? i(function (t, e) {
                          for (var i, r = o(t, n), a = r.length; a--; )
                            (i = et(t, r[a])), (t[i] = !(e[i] = r[a]));
                        })
                      : function (t) {
                          return o(t, 0, r);
                        })
                  : o;
              },
            },
            pseudos: {
              not: i(function (t) {
                var e = [],
                  n = [],
                  r = A(t.replace(lt, "$1"));
                return r[F]
                  ? i(function (t, e, n, i) {
                      for (var o, a = r(t, null, i, []), s = t.length; s--; )
                        (o = a[s]) && (t[s] = !(e[s] = o));
                    })
                  : function (t, i, o) {
                      return (
                        (e[0] = t), r(e, null, o, n), (e[0] = null), !n.pop()
                      );
                    };
              }),
              has: i(function (t) {
                return function (n) {
                  return e(t, n).length > 0;
                };
              }),
              contains: i(function (t) {
                return (
                  (t = t.replace(_t, Et)),
                  function (e) {
                    return (e.textContent || x(e)).indexOf(t) > -1;
                  }
                );
              }),
              lang: i(function (t) {
                return (
                  dt.test(t || "") || e.error("unsupported lang: " + t),
                  (t = t.replace(_t, Et).toLowerCase()),
                  function (e) {
                    var n;
                    do
                      if (
                        (n = P
                          ? e.lang
                          : e.getAttribute("xml:lang") ||
                            e.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()),
                          n === t || 0 === n.indexOf(t + "-")
                        );
                    while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (e) {
                var n = t.location && t.location.hash;
                return n && n.slice(1) === e.id;
              },
              root: function (t) {
                return t === H;
              },
              focus: function (t) {
                return (
                  t === L.activeElement &&
                  (!L.hasFocus || L.hasFocus()) &&
                  !!(t.type || t.href || ~t.tabIndex)
                );
              },
              enabled: c(!1),
              disabled: c(!0),
              checked: function (t) {
                var e = t.nodeName.toLowerCase();
                return (
                  ("input" === e && !!t.checked) ||
                  ("option" === e && !!t.selected)
                );
              },
              selected: function (t) {
                return (
                  t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                );
              },
              empty: function (t) {
                for (t = t.firstChild; t; t = t.nextSibling)
                  if (t.nodeType < 6) return !1;
                return !0;
              },
              parent: function (t) {
                return !T.pseudos.empty(t);
              },
              header: function (t) {
                return vt.test(t.nodeName);
              },
              input: function (t) {
                return gt.test(t.nodeName);
              },
              button: function (t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e && "button" === t.type) || "button" === e;
              },
              text: function (t) {
                var e;
                return (
                  "input" === t.nodeName.toLowerCase() &&
                  "text" === t.type &&
                  (null == (e = t.getAttribute("type")) ||
                    "text" === e.toLowerCase())
                );
              },
              first: u(function () {
                return [0];
              }),
              last: u(function (t, e) {
                return [e - 1];
              }),
              eq: u(function (t, e, n) {
                return [n < 0 ? n + e : n];
              }),
              even: u(function (t, e) {
                for (var n = 0; n < e; n += 2) t.push(n);
                return t;
              }),
              odd: u(function (t, e) {
                for (var n = 1; n < e; n += 2) t.push(n);
                return t;
              }),
              lt: u(function (t, e, n) {
                for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0; )
                  t.push(i);
                return t;
              }),
              gt: u(function (t, e, n) {
                for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
                return t;
              }),
            },
          }),
          (T.pseudos.nth = T.pseudos.eq);
        for (_ in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0,
        })
          T.pseudos[_] = s(_);
        for (_ in { submit: !0, reset: !0 }) T.pseudos[_] = l(_);
        return (
          (p.prototype = T.filters = T.pseudos),
          (T.setFilters = new p()),
          (S = e.tokenize = function (t, n) {
            var i,
              r,
              o,
              a,
              s,
              l,
              c,
              u = z[t + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = t, l = [], c = T.preFilter; s; ) {
              (i && !(r = ct.exec(s))) ||
                (r && (s = s.slice(r[0].length) || s), l.push((o = []))),
                (i = !1),
                (r = ut.exec(s)) &&
                  ((i = r.shift()),
                  o.push({ value: i, type: r[0].replace(lt, " ") }),
                  (s = s.slice(i.length)));
              for (a in T.filter)
                !(r = ht[a].exec(s)) ||
                  (c[a] && !(r = c[a](r))) ||
                  ((i = r.shift()),
                  o.push({ value: i, type: a, matches: r }),
                  (s = s.slice(i.length)));
              if (!i) break;
            }
            return n ? s.length : s ? e.error(t) : z(t, l).slice(0);
          }),
          (A = e.compile = function (t, e) {
            var n,
              i = [],
              r = [],
              o = Y[t + " "];
            if (!o) {
              for (e || (e = S(t)), n = e.length; n--; )
                (o = b(e[n])), o[F] ? i.push(o) : r.push(o);
              (o = Y(t, w(r, i))), (o.selector = t);
            }
            return o;
          }),
          (O = e.select = function (t, e, n, i) {
            var r,
              o,
              a,
              s,
              l,
              c = "function" == typeof t && t,
              u = !i && S((t = c.selector || t));
            if (((n = n || []), 1 === u.length)) {
              if (
                ((o = u[0] = u[0].slice(0)),
                o.length > 2 &&
                  "ID" === (a = o[0]).type &&
                  9 === e.nodeType &&
                  P &&
                  T.relative[o[1].type])
              ) {
                if (
                  ((e = (T.find.ID(a.matches[0].replace(_t, Et), e) || [])[0]),
                  !e)
                )
                  return n;
                c && (e = e.parentNode), (t = t.slice(o.shift().value.length));
              }
              for (
                r = ht.needsContext.test(t) ? 0 : o.length;
                r-- && ((a = o[r]), !T.relative[(s = a.type)]);

              )
                if (
                  (l = T.find[s]) &&
                  (i = l(
                    a.matches[0].replace(_t, Et),
                    (wt.test(o[0].type) && f(e.parentNode)) || e
                  ))
                ) {
                  if ((o.splice(r, 1), (t = i.length && d(o)), !t))
                    return Z.apply(n, i), n;
                  break;
                }
            }
            return (
              (c || A(t, u))(
                i,
                e,
                !P,
                n,
                !e || (wt.test(t) && f(e.parentNode)) || e
              ),
              n
            );
          }),
          (E.sortStable = F.split("").sort(G).join("") === F),
          (E.detectDuplicates = !!I),
          N(),
          (E.sortDetached = r(function (t) {
            return 1 & t.compareDocumentPosition(L.createElement("fieldset"));
          })),
          r(function (t) {
            return (
              (t.innerHTML = "<a href='#'></a>"),
              "#" === t.firstChild.getAttribute("href")
            );
          }) ||
            o("type|href|height|width", function (t, e, n) {
              if (!n)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
            }),
          (E.attributes &&
            r(function (t) {
              return (
                (t.innerHTML = "<input/>"),
                t.firstChild.setAttribute("value", ""),
                "" === t.firstChild.getAttribute("value")
              );
            })) ||
            o("value", function (t, e, n) {
              if (!n && "input" === t.nodeName.toLowerCase())
                return t.defaultValue;
            }),
          r(function (t) {
            return null == t.getAttribute("disabled");
          }) ||
            o(nt, function (t, e, n) {
              var i;
              if (!n)
                return t[e] === !0
                  ? e.toLowerCase()
                  : (i = t.getAttributeNode(e)) && i.specified
                  ? i.value
                  : null;
            }),
          e
        );
      })(n);
      (Ot.find = kt),
        (Ot.expr = kt.selectors),
        (Ot.expr[":"] = Ot.expr.pseudos),
        (Ot.uniqueSort = Ot.unique = kt.uniqueSort),
        (Ot.text = kt.getText),
        (Ot.isXMLDoc = kt.isXML),
        (Ot.contains = kt.contains),
        (Ot.escapeSelector = kt.escape);
      var It = function (t, e, n) {
          for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
              if (r && Ot(t).is(n)) break;
              i.push(t);
            }
          return i;
        },
        Nt = function (t, e) {
          for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
          return n;
        },
        Lt = Ot.expr.match.needsContext,
        Ht = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      (Ot.filter = function (t, e, n) {
        var i = e[0];
        return (
          n && (t = ":not(" + t + ")"),
          1 === e.length && 1 === i.nodeType
            ? Ot.find.matchesSelector(i, t)
              ? [i]
              : []
            : Ot.find.matches(
                t,
                Ot.grep(e, function (t) {
                  return 1 === t.nodeType;
                })
              )
        );
      }),
        Ot.fn.extend({
          find: function (t) {
            var e,
              n,
              i = this.length,
              r = this;
            if ("string" != typeof t)
              return this.pushStack(
                Ot(t).filter(function () {
                  for (e = 0; e < i; e++)
                    if (Ot.contains(r[e], this)) return !0;
                })
              );
            for (n = this.pushStack([]), e = 0; e < i; e++) Ot.find(t, r[e], n);
            return i > 1 ? Ot.uniqueSort(n) : n;
          },
          filter: function (t) {
            return this.pushStack(u(this, t || [], !1));
          },
          not: function (t) {
            return this.pushStack(u(this, t || [], !0));
          },
          is: function (t) {
            return !!u(
              this,
              "string" == typeof t && Lt.test(t) ? Ot(t) : t || [],
              !1
            ).length;
          },
        });
      var Pt,
        jt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Mt = (Ot.fn.init = function (t, e, n) {
          var i, r;
          if (!t) return this;
          if (((n = n || Pt), "string" == typeof t)) {
            if (
              ((i =
                "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
                  ? [null, t, null]
                  : jt.exec(t)),
              !i || (!i[1] && e))
            )
              return !e || e.jquery
                ? (e || n).find(t)
                : this.constructor(e).find(t);
            if (i[1]) {
              if (
                ((e = e instanceof Ot ? e[0] : e),
                Ot.merge(
                  this,
                  Ot.parseHTML(
                    i[1],
                    e && e.nodeType ? e.ownerDocument || e : pt,
                    !0
                  )
                ),
                Ht.test(i[1]) && Ot.isPlainObject(e))
              )
                for (i in e) xt(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
              return this;
            }
            return (
              (r = pt.getElementById(i[2])),
              r && ((this[0] = r), (this.length = 1)),
              this
            );
          }
          return t.nodeType
            ? ((this[0] = t), (this.length = 1), this)
            : xt(t)
            ? void 0 !== n.ready
              ? n.ready(t)
              : t(Ot)
            : Ot.makeArray(t, this);
        });
      (Mt.prototype = Ot.fn), (Pt = Ot(pt));
      var Rt = /^(?:parents|prev(?:Until|All))/,
        Wt = { children: !0, contents: !0, next: !0, prev: !0 };
      Ot.fn.extend({
        has: function (t) {
          var e = Ot(t, this),
            n = e.length;
          return this.filter(function () {
            for (var t = 0; t < n; t++) if (Ot.contains(this, e[t])) return !0;
          });
        },
        closest: function (t, e) {
          var n,
            i = 0,
            r = this.length,
            o = [],
            a = "string" != typeof t && Ot(t);
          if (!Lt.test(t))
            for (; i < r; i++)
              for (n = this[i]; n && n !== e; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a
                    ? a.index(n) > -1
                    : 1 === n.nodeType && Ot.find.matchesSelector(n, t))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? Ot.uniqueSort(o) : o);
        },
        index: function (t) {
          return t
            ? "string" == typeof t
              ? vt.call(Ot(t), this[0])
              : vt.call(this, t.jquery ? t[0] : t)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (t, e) {
          return this.pushStack(Ot.uniqueSort(Ot.merge(this.get(), Ot(t, e))));
        },
        addBack: function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        },
      }),
        Ot.each(
          {
            parent: function (t) {
              var e = t.parentNode;
              return e && 11 !== e.nodeType ? e : null;
            },
            parents: function (t) {
              return It(t, "parentNode");
            },
            parentsUntil: function (t, e, n) {
              return It(t, "parentNode", n);
            },
            next: function (t) {
              return f(t, "nextSibling");
            },
            prev: function (t) {
              return f(t, "previousSibling");
            },
            nextAll: function (t) {
              return It(t, "nextSibling");
            },
            prevAll: function (t) {
              return It(t, "previousSibling");
            },
            nextUntil: function (t, e, n) {
              return It(t, "nextSibling", n);
            },
            prevUntil: function (t, e, n) {
              return It(t, "previousSibling", n);
            },
            siblings: function (t) {
              return Nt((t.parentNode || {}).firstChild, t);
            },
            children: function (t) {
              return Nt(t.firstChild);
            },
            contents: function (t) {
              return "undefined" != typeof t.contentDocument
                ? t.contentDocument
                : (c(t, "template") && (t = t.content || t),
                  Ot.merge([], t.childNodes));
            },
          },
          function (t, e) {
            Ot.fn[t] = function (n, i) {
              var r = Ot.map(this, e, n);
              return (
                "Until" !== t.slice(-5) && (i = n),
                i && "string" == typeof i && (r = Ot.filter(i, r)),
                this.length > 1 &&
                  (Wt[t] || Ot.uniqueSort(r), Rt.test(t) && r.reverse()),
                this.pushStack(r)
              );
            };
          }
        );
      var Ft = /[^\x20\t\r\n\f]+/g;
      (Ot.Callbacks = function (t) {
        t = "string" == typeof t ? p(t) : Ot.extend({}, t);
        var e,
          n,
          i,
          r,
          o = [],
          a = [],
          l = -1,
          c = function () {
            for (r = r || t.once, i = e = !0; a.length; l = -1)
              for (n = a.shift(); ++l < o.length; )
                o[l].apply(n[0], n[1]) === !1 &&
                  t.stopOnFalse &&
                  ((l = o.length), (n = !1));
            t.memory || (n = !1), (e = !1), r && (o = n ? [] : "");
          },
          u = {
            add: function () {
              return (
                o &&
                  (n && !e && ((l = o.length - 1), a.push(n)),
                  (function i(e) {
                    Ot.each(e, function (e, n) {
                      xt(n)
                        ? (t.unique && u.has(n)) || o.push(n)
                        : n && n.length && "string" !== s(n) && i(n);
                    });
                  })(arguments),
                  n && !e && c()),
                this
              );
            },
            remove: function () {
              return (
                Ot.each(arguments, function (t, e) {
                  for (var n; (n = Ot.inArray(e, o, n)) > -1; )
                    o.splice(n, 1), n <= l && l--;
                }),
                this
              );
            },
            has: function (t) {
              return t ? Ot.inArray(t, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (r = a = []), (o = n = ""), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (r = a = []), n || e || (o = n = ""), this;
            },
            locked: function () {
              return !!r;
            },
            fireWith: function (t, n) {
              return (
                r ||
                  ((n = n || []),
                  (n = [t, n.slice ? n.slice() : n]),
                  a.push(n),
                  e || c()),
                this
              );
            },
            fire: function () {
              return u.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!i;
            },
          };
        return u;
      }),
        Ot.extend({
          Deferred: function (t) {
            var e = [
                [
                  "notify",
                  "progress",
                  Ot.Callbacks("memory"),
                  Ot.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  Ot.Callbacks("once memory"),
                  Ot.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  Ot.Callbacks("once memory"),
                  Ot.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              i = "pending",
              r = {
                state: function () {
                  return i;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (t) {
                  return r.then(null, t);
                },
                pipe: function () {
                  var t = arguments;
                  return Ot.Deferred(function (n) {
                    Ot.each(e, function (e, i) {
                      var r = xt(t[i[4]]) && t[i[4]];
                      o[i[1]](function () {
                        var t = r && r.apply(this, arguments);
                        t && xt(t.promise)
                          ? t
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[i[0] + "With"](this, r ? [t] : arguments);
                      });
                    }),
                      (t = null);
                  }).promise();
                },
                then: function (t, i, r) {
                  function o(t, e, i, r) {
                    return function () {
                      var s = this,
                        l = arguments,
                        c = function () {
                          var n, c;
                          if (!(t < a)) {
                            if (((n = i.apply(s, l)), n === e.promise()))
                              throw new TypeError("Thenable self-resolution");
                            (c =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              xt(c)
                                ? r
                                  ? c.call(n, o(a, e, d, r), o(a, e, h, r))
                                  : (a++,
                                    c.call(
                                      n,
                                      o(a, e, d, r),
                                      o(a, e, h, r),
                                      o(a, e, d, e.notifyWith)
                                    ))
                                : (i !== d && ((s = void 0), (l = [n])),
                                  (r || e.resolveWith)(s, l));
                          }
                        },
                        u = r
                          ? c
                          : function () {
                              try {
                                c();
                              } catch (n) {
                                Ot.Deferred.exceptionHook &&
                                  Ot.Deferred.exceptionHook(n, u.stackTrace),
                                  t + 1 >= a &&
                                    (i !== h && ((s = void 0), (l = [n])),
                                    e.rejectWith(s, l));
                              }
                            };
                      t
                        ? u()
                        : (Ot.Deferred.getStackHook &&
                            (u.stackTrace = Ot.Deferred.getStackHook()),
                          n.setTimeout(u));
                    };
                  }
                  var a = 0;
                  return Ot.Deferred(function (n) {
                    e[0][3].add(o(0, n, xt(r) ? r : d, n.notifyWith)),
                      e[1][3].add(o(0, n, xt(t) ? t : d)),
                      e[2][3].add(o(0, n, xt(i) ? i : h));
                  }).promise();
                },
                promise: function (t) {
                  return null != t ? Ot.extend(t, r) : r;
                },
              },
              o = {};
            return (
              Ot.each(e, function (t, n) {
                var a = n[2],
                  s = n[5];
                (r[n[1]] = a.add),
                  s &&
                    a.add(
                      function () {
                        i = s;
                      },
                      e[3 - t][2].disable,
                      e[3 - t][3].disable,
                      e[0][2].lock,
                      e[0][3].lock
                    ),
                  a.add(n[3].fire),
                  (o[n[0]] = function () {
                    return (
                      o[n[0] + "With"](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[n[0] + "With"] = a.fireWith);
              }),
              r.promise(o),
              t && t.call(o, o),
              o
            );
          },
          when: function (t) {
            var e = arguments.length,
              n = e,
              i = Array(n),
              r = ht.call(arguments),
              o = Ot.Deferred(),
              a = function (t) {
                return function (n) {
                  (i[t] = this),
                    (r[t] = arguments.length > 1 ? ht.call(arguments) : n),
                    --e || o.resolveWith(i, r);
                };
              };
            if (
              e <= 1 &&
              (m(t, o.done(a(n)).resolve, o.reject, !e),
              "pending" === o.state() || xt(r[n] && r[n].then))
            )
              return o.then();
            for (; n--; ) m(r[n], a(n), o.reject);
            return o.promise();
          },
        });
      var qt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (Ot.Deferred.exceptionHook = function (t, e) {
        n.console &&
          n.console.warn &&
          t &&
          qt.test(t.name) &&
          n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
      }),
        (Ot.readyException = function (t) {
          n.setTimeout(function () {
            throw t;
          });
        });
      var Bt = Ot.Deferred();
      (Ot.fn.ready = function (t) {
        return (
          Bt.then(t)["catch"](function (t) {
            Ot.readyException(t);
          }),
          this
        );
      }),
        Ot.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (t) {
            (t === !0 ? --Ot.readyWait : Ot.isReady) ||
              ((Ot.isReady = !0),
              (t !== !0 && --Ot.readyWait > 0) || Bt.resolveWith(pt, [Ot]));
          },
        }),
        (Ot.ready.then = Bt.then),
        "complete" === pt.readyState ||
        ("loading" !== pt.readyState && !pt.documentElement.doScroll)
          ? n.setTimeout(Ot.ready)
          : (pt.addEventListener("DOMContentLoaded", g),
            n.addEventListener("load", g));
      var Vt = function (t, e, n, i, r, o, a) {
          var l = 0,
            c = t.length,
            u = null == n;
          if ("object" === s(n)) {
            r = !0;
            for (l in n) Vt(t, e, l, n[l], !0, o, a);
          } else if (
            void 0 !== i &&
            ((r = !0),
            xt(i) || (a = !0),
            u &&
              (a
                ? (e.call(t, i), (e = null))
                : ((u = e),
                  (e = function (t, e, n) {
                    return u.call(Ot(t), n);
                  }))),
            e)
          )
            for (; l < c; l++) e(t[l], n, a ? i : i.call(t[l], l, e(t[l], n)));
          return r ? t : u ? e.call(t) : c ? e(t[0], n) : o;
        },
        Ut = /^-ms-/,
        zt = /-([a-z])/g,
        Yt = function (t) {
          return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
        };
      (b.uid = 1),
        (b.prototype = {
          cache: function (t) {
            var e = t[this.expando];
            return (
              e ||
                ((e = {}),
                Yt(t) &&
                  (t.nodeType
                    ? (t[this.expando] = e)
                    : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0,
                      }))),
              e
            );
          },
          set: function (t, e, n) {
            var i,
              r = this.cache(t);
            if ("string" == typeof e) r[y(e)] = n;
            else for (i in e) r[y(i)] = e[i];
            return r;
          },
          get: function (t, e) {
            return void 0 === e
              ? this.cache(t)
              : t[this.expando] && t[this.expando][y(e)];
          },
          access: function (t, e, n) {
            return void 0 === e || (e && "string" == typeof e && void 0 === n)
              ? this.get(t, e)
              : (this.set(t, e, n), void 0 !== n ? n : e);
          },
          remove: function (t, e) {
            var n,
              i = t[this.expando];
            if (void 0 !== i) {
              if (void 0 !== e) {
                Array.isArray(e)
                  ? (e = e.map(y))
                  : ((e = y(e)), (e = e in i ? [e] : e.match(Ft) || [])),
                  (n = e.length);
                for (; n--; ) delete i[e[n]];
              }
              (void 0 === e || Ot.isEmptyObject(i)) &&
                (t.nodeType
                  ? (t[this.expando] = void 0)
                  : delete t[this.expando]);
            }
          },
          hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !Ot.isEmptyObject(e);
          },
        });
      var Xt = new b(),
        Gt = new b(),
        Kt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        $t = /[A-Z]/g;
      Ot.extend({
        hasData: function (t) {
          return Gt.hasData(t) || Xt.hasData(t);
        },
        data: function (t, e, n) {
          return Gt.access(t, e, n);
        },
        removeData: function (t, e) {
          Gt.remove(t, e);
        },
        _data: function (t, e, n) {
          return Xt.access(t, e, n);
        },
        _removeData: function (t, e) {
          Xt.remove(t, e);
        },
      }),
        Ot.fn.extend({
          data: function (t, e) {
            var n,
              i,
              r,
              o = this[0],
              a = o && o.attributes;
            if (void 0 === t) {
              if (
                this.length &&
                ((r = Gt.get(o)),
                1 === o.nodeType && !Xt.get(o, "hasDataAttrs"))
              ) {
                for (n = a.length; n--; )
                  a[n] &&
                    ((i = a[n].name),
                    0 === i.indexOf("data-") &&
                      ((i = y(i.slice(5))), _(o, i, r[i])));
                Xt.set(o, "hasDataAttrs", !0);
              }
              return r;
            }
            return "object" == typeof t
              ? this.each(function () {
                  Gt.set(this, t);
                })
              : Vt(
                  this,
                  function (e) {
                    var n;
                    if (o && void 0 === e) {
                      if (((n = Gt.get(o, t)), void 0 !== n)) return n;
                      if (((n = _(o, t)), void 0 !== n)) return n;
                    } else
                      this.each(function () {
                        Gt.set(this, t, e);
                      });
                  },
                  null,
                  e,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (t) {
            return this.each(function () {
              Gt.remove(this, t);
            });
          },
        }),
        Ot.extend({
          queue: function (t, e, n) {
            var i;
            if (t)
              return (
                (e = (e || "fx") + "queue"),
                (i = Xt.get(t, e)),
                n &&
                  (!i || Array.isArray(n)
                    ? (i = Xt.access(t, e, Ot.makeArray(n)))
                    : i.push(n)),
                i || []
              );
          },
          dequeue: function (t, e) {
            e = e || "fx";
            var n = Ot.queue(t, e),
              i = n.length,
              r = n.shift(),
              o = Ot._queueHooks(t, e),
              a = function () {
                Ot.dequeue(t, e);
              };
            "inprogress" === r && ((r = n.shift()), i--),
              r &&
                ("fx" === e && n.unshift("inprogress"),
                delete o.stop,
                r.call(t, a, o)),
              !i && o && o.empty.fire();
          },
          _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return (
              Xt.get(t, n) ||
              Xt.access(t, n, {
                empty: Ot.Callbacks("once memory").add(function () {
                  Xt.remove(t, [e + "queue", n]);
                }),
              })
            );
          },
        }),
        Ot.fn.extend({
          queue: function (t, e) {
            var n = 2;
            return (
              "string" != typeof t && ((e = t), (t = "fx"), n--),
              arguments.length < n
                ? Ot.queue(this[0], t)
                : void 0 === e
                ? this
                : this.each(function () {
                    var n = Ot.queue(this, t, e);
                    Ot._queueHooks(this, t),
                      "fx" === t &&
                        "inprogress" !== n[0] &&
                        Ot.dequeue(this, t);
                  })
            );
          },
          dequeue: function (t) {
            return this.each(function () {
              Ot.dequeue(this, t);
            });
          },
          clearQueue: function (t) {
            return this.queue(t || "fx", []);
          },
          promise: function (t, e) {
            var n,
              i = 1,
              r = Ot.Deferred(),
              o = this,
              a = this.length,
              s = function () {
                --i || r.resolveWith(o, [o]);
              };
            for (
              "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
              a--;

            )
              (n = Xt.get(o[a], t + "queueHooks")),
                n && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(e);
          },
        });
      var Qt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Jt = new RegExp("^(?:([+-])=|)(" + Qt + ")([a-z%]*)$", "i"),
        Zt = ["Top", "Right", "Bottom", "Left"],
        te = pt.documentElement,
        ee = function (t) {
          return Ot.contains(t.ownerDocument, t);
        },
        ne = { composed: !0 };
      te.getRootNode &&
        (ee = function (t) {
          return (
            Ot.contains(t.ownerDocument, t) ||
            t.getRootNode(ne) === t.ownerDocument
          );
        });
      var ie = function (t, e) {
          return (
            (t = e || t),
            "none" === t.style.display ||
              ("" === t.style.display &&
                ee(t) &&
                "none" === Ot.css(t, "display"))
          );
        },
        re = function (t, e, n, i) {
          var r,
            o,
            a = {};
          for (o in e) (a[o] = t.style[o]), (t.style[o] = e[o]);
          r = n.apply(t, i || []);
          for (o in e) t.style[o] = a[o];
          return r;
        },
        oe = {};
      Ot.fn.extend({
        show: function () {
          return x(this, !0);
        },
        hide: function () {
          return x(this);
        },
        toggle: function (t) {
          return "boolean" == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
                ie(this) ? Ot(this).show() : Ot(this).hide();
              });
        },
      });
      var ae = /^(?:checkbox|radio)$/i,
        se = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        le = /^$|^module$|\/(?:java|ecma)script/i,
        ce = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
      (ce.optgroup = ce.option),
        (ce.tbody = ce.tfoot = ce.colgroup = ce.caption = ce.thead),
        (ce.th = ce.td);
      var ue = /<|&#?\w+;/;
      !(function () {
        var t = pt.createDocumentFragment(),
          e = t.appendChild(pt.createElement("div")),
          n = pt.createElement("input");
        n.setAttribute("type", "radio"),
          n.setAttribute("checked", "checked"),
          n.setAttribute("name", "t"),
          e.appendChild(n),
          (Tt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (e.innerHTML = "<textarea>x</textarea>"),
          (Tt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
      })();
      var fe = /^key/,
        pe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        de = /^([^.]*)(?:\.(.+)|)/;
      (Ot.event = {
        global: {},
        add: function (t, e, n, i, r) {
          var o,
            a,
            s,
            l,
            c,
            u,
            f,
            p,
            d,
            h,
            m,
            g = Xt.get(t);
          if (g)
            for (
              n.handler && ((o = n), (n = o.handler), (r = o.selector)),
                r && Ot.find.matchesSelector(te, r),
                n.guid || (n.guid = Ot.guid++),
                (l = g.events) || (l = g.events = {}),
                (a = g.handle) ||
                  (a = g.handle = function (e) {
                    return "undefined" != typeof Ot &&
                      Ot.event.triggered !== e.type
                      ? Ot.event.dispatch.apply(t, arguments)
                      : void 0;
                  }),
                e = (e || "").match(Ft) || [""],
                c = e.length;
              c--;

            )
              (s = de.exec(e[c]) || []),
                (d = m = s[1]),
                (h = (s[2] || "").split(".").sort()),
                d &&
                  ((f = Ot.event.special[d] || {}),
                  (d = (r ? f.delegateType : f.bindType) || d),
                  (f = Ot.event.special[d] || {}),
                  (u = Ot.extend(
                    {
                      type: d,
                      origType: m,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: r,
                      needsContext: r && Ot.expr.match.needsContext.test(r),
                      namespace: h.join("."),
                    },
                    o
                  )),
                  (p = l[d]) ||
                    ((p = l[d] = []),
                    (p.delegateCount = 0),
                    (f.setup && f.setup.call(t, i, h, a) !== !1) ||
                      (t.addEventListener && t.addEventListener(d, a))),
                  f.add &&
                    (f.add.call(t, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                  r ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                  (Ot.event.global[d] = !0));
        },
        remove: function (t, e, n, i, r) {
          var o,
            a,
            s,
            l,
            c,
            u,
            f,
            p,
            d,
            h,
            m,
            g = Xt.hasData(t) && Xt.get(t);
          if (g && (l = g.events)) {
            for (e = (e || "").match(Ft) || [""], c = e.length; c--; )
              if (
                ((s = de.exec(e[c]) || []),
                (d = m = s[1]),
                (h = (s[2] || "").split(".").sort()),
                d)
              ) {
                for (
                  f = Ot.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    p = l[d] || [],
                    s =
                      s[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    a = o = p.length;
                  o--;

                )
                  (u = p[o]),
                    (!r && m !== u.origType) ||
                      (n && n.guid !== u.guid) ||
                      (s && !s.test(u.namespace)) ||
                      (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                      (p.splice(o, 1),
                      u.selector && p.delegateCount--,
                      f.remove && f.remove.call(t, u));
                a &&
                  !p.length &&
                  ((f.teardown && f.teardown.call(t, h, g.handle) !== !1) ||
                    Ot.removeEvent(t, d, g.handle),
                  delete l[d]);
              } else for (d in l) Ot.event.remove(t, d + e[c], n, i, !0);
            Ot.isEmptyObject(l) && Xt.remove(t, "handle events");
          }
        },
        dispatch: function (t) {
          var e,
            n,
            i,
            r,
            o,
            a,
            s = Ot.event.fix(t),
            l = new Array(arguments.length),
            c = (Xt.get(this, "events") || {})[s.type] || [],
            u = Ot.event.special[s.type] || {};
          for (l[0] = s, e = 1; e < arguments.length; e++) l[e] = arguments[e];
          if (
            ((s.delegateTarget = this),
            !u.preDispatch || u.preDispatch.call(this, s) !== !1)
          ) {
            for (
              a = Ot.event.handlers.call(this, s, c), e = 0;
              (r = a[e++]) && !s.isPropagationStopped();

            )
              for (
                s.currentTarget = r.elem, n = 0;
                (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();

              )
                (s.rnamespace &&
                  o.namespace !== !1 &&
                  !s.rnamespace.test(o.namespace)) ||
                  ((s.handleObj = o),
                  (s.data = o.data),
                  (i = (
                    (Ot.event.special[o.origType] || {}).handle || o.handler
                  ).apply(r.elem, l)),
                  void 0 !== i &&
                    (s.result = i) === !1 &&
                    (s.preventDefault(), s.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, s), s.result;
          }
        },
        handlers: function (t, e) {
          var n,
            i,
            r,
            o,
            a,
            s = [],
            l = e.delegateCount,
            c = t.target;
          if (l && c.nodeType && !("click" === t.type && t.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ("click" !== t.type || c.disabled !== !0)
              ) {
                for (o = [], a = {}, n = 0; n < l; n++)
                  (i = e[n]),
                    (r = i.selector + " "),
                    void 0 === a[r] &&
                      (a[r] = i.needsContext
                        ? Ot(r, this).index(c) > -1
                        : Ot.find(r, this, null, [c]).length),
                    a[r] && o.push(i);
                o.length && s.push({ elem: c, handlers: o });
              }
          return (
            (c = this),
            l < e.length && s.push({ elem: c, handlers: e.slice(l) }),
            s
          );
        },
        addProp: function (t, e) {
          Object.defineProperty(Ot.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: xt(e)
              ? function () {
                  if (this.originalEvent) return e(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[t];
                },
            set: function (e) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e,
              });
            },
          });
        },
        fix: function (t) {
          return t[Ot.expando] ? t : new Ot.Event(t);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (t) {
              var e = this || t;
              return (
                ae.test(e.type) && e.click && c(e, "input") && L(e, "click", O),
                !1
              );
            },
            trigger: function (t) {
              var e = this || t;
              return (
                ae.test(e.type) && e.click && c(e, "input") && L(e, "click"), !0
              );
            },
            _default: function (t) {
              var e = t.target;
              return (
                (ae.test(e.type) &&
                  e.click &&
                  c(e, "input") &&
                  Xt.get(e, "click")) ||
                c(e, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (t) {
              void 0 !== t.result &&
                t.originalEvent &&
                (t.originalEvent.returnValue = t.result);
            },
          },
        },
      }),
        (Ot.removeEvent = function (t, e, n) {
          t.removeEventListener && t.removeEventListener(e, n);
        }),
        (Ot.Event = function (t, e) {
          return this instanceof Ot.Event
            ? (t && t.type
                ? ((this.originalEvent = t),
                  (this.type = t.type),
                  (this.isDefaultPrevented =
                    t.defaultPrevented ||
                    (void 0 === t.defaultPrevented && t.returnValue === !1)
                      ? O
                      : D),
                  (this.target =
                    t.target && 3 === t.target.nodeType
                      ? t.target.parentNode
                      : t.target),
                  (this.currentTarget = t.currentTarget),
                  (this.relatedTarget = t.relatedTarget))
                : (this.type = t),
              e && Ot.extend(this, e),
              (this.timeStamp = (t && t.timeStamp) || Date.now()),
              void (this[Ot.expando] = !0))
            : new Ot.Event(t, e);
        }),
        (Ot.Event.prototype = {
          constructor: Ot.Event,
          isDefaultPrevented: D,
          isPropagationStopped: D,
          isImmediatePropagationStopped: D,
          isSimulated: !1,
          preventDefault: function () {
            var t = this.originalEvent;
            (this.isDefaultPrevented = O),
              t && !this.isSimulated && t.preventDefault();
          },
          stopPropagation: function () {
            var t = this.originalEvent;
            (this.isPropagationStopped = O),
              t && !this.isSimulated && t.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var t = this.originalEvent;
            (this.isImmediatePropagationStopped = O),
              t && !this.isSimulated && t.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        Ot.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (t) {
              var e = t.button;
              return null == t.which && fe.test(t.type)
                ? null != t.charCode
                  ? t.charCode
                  : t.keyCode
                : !t.which && void 0 !== e && pe.test(t.type)
                ? 1 & e
                  ? 1
                  : 2 & e
                  ? 3
                  : 4 & e
                  ? 2
                  : 0
                : t.which;
            },
          },
          Ot.event.addProp
        ),
        Ot.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
          Ot.event.special[t] = {
            setup: function () {
              return L(this, t, k), !1;
            },
            trigger: function () {
              return L(this, t), !0;
            },
            delegateType: e,
          };
        }),
        Ot.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (t, e) {
            Ot.event.special[t] = {
              delegateType: e,
              bindType: e,
              handle: function (t) {
                var n,
                  i = this,
                  r = t.relatedTarget,
                  o = t.handleObj;
                return (
                  (r && (r === i || Ot.contains(i, r))) ||
                    ((t.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (t.type = e)),
                  n
                );
              },
            };
          }
        ),
        Ot.fn.extend({
          on: function (t, e, n, i) {
            return N(this, t, e, n, i);
          },
          one: function (t, e, n, i) {
            return N(this, t, e, n, i, 1);
          },
          off: function (t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj)
              return (
                (i = t.handleObj),
                Ot(t.delegateTarget).off(
                  i.namespace ? i.origType + "." + i.namespace : i.origType,
                  i.selector,
                  i.handler
                ),
                this
              );
            if ("object" == typeof t) {
              for (r in t) this.off(r, e, t[r]);
              return this;
            }
            return (
              (e !== !1 && "function" != typeof e) || ((n = e), (e = void 0)),
              n === !1 && (n = D),
              this.each(function () {
                Ot.event.remove(this, t, n, e);
              })
            );
          },
        });
      var he = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        me = /<script|<style|<link/i,
        ge = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      Ot.extend({
        htmlPrefilter: function (t) {
          return t.replace(he, "<$1></$2>");
        },
        clone: function (t, e, n) {
          var i,
            r,
            o,
            a,
            s = t.cloneNode(!0),
            l = ee(t);
          if (
            !(
              Tt.noCloneChecked ||
              (1 !== t.nodeType && 11 !== t.nodeType) ||
              Ot.isXMLDoc(t)
            )
          )
            for (a = C(s), o = C(t), i = 0, r = o.length; i < r; i++)
              R(o[i], a[i]);
          if (e)
            if (n)
              for (
                o = o || C(t), a = a || C(s), i = 0, r = o.length;
                i < r;
                i++
              )
                M(o[i], a[i]);
            else M(t, s);
          return (
            (a = C(s, "script")), a.length > 0 && S(a, !l && C(t, "script")), s
          );
        },
        cleanData: function (t) {
          for (
            var e, n, i, r = Ot.event.special, o = 0;
            void 0 !== (n = t[o]);
            o++
          )
            if (Yt(n)) {
              if ((e = n[Xt.expando])) {
                if (e.events)
                  for (i in e.events)
                    r[i]
                      ? Ot.event.remove(n, i)
                      : Ot.removeEvent(n, i, e.handle);
                n[Xt.expando] = void 0;
              }
              n[Gt.expando] && (n[Gt.expando] = void 0);
            }
        },
      }),
        Ot.fn.extend({
          detach: function (t) {
            return F(this, t, !0);
          },
          remove: function (t) {
            return F(this, t);
          },
          text: function (t) {
            return Vt(
              this,
              function (t) {
                return void 0 === t
                  ? Ot.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = t);
                    });
              },
              null,
              t,
              arguments.length
            );
          },
          append: function () {
            return W(this, arguments, function (t) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var e = H(this, t);
                e.appendChild(t);
              }
            });
          },
          prepend: function () {
            return W(this, arguments, function (t) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var e = H(this, t);
                e.insertBefore(t, e.firstChild);
              }
            });
          },
          before: function () {
            return W(this, arguments, function (t) {
              this.parentNode && this.parentNode.insertBefore(t, this);
            });
          },
          after: function () {
            return W(this, arguments, function (t) {
              this.parentNode &&
                this.parentNode.insertBefore(t, this.nextSibling);
            });
          },
          empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++)
              1 === t.nodeType &&
                (Ot.cleanData(C(t, !1)), (t.textContent = ""));
            return this;
          },
          clone: function (t, e) {
            return (
              (t = null != t && t),
              (e = null == e ? t : e),
              this.map(function () {
                return Ot.clone(this, t, e);
              })
            );
          },
          html: function (t) {
            return Vt(
              this,
              function (t) {
                var e = this[0] || {},
                  n = 0,
                  i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if (
                  "string" == typeof t &&
                  !me.test(t) &&
                  !ce[(se.exec(t) || ["", ""])[1].toLowerCase()]
                ) {
                  t = Ot.htmlPrefilter(t);
                  try {
                    for (; n < i; n++)
                      (e = this[n] || {}),
                        1 === e.nodeType &&
                          (Ot.cleanData(C(e, !1)), (e.innerHTML = t));
                    e = 0;
                  } catch (r) {}
                }
                e && this.empty().append(t);
              },
              null,
              t,
              arguments.length
            );
          },
          replaceWith: function () {
            var t = [];
            return W(
              this,
              arguments,
              function (e) {
                var n = this.parentNode;
                Ot.inArray(this, t) < 0 &&
                  (Ot.cleanData(C(this)), n && n.replaceChild(e, this));
              },
              t
            );
          },
        }),
        Ot.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (t, e) {
            Ot.fn[t] = function (t) {
              for (
                var n, i = [], r = Ot(t), o = r.length - 1, a = 0;
                a <= o;
                a++
              )
                (n = a === o ? this : this.clone(!0)),
                  Ot(r[a])[e](n),
                  gt.apply(i, n.get());
              return this.pushStack(i);
            };
          }
        );
      var ye = new RegExp("^(" + Qt + ")(?!px)[a-z%]+$", "i"),
        be = function (t) {
          var e = t.ownerDocument.defaultView;
          return (e && e.opener) || (e = n), e.getComputedStyle(t);
        },
        we = new RegExp(Zt.join("|"), "i");
      !(function () {
        function t() {
          if (c) {
            (l.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (c.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              te.appendChild(l).appendChild(c);
            var t = n.getComputedStyle(c);
            (i = "1%" !== t.top),
              (s = 12 === e(t.marginLeft)),
              (c.style.right = "60%"),
              (a = 36 === e(t.right)),
              (r = 36 === e(t.width)),
              (c.style.position = "absolute"),
              (o = 12 === e(c.offsetWidth / 3)),
              te.removeChild(l),
              (c = null);
          }
        }
        function e(t) {
          return Math.round(parseFloat(t));
        }
        var i,
          r,
          o,
          a,
          s,
          l = pt.createElement("div"),
          c = pt.createElement("div");
        c.style &&
          ((c.style.backgroundClip = "content-box"),
          (c.cloneNode(!0).style.backgroundClip = ""),
          (Tt.clearCloneStyle = "content-box" === c.style.backgroundClip),
          Ot.extend(Tt, {
            boxSizingReliable: function () {
              return t(), r;
            },
            pixelBoxStyles: function () {
              return t(), a;
            },
            pixelPosition: function () {
              return t(), i;
            },
            reliableMarginLeft: function () {
              return t(), s;
            },
            scrollboxSize: function () {
              return t(), o;
            },
          }));
      })();
      var _e = ["Webkit", "Moz", "ms"],
        Ee = pt.createElement("div").style,
        Te = {},
        xe = /^(none|table(?!-c[ea]).+)/,
        Ce = /^--/,
        Se = { position: "absolute", visibility: "hidden", display: "block" },
        Ae = { letterSpacing: "0", fontWeight: "400" };
      Ot.extend({
        cssHooks: {
          opacity: {
            get: function (t, e) {
              if (e) {
                var n = q(t, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (t, e, n, i) {
          if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var r,
              o,
              a,
              s = y(e),
              l = Ce.test(e),
              c = t.style;
            return (
              l || (e = U(s)),
              (a = Ot.cssHooks[e] || Ot.cssHooks[s]),
              void 0 === n
                ? a && "get" in a && void 0 !== (r = a.get(t, !1, i))
                  ? r
                  : c[e]
                : ((o = typeof n),
                  "string" === o &&
                    (r = Jt.exec(n)) &&
                    r[1] &&
                    ((n = E(t, e, r)), (o = "number")),
                  null != n &&
                    n === n &&
                    ("number" !== o ||
                      l ||
                      (n += (r && r[3]) || (Ot.cssNumber[s] ? "" : "px")),
                    Tt.clearCloneStyle ||
                      "" !== n ||
                      0 !== e.indexOf("background") ||
                      (c[e] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(t, n, i))) ||
                      (l ? c.setProperty(e, n) : (c[e] = n))),
                  void 0)
            );
          }
        },
        css: function (t, e, n, i) {
          var r,
            o,
            a,
            s = y(e),
            l = Ce.test(e);
          return (
            l || (e = U(s)),
            (a = Ot.cssHooks[e] || Ot.cssHooks[s]),
            a && "get" in a && (r = a.get(t, !0, n)),
            void 0 === r && (r = q(t, e, i)),
            "normal" === r && e in Ae && (r = Ae[e]),
            "" === n || n
              ? ((o = parseFloat(r)), n === !0 || isFinite(o) ? o || 0 : r)
              : r
          );
        },
      }),
        Ot.each(["height", "width"], function (t, e) {
          Ot.cssHooks[e] = {
            get: function (t, n, i) {
              if (n)
                return !xe.test(Ot.css(t, "display")) ||
                  (t.getClientRects().length && t.getBoundingClientRect().width)
                  ? X(t, e, i)
                  : re(t, Se, function () {
                      return X(t, e, i);
                    });
            },
            set: function (t, n, i) {
              var r,
                o = be(t),
                a = !Tt.scrollboxSize() && "absolute" === o.position,
                s = a || i,
                l = s && "border-box" === Ot.css(t, "boxSizing", !1, o),
                c = i ? Y(t, e, i, l, o) : 0;
              return (
                l &&
                  a &&
                  (c -= Math.ceil(
                    t["offset" + e[0].toUpperCase() + e.slice(1)] -
                      parseFloat(o[e]) -
                      Y(t, e, "border", !1, o) -
                      0.5
                  )),
                c &&
                  (r = Jt.exec(n)) &&
                  "px" !== (r[3] || "px") &&
                  ((t.style[e] = n), (n = Ot.css(t, e))),
                z(t, n, c)
              );
            },
          };
        }),
        (Ot.cssHooks.marginLeft = B(Tt.reliableMarginLeft, function (t, e) {
          if (e)
            return (
              (parseFloat(q(t, "marginLeft")) ||
                t.getBoundingClientRect().left -
                  re(t, { marginLeft: 0 }, function () {
                    return t.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        Ot.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
          (Ot.cssHooks[t + e] = {
            expand: function (n) {
              for (
                var i = 0,
                  r = {},
                  o = "string" == typeof n ? n.split(" ") : [n];
                i < 4;
                i++
              )
                r[t + Zt[i] + e] = o[i] || o[i - 2] || o[0];
              return r;
            },
          }),
            "margin" !== t && (Ot.cssHooks[t + e].set = z);
        }),
        Ot.fn.extend({
          css: function (t, e) {
            return Vt(
              this,
              function (t, e, n) {
                var i,
                  r,
                  o = {},
                  a = 0;
                if (Array.isArray(e)) {
                  for (i = be(t), r = e.length; a < r; a++)
                    o[e[a]] = Ot.css(t, e[a], !1, i);
                  return o;
                }
                return void 0 !== n ? Ot.style(t, e, n) : Ot.css(t, e);
              },
              t,
              e,
              arguments.length > 1
            );
          },
        }),
        (Ot.Tween = G),
        (G.prototype = {
          constructor: G,
          init: function (t, e, n, i, r, o) {
            (this.elem = t),
              (this.prop = n),
              (this.easing = r || Ot.easing._default),
              (this.options = e),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = o || (Ot.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var t = G.propHooks[this.prop];
            return t && t.get ? t.get(this) : G.propHooks._default.get(this);
          },
          run: function (t) {
            var e,
              n = G.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = e = Ot.easing[this.easing](
                    t,
                    this.options.duration * t,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = e = t),
              (this.now = (this.end - this.start) * e + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : G.propHooks._default.set(this),
              this
            );
          },
        }),
        (G.prototype.init.prototype = G.prototype),
        (G.propHooks = {
          _default: {
            get: function (t) {
              var e;
              return 1 !== t.elem.nodeType ||
                (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                ? t.elem[t.prop]
                : ((e = Ot.css(t.elem, t.prop, "")), e && "auto" !== e ? e : 0);
            },
            set: function (t) {
              Ot.fx.step[t.prop]
                ? Ot.fx.step[t.prop](t)
                : 1 !== t.elem.nodeType ||
                  (!Ot.cssHooks[t.prop] && null == t.elem.style[U(t.prop)])
                ? (t.elem[t.prop] = t.now)
                : Ot.style(t.elem, t.prop, t.now + t.unit);
            },
          },
        }),
        (G.propHooks.scrollTop = G.propHooks.scrollLeft = {
          set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
          },
        }),
        (Ot.easing = {
          linear: function (t) {
            return t;
          },
          swing: function (t) {
            return 0.5 - Math.cos(t * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (Ot.fx = G.prototype.init),
        (Ot.fx.step = {});
      var Oe,
        De,
        ke = /^(?:toggle|show|hide)$/,
        Ie = /queueHooks$/;
      (Ot.Animation = Ot.extend(et, {
        tweeners: {
          "*": [
            function (t, e) {
              var n = this.createTween(t, e);
              return E(n.elem, t, Jt.exec(e), n), n;
            },
          ],
        },
        tweener: function (t, e) {
          xt(t) ? ((e = t), (t = ["*"])) : (t = t.match(Ft));
          for (var n, i = 0, r = t.length; i < r; i++)
            (n = t[i]),
              (et.tweeners[n] = et.tweeners[n] || []),
              et.tweeners[n].unshift(e);
        },
        prefilters: [Z],
        prefilter: function (t, e) {
          e ? et.prefilters.unshift(t) : et.prefilters.push(t);
        },
      })),
        (Ot.speed = function (t, e, n) {
          var i =
            t && "object" == typeof t
              ? Ot.extend({}, t)
              : {
                  complete: n || (!n && e) || (xt(t) && t),
                  duration: t,
                  easing: (n && e) || (e && !xt(e) && e),
                };
          return (
            Ot.fx.off
              ? (i.duration = 0)
              : "number" != typeof i.duration &&
                (i.duration in Ot.fx.speeds
                  ? (i.duration = Ot.fx.speeds[i.duration])
                  : (i.duration = Ot.fx.speeds._default)),
            (null != i.queue && i.queue !== !0) || (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function () {
              xt(i.old) && i.old.call(this),
                i.queue && Ot.dequeue(this, i.queue);
            }),
            i
          );
        }),
        Ot.fn.extend({
          fadeTo: function (t, e, n, i) {
            return this.filter(ie)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: e }, t, n, i);
          },
          animate: function (t, e, n, i) {
            var r = Ot.isEmptyObject(t),
              o = Ot.speed(e, n, i),
              a = function () {
                var e = et(this, Ot.extend({}, t), o);
                (r || Xt.get(this, "finish")) && e.stop(!0);
              };
            return (
              (a.finish = a),
              r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            );
          },
          stop: function (t, e, n) {
            var i = function (t) {
              var e = t.stop;
              delete t.stop, e(n);
            };
            return (
              "string" != typeof t && ((n = e), (e = t), (t = void 0)),
              e && t !== !1 && this.queue(t || "fx", []),
              this.each(function () {
                var e = !0,
                  r = null != t && t + "queueHooks",
                  o = Ot.timers,
                  a = Xt.get(this);
                if (r) a[r] && a[r].stop && i(a[r]);
                else for (r in a) a[r] && a[r].stop && Ie.test(r) && i(a[r]);
                for (r = o.length; r--; )
                  o[r].elem !== this ||
                    (null != t && o[r].queue !== t) ||
                    (o[r].anim.stop(n), (e = !1), o.splice(r, 1));
                (!e && n) || Ot.dequeue(this, t);
              })
            );
          },
          finish: function (t) {
            return (
              t !== !1 && (t = t || "fx"),
              this.each(function () {
                var e,
                  n = Xt.get(this),
                  i = n[t + "queue"],
                  r = n[t + "queueHooks"],
                  o = Ot.timers,
                  a = i ? i.length : 0;
                for (
                  n.finish = !0,
                    Ot.queue(this, t, []),
                    r && r.stop && r.stop.call(this, !0),
                    e = o.length;
                  e--;

                )
                  o[e].elem === this &&
                    o[e].queue === t &&
                    (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < a; e++)
                  i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        Ot.each(["toggle", "show", "hide"], function (t, e) {
          var n = Ot.fn[e];
          Ot.fn[e] = function (t, i, r) {
            return null == t || "boolean" == typeof t
              ? n.apply(this, arguments)
              : this.animate(Q(e, !0), t, i, r);
          };
        }),
        Ot.each(
          {
            slideDown: Q("show"),
            slideUp: Q("hide"),
            slideToggle: Q("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (t, e) {
            Ot.fn[t] = function (t, n, i) {
              return this.animate(e, t, n, i);
            };
          }
        ),
        (Ot.timers = []),
        (Ot.fx.tick = function () {
          var t,
            e = 0,
            n = Ot.timers;
          for (Oe = Date.now(); e < n.length; e++)
            (t = n[e]), t() || n[e] !== t || n.splice(e--, 1);
          n.length || Ot.fx.stop(), (Oe = void 0);
        }),
        (Ot.fx.timer = function (t) {
          Ot.timers.push(t), Ot.fx.start();
        }),
        (Ot.fx.interval = 13),
        (Ot.fx.start = function () {
          De || ((De = !0), K());
        }),
        (Ot.fx.stop = function () {
          De = null;
        }),
        (Ot.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (Ot.fn.delay = function (t, e) {
          return (
            (t = Ot.fx ? Ot.fx.speeds[t] || t : t),
            (e = e || "fx"),
            this.queue(e, function (e, i) {
              var r = n.setTimeout(e, t);
              i.stop = function () {
                n.clearTimeout(r);
              };
            })
          );
        }),
        (function () {
          var t = pt.createElement("input"),
            e = pt.createElement("select"),
            n = e.appendChild(pt.createElement("option"));
          (t.type = "checkbox"),
            (Tt.checkOn = "" !== t.value),
            (Tt.optSelected = n.selected),
            (t = pt.createElement("input")),
            (t.value = "t"),
            (t.type = "radio"),
            (Tt.radioValue = "t" === t.value);
        })();
      var Ne,
        Le = Ot.expr.attrHandle;
      Ot.fn.extend({
        attr: function (t, e) {
          return Vt(this, Ot.attr, t, e, arguments.length > 1);
        },
        removeAttr: function (t) {
          return this.each(function () {
            Ot.removeAttr(this, t);
          });
        },
      }),
        Ot.extend({
          attr: function (t, e, n) {
            var i,
              r,
              o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return "undefined" == typeof t.getAttribute
                ? Ot.prop(t, e, n)
                : ((1 === o && Ot.isXMLDoc(t)) ||
                    (r =
                      Ot.attrHooks[e.toLowerCase()] ||
                      (Ot.expr.match.bool.test(e) ? Ne : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void Ot.removeAttr(t, e)
                      : r && "set" in r && void 0 !== (i = r.set(t, n, e))
                      ? i
                      : (t.setAttribute(e, n + ""), n)
                    : r && "get" in r && null !== (i = r.get(t, e))
                    ? i
                    : ((i = Ot.find.attr(t, e)), null == i ? void 0 : i));
          },
          attrHooks: {
            type: {
              set: function (t, e) {
                if (!Tt.radioValue && "radio" === e && c(t, "input")) {
                  var n = t.value;
                  return t.setAttribute("type", e), n && (t.value = n), e;
                }
              },
            },
          },
          removeAttr: function (t, e) {
            var n,
              i = 0,
              r = e && e.match(Ft);
            if (r && 1 === t.nodeType)
              for (; (n = r[i++]); ) t.removeAttribute(n);
          },
        }),
        (Ne = {
          set: function (t, e, n) {
            return e === !1 ? Ot.removeAttr(t, n) : t.setAttribute(n, n), n;
          },
        }),
        Ot.each(Ot.expr.match.bool.source.match(/\w+/g), function (t, e) {
          var n = Le[e] || Ot.find.attr;
          Le[e] = function (t, e, i) {
            var r,
              o,
              a = e.toLowerCase();
            return (
              i ||
                ((o = Le[a]),
                (Le[a] = r),
                (r = null != n(t, e, i) ? a : null),
                (Le[a] = o)),
              r
            );
          };
        });
      var He = /^(?:input|select|textarea|button)$/i,
        Pe = /^(?:a|area)$/i;
      Ot.fn.extend({
        prop: function (t, e) {
          return Vt(this, Ot.prop, t, e, arguments.length > 1);
        },
        removeProp: function (t) {
          return this.each(function () {
            delete this[Ot.propFix[t] || t];
          });
        },
      }),
        Ot.extend({
          prop: function (t, e, n) {
            var i,
              r,
              o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && Ot.isXMLDoc(t)) ||
                  ((e = Ot.propFix[e] || e), (r = Ot.propHooks[e])),
                void 0 !== n
                  ? r && "set" in r && void 0 !== (i = r.set(t, n, e))
                    ? i
                    : (t[e] = n)
                  : r && "get" in r && null !== (i = r.get(t, e))
                  ? i
                  : t[e]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (t) {
                var e = Ot.find.attr(t, "tabindex");
                return e
                  ? parseInt(e, 10)
                  : He.test(t.nodeName) || (Pe.test(t.nodeName) && t.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        Tt.optSelected ||
          (Ot.propHooks.selected = {
            get: function (t) {
              var e = t.parentNode;
              return e && e.parentNode && e.parentNode.selectedIndex, null;
            },
            set: function (t) {
              var e = t.parentNode;
              e &&
                (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
            },
          }),
        Ot.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            Ot.propFix[this.toLowerCase()] = this;
          }
        ),
        Ot.fn.extend({
          addClass: function (t) {
            var e,
              n,
              i,
              r,
              o,
              a,
              s,
              l = 0;
            if (xt(t))
              return this.each(function (e) {
                Ot(this).addClass(t.call(this, e, it(this)));
              });
            if (((e = rt(t)), e.length))
              for (; (n = this[l++]); )
                if (
                  ((r = it(n)), (i = 1 === n.nodeType && " " + nt(r) + " "))
                ) {
                  for (a = 0; (o = e[a++]); )
                    i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                  (s = nt(i)), r !== s && n.setAttribute("class", s);
                }
            return this;
          },
          removeClass: function (t) {
            var e,
              n,
              i,
              r,
              o,
              a,
              s,
              l = 0;
            if (xt(t))
              return this.each(function (e) {
                Ot(this).removeClass(t.call(this, e, it(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if (((e = rt(t)), e.length))
              for (; (n = this[l++]); )
                if (
                  ((r = it(n)), (i = 1 === n.nodeType && " " + nt(r) + " "))
                ) {
                  for (a = 0; (o = e[a++]); )
                    for (; i.indexOf(" " + o + " ") > -1; )
                      i = i.replace(" " + o + " ", " ");
                  (s = nt(i)), r !== s && n.setAttribute("class", s);
                }
            return this;
          },
          toggleClass: function (t, e) {
            var n = typeof t,
              i = "string" === n || Array.isArray(t);
            return "boolean" == typeof e && i
              ? e
                ? this.addClass(t)
                : this.removeClass(t)
              : xt(t)
              ? this.each(function (n) {
                  Ot(this).toggleClass(t.call(this, n, it(this), e), e);
                })
              : this.each(function () {
                  var e, r, o, a;
                  if (i)
                    for (r = 0, o = Ot(this), a = rt(t); (e = a[r++]); )
                      o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                  else
                    (void 0 !== t && "boolean" !== n) ||
                      ((e = it(this)),
                      e && Xt.set(this, "__className__", e),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          e || t === !1
                            ? ""
                            : Xt.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (t) {
            var e,
              n,
              i = 0;
            for (e = " " + t + " "; (n = this[i++]); )
              if (1 === n.nodeType && (" " + nt(it(n)) + " ").indexOf(e) > -1)
                return !0;
            return !1;
          },
        });
      var je = /\r/g;
      Ot.fn.extend({
        val: function (t) {
          var e,
            n,
            i,
            r = this[0];
          {
            if (arguments.length)
              return (
                (i = xt(t)),
                this.each(function (n) {
                  var r;
                  1 === this.nodeType &&
                    ((r = i ? t.call(this, n, Ot(this).val()) : t),
                    null == r
                      ? (r = "")
                      : "number" == typeof r
                      ? (r += "")
                      : Array.isArray(r) &&
                        (r = Ot.map(r, function (t) {
                          return null == t ? "" : t + "";
                        })),
                    (e =
                      Ot.valHooks[this.type] ||
                      Ot.valHooks[this.nodeName.toLowerCase()]),
                    (e && "set" in e && void 0 !== e.set(this, r, "value")) ||
                      (this.value = r));
                })
              );
            if (r)
              return (
                (e =
                  Ot.valHooks[r.type] || Ot.valHooks[r.nodeName.toLowerCase()]),
                e && "get" in e && void 0 !== (n = e.get(r, "value"))
                  ? n
                  : ((n = r.value),
                    "string" == typeof n
                      ? n.replace(je, "")
                      : null == n
                      ? ""
                      : n)
              );
          }
        },
      }),
        Ot.extend({
          valHooks: {
            option: {
              get: function (t) {
                var e = Ot.find.attr(t, "value");
                return null != e ? e : nt(Ot.text(t));
              },
            },
            select: {
              get: function (t) {
                var e,
                  n,
                  i,
                  r = t.options,
                  o = t.selectedIndex,
                  a = "select-one" === t.type,
                  s = a ? null : [],
                  l = a ? o + 1 : r.length;
                for (i = o < 0 ? l : a ? o : 0; i < l; i++)
                  if (
                    ((n = r[i]),
                    (n.selected || i === o) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !c(n.parentNode, "optgroup")))
                  ) {
                    if (((e = Ot(n).val()), a)) return e;
                    s.push(e);
                  }
                return s;
              },
              set: function (t, e) {
                for (
                  var n, i, r = t.options, o = Ot.makeArray(e), a = r.length;
                  a--;

                )
                  (i = r[a]),
                    (i.selected =
                      Ot.inArray(Ot.valHooks.option.get(i), o) > -1) &&
                      (n = !0);
                return n || (t.selectedIndex = -1), o;
              },
            },
          },
        }),
        Ot.each(["radio", "checkbox"], function () {
          (Ot.valHooks[this] = {
            set: function (t, e) {
              if (Array.isArray(e))
                return (t.checked = Ot.inArray(Ot(t).val(), e) > -1);
            },
          }),
            Tt.checkOn ||
              (Ot.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value;
              });
        }),
        (Tt.focusin = "onfocusin" in n);
      var Me = /^(?:focusinfocus|focusoutblur)$/,
        Re = function (t) {
          t.stopPropagation();
        };
      Ot.extend(Ot.event, {
        trigger: function (t, e, i, r) {
          var o,
            a,
            s,
            l,
            c,
            u,
            f,
            p,
            d = [i || pt],
            h = wt.call(t, "type") ? t.type : t,
            m = wt.call(t, "namespace") ? t.namespace.split(".") : [];
          if (
            ((a = p = s = i = i || pt),
            3 !== i.nodeType &&
              8 !== i.nodeType &&
              !Me.test(h + Ot.event.triggered) &&
              (h.indexOf(".") > -1 &&
                ((m = h.split(".")), (h = m.shift()), m.sort()),
              (c = h.indexOf(":") < 0 && "on" + h),
              (t = t[Ot.expando]
                ? t
                : new Ot.Event(h, "object" == typeof t && t)),
              (t.isTrigger = r ? 2 : 3),
              (t.namespace = m.join(".")),
              (t.rnamespace = t.namespace
                ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (t.result = void 0),
              t.target || (t.target = i),
              (e = null == e ? [t] : Ot.makeArray(e, [t])),
              (f = Ot.event.special[h] || {}),
              r || !f.trigger || f.trigger.apply(i, e) !== !1))
          ) {
            if (!r && !f.noBubble && !Ct(i)) {
              for (
                l = f.delegateType || h, Me.test(l + h) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                d.push(a), (s = a);
              s === (i.ownerDocument || pt) &&
                d.push(s.defaultView || s.parentWindow || n);
            }
            for (o = 0; (a = d[o++]) && !t.isPropagationStopped(); )
              (p = a),
                (t.type = o > 1 ? l : f.bindType || h),
                (u =
                  (Xt.get(a, "events") || {})[t.type] && Xt.get(a, "handle")),
                u && u.apply(a, e),
                (u = c && a[c]),
                u &&
                  u.apply &&
                  Yt(a) &&
                  ((t.result = u.apply(a, e)),
                  t.result === !1 && t.preventDefault());
            return (
              (t.type = h),
              r ||
                t.isDefaultPrevented() ||
                (f._default && f._default.apply(d.pop(), e) !== !1) ||
                !Yt(i) ||
                (c &&
                  xt(i[h]) &&
                  !Ct(i) &&
                  ((s = i[c]),
                  s && (i[c] = null),
                  (Ot.event.triggered = h),
                  t.isPropagationStopped() && p.addEventListener(h, Re),
                  i[h](),
                  t.isPropagationStopped() && p.removeEventListener(h, Re),
                  (Ot.event.triggered = void 0),
                  s && (i[c] = s))),
              t.result
            );
          }
        },
        simulate: function (t, e, n) {
          var i = Ot.extend(new Ot.Event(), n, { type: t, isSimulated: !0 });
          Ot.event.trigger(i, null, e);
        },
      }),
        Ot.fn.extend({
          trigger: function (t, e) {
            return this.each(function () {
              Ot.event.trigger(t, e, this);
            });
          },
          triggerHandler: function (t, e) {
            var n = this[0];
            if (n) return Ot.event.trigger(t, e, n, !0);
          },
        }),
        Tt.focusin ||
          Ot.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
            var n = function (t) {
              Ot.event.simulate(e, t.target, Ot.event.fix(t));
            };
            Ot.event.special[e] = {
              setup: function () {
                var i = this.ownerDocument || this,
                  r = Xt.access(i, e);
                r || i.addEventListener(t, n, !0),
                  Xt.access(i, e, (r || 0) + 1);
              },
              teardown: function () {
                var i = this.ownerDocument || this,
                  r = Xt.access(i, e) - 1;
                r
                  ? Xt.access(i, e, r)
                  : (i.removeEventListener(t, n, !0), Xt.remove(i, e));
              },
            };
          });
      var We = n.location,
        Fe = Date.now(),
        qe = /\?/;
      Ot.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
          e = new n.DOMParser().parseFromString(t, "text/xml");
        } catch (i) {
          e = void 0;
        }
        return (
          (e && !e.getElementsByTagName("parsererror").length) ||
            Ot.error("Invalid XML: " + t),
          e
        );
      };
      var Be = /\[\]$/,
        Ve = /\r?\n/g,
        Ue = /^(?:submit|button|image|reset|file)$/i,
        ze = /^(?:input|select|textarea|keygen)/i;
      (Ot.param = function (t, e) {
        var n,
          i = [],
          r = function (t, e) {
            var n = xt(e) ? e() : e;
            i[i.length] =
              encodeURIComponent(t) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == t) return "";
        if (Array.isArray(t) || (t.jquery && !Ot.isPlainObject(t)))
          Ot.each(t, function () {
            r(this.name, this.value);
          });
        else for (n in t) ot(n, t[n], e, r);
        return i.join("&");
      }),
        Ot.fn.extend({
          serialize: function () {
            return Ot.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var t = Ot.prop(this, "elements");
              return t ? Ot.makeArray(t) : this;
            })
              .filter(function () {
                var t = this.type;
                return (
                  this.name &&
                  !Ot(this).is(":disabled") &&
                  ze.test(this.nodeName) &&
                  !Ue.test(t) &&
                  (this.checked || !ae.test(t))
                );
              })
              .map(function (t, e) {
                var n = Ot(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? Ot.map(n, function (t) {
                      return { name: e.name, value: t.replace(Ve, "\r\n") };
                    })
                  : { name: e.name, value: n.replace(Ve, "\r\n") };
              })
              .get();
          },
        });
      var Ye = /%20/g,
        Xe = /#.*$/,
        Ge = /([?&])_=[^&]*/,
        Ke = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        $e = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Qe = /^(?:GET|HEAD)$/,
        Je = /^\/\//,
        Ze = {},
        tn = {},
        en = "*/".concat("*"),
        nn = pt.createElement("a");
      (nn.href = We.href),
        Ot.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: We.href,
            type: "GET",
            isLocal: $e.test(We.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": en,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": Ot.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (t, e) {
            return e ? lt(lt(t, Ot.ajaxSettings), e) : lt(Ot.ajaxSettings, t);
          },
          ajaxPrefilter: at(Ze),
          ajaxTransport: at(tn),
          ajax: function (t, e) {
            function i(t, e, i, s) {
              var c,
                p,
                d,
                w,
                _,
                E = e;
              u ||
                ((u = !0),
                l && n.clearTimeout(l),
                (r = void 0),
                (a = s || ""),
                (T.readyState = t > 0 ? 4 : 0),
                (c = (t >= 200 && t < 300) || 304 === t),
                i && (w = ct(h, T, i)),
                (w = ut(h, w, T, c)),
                c
                  ? (h.ifModified &&
                      ((_ = T.getResponseHeader("Last-Modified")),
                      _ && (Ot.lastModified[o] = _),
                      (_ = T.getResponseHeader("etag")),
                      _ && (Ot.etag[o] = _)),
                    204 === t || "HEAD" === h.type
                      ? (E = "nocontent")
                      : 304 === t
                      ? (E = "notmodified")
                      : ((E = w.state), (p = w.data), (d = w.error), (c = !d)))
                  : ((d = E), (!t && E) || ((E = "error"), t < 0 && (t = 0))),
                (T.status = t),
                (T.statusText = (e || E) + ""),
                c ? v.resolveWith(m, [p, E, T]) : v.rejectWith(m, [T, E, d]),
                T.statusCode(b),
                (b = void 0),
                f &&
                  g.trigger(c ? "ajaxSuccess" : "ajaxError", [T, h, c ? p : d]),
                y.fireWith(m, [T, E]),
                f &&
                  (g.trigger("ajaxComplete", [T, h]),
                  --Ot.active || Ot.event.trigger("ajaxStop")));
            }
            "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
            var r,
              o,
              a,
              s,
              l,
              c,
              u,
              f,
              p,
              d,
              h = Ot.ajaxSetup({}, e),
              m = h.context || h,
              g = h.context && (m.nodeType || m.jquery) ? Ot(m) : Ot.event,
              v = Ot.Deferred(),
              y = Ot.Callbacks("once memory"),
              b = h.statusCode || {},
              w = {},
              _ = {},
              E = "canceled",
              T = {
                readyState: 0,
                getResponseHeader: function (t) {
                  var e;
                  if (u) {
                    if (!s)
                      for (s = {}; (e = Ke.exec(a)); )
                        s[e[1].toLowerCase() + " "] = (
                          s[e[1].toLowerCase() + " "] || []
                        ).concat(e[2]);
                    e = s[t.toLowerCase() + " "];
                  }
                  return null == e ? null : e.join(", ");
                },
                getAllResponseHeaders: function () {
                  return u ? a : null;
                },
                setRequestHeader: function (t, e) {
                  return (
                    null == u &&
                      ((t = _[t.toLowerCase()] = _[t.toLowerCase()] || t),
                      (w[t] = e)),
                    this
                  );
                },
                overrideMimeType: function (t) {
                  return null == u && (h.mimeType = t), this;
                },
                statusCode: function (t) {
                  var e;
                  if (t)
                    if (u) T.always(t[T.status]);
                    else for (e in t) b[e] = [b[e], t[e]];
                  return this;
                },
                abort: function (t) {
                  var e = t || E;
                  return r && r.abort(e), i(0, e), this;
                },
              };
            if (
              (v.promise(T),
              (h.url = ((t || h.url || We.href) + "").replace(
                Je,
                We.protocol + "//"
              )),
              (h.type = e.method || e.type || h.method || h.type),
              (h.dataTypes = (h.dataType || "*").toLowerCase().match(Ft) || [
                "",
              ]),
              null == h.crossDomain)
            ) {
              c = pt.createElement("a");
              try {
                (c.href = h.url),
                  (c.href = c.href),
                  (h.crossDomain =
                    nn.protocol + "//" + nn.host != c.protocol + "//" + c.host);
              } catch (x) {
                h.crossDomain = !0;
              }
            }
            if (
              (h.data &&
                h.processData &&
                "string" != typeof h.data &&
                (h.data = Ot.param(h.data, h.traditional)),
              st(Ze, h, e, T),
              u)
            )
              return T;
            (f = Ot.event && h.global),
              f && 0 === Ot.active++ && Ot.event.trigger("ajaxStart"),
              (h.type = h.type.toUpperCase()),
              (h.hasContent = !Qe.test(h.type)),
              (o = h.url.replace(Xe, "")),
              h.hasContent
                ? h.data &&
                  h.processData &&
                  0 ===
                    (h.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  (h.data = h.data.replace(Ye, "+"))
                : ((d = h.url.slice(o.length)),
                  h.data &&
                    (h.processData || "string" == typeof h.data) &&
                    ((o += (qe.test(o) ? "&" : "?") + h.data), delete h.data),
                  h.cache === !1 &&
                    ((o = o.replace(Ge, "$1")),
                    (d = (qe.test(o) ? "&" : "?") + "_=" + Fe++ + d)),
                  (h.url = o + d)),
              h.ifModified &&
                (Ot.lastModified[o] &&
                  T.setRequestHeader("If-Modified-Since", Ot.lastModified[o]),
                Ot.etag[o] && T.setRequestHeader("If-None-Match", Ot.etag[o])),
              ((h.data && h.hasContent && h.contentType !== !1) ||
                e.contentType) &&
                T.setRequestHeader("Content-Type", h.contentType),
              T.setRequestHeader(
                "Accept",
                h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                  ? h.accepts[h.dataTypes[0]] +
                      ("*" !== h.dataTypes[0] ? ", " + en + "; q=0.01" : "")
                  : h.accepts["*"]
              );
            for (p in h.headers) T.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (h.beforeSend.call(m, T, h) === !1 || u))
              return T.abort();
            if (
              ((E = "abort"),
              y.add(h.complete),
              T.done(h.success),
              T.fail(h.error),
              (r = st(tn, h, e, T)))
            ) {
              if (((T.readyState = 1), f && g.trigger("ajaxSend", [T, h]), u))
                return T;
              h.async &&
                h.timeout > 0 &&
                (l = n.setTimeout(function () {
                  T.abort("timeout");
                }, h.timeout));
              try {
                (u = !1), r.send(w, i);
              } catch (x) {
                if (u) throw x;
                i(-1, x);
              }
            } else i(-1, "No Transport");
            return T;
          },
          getJSON: function (t, e, n) {
            return Ot.get(t, e, n, "json");
          },
          getScript: function (t, e) {
            return Ot.get(t, void 0, e, "script");
          },
        }),
        Ot.each(["get", "post"], function (t, e) {
          Ot[e] = function (t, n, i, r) {
            return (
              xt(n) && ((r = r || i), (i = n), (n = void 0)),
              Ot.ajax(
                Ot.extend(
                  { url: t, type: e, dataType: r, data: n, success: i },
                  Ot.isPlainObject(t) && t
                )
              )
            );
          };
        }),
        (Ot._evalUrl = function (t, e) {
          return Ot.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (t) {
              Ot.globalEval(t, e);
            },
          });
        }),
        Ot.fn.extend({
          wrapAll: function (t) {
            var e;
            return (
              this[0] &&
                (xt(t) && (t = t.call(this[0])),
                (e = Ot(t, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && e.insertBefore(this[0]),
                e
                  .map(function () {
                    for (var t = this; t.firstElementChild; )
                      t = t.firstElementChild;
                    return t;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (t) {
            return xt(t)
              ? this.each(function (e) {
                  Ot(this).wrapInner(t.call(this, e));
                })
              : this.each(function () {
                  var e = Ot(this),
                    n = e.contents();
                  n.length ? n.wrapAll(t) : e.append(t);
                });
          },
          wrap: function (t) {
            var e = xt(t);
            return this.each(function (n) {
              Ot(this).wrapAll(e ? t.call(this, n) : t);
            });
          },
          unwrap: function (t) {
            return (
              this.parent(t)
                .not("body")
                .each(function () {
                  Ot(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (Ot.expr.pseudos.hidden = function (t) {
          return !Ot.expr.pseudos.visible(t);
        }),
        (Ot.expr.pseudos.visible = function (t) {
          return !!(
            t.offsetWidth ||
            t.offsetHeight ||
            t.getClientRects().length
          );
        }),
        (Ot.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (t) {}
        });
      var rn = { 0: 200, 1223: 204 },
        on = Ot.ajaxSettings.xhr();
      (Tt.cors = !!on && "withCredentials" in on),
        (Tt.ajax = on = !!on),
        Ot.ajaxTransport(function (t) {
          var e, i;
          if (Tt.cors || (on && !t.crossDomain))
            return {
              send: function (r, o) {
                var a,
                  s = t.xhr();
                if (
                  (s.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType &&
                  s.overrideMimeType &&
                  s.overrideMimeType(t.mimeType),
                  t.crossDomain ||
                    r["X-Requested-With"] ||
                    (r["X-Requested-With"] = "XMLHttpRequest");
                for (a in r) s.setRequestHeader(a, r[a]);
                (e = function (t) {
                  return function () {
                    e &&
                      ((e = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                      "abort" === t
                        ? s.abort()
                        : "error" === t
                        ? "number" != typeof s.status
                          ? o(0, "error")
                          : o(s.status, s.statusText)
                        : o(
                            rn[s.status] || s.status,
                            s.statusText,
                            "text" !== (s.responseType || "text") ||
                              "string" != typeof s.responseText
                              ? { binary: s.response }
                              : { text: s.responseText },
                            s.getAllResponseHeaders()
                          ));
                  };
                }),
                  (s.onload = e()),
                  (i = s.onerror = s.ontimeout = e("error")),
                  void 0 !== s.onabort
                    ? (s.onabort = i)
                    : (s.onreadystatechange = function () {
                        4 === s.readyState &&
                          n.setTimeout(function () {
                            e && i();
                          });
                      }),
                  (e = e("abort"));
                try {
                  s.send((t.hasContent && t.data) || null);
                } catch (l) {
                  if (e) throw l;
                }
              },
              abort: function () {
                e && e();
              },
            };
        }),
        Ot.ajaxPrefilter(function (t) {
          t.crossDomain && (t.contents.script = !1);
        }),
        Ot.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (t) {
              return Ot.globalEval(t), t;
            },
          },
        }),
        Ot.ajaxPrefilter("script", function (t) {
          void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET");
        }),
        Ot.ajaxTransport("script", function (t) {
          if (t.crossDomain || t.scriptAttrs) {
            var e, n;
            return {
              send: function (i, r) {
                (e = Ot("<script>")
                  .attr(t.scriptAttrs || {})
                  .prop({ charset: t.scriptCharset, src: t.url })
                  .on(
                    "load error",
                    (n = function (t) {
                      e.remove(),
                        (n = null),
                        t && r("error" === t.type ? 404 : 200, t.type);
                    })
                  )),
                  pt.head.appendChild(e[0]);
              },
              abort: function () {
                n && n();
              },
            };
          }
        });
      var an = [],
        sn = /(=)\?(?=&|$)|\?\?/;
      Ot.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var t = an.pop() || Ot.expando + "_" + Fe++;
          return (this[t] = !0), t;
        },
      }),
        Ot.ajaxPrefilter("json jsonp", function (t, e, i) {
          var r,
            o,
            a,
            s =
              t.jsonp !== !1 &&
              (sn.test(t.url)
                ? "url"
                : "string" == typeof t.data &&
                  0 ===
                    (t.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  sn.test(t.data) &&
                  "data");
          if (s || "jsonp" === t.dataTypes[0])
            return (
              (r = t.jsonpCallback = xt(t.jsonpCallback)
                ? t.jsonpCallback()
                : t.jsonpCallback),
              s
                ? (t[s] = t[s].replace(sn, "$1" + r))
                : t.jsonp !== !1 &&
                  (t.url += (qe.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
              (t.converters["script json"] = function () {
                return a || Ot.error(r + " was not called"), a[0];
              }),
              (t.dataTypes[0] = "json"),
              (o = n[r]),
              (n[r] = function () {
                a = arguments;
              }),
              i.always(function () {
                void 0 === o ? Ot(n).removeProp(r) : (n[r] = o),
                  t[r] && ((t.jsonpCallback = e.jsonpCallback), an.push(r)),
                  a && xt(o) && o(a[0]),
                  (a = o = void 0);
              }),
              "script"
            );
        }),
        (Tt.createHTMLDocument = (function () {
          var t = pt.implementation.createHTMLDocument("").body;
          return (
            (t.innerHTML = "<form></form><form></form>"),
            2 === t.childNodes.length
          );
        })()),
        (Ot.parseHTML = function (t, e, n) {
          if ("string" != typeof t) return [];
          "boolean" == typeof e && ((n = e), (e = !1));
          var i, r, o;
          return (
            e ||
              (Tt.createHTMLDocument
                ? ((e = pt.implementation.createHTMLDocument("")),
                  (i = e.createElement("base")),
                  (i.href = pt.location.href),
                  e.head.appendChild(i))
                : (e = pt)),
            (r = Ht.exec(t)),
            (o = !n && []),
            r
              ? [e.createElement(r[1])]
              : ((r = A([t], e, o)),
                o && o.length && Ot(o).remove(),
                Ot.merge([], r.childNodes))
          );
        }),
        (Ot.fn.load = function (t, e, n) {
          var i,
            r,
            o,
            a = this,
            s = t.indexOf(" ");
          return (
            s > -1 && ((i = nt(t.slice(s))), (t = t.slice(0, s))),
            xt(e)
              ? ((n = e), (e = void 0))
              : e && "object" == typeof e && (r = "POST"),
            a.length > 0 &&
              Ot.ajax({ url: t, type: r || "GET", dataType: "html", data: e })
                .done(function (t) {
                  (o = arguments),
                    a.html(i ? Ot("<div>").append(Ot.parseHTML(t)).find(i) : t);
                })
                .always(
                  n &&
                    function (t, e) {
                      a.each(function () {
                        n.apply(this, o || [t.responseText, e, t]);
                      });
                    }
                ),
            this
          );
        }),
        Ot.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (t, e) {
            Ot.fn[e] = function (t) {
              return this.on(e, t);
            };
          }
        ),
        (Ot.expr.pseudos.animated = function (t) {
          return Ot.grep(Ot.timers, function (e) {
            return t === e.elem;
          }).length;
        }),
        (Ot.offset = {
          setOffset: function (t, e, n) {
            var i,
              r,
              o,
              a,
              s,
              l,
              c,
              u = Ot.css(t, "position"),
              f = Ot(t),
              p = {};
            "static" === u && (t.style.position = "relative"),
              (s = f.offset()),
              (o = Ot.css(t, "top")),
              (l = Ot.css(t, "left")),
              (c =
                ("absolute" === u || "fixed" === u) &&
                (o + l).indexOf("auto") > -1),
              c
                ? ((i = f.position()), (a = i.top), (r = i.left))
                : ((a = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
              xt(e) && (e = e.call(t, n, Ot.extend({}, s))),
              null != e.top && (p.top = e.top - s.top + a),
              null != e.left && (p.left = e.left - s.left + r),
              "using" in e ? e.using.call(t, p) : f.css(p);
          },
        }),
        Ot.fn.extend({
          offset: function (t) {
            if (arguments.length)
              return void 0 === t
                ? this
                : this.each(function (e) {
                    Ot.offset.setOffset(this, t, e);
                  });
            var e,
              n,
              i = this[0];
            if (i)
              return i.getClientRects().length
                ? ((e = i.getBoundingClientRect()),
                  (n = i.ownerDocument.defaultView),
                  { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
                : { top: 0, left: 0 };
          },
          position: function () {
            if (this[0]) {
              var t,
                e,
                n,
                i = this[0],
                r = { top: 0, left: 0 };
              if ("fixed" === Ot.css(i, "position"))
                e = i.getBoundingClientRect();
              else {
                for (
                  e = this.offset(),
                    n = i.ownerDocument,
                    t = i.offsetParent || n.documentElement;
                  t &&
                  (t === n.body || t === n.documentElement) &&
                  "static" === Ot.css(t, "position");

                )
                  t = t.parentNode;
                t &&
                  t !== i &&
                  1 === t.nodeType &&
                  ((r = Ot(t).offset()),
                  (r.top += Ot.css(t, "borderTopWidth", !0)),
                  (r.left += Ot.css(t, "borderLeftWidth", !0)));
              }
              return {
                top: e.top - r.top - Ot.css(i, "marginTop", !0),
                left: e.left - r.left - Ot.css(i, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var t = this.offsetParent;
                t && "static" === Ot.css(t, "position");

              )
                t = t.offsetParent;
              return t || te;
            });
          },
        }),
        Ot.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (t, e) {
            var n = "pageYOffset" === e;
            Ot.fn[t] = function (i) {
              return Vt(
                this,
                function (t, i, r) {
                  var o;
                  return (
                    Ct(t) ? (o = t) : 9 === t.nodeType && (o = t.defaultView),
                    void 0 === r
                      ? o
                        ? o[e]
                        : t[i]
                      : void (o
                          ? o.scrollTo(
                              n ? o.pageXOffset : r,
                              n ? r : o.pageYOffset
                            )
                          : (t[i] = r))
                  );
                },
                t,
                i,
                arguments.length
              );
            };
          }
        ),
        Ot.each(["top", "left"], function (t, e) {
          Ot.cssHooks[e] = B(Tt.pixelPosition, function (t, n) {
            if (n)
              return (n = q(t, e)), ye.test(n) ? Ot(t).position()[e] + "px" : n;
          });
        }),
        Ot.each({ Height: "height", Width: "width" }, function (t, e) {
          Ot.each(
            { padding: "inner" + t, content: e, "": "outer" + t },
            function (n, i) {
              Ot.fn[i] = function (r, o) {
                var a = arguments.length && (n || "boolean" != typeof r),
                  s = n || (r === !0 || o === !0 ? "margin" : "border");
                return Vt(
                  this,
                  function (e, n, r) {
                    var o;
                    return Ct(e)
                      ? 0 === i.indexOf("outer")
                        ? e["inner" + t]
                        : e.document.documentElement["client" + t]
                      : 9 === e.nodeType
                      ? ((o = e.documentElement),
                        Math.max(
                          e.body["scroll" + t],
                          o["scroll" + t],
                          e.body["offset" + t],
                          o["offset" + t],
                          o["client" + t]
                        ))
                      : void 0 === r
                      ? Ot.css(e, n, s)
                      : Ot.style(e, n, r, s);
                  },
                  e,
                  a ? r : void 0,
                  a
                );
              };
            }
          );
        }),
        Ot.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (t, e) {
            Ot.fn[e] = function (t, n) {
              return arguments.length > 0
                ? this.on(e, null, t, n)
                : this.trigger(e);
            };
          }
        ),
        Ot.fn.extend({
          hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t);
          },
        }),
        Ot.fn.extend({
          bind: function (t, e, n) {
            return this.on(t, null, e, n);
          },
          unbind: function (t, e) {
            return this.off(t, null, e);
          },
          delegate: function (t, e, n, i) {
            return this.on(e, t, n, i);
          },
          undelegate: function (t, e, n) {
            return 1 === arguments.length
              ? this.off(t, "**")
              : this.off(e, t || "**", n);
          },
        }),
        (Ot.proxy = function (t, e) {
          var n, i, r;
          if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), xt(t)))
            return (
              (i = ht.call(arguments, 2)),
              (r = function () {
                return t.apply(e || this, i.concat(ht.call(arguments)));
              }),
              (r.guid = t.guid = t.guid || Ot.guid++),
              r
            );
        }),
        (Ot.holdReady = function (t) {
          t ? Ot.readyWait++ : Ot.ready(!0);
        }),
        (Ot.isArray = Array.isArray),
        (Ot.parseJSON = JSON.parse),
        (Ot.nodeName = c),
        (Ot.isFunction = xt),
        (Ot.isWindow = Ct),
        (Ot.camelCase = y),
        (Ot.type = s),
        (Ot.now = Date.now),
        (Ot.isNumeric = function (t) {
          var e = Ot.type(t);
          return (
            ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
          );
        }),
        (i = []),
        (r = function () {
          return Ot;
        }.apply(e, i)),
        !(void 0 !== r && (t.exports = r));
      var ln = n.jQuery,
        cn = n.$;
      return (
        (Ot.noConflict = function (t) {
          return (
            n.$ === Ot && (n.$ = cn),
            t && n.jQuery === Ot && (n.jQuery = ln),
            Ot
          );
        }),
        o || (n.jQuery = n.$ = Ot),
        Ot
      );
    });
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      function (t) {
        function n(t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              window.Promise.resolve().then(function () {
                (e = !1), t();
              }));
          };
        }
        function i(t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              setTimeout(function () {
                (e = !1), t();
              }, pt));
          };
        }
        function r(t) {
          var e = {};
          return t && "[object Function]" === e.toString.call(t);
        }
        function o(t, e) {
          if (1 !== t.nodeType) return [];
          var n = t.ownerDocument.defaultView,
            i = n.getComputedStyle(t, null);
          return e ? i[e] : i;
        }
        function a(t) {
          return "HTML" === t.nodeName ? t : t.parentNode || t.host;
        }
        function s(t) {
          if (!t) return document.body;
          switch (t.nodeName) {
            case "HTML":
            case "BODY":
              return t.ownerDocument.body;
            case "#document":
              return t.body;
          }
          var e = o(t),
            n = e.overflow,
            i = e.overflowX,
            r = e.overflowY;
          return /(auto|scroll|overlay)/.test(n + r + i) ? t : s(a(t));
        }
        function l(t) {
          return 11 === t ? gt : 10 === t ? vt : gt || vt;
        }
        function c(t) {
          if (!t) return document.documentElement;
          for (
            var e = l(10) ? document.body : null, n = t.offsetParent || null;
            n === e && t.nextElementSibling;

          )
            n = (t = t.nextElementSibling).offsetParent;
          var i = n && n.nodeName;
          return i && "BODY" !== i && "HTML" !== i
            ? ["TH", "TD", "TABLE"].indexOf(n.nodeName) !== -1 &&
              "static" === o(n, "position")
              ? c(n)
              : n
            : t
            ? t.ownerDocument.documentElement
            : document.documentElement;
        }
        function u(t) {
          var e = t.nodeName;
          return "BODY" !== e && ("HTML" === e || c(t.firstElementChild) === t);
        }
        function f(t) {
          return null !== t.parentNode ? f(t.parentNode) : t;
        }
        function p(t, e) {
          if (!(t && t.nodeType && e && e.nodeType))
            return document.documentElement;
          var n =
              t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            r = n ? e : t,
            o = document.createRange();
          o.setStart(i, 0), o.setEnd(r, 0);
          var a = o.commonAncestorContainer;
          if ((t !== a && e !== a) || i.contains(r)) return u(a) ? a : c(a);
          var s = f(t);
          return s.host ? p(s.host, e) : p(t, f(e).host);
        }
        function d(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "top",
            n = "top" === e ? "scrollTop" : "scrollLeft",
            i = t.nodeName;
          if ("BODY" === i || "HTML" === i) {
            var r = t.ownerDocument.documentElement,
              o = t.ownerDocument.scrollingElement || r;
            return o[n];
          }
          return t[n];
        }
        function h(t, e) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = d(e, "top"),
            r = d(e, "left"),
            o = n ? -1 : 1;
          return (
            (t.top += i * o),
            (t.bottom += i * o),
            (t.left += r * o),
            (t.right += r * o),
            t
          );
        }
        function m(t, e) {
          var n = "x" === e ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
          return (
            parseFloat(t["border" + n + "Width"], 10) +
            parseFloat(t["border" + i + "Width"], 10)
          );
        }
        function g(t, e, n, i) {
          return Math.max(
            e["offset" + t],
            e["scroll" + t],
            n["client" + t],
            n["offset" + t],
            n["scroll" + t],
            l(10)
              ? parseInt(n["offset" + t]) +
                  parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) +
                  parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")])
              : 0
          );
        }
        function v(t) {
          var e = t.body,
            n = t.documentElement,
            i = l(10) && getComputedStyle(n);
          return { height: g("Height", e, n, i), width: g("Width", e, n, i) };
        }
        function y(t) {
          return _t({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height,
          });
        }
        function b(t) {
          var e = {};
          try {
            if (l(10)) {
              e = t.getBoundingClientRect();
              var n = d(t, "top"),
                i = d(t, "left");
              (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
            } else e = t.getBoundingClientRect();
          } catch (r) {}
          var a = {
              left: e.left,
              top: e.top,
              width: e.right - e.left,
              height: e.bottom - e.top,
            },
            s = "HTML" === t.nodeName ? v(t.ownerDocument) : {},
            c = s.width || t.clientWidth || a.right - a.left,
            u = s.height || t.clientHeight || a.bottom - a.top,
            f = t.offsetWidth - c,
            p = t.offsetHeight - u;
          if (f || p) {
            var h = o(t);
            (f -= m(h, "x")), (p -= m(h, "y")), (a.width -= f), (a.height -= p);
          }
          return y(a);
        }
        function w(t, e) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = l(10),
            r = "HTML" === e.nodeName,
            a = b(t),
            c = b(e),
            u = s(t),
            f = o(e),
            p = parseFloat(f.borderTopWidth, 10),
            d = parseFloat(f.borderLeftWidth, 10);
          n &&
            r &&
            ((c.top = Math.max(c.top, 0)), (c.left = Math.max(c.left, 0)));
          var m = y({
            top: a.top - c.top - p,
            left: a.left - c.left - d,
            width: a.width,
            height: a.height,
          });
          if (((m.marginTop = 0), (m.marginLeft = 0), !i && r)) {
            var g = parseFloat(f.marginTop, 10),
              v = parseFloat(f.marginLeft, 10);
            (m.top -= p - g),
              (m.bottom -= p - g),
              (m.left -= d - v),
              (m.right -= d - v),
              (m.marginTop = g),
              (m.marginLeft = v);
          }
          return (
            (i && !n ? e.contains(u) : e === u && "BODY" !== u.nodeName) &&
              (m = h(m, e)),
            m
          );
        }
        function _(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = t.ownerDocument.documentElement,
            i = w(t, n),
            r = Math.max(n.clientWidth, window.innerWidth || 0),
            o = Math.max(n.clientHeight, window.innerHeight || 0),
            a = e ? 0 : d(n),
            s = e ? 0 : d(n, "left"),
            l = {
              top: a - i.top + i.marginTop,
              left: s - i.left + i.marginLeft,
              width: r,
              height: o,
            };
          return y(l);
        }
        function E(t) {
          var e = t.nodeName;
          if ("BODY" === e || "HTML" === e) return !1;
          if ("fixed" === o(t, "position")) return !0;
          var n = a(t);
          return !!n && E(n);
        }
        function T(t) {
          if (!t || !t.parentElement || l()) return document.documentElement;
          for (var e = t.parentElement; e && "none" === o(e, "transform"); )
            e = e.parentElement;
          return e || document.documentElement;
        }
        function x(t, e, n, i) {
          var r =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o = { top: 0, left: 0 },
            l = r ? T(t) : p(t, e);
          if ("viewport" === i) o = _(l, r);
          else {
            var c = void 0;
            "scrollParent" === i
              ? ((c = s(a(e))),
                "BODY" === c.nodeName && (c = t.ownerDocument.documentElement))
              : (c = "window" === i ? t.ownerDocument.documentElement : i);
            var u = w(c, l, r);
            if ("HTML" !== c.nodeName || E(l)) o = u;
            else {
              var f = v(t.ownerDocument),
                d = f.height,
                h = f.width;
              (o.top += u.top - u.marginTop),
                (o.bottom = d + u.top),
                (o.left += u.left - u.marginLeft),
                (o.right = h + u.left);
            }
          }
          n = n || 0;
          var m = "number" == typeof n;
          return (
            (o.left += m ? n : n.left || 0),
            (o.top += m ? n : n.top || 0),
            (o.right -= m ? n : n.right || 0),
            (o.bottom -= m ? n : n.bottom || 0),
            o
          );
        }
        function C(t) {
          var e = t.width,
            n = t.height;
          return e * n;
        }
        function S(t, e, n, i, r) {
          var o =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (t.indexOf("auto") === -1) return t;
          var a = x(n, i, o, r),
            s = {
              top: { width: a.width, height: e.top - a.top },
              right: { width: a.right - e.right, height: a.height },
              bottom: { width: a.width, height: a.bottom - e.bottom },
              left: { width: e.left - a.left, height: a.height },
            },
            l = Object.keys(s)
              .map(function (t) {
                return _t({ key: t }, s[t], { area: C(s[t]) });
              })
              .sort(function (t, e) {
                return e.area - t.area;
              }),
            c = l.filter(function (t) {
              var e = t.width,
                i = t.height;
              return e >= n.clientWidth && i >= n.clientHeight;
            }),
            u = c.length > 0 ? c[0].key : l[0].key,
            f = t.split("-")[1];
          return u + (f ? "-" + f : "");
        }
        function A(t, e, n) {
          var i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null,
            r = i ? T(e) : p(e, n);
          return w(n, r, i);
        }
        function O(t) {
          var e = t.ownerDocument.defaultView,
            n = e.getComputedStyle(t),
            i = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0),
            r = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0),
            o = { width: t.offsetWidth + r, height: t.offsetHeight + i };
          return o;
        }
        function D(t) {
          var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom",
          };
          return t.replace(/left|right|bottom|top/g, function (t) {
            return e[t];
          });
        }
        function k(t, e, n) {
          n = n.split("-")[0];
          var i = O(t),
            r = { width: i.width, height: i.height },
            o = ["right", "left"].indexOf(n) !== -1,
            a = o ? "top" : "left",
            s = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
          return (
            (r[a] = e[a] + e[l] / 2 - i[l] / 2),
            n === s ? (r[s] = e[s] - i[c]) : (r[s] = e[D(s)]),
            r
          );
        }
        function I(t, e) {
          return Array.prototype.find ? t.find(e) : t.filter(e)[0];
        }
        function N(t, e, n) {
          if (Array.prototype.findIndex)
            return t.findIndex(function (t) {
              return t[e] === n;
            });
          var i = I(t, function (t) {
            return t[e] === n;
          });
          return t.indexOf(i);
        }
        function L(t, e, n) {
          var i = void 0 === n ? t : t.slice(0, N(t, "name", n));
          return (
            i.forEach(function (t) {
              t["function"] &&
                console.warn(
                  "`modifier.function` is deprecated, use `modifier.fn`!"
                );
              var n = t["function"] || t.fn;
              t.enabled &&
                r(n) &&
                ((e.offsets.popper = y(e.offsets.popper)),
                (e.offsets.reference = y(e.offsets.reference)),
                (e = n(e, t)));
            }),
            e
          );
        }
        function H() {
          if (!this.state.isDestroyed) {
            var t = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {},
            };
            (t.offsets.reference = A(
              this.state,
              this.popper,
              this.reference,
              this.options.positionFixed
            )),
              (t.placement = S(
                this.options.placement,
                t.offsets.reference,
                this.popper,
                this.reference,
                this.options.modifiers.flip.boundariesElement,
                this.options.modifiers.flip.padding
              )),
              (t.originalPlacement = t.placement),
              (t.positionFixed = this.options.positionFixed),
              (t.offsets.popper = k(
                this.popper,
                t.offsets.reference,
                t.placement
              )),
              (t.offsets.popper.position = this.options.positionFixed
                ? "fixed"
                : "absolute"),
              (t = L(this.modifiers, t)),
              this.state.isCreated
                ? this.options.onUpdate(t)
                : ((this.state.isCreated = !0), this.options.onCreate(t));
          }
        }
        function P(t, e) {
          return t.some(function (t) {
            var n = t.name,
              i = t.enabled;
            return i && n === e;
          });
        }
        function j(t) {
          for (
            var e = [!1, "ms", "Webkit", "Moz", "O"],
              n = t.charAt(0).toUpperCase() + t.slice(1),
              i = 0;
            i < e.length;
            i++
          ) {
            var r = e[i],
              o = r ? "" + r + n : t;
            if ("undefined" != typeof document.body.style[o]) return o;
          }
          return null;
        }
        function M() {
          return (
            (this.state.isDestroyed = !0),
            P(this.modifiers, "applyStyle") &&
              (this.popper.removeAttribute("x-placement"),
              (this.popper.style.position = ""),
              (this.popper.style.top = ""),
              (this.popper.style.left = ""),
              (this.popper.style.right = ""),
              (this.popper.style.bottom = ""),
              (this.popper.style.willChange = ""),
              (this.popper.style[j("transform")] = "")),
            this.disableEventListeners(),
            this.options.removeOnDestroy &&
              this.popper.parentNode.removeChild(this.popper),
            this
          );
        }
        function R(t) {
          var e = t.ownerDocument;
          return e ? e.defaultView : window;
        }
        function W(t, e, n, i) {
          var r = "BODY" === t.nodeName,
            o = r ? t.ownerDocument.defaultView : t;
          o.addEventListener(e, n, { passive: !0 }),
            r || W(s(o.parentNode), e, n, i),
            i.push(o);
        }
        function F(t, e, n, i) {
          (n.updateBound = i),
            R(t).addEventListener("resize", n.updateBound, { passive: !0 });
          var r = s(t);
          return (
            W(r, "scroll", n.updateBound, n.scrollParents),
            (n.scrollElement = r),
            (n.eventsEnabled = !0),
            n
          );
        }
        function q() {
          this.state.eventsEnabled ||
            (this.state = F(
              this.reference,
              this.options,
              this.state,
              this.scheduleUpdate
            ));
        }
        function B(t, e) {
          return (
            R(t).removeEventListener("resize", e.updateBound),
            e.scrollParents.forEach(function (t) {
              t.removeEventListener("scroll", e.updateBound);
            }),
            (e.updateBound = null),
            (e.scrollParents = []),
            (e.scrollElement = null),
            (e.eventsEnabled = !1),
            e
          );
        }
        function V() {
          this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state = B(this.reference, this.state)));
        }
        function U(t) {
          return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
        }
        function z(t, e) {
          Object.keys(e).forEach(function (n) {
            var i = "";
            ["width", "height", "top", "right", "bottom", "left"].indexOf(n) !==
              -1 &&
              U(e[n]) &&
              (i = "px"),
              (t.style[n] = e[n] + i);
          });
        }
        function Y(t, e) {
          Object.keys(e).forEach(function (n) {
            var i = e[n];
            i !== !1 ? t.setAttribute(n, e[n]) : t.removeAttribute(n);
          });
        }
        function X(t) {
          return (
            z(t.instance.popper, t.styles),
            Y(t.instance.popper, t.attributes),
            t.arrowElement &&
              Object.keys(t.arrowStyles).length &&
              z(t.arrowElement, t.arrowStyles),
            t
          );
        }
        function G(t, e, n, i, r) {
          var o = A(r, e, t, n.positionFixed),
            a = S(
              n.placement,
              o,
              e,
              t,
              n.modifiers.flip.boundariesElement,
              n.modifiers.flip.padding
            );
          return (
            e.setAttribute("x-placement", a),
            z(e, { position: n.positionFixed ? "fixed" : "absolute" }),
            n
          );
        }
        function K(t, e) {
          var n = t.offsets,
            i = n.popper,
            r = n.reference,
            o = Math.round,
            a = Math.floor,
            s = function (t) {
              return t;
            },
            l = o(r.width),
            c = o(i.width),
            u = ["left", "right"].indexOf(t.placement) !== -1,
            f = t.placement.indexOf("-") !== -1,
            p = l % 2 === c % 2,
            d = l % 2 === 1 && c % 2 === 1,
            h = e ? (u || f || p ? o : a) : s,
            m = e ? o : s;
          return {
            left: h(d && !f && e ? i.left - 1 : i.left),
            top: m(i.top),
            bottom: m(i.bottom),
            right: h(i.right),
          };
        }
        function $(t, e) {
          var n = e.x,
            i = e.y,
            r = t.offsets.popper,
            o = I(t.instance.modifiers, function (t) {
              return "applyStyle" === t.name;
            }).gpuAcceleration;
          void 0 !== o &&
            console.warn(
              "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
            );
          var a = void 0 !== o ? o : e.gpuAcceleration,
            s = c(t.instance.popper),
            l = b(s),
            u = { position: r.position },
            f = K(t, window.devicePixelRatio < 2 || !Et),
            p = "bottom" === n ? "top" : "bottom",
            d = "right" === i ? "left" : "right",
            h = j("transform"),
            m = void 0,
            g = void 0;
          if (
            ((g =
              "bottom" === p
                ? "HTML" === s.nodeName
                  ? -s.clientHeight + f.bottom
                  : -l.height + f.bottom
                : f.top),
            (m =
              "right" === d
                ? "HTML" === s.nodeName
                  ? -s.clientWidth + f.right
                  : -l.width + f.right
                : f.left),
            a && h)
          )
            (u[h] = "translate3d(" + m + "px, " + g + "px, 0)"),
              (u[p] = 0),
              (u[d] = 0),
              (u.willChange = "transform");
          else {
            var v = "bottom" === p ? -1 : 1,
              y = "right" === d ? -1 : 1;
            (u[p] = g * v), (u[d] = m * y), (u.willChange = p + ", " + d);
          }
          var w = { "x-placement": t.placement };
          return (
            (t.attributes = _t({}, w, t.attributes)),
            (t.styles = _t({}, u, t.styles)),
            (t.arrowStyles = _t({}, t.offsets.arrow, t.arrowStyles)),
            t
          );
        }
        function Q(t, e, n) {
          var i = I(t, function (t) {
              var n = t.name;
              return n === e;
            }),
            r =
              !!i &&
              t.some(function (t) {
                return t.name === n && t.enabled && t.order < i.order;
              });
          if (!r) {
            var o = "`" + e + "`",
              a = "`" + n + "`";
            console.warn(
              a +
                " modifier is required by " +
                o +
                " modifier in order to work, be sure to include it before " +
                o +
                "!"
            );
          }
          return r;
        }
        function J(t, e) {
          var n;
          if (!Q(t.instance.modifiers, "arrow", "keepTogether")) return t;
          var i = e.element;
          if ("string" == typeof i) {
            if (((i = t.instance.popper.querySelector(i)), !i)) return t;
          } else if (!t.instance.popper.contains(i))
            return (
              console.warn(
                "WARNING: `arrow.element` must be child of its popper element!"
              ),
              t
            );
          var r = t.placement.split("-")[0],
            a = t.offsets,
            s = a.popper,
            l = a.reference,
            c = ["left", "right"].indexOf(r) !== -1,
            u = c ? "height" : "width",
            f = c ? "Top" : "Left",
            p = f.toLowerCase(),
            d = c ? "left" : "top",
            h = c ? "bottom" : "right",
            m = O(i)[u];
          l[h] - m < s[p] && (t.offsets.popper[p] -= s[p] - (l[h] - m)),
            l[p] + m > s[h] && (t.offsets.popper[p] += l[p] + m - s[h]),
            (t.offsets.popper = y(t.offsets.popper));
          var g = l[p] + l[u] / 2 - m / 2,
            v = o(t.instance.popper),
            b = parseFloat(v["margin" + f], 10),
            w = parseFloat(v["border" + f + "Width"], 10),
            _ = g - t.offsets.popper[p] - b - w;
          return (
            (_ = Math.max(Math.min(s[u] - m, _), 0)),
            (t.arrowElement = i),
            (t.offsets.arrow =
              ((n = {}), wt(n, p, Math.round(_)), wt(n, d, ""), n)),
            t
          );
        }
        function Z(t) {
          return "end" === t ? "start" : "start" === t ? "end" : t;
        }
        function tt(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = xt.indexOf(t),
            i = xt.slice(n + 1).concat(xt.slice(0, n));
          return e ? i.reverse() : i;
        }
        function et(t, e) {
          if (P(t.instance.modifiers, "inner")) return t;
          if (t.flipped && t.placement === t.originalPlacement) return t;
          var n = x(
              t.instance.popper,
              t.instance.reference,
              e.padding,
              e.boundariesElement,
              t.positionFixed
            ),
            i = t.placement.split("-")[0],
            r = D(i),
            o = t.placement.split("-")[1] || "",
            a = [];
          switch (e.behavior) {
            case Ct.FLIP:
              a = [i, r];
              break;
            case Ct.CLOCKWISE:
              a = tt(i);
              break;
            case Ct.COUNTERCLOCKWISE:
              a = tt(i, !0);
              break;
            default:
              a = e.behavior;
          }
          return (
            a.forEach(function (s, l) {
              if (i !== s || a.length === l + 1) return t;
              (i = t.placement.split("-")[0]), (r = D(i));
              var c = t.offsets.popper,
                u = t.offsets.reference,
                f = Math.floor,
                p =
                  ("left" === i && f(c.right) > f(u.left)) ||
                  ("right" === i && f(c.left) < f(u.right)) ||
                  ("top" === i && f(c.bottom) > f(u.top)) ||
                  ("bottom" === i && f(c.top) < f(u.bottom)),
                d = f(c.left) < f(n.left),
                h = f(c.right) > f(n.right),
                m = f(c.top) < f(n.top),
                g = f(c.bottom) > f(n.bottom),
                v =
                  ("left" === i && d) ||
                  ("right" === i && h) ||
                  ("top" === i && m) ||
                  ("bottom" === i && g),
                y = ["top", "bottom"].indexOf(i) !== -1,
                b =
                  !!e.flipVariations &&
                  ((y && "start" === o && d) ||
                    (y && "end" === o && h) ||
                    (!y && "start" === o && m) ||
                    (!y && "end" === o && g)),
                w =
                  !!e.flipVariationsByContent &&
                  ((y && "start" === o && h) ||
                    (y && "end" === o && d) ||
                    (!y && "start" === o && g) ||
                    (!y && "end" === o && m)),
                _ = b || w;
              (p || v || _) &&
                ((t.flipped = !0),
                (p || v) && (i = a[l + 1]),
                _ && (o = Z(o)),
                (t.placement = i + (o ? "-" + o : "")),
                (t.offsets.popper = _t(
                  {},
                  t.offsets.popper,
                  k(t.instance.popper, t.offsets.reference, t.placement)
                )),
                (t = L(t.instance.modifiers, t, "flip")));
            }),
            t
          );
        }
        function nt(t) {
          var e = t.offsets,
            n = e.popper,
            i = e.reference,
            r = t.placement.split("-")[0],
            o = Math.floor,
            a = ["top", "bottom"].indexOf(r) !== -1,
            s = a ? "right" : "bottom",
            l = a ? "left" : "top",
            c = a ? "width" : "height";
          return (
            n[s] < o(i[l]) && (t.offsets.popper[l] = o(i[l]) - n[c]),
            n[l] > o(i[s]) && (t.offsets.popper[l] = o(i[s])),
            t
          );
        }
        function it(t, e, n, i) {
          var r = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            o = +r[1],
            a = r[2];
          if (!o) return t;
          if (0 === a.indexOf("%")) {
            var s = void 0;
            switch (a) {
              case "%p":
                s = n;
                break;
              case "%":
              case "%r":
              default:
                s = i;
            }
            var l = y(s);
            return (l[e] / 100) * o;
          }
          if ("vh" === a || "vw" === a) {
            var c = void 0;
            return (
              (c =
                "vh" === a
                  ? Math.max(
                      document.documentElement.clientHeight,
                      window.innerHeight || 0
                    )
                  : Math.max(
                      document.documentElement.clientWidth,
                      window.innerWidth || 0
                    )),
              (c / 100) * o
            );
          }
          return o;
        }
        function rt(t, e, n, i) {
          var r = [0, 0],
            o = ["right", "left"].indexOf(i) !== -1,
            a = t.split(/(\+|\-)/).map(function (t) {
              return t.trim();
            }),
            s = a.indexOf(
              I(a, function (t) {
                return t.search(/,|\s/) !== -1;
              })
            );
          a[s] &&
            a[s].indexOf(",") === -1 &&
            console.warn(
              "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
            );
          var l = /\s*,\s*|\s+/,
            c =
              s !== -1
                ? [
                    a.slice(0, s).concat([a[s].split(l)[0]]),
                    [a[s].split(l)[1]].concat(a.slice(s + 1)),
                  ]
                : [a];
          return (
            (c = c.map(function (t, i) {
              var r = (1 === i ? !o : o) ? "height" : "width",
                a = !1;
              return t
                .reduce(function (t, e) {
                  return "" === t[t.length - 1] && ["+", "-"].indexOf(e) !== -1
                    ? ((t[t.length - 1] = e), (a = !0), t)
                    : a
                    ? ((t[t.length - 1] += e), (a = !1), t)
                    : t.concat(e);
                }, [])
                .map(function (t) {
                  return it(t, r, e, n);
                });
            })),
            c.forEach(function (t, e) {
              t.forEach(function (n, i) {
                U(n) && (r[e] += n * ("-" === t[i - 1] ? -1 : 1));
              });
            }),
            r
          );
        }
        function ot(t, e) {
          var n = e.offset,
            i = t.placement,
            r = t.offsets,
            o = r.popper,
            a = r.reference,
            s = i.split("-")[0],
            l = void 0;
          return (
            (l = U(+n) ? [+n, 0] : rt(n, o, a, s)),
            "left" === s
              ? ((o.top += l[0]), (o.left -= l[1]))
              : "right" === s
              ? ((o.top += l[0]), (o.left += l[1]))
              : "top" === s
              ? ((o.left += l[0]), (o.top -= l[1]))
              : "bottom" === s && ((o.left += l[0]), (o.top += l[1])),
            (t.popper = o),
            t
          );
        }
        function at(t, e) {
          var n = e.boundariesElement || c(t.instance.popper);
          t.instance.reference === n && (n = c(n));
          var i = j("transform"),
            r = t.instance.popper.style,
            o = r.top,
            a = r.left,
            s = r[i];
          (r.top = ""), (r.left = ""), (r[i] = "");
          var l = x(
            t.instance.popper,
            t.instance.reference,
            e.padding,
            n,
            t.positionFixed
          );
          (r.top = o), (r.left = a), (r[i] = s), (e.boundaries = l);
          var u = e.priority,
            f = t.offsets.popper,
            p = {
              primary: function (t) {
                var n = f[t];
                return (
                  f[t] < l[t] &&
                    !e.escapeWithReference &&
                    (n = Math.max(f[t], l[t])),
                  wt({}, t, n)
                );
              },
              secondary: function (t) {
                var n = "right" === t ? "left" : "top",
                  i = f[n];
                return (
                  f[t] > l[t] &&
                    !e.escapeWithReference &&
                    (i = Math.min(
                      f[n],
                      l[t] - ("right" === t ? f.width : f.height)
                    )),
                  wt({}, n, i)
                );
              },
            };
          return (
            u.forEach(function (t) {
              var e =
                ["left", "top"].indexOf(t) !== -1 ? "primary" : "secondary";
              f = _t({}, f, p[e](t));
            }),
            (t.offsets.popper = f),
            t
          );
        }
        function st(t) {
          var e = t.placement,
            n = e.split("-")[0],
            i = e.split("-")[1];
          if (i) {
            var r = t.offsets,
              o = r.reference,
              a = r.popper,
              s = ["bottom", "top"].indexOf(n) !== -1,
              l = s ? "left" : "top",
              c = s ? "width" : "height",
              u = {
                start: wt({}, l, o[l]),
                end: wt({}, l, o[l] + o[c] - a[c]),
              };
            t.offsets.popper = _t({}, a, u[i]);
          }
          return t;
        }
        function lt(t) {
          if (!Q(t.instance.modifiers, "hide", "preventOverflow")) return t;
          var e = t.offsets.reference,
            n = I(t.instance.modifiers, function (t) {
              return "preventOverflow" === t.name;
            }).boundaries;
          if (
            e.bottom < n.top ||
            e.left > n.right ||
            e.top > n.bottom ||
            e.right < n.left
          ) {
            if (t.hide === !0) return t;
            (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
          } else {
            if (t.hide === !1) return t;
            (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
          }
          return t;
        }
        function ct(t) {
          var e = t.placement,
            n = e.split("-")[0],
            i = t.offsets,
            r = i.popper,
            o = i.reference,
            a = ["left", "right"].indexOf(n) !== -1,
            s = ["top", "left"].indexOf(n) === -1;
          return (
            (r[a ? "left" : "top"] =
              o[n] - (s ? r[a ? "width" : "height"] : 0)),
            (t.placement = D(e)),
            (t.offsets.popper = y(r)),
            t
          );
        }
        for (
          var ut =
              "undefined" != typeof window && "undefined" != typeof document,
            ft = ["Edge", "Trident", "Firefox"],
            pt = 0,
            dt = 0;
          dt < ft.length;
          dt += 1
        )
          if (ut && navigator.userAgent.indexOf(ft[dt]) >= 0) {
            pt = 1;
            break;
          }
        var ht = ut && window.Promise,
          mt = ht ? n : i,
          gt = ut && !(!window.MSInputMethodContext || !document.documentMode),
          vt = ut && /MSIE 10/.test(navigator.userAgent),
          yt = function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          },
          bt = (function () {
            function t(t, e) {
              for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(t, i.key, i);
              }
            }
            return function (e, n, i) {
              return n && t(e.prototype, n), i && t(e, i), e;
            };
          })(),
          wt = function (t, e, n) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = n),
              t
            );
          },
          _t =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
              }
              return t;
            },
          Et = ut && /Firefox/i.test(navigator.userAgent),
          Tt = [
            "auto-start",
            "auto",
            "auto-end",
            "top-start",
            "top",
            "top-end",
            "right-start",
            "right",
            "right-end",
            "bottom-end",
            "bottom",
            "bottom-start",
            "left-end",
            "left",
            "left-start",
          ],
          xt = Tt.slice(3),
          Ct = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise",
          },
          St = {
            shift: { order: 100, enabled: !0, fn: st },
            offset: { order: 200, enabled: !0, fn: ot, offset: 0 },
            preventOverflow: {
              order: 300,
              enabled: !0,
              fn: at,
              priority: ["left", "right", "top", "bottom"],
              padding: 5,
              boundariesElement: "scrollParent",
            },
            keepTogether: { order: 400, enabled: !0, fn: nt },
            arrow: { order: 500, enabled: !0, fn: J, element: "[x-arrow]" },
            flip: {
              order: 600,
              enabled: !0,
              fn: et,
              behavior: "flip",
              padding: 5,
              boundariesElement: "viewport",
              flipVariations: !1,
              flipVariationsByContent: !1,
            },
            inner: { order: 700, enabled: !1, fn: ct },
            hide: { order: 800, enabled: !0, fn: lt },
            computeStyle: {
              order: 850,
              enabled: !0,
              fn: $,
              gpuAcceleration: !0,
              x: "bottom",
              y: "right",
            },
            applyStyle: {
              order: 900,
              enabled: !0,
              fn: X,
              onLoad: G,
              gpuAcceleration: void 0,
            },
          },
          At = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: St,
          },
          Ot = (function () {
            function t(e, n) {
              var i = this,
                o =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
              yt(this, t),
                (this.scheduleUpdate = function () {
                  return requestAnimationFrame(i.update);
                }),
                (this.update = mt(this.update.bind(this))),
                (this.options = _t({}, t.Defaults, o)),
                (this.state = {
                  isDestroyed: !1,
                  isCreated: !1,
                  scrollParents: [],
                }),
                (this.reference = e && e.jquery ? e[0] : e),
                (this.popper = n && n.jquery ? n[0] : n),
                (this.options.modifiers = {}),
                Object.keys(_t({}, t.Defaults.modifiers, o.modifiers)).forEach(
                  function (e) {
                    i.options.modifiers[e] = _t(
                      {},
                      t.Defaults.modifiers[e] || {},
                      o.modifiers ? o.modifiers[e] : {}
                    );
                  }
                ),
                (this.modifiers = Object.keys(this.options.modifiers)
                  .map(function (t) {
                    return _t({ name: t }, i.options.modifiers[t]);
                  })
                  .sort(function (t, e) {
                    return t.order - e.order;
                  })),
                this.modifiers.forEach(function (t) {
                  t.enabled &&
                    r(t.onLoad) &&
                    t.onLoad(i.reference, i.popper, i.options, t, i.state);
                }),
                this.update();
              var a = this.options.eventsEnabled;
              a && this.enableEventListeners(), (this.state.eventsEnabled = a);
            }
            return (
              bt(t, [
                {
                  key: "update",
                  value: function () {
                    return H.call(this);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    return M.call(this);
                  },
                },
                {
                  key: "enableEventListeners",
                  value: function () {
                    return q.call(this);
                  },
                },
                {
                  key: "disableEventListeners",
                  value: function () {
                    return V.call(this);
                  },
                },
              ]),
              t
            );
          })();
        (Ot.Utils = ("undefined" != typeof window ? window : t).PopperUtils),
          (Ot.placements = Tt),
          (Ot.Defaults = At),
          (e["default"] = Ot);
      }.call(e, n(2));
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (i) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e, n) {
    t.exports = n(4);
  },
  function (t, e, n) {
    "use strict";
    function i(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function r(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    }
    var o = n(0),
      a = i(o),
      s = n(5);
    i(s);
    n(6);
    var l = n(7),
      c = i(l),
      u = n(8),
      f = i(u),
      p = n(9),
      d = i(p),
      h = n(10),
      m = i(h),
      g = n(11),
      v = i(g);
    (window.$ = a["default"]), (window.jQuery = a["default"]);
    new v["default"]();
    (0, a["default"])(document).ready(function (t) {
      function e() {
        var e = t(".header__status"),
          n = t(".drift-trigger");
        e.add(n).on("click", function (e) {
          if (
            (n.css("opacity", 0.5), !t(this).hasClass("header__status--active"))
          ) {
            t.getScript("/templates/drift.js", function (e, n, i) {
              t(this).addClass("header__status--active");
            });
          }
        }),
          e.on("mouseenter", function (e) {
            t(this).html("Chat now");
          }),
          e.on("mouseleave", function (e) {
            t(this).html("Online");
          });
      }
      function n() {
        t("body").on("click", function (e) {
          var n = t(".header__burger"),
            i = t("#header-menu");
          0 == t(e.target).parent().closest(n).length && i.collapse("hide");
        });
      }
      function i() {
        (0,
        m[
          "default"
        ])("[data-tippy]", { arrow: !0, arrowType: "round", animation: "scale", followCursor: !0 });
      }
      function o() {
        new d["default"](".glide", {
          type: "carousel",
          startAt: 0,
          perView: 3,
          slideWidth: 380,
          hoverpause: !0,
          breakpoints: { 800: { perView: 1 }, 1e3: { perView: 2 } },
        }).mount();
      }
      function a() {
        var e = t(".header");
        t(window).scrollTop() > 0
          ? e.addClass("header--scrolling")
          : e.removeClass("header--scrolling");
      }
      function s() {
        t("[data-lightbox]").on("click", function (e) {
          e.preventDefault();
          var n = t(this).attr("href");
          (0, c["default"])(n);
        });
      }
      function l() {
        var e = t("#contact-form");
        e.submit(function (n) {
          var i;
          n.preventDefault();
          var o = t(this).attr("action");
          t.ajax(
            ((i = {
              type: "POST",
              url: o,
              crossDomain: !0,
              data: new FormData(this),
              dataType: "json",
              contentType: "multipart/form-data",
              processData: !1,
            }),
            r(i, "contentType", !1),
            r(i, "headers", { Accept: "application/json" }),
            r(i, "beforeSend", function () {
              e.addClass("form--submitting");
            }),
            r(i, "success", function () {
              e.html(
                '<p class="lead text-center">Thanks for your message. I\'ll be in touch shortly. 🙂</p>'
              );
            }),
            r(i, "fail", function () {
              e.html(
                '<p class="lead text-center">An error occured while attempting to submit. Please try again.</p>'
              );
            }),
            i)
          );
        }),
          t('a[href="#contact"]').on("click", function (t) {
            e.find("input").first().focus();
          });
      }
      function u() {
        !(function (t) {
          (window.fnames = new Array()),
            (window.ftypes = new Array()),
            (fnames[0] = "EMAIL"),
            (ftypes[0] = "email"),
            (fnames[1] = "FNAME"),
            (ftypes[1] = "text"),
            (fnames[2] = "LNAME"),
            (ftypes[2] = "text"),
            (fnames[3] = "ADDRESS"),
            (ftypes[3] = "address"),
            (fnames[4] = "PHONE"),
            (ftypes[4] = "phone");
        })(jQuery);
        jQuery.noConflict(!0);
      }
      function p() {
        t("[data-package]").on("click", function (e) {
          var n = t(this).data("package");
          t('select[name="package"]').val(n);
        });
      }
      function h() {
        t('a[href*="#"]:not([href="#"])').click(function (e) {
          if (
            (t(e.target).hasClass("header__menu-link") &&
              t("#header-menu").collapse("hide"),
            location.pathname.replace(/^\//, "") ===
              this.pathname.replace(/^\//, "") &&
              location.hostname === this.hostname)
          ) {
            var n = t(this.hash),
              i = (t("#header"), 56);
            if (
              ((n = n.length ? n : t("[name=" + this.hash.slice(1) + "]")),
              "pricing" == t(n).attr("id") && (i = 0),
              n.length && "buy" !== t(n).attr("id"))
            )
              return (
                t("html, body").animate({ scrollTop: n.offset().top - i }, 500),
                !1
              );
          }
        });
      }
      f["default"].init({
        disable: function () {
          var t = 960;
          return window.innerWidth < t;
        },
      });
      a(),
        o(),
        s(),
        h(),
        i(),
        l(),
        u(),
        p(),
        n(),
        e(),
        t(window).scroll(function (t) {
          a();
        }),
        t("body").scrollspy({ target: "#menu", offset: 200 });
    });
  },
  function (t, e, n) {
    !(function (e, n) {
      t.exports = n();
    })(this, function () {
      return (function (t) {
        function e(i) {
          if (n[i]) return n[i].exports;
          var r = (n[i] = { exports: {}, id: i, loaded: !1 });
          return (
            t[i].call(r.exports, r, r.exports, e), (r.loaded = !0), r.exports
          );
        }
        var n = {};
        return (e.m = t), (e.c = n), (e.p = ""), e(0);
      })([
        function (t, e) {
          "use strict";
          t.exports = (function () {
            var t = "initial",
              e = null,
              n = document.documentElement,
              i = ["input", "select", "textarea"],
              r = [],
              o = [16, 17, 18, 91, 93],
              a = [9],
              s = {
                keydown: "keyboard",
                keyup: "keyboard",
                mousedown: "mouse",
                mousemove: "mouse",
                MSPointerDown: "pointer",
                MSPointerMove: "pointer",
                pointerdown: "pointer",
                pointermove: "pointer",
                touchstart: "touch",
              },
              l = [],
              c = !1,
              u = !1,
              f = { x: null, y: null },
              p = { 2: "touch", 3: "touch", 4: "mouse" },
              d = !1;
            try {
              var h = Object.defineProperty({}, "passive", {
                get: function () {
                  d = !0;
                },
              });
              window.addEventListener("test", null, h);
            } catch (m) {}
            var g = function () {
                (s[x()] = "mouse"), v(), b();
              },
              v = function () {
                var t = !!d && { passive: !0 };
                window.PointerEvent
                  ? (n.addEventListener("pointerdown", y),
                    n.addEventListener("pointermove", w))
                  : window.MSPointerEvent
                  ? (n.addEventListener("MSPointerDown", y),
                    n.addEventListener("MSPointerMove", w))
                  : (n.addEventListener("mousedown", y),
                    n.addEventListener("mousemove", w),
                    "ontouchstart" in window &&
                      (n.addEventListener("touchstart", _, t),
                      n.addEventListener("touchend", _))),
                  n.addEventListener(x(), w, t),
                  n.addEventListener("keydown", y),
                  n.addEventListener("keyup", y);
              },
              y = function (n) {
                if (!c) {
                  var r = n.which,
                    l = s[n.type];
                  if (("pointer" === l && (l = T(n)), t !== l || e !== l)) {
                    var u = document.activeElement,
                      f = !1,
                      p =
                        u &&
                        u.nodeName &&
                        i.indexOf(u.nodeName.toLowerCase()) === -1;
                    (p || a.indexOf(r) !== -1) && (f = !0),
                      ("touch" === l ||
                        "mouse" === l ||
                        ("keyboard" === l && r && f && o.indexOf(r) === -1)) &&
                        ((t = e = l), b());
                  }
                }
              },
              b = function () {
                n.setAttribute("data-whatinput", t),
                  n.setAttribute("data-whatintent", t),
                  l.indexOf(t) === -1 &&
                    (l.push(t), (n.className += " whatinput-types-" + t)),
                  E("input");
              },
              w = function (t) {
                if (
                  (f.x !== t.screenX || f.y !== t.screenY
                    ? ((u = !1), (f.x = t.screenX), (f.y = t.screenY))
                    : (u = !0),
                  !c && !u)
                ) {
                  var i = s[t.type];
                  "pointer" === i && (i = T(t)),
                    e !== i &&
                      ((e = i),
                      n.setAttribute("data-whatintent", e),
                      E("intent"));
                }
              },
              _ = function (t) {
                "touchstart" === t.type ? ((c = !1), y(t)) : (c = !0);
              },
              E = function (t) {
                for (var n = 0, i = r.length; n < i; n++)
                  r[n].type === t && r[n].fn.call(void 0, e);
              },
              T = function (t) {
                return "number" == typeof t.pointerType
                  ? p[t.pointerType]
                  : "pen" === t.pointerType
                  ? "touch"
                  : t.pointerType;
              },
              x = function () {
                var t = void 0;
                return (t =
                  "onwheel" in document.createElement("div")
                    ? "wheel"
                    : void 0 !== document.onmousewheel
                    ? "mousewheel"
                    : "DOMMouseScroll");
              },
              C = function (t) {
                for (var e = 0, n = r.length; e < n; e++)
                  if (r[e].fn === t) return e;
              };
            return (
              "addEventListener" in window && Array.prototype.indexOf && g(),
              {
                ask: function (n) {
                  return "loose" === n ? e : t;
                },
                types: function () {
                  return l;
                },
                ignoreKeys: function (t) {
                  o = t;
                },
                registerOnChange: function (t, e) {
                  r.push({ fn: t, type: e || "input" });
                },
                unRegisterOnChange: function (t) {
                  var e = C(t);
                  e && r.splice(e, 1);
                },
              }
            );
          })();
        },
      ]);
    });
  },
  function (t, e, n) {
    !(function (t, i) {
      i(e, n(0), n(1));
    })(this, function (t, e, n) {
      "use strict";
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      function r(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t;
      }
      function o(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            i.forEach(function (e) {
              o(t, e, n[e]);
            });
        }
        return t;
      }
      function s(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      function l(t) {
        return {}.toString
          .call(t)
          .match(/\s([a-z]+)/i)[1]
          .toLowerCase();
      }
      function c() {
        return {
          bindType: h,
          delegateType: h,
          handle: function (t) {
            if (e(t.target).is(this))
              return t.handleObj.handler.apply(this, arguments);
          },
        };
      }
      function u(t) {
        var n = this,
          i = !1;
        return (
          e(this).one(v.TRANSITION_END, function () {
            i = !0;
          }),
          setTimeout(function () {
            i || v.triggerTransitionEnd(n);
          }, t),
          this
        );
      }
      function f() {
        (e.fn.emulateTransitionEnd = u),
          (e.event.special[v.TRANSITION_END] = c());
      }
      function p(t, e) {
        var n = t.nodeName.toLowerCase();
        if (e.indexOf(n) !== -1)
          return (
            Gt.indexOf(n) === -1 ||
            Boolean(t.nodeValue.match(Qt) || t.nodeValue.match(Jt))
          );
        for (
          var i = e.filter(function (t) {
              return t instanceof RegExp;
            }),
            r = 0,
            o = i.length;
          r < o;
          r++
        )
          if (n.match(i[r])) return !0;
        return !1;
      }
      function d(t, e, n) {
        if (0 === t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (
          var i = new window.DOMParser(),
            r = i.parseFromString(t, "text/html"),
            o = Object.keys(e),
            a = [].slice.call(r.body.querySelectorAll("*")),
            s = function (t, n) {
              var i = a[t],
                r = i.nodeName.toLowerCase();
              if (o.indexOf(i.nodeName.toLowerCase()) === -1)
                return i.parentNode.removeChild(i), "continue";
              var s = [].slice.call(i.attributes),
                l = [].concat(e["*"] || [], e[r] || []);
              s.forEach(function (t) {
                p(t, l) || i.removeAttribute(t.nodeName);
              });
            },
            l = 0,
            c = a.length;
          l < c;
          l++
        ) {
          s(l, c);
        }
        return r.body.innerHTML;
      }
      (e = e && e.hasOwnProperty("default") ? e["default"] : e),
        (n = n && n.hasOwnProperty("default") ? n["default"] : n);
      var h = "transitionend",
        m = 1e6,
        g = 1e3,
        v = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function (t) {
            do t += ~~(Math.random() * m);
            while (document.getElementById(t));
            return t;
          },
          getSelectorFromElement: function (t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
              var n = t.getAttribute("href");
              e = n && "#" !== n ? n.trim() : "";
            }
            try {
              return document.querySelector(e) ? e : null;
            } catch (i) {
              return null;
            }
          },
          getTransitionDurationFromElement: function (t) {
            if (!t) return 0;
            var n = e(t).css("transition-duration"),
              i = e(t).css("transition-delay"),
              r = parseFloat(n),
              o = parseFloat(i);
            return r || o
              ? ((n = n.split(",")[0]),
                (i = i.split(",")[0]),
                (parseFloat(n) + parseFloat(i)) * g)
              : 0;
          },
          reflow: function (t) {
            return t.offsetHeight;
          },
          triggerTransitionEnd: function (t) {
            e(t).trigger(h);
          },
          supportsTransitionEnd: function () {
            return Boolean(h);
          },
          isElement: function (t) {
            return (t[0] || t).nodeType;
          },
          typeCheckConfig: function (t, e, n) {
            for (var i in n)
              if (Object.prototype.hasOwnProperty.call(n, i)) {
                var r = n[i],
                  o = e[i],
                  a = o && v.isElement(o) ? "element" : l(o);
                if (!new RegExp(r).test(a))
                  throw new Error(
                    t.toUpperCase() +
                      ": " +
                      ('Option "' + i + '" provided type "' + a + '" ') +
                      ('but expected type "' + r + '".')
                  );
              }
          },
          findShadowRoot: function (t) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
              var e = t.getRootNode();
              return e instanceof ShadowRoot ? e : null;
            }
            return t instanceof ShadowRoot
              ? t
              : t.parentNode
              ? v.findShadowRoot(t.parentNode)
              : null;
          },
        };
      f();
      var y = "alert",
        b = "4.3.1",
        w = "bs.alert",
        _ = "." + w,
        E = ".data-api",
        T = e.fn[y],
        x = { DISMISS: '[data-dismiss="alert"]' },
        C = {
          CLOSE: "close" + _,
          CLOSED: "closed" + _,
          CLICK_DATA_API: "click" + _ + E,
        },
        S = { ALERT: "alert", FADE: "fade", SHOW: "show" },
        A = (function () {
          function t(t) {
            this._element = t;
          }
          var n = t.prototype;
          return (
            (n.close = function (t) {
              var e = this._element;
              t && (e = this._getRootElement(t));
              var n = this._triggerCloseEvent(e);
              n.isDefaultPrevented() || this._removeElement(e);
            }),
            (n.dispose = function () {
              e.removeData(this._element, w), (this._element = null);
            }),
            (n._getRootElement = function (t) {
              var n = v.getSelectorFromElement(t),
                i = !1;
              return (
                n && (i = document.querySelector(n)),
                i || (i = e(t).closest("." + S.ALERT)[0]),
                i
              );
            }),
            (n._triggerCloseEvent = function (t) {
              var n = e.Event(C.CLOSE);
              return e(t).trigger(n), n;
            }),
            (n._removeElement = function (t) {
              var n = this;
              if ((e(t).removeClass(S.SHOW), !e(t).hasClass(S.FADE)))
                return void this._destroyElement(t);
              var i = v.getTransitionDurationFromElement(t);
              e(t)
                .one(v.TRANSITION_END, function (e) {
                  return n._destroyElement(t, e);
                })
                .emulateTransitionEnd(i);
            }),
            (n._destroyElement = function (t) {
              e(t).detach().trigger(C.CLOSED).remove();
            }),
            (t._jQueryInterface = function (n) {
              return this.each(function () {
                var i = e(this),
                  r = i.data(w);
                r || ((r = new t(this)), i.data(w, r)),
                  "close" === n && r[n](this);
              });
            }),
            (t._handleDismiss = function (t) {
              return function (e) {
                e && e.preventDefault(), t.close(this);
              };
            }),
            r(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return b;
                },
              },
            ]),
            t
          );
        })();
      e(document).on(C.CLICK_DATA_API, x.DISMISS, A._handleDismiss(new A())),
        (e.fn[y] = A._jQueryInterface),
        (e.fn[y].Constructor = A),
        (e.fn[y].noConflict = function () {
          return (e.fn[y] = T), A._jQueryInterface;
        });
      var O = "button",
        D = "4.3.1",
        k = "bs.button",
        I = "." + k,
        N = ".data-api",
        L = e.fn[O],
        H = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" },
        P = {
          DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
          DATA_TOGGLE: '[data-toggle="buttons"]',
          INPUT: 'input:not([type="hidden"])',
          ACTIVE: ".active",
          BUTTON: ".btn",
        },
        j = {
          CLICK_DATA_API: "click" + I + N,
          FOCUS_BLUR_DATA_API: "focus" + I + N + " " + ("blur" + I + N),
        },
        M = (function () {
          function t(t) {
            this._element = t;
          }
          var n = t.prototype;
          return (
            (n.toggle = function () {
              var t = !0,
                n = !0,
                i = e(this._element).closest(P.DATA_TOGGLE)[0];
              if (i) {
                var r = this._element.querySelector(P.INPUT);
                if (r) {
                  if ("radio" === r.type)
                    if (r.checked && this._element.classList.contains(H.ACTIVE))
                      t = !1;
                    else {
                      var o = i.querySelector(P.ACTIVE);
                      o && e(o).removeClass(H.ACTIVE);
                    }
                  if (t) {
                    if (
                      r.hasAttribute("disabled") ||
                      i.hasAttribute("disabled") ||
                      r.classList.contains("disabled") ||
                      i.classList.contains("disabled")
                    )
                      return;
                    (r.checked = !this._element.classList.contains(H.ACTIVE)),
                      e(r).trigger("change");
                  }
                  r.focus(), (n = !1);
                }
              }
              n &&
                this._element.setAttribute(
                  "aria-pressed",
                  !this._element.classList.contains(H.ACTIVE)
                ),
                t && e(this._element).toggleClass(H.ACTIVE);
            }),
            (n.dispose = function () {
              e.removeData(this._element, k), (this._element = null);
            }),
            (t._jQueryInterface = function (n) {
              return this.each(function () {
                var i = e(this).data(k);
                i || ((i = new t(this)), e(this).data(k, i)),
                  "toggle" === n && i[n]();
              });
            }),
            r(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return D;
                },
              },
            ]),
            t
          );
        })();
      e(document)
        .on(j.CLICK_DATA_API, P.DATA_TOGGLE_CARROT, function (t) {
          t.preventDefault();
          var n = t.target;
          e(n).hasClass(H.BUTTON) || (n = e(n).closest(P.BUTTON)),
            M._jQueryInterface.call(e(n), "toggle");
        })
        .on(j.FOCUS_BLUR_DATA_API, P.DATA_TOGGLE_CARROT, function (t) {
          var n = e(t.target).closest(P.BUTTON)[0];
          e(n).toggleClass(H.FOCUS, /^focus(in)?$/.test(t.type));
        }),
        (e.fn[O] = M._jQueryInterface),
        (e.fn[O].Constructor = M),
        (e.fn[O].noConflict = function () {
          return (e.fn[O] = L), M._jQueryInterface;
        });
      var R = "carousel",
        W = "4.3.1",
        F = "bs.carousel",
        q = "." + F,
        B = ".data-api",
        V = e.fn[R],
        U = 37,
        z = 39,
        Y = 500,
        X = 40,
        G = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0,
          touch: !0,
        },
        K = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean",
          touch: "boolean",
        },
        $ = { NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right" },
        Q = {
          SLIDE: "slide" + q,
          SLID: "slid" + q,
          KEYDOWN: "keydown" + q,
          MOUSEENTER: "mouseenter" + q,
          MOUSELEAVE: "mouseleave" + q,
          TOUCHSTART: "touchstart" + q,
          TOUCHMOVE: "touchmove" + q,
          TOUCHEND: "touchend" + q,
          POINTERDOWN: "pointerdown" + q,
          POINTERUP: "pointerup" + q,
          DRAG_START: "dragstart" + q,
          LOAD_DATA_API: "load" + q + B,
          CLICK_DATA_API: "click" + q + B,
        },
        J = {
          CAROUSEL: "carousel",
          ACTIVE: "active",
          SLIDE: "slide",
          RIGHT: "carousel-item-right",
          LEFT: "carousel-item-left",
          NEXT: "carousel-item-next",
          PREV: "carousel-item-prev",
          ITEM: "carousel-item",
          POINTER_EVENT: "pointer-event",
        },
        Z = {
          ACTIVE: ".active",
          ACTIVE_ITEM: ".active.carousel-item",
          ITEM: ".carousel-item",
          ITEM_IMG: ".carousel-item img",
          NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
          INDICATORS: ".carousel-indicators",
          DATA_SLIDE: "[data-slide], [data-slide-to]",
          DATA_RIDE: '[data-ride="carousel"]',
        },
        tt = { TOUCH: "touch", PEN: "pen" },
        et = (function () {
          function t(t, e) {
            (this._items = null),
              (this._interval = null),
              (this._activeElement = null),
              (this._isPaused = !1),
              (this._isSliding = !1),
              (this.touchTimeout = null),
              (this.touchStartX = 0),
              (this.touchDeltaX = 0),
              (this._config = this._getConfig(e)),
              (this._element = t),
              (this._indicatorsElement = this._element.querySelector(
                Z.INDICATORS
              )),
              (this._touchSupported =
                "ontouchstart" in document.documentElement ||
                navigator.maxTouchPoints > 0),
              (this._pointerEvent = Boolean(
                window.PointerEvent || window.MSPointerEvent
              )),
              this._addEventListeners();
          }
          var n = t.prototype;
          return (
            (n.next = function () {
              this._isSliding || this._slide($.NEXT);
            }),
            (n.nextWhenVisible = function () {
              !document.hidden &&
                e(this._element).is(":visible") &&
                "hidden" !== e(this._element).css("visibility") &&
                this.next();
            }),
            (n.prev = function () {
              this._isSliding || this._slide($.PREV);
            }),
            (n.pause = function (t) {
              t || (this._isPaused = !0),
                this._element.querySelector(Z.NEXT_PREV) &&
                  (v.triggerTransitionEnd(this._element), this.cycle(!0)),
                clearInterval(this._interval),
                (this._interval = null);
            }),
            (n.cycle = function (t) {
              t || (this._isPaused = !1),
                this._interval &&
                  (clearInterval(this._interval), (this._interval = null)),
                this._config.interval &&
                  !this._isPaused &&
                  (this._interval = setInterval(
                    (document.visibilityState
                      ? this.nextWhenVisible
                      : this.next
                    ).bind(this),
                    this._config.interval
                  ));
            }),
            (n.to = function (t) {
              var n = this;
              this._activeElement = this._element.querySelector(Z.ACTIVE_ITEM);
              var i = this._getItemIndex(this._activeElement);
              if (!(t > this._items.length - 1 || t < 0)) {
                if (this._isSliding)
                  return void e(this._element).one(Q.SLID, function () {
                    return n.to(t);
                  });
                if (i === t) return this.pause(), void this.cycle();
                var r = t > i ? $.NEXT : $.PREV;
                this._slide(r, this._items[t]);
              }
            }),
            (n.dispose = function () {
              e(this._element).off(q),
                e.removeData(this._element, F),
                (this._items = null),
                (this._config = null),
                (this._element = null),
                (this._interval = null),
                (this._isPaused = null),
                (this._isSliding = null),
                (this._activeElement = null),
                (this._indicatorsElement = null);
            }),
            (n._getConfig = function (t) {
              return (t = a({}, G, t)), v.typeCheckConfig(R, t, K), t;
            }),
            (n._handleSwipe = function () {
              var t = Math.abs(this.touchDeltaX);
              if (!(t <= X)) {
                var e = t / this.touchDeltaX;
                e > 0 && this.prev(), e < 0 && this.next();
              }
            }),
            (n._addEventListeners = function () {
              var t = this;
              this._config.keyboard &&
                e(this._element).on(Q.KEYDOWN, function (e) {
                  return t._keydown(e);
                }),
                "hover" === this._config.pause &&
                  e(this._element)
                    .on(Q.MOUSEENTER, function (e) {
                      return t.pause(e);
                    })
                    .on(Q.MOUSELEAVE, function (e) {
                      return t.cycle(e);
                    }),
                this._config.touch && this._addTouchEventListeners();
            }),
            (n._addTouchEventListeners = function () {
              var t = this;
              if (this._touchSupported) {
                var n = function (e) {
                    t._pointerEvent &&
                    tt[e.originalEvent.pointerType.toUpperCase()]
                      ? (t.touchStartX = e.originalEvent.clientX)
                      : t._pointerEvent ||
                        (t.touchStartX = e.originalEvent.touches[0].clientX);
                  },
                  i = function (e) {
                    e.originalEvent.touches &&
                    e.originalEvent.touches.length > 1
                      ? (t.touchDeltaX = 0)
                      : (t.touchDeltaX =
                          e.originalEvent.touches[0].clientX - t.touchStartX);
                  },
                  r = function (e) {
                    t._pointerEvent &&
                      tt[e.originalEvent.pointerType.toUpperCase()] &&
                      (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                      t._handleSwipe(),
                      "hover" === t._config.pause &&
                        (t.pause(),
                        t.touchTimeout && clearTimeout(t.touchTimeout),
                        (t.touchTimeout = setTimeout(function (e) {
                          return t.cycle(e);
                        }, Y + t._config.interval)));
                  };
                e(this._element.querySelectorAll(Z.ITEM_IMG)).on(
                  Q.DRAG_START,
                  function (t) {
                    return t.preventDefault();
                  }
                ),
                  this._pointerEvent
                    ? (e(this._element).on(Q.POINTERDOWN, function (t) {
                        return n(t);
                      }),
                      e(this._element).on(Q.POINTERUP, function (t) {
                        return r(t);
                      }),
                      this._element.classList.add(J.POINTER_EVENT))
                    : (e(this._element).on(Q.TOUCHSTART, function (t) {
                        return n(t);
                      }),
                      e(this._element).on(Q.TOUCHMOVE, function (t) {
                        return i(t);
                      }),
                      e(this._element).on(Q.TOUCHEND, function (t) {
                        return r(t);
                      }));
              }
            }),
            (n._keydown = function (t) {
              if (!/input|textarea/i.test(t.target.tagName))
                switch (t.which) {
                  case U:
                    t.preventDefault(), this.prev();
                    break;
                  case z:
                    t.preventDefault(), this.next();
                }
            }),
            (n._getItemIndex = function (t) {
              return (
                (this._items =
                  t && t.parentNode
                    ? [].slice.call(t.parentNode.querySelectorAll(Z.ITEM))
                    : []),
                this._items.indexOf(t)
              );
            }),
            (n._getItemByDirection = function (t, e) {
              var n = t === $.NEXT,
                i = t === $.PREV,
                r = this._getItemIndex(e),
                o = this._items.length - 1,
                a = (i && 0 === r) || (n && r === o);
              if (a && !this._config.wrap) return e;
              var s = t === $.PREV ? -1 : 1,
                l = (r + s) % this._items.length;
              return l === -1
                ? this._items[this._items.length - 1]
                : this._items[l];
            }),
            (n._triggerSlideEvent = function (t, n) {
              var i = this._getItemIndex(t),
                r = this._getItemIndex(
                  this._element.querySelector(Z.ACTIVE_ITEM)
                ),
                o = e.Event(Q.SLIDE, {
                  relatedTarget: t,
                  direction: n,
                  from: r,
                  to: i,
                });
              return e(this._element).trigger(o), o;
            }),
            (n._setActiveIndicatorElement = function (t) {
              if (this._indicatorsElement) {
                var n = [].slice.call(
                  this._indicatorsElement.querySelectorAll(Z.ACTIVE)
                );
                e(n).removeClass(J.ACTIVE);
                var i = this._indicatorsElement.children[this._getItemIndex(t)];
                i && e(i).addClass(J.ACTIVE);
              }
            }),
            (n._slide = function (t, n) {
              var i,
                r,
                o,
                a = this,
                s = this._element.querySelector(Z.ACTIVE_ITEM),
                l = this._getItemIndex(s),
                c = n || (s && this._getItemByDirection(t, s)),
                u = this._getItemIndex(c),
                f = Boolean(this._interval);
              if (
                (t === $.NEXT
                  ? ((i = J.LEFT), (r = J.NEXT), (o = $.LEFT))
                  : ((i = J.RIGHT), (r = J.PREV), (o = $.RIGHT)),
                c && e(c).hasClass(J.ACTIVE))
              )
                return void (this._isSliding = !1);
              var p = this._triggerSlideEvent(c, o);
              if (!p.isDefaultPrevented() && s && c) {
                (this._isSliding = !0),
                  f && this.pause(),
                  this._setActiveIndicatorElement(c);
                var d = e.Event(Q.SLID, {
                  relatedTarget: c,
                  direction: o,
                  from: l,
                  to: u,
                });
                if (e(this._element).hasClass(J.SLIDE)) {
                  e(c).addClass(r),
                    v.reflow(c),
                    e(s).addClass(i),
                    e(c).addClass(i);
                  var h = parseInt(c.getAttribute("data-interval"), 10);
                  h
                    ? ((this._config.defaultInterval =
                        this._config.defaultInterval || this._config.interval),
                      (this._config.interval = h))
                    : (this._config.interval =
                        this._config.defaultInterval || this._config.interval);
                  var m = v.getTransitionDurationFromElement(s);
                  e(s)
                    .one(v.TRANSITION_END, function () {
                      e(c)
                        .removeClass(i + " " + r)
                        .addClass(J.ACTIVE),
                        e(s).removeClass(J.ACTIVE + " " + r + " " + i),
                        (a._isSliding = !1),
                        setTimeout(function () {
                          return e(a._element).trigger(d);
                        }, 0);
                    })
                    .emulateTransitionEnd(m);
                } else
                  e(s).removeClass(J.ACTIVE),
                    e(c).addClass(J.ACTIVE),
                    (this._isSliding = !1),
                    e(this._element).trigger(d);
                f && this.cycle();
              }
            }),
            (t._jQueryInterface = function (n) {
              return this.each(function () {
                var i = e(this).data(F),
                  r = a({}, G, e(this).data());
                "object" == typeof n && (r = a({}, r, n));
                var o = "string" == typeof n ? n : r.slide;
                if (
                  (i || ((i = new t(this, r)), e(this).data(F, i)),
                  "number" == typeof n)
                )
                  i.to(n);
                else if ("string" == typeof o) {
                  if ("undefined" == typeof i[o])
                    throw new TypeError('No method named "' + o + '"');
                  i[o]();
                } else r.interval && r.ride && (i.pause(), i.cycle());
              });
            }),
            (t._dataApiClickHandler = function (n) {
              var i = v.getSelectorFromElement(this);
              if (i) {
                var r = e(i)[0];
                if (r && e(r).hasClass(J.CAROUSEL)) {
                  var o = a({}, e(r).data(), e(this).data()),
                    s = this.getAttribute("data-slide-to");
                  s && (o.interval = !1),
                    t._jQueryInterface.call(e(r), o),
                    s && e(r).data(F).to(s),
                    n.preventDefault();
                }
              }
            }),
            r(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return W;
                },
              },
              {
                key: "Default",
                get: function () {
                  return G;
                },
              },
            ]),
            t
          );
        })();
      e(document).on(Q.CLICK_DATA_API, Z.DATA_SLIDE, et._dataApiClickHandler),
        e(window).on(Q.LOAD_DATA_API, function () {
          for (
            var t = [].slice.call(document.querySelectorAll(Z.DATA_RIDE)),
              n = 0,
              i = t.length;
            n < i;
            n++
          ) {
            var r = e(t[n]);
            et._jQueryInterface.call(r, r.data());
          }
        }),
        (e.fn[R] = et._jQueryInterface),
        (e.fn[R].Constructor = et),
        (e.fn[R].noConflict = function () {
          return (e.fn[R] = V), et._jQueryInterface;
        });
      var nt = "collapse",
        it = "4.3.1",
        rt = "bs.collapse",
        ot = "." + rt,
        at = ".data-api",
        st = e.fn[nt],
        lt = { toggle: !0, parent: "" },
        ct = { toggle: "boolean", parent: "(string|element)" },
        ut = {
          SHOW: "show" + ot,
          SHOWN: "shown" + ot,
          HIDE: "hide" + ot,
          HIDDEN: "hidden" + ot,
          CLICK_DATA_API: "click" + ot + at,
        },
        ft = {
          SHOW: "show",
          COLLAPSE: "collapse",
          COLLAPSING: "collapsing",
          COLLAPSED: "collapsed",
        },
        pt = { WIDTH: "width", HEIGHT: "height" },
        dt = {
          ACTIVES: ".show, .collapsing",
          DATA_TOGGLE: '[data-toggle="collapse"]',
        },
        ht = (function () {
          function t(t, e) {
            (this._isTransitioning = !1),
              (this._element = t),
              (this._config = this._getConfig(e)),
              (this._triggerArray = [].slice.call(
                document.querySelectorAll(
                  '[data-toggle="collapse"][href="#' +
                    t.id +
                    '"],' +
                    ('[data-toggle="collapse"][data-target="#' + t.id + '"]')
                )
              ));
            for (
              var n = [].slice.call(document.querySelectorAll(dt.DATA_TOGGLE)),
                i = 0,
                r = n.length;
              i < r;
              i++
            ) {
              var o = n[i],
                a = v.getSelectorFromElement(o),
                s = [].slice
                  .call(document.querySelectorAll(a))
                  .filter(function (e) {
                    return e === t;
                  });
              null !== a &&
                s.length > 0 &&
                ((this._selector = a), this._triggerArray.push(o));
            }
            (this._parent = this._config.parent ? this._getParent() : null),
              this._config.parent ||
                this._addAriaAndCollapsedClass(
                  this._element,
                  this._triggerArray
                ),
              this._config.toggle && this.toggle();
          }
          var n = t.prototype;
          return (
            (n.toggle = function () {
              e(this._element).hasClass(ft.SHOW) ? this.hide() : this.show();
            }),
            (n.show = function () {
              var n = this;
              if (
                !this._isTransitioning &&
                !e(this._element).hasClass(ft.SHOW)
              ) {
                var i, r;
                if (
                  (this._parent &&
                    ((i = [].slice
                      .call(this._parent.querySelectorAll(dt.ACTIVES))
                      .filter(function (t) {
                        return "string" == typeof n._config.parent
                          ? t.getAttribute("data-parent") === n._config.parent
                          : t.classList.contains(ft.COLLAPSE);
                      })),
                    0 === i.length && (i = null)),
                  !(
                    i &&
                    ((r = e(i).not(this._selector).data(rt)),
                    r && r._isTransitioning)
                  ))
                ) {
                  var o = e.Event(ut.SHOW);
                  if ((e(this._element).trigger(o), !o.isDefaultPrevented())) {
                    i &&
                      (t._jQueryInterface.call(
                        e(i).not(this._selector),
                        "hide"
                      ),
                      r || e(i).data(rt, null));
                    var a = this._getDimension();
                    e(this._element)
                      .removeClass(ft.COLLAPSE)
                      .addClass(ft.COLLAPSING),
                      (this._element.style[a] = 0),
                      this._triggerArray.length &&
                        e(this._triggerArray)
                          .removeClass(ft.COLLAPSED)
                          .attr("aria-expanded", !0),
                      this.setTransitioning(!0);
                    var s = function () {
                        e(n._element)
                          .removeClass(ft.COLLAPSING)
                          .addClass(ft.COLLAPSE)
                          .addClass(ft.SHOW),
                          (n._element.style[a] = ""),
                          n.setTransitioning(!1),
                          e(n._element).trigger(ut.SHOWN);
                      },
                      l = a[0].toUpperCase() + a.slice(1),
                      c = "scroll" + l,
                      u = v.getTransitionDurationFromElement(this._element);
                    e(this._element)
                      .one(v.TRANSITION_END, s)
                      .emulateTransitionEnd(u),
                      (this._element.style[a] = this._element[c] + "px");
                  }
                }
              }
            }),
            (n.hide = function () {
              var t = this;
              if (
                !this._isTransitioning &&
                e(this._element).hasClass(ft.SHOW)
              ) {
                var n = e.Event(ut.HIDE);
                if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
                  var i = this._getDimension();
                  (this._element.style[i] =
                    this._element.getBoundingClientRect()[i] + "px"),
                    v.reflow(this._element),
                    e(this._element)
                      .addClass(ft.COLLAPSING)
                      .removeClass(ft.COLLAPSE)
                      .removeClass(ft.SHOW);
                  var r = this._triggerArray.length;
                  if (r > 0)
                    for (var o = 0; o < r; o++) {
                      var a = this._triggerArray[o],
                        s = v.getSelectorFromElement(a);
                      if (null !== s) {
                        var l = e([].slice.call(document.querySelectorAll(s)));
                        l.hasClass(ft.SHOW) ||
                          e(a).addClass(ft.COLLAPSED).attr("aria-expanded", !1);
                      }
                    }
                  this.setTransitioning(!0);
                  var c = function () {
                    t.setTransitioning(!1),
                      e(t._element)
                        .removeClass(ft.COLLAPSING)
                        .addClass(ft.COLLAPSE)
                        .trigger(ut.HIDDEN);
                  };
                  this._element.style[i] = "";
                  var u = v.getTransitionDurationFromElement(this._element);
                  e(this._element)
                    .one(v.TRANSITION_END, c)
                    .emulateTransitionEnd(u);
                }
              }
            }),
            (n.setTransitioning = function (t) {
              this._isTransitioning = t;
            }),
            (n.dispose = function () {
              e.removeData(this._element, rt),
                (this._config = null),
                (this._parent = null),
                (this._element = null),
                (this._triggerArray = null),
                (this._isTransitioning = null);
            }),
            (n._getConfig = function (t) {
              return (
                (t = a({}, lt, t)),
                (t.toggle = Boolean(t.toggle)),
                v.typeCheckConfig(nt, t, ct),
                t
              );
            }),
            (n._getDimension = function () {
              var t = e(this._element).hasClass(pt.WIDTH);
              return t ? pt.WIDTH : pt.HEIGHT;
            }),
            (n._getParent = function () {
              var n,
                i = this;
              v.isElement(this._config.parent)
                ? ((n = this._config.parent),
                  "undefined" != typeof this._config.parent.jquery &&
                    (n = this._config.parent[0]))
                : (n = document.querySelector(this._config.parent));
              var r =
                  '[data-toggle="collapse"][data-parent="' +
                  this._config.parent +
                  '"]',
                o = [].slice.call(n.querySelectorAll(r));
              return (
                e(o).each(function (e, n) {
                  i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n]);
                }),
                n
              );
            }),
            (n._addAriaAndCollapsedClass = function (t, n) {
              var i = e(t).hasClass(ft.SHOW);
              n.length &&
                e(n).toggleClass(ft.COLLAPSED, !i).attr("aria-expanded", i);
            }),
            (t._getTargetFromElement = function (t) {
              var e = v.getSelectorFromElement(t);
              return e ? document.querySelector(e) : null;
            }),
            (t._jQueryInterface = function (n) {
              return this.each(function () {
                var i = e(this),
                  r = i.data(rt),
                  o = a({}, lt, i.data(), "object" == typeof n && n ? n : {});
                if (
                  (!r && o.toggle && /show|hide/.test(n) && (o.toggle = !1),
                  r || ((r = new t(this, o)), i.data(rt, r)),
                  "string" == typeof n)
                ) {
                  if ("undefined" == typeof r[n])
                    throw new TypeError('No method named "' + n + '"');
                  r[n]();
                }
              });
            }),
            r(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return it;
                },
              },
              {
                key: "Default",
                get: function () {
                  return lt;
                },
              },
            ]),
            t
          );
        })();
      e(document).on(ut.CLICK_DATA_API, dt.DATA_TOGGLE, function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = e(this),
          i = v.getSelectorFromElement(this),
          r = [].slice.call(document.querySelectorAll(i));
        e(r).each(function () {
          var t = e(this),
            i = t.data(rt),
            r = i ? "toggle" : n.data();
          ht._jQueryInterface.call(t, r);
        });
      }),
        (e.fn[nt] = ht._jQueryInterface),
        (e.fn[nt].Constructor = ht),
        (e.fn[nt].noConflict = function () {
          return (e.fn[nt] = st), ht._jQueryInterface;
        });
      var mt = "dropdown",
        gt = "4.3.1",
        vt = "bs.dropdown",
        yt = "." + vt,
        bt = ".data-api",
        wt = e.fn[mt],
        _t = 27,
        Et = 32,
        Tt = 9,
        xt = 38,
        Ct = 40,
        St = 3,
        At = new RegExp(xt + "|" + Ct + "|" + _t),
        Ot = {
          HIDE: "hide" + yt,
          HIDDEN: "hidden" + yt,
          SHOW: "show" + yt,
          SHOWN: "shown" + yt,
          CLICK: "click" + yt,
          CLICK_DATA_API: "click" + yt + bt,
          KEYDOWN_DATA_API: "keydown" + yt + bt,
          KEYUP_DATA_API: "keyup" + yt + bt,
        },
        Dt = {
          DISABLED: "disabled",
          SHOW: "show",
          DROPUP: "dropup",
          DROPRIGHT: "dropright",
          DROPLEFT: "dropleft",
          MENURIGHT: "dropdown-menu-right",
          MENULEFT: "dropdown-menu-left",
          POSITION_STATIC: "position-static",
        },
        kt = {
          DATA_TOGGLE: '[data-toggle="dropdown"]',
          FORM_CHILD: ".dropdown form",
          MENU: ".dropdown-menu",
          NAVBAR_NAV: ".navbar-nav",
          VISIBLE_ITEMS:
            ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        },
        It = {
          TOP: "top-start",
          TOPEND: "top-end",
          BOTTOM: "bottom-start",
          BOTTOMEND: "bottom-end",
          RIGHT: "right-start",
          RIGHTEND: "right-end",
          LEFT: "left-start",
          LEFTEND: "left-end",
        },
        Nt = {
          offset: 0,
          flip: !0,
          boundary: "scrollParent",
          reference: "toggle",
          display: "dynamic",
        },
        Lt = {
          offset: "(number|string|function)",
          flip: "boolean",
          boundary: "(string|element)",
          reference: "(string|element)",
          display: "string",
        },
        Ht = (function () {
          function t(t, e) {
            (this._element = t),
              (this._popper = null),
              (this._config = this._getConfig(e)),
              (this._menu = this._getMenuElement()),
              (this._inNavbar = this._detectNavbar()),
              this._addEventListeners();
          }
          var i = t.prototype;
          return (
            (i.toggle = function () {
              if (
                !this._element.disabled &&
                !e(this._element).hasClass(Dt.DISABLED)
              ) {
                var i = t._getParentFromElement(this._element),
                  r = e(this._menu).hasClass(Dt.SHOW);
                if ((t._clearMenus(), !r)) {
                  var o = { relatedTarget: this._element },
                    a = e.Event(Ot.SHOW, o);
                  if ((e(i).trigger(a), !a.isDefaultPrevented())) {
                    if (!this._inNavbar) {
                      if ("undefined" == typeof n)
                        throw new TypeError(
                          "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                        );
                      var s = this._element;
                      "parent" === this._config.reference
                        ? (s = i)
                        : v.isElement(this._config.reference) &&
                          ((s = this._config.reference),
                          "undefined" != typeof this._config.reference.jquery &&
                            (s = this._config.reference[0])),
                        "scrollParent" !== this._config.boundary &&
                          e(i).addClass(Dt.POSITION_STATIC),
                        (this._popper = new n(
                          s,
                          this._menu,
                          this._getPopperConfig()
                        ));
                    }
                    "ontouchstart" in document.documentElement &&
                      0 === e(i).closest(kt.NAVBAR_NAV).length &&
                      e(document.body).children().on("mouseover", null, e.noop),
                      this._element.focus(),
                      this._element.setAttribute("aria-expanded", !0),
                      e(this._menu).toggleClass(Dt.SHOW),
                      e(i).toggleClass(Dt.SHOW).trigger(e.Event(Ot.SHOWN, o));
                  }
                }
              }
            }),
            (i.show = function () {
              if (
                !(
                  this._element.disabled ||
                  e(this._element).hasClass(Dt.DISABLED) ||
                  e(this._menu).hasClass(Dt.SHOW)
                )
              ) {
                var n = { relatedTarget: this._element },
                  i = e.Event(Ot.SHOW, n),
                  r = t._getParentFromElement(this._element);
                e(r).trigger(i),
                  i.isDefaultPrevented() ||
                    (e(this._menu).toggleClass(Dt.SHOW),
                    e(r).toggleClass(Dt.SHOW).trigger(e.Event(Ot.SHOWN, n)));
              }
            }),
            (i.hide = function () {
              if (
                !this._element.disabled &&
                !e(this._element).hasClass(Dt.DISABLED) &&
                e(this._menu).hasClass(Dt.SHOW)
              ) {
                var n = { relatedTarget: this._element },
                  i = e.Event(Ot.HIDE, n),
                  r = t._getParentFromElement(this._element);
                e(r).trigger(i),
                  i.isDefaultPrevented() ||
                    (e(this._menu).toggleClass(Dt.SHOW),
                    e(r).toggleClass(Dt.SHOW).trigger(e.Event(Ot.HIDDEN, n)));
              }
            }),
            (i.dispose = function () {
              e.removeData(this._element, vt),
                e(this._element).off(yt),
                (this._element = null),
                (this._menu = null),
                null !== this._popper &&
                  (this._popper.destroy(), (this._popper = null));
            }),
            (i.update = function () {
              (this._inNavbar = this._detectNavbar()),
                null !== this._popper && this._popper.scheduleUpdate();
            }),
            (i._addEventListeners = function () {
              var t = this;
              e(this._element).on(Ot.CLICK, function (e) {
                e.preventDefault(), e.stopPropagation(), t.toggle();
              });
            }),
            (i._getConfig = function (t) {
              return (
                (t = a(
                  {},
                  this.constructor.Default,
                  e(this._element).data(),
                  t
                )),
                v.typeCheckConfig(mt, t, this.constructor.DefaultType),
                t
              );
            }),
            (i._getMenuElement = function () {
              if (!this._menu) {
                var e = t._getParentFromElement(this._element);
                e && (this._menu = e.querySelector(kt.MENU));
              }
              return this._menu;
            }),
            (i._getPlacement = function () {
              var t = e(this._element.parentNode),
                n = It.BOTTOM;
              return (
                t.hasClass(Dt.DROPUP)
                  ? ((n = It.TOP),
                    e(this._menu).hasClass(Dt.MENURIGHT) && (n = It.TOPEND))
                  : t.hasClass(Dt.DROPRIGHT)
                  ? (n = It.RIGHT)
                  : t.hasClass(Dt.DROPLEFT)
                  ? (n = It.LEFT)
                  : e(this._menu).hasClass(Dt.MENURIGHT) && (n = It.BOTTOMEND),
                n
              );
            }),
            (i._detectNavbar = function () {
              return e(this._element).closest(".navbar").length > 0;
            }),
            (i._getOffset = function () {
              var t = this,
                e = {};
              return (
                "function" == typeof this._config.offset
                  ? (e.fn = function (e) {
                      return (
                        (e.offsets = a(
                          {},
                          e.offsets,
                          t._config.offset(e.offsets, t._element) || {}
                        )),
                        e
                      );
                    })
                  : (e.offset = this._config.offset),
                e
              );
            }),
            (i._getPopperConfig = function () {
              var t = {
                placement: this._getPlacement(),
                modifiers: {
                  offset: this._getOffset(),
                  flip: { enabled: this._config.flip },
                  preventOverflow: { boundariesElement: this._config.boundary },
                },
              };
              return (
                "static" === this._config.display &&
                  (t.modifiers.applyStyle = { enabled: !1 }),
                t
              );
            }),
            (t._jQueryInterface = function (n) {
              return this.each(function () {
                var i = e(this).data(vt),
                  r = "object" == typeof n ? n : null;
                if (
                  (i || ((i = new t(this, r)), e(this).data(vt, i)),
                  "string" == typeof n)
                ) {
                  if ("undefined" == typeof i[n])
                    throw new TypeError('No method named "' + n + '"');
                  i[n]();
                }
              });
            }),
            (t._clearMenus = function (n) {
              if (
                !n ||
                (n.which !== St && ("keyup" !== n.type || n.which === Tt))
              )
                for (
                  var i = [].slice.call(
                      document.querySelectorAll(kt.DATA_TOGGLE)
                    ),
                    r = 0,
                    o = i.length;
                  r < o;
                  r++
                ) {
                  var a = t._getParentFromElement(i[r]),
                    s = e(i[r]).data(vt),
                    l = { relatedTarget: i[r] };
                  if ((n && "click" === n.type && (l.clickEvent = n), s)) {
                    var c = s._menu;
                    if (
                      e(a).hasClass(Dt.SHOW) &&
                      !(
                        n &&
                        (("click" === n.type &&
                          /input|textarea/i.test(n.target.tagName)) ||
                          ("keyup" === n.type && n.which === Tt)) &&
                        e.contains(a, n.target)
                      )
                    ) {
                      var u = e.Event(Ot.HIDE, l);
                      e(a).trigger(u),
                        u.isDefaultPrevented() ||
                          ("ontouchstart" in document.documentElement &&
                            e(document.body)
                              .children()
                              .off("mouseover", null, e.noop),
                          i[r].setAttribute("aria-expanded", "false"),
                          e(c).removeClass(Dt.SHOW),
                          e(a)
                            .removeClass(Dt.SHOW)
                            .trigger(e.Event(Ot.HIDDEN, l)));
                    }
                  }
                }
            }),
            (t._getParentFromElement = function (t) {
              var e,
                n = v.getSelectorFromElement(t);
              return n && (e = document.querySelector(n)), e || t.parentNode;
            }),
            (t._dataApiKeydownHandler = function (n) {
              if (
                (/input|textarea/i.test(n.target.tagName)
                  ? !(
                      n.which === Et ||
                      (n.which !== _t &&
                        ((n.which !== Ct && n.which !== xt) ||
                          e(n.target).closest(kt.MENU).length))
                    )
                  : At.test(n.which)) &&
                (n.preventDefault(),
                n.stopPropagation(),
                !this.disabled && !e(this).hasClass(Dt.DISABLED))
              ) {
                var i = t._getParentFromElement(this),
                  r = e(i).hasClass(Dt.SHOW);
                if (!r || (r && (n.which === _t || n.which === Et))) {
                  if (n.which === _t) {
                    var o = i.querySelector(kt.DATA_TOGGLE);
                    e(o).trigger("focus");
                  }
                  return void e(this).trigger("click");
                }
                var a = [].slice.call(i.querySelectorAll(kt.VISIBLE_ITEMS));
                if (0 !== a.length) {
                  var s = a.indexOf(n.target);
                  n.which === xt && s > 0 && s--,
                    n.which === Ct && s < a.length - 1 && s++,
                    s < 0 && (s = 0),
                    a[s].focus();
                }
              }
            }),
            r(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return gt;
                },
              },
              {
                key: "Default",
                get: function () {
                  return Nt;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return Lt;
                },
              },
            ]),
            t
          );
        })();
      e(document)
        .on(Ot.KEYDOWN_DATA_API, kt.DATA_TOGGLE, Ht._dataApiKeydownHandler)
        .on(Ot.KEYDOWN_DATA_API, kt.MENU, Ht._dataApiKeydownHandler)
        .on(Ot.CLICK_DATA_API + " " + Ot.KEYUP_DATA_API, Ht._clearMenus)
        .on(Ot.CLICK_DATA_API, kt.DATA_TOGGLE, function (t) {
          t.preventDefault(),
            t.stopPropagation(),
            Ht._jQueryInterface.call(e(this), "toggle");
        })
        .on(Ot.CLICK_DATA_API, kt.FORM_CHILD, function (t) {
          t.stopPropagation();
        }),
        (e.fn[mt] = Ht._jQueryInterface),
        (e.fn[mt].Constructor = Ht),
        (e.fn[mt].noConflict = function () {
          return (e.fn[mt] = wt), Ht._jQueryInterface;
        });
      var Pt = "modal",
        jt = "4.3.1",
        Mt = "bs.modal",
        Rt = "." + Mt,
        Wt = ".data-api",
        Ft = e.fn[Pt],
        qt = 27,
        Bt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        Vt = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean",
          show: "boolean",
        },
        Ut = {
          HIDE: "hide" + Rt,
          HIDDEN: "hidden" + Rt,
          SHOW: "show" + Rt,
          SHOWN: "shown" + Rt,
          FOCUSIN: "focusin" + Rt,
          RESIZE: "resize" + Rt,
          CLICK_DISMISS: "click.dismiss" + Rt,
          KEYDOWN_DISMISS: "keydown.dismiss" + Rt,
          MOUSEUP_DISMISS: "mouseup.dismiss" + Rt,
          MOUSEDOWN_DISMISS: "mousedown.dismiss" + Rt,
          CLICK_DATA_API: "click" + Rt + Wt,
        },
        zt = {
          SCROLLABLE: "modal-dialog-scrollable",
          SCROLLBAR_MEASURER: "modal-scrollbar-measure",
          BACKDROP: "modal-backdrop",
          OPEN: "modal-open",
          FADE: "fade",
          SHOW: "show",
        },
        Yt = {
          DIALOG: ".modal-dialog",
          MODAL_BODY: ".modal-body",
          DATA_TOGGLE: '[data-toggle="modal"]',
          DATA_DISMISS: '[data-dismiss="modal"]',
          FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          STICKY_CONTENT: ".sticky-top",
        },
        Xt = (function () {
          function t(t, e) {
            (this._config = this._getConfig(e)),
              (this._element = t),
              (this._dialog = t.querySelector(Yt.DIALOG)),
              (this._backdrop = null),
              (this._isShown = !1),
              (this._isBodyOverflowing = !1),
              (this._ignoreBackdropClick = !1),
              (this._isTransitioning = !1),
              (this._scrollbarWidth = 0);
          }
          var n = t.prototype;
          return (
            (n.toggle = function (t) {
              return this._isShown ? this.hide() : this.show(t);
            }),
            (n.show = function (t) {
              var n = this;
              if (!this._isShown && !this._isTransitioning) {
                e(this._element).hasClass(zt.FADE) &&
                  (this._isTransitioning = !0);
                var i = e.Event(Ut.SHOW, { relatedTarget: t });
                e(this._element).trigger(i),
                  this._isShown ||
                    i.isDefaultPrevented() ||
                    ((this._isShown = !0),
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    this._adjustDialog(),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    e(this._element).on(
                      Ut.CLICK_DISMISS,
                      Yt.DATA_DISMISS,
                      function (t) {
                        return n.hide(t);
                      }
                    ),
                    e(this._dialog).on(Ut.MOUSEDOWN_DISMISS, function () {
                      e(n._element).one(Ut.MOUSEUP_DISMISS, function (t) {
                        e(t.target).is(n._element) &&
                          (n._ignoreBackdropClick = !0);
                      });
                    }),
                    this._showBackdrop(function () {
                      return n._showElement(t);
                    }));
              }
            }),
            (n.hide = function (t) {
              var n = this;
              if (
                (t && t.preventDefault(),
                this._isShown && !this._isTransitioning)
              ) {
                var i = e.Event(Ut.HIDE);
                if (
                  (e(this._element).trigger(i),
                  this._isShown && !i.isDefaultPrevented())
                ) {
                  this._isShown = !1;
                  var r = e(this._element).hasClass(zt.FADE);
                  if (
                    (r && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    e(document).off(Ut.FOCUSIN),
                    e(this._element).removeClass(zt.SHOW),
                    e(this._element).off(Ut.CLICK_DISMISS),
                    e(this._dialog).off(Ut.MOUSEDOWN_DISMISS),
                    r)
                  ) {
                    var o = v.getTransitionDurationFromElement(this._element);
                    e(this._element)
                      .one(v.TRANSITION_END, function (t) {
                        return n._hideModal(t);
                      })
                      .emulateTransitionEnd(o);
                  } else this._hideModal();
                }
              }
            }),
            (n.dispose = function () {
              [window, this._element, this._dialog].forEach(function (t) {
                return e(t).off(Rt);
              }),
                e(document).off(Ut.FOCUSIN),
                e.removeData(this._element, Mt),
                (this._config = null),
                (this._element = null),
                (this._dialog = null),
                (this._backdrop = null),
                (this._isShown = null),
                (this._isBodyOverflowing = null),
                (this._ignoreBackdropClick = null),
                (this._isTransitioning = null),
                (this._scrollbarWidth = null);
            }),
            (n.handleUpdate = function () {
              this._adjustDialog();
            }),
            (n._getConfig = function (t) {
              return (t = a({}, Bt, t)), v.typeCheckConfig(Pt, t, Vt), t;
            }),
            (n._showElement = function (t) {
              var n = this,
                i = e(this._element).hasClass(zt.FADE);
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                document.body.appendChild(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                e(this._dialog).hasClass(zt.SCROLLABLE)
                  ? (this._dialog.querySelector(Yt.MODAL_BODY).scrollTop = 0)
                  : (this._element.scrollTop = 0),
                i && v.reflow(this._element),
                e(this._element).addClass(zt.SHOW),
                this._config.focus && this._enforceFocus();
              var r = e.Event(Ut.SHOWN, { relatedTarget: t }),
                o = function () {
                  n._config.focus && n._element.focus(),
                    (n._isTransitioning = !1),
                    e(n._element).trigger(r);
                };
              if (i) {
                var a = v.getTransitionDurationFromElement(this._dialog);
                e(this._dialog)
                  .one(v.TRANSITION_END, o)
                  .emulateTransitionEnd(a);
              } else o();
            }),
            (n._enforceFocus = function () {
              var t = this;
              e(document)
                .off(Ut.FOCUSIN)
                .on(Ut.FOCUSIN, function (n) {
                  document !== n.target &&
                    t._element !== n.target &&
                    0 === e(t._element).has(n.target).length &&
                    t._element.focus();
                });
            }),
            (n._setEscapeEvent = function () {
              var t = this;
              this._isShown && this._config.keyboard
                ? e(this._element).on(Ut.KEYDOWN_DISMISS, function (e) {
                    e.which === qt && (e.preventDefault(), t.hide());
                  })
                : this._isShown || e(this._element).off(Ut.KEYDOWN_DISMISS);
            }),
            (n._setResizeEvent = function () {
              var t = this;
              this._isShown
                ? e(window).on(Ut.RESIZE, function (e) {
                    return t.handleUpdate(e);
                  })
                : e(window).off(Ut.RESIZE);
            }),
            (n._hideModal = function () {
              var t = this;
              (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                (this._isTransitioning = !1),
                this._showBackdrop(function () {
                  e(document.body).removeClass(zt.OPEN),
                    t._resetAdjustments(),
                    t._resetScrollbar(),
                    e(t._element).trigger(Ut.HIDDEN);
                });
            }),
            (n._removeBackdrop = function () {
              this._backdrop &&
                (e(this._backdrop).remove(), (this._backdrop = null));
            }),
            (n._showBackdrop = function (t) {
              var n = this,
                i = e(this._element).hasClass(zt.FADE) ? zt.FADE : "";
              if (this._isShown && this._config.backdrop) {
                if (
                  ((this._backdrop = document.createElement("div")),
                  (this._backdrop.className = zt.BACKDROP),
                  i && this._backdrop.classList.add(i),
                  e(this._backdrop).appendTo(document.body),
                  e(this._element).on(Ut.CLICK_DISMISS, function (t) {
                    return n._ignoreBackdropClick
                      ? void (n._ignoreBackdropClick = !1)
                      : void (
                          t.target === t.currentTarget &&
                          ("static" === n._config.backdrop
                            ? n._element.focus()
                            : n.hide())
                        );
                  }),
                  i && v.reflow(this._backdrop),
                  e(this._backdrop).addClass(zt.SHOW),
                  !t)
                )
                  return;
                if (!i) return void t();
                var r = v.getTransitionDurationFromElement(this._backdrop);
                e(this._backdrop)
                  .one(v.TRANSITION_END, t)
                  .emulateTransitionEnd(r);
              } else if (!this._isShown && this._backdrop) {
                e(this._backdrop).removeClass(zt.SHOW);
                var o = function () {
                  n._removeBackdrop(), t && t();
                };
                if (e(this._element).hasClass(zt.FADE)) {
                  var a = v.getTransitionDurationFromElement(this._backdrop);
                  e(this._backdrop)
                    .one(v.TRANSITION_END, o)
                    .emulateTransitionEnd(a);
                } else o();
              } else t && t();
            }),
            (n._adjustDialog = function () {
              var t =
                this._element.scrollHeight >
                document.documentElement.clientHeight;
              !this._isBodyOverflowing &&
                t &&
                (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                this._isBodyOverflowing &&
                  !t &&
                  (this._element.style.paddingRight =
                    this._scrollbarWidth + "px");
            }),
            (n._resetAdjustments = function () {
              (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
            }),
            (n._checkScrollbar = function () {
              var t = document.body.getBoundingClientRect();
              (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
                (this._scrollbarWidth = this._getScrollbarWidth());
            }),
            (n._setScrollbar = function () {
              var t = this;
              if (this._isBodyOverflowing) {
                var n = [].slice.call(
                    document.querySelectorAll(Yt.FIXED_CONTENT)
                  ),
                  i = [].slice.call(
                    document.querySelectorAll(Yt.STICKY_CONTENT)
                  );
                e(n).each(function (n, i) {
                  var r = i.style.paddingRight,
                    o = e(i).css("padding-right");
                  e(i)
                    .data("padding-right", r)
                    .css(
                      "padding-right",
                      parseFloat(o) + t._scrollbarWidth + "px"
                    );
                }),
                  e(i).each(function (n, i) {
                    var r = i.style.marginRight,
                      o = e(i).css("margin-right");
                    e(i)
                      .data("margin-right", r)
                      .css(
                        "margin-right",
                        parseFloat(o) - t._scrollbarWidth + "px"
                      );
                  });
                var r = document.body.style.paddingRight,
                  o = e(document.body).css("padding-right");
                e(document.body)
                  .data("padding-right", r)
                  .css(
                    "padding-right",
                    parseFloat(o) + this._scrollbarWidth + "px"
                  );
              }
              e(document.body).addClass(zt.OPEN);
            }),
            (n._resetScrollbar = function () {
              var t = [].slice.call(
                document.querySelectorAll(Yt.FIXED_CONTENT)
              );
              e(t).each(function (t, n) {
                var i = e(n).data("padding-right");
                e(n).removeData("padding-right"),
                  (n.style.paddingRight = i ? i : "");
              });
              var n = [].slice.call(
                document.querySelectorAll("" + Yt.STICKY_CONTENT)
              );
              e(n).each(function (t, n) {
                var i = e(n).data("margin-right");
                "undefined" != typeof i &&
                  e(n).css("margin-right", i).removeData("margin-right");
              });
              var i = e(document.body).data("padding-right");
              e(document.body).removeData("padding-right"),
                (document.body.style.paddingRight = i ? i : "");
            }),
            (n._getScrollbarWidth = function () {
              var t = document.createElement("div");
              (t.className = zt.SCROLLBAR_MEASURER),
                document.body.appendChild(t);
              var e = t.getBoundingClientRect().width - t.clientWidth;
              return document.body.removeChild(t), e;
            }),
            (t._jQueryInterface = function (n, i) {
              return this.each(function () {
                var r = e(this).data(Mt),
                  o = a(
                    {},
                    Bt,
                    e(this).data(),
                    "object" == typeof n && n ? n : {}
                  );
                if (
                  (r || ((r = new t(this, o)), e(this).data(Mt, r)),
                  "string" == typeof n)
                ) {
                  if ("undefined" == typeof r[n])
                    throw new TypeError('No method named "' + n + '"');
                  r[n](i);
                } else o.show && r.show(i);
              });
            }),
            r(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return jt;
                },
              },
              {
                key: "Default",
                get: function () {
                  return Bt;
                },
              },
            ]),
            t
          );
        })();
      e(document).on(Ut.CLICK_DATA_API, Yt.DATA_TOGGLE, function (t) {
        var n,
          i = this,
          r = v.getSelectorFromElement(this);
        r && (n = document.querySelector(r));
        var o = e(n).data(Mt) ? "toggle" : a({}, e(n).data(), e(this).data());
        ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
        var s = e(n).one(Ut.SHOW, function (t) {
          t.isDefaultPrevented() ||
            s.one(Ut.HIDDEN, function () {
              e(i).is(":visible") && i.focus();
            });
        });
        Xt._jQueryInterface.call(e(n), o, this);
      }),
        (e.fn[Pt] = Xt._jQueryInterface),
        (e.fn[Pt].Constructor = Xt),
        (e.fn[Pt].noConflict = function () {
          return (e.fn[Pt] = Ft), Xt._jQueryInterface;
        });
      var Gt = [
          "background",
          "cite",
          "href",
          "itemtype",
          "longdesc",
          "poster",
          "src",
          "xlink:href",
        ],
        Kt = /^aria-[\w-]*$/i,
        $t = {
          "*": ["class", "dir", "id", "lang", "role", Kt],
          a: ["target", "href", "title", "rel"],
          area: [],
          b: [],
          br: [],
          col: [],
          code: [],
          div: [],
          em: [],
          hr: [],
          h1: [],
          h2: [],
          h3: [],
          h4: [],
          h5: [],
          h6: [],
          i: [],
          img: ["src", "alt", "title", "width", "height"],
          li: [],
          ol: [],
          p: [],
          pre: [],
          s: [],
          small: [],
          span: [],
          sub: [],
          sup: [],
          strong: [],
          u: [],
          ul: [],
        },
        Qt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
        Jt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i,
        Zt = "tooltip",
        te = "4.3.1",
        ee = "bs.tooltip",
        ne = "." + ee,
        ie = e.fn[Zt],
        re = "bs-tooltip",
        oe = new RegExp("(^|\\s)" + re + "\\S+", "g"),
        ae = ["sanitize", "whiteList", "sanitizeFn"],
        se = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string|function)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)",
          sanitize: "boolean",
          sanitizeFn: "(null|function)",
          whiteList: "object",
        },
        le = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left",
        },
        ce = {
          animation: !0,
          template:
            '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: 0,
          container: !1,
          fallbackPlacement: "flip",
          boundary: "scrollParent",
          sanitize: !0,
          sanitizeFn: null,
          whiteList: $t,
        },
        ue = { SHOW: "show", OUT: "out" },
        fe = {
          HIDE: "hide" + ne,
          HIDDEN: "hidden" + ne,
          SHOW: "show" + ne,
          SHOWN: "shown" + ne,
          INSERTED: "inserted" + ne,
          CLICK: "click" + ne,
          FOCUSIN: "focusin" + ne,
          FOCUSOUT: "focusout" + ne,
          MOUSEENTER: "mouseenter" + ne,
          MOUSELEAVE: "mouseleave" + ne,
        },
        pe = { FADE: "fade", SHOW: "show" },
        de = {
          TOOLTIP: ".tooltip",
          TOOLTIP_INNER: ".tooltip-inner",
          ARROW: ".arrow",
        },
        he = {
          HOVER: "hover",
          FOCUS: "focus",
          CLICK: "click",
          MANUAL: "manual",
        },
        me = (function () {
          function t(t, e) {
            if ("undefined" == typeof n)
              throw new TypeError(
                "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
              );
            (this._isEnabled = !0),
              (this._timeout = 0),
              (this._hoverState = ""),
              (this._activeTrigger = {}),
              (this._popper = null),
              (this.element = t),
              (this.config = this._getConfig(e)),
              (this.tip = null),
              this._setListeners();
          }
          var i = t.prototype;
          return (
            (i.enable = function () {
              this._isEnabled = !0;
            }),
            (i.disable = function () {
              this._isEnabled = !1;
            }),
            (i.toggleEnabled = function () {
              this._isEnabled = !this._isEnabled;
            }),
            (i.toggle = function (t) {
              if (this._isEnabled)
                if (t) {
                  var n = this.constructor.DATA_KEY,
                    i = e(t.currentTarget).data(n);
                  i ||
                    ((i = new this.constructor(
                      t.currentTarget,
                      this._getDelegateConfig()
                    )),
                    e(t.currentTarget).data(n, i)),
                    (i._activeTrigger.click = !i._activeTrigger.click),
                    i._isWithActiveTrigger()
                      ? i._enter(null, i)
                      : i._leave(null, i);
                } else {
                  if (e(this.getTipElement()).hasClass(pe.SHOW))
                    return void this._leave(null, this);
                  this._enter(null, this);
                }
            }),
            (i.dispose = function () {
              clearTimeout(this._timeout),
                e.removeData(this.element, this.constructor.DATA_KEY),
                e(this.element).off(this.constructor.EVENT_KEY),
                e(this.element).closest(".modal").off("hide.bs.modal"),
                this.tip && e(this.tip).remove(),
                (this._isEnabled = null),
                (this._timeout = null),
                (this._hoverState = null),
                (this._activeTrigger = null),
                null !== this._popper && this._popper.destroy(),
                (this._popper = null),
                (this.element = null),
                (this.config = null),
                (this.tip = null);
            }),
            (i.show = function () {
              var t = this;
              if ("none" === e(this.element).css("display"))
                throw new Error("Please use show on visible elements");
              var i = e.Event(this.constructor.Event.SHOW);
              if (this.isWithContent() && this._isEnabled) {
                e(this.element).trigger(i);
                var r = v.findShadowRoot(this.element),
                  o = e.contains(
                    null !== r ? r : this.element.ownerDocument.documentElement,
                    this.element
                  );
                if (i.isDefaultPrevented() || !o) return;
                var a = this.getTipElement(),
                  s = v.getUID(this.constructor.NAME);
                a.setAttribute("id", s),
                  this.element.setAttribute("aria-describedby", s),
                  this.setContent(),
                  this.config.animation && e(a).addClass(pe.FADE);
                var l =
                    "function" == typeof this.config.placement
                      ? this.config.placement.call(this, a, this.element)
                      : this.config.placement,
                  c = this._getAttachment(l);
                this.addAttachmentClass(c);
                var u = this._getContainer();
                e(a).data(this.constructor.DATA_KEY, this),
                  e.contains(
                    this.element.ownerDocument.documentElement,
                    this.tip
                  ) || e(a).appendTo(u),
                  e(this.element).trigger(this.constructor.Event.INSERTED),
                  (this._popper = new n(this.element, a, {
                    placement: c,
                    modifiers: {
                      offset: this._getOffset(),
                      flip: { behavior: this.config.fallbackPlacement },
                      arrow: { element: de.ARROW },
                      preventOverflow: {
                        boundariesElement: this.config.boundary,
                      },
                    },
                    onCreate: function (e) {
                      e.originalPlacement !== e.placement &&
                        t._handlePopperPlacementChange(e);
                    },
                    onUpdate: function (e) {
                      return t._handlePopperPlacementChange(e);
                    },
                  })),
                  e(a).addClass(pe.SHOW),
                  "ontouchstart" in document.documentElement &&
                    e(document.body).children().on("mouseover", null, e.noop);
                var f = function () {
                  t.config.animation && t._fixTransition();
                  var n = t._hoverState;
                  (t._hoverState = null),
                    e(t.element).trigger(t.constructor.Event.SHOWN),
                    n === ue.OUT && t._leave(null, t);
                };
                if (e(this.tip).hasClass(pe.FADE)) {
                  var p = v.getTransitionDurationFromElement(this.tip);
                  e(this.tip).one(v.TRANSITION_END, f).emulateTransitionEnd(p);
                } else f();
              }
            }),
            (i.hide = function (t) {
              var n = this,
                i = this.getTipElement(),
                r = e.Event(this.constructor.Event.HIDE),
                o = function () {
                  n._hoverState !== ue.SHOW &&
                    i.parentNode &&
                    i.parentNode.removeChild(i),
                    n._cleanTipClass(),
                    n.element.removeAttribute("aria-describedby"),
                    e(n.element).trigger(n.constructor.Event.HIDDEN),
                    null !== n._popper && n._popper.destroy(),
                    t && t();
                };
              if ((e(this.element).trigger(r), !r.isDefaultPrevented())) {
                if (
                  (e(i).removeClass(pe.SHOW),
                  "ontouchstart" in document.documentElement &&
                    e(document.body).children().off("mouseover", null, e.noop),
                  (this._activeTrigger[he.CLICK] = !1),
                  (this._activeTrigger[he.FOCUS] = !1),
                  (this._activeTrigger[he.HOVER] = !1),
                  e(this.tip).hasClass(pe.FADE))
                ) {
                  var a = v.getTransitionDurationFromElement(i);
                  e(i).one(v.TRANSITION_END, o).emulateTransitionEnd(a);
                } else o();
                this._hoverState = "";
              }
            }),
            (i.update = function () {
              null !== this._popper && this._popper.scheduleUpdate();
            }),
            (i.isWithContent = function () {
              return Boolean(this.getTitle());
            }),
            (i.addAttachmentClass = function (t) {
              e(this.getTipElement()).addClass(re + "-" + t);
            }),
            (i.getTipElement = function () {
              return (
                (this.tip = this.tip || e(this.config.template)[0]), this.tip
              );
            }),
            (i.setContent = function () {
              var t = this.getTipElement();
              this.setElementContent(
                e(t.querySelectorAll(de.TOOLTIP_INNER)),
                this.getTitle()
              ),
                e(t).removeClass(pe.FADE + " " + pe.SHOW);
            }),
            (i.setElementContent = function (t, n) {
              return "object" == typeof n && (n.nodeType || n.jquery)
                ? void (this.config.html
                    ? e(n).parent().is(t) || t.empty().append(n)
                    : t.text(e(n).text()))
                : void (this.config.html
                    ? (this.config.sanitize &&
                        (n = d(
                          n,
                          this.config.whiteList,
                          this.config.sanitizeFn
                        )),
                      t.html(n))
                    : t.text(n));
            }),
            (i.getTitle = function () {
              var t = this.element.getAttribute("data-original-title");
              return (
                t ||
                  (t =
                    "function" == typeof this.config.title
                      ? this.config.title.call(this.element)
                      : this.config.title),
                t
              );
            }),
            (i._getOffset = function () {
              var t = this,
                e = {};
              return (
                "function" == typeof this.config.offset
                  ? (e.fn = function (e) {
                      return (
                        (e.offsets = a(
                          {},
                          e.offsets,
                          t.config.offset(e.offsets, t.element) || {}
                        )),
                        e
                      );
                    })
                  : (e.offset = this.config.offset),
                e
              );
            }),
            (i._getContainer = function () {
              return this.config.container === !1
                ? document.body
                : v.isElement(this.config.container)
                ? e(this.config.container)
                : e(document).find(this.config.container);
            }),
            (i._getAttachment = function (t) {
              return le[t.toUpperCase()];
            }),
            (i._setListeners = function () {
              var t = this,
                n = this.config.trigger.split(" ");
              n.forEach(function (n) {
                if ("click" === n)
                  e(t.element).on(
                    t.constructor.Event.CLICK,
                    t.config.selector,
                    function (e) {
                      return t.toggle(e);
                    }
                  );
                else if (n !== he.MANUAL) {
                  var i =
                      n === he.HOVER
                        ? t.constructor.Event.MOUSEENTER
                        : t.constructor.Event.FOCUSIN,
                    r =
                      n === he.HOVER
                        ? t.constructor.Event.MOUSELEAVE
                        : t.constructor.Event.FOCUSOUT;
                  e(t.element)
                    .on(i, t.config.selector, function (e) {
                      return t._enter(e);
                    })
                    .on(r, t.config.selector, function (e) {
                      return t._leave(e);
                    });
                }
              }),
                e(this.element)
                  .closest(".modal")
                  .on("hide.bs.modal", function () {
                    t.element && t.hide();
                  }),
                this.config.selector
                  ? (this.config = a({}, this.config, {
                      trigger: "manual",
                      selector: "",
                    }))
                  : this._fixTitle();
            }),
            (i._fixTitle = function () {
              var t = typeof this.element.getAttribute("data-original-title");
              (this.element.getAttribute("title") || "string" !== t) &&
                (this.element.setAttribute(
                  "data-original-title",
                  this.element.getAttribute("title") || ""
                ),
                this.element.setAttribute("title", ""));
            }),
            (i._enter = function (t, n) {
              var i = this.constructor.DATA_KEY;
              return (
                (n = n || e(t.currentTarget).data(i)),
                n ||
                  ((n = new this.constructor(
                    t.currentTarget,
                    this._getDelegateConfig()
                  )),
                  e(t.currentTarget).data(i, n)),
                t &&
                  (n._activeTrigger[
                    "focusin" === t.type ? he.FOCUS : he.HOVER
                  ] = !0),
                e(n.getTipElement()).hasClass(pe.SHOW) ||
                n._hoverState === ue.SHOW
                  ? void (n._hoverState = ue.SHOW)
                  : (clearTimeout(n._timeout),
                    (n._hoverState = ue.SHOW),
                    n.config.delay && n.config.delay.show
                      ? void (n._timeout = setTimeout(function () {
                          n._hoverState === ue.SHOW && n.show();
                        }, n.config.delay.show))
                      : void n.show())
              );
            }),
            (i._leave = function (t, n) {
              var i = this.constructor.DATA_KEY;
              if (
                ((n = n || e(t.currentTarget).data(i)),
                n ||
                  ((n = new this.constructor(
                    t.currentTarget,
                    this._getDelegateConfig()
                  )),
                  e(t.currentTarget).data(i, n)),
                t &&
                  (n._activeTrigger[
                    "focusout" === t.type ? he.FOCUS : he.HOVER
                  ] = !1),
                !n._isWithActiveTrigger())
              )
                return (
                  clearTimeout(n._timeout),
                  (n._hoverState = ue.OUT),
                  n.config.delay && n.config.delay.hide
                    ? void (n._timeout = setTimeout(function () {
                        n._hoverState === ue.OUT && n.hide();
                      }, n.config.delay.hide))
                    : void n.hide()
                );
            }),
            (i._isWithActiveTrigger = function () {
              for (var t in this._activeTrigger)
                if (this._activeTrigger[t]) return !0;
              return !1;
            }),
            (i._getConfig = function (t) {
              var n = e(this.element).data();
              return (
                Object.keys(n).forEach(function (t) {
                  ae.indexOf(t) !== -1 && delete n[t];
                }),
                (t = a(
                  {},
                  this.constructor.Default,
                  n,
                  "object" == typeof t && t ? t : {}
                )),
                "number" == typeof t.delay &&
                  (t.delay = { show: t.delay, hide: t.delay }),
                "number" == typeof t.title && (t.title = t.title.toString()),
                "number" == typeof t.content &&
                  (t.content = t.content.toString()),
                v.typeCheckConfig(Zt, t, this.constructor.DefaultType),
                t.sanitize &&
                  (t.template = d(t.template, t.whiteList, t.sanitizeFn)),
                t
              );
            }),
            (i._getDelegateConfig = function () {
              var t = {};
              if (this.config)
                for (var e in this.config)
                  this.constructor.Default[e] !== this.config[e] &&
                    (t[e] = this.config[e]);
              return t;
            }),
            (i._cleanTipClass = function () {
              var t = e(this.getTipElement()),
                n = t.attr("class").match(oe);
              null !== n && n.length && t.removeClass(n.join(""));
            }),
            (i._handlePopperPlacementChange = function (t) {
              var e = t.instance;
              (this.tip = e.popper),
                this._cleanTipClass(),
                this.addAttachmentClass(this._getAttachment(t.placement));
            }),
            (i._fixTransition = function () {
              var t = this.getTipElement(),
                n = this.config.animation;
              null === t.getAttribute("x-placement") &&
                (e(t).removeClass(pe.FADE),
                (this.config.animation = !1),
                this.hide(),
                this.show(),
                (this.config.animation = n));
            }),
            (t._jQueryInterface = function (n) {
              return this.each(function () {
                var i = e(this).data(ee),
                  r = "object" == typeof n && n;
                if (
                  (i || !/dispose|hide/.test(n)) &&
                  (i || ((i = new t(this, r)), e(this).data(ee, i)),
                  "string" == typeof n)
                ) {
                  if ("undefined" == typeof i[n])
                    throw new TypeError('No method named "' + n + '"');
                  i[n]();
                }
              });
            }),
            r(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return te;
                },
              },
              {
                key: "Default",
                get: function () {
                  return ce;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return Zt;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return ee;
                },
              },
              {
                key: "Event",
                get: function () {
                  return fe;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return ne;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return se;
                },
              },
            ]),
            t
          );
        })();
      (e.fn[Zt] = me._jQueryInterface),
        (e.fn[Zt].Constructor = me),
        (e.fn[Zt].noConflict = function () {
          return (e.fn[Zt] = ie), me._jQueryInterface;
        });
      var ge = "popover",
        ve = "4.3.1",
        ye = "bs.popover",
        be = "." + ye,
        we = e.fn[ge],
        _e = "bs-popover",
        Ee = new RegExp("(^|\\s)" + _e + "\\S+", "g"),
        Te = a({}, me.Default, {
          placement: "right",
          trigger: "click",
          content: "",
          template:
            '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        }),
        xe = a({}, me.DefaultType, { content: "(string|element|function)" }),
        Ce = { FADE: "fade", SHOW: "show" },
        Se = { TITLE: ".popover-header", CONTENT: ".popover-body" },
        Ae = {
          HIDE: "hide" + be,
          HIDDEN: "hidden" + be,
          SHOW: "show" + be,
          SHOWN: "shown" + be,
          INSERTED: "inserted" + be,
          CLICK: "click" + be,
          FOCUSIN: "focusin" + be,
          FOCUSOUT: "focusout" + be,
          MOUSEENTER: "mouseenter" + be,
          MOUSELEAVE: "mouseleave" + be,
        },
        Oe = (function (t) {
          function n() {
            return t.apply(this, arguments) || this;
          }
          s(n, t);
          var i = n.prototype;
          return (
            (i.isWithContent = function () {
              return this.getTitle() || this._getContent();
            }),
            (i.addAttachmentClass = function (t) {
              e(this.getTipElement()).addClass(_e + "-" + t);
            }),
            (i.getTipElement = function () {
              return (
                (this.tip = this.tip || e(this.config.template)[0]), this.tip
              );
            }),
            (i.setContent = function () {
              var t = e(this.getTipElement());
              this.setElementContent(t.find(Se.TITLE), this.getTitle());
              var n = this._getContent();
              "function" == typeof n && (n = n.call(this.element)),
                this.setElementContent(t.find(Se.CONTENT), n),
                t.removeClass(Ce.FADE + " " + Ce.SHOW);
            }),
            (i._getContent = function () {
              return (
                this.element.getAttribute("data-content") || this.config.content
              );
            }),
            (i._cleanTipClass = function () {
              var t = e(this.getTipElement()),
                n = t.attr("class").match(Ee);
              null !== n && n.length > 0 && t.removeClass(n.join(""));
            }),
            (n._jQueryInterface = function (t) {
              return this.each(function () {
                var i = e(this).data(ye),
                  r = "object" == typeof t ? t : null;
                if (
                  (i || !/dispose|hide/.test(t)) &&
                  (i || ((i = new n(this, r)), e(this).data(ye, i)),
                  "string" == typeof t)
                ) {
                  if ("undefined" == typeof i[t])
                    throw new TypeError('No method named "' + t + '"');
                  i[t]();
                }
              });
            }),
            r(n, null, [
              {
                key: "VERSION",
                get: function () {
                  return ve;
                },
              },
              {
                key: "Default",
                get: function () {
                  return Te;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return ge;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return ye;
                },
              },
              {
                key: "Event",
                get: function () {
                  return Ae;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return be;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return xe;
                },
              },
            ]),
            n
          );
        })(me);
      (e.fn[ge] = Oe._jQueryInterface),
        (e.fn[ge].Constructor = Oe),
        (e.fn[ge].noConflict = function () {
          return (e.fn[ge] = we), Oe._jQueryInterface;
        });
      var De = "scrollspy",
        ke = "4.3.1",
        Ie = "bs.scrollspy",
        Ne = "." + Ie,
        Le = ".data-api",
        He = e.fn[De],
        Pe = { offset: 10, method: "auto", target: "" },
        je = { offset: "number", method: "string", target: "(string|element)" },
        Me = {
          ACTIVATE: "activate" + Ne,
          SCROLL: "scroll" + Ne,
          LOAD_DATA_API: "load" + Ne + Le,
        },
        Re = {
          DROPDOWN_ITEM: "dropdown-item",
          DROPDOWN_MENU: "dropdown-menu",
          ACTIVE: "active",
        },
        We = {
          DATA_SPY: '[data-spy="scroll"]',
          ACTIVE: ".active",
          NAV_LIST_GROUP: ".nav, .list-group",
          NAV_LINKS: ".nav-link",
          NAV_ITEMS: ".nav-item",
          LIST_ITEMS: ".list-group-item",
          DROPDOWN: ".dropdown",
          DROPDOWN_ITEMS: ".dropdown-item",
          DROPDOWN_TOGGLE: ".dropdown-toggle",
        },
        Fe = { OFFSET: "offset", POSITION: "position" },
        qe = (function () {
          function t(t, n) {
            var i = this;
            (this._element = t),
              (this._scrollElement = "BODY" === t.tagName ? window : t),
              (this._config = this._getConfig(n)),
              (this._selector =
                this._config.target +
                " " +
                We.NAV_LINKS +
                "," +
                (this._config.target + " " + We.LIST_ITEMS + ",") +
                (this._config.target + " " + We.DROPDOWN_ITEMS)),
              (this._offsets = []),
              (this._targets = []),
              (this._activeTarget = null),
              (this._scrollHeight = 0),
              e(this._scrollElement).on(Me.SCROLL, function (t) {
                return i._process(t);
              }),
              this.refresh(),
              this._process();
          }
          var n = t.prototype;
          return (
            (n.refresh = function () {
              var t = this,
                n =
                  this._scrollElement === this._scrollElement.window
                    ? Fe.OFFSET
                    : Fe.POSITION,
                i = "auto" === this._config.method ? n : this._config.method,
                r = i === Fe.POSITION ? this._getScrollTop() : 0;
              (this._offsets = []),
                (this._targets = []),
                (this._scrollHeight = this._getScrollHeight());
              var o = [].slice.call(document.querySelectorAll(this._selector));
              o.map(function (t) {
                var n,
                  o = v.getSelectorFromElement(t);
                if ((o && (n = document.querySelector(o)), n)) {
                  var a = n.getBoundingClientRect();
                  if (a.width || a.height) return [e(n)[i]().top + r, o];
                }
                return null;
              })
                .filter(function (t) {
                  return t;
                })
                .sort(function (t, e) {
                  return t[0] - e[0];
                })
                .forEach(function (e) {
                  t._offsets.push(e[0]), t._targets.push(e[1]);
                });
            }),
            (n.dispose = function () {
              e.removeData(this._element, Ie),
                e(this._scrollElement).off(Ne),
                (this._element = null),
                (this._scrollElement = null),
                (this._config = null),
                (this._selector = null),
                (this._offsets = null),
                (this._targets = null),
                (this._activeTarget = null),
                (this._scrollHeight = null);
            }),
            (n._getConfig = function (t) {
              if (
                ((t = a({}, Pe, "object" == typeof t && t ? t : {})),
                "string" != typeof t.target)
              ) {
                var n = e(t.target).attr("id");
                n || ((n = v.getUID(De)), e(t.target).attr("id", n)),
                  (t.target = "#" + n);
              }
              return v.typeCheckConfig(De, t, je), t;
            }),
            (n._getScrollTop = function () {
              return this._scrollElement === window
                ? this._scrollElement.pageYOffset
                : this._scrollElement.scrollTop;
            }),
            (n._getScrollHeight = function () {
              return (
                this._scrollElement.scrollHeight ||
                Math.max(
                  document.body.scrollHeight,
                  document.documentElement.scrollHeight
                )
              );
            }),
            (n._getOffsetHeight = function () {
              return this._scrollElement === window
                ? window.innerHeight
                : this._scrollElement.getBoundingClientRect().height;
            }),
            (n._process = function () {
              var t = this._getScrollTop() + this._config.offset,
                e = this._getScrollHeight(),
                n = this._config.offset + e - this._getOffsetHeight();
              if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
                var i = this._targets[this._targets.length - 1];
                return void (this._activeTarget !== i && this._activate(i));
              }
              if (
                this._activeTarget &&
                t < this._offsets[0] &&
                this._offsets[0] > 0
              )
                return (this._activeTarget = null), void this._clear();
              for (var r = this._offsets.length, o = r; o--; ) {
                var a =
                  this._activeTarget !== this._targets[o] &&
                  t >= this._offsets[o] &&
                  ("undefined" == typeof this._offsets[o + 1] ||
                    t < this._offsets[o + 1]);
                a && this._activate(this._targets[o]);
              }
            }),
            (n._activate = function (t) {
              (this._activeTarget = t), this._clear();
              var n = this._selector.split(",").map(function (e) {
                  return (
                    e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                  );
                }),
                i = e([].slice.call(document.querySelectorAll(n.join(","))));
              i.hasClass(Re.DROPDOWN_ITEM)
                ? (i
                    .closest(We.DROPDOWN)
                    .find(We.DROPDOWN_TOGGLE)
                    .addClass(Re.ACTIVE),
                  i.addClass(Re.ACTIVE))
                : (i.addClass(Re.ACTIVE),
                  i
                    .parents(We.NAV_LIST_GROUP)
                    .prev(We.NAV_LINKS + ", " + We.LIST_ITEMS)
                    .addClass(Re.ACTIVE),
                  i
                    .parents(We.NAV_LIST_GROUP)
                    .prev(We.NAV_ITEMS)
                    .children(We.NAV_LINKS)
                    .addClass(Re.ACTIVE)),
                e(this._scrollElement).trigger(Me.ACTIVATE, {
                  relatedTarget: t,
                });
            }),
            (n._clear = function () {
              [].slice
                .call(document.querySelectorAll(this._selector))
                .filter(function (t) {
                  return t.classList.contains(Re.ACTIVE);
                })
                .forEach(function (t) {
                  return t.classList.remove(Re.ACTIVE);
                });
            }),
            (t._jQueryInterface = function (n) {
              return this.each(function () {
                var i = e(this).data(Ie),
                  r = "object" == typeof n && n;
                if (
                  (i || ((i = new t(this, r)), e(this).data(Ie, i)),
                  "string" == typeof n)
                ) {
                  if ("undefined" == typeof i[n])
                    throw new TypeError('No method named "' + n + '"');
                  i[n]();
                }
              });
            }),
            r(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return ke;
                },
              },
              {
                key: "Default",
                get: function () {
                  return Pe;
                },
              },
            ]),
            t
          );
        })();
      e(window).on(Me.LOAD_DATA_API, function () {
        for (
          var t = [].slice.call(document.querySelectorAll(We.DATA_SPY)),
            n = t.length,
            i = n;
          i--;

        ) {
          var r = e(t[i]);
          qe._jQueryInterface.call(r, r.data());
        }
      }),
        (e.fn[De] = qe._jQueryInterface),
        (e.fn[De].Constructor = qe),
        (e.fn[De].noConflict = function () {
          return (e.fn[De] = He), qe._jQueryInterface;
        });
      var Be = "tab",
        Ve = "4.3.1",
        Ue = "bs.tab",
        ze = "." + Ue,
        Ye = ".data-api",
        Xe = e.fn[Be],
        Ge = {
          HIDE: "hide" + ze,
          HIDDEN: "hidden" + ze,
          SHOW: "show" + ze,
          SHOWN: "shown" + ze,
          CLICK_DATA_API: "click" + ze + Ye,
        },
        Ke = {
          DROPDOWN_MENU: "dropdown-menu",
          ACTIVE: "active",
          DISABLED: "disabled",
          FADE: "fade",
          SHOW: "show",
        },
        $e = {
          DROPDOWN: ".dropdown",
          NAV_LIST_GROUP: ".nav, .list-group",
          ACTIVE: ".active",
          ACTIVE_UL: "> li > .active",
          DATA_TOGGLE:
            '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
          DROPDOWN_TOGGLE: ".dropdown-toggle",
          DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active",
        },
        Qe = (function () {
          function t(t) {
            this._element = t;
          }
          var n = t.prototype;
          return (
            (n.show = function () {
              var t = this;
              if (
                !(
                  (this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                    e(this._element).hasClass(Ke.ACTIVE)) ||
                  e(this._element).hasClass(Ke.DISABLED)
                )
              ) {
                var n,
                  i,
                  r = e(this._element).closest($e.NAV_LIST_GROUP)[0],
                  o = v.getSelectorFromElement(this._element);
                if (r) {
                  var a =
                    "UL" === r.nodeName || "OL" === r.nodeName
                      ? $e.ACTIVE_UL
                      : $e.ACTIVE;
                  (i = e.makeArray(e(r).find(a))), (i = i[i.length - 1]);
                }
                var s = e.Event(Ge.HIDE, { relatedTarget: this._element }),
                  l = e.Event(Ge.SHOW, { relatedTarget: i });
                if (
                  (i && e(i).trigger(s),
                  e(this._element).trigger(l),
                  !l.isDefaultPrevented() && !s.isDefaultPrevented())
                ) {
                  o && (n = document.querySelector(o)),
                    this._activate(this._element, r);
                  var c = function () {
                    var n = e.Event(Ge.HIDDEN, { relatedTarget: t._element }),
                      r = e.Event(Ge.SHOWN, { relatedTarget: i });
                    e(i).trigger(n), e(t._element).trigger(r);
                  };
                  n ? this._activate(n, n.parentNode, c) : c();
                }
              }
            }),
            (n.dispose = function () {
              e.removeData(this._element, Ue), (this._element = null);
            }),
            (n._activate = function (t, n, i) {
              var r = this,
                o =
                  !n || ("UL" !== n.nodeName && "OL" !== n.nodeName)
                    ? e(n).children($e.ACTIVE)
                    : e(n).find($e.ACTIVE_UL),
                a = o[0],
                s = i && a && e(a).hasClass(Ke.FADE),
                l = function () {
                  return r._transitionComplete(t, a, i);
                };
              if (a && s) {
                var c = v.getTransitionDurationFromElement(a);
                e(a)
                  .removeClass(Ke.SHOW)
                  .one(v.TRANSITION_END, l)
                  .emulateTransitionEnd(c);
              } else l();
            }),
            (n._transitionComplete = function (t, n, i) {
              if (n) {
                e(n).removeClass(Ke.ACTIVE);
                var r = e(n.parentNode).find($e.DROPDOWN_ACTIVE_CHILD)[0];
                r && e(r).removeClass(Ke.ACTIVE),
                  "tab" === n.getAttribute("role") &&
                    n.setAttribute("aria-selected", !1);
              }
              if (
                (e(t).addClass(Ke.ACTIVE),
                "tab" === t.getAttribute("role") &&
                  t.setAttribute("aria-selected", !0),
                v.reflow(t),
                t.classList.contains(Ke.FADE) && t.classList.add(Ke.SHOW),
                t.parentNode && e(t.parentNode).hasClass(Ke.DROPDOWN_MENU))
              ) {
                var o = e(t).closest($e.DROPDOWN)[0];
                if (o) {
                  var a = [].slice.call(o.querySelectorAll($e.DROPDOWN_TOGGLE));
                  e(a).addClass(Ke.ACTIVE);
                }
                t.setAttribute("aria-expanded", !0);
              }
              i && i();
            }),
            (t._jQueryInterface = function (n) {
              return this.each(function () {
                var i = e(this),
                  r = i.data(Ue);
                if (
                  (r || ((r = new t(this)), i.data(Ue, r)),
                  "string" == typeof n)
                ) {
                  if ("undefined" == typeof r[n])
                    throw new TypeError('No method named "' + n + '"');
                  r[n]();
                }
              });
            }),
            r(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return Ve;
                },
              },
            ]),
            t
          );
        })();
      e(document).on(Ge.CLICK_DATA_API, $e.DATA_TOGGLE, function (t) {
        t.preventDefault(), Qe._jQueryInterface.call(e(this), "show");
      }),
        (e.fn[Be] = Qe._jQueryInterface),
        (e.fn[Be].Constructor = Qe),
        (e.fn[Be].noConflict = function () {
          return (e.fn[Be] = Xe), Qe._jQueryInterface;
        });
      var Je = "toast",
        Ze = "4.3.1",
        tn = "bs.toast",
        en = "." + tn,
        nn = e.fn[Je],
        rn = {
          CLICK_DISMISS: "click.dismiss" + en,
          HIDE: "hide" + en,
          HIDDEN: "hidden" + en,
          SHOW: "show" + en,
          SHOWN: "shown" + en,
        },
        on = { FADE: "fade", HIDE: "hide", SHOW: "show", SHOWING: "showing" },
        an = { animation: "boolean", autohide: "boolean", delay: "number" },
        sn = { animation: !0, autohide: !0, delay: 500 },
        ln = { DATA_DISMISS: '[data-dismiss="toast"]' },
        cn = (function () {
          function t(t, e) {
            (this._element = t),
              (this._config = this._getConfig(e)),
              (this._timeout = null),
              this._setListeners();
          }
          var n = t.prototype;
          return (
            (n.show = function () {
              var t = this;
              e(this._element).trigger(rn.SHOW),
                this._config.animation && this._element.classList.add(on.FADE);
              var n = function () {
                t._element.classList.remove(on.SHOWING),
                  t._element.classList.add(on.SHOW),
                  e(t._element).trigger(rn.SHOWN),
                  t._config.autohide && t.hide();
              };
              if (
                (this._element.classList.remove(on.HIDE),
                this._element.classList.add(on.SHOWING),
                this._config.animation)
              ) {
                var i = v.getTransitionDurationFromElement(this._element);
                e(this._element)
                  .one(v.TRANSITION_END, n)
                  .emulateTransitionEnd(i);
              } else n();
            }),
            (n.hide = function (t) {
              var n = this;
              this._element.classList.contains(on.SHOW) &&
                (e(this._element).trigger(rn.HIDE),
                t
                  ? this._close()
                  : (this._timeout = setTimeout(function () {
                      n._close();
                    }, this._config.delay)));
            }),
            (n.dispose = function () {
              clearTimeout(this._timeout),
                (this._timeout = null),
                this._element.classList.contains(on.SHOW) &&
                  this._element.classList.remove(on.SHOW),
                e(this._element).off(rn.CLICK_DISMISS),
                e.removeData(this._element, tn),
                (this._element = null),
                (this._config = null);
            }),
            (n._getConfig = function (t) {
              return (
                (t = a(
                  {},
                  sn,
                  e(this._element).data(),
                  "object" == typeof t && t ? t : {}
                )),
                v.typeCheckConfig(Je, t, this.constructor.DefaultType),
                t
              );
            }),
            (n._setListeners = function () {
              var t = this;
              e(this._element).on(
                rn.CLICK_DISMISS,
                ln.DATA_DISMISS,
                function () {
                  return t.hide(!0);
                }
              );
            }),
            (n._close = function () {
              var t = this,
                n = function () {
                  t._element.classList.add(on.HIDE),
                    e(t._element).trigger(rn.HIDDEN);
                };
              if (
                (this._element.classList.remove(on.SHOW),
                this._config.animation)
              ) {
                var i = v.getTransitionDurationFromElement(this._element);
                e(this._element)
                  .one(v.TRANSITION_END, n)
                  .emulateTransitionEnd(i);
              } else n();
            }),
            (t._jQueryInterface = function (n) {
              return this.each(function () {
                var i = e(this),
                  r = i.data(tn),
                  o = "object" == typeof n && n;
                if (
                  (r || ((r = new t(this, o)), i.data(tn, r)),
                  "string" == typeof n)
                ) {
                  if ("undefined" == typeof r[n])
                    throw new TypeError('No method named "' + n + '"');
                  r[n](this);
                }
              });
            }),
            r(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return Ze;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return an;
                },
              },
              {
                key: "Default",
                get: function () {
                  return sn;
                },
              },
            ]),
            t
          );
        })();
      (e.fn[Je] = cn._jQueryInterface),
        (e.fn[Je].Constructor = cn),
        (e.fn[Je].noConflict = function () {
          return (e.fn[Je] = nn), cn._jQueryInterface;
        }),
        (function () {
          if ("undefined" == typeof e)
            throw new TypeError(
              "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
            );
          var t = e.fn.jquery.split(" ")[0].split("."),
            n = 1,
            i = 2,
            r = 9,
            o = 1,
            a = 4;
          if (
            (t[0] < i && t[1] < r) ||
            (t[0] === n && t[1] === r && t[2] < o) ||
            t[0] >= a
          )
            throw new Error(
              "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
            );
        })(),
        (t.Util = v),
        (t.Alert = A),
        (t.Button = M),
        (t.Carousel = et),
        (t.Collapse = ht),
        (t.Dropdown = Ht),
        (t.Modal = Xt),
        (t.Popover = Oe),
        (t.Scrollspy = qe),
        (t.Tab = Qe),
        (t.Toast = cn),
        (t.Tooltip = me),
        Object.defineProperty(t, "__esModule", { value: !0 });
    });
  },
  function (t, e, n) {
    var i, r;
    !(function (o, a) {
      (i = [n(0)]),
        (r = function (t) {
          return a(o, t);
        }.apply(e, i)),
        !(void 0 !== r && (t.exports = r));
    })("undefined" != typeof window ? window : this, function (t, e) {
      "use strict";
      function n(t) {
        var e = A();
        return (
          W && t.length
            ? (t.one(W, e.resolve), setTimeout(e.resolve, 500))
            : e.resolve(),
          e.promise()
        );
      }
      function i(t, n, i) {
        if (1 === arguments.length) return e.extend({}, t);
        if ("string" == typeof n) {
          if ("undefined" == typeof i)
            return "undefined" == typeof t[n] ? null : t[n];
          t[n] = i;
        } else e.extend(t, n);
        return this;
      }
      function r(t) {
        for (
          var e,
            n = decodeURI(t.split("#")[0]).split("&"),
            i = {},
            r = 0,
            o = n.length;
          r < o;
          r++
        )
          n[r] && ((e = n[r].split("=")), (i[e[0]] = e[1]));
        return i;
      }
      function o(t, n) {
        return t + (t.indexOf("?") > -1 ? "&" : "?") + e.param(n);
      }
      function a(t, e) {
        var n = t.indexOf("#");
        return -1 === n ? e : (n > 0 && (t = t.substr(n)), e + t);
      }
      function s(t) {
        return e('<span class="lity-error"/>').append(t);
      }
      function l(t, n) {
        var i =
            (n.opener() && n.opener().data("lity-desc")) ||
            "Image with no description",
          r = e('<img src="' + t + '" alt="' + i + '"/>'),
          o = A(),
          a = function () {
            o.reject(s("Failed loading image"));
          };
        return (
          r
            .on("load", function () {
              return 0 === this.naturalWidth ? a() : void o.resolve(r);
            })
            .on("error", a),
          o.promise()
        );
      }
      function c(t, n) {
        var i, r, o;
        try {
          i = e(t);
        } catch (a) {
          return !1;
        }
        return (
          !!i.length &&
          ((r = e('<i style="display:none !important"/>')),
          (o = i.hasClass("lity-hide")),
          n.element().one("lity:remove", function () {
            r.before(i).remove(),
              o &&
                !i.closest(".lity-content").length &&
                i.addClass("lity-hide");
          }),
          i.removeClass("lity-hide").after(r))
        );
      }
      function u(t) {
        var n = P.exec(t);
        return (
          !!n &&
          h(
            a(
              t,
              o(
                "https://www.youtube" + (n[2] || "") + ".com/embed/" + n[4],
                e.extend({ autoplay: 1 }, r(n[5] || ""))
              )
            )
          )
        );
      }
      function f(t) {
        var n = j.exec(t);
        return (
          !!n &&
          h(
            a(
              t,
              o(
                "https://player.vimeo.com/video/" + n[3],
                e.extend({ autoplay: 1 }, r(n[4] || ""))
              )
            )
          )
        );
      }
      function p(t) {
        var n = R.exec(t);
        return (
          !!n &&
          (0 !== t.indexOf("http") && (t = "https:" + t),
          h(
            a(
              t,
              o(
                "https://www.facebook.com/plugins/video.php?href=" + t,
                e.extend({ autoplay: 1 }, r(n[4] || ""))
              )
            )
          ))
        );
      }
      function d(t) {
        var e = M.exec(t);
        return (
          !!e &&
          h(
            a(
              t,
              o("https://www.google." + e[3] + "/maps?" + e[6], {
                output: e[6].indexOf("layer=c") > 0 ? "svembed" : "embed",
              })
            )
          )
        );
      }
      function h(t) {
        return (
          '<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="' +
          t +
          '"/></div>'
        );
      }
      function m() {
        return C.documentElement.clientHeight
          ? C.documentElement.clientHeight
          : Math.round(S.height());
      }
      function g(t) {
        var e = _();
        e &&
          (27 === t.keyCode && e.options("esc") && e.close(),
          9 === t.keyCode && v(t, e));
      }
      function v(t, e) {
        var n = e.element().find(N),
          i = n.index(C.activeElement);
        t.shiftKey && i <= 0
          ? (n.get(n.length - 1).focus(), t.preventDefault())
          : t.shiftKey ||
            i !== n.length - 1 ||
            (n.get(0).focus(), t.preventDefault());
      }
      function y() {
        e.each(D, function (t, e) {
          e.resize();
        });
      }
      function b(t) {
        1 === D.unshift(t) &&
          (O.addClass("lity-active"), S.on({ resize: y, keydown: g })),
          e("body > *")
            .not(t.element())
            .addClass("lity-hidden")
            .each(function () {
              var t = e(this);
              void 0 === t.data(I) && t.data(I, t.attr(k) || null);
            })
            .attr(k, "true");
      }
      function w(t) {
        var n;
        t.element().attr(k, "true"),
          1 === D.length &&
            (O.removeClass("lity-active"), S.off({ resize: y, keydown: g })),
          (D = e.grep(D, function (e) {
            return t !== e;
          })),
          (n = D.length ? D[0].element() : e(".lity-hidden")),
          n.removeClass("lity-hidden").each(function () {
            var t = e(this),
              n = t.data(I);
            n ? t.attr(k, n) : t.removeAttr(k), t.removeData(I);
          });
      }
      function _() {
        return 0 === D.length ? null : D[0];
      }
      function E(t, n, i, r) {
        var o,
          a = "inline",
          s = e.extend({}, i);
        return (
          r && s[r]
            ? ((o = s[r](t, n)), (a = r))
            : (e.each(["inline", "iframe"], function (t, e) {
                delete s[e], (s[e] = i[e]);
              }),
              e.each(s, function (e, i) {
                return (
                  !i ||
                  !(!i.test || i.test(t, n)) ||
                  ((o = i(t, n)), !1 !== o ? ((a = e), !1) : void 0)
                );
              })),
          { handler: a, content: o || "" }
        );
      }
      function T(t, r, o, a) {
        function s(t) {
          (u = e(t).css("max-height", m() + "px")),
            c.find(".lity-loader").each(function () {
              var t = e(this);
              n(t).always(function () {
                t.remove();
              });
            }),
            c
              .removeClass("lity-loading")
              .find(".lity-content")
              .empty()
              .append(u),
            (p = !0),
            u.trigger("lity:ready", [f]);
        }
        var l,
          c,
          u,
          f = this,
          p = !1,
          d = !1;
        (r = e.extend({}, L, r)),
          (c = e(r.template)),
          (f.element = function () {
            return c;
          }),
          (f.opener = function () {
            return o;
          }),
          (f.options = e.proxy(i, f, r)),
          (f.handlers = e.proxy(i, f, r.handlers)),
          (f.resize = function () {
            p &&
              !d &&
              u.css("max-height", m() + "px").trigger("lity:resize", [f]);
          }),
          (f.close = function () {
            if (p && !d) {
              (d = !0), w(f);
              var t = A();
              if (
                a &&
                (C.activeElement === c[0] || e.contains(c[0], C.activeElement))
              )
                try {
                  a.focus();
                } catch (i) {}
              return (
                u.trigger("lity:close", [f]),
                c.removeClass("lity-opened").addClass("lity-closed"),
                n(u.add(c)).always(function () {
                  u.trigger("lity:remove", [f]),
                    c.remove(),
                    (c = void 0),
                    t.resolve();
                }),
                t.promise()
              );
            }
          }),
          (l = E(t, f, r.handlers, r.handler)),
          c
            .attr(k, "false")
            .addClass("lity-loading lity-opened lity-" + l.handler)
            .appendTo("body")
            .focus()
            .on("click", "[data-lity-close]", function (t) {
              e(t.target).is("[data-lity-close]") && f.close();
            })
            .trigger("lity:open", [f]),
          b(f),
          e.when(l.content).always(s);
      }
      function x(t, n, i) {
        t.preventDefault
          ? (t.preventDefault(),
            (i = e(this)),
            (t = i.data("lity-target") || i.attr("href") || i.attr("src")))
          : (i = e(i));
        var r = new T(
          t,
          e.extend({}, i.data("lity-options") || i.data("lity"), n),
          i,
          C.activeElement
        );
        if (!t.preventDefault) return r;
      }
      var C = t.document,
        S = e(t),
        A = e.Deferred,
        O = e("html"),
        D = [],
        k = "aria-hidden",
        I = "lity-" + k,
        N =
          'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])',
        L = {
          esc: !0,
          handler: null,
          handlers: {
            image: l,
            inline: c,
            youtube: u,
            vimeo: f,
            googlemaps: d,
            facebookvideo: p,
            iframe: h,
          },
          template:
            '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>',
        },
        H = /(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i,
        P = /(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i,
        j = /(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/,
        M = /((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i,
        R = /(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i,
        W = (function () {
          var t = C.createElement("div"),
            e = {
              WebkitTransition: "webkitTransitionEnd",
              MozTransition: "transitionend",
              OTransition: "oTransitionEnd otransitionend",
              transition: "transitionend",
            };
          for (var n in e) if (void 0 !== t.style[n]) return e[n];
          return !1;
        })();
      return (
        (l.test = function (t) {
          return H.test(t);
        }),
        (x.version = "2.3.1"),
        (x.options = e.proxy(i, x, L)),
        (x.handlers = e.proxy(i, x, L.handlers)),
        (x.current = _),
        e(C).on("click.lity", "[data-lity]", x),
        x
      );
    });
  },
  function (t, e, n) {
    (function (e) {
      !(function (e, n) {
        t.exports = n();
      })(this, function () {
        "use strict";
        function t(t, e, r) {
          function o(e) {
            var n = f,
              i = p;
            return (f = p = void 0), (v = e), (h = t.apply(i, n));
          }
          function a(t) {
            var n = t - g;
            return void 0 === g || n >= e || n < 0 || (b && t - v >= d);
          }
          function s() {
            var t = x();
            return a(t)
              ? l(t)
              : void (m = setTimeout(
                  s,
                  (function (t) {
                    var n = e - (t - g);
                    return b ? T(n, d - (t - v)) : n;
                  })(t)
                ));
          }
          function l(t) {
            return (m = void 0), w && f ? o(t) : ((f = p = void 0), h);
          }
          function c() {
            var t = x(),
              n = a(t);
            if (((f = arguments), (p = this), (g = t), n)) {
              if (void 0 === m)
                return (function (t) {
                  return (v = t), (m = setTimeout(s, e)), y ? o(t) : h;
                })(g);
              if (b) return (m = setTimeout(s, e)), o(g);
            }
            return void 0 === m && (m = setTimeout(s, e)), h;
          }
          var f,
            p,
            d,
            h,
            m,
            g,
            v = 0,
            y = !1,
            b = !1,
            w = !0;
          if ("function" != typeof t) throw new TypeError(u);
          return (
            (e = i(e) || 0),
            n(r) &&
              ((y = !!r.leading),
              (d = (b = "maxWait" in r) ? E(i(r.maxWait) || 0, e) : d),
              (w = "trailing" in r ? !!r.trailing : w)),
            (c.cancel = function () {
              void 0 !== m && clearTimeout(m),
                (v = 0),
                (f = g = p = m = void 0);
            }),
            (c.flush = function () {
              return void 0 === m ? h : l(x());
            }),
            c
          );
        }
        function n(t) {
          var e = typeof t;
          return !!t && ("object" == e || "function" == e);
        }
        function i(t) {
          if ("number" == typeof t) return t;
          if (
            (function (t) {
              return (
                "symbol" == typeof t ||
                ((function (t) {
                  return !!t && "object" == typeof t;
                })(t) &&
                  _.call(t) == p)
              );
            })(t)
          )
            return f;
          if (n(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = n(e) ? e + "" : e;
          }
          if ("string" != typeof t) return 0 === t ? t : +t;
          t = t.replace(d, "");
          var i = m.test(t);
          return i || g.test(t) ? v(t.slice(2), i ? 2 : 8) : h.test(t) ? f : +t;
        }
        function r(t) {
          var e = typeof t;
          return !!t && ("object" == e || "function" == e);
        }
        function o(t) {
          if ("number" == typeof t) return t;
          if (
            (function (t) {
              return (
                "symbol" == typeof t ||
                ((function (t) {
                  return !!t && "object" == typeof t;
                })(t) &&
                  M.call(t) == O)
              );
            })(t)
          )
            return A;
          if (r(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = r(e) ? e + "" : e;
          }
          if ("string" != typeof t) return 0 === t ? t : +t;
          t = t.replace(D, "");
          var n = I.test(t);
          return n || N.test(t) ? L(t.slice(2), n ? 2 : 8) : k.test(t) ? A : +t;
        }
        function a(t) {
          t &&
            t.forEach(function (t) {
              var e = Array.prototype.slice.call(t.addedNodes),
                n = Array.prototype.slice.call(t.removedNodes);
              if (
                (function i(t) {
                  var e = void 0,
                    n = void 0;
                  for (e = 0; e < t.length; e += 1) {
                    if ((n = t[e]).dataset && n.dataset.aos) return !0;
                    if (n.children && i(n.children)) return !0;
                  }
                  return !1;
                })(e.concat(n))
              )
                return B();
            });
        }
        function s() {
          return (
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver
          );
        }
        function l() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        var c =
            "undefined" != typeof window
              ? window
              : "undefined" != typeof e
              ? e
              : "undefined" != typeof self
              ? self
              : {},
          u = "Expected a function",
          f = NaN,
          p = "[object Symbol]",
          d = /^\s+|\s+$/g,
          h = /^[-+]0x[0-9a-f]+$/i,
          m = /^0b[01]+$/i,
          g = /^0o[0-7]+$/i,
          v = parseInt,
          y = "object" == typeof c && c && c.Object === Object && c,
          b = "object" == typeof self && self && self.Object === Object && self,
          w = y || b || Function("return this")(),
          _ = Object.prototype.toString,
          E = Math.max,
          T = Math.min,
          x = function () {
            return w.Date.now();
          },
          C = function (e, i, r) {
            var o = !0,
              a = !0;
            if ("function" != typeof e) throw new TypeError(u);
            return (
              n(r) &&
                ((o = "leading" in r ? !!r.leading : o),
                (a = "trailing" in r ? !!r.trailing : a)),
              t(e, i, { leading: o, maxWait: i, trailing: a })
            );
          },
          S = "Expected a function",
          A = NaN,
          O = "[object Symbol]",
          D = /^\s+|\s+$/g,
          k = /^[-+]0x[0-9a-f]+$/i,
          I = /^0b[01]+$/i,
          N = /^0o[0-7]+$/i,
          L = parseInt,
          H = "object" == typeof c && c && c.Object === Object && c,
          P = "object" == typeof self && self && self.Object === Object && self,
          j = H || P || Function("return this")(),
          M = Object.prototype.toString,
          R = Math.max,
          W = Math.min,
          F = function () {
            return j.Date.now();
          },
          q = function (t, e, n) {
            function i(e) {
              var n = u,
                i = f;
              return (u = f = void 0), (g = e), (d = t.apply(i, n));
            }
            function a(t) {
              var n = t - m;
              return void 0 === m || n >= e || n < 0 || (y && t - g >= p);
            }
            function s() {
              var t = F();
              return a(t)
                ? l(t)
                : void (h = setTimeout(
                    s,
                    (function (t) {
                      var n = e - (t - m);
                      return y ? W(n, p - (t - g)) : n;
                    })(t)
                  ));
            }
            function l(t) {
              return (h = void 0), b && u ? i(t) : ((u = f = void 0), d);
            }
            function c() {
              var t = F(),
                n = a(t);
              if (((u = arguments), (f = this), (m = t), n)) {
                if (void 0 === h)
                  return (function (t) {
                    return (g = t), (h = setTimeout(s, e)), v ? i(t) : d;
                  })(m);
                if (y) return (h = setTimeout(s, e)), i(m);
              }
              return void 0 === h && (h = setTimeout(s, e)), d;
            }
            var u,
              f,
              p,
              d,
              h,
              m,
              g = 0,
              v = !1,
              y = !1,
              b = !0;
            if ("function" != typeof t) throw new TypeError(S);
            return (
              (e = o(e) || 0),
              r(n) &&
                ((v = !!n.leading),
                (p = (y = "maxWait" in n) ? R(o(n.maxWait) || 0, e) : p),
                (b = "trailing" in n ? !!n.trailing : b)),
              (c.cancel = function () {
                void 0 !== h && clearTimeout(h),
                  (g = 0),
                  (u = m = f = h = void 0);
              }),
              (c.flush = function () {
                return void 0 === h ? d : l(F());
              }),
              c
            );
          },
          B = function () {},
          V = {
            isSupported: function () {
              return !!s();
            },
            ready: function (t, e) {
              var n = window.document,
                i = new (s())(a);
              (B = e),
                i.observe(n.documentElement, {
                  childList: !0,
                  subtree: !0,
                  removedNodes: !0,
                });
            },
          },
          U = function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          },
          z = (function () {
            function t(t, e) {
              for (var n = 0; n < e.length; n++) {
                var i = e[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(t, i.key, i);
              }
            }
            return function (e, n, i) {
              return n && t(e.prototype, n), i && t(e, i), e;
            };
          })(),
          Y =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
              }
              return t;
            },
          X = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          G = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          K = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          $ = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          Q = new ((function () {
            function t() {
              U(this, t);
            }
            return (
              z(t, [
                {
                  key: "phone",
                  value: function () {
                    var t = l();
                    return !(!X.test(t) && !G.test(t.substr(0, 4)));
                  },
                },
                {
                  key: "mobile",
                  value: function () {
                    var t = l();
                    return !(!K.test(t) && !$.test(t.substr(0, 4)));
                  },
                },
                {
                  key: "tablet",
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
                {
                  key: "ie11",
                  value: function () {
                    return (
                      "-ms-scroll-limit" in document.documentElement.style &&
                      "-ms-ime-align" in document.documentElement.style
                    );
                  },
                },
              ]),
              t
            );
          })())(),
          J = function (t, e) {
            var n = void 0;
            return (
              Q.ie11()
                ? (n = document.createEvent("CustomEvent")).initCustomEvent(
                    t,
                    !0,
                    !0,
                    { detail: e }
                  )
                : (n = new CustomEvent(t, { detail: e })),
              document.dispatchEvent(n)
            );
          },
          Z = function (t) {
            return t.forEach(function (t, e) {
              return (function (t, e) {
                var n = t.options,
                  i = t.position,
                  r = t.node,
                  o =
                    (t.data,
                    function () {
                      t.animated &&
                        ((function (t, e) {
                          e &&
                            e.forEach(function (e) {
                              return t.classList.remove(e);
                            });
                        })(r, n.animatedClassNames),
                        J("aos:out", r),
                        t.options.id && J("aos:in:" + t.options.id, r),
                        (t.animated = !1));
                    });
                n.mirror && e >= i.out && !n.once
                  ? o()
                  : e >= i["in"]
                  ? t.animated ||
                    ((function (t, e) {
                      e &&
                        e.forEach(function (e) {
                          return t.classList.add(e);
                        });
                    })(r, n.animatedClassNames),
                    J("aos:in", r),
                    t.options.id && J("aos:in:" + t.options.id, r),
                    (t.animated = !0))
                  : t.animated && !n.once && o();
              })(t, window.pageYOffset);
            });
          },
          tt = function (t) {
            for (
              var e = 0, n = 0;
              t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);

            )
              (e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0)),
                (n += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0)),
                (t = t.offsetParent);
            return { top: n, left: e };
          },
          et = function (t, e, n) {
            var i = t.getAttribute("data-aos-" + e);
            if (void 0 !== i) {
              if ("true" === i) return !0;
              if ("false" === i) return !1;
            }
            return i || n;
          },
          nt = function (t, e) {
            return (
              t.forEach(function (t, n) {
                var i = et(t.node, "mirror", e.mirror),
                  r = et(t.node, "once", e.once),
                  o = et(t.node, "id"),
                  a = e.useClassNames && t.node.getAttribute("data-aos"),
                  s = [e.animatedClassName]
                    .concat(a ? a.split(" ") : [])
                    .filter(function (t) {
                      return "string" == typeof t;
                    });
                e.initClassName && t.node.classList.add(e.initClassName),
                  (t.position = {
                    in: (function (t, e, n) {
                      var i = window.innerHeight,
                        r = et(t, "anchor"),
                        o = et(t, "anchor-placement"),
                        a = Number(et(t, "offset", o ? 0 : e)),
                        s = o || n,
                        l = t;
                      r &&
                        document.querySelectorAll(r) &&
                        (l = document.querySelectorAll(r)[0]);
                      var c = tt(l).top - i;
                      switch (s) {
                        case "top-bottom":
                          break;
                        case "center-bottom":
                          c += l.offsetHeight / 2;
                          break;
                        case "bottom-bottom":
                          c += l.offsetHeight;
                          break;
                        case "top-center":
                          c += i / 2;
                          break;
                        case "center-center":
                          c += i / 2 + l.offsetHeight / 2;
                          break;
                        case "bottom-center":
                          c += i / 2 + l.offsetHeight;
                          break;
                        case "top-top":
                          c += i;
                          break;
                        case "bottom-top":
                          c += i + l.offsetHeight;
                          break;
                        case "center-top":
                          c += i + l.offsetHeight / 2;
                      }
                      return c + a;
                    })(t.node, e.offset, e.anchorPlacement),
                    out:
                      i &&
                      (function (t, e) {
                        window.innerHeight;
                        var n = et(t, "anchor"),
                          i = et(t, "offset", e),
                          r = t;
                        return (
                          n &&
                            document.querySelectorAll(n) &&
                            (r = document.querySelectorAll(n)[0]),
                          tt(r).top + r.offsetHeight - i
                        );
                      })(t.node, e.offset),
                  }),
                  (t.options = {
                    once: r,
                    mirror: i,
                    animatedClassNames: s,
                    id: o,
                  });
              }),
              t
            );
          },
          it = function () {
            var t = document.querySelectorAll("[data-aos]");
            return Array.prototype.map.call(t, function (t) {
              return { node: t };
            });
          },
          rt = [],
          ot = !1,
          at = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            mirror: !1,
            anchorPlacement: "top-bottom",
            startEvent: "DOMContentLoaded",
            animatedClassName: "aos-animate",
            initClassName: "aos-init",
            useClassNames: !1,
            disableMutationObserver: !1,
            throttleDelay: 99,
            debounceDelay: 50,
          },
          st = function () {
            return document.all && !window.atob;
          },
          lt = function () {
            arguments.length > 0 &&
              void 0 !== arguments[0] &&
              arguments[0] &&
              (ot = !0),
              ot &&
                ((rt = nt(rt, at)),
                Z(rt),
                window.addEventListener(
                  "scroll",
                  C(function () {
                    Z(rt, at.once);
                  }, at.throttleDelay)
                ));
          },
          ct = function () {
            return (rt = it()), ft(at.disable) || st() ? ut() : void lt();
          },
          ut = function () {
            rt.forEach(function (t, e) {
              t.node.removeAttribute("data-aos"),
                t.node.removeAttribute("data-aos-easing"),
                t.node.removeAttribute("data-aos-duration"),
                t.node.removeAttribute("data-aos-delay"),
                at.initClassName && t.node.classList.remove(at.initClassName),
                at.animatedClassName &&
                  t.node.classList.remove(at.animatedClassName);
            });
          },
          ft = function (t) {
            return (
              !0 === t ||
              ("mobile" === t && Q.mobile()) ||
              ("phone" === t && Q.phone()) ||
              ("tablet" === t && Q.tablet()) ||
              ("function" == typeof t && !0 === t())
            );
          };
        return {
          init: function (t) {
            return (
              (at = Y(at, t)),
              (rt = it()),
              at.disableMutationObserver ||
                V.isSupported() ||
                (console.info(
                  '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                ),
                (at.disableMutationObserver = !0)),
              at.disableMutationObserver || V.ready("[data-aos]", ct),
              ft(at.disable) || st()
                ? ut()
                : (document
                    .querySelector("body")
                    .setAttribute("data-aos-easing", at.easing),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-duration", at.duration),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-delay", at.delay),
                  -1 === ["DOMContentLoaded", "load"].indexOf(at.startEvent)
                    ? document.addEventListener(at.startEvent, function () {
                        lt(!0);
                      })
                    : window.addEventListener("load", function () {
                        lt(!0);
                      }),
                  "DOMContentLoaded" === at.startEvent &&
                    ["complete", "interactive"].indexOf(document.readyState) >
                      -1 &&
                    lt(!0),
                  window.addEventListener(
                    "resize",
                    q(lt, at.debounceDelay, !0)
                  ),
                  window.addEventListener(
                    "orientationchange",
                    q(lt, at.debounceDelay, !0)
                  ),
                  rt)
            );
          },
          refresh: lt,
          refreshHard: ct,
        };
      });
    }.call(e, n(2)));
  },
  function (t, e, n) {
    "use strict";
    function i(t) {
      console.error("[Glide warn]: " + t);
    }
    function r(t) {
      return parseInt(t);
    }
    function o(t) {
      return parseFloat(t);
    }
    function a(t) {
      return "string" == typeof t;
    }
    function s(t) {
      var e = "undefined" == typeof t ? "undefined" : X(t);
      return "function" === e || ("object" === e && !!t);
    }
    function l(t) {
      return "number" == typeof t;
    }
    function c(t) {
      return "function" == typeof t;
    }
    function u(t) {
      return "undefined" == typeof t;
    }
    function f(t) {
      return t.constructor === Array;
    }
    function p(t, e, n) {
      var r = {};
      for (var o in e)
        c(e[o]) ? (r[o] = e[o](t, r, n)) : i("Extension must be a function");
      for (var a in r) c(r[a].mount) && r[a].mount();
      return r;
    }
    function d(t, e, n) {
      Object.defineProperty(t, e, n);
    }
    function h(t) {
      return Object.keys(t)
        .sort()
        .reduce(function (e, n) {
          return (e[n] = t[n]), e[n], e;
        }, {});
    }
    function m(t, e) {
      var n = $({}, t, e);
      return (
        e.hasOwnProperty("classes") &&
          ((n.classes = $({}, t.classes, e.classes)),
          e.classes.hasOwnProperty("direction") &&
            (n.classes.direction = $(
              {},
              t.classes.direction,
              e.classes.direction
            ))),
        e.hasOwnProperty("breakpoints") &&
          (n.breakpoints = $({}, t.breakpoints, e.breakpoints)),
        n
      );
    }
    function g(t, e, n) {
      var o = {
        mount: function () {
          this._o = !1;
        },
        make: function (i) {
          var r = this;
          t.disabled ||
            (t.disable(),
            (this.move = i),
            n.emit("run.before", this.move),
            this.calculate(),
            n.emit("run", this.move),
            e.Transition.after(function () {
              r.isStart() && n.emit("run.start", r.move),
                r.isEnd() && n.emit("run.end", r.move),
                (r.isOffset("<") || r.isOffset(">")) &&
                  ((r._o = !1), n.emit("run.offset", r.move)),
                n.emit("run.after", r.move),
                t.enable();
            }));
        },
        calculate: function () {
          var e = this.move,
            n = this.length,
            o = e.steps,
            a = e.direction,
            s = l(r(o)) && 0 !== r(o);
          switch (a) {
            case ">":
              ">" === o
                ? (t.index = n)
                : this.isEnd()
                ? (t.isType("slider") && !t.settings.rewind) ||
                  ((this._o = !0), (t.index = 0))
                : s
                ? (t.index += Math.min(n - t.index, -r(o)))
                : t.index++;
              break;
            case "<":
              "<" === o
                ? (t.index = 0)
                : this.isStart()
                ? (t.isType("slider") && !t.settings.rewind) ||
                  ((this._o = !0), (t.index = n))
                : s
                ? (t.index -= Math.min(t.index, r(o)))
                : t.index--;
              break;
            case "=":
              t.index = o;
              break;
            default:
              i("Invalid direction pattern [" + a + o + "] has been used");
          }
        },
        isStart: function () {
          return 0 === t.index;
        },
        isEnd: function () {
          return t.index === this.length;
        },
        isOffset: function (t) {
          return this._o && this.move.direction === t;
        },
      };
      return (
        d(o, "move", {
          get: function () {
            return this._m;
          },
          set: function (t) {
            var e = t.substr(1);
            this._m = {
              direction: t.substr(0, 1),
              steps: e ? (r(e) ? r(e) : e) : 0,
            };
          },
        }),
        d(o, "length", {
          get: function () {
            var n = t.settings,
              i = e.Html.slides.length;
            return t.isType("slider") && "center" !== n.focusAt && n.bound
              ? i - 1 - (r(n.perView) - 1) + r(n.focusAt)
              : i - 1;
          },
        }),
        d(o, "offset", {
          get: function () {
            return this._o;
          },
        }),
        o
      );
    }
    function v() {
      return new Date().getTime();
    }
    function y(t, e, n) {
      var i = void 0,
        r = void 0,
        o = void 0,
        a = void 0,
        s = 0;
      n || (n = {});
      var l = function () {
          (s = n.leading === !1 ? 0 : v()),
            (i = null),
            (a = t.apply(r, o)),
            i || (r = o = null);
        },
        c = function () {
          var c = v();
          s || n.leading !== !1 || (s = c);
          var u = e - (c - s);
          return (
            (r = this),
            (o = arguments),
            u <= 0 || u > e
              ? (i && (clearTimeout(i), (i = null)),
                (s = c),
                (a = t.apply(r, o)),
                i || (r = o = null))
              : i || n.trailing === !1 || (i = setTimeout(l, u)),
            a
          );
        };
      return (
        (c.cancel = function () {
          clearTimeout(i), (s = 0), (i = r = o = null);
        }),
        c
      );
    }
    function b(t, e, n) {
      var i = {
        apply: function (t) {
          for (var n = 0, i = t.length; n < i; n++) {
            var r = t[n].style,
              o = e.Direction.value;
            0 !== n
              ? (r[nt[o][0]] = this.value / 2 + "px")
              : (r[nt[o][0]] = ""),
              n !== t.length - 1
                ? (r[nt[o][1]] = this.value / 2 + "px")
                : (r[nt[o][1]] = "");
          }
        },
        remove: function (t) {
          for (var e = 0, n = t.length; e < n; e++) {
            var i = t[e].style;
            (i.marginLeft = ""), (i.marginRight = "");
          }
        },
      };
      return (
        d(i, "value", {
          get: function () {
            return r(t.settings.gap);
          },
        }),
        d(i, "grow", {
          get: function () {
            return i.value * (e.Sizes.length - 1);
          },
        }),
        d(i, "reductor", {
          get: function () {
            var e = t.settings.perView;
            return (i.value * (e - 1)) / e;
          },
        }),
        n.on(
          ["build.after", "update"],
          y(function () {
            i.apply(e.Html.wrapper.children);
          }, 30)
        ),
        n.on("destroy", function () {
          i.remove(e.Html.wrapper.children);
        }),
        i
      );
    }
    function w(t) {
      if (t && t.parentNode) {
        for (var e = t.parentNode.firstChild, n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      }
      return [];
    }
    function _(t) {
      return !!(t && t instanceof window.HTMLElement);
    }
    function E(t, e) {
      var n = {
        mount: function () {
          (this.root = t.selector),
            (this.track = this.root.querySelector(it)),
            (this.slides = Array.prototype.slice
              .call(this.wrapper.children)
              .filter(function (e) {
                return !e.classList.contains(t.settings.classes.cloneSlide);
              }));
        },
      };
      return (
        d(n, "root", {
          get: function () {
            return n._r;
          },
          set: function (t) {
            a(t) && (t = document.querySelector(t)),
              _(t)
                ? (n._r = t)
                : i("Root element must be a existing Html node");
          },
        }),
        d(n, "track", {
          get: function () {
            return n._t;
          },
          set: function (t) {
            _(t)
              ? (n._t = t)
              : i(
                  "Could not find track element. Please use " +
                    it +
                    " attribute."
                );
          },
        }),
        d(n, "wrapper", {
          get: function () {
            return n.track.children[0];
          },
        }),
        n
      );
    }
    function T(t, e, n) {
      var i = {
        mount: function () {
          this.value = t.settings.peek;
        },
      };
      return (
        d(i, "value", {
          get: function () {
            return i._v;
          },
          set: function (t) {
            s(t)
              ? ((t.before = r(t.before)), (t.after = r(t.after)))
              : (t = r(t)),
              (i._v = t);
          },
        }),
        d(i, "reductor", {
          get: function () {
            var e = i.value,
              n = t.settings.perView;
            return s(e) ? e.before / n + e.after / n : (2 * e) / n;
          },
        }),
        n.on(["resize", "update"], function () {
          i.mount();
        }),
        i
      );
    }
    function x(t, e, n) {
      var i = {
        mount: function () {
          this._o = 0;
        },
        make: function () {
          var t = this,
            i =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
          (this.offset = i),
            n.emit("move", { movement: this.value }),
            e.Transition.after(function () {
              n.emit("move.after", { movement: t.value });
            });
        },
      };
      return (
        d(i, "offset", {
          get: function () {
            return i._o;
          },
          set: function (t) {
            i._o = u(t) ? 0 : r(t);
          },
        }),
        d(i, "translate", {
          get: function () {
            return e.Sizes.slideWidth * t.index;
          },
        }),
        d(i, "value", {
          get: function () {
            var t = this.offset,
              n = this.translate;
            return e.Direction.is("rtl") ? n + t : n - t;
          },
        }),
        n.on(["build.before", "run"], function () {
          i.make();
        }),
        i
      );
    }
    function C(t, e, n) {
      var i = {
        setupSlides: function () {
          for (
            var t = this.slideWidth + "px", n = e.Html.slides, i = 0;
            i < n.length;
            i++
          )
            n[i].style.width = t;
        },
        setupWrapper: function (t) {
          e.Html.wrapper.style.width = this.wrapperSize + "px";
        },
        remove: function () {
          for (var t = e.Html.slides, n = 0; n < t.length; n++)
            t[n].style.width = "";
          e.Html.wrapper.style.width = "";
        },
      };
      return (
        d(i, "length", {
          get: function () {
            return e.Html.slides.length;
          },
        }),
        d(i, "width", {
          get: function () {
            return e.Html.root.offsetWidth;
          },
        }),
        d(i, "wrapperSize", {
          get: function () {
            return i.slideWidth * i.length + e.Gaps.grow + e.Clones.grow;
          },
        }),
        d(i, "slideWidth", {
          get: function () {
            return (
              i.width / t.settings.perView - e.Peek.reductor - e.Gaps.reductor
            );
          },
        }),
        n.on(["build.before", "resize", "update"], function () {
          i.setupSlides(), i.setupWrapper();
        }),
        n.on("destroy", function () {
          i.remove();
        }),
        i
      );
    }
    function S(t, e, n) {
      var i = {
        mount: function () {
          n.emit("build.before"),
            this.typeClass(),
            this.activeClass(),
            n.emit("build.after");
        },
        typeClass: function () {
          e.Html.root.classList.add(t.settings.classes[t.settings.type]);
        },
        activeClass: function () {
          var n = t.settings.classes,
            i = e.Html.slides[t.index];
          i &&
            (i.classList.add(n.activeSlide),
            w(i).forEach(function (t) {
              t.classList.remove(n.activeSlide);
            }));
        },
        removeClasses: function () {
          var n = t.settings.classes;
          e.Html.root.classList.remove(n[t.settings.type]),
            e.Html.slides.forEach(function (t) {
              t.classList.remove(n.activeSlide);
            });
        },
      };
      return (
        n.on(["destroy", "update"], function () {
          i.removeClasses();
        }),
        n.on(["resize", "update"], function () {
          i.mount();
        }),
        n.on("move.after", function () {
          i.activeClass();
        }),
        i
      );
    }
    function A(t, e, n) {
      var i = {
        mount: function () {
          (this.items = []),
            t.isType("carousel") && (this.items = this.collect());
        },
        collect: function () {
          for (
            var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              i = e.Html.slides,
              r = t.settings,
              o = r.perView,
              a = r.classes,
              s = +!!t.settings.peek,
              l = o + s,
              c = i.slice(0, l),
              u = i.slice(-l),
              f = 0;
            f < Math.max(1, Math.floor(o / i.length));
            f++
          ) {
            for (var p = 0; p < c.length; p++) {
              var d = c[p].cloneNode(!0);
              d.classList.add(a.cloneSlide), n.push(d);
            }
            for (var h = 0; h < u.length; h++) {
              var m = u[h].cloneNode(!0);
              m.classList.add(a.cloneSlide), n.unshift(m);
            }
          }
          return n;
        },
        append: function r() {
          for (
            var t = this.items,
              n = e.Html,
              i = n.wrapper,
              o = n.slides,
              a = Math.floor(t.length / 2),
              s = t.slice(0, a).reverse(),
              r = t.slice(a, t.length),
              l = e.Sizes.slideWidth + "px",
              c = 0;
            c < r.length;
            c++
          )
            i.appendChild(r[c]);
          for (var u = 0; u < s.length; u++) i.insertBefore(s[u], o[0]);
          for (var f = 0; f < t.length; f++) t[f].style.width = l;
        },
        remove: function () {
          for (var t = this.items, n = 0; n < t.length; n++)
            e.Html.wrapper.removeChild(t[n]);
        },
      };
      return (
        d(i, "grow", {
          get: function () {
            return (e.Sizes.slideWidth + e.Gaps.value) * i.items.length;
          },
        }),
        n.on("update", function () {
          i.remove(), i.mount(), i.append();
        }),
        n.on("build.before", function () {
          t.isType("carousel") && i.append();
        }),
        n.on("destroy", function () {
          i.remove();
        }),
        i
      );
    }
    function O(t, e, n) {
      var i = new rt(),
        r = {
          mount: function () {
            this.bind();
          },
          bind: function () {
            i.on(
              "resize",
              window,
              y(function () {
                n.emit("resize");
              }, t.settings.throttle)
            );
          },
          unbind: function () {
            i.off("resize", window);
          },
        };
      return (
        n.on("destroy", function () {
          r.unbind(), i.destroy();
        }),
        r
      );
    }
    function D(t, e, n) {
      var r = {
        mount: function () {
          this.value = t.settings.direction;
        },
        resolve: function (t) {
          var e = t.slice(0, 1);
          return this.is("rtl") ? t.split(e).join(at[e]) : t;
        },
        is: function (t) {
          return this.value === t;
        },
        addClass: function () {
          e.Html.root.classList.add(t.settings.classes.direction[this.value]);
        },
        removeClass: function () {
          e.Html.root.classList.remove(
            t.settings.classes.direction[this.value]
          );
        },
      };
      return (
        d(r, "value", {
          get: function () {
            return r._v;
          },
          set: function (t) {
            ot.indexOf(t) > -1
              ? (r._v = t)
              : i("Direction value must be `ltr` or `rtl`");
          },
        }),
        n.on(["destroy", "update"], function () {
          r.removeClass();
        }),
        n.on("update", function () {
          r.mount();
        }),
        n.on(["build.before", "update"], function () {
          r.addClass();
        }),
        r
      );
    }
    function k(t, e) {
      return {
        modify: function (t) {
          return e.Direction.is("rtl") ? -t : t;
        },
      };
    }
    function I(t, e) {
      return {
        modify: function (n) {
          return n + e.Gaps.value * t.index;
        },
      };
    }
    function N(t, e) {
      return {
        modify: function (t) {
          return t + e.Clones.grow / 2;
        },
      };
    }
    function L(t, e) {
      return {
        modify: function (n) {
          if (t.settings.focusAt >= 0) {
            var i = e.Peek.value;
            return s(i) ? n - i.before : n - i;
          }
          return n;
        },
      };
    }
    function H(t, e) {
      return {
        modify: function (n) {
          var i = e.Gaps.value,
            r = e.Sizes.width,
            o = t.settings.focusAt,
            a = e.Sizes.slideWidth;
          return "center" === o ? n - (r / 2 - a / 2) : n - a * o - i * o;
        },
      };
    }
    function P(t, e, n) {
      var r = [I, N, L, H].concat(t._t, [k]);
      return {
        mutate: function (o) {
          for (var a = 0; a < r.length; a++) {
            var s = r[a];
            c(s) && c(s().modify)
              ? (o = s(t, e, n).modify(o))
              : i(
                  "Transformer should be a function that returns an object with `modify()` method"
                );
          }
          return o;
        },
      };
    }
    function j(t, e, n) {
      var i = {
        set: function (n) {
          var i = P(t, e).mutate(n);
          e.Html.wrapper.style.transform =
            "translate3d(" + -1 * i + "px, 0px, 0px)";
        },
        remove: function () {
          e.Html.wrapper.style.transform = "";
        },
      };
      return (
        n.on("move", function (r) {
          var o = e.Gaps.value,
            a = e.Sizes.length,
            s = e.Sizes.slideWidth;
          return t.isType("carousel") && e.Run.isOffset("<")
            ? (e.Transition.after(function () {
                n.emit("translate.jump"), i.set(s * (a - 1));
              }),
              i.set(-s - o * a))
            : t.isType("carousel") && e.Run.isOffset(">")
            ? (e.Transition.after(function () {
                n.emit("translate.jump"), i.set(0);
              }),
              i.set(s * a + o * a))
            : i.set(r.movement);
        }),
        n.on("destroy", function () {
          i.remove();
        }),
        i
      );
    }
    function M(t, e, n) {
      var i = !1,
        r = {
          compose: function (e) {
            var n = t.settings;
            return i
              ? e + " 0ms " + n.animationTimingFunc
              : e + " " + this.duration + "ms " + n.animationTimingFunc;
          },
          set: function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "transform";
            e.Html.wrapper.style.transition = this.compose(t);
          },
          remove: function () {
            e.Html.wrapper.style.transition = "";
          },
          after: function (t) {
            setTimeout(function () {
              t();
            }, this.duration);
          },
          enable: function () {
            (i = !1), this.set();
          },
          disable: function () {
            (i = !0), this.set();
          },
        };
      return (
        d(r, "duration", {
          get: function () {
            var n = t.settings;
            return t.isType("slider") && e.Run.offset
              ? n.rewindDuration
              : n.animationDuration;
          },
        }),
        n.on("move", function () {
          r.set();
        }),
        n.on(["build.before", "resize", "translate.jump"], function () {
          r.disable();
        }),
        n.on("run", function () {
          r.enable();
        }),
        n.on("destroy", function () {
          r.remove();
        }),
        r
      );
    }
    function R(t, e, n) {
      var i = new rt(),
        a = 0,
        s = 0,
        l = 0,
        c = !1,
        u = !!ut && { passive: !0 },
        f = {
          mount: function () {
            this.bindSwipeStart();
          },
          start: function (e) {
            if (!c && !t.disabled) {
              this.disable();
              var i = this.touches(e);
              (a = null),
                (s = r(i.pageX)),
                (l = r(i.pageY)),
                this.bindSwipeMove(),
                this.bindSwipeEnd(),
                n.emit("swipe.start");
            }
          },
          move: function (i) {
            if (!t.disabled) {
              var c = t.settings,
                u = c.touchAngle,
                f = c.touchRatio,
                p = c.classes,
                d = this.touches(i),
                h = r(d.pageX) - s,
                m = r(d.pageY) - l,
                g = Math.abs(h << 2),
                v = Math.abs(m << 2),
                y = Math.sqrt(g + v),
                b = Math.sqrt(v);
              if (((a = Math.asin(b / y)), !((180 * a) / Math.PI < u)))
                return !1;
              i.stopPropagation(),
                e.Move.make(h * o(f)),
                e.Html.root.classList.add(p.dragging),
                n.emit("swipe.move");
            }
          },
          end: function (i) {
            if (!t.disabled) {
              var o = t.settings,
                l = this.touches(i),
                c = this.threshold(i),
                u = l.pageX - s,
                f = (180 * a) / Math.PI,
                p = Math.round(u / e.Sizes.slideWidth);
              this.enable(),
                u > c && f < o.touchAngle
                  ? (o.perTouch && (p = Math.min(p, r(o.perTouch))),
                    e.Direction.is("rtl") && (p = -p),
                    e.Run.make(e.Direction.resolve("<" + p)))
                  : u < -c && f < o.touchAngle
                  ? (o.perTouch && (p = Math.max(p, -r(o.perTouch))),
                    e.Direction.is("rtl") && (p = -p),
                    e.Run.make(e.Direction.resolve(">" + p)))
                  : e.Move.make(),
                e.Html.root.classList.remove(o.classes.dragging),
                this.unbindSwipeMove(),
                this.unbindSwipeEnd(),
                n.emit("swipe.end");
            }
          },
          bindSwipeStart: function () {
            var n = this,
              r = t.settings;
            r.swipeThreshold &&
              i.on(
                ft[0],
                e.Html.wrapper,
                function (t) {
                  n.start(t);
                },
                u
              ),
              r.dragThreshold &&
                i.on(
                  ft[1],
                  e.Html.wrapper,
                  function (t) {
                    n.start(t);
                  },
                  u
                );
          },
          unbindSwipeStart: function () {
            i.off(ft[0], e.Html.wrapper, u), i.off(ft[1], e.Html.wrapper, u);
          },
          bindSwipeMove: function () {
            var n = this;
            i.on(
              pt,
              e.Html.wrapper,
              y(function (t) {
                n.move(t);
              }, t.settings.throttle),
              u
            );
          },
          unbindSwipeMove: function () {
            i.off(pt, e.Html.wrapper, u);
          },
          bindSwipeEnd: function () {
            var t = this;
            i.on(dt, e.Html.wrapper, function (e) {
              t.end(e);
            });
          },
          unbindSwipeEnd: function () {
            i.off(dt, e.Html.wrapper);
          },
          touches: function (t) {
            return ht.indexOf(t.type) > -1
              ? t
              : t.touches[0] || t.changedTouches[0];
          },
          threshold: function (e) {
            var n = t.settings;
            return ht.indexOf(e.type) > -1 ? n.dragThreshold : n.swipeThreshold;
          },
          enable: function () {
            return (c = !1), e.Transition.enable(), this;
          },
          disable: function () {
            return (c = !0), e.Transition.disable(), this;
          },
        };
      return (
        n.on("build.after", function () {
          e.Html.root.classList.add(t.settings.classes.swipeable);
        }),
        n.on("destroy", function () {
          f.unbindSwipeStart(),
            f.unbindSwipeMove(),
            f.unbindSwipeEnd(),
            i.destroy();
        }),
        f
      );
    }
    function W(t, e, n) {
      var i = new rt(),
        r = {
          mount: function () {
            this.bind();
          },
          bind: function () {
            i.on("dragstart", e.Html.wrapper, this.dragstart);
          },
          unbind: function () {
            i.off("dragstart", e.Html.wrapper);
          },
          dragstart: function (t) {
            t.preventDefault();
          },
        };
      return (
        n.on("destroy", function () {
          r.unbind(), i.destroy();
        }),
        r
      );
    }
    function F(t, e, n) {
      var i = new rt(),
        r = !1,
        o = !1,
        a = {
          mount: function () {
            (this._a = e.Html.wrapper.querySelectorAll("a")), this.bind();
          },
          bind: function () {
            i.on("click", e.Html.wrapper, this.click);
          },
          unbind: function () {
            i.off("click", e.Html.wrapper);
          },
          click: function (t) {
            o && (t.stopPropagation(), t.preventDefault());
          },
          detach: function () {
            if (((o = !0), !r)) {
              for (var t = 0; t < this.items.length; t++)
                (this.items[t].draggable = !1),
                  this.items[t].setAttribute(
                    "data-href",
                    this.items[t].getAttribute("href")
                  ),
                  this.items[t].removeAttribute("href");
              r = !0;
            }
            return this;
          },
          attach: function () {
            if (((o = !1), r)) {
              for (var t = 0; t < this.items.length; t++)
                (this.items[t].draggable = !0),
                  this.items[t].setAttribute(
                    "href",
                    this.items[t].getAttribute("data-href")
                  );
              r = !1;
            }
            return this;
          },
        };
      return (
        d(a, "items", {
          get: function () {
            return a._a;
          },
        }),
        n.on("swipe.move", function () {
          a.detach();
        }),
        n.on("swipe.end", function () {
          e.Transition.after(function () {
            a.attach();
          });
        }),
        n.on("destroy", function () {
          a.attach(), a.unbind(), i.destroy();
        }),
        a
      );
    }
    function q(t, e, n) {
      var i = new rt(),
        r = !!ut && { passive: !0 },
        o = {
          mount: function () {
            (this._n = e.Html.root.querySelectorAll(mt)),
              (this._c = e.Html.root.querySelectorAll(gt)),
              this.addBindings();
          },
          setActive: function () {
            for (var t = 0; t < this._n.length; t++)
              this.addClass(this._n[t].children);
          },
          removeActive: function () {
            for (var t = 0; t < this._n.length; t++)
              this.removeClass(this._n[t].children);
          },
          addClass: function (e) {
            var n = t.settings,
              i = e[t.index];
            i &&
              (i.classList.add(n.classes.activeNav),
              w(i).forEach(function (t) {
                t.classList.remove(n.classes.activeNav);
              }));
          },
          removeClass: function (e) {
            var n = e[t.index];
            n && n.classList.remove(t.settings.classes.activeNav);
          },
          addBindings: function () {
            for (var t = 0; t < this._c.length; t++)
              this.bind(this._c[t].children);
          },
          removeBindings: function () {
            for (var t = 0; t < this._c.length; t++)
              this.unbind(this._c[t].children);
          },
          bind: function (t) {
            for (var e = 0; e < t.length; e++)
              i.on("click", t[e], this.click),
                i.on("touchstart", t[e], this.click, r);
          },
          unbind: function (t) {
            for (var e = 0; e < t.length; e++)
              i.off(["click", "touchstart"], t[e]);
          },
          click: function (t) {
            t.preventDefault(),
              e.Run.make(
                e.Direction.resolve(
                  t.currentTarget.getAttribute("data-glide-dir")
                )
              );
          },
        };
      return (
        d(o, "items", {
          get: function () {
            return o._c;
          },
        }),
        n.on(["mount.after", "move.after"], function () {
          o.setActive();
        }),
        n.on("destroy", function () {
          o.removeBindings(), o.removeActive(), i.destroy();
        }),
        o
      );
    }
    function B(t, e, n) {
      var i = new rt(),
        r = {
          mount: function () {
            t.settings.keyboard && this.bind();
          },
          bind: function () {
            i.on("keyup", document, this.press);
          },
          unbind: function () {
            i.off("keyup", document);
          },
          press: function (t) {
            39 === t.keyCode && e.Run.make(e.Direction.resolve(">")),
              37 === t.keyCode && e.Run.make(e.Direction.resolve("<"));
          },
        };
      return (
        n.on(["destroy", "update"], function () {
          r.unbind();
        }),
        n.on("update", function () {
          r.mount();
        }),
        n.on("destroy", function () {
          i.destroy();
        }),
        r
      );
    }
    function V(t, e, n) {
      var i = new rt(),
        o = {
          mount: function () {
            this.start(), t.settings.hoverpause && this.bind();
          },
          start: function () {
            var n = this;
            t.settings.autoplay &&
              u(this._i) &&
              (this._i = setInterval(function () {
                n.stop(), e.Run.make(">"), n.start();
              }, this.time));
          },
          stop: function () {
            this._i = clearInterval(this._i);
          },
          bind: function () {
            var t = this;
            i.on("mouseover", e.Html.root, function () {
              t.stop();
            }),
              i.on("mouseout", e.Html.root, function () {
                t.start();
              });
          },
          unbind: function () {
            i.off(["mouseover", "mouseout"], e.Html.root);
          },
        };
      return (
        d(o, "time", {
          get: function () {
            var n = e.Html.slides[t.index].getAttribute("data-glide-autoplay");
            return r(n ? n : t.settings.autoplay);
          },
        }),
        n.on(["destroy", "update"], function () {
          o.unbind();
        }),
        n.on(
          ["run.before", "pause", "destroy", "swipe.start", "update"],
          function () {
            o.stop();
          }
        ),
        n.on(["run.after", "play", "swipe.end"], function () {
          o.start();
        }),
        n.on("update", function () {
          o.mount();
        }),
        n.on("destroy", function () {
          i.destroy();
        }),
        o
      );
    }
    function U(t) {
      return s(t) ? h(t) : (i("Breakpoints option must be an object"), {});
    }
    function z(t, e, n) {
      var i = new rt(),
        r = t.settings,
        o = U(r.breakpoints),
        a = $({}, r),
        s = {
          match: function (t) {
            if ("undefined" != typeof window.matchMedia)
              for (var e in t)
                if (
                  t.hasOwnProperty(e) &&
                  window.matchMedia("(max-width: " + e + "px)").matches
                )
                  return t[e];
            return a;
          },
        };
      return (
        $(r, s.match(o)),
        i.on(
          "resize",
          window,
          y(function () {
            t.settings = m(r, s.match(o));
          }, t.settings.throttle)
        ),
        n.on("update", function () {
          (o = U(o)), (a = $({}, r));
        }),
        n.on("destroy", function () {
          i.off("resize", window);
        }),
        s
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var Y = {
        type: "slider",
        startAt: 0,
        perView: 1,
        focusAt: 0,
        gap: 10,
        autoplay: !1,
        hoverpause: !0,
        keyboard: !0,
        bound: !1,
        swipeThreshold: 80,
        dragThreshold: 120,
        perTouch: !1,
        touchRatio: 0.5,
        touchAngle: 45,
        animationDuration: 400,
        rewind: !0,
        rewindDuration: 800,
        animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
        throttle: 10,
        direction: "ltr",
        peek: 0,
        breakpoints: {},
        classes: {
          direction: { ltr: "glide--ltr", rtl: "glide--rtl" },
          slider: "glide--slider",
          carousel: "glide--carousel",
          swipeable: "glide--swipeable",
          dragging: "glide--dragging",
          cloneSlide: "glide__slide--clone",
          activeNav: "glide__bullet--active",
          activeSlide: "glide__slide--active",
          disabledArrow: "glide__arrow--disabled",
        },
      },
      X =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            },
      G = function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      },
      K = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        return function (e, n, i) {
          return n && t(e.prototype, n), i && t(e, i), e;
        };
      })(),
      $ =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        },
      Q = function bt(t, e, n) {
        null === t && (t = Function.prototype);
        var i = Object.getOwnPropertyDescriptor(t, e);
        if (void 0 === i) {
          var r = Object.getPrototypeOf(t);
          return null === r ? void 0 : bt(r, e, n);
        }
        if ("value" in i) return i.value;
        var o = i.get;
        if (void 0 !== o) return o.call(n);
      },
      J = function (t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      },
      Z = function (t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      },
      tt = (function () {
        function t() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          G(this, t), (this.events = e), (this.hop = e.hasOwnProperty);
        }
        return (
          K(t, [
            {
              key: "on",
              value: function (t, e) {
                if (f(t)) for (var n = 0; n < t.length; n++) this.on(t[n], e);
                this.hop.call(this.events, t) || (this.events[t] = []);
                var i = this.events[t].push(e) - 1;
                return {
                  remove: function () {
                    delete this.events[t][i];
                  },
                };
              },
            },
            {
              key: "emit",
              value: function (t, e) {
                if (f(t)) for (var n = 0; n < t.length; n++) this.emit(t[n], e);
                this.hop.call(this.events, t) &&
                  this.events[t].forEach(function (t) {
                    t(e || {});
                  });
              },
            },
          ]),
          t
        );
      })(),
      et = (function () {
        function t(e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          G(this, t),
            (this._c = {}),
            (this._t = []),
            (this._e = new tt()),
            (this.disabled = !1),
            (this.selector = e),
            (this.settings = m(Y, n)),
            (this.index = this.settings.startAt);
        }
        return (
          K(t, [
            {
              key: "mount",
              value: function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return (
                  this._e.emit("mount.before"),
                  s(t)
                    ? (this._c = p(this, t, this._e))
                    : i("You need to provide a object on `mount()`"),
                  this._e.emit("mount.after"),
                  this
                );
              },
            },
            {
              key: "mutate",
              value: function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [];
                return (
                  f(t)
                    ? (this._t = t)
                    : i("You need to provide a array on `mutate()`"),
                  this
                );
              },
            },
            {
              key: "update",
              value: function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return (
                  (this.settings = m(this.settings, t)),
                  t.hasOwnProperty("startAt") && (this.index = t.startAt),
                  this._e.emit("update"),
                  this
                );
              },
            },
            {
              key: "go",
              value: function (t) {
                return this._c.Run.make(t), this;
              },
            },
            {
              key: "move",
              value: function (t) {
                return this._c.Transition.disable(), this._c.Move.make(t), this;
              },
            },
            {
              key: "destroy",
              value: function () {
                return this._e.emit("destroy"), this;
              },
            },
            {
              key: "play",
              value: function () {
                var t =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                return (
                  t && (this.settings.autoplay = t), this._e.emit("play"), this
                );
              },
            },
            {
              key: "pause",
              value: function () {
                return this._e.emit("pause"), this;
              },
            },
            {
              key: "disable",
              value: function () {
                return (this.disabled = !0), this;
              },
            },
            {
              key: "enable",
              value: function () {
                return (this.disabled = !1), this;
              },
            },
            {
              key: "on",
              value: function (t, e) {
                return this._e.on(t, e), this;
              },
            },
            {
              key: "isType",
              value: function (t) {
                return this.settings.type === t;
              },
            },
            {
              key: "settings",
              get: function () {
                return this._o;
              },
              set: function (t) {
                s(t)
                  ? (this._o = t)
                  : i("Options must be an `object` instance.");
              },
            },
            {
              key: "index",
              get: function () {
                return this._i;
              },
              set: function (t) {
                this._i = r(t);
              },
            },
            {
              key: "type",
              get: function () {
                return this.settings.type;
              },
            },
            {
              key: "disabled",
              get: function () {
                return this._d;
              },
              set: function (t) {
                this._d = !!t;
              },
            },
          ]),
          t
        );
      })(),
      nt = {
        ltr: ["marginLeft", "marginRight"],
        rtl: ["marginRight", "marginLeft"],
      },
      it = '[data-glide-el="track"]',
      rt = (function () {
        function t() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          G(this, t), (this.listeners = e);
        }
        return (
          K(t, [
            {
              key: "on",
              value: function (t, e, n) {
                var i =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3];
                a(t) && (t = [t]);
                for (var r = 0; r < t.length; r++)
                  (this.listeners[t[r]] = n),
                    e.addEventListener(t[r], this.listeners[t[r]], i);
              },
            },
            {
              key: "off",
              value: function (t, e) {
                var n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                a(t) && (t = [t]);
                for (var i = 0; i < t.length; i++)
                  e.removeEventListener(t[i], this.listeners[t[i]], n);
              },
            },
            {
              key: "destroy",
              value: function () {
                delete this.listeners;
              },
            },
          ]),
          t
        );
      })(),
      ot = ["ltr", "rtl"],
      at = { ">": "<", "<": ">", "=": "=" },
      st = !1;
    try {
      var lt = Object.defineProperty({}, "passive", {
        get: function () {
          st = !0;
        },
      });
      window.addEventListener("testPassive", null, lt),
        window.removeEventListener("testPassive", null, lt);
    } catch (ct) {}
    var ut = st,
      ft = ["touchstart", "mousedown"],
      pt = ["touchmove", "mousemove"],
      dt = ["touchend", "touchcancel", "mouseup", "mouseleave"],
      ht = ["mousedown", "mousemove", "mouseup", "mouseleave"],
      mt = '[data-glide-el="controls[nav]"]',
      gt = '[data-glide-el^="controls"]',
      vt = {
        Html: E,
        Translate: j,
        Transition: M,
        Direction: D,
        Peek: T,
        Sizes: C,
        Gaps: b,
        Move: x,
        Clones: A,
        Resize: O,
        Build: S,
        Run: g,
        Swipe: R,
        Images: W,
        Anchors: F,
        Controls: q,
        Keyboard: B,
        Autoplay: V,
        Breakpoints: z,
      },
      yt = (function (t) {
        function e() {
          return (
            G(this, e),
            Z(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
            )
          );
        }
        return (
          J(e, t),
          K(e, [
            {
              key: "mount",
              value: function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return Q(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  "mount",
                  this
                ).call(this, $({}, vt, t));
              },
            },
          ]),
          e
        );
      })(et);
    e["default"] = yt;
  },
  function (t, e, n) {
    "use strict";
    function i() {
      return (
        (i =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          }),
        i.apply(this, arguments)
      );
    }
    function r(t) {
      return [].slice.call(t);
    }
    function o(t, e) {
      return a(t, function (t) {
        return pt.call(t, e);
      });
    }
    function a(t, e) {
      for (; t; ) {
        if (e(t)) return t;
        t = t.parentElement;
      }
      return null;
    }
    function s() {
      It ||
        ((It = !0),
        lt && document.body.classList.add(vt),
        window.performance && document.addEventListener("mousemove", l));
    }
    function l() {
      var t = performance.now();
      t - Nt < 20 &&
        ((It = !1),
        document.removeEventListener("mousemove", l),
        lt || document.body.classList.remove(vt)),
        (Nt = t);
    }
    function c() {
      var t = document,
        e = t.activeElement;
      e && e.blur && e._tippy && e.blur();
    }
    function u() {
      document.addEventListener("touchstart", s, dt),
        window.addEventListener("blur", c);
    }
    function f(t) {
      return Lt.reduce(function (e, n) {
        var i = (t.getAttribute("data-tippy-".concat(n)) || "").trim();
        if (!i) return e;
        if ("content" === n) e[n] = i;
        else
          try {
            e[n] = JSON.parse(i);
          } catch (r) {
            e[n] = i;
          }
        return e;
      }, {});
    }
    function p(t) {
      var e = {
        isVirtual: !0,
        attributes: t.attributes || {},
        contains: function () {},
        setAttribute: function (e, n) {
          t.attributes[e] = n;
        },
        getAttribute: function (e) {
          return t.attributes[e];
        },
        removeAttribute: function (e) {
          delete t.attributes[e];
        },
        hasAttribute: function (e) {
          return e in t.attributes;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        classList: {
          classNames: {},
          add: function (e) {
            t.classList.classNames[e] = !0;
          },
          remove: function (e) {
            delete t.classList.classNames[e];
          },
          contains: function (e) {
            return e in t.classList.classNames;
          },
        },
      };
      for (var n in e) t[n] = e[n];
    }
    function d(t) {
      return "[object Object]" === {}.toString.call(t) && !t.addEventListener;
    }
    function h(t) {
      return !!t._tippy && !pt.call(t, Ct);
    }
    function m(t, e) {
      return {}.hasOwnProperty.call(t, e);
    }
    function g(t) {
      if (E(t)) return [t];
      if (t instanceof NodeList) return r(t);
      if (Array.isArray(t)) return t;
      try {
        return r(document.querySelectorAll(t));
      } catch (e) {
        return [];
      }
    }
    function v(t, e, n) {
      if (Array.isArray(t)) {
        var i = t[e];
        return null == i ? n : i;
      }
      return t;
    }
    function y(t, e) {
      if (0 === e) return t;
      var n;
      return function (i) {
        clearTimeout(n),
          (n = setTimeout(function () {
            t(i);
          }, e));
      };
    }
    function b(t, e) {
      return t && t.modifiers && t.modifiers[e];
    }
    function w(t, e) {
      return t.indexOf(e) > -1;
    }
    function _(t) {
      return t instanceof Element;
    }
    function E(t) {
      return !(!t || !m(t, "isVirtual")) || _(t);
    }
    function T() {
      return "innerHTML";
    }
    function x(t, e) {
      return "function" == typeof t ? t.apply(null, e) : t;
    }
    function C(t, e) {
      t.filter(function (t) {
        return "flip" === t.name;
      })[0].enabled = e;
    }
    function S(t) {
      return (
        !_(t) ||
        (pt.call(
          t,
          "a[href],area[href],button,details,input,textarea,select,iframe,[tabindex]"
        ) &&
          !t.hasAttribute("disabled"))
      );
    }
    function A() {
      return document.createElement("div");
    }
    function O(t, e) {
      t.forEach(function (t) {
        t && (t.style.transitionDuration = "".concat(e, "ms"));
      });
    }
    function D(t, e) {
      t.forEach(function (t) {
        t && t.setAttribute("data-state", e);
      });
    }
    function k(t, e) {
      var n = i(
        {},
        e,
        { content: x(e.content, [t]) },
        e.ignoreAttributes ? {} : f(t)
      );
      return (n.arrow || st) && (n.animateFill = !1), n;
    }
    function I(t, e) {
      Object.keys(t).forEach(function (t) {
        if (!m(e, t))
          throw new Error("[tippy]: `".concat(t, "` is not a valid option"));
      });
    }
    function N(t, e) {
      t[T()] = _(e) ? e[T()] : e;
    }
    function L(t, e) {
      if (_(e.content)) N(t, ""), t.appendChild(e.content);
      else if ("function" != typeof e.content) {
        var n = e.allowHTML ? "innerHTML" : "textContent";
        t[n] = e.content;
      }
    }
    function H(t) {
      return {
        tooltip: t.querySelector(St),
        backdrop: t.querySelector(Ot),
        content: t.querySelector(At),
        arrow: t.querySelector(Dt) || t.querySelector(kt),
      };
    }
    function P(t) {
      t.setAttribute("data-inertia", "");
    }
    function j(t) {
      t.removeAttribute("data-inertia");
    }
    function M(t) {
      var e = A();
      return (
        "round" === t
          ? ((e.className = xt),
            N(
              e,
              '<svg viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg"><path d="M0 7s2.021-.015 5.253-4.218C6.584 1.051 7.797.007 9 0c1.203-.007 2.416 1.035 3.761 2.782C16.012 7.005 18 7 18 7H0z"/></svg>'
            ))
          : (e.className = Tt),
        e
      );
    }
    function R() {
      var t = A();
      return (t.className = Et), t.setAttribute("data-state", "hidden"), t;
    }
    function W(t, e) {
      t.setAttribute("tabindex", "-1"), e.setAttribute("data-interactive", "");
    }
    function F(t, e) {
      t.removeAttribute("tabindex"), e.removeAttribute("data-interactive");
    }
    function q(t, e, n) {
      var i =
        st && void 0 !== document.body.style.webkitTransition
          ? "webkitTransitionEnd"
          : "transitionend";
      t[e + "EventListener"](i, n);
    }
    function B(t) {
      var e = t.getAttribute(mt);
      return e ? e.split("-")[0] : "";
    }
    function V(t) {
      void t.offsetHeight;
    }
    function U(t, e, n) {
      n.split(" ").forEach(function (n) {
        t.classList[e](n + "-theme");
      });
    }
    function z(t, e) {
      var n = A();
      (n.className = bt),
        (n.id = "tippy-".concat(t)),
        (n.style.zIndex = "" + e.zIndex),
        (n.style.position = "absolute"),
        (n.style.top = "0"),
        (n.style.left = "0"),
        e.role && n.setAttribute("role", e.role);
      var i = A();
      (i.className = wt),
        (i.style.maxWidth =
          e.maxWidth + ("number" == typeof e.maxWidth ? "px" : "")),
        i.setAttribute("data-size", e.size),
        i.setAttribute("data-animation", e.animation),
        i.setAttribute("data-state", "hidden"),
        U(i, "add", e.theme);
      var r = A();
      return (
        (r.className = _t),
        r.setAttribute("data-state", "hidden"),
        e.interactive && W(n, i),
        e.arrow && i.appendChild(M(e.arrowType)),
        e.animateFill &&
          (i.appendChild(R()), i.setAttribute("data-animatefill", "")),
        e.inertia && P(i),
        L(r, e),
        i.appendChild(r),
        n.appendChild(i),
        n
      );
    }
    function Y(t, e, n) {
      var i = H(t),
        r = i.tooltip,
        o = i.content,
        a = i.backdrop,
        s = i.arrow;
      (t.style.zIndex = "" + n.zIndex),
        r.setAttribute("data-size", n.size),
        r.setAttribute("data-animation", n.animation),
        (r.style.maxWidth =
          n.maxWidth + ("number" == typeof n.maxWidth ? "px" : "")),
        n.role ? t.setAttribute("role", n.role) : t.removeAttribute("role"),
        e.content !== n.content && L(o, n),
        !e.animateFill && n.animateFill
          ? (r.appendChild(R()), r.setAttribute("data-animatefill", ""))
          : e.animateFill &&
            !n.animateFill &&
            (r.removeChild(a), r.removeAttribute("data-animatefill")),
        !e.arrow && n.arrow
          ? r.appendChild(M(n.arrowType))
          : e.arrow && !n.arrow && r.removeChild(s),
        e.arrow &&
          n.arrow &&
          e.arrowType !== n.arrowType &&
          r.replaceChild(M(n.arrowType), s),
        !e.interactive && n.interactive
          ? W(t, r)
          : e.interactive && !n.interactive && F(t, r),
        !e.inertia && n.inertia ? P(r) : e.inertia && !n.inertia && j(r),
        e.theme !== n.theme && (U(r, "remove", e.theme), U(r, "add", n.theme));
    }
    function X() {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = t.exclude,
        n = t.duration;
      r(document.querySelectorAll(Ct)).forEach(function (t) {
        var i = t._tippy;
        if (i) {
          var r = !1;
          e && (r = h(e) ? i.reference === e : t === e.popper), r || i.hide(n);
        }
      });
    }
    function G(t, e, n, i) {
      if (!t) return !0;
      var r = n.clientX,
        o = n.clientY,
        a = i.interactiveBorder,
        s = i.distance,
        l = e.top - o > ("top" === t ? a + s : a),
        c = o - e.bottom > ("bottom" === t ? a + s : a),
        u = e.left - r > ("left" === t ? a + s : a),
        f = r - e.right > ("right" === t ? a + s : a);
      return l || c || u || f;
    }
    function K(t) {
      return -(t - 10) + "px";
    }
    function $(t, e) {
      function n() {
        document.removeEventListener("mousemove", L);
      }
      function s() {
        document.body.removeEventListener("mouseleave", nt),
          document.removeEventListener("mousemove", Wt),
          (Pt = Pt.filter(function (t) {
            return t !== Wt;
          }));
      }
      function l() {
        return zt.props.triggerTarget || t;
      }
      function c() {
        document.addEventListener("click", it, !0);
      }
      function u() {
        document.removeEventListener("click", it, !0);
      }
      function f() {
        return [
          zt.popperChildren.tooltip,
          zt.popperChildren.backdrop,
          zt.popperChildren.content,
        ];
      }
      function p() {
        var t = zt.props.followCursor;
        return (t && "focus" !== _t) || (It && "initial" === t);
      }
      function d() {
        function t() {
          zt.popperInstance.scheduleUpdate(),
            zt.state.isMounted ? requestAnimationFrame(t) : O([qt], 0);
        }
        O([qt], at ? 0 : zt.props.updateDuration), t();
      }
      function h(t, e) {
        E(t, function () {
          !zt.state.isVisible &&
            qt.parentNode &&
            qt.parentNode.contains(qt) &&
            e();
        });
      }
      function g(t, e) {
        E(t, e);
      }
      function E(t, e) {
        function n(t) {
          t.target === i && (q(i, "remove", n), e());
        }
        var i = zt.popperChildren.tooltip;
        return 0 === t
          ? e()
          : (q(i, "remove", Dt), q(i, "add", n), void (Dt = n));
      }
      function T(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        l().addEventListener(t, e, n),
          Rt.push({ eventType: t, handler: e, options: n });
      }
      function A() {
        zt.props.touchHold &&
          !zt.props.target &&
          (T("touchstart", j, dt), T("touchend", R, dt)),
          zt.props.trigger
            .trim()
            .split(" ")
            .forEach(function (t) {
              if ("manual" !== t)
                if (zt.props.target)
                  switch (t) {
                    case "mouseenter":
                      T("mouseover", F), T("mouseout", U);
                      break;
                    case "focus":
                      T("focusin", F), T("focusout", U);
                      break;
                    case "click":
                      T(t, F);
                  }
                else
                  switch ((T(t, j), t)) {
                    case "mouseenter":
                      T("mouseleave", R);
                      break;
                    case "focus":
                      T(at ? "focusout" : "blur", W);
                  }
            });
      }
      function N() {
        Rt.forEach(function (t) {
          var e = t.eventType,
            n = t.handler,
            i = t.options;
          l().removeEventListener(e, n, i);
        }),
          (Rt = []);
      }
      function L(e) {
        var r = (Et = e),
          o = r.clientX,
          s = r.clientY;
        if (kt) {
          var l = a(e.target, function (e) {
              return e === t;
            }),
            c = t.getBoundingClientRect(),
            u = zt.props.followCursor,
            f = "horizontal" === u,
            p = "vertical" === u,
            d = w(["top", "bottom"], B(qt)),
            h = qt.getAttribute(mt),
            m = !!h && !!h.split("-")[1],
            g = d ? qt.offsetWidth : qt.offsetHeight,
            v = g / 2,
            y = d ? 0 : m ? g : v,
            b = d ? (m ? g : v) : 0;
          (!l && zt.props.interactive) ||
            ((zt.popperInstance.reference = i({}, zt.popperInstance.reference, {
              clientWidth: 0,
              clientHeight: 0,
              getBoundingClientRect: function () {
                return {
                  width: d ? g : 0,
                  height: d ? 0 : g,
                  top: (f ? c.top : s) - y,
                  bottom: (f ? c.bottom : s) + y,
                  left: (p ? c.left : o) - b,
                  right: (p ? c.right : o) + b,
                };
              },
            })),
            zt.popperInstance.update()),
            "initial" === u && zt.state.isVisible && n();
        }
      }
      function P(t) {
        if (t) {
          var n = o(t.target, zt.props.target);
          n &&
            !n._tippy &&
            $(
              n,
              i({}, zt.props, {
                content: x(e.content, [n]),
                appendTo: e.appendTo,
                target: "",
                showOnInit: !0,
              })
            );
        }
      }
      function j(t) {
        zt.state.isEnabled &&
          !X(t) &&
          (zt.state.isVisible ||
            ((_t = t.type),
            t instanceof MouseEvent &&
              ((Et = t),
              Pt.forEach(function (e) {
                return e(t);
              }))),
          "click" === t.type &&
          zt.props.hideOnClick !== !1 &&
          zt.state.isVisible
            ? nt()
            : tt(t));
      }
      function M(e) {
        var n = o(e.target, Ct) === qt,
          i = a(e.target, function (e) {
            return e === t;
          });
        n ||
          i ||
          (G(B(qt), qt.getBoundingClientRect(), e, zt.props) && (s(), nt()));
      }
      function R(t) {
        if (!X(t))
          return zt.props.interactive
            ? (document.body.addEventListener("mouseleave", nt),
              document.addEventListener("mousemove", Wt),
              void Pt.push(Wt))
            : void nt();
      }
      function W(t) {
        t.target === l() &&
          ((zt.props.interactive &&
            t.relatedTarget &&
            qt.contains(t.relatedTarget)) ||
            nt());
      }
      function F(t) {
        o(t.target, zt.props.target) && tt(t);
      }
      function U(t) {
        o(t.target, zt.props.target) && nt();
      }
      function X(t) {
        var e = "ontouchstart" in window,
          n = w(t.type, "touch"),
          i = zt.props.touchHold;
        return (e && It && i && !n) || (It && !i && n);
      }
      function Q() {
        !Mt && Ot && ((Mt = !0), V(qt), Ot());
      }
      function J() {
        function e(t) {
          zt.props.flip &&
            !zt.props.flipOnUpdate &&
            (t.flipped && (zt.popperInstance.options.placement = t.placement),
            C(zt.popperInstance.modifiers, !1)),
            o.setAttribute(mt, t.placement),
            t.attributes[gt] !== !1
              ? o.setAttribute(gt, "")
              : o.removeAttribute(gt),
            At &&
              At !== t.placement &&
              jt &&
              ((o.style.transition = "none"),
              requestAnimationFrame(function () {
                o.style.transition = "";
              })),
            (At = t.placement),
            (jt = zt.state.isVisible);
          var e = B(qt),
            n = o.style;
          (n.top = n.bottom = n.left = n.right = ""),
            (n[e] = K(zt.props.distance));
          var r = s && void 0 !== s.padding ? s.padding : ht,
            a = "number" == typeof r,
            l = i(
              {
                top: a ? r : r.top,
                bottom: a ? r : r.bottom,
                left: a ? r : r.left,
                right: a ? r : r.right,
              },
              !a && r
            );
          (l[e] = a ? r + zt.props.distance : (r[e] || 0) + zt.props.distance),
            (zt.popperInstance.modifiers.filter(function (t) {
              return "preventOverflow" === t.name;
            })[0].padding = l),
            (kt = l);
        }
        var n = zt.props.popperOptions,
          r = zt.popperChildren,
          o = r.tooltip,
          a = r.arrow,
          s = b(n, "preventOverflow"),
          l = i({ eventsEnabled: !1, placement: zt.props.placement }, n, {
            modifiers: i({}, n ? n.modifiers : {}, {
              preventOverflow: i(
                { boundariesElement: zt.props.boundary, padding: ht },
                s
              ),
              arrow: i({ element: a, enabled: !!a }, b(n, "arrow")),
              flip: i(
                {
                  enabled: zt.props.flip,
                  padding: zt.props.distance + ht,
                  behavior: zt.props.flipBehavior,
                },
                b(n, "flip")
              ),
              offset: i({ offset: zt.props.offset }, b(n, "offset")),
            }),
            onCreate: function (t) {
              e(t), Q(), n && n.onCreate && n.onCreate(t);
            },
            onUpdate: function (t) {
              e(t), Q(), n && n.onUpdate && n.onUpdate(t);
            },
          });
        zt.popperInstance = new et["default"](t, qt, l);
      }
      function Z() {
        Mt = !1;
        var e = p();
        zt.popperInstance
          ? (C(zt.popperInstance.modifiers, zt.props.flip),
            e ||
              ((zt.popperInstance.reference = t),
              zt.popperInstance.enableEventListeners()),
            zt.popperInstance.scheduleUpdate())
          : (J(), e || zt.popperInstance.enableEventListeners());
        var n = zt.props.appendTo,
          i = "parent" === n ? t.parentNode : x(n, [t]);
        i.contains(qt) ||
          (i.appendChild(qt), zt.props.onMount(zt), (zt.state.isMounted = !0));
      }
      function tt(t, e) {
        if ((st(), !zt.state.isVisible)) {
          if (zt.props.target) return P(t);
          if (((Nt = !0), t && !e && zt.props.onTrigger(zt, t), zt.props.wait))
            return zt.props.wait(zt, t);
          p() &&
            !zt.state.isMounted &&
            (zt.popperInstance || J(),
            document.addEventListener("mousemove", L)),
            c();
          var n = v(zt.props.delay, 0, ct.delay);
          n
            ? (Tt = setTimeout(function () {
                pt();
              }, n))
            : pt();
        }
      }
      function nt() {
        if ((st(), !zt.state.isVisible)) return n();
        Nt = !1;
        var t = v(zt.props.delay, 1, ct.delay);
        t
          ? (xt = setTimeout(function () {
              zt.state.isVisible && vt();
            }, t))
          : (St = requestAnimationFrame(function () {
              vt();
            }));
      }
      function it(t) {
        if (!zt.props.interactive || !qt.contains(t.target)) {
          if (l().contains(t.target)) {
            if (It) return;
            if (zt.state.isVisible && w(zt.props.trigger, "click")) return;
          }
          zt.props.hideOnClick === !0 && (st(), vt());
        }
      }
      function rt() {
        zt.state.isEnabled = !0;
      }
      function ot() {
        zt.state.isEnabled = !1;
      }
      function st() {
        clearTimeout(Tt), clearTimeout(xt), cancelAnimationFrame(St);
      }
      function lt(e) {
        (e = e || {}), I(e, ct), N();
        var n = zt.props,
          r = k(t, i({}, zt.props, e, { ignoreAttributes: !0 }));
        (r.ignoreAttributes = m(e, "ignoreAttributes")
          ? e.ignoreAttributes || !1
          : n.ignoreAttributes),
          (zt.props = r),
          A(),
          s(),
          (Wt = y(M, r.interactiveDebounce)),
          Y(qt, n, r),
          (zt.popperChildren = H(qt)),
          zt.popperInstance &&
            (ut.some(function (t) {
              return m(e, t) && e[t] !== n[t];
            })
              ? (zt.popperInstance.destroy(),
                J(),
                zt.state.isVisible && zt.popperInstance.enableEventListeners(),
                zt.props.followCursor && Et && L(Et))
              : zt.popperInstance.update());
      }
      function ft(t) {
        lt({ content: t });
      }
      function pt() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : v(zt.props.duration, 0, ct.duration[1]);
        if (
          !zt.state.isDestroyed &&
          zt.state.isEnabled &&
          (!It || zt.props.touch) &&
          !l().hasAttribute("disabled") &&
          zt.props.onShow(zt) !== !1
        ) {
          c(),
            (qt.style.visibility = "visible"),
            (zt.state.isVisible = !0),
            zt.props.interactive && l().classList.add(yt);
          var e = f();
          O(e.concat(qt), 0),
            (Ot = function () {
              if (zt.state.isVisible) {
                var n = p();
                n && Et ? L(Et) : n || zt.popperInstance.update(),
                  zt.popperChildren.backdrop &&
                    (zt.popperChildren.content.style.transitionDelay =
                      Math.round(t / 12) + "ms"),
                  zt.props.sticky && d(),
                  O([qt], zt.props.updateDuration),
                  O(e, t),
                  D(e, "visible"),
                  g(t, function () {
                    zt.props.aria &&
                      l().setAttribute("aria-".concat(zt.props.aria), qt.id),
                      zt.props.onShown(zt),
                      (zt.state.isShown = !0);
                  });
              }
            }),
            Z();
        }
      }
      function vt() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : v(zt.props.duration, 1, ct.duration[1]);
        if (
          !zt.state.isDestroyed &&
          (zt.state.isEnabled || Lt) &&
          (zt.props.onHide(zt) !== !1 || Lt)
        ) {
          u(),
            (qt.style.visibility = "hidden"),
            (zt.state.isVisible = !1),
            (zt.state.isShown = !1),
            (jt = !1),
            zt.props.interactive && l().classList.remove(yt);
          var e = f();
          O(e, t),
            D(e, "hidden"),
            h(t, function () {
              Nt || n(),
                zt.props.aria &&
                  l().removeAttribute("aria-".concat(zt.props.aria)),
                zt.popperInstance.disableEventListeners(),
                (zt.popperInstance.options.placement = zt.props.placement),
                qt.parentNode.removeChild(qt),
                zt.props.onHidden(zt),
                (zt.state.isMounted = !1);
            });
        }
      }
      function bt(e) {
        if (!zt.state.isDestroyed) {
          (Lt = !0), zt.state.isMounted && vt(0), N(), delete t._tippy;
          var n = zt.props.target;
          n &&
            e &&
            _(t) &&
            r(t.querySelectorAll(n)).forEach(function (t) {
              t._tippy && t._tippy.destroy();
            }),
            zt.popperInstance && zt.popperInstance.destroy(),
            (Lt = !1),
            (zt.state.isDestroyed = !0);
        }
      }
      var wt = k(t, e);
      if (!wt.multiple && t._tippy) return null;
      var _t,
        Et,
        Tt,
        xt,
        St,
        At,
        Ot,
        Dt,
        kt,
        Nt = !1,
        Lt = !1,
        jt = !1,
        Mt = !1,
        Rt = [],
        Wt = y(M, wt.interactiveDebounce),
        Ft = Ht++,
        qt = z(Ft, wt),
        Bt = H(qt),
        Vt = null,
        Ut = {
          isEnabled: !0,
          isVisible: !1,
          isDestroyed: !1,
          isMounted: !1,
          isShown: !1,
        },
        zt = {
          id: Ft,
          reference: t,
          popper: qt,
          popperChildren: Bt,
          popperInstance: Vt,
          props: wt,
          state: Ut,
          clearDelayTimeouts: st,
          set: lt,
          setContent: ft,
          show: pt,
          hide: vt,
          enable: rt,
          disable: ot,
          destroy: bt,
        };
      return (
        (t._tippy = zt),
        (qt._tippy = zt),
        A(),
        wt.lazy || J(),
        wt.showOnInit && tt(),
        !wt.a11y || wt.target || S(l()) || l().setAttribute("tabindex", "0"),
        qt.addEventListener("mouseenter", function (t) {
          zt.props.interactive &&
            zt.state.isVisible &&
            "mouseenter" === _t &&
            tt(t, !0);
        }),
        qt.addEventListener("mouseleave", function () {
          zt.props.interactive &&
            "mouseenter" === _t &&
            document.addEventListener("mousemove", Wt);
        }),
        zt
      );
    }
    function Q(t) {
      function e(t) {
        (p = t), a();
      }
      function n(n) {
        n._originalProps.onShow(n),
          t.forEach(function (t) {
            t.set({ duration: f }), t.state.isVisible && t.hide();
          }),
          e(!0);
      }
      function r(t) {
        t._originalProps.onHide(t), e(!1);
      }
      function o(t) {
        t._originalProps.onShown(t),
          t.set({ duration: t._originalProps.duration });
      }
      function a() {
        t.forEach(function (t) {
          t.set({
            onShow: n,
            onShown: o,
            onHide: r,
            delay: p ? [0, Array.isArray(c) ? c[1] : c] : c,
            duration: p ? f : t._originalProps.duration,
          });
        });
      }
      var s =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = s.delay,
        c = void 0 === l ? t[0].props.delay : l,
        u = s.duration,
        f = void 0 === u ? 0 : u,
        p = !1;
      t.forEach(function (t) {
        t._originalProps
          ? t.set(t._originalProps)
          : (t._originalProps = i({}, t.props));
      }),
        a();
    }
    function J(t, e) {
      I(e || {}, ct), jt || (u(), (jt = !0));
      var n = i({}, ct, e);
      d(t) && p(t);
      var r = g(t).reduce(function (t, e) {
        var i = e && $(e, n);
        return i && t.push(i), t;
      }, []);
      return E(t) ? r[0] : r;
    }
    function Z() {
      r(document.querySelectorAll("[data-tippy]")).forEach(function (t) {
        var e = t.getAttribute("data-tippy");
        e && J(t, { content: e });
      });
    }
    function tt(t) {
      if (rt) {
        var e = document.createElement("style");
        (e.type = "text/css"),
          (e.textContent = t),
          e.setAttribute("data-tippy-stylesheet", "");
        var n = document.head,
          i = n.firstChild;
        i ? n.insertBefore(e, i) : n.appendChild(e);
      }
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var et = n(1),
      nt =
        '.tippy-iOS{cursor:pointer!important;-webkit-tap-highlight-color:transparent}.tippy-popper{transition-timing-function:cubic-bezier(.165,.84,.44,1);max-width:calc(100% - 8px);pointer-events:none;outline:0}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-7px;bottom:-6.5px;-webkit-transform-origin:50% 0;transform-origin:50% 0;margin:0 3px}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;bottom:-7px;margin:0 3px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 25%;transform-origin:0 25%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-55%);transform:scale(1) translate(-50%,-55%)}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%,-45%);transform:scale(.2) translate(-50%,-45%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(-10px) rotateX(0);transform:perspective(700px) translateY(-10px) rotateX(0)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) translateY(0) rotateX(60deg);transform:perspective(700px) translateY(0) rotateX(60deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=top] [data-animation=scale]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(-10px) scale(1);transform:translateY(-10px) scale(1)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px) scale(.5);transform:translateY(-10px) scale(.5)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-7px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;margin:0 3px}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(0);transform:rotate(0)}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:8px solid #333;border-right:8px solid transparent;border-left:8px solid transparent;top:-7px;margin:0 3px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -50%;transform-origin:0 -50%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-45%);transform:scale(1) translate(-50%,-45%)}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-50%);transform:scale(.2) translate(-50%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateY(10px) rotateX(0);transform:perspective(700px) translateY(10px) rotateX(0)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) translateY(0) rotateX(-60deg);transform:perspective(700px) translateY(0) rotateX(-60deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=bottom] [data-animation=scale]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{-webkit-transform:translateY(10px) scale(1);transform:translateY(10px) scale(1)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px) scale(.5);transform:translateY(10px) scale(.5)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-12px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%;margin:3px 0}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-75%,-50%);transform:scale(.2) translate(-75%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(-10px) rotateY(0);transform:perspective(700px) translateX(-10px) rotateY(0)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) translateX(0) rotateY(-60deg);transform:perspective(700px) translateX(0) rotateY(-60deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=left] [data-animation=scale]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(-10px) scale(1);transform:translateX(-10px) scale(1)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px) scale(.5);transform:translateX(-10px) scale(.5)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-12px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%;margin:3px 0}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:8px solid #333;border-top:8px solid transparent;border-bottom:8px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-50% 0;transform-origin:-50% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(1) translate(-50%,-50%);transform:scale(1) translate(-50%,-50%)}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(.2) translate(-25%,-50%);transform:scale(.2) translate(-25%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{-webkit-transform:perspective(700px) translateX(10px) rotateY(0);transform:perspective(700px) translateX(10px) rotateY(0)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:perspective(700px) translateX(0) rotateY(60deg);transform:perspective(700px) translateX(0) rotateY(60deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=right] [data-animation=scale]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{-webkit-transform:translateX(10px) scale(1);transform:translateX(10px) scale(1)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px) scale(.5);transform:translateX(10px) scale(.5)}.tippy-tooltip{position:relative;color:#fff;border-radius:.25rem;font-size:.875rem;padding:.3125rem .5625rem;line-height:1.4;text-align:center;background-color:#333}.tippy-tooltip[data-size=small]{padding:.1875rem .375rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.375rem .75rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:transparent}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] .tippy-roundarrow path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:18px;height:7px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;background-color:#333;border-radius:50%;width:calc(110% + 2rem);left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:"";float:left;padding-top:100%}.tippy-backdrop+.tippy-content{transition-property:opacity;will-change:opacity}.tippy-backdrop+.tippy-content[data-state=visible]{opacity:1}.tippy-backdrop+.tippy-content[data-state=hidden]{opacity:0}',
      it = "4.3.4",
      rt = "undefined" != typeof window && "undefined" != typeof document,
      ot = rt ? navigator.userAgent : "",
      at = /MSIE |Trident\//.test(ot),
      st = /UCBrowser\//.test(ot),
      lt =
        rt && /iPhone|iPad|iPod/.test(navigator.platform) && !window.MSStream,
      ct = {
        a11y: !0,
        allowHTML: !0,
        animateFill: !0,
        animation: "shift-away",
        appendTo: function () {
          return document.body;
        },
        aria: "describedby",
        arrow: !1,
        arrowType: "sharp",
        boundary: "scrollParent",
        content: "",
        delay: 0,
        distance: 10,
        duration: [325, 275],
        flip: !0,
        flipBehavior: "flip",
        flipOnUpdate: !1,
        followCursor: !1,
        hideOnClick: !0,
        ignoreAttributes: !1,
        inertia: !1,
        interactive: !1,
        interactiveBorder: 2,
        interactiveDebounce: 0,
        lazy: !0,
        maxWidth: 350,
        multiple: !1,
        offset: 0,
        onHidden: function () {},
        onHide: function () {},
        onMount: function () {},
        onShow: function () {},
        onShown: function () {},
        onTrigger: function () {},
        placement: "top",
        popperOptions: {},
        role: "tooltip",
        showOnInit: !1,
        size: "regular",
        sticky: !1,
        target: "",
        theme: "dark",
        touch: !0,
        touchHold: !1,
        trigger: "mouseenter focus",
        triggerTarget: null,
        updateDuration: 0,
        wait: null,
        zIndex: 9999,
      },
      ut = [
        "arrow",
        "arrowType",
        "boundary",
        "distance",
        "flip",
        "flipBehavior",
        "flipOnUpdate",
        "offset",
        "placement",
        "popperOptions",
      ],
      ft = rt ? Element.prototype : {},
      pt =
        ft.matches ||
        ft.matchesSelector ||
        ft.webkitMatchesSelector ||
        ft.mozMatchesSelector ||
        ft.msMatchesSelector,
      dt = { passive: !0 },
      ht = 4,
      mt = "x-placement",
      gt = "x-out-of-boundaries",
      vt = "tippy-iOS",
      yt = "tippy-active",
      bt = "tippy-popper",
      wt = "tippy-tooltip",
      _t = "tippy-content",
      Et = "tippy-backdrop",
      Tt = "tippy-arrow",
      xt = "tippy-roundarrow",
      Ct = ".".concat(bt),
      St = ".".concat(wt),
      At = ".".concat(_t),
      Ot = ".".concat(Et),
      Dt = ".".concat(Tt),
      kt = ".".concat(xt),
      It = !1,
      Nt = 0,
      Lt = Object.keys(ct),
      Ht = 1,
      Pt = [],
      jt = !1;
    (J.version = it),
      (J.defaults = ct),
      (J.setDefaults = function (t) {
        Object.keys(t).forEach(function (e) {
          ct[e] = t[e];
        });
      }),
      (J.hideAll = X),
      (J.group = Q),
      rt && setTimeout(Z),
      tt(nt),
      (e["default"] = J);
  },
  function (t, e, n) {
    function i() {
      return (i =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }).apply(this, arguments);
    }
    function r(t) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            })(t);
    }
    var o, a;
    !(function (i, s) {
      "object" === r(e) && "undefined" != typeof t
        ? (t.exports = s())
        : ((o = s),
          (a = "function" == typeof o ? o.call(e, n, e, t) : o),
          !(void 0 !== a && (t.exports = a)));
    })(this, function () {
      "use strict";
      var t = "undefined" != typeof window,
        e =
          (t && !("onscroll" in window)) ||
          ("undefined" != typeof navigator &&
            /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
        n = t && "IntersectionObserver" in window,
        r = t && "classList" in document.createElement("p"),
        o = {
          elements_selector: "img",
          container: e || t ? document : null,
          threshold: 300,
          thresholds: null,
          data_src: "src",
          data_srcset: "srcset",
          data_sizes: "sizes",
          data_bg: "bg",
          class_loading: "loading",
          class_loaded: "loaded",
          class_error: "error",
          load_delay: 0,
          auto_unobserve: !0,
          callback_enter: null,
          callback_exit: null,
          callback_reveal: null,
          callback_loaded: null,
          callback_error: null,
          callback_finish: null,
          use_native: !1,
        },
        a = function (t, e) {
          var n,
            i = new t(e);
          try {
            n = new CustomEvent("LazyLoad::Initialized", {
              detail: { instance: i },
            });
          } catch (t) {
            (n = document.createEvent("CustomEvent")).initCustomEvent(
              "LazyLoad::Initialized",
              !1,
              !1,
              {
                instance: i,
              }
            );
          }
          window.dispatchEvent(n);
        },
        s = function (t, e) {
          return t.getAttribute("data-" + e);
        },
        l = function (t, e, n) {
          var i = "data-" + e;
          null !== n ? t.setAttribute(i, n) : t.removeAttribute(i);
        },
        c = function (t) {
          return "true" === s(t, "was-processed");
        },
        u = function (t, e) {
          return l(t, "ll-timeout", e);
        },
        f = function (t) {
          return s(t, "ll-timeout");
        },
        p = function (t, e) {
          t && t(e);
        },
        d = function (t, e) {
          (t._loadingCount += e),
            0 === t._elements.length &&
              0 === t._loadingCount &&
              p(t._settings.callback_finish);
        },
        h = function (t) {
          for (var e, n = [], i = 0; (e = t.children[i]); i += 1)
            "SOURCE" === e.tagName && n.push(e);
          return n;
        },
        m = function (t, e, n) {
          n && t.setAttribute(e, n);
        },
        g = function (t, e) {
          m(t, "sizes", s(t, e.data_sizes)),
            m(t, "srcset", s(t, e.data_srcset)),
            m(t, "src", s(t, e.data_src));
        },
        v = {
          IMG: function (t, e) {
            var n = t.parentNode;
            n &&
              "PICTURE" === n.tagName &&
              h(n).forEach(function (t) {
                g(t, e);
              }),
              g(t, e);
          },
          IFRAME: function (t, e) {
            m(t, "src", s(t, e.data_src));
          },
          VIDEO: function (t, e) {
            h(t).forEach(function (t) {
              m(t, "src", s(t, e.data_src));
            }),
              m(t, "src", s(t, e.data_src)),
              t.load();
          },
        },
        y = function (t, e) {
          var n,
            i,
            r = e._settings,
            o = t.tagName,
            a = v[o];
          return a
            ? (a(t, r),
              d(e, 1),
              void (e._elements =
                ((n = e._elements),
                (i = t),
                n.filter(function (t) {
                  return t !== i;
                }))))
            : void !(function (t, e) {
                var n = s(t, e.data_src),
                  i = s(t, e.data_bg);
                n && (t.style.backgroundImage = 'url("'.concat(n, '")')),
                  i && (t.style.backgroundImage = i);
              })(t, r);
        },
        b = function (t, e) {
          r
            ? t.classList.add(e)
            : (t.className += (t.className ? " " : "") + e);
        },
        w = function (t, e, n) {
          t.addEventListener(e, n);
        },
        _ = function (t, e, n) {
          t.removeEventListener(e, n);
        },
        E = function (t, e, n) {
          _(t, "load", e), _(t, "loadeddata", e), _(t, "error", n);
        },
        T = function (t, e, n) {
          var i = n._settings,
            o = e ? i.class_loaded : i.class_error,
            a = e ? i.callback_loaded : i.callback_error,
            s = t.target;
          !(function (t, e) {
            r
              ? t.classList.remove(e)
              : (t.className = t.className
                  .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
                  .replace(/^\s+/, "")
                  .replace(/\s+$/, ""));
          })(s, i.class_loading),
            b(s, o),
            p(a, s),
            d(n, -1);
        },
        x = function (t, e) {
          var n = function r(n) {
              T(n, !0, e), E(t, r, i);
            },
            i = function o(i) {
              T(i, !1, e), E(t, n, o);
            };
          !(function (t, e, n) {
            w(t, "load", e), w(t, "loadeddata", e), w(t, "error", n);
          })(t, n, i);
        },
        C = ["IMG", "IFRAME", "VIDEO"],
        S = function (t, e) {
          var n = e._observer;
          D(t, e), n && e._settings.auto_unobserve && n.unobserve(t);
        },
        A = function (t) {
          var e = f(t);
          e && (clearTimeout(e), u(t, null));
        },
        O = function (t, e) {
          var n = e._settings.load_delay,
            i = f(t);
          i ||
            ((i = setTimeout(function () {
              S(t, e), A(t);
            }, n)),
            u(t, i));
        },
        D = function (t, e, n) {
          var i = e._settings;
          (!n && c(t)) ||
            (C.indexOf(t.tagName) > -1 && (x(t, e), b(t, i.class_loading)),
            y(t, e),
            (function (t) {
              l(t, "was-processed", "true");
            })(t),
            p(i.callback_reveal, t),
            p(i.callback_set, t));
        },
        k = function (t) {
          return (
            !!n &&
            ((t._observer = new IntersectionObserver(
              function (e) {
                e.forEach(function (e) {
                  return (function (t) {
                    return t.isIntersecting || t.intersectionRatio > 0;
                  })(e)
                    ? (function (t, e) {
                        var n = e._settings;
                        p(n.callback_enter, t),
                          n.load_delay ? O(t, e) : S(t, e);
                      })(e.target, t)
                    : (function (t, e) {
                        var n = e._settings;
                        p(n.callback_exit, t), n.load_delay && A(t);
                      })(e.target, t);
                });
              },
              {
                root:
                  (e = t._settings).container === document ? null : e.container,
                rootMargin: e.thresholds || e.threshold + "px",
              }
            )),
            !0)
          );
          var e;
        },
        I = ["IMG", "IFRAME"],
        N = function (t, e) {
          return (function (t) {
            return t.filter(function (t) {
              return !c(t);
            });
          })(
            ((n =
              t ||
              (function (t) {
                return t.container.querySelectorAll(t.elements_selector);
              })(e)),
            Array.prototype.slice.call(n))
          );
          var n;
        },
        L = function (t, e) {
          (this._settings = (function (t) {
            return i({}, o, t);
          })(t)),
            (this._loadingCount = 0),
            k(this),
            this.update(e);
        };
      return (
        (L.prototype = {
          update: function (t) {
            var n,
              i = this,
              r = this._settings;
            (this._elements = N(t, r)),
              !e && this._observer
                ? ((function (t) {
                    return (
                      t.use_native && "loading" in HTMLImageElement.prototype
                    );
                  })(r) &&
                    ((n = this)._elements.forEach(function (t) {
                      -1 !== I.indexOf(t.tagName) &&
                        (t.setAttribute("loading", "lazy"), D(t, n));
                    }),
                    (this._elements = N(t, r))),
                  this._elements.forEach(function (t) {
                    i._observer.observe(t);
                  }))
                : this.loadAll();
          },
          destroy: function () {
            var t = this;
            this._observer &&
              (this._elements.forEach(function (e) {
                t._observer.unobserve(e);
              }),
              (this._observer = null)),
              (this._elements = null),
              (this._settings = null);
          },
          load: function (t, e) {
            D(t, this, e);
          },
          loadAll: function () {
            var t = this;
            this._elements.forEach(function (e) {
              S(e, t);
            });
          },
        }),
        t &&
          (function (t, e) {
            if (e)
              if (e.length) for (var n, i = 0; (n = e[i]); i += 1) a(t, n);
              else a(t, e);
          })(L, window.lazyLoadOptions),
        L
      );
    });
  },
]);

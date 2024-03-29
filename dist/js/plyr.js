"object" == typeof navigator &&
  (function () {
    "use strict";
    const e = document.getElementById("container"),
      t = "tab-focus";
    document.addEventListener("focusout", (n) => {
      n.target.classList &&
        !e.contains(n.target) &&
        n.target.classList.remove(t);
    }),
      document.addEventListener("keydown", (n) => {
        9 === n.keyCode &&
          setTimeout(() => {
            const n = document.activeElement;
            n && n.classList && !e.contains(n) && n.classList.add(t);
          }, 10);
      }),
      (function () {
        if ("undefined" != typeof window)
          try {
            var e = new window.CustomEvent("test", { cancelable: !0 });
            if ((e.preventDefault(), !0 !== e.defaultPrevented))
              throw new Error("Could not prevent default");
          } catch (e) {
            var t = function (e, t) {
              var n, r;
              return (
                ((t = t || {}).bubbles = !!t.bubbles),
                (t.cancelable = !!t.cancelable),
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  e,
                  t.bubbles,
                  t.cancelable,
                  t.detail
                ),
                (r = n.preventDefault),
                (n.preventDefault = function () {
                  r.call(this);
                  try {
                    Object.defineProperty(this, "defaultPrevented", {
                      get: function () {
                        return !0;
                      },
                    });
                  } catch (e) {
                    this.defaultPrevented = !0;
                  }
                }),
                n
              );
            };
            (t.prototype = window.Event.prototype), (window.CustomEvent = t);
          }
      })();
    var n =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
    function r(e, t) {
      return e((t = { exports: {} }), t.exports), t.exports;
    }
    var i = function (e) {
        return e && e.Math == Math && e;
      },
      o =
        i("object" == typeof globalThis && globalThis) ||
        i("object" == typeof window && window) ||
        i("object" == typeof self && self) ||
        i("object" == typeof n && n) ||
        Function("return this")(),
      s = function (e) {
        try {
          return !!e();
        } catch (e) {
          return !0;
        }
      },
      a = !s(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      }),
      l = {}.propertyIsEnumerable,
      c = Object.getOwnPropertyDescriptor,
      u = {
        f:
          c && !l.call({ 1: 2 }, 1)
            ? function (e) {
                var t = c(this, e);
                return !!t && t.enumerable;
              }
            : l,
      },
      h = function (e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t,
        };
      },
      p = {}.toString,
      d = function (e) {
        return p.call(e).slice(8, -1);
      },
      f = "".split,
      g = s(function () {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function (e) {
            return "String" == d(e) ? f.call(e, "") : Object(e);
          }
        : Object,
      m = function (e) {
        if (null == e) throw TypeError("Can't call method on " + e);
        return e;
      },
      y = function (e) {
        return g(m(e));
      },
      v = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e;
      },
      b = function (e, t) {
        if (!v(e)) return e;
        var n, r;
        if (t && "function" == typeof (n = e.toString) && !v((r = n.call(e))))
          return r;
        if ("function" == typeof (n = e.valueOf) && !v((r = n.call(e))))
          return r;
        if (!t && "function" == typeof (n = e.toString) && !v((r = n.call(e))))
          return r;
        throw TypeError("Can't convert object to primitive value");
      },
      w = {}.hasOwnProperty,
      _ = function (e, t) {
        return w.call(e, t);
      },
      E = o.document,
      k = v(E) && v(E.createElement),
      S = function (e) {
        return k ? E.createElement(e) : {};
      },
      T =
        !a &&
        !s(function () {
          return (
            7 !=
            Object.defineProperty(S("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        }),
      x = Object.getOwnPropertyDescriptor,
      A = {
        f: a
          ? x
          : function (e, t) {
              if (((e = y(e)), (t = b(t, !0)), T))
                try {
                  return x(e, t);
                } catch (e) {}
              if (_(e, t)) return h(!u.f.call(e, t), e[t]);
            },
      },
      C = function (e) {
        if (!v(e)) throw TypeError(String(e) + " is not an object");
        return e;
      },
      P = Object.defineProperty,
      O = {
        f: a
          ? P
          : function (e, t, n) {
              if ((C(e), (t = b(t, !0)), C(n), T))
                try {
                  return P(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n)
                throw TypeError("Accessors not supported");
              return "value" in n && (e[t] = n.value), e;
            },
      },
      I = a
        ? function (e, t, n) {
            return O.f(e, t, h(1, n));
          }
        : function (e, t, n) {
            return (e[t] = n), e;
          },
      R = function (e, t) {
        try {
          I(o, e, t);
        } catch (n) {
          o[e] = t;
        }
        return t;
      },
      j = "__core-js_shared__",
      L = o[j] || R(j, {}),
      N = Function.toString;
    "function" != typeof L.inspectSource &&
      (L.inspectSource = function (e) {
        return N.call(e);
      });
    var U,
      M,
      D,
      F = L.inspectSource,
      q = o.WeakMap,
      B = "function" == typeof q && /native code/.test(F(q)),
      $ = r(function (e) {
        (e.exports = function (e, t) {
          return L[e] || (L[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.6.5",
          mode: "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
        });
      }),
      H = 0,
      V = Math.random(),
      W = function (e) {
        return (
          "Symbol(" +
          String(void 0 === e ? "" : e) +
          ")_" +
          (++H + V).toString(36)
        );
      },
      z = $("keys"),
      Y = function (e) {
        return z[e] || (z[e] = W(e));
      },
      K = {},
      G = o.WeakMap;
    if (B) {
      var X = new G(),
        J = X.get,
        Q = X.has,
        Z = X.set;
      (U = function (e, t) {
        return Z.call(X, e, t), t;
      }),
        (M = function (e) {
          return J.call(X, e) || {};
        }),
        (D = function (e) {
          return Q.call(X, e);
        });
    } else {
      var ee = Y("state");
      (K[ee] = !0),
        (U = function (e, t) {
          return I(e, ee, t), t;
        }),
        (M = function (e) {
          return _(e, ee) ? e[ee] : {};
        }),
        (D = function (e) {
          return _(e, ee);
        });
    }
    var te = {
        set: U,
        get: M,
        has: D,
        enforce: function (e) {
          return D(e) ? M(e) : U(e, {});
        },
        getterFor: function (e) {
          return function (t) {
            var n;
            if (!v(t) || (n = M(t)).type !== e)
              throw TypeError("Incompatible receiver, " + e + " required");
            return n;
          };
        },
      },
      ne = r(function (e) {
        var t = te.get,
          n = te.enforce,
          r = String(String).split("String");
        (e.exports = function (e, t, i, s) {
          var a = !!s && !!s.unsafe,
            l = !!s && !!s.enumerable,
            c = !!s && !!s.noTargetGet;
          "function" == typeof i &&
            ("string" != typeof t || _(i, "name") || I(i, "name", t),
            (n(i).source = r.join("string" == typeof t ? t : ""))),
            e !== o
              ? (a ? !c && e[t] && (l = !0) : delete e[t],
                l ? (e[t] = i) : I(e, t, i))
              : l
              ? (e[t] = i)
              : R(t, i);
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && t(this).source) || F(this);
        });
      }),
      re = o,
      ie = function (e) {
        return "function" == typeof e ? e : void 0;
      },
      oe = function (e, t) {
        return arguments.length < 2
          ? ie(re[e]) || ie(o[e])
          : (re[e] && re[e][t]) || (o[e] && o[e][t]);
      },
      se = Math.ceil,
      ae = Math.floor,
      le = function (e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? ae : se)(e);
      },
      ce = Math.min,
      ue = function (e) {
        return e > 0 ? ce(le(e), 9007199254740991) : 0;
      },
      he = Math.max,
      pe = Math.min,
      de = function (e, t) {
        var n = le(e);
        return n < 0 ? he(n + t, 0) : pe(n, t);
      },
      fe = function (e) {
        return function (t, n, r) {
          var i,
            o = y(t),
            s = ue(o.length),
            a = de(r, s);
          if (e && n != n) {
            for (; s > a; ) if ((i = o[a++]) != i) return !0;
          } else
            for (; s > a; a++)
              if ((e || a in o) && o[a] === n) return e || a || 0;
          return !e && -1;
        };
      },
      ge = { includes: fe(!0), indexOf: fe(!1) }.indexOf,
      me = function (e, t) {
        var n,
          r = y(e),
          i = 0,
          o = [];
        for (n in r) !_(K, n) && _(r, n) && o.push(n);
        for (; t.length > i; ) _(r, (n = t[i++])) && (~ge(o, n) || o.push(n));
        return o;
      },
      ye = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ],
      ve = ye.concat("length", "prototype"),
      be = {
        f:
          Object.getOwnPropertyNames ||
          function (e) {
            return me(e, ve);
          },
      },
      we = { f: Object.getOwnPropertySymbols },
      _e =
        oe("Reflect", "ownKeys") ||
        function (e) {
          var t = be.f(C(e)),
            n = we.f;
          return n ? t.concat(n(e)) : t;
        },
      Ee = function (e, t) {
        for (var n = _e(t), r = O.f, i = A.f, o = 0; o < n.length; o++) {
          var s = n[o];
          _(e, s) || r(e, s, i(t, s));
        }
      },
      ke = /#|\.prototype\./,
      Se = function (e, t) {
        var n = xe[Te(e)];
        return n == Ce || (n != Ae && ("function" == typeof t ? s(t) : !!t));
      },
      Te = (Se.normalize = function (e) {
        return String(e).replace(ke, ".").toLowerCase();
      }),
      xe = (Se.data = {}),
      Ae = (Se.NATIVE = "N"),
      Ce = (Se.POLYFILL = "P"),
      Pe = Se,
      Oe = A.f,
      Ie = function (e, t) {
        var n,
          r,
          i,
          s,
          a,
          l = e.target,
          c = e.global,
          u = e.stat;
        if ((n = c ? o : u ? o[l] || R(l, {}) : (o[l] || {}).prototype))
          for (r in t) {
            if (
              ((s = t[r]),
              (i = e.noTargetGet ? (a = Oe(n, r)) && a.value : n[r]),
              !Pe(c ? r : l + (u ? "." : "#") + r, e.forced) && void 0 !== i)
            ) {
              if (typeof s == typeof i) continue;
              Ee(s, i);
            }
            (e.sham || (i && i.sham)) && I(s, "sham", !0), ne(n, r, s, e);
          }
      },
      Re = function () {
        var e = C(this),
          t = "";
        return (
          e.global && (t += "g"),
          e.ignoreCase && (t += "i"),
          e.multiline && (t += "m"),
          e.dotAll && (t += "s"),
          e.unicode && (t += "u"),
          e.sticky && (t += "y"),
          t
        );
      };
    function je(e, t) {
      return RegExp(e, t);
    }
    var Le,
      Ne,
      Ue = {
        UNSUPPORTED_Y: s(function () {
          var e = je("a", "y");
          return (e.lastIndex = 2), null != e.exec("abcd");
        }),
        BROKEN_CARET: s(function () {
          var e = je("^r", "gy");
          return (e.lastIndex = 2), null != e.exec("str");
        }),
      },
      Me = RegExp.prototype.exec,
      De = String.prototype.replace,
      Fe = Me,
      qe =
        ((Le = /a/),
        (Ne = /b*/g),
        Me.call(Le, "a"),
        Me.call(Ne, "a"),
        0 !== Le.lastIndex || 0 !== Ne.lastIndex),
      Be = Ue.UNSUPPORTED_Y || Ue.BROKEN_CARET,
      $e = void 0 !== /()??/.exec("")[1];
    (qe || $e || Be) &&
      (Fe = function (e) {
        var t,
          n,
          r,
          i,
          o = this,
          s = Be && o.sticky,
          a = Re.call(o),
          l = o.source,
          c = 0,
          u = e;
        return (
          s &&
            (-1 === (a = a.replace("y", "")).indexOf("g") && (a += "g"),
            (u = String(e).slice(o.lastIndex)),
            o.lastIndex > 0 &&
              (!o.multiline || (o.multiline && "\n" !== e[o.lastIndex - 1])) &&
              ((l = "(?: " + l + ")"), (u = " " + u), c++),
            (n = new RegExp("^(?:" + l + ")", a))),
          $e && (n = new RegExp("^" + l + "$(?!\\s)", a)),
          qe && (t = o.lastIndex),
          (r = Me.call(s ? n : o, u)),
          s
            ? r
              ? ((r.input = r.input.slice(c)),
                (r[0] = r[0].slice(c)),
                (r.index = o.lastIndex),
                (o.lastIndex += r[0].length))
              : (o.lastIndex = 0)
            : qe && r && (o.lastIndex = o.global ? r.index + r[0].length : t),
          $e &&
            r &&
            r.length > 1 &&
            De.call(r[0], n, function () {
              for (i = 1; i < arguments.length - 2; i++)
                void 0 === arguments[i] && (r[i] = void 0);
            }),
          r
        );
      });
    var He = Fe;
    Ie({ target: "RegExp", proto: !0, forced: /./.exec !== He }, { exec: He });
    var Ve =
        !!Object.getOwnPropertySymbols &&
        !s(function () {
          return !String(Symbol());
        }),
      We = Ve && !Symbol.sham && "symbol" == typeof Symbol.iterator,
      ze = $("wks"),
      Ye = o.Symbol,
      Ke = We ? Ye : (Ye && Ye.withoutSetter) || W,
      Ge = function (e) {
        return (
          _(ze, e) ||
            (Ve && _(Ye, e) ? (ze[e] = Ye[e]) : (ze[e] = Ke("Symbol." + e))),
          ze[e]
        );
      },
      Xe = Ge("species"),
      Je = !s(function () {
        var e = /./;
        return (
          (e.exec = function () {
            var e = [];
            return (e.groups = { a: "7" }), e;
          }),
          "7" !== "".replace(e, "$<a>")
        );
      }),
      Qe = "$0" === "a".replace(/./, "$0"),
      Ze = Ge("replace"),
      et = !!/./[Ze] && "" === /./[Ze]("a", "$0"),
      tt = !s(function () {
        var e = /(?:)/,
          t = e.exec;
        e.exec = function () {
          return t.apply(this, arguments);
        };
        var n = "ab".split(e);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
      }),
      nt = function (e) {
        return Object(m(e));
      },
      rt = function (e) {
        return function (t, n) {
          var r,
            i,
            o = String(m(t)),
            s = le(n),
            a = o.length;
          return s < 0 || s >= a
            ? e
              ? ""
              : void 0
            : (r = o.charCodeAt(s)) < 55296 ||
              r > 56319 ||
              s + 1 === a ||
              (i = o.charCodeAt(s + 1)) < 56320 ||
              i > 57343
            ? e
              ? o.charAt(s)
              : r
            : e
            ? o.slice(s, s + 2)
            : i - 56320 + ((r - 55296) << 10) + 65536;
        };
      },
      it = { codeAt: rt(!1), charAt: rt(!0) },
      ot = it.charAt,
      st = function (e, t, n) {
        return t + (n ? ot(e, t).length : 1);
      },
      at = function (e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
          var r = n.call(e, t);
          if ("object" != typeof r)
            throw TypeError(
              "RegExp exec method returned something other than an Object or null"
            );
          return r;
        }
        if ("RegExp" !== d(e))
          throw TypeError("RegExp#exec called on incompatible receiver");
        return He.call(e, t);
      },
      lt = Math.max,
      ct = Math.min,
      ut = Math.floor,
      ht = /\$([$&'`]|\d\d?|<[^>]*>)/g,
      pt = /\$([$&'`]|\d\d?)/g;
    !(function (e, t, n, r) {
      var i = Ge(e),
        o = !s(function () {
          var t = {};
          return (
            (t[i] = function () {
              return 7;
            }),
            7 != ""[e](t)
          );
        }),
        a =
          o &&
          !s(function () {
            var t = !1,
              n = /a/;
            return (
              "split" === e &&
                (((n = {}).constructor = {}),
                (n.constructor[Xe] = function () {
                  return n;
                }),
                (n.flags = ""),
                (n[i] = /./[i])),
              (n.exec = function () {
                return (t = !0), null;
              }),
              n[i](""),
              !t
            );
          });
      if (
        !o ||
        !a ||
        ("replace" === e && (!Je || !Qe || et)) ||
        ("split" === e && !tt)
      ) {
        var l = /./[i],
          c = n(
            i,
            ""[e],
            function (e, t, n, r, i) {
              return t.exec === He
                ? o && !i
                  ? { done: !0, value: l.call(t, n, r) }
                  : { done: !0, value: e.call(n, t, r) }
                : { done: !1 };
            },
            {
              REPLACE_KEEPS_$0: Qe,
              REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: et,
            }
          ),
          u = c[0],
          h = c[1];
        ne(String.prototype, e, u),
          ne(
            RegExp.prototype,
            i,
            2 == t
              ? function (e, t) {
                  return h.call(e, this, t);
                }
              : function (e) {
                  return h.call(e, this);
                }
          );
      }
      r && I(RegExp.prototype[i], "sham", !0);
    })("replace", 2, function (e, t, n, r) {
      var i = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
        o = r.REPLACE_KEEPS_$0,
        s = i ? "$" : "$0";
      return [
        function (n, r) {
          var i = m(this),
            o = null == n ? void 0 : n[e];
          return void 0 !== o ? o.call(n, i, r) : t.call(String(i), n, r);
        },
        function (e, r) {
          if ((!i && o) || ("string" == typeof r && -1 === r.indexOf(s))) {
            var l = n(t, e, this, r);
            if (l.done) return l.value;
          }
          var c = C(e),
            u = String(this),
            h = "function" == typeof r;
          h || (r = String(r));
          var p = c.global;
          if (p) {
            var d = c.unicode;
            c.lastIndex = 0;
          }
          for (var f = []; ; ) {
            var g = at(c, u);
            if (null === g) break;
            if ((f.push(g), !p)) break;
            "" === String(g[0]) && (c.lastIndex = st(u, ue(c.lastIndex), d));
          }
          for (var m, y = "", v = 0, b = 0; b < f.length; b++) {
            g = f[b];
            for (
              var w = String(g[0]),
                _ = lt(ct(le(g.index), u.length), 0),
                E = [],
                k = 1;
              k < g.length;
              k++
            )
              E.push(void 0 === (m = g[k]) ? m : String(m));
            var S = g.groups;
            if (h) {
              var T = [w].concat(E, _, u);
              void 0 !== S && T.push(S);
              var x = String(r.apply(void 0, T));
            } else x = a(w, u, _, E, S, r);
            _ >= v && ((y += u.slice(v, _) + x), (v = _ + w.length));
          }
          return y + u.slice(v);
        },
      ];
      function a(e, n, r, i, o, s) {
        var a = r + e.length,
          l = i.length,
          c = pt;
        return (
          void 0 !== o && ((o = nt(o)), (c = ht)),
          t.call(s, c, function (t, s) {
            var c;
            switch (s.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return e;
              case "`":
                return n.slice(0, r);
              case "'":
                return n.slice(a);
              case "<":
                c = o[s.slice(1, -1)];
                break;
              default:
                var u = +s;
                if (0 === u) return t;
                if (u > l) {
                  var h = ut(u / 10);
                  return 0 === h
                    ? t
                    : h <= l
                    ? void 0 === i[h - 1]
                      ? s.charAt(1)
                      : i[h - 1] + s.charAt(1)
                    : t;
                }
                c = i[u - 1];
            }
            return void 0 === c ? "" : c;
          })
        );
      }
    });
    var dt,
      ft,
      gt,
      mt = !s(function () {
        function e() {}
        return (
          (e.prototype.constructor = null),
          Object.getPrototypeOf(new e()) !== e.prototype
        );
      }),
      yt = Y("IE_PROTO"),
      vt = Object.prototype,
      bt = mt
        ? Object.getPrototypeOf
        : function (e) {
            return (
              (e = nt(e)),
              _(e, yt)
                ? e[yt]
                : "function" == typeof e.constructor &&
                  e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? vt
                : null
            );
          },
      wt = Ge("iterator"),
      _t = !1;
    [].keys &&
      ("next" in (gt = [].keys())
        ? (ft = bt(bt(gt))) !== Object.prototype && (dt = ft)
        : (_t = !0)),
      null == dt && (dt = {}),
      _(dt, wt) ||
        I(dt, wt, function () {
          return this;
        });
    var Et,
      kt = { IteratorPrototype: dt, BUGGY_SAFARI_ITERATORS: _t },
      St =
        Object.keys ||
        function (e) {
          return me(e, ye);
        },
      Tt = a
        ? Object.defineProperties
        : function (e, t) {
            C(e);
            for (var n, r = St(t), i = r.length, o = 0; i > o; )
              O.f(e, (n = r[o++]), t[n]);
            return e;
          },
      xt = oe("document", "documentElement"),
      At = Y("IE_PROTO"),
      Ct = function () {},
      Pt = function (e) {
        return "<script>" + e + "</" + "script>";
      },
      Ot = function () {
        try {
          Et = document.domain && new ActiveXObject("htmlfile");
        } catch (e) {}
        var e, t;
        Ot = Et
          ? (function (e) {
              e.write(Pt("")), e.close();
              var t = e.parentWindow.Object;
              return (e = null), t;
            })(Et)
          : (((t = S("iframe")).style.display = "none"),
            xt.appendChild(t),
            (t.src = String("javascript:")),
            (e = t.contentWindow.document).open(),
            e.write(Pt("document.F=Object")),
            e.close(),
            e.F);
        for (var n = ye.length; n--; ) delete Ot.prototype[ye[n]];
        return Ot();
      };
    K[At] = !0;
    var It =
        Object.create ||
        function (e, t) {
          var n;
          return (
            null !== e
              ? ((Ct.prototype = C(e)),
                (n = new Ct()),
                (Ct.prototype = null),
                (n[At] = e))
              : (n = Ot()),
            void 0 === t ? n : Tt(n, t)
          );
        },
      Rt = O.f,
      jt = Ge("toStringTag"),
      Lt = function (e, t, n) {
        e &&
          !_((e = n ? e : e.prototype), jt) &&
          Rt(e, jt, { configurable: !0, value: t });
      },
      Nt = {},
      Ut = kt.IteratorPrototype,
      Mt = function () {
        return this;
      },
      Dt = function (e, t, n) {
        var r = t + " Iterator";
        return (
          (e.prototype = It(Ut, { next: h(1, n) })),
          Lt(e, r, !1),
          (Nt[r] = Mt),
          e
        );
      },
      Ft =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var e,
                t = !1,
                n = {};
              try {
                (e = Object.getOwnPropertyDescriptor(
                  Object.prototype,
                  "__proto__"
                ).set).call(n, []),
                  (t = n instanceof Array);
              } catch (e) {}
              return function (n, r) {
                return (
                  C(n),
                  (function (e) {
                    if (!v(e) && null !== e)
                      throw TypeError(
                        "Can't set " + String(e) + " as a prototype"
                      );
                  })(r),
                  t ? e.call(n, r) : (n.__proto__ = r),
                  n
                );
              };
            })()
          : void 0),
      qt = kt.IteratorPrototype,
      Bt = kt.BUGGY_SAFARI_ITERATORS,
      $t = Ge("iterator"),
      Ht = "keys",
      Vt = "values",
      Wt = "entries",
      zt = function () {
        return this;
      },
      Yt = function (e, t, n, r, i, o, s) {
        Dt(n, t, r);
        var a,
          l,
          c,
          u = function (e) {
            if (e === i && g) return g;
            if (!Bt && e in d) return d[e];
            switch (e) {
              case Ht:
              case Vt:
              case Wt:
                return function () {
                  return new n(this, e);
                };
            }
            return function () {
              return new n(this);
            };
          },
          h = t + " Iterator",
          p = !1,
          d = e.prototype,
          f = d[$t] || d["@@iterator"] || (i && d[i]),
          g = (!Bt && f) || u(i),
          m = ("Array" == t && d.entries) || f;
        if (
          (m &&
            ((a = bt(m.call(new e()))),
            qt !== Object.prototype &&
              a.next &&
              (bt(a) !== qt &&
                (Ft ? Ft(a, qt) : "function" != typeof a[$t] && I(a, $t, zt)),
              Lt(a, h, !0))),
          i == Vt &&
            f &&
            f.name !== Vt &&
            ((p = !0),
            (g = function () {
              return f.call(this);
            })),
          d[$t] !== g && I(d, $t, g),
          (Nt[t] = g),
          i)
        )
          if (((l = { values: u(Vt), keys: o ? g : u(Ht), entries: u(Wt) }), s))
            for (c in l) (Bt || p || !(c in d)) && ne(d, c, l[c]);
          else Ie({ target: t, proto: !0, forced: Bt || p }, l);
        return l;
      },
      Kt = it.charAt,
      Gt = "String Iterator",
      Xt = te.set,
      Jt = te.getterFor(Gt);
    Yt(
      String,
      "String",
      function (e) {
        Xt(this, { type: Gt, string: String(e), index: 0 });
      },
      function () {
        var e,
          t = Jt(this),
          n = t.string,
          r = t.index;
        return r >= n.length
          ? { value: void 0, done: !0 }
          : ((e = Kt(n, r)), (t.index += e.length), { value: e, done: !1 });
      }
    );
    var Qt = Ge("iterator"),
      Zt = !s(function () {
        var e = new URL("b?a=1&b=2&c=3", "http://a"),
          t = e.searchParams,
          n = "";
        return (
          (e.pathname = "c%20d"),
          t.forEach(function (e, r) {
            t.delete("b"), (n += r + e);
          }),
          !t.sort ||
            "http://a/c%20d?a=1&c=3" !== e.href ||
            "3" !== t.get("c") ||
            "a=1" !== String(new URLSearchParams("?a=1")) ||
            !t[Qt] ||
            "a" !== new URL("https://a@b").username ||
            "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
            "xn--e1aybc" !== new URL("http://тест").host ||
            "#%D0%B1" !== new URL("http://a#б").hash ||
            "a1c3" !== n ||
            "x" !== new URL("http://x", void 0).host
        );
      }),
      en = function (e, t, n) {
        if (!(e instanceof t))
          throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return e;
      },
      tn = Object.assign,
      nn = Object.defineProperty,
      rn =
        !tn ||
        s(function () {
          if (
            a &&
            1 !==
              tn(
                { b: 1 },
                tn(
                  nn({}, "a", {
                    enumerable: !0,
                    get: function () {
                      nn(this, "b", { value: 3, enumerable: !1 });
                    },
                  }),
                  { b: 2 }
                )
              ).b
          )
            return !0;
          var e = {},
            t = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
          return (
            (e[n] = 7),
            r.split("").forEach(function (e) {
              t[e] = e;
            }),
            7 != tn({}, e)[n] || St(tn({}, t)).join("") != r
          );
        })
          ? function (e, t) {
              for (
                var n = nt(e), r = arguments.length, i = 1, o = we.f, s = u.f;
                r > i;

              )
                for (
                  var l,
                    c = g(arguments[i++]),
                    h = o ? St(c).concat(o(c)) : St(c),
                    p = h.length,
                    d = 0;
                  p > d;

                )
                  (l = h[d++]), (a && !s.call(c, l)) || (n[l] = c[l]);
              return n;
            }
          : tn,
      on = function (e, t, n) {
        if (
          ((function (e) {
            if ("function" != typeof e)
              throw TypeError(String(e) + " is not a function");
          })(e),
          void 0 === t)
        )
          return e;
        switch (n) {
          case 0:
            return function () {
              return e.call(t);
            };
          case 1:
            return function (n) {
              return e.call(t, n);
            };
          case 2:
            return function (n, r) {
              return e.call(t, n, r);
            };
          case 3:
            return function (n, r, i) {
              return e.call(t, n, r, i);
            };
        }
        return function () {
          return e.apply(t, arguments);
        };
      },
      sn = function (e, t, n, r) {
        try {
          return r ? t(C(n)[0], n[1]) : t(n);
        } catch (t) {
          var i = e.return;
          throw (void 0 !== i && C(i.call(e)), t);
        }
      },
      an = Ge("iterator"),
      ln = Array.prototype,
      cn = function (e) {
        return void 0 !== e && (Nt.Array === e || ln[an] === e);
      },
      un = function (e, t, n) {
        var r = b(t);
        r in e ? O.f(e, r, h(0, n)) : (e[r] = n);
      },
      hn = {};
    hn[Ge("toStringTag")] = "z";
    var pn = "[object z]" === String(hn),
      dn = Ge("toStringTag"),
      fn =
        "Arguments" ==
        d(
          (function () {
            return arguments;
          })()
        ),
      gn = pn
        ? d
        : function (e) {
            var t, n, r;
            return void 0 === e
              ? "Undefined"
              : null === e
              ? "Null"
              : "string" ==
                typeof (n = (function (e, t) {
                  try {
                    return e[t];
                  } catch (e) {}
                })((t = Object(e)), dn))
              ? n
              : fn
              ? d(t)
              : "Object" == (r = d(t)) && "function" == typeof t.callee
              ? "Arguments"
              : r;
          },
      mn = Ge("iterator"),
      yn = function (e) {
        if (null != e) return e[mn] || e["@@iterator"] || Nt[gn(e)];
      },
      vn = function (e) {
        var t,
          n,
          r,
          i,
          o,
          s,
          a = nt(e),
          l = "function" == typeof this ? this : Array,
          c = arguments.length,
          u = c > 1 ? arguments[1] : void 0,
          h = void 0 !== u,
          p = yn(a),
          d = 0;
        if (
          (h && (u = on(u, c > 2 ? arguments[2] : void 0, 2)),
          null == p || (l == Array && cn(p)))
        )
          for (n = new l((t = ue(a.length))); t > d; d++)
            (s = h ? u(a[d], d) : a[d]), un(n, d, s);
        else
          for (
            o = (i = p.call(a)).next, n = new l();
            !(r = o.call(i)).done;
            d++
          )
            (s = h ? sn(i, u, [r.value, d], !0) : r.value), un(n, d, s);
        return (n.length = d), n;
      },
      bn = 2147483647,
      wn = /[^\0-\u007E]/,
      _n = /[.\u3002\uFF0E\uFF61]/g,
      En = "Overflow: input needs wider integers to process",
      kn = Math.floor,
      Sn = String.fromCharCode,
      Tn = function (e) {
        return e + 22 + 75 * (e < 26);
      },
      xn = function (e, t, n) {
        var r = 0;
        for (e = n ? kn(e / 700) : e >> 1, e += kn(e / t); e > 455; r += 36)
          e = kn(e / 35);
        return kn(r + (36 * e) / (e + 38));
      },
      An = function (e) {
        var t,
          n,
          r = [],
          i = (e = (function (e) {
            for (var t = [], n = 0, r = e.length; n < r; ) {
              var i = e.charCodeAt(n++);
              if (i >= 55296 && i <= 56319 && n < r) {
                var o = e.charCodeAt(n++);
                56320 == (64512 & o)
                  ? t.push(((1023 & i) << 10) + (1023 & o) + 65536)
                  : (t.push(i), n--);
              } else t.push(i);
            }
            return t;
          })(e)).length,
          o = 128,
          s = 0,
          a = 72;
        for (t = 0; t < e.length; t++) (n = e[t]) < 128 && r.push(Sn(n));
        var l = r.length,
          c = l;
        for (l && r.push("-"); c < i; ) {
          var u = bn;
          for (t = 0; t < e.length; t++) (n = e[t]) >= o && n < u && (u = n);
          var h = c + 1;
          if (u - o > kn((bn - s) / h)) throw RangeError(En);
          for (s += (u - o) * h, o = u, t = 0; t < e.length; t++) {
            if ((n = e[t]) < o && ++s > bn) throw RangeError(En);
            if (n == o) {
              for (var p = s, d = 36; ; d += 36) {
                var f = d <= a ? 1 : d >= a + 26 ? 26 : d - a;
                if (p < f) break;
                var g = p - f,
                  m = 36 - f;
                r.push(Sn(Tn(f + (g % m)))), (p = kn(g / m));
              }
              r.push(Sn(Tn(p))), (a = xn(s, h, c == l)), (s = 0), ++c;
            }
          }
          ++s, ++o;
        }
        return r.join("");
      },
      Cn = Ge("unscopables"),
      Pn = Array.prototype;
    null == Pn[Cn] && O.f(Pn, Cn, { configurable: !0, value: It(null) });
    var On = function (e) {
        Pn[Cn][e] = !0;
      },
      In = "Array Iterator",
      Rn = te.set,
      jn = te.getterFor(In);
    Yt(
      Array,
      "Array",
      function (e, t) {
        Rn(this, { type: In, target: y(e), index: 0, kind: t });
      },
      function () {
        var e = jn(this),
          t = e.target,
          n = e.kind,
          r = e.index++;
        return !t || r >= t.length
          ? ((e.target = void 0), { value: void 0, done: !0 })
          : "keys" == n
          ? { value: r, done: !1 }
          : "values" == n
          ? { value: t[r], done: !1 }
          : { value: [r, t[r]], done: !1 };
      },
      "values"
    ),
      (Nt.Arguments = Nt.Array),
      On("keys"),
      On("values"),
      On("entries");
    var Ln = function (e, t, n) {
        for (var r in t) ne(e, r, t[r], n);
        return e;
      },
      Nn = function (e) {
        var t = yn(e);
        if ("function" != typeof t)
          throw TypeError(String(e) + " is not iterable");
        return C(t.call(e));
      },
      Un = oe("fetch"),
      Mn = oe("Headers"),
      Dn = Ge("iterator"),
      Fn = "URLSearchParams",
      qn = "URLSearchParamsIterator",
      Bn = te.set,
      $n = te.getterFor(Fn),
      Hn = te.getterFor(qn),
      Vn = /\+/g,
      Wn = Array(4),
      zn = function (e) {
        return (
          Wn[e - 1] ||
          (Wn[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
        );
      },
      Yn = function (e) {
        try {
          return decodeURIComponent(e);
        } catch (t) {
          return e;
        }
      },
      Kn = function (e) {
        var t = e.replace(Vn, " "),
          n = 4;
        try {
          return decodeURIComponent(t);
        } catch (e) {
          for (; n; ) t = t.replace(zn(n--), Yn);
          return t;
        }
      },
      Gn = /[!'()~]|%20/g,
      Xn = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
      },
      Jn = function (e) {
        return Xn[e];
      },
      Qn = function (e) {
        return encodeURIComponent(e).replace(Gn, Jn);
      },
      Zn = function (e, t) {
        if (t)
          for (var n, r, i = t.split("&"), o = 0; o < i.length; )
            (n = i[o++]).length &&
              ((r = n.split("=")),
              e.push({ key: Kn(r.shift()), value: Kn(r.join("=")) }));
      },
      er = function (e) {
        (this.entries.length = 0), Zn(this.entries, e);
      },
      tr = function (e, t) {
        if (e < t) throw TypeError("Not enough arguments");
      },
      nr = Dt(
        function (e, t) {
          Bn(this, { type: qn, iterator: Nn($n(e).entries), kind: t });
        },
        "Iterator",
        function () {
          var e = Hn(this),
            t = e.kind,
            n = e.iterator.next(),
            r = n.value;
          return (
            n.done ||
              (n.value =
                "keys" === t
                  ? r.key
                  : "values" === t
                  ? r.value
                  : [r.key, r.value]),
            n
          );
        }
      ),
      rr = function () {
        en(this, rr, Fn);
        var e,
          t,
          n,
          r,
          i,
          o,
          s,
          a,
          l,
          c = arguments.length > 0 ? arguments[0] : void 0,
          u = this,
          h = [];
        if (
          (Bn(u, {
            type: Fn,
            entries: h,
            updateURL: function () {},
            updateSearchParams: er,
          }),
          void 0 !== c)
        )
          if (v(c))
            if ("function" == typeof (e = yn(c)))
              for (n = (t = e.call(c)).next; !(r = n.call(t)).done; ) {
                if (
                  (s = (o = (i = Nn(C(r.value))).next).call(i)).done ||
                  (a = o.call(i)).done ||
                  !o.call(i).done
                )
                  throw TypeError("Expected sequence with length 2");
                h.push({ key: s.value + "", value: a.value + "" });
              }
            else for (l in c) _(c, l) && h.push({ key: l, value: c[l] + "" });
          else
            Zn(
              h,
              "string" == typeof c
                ? "?" === c.charAt(0)
                  ? c.slice(1)
                  : c
                : c + ""
            );
      },
      ir = rr.prototype;
    Ln(
      ir,
      {
        append: function (e, t) {
          tr(arguments.length, 2);
          var n = $n(this);
          n.entries.push({ key: e + "", value: t + "" }), n.updateURL();
        },
        delete: function (e) {
          tr(arguments.length, 1);
          for (
            var t = $n(this), n = t.entries, r = e + "", i = 0;
            i < n.length;

          )
            n[i].key === r ? n.splice(i, 1) : i++;
          t.updateURL();
        },
        get: function (e) {
          tr(arguments.length, 1);
          for (var t = $n(this).entries, n = e + "", r = 0; r < t.length; r++)
            if (t[r].key === n) return t[r].value;
          return null;
        },
        getAll: function (e) {
          tr(arguments.length, 1);
          for (
            var t = $n(this).entries, n = e + "", r = [], i = 0;
            i < t.length;
            i++
          )
            t[i].key === n && r.push(t[i].value);
          return r;
        },
        has: function (e) {
          tr(arguments.length, 1);
          for (var t = $n(this).entries, n = e + "", r = 0; r < t.length; )
            if (t[r++].key === n) return !0;
          return !1;
        },
        set: function (e, t) {
          tr(arguments.length, 1);
          for (
            var n,
              r = $n(this),
              i = r.entries,
              o = !1,
              s = e + "",
              a = t + "",
              l = 0;
            l < i.length;
            l++
          )
            (n = i[l]).key === s &&
              (o ? i.splice(l--, 1) : ((o = !0), (n.value = a)));
          o || i.push({ key: s, value: a }), r.updateURL();
        },
        sort: function () {
          var e,
            t,
            n,
            r = $n(this),
            i = r.entries,
            o = i.slice();
          for (i.length = 0, n = 0; n < o.length; n++) {
            for (e = o[n], t = 0; t < n; t++)
              if (i[t].key > e.key) {
                i.splice(t, 0, e);
                break;
              }
            t === n && i.push(e);
          }
          r.updateURL();
        },
        forEach: function (e) {
          for (
            var t,
              n = $n(this).entries,
              r = on(e, arguments.length > 1 ? arguments[1] : void 0, 3),
              i = 0;
            i < n.length;

          )
            r((t = n[i++]).value, t.key, this);
        },
        keys: function () {
          return new nr(this, "keys");
        },
        values: function () {
          return new nr(this, "values");
        },
        entries: function () {
          return new nr(this, "entries");
        },
      },
      { enumerable: !0 }
    ),
      ne(ir, Dn, ir.entries),
      ne(
        ir,
        "toString",
        function () {
          for (var e, t = $n(this).entries, n = [], r = 0; r < t.length; )
            (e = t[r++]), n.push(Qn(e.key) + "=" + Qn(e.value));
          return n.join("&");
        },
        { enumerable: !0 }
      ),
      Lt(rr, Fn),
      Ie({ global: !0, forced: !Zt }, { URLSearchParams: rr }),
      Zt ||
        "function" != typeof Un ||
        "function" != typeof Mn ||
        Ie(
          { global: !0, enumerable: !0, forced: !0 },
          {
            fetch: function (e) {
              var t,
                n,
                r,
                i = [e];
              return (
                arguments.length > 1 &&
                  (v((t = arguments[1])) &&
                    ((n = t.body),
                    gn(n) === Fn &&
                      ((r = t.headers ? new Mn(t.headers) : new Mn()).has(
                        "content-type"
                      ) ||
                        r.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8"
                        ),
                      (t = It(t, {
                        body: h(0, String(n)),
                        headers: h(0, r),
                      })))),
                  i.push(t)),
                Un.apply(this, i)
              );
            },
          }
        );
    var or,
      sr = { URLSearchParams: rr, getState: $n },
      ar = it.codeAt,
      lr = o.URL,
      cr = sr.URLSearchParams,
      ur = sr.getState,
      hr = te.set,
      pr = te.getterFor("URL"),
      dr = Math.floor,
      fr = Math.pow,
      gr = "Invalid scheme",
      mr = "Invalid host",
      yr = "Invalid port",
      vr = /[A-Za-z]/,
      br = /[\d+-.A-Za-z]/,
      wr = /\d/,
      _r = /^(0x|0X)/,
      Er = /^[0-7]+$/,
      kr = /^\d+$/,
      Sr = /^[\dA-Fa-f]+$/,
      Tr = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
      xr = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
      Ar = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
      Cr = /[\u0009\u000A\u000D]/g,
      Pr = function (e, t) {
        var n, r, i;
        if ("[" == t.charAt(0)) {
          if ("]" != t.charAt(t.length - 1)) return mr;
          if (!(n = Ir(t.slice(1, -1)))) return mr;
          e.host = n;
        } else if (Fr(e)) {
          if (
            ((t = (function (e) {
              var t,
                n,
                r = [],
                i = e.toLowerCase().replace(_n, ".").split(".");
              for (t = 0; t < i.length; t++)
                (n = i[t]), r.push(wn.test(n) ? "xn--" + An(n) : n);
              return r.join(".");
            })(t)),
            Tr.test(t))
          )
            return mr;
          if (null === (n = Or(t))) return mr;
          e.host = n;
        } else {
          if (xr.test(t)) return mr;
          for (n = "", r = vn(t), i = 0; i < r.length; i++) n += Mr(r[i], jr);
          e.host = n;
        }
      },
      Or = function (e) {
        var t,
          n,
          r,
          i,
          o,
          s,
          a,
          l = e.split(".");
        if ((l.length && "" == l[l.length - 1] && l.pop(), (t = l.length) > 4))
          return e;
        for (n = [], r = 0; r < t; r++) {
          if ("" == (i = l[r])) return e;
          if (
            ((o = 10),
            i.length > 1 &&
              "0" == i.charAt(0) &&
              ((o = _r.test(i) ? 16 : 8), (i = i.slice(8 == o ? 1 : 2))),
            "" === i)
          )
            s = 0;
          else {
            if (!(10 == o ? kr : 8 == o ? Er : Sr).test(i)) return e;
            s = parseInt(i, o);
          }
          n.push(s);
        }
        for (r = 0; r < t; r++)
          if (((s = n[r]), r == t - 1)) {
            if (s >= fr(256, 5 - t)) return null;
          } else if (s > 255) return null;
        for (a = n.pop(), r = 0; r < n.length; r++) a += n[r] * fr(256, 3 - r);
        return a;
      },
      Ir = function (e) {
        var t,
          n,
          r,
          i,
          o,
          s,
          a,
          l = [0, 0, 0, 0, 0, 0, 0, 0],
          c = 0,
          u = null,
          h = 0,
          p = function () {
            return e.charAt(h);
          };
        if (":" == p()) {
          if (":" != e.charAt(1)) return;
          (h += 2), (u = ++c);
        }
        for (; p(); ) {
          if (8 == c) return;
          if (":" != p()) {
            for (t = n = 0; n < 4 && Sr.test(p()); )
              (t = 16 * t + parseInt(p(), 16)), h++, n++;
            if ("." == p()) {
              if (0 == n) return;
              if (((h -= n), c > 6)) return;
              for (r = 0; p(); ) {
                if (((i = null), r > 0)) {
                  if (!("." == p() && r < 4)) return;
                  h++;
                }
                if (!wr.test(p())) return;
                for (; wr.test(p()); ) {
                  if (((o = parseInt(p(), 10)), null === i)) i = o;
                  else {
                    if (0 == i) return;
                    i = 10 * i + o;
                  }
                  if (i > 255) return;
                  h++;
                }
                (l[c] = 256 * l[c] + i), (2 != ++r && 4 != r) || c++;
              }
              if (4 != r) return;
              break;
            }
            if (":" == p()) {
              if ((h++, !p())) return;
            } else if (p()) return;
            l[c++] = t;
          } else {
            if (null !== u) return;
            h++, (u = ++c);
          }
        }
        if (null !== u)
          for (s = c - u, c = 7; 0 != c && s > 0; )
            (a = l[c]), (l[c--] = l[u + s - 1]), (l[u + --s] = a);
        else if (8 != c) return;
        return l;
      },
      Rr = function (e) {
        var t, n, r, i;
        if ("number" == typeof e) {
          for (t = [], n = 0; n < 4; n++) t.unshift(e % 256), (e = dr(e / 256));
          return t.join(".");
        }
        if ("object" == typeof e) {
          for (
            t = "",
              r = (function (e) {
                for (var t = null, n = 1, r = null, i = 0, o = 0; o < 8; o++)
                  0 !== e[o]
                    ? (i > n && ((t = r), (n = i)), (r = null), (i = 0))
                    : (null === r && (r = o), ++i);
                return i > n && ((t = r), (n = i)), t;
              })(e),
              n = 0;
            n < 8;
            n++
          )
            (i && 0 === e[n]) ||
              (i && (i = !1),
              r === n
                ? ((t += n ? ":" : "::"), (i = !0))
                : ((t += e[n].toString(16)), n < 7 && (t += ":")));
          return "[" + t + "]";
        }
        return e;
      },
      jr = {},
      Lr = rn({}, jr, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
      Nr = rn({}, Lr, { "#": 1, "?": 1, "{": 1, "}": 1 }),
      Ur = rn({}, Nr, {
        "/": 1,
        ":": 1,
        ";": 1,
        "=": 1,
        "@": 1,
        "[": 1,
        "\\": 1,
        "]": 1,
        "^": 1,
        "|": 1,
      }),
      Mr = function (e, t) {
        var n = ar(e, 0);
        return n > 32 && n < 127 && !_(t, e) ? e : encodeURIComponent(e);
      },
      Dr = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
      Fr = function (e) {
        return _(Dr, e.scheme);
      },
      qr = function (e) {
        return "" != e.username || "" != e.password;
      },
      Br = function (e) {
        return !e.host || e.cannotBeABaseURL || "file" == e.scheme;
      },
      $r = function (e, t) {
        var n;
        return (
          2 == e.length &&
          vr.test(e.charAt(0)) &&
          (":" == (n = e.charAt(1)) || (!t && "|" == n))
        );
      },
      Hr = function (e) {
        var t;
        return (
          e.length > 1 &&
          $r(e.slice(0, 2)) &&
          (2 == e.length ||
            "/" === (t = e.charAt(2)) ||
            "\\" === t ||
            "?" === t ||
            "#" === t)
        );
      },
      Vr = function (e) {
        var t = e.path,
          n = t.length;
        !n || ("file" == e.scheme && 1 == n && $r(t[0], !0)) || t.pop();
      },
      Wr = function (e) {
        return "." === e || "%2e" === e.toLowerCase();
      },
      zr = {},
      Yr = {},
      Kr = {},
      Gr = {},
      Xr = {},
      Jr = {},
      Qr = {},
      Zr = {},
      ei = {},
      ti = {},
      ni = {},
      ri = {},
      ii = {},
      oi = {},
      si = {},
      ai = {},
      li = {},
      ci = {},
      ui = {},
      hi = {},
      pi = {},
      di = function (e, t, n, r) {
        var i,
          o,
          s,
          a,
          l,
          c = n || zr,
          u = 0,
          h = "",
          p = !1,
          d = !1,
          f = !1;
        for (
          n ||
            ((e.scheme = ""),
            (e.username = ""),
            (e.password = ""),
            (e.host = null),
            (e.port = null),
            (e.path = []),
            (e.query = null),
            (e.fragment = null),
            (e.cannotBeABaseURL = !1),
            (t = t.replace(Ar, ""))),
            t = t.replace(Cr, ""),
            i = vn(t);
          u <= i.length;

        ) {
          switch (((o = i[u]), c)) {
            case zr:
              if (!o || !vr.test(o)) {
                if (n) return gr;
                c = Kr;
                continue;
              }
              (h += o.toLowerCase()), (c = Yr);
              break;
            case Yr:
              if (o && (br.test(o) || "+" == o || "-" == o || "." == o))
                h += o.toLowerCase();
              else {
                if (":" != o) {
                  if (n) return gr;
                  (h = ""), (c = Kr), (u = 0);
                  continue;
                }
                if (
                  n &&
                  (Fr(e) != _(Dr, h) ||
                    ("file" == h && (qr(e) || null !== e.port)) ||
                    ("file" == e.scheme && !e.host))
                )
                  return;
                if (((e.scheme = h), n))
                  return void (
                    Fr(e) &&
                    Dr[e.scheme] == e.port &&
                    (e.port = null)
                  );
                (h = ""),
                  "file" == e.scheme
                    ? (c = oi)
                    : Fr(e) && r && r.scheme == e.scheme
                    ? (c = Gr)
                    : Fr(e)
                    ? (c = Zr)
                    : "/" == i[u + 1]
                    ? ((c = Xr), u++)
                    : ((e.cannotBeABaseURL = !0), e.path.push(""), (c = ui));
              }
              break;
            case Kr:
              if (!r || (r.cannotBeABaseURL && "#" != o)) return gr;
              if (r.cannotBeABaseURL && "#" == o) {
                (e.scheme = r.scheme),
                  (e.path = r.path.slice()),
                  (e.query = r.query),
                  (e.fragment = ""),
                  (e.cannotBeABaseURL = !0),
                  (c = pi);
                break;
              }
              c = "file" == r.scheme ? oi : Jr;
              continue;
            case Gr:
              if ("/" != o || "/" != i[u + 1]) {
                c = Jr;
                continue;
              }
              (c = ei), u++;
              break;
            case Xr:
              if ("/" == o) {
                c = ti;
                break;
              }
              c = ci;
              continue;
            case Jr:
              if (((e.scheme = r.scheme), o == or))
                (e.username = r.username),
                  (e.password = r.password),
                  (e.host = r.host),
                  (e.port = r.port),
                  (e.path = r.path.slice()),
                  (e.query = r.query);
              else if ("/" == o || ("\\" == o && Fr(e))) c = Qr;
              else if ("?" == o)
                (e.username = r.username),
                  (e.password = r.password),
                  (e.host = r.host),
                  (e.port = r.port),
                  (e.path = r.path.slice()),
                  (e.query = ""),
                  (c = hi);
              else {
                if ("#" != o) {
                  (e.username = r.username),
                    (e.password = r.password),
                    (e.host = r.host),
                    (e.port = r.port),
                    (e.path = r.path.slice()),
                    e.path.pop(),
                    (c = ci);
                  continue;
                }
                (e.username = r.username),
                  (e.password = r.password),
                  (e.host = r.host),
                  (e.port = r.port),
                  (e.path = r.path.slice()),
                  (e.query = r.query),
                  (e.fragment = ""),
                  (c = pi);
              }
              break;
            case Qr:
              if (!Fr(e) || ("/" != o && "\\" != o)) {
                if ("/" != o) {
                  (e.username = r.username),
                    (e.password = r.password),
                    (e.host = r.host),
                    (e.port = r.port),
                    (c = ci);
                  continue;
                }
                c = ti;
              } else c = ei;
              break;
            case Zr:
              if (((c = ei), "/" != o || "/" != h.charAt(u + 1))) continue;
              u++;
              break;
            case ei:
              if ("/" != o && "\\" != o) {
                c = ti;
                continue;
              }
              break;
            case ti:
              if ("@" == o) {
                p && (h = "%40" + h), (p = !0), (s = vn(h));
                for (var g = 0; g < s.length; g++) {
                  var m = s[g];
                  if (":" != m || f) {
                    var y = Mr(m, Ur);
                    f ? (e.password += y) : (e.username += y);
                  } else f = !0;
                }
                h = "";
              } else if (
                o == or ||
                "/" == o ||
                "?" == o ||
                "#" == o ||
                ("\\" == o && Fr(e))
              ) {
                if (p && "" == h) return "Invalid authority";
                (u -= vn(h).length + 1), (h = ""), (c = ni);
              } else h += o;
              break;
            case ni:
            case ri:
              if (n && "file" == e.scheme) {
                c = ai;
                continue;
              }
              if (":" != o || d) {
                if (
                  o == or ||
                  "/" == o ||
                  "?" == o ||
                  "#" == o ||
                  ("\\" == o && Fr(e))
                ) {
                  if (Fr(e) && "" == h) return mr;
                  if (n && "" == h && (qr(e) || null !== e.port)) return;
                  if ((a = Pr(e, h))) return a;
                  if (((h = ""), (c = li), n)) return;
                  continue;
                }
                "[" == o ? (d = !0) : "]" == o && (d = !1), (h += o);
              } else {
                if ("" == h) return mr;
                if ((a = Pr(e, h))) return a;
                if (((h = ""), (c = ii), n == ri)) return;
              }
              break;
            case ii:
              if (!wr.test(o)) {
                if (
                  o == or ||
                  "/" == o ||
                  "?" == o ||
                  "#" == o ||
                  ("\\" == o && Fr(e)) ||
                  n
                ) {
                  if ("" != h) {
                    var v = parseInt(h, 10);
                    if (v > 65535) return yr;
                    (e.port = Fr(e) && v === Dr[e.scheme] ? null : v), (h = "");
                  }
                  if (n) return;
                  c = li;
                  continue;
                }
                return yr;
              }
              h += o;
              break;
            case oi:
              if (((e.scheme = "file"), "/" == o || "\\" == o)) c = si;
              else {
                if (!r || "file" != r.scheme) {
                  c = ci;
                  continue;
                }
                if (o == or)
                  (e.host = r.host),
                    (e.path = r.path.slice()),
                    (e.query = r.query);
                else if ("?" == o)
                  (e.host = r.host),
                    (e.path = r.path.slice()),
                    (e.query = ""),
                    (c = hi);
                else {
                  if ("#" != o) {
                    Hr(i.slice(u).join("")) ||
                      ((e.host = r.host), (e.path = r.path.slice()), Vr(e)),
                      (c = ci);
                    continue;
                  }
                  (e.host = r.host),
                    (e.path = r.path.slice()),
                    (e.query = r.query),
                    (e.fragment = ""),
                    (c = pi);
                }
              }
              break;
            case si:
              if ("/" == o || "\\" == o) {
                c = ai;
                break;
              }
              r &&
                "file" == r.scheme &&
                !Hr(i.slice(u).join("")) &&
                ($r(r.path[0], !0)
                  ? e.path.push(r.path[0])
                  : (e.host = r.host)),
                (c = ci);
              continue;
            case ai:
              if (o == or || "/" == o || "\\" == o || "?" == o || "#" == o) {
                if (!n && $r(h)) c = ci;
                else if ("" == h) {
                  if (((e.host = ""), n)) return;
                  c = li;
                } else {
                  if ((a = Pr(e, h))) return a;
                  if (("localhost" == e.host && (e.host = ""), n)) return;
                  (h = ""), (c = li);
                }
                continue;
              }
              h += o;
              break;
            case li:
              if (Fr(e)) {
                if (((c = ci), "/" != o && "\\" != o)) continue;
              } else if (n || "?" != o)
                if (n || "#" != o) {
                  if (o != or && ((c = ci), "/" != o)) continue;
                } else (e.fragment = ""), (c = pi);
              else (e.query = ""), (c = hi);
              break;
            case ci:
              if (
                o == or ||
                "/" == o ||
                ("\\" == o && Fr(e)) ||
                (!n && ("?" == o || "#" == o))
              ) {
                if (
                  (".." === (l = (l = h).toLowerCase()) ||
                  "%2e." === l ||
                  ".%2e" === l ||
                  "%2e%2e" === l
                    ? (Vr(e),
                      "/" == o || ("\\" == o && Fr(e)) || e.path.push(""))
                    : Wr(h)
                    ? "/" == o || ("\\" == o && Fr(e)) || e.path.push("")
                    : ("file" == e.scheme &&
                        !e.path.length &&
                        $r(h) &&
                        (e.host && (e.host = ""), (h = h.charAt(0) + ":")),
                      e.path.push(h)),
                  (h = ""),
                  "file" == e.scheme && (o == or || "?" == o || "#" == o))
                )
                  for (; e.path.length > 1 && "" === e.path[0]; )
                    e.path.shift();
                "?" == o
                  ? ((e.query = ""), (c = hi))
                  : "#" == o && ((e.fragment = ""), (c = pi));
              } else h += Mr(o, Nr);
              break;
            case ui:
              "?" == o
                ? ((e.query = ""), (c = hi))
                : "#" == o
                ? ((e.fragment = ""), (c = pi))
                : o != or && (e.path[0] += Mr(o, jr));
              break;
            case hi:
              n || "#" != o
                ? o != or &&
                  ("'" == o && Fr(e)
                    ? (e.query += "%27")
                    : (e.query += "#" == o ? "%23" : Mr(o, jr)))
                : ((e.fragment = ""), (c = pi));
              break;
            case pi:
              o != or && (e.fragment += Mr(o, Lr));
          }
          u++;
        }
      },
      fi = function (e) {
        var t,
          n,
          r = en(this, fi, "URL"),
          i = arguments.length > 1 ? arguments[1] : void 0,
          o = String(e),
          s = hr(r, { type: "URL" });
        if (void 0 !== i)
          if (i instanceof fi) t = pr(i);
          else if ((n = di((t = {}), String(i)))) throw TypeError(n);
        if ((n = di(s, o, null, t))) throw TypeError(n);
        var l = (s.searchParams = new cr()),
          c = ur(l);
        c.updateSearchParams(s.query),
          (c.updateURL = function () {
            s.query = String(l) || null;
          }),
          a ||
            ((r.href = mi.call(r)),
            (r.origin = yi.call(r)),
            (r.protocol = vi.call(r)),
            (r.username = bi.call(r)),
            (r.password = wi.call(r)),
            (r.host = _i.call(r)),
            (r.hostname = Ei.call(r)),
            (r.port = ki.call(r)),
            (r.pathname = Si.call(r)),
            (r.search = Ti.call(r)),
            (r.searchParams = xi.call(r)),
            (r.hash = Ai.call(r)));
      },
      gi = fi.prototype,
      mi = function () {
        var e = pr(this),
          t = e.scheme,
          n = e.username,
          r = e.password,
          i = e.host,
          o = e.port,
          s = e.path,
          a = e.query,
          l = e.fragment,
          c = t + ":";
        return (
          null !== i
            ? ((c += "//"),
              qr(e) && (c += n + (r ? ":" + r : "") + "@"),
              (c += Rr(i)),
              null !== o && (c += ":" + o))
            : "file" == t && (c += "//"),
          (c += e.cannotBeABaseURL ? s[0] : s.length ? "/" + s.join("/") : ""),
          null !== a && (c += "?" + a),
          null !== l && (c += "#" + l),
          c
        );
      },
      yi = function () {
        var e = pr(this),
          t = e.scheme,
          n = e.port;
        if ("blob" == t)
          try {
            return new URL(t.path[0]).origin;
          } catch (e) {
            return "null";
          }
        return "file" != t && Fr(e)
          ? t + "://" + Rr(e.host) + (null !== n ? ":" + n : "")
          : "null";
      },
      vi = function () {
        return pr(this).scheme + ":";
      },
      bi = function () {
        return pr(this).username;
      },
      wi = function () {
        return pr(this).password;
      },
      _i = function () {
        var e = pr(this),
          t = e.host,
          n = e.port;
        return null === t ? "" : null === n ? Rr(t) : Rr(t) + ":" + n;
      },
      Ei = function () {
        var e = pr(this).host;
        return null === e ? "" : Rr(e);
      },
      ki = function () {
        var e = pr(this).port;
        return null === e ? "" : String(e);
      },
      Si = function () {
        var e = pr(this),
          t = e.path;
        return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : "";
      },
      Ti = function () {
        var e = pr(this).query;
        return e ? "?" + e : "";
      },
      xi = function () {
        return pr(this).searchParams;
      },
      Ai = function () {
        var e = pr(this).fragment;
        return e ? "#" + e : "";
      },
      Ci = function (e, t) {
        return { get: e, set: t, configurable: !0, enumerable: !0 };
      };
    if (
      (a &&
        Tt(gi, {
          href: Ci(mi, function (e) {
            var t = pr(this),
              n = String(e),
              r = di(t, n);
            if (r) throw TypeError(r);
            ur(t.searchParams).updateSearchParams(t.query);
          }),
          origin: Ci(yi),
          protocol: Ci(vi, function (e) {
            var t = pr(this);
            di(t, String(e) + ":", zr);
          }),
          username: Ci(bi, function (e) {
            var t = pr(this),
              n = vn(String(e));
            if (!Br(t)) {
              t.username = "";
              for (var r = 0; r < n.length; r++) t.username += Mr(n[r], Ur);
            }
          }),
          password: Ci(wi, function (e) {
            var t = pr(this),
              n = vn(String(e));
            if (!Br(t)) {
              t.password = "";
              for (var r = 0; r < n.length; r++) t.password += Mr(n[r], Ur);
            }
          }),
          host: Ci(_i, function (e) {
            var t = pr(this);
            t.cannotBeABaseURL || di(t, String(e), ni);
          }),
          hostname: Ci(Ei, function (e) {
            var t = pr(this);
            t.cannotBeABaseURL || di(t, String(e), ri);
          }),
          port: Ci(ki, function (e) {
            var t = pr(this);
            Br(t) || ("" == (e = String(e)) ? (t.port = null) : di(t, e, ii));
          }),
          pathname: Ci(Si, function (e) {
            var t = pr(this);
            t.cannotBeABaseURL || ((t.path = []), di(t, e + "", li));
          }),
          search: Ci(Ti, function (e) {
            var t = pr(this);
            "" == (e = String(e))
              ? (t.query = null)
              : ("?" == e.charAt(0) && (e = e.slice(1)),
                (t.query = ""),
                di(t, e, hi)),
              ur(t.searchParams).updateSearchParams(t.query);
          }),
          searchParams: Ci(xi),
          hash: Ci(Ai, function (e) {
            var t = pr(this);
            "" != (e = String(e))
              ? ("#" == e.charAt(0) && (e = e.slice(1)),
                (t.fragment = ""),
                di(t, e, pi))
              : (t.fragment = null);
          }),
        }),
      ne(
        gi,
        "toJSON",
        function () {
          return mi.call(this);
        },
        { enumerable: !0 }
      ),
      ne(
        gi,
        "toString",
        function () {
          return mi.call(this);
        },
        { enumerable: !0 }
      ),
      lr)
    ) {
      var Pi = lr.createObjectURL,
        Oi = lr.revokeObjectURL;
      Pi &&
        ne(fi, "createObjectURL", function (e) {
          return Pi.apply(lr, arguments);
        }),
        Oi &&
          ne(fi, "revokeObjectURL", function (e) {
            return Oi.apply(lr, arguments);
          });
    }
    Lt(fi, "URL"),
      Ie({ global: !0, forced: !Zt, sham: !a }, { URL: fi }),
      (function (e) {
        var t = (function () {
            try {
              return !!Symbol.iterator;
            } catch (e) {
              return !1;
            }
          })(),
          n = function (e) {
            var n = {
              next: function () {
                var t = e.shift();
                return { done: void 0 === t, value: t };
              },
            };
            return (
              t &&
                (n[Symbol.iterator] = function () {
                  return n;
                }),
              n
            );
          },
          r = function (e) {
            return encodeURIComponent(e).replace(/%20/g, "+");
          },
          i = function (e) {
            return decodeURIComponent(String(e).replace(/\+/g, " "));
          };
        (function () {
          try {
            var t = e.URLSearchParams;
            return (
              "a=1" === new t("?a=1").toString() &&
              "function" == typeof t.prototype.set &&
              "function" == typeof t.prototype.entries
            );
          } catch (e) {
            return !1;
          }
        })() ||
          (function () {
            var i = function (e) {
                Object.defineProperty(this, "_entries", {
                  writable: !0,
                  value: {},
                });
                var t = typeof e;
                if ("undefined" === t);
                else if ("string" === t) "" !== e && this._fromString(e);
                else if (e instanceof i) {
                  var n = this;
                  e.forEach(function (e, t) {
                    n.append(t, e);
                  });
                } else {
                  if (null === e || "object" !== t)
                    throw new TypeError(
                      "Unsupported input's type for URLSearchParams"
                    );
                  if ("[object Array]" === Object.prototype.toString.call(e))
                    for (var r = 0; r < e.length; r++) {
                      var o = e[r];
                      if (
                        "[object Array]" !==
                          Object.prototype.toString.call(o) &&
                        2 === o.length
                      )
                        throw new TypeError(
                          "Expected [string, any] as entry at index " +
                            r +
                            " of URLSearchParams's input"
                        );
                      this.append(o[0], o[1]);
                    }
                  else
                    for (var s in e)
                      e.hasOwnProperty(s) && this.append(s, e[s]);
                }
              },
              o = i.prototype;
            (o.append = function (e, t) {
              e in this._entries
                ? this._entries[e].push(String(t))
                : (this._entries[e] = [String(t)]);
            }),
              (o.delete = function (e) {
                delete this._entries[e];
              }),
              (o.get = function (e) {
                return e in this._entries ? this._entries[e][0] : null;
              }),
              (o.getAll = function (e) {
                return e in this._entries ? this._entries[e].slice(0) : [];
              }),
              (o.has = function (e) {
                return e in this._entries;
              }),
              (o.set = function (e, t) {
                this._entries[e] = [String(t)];
              }),
              (o.forEach = function (e, t) {
                var n;
                for (var r in this._entries)
                  if (this._entries.hasOwnProperty(r)) {
                    n = this._entries[r];
                    for (var i = 0; i < n.length; i++) e.call(t, n[i], r, this);
                  }
              }),
              (o.keys = function () {
                var e = [];
                return (
                  this.forEach(function (t, n) {
                    e.push(n);
                  }),
                  n(e)
                );
              }),
              (o.values = function () {
                var e = [];
                return (
                  this.forEach(function (t) {
                    e.push(t);
                  }),
                  n(e)
                );
              }),
              (o.entries = function () {
                var e = [];
                return (
                  this.forEach(function (t, n) {
                    e.push([n, t]);
                  }),
                  n(e)
                );
              }),
              t && (o[Symbol.iterator] = o.entries),
              (o.toString = function () {
                var e = [];
                return (
                  this.forEach(function (t, n) {
                    e.push(r(n) + "=" + r(t));
                  }),
                  e.join("&")
                );
              }),
              (e.URLSearchParams = i);
          })();
        var o = e.URLSearchParams.prototype;
        "function" != typeof o.sort &&
          (o.sort = function () {
            var e = this,
              t = [];
            this.forEach(function (n, r) {
              t.push([r, n]), e._entries || e.delete(r);
            }),
              t.sort(function (e, t) {
                return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0;
              }),
              e._entries && (e._entries = {});
            for (var n = 0; n < t.length; n++) this.append(t[n][0], t[n][1]);
          }),
          "function" != typeof o._fromString &&
            Object.defineProperty(o, "_fromString", {
              enumerable: !1,
              configurable: !1,
              writable: !1,
              value: function (e) {
                if (this._entries) this._entries = {};
                else {
                  var t = [];
                  this.forEach(function (e, n) {
                    t.push(n);
                  });
                  for (var n = 0; n < t.length; n++) this.delete(t[n]);
                }
                var r,
                  o = (e = e.replace(/^\?/, "")).split("&");
                for (n = 0; n < o.length; n++)
                  (r = o[n].split("=")),
                    this.append(i(r[0]), r.length > 1 ? i(r[1]) : "");
              },
            });
      })(
        void 0 !== n
          ? n
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof self
          ? self
          : n
      ),
      (function (e) {
        if (
          ((function () {
            try {
              var t = new e.URL("b", "http://a");
              return (
                (t.pathname = "c d"),
                "http://a/c%20d" === t.href && t.searchParams
              );
            } catch (e) {
              return !1;
            }
          })() ||
            (function () {
              var t = e.URL,
                n = function (t, n) {
                  "string" != typeof t && (t = String(t));
                  var r,
                    i = document;
                  if (n && (void 0 === e.location || n !== e.location.href)) {
                    ((r = (i =
                      document.implementation.createHTMLDocument(
                        ""
                      )).createElement("base")).href = n),
                      i.head.appendChild(r);
                    try {
                      if (0 !== r.href.indexOf(n)) throw new Error(r.href);
                    } catch (e) {
                      throw new Error(
                        "URL unable to set base " + n + " due to " + e
                      );
                    }
                  }
                  var o = i.createElement("a");
                  (o.href = t), r && (i.body.appendChild(o), (o.href = o.href));
                  var s = i.createElement("input");
                  if (
                    ((s.type = "url"),
                    (s.value = t),
                    ":" === o.protocol ||
                      !/:/.test(o.href) ||
                      (!s.checkValidity() && !n))
                  )
                    throw new TypeError("Invalid URL");
                  Object.defineProperty(this, "_anchorElement", { value: o });
                  var a = new e.URLSearchParams(this.search),
                    l = !0,
                    c = !0,
                    u = this;
                  ["append", "delete", "set"].forEach(function (e) {
                    var t = a[e];
                    a[e] = function () {
                      t.apply(a, arguments),
                        l && ((c = !1), (u.search = a.toString()), (c = !0));
                    };
                  }),
                    Object.defineProperty(this, "searchParams", {
                      value: a,
                      enumerable: !0,
                    });
                  var h = void 0;
                  Object.defineProperty(this, "_updateSearchParams", {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: function () {
                      this.search !== h &&
                        ((h = this.search),
                        c &&
                          ((l = !1),
                          this.searchParams._fromString(this.search),
                          (l = !0)));
                    },
                  });
                },
                r = n.prototype;
              ["hash", "host", "hostname", "port", "protocol"].forEach(
                function (e) {
                  !(function (e) {
                    Object.defineProperty(r, e, {
                      get: function () {
                        return this._anchorElement[e];
                      },
                      set: function (t) {
                        this._anchorElement[e] = t;
                      },
                      enumerable: !0,
                    });
                  })(e);
                }
              ),
                Object.defineProperty(r, "search", {
                  get: function () {
                    return this._anchorElement.search;
                  },
                  set: function (e) {
                    (this._anchorElement.search = e),
                      this._updateSearchParams();
                  },
                  enumerable: !0,
                }),
                Object.defineProperties(r, {
                  toString: {
                    get: function () {
                      var e = this;
                      return function () {
                        return e.href;
                      };
                    },
                  },
                  href: {
                    get: function () {
                      return this._anchorElement.href.replace(/\?$/, "");
                    },
                    set: function (e) {
                      (this._anchorElement.href = e),
                        this._updateSearchParams();
                    },
                    enumerable: !0,
                  },
                  pathname: {
                    get: function () {
                      return this._anchorElement.pathname.replace(
                        /(^\/?)/,
                        "/"
                      );
                    },
                    set: function (e) {
                      this._anchorElement.pathname = e;
                    },
                    enumerable: !0,
                  },
                  origin: {
                    get: function () {
                      var e = { "http:": 80, "https:": 443, "ftp:": 21 }[
                          this._anchorElement.protocol
                        ],
                        t =
                          this._anchorElement.port != e &&
                          "" !== this._anchorElement.port;
                      return (
                        this._anchorElement.protocol +
                        "//" +
                        this._anchorElement.hostname +
                        (t ? ":" + this._anchorElement.port : "")
                      );
                    },
                    enumerable: !0,
                  },
                  password: {
                    get: function () {
                      return "";
                    },
                    set: function (e) {},
                    enumerable: !0,
                  },
                  username: {
                    get: function () {
                      return "";
                    },
                    set: function (e) {},
                    enumerable: !0,
                  },
                }),
                (n.createObjectURL = function (e) {
                  return t.createObjectURL.apply(t, arguments);
                }),
                (n.revokeObjectURL = function (e) {
                  return t.revokeObjectURL.apply(t, arguments);
                }),
                (e.URL = n);
            })(),
          void 0 !== e.location && !("origin" in e.location))
        ) {
          var t = function () {
            return (
              e.location.protocol +
              "//" +
              e.location.hostname +
              (e.location.port ? ":" + e.location.port : "")
            );
          };
          try {
            Object.defineProperty(e.location, "origin", {
              get: t,
              enumerable: !0,
            });
          } catch (n) {
            setInterval(function () {
              e.location.origin = t();
            }, 100);
          }
        }
      })(
        void 0 !== n
          ? n
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof self
          ? self
          : n
      );
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var Ii =
      function (e, t) {
        return (Ii =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          })(e, t);
      };
    function Ri(e, t) {
      function n() {
        this.constructor = e;
      }
      Ii(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n()));
    }
    var ji,
      Li,
      Ni = function () {
        return (Ni =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var i in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
    function Ui(e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        i,
        o = n.call(e),
        s = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
          s.push(r.value);
      } catch (e) {
        i = { error: e };
      } finally {
        try {
          r && !r.done && (n = o.return) && n.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      return s;
    }
    function Mi() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e = e.concat(Ui(arguments[t]));
      return e;
    }
    !(function (e) {
      (e.Fatal = "fatal"),
        (e.Error = "error"),
        (e.Warning = "warning"),
        (e.Log = "log"),
        (e.Info = "info"),
        (e.Debug = "debug"),
        (e.Critical = "critical");
    })(ji || (ji = {})),
      (function (e) {
        e.fromString = function (t) {
          switch (t) {
            case "debug":
              return e.Debug;
            case "info":
              return e.Info;
            case "warn":
            case "warning":
              return e.Warning;
            case "error":
              return e.Error;
            case "fatal":
              return e.Fatal;
            case "critical":
              return e.Critical;
            case "log":
            default:
              return e.Log;
          }
        };
      })(ji || (ji = {})),
      (function (e) {
        (e.Unknown = "unknown"),
          (e.Skipped = "skipped"),
          (e.Success = "success"),
          (e.RateLimit = "rate_limit"),
          (e.Invalid = "invalid"),
          (e.Failed = "failed");
      })(Li || (Li = {})),
      (function (e) {
        e.fromHttpCode = function (t) {
          return t >= 200 && t < 300
            ? e.Success
            : 429 === t
            ? e.RateLimit
            : t >= 400 && t < 500
            ? e.Invalid
            : t >= 500
            ? e.Failed
            : e.Unknown;
        };
      })(Li || (Li = {}));
    var Di =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array
        ? function (e, t) {
            return (e.__proto__ = t), e;
          }
        : function (e, t) {
            for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
            return e;
          });
    var Fi = (function (e) {
      function t(t) {
        var n = this.constructor,
          r = e.call(this, t) || this;
        return (
          (r.message = t),
          (r.name = n.prototype.constructor.name),
          Di(r, n.prototype),
          r
        );
      }
      return Ri(t, e), t;
    })(Error);
    function qi(e) {
      switch (Object.prototype.toString.call(e)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
          return !0;
        default:
          return Gi(e, Error);
      }
    }
    function Bi(e) {
      return "[object ErrorEvent]" === Object.prototype.toString.call(e);
    }
    function $i(e) {
      return "[object DOMError]" === Object.prototype.toString.call(e);
    }
    function Hi(e) {
      return "[object String]" === Object.prototype.toString.call(e);
    }
    function Vi(e) {
      return null === e || ("object" != typeof e && "function" != typeof e);
    }
    function Wi(e) {
      return "[object Object]" === Object.prototype.toString.call(e);
    }
    function zi(e) {
      return "undefined" != typeof Event && Gi(e, Event);
    }
    function Yi(e) {
      return "undefined" != typeof Element && Gi(e, Element);
    }
    function Ki(e) {
      return Boolean(e && e.then && "function" == typeof e.then);
    }
    function Gi(e, t) {
      try {
        return e instanceof t;
      } catch (e) {
        return !1;
      }
    }
    var Xi = Ge("iterator"),
      Ji = !1;
    try {
      var Qi = 0,
        Zi = {
          next: function () {
            return { done: !!Qi++ };
          },
          return: function () {
            Ji = !0;
          },
        };
      (Zi[Xi] = function () {
        return this;
      }),
        Array.from(Zi, function () {
          throw 2;
        });
    } catch (e) {}
    var eo,
      to = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView,
      no = O.f,
      ro = o.Int8Array,
      io = ro && ro.prototype,
      oo = o.Uint8ClampedArray,
      so = oo && oo.prototype,
      ao = ro && bt(ro),
      lo = io && bt(io),
      co = Object.prototype,
      uo = co.isPrototypeOf,
      ho = Ge("toStringTag"),
      po = W("TYPED_ARRAY_TAG"),
      fo = to && !!Ft && "Opera" !== gn(o.opera),
      go = !1,
      mo = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8,
      },
      yo = function (e) {
        return v(e) && _(mo, gn(e));
      };
    for (eo in mo) o[eo] || (fo = !1);
    if (
      (!fo || "function" != typeof ao || ao === Function.prototype) &&
      ((ao = function () {
        throw TypeError("Incorrect invocation");
      }),
      fo)
    )
      for (eo in mo) o[eo] && Ft(o[eo], ao);
    if ((!fo || !lo || lo === co) && ((lo = ao.prototype), fo))
      for (eo in mo) o[eo] && Ft(o[eo].prototype, lo);
    if ((fo && bt(so) !== lo && Ft(so, lo), a && !_(lo, ho)))
      for (eo in ((go = !0),
      no(lo, ho, {
        get: function () {
          return v(this) ? this[po] : void 0;
        },
      }),
      mo))
        o[eo] && I(o[eo], po, eo);
    var vo = {
        NATIVE_ARRAY_BUFFER_VIEWS: fo,
        TYPED_ARRAY_TAG: go && po,
        aTypedArray: function (e) {
          if (yo(e)) return e;
          throw TypeError("Target is not a typed array");
        },
        aTypedArrayConstructor: function (e) {
          if (Ft) {
            if (uo.call(ao, e)) return e;
          } else
            for (var t in mo)
              if (_(mo, eo)) {
                var n = o[t];
                if (n && (e === n || uo.call(n, e))) return e;
              }
          throw TypeError("Target is not a typed array constructor");
        },
        exportTypedArrayMethod: function (e, t, n) {
          if (a) {
            if (n)
              for (var r in mo) {
                var i = o[r];
                i && _(i.prototype, e) && delete i.prototype[e];
              }
            (lo[e] && !n) || ne(lo, e, n ? t : (fo && io[e]) || t);
          }
        },
        exportTypedArrayStaticMethod: function (e, t, n) {
          var r, i;
          if (a) {
            if (Ft) {
              if (n) for (r in mo) (i = o[r]) && _(i, e) && delete i[e];
              if (ao[e] && !n) return;
              try {
                return ne(ao, e, n ? t : (fo && ro[e]) || t);
              } catch (e) {}
            }
            for (r in mo) !(i = o[r]) || (i[e] && !n) || ne(i, e, t);
          }
        },
        isView: function (e) {
          var t = gn(e);
          return "DataView" === t || _(mo, t);
        },
        isTypedArray: yo,
        TypedArray: ao,
        TypedArrayPrototype: lo,
      },
      bo = vo.NATIVE_ARRAY_BUFFER_VIEWS,
      wo = o.ArrayBuffer,
      _o = o.Int8Array,
      Eo =
        !bo ||
        !s(function () {
          _o(1);
        }) ||
        !s(function () {
          new _o(-1);
        }) ||
        !(function (e, t) {
          if (!t && !Ji) return !1;
          var n = !1;
          try {
            var r = {};
            (r[Xi] = function () {
              return {
                next: function () {
                  return { done: (n = !0) };
                },
              };
            }),
              e(r);
          } catch (e) {}
          return n;
        })(function (e) {
          new _o(), new _o(null), new _o(1.5), new _o(e);
        }, !0) ||
        s(function () {
          return 1 !== new _o(new wo(2), 1, void 0).length;
        }),
      ko = function (e) {
        if (void 0 === e) return 0;
        var t = le(e),
          n = ue(t);
        if (t !== n) throw RangeError("Wrong length or index");
        return n;
      },
      So = 1 / 0,
      To = Math.abs,
      xo = Math.pow,
      Ao = Math.floor,
      Co = Math.log,
      Po = Math.LN2,
      Oo = function (e, t, n) {
        var r,
          i,
          o,
          s = new Array(n),
          a = 8 * n - t - 1,
          l = (1 << a) - 1,
          c = l >> 1,
          u = 23 === t ? xo(2, -24) - xo(2, -77) : 0,
          h = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0,
          p = 0;
        for (
          (e = To(e)) != e || e === So
            ? ((i = e != e ? 1 : 0), (r = l))
            : ((r = Ao(Co(e) / Po)),
              e * (o = xo(2, -r)) < 1 && (r--, (o *= 2)),
              (e += r + c >= 1 ? u / o : u * xo(2, 1 - c)) * o >= 2 &&
                (r++, (o /= 2)),
              r + c >= l
                ? ((i = 0), (r = l))
                : r + c >= 1
                ? ((i = (e * o - 1) * xo(2, t)), (r += c))
                : ((i = e * xo(2, c - 1) * xo(2, t)), (r = 0)));
          t >= 8;
          s[p++] = 255 & i, i /= 256, t -= 8
        );
        for (
          r = (r << t) | i, a += t;
          a > 0;
          s[p++] = 255 & r, r /= 256, a -= 8
        );
        return (s[--p] |= 128 * h), s;
      },
      Io = function (e, t) {
        var n,
          r = e.length,
          i = 8 * r - t - 1,
          o = (1 << i) - 1,
          s = o >> 1,
          a = i - 7,
          l = r - 1,
          c = e[l--],
          u = 127 & c;
        for (c >>= 7; a > 0; u = 256 * u + e[l], l--, a -= 8);
        for (
          n = u & ((1 << -a) - 1), u >>= -a, a += t;
          a > 0;
          n = 256 * n + e[l], l--, a -= 8
        );
        if (0 === u) u = 1 - s;
        else {
          if (u === o) return n ? NaN : c ? -1 / 0 : So;
          (n += xo(2, t)), (u -= s);
        }
        return (c ? -1 : 1) * n * xo(2, u - t);
      },
      Ro = function (e) {
        for (
          var t = nt(this),
            n = ue(t.length),
            r = arguments.length,
            i = de(r > 1 ? arguments[1] : void 0, n),
            o = r > 2 ? arguments[2] : void 0,
            s = void 0 === o ? n : de(o, n);
          s > i;

        )
          t[i++] = e;
        return t;
      },
      jo = be.f,
      Lo = O.f,
      No = te.get,
      Uo = te.set,
      Mo = "ArrayBuffer",
      Do = "DataView",
      Fo = "Wrong index",
      qo = o.ArrayBuffer,
      Bo = qo,
      $o = o.DataView,
      Ho = $o && $o.prototype,
      Vo = Object.prototype,
      Wo = o.RangeError,
      zo = Oo,
      Yo = Io,
      Ko = function (e) {
        return [255 & e];
      },
      Go = function (e) {
        return [255 & e, (e >> 8) & 255];
      },
      Xo = function (e) {
        return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
      },
      Jo = function (e) {
        return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
      },
      Qo = function (e) {
        return zo(e, 23, 4);
      },
      Zo = function (e) {
        return zo(e, 52, 8);
      },
      es = function (e, t) {
        Lo(e.prototype, t, {
          get: function () {
            return No(this)[t];
          },
        });
      },
      ts = function (e, t, n, r) {
        var i = ko(n),
          o = No(e);
        if (i + t > o.byteLength) throw Wo(Fo);
        var s = No(o.buffer).bytes,
          a = i + o.byteOffset,
          l = s.slice(a, a + t);
        return r ? l : l.reverse();
      },
      ns = function (e, t, n, r, i, o) {
        var s = ko(n),
          a = No(e);
        if (s + t > a.byteLength) throw Wo(Fo);
        for (
          var l = No(a.buffer).bytes, c = s + a.byteOffset, u = r(+i), h = 0;
          h < t;
          h++
        )
          l[c + h] = u[o ? h : t - h - 1];
      };
    if (to) {
      if (
        !s(function () {
          qo(1);
        }) ||
        !s(function () {
          new qo(-1);
        }) ||
        s(function () {
          return new qo(), new qo(1.5), new qo(NaN), qo.name != Mo;
        })
      ) {
        for (
          var rs,
            is = ((Bo = function (e) {
              return en(this, Bo), new qo(ko(e));
            }).prototype = qo.prototype),
            os = jo(qo),
            ss = 0;
          os.length > ss;

        )
          (rs = os[ss++]) in Bo || I(Bo, rs, qo[rs]);
        is.constructor = Bo;
      }
      Ft && bt(Ho) !== Vo && Ft(Ho, Vo);
      var as = new $o(new Bo(2)),
        ls = Ho.setInt8;
      as.setInt8(0, 2147483648),
        as.setInt8(1, 2147483649),
        (!as.getInt8(0) && as.getInt8(1)) ||
          Ln(
            Ho,
            {
              setInt8: function (e, t) {
                ls.call(this, e, (t << 24) >> 24);
              },
              setUint8: function (e, t) {
                ls.call(this, e, (t << 24) >> 24);
              },
            },
            { unsafe: !0 }
          );
    } else
      (Bo = function (e) {
        en(this, Bo, Mo);
        var t = ko(e);
        Uo(this, { bytes: Ro.call(new Array(t), 0), byteLength: t }),
          a || (this.byteLength = t);
      }),
        ($o = function (e, t, n) {
          en(this, $o, Do), en(e, Bo, Do);
          var r = No(e).byteLength,
            i = le(t);
          if (i < 0 || i > r) throw Wo("Wrong offset");
          if (i + (n = void 0 === n ? r - i : ue(n)) > r)
            throw Wo("Wrong length");
          Uo(this, { buffer: e, byteLength: n, byteOffset: i }),
            a ||
              ((this.buffer = e), (this.byteLength = n), (this.byteOffset = i));
        }),
        a &&
          (es(Bo, "byteLength"),
          es($o, "buffer"),
          es($o, "byteLength"),
          es($o, "byteOffset")),
        Ln($o.prototype, {
          getInt8: function (e) {
            return (ts(this, 1, e)[0] << 24) >> 24;
          },
          getUint8: function (e) {
            return ts(this, 1, e)[0];
          },
          getInt16: function (e) {
            var t = ts(
              this,
              2,
              e,
              arguments.length > 1 ? arguments[1] : void 0
            );
            return (((t[1] << 8) | t[0]) << 16) >> 16;
          },
          getUint16: function (e) {
            var t = ts(
              this,
              2,
              e,
              arguments.length > 1 ? arguments[1] : void 0
            );
            return (t[1] << 8) | t[0];
          },
          getInt32: function (e) {
            return Jo(
              ts(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)
            );
          },
          getUint32: function (e) {
            return (
              Jo(
                ts(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)
              ) >>> 0
            );
          },
          getFloat32: function (e) {
            return Yo(
              ts(this, 4, e, arguments.length > 1 ? arguments[1] : void 0),
              23
            );
          },
          getFloat64: function (e) {
            return Yo(
              ts(this, 8, e, arguments.length > 1 ? arguments[1] : void 0),
              52
            );
          },
          setInt8: function (e, t) {
            ns(this, 1, e, Ko, t);
          },
          setUint8: function (e, t) {
            ns(this, 1, e, Ko, t);
          },
          setInt16: function (e, t) {
            ns(this, 2, e, Go, t, arguments.length > 2 ? arguments[2] : void 0);
          },
          setUint16: function (e, t) {
            ns(this, 2, e, Go, t, arguments.length > 2 ? arguments[2] : void 0);
          },
          setInt32: function (e, t) {
            ns(this, 4, e, Xo, t, arguments.length > 2 ? arguments[2] : void 0);
          },
          setUint32: function (e, t) {
            ns(this, 4, e, Xo, t, arguments.length > 2 ? arguments[2] : void 0);
          },
          setFloat32: function (e, t) {
            ns(this, 4, e, Qo, t, arguments.length > 2 ? arguments[2] : void 0);
          },
          setFloat64: function (e, t) {
            ns(this, 8, e, Zo, t, arguments.length > 2 ? arguments[2] : void 0);
          },
        });
    Lt(Bo, Mo), Lt($o, Do);
    var cs = { ArrayBuffer: Bo, DataView: $o },
      us = function (e, t) {
        var n = (function (e) {
          var t = le(e);
          if (t < 0) throw RangeError("The argument can't be less than 0");
          return t;
        })(e);
        if (n % t) throw RangeError("Wrong offset");
        return n;
      },
      hs = vo.aTypedArrayConstructor,
      ps = function (e) {
        var t,
          n,
          r,
          i,
          o,
          s,
          a = nt(e),
          l = arguments.length,
          c = l > 1 ? arguments[1] : void 0,
          u = void 0 !== c,
          h = yn(a);
        if (null != h && !cn(h))
          for (s = (o = h.call(a)).next, a = []; !(i = s.call(o)).done; )
            a.push(i.value);
        for (
          u && l > 2 && (c = on(c, arguments[2], 2)),
            n = ue(a.length),
            r = new (hs(this))(n),
            t = 0;
          n > t;
          t++
        )
          r[t] = u ? c(a[t], t) : a[t];
        return r;
      },
      ds =
        Array.isArray ||
        function (e) {
          return "Array" == d(e);
        },
      fs = Ge("species"),
      gs = function (e, t) {
        var n;
        return (
          ds(e) &&
            ("function" != typeof (n = e.constructor) ||
            (n !== Array && !ds(n.prototype))
              ? v(n) && null === (n = n[fs]) && (n = void 0)
              : (n = void 0)),
          new (void 0 === n ? Array : n)(0 === t ? 0 : t)
        );
      },
      ms = [].push,
      ys = function (e) {
        var t = 1 == e,
          n = 2 == e,
          r = 3 == e,
          i = 4 == e,
          o = 6 == e,
          s = 5 == e || o;
        return function (a, l, c, u) {
          for (
            var h,
              p,
              d = nt(a),
              f = g(d),
              m = on(l, c, 3),
              y = ue(f.length),
              v = 0,
              b = u || gs,
              w = t ? b(a, y) : n ? b(a, 0) : void 0;
            y > v;
            v++
          )
            if ((s || v in f) && ((p = m((h = f[v]), v, d)), e))
              if (t) w[v] = p;
              else if (p)
                switch (e) {
                  case 3:
                    return !0;
                  case 5:
                    return h;
                  case 6:
                    return v;
                  case 2:
                    ms.call(w, h);
                }
              else if (i) return !1;
          return o ? -1 : r || i ? i : w;
        };
      },
      vs = {
        forEach: ys(0),
        map: ys(1),
        filter: ys(2),
        some: ys(3),
        every: ys(4),
        find: ys(5),
        findIndex: ys(6),
      },
      bs = Ge("species");
    function ws(e, t) {
      return (
        void 0 === t && (t = 0),
        "string" != typeof e || 0 === t || e.length <= t
          ? e
          : e.substr(0, t) + "..."
      );
    }
    function _s(e, t) {
      if (!Array.isArray(e)) return "";
      for (var n = [], r = 0; r < e.length; r++) {
        var i = e[r];
        try {
          n.push(String(i));
        } catch (e) {
          n.push("[value cannot be serialized]");
        }
      }
      return n.join(t);
    }
    function Es(e, t) {
      return (
        !!Hi(e) &&
        ((n = t),
        "[object RegExp]" === Object.prototype.toString.call(n)
          ? t.test(e)
          : "string" == typeof t && -1 !== e.indexOf(t))
      );
      var n;
    }
    function ks() {
      return (
        "[object process]" ===
        Object.prototype.toString.call(
          "undefined" != typeof process ? process : 0
        )
      );
    }
    r(function (e) {
      var t = be.f,
        n = vs.forEach,
        r = te.get,
        i = te.set,
        s = O.f,
        l = A.f,
        c = Math.round,
        u = o.RangeError,
        p = cs.ArrayBuffer,
        d = cs.DataView,
        f = vo.NATIVE_ARRAY_BUFFER_VIEWS,
        g = vo.TYPED_ARRAY_TAG,
        m = vo.TypedArray,
        y = vo.TypedArrayPrototype,
        w = vo.aTypedArrayConstructor,
        E = vo.isTypedArray,
        k = "BYTES_PER_ELEMENT",
        S = "Wrong length",
        T = function (e, t) {
          for (var n = 0, r = t.length, i = new (w(e))(r); r > n; )
            i[n] = t[n++];
          return i;
        },
        x = function (e, t) {
          s(e, t, {
            get: function () {
              return r(this)[t];
            },
          });
        },
        C = function (e) {
          var t;
          return (
            e instanceof p ||
            "ArrayBuffer" == (t = gn(e)) ||
            "SharedArrayBuffer" == t
          );
        },
        P = function (e, t) {
          return (
            E(e) && "symbol" != typeof t && t in e && String(+t) == String(t)
          );
        },
        R = function (e, t) {
          return P(e, (t = b(t, !0))) ? h(2, e[t]) : l(e, t);
        },
        j = function (e, t, n) {
          return !(P(e, (t = b(t, !0))) && v(n) && _(n, "value")) ||
            _(n, "get") ||
            _(n, "set") ||
            n.configurable ||
            (_(n, "writable") && !n.writable) ||
            (_(n, "enumerable") && !n.enumerable)
            ? s(e, t, n)
            : ((e[t] = n.value), e);
        };
      a
        ? (f ||
            ((A.f = R),
            (O.f = j),
            x(y, "buffer"),
            x(y, "byteOffset"),
            x(y, "byteLength"),
            x(y, "length")),
          Ie(
            { target: "Object", stat: !0, forced: !f },
            { getOwnPropertyDescriptor: R, defineProperty: j }
          ),
          (e.exports = function (e, l, h) {
            var b = e.match(/\d+$/)[0] / 8,
              w = e + (h ? "Clamped" : "") + "Array",
              _ = "get" + e,
              x = "set" + e,
              A = o[w],
              P = A,
              R = P && P.prototype,
              j = {},
              L = function (e, t) {
                s(e, t, {
                  get: function () {
                    return (function (e, t) {
                      var n = r(e);
                      return n.view[_](t * b + n.byteOffset, !0);
                    })(this, t);
                  },
                  set: function (e) {
                    return (function (e, t, n) {
                      var i = r(e);
                      h && (n = (n = c(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n),
                        i.view[x](t * b + i.byteOffset, n, !0);
                    })(this, t, e);
                  },
                  enumerable: !0,
                });
              };
            f
              ? Eo &&
                ((P = l(function (e, t, n, r) {
                  return (
                    en(e, P, w),
                    (function (e, t, n) {
                      var r, i;
                      return (
                        Ft &&
                          "function" == typeof (r = t.constructor) &&
                          r !== n &&
                          v((i = r.prototype)) &&
                          i !== n.prototype &&
                          Ft(e, i),
                        e
                      );
                    })(
                      v(t)
                        ? C(t)
                          ? void 0 !== r
                            ? new A(t, us(n, b), r)
                            : void 0 !== n
                            ? new A(t, us(n, b))
                            : new A(t)
                          : E(t)
                          ? T(P, t)
                          : ps.call(P, t)
                        : new A(ko(t)),
                      e,
                      P
                    )
                  );
                })),
                Ft && Ft(P, m),
                n(t(A), function (e) {
                  e in P || I(P, e, A[e]);
                }),
                (P.prototype = R))
              : ((P = l(function (e, t, n, r) {
                  en(e, P, w);
                  var o,
                    s,
                    a,
                    l = 0,
                    c = 0;
                  if (v(t)) {
                    if (!C(t)) return E(t) ? T(P, t) : ps.call(P, t);
                    (o = t), (c = us(n, b));
                    var h = t.byteLength;
                    if (void 0 === r) {
                      if (h % b) throw u(S);
                      if ((s = h - c) < 0) throw u(S);
                    } else if ((s = ue(r) * b) + c > h) throw u(S);
                    a = s / b;
                  } else (a = ko(t)), (o = new p((s = a * b)));
                  for (
                    i(e, {
                      buffer: o,
                      byteOffset: c,
                      byteLength: s,
                      length: a,
                      view: new d(o),
                    });
                    l < a;

                  )
                    L(e, l++);
                })),
                Ft && Ft(P, m),
                (R = P.prototype = It(y))),
              R.constructor !== P && I(R, "constructor", P),
              g && I(R, g, w),
              (j[w] = P),
              Ie({ global: !0, forced: P != A, sham: !f }, j),
              k in P || I(P, k, b),
              k in R || I(R, k, b),
              (function (e) {
                var t = oe(e),
                  n = O.f;
                a &&
                  t &&
                  !t[bs] &&
                  n(t, bs, {
                    configurable: !0,
                    get: function () {
                      return this;
                    },
                  });
              })(w);
          }))
        : (e.exports = function () {});
    })("Uint16", function (e) {
      return function (t, n, r) {
        return e(this, t, n, r);
      };
    });
    var Ss = {};
    function Ts() {
      return ks()
        ? global
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof self
        ? self
        : Ss;
    }
    function xs() {
      var e = Ts(),
        t = e.crypto || e.msCrypto;
      if (void 0 !== t && t.getRandomValues) {
        var n = new Uint16Array(8);
        t.getRandomValues(n),
          (n[3] = (4095 & n[3]) | 16384),
          (n[4] = (16383 & n[4]) | 32768);
        var r = function (e) {
          for (var t = e.toString(16); t.length < 4; ) t = "0" + t;
          return t;
        };
        return (
          r(n[0]) +
          r(n[1]) +
          r(n[2]) +
          r(n[3]) +
          r(n[4]) +
          r(n[5]) +
          r(n[6]) +
          r(n[7])
        );
      }
      return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var t = (16 * Math.random()) | 0;
        return ("x" === e ? t : (3 & t) | 8).toString(16);
      });
    }
    function As(e) {
      if (!e) return {};
      var t = e.match(
        /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
      );
      if (!t) return {};
      var n = t[6] || "",
        r = t[8] || "";
      return { host: t[4], path: t[5], protocol: t[2], relative: t[5] + n + r };
    }
    function Cs(e) {
      if (e.message) return e.message;
      if (e.exception && e.exception.values && e.exception.values[0]) {
        var t = e.exception.values[0];
        return t.type && t.value
          ? t.type + ": " + t.value
          : t.type || t.value || e.event_id || "<unknown>";
      }
      return e.event_id || "<unknown>";
    }
    function Ps(e) {
      var t = Ts();
      if (!("console" in t)) return e();
      var n = t.console,
        r = {};
      ["debug", "info", "warn", "error", "log", "assert"].forEach(function (e) {
        e in t.console &&
          n[e].__sentry_original__ &&
          ((r[e] = n[e]), (n[e] = n[e].__sentry_original__));
      });
      var i = e();
      return (
        Object.keys(r).forEach(function (e) {
          n[e] = r[e];
        }),
        i
      );
    }
    function Os(e, t, n) {
      (e.exception = e.exception || {}),
        (e.exception.values = e.exception.values || []),
        (e.exception.values[0] = e.exception.values[0] || {}),
        (e.exception.values[0].value = e.exception.values[0].value || t || ""),
        (e.exception.values[0].type =
          e.exception.values[0].type || n || "Error");
    }
    function Is(e, t) {
      void 0 === t && (t = {});
      try {
        (e.exception.values[0].mechanism =
          e.exception.values[0].mechanism || {}),
          Object.keys(t).forEach(function (n) {
            e.exception.values[0].mechanism[n] = t[n];
          });
      } catch (e) {}
    }
    function Rs(e) {
      try {
        for (
          var t = e, n = [], r = 0, i = 0, o = " > ".length, s = void 0;
          t &&
          r++ < 5 &&
          !(
            "html" === (s = js(t)) ||
            (r > 1 && i + n.length * o + s.length >= 80)
          );

        )
          n.push(s), (i += s.length), (t = t.parentNode);
        return n.reverse().join(" > ");
      } catch (e) {
        return "<unknown>";
      }
    }
    function js(e) {
      var t,
        n,
        r,
        i,
        o,
        s = e,
        a = [];
      if (!s || !s.tagName) return "";
      if (
        (a.push(s.tagName.toLowerCase()),
        s.id && a.push("#" + s.id),
        (t = s.className) && Hi(t))
      )
        for (n = t.split(/\s+/), o = 0; o < n.length; o++) a.push("." + n[o]);
      var l = ["type", "name", "title", "alt"];
      for (o = 0; o < l.length; o++)
        (r = l[o]),
          (i = s.getAttribute(r)) && a.push("[" + r + '="' + i + '"]');
      return a.join("");
    }
    var Ls = Date.now(),
      Ns = 0,
      Us = {
        now: function () {
          var e = Date.now() - Ls;
          return e < Ns && (e = Ns), (Ns = e), e;
        },
        timeOrigin: Ls,
      },
      Ms = (function () {
        if (ks())
          try {
            return ((e = module), (t = "perf_hooks"), e.require(t)).performance;
          } catch (e) {
            return Us;
          }
        var e,
          t,
          n = Ts().performance;
        return n && n.now
          ? (void 0 === n.timeOrigin &&
              (n.timeOrigin = (n.timing && n.timing.navigationStart) || Ls),
            n)
          : Us;
      })();
    function Ds() {
      return (Ms.timeOrigin + Ms.now()) / 1e3;
    }
    function Fs(e, t) {
      if (!t) return 6e4;
      var n = parseInt("" + t, 10);
      if (!isNaN(n)) return 1e3 * n;
      var r = Date.parse("" + t);
      return isNaN(r) ? 6e4 : r - e;
    }
    var qs = "<anonymous>";
    function Bs(e) {
      try {
        return (e && "function" == typeof e && e.name) || qs;
      } catch (e) {
        return qs;
      }
    }
    var $s = Ts(),
      Hs = "Sentry Logger ",
      Vs = (function () {
        function e() {
          this._enabled = !1;
        }
        return (
          (e.prototype.disable = function () {
            this._enabled = !1;
          }),
          (e.prototype.enable = function () {
            this._enabled = !0;
          }),
          (e.prototype.log = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._enabled &&
              Ps(function () {
                $s.console.log(Hs + "[Log]: " + e.join(" "));
              });
          }),
          (e.prototype.warn = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._enabled &&
              Ps(function () {
                $s.console.warn(Hs + "[Warn]: " + e.join(" "));
              });
          }),
          (e.prototype.error = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._enabled &&
              Ps(function () {
                $s.console.error(Hs + "[Error]: " + e.join(" "));
              });
          }),
          e
        );
      })();
    $s.__SENTRY__ = $s.__SENTRY__ || {};
    var Ws,
      zs = $s.__SENTRY__.logger || ($s.__SENTRY__.logger = new Vs()),
      Ys = (function () {
        function e() {
          (this._hasWeakSet = "function" == typeof WeakSet),
            (this._inner = this._hasWeakSet ? new WeakSet() : []);
        }
        return (
          (e.prototype.memoize = function (e) {
            if (this._hasWeakSet)
              return !!this._inner.has(e) || (this._inner.add(e), !1);
            for (var t = 0; t < this._inner.length; t++) {
              if (this._inner[t] === e) return !0;
            }
            return this._inner.push(e), !1;
          }),
          (e.prototype.unmemoize = function (e) {
            if (this._hasWeakSet) this._inner.delete(e);
            else
              for (var t = 0; t < this._inner.length; t++)
                if (this._inner[t] === e) {
                  this._inner.splice(t, 1);
                  break;
                }
          }),
          e
        );
      })();
    function Ks(e, t, n) {
      if (t in e) {
        var r = e[t],
          i = n(r);
        if ("function" == typeof i)
          try {
            (i.prototype = i.prototype || {}),
              Object.defineProperties(i, {
                __sentry_original__: { enumerable: !1, value: r },
              });
          } catch (e) {}
        e[t] = i;
      }
    }
    function Gs(e) {
      if (qi(e)) {
        var t = e,
          n = { message: t.message, name: t.name, stack: t.stack };
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        return n;
      }
      if (zi(e)) {
        var i = e,
          o = {};
        o.type = i.type;
        try {
          o.target = Yi(i.target)
            ? Rs(i.target)
            : Object.prototype.toString.call(i.target);
        } catch (e) {
          o.target = "<unknown>";
        }
        try {
          o.currentTarget = Yi(i.currentTarget)
            ? Rs(i.currentTarget)
            : Object.prototype.toString.call(i.currentTarget);
        } catch (e) {
          o.currentTarget = "<unknown>";
        }
        for (var r in ("undefined" != typeof CustomEvent &&
          Gi(e, CustomEvent) &&
          (o.detail = i.detail),
        i))
          Object.prototype.hasOwnProperty.call(i, r) && (o[r] = i);
        return o;
      }
      return e;
    }
    function Xs(e) {
      return (function (e) {
        return ~-encodeURI(e).split(/%..|./).length;
      })(JSON.stringify(e));
    }
    function Js(e, t, n) {
      void 0 === t && (t = 3), void 0 === n && (n = 102400);
      var r = ea(e, t);
      return Xs(r) > n ? Js(e, t - 1, n) : r;
    }
    function Qs(e, t) {
      return "domain" === t && e && "object" == typeof e && e._events
        ? "[Domain]"
        : "domainEmitter" === t
        ? "[DomainEmitter]"
        : "undefined" != typeof global && e === global
        ? "[Global]"
        : "undefined" != typeof window && e === window
        ? "[Window]"
        : "undefined" != typeof document && e === document
        ? "[Document]"
        : Wi((n = e)) &&
          "nativeEvent" in n &&
          "preventDefault" in n &&
          "stopPropagation" in n
        ? "[SyntheticEvent]"
        : "number" == typeof e && e != e
        ? "[NaN]"
        : void 0 === e
        ? "[undefined]"
        : "function" == typeof e
        ? "[Function: " + Bs(e) + "]"
        : e;
      var n;
    }
    function Zs(e, t, n, r) {
      if (
        (void 0 === n && (n = 1 / 0), void 0 === r && (r = new Ys()), 0 === n)
      )
        return (function (e) {
          var t = Object.prototype.toString.call(e);
          if ("string" == typeof e) return e;
          if ("[object Object]" === t) return "[Object]";
          if ("[object Array]" === t) return "[Array]";
          var n = Qs(e);
          return Vi(n) ? n : t;
        })(t);
      if (null != t && "function" == typeof t.toJSON) return t.toJSON();
      var i = Qs(t, e);
      if (Vi(i)) return i;
      var o = Gs(t),
        s = Array.isArray(t) ? [] : {};
      if (r.memoize(t)) return "[Circular ~]";
      for (var a in o)
        Object.prototype.hasOwnProperty.call(o, a) &&
          (s[a] = Zs(a, o[a], n - 1, r));
      return r.unmemoize(t), s;
    }
    function ea(e, t) {
      try {
        return JSON.parse(
          JSON.stringify(e, function (e, n) {
            return Zs(e, n, t);
          })
        );
      } catch (e) {
        return "**non-serializable**";
      }
    }
    function ta(e, t) {
      void 0 === t && (t = 40);
      var n = Object.keys(Gs(e));
      if ((n.sort(), !n.length)) return "[object has no keys]";
      if (n[0].length >= t) return ws(n[0], t);
      for (var r = n.length; r > 0; r--) {
        var i = n.slice(0, r).join(", ");
        if (!(i.length > t)) return r === n.length ? i : ws(i, t);
      }
      return "";
    }
    Ie(
      { target: "URL", proto: !0, enumerable: !0 },
      {
        toJSON: function () {
          return URL.prototype.toString.call(this);
        },
      }
    ),
      (function (e) {
        (e.PENDING = "PENDING"),
          (e.RESOLVED = "RESOLVED"),
          (e.REJECTED = "REJECTED");
      })(Ws || (Ws = {}));
    var na = (function () {
        function e(e) {
          var t = this;
          (this._state = Ws.PENDING),
            (this._handlers = []),
            (this._resolve = function (e) {
              t._setResult(Ws.RESOLVED, e);
            }),
            (this._reject = function (e) {
              t._setResult(Ws.REJECTED, e);
            }),
            (this._setResult = function (e, n) {
              t._state === Ws.PENDING &&
                (Ki(n)
                  ? n.then(t._resolve, t._reject)
                  : ((t._state = e), (t._value = n), t._executeHandlers()));
            }),
            (this._attachHandler = function (e) {
              (t._handlers = t._handlers.concat(e)), t._executeHandlers();
            }),
            (this._executeHandlers = function () {
              if (t._state !== Ws.PENDING) {
                var e = t._handlers.slice();
                (t._handlers = []),
                  e.forEach(function (e) {
                    e.done ||
                      (t._state === Ws.RESOLVED &&
                        e.onfulfilled &&
                        e.onfulfilled(t._value),
                      t._state === Ws.REJECTED &&
                        e.onrejected &&
                        e.onrejected(t._value),
                      (e.done = !0));
                  });
              }
            });
          try {
            e(this._resolve, this._reject);
          } catch (e) {
            this._reject(e);
          }
        }
        return (
          (e.resolve = function (t) {
            return new e(function (e) {
              e(t);
            });
          }),
          (e.reject = function (t) {
            return new e(function (e, n) {
              n(t);
            });
          }),
          (e.all = function (t) {
            return new e(function (n, r) {
              if (Array.isArray(t))
                if (0 !== t.length) {
                  var i = t.length,
                    o = [];
                  t.forEach(function (t, s) {
                    e.resolve(t)
                      .then(function (e) {
                        (o[s] = e), 0 === (i -= 1) && n(o);
                      })
                      .then(null, r);
                  });
                } else n([]);
              else r(new TypeError("Promise.all requires an array as input."));
            });
          }),
          (e.prototype.then = function (t, n) {
            var r = this;
            return new e(function (e, i) {
              r._attachHandler({
                done: !1,
                onfulfilled: function (n) {
                  if (t)
                    try {
                      return void e(t(n));
                    } catch (e) {
                      return void i(e);
                    }
                  else e(n);
                },
                onrejected: function (t) {
                  if (n)
                    try {
                      return void e(n(t));
                    } catch (e) {
                      return void i(e);
                    }
                  else i(t);
                },
              });
            });
          }),
          (e.prototype.catch = function (e) {
            return this.then(function (e) {
              return e;
            }, e);
          }),
          (e.prototype.finally = function (t) {
            var n = this;
            return new e(function (e, r) {
              var i, o;
              return n
                .then(
                  function (e) {
                    (o = !1), (i = e), t && t();
                  },
                  function (e) {
                    (o = !0), (i = e), t && t();
                  }
                )
                .then(function () {
                  o ? r(i) : e(i);
                });
            });
          }),
          (e.prototype.toString = function () {
            return "[object SyncPromise]";
          }),
          e
        );
      })(),
      ra = (function () {
        function e(e) {
          (this._limit = e), (this._buffer = []);
        }
        return (
          (e.prototype.isReady = function () {
            return void 0 === this._limit || this.length() < this._limit;
          }),
          (e.prototype.add = function (e) {
            var t = this;
            return this.isReady()
              ? (-1 === this._buffer.indexOf(e) && this._buffer.push(e),
                e
                  .then(function () {
                    return t.remove(e);
                  })
                  .then(null, function () {
                    return t.remove(e).then(null, function () {});
                  }),
                e)
              : na.reject(
                  new Fi("Not adding Promise due to buffer limit reached.")
                );
          }),
          (e.prototype.remove = function (e) {
            return this._buffer.splice(this._buffer.indexOf(e), 1)[0];
          }),
          (e.prototype.length = function () {
            return this._buffer.length;
          }),
          (e.prototype.drain = function (e) {
            var t = this;
            return new na(function (n) {
              var r = setTimeout(function () {
                e && e > 0 && n(!1);
              }, e);
              na.all(t._buffer)
                .then(function () {
                  clearTimeout(r), n(!0);
                })
                .then(null, function () {
                  n(!0);
                });
            });
          }),
          e
        );
      })();
    function ia() {
      if (!("fetch" in Ts())) return !1;
      try {
        return new Headers(), new Request(""), new Response(), !0;
      } catch (e) {
        return !1;
      }
    }
    function oa(e) {
      return (
        e &&
        /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
      );
    }
    function sa() {
      if (!ia()) return !1;
      try {
        return new Request("_", { referrerPolicy: "origin" }), !0;
      } catch (e) {
        return !1;
      }
    }
    var aa,
      la = Ts(),
      ca = {},
      ua = {};
    function ha(e) {
      if (!ua[e])
        switch (((ua[e] = !0), e)) {
          case "console":
            !(function () {
              if (!("console" in la)) return;
              ["debug", "info", "warn", "error", "log", "assert"].forEach(
                function (e) {
                  e in la.console &&
                    Ks(la.console, e, function (t) {
                      return function () {
                        for (var n = [], r = 0; r < arguments.length; r++)
                          n[r] = arguments[r];
                        da("console", { args: n, level: e }),
                          t && Function.prototype.apply.call(t, la.console, n);
                      };
                    });
                }
              );
            })();
            break;
          case "dom":
            !(function () {
              if (!("document" in la)) return;
              la.document.addEventListener(
                "click",
                ba("click", da.bind(null, "dom")),
                !1
              ),
                la.document.addEventListener(
                  "keypress",
                  wa(da.bind(null, "dom")),
                  !1
                ),
                ["EventTarget", "Node"].forEach(function (e) {
                  var t = la[e] && la[e].prototype;
                  t &&
                    t.hasOwnProperty &&
                    t.hasOwnProperty("addEventListener") &&
                    (Ks(t, "addEventListener", function (e) {
                      return function (t, n, r) {
                        return (
                          n && n.handleEvent
                            ? ("click" === t &&
                                Ks(n, "handleEvent", function (e) {
                                  return function (t) {
                                    return (
                                      ba("click", da.bind(null, "dom"))(t),
                                      e.call(this, t)
                                    );
                                  };
                                }),
                              "keypress" === t &&
                                Ks(n, "handleEvent", function (e) {
                                  return function (t) {
                                    return (
                                      wa(da.bind(null, "dom"))(t),
                                      e.call(this, t)
                                    );
                                  };
                                }))
                            : ("click" === t &&
                                ba("click", da.bind(null, "dom"), !0)(this),
                              "keypress" === t &&
                                wa(da.bind(null, "dom"))(this)),
                          e.call(this, t, n, r)
                        );
                      };
                    }),
                    Ks(t, "removeEventListener", function (e) {
                      return function (t, n, r) {
                        try {
                          e.call(this, t, n.__sentry_wrapped__, r);
                        } catch (e) {}
                        return e.call(this, t, n, r);
                      };
                    }));
                });
            })();
            break;
          case "xhr":
            !(function () {
              if (!("XMLHttpRequest" in la)) return;
              var e = XMLHttpRequest.prototype;
              Ks(e, "open", function (e) {
                return function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  var r = this,
                    i = t[1];
                  (r.__sentry_xhr__ = {
                    method: Hi(t[0]) ? t[0].toUpperCase() : t[0],
                    url: t[1],
                  }),
                    Hi(i) &&
                      "POST" === r.__sentry_xhr__.method &&
                      i.match(/sentry_key/) &&
                      (r.__sentry_own_request__ = !0);
                  var o = function () {
                    if (4 === r.readyState) {
                      try {
                        r.__sentry_xhr__ &&
                          (r.__sentry_xhr__.status_code = r.status);
                      } catch (e) {}
                      da("xhr", {
                        args: t,
                        endTimestamp: Date.now(),
                        startTimestamp: Date.now(),
                        xhr: r,
                      });
                    }
                  };
                  return (
                    "onreadystatechange" in r &&
                    "function" == typeof r.onreadystatechange
                      ? Ks(r, "onreadystatechange", function (e) {
                          return function () {
                            for (var t = [], n = 0; n < arguments.length; n++)
                              t[n] = arguments[n];
                            return o(), e.apply(r, t);
                          };
                        })
                      : r.addEventListener("readystatechange", o),
                    e.apply(r, t)
                  );
                };
              }),
                Ks(e, "send", function (e) {
                  return function () {
                    for (var t = [], n = 0; n < arguments.length; n++)
                      t[n] = arguments[n];
                    return (
                      da("xhr", {
                        args: t,
                        startTimestamp: Date.now(),
                        xhr: this,
                      }),
                      e.apply(this, t)
                    );
                  };
                });
            })();
            break;
          case "fetch":
            !(function () {
              if (
                !(function () {
                  if (!ia()) return !1;
                  var e = Ts();
                  if (oa(e.fetch)) return !0;
                  var t = !1,
                    n = e.document;
                  if (n && "function" == typeof n.createElement)
                    try {
                      var r = n.createElement("iframe");
                      (r.hidden = !0),
                        n.head.appendChild(r),
                        r.contentWindow &&
                          r.contentWindow.fetch &&
                          (t = oa(r.contentWindow.fetch)),
                        n.head.removeChild(r);
                    } catch (e) {
                      zs.warn(
                        "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                        e
                      );
                    }
                  return t;
                })()
              )
                return;
              Ks(la, "fetch", function (e) {
                return function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  var r = {
                    args: t,
                    fetchData: { method: fa(t), url: ga(t) },
                    startTimestamp: Date.now(),
                  };
                  return (
                    da("fetch", Ni({}, r)),
                    e.apply(la, t).then(
                      function (e) {
                        return (
                          da(
                            "fetch",
                            Ni(Ni({}, r), {
                              endTimestamp: Date.now(),
                              response: e,
                            })
                          ),
                          e
                        );
                      },
                      function (e) {
                        throw (
                          (da(
                            "fetch",
                            Ni(Ni({}, r), {
                              endTimestamp: Date.now(),
                              error: e,
                            })
                          ),
                          e)
                        );
                      }
                    )
                  );
                };
              });
            })();
            break;
          case "history":
            !(function () {
              if (
                !(function () {
                  var e = Ts(),
                    t = e.chrome,
                    n = t && t.app && t.app.runtime,
                    r =
                      "history" in e &&
                      !!e.history.pushState &&
                      !!e.history.replaceState;
                  return !n && r;
                })()
              )
                return;
              var e = la.onpopstate;
              function t(e) {
                return function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  var r = t.length > 2 ? t[2] : void 0;
                  if (r) {
                    var i = aa,
                      o = String(r);
                    (aa = o), da("history", { from: i, to: o });
                  }
                  return e.apply(this, t);
                };
              }
              (la.onpopstate = function () {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                var r = la.location.href,
                  i = aa;
                if (((aa = r), da("history", { from: i, to: r }), e))
                  return e.apply(this, t);
              }),
                Ks(la.history, "pushState", t),
                Ks(la.history, "replaceState", t);
            })();
            break;
          case "error":
            (_a = la.onerror),
              (la.onerror = function (e, t, n, r, i) {
                return (
                  da("error", { column: r, error: i, line: n, msg: e, url: t }),
                  !!_a && _a.apply(this, arguments)
                );
              });
            break;
          case "unhandledrejection":
            (Ea = la.onunhandledrejection),
              (la.onunhandledrejection = function (e) {
                return (
                  da("unhandledrejection", e), !Ea || Ea.apply(this, arguments)
                );
              });
            break;
          default:
            zs.warn("unknown instrumentation type:", e);
        }
    }
    function pa(e) {
      e &&
        "string" == typeof e.type &&
        "function" == typeof e.callback &&
        ((ca[e.type] = ca[e.type] || []),
        ca[e.type].push(e.callback),
        ha(e.type));
    }
    function da(e, t) {
      var n, r;
      if (e && ca[e])
        try {
          for (
            var i = (function (e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                  n = t && e[t],
                  r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length)
                  return {
                    next: function () {
                      return (
                        e && r >= e.length && (e = void 0),
                        { value: e && e[r++], done: !e }
                      );
                    },
                  };
                throw new TypeError(
                  t
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              })(ca[e] || []),
              o = i.next();
            !o.done;
            o = i.next()
          ) {
            var s = o.value;
            try {
              s(t);
            } catch (t) {
              zs.error(
                "Error while triggering instrumentation handler.\nType: " +
                  e +
                  "\nName: " +
                  Bs(s) +
                  "\nError: " +
                  t
              );
            }
          }
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            o && !o.done && (r = i.return) && r.call(i);
          } finally {
            if (n) throw n.error;
          }
        }
    }
    function fa(e) {
      return (
        void 0 === e && (e = []),
        "Request" in la && Gi(e[0], Request) && e[0].method
          ? String(e[0].method).toUpperCase()
          : e[1] && e[1].method
          ? String(e[1].method).toUpperCase()
          : "GET"
      );
    }
    function ga(e) {
      return (
        void 0 === e && (e = []),
        "string" == typeof e[0]
          ? e[0]
          : "Request" in la && Gi(e[0], Request)
          ? e[0].url
          : String(e[0])
      );
    }
    var ma,
      ya,
      va = 0;
    function ba(e, t, n) {
      return (
        void 0 === n && (n = !1),
        function (r) {
          (ma = void 0),
            r &&
              ya !== r &&
              ((ya = r),
              va && clearTimeout(va),
              n
                ? (va = setTimeout(function () {
                    t({ event: r, name: e });
                  }))
                : t({ event: r, name: e }));
        }
      );
    }
    function wa(e) {
      return function (t) {
        var n;
        try {
          n = t.target;
        } catch (e) {
          return;
        }
        var r = n && n.tagName;
        r &&
          ("INPUT" === r || "TEXTAREA" === r || n.isContentEditable) &&
          (ma || ba("input", e)(t),
          clearTimeout(ma),
          (ma = setTimeout(function () {
            ma = void 0;
          }, 1e3)));
      };
    }
    var _a = null;
    var Ea = null;
    var ka = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
      Sa = "Invalid Dsn",
      Ta = (function () {
        function e(e) {
          "string" == typeof e ? this._fromString(e) : this._fromComponents(e),
            this._validate();
        }
        return (
          (e.prototype.toString = function (e) {
            void 0 === e && (e = !1);
            var t = this,
              n = t.host,
              r = t.path,
              i = t.pass,
              o = t.port,
              s = t.projectId;
            return (
              t.protocol +
              "://" +
              t.user +
              (e && i ? ":" + i : "") +
              "@" +
              n +
              (o ? ":" + o : "") +
              "/" +
              (r ? r + "/" : r) +
              s
            );
          }),
          (e.prototype._fromString = function (e) {
            var t = ka.exec(e);
            if (!t) throw new Fi(Sa);
            var n = Ui(t.slice(1), 6),
              r = n[0],
              i = n[1],
              o = n[2],
              s = void 0 === o ? "" : o,
              a = n[3],
              l = n[4],
              c = void 0 === l ? "" : l,
              u = "",
              h = n[5],
              p = h.split("/");
            if (
              (p.length > 1 && ((u = p.slice(0, -1).join("/")), (h = p.pop())),
              h)
            ) {
              var d = h.match(/^\d+/);
              d && (h = d[0]);
            }
            this._fromComponents({
              host: a,
              pass: s,
              path: u,
              projectId: h,
              port: c,
              protocol: r,
              user: i,
            });
          }),
          (e.prototype._fromComponents = function (e) {
            (this.protocol = e.protocol),
              (this.user = e.user),
              (this.pass = e.pass || ""),
              (this.host = e.host),
              (this.port = e.port || ""),
              (this.path = e.path || ""),
              (this.projectId = e.projectId);
          }),
          (e.prototype._validate = function () {
            var e = this;
            if (
              (["protocol", "user", "host", "projectId"].forEach(function (t) {
                if (!e[t]) throw new Fi("Invalid Dsn: " + t + " missing");
              }),
              !this.projectId.match(/^\d+$/))
            )
              throw new Fi("Invalid Dsn: Invalid projectId " + this.projectId);
            if ("http" !== this.protocol && "https" !== this.protocol)
              throw new Fi("Invalid Dsn: Invalid protocol " + this.protocol);
            if (this.port && isNaN(parseInt(this.port, 10)))
              throw new Fi("Invalid Dsn: Invalid port " + this.port);
          }),
          e
        );
      })(),
      xa = (function () {
        function e() {
          (this._notifyingListeners = !1),
            (this._scopeListeners = []),
            (this._eventProcessors = []),
            (this._breadcrumbs = []),
            (this._user = {}),
            (this._tags = {}),
            (this._extra = {}),
            (this._contexts = {});
        }
        return (
          (e.clone = function (t) {
            var n = new e();
            return (
              t &&
                ((n._breadcrumbs = Mi(t._breadcrumbs)),
                (n._tags = Ni({}, t._tags)),
                (n._extra = Ni({}, t._extra)),
                (n._contexts = Ni({}, t._contexts)),
                (n._user = t._user),
                (n._level = t._level),
                (n._span = t._span),
                (n._transactionName = t._transactionName),
                (n._fingerprint = t._fingerprint),
                (n._eventProcessors = Mi(t._eventProcessors))),
              n
            );
          }),
          (e.prototype.addScopeListener = function (e) {
            this._scopeListeners.push(e);
          }),
          (e.prototype.addEventProcessor = function (e) {
            return this._eventProcessors.push(e), this;
          }),
          (e.prototype.setUser = function (e) {
            return (this._user = e || {}), this._notifyScopeListeners(), this;
          }),
          (e.prototype.setTags = function (e) {
            return (
              (this._tags = Ni(Ni({}, this._tags), e)),
              this._notifyScopeListeners(),
              this
            );
          }),
          (e.prototype.setTag = function (e, t) {
            var n;
            return (
              (this._tags = Ni(Ni({}, this._tags), (((n = {})[e] = t), n))),
              this._notifyScopeListeners(),
              this
            );
          }),
          (e.prototype.setExtras = function (e) {
            return (
              (this._extra = Ni(Ni({}, this._extra), e)),
              this._notifyScopeListeners(),
              this
            );
          }),
          (e.prototype.setExtra = function (e, t) {
            var n;
            return (
              (this._extra = Ni(Ni({}, this._extra), (((n = {})[e] = t), n))),
              this._notifyScopeListeners(),
              this
            );
          }),
          (e.prototype.setFingerprint = function (e) {
            return (this._fingerprint = e), this._notifyScopeListeners(), this;
          }),
          (e.prototype.setLevel = function (e) {
            return (this._level = e), this._notifyScopeListeners(), this;
          }),
          (e.prototype.setTransactionName = function (e) {
            return (
              (this._transactionName = e), this._notifyScopeListeners(), this
            );
          }),
          (e.prototype.setTransaction = function (e) {
            return this.setTransactionName(e);
          }),
          (e.prototype.setContext = function (e, t) {
            var n;
            return (
              (this._contexts = Ni(
                Ni({}, this._contexts),
                (((n = {})[e] = t), n)
              )),
              this._notifyScopeListeners(),
              this
            );
          }),
          (e.prototype.setSpan = function (e) {
            return (this._span = e), this._notifyScopeListeners(), this;
          }),
          (e.prototype.getSpan = function () {
            return this._span;
          }),
          (e.prototype.getTransaction = function () {
            var e = this.getSpan();
            if (e && e.spanRecorder && e.spanRecorder.spans[0])
              return e.spanRecorder.spans[0];
          }),
          (e.prototype.update = function (t) {
            if (!t) return this;
            if ("function" == typeof t) {
              var n = t(this);
              return n instanceof e ? n : this;
            }
            return (
              t instanceof e
                ? ((this._tags = Ni(Ni({}, this._tags), t._tags)),
                  (this._extra = Ni(Ni({}, this._extra), t._extra)),
                  (this._contexts = Ni(Ni({}, this._contexts), t._contexts)),
                  t._user && (this._user = t._user),
                  t._level && (this._level = t._level),
                  t._fingerprint && (this._fingerprint = t._fingerprint))
                : Wi(t) &&
                  ((t = t),
                  (this._tags = Ni(Ni({}, this._tags), t.tags)),
                  (this._extra = Ni(Ni({}, this._extra), t.extra)),
                  (this._contexts = Ni(Ni({}, this._contexts), t.contexts)),
                  t.user && (this._user = t.user),
                  t.level && (this._level = t.level),
                  t.fingerprint && (this._fingerprint = t.fingerprint)),
              this
            );
          }),
          (e.prototype.clear = function () {
            return (
              (this._breadcrumbs = []),
              (this._tags = {}),
              (this._extra = {}),
              (this._user = {}),
              (this._contexts = {}),
              (this._level = void 0),
              (this._transactionName = void 0),
              (this._fingerprint = void 0),
              (this._span = void 0),
              this._notifyScopeListeners(),
              this
            );
          }),
          (e.prototype.addBreadcrumb = function (e, t) {
            var n = Ni({ timestamp: Ds() }, e);
            return (
              (this._breadcrumbs =
                void 0 !== t && t >= 0
                  ? Mi(this._breadcrumbs, [n]).slice(-t)
                  : Mi(this._breadcrumbs, [n])),
              this._notifyScopeListeners(),
              this
            );
          }),
          (e.prototype.clearBreadcrumbs = function () {
            return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
          }),
          (e.prototype.applyToEvent = function (e, t) {
            return (
              this._extra &&
                Object.keys(this._extra).length &&
                (e.extra = Ni(Ni({}, this._extra), e.extra)),
              this._tags &&
                Object.keys(this._tags).length &&
                (e.tags = Ni(Ni({}, this._tags), e.tags)),
              this._user &&
                Object.keys(this._user).length &&
                (e.user = Ni(Ni({}, this._user), e.user)),
              this._contexts &&
                Object.keys(this._contexts).length &&
                (e.contexts = Ni(Ni({}, this._contexts), e.contexts)),
              this._level && (e.level = this._level),
              this._transactionName && (e.transaction = this._transactionName),
              this._span &&
                (e.contexts = Ni(
                  { trace: this._span.getTraceContext() },
                  e.contexts
                )),
              this._applyFingerprint(e),
              (e.breadcrumbs = Mi(e.breadcrumbs || [], this._breadcrumbs)),
              (e.breadcrumbs =
                e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0),
              this._notifyEventProcessors(Mi(Aa(), this._eventProcessors), e, t)
            );
          }),
          (e.prototype._notifyEventProcessors = function (e, t, n, r) {
            var i = this;
            return (
              void 0 === r && (r = 0),
              new na(function (o, s) {
                var a = e[r];
                if (null === t || "function" != typeof a) o(t);
                else {
                  var l = a(Ni({}, t), n);
                  Ki(l)
                    ? l
                        .then(function (t) {
                          return i
                            ._notifyEventProcessors(e, t, n, r + 1)
                            .then(o);
                        })
                        .then(null, s)
                    : i
                        ._notifyEventProcessors(e, l, n, r + 1)
                        .then(o)
                        .then(null, s);
                }
              })
            );
          }),
          (e.prototype._notifyScopeListeners = function () {
            var e = this;
            this._notifyingListeners ||
              ((this._notifyingListeners = !0),
              setTimeout(function () {
                e._scopeListeners.forEach(function (t) {
                  t(e);
                }),
                  (e._notifyingListeners = !1);
              }));
          }),
          (e.prototype._applyFingerprint = function (e) {
            (e.fingerprint = e.fingerprint
              ? Array.isArray(e.fingerprint)
                ? e.fingerprint
                : [e.fingerprint]
              : []),
              this._fingerprint &&
                (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
              e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
          }),
          e
        );
      })();
    function Aa() {
      var e = Ts();
      return (
        (e.__SENTRY__ = e.__SENTRY__ || {}),
        (e.__SENTRY__.globalEventProcessors =
          e.__SENTRY__.globalEventProcessors || []),
        e.__SENTRY__.globalEventProcessors
      );
    }
    function Ca(e) {
      Aa().push(e);
    }
    var Pa = (function () {
      function e(e, t, n) {
        void 0 === t && (t = new xa()),
          void 0 === n && (n = 3),
          (this._version = n),
          (this._stack = []),
          this._stack.push({ client: e, scope: t }),
          this.bindClient(e);
      }
      return (
        (e.prototype.isOlderThan = function (e) {
          return this._version < e;
        }),
        (e.prototype.bindClient = function (e) {
          (this.getStackTop().client = e),
            e && e.setupIntegrations && e.setupIntegrations();
        }),
        (e.prototype.pushScope = function () {
          var e = this.getStack(),
            t = e.length > 0 ? e[e.length - 1].scope : void 0,
            n = xa.clone(t);
          return (
            this.getStack().push({ client: this.getClient(), scope: n }), n
          );
        }),
        (e.prototype.popScope = function () {
          return void 0 !== this.getStack().pop();
        }),
        (e.prototype.withScope = function (e) {
          var t = this.pushScope();
          try {
            e(t);
          } finally {
            this.popScope();
          }
        }),
        (e.prototype.getClient = function () {
          return this.getStackTop().client;
        }),
        (e.prototype.getScope = function () {
          return this.getStackTop().scope;
        }),
        (e.prototype.getStack = function () {
          return this._stack;
        }),
        (e.prototype.getStackTop = function () {
          return this._stack[this._stack.length - 1];
        }),
        (e.prototype.captureException = function (e, t) {
          var n = (this._lastEventId = xs()),
            r = t;
          if (!t) {
            var i = void 0;
            try {
              throw new Error("Sentry syntheticException");
            } catch (e) {
              i = e;
            }
            r = { originalException: e, syntheticException: i };
          }
          return (
            this._invokeClient(
              "captureException",
              e,
              Ni(Ni({}, r), { event_id: n })
            ),
            n
          );
        }),
        (e.prototype.captureMessage = function (e, t, n) {
          var r = (this._lastEventId = xs()),
            i = n;
          if (!n) {
            var o = void 0;
            try {
              throw new Error(e);
            } catch (e) {
              o = e;
            }
            i = { originalException: e, syntheticException: o };
          }
          return (
            this._invokeClient(
              "captureMessage",
              e,
              t,
              Ni(Ni({}, i), { event_id: r })
            ),
            r
          );
        }),
        (e.prototype.captureEvent = function (e, t) {
          var n = (this._lastEventId = xs());
          return (
            this._invokeClient(
              "captureEvent",
              e,
              Ni(Ni({}, t), { event_id: n })
            ),
            n
          );
        }),
        (e.prototype.lastEventId = function () {
          return this._lastEventId;
        }),
        (e.prototype.addBreadcrumb = function (e, t) {
          var n = this.getStackTop();
          if (n.scope && n.client) {
            var r = (n.client.getOptions && n.client.getOptions()) || {},
              i = r.beforeBreadcrumb,
              o = void 0 === i ? null : i,
              s = r.maxBreadcrumbs,
              a = void 0 === s ? 100 : s;
            if (!(a <= 0)) {
              var l = Ds(),
                c = Ni({ timestamp: l }, e),
                u = o
                  ? Ps(function () {
                      return o(c, t);
                    })
                  : c;
              null !== u && n.scope.addBreadcrumb(u, Math.min(a, 100));
            }
          }
        }),
        (e.prototype.setUser = function (e) {
          var t = this.getStackTop();
          t.scope && t.scope.setUser(e);
        }),
        (e.prototype.setTags = function (e) {
          var t = this.getStackTop();
          t.scope && t.scope.setTags(e);
        }),
        (e.prototype.setExtras = function (e) {
          var t = this.getStackTop();
          t.scope && t.scope.setExtras(e);
        }),
        (e.prototype.setTag = function (e, t) {
          var n = this.getStackTop();
          n.scope && n.scope.setTag(e, t);
        }),
        (e.prototype.setExtra = function (e, t) {
          var n = this.getStackTop();
          n.scope && n.scope.setExtra(e, t);
        }),
        (e.prototype.setContext = function (e, t) {
          var n = this.getStackTop();
          n.scope && n.scope.setContext(e, t);
        }),
        (e.prototype.configureScope = function (e) {
          var t = this.getStackTop();
          t.scope && t.client && e(t.scope);
        }),
        (e.prototype.run = function (e) {
          var t = Ia(this);
          try {
            e(this);
          } finally {
            Ia(t);
          }
        }),
        (e.prototype.getIntegration = function (e) {
          var t = this.getClient();
          if (!t) return null;
          try {
            return t.getIntegration(e);
          } catch (t) {
            return (
              zs.warn(
                "Cannot retrieve integration " + e.id + " from the current Hub"
              ),
              null
            );
          }
        }),
        (e.prototype.startSpan = function (e) {
          return this._callExtensionMethod("startSpan", e);
        }),
        (e.prototype.startTransaction = function (e) {
          return this._callExtensionMethod("startTransaction", e);
        }),
        (e.prototype.traceHeaders = function () {
          return this._callExtensionMethod("traceHeaders");
        }),
        (e.prototype._invokeClient = function (e) {
          for (var t, n = [], r = 1; r < arguments.length; r++)
            n[r - 1] = arguments[r];
          var i = this.getStackTop();
          i &&
            i.client &&
            i.client[e] &&
            (t = i.client)[e].apply(t, Mi(n, [i.scope]));
        }),
        (e.prototype._callExtensionMethod = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          var r = Oa(),
            i = r.__SENTRY__;
          if (i && i.extensions && "function" == typeof i.extensions[e])
            return i.extensions[e].apply(this, t);
          zs.warn(
            "Extension method " + e + " couldn't be found, doing nothing."
          );
        }),
        e
      );
    })();
    function Oa() {
      var e = Ts();
      return (
        (e.__SENTRY__ = e.__SENTRY__ || { extensions: {}, hub: void 0 }), e
      );
    }
    function Ia(e) {
      var t = Oa(),
        n = La(t);
      return Na(t, e), n;
    }
    function Ra() {
      var e = Oa();
      return (
        (ja(e) && !La(e).isOlderThan(3)) || Na(e, new Pa()),
        ks()
          ? (function (e) {
              try {
                var t = "domain",
                  n = Oa().__SENTRY__;
                if (!n || !n.extensions || !n.extensions[t]) return La(e);
                var r = n.extensions[t].active;
                if (!r) return La(e);
                if (!ja(r) || La(r).isOlderThan(3)) {
                  var i = La(e).getStackTop();
                  Na(r, new Pa(i.client, xa.clone(i.scope)));
                }
                return La(r);
              } catch (t) {
                return La(e);
              }
            })(e)
          : La(e)
      );
    }
    function ja(e) {
      return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
    }
    function La(e) {
      return (
        (e && e.__SENTRY__ && e.__SENTRY__.hub) ||
          ((e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.hub = new Pa())),
        e.__SENTRY__.hub
      );
    }
    function Na(e, t) {
      return (
        !!e && ((e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.hub = t), !0)
      );
    }
    function Ua(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var r = Ra();
      if (r && r[e]) return r[e].apply(r, Mi(t));
      throw new Error(
        "No hub defined or " +
          e +
          " was not found on the hub, please open a bug report."
      );
    }
    function Ma(e, t) {
      var n;
      try {
        throw new Error("Sentry syntheticException");
      } catch (e) {
        n = e;
      }
      return Ua("captureException", e, {
        captureContext: t,
        originalException: e,
        syntheticException: n,
      });
    }
    function Da(e) {
      Ua("withScope", e);
    }
    var Fa = (function () {
        function e(e) {
          (this.dsn = e), (this._dsnObject = new Ta(e));
        }
        return (
          (e.prototype.getDsn = function () {
            return this._dsnObject;
          }),
          (e.prototype.getBaseApiEndpoint = function () {
            var e = this._dsnObject,
              t = e.protocol ? e.protocol + ":" : "",
              n = e.port ? ":" + e.port : "";
            return (
              t + "//" + e.host + n + (e.path ? "/" + e.path : "") + "/api/"
            );
          }),
          (e.prototype.getStoreEndpoint = function () {
            return this._getIngestEndpoint("store");
          }),
          (e.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
            return this.getStoreEndpoint() + "?" + this._encodedAuth();
          }),
          (e.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
            return this._getEnvelopeEndpoint() + "?" + this._encodedAuth();
          }),
          (e.prototype.getStoreEndpointPath = function () {
            var e = this._dsnObject;
            return (
              (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/"
            );
          }),
          (e.prototype.getRequestHeaders = function (e, t) {
            var n = this._dsnObject,
              r = ["Sentry sentry_version=7"];
            return (
              r.push("sentry_client=" + e + "/" + t),
              r.push("sentry_key=" + n.user),
              n.pass && r.push("sentry_secret=" + n.pass),
              {
                "Content-Type": "application/json",
                "X-Sentry-Auth": r.join(", "),
              }
            );
          }),
          (e.prototype.getReportDialogEndpoint = function (e) {
            void 0 === e && (e = {});
            var t = this._dsnObject,
              n = this.getBaseApiEndpoint() + "embed/error-page/",
              r = [];
            for (var i in (r.push("dsn=" + t.toString()), e))
              if ("user" === i) {
                if (!e.user) continue;
                e.user.name &&
                  r.push("name=" + encodeURIComponent(e.user.name)),
                  e.user.email &&
                    r.push("email=" + encodeURIComponent(e.user.email));
              } else
                r.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
            return r.length ? n + "?" + r.join("&") : n;
          }),
          (e.prototype._getEnvelopeEndpoint = function () {
            return this._getIngestEndpoint("envelope");
          }),
          (e.prototype._getIngestEndpoint = function (e) {
            return (
              "" +
              this.getBaseApiEndpoint() +
              this._dsnObject.projectId +
              "/" +
              e +
              "/"
            );
          }),
          (e.prototype._encodedAuth = function () {
            var e,
              t = { sentry_key: this._dsnObject.user, sentry_version: "7" };
            return (
              (e = t),
              Object.keys(e)
                .map(function (t) {
                  return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
                })
                .join("&")
            );
          }),
          e
        );
      })(),
      qa = [];
    function Ba(e) {
      var t = {};
      return (
        (function (e) {
          var t = (e.defaultIntegrations && Mi(e.defaultIntegrations)) || [],
            n = e.integrations,
            r = [];
          if (Array.isArray(n)) {
            var i = n.map(function (e) {
                return e.name;
              }),
              o = [];
            t.forEach(function (e) {
              -1 === i.indexOf(e.name) &&
                -1 === o.indexOf(e.name) &&
                (r.push(e), o.push(e.name));
            }),
              n.forEach(function (e) {
                -1 === o.indexOf(e.name) && (r.push(e), o.push(e.name));
              });
          } else
            "function" == typeof n
              ? ((r = n(t)), (r = Array.isArray(r) ? r : [r]))
              : (r = Mi(t));
          var s = r.map(function (e) {
              return e.name;
            }),
            a = "Debug";
          return (
            -1 !== s.indexOf(a) &&
              r.push.apply(r, Mi(r.splice(s.indexOf(a), 1))),
            r
          );
        })(e).forEach(function (e) {
          (t[e.name] = e),
            (function (e) {
              -1 === qa.indexOf(e.name) &&
                (e.setupOnce(Ca, Ra),
                qa.push(e.name),
                zs.log("Integration installed: " + e.name));
            })(e);
        }),
        t
      );
    }
    var $a,
      Ha = (function () {
        function e(e, t) {
          (this._integrations = {}),
            (this._processing = !1),
            (this._backend = new e(t)),
            (this._options = t),
            t.dsn && (this._dsn = new Ta(t.dsn));
        }
        return (
          (e.prototype.captureException = function (e, t, n) {
            var r = this,
              i = t && t.event_id;
            return (
              (this._processing = !0),
              this._getBackend()
                .eventFromException(e, t)
                .then(function (e) {
                  i = r.captureEvent(e, t, n);
                }),
              i
            );
          }),
          (e.prototype.captureMessage = function (e, t, n, r) {
            var i = this,
              o = n && n.event_id;
            return (
              (this._processing = !0),
              (Vi(e)
                ? this._getBackend().eventFromMessage("" + e, t, n)
                : this._getBackend().eventFromException(e, n)
              ).then(function (e) {
                o = i.captureEvent(e, n, r);
              }),
              o
            );
          }),
          (e.prototype.captureEvent = function (e, t, n) {
            var r = this,
              i = t && t.event_id;
            return (
              (this._processing = !0),
              this._processEvent(e, t, n)
                .then(function (e) {
                  (i = e && e.event_id), (r._processing = !1);
                })
                .then(null, function (e) {
                  zs.error(e), (r._processing = !1);
                }),
              i
            );
          }),
          (e.prototype.getDsn = function () {
            return this._dsn;
          }),
          (e.prototype.getOptions = function () {
            return this._options;
          }),
          (e.prototype.flush = function (e) {
            var t = this;
            return this._isClientProcessing(e).then(function (n) {
              return (
                clearInterval(n.interval),
                t
                  ._getBackend()
                  .getTransport()
                  .close(e)
                  .then(function (e) {
                    return n.ready && e;
                  })
              );
            });
          }),
          (e.prototype.close = function (e) {
            var t = this;
            return this.flush(e).then(function (e) {
              return (t.getOptions().enabled = !1), e;
            });
          }),
          (e.prototype.setupIntegrations = function () {
            this._isEnabled() && (this._integrations = Ba(this._options));
          }),
          (e.prototype.getIntegration = function (e) {
            try {
              return this._integrations[e.id] || null;
            } catch (t) {
              return (
                zs.warn(
                  "Cannot retrieve integration " +
                    e.id +
                    " from the current Client"
                ),
                null
              );
            }
          }),
          (e.prototype._isClientProcessing = function (e) {
            var t = this;
            return new na(function (n) {
              var r = 0,
                i = 0;
              clearInterval(i),
                (i = setInterval(function () {
                  t._processing
                    ? ((r += 1), e && r >= e && n({ interval: i, ready: !1 }))
                    : n({ interval: i, ready: !0 });
                }, 1));
            });
          }),
          (e.prototype._getBackend = function () {
            return this._backend;
          }),
          (e.prototype._isEnabled = function () {
            return !1 !== this.getOptions().enabled && void 0 !== this._dsn;
          }),
          (e.prototype._prepareEvent = function (e, t, n) {
            var r = this,
              i = this.getOptions().normalizeDepth,
              o = void 0 === i ? 3 : i,
              s = Ni(Ni({}, e), {
                event_id: e.event_id || (n && n.event_id ? n.event_id : xs()),
                timestamp: e.timestamp || Ds(),
              });
            this._applyClientOptions(s), this._applyIntegrationsMetadata(s);
            var a = t;
            n && n.captureContext && (a = xa.clone(a).update(n.captureContext));
            var l = na.resolve(s);
            return (
              a && (l = a.applyToEvent(s, n)),
              l.then(function (e) {
                return "number" == typeof o && o > 0
                  ? r._normalizeEvent(e, o)
                  : e;
              })
            );
          }),
          (e.prototype._normalizeEvent = function (e, t) {
            if (!e) return null;
            var n = Ni(
              Ni(
                Ni(
                  Ni(
                    Ni({}, e),
                    e.breadcrumbs && {
                      breadcrumbs: e.breadcrumbs.map(function (e) {
                        return Ni(Ni({}, e), e.data && { data: ea(e.data, t) });
                      }),
                    }
                  ),
                  e.user && { user: ea(e.user, t) }
                ),
                e.contexts && { contexts: ea(e.contexts, t) }
              ),
              e.extra && { extra: ea(e.extra, t) }
            );
            return (
              e.contexts &&
                e.contexts.trace &&
                (n.contexts.trace = e.contexts.trace),
              n
            );
          }),
          (e.prototype._applyClientOptions = function (e) {
            var t = this.getOptions(),
              n = t.environment,
              r = t.release,
              i = t.dist,
              o = t.maxValueLength,
              s = void 0 === o ? 250 : o;
            void 0 === e.environment && void 0 !== n && (e.environment = n),
              void 0 === e.release && void 0 !== r && (e.release = r),
              void 0 === e.dist && void 0 !== i && (e.dist = i),
              e.message && (e.message = ws(e.message, s));
            var a = e.exception && e.exception.values && e.exception.values[0];
            a && a.value && (a.value = ws(a.value, s));
            var l = e.request;
            l && l.url && (l.url = ws(l.url, s));
          }),
          (e.prototype._applyIntegrationsMetadata = function (e) {
            var t = e.sdk,
              n = Object.keys(this._integrations);
            t && n.length > 0 && (t.integrations = n);
          }),
          (e.prototype._sendEvent = function (e) {
            this._getBackend().sendEvent(e);
          }),
          (e.prototype._processEvent = function (e, t, n) {
            var r = this,
              i = this.getOptions(),
              o = i.beforeSend,
              s = i.sampleRate;
            if (!this._isEnabled())
              return na.reject("SDK not enabled, will not send event.");
            var a = "transaction" === e.type;
            return !a && "number" == typeof s && Math.random() > s
              ? na.reject("This event has been sampled, will not send event.")
              : new na(function (i, s) {
                  r._prepareEvent(e, n, t)
                    .then(function (e) {
                      if (null !== e) {
                        var n = e;
                        if (
                          (t && t.data && !0 === t.data.__sentry__) ||
                          !o ||
                          a
                        )
                          return r._sendEvent(n), void i(n);
                        var l = o(e, t);
                        if (void 0 === l)
                          zs.error(
                            "`beforeSend` method has to return `null` or a valid event."
                          );
                        else if (Ki(l)) r._handleAsyncBeforeSend(l, i, s);
                        else {
                          if (null === (n = l))
                            return (
                              zs.log(
                                "`beforeSend` returned `null`, will not send event."
                              ),
                              void i(null)
                            );
                          r._sendEvent(n), i(n);
                        }
                      } else s("An event processor returned null, will not send event.");
                    })
                    .then(null, function (e) {
                      r.captureException(e, {
                        data: { __sentry__: !0 },
                        originalException: e,
                      }),
                        s(
                          "Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " +
                            e
                        );
                    });
                });
          }),
          (e.prototype._handleAsyncBeforeSend = function (e, t, n) {
            var r = this;
            e.then(function (e) {
              null !== e
                ? (r._sendEvent(e), t(e))
                : n("`beforeSend` returned `null`, will not send event.");
            }).then(null, function (e) {
              n("beforeSend rejected with " + e);
            });
          }),
          e
        );
      })(),
      Va = (function () {
        function e() {}
        return (
          (e.prototype.sendEvent = function (e) {
            return na.resolve({
              reason:
                "NoopTransport: Event has been skipped because no Dsn is configured.",
              status: Li.Skipped,
            });
          }),
          (e.prototype.close = function (e) {
            return na.resolve(!0);
          }),
          e
        );
      })(),
      Wa = (function () {
        function e(e) {
          (this._options = e),
            this._options.dsn ||
              zs.warn("No DSN provided, backend will not do anything."),
            (this._transport = this._setupTransport());
        }
        return (
          (e.prototype.eventFromException = function (e, t) {
            throw new Fi(
              "Backend has to implement `eventFromException` method"
            );
          }),
          (e.prototype.eventFromMessage = function (e, t, n) {
            throw new Fi("Backend has to implement `eventFromMessage` method");
          }),
          (e.prototype.sendEvent = function (e) {
            this._transport.sendEvent(e).then(null, function (e) {
              zs.error("Error while sending event: " + e);
            });
          }),
          (e.prototype.getTransport = function () {
            return this._transport;
          }),
          (e.prototype._setupTransport = function () {
            return new Va();
          }),
          e
        );
      })();
    function za(e, t) {
      var n = "transaction" === e.type,
        r = {
          body: JSON.stringify(e),
          url: n
            ? t.getEnvelopeEndpointWithUrlEncodedAuth()
            : t.getStoreEndpointWithUrlEncodedAuth(),
        };
      if (n) {
        var i =
          JSON.stringify({
            event_id: e.event_id,
            sent_at: new Date(1e3 * Ds()).toISOString(),
          }) +
          "\n" +
          JSON.stringify({ type: e.type }) +
          "\n" +
          r.body;
        r.body = i;
      }
      return r;
    }
    var Ya = (function () {
        function e() {
          this.name = e.id;
        }
        return (
          (e.prototype.setupOnce = function () {
            ($a = Function.prototype.toString),
              (Function.prototype.toString = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                var n = this.__sentry_original__ || this;
                return $a.apply(n, e);
              });
          }),
          (e.id = "FunctionToString"),
          e
        );
      })(),
      Ka = [
        /^Script error\.?$/,
        /^Javascript error: Script error\.? on line 0$/,
      ],
      Ga = (function () {
        function e(t) {
          void 0 === t && (t = {}), (this._options = t), (this.name = e.id);
        }
        return (
          (e.prototype.setupOnce = function () {
            Ca(function (t) {
              var n = Ra();
              if (!n) return t;
              var r = n.getIntegration(e);
              if (r) {
                var i = n.getClient(),
                  o = i ? i.getOptions() : {},
                  s = r._mergeOptions(o);
                if (r._shouldDropEvent(t, s)) return null;
              }
              return t;
            });
          }),
          (e.prototype._shouldDropEvent = function (e, t) {
            return this._isSentryError(e, t)
              ? (zs.warn(
                  "Event dropped due to being internal Sentry Error.\nEvent: " +
                    Cs(e)
                ),
                !0)
              : this._isIgnoredError(e, t)
              ? (zs.warn(
                  "Event dropped due to being matched by `ignoreErrors` option.\nEvent: " +
                    Cs(e)
                ),
                !0)
              : this._isDeniedUrl(e, t)
              ? (zs.warn(
                  "Event dropped due to being matched by `denyUrls` option.\nEvent: " +
                    Cs(e) +
                    ".\nUrl: " +
                    this._getEventFilterUrl(e)
                ),
                !0)
              : !this._isAllowedUrl(e, t) &&
                (zs.warn(
                  "Event dropped due to not being matched by `allowUrls` option.\nEvent: " +
                    Cs(e) +
                    ".\nUrl: " +
                    this._getEventFilterUrl(e)
                ),
                !0);
          }),
          (e.prototype._isSentryError = function (e, t) {
            if (!t.ignoreInternal) return !1;
            try {
              return (
                (e &&
                  e.exception &&
                  e.exception.values &&
                  e.exception.values[0] &&
                  "SentryError" === e.exception.values[0].type) ||
                !1
              );
            } catch (e) {
              return !1;
            }
          }),
          (e.prototype._isIgnoredError = function (e, t) {
            return (
              !(!t.ignoreErrors || !t.ignoreErrors.length) &&
              this._getPossibleEventMessages(e).some(function (e) {
                return t.ignoreErrors.some(function (t) {
                  return Es(e, t);
                });
              })
            );
          }),
          (e.prototype._isDeniedUrl = function (e, t) {
            if (!t.denyUrls || !t.denyUrls.length) return !1;
            var n = this._getEventFilterUrl(e);
            return (
              !!n &&
              t.denyUrls.some(function (e) {
                return Es(n, e);
              })
            );
          }),
          (e.prototype._isAllowedUrl = function (e, t) {
            if (!t.allowUrls || !t.allowUrls.length) return !0;
            var n = this._getEventFilterUrl(e);
            return (
              !n ||
              t.allowUrls.some(function (e) {
                return Es(n, e);
              })
            );
          }),
          (e.prototype._mergeOptions = function (e) {
            return (
              void 0 === e && (e = {}),
              {
                allowUrls: Mi(
                  this._options.whitelistUrls || [],
                  this._options.allowUrls || [],
                  e.whitelistUrls || [],
                  e.allowUrls || []
                ),
                denyUrls: Mi(
                  this._options.blacklistUrls || [],
                  this._options.denyUrls || [],
                  e.blacklistUrls || [],
                  e.denyUrls || []
                ),
                ignoreErrors: Mi(
                  this._options.ignoreErrors || [],
                  e.ignoreErrors || [],
                  Ka
                ),
                ignoreInternal:
                  void 0 === this._options.ignoreInternal ||
                  this._options.ignoreInternal,
              }
            );
          }),
          (e.prototype._getPossibleEventMessages = function (e) {
            if (e.message) return [e.message];
            if (e.exception)
              try {
                var t = (e.exception.values && e.exception.values[0]) || {},
                  n = t.type,
                  r = void 0 === n ? "" : n,
                  i = t.value,
                  o = void 0 === i ? "" : i;
                return ["" + o, r + ": " + o];
              } catch (t) {
                return (
                  zs.error("Cannot extract message for event " + Cs(e)), []
                );
              }
            return [];
          }),
          (e.prototype._getEventFilterUrl = function (e) {
            try {
              if (e.stacktrace) {
                var t = e.stacktrace.frames;
                return (t && t[t.length - 1].filename) || null;
              }
              if (e.exception) {
                var n =
                  e.exception.values &&
                  e.exception.values[0].stacktrace &&
                  e.exception.values[0].stacktrace.frames;
                return (n && n[n.length - 1].filename) || null;
              }
              return null;
            } catch (t) {
              return zs.error("Cannot extract url for event " + Cs(e)), null;
            }
          }),
          (e.id = "InboundFilters"),
          e
        );
      })(),
      Xa = "?",
      Ja =
        /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      Qa =
        /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,
      Za =
        /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
      el = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      tl = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      nl = /Minified React error #\d+;/i;
    function rl(e) {
      var t = null,
        n = 0;
      e &&
        ("number" == typeof e.framesToPop
          ? (n = e.framesToPop)
          : nl.test(e.message) && (n = 1));
      try {
        if (
          (t = (function (e) {
            if (!e || !e.stacktrace) return null;
            for (
              var t,
                n = e.stacktrace,
                r =
                  / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
                i =
                  / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i,
                o = n.split("\n"),
                s = [],
                a = 0;
              a < o.length;
              a += 2
            ) {
              var l = null;
              (t = r.exec(o[a]))
                ? (l = {
                    url: t[2],
                    func: t[3],
                    args: [],
                    line: +t[1],
                    column: null,
                  })
                : (t = i.exec(o[a])) &&
                  (l = {
                    url: t[6],
                    func: t[3] || t[4],
                    args: t[5] ? t[5].split(",") : [],
                    line: +t[1],
                    column: +t[2],
                  }),
                l && (!l.func && l.line && (l.func = Xa), s.push(l));
            }
            if (!s.length) return null;
            return { message: ol(e), name: e.name, stack: s };
          })(e))
        )
          return il(t, n);
      } catch (e) {}
      try {
        if (
          (t = (function (e) {
            if (!e || !e.stack) return null;
            for (
              var t, n, r, i = [], o = e.stack.split("\n"), s = 0;
              s < o.length;
              ++s
            ) {
              if ((n = Ja.exec(o[s]))) {
                var a = n[2] && 0 === n[2].indexOf("native");
                n[2] &&
                  0 === n[2].indexOf("eval") &&
                  (t = tl.exec(n[2])) &&
                  ((n[2] = t[1]), (n[3] = t[2]), (n[4] = t[3])),
                  (r = {
                    url:
                      n[2] && 0 === n[2].indexOf("address at ")
                        ? n[2].substr("address at ".length)
                        : n[2],
                    func: n[1] || Xa,
                    args: a ? [n[2]] : [],
                    line: n[3] ? +n[3] : null,
                    column: n[4] ? +n[4] : null,
                  });
              } else if ((n = Za.exec(o[s])))
                r = {
                  url: n[2],
                  func: n[1] || Xa,
                  args: [],
                  line: +n[3],
                  column: n[4] ? +n[4] : null,
                };
              else {
                if (!(n = Qa.exec(o[s]))) continue;
                n[3] && n[3].indexOf(" > eval") > -1 && (t = el.exec(n[3]))
                  ? ((n[1] = n[1] || "eval"),
                    (n[3] = t[1]),
                    (n[4] = t[2]),
                    (n[5] = ""))
                  : 0 !== s ||
                    n[5] ||
                    void 0 === e.columnNumber ||
                    (i[0].column = e.columnNumber + 1),
                  (r = {
                    url: n[3],
                    func: n[1] || Xa,
                    args: n[2] ? n[2].split(",") : [],
                    line: n[4] ? +n[4] : null,
                    column: n[5] ? +n[5] : null,
                  });
              }
              !r.func && r.line && (r.func = Xa), i.push(r);
            }
            if (!i.length) return null;
            return { message: ol(e), name: e.name, stack: i };
          })(e))
        )
          return il(t, n);
      } catch (e) {}
      return { message: ol(e), name: e && e.name, stack: [], failed: !0 };
    }
    function il(e, t) {
      try {
        return Ni(Ni({}, e), { stack: e.stack.slice(t) });
      } catch (t) {
        return e;
      }
    }
    function ol(e) {
      var t = e && e.message;
      return t
        ? t.error && "string" == typeof t.error.message
          ? t.error.message
          : t
        : "No error message";
    }
    function sl(e) {
      var t = ll(e.stack),
        n = { type: e.name, value: e.message };
      return (
        t && t.length && (n.stacktrace = { frames: t }),
        void 0 === n.type &&
          "" === n.value &&
          (n.value = "Unrecoverable error caught"),
        n
      );
    }
    function al(e) {
      return { exception: { values: [sl(e)] } };
    }
    function ll(e) {
      if (!e || !e.length) return [];
      var t = e,
        n = t[0].func || "",
        r = t[t.length - 1].func || "";
      return (
        (-1 === n.indexOf("captureMessage") &&
          -1 === n.indexOf("captureException")) ||
          (t = t.slice(1)),
        -1 !== r.indexOf("sentryWrapped") && (t = t.slice(0, -1)),
        t
          .slice(0, 50)
          .map(function (e) {
            return {
              colno: null === e.column ? void 0 : e.column,
              filename: e.url || t[0].url,
              function: e.func || "?",
              in_app: !0,
              lineno: null === e.line ? void 0 : e.line,
            };
          })
          .reverse()
      );
    }
    function cl(e, t, n) {
      var r, i;
      if ((void 0 === n && (n = {}), Bi(e) && e.error))
        return (r = al(rl((e = e.error))));
      if (
        $i(e) ||
        ((i = e), "[object DOMException]" === Object.prototype.toString.call(i))
      ) {
        var o = e,
          s = o.name || ($i(o) ? "DOMError" : "DOMException"),
          a = o.message ? s + ": " + o.message : s;
        return Os((r = ul(a, t, n)), a), r;
      }
      return qi(e)
        ? (r = al(rl(e)))
        : Wi(e) || zi(e)
        ? (Is(
            (r = (function (e, t, n) {
              var r = {
                exception: {
                  values: [
                    {
                      type: zi(e)
                        ? e.constructor.name
                        : n
                        ? "UnhandledRejection"
                        : "Error",
                      value:
                        "Non-Error " +
                        (n ? "promise rejection" : "exception") +
                        " captured with keys: " +
                        ta(e),
                    },
                  ],
                },
                extra: { __serialized__: Js(e) },
              };
              if (t) {
                var i = ll(rl(t).stack);
                r.stacktrace = { frames: i };
              }
              return r;
            })(e, t, n.rejection)),
            { synthetic: !0 }
          ),
          r)
        : (Os((r = ul(e, t, n)), "" + e, void 0), Is(r, { synthetic: !0 }), r);
    }
    function ul(e, t, n) {
      void 0 === n && (n = {});
      var r = { message: e };
      if (n.attachStacktrace && t) {
        var i = ll(rl(t).stack);
        r.stacktrace = { frames: i };
      }
      return r;
    }
    var hl = (function () {
        function e(e) {
          (this.options = e),
            (this._buffer = new ra(30)),
            (this._api = new Fa(this.options.dsn)),
            (this.url = this._api.getStoreEndpointWithUrlEncodedAuth());
        }
        return (
          (e.prototype.sendEvent = function (e) {
            throw new Fi("Transport Class has to implement `sendEvent` method");
          }),
          (e.prototype.close = function (e) {
            return this._buffer.drain(e);
          }),
          e
        );
      })(),
      pl = Ts(),
      dl = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t._disabledUntil = new Date(Date.now())), t;
        }
        return (
          Ri(t, e),
          (t.prototype.sendEvent = function (e) {
            var t = this;
            if (new Date(Date.now()) < this._disabledUntil)
              return Promise.reject({
                event: e,
                reason:
                  "Transport locked till " +
                  this._disabledUntil +
                  " due to too many requests.",
                status: 429,
              });
            var n = za(e, this._api),
              r = {
                body: n.body,
                method: "POST",
                referrerPolicy: sa() ? "origin" : "",
              };
            return (
              void 0 !== this.options.fetchParameters &&
                Object.assign(r, this.options.fetchParameters),
              void 0 !== this.options.headers &&
                (r.headers = this.options.headers),
              this._buffer.add(
                new na(function (e, i) {
                  pl.fetch(n.url, r)
                    .then(function (n) {
                      var r = Li.fromHttpCode(n.status);
                      if (r !== Li.Success) {
                        if (r === Li.RateLimit) {
                          var o = Date.now(),
                            s = n.headers.get("Retry-After");
                          (t._disabledUntil = new Date(o + Fs(o, s))),
                            zs.warn(
                              "Too many requests, backing off till: " +
                                t._disabledUntil
                            );
                        }
                        i(n);
                      } else e({ status: r });
                    })
                    .catch(i);
                })
              )
            );
          }),
          t
        );
      })(hl),
      fl = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t._disabledUntil = new Date(Date.now())), t;
        }
        return (
          Ri(t, e),
          (t.prototype.sendEvent = function (e) {
            var t = this;
            if (new Date(Date.now()) < this._disabledUntil)
              return Promise.reject({
                event: e,
                reason:
                  "Transport locked till " +
                  this._disabledUntil +
                  " due to too many requests.",
                status: 429,
              });
            var n = za(e, this._api);
            return this._buffer.add(
              new na(function (e, r) {
                var i = new XMLHttpRequest();
                for (var o in ((i.onreadystatechange = function () {
                  if (4 === i.readyState) {
                    var n = Li.fromHttpCode(i.status);
                    if (n !== Li.Success) {
                      if (n === Li.RateLimit) {
                        var o = Date.now(),
                          s = i.getResponseHeader("Retry-After");
                        (t._disabledUntil = new Date(o + Fs(o, s))),
                          zs.warn(
                            "Too many requests, backing off till: " +
                              t._disabledUntil
                          );
                      }
                      r(i);
                    } else e({ status: n });
                  }
                }),
                i.open("POST", n.url),
                t.options.headers))
                  t.options.headers.hasOwnProperty(o) &&
                    i.setRequestHeader(o, t.options.headers[o]);
                i.send(n.body);
              })
            );
          }),
          t
        );
      })(hl),
      gl = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Ri(t, e),
          (t.prototype.eventFromException = function (e, t) {
            return (function (e, t, n) {
              var r = cl(t, (n && n.syntheticException) || void 0, {
                attachStacktrace: e.attachStacktrace,
              });
              return (
                Is(r, { handled: !0, type: "generic" }),
                (r.level = ji.Error),
                n && n.event_id && (r.event_id = n.event_id),
                na.resolve(r)
              );
            })(this._options, e, t);
          }),
          (t.prototype.eventFromMessage = function (e, t, n) {
            return (
              void 0 === t && (t = ji.Info),
              (function (e, t, n, r) {
                void 0 === n && (n = ji.Info);
                var i = ul(t, (r && r.syntheticException) || void 0, {
                  attachStacktrace: e.attachStacktrace,
                });
                return (
                  (i.level = n),
                  r && r.event_id && (i.event_id = r.event_id),
                  na.resolve(i)
                );
              })(this._options, e, t, n)
            );
          }),
          (t.prototype._setupTransport = function () {
            if (!this._options.dsn)
              return e.prototype._setupTransport.call(this);
            var t = Ni(Ni({}, this._options.transportOptions), {
              dsn: this._options.dsn,
            });
            return this._options.transport
              ? new this._options.transport(t)
              : ia()
              ? new dl(t)
              : new fl(t);
          }),
          t
        );
      })(Wa),
      ml = 0;
    function yl() {
      return ml > 0;
    }
    function vl() {
      (ml += 1),
        setTimeout(function () {
          ml -= 1;
        });
    }
    function bl(e, t, n) {
      if ((void 0 === t && (t = {}), "function" != typeof e)) return e;
      try {
        if (e.__sentry__) return e;
        if (e.__sentry_wrapped__) return e.__sentry_wrapped__;
      } catch (t) {
        return e;
      }
      var r = function () {
        var r = Array.prototype.slice.call(arguments);
        try {
          n && "function" == typeof n && n.apply(this, arguments);
          var i = r.map(function (e) {
            return bl(e, t);
          });
          return e.handleEvent
            ? e.handleEvent.apply(this, i)
            : e.apply(this, i);
        } catch (e) {
          throw (
            (vl(),
            Da(function (n) {
              n.addEventProcessor(function (e) {
                var n = Ni({}, e);
                return (
                  t.mechanism && (Os(n, void 0, void 0), Is(n, t.mechanism)),
                  (n.extra = Ni(Ni({}, n.extra), { arguments: r })),
                  n
                );
              }),
                Ma(e);
            }),
            e)
          );
        }
      };
      try {
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
      } catch (e) {}
      (e.prototype = e.prototype || {}),
        (r.prototype = e.prototype),
        Object.defineProperty(e, "__sentry_wrapped__", {
          enumerable: !1,
          value: r,
        }),
        Object.defineProperties(r, {
          __sentry__: { enumerable: !1, value: !0 },
          __sentry_original__: { enumerable: !1, value: e },
        });
      try {
        Object.getOwnPropertyDescriptor(r, "name").configurable &&
          Object.defineProperty(r, "name", {
            get: function () {
              return e.name;
            },
          });
      } catch (e) {}
      return r;
    }
    function wl(e) {
      if ((void 0 === e && (e = {}), e.eventId))
        if (e.dsn) {
          var t = document.createElement("script");
          (t.async = !0),
            (t.src = new Fa(e.dsn).getReportDialogEndpoint(e)),
            e.onLoad && (t.onload = e.onLoad),
            (document.head || document.body).appendChild(t);
        } else zs.error("Missing dsn option in showReportDialog call");
      else zs.error("Missing eventId option in showReportDialog call");
    }
    var _l = (function () {
        function e(t) {
          (this.name = e.id),
            (this._onErrorHandlerInstalled = !1),
            (this._onUnhandledRejectionHandlerInstalled = !1),
            (this._options = Ni({ onerror: !0, onunhandledrejection: !0 }, t));
        }
        return (
          (e.prototype.setupOnce = function () {
            (Error.stackTraceLimit = 50),
              this._options.onerror &&
                (zs.log("Global Handler attached: onerror"),
                this._installGlobalOnErrorHandler()),
              this._options.onunhandledrejection &&
                (zs.log("Global Handler attached: onunhandledrejection"),
                this._installGlobalOnUnhandledRejectionHandler());
          }),
          (e.prototype._installGlobalOnErrorHandler = function () {
            var t = this;
            this._onErrorHandlerInstalled ||
              (pa({
                callback: function (n) {
                  var r = n.error,
                    i = Ra(),
                    o = i.getIntegration(e),
                    s = r && !0 === r.__sentry_own_request__;
                  if (o && !yl() && !s) {
                    var a = i.getClient(),
                      l = Vi(r)
                        ? t._eventFromIncompleteOnError(
                            n.msg,
                            n.url,
                            n.line,
                            n.column
                          )
                        : t._enhanceEventWithInitialFrame(
                            cl(r, void 0, {
                              attachStacktrace:
                                a && a.getOptions().attachStacktrace,
                              rejection: !1,
                            }),
                            n.url,
                            n.line,
                            n.column
                          );
                    Is(l, { handled: !1, type: "onerror" }),
                      i.captureEvent(l, { originalException: r });
                  }
                },
                type: "error",
              }),
              (this._onErrorHandlerInstalled = !0));
          }),
          (e.prototype._installGlobalOnUnhandledRejectionHandler = function () {
            var t = this;
            this._onUnhandledRejectionHandlerInstalled ||
              (pa({
                callback: function (n) {
                  var r = n;
                  try {
                    "reason" in n
                      ? (r = n.reason)
                      : "detail" in n &&
                        "reason" in n.detail &&
                        (r = n.detail.reason);
                  } catch (e) {}
                  var i = Ra(),
                    o = i.getIntegration(e),
                    s = r && !0 === r.__sentry_own_request__;
                  if (!o || yl() || s) return !0;
                  var a = i.getClient(),
                    l = Vi(r)
                      ? t._eventFromIncompleteRejection(r)
                      : cl(r, void 0, {
                          attachStacktrace:
                            a && a.getOptions().attachStacktrace,
                          rejection: !0,
                        });
                  (l.level = ji.Error),
                    Is(l, { handled: !1, type: "onunhandledrejection" }),
                    i.captureEvent(l, { originalException: r });
                },
                type: "unhandledrejection",
              }),
              (this._onUnhandledRejectionHandlerInstalled = !0));
          }),
          (e.prototype._eventFromIncompleteOnError = function (e, t, n, r) {
            var i,
              o = Bi(e) ? e.message : e;
            if (Hi(o)) {
              var s = o.match(
                /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
              );
              s && ((i = s[1]), (o = s[2]));
            }
            var a = {
              exception: { values: [{ type: i || "Error", value: o }] },
            };
            return this._enhanceEventWithInitialFrame(a, t, n, r);
          }),
          (e.prototype._eventFromIncompleteRejection = function (e) {
            return {
              exception: {
                values: [
                  {
                    type: "UnhandledRejection",
                    value:
                      "Non-Error promise rejection captured with value: " + e,
                  },
                ],
              },
            };
          }),
          (e.prototype._enhanceEventWithInitialFrame = function (e, t, n, r) {
            (e.exception = e.exception || {}),
              (e.exception.values = e.exception.values || []),
              (e.exception.values[0] = e.exception.values[0] || {}),
              (e.exception.values[0].stacktrace =
                e.exception.values[0].stacktrace || {}),
              (e.exception.values[0].stacktrace.frames =
                e.exception.values[0].stacktrace.frames || []);
            var i = isNaN(parseInt(r, 10)) ? void 0 : r,
              o = isNaN(parseInt(n, 10)) ? void 0 : n,
              s =
                Hi(t) && t.length > 0
                  ? t
                  : (function () {
                      try {
                        return document.location.href;
                      } catch (e) {
                        return "";
                      }
                    })();
            return (
              0 === e.exception.values[0].stacktrace.frames.length &&
                e.exception.values[0].stacktrace.frames.push({
                  colno: i,
                  filename: s,
                  function: "?",
                  in_app: !0,
                  lineno: o,
                }),
              e
            );
          }),
          (e.id = "GlobalHandlers"),
          e
        );
      })(),
      El = [
        "EventTarget",
        "Window",
        "Node",
        "ApplicationCache",
        "AudioTrackList",
        "ChannelMergerNode",
        "CryptoOperation",
        "EventSource",
        "FileReader",
        "HTMLUnknownElement",
        "IDBDatabase",
        "IDBRequest",
        "IDBTransaction",
        "KeyOperation",
        "MediaController",
        "MessagePort",
        "ModalWindow",
        "Notification",
        "SVGElementInstance",
        "Screen",
        "TextTrack",
        "TextTrackCue",
        "TextTrackList",
        "WebSocket",
        "WebSocketWorker",
        "Worker",
        "XMLHttpRequest",
        "XMLHttpRequestEventTarget",
        "XMLHttpRequestUpload",
      ],
      kl = (function () {
        function e(t) {
          (this.name = e.id),
            (this._options = Ni(
              {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
              },
              t
            ));
        }
        return (
          (e.prototype.setupOnce = function () {
            var e = Ts();
            (this._options.setTimeout &&
              Ks(e, "setTimeout", this._wrapTimeFunction.bind(this)),
            this._options.setInterval &&
              Ks(e, "setInterval", this._wrapTimeFunction.bind(this)),
            this._options.requestAnimationFrame &&
              Ks(e, "requestAnimationFrame", this._wrapRAF.bind(this)),
            this._options.XMLHttpRequest &&
              "XMLHttpRequest" in e &&
              Ks(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)),
            this._options.eventTarget) &&
              (Array.isArray(this._options.eventTarget)
                ? this._options.eventTarget
                : El
              ).forEach(this._wrapEventTarget.bind(this));
          }),
          (e.prototype._wrapTimeFunction = function (e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              var r = t[0];
              return (
                (t[0] = bl(r, {
                  mechanism: {
                    data: { function: Bs(e) },
                    handled: !0,
                    type: "instrument",
                  },
                })),
                e.apply(this, t)
              );
            };
          }),
          (e.prototype._wrapRAF = function (e) {
            return function (t) {
              return e.call(
                this,
                bl(t, {
                  mechanism: {
                    data: { function: "requestAnimationFrame", handler: Bs(e) },
                    handled: !0,
                    type: "instrument",
                  },
                })
              );
            };
          }),
          (e.prototype._wrapEventTarget = function (e) {
            var t = Ts(),
              n = t[e] && t[e].prototype;
            n &&
              n.hasOwnProperty &&
              n.hasOwnProperty("addEventListener") &&
              (Ks(n, "addEventListener", function (t) {
                return function (n, r, i) {
                  try {
                    "function" == typeof r.handleEvent &&
                      (r.handleEvent = bl(r.handleEvent.bind(r), {
                        mechanism: {
                          data: {
                            function: "handleEvent",
                            handler: Bs(r),
                            target: e,
                          },
                          handled: !0,
                          type: "instrument",
                        },
                      }));
                  } catch (e) {}
                  return t.call(
                    this,
                    n,
                    bl(r, {
                      mechanism: {
                        data: {
                          function: "addEventListener",
                          handler: Bs(r),
                          target: e,
                        },
                        handled: !0,
                        type: "instrument",
                      },
                    }),
                    i
                  );
                };
              }),
              Ks(n, "removeEventListener", function (e) {
                return function (t, n, r) {
                  try {
                    e.call(this, t, n.__sentry_wrapped__, r);
                  } catch (e) {}
                  return e.call(this, t, n, r);
                };
              }));
          }),
          (e.prototype._wrapXHR = function (e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              var r = this,
                i = ["onload", "onerror", "onprogress", "onreadystatechange"];
              return (
                i.forEach(function (e) {
                  e in r &&
                    "function" == typeof r[e] &&
                    Ks(r, e, function (t) {
                      var n = {
                        mechanism: {
                          data: { function: e, handler: Bs(t) },
                          handled: !0,
                          type: "instrument",
                        },
                      };
                      return (
                        t.__sentry_original__ &&
                          (n.mechanism.data.handler = Bs(
                            t.__sentry_original__
                          )),
                        bl(t, n)
                      );
                    });
                }),
                e.apply(this, t)
              );
            };
          }),
          (e.id = "TryCatch"),
          e
        );
      })(),
      Sl = (function () {
        function e(t) {
          (this.name = e.id),
            (this._options = Ni(
              {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
              },
              t
            ));
        }
        return (
          (e.prototype.addSentryBreadcrumb = function (e) {
            this._options.sentry &&
              Ra().addBreadcrumb(
                {
                  category:
                    "sentry." +
                    ("transaction" === e.type ? "transaction" : "event"),
                  event_id: e.event_id,
                  level: e.level,
                  message: Cs(e),
                },
                { event: e }
              );
          }),
          (e.prototype.setupOnce = function () {
            var e = this;
            this._options.console &&
              pa({
                callback: function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  e._consoleBreadcrumb.apply(e, Mi(t));
                },
                type: "console",
              }),
              this._options.dom &&
                pa({
                  callback: function () {
                    for (var t = [], n = 0; n < arguments.length; n++)
                      t[n] = arguments[n];
                    e._domBreadcrumb.apply(e, Mi(t));
                  },
                  type: "dom",
                }),
              this._options.xhr &&
                pa({
                  callback: function () {
                    for (var t = [], n = 0; n < arguments.length; n++)
                      t[n] = arguments[n];
                    e._xhrBreadcrumb.apply(e, Mi(t));
                  },
                  type: "xhr",
                }),
              this._options.fetch &&
                pa({
                  callback: function () {
                    for (var t = [], n = 0; n < arguments.length; n++)
                      t[n] = arguments[n];
                    e._fetchBreadcrumb.apply(e, Mi(t));
                  },
                  type: "fetch",
                }),
              this._options.history &&
                pa({
                  callback: function () {
                    for (var t = [], n = 0; n < arguments.length; n++)
                      t[n] = arguments[n];
                    e._historyBreadcrumb.apply(e, Mi(t));
                  },
                  type: "history",
                });
          }),
          (e.prototype._consoleBreadcrumb = function (e) {
            var t = {
              category: "console",
              data: { arguments: e.args, logger: "console" },
              level: ji.fromString(e.level),
              message: _s(e.args, " "),
            };
            if ("assert" === e.level) {
              if (!1 !== e.args[0]) return;
              (t.message =
                "Assertion failed: " +
                (_s(e.args.slice(1), " ") || "console.assert")),
                (t.data.arguments = e.args.slice(1));
            }
            Ra().addBreadcrumb(t, { input: e.args, level: e.level });
          }),
          (e.prototype._domBreadcrumb = function (e) {
            var t;
            try {
              t = e.event.target ? Rs(e.event.target) : Rs(e.event);
            } catch (e) {
              t = "<unknown>";
            }
            0 !== t.length &&
              Ra().addBreadcrumb(
                { category: "ui." + e.name, message: t },
                { event: e.event, name: e.name }
              );
          }),
          (e.prototype._xhrBreadcrumb = function (e) {
            if (e.endTimestamp) {
              if (e.xhr.__sentry_own_request__) return;
              Ra().addBreadcrumb(
                { category: "xhr", data: e.xhr.__sentry_xhr__, type: "http" },
                { xhr: e.xhr }
              );
            } else;
          }),
          (e.prototype._fetchBreadcrumb = function (e) {
            e.endTimestamp &&
              ((e.fetchData.url.match(/sentry_key/) &&
                "POST" === e.fetchData.method) ||
                (e.error
                  ? Ra().addBreadcrumb(
                      {
                        category: "fetch",
                        data: e.fetchData,
                        level: ji.Error,
                        type: "http",
                      },
                      { data: e.error, input: e.args }
                    )
                  : Ra().addBreadcrumb(
                      {
                        category: "fetch",
                        data: Ni(Ni({}, e.fetchData), {
                          status_code: e.response.status,
                        }),
                        type: "http",
                      },
                      { input: e.args, response: e.response }
                    )));
          }),
          (e.prototype._historyBreadcrumb = function (e) {
            var t = Ts(),
              n = e.from,
              r = e.to,
              i = As(t.location.href),
              o = As(n),
              s = As(r);
            o.path || (o = i),
              i.protocol === s.protocol &&
                i.host === s.host &&
                (r = s.relative),
              i.protocol === o.protocol &&
                i.host === o.host &&
                (n = o.relative),
              Ra().addBreadcrumb({
                category: "navigation",
                data: { from: n, to: r },
              });
          }),
          (e.id = "Breadcrumbs"),
          e
        );
      })(),
      Tl = (function () {
        function e(t) {
          void 0 === t && (t = {}),
            (this.name = e.id),
            (this._key = t.key || "cause"),
            (this._limit = t.limit || 5);
        }
        return (
          (e.prototype.setupOnce = function () {
            Ca(function (t, n) {
              var r = Ra().getIntegration(e);
              return r ? r._handler(t, n) : t;
            });
          }),
          (e.prototype._handler = function (e, t) {
            if (
              !(
                e.exception &&
                e.exception.values &&
                t &&
                Gi(t.originalException, Error)
              )
            )
              return e;
            var n = this._walkErrorTree(t.originalException, this._key);
            return (e.exception.values = Mi(n, e.exception.values)), e;
          }),
          (e.prototype._walkErrorTree = function (e, t, n) {
            if (
              (void 0 === n && (n = []),
              !Gi(e[t], Error) || n.length + 1 >= this._limit)
            )
              return n;
            var r = sl(rl(e[t]));
            return this._walkErrorTree(e[t], t, Mi([r], n));
          }),
          (e.id = "LinkedErrors"),
          e
        );
      })(),
      xl = Ts(),
      Al = (function () {
        function e() {
          this.name = e.id;
        }
        return (
          (e.prototype.setupOnce = function () {
            Ca(function (t) {
              if (Ra().getIntegration(e)) {
                if (!xl.navigator || !xl.location) return t;
                var n = t.request || {};
                return (
                  (n.url = n.url || xl.location.href),
                  (n.headers = n.headers || {}),
                  (n.headers["User-Agent"] = xl.navigator.userAgent),
                  Ni(Ni({}, t), { request: n })
                );
              }
              return t;
            });
          }),
          (e.id = "UserAgent"),
          e
        );
      })(),
      Cl = "5.22.3",
      Pl = (function (e) {
        function t(t) {
          return void 0 === t && (t = {}), e.call(this, gl, t) || this;
        }
        return (
          Ri(t, e),
          (t.prototype.showReportDialog = function (e) {
            void 0 === e && (e = {}),
              Ts().document &&
                (this._isEnabled()
                  ? wl(Ni(Ni({}, e), { dsn: e.dsn || this.getDsn() }))
                  : zs.error(
                      "Trying to call showReportDialog with Sentry Client disabled"
                    ));
          }),
          (t.prototype._prepareEvent = function (t, n, r) {
            return (
              (t.platform = t.platform || "javascript"),
              (t.sdk = Ni(Ni({}, t.sdk), {
                name: "sentry.javascript.browser",
                packages: Mi((t.sdk && t.sdk.packages) || [], [
                  { name: "npm:@sentry/browser", version: Cl },
                ]),
                version: Cl,
              })),
              e.prototype._prepareEvent.call(this, t, n, r)
            );
          }),
          (t.prototype._sendEvent = function (t) {
            var n = this.getIntegration(Sl);
            n && n.addSentryBreadcrumb(t), e.prototype._sendEvent.call(this, t);
          }),
          t
        );
      })(Ha),
      Ol = [
        new Ga(),
        new Ya(),
        new kl(),
        new Sl(),
        new _l(),
        new Tl(),
        new Al(),
      ];
    function Il(e) {
      if (
        (void 0 === e && (e = {}),
        void 0 === e.defaultIntegrations && (e.defaultIntegrations = Ol),
        void 0 === e.release)
      ) {
        var t = Ts();
        t.SENTRY_RELEASE &&
          t.SENTRY_RELEASE.id &&
          (e.release = t.SENTRY_RELEASE.id);
      }
      !(function (e, t) {
        !0 === t.debug && zs.enable();
        var n = Ra(),
          r = new e(t);
        n.bindClient(r);
      })(Pl, e);
    }
    function Rl(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function jl(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Ll(e, t, n) {
      return t && jl(e.prototype, t), n && jl(e, n), e;
    }
    function Nl(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function Ul(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n = [],
            r = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var s, a = e[Symbol.iterator]();
              !(r = (s = a.next()).done) &&
              (n.push(s.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (i = !0), (o = e);
          } finally {
            try {
              r || null == a.return || a.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        })()
      );
    }
    var Ml = function (e) {
        return null != e ? e.constructor : null;
      },
      Dl = function (e, t) {
        return !!(e && t && e instanceof t);
      },
      Fl = function (e) {
        return null == e;
      },
      ql = function (e) {
        return Ml(e) === Object;
      },
      Bl = function (e) {
        return Ml(e) === String;
      },
      $l = function (e) {
        return Array.isArray(e);
      },
      Hl = function (e) {
        return Dl(e, NodeList);
      },
      Vl = Fl,
      Wl = ql,
      zl = function (e) {
        return Ml(e) === Number && !Number.isNaN(e);
      },
      Yl = Bl,
      Kl = function (e) {
        return Ml(e) === Boolean;
      },
      Gl = $l,
      Xl = Hl,
      Jl = function (e) {
        return Dl(e, Element);
      },
      Ql = function (e) {
        return Dl(e, Event);
      },
      Zl = function (e) {
        return (
          Fl(e) ||
          ((Bl(e) || $l(e) || Hl(e)) && !e.length) ||
          (ql(e) && !Object.keys(e).length)
        );
      },
      ec = {
        facebook: {
          domain: "facebook.com",
          url: function (e) {
            return "https://graph.facebook.com/?id=".concat(
              e,
              "&fields=og_object{engagement}"
            );
          },
          shareCount: function (e) {
            return e.og_object.engagement.count;
          },
          popup: { width: 640, height: 360 },
        },
        twitter: {
          domain: "twitter.com",
          url: function () {
            return null;
          },
          shareCount: function () {
            return null;
          },
          popup: { width: 640, height: 240 },
        },
        pinterest: {
          domain: "pinterest.com",
          url: function (e) {
            return "https://widgets.pinterest.com/v1/urls/count.json?url=".concat(
              e
            );
          },
          shareCount: function (e) {
            return e.count;
          },
          popup: { width: 830, height: 700 },
        },
        github: {
          domain: "github.com",
          url: function (e, t) {
            return "https://api.github.com/repos/"
              .concat(e)
              .concat(Yl(t) ? "?access_token=".concat(t) : "");
          },
          shareCount: function (e) {
            return e.data.stargazers_count;
          },
        },
        youtube: {
          domain: "youtube.com",
          url: function (e, t) {
            return "https://www.googleapis.com/youtube/v3/channels?part=statistics&id="
              .concat(e, "&key=")
              .concat(t);
          },
          shareCount: function (e) {
            if (!Zl(e.error)) return null;
            var t = Ul(e.items, 1)[0];
            return Zl(t) ? null : t.statistics.subscriberCount;
          },
        },
      },
      tc = {
        debug: !1,
        wrapper: { className: "shr" },
        count: {
          className: "shr__count",
          displayZero: !1,
          format: !0,
          position: "after",
          increment: !0,
        },
        tokens: { github: "", youtube: "" },
        storage: { enabled: !0, key: "shr", ttl: 3e5 },
      };
    function nc(e) {
      return new Promise(function (t, n) {
        var r = "jsonp_callback_".concat(Math.round(1e5 * Math.random())),
          i = document.createElement("script");
        i.addEventListener("error", function (e) {
          return n(e);
        }),
          (window[r] = function (e) {
            delete window[r], document.body.removeChild(i), t(e);
          });
        var o = new URL(e);
        o.searchParams.set("callback", r),
          i.setAttribute("src", o.toString()),
          document.body.appendChild(i);
      });
    }
    var rc = function () {},
      ic = (function () {
        function e() {
          var t =
            !!(0 < arguments.length && void 0 !== arguments[0]) && arguments[0];
          Rl(this, e),
            (this.enabled = window.console && t),
            this.enabled && this.log("Debugging enabled");
        }
        return (
          Ll(e, [
            {
              key: "log",
              get: function () {
                return this.enabled
                  ? Function.prototype.bind.call(console.log, console)
                  : rc;
              },
            },
            {
              key: "warn",
              get: function () {
                return this.enabled
                  ? Function.prototype.bind.call(console.warn, console)
                  : rc;
              },
            },
            {
              key: "error",
              get: function () {
                return this.enabled
                  ? Function.prototype.bind.call(console.error, console)
                  : rc;
              },
            },
          ]),
          e
        );
      })();
    function oc(e, t) {
      return function () {
        return Array.from(document.querySelectorAll(t)).includes(this);
      }.call(e, t);
    }
    function sc(e, t) {
      var n = e.length ? e : [e];
      Array.from(n)
        .reverse()
        .forEach(function (e, n) {
          var r = 0 < n ? t.cloneNode(!0) : t,
            i = e.parentNode,
            o = e.nextSibling;
          r.appendChild(e), o ? i.insertBefore(r, o) : i.appendChild(r);
        });
    }
    function ac(e, t, n) {
      var r = document.createElement(e);
      return (
        Wl(t) &&
          (function (e, t) {
            !Jl(e) ||
              Zl(t) ||
              Object.entries(t)
                .filter(function (e) {
                  var t = Ul(e, 2)[1];
                  return !Vl(t);
                })
                .forEach(function (t) {
                  var n = Ul(t, 2),
                    r = n[0],
                    i = n[1];
                  return e.setAttribute(r, i);
                });
          })(r, t),
        Yl(n) && (r.innerText = n),
        r
      );
    }
    function lc(e) {
      var t = /\./.test((1.1).toLocaleString()) ? "." : ",",
        n = new RegExp("\\".concat(t, "\\d+$"));
      return Math.round(e).toLocaleString().replace(n, "");
    }
    function cc() {
      for (
        var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length,
          n = Array(1 < t ? t - 1 : 0),
          r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      if (!n.length) return e;
      var i = n.shift();
      return Wl(i)
        ? (Object.keys(i).forEach(function (t) {
            Wl(i[t])
              ? (!Object.keys(e).includes(t) && Object.assign(e, Nl({}, t, {})),
                cc(e[t], i[t]))
              : Object.assign(e, Nl({}, t, i[t]));
          }),
          cc.apply(void 0, [e].concat(n)))
        : e;
    }
    var uc = (function () {
      function e(t, n) {
        var r =
          !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
        Rl(this, e),
          (this.enabled = r && e.supported),
          (this.key = t),
          (this.ttl = n);
      }
      return (
        Ll(
          e,
          [
            {
              key: "get",
              value: function (t) {
                if (!e.supported || !this.enabled) return null;
                var n = window.localStorage.getItem(this.key);
                if (Zl(n)) return null;
                var r = window.localStorage.getItem(
                  "".concat(this.key, "_ttl")
                );
                if (Zl(r) || r < Date.now()) return null;
                var i = JSON.parse(n);
                return Yl(t) && t.length ? i[t] : i;
              },
            },
            {
              key: "set",
              value: function (t) {
                if (e.supported && this.enabled && Wl(t)) {
                  var n = this.get();
                  Zl(n) && (n = {}),
                    cc(n, t),
                    window.localStorage.setItem(this.key, JSON.stringify(n)),
                    window.localStorage.setItem(
                      "".concat(this.key, "_ttl"),
                      Date.now() + this.ttl
                    );
                }
              },
            },
          ],
          [
            {
              key: "supported",
              get: function () {
                try {
                  return (
                    "localStorage" in window &&
                    (window.localStorage.setItem("___test", "___test"),
                    window.localStorage.removeItem("___test"),
                    !0)
                  );
                } catch (e) {
                  return !1;
                }
              },
            },
          ]
        ),
        e
      );
    })();
    var hc = (function () {
      function e(t, n) {
        var r = this;
        Rl(this, e),
          (this.elements = { count: null, trigger: null, popup: null }),
          Jl(t)
            ? (this.elements.trigger = t)
            : Yl(t) && (this.elements.trigger = document.querySelector(t)),
          Jl(this.elements.trigger) &&
            Zl(this.elements.trigger.shr) &&
            ((this.config = cc({}, tc, n, { networks: ec })),
            (this.console = new ic(this.config.debug)),
            (this.storage = new uc(
              this.config.storage.key,
              this.config.storage.ttl,
              this.config.storage.enabled
            )),
            this.getCount()
              .then(function (e) {
                return r.updateDisplay(e);
              })
              .catch(function () {}),
            this.listeners(!0),
            (this.elements.trigger.shr = this));
      }
      return (
        Ll(
          e,
          [
            {
              key: "destroy",
              value: function () {
                this.listeners(!1);
              },
            },
            {
              key: "listeners",
              value: function () {
                var e = this,
                  t =
                    0 < arguments.length &&
                    void 0 !== arguments[0] &&
                    arguments[0]
                      ? "addEventListener"
                      : "removeEventListener";
                this.elements.trigger[t](
                  "click",
                  function (t) {
                    return e.share(t);
                  },
                  !1
                );
              },
            },
            {
              key: "share",
              value: function (e) {
                var t = this;
                this.openPopup(e);
                var n = this.config.count.increment;
                this.getCount()
                  .then(function (e) {
                    return t.updateDisplay(e, n);
                  })
                  .catch(function () {});
              },
            },
            {
              key: "openPopup",
              value: function (e) {
                if (!Zl(this.network) && this.networkConfig.popup) {
                  Ql(e) && e.preventDefault();
                  var t = this.networkConfig.popup,
                    n = t.width,
                    r = t.height,
                    i = "shr-popup--".concat(this.network);
                  if (this.popup && !this.popup.closed)
                    this.popup.focus(), this.console.log("Popup re-focused.");
                  else {
                    var o =
                        void 0 === window.screenLeft
                          ? window.screen.left
                          : window.screenLeft,
                      s =
                        void 0 === window.screenTop
                          ? window.screen.top
                          : window.screenTop,
                      a = window.screen.width / 2 - n / 2 + o,
                      l = window.screen.height / 2 - r / 2 + s;
                    (this.popup = window.open(
                      this.href,
                      i,
                      "top="
                        .concat(l, ",left=")
                        .concat(a, ",width=")
                        .concat(n, ",height=")
                        .concat(r)
                    )),
                      this.popup && !this.popup.closed && Kl(this.popup.closed)
                        ? (this.popup.focus(),
                          this.console.log("Popup opened."))
                        : this.console.error("Popup blocked.");
                  }
                }
              },
            },
            {
              key: "getCount",
              value: function () {
                var e = this,
                  t =
                    !(0 < arguments.length && void 0 !== arguments[0]) ||
                    arguments[0];
                return new Promise(function (n, r) {
                  var i = e.apiUrl;
                  if (Zl(i))
                    r(
                      new Error("No URL available for ".concat(e.network, "."))
                    );
                  else {
                    if (t) {
                      var o = e.storage.get(e.target);
                      if (!Zl(o) && Object.keys(o).includes(e.network)) {
                        var s = o[e.network];
                        return (
                          n(zl(s) ? s : 0),
                          void e.console.log(
                            "getCount for '"
                              .concat(e.target, "' for '")
                              .concat(e.network, "' resolved from cache.")
                          )
                        );
                      }
                    }
                    nc(i)
                      .then(function (t) {
                        var r = 0,
                          i =
                            e.elements.trigger.getAttribute("data-shr-display");
                        (r = Zl(i) ? e.networkConfig.shareCount(t) : t[i]),
                          Zl(r)
                            ? (r = 0)
                            : ((r = parseInt(r, 10)), !zl(r) && (r = 0)),
                          e.storage.set(Nl({}, e.target, Nl({}, e.network, r))),
                          n(r);
                      })
                      .catch(r);
                  }
                });
              },
            },
            {
              key: "updateDisplay",
              value: function (e) {
                var t =
                    !!(1 < arguments.length && void 0 !== arguments[1]) &&
                    arguments[1],
                  n = this.config,
                  r = n.count,
                  i = n.wrapper,
                  o = t ? e + 1 : e,
                  s = r.position.toLowerCase();
                if (0 < o || r.displayZero) {
                  var a = function (e) {
                      return Math.round((o / e) * 10) / 10;
                    },
                    l = lc(o);
                  r.format &&
                    (1e6 < o
                      ? (l = "".concat(a(1e6), "M"))
                      : 1e3 < o && (l = "".concat(a(1e3), "K"))),
                    Jl(this.elements.count)
                      ? (this.elements.count.textContent = l)
                      : (sc(
                          this.elements.trigger,
                          ac("span", { class: i.className })
                        ),
                        (this.elements.count = ac(
                          "span",
                          {
                            class: ""
                              .concat(r.className, " ")
                              .concat(r.className, "--")
                              .concat(s),
                          },
                          l
                        )),
                        this.elements.trigger.insertAdjacentElement(
                          "after" === s ? "afterend" : "beforebegin",
                          this.elements.count
                        ));
                }
              },
            },
            {
              key: "href",
              get: function () {
                return Jl(this.elements.trigger)
                  ? this.elements.trigger.href
                  : null;
              },
            },
            {
              key: "network",
              get: function () {
                var e = this;
                if (!Jl(this.elements.trigger)) return null;
                var t = this.config.networks;
                return Object.keys(t).find(function (n) {
                  return (
                    (function (e) {
                      var t = new URL(e).hostname,
                        n = t.split("."),
                        r = n.length;
                      return (
                        2 < r &&
                          ((t = "".concat(n[r - 2], ".").concat(n[r - 1])),
                          2 === n[r - 2].length &&
                            2 === n[r - 1].length &&
                            (t = "".concat(n[r - 3], ".").concat(t))),
                        t
                      );
                    })(e.href) === t[n].domain
                  );
                });
              },
            },
            {
              key: "networkConfig",
              get: function () {
                return Zl(this.network)
                  ? null
                  : this.config.networks[this.network];
              },
            },
            {
              key: "target",
              get: function () {
                if (Zl(this.network)) return null;
                var e = new URL(this.href);
                switch (this.network) {
                  case "facebook":
                    return e.searchParams.get("u");
                  case "github":
                    return e.pathname.substring(1);
                  case "youtube":
                    return e.pathname.split("/").pop();
                  default:
                    return e.searchParams.get("url");
                }
              },
            },
            {
              key: "apiUrl",
              get: function () {
                if (Zl(this.network)) return null;
                var e = this.config.tokens;
                switch (this.network) {
                  case "github":
                    return this.networkConfig.url(this.target, e.github);
                  case "youtube":
                    return this.networkConfig.url(this.target, e.youtube);
                  default:
                    return this.networkConfig.url(
                      encodeURIComponent(this.target)
                    );
                }
              },
            },
          ],
          [
            {
              key: "setup",
              value: function (t) {
                var n =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r = null;
                if (
                  (Yl(t)
                    ? (r = Array.from(document.querySelectorAll(t)))
                    : Jl(t)
                    ? (r = [t])
                    : Xl(t)
                    ? (r = Array.from(t))
                    : Gl(t) && (r = t.filter(Jl)),
                  Zl(r))
                )
                  return null;
                var i = Object.assign({}, tc, n);
                return (
                  Yl(t) &&
                    i.watch &&
                    new MutationObserver(function (n) {
                      Array.from(n).forEach(function (n) {
                        Array.from(n.addedNodes).forEach(function (n) {
                          Jl(n) && oc(n, t) && new e(n, i);
                        });
                      });
                    }).observe(document.body, { childList: !0, subtree: !0 }),
                  r.map(function (t) {
                    return new e(t, n);
                  })
                );
              },
            },
          ]
        ),
        e
      );
    })();
    function pc(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var dc = Math.ceil,
      fc = Math.floor,
      gc = function (e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? fc : dc)(e);
      },
      mc = function (e) {
        if (null == e) throw TypeError("Can't call method on " + e);
        return e;
      },
      yc = function (e) {
        return function (t, n) {
          var r,
            i,
            o = String(mc(t)),
            s = gc(n),
            a = o.length;
          return s < 0 || s >= a
            ? e
              ? ""
              : void 0
            : (r = o.charCodeAt(s)) < 55296 ||
              r > 56319 ||
              s + 1 === a ||
              (i = o.charCodeAt(s + 1)) < 56320 ||
              i > 57343
            ? e
              ? o.charAt(s)
              : r
            : e
            ? o.slice(s, s + 2)
            : i - 56320 + ((r - 55296) << 10) + 65536;
        };
      },
      vc = { codeAt: yc(!1), charAt: yc(!0) },
      bc = function (e) {
        return e && e.Math == Math && e;
      },
      wc =
        bc("object" == typeof globalThis && globalThis) ||
        bc("object" == typeof window && window) ||
        bc("object" == typeof self && self) ||
        bc("object" == typeof n && n) ||
        (function () {
          return this;
        })() ||
        Function("return this")(),
      _c = function (e) {
        try {
          return !!e();
        } catch (e) {
          return !0;
        }
      },
      Ec = !_c(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      }),
      kc = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e;
      },
      Sc = wc.document,
      Tc = kc(Sc) && kc(Sc.createElement),
      xc = function (e) {
        return Tc ? Sc.createElement(e) : {};
      },
      Ac =
        !Ec &&
        !_c(function () {
          return (
            7 !=
            Object.defineProperty(xc("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        }),
      Cc = function (e) {
        if (!kc(e)) throw TypeError(String(e) + " is not an object");
        return e;
      },
      Pc = function (e, t) {
        if (!kc(e)) return e;
        var n, r;
        if (t && "function" == typeof (n = e.toString) && !kc((r = n.call(e))))
          return r;
        if ("function" == typeof (n = e.valueOf) && !kc((r = n.call(e))))
          return r;
        if (!t && "function" == typeof (n = e.toString) && !kc((r = n.call(e))))
          return r;
        throw TypeError("Can't convert object to primitive value");
      },
      Oc = Object.defineProperty,
      Ic = {
        f: Ec
          ? Oc
          : function (e, t, n) {
              if ((Cc(e), (t = Pc(t, !0)), Cc(n), Ac))
                try {
                  return Oc(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n)
                throw TypeError("Accessors not supported");
              return "value" in n && (e[t] = n.value), e;
            },
      },
      Rc = function (e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t,
        };
      },
      jc = Ec
        ? function (e, t, n) {
            return Ic.f(e, t, Rc(1, n));
          }
        : function (e, t, n) {
            return (e[t] = n), e;
          },
      Lc = function (e, t) {
        try {
          jc(wc, e, t);
        } catch (n) {
          wc[e] = t;
        }
        return t;
      },
      Nc = "__core-js_shared__",
      Uc = wc[Nc] || Lc(Nc, {}),
      Mc = Function.toString;
    "function" != typeof Uc.inspectSource &&
      (Uc.inspectSource = function (e) {
        return Mc.call(e);
      });
    var Dc,
      Fc,
      qc,
      Bc = Uc.inspectSource,
      $c = wc.WeakMap,
      Hc = "function" == typeof $c && /native code/.test(Bc($c)),
      Vc = {}.hasOwnProperty,
      Wc = function (e, t) {
        return Vc.call(e, t);
      },
      zc = r(function (e) {
        (e.exports = function (e, t) {
          return Uc[e] || (Uc[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.10.1",
          mode: "global",
          copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
        });
      }),
      Yc = 0,
      Kc = Math.random(),
      Gc = function (e) {
        return (
          "Symbol(" +
          String(void 0 === e ? "" : e) +
          ")_" +
          (++Yc + Kc).toString(36)
        );
      },
      Xc = zc("keys"),
      Jc = function (e) {
        return Xc[e] || (Xc[e] = Gc(e));
      },
      Qc = {},
      Zc = wc.WeakMap;
    if (Hc) {
      var eu = Uc.state || (Uc.state = new Zc()),
        tu = eu.get,
        nu = eu.has,
        ru = eu.set;
      (Dc = function (e, t) {
        return (t.facade = e), ru.call(eu, e, t), t;
      }),
        (Fc = function (e) {
          return tu.call(eu, e) || {};
        }),
        (qc = function (e) {
          return nu.call(eu, e);
        });
    } else {
      var iu = Jc("state");
      (Qc[iu] = !0),
        (Dc = function (e, t) {
          return (t.facade = e), jc(e, iu, t), t;
        }),
        (Fc = function (e) {
          return Wc(e, iu) ? e[iu] : {};
        }),
        (qc = function (e) {
          return Wc(e, iu);
        });
    }
    var ou,
      su,
      au = {
        set: Dc,
        get: Fc,
        has: qc,
        enforce: function (e) {
          return qc(e) ? Fc(e) : Dc(e, {});
        },
        getterFor: function (e) {
          return function (t) {
            var n;
            if (!kc(t) || (n = Fc(t)).type !== e)
              throw TypeError("Incompatible receiver, " + e + " required");
            return n;
          };
        },
      },
      lu = {}.propertyIsEnumerable,
      cu = Object.getOwnPropertyDescriptor,
      uu = {
        f:
          cu && !lu.call({ 1: 2 }, 1)
            ? function (e) {
                var t = cu(this, e);
                return !!t && t.enumerable;
              }
            : lu,
      },
      hu = {}.toString,
      pu = function (e) {
        return hu.call(e).slice(8, -1);
      },
      du = "".split,
      fu = _c(function () {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function (e) {
            return "String" == pu(e) ? du.call(e, "") : Object(e);
          }
        : Object,
      gu = function (e) {
        return fu(mc(e));
      },
      mu = Object.getOwnPropertyDescriptor,
      yu = {
        f: Ec
          ? mu
          : function (e, t) {
              if (((e = gu(e)), (t = Pc(t, !0)), Ac))
                try {
                  return mu(e, t);
                } catch (e) {}
              if (Wc(e, t)) return Rc(!uu.f.call(e, t), e[t]);
            },
      },
      vu = r(function (e) {
        var t = au.get,
          n = au.enforce,
          r = String(String).split("String");
        (e.exports = function (e, t, i, o) {
          var s,
            a = !!o && !!o.unsafe,
            l = !!o && !!o.enumerable,
            c = !!o && !!o.noTargetGet;
          "function" == typeof i &&
            ("string" != typeof t || Wc(i, "name") || jc(i, "name", t),
            (s = n(i)).source ||
              (s.source = r.join("string" == typeof t ? t : ""))),
            e !== wc
              ? (a ? !c && e[t] && (l = !0) : delete e[t],
                l ? (e[t] = i) : jc(e, t, i))
              : l
              ? (e[t] = i)
              : Lc(t, i);
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && t(this).source) || Bc(this);
        });
      }),
      bu = wc,
      wu = function (e) {
        return "function" == typeof e ? e : void 0;
      },
      _u = function (e, t) {
        return arguments.length < 2
          ? wu(bu[e]) || wu(wc[e])
          : (bu[e] && bu[e][t]) || (wc[e] && wc[e][t]);
      },
      Eu = Math.min,
      ku = function (e) {
        return e > 0 ? Eu(gc(e), 9007199254740991) : 0;
      },
      Su = Math.max,
      Tu = Math.min,
      xu = function (e) {
        return function (t, n, r) {
          var i,
            o = gu(t),
            s = ku(o.length),
            a = (function (e, t) {
              var n = gc(e);
              return n < 0 ? Su(n + t, 0) : Tu(n, t);
            })(r, s);
          if (e && n != n) {
            for (; s > a; ) if ((i = o[a++]) != i) return !0;
          } else
            for (; s > a; a++)
              if ((e || a in o) && o[a] === n) return e || a || 0;
          return !e && -1;
        };
      },
      Au = { includes: xu(!0), indexOf: xu(!1) }.indexOf,
      Cu = function (e, t) {
        var n,
          r = gu(e),
          i = 0,
          o = [];
        for (n in r) !Wc(Qc, n) && Wc(r, n) && o.push(n);
        for (; t.length > i; ) Wc(r, (n = t[i++])) && (~Au(o, n) || o.push(n));
        return o;
      },
      Pu = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ],
      Ou = Pu.concat("length", "prototype"),
      Iu = {
        f:
          Object.getOwnPropertyNames ||
          function (e) {
            return Cu(e, Ou);
          },
      },
      Ru = { f: Object.getOwnPropertySymbols },
      ju =
        _u("Reflect", "ownKeys") ||
        function (e) {
          var t = Iu.f(Cc(e)),
            n = Ru.f;
          return n ? t.concat(n(e)) : t;
        },
      Lu = function (e, t) {
        for (var n = ju(t), r = Ic.f, i = yu.f, o = 0; o < n.length; o++) {
          var s = n[o];
          Wc(e, s) || r(e, s, i(t, s));
        }
      },
      Nu = /#|\.prototype\./,
      Uu = function (e, t) {
        var n = Du[Mu(e)];
        return n == qu || (n != Fu && ("function" == typeof t ? _c(t) : !!t));
      },
      Mu = (Uu.normalize = function (e) {
        return String(e).replace(Nu, ".").toLowerCase();
      }),
      Du = (Uu.data = {}),
      Fu = (Uu.NATIVE = "N"),
      qu = (Uu.POLYFILL = "P"),
      Bu = Uu,
      $u = yu.f,
      Hu = function (e, t) {
        var n,
          r,
          i,
          o,
          s,
          a = e.target,
          l = e.global,
          c = e.stat;
        if ((n = l ? wc : c ? wc[a] || Lc(a, {}) : (wc[a] || {}).prototype))
          for (r in t) {
            if (
              ((o = t[r]),
              (i = e.noTargetGet ? (s = $u(n, r)) && s.value : n[r]),
              !Bu(l ? r : a + (c ? "." : "#") + r, e.forced) && void 0 !== i)
            ) {
              if (typeof o == typeof i) continue;
              Lu(o, i);
            }
            (e.sham || (i && i.sham)) && jc(o, "sham", !0), vu(n, r, o, e);
          }
      },
      Vu = function (e) {
        return Object(mc(e));
      },
      Wu = !_c(function () {
        function e() {}
        return (
          (e.prototype.constructor = null),
          Object.getPrototypeOf(new e()) !== e.prototype
        );
      }),
      zu = Jc("IE_PROTO"),
      Yu = Object.prototype,
      Ku = Wu
        ? Object.getPrototypeOf
        : function (e) {
            return (
              (e = Vu(e)),
              Wc(e, zu)
                ? e[zu]
                : "function" == typeof e.constructor &&
                  e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? Yu
                : null
            );
          },
      Gu = "process" == pu(wc.process),
      Xu = _u("navigator", "userAgent") || "",
      Ju = wc.process,
      Qu = Ju && Ju.versions,
      Zu = Qu && Qu.v8;
    Zu
      ? (su = (ou = Zu.split("."))[0] + ou[1])
      : Xu &&
        (!(ou = Xu.match(/Edge\/(\d+)/)) || ou[1] >= 74) &&
        (ou = Xu.match(/Chrome\/(\d+)/)) &&
        (su = ou[1]);
    var eh,
      th,
      nh,
      rh = su && +su,
      ih =
        !!Object.getOwnPropertySymbols &&
        !_c(function () {
          return !Symbol.sham && (Gu ? 38 === rh : rh > 37 && rh < 41);
        }),
      oh = ih && !Symbol.sham && "symbol" == typeof Symbol.iterator,
      sh = zc("wks"),
      ah = wc.Symbol,
      lh = oh ? ah : (ah && ah.withoutSetter) || Gc,
      ch = function (e) {
        return (
          (Wc(sh, e) && (ih || "string" == typeof sh[e])) ||
            (ih && Wc(ah, e) ? (sh[e] = ah[e]) : (sh[e] = lh("Symbol." + e))),
          sh[e]
        );
      },
      uh = ch("iterator"),
      hh = !1;
    [].keys &&
      ("next" in (nh = [].keys())
        ? (th = Ku(Ku(nh))) !== Object.prototype && (eh = th)
        : (hh = !0)),
      (null == eh ||
        _c(function () {
          var e = {};
          return eh[uh].call(e) !== e;
        })) &&
        (eh = {}),
      Wc(eh, uh) ||
        jc(eh, uh, function () {
          return this;
        });
    var ph,
      dh = { IteratorPrototype: eh, BUGGY_SAFARI_ITERATORS: hh },
      fh =
        Object.keys ||
        function (e) {
          return Cu(e, Pu);
        },
      gh = Ec
        ? Object.defineProperties
        : function (e, t) {
            Cc(e);
            for (var n, r = fh(t), i = r.length, o = 0; i > o; )
              Ic.f(e, (n = r[o++]), t[n]);
            return e;
          },
      mh = _u("document", "documentElement"),
      yh = Jc("IE_PROTO"),
      vh = function () {},
      bh = function (e) {
        return "<script>" + e + "</" + "script>";
      },
      wh = function () {
        try {
          ph = document.domain && new ActiveXObject("htmlfile");
        } catch (e) {}
        var e, t;
        wh = ph
          ? (function (e) {
              e.write(bh("")), e.close();
              var t = e.parentWindow.Object;
              return (e = null), t;
            })(ph)
          : (((t = xc("iframe")).style.display = "none"),
            mh.appendChild(t),
            (t.src = String("javascript:")),
            (e = t.contentWindow.document).open(),
            e.write(bh("document.F=Object")),
            e.close(),
            e.F);
        for (var n = Pu.length; n--; ) delete wh.prototype[Pu[n]];
        return wh();
      };
    Qc[yh] = !0;
    var _h =
        Object.create ||
        function (e, t) {
          var n;
          return (
            null !== e
              ? ((vh.prototype = Cc(e)),
                (n = new vh()),
                (vh.prototype = null),
                (n[yh] = e))
              : (n = wh()),
            void 0 === t ? n : gh(n, t)
          );
        },
      Eh = Ic.f,
      kh = ch("toStringTag"),
      Sh = function (e, t, n) {
        e &&
          !Wc((e = n ? e : e.prototype), kh) &&
          Eh(e, kh, { configurable: !0, value: t });
      },
      Th = {},
      xh = dh.IteratorPrototype,
      Ah = function () {
        return this;
      },
      Ch = function (e, t, n) {
        var r = t + " Iterator";
        return (
          (e.prototype = _h(xh, { next: Rc(1, n) })),
          Sh(e, r, !1),
          (Th[r] = Ah),
          e
        );
      },
      Ph =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var e,
                t = !1,
                n = {};
              try {
                (e = Object.getOwnPropertyDescriptor(
                  Object.prototype,
                  "__proto__"
                ).set).call(n, []),
                  (t = n instanceof Array);
              } catch (e) {}
              return function (n, r) {
                return (
                  Cc(n),
                  (function (e) {
                    if (!kc(e) && null !== e)
                      throw TypeError(
                        "Can't set " + String(e) + " as a prototype"
                      );
                  })(r),
                  t ? e.call(n, r) : (n.__proto__ = r),
                  n
                );
              };
            })()
          : void 0),
      Oh = dh.IteratorPrototype,
      Ih = dh.BUGGY_SAFARI_ITERATORS,
      Rh = ch("iterator"),
      jh = "keys",
      Lh = "values",
      Nh = "entries",
      Uh = function () {
        return this;
      },
      Mh = function (e, t, n, r, i, o, s) {
        Ch(n, t, r);
        var a,
          l,
          c,
          u = function (e) {
            if (e === i && g) return g;
            if (!Ih && e in d) return d[e];
            switch (e) {
              case jh:
              case Lh:
              case Nh:
                return function () {
                  return new n(this, e);
                };
            }
            return function () {
              return new n(this);
            };
          },
          h = t + " Iterator",
          p = !1,
          d = e.prototype,
          f = d[Rh] || d["@@iterator"] || (i && d[i]),
          g = (!Ih && f) || u(i),
          m = ("Array" == t && d.entries) || f;
        if (
          (m &&
            ((a = Ku(m.call(new e()))),
            Oh !== Object.prototype &&
              a.next &&
              (Ku(a) !== Oh &&
                (Ph ? Ph(a, Oh) : "function" != typeof a[Rh] && jc(a, Rh, Uh)),
              Sh(a, h, !0))),
          i == Lh &&
            f &&
            f.name !== Lh &&
            ((p = !0),
            (g = function () {
              return f.call(this);
            })),
          d[Rh] !== g && jc(d, Rh, g),
          (Th[t] = g),
          i)
        )
          if (((l = { values: u(Lh), keys: o ? g : u(jh), entries: u(Nh) }), s))
            for (c in l) (Ih || p || !(c in d)) && vu(d, c, l[c]);
          else Hu({ target: t, proto: !0, forced: Ih || p }, l);
        return l;
      },
      Dh = vc.charAt,
      Fh = "String Iterator",
      qh = au.set,
      Bh = au.getterFor(Fh);
    Mh(
      String,
      "String",
      function (e) {
        qh(this, { type: Fh, string: String(e), index: 0 });
      },
      function () {
        var e,
          t = Bh(this),
          n = t.string,
          r = t.index;
        return r >= n.length
          ? { value: void 0, done: !0 }
          : ((e = Dh(n, r)), (t.index += e.length), { value: e, done: !1 });
      }
    );
    var $h = ch("iterator"),
      Hh = !_c(function () {
        var e = new URL("b?a=1&b=2&c=3", "http://a"),
          t = e.searchParams,
          n = "";
        return (
          (e.pathname = "c%20d"),
          t.forEach(function (e, r) {
            t.delete("b"), (n += r + e);
          }),
          !t.sort ||
            "http://a/c%20d?a=1&c=3" !== e.href ||
            "3" !== t.get("c") ||
            "a=1" !== String(new URLSearchParams("?a=1")) ||
            !t[$h] ||
            "a" !== new URL("https://a@b").username ||
            "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
            "xn--e1aybc" !== new URL("http://тест").host ||
            "#%D0%B1" !== new URL("http://a#б").hash ||
            "a1c3" !== n ||
            "x" !== new URL("http://x", void 0).host
        );
      }),
      Vh = function (e, t, n) {
        if (!(e instanceof t))
          throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return e;
      },
      Wh = Object.assign,
      zh = Object.defineProperty,
      Yh =
        !Wh ||
        _c(function () {
          if (
            Ec &&
            1 !==
              Wh(
                { b: 1 },
                Wh(
                  zh({}, "a", {
                    enumerable: !0,
                    get: function () {
                      zh(this, "b", { value: 3, enumerable: !1 });
                    },
                  }),
                  { b: 2 }
                )
              ).b
          )
            return !0;
          var e = {},
            t = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
          return (
            (e[n] = 7),
            r.split("").forEach(function (e) {
              t[e] = e;
            }),
            7 != Wh({}, e)[n] || fh(Wh({}, t)).join("") != r
          );
        })
          ? function (e, t) {
              for (
                var n = Vu(e), r = arguments.length, i = 1, o = Ru.f, s = uu.f;
                r > i;

              )
                for (
                  var a,
                    l = fu(arguments[i++]),
                    c = o ? fh(l).concat(o(l)) : fh(l),
                    u = c.length,
                    h = 0;
                  u > h;

                )
                  (a = c[h++]), (Ec && !s.call(l, a)) || (n[a] = l[a]);
              return n;
            }
          : Wh,
      Kh = function (e, t, n) {
        if (
          ((function (e) {
            if ("function" != typeof e)
              throw TypeError(String(e) + " is not a function");
          })(e),
          void 0 === t)
        )
          return e;
        switch (n) {
          case 0:
            return function () {
              return e.call(t);
            };
          case 1:
            return function (n) {
              return e.call(t, n);
            };
          case 2:
            return function (n, r) {
              return e.call(t, n, r);
            };
          case 3:
            return function (n, r, i) {
              return e.call(t, n, r, i);
            };
        }
        return function () {
          return e.apply(t, arguments);
        };
      },
      Gh = function (e, t, n, r) {
        try {
          return r ? t(Cc(n)[0], n[1]) : t(n);
        } catch (t) {
          throw (
            ((function (e) {
              var t = e.return;
              if (void 0 !== t) Cc(t.call(e)).value;
            })(e),
            t)
          );
        }
      },
      Xh = ch("iterator"),
      Jh = Array.prototype,
      Qh = function (e) {
        return void 0 !== e && (Th.Array === e || Jh[Xh] === e);
      },
      Zh = function (e, t, n) {
        var r = Pc(t);
        r in e ? Ic.f(e, r, Rc(0, n)) : (e[r] = n);
      },
      ep = {};
    ep[ch("toStringTag")] = "z";
    var tp = "[object z]" === String(ep),
      np = ch("toStringTag"),
      rp =
        "Arguments" ==
        pu(
          (function () {
            return arguments;
          })()
        ),
      ip = tp
        ? pu
        : function (e) {
            var t, n, r;
            return void 0 === e
              ? "Undefined"
              : null === e
              ? "Null"
              : "string" ==
                typeof (n = (function (e, t) {
                  try {
                    return e[t];
                  } catch (e) {}
                })((t = Object(e)), np))
              ? n
              : rp
              ? pu(t)
              : "Object" == (r = pu(t)) && "function" == typeof t.callee
              ? "Arguments"
              : r;
          },
      op = ch("iterator"),
      sp = function (e) {
        if (null != e) return e[op] || e["@@iterator"] || Th[ip(e)];
      },
      ap = function (e) {
        var t,
          n,
          r,
          i,
          o,
          s,
          a = Vu(e),
          l = "function" == typeof this ? this : Array,
          c = arguments.length,
          u = c > 1 ? arguments[1] : void 0,
          h = void 0 !== u,
          p = sp(a),
          d = 0;
        if (
          (h && (u = Kh(u, c > 2 ? arguments[2] : void 0, 2)),
          null == p || (l == Array && Qh(p)))
        )
          for (n = new l((t = ku(a.length))); t > d; d++)
            (s = h ? u(a[d], d) : a[d]), Zh(n, d, s);
        else
          for (
            o = (i = p.call(a)).next, n = new l();
            !(r = o.call(i)).done;
            d++
          )
            (s = h ? Gh(i, u, [r.value, d], !0) : r.value), Zh(n, d, s);
        return (n.length = d), n;
      },
      lp = 2147483647,
      cp = /[^\0-\u007E]/,
      up = /[.\u3002\uFF0E\uFF61]/g,
      hp = "Overflow: input needs wider integers to process",
      pp = Math.floor,
      dp = String.fromCharCode,
      fp = function (e) {
        return e + 22 + 75 * (e < 26);
      },
      gp = function (e, t, n) {
        var r = 0;
        for (e = n ? pp(e / 700) : e >> 1, e += pp(e / t); e > 455; r += 36)
          e = pp(e / 35);
        return pp(r + (36 * e) / (e + 38));
      },
      mp = function (e) {
        var t,
          n,
          r = [],
          i = (e = (function (e) {
            for (var t = [], n = 0, r = e.length; n < r; ) {
              var i = e.charCodeAt(n++);
              if (i >= 55296 && i <= 56319 && n < r) {
                var o = e.charCodeAt(n++);
                56320 == (64512 & o)
                  ? t.push(((1023 & i) << 10) + (1023 & o) + 65536)
                  : (t.push(i), n--);
              } else t.push(i);
            }
            return t;
          })(e)).length,
          o = 128,
          s = 0,
          a = 72;
        for (t = 0; t < e.length; t++) (n = e[t]) < 128 && r.push(dp(n));
        var l = r.length,
          c = l;
        for (l && r.push("-"); c < i; ) {
          var u = lp;
          for (t = 0; t < e.length; t++) (n = e[t]) >= o && n < u && (u = n);
          var h = c + 1;
          if (u - o > pp((lp - s) / h)) throw RangeError(hp);
          for (s += (u - o) * h, o = u, t = 0; t < e.length; t++) {
            if ((n = e[t]) < o && ++s > lp) throw RangeError(hp);
            if (n == o) {
              for (var p = s, d = 36; ; d += 36) {
                var f = d <= a ? 1 : d >= a + 26 ? 26 : d - a;
                if (p < f) break;
                var g = p - f,
                  m = 36 - f;
                r.push(dp(fp(f + (g % m)))), (p = pp(g / m));
              }
              r.push(dp(fp(p))), (a = gp(s, h, c == l)), (s = 0), ++c;
            }
          }
          ++s, ++o;
        }
        return r.join("");
      },
      yp = ch("unscopables"),
      vp = Array.prototype;
    null == vp[yp] && Ic.f(vp, yp, { configurable: !0, value: _h(null) });
    var bp = function (e) {
        vp[yp][e] = !0;
      },
      wp = "Array Iterator",
      _p = au.set,
      Ep = au.getterFor(wp);
    Mh(
      Array,
      "Array",
      function (e, t) {
        _p(this, { type: wp, target: gu(e), index: 0, kind: t });
      },
      function () {
        var e = Ep(this),
          t = e.target,
          n = e.kind,
          r = e.index++;
        return !t || r >= t.length
          ? ((e.target = void 0), { value: void 0, done: !0 })
          : "keys" == n
          ? { value: r, done: !1 }
          : "values" == n
          ? { value: t[r], done: !1 }
          : { value: [r, t[r]], done: !1 };
      },
      "values"
    ),
      (Th.Arguments = Th.Array),
      bp("keys"),
      bp("values"),
      bp("entries");
    var kp = function (e) {
        var t = sp(e);
        if ("function" != typeof t)
          throw TypeError(String(e) + " is not iterable");
        return Cc(t.call(e));
      },
      Sp = _u("fetch"),
      Tp = _u("Headers"),
      xp = ch("iterator"),
      Ap = "URLSearchParams",
      Cp = "URLSearchParamsIterator",
      Pp = au.set,
      Op = au.getterFor(Ap),
      Ip = au.getterFor(Cp),
      Rp = /\+/g,
      jp = Array(4),
      Lp = function (e) {
        return (
          jp[e - 1] ||
          (jp[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
        );
      },
      Np = function (e) {
        try {
          return decodeURIComponent(e);
        } catch (t) {
          return e;
        }
      },
      Up = function (e) {
        var t = e.replace(Rp, " "),
          n = 4;
        try {
          return decodeURIComponent(t);
        } catch (e) {
          for (; n; ) t = t.replace(Lp(n--), Np);
          return t;
        }
      },
      Mp = /[!'()~]|%20/g,
      Dp = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
      },
      Fp = function (e) {
        return Dp[e];
      },
      qp = function (e) {
        return encodeURIComponent(e).replace(Mp, Fp);
      },
      Bp = function (e, t) {
        if (t)
          for (var n, r, i = t.split("&"), o = 0; o < i.length; )
            (n = i[o++]).length &&
              ((r = n.split("=")),
              e.push({ key: Up(r.shift()), value: Up(r.join("=")) }));
      },
      $p = function (e) {
        (this.entries.length = 0), Bp(this.entries, e);
      },
      Hp = function (e, t) {
        if (e < t) throw TypeError("Not enough arguments");
      },
      Vp = Ch(
        function (e, t) {
          Pp(this, { type: Cp, iterator: kp(Op(e).entries), kind: t });
        },
        "Iterator",
        function () {
          var e = Ip(this),
            t = e.kind,
            n = e.iterator.next(),
            r = n.value;
          return (
            n.done ||
              (n.value =
                "keys" === t
                  ? r.key
                  : "values" === t
                  ? r.value
                  : [r.key, r.value]),
            n
          );
        }
      ),
      Wp = function () {
        Vh(this, Wp, Ap);
        var e,
          t,
          n,
          r,
          i,
          o,
          s,
          a,
          l,
          c = arguments.length > 0 ? arguments[0] : void 0,
          u = this,
          h = [];
        if (
          (Pp(u, {
            type: Ap,
            entries: h,
            updateURL: function () {},
            updateSearchParams: $p,
          }),
          void 0 !== c)
        )
          if (kc(c))
            if ("function" == typeof (e = sp(c)))
              for (n = (t = e.call(c)).next; !(r = n.call(t)).done; ) {
                if (
                  (s = (o = (i = kp(Cc(r.value))).next).call(i)).done ||
                  (a = o.call(i)).done ||
                  !o.call(i).done
                )
                  throw TypeError("Expected sequence with length 2");
                h.push({ key: s.value + "", value: a.value + "" });
              }
            else for (l in c) Wc(c, l) && h.push({ key: l, value: c[l] + "" });
          else
            Bp(
              h,
              "string" == typeof c
                ? "?" === c.charAt(0)
                  ? c.slice(1)
                  : c
                : c + ""
            );
      },
      zp = Wp.prototype;
    !(function (e, t, n) {
      for (var r in t) vu(e, r, t[r], n);
    })(
      zp,
      {
        append: function (e, t) {
          Hp(arguments.length, 2);
          var n = Op(this);
          n.entries.push({ key: e + "", value: t + "" }), n.updateURL();
        },
        delete: function (e) {
          Hp(arguments.length, 1);
          for (
            var t = Op(this), n = t.entries, r = e + "", i = 0;
            i < n.length;

          )
            n[i].key === r ? n.splice(i, 1) : i++;
          t.updateURL();
        },
        get: function (e) {
          Hp(arguments.length, 1);
          for (var t = Op(this).entries, n = e + "", r = 0; r < t.length; r++)
            if (t[r].key === n) return t[r].value;
          return null;
        },
        getAll: function (e) {
          Hp(arguments.length, 1);
          for (
            var t = Op(this).entries, n = e + "", r = [], i = 0;
            i < t.length;
            i++
          )
            t[i].key === n && r.push(t[i].value);
          return r;
        },
        has: function (e) {
          Hp(arguments.length, 1);
          for (var t = Op(this).entries, n = e + "", r = 0; r < t.length; )
            if (t[r++].key === n) return !0;
          return !1;
        },
        set: function (e, t) {
          Hp(arguments.length, 1);
          for (
            var n,
              r = Op(this),
              i = r.entries,
              o = !1,
              s = e + "",
              a = t + "",
              l = 0;
            l < i.length;
            l++
          )
            (n = i[l]).key === s &&
              (o ? i.splice(l--, 1) : ((o = !0), (n.value = a)));
          o || i.push({ key: s, value: a }), r.updateURL();
        },
        sort: function () {
          var e,
            t,
            n,
            r = Op(this),
            i = r.entries,
            o = i.slice();
          for (i.length = 0, n = 0; n < o.length; n++) {
            for (e = o[n], t = 0; t < n; t++)
              if (i[t].key > e.key) {
                i.splice(t, 0, e);
                break;
              }
            t === n && i.push(e);
          }
          r.updateURL();
        },
        forEach: function (e) {
          for (
            var t,
              n = Op(this).entries,
              r = Kh(e, arguments.length > 1 ? arguments[1] : void 0, 3),
              i = 0;
            i < n.length;

          )
            r((t = n[i++]).value, t.key, this);
        },
        keys: function () {
          return new Vp(this, "keys");
        },
        values: function () {
          return new Vp(this, "values");
        },
        entries: function () {
          return new Vp(this, "entries");
        },
      },
      { enumerable: !0 }
    ),
      vu(zp, xp, zp.entries),
      vu(
        zp,
        "toString",
        function () {
          for (var e, t = Op(this).entries, n = [], r = 0; r < t.length; )
            (e = t[r++]), n.push(qp(e.key) + "=" + qp(e.value));
          return n.join("&");
        },
        { enumerable: !0 }
      ),
      Sh(Wp, Ap),
      Hu({ global: !0, forced: !Hh }, { URLSearchParams: Wp }),
      Hh ||
        "function" != typeof Sp ||
        "function" != typeof Tp ||
        Hu(
          { global: !0, enumerable: !0, forced: !0 },
          {
            fetch: function (e) {
              var t,
                n,
                r,
                i = [e];
              return (
                arguments.length > 1 &&
                  (kc((t = arguments[1])) &&
                    ((n = t.body),
                    ip(n) === Ap &&
                      ((r = t.headers ? new Tp(t.headers) : new Tp()).has(
                        "content-type"
                      ) ||
                        r.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8"
                        ),
                      (t = _h(t, {
                        body: Rc(0, String(n)),
                        headers: Rc(0, r),
                      })))),
                  i.push(t)),
                Sp.apply(this, i)
              );
            },
          }
        );
    var Yp,
      Kp = { URLSearchParams: Wp, getState: Op },
      Gp = vc.codeAt,
      Xp = wc.URL,
      Jp = Kp.URLSearchParams,
      Qp = Kp.getState,
      Zp = au.set,
      ed = au.getterFor("URL"),
      td = Math.floor,
      nd = Math.pow,
      rd = "Invalid scheme",
      id = "Invalid host",
      od = "Invalid port",
      sd = /[A-Za-z]/,
      ad = /[\d+-.A-Za-z]/,
      ld = /\d/,
      cd = /^(0x|0X)/,
      ud = /^[0-7]+$/,
      hd = /^\d+$/,
      pd = /^[\dA-Fa-f]+$/,
      dd = /[\u0000\t\u000A\u000D #%/:?@[\\]]/,
      fd = /[\u0000\t\u000A\u000D #/:?@[\\]]/,
      gd = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
      md = /[\t\u000A\u000D]/g,
      yd = function (e, t) {
        var n, r, i;
        if ("[" == t.charAt(0)) {
          if ("]" != t.charAt(t.length - 1)) return id;
          if (!(n = bd(t.slice(1, -1)))) return id;
          e.host = n;
        } else if (Ad(e)) {
          if (
            ((t = (function (e) {
              var t,
                n,
                r = [],
                i = e.toLowerCase().replace(up, ".").split(".");
              for (t = 0; t < i.length; t++)
                (n = i[t]), r.push(cp.test(n) ? "xn--" + mp(n) : n);
              return r.join(".");
            })(t)),
            dd.test(t))
          )
            return id;
          if (null === (n = vd(t))) return id;
          e.host = n;
        } else {
          if (fd.test(t)) return id;
          for (n = "", r = ap(t), i = 0; i < r.length; i++) n += Td(r[i], _d);
          e.host = n;
        }
      },
      vd = function (e) {
        var t,
          n,
          r,
          i,
          o,
          s,
          a,
          l = e.split(".");
        if ((l.length && "" == l[l.length - 1] && l.pop(), (t = l.length) > 4))
          return e;
        for (n = [], r = 0; r < t; r++) {
          if ("" == (i = l[r])) return e;
          if (
            ((o = 10),
            i.length > 1 &&
              "0" == i.charAt(0) &&
              ((o = cd.test(i) ? 16 : 8), (i = i.slice(8 == o ? 1 : 2))),
            "" === i)
          )
            s = 0;
          else {
            if (!(10 == o ? hd : 8 == o ? ud : pd).test(i)) return e;
            s = parseInt(i, o);
          }
          n.push(s);
        }
        for (r = 0; r < t; r++)
          if (((s = n[r]), r == t - 1)) {
            if (s >= nd(256, 5 - t)) return null;
          } else if (s > 255) return null;
        for (a = n.pop(), r = 0; r < n.length; r++) a += n[r] * nd(256, 3 - r);
        return a;
      },
      bd = function (e) {
        var t,
          n,
          r,
          i,
          o,
          s,
          a,
          l = [0, 0, 0, 0, 0, 0, 0, 0],
          c = 0,
          u = null,
          h = 0,
          p = function () {
            return e.charAt(h);
          };
        if (":" == p()) {
          if (":" != e.charAt(1)) return;
          (h += 2), (u = ++c);
        }
        for (; p(); ) {
          if (8 == c) return;
          if (":" != p()) {
            for (t = n = 0; n < 4 && pd.test(p()); )
              (t = 16 * t + parseInt(p(), 16)), h++, n++;
            if ("." == p()) {
              if (0 == n) return;
              if (((h -= n), c > 6)) return;
              for (r = 0; p(); ) {
                if (((i = null), r > 0)) {
                  if (!("." == p() && r < 4)) return;
                  h++;
                }
                if (!ld.test(p())) return;
                for (; ld.test(p()); ) {
                  if (((o = parseInt(p(), 10)), null === i)) i = o;
                  else {
                    if (0 == i) return;
                    i = 10 * i + o;
                  }
                  if (i > 255) return;
                  h++;
                }
                (l[c] = 256 * l[c] + i), (2 != ++r && 4 != r) || c++;
              }
              if (4 != r) return;
              break;
            }
            if (":" == p()) {
              if ((h++, !p())) return;
            } else if (p()) return;
            l[c++] = t;
          } else {
            if (null !== u) return;
            h++, (u = ++c);
          }
        }
        if (null !== u)
          for (s = c - u, c = 7; 0 != c && s > 0; )
            (a = l[c]), (l[c--] = l[u + s - 1]), (l[u + --s] = a);
        else if (8 != c) return;
        return l;
      },
      wd = function (e) {
        var t, n, r, i;
        if ("number" == typeof e) {
          for (t = [], n = 0; n < 4; n++) t.unshift(e % 256), (e = td(e / 256));
          return t.join(".");
        }
        if ("object" == typeof e) {
          for (
            t = "",
              r = (function (e) {
                for (var t = null, n = 1, r = null, i = 0, o = 0; o < 8; o++)
                  0 !== e[o]
                    ? (i > n && ((t = r), (n = i)), (r = null), (i = 0))
                    : (null === r && (r = o), ++i);
                return i > n && ((t = r), (n = i)), t;
              })(e),
              n = 0;
            n < 8;
            n++
          )
            (i && 0 === e[n]) ||
              (i && (i = !1),
              r === n
                ? ((t += n ? ":" : "::"), (i = !0))
                : ((t += e[n].toString(16)), n < 7 && (t += ":")));
          return "[" + t + "]";
        }
        return e;
      },
      _d = {},
      Ed = Yh({}, _d, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
      kd = Yh({}, Ed, { "#": 1, "?": 1, "{": 1, "}": 1 }),
      Sd = Yh({}, kd, {
        "/": 1,
        ":": 1,
        ";": 1,
        "=": 1,
        "@": 1,
        "[": 1,
        "\\": 1,
        "]": 1,
        "^": 1,
        "|": 1,
      }),
      Td = function (e, t) {
        var n = Gp(e, 0);
        return n > 32 && n < 127 && !Wc(t, e) ? e : encodeURIComponent(e);
      },
      xd = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
      Ad = function (e) {
        return Wc(xd, e.scheme);
      },
      Cd = function (e) {
        return "" != e.username || "" != e.password;
      },
      Pd = function (e) {
        return !e.host || e.cannotBeABaseURL || "file" == e.scheme;
      },
      Od = function (e, t) {
        var n;
        return (
          2 == e.length &&
          sd.test(e.charAt(0)) &&
          (":" == (n = e.charAt(1)) || (!t && "|" == n))
        );
      },
      Id = function (e) {
        var t;
        return (
          e.length > 1 &&
          Od(e.slice(0, 2)) &&
          (2 == e.length ||
            "/" === (t = e.charAt(2)) ||
            "\\" === t ||
            "?" === t ||
            "#" === t)
        );
      },
      Rd = function (e) {
        var t = e.path,
          n = t.length;
        !n || ("file" == e.scheme && 1 == n && Od(t[0], !0)) || t.pop();
      },
      jd = function (e) {
        return "." === e || "%2e" === e.toLowerCase();
      },
      Ld = {},
      Nd = {},
      Ud = {},
      Md = {},
      Dd = {},
      Fd = {},
      qd = {},
      Bd = {},
      $d = {},
      Hd = {},
      Vd = {},
      Wd = {},
      zd = {},
      Yd = {},
      Kd = {},
      Gd = {},
      Xd = {},
      Jd = {},
      Qd = {},
      Zd = {},
      ef = {},
      tf = function (e, t, n, r) {
        var i,
          o,
          s,
          a,
          l,
          c = n || Ld,
          u = 0,
          h = "",
          p = !1,
          d = !1,
          f = !1;
        for (
          n ||
            ((e.scheme = ""),
            (e.username = ""),
            (e.password = ""),
            (e.host = null),
            (e.port = null),
            (e.path = []),
            (e.query = null),
            (e.fragment = null),
            (e.cannotBeABaseURL = !1),
            (t = t.replace(gd, ""))),
            t = t.replace(md, ""),
            i = ap(t);
          u <= i.length;

        ) {
          switch (((o = i[u]), c)) {
            case Ld:
              if (!o || !sd.test(o)) {
                if (n) return rd;
                c = Ud;
                continue;
              }
              (h += o.toLowerCase()), (c = Nd);
              break;
            case Nd:
              if (o && (ad.test(o) || "+" == o || "-" == o || "." == o))
                h += o.toLowerCase();
              else {
                if (":" != o) {
                  if (n) return rd;
                  (h = ""), (c = Ud), (u = 0);
                  continue;
                }
                if (
                  n &&
                  (Ad(e) != Wc(xd, h) ||
                    ("file" == h && (Cd(e) || null !== e.port)) ||
                    ("file" == e.scheme && !e.host))
                )
                  return;
                if (((e.scheme = h), n))
                  return void (
                    Ad(e) &&
                    xd[e.scheme] == e.port &&
                    (e.port = null)
                  );
                (h = ""),
                  "file" == e.scheme
                    ? (c = Yd)
                    : Ad(e) && r && r.scheme == e.scheme
                    ? (c = Md)
                    : Ad(e)
                    ? (c = Bd)
                    : "/" == i[u + 1]
                    ? ((c = Dd), u++)
                    : ((e.cannotBeABaseURL = !0), e.path.push(""), (c = Qd));
              }
              break;
            case Ud:
              if (!r || (r.cannotBeABaseURL && "#" != o)) return rd;
              if (r.cannotBeABaseURL && "#" == o) {
                (e.scheme = r.scheme),
                  (e.path = r.path.slice()),
                  (e.query = r.query),
                  (e.fragment = ""),
                  (e.cannotBeABaseURL = !0),
                  (c = ef);
                break;
              }
              c = "file" == r.scheme ? Yd : Fd;
              continue;
            case Md:
              if ("/" != o || "/" != i[u + 1]) {
                c = Fd;
                continue;
              }
              (c = $d), u++;
              break;
            case Dd:
              if ("/" == o) {
                c = Hd;
                break;
              }
              c = Jd;
              continue;
            case Fd:
              if (((e.scheme = r.scheme), o == Yp))
                (e.username = r.username),
                  (e.password = r.password),
                  (e.host = r.host),
                  (e.port = r.port),
                  (e.path = r.path.slice()),
                  (e.query = r.query);
              else if ("/" == o || ("\\" == o && Ad(e))) c = qd;
              else if ("?" == o)
                (e.username = r.username),
                  (e.password = r.password),
                  (e.host = r.host),
                  (e.port = r.port),
                  (e.path = r.path.slice()),
                  (e.query = ""),
                  (c = Zd);
              else {
                if ("#" != o) {
                  (e.username = r.username),
                    (e.password = r.password),
                    (e.host = r.host),
                    (e.port = r.port),
                    (e.path = r.path.slice()),
                    e.path.pop(),
                    (c = Jd);
                  continue;
                }
                (e.username = r.username),
                  (e.password = r.password),
                  (e.host = r.host),
                  (e.port = r.port),
                  (e.path = r.path.slice()),
                  (e.query = r.query),
                  (e.fragment = ""),
                  (c = ef);
              }
              break;
            case qd:
              if (!Ad(e) || ("/" != o && "\\" != o)) {
                if ("/" != o) {
                  (e.username = r.username),
                    (e.password = r.password),
                    (e.host = r.host),
                    (e.port = r.port),
                    (c = Jd);
                  continue;
                }
                c = Hd;
              } else c = $d;
              break;
            case Bd:
              if (((c = $d), "/" != o || "/" != h.charAt(u + 1))) continue;
              u++;
              break;
            case $d:
              if ("/" != o && "\\" != o) {
                c = Hd;
                continue;
              }
              break;
            case Hd:
              if ("@" == o) {
                p && (h = "%40" + h), (p = !0), (s = ap(h));
                for (var g = 0; g < s.length; g++) {
                  var m = s[g];
                  if (":" != m || f) {
                    var y = Td(m, Sd);
                    f ? (e.password += y) : (e.username += y);
                  } else f = !0;
                }
                h = "";
              } else if (
                o == Yp ||
                "/" == o ||
                "?" == o ||
                "#" == o ||
                ("\\" == o && Ad(e))
              ) {
                if (p && "" == h) return "Invalid authority";
                (u -= ap(h).length + 1), (h = ""), (c = Vd);
              } else h += o;
              break;
            case Vd:
            case Wd:
              if (n && "file" == e.scheme) {
                c = Gd;
                continue;
              }
              if (":" != o || d) {
                if (
                  o == Yp ||
                  "/" == o ||
                  "?" == o ||
                  "#" == o ||
                  ("\\" == o && Ad(e))
                ) {
                  if (Ad(e) && "" == h) return id;
                  if (n && "" == h && (Cd(e) || null !== e.port)) return;
                  if ((a = yd(e, h))) return a;
                  if (((h = ""), (c = Xd), n)) return;
                  continue;
                }
                "[" == o ? (d = !0) : "]" == o && (d = !1), (h += o);
              } else {
                if ("" == h) return id;
                if ((a = yd(e, h))) return a;
                if (((h = ""), (c = zd), n == Wd)) return;
              }
              break;
            case zd:
              if (!ld.test(o)) {
                if (
                  o == Yp ||
                  "/" == o ||
                  "?" == o ||
                  "#" == o ||
                  ("\\" == o && Ad(e)) ||
                  n
                ) {
                  if ("" != h) {
                    var v = parseInt(h, 10);
                    if (v > 65535) return od;
                    (e.port = Ad(e) && v === xd[e.scheme] ? null : v), (h = "");
                  }
                  if (n) return;
                  c = Xd;
                  continue;
                }
                return od;
              }
              h += o;
              break;
            case Yd:
              if (((e.scheme = "file"), "/" == o || "\\" == o)) c = Kd;
              else {
                if (!r || "file" != r.scheme) {
                  c = Jd;
                  continue;
                }
                if (o == Yp)
                  (e.host = r.host),
                    (e.path = r.path.slice()),
                    (e.query = r.query);
                else if ("?" == o)
                  (e.host = r.host),
                    (e.path = r.path.slice()),
                    (e.query = ""),
                    (c = Zd);
                else {
                  if ("#" != o) {
                    Id(i.slice(u).join("")) ||
                      ((e.host = r.host), (e.path = r.path.slice()), Rd(e)),
                      (c = Jd);
                    continue;
                  }
                  (e.host = r.host),
                    (e.path = r.path.slice()),
                    (e.query = r.query),
                    (e.fragment = ""),
                    (c = ef);
                }
              }
              break;
            case Kd:
              if ("/" == o || "\\" == o) {
                c = Gd;
                break;
              }
              r &&
                "file" == r.scheme &&
                !Id(i.slice(u).join("")) &&
                (Od(r.path[0], !0)
                  ? e.path.push(r.path[0])
                  : (e.host = r.host)),
                (c = Jd);
              continue;
            case Gd:
              if (o == Yp || "/" == o || "\\" == o || "?" == o || "#" == o) {
                if (!n && Od(h)) c = Jd;
                else if ("" == h) {
                  if (((e.host = ""), n)) return;
                  c = Xd;
                } else {
                  if ((a = yd(e, h))) return a;
                  if (("localhost" == e.host && (e.host = ""), n)) return;
                  (h = ""), (c = Xd);
                }
                continue;
              }
              h += o;
              break;
            case Xd:
              if (Ad(e)) {
                if (((c = Jd), "/" != o && "\\" != o)) continue;
              } else if (n || "?" != o)
                if (n || "#" != o) {
                  if (o != Yp && ((c = Jd), "/" != o)) continue;
                } else (e.fragment = ""), (c = ef);
              else (e.query = ""), (c = Zd);
              break;
            case Jd:
              if (
                o == Yp ||
                "/" == o ||
                ("\\" == o && Ad(e)) ||
                (!n && ("?" == o || "#" == o))
              ) {
                if (
                  (".." === (l = (l = h).toLowerCase()) ||
                  "%2e." === l ||
                  ".%2e" === l ||
                  "%2e%2e" === l
                    ? (Rd(e),
                      "/" == o || ("\\" == o && Ad(e)) || e.path.push(""))
                    : jd(h)
                    ? "/" == o || ("\\" == o && Ad(e)) || e.path.push("")
                    : ("file" == e.scheme &&
                        !e.path.length &&
                        Od(h) &&
                        (e.host && (e.host = ""), (h = h.charAt(0) + ":")),
                      e.path.push(h)),
                  (h = ""),
                  "file" == e.scheme && (o == Yp || "?" == o || "#" == o))
                )
                  for (; e.path.length > 1 && "" === e.path[0]; )
                    e.path.shift();
                "?" == o
                  ? ((e.query = ""), (c = Zd))
                  : "#" == o && ((e.fragment = ""), (c = ef));
              } else h += Td(o, kd);
              break;
            case Qd:
              "?" == o
                ? ((e.query = ""), (c = Zd))
                : "#" == o
                ? ((e.fragment = ""), (c = ef))
                : o != Yp && (e.path[0] += Td(o, _d));
              break;
            case Zd:
              n || "#" != o
                ? o != Yp &&
                  ("'" == o && Ad(e)
                    ? (e.query += "%27")
                    : (e.query += "#" == o ? "%23" : Td(o, _d)))
                : ((e.fragment = ""), (c = ef));
              break;
            case ef:
              o != Yp && (e.fragment += Td(o, Ed));
          }
          u++;
        }
      },
      nf = function (e) {
        var t,
          n,
          r = Vh(this, nf, "URL"),
          i = arguments.length > 1 ? arguments[1] : void 0,
          o = String(e),
          s = Zp(r, { type: "URL" });
        if (void 0 !== i)
          if (i instanceof nf) t = ed(i);
          else if ((n = tf((t = {}), String(i)))) throw TypeError(n);
        if ((n = tf(s, o, null, t))) throw TypeError(n);
        var a = (s.searchParams = new Jp()),
          l = Qp(a);
        l.updateSearchParams(s.query),
          (l.updateURL = function () {
            s.query = String(a) || null;
          }),
          Ec ||
            ((r.href = of.call(r)),
            (r.origin = sf.call(r)),
            (r.protocol = af.call(r)),
            (r.username = lf.call(r)),
            (r.password = cf.call(r)),
            (r.host = uf.call(r)),
            (r.hostname = hf.call(r)),
            (r.port = pf.call(r)),
            (r.pathname = df.call(r)),
            (r.search = ff.call(r)),
            (r.searchParams = gf.call(r)),
            (r.hash = mf.call(r)));
      },
      rf = nf.prototype,
      of = function () {
        var e = ed(this),
          t = e.scheme,
          n = e.username,
          r = e.password,
          i = e.host,
          o = e.port,
          s = e.path,
          a = e.query,
          l = e.fragment,
          c = t + ":";
        return (
          null !== i
            ? ((c += "//"),
              Cd(e) && (c += n + (r ? ":" + r : "") + "@"),
              (c += wd(i)),
              null !== o && (c += ":" + o))
            : "file" == t && (c += "//"),
          (c += e.cannotBeABaseURL ? s[0] : s.length ? "/" + s.join("/") : ""),
          null !== a && (c += "?" + a),
          null !== l && (c += "#" + l),
          c
        );
      },
      sf = function () {
        var e = ed(this),
          t = e.scheme,
          n = e.port;
        if ("blob" == t)
          try {
            return new URL(t.path[0]).origin;
          } catch (e) {
            return "null";
          }
        return "file" != t && Ad(e)
          ? t + "://" + wd(e.host) + (null !== n ? ":" + n : "")
          : "null";
      },
      af = function () {
        return ed(this).scheme + ":";
      },
      lf = function () {
        return ed(this).username;
      },
      cf = function () {
        return ed(this).password;
      },
      uf = function () {
        var e = ed(this),
          t = e.host,
          n = e.port;
        return null === t ? "" : null === n ? wd(t) : wd(t) + ":" + n;
      },
      hf = function () {
        var e = ed(this).host;
        return null === e ? "" : wd(e);
      },
      pf = function () {
        var e = ed(this).port;
        return null === e ? "" : String(e);
      },
      df = function () {
        var e = ed(this),
          t = e.path;
        return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : "";
      },
      ff = function () {
        var e = ed(this).query;
        return e ? "?" + e : "";
      },
      gf = function () {
        return ed(this).searchParams;
      },
      mf = function () {
        var e = ed(this).fragment;
        return e ? "#" + e : "";
      },
      yf = function (e, t) {
        return { get: e, set: t, configurable: !0, enumerable: !0 };
      };
    if (
      (Ec &&
        gh(rf, {
          href: yf(of, function (e) {
            var t = ed(this),
              n = String(e),
              r = tf(t, n);
            if (r) throw TypeError(r);
            Qp(t.searchParams).updateSearchParams(t.query);
          }),
          origin: yf(sf),
          protocol: yf(af, function (e) {
            var t = ed(this);
            tf(t, String(e) + ":", Ld);
          }),
          username: yf(lf, function (e) {
            var t = ed(this),
              n = ap(String(e));
            if (!Pd(t)) {
              t.username = "";
              for (var r = 0; r < n.length; r++) t.username += Td(n[r], Sd);
            }
          }),
          password: yf(cf, function (e) {
            var t = ed(this),
              n = ap(String(e));
            if (!Pd(t)) {
              t.password = "";
              for (var r = 0; r < n.length; r++) t.password += Td(n[r], Sd);
            }
          }),
          host: yf(uf, function (e) {
            var t = ed(this);
            t.cannotBeABaseURL || tf(t, String(e), Vd);
          }),
          hostname: yf(hf, function (e) {
            var t = ed(this);
            t.cannotBeABaseURL || tf(t, String(e), Wd);
          }),
          port: yf(pf, function (e) {
            var t = ed(this);
            Pd(t) || ("" == (e = String(e)) ? (t.port = null) : tf(t, e, zd));
          }),
          pathname: yf(df, function (e) {
            var t = ed(this);
            t.cannotBeABaseURL || ((t.path = []), tf(t, e + "", Xd));
          }),
          search: yf(ff, function (e) {
            var t = ed(this);
            "" == (e = String(e))
              ? (t.query = null)
              : ("?" == e.charAt(0) && (e = e.slice(1)),
                (t.query = ""),
                tf(t, e, Zd)),
              Qp(t.searchParams).updateSearchParams(t.query);
          }),
          searchParams: yf(gf),
          hash: yf(mf, function (e) {
            var t = ed(this);
            "" != (e = String(e))
              ? ("#" == e.charAt(0) && (e = e.slice(1)),
                (t.fragment = ""),
                tf(t, e, ef))
              : (t.fragment = null);
          }),
        }),
      vu(
        rf,
        "toJSON",
        function () {
          return of.call(this);
        },
        { enumerable: !0 }
      ),
      vu(
        rf,
        "toString",
        function () {
          return of.call(this);
        },
        { enumerable: !0 }
      ),
      Xp)
    ) {
      var vf = Xp.createObjectURL,
        bf = Xp.revokeObjectURL;
      vf &&
        vu(nf, "createObjectURL", function (e) {
          return vf.apply(Xp, arguments);
        }),
        bf &&
          vu(nf, "revokeObjectURL", function (e) {
            return bf.apply(Xp, arguments);
          });
    }
    Sh(nf, "URL"), Hu({ global: !0, forced: !Hh, sham: !Ec }, { URL: nf });
    var wf = function () {
      var e = Cc(this),
        t = "";
      return (
        e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.dotAll && (t += "s"),
        e.unicode && (t += "u"),
        e.sticky && (t += "y"),
        t
      );
    };
    function _f(e, t) {
      return RegExp(e, t);
    }
    var Ef = {
        UNSUPPORTED_Y: _c(function () {
          var e = _f("a", "y");
          return (e.lastIndex = 2), null != e.exec("abcd");
        }),
        BROKEN_CARET: _c(function () {
          var e = _f("^r", "gy");
          return (e.lastIndex = 2), null != e.exec("str");
        }),
      },
      kf = RegExp.prototype.exec,
      Sf = zc("native-string-replace", String.prototype.replace),
      Tf = kf,
      xf = (function () {
        var e = /a/,
          t = /b*/g;
        return (
          kf.call(e, "a"),
          kf.call(t, "a"),
          0 !== e.lastIndex || 0 !== t.lastIndex
        );
      })(),
      Af = Ef.UNSUPPORTED_Y || Ef.BROKEN_CARET,
      Cf = void 0 !== /()??/.exec("")[1];
    (xf || Cf || Af) &&
      (Tf = function (e) {
        var t,
          n,
          r,
          i,
          o = this,
          s = Af && o.sticky,
          a = wf.call(o),
          l = o.source,
          c = 0,
          u = e;
        return (
          s &&
            (-1 === (a = a.replace("y", "")).indexOf("g") && (a += "g"),
            (u = String(e).slice(o.lastIndex)),
            o.lastIndex > 0 &&
              (!o.multiline || (o.multiline && "\n" !== e[o.lastIndex - 1])) &&
              ((l = "(?: " + l + ")"), (u = " " + u), c++),
            (n = new RegExp("^(?:" + l + ")", a))),
          Cf && (n = new RegExp("^" + l + "$(?!\\s)", a)),
          xf && (t = o.lastIndex),
          (r = kf.call(s ? n : o, u)),
          s
            ? r
              ? ((r.input = r.input.slice(c)),
                (r[0] = r[0].slice(c)),
                (r.index = o.lastIndex),
                (o.lastIndex += r[0].length))
              : (o.lastIndex = 0)
            : xf && r && (o.lastIndex = o.global ? r.index + r[0].length : t),
          Cf &&
            r &&
            r.length > 1 &&
            Sf.call(r[0], n, function () {
              for (i = 1; i < arguments.length - 2; i++)
                void 0 === arguments[i] && (r[i] = void 0);
            }),
          r
        );
      });
    var Pf = Tf;
    Hu({ target: "RegExp", proto: !0, forced: /./.exec !== Pf }, { exec: Pf });
    var Of = ch("species"),
      If = !_c(function () {
        var e = /./;
        return (
          (e.exec = function () {
            var e = [];
            return (e.groups = { a: "7" }), e;
          }),
          "7" !== "".replace(e, "$<a>")
        );
      }),
      Rf = "$0" === "a".replace(/./, "$0"),
      jf = ch("replace"),
      Lf = !!/./[jf] && "" === /./[jf]("a", "$0"),
      Nf = !_c(function () {
        var e = /(?:)/,
          t = e.exec;
        e.exec = function () {
          return t.apply(this, arguments);
        };
        var n = "ab".split(e);
        return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
      }),
      Uf = vc.charAt,
      Mf = function (e, t, n) {
        return t + (n ? Uf(e, t).length : 1);
      },
      Df = Math.floor,
      Ff = "".replace,
      qf = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
      Bf = /\$([$&'`]|\d{1,2})/g,
      $f = function (e, t, n, r, i, o) {
        var s = n + e.length,
          a = r.length,
          l = Bf;
        return (
          void 0 !== i && ((i = Vu(i)), (l = qf)),
          Ff.call(o, l, function (o, l) {
            var c;
            switch (l.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return e;
              case "`":
                return t.slice(0, n);
              case "'":
                return t.slice(s);
              case "<":
                c = i[l.slice(1, -1)];
                break;
              default:
                var u = +l;
                if (0 === u) return o;
                if (u > a) {
                  var h = Df(u / 10);
                  return 0 === h
                    ? o
                    : h <= a
                    ? void 0 === r[h - 1]
                      ? l.charAt(1)
                      : r[h - 1] + l.charAt(1)
                    : o;
                }
                c = r[u - 1];
            }
            return void 0 === c ? "" : c;
          })
        );
      },
      Hf = function (e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
          var r = n.call(e, t);
          if ("object" != typeof r)
            throw TypeError(
              "RegExp exec method returned something other than an Object or null"
            );
          return r;
        }
        if ("RegExp" !== pu(e))
          throw TypeError("RegExp#exec called on incompatible receiver");
        return Pf.call(e, t);
      },
      Vf = Math.max,
      Wf = Math.min;
    function zf(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function Yf(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function Kf(e, t) {
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
    function Gf(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Kf(Object(n), !0).forEach(function (t) {
              Yf(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Kf(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    !(function (e, t, n, r) {
      var i = ch(e),
        o = !_c(function () {
          var t = {};
          return (
            (t[i] = function () {
              return 7;
            }),
            7 != ""[e](t)
          );
        }),
        s =
          o &&
          !_c(function () {
            var t = !1,
              n = /a/;
            return (
              "split" === e &&
                (((n = {}).constructor = {}),
                (n.constructor[Of] = function () {
                  return n;
                }),
                (n.flags = ""),
                (n[i] = /./[i])),
              (n.exec = function () {
                return (t = !0), null;
              }),
              n[i](""),
              !t
            );
          });
      if (
        !o ||
        !s ||
        ("replace" === e && (!If || !Rf || Lf)) ||
        ("split" === e && !Nf)
      ) {
        var a = /./[i],
          l = n(
            i,
            ""[e],
            function (e, t, n, r, i) {
              return t.exec === RegExp.prototype.exec
                ? o && !i
                  ? { done: !0, value: a.call(t, n, r) }
                  : { done: !0, value: e.call(n, t, r) }
                : { done: !1 };
            },
            {
              REPLACE_KEEPS_$0: Rf,
              REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Lf,
            }
          ),
          c = l[0],
          u = l[1];
        vu(String.prototype, e, c),
          vu(
            RegExp.prototype,
            i,
            2 == t
              ? function (e, t) {
                  return u.call(e, this, t);
                }
              : function (e) {
                  return u.call(e, this);
                }
          );
      }
      r && jc(RegExp.prototype[i], "sham", !0);
    })("replace", 2, function (e, t, n, r) {
      var i = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
        o = r.REPLACE_KEEPS_$0,
        s = i ? "$" : "$0";
      return [
        function (n, r) {
          var i = mc(this),
            o = null == n ? void 0 : n[e];
          return void 0 !== o ? o.call(n, i, r) : t.call(String(i), n, r);
        },
        function (e, r) {
          if ((!i && o) || ("string" == typeof r && -1 === r.indexOf(s))) {
            var a = n(t, e, this, r);
            if (a.done) return a.value;
          }
          var l = Cc(e),
            c = String(this),
            u = "function" == typeof r;
          u || (r = String(r));
          var h = l.global;
          if (h) {
            var p = l.unicode;
            l.lastIndex = 0;
          }
          for (var d = []; ; ) {
            var f = Hf(l, c);
            if (null === f) break;
            if ((d.push(f), !h)) break;
            "" === String(f[0]) && (l.lastIndex = Mf(c, ku(l.lastIndex), p));
          }
          for (var g, m = "", y = 0, v = 0; v < d.length; v++) {
            f = d[v];
            for (
              var b = String(f[0]),
                w = Vf(Wf(gc(f.index), c.length), 0),
                _ = [],
                E = 1;
              E < f.length;
              E++
            )
              _.push(void 0 === (g = f[E]) ? g : String(g));
            var k = f.groups;
            if (u) {
              var S = [b].concat(_, w, c);
              void 0 !== k && S.push(k);
              var T = String(r.apply(void 0, S));
            } else T = $f(b, c, w, _, k, r);
            w >= y && ((m += c.slice(y, w) + T), (y = w + b.length));
          }
          return m + c.slice(y);
        },
      ];
    });
    var Xf = { addCSS: !0, thumbWidth: 15, watch: !0 };
    function Jf(e, t) {
      return function () {
        return Array.from(document.querySelectorAll(t)).includes(this);
      }.call(e, t);
    }
    var Qf = function (e) {
        return null != e ? e.constructor : null;
      },
      Zf = function (e, t) {
        return !!(e && t && e instanceof t);
      },
      eg = function (e) {
        return null == e;
      },
      tg = function (e) {
        return Qf(e) === Object;
      },
      ng = function (e) {
        return Qf(e) === String;
      },
      rg = function (e) {
        return Array.isArray(e);
      },
      ig = function (e) {
        return Zf(e, NodeList);
      },
      og = ng,
      sg = rg,
      ag = ig,
      lg = function (e) {
        return Zf(e, Element);
      },
      cg = function (e) {
        return Zf(e, Event);
      },
      ug = function (e) {
        return (
          eg(e) ||
          ((ng(e) || rg(e) || ig(e)) && !e.length) ||
          (tg(e) && !Object.keys(e).length)
        );
      };
    function hg(e, t) {
      if (1 > t) {
        var n = (function (e) {
          var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
          return t
            ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0))
            : 0;
        })(t);
        return parseFloat(e.toFixed(n));
      }
      return Math.round(e / t) * t;
    }
    var pg = (function () {
      function e(t, n) {
        (function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          lg(t)
            ? (this.element = t)
            : og(t) && (this.element = document.querySelector(t)),
          lg(this.element) &&
            ug(this.element.rangeTouch) &&
            ((this.config = Gf({}, Xf, {}, n)), this.init());
      }
      return (
        (function (e, t, n) {
          t && zf(e.prototype, t), n && zf(e, n);
        })(
          e,
          [
            {
              key: "init",
              value: function () {
                e.enabled &&
                  (this.config.addCSS &&
                    ((this.element.style.userSelect = "none"),
                    (this.element.style.webKitUserSelect = "none"),
                    (this.element.style.touchAction = "manipulation")),
                  this.listeners(!0),
                  (this.element.rangeTouch = this));
              },
            },
            {
              key: "destroy",
              value: function () {
                e.enabled &&
                  (this.config.addCSS &&
                    ((this.element.style.userSelect = ""),
                    (this.element.style.webKitUserSelect = ""),
                    (this.element.style.touchAction = "")),
                  this.listeners(!1),
                  (this.element.rangeTouch = null));
              },
            },
            {
              key: "listeners",
              value: function (e) {
                var t = this,
                  n = e ? "addEventListener" : "removeEventListener";
                ["touchstart", "touchmove", "touchend"].forEach(function (e) {
                  t.element[n](
                    e,
                    function (e) {
                      return t.set(e);
                    },
                    !1
                  );
                });
              },
            },
            {
              key: "get",
              value: function (t) {
                if (!e.enabled || !cg(t)) return null;
                var n,
                  r = t.target,
                  i = t.changedTouches[0],
                  o = parseFloat(r.getAttribute("min")) || 0,
                  s = parseFloat(r.getAttribute("max")) || 100,
                  a = parseFloat(r.getAttribute("step")) || 1,
                  l = r.getBoundingClientRect(),
                  c = ((100 / l.width) * (this.config.thumbWidth / 2)) / 100;
                return (
                  0 > (n = (100 / l.width) * (i.clientX - l.left))
                    ? (n = 0)
                    : 100 < n && (n = 100),
                  50 > n
                    ? (n -= (100 - 2 * n) * c)
                    : 50 < n && (n += 2 * (n - 50) * c),
                  o + hg((n / 100) * (s - o), a)
                );
              },
            },
            {
              key: "set",
              value: function (t) {
                e.enabled &&
                  cg(t) &&
                  !t.target.disabled &&
                  (t.preventDefault(),
                  (t.target.value = this.get(t)),
                  (function (e, t) {
                    if (e && t) {
                      var n = new Event(t, { bubbles: !0 });
                      e.dispatchEvent(n);
                    }
                  })(t.target, "touchend" === t.type ? "change" : "input"));
              },
            },
          ],
          [
            {
              key: "setup",
              value: function (t) {
                var n =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r = null;
                if (
                  (ug(t) || og(t)
                    ? (r = Array.from(
                        document.querySelectorAll(
                          og(t) ? t : 'input[type="range"]'
                        )
                      ))
                    : lg(t)
                    ? (r = [t])
                    : ag(t)
                    ? (r = Array.from(t))
                    : sg(t) && (r = t.filter(lg)),
                  ug(r))
                )
                  return null;
                var i = Gf({}, Xf, {}, n);
                if (og(t) && i.watch) {
                  var o = new MutationObserver(function (n) {
                    Array.from(n).forEach(function (n) {
                      Array.from(n.addedNodes).forEach(function (n) {
                        lg(n) && Jf(n, t) && new e(n, i);
                      });
                    });
                  });
                  o.observe(document.body, { childList: !0, subtree: !0 });
                }
                return r.map(function (t) {
                  return new e(t, n);
                });
              },
            },
            {
              key: "enabled",
              get: function () {
                return "ontouchstart" in document.documentElement;
              },
            },
          ]
        ),
        e
      );
    })();
    const dg = (e) => (null != e ? e.constructor : null),
      fg = (e, t) => Boolean(e && t && e instanceof t),
      gg = (e) => null == e,
      mg = (e) => dg(e) === Object,
      yg = (e) => dg(e) === String,
      vg = (e) => dg(e) === Function,
      bg = (e) => Array.isArray(e),
      wg = (e) => fg(e, NodeList),
      _g = (e) =>
        gg(e) ||
        ((yg(e) || bg(e) || wg(e)) && !e.length) ||
        (mg(e) && !Object.keys(e).length);
    var Eg = gg,
      kg = mg,
      Sg = (e) => dg(e) === Number && !Number.isNaN(e),
      Tg = yg,
      xg = (e) => dg(e) === Boolean,
      Ag = vg,
      Cg = bg,
      Pg = wg,
      Og = (e) =>
        null !== e &&
        "object" == typeof e &&
        1 === e.nodeType &&
        "object" == typeof e.style &&
        "object" == typeof e.ownerDocument,
      Ig = (e) => fg(e, Event),
      Rg = (e) => fg(e, KeyboardEvent),
      jg = (e) => fg(e, TextTrack) || (!gg(e) && yg(e.kind)),
      Lg = (e) => fg(e, Promise) && vg(e.then),
      Ng = (e) => {
        if (fg(e, window.URL)) return !0;
        if (!yg(e)) return !1;
        let t = e;
        (e.startsWith("http://") && e.startsWith("https://")) ||
          (t = `http://${e}`);
        try {
          return !_g(new URL(t).hostname);
        } catch (e) {
          return !1;
        }
      },
      Ug = _g;
    const Mg = (() => {
      const e = document.createElement("span"),
        t = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        },
        n = Object.keys(t).find((t) => void 0 !== e.style[t]);
      return !!Tg(n) && t[n];
    })();
    function Dg(e, t) {
      setTimeout(() => {
        try {
          (e.hidden = !0), e.offsetHeight, (e.hidden = !1);
        } catch (e) {}
      }, t);
    }
    const Fg = {
      isIE: Boolean(window.document.documentMode),
      isEdge: window.navigator.userAgent.includes("Edge"),
      isWebkit:
        "WebkitAppearance" in document.documentElement.style &&
        !/Edge/.test(navigator.userAgent),
      isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
      isIos:
        ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) ||
        /(iPad|iPhone|iPod)/gi.test(navigator.platform),
    };
    function qg(e, t) {
      return t.split(".").reduce((e, t) => e && e[t], e);
    }
    function Bg(e = {}, ...t) {
      if (!t.length) return e;
      const n = t.shift();
      return kg(n)
        ? (Object.keys(n).forEach((t) => {
            kg(n[t])
              ? (Object.keys(e).includes(t) || Object.assign(e, { [t]: {} }),
                Bg(e[t], n[t]))
              : Object.assign(e, { [t]: n[t] });
          }),
          Bg(e, ...t))
        : e;
    }
    function $g(e, t) {
      const n = e.length ? e : [e];
      Array.from(n)
        .reverse()
        .forEach((e, n) => {
          const r = n > 0 ? t.cloneNode(!0) : t,
            i = e.parentNode,
            o = e.nextSibling;
          r.appendChild(e), o ? i.insertBefore(r, o) : i.appendChild(r);
        });
    }
    function Hg(e, t) {
      Og(e) &&
        !Ug(t) &&
        Object.entries(t)
          .filter(([, e]) => !Eg(e))
          .forEach(([t, n]) => e.setAttribute(t, n));
    }
    function Vg(e, t, n) {
      const r = document.createElement(e);
      return kg(t) && Hg(r, t), Tg(n) && (r.innerText = n), r;
    }
    function Wg(e, t, n, r) {
      Og(t) && t.appendChild(Vg(e, n, r));
    }
    function zg(e) {
      Pg(e) || Cg(e)
        ? Array.from(e).forEach(zg)
        : Og(e) && Og(e.parentNode) && e.parentNode.removeChild(e);
    }
    function Yg(e) {
      if (!Og(e)) return;
      let { length: t } = e.childNodes;
      for (; t > 0; ) e.removeChild(e.lastChild), (t -= 1);
    }
    function Kg(e, t) {
      return Og(t) && Og(t.parentNode) && Og(e)
        ? (t.parentNode.replaceChild(e, t), e)
        : null;
    }
    function Gg(e, t) {
      if (!Tg(e) || Ug(e)) return {};
      const n = {},
        r = Bg({}, t);
      return (
        e.split(",").forEach((e) => {
          const t = e.trim(),
            i = t.replace(".", ""),
            o = t.replace(/[[\]]/g, "").split("="),
            [s] = o,
            a = o.length > 1 ? o[1].replace(/["']/g, "") : "";
          switch (t.charAt(0)) {
            case ".":
              Tg(r.class) ? (n.class = `${r.class} ${i}`) : (n.class = i);
              break;
            case "#":
              n.id = t.replace("#", "");
              break;
            case "[":
              n[s] = a;
          }
        }),
        Bg(r, n)
      );
    }
    function Xg(e, t) {
      if (!Og(e)) return;
      let n = t;
      xg(n) || (n = !e.hidden), (e.hidden = n);
    }
    function Jg(e, t, n) {
      if (Pg(e)) return Array.from(e).map((e) => Jg(e, t, n));
      if (Og(e)) {
        let r = "toggle";
        return (
          void 0 !== n && (r = n ? "add" : "remove"),
          e.classList[r](t),
          e.classList.contains(t)
        );
      }
      return !1;
    }
    function Qg(e, t) {
      return Og(e) && e.classList.contains(t);
    }
    function Zg(e, t) {
      const { prototype: n } = Element;
      return (
        n.matches ||
        n.webkitMatchesSelector ||
        n.mozMatchesSelector ||
        n.msMatchesSelector ||
        function () {
          return Array.from(document.querySelectorAll(t)).includes(this);
        }
      ).call(e, t);
    }
    function em(e) {
      return this.elements.container.querySelectorAll(e);
    }
    function tm(e) {
      return this.elements.container.querySelector(e);
    }
    function nm(e = null, t = !1) {
      Og(e) &&
        (e.focus({ preventScroll: !0 }),
        t && Jg(e, this.config.classNames.tabFocus));
    }
    const rm = {
        "audio/ogg": "vorbis",
        "audio/wav": "1",
        "video/webm": "vp8, vorbis",
        "video/mp4": "avc1.42E01E, mp4a.40.2",
        "video/ogg": "theora",
      },
      im = {
        audio: "canPlayType" in document.createElement("audio"),
        video: "canPlayType" in document.createElement("video"),
        check(e, t, n) {
          const r = Fg.isIPhone && n && im.playsinline,
            i = im[e] || "html5" !== t;
          return {
            api: i,
            ui: i && im.rangeInput && ("video" !== e || !Fg.isIPhone || r),
          };
        },
        pip: !(
          Fg.isIPhone ||
          (!Ag(Vg("video").webkitSetPresentationMode) &&
            (!document.pictureInPictureEnabled ||
              Vg("video").disablePictureInPicture))
        ),
        airplay: Ag(window.WebKitPlaybackTargetAvailabilityEvent),
        playsinline: "playsInline" in document.createElement("video"),
        mime(e) {
          if (Ug(e)) return !1;
          const [t] = e.split("/");
          let n = e;
          if (!this.isHTML5 || t !== this.type) return !1;
          Object.keys(rm).includes(n) && (n += `; codecs="${rm[e]}"`);
          try {
            return Boolean(n && this.media.canPlayType(n).replace(/no/, ""));
          } catch (e) {
            return !1;
          }
        },
        textTracks: "textTracks" in document.createElement("video"),
        rangeInput: (() => {
          const e = document.createElement("input");
          return (e.type = "range"), "range" === e.type;
        })(),
        touch: "ontouchstart" in document.documentElement,
        transitions: !1 !== Mg,
        reducedMotion:
          "matchMedia" in window &&
          window.matchMedia("(prefers-reduced-motion)").matches,
      },
      om = (() => {
        let e = !1;
        try {
          const t = Object.defineProperty({}, "passive", {
            get: () => ((e = !0), null),
          });
          window.addEventListener("test", null, t),
            window.removeEventListener("test", null, t);
        } catch (e) {}
        return e;
      })();
    function sm(e, t, n, r = !1, i = !0, o = !1) {
      if (!e || !("addEventListener" in e) || Ug(t) || !Ag(n)) return;
      const s = t.split(" ");
      let a = o;
      om && (a = { passive: i, capture: o }),
        s.forEach((t) => {
          this &&
            this.eventListeners &&
            r &&
            this.eventListeners.push({
              element: e,
              type: t,
              callback: n,
              options: a,
            }),
            e[r ? "addEventListener" : "removeEventListener"](t, n, a);
        });
    }
    function am(e, t = "", n, r = !0, i = !1) {
      sm.call(this, e, t, n, !0, r, i);
    }
    function lm(e, t = "", n, r = !0, i = !1) {
      sm.call(this, e, t, n, !1, r, i);
    }
    function cm(e, t = "", n, r = !0, i = !1) {
      const o = (...s) => {
        lm(e, t, o, r, i), n.apply(this, s);
      };
      sm.call(this, e, t, o, !0, r, i);
    }
    function um(e, t = "", n = !1, r = {}) {
      if (!Og(e) || Ug(t)) return;
      const i = new CustomEvent(t, {
        bubbles: n,
        detail: { ...r, plyr: this },
      });
      e.dispatchEvent(i);
    }
    function hm() {
      this &&
        this.eventListeners &&
        (this.eventListeners.forEach((e) => {
          const { element: t, type: n, callback: r, options: i } = e;
          t.removeEventListener(n, r, i);
        }),
        (this.eventListeners = []));
    }
    function pm() {
      return new Promise((e) =>
        this.ready
          ? setTimeout(e, 0)
          : am.call(this, this.elements.container, "ready", e)
      ).then(() => {});
    }
    function dm(e) {
      Lg(e) && e.then(null, () => {});
    }
    function fm(e) {
      return Cg(e) ? e.filter((t, n) => e.indexOf(t) === n) : e;
    }
    function gm(e, t) {
      return Cg(e) && e.length
        ? e.reduce((e, n) => (Math.abs(n - t) < Math.abs(e - t) ? n : e))
        : null;
    }
    function mm(e) {
      return !(!window || !window.CSS) && window.CSS.supports(e);
    }
    const ym = [
      [1, 1],
      [4, 3],
      [3, 4],
      [5, 4],
      [4, 5],
      [3, 2],
      [2, 3],
      [16, 10],
      [10, 16],
      [16, 9],
      [9, 16],
      [21, 9],
      [9, 21],
      [32, 9],
      [9, 32],
    ].reduce((e, [t, n]) => ({ ...e, [t / n]: [t, n] }), {});
    function vm(e) {
      if (!(Cg(e) || (Tg(e) && e.includes(":")))) return !1;
      return (Cg(e) ? e : e.split(":")).map(Number).every(Sg);
    }
    function bm(e) {
      if (!Cg(e) || !e.every(Sg)) return null;
      const [t, n] = e,
        r = (e, t) => (0 === t ? e : r(t, e % t)),
        i = r(t, n);
      return [t / i, n / i];
    }
    function wm(e) {
      const t = (e) => (vm(e) ? e.split(":").map(Number) : null);
      let n = t(e);
      if (
        (null === n && (n = t(this.config.ratio)),
        null === n &&
          !Ug(this.embed) &&
          Cg(this.embed.ratio) &&
          ({ ratio: n } = this.embed),
        null === n && this.isHTML5)
      ) {
        const { videoWidth: e, videoHeight: t } = this.media;
        n = [e, t];
      }
      return bm(n);
    }
    function _m(e) {
      if (!this.isVideo) return {};
      const { wrapper: t } = this.elements,
        n = wm.call(this, e);
      if (!Cg(n)) return {};
      const [r, i] = bm(n),
        o = (100 / r) * i;
      if (
        (mm(`aspect-ratio: ${r}/${i}`)
          ? (t.style.aspectRatio = `${r}/${i}`)
          : (t.style.paddingBottom = `${o}%`),
        this.isVimeo && !this.config.vimeo.premium && this.supported.ui)
      ) {
        const e =
            (100 / this.media.offsetWidth) *
            parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
          n = (e - o) / (e / 50);
        this.fullscreen.active
          ? (t.style.paddingBottom = null)
          : (this.media.style.transform = `translateY(-${n}%)`);
      } else
        this.isHTML5 && t.classList.add(this.config.classNames.videoFixedRatio);
      return { padding: o, ratio: n };
    }
    function Em(e, t, n = 0.05) {
      const r = e / t,
        i = gm(Object.keys(ym), r);
      return Math.abs(i - r) <= n ? ym[i] : [e, t];
    }
    const km = {
      getSources() {
        if (!this.isHTML5) return [];
        return Array.from(this.media.querySelectorAll("source")).filter((e) => {
          const t = e.getAttribute("type");
          return !!Ug(t) || im.mime.call(this, t);
        });
      },
      getQualityOptions() {
        return this.config.quality.forced
          ? this.config.quality.options
          : km.getSources
              .call(this)
              .map((e) => Number(e.getAttribute("size")))
              .filter(Boolean);
      },
      setup() {
        if (!this.isHTML5) return;
        const e = this;
        (e.options.speed = e.config.speed.options),
          Ug(this.config.ratio) || _m.call(e),
          Object.defineProperty(e.media, "quality", {
            get() {
              const t = km.getSources
                .call(e)
                .find((t) => t.getAttribute("src") === e.source);
              return t && Number(t.getAttribute("size"));
            },
            set(t) {
              if (e.quality !== t) {
                if (e.config.quality.forced && Ag(e.config.quality.onChange))
                  e.config.quality.onChange(t);
                else {
                  const n = km.getSources
                    .call(e)
                    .find((e) => Number(e.getAttribute("size")) === t);
                  if (!n) return;
                  const {
                    currentTime: r,
                    paused: i,
                    preload: o,
                    readyState: s,
                    playbackRate: a,
                  } = e.media;
                  (e.media.src = n.getAttribute("src")),
                    ("none" !== o || s) &&
                      (e.once("loadedmetadata", () => {
                        (e.speed = a), (e.currentTime = r), i || dm(e.play());
                      }),
                      e.media.load());
                }
                um.call(e, e.media, "qualitychange", !1, { quality: t });
              }
            },
          });
      },
      cancelRequests() {
        this.isHTML5 &&
          (zg(km.getSources.call(this)),
          this.media.setAttribute("src", this.config.blankVideo),
          this.media.load(),
          this.debug.log("Cancelled network requests"));
      },
    };
    function Sm(e, ...t) {
      return Ug(e)
        ? e
        : e.toString().replace(/{(\d+)}/g, (e, n) => t[n].toString());
    }
    const Tm = (e = "", t = "", n = "") =>
        e.replace(
          new RegExp(
            t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"),
            "g"
          ),
          n.toString()
        ),
      xm = (e = "") =>
        e
          .toString()
          .replace(
            /\w\S*/g,
            (e) => e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
          );
    function Am(e = "") {
      let t = e.toString();
      return (
        (t = (function (e = "") {
          let t = e.toString();
          return (
            (t = Tm(t, "-", " ")),
            (t = Tm(t, "_", " ")),
            (t = xm(t)),
            Tm(t, " ", "")
          );
        })(t)),
        t.charAt(0).toLowerCase() + t.slice(1)
      );
    }
    function Cm(e) {
      const t = document.createElement("div");
      return t.appendChild(e), t.innerHTML;
    }
    const Pm = {
        pip: "PIP",
        airplay: "AirPlay",
        html5: "HTML5",
        vimeo: "Vimeo",
        youtube: "YouTube",
      },
      Om = {
        get(e = "", t = {}) {
          if (Ug(e) || Ug(t)) return "";
          let n = qg(t.i18n, e);
          if (Ug(n)) return Object.keys(Pm).includes(e) ? Pm[e] : "";
          const r = { "{seektime}": t.seekTime, "{title}": t.title };
          return (
            Object.entries(r).forEach(([e, t]) => {
              n = Tm(n, e, t);
            }),
            n
          );
        },
      };
    class Im {
      constructor(e) {
        pc(this, "get", (e) => {
          if (!Im.supported || !this.enabled) return null;
          const t = window.localStorage.getItem(this.key);
          if (Ug(t)) return null;
          const n = JSON.parse(t);
          return Tg(e) && e.length ? n[e] : n;
        }),
          pc(this, "set", (e) => {
            if (!Im.supported || !this.enabled) return;
            if (!kg(e)) return;
            let t = this.get();
            Ug(t) && (t = {}),
              Bg(t, e),
              window.localStorage.setItem(this.key, JSON.stringify(t));
          }),
          (this.enabled = e.config.storage.enabled),
          (this.key = e.config.storage.key);
      }
      static get supported() {
        try {
          if (!("localStorage" in window)) return !1;
          const e = "___test";
          return (
            window.localStorage.setItem(e, e),
            window.localStorage.removeItem(e),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
    }
    function Rm(e, t = "text") {
      return new Promise((n, r) => {
        try {
          const r = new XMLHttpRequest();
          if (!("withCredentials" in r)) return;
          r.addEventListener("load", () => {
            if ("text" === t)
              try {
                n(JSON.parse(r.responseText));
              } catch (e) {
                n(r.responseText);
              }
            else n(r.response);
          }),
            r.addEventListener("error", () => {
              throw new Error(r.status);
            }),
            r.open("GET", e, !0),
            (r.responseType = t),
            r.send();
        } catch (e) {
          r(e);
        }
      });
    }
    function jm(e, t) {
      if (!Tg(e)) return;
      const n = Tg(t);
      let r = !1;
      const i = () => null !== document.getElementById(t),
        o = (e, t) => {
          (e.innerHTML = t),
            (n && i()) || document.body.insertAdjacentElement("afterbegin", e);
        };
      if (!n || !i()) {
        const i = Im.supported,
          s = document.createElement("div");
        if ((s.setAttribute("hidden", ""), n && s.setAttribute("id", t), i)) {
          const e = window.localStorage.getItem(`cache-${t}`);
          if (((r = null !== e), r)) {
            const t = JSON.parse(e);
            o(s, t.content);
          }
        }
        Rm(e)
          .then((e) => {
            Ug(e) ||
              (i &&
                window.localStorage.setItem(
                  `cache-${t}`,
                  JSON.stringify({ content: e })
                ),
              o(s, e));
          })
          .catch(() => {});
      }
    }
    const Lm = (e) => Math.trunc((e / 60 / 60) % 60, 10);
    function Nm(e = 0, t = !1, n = !1) {
      if (!Sg(e)) return Nm(void 0, t, n);
      const r = (e) => `0${e}`.slice(-2);
      let i = Lm(e);
      const o = ((s = e), Math.trunc((s / 60) % 60, 10));
      var s;
      const a = ((e) => Math.trunc(e % 60, 10))(e);
      return (
        (i = t || i > 0 ? `${i}:` : ""),
        `${n && e > 0 ? "-" : ""}${i}${r(o)}:${r(a)}`
      );
    }
    const Um = {
      getIconUrl() {
        const e =
          new URL(this.config.iconUrl, window.location).host !==
            window.location.host ||
          (Fg.isIE && !window.svg4everybody);
        return { url: this.config.iconUrl, cors: e };
      },
      findElements() {
        try {
          return (
            (this.elements.controls = tm.call(
              this,
              this.config.selectors.controls.wrapper
            )),
            (this.elements.buttons = {
              play: em.call(this, this.config.selectors.buttons.play),
              pause: tm.call(this, this.config.selectors.buttons.pause),
              restart: tm.call(this, this.config.selectors.buttons.restart),
              rewind: tm.call(this, this.config.selectors.buttons.rewind),
              fastForward: tm.call(
                this,
                this.config.selectors.buttons.fastForward
              ),
              mute: tm.call(this, this.config.selectors.buttons.mute),
              pip: tm.call(this, this.config.selectors.buttons.pip),
              airplay: tm.call(this, this.config.selectors.buttons.airplay),
              settings: tm.call(this, this.config.selectors.buttons.settings),
              captions: tm.call(this, this.config.selectors.buttons.captions),
              fullscreen: tm.call(
                this,
                this.config.selectors.buttons.fullscreen
              ),
            }),
            (this.elements.progress = tm.call(
              this,
              this.config.selectors.progress
            )),
            (this.elements.inputs = {
              seek: tm.call(this, this.config.selectors.inputs.seek),
              volume: tm.call(this, this.config.selectors.inputs.volume),
            }),
            (this.elements.display = {
              buffer: tm.call(this, this.config.selectors.display.buffer),
              currentTime: tm.call(
                this,
                this.config.selectors.display.currentTime
              ),
              duration: tm.call(this, this.config.selectors.display.duration),
            }),
            Og(this.elements.progress) &&
              (this.elements.display.seekTooltip =
                this.elements.progress.querySelector(
                  `.${this.config.classNames.tooltip}`
                )),
            !0
          );
        } catch (e) {
          return (
            this.debug.warn(
              "It looks like there is a problem with your custom controls HTML",
              e
            ),
            this.toggleNativeControls(!0),
            !1
          );
        }
      },
      createIcon(e, t) {
        const n = "http://www.w3.org/2000/svg",
          r = Um.getIconUrl.call(this),
          i = `${r.cors ? "" : r.url}#${this.config.iconPrefix}`,
          o = document.createElementNS(n, "svg");
        Hg(o, Bg(t, { "aria-hidden": "true", focusable: "false" }));
        const s = document.createElementNS(n, "use"),
          a = `${i}-${e}`;
        return (
          "href" in s &&
            s.setAttributeNS("http://www.w3.org/1999/xlink", "href", a),
          s.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a),
          o.appendChild(s),
          o
        );
      },
      createLabel(e, t = {}) {
        const n = Om.get(e, this.config);
        return Vg(
          "span",
          {
            ...t,
            class: [t.class, this.config.classNames.hidden]
              .filter(Boolean)
              .join(" "),
          },
          n
        );
      },
      createBadge(e) {
        if (Ug(e)) return null;
        const t = Vg("span", { class: this.config.classNames.menu.value });
        return (
          t.appendChild(
            Vg("span", { class: this.config.classNames.menu.badge }, e)
          ),
          t
        );
      },
      createButton(e, t) {
        const n = Bg({}, t);
        let r = Am(e);
        const i = {
          element: "button",
          toggle: !1,
          label: null,
          icon: null,
          labelPressed: null,
          iconPressed: null,
        };
        switch (
          (["element", "icon", "label"].forEach((e) => {
            Object.keys(n).includes(e) && ((i[e] = n[e]), delete n[e]);
          }),
          "button" !== i.element ||
            Object.keys(n).includes("type") ||
            (n.type = "button"),
          Object.keys(n).includes("class")
            ? n.class
                .split(" ")
                .some((e) => e === this.config.classNames.control) ||
              Bg(n, { class: `${n.class} ${this.config.classNames.control}` })
            : (n.class = this.config.classNames.control),
          e)
        ) {
          case "play":
            (i.toggle = !0),
              (i.label = "play"),
              (i.labelPressed = "pause"),
              (i.icon = "play"),
              (i.iconPressed = "pause");
            break;
          case "mute":
            (i.toggle = !0),
              (i.label = "mute"),
              (i.labelPressed = "unmute"),
              (i.icon = "volume"),
              (i.iconPressed = "muted");
            break;
          case "captions":
            (i.toggle = !0),
              (i.label = "enableCaptions"),
              (i.labelPressed = "disableCaptions"),
              (i.icon = "captions-off"),
              (i.iconPressed = "captions-on");
            break;
          case "fullscreen":
            (i.toggle = !0),
              (i.label = "enterFullscreen"),
              (i.labelPressed = "exitFullscreen"),
              (i.icon = "enter-fullscreen"),
              (i.iconPressed = "exit-fullscreen");
            break;
          case "play-large":
            (n.class += ` ${this.config.classNames.control}--overlaid`),
              (r = "play"),
              (i.label = "play"),
              (i.icon = "play");
            break;
          default:
            Ug(i.label) && (i.label = r), Ug(i.icon) && (i.icon = e);
        }
        const o = Vg(i.element);
        return (
          i.toggle
            ? (o.appendChild(
                Um.createIcon.call(this, i.iconPressed, {
                  class: "icon--pressed",
                })
              ),
              o.appendChild(
                Um.createIcon.call(this, i.icon, { class: "icon--not-pressed" })
              ),
              o.appendChild(
                Um.createLabel.call(this, i.labelPressed, {
                  class: "label--pressed",
                })
              ),
              o.appendChild(
                Um.createLabel.call(this, i.label, {
                  class: "label--not-pressed",
                })
              ))
            : (o.appendChild(Um.createIcon.call(this, i.icon)),
              o.appendChild(Um.createLabel.call(this, i.label))),
          Bg(n, Gg(this.config.selectors.buttons[r], n)),
          Hg(o, n),
          "play" === r
            ? (Cg(this.elements.buttons[r]) || (this.elements.buttons[r] = []),
              this.elements.buttons[r].push(o))
            : (this.elements.buttons[r] = o),
          o
        );
      },
      createRange(e, t) {
        const n = Vg(
          "input",
          Bg(
            Gg(this.config.selectors.inputs[e]),
            {
              type: "range",
              min: 0,
              max: 100,
              step: 0.01,
              value: 0,
              autocomplete: "off",
              role: "slider",
              "aria-label": Om.get(e, this.config),
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": 0,
            },
            t
          )
        );
        return (
          (this.elements.inputs[e] = n),
          Um.updateRangeFill.call(this, n),
          pg.setup(n),
          n
        );
      },
      createProgress(e, t) {
        const n = Vg(
          "progress",
          Bg(
            Gg(this.config.selectors.display[e]),
            {
              min: 0,
              max: 100,
              value: 0,
              role: "progressbar",
              "aria-hidden": !0,
            },
            t
          )
        );
        if ("volume" !== e) {
          n.appendChild(Vg("span", null, "0"));
          const t = { played: "played", buffer: "buffered" }[e],
            r = t ? Om.get(t, this.config) : "";
          n.innerText = `% ${r.toLowerCase()}`;
        }
        return (this.elements.display[e] = n), n;
      },
      createTime(e, t) {
        const n = Gg(this.config.selectors.display[e], t),
          r = Vg(
            "div",
            Bg(n, {
              class: `${n.class ? n.class : ""} ${
                this.config.classNames.display.time
              } `.trim(),
              "aria-label": Om.get(e, this.config),
            }),
            "00:00"
          );
        return (this.elements.display[e] = r), r;
      },
      bindMenuItemShortcuts(e, t) {
        am.call(
          this,
          e,
          "keydown keyup",
          (n) => {
            if (![32, 38, 39, 40].includes(n.which)) return;
            if ((n.preventDefault(), n.stopPropagation(), "keydown" === n.type))
              return;
            const r = Zg(e, '[role="menuitemradio"]');
            if (!r && [32, 39].includes(n.which))
              Um.showMenuPanel.call(this, t, !0);
            else {
              let t;
              32 !== n.which &&
                (40 === n.which || (r && 39 === n.which)
                  ? ((t = e.nextElementSibling),
                    Og(t) || (t = e.parentNode.firstElementChild))
                  : ((t = e.previousElementSibling),
                    Og(t) || (t = e.parentNode.lastElementChild)),
                nm.call(this, t, !0));
            }
          },
          !1
        ),
          am.call(this, e, "keyup", (e) => {
            13 === e.which && Um.focusFirstMenuItem.call(this, null, !0);
          });
      },
      createMenuItem({
        value: e,
        list: t,
        type: n,
        title: r,
        badge: i = null,
        checked: o = !1,
      }) {
        const s = Gg(this.config.selectors.inputs[n]),
          a = Vg(
            "button",
            Bg(s, {
              type: "button",
              role: "menuitemradio",
              class: `${this.config.classNames.control} ${
                s.class ? s.class : ""
              }`.trim(),
              "aria-checked": o,
              value: e,
            })
          ),
          l = Vg("span");
        (l.innerHTML = r),
          Og(i) && l.appendChild(i),
          a.appendChild(l),
          Object.defineProperty(a, "checked", {
            enumerable: !0,
            get: () => "true" === a.getAttribute("aria-checked"),
            set(e) {
              e &&
                Array.from(a.parentNode.children)
                  .filter((e) => Zg(e, '[role="menuitemradio"]'))
                  .forEach((e) => e.setAttribute("aria-checked", "false")),
                a.setAttribute("aria-checked", e ? "true" : "false");
            },
          }),
          this.listeners.bind(
            a,
            "click keyup",
            (t) => {
              if (!Rg(t) || 32 === t.which) {
                switch (
                  (t.preventDefault(), t.stopPropagation(), (a.checked = !0), n)
                ) {
                  case "language":
                    this.currentTrack = Number(e);
                    break;
                  case "quality":
                    this.quality = e;
                    break;
                  case "speed":
                    this.speed = parseFloat(e);
                }
                Um.showMenuPanel.call(this, "home", Rg(t));
              }
            },
            n,
            !1
          ),
          Um.bindMenuItemShortcuts.call(this, a, n),
          t.appendChild(a);
      },
      formatTime(e = 0, t = !1) {
        if (!Sg(e)) return e;
        return Nm(e, Lm(this.duration) > 0, t);
      },
      updateTimeDisplay(e = null, t = 0, n = !1) {
        Og(e) && Sg(t) && (e.innerText = Um.formatTime(t, n));
      },
      updateVolume() {
        this.supported.ui &&
          (Og(this.elements.inputs.volume) &&
            Um.setRange.call(
              this,
              this.elements.inputs.volume,
              this.muted ? 0 : this.volume
            ),
          Og(this.elements.buttons.mute) &&
            (this.elements.buttons.mute.pressed =
              this.muted || 0 === this.volume));
      },
      setRange(e, t = 0) {
        Og(e) && ((e.value = t), Um.updateRangeFill.call(this, e));
      },
      updateProgress(e) {
        if (!this.supported.ui || !Ig(e)) return;
        let t = 0;
        const n = (e, t) => {
          const n = Sg(t) ? t : 0,
            r = Og(e) ? e : this.elements.display.buffer;
          if (Og(r)) {
            r.value = n;
            const e = r.getElementsByTagName("span")[0];
            Og(e) && (e.childNodes[0].nodeValue = n);
          }
        };
        if (e)
          switch (e.type) {
            case "timeupdate":
            case "seeking":
            case "seeked":
              (t = (function (e, t) {
                return 0 === e || 0 === t || Number.isNaN(e) || Number.isNaN(t)
                  ? 0
                  : ((e / t) * 100).toFixed(2);
              })(this.currentTime, this.duration)),
                "timeupdate" === e.type &&
                  Um.setRange.call(this, this.elements.inputs.seek, t);
              break;
            case "playing":
            case "progress":
              n(this.elements.display.buffer, 100 * this.buffered);
          }
      },
      updateRangeFill(e) {
        const t = Ig(e) ? e.target : e;
        if (Og(t) && "range" === t.getAttribute("type")) {
          if (Zg(t, this.config.selectors.inputs.seek)) {
            t.setAttribute("aria-valuenow", this.currentTime);
            const e = Um.formatTime(this.currentTime),
              n = Um.formatTime(this.duration),
              r = Om.get("seekLabel", this.config);
            t.setAttribute(
              "aria-valuetext",
              r.replace("{currentTime}", e).replace("{duration}", n)
            );
          } else if (Zg(t, this.config.selectors.inputs.volume)) {
            const e = 100 * t.value;
            t.setAttribute("aria-valuenow", e),
              t.setAttribute("aria-valuetext", `${e.toFixed(1)}%`);
          } else t.setAttribute("aria-valuenow", t.value);
          Fg.isWebkit &&
            t.style.setProperty("--value", (t.value / t.max) * 100 + "%");
        }
      },
      updateSeekTooltip(e) {
        if (
          !this.config.tooltips.seek ||
          !Og(this.elements.inputs.seek) ||
          !Og(this.elements.display.seekTooltip) ||
          0 === this.duration
        )
          return;
        const t = `${this.config.classNames.tooltip}--visible`,
          n = (e) => Jg(this.elements.display.seekTooltip, t, e);
        if (this.touch) return void n(!1);
        let r = 0;
        const i = this.elements.progress.getBoundingClientRect();
        if (Ig(e)) r = (100 / i.width) * (e.pageX - i.left);
        else {
          if (!Qg(this.elements.display.seekTooltip, t)) return;
          r = parseFloat(this.elements.display.seekTooltip.style.left, 10);
        }
        r < 0 ? (r = 0) : r > 100 && (r = 100),
          Um.updateTimeDisplay.call(
            this,
            this.elements.display.seekTooltip,
            (this.duration / 100) * r
          ),
          (this.elements.display.seekTooltip.style.left = `${r}%`),
          Ig(e) &&
            ["mouseenter", "mouseleave"].includes(e.type) &&
            n("mouseenter" === e.type);
      },
      timeUpdate(e) {
        const t = !Og(this.elements.display.duration) && this.config.invertTime;
        Um.updateTimeDisplay.call(
          this,
          this.elements.display.currentTime,
          t ? this.duration - this.currentTime : this.currentTime,
          t
        ),
          (e && "timeupdate" === e.type && this.media.seeking) ||
            Um.updateProgress.call(this, e);
      },
      durationUpdate() {
        if (!this.supported.ui || (!this.config.invertTime && this.currentTime))
          return;
        if (this.duration >= 2 ** 32)
          return (
            Xg(this.elements.display.currentTime, !0),
            void Xg(this.elements.progress, !0)
          );
        Og(this.elements.inputs.seek) &&
          this.elements.inputs.seek.setAttribute(
            "aria-valuemax",
            this.duration
          );
        const e = Og(this.elements.display.duration);
        !e &&
          this.config.displayDuration &&
          this.paused &&
          Um.updateTimeDisplay.call(
            this,
            this.elements.display.currentTime,
            this.duration
          ),
          e &&
            Um.updateTimeDisplay.call(
              this,
              this.elements.display.duration,
              this.duration
            ),
          Um.updateSeekTooltip.call(this);
      },
      toggleMenuButton(e, t) {
        Xg(this.elements.settings.buttons[e], !t);
      },
      updateSetting(e, t, n) {
        const r = this.elements.settings.panels[e];
        let i = null,
          o = t;
        if ("captions" === e) i = this.currentTrack;
        else {
          if (
            ((i = Ug(n) ? this[e] : n),
            Ug(i) && (i = this.config[e].default),
            !Ug(this.options[e]) && !this.options[e].includes(i))
          )
            return void this.debug.warn(`Unsupported value of '${i}' for ${e}`);
          if (!this.config[e].options.includes(i))
            return void this.debug.warn(`Disabled value of '${i}' for ${e}`);
        }
        if ((Og(o) || (o = r && r.querySelector('[role="menu"]')), !Og(o)))
          return;
        this.elements.settings.buttons[e].querySelector(
          `.${this.config.classNames.menu.value}`
        ).innerHTML = Um.getLabel.call(this, e, i);
        const s = o && o.querySelector(`[value="${i}"]`);
        Og(s) && (s.checked = !0);
      },
      getLabel(e, t) {
        switch (e) {
          case "speed":
            return 1 === t ? Om.get("normal", this.config) : `${t}&times;`;
          case "quality":
            if (Sg(t)) {
              const e = Om.get(`qualityLabel.${t}`, this.config);
              return e.length ? e : `${t}p`;
            }
            return xm(t);
          case "captions":
            return Fm.getLabel.call(this);
          default:
            return null;
        }
      },
      setQualityMenu(e) {
        if (!Og(this.elements.settings.panels.quality)) return;
        const t = "quality",
          n =
            this.elements.settings.panels.quality.querySelector(
              '[role="menu"]'
            );
        Cg(e) &&
          (this.options.quality = fm(e).filter((e) =>
            this.config.quality.options.includes(e)
          ));
        const r = !Ug(this.options.quality) && this.options.quality.length > 1;
        if (
          (Um.toggleMenuButton.call(this, t, r),
          Yg(n),
          Um.checkMenu.call(this),
          !r)
        )
          return;
        const i = (e) => {
          const t = Om.get(`qualityBadge.${e}`, this.config);
          return t.length ? Um.createBadge.call(this, t) : null;
        };
        this.options.quality
          .sort((e, t) => {
            const n = this.config.quality.options;
            return n.indexOf(e) > n.indexOf(t) ? 1 : -1;
          })
          .forEach((e) => {
            Um.createMenuItem.call(this, {
              value: e,
              list: n,
              type: t,
              title: Um.getLabel.call(this, "quality", e),
              badge: i(e),
            });
          }),
          Um.updateSetting.call(this, t, n);
      },
      setCaptionsMenu() {
        if (!Og(this.elements.settings.panels.captions)) return;
        const e = "captions",
          t =
            this.elements.settings.panels.captions.querySelector(
              '[role="menu"]'
            ),
          n = Fm.getTracks.call(this),
          r = Boolean(n.length);
        if (
          (Um.toggleMenuButton.call(this, e, r),
          Yg(t),
          Um.checkMenu.call(this),
          !r)
        )
          return;
        const i = n.map((e, n) => ({
          value: n,
          checked: this.captions.toggled && this.currentTrack === n,
          title: Fm.getLabel.call(this, e),
          badge:
            e.language && Um.createBadge.call(this, e.language.toUpperCase()),
          list: t,
          type: "language",
        }));
        i.unshift({
          value: -1,
          checked: !this.captions.toggled,
          title: Om.get("disabled", this.config),
          list: t,
          type: "language",
        }),
          i.forEach(Um.createMenuItem.bind(this)),
          Um.updateSetting.call(this, e, t);
      },
      setSpeedMenu() {
        if (!Og(this.elements.settings.panels.speed)) return;
        const e = "speed",
          t =
            this.elements.settings.panels.speed.querySelector('[role="menu"]');
        this.options.speed = this.options.speed.filter(
          (e) => e >= this.minimumSpeed && e <= this.maximumSpeed
        );
        const n = !Ug(this.options.speed) && this.options.speed.length > 1;
        Um.toggleMenuButton.call(this, e, n),
          Yg(t),
          Um.checkMenu.call(this),
          n &&
            (this.options.speed.forEach((n) => {
              Um.createMenuItem.call(this, {
                value: n,
                list: t,
                type: e,
                title: Um.getLabel.call(this, "speed", n),
              });
            }),
            Um.updateSetting.call(this, e, t));
      },
      checkMenu() {
        const { buttons: e } = this.elements.settings,
          t = !Ug(e) && Object.values(e).some((e) => !e.hidden);
        Xg(this.elements.settings.menu, !t);
      },
      focusFirstMenuItem(e, t = !1) {
        if (this.elements.settings.popup.hidden) return;
        let n = e;
        Og(n) ||
          (n = Object.values(this.elements.settings.panels).find(
            (e) => !e.hidden
          ));
        const r = n.querySelector('[role^="menuitem"]');
        nm.call(this, r, t);
      },
      toggleMenu(e) {
        const { popup: t } = this.elements.settings,
          n = this.elements.buttons.settings;
        if (!Og(t) || !Og(n)) return;
        const { hidden: r } = t;
        let i = r;
        if (xg(e)) i = e;
        else if (Rg(e) && 27 === e.which) i = !1;
        else if (Ig(e)) {
          const r = Ag(e.composedPath) ? e.composedPath()[0] : e.target,
            o = t.contains(r);
          if (o || (!o && e.target !== n && i)) return;
        }
        n.setAttribute("aria-expanded", i),
          Xg(t, !i),
          Jg(this.elements.container, this.config.classNames.menu.open, i),
          i && Rg(e)
            ? Um.focusFirstMenuItem.call(this, null, !0)
            : i || r || nm.call(this, n, Rg(e));
      },
      getMenuSize(e) {
        const t = e.cloneNode(!0);
        (t.style.position = "absolute"),
          (t.style.opacity = 0),
          t.removeAttribute("hidden"),
          e.parentNode.appendChild(t);
        const n = t.scrollWidth,
          r = t.scrollHeight;
        return zg(t), { width: n, height: r };
      },
      showMenuPanel(e = "", t = !1) {
        const n = this.elements.container.querySelector(
          `#plyr-settings-${this.id}-${e}`
        );
        if (!Og(n)) return;
        const r = n.parentNode,
          i = Array.from(r.children).find((e) => !e.hidden);
        if (im.transitions && !im.reducedMotion) {
          (r.style.width = `${i.scrollWidth}px`),
            (r.style.height = `${i.scrollHeight}px`);
          const e = Um.getMenuSize.call(this, n),
            t = (e) => {
              e.target === r &&
                ["width", "height"].includes(e.propertyName) &&
                ((r.style.width = ""),
                (r.style.height = ""),
                lm.call(this, r, Mg, t));
            };
          am.call(this, r, Mg, t),
            (r.style.width = `${e.width}px`),
            (r.style.height = `${e.height}px`);
        }
        Xg(i, !0), Xg(n, !1), Um.focusFirstMenuItem.call(this, n, t);
      },
      setDownloadUrl() {
        const e = this.elements.buttons.download;
        Og(e) && e.setAttribute("href", this.download);
      },
      create(e) {
        const {
          bindMenuItemShortcuts: t,
          createButton: n,
          createProgress: r,
          createRange: i,
          createTime: o,
          setQualityMenu: s,
          setSpeedMenu: a,
          showMenuPanel: l,
        } = Um;
        (this.elements.controls = null),
          Cg(this.config.controls) &&
            this.config.controls.includes("play-large") &&
            this.elements.container.appendChild(n.call(this, "play-large"));
        const c = Vg("div", Gg(this.config.selectors.controls.wrapper));
        this.elements.controls = c;
        const u = { class: "plyr__controls__item" };
        return (
          fm(Cg(this.config.controls) ? this.config.controls : []).forEach(
            (s) => {
              if (
                ("restart" === s && c.appendChild(n.call(this, "restart", u)),
                "rewind" === s && c.appendChild(n.call(this, "rewind", u)),
                "play" === s && c.appendChild(n.call(this, "play", u)),
                "fast-forward" === s &&
                  c.appendChild(n.call(this, "fast-forward", u)),
                "progress" === s)
              ) {
                const t = Vg("div", {
                    class: `${u.class} plyr__progress__container`,
                  }),
                  n = Vg("div", Gg(this.config.selectors.progress));
                if (
                  (n.appendChild(
                    i.call(this, "seek", { id: `plyr-seek-${e.id}` })
                  ),
                  n.appendChild(r.call(this, "buffer")),
                  this.config.tooltips.seek)
                ) {
                  const e = Vg(
                    "span",
                    { class: this.config.classNames.tooltip },
                    "00:00"
                  );
                  n.appendChild(e), (this.elements.display.seekTooltip = e);
                }
                (this.elements.progress = n),
                  t.appendChild(this.elements.progress),
                  c.appendChild(t);
              }
              if (
                ("current-time" === s &&
                  c.appendChild(o.call(this, "currentTime", u)),
                "duration" === s && c.appendChild(o.call(this, "duration", u)),
                "mute" === s || "volume" === s)
              ) {
                let { volume: t } = this.elements;
                if (
                  ((Og(t) && c.contains(t)) ||
                    ((t = Vg(
                      "div",
                      Bg({}, u, { class: `${u.class} plyr__volume`.trim() })
                    )),
                    (this.elements.volume = t),
                    c.appendChild(t)),
                  "mute" === s && t.appendChild(n.call(this, "mute")),
                  "volume" === s && !Fg.isIos)
                ) {
                  const n = { max: 1, step: 0.05, value: this.config.volume };
                  t.appendChild(
                    i.call(this, "volume", Bg(n, { id: `plyr-volume-${e.id}` }))
                  );
                }
              }
              if (
                ("captions" === s && c.appendChild(n.call(this, "captions", u)),
                "settings" === s && !Ug(this.config.settings))
              ) {
                const r = Vg(
                  "div",
                  Bg({}, u, {
                    class: `${u.class} plyr__menu`.trim(),
                    hidden: "",
                  })
                );
                r.appendChild(
                  n.call(this, "settings", {
                    "aria-haspopup": !0,
                    "aria-controls": `plyr-settings-${e.id}`,
                    "aria-expanded": !1,
                  })
                );
                const i = Vg("div", {
                    class: "plyr__menu__container",
                    id: `plyr-settings-${e.id}`,
                    hidden: "",
                  }),
                  o = Vg("div"),
                  s = Vg("div", { id: `plyr-settings-${e.id}-home` }),
                  a = Vg("div", { role: "menu" });
                s.appendChild(a),
                  o.appendChild(s),
                  (this.elements.settings.panels.home = s),
                  this.config.settings.forEach((n) => {
                    const r = Vg(
                      "button",
                      Bg(Gg(this.config.selectors.buttons.settings), {
                        type: "button",
                        class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                        role: "menuitem",
                        "aria-haspopup": !0,
                        hidden: "",
                      })
                    );
                    t.call(this, r, n),
                      am.call(this, r, "click", () => {
                        l.call(this, n, !1);
                      });
                    const i = Vg("span", null, Om.get(n, this.config)),
                      s = Vg("span", {
                        class: this.config.classNames.menu.value,
                      });
                    (s.innerHTML = e[n]),
                      i.appendChild(s),
                      r.appendChild(i),
                      a.appendChild(r);
                    const c = Vg("div", {
                        id: `plyr-settings-${e.id}-${n}`,
                        hidden: "",
                      }),
                      u = Vg("button", {
                        type: "button",
                        class: `${this.config.classNames.control} ${this.config.classNames.control}--back`,
                      });
                    u.appendChild(
                      Vg("span", { "aria-hidden": !0 }, Om.get(n, this.config))
                    ),
                      u.appendChild(
                        Vg(
                          "span",
                          { class: this.config.classNames.hidden },
                          Om.get("menuBack", this.config)
                        )
                      ),
                      am.call(
                        this,
                        c,
                        "keydown",
                        (e) => {
                          37 === e.which &&
                            (e.preventDefault(),
                            e.stopPropagation(),
                            l.call(this, "home", !0));
                        },
                        !1
                      ),
                      am.call(this, u, "click", () => {
                        l.call(this, "home", !1);
                      }),
                      c.appendChild(u),
                      c.appendChild(Vg("div", { role: "menu" })),
                      o.appendChild(c),
                      (this.elements.settings.buttons[n] = r),
                      (this.elements.settings.panels[n] = c);
                  }),
                  i.appendChild(o),
                  r.appendChild(i),
                  c.appendChild(r),
                  (this.elements.settings.popup = i),
                  (this.elements.settings.menu = r);
              }
              if (
                ("pip" === s && im.pip && c.appendChild(n.call(this, "pip", u)),
                "airplay" === s &&
                  im.airplay &&
                  c.appendChild(n.call(this, "airplay", u)),
                "download" === s)
              ) {
                const e = Bg({}, u, {
                  element: "a",
                  href: this.download,
                  target: "_blank",
                });
                this.isHTML5 && (e.download = "");
                const { download: t } = this.config.urls;
                !Ng(t) &&
                  this.isEmbed &&
                  Bg(e, {
                    icon: `logo-${this.provider}`,
                    label: this.provider,
                  }),
                  c.appendChild(n.call(this, "download", e));
              }
              "fullscreen" === s &&
                c.appendChild(n.call(this, "fullscreen", u));
            }
          ),
          this.isHTML5 && s.call(this, km.getQualityOptions.call(this)),
          a.call(this),
          c
        );
      },
      inject() {
        if (this.config.loadSprite) {
          const e = Um.getIconUrl.call(this);
          e.cors && jm(e.url, "sprite-plyr");
        }
        this.id = Math.floor(1e4 * Math.random());
        let e = null;
        this.elements.controls = null;
        const t = {
          id: this.id,
          seektime: this.config.seekTime,
          title: this.config.title,
        };
        let n = !0;
        Ag(this.config.controls) &&
          (this.config.controls = this.config.controls.call(this, t)),
          this.config.controls || (this.config.controls = []),
          Og(this.config.controls) || Tg(this.config.controls)
            ? (e = this.config.controls)
            : ((e = Um.create.call(this, {
                id: this.id,
                seektime: this.config.seekTime,
                speed: this.speed,
                quality: this.quality,
                captions: Fm.getLabel.call(this),
              })),
              (n = !1));
        let r;
        n &&
          Tg(this.config.controls) &&
          (e = ((e) => {
            let n = e;
            return (
              Object.entries(t).forEach(([e, t]) => {
                n = Tm(n, `{${e}}`, t);
              }),
              n
            );
          })(e)),
          Tg(this.config.selectors.controls.container) &&
            (r = document.querySelector(
              this.config.selectors.controls.container
            )),
          Og(r) || (r = this.elements.container);
        if (
          (r[Og(e) ? "insertAdjacentElement" : "insertAdjacentHTML"](
            "afterbegin",
            e
          ),
          Og(this.elements.controls) || Um.findElements.call(this),
          !Ug(this.elements.buttons))
        ) {
          const e = (e) => {
            const t = this.config.classNames.controlPressed;
            Object.defineProperty(e, "pressed", {
              enumerable: !0,
              get: () => Qg(e, t),
              set(n = !1) {
                Jg(e, t, n);
              },
            });
          };
          Object.values(this.elements.buttons)
            .filter(Boolean)
            .forEach((t) => {
              Cg(t) || Pg(t) ? Array.from(t).filter(Boolean).forEach(e) : e(t);
            });
        }
        if ((Fg.isEdge && Dg(r), this.config.tooltips.controls)) {
          const { classNames: e, selectors: t } = this.config,
            n = `${t.controls.wrapper} ${t.labels} .${e.hidden}`,
            r = em.call(this, n);
          Array.from(r).forEach((e) => {
            Jg(e, this.config.classNames.hidden, !1),
              Jg(e, this.config.classNames.tooltip, !0);
          });
        }
      },
    };
    function Mm(e, t = !0) {
      let n = e;
      if (t) {
        const e = document.createElement("a");
        (e.href = n), (n = e.href);
      }
      try {
        return new URL(n);
      } catch (e) {
        return null;
      }
    }
    function Dm(e) {
      const t = new URLSearchParams();
      return (
        kg(e) &&
          Object.entries(e).forEach(([e, n]) => {
            t.set(e, n);
          }),
        t
      );
    }
    const Fm = {
        setup() {
          if (!this.supported.ui) return;
          if (
            !this.isVideo ||
            this.isYouTube ||
            (this.isHTML5 && !im.textTracks)
          )
            return void (
              Cg(this.config.controls) &&
              this.config.controls.includes("settings") &&
              this.config.settings.includes("captions") &&
              Um.setCaptionsMenu.call(this)
            );
          var e, t;
          if (
            (Og(this.elements.captions) ||
              ((this.elements.captions = Vg(
                "div",
                Gg(this.config.selectors.captions)
              )),
              (e = this.elements.captions),
              (t = this.elements.wrapper),
              Og(e) && Og(t) && t.parentNode.insertBefore(e, t.nextSibling)),
            Fg.isIE && window.URL)
          ) {
            const e = this.media.querySelectorAll("track");
            Array.from(e).forEach((e) => {
              const t = e.getAttribute("src"),
                n = Mm(t);
              null !== n &&
                n.hostname !== window.location.href.hostname &&
                ["http:", "https:"].includes(n.protocol) &&
                Rm(t, "blob")
                  .then((t) => {
                    e.setAttribute("src", window.URL.createObjectURL(t));
                  })
                  .catch(() => {
                    zg(e);
                  });
            });
          }
          const n = fm(
            (
              navigator.languages || [
                navigator.language || navigator.userLanguage || "en",
              ]
            ).map((e) => e.split("-")[0])
          );
          let r = (
            this.storage.get("language") ||
            this.config.captions.language ||
            "auto"
          ).toLowerCase();
          "auto" === r && ([r] = n);
          let i = this.storage.get("captions");
          if (
            (xg(i) || ({ active: i } = this.config.captions),
            Object.assign(this.captions, {
              toggled: !1,
              active: i,
              language: r,
              languages: n,
            }),
            this.isHTML5)
          ) {
            const e = this.config.captions.update
              ? "addtrack removetrack"
              : "removetrack";
            am.call(this, this.media.textTracks, e, Fm.update.bind(this));
          }
          setTimeout(Fm.update.bind(this), 0);
        },
        update() {
          const e = Fm.getTracks.call(this, !0),
            {
              active: t,
              language: n,
              meta: r,
              currentTrackNode: i,
            } = this.captions,
            o = Boolean(e.find((e) => e.language === n));
          this.isHTML5 &&
            this.isVideo &&
            e
              .filter((e) => !r.get(e))
              .forEach((e) => {
                this.debug.log("Track added", e),
                  r.set(e, { default: "showing" === e.mode }),
                  "showing" === e.mode && (e.mode = "hidden"),
                  am.call(this, e, "cuechange", () => Fm.updateCues.call(this));
              }),
            ((o && this.language !== n) || !e.includes(i)) &&
              (Fm.setLanguage.call(this, n), Fm.toggle.call(this, t && o)),
            Jg(
              this.elements.container,
              this.config.classNames.captions.enabled,
              !Ug(e)
            ),
            Cg(this.config.controls) &&
              this.config.controls.includes("settings") &&
              this.config.settings.includes("captions") &&
              Um.setCaptionsMenu.call(this);
        },
        toggle(e, t = !0) {
          if (!this.supported.ui) return;
          const { toggled: n } = this.captions,
            r = this.config.classNames.captions.active,
            i = Eg(e) ? !n : e;
          if (i !== n) {
            if (
              (t ||
                ((this.captions.active = i), this.storage.set({ captions: i })),
              !this.language && i && !t)
            ) {
              const e = Fm.getTracks.call(this),
                t = Fm.findTrack.call(
                  this,
                  [this.captions.language, ...this.captions.languages],
                  !0
                );
              return (
                (this.captions.language = t.language),
                void Fm.set.call(this, e.indexOf(t))
              );
            }
            this.elements.buttons.captions &&
              (this.elements.buttons.captions.pressed = i),
              Jg(this.elements.container, r, i),
              (this.captions.toggled = i),
              Um.updateSetting.call(this, "captions"),
              um.call(
                this,
                this.media,
                i ? "captionsenabled" : "captionsdisabled"
              );
          }
          setTimeout(() => {
            i &&
              this.captions.toggled &&
              (this.captions.currentTrackNode.mode = "hidden");
          });
        },
        set(e, t = !0) {
          const n = Fm.getTracks.call(this);
          if (-1 !== e)
            if (Sg(e))
              if (e in n) {
                if (this.captions.currentTrack !== e) {
                  this.captions.currentTrack = e;
                  const r = n[e],
                    { language: i } = r || {};
                  (this.captions.currentTrackNode = r),
                    Um.updateSetting.call(this, "captions"),
                    t ||
                      ((this.captions.language = i),
                      this.storage.set({ language: i })),
                    this.isVimeo && this.embed.enableTextTrack(i),
                    um.call(this, this.media, "languagechange");
                }
                Fm.toggle.call(this, !0, t),
                  this.isHTML5 && this.isVideo && Fm.updateCues.call(this);
              } else this.debug.warn("Track not found", e);
            else this.debug.warn("Invalid caption argument", e);
          else Fm.toggle.call(this, !1, t);
        },
        setLanguage(e, t = !0) {
          if (!Tg(e))
            return void this.debug.warn("Invalid language argument", e);
          const n = e.toLowerCase();
          this.captions.language = n;
          const r = Fm.getTracks.call(this),
            i = Fm.findTrack.call(this, [n]);
          Fm.set.call(this, r.indexOf(i), t);
        },
        getTracks(e = !1) {
          return Array.from((this.media || {}).textTracks || [])
            .filter((t) => !this.isHTML5 || e || this.captions.meta.has(t))
            .filter((e) => ["captions", "subtitles"].includes(e.kind));
        },
        findTrack(e, t = !1) {
          const n = Fm.getTracks.call(this),
            r = (e) => Number((this.captions.meta.get(e) || {}).default),
            i = Array.from(n).sort((e, t) => r(t) - r(e));
          let o;
          return (
            e.every((e) => ((o = i.find((t) => t.language === e)), !o)),
            o || (t ? i[0] : void 0)
          );
        },
        getCurrentTrack() {
          return Fm.getTracks.call(this)[this.currentTrack];
        },
        getLabel(e) {
          let t = e;
          return (
            !jg(t) &&
              im.textTracks &&
              this.captions.toggled &&
              (t = Fm.getCurrentTrack.call(this)),
            jg(t)
              ? Ug(t.label)
                ? Ug(t.language)
                  ? Om.get("enabled", this.config)
                  : e.language.toUpperCase()
                : t.label
              : Om.get("disabled", this.config)
          );
        },
        updateCues(e) {
          if (!this.supported.ui) return;
          if (!Og(this.elements.captions))
            return void this.debug.warn("No captions element to render to");
          if (!Eg(e) && !Array.isArray(e))
            return void this.debug.warn("updateCues: Invalid input", e);
          let t = e;
          if (!t) {
            const e = Fm.getCurrentTrack.call(this);
            t = Array.from((e || {}).activeCues || [])
              .map((e) => e.getCueAsHTML())
              .map(Cm);
          }
          const n = t.map((e) => e.trim()).join("\n");
          if (n !== this.elements.captions.innerHTML) {
            Yg(this.elements.captions);
            const e = Vg("span", Gg(this.config.selectors.caption));
            (e.innerHTML = n),
              this.elements.captions.appendChild(e),
              um.call(this, this.media, "cuechange");
          }
        },
      },
      qm = {
        enabled: !0,
        title: "",
        debug: !1,
        autoplay: !1,
        autopause: !0,
        playsinline: !0,
        seekTime: 10,
        volume: 1,
        muted: !1,
        duration: null,
        displayDuration: !0,
        invertTime: !0,
        toggleInvert: !0,
        ratio: null,
        clickToPlay: !0,
        hideControls: !0,
        resetOnEnd: !1,
        disableContextMenu: !0,
        loadSprite: !0,
        iconPrefix: "plyr",
        iconUrl: "https://cdn.plyr.io/3.6.8/plyr.svg",
        blankVideo: "https://cdn.plyr.io/static/blank.mp4",
        quality: {
          default: 576,
          options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
          forced: !1,
          onChange: null,
        },
        loop: { active: !1 },
        speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] },
        keyboard: { focused: !0, global: !1 },
        tooltips: { controls: !1, seek: !0 },
        captions: { active: !1, language: "auto", update: !1 },
        fullscreen: { enabled: !0, fallback: !0, iosNative: !1 },
        storage: { enabled: !0, key: "plyr" },
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "captions",
          "settings",
          "pip",
          "airplay",
          "fullscreen",
        ],
        settings: ["captions", "quality", "speed"],
        i18n: {
          restart: "Restart",
          rewind: "Rewind {seektime}s",
          play: "Play",
          pause: "Pause",
          fastForward: "Forward {seektime}s",
          seek: "Seek",
          seekLabel: "{currentTime} of {duration}",
          played: "Played",
          buffered: "Buffered",
          currentTime: "Current time",
          duration: "Duration",
          volume: "Volume",
          mute: "Mute",
          unmute: "Unmute",
          enableCaptions: "Enable captions",
          disableCaptions: "Disable captions",
          download: "Download",
          enterFullscreen: "Enter fullscreen",
          exitFullscreen: "Exit fullscreen",
          frameTitle: "Player for {title}",
          captions: "Captions",
          settings: "Settings",
          pip: "PIP",
          menuBack: "Go back to previous menu",
          speed: "Speed",
          normal: "Normal",
          quality: "Quality",
          loop: "Loop",
          start: "Start",
          end: "End",
          all: "All",
          reset: "Reset",
          disabled: "Disabled",
          enabled: "Enabled",
          advertisement: "Ad",
          qualityBadge: {
            2160: "4K",
            1440: "HD",
            1080: "HD",
            720: "HD",
            576: "SD",
            480: "SD",
          },
        },
        urls: {
          download: null,
          vimeo: {
            sdk: "https://player.vimeo.com/api/player.js",
            iframe: "https://player.vimeo.com/video/{0}?{1}",
            api: "https://vimeo.com/api/oembed.json?url={0}",
          },
          youtube: {
            sdk: "https://www.youtube.com/iframe_api",
            api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}",
          },
          googleIMA: {
            sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
          },
        },
        listeners: {
          seek: null,
          play: null,
          pause: null,
          restart: null,
          rewind: null,
          fastForward: null,
          mute: null,
          volume: null,
          captions: null,
          download: null,
          fullscreen: null,
          pip: null,
          airplay: null,
          speed: null,
          quality: null,
          loop: null,
          language: null,
        },
        events: [
          "ended",
          "progress",
          "stalled",
          "playing",
          "waiting",
          "canplay",
          "canplaythrough",
          "loadstart",
          "loadeddata",
          "loadedmetadata",
          "timeupdate",
          "volumechange",
          "play",
          "pause",
          "error",
          "seeking",
          "seeked",
          "emptied",
          "ratechange",
          "cuechange",
          "download",
          "enterfullscreen",
          "exitfullscreen",
          "captionsenabled",
          "captionsdisabled",
          "languagechange",
          "controlshidden",
          "controlsshown",
          "ready",
          "statechange",
          "qualitychange",
          "adsloaded",
          "adscontentpause",
          "adscontentresume",
          "adstarted",
          "adsmidpoint",
          "adscomplete",
          "adsallcomplete",
          "adsimpression",
          "adsclick",
        ],
        selectors: {
          editable: "input, textarea, select, [contenteditable]",
          container: ".plyr",
          controls: { container: null, wrapper: ".plyr__controls" },
          labels: "[data-plyr]",
          buttons: {
            play: '[data-plyr="play"]',
            pause: '[data-plyr="pause"]',
            restart: '[data-plyr="restart"]',
            rewind: '[data-plyr="rewind"]',
            fastForward: '[data-plyr="fast-forward"]',
            mute: '[data-plyr="mute"]',
            captions: '[data-plyr="captions"]',
            download: '[data-plyr="download"]',
            fullscreen: '[data-plyr="fullscreen"]',
            pip: '[data-plyr="pip"]',
            airplay: '[data-plyr="airplay"]',
            settings: '[data-plyr="settings"]',
            loop: '[data-plyr="loop"]',
          },
          inputs: {
            seek: '[data-plyr="seek"]',
            volume: '[data-plyr="volume"]',
            speed: '[data-plyr="speed"]',
            language: '[data-plyr="language"]',
            quality: '[data-plyr="quality"]',
          },
          display: {
            currentTime: ".plyr__time--current",
            duration: ".plyr__time--duration",
            buffer: ".plyr__progress__buffer",
            loop: ".plyr__progress__loop",
            volume: ".plyr__volume--display",
          },
          progress: ".plyr__progress",
          captions: ".plyr__captions",
          caption: ".plyr__caption",
        },
        classNames: {
          type: "plyr--{0}",
          provider: "plyr--{0}",
          video: "plyr__video-wrapper",
          embed: "plyr__video-embed",
          videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
          embedContainer: "plyr__video-embed__container",
          poster: "plyr__poster",
          posterEnabled: "plyr__poster-enabled",
          ads: "plyr__ads",
          control: "plyr__control",
          controlPressed: "plyr__control--pressed",
          playing: "plyr--playing",
          paused: "plyr--paused",
          stopped: "plyr--stopped",
          loading: "plyr--loading",
          hover: "plyr--hover",
          tooltip: "plyr__tooltip",
          cues: "plyr__cues",
          hidden: "plyr__sr-only",
          hideControls: "plyr--hide-controls",
          isIos: "plyr--is-ios",
          isTouch: "plyr--is-touch",
          uiSupported: "plyr--full-ui",
          noTransition: "plyr--no-transition",
          display: { time: "plyr__time" },
          menu: {
            value: "plyr__menu__value",
            badge: "plyr__badge",
            open: "plyr--menu-open",
          },
          captions: {
            enabled: "plyr--captions-enabled",
            active: "plyr--captions-active",
          },
          fullscreen: {
            enabled: "plyr--fullscreen-enabled",
            fallback: "plyr--fullscreen-fallback",
          },
          pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" },
          airplay: {
            supported: "plyr--airplay-supported",
            active: "plyr--airplay-active",
          },
          tabFocus: "plyr__tab-focus",
          previewThumbnails: {
            thumbContainer: "plyr__preview-thumb",
            thumbContainerShown: "plyr__preview-thumb--is-shown",
            imageContainer: "plyr__preview-thumb__image-container",
            timeContainer: "plyr__preview-thumb__time-container",
            scrubbingContainer: "plyr__preview-scrubbing",
            scrubbingContainerShown: "plyr__preview-scrubbing--is-shown",
          },
        },
        attributes: {
          embed: { provider: "data-plyr-provider", id: "data-plyr-embed-id" },
        },
        ads: { enabled: !1, publisherId: "", tagUrl: "" },
        previewThumbnails: { enabled: !1, src: "" },
        vimeo: {
          byline: !1,
          portrait: !1,
          title: !1,
          speed: !0,
          transparent: !1,
          customControls: !0,
          referrerPolicy: null,
          premium: !1,
        },
        youtube: {
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          customControls: !0,
          noCookie: !1,
        },
      },
      Bm = "picture-in-picture",
      $m = "inline",
      Hm = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
      Vm = "audio",
      Wm = "video";
    const zm = () => {};
    class Ym {
      constructor(e = !1) {
        (this.enabled = window.console && e),
          this.enabled && this.log("Debugging enabled");
      }
      get log() {
        return this.enabled
          ? Function.prototype.bind.call(console.log, console)
          : zm;
      }
      get warn() {
        return this.enabled
          ? Function.prototype.bind.call(console.warn, console)
          : zm;
      }
      get error() {
        return this.enabled
          ? Function.prototype.bind.call(console.error, console)
          : zm;
      }
    }
    class Km {
      constructor(e) {
        pc(this, "onChange", () => {
          if (!this.enabled) return;
          const e = this.player.elements.buttons.fullscreen;
          Og(e) && (e.pressed = this.active);
          const t =
            this.target === this.player.media
              ? this.target
              : this.player.elements.container;
          um.call(
            this.player,
            t,
            this.active ? "enterfullscreen" : "exitfullscreen",
            !0
          );
        }),
          pc(this, "toggleFallback", (e = !1) => {
            if (
              (e
                ? (this.scrollPosition = {
                    x: window.scrollX || 0,
                    y: window.scrollY || 0,
                  })
                : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y),
              (document.body.style.overflow = e ? "hidden" : ""),
              Jg(
                this.target,
                this.player.config.classNames.fullscreen.fallback,
                e
              ),
              Fg.isIos)
            ) {
              let t = document.head.querySelector('meta[name="viewport"]');
              const n = "viewport-fit=cover";
              t ||
                ((t = document.createElement("meta")),
                t.setAttribute("name", "viewport"));
              const r = Tg(t.content) && t.content.includes(n);
              e
                ? ((this.cleanupViewport = !r), r || (t.content += `,${n}`))
                : this.cleanupViewport &&
                  (t.content = t.content
                    .split(",")
                    .filter((e) => e.trim() !== n)
                    .join(","));
            }
            this.onChange();
          }),
          pc(this, "trapFocus", (e) => {
            if (Fg.isIos || !this.active || "Tab" !== e.key || 9 !== e.keyCode)
              return;
            const t = document.activeElement,
              n = em.call(
                this.player,
                "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"
              ),
              [r] = n,
              i = n[n.length - 1];
            t !== i || e.shiftKey
              ? t === r && e.shiftKey && (i.focus(), e.preventDefault())
              : (r.focus(), e.preventDefault());
          }),
          pc(this, "update", () => {
            if (this.enabled) {
              let e;
              (e = this.forceFallback
                ? "Fallback (forced)"
                : Km.native
                ? "Native"
                : "Fallback"),
                this.player.debug.log(`${e} fullscreen enabled`);
            } else
              this.player.debug.log(
                "Fullscreen not supported and fallback disabled"
              );
            Jg(
              this.player.elements.container,
              this.player.config.classNames.fullscreen.enabled,
              this.enabled
            );
          }),
          pc(this, "enter", () => {
            this.enabled &&
              (Fg.isIos && this.player.config.fullscreen.iosNative
                ? this.player.isVimeo
                  ? this.player.embed.requestFullscreen()
                  : this.target.webkitEnterFullscreen()
                : !Km.native || this.forceFallback
                ? this.toggleFallback(!0)
                : this.prefix
                ? Ug(this.prefix) ||
                  this.target[`${this.prefix}Request${this.property}`]()
                : this.target.requestFullscreen({ navigationUI: "hide" }));
          }),
          pc(this, "exit", () => {
            if (this.enabled)
              if (Fg.isIos && this.player.config.fullscreen.iosNative)
                this.target.webkitExitFullscreen(), dm(this.player.play());
              else if (!Km.native || this.forceFallback)
                this.toggleFallback(!1);
              else if (this.prefix) {
                if (!Ug(this.prefix)) {
                  const e = "moz" === this.prefix ? "Cancel" : "Exit";
                  document[`${this.prefix}${e}${this.property}`]();
                }
              } else
                (document.cancelFullScreen || document.exitFullscreen).call(
                  document
                );
          }),
          pc(this, "toggle", () => {
            this.active ? this.exit() : this.enter();
          }),
          (this.player = e),
          (this.prefix = Km.prefix),
          (this.property = Km.property),
          (this.scrollPosition = { x: 0, y: 0 }),
          (this.forceFallback = "force" === e.config.fullscreen.fallback),
          (this.player.elements.fullscreen =
            e.config.fullscreen.container &&
            (function (e, t) {
              const { prototype: n } = Element;
              return (
                n.closest ||
                function () {
                  let e = this;
                  do {
                    if (Zg.matches(e, t)) return e;
                    e = e.parentElement || e.parentNode;
                  } while (null !== e && 1 === e.nodeType);
                  return null;
                }
              ).call(e, t);
            })(this.player.elements.container, e.config.fullscreen.container)),
          am.call(
            this.player,
            document,
            "ms" === this.prefix
              ? "MSFullscreenChange"
              : `${this.prefix}fullscreenchange`,
            () => {
              this.onChange();
            }
          ),
          am.call(
            this.player,
            this.player.elements.container,
            "dblclick",
            (e) => {
              (Og(this.player.elements.controls) &&
                this.player.elements.controls.contains(e.target)) ||
                this.player.listeners.proxy(e, this.toggle, "fullscreen");
            }
          ),
          am.call(this, this.player.elements.container, "keydown", (e) =>
            this.trapFocus(e)
          ),
          this.update();
      }
      static get native() {
        return !!(
          document.fullscreenEnabled ||
          document.webkitFullscreenEnabled ||
          document.mozFullScreenEnabled ||
          document.msFullscreenEnabled
        );
      }
      get usingNative() {
        return Km.native && !this.forceFallback;
      }
      static get prefix() {
        if (Ag(document.exitFullscreen)) return "";
        let e = "";
        return (
          ["webkit", "moz", "ms"].some(
            (t) =>
              !(
                !Ag(document[`${t}ExitFullscreen`]) &&
                !Ag(document[`${t}CancelFullScreen`])
              ) && ((e = t), !0)
          ),
          e
        );
      }
      static get property() {
        return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
      }
      get enabled() {
        return (
          (Km.native || this.player.config.fullscreen.fallback) &&
          this.player.config.fullscreen.enabled &&
          this.player.supported.ui &&
          this.player.isVideo
        );
      }
      get active() {
        if (!this.enabled) return !1;
        if (!Km.native || this.forceFallback)
          return Qg(
            this.target,
            this.player.config.classNames.fullscreen.fallback
          );
        const e = this.prefix
          ? document[`${this.prefix}${this.property}Element`]
          : document.fullscreenElement;
        return e && e.shadowRoot
          ? e === this.target.getRootNode().host
          : e === this.target;
      }
      get target() {
        return Fg.isIos && this.player.config.fullscreen.iosNative
          ? this.player.media
          : this.player.elements.fullscreen || this.player.elements.container;
      }
    }
    function Gm(e, t = 1) {
      return new Promise((n, r) => {
        const i = new Image(),
          o = () => {
            delete i.onload, delete i.onerror, (i.naturalWidth >= t ? n : r)(i);
          };
        Object.assign(i, { onload: o, onerror: o, src: e });
      });
    }
    const Xm = {
      addStyleHook() {
        Jg(
          this.elements.container,
          this.config.selectors.container.replace(".", ""),
          !0
        ),
          Jg(
            this.elements.container,
            this.config.classNames.uiSupported,
            this.supported.ui
          );
      },
      toggleNativeControls(e = !1) {
        e && this.isHTML5
          ? this.media.setAttribute("controls", "")
          : this.media.removeAttribute("controls");
      },
      build() {
        if ((this.listeners.media(), !this.supported.ui))
          return (
            this.debug.warn(
              `Basic support only for ${this.provider} ${this.type}`
            ),
            void Xm.toggleNativeControls.call(this, !0)
          );
        Og(this.elements.controls) ||
          (Um.inject.call(this), this.listeners.controls()),
          Xm.toggleNativeControls.call(this),
          this.isHTML5 && Fm.setup.call(this),
          (this.volume = null),
          (this.muted = null),
          (this.loop = null),
          (this.quality = null),
          (this.speed = null),
          Um.updateVolume.call(this),
          Um.timeUpdate.call(this),
          Xm.checkPlaying.call(this),
          Jg(
            this.elements.container,
            this.config.classNames.pip.supported,
            im.pip && this.isHTML5 && this.isVideo
          ),
          Jg(
            this.elements.container,
            this.config.classNames.airplay.supported,
            im.airplay && this.isHTML5
          ),
          Jg(this.elements.container, this.config.classNames.isIos, Fg.isIos),
          Jg(
            this.elements.container,
            this.config.classNames.isTouch,
            this.touch
          ),
          (this.ready = !0),
          setTimeout(() => {
            um.call(this, this.media, "ready");
          }, 0),
          Xm.setTitle.call(this),
          this.poster &&
            Xm.setPoster.call(this, this.poster, !1).catch(() => {}),
          this.config.duration && Um.durationUpdate.call(this);
      },
      setTitle() {
        let e = Om.get("play", this.config);
        if (
          (Tg(this.config.title) &&
            !Ug(this.config.title) &&
            (e += `, ${this.config.title}`),
          Array.from(this.elements.buttons.play || []).forEach((t) => {
            t.setAttribute("aria-label", e);
          }),
          this.isEmbed)
        ) {
          const e = tm.call(this, "iframe");
          if (!Og(e)) return;
          const t = Ug(this.config.title) ? "video" : this.config.title,
            n = Om.get("frameTitle", this.config);
          e.setAttribute("title", n.replace("{title}", t));
        }
      },
      togglePoster(e) {
        Jg(this.elements.container, this.config.classNames.posterEnabled, e);
      },
      setPoster(e, t = !0) {
        return t && this.poster
          ? Promise.reject(new Error("Poster already set"))
          : (this.media.setAttribute("data-poster", e),
            this.elements.poster.removeAttribute("hidden"),
            pm
              .call(this)
              .then(() => Gm(e))
              .catch((t) => {
                throw (e === this.poster && Xm.togglePoster.call(this, !1), t);
              })
              .then(() => {
                if (e !== this.poster)
                  throw new Error(
                    "setPoster cancelled by later call to setPoster"
                  );
              })
              .then(
                () => (
                  Object.assign(this.elements.poster.style, {
                    backgroundImage: `url('${e}')`,
                    backgroundSize: "",
                  }),
                  Xm.togglePoster.call(this, !0),
                  e
                )
              ));
      },
      checkPlaying(e) {
        Jg(
          this.elements.container,
          this.config.classNames.playing,
          this.playing
        ),
          Jg(
            this.elements.container,
            this.config.classNames.paused,
            this.paused
          ),
          Jg(
            this.elements.container,
            this.config.classNames.stopped,
            this.stopped
          ),
          Array.from(this.elements.buttons.play || []).forEach((e) => {
            Object.assign(e, { pressed: this.playing }),
              e.setAttribute(
                "aria-label",
                Om.get(this.playing ? "pause" : "play", this.config)
              );
          }),
          (Ig(e) && "timeupdate" === e.type) || Xm.toggleControls.call(this);
      },
      checkLoading(e) {
        (this.loading = ["stalled", "waiting"].includes(e.type)),
          clearTimeout(this.timers.loading),
          (this.timers.loading = setTimeout(
            () => {
              Jg(
                this.elements.container,
                this.config.classNames.loading,
                this.loading
              ),
                Xm.toggleControls.call(this);
            },
            this.loading ? 250 : 0
          ));
      },
      toggleControls(e) {
        const { controls: t } = this.elements;
        if (t && this.config.hideControls) {
          const n = this.touch && this.lastSeekTime + 2e3 > Date.now();
          this.toggleControls(
            Boolean(
              e || this.loading || this.paused || t.pressed || t.hover || n
            )
          );
        }
      },
      migrateStyles() {
        Object.values({ ...this.media.style })
          .filter((e) => !Ug(e) && Tg(e) && e.startsWith("--plyr"))
          .forEach((e) => {
            this.elements.container.style.setProperty(
              e,
              this.media.style.getPropertyValue(e)
            ),
              this.media.style.removeProperty(e);
          }),
          Ug(this.media.style) && this.media.removeAttribute("style");
      },
    };
    class Jm {
      constructor(e) {
        pc(this, "firstTouch", () => {
          const { player: e } = this,
            { elements: t } = e;
          (e.touch = !0), Jg(t.container, e.config.classNames.isTouch, !0);
        }),
          pc(this, "setTabFocus", (e) => {
            const { player: t } = this,
              { elements: n } = t;
            if (
              (clearTimeout(this.focusTimer),
              "keydown" === e.type && 9 !== e.which)
            )
              return;
            "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
            const r = e.timeStamp - this.lastKeyDown <= 20;
            ("focus" !== e.type || r) &&
              ((() => {
                const e = t.config.classNames.tabFocus;
                Jg(em.call(t, `.${e}`), e, !1);
              })(),
              "focusout" !== e.type &&
                (this.focusTimer = setTimeout(() => {
                  const e = document.activeElement;
                  n.container.contains(e) &&
                    Jg(
                      document.activeElement,
                      t.config.classNames.tabFocus,
                      !0
                    );
                }, 10)));
          }),
          pc(this, "global", (e = !0) => {
            const { player: t } = this;
            t.config.keyboard.global &&
              sm.call(t, window, "keydown keyup", this.handleKey, e, !1),
              sm.call(t, document.body, "click", this.toggleMenu, e),
              cm.call(t, document.body, "touchstart", this.firstTouch),
              sm.call(
                t,
                document.body,
                "keydown focus blur focusout",
                this.setTabFocus,
                e,
                !1,
                !0
              );
          }),
          pc(this, "container", () => {
            const { player: e } = this,
              { config: t, elements: n, timers: r } = e;
            !t.keyboard.global &&
              t.keyboard.focused &&
              am.call(e, n.container, "keydown keyup", this.handleKey, !1),
              am.call(
                e,
                n.container,
                "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",
                (t) => {
                  const { controls: i } = n;
                  i &&
                    "enterfullscreen" === t.type &&
                    ((i.pressed = !1), (i.hover = !1));
                  let o = 0;
                  ["touchstart", "touchmove", "mousemove"].includes(t.type) &&
                    (Xm.toggleControls.call(e, !0), (o = e.touch ? 3e3 : 2e3)),
                    clearTimeout(r.controls),
                    (r.controls = setTimeout(
                      () => Xm.toggleControls.call(e, !1),
                      o
                    ));
                }
              );
            const i = () => {
                if (!e.isVimeo || e.config.vimeo.premium) return;
                const t = n.wrapper,
                  { active: r } = e.fullscreen,
                  [i, o] = wm.call(e),
                  s = mm(`aspect-ratio: ${i} / ${o}`);
                if (!r)
                  return void (s
                    ? ((t.style.width = null), (t.style.height = null))
                    : ((t.style.maxWidth = null), (t.style.margin = null)));
                const [a, l] = [
                    Math.max(
                      document.documentElement.clientWidth || 0,
                      window.innerWidth || 0
                    ),
                    Math.max(
                      document.documentElement.clientHeight || 0,
                      window.innerHeight || 0
                    ),
                  ],
                  c = a / l > i / o;
                s
                  ? ((t.style.width = c ? "auto" : "100%"),
                    (t.style.height = c ? "100%" : "auto"))
                  : ((t.style.maxWidth = c ? (l / o) * i + "px" : null),
                    (t.style.margin = c ? "0 auto" : null));
              },
              o = () => {
                clearTimeout(r.resized), (r.resized = setTimeout(i, 50));
              };
            am.call(e, n.container, "enterfullscreen exitfullscreen", (t) => {
              const { target: r } = e.fullscreen;
              if (r !== n.container) return;
              if (!e.isEmbed && Ug(e.config.ratio)) return;
              i();
              ("enterfullscreen" === t.type ? am : lm).call(
                e,
                window,
                "resize",
                o
              );
            });
          }),
          pc(this, "media", () => {
            const { player: e } = this,
              { elements: t } = e;
            if (
              (am.call(e, e.media, "timeupdate seeking seeked", (t) =>
                Um.timeUpdate.call(e, t)
              ),
              am.call(
                e,
                e.media,
                "durationchange loadeddata loadedmetadata",
                (t) => Um.durationUpdate.call(e, t)
              ),
              am.call(e, e.media, "ended", () => {
                e.isHTML5 &&
                  e.isVideo &&
                  e.config.resetOnEnd &&
                  (e.restart(), e.pause());
              }),
              am.call(e, e.media, "progress playing seeking seeked", (t) =>
                Um.updateProgress.call(e, t)
              ),
              am.call(e, e.media, "volumechange", (t) =>
                Um.updateVolume.call(e, t)
              ),
              am.call(
                e,
                e.media,
                "playing play pause ended emptied timeupdate",
                (t) => Xm.checkPlaying.call(e, t)
              ),
              am.call(e, e.media, "waiting canplay seeked playing", (t) =>
                Xm.checkLoading.call(e, t)
              ),
              e.supported.ui && e.config.clickToPlay && !e.isAudio)
            ) {
              const n = tm.call(e, `.${e.config.classNames.video}`);
              if (!Og(n)) return;
              am.call(e, t.container, "click", (r) => {
                ([t.container, n].includes(r.target) || n.contains(r.target)) &&
                  ((e.touch && e.config.hideControls) ||
                    (e.ended
                      ? (this.proxy(r, e.restart, "restart"),
                        this.proxy(
                          r,
                          () => {
                            dm(e.play());
                          },
                          "play"
                        ))
                      : this.proxy(
                          r,
                          () => {
                            dm(e.togglePlay());
                          },
                          "play"
                        )));
              });
            }
            e.supported.ui &&
              e.config.disableContextMenu &&
              am.call(
                e,
                t.wrapper,
                "contextmenu",
                (e) => {
                  e.preventDefault();
                },
                !1
              ),
              am.call(e, e.media, "volumechange", () => {
                e.storage.set({ volume: e.volume, muted: e.muted });
              }),
              am.call(e, e.media, "ratechange", () => {
                Um.updateSetting.call(e, "speed"),
                  e.storage.set({ speed: e.speed });
              }),
              am.call(e, e.media, "qualitychange", (t) => {
                Um.updateSetting.call(e, "quality", null, t.detail.quality);
              }),
              am.call(e, e.media, "ready qualitychange", () => {
                Um.setDownloadUrl.call(e);
              });
            const n = e.config.events.concat(["keyup", "keydown"]).join(" ");
            am.call(e, e.media, n, (n) => {
              let { detail: r = {} } = n;
              "error" === n.type && (r = e.media.error),
                um.call(e, t.container, n.type, !0, r);
            });
          }),
          pc(this, "proxy", (e, t, n) => {
            const { player: r } = this,
              i = r.config.listeners[n];
            let o = !0;
            Ag(i) && (o = i.call(r, e)), !1 !== o && Ag(t) && t.call(r, e);
          }),
          pc(this, "bind", (e, t, n, r, i = !0) => {
            const { player: o } = this,
              s = o.config.listeners[r],
              a = Ag(s);
            am.call(o, e, t, (e) => this.proxy(e, n, r), i && !a);
          }),
          pc(this, "controls", () => {
            const { player: e } = this,
              { elements: t } = e,
              n = Fg.isIE ? "change" : "input";
            if (
              (t.buttons.play &&
                Array.from(t.buttons.play).forEach((t) => {
                  this.bind(
                    t,
                    "click",
                    () => {
                      dm(e.togglePlay());
                    },
                    "play"
                  );
                }),
              this.bind(t.buttons.restart, "click", e.restart, "restart"),
              this.bind(
                t.buttons.rewind,
                "click",
                () => {
                  (e.lastSeekTime = Date.now()), e.rewind();
                },
                "rewind"
              ),
              this.bind(
                t.buttons.fastForward,
                "click",
                () => {
                  (e.lastSeekTime = Date.now()), e.forward();
                },
                "fastForward"
              ),
              this.bind(
                t.buttons.mute,
                "click",
                () => {
                  e.muted = !e.muted;
                },
                "mute"
              ),
              this.bind(t.buttons.captions, "click", () => e.toggleCaptions()),
              this.bind(
                t.buttons.download,
                "click",
                () => {
                  um.call(e, e.media, "download");
                },
                "download"
              ),
              this.bind(
                t.buttons.fullscreen,
                "click",
                () => {
                  e.fullscreen.toggle();
                },
                "fullscreen"
              ),
              this.bind(
                t.buttons.pip,
                "click",
                () => {
                  e.pip = "toggle";
                },
                "pip"
              ),
              this.bind(t.buttons.airplay, "click", e.airplay, "airplay"),
              this.bind(
                t.buttons.settings,
                "click",
                (t) => {
                  t.stopPropagation(),
                    t.preventDefault(),
                    Um.toggleMenu.call(e, t);
                },
                null,
                !1
              ),
              this.bind(
                t.buttons.settings,
                "keyup",
                (t) => {
                  const n = t.which;
                  [13, 32].includes(n) &&
                    (13 !== n
                      ? (t.preventDefault(),
                        t.stopPropagation(),
                        Um.toggleMenu.call(e, t))
                      : Um.focusFirstMenuItem.call(e, null, !0));
                },
                null,
                !1
              ),
              this.bind(t.settings.menu, "keydown", (t) => {
                27 === t.which && Um.toggleMenu.call(e, t);
              }),
              this.bind(t.inputs.seek, "mousedown mousemove", (e) => {
                const n = t.progress.getBoundingClientRect(),
                  r = (100 / n.width) * (e.pageX - n.left);
                e.currentTarget.setAttribute("seek-value", r);
              }),
              this.bind(
                t.inputs.seek,
                "mousedown mouseup keydown keyup touchstart touchend",
                (t) => {
                  const n = t.currentTarget,
                    r = t.keyCode ? t.keyCode : t.which,
                    i = "play-on-seeked";
                  if (Rg(t) && 39 !== r && 37 !== r) return;
                  e.lastSeekTime = Date.now();
                  const o = n.hasAttribute(i),
                    s = ["mouseup", "touchend", "keyup"].includes(t.type);
                  o && s
                    ? (n.removeAttribute(i), dm(e.play()))
                    : !s && e.playing && (n.setAttribute(i, ""), e.pause());
                }
              ),
              Fg.isIos)
            ) {
              const t = em.call(e, 'input[type="range"]');
              Array.from(t).forEach((e) =>
                this.bind(e, n, (e) => Dg(e.target))
              );
            }
            this.bind(
              t.inputs.seek,
              n,
              (t) => {
                const n = t.currentTarget;
                let r = n.getAttribute("seek-value");
                Ug(r) && (r = n.value),
                  n.removeAttribute("seek-value"),
                  (e.currentTime = (r / n.max) * e.duration);
              },
              "seek"
            ),
              this.bind(t.progress, "mouseenter mouseleave mousemove", (t) =>
                Um.updateSeekTooltip.call(e, t)
              ),
              this.bind(t.progress, "mousemove touchmove", (t) => {
                const { previewThumbnails: n } = e;
                n && n.loaded && n.startMove(t);
              }),
              this.bind(t.progress, "mouseleave touchend click", () => {
                const { previewThumbnails: t } = e;
                t && t.loaded && t.endMove(!1, !0);
              }),
              this.bind(t.progress, "mousedown touchstart", (t) => {
                const { previewThumbnails: n } = e;
                n && n.loaded && n.startScrubbing(t);
              }),
              this.bind(t.progress, "mouseup touchend", (t) => {
                const { previewThumbnails: n } = e;
                n && n.loaded && n.endScrubbing(t);
              }),
              Fg.isWebkit &&
                Array.from(em.call(e, 'input[type="range"]')).forEach((t) => {
                  this.bind(t, "input", (t) =>
                    Um.updateRangeFill.call(e, t.target)
                  );
                }),
              e.config.toggleInvert &&
                !Og(t.display.duration) &&
                this.bind(t.display.currentTime, "click", () => {
                  0 !== e.currentTime &&
                    ((e.config.invertTime = !e.config.invertTime),
                    Um.timeUpdate.call(e));
                }),
              this.bind(
                t.inputs.volume,
                n,
                (t) => {
                  e.volume = t.target.value;
                },
                "volume"
              ),
              this.bind(t.controls, "mouseenter mouseleave", (n) => {
                t.controls.hover = !e.touch && "mouseenter" === n.type;
              }),
              t.fullscreen &&
                Array.from(t.fullscreen.children)
                  .filter((e) => !e.contains(t.container))
                  .forEach((n) => {
                    this.bind(n, "mouseenter mouseleave", (n) => {
                      t.controls.hover = !e.touch && "mouseenter" === n.type;
                    });
                  }),
              this.bind(
                t.controls,
                "mousedown mouseup touchstart touchend touchcancel",
                (e) => {
                  t.controls.pressed = ["mousedown", "touchstart"].includes(
                    e.type
                  );
                }
              ),
              this.bind(t.controls, "focusin", () => {
                const { config: n, timers: r } = e;
                Jg(t.controls, n.classNames.noTransition, !0),
                  Xm.toggleControls.call(e, !0),
                  setTimeout(() => {
                    Jg(t.controls, n.classNames.noTransition, !1);
                  }, 0);
                const i = this.touch ? 3e3 : 4e3;
                clearTimeout(r.controls),
                  (r.controls = setTimeout(
                    () => Xm.toggleControls.call(e, !1),
                    i
                  ));
              }),
              this.bind(
                t.inputs.volume,
                "wheel",
                (t) => {
                  const n = t.webkitDirectionInvertedFromDevice,
                    [r, i] = [t.deltaX, -t.deltaY].map((e) => (n ? -e : e)),
                    o = Math.sign(Math.abs(r) > Math.abs(i) ? r : i);
                  e.increaseVolume(o / 50);
                  const { volume: s } = e.media;
                  ((1 === o && s < 1) || (-1 === o && s > 0)) &&
                    t.preventDefault();
                },
                "volume",
                !1
              );
          }),
          (this.player = e),
          (this.lastKey = null),
          (this.focusTimer = null),
          (this.lastKeyDown = null),
          (this.handleKey = this.handleKey.bind(this)),
          (this.toggleMenu = this.toggleMenu.bind(this)),
          (this.setTabFocus = this.setTabFocus.bind(this)),
          (this.firstTouch = this.firstTouch.bind(this));
      }
      handleKey(e) {
        const { player: t } = this,
          { elements: n } = t,
          r = e.keyCode ? e.keyCode : e.which,
          i = "keydown" === e.type,
          o = i && r === this.lastKey;
        if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
        if (!Sg(r)) return;
        if (i) {
          const i = document.activeElement;
          if (Og(i)) {
            const { editable: r } = t.config.selectors,
              { seek: o } = n.inputs;
            if (i !== o && Zg(i, r)) return;
            if (32 === e.which && Zg(i, 'button, [role^="menuitem"]')) return;
          }
          switch (
            ([
              32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70,
              73, 75, 76, 77, 79,
            ].includes(r) && (e.preventDefault(), e.stopPropagation()),
            r)
          ) {
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              o || (t.currentTime = (t.duration / 10) * (r - 48));
              break;
            case 32:
            case 75:
              o || dm(t.togglePlay());
              break;
            case 38:
              t.increaseVolume(0.1);
              break;
            case 40:
              t.decreaseVolume(0.1);
              break;
            case 77:
              o || (t.muted = !t.muted);
              break;
            case 39:
              t.forward();
              break;
            case 37:
              t.rewind();
              break;
            case 70:
              t.fullscreen.toggle();
              break;
            case 67:
              o || t.toggleCaptions();
              break;
            case 76:
              t.loop = !t.loop;
          }
          27 === r &&
            !t.fullscreen.usingNative &&
            t.fullscreen.active &&
            t.fullscreen.toggle(),
            (this.lastKey = r);
        } else this.lastKey = null;
      }
      toggleMenu(e) {
        Um.toggleMenu.call(this.player, e);
      }
    }
    var Qm = r(function (e, t) {
      e.exports = (function () {
        var e = function () {},
          t = {},
          n = {},
          r = {};
        function i(e, t) {
          e = e.push ? e : [e];
          var i,
            o,
            s,
            a = [],
            l = e.length,
            c = l;
          for (
            i = function (e, n) {
              n.length && a.push(e), --c || t(a);
            };
            l--;

          )
            (o = e[l]), (s = n[o]) ? i(o, s) : (r[o] = r[o] || []).push(i);
        }
        function o(e, t) {
          if (e) {
            var i = r[e];
            if (((n[e] = t), i)) for (; i.length; ) i[0](e, t), i.splice(0, 1);
          }
        }
        function s(t, n) {
          t.call && (t = { success: t }),
            n.length ? (t.error || e)(n) : (t.success || e)(t);
        }
        function a(t, n, r, i) {
          var o,
            s,
            l = document,
            c = r.async,
            u = (r.numRetries || 0) + 1,
            h = r.before || e,
            p = t.replace(/[\?|#].*$/, ""),
            d = t.replace(/^(css|img)!/, "");
          (i = i || 0),
            /(^css!|\.css$)/.test(p)
              ? (((s = l.createElement("link")).rel = "stylesheet"),
                (s.href = d),
                (o = "hideFocus" in s) &&
                  s.relList &&
                  ((o = 0), (s.rel = "preload"), (s.as = "style")))
              : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(p)
              ? ((s = l.createElement("img")).src = d)
              : (((s = l.createElement("script")).src = t),
                (s.async = void 0 === c || c)),
            (s.onload =
              s.onerror =
              s.onbeforeload =
                function (e) {
                  var l = e.type[0];
                  if (o)
                    try {
                      s.sheet.cssText.length || (l = "e");
                    } catch (e) {
                      18 != e.code && (l = "e");
                    }
                  if ("e" == l) {
                    if ((i += 1) < u) return a(t, n, r, i);
                  } else if ("preload" == s.rel && "style" == s.as)
                    return (s.rel = "stylesheet");
                  n(t, l, e.defaultPrevented);
                }),
            !1 !== h(t, s) && l.head.appendChild(s);
        }
        function l(e, t, n) {
          var r,
            i,
            o = (e = e.push ? e : [e]).length,
            s = o,
            l = [];
          for (
            r = function (e, n, r) {
              if (("e" == n && l.push(e), "b" == n)) {
                if (!r) return;
                l.push(e);
              }
              --o || t(l);
            },
              i = 0;
            i < s;
            i++
          )
            a(e[i], r, n);
        }
        function c(e, n, r) {
          var i, a;
          if ((n && n.trim && (i = n), (a = (i ? r : n) || {}), i)) {
            if (i in t) throw "LoadJS";
            t[i] = !0;
          }
          function c(t, n) {
            l(
              e,
              function (e) {
                s(a, e), t && s({ success: t, error: n }, e), o(i, e);
              },
              a
            );
          }
          if (a.returnPromise) return new Promise(c);
          c();
        }
        return (
          (c.ready = function (e, t) {
            return (
              i(e, function (e) {
                s(t, e);
              }),
              c
            );
          }),
          (c.done = function (e) {
            o(e, []);
          }),
          (c.reset = function () {
            (t = {}), (n = {}), (r = {});
          }),
          (c.isDefined = function (e) {
            return e in t;
          }),
          c
        );
      })();
    });
    function Zm(e) {
      return new Promise((t, n) => {
        Qm(e, { success: t, error: n });
      });
    }
    function ey(e) {
      e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
        this.media.paused === e &&
          ((this.media.paused = !e),
          um.call(this, this.media, e ? "play" : "pause"));
    }
    const ty = {
      setup() {
        const e = this;
        Jg(e.elements.wrapper, e.config.classNames.embed, !0),
          (e.options.speed = e.config.speed.options),
          _m.call(e),
          kg(window.Vimeo)
            ? ty.ready.call(e)
            : Zm(e.config.urls.vimeo.sdk)
                .then(() => {
                  ty.ready.call(e);
                })
                .catch((t) => {
                  e.debug.warn("Vimeo SDK (player.js) failed to load", t);
                });
      },
      ready() {
        const e = this,
          t = e.config.vimeo,
          { premium: n, referrerPolicy: r, ...i } = t;
        n && Object.assign(i, { controls: !1, sidedock: !1 });
        const o = Dm({
          loop: e.config.loop.active,
          autoplay: e.autoplay,
          muted: e.muted,
          gesture: "media",
          playsinline: !this.config.fullscreen.iosNative,
          ...i,
        });
        let s = e.media.getAttribute("src");
        Ug(s) && (s = e.media.getAttribute(e.config.attributes.embed.id));
        const a = Ug((l = s))
          ? null
          : Sg(Number(l))
          ? l
          : l.match(/^.*(vimeo.com\/|video\/)(\d+).*/)
          ? RegExp.$2
          : l;
        var l;
        const c = Vg("iframe"),
          u = Sm(e.config.urls.vimeo.iframe, a, o);
        if (
          (c.setAttribute("src", u),
          c.setAttribute("allowfullscreen", ""),
          c.setAttribute(
            "allow",
            [
              "autoplay",
              "fullscreen",
              "picture-in-picture",
              "encrypted-media",
              "accelerometer",
              "gyroscope",
            ].join("; ")
          ),
          Ug(r) || c.setAttribute("referrerPolicy", r),
          n || !t.customControls)
        )
          c.setAttribute("data-poster", e.poster), (e.media = Kg(c, e.media));
        else {
          const t = Vg("div", {
            class: e.config.classNames.embedContainer,
            "data-poster": e.poster,
          });
          t.appendChild(c), (e.media = Kg(t, e.media));
        }
        t.customControls ||
          Rm(Sm(e.config.urls.vimeo.api, u)).then((t) => {
            !Ug(t) &&
              t.thumbnail_url &&
              Xm.setPoster.call(e, t.thumbnail_url).catch(() => {});
          }),
          (e.embed = new window.Vimeo.Player(c, {
            autopause: e.config.autopause,
            muted: e.muted,
          })),
          (e.media.paused = !0),
          (e.media.currentTime = 0),
          e.supported.ui && e.embed.disableTextTrack(),
          (e.media.play = () => (ey.call(e, !0), e.embed.play())),
          (e.media.pause = () => (ey.call(e, !1), e.embed.pause())),
          (e.media.stop = () => {
            e.pause(), (e.currentTime = 0);
          });
        let { currentTime: h } = e.media;
        Object.defineProperty(e.media, "currentTime", {
          get: () => h,
          set(t) {
            const { embed: n, media: r, paused: i, volume: o } = e,
              s = i && !n.hasPlayed;
            (r.seeking = !0),
              um.call(e, r, "seeking"),
              Promise.resolve(s && n.setVolume(0))
                .then(() => n.setCurrentTime(t))
                .then(() => s && n.pause())
                .then(() => s && n.setVolume(o))
                .catch(() => {});
          },
        });
        let p = e.config.speed.selected;
        Object.defineProperty(e.media, "playbackRate", {
          get: () => p,
          set(t) {
            e.embed
              .setPlaybackRate(t)
              .then(() => {
                (p = t), um.call(e, e.media, "ratechange");
              })
              .catch(() => {
                e.options.speed = [1];
              });
          },
        });
        let { volume: d } = e.config;
        Object.defineProperty(e.media, "volume", {
          get: () => d,
          set(t) {
            e.embed.setVolume(t).then(() => {
              (d = t), um.call(e, e.media, "volumechange");
            });
          },
        });
        let { muted: f } = e.config;
        Object.defineProperty(e.media, "muted", {
          get: () => f,
          set(t) {
            const n = !!xg(t) && t;
            e.embed.setVolume(n ? 0 : e.config.volume).then(() => {
              (f = n), um.call(e, e.media, "volumechange");
            });
          },
        });
        let g,
          { loop: m } = e.config;
        Object.defineProperty(e.media, "loop", {
          get: () => m,
          set(t) {
            const n = xg(t) ? t : e.config.loop.active;
            e.embed.setLoop(n).then(() => {
              m = n;
            });
          },
        }),
          e.embed
            .getVideoUrl()
            .then((t) => {
              (g = t), Um.setDownloadUrl.call(e);
            })
            .catch((e) => {
              this.debug.warn(e);
            }),
          Object.defineProperty(e.media, "currentSrc", { get: () => g }),
          Object.defineProperty(e.media, "ended", {
            get: () => e.currentTime === e.duration,
          }),
          Promise.all([e.embed.getVideoWidth(), e.embed.getVideoHeight()]).then(
            (t) => {
              const [n, r] = t;
              (e.embed.ratio = Em(n, r)), _m.call(this);
            }
          ),
          e.embed.setAutopause(e.config.autopause).then((t) => {
            e.config.autopause = t;
          }),
          e.embed.getVideoTitle().then((t) => {
            (e.config.title = t), Xm.setTitle.call(this);
          }),
          e.embed.getCurrentTime().then((t) => {
            (h = t), um.call(e, e.media, "timeupdate");
          }),
          e.embed.getDuration().then((t) => {
            (e.media.duration = t), um.call(e, e.media, "durationchange");
          }),
          e.embed.getTextTracks().then((t) => {
            (e.media.textTracks = t), Fm.setup.call(e);
          }),
          e.embed.on("cuechange", ({ cues: t = [] }) => {
            const n = t.map((e) =>
              (function (e) {
                const t = document.createDocumentFragment(),
                  n = document.createElement("div");
                return (
                  t.appendChild(n), (n.innerHTML = e), t.firstChild.innerText
                );
              })(e.text)
            );
            Fm.updateCues.call(e, n);
          }),
          e.embed.on("loaded", () => {
            if (
              (e.embed.getPaused().then((t) => {
                ey.call(e, !t), t || um.call(e, e.media, "playing");
              }),
              Og(e.embed.element) && e.supported.ui)
            ) {
              e.embed.element.setAttribute("tabindex", -1);
            }
          }),
          e.embed.on("bufferstart", () => {
            um.call(e, e.media, "waiting");
          }),
          e.embed.on("bufferend", () => {
            um.call(e, e.media, "playing");
          }),
          e.embed.on("play", () => {
            ey.call(e, !0), um.call(e, e.media, "playing");
          }),
          e.embed.on("pause", () => {
            ey.call(e, !1);
          }),
          e.embed.on("timeupdate", (t) => {
            (e.media.seeking = !1),
              (h = t.seconds),
              um.call(e, e.media, "timeupdate");
          }),
          e.embed.on("progress", (t) => {
            (e.media.buffered = t.percent),
              um.call(e, e.media, "progress"),
              1 === parseInt(t.percent, 10) &&
                um.call(e, e.media, "canplaythrough"),
              e.embed.getDuration().then((t) => {
                t !== e.media.duration &&
                  ((e.media.duration = t),
                  um.call(e, e.media, "durationchange"));
              });
          }),
          e.embed.on("seeked", () => {
            (e.media.seeking = !1), um.call(e, e.media, "seeked");
          }),
          e.embed.on("ended", () => {
            (e.media.paused = !0), um.call(e, e.media, "ended");
          }),
          e.embed.on("error", (t) => {
            (e.media.error = t), um.call(e, e.media, "error");
          }),
          t.customControls && setTimeout(() => Xm.build.call(e), 0);
      },
    };
    function ny(e) {
      e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
        this.media.paused === e &&
          ((this.media.paused = !e),
          um.call(this, this.media, e ? "play" : "pause"));
    }
    function ry(e) {
      return e.noCookie
        ? "https://www.youtube-nocookie.com"
        : "http:" === window.location.protocol
        ? "http://www.youtube.com"
        : void 0;
    }
    const iy = {
        setup() {
          if (
            (Jg(this.elements.wrapper, this.config.classNames.embed, !0),
            kg(window.YT) && Ag(window.YT.Player))
          )
            iy.ready.call(this);
          else {
            const e = window.onYouTubeIframeAPIReady;
            (window.onYouTubeIframeAPIReady = () => {
              Ag(e) && e(), iy.ready.call(this);
            }),
              Zm(this.config.urls.youtube.sdk).catch((e) => {
                this.debug.warn("YouTube API failed to load", e);
              });
          }
        },
        getTitle(e) {
          Rm(Sm(this.config.urls.youtube.api, e))
            .then((e) => {
              if (kg(e)) {
                const { title: t, height: n, width: r } = e;
                (this.config.title = t),
                  Xm.setTitle.call(this),
                  (this.embed.ratio = Em(r, n));
              }
              _m.call(this);
            })
            .catch(() => {
              _m.call(this);
            });
        },
        ready() {
          const e = this,
            t = e.config.youtube,
            n = e.media && e.media.getAttribute("id");
          if (!Ug(n) && n.startsWith("youtube-")) return;
          let r = e.media.getAttribute("src");
          Ug(r) && (r = e.media.getAttribute(this.config.attributes.embed.id));
          const i = Ug((o = r))
            ? null
            : o.match(
                /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
              )
            ? RegExp.$2
            : o;
          var o;
          const s = Vg("div", {
            id: `${e.provider}-${Math.floor(1e4 * Math.random())}`,
            "data-poster": t.customControls ? e.poster : void 0,
          });
          if (((e.media = Kg(s, e.media)), t.customControls)) {
            const t = (e) => `https://i.ytimg.com/vi/${i}/${e}default.jpg`;
            Gm(t("maxres"), 121)
              .catch(() => Gm(t("sd"), 121))
              .catch(() => Gm(t("hq")))
              .then((t) => Xm.setPoster.call(e, t.src))
              .then((t) => {
                t.includes("maxres") ||
                  (e.elements.poster.style.backgroundSize = "cover");
              })
              .catch(() => {});
          }
          e.embed = new window.YT.Player(e.media, {
            videoId: i,
            host: ry(t),
            playerVars: Bg(
              {},
              {
                autoplay: e.config.autoplay ? 1 : 0,
                hl: e.config.hl,
                controls: e.supported.ui && t.customControls ? 0 : 1,
                disablekb: 1,
                playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                cc_load_policy: e.captions.active ? 1 : 0,
                cc_lang_pref: e.config.captions.language,
                widget_referrer: window ? window.location.href : null,
              },
              t
            ),
            events: {
              onError(t) {
                if (!e.media.error) {
                  const n = t.data,
                    r =
                      {
                        2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                        5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                        100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                        101: "The owner of the requested video does not allow it to be played in embedded players.",
                        150: "The owner of the requested video does not allow it to be played in embedded players.",
                      }[n] || "An unknown error occured";
                  (e.media.error = { code: n, message: r }),
                    um.call(e, e.media, "error");
                }
              },
              onPlaybackRateChange(t) {
                const n = t.target;
                (e.media.playbackRate = n.getPlaybackRate()),
                  um.call(e, e.media, "ratechange");
              },
              onReady(n) {
                if (Ag(e.media.play)) return;
                const r = n.target;
                iy.getTitle.call(e, i),
                  (e.media.play = () => {
                    ny.call(e, !0), r.playVideo();
                  }),
                  (e.media.pause = () => {
                    ny.call(e, !1), r.pauseVideo();
                  }),
                  (e.media.stop = () => {
                    r.stopVideo();
                  }),
                  (e.media.duration = r.getDuration()),
                  (e.media.paused = !0),
                  (e.media.currentTime = 0),
                  Object.defineProperty(e.media, "currentTime", {
                    get: () => Number(r.getCurrentTime()),
                    set(t) {
                      e.paused && !e.embed.hasPlayed && e.embed.mute(),
                        (e.media.seeking = !0),
                        um.call(e, e.media, "seeking"),
                        r.seekTo(t);
                    },
                  }),
                  Object.defineProperty(e.media, "playbackRate", {
                    get: () => r.getPlaybackRate(),
                    set(e) {
                      r.setPlaybackRate(e);
                    },
                  });
                let { volume: o } = e.config;
                Object.defineProperty(e.media, "volume", {
                  get: () => o,
                  set(t) {
                    (o = t),
                      r.setVolume(100 * o),
                      um.call(e, e.media, "volumechange");
                  },
                });
                let { muted: s } = e.config;
                Object.defineProperty(e.media, "muted", {
                  get: () => s,
                  set(t) {
                    const n = xg(t) ? t : s;
                    (s = n),
                      r[n ? "mute" : "unMute"](),
                      r.setVolume(100 * o),
                      um.call(e, e.media, "volumechange");
                  },
                }),
                  Object.defineProperty(e.media, "currentSrc", {
                    get: () => r.getVideoUrl(),
                  }),
                  Object.defineProperty(e.media, "ended", {
                    get: () => e.currentTime === e.duration,
                  });
                const a = r.getAvailablePlaybackRates();
                (e.options.speed = a.filter((t) =>
                  e.config.speed.options.includes(t)
                )),
                  e.supported.ui &&
                    t.customControls &&
                    e.media.setAttribute("tabindex", -1),
                  um.call(e, e.media, "timeupdate"),
                  um.call(e, e.media, "durationchange"),
                  clearInterval(e.timers.buffering),
                  (e.timers.buffering = setInterval(() => {
                    (e.media.buffered = r.getVideoLoadedFraction()),
                      (null === e.media.lastBuffered ||
                        e.media.lastBuffered < e.media.buffered) &&
                        um.call(e, e.media, "progress"),
                      (e.media.lastBuffered = e.media.buffered),
                      1 === e.media.buffered &&
                        (clearInterval(e.timers.buffering),
                        um.call(e, e.media, "canplaythrough"));
                  }, 200)),
                  t.customControls && setTimeout(() => Xm.build.call(e), 50);
              },
              onStateChange(n) {
                const r = n.target;
                clearInterval(e.timers.playing);
                switch (
                  (e.media.seeking &&
                    [1, 2].includes(n.data) &&
                    ((e.media.seeking = !1), um.call(e, e.media, "seeked")),
                  n.data)
                ) {
                  case -1:
                    um.call(e, e.media, "timeupdate"),
                      (e.media.buffered = r.getVideoLoadedFraction()),
                      um.call(e, e.media, "progress");
                    break;
                  case 0:
                    ny.call(e, !1),
                      e.media.loop
                        ? (r.stopVideo(), r.playVideo())
                        : um.call(e, e.media, "ended");
                    break;
                  case 1:
                    t.customControls &&
                    !e.config.autoplay &&
                    e.media.paused &&
                    !e.embed.hasPlayed
                      ? e.media.pause()
                      : (ny.call(e, !0),
                        um.call(e, e.media, "playing"),
                        (e.timers.playing = setInterval(() => {
                          um.call(e, e.media, "timeupdate");
                        }, 50)),
                        e.media.duration !== r.getDuration() &&
                          ((e.media.duration = r.getDuration()),
                          um.call(e, e.media, "durationchange")));
                    break;
                  case 2:
                    e.muted || e.embed.unMute(), ny.call(e, !1);
                    break;
                  case 3:
                    um.call(e, e.media, "waiting");
                }
                um.call(e, e.elements.container, "statechange", !1, {
                  code: n.data,
                });
              },
            },
          });
        },
      },
      oy = {
        setup() {
          this.media
            ? (Jg(
                this.elements.container,
                this.config.classNames.type.replace("{0}", this.type),
                !0
              ),
              Jg(
                this.elements.container,
                this.config.classNames.provider.replace("{0}", this.provider),
                !0
              ),
              this.isEmbed &&
                Jg(
                  this.elements.container,
                  this.config.classNames.type.replace("{0}", "video"),
                  !0
                ),
              this.isVideo &&
                ((this.elements.wrapper = Vg("div", {
                  class: this.config.classNames.video,
                })),
                $g(this.media, this.elements.wrapper),
                (this.elements.poster = Vg("div", {
                  class: this.config.classNames.poster,
                })),
                this.elements.wrapper.appendChild(this.elements.poster)),
              this.isHTML5
                ? km.setup.call(this)
                : this.isYouTube
                ? iy.setup.call(this)
                : this.isVimeo && ty.setup.call(this))
            : this.debug.warn("No media element found!");
        },
      };
    class sy {
      constructor(e) {
        pc(this, "load", () => {
          this.enabled &&
            (kg(window.google) && kg(window.google.ima)
              ? this.ready()
              : Zm(this.player.config.urls.googleIMA.sdk)
                  .then(() => {
                    this.ready();
                  })
                  .catch(() => {
                    this.trigger(
                      "error",
                      new Error("Google IMA SDK failed to load")
                    );
                  }));
        }),
          pc(this, "ready", () => {
            var e;
            this.enabled ||
              ((e = this).manager && e.manager.destroy(),
              e.elements.displayContainer &&
                e.elements.displayContainer.destroy(),
              e.elements.container.remove()),
              this.startSafetyTimer(12e3, "ready()"),
              this.managerPromise.then(() => {
                this.clearSafetyTimer("onAdsManagerLoaded()");
              }),
              this.listeners(),
              this.setupIMA();
          }),
          pc(this, "setupIMA", () => {
            (this.elements.container = Vg("div", {
              class: this.player.config.classNames.ads,
            })),
              this.player.elements.container.appendChild(
                this.elements.container
              ),
              google.ima.settings.setVpaidMode(
                google.ima.ImaSdkSettings.VpaidMode.ENABLED
              ),
              google.ima.settings.setLocale(this.player.config.ads.language),
              google.ima.settings.setDisableCustomPlaybackForIOS10Plus(
                this.player.config.playsinline
              ),
              (this.elements.displayContainer =
                new google.ima.AdDisplayContainer(
                  this.elements.container,
                  this.player.media
                )),
              (this.loader = new google.ima.AdsLoader(
                this.elements.displayContainer
              )),
              this.loader.addEventListener(
                google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
                (e) => this.onAdsManagerLoaded(e),
                !1
              ),
              this.loader.addEventListener(
                google.ima.AdErrorEvent.Type.AD_ERROR,
                (e) => this.onAdError(e),
                !1
              ),
              this.requestAds();
          }),
          pc(this, "requestAds", () => {
            const { container: e } = this.player.elements;
            try {
              const t = new google.ima.AdsRequest();
              (t.adTagUrl = this.tagUrl),
                (t.linearAdSlotWidth = e.offsetWidth),
                (t.linearAdSlotHeight = e.offsetHeight),
                (t.nonLinearAdSlotWidth = e.offsetWidth),
                (t.nonLinearAdSlotHeight = e.offsetHeight),
                (t.forceNonLinearFullSlot = !1),
                t.setAdWillPlayMuted(!this.player.muted),
                this.loader.requestAds(t);
            } catch (e) {
              this.onAdError(e);
            }
          }),
          pc(this, "pollCountdown", (e = !1) => {
            if (!e)
              return (
                clearInterval(this.countdownTimer),
                void this.elements.container.removeAttribute("data-badge-text")
              );
            this.countdownTimer = setInterval(() => {
              const e = Nm(Math.max(this.manager.getRemainingTime(), 0)),
                t = `${Om.get("advertisement", this.player.config)} - ${e}`;
              this.elements.container.setAttribute("data-badge-text", t);
            }, 100);
          }),
          pc(this, "onAdsManagerLoaded", (e) => {
            if (!this.enabled) return;
            const t = new google.ima.AdsRenderingSettings();
            (t.restoreCustomPlaybackStateOnAdBreakComplete = !0),
              (t.enablePreloading = !0),
              (this.manager = e.getAdsManager(this.player, t)),
              (this.cuePoints = this.manager.getCuePoints()),
              this.manager.addEventListener(
                google.ima.AdErrorEvent.Type.AD_ERROR,
                (e) => this.onAdError(e)
              ),
              Object.keys(google.ima.AdEvent.Type).forEach((e) => {
                this.manager.addEventListener(google.ima.AdEvent.Type[e], (e) =>
                  this.onAdEvent(e)
                );
              }),
              this.trigger("loaded");
          }),
          pc(this, "addCuePoints", () => {
            Ug(this.cuePoints) ||
              this.cuePoints.forEach((e) => {
                if (0 !== e && -1 !== e && e < this.player.duration) {
                  const t = this.player.elements.progress;
                  if (Og(t)) {
                    const n = (100 / this.player.duration) * e,
                      r = Vg("span", {
                        class: this.player.config.classNames.cues,
                      });
                    (r.style.left = `${n.toString()}%`), t.appendChild(r);
                  }
                }
              });
          }),
          pc(this, "onAdEvent", (e) => {
            const { container: t } = this.player.elements,
              n = e.getAd(),
              r = e.getAdData();
            switch (
              (((e) => {
                um.call(
                  this.player,
                  this.player.media,
                  `ads${e.replace(/_/g, "").toLowerCase()}`
                );
              })(e.type),
              e.type)
            ) {
              case google.ima.AdEvent.Type.LOADED:
                this.trigger("loaded"),
                  this.pollCountdown(!0),
                  n.isLinear() ||
                    ((n.width = t.offsetWidth), (n.height = t.offsetHeight));
                break;
              case google.ima.AdEvent.Type.STARTED:
                this.manager.setVolume(this.player.volume);
                break;
              case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                this.player.ended
                  ? this.loadAds()
                  : this.loader.contentComplete();
                break;
              case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                this.pauseContent();
                break;
              case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                this.pollCountdown(), this.resumeContent();
                break;
              case google.ima.AdEvent.Type.LOG:
                r.adError &&
                  this.player.debug.warn(
                    `Non-fatal ad error: ${r.adError.getMessage()}`
                  );
            }
          }),
          pc(this, "onAdError", (e) => {
            this.cancel(), this.player.debug.warn("Ads error", e);
          }),
          pc(this, "listeners", () => {
            const { container: e } = this.player.elements;
            let t;
            this.player.on("canplay", () => {
              this.addCuePoints();
            }),
              this.player.on("ended", () => {
                this.loader.contentComplete();
              }),
              this.player.on("timeupdate", () => {
                t = this.player.currentTime;
              }),
              this.player.on("seeked", () => {
                const e = this.player.currentTime;
                Ug(this.cuePoints) ||
                  this.cuePoints.forEach((n, r) => {
                    t < n &&
                      n < e &&
                      (this.manager.discardAdBreak(),
                      this.cuePoints.splice(r, 1));
                  });
              }),
              window.addEventListener("resize", () => {
                this.manager &&
                  this.manager.resize(
                    e.offsetWidth,
                    e.offsetHeight,
                    google.ima.ViewMode.NORMAL
                  );
              });
          }),
          pc(this, "play", () => {
            const { container: e } = this.player.elements;
            this.managerPromise || this.resumeContent(),
              this.managerPromise
                .then(() => {
                  this.manager.setVolume(this.player.volume),
                    this.elements.displayContainer.initialize();
                  try {
                    this.initialized ||
                      (this.manager.init(
                        e.offsetWidth,
                        e.offsetHeight,
                        google.ima.ViewMode.NORMAL
                      ),
                      this.manager.start()),
                      (this.initialized = !0);
                  } catch (e) {
                    this.onAdError(e);
                  }
                })
                .catch(() => {});
          }),
          pc(this, "resumeContent", () => {
            (this.elements.container.style.zIndex = ""),
              (this.playing = !1),
              dm(this.player.media.play());
          }),
          pc(this, "pauseContent", () => {
            (this.elements.container.style.zIndex = 3),
              (this.playing = !0),
              this.player.media.pause();
          }),
          pc(this, "cancel", () => {
            this.initialized && this.resumeContent(),
              this.trigger("error"),
              this.loadAds();
          }),
          pc(this, "loadAds", () => {
            this.managerPromise
              .then(() => {
                this.manager && this.manager.destroy(),
                  (this.managerPromise = new Promise((e) => {
                    this.on("loaded", e), this.player.debug.log(this.manager);
                  })),
                  (this.initialized = !1),
                  this.requestAds();
              })
              .catch(() => {});
          }),
          pc(this, "trigger", (e, ...t) => {
            const n = this.events[e];
            Cg(n) &&
              n.forEach((e) => {
                Ag(e) && e.apply(this, t);
              });
          }),
          pc(
            this,
            "on",
            (e, t) => (
              Cg(this.events[e]) || (this.events[e] = []),
              this.events[e].push(t),
              this
            )
          ),
          pc(this, "startSafetyTimer", (e, t) => {
            this.player.debug.log(`Safety timer invoked from: ${t}`),
              (this.safetyTimer = setTimeout(() => {
                this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
              }, e));
          }),
          pc(this, "clearSafetyTimer", (e) => {
            Eg(this.safetyTimer) ||
              (this.player.debug.log(`Safety timer cleared from: ${e}`),
              clearTimeout(this.safetyTimer),
              (this.safetyTimer = null));
          }),
          (this.player = e),
          (this.config = e.config.ads),
          (this.playing = !1),
          (this.initialized = !1),
          (this.elements = { container: null, displayContainer: null }),
          (this.manager = null),
          (this.loader = null),
          (this.cuePoints = null),
          (this.events = {}),
          (this.safetyTimer = null),
          (this.countdownTimer = null),
          (this.managerPromise = new Promise((e, t) => {
            this.on("loaded", e), this.on("error", t);
          })),
          this.load();
      }
      get enabled() {
        const { config: e } = this;
        return (
          this.player.isHTML5 &&
          this.player.isVideo &&
          e.enabled &&
          (!Ug(e.publisherId) || Ng(e.tagUrl))
        );
      }
      get tagUrl() {
        const { config: e } = this;
        if (Ng(e.tagUrl)) return e.tagUrl;
        return `https://go.aniview.com/api/adserver6/vast/?${Dm({
          AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
          AV_CHANNELID: "5a0458dc28a06145e4519d21",
          AV_URL: window.location.hostname,
          cb: Date.now(),
          AV_WIDTH: 640,
          AV_HEIGHT: 480,
          AV_CDIM2: e.publisherId,
        })}`;
      }
    }
    const ay = (e) => {
        const t = [];
        return (
          e.split(/\r\n\r\n|\n\n|\r\r/).forEach((e) => {
            const n = {};
            e.split(/\r\n|\n|\r/).forEach((e) => {
              if (Sg(n.startTime)) {
                if (!Ug(e.trim()) && Ug(n.text)) {
                  const t = e.trim().split("#xywh=");
                  ([n.text] = t),
                    t[1] && ([n.x, n.y, n.w, n.h] = t[1].split(","));
                }
              } else {
                const t = e.match(
                  /([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/
                );
                t &&
                  ((n.startTime =
                    60 * Number(t[1] || 0) * 60 +
                    60 * Number(t[2]) +
                    Number(t[3]) +
                    Number(`0.${t[4]}`)),
                  (n.endTime =
                    60 * Number(t[6] || 0) * 60 +
                    60 * Number(t[7]) +
                    Number(t[8]) +
                    Number(`0.${t[9]}`)));
              }
            }),
              n.text && t.push(n);
          }),
          t
        );
      },
      ly = (e, t) => {
        const n = {};
        return (
          e > t.width / t.height
            ? ((n.width = t.width), (n.height = (1 / e) * t.width))
            : ((n.height = t.height), (n.width = e * t.height)),
          n
        );
      };
    class cy {
      constructor(e) {
        pc(this, "load", () => {
          this.player.elements.display.seekTooltip &&
            (this.player.elements.display.seekTooltip.hidden = this.enabled),
            this.enabled &&
              this.getThumbnails().then(() => {
                this.enabled &&
                  (this.render(),
                  this.determineContainerAutoSizing(),
                  (this.loaded = !0));
              });
        }),
          pc(
            this,
            "getThumbnails",
            () =>
              new Promise((e) => {
                const { src: t } = this.player.config.previewThumbnails;
                if (Ug(t))
                  throw new Error(
                    "Missing previewThumbnails.src config attribute"
                  );
                const n = () => {
                  this.thumbnails.sort((e, t) => e.height - t.height),
                    this.player.debug.log(
                      "Preview thumbnails",
                      this.thumbnails
                    ),
                    e();
                };
                if (Ag(t))
                  t((e) => {
                    (this.thumbnails = e), n();
                  });
                else {
                  const e = (Tg(t) ? [t] : t).map((e) => this.getThumbnail(e));
                  Promise.all(e).then(n);
                }
              })
          ),
          pc(
            this,
            "getThumbnail",
            (e) =>
              new Promise((t) => {
                Rm(e).then((n) => {
                  const r = { frames: ay(n), height: null, urlPrefix: "" };
                  r.frames[0].text.startsWith("/") ||
                    r.frames[0].text.startsWith("http://") ||
                    r.frames[0].text.startsWith("https://") ||
                    (r.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                  const i = new Image();
                  (i.onload = () => {
                    (r.height = i.naturalHeight),
                      (r.width = i.naturalWidth),
                      this.thumbnails.push(r),
                      t();
                  }),
                    (i.src = r.urlPrefix + r.frames[0].text);
                });
              })
          ),
          pc(this, "startMove", (e) => {
            if (
              this.loaded &&
              Ig(e) &&
              ["touchmove", "mousemove"].includes(e.type) &&
              this.player.media.duration
            ) {
              if ("touchmove" === e.type)
                this.seekTime =
                  this.player.media.duration *
                  (this.player.elements.inputs.seek.value / 100);
              else {
                const t = this.player.elements.progress.getBoundingClientRect(),
                  n = (100 / t.width) * (e.pageX - t.left);
                (this.seekTime = this.player.media.duration * (n / 100)),
                  this.seekTime < 0 && (this.seekTime = 0),
                  this.seekTime > this.player.media.duration - 1 &&
                    (this.seekTime = this.player.media.duration - 1),
                  (this.mousePosX = e.pageX),
                  (this.elements.thumb.time.innerText = Nm(this.seekTime));
              }
              this.showImageAtCurrentTime();
            }
          }),
          pc(this, "endMove", () => {
            this.toggleThumbContainer(!1, !0);
          }),
          pc(this, "startScrubbing", (e) => {
            (Eg(e.button) || !1 === e.button || 0 === e.button) &&
              ((this.mouseDown = !0),
              this.player.media.duration &&
                (this.toggleScrubbingContainer(!0),
                this.toggleThumbContainer(!1, !0),
                this.showImageAtCurrentTime()));
          }),
          pc(this, "endScrubbing", () => {
            (this.mouseDown = !1),
              Math.ceil(this.lastTime) ===
              Math.ceil(this.player.media.currentTime)
                ? this.toggleScrubbingContainer(!1)
                : cm.call(this.player, this.player.media, "timeupdate", () => {
                    this.mouseDown || this.toggleScrubbingContainer(!1);
                  });
          }),
          pc(this, "listeners", () => {
            this.player.on("play", () => {
              this.toggleThumbContainer(!1, !0);
            }),
              this.player.on("seeked", () => {
                this.toggleThumbContainer(!1);
              }),
              this.player.on("timeupdate", () => {
                this.lastTime = this.player.media.currentTime;
              });
          }),
          pc(this, "render", () => {
            (this.elements.thumb.container = Vg("div", {
              class:
                this.player.config.classNames.previewThumbnails.thumbContainer,
            })),
              (this.elements.thumb.imageContainer = Vg("div", {
                class:
                  this.player.config.classNames.previewThumbnails
                    .imageContainer,
              })),
              this.elements.thumb.container.appendChild(
                this.elements.thumb.imageContainer
              );
            const e = Vg("div", {
              class:
                this.player.config.classNames.previewThumbnails.timeContainer,
            });
            (this.elements.thumb.time = Vg("span", {}, "00:00")),
              e.appendChild(this.elements.thumb.time),
              this.elements.thumb.container.appendChild(e),
              Og(this.player.elements.progress) &&
                this.player.elements.progress.appendChild(
                  this.elements.thumb.container
                ),
              (this.elements.scrubbing.container = Vg("div", {
                class:
                  this.player.config.classNames.previewThumbnails
                    .scrubbingContainer,
              })),
              this.player.elements.wrapper.appendChild(
                this.elements.scrubbing.container
              );
          }),
          pc(this, "destroy", () => {
            this.elements.thumb.container &&
              this.elements.thumb.container.remove(),
              this.elements.scrubbing.container &&
                this.elements.scrubbing.container.remove();
          }),
          pc(this, "showImageAtCurrentTime", () => {
            this.mouseDown
              ? this.setScrubbingContainerSize()
              : this.setThumbContainerSizeAndPos();
            const e = this.thumbnails[0].frames.findIndex(
                (e) =>
                  this.seekTime >= e.startTime && this.seekTime <= e.endTime
              ),
              t = e >= 0;
            let n = 0;
            this.mouseDown || this.toggleThumbContainer(t),
              t &&
                (this.thumbnails.forEach((t, r) => {
                  this.loadedImages.includes(t.frames[e].text) && (n = r);
                }),
                e !== this.showingThumb &&
                  ((this.showingThumb = e), this.loadImage(n)));
          }),
          pc(this, "loadImage", (e = 0) => {
            const t = this.showingThumb,
              n = this.thumbnails[e],
              { urlPrefix: r } = n,
              i = n.frames[t],
              o = n.frames[t].text,
              s = r + o;
            if (
              this.currentImageElement &&
              this.currentImageElement.dataset.filename === o
            )
              this.showImage(this.currentImageElement, i, e, t, o, !1),
                (this.currentImageElement.dataset.index = t),
                this.removeOldImages(this.currentImageElement);
            else {
              this.loadingImage &&
                this.usingSprites &&
                (this.loadingImage.onload = null);
              const n = new Image();
              (n.src = s),
                (n.dataset.index = t),
                (n.dataset.filename = o),
                (this.showingThumbFilename = o),
                this.player.debug.log(`Loading image: ${s}`),
                (n.onload = () => this.showImage(n, i, e, t, o, !0)),
                (this.loadingImage = n),
                this.removeOldImages(n);
            }
          }),
          pc(this, "showImage", (e, t, n, r, i, o = !0) => {
            this.player.debug.log(
              `Showing thumb: ${i}. num: ${r}. qual: ${n}. newimg: ${o}`
            ),
              this.setImageSizeAndOffset(e, t),
              o &&
                (this.currentImageContainer.appendChild(e),
                (this.currentImageElement = e),
                this.loadedImages.includes(i) || this.loadedImages.push(i)),
              this.preloadNearby(r, !0)
                .then(this.preloadNearby(r, !1))
                .then(this.getHigherQuality(n, e, t, i));
          }),
          pc(this, "removeOldImages", (e) => {
            Array.from(this.currentImageContainer.children).forEach((t) => {
              if ("img" !== t.tagName.toLowerCase()) return;
              const n = this.usingSprites ? 500 : 1e3;
              if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
                t.dataset.deleting = !0;
                const { currentImageContainer: e } = this;
                setTimeout(() => {
                  e.removeChild(t),
                    this.player.debug.log(
                      `Removing thumb: ${t.dataset.filename}`
                    );
                }, n);
              }
            });
          }),
          pc(
            this,
            "preloadNearby",
            (e, t = !0) =>
              new Promise((n) => {
                setTimeout(() => {
                  const r = this.thumbnails[0].frames[e].text;
                  if (this.showingThumbFilename === r) {
                    let i;
                    i = t
                      ? this.thumbnails[0].frames.slice(e)
                      : this.thumbnails[0].frames.slice(0, e).reverse();
                    let o = !1;
                    i.forEach((e) => {
                      const t = e.text;
                      if (t !== r && !this.loadedImages.includes(t)) {
                        (o = !0),
                          this.player.debug.log(
                            `Preloading thumb filename: ${t}`
                          );
                        const { urlPrefix: e } = this.thumbnails[0],
                          r = e + t,
                          i = new Image();
                        (i.src = r),
                          (i.onload = () => {
                            this.player.debug.log(
                              `Preloaded thumb filename: ${t}`
                            ),
                              this.loadedImages.includes(t) ||
                                this.loadedImages.push(t),
                              n();
                          });
                      }
                    }),
                      o || n();
                  }
                }, 300);
              })
          ),
          pc(this, "getHigherQuality", (e, t, n, r) => {
            if (e < this.thumbnails.length - 1) {
              let i = t.naturalHeight;
              this.usingSprites && (i = n.h),
                i < this.thumbContainerHeight &&
                  setTimeout(() => {
                    this.showingThumbFilename === r &&
                      (this.player.debug.log(
                        `Showing higher quality thumb for: ${r}`
                      ),
                      this.loadImage(e + 1));
                  }, 300);
            }
          }),
          pc(this, "toggleThumbContainer", (e = !1, t = !1) => {
            const n =
              this.player.config.classNames.previewThumbnails
                .thumbContainerShown;
            this.elements.thumb.container.classList.toggle(n, e),
              !e &&
                t &&
                ((this.showingThumb = null),
                (this.showingThumbFilename = null));
          }),
          pc(this, "toggleScrubbingContainer", (e = !1) => {
            const t =
              this.player.config.classNames.previewThumbnails
                .scrubbingContainerShown;
            this.elements.scrubbing.container.classList.toggle(t, e),
              e ||
                ((this.showingThumb = null),
                (this.showingThumbFilename = null));
          }),
          pc(this, "determineContainerAutoSizing", () => {
            (this.elements.thumb.imageContainer.clientHeight > 20 ||
              this.elements.thumb.imageContainer.clientWidth > 20) &&
              (this.sizeSpecifiedInCSS = !0);
          }),
          pc(this, "setThumbContainerSizeAndPos", () => {
            if (this.sizeSpecifiedInCSS) {
              if (
                this.elements.thumb.imageContainer.clientHeight > 20 &&
                this.elements.thumb.imageContainer.clientWidth < 20
              ) {
                const e = Math.floor(
                  this.elements.thumb.imageContainer.clientHeight *
                    this.thumbAspectRatio
                );
                this.elements.thumb.imageContainer.style.width = `${e}px`;
              } else if (
                this.elements.thumb.imageContainer.clientHeight < 20 &&
                this.elements.thumb.imageContainer.clientWidth > 20
              ) {
                const e = Math.floor(
                  this.elements.thumb.imageContainer.clientWidth /
                    this.thumbAspectRatio
                );
                this.elements.thumb.imageContainer.style.height = `${e}px`;
              }
            } else {
              const e = Math.floor(
                this.thumbContainerHeight * this.thumbAspectRatio
              );
              (this.elements.thumb.imageContainer.style.height = `${this.thumbContainerHeight}px`),
                (this.elements.thumb.imageContainer.style.width = `${e}px`);
            }
            this.setThumbContainerPos();
          }),
          pc(this, "setThumbContainerPos", () => {
            const e = this.player.elements.progress.getBoundingClientRect(),
              t = this.player.elements.container.getBoundingClientRect(),
              { container: n } = this.elements.thumb,
              r = t.left - e.left + 10,
              i = t.right - e.left - n.clientWidth - 10;
            let o = this.mousePosX - e.left - n.clientWidth / 2;
            o < r && (o = r), o > i && (o = i), (n.style.left = `${o}px`);
          }),
          pc(this, "setScrubbingContainerSize", () => {
            const { width: e, height: t } = ly(this.thumbAspectRatio, {
              width: this.player.media.clientWidth,
              height: this.player.media.clientHeight,
            });
            (this.elements.scrubbing.container.style.width = `${e}px`),
              (this.elements.scrubbing.container.style.height = `${t}px`);
          }),
          pc(this, "setImageSizeAndOffset", (e, t) => {
            if (!this.usingSprites) return;
            const n = this.thumbContainerHeight / t.h;
            (e.style.height = e.naturalHeight * n + "px"),
              (e.style.width = e.naturalWidth * n + "px"),
              (e.style.left = `-${t.x * n}px`),
              (e.style.top = `-${t.y * n}px`);
          }),
          (this.player = e),
          (this.thumbnails = []),
          (this.loaded = !1),
          (this.lastMouseMoveTime = Date.now()),
          (this.mouseDown = !1),
          (this.loadedImages = []),
          (this.elements = { thumb: {}, scrubbing: {} }),
          this.load();
      }
      get enabled() {
        return (
          this.player.isHTML5 &&
          this.player.isVideo &&
          this.player.config.previewThumbnails.enabled
        );
      }
      get currentImageContainer() {
        return this.mouseDown
          ? this.elements.scrubbing.container
          : this.elements.thumb.imageContainer;
      }
      get usingSprites() {
        return Object.keys(this.thumbnails[0].frames[0]).includes("w");
      }
      get thumbAspectRatio() {
        return this.usingSprites
          ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h
          : this.thumbnails[0].width / this.thumbnails[0].height;
      }
      get thumbContainerHeight() {
        if (this.mouseDown) {
          const { height: e } = ly(this.thumbAspectRatio, {
            width: this.player.media.clientWidth,
            height: this.player.media.clientHeight,
          });
          return e;
        }
        return this.sizeSpecifiedInCSS
          ? this.elements.thumb.imageContainer.clientHeight
          : Math.floor(
              this.player.media.clientWidth / this.thumbAspectRatio / 4
            );
      }
      get currentImageElement() {
        return this.mouseDown
          ? this.currentScrubbingImageElement
          : this.currentThumbnailImageElement;
      }
      set currentImageElement(e) {
        this.mouseDown
          ? (this.currentScrubbingImageElement = e)
          : (this.currentThumbnailImageElement = e);
      }
    }
    const uy = {
      insertElements(e, t) {
        Tg(t)
          ? Wg(e, this.media, { src: t })
          : Cg(t) &&
            t.forEach((t) => {
              Wg(e, this.media, t);
            });
      },
      change(e) {
        qg(e, "sources.length")
          ? (km.cancelRequests.call(this),
            this.destroy.call(
              this,
              () => {
                (this.options.quality = []),
                  zg(this.media),
                  (this.media = null),
                  Og(this.elements.container) &&
                    this.elements.container.removeAttribute("class");
                const { sources: t, type: n } = e,
                  [{ provider: r = Hm.html5, src: i }] = t,
                  o = "html5" === r ? n : "div",
                  s = "html5" === r ? {} : { src: i };
                Object.assign(this, {
                  provider: r,
                  type: n,
                  supported: im.check(n, r, this.config.playsinline),
                  media: Vg(o, s),
                }),
                  this.elements.container.appendChild(this.media),
                  xg(e.autoplay) && (this.config.autoplay = e.autoplay),
                  this.isHTML5 &&
                    (this.config.crossorigin &&
                      this.media.setAttribute("crossorigin", ""),
                    this.config.autoplay &&
                      this.media.setAttribute("autoplay", ""),
                    Ug(e.poster) || (this.poster = e.poster),
                    this.config.loop.active &&
                      this.media.setAttribute("loop", ""),
                    this.config.muted && this.media.setAttribute("muted", ""),
                    this.config.playsinline &&
                      this.media.setAttribute("playsinline", "")),
                  Xm.addStyleHook.call(this),
                  this.isHTML5 && uy.insertElements.call(this, "source", t),
                  (this.config.title = e.title),
                  oy.setup.call(this),
                  this.isHTML5 &&
                    Object.keys(e).includes("tracks") &&
                    uy.insertElements.call(this, "track", e.tracks),
                  (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
                    Xm.build.call(this),
                  this.isHTML5 && this.media.load(),
                  Ug(e.previewThumbnails) ||
                    (Object.assign(
                      this.config.previewThumbnails,
                      e.previewThumbnails
                    ),
                    this.previewThumbnails &&
                      this.previewThumbnails.loaded &&
                      (this.previewThumbnails.destroy(),
                      (this.previewThumbnails = null)),
                    this.config.previewThumbnails.enabled &&
                      (this.previewThumbnails = new cy(this))),
                  this.fullscreen.update();
              },
              !0
            ))
          : this.debug.warn("Invalid source format");
      },
    };
    class hy {
      constructor(e, t) {
        if (
          (pc(this, "play", () =>
            Ag(this.media.play)
              ? (this.ads &&
                  this.ads.enabled &&
                  this.ads.managerPromise
                    .then(() => this.ads.play())
                    .catch(() => dm(this.media.play())),
                this.media.play())
              : null
          ),
          pc(this, "pause", () =>
            this.playing && Ag(this.media.pause) ? this.media.pause() : null
          ),
          pc(this, "togglePlay", (e) =>
            (xg(e) ? e : !this.playing) ? this.play() : this.pause()
          ),
          pc(this, "stop", () => {
            this.isHTML5
              ? (this.pause(), this.restart())
              : Ag(this.media.stop) && this.media.stop();
          }),
          pc(this, "restart", () => {
            this.currentTime = 0;
          }),
          pc(this, "rewind", (e) => {
            this.currentTime -= Sg(e) ? e : this.config.seekTime;
          }),
          pc(this, "forward", (e) => {
            this.currentTime += Sg(e) ? e : this.config.seekTime;
          }),
          pc(this, "increaseVolume", (e) => {
            const t = this.media.muted ? 0 : this.volume;
            this.volume = t + (Sg(e) ? e : 0);
          }),
          pc(this, "decreaseVolume", (e) => {
            this.increaseVolume(-e);
          }),
          pc(this, "airplay", () => {
            im.airplay && this.media.webkitShowPlaybackTargetPicker();
          }),
          pc(this, "toggleControls", (e) => {
            if (this.supported.ui && !this.isAudio) {
              const t = Qg(
                  this.elements.container,
                  this.config.classNames.hideControls
                ),
                n = void 0 === e ? void 0 : !e,
                r = Jg(
                  this.elements.container,
                  this.config.classNames.hideControls,
                  n
                );
              if (
                (r &&
                  Cg(this.config.controls) &&
                  this.config.controls.includes("settings") &&
                  !Ug(this.config.settings) &&
                  Um.toggleMenu.call(this, !1),
                r !== t)
              ) {
                const e = r ? "controlshidden" : "controlsshown";
                um.call(this, this.media, e);
              }
              return !r;
            }
            return !1;
          }),
          pc(this, "on", (e, t) => {
            am.call(this, this.elements.container, e, t);
          }),
          pc(this, "once", (e, t) => {
            cm.call(this, this.elements.container, e, t);
          }),
          pc(this, "off", (e, t) => {
            lm(this.elements.container, e, t);
          }),
          pc(this, "destroy", (e, t = !1) => {
            if (!this.ready) return;
            const n = () => {
              (document.body.style.overflow = ""),
                (this.embed = null),
                t
                  ? (Object.keys(this.elements).length &&
                      (zg(this.elements.buttons.play),
                      zg(this.elements.captions),
                      zg(this.elements.controls),
                      zg(this.elements.wrapper),
                      (this.elements.buttons.play = null),
                      (this.elements.captions = null),
                      (this.elements.controls = null),
                      (this.elements.wrapper = null)),
                    Ag(e) && e())
                  : (hm.call(this),
                    km.cancelRequests.call(this),
                    Kg(this.elements.original, this.elements.container),
                    um.call(this, this.elements.original, "destroyed", !0),
                    Ag(e) && e.call(this.elements.original),
                    (this.ready = !1),
                    setTimeout(() => {
                      (this.elements = null), (this.media = null);
                    }, 200));
            };
            this.stop(),
              clearTimeout(this.timers.loading),
              clearTimeout(this.timers.controls),
              clearTimeout(this.timers.resized),
              this.isHTML5
                ? (Xm.toggleNativeControls.call(this, !0), n())
                : this.isYouTube
                ? (clearInterval(this.timers.buffering),
                  clearInterval(this.timers.playing),
                  null !== this.embed &&
                    Ag(this.embed.destroy) &&
                    this.embed.destroy(),
                  n())
                : this.isVimeo &&
                  (null !== this.embed && this.embed.unload().then(n),
                  setTimeout(n, 200));
          }),
          pc(this, "supports", (e) => im.mime.call(this, e)),
          (this.timers = {}),
          (this.ready = !1),
          (this.loading = !1),
          (this.failed = !1),
          (this.touch = im.touch),
          (this.media = e),
          Tg(this.media) &&
            (this.media = document.querySelectorAll(this.media)),
          ((window.jQuery && this.media instanceof jQuery) ||
            Pg(this.media) ||
            Cg(this.media)) &&
            (this.media = this.media[0]),
          (this.config = Bg(
            {},
            qm,
            hy.defaults,
            t || {},
            (() => {
              try {
                return JSON.parse(this.media.getAttribute("data-plyr-config"));
              } catch (e) {
                return {};
              }
            })()
          )),
          (this.elements = {
            container: null,
            fullscreen: null,
            captions: null,
            buttons: {},
            display: {},
            progress: {},
            inputs: {},
            settings: { popup: null, menu: null, panels: {}, buttons: {} },
          }),
          (this.captions = {
            active: null,
            currentTrack: -1,
            meta: new WeakMap(),
          }),
          (this.fullscreen = { active: !1 }),
          (this.options = { speed: [], quality: [] }),
          (this.debug = new Ym(this.config.debug)),
          this.debug.log("Config", this.config),
          this.debug.log("Support", im),
          Eg(this.media) || !Og(this.media))
        )
          return void this.debug.error(
            "Setup failed: no suitable element passed"
          );
        if (this.media.plyr)
          return void this.debug.warn("Target already setup");
        if (!this.config.enabled)
          return void this.debug.error("Setup failed: disabled by config");
        if (!im.check().api)
          return void this.debug.error("Setup failed: no support");
        const n = this.media.cloneNode(!0);
        (n.autoplay = !1), (this.elements.original = n);
        const r = this.media.tagName.toLowerCase();
        let i = null,
          o = null;
        switch (r) {
          case "div":
            if (((i = this.media.querySelector("iframe")), Og(i))) {
              if (
                ((o = Mm(i.getAttribute("src"))),
                (this.provider = (function (e) {
                  return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
                    e
                  )
                    ? Hm.youtube
                    : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(
                        e
                      )
                    ? Hm.vimeo
                    : null;
                })(o.toString())),
                (this.elements.container = this.media),
                (this.media = i),
                (this.elements.container.className = ""),
                o.search.length)
              ) {
                const e = ["1", "true"];
                e.includes(o.searchParams.get("autoplay")) &&
                  (this.config.autoplay = !0),
                  e.includes(o.searchParams.get("loop")) &&
                    (this.config.loop.active = !0),
                  this.isYouTube
                    ? ((this.config.playsinline = e.includes(
                        o.searchParams.get("playsinline")
                      )),
                      (this.config.youtube.hl = o.searchParams.get("hl")))
                    : (this.config.playsinline = !0);
              }
            } else
              (this.provider = this.media.getAttribute(
                this.config.attributes.embed.provider
              )),
                this.media.removeAttribute(
                  this.config.attributes.embed.provider
                );
            if (Ug(this.provider) || !Object.values(Hm).includes(this.provider))
              return void this.debug.error("Setup failed: Invalid provider");
            this.type = Wm;
            break;
          case "video":
          case "audio":
            (this.type = r),
              (this.provider = Hm.html5),
              this.media.hasAttribute("crossorigin") &&
                (this.config.crossorigin = !0),
              this.media.hasAttribute("autoplay") &&
                (this.config.autoplay = !0),
              (this.media.hasAttribute("playsinline") ||
                this.media.hasAttribute("webkit-playsinline")) &&
                (this.config.playsinline = !0),
              this.media.hasAttribute("muted") && (this.config.muted = !0),
              this.media.hasAttribute("loop") && (this.config.loop.active = !0);
            break;
          default:
            return void this.debug.error("Setup failed: unsupported type");
        }
        (this.supported = im.check(
          this.type,
          this.provider,
          this.config.playsinline
        )),
          this.supported.api
            ? ((this.eventListeners = []),
              (this.listeners = new Jm(this)),
              (this.storage = new Im(this)),
              (this.media.plyr = this),
              Og(this.elements.container) ||
                ((this.elements.container = Vg("div", { tabindex: 0 })),
                $g(this.media, this.elements.container)),
              Xm.migrateStyles.call(this),
              Xm.addStyleHook.call(this),
              oy.setup.call(this),
              this.config.debug &&
                am.call(
                  this,
                  this.elements.container,
                  this.config.events.join(" "),
                  (e) => {
                    this.debug.log(`event: ${e.type}`);
                  }
                ),
              (this.fullscreen = new Km(this)),
              (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
                Xm.build.call(this),
              this.listeners.container(),
              this.listeners.global(),
              this.config.ads.enabled && (this.ads = new sy(this)),
              this.isHTML5 &&
                this.config.autoplay &&
                this.once("canplay", () => dm(this.play())),
              (this.lastSeekTime = 0),
              this.config.previewThumbnails.enabled &&
                (this.previewThumbnails = new cy(this)))
            : this.debug.error("Setup failed: no support");
      }
      get isHTML5() {
        return this.provider === Hm.html5;
      }
      get isEmbed() {
        return this.isYouTube || this.isVimeo;
      }
      get isYouTube() {
        return this.provider === Hm.youtube;
      }
      get isVimeo() {
        return this.provider === Hm.vimeo;
      }
      get isVideo() {
        return this.type === Wm;
      }
      get isAudio() {
        return this.type === Vm;
      }
      get playing() {
        return Boolean(this.ready && !this.paused && !this.ended);
      }
      get paused() {
        return Boolean(this.media.paused);
      }
      get stopped() {
        return Boolean(this.paused && 0 === this.currentTime);
      }
      get ended() {
        return Boolean(this.media.ended);
      }
      set currentTime(e) {
        if (!this.duration) return;
        const t = Sg(e) && e > 0;
        (this.media.currentTime = t ? Math.min(e, this.duration) : 0),
          this.debug.log(`Seeking to ${this.currentTime} seconds`);
      }
      get currentTime() {
        return Number(this.media.currentTime);
      }
      get buffered() {
        const { buffered: e } = this.media;
        return Sg(e)
          ? e
          : e && e.length && this.duration > 0
          ? e.end(0) / this.duration
          : 0;
      }
      get seeking() {
        return Boolean(this.media.seeking);
      }
      get duration() {
        const e = parseFloat(this.config.duration),
          t = (this.media || {}).duration,
          n = Sg(t) && t !== 1 / 0 ? t : 0;
        return e || n;
      }
      set volume(e) {
        let t = e;
        Tg(t) && (t = Number(t)),
          Sg(t) || (t = this.storage.get("volume")),
          Sg(t) || ({ volume: t } = this.config),
          t > 1 && (t = 1),
          t < 0 && (t = 0),
          (this.config.volume = t),
          (this.media.volume = t),
          !Ug(e) && this.muted && t > 0 && (this.muted = !1);
      }
      get volume() {
        return Number(this.media.volume);
      }
      set muted(e) {
        let t = e;
        xg(t) || (t = this.storage.get("muted")),
          xg(t) || (t = this.config.muted),
          (this.config.muted = t),
          (this.media.muted = t);
      }
      get muted() {
        return Boolean(this.media.muted);
      }
      get hasAudio() {
        return (
          !this.isHTML5 ||
          !!this.isAudio ||
          Boolean(this.media.mozHasAudio) ||
          Boolean(this.media.webkitAudioDecodedByteCount) ||
          Boolean(this.media.audioTracks && this.media.audioTracks.length)
        );
      }
      set speed(e) {
        let t = null;
        Sg(e) && (t = e),
          Sg(t) || (t = this.storage.get("speed")),
          Sg(t) || (t = this.config.speed.selected);
        const { minimumSpeed: n, maximumSpeed: r } = this;
        (t = (function (e = 0, t = 0, n = 255) {
          return Math.min(Math.max(e, t), n);
        })(t, n, r)),
          (this.config.speed.selected = t),
          setTimeout(() => {
            this.media.playbackRate = t;
          }, 0);
      }
      get speed() {
        return Number(this.media.playbackRate);
      }
      get minimumSpeed() {
        return this.isYouTube
          ? Math.min(...this.options.speed)
          : this.isVimeo
          ? 0.5
          : 0.0625;
      }
      get maximumSpeed() {
        return this.isYouTube
          ? Math.max(...this.options.speed)
          : this.isVimeo
          ? 2
          : 16;
      }
      set quality(e) {
        const t = this.config.quality,
          n = this.options.quality;
        if (!n.length) return;
        let r = [
            !Ug(e) && Number(e),
            this.storage.get("quality"),
            t.selected,
            t.default,
          ].find(Sg),
          i = !0;
        if (!n.includes(r)) {
          const e = gm(n, r);
          this.debug.warn(
            `Unsupported quality option: ${r}, using ${e} instead`
          ),
            (r = e),
            (i = !1);
        }
        (t.selected = r),
          (this.media.quality = r),
          i && this.storage.set({ quality: r });
      }
      get quality() {
        return this.media.quality;
      }
      set loop(e) {
        const t = xg(e) ? e : this.config.loop.active;
        (this.config.loop.active = t), (this.media.loop = t);
      }
      get loop() {
        return Boolean(this.media.loop);
      }
      set source(e) {
        uy.change.call(this, e);
      }
      get source() {
        return this.media.currentSrc;
      }
      get download() {
        const { download: e } = this.config.urls;
        return Ng(e) ? e : this.source;
      }
      set download(e) {
        Ng(e) &&
          ((this.config.urls.download = e), Um.setDownloadUrl.call(this));
      }
      set poster(e) {
        this.isVideo
          ? Xm.setPoster.call(this, e, !1).catch(() => {})
          : this.debug.warn("Poster can only be set for video");
      }
      get poster() {
        return this.isVideo
          ? this.media.getAttribute("poster") ||
              this.media.getAttribute("data-poster")
          : null;
      }
      get ratio() {
        if (!this.isVideo) return null;
        const e = bm(wm.call(this));
        return Cg(e) ? e.join(":") : e;
      }
      set ratio(e) {
        this.isVideo
          ? Tg(e) && vm(e)
            ? ((this.config.ratio = bm(e)), _m.call(this))
            : this.debug.error(`Invalid aspect ratio specified (${e})`)
          : this.debug.warn("Aspect ratio can only be set for video");
      }
      set autoplay(e) {
        const t = xg(e) ? e : this.config.autoplay;
        this.config.autoplay = t;
      }
      get autoplay() {
        return Boolean(this.config.autoplay);
      }
      toggleCaptions(e) {
        Fm.toggle.call(this, e, !1);
      }
      set currentTrack(e) {
        Fm.set.call(this, e, !1);
      }
      get currentTrack() {
        const { toggled: e, currentTrack: t } = this.captions;
        return e ? t : -1;
      }
      set language(e) {
        Fm.setLanguage.call(this, e, !1);
      }
      get language() {
        return (Fm.getCurrentTrack.call(this) || {}).language;
      }
      set pip(e) {
        if (!im.pip) return;
        const t = xg(e) ? e : !this.pip;
        Ag(this.media.webkitSetPresentationMode) &&
          this.media.webkitSetPresentationMode(t ? Bm : $m),
          Ag(this.media.requestPictureInPicture) &&
            (!this.pip && t
              ? this.media.requestPictureInPicture()
              : this.pip && !t && document.exitPictureInPicture());
      }
      get pip() {
        return im.pip
          ? Ug(this.media.webkitPresentationMode)
            ? this.media === document.pictureInPictureElement
            : this.media.webkitPresentationMode === Bm
          : null;
      }
      static supported(e, t, n) {
        return im.check(e, t, n);
      }
      static loadSprite(e, t) {
        return jm(e, t);
      }
      static setup(e, t = {}) {
        let n = null;
        return (
          Tg(e)
            ? (n = Array.from(document.querySelectorAll(e)))
            : Pg(e)
            ? (n = Array.from(e))
            : Cg(e) && (n = e.filter(Og)),
          Ug(n) ? null : n.map((e) => new hy(e, t))
        );
      }
    }
    var py;
    hy.defaults = ((py = qm), JSON.parse(JSON.stringify(py)));
    const dy = {
        video: {
          type: "video",
          title: "View From A Blue Moon",
          sources: [
            {
              src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
              type: "video/mp4",
              size: 576,
            },
            {
              src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4",
              type: "video/mp4",
              size: 720,
            },
            {
              src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4",
              type: "video/mp4",
              size: 1080,
            },
            {
              src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1440p.mp4",
              type: "video/mp4",
              size: 1440,
            },
          ],
          poster:
            "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
          tracks: [
            {
              kind: "captions",
              label: "English",
              srclang: "en",
              src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt",
              default: !0,
            },
            {
              kind: "captions",
              label: "French",
              srclang: "fr",
              src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt",
            },
          ],
          previewThumbnails: {
            src: [
              "https://cdn.plyr.io/static/demo/thumbs/100p.vtt",
              "https://cdn.plyr.io/static/demo/thumbs/240p.vtt",
            ],
          },
        },
        audio: {
          type: "audio",
          title: "Kishi Bashi &ndash; &ldquo;It All Began With A Burst&rdquo;",
          sources: [
            {
              src: "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",
              type: "audio/mp3",
            },
            {
              src: "https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg",
              type: "audio/ogg",
            },
          ],
        },
        youtube: {
          type: "video",
          sources: [
            {
              src: "https://youtube.com/watch?v=bTqVqk7FSmY",
              provider: "youtube",
            },
          ],
        },
        vimeo: {
          type: "video",
          sources: [{ src: "https://vimeo.com/40648169", provider: "vimeo" }],
        },
      },
      fy = (e, t = "", n = !1) => e && e.classList[n ? "add" : "remove"](t);
    (() => {
      const e = "nuvie.io";
      window.location.host === e &&
        Il({
          dsn: "https://d4ad9866ad834437a4754e23937071e4@sentry.io/305555",
          whitelistUrls: [e].map(
            (e) => new RegExp(`https://(([a-z0-9])+(.))*${e}`)
          ),
        }),
        document.addEventListener("DOMContentLoaded", () => {
          hc.setup(".js-shr", {
            count: { className: "button__count" },
            wrapper: { className: "button--with-count" },
          });
          const t = new hy("#player", {
            debug: !0,
            iconUrl: "https://cdn.plyr.io/3.6.8/demo.svg",
            keyboard: { global: !0 },
            tooltips: { controls: !0 },
            captions: { active: !0 },
            vimeo: { referrerPolicy: "no-referrer" },
          });
          window.player = t;
          const n = document.querySelectorAll("[data-source]"),
            r = Object.keys(dy),
            i = Boolean(window.history && window.history.pushState);
          let o = window.location.hash.substring(1);
          const s = o.length;
          function a(e) {
            Array.from(n).forEach((e) => fy(e.parentElement, "active", !1)),
              fy(document.querySelector(`[data-source="${e}"]`), "active", !0),
              Array.from(document.querySelectorAll(".plyr__cite")).forEach(
                (e) => {
                  e.hidden = !0;
                }
              ),
              (document.querySelector(`.plyr__cite--${e}`).hidden = !1);
          }
          function l(e, n) {
            !r.includes(e) ||
              (!n && e === o) ||
              (!o.length && "video" === e) ||
              ((t.source = dy[e]), (o = e), a(e));
          }
          Array.from(n).forEach((e) => {
            e.addEventListener("click", () => {
              const t = e.getAttribute("data-source");
              l(t), i && window.history.pushState({ type: t }, "", `#${t}`);
            });
          }),
            window.addEventListener("popstate", (e) => {
              e.state &&
                Object.keys(e.state).includes("type") &&
                l(e.state.type);
            }),
            s || (o = "video"),
            i &&
              r.includes(o) &&
              window.history.replaceState({ type: o }, "", s ? `#${o}` : ""),
            "video" !== o && l(o, !0),
            a(o);
        });
    })();
  })();

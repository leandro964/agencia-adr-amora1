var Sc = (e) => {
  throw TypeError(e);
};
var pl = (e, t, n) => t.has(e) || Sc("Cannot " + n);
var b = (e, t, n) => (
    pl(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  Z = (e, t, n) =>
    t.has(e)
      ? Sc("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  W = (e, t, n, r) => (
    pl(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  be = (e, t, n) => (pl(e, t, "access private method"), n);
var mi = (e, t, n, r) => ({
  set _(o) {
    W(e, t, o, n);
  },
  get _() {
    return b(e, t, r);
  },
});
function _v(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Jr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var kf = { exports: {} },
  js = {},
  bf = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oi = Symbol.for("react.element"),
  Mv = Symbol.for("react.portal"),
  jv = Symbol.for("react.fragment"),
  Lv = Symbol.for("react.strict_mode"),
  Iv = Symbol.for("react.profiler"),
  Dv = Symbol.for("react.provider"),
  zv = Symbol.for("react.context"),
  Fv = Symbol.for("react.forward_ref"),
  $v = Symbol.for("react.suspense"),
  Uv = Symbol.for("react.memo"),
  Bv = Symbol.for("react.lazy"),
  Cc = Symbol.iterator;
function Hv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Cc && e[Cc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Nf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Rf = Object.assign,
  Of = {};
function eo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Of),
    (this.updater = n || Nf);
}
eo.prototype.isReactComponent = {};
eo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
eo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Af() {}
Af.prototype = eo.prototype;
function su(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Of),
    (this.updater = n || Nf);
}
var lu = (su.prototype = new Af());
lu.constructor = su;
Rf(lu, eo.prototype);
lu.isPureReactComponent = !0;
var Tc = Array.isArray,
  _f = Object.prototype.hasOwnProperty,
  au = { current: null },
  Mf = { key: !0, ref: !0, __self: !0, __source: !0 };
function jf(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      _f.call(t, r) && !Mf.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: oi,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: au.current,
  };
}
function Vv(e, t) {
  return {
    $$typeof: oi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function uu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === oi;
}
function Wv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Pc = /\/+/g;
function hl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Wv("" + e.key)
    : t.toString(36);
}
function zi(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case oi:
          case Mv:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + hl(s, 0) : r),
      Tc(o)
        ? ((n = ""),
          e != null && (n = e.replace(Pc, "$&/") + "/"),
          zi(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (uu(o) &&
            (o = Vv(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Pc, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Tc(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + hl(i, l);
      s += zi(i, t, n, a, o);
    }
  else if (((a = Hv(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + hl(i, l++)), (s += zi(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function vi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    zi(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Qv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var De = { current: null },
  Fi = { transition: null },
  Yv = {
    ReactCurrentDispatcher: De,
    ReactCurrentBatchConfig: Fi,
    ReactCurrentOwner: au,
  };
function Lf() {
  throw Error("act(...) is not supported in production builds of React.");
}
K.Children = {
  map: vi,
  forEach: function (e, t, n) {
    vi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      vi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!uu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
K.Component = eo;
K.Fragment = jv;
K.Profiler = Iv;
K.PureComponent = su;
K.StrictMode = Lv;
K.Suspense = $v;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yv;
K.act = Lf;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Rf({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = au.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      _f.call(t, a) &&
        !Mf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: oi, type: e.type, key: o, ref: i, props: r, _owner: s };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: zv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Dv, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = jf;
K.createFactory = function (e) {
  var t = jf.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: Fv, render: e };
};
K.isValidElement = uu;
K.lazy = function (e) {
  return { $$typeof: Bv, _payload: { _status: -1, _result: e }, _init: Qv };
};
K.memo = function (e, t) {
  return { $$typeof: Uv, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = Fi.transition;
  Fi.transition = {};
  try {
    e();
  } finally {
    Fi.transition = t;
  }
};
K.unstable_act = Lf;
K.useCallback = function (e, t) {
  return De.current.useCallback(e, t);
};
K.useContext = function (e) {
  return De.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return De.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return De.current.useEffect(e, t);
};
K.useId = function () {
  return De.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return De.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return De.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return De.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return De.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return De.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return De.current.useRef(e);
};
K.useState = function (e) {
  return De.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return De.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return De.current.useTransition();
};
K.version = "18.3.1";
bf.exports = K;
var x = bf.exports;
const O = Jr(x),
  Gv = _v({ __proto__: null, default: O }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kv = x,
  qv = Symbol.for("react.element"),
  Xv = Symbol.for("react.fragment"),
  Zv = Object.prototype.hasOwnProperty,
  Jv = Kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  eg = { key: !0, ref: !0, __self: !0, __source: !0 };
function If(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Zv.call(t, r) && !eg.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: qv,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Jv.current,
  };
}
js.Fragment = Xv;
js.jsx = If;
js.jsxs = If;
kf.exports = js;
var E = kf.exports,
  Df = { exports: {} },
  nt = {},
  zf = { exports: {} },
  Ff = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, A) {
    var z = T.length;
    T.push(A);
    e: for (; 0 < z; ) {
      var L = (z - 1) >>> 1,
        F = T[L];
      if (0 < o(F, A)) (T[L] = A), (T[z] = F), (z = L);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var A = T[0],
      z = T.pop();
    if (z !== A) {
      T[0] = z;
      e: for (var L = 0, F = T.length, q = F >>> 1; L < q; ) {
        var ce = 2 * (L + 1) - 1,
          Ye = T[ce],
          J = ce + 1,
          dt = T[J];
        if (0 > o(Ye, z))
          J < F && 0 > o(dt, Ye)
            ? ((T[L] = dt), (T[J] = z), (L = J))
            : ((T[L] = Ye), (T[ce] = z), (L = ce));
        else if (J < F && 0 > o(dt, z)) (T[L] = dt), (T[J] = z), (L = J);
        else break e;
      }
    }
    return A;
  }
  function o(T, A) {
    var z = T.sortIndex - A.sortIndex;
    return z !== 0 ? z : T.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    d = 1,
    f = null,
    c = 3,
    m = !1,
    y = !1,
    v = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(T) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= T)
        r(u), (A.sortIndex = A.expirationTime), t(a, A);
      else break;
      A = n(u);
    }
  }
  function S(T) {
    if (((v = !1), g(T), !y))
      if (n(a) !== null) (y = !0), U(C);
      else {
        var A = n(u);
        A !== null && G(S, A.startTime - T);
      }
  }
  function C(T, A) {
    (y = !1), v && ((v = !1), h(N), (N = -1)), (m = !0);
    var z = c;
    try {
      for (
        g(A), f = n(a);
        f !== null && (!(f.expirationTime > A) || (T && !$()));

      ) {
        var L = f.callback;
        if (typeof L == "function") {
          (f.callback = null), (c = f.priorityLevel);
          var F = L(f.expirationTime <= A);
          (A = e.unstable_now()),
            typeof F == "function" ? (f.callback = F) : f === n(a) && r(a),
            g(A);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var q = !0;
      else {
        var ce = n(u);
        ce !== null && G(S, ce.startTime - A), (q = !1);
      }
      return q;
    } finally {
      (f = null), (c = z), (m = !1);
    }
  }
  var P = !1,
    k = null,
    N = -1,
    I = 5,
    _ = -1;
  function $() {
    return !(e.unstable_now() - _ < I);
  }
  function D() {
    if (k !== null) {
      var T = e.unstable_now();
      _ = T;
      var A = !0;
      try {
        A = k(!0, T);
      } finally {
        A ? Q() : ((P = !1), (k = null));
      }
    } else P = !1;
  }
  var Q;
  if (typeof p == "function")
    Q = function () {
      p(D);
    };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(),
      Y = M.port2;
    (M.port1.onmessage = D),
      (Q = function () {
        Y.postMessage(null);
      });
  } else
    Q = function () {
      w(D, 0);
    };
  function U(T) {
    (k = T), P || ((P = !0), Q());
  }
  function G(T, A) {
    N = w(function () {
      T(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || m || ((y = !0), U(C));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (I = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return c;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (T) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = c;
      }
      var z = c;
      c = A;
      try {
        return T();
      } finally {
        c = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, A) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var z = c;
      c = T;
      try {
        return A();
      } finally {
        c = z;
      }
    }),
    (e.unstable_scheduleCallback = function (T, A, z) {
      var L = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? L + z : L))
          : (z = L),
        T)
      ) {
        case 1:
          var F = -1;
          break;
        case 2:
          F = 250;
          break;
        case 5:
          F = 1073741823;
          break;
        case 4:
          F = 1e4;
          break;
        default:
          F = 5e3;
      }
      return (
        (F = z + F),
        (T = {
          id: d++,
          callback: A,
          priorityLevel: T,
          startTime: z,
          expirationTime: F,
          sortIndex: -1,
        }),
        z > L
          ? ((T.sortIndex = z),
            t(u, T),
            n(a) === null &&
              T === n(u) &&
              (v ? (h(N), (N = -1)) : (v = !0), G(S, z - L)))
          : ((T.sortIndex = F), t(a, T), y || m || ((y = !0), U(C))),
        T
      );
    }),
    (e.unstable_shouldYield = $),
    (e.unstable_wrapCallback = function (T) {
      var A = c;
      return function () {
        var z = c;
        c = A;
        try {
          return T.apply(this, arguments);
        } finally {
          c = z;
        }
      };
    });
})(Ff);
zf.exports = Ff;
var tg = zf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ng = x,
  tt = tg;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var $f = new Set(),
  jo = {};
function or(e, t) {
  Vr(e, t), Vr(e + "Capture", t);
}
function Vr(e, t) {
  for (jo[e] = t, e = 0; e < t.length; e++) $f.add(t[e]);
}
var Qt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Gl = Object.prototype.hasOwnProperty,
  rg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  kc = {},
  bc = {};
function og(e) {
  return Gl.call(bc, e)
    ? !0
    : Gl.call(kc, e)
    ? !1
    : rg.test(e)
    ? (bc[e] = !0)
    : ((kc[e] = !0), !1);
}
function ig(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function sg(e, t, n, r) {
  if (t === null || typeof t > "u" || ig(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ze(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ke[e] = new ze(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ke[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ke[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ke[e] = new ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ke[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ke[e] = new ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ke[e] = new ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ke[e] = new ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ke[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var cu = /[\-:]([a-z])/g;
function du(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(cu, du);
    ke[t] = new ze(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(cu, du);
    ke[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(cu, du);
  ke[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ke[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ke.xlinkHref = new ze(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ke[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function fu(e, t, n, r) {
  var o = ke.hasOwnProperty(t) ? ke[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (sg(t, n, o, r) && (n = null),
    r || o === null
      ? og(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Zt = ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gi = Symbol.for("react.element"),
  pr = Symbol.for("react.portal"),
  hr = Symbol.for("react.fragment"),
  pu = Symbol.for("react.strict_mode"),
  Kl = Symbol.for("react.profiler"),
  Uf = Symbol.for("react.provider"),
  Bf = Symbol.for("react.context"),
  hu = Symbol.for("react.forward_ref"),
  ql = Symbol.for("react.suspense"),
  Xl = Symbol.for("react.suspense_list"),
  mu = Symbol.for("react.memo"),
  un = Symbol.for("react.lazy"),
  Hf = Symbol.for("react.offscreen"),
  Nc = Symbol.iterator;
function lo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Nc && e[Nc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var pe = Object.assign,
  ml;
function xo(e) {
  if (ml === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ml = (t && t[1]) || "";
    }
  return (
    `
` +
    ml +
    e
  );
}
var vl = !1;
function gl(e, t) {
  if (!e || vl) return "";
  vl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (vl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? xo(e) : "";
}
function lg(e) {
  switch (e.tag) {
    case 5:
      return xo(e.type);
    case 16:
      return xo("Lazy");
    case 13:
      return xo("Suspense");
    case 19:
      return xo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = gl(e.type, !1)), e;
    case 11:
      return (e = gl(e.type.render, !1)), e;
    case 1:
      return (e = gl(e.type, !0)), e;
    default:
      return "";
  }
}
function Zl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case hr:
      return "Fragment";
    case pr:
      return "Portal";
    case Kl:
      return "Profiler";
    case pu:
      return "StrictMode";
    case ql:
      return "Suspense";
    case Xl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Bf:
        return (e.displayName || "Context") + ".Consumer";
      case Uf:
        return (e._context.displayName || "Context") + ".Provider";
      case hu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case mu:
        return (
          (t = e.displayName || null), t !== null ? t : Zl(e.type) || "Memo"
        );
      case un:
        (t = e._payload), (e = e._init);
        try {
          return Zl(e(t));
        } catch {}
    }
  return null;
}
function ag(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Zl(t);
    case 8:
      return t === pu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Rn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Vf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ug(e) {
  var t = Vf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function yi(e) {
  e._valueTracker || (e._valueTracker = ug(e));
}
function Wf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Vf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ts(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Jl(e, t) {
  var n = t.checked;
  return pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Rc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Rn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Qf(e, t) {
  (t = t.checked), t != null && fu(e, "checked", t, !1);
}
function ea(e, t) {
  Qf(e, t);
  var n = Rn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ta(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ta(e, t.type, Rn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Oc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ta(e, t, n) {
  (t !== "number" || ts(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Eo = Array.isArray;
function Pr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Rn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function na(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ac(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (Eo(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Rn(n) };
}
function Yf(e, t) {
  var n = Rn(t.value),
    r = Rn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function _c(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Gf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ra(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Gf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var wi,
  Kf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        wi = wi || document.createElement("div"),
          wi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = wi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Lo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var To = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  cg = ["Webkit", "ms", "Moz", "O"];
Object.keys(To).forEach(function (e) {
  cg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (To[t] = To[e]);
  });
});
function qf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (To.hasOwnProperty(e) && To[e])
    ? ("" + t).trim()
    : t + "px";
}
function Xf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = qf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var dg = pe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function oa(e, t) {
  if (t) {
    if (dg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function ia(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var sa = null;
function vu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var la = null,
  kr = null,
  br = null;
function Mc(e) {
  if ((e = li(e))) {
    if (typeof la != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Fs(t)), la(e.stateNode, e.type, t));
  }
}
function Zf(e) {
  kr ? (br ? br.push(e) : (br = [e])) : (kr = e);
}
function Jf() {
  if (kr) {
    var e = kr,
      t = br;
    if (((br = kr = null), Mc(e), t)) for (e = 0; e < t.length; e++) Mc(t[e]);
  }
}
function ep(e, t) {
  return e(t);
}
function tp() {}
var yl = !1;
function np(e, t, n) {
  if (yl) return e(t, n);
  yl = !0;
  try {
    return ep(e, t, n);
  } finally {
    (yl = !1), (kr !== null || br !== null) && (tp(), Jf());
  }
}
function Io(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var aa = !1;
if (Qt)
  try {
    var ao = {};
    Object.defineProperty(ao, "passive", {
      get: function () {
        aa = !0;
      },
    }),
      window.addEventListener("test", ao, ao),
      window.removeEventListener("test", ao, ao);
  } catch {
    aa = !1;
  }
function fg(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Po = !1,
  ns = null,
  rs = !1,
  ua = null,
  pg = {
    onError: function (e) {
      (Po = !0), (ns = e);
    },
  };
function hg(e, t, n, r, o, i, s, l, a) {
  (Po = !1), (ns = null), fg.apply(pg, arguments);
}
function mg(e, t, n, r, o, i, s, l, a) {
  if ((hg.apply(this, arguments), Po)) {
    if (Po) {
      var u = ns;
      (Po = !1), (ns = null);
    } else throw Error(R(198));
    rs || ((rs = !0), (ua = u));
  }
}
function ir(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function rp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function jc(e) {
  if (ir(e) !== e) throw Error(R(188));
}
function vg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ir(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return jc(o), e;
        if (i === r) return jc(o), t;
        i = i.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function op(e) {
  return (e = vg(e)), e !== null ? ip(e) : null;
}
function ip(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ip(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var sp = tt.unstable_scheduleCallback,
  Lc = tt.unstable_cancelCallback,
  gg = tt.unstable_shouldYield,
  yg = tt.unstable_requestPaint,
  ve = tt.unstable_now,
  wg = tt.unstable_getCurrentPriorityLevel,
  gu = tt.unstable_ImmediatePriority,
  lp = tt.unstable_UserBlockingPriority,
  os = tt.unstable_NormalPriority,
  xg = tt.unstable_LowPriority,
  ap = tt.unstable_IdlePriority,
  Ls = null,
  Mt = null;
function Eg(e) {
  if (Mt && typeof Mt.onCommitFiberRoot == "function")
    try {
      Mt.onCommitFiberRoot(Ls, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var wt = Math.clz32 ? Math.clz32 : Tg,
  Sg = Math.log,
  Cg = Math.LN2;
function Tg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Sg(e) / Cg) | 0)) | 0;
}
var xi = 64,
  Ei = 4194304;
function So(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function is(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = So(l)) : ((i &= s), i !== 0 && (r = So(i)));
  } else (s = n & ~o), s !== 0 ? (r = So(s)) : i !== 0 && (r = So(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - wt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Pg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function kg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - wt(i),
      l = 1 << s,
      a = o[s];
    a === -1
      ? (!(l & n) || l & r) && (o[s] = Pg(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function ca(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function up() {
  var e = xi;
  return (xi <<= 1), !(xi & 4194240) && (xi = 64), e;
}
function wl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ii(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - wt(t)),
    (e[t] = n);
}
function bg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - wt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function yu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - wt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ee = 0;
function cp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var dp,
  wu,
  fp,
  pp,
  hp,
  da = !1,
  Si = [],
  En = null,
  Sn = null,
  Cn = null,
  Do = new Map(),
  zo = new Map(),
  dn = [],
  Ng =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ic(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      En = null;
      break;
    case "dragenter":
    case "dragleave":
      Sn = null;
      break;
    case "mouseover":
    case "mouseout":
      Cn = null;
      break;
    case "pointerover":
    case "pointerout":
      Do.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      zo.delete(t.pointerId);
  }
}
function uo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = li(t)), t !== null && wu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Rg(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (En = uo(En, e, t, n, r, o)), !0;
    case "dragenter":
      return (Sn = uo(Sn, e, t, n, r, o)), !0;
    case "mouseover":
      return (Cn = uo(Cn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Do.set(i, uo(Do.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), zo.set(i, uo(zo.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function mp(e) {
  var t = Un(e.target);
  if (t !== null) {
    var n = ir(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = rp(n)), t !== null)) {
          (e.blockedOn = t),
            hp(e.priority, function () {
              fp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function $i(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = fa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (sa = r), n.target.dispatchEvent(r), (sa = null);
    } else return (t = li(n)), t !== null && wu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Dc(e, t, n) {
  $i(e) && n.delete(t);
}
function Og() {
  (da = !1),
    En !== null && $i(En) && (En = null),
    Sn !== null && $i(Sn) && (Sn = null),
    Cn !== null && $i(Cn) && (Cn = null),
    Do.forEach(Dc),
    zo.forEach(Dc);
}
function co(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    da ||
      ((da = !0),
      tt.unstable_scheduleCallback(tt.unstable_NormalPriority, Og)));
}
function Fo(e) {
  function t(o) {
    return co(o, e);
  }
  if (0 < Si.length) {
    co(Si[0], e);
    for (var n = 1; n < Si.length; n++) {
      var r = Si[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    En !== null && co(En, e),
      Sn !== null && co(Sn, e),
      Cn !== null && co(Cn, e),
      Do.forEach(t),
      zo.forEach(t),
      n = 0;
    n < dn.length;
    n++
  )
    (r = dn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < dn.length && ((n = dn[0]), n.blockedOn === null); )
    mp(n), n.blockedOn === null && dn.shift();
}
var Nr = Zt.ReactCurrentBatchConfig,
  ss = !0;
function Ag(e, t, n, r) {
  var o = ee,
    i = Nr.transition;
  Nr.transition = null;
  try {
    (ee = 1), xu(e, t, n, r);
  } finally {
    (ee = o), (Nr.transition = i);
  }
}
function _g(e, t, n, r) {
  var o = ee,
    i = Nr.transition;
  Nr.transition = null;
  try {
    (ee = 4), xu(e, t, n, r);
  } finally {
    (ee = o), (Nr.transition = i);
  }
}
function xu(e, t, n, r) {
  if (ss) {
    var o = fa(e, t, n, r);
    if (o === null) Rl(e, t, r, ls, n), Ic(e, r);
    else if (Rg(o, e, t, n, r)) r.stopPropagation();
    else if ((Ic(e, r), t & 4 && -1 < Ng.indexOf(e))) {
      for (; o !== null; ) {
        var i = li(o);
        if (
          (i !== null && dp(i),
          (i = fa(e, t, n, r)),
          i === null && Rl(e, t, r, ls, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Rl(e, t, r, null, n);
  }
}
var ls = null;
function fa(e, t, n, r) {
  if (((ls = null), (e = vu(r)), (e = Un(e)), e !== null))
    if (((t = ir(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = rp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ls = e), null;
}
function vp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (wg()) {
        case gu:
          return 1;
        case lp:
          return 4;
        case os:
        case xg:
          return 16;
        case ap:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var yn = null,
  Eu = null,
  Ui = null;
function gp() {
  if (Ui) return Ui;
  var e,
    t = Eu,
    n = t.length,
    r,
    o = "value" in yn ? yn.value : yn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Ui = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Bi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ci() {
  return !0;
}
function zc() {
  return !1;
}
function rt(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ci
        : zc),
      (this.isPropagationStopped = zc),
      this
    );
  }
  return (
    pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ci));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ci));
      },
      persist: function () {},
      isPersistent: Ci,
    }),
    t
  );
}
var to = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Su = rt(to),
  si = pe({}, to, { view: 0, detail: 0 }),
  Mg = rt(si),
  xl,
  El,
  fo,
  Is = pe({}, si, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Cu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== fo &&
            (fo && e.type === "mousemove"
              ? ((xl = e.screenX - fo.screenX), (El = e.screenY - fo.screenY))
              : (El = xl = 0),
            (fo = e)),
          xl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : El;
    },
  }),
  Fc = rt(Is),
  jg = pe({}, Is, { dataTransfer: 0 }),
  Lg = rt(jg),
  Ig = pe({}, si, { relatedTarget: 0 }),
  Sl = rt(Ig),
  Dg = pe({}, to, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zg = rt(Dg),
  Fg = pe({}, to, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  $g = rt(Fg),
  Ug = pe({}, to, { data: 0 }),
  $c = rt(Ug),
  Bg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Hg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Vg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Wg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Vg[e]) ? !!t[e] : !1;
}
function Cu() {
  return Wg;
}
var Qg = pe({}, si, {
    key: function (e) {
      if (e.key) {
        var t = Bg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Bi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Hg[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Cu,
    charCode: function (e) {
      return e.type === "keypress" ? Bi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Bi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Yg = rt(Qg),
  Gg = pe({}, Is, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Uc = rt(Gg),
  Kg = pe({}, si, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Cu,
  }),
  qg = rt(Kg),
  Xg = pe({}, to, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Zg = rt(Xg),
  Jg = pe({}, Is, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ey = rt(Jg),
  ty = [9, 13, 27, 32],
  Tu = Qt && "CompositionEvent" in window,
  ko = null;
Qt && "documentMode" in document && (ko = document.documentMode);
var ny = Qt && "TextEvent" in window && !ko,
  yp = Qt && (!Tu || (ko && 8 < ko && 11 >= ko)),
  Bc = " ",
  Hc = !1;
function wp(e, t) {
  switch (e) {
    case "keyup":
      return ty.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function xp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var mr = !1;
function ry(e, t) {
  switch (e) {
    case "compositionend":
      return xp(t);
    case "keypress":
      return t.which !== 32 ? null : ((Hc = !0), Bc);
    case "textInput":
      return (e = t.data), e === Bc && Hc ? null : e;
    default:
      return null;
  }
}
function oy(e, t) {
  if (mr)
    return e === "compositionend" || (!Tu && wp(e, t))
      ? ((e = gp()), (Ui = Eu = yn = null), (mr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return yp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var iy = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Vc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!iy[e.type] : t === "textarea";
}
function Ep(e, t, n, r) {
  Zf(r),
    (t = as(t, "onChange")),
    0 < t.length &&
      ((n = new Su("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var bo = null,
  $o = null;
function sy(e) {
  _p(e, 0);
}
function Ds(e) {
  var t = yr(e);
  if (Wf(t)) return e;
}
function ly(e, t) {
  if (e === "change") return t;
}
var Sp = !1;
if (Qt) {
  var Cl;
  if (Qt) {
    var Tl = "oninput" in document;
    if (!Tl) {
      var Wc = document.createElement("div");
      Wc.setAttribute("oninput", "return;"),
        (Tl = typeof Wc.oninput == "function");
    }
    Cl = Tl;
  } else Cl = !1;
  Sp = Cl && (!document.documentMode || 9 < document.documentMode);
}
function Qc() {
  bo && (bo.detachEvent("onpropertychange", Cp), ($o = bo = null));
}
function Cp(e) {
  if (e.propertyName === "value" && Ds($o)) {
    var t = [];
    Ep(t, $o, e, vu(e)), np(sy, t);
  }
}
function ay(e, t, n) {
  e === "focusin"
    ? (Qc(), (bo = t), ($o = n), bo.attachEvent("onpropertychange", Cp))
    : e === "focusout" && Qc();
}
function uy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ds($o);
}
function cy(e, t) {
  if (e === "click") return Ds(t);
}
function dy(e, t) {
  if (e === "input" || e === "change") return Ds(t);
}
function fy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Et = typeof Object.is == "function" ? Object.is : fy;
function Uo(e, t) {
  if (Et(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Gl.call(t, o) || !Et(e[o], t[o])) return !1;
  }
  return !0;
}
function Yc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Gc(e, t) {
  var n = Yc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Yc(n);
  }
}
function Tp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Tp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Pp() {
  for (var e = window, t = ts(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ts(e.document);
  }
  return t;
}
function Pu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function py(e) {
  var t = Pp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Tp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Pu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Gc(n, i));
        var s = Gc(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var hy = Qt && "documentMode" in document && 11 >= document.documentMode,
  vr = null,
  pa = null,
  No = null,
  ha = !1;
function Kc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ha ||
    vr == null ||
    vr !== ts(r) ||
    ((r = vr),
    "selectionStart" in r && Pu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (No && Uo(No, r)) ||
      ((No = r),
      (r = as(pa, "onSelect")),
      0 < r.length &&
        ((t = new Su("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = vr))));
}
function Ti(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var gr = {
    animationend: Ti("Animation", "AnimationEnd"),
    animationiteration: Ti("Animation", "AnimationIteration"),
    animationstart: Ti("Animation", "AnimationStart"),
    transitionend: Ti("Transition", "TransitionEnd"),
  },
  Pl = {},
  kp = {};
Qt &&
  ((kp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete gr.animationend.animation,
    delete gr.animationiteration.animation,
    delete gr.animationstart.animation),
  "TransitionEvent" in window || delete gr.transitionend.transition);
function zs(e) {
  if (Pl[e]) return Pl[e];
  if (!gr[e]) return e;
  var t = gr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in kp) return (Pl[e] = t[n]);
  return e;
}
var bp = zs("animationend"),
  Np = zs("animationiteration"),
  Rp = zs("animationstart"),
  Op = zs("transitionend"),
  Ap = new Map(),
  qc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ln(e, t) {
  Ap.set(e, t), or(t, [e]);
}
for (var kl = 0; kl < qc.length; kl++) {
  var bl = qc[kl],
    my = bl.toLowerCase(),
    vy = bl[0].toUpperCase() + bl.slice(1);
  Ln(my, "on" + vy);
}
Ln(bp, "onAnimationEnd");
Ln(Np, "onAnimationIteration");
Ln(Rp, "onAnimationStart");
Ln("dblclick", "onDoubleClick");
Ln("focusin", "onFocus");
Ln("focusout", "onBlur");
Ln(Op, "onTransitionEnd");
Vr("onMouseEnter", ["mouseout", "mouseover"]);
Vr("onMouseLeave", ["mouseout", "mouseover"]);
Vr("onPointerEnter", ["pointerout", "pointerover"]);
Vr("onPointerLeave", ["pointerout", "pointerover"]);
or(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
or(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
or("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
or(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
or(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
or(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Co =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  gy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));
function Xc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), mg(r, t, void 0, e), (e.currentTarget = null);
}
function _p(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          Xc(o, l, u), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          Xc(o, l, u), (i = a);
        }
    }
  }
  if (rs) throw ((e = ua), (rs = !1), (ua = null), e);
}
function ie(e, t) {
  var n = t[wa];
  n === void 0 && (n = t[wa] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Mp(t, e, 2, !1), n.add(r));
}
function Nl(e, t, n) {
  var r = 0;
  t && (r |= 4), Mp(n, e, r, t);
}
var Pi = "_reactListening" + Math.random().toString(36).slice(2);
function Bo(e) {
  if (!e[Pi]) {
    (e[Pi] = !0),
      $f.forEach(function (n) {
        n !== "selectionchange" && (gy.has(n) || Nl(n, !1, e), Nl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Pi] || ((t[Pi] = !0), Nl("selectionchange", !1, t));
  }
}
function Mp(e, t, n, r) {
  switch (vp(t)) {
    case 1:
      var o = Ag;
      break;
    case 4:
      o = _g;
      break;
    default:
      o = xu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !aa ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Rl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Un(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  np(function () {
    var u = i,
      d = vu(n),
      f = [];
    e: {
      var c = Ap.get(e);
      if (c !== void 0) {
        var m = Su,
          y = e;
        switch (e) {
          case "keypress":
            if (Bi(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = Yg;
            break;
          case "focusin":
            (y = "focus"), (m = Sl);
            break;
          case "focusout":
            (y = "blur"), (m = Sl);
            break;
          case "beforeblur":
          case "afterblur":
            m = Sl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Fc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = Lg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = qg;
            break;
          case bp:
          case Np:
          case Rp:
            m = zg;
            break;
          case Op:
            m = Zg;
            break;
          case "scroll":
            m = Mg;
            break;
          case "wheel":
            m = ey;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = $g;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Uc;
        }
        var v = (t & 4) !== 0,
          w = !v && e === "scroll",
          h = v ? (c !== null ? c + "Capture" : null) : c;
        v = [];
        for (var p = u, g; p !== null; ) {
          g = p;
          var S = g.stateNode;
          if (
            (g.tag === 5 &&
              S !== null &&
              ((g = S),
              h !== null && ((S = Io(p, h)), S != null && v.push(Ho(p, S, g)))),
            w)
          )
            break;
          p = p.return;
        }
        0 < v.length &&
          ((c = new m(c, y, null, n, d)), f.push({ event: c, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((c = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          c &&
            n !== sa &&
            (y = n.relatedTarget || n.fromElement) &&
            (Un(y) || y[Yt]))
        )
          break e;
        if (
          (m || c) &&
          ((c =
            d.window === d
              ? d
              : (c = d.ownerDocument)
              ? c.defaultView || c.parentWindow
              : window),
          m
            ? ((y = n.relatedTarget || n.toElement),
              (m = u),
              (y = y ? Un(y) : null),
              y !== null &&
                ((w = ir(y)), y !== w || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((m = null), (y = u)),
          m !== y)
        ) {
          if (
            ((v = Fc),
            (S = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Uc),
              (S = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (w = m == null ? c : yr(m)),
            (g = y == null ? c : yr(y)),
            (c = new v(S, p + "leave", m, n, d)),
            (c.target = w),
            (c.relatedTarget = g),
            (S = null),
            Un(d) === u &&
              ((v = new v(h, p + "enter", y, n, d)),
              (v.target = g),
              (v.relatedTarget = w),
              (S = v)),
            (w = S),
            m && y)
          )
            t: {
              for (v = m, h = y, p = 0, g = v; g; g = dr(g)) p++;
              for (g = 0, S = h; S; S = dr(S)) g++;
              for (; 0 < p - g; ) (v = dr(v)), p--;
              for (; 0 < g - p; ) (h = dr(h)), g--;
              for (; p--; ) {
                if (v === h || (h !== null && v === h.alternate)) break t;
                (v = dr(v)), (h = dr(h));
              }
              v = null;
            }
          else v = null;
          m !== null && Zc(f, c, m, v, !1),
            y !== null && w !== null && Zc(f, w, y, v, !0);
        }
      }
      e: {
        if (
          ((c = u ? yr(u) : window),
          (m = c.nodeName && c.nodeName.toLowerCase()),
          m === "select" || (m === "input" && c.type === "file"))
        )
          var C = ly;
        else if (Vc(c))
          if (Sp) C = dy;
          else {
            C = uy;
            var P = ay;
          }
        else
          (m = c.nodeName) &&
            m.toLowerCase() === "input" &&
            (c.type === "checkbox" || c.type === "radio") &&
            (C = cy);
        if (C && (C = C(e, u))) {
          Ep(f, C, n, d);
          break e;
        }
        P && P(e, c, u),
          e === "focusout" &&
            (P = c._wrapperState) &&
            P.controlled &&
            c.type === "number" &&
            ta(c, "number", c.value);
      }
      switch (((P = u ? yr(u) : window), e)) {
        case "focusin":
          (Vc(P) || P.contentEditable === "true") &&
            ((vr = P), (pa = u), (No = null));
          break;
        case "focusout":
          No = pa = vr = null;
          break;
        case "mousedown":
          ha = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ha = !1), Kc(f, n, d);
          break;
        case "selectionchange":
          if (hy) break;
        case "keydown":
        case "keyup":
          Kc(f, n, d);
      }
      var k;
      if (Tu)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        mr
          ? wp(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (yp &&
          n.locale !== "ko" &&
          (mr || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && mr && (k = gp())
            : ((yn = d),
              (Eu = "value" in yn ? yn.value : yn.textContent),
              (mr = !0))),
        (P = as(u, N)),
        0 < P.length &&
          ((N = new $c(N, e, null, n, d)),
          f.push({ event: N, listeners: P }),
          k ? (N.data = k) : ((k = xp(n)), k !== null && (N.data = k)))),
        (k = ny ? ry(e, n) : oy(e, n)) &&
          ((u = as(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new $c("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: u }),
            (d.data = k)));
    }
    _p(f, t);
  });
}
function Ho(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function as(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Io(e, n)),
      i != null && r.unshift(Ho(e, i, o)),
      (i = Io(e, t)),
      i != null && r.push(Ho(e, i, o))),
      (e = e.return);
  }
  return r;
}
function dr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Zc(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = Io(n, i)), a != null && s.unshift(Ho(n, a, l)))
        : o || ((a = Io(n, i)), a != null && s.push(Ho(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var yy = /\r\n?/g,
  wy = /\u0000|\uFFFD/g;
function Jc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      yy,
      `
`
    )
    .replace(wy, "");
}
function ki(e, t, n) {
  if (((t = Jc(t)), Jc(e) !== t && n)) throw Error(R(425));
}
function us() {}
var ma = null,
  va = null;
function ga(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ya = typeof setTimeout == "function" ? setTimeout : void 0,
  xy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ed = typeof Promise == "function" ? Promise : void 0,
  Ey =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ed < "u"
      ? function (e) {
          return ed.resolve(null).then(e).catch(Sy);
        }
      : ya;
function Sy(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ol(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Fo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Fo(t);
}
function Tn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function td(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var no = Math.random().toString(36).slice(2),
  _t = "__reactFiber$" + no,
  Vo = "__reactProps$" + no,
  Yt = "__reactContainer$" + no,
  wa = "__reactEvents$" + no,
  Cy = "__reactListeners$" + no,
  Ty = "__reactHandles$" + no;
function Un(e) {
  var t = e[_t];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Yt] || n[_t])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = td(e); e !== null; ) {
          if ((n = e[_t])) return n;
          e = td(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function li(e) {
  return (
    (e = e[_t] || e[Yt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function yr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Fs(e) {
  return e[Vo] || null;
}
var xa = [],
  wr = -1;
function In(e) {
  return { current: e };
}
function se(e) {
  0 > wr || ((e.current = xa[wr]), (xa[wr] = null), wr--);
}
function ne(e, t) {
  wr++, (xa[wr] = e.current), (e.current = t);
}
var On = {},
  _e = In(On),
  Be = In(!1),
  Xn = On;
function Wr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return On;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function He(e) {
  return (e = e.childContextTypes), e != null;
}
function cs() {
  se(Be), se(_e);
}
function nd(e, t, n) {
  if (_e.current !== On) throw Error(R(168));
  ne(_e, t), ne(Be, n);
}
function jp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(R(108, ag(e) || "Unknown", o));
  return pe({}, n, r);
}
function ds(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || On),
    (Xn = _e.current),
    ne(_e, e),
    ne(Be, Be.current),
    !0
  );
}
function rd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = jp(e, t, Xn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      se(Be),
      se(_e),
      ne(_e, e))
    : se(Be),
    ne(Be, n);
}
var Bt = null,
  $s = !1,
  Al = !1;
function Lp(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
function Py(e) {
  ($s = !0), Lp(e);
}
function Dn() {
  if (!Al && Bt !== null) {
    Al = !0;
    var e = 0,
      t = ee;
    try {
      var n = Bt;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Bt = null), ($s = !1);
    } catch (o) {
      throw (Bt !== null && (Bt = Bt.slice(e + 1)), sp(gu, Dn), o);
    } finally {
      (ee = t), (Al = !1);
    }
  }
  return null;
}
var xr = [],
  Er = 0,
  fs = null,
  ps = 0,
  it = [],
  st = 0,
  Zn = null,
  Ht = 1,
  Vt = "";
function Fn(e, t) {
  (xr[Er++] = ps), (xr[Er++] = fs), (fs = e), (ps = t);
}
function Ip(e, t, n) {
  (it[st++] = Ht), (it[st++] = Vt), (it[st++] = Zn), (Zn = e);
  var r = Ht;
  e = Vt;
  var o = 32 - wt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - wt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Ht = (1 << (32 - wt(t) + o)) | (n << o) | r),
      (Vt = i + e);
  } else (Ht = (1 << i) | (n << o) | r), (Vt = e);
}
function ku(e) {
  e.return !== null && (Fn(e, 1), Ip(e, 1, 0));
}
function bu(e) {
  for (; e === fs; )
    (fs = xr[--Er]), (xr[Er] = null), (ps = xr[--Er]), (xr[Er] = null);
  for (; e === Zn; )
    (Zn = it[--st]),
      (it[st] = null),
      (Vt = it[--st]),
      (it[st] = null),
      (Ht = it[--st]),
      (it[st] = null);
}
var Je = null,
  Ze = null,
  ue = !1,
  gt = null;
function Dp(e, t) {
  var n = lt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function od(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Je = e), (Ze = Tn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Je = e), (Ze = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Zn !== null ? { id: Ht, overflow: Vt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = lt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Je = e),
            (Ze = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ea(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Sa(e) {
  if (ue) {
    var t = Ze;
    if (t) {
      var n = t;
      if (!od(e, t)) {
        if (Ea(e)) throw Error(R(418));
        t = Tn(n.nextSibling);
        var r = Je;
        t && od(e, t)
          ? Dp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (Je = e));
      }
    } else {
      if (Ea(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (ue = !1), (Je = e);
    }
  }
}
function id(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Je = e;
}
function bi(e) {
  if (e !== Je) return !1;
  if (!ue) return id(e), (ue = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ga(e.type, e.memoizedProps))),
    t && (t = Ze))
  ) {
    if (Ea(e)) throw (zp(), Error(R(418)));
    for (; t; ) Dp(e, t), (t = Tn(t.nextSibling));
  }
  if ((id(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ze = Tn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ze = null;
    }
  } else Ze = Je ? Tn(e.stateNode.nextSibling) : null;
  return !0;
}
function zp() {
  for (var e = Ze; e; ) e = Tn(e.nextSibling);
}
function Qr() {
  (Ze = Je = null), (ue = !1);
}
function Nu(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
var ky = Zt.ReactCurrentBatchConfig;
function po(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function Ni(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function sd(e) {
  var t = e._init;
  return t(e._payload);
}
function Fp(e) {
  function t(h, p) {
    if (e) {
      var g = h.deletions;
      g === null ? ((h.deletions = [p]), (h.flags |= 16)) : g.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function o(h, p) {
    return (h = Nn(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, p, g) {
    return (
      (h.index = g),
      e
        ? ((g = h.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((h.flags |= 2), p) : g)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, p, g, S) {
    return p === null || p.tag !== 6
      ? ((p = zl(g, h.mode, S)), (p.return = h), p)
      : ((p = o(p, g)), (p.return = h), p);
  }
  function a(h, p, g, S) {
    var C = g.type;
    return C === hr
      ? d(h, p, g.props.children, S, g.key)
      : p !== null &&
        (p.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === un &&
            sd(C) === p.type))
      ? ((S = o(p, g.props)), (S.ref = po(h, p, g)), (S.return = h), S)
      : ((S = Ki(g.type, g.key, g.props, null, h.mode, S)),
        (S.ref = po(h, p, g)),
        (S.return = h),
        S);
  }
  function u(h, p, g, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = Fl(g, h.mode, S)), (p.return = h), p)
      : ((p = o(p, g.children || [])), (p.return = h), p);
  }
  function d(h, p, g, S, C) {
    return p === null || p.tag !== 7
      ? ((p = Kn(g, h.mode, S, C)), (p.return = h), p)
      : ((p = o(p, g)), (p.return = h), p);
  }
  function f(h, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = zl("" + p, h.mode, g)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case gi:
          return (
            (g = Ki(p.type, p.key, p.props, null, h.mode, g)),
            (g.ref = po(h, null, p)),
            (g.return = h),
            g
          );
        case pr:
          return (p = Fl(p, h.mode, g)), (p.return = h), p;
        case un:
          var S = p._init;
          return f(h, S(p._payload), g);
      }
      if (Eo(p) || lo(p))
        return (p = Kn(p, h.mode, g, null)), (p.return = h), p;
      Ni(h, p);
    }
    return null;
  }
  function c(h, p, g, S) {
    var C = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return C !== null ? null : l(h, p, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case gi:
          return g.key === C ? a(h, p, g, S) : null;
        case pr:
          return g.key === C ? u(h, p, g, S) : null;
        case un:
          return (C = g._init), c(h, p, C(g._payload), S);
      }
      if (Eo(g) || lo(g)) return C !== null ? null : d(h, p, g, S, null);
      Ni(h, g);
    }
    return null;
  }
  function m(h, p, g, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (h = h.get(g) || null), l(p, h, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case gi:
          return (h = h.get(S.key === null ? g : S.key) || null), a(p, h, S, C);
        case pr:
          return (h = h.get(S.key === null ? g : S.key) || null), u(p, h, S, C);
        case un:
          var P = S._init;
          return m(h, p, g, P(S._payload), C);
      }
      if (Eo(S) || lo(S)) return (h = h.get(g) || null), d(p, h, S, C, null);
      Ni(p, S);
    }
    return null;
  }
  function y(h, p, g, S) {
    for (
      var C = null, P = null, k = p, N = (p = 0), I = null;
      k !== null && N < g.length;
      N++
    ) {
      k.index > N ? ((I = k), (k = null)) : (I = k.sibling);
      var _ = c(h, k, g[N], S);
      if (_ === null) {
        k === null && (k = I);
        break;
      }
      e && k && _.alternate === null && t(h, k),
        (p = i(_, p, N)),
        P === null ? (C = _) : (P.sibling = _),
        (P = _),
        (k = I);
    }
    if (N === g.length) return n(h, k), ue && Fn(h, N), C;
    if (k === null) {
      for (; N < g.length; N++)
        (k = f(h, g[N], S)),
          k !== null &&
            ((p = i(k, p, N)), P === null ? (C = k) : (P.sibling = k), (P = k));
      return ue && Fn(h, N), C;
    }
    for (k = r(h, k); N < g.length; N++)
      (I = m(k, h, N, g[N], S)),
        I !== null &&
          (e && I.alternate !== null && k.delete(I.key === null ? N : I.key),
          (p = i(I, p, N)),
          P === null ? (C = I) : (P.sibling = I),
          (P = I));
    return (
      e &&
        k.forEach(function ($) {
          return t(h, $);
        }),
      ue && Fn(h, N),
      C
    );
  }
  function v(h, p, g, S) {
    var C = lo(g);
    if (typeof C != "function") throw Error(R(150));
    if (((g = C.call(g)), g == null)) throw Error(R(151));
    for (
      var P = (C = null), k = p, N = (p = 0), I = null, _ = g.next();
      k !== null && !_.done;
      N++, _ = g.next()
    ) {
      k.index > N ? ((I = k), (k = null)) : (I = k.sibling);
      var $ = c(h, k, _.value, S);
      if ($ === null) {
        k === null && (k = I);
        break;
      }
      e && k && $.alternate === null && t(h, k),
        (p = i($, p, N)),
        P === null ? (C = $) : (P.sibling = $),
        (P = $),
        (k = I);
    }
    if (_.done) return n(h, k), ue && Fn(h, N), C;
    if (k === null) {
      for (; !_.done; N++, _ = g.next())
        (_ = f(h, _.value, S)),
          _ !== null &&
            ((p = i(_, p, N)), P === null ? (C = _) : (P.sibling = _), (P = _));
      return ue && Fn(h, N), C;
    }
    for (k = r(h, k); !_.done; N++, _ = g.next())
      (_ = m(k, h, N, _.value, S)),
        _ !== null &&
          (e && _.alternate !== null && k.delete(_.key === null ? N : _.key),
          (p = i(_, p, N)),
          P === null ? (C = _) : (P.sibling = _),
          (P = _));
    return (
      e &&
        k.forEach(function (D) {
          return t(h, D);
        }),
      ue && Fn(h, N),
      C
    );
  }
  function w(h, p, g, S) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === hr &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case gi:
          e: {
            for (var C = g.key, P = p; P !== null; ) {
              if (P.key === C) {
                if (((C = g.type), C === hr)) {
                  if (P.tag === 7) {
                    n(h, P.sibling),
                      (p = o(P, g.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === un &&
                    sd(C) === P.type)
                ) {
                  n(h, P.sibling),
                    (p = o(P, g.props)),
                    (p.ref = po(h, P, g)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, P);
                break;
              } else t(h, P);
              P = P.sibling;
            }
            g.type === hr
              ? ((p = Kn(g.props.children, h.mode, S, g.key)),
                (p.return = h),
                (h = p))
              : ((S = Ki(g.type, g.key, g.props, null, h.mode, S)),
                (S.ref = po(h, p, g)),
                (S.return = h),
                (h = S));
          }
          return s(h);
        case pr:
          e: {
            for (P = g.key; p !== null; ) {
              if (p.key === P)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  n(h, p.sibling),
                    (p = o(p, g.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = Fl(g, h.mode, S)), (p.return = h), (h = p);
          }
          return s(h);
        case un:
          return (P = g._init), w(h, p, P(g._payload), S);
      }
      if (Eo(g)) return y(h, p, g, S);
      if (lo(g)) return v(h, p, g, S);
      Ni(h, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = o(p, g)), (p.return = h), (h = p))
          : (n(h, p), (p = zl(g, h.mode, S)), (p.return = h), (h = p)),
        s(h))
      : n(h, p);
  }
  return w;
}
var Yr = Fp(!0),
  $p = Fp(!1),
  hs = In(null),
  ms = null,
  Sr = null,
  Ru = null;
function Ou() {
  Ru = Sr = ms = null;
}
function Au(e) {
  var t = hs.current;
  se(hs), (e._currentValue = t);
}
function Ca(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Rr(e, t) {
  (ms = e),
    (Ru = Sr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ue = !0), (e.firstContext = null));
}
function ut(e) {
  var t = e._currentValue;
  if (Ru !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Sr === null)) {
      if (ms === null) throw Error(R(308));
      (Sr = e), (ms.dependencies = { lanes: 0, firstContext: e });
    } else Sr = Sr.next = e;
  return t;
}
var Bn = null;
function _u(e) {
  Bn === null ? (Bn = [e]) : Bn.push(e);
}
function Up(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), _u(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Gt(e, r)
  );
}
function Gt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var cn = !1;
function Mu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Bp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Wt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Pn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Gt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), _u(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Gt(e, n)
  );
}
function Hi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), yu(e, n);
  }
}
function ld(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function vs(e, t, n, r) {
  var o = e.updateQueue;
  cn = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (i = u) : (s.next = u), (s = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== s &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var f = o.baseState;
    (s = 0), (d = u = a = null), (l = i);
    do {
      var c = l.lane,
        m = l.eventTime;
      if ((r & c) === c) {
        d !== null &&
          (d = d.next =
            {
              eventTime: m,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            v = l;
          switch (((c = t), (m = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                f = y.call(m, f, c);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (c = typeof y == "function" ? y.call(m, f, c) : y),
                c == null)
              )
                break e;
              f = pe({}, f, c);
              break e;
            case 2:
              cn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (c = o.effects),
          c === null ? (o.effects = [l]) : c.push(l));
      } else
        (m = {
          eventTime: m,
          lane: c,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = m), (a = f)) : (d = d.next = m),
          (s |= c);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (c = l),
          (l = c.next),
          (c.next = null),
          (o.lastBaseUpdate = c),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (a = f),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (er |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function ad(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(R(191, o));
        o.call(r);
      }
    }
}
var ai = {},
  jt = In(ai),
  Wo = In(ai),
  Qo = In(ai);
function Hn(e) {
  if (e === ai) throw Error(R(174));
  return e;
}
function ju(e, t) {
  switch ((ne(Qo, t), ne(Wo, e), ne(jt, ai), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ra(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ra(t, e));
  }
  se(jt), ne(jt, t);
}
function Gr() {
  se(jt), se(Wo), se(Qo);
}
function Hp(e) {
  Hn(Qo.current);
  var t = Hn(jt.current),
    n = ra(t, e.type);
  t !== n && (ne(Wo, e), ne(jt, n));
}
function Lu(e) {
  Wo.current === e && (se(jt), se(Wo));
}
var de = In(0);
function gs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var _l = [];
function Iu() {
  for (var e = 0; e < _l.length; e++)
    _l[e]._workInProgressVersionPrimary = null;
  _l.length = 0;
}
var Vi = Zt.ReactCurrentDispatcher,
  Ml = Zt.ReactCurrentBatchConfig,
  Jn = 0,
  fe = null,
  ye = null,
  Ee = null,
  ys = !1,
  Ro = !1,
  Yo = 0,
  by = 0;
function Ne() {
  throw Error(R(321));
}
function Du(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Et(e[n], t[n])) return !1;
  return !0;
}
function zu(e, t, n, r, o, i) {
  if (
    ((Jn = i),
    (fe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Vi.current = e === null || e.memoizedState === null ? Ay : _y),
    (e = n(r, o)),
    Ro)
  ) {
    i = 0;
    do {
      if (((Ro = !1), (Yo = 0), 25 <= i)) throw Error(R(301));
      (i += 1),
        (Ee = ye = null),
        (t.updateQueue = null),
        (Vi.current = My),
        (e = n(r, o));
    } while (Ro);
  }
  if (
    ((Vi.current = ws),
    (t = ye !== null && ye.next !== null),
    (Jn = 0),
    (Ee = ye = fe = null),
    (ys = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function Fu() {
  var e = Yo !== 0;
  return (Yo = 0), e;
}
function Nt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ee === null ? (fe.memoizedState = Ee = e) : (Ee = Ee.next = e), Ee;
}
function ct() {
  if (ye === null) {
    var e = fe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ye.next;
  var t = Ee === null ? fe.memoizedState : Ee.next;
  if (t !== null) (Ee = t), (ye = e);
  else {
    if (e === null) throw Error(R(310));
    (ye = e),
      (e = {
        memoizedState: ye.memoizedState,
        baseState: ye.baseState,
        baseQueue: ye.baseQueue,
        queue: ye.queue,
        next: null,
      }),
      Ee === null ? (fe.memoizedState = Ee = e) : (Ee = Ee.next = e);
  }
  return Ee;
}
function Go(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function jl(e) {
  var t = ct(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = ye,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = i;
    do {
      var d = u.lane;
      if ((Jn & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (fe.lanes |= d),
          (er |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (s = r) : (a.next = l),
      Et(r, t.memoizedState) || (Ue = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (fe.lanes |= i), (er |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ll(e) {
  var t = ct(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    Et(i, t.memoizedState) || (Ue = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Vp() {}
function Wp(e, t) {
  var n = fe,
    r = ct(),
    o = t(),
    i = !Et(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ue = !0)),
    (r = r.queue),
    $u(Gp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ee !== null && Ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ko(9, Yp.bind(null, n, r, o, t), void 0, null),
      Se === null)
    )
      throw Error(R(349));
    Jn & 30 || Qp(n, t, o);
  }
  return o;
}
function Qp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Yp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Kp(t) && qp(e);
}
function Gp(e, t, n) {
  return n(function () {
    Kp(t) && qp(e);
  });
}
function Kp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Et(e, n);
  } catch {
    return !0;
  }
}
function qp(e) {
  var t = Gt(e, 1);
  t !== null && xt(t, e, 1, -1);
}
function ud(e) {
  var t = Nt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Go,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Oy.bind(null, fe, e)),
    [t.memoizedState, e]
  );
}
function Ko(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = fe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (fe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Xp() {
  return ct().memoizedState;
}
function Wi(e, t, n, r) {
  var o = Nt();
  (fe.flags |= e),
    (o.memoizedState = Ko(1 | t, n, void 0, r === void 0 ? null : r));
}
function Us(e, t, n, r) {
  var o = ct();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ye !== null) {
    var s = ye.memoizedState;
    if (((i = s.destroy), r !== null && Du(r, s.deps))) {
      o.memoizedState = Ko(t, n, i, r);
      return;
    }
  }
  (fe.flags |= e), (o.memoizedState = Ko(1 | t, n, i, r));
}
function cd(e, t) {
  return Wi(8390656, 8, e, t);
}
function $u(e, t) {
  return Us(2048, 8, e, t);
}
function Zp(e, t) {
  return Us(4, 2, e, t);
}
function Jp(e, t) {
  return Us(4, 4, e, t);
}
function eh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function th(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Us(4, 4, eh.bind(null, t, e), n)
  );
}
function Uu() {}
function nh(e, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Du(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function rh(e, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Du(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function oh(e, t, n) {
  return Jn & 21
    ? (Et(n, t) || ((n = up()), (fe.lanes |= n), (er |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ue = !0)), (e.memoizedState = n));
}
function Ny(e, t) {
  var n = ee;
  (ee = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ml.transition;
  Ml.transition = {};
  try {
    e(!1), t();
  } finally {
    (ee = n), (Ml.transition = r);
  }
}
function ih() {
  return ct().memoizedState;
}
function Ry(e, t, n) {
  var r = bn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    sh(e))
  )
    lh(t, n);
  else if (((n = Up(e, t, n, r)), n !== null)) {
    var o = Ie();
    xt(n, e, r, o), ah(n, t, r);
  }
}
function Oy(e, t, n) {
  var r = bn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (sh(e)) lh(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Et(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), _u(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Up(e, t, o, r)),
      n !== null && ((o = Ie()), xt(n, e, r, o), ah(n, t, r));
  }
}
function sh(e) {
  var t = e.alternate;
  return e === fe || (t !== null && t === fe);
}
function lh(e, t) {
  Ro = ys = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ah(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), yu(e, n);
  }
}
var ws = {
    readContext: ut,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  Ay = {
    readContext: ut,
    useCallback: function (e, t) {
      return (Nt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ut,
    useEffect: cd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Wi(4194308, 4, eh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Wi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Wi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Nt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Nt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ry.bind(null, fe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Nt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ud,
    useDebugValue: Uu,
    useDeferredValue: function (e) {
      return (Nt().memoizedState = e);
    },
    useTransition: function () {
      var e = ud(!1),
        t = e[0];
      return (e = Ny.bind(null, e[1])), (Nt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = fe,
        o = Nt();
      if (ue) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), Se === null)) throw Error(R(349));
        Jn & 30 || Qp(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        cd(Gp.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ko(9, Yp.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Nt(),
        t = Se.identifierPrefix;
      if (ue) {
        var n = Vt,
          r = Ht;
        (n = (r & ~(1 << (32 - wt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Yo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = by++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  _y = {
    readContext: ut,
    useCallback: nh,
    useContext: ut,
    useEffect: $u,
    useImperativeHandle: th,
    useInsertionEffect: Zp,
    useLayoutEffect: Jp,
    useMemo: rh,
    useReducer: jl,
    useRef: Xp,
    useState: function () {
      return jl(Go);
    },
    useDebugValue: Uu,
    useDeferredValue: function (e) {
      var t = ct();
      return oh(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = jl(Go)[0],
        t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Vp,
    useSyncExternalStore: Wp,
    useId: ih,
    unstable_isNewReconciler: !1,
  },
  My = {
    readContext: ut,
    useCallback: nh,
    useContext: ut,
    useEffect: $u,
    useImperativeHandle: th,
    useInsertionEffect: Zp,
    useLayoutEffect: Jp,
    useMemo: rh,
    useReducer: Ll,
    useRef: Xp,
    useState: function () {
      return Ll(Go);
    },
    useDebugValue: Uu,
    useDeferredValue: function (e) {
      var t = ct();
      return ye === null ? (t.memoizedState = e) : oh(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = Ll(Go)[0],
        t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Vp,
    useSyncExternalStore: Wp,
    useId: ih,
    unstable_isNewReconciler: !1,
  };
function pt(e, t) {
  if (e && e.defaultProps) {
    (t = pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ta(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Bs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ir(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ie(),
      o = bn(e),
      i = Wt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Pn(e, i, o)),
      t !== null && (xt(t, e, o, r), Hi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ie(),
      o = bn(e),
      i = Wt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Pn(e, i, o)),
      t !== null && (xt(t, e, o, r), Hi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ie(),
      r = bn(e),
      o = Wt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Pn(e, o, r)),
      t !== null && (xt(t, e, r, n), Hi(t, e, r));
  },
};
function dd(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Uo(n, r) || !Uo(o, i)
      : !0
  );
}
function uh(e, t, n) {
  var r = !1,
    o = On,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ut(i))
      : ((o = He(t) ? Xn : _e.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Wr(e, o) : On)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Bs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function fd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Bs.enqueueReplaceState(t, t.state, null);
}
function Pa(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Mu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = ut(i))
    : ((i = He(t) ? Xn : _e.current), (o.context = Wr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ta(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Bs.enqueueReplaceState(o, o.state, null),
      vs(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Kr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += lg(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Il(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ka(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var jy = typeof WeakMap == "function" ? WeakMap : Map;
function ch(e, t, n) {
  (n = Wt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Es || ((Es = !0), (Ia = r)), ka(e, t);
    }),
    n
  );
}
function dh(e, t, n) {
  (n = Wt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ka(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ka(e, t),
          typeof r != "function" &&
            (kn === null ? (kn = new Set([this])) : kn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function pd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new jy();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Gy.bind(null, e, t, n)), t.then(e, e));
}
function hd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function md(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Wt(-1, 1)), (t.tag = 2), Pn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ly = Zt.ReactCurrentOwner,
  Ue = !1;
function je(e, t, n, r) {
  t.child = e === null ? $p(t, null, n, r) : Yr(t, e.child, n, r);
}
function vd(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Rr(t, o),
    (r = zu(e, t, n, r, i, o)),
    (n = Fu()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Kt(e, t, o))
      : (ue && n && ku(t), (t.flags |= 1), je(e, t, r, o), t.child)
  );
}
function gd(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ku(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), fh(e, t, i, r, o))
      : ((e = Ki(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Uo), n(s, r) && e.ref === t.ref)
    )
      return Kt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Nn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function fh(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Uo(i, r) && e.ref === t.ref)
      if (((Ue = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ue = !0);
      else return (t.lanes = e.lanes), Kt(e, t, o);
  }
  return ba(e, t, n, r, o);
}
function ph(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ne(Tr, qe),
        (qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ne(Tr, qe),
          (qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ne(Tr, qe),
        (qe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ne(Tr, qe),
      (qe |= r);
  return je(e, t, o, n), t.child;
}
function hh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ba(e, t, n, r, o) {
  var i = He(n) ? Xn : _e.current;
  return (
    (i = Wr(t, i)),
    Rr(t, o),
    (n = zu(e, t, n, r, i, o)),
    (r = Fu()),
    e !== null && !Ue
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Kt(e, t, o))
      : (ue && r && ku(t), (t.flags |= 1), je(e, t, n, o), t.child)
  );
}
function yd(e, t, n, r, o) {
  if (He(n)) {
    var i = !0;
    ds(t);
  } else i = !1;
  if ((Rr(t, o), t.stateNode === null))
    Qi(e, t), uh(t, n, r), Pa(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ut(u))
      : ((u = He(n) ? Xn : _e.current), (u = Wr(t, u)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && fd(t, s, r, u)),
      (cn = !1);
    var c = t.memoizedState;
    (s.state = c),
      vs(t, r, s, o),
      (a = t.memoizedState),
      l !== r || c !== a || Be.current || cn
        ? (typeof d == "function" && (Ta(t, n, d, r), (a = t.memoizedState)),
          (l = cn || dd(t, n, l, r, c, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Bp(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : pt(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (c = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = ut(a))
        : ((a = He(n) ? Xn : _e.current), (a = Wr(t, a)));
    var m = n.getDerivedStateFromProps;
    (d =
      typeof m == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || c !== a) && fd(t, s, r, a)),
      (cn = !1),
      (c = t.memoizedState),
      (s.state = c),
      vs(t, r, s, o);
    var y = t.memoizedState;
    l !== f || c !== y || Be.current || cn
      ? (typeof m == "function" && (Ta(t, n, m, r), (y = t.memoizedState)),
        (u = cn || dd(t, n, u, r, c, y, a) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Na(e, t, n, r, i, o);
}
function Na(e, t, n, r, o, i) {
  hh(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && rd(t, n, !1), Kt(e, t, i);
  (r = t.stateNode), (Ly.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Yr(t, e.child, null, i)), (t.child = Yr(t, null, l, i)))
      : je(e, t, l, i),
    (t.memoizedState = r.state),
    o && rd(t, n, !0),
    t.child
  );
}
function mh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? nd(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && nd(e, t.context, !1),
    ju(e, t.containerInfo);
}
function wd(e, t, n, r, o) {
  return Qr(), Nu(o), (t.flags |= 256), je(e, t, n, r), t.child;
}
var Ra = { dehydrated: null, treeContext: null, retryLane: 0 };
function Oa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function vh(e, t, n) {
  var r = t.pendingProps,
    o = de.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ne(de, o & 1),
    e === null)
  )
    return (
      Sa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Ws(s, r, 0, null)),
              (e = Kn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Oa(n)),
              (t.memoizedState = Ra),
              e)
            : Bu(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return Iy(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Nn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = Nn(l, i)) : ((i = Kn(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Oa(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ra),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Nn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Bu(e, t) {
  return (
    (t = Ws({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ri(e, t, n, r) {
  return (
    r !== null && Nu(r),
    Yr(t, e.child, null, n),
    (e = Bu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Iy(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Il(Error(R(422)))), Ri(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Ws({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Kn(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Yr(t, e.child, null, s),
        (t.child.memoizedState = Oa(s)),
        (t.memoizedState = Ra),
        i);
  if (!(t.mode & 1)) return Ri(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(R(419))), (r = Il(i, r, void 0)), Ri(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Ue || l)) {
    if (((r = Se), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Gt(e, o), xt(r, e, o, -1));
    }
    return Gu(), (r = Il(Error(R(421)))), Ri(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ky.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ze = Tn(o.nextSibling)),
      (Je = t),
      (ue = !0),
      (gt = null),
      e !== null &&
        ((it[st++] = Ht),
        (it[st++] = Vt),
        (it[st++] = Zn),
        (Ht = e.id),
        (Vt = e.overflow),
        (Zn = t)),
      (t = Bu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function xd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ca(e.return, t, n);
}
function Dl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function gh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((je(e, t, r.children, n), (r = de.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xd(e, n, t);
        else if (e.tag === 19) xd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ne(de, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && gs(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Dl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && gs(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Dl(t, !0, n, null, i);
        break;
      case "together":
        Dl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Qi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Kt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (er |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Nn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Nn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Dy(e, t, n) {
  switch (t.tag) {
    case 3:
      mh(t), Qr();
      break;
    case 5:
      Hp(t);
      break;
    case 1:
      He(t.type) && ds(t);
      break;
    case 4:
      ju(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ne(hs, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ne(de, de.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? vh(e, t, n)
          : (ne(de, de.current & 1),
            (e = Kt(e, t, n)),
            e !== null ? e.sibling : null);
      ne(de, de.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return gh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ne(de, de.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ph(e, t, n);
  }
  return Kt(e, t, n);
}
var yh, Aa, wh, xh;
yh = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Aa = function () {};
wh = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Hn(jt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Jl(e, o)), (r = Jl(e, r)), (i = []);
        break;
      case "select":
        (o = pe({}, o, { value: void 0 })),
          (r = pe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = na(e, o)), (r = na(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = us);
    }
    oa(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (jo.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (jo.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && ie("scroll", e),
                  i || l === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
xh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ho(e, t) {
  if (!ue)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function zy(e, t, n) {
  var r = t.pendingProps;
  switch ((bu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Re(t), null;
    case 1:
      return He(t.type) && cs(), Re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Gr(),
        se(Be),
        se(_e),
        Iu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (bi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), gt !== null && (Fa(gt), (gt = null)))),
        Aa(e, t),
        Re(t),
        null
      );
    case 5:
      Lu(t);
      var o = Hn(Qo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        wh(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Re(t), null;
        }
        if (((e = Hn(jt.current)), bi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[_t] = t), (r[Vo] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ie("cancel", r), ie("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ie("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Co.length; o++) ie(Co[o], r);
              break;
            case "source":
              ie("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ie("error", r), ie("load", r);
              break;
            case "details":
              ie("toggle", r);
              break;
            case "input":
              Rc(r, i), ie("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ie("invalid", r);
              break;
            case "textarea":
              Ac(r, i), ie("invalid", r);
          }
          oa(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      ki(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      ki(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : jo.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  ie("scroll", r);
            }
          switch (n) {
            case "input":
              yi(r), Oc(r, i, !0);
              break;
            case "textarea":
              yi(r), _c(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = us);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Gf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[_t] = t),
            (e[Vo] = r),
            yh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = ia(n, r)), n)) {
              case "dialog":
                ie("cancel", e), ie("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ie("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Co.length; o++) ie(Co[o], e);
                o = r;
                break;
              case "source":
                ie("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ie("error", e), ie("load", e), (o = r);
                break;
              case "details":
                ie("toggle", e), (o = r);
                break;
              case "input":
                Rc(e, r), (o = Jl(e, r)), ie("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = pe({}, r, { value: void 0 })),
                  ie("invalid", e);
                break;
              case "textarea":
                Ac(e, r), (o = na(e, r)), ie("invalid", e);
                break;
              default:
                o = r;
            }
            oa(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? Xf(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Kf(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Lo(e, a)
                    : typeof a == "number" && Lo(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (jo.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && ie("scroll", e)
                      : a != null && fu(e, i, a, s));
              }
            switch (n) {
              case "input":
                yi(e), Oc(e, r, !1);
                break;
              case "textarea":
                yi(e), _c(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Rn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Pr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Pr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = us);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Re(t), null;
    case 6:
      if (e && t.stateNode != null) xh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = Hn(Qo.current)), Hn(jt.current), bi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[_t] = t),
            (i = r.nodeValue !== n) && ((e = Je), e !== null))
          )
            switch (e.tag) {
              case 3:
                ki(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ki(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[_t] = t),
            (t.stateNode = r);
      }
      return Re(t), null;
    case 13:
      if (
        (se(de),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ue && Ze !== null && t.mode & 1 && !(t.flags & 128))
          zp(), Qr(), (t.flags |= 98560), (i = !1);
        else if (((i = bi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(R(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(R(317));
            i[_t] = t;
          } else
            Qr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Re(t), (i = !1);
        } else gt !== null && (Fa(gt), (gt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || de.current & 1 ? xe === 0 && (xe = 3) : Gu())),
          t.updateQueue !== null && (t.flags |= 4),
          Re(t),
          null);
    case 4:
      return (
        Gr(), Aa(e, t), e === null && Bo(t.stateNode.containerInfo), Re(t), null
      );
    case 10:
      return Au(t.type._context), Re(t), null;
    case 17:
      return He(t.type) && cs(), Re(t), null;
    case 19:
      if ((se(de), (i = t.memoizedState), i === null)) return Re(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) ho(i, !1);
        else {
          if (xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = gs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ho(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ne(de, (de.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ve() > qr &&
            ((t.flags |= 128), (r = !0), ho(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = gs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ho(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ue)
            )
              return Re(t), null;
          } else
            2 * ve() - i.renderingStartTime > qr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ho(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ve()),
          (t.sibling = null),
          (n = de.current),
          ne(de, r ? (n & 1) | 2 : n & 1),
          t)
        : (Re(t), null);
    case 22:
    case 23:
      return (
        Yu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? qe & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function Fy(e, t) {
  switch ((bu(t), t.tag)) {
    case 1:
      return (
        He(t.type) && cs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Gr(),
        se(Be),
        se(_e),
        Iu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Lu(t), null;
    case 13:
      if (
        (se(de), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(R(340));
        Qr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return se(de), null;
    case 4:
      return Gr(), null;
    case 10:
      return Au(t.type._context), null;
    case 22:
    case 23:
      return Yu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Oi = !1,
  Ae = !1,
  $y = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function Cr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        me(e, t, r);
      }
    else n.current = null;
}
function _a(e, t, n) {
  try {
    n();
  } catch (r) {
    me(e, t, r);
  }
}
var Ed = !1;
function Uy(e, t) {
  if (((ma = ss), (e = Pp()), Pu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            d = 0,
            f = e,
            c = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (o !== 0 && f.nodeType !== 3) || (l = s + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (m = f.firstChild) !== null;

            )
              (c = f), (f = m);
            for (;;) {
              if (f === e) break t;
              if (
                (c === n && ++u === o && (l = s),
                c === i && ++d === r && (a = s),
                (m = f.nextSibling) !== null)
              )
                break;
              (f = c), (c = f.parentNode);
            }
            f = m;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (va = { focusedElem: e, selectionRange: n }, ss = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    w = y.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : pt(t.type, v),
                      w
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (S) {
          me(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (y = Ed), (Ed = !1), y;
}
function Oo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && _a(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Hs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ma(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Eh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Eh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[_t], delete t[Vo], delete t[wa], delete t[Cy], delete t[Ty])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Sh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Sd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Sh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ja(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = us));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ja(e, t, n), e = e.sibling; e !== null; ) ja(e, t, n), (e = e.sibling);
}
function La(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (La(e, t, n), e = e.sibling; e !== null; ) La(e, t, n), (e = e.sibling);
}
var Te = null,
  vt = !1;
function on(e, t, n) {
  for (n = n.child; n !== null; ) Ch(e, t, n), (n = n.sibling);
}
function Ch(e, t, n) {
  if (Mt && typeof Mt.onCommitFiberUnmount == "function")
    try {
      Mt.onCommitFiberUnmount(Ls, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ae || Cr(n, t);
    case 6:
      var r = Te,
        o = vt;
      (Te = null),
        on(e, t, n),
        (Te = r),
        (vt = o),
        Te !== null &&
          (vt
            ? ((e = Te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Te.removeChild(n.stateNode));
      break;
    case 18:
      Te !== null &&
        (vt
          ? ((e = Te),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ol(e.parentNode, n)
              : e.nodeType === 1 && Ol(e, n),
            Fo(e))
          : Ol(Te, n.stateNode));
      break;
    case 4:
      (r = Te),
        (o = vt),
        (Te = n.stateNode.containerInfo),
        (vt = !0),
        on(e, t, n),
        (Te = r),
        (vt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ae &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && _a(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      on(e, t, n);
      break;
    case 1:
      if (
        !Ae &&
        (Cr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          me(n, t, l);
        }
      on(e, t, n);
      break;
    case 21:
      on(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ae = (r = Ae) || n.memoizedState !== null), on(e, t, n), (Ae = r))
        : on(e, t, n);
      break;
    default:
      on(e, t, n);
  }
}
function Cd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new $y()),
      t.forEach(function (r) {
        var o = qy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function ft(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Te = l.stateNode), (vt = !1);
              break e;
            case 3:
              (Te = l.stateNode.containerInfo), (vt = !0);
              break e;
            case 4:
              (Te = l.stateNode.containerInfo), (vt = !0);
              break e;
          }
          l = l.return;
        }
        if (Te === null) throw Error(R(160));
        Ch(i, s, o), (Te = null), (vt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        me(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Th(t, e), (t = t.sibling);
}
function Th(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ft(t, e), bt(e), r & 4)) {
        try {
          Oo(3, e, e.return), Hs(3, e);
        } catch (v) {
          me(e, e.return, v);
        }
        try {
          Oo(5, e, e.return);
        } catch (v) {
          me(e, e.return, v);
        }
      }
      break;
    case 1:
      ft(t, e), bt(e), r & 512 && n !== null && Cr(n, n.return);
      break;
    case 5:
      if (
        (ft(t, e),
        bt(e),
        r & 512 && n !== null && Cr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Lo(o, "");
        } catch (v) {
          me(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Qf(o, i),
              ia(l, s);
            var u = ia(l, i);
            for (s = 0; s < a.length; s += 2) {
              var d = a[s],
                f = a[s + 1];
              d === "style"
                ? Xf(o, f)
                : d === "dangerouslySetInnerHTML"
                ? Kf(o, f)
                : d === "children"
                ? Lo(o, f)
                : fu(o, d, f, u);
            }
            switch (l) {
              case "input":
                ea(o, i);
                break;
              case "textarea":
                Yf(o, i);
                break;
              case "select":
                var c = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? Pr(o, !!i.multiple, m, !1)
                  : c !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Pr(o, !!i.multiple, i.defaultValue, !0)
                      : Pr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Vo] = i;
          } catch (v) {
            me(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((ft(t, e), bt(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          me(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (ft(t, e), bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Fo(t.containerInfo);
        } catch (v) {
          me(e, e.return, v);
        }
      break;
    case 4:
      ft(t, e), bt(e);
      break;
    case 13:
      ft(t, e),
        bt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Wu = ve())),
        r & 4 && Cd(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ae = (u = Ae) || d), ft(t, e), (Ae = u)) : ft(t, e),
        bt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (j = e, d = e.child; d !== null; ) {
            for (f = j = d; j !== null; ) {
              switch (((c = j), (m = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Oo(4, c, c.return);
                  break;
                case 1:
                  Cr(c, c.return);
                  var y = c.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = c), (n = c.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      me(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Cr(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    Pd(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = c), (j = m)) : Pd(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = qf("display", s)));
              } catch (v) {
                me(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                me(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      ft(t, e), bt(e), r & 4 && Cd(e);
      break;
    case 21:
      break;
    default:
      ft(t, e), bt(e);
  }
}
function bt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Sh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Lo(o, ""), (r.flags &= -33));
          var i = Sd(e);
          La(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Sd(e);
          ja(e, l, s);
          break;
        default:
          throw Error(R(161));
      }
    } catch (a) {
      me(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function By(e, t, n) {
  (j = e), Ph(e);
}
function Ph(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var o = j,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Oi;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || Ae;
        l = Oi;
        var u = Ae;
        if (((Oi = s), (Ae = a) && !u))
          for (j = o; j !== null; )
            (s = j),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? kd(o)
                : a !== null
                ? ((a.return = s), (j = a))
                : kd(o);
        for (; i !== null; ) (j = i), Ph(i), (i = i.sibling);
        (j = o), (Oi = l), (Ae = u);
      }
      Td(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (j = i)) : Td(e);
  }
}
function Td(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ae || Hs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ae)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : pt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && ad(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ad(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Fo(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Ae || (t.flags & 512 && Ma(t));
      } catch (c) {
        me(t, t.return, c);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Pd(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function kd(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Hs(4, t);
          } catch (a) {
            me(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              me(t, o, a);
            }
          }
          var i = t.return;
          try {
            Ma(t);
          } catch (a) {
            me(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ma(t);
          } catch (a) {
            me(t, s, a);
          }
      }
    } catch (a) {
      me(t, t.return, a);
    }
    if (t === e) {
      j = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (j = l);
      break;
    }
    j = t.return;
  }
}
var Hy = Math.ceil,
  xs = Zt.ReactCurrentDispatcher,
  Hu = Zt.ReactCurrentOwner,
  at = Zt.ReactCurrentBatchConfig,
  X = 0,
  Se = null,
  ge = null,
  Pe = 0,
  qe = 0,
  Tr = In(0),
  xe = 0,
  qo = null,
  er = 0,
  Vs = 0,
  Vu = 0,
  Ao = null,
  $e = null,
  Wu = 0,
  qr = 1 / 0,
  Ut = null,
  Es = !1,
  Ia = null,
  kn = null,
  Ai = !1,
  wn = null,
  Ss = 0,
  _o = 0,
  Da = null,
  Yi = -1,
  Gi = 0;
function Ie() {
  return X & 6 ? ve() : Yi !== -1 ? Yi : (Yi = ve());
}
function bn(e) {
  return e.mode & 1
    ? X & 2 && Pe !== 0
      ? Pe & -Pe
      : ky.transition !== null
      ? (Gi === 0 && (Gi = up()), Gi)
      : ((e = ee),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : vp(e.type))),
        e)
    : 1;
}
function xt(e, t, n, r) {
  if (50 < _o) throw ((_o = 0), (Da = null), Error(R(185)));
  ii(e, n, r),
    (!(X & 2) || e !== Se) &&
      (e === Se && (!(X & 2) && (Vs |= n), xe === 4 && fn(e, Pe)),
      Ve(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((qr = ve() + 500), $s && Dn()));
}
function Ve(e, t) {
  var n = e.callbackNode;
  kg(e, t);
  var r = is(e, e === Se ? Pe : 0);
  if (r === 0)
    n !== null && Lc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Lc(n), t === 1))
      e.tag === 0 ? Py(bd.bind(null, e)) : Lp(bd.bind(null, e)),
        Ey(function () {
          !(X & 6) && Dn();
        }),
        (n = null);
    else {
      switch (cp(r)) {
        case 1:
          n = gu;
          break;
        case 4:
          n = lp;
          break;
        case 16:
          n = os;
          break;
        case 536870912:
          n = ap;
          break;
        default:
          n = os;
      }
      n = Mh(n, kh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function kh(e, t) {
  if (((Yi = -1), (Gi = 0), X & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (Or() && e.callbackNode !== n) return null;
  var r = is(e, e === Se ? Pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cs(e, r);
  else {
    t = r;
    var o = X;
    X |= 2;
    var i = Nh();
    (Se !== e || Pe !== t) && ((Ut = null), (qr = ve() + 500), Gn(e, t));
    do
      try {
        Qy();
        break;
      } catch (l) {
        bh(e, l);
      }
    while (!0);
    Ou(),
      (xs.current = i),
      (X = o),
      ge !== null ? (t = 0) : ((Se = null), (Pe = 0), (t = xe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ca(e)), o !== 0 && ((r = o), (t = za(e, o)))), t === 1)
    )
      throw ((n = qo), Gn(e, 0), fn(e, r), Ve(e, ve()), n);
    if (t === 6) fn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Vy(o) &&
          ((t = Cs(e, r)),
          t === 2 && ((i = ca(e)), i !== 0 && ((r = i), (t = za(e, i)))),
          t === 1))
      )
        throw ((n = qo), Gn(e, 0), fn(e, r), Ve(e, ve()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          $n(e, $e, Ut);
          break;
        case 3:
          if (
            (fn(e, r), (r & 130023424) === r && ((t = Wu + 500 - ve()), 10 < t))
          ) {
            if (is(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ie(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ya($n.bind(null, e, $e, Ut), t);
            break;
          }
          $n(e, $e, Ut);
          break;
        case 4:
          if ((fn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - wt(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ve() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Hy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ya($n.bind(null, e, $e, Ut), r);
            break;
          }
          $n(e, $e, Ut);
          break;
        case 5:
          $n(e, $e, Ut);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Ve(e, ve()), e.callbackNode === n ? kh.bind(null, e) : null;
}
function za(e, t) {
  var n = Ao;
  return (
    e.current.memoizedState.isDehydrated && (Gn(e, t).flags |= 256),
    (e = Cs(e, t)),
    e !== 2 && ((t = $e), ($e = n), t !== null && Fa(t)),
    e
  );
}
function Fa(e) {
  $e === null ? ($e = e) : $e.push.apply($e, e);
}
function Vy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Et(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function fn(e, t) {
  for (
    t &= ~Vu,
      t &= ~Vs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - wt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function bd(e) {
  if (X & 6) throw Error(R(327));
  Or();
  var t = is(e, 0);
  if (!(t & 1)) return Ve(e, ve()), null;
  var n = Cs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ca(e);
    r !== 0 && ((t = r), (n = za(e, r)));
  }
  if (n === 1) throw ((n = qo), Gn(e, 0), fn(e, t), Ve(e, ve()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    $n(e, $e, Ut),
    Ve(e, ve()),
    null
  );
}
function Qu(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((qr = ve() + 500), $s && Dn());
  }
}
function tr(e) {
  wn !== null && wn.tag === 0 && !(X & 6) && Or();
  var t = X;
  X |= 1;
  var n = at.transition,
    r = ee;
  try {
    if (((at.transition = null), (ee = 1), e)) return e();
  } finally {
    (ee = r), (at.transition = n), (X = t), !(X & 6) && Dn();
  }
}
function Yu() {
  (qe = Tr.current), se(Tr);
}
function Gn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), xy(n)), ge !== null))
    for (n = ge.return; n !== null; ) {
      var r = n;
      switch ((bu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && cs();
          break;
        case 3:
          Gr(), se(Be), se(_e), Iu();
          break;
        case 5:
          Lu(r);
          break;
        case 4:
          Gr();
          break;
        case 13:
          se(de);
          break;
        case 19:
          se(de);
          break;
        case 10:
          Au(r.type._context);
          break;
        case 22:
        case 23:
          Yu();
      }
      n = n.return;
    }
  if (
    ((Se = e),
    (ge = e = Nn(e.current, null)),
    (Pe = qe = t),
    (xe = 0),
    (qo = null),
    (Vu = Vs = er = 0),
    ($e = Ao = null),
    Bn !== null)
  ) {
    for (t = 0; t < Bn.length; t++)
      if (((n = Bn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Bn = null;
  }
  return e;
}
function bh(e, t) {
  do {
    var n = ge;
    try {
      if ((Ou(), (Vi.current = ws), ys)) {
        for (var r = fe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        ys = !1;
      }
      if (
        ((Jn = 0),
        (Ee = ye = fe = null),
        (Ro = !1),
        (Yo = 0),
        (Hu.current = null),
        n === null || n.return === null)
      ) {
        (xe = 1), (qo = t), (ge = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = Pe),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            d = l,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var c = d.alternate;
            c
              ? ((d.updateQueue = c.updateQueue),
                (d.memoizedState = c.memoizedState),
                (d.lanes = c.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var m = hd(s);
          if (m !== null) {
            (m.flags &= -257),
              md(m, s, l, i, t),
              m.mode & 1 && pd(i, u, t),
              (t = m),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              pd(i, u, t), Gu();
              break e;
            }
            a = Error(R(426));
          }
        } else if (ue && l.mode & 1) {
          var w = hd(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              md(w, s, l, i, t),
              Nu(Kr(a, l));
            break e;
          }
        }
        (i = a = Kr(a, l)),
          xe !== 4 && (xe = 2),
          Ao === null ? (Ao = [i]) : Ao.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = ch(i, a, t);
              ld(i, h);
              break e;
            case 1:
              l = a;
              var p = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (kn === null || !kn.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = dh(i, l, t);
                ld(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Oh(n);
    } catch (C) {
      (t = C), ge === n && n !== null && (ge = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Nh() {
  var e = xs.current;
  return (xs.current = ws), e === null ? ws : e;
}
function Gu() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4),
    Se === null || (!(er & 268435455) && !(Vs & 268435455)) || fn(Se, Pe);
}
function Cs(e, t) {
  var n = X;
  X |= 2;
  var r = Nh();
  (Se !== e || Pe !== t) && ((Ut = null), Gn(e, t));
  do
    try {
      Wy();
      break;
    } catch (o) {
      bh(e, o);
    }
  while (!0);
  if ((Ou(), (X = n), (xs.current = r), ge !== null)) throw Error(R(261));
  return (Se = null), (Pe = 0), xe;
}
function Wy() {
  for (; ge !== null; ) Rh(ge);
}
function Qy() {
  for (; ge !== null && !gg(); ) Rh(ge);
}
function Rh(e) {
  var t = _h(e.alternate, e, qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Oh(e) : (ge = t),
    (Hu.current = null);
}
function Oh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Fy(n, t)), n !== null)) {
        (n.flags &= 32767), (ge = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (xe = 6), (ge = null);
        return;
      }
    } else if (((n = zy(n, t, qe)), n !== null)) {
      ge = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ge = t;
      return;
    }
    ge = t = e;
  } while (t !== null);
  xe === 0 && (xe = 5);
}
function $n(e, t, n) {
  var r = ee,
    o = at.transition;
  try {
    (at.transition = null), (ee = 1), Yy(e, t, n, r);
  } finally {
    (at.transition = o), (ee = r);
  }
  return null;
}
function Yy(e, t, n, r) {
  do Or();
  while (wn !== null);
  if (X & 6) throw Error(R(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (bg(e, i),
    e === Se && ((ge = Se = null), (Pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ai ||
      ((Ai = !0),
      Mh(os, function () {
        return Or(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = at.transition), (at.transition = null);
    var s = ee;
    ee = 1;
    var l = X;
    (X |= 4),
      (Hu.current = null),
      Uy(e, n),
      Th(n, e),
      py(va),
      (ss = !!ma),
      (va = ma = null),
      (e.current = n),
      By(n),
      yg(),
      (X = l),
      (ee = s),
      (at.transition = i);
  } else e.current = n;
  if (
    (Ai && ((Ai = !1), (wn = e), (Ss = o)),
    (i = e.pendingLanes),
    i === 0 && (kn = null),
    Eg(n.stateNode),
    Ve(e, ve()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Es) throw ((Es = !1), (e = Ia), (Ia = null), e);
  return (
    Ss & 1 && e.tag !== 0 && Or(),
    (i = e.pendingLanes),
    i & 1 ? (e === Da ? _o++ : ((_o = 0), (Da = e))) : (_o = 0),
    Dn(),
    null
  );
}
function Or() {
  if (wn !== null) {
    var e = cp(Ss),
      t = at.transition,
      n = ee;
    try {
      if (((at.transition = null), (ee = 16 > e ? 16 : e), wn === null))
        var r = !1;
      else {
        if (((e = wn), (wn = null), (Ss = 0), X & 6)) throw Error(R(331));
        var o = X;
        for (X |= 4, j = e.current; j !== null; ) {
          var i = j,
            s = i.child;
          if (j.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (j = u; j !== null; ) {
                  var d = j;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Oo(8, d, i);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (j = f);
                  else
                    for (; j !== null; ) {
                      d = j;
                      var c = d.sibling,
                        m = d.return;
                      if ((Eh(d), d === u)) {
                        j = null;
                        break;
                      }
                      if (c !== null) {
                        (c.return = m), (j = c);
                        break;
                      }
                      j = m;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var w = v.sibling;
                    (v.sibling = null), (v = w);
                  } while (v !== null);
                }
              }
              j = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (j = s);
          else
            e: for (; j !== null; ) {
              if (((i = j), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Oo(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (j = h);
                break e;
              }
              j = i.return;
            }
        }
        var p = e.current;
        for (j = p; j !== null; ) {
          s = j;
          var g = s.child;
          if (s.subtreeFlags & 2064 && g !== null) (g.return = s), (j = g);
          else
            e: for (s = p; j !== null; ) {
              if (((l = j), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hs(9, l);
                  }
                } catch (C) {
                  me(l, l.return, C);
                }
              if (l === s) {
                j = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (j = S);
                break e;
              }
              j = l.return;
            }
        }
        if (
          ((X = o), Dn(), Mt && typeof Mt.onPostCommitFiberRoot == "function")
        )
          try {
            Mt.onPostCommitFiberRoot(Ls, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ee = n), (at.transition = t);
    }
  }
  return !1;
}
function Nd(e, t, n) {
  (t = Kr(n, t)),
    (t = ch(e, t, 1)),
    (e = Pn(e, t, 1)),
    (t = Ie()),
    e !== null && (ii(e, 1, t), Ve(e, t));
}
function me(e, t, n) {
  if (e.tag === 3) Nd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Nd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (kn === null || !kn.has(r)))
        ) {
          (e = Kr(n, e)),
            (e = dh(t, e, 1)),
            (t = Pn(t, e, 1)),
            (e = Ie()),
            t !== null && (ii(t, 1, e), Ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Gy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ie()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Se === e &&
      (Pe & n) === n &&
      (xe === 4 || (xe === 3 && (Pe & 130023424) === Pe && 500 > ve() - Wu)
        ? Gn(e, 0)
        : (Vu |= n)),
    Ve(e, t);
}
function Ah(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ei), (Ei <<= 1), !(Ei & 130023424) && (Ei = 4194304))
      : (t = 1));
  var n = Ie();
  (e = Gt(e, t)), e !== null && (ii(e, t, n), Ve(e, n));
}
function Ky(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ah(e, n);
}
function qy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), Ah(e, n);
}
var _h;
_h = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Be.current) Ue = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ue = !1), Dy(e, t, n);
      Ue = !!(e.flags & 131072);
    }
  else (Ue = !1), ue && t.flags & 1048576 && Ip(t, ps, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Qi(e, t), (e = t.pendingProps);
      var o = Wr(t, _e.current);
      Rr(t, n), (o = zu(null, t, r, e, o, n));
      var i = Fu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            He(r) ? ((i = !0), ds(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Mu(t),
            (o.updater = Bs),
            (t.stateNode = o),
            (o._reactInternals = t),
            Pa(t, r, e, n),
            (t = Na(null, t, r, !0, i, n)))
          : ((t.tag = 0), ue && i && ku(t), je(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Qi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Zy(r)),
          (e = pt(r, e)),
          o)
        ) {
          case 0:
            t = ba(null, t, r, e, n);
            break e;
          case 1:
            t = yd(null, t, r, e, n);
            break e;
          case 11:
            t = vd(null, t, r, e, n);
            break e;
          case 14:
            t = gd(null, t, r, pt(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pt(r, o)),
        ba(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pt(r, o)),
        yd(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((mh(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Bp(e, t),
          vs(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Kr(Error(R(423)), t)), (t = wd(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Kr(Error(R(424)), t)), (t = wd(e, t, r, n, o));
            break e;
          } else
            for (
              Ze = Tn(t.stateNode.containerInfo.firstChild),
                Je = t,
                ue = !0,
                gt = null,
                n = $p(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Qr(), r === o)) {
            t = Kt(e, t, n);
            break e;
          }
          je(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Hp(t),
        e === null && Sa(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        ga(r, o) ? (s = null) : i !== null && ga(r, i) && (t.flags |= 32),
        hh(e, t),
        je(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Sa(t), null;
    case 13:
      return vh(e, t, n);
    case 4:
      return (
        ju(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Yr(t, null, r, n)) : je(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pt(r, o)),
        vd(e, t, r, o, n)
      );
    case 7:
      return je(e, t, t.pendingProps, n), t.child;
    case 8:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return je(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          ne(hs, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Et(i.value, s)) {
            if (i.children === o.children && !Be.current) {
              t = Kt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = Wt(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Ca(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(R(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  Ca(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        je(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Rr(t, n),
        (o = ut(o)),
        (r = r(o)),
        (t.flags |= 1),
        je(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = pt(r, t.pendingProps)),
        (o = pt(r.type, o)),
        gd(e, t, r, o, n)
      );
    case 15:
      return fh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pt(r, o)),
        Qi(e, t),
        (t.tag = 1),
        He(r) ? ((e = !0), ds(t)) : (e = !1),
        Rr(t, n),
        uh(t, r, o),
        Pa(t, r, o, n),
        Na(null, t, r, !0, e, n)
      );
    case 19:
      return gh(e, t, n);
    case 22:
      return ph(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Mh(e, t) {
  return sp(e, t);
}
function Xy(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function lt(e, t, n, r) {
  return new Xy(e, t, n, r);
}
function Ku(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Zy(e) {
  if (typeof e == "function") return Ku(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === hu)) return 11;
    if (e === mu) return 14;
  }
  return 2;
}
function Nn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = lt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ki(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Ku(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case hr:
        return Kn(n.children, o, i, t);
      case pu:
        (s = 8), (o |= 8);
        break;
      case Kl:
        return (
          (e = lt(12, n, t, o | 2)), (e.elementType = Kl), (e.lanes = i), e
        );
      case ql:
        return (e = lt(13, n, t, o)), (e.elementType = ql), (e.lanes = i), e;
      case Xl:
        return (e = lt(19, n, t, o)), (e.elementType = Xl), (e.lanes = i), e;
      case Hf:
        return Ws(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Uf:
              s = 10;
              break e;
            case Bf:
              s = 9;
              break e;
            case hu:
              s = 11;
              break e;
            case mu:
              s = 14;
              break e;
            case un:
              (s = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = lt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Kn(e, t, n, r) {
  return (e = lt(7, e, r, t)), (e.lanes = n), e;
}
function Ws(e, t, n, r) {
  return (
    (e = lt(22, e, r, t)),
    (e.elementType = Hf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function zl(e, t, n) {
  return (e = lt(6, e, null, t)), (e.lanes = n), e;
}
function Fl(e, t, n) {
  return (
    (t = lt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Jy(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = wl(0)),
    (this.expirationTimes = wl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = wl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function qu(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new Jy(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = lt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Mu(i),
    e
  );
}
function e0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: pr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function jh(e) {
  if (!e) return On;
  e = e._reactInternals;
  e: {
    if (ir(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (He(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (He(n)) return jp(e, n, t);
  }
  return t;
}
function Lh(e, t, n, r, o, i, s, l, a) {
  return (
    (e = qu(n, r, !0, e, o, i, s, l, a)),
    (e.context = jh(null)),
    (n = e.current),
    (r = Ie()),
    (o = bn(n)),
    (i = Wt(r, o)),
    (i.callback = t ?? null),
    Pn(n, i, o),
    (e.current.lanes = o),
    ii(e, o, r),
    Ve(e, r),
    e
  );
}
function Qs(e, t, n, r) {
  var o = t.current,
    i = Ie(),
    s = bn(o);
  return (
    (n = jh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Wt(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Pn(o, t, s)),
    e !== null && (xt(e, o, s, i), Hi(e, o, s)),
    s
  );
}
function Ts(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Rd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Xu(e, t) {
  Rd(e, t), (e = e.alternate) && Rd(e, t);
}
function t0() {
  return null;
}
var Ih =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Zu(e) {
  this._internalRoot = e;
}
Ys.prototype.render = Zu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Qs(e, t, null, null);
};
Ys.prototype.unmount = Zu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    tr(function () {
      Qs(null, e, null, null);
    }),
      (t[Yt] = null);
  }
};
function Ys(e) {
  this._internalRoot = e;
}
Ys.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = pp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < dn.length && t !== 0 && t < dn[n].priority; n++);
    dn.splice(n, 0, e), n === 0 && mp(e);
  }
};
function Ju(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Gs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Od() {}
function n0(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Ts(s);
        i.call(u);
      };
    }
    var s = Lh(t, r, e, 0, null, !1, !1, "", Od);
    return (
      (e._reactRootContainer = s),
      (e[Yt] = s.current),
      Bo(e.nodeType === 8 ? e.parentNode : e),
      tr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Ts(a);
      l.call(u);
    };
  }
  var a = qu(e, 0, !1, null, null, !1, !1, "", Od);
  return (
    (e._reactRootContainer = a),
    (e[Yt] = a.current),
    Bo(e.nodeType === 8 ? e.parentNode : e),
    tr(function () {
      Qs(t, a, n, r);
    }),
    a
  );
}
function Ks(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = Ts(s);
        l.call(a);
      };
    }
    Qs(t, s, e, o);
  } else s = n0(n, t, e, o, r);
  return Ts(s);
}
dp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = So(t.pendingLanes);
        n !== 0 &&
          (yu(t, n | 1), Ve(t, ve()), !(X & 6) && ((qr = ve() + 500), Dn()));
      }
      break;
    case 13:
      tr(function () {
        var r = Gt(e, 1);
        if (r !== null) {
          var o = Ie();
          xt(r, e, 1, o);
        }
      }),
        Xu(e, 1);
  }
};
wu = function (e) {
  if (e.tag === 13) {
    var t = Gt(e, 134217728);
    if (t !== null) {
      var n = Ie();
      xt(t, e, 134217728, n);
    }
    Xu(e, 134217728);
  }
};
fp = function (e) {
  if (e.tag === 13) {
    var t = bn(e),
      n = Gt(e, t);
    if (n !== null) {
      var r = Ie();
      xt(n, e, t, r);
    }
    Xu(e, t);
  }
};
pp = function () {
  return ee;
};
hp = function (e, t) {
  var n = ee;
  try {
    return (ee = e), t();
  } finally {
    ee = n;
  }
};
la = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ea(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Fs(r);
            if (!o) throw Error(R(90));
            Wf(r), ea(r, o);
          }
        }
      }
      break;
    case "textarea":
      Yf(e, n);
      break;
    case "select":
      (t = n.value), t != null && Pr(e, !!n.multiple, t, !1);
  }
};
ep = Qu;
tp = tr;
var r0 = { usingClientEntryPoint: !1, Events: [li, yr, Fs, Zf, Jf, Qu] },
  mo = {
    findFiberByHostInstance: Un,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  o0 = {
    bundleType: mo.bundleType,
    version: mo.version,
    rendererPackageName: mo.rendererPackageName,
    rendererConfig: mo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = op(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: mo.findFiberByHostInstance || t0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var _i = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!_i.isDisabled && _i.supportsFiber)
    try {
      (Ls = _i.inject(o0)), (Mt = _i);
    } catch {}
}
nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r0;
nt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ju(t)) throw Error(R(200));
  return e0(e, t, null, n);
};
nt.createRoot = function (e, t) {
  if (!Ju(e)) throw Error(R(299));
  var n = !1,
    r = "",
    o = Ih;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = qu(e, 1, !1, null, null, n, !1, r, o)),
    (e[Yt] = t.current),
    Bo(e.nodeType === 8 ? e.parentNode : e),
    new Zu(t)
  );
};
nt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return (e = op(t)), (e = e === null ? null : e.stateNode), e;
};
nt.flushSync = function (e) {
  return tr(e);
};
nt.hydrate = function (e, t, n) {
  if (!Gs(t)) throw Error(R(200));
  return Ks(null, e, t, !0, n);
};
nt.hydrateRoot = function (e, t, n) {
  if (!Ju(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Ih;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Lh(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[Yt] = t.current),
    Bo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Ys(t);
};
nt.render = function (e, t, n) {
  if (!Gs(t)) throw Error(R(200));
  return Ks(null, e, t, !1, n);
};
nt.unmountComponentAtNode = function (e) {
  if (!Gs(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (tr(function () {
        Ks(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Yt] = null);
        });
      }),
      !0)
    : !1;
};
nt.unstable_batchedUpdates = Qu;
nt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Gs(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Ks(e, t, n, !1, r);
};
nt.version = "18.3.1-next-f1338f8080-20240426";
function Dh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dh);
    } catch (e) {
      console.error(e);
    }
}
Dh(), (Df.exports = nt);
var ui = Df.exports;
const zh = Jr(ui);
var Fh,
  Ad = ui;
(Fh = Ad.createRoot), Ad.hydrateRoot;
const i0 = 1,
  s0 = 1e6;
let $l = 0;
function l0() {
  return ($l = ($l + 1) % Number.MAX_SAFE_INTEGER), $l.toString();
}
const Ul = new Map(),
  _d = (e) => {
    if (Ul.has(e)) return;
    const t = setTimeout(() => {
      Ul.delete(e), Mo({ type: "REMOVE_TOAST", toastId: e });
    }, s0);
    Ul.set(e, t);
  },
  a0 = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, i0) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? _d(n)
            : e.toasts.forEach((r) => {
                _d(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  qi = [];
let Xi = { toasts: [] };
function Mo(e) {
  (Xi = a0(Xi, e)),
    qi.forEach((t) => {
      t(Xi);
    });
}
function u0({ ...e }) {
  const t = l0(),
    n = (o) => Mo({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => Mo({ type: "DISMISS_TOAST", toastId: t });
  return (
    Mo({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function $h() {
  const [e, t] = x.useState(Xi);
  return (
    x.useEffect(
      () => (
        qi.push(t),
        () => {
          const n = qi.indexOf(t);
          n > -1 && qi.splice(n, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: u0,
      dismiss: (n) => Mo({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function we(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function c0(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Uh(...e) {
  return (t) => e.forEach((n) => c0(n, t));
}
function St(...e) {
  return x.useCallback(Uh(...e), e);
}
function d0(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = x.createContext(s),
      a = n.length;
    n = [...n, s];
    function u(f) {
      const { scope: c, children: m, ...y } = f,
        v = (c == null ? void 0 : c[e][a]) || l,
        w = x.useMemo(() => y, Object.values(y));
      return E.jsx(v.Provider, { value: w, children: m });
    }
    function d(f, c) {
      const m = (c == null ? void 0 : c[e][a]) || l,
        y = x.useContext(m);
      if (y) return y;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + "Provider"), [u, d];
  }
  const o = () => {
    const i = n.map((s) => x.createContext(s));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || i;
      return x.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (o.scopeName = e), [r, f0(o, ...t)];
}
function f0(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const f = a(i)[`__scope${u}`];
        return { ...l, ...f };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var Ps = x.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = x.Children.toArray(n),
    i = o.find(p0);
  if (i) {
    const s = i.props.children,
      l = o.map((a) =>
        a === i
          ? x.Children.count(s) > 1
            ? x.Children.only(null)
            : x.isValidElement(s)
            ? s.props.children
            : null
          : a
      );
    return E.jsx($a, {
      ...r,
      ref: t,
      children: x.isValidElement(s) ? x.cloneElement(s, void 0, l) : null,
    });
  }
  return E.jsx($a, { ...r, ref: t, children: n });
});
Ps.displayName = "Slot";
var $a = x.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (x.isValidElement(n)) {
    const o = m0(n);
    return x.cloneElement(n, { ...h0(r, n.props), ref: t ? Uh(t, o) : o });
  }
  return x.Children.count(n) > 1 ? x.Children.only(null) : null;
});
$a.displayName = "SlotClone";
var Bh = ({ children: e }) => E.jsx(E.Fragment, { children: e });
function p0(e) {
  return x.isValidElement(e) && e.type === Bh;
}
function h0(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...l) => {
            i(...l), o(...l);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...i })
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function m0(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function v0(e) {
  const t = e + "CollectionProvider",
    [n, r] = d0(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (m) => {
      const { scope: y, children: v } = m,
        w = O.useRef(null),
        h = O.useRef(new Map()).current;
      return E.jsx(o, { scope: y, itemMap: h, collectionRef: w, children: v });
    };
  s.displayName = t;
  const l = e + "CollectionSlot",
    a = O.forwardRef((m, y) => {
      const { scope: v, children: w } = m,
        h = i(l, v),
        p = St(y, h.collectionRef);
      return E.jsx(Ps, { ref: p, children: w });
    });
  a.displayName = l;
  const u = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    f = O.forwardRef((m, y) => {
      const { scope: v, children: w, ...h } = m,
        p = O.useRef(null),
        g = St(y, p),
        S = i(u, v);
      return (
        O.useEffect(
          () => (
            S.itemMap.set(p, { ref: p, ...h }), () => void S.itemMap.delete(p)
          )
        ),
        E.jsx(Ps, { [d]: "", ref: g, children: w })
      );
    });
  f.displayName = u;
  function c(m) {
    const y = i(e + "CollectionConsumer", m);
    return O.useCallback(() => {
      const w = y.collectionRef.current;
      if (!w) return [];
      const h = Array.from(w.querySelectorAll(`[${d}]`));
      return Array.from(y.itemMap.values()).sort(
        (S, C) => h.indexOf(S.ref.current) - h.indexOf(C.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [{ Provider: s, Slot: a, ItemSlot: f }, c, r];
}
function Hh(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = x.createContext(s),
      a = n.length;
    n = [...n, s];
    const u = (f) => {
      var h;
      const { scope: c, children: m, ...y } = f,
        v = ((h = c == null ? void 0 : c[e]) == null ? void 0 : h[a]) || l,
        w = x.useMemo(() => y, Object.values(y));
      return E.jsx(v.Provider, { value: w, children: m });
    };
    u.displayName = i + "Provider";
    function d(f, c) {
      var v;
      const m = ((v = c == null ? void 0 : c[e]) == null ? void 0 : v[a]) || l,
        y = x.useContext(m);
      if (y) return y;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return [u, d];
  }
  const o = () => {
    const i = n.map((s) => x.createContext(s));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || i;
      return x.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (o.scopeName = e), [r, g0(o, ...t)];
}
function g0(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const f = a(i)[`__scope${u}`];
        return { ...l, ...f };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var y0 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Qe = y0.reduce((e, t) => {
    const n = x.forwardRef((r, o) => {
      const { asChild: i, ...s } = r,
        l = i ? Ps : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        E.jsx(l, { ...s, ref: o })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function Vh(e, t) {
  e && ui.flushSync(() => e.dispatchEvent(t));
}
function Lt(e) {
  const t = x.useRef(e);
  return (
    x.useEffect(() => {
      t.current = e;
    }),
    x.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function w0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Lt(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var x0 = "DismissableLayer",
  Ua = "dismissableLayer.update",
  E0 = "dismissableLayer.pointerDownOutside",
  S0 = "dismissableLayer.focusOutside",
  Md,
  Wh = x.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  ec = x.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: l,
        ...a
      } = e,
      u = x.useContext(Wh),
      [d, f] = x.useState(null),
      c =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, m] = x.useState({}),
      y = St(t, (k) => f(k)),
      v = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      h = v.indexOf(w),
      p = d ? v.indexOf(d) : -1,
      g = u.layersWithOutsidePointerEventsDisabled.size > 0,
      S = p >= h,
      C = T0((k) => {
        const N = k.target,
          I = [...u.branches].some((_) => _.contains(N));
        !S ||
          I ||
          (o == null || o(k),
          s == null || s(k),
          k.defaultPrevented || l == null || l());
      }, c),
      P = P0((k) => {
        const N = k.target;
        [...u.branches].some((_) => _.contains(N)) ||
          (i == null || i(k),
          s == null || s(k),
          k.defaultPrevented || l == null || l());
      }, c);
    return (
      w0((k) => {
        p === u.layers.size - 1 &&
          (r == null || r(k),
          !k.defaultPrevented && l && (k.preventDefault(), l()));
      }, c),
      x.useEffect(() => {
        if (d)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Md = c.body.style.pointerEvents),
                (c.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            jd(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (c.body.style.pointerEvents = Md);
            }
          );
      }, [d, c, n, u]),
      x.useEffect(
        () => () => {
          d &&
            (u.layers.delete(d),
            u.layersWithOutsidePointerEventsDisabled.delete(d),
            jd());
        },
        [d, u]
      ),
      x.useEffect(() => {
        const k = () => m({});
        return (
          document.addEventListener(Ua, k),
          () => document.removeEventListener(Ua, k)
        );
      }, []),
      E.jsx(Qe.div, {
        ...a,
        ref: y,
        style: {
          pointerEvents: g ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: we(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: we(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: we(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        ),
      })
    );
  });
ec.displayName = x0;
var C0 = "DismissableLayerBranch",
  Qh = x.forwardRef((e, t) => {
    const n = x.useContext(Wh),
      r = x.useRef(null),
      o = St(t, r);
    return (
      x.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      E.jsx(Qe.div, { ...e, ref: o })
    );
  });
Qh.displayName = C0;
function T0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Lt(e),
    r = x.useRef(!1),
    o = x.useRef(() => {});
  return (
    x.useEffect(() => {
      const i = (l) => {
          if (l.target && !r.current) {
            let a = function () {
              Yh(E0, n, u, { discrete: !0 });
            };
            const u = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = a),
                t.addEventListener("click", o.current, { once: !0 }))
              : a();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function P0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Lt(e),
    r = x.useRef(!1);
  return (
    x.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          Yh(S0, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function jd() {
  const e = new CustomEvent(Ua);
  document.dispatchEvent(e);
}
function Yh(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Vh(o, i) : o.dispatchEvent(i);
}
var k0 = ec,
  b0 = Qh,
  nr = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
  N0 = "Portal",
  Gh = x.forwardRef((e, t) => {
    var l;
    const { container: n, ...r } = e,
      [o, i] = x.useState(!1);
    nr(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((l = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : l.body));
    return s ? zh.createPortal(E.jsx(Qe.div, { ...r, ref: t }), s) : null;
  });
Gh.displayName = N0;
function R0(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var tc = (e) => {
  const { present: t, children: n } = e,
    r = O0(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n),
    i = St(r.ref, A0(o));
  return typeof n == "function" || r.isPresent
    ? x.cloneElement(o, { ref: i })
    : null;
};
tc.displayName = "Presence";
function O0(e) {
  const [t, n] = x.useState(),
    r = x.useRef({}),
    o = x.useRef(e),
    i = x.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [l, a] = R0(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    x.useEffect(() => {
      const u = Mi(r.current);
      i.current = l === "mounted" ? u : "none";
    }, [l]),
    nr(() => {
      const u = r.current,
        d = o.current;
      if (d !== e) {
        const c = i.current,
          m = Mi(u);
        e
          ? a("MOUNT")
          : m === "none" || (u == null ? void 0 : u.display) === "none"
          ? a("UNMOUNT")
          : a(d && c !== m ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, a]),
    nr(() => {
      if (t) {
        let u;
        const d = t.ownerDocument.defaultView ?? window,
          f = (m) => {
            const v = Mi(r.current).includes(m.animationName);
            if (m.target === t && v && (a("ANIMATION_END"), !o.current)) {
              const w = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = w);
                }));
            }
          },
          c = (m) => {
            m.target === t && (i.current = Mi(r.current));
          };
        return (
          t.addEventListener("animationstart", c),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            d.clearTimeout(u),
              t.removeEventListener("animationstart", c),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f);
          }
        );
      } else a("ANIMATION_END");
    }, [t, a]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: x.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function Mi(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function A0(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function _0({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = M0({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    s = i ? e : r,
    l = Lt(n),
    a = x.useCallback(
      (u) => {
        if (i) {
          const f = typeof u == "function" ? u(e) : u;
          f !== e && l(f);
        } else o(u);
      },
      [i, e, o, l]
    );
  return [s, a];
}
function M0({ defaultProp: e, onChange: t }) {
  const n = x.useState(e),
    [r] = n,
    o = x.useRef(r),
    i = Lt(t);
  return (
    x.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
var j0 = "VisuallyHidden",
  qs = x.forwardRef((e, t) =>
    E.jsx(Qe.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    })
  );
qs.displayName = j0;
var L0 = qs,
  nc = "ToastProvider",
  [rc, I0, D0] = v0("Toast"),
  [Kh, tC] = Hh("Toast", [D0]),
  [z0, Xs] = Kh(nc),
  qh = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: i = 50,
        children: s,
      } = e,
      [l, a] = x.useState(null),
      [u, d] = x.useState(0),
      f = x.useRef(!1),
      c = x.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${nc}\`. Expected non-empty \`string\`.`
        ),
      E.jsx(rc.Provider, {
        scope: t,
        children: E.jsx(z0, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: u,
          viewport: l,
          onViewportChange: a,
          onToastAdd: x.useCallback(() => d((m) => m + 1), []),
          onToastRemove: x.useCallback(() => d((m) => m - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: c,
          children: s,
        }),
      })
    );
  };
qh.displayName = nc;
var Xh = "ToastViewport",
  F0 = ["F8"],
  Ba = "toast.viewportPause",
  Ha = "toast.viewportResume",
  Zh = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = F0,
        label: o = "Notifications ({hotkey})",
        ...i
      } = e,
      s = Xs(Xh, n),
      l = I0(n),
      a = x.useRef(null),
      u = x.useRef(null),
      d = x.useRef(null),
      f = x.useRef(null),
      c = St(t, f, s.onViewportChange),
      m = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      y = s.toastCount > 0;
    x.useEffect(() => {
      const w = (h) => {
        var g;
        r.length !== 0 &&
          r.every((S) => h[S] || h.code === S) &&
          ((g = f.current) == null || g.focus());
      };
      return (
        document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
      );
    }, [r]),
      x.useEffect(() => {
        const w = a.current,
          h = f.current;
        if (y && w && h) {
          const p = () => {
              if (!s.isClosePausedRef.current) {
                const P = new CustomEvent(Ba);
                h.dispatchEvent(P), (s.isClosePausedRef.current = !0);
              }
            },
            g = () => {
              if (s.isClosePausedRef.current) {
                const P = new CustomEvent(Ha);
                h.dispatchEvent(P), (s.isClosePausedRef.current = !1);
              }
            },
            S = (P) => {
              !w.contains(P.relatedTarget) && g();
            },
            C = () => {
              w.contains(document.activeElement) || g();
            };
          return (
            w.addEventListener("focusin", p),
            w.addEventListener("focusout", S),
            w.addEventListener("pointermove", p),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", p),
            window.addEventListener("focus", g),
            () => {
              w.removeEventListener("focusin", p),
                w.removeEventListener("focusout", S),
                w.removeEventListener("pointermove", p),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", g);
            }
          );
        }
      }, [y, s.isClosePausedRef]);
    const v = x.useCallback(
      ({ tabbingDirection: w }) => {
        const p = l().map((g) => {
          const S = g.ref.current,
            C = [S, ...Z0(S)];
          return w === "forwards" ? C : C.reverse();
        });
        return (w === "forwards" ? p.reverse() : p).flat();
      },
      [l]
    );
    return (
      x.useEffect(() => {
        const w = f.current;
        if (w) {
          const h = (p) => {
            var C, P, k;
            const g = p.altKey || p.ctrlKey || p.metaKey;
            if (p.key === "Tab" && !g) {
              const N = document.activeElement,
                I = p.shiftKey;
              if (p.target === w && I) {
                (C = u.current) == null || C.focus();
                return;
              }
              const D = v({ tabbingDirection: I ? "backwards" : "forwards" }),
                Q = D.findIndex((M) => M === N);
              Bl(D.slice(Q + 1))
                ? p.preventDefault()
                : I
                ? (P = u.current) == null || P.focus()
                : (k = d.current) == null || k.focus();
            }
          };
          return (
            w.addEventListener("keydown", h),
            () => w.removeEventListener("keydown", h)
          );
        }
      }, [l, v]),
      E.jsxs(b0, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", m),
        tabIndex: -1,
        style: { pointerEvents: y ? void 0 : "none" },
        children: [
          y &&
            E.jsx(Va, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const w = v({ tabbingDirection: "forwards" });
                Bl(w);
              },
            }),
          E.jsx(rc.Slot, {
            scope: n,
            children: E.jsx(Qe.ol, { tabIndex: -1, ...i, ref: c }),
          }),
          y &&
            E.jsx(Va, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const w = v({ tabbingDirection: "backwards" });
                Bl(w);
              },
            }),
        ],
      })
    );
  });
Zh.displayName = Xh;
var Jh = "ToastFocusProxy",
  Va = x.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      i = Xs(Jh, n);
    return E.jsx(qs, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const l = s.relatedTarget;
        !((u = i.viewport) != null && u.contains(l)) && r();
      },
    });
  });
Va.displayName = Jh;
var Zs = "Toast",
  $0 = "toast.swipeStart",
  U0 = "toast.swipeMove",
  B0 = "toast.swipeCancel",
  H0 = "toast.swipeEnd",
  em = x.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
      [l = !0, a] = _0({ prop: r, defaultProp: o, onChange: i });
    return E.jsx(tc, {
      present: n || l,
      children: E.jsx(Q0, {
        open: l,
        ...s,
        ref: t,
        onClose: () => a(!1),
        onPause: Lt(e.onPause),
        onResume: Lt(e.onResume),
        onSwipeStart: we(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: we(e.onSwipeMove, (u) => {
          const { x: d, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${d}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${f}px`
            );
        }),
        onSwipeCancel: we(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: we(e.onSwipeEnd, (u) => {
          const { x: d, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${d}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${f}px`
            ),
            a(!1);
        }),
      }),
    });
  });
em.displayName = Zs;
var [V0, W0] = Kh(Zs, { onClose() {} }),
  Q0 = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: l,
        onPause: a,
        onResume: u,
        onSwipeStart: d,
        onSwipeMove: f,
        onSwipeCancel: c,
        onSwipeEnd: m,
        ...y
      } = e,
      v = Xs(Zs, n),
      [w, h] = x.useState(null),
      p = St(t, (M) => h(M)),
      g = x.useRef(null),
      S = x.useRef(null),
      C = o || v.duration,
      P = x.useRef(0),
      k = x.useRef(C),
      N = x.useRef(0),
      { onToastAdd: I, onToastRemove: _ } = v,
      $ = Lt(() => {
        var Y;
        (w == null ? void 0 : w.contains(document.activeElement)) &&
          ((Y = v.viewport) == null || Y.focus()),
          s();
      }),
      D = x.useCallback(
        (M) => {
          !M ||
            M === 1 / 0 ||
            (window.clearTimeout(N.current),
            (P.current = new Date().getTime()),
            (N.current = window.setTimeout($, M)));
        },
        [$]
      );
    x.useEffect(() => {
      const M = v.viewport;
      if (M) {
        const Y = () => {
            D(k.current), u == null || u();
          },
          U = () => {
            const G = new Date().getTime() - P.current;
            (k.current = k.current - G),
              window.clearTimeout(N.current),
              a == null || a();
          };
        return (
          M.addEventListener(Ba, U),
          M.addEventListener(Ha, Y),
          () => {
            M.removeEventListener(Ba, U), M.removeEventListener(Ha, Y);
          }
        );
      }
    }, [v.viewport, C, a, u, D]),
      x.useEffect(() => {
        i && !v.isClosePausedRef.current && D(C);
      }, [i, C, v.isClosePausedRef, D]),
      x.useEffect(() => (I(), () => _()), [I, _]);
    const Q = x.useMemo(() => (w ? lm(w) : null), [w]);
    return v.viewport
      ? E.jsxs(E.Fragment, {
          children: [
            Q &&
              E.jsx(Y0, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: Q,
              }),
            E.jsx(V0, {
              scope: n,
              onClose: $,
              children: ui.createPortal(
                E.jsx(rc.ItemSlot, {
                  scope: n,
                  children: E.jsx(k0, {
                    asChild: !0,
                    onEscapeKeyDown: we(l, () => {
                      v.isFocusedToastEscapeKeyDownRef.current || $(),
                        (v.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: E.jsx(Qe.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": v.swipeDirection,
                      ...y,
                      ref: p,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: we(e.onKeyDown, (M) => {
                        M.key === "Escape" &&
                          (l == null || l(M.nativeEvent),
                          M.nativeEvent.defaultPrevented ||
                            ((v.isFocusedToastEscapeKeyDownRef.current = !0),
                            $()));
                      }),
                      onPointerDown: we(e.onPointerDown, (M) => {
                        M.button === 0 &&
                          (g.current = { x: M.clientX, y: M.clientY });
                      }),
                      onPointerMove: we(e.onPointerMove, (M) => {
                        if (!g.current) return;
                        const Y = M.clientX - g.current.x,
                          U = M.clientY - g.current.y,
                          G = !!S.current,
                          T = ["left", "right"].includes(v.swipeDirection),
                          A = ["left", "up"].includes(v.swipeDirection)
                            ? Math.min
                            : Math.max,
                          z = T ? A(0, Y) : 0,
                          L = T ? 0 : A(0, U),
                          F = M.pointerType === "touch" ? 10 : 2,
                          q = { x: z, y: L },
                          ce = { originalEvent: M, delta: q };
                        G
                          ? ((S.current = q), ji(U0, f, ce, { discrete: !1 }))
                          : Ld(q, v.swipeDirection, F)
                          ? ((S.current = q),
                            ji($0, d, ce, { discrete: !1 }),
                            M.target.setPointerCapture(M.pointerId))
                          : (Math.abs(Y) > F || Math.abs(U) > F) &&
                            (g.current = null);
                      }),
                      onPointerUp: we(e.onPointerUp, (M) => {
                        const Y = S.current,
                          U = M.target;
                        if (
                          (U.hasPointerCapture(M.pointerId) &&
                            U.releasePointerCapture(M.pointerId),
                          (S.current = null),
                          (g.current = null),
                          Y)
                        ) {
                          const G = M.currentTarget,
                            T = { originalEvent: M, delta: Y };
                          Ld(Y, v.swipeDirection, v.swipeThreshold)
                            ? ji(H0, m, T, { discrete: !0 })
                            : ji(B0, c, T, { discrete: !0 }),
                            G.addEventListener(
                              "click",
                              (A) => A.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                v.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  Y0 = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = Xs(Zs, t),
      [i, s] = x.useState(!1),
      [l, a] = x.useState(!1);
    return (
      q0(() => s(!0)),
      x.useEffect(() => {
        const u = window.setTimeout(() => a(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      l
        ? null
        : E.jsx(Gh, {
            asChild: !0,
            children: E.jsx(qs, {
              ...r,
              children:
                i && E.jsxs(E.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  G0 = "ToastTitle",
  tm = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return E.jsx(Qe.div, { ...r, ref: t });
  });
tm.displayName = G0;
var K0 = "ToastDescription",
  nm = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return E.jsx(Qe.div, { ...r, ref: t });
  });
nm.displayName = K0;
var rm = "ToastAction",
  om = x.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? E.jsx(sm, {
          altText: n,
          asChild: !0,
          children: E.jsx(oc, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${rm}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
om.displayName = rm;
var im = "ToastClose",
  oc = x.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = W0(im, n);
    return E.jsx(sm, {
      asChild: !0,
      children: E.jsx(Qe.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: we(e.onClick, o.onClose),
      }),
    });
  });
oc.displayName = im;
var sm = x.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return E.jsx(Qe.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function lm(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        X0(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (i) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...lm(r));
      }
    }),
    t
  );
}
function ji(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Vh(o, i) : o.dispatchEvent(i);
}
var Ld = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function q0(e = () => {}) {
  const t = Lt(e);
  nr(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function X0(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Z0(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Bl(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var J0 = qh,
  am = Zh,
  um = em,
  cm = tm,
  dm = nm,
  fm = om,
  pm = oc;
function hm(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = hm(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function mm() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = hm(e)) && (r && (r += " "), (r += t));
  return r;
}
const Id = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Dd = mm,
  ew = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Dd(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((u) => {
        const d = n == null ? void 0 : n[u],
          f = i == null ? void 0 : i[u];
        if (d === null) return null;
        const c = Id(d) || Id(f);
        return o[u][c];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, d) => {
          let [f, c] = d;
          return c === void 0 || (u[f] = c), u;
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, d) => {
              let { class: f, className: c, ...m } = d;
              return Object.entries(m).every((y) => {
                let [v, w] = y;
                return Array.isArray(w)
                  ? w.includes({ ...i, ...l }[v])
                  : { ...i, ...l }[v] === w;
              })
                ? [...u, f, c]
                : u;
            }, []);
    return Dd(
      e,
      s,
      a,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tw = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  vm = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var nw = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rw = x.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: s,
      ...l
    },
    a
  ) =>
    x.createElement(
      "svg",
      {
        ref: a,
        ...nw,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: vm("lucide", o),
        ...l,
      },
      [
        ...s.map(([u, d]) => x.createElement(u, d)),
        ...(Array.isArray(i) ? i : [i]),
      ]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gm = (e, t) => {
  const n = x.forwardRef(({ className: r, ...o }, i) =>
    x.createElement(rw, {
      ref: i,
      iconNode: t,
      className: vm(`lucide-${tw(e)}`, r),
      ...o,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ow = gm("Gift", [
  ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }],
  ["path", { d: "M12 8v13", key: "1c76mn" }],
  ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
  [
    "path",
    {
      d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
      key: "1ihvrl",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iw = gm("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  ic = "-",
  sw = (e) => {
    const t = aw(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const l = s.split(ic);
        return l[0] === "" && l.length !== 1 && l.shift(), ym(l, t) || lw(s);
      },
      getConflictingClassGroupIds: (s, l) => {
        const a = n[s] || [];
        return l && r[s] ? [...a, ...r[s]] : a;
      },
    };
  },
  ym = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? ym(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(ic);
    return (s = t.validators.find(({ validator: l }) => l(i))) == null
      ? void 0
      : s.classGroupId;
  },
  zd = /^\[(.+)\]$/,
  lw = (e) => {
    if (zd.test(e)) {
      const t = zd.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  aw = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      cw(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        Wa(s, r, i, t);
      }),
      r
    );
  },
  Wa = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : Fd(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (uw(o)) {
          Wa(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        Wa(s, Fd(t, i), n, r);
      });
    });
  },
  Fd = (e, t) => {
    let n = e;
    return (
      t.split(ic).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  uw = (e) => e.isThemeGetter,
  cw = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
              ? Object.fromEntries(
                  Object.entries(i).map(([s, l]) => [t + s, l])
                )
              : i
          );
          return [n, o];
        })
      : e,
  dw = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return o(i, s), s;
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      },
    };
  },
  wm = "!",
  fw = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (l) => {
        const a = [];
        let u = 0,
          d = 0,
          f;
        for (let w = 0; w < l.length; w++) {
          let h = l[w];
          if (u === 0) {
            if (h === o && (r || l.slice(w, w + i) === t)) {
              a.push(l.slice(d, w)), (d = w + i);
              continue;
            }
            if (h === "/") {
              f = w;
              continue;
            }
          }
          h === "[" ? u++ : h === "]" && u--;
        }
        const c = a.length === 0 ? l : l.substring(d),
          m = c.startsWith(wm),
          y = m ? c.substring(1) : c,
          v = f && f > d ? f - d : void 0;
        return {
          modifiers: a,
          hasImportantModifier: m,
          baseClassName: y,
          maybePostfixModifierPosition: v,
        };
      };
    return n ? (l) => n({ className: l, parseClassName: s }) : s;
  },
  pw = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  hw = (e) => ({ cache: dw(e.cacheSize), parseClassName: fw(e), ...sw(e) }),
  mw = /\s+/,
  vw = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      s = e.trim().split(mw);
    let l = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
      const u = s[a],
        {
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: c,
          maybePostfixModifierPosition: m,
        } = n(u);
      let y = !!m,
        v = r(y ? c.substring(0, m) : c);
      if (!v) {
        if (!y) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((v = r(c)), !v)) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        y = !1;
      }
      const w = pw(d).join(":"),
        h = f ? w + wm : w,
        p = h + v;
      if (i.includes(p)) continue;
      i.push(p);
      const g = o(v, y);
      for (let S = 0; S < g.length; ++S) {
        const C = g[S];
        i.push(h + C);
      }
      l = u + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function gw() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = xm(t)) && (r && (r += " "), (r += n));
  return r;
}
const xm = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = xm(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function yw(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(a) {
    const u = t.reduce((d, f) => f(d), e());
    return (n = hw(u)), (r = n.cache.get), (o = n.cache.set), (i = l), l(a);
  }
  function l(a) {
    const u = r(a);
    if (u) return u;
    const d = vw(a, n);
    return o(a, d), d;
  }
  return function () {
    return i(gw.apply(null, arguments));
  };
}
const oe = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  Em = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  ww = /^\d+\/\d+$/,
  xw = new Set(["px", "full", "screen"]),
  Ew = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Sw =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Cw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Tw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Pw =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  zt = (e) => Ar(e) || xw.has(e) || ww.test(e),
  sn = (e) => ro(e, "length", Mw),
  Ar = (e) => !!e && !Number.isNaN(Number(e)),
  Hl = (e) => ro(e, "number", Ar),
  vo = (e) => !!e && Number.isInteger(Number(e)),
  kw = (e) => e.endsWith("%") && Ar(e.slice(0, -1)),
  V = (e) => Em.test(e),
  ln = (e) => Ew.test(e),
  bw = new Set(["length", "size", "percentage"]),
  Nw = (e) => ro(e, bw, Sm),
  Rw = (e) => ro(e, "position", Sm),
  Ow = new Set(["image", "url"]),
  Aw = (e) => ro(e, Ow, Lw),
  _w = (e) => ro(e, "", jw),
  go = () => !0,
  ro = (e, t, n) => {
    const r = Em.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  Mw = (e) => Sw.test(e) && !Cw.test(e),
  Sm = () => !1,
  jw = (e) => Tw.test(e),
  Lw = (e) => Pw.test(e),
  Iw = () => {
    const e = oe("colors"),
      t = oe("spacing"),
      n = oe("blur"),
      r = oe("brightness"),
      o = oe("borderColor"),
      i = oe("borderRadius"),
      s = oe("borderSpacing"),
      l = oe("borderWidth"),
      a = oe("contrast"),
      u = oe("grayscale"),
      d = oe("hueRotate"),
      f = oe("invert"),
      c = oe("gap"),
      m = oe("gradientColorStops"),
      y = oe("gradientColorStopPositions"),
      v = oe("inset"),
      w = oe("margin"),
      h = oe("opacity"),
      p = oe("padding"),
      g = oe("saturate"),
      S = oe("scale"),
      C = oe("sepia"),
      P = oe("skew"),
      k = oe("space"),
      N = oe("translate"),
      I = () => ["auto", "contain", "none"],
      _ = () => ["auto", "hidden", "clip", "visible", "scroll"],
      $ = () => ["auto", V, t],
      D = () => [V, t],
      Q = () => ["", zt, sn],
      M = () => ["auto", Ar, V],
      Y = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      U = () => ["solid", "dashed", "dotted", "double", "none"],
      G = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      T = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      A = () => ["", "0", V],
      z = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      L = () => [Ar, V];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [go],
        spacing: [zt, sn],
        blur: ["none", "", ln, V],
        brightness: L(),
        borderColor: [e],
        borderRadius: ["none", "", "full", ln, V],
        borderSpacing: D(),
        borderWidth: Q(),
        contrast: L(),
        grayscale: A(),
        hueRotate: L(),
        invert: A(),
        gap: D(),
        gradientColorStops: [e],
        gradientColorStopPositions: [kw, sn],
        inset: $(),
        margin: $(),
        opacity: L(),
        padding: D(),
        saturate: L(),
        scale: L(),
        sepia: A(),
        skew: L(),
        space: D(),
        translate: D(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", V] }],
        container: ["container"],
        columns: [{ columns: [ln] }],
        "break-after": [{ "break-after": z() }],
        "break-before": [{ "break-before": z() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Y(), V] }],
        overflow: [{ overflow: _() }],
        "overflow-x": [{ "overflow-x": _() }],
        "overflow-y": [{ "overflow-y": _() }],
        overscroll: [{ overscroll: I() }],
        "overscroll-x": [{ "overscroll-x": I() }],
        "overscroll-y": [{ "overscroll-y": I() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [v] }],
        "inset-x": [{ "inset-x": [v] }],
        "inset-y": [{ "inset-y": [v] }],
        start: [{ start: [v] }],
        end: [{ end: [v] }],
        top: [{ top: [v] }],
        right: [{ right: [v] }],
        bottom: [{ bottom: [v] }],
        left: [{ left: [v] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", vo, V] }],
        basis: [{ basis: $() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", V] }],
        grow: [{ grow: A() }],
        shrink: [{ shrink: A() }],
        order: [{ order: ["first", "last", "none", vo, V] }],
        "grid-cols": [{ "grid-cols": [go] }],
        "col-start-end": [{ col: ["auto", { span: ["full", vo, V] }, V] }],
        "col-start": [{ "col-start": M() }],
        "col-end": [{ "col-end": M() }],
        "grid-rows": [{ "grid-rows": [go] }],
        "row-start-end": [{ row: ["auto", { span: [vo, V] }, V] }],
        "row-start": [{ "row-start": M() }],
        "row-end": [{ "row-end": M() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", V] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", V] }],
        gap: [{ gap: [c] }],
        "gap-x": [{ "gap-x": [c] }],
        "gap-y": [{ "gap-y": [c] }],
        "justify-content": [{ justify: ["normal", ...T()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...T(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...T(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [p] }],
        px: [{ px: [p] }],
        py: [{ py: [p] }],
        ps: [{ ps: [p] }],
        pe: [{ pe: [p] }],
        pt: [{ pt: [p] }],
        pr: [{ pr: [p] }],
        pb: [{ pb: [p] }],
        pl: [{ pl: [p] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [k] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [k] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", V, t] }],
        "min-w": [{ "min-w": [V, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              V,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [ln] },
              ln,
            ],
          },
        ],
        h: [{ h: [V, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [V, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", ln, sn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Hl,
            ],
          },
        ],
        "font-family": [{ font: [go] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              V,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Ar, Hl] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              zt,
              V,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", V] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", V] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [h] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [h] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...U(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", zt, sn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", zt, V] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: D() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              V,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", V] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [h] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Y(), Rw] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Nw] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Aw,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [y] }],
        "gradient-via-pos": [{ via: [y] }],
        "gradient-to-pos": [{ to: [y] }],
        "gradient-from": [{ from: [m] }],
        "gradient-via": [{ via: [m] }],
        "gradient-to": [{ to: [m] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [h] }],
        "border-style": [{ border: [...U(), "hidden"] }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [h] }],
        "divide-style": [{ divide: U() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...U()] }],
        "outline-offset": [{ "outline-offset": [zt, V] }],
        "outline-w": [{ outline: [zt, sn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: Q() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [h] }],
        "ring-offset-w": [{ "ring-offset": [zt, sn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", ln, _w] }],
        "shadow-color": [{ shadow: [go] }],
        opacity: [{ opacity: [h] }],
        "mix-blend": [{ "mix-blend": [...G(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": G() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", ln, V] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [g] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [h] }],
        "backdrop-saturate": [{ "backdrop-saturate": [g] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              V,
            ],
          },
        ],
        duration: [{ duration: L() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", V] }],
        delay: [{ delay: L() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", V] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [vo, V] }],
        "translate-x": [{ "translate-x": [N] }],
        "translate-y": [{ "translate-y": [N] }],
        "skew-x": [{ "skew-x": [P] }],
        "skew-y": [{ "skew-y": [P] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              V,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              V,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": D() }],
        "scroll-mx": [{ "scroll-mx": D() }],
        "scroll-my": [{ "scroll-my": D() }],
        "scroll-ms": [{ "scroll-ms": D() }],
        "scroll-me": [{ "scroll-me": D() }],
        "scroll-mt": [{ "scroll-mt": D() }],
        "scroll-mr": [{ "scroll-mr": D() }],
        "scroll-mb": [{ "scroll-mb": D() }],
        "scroll-ml": [{ "scroll-ml": D() }],
        "scroll-p": [{ "scroll-p": D() }],
        "scroll-px": [{ "scroll-px": D() }],
        "scroll-py": [{ "scroll-py": D() }],
        "scroll-ps": [{ "scroll-ps": D() }],
        "scroll-pe": [{ "scroll-pe": D() }],
        "scroll-pt": [{ "scroll-pt": D() }],
        "scroll-pr": [{ "scroll-pr": D() }],
        "scroll-pb": [{ "scroll-pb": D() }],
        "scroll-pl": [{ "scroll-pl": D() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", V] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [zt, sn, Hl] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  Dw = yw(Iw);
function sr(...e) {
  return Dw(mm(e));
}
const zw = J0,
  Cm = x.forwardRef(({ className: e, ...t }, n) =>
    E.jsx(am, {
      ref: n,
      className: sr(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
Cm.displayName = am.displayName;
const Fw = ew(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  Tm = x.forwardRef(({ className: e, variant: t, ...n }, r) =>
    E.jsx(um, { ref: r, className: sr(Fw({ variant: t }), e), ...n })
  );
Tm.displayName = um.displayName;
const $w = x.forwardRef(({ className: e, ...t }, n) =>
  E.jsx(fm, {
    ref: n,
    className: sr(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e
    ),
    ...t,
  })
);
$w.displayName = fm.displayName;
const Pm = x.forwardRef(({ className: e, ...t }, n) =>
  E.jsx(pm, {
    ref: n,
    className: sr(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: E.jsx(iw, { className: "h-4 w-4" }),
  })
);
Pm.displayName = pm.displayName;
const km = x.forwardRef(({ className: e, ...t }, n) =>
  E.jsx(cm, { ref: n, className: sr("text-sm font-semibold", e), ...t })
);
km.displayName = cm.displayName;
const bm = x.forwardRef(({ className: e, ...t }, n) =>
  E.jsx(dm, { ref: n, className: sr("text-sm opacity-90", e), ...t })
);
bm.displayName = dm.displayName;
function Uw() {
  const { toasts: e } = $h();
  return E.jsxs(zw, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
        return E.jsxs(
          Tm,
          {
            ...i,
            children: [
              E.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && E.jsx(km, { children: n }),
                  r && E.jsx(bm, { children: r }),
                ],
              }),
              o,
              E.jsx(Pm, {}),
            ],
          },
          t
        );
      }),
      E.jsx(Cm, {}),
    ],
  });
}
var $d = ["light", "dark"],
  Bw = "(prefers-color-scheme: dark)",
  Hw = x.createContext(void 0),
  Vw = { setTheme: (e) => {}, themes: [] },
  Ww = () => {
    var e;
    return (e = x.useContext(Hw)) != null ? e : Vw;
  };
x.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: i,
    value: s,
    attrs: l,
    nonce: a,
  }) => {
    let u = i === "system",
      d =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${l
              .map((y) => `'${y}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      f = o
        ? $d.includes(i) && i
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      c = (y, v = !1, w = !0) => {
        let h = s ? s[y] : y,
          p = v ? y + "|| ''" : `'${h}'`,
          g = "";
        return (
          o &&
            w &&
            !v &&
            $d.includes(y) &&
            (g += `d.style.colorScheme = '${y}';`),
          n === "class"
            ? v || h
              ? (g += `c.add(${p})`)
              : (g += "null")
            : h && (g += `d[s](n,${p})`),
          g
        );
      },
      m = e
        ? `!function(){${d}${c(e)}}()`
        : r
        ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${Bw}',m=window.matchMedia(t);if(m.media!==t||m.matches){${c(
            "dark"
          )}}else{${c("light")}}}else if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${c(s ? "x[e]" : "e", !0)}}${
            u ? "" : "else{" + c(i, !1, !1) + "}"
          }${f}}catch(e){}}()`
        : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${c(s ? "x[e]" : "e", !0)}}else{${c(
            i,
            !1,
            !1
          )};}${f}}catch(t){}}();`;
    return x.createElement("script", {
      nonce: a,
      dangerouslySetInnerHTML: { __html: m },
    });
  }
);
var Qw = (e) => {
    switch (e) {
      case "success":
        return Kw;
      case "info":
        return Xw;
      case "warning":
        return qw;
      case "error":
        return Zw;
      default:
        return null;
    }
  },
  Yw = Array(12).fill(0),
  Gw = ({ visible: e }) =>
    O.createElement(
      "div",
      { className: "sonner-loading-wrapper", "data-visible": e },
      O.createElement(
        "div",
        { className: "sonner-spinner" },
        Yw.map((t, n) =>
          O.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${n}`,
          })
        )
      )
    ),
  Kw = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  qw = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  Xw = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  Zw = O.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    O.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  Jw = () => {
    let [e, t] = O.useState(document.hidden);
    return (
      O.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Qa = 1,
  e1 = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Qa++,
            i = this.toasts.find((l) => l.id === o),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            i
              ? (this.toasts = this.toasts.map((l) =>
                  l.id === o
                    ? (this.publish({ ...l, ...e, id: o, title: n }),
                      { ...l, ...e, id: o, dismissible: s, title: n })
                    : l
                ))
              : this.addToast({ title: n, ...r, dismissible: s, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0;
          return (
            r
              .then(async (i) => {
                if (n1(i) && !i.ok) {
                  o = !1;
                  let s =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${i.status}`)
                        : t.error,
                    l =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${i.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: s,
                    description: l,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let s =
                      typeof t.success == "function"
                        ? await t.success(i)
                        : t.success,
                    l =
                      typeof t.description == "function"
                        ? await t.description(i)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: s,
                    description: l,
                  });
                }
              })
              .catch(async (i) => {
                if (t.error !== void 0) {
                  o = !1;
                  let s =
                      typeof t.error == "function" ? await t.error(i) : t.error,
                    l =
                      typeof t.description == "function"
                        ? await t.description(i)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: s,
                    description: l,
                  });
                }
              })
              .finally(() => {
                var i;
                o && (this.dismiss(n), (n = void 0)),
                  (i = t.finally) == null || i.call(t);
              }),
            n
          );
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Qa++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.subscribers = []),
        (this.toasts = []);
    }
  },
  Ke = new e1(),
  t1 = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Qa++;
    return Ke.addToast({ title: e, ...t, id: n }), n;
  },
  n1 = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  r1 = t1,
  o1 = () => Ke.toasts;
Object.assign(
  r1,
  {
    success: Ke.success,
    info: Ke.info,
    warning: Ke.warning,
    error: Ke.error,
    custom: Ke.custom,
    message: Ke.message,
    promise: Ke.promise,
    dismiss: Ke.dismiss,
    loading: Ke.loading,
  },
  { getHistory: o1 }
);
function i1(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
i1(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Li(e) {
  return e.label !== void 0;
}
var s1 = 3,
  l1 = "32px",
  a1 = 4e3,
  u1 = 356,
  c1 = 14,
  d1 = 20,
  f1 = 200;
function p1(...e) {
  return e.filter(Boolean).join(" ");
}
var h1 = (e) => {
  var t, n, r, o, i, s, l, a, u, d;
  let {
      invert: f,
      toast: c,
      unstyled: m,
      interacting: y,
      setHeights: v,
      visibleToasts: w,
      heights: h,
      index: p,
      toasts: g,
      expanded: S,
      removeToast: C,
      defaultRichColors: P,
      closeButton: k,
      style: N,
      cancelButtonStyle: I,
      actionButtonStyle: _,
      className: $ = "",
      descriptionClassName: D = "",
      duration: Q,
      position: M,
      gap: Y,
      loadingIcon: U,
      expandByDefault: G,
      classNames: T,
      icons: A,
      closeButtonAriaLabel: z = "Close toast",
      pauseWhenPageIsHidden: L,
      cn: F,
    } = e,
    [q, ce] = O.useState(!1),
    [Ye, J] = O.useState(!1),
    [dt, Jt] = O.useState(!1),
    [en, tn] = O.useState(!1),
    [di, lr] = O.useState(0),
    [zn, so] = O.useState(0),
    fi = O.useRef(null),
    nn = O.useRef(null),
    ul = p === 0,
    cl = p + 1 <= w,
    Ce = c.type,
    ar = c.dismissible !== !1,
    Pv = c.className || "",
    kv = c.descriptionClassName || "",
    pi = O.useMemo(
      () => h.findIndex((H) => H.toastId === c.id) || 0,
      [h, c.id]
    ),
    bv = O.useMemo(() => {
      var H;
      return (H = c.closeButton) != null ? H : k;
    }, [c.closeButton, k]),
    gc = O.useMemo(() => c.duration || Q || a1, [c.duration, Q]),
    dl = O.useRef(0),
    ur = O.useRef(0),
    yc = O.useRef(0),
    cr = O.useRef(null),
    [wc, Nv] = M.split("-"),
    xc = O.useMemo(
      () => h.reduce((H, re, te) => (te >= pi ? H : H + re.height), 0),
      [h, pi]
    ),
    Ec = Jw(),
    Rv = c.invert || f,
    fl = Ce === "loading";
  (ur.current = O.useMemo(() => pi * Y + xc, [pi, xc])),
    O.useEffect(() => {
      ce(!0);
    }, []),
    O.useLayoutEffect(() => {
      if (!q) return;
      let H = nn.current,
        re = H.style.height;
      H.style.height = "auto";
      let te = H.getBoundingClientRect().height;
      (H.style.height = re),
        so(te),
        v((Pt) =>
          Pt.find((kt) => kt.toastId === c.id)
            ? Pt.map((kt) => (kt.toastId === c.id ? { ...kt, height: te } : kt))
            : [{ toastId: c.id, height: te, position: c.position }, ...Pt]
        );
    }, [q, c.title, c.description, v, c.id]);
  let rn = O.useCallback(() => {
    J(!0),
      lr(ur.current),
      v((H) => H.filter((re) => re.toastId !== c.id)),
      setTimeout(() => {
        C(c);
      }, f1);
  }, [c, C, v, ur]);
  O.useEffect(() => {
    if (
      (c.promise && Ce === "loading") ||
      c.duration === 1 / 0 ||
      c.type === "loading"
    )
      return;
    let H,
      re = gc;
    return (
      S || y || (L && Ec)
        ? (() => {
            if (yc.current < dl.current) {
              let te = new Date().getTime() - dl.current;
              re = re - te;
            }
            yc.current = new Date().getTime();
          })()
        : re !== 1 / 0 &&
          ((dl.current = new Date().getTime()),
          (H = setTimeout(() => {
            var te;
            (te = c.onAutoClose) == null || te.call(c, c), rn();
          }, re))),
      () => clearTimeout(H)
    );
  }, [S, y, G, c, gc, rn, c.promise, Ce, L, Ec]),
    O.useEffect(() => {
      let H = nn.current;
      if (H) {
        let re = H.getBoundingClientRect().height;
        return (
          so(re),
          v((te) => [
            { toastId: c.id, height: re, position: c.position },
            ...te,
          ]),
          () => v((te) => te.filter((Pt) => Pt.toastId !== c.id))
        );
      }
    }, [v, c.id]),
    O.useEffect(() => {
      c.delete && rn();
    }, [rn, c.delete]);
  function Ov() {
    return A != null && A.loading
      ? O.createElement(
          "div",
          { className: "sonner-loader", "data-visible": Ce === "loading" },
          A.loading
        )
      : U
      ? O.createElement(
          "div",
          { className: "sonner-loader", "data-visible": Ce === "loading" },
          U
        )
      : O.createElement(Gw, { visible: Ce === "loading" });
  }
  return O.createElement(
    "li",
    {
      "aria-live": c.important ? "assertive" : "polite",
      "aria-atomic": "true",
      role: "status",
      tabIndex: 0,
      ref: nn,
      className: F(
        $,
        Pv,
        T == null ? void 0 : T.toast,
        (t = c == null ? void 0 : c.classNames) == null ? void 0 : t.toast,
        T == null ? void 0 : T.default,
        T == null ? void 0 : T[Ce],
        (n = c == null ? void 0 : c.classNames) == null ? void 0 : n[Ce]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = c.richColors) != null ? r : P,
      "data-styled": !(c.jsx || c.unstyled || m),
      "data-mounted": q,
      "data-promise": !!c.promise,
      "data-removed": Ye,
      "data-visible": cl,
      "data-y-position": wc,
      "data-x-position": Nv,
      "data-index": p,
      "data-front": ul,
      "data-swiping": dt,
      "data-dismissible": ar,
      "data-type": Ce,
      "data-invert": Rv,
      "data-swipe-out": en,
      "data-expanded": !!(S || (G && q)),
      style: {
        "--index": p,
        "--toasts-before": p,
        "--z-index": g.length - p,
        "--offset": `${Ye ? di : ur.current}px`,
        "--initial-height": G ? "auto" : `${zn}px`,
        ...N,
        ...c.style,
      },
      onPointerDown: (H) => {
        fl ||
          !ar ||
          ((fi.current = new Date()),
          lr(ur.current),
          H.target.setPointerCapture(H.pointerId),
          H.target.tagName !== "BUTTON" &&
            (Jt(!0), (cr.current = { x: H.clientX, y: H.clientY })));
      },
      onPointerUp: () => {
        var H, re, te, Pt;
        if (en || !ar) return;
        cr.current = null;
        let kt = Number(
            ((H = nn.current) == null
              ? void 0
              : H.style.getPropertyValue("--swipe-amount").replace("px", "")) ||
              0
          ),
          hi =
            new Date().getTime() -
            ((re = fi.current) == null ? void 0 : re.getTime()),
          Av = Math.abs(kt) / hi;
        if (Math.abs(kt) >= d1 || Av > 0.11) {
          lr(ur.current),
            (te = c.onDismiss) == null || te.call(c, c),
            rn(),
            tn(!0);
          return;
        }
        (Pt = nn.current) == null ||
          Pt.style.setProperty("--swipe-amount", "0px"),
          Jt(!1);
      },
      onPointerMove: (H) => {
        var re;
        if (!cr.current || !ar) return;
        let te = H.clientY - cr.current.y,
          Pt = H.clientX - cr.current.x,
          kt = (wc === "top" ? Math.min : Math.max)(0, te),
          hi = H.pointerType === "touch" ? 10 : 2;
        Math.abs(kt) > hi
          ? (re = nn.current) == null ||
            re.style.setProperty("--swipe-amount", `${te}px`)
          : Math.abs(Pt) > hi && (cr.current = null);
      },
    },
    bv && !c.jsx
      ? O.createElement(
          "button",
          {
            "aria-label": z,
            "data-disabled": fl,
            "data-close-button": !0,
            onClick:
              fl || !ar
                ? () => {}
                : () => {
                    var H;
                    rn(), (H = c.onDismiss) == null || H.call(c, c);
                  },
            className: F(
              T == null ? void 0 : T.closeButton,
              (o = c == null ? void 0 : c.classNames) == null
                ? void 0
                : o.closeButton
            ),
          },
          O.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "12",
              height: "12",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            O.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            O.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
          )
        )
      : null,
    c.jsx || O.isValidElement(c.title)
      ? c.jsx || c.title
      : O.createElement(
          O.Fragment,
          null,
          Ce || c.icon || c.promise
            ? O.createElement(
                "div",
                {
                  "data-icon": "",
                  className: F(
                    T == null ? void 0 : T.icon,
                    (i = c == null ? void 0 : c.classNames) == null
                      ? void 0
                      : i.icon
                  ),
                },
                c.promise || (c.type === "loading" && !c.icon)
                  ? c.icon || Ov()
                  : null,
                c.type !== "loading"
                  ? c.icon || (A == null ? void 0 : A[Ce]) || Qw(Ce)
                  : null
              )
            : null,
          O.createElement(
            "div",
            {
              "data-content": "",
              className: F(
                T == null ? void 0 : T.content,
                (s = c == null ? void 0 : c.classNames) == null
                  ? void 0
                  : s.content
              ),
            },
            O.createElement(
              "div",
              {
                "data-title": "",
                className: F(
                  T == null ? void 0 : T.title,
                  (l = c == null ? void 0 : c.classNames) == null
                    ? void 0
                    : l.title
                ),
              },
              c.title
            ),
            c.description
              ? O.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: F(
                      D,
                      kv,
                      T == null ? void 0 : T.description,
                      (a = c == null ? void 0 : c.classNames) == null
                        ? void 0
                        : a.description
                    ),
                  },
                  c.description
                )
              : null
          ),
          O.isValidElement(c.cancel)
            ? c.cancel
            : c.cancel && Li(c.cancel)
            ? O.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: c.cancelButtonStyle || I,
                  onClick: (H) => {
                    var re, te;
                    Li(c.cancel) &&
                      ar &&
                      ((te = (re = c.cancel).onClick) == null || te.call(re, H),
                      rn());
                  },
                  className: F(
                    T == null ? void 0 : T.cancelButton,
                    (u = c == null ? void 0 : c.classNames) == null
                      ? void 0
                      : u.cancelButton
                  ),
                },
                c.cancel.label
              )
            : null,
          O.isValidElement(c.action)
            ? c.action
            : c.action && Li(c.action)
            ? O.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: c.actionButtonStyle || _,
                  onClick: (H) => {
                    var re, te;
                    Li(c.action) &&
                      (H.defaultPrevented ||
                        ((te = (re = c.action).onClick) == null ||
                          te.call(re, H),
                        rn()));
                  },
                  className: F(
                    T == null ? void 0 : T.actionButton,
                    (d = c == null ? void 0 : c.classNames) == null
                      ? void 0
                      : d.actionButton
                  ),
                },
                c.action.label
              )
            : null
        )
  );
};
function Ud() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
var m1 = (e) => {
  let {
      invert: t,
      position: n = "bottom-right",
      hotkey: r = ["altKey", "KeyT"],
      expand: o,
      closeButton: i,
      className: s,
      offset: l,
      theme: a = "light",
      richColors: u,
      duration: d,
      style: f,
      visibleToasts: c = s1,
      toastOptions: m,
      dir: y = Ud(),
      gap: v = c1,
      loadingIcon: w,
      icons: h,
      containerAriaLabel: p = "Notifications",
      pauseWhenPageIsHidden: g,
      cn: S = p1,
    } = e,
    [C, P] = O.useState([]),
    k = O.useMemo(
      () =>
        Array.from(
          new Set(
            [n].concat(C.filter((L) => L.position).map((L) => L.position))
          )
        ),
      [C, n]
    ),
    [N, I] = O.useState([]),
    [_, $] = O.useState(!1),
    [D, Q] = O.useState(!1),
    [M, Y] = O.useState(
      a !== "system"
        ? a
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    U = O.useRef(null),
    G = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    T = O.useRef(null),
    A = O.useRef(!1),
    z = O.useCallback(
      (L) => {
        var F;
        ((F = C.find((q) => q.id === L.id)) != null && F.delete) ||
          Ke.dismiss(L.id),
          P((q) => q.filter(({ id: ce }) => ce !== L.id));
      },
      [C]
    );
  return (
    O.useEffect(
      () =>
        Ke.subscribe((L) => {
          if (L.dismiss) {
            P((F) => F.map((q) => (q.id === L.id ? { ...q, delete: !0 } : q)));
            return;
          }
          setTimeout(() => {
            zh.flushSync(() => {
              P((F) => {
                let q = F.findIndex((ce) => ce.id === L.id);
                return q !== -1
                  ? [...F.slice(0, q), { ...F[q], ...L }, ...F.slice(q + 1)]
                  : [L, ...F];
              });
            });
          });
        }),
      []
    ),
    O.useEffect(() => {
      if (a !== "system") {
        Y(a);
        return;
      }
      a === "system" &&
        (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? Y("dark")
          : Y("light")),
        typeof window < "u" &&
          window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", ({ matches: L }) => {
              Y(L ? "dark" : "light");
            });
    }, [a]),
    O.useEffect(() => {
      C.length <= 1 && $(!1);
    }, [C]),
    O.useEffect(() => {
      let L = (F) => {
        var q, ce;
        r.every((Ye) => F[Ye] || F.code === Ye) &&
          ($(!0), (q = U.current) == null || q.focus()),
          F.code === "Escape" &&
            (document.activeElement === U.current ||
              ((ce = U.current) != null &&
                ce.contains(document.activeElement))) &&
            $(!1);
      };
      return (
        document.addEventListener("keydown", L),
        () => document.removeEventListener("keydown", L)
      );
    }, [r]),
    O.useEffect(() => {
      if (U.current)
        return () => {
          T.current &&
            (T.current.focus({ preventScroll: !0 }),
            (T.current = null),
            (A.current = !1));
        };
    }, [U.current]),
    C.length
      ? O.createElement(
          "section",
          { "aria-label": `${p} ${G}`, tabIndex: -1 },
          k.map((L, F) => {
            var q;
            let [ce, Ye] = L.split("-");
            return O.createElement(
              "ol",
              {
                key: L,
                dir: y === "auto" ? Ud() : y,
                tabIndex: -1,
                ref: U,
                className: s,
                "data-sonner-toaster": !0,
                "data-theme": M,
                "data-y-position": ce,
                "data-x-position": Ye,
                style: {
                  "--front-toast-height": `${
                    ((q = N[0]) == null ? void 0 : q.height) || 0
                  }px`,
                  "--offset": typeof l == "number" ? `${l}px` : l || l1,
                  "--width": `${u1}px`,
                  "--gap": `${v}px`,
                  ...f,
                },
                onBlur: (J) => {
                  A.current &&
                    !J.currentTarget.contains(J.relatedTarget) &&
                    ((A.current = !1),
                    T.current &&
                      (T.current.focus({ preventScroll: !0 }),
                      (T.current = null)));
                },
                onFocus: (J) => {
                  (J.target instanceof HTMLElement &&
                    J.target.dataset.dismissible === "false") ||
                    A.current ||
                    ((A.current = !0), (T.current = J.relatedTarget));
                },
                onMouseEnter: () => $(!0),
                onMouseMove: () => $(!0),
                onMouseLeave: () => {
                  D || $(!1);
                },
                onPointerDown: (J) => {
                  (J.target instanceof HTMLElement &&
                    J.target.dataset.dismissible === "false") ||
                    Q(!0);
                },
                onPointerUp: () => Q(!1),
              },
              C.filter((J) => (!J.position && F === 0) || J.position === L).map(
                (J, dt) => {
                  var Jt, en;
                  return O.createElement(h1, {
                    key: J.id,
                    icons: h,
                    index: dt,
                    toast: J,
                    defaultRichColors: u,
                    duration:
                      (Jt = m == null ? void 0 : m.duration) != null ? Jt : d,
                    className: m == null ? void 0 : m.className,
                    descriptionClassName:
                      m == null ? void 0 : m.descriptionClassName,
                    invert: t,
                    visibleToasts: c,
                    closeButton:
                      (en = m == null ? void 0 : m.closeButton) != null
                        ? en
                        : i,
                    interacting: D,
                    position: L,
                    style: m == null ? void 0 : m.style,
                    unstyled: m == null ? void 0 : m.unstyled,
                    classNames: m == null ? void 0 : m.classNames,
                    cancelButtonStyle: m == null ? void 0 : m.cancelButtonStyle,
                    actionButtonStyle: m == null ? void 0 : m.actionButtonStyle,
                    removeToast: z,
                    toasts: C.filter((tn) => tn.position == J.position),
                    heights: N.filter((tn) => tn.position == J.position),
                    setHeights: I,
                    expandByDefault: o,
                    gap: v,
                    loadingIcon: w,
                    expanded: _,
                    pauseWhenPageIsHidden: g,
                    cn: S,
                  });
                }
              )
            );
          })
        )
      : null
  );
};
const v1 = ({ ...e }) => {
    const { theme: t = "system" } = Ww();
    return E.jsx(m1, {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...e,
    });
  },
  g1 = ["top", "right", "bottom", "left"],
  An = Math.min,
  Xe = Math.max,
  ks = Math.round,
  Ii = Math.floor,
  _n = (e) => ({ x: e, y: e }),
  y1 = { left: "right", right: "left", bottom: "top", top: "bottom" },
  w1 = { start: "end", end: "start" };
function Ya(e, t, n) {
  return Xe(e, An(t, n));
}
function qt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Xt(e) {
  return e.split("-")[0];
}
function oo(e) {
  return e.split("-")[1];
}
function sc(e) {
  return e === "x" ? "y" : "x";
}
function lc(e) {
  return e === "y" ? "height" : "width";
}
function Mn(e) {
  return ["top", "bottom"].includes(Xt(e)) ? "y" : "x";
}
function ac(e) {
  return sc(Mn(e));
}
function x1(e, t, n) {
  n === void 0 && (n = !1);
  const r = oo(e),
    o = ac(e),
    i = lc(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (s = bs(s)), [s, bs(s)];
}
function E1(e) {
  const t = bs(e);
  return [Ga(e), t, Ga(t)];
}
function Ga(e) {
  return e.replace(/start|end/g, (t) => w1[t]);
}
function S1(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function C1(e, t, n, r) {
  const o = oo(e);
  let i = S1(Xt(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(Ga)))), i
  );
}
function bs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => y1[t]);
}
function T1(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Nm(e) {
  return typeof e != "number"
    ? T1(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Ns(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function Bd(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = Mn(t),
    s = ac(t),
    l = lc(s),
    a = Xt(t),
    u = i === "y",
    d = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    c = r[l] / 2 - o[l] / 2;
  let m;
  switch (a) {
    case "top":
      m = { x: d, y: r.y - o.height };
      break;
    case "bottom":
      m = { x: d, y: r.y + r.height };
      break;
    case "right":
      m = { x: r.x + r.width, y: f };
      break;
    case "left":
      m = { x: r.x - o.width, y: f };
      break;
    default:
      m = { x: r.x, y: r.y };
  }
  switch (oo(t)) {
    case "start":
      m[s] -= c * (n && u ? -1 : 1);
      break;
    case "end":
      m[s] += c * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const P1 = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: s,
    } = n,
    l = i.filter(Boolean),
    a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: d, y: f } = Bd(u, r, a),
    c = r,
    m = {},
    y = 0;
  for (let v = 0; v < l.length; v++) {
    const { name: w, fn: h } = l[v],
      {
        x: p,
        y: g,
        data: S,
        reset: C,
      } = await h({
        x: d,
        y: f,
        initialPlacement: r,
        placement: c,
        strategy: o,
        middlewareData: m,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (d = p ?? d),
      (f = g ?? f),
      (m = { ...m, [w]: { ...m[w], ...S } }),
      C &&
        y <= 50 &&
        (y++,
        typeof C == "object" &&
          (C.placement && (c = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : C.rects),
          ({ x: d, y: f } = Bd(u, c, a))),
        (v = -1));
  }
  return { x: d, y: f, placement: c, strategy: o, middlewareData: m };
};
async function Xo(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: l, strategy: a } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: f = "floating",
      altBoundary: c = !1,
      padding: m = 0,
    } = qt(t, e),
    y = Nm(m),
    w = l[c ? (f === "floating" ? "reference" : "floating") : f],
    h = Ns(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null ||
          n
            ? w
            : w.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: d,
        strategy: a,
      })
    ),
    p =
      f === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    g = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(l.floating)),
    S = (await (i.isElement == null ? void 0 : i.isElement(g)))
      ? (await (i.getScale == null ? void 0 : i.getScale(g))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = Ns(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: p,
            offsetParent: g,
            strategy: a,
          })
        : p
    );
  return {
    top: (h.top - C.top + y.top) / S.y,
    bottom: (C.bottom - h.bottom + y.bottom) / S.y,
    left: (h.left - C.left + y.left) / S.x,
    right: (C.right - h.right + y.right) / S.x,
  };
}
const k1 = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: l,
          middlewareData: a,
        } = t,
        { element: u, padding: d = 0 } = qt(e, t) || {};
      if (u == null) return {};
      const f = Nm(d),
        c = { x: n, y: r },
        m = ac(o),
        y = lc(m),
        v = await s.getDimensions(u),
        w = m === "y",
        h = w ? "top" : "left",
        p = w ? "bottom" : "right",
        g = w ? "clientHeight" : "clientWidth",
        S = i.reference[y] + i.reference[m] - c[m] - i.floating[y],
        C = c[m] - i.reference[m],
        P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let k = P ? P[g] : 0;
      (!k || !(await (s.isElement == null ? void 0 : s.isElement(P)))) &&
        (k = l.floating[g] || i.floating[y]);
      const N = S / 2 - C / 2,
        I = k / 2 - v[y] / 2 - 1,
        _ = An(f[h], I),
        $ = An(f[p], I),
        D = _,
        Q = k - v[y] - $,
        M = k / 2 - v[y] / 2 + N,
        Y = Ya(D, M, Q),
        U =
          !a.arrow &&
          oo(o) != null &&
          M !== Y &&
          i.reference[y] / 2 - (M < D ? _ : $) - v[y] / 2 < 0,
        G = U ? (M < D ? M - D : M - Q) : 0;
      return {
        [m]: c[m] + G,
        data: {
          [m]: Y,
          centerOffset: M - Y - G,
          ...(U && { alignmentOffset: G }),
        },
        reset: U,
      };
    },
  }),
  b1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: l,
              platform: a,
              elements: u,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: f = !0,
              fallbackPlacements: c,
              fallbackStrategy: m = "bestFit",
              fallbackAxisSideDirection: y = "none",
              flipAlignment: v = !0,
              ...w
            } = qt(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const h = Xt(o),
            p = Mn(l),
            g = Xt(l) === l,
            S = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
            C = c || (g || !v ? [bs(l)] : E1(l)),
            P = y !== "none";
          !c && P && C.push(...C1(l, v, y, S));
          const k = [l, ...C],
            N = await Xo(t, w),
            I = [];
          let _ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((d && I.push(N[h]), f)) {
            const M = x1(o, s, S);
            I.push(N[M[0]], N[M[1]]);
          }
          if (
            ((_ = [..._, { placement: o, overflows: I }]),
            !I.every((M) => M <= 0))
          ) {
            var $, D;
            const M = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1,
              Y = k[M];
            if (Y)
              return {
                data: { index: M, overflows: _ },
                reset: { placement: Y },
              };
            let U =
              (D = _.filter((G) => G.overflows[0] <= 0).sort(
                (G, T) => G.overflows[1] - T.overflows[1]
              )[0]) == null
                ? void 0
                : D.placement;
            if (!U)
              switch (m) {
                case "bestFit": {
                  var Q;
                  const G =
                    (Q = _.filter((T) => {
                      if (P) {
                        const A = Mn(T.placement);
                        return A === p || A === "y";
                      }
                      return !0;
                    })
                      .map((T) => [
                        T.placement,
                        T.overflows
                          .filter((A) => A > 0)
                          .reduce((A, z) => A + z, 0),
                      ])
                      .sort((T, A) => T[1] - A[1])[0]) == null
                      ? void 0
                      : Q[0];
                  G && (U = G);
                  break;
                }
                case "initialPlacement":
                  U = l;
                  break;
              }
            if (o !== U) return { reset: { placement: U } };
          }
          return {};
        },
      }
    );
  };
function Hd(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Vd(e) {
  return g1.some((t) => e[t] >= 0);
}
const N1 = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = qt(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await Xo(t, { ...o, elementContext: "reference" }),
              s = Hd(i, n.reference);
            return {
              data: { referenceHiddenOffsets: s, referenceHidden: Vd(s) },
            };
          }
          case "escaped": {
            const i = await Xo(t, { ...o, altBoundary: !0 }),
              s = Hd(i, n.floating);
            return { data: { escapedOffsets: s, escaped: Vd(s) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function R1(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = Xt(n),
    l = oo(n),
    a = Mn(n) === "y",
    u = ["left", "top"].includes(s) ? -1 : 1,
    d = i && a ? -1 : 1,
    f = qt(t, e);
  let {
    mainAxis: c,
    crossAxis: m,
    alignmentAxis: y,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    l && typeof y == "number" && (m = l === "end" ? y * -1 : y),
    a ? { x: m * d, y: c * u } : { x: c * u, y: m * d }
  );
}
const O1 = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: l } = t,
            a = await R1(t, e);
          return s === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: i + a.y, data: { ...a, placement: s } };
        },
      }
    );
  },
  A1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: l = {
                fn: (w) => {
                  let { x: h, y: p } = w;
                  return { x: h, y: p };
                },
              },
              ...a
            } = qt(e, t),
            u = { x: n, y: r },
            d = await Xo(t, a),
            f = Mn(Xt(o)),
            c = sc(f);
          let m = u[c],
            y = u[f];
          if (i) {
            const w = c === "y" ? "top" : "left",
              h = c === "y" ? "bottom" : "right",
              p = m + d[w],
              g = m - d[h];
            m = Ya(p, m, g);
          }
          if (s) {
            const w = f === "y" ? "top" : "left",
              h = f === "y" ? "bottom" : "right",
              p = y + d[w],
              g = y - d[h];
            y = Ya(p, y, g);
          }
          const v = l.fn({ ...t, [c]: m, [f]: y });
          return {
            ...v,
            data: { x: v.x - n, y: v.y - r, enabled: { [c]: i, [f]: s } },
          };
        },
      }
    );
  },
  _1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = qt(e, t),
            d = { x: n, y: r },
            f = Mn(o),
            c = sc(f);
          let m = d[c],
            y = d[f];
          const v = qt(l, t),
            w =
              typeof v == "number"
                ? { mainAxis: v, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...v };
          if (a) {
            const g = c === "y" ? "height" : "width",
              S = i.reference[c] - i.floating[g] + w.mainAxis,
              C = i.reference[c] + i.reference[g] - w.mainAxis;
            m < S ? (m = S) : m > C && (m = C);
          }
          if (u) {
            var h, p;
            const g = c === "y" ? "width" : "height",
              S = ["top", "left"].includes(Xt(o)),
              C =
                i.reference[f] -
                i.floating[g] +
                ((S && ((h = s.offset) == null ? void 0 : h[f])) || 0) +
                (S ? 0 : w.crossAxis),
              P =
                i.reference[f] +
                i.reference[g] +
                (S ? 0 : ((p = s.offset) == null ? void 0 : p[f]) || 0) -
                (S ? w.crossAxis : 0);
            y < C ? (y = C) : y > P && (y = P);
          }
          return { [c]: m, [f]: y };
        },
      }
    );
  },
  M1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: l } = t,
            { apply: a = () => {}, ...u } = qt(e, t),
            d = await Xo(t, u),
            f = Xt(o),
            c = oo(o),
            m = Mn(o) === "y",
            { width: y, height: v } = i.floating;
          let w, h;
          f === "top" || f === "bottom"
            ? ((w = f),
              (h =
                c ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(l.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((h = f), (w = c === "end" ? "top" : "bottom"));
          const p = v - d.top - d.bottom,
            g = y - d.left - d.right,
            S = An(v - d[w], p),
            C = An(y - d[h], g),
            P = !t.middlewareData.shift;
          let k = S,
            N = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (N = g),
            (r = t.middlewareData.shift) != null && r.enabled.y && (k = p),
            P && !c)
          ) {
            const _ = Xe(d.left, 0),
              $ = Xe(d.right, 0),
              D = Xe(d.top, 0),
              Q = Xe(d.bottom, 0);
            m
              ? (N = y - 2 * (_ !== 0 || $ !== 0 ? _ + $ : Xe(d.left, d.right)))
              : (k =
                  v - 2 * (D !== 0 || Q !== 0 ? D + Q : Xe(d.top, d.bottom)));
          }
          await a({ ...t, availableWidth: N, availableHeight: k });
          const I = await s.getDimensions(l.floating);
          return y !== I.width || v !== I.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Js() {
  return typeof window < "u";
}
function io(e) {
  return Rm(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function et(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Dt(e) {
  var t;
  return (t = (Rm(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Rm(e) {
  return Js() ? e instanceof Node || e instanceof et(e).Node : !1;
}
function Ct(e) {
  return Js() ? e instanceof Element || e instanceof et(e).Element : !1;
}
function It(e) {
  return Js() ? e instanceof HTMLElement || e instanceof et(e).HTMLElement : !1;
}
function Wd(e) {
  return !Js() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof et(e).ShadowRoot;
}
function ci(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Tt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function j1(e) {
  return ["table", "td", "th"].includes(io(e));
}
function el(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function uc(e) {
  const t = cc(),
    n = Ct(e) ? Tt(e) : e;
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function L1(e) {
  let t = jn(e);
  for (; It(t) && !Xr(t); ) {
    if (uc(t)) return t;
    if (el(t)) return null;
    t = jn(t);
  }
  return null;
}
function cc() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Xr(e) {
  return ["html", "body", "#document"].includes(io(e));
}
function Tt(e) {
  return et(e).getComputedStyle(e);
}
function tl(e) {
  return Ct(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function jn(e) {
  if (io(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Wd(e) && e.host) || Dt(e);
  return Wd(t) ? t.host : t;
}
function Om(e) {
  const t = jn(e);
  return Xr(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : It(t) && ci(t)
    ? t
    : Om(t);
}
function Zo(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Om(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = et(o);
  if (i) {
    const l = Ka(s);
    return t.concat(
      s,
      s.visualViewport || [],
      ci(o) ? o : [],
      l && n ? Zo(l) : []
    );
  }
  return t.concat(o, Zo(o, [], n));
}
function Ka(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Am(e) {
  const t = Tt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = It(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    l = ks(n) !== i || ks(r) !== s;
  return l && ((n = i), (r = s)), { width: n, height: r, $: l };
}
function dc(e) {
  return Ct(e) ? e : e.contextElement;
}
function _r(e) {
  const t = dc(e);
  if (!It(t)) return _n(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = Am(t);
  let s = (i ? ks(n.width) : n.width) / r,
    l = (i ? ks(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: s, y: l }
  );
}
const I1 = _n(0);
function _m(e) {
  const t = et(e);
  return !cc() || !t.visualViewport
    ? I1
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function D1(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== et(e)) ? !1 : t;
}
function rr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = dc(e);
  let s = _n(1);
  t && (r ? Ct(r) && (s = _r(r)) : (s = _r(e)));
  const l = D1(i, n, r) ? _m(i) : _n(0);
  let a = (o.left + l.x) / s.x,
    u = (o.top + l.y) / s.y,
    d = o.width / s.x,
    f = o.height / s.y;
  if (i) {
    const c = et(i),
      m = r && Ct(r) ? et(r) : r;
    let y = c,
      v = Ka(y);
    for (; v && r && m !== y; ) {
      const w = _r(v),
        h = v.getBoundingClientRect(),
        p = Tt(v),
        g = h.left + (v.clientLeft + parseFloat(p.paddingLeft)) * w.x,
        S = h.top + (v.clientTop + parseFloat(p.paddingTop)) * w.y;
      (a *= w.x),
        (u *= w.y),
        (d *= w.x),
        (f *= w.y),
        (a += g),
        (u += S),
        (y = et(v)),
        (v = Ka(y));
    }
  }
  return Ns({ width: d, height: f, x: a, y: u });
}
function z1(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = Dt(r),
    l = t ? el(t.floating) : !1;
  if (r === s || (l && i)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = _n(1);
  const d = _n(0),
    f = It(r);
  if (
    (f || (!f && !i)) &&
    ((io(r) !== "body" || ci(s)) && (a = tl(r)), It(r))
  ) {
    const c = rr(r);
    (u = _r(r)), (d.x = c.x + r.clientLeft), (d.y = c.y + r.clientTop);
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + d.x,
    y: n.y * u.y - a.scrollTop * u.y + d.y,
  };
}
function F1(e) {
  return Array.from(e.getClientRects());
}
function qa(e, t) {
  const n = tl(e).scrollLeft;
  return t ? t.left + n : rr(Dt(e)).left + n;
}
function $1(e) {
  const t = Dt(e),
    n = tl(e),
    r = e.ownerDocument.body,
    o = Xe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = Xe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + qa(e);
  const l = -n.scrollTop;
  return (
    Tt(r).direction === "rtl" && (s += Xe(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: l }
  );
}
function U1(e, t) {
  const n = et(e),
    r = Dt(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    l = 0,
    a = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const u = cc();
    (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: i, height: s, x: l, y: a };
}
function B1(e, t) {
  const n = rr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = It(e) ? _r(e) : _n(1),
    s = e.clientWidth * i.x,
    l = e.clientHeight * i.y,
    a = o * i.x,
    u = r * i.y;
  return { width: s, height: l, x: a, y: u };
}
function Qd(e, t, n) {
  let r;
  if (t === "viewport") r = U1(e, n);
  else if (t === "document") r = $1(Dt(e));
  else if (Ct(t)) r = B1(t, n);
  else {
    const o = _m(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return Ns(r);
}
function Mm(e, t) {
  const n = jn(e);
  return n === t || !Ct(n) || Xr(n)
    ? !1
    : Tt(n).position === "fixed" || Mm(n, t);
}
function H1(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Zo(e, [], !1).filter((l) => Ct(l) && io(l) !== "body"),
    o = null;
  const i = Tt(e).position === "fixed";
  let s = i ? jn(e) : e;
  for (; Ct(s) && !Xr(s); ) {
    const l = Tt(s),
      a = uc(s);
    !a && l.position === "fixed" && (o = null),
      (
        i
          ? !a && !o
          : (!a &&
              l.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (ci(s) && !a && Mm(e, s))
      )
        ? (r = r.filter((d) => d !== s))
        : (o = l),
      (s = jn(s));
  }
  return t.set(e, r), r;
}
function V1(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? el(t)
          ? []
          : H1(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = s[0],
    a = s.reduce((u, d) => {
      const f = Qd(t, d, o);
      return (
        (u.top = Xe(f.top, u.top)),
        (u.right = An(f.right, u.right)),
        (u.bottom = An(f.bottom, u.bottom)),
        (u.left = Xe(f.left, u.left)),
        u
      );
    }, Qd(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function W1(e) {
  const { width: t, height: n } = Am(e);
  return { width: t, height: n };
}
function Q1(e, t, n) {
  const r = It(t),
    o = Dt(t),
    i = n === "fixed",
    s = rr(e, !0, i, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = _n(0);
  if (r || (!r && !i))
    if (((io(t) !== "body" || ci(o)) && (l = tl(t)), r)) {
      const m = rr(t, !0, i, t);
      (a.x = m.x + t.clientLeft), (a.y = m.y + t.clientTop);
    } else o && (a.x = qa(o));
  let u = 0,
    d = 0;
  if (o && !r && !i) {
    const m = o.getBoundingClientRect();
    (d = m.top + l.scrollTop), (u = m.left + l.scrollLeft - qa(o, m));
  }
  const f = s.left + l.scrollLeft - a.x - u,
    c = s.top + l.scrollTop - a.y - d;
  return { x: f, y: c, width: s.width, height: s.height };
}
function Vl(e) {
  return Tt(e).position === "static";
}
function Yd(e, t) {
  if (!It(e) || Tt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Dt(e) === n && (n = n.ownerDocument.body), n;
}
function jm(e, t) {
  const n = et(e);
  if (el(e)) return n;
  if (!It(e)) {
    let o = jn(e);
    for (; o && !Xr(o); ) {
      if (Ct(o) && !Vl(o)) return o;
      o = jn(o);
    }
    return n;
  }
  let r = Yd(e, t);
  for (; r && j1(r) && Vl(r); ) r = Yd(r, t);
  return r && Xr(r) && Vl(r) && !uc(r) ? n : r || L1(e) || n;
}
const Y1 = async function (e) {
  const t = this.getOffsetParent || jm,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: Q1(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function G1(e) {
  return Tt(e).direction === "rtl";
}
const K1 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: z1,
  getDocumentElement: Dt,
  getClippingRect: V1,
  getOffsetParent: jm,
  getElementRects: Y1,
  getClientRects: F1,
  getDimensions: W1,
  getScale: _r,
  isElement: Ct,
  isRTL: G1,
};
function q1(e, t) {
  let n = null,
    r;
  const o = Dt(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), i();
    const { left: u, top: d, width: f, height: c } = e.getBoundingClientRect();
    if ((l || t(), !f || !c)) return;
    const m = Ii(d),
      y = Ii(o.clientWidth - (u + f)),
      v = Ii(o.clientHeight - (d + c)),
      w = Ii(u),
      p = {
        rootMargin: -m + "px " + -y + "px " + -v + "px " + -w + "px",
        threshold: Xe(0, An(1, a)) || 1,
      };
    let g = !0;
    function S(C) {
      const P = C[0].intersectionRatio;
      if (P !== a) {
        if (!g) return s();
        P
          ? s(!1, P)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      g = !1;
    }
    try {
      n = new IntersectionObserver(S, { ...p, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, p);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function X1(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    u = dc(e),
    d = o || i ? [...(u ? Zo(u) : []), ...Zo(t)] : [];
  d.forEach((h) => {
    o && h.addEventListener("scroll", n, { passive: !0 }),
      i && h.addEventListener("resize", n);
  });
  const f = u && l ? q1(u, n) : null;
  let c = -1,
    m = null;
  s &&
    ((m = new ResizeObserver((h) => {
      let [p] = h;
      p &&
        p.target === u &&
        m &&
        (m.unobserve(t),
        cancelAnimationFrame(c),
        (c = requestAnimationFrame(() => {
          var g;
          (g = m) == null || g.observe(t);
        }))),
        n();
    })),
    u && !a && m.observe(u),
    m.observe(t));
  let y,
    v = a ? rr(e) : null;
  a && w();
  function w() {
    const h = rr(e);
    v &&
      (h.x !== v.x ||
        h.y !== v.y ||
        h.width !== v.width ||
        h.height !== v.height) &&
      n(),
      (v = h),
      (y = requestAnimationFrame(w));
  }
  return (
    n(),
    () => {
      var h;
      d.forEach((p) => {
        o && p.removeEventListener("scroll", n),
          i && p.removeEventListener("resize", n);
      }),
        f == null || f(),
        (h = m) == null || h.disconnect(),
        (m = null),
        a && cancelAnimationFrame(y);
    }
  );
}
const Z1 = O1,
  J1 = A1,
  ex = b1,
  tx = M1,
  nx = N1,
  Gd = k1,
  rx = _1,
  ox = (e, t, n) => {
    const r = new Map(),
      o = { platform: K1, ...n },
      i = { ...o.platform, _c: r };
    return P1(e, t, { ...o, platform: i });
  };
var Zi = typeof document < "u" ? x.useLayoutEffect : x.useEffect;
function Rs(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Rs(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Rs(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Lm(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Kd(e, t) {
  const n = Lm(e);
  return Math.round(t * n) / n;
}
function Wl(e) {
  const t = x.useRef(e);
  return (
    Zi(() => {
      t.current = e;
    }),
    t
  );
}
function ix(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: l = !0,
      whileElementsMounted: a,
      open: u,
    } = e,
    [d, f] = x.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [c, m] = x.useState(r);
  Rs(c, r) || m(r);
  const [y, v] = x.useState(null),
    [w, h] = x.useState(null),
    p = x.useCallback((T) => {
      T !== P.current && ((P.current = T), v(T));
    }, []),
    g = x.useCallback((T) => {
      T !== k.current && ((k.current = T), h(T));
    }, []),
    S = i || y,
    C = s || w,
    P = x.useRef(null),
    k = x.useRef(null),
    N = x.useRef(d),
    I = a != null,
    _ = Wl(a),
    $ = Wl(o),
    D = Wl(u),
    Q = x.useCallback(() => {
      if (!P.current || !k.current) return;
      const T = { placement: t, strategy: n, middleware: c };
      $.current && (T.platform = $.current),
        ox(P.current, k.current, T).then((A) => {
          const z = { ...A, isPositioned: D.current !== !1 };
          M.current &&
            !Rs(N.current, z) &&
            ((N.current = z),
            ui.flushSync(() => {
              f(z);
            }));
        });
    }, [c, t, n, $, D]);
  Zi(() => {
    u === !1 &&
      N.current.isPositioned &&
      ((N.current.isPositioned = !1), f((T) => ({ ...T, isPositioned: !1 })));
  }, [u]);
  const M = x.useRef(!1);
  Zi(
    () => (
      (M.current = !0),
      () => {
        M.current = !1;
      }
    ),
    []
  ),
    Zi(() => {
      if ((S && (P.current = S), C && (k.current = C), S && C)) {
        if (_.current) return _.current(S, C, Q);
        Q();
      }
    }, [S, C, Q, _, I]);
  const Y = x.useMemo(
      () => ({ reference: P, floating: k, setReference: p, setFloating: g }),
      [p, g]
    ),
    U = x.useMemo(() => ({ reference: S, floating: C }), [S, C]),
    G = x.useMemo(() => {
      const T = { position: n, left: 0, top: 0 };
      if (!U.floating) return T;
      const A = Kd(U.floating, d.x),
        z = Kd(U.floating, d.y);
      return l
        ? {
            ...T,
            transform: "translate(" + A + "px, " + z + "px)",
            ...(Lm(U.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: A, top: z };
    }, [n, l, U.floating, d.x, d.y]);
  return x.useMemo(
    () => ({ ...d, update: Q, refs: Y, elements: U, floatingStyles: G }),
    [d, Q, Y, U, G]
  );
}
const sx = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Gd({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? Gd({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  lx = (e, t) => ({ ...Z1(e), options: [e, t] }),
  ax = (e, t) => ({ ...J1(e), options: [e, t] }),
  ux = (e, t) => ({ ...rx(e), options: [e, t] }),
  cx = (e, t) => ({ ...ex(e), options: [e, t] }),
  dx = (e, t) => ({ ...tx(e), options: [e, t] }),
  fx = (e, t) => ({ ...nx(e), options: [e, t] }),
  px = (e, t) => ({ ...sx(e), options: [e, t] });
var hx = "Arrow",
  Im = x.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return E.jsx(Qe.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : E.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Im.displayName = hx;
var mx = Im;
function vx(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = x.createContext(s),
      a = n.length;
    n = [...n, s];
    function u(f) {
      const { scope: c, children: m, ...y } = f,
        v = (c == null ? void 0 : c[e][a]) || l,
        w = x.useMemo(() => y, Object.values(y));
      return E.jsx(v.Provider, { value: w, children: m });
    }
    function d(f, c) {
      const m = (c == null ? void 0 : c[e][a]) || l,
        y = x.useContext(m);
      if (y) return y;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + "Provider"), [u, d];
  }
  const o = () => {
    const i = n.map((s) => x.createContext(s));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || i;
      return x.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (o.scopeName = e), [r, gx(o, ...t)];
}
function gx(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const f = a(i)[`__scope${u}`];
        return { ...l, ...f };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function yx(e) {
  const [t, n] = x.useState(void 0);
  return (
    nr(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, l;
          if ("borderBoxSize" in i) {
            const a = i.borderBoxSize,
              u = Array.isArray(a) ? a[0] : a;
            (s = u.inlineSize), (l = u.blockSize);
          } else (s = e.offsetWidth), (l = e.offsetHeight);
          n({ width: s, height: l });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var Dm = "Popper",
  [zm, Fm] = vx(Dm),
  [nC, $m] = zm(Dm),
  Um = "PopperAnchor",
  Bm = x.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = $m(Um, n),
      s = x.useRef(null),
      l = St(t, s);
    return (
      x.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : E.jsx(Qe.div, { ...o, ref: l })
    );
  });
Bm.displayName = Um;
var fc = "PopperContent",
  [wx, xx] = zm(fc),
  Hm = x.forwardRef((e, t) => {
    var dt, Jt, en, tn, di, lr;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: l = 0,
        avoidCollisions: a = !0,
        collisionBoundary: u = [],
        collisionPadding: d = 0,
        sticky: f = "partial",
        hideWhenDetached: c = !1,
        updatePositionStrategy: m = "optimized",
        onPlaced: y,
        ...v
      } = e,
      w = $m(fc, n),
      [h, p] = x.useState(null),
      g = St(t, (zn) => p(zn)),
      [S, C] = x.useState(null),
      P = yx(S),
      k = (P == null ? void 0 : P.width) ?? 0,
      N = (P == null ? void 0 : P.height) ?? 0,
      I = r + (i !== "center" ? "-" + i : ""),
      _ =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      $ = Array.isArray(u) ? u : [u],
      D = $.length > 0,
      Q = { padding: _, boundary: $.filter(Sx), altBoundary: D },
      {
        refs: M,
        floatingStyles: Y,
        placement: U,
        isPositioned: G,
        middlewareData: T,
      } = ix({
        strategy: "fixed",
        placement: I,
        whileElementsMounted: (...zn) =>
          X1(...zn, { animationFrame: m === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          lx({ mainAxis: o + N, alignmentAxis: s }),
          a &&
            ax({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? ux() : void 0,
              ...Q,
            }),
          a && cx({ ...Q }),
          dx({
            ...Q,
            apply: ({
              elements: zn,
              rects: so,
              availableWidth: fi,
              availableHeight: nn,
            }) => {
              const { width: ul, height: cl } = so.reference,
                Ce = zn.floating.style;
              Ce.setProperty("--radix-popper-available-width", `${fi}px`),
                Ce.setProperty("--radix-popper-available-height", `${nn}px`),
                Ce.setProperty("--radix-popper-anchor-width", `${ul}px`),
                Ce.setProperty("--radix-popper-anchor-height", `${cl}px`);
            },
          }),
          S && px({ element: S, padding: l }),
          Cx({ arrowWidth: k, arrowHeight: N }),
          c && fx({ strategy: "referenceHidden", ...Q }),
        ],
      }),
      [A, z] = Qm(U),
      L = Lt(y);
    nr(() => {
      G && (L == null || L());
    }, [G, L]);
    const F = (dt = T.arrow) == null ? void 0 : dt.x,
      q = (Jt = T.arrow) == null ? void 0 : Jt.y,
      ce = ((en = T.arrow) == null ? void 0 : en.centerOffset) !== 0,
      [Ye, J] = x.useState();
    return (
      nr(() => {
        h && J(window.getComputedStyle(h).zIndex);
      }, [h]),
      E.jsx("div", {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Y,
          transform: G ? Y.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Ye,
          "--radix-popper-transform-origin": [
            (tn = T.transformOrigin) == null ? void 0 : tn.x,
            (di = T.transformOrigin) == null ? void 0 : di.y,
          ].join(" "),
          ...(((lr = T.hide) == null ? void 0 : lr.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: E.jsx(wx, {
          scope: n,
          placedSide: A,
          onArrowChange: C,
          arrowX: F,
          arrowY: q,
          shouldHideArrow: ce,
          children: E.jsx(Qe.div, {
            "data-side": A,
            "data-align": z,
            ...v,
            ref: g,
            style: { ...v.style, animation: G ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Hm.displayName = fc;
var Vm = "PopperArrow",
  Ex = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Wm = x.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = xx(Vm, r),
      s = Ex[i.placedSide];
    return E.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: E.jsx(mx, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
Wm.displayName = Vm;
function Sx(e) {
  return e !== null;
}
var Cx = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, h, p;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
      l = s ? 0 : e.arrowWidth,
      a = s ? 0 : e.arrowHeight,
      [u, d] = Qm(n),
      f = { start: "0%", center: "50%", end: "100%" }[d],
      c = (((h = o.arrow) == null ? void 0 : h.x) ?? 0) + l / 2,
      m = (((p = o.arrow) == null ? void 0 : p.y) ?? 0) + a / 2;
    let y = "",
      v = "";
    return (
      u === "bottom"
        ? ((y = s ? f : `${c}px`), (v = `${-a}px`))
        : u === "top"
        ? ((y = s ? f : `${c}px`), (v = `${r.floating.height + a}px`))
        : u === "right"
        ? ((y = `${-a}px`), (v = s ? f : `${m}px`))
        : u === "left" &&
          ((y = `${r.floating.width + a}px`), (v = s ? f : `${m}px`)),
      { data: { x: y, y: v } }
    );
  },
});
function Qm(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Tx = Bm,
  Px = Hm,
  kx = Wm,
  [nl, rC] = Hh("Tooltip", [Fm]),
  pc = Fm(),
  Ym = "TooltipProvider",
  bx = 700,
  qd = "tooltip.open",
  [Nx, Gm] = nl(Ym),
  Km = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = bx,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      [s, l] = x.useState(!0),
      a = x.useRef(!1),
      u = x.useRef(0);
    return (
      x.useEffect(() => {
        const d = u.current;
        return () => window.clearTimeout(d);
      }, []),
      E.jsx(Nx, {
        scope: t,
        isOpenDelayed: s,
        delayDuration: n,
        onOpen: x.useCallback(() => {
          window.clearTimeout(u.current), l(!1);
        }, []),
        onClose: x.useCallback(() => {
          window.clearTimeout(u.current),
            (u.current = window.setTimeout(() => l(!0), r));
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: x.useCallback((d) => {
          a.current = d;
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    );
  };
Km.displayName = Ym;
var qm = "Tooltip",
  [oC, rl] = nl(qm),
  Xa = "TooltipTrigger",
  Rx = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = rl(Xa, n),
      i = Gm(Xa, n),
      s = pc(n),
      l = x.useRef(null),
      a = St(t, l, o.onTriggerChange),
      u = x.useRef(!1),
      d = x.useRef(!1),
      f = x.useCallback(() => (u.current = !1), []);
    return (
      x.useEffect(
        () => () => document.removeEventListener("pointerup", f),
        [f]
      ),
      E.jsx(Tx, {
        asChild: !0,
        ...s,
        children: E.jsx(Qe.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: a,
          onPointerMove: we(e.onPointerMove, (c) => {
            c.pointerType !== "touch" &&
              !d.current &&
              !i.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (d.current = !0));
          }),
          onPointerLeave: we(e.onPointerLeave, () => {
            o.onTriggerLeave(), (d.current = !1);
          }),
          onPointerDown: we(e.onPointerDown, () => {
            (u.current = !0),
              document.addEventListener("pointerup", f, { once: !0 });
          }),
          onFocus: we(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: we(e.onBlur, o.onClose),
          onClick: we(e.onClick, o.onClose),
        }),
      })
    );
  });
Rx.displayName = Xa;
var Ox = "TooltipPortal",
  [iC, Ax] = nl(Ox, { forceMount: void 0 }),
  Zr = "TooltipContent",
  Xm = x.forwardRef((e, t) => {
    const n = Ax(Zr, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
      s = rl(Zr, e.__scopeTooltip);
    return E.jsx(tc, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? E.jsx(Zm, { side: o, ...i, ref: t })
        : E.jsx(_x, { side: o, ...i, ref: t }),
    });
  }),
  _x = x.forwardRef((e, t) => {
    const n = rl(Zr, e.__scopeTooltip),
      r = Gm(Zr, e.__scopeTooltip),
      o = x.useRef(null),
      i = St(t, o),
      [s, l] = x.useState(null),
      { trigger: a, onClose: u } = n,
      d = o.current,
      { onPointerInTransitChange: f } = r,
      c = x.useCallback(() => {
        l(null), f(!1);
      }, [f]),
      m = x.useCallback(
        (y, v) => {
          const w = y.currentTarget,
            h = { x: y.clientX, y: y.clientY },
            p = Ix(h, w.getBoundingClientRect()),
            g = Dx(h, p),
            S = zx(v.getBoundingClientRect()),
            C = $x([...g, ...S]);
          l(C), f(!0);
        },
        [f]
      );
    return (
      x.useEffect(() => () => c(), [c]),
      x.useEffect(() => {
        if (a && d) {
          const y = (w) => m(w, d),
            v = (w) => m(w, a);
          return (
            a.addEventListener("pointerleave", y),
            d.addEventListener("pointerleave", v),
            () => {
              a.removeEventListener("pointerleave", y),
                d.removeEventListener("pointerleave", v);
            }
          );
        }
      }, [a, d, m, c]),
      x.useEffect(() => {
        if (s) {
          const y = (v) => {
            const w = v.target,
              h = { x: v.clientX, y: v.clientY },
              p =
                (a == null ? void 0 : a.contains(w)) ||
                (d == null ? void 0 : d.contains(w)),
              g = !Fx(h, s);
            p ? c() : g && (c(), u());
          };
          return (
            document.addEventListener("pointermove", y),
            () => document.removeEventListener("pointermove", y)
          );
        }
      }, [a, d, s, u, c]),
      E.jsx(Zm, { ...e, ref: i })
    );
  }),
  [Mx, jx] = nl(qm, { isInside: !1 }),
  Zm = x.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        ...l
      } = e,
      a = rl(Zr, n),
      u = pc(n),
      { onClose: d } = a;
    return (
      x.useEffect(
        () => (
          document.addEventListener(qd, d),
          () => document.removeEventListener(qd, d)
        ),
        [d]
      ),
      x.useEffect(() => {
        if (a.trigger) {
          const f = (c) => {
            const m = c.target;
            m != null && m.contains(a.trigger) && d();
          };
          return (
            window.addEventListener("scroll", f, { capture: !0 }),
            () => window.removeEventListener("scroll", f, { capture: !0 })
          );
        }
      }, [a.trigger, d]),
      E.jsx(ec, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: d,
        children: E.jsxs(Px, {
          "data-state": a.stateAttribute,
          ...u,
          ...l,
          ref: t,
          style: {
            ...l.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            E.jsx(Bh, { children: r }),
            E.jsx(Mx, {
              scope: n,
              isInside: !0,
              children: E.jsx(L0, {
                id: a.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
Xm.displayName = Zr;
var Jm = "TooltipArrow",
  Lx = x.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = pc(n);
    return jx(Jm, n).isInside ? null : E.jsx(kx, { ...o, ...r, ref: t });
  });
Lx.displayName = Jm;
function Ix(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Dx(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function zx(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function Fx(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i].x,
      a = t[i].y,
      u = t[s].x,
      d = t[s].y;
    a > r != d > r && n < ((u - l) * (r - a)) / (d - a) + l && (o = !o);
  }
  return o;
}
function $x(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    Ux(t)
  );
}
function Ux(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var Bx = Km,
  ev = Xm;
const Hx = Bx,
  Vx = x.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    E.jsx(ev, {
      ref: r,
      sideOffset: t,
      className: sr(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n,
    })
  );
Vx.displayName = ev.displayName;
var ol = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  il = typeof window > "u" || "Deno" in globalThis;
function ht() {}
function Wx(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Qx(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Yx(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Xd(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Gx(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Zd(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: s,
    stale: l,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== hc(s, t.options)) return !1;
    } else if (!ei(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const a = t.isActive();
    if ((n === "active" && !a) || (n === "inactive" && a)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (o && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function Jd(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Jo(t.options.mutationKey) !== Jo(i)) return !1;
    } else if (!ei(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function hc(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Jo)(e);
}
function Jo(e) {
  return JSON.stringify(e, (t, n) =>
    Za(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n
  );
}
function ei(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !ei(e[n], t[n]))
    : !1;
}
function tv(e, t) {
  if (e === t) return e;
  const n = ef(e) && ef(t);
  if (n || (Za(e) && Za(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      i = n ? t : Object.keys(t),
      s = i.length,
      l = n ? [] : {};
    let a = 0;
    for (let u = 0; u < s; u++) {
      const d = n ? u : i[u];
      ((!n && r.includes(d)) || n) && e[d] === void 0 && t[d] === void 0
        ? ((l[d] = void 0), a++)
        : ((l[d] = tv(e[d], t[d])), l[d] === e[d] && e[d] !== void 0 && a++);
    }
    return o === s && a === o ? e : l;
  }
  return t;
}
function ef(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Za(e) {
  if (!tf(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !tf(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function tf(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Kx(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function qx(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? tv(e, t)
    : t;
}
function Xx(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function Zx(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var mc = Symbol();
function nv(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === mc
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var Vn,
  pn,
  Lr,
  yf,
  Jx =
    ((yf = class extends ol {
      constructor() {
        super();
        Z(this, Vn);
        Z(this, pn);
        Z(this, Lr);
        W(this, Lr, (t) => {
          if (!il && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        b(this, pn) || this.setEventListener(b(this, Lr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = b(this, pn)) == null || t.call(this), W(this, pn, void 0));
      }
      setEventListener(t) {
        var n;
        W(this, Lr, t),
          (n = b(this, pn)) == null || n.call(this),
          W(
            this,
            pn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        b(this, Vn) !== t && (W(this, Vn, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof b(this, Vn) == "boolean"
          ? b(this, Vn)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Vn = new WeakMap()),
    (pn = new WeakMap()),
    (Lr = new WeakMap()),
    yf),
  rv = new Jx(),
  Ir,
  hn,
  Dr,
  wf,
  eE =
    ((wf = class extends ol {
      constructor() {
        super();
        Z(this, Ir, !0);
        Z(this, hn);
        Z(this, Dr);
        W(this, Dr, (t) => {
          if (!il && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        b(this, hn) || this.setEventListener(b(this, Dr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = b(this, hn)) == null || t.call(this), W(this, hn, void 0));
      }
      setEventListener(t) {
        var n;
        W(this, Dr, t),
          (n = b(this, hn)) == null || n.call(this),
          W(this, hn, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        b(this, Ir) !== t &&
          (W(this, Ir, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return b(this, Ir);
      }
    }),
    (Ir = new WeakMap()),
    (hn = new WeakMap()),
    (Dr = new WeakMap()),
    wf),
  Os = new eE();
function tE() {
  let e, t;
  const n = new Promise((o, i) => {
    (e = o), (t = i);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (o) => {
      r({ status: "fulfilled", value: o }), e(o);
    }),
    (n.reject = (o) => {
      r({ status: "rejected", reason: o }), t(o);
    }),
    n
  );
}
function nE(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function ov(e) {
  return (e ?? "online") === "online" ? Os.isOnline() : !0;
}
var iv = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function Ql(e) {
  return e instanceof iv;
}
function sv(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const i = tE(),
    s = (v) => {
      var w;
      r || (c(new iv(v)), (w = e.abort) == null || w.call(e));
    },
    l = () => {
      t = !0;
    },
    a = () => {
      t = !1;
    },
    u = () =>
      rv.isFocused() &&
      (e.networkMode === "always" || Os.isOnline()) &&
      e.canRun(),
    d = () => ov(e.networkMode) && e.canRun(),
    f = (v) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onSuccess) == null || w.call(e, v),
        o == null || o(),
        i.resolve(v));
    },
    c = (v) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onError) == null || w.call(e, v),
        o == null || o(),
        i.reject(v));
    },
    m = () =>
      new Promise((v) => {
        var w;
        (o = (h) => {
          (r || u()) && v(h);
        }),
          (w = e.onPause) == null || w.call(e);
      }).then(() => {
        var v;
        (o = void 0), r || (v = e.onContinue) == null || v.call(e);
      }),
    y = () => {
      if (r) return;
      let v;
      const w = n === 0 ? e.initialPromise : void 0;
      try {
        v = w ?? e.fn();
      } catch (h) {
        v = Promise.reject(h);
      }
      Promise.resolve(v)
        .then(f)
        .catch((h) => {
          var P;
          if (r) return;
          const p = e.retry ?? (il ? 0 : 3),
            g = e.retryDelay ?? nE,
            S = typeof g == "function" ? g(n, h) : g,
            C =
              p === !0 ||
              (typeof p == "number" && n < p) ||
              (typeof p == "function" && p(n, h));
          if (t || !C) {
            c(h);
            return;
          }
          n++,
            (P = e.onFail) == null || P.call(e, n, h),
            Kx(S)
              .then(() => (u() ? void 0 : m()))
              .then(() => {
                t ? c(h) : y();
              });
        });
    };
  return {
    promise: i,
    cancel: s,
    continue: () => (o == null || o(), i),
    cancelRetry: l,
    continueRetry: a,
    canStart: d,
    start: () => (d() ? y() : m().then(y), i),
  };
}
function rE() {
  let e = [],
    t = 0,
    n = (l) => {
      l();
    },
    r = (l) => {
      l();
    },
    o = (l) => setTimeout(l, 0);
  const i = (l) => {
      t
        ? e.push(l)
        : o(() => {
            n(l);
          });
    },
    s = () => {
      const l = e;
      (e = []),
        l.length &&
          o(() => {
            r(() => {
              l.forEach((a) => {
                n(a);
              });
            });
          });
    };
  return {
    batch: (l) => {
      let a;
      t++;
      try {
        a = l();
      } finally {
        t--, t || s();
      }
      return a;
    },
    batchCalls:
      (l) =>
      (...a) => {
        i(() => {
          l(...a);
        });
      },
    schedule: i,
    setNotifyFunction: (l) => {
      n = l;
    },
    setBatchNotifyFunction: (l) => {
      r = l;
    },
    setScheduler: (l) => {
      o = l;
    },
  };
}
var Le = rE(),
  Wn,
  xf,
  lv =
    ((xf = class {
      constructor() {
        Z(this, Wn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          Qx(this.gcTime) &&
            W(
              this,
              Wn,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (il ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        b(this, Wn) && (clearTimeout(b(this, Wn)), W(this, Wn, void 0));
      }
    }),
    (Wn = new WeakMap()),
    xf),
  zr,
  Fr,
  ot,
  Oe,
  ni,
  Qn,
  mt,
  $t,
  Ef,
  oE =
    ((Ef = class extends lv {
      constructor(t) {
        super();
        Z(this, mt);
        Z(this, zr);
        Z(this, Fr);
        Z(this, ot);
        Z(this, Oe);
        Z(this, ni);
        Z(this, Qn);
        W(this, Qn, !1),
          W(this, ni, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          W(this, ot, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          W(this, zr, sE(this.options)),
          (this.state = t.state ?? b(this, zr)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = b(this, Oe)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...b(this, ni), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          b(this, ot).remove(this);
      }
      setData(t, n) {
        const r = qx(this.state.data, t, this.options);
        return (
          be(this, mt, $t).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        be(this, mt, $t).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = b(this, Oe)) == null ? void 0 : r.promise;
        return (
          (o = b(this, Oe)) == null || o.cancel(t),
          n ? n.then(ht).catch(ht) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(b(this, zr));
      }
      isActive() {
        return this.observers.some((t) => Gx(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === mc ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !Yx(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = b(this, Oe)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = b(this, Oe)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          b(this, ot).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (b(this, Oe) &&
              (b(this, Qn)
                ? b(this, Oe).cancel({ revert: !0 })
                : b(this, Oe).cancelRetry()),
            this.scheduleGc()),
          b(this, ot).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          be(this, mt, $t).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var a, u, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (b(this, Oe))
            return b(this, Oe).continueRetry(), b(this, Oe).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((c) => c.options.queryFn);
          f && this.setOptions(f.options);
        }
        const r = new AbortController(),
          o = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (W(this, Qn, !0), r.signal),
            });
          },
          i = () => {
            const f = nv(this.options, n),
              c = { queryKey: this.queryKey, meta: this.meta };
            return (
              o(c),
              W(this, Qn, !1),
              this.options.persister ? this.options.persister(f, c, this) : f(c)
            );
          },
          s = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: i,
          };
        o(s),
          (a = this.options.behavior) == null || a.onFetch(s, this),
          W(this, Fr, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((u = s.fetchOptions) == null ? void 0 : u.meta)) &&
            be(this, mt, $t).call(this, {
              type: "fetch",
              meta: (d = s.fetchOptions) == null ? void 0 : d.meta,
            });
        const l = (f) => {
          var c, m, y, v;
          (Ql(f) && f.silent) ||
            be(this, mt, $t).call(this, { type: "error", error: f }),
            Ql(f) ||
              ((m = (c = b(this, ot).config).onError) == null ||
                m.call(c, f, this),
              (v = (y = b(this, ot).config).onSettled) == null ||
                v.call(y, this.state.data, f, this)),
            this.scheduleGc();
        };
        return (
          W(
            this,
            Oe,
            sv({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: s.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (f) => {
                var c, m, y, v;
                if (f === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(f);
                } catch (w) {
                  l(w);
                  return;
                }
                (m = (c = b(this, ot).config).onSuccess) == null ||
                  m.call(c, f, this),
                  (v = (y = b(this, ot).config).onSettled) == null ||
                    v.call(y, f, this.state.error, this),
                  this.scheduleGc();
              },
              onError: l,
              onFail: (f, c) => {
                be(this, mt, $t).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: c,
                });
              },
              onPause: () => {
                be(this, mt, $t).call(this, { type: "pause" });
              },
              onContinue: () => {
                be(this, mt, $t).call(this, { type: "continue" });
              },
              retry: s.options.retry,
              retryDelay: s.options.retryDelay,
              networkMode: s.options.networkMode,
              canRun: () => !0,
            })
          ),
          b(this, Oe).start()
        );
      }
    }),
    (zr = new WeakMap()),
    (Fr = new WeakMap()),
    (ot = new WeakMap()),
    (Oe = new WeakMap()),
    (ni = new WeakMap()),
    (Qn = new WeakMap()),
    (mt = new WeakSet()),
    ($t = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...iE(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case "error":
            const o = t.error;
            return Ql(o) && o.revert && b(this, Fr)
              ? { ...b(this, Fr), fetchStatus: "idle" }
              : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        Le.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            b(this, ot).notify({ query: this, type: "updated", action: t });
        });
    }),
    Ef);
function iE(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: ov(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function sE(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Rt,
  Sf,
  lE =
    ((Sf = class extends ol {
      constructor(t = {}) {
        super();
        Z(this, Rt);
        (this.config = t), W(this, Rt, new Map());
      }
      build(t, n, r) {
        const o = n.queryKey,
          i = n.queryHash ?? hc(o, n);
        let s = this.get(i);
        return (
          s ||
            ((s = new oE({
              cache: this,
              queryKey: o,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        b(this, Rt).has(t.queryHash) ||
          (b(this, Rt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = b(this, Rt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && b(this, Rt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Le.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return b(this, Rt).get(t);
      }
      getAll() {
        return [...b(this, Rt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Zd(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Zd(t, r)) : n;
      }
      notify(t) {
        Le.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Le.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Le.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Rt = new WeakMap()),
    Sf),
  Ot,
  Me,
  Yn,
  At,
  an,
  Cf,
  aE =
    ((Cf = class extends lv {
      constructor(t) {
        super();
        Z(this, At);
        Z(this, Ot);
        Z(this, Me);
        Z(this, Yn);
        (this.mutationId = t.mutationId),
          W(this, Me, t.mutationCache),
          W(this, Ot, []),
          (this.state = t.state || uE()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        b(this, Ot).includes(t) ||
          (b(this, Ot).push(t),
          this.clearGcTimeout(),
          b(this, Me).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        W(
          this,
          Ot,
          b(this, Ot).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          b(this, Me).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        b(this, Ot).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : b(this, Me).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = b(this, Yn)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var o, i, s, l, a, u, d, f, c, m, y, v, w, h, p, g, S, C, P, k;
        W(
          this,
          Yn,
          sv({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (N, I) => {
              be(this, At, an).call(this, {
                type: "failed",
                failureCount: N,
                error: I,
              });
            },
            onPause: () => {
              be(this, At, an).call(this, { type: "pause" });
            },
            onContinue: () => {
              be(this, At, an).call(this, { type: "continue" });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => b(this, Me).canRun(this),
          })
        );
        const n = this.state.status === "pending",
          r = !b(this, Yn).canStart();
        try {
          if (!n) {
            be(this, At, an).call(this, {
              type: "pending",
              variables: t,
              isPaused: r,
            }),
              await ((i = (o = b(this, Me).config).onMutate) == null
                ? void 0
                : i.call(o, t, this));
            const I = await ((l = (s = this.options).onMutate) == null
              ? void 0
              : l.call(s, t));
            I !== this.state.context &&
              be(this, At, an).call(this, {
                type: "pending",
                context: I,
                variables: t,
                isPaused: r,
              });
          }
          const N = await b(this, Yn).start();
          return (
            await ((u = (a = b(this, Me).config).onSuccess) == null
              ? void 0
              : u.call(a, N, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null
              ? void 0
              : f.call(d, N, t, this.state.context)),
            await ((m = (c = b(this, Me).config).onSettled) == null
              ? void 0
              : m.call(
                  c,
                  N,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((v = (y = this.options).onSettled) == null
              ? void 0
              : v.call(y, N, null, t, this.state.context)),
            be(this, At, an).call(this, { type: "success", data: N }),
            N
          );
        } catch (N) {
          try {
            throw (
              (await ((h = (w = b(this, Me).config).onError) == null
                ? void 0
                : h.call(w, N, t, this.state.context, this)),
              await ((g = (p = this.options).onError) == null
                ? void 0
                : g.call(p, N, t, this.state.context)),
              await ((C = (S = b(this, Me).config).onSettled) == null
                ? void 0
                : C.call(
                    S,
                    void 0,
                    N,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((k = (P = this.options).onSettled) == null
                ? void 0
                : k.call(P, void 0, N, t, this.state.context)),
              N)
            );
          } finally {
            be(this, At, an).call(this, { type: "error", error: N });
          }
        } finally {
          b(this, Me).runNext(this);
        }
      }
    }),
    (Ot = new WeakMap()),
    (Me = new WeakMap()),
    (Yn = new WeakMap()),
    (At = new WeakSet()),
    (an = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        Le.batch(() => {
          b(this, Ot).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            b(this, Me).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    Cf);
function uE() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Ge,
  ri,
  Tf,
  cE =
    ((Tf = class extends ol {
      constructor(t = {}) {
        super();
        Z(this, Ge);
        Z(this, ri);
        (this.config = t), W(this, Ge, new Map()), W(this, ri, Date.now());
      }
      build(t, n, r) {
        const o = new aE({
          mutationCache: this,
          mutationId: ++mi(this, ri)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(o), o;
      }
      add(t) {
        const n = Di(t),
          r = b(this, Ge).get(n) ?? [];
        r.push(t),
          b(this, Ge).set(n, r),
          this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        var r;
        const n = Di(t);
        if (b(this, Ge).has(n)) {
          const o =
            (r = b(this, Ge).get(n)) == null
              ? void 0
              : r.filter((i) => i !== t);
          o && (o.length === 0 ? b(this, Ge).delete(n) : b(this, Ge).set(n, o));
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        var r;
        const n =
          (r = b(this, Ge).get(Di(t))) == null
            ? void 0
            : r.find((o) => o.state.status === "pending");
        return !n || n === t;
      }
      runNext(t) {
        var r;
        const n =
          (r = b(this, Ge).get(Di(t))) == null
            ? void 0
            : r.find((o) => o !== t && o.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
      }
      clear() {
        Le.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [...b(this, Ge).values()].flat();
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Jd(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Jd(t, n));
      }
      notify(t) {
        Le.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Le.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(ht)))
        );
      }
    }),
    (Ge = new WeakMap()),
    (ri = new WeakMap()),
    Tf);
function Di(e) {
  var t;
  return (
    ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
  );
}
function nf(e) {
  return {
    onFetch: (t, n) => {
      var d, f, c, m, y;
      const r = t.options,
        o =
          (c =
            (f = (d = t.fetchOptions) == null ? void 0 : d.meta) == null
              ? void 0
              : f.fetchMore) == null
            ? void 0
            : c.direction,
        i = ((m = t.state.data) == null ? void 0 : m.pages) || [],
        s = ((y = t.state.data) == null ? void 0 : y.pageParams) || [];
      let l = { pages: [], pageParams: [] },
        a = 0;
      const u = async () => {
        let v = !1;
        const w = (g) => {
            Object.defineProperty(g, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (v = !0)
                  : t.signal.addEventListener("abort", () => {
                      v = !0;
                    }),
                t.signal
              ),
            });
          },
          h = nv(t.options, t.fetchOptions),
          p = async (g, S, C) => {
            if (v) return Promise.reject();
            if (S == null && g.pages.length) return Promise.resolve(g);
            const P = {
              queryKey: t.queryKey,
              pageParam: S,
              direction: C ? "backward" : "forward",
              meta: t.options.meta,
            };
            w(P);
            const k = await h(P),
              { maxPages: N } = t.options,
              I = C ? Zx : Xx;
            return {
              pages: I(g.pages, k, N),
              pageParams: I(g.pageParams, S, N),
            };
          };
        if (o && i.length) {
          const g = o === "backward",
            S = g ? dE : rf,
            C = { pages: i, pageParams: s },
            P = S(r, C);
          l = await p(C, P, g);
        } else {
          const g = e ?? i.length;
          do {
            const S = a === 0 ? s[0] ?? r.initialPageParam : rf(r, l);
            if (a > 0 && S == null) break;
            (l = await p(l, S)), a++;
          } while (a < g);
        }
        return l;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var v, w;
            return (w = (v = t.options).persister) == null
              ? void 0
              : w.call(
                  v,
                  u,
                  {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function rf(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function dE(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var he,
  mn,
  vn,
  $r,
  Ur,
  gn,
  Br,
  Hr,
  Pf,
  fE =
    ((Pf = class {
      constructor(e = {}) {
        Z(this, he);
        Z(this, mn);
        Z(this, vn);
        Z(this, $r);
        Z(this, Ur);
        Z(this, gn);
        Z(this, Br);
        Z(this, Hr);
        W(this, he, e.queryCache || new lE()),
          W(this, mn, e.mutationCache || new cE()),
          W(this, vn, e.defaultOptions || {}),
          W(this, $r, new Map()),
          W(this, Ur, new Map()),
          W(this, gn, 0);
      }
      mount() {
        mi(this, gn)._++,
          b(this, gn) === 1 &&
            (W(
              this,
              Br,
              rv.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), b(this, he).onFocus());
              })
            ),
            W(
              this,
              Hr,
              Os.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), b(this, he).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        mi(this, gn)._--,
          b(this, gn) === 0 &&
            ((e = b(this, Br)) == null || e.call(this),
            W(this, Br, void 0),
            (t = b(this, Hr)) == null || t.call(this),
            W(this, Hr, void 0));
      }
      isFetching(e) {
        return b(this, he).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return b(this, mn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = b(this, he).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const n = this.defaultQueryOptions(e),
            r = b(this, he).build(this, n);
          return (
            e.revalidateIfStale &&
              r.isStaleByTime(Xd(n.staleTime, r)) &&
              this.prefetchQuery(n),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return b(this, he)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = b(this, he).get(r.queryHash),
          i = o == null ? void 0 : o.state.data,
          s = Wx(t, i);
        if (s !== void 0)
          return b(this, he)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Le.batch(() =>
          b(this, he)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = b(this, he).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = b(this, he);
        Le.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = b(this, he),
          r = { type: "active", ...e };
        return Le.batch(
          () => (
            n.findAll(e).forEach((o) => {
              o.reset();
            }),
            this.refetchQueries(r, t)
          )
        );
      }
      cancelQueries(e = {}, t = {}) {
        const n = { revert: !0, ...t },
          r = Le.batch(() =>
            b(this, he)
              .findAll(e)
              .map((o) => o.cancel(n))
          );
        return Promise.all(r).then(ht).catch(ht);
      }
      invalidateQueries(e = {}, t = {}) {
        return Le.batch(() => {
          if (
            (b(this, he)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            e.refetchType === "none")
          )
            return Promise.resolve();
          const n = { ...e, type: e.refetchType ?? e.type ?? "active" };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e = {}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
          },
          r = Le.batch(() =>
            b(this, he)
              .findAll(e)
              .filter((o) => !o.isDisabled())
              .map((o) => {
                let i = o.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(ht)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(r).then(ht);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = b(this, he).build(this, t);
        return n.isStaleByTime(Xd(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(ht).catch(ht);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = nf(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(ht).catch(ht);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = nf(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return Os.isOnline()
          ? b(this, mn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return b(this, he);
      }
      getMutationCache() {
        return b(this, mn);
      }
      getDefaultOptions() {
        return b(this, vn);
      }
      setDefaultOptions(e) {
        W(this, vn, e);
      }
      setQueryDefaults(e, t) {
        b(this, $r).set(Jo(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...b(this, $r).values()];
        let n = {};
        return (
          t.forEach((r) => {
            ei(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        b(this, Ur).set(Jo(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...b(this, Ur).values()];
        let n = {};
        return (
          t.forEach((r) => {
            ei(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...b(this, vn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = hc(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.enabled !== !0 && t.queryFn === mc && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...b(this, vn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        b(this, he).clear(), b(this, mn).clear();
      }
    }),
    (he = new WeakMap()),
    (mn = new WeakMap()),
    (vn = new WeakMap()),
    ($r = new WeakMap()),
    (Ur = new WeakMap()),
    (gn = new WeakMap()),
    (Br = new WeakMap()),
    (Hr = new WeakMap()),
    Pf),
  pE = x.createContext(void 0),
  hE = ({ client: e, children: t }) => (
    x.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    E.jsx(pE.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function As() {
  return (
    (As = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    As.apply(this, arguments)
  );
}
var xn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(xn || (xn = {}));
const of = "popstate";
function mE(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: l } = r.location;
    return Ja(
      "",
      { pathname: i, search: s, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : uv(o);
  }
  return gE(t, n, null, e);
}
function We(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function av(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function vE() {
  return Math.random().toString(36).substr(2, 8);
}
function sf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ja(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    As(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? sl(t) : t,
      { state: n, key: (t && t.key) || r || vE() }
    )
  );
}
function uv(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function sl(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function gE(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    l = xn.Pop,
    a = null,
    u = d();
  u == null && ((u = 0), s.replaceState(As({}, s.state, { idx: u }), ""));
  function d() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    l = xn.Pop;
    let w = d(),
      h = w == null ? null : w - u;
    (u = w), a && a({ action: l, location: v.location, delta: h });
  }
  function c(w, h) {
    l = xn.Push;
    let p = Ja(v.location, w, h);
    u = d() + 1;
    let g = sf(p, u),
      S = v.createHref(p);
    try {
      s.pushState(g, "", S);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(S);
    }
    i && a && a({ action: l, location: v.location, delta: 1 });
  }
  function m(w, h) {
    l = xn.Replace;
    let p = Ja(v.location, w, h);
    u = d();
    let g = sf(p, u),
      S = v.createHref(p);
    s.replaceState(g, "", S),
      i && a && a({ action: l, location: v.location, delta: 0 });
  }
  function y(w) {
    let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof w == "string" ? w : uv(w);
    return (
      (p = p.replace(/ $/, "%20")),
      We(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, h)
    );
  }
  let v = {
    get action() {
      return l;
    },
    get location() {
      return e(o, s);
    },
    listen(w) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(of, f),
        (a = w),
        () => {
          o.removeEventListener(of, f), (a = null);
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    createURL: y,
    encodeLocation(w) {
      let h = y(w);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: c,
    replace: m,
    go(w) {
      return s.go(w);
    },
  };
  return v;
}
var lf;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(lf || (lf = {}));
function yE(e, t, n) {
  return n === void 0 && (n = "/"), wE(e, t, n, !1);
}
function wE(e, t, n, r) {
  let o = typeof t == "string" ? sl(t) : t,
    i = fv(o.pathname || "/", n);
  if (i == null) return null;
  let s = cv(e);
  xE(s);
  let l = null;
  for (let a = 0; l == null && a < s.length; ++a) {
    let u = AE(i);
    l = RE(s[a], u, r);
  }
  return l;
}
function cv(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, l) => {
    let a = {
      relativePath: l === void 0 ? i.path || "" : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (We(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Mr([r, a.relativePath]),
      d = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      (We(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      cv(i.children, t, d, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: bE(u, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, s) => {
      var l;
      if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, s);
      else for (let a of dv(i.path)) o(i, s, a);
    }),
    t
  );
}
function dv(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = dv(r.join("/")),
    l = [];
  return (
    l.push(...s.map((a) => (a === "" ? i : [i, a].join("/")))),
    o && l.push(...s),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function xE(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : NE(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const EE = /^:[\w-]+$/,
  SE = 3,
  CE = 2,
  TE = 1,
  PE = 10,
  kE = -2,
  af = (e) => e === "*";
function bE(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(af) && (r += kE),
    t && (r += CE),
    n
      .filter((o) => !af(o))
      .reduce((o, i) => o + (EE.test(i) ? SE : i === "" ? TE : PE), r)
  );
}
function NE(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function RE(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l],
      u = l === r.length - 1,
      d = i === "/" ? t : t.slice(i.length) || "/",
      f = uf(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        d
      ),
      c = a.route;
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = uf(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          d
        )),
      !f)
    )
      return null;
    Object.assign(o, f.params),
      s.push({
        params: o,
        pathname: Mr([i, f.pathname]),
        pathnameBase: _E(Mr([i, f.pathnameBase])),
        route: c,
      }),
      f.pathnameBase !== "/" && (i = Mr([i, f.pathnameBase]));
  }
  return s;
}
function uf(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = OE(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, d, f) => {
      let { paramName: c, isOptional: m } = d;
      if (c === "*") {
        let v = l[f] || "";
        s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const y = l[f];
      return (
        m && !y ? (u[c] = void 0) : (u[c] = (y || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function OE(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    av(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function AE(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      av(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function fv(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Mr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  _E = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function ME(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const pv = ["post", "put", "patch", "delete"];
new Set(pv);
const jE = ["get", ...pv];
new Set(jE);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _s() {
  return (
    (_s = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _s.apply(this, arguments)
  );
}
const LE = x.createContext(null),
  IE = x.createContext(null),
  hv = x.createContext(null),
  ll = x.createContext(null),
  al = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  mv = x.createContext(null);
function vc() {
  return x.useContext(ll) != null;
}
function vv() {
  return vc() || We(!1), x.useContext(ll).location;
}
function DE(e, t) {
  return zE(e, t);
}
function zE(e, t, n, r) {
  vc() || We(!1);
  let { navigator: o } = x.useContext(hv),
    { matches: i } = x.useContext(al),
    s = i[i.length - 1],
    l = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : "/";
  s && s.route;
  let u = vv(),
    d;
  if (t) {
    var f;
    let w = typeof t == "string" ? sl(t) : t;
    a === "/" || ((f = w.pathname) != null && f.startsWith(a)) || We(!1),
      (d = w);
  } else d = u;
  let c = d.pathname || "/",
    m = c;
  if (a !== "/") {
    let w = a.replace(/^\//, "").split("/");
    m = "/" + c.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let y = yE(e, { pathname: m }),
    v = HE(
      y &&
        y.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, l, w.params),
            pathname: Mr([
              a,
              o.encodeLocation
                ? o.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? a
                : Mr([
                    a,
                    o.encodeLocation
                      ? o.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && v
    ? x.createElement(
        ll.Provider,
        {
          value: {
            location: _s(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: xn.Pop,
          },
        },
        v
      )
    : v;
}
function FE() {
  let e = YE(),
    t = ME(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: o }, n) : null,
    null
  );
}
const $E = x.createElement(FE, null);
class UE extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          al.Provider,
          { value: this.props.routeContext },
          x.createElement(mv.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function BE(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = x.useContext(LE);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(al.Provider, { value: t }, r)
  );
}
function HE(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let d = s.findIndex(
      (f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0
    );
    d >= 0 || We(!1), (s = s.slice(0, Math.min(s.length, d + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < s.length; d++) {
      let f = s[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = d),
        f.route.id)
      ) {
        let { loaderData: c, errors: m } = n,
          y =
            f.route.loader &&
            c[f.route.id] === void 0 &&
            (!m || m[f.route.id] === void 0);
        if (f.route.lazy || y) {
          (a = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((d, f, c) => {
    let m,
      y = !1,
      v = null,
      w = null;
    n &&
      ((m = l && f.route.id ? l[f.route.id] : void 0),
      (v = f.route.errorElement || $E),
      a &&
        (u < 0 && c === 0
          ? ((y = !0), (w = null))
          : u === c &&
            ((y = !0), (w = f.route.hydrateFallbackElement || null))));
    let h = t.concat(s.slice(0, c + 1)),
      p = () => {
        let g;
        return (
          m
            ? (g = v)
            : y
            ? (g = w)
            : f.route.Component
            ? (g = x.createElement(f.route.Component, null))
            : f.route.element
            ? (g = f.route.element)
            : (g = d),
          x.createElement(BE, {
            match: f,
            routeContext: { outlet: d, matches: h, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || c === 0)
      ? x.createElement(UE, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: m,
          children: p(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var eu = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(eu || {});
function VE(e) {
  let t = x.useContext(IE);
  return t || We(!1), t;
}
function WE(e) {
  let t = x.useContext(al);
  return t || We(!1), t;
}
function QE(e) {
  let t = WE(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || We(!1), n.route.id;
}
function YE() {
  var e;
  let t = x.useContext(mv),
    n = VE(eu.UseRouteError),
    r = QE(eu.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Ji(e) {
  We(!1);
}
function GE(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = xn.Pop,
    navigator: i,
    static: s = !1,
    future: l,
  } = e;
  vc() && We(!1);
  let a = t.replace(/^\/*/, "/"),
    u = x.useMemo(
      () => ({
        basename: a,
        navigator: i,
        static: s,
        future: _s({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, i, s]
    );
  typeof r == "string" && (r = sl(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: c = "",
      state: m = null,
      key: y = "default",
    } = r,
    v = x.useMemo(() => {
      let w = fv(d, a);
      return w == null
        ? null
        : {
            location: { pathname: w, search: f, hash: c, state: m, key: y },
            navigationType: o,
          };
    }, [a, d, f, c, m, y, o]);
  return v == null
    ? null
    : x.createElement(
        hv.Provider,
        { value: u },
        x.createElement(ll.Provider, { children: n, value: v })
      );
}
function KE(e) {
  let { children: t, location: n } = e;
  return DE(tu(t), n);
}
new Promise(() => {});
function tu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, o) => {
      if (!x.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === x.Fragment) {
        n.push.apply(n, tu(r.props.children, i));
        return;
      }
      r.type !== Ji && We(!1), !r.props.index || !r.props.children || We(!1);
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = tu(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const qE = "6";
try {
  window.__reactRouterVersion = qE;
} catch {}
const XE = "startTransition",
  cf = Gv[XE];
function ZE(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = x.useRef();
  i.current == null && (i.current = mE({ window: o, v5Compat: !0 }));
  let s = i.current,
    [l, a] = x.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    d = x.useCallback(
      (f) => {
        u && cf ? cf(() => a(f)) : a(f);
      },
      [a, u]
    );
  return (
    x.useLayoutEffect(() => s.listen(d), [s, d]),
    x.createElement(GE, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
      future: r,
    })
  );
}
var df;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(df || (df = {}));
var ff;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(ff || (ff = {}));
const JE = ({ className: e }) =>
    E.jsx("div", {
      className: `relative ${e}`,
      children: E.jsx("img", {
        src: "/img/efc01c4f-4d99-4de3-b2a8-d88f8e1c0c55.webp",
        alt: "Present Box",
        className: "w-full h-full object-contain",
      }),
    }),
  eS = () => {
    $h();
    const [e, t] = x.useState(!1),
      [n, r] = x.useState(!0);
    x.useEffect(() => {
      const a = setInterval(() => {
        r((u) => !u);
      }, 2e3);
      return () => clearInterval(a);
    }, []),
      x.useEffect(() => {
        const a = document.createElement("link");
        return (
          (a.href =
            "https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap"),
          (a.rel = "stylesheet"),
          document.head.appendChild(a),
          () => {
            document.head.removeChild(a);
          }
        );
      }, []);
    const o = () => {
        const a = new URL(window.location.href),
          u = a.searchParams,
          d = {
            utm_source:
              "e148de8c-1b0e-4f16-be25-9ca10e5a8769::Teste_xTracky::::",
            utm_medium: "Xtracky",
            utm_campaign: "",
            utm_content: "",
            utm_term: "",
          };
        let f = !1;
        return (
          Object.entries(d).forEach(([c, m]) => {
            u.has(c) || (u.set(c, m), (f = !0));
          }),
          f && window.history.replaceState({}, "", a.toString()),
          a
        );
      },
      i = (a) => {
        const u = o(),
          d = new URL(a);
        return (
          u.searchParams.forEach((f, c) => {
            (c.startsWith("utm_") || c === "click_id") &&
              d.searchParams.append(c, f);
          }),
          d.toString()
        );
      },
      s = (a) => {
        a.preventDefault(), t(!0);
        const u = a.currentTarget;
        u.style.transform = "scale(0.95)";
        const f = i("/1/");
        setTimeout(() => {
          window.location.href = f;
        }, 300);
      },
      l = () => {
        const a = document.getElementById("redeemButton");
        a &&
          (a.addEventListener("mouseenter", () => {
            (a.style.transform = "translateY(-3px) scale(1.03)"),
              (a.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.65)");
          }),
          a.addEventListener("mouseleave", () => {
            (a.style.transform = "translateY(0) scale(1)"),
              (a.style.boxShadow = "0 5px 18px rgba(59, 130, 246, 0.55)");
          }));
      };
    return (
      x.useEffect(() => {
        l();
      }, []),
      E.jsx("div", {
        className:
          "min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 text-white bg-cover bg-center bg-no-repeat",
        style: {
          backgroundImage:
            "url('/img/1c38ede0-dad9-4dcf-8aec-031513888c89.webp')",
          userSelect: "none",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
          fontFamily: "'League Spartan', sans-serif",
        },
        onContextMenu: (a) => a.preventDefault(),
        children: E.jsxs("div", {
          className:
            "w-full max-w-md mx-auto text-center space-y-6 sm:space-y-8",
          children: [
            E.jsx("div", {
              className: "flex justify-center animate-fade-in",
              children: E.jsx("img", {
                src: "/img/logo.webp",
                alt: "Logo",
                className:
                  "w-28 sm:w-36 h-auto mb-4 transition-transform hover:scale-105 drop-shadow-md",
              }),
            }),
            E.jsxs("div", {
              className: "space-y-2 animate-fade-in-up delay-100",
              children: [
                E.jsxs("h1", {
                  className:
                    "text-3xl sm:text-4xl font-bold text-white drop-shadow-md",
                  style: { fontWeight: 700 },
                  children: [
                    "Você foi Premiado com",
                    E.jsx("br", {}),
                    E.jsxs("span", {
                      className: "block mt-1",
                      children: [
                        " ",
                        E.jsx("span", {
                          className: "block mt-1",
                          children: E.jsx("span", {
                            className:
                              "text-4xl sm:text-5xl font-extrabold animate-pulse",
                            style: { color: "#3b82f6", fontWeight: 800 },
                            children: "R$732,93",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                E.jsx("p", {
                  className: "text-lg sm:text-xl text-gray-100 drop-shadow-sm",
                  style: { fontWeight: 500 },
                  children: "Parabéns! você é super SORTUDO!",
                }),
              ],
            }),
            E.jsxs("div", {
              className: "py-4 sm:py-6 animate-bounce relative",
              children: [
                E.jsx("div", {
                  className: `absolute inset-0 rounded-full mx-auto blur-md ${
                    n ? "opacity-70" : "opacity-30"
                  } transition-opacity duration-1000`,
                  style: {
                    width: "10rem",
                    height: "10rem",
                    margin: "0 auto",
                    background:
                      "radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(59,130,246,0) 70%)",
                    transform: "translateY(25%)",
                  },
                }),
                E.jsx(JE, {
                  className:
                    "w-32 h-32 sm:w-48 sm:h-48 mx-auto drop-shadow-lg relative z-10",
                }),
              ],
            }),
            E.jsx("button", {
              id: "redeemButton",
              onClick: s,
              disabled: e,
              className:
                "w-full py-4 rounded-full text-xl sm:text-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ease-out hover:-translate-y-1 active:scale-95",
              style: {
                backgroundColor: "#3b82f6",
                backgroundImage: "linear-gradient(to right, #3b82f6, #2563eb)",
                color: "white",
                boxShadow: "0 5px 18px rgba(59, 130, 246, 0.55)",
                border: "2px solid rgba(147, 197, 253, 0.5)",
                textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
                fontFamily: "'League Spartan', sans-serif",
                fontWeight: 700,
              },
              children: e
                ? E.jsxs("span", {
                    className: "inline-flex items-center",
                    children: [
                      E.jsxs("svg", {
                        className: "animate-spin -ml-1 mr-2 h-5 w-5 text-white",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [
                          E.jsx("circle", {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4",
                          }),
                          E.jsx("path", {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                          }),
                        ],
                      }),
                      "PROCESSANDO...",
                    ],
                  })
                : E.jsxs(E.Fragment, {
                    children: [E.jsx(ow, { className: "w-6 h-6" }), "RESGATAR"],
                  }),
            }),
            E.jsxs("p", {
              className:
                "text-sm sm:text-base mt-8 text-gray-200 drop-shadow-sm animate-fade-in-up delay-200",
              style: { fontWeight: 500 },
              children: [
                "Você assistiu 5.000 vídeos e foi recompensado!",
                E.jsx("br", {}),
                "Resgate agora mesmo antes que expire!",
              ],
            }),
            E.jsx("div", {
              className:
                "mt-6 sm:mt-8 p-4 bg-black bg-opacity-30 rounded-lg animate-fade-in-up delay-300 border border-gray-500 border-opacity-20",
              children: E.jsx("p", {
                className: "text-xs text-gray-200",
                style: { fontWeight: 400 },
                children:
                  "Aviso legal: Promoção exclusiva da empresa Premios Pix de CNPJ 48.077.864/0001-38, conforme regulamento disponível. Sujeita a alterações e condições específicas. Consulte os termos aplicáveis.",
              }),
            }),
          ],
        }),
      })
    );
  },
  tS = () => (
    x.useEffect(() => {
      if (
        !(() => {
          const n = navigator.userAgent,
            r =
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                n
              ),
            o = "ontouchstart" in window || navigator.maxTouchPoints > 0,
            i = window.innerWidth < 768,
            s = window.innerHeight > window.innerWidth;
          return r || (o && (i || s));
        })()
      ) {
        window.location.href = "/not-available";
        return;
      }
      return (
        (() => {
          const n = /iPad|iPhone|iPod/.test(navigator.userAgent);
          n ||
            document.addEventListener("keydown", (o) => {
              (o.keyCode === 123 ||
                (o.ctrlKey && o.shiftKey && o.keyCode === 73) ||
                (o.ctrlKey && o.shiftKey && o.keyCode === 74)) &&
                o.preventDefault();
            }),
            n ||
              document.addEventListener("contextmenu", (o) =>
                o.preventDefault()
              );
          let r = window.innerWidth;
          setInterval(() => {
            Math.abs(window.innerWidth - r) > 100 && window.location.reload(),
              (r = window.innerWidth);
          }, 1e3);
        })(),
        () => {
          document.removeEventListener("keydown", () => {}),
            document.removeEventListener("contextmenu", () => {});
        }
      );
    }, []),
    E.jsx(eS, {})
  ),
  nS = () => {
    const e = vv();
    return (
      x.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname
        );
      }, [e.pathname]),
      E.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: E.jsxs("div", {
          className: "text-center",
          children: [
            E.jsx("h1", {
              className: "text-4xl font-bold mb-4",
              children: "404",
            }),
            E.jsx("p", {
              className: "text-xl text-gray-600 mb-4",
              children: "Oops! Page not found",
            }),
            E.jsx("a", {
              href: "/",
              className: "text-blue-500 hover:text-blue-700 underline",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  };
var gv = { exports: {} },
  rS = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  oS = rS,
  iS = oS;
function yv() {}
function wv() {}
wv.resetWarningCache = yv;
var sS = function () {
  function e(r, o, i, s, l, a) {
    if (a !== iS) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: wv,
    resetWarningCache: yv,
  };
  return (n.PropTypes = n), n;
};
gv.exports = sS();
var lS = gv.exports;
const le = Jr(lS);
function aS(e) {
  return e && typeof e == "object" && "default" in e ? e.default : e;
}
var xv = x,
  uS = aS(xv);
function pf(e, t, n) {
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
function cS(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var dS = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
function fS(e, t, n) {
  if (typeof e != "function")
    throw new Error("Expected reducePropsToState to be a function.");
  if (typeof t != "function")
    throw new Error("Expected handleStateChangeOnClient to be a function.");
  if (typeof n < "u" && typeof n != "function")
    throw new Error(
      "Expected mapStateOnServer to either be undefined or a function."
    );
  function r(o) {
    return o.displayName || o.name || "Component";
  }
  return function (i) {
    if (typeof i != "function")
      throw new Error("Expected WrappedComponent to be a React component.");
    var s = [],
      l;
    function a() {
      (l = e(
        s.map(function (d) {
          return d.props;
        })
      )),
        u.canUseDOM ? t(l) : n && (l = n(l));
    }
    var u = (function (d) {
      cS(f, d);
      function f() {
        return d.apply(this, arguments) || this;
      }
      (f.peek = function () {
        return l;
      }),
        (f.rewind = function () {
          if (f.canUseDOM)
            throw new Error(
              "You may only call rewind() on the server. Call peek() to read the current state."
            );
          var y = l;
          return (l = void 0), (s = []), y;
        });
      var c = f.prototype;
      return (
        (c.UNSAFE_componentWillMount = function () {
          s.push(this), a();
        }),
        (c.componentDidUpdate = function () {
          a();
        }),
        (c.componentWillUnmount = function () {
          var y = s.indexOf(this);
          s.splice(y, 1), a();
        }),
        (c.render = function () {
          return uS.createElement(i, this.props);
        }),
        f
      );
    })(xv.PureComponent);
    return (
      pf(u, "displayName", "SideEffect(" + r(i) + ")"),
      pf(u, "canUseDOM", dS),
      u
    );
  };
}
var pS = fS;
const hS = Jr(pS);
var mS = typeof Element < "u",
  vS = typeof Map == "function",
  gS = typeof Set == "function",
  yS = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function es(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!es(e[r], t[r])) return !1;
      return !0;
    }
    var i;
    if (vS && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!es(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (gS && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (yS && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    if (mS && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") &&
          e.$$typeof
        ) &&
        !es(e[o[r]], t[o[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var wS = function (t, n) {
  try {
    return es(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const xS = Jr(wS);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var hf = Object.getOwnPropertySymbols,
  ES = Object.prototype.hasOwnProperty,
  SS = Object.prototype.propertyIsEnumerable;
function CS(e) {
  if (e == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
function TS() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (((e[5] = "de"), Object.getOwnPropertyNames(e)[0] === "5")) return !1;
    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function (i) {
      return t[i];
    });
    if (r.join("") !== "0123456789") return !1;
    var o = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (i) {
        o[i] = i;
      }),
      Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var PS = TS()
  ? Object.assign
  : function (e, t) {
      for (var n, r = CS(e), o, i = 1; i < arguments.length; i++) {
        n = Object(arguments[i]);
        for (var s in n) ES.call(n, s) && (r[s] = n[s]);
        if (hf) {
          o = hf(n);
          for (var l = 0; l < o.length; l++)
            SS.call(n, o[l]) && (r[o[l]] = n[o[l]]);
        }
      }
      return r;
    };
const kS = Jr(PS);
var qn = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes",
  },
  B = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title",
  };
Object.keys(B).map(function (e) {
  return B[e];
});
var ae = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target",
  },
  Ms = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  ti = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
  },
  bS = Object.keys(Ms).reduce(function (e, t) {
    return (e[Ms[t]] = t), e;
  }, {}),
  NS = [B.NOSCRIPT, B.SCRIPT, B.STYLE],
  yt = "data-react-helmet",
  RS =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        },
  OS = function (e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  },
  AS = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  Fe =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  _S = function (e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  },
  mf = function (e, t) {
    var n = {};
    for (var r in e)
      t.indexOf(r) >= 0 ||
        (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
    return n;
  },
  MS = function (e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  },
  nu = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    return n === !1
      ? String(t)
      : String(t)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;");
  },
  jS = function (t) {
    var n = jr(t, B.TITLE),
      r = jr(t, ti.TITLE_TEMPLATE);
    if (r && n)
      return r.replace(/%s/g, function () {
        return Array.isArray(n) ? n.join("") : n;
      });
    var o = jr(t, ti.DEFAULT_TITLE);
    return n || o || void 0;
  },
  LS = function (t) {
    return jr(t, ti.ON_CHANGE_CLIENT_STATE) || function () {};
  },
  Yl = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[t] < "u";
      })
      .map(function (r) {
        return r[t];
      })
      .reduce(function (r, o) {
        return Fe({}, r, o);
      }, {});
  },
  IS = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[B.BASE] < "u";
      })
      .map(function (r) {
        return r[B.BASE];
      })
      .reverse()
      .reduce(function (r, o) {
        if (!r.length)
          for (var i = Object.keys(o), s = 0; s < i.length; s++) {
            var l = i[s],
              a = l.toLowerCase();
            if (t.indexOf(a) !== -1 && o[a]) return r.concat(o);
          }
        return r;
      }, []);
  },
  yo = function (t, n, r) {
    var o = {};
    return r
      .filter(function (i) {
        return Array.isArray(i[t])
          ? !0
          : (typeof i[t] < "u" &&
              $S(
                "Helmet: " +
                  t +
                  ' should be of type "Array". Instead found type "' +
                  RS(i[t]) +
                  '"'
              ),
            !1);
      })
      .map(function (i) {
        return i[t];
      })
      .reverse()
      .reduce(function (i, s) {
        var l = {};
        s.filter(function (c) {
          for (var m = void 0, y = Object.keys(c), v = 0; v < y.length; v++) {
            var w = y[v],
              h = w.toLowerCase();
            n.indexOf(h) !== -1 &&
              !(m === ae.REL && c[m].toLowerCase() === "canonical") &&
              !(h === ae.REL && c[h].toLowerCase() === "stylesheet") &&
              (m = h),
              n.indexOf(w) !== -1 &&
                (w === ae.INNER_HTML ||
                  w === ae.CSS_TEXT ||
                  w === ae.ITEM_PROP) &&
                (m = w);
          }
          if (!m || !c[m]) return !1;
          var p = c[m].toLowerCase();
          return (
            o[m] || (o[m] = {}),
            l[m] || (l[m] = {}),
            o[m][p] ? !1 : ((l[m][p] = !0), !0)
          );
        })
          .reverse()
          .forEach(function (c) {
            return i.push(c);
          });
        for (var a = Object.keys(l), u = 0; u < a.length; u++) {
          var d = a[u],
            f = kS({}, o[d], l[d]);
          o[d] = f;
        }
        return i;
      }, [])
      .reverse();
  },
  jr = function (t, n) {
    for (var r = t.length - 1; r >= 0; r--) {
      var o = t[r];
      if (o.hasOwnProperty(n)) return o[n];
    }
    return null;
  },
  DS = function (t) {
    return {
      baseTag: IS([ae.HREF, ae.TARGET], t),
      bodyAttributes: Yl(qn.BODY, t),
      defer: jr(t, ti.DEFER),
      encode: jr(t, ti.ENCODE_SPECIAL_CHARACTERS),
      htmlAttributes: Yl(qn.HTML, t),
      linkTags: yo(B.LINK, [ae.REL, ae.HREF], t),
      metaTags: yo(
        B.META,
        [ae.NAME, ae.CHARSET, ae.HTTPEQUIV, ae.PROPERTY, ae.ITEM_PROP],
        t
      ),
      noscriptTags: yo(B.NOSCRIPT, [ae.INNER_HTML], t),
      onChangeClientState: LS(t),
      scriptTags: yo(B.SCRIPT, [ae.SRC, ae.INNER_HTML], t),
      styleTags: yo(B.STYLE, [ae.CSS_TEXT], t),
      title: jS(t),
      titleAttributes: Yl(qn.TITLE, t),
    };
  },
  ru = (function () {
    var e = Date.now();
    return function (t) {
      var n = Date.now();
      n - e > 16
        ? ((e = n), t(n))
        : setTimeout(function () {
            ru(t);
          }, 0);
    };
  })(),
  vf = function (t) {
    return clearTimeout(t);
  },
  zS =
    typeof window < "u"
      ? (window.requestAnimationFrame &&
          window.requestAnimationFrame.bind(window)) ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        ru
      : global.requestAnimationFrame || ru,
  FS =
    typeof window < "u"
      ? window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        vf
      : global.cancelAnimationFrame || vf,
  $S = function (t) {
    return console && typeof console.warn == "function" && console.warn(t);
  },
  wo = null,
  US = function (t) {
    wo && FS(wo),
      t.defer
        ? (wo = zS(function () {
            gf(t, function () {
              wo = null;
            });
          }))
        : (gf(t), (wo = null));
  },
  gf = function (t, n) {
    var r = t.baseTag,
      o = t.bodyAttributes,
      i = t.htmlAttributes,
      s = t.linkTags,
      l = t.metaTags,
      a = t.noscriptTags,
      u = t.onChangeClientState,
      d = t.scriptTags,
      f = t.styleTags,
      c = t.title,
      m = t.titleAttributes;
    ou(B.BODY, o), ou(B.HTML, i), BS(c, m);
    var y = {
        baseTag: fr(B.BASE, r),
        linkTags: fr(B.LINK, s),
        metaTags: fr(B.META, l),
        noscriptTags: fr(B.NOSCRIPT, a),
        scriptTags: fr(B.SCRIPT, d),
        styleTags: fr(B.STYLE, f),
      },
      v = {},
      w = {};
    Object.keys(y).forEach(function (h) {
      var p = y[h],
        g = p.newTags,
        S = p.oldTags;
      g.length && (v[h] = g), S.length && (w[h] = y[h].oldTags);
    }),
      n && n(),
      u(t, v, w);
  },
  Ev = function (t) {
    return Array.isArray(t) ? t.join("") : t;
  },
  BS = function (t, n) {
    typeof t < "u" && document.title !== t && (document.title = Ev(t)),
      ou(B.TITLE, n);
  },
  ou = function (t, n) {
    var r = document.getElementsByTagName(t)[0];
    if (r) {
      for (
        var o = r.getAttribute(yt),
          i = o ? o.split(",") : [],
          s = [].concat(i),
          l = Object.keys(n),
          a = 0;
        a < l.length;
        a++
      ) {
        var u = l[a],
          d = n[u] || "";
        r.getAttribute(u) !== d && r.setAttribute(u, d),
          i.indexOf(u) === -1 && i.push(u);
        var f = s.indexOf(u);
        f !== -1 && s.splice(f, 1);
      }
      for (var c = s.length - 1; c >= 0; c--) r.removeAttribute(s[c]);
      i.length === s.length
        ? r.removeAttribute(yt)
        : r.getAttribute(yt) !== l.join(",") && r.setAttribute(yt, l.join(","));
    }
  },
  fr = function (t, n) {
    var r = document.head || document.querySelector(B.HEAD),
      o = r.querySelectorAll(t + "[" + yt + "]"),
      i = Array.prototype.slice.call(o),
      s = [],
      l = void 0;
    return (
      n &&
        n.length &&
        n.forEach(function (a) {
          var u = document.createElement(t);
          for (var d in a)
            if (a.hasOwnProperty(d))
              if (d === ae.INNER_HTML) u.innerHTML = a.innerHTML;
              else if (d === ae.CSS_TEXT)
                u.styleSheet
                  ? (u.styleSheet.cssText = a.cssText)
                  : u.appendChild(document.createTextNode(a.cssText));
              else {
                var f = typeof a[d] > "u" ? "" : a[d];
                u.setAttribute(d, f);
              }
          u.setAttribute(yt, "true"),
            i.some(function (c, m) {
              return (l = m), u.isEqualNode(c);
            })
              ? i.splice(l, 1)
              : s.push(u);
        }),
      i.forEach(function (a) {
        return a.parentNode.removeChild(a);
      }),
      s.forEach(function (a) {
        return r.appendChild(a);
      }),
      { oldTags: i, newTags: s }
    );
  },
  Sv = function (t) {
    return Object.keys(t).reduce(function (n, r) {
      var o = typeof t[r] < "u" ? r + '="' + t[r] + '"' : "" + r;
      return n ? n + " " + o : o;
    }, "");
  },
  HS = function (t, n, r, o) {
    var i = Sv(r),
      s = Ev(n);
    return i
      ? "<" + t + " " + yt + '="true" ' + i + ">" + nu(s, o) + "</" + t + ">"
      : "<" + t + " " + yt + '="true">' + nu(s, o) + "</" + t + ">";
  },
  VS = function (t, n, r) {
    return n.reduce(function (o, i) {
      var s = Object.keys(i)
          .filter(function (u) {
            return !(u === ae.INNER_HTML || u === ae.CSS_TEXT);
          })
          .reduce(function (u, d) {
            var f = typeof i[d] > "u" ? d : d + '="' + nu(i[d], r) + '"';
            return u ? u + " " + f : f;
          }, ""),
        l = i.innerHTML || i.cssText || "",
        a = NS.indexOf(t) === -1;
      return (
        o +
        "<" +
        t +
        " " +
        yt +
        '="true" ' +
        s +
        (a ? "/>" : ">" + l + "</" + t + ">")
      );
    }, "");
  },
  Cv = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (r, o) {
      return (r[Ms[o] || o] = t[o]), r;
    }, n);
  },
  WS = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Object.keys(t).reduce(function (r, o) {
      return (r[bS[o] || o] = t[o]), r;
    }, n);
  },
  QS = function (t, n, r) {
    var o,
      i = ((o = { key: n }), (o[yt] = !0), o),
      s = Cv(r, i);
    return [O.createElement(B.TITLE, s, n)];
  },
  YS = function (t, n) {
    return n.map(function (r, o) {
      var i,
        s = ((i = { key: o }), (i[yt] = !0), i);
      return (
        Object.keys(r).forEach(function (l) {
          var a = Ms[l] || l;
          if (a === ae.INNER_HTML || a === ae.CSS_TEXT) {
            var u = r.innerHTML || r.cssText;
            s.dangerouslySetInnerHTML = { __html: u };
          } else s[a] = r[l];
        }),
        O.createElement(t, s)
      );
    });
  },
  Ft = function (t, n, r) {
    switch (t) {
      case B.TITLE:
        return {
          toComponent: function () {
            return QS(t, n.title, n.titleAttributes);
          },
          toString: function () {
            return HS(t, n.title, n.titleAttributes, r);
          },
        };
      case qn.BODY:
      case qn.HTML:
        return {
          toComponent: function () {
            return Cv(n);
          },
          toString: function () {
            return Sv(n);
          },
        };
      default:
        return {
          toComponent: function () {
            return YS(t, n);
          },
          toString: function () {
            return VS(t, n, r);
          },
        };
    }
  },
  Tv = function (t) {
    var n = t.baseTag,
      r = t.bodyAttributes,
      o = t.encode,
      i = t.htmlAttributes,
      s = t.linkTags,
      l = t.metaTags,
      a = t.noscriptTags,
      u = t.scriptTags,
      d = t.styleTags,
      f = t.title,
      c = f === void 0 ? "" : f,
      m = t.titleAttributes;
    return {
      base: Ft(B.BASE, n, o),
      bodyAttributes: Ft(qn.BODY, r, o),
      htmlAttributes: Ft(qn.HTML, i, o),
      link: Ft(B.LINK, s, o),
      meta: Ft(B.META, l, o),
      noscript: Ft(B.NOSCRIPT, a, o),
      script: Ft(B.SCRIPT, u, o),
      style: Ft(B.STYLE, d, o),
      title: Ft(B.TITLE, { title: c, titleAttributes: m }, o),
    };
  },
  GS = function (t) {
    var n, r;
    return (
      (r = n =
        (function (o) {
          _S(i, o);
          function i() {
            return OS(this, i), MS(this, o.apply(this, arguments));
          }
          return (
            (i.prototype.shouldComponentUpdate = function (l) {
              return !xS(this.props, l);
            }),
            (i.prototype.mapNestedChildrenToProps = function (l, a) {
              if (!a) return null;
              switch (l.type) {
                case B.SCRIPT:
                case B.NOSCRIPT:
                  return { innerHTML: a };
                case B.STYLE:
                  return { cssText: a };
              }
              throw new Error(
                "<" +
                  l.type +
                  " /> elements are self-closing and can not contain children. Refer to our API for more information."
              );
            }),
            (i.prototype.flattenArrayTypeChildren = function (l) {
              var a,
                u = l.child,
                d = l.arrayTypeChildren,
                f = l.newChildProps,
                c = l.nestedChildren;
              return Fe(
                {},
                d,
                ((a = {}),
                (a[u.type] = [].concat(d[u.type] || [], [
                  Fe({}, f, this.mapNestedChildrenToProps(u, c)),
                ])),
                a)
              );
            }),
            (i.prototype.mapObjectTypeChildren = function (l) {
              var a,
                u,
                d = l.child,
                f = l.newProps,
                c = l.newChildProps,
                m = l.nestedChildren;
              switch (d.type) {
                case B.TITLE:
                  return Fe(
                    {},
                    f,
                    ((a = {}),
                    (a[d.type] = m),
                    (a.titleAttributes = Fe({}, c)),
                    a)
                  );
                case B.BODY:
                  return Fe({}, f, { bodyAttributes: Fe({}, c) });
                case B.HTML:
                  return Fe({}, f, { htmlAttributes: Fe({}, c) });
              }
              return Fe({}, f, ((u = {}), (u[d.type] = Fe({}, c)), u));
            }),
            (i.prototype.mapArrayTypeChildrenToProps = function (l, a) {
              var u = Fe({}, a);
              return (
                Object.keys(l).forEach(function (d) {
                  var f;
                  u = Fe({}, u, ((f = {}), (f[d] = l[d]), f));
                }),
                u
              );
            }),
            (i.prototype.warnOnInvalidChildren = function (l, a) {
              return !0;
            }),
            (i.prototype.mapChildrenToProps = function (l, a) {
              var u = this,
                d = {};
              return (
                O.Children.forEach(l, function (f) {
                  if (!(!f || !f.props)) {
                    var c = f.props,
                      m = c.children,
                      y = mf(c, ["children"]),
                      v = WS(y);
                    switch ((u.warnOnInvalidChildren(f, m), f.type)) {
                      case B.LINK:
                      case B.META:
                      case B.NOSCRIPT:
                      case B.SCRIPT:
                      case B.STYLE:
                        d = u.flattenArrayTypeChildren({
                          child: f,
                          arrayTypeChildren: d,
                          newChildProps: v,
                          nestedChildren: m,
                        });
                        break;
                      default:
                        a = u.mapObjectTypeChildren({
                          child: f,
                          newProps: a,
                          newChildProps: v,
                          nestedChildren: m,
                        });
                        break;
                    }
                  }
                }),
                (a = this.mapArrayTypeChildrenToProps(d, a)),
                a
              );
            }),
            (i.prototype.render = function () {
              var l = this.props,
                a = l.children,
                u = mf(l, ["children"]),
                d = Fe({}, u);
              return (
                a && (d = this.mapChildrenToProps(a, d)), O.createElement(t, d)
              );
            }),
            AS(i, null, [
              {
                key: "canUseDOM",
                set: function (l) {
                  t.canUseDOM = l;
                },
              },
            ]),
            i
          );
        })(O.Component)),
      (n.propTypes = {
        base: le.object,
        bodyAttributes: le.object,
        children: le.oneOfType([le.arrayOf(le.node), le.node]),
        defaultTitle: le.string,
        defer: le.bool,
        encodeSpecialCharacters: le.bool,
        htmlAttributes: le.object,
        link: le.arrayOf(le.object),
        meta: le.arrayOf(le.object),
        noscript: le.arrayOf(le.object),
        onChangeClientState: le.func,
        script: le.arrayOf(le.object),
        style: le.arrayOf(le.object),
        title: le.string,
        titleAttributes: le.object,
        titleTemplate: le.string,
      }),
      (n.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
      (n.peek = t.peek),
      (n.rewind = function () {
        var o = t.rewind();
        return (
          o ||
            (o = Tv({
              baseTag: [],
              bodyAttributes: {},
              encodeSpecialCharacters: !0,
              htmlAttributes: {},
              linkTags: [],
              metaTags: [],
              noscriptTags: [],
              scriptTags: [],
              styleTags: [],
              title: "",
              titleAttributes: {},
            })),
          o
        );
      }),
      r
    );
  },
  KS = function () {
    return null;
  },
  qS = hS(DS, US, Tv)(KS),
  iu = GS(qS);
iu.renderStatic = iu.rewind;
const XS = () =>
    E.jsxs(E.Fragment, {
      children: [
        E.jsxs(iu, {
          children: [
            E.jsx("title", {
              children: "Domine o Marketing Digital - Curso Hotmart",
            }),
            E.jsx("meta", {
              name: "description",
              content:
                "Aprenda a ganhar dinheiro online com nosso método comprovado",
            }),
          ],
        }),
        E.jsxs("div", {
          className: "min-h-screen bg-gray-100",
          children: [
            E.jsx("header", {
              className: "bg-blue-600 text-white py-4",
              children: E.jsxs("div", {
                className: "container mx-auto px-4 text-center",
                children: [
                  E.jsx("h1", {
                    className: "text-2xl font-bold",
                    children: "Fórmula do Marketing Digital",
                  }),
                  E.jsx("p", {
                    className: "text-sm",
                    children: "Método comprovado por mais de 10.000 alunos",
                  }),
                ],
              }),
            }),
            E.jsx("section", {
              className: "bg-white py-12",
              children: E.jsxs("div", {
                className:
                  "container mx-auto px-4 flex flex-col md:flex-row items-center",
                children: [
                  E.jsxs("div", {
                    className: "md:w-1/2 mb-8 md:mb-0",
                    children: [
                      E.jsxs("h2", {
                        className: "text-3xl font-bold text-gray-800 mb-4",
                        children: [
                          "Você quer ",
                          E.jsx("span", {
                            className: "text-blue-600",
                            children: "ganhar de R$5.000 a R$20.000/mês",
                          }),
                          " trabalhando de casa?",
                        ],
                      }),
                      E.jsx("p", {
                        className: "text-gray-600 mb-6",
                        children:
                          "Descubra o método que já mudou a vida de milhares de pessoas e como você pode replicar esses resultados em apenas 8 semanas!",
                      }),
                      E.jsxs("div", {
                        className:
                          "bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6",
                        children: [
                          E.jsx("p", {
                            className: "font-semibold",
                            children:
                              "⚠️ ATENÇÃO: Esta oferta é exclusiva para dispositivos móveis!",
                          }),
                          E.jsx("p", {
                            className: "text-sm mt-1",
                            children:
                              "Para acessar o conteúdo completo, acesse por seu smartphone ou tablet.",
                          }),
                        ],
                      }),
                      E.jsx("a", {
                        href: "https://pay.hotmart.com/N70241222A?sck=HOTMART_SITE&off=gi679r8t&hotfeature=33&_gl=1*10lshq5*_gcl_au*MTI2NjYwOTI3OS4xNzQyMzE2Mzk5*_ga*MTA3MTU2NDQ1Mi4xNzQyMzE2NDAw*_ga_GQH2V1F11Q*czE3NDY1Mzc4NzgkbzUkZzEkdDE3NDY1Mzc5MDMkajQwJGwwJGgw&bid=1746537904972",
                        className:
                          "bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full inline-block transition duration-300",
                        children: "QUERO ME INSCREVER AGORA",
                      }),
                    ],
                  }),
                  E.jsx("div", {
                    className: "md:w-1/2",
                    children: E.jsxs("div", {
                      className: "relative",
                      children: [
                        E.jsx("img", {
                          src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                          alt: "Homem feliz trabalhando em casa",
                          className: "rounded-lg shadow-xl w-full",
                        }),
                        E.jsx("div", {
                          className:
                            "absolute -bottom-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg",
                          children: E.jsx("p", {
                            className: "font-bold",
                            children: "OFERTA POR TEMPO LIMITADO",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            E.jsx("section", {
              className: "py-12 bg-gray-50",
              children: E.jsxs("div", {
                className: "container mx-auto px-4",
                children: [
                  E.jsx("h2", {
                    className: "text-2xl font-bold text-center mb-12",
                    children: "O QUE VOCÊ VAI APRENDER:",
                  }),
                  E.jsxs("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: [
                      E.jsxs("div", {
                        className: "bg-white p-6 rounded-lg shadow-md",
                        children: [
                          E.jsx("div", {
                            className: "text-blue-500 text-3xl mb-4",
                            children: "1",
                          }),
                          E.jsx("h3", {
                            className: "font-bold mb-2",
                            children: "Tráfego Gratuito",
                          }),
                          E.jsx("p", {
                            className: "text-gray-600",
                            children:
                              "Domine as estratégias de tráfego orgânico que não exigem investimento em ads.",
                          }),
                        ],
                      }),
                      E.jsxs("div", {
                        className: "bg-white p-6 rounded-lg shadow-md",
                        children: [
                          E.jsx("div", {
                            className: "text-blue-500 text-3xl mb-4",
                            children: "2",
                          }),
                          E.jsx("h3", {
                            className: "font-bold mb-2",
                            children: "Monetização",
                          }),
                          E.jsx("p", {
                            className: "text-gray-600",
                            children:
                              "Aprenda a converter seu tráfego em vendas e comissões altas.",
                          }),
                        ],
                      }),
                      E.jsxs("div", {
                        className: "bg-white p-6 rounded-lg shadow-md",
                        children: [
                          E.jsx("div", {
                            className: "text-blue-500 text-3xl mb-4",
                            children: "3",
                          }),
                          E.jsx("h3", {
                            className: "font-bold mb-2",
                            children: "Automação",
                          }),
                          E.jsx("p", {
                            className: "text-gray-600",
                            children:
                              "Sistemas automatizados que trabalham para você 24 horas por dia.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            E.jsx("section", {
              className: "py-12 bg-white",
              children: E.jsxs("div", {
                className: "container mx-auto px-4",
                children: [
                  E.jsx("h2", {
                    className: "text-2xl font-bold text-center mb-12",
                    children: "DEPOIMENTOS DE ALUNOS",
                  }),
                  E.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-8",
                    children: [
                      E.jsxs("div", {
                        className: "border p-4 rounded-lg",
                        children: [
                          E.jsxs("div", {
                            className: "flex items-center mb-4",
                            children: [
                              E.jsx("img", {
                                src: "https://randomuser.me/api/portraits/women/32.jpg",
                                alt: "Depoimento",
                                className: "w-12 h-12 rounded-full mr-4",
                              }),
                              E.jsxs("div", {
                                children: [
                                  E.jsx("h4", {
                                    className: "font-bold",
                                    children: "Ana Carolina",
                                  }),
                                  E.jsx("p", {
                                    className: "text-sm text-gray-500",
                                    children: "Aluna desde 2022",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          E.jsx("p", {
                            className: "text-gray-600",
                            children:
                              '"Em 3 meses já estava faturando R$8.000/mês. O curso mudou minha vida!"',
                          }),
                        ],
                      }),
                      E.jsxs("div", {
                        className: "border p-4 rounded-lg",
                        children: [
                          E.jsxs("div", {
                            className: "flex items-center mb-4",
                            children: [
                              E.jsx("img", {
                                src: "https://randomuser.me/api/portraits/men/44.jpg",
                                alt: "Depoimento",
                                className: "w-12 h-12 rounded-full mr-4",
                              }),
                              E.jsxs("div", {
                                children: [
                                  E.jsx("h4", {
                                    className: "font-bold",
                                    children: "Ricardo Almeida",
                                  }),
                                  E.jsx("p", {
                                    className: "text-sm text-gray-500",
                                    children: "Aluno desde 2021",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          E.jsx("p", {
                            className: "text-gray-600",
                            children:
                              '"Sai do meu emprego e hoje tenho liberdade geográfica graças a esse método."',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            E.jsx("section", {
              className: "py-12 bg-blue-600 text-white",
              children: E.jsxs("div", {
                className: "container mx-auto px-4 text-center",
                children: [
                  E.jsx("h2", {
                    className: "text-2xl font-bold mb-6",
                    children: "NÃO PERCA ESSA OPORTUNIDADE!",
                  }),
                  E.jsx("p", {
                    className: "mb-8 max-w-2xl mx-auto",
                    children:
                      "Garanta seu acesso agora mesmo e comece sua jornada rumo à liberdade financeira.",
                  }),
                  E.jsx("a", {
                    href: "https://pay.hotmart.com/N70241222A?sck=HOTMART_SITE&off=gi679r8t&hotfeature=33&_gl=1*10lshq5*_gcl_au*MTI2NjYwOTI3OS4xNzQyMzE2Mzk5*_ga*MTA3MTU2NDQ1Mi4xNzQyMzE2NDAw*_ga_GQH2V1F11Q*czE3NDY1Mzc4NzgkbzUkZzEkdDE3NDY1Mzc5MDMkajQwJGwwJGgw&bid=1746537904972",
                    className:
                      "bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded-full inline-block transition duration-300 text-lg",
                    children: "QUERO ME INSCREVER AGORA",
                  }),
                  E.jsx("div", {
                    className: "mt-6 flex items-center justify-center",
                    children: E.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        E.jsx("img", {
                          src: "https://hotmart.com/images/logo-hotmart.svg",
                          alt: "Hotmart",
                          className: "h-8 mr-2",
                        }),
                        E.jsx("span", {
                          className: "text-sm",
                          children: "Compra 100% segura",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            E.jsx("footer", {
              className: "bg-gray-800 text-white py-8",
              children: E.jsxs("div", {
                className: "container mx-auto px-4 text-center text-sm",
                children: [
                  E.jsx("p", {
                    children:
                      "© 2023 Fórmula do Marketing Digital. Todos os direitos reservados.",
                  }),
                  E.jsx("p", {
                    className: "mt-2",
                    children:
                      "Este produto é comercializado com apoio da Hotmart. A plataforma não faz controle editorial prévio dos produtos comercializados, nem avalia a tecnicidade e experiência daqueles que os produzem. A existência de um produto e sua aquisição, por meio da plataforma, não podem ser consideradas como garantia de qualidade de conteúdo e resultado, em qualquer hipótese. Ao adquiri-lo, o comprador declara estar ciente dessas informações.",
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  ZS = new fE(),
  JS = () =>
    E.jsx(hE, {
      client: ZS,
      children: E.jsxs(Hx, {
        children: [
          E.jsx(Uw, {}),
          E.jsx(v1, {}),
          E.jsx(ZE, {
            children: E.jsxs(KE, {
              children: [
                E.jsx(Ji, { path: "/", element: E.jsx(tS, {}) }),
                E.jsx(Ji, { path: "/not-available", element: E.jsx(XS, {}) }),
                " ",
                E.jsx(Ji, { path: "*", element: E.jsx(nS, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
Fh(document.getElementById("root")).render(E.jsx(JS, {}));

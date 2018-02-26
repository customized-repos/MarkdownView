!function(e) {
    function __webpack_require__(n) {
        if (t[n])
            return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, __webpack_require__),
        r.l = !0,
        r.exports
    }
    var t = {};
    __webpack_require__.m = e,
    __webpack_require__.c = t,
    __webpack_require__.i = function(e) {
        return e
    }
    ,
    __webpack_require__.d = function(e, t, n) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }
    ,
    __webpack_require__.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return __webpack_require__.d(t, "a", t),
        t
    }
    ,
    __webpack_require__.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    __webpack_require__.p = "",
    __webpack_require__(__webpack_require__.s = 256)
}([function(e, t, n) {
    "use strict";
    function _class(e) {
        return Object.prototype.toString.call(e)
    }
    function isString(e) {
        return "[object String]" === _class(e)
    }
    function has(e, t) {
        return a.call(e, t)
    }
    function assign(e) {
        return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
            if (t) {
                if ("object" !== (void 0 === t ? "undefined" : r(t)))
                    throw new TypeError(t + "must be object");
                Object.keys(t).forEach(function(n) {
                    e[n] = t[n]
                })
            }
        }),
        e
    }
    function arrayReplaceAt(e, t, n) {
        return [].concat(e.slice(0, t), n, e.slice(t + 1))
    }
    function isValidEntityCode(e) {
        return !(e >= 55296 && e <= 57343) && (!(e >= 64976 && e <= 65007) && (65535 != (65535 & e) && 65534 != (65535 & e) && (!(e >= 0 && e <= 8) && (11 !== e && (!(e >= 14 && e <= 31) && (!(e >= 127 && e <= 159) && !(e > 1114111)))))))
    }
    function fromCodePoint(e) {
        if (e > 65535) {
            e -= 65536;
            var t = 55296 + (e >> 10)
              , n = 56320 + (1023 & e);
            return String.fromCharCode(t, n)
        }
        return String.fromCharCode(e)
    }
    function replaceEntityPattern(e, t) {
        var n = 0;
        return has(c, t) ? c[t] : 35 === t.charCodeAt(0) && l.test(t) && (n = "x" === t[1].toLowerCase() ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10),
        isValidEntityCode(n)) ? fromCodePoint(n) : e
    }
    function unescapeMd(e) {
        return e.indexOf("\\") < 0 ? e : e.replace(i, "$1")
    }
    function unescapeAll(e) {
        return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(o, function(e, t, n) {
            return t || replaceEntityPattern(e, n)
        })
    }
    function replaceUnsafeChar(e) {
        return p[e]
    }
    function escapeHtml(e) {
        return d.test(e) ? e.replace(u, replaceUnsafeChar) : e
    }
    function escapeRE(e) {
        return e.replace(m, "\\$&")
    }
    function isSpace(e) {
        switch (e) {
        case 9:
        case 32:
            return !0
        }
        return !1
    }
    function isWhiteSpace(e) {
        if (e >= 8192 && e <= 8202)
            return !0;
        switch (e) {
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 32:
        case 160:
        case 5760:
        case 8239:
        case 8287:
        case 12288:
            return !0
        }
        return !1
    }
    function isPunctChar(e) {
        return g.test(e)
    }
    function isMdAsciiPunct(e) {
        switch (e) {
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 124:
        case 125:
        case 126:
            return !0;
        default:
            return !1
        }
    }
    function normalizeReference(e) {
        return e.trim().replace(/\s+/g, " ").toUpperCase()
    }
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , a = Object.prototype.hasOwnProperty
      , i = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g
      , s = /&([a-z#][a-z0-9]{1,31});/gi
      , o = new RegExp(i.source + "|" + s.source,"gi")
      , l = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i
      , c = n(4)
      , d = /[&<>"]/
      , u = /[&<>"]/g
      , p = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;"
    }
      , m = /[.?*+^$[\]\\(){}|-]/g
      , g = n(3);
    t.lib = {},
    t.lib.mdurl = n(8),
    t.lib.ucmicro = n(253),
    t.assign = assign,
    t.isString = isString,
    t.has = has,
    t.unescapeMd = unescapeMd,
    t.unescapeAll = unescapeAll,
    t.isValidEntityCode = isValidEntityCode,
    t.fromCodePoint = fromCodePoint,
    t.escapeHtml = escapeHtml,
    t.arrayReplaceAt = arrayReplaceAt,
    t.isSpace = isSpace,
    t.isWhiteSpace = isWhiteSpace,
    t.isMdAsciiPunct = isMdAsciiPunct,
    t.isPunctChar = isPunctChar,
    t.escapeRE = escapeRE,
    t.normalizeReference = normalizeReference
}
, function(e, t, n) {
    "use strict";
    function Ruler() {
        this.__rules__ = [],
        this.__cache__ = null
    }
    Ruler.prototype.__find__ = function(e) {
        for (var t = 0; t < this.__rules__.length; t++)
            if (this.__rules__[t].name === e)
                return t;
        return -1
    }
    ,
    Ruler.prototype.__compile__ = function() {
        var e = this
          , t = [""];
        e.__rules__.forEach(function(e) {
            e.enabled && e.alt.forEach(function(e) {
                t.indexOf(e) < 0 && t.push(e)
            })
        }),
        e.__cache__ = {},
        t.forEach(function(t) {
            e.__cache__[t] = [],
            e.__rules__.forEach(function(n) {
                n.enabled && (t && n.alt.indexOf(t) < 0 || e.__cache__[t].push(n.fn))
            })
        })
    }
    ,
    Ruler.prototype.at = function(e, t, n) {
        var r = this.__find__(e)
          , a = n || {};
        if (-1 === r)
            throw new Error("Parser rule not found: " + e);
        this.__rules__[r].fn = t,
        this.__rules__[r].alt = a.alt || [],
        this.__cache__ = null
    }
    ,
    Ruler.prototype.before = function(e, t, n, r) {
        var a = this.__find__(e)
          , i = r || {};
        if (-1 === a)
            throw new Error("Parser rule not found: " + e);
        this.__rules__.splice(a, 0, {
            name: t,
            enabled: !0,
            fn: n,
            alt: i.alt || []
        }),
        this.__cache__ = null
    }
    ,
    Ruler.prototype.after = function(e, t, n, r) {
        var a = this.__find__(e)
          , i = r || {};
        if (-1 === a)
            throw new Error("Parser rule not found: " + e);
        this.__rules__.splice(a + 1, 0, {
            name: t,
            enabled: !0,
            fn: n,
            alt: i.alt || []
        }),
        this.__cache__ = null
    }
    ,
    Ruler.prototype.push = function(e, t, n) {
        var r = n || {};
        this.__rules__.push({
            name: e,
            enabled: !0,
            fn: t,
            alt: r.alt || []
        }),
        this.__cache__ = null
    }
    ,
    Ruler.prototype.enable = function(e, t) {
        Array.isArray(e) || (e = [e]);
        var n = [];
        return e.forEach(function(e) {
            var r = this.__find__(e);
            if (r < 0) {
                if (t)
                    return;
                throw new Error("Rules manager: invalid rule name " + e)
            }
            this.__rules__[r].enabled = !0,
            n.push(e)
        }, this),
        this.__cache__ = null,
        n
    }
    ,
    Ruler.prototype.enableOnly = function(e, t) {
        Array.isArray(e) || (e = [e]),
        this.__rules__.forEach(function(e) {
            e.enabled = !1
        }),
        this.enable(e, t)
    }
    ,
    Ruler.prototype.disable = function(e, t) {
        Array.isArray(e) || (e = [e]);
        var n = [];
        return e.forEach(function(e) {
            var r = this.__find__(e);
            if (r < 0) {
                if (t)
                    return;
                throw new Error("Rules manager: invalid rule name " + e)
            }
            this.__rules__[r].enabled = !1,
            n.push(e)
        }, this),
        this.__cache__ = null,
        n
    }
    ,
    Ruler.prototype.getRules = function(e) {
        return null === this.__cache__ && this.__compile__(),
        this.__cache__[e] || []
    }
    ,
    e.exports = Ruler
}
, function(e, t, n) {
    "use strict";
    function Token(e, t, n) {
        this.type = e,
        this.tag = t,
        this.attrs = null,
        this.map = null,
        this.nesting = n,
        this.level = 0,
        this.children = null,
        this.content = "",
        this.markup = "",
        this.info = "",
        this.meta = null,
        this.block = !1,
        this.hidden = !1
    }
    Token.prototype.attrIndex = function(e) {
        var t, n, r;
        if (!this.attrs)
            return -1;
        for (t = this.attrs,
        n = 0,
        r = t.length; n < r; n++)
            if (t[n][0] === e)
                return n;
        return -1
    }
    ,
    Token.prototype.attrPush = function(e) {
        this.attrs ? this.attrs.push(e) : this.attrs = [e]
    }
    ,
    Token.prototype.attrSet = function(e, t) {
        var n = this.attrIndex(e)
          , r = [e, t];
        n < 0 ? this.attrPush(r) : this.attrs[n] = r
    }
    ,
    Token.prototype.attrGet = function(e) {
        var t = this.attrIndex(e)
          , n = null;
        return t >= 0 && (n = this.attrs[t][1]),
        n
    }
    ,
    Token.prototype.attrJoin = function(e, t) {
        var n = this.attrIndex(e);
        n < 0 ? this.attrPush([e, t]) : this.attrs[n][1] = this.attrs[n][1] + " " + t
    }
    ,
    e.exports = Token
}
, function(e, t, n) {
    "use strict";
    e.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E44\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/
}
, function(e, t, n) {
    "use strict";
    e.exports = n(257)
}
, function(e, t, n) {
    "use strict";
    var r = "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>"
      , a = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>"
      , i = new RegExp("^(?:" + r + "|" + a + "|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)")
      , s = new RegExp("^(?:" + r + "|" + a + ")");
    e.exports.HTML_TAG_RE = i,
    e.exports.HTML_OPEN_CLOSE_TAG_RE = s
}
, function(e, t, n) {
    "use strict";
    e.exports.tokenize = function(e, t) {
        var n, r, a, i = e.pos, s = e.src.charCodeAt(i);
        if (t)
            return !1;
        if (95 !== s && 42 !== s)
            return !1;
        for (r = e.scanDelims(e.pos, 42 === s),
        n = 0; n < r.length; n++)
            a = e.push("text", "", 0),
            a.content = String.fromCharCode(s),
            e.delimiters.push({
                marker: s,
                length: r.length,
                jump: n,
                token: e.tokens.length - 1,
                level: e.level,
                end: -1,
                open: r.can_open,
                close: r.can_close
            });
        return e.pos += r.length,
        !0
    }
    ,
    e.exports.postProcess = function(e) {
        var t, n, r, a, i, s, o = e.delimiters, l = e.delimiters.length;
        for (t = 0; t < l; t++)
            n = o[t],
            95 !== n.marker && 42 !== n.marker || -1 !== n.end && (r = o[n.end],
            s = t + 1 < l && o[t + 1].end === n.end - 1 && o[t + 1].token === n.token + 1 && o[n.end - 1].token === r.token - 1 && o[t + 1].marker === n.marker,
            i = String.fromCharCode(n.marker),
            a = e.tokens[n.token],
            a.type = s ? "strong_open" : "em_open",
            a.tag = s ? "strong" : "em",
            a.nesting = 1,
            a.markup = s ? i + i : i,
            a.content = "",
            a = e.tokens[r.token],
            a.type = s ? "strong_close" : "em_close",
            a.tag = s ? "strong" : "em",
            a.nesting = -1,
            a.markup = s ? i + i : i,
            a.content = "",
            s && (e.tokens[o[t + 1].token].content = "",
            e.tokens[o[n.end - 1].token].content = "",
            t++))
    }
}
, function(e, t, n) {
    "use strict";
    e.exports.tokenize = function(e, t) {
        var n, r, a, i, s, o = e.pos, l = e.src.charCodeAt(o);
        if (t)
            return !1;
        if (126 !== l)
            return !1;
        if (r = e.scanDelims(e.pos, !0),
        i = r.length,
        s = String.fromCharCode(l),
        i < 2)
            return !1;
        for (i % 2 && (a = e.push("text", "", 0),
        a.content = s,
        i--),
        n = 0; n < i; n += 2)
            a = e.push("text", "", 0),
            a.content = s + s,
            e.delimiters.push({
                marker: l,
                jump: n,
                token: e.tokens.length - 1,
                level: e.level,
                end: -1,
                open: r.can_open,
                close: r.can_close
            });
        return e.pos += r.length,
        !0
    }
    ,
    e.exports.postProcess = function(e) {
        var t, n, r, a, i, s = [], o = e.delimiters, l = e.delimiters.length;
        for (t = 0; t < l; t++)
            r = o[t],
            126 === r.marker && -1 !== r.end && (a = o[r.end],
            i = e.tokens[r.token],
            i.type = "s_open",
            i.tag = "s",
            i.nesting = 1,
            i.markup = "~~",
            i.content = "",
            i = e.tokens[a.token],
            i.type = "s_close",
            i.tag = "s",
            i.nesting = -1,
            i.markup = "~~",
            i.content = "",
            "text" === e.tokens[a.token - 1].type && "~" === e.tokens[a.token - 1].content && s.push(a.token - 1));
        for (; s.length; ) {
            for (t = s.pop(),
            n = t + 1; n < e.tokens.length && "s_close" === e.tokens[n].type; )
                n++;
            n--,
            t !== n && (i = e.tokens[n],
            e.tokens[n] = e.tokens[t],
            e.tokens[t] = i)
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports.encode = n(248),
    e.exports.decode = n(247),
    e.exports.format = n(249),
    e.exports.parse = n(250)
}
, function(e, t, n) {
    "use strict";
    e.exports = /[\0-\x1F\x7F-\x9F]/
}
, function(e, t, n) {
    "use strict";
    e.exports = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/
}
, function(e, t, n) {
    "use strict";
    e.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
}
, function(e, t) {
    (function(t) {
        e.exports = t
    }
    ).call(t, {})
}
, function(e, t, n) {
    "use strict";
    var r = n(20);
    r.registerLanguage("1c", n(21)),
    r.registerLanguage("abnf", n(22)),
    r.registerLanguage("accesslog", n(23)),
    r.registerLanguage("actionscript", n(24)),
    r.registerLanguage("ada", n(25)),
    r.registerLanguage("apache", n(26)),
    r.registerLanguage("applescript", n(27)),
    r.registerLanguage("cpp", n(51)),
    r.registerLanguage("arduino", n(28)),
    r.registerLanguage("armasm", n(29)),
    r.registerLanguage("xml", n(193)),
    r.registerLanguage("asciidoc", n(30)),
    r.registerLanguage("aspectj", n(31)),
    r.registerLanguage("autohotkey", n(32)),
    r.registerLanguage("autoit", n(33)),
    r.registerLanguage("avrasm", n(34)),
    r.registerLanguage("awk", n(35)),
    r.registerLanguage("axapta", n(36)),
    r.registerLanguage("bash", n(37)),
    r.registerLanguage("basic", n(38)),
    r.registerLanguage("bnf", n(39)),
    r.registerLanguage("brainfuck", n(40)),
    r.registerLanguage("cal", n(41)),
    r.registerLanguage("capnproto", n(42)),
    r.registerLanguage("ceylon", n(43)),
    r.registerLanguage("clean", n(44)),
    r.registerLanguage("clojure", n(46)),
    r.registerLanguage("clojure-repl", n(45)),
    r.registerLanguage("cmake", n(47)),
    r.registerLanguage("coffeescript", n(48)),
    r.registerLanguage("coq", n(49)),
    r.registerLanguage("cos", n(50)),
    r.registerLanguage("crmsh", n(52)),
    r.registerLanguage("crystal", n(53)),
    r.registerLanguage("cs", n(54)),
    r.registerLanguage("csp", n(55)),
    r.registerLanguage("css", n(56)),
    r.registerLanguage("d", n(57)),
    r.registerLanguage("markdown", n(117)),
    r.registerLanguage("dart", n(58)),
    r.registerLanguage("delphi", n(59)),
    r.registerLanguage("diff", n(60)),
    r.registerLanguage("django", n(61)),
    r.registerLanguage("dns", n(62)),
    r.registerLanguage("dockerfile", n(63)),
    r.registerLanguage("dos", n(64)),
    r.registerLanguage("dsconfig", n(65)),
    r.registerLanguage("dts", n(66)),
    r.registerLanguage("dust", n(67)),
    r.registerLanguage("ebnf", n(68)),
    r.registerLanguage("elixir", n(69)),
    r.registerLanguage("elm", n(70)),
    r.registerLanguage("ruby", n(157)),
    r.registerLanguage("erb", n(71)),
    r.registerLanguage("erlang-repl", n(72)),
    r.registerLanguage("erlang", n(73)),
    r.registerLanguage("excel", n(74)),
    r.registerLanguage("fix", n(75)),
    r.registerLanguage("flix", n(76)),
    r.registerLanguage("fortran", n(77)),
    r.registerLanguage("fsharp", n(78)),
    r.registerLanguage("gams", n(79)),
    r.registerLanguage("gauss", n(80)),
    r.registerLanguage("gcode", n(81)),
    r.registerLanguage("gherkin", n(82)),
    r.registerLanguage("glsl", n(83)),
    r.registerLanguage("go", n(84)),
    r.registerLanguage("golo", n(85)),
    r.registerLanguage("gradle", n(86)),
    r.registerLanguage("groovy", n(87)),
    r.registerLanguage("haml", n(88)),
    r.registerLanguage("handlebars", n(89)),
    r.registerLanguage("haskell", n(90)),
    r.registerLanguage("haxe", n(91)),
    r.registerLanguage("hsp", n(92)),
    r.registerLanguage("htmlbars", n(93)),
    r.registerLanguage("http", n(94)),
    r.registerLanguage("hy", n(95)),
    r.registerLanguage("inform7", n(96)),
    r.registerLanguage("ini", n(97)),
    r.registerLanguage("irpf90", n(98)),
    r.registerLanguage("java", n(99)),
    r.registerLanguage("javascript", n(100)),
    r.registerLanguage("jboss-cli", n(101)),
    r.registerLanguage("json", n(102)),
    r.registerLanguage("julia", n(104)),
    r.registerLanguage("julia-repl", n(103)),
    r.registerLanguage("kotlin", n(105)),
    r.registerLanguage("lasso", n(106)),
    r.registerLanguage("ldif", n(107)),
    r.registerLanguage("leaf", n(108)),
    r.registerLanguage("less", n(109)),
    r.registerLanguage("lisp", n(110)),
    r.registerLanguage("livecodeserver", n(111)),
    r.registerLanguage("livescript", n(112)),
    r.registerLanguage("llvm", n(113)),
    r.registerLanguage("lsl", n(114)),
    r.registerLanguage("lua", n(115)),
    r.registerLanguage("makefile", n(116)),
    r.registerLanguage("mathematica", n(118)),
    r.registerLanguage("matlab", n(119)),
    r.registerLanguage("maxima", n(120)),
    r.registerLanguage("mel", n(121)),
    r.registerLanguage("mercury", n(122)),
    r.registerLanguage("mipsasm", n(123)),
    r.registerLanguage("mizar", n(124)),
    r.registerLanguage("perl", n(138)),
    r.registerLanguage("mojolicious", n(125)),
    r.registerLanguage("monkey", n(126)),
    r.registerLanguage("moonscript", n(127)),
    r.registerLanguage("n1ql", n(128)),
    r.registerLanguage("nginx", n(129)),
    r.registerLanguage("nimrod", n(130)),
    r.registerLanguage("nix", n(131)),
    r.registerLanguage("nsis", n(132)),
    r.registerLanguage("objectivec", n(133)),
    r.registerLanguage("ocaml", n(134)),
    r.registerLanguage("openscad", n(135)),
    r.registerLanguage("oxygene", n(136)),
    r.registerLanguage("parser3", n(137)),
    r.registerLanguage("pf", n(139)),
    r.registerLanguage("php", n(140)),
    r.registerLanguage("pony", n(141)),
    r.registerLanguage("powershell", n(142)),
    r.registerLanguage("processing", n(143)),
    r.registerLanguage("profile", n(144)),
    r.registerLanguage("prolog", n(145)),
    r.registerLanguage("protobuf", n(146)),
    r.registerLanguage("puppet", n(147)),
    r.registerLanguage("purebasic", n(148)),
    r.registerLanguage("python", n(149)),
    r.registerLanguage("q", n(150)),
    r.registerLanguage("qml", n(151)),
    r.registerLanguage("r", n(152)),
    r.registerLanguage("rib", n(153)),
    r.registerLanguage("roboconf", n(154)),
    r.registerLanguage("routeros", n(155)),
    r.registerLanguage("rsl", n(156)),
    r.registerLanguage("ruleslanguage", n(158)),
    r.registerLanguage("rust", n(159)),
    r.registerLanguage("scala", n(160)),
    r.registerLanguage("scheme", n(161)),
    r.registerLanguage("scilab", n(162)),
    r.registerLanguage("scss", n(163)),
    r.registerLanguage("shell", n(164)),
    r.registerLanguage("smali", n(165)),
    r.registerLanguage("smalltalk", n(166)),
    r.registerLanguage("sml", n(167)),
    r.registerLanguage("sqf", n(168)),
    r.registerLanguage("sql", n(169)),
    r.registerLanguage("stan", n(170)),
    r.registerLanguage("stata", n(171)),
    r.registerLanguage("step21", n(172)),
    r.registerLanguage("stylus", n(173)),
    r.registerLanguage("subunit", n(174)),
    r.registerLanguage("swift", n(175)),
    r.registerLanguage("taggerscript", n(176)),
    r.registerLanguage("yaml", n(195)),
    r.registerLanguage("tap", n(177)),
    r.registerLanguage("tcl", n(178)),
    r.registerLanguage("tex", n(179)),
    r.registerLanguage("thrift", n(180)),
    r.registerLanguage("tp", n(181)),
    r.registerLanguage("twig", n(182)),
    r.registerLanguage("typescript", n(183)),
    r.registerLanguage("vala", n(184)),
    r.registerLanguage("vbnet", n(185)),
    r.registerLanguage("vbscript", n(187)),
    r.registerLanguage("vbscript-html", n(186)),
    r.registerLanguage("verilog", n(188)),
    r.registerLanguage("vhdl", n(189)),
    r.registerLanguage("vim", n(190)),
    r.registerLanguage("x86asm", n(191)),
    r.registerLanguage("xl", n(192)),
    r.registerLanguage("xquery", n(194)),
    r.registerLanguage("zephir", n(196)),
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    var r = n(258)
      , a = n(199)
      , i = n(201)
      , s = n(202)
      , o = n(200);
    e.exports = function(e, t) {
        var n = {
            defs: r,
            shortcuts: a,
            enabled: []
        }
          , l = o(e.utils.assign({}, n, t || {}));
        e.renderer.rules.emoji = i,
        e.core.ruler.push("emoji", s(e, l.defs, l.shortcuts, l.scanRE, l.replaceRE))
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = n(208)
}
, function(e, t) {}
, function(e, t) {}
, function(e, t) {}
, function(e, t) {}
, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ;
    !function(e) {
        "object" === ("undefined" == typeof window ? "undefined" : r(window)) && window || "object" === ("undefined" == typeof self ? "undefined" : r(self)) && self;
        e(t)
    }(function(e) {
        function escape(e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
        function tag(e) {
            return e.nodeName.toLowerCase()
        }
        function testRe(e, t) {
            var n = e && e.exec(t);
            return n && 0 === n.index
        }
        function isNotHighlighted(e) {
            return i.test(e)
        }
        function blockLanguage(e) {
            var t, n, r, a, i = e.className + " ";
            if (i += e.parentNode ? e.parentNode.className : "",
            n = s.exec(i))
                return getLanguage(n[1]) ? n[1] : "no-highlight";
            for (i = i.split(/\s+/),
            t = 0,
            r = i.length; t < r; t++)
                if (a = i[t],
                isNotHighlighted(a) || getLanguage(a))
                    return a
        }
        function inherit(e) {
            var t, n = {}, r = Array.prototype.slice.call(arguments, 1);
            for (t in e)
                n[t] = e[t];
            return r.forEach(function(e) {
                for (t in e)
                    n[t] = e[t]
            }),
            n
        }
        function nodeStream(e) {
            var t = [];
            return function _nodeStream(e, n) {
                for (var r = e.firstChild; r; r = r.nextSibling)
                    3 === r.nodeType ? n += r.nodeValue.length : 1 === r.nodeType && (t.push({
                        event: "start",
                        offset: n,
                        node: r
                    }),
                    n = _nodeStream(r, n),
                    tag(r).match(/br|hr|img|input/) || t.push({
                        event: "stop",
                        offset: n,
                        node: r
                    }));
                return n
            }(e, 0),
            t
        }
        function mergeStreams(e, n, r) {
            function selectStream() {
                return e.length && n.length ? e[0].offset !== n[0].offset ? e[0].offset < n[0].offset ? e : n : "start" === n[0].event ? e : n : e.length ? e : n
            }
            function open(e) {
                function attr_str(e) {
                    return " " + e.nodeName + '="' + escape(e.value).replace('"', "&quot;") + '"'
                }
                i += "<" + tag(e) + t.map.call(e.attributes, attr_str).join("") + ">"
            }
            function close(e) {
                i += "</" + tag(e) + ">"
            }
            function render(e) {
                ("start" === e.event ? open : close)(e.node)
            }
            for (var a = 0, i = "", s = []; e.length || n.length; ) {
                var o = selectStream();
                if (i += escape(r.substring(a, o[0].offset)),
                a = o[0].offset,
                o === e) {
                    s.reverse().forEach(close);
                    do {
                        render(o.splice(0, 1)[0]),
                        o = selectStream()
                    } while (o === e && o.length && o[0].offset === a);s.reverse().forEach(open)
                } else
                    "start" === o[0].event ? s.push(o[0].node) : s.pop(),
                    render(o.splice(0, 1)[0])
            }
            return i + escape(r.substr(a))
        }
        function expand_mode(e) {
            return e.variants && !e.cached_variants && (e.cached_variants = e.variants.map(function(t) {
                return inherit(e, {
                    variants: null
                }, t)
            })),
            e.cached_variants || e.endsWithParent && [inherit(e)] || [e]
        }
        function compileLanguage(e) {
            function reStr(e) {
                return e && e.source || e
            }
            function langRe(t, n) {
                return new RegExp(reStr(t),"m" + (e.case_insensitive ? "i" : "") + (n ? "g" : ""))
            }
            function compileMode(t, r) {
                if (!t.compiled) {
                    if (t.compiled = !0,
                    t.keywords = t.keywords || t.beginKeywords,
                    t.keywords) {
                        var a = {}
                          , i = function(t, n) {
                            e.case_insensitive && (n = n.toLowerCase()),
                            n.split(" ").forEach(function(e) {
                                var n = e.split("|");
                                a[n[0]] = [t, n[1] ? Number(n[1]) : 1]
                            })
                        };
                        "string" == typeof t.keywords ? i("keyword", t.keywords) : n(t.keywords).forEach(function(e) {
                            i(e, t.keywords[e])
                        }),
                        t.keywords = a
                    }
                    t.lexemesRe = langRe(t.lexemes || /\w+/, !0),
                    r && (t.beginKeywords && (t.begin = "\\b(" + t.beginKeywords.split(" ").join("|") + ")\\b"),
                    t.begin || (t.begin = /\B|\b/),
                    t.beginRe = langRe(t.begin),
                    t.end || t.endsWithParent || (t.end = /\B|\b/),
                    t.end && (t.endRe = langRe(t.end)),
                    t.terminator_end = reStr(t.end) || "",
                    t.endsWithParent && r.terminator_end && (t.terminator_end += (t.end ? "|" : "") + r.terminator_end)),
                    t.illegal && (t.illegalRe = langRe(t.illegal)),
                    null == t.relevance && (t.relevance = 1),
                    t.contains || (t.contains = []),
                    t.contains = Array.prototype.concat.apply([], t.contains.map(function(e) {
                        return expand_mode("self" === e ? t : e)
                    })),
                    t.contains.forEach(function(e) {
                        compileMode(e, t)
                    }),
                    t.starts && compileMode(t.starts, r);
                    var s = t.contains.map(function(e) {
                        return e.beginKeywords ? "\\.?(" + e.begin + ")\\.?" : e.begin
                    }).concat([t.terminator_end, t.illegal]).map(reStr).filter(Boolean);
                    t.terminators = s.length ? langRe(s.join("|"), !0) : {
                        exec: function() {
                            return null
                        }
                    }
                }
            }
            compileMode(e)
        }
        function highlight(e, t, n, a) {
            function subMode(e, t) {
                var n, r;
                for (n = 0,
                r = t.contains.length; n < r; n++)
                    if (testRe(t.contains[n].beginRe, e))
                        return t.contains[n]
            }
            function endOfMode(e, t) {
                if (testRe(e.endRe, t)) {
                    for (; e.endsParent && e.parent; )
                        e = e.parent;
                    return e
                }
                if (e.endsWithParent)
                    return endOfMode(e.parent, t)
            }
            function isIllegal(e, t) {
                return !n && testRe(t.illegalRe, e)
            }
            function keywordMatch(e, t) {
                var n = i.case_insensitive ? t[0].toLowerCase() : t[0];
                return e.keywords.hasOwnProperty(n) && e.keywords[n]
            }
            function buildSpan(e, t, n, r) {
                var a = r ? "" : c.classPrefix
                  , i = '<span class="' + a
                  , s = n ? "" : l;
                return (i += e + '">') + t + s
            }
            function processKeywords() {
                var e, t, n, r;
                if (!o.keywords)
                    return escape(p);
                for (r = "",
                t = 0,
                o.lexemesRe.lastIndex = 0,
                n = o.lexemesRe.exec(p); n; )
                    r += escape(p.substring(t, n.index)),
                    e = keywordMatch(o, n),
                    e ? (m += e[1],
                    r += buildSpan(e[0], escape(n[0]))) : r += escape(n[0]),
                    t = o.lexemesRe.lastIndex,
                    n = o.lexemesRe.exec(p);
                return r + escape(p.substr(t))
            }
            function processSubLanguage() {
                var e = "string" == typeof o.subLanguage;
                if (e && !r[o.subLanguage])
                    return escape(p);
                var t = e ? highlight(o.subLanguage, p, !0, d[o.subLanguage]) : highlightAuto(p, o.subLanguage.length ? o.subLanguage : void 0);
                return o.relevance > 0 && (m += t.relevance),
                e && (d[o.subLanguage] = t.top),
                buildSpan(t.language, t.value, !1, !0)
            }
            function processBuffer() {
                u += null != o.subLanguage ? processSubLanguage() : processKeywords(),
                p = ""
            }
            function startNewMode(e) {
                u += e.className ? buildSpan(e.className, "", !0) : "",
                o = Object.create(e, {
                    parent: {
                        value: o
                    }
                })
            }
            function processLexeme(e, t) {
                if (p += e,
                null == t)
                    return processBuffer(),
                    0;
                var n = subMode(t, o);
                if (n)
                    return n.skip ? p += t : (n.excludeBegin && (p += t),
                    processBuffer(),
                    n.returnBegin || n.excludeBegin || (p = t)),
                    startNewMode(n, t),
                    n.returnBegin ? 0 : t.length;
                var r = endOfMode(o, t);
                if (r) {
                    var a = o;
                    a.skip ? p += t : (a.returnEnd || a.excludeEnd || (p += t),
                    processBuffer(),
                    a.excludeEnd && (p = t));
                    do {
                        o.className && (u += l),
                        o.skip || (m += o.relevance),
                        o = o.parent
                    } while (o !== r.parent);return r.starts && startNewMode(r.starts, ""),
                    a.returnEnd ? 0 : t.length
                }
                if (isIllegal(t, o))
                    throw new Error('Illegal lexeme "' + t + '" for mode "' + (o.className || "<unnamed>") + '"');
                return p += t,
                t.length || 1
            }
            var i = getLanguage(e);
            if (!i)
                throw new Error('Unknown language: "' + e + '"');
            compileLanguage(i);
            var s, o = a || i, d = {}, u = "";
            for (s = o; s !== i; s = s.parent)
                s.className && (u = buildSpan(s.className, "", !0) + u);
            var p = ""
              , m = 0;
            try {
                for (var g, _, b = 0; ; ) {
                    if (o.terminators.lastIndex = b,
                    !(g = o.terminators.exec(t)))
                        break;
                    _ = processLexeme(t.substring(b, g.index), g[0]),
                    b = g.index + _
                }
                for (processLexeme(t.substr(b)),
                s = o; s.parent; s = s.parent)
                    s.className && (u += l);
                return {
                    relevance: m,
                    value: u,
                    language: e,
                    top: o
                }
            } catch (e) {
                if (e.message && -1 !== e.message.indexOf("Illegal"))
                    return {
                        relevance: 0,
                        value: escape(t)
                    };
                throw e
            }
        }
        function highlightAuto(e, t) {
            t = t || c.languages || n(r);
            var a = {
                relevance: 0,
                value: escape(e)
            }
              , i = a;
            return t.filter(getLanguage).forEach(function(t) {
                var n = highlight(t, e, !1);
                n.language = t,
                n.relevance > i.relevance && (i = n),
                n.relevance > a.relevance && (i = a,
                a = n)
            }),
            i.language && (a.second_best = i),
            a
        }
        function fixMarkup(e) {
            return c.tabReplace || c.useBR ? e.replace(o, function(e, t) {
                return c.useBR && "\n" === e ? "<br>" : c.tabReplace ? t.replace(/\t/g, c.tabReplace) : ""
            }) : e
        }
        function buildClassName(e, t, n) {
            var r = t ? a[t] : n
              , i = [e.trim()];
            return e.match(/\bhljs\b/) || i.push("hljs"),
            -1 === e.indexOf(r) && i.push(r),
            i.join(" ").trim()
        }
        function highlightBlock(e) {
            var t, n, r, a, i, s = blockLanguage(e);
            isNotHighlighted(s) || (c.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
            t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : t = e,
            i = t.textContent,
            r = s ? highlight(s, i, !0) : highlightAuto(i),
            n = nodeStream(t),
            n.length && (a = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
            a.innerHTML = r.value,
            r.value = mergeStreams(n, nodeStream(a), i)),
            r.value = fixMarkup(r.value),
            e.innerHTML = r.value,
            e.className = buildClassName(e.className, s, r.language),
            e.result = {
                language: r.language,
                re: r.relevance
            },
            r.second_best && (e.second_best = {
                language: r.second_best.language,
                re: r.second_best.relevance
            }))
        }
        function configure(e) {
            c = inherit(c, e)
        }
        function initHighlighting() {
            if (!initHighlighting.called) {
                initHighlighting.called = !0;
                var e = document.querySelectorAll("pre code");
                t.forEach.call(e, highlightBlock)
            }
        }
        function initHighlightingOnLoad() {
            addEventListener("DOMContentLoaded", initHighlighting, !1),
            addEventListener("load", initHighlighting, !1)
        }
        function registerLanguage(t, n) {
            var i = r[t] = n(e);
            i.aliases && i.aliases.forEach(function(e) {
                a[e] = t
            })
        }
        function listLanguages() {
            return n(r)
        }
        function getLanguage(e) {
            return e = (e || "").toLowerCase(),
            r[e] || r[a[e]]
        }
        var t = []
          , n = Object.keys
          , r = {}
          , a = {}
          , i = /^(no-?highlight|plain|text)$/i
          , s = /\blang(?:uage)?-([\w-]+)\b/i
          , o = /((^(<[^>]+>|\t|)+|(?:\n)))/gm
          , l = "</span>"
          , c = {
            classPrefix: "hljs-",
            tabReplace: null,
            useBR: !1,
            languages: void 0
        };
        return e.highlight = highlight,
        e.highlightAuto = highlightAuto,
        e.fixMarkup = fixMarkup,
        e.highlightBlock = highlightBlock,
        e.configure = configure,
        e.initHighlighting = initHighlighting,
        e.initHighlightingOnLoad = initHighlightingOnLoad,
        e.registerLanguage = registerLanguage,
        e.listLanguages = listLanguages,
        e.getLanguage = getLanguage,
        e.inherit = inherit,
        e.IDENT_RE = "[a-zA-Z]\\w*",
        e.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*",
        e.NUMBER_RE = "\\b\\d+(\\.\\d+)?",
        e.C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
        e.BINARY_NUMBER_RE = "\\b(0b[01]+)",
        e.RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
        e.BACKSLASH_ESCAPE = {
            begin: "\\\\[\\s\\S]",
            relevance: 0
        },
        e.APOS_STRING_MODE = {
            className: "string",
            begin: "'",
            end: "'",
            illegal: "\\n",
            contains: [e.BACKSLASH_ESCAPE]
        },
        e.QUOTE_STRING_MODE = {
            className: "string",
            begin: '"',
            end: '"',
            illegal: "\\n",
            contains: [e.BACKSLASH_ESCAPE]
        },
        e.PHRASAL_WORDS_MODE = {
            begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
        },
        e.COMMENT = function(t, n, r) {
            var a = e.inherit({
                className: "comment",
                begin: t,
                end: n,
                contains: []
            }, r || {});
            return a.contains.push(e.PHRASAL_WORDS_MODE),
            a.contains.push({
                className: "doctag",
                begin: "(?:TODO|FIXME|NOTE|BUG|XXX):",
                relevance: 0
            }),
            a
        }
        ,
        e.C_LINE_COMMENT_MODE = e.COMMENT("//", "$"),
        e.C_BLOCK_COMMENT_MODE = e.COMMENT("/\\*", "\\*/"),
        e.HASH_COMMENT_MODE = e.COMMENT("#", "$"),
        e.NUMBER_MODE = {
            className: "number",
            begin: e.NUMBER_RE,
            relevance: 0
        },
        e.C_NUMBER_MODE = {
            className: "number",
            begin: e.C_NUMBER_RE,
            relevance: 0
        },
        e.BINARY_NUMBER_MODE = {
            className: "number",
            begin: e.BINARY_NUMBER_RE,
            relevance: 0
        },
        e.CSS_NUMBER_MODE = {
            className: "number",
            begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            relevance: 0
        },
        e.REGEXP_MODE = {
            className: "regexp",
            begin: /\//,
            end: /\/[gimuy]*/,
            illegal: /\n/,
            contains: [e.BACKSLASH_ESCAPE, {
                begin: /\[/,
                end: /\]/,
                relevance: 0,
                contains: [e.BACKSLASH_ESCAPE]
            }]
        },
        e.TITLE_MODE = {
            className: "title",
            begin: e.IDENT_RE,
            relevance: 0
        },
        e.UNDERSCORE_TITLE_MODE = {
            className: "title",
            begin: e.UNDERSCORE_IDENT_RE,
            relevance: 0
        },
        e.METHOD_GUARD = {
            begin: "\\.\\s*" + e.UNDERSCORE_IDENT_RE,
            relevance: 0
        },
        e
    })
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "[A-Za-zА-Яа-яёЁ_][A-Za-zА-Яа-яёЁ_0-9]+"
          , n = "далее возврат вызватьисключение выполнить для если и из или иначе иначеесли исключение каждого конецесли конецпопытки конеццикла не новый перейти перем по пока попытка прервать продолжить тогда цикл экспорт "
          , r = "null истина ложь неопределено"
          , a = e.inherit(e.NUMBER_MODE)
          , i = {
            className: "string",
            begin: '"|\\|',
            end: '"|$',
            contains: [{
                begin: '""'
            }]
        }
          , s = {
            begin: "'",
            end: "'",
            excludeBegin: !0,
            excludeEnd: !0,
            contains: [{
                className: "number",
                begin: "\\d{4}([\\.\\\\/:-]?\\d{2}){0,5}"
            }]
        }
          , o = e.inherit(e.C_LINE_COMMENT_MODE)
          , l = {
            className: "meta",
            lexemes: t,
            begin: "#|&",
            end: "$",
            keywords: {
                "meta-keyword": n + "загрузитьизфайла вебклиент вместо внешнеесоединение клиент конецобласти мобильноеприложениеклиент мобильноеприложениесервер наклиенте наклиентенасервере наклиентенасерверебезконтекста насервере насерверебезконтекста область перед после сервер толстыйклиентобычноеприложение толстыйклиентуправляемоеприложение тонкийклиент "
            },
            contains: [o]
        }
          , c = {
            className: "symbol",
            begin: "~",
            end: ";|:",
            excludeEnd: !0
        };
        return {
            case_insensitive: !0,
            lexemes: t,
            keywords: {
                keyword: n,
                built_in: "разделительстраниц разделительстрок символтабуляции ansitooem oemtoansi ввестивидсубконто ввестиперечисление ввестипериод ввестиплансчетов выбранныйплансчетов датагод датамесяц датачисло заголовоксистемы значениевстроку значениеизстроки каталогиб каталогпользователя кодсимв конгода конецпериодаби конецрассчитанногопериодаби конецстандартногоинтервала конквартала конмесяца коннедели лог лог10 максимальноеколичествосубконто названиеинтерфейса названиенабораправ назначитьвид назначитьсчет найтиссылки началопериодаби началостандартногоинтервала начгода начквартала начмесяца начнедели номерднягода номерднянедели номернеделигода обработкаожидания основнойжурналрасчетов основнойплансчетов основнойязык очиститьокносообщений периодстр получитьвремята получитьдатута получитьдокументта получитьзначенияотбора получитьпозициюта получитьпустоезначение получитьта префиксавтонумерации пропись пустоезначение разм разобратьпозициюдокумента рассчитатьрегистрына рассчитатьрегистрыпо симв создатьобъект статусвозврата стрколичествострок сформироватьпозициюдокумента счетпокоду текущеевремя типзначения типзначениястр установитьтана установитьтапо фиксшаблон шаблон acos asin atan base64значение base64строка cos exp log log10 pow sin sqrt tan xmlзначение xmlстрока xmlтип xmlтипзнч активноеокно безопасныйрежим безопасныйрежимразделенияданных булево ввестидату ввестизначение ввестистроку ввестичисло возможностьчтенияxml вопрос восстановитьзначение врег выгрузитьжурналрегистрации выполнитьобработкуоповещения выполнитьпроверкуправдоступа вычислить год данныеформывзначение дата день деньгода деньнедели добавитьмесяц заблокироватьданныедляредактирования заблокироватьработупользователя завершитьработусистемы загрузитьвнешнююкомпоненту закрытьсправку записатьjson записатьxml записатьдатуjson записьжурналарегистрации заполнитьзначениясвойств запроситьразрешениепользователя запуститьприложение запуститьсистему зафиксироватьтранзакцию значениевданныеформы значениевстрокувнутр значениевфайл значениезаполнено значениеизстрокивнутр значениеизфайла изxmlтипа импортмоделиxdto имякомпьютера имяпользователя инициализироватьпредопределенныеданные информацияобошибке каталогбиблиотекимобильногоустройства каталогвременныхфайлов каталогдокументов каталогпрограммы кодироватьстроку кодлокализацииинформационнойбазы кодсимвола командасистемы конецгода конецдня конецквартала конецмесяца конецминуты конецнедели конецчаса конфигурациябазыданныхизмененадинамически конфигурацияизменена копироватьданныеформы копироватьфайл краткоепредставлениеошибки лев макс местноевремя месяц мин минута монопольныйрежим найти найтинедопустимыесимволыxml найтиокнопонавигационнойссылке найтипомеченныенаудаление найтипоссылкам найтифайлы началогода началодня началоквартала началомесяца началоминуты началонедели началочаса начатьзапросразрешенияпользователя начатьзапускприложения начатькопированиефайла начатьперемещениефайла начатьподключениевнешнейкомпоненты начатьподключениерасширенияработыскриптографией начатьподключениерасширенияработысфайлами начатьпоискфайлов начатьполучениекаталогавременныхфайлов начатьполучениекаталогадокументов начатьполучениерабочегокаталогаданныхпользователя начатьполучениефайлов начатьпомещениефайла начатьпомещениефайлов начатьсозданиедвоичныхданныхизфайла начатьсозданиекаталога начатьтранзакцию начатьудалениефайлов начатьустановкувнешнейкомпоненты начатьустановкурасширенияработыскриптографией начатьустановкурасширенияработысфайлами неделягода необходимостьзавершениясоединения номерсеансаинформационнойбазы номерсоединенияинформационнойбазы нрег нстр обновитьинтерфейс обновитьнумерациюобъектов обновитьповторноиспользуемыезначения обработкапрерыванияпользователя объединитьфайлы окр описаниеошибки оповестить оповеститьобизменении отключитьобработчикзапросанастроекклиенталицензирования отключитьобработчикожидания отключитьобработчикоповещения открытьзначение открытьиндекссправки открытьсодержаниесправки открытьсправку открытьформу открытьформумодально отменитьтранзакцию очиститьжурналрегистрации очиститьнастройкипользователя очиститьсообщения параметрыдоступа перейтипонавигационнойссылке переместитьфайл подключитьвнешнююкомпоненту подключитьобработчикзапросанастроекклиенталицензирования подключитьобработчикожидания подключитьобработчикоповещения подключитьрасширениеработыскриптографией подключитьрасширениеработысфайлами подробноепредставлениеошибки показатьвводдаты показатьвводзначения показатьвводстроки показатьвводчисла показатьвопрос показатьзначение показатьинформациюобошибке показатьнакарте показатьоповещениепользователя показатьпредупреждение полноеимяпользователя получитьcomобъект получитьxmlтип получитьадреспоместоположению получитьблокировкусеансов получитьвремязавершенияспящегосеанса получитьвремязасыпанияпассивногосеанса получитьвремяожиданияблокировкиданных получитьданныевыбора получитьдополнительныйпараметрклиенталицензирования получитьдопустимыекодылокализации получитьдопустимыечасовыепояса получитьзаголовокклиентскогоприложения получитьзаголовоксистемы получитьзначенияотборажурналарегистрации получитьидентификаторконфигурации получитьизвременногохранилища получитьимявременногофайла получитьимяклиенталицензирования получитьинформациюэкрановклиента получитьиспользованиежурналарегистрации получитьиспользованиесобытияжурналарегистрации получитькраткийзаголовокприложения получитьмакетоформления получитьмаскувсефайлы получитьмаскувсефайлыклиента получитьмаскувсефайлысервера получитьместоположениепоадресу получитьминимальнуюдлинупаролейпользователей получитьнавигационнуюссылку получитьнавигационнуюссылкуинформационнойбазы получитьобновлениеконфигурациибазыданных получитьобновлениепредопределенныхданныхинформационнойбазы получитьобщиймакет получитьобщуюформу получитьокна получитьоперативнуюотметкувремени получитьотключениебезопасногорежима получитьпараметрыфункциональныхопцийинтерфейса получитьполноеимяпредопределенногозначения получитьпредставлениянавигационныхссылок получитьпроверкусложностипаролейпользователей получитьразделительпути получитьразделительпутиклиента получитьразделительпутисервера получитьсеансыинформационнойбазы получитьскоростьклиентскогосоединения получитьсоединенияинформационнойбазы получитьсообщенияпользователю получитьсоответствиеобъектаиформы получитьсоставстандартногоинтерфейсаodata получитьструктурухранениябазыданных получитьтекущийсеансинформационнойбазы получитьфайл получитьфайлы получитьформу получитьфункциональнуюопцию получитьфункциональнуюопциюинтерфейса получитьчасовойпоясинформационнойбазы пользователиос поместитьвовременноехранилище поместитьфайл поместитьфайлы прав праводоступа предопределенноезначение представлениекодалокализации представлениепериода представлениеправа представлениеприложения представлениесобытияжурналарегистрации представлениечасовогопояса предупреждение прекратитьработусистемы привилегированныйрежим продолжитьвызов прочитатьjson прочитатьxml прочитатьдатуjson пустаястрока рабочийкаталогданныхпользователя разблокироватьданныедляредактирования разделитьфайл разорватьсоединениесвнешнимисточникомданных раскодироватьстроку рольдоступна секунда сигнал символ скопироватьжурналрегистрации смещениелетнеговремени смещениестандартноговремени соединитьбуферыдвоичныхданных создатькаталог создатьфабрикуxdto сокрл сокрлп сокрп сообщить состояние сохранитьзначение сохранитьнастройкипользователя сред стрдлина стрзаканчиваетсяна стрзаменить стрнайти стрначинаетсяс строка строкасоединенияинформационнойбазы стрполучитьстроку стрразделить стрсоединить стрсравнить стрчисловхождений стрчислострок стршаблон текущаядата текущаядатасеанса текущаяуниверсальнаядата текущаяуниверсальнаядатавмиллисекундах текущийвариантинтерфейсаклиентскогоприложения текущийвариантосновногошрифтаклиентскогоприложения текущийкодлокализации текущийрежимзапуска текущийязык текущийязыксистемы тип типзнч транзакцияактивна трег удалитьданныеинформационнойбазы удалитьизвременногохранилища удалитьобъекты удалитьфайлы универсальноевремя установитьбезопасныйрежим установитьбезопасныйрежимразделенияданных установитьблокировкусеансов установитьвнешнююкомпоненту установитьвремязавершенияспящегосеанса установитьвремязасыпанияпассивногосеанса установитьвремяожиданияблокировкиданных установитьзаголовокклиентскогоприложения установитьзаголовоксистемы установитьиспользованиежурналарегистрации установитьиспользованиесобытияжурналарегистрации установитькраткийзаголовокприложения установитьминимальнуюдлинупаролейпользователей установитьмонопольныйрежим установитьнастройкиклиенталицензирования установитьобновлениепредопределенныхданныхинформационнойбазы установитьотключениебезопасногорежима установитьпараметрыфункциональныхопцийинтерфейса установитьпривилегированныйрежим установитьпроверкусложностипаролейпользователей установитьрасширениеработыскриптографией установитьрасширениеработысфайлами установитьсоединениесвнешнимисточникомданных установитьсоответствиеобъектаиформы установитьсоставстандартногоинтерфейсаodata установитьчасовойпоясинформационнойбазы установитьчасовойпояссеанса формат цел час часовойпояс часовойпояссеанса число числопрописью этоадресвременногохранилища wsссылки библиотекакартинок библиотекамакетовоформлениякомпоновкиданных библиотекастилей бизнеспроцессы внешниеисточникиданных внешниеобработки внешниеотчеты встроенныепокупки главныйинтерфейс главныйстиль документы доставляемыеуведомления журналыдокументов задачи информацияобинтернетсоединении использованиерабочейдаты историяработыпользователя константы критерииотбора метаданные обработки отображениерекламы отправкадоставляемыхуведомлений отчеты панельзадачос параметрзапуска параметрысеанса перечисления планывидоврасчета планывидовхарактеристик планыобмена планысчетов полнотекстовыйпоиск пользователиинформационнойбазы последовательности проверкавстроенныхпокупок рабочаядата расширенияконфигурации регистрыбухгалтерии регистрынакопления регистрырасчета регистрысведений регламентныезадания сериализаторxdto справочники средствагеопозиционирования средствакриптографии средствамультимедиа средстваотображениярекламы средствапочты средствателефонии фабрикаxdto файловыепотоки фоновыезадания хранилищанастроек хранилищевариантовотчетов хранилищенастроекданныхформ хранилищеобщихнастроек хранилищепользовательскихнастроекдинамическихсписков хранилищепользовательскихнастроекотчетов хранилищесистемныхнастроек ",
                class: "webцвета windowsцвета windowsшрифты библиотекакартинок рамкистиля символы цветастиля шрифтыстиля автоматическоесохранениеданныхформывнастройках автонумерациявформе автораздвижениесерий анимациядиаграммы вариантвыравниванияэлементовизаголовков вариантуправлениявысотойтаблицы вертикальнаяпрокруткаформы вертикальноеположение вертикальноеположениеэлемента видгруппыформы виддекорацииформы виддополненияэлементаформы видизмененияданных видкнопкиформы видпереключателя видподписейкдиаграмме видполяформы видфлажка влияниеразмеранапузырекдиаграммы горизонтальноеположение горизонтальноеположениеэлемента группировкаколонок группировкаподчиненныхэлементовформы группыиэлементы действиеперетаскивания дополнительныйрежимотображения допустимыедействияперетаскивания интервалмеждуэлементамиформы использованиевывода использованиеполосыпрокрутки используемоезначениеточкибиржевойдиаграммы историявыборапривводе источникзначенийоситочекдиаграммы источникзначенияразмерапузырькадиаграммы категориягруппыкоманд максимумсерий начальноеотображениедерева начальноеотображениесписка обновлениетекстаредактирования ориентациядендрограммы ориентациядиаграммы ориентацияметокдиаграммы ориентацияметоксводнойдиаграммы ориентацияэлементаформы отображениевдиаграмме отображениевлегендедиаграммы отображениегруппыкнопок отображениезаголовкашкалыдиаграммы отображениезначенийсводнойдиаграммы отображениезначенияизмерительнойдиаграммы отображениеинтерваладиаграммыганта отображениекнопки отображениекнопкивыбора отображениеобсужденийформы отображениеобычнойгруппы отображениеотрицательныхзначенийпузырьковойдиаграммы отображениепанелипоиска отображениеподсказки отображениепредупрежденияприредактировании отображениеразметкиполосырегулирования отображениестраницформы отображениетаблицы отображениетекстазначениядиаграммыганта отображениеуправленияобычнойгруппы отображениефигурыкнопки палитрацветовдиаграммы поведениеобычнойгруппы поддержкамасштабадендрограммы поддержкамасштабадиаграммыганта поддержкамасштабасводнойдиаграммы поисквтаблицепривводе положениезаголовкаэлементаформы положениекартинкикнопкиформы положениекартинкиэлементаграфическойсхемы положениекоманднойпанелиформы положениекоманднойпанелиэлементаформы положениеопорнойточкиотрисовки положениеподписейкдиаграмме положениеподписейшкалызначенийизмерительнойдиаграммы положениесостоянияпросмотра положениестрокипоиска положениетекстасоединительнойлинии положениеуправленияпоиском положениешкалывремени порядокотображенияточекгоризонтальнойгистограммы порядоксерийвлегендедиаграммы размеркартинки расположениезаголовкашкалыдиаграммы растягиваниеповертикалидиаграммыганта режимавтоотображениясостояния режимвводастроктаблицы режимвыборанезаполненного режимвыделениядаты режимвыделениястрокитаблицы режимвыделениятаблицы режимизмененияразмера режимизменениясвязанногозначения режимиспользованиядиалогапечати режимиспользованияпараметракоманды режиммасштабированияпросмотра режимосновногоокнаклиентскогоприложения режимоткрытияокнаформы режимотображениявыделения режимотображениягеографическойсхемы режимотображениязначенийсерии режимотрисовкисеткиграфическойсхемы режимполупрозрачностидиаграммы режимпробеловдиаграммы режимразмещениянастранице режимредактированияколонки режимсглаживаниядиаграммы режимсглаживанияиндикатора режимсписказадач сквозноевыравнивание сохранениеданныхформывнастройках способзаполнениятекстазаголовкашкалыдиаграммы способопределенияограничивающегозначениядиаграммы стандартнаягруппакоманд стандартноеоформление статусоповещенияпользователя стильстрелки типаппроксимациилиниитрендадиаграммы типдиаграммы типединицышкалывремени типимпортасерийслоягеографическойсхемы типлиниигеографическойсхемы типлиниидиаграммы типмаркерагеографическойсхемы типмаркерадиаграммы типобластиоформления типорганизацииисточникаданныхгеографическойсхемы типотображениясериислоягеографическойсхемы типотображенияточечногообъектагеографическойсхемы типотображенияшкалыэлементалегендыгеографическойсхемы типпоискаобъектовгеографическойсхемы типпроекциигеографическойсхемы типразмещенияизмерений типразмещенияреквизитовизмерений типрамкиэлементауправления типсводнойдиаграммы типсвязидиаграммыганта типсоединениязначенийпосериямдиаграммы типсоединенияточекдиаграммы типсоединительнойлинии типстороныэлементаграфическойсхемы типформыотчета типшкалырадарнойдиаграммы факторлиниитрендадиаграммы фигуракнопки фигурыграфическойсхемы фиксациявтаблице форматдняшкалывремени форматкартинки ширинаподчиненныхэлементовформы виддвижениябухгалтерии виддвижениянакопления видпериодарегистрарасчета видсчета видточкимаршрутабизнеспроцесса использованиеагрегатарегистранакопления использованиегруппиэлементов использованиережимапроведения использованиесреза периодичностьагрегатарегистранакопления режимавтовремя режимзаписидокумента режимпроведениядокумента авторегистрацияизменений допустимыйномерсообщения отправкаэлементаданных получениеэлементаданных использованиерасшифровкитабличногодокумента ориентациястраницы положениеитоговколоноксводнойтаблицы положениеитоговстроксводнойтаблицы положениетекстаотносительнокартинки расположениезаголовкагруппировкитабличногодокумента способчтениязначенийтабличногодокумента типдвустороннейпечати типзаполненияобластитабличногодокумента типкурсоровтабличногодокумента типлиниирисункатабличногодокумента типлинииячейкитабличногодокумента типнаправленияпереходатабличногодокумента типотображениявыделениятабличногодокумента типотображениялинийсводнойтаблицы типразмещениятекстатабличногодокумента типрисункатабличногодокумента типсмещениятабличногодокумента типузоратабличногодокумента типфайлатабличногодокумента точностьпечати чередованиерасположениястраниц отображениевремениэлементовпланировщика типфайлаформатированногодокумента обходрезультатазапроса типзаписизапроса видзаполнениярасшифровкипостроителяотчета типдобавленияпредставлений типизмеренияпостроителяотчета типразмещенияитогов доступкфайлу режимдиалогавыборафайла режимоткрытияфайла типизмеренияпостроителязапроса видданныханализа методкластеризации типединицыинтервалавременианализаданных типзаполнениятаблицырезультатаанализаданных типиспользованиячисловыхзначенийанализаданных типисточникаданныхпоискаассоциаций типколонкианализаданныхдереворешений типколонкианализаданныхкластеризация типколонкианализаданныхобщаястатистика типколонкианализаданныхпоискассоциаций типколонкианализаданныхпоискпоследовательностей типколонкимоделипрогноза типмерырасстоянияанализаданных типотсеченияправилассоциации типполяанализаданных типстандартизациианализаданных типупорядочиванияправилассоциациианализаданных типупорядочиванияшаблоновпоследовательностейанализаданных типупрощениядереварешений wsнаправлениепараметра вариантxpathxs вариантзаписидатыjson вариантпростоготипаxs видгруппымоделиxs видфасетаxdto действиепостроителяdom завершенностьпростоготипаxs завершенностьсоставноготипаxs завершенностьсхемыxs запрещенныеподстановкиxs исключениягруппподстановкиxs категорияиспользованияатрибутаxs категорияограниченияидентичностиxs категорияограниченияпространствименxs методнаследованияxs модельсодержимогоxs назначениетипаxml недопустимыеподстановкиxs обработкапробельныхсимволовxs обработкасодержимогоxs ограничениезначенияxs параметрыотбораузловdom переносстрокjson позициявдокументеdom пробельныесимволыxml типатрибутаxml типзначенияjson типканоническогоxml типкомпонентыxs типпроверкиxml типрезультатаdomxpath типузлаdom типузлаxml формаxml формапредставленияxs форматдатыjson экранированиесимволовjson видсравнениякомпоновкиданных действиеобработкирасшифровкикомпоновкиданных направлениесортировкикомпоновкиданных расположениевложенныхэлементоврезультатакомпоновкиданных расположениеитоговкомпоновкиданных расположениегруппировкикомпоновкиданных расположениеполейгруппировкикомпоновкиданных расположениеполякомпоновкиданных расположениереквизитовкомпоновкиданных расположениересурсовкомпоновкиданных типбухгалтерскогоостаткакомпоновкиданных типвыводатекстакомпоновкиданных типгруппировкикомпоновкиданных типгруппыэлементовотборакомпоновкиданных типдополненияпериодакомпоновкиданных типзаголовкаполейкомпоновкиданных типмакетагруппировкикомпоновкиданных типмакетаобластикомпоновкиданных типостаткакомпоновкиданных типпериодакомпоновкиданных типразмещениятекстакомпоновкиданных типсвязинаборовданныхкомпоновкиданных типэлементарезультатакомпоновкиданных расположениелегендыдиаграммыкомпоновкиданных типпримененияотборакомпоновкиданных режимотображенияэлементанастройкикомпоновкиданных режимотображениянастроеккомпоновкиданных состояниеэлементанастройкикомпоновкиданных способвосстановлениянастроеккомпоновкиданных режимкомпоновкирезультата использованиепараметракомпоновкиданных автопозицияресурсовкомпоновкиданных вариантиспользованиягруппировкикомпоновкиданных расположениересурсоввдиаграммекомпоновкиданных фиксациякомпоновкиданных использованиеусловногооформлениякомпоновкиданных важностьинтернетпочтовогосообщения обработкатекстаинтернетпочтовогосообщения способкодированияинтернетпочтовоговложения способкодированиянеasciiсимволовинтернетпочтовогосообщения типтекстапочтовогосообщения протоколинтернетпочты статусразборапочтовогосообщения режимтранзакциизаписижурналарегистрации статустранзакциизаписижурналарегистрации уровеньжурналарегистрации расположениехранилищасертификатовкриптографии режимвключениясертификатовкриптографии режимпроверкисертификатакриптографии типхранилищасертификатовкриптографии кодировкаименфайловвzipфайле методсжатияzip методшифрованияzip режимвосстановленияпутейфайловzip режимобработкиподкаталоговzip режимсохраненияпутейzip уровеньсжатияzip звуковоеоповещение направлениепереходакстроке позициявпотоке порядокбайтов режимблокировкиданных режимуправленияблокировкойданных сервисвстроенныхпокупок состояниефоновогозадания типподписчикадоставляемыхуведомлений уровеньиспользованиязащищенногосоединенияftp направлениепорядкасхемызапроса типдополненияпериодамисхемызапроса типконтрольнойточкисхемызапроса типобъединениясхемызапроса типпараметрадоступнойтаблицысхемызапроса типсоединениясхемызапроса httpметод автоиспользованиеобщегореквизита автопрефиксномеразадачи вариантвстроенногоязыка видиерархии видрегистранакопления видтаблицывнешнегоисточникаданных записьдвиженийприпроведении заполнениепоследовательностей индексирование использованиебазыпланавидоврасчета использованиебыстроговыбора использованиеобщегореквизита использованиеподчинения использованиеполнотекстовогопоиска использованиеразделяемыхданныхобщегореквизита использованиереквизита назначениеиспользованияприложения назначениерасширенияконфигурации направлениепередачи обновлениепредопределенныхданных оперативноепроведение основноепредставлениевидарасчета основноепредставлениевидахарактеристики основноепредставлениезадачи основноепредставлениепланаобмена основноепредставлениесправочника основноепредставлениесчета перемещениеграницыприпроведении периодичностьномерабизнеспроцесса периодичностьномерадокумента периодичностьрегистрарасчета периодичностьрегистрасведений повторноеиспользованиевозвращаемыхзначений полнотекстовыйпоискпривводепостроке принадлежностьобъекта проведение разделениеаутентификацииобщегореквизита разделениеданныхобщегореквизита разделениерасширенийконфигурацииобщегореквизита режимавтонумерацииобъектов режимзаписирегистра режимиспользованиямодальности режимиспользованиясинхронныхвызововрасширенийплатформыивнешнихкомпонент режимповторногоиспользованиясеансов режимполученияданныхвыборапривводепостроке режимсовместимости режимсовместимостиинтерфейса режимуправленияблокировкойданныхпоумолчанию сериикодовпланавидовхарактеристик сериикодовпланасчетов сериикодовсправочника созданиепривводе способвыбора способпоискастрокипривводепостроке способредактирования типданныхтаблицывнешнегоисточникаданных типкодапланавидоврасчета типкодасправочника типмакета типномерабизнеспроцесса типномерадокумента типномеразадачи типформы удалениедвижений важностьпроблемыприменениярасширенияконфигурации вариантинтерфейсаклиентскогоприложения вариантмасштабаформклиентскогоприложения вариантосновногошрифтаклиентскогоприложения вариантстандартногопериода вариантстандартнойдатыначала видграницы видкартинки видотображенияполнотекстовогопоиска видрамки видсравнения видцвета видчисловогозначения видшрифта допустимаядлина допустимыйзнак использованиеbyteordermark использованиеметаданныхполнотекстовогопоиска источникрасширенийконфигурации клавиша кодвозвратадиалога кодировкаxbase кодировкатекста направлениепоиска направлениесортировки обновлениепредопределенныхданных обновлениеприизмененииданных отображениепанелиразделов проверказаполнения режимдиалогавопрос режимзапускаклиентскогоприложения режимокругления режимоткрытияформприложения режимполнотекстовогопоиска скоростьклиентскогосоединения состояниевнешнегоисточникаданных состояниеобновленияконфигурациибазыданных способвыборасертификатаwindows способкодированиястроки статуссообщения типвнешнейкомпоненты типплатформы типповеденияклавишиenter типэлементаинформацииовыполненииобновленияконфигурациибазыданных уровеньизоляциитранзакций хешфункция частидаты",
                type: "comобъект ftpсоединение httpзапрос httpсервисответ httpсоединение wsопределения wsпрокси xbase анализданных аннотацияxs блокировкаданных буфердвоичныхданных включениеxs выражениекомпоновкиданных генераторслучайныхчисел географическаясхема географическиекоординаты графическаясхема группамоделиxs данныерасшифровкикомпоновкиданных двоичныеданные дендрограмма диаграмма диаграммаганта диалогвыборафайла диалогвыборацвета диалогвыборашрифта диалограсписаниярегламентногозадания диалогредактированиястандартногопериода диапазон документdom документhtml документацияxs доставляемоеуведомление записьdom записьfastinfoset записьhtml записьjson записьxml записьzipфайла записьданных записьтекста записьузловdom запрос защищенноесоединениеopenssl значенияполейрасшифровкикомпоновкиданных извлечениетекста импортxs интернетпочта интернетпочтовоесообщение интернетпочтовыйпрофиль интернетпрокси интернетсоединение информациядляприложенияxs использованиеатрибутаxs использованиесобытияжурналарегистрации источникдоступныхнастроеккомпоновкиданных итераторузловdom картинка квалификаторыдаты квалификаторыдвоичныхданных квалификаторыстроки квалификаторычисла компоновщикмакетакомпоновкиданных компоновщикнастроеккомпоновкиданных конструктормакетаоформлениякомпоновкиданных конструкторнастроеккомпоновкиданных конструкторформатнойстроки линия макеткомпоновкиданных макетобластикомпоновкиданных макетоформлениякомпоновкиданных маскаxs менеджеркриптографии наборсхемxml настройкикомпоновкиданных настройкисериализацииjson обработкакартинок обработкарасшифровкикомпоновкиданных обходдереваdom объявлениеатрибутаxs объявлениенотацииxs объявлениеэлементаxs описаниеиспользованиясобытиядоступжурналарегистрации описаниеиспользованиясобытияотказвдоступежурналарегистрации описаниеобработкирасшифровкикомпоновкиданных описаниепередаваемогофайла описаниетипов определениегруппыатрибутовxs определениегруппымоделиxs определениеограниченияидентичностиxs определениепростоготипаxs определениесоставноготипаxs определениетипадокументаdom определенияxpathxs отборкомпоновкиданных пакетотображаемыхдокументов параметрвыбора параметркомпоновкиданных параметрызаписиjson параметрызаписиxml параметрычтенияxml переопределениеxs планировщик полеанализаданных полекомпоновкиданных построительdom построительзапроса построительотчета построительотчетаанализаданных построительсхемxml поток потоквпамяти почта почтовоесообщение преобразованиеxsl преобразованиекканоническомуxml процессорвыводарезультатакомпоновкиданныхвколлекциюзначений процессорвыводарезультатакомпоновкиданныхвтабличныйдокумент процессоркомпоновкиданных разыменовательпространствименdom рамка расписаниерегламентногозадания расширенноеимяxml результатчтенияданных своднаядиаграмма связьпараметравыбора связьпотипу связьпотипукомпоновкиданных сериализаторxdto сертификатклиентаwindows сертификатклиентафайл сертификаткриптографии сертификатыудостоверяющихцентровwindows сертификатыудостоверяющихцентровфайл сжатиеданных системнаяинформация сообщениепользователю сочетаниеклавиш сравнениезначений стандартнаядатаначала стандартныйпериод схемаxml схемакомпоновкиданных табличныйдокумент текстовыйдокумент тестируемоеприложение типданныхxml уникальныйидентификатор фабрикаxdto файл файловыйпоток фасетдлиныxs фасетколичестваразрядовдробнойчастиxs фасетмаксимальноговключающегозначенияxs фасетмаксимальногоисключающегозначенияxs фасетмаксимальнойдлиныxs фасетминимальноговключающегозначенияxs фасетминимальногоисключающегозначенияxs фасетминимальнойдлиныxs фасетобразцаxs фасетобщегоколичестваразрядовxs фасетперечисленияxs фасетпробельныхсимволовxs фильтрузловdom форматированнаястрока форматированныйдокумент фрагментxs хешированиеданных хранилищезначения цвет чтениеfastinfoset чтениеhtml чтениеjson чтениеxml чтениеzipфайла чтениеданных чтениетекста чтениеузловdom шрифт элементрезультатакомпоновкиданных comsafearray деревозначений массив соответствие списокзначений структура таблицазначений фиксированнаяструктура фиксированноесоответствие фиксированныймассив ",
                literal: r
            },
            contains: [l, {
                className: "function",
                lexemes: t,
                variants: [{
                    begin: "процедура|функция",
                    end: "\\)",
                    keywords: "процедура функция"
                }, {
                    begin: "конецпроцедуры|конецфункции",
                    keywords: "конецпроцедуры конецфункции"
                }],
                contains: [{
                    begin: "\\(",
                    end: "\\)",
                    endsParent: !0,
                    contains: [{
                        className: "params",
                        lexemes: t,
                        begin: t,
                        end: ",",
                        excludeEnd: !0,
                        endsWithParent: !0,
                        keywords: {
                            keyword: "знач",
                            literal: r
                        },
                        contains: [a, i, s]
                    }, o]
                }, e.inherit(e.TITLE_MODE, {
                    begin: t
                })]
            }, o, c, a, i, s]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            ruleDeclaration: "^[a-zA-Z][a-zA-Z0-9-]*",
            unexpectedChars: "[!@#$^&',?+~`|:]"
        }
          , n = ["ALPHA", "BIT", "CHAR", "CR", "CRLF", "CTL", "DIGIT", "DQUOTE", "HEXDIG", "HTAB", "LF", "LWSP", "OCTET", "SP", "VCHAR", "WSP"]
          , r = e.COMMENT(";", "$")
          , a = {
            className: "symbol",
            begin: /%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/
        }
          , i = {
            className: "symbol",
            begin: /%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/
        }
          , s = {
            className: "symbol",
            begin: /%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/
        }
          , o = {
            className: "symbol",
            begin: /%[si]/
        }
          , l = {
            begin: t.ruleDeclaration + "\\s*=",
            returnBegin: !0,
            end: /=/,
            relevance: 0,
            contains: [{
                className: "attribute",
                begin: t.ruleDeclaration
            }]
        };
        return {
            illegal: t.unexpectedChars,
            keywords: n.join(" "),
            contains: [l, r, a, i, s, o, e.QUOTE_STRING_MODE, e.NUMBER_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            contains: [{
                className: "number",
                begin: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
            }, {
                className: "number",
                begin: "\\b\\d+\\b",
                relevance: 0
            }, {
                className: "string",
                begin: '"(GET|POST|HEAD|PUT|DELETE|CONNECT|OPTIONS|PATCH|TRACE)',
                end: '"',
                keywords: "GET POST HEAD PUT DELETE CONNECT OPTIONS PATCH TRACE",
                illegal: "\\n",
                relevance: 10
            }, {
                className: "string",
                begin: /\[/,
                end: /\]/,
                illegal: "\\n"
            }, {
                className: "string",
                begin: '"',
                end: '"',
                illegal: "\\n"
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "rest_arg",
            begin: "[.]{3}",
            end: "[a-zA-Z_$][a-zA-Z0-9_$]*",
            relevance: 10
        };
        return {
            aliases: ["as"],
            keywords: {
                keyword: "as break case catch class const continue default delete do dynamic each else extends final finally for function get if implements import in include instanceof interface internal is namespace native new override package private protected public return set static super switch this throw try typeof use var void while with",
                literal: "true false null undefined"
            },
            contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.C_NUMBER_MODE, {
                className: "class",
                beginKeywords: "package",
                end: "{",
                contains: [e.TITLE_MODE]
            }, {
                className: "class",
                beginKeywords: "class interface",
                end: "{",
                excludeEnd: !0,
                contains: [{
                    beginKeywords: "extends implements"
                }, e.TITLE_MODE]
            }, {
                className: "meta",
                beginKeywords: "import include",
                end: ";",
                keywords: {
                    "meta-keyword": "import include"
                }
            }, {
                className: "function",
                beginKeywords: "function",
                end: "[{;]",
                excludeEnd: !0,
                illegal: "\\S",
                contains: [e.TITLE_MODE, {
                    className: "params",
                    begin: "\\(",
                    end: "\\)",
                    contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, t]
                }, {
                    begin: ":\\s*([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)"
                }]
            }, e.METHOD_GUARD],
            illegal: /#/
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "[A-Za-z](_?[A-Za-z0-9.])*"
          , n = e.COMMENT("--", "$")
          , r = {
            begin: "\\s+:\\s+",
            end: "\\s*(:=|;|\\)|=>|$)",
            illegal: "[]{}%#'\"",
            contains: [{
                beginKeywords: "loop for declare others",
                endsParent: !0
            }, {
                className: "keyword",
                beginKeywords: "not null constant access function procedure in out aliased exception"
            }, {
                className: "type",
                begin: t,
                endsParent: !0,
                relevance: 0
            }]
        };
        return {
            case_insensitive: !0,
            keywords: {
                keyword: "abort else new return abs elsif not reverse abstract end accept entry select access exception of separate aliased exit or some all others subtype and for out synchronized array function overriding at tagged generic package task begin goto pragma terminate body private then if procedure type case in protected constant interface is raise use declare range delay limited record when delta loop rem while digits renames with do mod requeue xor",
                literal: "True False"
            },
            contains: [n, {
                className: "string",
                begin: /"/,
                end: /"/,
                contains: [{
                    begin: /""/,
                    relevance: 0
                }]
            }, {
                className: "string",
                begin: /'.'/
            }, {
                className: "number",
                begin: "\\b(\\d(_|\\d)*#\\w+(\\.\\w+)?#([eE][-+]?\\d(_|\\d)*)?|\\d(_|\\d)*(\\.\\d(_|\\d)*)?([eE][-+]?\\d(_|\\d)*)?)",
                relevance: 0
            }, {
                className: "symbol",
                begin: "'" + t
            }, {
                className: "title",
                begin: "(\\bwith\\s+)?(\\bprivate\\s+)?\\bpackage\\s+(\\bbody\\s+)?",
                end: "(is|$)",
                keywords: "package body",
                excludeBegin: !0,
                excludeEnd: !0,
                illegal: "[]{}%#'\""
            }, {
                begin: "(\\b(with|overriding)\\s+)?\\b(function|procedure)\\s+",
                end: "(\\bis|\\bwith|\\brenames|\\)\\s*;)",
                keywords: "overriding function procedure with is renames return",
                returnBegin: !0,
                contains: [n, {
                    className: "title",
                    begin: "(\\bwith\\s+)?\\b(function|procedure)\\s+",
                    end: "(\\(|\\s+|$)",
                    excludeBegin: !0,
                    excludeEnd: !0,
                    illegal: "[]{}%#'\""
                }, r, {
                    className: "type",
                    begin: "\\breturn\\s+",
                    end: "(\\s+|;|$)",
                    keywords: "return",
                    excludeBegin: !0,
                    excludeEnd: !0,
                    endsParent: !0,
                    illegal: "[]{}%#'\""
                }]
            }, {
                className: "type",
                begin: "\\b(sub)?type\\s+",
                end: "\\s+",
                keywords: "type",
                excludeBegin: !0,
                illegal: "[]{}%#'\""
            }, r]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "number",
            begin: "[\\$%]\\d+"
        };
        return {
            aliases: ["apacheconf"],
            case_insensitive: !0,
            contains: [e.HASH_COMMENT_MODE, {
                className: "section",
                begin: "</?",
                end: ">"
            }, {
                className: "attribute",
                begin: /\w+/,
                relevance: 0,
                keywords: {
                    nomarkup: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
                },
                starts: {
                    end: /$/,
                    relevance: 0,
                    keywords: {
                        literal: "on off all"
                    },
                    contains: [{
                        className: "meta",
                        begin: "\\s\\[",
                        end: "\\]$"
                    }, {
                        className: "variable",
                        begin: "[\\$%]\\{",
                        end: "\\}",
                        contains: ["self", t]
                    }, t, e.QUOTE_STRING_MODE]
                }
            }],
            illegal: /\S/
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = e.inherit(e.QUOTE_STRING_MODE, {
            illegal: ""
        })
          , n = {
            className: "params",
            begin: "\\(",
            end: "\\)",
            contains: ["self", e.C_NUMBER_MODE, t]
        }
          , r = e.COMMENT("--", "$")
          , a = e.COMMENT("\\(\\*", "\\*\\)", {
            contains: ["self", r]
        })
          , i = [r, a, e.HASH_COMMENT_MODE];
        return {
            aliases: ["osascript"],
            keywords: {
                keyword: "about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the|0 then third through thru timeout times to transaction try until where while whose with without",
                literal: "AppleScript false linefeed return pi quote result space tab true",
                built_in: "alias application boolean class constant date file integer list number real record string text activate beep count delay launch log offset read round run say summarize write character characters contents day frontmost id item length month name paragraph paragraphs rest reverse running time version weekday word words year"
            },
            contains: [t, e.C_NUMBER_MODE, {
                className: "built_in",
                begin: "\\b(clipboard info|the clipboard|info for|list (disks|folder)|mount volume|path to|(close|open for) access|(get|set) eof|current date|do shell script|get volume settings|random number|set volume|system attribute|system info|time to GMT|(load|run|store) script|scripting components|ASCII (character|number)|localized string|choose (application|color|file|file name|folder|from list|remote application|URL)|display (alert|dialog))\\b|^\\s*return\\b"
            }, {
                className: "literal",
                begin: "\\b(text item delimiters|current application|missing value)\\b"
            }, {
                className: "keyword",
                begin: "\\b(apart from|aside from|instead of|out of|greater than|isn't|(doesn't|does not) (equal|come before|come after|contain)|(greater|less) than( or equal)?|(starts?|ends|begins?) with|contained by|comes (before|after)|a (ref|reference)|POSIX file|POSIX path|(date|time) string|quoted form)\\b"
            }, {
                beginKeywords: "on",
                illegal: "[${=;\\n]",
                contains: [e.UNDERSCORE_TITLE_MODE, n]
            }].concat(i),
            illegal: "//|->|=>|\\[\\["
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = e.getLanguage("cpp").exports;
        return {
            keywords: {
                keyword: "boolean byte word string String array " + t.keywords.keyword,
                built_in: "setup loop while catch for if do goto try switch case else default break continue return KeyboardController MouseController SoftwareSerial EthernetServer EthernetClient LiquidCrystal RobotControl GSMVoiceCall EthernetUDP EsploraTFT HttpClient RobotMotor WiFiClient GSMScanner FileSystem Scheduler GSMServer YunClient YunServer IPAddress GSMClient GSMModem Keyboard Ethernet Console GSMBand Esplora Stepper Process WiFiUDP GSM_SMS Mailbox USBHost Firmata PImage Client Server GSMPIN FileIO Bridge Serial EEPROM Stream Mouse Audio Servo File Task GPRS WiFi Wire TFT GSM SPI SD runShellCommandAsynchronously analogWriteResolution retrieveCallingNumber printFirmwareVersion analogReadResolution sendDigitalPortPair noListenOnLocalhost readJoystickButton setFirmwareVersion readJoystickSwitch scrollDisplayRight getVoiceCallStatus scrollDisplayLeft writeMicroseconds delayMicroseconds beginTransmission getSignalStrength runAsynchronously getAsynchronously listenOnLocalhost getCurrentCarrier readAccelerometer messageAvailable sendDigitalPorts lineFollowConfig countryNameWrite runShellCommand readStringUntil rewindDirectory readTemperature setClockDivider readLightSensor endTransmission analogReference detachInterrupt countryNameRead attachInterrupt encryptionType readBytesUntil robotNameWrite readMicrophone robotNameRead cityNameWrite userNameWrite readJoystickY readJoystickX mouseReleased openNextFile scanNetworks noInterrupts digitalWrite beginSpeaker mousePressed isActionDone mouseDragged displayLogos noAutoscroll addParameter remoteNumber getModifiers keyboardRead userNameRead waitContinue processInput parseCommand printVersion readNetworks writeMessage blinkVersion cityNameRead readMessage setDataMode parsePacket isListening setBitOrder beginPacket isDirectory motorsWrite drawCompass digitalRead clearScreen serialEvent rightToLeft setTextSize leftToRight requestFrom keyReleased compassRead analogWrite interrupts WiFiServer disconnect playMelody parseFloat autoscroll getPINUsed setPINUsed setTimeout sendAnalog readSlider analogRead beginWrite createChar motorsStop keyPressed tempoWrite readButton subnetMask debugPrint macAddress writeGreen randomSeed attachGPRS readString sendString remotePort releaseAll mouseMoved background getXChange getYChange answerCall getResult voiceCall endPacket constrain getSocket writeJSON getButton available connected findUntil readBytes exitValue readGreen writeBlue startLoop IPAddress isPressed sendSysex pauseMode gatewayIP setCursor getOemKey tuneWrite noDisplay loadImage switchPIN onRequest onReceive changePIN playFile noBuffer parseInt overflow checkPIN knobRead beginTFT bitClear updateIR bitWrite position writeRGB highByte writeRed setSpeed readBlue noStroke remoteIP transfer shutdown hangCall beginSMS endWrite attached maintain noCursor checkReg checkPUK shiftOut isValid shiftIn pulseIn connect println localIP pinMode getIMEI display noBlink process getBand running beginSD drawBMP lowByte setBand release bitRead prepare pointTo readRed setMode noFill remove listen stroke detach attach noTone exists buffer height bitSet circle config cursor random IRread setDNS endSMS getKey micros millis begin print write ready flush width isPIN blink clear press mkdir rmdir close point yield image BSSID click delay read text move peek beep rect line open seek fill size turn stop home find step tone sqrt RSSI SSID end bit tan cos sin pow map abs max min get run put",
                literal: "DIGITAL_MESSAGE FIRMATA_STRING ANALOG_MESSAGE REPORT_DIGITAL REPORT_ANALOG INPUT_PULLUP SET_PIN_MODE INTERNAL2V56 SYSTEM_RESET LED_BUILTIN INTERNAL1V1 SYSEX_START INTERNAL EXTERNAL DEFAULT OUTPUT INPUT HIGH LOW"
            },
            contains: [t.preprocessor, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            case_insensitive: !0,
            aliases: ["arm"],
            lexemes: "\\.?" + e.IDENT_RE,
            keywords: {
                meta: ".2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .arm .thumb .code16 .code32 .force_thumb .thumb_func .ltorg ALIAS ALIGN ARM AREA ASSERT ATTR CN CODE CODE16 CODE32 COMMON CP DATA DCB DCD DCDU DCDO DCFD DCFDU DCI DCQ DCQU DCW DCWU DN ELIF ELSE END ENDFUNC ENDIF ENDP ENTRY EQU EXPORT EXPORTAS EXTERN FIELD FILL FUNCTION GBLA GBLL GBLS GET GLOBAL IF IMPORT INCBIN INCLUDE INFO KEEP LCLA LCLL LCLS LTORG MACRO MAP MEND MEXIT NOFP OPT PRESERVE8 PROC QN READONLY RELOC REQUIRE REQUIRE8 RLIST FN ROUT SETA SETL SETS SN SPACE SUBT THUMB THUMBX TTL WHILE WEND ",
                built_in: "r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 pc lr sp ip sl sb fp a1 a2 a3 a4 v1 v2 v3 v4 v5 v6 v7 v8 f0 f1 f2 f3 f4 f5 f6 f7 p0 p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15 c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 q0 q1 q2 q3 q4 q5 q6 q7 q8 q9 q10 q11 q12 q13 q14 q15 cpsr_c cpsr_x cpsr_s cpsr_f cpsr_cx cpsr_cxs cpsr_xs cpsr_xsf cpsr_sf cpsr_cxsf spsr_c spsr_x spsr_s spsr_f spsr_cx spsr_cxs spsr_xs spsr_xsf spsr_sf spsr_cxsf s0 s1 s2 s3 s4 s5 s6 s7 s8 s9 s10 s11 s12 s13 s14 s15 s16 s17 s18 s19 s20 s21 s22 s23 s24 s25 s26 s27 s28 s29 s30 s31 d0 d1 d2 d3 d4 d5 d6 d7 d8 d9 d10 d11 d12 d13 d14 d15 d16 d17 d18 d19 d20 d21 d22 d23 d24 d25 d26 d27 d28 d29 d30 d31 {PC} {VAR} {TRUE} {FALSE} {OPT} {CONFIG} {ENDIAN} {CODESIZE} {CPU} {FPU} {ARCHITECTURE} {PCSTOREOFFSET} {ARMASM_VERSION} {INTER} {ROPI} {RWPI} {SWST} {NOSWST} . @"
            },
            contains: [{
                className: "keyword",
                begin: "\\b(adc|(qd?|sh?|u[qh]?)?add(8|16)?|usada?8|(q|sh?|u[qh]?)?(as|sa)x|and|adrl?|sbc|rs[bc]|asr|b[lx]?|blx|bxj|cbn?z|tb[bh]|bic|bfc|bfi|[su]bfx|bkpt|cdp2?|clz|clrex|cmp|cmn|cpsi[ed]|cps|setend|dbg|dmb|dsb|eor|isb|it[te]{0,3}|lsl|lsr|ror|rrx|ldm(([id][ab])|f[ds])?|ldr((s|ex)?[bhd])?|movt?|mvn|mra|mar|mul|[us]mull|smul[bwt][bt]|smu[as]d|smmul|smmla|mla|umlaal|smlal?([wbt][bt]|d)|mls|smlsl?[ds]|smc|svc|sev|mia([bt]{2}|ph)?|mrr?c2?|mcrr2?|mrs|msr|orr|orn|pkh(tb|bt)|rbit|rev(16|sh)?|sel|[su]sat(16)?|nop|pop|push|rfe([id][ab])?|stm([id][ab])?|str(ex)?[bhd]?|(qd?)?sub|(sh?|q|u[qh]?)?sub(8|16)|[su]xt(a?h|a?b(16)?)|srs([id][ab])?|swpb?|swi|smi|tst|teq|wfe|wfi|yield)(eq|ne|cs|cc|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al|hs|lo)?[sptrx]?",
                end: "\\s"
            }, e.COMMENT("[;@]", "$", {
                relevance: 0
            }), e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, {
                className: "string",
                begin: "'",
                end: "[^\\\\]'",
                relevance: 0
            }, {
                className: "title",
                begin: "\\|",
                end: "\\|",
                illegal: "\\n",
                relevance: 0
            }, {
                className: "number",
                variants: [{
                    begin: "[#$=]?0x[0-9a-f]+"
                }, {
                    begin: "[#$=]?0b[01]+"
                }, {
                    begin: "[#$=]\\d+"
                }, {
                    begin: "\\b\\d+"
                }],
                relevance: 0
            }, {
                className: "symbol",
                variants: [{
                    begin: "^[a-z_\\.\\$][a-z0-9_\\.\\$]+"
                }, {
                    begin: "^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:"
                }, {
                    begin: "[=#]\\w+"
                }],
                relevance: 0
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["adoc"],
            contains: [e.COMMENT("^/{4,}\\n", "\\n/{4,}$", {
                relevance: 10
            }), e.COMMENT("^//", "$", {
                relevance: 0
            }), {
                className: "title",
                begin: "^\\.\\w.*$"
            }, {
                begin: "^[=\\*]{4,}\\n",
                end: "\\n^[=\\*]{4,}$",
                relevance: 10
            }, {
                className: "section",
                relevance: 10,
                variants: [{
                    begin: "^(={1,5}) .+?( \\1)?$"
                }, {
                    begin: "^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$"
                }]
            }, {
                className: "meta",
                begin: "^:.+?:",
                end: "\\s",
                excludeEnd: !0,
                relevance: 10
            }, {
                className: "meta",
                begin: "^\\[.+?\\]$",
                relevance: 0
            }, {
                className: "quote",
                begin: "^_{4,}\\n",
                end: "\\n_{4,}$",
                relevance: 10
            }, {
                className: "code",
                begin: "^[\\-\\.]{4,}\\n",
                end: "\\n[\\-\\.]{4,}$",
                relevance: 10
            }, {
                begin: "^\\+{4,}\\n",
                end: "\\n\\+{4,}$",
                contains: [{
                    begin: "<",
                    end: ">",
                    subLanguage: "xml",
                    relevance: 0
                }],
                relevance: 10
            }, {
                className: "bullet",
                begin: "^(\\*+|\\-+|\\.+|[^\\n]+?::)\\s+"
            }, {
                className: "symbol",
                begin: "^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+",
                relevance: 10
            }, {
                className: "strong",
                begin: "\\B\\*(?![\\*\\s])",
                end: "(\\n{2}|\\*)",
                contains: [{
                    begin: "\\\\*\\w",
                    relevance: 0
                }]
            }, {
                className: "emphasis",
                begin: "\\B'(?!['\\s])",
                end: "(\\n{2}|')",
                contains: [{
                    begin: "\\\\'\\w",
                    relevance: 0
                }],
                relevance: 0
            }, {
                className: "emphasis",
                begin: "_(?![_\\s])",
                end: "(\\n{2}|_)",
                relevance: 0
            }, {
                className: "string",
                variants: [{
                    begin: "``.+?''"
                }, {
                    begin: "`.+?'"
                }]
            }, {
                className: "code",
                begin: "(`.+?`|\\+.+?\\+)",
                relevance: 0
            }, {
                className: "code",
                begin: "^[ \\t]",
                end: "$",
                relevance: 0
            }, {
                begin: "^'{3,}[ \\t]*$",
                relevance: 10
            }, {
                begin: "(link:)?(http|https|ftp|file|irc|image:?):\\S+\\[.*?\\]",
                returnBegin: !0,
                contains: [{
                    begin: "(link|image:?):",
                    relevance: 0
                }, {
                    className: "link",
                    begin: "\\w",
                    end: "[^\\[]+",
                    relevance: 0
                }, {
                    className: "string",
                    begin: "\\[",
                    end: "\\]",
                    excludeBegin: !0,
                    excludeEnd: !0,
                    relevance: 0
                }],
                relevance: 10
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else extends implements break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws privileged aspectOf adviceexecution proceed cflowbelow cflow initialization preinitialization staticinitialization withincode target within execution getWithinTypeName handler thisJoinPoint thisJoinPointStaticPart thisEnclosingJoinPointStaticPart declare parents warning error soft precedence thisAspectInstance";
        return {
            keywords: t,
            illegal: /<\/|#/,
            contains: [e.COMMENT("/\\*\\*", "\\*/", {
                relevance: 0,
                contains: [{
                    begin: /\w+@/,
                    relevance: 0
                }, {
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                }]
            }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                className: "class",
                beginKeywords: "aspect",
                end: /[{;=]/,
                excludeEnd: !0,
                illegal: /[:;"\[\]]/,
                contains: [{
                    beginKeywords: "extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton"
                }, e.UNDERSCORE_TITLE_MODE, {
                    begin: /\([^\)]*/,
                    end: /[)]+/,
                    keywords: t + " get set args call",
                    excludeEnd: !1
                }]
            }, {
                className: "class",
                beginKeywords: "class interface",
                end: /[{;=]/,
                excludeEnd: !0,
                relevance: 0,
                keywords: "class interface",
                illegal: /[:"\[\]]/,
                contains: [{
                    beginKeywords: "extends implements"
                }, e.UNDERSCORE_TITLE_MODE]
            }, {
                beginKeywords: "pointcut after before around throwing returning",
                end: /[)]/,
                excludeEnd: !1,
                illegal: /["\[\]]/,
                contains: [{
                    begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                    returnBegin: !0,
                    contains: [e.UNDERSCORE_TITLE_MODE]
                }]
            }, {
                begin: /[:]/,
                returnBegin: !0,
                end: /[{;]/,
                relevance: 0,
                excludeEnd: !1,
                keywords: t,
                illegal: /["\[\]]/,
                contains: [{
                    begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                    keywords: t + " get set args call",
                    relevance: 0
                }, e.QUOTE_STRING_MODE]
            }, {
                beginKeywords: "new throw",
                relevance: 0
            }, {
                className: "function",
                begin: /\w+ +\w+(\.)?\w+\s*\([^\)]*\)\s*((throws)[\w\s,]+)?[\{;]/,
                returnBegin: !0,
                end: /[{;=]/,
                keywords: t,
                excludeEnd: !0,
                contains: [{
                    begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                    returnBegin: !0,
                    relevance: 0,
                    contains: [e.UNDERSCORE_TITLE_MODE]
                }, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    relevance: 0,
                    keywords: t,
                    contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE]
                }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            }, e.C_NUMBER_MODE, {
                className: "meta",
                begin: "@[A-Za-z]+"
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            begin: "`[\\s\\S]"
        };
        return {
            case_insensitive: !0,
            aliases: ["ahk"],
            keywords: {
                keyword: "Break Continue Critical Exit ExitApp Gosub Goto New OnExit Pause return SetBatchLines SetTimer Suspend Thread Throw Until ahk_id ahk_class ahk_pid ahk_exe ahk_group",
                literal: "A|0 true false NOT AND OR",
                built_in: "ComSpec Clipboard ClipboardAll ErrorLevel"
            },
            contains: [{
                className: "built_in",
                begin: "A_[a-zA-Z0-9]+"
            }, t, e.inherit(e.QUOTE_STRING_MODE, {
                contains: [t]
            }), e.COMMENT(";", "$", {
                relevance: 0
            }), e.C_BLOCK_COMMENT_MODE, {
                className: "number",
                begin: e.NUMBER_RE,
                relevance: 0
            }, {
                className: "subst",
                begin: "%(?=[a-zA-Z0-9#_$@])",
                end: "%",
                illegal: "[^a-zA-Z0-9#_$@]"
            }, {
                className: "built_in",
                begin: "^\\s*\\w+\\s*,"
            }, {
                className: "meta",
                begin: "^\\s*#w+",
                end: "$",
                relevance: 0
            }, {
                className: "symbol",
                contains: [t],
                variants: [{
                    begin: '^[^\\n";]+::(?!=)'
                }, {
                    begin: '^[^\\n";]+:(?!=)',
                    relevance: 0
                }]
            }, {
                begin: ",\\s*,"
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            variants: [e.COMMENT(";", "$", {
                relevance: 0
            }), e.COMMENT("#cs", "#ce"), e.COMMENT("#comments-start", "#comments-end")]
        }
          , n = {
            begin: "\\$[A-z0-9_]+"
        }
          , r = {
            className: "string",
            variants: [{
                begin: /"/,
                end: /"/,
                contains: [{
                    begin: /""/,
                    relevance: 0
                }]
            }, {
                begin: /'/,
                end: /'/,
                contains: [{
                    begin: /''/,
                    relevance: 0
                }]
            }]
        }
          , a = {
            variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE]
        };
        return {
            case_insensitive: !0,
            illegal: /\/\*/,
            keywords: {
                keyword: "ByRef Case Const ContinueCase ContinueLoop Default Dim Do Else ElseIf EndFunc EndIf EndSelect EndSwitch EndWith Enum Exit ExitLoop For Func Global If In Local Next ReDim Return Select Static Step Switch Then To Until Volatile WEnd While With",
                built_in: "Abs ACos AdlibRegister AdlibUnRegister Asc AscW ASin Assign ATan AutoItSetOption AutoItWinGetTitle AutoItWinSetTitle Beep Binary BinaryLen BinaryMid BinaryToString BitAND BitNOT BitOR BitRotate BitShift BitXOR BlockInput Break Call CDTray Ceiling Chr ChrW ClipGet ClipPut ConsoleRead ConsoleWrite ConsoleWriteError ControlClick ControlCommand ControlDisable ControlEnable ControlFocus ControlGetFocus ControlGetHandle ControlGetPos ControlGetText ControlHide ControlListView ControlMove ControlSend ControlSetText ControlShow ControlTreeView Cos Dec DirCopy DirCreate DirGetSize DirMove DirRemove DllCall DllCallAddress DllCallbackFree DllCallbackGetPtr DllCallbackRegister DllClose DllOpen DllStructCreate DllStructGetData DllStructGetPtr DllStructGetSize DllStructSetData DriveGetDrive DriveGetFileSystem DriveGetLabel DriveGetSerial DriveGetType DriveMapAdd DriveMapDel DriveMapGet DriveSetLabel DriveSpaceFree DriveSpaceTotal DriveStatus EnvGet EnvSet EnvUpdate Eval Execute Exp FileChangeDir FileClose FileCopy FileCreateNTFSLink FileCreateShortcut FileDelete FileExists FileFindFirstFile FileFindNextFile FileFlush FileGetAttrib FileGetEncoding FileGetLongName FileGetPos FileGetShortcut FileGetShortName FileGetSize FileGetTime FileGetVersion FileInstall FileMove FileOpen FileOpenDialog FileRead FileReadLine FileReadToArray FileRecycle FileRecycleEmpty FileSaveDialog FileSelectFolder FileSetAttrib FileSetEnd FileSetPos FileSetTime FileWrite FileWriteLine Floor FtpSetProxy FuncName GUICreate GUICtrlCreateAvi GUICtrlCreateButton GUICtrlCreateCheckbox GUICtrlCreateCombo GUICtrlCreateContextMenu GUICtrlCreateDate GUICtrlCreateDummy GUICtrlCreateEdit GUICtrlCreateGraphic GUICtrlCreateGroup GUICtrlCreateIcon GUICtrlCreateInput GUICtrlCreateLabel GUICtrlCreateList GUICtrlCreateListView GUICtrlCreateListViewItem GUICtrlCreateMenu GUICtrlCreateMenuItem GUICtrlCreateMonthCal GUICtrlCreateObj GUICtrlCreatePic GUICtrlCreateProgress GUICtrlCreateRadio GUICtrlCreateSlider GUICtrlCreateTab GUICtrlCreateTabItem GUICtrlCreateTreeView GUICtrlCreateTreeViewItem GUICtrlCreateUpdown GUICtrlDelete GUICtrlGetHandle GUICtrlGetState GUICtrlRead GUICtrlRecvMsg GUICtrlRegisterListViewSort GUICtrlSendMsg GUICtrlSendToDummy GUICtrlSetBkColor GUICtrlSetColor GUICtrlSetCursor GUICtrlSetData GUICtrlSetDefBkColor GUICtrlSetDefColor GUICtrlSetFont GUICtrlSetGraphic GUICtrlSetImage GUICtrlSetLimit GUICtrlSetOnEvent GUICtrlSetPos GUICtrlSetResizing GUICtrlSetState GUICtrlSetStyle GUICtrlSetTip GUIDelete GUIGetCursorInfo GUIGetMsg GUIGetStyle GUIRegisterMsg GUISetAccelerators GUISetBkColor GUISetCoord GUISetCursor GUISetFont GUISetHelp GUISetIcon GUISetOnEvent GUISetState GUISetStyle GUIStartGroup GUISwitch Hex HotKeySet HttpSetProxy HttpSetUserAgent HWnd InetClose InetGet InetGetInfo InetGetSize InetRead IniDelete IniRead IniReadSection IniReadSectionNames IniRenameSection IniWrite IniWriteSection InputBox Int IsAdmin IsArray IsBinary IsBool IsDeclared IsDllStruct IsFloat IsFunc IsHWnd IsInt IsKeyword IsNumber IsObj IsPtr IsString Log MemGetStats Mod MouseClick MouseClickDrag MouseDown MouseGetCursor MouseGetPos MouseMove MouseUp MouseWheel MsgBox Number ObjCreate ObjCreateInterface ObjEvent ObjGet ObjName OnAutoItExitRegister OnAutoItExitUnRegister Ping PixelChecksum PixelGetColor PixelSearch ProcessClose ProcessExists ProcessGetStats ProcessList ProcessSetPriority ProcessWait ProcessWaitClose ProgressOff ProgressOn ProgressSet Ptr Random RegDelete RegEnumKey RegEnumVal RegRead RegWrite Round Run RunAs RunAsWait RunWait Send SendKeepActive SetError SetExtended ShellExecute ShellExecuteWait Shutdown Sin Sleep SoundPlay SoundSetWaveVolume SplashImageOn SplashOff SplashTextOn Sqrt SRandom StatusbarGetText StderrRead StdinWrite StdioClose StdoutRead String StringAddCR StringCompare StringFormat StringFromASCIIArray StringInStr StringIsAlNum StringIsAlpha StringIsASCII StringIsDigit StringIsFloat StringIsInt StringIsLower StringIsSpace StringIsUpper StringIsXDigit StringLeft StringLen StringLower StringMid StringRegExp StringRegExpReplace StringReplace StringReverse StringRight StringSplit StringStripCR StringStripWS StringToASCIIArray StringToBinary StringTrimLeft StringTrimRight StringUpper Tan TCPAccept TCPCloseSocket TCPConnect TCPListen TCPNameToIP TCPRecv TCPSend TCPShutdown, UDPShutdown TCPStartup, UDPStartup TimerDiff TimerInit ToolTip TrayCreateItem TrayCreateMenu TrayGetMsg TrayItemDelete TrayItemGetHandle TrayItemGetState TrayItemGetText TrayItemSetOnEvent TrayItemSetState TrayItemSetText TraySetClick TraySetIcon TraySetOnEvent TraySetPauseIcon TraySetState TraySetToolTip TrayTip UBound UDPBind UDPCloseSocket UDPOpen UDPRecv UDPSend VarGetType WinActivate WinActive WinClose WinExists WinFlash WinGetCaretPos WinGetClassList WinGetClientSize WinGetHandle WinGetPos WinGetProcess WinGetState WinGetText WinGetTitle WinKill WinList WinMenuSelectItem WinMinimizeAll WinMinimizeAllUndo WinMove WinSetOnTop WinSetState WinSetTitle WinSetTrans WinWait",
                literal: "True False And Null Not Or"
            },
            contains: [t, n, r, a, {
                className: "meta",
                begin: "#",
                end: "$",
                keywords: {
                    "meta-keyword": "comments include include-once NoTrayIcon OnAutoItStartRegister pragma compile RequireAdmin"
                },
                contains: [{
                    begin: /\\\n/,
                    relevance: 0
                }, {
                    beginKeywords: "include",
                    keywords: {
                        "meta-keyword": "include"
                    },
                    end: "$",
                    contains: [r, {
                        className: "meta-string",
                        variants: [{
                            begin: "<",
                            end: ">"
                        }, {
                            begin: /"/,
                            end: /"/,
                            contains: [{
                                begin: /""/,
                                relevance: 0
                            }]
                        }, {
                            begin: /'/,
                            end: /'/,
                            contains: [{
                                begin: /''/,
                                relevance: 0
                            }]
                        }]
                    }]
                }, r, t]
            }, {
                className: "symbol",
                begin: "@[A-z0-9_]+"
            }, {
                className: "function",
                beginKeywords: "Func",
                end: "$",
                illegal: "\\$|\\[|%",
                contains: [e.UNDERSCORE_TITLE_MODE, {
                    className: "params",
                    begin: "\\(",
                    end: "\\)",
                    contains: [n, r, a]
                }]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            case_insensitive: !0,
            lexemes: "\\.?" + e.IDENT_RE,
            keywords: {
                keyword: "adc add adiw and andi asr bclr bld brbc brbs brcc brcs break breq brge brhc brhs brid brie brlo brlt brmi brne brpl brsh brtc brts brvc brvs bset bst call cbi cbr clc clh cli cln clr cls clt clv clz com cp cpc cpi cpse dec eicall eijmp elpm eor fmul fmuls fmulsu icall ijmp in inc jmp ld ldd ldi lds lpm lsl lsr mov movw mul muls mulsu neg nop or ori out pop push rcall ret reti rjmp rol ror sbc sbr sbrc sbrs sec seh sbi sbci sbic sbis sbiw sei sen ser ses set sev sez sleep spm st std sts sub subi swap tst wdr",
                built_in: "r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 x|0 xh xl y|0 yh yl z|0 zh zl ucsr1c udr1 ucsr1a ucsr1b ubrr1l ubrr1h ucsr0c ubrr0h tccr3c tccr3a tccr3b tcnt3h tcnt3l ocr3ah ocr3al ocr3bh ocr3bl ocr3ch ocr3cl icr3h icr3l etimsk etifr tccr1c ocr1ch ocr1cl twcr twdr twar twsr twbr osccal xmcra xmcrb eicra spmcsr spmcr portg ddrg ping portf ddrf sreg sph spl xdiv rampz eicrb eimsk gimsk gicr eifr gifr timsk tifr mcucr mcucsr tccr0 tcnt0 ocr0 assr tccr1a tccr1b tcnt1h tcnt1l ocr1ah ocr1al ocr1bh ocr1bl icr1h icr1l tccr2 tcnt2 ocr2 ocdr wdtcr sfior eearh eearl eedr eecr porta ddra pina portb ddrb pinb portc ddrc pinc portd ddrd pind spdr spsr spcr udr0 ucsr0a ucsr0b ubrr0l acsr admux adcsr adch adcl porte ddre pine pinf",
                meta: ".byte .cseg .db .def .device .dseg .dw .endmacro .equ .eseg .exit .include .list .listmac .macro .nolist .org .set"
            },
            contains: [e.C_BLOCK_COMMENT_MODE, e.COMMENT(";", "$", {
                relevance: 0
            }), e.C_NUMBER_MODE, e.BINARY_NUMBER_MODE, {
                className: "number",
                begin: "\\b(\\$[a-zA-Z0-9]+|0o[0-7]+)"
            }, e.QUOTE_STRING_MODE, {
                className: "string",
                begin: "'",
                end: "[^\\\\]'",
                illegal: "[^\\\\][^']"
            }, {
                className: "symbol",
                begin: "^[A-Za-z0-9_.$]+:"
            }, {
                className: "meta",
                begin: "#",
                end: "$"
            }, {
                className: "subst",
                begin: "@[0-9]+"
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            keywords: {
                keyword: "BEGIN END if else while do for in break continue delete next nextfile function func exit|10"
            },
            contains: [{
                className: "variable",
                variants: [{
                    begin: /\$[\w\d#@][\w\d_]*/
                }, {
                    begin: /\$\{(.*?)}/
                }]
            }, {
                className: "string",
                contains: [e.BACKSLASH_ESCAPE],
                variants: [{
                    begin: /(u|b)?r?'''/,
                    end: /'''/,
                    relevance: 10
                }, {
                    begin: /(u|b)?r?"""/,
                    end: /"""/,
                    relevance: 10
                }, {
                    begin: /(u|r|ur)'/,
                    end: /'/,
                    relevance: 10
                }, {
                    begin: /(u|r|ur)"/,
                    end: /"/,
                    relevance: 10
                }, {
                    begin: /(b|br)'/,
                    end: /'/
                }, {
                    begin: /(b|br)"/,
                    end: /"/
                }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
            }, e.REGEXP_MODE, e.HASH_COMMENT_MODE, e.NUMBER_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            keywords: "false int abstract private char boolean static null if for true while long throw finally protected final return void enum else break new catch byte super case short default double public try this switch continue reverse firstfast firstonly forupdate nofetch sum avg minof maxof count order group by asc desc index hint like dispaly edit client server ttsbegin ttscommit str real date container anytype common div mod",
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, {
                className: "meta",
                begin: "#",
                end: "$"
            }, {
                className: "class",
                beginKeywords: "class interface",
                end: "{",
                excludeEnd: !0,
                illegal: ":",
                contains: [{
                    beginKeywords: "extends implements"
                }, e.UNDERSCORE_TITLE_MODE]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "variable",
            variants: [{
                begin: /\$[\w\d#@][\w\d_]*/
            }, {
                begin: /\$\{(.*?)}/
            }]
        }
          , n = {
            className: "string",
            begin: /"/,
            end: /"/,
            contains: [e.BACKSLASH_ESCAPE, t, {
                className: "variable",
                begin: /\$\(/,
                end: /\)/,
                contains: [e.BACKSLASH_ESCAPE]
            }]
        }
          , r = {
            className: "string",
            begin: /'/,
            end: /'/
        };
        return {
            aliases: ["sh", "zsh"],
            lexemes: /\b-?[a-z\._]+\b/,
            keywords: {
                keyword: "if then else elif fi for while in do done case esac function",
                literal: "true false",
                built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
                _: "-ne -eq -lt -gt -f -d -e -s -l -a"
            },
            contains: [{
                className: "meta",
                begin: /^#![^\n]+sh\s*$/,
                relevance: 10
            }, {
                className: "function",
                begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                returnBegin: !0,
                contains: [e.inherit(e.TITLE_MODE, {
                    begin: /\w[\w\d_]*/
                })],
                relevance: 0
            }, e.HASH_COMMENT_MODE, n, r, t]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            case_insensitive: !0,
            illegal: "^.",
            lexemes: "[a-zA-Z][a-zA-Z0-9_$%!#]*",
            keywords: {
                keyword: "ABS ASC AND ATN AUTO|0 BEEP BLOAD|10 BSAVE|10 CALL CALLS CDBL CHAIN CHDIR CHR$|10 CINT CIRCLE CLEAR CLOSE CLS COLOR COM COMMON CONT COS CSNG CSRLIN CVD CVI CVS DATA DATE$ DEFDBL DEFINT DEFSNG DEFSTR DEF|0 SEG USR DELETE DIM DRAW EDIT END ENVIRON ENVIRON$ EOF EQV ERASE ERDEV ERDEV$ ERL ERR ERROR EXP FIELD FILES FIX FOR|0 FRE GET GOSUB|10 GOTO HEX$ IF|0 THEN ELSE|0 INKEY$ INP INPUT INPUT# INPUT$ INSTR IMP INT IOCTL IOCTL$ KEY ON OFF LIST KILL LEFT$ LEN LET LINE LLIST LOAD LOC LOCATE LOF LOG LPRINT USING LSET MERGE MID$ MKDIR MKD$ MKI$ MKS$ MOD NAME NEW NEXT NOISE NOT OCT$ ON OR PEN PLAY STRIG OPEN OPTION BASE OUT PAINT PALETTE PCOPY PEEK PMAP POINT POKE POS PRINT PRINT] PSET PRESET PUT RANDOMIZE READ REM RENUM RESET|0 RESTORE RESUME RETURN|0 RIGHT$ RMDIR RND RSET RUN SAVE SCREEN SGN SHELL SIN SOUND SPACE$ SPC SQR STEP STICK STOP STR$ STRING$ SWAP SYSTEM TAB TAN TIME$ TIMER TROFF TRON TO USR VAL VARPTR VARPTR$ VIEW WAIT WHILE WEND WIDTH WINDOW WRITE XOR"
            },
            contains: [e.QUOTE_STRING_MODE, e.COMMENT("REM", "$", {
                relevance: 10
            }), e.COMMENT("'", "$", {
                relevance: 0
            }), {
                className: "symbol",
                begin: "^[0-9]+ ",
                relevance: 10
            }, {
                className: "number",
                begin: "\\b([0-9]+[0-9edED.]*[#!]?)",
                relevance: 0
            }, {
                className: "number",
                begin: "(&[hH][0-9a-fA-F]{1,4})"
            }, {
                className: "number",
                begin: "(&[oO][0-7]{1,6})"
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            contains: [{
                className: "attribute",
                begin: /</,
                end: />/
            }, {
                begin: /::=/,
                starts: {
                    end: /$/,
                    contains: [{
                        begin: /</,
                        end: />/
                    }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                }
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "literal",
            begin: "[\\+\\-]",
            relevance: 0
        };
        return {
            aliases: ["bf"],
            contains: [e.COMMENT("[^\\[\\]\\.,\\+\\-<> \r\n]", "[\\[\\]\\.,\\+\\-<> \r\n]", {
                returnEnd: !0,
                relevance: 0
            }), {
                className: "title",
                begin: "[\\[\\]]",
                relevance: 0
            }, {
                className: "string",
                begin: "[\\.,]",
                relevance: 0
            }, {
                begin: /\+\+|\-\-/,
                returnBegin: !0,
                contains: [t]
            }, t]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to until while with var"
          , n = [e.C_LINE_COMMENT_MODE, e.COMMENT(/\{/, /\}/, {
            relevance: 0
        }), e.COMMENT(/\(\*/, /\*\)/, {
            relevance: 10
        })]
          , r = {
            className: "string",
            begin: /'/,
            end: /'/,
            contains: [{
                begin: /''/
            }]
        }
          , a = {
            className: "string",
            begin: /(#\d+)+/
        }
          , i = {
            className: "number",
            begin: "\\b\\d+(\\.\\d+)?(DT|D|T)",
            relevance: 0
        }
          , s = {
            className: "string",
            begin: '"',
            end: '"'
        }
          , o = {
            className: "function",
            beginKeywords: "procedure",
            end: /[:;]/,
            keywords: "procedure|10",
            contains: [e.TITLE_MODE, {
                className: "params",
                begin: /\(/,
                end: /\)/,
                keywords: t,
                contains: [r, a]
            }].concat(n)
        }
          , l = {
            className: "class",
            begin: "OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)",
            returnBegin: !0,
            contains: [e.TITLE_MODE, o]
        };
        return {
            case_insensitive: !0,
            keywords: {
                keyword: t,
                literal: "false true"
            },
            illegal: /\/\*/,
            contains: [r, a, i, s, e.NUMBER_MODE, l, o]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["capnp"],
            keywords: {
                keyword: "struct enum interface union group import using const annotation extends in of on as with from fixed",
                built_in: "Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 Text Data AnyPointer AnyStruct Capability List",
                literal: "true false"
            },
            contains: [e.QUOTE_STRING_MODE, e.NUMBER_MODE, e.HASH_COMMENT_MODE, {
                className: "meta",
                begin: /@0x[\w\d]{16};/,
                illegal: /\n/
            }, {
                className: "symbol",
                begin: /@\d+\b/
            }, {
                className: "class",
                beginKeywords: "struct enum",
                end: /\{/,
                illegal: /\n/,
                contains: [e.inherit(e.TITLE_MODE, {
                    starts: {
                        endsWithParent: !0,
                        excludeEnd: !0
                    }
                })]
            }, {
                className: "class",
                beginKeywords: "interface",
                end: /\{/,
                illegal: /\n/,
                contains: [e.inherit(e.TITLE_MODE, {
                    starts: {
                        endsWithParent: !0,
                        excludeEnd: !0
                    }
                })]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "assembly module package import alias class interface object given value assign void function new of extends satisfies abstracts in out return break continue throw assert dynamic if else switch case for while try catch finally then let this outer super is exists nonempty"
          , n = {
            className: "subst",
            excludeBegin: !0,
            excludeEnd: !0,
            begin: /``/,
            end: /``/,
            keywords: t,
            relevance: 10
        }
          , r = [{
            className: "string",
            begin: '"""',
            end: '"""',
            relevance: 10
        }, {
            className: "string",
            begin: '"',
            end: '"',
            contains: [n]
        }, {
            className: "string",
            begin: "'",
            end: "'"
        }, {
            className: "number",
            begin: "#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?",
            relevance: 0
        }];
        return n.contains = r,
        {
            keywords: {
                keyword: t + " shared abstract formal default actual variable late native deprecatedfinal sealed annotation suppressWarnings small",
                meta: "doc by license see throws tagged"
            },
            illegal: "\\$[^01]|#[^0-9a-fA-F]",
            contains: [e.C_LINE_COMMENT_MODE, e.COMMENT("/\\*", "\\*/", {
                contains: ["self"]
            }), {
                className: "meta",
                begin: '@[a-z]\\w*(?:\\:"[^"]*")?'
            }].concat(r)
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["clean", "icl", "dcl"],
            keywords: {
                keyword: "if let in with where case of class instance otherwise implementation definition system module from import qualified as special code inline foreign export ccall stdcall generic derive infix infixl infixr",
                literal: "True False"
            },
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, {
                begin: "->|<-[|:]?|::|#!?|>>=|\\{\\||\\|\\}|:==|=:|\\.\\.|<>|`"
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            contains: [{
                className: "meta",
                begin: /^([\w.-]+|\s*#_)=>/,
                starts: {
                    end: /$/,
                    subLanguage: "clojure"
                }
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            "builtin-name": "def defonce cond apply if-not if-let if not not= = < > <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"
        }
          , n = "[a-zA-Z_\\-!.?+*=<>&#'][a-zA-Z_\\-!.?+*=<>&#'0-9/;:]*"
          , r = {
            begin: n,
            relevance: 0
        }
          , a = {
            className: "number",
            begin: "[-+]?\\d+(\\.\\d+)?",
            relevance: 0
        }
          , i = e.inherit(e.QUOTE_STRING_MODE, {
            illegal: null
        })
          , s = e.COMMENT(";", "$", {
            relevance: 0
        })
          , o = {
            className: "literal",
            begin: /\b(true|false|nil)\b/
        }
          , l = {
            begin: "[\\[\\{]",
            end: "[\\]\\}]"
        }
          , c = {
            className: "comment",
            begin: "\\^" + n
        }
          , d = e.COMMENT("\\^\\{", "\\}")
          , u = {
            className: "symbol",
            begin: "[:]{1,2}" + n
        }
          , p = {
            begin: "\\(",
            end: "\\)"
        }
          , m = {
            endsWithParent: !0,
            relevance: 0
        }
          , g = {
            keywords: t,
            lexemes: n,
            className: "name",
            begin: n,
            starts: m
        }
          , _ = [p, i, c, d, s, u, l, a, o, r];
        return p.contains = [e.COMMENT("comment", ""), g, m],
        m.contains = _,
        l.contains = _,
        d.contains = [l],
        {
            aliases: ["clj"],
            illegal: /\S/,
            contains: [p, i, c, d, s, u, l, a, o]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["cmake.in"],
            case_insensitive: !0,
            keywords: {
                keyword: "add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_subdirectory add_test aux_source_directory break build_command cmake_minimum_required cmake_policy configure_file create_test_sourcelist define_property else elseif enable_language enable_testing endforeach endfunction endif endmacro endwhile execute_process export find_file find_library find_package find_path find_program fltk_wrap_ui foreach function get_cmake_property get_directory_property get_filename_component get_property get_source_file_property get_target_property get_test_property if include include_directories include_external_msproject include_regular_expression install link_directories load_cache load_command macro mark_as_advanced message option output_required_files project qt_wrap_cpp qt_wrap_ui remove_definitions return separate_arguments set set_directory_properties set_property set_source_files_properties set_target_properties set_tests_properties site_name source_group string target_link_libraries try_compile try_run unset variable_watch while build_name exec_program export_library_dependencies install_files install_programs install_targets link_libraries make_directory remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or equal less greater strless strgreater strequal matches"
            },
            contains: [{
                className: "variable",
                begin: "\\${",
                end: "}"
            }, e.HASH_COMMENT_MODE, e.QUOTE_STRING_MODE, e.NUMBER_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not",
            literal: "true false null undefined yes no on off",
            built_in: "npm require console print module global window document"
        }
          , n = "[A-Za-z$_][0-9A-Za-z$_]*"
          , r = {
            className: "subst",
            begin: /#\{/,
            end: /}/,
            keywords: t
        }
          , a = [e.BINARY_NUMBER_MODE, e.inherit(e.C_NUMBER_MODE, {
            starts: {
                end: "(\\s*/)?",
                relevance: 0
            }
        }), {
            className: "string",
            variants: [{
                begin: /'''/,
                end: /'''/,
                contains: [e.BACKSLASH_ESCAPE]
            }, {
                begin: /'/,
                end: /'/,
                contains: [e.BACKSLASH_ESCAPE]
            }, {
                begin: /"""/,
                end: /"""/,
                contains: [e.BACKSLASH_ESCAPE, r]
            }, {
                begin: /"/,
                end: /"/,
                contains: [e.BACKSLASH_ESCAPE, r]
            }]
        }, {
            className: "regexp",
            variants: [{
                begin: "///",
                end: "///",
                contains: [r, e.HASH_COMMENT_MODE]
            }, {
                begin: "//[gim]*",
                relevance: 0
            }, {
                begin: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
            }]
        }, {
            begin: "@" + n
        }, {
            subLanguage: "javascript",
            excludeBegin: !0,
            excludeEnd: !0,
            variants: [{
                begin: "```",
                end: "```"
            }, {
                begin: "`",
                end: "`"
            }]
        }];
        r.contains = a;
        var i = e.inherit(e.TITLE_MODE, {
            begin: n
        })
          , s = {
            className: "params",
            begin: "\\([^\\(]",
            returnBegin: !0,
            contains: [{
                begin: /\(/,
                end: /\)/,
                keywords: t,
                contains: ["self"].concat(a)
            }]
        };
        return {
            aliases: ["coffee", "cson", "iced"],
            keywords: t,
            illegal: /\/\*/,
            contains: a.concat([e.COMMENT("###", "###"), e.HASH_COMMENT_MODE, {
                className: "function",
                begin: "^\\s*" + n + "\\s*=\\s*(\\(.*\\))?\\s*\\B[-=]>",
                end: "[-=]>",
                returnBegin: !0,
                contains: [i, s]
            }, {
                begin: /[:\(,=]\s*/,
                relevance: 0,
                contains: [{
                    className: "function",
                    begin: "(\\(.*\\))?\\s*\\B[-=]>",
                    end: "[-=]>",
                    returnBegin: !0,
                    contains: [s]
                }]
            }, {
                className: "class",
                beginKeywords: "class",
                end: "$",
                illegal: /[:="\[\]]/,
                contains: [{
                    beginKeywords: "extends",
                    endsWithParent: !0,
                    illegal: /[:="\[\]]/,
                    contains: [i]
                }, i]
            }, {
                begin: n + ":",
                end: ":",
                returnBegin: !0,
                returnEnd: !0,
                relevance: 0
            }])
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            keywords: {
                keyword: "_ as at cofix else end exists exists2 fix for forall fun if IF in let match mod Prop return Set then Type using where with Abort About Add Admit Admitted All Arguments Assumptions Axiom Back BackTo Backtrack Bind Blacklist Canonical Cd Check Class Classes Close Coercion Coercions CoFixpoint CoInductive Collection Combined Compute Conjecture Conjectures Constant constr Constraint Constructors Context Corollary CreateHintDb Cut Declare Defined Definition Delimit Dependencies DependentDerive Drop eauto End Equality Eval Example Existential Existentials Existing Export exporting Extern Extract Extraction Fact Field Fields File Fixpoint Focus for From Function Functional Generalizable Global Goal Grab Grammar Graph Guarded Heap Hint HintDb Hints Hypotheses Hypothesis ident Identity If Immediate Implicit Import Include Inductive Infix Info Initial Inline Inspect Instance Instances Intro Intros Inversion Inversion_clear Language Left Lemma Let Libraries Library Load LoadPath Local Locate Ltac ML Mode Module Modules Monomorphic Morphism Next NoInline Notation Obligation Obligations Opaque Open Optimize Options Parameter Parameters Parametric Path Paths pattern Polymorphic Preterm Print Printing Program Projections Proof Proposition Pwd Qed Quit Rec Record Recursive Redirect Relation Remark Remove Require Reserved Reset Resolve Restart Rewrite Right Ring Rings Save Scheme Scope Scopes Script Search SearchAbout SearchHead SearchPattern SearchRewrite Section Separate Set Setoid Show Solve Sorted Step Strategies Strategy Structure SubClass Table Tables Tactic Term Test Theorem Time Timeout Transparent Type Typeclasses Types Undelimit Undo Unfocus Unfocused Unfold Universe Universes Unset Unshelve using Variable Variables Variant Verbose Visibility where with",
                built_in: "abstract absurd admit after apply as assert assumption at auto autorewrite autounfold before bottom btauto by case case_eq cbn cbv change classical_left classical_right clear clearbody cofix compare compute congruence constr_eq constructor contradict contradiction cut cutrewrite cycle decide decompose dependent destruct destruction dintuition discriminate discrR do double dtauto eapply eassumption eauto ecase econstructor edestruct ediscriminate eelim eexact eexists einduction einjection eleft elim elimtype enough equality erewrite eright esimplify_eq esplit evar exact exactly_once exfalso exists f_equal fail field field_simplify field_simplify_eq first firstorder fix fold fourier functional generalize generalizing gfail give_up has_evar hnf idtac in induction injection instantiate intro intro_pattern intros intuition inversion inversion_clear is_evar is_var lapply lazy left lia lra move native_compute nia nsatz omega once pattern pose progress proof psatz quote record red refine reflexivity remember rename repeat replace revert revgoals rewrite rewrite_strat right ring ring_simplify rtauto set setoid_reflexivity setoid_replace setoid_rewrite setoid_symmetry setoid_transitivity shelve shelve_unifiable simpl simple simplify_eq solve specialize split split_Rabs split_Rmult stepl stepr subst sum swap symmetry tactic tauto time timeout top transitivity trivial try tryif unfold unify until using vm_compute with"
            },
            contains: [e.QUOTE_STRING_MODE, e.COMMENT("\\(\\*", "\\*\\)"), e.C_NUMBER_MODE, {
                className: "type",
                excludeBegin: !0,
                begin: "\\|\\s*",
                end: "\\w+"
            }, {
                begin: /[-=]>/
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            case_insensitive: !0,
            aliases: ["cos", "cls"],
            keywords: "property parameter class classmethod clientmethod extends as break catch close continue do d|0 else elseif for goto halt hang h|0 if job j|0 kill k|0 lock l|0 merge new open quit q|0 read r|0 return set s|0 tcommit throw trollback try tstart use view while write w|0 xecute x|0 zkill znspace zn ztrap zwrite zw zzdump zzwrite print zbreak zinsert zload zprint zremove zsave zzprint mv mvcall mvcrt mvdim mvprint zquit zsync ascii",
            contains: [{
                className: "number",
                begin: "\\b(\\d+(\\.\\d*)?|\\.\\d+)",
                relevance: 0
            }, {
                className: "string",
                variants: [{
                    begin: '"',
                    end: '"',
                    contains: [{
                        begin: '""',
                        relevance: 0
                    }]
                }]
            }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                className: "comment",
                begin: /;/,
                end: "$",
                relevance: 0
            }, {
                className: "built_in",
                begin: /(?:\$\$?|\.\.)\^?[a-zA-Z]+/
            }, {
                className: "built_in",
                begin: /\$\$\$[a-zA-Z]+/
            }, {
                className: "built_in",
                begin: /%[a-z]+(?:\.[a-z]+)*/
            }, {
                className: "symbol",
                begin: /\^%?[a-zA-Z][\w]*/
            }, {
                className: "keyword",
                begin: /##class|##super|#define|#dim/
            }, {
                begin: /&sql\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                subLanguage: "sql"
            }, {
                begin: /&(js|jscript|javascript)</,
                end: />/,
                excludeBegin: !0,
                excludeEnd: !0,
                subLanguage: "javascript"
            }, {
                begin: /&html<\s*</,
                end: />\s*>/,
                subLanguage: "xml"
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "keyword",
            begin: "\\b[a-z\\d_]*_t\\b"
        }
          , n = {
            className: "string",
            variants: [{
                begin: '(u8?|U)?L?"',
                end: '"',
                illegal: "\\n",
                contains: [e.BACKSLASH_ESCAPE]
            }, {
                begin: '(u8?|U)?R"',
                end: '"',
                contains: [e.BACKSLASH_ESCAPE]
            }, {
                begin: "'\\\\?.",
                end: "'",
                illegal: "."
            }]
        }
          , r = {
            className: "number",
            variants: [{
                begin: "\\b(0b[01']+)"
            }, {
                begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
            }, {
                begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
            }],
            relevance: 0
        }
          , a = {
            className: "meta",
            begin: /#\s*[a-z]+\b/,
            end: /$/,
            keywords: {
                "meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef include"
            },
            contains: [{
                begin: /\\\n/,
                relevance: 0
            }, e.inherit(n, {
                className: "meta-string"
            }), {
                className: "meta-string",
                begin: /<[^\n>]*>/,
                end: /$/,
                illegal: "\\n"
            }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }
          , i = e.IDENT_RE + "\\s*\\("
          , s = {
            keyword: "int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and or not",
            built_in: "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
            literal: "true false nullptr NULL"
        }
          , o = [t, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, r, n];
        return {
            aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
            keywords: s,
            illegal: "</",
            contains: o.concat([a, {
                begin: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
                end: ">",
                keywords: s,
                contains: ["self", t]
            }, {
                begin: e.IDENT_RE + "::",
                keywords: s
            }, {
                variants: [{
                    begin: /=/,
                    end: /;/
                }, {
                    begin: /\(/,
                    end: /\)/
                }, {
                    beginKeywords: "new throw return else",
                    end: /;/
                }],
                keywords: s,
                contains: o.concat([{
                    begin: /\(/,
                    end: /\)/,
                    keywords: s,
                    contains: o.concat(["self"]),
                    relevance: 0
                }]),
                relevance: 0
            }, {
                className: "function",
                begin: "(" + e.IDENT_RE + "[\\*&\\s]+)+" + i,
                returnBegin: !0,
                end: /[{;=]/,
                excludeEnd: !0,
                keywords: s,
                illegal: /[^\w\s\*&]/,
                contains: [{
                    begin: i,
                    returnBegin: !0,
                    contains: [e.TITLE_MODE],
                    relevance: 0
                }, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    keywords: s,
                    relevance: 0,
                    contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, n, r, t]
                }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, a]
            }, {
                className: "class",
                beginKeywords: "class struct",
                end: /[{;:]/,
                contains: [{
                    begin: /</,
                    end: />/,
                    contains: ["self"]
                }, e.TITLE_MODE]
            }]),
            exports: {
                preprocessor: a,
                strings: n,
                keywords: s
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "group clone ms master location colocation order fencing_topology rsc_ticket acl_target acl_group user role tag xml";
        return {
            aliases: ["crm", "pcmk"],
            case_insensitive: !0,
            keywords: {
                keyword: "params meta operations op rule attributes utilization read write deny defined not_defined in_range date spec in ref reference attribute type xpath version and or lt gt tag lte gte eq ne \\ number string",
                literal: "Master Started Slave Stopped start promote demote stop monitor true false"
            },
            contains: [e.HASH_COMMENT_MODE, {
                beginKeywords: "node",
                starts: {
                    end: "\\s*([\\w_-]+:)?",
                    starts: {
                        className: "title",
                        end: "\\s*[\\$\\w_][\\w_-]*"
                    }
                }
            }, {
                beginKeywords: "primitive rsc_template",
                starts: {
                    className: "title",
                    end: "\\s*[\\$\\w_][\\w_-]*",
                    starts: {
                        end: "\\s*@?[\\w_][\\w_\\.:-]*"
                    }
                }
            }, {
                begin: "\\b(" + t.split(" ").join("|") + ")\\s+",
                keywords: t,
                starts: {
                    className: "title",
                    end: "[\\$\\w_][\\w_-]*"
                }
            }, {
                beginKeywords: "property rsc_defaults op_defaults",
                starts: {
                    className: "title",
                    end: "\\s*([\\w_-]+:)?"
                }
            }, e.QUOTE_STRING_MODE, {
                className: "meta",
                begin: "(ocf|systemd|service|lsb):[\\w_:-]+",
                relevance: 0
            }, {
                className: "number",
                begin: "\\b\\d+(\\.\\d+)?(ms|s|h|m)?",
                relevance: 0
            }, {
                className: "literal",
                begin: "[-]?(infinity|inf)",
                relevance: 0
            }, {
                className: "attr",
                begin: /([A-Za-z\$_\#][\w_-]+)=/,
                relevance: 0
            }, {
                className: "tag",
                begin: "</?",
                end: "/?>",
                relevance: 0
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        function recursiveParen(e, t) {
            var n = [{
                begin: e,
                end: t
            }];
            return n[0].contains = n,
            n
        }
        var t = "(_[uif](8|16|32|64))?"
          , n = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\][=?]?"
          , r = {
            keyword: "abstract alias as as? asm begin break case class def do else elsif end ensure enum extend for fun if include instance_sizeof is_a? lib macro module next nil? of out pointerof private protected rescue responds_to? return require select self sizeof struct super then type typeof union uninitialized unless until when while with yield __DIR__ __END_LINE__ __FILE__ __LINE__",
            literal: "false nil true"
        }
          , a = {
            className: "subst",
            begin: "#{",
            end: "}",
            keywords: r
        }
          , i = {
            className: "template-variable",
            variants: [{
                begin: "\\{\\{",
                end: "\\}\\}"
            }, {
                begin: "\\{%",
                end: "%\\}"
            }],
            keywords: r
        }
          , s = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE, a],
            variants: [{
                begin: /'/,
                end: /'/
            }, {
                begin: /"/,
                end: /"/
            }, {
                begin: /`/,
                end: /`/
            }, {
                begin: "%w?\\(",
                end: "\\)",
                contains: recursiveParen("\\(", "\\)")
            }, {
                begin: "%w?\\[",
                end: "\\]",
                contains: recursiveParen("\\[", "\\]")
            }, {
                begin: "%w?{",
                end: "}",
                contains: recursiveParen("{", "}")
            }, {
                begin: "%w?<",
                end: ">",
                contains: recursiveParen("<", ">")
            }, {
                begin: "%w?/",
                end: "/"
            }, {
                begin: "%w?%",
                end: "%"
            }, {
                begin: "%w?-",
                end: "-"
            }, {
                begin: "%w?\\|",
                end: "\\|"
            }, {
                begin: /<<-\w+$/,
                end: /^\s*\w+$/
            }],
            relevance: 0
        }
          , o = {
            className: "string",
            variants: [{
                begin: "%q\\(",
                end: "\\)",
                contains: recursiveParen("\\(", "\\)")
            }, {
                begin: "%q\\[",
                end: "\\]",
                contains: recursiveParen("\\[", "\\]")
            }, {
                begin: "%q{",
                end: "}",
                contains: recursiveParen("{", "}")
            }, {
                begin: "%q<",
                end: ">",
                contains: recursiveParen("<", ">")
            }, {
                begin: "%q/",
                end: "/"
            }, {
                begin: "%q%",
                end: "%"
            }, {
                begin: "%q-",
                end: "-"
            }, {
                begin: "%q\\|",
                end: "\\|"
            }, {
                begin: /<<-'\w+'$/,
                end: /^\s*\w+$/
            }],
            relevance: 0
        }
          , l = {
            begin: "(!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~)\\s*",
            contains: [{
                className: "regexp",
                contains: [e.BACKSLASH_ESCAPE, a],
                variants: [{
                    begin: "//[a-z]*",
                    relevance: 0
                }, {
                    begin: "/",
                    end: "/[a-z]*"
                }, {
                    begin: "%r\\(",
                    end: "\\)",
                    contains: recursiveParen("\\(", "\\)")
                }, {
                    begin: "%r\\[",
                    end: "\\]",
                    contains: recursiveParen("\\[", "\\]")
                }, {
                    begin: "%r{",
                    end: "}",
                    contains: recursiveParen("{", "}")
                }, {
                    begin: "%r<",
                    end: ">",
                    contains: recursiveParen("<", ">")
                }, {
                    begin: "%r/",
                    end: "/"
                }, {
                    begin: "%r%",
                    end: "%"
                }, {
                    begin: "%r-",
                    end: "-"
                }, {
                    begin: "%r\\|",
                    end: "\\|"
                }]
            }],
            relevance: 0
        }
          , c = {
            className: "regexp",
            contains: [e.BACKSLASH_ESCAPE, a],
            variants: [{
                begin: "%r\\(",
                end: "\\)",
                contains: recursiveParen("\\(", "\\)")
            }, {
                begin: "%r\\[",
                end: "\\]",
                contains: recursiveParen("\\[", "\\]")
            }, {
                begin: "%r{",
                end: "}",
                contains: recursiveParen("{", "}")
            }, {
                begin: "%r<",
                end: ">",
                contains: recursiveParen("<", ">")
            }, {
                begin: "%r/",
                end: "/"
            }, {
                begin: "%r%",
                end: "%"
            }, {
                begin: "%r-",
                end: "-"
            }, {
                begin: "%r\\|",
                end: "\\|"
            }],
            relevance: 0
        }
          , d = {
            className: "meta",
            begin: "@\\[",
            end: "\\]",
            contains: [e.inherit(e.QUOTE_STRING_MODE, {
                className: "meta-string"
            })]
        }
          , u = [i, s, o, l, c, d, e.HASH_COMMENT_MODE, {
            className: "class",
            beginKeywords: "class module struct",
            end: "$|;",
            illegal: /=/,
            contains: [e.HASH_COMMENT_MODE, e.inherit(e.TITLE_MODE, {
                begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
            }), {
                begin: "<"
            }]
        }, {
            className: "class",
            beginKeywords: "lib enum union",
            end: "$|;",
            illegal: /=/,
            contains: [e.HASH_COMMENT_MODE, e.inherit(e.TITLE_MODE, {
                begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
            })],
            relevance: 10
        }, {
            className: "function",
            beginKeywords: "def",
            end: /\B\b/,
            contains: [e.inherit(e.TITLE_MODE, {
                begin: n,
                endsParent: !0
            })]
        }, {
            className: "function",
            beginKeywords: "fun macro",
            end: /\B\b/,
            contains: [e.inherit(e.TITLE_MODE, {
                begin: n,
                endsParent: !0
            })],
            relevance: 5
        }, {
            className: "symbol",
            begin: e.UNDERSCORE_IDENT_RE + "(\\!|\\?)?:",
            relevance: 0
        }, {
            className: "symbol",
            begin: ":",
            contains: [s, {
                begin: n
            }],
            relevance: 0
        }, {
            className: "number",
            variants: [{
                begin: "\\b0b([01_]*[01])" + t
            }, {
                begin: "\\b0o([0-7_]*[0-7])" + t
            }, {
                begin: "\\b0x([A-Fa-f0-9_]*[A-Fa-f0-9])" + t
            }, {
                begin: "\\b(([0-9][0-9_]*[0-9]|[0-9])(\\.[0-9_]*[0-9])?([eE][+-]?[0-9_]*[0-9])?)" + t
            }],
            relevance: 0
        }];
        return a.contains = u,
        i.contains = u.slice(1),
        {
            aliases: ["cr"],
            lexemes: "[a-zA-Z_]\\w*[!?=]?",
            keywords: r,
            contains: u
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            keyword: "abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long nameof object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",
            literal: "null false true"
        }
          , n = {
            className: "string",
            begin: '@"',
            end: '"',
            contains: [{
                begin: '""'
            }]
        }
          , r = e.inherit(n, {
            illegal: /\n/
        })
          , a = {
            className: "subst",
            begin: "{",
            end: "}",
            keywords: t
        }
          , i = e.inherit(a, {
            illegal: /\n/
        })
          , s = {
            className: "string",
            begin: /\$"/,
            end: '"',
            illegal: /\n/,
            contains: [{
                begin: "{{"
            }, {
                begin: "}}"
            }, e.BACKSLASH_ESCAPE, i]
        }
          , o = {
            className: "string",
            begin: /\$@"/,
            end: '"',
            contains: [{
                begin: "{{"
            }, {
                begin: "}}"
            }, {
                begin: '""'
            }, a]
        }
          , l = e.inherit(o, {
            illegal: /\n/,
            contains: [{
                begin: "{{"
            }, {
                begin: "}}"
            }, {
                begin: '""'
            }, i]
        });
        a.contains = [o, s, n, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE],
        i.contains = [l, s, r, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, e.inherit(e.C_BLOCK_COMMENT_MODE, {
            illegal: /\n/
        })];
        var c = {
            variants: [o, s, n, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
        }
          , d = e.IDENT_RE + "(<" + e.IDENT_RE + "(\\s*,\\s*" + e.IDENT_RE + ")*>)?(\\[\\])?";
        return {
            aliases: ["csharp"],
            keywords: t,
            illegal: /::/,
            contains: [e.COMMENT("///", "$", {
                returnBegin: !0,
                contains: [{
                    className: "doctag",
                    variants: [{
                        begin: "///",
                        relevance: 0
                    }, {
                        begin: "\x3c!--|--\x3e"
                    }, {
                        begin: "</?",
                        end: ">"
                    }]
                }]
            }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                className: "meta",
                begin: "#",
                end: "$",
                keywords: {
                    "meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"
                }
            }, c, e.C_NUMBER_MODE, {
                beginKeywords: "class interface",
                end: /[{;=]/,
                illegal: /[^\s:]/,
                contains: [e.TITLE_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            }, {
                beginKeywords: "namespace",
                end: /[{;=]/,
                illegal: /[^\s:]/,
                contains: [e.inherit(e.TITLE_MODE, {
                    begin: "[a-zA-Z](\\.?\\w)*"
                }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            }, {
                className: "meta",
                begin: "^\\s*\\[",
                excludeBegin: !0,
                end: "\\]",
                excludeEnd: !0,
                contains: [{
                    className: "meta-string",
                    begin: /"/,
                    end: /"/
                }]
            }, {
                beginKeywords: "new return throw await else",
                relevance: 0
            }, {
                className: "function",
                begin: "(" + d + "\\s+)+" + e.IDENT_RE + "\\s*\\(",
                returnBegin: !0,
                end: /[{;=]/,
                excludeEnd: !0,
                keywords: t,
                contains: [{
                    begin: e.IDENT_RE + "\\s*\\(",
                    returnBegin: !0,
                    contains: [e.TITLE_MODE],
                    relevance: 0
                }, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: t,
                    relevance: 0,
                    contains: [c, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE]
                }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            case_insensitive: !1,
            lexemes: "[a-zA-Z][a-zA-Z0-9_-]*",
            keywords: {
                keyword: "base-uri child-src connect-src default-src font-src form-action frame-ancestors frame-src img-src media-src object-src plugin-types report-uri sandbox script-src style-src"
            },
            contains: [{
                className: "string",
                begin: "'",
                end: "'"
            }, {
                className: "attribute",
                begin: "^Content",
                end: ":",
                excludeEnd: !0
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            begin: /[A-Z\_\.\-]+\s*:/,
            returnBegin: !0,
            end: ";",
            endsWithParent: !0,
            contains: [{
                className: "attribute",
                begin: /\S/,
                end: ":",
                excludeEnd: !0,
                starts: {
                    endsWithParent: !0,
                    excludeEnd: !0,
                    contains: [{
                        begin: /[\w-]+\(/,
                        returnBegin: !0,
                        contains: [{
                            className: "built_in",
                            begin: /[\w-]+/
                        }, {
                            begin: /\(/,
                            end: /\)/,
                            contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                        }]
                    }, e.CSS_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, e.C_BLOCK_COMMENT_MODE, {
                        className: "number",
                        begin: "#[0-9A-Fa-f]+"
                    }, {
                        className: "meta",
                        begin: "!important"
                    }]
                }
            }]
        };
        return {
            case_insensitive: !0,
            illegal: /[=\/|'\$]/,
            contains: [e.C_BLOCK_COMMENT_MODE, {
                className: "selector-id",
                begin: /#[A-Za-z0-9_-]+/
            }, {
                className: "selector-class",
                begin: /\.[A-Za-z0-9_-]+/
            }, {
                className: "selector-attr",
                begin: /\[/,
                end: /\]/,
                illegal: "$"
            }, {
                className: "selector-pseudo",
                begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
            }, {
                begin: "@(font-face|page)",
                lexemes: "[a-z-]+",
                keywords: "font-face page"
            }, {
                begin: "@",
                end: "[{;]",
                illegal: /:/,
                contains: [{
                    className: "keyword",
                    begin: /\w+/
                }, {
                    begin: /\s/,
                    endsWithParent: !0,
                    excludeEnd: !0,
                    relevance: 0,
                    contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.CSS_NUMBER_MODE]
                }]
            }, {
                className: "selector-tag",
                begin: "[a-zA-Z-][a-zA-Z0-9_-]*",
                relevance: 0
            }, {
                begin: "{",
                end: "}",
                illegal: /\S/,
                contains: [e.C_BLOCK_COMMENT_MODE, t]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            keyword: "abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__",
            built_in: "bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring",
            literal: "false null true"
        }
          , n = "((0|[1-9][\\d_]*)|0[bB][01_]+|0[xX]([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*))"
          , r = "\\\\(['\"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};"
          , a = {
            className: "number",
            begin: "\\b" + n + "(L|u|U|Lu|LU|uL|UL)?",
            relevance: 0
        }
          , i = {
            className: "number",
            begin: "\\b(((0[xX](([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)\\.([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)|\\.?([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*))[pP][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d))|((0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)(\\.\\d*|([eE][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)))|\\d+\\.(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)|\\.(0|[1-9][\\d_]*)([eE][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d))?))([fF]|L|i|[fF]i|Li)?|" + n + "(i|[fF]i|Li))",
            relevance: 0
        }
          , s = {
            className: "string",
            begin: "'(" + r + "|.)",
            end: "'",
            illegal: "."
        }
          , o = {
            begin: r,
            relevance: 0
        }
          , l = {
            className: "string",
            begin: '"',
            contains: [o],
            end: '"[cwd]?'
        }
          , c = {
            className: "string",
            begin: '[rq]"',
            end: '"[cwd]?',
            relevance: 5
        }
          , d = {
            className: "string",
            begin: "`",
            end: "`[cwd]?"
        }
          , u = {
            className: "string",
            begin: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',
            relevance: 10
        }
          , p = {
            className: "string",
            begin: 'q"\\{',
            end: '\\}"'
        }
          , m = {
            className: "meta",
            begin: "^#!",
            end: "$",
            relevance: 5
        }
          , g = {
            className: "meta",
            begin: "#(line)",
            end: "$",
            relevance: 5
        }
          , _ = {
            className: "keyword",
            begin: "@[a-zA-Z_][a-zA-Z_\\d]*"
        }
          , b = e.COMMENT("\\/\\+", "\\+\\/", {
            contains: ["self"],
            relevance: 10
        });
        return {
            lexemes: e.UNDERSCORE_IDENT_RE,
            keywords: t,
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, b, u, l, c, d, p, i, a, s, m, g, _]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "subst",
            begin: "\\$\\{",
            end: "}",
            keywords: "true false null this is new super"
        }
          , n = {
            className: "string",
            variants: [{
                begin: "r'''",
                end: "'''"
            }, {
                begin: 'r"""',
                end: '"""'
            }, {
                begin: "r'",
                end: "'",
                illegal: "\\n"
            }, {
                begin: 'r"',
                end: '"',
                illegal: "\\n"
            }, {
                begin: "'''",
                end: "'''",
                contains: [e.BACKSLASH_ESCAPE, t]
            }, {
                begin: '"""',
                end: '"""',
                contains: [e.BACKSLASH_ESCAPE, t]
            }, {
                begin: "'",
                end: "'",
                illegal: "\\n",
                contains: [e.BACKSLASH_ESCAPE, t]
            }, {
                begin: '"',
                end: '"',
                illegal: "\\n",
                contains: [e.BACKSLASH_ESCAPE, t]
            }]
        };
        return t.contains = [e.C_NUMBER_MODE, n],
        {
            keywords: {
                keyword: "assert async await break case catch class const continue default do else enum extends false final finally for if in is new null rethrow return super switch sync this throw true try var void while with yield abstract as dynamic export external factory get implements import library operator part set static typedef",
                built_in: "print Comparable DateTime Duration Function Iterable Iterator List Map Match Null Object Pattern RegExp Set Stopwatch String StringBuffer StringSink Symbol Type Uri bool double int num document window querySelector querySelectorAll Element ElementList"
            },
            contains: [n, e.COMMENT("/\\*\\*", "\\*/", {
                subLanguage: "markdown"
            }), e.COMMENT("///", "$", {
                subLanguage: "markdown"
            }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                className: "class",
                beginKeywords: "class interface",
                end: "{",
                excludeEnd: !0,
                contains: [{
                    beginKeywords: "extends implements"
                }, e.UNDERSCORE_TITLE_MODE]
            }, e.C_NUMBER_MODE, {
                className: "meta",
                begin: "@[A-Za-z]+"
            }, {
                begin: "=>"
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "exports register file shl array record property for mod while set ally label uses raise not stored class safecall var interface or private static exit index inherited to else stdcall override shr asm far resourcestring finalization packed virtual out and protected library do xorwrite goto near function end div overload object unit begin string on inline repeat until destructor write message program with read initialization except default nil if case cdecl in downto threadvar of try pascal const external constructor type public then implementation finally published procedure absolute reintroduce operator as is abstract alias assembler bitpacked break continue cppdecl cvar enumerator experimental platform deprecated unimplemented dynamic export far16 forward generic helper implements interrupt iochecks local name nodefault noreturn nostackframe oldfpccall otherwise saveregisters softfloat specialize strict unaligned varargs "
          , n = [e.C_LINE_COMMENT_MODE, e.COMMENT(/\{/, /\}/, {
            relevance: 0
        }), e.COMMENT(/\(\*/, /\*\)/, {
            relevance: 10
        })]
          , r = {
            className: "meta",
            variants: [{
                begin: /\{\$/,
                end: /\}/
            }, {
                begin: /\(\*\$/,
                end: /\*\)/
            }]
        }
          , a = {
            className: "string",
            begin: /'/,
            end: /'/,
            contains: [{
                begin: /''/
            }]
        }
          , i = {
            className: "string",
            begin: /(#\d+)+/
        }
          , s = {
            begin: e.IDENT_RE + "\\s*=\\s*class\\s*\\(",
            returnBegin: !0,
            contains: [e.TITLE_MODE]
        }
          , o = {
            className: "function",
            beginKeywords: "function constructor destructor procedure",
            end: /[:;]/,
            keywords: "function constructor|10 destructor|10 procedure|10",
            contains: [e.TITLE_MODE, {
                className: "params",
                begin: /\(/,
                end: /\)/,
                keywords: t,
                contains: [a, i, r].concat(n)
            }, r].concat(n)
        };
        return {
            aliases: ["dpr", "dfm", "pas", "pascal", "freepascal", "lazarus", "lpr", "lfm"],
            case_insensitive: !0,
            keywords: t,
            illegal: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
            contains: [a, i, e.NUMBER_MODE, s, o, r].concat(n)
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["patch"],
            contains: [{
                className: "meta",
                relevance: 10,
                variants: [{
                    begin: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/
                }, {
                    begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
                }, {
                    begin: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
                }]
            }, {
                className: "comment",
                variants: [{
                    begin: /Index: /,
                    end: /$/
                }, {
                    begin: /={3,}/,
                    end: /$/
                }, {
                    begin: /^\-{3}/,
                    end: /$/
                }, {
                    begin: /^\*{3} /,
                    end: /$/
                }, {
                    begin: /^\+{3}/,
                    end: /$/
                }, {
                    begin: /\*{5}/,
                    end: /\*{5}$/
                }]
            }, {
                className: "addition",
                begin: "^\\+",
                end: "$"
            }, {
                className: "deletion",
                begin: "^\\-",
                end: "$"
            }, {
                className: "addition",
                begin: "^\\!",
                end: "$"
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            begin: /\|[A-Za-z]+:?/,
            keywords: {
                name: "truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone"
            },
            contains: [e.QUOTE_STRING_MODE, e.APOS_STRING_MODE]
        };
        return {
            aliases: ["jinja"],
            case_insensitive: !0,
            subLanguage: "xml",
            contains: [e.COMMENT(/\{%\s*comment\s*%}/, /\{%\s*endcomment\s*%}/), e.COMMENT(/\{#/, /#}/), {
                className: "template-tag",
                begin: /\{%/,
                end: /%}/,
                contains: [{
                    className: "name",
                    begin: /\w+/,
                    keywords: {
                        name: "comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim"
                    },
                    starts: {
                        endsWithParent: !0,
                        keywords: "in by as",
                        contains: [t],
                        relevance: 0
                    }
                }]
            }, {
                className: "template-variable",
                begin: /\{\{/,
                end: /}}/,
                contains: [t]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["bind", "zone"],
            keywords: {
                keyword: "IN A AAAA AFSDB APL CAA CDNSKEY CDS CERT CNAME DHCID DLV DNAME DNSKEY DS HIP IPSECKEY KEY KX LOC MX NAPTR NS NSEC NSEC3 NSEC3PARAM PTR RRSIG RP SIG SOA SRV SSHFP TA TKEY TLSA TSIG TXT"
            },
            contains: [e.COMMENT(";", "$", {
                relevance: 0
            }), {
                className: "meta",
                begin: /^\$(TTL|GENERATE|INCLUDE|ORIGIN)\b/
            }, {
                className: "number",
                begin: "((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))\\b"
            }, {
                className: "number",
                begin: "((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b"
            }, e.inherit(e.NUMBER_MODE, {
                begin: /\b\d+[dhwm]?/
            })]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["docker"],
            case_insensitive: !0,
            keywords: "from maintainer expose env arg user onbuild stopsignal",
            contains: [e.HASH_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.NUMBER_MODE, {
                beginKeywords: "run cmd entrypoint volume add copy workdir label healthcheck shell",
                starts: {
                    end: /[^\\]\n/,
                    subLanguage: "bash"
                }
            }],
            illegal: "</"
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = e.COMMENT(/^\s*@?rem\b/, /$/, {
            relevance: 10
        });
        return {
            aliases: ["bat", "cmd"],
            case_insensitive: !0,
            illegal: /\/\*/,
            keywords: {
                keyword: "if else goto for in do call exit not exist errorlevel defined equ neq lss leq gtr geq",
                built_in: "prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux shift cd dir echo setlocal endlocal set pause copy append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color comp compact convert date dir diskcomp diskcopy doskey erase fs find findstr format ftype graftabl help keyb label md mkdir mode more move path pause print popd pushd promt rd recover rem rename replace restore rmdir shiftsort start subst time title tree type ver verify vol ping net ipconfig taskkill xcopy ren del"
            },
            contains: [{
                className: "variable",
                begin: /%%[^ ]|%[^ ]+?%|![^ ]+?!/
            }, {
                className: "function",
                begin: {
                    className: "symbol",
                    begin: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)",
                    relevance: 0
                }.begin,
                end: "goto:eof",
                contains: [e.inherit(e.TITLE_MODE, {
                    begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
                }), t]
            }, {
                className: "number",
                begin: "\\b\\d+",
                relevance: 0
            }, t]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            keywords: "dsconfig",
            contains: [{
                className: "keyword",
                begin: "^dsconfig",
                end: "\\s",
                excludeEnd: !0,
                relevance: 10
            }, {
                className: "built_in",
                begin: "(list|create|get|set|delete)-(\\w+)",
                end: "\\s",
                excludeEnd: !0,
                illegal: "!@#$%^&*()",
                relevance: 10
            }, {
                className: "built_in",
                begin: "--(\\w+)",
                end: "\\s",
                excludeEnd: !0
            }, {
                className: "string",
                begin: /"/,
                end: /"/
            }, {
                className: "string",
                begin: /'/,
                end: /'/
            }, {
                className: "string",
                begin: "[\\w-?]+:\\w+",
                end: "\\W",
                relevance: 0
            }, {
                className: "string",
                begin: "\\w+-?\\w+",
                end: "\\W",
                relevance: 0
            }, e.HASH_COMMENT_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "string",
            variants: [e.inherit(e.QUOTE_STRING_MODE, {
                begin: '((u8?|U)|L)?"'
            }), {
                begin: '(u8?|U)?R"',
                end: '"',
                contains: [e.BACKSLASH_ESCAPE]
            }, {
                begin: "'\\\\?.",
                end: "'",
                illegal: "."
            }]
        }
          , n = {
            className: "number",
            variants: [{
                begin: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
            }, {
                begin: e.C_NUMBER_RE
            }],
            relevance: 0
        }
          , r = {
            className: "meta",
            begin: "#",
            end: "$",
            keywords: {
                "meta-keyword": "if else elif endif define undef ifdef ifndef"
            },
            contains: [{
                begin: /\\\n/,
                relevance: 0
            }, {
                beginKeywords: "include",
                end: "$",
                keywords: {
                    "meta-keyword": "include"
                },
                contains: [e.inherit(t, {
                    className: "meta-string"
                }), {
                    className: "meta-string",
                    begin: "<",
                    end: ">",
                    illegal: "\\n"
                }]
            }, t, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }
          , a = {
            className: "variable",
            begin: "\\&[a-z\\d_]*\\b"
        }
          , i = {
            className: "meta-keyword",
            begin: "/[a-z][a-z\\d-]*/"
        }
          , s = {
            className: "symbol",
            begin: "^\\s*[a-zA-Z_][a-zA-Z\\d_]*:"
        }
          , o = {
            className: "params",
            begin: "<",
            end: ">",
            contains: [n, a]
        }
          , l = {
            className: "class",
            begin: /[a-zA-Z_][a-zA-Z\d_@]*\s{/,
            end: /[{;=]/,
            returnBegin: !0,
            excludeEnd: !0
        };
        return {
            keywords: "",
            contains: [{
                className: "class",
                begin: "/\\s*{",
                end: "};",
                relevance: 10,
                contains: [a, i, s, l, o, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, n, t]
            }, a, i, s, l, o, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, n, t, r, {
                begin: e.IDENT_RE + "::",
                keywords: ""
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["dst"],
            case_insensitive: !0,
            subLanguage: "xml",
            contains: [{
                className: "template-tag",
                begin: /\{[#\/]/,
                end: /\}/,
                illegal: /;/,
                contains: [{
                    className: "name",
                    begin: /[a-zA-Z\.-]+/,
                    starts: {
                        endsWithParent: !0,
                        relevance: 0,
                        contains: [e.QUOTE_STRING_MODE]
                    }
                }]
            }, {
                className: "template-variable",
                begin: /\{/,
                end: /\}/,
                illegal: /;/,
                keywords: "if eq ne lt lte gt gte select default math sep"
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = e.COMMENT(/\(\*/, /\*\)/);
        return {
            illegal: /\S/,
            contains: [t, {
                className: "attribute",
                begin: /^[ ]*[a-zA-Z][a-zA-Z-]*([\s-]+[a-zA-Z][a-zA-Z]*)*/
            }, {
                begin: /=/,
                end: /;/,
                contains: [t, {
                    className: "meta",
                    begin: /\?.*\?/
                }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?"
          , n = "and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote"
          , r = {
            className: "subst",
            begin: "#\\{",
            end: "}",
            lexemes: t,
            keywords: n
        }
          , a = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE, r],
            variants: [{
                begin: /'/,
                end: /'/
            }, {
                begin: /"/,
                end: /"/
            }]
        }
          , i = {
            className: "function",
            beginKeywords: "def defp defmacro",
            end: /\B\b/,
            contains: [e.inherit(e.TITLE_MODE, {
                begin: t,
                endsParent: !0
            })]
        }
          , s = e.inherit(i, {
            className: "class",
            beginKeywords: "defimpl defmodule defprotocol defrecord",
            end: /\bdo\b|$|;/
        })
          , o = [a, e.HASH_COMMENT_MODE, s, i, {
            className: "symbol",
            begin: ":(?!\\s)",
            contains: [a, {
                begin: "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"
            }],
            relevance: 0
        }, {
            className: "symbol",
            begin: t + ":",
            relevance: 0
        }, {
            className: "number",
            begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
            relevance: 0
        }, {
            className: "variable",
            begin: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
        }, {
            begin: "->"
        }, {
            begin: "(" + e.RE_STARTERS_RE + ")\\s*",
            contains: [e.HASH_COMMENT_MODE, {
                className: "regexp",
                illegal: "\\n",
                contains: [e.BACKSLASH_ESCAPE, r],
                variants: [{
                    begin: "/",
                    end: "/[a-z]*"
                }, {
                    begin: "%r\\[",
                    end: "\\][a-z]*"
                }]
            }],
            relevance: 0
        }];
        return r.contains = o,
        {
            lexemes: t,
            keywords: n,
            contains: o
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            variants: [e.COMMENT("--", "$"), e.COMMENT("{-", "-}", {
                contains: ["self"]
            })]
        }
          , n = {
            className: "type",
            begin: "\\b[A-Z][\\w']*",
            relevance: 0
        }
          , r = {
            begin: "\\(",
            end: "\\)",
            illegal: '"',
            contains: [{
                className: "type",
                begin: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"
            }, t]
        };
        return {
            keywords: "let in if then else case of where module import exposing type alias as infix infixl infixr port effect command subscription",
            contains: [{
                beginKeywords: "port effect module",
                end: "exposing",
                keywords: "port effect module where command subscription exposing",
                contains: [r, t],
                illegal: "\\W\\.|;"
            }, {
                begin: "import",
                end: "$",
                keywords: "import as exposing",
                contains: [r, t],
                illegal: "\\W\\.|;"
            }, {
                begin: "type",
                end: "$",
                keywords: "type alias",
                contains: [n, r, {
                    begin: "{",
                    end: "}",
                    contains: r.contains
                }, t]
            }, {
                beginKeywords: "infix infixl infixr",
                end: "$",
                contains: [e.C_NUMBER_MODE, t]
            }, {
                begin: "port",
                end: "$",
                keywords: "port",
                contains: [t]
            }, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, n, e.inherit(e.TITLE_MODE, {
                begin: "^[_a-z][\\w']*"
            }), t, {
                begin: "->|<-"
            }],
            illegal: /;/
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            subLanguage: "xml",
            contains: [e.COMMENT("<%#", "%>"), {
                begin: "<%[%=-]?",
                end: "[%-]?%>",
                subLanguage: "ruby",
                excludeBegin: !0,
                excludeEnd: !0
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            keywords: {
                built_in: "spawn spawn_link self",
                keyword: "after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor"
            },
            contains: [{
                className: "meta",
                begin: "^[0-9]+> ",
                relevance: 10
            }, e.COMMENT("%", "$"), {
                className: "number",
                begin: "\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",
                relevance: 0
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                begin: "\\?(::)?([A-Z]\\w*(::)?)+"
            }, {
                begin: "->"
            }, {
                begin: "ok"
            }, {
                begin: "!"
            }, {
                begin: "(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",
                relevance: 0
            }, {
                begin: "[A-Z][a-zA-Z0-9_']*",
                relevance: 0
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "[a-z'][a-zA-Z0-9_']*"
          , n = "(" + t + ":" + t + "|" + t + ")"
          , r = {
            keyword: "after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",
            literal: "false true"
        }
          , a = e.COMMENT("%", "$")
          , i = {
            className: "number",
            begin: "\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",
            relevance: 0
        }
          , s = {
            begin: "fun\\s+" + t + "/\\d+"
        }
          , o = {
            begin: n + "\\(",
            end: "\\)",
            returnBegin: !0,
            relevance: 0,
            contains: [{
                begin: n,
                relevance: 0
            }, {
                begin: "\\(",
                end: "\\)",
                endsWithParent: !0,
                returnEnd: !0,
                relevance: 0
            }]
        }
          , l = {
            begin: "{",
            end: "}",
            relevance: 0
        }
          , c = {
            begin: "\\b_([A-Z][A-Za-z0-9_]*)?",
            relevance: 0
        }
          , d = {
            begin: "[A-Z][a-zA-Z0-9_]*",
            relevance: 0
        }
          , u = {
            begin: "#" + e.UNDERSCORE_IDENT_RE,
            relevance: 0,
            returnBegin: !0,
            contains: [{
                begin: "#" + e.UNDERSCORE_IDENT_RE,
                relevance: 0
            }, {
                begin: "{",
                end: "}",
                relevance: 0
            }]
        }
          , p = {
            beginKeywords: "fun receive if try case",
            end: "end",
            keywords: r
        };
        p.contains = [a, s, e.inherit(e.APOS_STRING_MODE, {
            className: ""
        }), p, o, e.QUOTE_STRING_MODE, i, l, c, d, u];
        var m = [a, s, p, o, e.QUOTE_STRING_MODE, i, l, c, d, u];
        o.contains[1].contains = m,
        l.contains = m,
        u.contains[1].contains = m;
        var g = {
            className: "params",
            begin: "\\(",
            end: "\\)",
            contains: m
        };
        return {
            aliases: ["erl"],
            keywords: r,
            illegal: "(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",
            contains: [{
                className: "function",
                begin: "^" + t + "\\s*\\(",
                end: "->",
                returnBegin: !0,
                illegal: "\\(|#|//|/\\*|\\\\|:|;",
                contains: [g, e.inherit(e.TITLE_MODE, {
                    begin: t
                })],
                starts: {
                    end: ";|\\.",
                    keywords: r,
                    contains: m
                }
            }, a, {
                begin: "^-",
                end: "\\.",
                relevance: 0,
                excludeEnd: !0,
                returnBegin: !0,
                lexemes: "-" + e.IDENT_RE,
                keywords: "-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn -import -include -include_lib -compile -define -else -endif -file -behaviour -behavior -spec",
                contains: [g]
            }, i, e.QUOTE_STRING_MODE, u, c, d, l, {
                begin: /\.$/
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["xlsx", "xls"],
            case_insensitive: !0,
            lexemes: /[a-zA-Z][\w\.]*/,
            keywords: {
                built_in: "ABS ACCRINT ACCRINTM ACOS ACOSH ACOT ACOTH AGGREGATE ADDRESS AMORDEGRC AMORLINC AND ARABIC AREAS ASC ASIN ASINH ATAN ATAN2 ATANH AVEDEV AVERAGE AVERAGEA AVERAGEIF AVERAGEIFS BAHTTEXT BASE BESSELI BESSELJ BESSELK BESSELY BETADIST BETA.DIST BETAINV BETA.INV BIN2DEC BIN2HEX BIN2OCT BINOMDIST BINOM.DIST BINOM.DIST.RANGE BINOM.INV BITAND BITLSHIFT BITOR BITRSHIFT BITXOR CALL CEILING CEILING.MATH CEILING.PRECISE CELL CHAR CHIDIST CHIINV CHITEST CHISQ.DIST CHISQ.DIST.RT CHISQ.INV CHISQ.INV.RT CHISQ.TEST CHOOSE CLEAN CODE COLUMN COLUMNS COMBIN COMBINA COMPLEX CONCAT CONCATENATE CONFIDENCE CONFIDENCE.NORM CONFIDENCE.T CONVERT CORREL COS COSH COT COTH COUNT COUNTA COUNTBLANK COUNTIF COUNTIFS COUPDAYBS COUPDAYS COUPDAYSNC COUPNCD COUPNUM COUPPCD COVAR COVARIANCE.P COVARIANCE.S CRITBINOM CSC CSCH CUBEKPIMEMBER CUBEMEMBER CUBEMEMBERPROPERTY CUBERANKEDMEMBER CUBESET CUBESETCOUNT CUBEVALUE CUMIPMT CUMPRINC DATE DATEDIF DATEVALUE DAVERAGE DAY DAYS DAYS360 DB DBCS DCOUNT DCOUNTA DDB DEC2BIN DEC2HEX DEC2OCT DECIMAL DEGREES DELTA DEVSQ DGET DISC DMAX DMIN DOLLAR DOLLARDE DOLLARFR DPRODUCT DSTDEV DSTDEVP DSUM DURATION DVAR DVARP EDATE EFFECT ENCODEURL EOMONTH ERF ERF.PRECISE ERFC ERFC.PRECISE ERROR.TYPE EUROCONVERT EVEN EXACT EXP EXPON.DIST EXPONDIST FACT FACTDOUBLE FALSE|0 F.DIST FDIST F.DIST.RT FILTERXML FIND FINDB F.INV F.INV.RT FINV FISHER FISHERINV FIXED FLOOR FLOOR.MATH FLOOR.PRECISE FORECAST FORECAST.ETS FORECAST.ETS.CONFINT FORECAST.ETS.SEASONALITY FORECAST.ETS.STAT FORECAST.LINEAR FORMULATEXT FREQUENCY F.TEST FTEST FV FVSCHEDULE GAMMA GAMMA.DIST GAMMADIST GAMMA.INV GAMMAINV GAMMALN GAMMALN.PRECISE GAUSS GCD GEOMEAN GESTEP GETPIVOTDATA GROWTH HARMEAN HEX2BIN HEX2DEC HEX2OCT HLOOKUP HOUR HYPERLINK HYPGEOM.DIST HYPGEOMDIST IF|0 IFERROR IFNA IFS IMABS IMAGINARY IMARGUMENT IMCONJUGATE IMCOS IMCOSH IMCOT IMCSC IMCSCH IMDIV IMEXP IMLN IMLOG10 IMLOG2 IMPOWER IMPRODUCT IMREAL IMSEC IMSECH IMSIN IMSINH IMSQRT IMSUB IMSUM IMTAN INDEX INDIRECT INFO INT INTERCEPT INTRATE IPMT IRR ISBLANK ISERR ISERROR ISEVEN ISFORMULA ISLOGICAL ISNA ISNONTEXT ISNUMBER ISODD ISREF ISTEXT ISO.CEILING ISOWEEKNUM ISPMT JIS KURT LARGE LCM LEFT LEFTB LEN LENB LINEST LN LOG LOG10 LOGEST LOGINV LOGNORM.DIST LOGNORMDIST LOGNORM.INV LOOKUP LOWER MATCH MAX MAXA MAXIFS MDETERM MDURATION MEDIAN MID MIDBs MIN MINIFS MINA MINUTE MINVERSE MIRR MMULT MOD MODE MODE.MULT MODE.SNGL MONTH MROUND MULTINOMIAL MUNIT N NA NEGBINOM.DIST NEGBINOMDIST NETWORKDAYS NETWORKDAYS.INTL NOMINAL NORM.DIST NORMDIST NORMINV NORM.INV NORM.S.DIST NORMSDIST NORM.S.INV NORMSINV NOT NOW NPER NPV NUMBERVALUE OCT2BIN OCT2DEC OCT2HEX ODD ODDFPRICE ODDFYIELD ODDLPRICE ODDLYIELD OFFSET OR PDURATION PEARSON PERCENTILE.EXC PERCENTILE.INC PERCENTILE PERCENTRANK.EXC PERCENTRANK.INC PERCENTRANK PERMUT PERMUTATIONA PHI PHONETIC PI PMT POISSON.DIST POISSON POWER PPMT PRICE PRICEDISC PRICEMAT PROB PRODUCT PROPER PV QUARTILE QUARTILE.EXC QUARTILE.INC QUOTIENT RADIANS RAND RANDBETWEEN RANK.AVG RANK.EQ RANK RATE RECEIVED REGISTER.ID REPLACE REPLACEB REPT RIGHT RIGHTB ROMAN ROUND ROUNDDOWN ROUNDUP ROW ROWS RRI RSQ RTD SEARCH SEARCHB SEC SECH SECOND SERIESSUM SHEET SHEETS SIGN SIN SINH SKEW SKEW.P SLN SLOPE SMALL SQL.REQUEST SQRT SQRTPI STANDARDIZE STDEV STDEV.P STDEV.S STDEVA STDEVP STDEVPA STEYX SUBSTITUTE SUBTOTAL SUM SUMIF SUMIFS SUMPRODUCT SUMSQ SUMX2MY2 SUMX2PY2 SUMXMY2 SWITCH SYD T TAN TANH TBILLEQ TBILLPRICE TBILLYIELD T.DIST T.DIST.2T T.DIST.RT TDIST TEXT TEXTJOIN TIME TIMEVALUE T.INV T.INV.2T TINV TODAY TRANSPOSE TREND TRIM TRIMMEAN TRUE|0 TRUNC T.TEST TTEST TYPE UNICHAR UNICODE UPPER VALUE VAR VAR.P VAR.S VARA VARP VARPA VDB VLOOKUP WEBSERVICE WEEKDAY WEEKNUM WEIBULL WEIBULL.DIST WORKDAY WORKDAY.INTL XIRR XNPV XOR YEAR YEARFRAC YIELD YIELDDISC YIELDMAT Z.TEST ZTEST"
            },
            contains: [{
                begin: /^=/,
                end: /[^=]/,
                returnEnd: !0,
                illegal: /=/,
                relevance: 10
            }, {
                className: "symbol",
                begin: /\b[A-Z]{1,2}\d+\b/,
                end: /[^\d]/,
                excludeEnd: !0,
                relevance: 0
            }, {
                className: "symbol",
                begin: /[A-Z]{0,2}\d*:[A-Z]{0,2}\d*/,
                relevance: 0
            }, e.BACKSLASH_ESCAPE, e.QUOTE_STRING_MODE, {
                className: "number",
                begin: e.NUMBER_RE + "(%)?",
                relevance: 0
            }, e.COMMENT(/\bN\(/, /\)/, {
                excludeBegin: !0,
                excludeEnd: !0,
                illegal: /\n/
            })]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            contains: [{
                begin: /[^\u2401\u0001]+/,
                end: /[\u2401\u0001]/,
                excludeEnd: !0,
                returnBegin: !0,
                returnEnd: !1,
                contains: [{
                    begin: /([^\u2401\u0001=]+)/,
                    end: /=([^\u2401\u0001=]+)/,
                    returnEnd: !0,
                    returnBegin: !1,
                    className: "attr"
                }, {
                    begin: /=/,
                    end: /([\u2401\u0001])/,
                    excludeEnd: !0,
                    excludeBegin: !0,
                    className: "string"
                }]
            }],
            case_insensitive: !0
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "string",
            begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
        }
          , n = {
            className: "string",
            variants: [{
                begin: '"',
                end: '"'
            }]
        }
          , r = {
            className: "title",
            begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/
        }
          , a = {
            className: "function",
            beginKeywords: "def",
            end: /[:={\[(\n;]/,
            excludeEnd: !0,
            contains: [r]
        };
        return {
            keywords: {
                literal: "true false",
                keyword: "case class def else enum if impl import in lat rel index let match namespace switch type yield with"
            },
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, t, n, a, e.C_NUMBER_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "params",
            begin: "\\(",
            end: "\\)"
        };
        return {
            case_insensitive: !0,
            aliases: ["f90", "f95"],
            keywords: {
                literal: ".False. .True.",
                keyword: "kind do while private call intrinsic where elsewhere type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. goto save else use module select case access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit continue format pause cycle exit c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg synchronous nopass non_overridable pass protected volatile abstract extends import non_intrinsic value deferred generic final enumerator class associate bind enum c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure integer real character complex logical dimension allocatable|10 parameter external implicit|10 none double precision assign intent optional pointer target in out common equivalence data",
                built_in: "alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_ofacosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr num_images parity popcnt poppar shifta shiftl shiftr this_image"
            },
            illegal: /\/\*/,
            contains: [e.inherit(e.APOS_STRING_MODE, {
                className: "string",
                relevance: 0
            }), e.inherit(e.QUOTE_STRING_MODE, {
                className: "string",
                relevance: 0
            }), {
                className: "function",
                beginKeywords: "subroutine function program",
                illegal: "[${=\\n]",
                contains: [e.UNDERSCORE_TITLE_MODE, t]
            }, e.COMMENT("!", "$", {
                relevance: 0
            }), {
                className: "number",
                begin: "(?=\\b|\\+|\\-|\\.)(?=\\.\\d|\\d)(?:\\d+)?(?:\\.?\\d*)(?:[de][+-]?\\d+)?\\b\\.?",
                relevance: 0
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            begin: "<",
            end: ">",
            contains: [e.inherit(e.TITLE_MODE, {
                begin: /'[a-zA-Z0-9_]+/
            })]
        };
        return {
            aliases: ["fs"],
            keywords: "abstract and as assert base begin class default delegate do done downcast downto elif else end exception extern false finally for fun function global if in inherit inline interface internal lazy let match member module mutable namespace new null of open or override private public rec return sig static struct then to true try type upcast use val void when while with yield",
            illegal: /\/\*/,
            contains: [{
                className: "keyword",
                begin: /\b(yield|return|let|do)!/
            }, {
                className: "string",
                begin: '@"',
                end: '"',
                contains: [{
                    begin: '""'
                }]
            }, {
                className: "string",
                begin: '"""',
                end: '"""'
            }, e.COMMENT("\\(\\*", "\\*\\)"), {
                className: "class",
                beginKeywords: "type",
                end: "\\(|=|$",
                excludeEnd: !0,
                contains: [e.UNDERSCORE_TITLE_MODE, t]
            }, {
                className: "meta",
                begin: "\\[<",
                end: ">\\]",
                relevance: 10
            }, {
                className: "symbol",
                begin: "\\B('[A-Za-z])\\b",
                contains: [e.BACKSLASH_ESCAPE]
            }, e.C_LINE_COMMENT_MODE, e.inherit(e.QUOTE_STRING_MODE, {
                illegal: null
            }), e.C_NUMBER_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            keyword: "abort acronym acronyms alias all and assign binary card diag display else eq file files for free ge gt if integer le loop lt maximizing minimizing model models ne negative no not option options or ord positive prod put putpage puttl repeat sameas semicont semiint smax smin solve sos1 sos2 sum system table then until using while xor yes",
            literal: "eps inf na",
            "built-in": "abs arccos arcsin arctan arctan2 Beta betaReg binomial ceil centropy cos cosh cvPower div div0 eDist entropy errorf execSeed exp fact floor frac gamma gammaReg log logBeta logGamma log10 log2 mapVal max min mod ncpCM ncpF ncpVUpow ncpVUsin normal pi poly power randBinomial randLinear randTriangle round rPower sigmoid sign signPower sin sinh slexp sllog10 slrec sqexp sqlog10 sqr sqrec sqrt tan tanh trunc uniform uniformInt vcPower bool_and bool_eqv bool_imp bool_not bool_or bool_xor ifThen rel_eq rel_ge rel_gt rel_le rel_lt rel_ne gday gdow ghour gleap gmillisec gminute gmonth gsecond gyear jdate jnow jstart jtime errorLevel execError gamsRelease gamsVersion handleCollect handleDelete handleStatus handleSubmit heapFree heapLimit heapSize jobHandle jobKill jobStatus jobTerminate licenseLevel licenseStatus maxExecError sleep timeClose timeComp timeElapsed timeExec timeStart"
        }
          , n = {
            className: "params",
            begin: /\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0
        }
          , r = {
            className: "symbol",
            variants: [{
                begin: /\=[lgenxc]=/
            }, {
                begin: /\$/
            }]
        }
          , a = {
            className: "comment",
            variants: [{
                begin: "'",
                end: "'"
            }, {
                begin: '"',
                end: '"'
            }],
            illegal: "\\n",
            contains: [e.BACKSLASH_ESCAPE]
        }
          , i = {
            begin: "/",
            end: "/",
            keywords: t,
            contains: [a, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, e.C_NUMBER_MODE]
        }
          , s = {
            begin: /[a-z][a-z0-9_]*(\([a-z0-9_, ]*\))?[ \t]+/,
            excludeBegin: !0,
            end: "$",
            endsWithParent: !0,
            contains: [a, i, {
                className: "comment",
                begin: /([ ]*[a-z0-9&#*=?@>\\<:\-,()$\[\]_.{}!+%^]+)+/,
                relevance: 0
            }]
        };
        return {
            aliases: ["gms"],
            case_insensitive: !0,
            keywords: t,
            contains: [e.COMMENT(/^\$ontext/, /^\$offtext/), {
                className: "meta",
                begin: "^\\$[a-z0-9]+",
                end: "$",
                returnBegin: !0,
                contains: [{
                    className: "meta-keyword",
                    begin: "^\\$[a-z0-9]+"
                }]
            }, e.COMMENT("^\\*", "$"), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
                beginKeywords: "set sets parameter parameters variable variables scalar scalars equation equations",
                end: ";",
                contains: [e.COMMENT("^\\*", "$"), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, i, s]
            }, {
                beginKeywords: "table",
                end: ";",
                returnBegin: !0,
                contains: [{
                    beginKeywords: "table",
                    end: "$",
                    contains: [s]
                }, e.COMMENT("^\\*", "$"), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, e.C_NUMBER_MODE]
            }, {
                className: "function",
                begin: /^[a-z][a-z0-9_,\-+' ()$]+\.{2}/,
                returnBegin: !0,
                contains: [{
                    className: "title",
                    begin: /^[a-z0-9_]+/
                }, n, r]
            }, e.C_NUMBER_MODE, r]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            keyword: "and bool break call callexe checkinterrupt clear clearg closeall cls comlog compile continue create debug declare delete disable dlibrary dllcall do dos ed edit else elseif enable end endfor endif endp endo errorlog errorlogat expr external fn for format goto gosub graph if keyword let lib library line load loadarray loadexe loadf loadk loadm loadp loads loadx local locate loopnextindex lprint lpwidth lshow matrix msym ndpclex new not open or output outwidth plot plotsym pop prcsn print printdos proc push retp return rndcon rndmod rndmult rndseed run save saveall screen scroll setarray show sparse stop string struct system trace trap threadfor threadendfor threadbegin threadjoin threadstat threadend until use while winprint",
            built_in: "abs acf aconcat aeye amax amean AmericanBinomCall AmericanBinomCall_Greeks AmericanBinomCall_ImpVol AmericanBinomPut AmericanBinomPut_Greeks AmericanBinomPut_ImpVol AmericanBSCall AmericanBSCall_Greeks AmericanBSCall_ImpVol AmericanBSPut AmericanBSPut_Greeks AmericanBSPut_ImpVol amin amult annotationGetDefaults annotationSetBkd annotationSetFont annotationSetLineColor annotationSetLineStyle annotationSetLineThickness annualTradingDays arccos arcsin areshape arrayalloc arrayindex arrayinit arraytomat asciiload asclabel astd astds asum atan atan2 atranspose axmargin balance band bandchol bandcholsol bandltsol bandrv bandsolpd bar base10 begwind besselj bessely beta box boxcox cdfBeta cdfBetaInv cdfBinomial cdfBinomialInv cdfBvn cdfBvn2 cdfBvn2e cdfCauchy cdfCauchyInv cdfChic cdfChii cdfChinc cdfChincInv cdfExp cdfExpInv cdfFc cdfFnc cdfFncInv cdfGam cdfGenPareto cdfHyperGeo cdfLaplace cdfLaplaceInv cdfLogistic cdfLogisticInv cdfmControlCreate cdfMvn cdfMvn2e cdfMvnce cdfMvne cdfMvt2e cdfMvtce cdfMvte cdfN cdfN2 cdfNc cdfNegBinomial cdfNegBinomialInv cdfNi cdfPoisson cdfPoissonInv cdfRayleigh cdfRayleighInv cdfTc cdfTci cdfTnc cdfTvn cdfWeibull cdfWeibullInv cdir ceil ChangeDir chdir chiBarSquare chol choldn cholsol cholup chrs close code cols colsf combinate combinated complex con cond conj cons ConScore contour conv convertsatostr convertstrtosa corrm corrms corrvc corrx corrxs cos cosh counts countwts crossprd crout croutp csrcol csrlin csvReadM csvReadSA cumprodc cumsumc curve cvtos datacreate datacreatecomplex datalist dataload dataloop dataopen datasave date datestr datestring datestrymd dayinyr dayofweek dbAddDatabase dbClose dbCommit dbCreateQuery dbExecQuery dbGetConnectOptions dbGetDatabaseName dbGetDriverName dbGetDrivers dbGetHostName dbGetLastErrorNum dbGetLastErrorText dbGetNumericalPrecPolicy dbGetPassword dbGetPort dbGetTableHeaders dbGetTables dbGetUserName dbHasFeature dbIsDriverAvailable dbIsOpen dbIsOpenError dbOpen dbQueryBindValue dbQueryClear dbQueryCols dbQueryExecPrepared dbQueryFetchAllM dbQueryFetchAllSA dbQueryFetchOneM dbQueryFetchOneSA dbQueryFinish dbQueryGetBoundValue dbQueryGetBoundValues dbQueryGetField dbQueryGetLastErrorNum dbQueryGetLastErrorText dbQueryGetLastInsertID dbQueryGetLastQuery dbQueryGetPosition dbQueryIsActive dbQueryIsForwardOnly dbQueryIsNull dbQueryIsSelect dbQueryIsValid dbQueryPrepare dbQueryRows dbQuerySeek dbQuerySeekFirst dbQuerySeekLast dbQuerySeekNext dbQuerySeekPrevious dbQuerySetForwardOnly dbRemoveDatabase dbRollback dbSetConnectOptions dbSetDatabaseName dbSetHostName dbSetNumericalPrecPolicy dbSetPort dbSetUserName dbTransaction DeleteFile delif delrows denseToSp denseToSpRE denToZero design det detl dfft dffti diag diagrv digamma doswin DOSWinCloseall DOSWinOpen dotfeq dotfeqmt dotfge dotfgemt dotfgt dotfgtmt dotfle dotflemt dotflt dotfltmt dotfne dotfnemt draw drop dsCreate dstat dstatmt dstatmtControlCreate dtdate dtday dttime dttodtv dttostr dttoutc dtvnormal dtvtodt dtvtoutc dummy dummybr dummydn eig eigh eighv eigv elapsedTradingDays endwind envget eof eqSolve eqSolvemt eqSolvemtControlCreate eqSolvemtOutCreate eqSolveset erf erfc erfccplx erfcplx error etdays ethsec etstr EuropeanBinomCall EuropeanBinomCall_Greeks EuropeanBinomCall_ImpVol EuropeanBinomPut EuropeanBinomPut_Greeks EuropeanBinomPut_ImpVol EuropeanBSCall EuropeanBSCall_Greeks EuropeanBSCall_ImpVol EuropeanBSPut EuropeanBSPut_Greeks EuropeanBSPut_ImpVol exctsmpl exec execbg exp extern eye fcheckerr fclearerr feq feqmt fflush fft ffti fftm fftmi fftn fge fgemt fgets fgetsa fgetsat fgetst fgt fgtmt fileinfo filesa fle flemt floor flt fltmt fmod fne fnemt fonts fopen formatcv formatnv fputs fputst fseek fstrerror ftell ftocv ftos ftostrC gamma gammacplx gammaii gausset gdaAppend gdaCreate gdaDStat gdaDStatMat gdaGetIndex gdaGetName gdaGetNames gdaGetOrders gdaGetType gdaGetTypes gdaGetVarInfo gdaIsCplx gdaLoad gdaPack gdaRead gdaReadByIndex gdaReadSome gdaReadSparse gdaReadStruct gdaReportVarInfo gdaSave gdaUpdate gdaUpdateAndPack gdaVars gdaWrite gdaWrite32 gdaWriteSome getarray getdims getf getGAUSShome getmatrix getmatrix4D getname getnamef getNextTradingDay getNextWeekDay getnr getorders getpath getPreviousTradingDay getPreviousWeekDay getRow getscalar3D getscalar4D getTrRow getwind glm gradcplx gradMT gradMTm gradMTT gradMTTm gradp graphprt graphset hasimag header headermt hess hessMT hessMTg hessMTgw hessMTm hessMTmw hessMTT hessMTTg hessMTTgw hessMTTm hessMTw hessp hist histf histp hsec imag indcv indexcat indices indices2 indicesf indicesfn indnv indsav integrate1d integrateControlCreate intgrat2 intgrat3 inthp1 inthp2 inthp3 inthp4 inthpControlCreate intquad1 intquad2 intquad3 intrleav intrleavsa intrsect intsimp inv invpd invswp iscplx iscplxf isden isinfnanmiss ismiss key keyav keyw lag lag1 lagn lapEighb lapEighi lapEighvb lapEighvi lapgEig lapgEigh lapgEighv lapgEigv lapgSchur lapgSvdcst lapgSvds lapgSvdst lapSvdcusv lapSvds lapSvdusv ldlp ldlsol linSolve listwise ln lncdfbvn lncdfbvn2 lncdfmvn lncdfn lncdfn2 lncdfnc lnfact lngammacplx lnpdfmvn lnpdfmvt lnpdfn lnpdft loadd loadstruct loadwind loess loessmt loessmtControlCreate log loglog logx logy lower lowmat lowmat1 ltrisol lu lusol machEpsilon make makevars makewind margin matalloc matinit mattoarray maxbytes maxc maxindc maxv maxvec mbesselei mbesselei0 mbesselei1 mbesseli mbesseli0 mbesseli1 meanc median mergeby mergevar minc minindc minv miss missex missrv moment momentd movingave movingaveExpwgt movingaveWgt nextindex nextn nextnevn nextwind ntos null null1 numCombinations ols olsmt olsmtControlCreate olsqr olsqr2 olsqrmt ones optn optnevn orth outtyp pacf packedToSp packr parse pause pdfCauchy pdfChi pdfExp pdfGenPareto pdfHyperGeo pdfLaplace pdfLogistic pdfn pdfPoisson pdfRayleigh pdfWeibull pi pinv pinvmt plotAddArrow plotAddBar plotAddBox plotAddHist plotAddHistF plotAddHistP plotAddPolar plotAddScatter plotAddShape plotAddTextbox plotAddTS plotAddXY plotArea plotBar plotBox plotClearLayout plotContour plotCustomLayout plotGetDefaults plotHist plotHistF plotHistP plotLayout plotLogLog plotLogX plotLogY plotOpenWindow plotPolar plotSave plotScatter plotSetAxesPen plotSetBar plotSetBarFill plotSetBarStacked plotSetBkdColor plotSetFill plotSetGrid plotSetLegend plotSetLineColor plotSetLineStyle plotSetLineSymbol plotSetLineThickness plotSetNewWindow plotSetTitle plotSetWhichYAxis plotSetXAxisShow plotSetXLabel plotSetXRange plotSetXTicInterval plotSetXTicLabel plotSetYAxisShow plotSetYLabel plotSetYRange plotSetZAxisShow plotSetZLabel plotSurface plotTS plotXY polar polychar polyeval polygamma polyint polymake polymat polymroot polymult polyroot pqgwin previousindex princomp printfm printfmt prodc psi putarray putf putvals pvCreate pvGetIndex pvGetParNames pvGetParVector pvLength pvList pvPack pvPacki pvPackm pvPackmi pvPacks pvPacksi pvPacksm pvPacksmi pvPutParVector pvTest pvUnpack QNewton QNewtonmt QNewtonmtControlCreate QNewtonmtOutCreate QNewtonSet QProg QProgmt QProgmtInCreate qqr qqre qqrep qr qre qrep qrsol qrtsol qtyr qtyre qtyrep quantile quantiled qyr qyre qyrep qz rank rankindx readr real reclassify reclassifyCuts recode recserar recsercp recserrc rerun rescale reshape rets rev rfft rffti rfftip rfftn rfftnp rfftp rndBernoulli rndBeta rndBinomial rndCauchy rndChiSquare rndCon rndCreateState rndExp rndGamma rndGeo rndGumbel rndHyperGeo rndi rndKMbeta rndKMgam rndKMi rndKMn rndKMnb rndKMp rndKMu rndKMvm rndLaplace rndLCbeta rndLCgam rndLCi rndLCn rndLCnb rndLCp rndLCu rndLCvm rndLogNorm rndMTu rndMVn rndMVt rndn rndnb rndNegBinomial rndp rndPoisson rndRayleigh rndStateSkip rndu rndvm rndWeibull rndWishart rotater round rows rowsf rref sampleData satostrC saved saveStruct savewind scale scale3d scalerr scalinfnanmiss scalmiss schtoc schur searchsourcepath seekr select selif seqa seqm setdif setdifsa setvars setvwrmode setwind shell shiftr sin singleindex sinh sleep solpd sortc sortcc sortd sorthc sorthcc sortind sortindc sortmc sortr sortrc spBiconjGradSol spChol spConjGradSol spCreate spDenseSubmat spDiagRvMat spEigv spEye spLDL spline spLU spNumNZE spOnes spreadSheetReadM spreadSheetReadSA spreadSheetWrite spScale spSubmat spToDense spTrTDense spTScalar spZeros sqpSolve sqpSolveMT sqpSolveMTControlCreate sqpSolveMTlagrangeCreate sqpSolveMToutCreate sqpSolveSet sqrt statements stdc stdsc stocv stof strcombine strindx strlen strput strrindx strsect strsplit strsplitPad strtodt strtof strtofcplx strtriml strtrimr strtrunc strtruncl strtruncpad strtruncr submat subscat substute subvec sumc sumr surface svd svd1 svd2 svdcusv svds svdusv sysstate tab tan tanh tempname threadBegin threadEnd threadEndFor threadFor threadJoin threadStat time timedt timestr timeutc title tkf2eps tkf2ps tocart todaydt toeplitz token topolar trapchk trigamma trimr trunc type typecv typef union unionsa uniqindx uniqindxsa unique uniquesa upmat upmat1 upper utctodt utctodtv utrisol vals varCovMS varCovXS varget vargetl varmall varmares varput varputl vartypef vcm vcms vcx vcxs vec vech vecr vector vget view viewxyz vlist vnamecv volume vput vread vtypecv wait waitc walkindex where window writer xlabel xlsGetSheetCount xlsGetSheetSize xlsGetSheetTypes xlsMakeRange xlsReadM xlsReadSA xlsWrite xlsWriteM xlsWriteSA xpnd xtics xy xyz ylabel ytics zeros zeta zlabel ztics cdfEmpirical dot h5create h5open h5read h5readAttribute h5write h5writeAttribute ldl plotAddErrorBar plotAddSurface plotCDFEmpirical plotSetColormap plotSetContourLabels plotSetLegendFont plotSetTextInterpreter plotSetXTicCount plotSetYTicCount plotSetZLevels powerm strjoin strtrim sylvester",
            literal: "DB_AFTER_LAST_ROW DB_ALL_TABLES DB_BATCH_OPERATIONS DB_BEFORE_FIRST_ROW DB_BLOB DB_EVENT_NOTIFICATIONS DB_FINISH_QUERY DB_HIGH_PRECISION DB_LAST_INSERT_ID DB_LOW_PRECISION_DOUBLE DB_LOW_PRECISION_INT32 DB_LOW_PRECISION_INT64 DB_LOW_PRECISION_NUMBERS DB_MULTIPLE_RESULT_SETS DB_NAMED_PLACEHOLDERS DB_POSITIONAL_PLACEHOLDERS DB_PREPARED_QUERIES DB_QUERY_SIZE DB_SIMPLE_LOCKING DB_SYSTEM_TABLES DB_TABLES DB_TRANSACTIONS DB_UNICODE DB_VIEWS"
        }
          , n = {
            className: "meta",
            begin: "#",
            end: "$",
            keywords: {
                "meta-keyword": "define definecs|10 undef ifdef ifndef iflight ifdllcall ifmac ifos2win ifunix else endif lineson linesoff srcfile srcline"
            },
            contains: [{
                begin: /\\\n/,
                relevance: 0
            }, {
                beginKeywords: "include",
                end: "$",
                keywords: {
                    "meta-keyword": "include"
                },
                contains: [{
                    className: "meta-string",
                    begin: '"',
                    end: '"',
                    illegal: "\\n"
                }]
            }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }
          , r = e.UNDERSCORE_IDENT_RE + "\\s*\\(?"
          , a = [{
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: t,
            relevance: 0,
            contains: [e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }];
        return {
            aliases: ["gss"],
            case_insensitive: !0,
            keywords: t,
            illegal: "(\\{[%#]|[%#]\\})",
            contains: [e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.COMMENT("@", "@"), n, {
                className: "string",
                begin: '"',
                end: '"',
                contains: [e.BACKSLASH_ESCAPE]
            }, {
                className: "function",
                beginKeywords: "proc keyword",
                end: ";",
                excludeEnd: !0,
                keywords: t,
                contains: [{
                    begin: r,
                    returnBegin: !0,
                    contains: [e.UNDERSCORE_TITLE_MODE],
                    relevance: 0
                }, e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, n].concat(a)
            }, {
                className: "function",
                beginKeywords: "fn",
                end: ";",
                excludeEnd: !0,
                keywords: t,
                contains: [{
                    begin: r + e.IDENT_RE + "\\)?\\s*\\=\\s*",
                    returnBegin: !0,
                    contains: [e.UNDERSCORE_TITLE_MODE],
                    relevance: 0
                }, e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE].concat(a)
            }, {
                className: "function",
                begin: "\\bexternal (proc|keyword|fn)\\s+",
                end: ";",
                excludeEnd: !0,
                keywords: t,
                contains: [{
                    begin: r,
                    returnBegin: !0,
                    contains: [e.UNDERSCORE_TITLE_MODE],
                    relevance: 0
                }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            }, {
                className: "function",
                begin: "\\bexternal (matrix|string|array|sparse matrix|struct " + e.IDENT_RE + ")\\s+",
                end: ";",
                excludeEnd: !0,
                keywords: t,
                contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["nc"],
            case_insensitive: !0,
            lexemes: "[A-Z_][A-Z0-9_.]*",
            keywords: "IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT EQ LT GT NE GE LE OR XOR",
            contains: [{
                className: "meta",
                begin: "\\%"
            }, {
                className: "meta",
                begin: "([O])([0-9]+)"
            }].concat([e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.COMMENT(/\(/, /\)/), e.inherit(e.C_NUMBER_MODE, {
                begin: "([-+]?([0-9]*\\.?[0-9]+\\.?))|" + e.C_NUMBER_RE
            }), e.inherit(e.APOS_STRING_MODE, {
                illegal: null
            }), e.inherit(e.QUOTE_STRING_MODE, {
                illegal: null
            }), {
                className: "name",
                begin: "([G])([0-9]+\\.?[0-9]?)"
            }, {
                className: "name",
                begin: "([M])([0-9]+\\.?[0-9]?)"
            }, {
                className: "attr",
                begin: "(VC|VS|#)",
                end: "(\\d+)"
            }, {
                className: "attr",
                begin: "(VZOFX|VZOFY|VZOFZ)"
            }, {
                className: "built_in",
                begin: "(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)",
                end: "([-+]?([0-9]*\\.?[0-9]+\\.?))(\\])"
            }, {
                className: "symbol",
                variants: [{
                    begin: "N",
                    end: "\\d+",
                    illegal: "\\W"
                }]
            }])
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["feature"],
            keywords: "Feature Background Ability Business Need Scenario Scenarios Scenario Outline Scenario Template Examples Given And Then But When",
            contains: [{
                className: "symbol",
                begin: "\\*",
                relevance: 0
            }, {
                className: "meta",
                begin: "@[^@\\s]+"
            }, {
                begin: "\\|",
                end: "\\|\\w*$",
                contains: [{
                    className: "string",
                    begin: "[^|]+"
                }]
            }, {
                className: "variable",
                begin: "<",
                end: ">"
            }, e.HASH_COMMENT_MODE, {
                className: "string",
                begin: '"""',
                end: '"""'
            }, e.QUOTE_STRING_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            keywords: {
                keyword: "break continue discard do else for if return while switch case default attribute binding buffer ccw centroid centroid varying coherent column_major const cw depth_any depth_greater depth_less depth_unchanged early_fragment_tests equal_spacing flat fractional_even_spacing fractional_odd_spacing highp in index inout invariant invocations isolines layout line_strip lines lines_adjacency local_size_x local_size_y local_size_z location lowp max_vertices mediump noperspective offset origin_upper_left out packed patch pixel_center_integer point_mode points precise precision quads r11f_g11f_b10f r16 r16_snorm r16f r16i r16ui r32f r32i r32ui r8 r8_snorm r8i r8ui readonly restrict rg16 rg16_snorm rg16f rg16i rg16ui rg32f rg32i rg32ui rg8 rg8_snorm rg8i rg8ui rgb10_a2 rgb10_a2ui rgba16 rgba16_snorm rgba16f rgba16i rgba16ui rgba32f rgba32i rgba32ui rgba8 rgba8_snorm rgba8i rgba8ui row_major sample shared smooth std140 std430 stream triangle_strip triangles triangles_adjacency uniform varying vertices volatile writeonly",
                type: "atomic_uint bool bvec2 bvec3 bvec4 dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 double dvec2 dvec3 dvec4 float iimage1D iimage1DArray iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBufferiimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray image2DRect image3D imageBuffer imageCube imageCubeArray int isampler1D isampler1DArray isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 mat2 mat2x2 mat2x3 mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 sampler1D sampler1DArray sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow image1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect uimage3D uimageBuffer uimageCube uimageCubeArray uint usampler1D usampler1DArray usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D samplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 vec2 vec3 vec4 void",
                built_in: "gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxComputeAtomicCounterBuffers gl_MaxComputeAtomicCounters gl_MaxComputeImageUniforms gl_MaxComputeTextureImageUnits gl_MaxComputeUniformComponents gl_MaxComputeWorkGroupCount gl_MaxComputeWorkGroupSize gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentInputVectors gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms gl_MaxVertexOutputComponents gl_MaxVertexOutputVectors gl_MaxVertexTextureImageUnits gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffset gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial gl_FrontSecondaryColor gl_GlobalInvocationID gl_InstanceID gl_InvocationID gl_Layer gl_LightModel gl_LightSource gl_LocalInvocationID gl_LocalInvocationIndex gl_ModelViewMatrix gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_Normal gl_NormalMatrix gl_NormalScale gl_NumSamples gl_NumWorkGroups gl_ObjectPlaneQ gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_Point gl_PointCoord gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter gl_TexCoord gl_TextureEnvColor gl_TextureMatrix gl_TextureMatrixInverse gl_TextureMatrixInverseTranspose gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_WorkGroupID gl_WorkGroupSize gl_in gl_out EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin asinh atan atanh atomicAdd atomicAnd atomicCompSwap atomicCounter atomicCounterDecrement atomicCounterIncrement atomicExchange atomicMax atomicMin atomicOr atomicXor barrier bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan greaterThanEqual groupMemoryBarrier imageAtomicAdd imageAtomicAnd imageAtomicCompSwap imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad imageSize imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log log2 matrixCompMult max memoryBarrier memoryBarrierAtomicCounter memoryBarrierBuffer memoryBarrierImage memoryBarrierShared min mix mod modf noise1 noise2 noise3 noise4 normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset textureProjLod textureProjLodOffset textureProjOffset textureQueryLevels textureQueryLod textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow",
                literal: "true false"
            },
            illegal: '"',
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.C_NUMBER_MODE, {
                className: "meta",
                begin: "#",
                end: "$"
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            keyword: "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
            literal: "true false iota nil",
            built_in: "append cap close complex copy imag len make new panic print println real recover delete"
        };
        return {
            aliases: ["golang"],
            keywords: t,
            illegal: "</",
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                className: "string",
                variants: [e.QUOTE_STRING_MODE, {
                    begin: "'",
                    end: "[^\\\\]'"
                }, {
                    begin: "`",
                    end: "`"
                }]
            }, {
                className: "number",
                variants: [{
                    begin: e.C_NUMBER_RE + "[dflsi]",
                    relevance: 1
                }, e.C_NUMBER_MODE]
            }, {
                begin: /:=/
            }, {
                className: "function",
                beginKeywords: "func",
                end: /\s*\{/,
                excludeEnd: !0,
                contains: [e.TITLE_MODE, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    keywords: t,
                    illegal: /["']/
                }]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            keywords: {
                keyword: "println readln print import module function local return let var while for foreach times in case when match with break continue augment augmentation each find filter reduce if then else otherwise try catch finally raise throw orIfNull DynamicObject|10 DynamicVariable struct Observable map set vector list array",
                literal: "true false null"
            },
            contains: [e.HASH_COMMENT_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, {
                className: "meta",
                begin: "@[A-Za-z]+"
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            case_insensitive: !0,
            keywords: {
                keyword: "task project allprojects subprojects artifacts buildscript configurations dependencies repositories sourceSets description delete from into include exclude source classpath destinationDir includes options sourceCompatibility targetCompatibility group flatDir doLast doFirst flatten todir fromdir ant def abstract break case catch continue default do else extends final finally for if implements instanceof native new private protected public return static switch synchronized throw throws transient try volatile while strictfp package import false null super this true antlrtask checkstyle codenarc copy boolean byte char class double float int interface long short void compile runTime file fileTree abs any append asList asWritable call collect compareTo count div dump each eachByte eachFile eachLine every find findAll flatten getAt getErr getIn getOut getText grep immutable inject inspect intersect invokeMethods isCase join leftShift minus multiply newInputStream newOutputStream newPrintWriter newReader newWriter next plus pop power previous print println push putAt read readBytes readLines reverse reverseEach round size sort splitEachLine step subMap times toInteger toList tokenize upto waitForOrKill withPrintWriter withReader withStream withWriter withWriterAppend write writeLine"
            },
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.NUMBER_MODE, e.REGEXP_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            keywords: {
                literal: "true false null",
                keyword: "byte short char int long boolean float double void def as in assert trait super this abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof"
            },
            contains: [e.COMMENT("/\\*\\*", "\\*/", {
                relevance: 0,
                contains: [{
                    begin: /\w+@/,
                    relevance: 0
                }, {
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                }]
            }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                className: "string",
                begin: '"""',
                end: '"""'
            }, {
                className: "string",
                begin: "'''",
                end: "'''"
            }, {
                className: "string",
                begin: "\\$/",
                end: "/\\$",
                relevance: 10
            }, e.APOS_STRING_MODE, {
                className: "regexp",
                begin: /~?\/[^\/\n]+\//,
                contains: [e.BACKSLASH_ESCAPE]
            }, e.QUOTE_STRING_MODE, {
                className: "meta",
                begin: "^#!/usr/bin/env",
                end: "$",
                illegal: "\n"
            }, e.BINARY_NUMBER_MODE, {
                className: "class",
                beginKeywords: "class interface trait enum",
                end: "{",
                illegal: ":",
                contains: [{
                    beginKeywords: "extends implements"
                }, e.UNDERSCORE_TITLE_MODE]
            }, e.C_NUMBER_MODE, {
                className: "meta",
                begin: "@[A-Za-z]+"
            }, {
                className: "string",
                begin: /[^\?]{0}[A-Za-z0-9_$]+ *:/
            }, {
                begin: /\?/,
                end: /\:/
            }, {
                className: "symbol",
                begin: "^\\s*[A-Za-z0-9_$]+:",
                relevance: 0
            }],
            illegal: /#|<\//
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            case_insensitive: !0,
            contains: [{
                className: "meta",
                begin: "^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",
                relevance: 10
            }, e.COMMENT("^\\s*(!=#|=#|-#|/).*$", !1, {
                relevance: 0
            }), {
                begin: "^\\s*(-|=|!=)(?!#)",
                starts: {
                    end: "\\n",
                    subLanguage: "ruby"
                }
            }, {
                className: "tag",
                begin: "^\\s*%",
                contains: [{
                    className: "selector-tag",
                    begin: "\\w+"
                }, {
                    className: "selector-id",
                    begin: "#[\\w-]+"
                }, {
                    className: "selector-class",
                    begin: "\\.[\\w-]+"
                }, {
                    begin: "{\\s*",
                    end: "\\s*}",
                    contains: [{
                        begin: ":\\w+\\s*=>",
                        end: ",\\s+",
                        returnBegin: !0,
                        endsWithParent: !0,
                        contains: [{
                            className: "attr",
                            begin: ":\\w+"
                        }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                            begin: "\\w+",
                            relevance: 0
                        }]
                    }]
                }, {
                    begin: "\\(\\s*",
                    end: "\\s*\\)",
                    excludeEnd: !0,
                    contains: [{
                        begin: "\\w+\\s*=",
                        end: "\\s+",
                        returnBegin: !0,
                        endsWithParent: !0,
                        contains: [{
                            className: "attr",
                            begin: "\\w+",
                            relevance: 0
                        }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                            begin: "\\w+",
                            relevance: 0
                        }]
                    }]
                }]
            }, {
                begin: "^\\s*[=~]\\s*"
            }, {
                begin: "#{",
                starts: {
                    end: "}",
                    subLanguage: "ruby"
                }
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            "builtin-name": "each in with if else unless bindattr action collection debugger log outlet template unbound view yield"
        };
        return {
            aliases: ["hbs", "html.hbs", "html.handlebars"],
            case_insensitive: !0,
            subLanguage: "xml",
            contains: [e.COMMENT("{{!(--)?", "(--)?}}"), {
                className: "template-tag",
                begin: /\{\{[#\/]/,
                end: /\}\}/,
                contains: [{
                    className: "name",
                    begin: /[a-zA-Z\.-]+/,
                    keywords: t,
                    starts: {
                        endsWithParent: !0,
                        relevance: 0,
                        contains: [e.QUOTE_STRING_MODE]
                    }
                }]
            }, {
                className: "template-variable",
                begin: /\{\{/,
                end: /\}\}/,
                keywords: t
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            variants: [e.COMMENT("--", "$"), e.COMMENT("{-", "-}", {
                contains: ["self"]
            })]
        }
          , n = {
            className: "meta",
            begin: "{-#",
            end: "#-}"
        }
          , r = {
            className: "meta",
            begin: "^#",
            end: "$"
        }
          , a = {
            className: "type",
            begin: "\\b[A-Z][\\w']*",
            relevance: 0
        }
          , i = {
            begin: "\\(",
            end: "\\)",
            illegal: '"',
            contains: [n, r, {
                className: "type",
                begin: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"
            }, e.inherit(e.TITLE_MODE, {
                begin: "[_a-z][\\w']*"
            }), t]
        };
        return {
            aliases: ["hs"],
            keywords: "let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",
            contains: [{
                beginKeywords: "module",
                end: "where",
                keywords: "module where",
                contains: [i, t],
                illegal: "\\W\\.|;"
            }, {
                begin: "\\bimport\\b",
                end: "$",
                keywords: "import qualified as hiding",
                contains: [i, t],
                illegal: "\\W\\.|;"
            }, {
                className: "class",
                begin: "^(\\s*)?(class|instance)\\b",
                end: "where",
                keywords: "class family instance where",
                contains: [a, i, t]
            }, {
                className: "class",
                begin: "\\b(data|(new)?type)\\b",
                end: "$",
                keywords: "data family type newtype deriving",
                contains: [n, a, i, {
                    begin: "{",
                    end: "}",
                    contains: i.contains
                }, t]
            }, {
                beginKeywords: "default",
                end: "$",
                contains: [a, i, t]
            }, {
                beginKeywords: "infix infixl infixr",
                end: "$",
                contains: [e.C_NUMBER_MODE, t]
            }, {
                begin: "\\bforeign\\b",
                end: "$",
                keywords: "foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",
                contains: [a, e.QUOTE_STRING_MODE, t]
            }, {
                className: "meta",
                begin: "#!\\/usr\\/bin\\/env runhaskell",
                end: "$"
            }, n, r, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, a, e.inherit(e.TITLE_MODE, {
                begin: "^[_a-z][\\w']*"
            }), t, {
                begin: "->|<-"
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["hx"],
            keywords: {
                keyword: "break case cast catch continue default do dynamic else enum extern for function here if import in inline never new override package private get set public return static super switch this throw trace try typedef untyped using var while Int Float String Bool Dynamic Void Array ",
                built_in: "trace this",
                literal: "true false null _"
            },
            contains: [{
                className: "string",
                begin: "'",
                end: "'",
                contains: [e.BACKSLASH_ESCAPE, {
                    className: "subst",
                    begin: "\\$\\{",
                    end: "\\}"
                }, {
                    className: "subst",
                    begin: "\\$",
                    end: "\\W}"
                }]
            }, e.QUOTE_STRING_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.C_NUMBER_MODE, {
                className: "meta",
                begin: "@:",
                end: "$"
            }, {
                className: "meta",
                begin: "#",
                end: "$",
                keywords: {
                    "meta-keyword": "if else elseif end error"
                }
            }, {
                className: "type",
                begin: ":[ \t]*",
                end: "[^A-Za-z0-9_ \t\\->]",
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0
            }, {
                className: "type",
                begin: ":[ \t]*",
                end: "\\W",
                excludeBegin: !0,
                excludeEnd: !0
            }, {
                className: "type",
                begin: "new *",
                end: "\\W",
                excludeBegin: !0,
                excludeEnd: !0
            }, {
                className: "class",
                beginKeywords: "enum",
                end: "\\{",
                contains: [e.TITLE_MODE]
            }, {
                className: "class",
                beginKeywords: "abstract",
                end: "[\\{$]",
                contains: [{
                    className: "type",
                    begin: "\\(",
                    end: "\\)",
                    excludeBegin: !0,
                    excludeEnd: !0
                }, {
                    className: "type",
                    begin: "from +",
                    end: "\\W",
                    excludeBegin: !0,
                    excludeEnd: !0
                }, {
                    className: "type",
                    begin: "to +",
                    end: "\\W",
                    excludeBegin: !0,
                    excludeEnd: !0
                }, e.TITLE_MODE],
                keywords: {
                    keyword: "abstract from to"
                }
            }, {
                className: "class",
                begin: "\\b(class|interface) +",
                end: "[\\{$]",
                excludeEnd: !0,
                keywords: "class interface",
                contains: [{
                    className: "keyword",
                    begin: "\\b(extends|implements) +",
                    keywords: "extends implements",
                    contains: [{
                        className: "type",
                        begin: e.IDENT_RE,
                        relevance: 0
                    }]
                }, e.TITLE_MODE]
            }, {
                className: "function",
                beginKeywords: "function",
                end: "\\(",
                excludeEnd: !0,
                illegal: "\\S",
                contains: [e.TITLE_MODE]
            }],
            illegal: /<\//
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            case_insensitive: !0,
            lexemes: /[\w\._]+/,
            keywords: "goto gosub return break repeat loop continue wait await dim sdim foreach dimtype dup dupptr end stop newmod delmod mref run exgoto on mcall assert logmes newlab resume yield onexit onerror onkey onclick oncmd exist delete mkdir chdir dirlist bload bsave bcopy memfile if else poke wpoke lpoke getstr chdpm memexpand memcpy memset notesel noteadd notedel noteload notesave randomize noteunsel noteget split strrep setease button chgdisp exec dialog mmload mmplay mmstop mci pset pget syscolor mes print title pos circle cls font sysfont objsize picload color palcolor palette redraw width gsel gcopy gzoom gmode bmpsave hsvcolor getkey listbox chkbox combox input mesbox buffer screen bgscr mouse objsel groll line clrobj boxf objprm objmode stick grect grotate gsquare gradf objimage objskip objenable celload celdiv celput newcom querycom delcom cnvstow comres axobj winobj sendmsg comevent comevarg sarrayconv callfunc cnvwtos comevdisp libptr system hspstat hspver stat cnt err strsize looplev sublev iparam wparam lparam refstr refdval int rnd strlen length length2 length3 length4 vartype gettime peek wpeek lpeek varptr varuse noteinfo instr abs limit getease str strmid strf getpath strtrim sin cos tan atan sqrt double absf expf logf limitf powf geteasef mousex mousey mousew hwnd hinstance hdc ginfo objinfo dirinfo sysinfo thismod __hspver__ __hsp30__ __date__ __time__ __line__ __file__ _debug __hspdef__ and or xor not screen_normal screen_palette screen_hide screen_fixedsize screen_tool screen_frame gmode_gdi gmode_mem gmode_rgb0 gmode_alpha gmode_rgb0alpha gmode_add gmode_sub gmode_pixela ginfo_mx ginfo_my ginfo_act ginfo_sel ginfo_wx1 ginfo_wy1 ginfo_wx2 ginfo_wy2 ginfo_vx ginfo_vy ginfo_sizex ginfo_sizey ginfo_winx ginfo_winy ginfo_mesx ginfo_mesy ginfo_r ginfo_g ginfo_b ginfo_paluse ginfo_dispx ginfo_dispy ginfo_cx ginfo_cy ginfo_intid ginfo_newid ginfo_sx ginfo_sy objinfo_mode objinfo_bmscr objinfo_hwnd notemax notesize dir_cur dir_exe dir_win dir_sys dir_cmdline dir_desktop dir_mydoc dir_tv font_normal font_bold font_italic font_underline font_strikeout font_antialias objmode_normal objmode_guifont objmode_usefont gsquare_grad msgothic msmincho do until while wend for next _break _continue switch case default swbreak swend ddim ldim alloc m_pi rad2deg deg2rad ease_linear ease_quad_in ease_quad_out ease_quad_inout ease_cubic_in ease_cubic_out ease_cubic_inout ease_quartic_in ease_quartic_out ease_quartic_inout ease_bounce_in ease_bounce_out ease_bounce_inout ease_shake_in ease_shake_out ease_shake_inout ease_loop",
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
                className: "string",
                begin: '{"',
                end: '"}',
                contains: [e.BACKSLASH_ESCAPE]
            }, e.COMMENT(";", "$", {
                relevance: 0
            }), {
                className: "meta",
                begin: "#",
                end: "$",
                keywords: {
                    "meta-keyword": "addion cfunc cmd cmpopt comfunc const defcfunc deffunc define else endif enum epack func global if ifdef ifndef include modcfunc modfunc modinit modterm module pack packopt regcmd runtime undef usecom uselib"
                },
                contains: [e.inherit(e.QUOTE_STRING_MODE, {
                    className: "meta-string"
                }), e.NUMBER_MODE, e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            }, {
                className: "symbol",
                begin: "^\\*(\\w+|@)"
            }, e.NUMBER_MODE, e.C_NUMBER_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "action collection component concat debugger each each-in else get hash if input link-to loc log mut outlet partial query-params render textarea unbound unless with yield view"
          , n = {
            illegal: /\}\}/,
            begin: /[a-zA-Z0-9_]+=/,
            returnBegin: !0,
            relevance: 0,
            contains: [{
                className: "attr",
                begin: /[a-zA-Z0-9_]+/
            }]
        }
          , r = (e.QUOTE_STRING_MODE,
        {
            endsWithParent: !0,
            relevance: 0,
            keywords: {
                keyword: "as",
                built_in: t
            },
            contains: [e.QUOTE_STRING_MODE, n, e.NUMBER_MODE]
        });
        return {
            case_insensitive: !0,
            subLanguage: "xml",
            contains: [e.COMMENT("{{!(--)?", "(--)?}}"), {
                className: "template-tag",
                begin: /\{\{[#\/]/,
                end: /\}\}/,
                contains: [{
                    className: "name",
                    begin: /[a-zA-Z\.\-]+/,
                    keywords: {
                        "builtin-name": t
                    },
                    starts: r
                }]
            }, {
                className: "template-variable",
                begin: /\{\{[a-zA-Z][a-zA-Z\-]+/,
                end: /\}\}/,
                keywords: {
                    keyword: "as",
                    built_in: t
                },
                contains: [e.QUOTE_STRING_MODE]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "HTTP/[0-9\\.]+";
        return {
            aliases: ["https"],
            illegal: "\\S",
            contains: [{
                begin: "^" + t,
                end: "$",
                contains: [{
                    className: "number",
                    begin: "\\b\\d{3}\\b"
                }]
            }, {
                begin: "^[A-Z]+ (.*?) " + t + "$",
                returnBegin: !0,
                end: "$",
                contains: [{
                    className: "string",
                    begin: " ",
                    end: " ",
                    excludeBegin: !0,
                    excludeEnd: !0
                }, {
                    begin: t
                }, {
                    className: "keyword",
                    begin: "[A-Z]+"
                }]
            }, {
                className: "attribute",
                begin: "^\\w",
                end: ": ",
                excludeEnd: !0,
                illegal: "\\n|\\s|=",
                starts: {
                    end: "$",
                    relevance: 0
                }
            }, {
                begin: "\\n\\n",
                starts: {
                    subLanguage: [],
                    endsWithParent: !0
                }
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            "builtin-name": "!= % %= & &= * ** **= *= *map + += , --build-class-- --import-- -= . / // //= /= < << <<= <= = > >= >> >>= @ @= ^ ^= abs accumulate all and any ap-compose ap-dotimes ap-each ap-each-while ap-filter ap-first ap-if ap-last ap-map ap-map-when ap-pipe ap-reduce ap-reject apply as-> ascii assert assoc bin break butlast callable calling-module-name car case cdr chain chr coll? combinations compile compress cond cons cons? continue count curry cut cycle dec def default-method defclass defmacro defmacro-alias defmacro/g! defmain defmethod defmulti defn defn-alias defnc defnr defreader defseq del delattr delete-route dict-comp dir disassemble dispatch-reader-macro distinct divmod do doto drop drop-last drop-while empty? end-sequence eval eval-and-compile eval-when-compile even? every? except exec filter first flatten float? fn fnc fnr for for* format fraction genexpr gensym get getattr global globals group-by hasattr hash hex id identity if if* if-not if-python2 import in inc input instance? integer integer-char? integer? interleave interpose is is-coll is-cons is-empty is-even is-every is-float is-instance is-integer is-integer-char is-iterable is-iterator is-keyword is-neg is-none is-not is-numeric is-odd is-pos is-string is-symbol is-zero isinstance islice issubclass iter iterable? iterate iterator? keyword keyword? lambda last len let lif lif-not list* list-comp locals loop macro-error macroexpand macroexpand-1 macroexpand-all map max merge-with method-decorator min multi-decorator multicombinations name neg? next none? nonlocal not not-in not? nth numeric? oct odd? open or ord partition permutations pos? post-route postwalk pow prewalk print product profile/calls profile/cpu put-route quasiquote quote raise range read read-str recursive-replace reduce remove repeat repeatedly repr require rest round route route-with-methods rwm second seq set-comp setattr setv some sorted string string? sum switch symbol? take take-nth take-while tee try unless unquote unquote-splicing vars walk when while with with* with-decorator with-gensyms xi xor yield yield-from zero? zip zip-longest | |= ~"
        }
          , n = "[a-zA-Z_\\-!.?+*=<>&#'][a-zA-Z_\\-!.?+*=<>&#'0-9/;:]*"
          , r = {
            className: "meta",
            begin: "^#!",
            end: "$"
        }
          , a = {
            begin: n,
            relevance: 0
        }
          , i = {
            className: "number",
            begin: "[-+]?\\d+(\\.\\d+)?",
            relevance: 0
        }
          , s = e.inherit(e.QUOTE_STRING_MODE, {
            illegal: null
        })
          , o = e.COMMENT(";", "$", {
            relevance: 0
        })
          , l = {
            className: "literal",
            begin: /\b([Tt]rue|[Ff]alse|nil|None)\b/
        }
          , c = {
            begin: "[\\[\\{]",
            end: "[\\]\\}]"
        }
          , d = {
            className: "comment",
            begin: "\\^" + n
        }
          , u = e.COMMENT("\\^\\{", "\\}")
          , p = {
            className: "symbol",
            begin: "[:]{1,2}" + n
        }
          , m = {
            begin: "\\(",
            end: "\\)"
        }
          , g = {
            endsWithParent: !0,
            relevance: 0
        }
          , _ = {
            keywords: t,
            lexemes: n,
            className: "name",
            begin: n,
            starts: g
        }
          , b = [m, s, d, u, o, p, c, i, l, a];
        return m.contains = [e.COMMENT("comment", ""), _, g],
        g.contains = b,
        c.contains = b,
        {
            aliases: ["hylang"],
            illegal: /\S/,
            contains: [r, m, s, d, u, o, p, c, i, l]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["i7"],
            case_insensitive: !0,
            keywords: {
                keyword: "thing room person man woman animal container supporter backdrop door scenery open closed locked inside gender is are say understand kind of rule"
            },
            contains: [{
                className: "string",
                begin: '"',
                end: '"',
                relevance: 0,
                contains: [{
                    className: "subst",
                    begin: "\\[",
                    end: "\\]"
                }]
            }, {
                className: "section",
                begin: /^(Volume|Book|Part|Chapter|Section|Table)\b/,
                end: "$"
            }, {
                begin: /^(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)\b/,
                end: ":",
                contains: [{
                    begin: "\\(This",
                    end: "\\)"
                }]
            }, {
                className: "comment",
                begin: "\\[",
                end: "\\]",
                contains: ["self"]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE],
            variants: [{
                begin: "'''",
                end: "'''",
                relevance: 10
            }, {
                begin: '"""',
                end: '"""',
                relevance: 10
            }, {
                begin: '"',
                end: '"'
            }, {
                begin: "'",
                end: "'"
            }]
        };
        return {
            aliases: ["toml"],
            case_insensitive: !0,
            illegal: /\S/,
            contains: [e.COMMENT(";", "$"), e.HASH_COMMENT_MODE, {
                className: "section",
                begin: /^\s*\[+/,
                end: /\]+/
            }, {
                begin: /^[a-z0-9\[\]_-]+\s*=\s*/,
                end: "$",
                returnBegin: !0,
                contains: [{
                    className: "attr",
                    begin: /[a-z0-9\[\]_-]+/
                }, {
                    begin: /=/,
                    endsWithParent: !0,
                    relevance: 0,
                    contains: [{
                        className: "literal",
                        begin: /\bon|off|true|false|yes|no\b/
                    }, {
                        className: "variable",
                        variants: [{
                            begin: /\$[\w\d"][\w\d_]*/
                        }, {
                            begin: /\$\{(.*?)}/
                        }]
                    }, t, {
                        className: "number",
                        begin: /([\+\-]+)?[\d]+_[\d_]+/
                    }, e.NUMBER_MODE]
                }]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "params",
            begin: "\\(",
            end: "\\)"
        };
        return {
            case_insensitive: !0,
            keywords: {
                literal: ".False. .True.",
                keyword: "kind do while private call intrinsic where elsewhere type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. goto save else use module select case access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit continue format pause cycle exit c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg synchronous nopass non_overridable pass protected volatile abstract extends import non_intrinsic value deferred generic final enumerator class associate bind enum c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure integer real character complex logical dimension allocatable|10 parameter external implicit|10 none double precision assign intent optional pointer target in out common equivalence data begin_provider &begin_provider end_provider begin_shell end_shell begin_template end_template subst assert touch soft_touch provide no_dep free irp_if irp_else irp_endif irp_write irp_read",
                built_in: "alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_ofacosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr num_images parity popcnt poppar shifta shiftl shiftr this_image IRP_ALIGN irp_here"
            },
            illegal: /\/\*/,
            contains: [e.inherit(e.APOS_STRING_MODE, {
                className: "string",
                relevance: 0
            }), e.inherit(e.QUOTE_STRING_MODE, {
                className: "string",
                relevance: 0
            }), {
                className: "function",
                beginKeywords: "subroutine function program",
                illegal: "[${=\\n]",
                contains: [e.UNDERSCORE_TITLE_MODE, t]
            }, e.COMMENT("!", "$", {
                relevance: 0
            }), e.COMMENT("begin_doc", "end_doc", {
                relevance: 10
            }), {
                className: "number",
                begin: "(?=\\b|\\+|\\-|\\.)(?=\\.\\d|\\d)(?:\\d+)?(?:\\.?\\d*)(?:[de][+-]?\\d+)?\\b\\.?",
                relevance: 0
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do"
          , n = {
            className: "number",
            begin: "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
            relevance: 0
        };
        return {
            aliases: ["jsp"],
            keywords: t,
            illegal: /<\/|#/,
            contains: [e.COMMENT("/\\*\\*", "\\*/", {
                relevance: 0,
                contains: [{
                    begin: /\w+@/,
                    relevance: 0
                }, {
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                }]
            }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                className: "class",
                beginKeywords: "class interface",
                end: /[{;=]/,
                excludeEnd: !0,
                keywords: "class interface",
                illegal: /[:"\[\]]/,
                contains: [{
                    beginKeywords: "extends implements"
                }, e.UNDERSCORE_TITLE_MODE]
            }, {
                beginKeywords: "new throw return else",
                relevance: 0
            }, {
                className: "function",
                begin: "([À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(<[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(\\s*,\\s*[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*)*>)?\\s+)+" + e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                returnBegin: !0,
                end: /[{;=]/,
                excludeEnd: !0,
                keywords: t,
                contains: [{
                    begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                    returnBegin: !0,
                    relevance: 0,
                    contains: [e.UNDERSCORE_TITLE_MODE]
                }, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    keywords: t,
                    relevance: 0,
                    contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE]
                }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            }, n, {
                className: "meta",
                begin: "@[A-Za-z]+"
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "[A-Za-z$_][0-9A-Za-z$_]*"
          , n = {
            keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
        }
          , r = {
            className: "number",
            variants: [{
                begin: "\\b(0[bB][01]+)"
            }, {
                begin: "\\b(0[oO][0-7]+)"
            }, {
                begin: e.C_NUMBER_RE
            }],
            relevance: 0
        }
          , a = {
            className: "subst",
            begin: "\\$\\{",
            end: "\\}",
            keywords: n,
            contains: []
        }
          , i = {
            className: "string",
            begin: "`",
            end: "`",
            contains: [e.BACKSLASH_ESCAPE, a]
        };
        a.contains = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, i, r, e.REGEXP_MODE];
        var s = a.contains.concat([e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]);
        return {
            aliases: ["js", "jsx"],
            keywords: n,
            contains: [{
                className: "meta",
                relevance: 10,
                begin: /^\s*['"]use (strict|asm)['"]/
            }, {
                className: "meta",
                begin: /^#!/,
                end: /$/
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, i, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, r, {
                begin: /[{,]\s*/,
                relevance: 0,
                contains: [{
                    begin: t + "\\s*:",
                    returnBegin: !0,
                    relevance: 0,
                    contains: [{
                        className: "attr",
                        begin: t,
                        relevance: 0
                    }]
                }]
            }, {
                begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                keywords: "return throw case",
                contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.REGEXP_MODE, {
                    className: "function",
                    begin: "(\\(.*?\\)|" + t + ")\\s*=>",
                    returnBegin: !0,
                    end: "\\s*=>",
                    contains: [{
                        className: "params",
                        variants: [{
                            begin: t
                        }, {
                            begin: /\(\s*\)/
                        }, {
                            begin: /\(/,
                            end: /\)/,
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: n,
                            contains: s
                        }]
                    }]
                }, {
                    begin: /</,
                    end: /(\/\w+|\w+\/)>/,
                    subLanguage: "xml",
                    contains: [{
                        begin: /<\w+\s*\/>/,
                        skip: !0
                    }, {
                        begin: /<\w+/,
                        end: /(\/\w+|\w+\/)>/,
                        skip: !0,
                        contains: [{
                            begin: /<\w+\s*\/>/,
                            skip: !0
                        }, "self"]
                    }]
                }],
                relevance: 0
            }, {
                className: "function",
                beginKeywords: "function",
                end: /\{/,
                excludeEnd: !0,
                contains: [e.inherit(e.TITLE_MODE, {
                    begin: t
                }), {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    contains: s
                }],
                illegal: /\[|%/
            }, {
                begin: /\$[(.]/
            }, e.METHOD_GUARD, {
                className: "class",
                beginKeywords: "class",
                end: /[{;=]/,
                excludeEnd: !0,
                illegal: /[:"\[\]]/,
                contains: [{
                    beginKeywords: "extends"
                }, e.UNDERSCORE_TITLE_MODE]
            }, {
                beginKeywords: "constructor",
                end: /\{/,
                excludeEnd: !0
            }],
            illegal: /#(?!!)/
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            begin: /[\w-]+ *=/,
            returnBegin: !0,
            relevance: 0,
            contains: [{
                className: "attr",
                begin: /[\w-]+/
            }]
        }
          , n = {
            className: "params",
            begin: /\(/,
            end: /\)/,
            contains: [t],
            relevance: 0
        }
          , r = {
            className: "function",
            begin: /:[\w\-.]+/,
            relevance: 0
        }
          , a = {
            className: "string",
            begin: /\B(([\/.])[\w\-.\/=]+)+/
        }
          , i = {
            className: "params",
            begin: /--[\w\-=\/]+/
        };
        return {
            aliases: ["wildfly-cli"],
            lexemes: "[a-z-]+",
            keywords: {
                keyword: "alias batch cd clear command connect connection-factory connection-info data-source deploy deployment-info deployment-overlay echo echo-dmr help history if jdbc-driver-info jms-queue|20 jms-topic|20 ls patch pwd quit read-attribute read-operation reload rollout-plan run-batch set shutdown try unalias undeploy unset version xa-data-source",
                literal: "true false"
            },
            contains: [e.HASH_COMMENT_MODE, e.QUOTE_STRING_MODE, i, r, a, n]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            literal: "true false null"
        }
          , n = [e.QUOTE_STRING_MODE, e.C_NUMBER_MODE]
          , r = {
            end: ",",
            endsWithParent: !0,
            excludeEnd: !0,
            contains: n,
            keywords: t
        }
          , a = {
            begin: "{",
            end: "}",
            contains: [{
                className: "attr",
                begin: /"/,
                end: /"/,
                contains: [e.BACKSLASH_ESCAPE],
                illegal: "\\n"
            }, e.inherit(r, {
                begin: /:/
            })],
            illegal: "\\S"
        }
          , i = {
            begin: "\\[",
            end: "\\]",
            contains: [e.inherit(r)],
            illegal: "\\S"
        };
        return n.splice(n.length, 0, a, i),
        {
            contains: n,
            keywords: t,
            illegal: "\\S"
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            contains: [{
                className: "meta",
                begin: /^julia>/,
                relevance: 10,
                starts: {
                    end: /^(?![ ]{6})/,
                    subLanguage: "julia"
                },
                aliases: ["jldoctest"]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            keyword: "in isa where baremodule begin break catch ccall const continue do else elseif end export false finally for function global if import importall let local macro module quote return true try using while type immutable abstract bitstype typealias ",
            literal: "true false ARGS C_NULL DevNull ENDIAN_BOM ENV I Inf Inf16 Inf32 Inf64 InsertionSort JULIA_HOME LOAD_PATH MergeSort NaN NaN16 NaN32 NaN64 PROGRAM_FILE QuickSort RoundDown RoundFromZero RoundNearest RoundNearestTiesAway RoundNearestTiesUp RoundToZero RoundUp STDERR STDIN STDOUT VERSION catalan e|0 eu|0 eulergamma golden im nothing pi γ π φ ",
            built_in: "ANY AbstractArray AbstractChannel AbstractFloat AbstractMatrix AbstractRNG AbstractSerializer AbstractSet AbstractSparseArray AbstractSparseMatrix AbstractSparseVector AbstractString AbstractUnitRange AbstractVecOrMat AbstractVector Any ArgumentError Array AssertionError Associative Base64DecodePipe Base64EncodePipe Bidiagonal BigFloat BigInt BitArray BitMatrix BitVector Bool BoundsError BufferStream CachingPool CapturedException CartesianIndex CartesianRange Cchar Cdouble Cfloat Channel Char Cint Cintmax_t Clong Clonglong ClusterManager Cmd CodeInfo Colon Complex Complex128 Complex32 Complex64 CompositeException Condition ConjArray ConjMatrix ConjVector Cptrdiff_t Cshort Csize_t Cssize_t Cstring Cuchar Cuint Cuintmax_t Culong Culonglong Cushort Cwchar_t Cwstring DataType Date DateFormat DateTime DenseArray DenseMatrix DenseVecOrMat DenseVector Diagonal Dict DimensionMismatch Dims DirectIndexString Display DivideError DomainError EOFError EachLine Enum Enumerate ErrorException Exception ExponentialBackOff Expr Factorization FileMonitor Float16 Float32 Float64 Function Future GlobalRef GotoNode HTML Hermitian IO IOBuffer IOContext IOStream IPAddr IPv4 IPv6 IndexCartesian IndexLinear IndexStyle InexactError InitError Int Int128 Int16 Int32 Int64 Int8 IntSet Integer InterruptException InvalidStateException Irrational KeyError LabelNode LinSpace LineNumberNode LoadError LowerTriangular MIME Matrix MersenneTwister Method MethodError MethodTable Module NTuple NewvarNode NullException Nullable Number ObjectIdDict OrdinalRange OutOfMemoryError OverflowError Pair ParseError PartialQuickSort PermutedDimsArray Pipe PollingFileWatcher ProcessExitedException Ptr QuoteNode RandomDevice Range RangeIndex Rational RawFD ReadOnlyMemoryError Real ReentrantLock Ref Regex RegexMatch RemoteChannel RemoteException RevString RoundingMode RowVector SSAValue SegmentationFault SerializationState Set SharedArray SharedMatrix SharedVector Signed SimpleVector Slot SlotNumber SparseMatrixCSC SparseVector StackFrame StackOverflowError StackTrace StepRange StepRangeLen StridedArray StridedMatrix StridedVecOrMat StridedVector String SubArray SubString SymTridiagonal Symbol Symmetric SystemError TCPSocket Task Text TextDisplay Timer Tridiagonal Tuple Type TypeError TypeMapEntry TypeMapLevel TypeName TypeVar TypedSlot UDPSocket UInt UInt128 UInt16 UInt32 UInt64 UInt8 UndefRefError UndefVarError UnicodeError UniformScaling Union UnionAll UnitRange Unsigned UpperTriangular Val Vararg VecElement VecOrMat Vector VersionNumber Void WeakKeyDict WeakRef WorkerConfig WorkerPool "
        }
          , n = "[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*"
          , r = {
            lexemes: n,
            keywords: t,
            illegal: /<\//
        }
          , a = {
            className: "number",
            begin: /(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,
            relevance: 0
        }
          , i = {
            className: "string",
            begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
        }
          , s = {
            className: "subst",
            begin: /\$\(/,
            end: /\)/,
            keywords: t
        }
          , o = {
            className: "variable",
            begin: "\\$" + n
        }
          , l = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE, s, o],
            variants: [{
                begin: /\w*"""/,
                end: /"""\w*/,
                relevance: 10
            }, {
                begin: /\w*"/,
                end: /"\w*/
            }]
        }
          , c = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE, s, o],
            begin: "`",
            end: "`"
        }
          , d = {
            className: "meta",
            begin: "@" + n
        }
          , u = {
            className: "comment",
            variants: [{
                begin: "#=",
                end: "=#",
                relevance: 10
            }, {
                begin: "#",
                end: "$"
            }]
        };
        return r.contains = [a, i, l, c, d, u, e.HASH_COMMENT_MODE, {
            className: "keyword",
            begin: "\\b(((abstract|primitive)\\s+)type|(mutable\\s+)?struct)\\b"
        }, {
            begin: /<:/
        }],
        s.contains = r.contains,
        r
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit initinterface annotation data sealed internal infix operator out by constructor super trait volatile transient native default",
            built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
            literal: "true false null"
        }
          , n = {
            className: "keyword",
            begin: /\b(break|continue|return|this)\b/,
            starts: {
                contains: [{
                    className: "symbol",
                    begin: /@\w+/
                }]
            }
        }
          , r = {
            className: "symbol",
            begin: e.UNDERSCORE_IDENT_RE + "@"
        }
          , a = {
            className: "subst",
            begin: "\\${",
            end: "}",
            contains: [e.APOS_STRING_MODE, e.C_NUMBER_MODE]
        }
          , i = {
            className: "variable",
            begin: "\\$" + e.UNDERSCORE_IDENT_RE
        }
          , s = {
            className: "string",
            variants: [{
                begin: '"""',
                end: '"""',
                contains: [i, a]
            }, {
                begin: "'",
                end: "'",
                illegal: /\n/,
                contains: [e.BACKSLASH_ESCAPE]
            }, {
                begin: '"',
                end: '"',
                illegal: /\n/,
                contains: [e.BACKSLASH_ESCAPE, i, a]
            }]
        }
          , o = {
            className: "meta",
            begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + e.UNDERSCORE_IDENT_RE + ")?"
        }
          , l = {
            className: "meta",
            begin: "@" + e.UNDERSCORE_IDENT_RE,
            contains: [{
                begin: /\(/,
                end: /\)/,
                contains: [e.inherit(s, {
                    className: "meta-string"
                })]
            }]
        };
        return {
            keywords: t,
            contains: [e.COMMENT("/\\*\\*", "\\*/", {
                relevance: 0,
                contains: [{
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                }]
            }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, n, r, o, l, {
                className: "function",
                beginKeywords: "fun",
                end: "[(]|$",
                returnBegin: !0,
                excludeEnd: !0,
                keywords: t,
                illegal: /fun\s+(<.*>)?[^\s\(]+(\s+[^\s\(]+)\s*=/,
                relevance: 5,
                contains: [{
                    begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                    returnBegin: !0,
                    relevance: 0,
                    contains: [e.UNDERSCORE_TITLE_MODE]
                }, {
                    className: "type",
                    begin: /</,
                    end: />/,
                    keywords: "reified",
                    relevance: 0
                }, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    endsParent: !0,
                    keywords: t,
                    relevance: 0,
                    contains: [{
                        begin: /:/,
                        end: /[=,\/]/,
                        endsWithParent: !0,
                        contains: [{
                            className: "type",
                            begin: e.UNDERSCORE_IDENT_RE
                        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
                        relevance: 0
                    }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, o, l, s, e.C_NUMBER_MODE]
                }, e.C_BLOCK_COMMENT_MODE]
            }, {
                className: "class",
                beginKeywords: "class interface trait",
                end: /[:\{(]|$/,
                excludeEnd: !0,
                illegal: "extends implements",
                contains: [{
                    beginKeywords: "public protected internal private constructor"
                }, e.UNDERSCORE_TITLE_MODE, {
                    className: "type",
                    begin: /</,
                    end: />/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    relevance: 0
                }, {
                    className: "type",
                    begin: /[,:]\s*/,
                    end: /[<\(,]|$/,
                    excludeBegin: !0,
                    returnEnd: !0
                }, o, l]
            }, s, {
                className: "meta",
                begin: "^#!/usr/bin/env",
                end: "$",
                illegal: "\n"
            }, e.C_NUMBER_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            literal: "true false none minimal full all void and or not bw nbw ew new cn ncn lt lte gt gte eq neq rx nrx ft",
            built_in: "array date decimal duration integer map pair string tag xml null boolean bytes keyword list locale queue set stack staticarray local var variable global data self inherited currentcapture givenblock",
            keyword: "cache database_names database_schemanames database_tablenames define_tag define_type email_batch encode_set html_comment handle handle_error header if inline iterate ljax_target link link_currentaction link_currentgroup link_currentrecord link_detail link_firstgroup link_firstrecord link_lastgroup link_lastrecord link_nextgroup link_nextrecord link_prevgroup link_prevrecord log loop namespace_using output_none portal private protect records referer referrer repeating resultset rows search_args search_arguments select sort_args sort_arguments thread_atomic value_list while abort case else fail_if fail_ifnot fail if_empty if_false if_null if_true loop_abort loop_continue loop_count params params_up return return_value run_children soap_definetag soap_lastrequest soap_lastresponse tag_name ascending average by define descending do equals frozen group handle_failure import in into join let match max min on order parent protected provide public require returnhome skip split_thread sum take thread to trait type where with yield yieldhome"
        }
          , n = e.COMMENT("\x3c!--", "--\x3e", {
            relevance: 0
        })
          , r = {
            className: "meta",
            begin: "\\[noprocess\\]",
            starts: {
                end: "\\[/noprocess\\]",
                returnEnd: !0,
                contains: [n]
            }
        }
          , a = {
            className: "meta",
            begin: "\\[/noprocess|<\\?(lasso(script)?|=)"
        }
          , i = {
            className: "symbol",
            begin: "'[a-zA-Z_][\\w.]*'"
        }
          , s = [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.inherit(e.C_NUMBER_MODE, {
            begin: e.C_NUMBER_RE + "|(-?infinity|NaN)\\b"
        }), e.inherit(e.APOS_STRING_MODE, {
            illegal: null
        }), e.inherit(e.QUOTE_STRING_MODE, {
            illegal: null
        }), {
            className: "string",
            begin: "`",
            end: "`"
        }, {
            variants: [{
                begin: "[#$][a-zA-Z_][\\w.]*"
            }, {
                begin: "#",
                end: "\\d+",
                illegal: "\\W"
            }]
        }, {
            className: "type",
            begin: "::\\s*",
            end: "[a-zA-Z_][\\w.]*",
            illegal: "\\W"
        }, {
            className: "params",
            variants: [{
                begin: "-(?!infinity)[a-zA-Z_][\\w.]*",
                relevance: 0
            }, {
                begin: "(\\.\\.\\.)"
            }]
        }, {
            begin: /(->|\.)\s*/,
            relevance: 0,
            contains: [i]
        }, {
            className: "class",
            beginKeywords: "define",
            returnEnd: !0,
            end: "\\(|=>",
            contains: [e.inherit(e.TITLE_MODE, {
                begin: "[a-zA-Z_][\\w.]*(=(?!>))?|[-+*/%](?!>)"
            })]
        }];
        return {
            aliases: ["ls", "lassoscript"],
            case_insensitive: !0,
            lexemes: "[a-zA-Z_][\\w.]*|&[lg]t;",
            keywords: t,
            contains: [{
                className: "meta",
                begin: "\\]|\\?>",
                relevance: 0,
                starts: {
                    end: "\\[|<\\?(lasso(script)?|=)",
                    returnEnd: !0,
                    relevance: 0,
                    contains: [n]
                }
            }, r, a, {
                className: "meta",
                begin: "\\[no_square_brackets",
                starts: {
                    end: "\\[/no_square_brackets\\]",
                    lexemes: "[a-zA-Z_][\\w.]*|&[lg]t;",
                    keywords: t,
                    contains: [{
                        className: "meta",
                        begin: "\\]|\\?>",
                        relevance: 0,
                        starts: {
                            end: "\\[noprocess\\]|<\\?(lasso(script)?|=)",
                            returnEnd: !0,
                            contains: [n]
                        }
                    }, r, a].concat(s)
                }
            }, {
                className: "meta",
                begin: "\\[",
                relevance: 0
            }, {
                className: "meta",
                begin: "^#!",
                end: "lasso9$",
                relevance: 10
            }].concat(s)
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            contains: [{
                className: "attribute",
                begin: "^dn",
                end: ": ",
                excludeEnd: !0,
                starts: {
                    end: "$",
                    relevance: 0
                },
                relevance: 10
            }, {
                className: "attribute",
                begin: "^\\w",
                end: ": ",
                excludeEnd: !0,
                starts: {
                    end: "$",
                    relevance: 0
                }
            }, {
                className: "literal",
                begin: "^-",
                end: "$"
            }, e.HASH_COMMENT_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            contains: [{
                className: "function",
                begin: "#+[A-Za-z_0-9]*\\(",
                end: " {",
                returnBegin: !0,
                excludeEnd: !0,
                contains: [{
                    className: "keyword",
                    begin: "#+"
                }, {
                    className: "title",
                    begin: "[A-Za-z_][A-Za-z_0-9]*"
                }, {
                    className: "params",
                    begin: "\\(",
                    end: "\\)",
                    endsParent: !0,
                    contains: [{
                        className: "string",
                        begin: '"',
                        end: '"'
                    }, {
                        className: "variable",
                        begin: "[A-Za-z_][A-Za-z_0-9]*"
                    }]
                }]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "([\\w-]+|@{[\\w-]+})"
          , n = []
          , r = []
          , a = function(e) {
            return {
                className: "string",
                begin: "~?" + e + ".*?" + e
            }
        }
          , i = function(e, t, n) {
            return {
                className: e,
                begin: t,
                relevance: n
            }
        }
          , s = {
            begin: "\\(",
            end: "\\)",
            contains: r,
            relevance: 0
        };
        r.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, a("'"), a('"'), e.CSS_NUMBER_MODE, {
            begin: "(url|data-uri)\\(",
            starts: {
                className: "string",
                end: "[\\)\\n]",
                excludeEnd: !0
            }
        }, i("number", "#[0-9A-Fa-f]+\\b"), s, i("variable", "@@?[\\w-]+", 10), i("variable", "@{[\\w-]+}"), i("built_in", "~?`[^`]*?`"), {
            className: "attribute",
            begin: "[\\w-]+\\s*:",
            end: ":",
            returnBegin: !0,
            excludeEnd: !0
        }, {
            className: "meta",
            begin: "!important"
        });
        var o = r.concat({
            begin: "{",
            end: "}",
            contains: n
        })
          , l = {
            beginKeywords: "when",
            endsWithParent: !0,
            contains: [{
                beginKeywords: "and not"
            }].concat(r)
        }
          , c = {
            begin: t + "\\s*:",
            returnBegin: !0,
            end: "[;}]",
            relevance: 0,
            contains: [{
                className: "attribute",
                begin: t,
                end: ":",
                excludeEnd: !0,
                starts: {
                    endsWithParent: !0,
                    illegal: "[<=$]",
                    relevance: 0,
                    contains: r
                }
            }]
        }
          , d = {
            className: "keyword",
            begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
            starts: {
                end: "[;{}]",
                returnEnd: !0,
                contains: r,
                relevance: 0
            }
        }
          , u = {
            className: "variable",
            variants: [{
                begin: "@[\\w-]+\\s*:",
                relevance: 15
            }, {
                begin: "@[\\w-]+"
            }],
            starts: {
                end: "[;}]",
                returnEnd: !0,
                contains: o
            }
        }
          , p = {
            variants: [{
                begin: "[\\.#:&\\[>]",
                end: "[;{}]"
            }, {
                begin: t,
                end: "{"
            }],
            returnBegin: !0,
            returnEnd: !0,
            illegal: "[<='$\"]",
            relevance: 0,
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, l, i("keyword", "all\\b"), i("variable", "@{[\\w-]+}"), i("selector-tag", t + "%?", 0), i("selector-id", "#" + t), i("selector-class", "\\." + t, 0), i("selector-tag", "&", 0), {
                className: "selector-attr",
                begin: "\\[",
                end: "\\]"
            }, {
                className: "selector-pseudo",
                begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
            }, {
                begin: "\\(",
                end: "\\)",
                contains: o
            }, {
                begin: "!important"
            }]
        };
        return n.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, d, u, c, p),
        {
            case_insensitive: !0,
            illegal: "[=>'/<($\"]",
            contains: n
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*"
          , n = "(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|\\-)?\\d+)?"
          , r = {
            className: "meta",
            begin: "^#!",
            end: "$"
        }
          , a = {
            className: "literal",
            begin: "\\b(t{1}|nil)\\b"
        }
          , i = {
            className: "number",
            variants: [{
                begin: n,
                relevance: 0
            }, {
                begin: "#(b|B)[0-1]+(/[0-1]+)?"
            }, {
                begin: "#(o|O)[0-7]+(/[0-7]+)?"
            }, {
                begin: "#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?"
            }, {
                begin: "#(c|C)\\(" + n + " +" + n,
                end: "\\)"
            }]
        }
          , s = e.inherit(e.QUOTE_STRING_MODE, {
            illegal: null
        })
          , o = e.COMMENT(";", "$", {
            relevance: 0
        })
          , l = {
            begin: "\\*",
            end: "\\*"
        }
          , c = {
            className: "symbol",
            begin: "[:&]" + t
        }
          , d = {
            begin: t,
            relevance: 0
        }
          , u = {
            begin: "\\|[^]*?\\|"
        }
          , p = {
            begin: "\\(",
            end: "\\)",
            contains: ["self", a, s, i, d]
        }
          , m = {
            contains: [i, s, l, c, p, d],
            variants: [{
                begin: "['`]\\(",
                end: "\\)"
            }, {
                begin: "\\(quote ",
                end: "\\)",
                keywords: {
                    name: "quote"
                }
            }, {
                begin: "'\\|[^]*?\\|"
            }]
        }
          , g = {
            variants: [{
                begin: "'" + t
            }, {
                begin: "#'" + t + "(::" + t + ")*"
            }]
        }
          , _ = {
            begin: "\\(\\s*",
            end: "\\)"
        }
          , b = {
            endsWithParent: !0,
            relevance: 0
        };
        return _.contains = [{
            className: "name",
            variants: [{
                begin: t
            }, {
                begin: "\\|[^]*?\\|"
            }]
        }, b],
        b.contains = [m, g, _, a, i, s, o, l, c, u, d],
        {
            illegal: /\S/,
            contains: [i, r, a, s, o, m, g, _, d]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            begin: "\\b[gtps][A-Z]+[A-Za-z0-9_\\-]*\\b|\\$_[A-Z]+",
            relevance: 0
        }
          , n = [e.C_BLOCK_COMMENT_MODE, e.HASH_COMMENT_MODE, e.COMMENT("--", "$"), e.COMMENT("[^:]//", "$")]
          , r = e.inherit(e.TITLE_MODE, {
            variants: [{
                begin: "\\b_*rig[A-Z]+[A-Za-z0-9_\\-]*"
            }, {
                begin: "\\b_[a-z0-9\\-]+"
            }]
        })
          , a = e.inherit(e.TITLE_MODE, {
            begin: "\\b([A-Za-z0-9_\\-]+)\\b"
        });
        return {
            case_insensitive: !1,
            keywords: {
                keyword: "$_COOKIE $_FILES $_GET $_GET_BINARY $_GET_RAW $_POST $_POST_BINARY $_POST_RAW $_SESSION $_SERVER codepoint codepoints segment segments codeunit codeunits sentence sentences trueWord trueWords paragraph after byte bytes english the until http forever descending using line real8 with seventh for stdout finally element word words fourth before black ninth sixth characters chars stderr uInt1 uInt1s uInt2 uInt2s stdin string lines relative rel any fifth items from middle mid at else of catch then third it file milliseconds seconds second secs sec int1 int1s int4 int4s internet int2 int2s normal text item last long detailed effective uInt4 uInt4s repeat end repeat URL in try into switch to words https token binfile each tenth as ticks tick system real4 by dateItems without char character ascending eighth whole dateTime numeric short first ftp integer abbreviated abbr abbrev private case while if div mod wrap and or bitAnd bitNot bitOr bitXor among not in a an within contains ends with begins the keys of keys",
                literal: "SIX TEN FORMFEED NINE ZERO NONE SPACE FOUR FALSE COLON CRLF PI COMMA ENDOFFILE EOF EIGHT FIVE QUOTE EMPTY ONE TRUE RETURN CR LINEFEED RIGHT BACKSLASH NULL SEVEN TAB THREE TWO six ten formfeed nine zero none space four false colon crlf pi comma endoffile eof eight five quote empty one true return cr linefeed right backslash null seven tab three two RIVERSION RISTATE FILE_READ_MODE FILE_WRITE_MODE FILE_WRITE_MODE DIR_WRITE_MODE FILE_READ_UMASK FILE_WRITE_UMASK DIR_READ_UMASK DIR_WRITE_UMASK",
                built_in: "put abs acos aliasReference annuity arrayDecode arrayEncode asin atan atan2 average avg avgDev base64Decode base64Encode baseConvert binaryDecode binaryEncode byteOffset byteToNum cachedURL cachedURLs charToNum cipherNames codepointOffset codepointProperty codepointToNum codeunitOffset commandNames compound compress constantNames cos date dateFormat decompress directories diskSpace DNSServers exp exp1 exp2 exp10 extents files flushEvents folders format functionNames geometricMean global globals hasMemory harmonicMean hostAddress hostAddressToName hostName hostNameToAddress isNumber ISOToMac itemOffset keys len length libURLErrorData libUrlFormData libURLftpCommand libURLLastHTTPHeaders libURLLastRHHeaders libUrlMultipartFormAddPart libUrlMultipartFormData libURLVersion lineOffset ln ln1 localNames log log2 log10 longFilePath lower macToISO matchChunk matchText matrixMultiply max md5Digest median merge millisec millisecs millisecond milliseconds min monthNames nativeCharToNum normalizeText num number numToByte numToChar numToCodepoint numToNativeChar offset open openfiles openProcesses openProcessIDs openSockets paragraphOffset paramCount param params peerAddress pendingMessages platform popStdDev populationStandardDeviation populationVariance popVariance processID random randomBytes replaceText result revCreateXMLTree revCreateXMLTreeFromFile revCurrentRecord revCurrentRecordIsFirst revCurrentRecordIsLast revDatabaseColumnCount revDatabaseColumnIsNull revDatabaseColumnLengths revDatabaseColumnNames revDatabaseColumnNamed revDatabaseColumnNumbered revDatabaseColumnTypes revDatabaseConnectResult revDatabaseCursors revDatabaseID revDatabaseTableNames revDatabaseType revDataFromQuery revdb_closeCursor revdb_columnbynumber revdb_columncount revdb_columnisnull revdb_columnlengths revdb_columnnames revdb_columntypes revdb_commit revdb_connect revdb_connections revdb_connectionerr revdb_currentrecord revdb_cursorconnection revdb_cursorerr revdb_cursors revdb_dbtype revdb_disconnect revdb_execute revdb_iseof revdb_isbof revdb_movefirst revdb_movelast revdb_movenext revdb_moveprev revdb_query revdb_querylist revdb_recordcount revdb_rollback revdb_tablenames revGetDatabaseDriverPath revNumberOfRecords revOpenDatabase revOpenDatabases revQueryDatabase revQueryDatabaseBlob revQueryResult revQueryIsAtStart revQueryIsAtEnd revUnixFromMacPath revXMLAttribute revXMLAttributes revXMLAttributeValues revXMLChildContents revXMLChildNames revXMLCreateTreeFromFileWithNamespaces revXMLCreateTreeWithNamespaces revXMLDataFromXPathQuery revXMLEvaluateXPath revXMLFirstChild revXMLMatchingNode revXMLNextSibling revXMLNodeContents revXMLNumberOfChildren revXMLParent revXMLPreviousSibling revXMLRootNode revXMLRPC_CreateRequest revXMLRPC_Documents revXMLRPC_Error revXMLRPC_GetHost revXMLRPC_GetMethod revXMLRPC_GetParam revXMLText revXMLRPC_Execute revXMLRPC_GetParamCount revXMLRPC_GetParamNode revXMLRPC_GetParamType revXMLRPC_GetPath revXMLRPC_GetPort revXMLRPC_GetProtocol revXMLRPC_GetRequest revXMLRPC_GetResponse revXMLRPC_GetSocket revXMLTree revXMLTrees revXMLValidateDTD revZipDescribeItem revZipEnumerateItems revZipOpenArchives round sampVariance sec secs seconds sentenceOffset sha1Digest shell shortFilePath sin specialFolderPath sqrt standardDeviation statRound stdDev sum sysError systemVersion tan tempName textDecode textEncode tick ticks time to tokenOffset toLower toUpper transpose truewordOffset trunc uniDecode uniEncode upper URLDecode URLEncode URLStatus uuid value variableNames variance version waitDepth weekdayNames wordOffset xsltApplyStylesheet xsltApplyStylesheetFromFile xsltLoadStylesheet xsltLoadStylesheetFromFile add breakpoint cancel clear local variable file word line folder directory URL close socket process combine constant convert create new alias folder directory decrypt delete variable word line folder directory URL dispatch divide do encrypt filter get include intersect kill libURLDownloadToFile libURLFollowHttpRedirects libURLftpUpload libURLftpUploadFile libURLresetAll libUrlSetAuthCallback libURLSetCustomHTTPHeaders libUrlSetExpect100 libURLSetFTPListCommand libURLSetFTPMode libURLSetFTPStopTime libURLSetStatusCallback load multiply socket prepare process post seek rel relative read from process rename replace require resetAll resolve revAddXMLNode revAppendXML revCloseCursor revCloseDatabase revCommitDatabase revCopyFile revCopyFolder revCopyXMLNode revDeleteFolder revDeleteXMLNode revDeleteAllXMLTrees revDeleteXMLTree revExecuteSQL revGoURL revInsertXMLNode revMoveFolder revMoveToFirstRecord revMoveToLastRecord revMoveToNextRecord revMoveToPreviousRecord revMoveToRecord revMoveXMLNode revPutIntoXMLNode revRollBackDatabase revSetDatabaseDriverPath revSetXMLAttribute revXMLRPC_AddParam revXMLRPC_DeleteAllDocuments revXMLAddDTD revXMLRPC_Free revXMLRPC_FreeAll revXMLRPC_DeleteDocument revXMLRPC_DeleteParam revXMLRPC_SetHost revXMLRPC_SetMethod revXMLRPC_SetPort revXMLRPC_SetProtocol revXMLRPC_SetSocket revZipAddItemWithData revZipAddItemWithFile revZipAddUncompressedItemWithData revZipAddUncompressedItemWithFile revZipCancel revZipCloseArchive revZipDeleteItem revZipExtractItemToFile revZipExtractItemToVariable revZipSetProgressCallback revZipRenameItem revZipReplaceItemWithData revZipReplaceItemWithFile revZipOpenArchive send set sort split start stop subtract union unload wait write"
            },
            contains: [t, {
                className: "keyword",
                begin: "\\bend\\sif\\b"
            }, {
                className: "function",
                beginKeywords: "function",
                end: "$",
                contains: [t, a, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE, r]
            }, {
                className: "function",
                begin: "\\bend\\s+",
                end: "$",
                keywords: "end",
                contains: [a, r],
                relevance: 0
            }, {
                beginKeywords: "command on",
                end: "$",
                contains: [t, a, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE, r]
            }, {
                className: "meta",
                variants: [{
                    begin: "<\\?(rev|lc|livecode)",
                    relevance: 10
                }, {
                    begin: "<\\?"
                }, {
                    begin: "\\?>"
                }]
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE, r].concat(n),
            illegal: ";$|^\\[|^=|&|{"
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger case default function var with then unless until loop of by when and or is isnt not it that otherwise from to til fallthrough super case default function var void const let enum export import native __hasProp __extends __slice __bind __indexOf",
            literal: "true false null undefined yes no on off it that void",
            built_in: "npm require console print module global window document"
        }
          , n = "[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*"
          , r = e.inherit(e.TITLE_MODE, {
            begin: n
        })
          , a = {
            className: "subst",
            begin: /#\{/,
            end: /}/,
            keywords: t
        }
          , i = {
            className: "subst",
            begin: /#[A-Za-z$_]/,
            end: /(?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,
            keywords: t
        }
          , s = [e.BINARY_NUMBER_MODE, {
            className: "number",
            begin: "(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)",
            relevance: 0,
            starts: {
                end: "(\\s*/)?",
                relevance: 0
            }
        }, {
            className: "string",
            variants: [{
                begin: /'''/,
                end: /'''/,
                contains: [e.BACKSLASH_ESCAPE]
            }, {
                begin: /'/,
                end: /'/,
                contains: [e.BACKSLASH_ESCAPE]
            }, {
                begin: /"""/,
                end: /"""/,
                contains: [e.BACKSLASH_ESCAPE, a, i]
            }, {
                begin: /"/,
                end: /"/,
                contains: [e.BACKSLASH_ESCAPE, a, i]
            }, {
                begin: /\\/,
                end: /(\s|$)/,
                excludeEnd: !0
            }]
        }, {
            className: "regexp",
            variants: [{
                begin: "//",
                end: "//[gim]*",
                contains: [a, e.HASH_COMMENT_MODE]
            }, {
                begin: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
            }]
        }, {
            begin: "@" + n
        }, {
            begin: "``",
            end: "``",
            excludeBegin: !0,
            excludeEnd: !0,
            subLanguage: "javascript"
        }];
        a.contains = s;
        var o = {
            className: "params",
            begin: "\\(",
            returnBegin: !0,
            contains: [{
                begin: /\(/,
                end: /\)/,
                keywords: t,
                contains: ["self"].concat(s)
            }]
        };
        return {
            aliases: ["ls"],
            keywords: t,
            illegal: /\/\*/,
            contains: s.concat([e.COMMENT("\\/\\*", "\\*\\/"), e.HASH_COMMENT_MODE, {
                className: "function",
                contains: [r, o],
                returnBegin: !0,
                variants: [{
                    begin: "(" + n + "\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B\\->\\*?",
                    end: "\\->\\*?"
                }, {
                    begin: "(" + n + "\\s*(?:=|:=)\\s*)?!?(\\(.*\\))?\\s*\\B[-~]{1,2}>\\*?",
                    end: "[-~]{1,2}>\\*?"
                }, {
                    begin: "(" + n + "\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B!?[-~]{1,2}>\\*?",
                    end: "!?[-~]{1,2}>\\*?"
                }]
            }, {
                className: "class",
                beginKeywords: "class",
                end: "$",
                illegal: /[:="\[\]]/,
                contains: [{
                    beginKeywords: "extends",
                    endsWithParent: !0,
                    illegal: /[:="\[\]]/,
                    contains: [r]
                }, r]
            }, {
                begin: n + ":",
                end: ":",
                returnBegin: !0,
                returnEnd: !0,
                relevance: 0
            }])
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "([-a-zA-Z$._][\\w\\-$.]*)";
        return {
            keywords: "begin end true false declare define global constant private linker_private internal available_externally linkonce linkonce_odr weak weak_odr appending dllimport dllexport common default hidden protected extern_weak external thread_local zeroinitializer undef null to tail target triple datalayout volatile nuw nsw nnan ninf nsz arcp fast exact inbounds align addrspace section alias module asm sideeffect gc dbg linker_private_weak attributes blockaddress initialexec localdynamic localexec prefix unnamed_addr ccc fastcc coldcc x86_stdcallcc x86_fastcallcc arm_apcscc arm_aapcscc arm_aapcs_vfpcc ptx_device ptx_kernel intel_ocl_bicc msp430_intrcc spir_func spir_kernel x86_64_sysvcc x86_64_win64cc x86_thiscallcc cc c signext zeroext inreg sret nounwind noreturn noalias nocapture byval nest readnone readonly inlinehint noinline alwaysinline optsize ssp sspreq noredzone noimplicitfloat naked builtin cold nobuiltin noduplicate nonlazybind optnone returns_twice sanitize_address sanitize_memory sanitize_thread sspstrong uwtable returned type opaque eq ne slt sgt sle sge ult ugt ule uge oeq one olt ogt ole oge ord uno ueq une x acq_rel acquire alignstack atomic catch cleanup filter inteldialect max min monotonic nand personality release seq_cst singlethread umax umin unordered xchg add fadd sub fsub mul fmul udiv sdiv fdiv urem srem frem shl lshr ashr and or xor icmp fcmp phi call trunc zext sext fptrunc fpext uitofp sitofp fptoui fptosi inttoptr ptrtoint bitcast addrspacecast select va_arg ret br switch invoke unwind unreachable indirectbr landingpad resume malloc alloca free load store getelementptr extractelement insertelement shufflevector getresult extractvalue insertvalue atomicrmw cmpxchg fence argmemonly double",
            contains: [{
                className: "keyword",
                begin: "i\\d+"
            }, e.COMMENT(";", "\\n", {
                relevance: 0
            }), e.QUOTE_STRING_MODE, {
                className: "string",
                variants: [{
                    begin: '"',
                    end: '[^\\\\]"'
                }],
                relevance: 0
            }, {
                className: "title",
                variants: [{
                    begin: "@" + t
                }, {
                    begin: "@\\d+"
                }, {
                    begin: "!" + t
                }, {
                    begin: "!\\d+" + t
                }]
            }, {
                className: "symbol",
                variants: [{
                    begin: "%" + t
                }, {
                    begin: "%\\d+"
                }, {
                    begin: "#\\d+"
                }]
            }, {
                className: "number",
                variants: [{
                    begin: "0[xX][a-fA-F0-9]+"
                }, {
                    begin: "-?\\d+(?:[.]\\d+)?(?:[eE][-+]?\\d+(?:[.]\\d+)?)?"
                }],
                relevance: 0
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "subst",
            begin: /\\[tn"\\]/
        }
          , n = {
            className: "string",
            begin: '"',
            end: '"',
            contains: [t]
        }
          , r = {
            className: "number",
            begin: e.C_NUMBER_RE
        }
          , a = {
            className: "literal",
            variants: [{
                begin: "\\b(?:PI|TWO_PI|PI_BY_TWO|DEG_TO_RAD|RAD_TO_DEG|SQRT2)\\b"
            }, {
                begin: "\\b(?:XP_ERROR_(?:EXPERIENCES_DISABLED|EXPERIENCE_(?:DISABLED|SUSPENDED)|INVALID_(?:EXPERIENCE|PARAMETERS)|KEY_NOT_FOUND|MATURITY_EXCEEDED|NONE|NOT_(?:FOUND|PERMITTED(?:_LAND)?)|NO_EXPERIENCE|QUOTA_EXCEEDED|RETRY_UPDATE|STORAGE_EXCEPTION|STORE_DISABLED|THROTTLED|UNKNOWN_ERROR)|JSON_APPEND|STATUS_(?:PHYSICS|ROTATE_[XYZ]|PHANTOM|SANDBOX|BLOCK_GRAB(?:_OBJECT)?|(?:DIE|RETURN)_AT_EDGE|CAST_SHADOWS|OK|MALFORMED_PARAMS|TYPE_MISMATCH|BOUNDS_ERROR|NOT_(?:FOUND|SUPPORTED)|INTERNAL_ERROR|WHITELIST_FAILED)|AGENT(?:_(?:BY_(?:LEGACY_|USER)NAME|FLYING|ATTACHMENTS|SCRIPTED|MOUSELOOK|SITTING|ON_OBJECT|AWAY|WALKING|IN_AIR|TYPING|CROUCHING|BUSY|ALWAYS_RUN|AUTOPILOT|LIST_(?:PARCEL(?:_OWNER)?|REGION)))?|CAMERA_(?:PITCH|DISTANCE|BEHINDNESS_(?:ANGLE|LAG)|(?:FOCUS|POSITION)(?:_(?:THRESHOLD|LOCKED|LAG))?|FOCUS_OFFSET|ACTIVE)|ANIM_ON|LOOP|REVERSE|PING_PONG|SMOOTH|ROTATE|SCALE|ALL_SIDES|LINK_(?:ROOT|SET|ALL_(?:OTHERS|CHILDREN)|THIS)|ACTIVE|PASS(?:IVE|_(?:ALWAYS|IF_NOT_HANDLED|NEVER))|SCRIPTED|CONTROL_(?:FWD|BACK|(?:ROT_)?(?:LEFT|RIGHT)|UP|DOWN|(?:ML_)?LBUTTON)|PERMISSION_(?:RETURN_OBJECTS|DEBIT|OVERRIDE_ANIMATIONS|SILENT_ESTATE_MANAGEMENT|TAKE_CONTROLS|TRIGGER_ANIMATION|ATTACH|CHANGE_LINKS|(?:CONTROL|TRACK)_CAMERA|TELEPORT)|INVENTORY_(?:TEXTURE|SOUND|OBJECT|SCRIPT|LANDMARK|CLOTHING|NOTECARD|BODYPART|ANIMATION|GESTURE|ALL|NONE)|CHANGED_(?:INVENTORY|COLOR|SHAPE|SCALE|TEXTURE|LINK|ALLOWED_DROP|OWNER|REGION(?:_START)?|TELEPORT|MEDIA)|OBJECT_(?:CLICK_ACTION|HOVER_HEIGHT|LAST_OWNER_ID|(?:PHYSICS|SERVER|STREAMING)_COST|UNKNOWN_DETAIL|CHARACTER_TIME|PHANTOM|PHYSICS|TEMP_ON_REZ|NAME|DESC|POS|PRIM_(?:COUNT|EQUIVALENCE)|RETURN_(?:PARCEL(?:_OWNER)?|REGION)|REZZER_KEY|ROO?T|VELOCITY|OMEGA|OWNER|GROUP|CREATOR|ATTACHED_POINT|RENDER_WEIGHT|(?:BODY_SHAPE|PATHFINDING)_TYPE|(?:RUNNING|TOTAL)_SCRIPT_COUNT|TOTAL_INVENTORY_COUNT|SCRIPT_(?:MEMORY|TIME))|TYPE_(?:INTEGER|FLOAT|STRING|KEY|VECTOR|ROTATION|INVALID)|(?:DEBUG|PUBLIC)_CHANNEL|ATTACH_(?:AVATAR_CENTER|CHEST|HEAD|BACK|PELVIS|MOUTH|CHIN|NECK|NOSE|BELLY|[LR](?:SHOULDER|HAND|FOOT|EAR|EYE|[UL](?:ARM|LEG)|HIP)|(?:LEFT|RIGHT)_PEC|HUD_(?:CENTER_[12]|TOP_(?:RIGHT|CENTER|LEFT)|BOTTOM(?:_(?:RIGHT|LEFT))?)|[LR]HAND_RING1|TAIL_(?:BASE|TIP)|[LR]WING|FACE_(?:JAW|[LR]EAR|[LR]EYE|TOUNGE)|GROIN|HIND_[LR]FOOT)|LAND_(?:LEVEL|RAISE|LOWER|SMOOTH|NOISE|REVERT)|DATA_(?:ONLINE|NAME|BORN|SIM_(?:POS|STATUS|RATING)|PAYINFO)|PAYMENT_INFO_(?:ON_FILE|USED)|REMOTE_DATA_(?:CHANNEL|REQUEST|REPLY)|PSYS_(?:PART_(?:BF_(?:ZERO|ONE(?:_MINUS_(?:DEST_COLOR|SOURCE_(ALPHA|COLOR)))?|DEST_COLOR|SOURCE_(ALPHA|COLOR))|BLEND_FUNC_(DEST|SOURCE)|FLAGS|(?:START|END)_(?:COLOR|ALPHA|SCALE|GLOW)|MAX_AGE|(?:RIBBON|WIND|INTERP_(?:COLOR|SCALE)|BOUNCE|FOLLOW_(?:SRC|VELOCITY)|TARGET_(?:POS|LINEAR)|EMISSIVE)_MASK)|SRC_(?:MAX_AGE|PATTERN|ANGLE_(?:BEGIN|END)|BURST_(?:RATE|PART_COUNT|RADIUS|SPEED_(?:MIN|MAX))|ACCEL|TEXTURE|TARGET_KEY|OMEGA|PATTERN_(?:DROP|EXPLODE|ANGLE(?:_CONE(?:_EMPTY)?)?)))|VEHICLE_(?:REFERENCE_FRAME|TYPE_(?:NONE|SLED|CAR|BOAT|AIRPLANE|BALLOON)|(?:LINEAR|ANGULAR)_(?:FRICTION_TIMESCALE|MOTOR_DIRECTION)|LINEAR_MOTOR_OFFSET|HOVER_(?:HEIGHT|EFFICIENCY|TIMESCALE)|BUOYANCY|(?:LINEAR|ANGULAR)_(?:DEFLECTION_(?:EFFICIENCY|TIMESCALE)|MOTOR_(?:DECAY_)?TIMESCALE)|VERTICAL_ATTRACTION_(?:EFFICIENCY|TIMESCALE)|BANKING_(?:EFFICIENCY|MIX|TIMESCALE)|FLAG_(?:NO_DEFLECTION_UP|LIMIT_(?:ROLL_ONLY|MOTOR_UP)|HOVER_(?:(?:WATER|TERRAIN|UP)_ONLY|GLOBAL_HEIGHT)|MOUSELOOK_(?:STEER|BANK)|CAMERA_DECOUPLED))|PRIM_(?:ALPHA_MODE(?:_(?:BLEND|EMISSIVE|MASK|NONE))?|NORMAL|SPECULAR|TYPE(?:_(?:BOX|CYLINDER|PRISM|SPHERE|TORUS|TUBE|RING|SCULPT))?|HOLE_(?:DEFAULT|CIRCLE|SQUARE|TRIANGLE)|MATERIAL(?:_(?:STONE|METAL|GLASS|WOOD|FLESH|PLASTIC|RUBBER))?|SHINY_(?:NONE|LOW|MEDIUM|HIGH)|BUMP_(?:NONE|BRIGHT|DARK|WOOD|BARK|BRICKS|CHECKER|CONCRETE|TILE|STONE|DISKS|GRAVEL|BLOBS|SIDING|LARGETILE|STUCCO|SUCTION|WEAVE)|TEXGEN_(?:DEFAULT|PLANAR)|SCULPT_(?:TYPE_(?:SPHERE|TORUS|PLANE|CYLINDER|MASK)|FLAG_(?:MIRROR|INVERT))|PHYSICS(?:_(?:SHAPE_(?:CONVEX|NONE|PRIM|TYPE)))?|(?:POS|ROT)_LOCAL|SLICE|TEXT|FLEXIBLE|POINT_LIGHT|TEMP_ON_REZ|PHANTOM|POSITION|SIZE|ROTATION|TEXTURE|NAME|OMEGA|DESC|LINK_TARGET|COLOR|BUMP_SHINY|FULLBRIGHT|TEXGEN|GLOW|MEDIA_(?:ALT_IMAGE_ENABLE|CONTROLS|(?:CURRENT|HOME)_URL|AUTO_(?:LOOP|PLAY|SCALE|ZOOM)|FIRST_CLICK_INTERACT|(?:WIDTH|HEIGHT)_PIXELS|WHITELIST(?:_ENABLE)?|PERMS_(?:INTERACT|CONTROL)|PARAM_MAX|CONTROLS_(?:STANDARD|MINI)|PERM_(?:NONE|OWNER|GROUP|ANYONE)|MAX_(?:URL_LENGTH|WHITELIST_(?:SIZE|COUNT)|(?:WIDTH|HEIGHT)_PIXELS)))|MASK_(?:BASE|OWNER|GROUP|EVERYONE|NEXT)|PERM_(?:TRANSFER|MODIFY|COPY|MOVE|ALL)|PARCEL_(?:MEDIA_COMMAND_(?:STOP|PAUSE|PLAY|LOOP|TEXTURE|URL|TIME|AGENT|UNLOAD|AUTO_ALIGN|TYPE|SIZE|DESC|LOOP_SET)|FLAG_(?:ALLOW_(?:FLY|(?:GROUP_)?SCRIPTS|LANDMARK|TERRAFORM|DAMAGE|CREATE_(?:GROUP_)?OBJECTS)|USE_(?:ACCESS_(?:GROUP|LIST)|BAN_LIST|LAND_PASS_LIST)|LOCAL_SOUND_ONLY|RESTRICT_PUSHOBJECT|ALLOW_(?:GROUP|ALL)_OBJECT_ENTRY)|COUNT_(?:TOTAL|OWNER|GROUP|OTHER|SELECTED|TEMP)|DETAILS_(?:NAME|DESC|OWNER|GROUP|AREA|ID|SEE_AVATARS))|LIST_STAT_(?:MAX|MIN|MEAN|MEDIAN|STD_DEV|SUM(?:_SQUARES)?|NUM_COUNT|GEOMETRIC_MEAN|RANGE)|PAY_(?:HIDE|DEFAULT)|REGION_FLAG_(?:ALLOW_DAMAGE|FIXED_SUN|BLOCK_TERRAFORM|SANDBOX|DISABLE_(?:COLLISIONS|PHYSICS)|BLOCK_FLY|ALLOW_DIRECT_TELEPORT|RESTRICT_PUSHOBJECT)|HTTP_(?:METHOD|MIMETYPE|BODY_(?:MAXLENGTH|TRUNCATED)|CUSTOM_HEADER|PRAGMA_NO_CACHE|VERBOSE_THROTTLE|VERIFY_CERT)|STRING_(?:TRIM(?:_(?:HEAD|TAIL))?)|CLICK_ACTION_(?:NONE|TOUCH|SIT|BUY|PAY|OPEN(?:_MEDIA)?|PLAY|ZOOM)|TOUCH_INVALID_FACE|PROFILE_(?:NONE|SCRIPT_MEMORY)|RC_(?:DATA_FLAGS|DETECT_PHANTOM|GET_(?:LINK_NUM|NORMAL|ROOT_KEY)|MAX_HITS|REJECT_(?:TYPES|AGENTS|(?:NON)?PHYSICAL|LAND))|RCERR_(?:CAST_TIME_EXCEEDED|SIM_PERF_LOW|UNKNOWN)|ESTATE_ACCESS_(?:ALLOWED_(?:AGENT|GROUP)_(?:ADD|REMOVE)|BANNED_AGENT_(?:ADD|REMOVE))|DENSITY|FRICTION|RESTITUTION|GRAVITY_MULTIPLIER|KFM_(?:COMMAND|CMD_(?:PLAY|STOP|PAUSE)|MODE|FORWARD|LOOP|PING_PONG|REVERSE|DATA|ROTATION|TRANSLATION)|ERR_(?:GENERIC|PARCEL_PERMISSIONS|MALFORMED_PARAMS|RUNTIME_PERMISSIONS|THROTTLED)|CHARACTER_(?:CMD_(?:(?:SMOOTH_)?STOP|JUMP)|DESIRED_(?:TURN_)?SPEED|RADIUS|STAY_WITHIN_PARCEL|LENGTH|ORIENTATION|ACCOUNT_FOR_SKIPPED_FRAMES|AVOIDANCE_MODE|TYPE(?:_(?:[ABCD]|NONE))?|MAX_(?:DECEL|TURN_RADIUS|(?:ACCEL|SPEED)))|PURSUIT_(?:OFFSET|FUZZ_FACTOR|GOAL_TOLERANCE|INTERCEPT)|REQUIRE_LINE_OF_SIGHT|FORCE_DIRECT_PATH|VERTICAL|HORIZONTAL|AVOID_(?:CHARACTERS|DYNAMIC_OBSTACLES|NONE)|PU_(?:EVADE_(?:HIDDEN|SPOTTED)|FAILURE_(?:DYNAMIC_PATHFINDING_DISABLED|INVALID_(?:GOAL|START)|NO_(?:NAVMESH|VALID_DESTINATION)|OTHER|TARGET_GONE|(?:PARCEL_)?UNREACHABLE)|(?:GOAL|SLOWDOWN_DISTANCE)_REACHED)|TRAVERSAL_TYPE(?:_(?:FAST|NONE|SLOW))?|CONTENT_TYPE_(?:ATOM|FORM|HTML|JSON|LLSD|RSS|TEXT|XHTML|XML)|GCNP_(?:RADIUS|STATIC)|(?:PATROL|WANDER)_PAUSE_AT_WAYPOINTS|OPT_(?:AVATAR|CHARACTER|EXCLUSION_VOLUME|LEGACY_LINKSET|MATERIAL_VOLUME|OTHER|STATIC_OBSTACLE|WALKABLE)|SIM_STAT_PCT_CHARS_STEPPED)\\b"
            }, {
                begin: "\\b(?:FALSE|TRUE)\\b"
            }, {
                begin: "\\b(?:ZERO_ROTATION)\\b"
            }, {
                begin: "\\b(?:EOF|JSON_(?:ARRAY|DELETE|FALSE|INVALID|NULL|NUMBER|OBJECT|STRING|TRUE)|NULL_KEY|TEXTURE_(?:BLANK|DEFAULT|MEDIA|PLYWOOD|TRANSPARENT)|URL_REQUEST_(?:GRANTED|DENIED))\\b"
            }, {
                begin: "\\b(?:ZERO_VECTOR|TOUCH_INVALID_(?:TEXCOORD|VECTOR))\\b"
            }]
        }
          , i = {
            className: "built_in",
            begin: "\\b(?:ll(?:AgentInExperience|(?:Create|DataSize|Delete|KeyCount|Keys|Read|Update)KeyValue|GetExperience(?:Details|ErrorMessage)|ReturnObjectsBy(?:ID|Owner)|Json(?:2List|[GS]etValue|ValueType)|Sin|Cos|Tan|Atan2|Sqrt|Pow|Abs|Fabs|Frand|Floor|Ceil|Round|Vec(?:Mag|Norm|Dist)|Rot(?:Between|2(?:Euler|Fwd|Left|Up))|(?:Euler|Axes)2Rot|Whisper|(?:Region|Owner)?Say|Shout|Listen(?:Control|Remove)?|Sensor(?:Repeat|Remove)?|Detected(?:Name|Key|Owner|Type|Pos|Vel|Grab|Rot|Group|LinkNumber)|Die|Ground|Wind|(?:[GS]et)(?:AnimationOverride|MemoryLimit|PrimMediaParams|ParcelMusicURL|Object(?:Desc|Name)|PhysicsMaterial|Status|Scale|Color|Alpha|Texture|Pos|Rot|Force|Torque)|ResetAnimationOverride|(?:Scale|Offset|Rotate)Texture|(?:Rot)?Target(?:Remove)?|(?:Stop)?MoveToTarget|Apply(?:Rotational)?Impulse|Set(?:KeyframedMotion|ContentType|RegionPos|(?:Angular)?Velocity|Buoyancy|HoverHeight|ForceAndTorque|TimerEvent|ScriptState|Damage|TextureAnim|Sound(?:Queueing|Radius)|Vehicle(?:Type|(?:Float|Vector|Rotation)Param)|(?:Touch|Sit)?Text|Camera(?:Eye|At)Offset|PrimitiveParams|ClickAction|Link(?:Alpha|Color|PrimitiveParams(?:Fast)?|Texture(?:Anim)?|Camera|Media)|RemoteScriptAccessPin|PayPrice|LocalRot)|ScaleByFactor|Get(?:(?:Max|Min)ScaleFactor|ClosestNavPoint|StaticPath|SimStats|Env|PrimitiveParams|Link(?:PrimitiveParams|Number(?:OfSides)?|Key|Name|Media)|HTTPHeader|FreeURLs|Object(?:Details|PermMask|PrimCount)|Parcel(?:MaxPrims|Details|Prim(?:Count|Owners))|Attached(?:List)?|(?:SPMax|Free|Used)Memory|Region(?:Name|TimeDilation|FPS|Corner|AgentCount)|Root(?:Position|Rotation)|UnixTime|(?:Parcel|Region)Flags|(?:Wall|GMT)clock|SimulatorHostname|BoundingBox|GeometricCenter|Creator|NumberOf(?:Prims|NotecardLines|Sides)|Animation(?:List)?|(?:Camera|Local)(?:Pos|Rot)|Vel|Accel|Omega|Time(?:stamp|OfDay)|(?:Object|CenterOf)?Mass|MassMKS|Energy|Owner|(?:Owner)?Key|SunDirection|Texture(?:Offset|Scale|Rot)|Inventory(?:Number|Name|Key|Type|Creator|PermMask)|Permissions(?:Key)?|StartParameter|List(?:Length|EntryType)|Date|Agent(?:Size|Info|Language|List)|LandOwnerAt|NotecardLine|Script(?:Name|State))|(?:Get|Reset|GetAndReset)Time|PlaySound(?:Slave)?|LoopSound(?:Master|Slave)?|(?:Trigger|Stop|Preload)Sound|(?:(?:Get|Delete)Sub|Insert)String|To(?:Upper|Lower)|Give(?:InventoryList|Money)|RezObject|(?:Stop)?LookAt|Sleep|CollisionFilter|(?:Take|Release)Controls|DetachFromAvatar|AttachToAvatar(?:Temp)?|InstantMessage|(?:GetNext)?Email|StopHover|MinEventDelay|RotLookAt|String(?:Length|Trim)|(?:Start|Stop)Animation|TargetOmega|Request(?:Experience)?Permissions|(?:Create|Break)Link|BreakAllLinks|(?:Give|Remove)Inventory|Water|PassTouches|Request(?:Agent|Inventory)Data|TeleportAgent(?:Home|GlobalCoords)?|ModifyLand|CollisionSound|ResetScript|MessageLinked|PushObject|PassCollisions|AxisAngle2Rot|Rot2(?:Axis|Angle)|A(?:cos|sin)|AngleBetween|AllowInventoryDrop|SubStringIndex|List2(?:CSV|Integer|Json|Float|String|Key|Vector|Rot|List(?:Strided)?)|DeleteSubList|List(?:Statistics|Sort|Randomize|(?:Insert|Find|Replace)List)|EdgeOfWorld|AdjustSoundVolume|Key2Name|TriggerSoundLimited|EjectFromLand|(?:CSV|ParseString)2List|OverMyLand|SameGroup|UnSit|Ground(?:Slope|Normal|Contour)|GroundRepel|(?:Set|Remove)VehicleFlags|(?:AvatarOn)?(?:Link)?SitTarget|Script(?:Danger|Profiler)|Dialog|VolumeDetect|ResetOtherScript|RemoteLoadScriptPin|(?:Open|Close)RemoteDataChannel|SendRemoteData|RemoteDataReply|(?:Integer|String)ToBase64|XorBase64|Log(?:10)?|Base64To(?:String|Integer)|ParseStringKeepNulls|RezAtRoot|RequestSimulatorData|ForceMouselook|(?:Load|Release|(?:E|Une)scape)URL|ParcelMedia(?:CommandList|Query)|ModPow|MapDestination|(?:RemoveFrom|AddTo|Reset)Land(?:Pass|Ban)List|(?:Set|Clear)CameraParams|HTTP(?:Request|Response)|TextBox|DetectedTouch(?:UV|Face|Pos|(?:N|Bin)ormal|ST)|(?:MD5|SHA1|DumpList2)String|Request(?:Secure)?URL|Clear(?:Prim|Link)Media|(?:Link)?ParticleSystem|(?:Get|Request)(?:Username|DisplayName)|RegionSayTo|CastRay|GenerateKey|TransferLindenDollars|ManageEstateAccess|(?:Create|Delete)Character|ExecCharacterCmd|Evade|FleeFrom|NavigateTo|PatrolPoints|Pursue|UpdateCharacter|WanderWithin))\\b"
        };
        return {
            illegal: ":",
            contains: [n, {
                className: "comment",
                variants: [e.COMMENT("//", "$"), e.COMMENT("/\\*", "\\*/")]
            }, r, {
                className: "section",
                variants: [{
                    begin: "\\b(?:state|default)\\b"
                }, {
                    begin: "\\b(?:state_(?:entry|exit)|touch(?:_(?:start|end))?|(?:land_)?collision(?:_(?:start|end))?|timer|listen|(?:no_)?sensor|control|(?:not_)?at_(?:rot_)?target|money|email|experience_permissions(?:_denied)?|run_time_permissions|changed|attach|dataserver|moving_(?:start|end)|link_message|(?:on|object)_rez|remote_data|http_re(?:sponse|quest)|path_update|transaction_result)\\b"
                }]
            }, i, a, {
                className: "type",
                begin: "\\b(?:integer|float|string|key|vector|quaternion|rotation|list)\\b"
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            begin: "\\[=*\\[",
            end: "\\]=*\\]",
            contains: ["self"]
        }
          , n = [e.COMMENT("--(?!\\[=*\\[)", "$"), e.COMMENT("--\\[=*\\[", "\\]=*\\]", {
            contains: [t],
            relevance: 10
        })];
        return {
            lexemes: e.UNDERSCORE_IDENT_RE,
            keywords: {
                literal: "true false nil",
                keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
                built_in: "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstringmodule next pairs pcall print rawequal rawget rawset require select setfenvsetmetatable tonumber tostring type unpack xpcall arg selfcoroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
            },
            contains: n.concat([{
                className: "function",
                beginKeywords: "function",
                end: "\\)",
                contains: [e.inherit(e.TITLE_MODE, {
                    begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
                }), {
                    className: "params",
                    begin: "\\(",
                    endsWithParent: !0,
                    contains: n
                }].concat(n)
            }, e.C_NUMBER_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                className: "string",
                begin: "\\[=*\\[",
                end: "\\]=*\\]",
                contains: [t],
                relevance: 5
            }])
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "variable",
            variants: [{
                begin: "\\$\\(" + e.UNDERSCORE_IDENT_RE + "\\)",
                contains: [e.BACKSLASH_ESCAPE]
            }, {
                begin: /\$[@%<?\^\+\*]/
            }]
        }
          , n = {
            className: "string",
            begin: /"/,
            end: /"/,
            contains: [e.BACKSLASH_ESCAPE, t]
        }
          , r = {
            className: "variable",
            begin: /\$\([\w-]+\s/,
            end: /\)/,
            keywords: {
                built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"
            },
            contains: [t]
        }
          , a = {
            begin: "^" + e.UNDERSCORE_IDENT_RE + "\\s*[:+?]?=",
            illegal: "\\n",
            returnBegin: !0,
            contains: [{
                begin: "^" + e.UNDERSCORE_IDENT_RE,
                end: "[:+?]?=",
                excludeEnd: !0
            }]
        }
          , i = {
            className: "meta",
            begin: /^\.PHONY:/,
            end: /$/,
            keywords: {
                "meta-keyword": ".PHONY"
            },
            lexemes: /[\.\w]+/
        }
          , s = {
            className: "section",
            begin: /^[^\s]+:/,
            end: /$/,
            contains: [t]
        };
        return {
            aliases: ["mk", "mak"],
            keywords: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",
            lexemes: /[\w-]+/,
            contains: [e.HASH_COMMENT_MODE, t, n, r, a, i, s]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["md", "mkdown", "mkd"],
            contains: [{
                className: "section",
                variants: [{
                    begin: "^#{1,6}",
                    end: "$"
                }, {
                    begin: "^.+?\\n[=-]{2,}$"
                }]
            }, {
                begin: "<",
                end: ">",
                subLanguage: "xml",
                relevance: 0
            }, {
                className: "bullet",
                begin: "^([*+-]|(\\d+\\.))\\s+"
            }, {
                className: "strong",
                begin: "[*_]{2}.+?[*_]{2}"
            }, {
                className: "emphasis",
                variants: [{
                    begin: "\\*.+?\\*"
                }, {
                    begin: "_.+?_",
                    relevance: 0
                }]
            }, {
                className: "quote",
                begin: "^>\\s+",
                end: "$"
            }, {
                className: "code",
                variants: [{
                    begin: "^```w*s*$",
                    end: "^```s*$"
                }, {
                    begin: "`.+?`"
                }, {
                    begin: "^( {4}|\t)",
                    end: "$",
                    relevance: 0
                }]
            }, {
                begin: "^[-\\*]{3,}",
                end: "$"
            }, {
                begin: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
                returnBegin: !0,
                contains: [{
                    className: "string",
                    begin: "\\[",
                    end: "\\]",
                    excludeBegin: !0,
                    returnEnd: !0,
                    relevance: 0
                }, {
                    className: "link",
                    begin: "\\]\\(",
                    end: "\\)",
                    excludeBegin: !0,
                    excludeEnd: !0
                }, {
                    className: "symbol",
                    begin: "\\]\\[",
                    end: "\\]",
                    excludeBegin: !0,
                    excludeEnd: !0
                }],
                relevance: 10
            }, {
                begin: /^\[[^\n]+\]:/,
                returnBegin: !0,
                contains: [{
                    className: "symbol",
                    begin: /\[/,
                    end: /\]/,
                    excludeBegin: !0,
                    excludeEnd: !0
                }, {
                    className: "link",
                    begin: /:\s*/,
                    end: /$/,
                    excludeBegin: !0
                }]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["mma"],
            lexemes: "(\\$|\\b)" + e.IDENT_RE + "\\b",
            keywords: "AbelianGroup Abort AbortKernels AbortProtect Above Abs Absolute AbsoluteCorrelation AbsoluteCorrelationFunction AbsoluteCurrentValue AbsoluteDashing AbsoluteFileName AbsoluteOptions AbsolutePointSize AbsoluteThickness AbsoluteTime AbsoluteTiming AccountingForm Accumulate Accuracy AccuracyGoal ActionDelay ActionMenu ActionMenuBox ActionMenuBoxOptions Active ActiveItem ActiveStyle AcyclicGraphQ AddOnHelpPath AddTo AdjacencyGraph AdjacencyList AdjacencyMatrix AdjustmentBox AdjustmentBoxOptions AdjustTimeSeriesForecast AffineTransform After AiryAi AiryAiPrime AiryAiZero AiryBi AiryBiPrime AiryBiZero AlgebraicIntegerQ AlgebraicNumber AlgebraicNumberDenominator AlgebraicNumberNorm AlgebraicNumberPolynomial AlgebraicNumberTrace AlgebraicRules AlgebraicRulesData Algebraics AlgebraicUnitQ Alignment AlignmentMarker AlignmentPoint All AllowedDimensions AllowGroupClose AllowInlineCells AllowKernelInitialization AllowReverseGroupClose AllowScriptLevelChange AlphaChannel AlternatingGroup AlternativeHypothesis Alternatives AmbientLight Analytic AnchoredSearch And AndersonDarlingTest AngerJ AngleBracket AngularGauge Animate AnimationCycleOffset AnimationCycleRepetitions AnimationDirection AnimationDisplayTime AnimationRate AnimationRepetitions AnimationRunning Animator AnimatorBox AnimatorBoxOptions AnimatorElements Annotation Annuity AnnuityDue Antialiasing Antisymmetric Apart ApartSquareFree Appearance AppearanceElements AppellF1 Append AppendTo Apply ArcCos ArcCosh ArcCot ArcCoth ArcCsc ArcCsch ArcSec ArcSech ArcSin ArcSinDistribution ArcSinh ArcTan ArcTanh Arg ArgMax ArgMin ArgumentCountQ ARIMAProcess ArithmeticGeometricMean ARMAProcess ARProcess Array ArrayComponents ArrayDepth ArrayFlatten ArrayPad ArrayPlot ArrayQ ArrayReshape ArrayRules Arrays Arrow Arrow3DBox ArrowBox Arrowheads AspectRatio AspectRatioFixed Assert Assuming Assumptions AstronomicalData Asynchronous AsynchronousTaskObject AsynchronousTasks AtomQ Attributes AugmentedSymmetricPolynomial AutoAction AutoDelete AutoEvaluateEvents AutoGeneratedPackage AutoIndent AutoIndentSpacings AutoItalicWords AutoloadPath AutoMatch Automatic AutomaticImageSize AutoMultiplicationSymbol AutoNumberFormatting AutoOpenNotebooks AutoOpenPalettes AutorunSequencing AutoScaling AutoScroll AutoSpacing AutoStyleOptions AutoStyleWords Axes AxesEdge AxesLabel AxesOrigin AxesStyle Axis BabyMonsterGroupB Back Background BackgroundTasksSettings Backslash Backsubstitution Backward Band BandpassFilter BandstopFilter BarabasiAlbertGraphDistribution BarChart BarChart3D BarLegend BarlowProschanImportance BarnesG BarOrigin BarSpacing BartlettHannWindow BartlettWindow BaseForm Baseline BaselinePosition BaseStyle BatesDistribution BattleLemarieWavelet Because BeckmannDistribution Beep Before Begin BeginDialogPacket BeginFrontEndInteractionPacket BeginPackage BellB BellY Below BenfordDistribution BeniniDistribution BenktanderGibratDistribution BenktanderWeibullDistribution BernoulliB BernoulliDistribution BernoulliGraphDistribution BernoulliProcess BernsteinBasis BesselFilterModel BesselI BesselJ BesselJZero BesselK BesselY BesselYZero Beta BetaBinomialDistribution BetaDistribution BetaNegativeBinomialDistribution BetaPrimeDistribution BetaRegularized BetweennessCentrality BezierCurve BezierCurve3DBox BezierCurve3DBoxOptions BezierCurveBox BezierCurveBoxOptions BezierFunction BilateralFilter Binarize BinaryFormat BinaryImageQ BinaryRead BinaryReadList BinaryWrite BinCounts BinLists Binomial BinomialDistribution BinomialProcess BinormalDistribution BiorthogonalSplineWavelet BipartiteGraphQ BirnbaumImportance BirnbaumSaundersDistribution BitAnd BitClear BitGet BitLength BitNot BitOr BitSet BitShiftLeft BitShiftRight BitXor Black BlackmanHarrisWindow BlackmanNuttallWindow BlackmanWindow Blank BlankForm BlankNullSequence BlankSequence Blend Block BlockRandom BlomqvistBeta BlomqvistBetaTest Blue Blur BodePlot BohmanWindow Bold Bookmarks Boole BooleanConsecutiveFunction BooleanConvert BooleanCountingFunction BooleanFunction BooleanGraph BooleanMaxterms BooleanMinimize BooleanMinterms Booleans BooleanTable BooleanVariables BorderDimensions BorelTannerDistribution Bottom BottomHatTransform BoundaryStyle Bounds Box BoxBaselineShift BoxData BoxDimensions Boxed Boxes BoxForm BoxFormFormatTypes BoxFrame BoxID BoxMargins BoxMatrix BoxRatios BoxRotation BoxRotationPoint BoxStyle BoxWhiskerChart Bra BracketingBar BraKet BrayCurtisDistance BreadthFirstScan Break Brown BrownForsytheTest BrownianBridgeProcess BrowserCategory BSplineBasis BSplineCurve BSplineCurve3DBox BSplineCurveBox BSplineCurveBoxOptions BSplineFunction BSplineSurface BSplineSurface3DBox BubbleChart BubbleChart3D BubbleScale BubbleSizes BulletGauge BusinessDayQ ButterflyGraph ButterworthFilterModel Button ButtonBar ButtonBox ButtonBoxOptions ButtonCell ButtonContents ButtonData ButtonEvaluator ButtonExpandable ButtonFrame ButtonFunction ButtonMargins ButtonMinHeight ButtonNote ButtonNotebook ButtonSource ButtonStyle ButtonStyleMenuListing Byte ByteCount ByteOrdering C CachedValue CacheGraphics CalendarData CalendarType CallPacket CanberraDistance Cancel CancelButton CandlestickChart Cap CapForm CapitalDifferentialD CardinalBSplineBasis CarmichaelLambda Cases Cashflow Casoratian Catalan CatalanNumber Catch CauchyDistribution CauchyWindow CayleyGraph CDF CDFDeploy CDFInformation CDFWavelet Ceiling Cell CellAutoOverwrite CellBaseline CellBoundingBox CellBracketOptions CellChangeTimes CellContents CellContext CellDingbat CellDynamicExpression CellEditDuplicate CellElementsBoundingBox CellElementSpacings CellEpilog CellEvaluationDuplicate CellEvaluationFunction CellEventActions CellFrame CellFrameColor CellFrameLabelMargins CellFrameLabels CellFrameMargins CellGroup CellGroupData CellGrouping CellGroupingRules CellHorizontalScrolling CellID CellLabel CellLabelAutoDelete CellLabelMargins CellLabelPositioning CellMargins CellObject CellOpen CellPrint CellProlog Cells CellSize CellStyle CellTags CellularAutomaton CensoredDistribution Censoring Center CenterDot CentralMoment CentralMomentGeneratingFunction CForm ChampernowneNumber ChanVeseBinarize Character CharacterEncoding CharacterEncodingsPath CharacteristicFunction CharacteristicPolynomial CharacterRange Characters ChartBaseStyle ChartElementData ChartElementDataFunction ChartElementFunction ChartElements ChartLabels ChartLayout ChartLegends ChartStyle Chebyshev1FilterModel Chebyshev2FilterModel ChebyshevDistance ChebyshevT ChebyshevU Check CheckAbort CheckAll Checkbox CheckboxBar CheckboxBox CheckboxBoxOptions ChemicalData ChessboardDistance ChiDistribution ChineseRemainder ChiSquareDistribution ChoiceButtons ChoiceDialog CholeskyDecomposition Chop Circle CircleBox CircleDot CircleMinus CirclePlus CircleTimes CirculantGraph CityData Clear ClearAll ClearAttributes ClearSystemCache ClebschGordan ClickPane Clip ClipboardNotebook ClipFill ClippingStyle ClipPlanes ClipRange Clock ClockGauge ClockwiseContourIntegral Close Closed CloseKernels ClosenessCentrality Closing ClosingAutoSave ClosingEvent ClusteringComponents CMYKColor Coarse Coefficient CoefficientArrays CoefficientDomain CoefficientList CoefficientRules CoifletWavelet Collect Colon ColonForm ColorCombine ColorConvert ColorData ColorDataFunction ColorFunction ColorFunctionScaling Colorize ColorNegate ColorOutput ColorProfileData ColorQuantize ColorReplace ColorRules ColorSelectorSettings ColorSeparate ColorSetter ColorSetterBox ColorSetterBoxOptions ColorSlider ColorSpace Column ColumnAlignments ColumnBackgrounds ColumnForm ColumnLines ColumnsEqual ColumnSpacings ColumnWidths CommonDefaultFormatTypes Commonest CommonestFilter CommonUnits CommunityBoundaryStyle CommunityGraphPlot CommunityLabels CommunityRegionStyle CompatibleUnitQ CompilationOptions CompilationTarget Compile Compiled CompiledFunction Complement CompleteGraph CompleteGraphQ CompleteKaryTree CompletionsListPacket Complex Complexes ComplexExpand ComplexInfinity ComplexityFunction ComponentMeasurements ComponentwiseContextMenu Compose ComposeList ComposeSeries Composition CompoundExpression CompoundPoissonDistribution CompoundPoissonProcess CompoundRenewalProcess Compress CompressedData Condition ConditionalExpression Conditioned Cone ConeBox ConfidenceLevel ConfidenceRange ConfidenceTransform ConfigurationPath Congruent Conjugate ConjugateTranspose Conjunction Connect ConnectedComponents ConnectedGraphQ ConnesWindow ConoverTest ConsoleMessage ConsoleMessagePacket ConsolePrint Constant ConstantArray Constants ConstrainedMax ConstrainedMin ContentPadding ContentsBoundingBox ContentSelectable ContentSize Context ContextMenu Contexts ContextToFilename ContextToFileName Continuation Continue ContinuedFraction ContinuedFractionK ContinuousAction ContinuousMarkovProcess ContinuousTimeModelQ ContinuousWaveletData ContinuousWaveletTransform ContourDetect ContourGraphics ContourIntegral ContourLabels ContourLines ContourPlot ContourPlot3D Contours ContourShading ContourSmoothing ContourStyle ContraharmonicMean Control ControlActive ControlAlignment ControllabilityGramian ControllabilityMatrix ControllableDecomposition ControllableModelQ ControllerDuration ControllerInformation ControllerInformationData ControllerLinking ControllerManipulate ControllerMethod ControllerPath ControllerState ControlPlacement ControlsRendering ControlType Convergents ConversionOptions ConversionRules ConvertToBitmapPacket ConvertToPostScript ConvertToPostScriptPacket Convolve ConwayGroupCo1 ConwayGroupCo2 ConwayGroupCo3 CoordinateChartData CoordinatesToolOptions CoordinateTransform CoordinateTransformData CoprimeQ Coproduct CopulaDistribution Copyable CopyDirectory CopyFile CopyTag CopyToClipboard CornerFilter CornerNeighbors Correlation CorrelationDistance CorrelationFunction CorrelationTest Cos Cosh CoshIntegral CosineDistance CosineWindow CosIntegral Cot Coth Count CounterAssignments CounterBox CounterBoxOptions CounterClockwiseContourIntegral CounterEvaluator CounterFunction CounterIncrements CounterStyle CounterStyleMenuListing CountRoots CountryData Covariance CovarianceEstimatorFunction CovarianceFunction CoxianDistribution CoxIngersollRossProcess CoxModel CoxModelFit CramerVonMisesTest CreateArchive CreateDialog CreateDirectory CreateDocument CreateIntermediateDirectories CreatePalette CreatePalettePacket CreateScheduledTask CreateTemporary CreateWindow CriticalityFailureImportance CriticalitySuccessImportance CriticalSection Cross CrossingDetect CrossMatrix Csc Csch CubeRoot Cubics Cuboid CuboidBox Cumulant CumulantGeneratingFunction Cup CupCap Curl CurlyDoubleQuote CurlyQuote CurrentImage CurrentlySpeakingPacket CurrentValue CurvatureFlowFilter CurveClosed Cyan CycleGraph CycleIndexPolynomial Cycles CyclicGroup Cyclotomic Cylinder CylinderBox CylindricalDecomposition D DagumDistribution DamerauLevenshteinDistance DampingFactor Darker Dashed Dashing DataCompression DataDistribution DataRange DataReversed Date DateDelimiters DateDifference DateFunction DateList DateListLogPlot DateListPlot DatePattern DatePlus DateRange DateString DateTicksFormat DaubechiesWavelet DavisDistribution DawsonF DayCount DayCountConvention DayMatchQ DayName DayPlus DayRange DayRound DeBruijnGraph Debug DebugTag Decimal DeclareKnownSymbols DeclarePackage Decompose Decrement DedekindEta Default DefaultAxesStyle DefaultBaseStyle DefaultBoxStyle DefaultButton DefaultColor DefaultControlPlacement DefaultDuplicateCellStyle DefaultDuration DefaultElement DefaultFaceGridsStyle DefaultFieldHintStyle DefaultFont DefaultFontProperties DefaultFormatType DefaultFormatTypeForStyle DefaultFrameStyle DefaultFrameTicksStyle DefaultGridLinesStyle DefaultInlineFormatType DefaultInputFormatType DefaultLabelStyle DefaultMenuStyle DefaultNaturalLanguage DefaultNewCellStyle DefaultNewInlineCellStyle DefaultNotebook DefaultOptions DefaultOutputFormatType DefaultStyle DefaultStyleDefinitions DefaultTextFormatType DefaultTextInlineFormatType DefaultTicksStyle DefaultTooltipStyle DefaultValues Defer DefineExternal DefineInputStreamMethod DefineOutputStreamMethod Definition Degree DegreeCentrality DegreeGraphDistribution DegreeLexicographic DegreeReverseLexicographic Deinitialization Del Deletable Delete DeleteBorderComponents DeleteCases DeleteContents DeleteDirectory DeleteDuplicates DeleteFile DeleteSmallComponents DeleteWithContents DeletionWarning Delimiter DelimiterFlashTime DelimiterMatching Delimiters Denominator DensityGraphics DensityHistogram DensityPlot DependentVariables Deploy Deployed Depth DepthFirstScan Derivative DerivativeFilter DescriptorStateSpace DesignMatrix Det DGaussianWavelet DiacriticalPositioning Diagonal DiagonalMatrix Dialog DialogIndent DialogInput DialogLevel DialogNotebook DialogProlog DialogReturn DialogSymbols Diamond DiamondMatrix DiceDissimilarity DictionaryLookup DifferenceDelta DifferenceOrder DifferenceRoot DifferenceRootReduce Differences DifferentialD DifferentialRoot DifferentialRootReduce DifferentiatorFilter DigitBlock DigitBlockMinimum DigitCharacter DigitCount DigitQ DihedralGroup Dilation Dimensions DiracComb DiracDelta DirectedEdge DirectedEdges DirectedGraph DirectedGraphQ DirectedInfinity Direction Directive Directory DirectoryName DirectoryQ DirectoryStack DirichletCharacter DirichletConvolve DirichletDistribution DirichletL DirichletTransform DirichletWindow DisableConsolePrintPacket DiscreteChirpZTransform DiscreteConvolve DiscreteDelta DiscreteHadamardTransform DiscreteIndicator DiscreteLQEstimatorGains DiscreteLQRegulatorGains DiscreteLyapunovSolve DiscreteMarkovProcess DiscretePlot DiscretePlot3D DiscreteRatio DiscreteRiccatiSolve DiscreteShift DiscreteTimeModelQ DiscreteUniformDistribution DiscreteVariables DiscreteWaveletData DiscreteWaveletPacketTransform DiscreteWaveletTransform Discriminant Disjunction Disk DiskBox DiskMatrix Dispatch DispersionEstimatorFunction Display DisplayAllSteps DisplayEndPacket DisplayFlushImagePacket DisplayForm DisplayFunction DisplayPacket DisplayRules DisplaySetSizePacket DisplayString DisplayTemporary DisplayWith DisplayWithRef DisplayWithVariable DistanceFunction DistanceTransform Distribute Distributed DistributedContexts DistributeDefinitions DistributionChart DistributionDomain DistributionFitTest DistributionParameterAssumptions DistributionParameterQ Dithering Div Divergence Divide DivideBy Dividers Divisible Divisors DivisorSigma DivisorSum DMSList DMSString Do DockedCells DocumentNotebook DominantColors DOSTextFormat Dot DotDashed DotEqual Dotted DoubleBracketingBar DoubleContourIntegral DoubleDownArrow DoubleLeftArrow DoubleLeftRightArrow DoubleLeftTee DoubleLongLeftArrow DoubleLongLeftRightArrow DoubleLongRightArrow DoubleRightArrow DoubleRightTee DoubleUpArrow DoubleUpDownArrow DoubleVerticalBar DoublyInfinite Down DownArrow DownArrowBar DownArrowUpArrow DownLeftRightVector DownLeftTeeVector DownLeftVector DownLeftVectorBar DownRightTeeVector DownRightVector DownRightVectorBar Downsample DownTee DownTeeArrow DownValues DragAndDrop DrawEdges DrawFrontFaces DrawHighlighted Drop DSolve Dt DualLinearProgramming DualSystemsModel DumpGet DumpSave DuplicateFreeQ Dynamic DynamicBox DynamicBoxOptions DynamicEvaluationTimeout DynamicLocation DynamicModule DynamicModuleBox DynamicModuleBoxOptions DynamicModuleParent DynamicModuleValues DynamicName DynamicNamespace DynamicReference DynamicSetting DynamicUpdating DynamicWrapper DynamicWrapperBox DynamicWrapperBoxOptions E EccentricityCentrality EdgeAdd EdgeBetweennessCentrality EdgeCapacity EdgeCapForm EdgeColor EdgeConnectivity EdgeCost EdgeCount EdgeCoverQ EdgeDashing EdgeDelete EdgeDetect EdgeForm EdgeIndex EdgeJoinForm EdgeLabeling EdgeLabels EdgeLabelStyle EdgeList EdgeOpacity EdgeQ EdgeRenderingFunction EdgeRules EdgeShapeFunction EdgeStyle EdgeThickness EdgeWeight Editable EditButtonSettings EditCellTagsSettings EditDistance EffectiveInterest Eigensystem Eigenvalues EigenvectorCentrality Eigenvectors Element ElementData Eliminate EliminationOrder EllipticE EllipticExp EllipticExpPrime EllipticF EllipticFilterModel EllipticK EllipticLog EllipticNomeQ EllipticPi EllipticReducedHalfPeriods EllipticTheta EllipticThetaPrime EmitSound EmphasizeSyntaxErrors EmpiricalDistribution Empty EmptyGraphQ EnableConsolePrintPacket Enabled Encode End EndAdd EndDialogPacket EndFrontEndInteractionPacket EndOfFile EndOfLine EndOfString EndPackage EngineeringForm Enter EnterExpressionPacket EnterTextPacket Entropy EntropyFilter Environment Epilog Equal EqualColumns EqualRows EqualTilde EquatedTo Equilibrium EquirippleFilterKernel Equivalent Erf Erfc Erfi ErlangB ErlangC ErlangDistribution Erosion ErrorBox ErrorBoxOptions ErrorNorm ErrorPacket ErrorsDialogSettings EstimatedDistribution EstimatedProcess EstimatorGains EstimatorRegulator EuclideanDistance EulerE EulerGamma EulerianGraphQ EulerPhi Evaluatable Evaluate Evaluated EvaluatePacket EvaluationCell EvaluationCompletionAction EvaluationElements EvaluationMode EvaluationMonitor EvaluationNotebook EvaluationObject EvaluationOrder Evaluator EvaluatorNames EvenQ EventData EventEvaluator EventHandler EventHandlerTag EventLabels ExactBlackmanWindow ExactNumberQ ExactRootIsolation ExampleData Except ExcludedForms ExcludePods Exclusions ExclusionsStyle Exists Exit ExitDialog Exp Expand ExpandAll ExpandDenominator ExpandFileName ExpandNumerator Expectation ExpectationE ExpectedValue ExpGammaDistribution ExpIntegralE ExpIntegralEi Exponent ExponentFunction ExponentialDistribution ExponentialFamily ExponentialGeneratingFunction ExponentialMovingAverage ExponentialPowerDistribution ExponentPosition ExponentStep Export ExportAutoReplacements ExportPacket ExportString Expression ExpressionCell ExpressionPacket ExpToTrig ExtendedGCD Extension ExtentElementFunction ExtentMarkers ExtentSize ExternalCall ExternalDataCharacterEncoding Extract ExtractArchive ExtremeValueDistribution FaceForm FaceGrids FaceGridsStyle Factor FactorComplete Factorial Factorial2 FactorialMoment FactorialMomentGeneratingFunction FactorialPower FactorInteger FactorList FactorSquareFree FactorSquareFreeList FactorTerms FactorTermsList Fail FailureDistribution False FARIMAProcess FEDisableConsolePrintPacket FeedbackSector FeedbackSectorStyle FeedbackType FEEnableConsolePrintPacket Fibonacci FieldHint FieldHintStyle FieldMasked FieldSize File FileBaseName FileByteCount FileDate FileExistsQ FileExtension FileFormat FileHash FileInformation FileName FileNameDepth FileNameDialogSettings FileNameDrop FileNameJoin FileNames FileNameSetter FileNameSplit FileNameTake FilePrint FileType FilledCurve FilledCurveBox Filling FillingStyle FillingTransform FilterRules FinancialBond FinancialData FinancialDerivative FinancialIndicator Find FindArgMax FindArgMin FindClique FindClusters FindCurvePath FindDistributionParameters FindDivisions FindEdgeCover FindEdgeCut FindEulerianCycle FindFaces FindFile FindFit FindGeneratingFunction FindGeoLocation FindGeometricTransform FindGraphCommunities FindGraphIsomorphism FindGraphPartition FindHamiltonianCycle FindIndependentEdgeSet FindIndependentVertexSet FindInstance FindIntegerNullVector FindKClan FindKClique FindKClub FindKPlex FindLibrary FindLinearRecurrence FindList FindMaximum FindMaximumFlow FindMaxValue FindMinimum FindMinimumCostFlow FindMinimumCut FindMinValue FindPermutation FindPostmanTour FindProcessParameters FindRoot FindSequenceFunction FindSettings FindShortestPath FindShortestTour FindThreshold FindVertexCover FindVertexCut Fine FinishDynamic FiniteAbelianGroupCount FiniteGroupCount FiniteGroupData First FirstPassageTimeDistribution FischerGroupFi22 FischerGroupFi23 FischerGroupFi24Prime FisherHypergeometricDistribution FisherRatioTest FisherZDistribution Fit FitAll FittedModel FixedPoint FixedPointList FlashSelection Flat Flatten FlattenAt FlatTopWindow FlipView Floor FlushPrintOutputPacket Fold FoldList Font FontColor FontFamily FontForm FontName FontOpacity FontPostScriptName FontProperties FontReencoding FontSize FontSlant FontSubstitutions FontTracking FontVariations FontWeight For ForAll Format FormatRules FormatType FormatTypeAutoConvert FormatValues FormBox FormBoxOptions FortranForm Forward ForwardBackward Fourier FourierCoefficient FourierCosCoefficient FourierCosSeries FourierCosTransform FourierDCT FourierDCTFilter FourierDCTMatrix FourierDST FourierDSTMatrix FourierMatrix FourierParameters FourierSequenceTransform FourierSeries FourierSinCoefficient FourierSinSeries FourierSinTransform FourierTransform FourierTrigSeries FractionalBrownianMotionProcess FractionalPart FractionBox FractionBoxOptions FractionLine Frame FrameBox FrameBoxOptions Framed FrameInset FrameLabel Frameless FrameMargins FrameStyle FrameTicks FrameTicksStyle FRatioDistribution FrechetDistribution FreeQ FrequencySamplingFilterKernel FresnelC FresnelS Friday FrobeniusNumber FrobeniusSolve FromCharacterCode FromCoefficientRules FromContinuedFraction FromDate FromDigits FromDMS Front FrontEndDynamicExpression FrontEndEventActions FrontEndExecute FrontEndObject FrontEndResource FrontEndResourceString FrontEndStackSize FrontEndToken FrontEndTokenExecute FrontEndValueCache FrontEndVersion FrontFaceColor FrontFaceOpacity Full FullAxes FullDefinition FullForm FullGraphics FullOptions FullSimplify Function FunctionExpand FunctionInterpolation FunctionSpace FussellVeselyImportance GaborFilter GaborMatrix GaborWavelet GainMargins GainPhaseMargins Gamma GammaDistribution GammaRegularized GapPenalty Gather GatherBy GaugeFaceElementFunction GaugeFaceStyle GaugeFrameElementFunction GaugeFrameSize GaugeFrameStyle GaugeLabels GaugeMarkers GaugeStyle GaussianFilter GaussianIntegers GaussianMatrix GaussianWindow GCD GegenbauerC General GeneralizedLinearModelFit GenerateConditions GeneratedCell GeneratedParameters GeneratingFunction Generic GenericCylindricalDecomposition GenomeData GenomeLookup GeodesicClosing GeodesicDilation GeodesicErosion GeodesicOpening GeoDestination GeodesyData GeoDirection GeoDistance GeoGridPosition GeometricBrownianMotionProcess GeometricDistribution GeometricMean GeometricMeanFilter GeometricTransformation GeometricTransformation3DBox GeometricTransformation3DBoxOptions GeometricTransformationBox GeometricTransformationBoxOptions GeoPosition GeoPositionENU GeoPositionXYZ GeoProjectionData GestureHandler GestureHandlerTag Get GetBoundingBoxSizePacket GetContext GetEnvironment GetFileName GetFrontEndOptionsDataPacket GetLinebreakInformationPacket GetMenusPacket GetPageBreakInformationPacket Glaisher GlobalClusteringCoefficient GlobalPreferences GlobalSession Glow GoldenRatio GompertzMakehamDistribution GoodmanKruskalGamma GoodmanKruskalGammaTest Goto Grad Gradient GradientFilter GradientOrientationFilter Graph GraphAssortativity GraphCenter GraphComplement GraphData GraphDensity GraphDiameter GraphDifference GraphDisjointUnion GraphDistance GraphDistanceMatrix GraphElementData GraphEmbedding GraphHighlight GraphHighlightStyle GraphHub Graphics Graphics3D Graphics3DBox Graphics3DBoxOptions GraphicsArray GraphicsBaseline GraphicsBox GraphicsBoxOptions GraphicsColor GraphicsColumn GraphicsComplex GraphicsComplex3DBox GraphicsComplex3DBoxOptions GraphicsComplexBox GraphicsComplexBoxOptions GraphicsContents GraphicsData GraphicsGrid GraphicsGridBox GraphicsGroup GraphicsGroup3DBox GraphicsGroup3DBoxOptions GraphicsGroupBox GraphicsGroupBoxOptions GraphicsGrouping GraphicsHighlightColor GraphicsRow GraphicsSpacing GraphicsStyle GraphIntersection GraphLayout GraphLinkEfficiency GraphPeriphery GraphPlot GraphPlot3D GraphPower GraphPropertyDistribution GraphQ GraphRadius GraphReciprocity GraphRoot GraphStyle GraphUnion Gray GrayLevel GreatCircleDistance Greater GreaterEqual GreaterEqualLess GreaterFullEqual GreaterGreater GreaterLess GreaterSlantEqual GreaterTilde Green Grid GridBaseline GridBox GridBoxAlignment GridBoxBackground GridBoxDividers GridBoxFrame GridBoxItemSize GridBoxItemStyle GridBoxOptions GridBoxSpacings GridCreationSettings GridDefaultElement GridElementStyleOptions GridFrame GridFrameMargins GridGraph GridLines GridLinesStyle GroebnerBasis GroupActionBase GroupCentralizer GroupElementFromWord GroupElementPosition GroupElementQ GroupElements GroupElementToWord GroupGenerators GroupMultiplicationTable GroupOrbits GroupOrder GroupPageBreakWithin GroupSetwiseStabilizer GroupStabilizer GroupStabilizerChain Gudermannian GumbelDistribution HaarWavelet HadamardMatrix HalfNormalDistribution HamiltonianGraphQ HammingDistance HammingWindow HankelH1 HankelH2 HankelMatrix HannPoissonWindow HannWindow HaradaNortonGroupHN HararyGraph HarmonicMean HarmonicMeanFilter HarmonicNumber Hash HashTable Haversine HazardFunction Head HeadCompose Heads HeavisideLambda HeavisidePi HeavisideTheta HeldGroupHe HeldPart HelpBrowserLookup HelpBrowserNotebook HelpBrowserSettings HermiteDecomposition HermiteH HermitianMatrixQ HessenbergDecomposition Hessian HexadecimalCharacter Hexahedron HexahedronBox HexahedronBoxOptions HiddenSurface HighlightGraph HighlightImage HighpassFilter HigmanSimsGroupHS HilbertFilter HilbertMatrix Histogram Histogram3D HistogramDistribution HistogramList HistogramTransform HistogramTransformInterpolation HitMissTransform HITSCentrality HodgeDual HoeffdingD HoeffdingDTest Hold HoldAll HoldAllComplete HoldComplete HoldFirst HoldForm HoldPattern HoldRest HolidayCalendar HomeDirectory HomePage Horizontal HorizontalForm HorizontalGauge HorizontalScrollPosition HornerForm HotellingTSquareDistribution HoytDistribution HTMLSave Hue HumpDownHump HumpEqual HurwitzLerchPhi HurwitzZeta HyperbolicDistribution HypercubeGraph HyperexponentialDistribution Hyperfactorial Hypergeometric0F1 Hypergeometric0F1Regularized Hypergeometric1F1 Hypergeometric1F1Regularized Hypergeometric2F1 Hypergeometric2F1Regularized HypergeometricDistribution HypergeometricPFQ HypergeometricPFQRegularized HypergeometricU Hyperlink HyperlinkCreationSettings Hyphenation HyphenationOptions HypoexponentialDistribution HypothesisTestData I Identity IdentityMatrix If IgnoreCase Im Image Image3D Image3DSlices ImageAccumulate ImageAdd ImageAdjust ImageAlign ImageApply ImageAspectRatio ImageAssemble ImageCache ImageCacheValid ImageCapture ImageChannels ImageClip ImageColorSpace ImageCompose ImageConvolve ImageCooccurrence ImageCorners ImageCorrelate ImageCorrespondingPoints ImageCrop ImageData ImageDataPacket ImageDeconvolve ImageDemosaic ImageDifference ImageDimensions ImageDistance ImageEffect ImageFeatureTrack ImageFileApply ImageFileFilter ImageFileScan ImageFilter ImageForestingComponents ImageForwardTransformation ImageHistogram ImageKeypoints ImageLevels ImageLines ImageMargins ImageMarkers ImageMeasurements ImageMultiply ImageOffset ImagePad ImagePadding ImagePartition ImagePeriodogram ImagePerspectiveTransformation ImageQ ImageRangeCache ImageReflect ImageRegion ImageResize ImageResolution ImageRotate ImageRotated ImageScaled ImageScan ImageSize ImageSizeAction ImageSizeCache ImageSizeMultipliers ImageSizeRaw ImageSubtract ImageTake ImageTransformation ImageTrim ImageType ImageValue ImageValuePositions Implies Import ImportAutoReplacements ImportString ImprovementImportance In IncidenceGraph IncidenceList IncidenceMatrix IncludeConstantBasis IncludeFileExtension IncludePods IncludeSingularTerm Increment Indent IndentingNewlineSpacings IndentMaxFraction IndependenceTest IndependentEdgeSetQ IndependentUnit IndependentVertexSetQ Indeterminate IndexCreationOptions Indexed IndexGraph IndexTag Inequality InexactNumberQ InexactNumbers Infinity Infix Information Inherited InheritScope Initialization InitializationCell InitializationCellEvaluation InitializationCellWarning InlineCounterAssignments InlineCounterIncrements InlineRules Inner Inpaint Input InputAliases InputAssumptions InputAutoReplacements InputField InputFieldBox InputFieldBoxOptions InputForm InputGrouping InputNamePacket InputNotebook InputPacket InputSettings InputStream InputString InputStringPacket InputToBoxFormPacket Insert InsertionPointObject InsertResults Inset Inset3DBox Inset3DBoxOptions InsetBox InsetBoxOptions Install InstallService InString Integer IntegerDigits IntegerExponent IntegerLength IntegerPart IntegerPartitions IntegerQ Integers IntegerString Integral Integrate Interactive InteractiveTradingChart Interlaced Interleaving InternallyBalancedDecomposition InterpolatingFunction InterpolatingPolynomial Interpolation InterpolationOrder InterpolationPoints InterpolationPrecision Interpretation InterpretationBox InterpretationBoxOptions InterpretationFunction InterpretTemplate InterquartileRange Interrupt InterruptSettings Intersection Interval IntervalIntersection IntervalMemberQ IntervalUnion Inverse InverseBetaRegularized InverseCDF InverseChiSquareDistribution InverseContinuousWaveletTransform InverseDistanceTransform InverseEllipticNomeQ InverseErf InverseErfc InverseFourier InverseFourierCosTransform InverseFourierSequenceTransform InverseFourierSinTransform InverseFourierTransform InverseFunction InverseFunctions InverseGammaDistribution InverseGammaRegularized InverseGaussianDistribution InverseGudermannian InverseHaversine InverseJacobiCD InverseJacobiCN InverseJacobiCS InverseJacobiDC InverseJacobiDN InverseJacobiDS InverseJacobiNC InverseJacobiND InverseJacobiNS InverseJacobiSC InverseJacobiSD InverseJacobiSN InverseLaplaceTransform InversePermutation InverseRadon InverseSeries InverseSurvivalFunction InverseWaveletTransform InverseWeierstrassP InverseZTransform Invisible InvisibleApplication InvisibleTimes IrreduciblePolynomialQ IsolatingInterval IsomorphicGraphQ IsotopeData Italic Item ItemBox ItemBoxOptions ItemSize ItemStyle ItoProcess JaccardDissimilarity JacobiAmplitude Jacobian JacobiCD JacobiCN JacobiCS JacobiDC JacobiDN JacobiDS JacobiNC JacobiND JacobiNS JacobiP JacobiSC JacobiSD JacobiSN JacobiSymbol JacobiZeta JankoGroupJ1 JankoGroupJ2 JankoGroupJ3 JankoGroupJ4 JarqueBeraALMTest JohnsonDistribution Join Joined JoinedCurve JoinedCurveBox JoinForm JordanDecomposition JordanModelDecomposition K KagiChart KaiserBesselWindow KaiserWindow KalmanEstimator KalmanFilter KarhunenLoeveDecomposition KaryTree KatzCentrality KCoreComponents KDistribution KelvinBei KelvinBer KelvinKei KelvinKer KendallTau KendallTauTest KernelExecute KernelMixtureDistribution KernelObject Kernels Ket Khinchin KirchhoffGraph KirchhoffMatrix KleinInvariantJ KnightTourGraph KnotData KnownUnitQ KolmogorovSmirnovTest KroneckerDelta KroneckerModelDecomposition KroneckerProduct KroneckerSymbol KuiperTest KumaraswamyDistribution Kurtosis KuwaharaFilter Label Labeled LabeledSlider LabelingFunction LabelStyle LaguerreL LambdaComponents LambertW LanczosWindow LandauDistribution Language LanguageCategory LaplaceDistribution LaplaceTransform Laplacian LaplacianFilter LaplacianGaussianFilter Large Larger Last Latitude LatitudeLongitude LatticeData LatticeReduce Launch LaunchKernels LayeredGraphPlot LayerSizeFunction LayoutInformation LCM LeafCount LeapYearQ LeastSquares LeastSquaresFilterKernel Left LeftArrow LeftArrowBar LeftArrowRightArrow LeftDownTeeVector LeftDownVector LeftDownVectorBar LeftRightArrow LeftRightVector LeftTee LeftTeeArrow LeftTeeVector LeftTriangle LeftTriangleBar LeftTriangleEqual LeftUpDownVector LeftUpTeeVector LeftUpVector LeftUpVectorBar LeftVector LeftVectorBar LegendAppearance Legended LegendFunction LegendLabel LegendLayout LegendMargins LegendMarkers LegendMarkerSize LegendreP LegendreQ LegendreType Length LengthWhile LerchPhi Less LessEqual LessEqualGreater LessFullEqual LessGreater LessLess LessSlantEqual LessTilde LetterCharacter LetterQ Level LeveneTest LeviCivitaTensor LevyDistribution Lexicographic LibraryFunction LibraryFunctionError LibraryFunctionInformation LibraryFunctionLoad LibraryFunctionUnload LibraryLoad LibraryUnload LicenseID LiftingFilterData LiftingWaveletTransform LightBlue LightBrown LightCyan Lighter LightGray LightGreen Lighting LightingAngle LightMagenta LightOrange LightPink LightPurple LightRed LightSources LightYellow Likelihood Limit LimitsPositioning LimitsPositioningTokens LindleyDistribution Line Line3DBox LinearFilter LinearFractionalTransform LinearModelFit LinearOffsetFunction LinearProgramming LinearRecurrence LinearSolve LinearSolveFunction LineBox LineBreak LinebreakAdjustments LineBreakChart LineBreakWithin LineColor LineForm LineGraph LineIndent LineIndentMaxFraction LineIntegralConvolutionPlot LineIntegralConvolutionScale LineLegend LineOpacity LineSpacing LineWrapParts LinkActivate LinkClose LinkConnect LinkConnectedQ LinkCreate LinkError LinkFlush LinkFunction LinkHost LinkInterrupt LinkLaunch LinkMode LinkObject LinkOpen LinkOptions LinkPatterns LinkProtocol LinkRead LinkReadHeld LinkReadyQ Links LinkWrite LinkWriteHeld LiouvilleLambda List Listable ListAnimate ListContourPlot ListContourPlot3D ListConvolve ListCorrelate ListCurvePathPlot ListDeconvolve ListDensityPlot Listen ListFourierSequenceTransform ListInterpolation ListLineIntegralConvolutionPlot ListLinePlot ListLogLinearPlot ListLogLogPlot ListLogPlot ListPicker ListPickerBox ListPickerBoxBackground ListPickerBoxOptions ListPlay ListPlot ListPlot3D ListPointPlot3D ListPolarPlot ListQ ListStreamDensityPlot ListStreamPlot ListSurfacePlot3D ListVectorDensityPlot ListVectorPlot ListVectorPlot3D ListZTransform Literal LiteralSearch LocalClusteringCoefficient LocalizeVariables LocationEquivalenceTest LocationTest Locator LocatorAutoCreate LocatorBox LocatorBoxOptions LocatorCentering LocatorPane LocatorPaneBox LocatorPaneBoxOptions LocatorRegion Locked Log Log10 Log2 LogBarnesG LogGamma LogGammaDistribution LogicalExpand LogIntegral LogisticDistribution LogitModelFit LogLikelihood LogLinearPlot LogLogisticDistribution LogLogPlot LogMultinormalDistribution LogNormalDistribution LogPlot LogRankTest LogSeriesDistribution LongEqual Longest LongestAscendingSequence LongestCommonSequence LongestCommonSequencePositions LongestCommonSubsequence LongestCommonSubsequencePositions LongestMatch LongForm Longitude LongLeftArrow LongLeftRightArrow LongRightArrow Loopback LoopFreeGraphQ LowerCaseQ LowerLeftArrow LowerRightArrow LowerTriangularize LowpassFilter LQEstimatorGains LQGRegulator LQOutputRegulatorGains LQRegulatorGains LUBackSubstitution LucasL LuccioSamiComponents LUDecomposition LyapunovSolve LyonsGroupLy MachineID MachineName MachineNumberQ MachinePrecision MacintoshSystemPageSetup Magenta Magnification Magnify MainSolve MaintainDynamicCaches Majority MakeBoxes MakeExpression MakeRules MangoldtLambda ManhattanDistance Manipulate Manipulator MannWhitneyTest MantissaExponent Manual Map MapAll MapAt MapIndexed MAProcess MapThread MarcumQ MardiaCombinedTest MardiaKurtosisTest MardiaSkewnessTest MarginalDistribution MarkovProcessProperties Masking MatchingDissimilarity MatchLocalNameQ MatchLocalNames MatchQ Material MathematicaNotation MathieuC MathieuCharacteristicA MathieuCharacteristicB MathieuCharacteristicExponent MathieuCPrime MathieuGroupM11 MathieuGroupM12 MathieuGroupM22 MathieuGroupM23 MathieuGroupM24 MathieuS MathieuSPrime MathMLForm MathMLText Matrices MatrixExp MatrixForm MatrixFunction MatrixLog MatrixPlot MatrixPower MatrixQ MatrixRank Max MaxBend MaxDetect MaxExtraBandwidths MaxExtraConditions MaxFeatures MaxFilter Maximize MaxIterations MaxMemoryUsed MaxMixtureKernels MaxPlotPoints MaxPoints MaxRecursion MaxStableDistribution MaxStepFraction MaxSteps MaxStepSize MaxValue MaxwellDistribution McLaughlinGroupMcL Mean MeanClusteringCoefficient MeanDegreeConnectivity MeanDeviation MeanFilter MeanGraphDistance MeanNeighborDegree MeanShift MeanShiftFilter Median MedianDeviation MedianFilter Medium MeijerG MeixnerDistribution MemberQ MemoryConstrained MemoryInUse Menu MenuAppearance MenuCommandKey MenuEvaluator MenuItem MenuPacket MenuSortingValue MenuStyle MenuView MergeDifferences Mesh MeshFunctions MeshRange MeshShading MeshStyle Message MessageDialog MessageList MessageName MessageOptions MessagePacket Messages MessagesNotebook MetaCharacters MetaInformation Method MethodOptions MexicanHatWavelet MeyerWavelet Min MinDetect MinFilter MinimalPolynomial MinimalStateSpaceModel Minimize Minors MinRecursion MinSize MinStableDistribution Minus MinusPlus MinValue Missing MissingDataMethod MittagLefflerE MixedRadix MixedRadixQuantity MixtureDistribution Mod Modal Mode Modular ModularLambda Module Modulus MoebiusMu Moment Momentary MomentConvert MomentEvaluate MomentGeneratingFunction Monday Monitor MonomialList MonomialOrder MonsterGroupM MorletWavelet MorphologicalBinarize MorphologicalBranchPoints MorphologicalComponents MorphologicalEulerNumber MorphologicalGraph MorphologicalPerimeter MorphologicalTransform Most MouseAnnotation MouseAppearance MouseAppearanceTag MouseButtons Mouseover MousePointerNote MousePosition MovingAverage MovingMedian MoyalDistribution MultiedgeStyle MultilaunchWarning MultiLetterItalics MultiLetterStyle MultilineFunction Multinomial MultinomialDistribution MultinormalDistribution MultiplicativeOrder Multiplicity Multiselection MultivariateHypergeometricDistribution MultivariatePoissonDistribution MultivariateTDistribution N NakagamiDistribution NameQ Names NamespaceBox Nand NArgMax NArgMin NBernoulliB NCache NDSolve NDSolveValue Nearest NearestFunction NeedCurrentFrontEndPackagePacket NeedCurrentFrontEndSymbolsPacket NeedlemanWunschSimilarity Needs Negative NegativeBinomialDistribution NegativeMultinomialDistribution NeighborhoodGraph Nest NestedGreaterGreater NestedLessLess NestedScriptRules NestList NestWhile NestWhileList NevilleThetaC NevilleThetaD NevilleThetaN NevilleThetaS NewPrimitiveStyle NExpectation Next NextPrime NHoldAll NHoldFirst NHoldRest NicholsGridLines NicholsPlot NIntegrate NMaximize NMaxValue NMinimize NMinValue NominalVariables NonAssociative NoncentralBetaDistribution NoncentralChiSquareDistribution NoncentralFRatioDistribution NoncentralStudentTDistribution NonCommutativeMultiply NonConstants None NonlinearModelFit NonlocalMeansFilter NonNegative NonPositive Nor NorlundB Norm Normal NormalDistribution NormalGrouping Normalize NormalizedSquaredEuclideanDistance NormalsFunction NormFunction Not NotCongruent NotCupCap NotDoubleVerticalBar Notebook NotebookApply NotebookAutoSave NotebookClose NotebookConvertSettings NotebookCreate NotebookCreateReturnObject NotebookDefault NotebookDelete NotebookDirectory NotebookDynamicExpression NotebookEvaluate NotebookEventActions NotebookFileName NotebookFind NotebookFindReturnObject NotebookGet NotebookGetLayoutInformationPacket NotebookGetMisspellingsPacket NotebookInformation NotebookInterfaceObject NotebookLocate NotebookObject NotebookOpen NotebookOpenReturnObject NotebookPath NotebookPrint NotebookPut NotebookPutReturnObject NotebookRead NotebookResetGeneratedCells Notebooks NotebookSave NotebookSaveAs NotebookSelection NotebookSetupLayoutInformationPacket NotebooksMenu NotebookWrite NotElement NotEqualTilde NotExists NotGreater NotGreaterEqual NotGreaterFullEqual NotGreaterGreater NotGreaterLess NotGreaterSlantEqual NotGreaterTilde NotHumpDownHump NotHumpEqual NotLeftTriangle NotLeftTriangleBar NotLeftTriangleEqual NotLess NotLessEqual NotLessFullEqual NotLessGreater NotLessLess NotLessSlantEqual NotLessTilde NotNestedGreaterGreater NotNestedLessLess NotPrecedes NotPrecedesEqual NotPrecedesSlantEqual NotPrecedesTilde NotReverseElement NotRightTriangle NotRightTriangleBar NotRightTriangleEqual NotSquareSubset NotSquareSubsetEqual NotSquareSuperset NotSquareSupersetEqual NotSubset NotSubsetEqual NotSucceeds NotSucceedsEqual NotSucceedsSlantEqual NotSucceedsTilde NotSuperset NotSupersetEqual NotTilde NotTildeEqual NotTildeFullEqual NotTildeTilde NotVerticalBar NProbability NProduct NProductFactors NRoots NSolve NSum NSumTerms Null NullRecords NullSpace NullWords Number NumberFieldClassNumber NumberFieldDiscriminant NumberFieldFundamentalUnits NumberFieldIntegralBasis NumberFieldNormRepresentatives NumberFieldRegulator NumberFieldRootsOfUnity NumberFieldSignature NumberForm NumberFormat NumberMarks NumberMultiplier NumberPadding NumberPoint NumberQ NumberSeparator NumberSigns NumberString Numerator NumericFunction NumericQ NuttallWindow NValues NyquistGridLines NyquistPlot O ObservabilityGramian ObservabilityMatrix ObservableDecomposition ObservableModelQ OddQ Off Offset OLEData On ONanGroupON OneIdentity Opacity Open OpenAppend Opener OpenerBox OpenerBoxOptions OpenerView OpenFunctionInspectorPacket Opening OpenRead OpenSpecialOptions OpenTemporary OpenWrite Operate OperatingSystem OptimumFlowData Optional OptionInspectorSettings OptionQ Options OptionsPacket OptionsPattern OptionValue OptionValueBox OptionValueBoxOptions Or Orange Order OrderDistribution OrderedQ Ordering Orderless OrnsteinUhlenbeckProcess Orthogonalize Out Outer OutputAutoOverwrite OutputControllabilityMatrix OutputControllableModelQ OutputForm OutputFormData OutputGrouping OutputMathEditExpression OutputNamePacket OutputResponse OutputSizeLimit OutputStream Over OverBar OverDot Overflow OverHat Overlaps Overlay OverlayBox OverlayBoxOptions Overscript OverscriptBox OverscriptBoxOptions OverTilde OverVector OwenT OwnValues PackingMethod PaddedForm Padding PadeApproximant PadLeft PadRight PageBreakAbove PageBreakBelow PageBreakWithin PageFooterLines PageFooters PageHeaderLines PageHeaders PageHeight PageRankCentrality PageWidth PairedBarChart PairedHistogram PairedSmoothHistogram PairedTTest PairedZTest PaletteNotebook PalettePath Pane PaneBox PaneBoxOptions Panel PanelBox PanelBoxOptions Paneled PaneSelector PaneSelectorBox PaneSelectorBoxOptions PaperWidth ParabolicCylinderD ParagraphIndent ParagraphSpacing ParallelArray ParallelCombine ParallelDo ParallelEvaluate Parallelization Parallelize ParallelMap ParallelNeeds ParallelProduct ParallelSubmit ParallelSum ParallelTable ParallelTry Parameter ParameterEstimator ParameterMixtureDistribution ParameterVariables ParametricFunction ParametricNDSolve ParametricNDSolveValue ParametricPlot ParametricPlot3D ParentConnect ParentDirectory ParentForm Parenthesize ParentList ParetoDistribution Part PartialCorrelationFunction PartialD ParticleData Partition PartitionsP PartitionsQ ParzenWindow PascalDistribution PassEventsDown PassEventsUp Paste PasteBoxFormInlineCells PasteButton Path PathGraph PathGraphQ Pattern PatternSequence PatternTest PauliMatrix PaulWavelet Pause PausedTime PDF PearsonChiSquareTest PearsonCorrelationTest PearsonDistribution PerformanceGoal PeriodicInterpolation Periodogram PeriodogramArray PermutationCycles PermutationCyclesQ PermutationGroup PermutationLength PermutationList PermutationListQ PermutationMax PermutationMin PermutationOrder PermutationPower PermutationProduct PermutationReplace Permutations PermutationSupport Permute PeronaMalikFilter Perpendicular PERTDistribution PetersenGraph PhaseMargins Pi Pick PIDData PIDDerivativeFilter PIDFeedforward PIDTune Piecewise PiecewiseExpand PieChart PieChart3D PillaiTrace PillaiTraceTest Pink Pivoting PixelConstrained PixelValue PixelValuePositions Placed Placeholder PlaceholderReplace Plain PlanarGraphQ Play PlayRange Plot Plot3D Plot3Matrix PlotDivision PlotJoined PlotLabel PlotLayout PlotLegends PlotMarkers PlotPoints PlotRange PlotRangeClipping PlotRangePadding PlotRegion PlotStyle Plus PlusMinus Pochhammer PodStates PodWidth Point Point3DBox PointBox PointFigureChart PointForm PointLegend PointSize PoissonConsulDistribution PoissonDistribution PoissonProcess PoissonWindow PolarAxes PolarAxesOrigin PolarGridLines PolarPlot PolarTicks PoleZeroMarkers PolyaAeppliDistribution PolyGamma Polygon Polygon3DBox Polygon3DBoxOptions PolygonBox PolygonBoxOptions PolygonHoleScale PolygonIntersections PolygonScale PolyhedronData PolyLog PolynomialExtendedGCD PolynomialForm PolynomialGCD PolynomialLCM PolynomialMod PolynomialQ PolynomialQuotient PolynomialQuotientRemainder PolynomialReduce PolynomialRemainder Polynomials PopupMenu PopupMenuBox PopupMenuBoxOptions PopupView PopupWindow Position Positive PositiveDefiniteMatrixQ PossibleZeroQ Postfix PostScript Power PowerDistribution PowerExpand PowerMod PowerModList PowerSpectralDensity PowersRepresentations PowerSymmetricPolynomial Precedence PrecedenceForm Precedes PrecedesEqual PrecedesSlantEqual PrecedesTilde Precision PrecisionGoal PreDecrement PredictionRoot PreemptProtect PreferencesPath Prefix PreIncrement Prepend PrependTo PreserveImageOptions Previous PriceGraphDistribution PrimaryPlaceholder Prime PrimeNu PrimeOmega PrimePi PrimePowerQ PrimeQ Primes PrimeZetaP PrimitiveRoot PrincipalComponents PrincipalValue Print PrintAction PrintForm PrintingCopies PrintingOptions PrintingPageRange PrintingStartingPageNumber PrintingStyleEnvironment PrintPrecision PrintTemporary Prism PrismBox PrismBoxOptions PrivateCellOptions PrivateEvaluationOptions PrivateFontOptions PrivateFrontEndOptions PrivateNotebookOptions PrivatePaths Probability ProbabilityDistribution ProbabilityPlot ProbabilityPr ProbabilityScalePlot ProbitModelFit ProcessEstimator ProcessParameterAssumptions ProcessParameterQ ProcessStateDomain ProcessTimeDomain Product ProductDistribution ProductLog ProgressIndicator ProgressIndicatorBox ProgressIndicatorBoxOptions Projection Prolog PromptForm Properties Property PropertyList PropertyValue Proportion Proportional Protect Protected ProteinData Pruning PseudoInverse Purple Put PutAppend Pyramid PyramidBox PyramidBoxOptions QBinomial QFactorial QGamma QHypergeometricPFQ QPochhammer QPolyGamma QRDecomposition QuadraticIrrationalQ Quantile QuantilePlot Quantity QuantityForm QuantityMagnitude QuantityQ QuantityUnit Quartics QuartileDeviation Quartiles QuartileSkewness QueueingNetworkProcess QueueingProcess QueueProperties Quiet Quit Quotient QuotientRemainder RadialityCentrality RadicalBox RadicalBoxOptions RadioButton RadioButtonBar RadioButtonBox RadioButtonBoxOptions Radon RamanujanTau RamanujanTauL RamanujanTauTheta RamanujanTauZ Random RandomChoice RandomComplex RandomFunction RandomGraph RandomImage RandomInteger RandomPermutation RandomPrime RandomReal RandomSample RandomSeed RandomVariate RandomWalkProcess Range RangeFilter RangeSpecification RankedMax RankedMin Raster Raster3D Raster3DBox Raster3DBoxOptions RasterArray RasterBox RasterBoxOptions Rasterize RasterSize Rational RationalFunctions Rationalize Rationals Ratios Raw RawArray RawBoxes RawData RawMedium RayleighDistribution Re Read ReadList ReadProtected Real RealBlockDiagonalForm RealDigits RealExponent Reals Reap Record RecordLists RecordSeparators Rectangle RectangleBox RectangleBoxOptions RectangleChart RectangleChart3D RecurrenceFilter RecurrenceTable RecurringDigitsForm Red Reduce RefBox ReferenceLineStyle ReferenceMarkers ReferenceMarkerStyle Refine ReflectionMatrix ReflectionTransform Refresh RefreshRate RegionBinarize RegionFunction RegionPlot RegionPlot3D RegularExpression Regularization Reinstall Release ReleaseHold ReliabilityDistribution ReliefImage ReliefPlot Remove RemoveAlphaChannel RemoveAsynchronousTask Removed RemoveInputStreamMethod RemoveOutputStreamMethod RemoveProperty RemoveScheduledTask RenameDirectory RenameFile RenderAll RenderingOptions RenewalProcess RenkoChart Repeated RepeatedNull RepeatedString Replace ReplaceAll ReplaceHeldPart ReplaceImageValue ReplaceList ReplacePart ReplacePixelValue ReplaceRepeated Resampling Rescale RescalingTransform ResetDirectory ResetMenusPacket ResetScheduledTask Residue Resolve Rest Resultant ResumePacket Return ReturnExpressionPacket ReturnInputFormPacket ReturnPacket ReturnTextPacket Reverse ReverseBiorthogonalSplineWavelet ReverseElement ReverseEquilibrium ReverseGraph ReverseUpEquilibrium RevolutionAxis RevolutionPlot3D RGBColor RiccatiSolve RiceDistribution RidgeFilter RiemannR RiemannSiegelTheta RiemannSiegelZ Riffle Right RightArrow RightArrowBar RightArrowLeftArrow RightCosetRepresentative RightDownTeeVector RightDownVector RightDownVectorBar RightTee RightTeeArrow RightTeeVector RightTriangle RightTriangleBar RightTriangleEqual RightUpDownVector RightUpTeeVector RightUpVector RightUpVectorBar RightVector RightVectorBar RiskAchievementImportance RiskReductionImportance RogersTanimotoDissimilarity Root RootApproximant RootIntervals RootLocusPlot RootMeanSquare RootOfUnityQ RootReduce Roots RootSum Rotate RotateLabel RotateLeft RotateRight RotationAction RotationBox RotationBoxOptions RotationMatrix RotationTransform Round RoundImplies RoundingRadius Row RowAlignments RowBackgrounds RowBox RowHeights RowLines RowMinHeight RowReduce RowsEqual RowSpacings RSolve RudvalisGroupRu Rule RuleCondition RuleDelayed RuleForm RulerUnits Run RunScheduledTask RunThrough RuntimeAttributes RuntimeOptions RussellRaoDissimilarity SameQ SameTest SampleDepth SampledSoundFunction SampledSoundList SampleRate SamplingPeriod SARIMAProcess SARMAProcess SatisfiabilityCount SatisfiabilityInstances SatisfiableQ Saturday Save Saveable SaveAutoDelete SaveDefinitions SawtoothWave Scale Scaled ScaleDivisions ScaledMousePosition ScaleOrigin ScalePadding ScaleRanges ScaleRangeStyle ScalingFunctions ScalingMatrix ScalingTransform Scan ScheduledTaskActiveQ ScheduledTaskData ScheduledTaskObject ScheduledTasks SchurDecomposition ScientificForm ScreenRectangle ScreenStyleEnvironment ScriptBaselineShifts ScriptLevel ScriptMinSize ScriptRules ScriptSizeMultipliers Scrollbars ScrollingOptions ScrollPosition Sec Sech SechDistribution SectionGrouping SectorChart SectorChart3D SectorOrigin SectorSpacing SeedRandom Select Selectable SelectComponents SelectedCells SelectedNotebook Selection SelectionAnimate SelectionCell SelectionCellCreateCell SelectionCellDefaultStyle SelectionCellParentStyle SelectionCreateCell SelectionDebuggerTag SelectionDuplicateCell SelectionEvaluate SelectionEvaluateCreateCell SelectionMove SelectionPlaceholder SelectionSetStyle SelectWithContents SelfLoops SelfLoopStyle SemialgebraicComponentInstances SendMail Sequence SequenceAlignment SequenceForm SequenceHold SequenceLimit Series SeriesCoefficient SeriesData SessionTime Set SetAccuracy SetAlphaChannel SetAttributes Setbacks SetBoxFormNamesPacket SetDelayed SetDirectory SetEnvironment SetEvaluationNotebook SetFileDate SetFileLoadingContext SetNotebookStatusLine SetOptions SetOptionsPacket SetPrecision SetProperty SetSelectedNotebook SetSharedFunction SetSharedVariable SetSpeechParametersPacket SetStreamPosition SetSystemOptions Setter SetterBar SetterBox SetterBoxOptions Setting SetValue Shading Shallow ShannonWavelet ShapiroWilkTest Share Sharpen ShearingMatrix ShearingTransform ShenCastanMatrix Short ShortDownArrow Shortest ShortestMatch ShortestPathFunction ShortLeftArrow ShortRightArrow ShortUpArrow Show ShowAutoStyles ShowCellBracket ShowCellLabel ShowCellTags ShowClosedCellArea ShowContents ShowControls ShowCursorTracker ShowGroupOpenCloseIcon ShowGroupOpener ShowInvisibleCharacters ShowPageBreaks ShowPredictiveInterface ShowSelection ShowShortBoxForm ShowSpecialCharacters ShowStringCharacters ShowSyntaxStyles ShrinkingDelay ShrinkWrapBoundingBox SiegelTheta SiegelTukeyTest Sign Signature SignedRankTest SignificanceLevel SignPadding SignTest SimilarityRules SimpleGraph SimpleGraphQ Simplify Sin Sinc SinghMaddalaDistribution SingleEvaluation SingleLetterItalics SingleLetterStyle SingularValueDecomposition SingularValueList SingularValuePlot SingularValues Sinh SinhIntegral SinIntegral SixJSymbol Skeleton SkeletonTransform SkellamDistribution Skewness SkewNormalDistribution Skip SliceDistribution Slider Slider2D Slider2DBox Slider2DBoxOptions SliderBox SliderBoxOptions SlideView Slot SlotSequence Small SmallCircle Smaller SmithDelayCompensator SmithWatermanSimilarity SmoothDensityHistogram SmoothHistogram SmoothHistogram3D SmoothKernelDistribution SocialMediaData Socket SokalSneathDissimilarity Solve SolveAlways SolveDelayed Sort SortBy Sound SoundAndGraphics SoundNote SoundVolume Sow Space SpaceForm Spacer Spacings Span SpanAdjustments SpanCharacterRounding SpanFromAbove SpanFromBoth SpanFromLeft SpanLineThickness SpanMaxSize SpanMinSize SpanningCharacters SpanSymmetric SparseArray SpatialGraphDistribution Speak SpeakTextPacket SpearmanRankTest SpearmanRho Spectrogram SpectrogramArray Specularity SpellingCorrection SpellingDictionaries SpellingDictionariesPath SpellingOptions SpellingSuggestionsPacket Sphere SphereBox SphericalBesselJ SphericalBesselY SphericalHankelH1 SphericalHankelH2 SphericalHarmonicY SphericalPlot3D SphericalRegion SpheroidalEigenvalue SpheroidalJoiningFactor SpheroidalPS SpheroidalPSPrime SpheroidalQS SpheroidalQSPrime SpheroidalRadialFactor SpheroidalS1 SpheroidalS1Prime SpheroidalS2 SpheroidalS2Prime Splice SplicedDistribution SplineClosed SplineDegree SplineKnots SplineWeights Split SplitBy SpokenString Sqrt SqrtBox SqrtBoxOptions Square SquaredEuclideanDistance SquareFreeQ SquareIntersection SquaresR SquareSubset SquareSubsetEqual SquareSuperset SquareSupersetEqual SquareUnion SquareWave StabilityMargins StabilityMarginsStyle StableDistribution Stack StackBegin StackComplete StackInhibit StandardDeviation StandardDeviationFilter StandardForm Standardize StandbyDistribution Star StarGraph StartAsynchronousTask StartingStepSize StartOfLine StartOfString StartScheduledTask StartupSound StateDimensions StateFeedbackGains StateOutputEstimator StateResponse StateSpaceModel StateSpaceRealization StateSpaceTransform StationaryDistribution StationaryWaveletPacketTransform StationaryWaveletTransform StatusArea StatusCentrality StepMonitor StieltjesGamma StirlingS1 StirlingS2 StopAsynchronousTask StopScheduledTask StrataVariables StratonovichProcess StreamColorFunction StreamColorFunctionScaling StreamDensityPlot StreamPlot StreamPoints StreamPosition Streams StreamScale StreamStyle String StringBreak StringByteCount StringCases StringCount StringDrop StringExpression StringForm StringFormat StringFreeQ StringInsert StringJoin StringLength StringMatchQ StringPosition StringQ StringReplace StringReplaceList StringReplacePart StringReverse StringRotateLeft StringRotateRight StringSkeleton StringSplit StringTake StringToStream StringTrim StripBoxes StripOnInput StripWrapperBoxes StrokeForm StructuralImportance StructuredArray StructuredSelection StruveH StruveL Stub StudentTDistribution Style StyleBox StyleBoxAutoDelete StyleBoxOptions StyleData StyleDefinitions StyleForm StyleKeyMapping StyleMenuListing StyleNameDialogSettings StyleNames StylePrint StyleSheetPath Subfactorial Subgraph SubMinus SubPlus SubresultantPolynomialRemainders SubresultantPolynomials Subresultants Subscript SubscriptBox SubscriptBoxOptions Subscripted Subset SubsetEqual Subsets SubStar Subsuperscript SubsuperscriptBox SubsuperscriptBoxOptions Subtract SubtractFrom SubValues Succeeds SucceedsEqual SucceedsSlantEqual SucceedsTilde SuchThat Sum SumConvergence Sunday SuperDagger SuperMinus SuperPlus Superscript SuperscriptBox SuperscriptBoxOptions Superset SupersetEqual SuperStar Surd SurdForm SurfaceColor SurfaceGraphics SurvivalDistribution SurvivalFunction SurvivalModel SurvivalModelFit SuspendPacket SuzukiDistribution SuzukiGroupSuz SwatchLegend Switch Symbol SymbolName SymletWavelet Symmetric SymmetricGroup SymmetricMatrixQ SymmetricPolynomial SymmetricReduction Symmetrize SymmetrizedArray SymmetrizedArrayRules SymmetrizedDependentComponents SymmetrizedIndependentComponents SymmetrizedReplacePart SynchronousInitialization SynchronousUpdating Syntax SyntaxForm SyntaxInformation SyntaxLength SyntaxPacket SyntaxQ SystemDialogInput SystemException SystemHelpPath SystemInformation SystemInformationData SystemOpen SystemOptions SystemsModelDelay SystemsModelDelayApproximate SystemsModelDelete SystemsModelDimensions SystemsModelExtract SystemsModelFeedbackConnect SystemsModelLabels SystemsModelOrder SystemsModelParallelConnect SystemsModelSeriesConnect SystemsModelStateFeedbackConnect SystemStub Tab TabFilling Table TableAlignments TableDepth TableDirections TableForm TableHeadings TableSpacing TableView TableViewBox TabSpacings TabView TabViewBox TabViewBoxOptions TagBox TagBoxNote TagBoxOptions TaggingRules TagSet TagSetDelayed TagStyle TagUnset Take TakeWhile Tally Tan Tanh TargetFunctions TargetUnits TautologyQ TelegraphProcess TemplateBox TemplateBoxOptions TemplateSlotSequence TemporalData Temporary TemporaryVariable TensorContract TensorDimensions TensorExpand TensorProduct TensorQ TensorRank TensorReduce TensorSymmetry TensorTranspose TensorWedge Tetrahedron TetrahedronBox TetrahedronBoxOptions TeXForm TeXSave Text Text3DBox Text3DBoxOptions TextAlignment TextBand TextBoundingBox TextBox TextCell TextClipboardType TextData TextForm TextJustification TextLine TextPacket TextParagraph TextRecognize TextRendering TextStyle Texture TextureCoordinateFunction TextureCoordinateScaling Therefore ThermometerGauge Thick Thickness Thin Thinning ThisLink ThompsonGroupTh Thread ThreeJSymbol Threshold Through Throw Thumbnail Thursday Ticks TicksStyle Tilde TildeEqual TildeFullEqual TildeTilde TimeConstrained TimeConstraint Times TimesBy TimeSeriesForecast TimeSeriesInvertibility TimeUsed TimeValue TimeZone Timing Tiny TitleGrouping TitsGroupT ToBoxes ToCharacterCode ToColor ToContinuousTimeModel ToDate ToDiscreteTimeModel ToeplitzMatrix ToExpression ToFileName Together Toggle ToggleFalse Toggler TogglerBar TogglerBox TogglerBoxOptions ToHeldExpression ToInvertibleTimeSeries TokenWords Tolerance ToLowerCase ToNumberField TooBig Tooltip TooltipBox TooltipBoxOptions TooltipDelay TooltipStyle Top TopHatTransform TopologicalSort ToRadicals ToRules ToString Total TotalHeight TotalVariationFilter TotalWidth TouchscreenAutoZoom TouchscreenControlPlacement ToUpperCase Tr Trace TraceAbove TraceAction TraceBackward TraceDepth TraceDialog TraceForward TraceInternal TraceLevel TraceOff TraceOn TraceOriginal TracePrint TraceScan TrackedSymbols TradingChart TraditionalForm TraditionalFunctionNotation TraditionalNotation TraditionalOrder TransferFunctionCancel TransferFunctionExpand TransferFunctionFactor TransferFunctionModel TransferFunctionPoles TransferFunctionTransform TransferFunctionZeros TransformationFunction TransformationFunctions TransformationMatrix TransformedDistribution TransformedField Translate TranslationTransform TransparentColor Transpose TreeForm TreeGraph TreeGraphQ TreePlot TrendStyle TriangleWave TriangularDistribution Trig TrigExpand TrigFactor TrigFactorList Trigger TrigReduce TrigToExp TrimmedMean True TrueQ TruncatedDistribution TsallisQExponentialDistribution TsallisQGaussianDistribution TTest Tube TubeBezierCurveBox TubeBezierCurveBoxOptions TubeBox TubeBSplineCurveBox TubeBSplineCurveBoxOptions Tuesday TukeyLambdaDistribution TukeyWindow Tuples TuranGraph TuringMachine Transparent UnateQ Uncompress Undefined UnderBar Underflow Underlined Underoverscript UnderoverscriptBox UnderoverscriptBoxOptions Underscript UnderscriptBox UnderscriptBoxOptions UndirectedEdge UndirectedGraph UndirectedGraphQ UndocumentedTestFEParserPacket UndocumentedTestGetSelectionPacket Unequal Unevaluated UniformDistribution UniformGraphDistribution UniformSumDistribution Uninstall Union UnionPlus Unique UnitBox UnitConvert UnitDimensions Unitize UnitRootTest UnitSimplify UnitStep UnitTriangle UnitVector Unprotect UnsameQ UnsavedVariables Unset UnsetShared UntrackedVariables Up UpArrow UpArrowBar UpArrowDownArrow Update UpdateDynamicObjects UpdateDynamicObjectsSynchronous UpdateInterval UpDownArrow UpEquilibrium UpperCaseQ UpperLeftArrow UpperRightArrow UpperTriangularize Upsample UpSet UpSetDelayed UpTee UpTeeArrow UpValues URL URLFetch URLFetchAsynchronous URLSave URLSaveAsynchronous UseGraphicsRange Using UsingFrontEnd V2Get ValidationLength Value ValueBox ValueBoxOptions ValueForm ValueQ ValuesData Variables Variance VarianceEquivalenceTest VarianceEstimatorFunction VarianceGammaDistribution VarianceTest VectorAngle VectorColorFunction VectorColorFunctionScaling VectorDensityPlot VectorGlyphData VectorPlot VectorPlot3D VectorPoints VectorQ Vectors VectorScale VectorStyle Vee Verbatim Verbose VerboseConvertToPostScriptPacket VerifyConvergence VerifySolutions VerifyTestAssumptions Version VersionNumber VertexAdd VertexCapacity VertexColors VertexComponent VertexConnectivity VertexCoordinateRules VertexCoordinates VertexCorrelationSimilarity VertexCosineSimilarity VertexCount VertexCoverQ VertexDataCoordinates VertexDegree VertexDelete VertexDiceSimilarity VertexEccentricity VertexInComponent VertexInDegree VertexIndex VertexJaccardSimilarity VertexLabeling VertexLabels VertexLabelStyle VertexList VertexNormals VertexOutComponent VertexOutDegree VertexQ VertexRenderingFunction VertexReplace VertexShape VertexShapeFunction VertexSize VertexStyle VertexTextureCoordinates VertexWeight Vertical VerticalBar VerticalForm VerticalGauge VerticalSeparator VerticalSlider VerticalTilde ViewAngle ViewCenter ViewMatrix ViewPoint ViewPointSelectorSettings ViewPort ViewRange ViewVector ViewVertical VirtualGroupData Visible VisibleCell VoigtDistribution VonMisesDistribution WaitAll WaitAsynchronousTask WaitNext WaitUntil WakebyDistribution WalleniusHypergeometricDistribution WaringYuleDistribution WatershedComponents WatsonUSquareTest WattsStrogatzGraphDistribution WaveletBestBasis WaveletFilterCoefficients WaveletImagePlot WaveletListPlot WaveletMapIndexed WaveletMatrixPlot WaveletPhi WaveletPsi WaveletScale WaveletScalogram WaveletThreshold WeaklyConnectedComponents WeaklyConnectedGraphQ WeakStationarity WeatherData WeberE Wedge Wednesday WeibullDistribution WeierstrassHalfPeriods WeierstrassInvariants WeierstrassP WeierstrassPPrime WeierstrassSigma WeierstrassZeta WeightedAdjacencyGraph WeightedAdjacencyMatrix WeightedData WeightedGraphQ Weights WelchWindow WheelGraph WhenEvent Which While White Whitespace WhitespaceCharacter WhittakerM WhittakerW WienerFilter WienerProcess WignerD WignerSemicircleDistribution WilksW WilksWTest WindowClickSelect WindowElements WindowFloating WindowFrame WindowFrameElements WindowMargins WindowMovable WindowOpacity WindowSelected WindowSize WindowStatusArea WindowTitle WindowToolbars WindowWidth With WolframAlpha WolframAlphaDate WolframAlphaQuantity WolframAlphaResult Word WordBoundary WordCharacter WordData WordSearch WordSeparators WorkingPrecision Write WriteString Wronskian XMLElement XMLObject Xnor Xor Yellow YuleDissimilarity ZernikeR ZeroSymmetric ZeroTest ZeroWidthTimes Zeta ZetaZero ZipfDistribution ZTest ZTransform $Aborted $ActivationGroupID $ActivationKey $ActivationUserRegistered $AddOnsDirectory $AssertFunction $Assumptions $AsynchronousTask $BaseDirectory $BatchInput $BatchOutput $BoxForms $ByteOrdering $Canceled $CharacterEncoding $CharacterEncodings $CommandLine $CompilationTarget $ConditionHold $ConfiguredKernels $Context $ContextPath $ControlActiveSetting $CreationDate $CurrentLink $DateStringFormat $DefaultFont $DefaultFrontEnd $DefaultImagingDevice $DefaultPath $Display $DisplayFunction $DistributedContexts $DynamicEvaluation $Echo $Epilog $ExportFormats $Failed $FinancialDataSource $FormatType $FrontEnd $FrontEndSession $GeoLocation $HistoryLength $HomeDirectory $HTTPCookies $IgnoreEOF $ImagingDevices $ImportFormats $InitialDirectory $Input $InputFileName $InputStreamMethods $Inspector $InstallationDate $InstallationDirectory $InterfaceEnvironment $IterationLimit $KernelCount $KernelID $Language $LaunchDirectory $LibraryPath $LicenseExpirationDate $LicenseID $LicenseProcesses $LicenseServer $LicenseSubprocesses $LicenseType $Line $Linked $LinkSupported $LoadedFiles $MachineAddresses $MachineDomain $MachineDomains $MachineEpsilon $MachineID $MachineName $MachinePrecision $MachineType $MaxExtraPrecision $MaxLicenseProcesses $MaxLicenseSubprocesses $MaxMachineNumber $MaxNumber $MaxPiecewiseCases $MaxPrecision $MaxRootDegree $MessageGroups $MessageList $MessagePrePrint $Messages $MinMachineNumber $MinNumber $MinorReleaseNumber $MinPrecision $ModuleNumber $NetworkLicense $NewMessage $NewSymbol $Notebooks $NumberMarks $Off $OperatingSystem $Output $OutputForms $OutputSizeLimit $OutputStreamMethods $Packages $ParentLink $ParentProcessID $PasswordFile $PatchLevelID $Path $PathnameSeparator $PerformanceGoal $PipeSupported $Post $Pre $PreferencesDirectory $PrePrint $PreRead $PrintForms $PrintLiteral $ProcessID $ProcessorCount $ProcessorType $ProductInformation $ProgramName $RandomState $RecursionLimit $ReleaseNumber $RootDirectory $ScheduledTask $ScriptCommandLine $SessionID $SetParentLink $SharedFunctions $SharedVariables $SoundDisplay $SoundDisplayFunction $SuppressInputFormHeads $SynchronousEvaluation $SyntaxHandler $System $SystemCharacterEncoding $SystemID $SystemWordLength $TemporaryDirectory $TemporaryPrefix $TextStyle $TimedOut $TimeUnit $TimeZone $TopDirectory $TraceOff $TraceOn $TracePattern $TracePostAction $TracePreAction $Urgent $UserAddOnsDirectory $UserBaseDirectory $UserDocumentsDirectory $UserName $Version $VersionNumber",
            contains: [{
                className: "comment",
                begin: /\(\*/,
                end: /\*\)/
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, {
                begin: /\{/,
                end: /\}/,
                illegal: /:/
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = [e.C_NUMBER_MODE, {
            className: "string",
            begin: "'",
            end: "'",
            contains: [e.BACKSLASH_ESCAPE, {
                begin: "''"
            }]
        }]
          , n = {
            relevance: 0,
            contains: [{
                begin: /'['\.]*/
            }]
        };
        return {
            keywords: {
                keyword: "break case catch classdef continue else elseif end enumerated events for function global if methods otherwise parfor persistent properties return spmd switch try while",
                built_in: "sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson"
            },
            illegal: '(//|"|#|/\\*|\\s+/\\w+)',
            contains: [{
                className: "function",
                beginKeywords: "function",
                end: "$",
                contains: [e.UNDERSCORE_TITLE_MODE, {
                    className: "params",
                    variants: [{
                        begin: "\\(",
                        end: "\\)"
                    }, {
                        begin: "\\[",
                        end: "\\]"
                    }]
                }]
            }, {
                begin: /[a-zA-Z_][a-zA-Z_0-9]*'['\.]*/,
                returnBegin: !0,
                relevance: 0,
                contains: [{
                    begin: /[a-zA-Z_][a-zA-Z_0-9]*/,
                    relevance: 0
                }, n.contains[0]]
            }, {
                begin: "\\[",
                end: "\\]",
                contains: t,
                relevance: 0,
                starts: n
            }, {
                begin: "\\{",
                end: /}/,
                contains: t,
                relevance: 0,
                starts: n
            }, {
                begin: /\)/,
                relevance: 0,
                starts: n
            }, e.COMMENT("^\\s*\\%\\{\\s*$", "^\\s*\\%\\}\\s*$"), e.COMMENT("\\%", "$")].concat(t)
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            lexemes: "[A-Za-z_%][0-9A-Za-z_%]*",
            keywords: {
                keyword: "if then else elseif for thru do while unless step in and or not",
                literal: "true false unknown inf minf ind und %e %i %pi %phi %gamma",
                built_in: " abasep abs absint absolute_real_time acos acosh acot acoth acsc acsch activate addcol add_edge add_edges addmatrices addrow add_vertex add_vertices adjacency_matrix adjoin adjoint af agd airy airy_ai airy_bi airy_dai airy_dbi algsys alg_type alias allroots alphacharp alphanumericp amortization %and annuity_fv annuity_pv antid antidiff AntiDifference append appendfile apply apply1 apply2 applyb1 apropos args arit_amortization arithmetic arithsum array arrayapply arrayinfo arraymake arraysetapply ascii asec asech asin asinh askinteger asksign assoc assoc_legendre_p assoc_legendre_q assume assume_external_byte_order asympa at atan atan2 atanh atensimp atom atvalue augcoefmatrix augmented_lagrangian_method av average_degree backtrace bars barsplot barsplot_description base64 base64_decode bashindices batch batchload bc2 bdvac belln benefit_cost bern bernpoly bernstein_approx bernstein_expand bernstein_poly bessel bessel_i bessel_j bessel_k bessel_simplify bessel_y beta beta_incomplete beta_incomplete_generalized beta_incomplete_regularized bezout bfallroots bffac bf_find_root bf_fmin_cobyla bfhzeta bfloat bfloatp bfpsi bfpsi0 bfzeta biconnected_components bimetric binomial bipartition block blockmatrixp bode_gain bode_phase bothcoef box boxplot boxplot_description break bug_report build_info|10 buildq build_sample burn cabs canform canten cardinality carg cartan cartesian_product catch cauchy_matrix cbffac cdf_bernoulli cdf_beta cdf_binomial cdf_cauchy cdf_chi2 cdf_continuous_uniform cdf_discrete_uniform cdf_exp cdf_f cdf_gamma cdf_general_finite_discrete cdf_geometric cdf_gumbel cdf_hypergeometric cdf_laplace cdf_logistic cdf_lognormal cdf_negative_binomial cdf_noncentral_chi2 cdf_noncentral_student_t cdf_normal cdf_pareto cdf_poisson cdf_rank_sum cdf_rayleigh cdf_signed_rank cdf_student_t cdf_weibull cdisplay ceiling central_moment cequal cequalignore cf cfdisrep cfexpand cgeodesic cgreaterp cgreaterpignore changename changevar chaosgame charat charfun charfun2 charlist charp charpoly chdir chebyshev_t chebyshev_u checkdiv check_overlaps chinese cholesky christof chromatic_index chromatic_number cint circulant_graph clear_edge_weight clear_rules clear_vertex_label clebsch_gordan clebsch_graph clessp clesspignore close closefile cmetric coeff coefmatrix cograd col collapse collectterms columnop columnspace columnswap columnvector combination combine comp2pui compare compfile compile compile_file complement_graph complete_bipartite_graph complete_graph complex_number_p components compose_functions concan concat conjugate conmetderiv connected_components connect_vertices cons constant constantp constituent constvalue cont2part content continuous_freq contortion contour_plot contract contract_edge contragrad contrib_ode convert coord copy copy_file copy_graph copylist copymatrix cor cos cosh cot coth cov cov1 covdiff covect covers crc24sum create_graph create_list csc csch csetup cspline ctaylor ct_coordsys ctransform ctranspose cube_graph cuboctahedron_graph cunlisp cv cycle_digraph cycle_graph cylindrical days360 dblint deactivate declare declare_constvalue declare_dimensions declare_fundamental_dimensions declare_fundamental_units declare_qty declare_translated declare_unit_conversion declare_units declare_weights decsym defcon define define_alt_display define_variable defint defmatch defrule defstruct deftaylor degree_sequence del delete deleten delta demo demoivre denom depends derivdegree derivlist describe desolve determinant dfloat dgauss_a dgauss_b dgeev dgemm dgeqrf dgesv dgesvd diag diagmatrix diag_matrix diagmatrixp diameter diff digitcharp dimacs_export dimacs_import dimension dimensionless dimensions dimensions_as_list direct directory discrete_freq disjoin disjointp disolate disp dispcon dispform dispfun dispJordan display disprule dispterms distrib divide divisors divsum dkummer_m dkummer_u dlange dodecahedron_graph dotproduct dotsimp dpart draw draw2d draw3d drawdf draw_file draw_graph dscalar echelon edge_coloring edge_connectivity edges eigens_by_jacobi eigenvalues eigenvectors eighth einstein eivals eivects elapsed_real_time elapsed_run_time ele2comp ele2polynome ele2pui elem elementp elevation_grid elim elim_allbut eliminate eliminate_using ellipse elliptic_e elliptic_ec elliptic_eu elliptic_f elliptic_kc elliptic_pi ematrix empty_graph emptyp endcons entermatrix entertensor entier equal equalp equiv_classes erf erfc erf_generalized erfi errcatch error errormsg errors euler ev eval_string evenp every evolution evolution2d evundiff example exp expand expandwrt expandwrt_factored expint expintegral_chi expintegral_ci expintegral_e expintegral_e1 expintegral_ei expintegral_e_simplify expintegral_li expintegral_shi expintegral_si explicit explose exponentialize express expt exsec extdiff extract_linear_equations extremal_subset ezgcd %f f90 facsum factcomb factor factorfacsum factorial factorout factorsum facts fast_central_elements fast_linsolve fasttimes featurep fernfale fft fib fibtophi fifth filename_merge file_search file_type fillarray findde find_root find_root_abs find_root_error find_root_rel first fix flatten flength float floatnump floor flower_snark flush flush1deriv flushd flushnd flush_output fmin_cobyla forget fortran fourcos fourexpand fourier fourier_elim fourint fourintcos fourintsin foursimp foursin fourth fposition frame_bracket freeof freshline fresnel_c fresnel_s from_adjacency_matrix frucht_graph full_listify fullmap fullmapl fullratsimp fullratsubst fullsetify funcsolve fundamental_dimensions fundamental_units fundef funmake funp fv g0 g1 gamma gamma_greek gamma_incomplete gamma_incomplete_generalized gamma_incomplete_regularized gauss gauss_a gauss_b gaussprob gcd gcdex gcdivide gcfac gcfactor gd generalized_lambert_w genfact gen_laguerre genmatrix gensym geo_amortization geo_annuity_fv geo_annuity_pv geomap geometric geometric_mean geosum get getcurrentdirectory get_edge_weight getenv get_lu_factors get_output_stream_string get_pixel get_plot_option get_tex_environment get_tex_environment_default get_vertex_label gfactor gfactorsum ggf girth global_variances gn gnuplot_close gnuplot_replot gnuplot_reset gnuplot_restart gnuplot_start go Gosper GosperSum gr2d gr3d gradef gramschmidt graph6_decode graph6_encode graph6_export graph6_import graph_center graph_charpoly graph_eigenvalues graph_flow graph_order graph_periphery graph_product graph_size graph_union great_rhombicosidodecahedron_graph great_rhombicuboctahedron_graph grid_graph grind grobner_basis grotzch_graph hamilton_cycle hamilton_path hankel hankel_1 hankel_2 harmonic harmonic_mean hav heawood_graph hermite hessian hgfred hilbertmap hilbert_matrix hipow histogram histogram_description hodge horner hypergeometric i0 i1 %ibes ic1 ic2 ic_convert ichr1 ichr2 icosahedron_graph icosidodecahedron_graph icurvature ident identfor identity idiff idim idummy ieqn %if ifactors iframes ifs igcdex igeodesic_coords ilt image imagpart imetric implicit implicit_derivative implicit_plot indexed_tensor indices induced_subgraph inferencep inference_result infix info_display init_atensor init_ctensor in_neighbors innerproduct inpart inprod inrt integerp integer_partitions integrate intersect intersection intervalp intopois intosum invariant1 invariant2 inverse_fft inverse_jacobi_cd inverse_jacobi_cn inverse_jacobi_cs inverse_jacobi_dc inverse_jacobi_dn inverse_jacobi_ds inverse_jacobi_nc inverse_jacobi_nd inverse_jacobi_ns inverse_jacobi_sc inverse_jacobi_sd inverse_jacobi_sn invert invert_by_adjoint invert_by_lu inv_mod irr is is_biconnected is_bipartite is_connected is_digraph is_edge_in_graph is_graph is_graph_or_digraph ishow is_isomorphic isolate isomorphism is_planar isqrt isreal_p is_sconnected is_tree is_vertex_in_graph items_inference %j j0 j1 jacobi jacobian jacobi_cd jacobi_cn jacobi_cs jacobi_dc jacobi_dn jacobi_ds jacobi_nc jacobi_nd jacobi_ns jacobi_p jacobi_sc jacobi_sd jacobi_sn JF jn join jordan julia julia_set julia_sin %k kdels kdelta kill killcontext kostka kron_delta kronecker_product kummer_m kummer_u kurtosis kurtosis_bernoulli kurtosis_beta kurtosis_binomial kurtosis_chi2 kurtosis_continuous_uniform kurtosis_discrete_uniform kurtosis_exp kurtosis_f kurtosis_gamma kurtosis_general_finite_discrete kurtosis_geometric kurtosis_gumbel kurtosis_hypergeometric kurtosis_laplace kurtosis_logistic kurtosis_lognormal kurtosis_negative_binomial kurtosis_noncentral_chi2 kurtosis_noncentral_student_t kurtosis_normal kurtosis_pareto kurtosis_poisson kurtosis_rayleigh kurtosis_student_t kurtosis_weibull label labels lagrange laguerre lambda lambert_w laplace laplacian_matrix last lbfgs lc2kdt lcharp lc_l lcm lc_u ldefint ldisp ldisplay legendre_p legendre_q leinstein length let letrules letsimp levi_civita lfreeof lgtreillis lhs li liediff limit Lindstedt linear linearinterpol linear_program linear_regression line_graph linsolve listarray list_correlations listify list_matrix_entries list_nc_monomials listoftens listofvars listp lmax lmin load loadfile local locate_matrix_entry log logcontract log_gamma lopow lorentz_gauge lowercasep lpart lratsubst lreduce lriemann lsquares_estimates lsquares_estimates_approximate lsquares_estimates_exact lsquares_mse lsquares_residual_mse lsquares_residuals lsum ltreillis lu_backsub lucas lu_factor %m macroexpand macroexpand1 make_array makebox makefact makegamma make_graph make_level_picture makelist makeOrders make_poly_continent make_poly_country make_polygon make_random_state make_rgb_picture makeset make_string_input_stream make_string_output_stream make_transform mandelbrot mandelbrot_set map mapatom maplist matchdeclare matchfix mat_cond mat_fullunblocker mat_function mathml_display mat_norm matrix matrixmap matrixp matrix_size mattrace mat_trace mat_unblocker max max_clique max_degree max_flow maximize_lp max_independent_set max_matching maybe md5sum mean mean_bernoulli mean_beta mean_binomial mean_chi2 mean_continuous_uniform mean_deviation mean_discrete_uniform mean_exp mean_f mean_gamma mean_general_finite_discrete mean_geometric mean_gumbel mean_hypergeometric mean_laplace mean_logistic mean_lognormal mean_negative_binomial mean_noncentral_chi2 mean_noncentral_student_t mean_normal mean_pareto mean_poisson mean_rayleigh mean_student_t mean_weibull median median_deviation member mesh metricexpandall mgf1_sha1 min min_degree min_edge_cut minfactorial minimalPoly minimize_lp minimum_spanning_tree minor minpack_lsquares minpack_solve min_vertex_cover min_vertex_cut mkdir mnewton mod mode_declare mode_identity ModeMatrix moebius mon2schur mono monomial_dimensions multibernstein_poly multi_display_for_texinfo multi_elem multinomial multinomial_coeff multi_orbit multiplot_mode multi_pui multsym multthru mycielski_graph nary natural_unit nc_degree ncexpt ncharpoly negative_picture neighbors new newcontext newdet new_graph newline newton new_variable next_prime nicedummies niceindices ninth nofix nonarray noncentral_moment nonmetricity nonnegintegerp nonscalarp nonzeroandfreeof notequal nounify nptetrad npv nroots nterms ntermst nthroot nullity nullspace num numbered_boundaries numberp number_to_octets num_distinct_partitions numerval numfactor num_partitions nusum nzeta nzetai nzetar octets_to_number octets_to_oid odd_girth oddp ode2 ode_check odelin oid_to_octets op opena opena_binary openr openr_binary openw openw_binary operatorp opsubst optimize %or orbit orbits ordergreat ordergreatp orderless orderlessp orthogonal_complement orthopoly_recur orthopoly_weight outermap out_neighbors outofpois pade parabolic_cylinder_d parametric parametric_surface parg parGosper parse_string parse_timedate part part2cont partfrac partition partition_set partpol path_digraph path_graph pathname_directory pathname_name pathname_type pdf_bernoulli pdf_beta pdf_binomial pdf_cauchy pdf_chi2 pdf_continuous_uniform pdf_discrete_uniform pdf_exp pdf_f pdf_gamma pdf_general_finite_discrete pdf_geometric pdf_gumbel pdf_hypergeometric pdf_laplace pdf_logistic pdf_lognormal pdf_negative_binomial pdf_noncentral_chi2 pdf_noncentral_student_t pdf_normal pdf_pareto pdf_poisson pdf_rank_sum pdf_rayleigh pdf_signed_rank pdf_student_t pdf_weibull pearson_skewness permanent permut permutation permutations petersen_graph petrov pickapart picture_equalp picturep piechart piechart_description planar_embedding playback plog plot2d plot3d plotdf ploteq plsquares pochhammer points poisdiff poisexpt poisint poismap poisplus poissimp poissubst poistimes poistrim polar polarform polartorect polar_to_xy poly_add poly_buchberger poly_buchberger_criterion poly_colon_ideal poly_content polydecomp poly_depends_p poly_elimination_ideal poly_exact_divide poly_expand poly_expt poly_gcd polygon poly_grobner poly_grobner_equal poly_grobner_member poly_grobner_subsetp poly_ideal_intersection poly_ideal_polysaturation poly_ideal_polysaturation1 poly_ideal_saturation poly_ideal_saturation1 poly_lcm poly_minimization polymod poly_multiply polynome2ele polynomialp poly_normal_form poly_normalize poly_normalize_list poly_polysaturation_extension poly_primitive_part poly_pseudo_divide poly_reduced_grobner poly_reduction poly_saturation_extension poly_s_polynomial poly_subtract polytocompanion pop postfix potential power_mod powerseries powerset prefix prev_prime primep primes principal_components print printf printfile print_graph printpois printprops prodrac product properties propvars psi psubst ptriangularize pui pui2comp pui2ele pui2polynome pui_direct puireduc push put pv qput qrange qty quad_control quad_qag quad_qagi quad_qagp quad_qags quad_qawc quad_qawf quad_qawo quad_qaws quadrilateral quantile quantile_bernoulli quantile_beta quantile_binomial quantile_cauchy quantile_chi2 quantile_continuous_uniform quantile_discrete_uniform quantile_exp quantile_f quantile_gamma quantile_general_finite_discrete quantile_geometric quantile_gumbel quantile_hypergeometric quantile_laplace quantile_logistic quantile_lognormal quantile_negative_binomial quantile_noncentral_chi2 quantile_noncentral_student_t quantile_normal quantile_pareto quantile_poisson quantile_rayleigh quantile_student_t quantile_weibull quartile_skewness quit qunit quotient racah_v racah_w radcan radius random random_bernoulli random_beta random_binomial random_bipartite_graph random_cauchy random_chi2 random_continuous_uniform random_digraph random_discrete_uniform random_exp random_f random_gamma random_general_finite_discrete random_geometric random_graph random_graph1 random_gumbel random_hypergeometric random_laplace random_logistic random_lognormal random_negative_binomial random_network random_noncentral_chi2 random_noncentral_student_t random_normal random_pareto random_permutation random_poisson random_rayleigh random_regular_graph random_student_t random_tournament random_tree random_weibull range rank rat ratcoef ratdenom ratdiff ratdisrep ratexpand ratinterpol rational rationalize ratnumer ratnump ratp ratsimp ratsubst ratvars ratweight read read_array read_binary_array read_binary_list read_binary_matrix readbyte readchar read_hashed_array readline read_list read_matrix read_nested_list readonly read_xpm real_imagpart_to_conjugate realpart realroots rearray rectangle rectform rectform_log_if_constant recttopolar rediff reduce_consts reduce_order region region_boundaries region_boundaries_plus rem remainder remarray rembox remcomps remcon remcoord remfun remfunction remlet remove remove_constvalue remove_dimensions remove_edge remove_fundamental_dimensions remove_fundamental_units remove_plot_option remove_vertex rempart remrule remsym remvalue rename rename_file reset reset_displays residue resolvante resolvante_alternee1 resolvante_bipartite resolvante_diedrale resolvante_klein resolvante_klein3 resolvante_produit_sym resolvante_unitaire resolvante_vierer rest resultant return reveal reverse revert revert2 rgb2level rhs ricci riemann rinvariant risch rk rmdir rncombine romberg room rootscontract round row rowop rowswap rreduce run_testsuite %s save saving scalarp scaled_bessel_i scaled_bessel_i0 scaled_bessel_i1 scalefactors scanmap scatterplot scatterplot_description scene schur2comp sconcat scopy scsimp scurvature sdowncase sec sech second sequal sequalignore set_alt_display setdifference set_draw_defaults set_edge_weight setelmx setequalp setify setp set_partitions set_plot_option set_prompt set_random_state set_tex_environment set_tex_environment_default setunits setup_autoload set_up_dot_simplifications set_vertex_label seventh sexplode sf sha1sum sha256sum shortest_path shortest_weighted_path show showcomps showratvars sierpinskiale sierpinskimap sign signum similaritytransform simp_inequality simplify_sum simplode simpmetderiv simtran sin sinh sinsert sinvertcase sixth skewness skewness_bernoulli skewness_beta skewness_binomial skewness_chi2 skewness_continuous_uniform skewness_discrete_uniform skewness_exp skewness_f skewness_gamma skewness_general_finite_discrete skewness_geometric skewness_gumbel skewness_hypergeometric skewness_laplace skewness_logistic skewness_lognormal skewness_negative_binomial skewness_noncentral_chi2 skewness_noncentral_student_t skewness_normal skewness_pareto skewness_poisson skewness_rayleigh skewness_student_t skewness_weibull slength smake small_rhombicosidodecahedron_graph small_rhombicuboctahedron_graph smax smin smismatch snowmap snub_cube_graph snub_dodecahedron_graph solve solve_rec solve_rec_rat some somrac sort sparse6_decode sparse6_encode sparse6_export sparse6_import specint spherical spherical_bessel_j spherical_bessel_y spherical_hankel1 spherical_hankel2 spherical_harmonic spherical_to_xyz splice split sposition sprint sqfr sqrt sqrtdenest sremove sremovefirst sreverse ssearch ssort sstatus ssubst ssubstfirst staircase standardize standardize_inverse_trig starplot starplot_description status std std1 std_bernoulli std_beta std_binomial std_chi2 std_continuous_uniform std_discrete_uniform std_exp std_f std_gamma std_general_finite_discrete std_geometric std_gumbel std_hypergeometric std_laplace std_logistic std_lognormal std_negative_binomial std_noncentral_chi2 std_noncentral_student_t std_normal std_pareto std_poisson std_rayleigh std_student_t std_weibull stemplot stirling stirling1 stirling2 strim striml strimr string stringout stringp strong_components struve_h struve_l sublis sublist sublist_indices submatrix subsample subset subsetp subst substinpart subst_parallel substpart substring subvar subvarp sum sumcontract summand_to_rec supcase supcontext symbolp symmdifference symmetricp system take_channel take_inference tan tanh taylor taylorinfo taylorp taylor_simplifier taytorat tcl_output tcontract tellrat tellsimp tellsimpafter tentex tenth test_mean test_means_difference test_normality test_proportion test_proportions_difference test_rank_sum test_sign test_signed_rank test_variance test_variance_ratio tex tex1 tex_display texput %th third throw time timedate timer timer_info tldefint tlimit todd_coxeter toeplitz tokens to_lisp topological_sort to_poly to_poly_solve totaldisrep totalfourier totient tpartpol trace tracematrix trace_options transform_sample translate translate_file transpose treefale tree_reduce treillis treinat triangle triangularize trigexpand trigrat trigreduce trigsimp trunc truncate truncated_cube_graph truncated_dodecahedron_graph truncated_icosahedron_graph truncated_tetrahedron_graph tr_warnings_get tube tutte_graph ueivects uforget ultraspherical underlying_graph undiff union unique uniteigenvectors unitp units unit_step unitvector unorder unsum untellrat untimer untrace uppercasep uricci uriemann uvect vandermonde_matrix var var1 var_bernoulli var_beta var_binomial var_chi2 var_continuous_uniform var_discrete_uniform var_exp var_f var_gamma var_general_finite_discrete var_geometric var_gumbel var_hypergeometric var_laplace var_logistic var_lognormal var_negative_binomial var_noncentral_chi2 var_noncentral_student_t var_normal var_pareto var_poisson var_rayleigh var_student_t var_weibull vector vectorpotential vectorsimp verbify vers vertex_coloring vertex_connectivity vertex_degree vertex_distance vertex_eccentricity vertex_in_degree vertex_out_degree vertices vertices_to_cycle vertices_to_path %w weyl wheel_graph wiener_index wigner_3j wigner_6j wigner_9j with_stdout write_binary_data writebyte write_data writefile wronskian xreduce xthru %y Zeilberger zeroequiv zerofor zeromatrix zeromatrixp zeta zgeev zheev zlange zn_add_table zn_carmichael_lambda zn_characteristic_factors zn_determinant zn_factor_generators zn_invert_by_lu zn_log zn_mult_table absboxchar activecontexts adapt_depth additive adim aform algebraic algepsilon algexact aliases allbut all_dotsimp_denoms allocation allsym alphabetic animation antisymmetric arrays askexp assume_pos assume_pos_pred assumescalar asymbol atomgrad atrig1 axes axis_3d axis_bottom axis_left axis_right axis_top azimuth background background_color backsubst berlefact bernstein_explicit besselexpand beta_args_sum_to_integer beta_expand bftorat bftrunc bindtest border boundaries_array box boxchar breakup %c capping cauchysum cbrange cbtics center cflength cframe_flag cnonmet_flag color color_bar color_bar_tics colorbox columns commutative complex cone context contexts contour contour_levels cosnpiflag ctaypov ctaypt ctayswitch ctayvar ct_coords ctorsion_flag ctrgsimp cube current_let_rule_package cylinder data_file_name debugmode decreasing default_let_rule_package delay dependencies derivabbrev derivsubst detout diagmetric diff dim dimensions dispflag display2d|10 display_format_internal distribute_over doallmxops domain domxexpt domxmxops domxnctimes dontfactor doscmxops doscmxplus dot0nscsimp dot0simp dot1simp dotassoc dotconstrules dotdistrib dotexptsimp dotident dotscrules draw_graph_program draw_realpart edge_color edge_coloring edge_partition edge_type edge_width %edispflag elevation %emode endphi endtheta engineering_format_floats enhanced3d %enumer epsilon_lp erfflag erf_representation errormsg error_size error_syms error_type %e_to_numlog eval even evenfun evflag evfun ev_point expandwrt_denom expintexpand expintrep expon expop exptdispflag exptisolate exptsubst facexpand facsum_combine factlim factorflag factorial_expand factors_only fb feature features file_name file_output_append file_search_demo file_search_lisp file_search_maxima|10 file_search_tests file_search_usage file_type_lisp file_type_maxima|10 fill_color fill_density filled_func fixed_vertices flipflag float2bf font font_size fortindent fortspaces fpprec fpprintprec functions gamma_expand gammalim gdet genindex gensumnum GGFCFMAX GGFINFINITY globalsolve gnuplot_command gnuplot_curve_styles gnuplot_curve_titles gnuplot_default_term_command gnuplot_dumb_term_command gnuplot_file_args gnuplot_file_name gnuplot_out_file gnuplot_pdf_term_command gnuplot_pm3d gnuplot_png_term_command gnuplot_postamble gnuplot_preamble gnuplot_ps_term_command gnuplot_svg_term_command gnuplot_term gnuplot_view_args Gosper_in_Zeilberger gradefs grid grid2d grind halfangles head_angle head_both head_length head_type height hypergeometric_representation %iargs ibase icc1 icc2 icounter idummyx ieqnprint ifb ifc1 ifc2 ifg ifgi ifr iframe_bracket_form ifri igeowedge_flag ikt1 ikt2 imaginary inchar increasing infeval infinity inflag infolists inm inmc1 inmc2 intanalysis integer integervalued integrate_use_rootsof integration_constant integration_constant_counter interpolate_color intfaclim ip_grid ip_grid_in irrational isolate_wrt_times iterations itr julia_parameter %k1 %k2 keepfloat key key_pos kinvariant kt label label_alignment label_orientation labels lassociative lbfgs_ncorrections lbfgs_nfeval_max leftjust legend letrat let_rule_packages lfg lg lhospitallim limsubst linear linear_solver linechar linel|10 linenum line_type linewidth line_width linsolve_params linsolvewarn lispdisp listarith listconstvars listdummyvars lmxchar load_pathname loadprint logabs logarc logcb logconcoeffp logexpand lognegint logsimp logx logx_secondary logy logy_secondary logz lriem m1pbranch macroexpansion macros mainvar manual_demo maperror mapprint matrix_element_add matrix_element_mult matrix_element_transpose maxapplydepth maxapplyheight maxima_tempdir|10 maxima_userdir|10 maxnegex MAX_ORD maxposex maxpsifracdenom maxpsifracnum maxpsinegint maxpsiposint maxtayorder mesh_lines_color method mod_big_prime mode_check_errorp mode_checkp mode_check_warnp mod_test mod_threshold modular_linear_solver modulus multiplicative multiplicities myoptions nary negdistrib negsumdispflag newline newtonepsilon newtonmaxiter nextlayerfactor niceindicespref nm nmc noeval nolabels nonegative_lp noninteger nonscalar noun noundisp nouns np npi nticks ntrig numer numer_pbranch obase odd oddfun opacity opproperties opsubst optimprefix optionset orientation origin orthopoly_returns_intervals outative outchar packagefile palette partswitch pdf_file pfeformat phiresolution %piargs piece pivot_count_sx pivot_max_sx plot_format plot_options plot_realpart png_file pochhammer_max_index points pointsize point_size points_joined point_type poislim poisson poly_coefficient_ring poly_elimination_order polyfactor poly_grobner_algorithm poly_grobner_debug poly_monomial_order poly_primary_elimination_order poly_return_term_list poly_secondary_elimination_order poly_top_reduction_only posfun position powerdisp pred prederror primep_number_of_tests product_use_gamma program programmode promote_float_to_bigfloat prompt proportional_axes props psexpand ps_file radexpand radius radsubstflag rassociative ratalgdenom ratchristof ratdenomdivide rateinstein ratepsilon ratfac rational ratmx ratprint ratriemann ratsimpexpons ratvarswitch ratweights ratweyl ratwtlvl real realonly redraw refcheck resolution restart resultant ric riem rmxchar %rnum_list rombergabs rombergit rombergmin rombergtol rootsconmode rootsepsilon run_viewer same_xy same_xyz savedef savefactors scalar scalarmatrixp scale scale_lp setcheck setcheckbreak setval show_edge_color show_edges show_edge_type show_edge_width show_id show_label showtime show_vertex_color show_vertex_size show_vertex_type show_vertices show_weight simp simplified_output simplify_products simpproduct simpsum sinnpiflag solvedecomposes solveexplicit solvefactors solvenullwarn solveradcan solvetrigwarn space sparse sphere spring_embedding_depth sqrtdispflag stardisp startphi starttheta stats_numer stringdisp structures style sublis_apply_lambda subnumsimp sumexpand sumsplitfact surface surface_hide svg_file symmetric tab taylordepth taylor_logexpand taylor_order_coefficients taylor_truncate_polynomials tensorkill terminal testsuite_files thetaresolution timer_devalue title tlimswitch tr track transcompile transform transform_xy translate_fast_arrays transparent transrun tr_array_as_ref tr_bound_function_applyp tr_file_tty_messagesp tr_float_can_branch_complex tr_function_call_default trigexpandplus trigexpandtimes triginverses trigsign trivial_solutions tr_numer tr_optimize_max_loop tr_semicompile tr_state_vars tr_warn_bad_function_calls tr_warn_fexpr tr_warn_meval tr_warn_mode tr_warn_undeclared tr_warn_undefined_variable tstep ttyoff tube_extremes ufg ug %unitexpand unit_vectors uric uriem use_fast_arrays user_preamble usersetunits values vect_cross verbose vertex_color vertex_coloring vertex_partition vertex_size vertex_type view warnings weyl width windowname windowtitle wired_surface wireframe xaxis xaxis_color xaxis_secondary xaxis_type xaxis_width xlabel xlabel_secondary xlength xrange xrange_secondary xtics xtics_axis xtics_rotate xtics_rotate_secondary xtics_secondary xtics_secondary_axis xu_grid x_voxel xy_file xyplane xy_scale yaxis yaxis_color yaxis_secondary yaxis_type yaxis_width ylabel ylabel_secondary ylength yrange yrange_secondary ytics ytics_axis ytics_rotate ytics_rotate_secondary ytics_secondary ytics_secondary_axis yv_grid y_voxel yx_ratio zaxis zaxis_color zaxis_type zaxis_width zeroa zerob zerobern zeta%pi zlabel zlabel_rotate zlength zmin zn_primroot_limit zn_primroot_pretest",
                symbol: "_ __ %|0 %%|0"
            },
            contains: [{
                className: "comment",
                begin: "/\\*",
                end: "\\*/",
                contains: ["self"]
            }, e.QUOTE_STRING_MODE, {
                className: "number",
                relevance: 0,
                variants: [{
                    begin: "\\b(\\d+|\\d+\\.|\\.\\d+|\\d+\\.\\d+)[Ee][-+]?\\d+\\b"
                }, {
                    begin: "\\b(\\d+|\\d+\\.|\\.\\d+|\\d+\\.\\d+)[Bb][-+]?\\d+\\b",
                    relevance: 10
                }, {
                    begin: "\\b(\\.\\d+|\\d+\\.\\d+)\\b"
                }, {
                    begin: "\\b(\\d+|0[0-9A-Za-z]+)\\.?\\b"
                }]
            }],
            illegal: /@/
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            keywords: "int float string vector matrix if else switch case default while do for in break continue global proc return about abs addAttr addAttributeEditorNodeHelp addDynamic addNewShelfTab addPP addPanelCategory addPrefixToName advanceToNextDrivenKey affectedNet affects aimConstraint air alias aliasAttr align alignCtx alignCurve alignSurface allViewFit ambientLight angle angleBetween animCone animCurveEditor animDisplay animView annotate appendStringArray applicationName applyAttrPreset applyTake arcLenDimContext arcLengthDimension arclen arrayMapper art3dPaintCtx artAttrCtx artAttrPaintVertexCtx artAttrSkinPaintCtx artAttrTool artBuildPaintMenu artFluidAttrCtx artPuttyCtx artSelectCtx artSetPaintCtx artUserPaintCtx assignCommand assignInputDevice assignViewportFactories attachCurve attachDeviceAttr attachSurface attrColorSliderGrp attrCompatibility attrControlGrp attrEnumOptionMenu attrEnumOptionMenuGrp attrFieldGrp attrFieldSliderGrp attrNavigationControlGrp attrPresetEditWin attributeExists attributeInfo attributeMenu attributeQuery autoKeyframe autoPlace bakeClip bakeFluidShading bakePartialHistory bakeResults bakeSimulation basename basenameEx batchRender bessel bevel bevelPlus binMembership bindSkin blend2 blendShape blendShapeEditor blendShapePanel blendTwoAttr blindDataType boneLattice boundary boxDollyCtx boxZoomCtx bufferCurve buildBookmarkMenu buildKeyframeMenu button buttonManip CBG cacheFile cacheFileCombine cacheFileMerge cacheFileTrack camera cameraView canCreateManip canvas capitalizeString catch catchQuiet ceil changeSubdivComponentDisplayLevel changeSubdivRegion channelBox character characterMap characterOutlineEditor characterize chdir checkBox checkBoxGrp checkDefaultRenderGlobals choice circle circularFillet clamp clear clearCache clip clipEditor clipEditorCurrentTimeCtx clipSchedule clipSchedulerOutliner clipTrimBefore closeCurve closeSurface cluster cmdFileOutput cmdScrollFieldExecuter cmdScrollFieldReporter cmdShell coarsenSubdivSelectionList collision color colorAtPoint colorEditor colorIndex colorIndexSliderGrp colorSliderButtonGrp colorSliderGrp columnLayout commandEcho commandLine commandPort compactHairSystem componentEditor compositingInterop computePolysetVolume condition cone confirmDialog connectAttr connectControl connectDynamic connectJoint connectionInfo constrain constrainValue constructionHistory container containsMultibyte contextInfo control convertFromOldLayers convertIffToPsd convertLightmap convertSolidTx convertTessellation convertUnit copyArray copyFlexor copyKey copySkinWeights cos cpButton cpCache cpClothSet cpCollision cpConstraint cpConvClothToMesh cpForces cpGetSolverAttr cpPanel cpProperty cpRigidCollisionFilter cpSeam cpSetEdit cpSetSolverAttr cpSolver cpSolverTypes cpTool cpUpdateClothUVs createDisplayLayer createDrawCtx createEditor createLayeredPsdFile createMotionField createNewShelf createNode createRenderLayer createSubdivRegion cross crossProduct ctxAbort ctxCompletion ctxEditMode ctxTraverse currentCtx currentTime currentTimeCtx currentUnit curve curveAddPtCtx curveCVCtx curveEPCtx curveEditorCtx curveIntersect curveMoveEPCtx curveOnSurface curveSketchCtx cutKey cycleCheck cylinder dagPose date defaultLightListCheckBox defaultNavigation defineDataServer defineVirtualDevice deformer deg_to_rad delete deleteAttr deleteShadingGroupsAndMaterials deleteShelfTab deleteUI deleteUnusedBrushes delrandstr detachCurve detachDeviceAttr detachSurface deviceEditor devicePanel dgInfo dgdirty dgeval dgtimer dimWhen directKeyCtx directionalLight dirmap dirname disable disconnectAttr disconnectJoint diskCache displacementToPoly displayAffected displayColor displayCull displayLevelOfDetail displayPref displayRGBColor displaySmoothness displayStats displayString displaySurface distanceDimContext distanceDimension doBlur dolly dollyCtx dopeSheetEditor dot dotProduct doubleProfileBirailSurface drag dragAttrContext draggerContext dropoffLocator duplicate duplicateCurve duplicateSurface dynCache dynControl dynExport dynExpression dynGlobals dynPaintEditor dynParticleCtx dynPref dynRelEdPanel dynRelEditor dynamicLoad editAttrLimits editDisplayLayerGlobals editDisplayLayerMembers editRenderLayerAdjustment editRenderLayerGlobals editRenderLayerMembers editor editorTemplate effector emit emitter enableDevice encodeString endString endsWith env equivalent equivalentTol erf error eval evalDeferred evalEcho event exactWorldBoundingBox exclusiveLightCheckBox exec executeForEachObject exists exp expression expressionEditorListen extendCurve extendSurface extrude fcheck fclose feof fflush fgetline fgetword file fileBrowserDialog fileDialog fileExtension fileInfo filetest filletCurve filter filterCurve filterExpand filterStudioImport findAllIntersections findAnimCurves findKeyframe findMenuItem findRelatedSkinCluster finder firstParentOf fitBspline flexor floatEq floatField floatFieldGrp floatScrollBar floatSlider floatSlider2 floatSliderButtonGrp floatSliderGrp floor flow fluidCacheInfo fluidEmitter fluidVoxelInfo flushUndo fmod fontDialog fopen formLayout format fprint frameLayout fread freeFormFillet frewind fromNativePath fwrite gamma gauss geometryConstraint getApplicationVersionAsFloat getAttr getClassification getDefaultBrush getFileList getFluidAttr getInputDeviceRange getMayaPanelTypes getModifiers getPanel getParticleAttr getPluginResource getenv getpid glRender glRenderEditor globalStitch gmatch goal gotoBindPose grabColor gradientControl gradientControlNoAttr graphDollyCtx graphSelectContext graphTrackCtx gravity grid gridLayout group groupObjectsByName HfAddAttractorToAS HfAssignAS HfBuildEqualMap HfBuildFurFiles HfBuildFurImages HfCancelAFR HfConnectASToHF HfCreateAttractor HfDeleteAS HfEditAS HfPerformCreateAS HfRemoveAttractorFromAS HfSelectAttached HfSelectAttractors HfUnAssignAS hardenPointCurve hardware hardwareRenderPanel headsUpDisplay headsUpMessage help helpLine hermite hide hilite hitTest hotBox hotkey hotkeyCheck hsv_to_rgb hudButton hudSlider hudSliderButton hwReflectionMap hwRender hwRenderLoad hyperGraph hyperPanel hyperShade hypot iconTextButton iconTextCheckBox iconTextRadioButton iconTextRadioCollection iconTextScrollList iconTextStaticLabel ikHandle ikHandleCtx ikHandleDisplayScale ikSolver ikSplineHandleCtx ikSystem ikSystemInfo ikfkDisplayMethod illustratorCurves image imfPlugins inheritTransform insertJoint insertJointCtx insertKeyCtx insertKnotCurve insertKnotSurface instance instanceable instancer intField intFieldGrp intScrollBar intSlider intSliderGrp interToUI internalVar intersect iprEngine isAnimCurve isConnected isDirty isParentOf isSameObject isTrue isValidObjectName isValidString isValidUiName isolateSelect itemFilter itemFilterAttr itemFilterRender itemFilterType joint jointCluster jointCtx jointDisplayScale jointLattice keyTangent keyframe keyframeOutliner keyframeRegionCurrentTimeCtx keyframeRegionDirectKeyCtx keyframeRegionDollyCtx keyframeRegionInsertKeyCtx keyframeRegionMoveKeyCtx keyframeRegionScaleKeyCtx keyframeRegionSelectKeyCtx keyframeRegionSetKeyCtx keyframeRegionTrackCtx keyframeStats lassoContext lattice latticeDeformKeyCtx launch launchImageEditor layerButton layeredShaderPort layeredTexturePort layout layoutDialog lightList lightListEditor lightListPanel lightlink lineIntersection linearPrecision linstep listAnimatable listAttr listCameras listConnections listDeviceAttachments listHistory listInputDeviceAxes listInputDeviceButtons listInputDevices listMenuAnnotation listNodeTypes listPanelCategories listRelatives listSets listTransforms listUnselected listerEditor loadFluid loadNewShelf loadPlugin loadPluginLanguageResources loadPrefObjects localizedPanelLabel lockNode loft log longNameOf lookThru ls lsThroughFilter lsType lsUI Mayatomr mag makeIdentity makeLive makePaintable makeRoll makeSingleSurface makeTubeOn makebot manipMoveContext manipMoveLimitsCtx manipOptions manipRotateContext manipRotateLimitsCtx manipScaleContext manipScaleLimitsCtx marker match max memory menu menuBarLayout menuEditor menuItem menuItemToShelf menuSet menuSetPref messageLine min minimizeApp mirrorJoint modelCurrentTimeCtx modelEditor modelPanel mouse movIn movOut move moveIKtoFK moveKeyCtx moveVertexAlongDirection multiProfileBirailSurface mute nParticle nameCommand nameField namespace namespaceInfo newPanelItems newton nodeCast nodeIconButton nodeOutliner nodePreset nodeType noise nonLinear normalConstraint normalize nurbsBoolean nurbsCopyUVSet nurbsCube nurbsEditUV nurbsPlane nurbsSelect nurbsSquare nurbsToPoly nurbsToPolygonsPref nurbsToSubdiv nurbsToSubdivPref nurbsUVSet nurbsViewDirectionVector objExists objectCenter objectLayer objectType objectTypeUI obsoleteProc oceanNurbsPreviewPlane offsetCurve offsetCurveOnSurface offsetSurface openGLExtension openMayaPref optionMenu optionMenuGrp optionVar orbit orbitCtx orientConstraint outlinerEditor outlinerPanel overrideModifier paintEffectsDisplay pairBlend palettePort paneLayout panel panelConfiguration panelHistory paramDimContext paramDimension paramLocator parent parentConstraint particle particleExists particleInstancer particleRenderInfo partition pasteKey pathAnimation pause pclose percent performanceOptions pfxstrokes pickWalk picture pixelMove planarSrf plane play playbackOptions playblast plugAttr plugNode pluginInfo pluginResourceUtil pointConstraint pointCurveConstraint pointLight pointMatrixMult pointOnCurve pointOnSurface pointPosition poleVectorConstraint polyAppend polyAppendFacetCtx polyAppendVertex polyAutoProjection polyAverageNormal polyAverageVertex polyBevel polyBlendColor polyBlindData polyBoolOp polyBridgeEdge polyCacheMonitor polyCheck polyChipOff polyClipboard polyCloseBorder polyCollapseEdge polyCollapseFacet polyColorBlindData polyColorDel polyColorPerVertex polyColorSet polyCompare polyCone polyCopyUV polyCrease polyCreaseCtx polyCreateFacet polyCreateFacetCtx polyCube polyCut polyCutCtx polyCylinder polyCylindricalProjection polyDelEdge polyDelFacet polyDelVertex polyDuplicateAndConnect polyDuplicateEdge polyEditUV polyEditUVShell polyEvaluate polyExtrudeEdge polyExtrudeFacet polyExtrudeVertex polyFlipEdge polyFlipUV polyForceUV polyGeoSampler polyHelix polyInfo polyInstallAction polyLayoutUV polyListComponentConversion polyMapCut polyMapDel polyMapSew polyMapSewMove polyMergeEdge polyMergeEdgeCtx polyMergeFacet polyMergeFacetCtx polyMergeUV polyMergeVertex polyMirrorFace polyMoveEdge polyMoveFacet polyMoveFacetUV polyMoveUV polyMoveVertex polyNormal polyNormalPerVertex polyNormalizeUV polyOptUvs polyOptions polyOutput polyPipe polyPlanarProjection polyPlane polyPlatonicSolid polyPoke polyPrimitive polyPrism polyProjection polyPyramid polyQuad polyQueryBlindData polyReduce polySelect polySelectConstraint polySelectConstraintMonitor polySelectCtx polySelectEditCtx polySeparate polySetToFaceNormal polySewEdge polyShortestPathCtx polySmooth polySoftEdge polySphere polySphericalProjection polySplit polySplitCtx polySplitEdge polySplitRing polySplitVertex polyStraightenUVBorder polySubdivideEdge polySubdivideFacet polyToSubdiv polyTorus polyTransfer polyTriangulate polyUVSet polyUnite polyWedgeFace popen popupMenu pose pow preloadRefEd print progressBar progressWindow projFileViewer projectCurve projectTangent projectionContext projectionManip promptDialog propModCtx propMove psdChannelOutliner psdEditTextureFile psdExport psdTextureFile putenv pwd python querySubdiv quit rad_to_deg radial radioButton radioButtonGrp radioCollection radioMenuItemCollection rampColorPort rand randomizeFollicles randstate rangeControl readTake rebuildCurve rebuildSurface recordAttr recordDevice redo reference referenceEdit referenceQuery refineSubdivSelectionList refresh refreshAE registerPluginResource rehash reloadImage removeJoint removeMultiInstance removePanelCategory rename renameAttr renameSelectionList renameUI render renderGlobalsNode renderInfo renderLayerButton renderLayerParent renderLayerPostProcess renderLayerUnparent renderManip renderPartition renderQualityNode renderSettings renderThumbnailUpdate renderWindowEditor renderWindowSelectContext renderer reorder reorderDeformers requires reroot resampleFluid resetAE resetPfxToPolyCamera resetTool resolutionNode retarget reverseCurve reverseSurface revolve rgb_to_hsv rigidBody rigidSolver roll rollCtx rootOf rot rotate rotationInterpolation roundConstantRadius rowColumnLayout rowLayout runTimeCommand runup sampleImage saveAllShelves saveAttrPreset saveFluid saveImage saveInitialState saveMenu savePrefObjects savePrefs saveShelf saveToolSettings scale scaleBrushBrightness scaleComponents scaleConstraint scaleKey scaleKeyCtx sceneEditor sceneUIReplacement scmh scriptCtx scriptEditorInfo scriptJob scriptNode scriptTable scriptToShelf scriptedPanel scriptedPanelType scrollField scrollLayout sculpt searchPathArray seed selLoadSettings select selectContext selectCurveCV selectKey selectKeyCtx selectKeyframeRegionCtx selectMode selectPref selectPriority selectType selectedNodes selectionConnection separator setAttr setAttrEnumResource setAttrMapping setAttrNiceNameResource setConstraintRestPosition setDefaultShadingGroup setDrivenKeyframe setDynamic setEditCtx setEditor setFluidAttr setFocus setInfinity setInputDeviceMapping setKeyCtx setKeyPath setKeyframe setKeyframeBlendshapeTargetWts setMenuMode setNodeNiceNameResource setNodeTypeFlag setParent setParticleAttr setPfxToPolyCamera setPluginResource setProject setStampDensity setStartupMessage setState setToolTo setUITemplate setXformManip sets shadingConnection shadingGeometryRelCtx shadingLightRelCtx shadingNetworkCompare shadingNode shapeCompare shelfButton shelfLayout shelfTabLayout shellField shortNameOf showHelp showHidden showManipCtx showSelectionInTitle showShadingGroupAttrEditor showWindow sign simplify sin singleProfileBirailSurface size sizeBytes skinCluster skinPercent smoothCurve smoothTangentSurface smoothstep snap2to2 snapKey snapMode snapTogetherCtx snapshot soft softMod softModCtx sort sound soundControl source spaceLocator sphere sphrand spotLight spotLightPreviewPort spreadSheetEditor spring sqrt squareSurface srtContext stackTrace startString startsWith stitchAndExplodeShell stitchSurface stitchSurfacePoints strcmp stringArrayCatenate stringArrayContains stringArrayCount stringArrayInsertAtIndex stringArrayIntersector stringArrayRemove stringArrayRemoveAtIndex stringArrayRemoveDuplicates stringArrayRemoveExact stringArrayToString stringToStringArray strip stripPrefixFromName stroke subdAutoProjection subdCleanTopology subdCollapse subdDuplicateAndConnect subdEditUV subdListComponentConversion subdMapCut subdMapSewMove subdMatchTopology subdMirror subdToBlind subdToPoly subdTransferUVsToCache subdiv subdivCrease subdivDisplaySmoothness substitute substituteAllString substituteGeometry substring surface surfaceSampler surfaceShaderList swatchDisplayPort switchTable symbolButton symbolCheckBox sysFile system tabLayout tan tangentConstraint texLatticeDeformContext texManipContext texMoveContext texMoveUVShellContext texRotateContext texScaleContext texSelectContext texSelectShortestPathCtx texSmudgeUVContext texWinToolCtx text textCurves textField textFieldButtonGrp textFieldGrp textManip textScrollList textToShelf textureDisplacePlane textureHairColor texturePlacementContext textureWindow threadCount threePointArcCtx timeControl timePort timerX toNativePath toggle toggleAxis toggleWindowVisibility tokenize tokenizeList tolerance tolower toolButton toolCollection toolDropped toolHasOptions toolPropertyWindow torus toupper trace track trackCtx transferAttributes transformCompare transformLimits translator trim trunc truncateFluidCache truncateHairCache tumble tumbleCtx turbulence twoPointArcCtx uiRes uiTemplate unassignInputDevice undo undoInfo ungroup uniform unit unloadPlugin untangleUV untitledFileName untrim upAxis updateAE userCtx uvLink uvSnapshot validateShelfName vectorize view2dToolCtx viewCamera viewClipPlane viewFit viewHeadOn viewLookAt viewManip viewPlace viewSet visor volumeAxis vortex waitCursor warning webBrowser webBrowserPrefs whatIs window windowPref wire wireContext workspace wrinkle wrinkleContext writeTake xbmLangPathList xform",
            illegal: "</",
            contains: [e.C_NUMBER_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                className: "string",
                begin: "`",
                end: "`",
                contains: [e.BACKSLASH_ESCAPE]
            }, {
                begin: "[\\$\\%\\@](\\^\\w\\b|#\\w+|[^\\s\\w{]|{\\w+}|\\w+)"
            }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            keyword: "module use_module import_module include_module end_module initialise mutable initialize finalize finalise interface implementation pred mode func type inst solver any_pred any_func is semidet det nondet multi erroneous failure cc_nondet cc_multi typeclass instance where pragma promise external trace atomic or_else require_complete_switch require_det require_semidet require_multi require_nondet require_cc_multi require_cc_nondet require_erroneous require_failure",
            meta: "inline no_inline type_spec source_file fact_table obsolete memo loop_check minimal_model terminates does_not_terminate check_termination promise_equivalent_clauses foreign_proc foreign_decl foreign_code foreign_type foreign_import_module foreign_export_enum foreign_export foreign_enum may_call_mercury will_not_call_mercury thread_safe not_thread_safe maybe_thread_safe promise_pure promise_semipure tabled_for_io local untrailed trailed attach_to_io_state can_pass_as_mercury_type stable will_not_throw_exception may_modify_trail will_not_modify_trail may_duplicate may_not_duplicate affects_liveness does_not_affect_liveness doesnt_affect_liveness no_sharing unknown_sharing sharing",
            built_in: "some all not if then else true fail false try catch catch_any semidet_true semidet_false semidet_fail impure_true impure semipure"
        }
          , n = e.COMMENT("%", "$")
          , r = {
            className: "number",
            begin: "0'.\\|0[box][0-9a-fA-F]*"
        }
          , a = e.inherit(e.APOS_STRING_MODE, {
            relevance: 0
        })
          , i = e.inherit(e.QUOTE_STRING_MODE, {
            relevance: 0
        })
          , s = {
            className: "subst",
            begin: "\\\\[abfnrtv]\\|\\\\x[0-9a-fA-F]*\\\\\\|%[-+# *.0-9]*[dioxXucsfeEgGp]",
            relevance: 0
        };
        return i.contains.push(s),
        {
            aliases: ["m", "moo"],
            keywords: t,
            contains: [{
                className: "built_in",
                variants: [{
                    begin: "<=>"
                }, {
                    begin: "<=",
                    relevance: 0
                }, {
                    begin: "=>",
                    relevance: 0
                }, {
                    begin: "/\\\\"
                }, {
                    begin: "\\\\/"
                }]
            }, {
                className: "built_in",
                variants: [{
                    begin: ":-\\|--\x3e"
                }, {
                    begin: "=",
                    relevance: 0
                }]
            }, n, e.C_BLOCK_COMMENT_MODE, r, e.NUMBER_MODE, a, i, {
                begin: /:-/
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            case_insensitive: !0,
            aliases: ["mips"],
            lexemes: "\\.?" + e.IDENT_RE,
            keywords: {
                meta: ".2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .ltorg ",
                built_in: "$0 $1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11 $12 $13 $14 $15 $16 $17 $18 $19 $20 $21 $22 $23 $24 $25 $26 $27 $28 $29 $30 $31 zero at v0 v1 a0 a1 a2 a3 a4 a5 a6 a7 t0 t1 t2 t3 t4 t5 t6 t7 t8 t9 s0 s1 s2 s3 s4 s5 s6 s7 s8 k0 k1 gp sp fp ra $f0 $f1 $f2 $f2 $f4 $f5 $f6 $f7 $f8 $f9 $f10 $f11 $f12 $f13 $f14 $f15 $f16 $f17 $f18 $f19 $f20 $f21 $f22 $f23 $f24 $f25 $f26 $f27 $f28 $f29 $f30 $f31 Context Random EntryLo0 EntryLo1 Context PageMask Wired EntryHi HWREna BadVAddr Count Compare SR IntCtl SRSCtl SRSMap Cause EPC PRId EBase Config Config1 Config2 Config3 LLAddr Debug DEPC DESAVE CacheErr ECC ErrorEPC TagLo DataLo TagHi DataHi WatchLo WatchHi PerfCtl PerfCnt "
            },
            contains: [{
                className: "keyword",
                begin: "\\b(addi?u?|andi?|b(al)?|beql?|bgez(al)?l?|bgtzl?|blezl?|bltz(al)?l?|bnel?|cl[oz]|divu?|ext|ins|j(al)?|jalr(.hb)?|jr(.hb)?|lbu?|lhu?|ll|lui|lw[lr]?|maddu?|mfhi|mflo|movn|movz|move|msubu?|mthi|mtlo|mul|multu?|nop|nor|ori?|rotrv?|sb|sc|se[bh]|sh|sllv?|slti?u?|srav?|srlv?|subu?|sw[lr]?|xori?|wsbh|abs.[sd]|add.[sd]|alnv.ps|bc1[ft]l?|c.(s?f|un|u?eq|[ou]lt|[ou]le|ngle?|seq|l[et]|ng[et]).[sd]|(ceil|floor|round|trunc).[lw].[sd]|cfc1|cvt.d.[lsw]|cvt.l.[dsw]|cvt.ps.s|cvt.s.[dlw]|cvt.s.p[lu]|cvt.w.[dls]|div.[ds]|ldx?c1|luxc1|lwx?c1|madd.[sd]|mfc1|mov[fntz]?.[ds]|msub.[sd]|mth?c1|mul.[ds]|neg.[ds]|nmadd.[ds]|nmsub.[ds]|p[lu][lu].ps|recip.fmt|r?sqrt.[ds]|sdx?c1|sub.[ds]|suxc1|swx?c1|break|cache|d?eret|[de]i|ehb|mfc0|mtc0|pause|prefx?|rdhwr|rdpgpr|sdbbp|ssnop|synci?|syscall|teqi?|tgei?u?|tlb(p|r|w[ir])|tlti?u?|tnei?|wait|wrpgpr)",
                end: "\\s"
            }, e.COMMENT("[;#]", "$"), e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, {
                className: "string",
                begin: "'",
                end: "[^\\\\]'",
                relevance: 0
            }, {
                className: "title",
                begin: "\\|",
                end: "\\|",
                illegal: "\\n",
                relevance: 0
            }, {
                className: "number",
                variants: [{
                    begin: "0x[0-9a-f]+"
                }, {
                    begin: "\\b-?\\d+"
                }],
                relevance: 0
            }, {
                className: "symbol",
                variants: [{
                    begin: "^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:"
                }, {
                    begin: "^\\s*[0-9]+:"
                }, {
                    begin: "[0-9]+[bf]"
                }],
                relevance: 0
            }],
            illegal: "/"
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            keywords: "environ vocabularies notations constructors definitions registrations theorems schemes requirements begin end definition registration cluster existence pred func defpred deffunc theorem proof let take assume then thus hence ex for st holds consider reconsider such that and in provided of as from be being by means equals implies iff redefine define now not or attr is mode suppose per cases set thesis contradiction scheme reserve struct correctness compatibility coherence symmetry assymetry reflexivity irreflexivity connectedness uniqueness commutativity idempotence involutiveness projectivity",
            contains: [e.COMMENT("::", "$")]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            subLanguage: "xml",
            contains: [{
                className: "meta",
                begin: "^__(END|DATA)__$"
            }, {
                begin: "^\\s*%{1,2}={0,2}",
                end: "$",
                subLanguage: "perl"
            }, {
                begin: "<%{1,2}={0,2}",
                end: "={0,1}%>",
                subLanguage: "perl",
                excludeBegin: !0,
                excludeEnd: !0
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "number",
            relevance: 0,
            variants: [{
                begin: "[$][a-fA-F0-9]+"
            }, e.NUMBER_MODE]
        };
        return {
            case_insensitive: !0,
            keywords: {
                keyword: "public private property continue exit extern new try catch eachin not abstract final select case default const local global field end if then else elseif endif while wend repeat until forever for to step next return module inline throw import",
                built_in: "DebugLog DebugStop Error Print ACos ACosr ASin ASinr ATan ATan2 ATan2r ATanr Abs Abs Ceil Clamp Clamp Cos Cosr Exp Floor Log Max Max Min Min Pow Sgn Sgn Sin Sinr Sqrt Tan Tanr Seed PI HALFPI TWOPI",
                literal: "true false null and or shl shr mod"
            },
            illegal: /\/\*/,
            contains: [e.COMMENT("#rem", "#end"), e.COMMENT("'", "$", {
                relevance: 0
            }), {
                className: "function",
                beginKeywords: "function method",
                end: "[(=:]|$",
                illegal: /\n/,
                contains: [e.UNDERSCORE_TITLE_MODE]
            }, {
                className: "class",
                beginKeywords: "class interface",
                end: "$",
                contains: [{
                    beginKeywords: "extends implements"
                }, e.UNDERSCORE_TITLE_MODE]
            }, {
                className: "built_in",
                begin: "\\b(self|super)\\b"
            }, {
                className: "meta",
                begin: "\\s*#",
                end: "$",
                keywords: {
                    "meta-keyword": "if else elseif endif end then"
                }
            }, {
                className: "meta",
                begin: "^\\s*strict\\b"
            }, {
                beginKeywords: "alias",
                end: "=",
                contains: [e.UNDERSCORE_TITLE_MODE]
            }, e.QUOTE_STRING_MODE, t]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            keyword: "if then not for in while do return else elseif break continue switch and or unless when class extends super local import export from using",
            literal: "true false nil",
            built_in: "_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"
        }
          , n = "[A-Za-z$_][0-9A-Za-z$_]*"
          , r = {
            className: "subst",
            begin: /#\{/,
            end: /}/,
            keywords: t
        }
          , a = [e.inherit(e.C_NUMBER_MODE, {
            starts: {
                end: "(\\s*/)?",
                relevance: 0
            }
        }), {
            className: "string",
            variants: [{
                begin: /'/,
                end: /'/,
                contains: [e.BACKSLASH_ESCAPE]
            }, {
                begin: /"/,
                end: /"/,
                contains: [e.BACKSLASH_ESCAPE, r]
            }]
        }, {
            className: "built_in",
            begin: "@__" + e.IDENT_RE
        }, {
            begin: "@" + e.IDENT_RE
        }, {
            begin: e.IDENT_RE + "\\\\" + e.IDENT_RE
        }];
        r.contains = a;
        var i = e.inherit(e.TITLE_MODE, {
            begin: n
        })
          , s = {
            className: "params",
            begin: "\\([^\\(]",
            returnBegin: !0,
            contains: [{
                begin: /\(/,
                end: /\)/,
                keywords: t,
                contains: ["self"].concat(a)
            }]
        };
        return {
            aliases: ["moon"],
            keywords: t,
            illegal: /\/\*/,
            contains: a.concat([e.COMMENT("--", "$"), {
                className: "function",
                begin: "^\\s*" + n + "\\s*=\\s*(\\(.*\\))?\\s*\\B[-=]>",
                end: "[-=]>",
                returnBegin: !0,
                contains: [i, s]
            }, {
                begin: /[\(,:=]\s*/,
                relevance: 0,
                contains: [{
                    className: "function",
                    begin: "(\\(.*\\))?\\s*\\B[-=]>",
                    end: "[-=]>",
                    returnBegin: !0,
                    contains: [s]
                }]
            }, {
                className: "class",
                beginKeywords: "class",
                end: "$",
                illegal: /[:="\[\]]/,
                contains: [{
                    beginKeywords: "extends",
                    endsWithParent: !0,
                    illegal: /[:="\[\]]/,
                    contains: [i]
                }, i]
            }, {
                className: "name",
                begin: n + ":",
                end: ":",
                returnBegin: !0,
                returnEnd: !0,
                relevance: 0
            }])
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            case_insensitive: !0,
            contains: [{
                beginKeywords: "build create index delete drop explain infer|10 insert merge prepare select update upsert|10",
                end: /;/,
                endsWithParent: !0,
                keywords: {
                    keyword: "all alter analyze and any array as asc begin between binary boolean break bucket build by call case cast cluster collate collection commit connect continue correlate cover create database dataset datastore declare decrement delete derived desc describe distinct do drop each element else end every except exclude execute exists explain fetch first flatten for force from function grant group gsi having if ignore ilike in include increment index infer inline inner insert intersect into is join key keys keyspace known last left let letting like limit lsm map mapping matched materialized merge minus namespace nest not number object offset on option or order outer over parse partition password path pool prepare primary private privilege procedure public raw realm reduce rename return returning revoke right role rollback satisfies schema select self semi set show some start statistics string system then to transaction trigger truncate under union unique unknown unnest unset update upsert use user using validate value valued values via view when where while with within work xor",
                    literal: "true false null missing|5",
                    built_in: "array_agg array_append array_concat array_contains array_count array_distinct array_ifnull array_length array_max array_min array_position array_prepend array_put array_range array_remove array_repeat array_replace array_reverse array_sort array_sum avg count max min sum greatest least ifmissing ifmissingornull ifnull missingif nullif ifinf ifnan ifnanorinf naninf neginfif posinfif clock_millis clock_str date_add_millis date_add_str date_diff_millis date_diff_str date_part_millis date_part_str date_trunc_millis date_trunc_str duration_to_str millis str_to_millis millis_to_str millis_to_utc millis_to_zone_name now_millis now_str str_to_duration str_to_utc str_to_zone_name decode_json encode_json encoded_size poly_length base64 base64_encode base64_decode meta uuid abs acos asin atan atan2 ceil cos degrees e exp ln log floor pi power radians random round sign sin sqrt tan trunc object_length object_names object_pairs object_inner_pairs object_values object_inner_values object_add object_put object_remove object_unwrap regexp_contains regexp_like regexp_position regexp_replace contains initcap length lower ltrim position repeat replace rtrim split substr title trim upper isarray isatom isboolean isnumber isobject isstring type toarray toatom toboolean tonumber toobject tostring"
                },
                contains: [{
                    className: "string",
                    begin: "'",
                    end: "'",
                    contains: [e.BACKSLASH_ESCAPE],
                    relevance: 0
                }, {
                    className: "string",
                    begin: '"',
                    end: '"',
                    contains: [e.BACKSLASH_ESCAPE],
                    relevance: 0
                }, {
                    className: "symbol",
                    begin: "`",
                    end: "`",
                    contains: [e.BACKSLASH_ESCAPE],
                    relevance: 2
                }, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE]
            }, e.C_BLOCK_COMMENT_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "variable",
            variants: [{
                begin: /\$\d+/
            }, {
                begin: /\$\{/,
                end: /}/
            }, {
                begin: "[\\$\\@]" + e.UNDERSCORE_IDENT_RE
            }]
        }
          , n = {
            endsWithParent: !0,
            lexemes: "[a-z/_]+",
            keywords: {
                literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
            },
            relevance: 0,
            illegal: "=>",
            contains: [e.HASH_COMMENT_MODE, {
                className: "string",
                contains: [e.BACKSLASH_ESCAPE, t],
                variants: [{
                    begin: /"/,
                    end: /"/
                }, {
                    begin: /'/,
                    end: /'/
                }]
            }, {
                begin: "([a-z]+):/",
                end: "\\s",
                endsWithParent: !0,
                excludeEnd: !0,
                contains: [t]
            }, {
                className: "regexp",
                contains: [e.BACKSLASH_ESCAPE, t],
                variants: [{
                    begin: "\\s\\^",
                    end: "\\s|{|;",
                    returnEnd: !0
                }, {
                    begin: "~\\*?\\s+",
                    end: "\\s|{|;",
                    returnEnd: !0
                }, {
                    begin: "\\*(\\.[a-z\\-]+)+"
                }, {
                    begin: "([a-z\\-]+\\.)+\\*"
                }]
            }, {
                className: "number",
                begin: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
            }, {
                className: "number",
                begin: "\\b\\d+[kKmMgGdshdwy]*\\b",
                relevance: 0
            }, t]
        };
        return {
            aliases: ["nginxconf"],
            contains: [e.HASH_COMMENT_MODE, {
                begin: e.UNDERSCORE_IDENT_RE + "\\s+{",
                returnBegin: !0,
                end: "{",
                contains: [{
                    className: "section",
                    begin: e.UNDERSCORE_IDENT_RE
                }],
                relevance: 0
            }, {
                begin: e.UNDERSCORE_IDENT_RE + "\\s",
                end: ";|{",
                returnBegin: !0,
                contains: [{
                    className: "attribute",
                    begin: e.UNDERSCORE_IDENT_RE,
                    starts: n
                }],
                relevance: 0
            }],
            illegal: "[^\\s\\}]"
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["nim"],
            keywords: {
                keyword: "addr and as asm bind block break case cast const continue converter discard distinct div do elif else end enum except export finally for from generic if import in include interface is isnot iterator let macro method mixin mod nil not notin object of or out proc ptr raise ref return shl shr static template try tuple type using var when while with without xor yield",
                literal: "shared guarded stdin stdout stderr result true false",
                built_in: "int int8 int16 int32 int64 uint uint8 uint16 uint32 uint64 float float32 float64 bool char string cstring pointer expr stmt void auto any range array openarray varargs seq set clong culong cchar cschar cshort cint csize clonglong cfloat cdouble clongdouble cuchar cushort cuint culonglong cstringarray semistatic"
            },
            contains: [{
                className: "meta",
                begin: /{\./,
                end: /\.}/,
                relevance: 10
            }, {
                className: "string",
                begin: /[a-zA-Z]\w*"/,
                end: /"/,
                contains: [{
                    begin: /""/
                }]
            }, {
                className: "string",
                begin: /([a-zA-Z]\w*)?"""/,
                end: /"""/
            }, e.QUOTE_STRING_MODE, {
                className: "type",
                begin: /\b[A-Z]\w+\b/,
                relevance: 0
            }, {
                className: "number",
                relevance: 0,
                variants: [{
                    begin: /\b(0[xX][0-9a-fA-F][_0-9a-fA-F]*)('?[iIuU](8|16|32|64))?/
                }, {
                    begin: /\b(0o[0-7][_0-7]*)('?[iIuUfF](8|16|32|64))?/
                }, {
                    begin: /\b(0(b|B)[01][_01]*)('?[iIuUfF](8|16|32|64))?/
                }, {
                    begin: /\b(\d[_\d]*)('?[iIuUfF](8|16|32|64))?/
                }]
            }, e.HASH_COMMENT_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            keyword: "rec with let in inherit assert if else then",
            literal: "true false or and null",
            built_in: "import abort baseNameOf dirOf isNull builtins map removeAttrs throw toString derivation"
        }
          , n = {
            className: "subst",
            begin: /\$\{/,
            end: /}/,
            keywords: t
        }
          , r = {
            begin: /[a-zA-Z0-9-_]+(\s*=)/,
            returnBegin: !0,
            relevance: 0,
            contains: [{
                className: "attr",
                begin: /\S+/
            }]
        }
          , a = {
            className: "string",
            contains: [n],
            variants: [{
                begin: "''",
                end: "''"
            }, {
                begin: '"',
                end: '"'
            }]
        }
          , i = [e.NUMBER_MODE, e.HASH_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, a, r];
        return n.contains = i,
        {
            aliases: ["nixos"],
            keywords: t,
            contains: i
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "variable",
            begin: /\$(ADMINTOOLS|APPDATA|CDBURN_AREA|CMDLINE|COMMONFILES32|COMMONFILES64|COMMONFILES|COOKIES|DESKTOP|DOCUMENTS|EXEDIR|EXEFILE|EXEPATH|FAVORITES|FONTS|HISTORY|HWNDPARENT|INSTDIR|INTERNET_CACHE|LANGUAGE|LOCALAPPDATA|MUSIC|NETHOOD|OUTDIR|PICTURES|PLUGINSDIR|PRINTHOOD|PROFILE|PROGRAMFILES32|PROGRAMFILES64|PROGRAMFILES|QUICKLAUNCH|RECENT|RESOURCES_LOCALIZED|RESOURCES|SENDTO|SMPROGRAMS|SMSTARTUP|STARTMENU|SYSDIR|TEMP|TEMPLATES|VIDEOS|WINDIR)/
        }
          , n = {
            className: "variable",
            begin: /\$+{[\w\.:-]+}/
        }
          , r = {
            className: "variable",
            begin: /\$+\w+/,
            illegal: /\(\){}/
        }
          , a = {
            className: "variable",
            begin: /\$+\([\w\^\.:-]+\)/
        }
          , i = {
            className: "params",
            begin: "(ARCHIVE|FILE_ATTRIBUTE_ARCHIVE|FILE_ATTRIBUTE_NORMAL|FILE_ATTRIBUTE_OFFLINE|FILE_ATTRIBUTE_READONLY|FILE_ATTRIBUTE_SYSTEM|FILE_ATTRIBUTE_TEMPORARY|HKCR|HKCU|HKDD|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_DYN_DATA|HKEY_LOCAL_MACHINE|HKEY_PERFORMANCE_DATA|HKEY_USERS|HKLM|HKPD|HKU|IDABORT|IDCANCEL|IDIGNORE|IDNO|IDOK|IDRETRY|IDYES|MB_ABORTRETRYIGNORE|MB_DEFBUTTON1|MB_DEFBUTTON2|MB_DEFBUTTON3|MB_DEFBUTTON4|MB_ICONEXCLAMATION|MB_ICONINFORMATION|MB_ICONQUESTION|MB_ICONSTOP|MB_OK|MB_OKCANCEL|MB_RETRYCANCEL|MB_RIGHT|MB_RTLREADING|MB_SETFOREGROUND|MB_TOPMOST|MB_USERICON|MB_YESNO|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)"
        }
          , s = {
            className: "keyword",
            begin: /\!(addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversionsystem|ifdef|ifmacrodef|ifmacrondef|ifndef|if|include|insertmacro|macroend|macro|makensis|packhdr|searchparse|searchreplace|tempfile|undef|verbose|warning)/
        }
          , o = {
            className: "subst",
            begin: /\$(\\[nrt]|\$)/
        }
          , l = {
            className: "class",
            begin: /\w+\:\:\w+/
        }
          , c = {
            className: "string",
            variants: [{
                begin: '"',
                end: '"'
            }, {
                begin: "'",
                end: "'"
            }, {
                begin: "`",
                end: "`"
            }],
            illegal: /\n/,
            contains: [o, t, n, r, a]
        };
        return {
            case_insensitive: !1,
            keywords: {
                keyword: "Abort AddBrandingImage AddSize AllowRootDirInstall AllowSkipFiles AutoCloseWindow BGFont BGGradient BrandingText BringToFront Call CallInstDLL Caption ChangeUI CheckBitmap ClearErrors CompletedText ComponentText CopyFiles CRCCheck CreateDirectory CreateFont CreateShortCut Delete DeleteINISec DeleteINIStr DeleteRegKey DeleteRegValue DetailPrint DetailsButtonText DirText DirVar DirVerify EnableWindow EnumRegKey EnumRegValue Exch Exec ExecShell ExecWait ExpandEnvStrings File FileBufSize FileClose FileErrorText FileOpen FileRead FileReadByte FileReadUTF16LE FileReadWord FileSeek FileWrite FileWriteByte FileWriteUTF16LE FileWriteWord FindClose FindFirst FindNext FindWindow FlushINI FunctionEnd GetCurInstType GetCurrentAddress GetDlgItem GetDLLVersion GetDLLVersionLocal GetErrorLevel GetFileTime GetFileTimeLocal GetFullPathName GetFunctionAddress GetInstDirError GetLabelAddress GetTempFileName Goto HideWindow Icon IfAbort IfErrors IfFileExists IfRebootFlag IfSilent InitPluginsDir InstallButtonText InstallColors InstallDir InstallDirRegKey InstProgressFlags InstType InstTypeGetText InstTypeSetText IntCmp IntCmpU IntFmt IntOp IsWindow LangString LicenseBkColor LicenseData LicenseForceSelection LicenseLangString LicenseText LoadLanguageFile LockWindow LogSet LogText ManifestDPIAware ManifestSupportedOS MessageBox MiscButtonText Name Nop OutFile Page PageCallbacks PageExEnd Pop Push Quit ReadEnvStr ReadINIStr ReadRegDWORD ReadRegStr Reboot RegDLL Rename RequestExecutionLevel ReserveFile Return RMDir SearchPath SectionEnd SectionGetFlags SectionGetInstTypes SectionGetSize SectionGetText SectionGroupEnd SectionIn SectionSetFlags SectionSetInstTypes SectionSetSize SectionSetText SendMessage SetAutoClose SetBrandingImage SetCompress SetCompressor SetCompressorDictSize SetCtlColors SetCurInstType SetDatablockOptimize SetDateSave SetDetailsPrint SetDetailsView SetErrorLevel SetErrors SetFileAttributes SetFont SetOutPath SetOverwrite SetRebootFlag SetRegView SetShellVarContext SetSilent ShowInstDetails ShowUninstDetails ShowWindow SilentInstall SilentUnInstall Sleep SpaceTexts StrCmp StrCmpS StrCpy StrLen SubCaption Unicode UninstallButtonText UninstallCaption UninstallIcon UninstallSubCaption UninstallText UninstPage UnRegDLL Var VIAddVersionKey VIFileVersion VIProductVersion WindowIcon WriteINIStr WriteRegBin WriteRegDWORD WriteRegExpandStr WriteRegStr WriteUninstaller XPStyle",
                literal: "admin all auto both bottom bzip2 colored components current custom directory false force hide highest ifdiff ifnewer instfiles lastused leave left license listonly lzma nevershow none normal notset off on open print right show silent silentlog smooth textonly top true try un.components un.custom un.directory un.instfiles un.license uninstConfirm user Win10 Win7 Win8 WinVista zlib"
            },
            contains: [e.HASH_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.COMMENT(";", "$", {
                relevance: 0
            }), {
                className: "function",
                beginKeywords: "Function PageEx Section SectionGroup",
                end: "$"
            }, c, s, n, r, a, i, l, e.NUMBER_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "built_in",
            begin: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
        }
          , n = {
            keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN",
            literal: "false true FALSE TRUE nil YES NO NULL",
            built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
        }
          , r = /[a-zA-Z@][a-zA-Z0-9_]*/
          , a = "@interface @class @protocol @implementation";
        return {
            aliases: ["mm", "objc", "obj-c"],
            keywords: n,
            lexemes: r,
            illegal: "</",
            contains: [t, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.C_NUMBER_MODE, e.QUOTE_STRING_MODE, {
                className: "string",
                variants: [{
                    begin: '@"',
                    end: '"',
                    illegal: "\\n",
                    contains: [e.BACKSLASH_ESCAPE]
                }, {
                    begin: "'",
                    end: "[^\\\\]'",
                    illegal: "[^\\\\][^']"
                }]
            }, {
                className: "meta",
                begin: "#",
                end: "$",
                contains: [{
                    className: "meta-string",
                    variants: [{
                        begin: '"',
                        end: '"'
                    }, {
                        begin: "<",
                        end: ">"
                    }]
                }]
            }, {
                className: "class",
                begin: "(" + a.split(" ").join("|") + ")\\b",
                end: "({|$)",
                excludeEnd: !0,
                keywords: a,
                lexemes: r,
                contains: [e.UNDERSCORE_TITLE_MODE]
            }, {
                begin: "\\." + e.UNDERSCORE_IDENT_RE,
                relevance: 0
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["ml"],
            keywords: {
                keyword: "and as assert asr begin class constraint do done downto else end exception external for fun function functor if in include inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method mod module mutable new object of open! open or private rec sig struct then to try type val! val virtual when while with parser value",
                built_in: "array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit in_channel out_channel ref",
                literal: "true false"
            },
            illegal: /\/\/|>>/,
            lexemes: "[a-z_]\\w*!?",
            contains: [{
                className: "literal",
                begin: "\\[(\\|\\|)?\\]|\\(\\)",
                relevance: 0
            }, e.COMMENT("\\(\\*", "\\*\\)", {
                contains: ["self"]
            }), {
                className: "symbol",
                begin: "'[A-Za-z_](?!')[\\w']*"
            }, {
                className: "type",
                begin: "`[A-Z][\\w']*"
            }, {
                className: "type",
                begin: "\\b[A-Z][\\w']*",
                relevance: 0
            }, {
                begin: "[a-z_]\\w*'[\\w']*",
                relevance: 0
            }, e.inherit(e.APOS_STRING_MODE, {
                className: "string",
                relevance: 0
            }), e.inherit(e.QUOTE_STRING_MODE, {
                illegal: null
            }), {
                className: "number",
                begin: "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
                relevance: 0
            }, {
                begin: /[-=]>/
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "keyword",
            begin: "\\$(f[asn]|t|vp[rtd]|children)"
        }
          , n = {
            className: "literal",
            begin: "false|true|PI|undef"
        }
          , r = {
            className: "number",
            begin: "\\b\\d+(\\.\\d+)?(e-?\\d+)?",
            relevance: 0
        }
          , a = e.inherit(e.QUOTE_STRING_MODE, {
            illegal: null
        })
          , i = {
            className: "meta",
            keywords: {
                "meta-keyword": "include use"
            },
            begin: "include|use <",
            end: ">"
        }
          , s = {
            className: "params",
            begin: "\\(",
            end: "\\)",
            contains: ["self", r, a, t, n]
        }
          , o = {
            begin: "[*!#%]",
            relevance: 0
        }
          , l = {
            className: "function",
            beginKeywords: "module function",
            end: "\\=|\\{",
            contains: [s, e.UNDERSCORE_TITLE_MODE]
        };
        return {
            aliases: ["scad"],
            keywords: {
                keyword: "function module include use for intersection_for if else \\%",
                literal: "false true PI undef",
                built_in: "circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign"
            },
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, r, i, a, t, o, l]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained"
          , n = e.COMMENT("{", "}", {
            relevance: 0
        })
          , r = e.COMMENT("\\(\\*", "\\*\\)", {
            relevance: 10
        })
          , a = {
            className: "string",
            begin: "'",
            end: "'",
            contains: [{
                begin: "''"
            }]
        }
          , i = {
            className: "string",
            begin: "(#\\d+)+"
        }
          , s = {
            className: "function",
            beginKeywords: "function constructor destructor procedure method",
            end: "[:;]",
            keywords: "function constructor|10 destructor|10 procedure|10 method|10",
            contains: [e.TITLE_MODE, {
                className: "params",
                begin: "\\(",
                end: "\\)",
                keywords: t,
                contains: [a, i]
            }, n, r]
        };
        return {
            case_insensitive: !0,
            lexemes: /\.?\w+/,
            keywords: t,
            illegal: '("|\\$[G-Zg-z]|\\/\\*|</|=>|->)',
            contains: [n, r, e.C_LINE_COMMENT_MODE, a, i, e.NUMBER_MODE, s, {
                className: "class",
                begin: "=\\bclass\\b",
                end: "end;",
                keywords: t,
                contains: [a, i, n, r, e.C_LINE_COMMENT_MODE, s]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = e.COMMENT("{", "}", {
            contains: ["self"]
        });
        return {
            subLanguage: "xml",
            relevance: 0,
            contains: [e.COMMENT("^#", "$"), e.COMMENT("\\^rem{", "}", {
                relevance: 10,
                contains: [t]
            }), {
                className: "meta",
                begin: "^@(?:BASE|USE|CLASS|OPTIONS)$",
                relevance: 10
            }, {
                className: "title",
                begin: "@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$"
            }, {
                className: "variable",
                begin: "\\$\\{?[\\w\\-\\.\\:]+\\}?"
            }, {
                className: "keyword",
                begin: "\\^[\\w\\-\\.\\:]+"
            }, {
                className: "number",
                begin: "\\^#[0-9a-fA-F]+"
            }, e.C_NUMBER_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when"
          , n = {
            className: "subst",
            begin: "[$@]\\{",
            end: "\\}",
            keywords: t
        }
          , r = {
            begin: "->{",
            end: "}"
        }
          , a = {
            variants: [{
                begin: /\$\d/
            }, {
                begin: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/
            }, {
                begin: /[\$%@][^\s\w{]/,
                relevance: 0
            }]
        }
          , i = [e.BACKSLASH_ESCAPE, n, a]
          , s = [a, e.HASH_COMMENT_MODE, e.COMMENT("^\\=\\w", "\\=cut", {
            endsWithParent: !0
        }), r, {
            className: "string",
            contains: i,
            variants: [{
                begin: "q[qwxr]?\\s*\\(",
                end: "\\)",
                relevance: 5
            }, {
                begin: "q[qwxr]?\\s*\\[",
                end: "\\]",
                relevance: 5
            }, {
                begin: "q[qwxr]?\\s*\\{",
                end: "\\}",
                relevance: 5
            }, {
                begin: "q[qwxr]?\\s*\\|",
                end: "\\|",
                relevance: 5
            }, {
                begin: "q[qwxr]?\\s*\\<",
                end: "\\>",
                relevance: 5
            }, {
                begin: "qw\\s+q",
                end: "q",
                relevance: 5
            }, {
                begin: "'",
                end: "'",
                contains: [e.BACKSLASH_ESCAPE]
            }, {
                begin: '"',
                end: '"'
            }, {
                begin: "`",
                end: "`",
                contains: [e.BACKSLASH_ESCAPE]
            }, {
                begin: "{\\w+}",
                contains: [],
                relevance: 0
            }, {
                begin: "-?\\w+\\s*\\=\\>",
                contains: [],
                relevance: 0
            }]
        }, {
            className: "number",
            begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
            relevance: 0
        }, {
            begin: "(\\/\\/|" + e.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
            keywords: "split return print reverse grep",
            relevance: 0,
            contains: [e.HASH_COMMENT_MODE, {
                className: "regexp",
                begin: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
                relevance: 10
            }, {
                className: "regexp",
                begin: "(m|qr)?/",
                end: "/[a-z]*",
                contains: [e.BACKSLASH_ESCAPE],
                relevance: 0
            }]
        }, {
            className: "function",
            beginKeywords: "sub",
            end: "(\\s*\\(.*?\\))?[;{]",
            excludeEnd: !0,
            relevance: 5,
            contains: [e.TITLE_MODE]
        }, {
            begin: "-\\w\\b",
            relevance: 0
        }, {
            begin: "^__DATA__$",
            end: "^__END__$",
            subLanguage: "mojolicious",
            contains: [{
                begin: "^@@.*",
                end: "$",
                className: "comment"
            }]
        }];
        return n.contains = s,
        r.contains = s,
        {
            aliases: ["pl", "pm"],
            lexemes: /[\w\.]+/,
            keywords: t,
            contains: s
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "variable",
            begin: /\$[\w\d#@][\w\d_]*/
        }
          , n = {
            className: "variable",
            begin: /<(?!\/)/,
            end: />/
        };
        return {
            aliases: ["pf.conf"],
            lexemes: /[a-z0-9_<>-]+/,
            keywords: {
                built_in: "block match pass load anchor|5 antispoof|10 set table",
                keyword: "in out log quick on rdomain inet inet6 proto from port os to routeallow-opts divert-packet divert-reply divert-to flags group icmp-typeicmp6-type label once probability recieved-on rtable prio queuetos tag tagged user keep fragment for os dropaf-to|10 binat-to|10 nat-to|10 rdr-to|10 bitmask least-stats random round-robinsource-hash static-portdup-to reply-to route-toparent bandwidth default min max qlimitblock-policy debug fingerprints hostid limit loginterface optimizationreassemble ruleset-optimization basic none profile skip state-defaultsstate-policy timeoutconst counters persistno modulate synproxy state|5 floating if-bound no-sync pflow|10 sloppysource-track global rule max-src-nodes max-src-states max-src-connmax-src-conn-rate overload flushscrub|5 max-mss min-ttl no-df|10 random-id",
                literal: "all any no-route self urpf-failed egress|5 unknown"
            },
            contains: [e.HASH_COMMENT_MODE, e.NUMBER_MODE, e.QUOTE_STRING_MODE, t, n]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            begin: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"
        }
          , n = {
            className: "meta",
            begin: /<\?(php)?|\?>/
        }
          , r = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE, n],
            variants: [{
                begin: 'b"',
                end: '"'
            }, {
                begin: "b'",
                end: "'"
            }, e.inherit(e.APOS_STRING_MODE, {
                illegal: null
            }), e.inherit(e.QUOTE_STRING_MODE, {
                illegal: null
            })]
        }
          , a = {
            variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE]
        };
        return {
            aliases: ["php3", "php4", "php5", "php6"],
            case_insensitive: !0,
            keywords: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
            contains: [e.HASH_COMMENT_MODE, e.COMMENT("//", "$", {
                contains: [n]
            }), e.COMMENT("/\\*", "\\*/", {
                contains: [{
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                }]
            }), e.COMMENT("__halt_compiler.+?;", !1, {
                endsWithParent: !0,
                keywords: "__halt_compiler",
                lexemes: e.UNDERSCORE_IDENT_RE
            }), {
                className: "string",
                begin: /<<<['"]?\w+['"]?$/,
                end: /^\w+;?$/,
                contains: [e.BACKSLASH_ESCAPE, {
                    className: "subst",
                    variants: [{
                        begin: /\$\w+/
                    }, {
                        begin: /\{\$/,
                        end: /\}/
                    }]
                }]
            }, n, {
                className: "keyword",
                begin: /\$this\b/
            }, t, {
                begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
            }, {
                className: "function",
                beginKeywords: "function",
                end: /[;{]/,
                excludeEnd: !0,
                illegal: "\\$|\\[|%",
                contains: [e.UNDERSCORE_TITLE_MODE, {
                    className: "params",
                    begin: "\\(",
                    end: "\\)",
                    contains: ["self", t, e.C_BLOCK_COMMENT_MODE, r, a]
                }]
            }, {
                className: "class",
                beginKeywords: "class interface",
                end: "{",
                excludeEnd: !0,
                illegal: /[:\(\$"]/,
                contains: [{
                    beginKeywords: "extends implements"
                }, e.UNDERSCORE_TITLE_MODE]
            }, {
                beginKeywords: "namespace",
                end: ";",
                illegal: /[\.']/,
                contains: [e.UNDERSCORE_TITLE_MODE]
            }, {
                beginKeywords: "use",
                end: ";",
                contains: [e.UNDERSCORE_TITLE_MODE]
            }, {
                begin: "=>"
            }, r, a]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            keyword: "actor addressof and as be break class compile_error compile_intrinsicconsume continue delegate digestof do else elseif embed end errorfor fun if ifdef in interface is isnt lambda let match new not objector primitive recover repeat return struct then trait try type until use var where while with xor",
            meta: "iso val tag trn box ref",
            literal: "this false true"
        }
          , n = {
            className: "string",
            begin: '"""',
            end: '"""',
            relevance: 10
        }
          , r = {
            className: "string",
            begin: '"',
            end: '"',
            contains: [e.BACKSLASH_ESCAPE]
        }
          , a = {
            className: "string",
            begin: "'",
            end: "'",
            contains: [e.BACKSLASH_ESCAPE],
            relevance: 0
        }
          , i = {
            className: "type",
            begin: "\\b_?[A-Z][\\w]*",
            relevance: 0
        }
          , s = {
            begin: e.IDENT_RE + "'",
            relevance: 0
        };
        return {
            keywords: t,
            contains: [{
                className: "class",
                beginKeywords: "class actor",
                end: "$",
                contains: [e.TITLE_MODE, e.C_LINE_COMMENT_MODE]
            }, {
                className: "function",
                beginKeywords: "new fun",
                end: "=>",
                contains: [e.TITLE_MODE, {
                    begin: /\(/,
                    end: /\)/,
                    contains: [i, s, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE]
                }, {
                    begin: /:/,
                    endsWithParent: !0,
                    contains: [i]
                }, e.C_LINE_COMMENT_MODE]
            }, i, n, r, a, s, e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            begin: "`[\\s\\S]",
            relevance: 0
        }
          , n = {
            className: "variable",
            variants: [{
                begin: /\$[\w\d][\w\d_:]*/
            }]
        }
          , r = {
            className: "literal",
            begin: /\$(null|true|false)\b/
        }
          , a = {
            className: "string",
            variants: [{
                begin: /"/,
                end: /"/
            }, {
                begin: /@"/,
                end: /^"@/
            }],
            contains: [t, n, {
                className: "variable",
                begin: /\$[A-z]/,
                end: /[^A-z]/
            }]
        }
          , i = {
            className: "string",
            variants: [{
                begin: /'/,
                end: /'/
            }, {
                begin: /@'/,
                end: /^'@/
            }]
        }
          , s = {
            className: "doctag",
            variants: [{
                begin: /\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/
            }, {
                begin: /\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/
            }]
        }
          , o = e.inherit(e.COMMENT(null, null), {
            variants: [{
                begin: /#/,
                end: /$/
            }, {
                begin: /<#/,
                end: /#>/
            }],
            contains: [s]
        });
        return {
            aliases: ["ps"],
            lexemes: /-?[A-z\.\-]+/,
            case_insensitive: !0,
            keywords: {
                keyword: "if else foreach return function do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch",
                built_in: "Add-Computer Add-Content Add-History Add-JobTrigger Add-Member Add-PSSnapin Add-Type Checkpoint-Computer Clear-Content Clear-EventLog Clear-History Clear-Host Clear-Item Clear-ItemProperty Clear-Variable Compare-Object Complete-Transaction Connect-PSSession Connect-WSMan Convert-Path ConvertFrom-Csv ConvertFrom-Json ConvertFrom-SecureString ConvertFrom-StringData ConvertTo-Csv ConvertTo-Html ConvertTo-Json ConvertTo-SecureString ConvertTo-Xml Copy-Item Copy-ItemProperty Debug-Process Disable-ComputerRestore Disable-JobTrigger Disable-PSBreakpoint Disable-PSRemoting Disable-PSSessionConfiguration Disable-WSManCredSSP Disconnect-PSSession Disconnect-WSMan Disable-ScheduledJob Enable-ComputerRestore Enable-JobTrigger Enable-PSBreakpoint Enable-PSRemoting Enable-PSSessionConfiguration Enable-ScheduledJob Enable-WSManCredSSP Enter-PSSession Exit-PSSession Export-Alias Export-Clixml Export-Console Export-Counter Export-Csv Export-FormatData Export-ModuleMember Export-PSSession ForEach-Object Format-Custom Format-List Format-Table Format-Wide Get-Acl Get-Alias Get-AuthenticodeSignature Get-ChildItem Get-Command Get-ComputerRestorePoint Get-Content Get-ControlPanelItem Get-Counter Get-Credential Get-Culture Get-Date Get-Event Get-EventLog Get-EventSubscriber Get-ExecutionPolicy Get-FormatData Get-Host Get-HotFix Get-Help Get-History Get-IseSnippet Get-Item Get-ItemProperty Get-Job Get-JobTrigger Get-Location Get-Member Get-Module Get-PfxCertificate Get-Process Get-PSBreakpoint Get-PSCallStack Get-PSDrive Get-PSProvider Get-PSSession Get-PSSessionConfiguration Get-PSSnapin Get-Random Get-ScheduledJob Get-ScheduledJobOption Get-Service Get-TraceSource Get-Transaction Get-TypeData Get-UICulture Get-Unique Get-Variable Get-Verb Get-WinEvent Get-WmiObject Get-WSManCredSSP Get-WSManInstance Group-Object Import-Alias Import-Clixml Import-Counter Import-Csv Import-IseSnippet Import-LocalizedData Import-PSSession Import-Module Invoke-AsWorkflow Invoke-Command Invoke-Expression Invoke-History Invoke-Item Invoke-RestMethod Invoke-WebRequest Invoke-WmiMethod Invoke-WSManAction Join-Path Limit-EventLog Measure-Command Measure-Object Move-Item Move-ItemProperty New-Alias New-Event New-EventLog New-IseSnippet New-Item New-ItemProperty New-JobTrigger New-Object New-Module New-ModuleManifest New-PSDrive New-PSSession New-PSSessionConfigurationFile New-PSSessionOption New-PSTransportOption New-PSWorkflowExecutionOption New-PSWorkflowSession New-ScheduledJobOption New-Service New-TimeSpan New-Variable New-WebServiceProxy New-WinEvent New-WSManInstance New-WSManSessionOption Out-Default Out-File Out-GridView Out-Host Out-Null Out-Printer Out-String Pop-Location Push-Location Read-Host Receive-Job Register-EngineEvent Register-ObjectEvent Register-PSSessionConfiguration Register-ScheduledJob Register-WmiEvent Remove-Computer Remove-Event Remove-EventLog Remove-Item Remove-ItemProperty Remove-Job Remove-JobTrigger Remove-Module Remove-PSBreakpoint Remove-PSDrive Remove-PSSession Remove-PSSnapin Remove-TypeData Remove-Variable Remove-WmiObject Remove-WSManInstance Rename-Computer Rename-Item Rename-ItemProperty Reset-ComputerMachinePassword Resolve-Path Restart-Computer Restart-Service Restore-Computer Resume-Job Resume-Service Save-Help Select-Object Select-String Select-Xml Send-MailMessage Set-Acl Set-Alias Set-AuthenticodeSignature Set-Content Set-Date Set-ExecutionPolicy Set-Item Set-ItemProperty Set-JobTrigger Set-Location Set-PSBreakpoint Set-PSDebug Set-PSSessionConfiguration Set-ScheduledJob Set-ScheduledJobOption Set-Service Set-StrictMode Set-TraceSource Set-Variable Set-WmiInstance Set-WSManInstance Set-WSManQuickConfig Show-Command Show-ControlPanelItem Show-EventLog Sort-Object Split-Path Start-Job Start-Process Start-Service Start-Sleep Start-Transaction Start-Transcript Stop-Computer Stop-Job Stop-Process Stop-Service Stop-Transcript Suspend-Job Suspend-Service Tee-Object Test-ComputerSecureChannel Test-Connection Test-ModuleManifest Test-Path Test-PSSessionConfigurationFile Trace-Command Unblock-File Undo-Transaction Unregister-Event Unregister-PSSessionConfiguration Unregister-ScheduledJob Update-FormatData Update-Help Update-List Update-TypeData Use-Transaction Wait-Event Wait-Job Wait-Process Where-Object Write-Debug Write-Error Write-EventLog Write-Host Write-Output Write-Progress Write-Verbose Write-Warning Add-MDTPersistentDrive Disable-MDTMonitorService Enable-MDTMonitorService Get-MDTDeploymentShareStatistics Get-MDTMonitorData Get-MDTOperatingSystemCatalog Get-MDTPersistentDrive Import-MDTApplication Import-MDTDriver Import-MDTOperatingSystem Import-MDTPackage Import-MDTTaskSequence New-MDTDatabase Remove-MDTMonitorData Remove-MDTPersistentDrive Restore-MDTPersistentDrive Set-MDTMonitorData Test-MDTDeploymentShare Test-MDTMonitorData Update-MDTDatabaseSchema Update-MDTDeploymentShare Update-MDTLinkedDS Update-MDTMedia Update-MDTMedia Add-VamtProductKey Export-VamtData Find-VamtManagedMachine Get-VamtConfirmationId Get-VamtProduct Get-VamtProductKey Import-VamtData Initialize-VamtData Install-VamtConfirmationId Install-VamtProductActivation Install-VamtProductKey Update-VamtProduct",
                nomarkup: "-ne -eq -lt -gt -ge -le -not -like -notlike -match -notmatch -contains -notcontains -in -notin -replace"
            },
            contains: [t, e.NUMBER_MODE, a, i, r, n, o]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            keywords: {
                keyword: "BufferedReader PVector PFont PImage PGraphics HashMap boolean byte char color double float int long String Array FloatDict FloatList IntDict IntList JSONArray JSONObject Object StringDict StringList Table TableRow XML false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
                literal: "P2D P3D HALF_PI PI QUARTER_PI TAU TWO_PI",
                title: "setup draw",
                built_in: "displayHeight displayWidth mouseY mouseX mousePressed pmouseX pmouseY key keyCode pixels focused frameCount frameRate height width size createGraphics beginDraw createShape loadShape PShape arc ellipse line point quad rect triangle bezier bezierDetail bezierPoint bezierTangent curve curveDetail curvePoint curveTangent curveTightness shape shapeMode beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight mouseClicked mouseDragged mouseMoved mousePressed mouseReleased mouseWheel keyPressed keyPressedkeyReleased keyTyped print println save saveFrame day hour millis minute month second year background clear colorMode fill noFill noStroke stroke alpha blue brightness color green hue lerpColor red saturation modelX modelY modelZ screenX screenY screenZ ambient emissive shininess specular add createImage beginCamera camera endCamera frustum ortho perspective printCamera printProjection cursor frameRate noCursor exit loop noLoop popStyle pushStyle redraw binary boolean byte char float hex int str unbinary unhex join match matchAll nf nfc nfp nfs split splitTokens trim append arrayCopy concat expand reverse shorten sort splice subset box sphere sphereDetail createInput createReader loadBytes loadJSONArray loadJSONObject loadStrings loadTable loadXML open parseXML saveTable selectFolder selectInput beginRaw beginRecord createOutput createWriter endRaw endRecord PrintWritersaveBytes saveJSONArray saveJSONObject saveStream saveStrings saveXML selectOutput popMatrix printMatrix pushMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate ambientLight directionalLight lightFalloff lights lightSpecular noLights normal pointLight spotLight image imageMode loadImage noTint requestImage tint texture textureMode textureWrap blend copy filter get loadPixels set updatePixels blendMode loadShader PShaderresetShader shader createFont loadFont text textFont textAlign textLeading textMode textSize textWidth textAscent textDescent abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt acos asin atan atan2 cos degrees radians sin tan noise noiseDetail noiseSeed random randomGaussian randomSeed"
            },
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            contains: [e.C_NUMBER_MODE, {
                begin: "[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}",
                end: ":",
                excludeEnd: !0
            }, {
                begin: "(ncalls|tottime|cumtime)",
                end: "$",
                keywords: "ncalls tottime|10 cumtime|10 filename",
                relevance: 10
            }, {
                begin: "function calls",
                end: "$",
                contains: [e.C_NUMBER_MODE],
                relevance: 10
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                className: "string",
                begin: "\\(",
                end: "\\)$",
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            begin: /[a-z][A-Za-z0-9_]*/,
            relevance: 0
        }
          , n = {
            className: "symbol",
            variants: [{
                begin: /[A-Z][a-zA-Z0-9_]*/
            }, {
                begin: /_[A-Za-z0-9_]*/
            }],
            relevance: 0
        }
          , r = {
            begin: /\(/,
            end: /\)/,
            relevance: 0
        }
          , a = {
            begin: /\[/,
            end: /\]/
        }
          , i = {
            className: "comment",
            begin: /%/,
            end: /$/,
            contains: [e.PHRASAL_WORDS_MODE]
        }
          , s = {
            className: "string",
            begin: /`/,
            end: /`/,
            contains: [e.BACKSLASH_ESCAPE]
        }
          , o = {
            className: "string",
            begin: /0\'(\\\'|.)/
        }
          , l = {
            className: "string",
            begin: /0\'\\s/
        }
          , c = {
            begin: /:-/
        }
          , d = [t, n, r, c, a, i, e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, s, o, l, e.C_NUMBER_MODE];
        return r.contains = d,
        a.contains = d,
        {
            contains: d.concat([{
                begin: /\.$/
            }])
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            keywords: {
                keyword: "package import option optional required repeated group",
                built_in: "double float int32 int64 uint32 uint64 sint32 sint64 fixed32 fixed64 sfixed32 sfixed64 bool string bytes",
                literal: "true false"
            },
            contains: [e.QUOTE_STRING_MODE, e.NUMBER_MODE, e.C_LINE_COMMENT_MODE, {
                className: "class",
                beginKeywords: "message enum service",
                end: /\{/,
                illegal: /\n/,
                contains: [e.inherit(e.TITLE_MODE, {
                    starts: {
                        endsWithParent: !0,
                        excludeEnd: !0
                    }
                })]
            }, {
                className: "function",
                beginKeywords: "rpc",
                end: /;/,
                excludeEnd: !0,
                keywords: "rpc returns"
            }, {
                begin: /^\s*[A-Z_]+/,
                end: /\s*=/,
                excludeEnd: !0
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            keyword: "and case default else elsif false if in import enherits node or true undef unless main settings $string ",
            literal: "alias audit before loglevel noop require subscribe tag owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check en_address ip_address realname command environment hour monute month monthday special target weekday creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey sslverify mounted",
            built_in: "architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version"
        }
          , n = e.COMMENT("#", "$")
          , r = e.inherit(e.TITLE_MODE, {
            begin: "([A-Za-z_]|::)(\\w|::)*"
        })
          , a = {
            className: "variable",
            begin: "\\$([A-Za-z_]|::)(\\w|::)*"
        }
          , i = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE, a],
            variants: [{
                begin: /'/,
                end: /'/
            }, {
                begin: /"/,
                end: /"/
            }]
        };
        return {
            aliases: ["pp"],
            contains: [n, a, i, {
                beginKeywords: "class",
                end: "\\{|;",
                illegal: /=/,
                contains: [r, n]
            }, {
                beginKeywords: "define",
                end: /\{/,
                contains: [{
                    className: "section",
                    begin: e.IDENT_RE,
                    endsParent: !0
                }]
            }, {
                begin: e.IDENT_RE + "\\s+\\{",
                returnBegin: !0,
                end: /\S/,
                contains: [{
                    className: "keyword",
                    begin: e.IDENT_RE
                }, {
                    begin: /\{/,
                    end: /\}/,
                    keywords: t,
                    relevance: 0,
                    contains: [i, n, {
                        begin: "[a-zA-Z_]+\\s*=>",
                        returnBegin: !0,
                        end: "=>",
                        contains: [{
                            className: "attr",
                            begin: e.IDENT_RE
                        }]
                    }, {
                        className: "number",
                        begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                        relevance: 0
                    }, a]
                }],
                relevance: 0
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "string",
            begin: '(~)?"',
            end: '"',
            illegal: "\\n"
        }
          , n = {
            className: "symbol",
            begin: "#[a-zA-Z_]\\w*\\$?"
        };
        return {
            aliases: ["pb", "pbi"],
            keywords: "And As Break CallDebugger Case CompilerCase CompilerDefault CompilerElse CompilerEndIf CompilerEndSelect CompilerError CompilerIf CompilerSelect Continue Data DataSection EndDataSection Debug DebugLevel Default Define Dim DisableASM DisableDebugger DisableExplicit Else ElseIf EnableASM EnableDebugger EnableExplicit End EndEnumeration EndIf EndImport EndInterface EndMacro EndProcedure EndSelect EndStructure EndStructureUnion EndWith Enumeration Extends FakeReturn For Next ForEach ForEver Global Gosub Goto If Import ImportC IncludeBinary IncludeFile IncludePath Interface Macro NewList Not Or ProcedureReturn Protected Prototype PrototypeC Read ReDim Repeat Until Restore Return Select Shared Static Step Structure StructureUnion Swap To Wend While With XIncludeFile XOr Procedure ProcedureC ProcedureCDLL ProcedureDLL Declare DeclareC DeclareCDLL DeclareDLL",
            contains: [e.COMMENT(";", "$", {
                relevance: 0
            }), {
                className: "function",
                begin: "\\b(Procedure|Declare)(C|CDLL|DLL)?\\b",
                end: "\\(",
                excludeEnd: !0,
                returnBegin: !0,
                contains: [{
                    className: "keyword",
                    begin: "(Procedure|Declare)(C|CDLL|DLL)?",
                    excludeEnd: !0
                }, {
                    className: "type",
                    begin: "\\.\\w*"
                }, e.UNDERSCORE_TITLE_MODE]
            }, t, n]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",
            built_in: "Ellipsis NotImplemented"
        }
          , n = {
            className: "meta",
            begin: /^(>>>|\.\.\.) /
        }
          , r = {
            className: "subst",
            begin: /\{/,
            end: /\}/,
            keywords: t,
            illegal: /#/
        }
          , a = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE],
            variants: [{
                begin: /(u|b)?r?'''/,
                end: /'''/,
                contains: [n],
                relevance: 10
            }, {
                begin: /(u|b)?r?"""/,
                end: /"""/,
                contains: [n],
                relevance: 10
            }, {
                begin: /(fr|rf|f)'''/,
                end: /'''/,
                contains: [n, r]
            }, {
                begin: /(fr|rf|f)"""/,
                end: /"""/,
                contains: [n, r]
            }, {
                begin: /(u|r|ur)'/,
                end: /'/,
                relevance: 10
            }, {
                begin: /(u|r|ur)"/,
                end: /"/,
                relevance: 10
            }, {
                begin: /(b|br)'/,
                end: /'/
            }, {
                begin: /(b|br)"/,
                end: /"/
            }, {
                begin: /(fr|rf|f)'/,
                end: /'/,
                contains: [r]
            }, {
                begin: /(fr|rf|f)"/,
                end: /"/,
                contains: [r]
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
        }
          , i = {
            className: "number",
            relevance: 0,
            variants: [{
                begin: e.BINARY_NUMBER_RE + "[lLjJ]?"
            }, {
                begin: "\\b(0o[0-7]+)[lLjJ]?"
            }, {
                begin: e.C_NUMBER_RE + "[lLjJ]?"
            }]
        }
          , s = {
            className: "params",
            begin: /\(/,
            end: /\)/,
            contains: ["self", n, i, a]
        };
        return r.contains = [a, i, n],
        {
            aliases: ["py", "gyp"],
            keywords: t,
            illegal: /(<\/|->|\?)|=>/,
            contains: [n, i, a, e.HASH_COMMENT_MODE, {
                variants: [{
                    className: "function",
                    beginKeywords: "def"
                }, {
                    className: "class",
                    beginKeywords: "class"
                }],
                end: /:/,
                illegal: /[${=;\n,]/,
                contains: [e.UNDERSCORE_TITLE_MODE, s, {
                    begin: /->/,
                    endsWithParent: !0,
                    keywords: "None"
                }]
            }, {
                className: "meta",
                begin: /^[\t ]*@/,
                end: /$/
            }, {
                begin: /\b(print|exec)\(/
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["k", "kdb"],
            keywords: {
                keyword: "do while select delete by update from",
                literal: "0b 1b",
                built_in: "neg not null string reciprocal floor ceiling signum mod xbar xlog and or each scan over prior mmu lsq inv md5 ltime gtime count first var dev med cov cor all any rand sums prds mins maxs fills deltas ratios avgs differ prev next rank reverse iasc idesc asc desc msum mcount mavg mdev xrank mmin mmax xprev rotate distinct group where flip type key til get value attr cut set upsert raze union inter except cross sv vs sublist enlist read0 read1 hopen hclose hdel hsym hcount peach system ltrim rtrim trim lower upper ssr view tables views cols xcols keys xkey xcol xasc xdesc fkeys meta lj aj aj0 ij pj asof uj ww wj wj1 fby xgroup ungroup ej save load rsave rload show csv parse eval min max avg wavg wsum sin cos tan sum",
                type: "`float `double int `timestamp `timespan `datetime `time `boolean `symbol `char `byte `short `long `real `month `date `minute `second `guid"
            },
            lexemes: /(`?)[A-Za-z0-9_]+\b/,
            contains: [e.C_LINE_COMMENT_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            keyword: "in of on if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await import",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Behavior bool color coordinate date double enumeration font geocircle georectangle geoshape int list matrix4x4 parent point quaternion real rect size string url variant vector2d vector3d vector4dPromise"
        }
          , n = "[a-zA-Z_][a-zA-Z0-9\\._]*"
          , r = {
            className: "keyword",
            begin: "\\bproperty\\b",
            starts: {
                className: "string",
                end: "(:|=|;|,|//|/\\*|$)",
                returnEnd: !0
            }
        }
          , a = {
            className: "keyword",
            begin: "\\bsignal\\b",
            starts: {
                className: "string",
                end: "(\\(|:|=|;|,|//|/\\*|$)",
                returnEnd: !0
            }
        }
          , i = {
            className: "attribute",
            begin: "\\bid\\s*:",
            starts: {
                className: "string",
                end: n,
                returnEnd: !1
            }
        }
          , s = {
            begin: n + "\\s*:",
            returnBegin: !0,
            contains: [{
                className: "attribute",
                begin: n,
                end: "\\s*:",
                excludeEnd: !0,
                relevance: 0
            }],
            relevance: 0
        }
          , o = {
            begin: n + "\\s*{",
            end: "{",
            returnBegin: !0,
            relevance: 0,
            contains: [e.inherit(e.TITLE_MODE, {
                begin: n
            })]
        };
        return {
            aliases: ["qt"],
            case_insensitive: !1,
            keywords: t,
            contains: [{
                className: "meta",
                begin: /^\s*['"]use (strict|asm)['"]/
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                className: "string",
                begin: "`",
                end: "`",
                contains: [e.BACKSLASH_ESCAPE, {
                    className: "subst",
                    begin: "\\$\\{",
                    end: "\\}"
                }]
            }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                className: "number",
                variants: [{
                    begin: "\\b(0[bB][01]+)"
                }, {
                    begin: "\\b(0[oO][0-7]+)"
                }, {
                    begin: e.C_NUMBER_RE
                }],
                relevance: 0
            }, {
                begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                keywords: "return throw case",
                contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.REGEXP_MODE, {
                    begin: /</,
                    end: />\s*[);\]]/,
                    relevance: 0,
                    subLanguage: "xml"
                }],
                relevance: 0
            }, a, r, {
                className: "function",
                beginKeywords: "function",
                end: /\{/,
                excludeEnd: !0,
                contains: [e.inherit(e.TITLE_MODE, {
                    begin: /[A-Za-z$_][0-9A-Za-z$_]*/
                }), {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                }],
                illegal: /\[|%/
            }, {
                begin: "\\." + e.IDENT_RE,
                relevance: 0
            }, i, s, o],
            illegal: /#/
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";
        return {
            contains: [e.HASH_COMMENT_MODE, {
                begin: t,
                lexemes: t,
                keywords: {
                    keyword: "function if in break next repeat else for return switch while try tryCatch stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...",
                    literal: "NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10"
                },
                relevance: 0
            }, {
                className: "number",
                begin: "0[xX][0-9a-fA-F]+[Li]?\\b",
                relevance: 0
            }, {
                className: "number",
                begin: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
                relevance: 0
            }, {
                className: "number",
                begin: "\\d+\\.(?!\\d)(?:i\\b)?",
                relevance: 0
            }, {
                className: "number",
                begin: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
                relevance: 0
            }, {
                className: "number",
                begin: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
                relevance: 0
            }, {
                begin: "`",
                end: "`",
                relevance: 0
            }, {
                className: "string",
                contains: [e.BACKSLASH_ESCAPE],
                variants: [{
                    begin: '"',
                    end: '"'
                }, {
                    begin: "'",
                    end: "'"
                }]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            keywords: "ArchiveRecord AreaLightSource Atmosphere Attribute AttributeBegin AttributeEnd Basis Begin Blobby Bound Clipping ClippingPlane Color ColorSamples ConcatTransform Cone CoordinateSystem CoordSysTransform CropWindow Curves Cylinder DepthOfField Detail DetailRange Disk Displacement Display End ErrorHandler Exposure Exterior Format FrameAspectRatio FrameBegin FrameEnd GeneralPolygon GeometricApproximation Geometry Hider Hyperboloid Identity Illuminate Imager Interior LightSource MakeCubeFaceEnvironment MakeLatLongEnvironment MakeShadow MakeTexture Matte MotionBegin MotionEnd NuPatch ObjectBegin ObjectEnd ObjectInstance Opacity Option Orientation Paraboloid Patch PatchMesh Perspective PixelFilter PixelSamples PixelVariance Points PointsGeneralPolygons PointsPolygons Polygon Procedural Projection Quantize ReadArchive RelativeDetail ReverseOrientation Rotate Scale ScreenWindow ShadingInterpolation ShadingRate Shutter Sides Skew SolidBegin SolidEnd Sphere SubdivisionMesh Surface TextureCoordinates Torus Transform TransformBegin TransformEnd TransformPoints Translate TrimCurve WorldBegin WorldEnd",
            illegal: "</",
            contains: [e.HASH_COMMENT_MODE, e.C_NUMBER_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "[a-zA-Z-_][^\\n{]+\\{"
          , n = {
            className: "attribute",
            begin: /[a-zA-Z-_]+/,
            end: /\s*:/,
            excludeEnd: !0,
            starts: {
                end: ";",
                relevance: 0,
                contains: [{
                    className: "variable",
                    begin: /\.[a-zA-Z-_]+/
                }, {
                    className: "keyword",
                    begin: /\(optional\)/
                }]
            }
        };
        return {
            aliases: ["graph", "instances"],
            case_insensitive: !0,
            keywords: "import",
            contains: [{
                begin: "^facet " + t,
                end: "}",
                keywords: "facet",
                contains: [n, e.HASH_COMMENT_MODE]
            }, {
                begin: "^\\s*instance of " + t,
                end: "}",
                keywords: "name count channels instance-data instance-state instance of",
                illegal: /\S/,
                contains: ["self", n, e.HASH_COMMENT_MODE]
            }, {
                begin: "^" + t,
                end: "}",
                contains: [n, e.HASH_COMMENT_MODE]
            }, e.HASH_COMMENT_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "foreach do while for if from to step else on-error and or not in"
          , n = "true false yes no nothing nil null"
          , r = {
            className: "variable",
            variants: [{
                begin: /\$[\w\d#@][\w\d_]*/
            }, {
                begin: /\$\{(.*?)}/
            }]
        }
          , a = {
            className: "string",
            begin: /"/,
            end: /"/,
            contains: [e.BACKSLASH_ESCAPE, r, {
                className: "variable",
                begin: /\$\(/,
                end: /\)/,
                contains: [e.BACKSLASH_ESCAPE]
            }]
        }
          , i = {
            className: "string",
            begin: /'/,
            end: /'/
        };
        return {
            aliases: ["routeros", "mikrotik"],
            case_insensitive: !0,
            lexemes: /:?[\w-]+/,
            keywords: {
                literal: n,
                keyword: t + " :" + t.split(" ").join(" :") + " :" + "global local beep delay put len typeof pick log time set find environment terminal error execute parse resolve toarray tobool toid toip toip6 tonum tostr totime".split(" ").join(" :")
            },
            contains: [{
                variants: [{
                    begin: /^@/,
                    end: /$/
                }, {
                    begin: /\/\*/,
                    end: /\*\//
                }, {
                    begin: /%%/,
                    end: /$/
                }, {
                    begin: /^'/,
                    end: /$/
                }, {
                    begin: /^\s*\/[\w-]+=/,
                    end: /$/
                }, {
                    begin: /\/\//,
                    end: /$/
                }, {
                    begin: /^\[\</,
                    end: /\>\]$/
                }, {
                    begin: /<\//,
                    end: />/
                }, {
                    begin: /^facet /,
                    end: /\}/
                }, {
                    begin: "^1\\.\\.(\\d+)$",
                    end: /$/
                }],
                illegal: /./
            }, e.COMMENT("^#", "$"), a, i, r, {
                begin: /[\w-]+\=([^\s\{\}\[\]\(\)]+)/,
                relevance: 0,
                returnBegin: !0,
                contains: [{
                    className: "attribute",
                    begin: /[^=]+/
                }, {
                    begin: /=/,
                    endsWithParent: !0,
                    relevance: 0,
                    contains: [a, i, r, {
                        className: "literal",
                        begin: "\\b(" + n.split(" ").join("|") + ")\\b"
                    }, {
                        begin: /("[^"]*"|[^\s\{\}\[\]]+)/
                    }]
                }]
            }, {
                className: "number",
                begin: /\*[0-9a-fA-F]+/
            }, {
                begin: "\\b(" + "add remove enable disable set get print export edit find run debug error info warning".split(" ").join("|") + ")([\\s[(]|])",
                returnBegin: !0,
                contains: [{
                    className: "builtin-name",
                    begin: /\w+/
                }]
            }, {
                className: "built_in",
                variants: [{
                    begin: "(\\.\\./|/|\\s)((" + "traffic-flow traffic-generator firewall scheduler aaa accounting address-list address align area bandwidth-server bfd bgp bridge client clock community config connection console customer default dhcp-client dhcp-server discovery dns e-mail ethernet filter firewall firmware gps graphing group hardware health hotspot identity igmp-proxy incoming instance interface ip ipsec ipv6 irq l2tp-server lcd ldp logging mac-server mac-winbox mangle manual mirror mme mpls nat nd neighbor network note ntp ospf ospf-v3 ovpn-server page peer pim ping policy pool port ppp pppoe-client pptp-server prefix profile proposal proxy queue radius resource rip ripng route routing screen script security-profiles server service service-port settings shares smb sms sniffer snmp snooper socks sstp-server system tool tracking type upgrade upnp user-manager users user vlan secret vrrp watchdog web-access wireless pptp pppoe lan wan layer7-protocol lease simple raw".split(" ").join("|") + ");?\\s)+",
                    relevance: 10
                }, {
                    begin: /\.\./
                }]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            keywords: {
                keyword: "float color point normal vector matrix while for if do return else break extern continue",
                built_in: "abs acos ambient area asin atan atmosphere attribute calculatenormal ceil cellnoise clamp comp concat cos degrees depth Deriv diffuse distance Du Dv environment exp faceforward filterstep floor format fresnel incident length lightsource log match max min mod noise normalize ntransform opposite option phong pnoise pow printf ptlined radians random reflect refract renderinfo round setcomp setxcomp setycomp setzcomp shadow sign sin smoothstep specular specularbrdf spline sqrt step tan texture textureinfo trace transform vtransform xcomp ycomp zcomp"
            },
            illegal: "</",
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, e.C_NUMBER_MODE, {
                className: "meta",
                begin: "#",
                end: "$"
            }, {
                className: "class",
                beginKeywords: "surface displacement light volume imager",
                end: "\\("
            }, {
                beginKeywords: "illuminate illuminance gather",
                end: "\\("
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"
          , n = {
            keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
            literal: "true false nil"
        }
          , r = {
            className: "doctag",
            begin: "@[A-Za-z]+"
        }
          , a = {
            begin: "#<",
            end: ">"
        }
          , i = [e.COMMENT("#", "$", {
            contains: [r]
        }), e.COMMENT("^\\=begin", "^\\=end", {
            contains: [r],
            relevance: 10
        }), e.COMMENT("^__END__", "\\n$")]
          , s = {
            className: "subst",
            begin: "#\\{",
            end: "}",
            keywords: n
        }
          , o = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE, s],
            variants: [{
                begin: /'/,
                end: /'/
            }, {
                begin: /"/,
                end: /"/
            }, {
                begin: /`/,
                end: /`/
            }, {
                begin: "%[qQwWx]?\\(",
                end: "\\)"
            }, {
                begin: "%[qQwWx]?\\[",
                end: "\\]"
            }, {
                begin: "%[qQwWx]?{",
                end: "}"
            }, {
                begin: "%[qQwWx]?<",
                end: ">"
            }, {
                begin: "%[qQwWx]?/",
                end: "/"
            }, {
                begin: "%[qQwWx]?%",
                end: "%"
            }, {
                begin: "%[qQwWx]?-",
                end: "-"
            }, {
                begin: "%[qQwWx]?\\|",
                end: "\\|"
            }, {
                begin: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
            }, {
                begin: /<<(-?)\w+$/,
                end: /^\s*\w+$/
            }]
        }
          , l = {
            className: "params",
            begin: "\\(",
            end: "\\)",
            endsParent: !0,
            keywords: n
        }
          , c = [o, a, {
            className: "class",
            beginKeywords: "class module",
            end: "$|;",
            illegal: /=/,
            contains: [e.inherit(e.TITLE_MODE, {
                begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
            }), {
                begin: "<\\s*",
                contains: [{
                    begin: "(" + e.IDENT_RE + "::)?" + e.IDENT_RE
                }]
            }].concat(i)
        }, {
            className: "function",
            beginKeywords: "def",
            end: "$|;",
            contains: [e.inherit(e.TITLE_MODE, {
                begin: t
            }), l].concat(i)
        }, {
            begin: e.IDENT_RE + "::"
        }, {
            className: "symbol",
            begin: e.UNDERSCORE_IDENT_RE + "(\\!|\\?)?:",
            relevance: 0
        }, {
            className: "symbol",
            begin: ":(?!\\s)",
            contains: [o, {
                begin: t
            }],
            relevance: 0
        }, {
            className: "number",
            begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
            relevance: 0
        }, {
            begin: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
        }, {
            className: "params",
            begin: /\|/,
            end: /\|/,
            keywords: n
        }, {
            begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
            keywords: "unless",
            contains: [a, {
                className: "regexp",
                contains: [e.BACKSLASH_ESCAPE, s],
                illegal: /\n/,
                variants: [{
                    begin: "/",
                    end: "/[a-z]*"
                }, {
                    begin: "%r{",
                    end: "}[a-z]*"
                }, {
                    begin: "%r\\(",
                    end: "\\)[a-z]*"
                }, {
                    begin: "%r!",
                    end: "![a-z]*"
                }, {
                    begin: "%r\\[",
                    end: "\\][a-z]*"
                }]
            }].concat(i),
            relevance: 0
        }].concat(i);
        s.contains = c,
        l.contains = c;
        var d = [{
            begin: /^\s*=>/,
            starts: {
                end: "$",
                contains: c
            }
        }, {
            className: "meta",
            begin: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)",
            starts: {
                end: "$",
                contains: c
            }
        }];
        return {
            aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
            keywords: n,
            illegal: /\/\*/,
            contains: i.concat(d).concat(c)
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            keywords: {
                keyword: "BILL_PERIOD BILL_START BILL_STOP RS_EFFECTIVE_START RS_EFFECTIVE_STOP RS_JURIS_CODE RS_OPCO_CODE INTDADDATTRIBUTE|5 INTDADDVMSG|5 INTDBLOCKOP|5 INTDBLOCKOPNA|5 INTDCLOSE|5 INTDCOUNT|5 INTDCOUNTSTATUSCODE|5 INTDCREATEMASK|5 INTDCREATEDAYMASK|5 INTDCREATEFACTORMASK|5 INTDCREATEHANDLE|5 INTDCREATEOVERRIDEDAYMASK|5 INTDCREATEOVERRIDEMASK|5 INTDCREATESTATUSCODEMASK|5 INTDCREATETOUPERIOD|5 INTDDELETE|5 INTDDIPTEST|5 INTDEXPORT|5 INTDGETERRORCODE|5 INTDGETERRORMESSAGE|5 INTDISEQUAL|5 INTDJOIN|5 INTDLOAD|5 INTDLOADACTUALCUT|5 INTDLOADDATES|5 INTDLOADHIST|5 INTDLOADLIST|5 INTDLOADLISTDATES|5 INTDLOADLISTENERGY|5 INTDLOADLISTHIST|5 INTDLOADRELATEDCHANNEL|5 INTDLOADSP|5 INTDLOADSTAGING|5 INTDLOADUOM|5 INTDLOADUOMDATES|5 INTDLOADUOMHIST|5 INTDLOADVERSION|5 INTDOPEN|5 INTDREADFIRST|5 INTDREADNEXT|5 INTDRECCOUNT|5 INTDRELEASE|5 INTDREPLACE|5 INTDROLLAVG|5 INTDROLLPEAK|5 INTDSCALAROP|5 INTDSCALE|5 INTDSETATTRIBUTE|5 INTDSETDSTPARTICIPANT|5 INTDSETSTRING|5 INTDSETVALUE|5 INTDSETVALUESTATUS|5 INTDSHIFTSTARTTIME|5 INTDSMOOTH|5 INTDSORT|5 INTDSPIKETEST|5 INTDSUBSET|5 INTDTOU|5 INTDTOURELEASE|5 INTDTOUVALUE|5 INTDUPDATESTATS|5 INTDVALUE|5 STDEV INTDDELETEEX|5 INTDLOADEXACTUAL|5 INTDLOADEXCUT|5 INTDLOADEXDATES|5 INTDLOADEX|5 INTDLOADEXRELATEDCHANNEL|5 INTDSAVEEX|5 MVLOAD|5 MVLOADACCT|5 MVLOADACCTDATES|5 MVLOADACCTHIST|5 MVLOADDATES|5 MVLOADHIST|5 MVLOADLIST|5 MVLOADLISTDATES|5 MVLOADLISTHIST|5 IF FOR NEXT DONE SELECT END CALL ABORT CLEAR CHANNEL FACTOR LIST NUMBER OVERRIDE SET WEEK DISTRIBUTIONNODE ELSE WHEN THEN OTHERWISE IENUM CSV INCLUDE LEAVE RIDER SAVE DELETE NOVALUE SECTION WARN SAVE_UPDATE DETERMINANT LABEL REPORT REVENUE EACH IN FROM TOTAL CHARGE BLOCK AND OR CSV_FILE RATE_CODE AUXILIARY_DEMAND UIDACCOUNT RS BILL_PERIOD_SELECT HOURS_PER_MONTH INTD_ERROR_STOP SEASON_SCHEDULE_NAME ACCOUNTFACTOR ARRAYUPPERBOUND CALLSTOREDPROC GETADOCONNECTION GETCONNECT GETDATASOURCE GETQUALIFIER GETUSERID HASVALUE LISTCOUNT LISTOP LISTUPDATE LISTVALUE PRORATEFACTOR RSPRORATE SETBINPATH SETDBMONITOR WQ_OPEN BILLINGHOURS DATE DATEFROMFLOAT DATETIMEFROMSTRING DATETIMETOSTRING DATETOFLOAT DAY DAYDIFF DAYNAME DBDATETIME HOUR MINUTE MONTH MONTHDIFF MONTHHOURS MONTHNAME ROUNDDATE SAMEWEEKDAYLASTYEAR SECOND WEEKDAY WEEKDIFF YEAR YEARDAY YEARSTR COMPSUM HISTCOUNT HISTMAX HISTMIN HISTMINNZ HISTVALUE MAXNRANGE MAXRANGE MINRANGE COMPIKVA COMPKVA COMPKVARFROMKQKW COMPLF IDATTR FLAG LF2KW LF2KWH MAXKW POWERFACTOR READING2USAGE AVGSEASON MAXSEASON MONTHLYMERGE SEASONVALUE SUMSEASON ACCTREADDATES ACCTTABLELOAD CONFIGADD CONFIGGET CREATEOBJECT CREATEREPORT EMAILCLIENT EXPBLKMDMUSAGE EXPMDMUSAGE EXPORT_USAGE FACTORINEFFECT GETUSERSPECIFIEDSTOP INEFFECT ISHOLIDAY RUNRATE SAVE_PROFILE SETREPORTTITLE USEREXIT WATFORRUNRATE TO TABLE ACOS ASIN ATAN ATAN2 BITAND CEIL COS COSECANT COSH COTANGENT DIVQUOT DIVREM EXP FABS FLOOR FMOD FREPM FREXPN LOG LOG10 MAX MAXN MIN MINNZ MODF POW ROUND ROUND2VALUE ROUNDINT SECANT SIN SINH SQROOT TAN TANH FLOAT2STRING FLOAT2STRINGNC INSTR LEFT LEN LTRIM MID RIGHT RTRIM STRING STRINGNC TOLOWER TOUPPER TRIM NUMDAYS READ_DATE STAGING",
                built_in: "IDENTIFIER OPTIONS XML_ELEMENT XML_OP XML_ELEMENT_OF DOMDOCCREATE DOMDOCLOADFILE DOMDOCLOADXML DOMDOCSAVEFILE DOMDOCGETROOT DOMDOCADDPI DOMNODEGETNAME DOMNODEGETTYPE DOMNODEGETVALUE DOMNODEGETCHILDCT DOMNODEGETFIRSTCHILD DOMNODEGETSIBLING DOMNODECREATECHILDELEMENT DOMNODESETATTRIBUTE DOMNODEGETCHILDELEMENTCT DOMNODEGETFIRSTCHILDELEMENT DOMNODEGETSIBLINGELEMENT DOMNODEGETATTRIBUTECT DOMNODEGETATTRIBUTEI DOMNODEGETATTRIBUTEBYNAME DOMNODEGETBYNAME"
            },
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, {
                className: "literal",
                variants: [{
                    begin: "#\\s+[a-zA-Z\\ \\.]*",
                    relevance: 0
                }, {
                    begin: "#[a-zA-Z\\ \\.]+"
                }]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "([ui](8|16|32|64|128|size)|f(32|64))?"
          , n = "drop i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator SliceConcatExt ToString assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!";
        return {
            aliases: ["rs"],
            keywords: {
                keyword: "alignof as be box break const continue crate do else enum extern false fn for if impl in let loop match mod mut offsetof once priv proc pub pure ref return self Self sizeof static struct super trait true type typeof unsafe unsized use virtual while where yield move default",
                literal: "true false Some None Ok Err",
                built_in: n
            },
            lexemes: e.IDENT_RE + "!?",
            illegal: "</",
            contains: [e.C_LINE_COMMENT_MODE, e.COMMENT("/\\*", "\\*/", {
                contains: ["self"]
            }), e.inherit(e.QUOTE_STRING_MODE, {
                begin: /b?"/,
                illegal: null
            }), {
                className: "string",
                variants: [{
                    begin: /r(#*)"(.|\n)*?"\1(?!#)/
                }, {
                    begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/
                }]
            }, {
                className: "symbol",
                begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
            }, {
                className: "number",
                variants: [{
                    begin: "\\b0b([01_]+)" + t
                }, {
                    begin: "\\b0o([0-7_]+)" + t
                }, {
                    begin: "\\b0x([A-Fa-f0-9_]+)" + t
                }, {
                    begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + t
                }],
                relevance: 0
            }, {
                className: "function",
                beginKeywords: "fn",
                end: "(\\(|<)",
                excludeEnd: !0,
                contains: [e.UNDERSCORE_TITLE_MODE]
            }, {
                className: "meta",
                begin: "#\\!?\\[",
                end: "\\]",
                contains: [{
                    className: "meta-string",
                    begin: /"/,
                    end: /"/
                }]
            }, {
                className: "class",
                beginKeywords: "type",
                end: ";",
                contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, {
                    endsParent: !0
                })],
                illegal: "\\S"
            }, {
                className: "class",
                beginKeywords: "trait enum struct union",
                end: "{",
                contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, {
                    endsParent: !0
                })],
                illegal: "[\\w\\d]"
            }, {
                begin: e.IDENT_RE + "::",
                keywords: {
                    built_in: n
                }
            }, {
                begin: "->"
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "meta",
            begin: "@[A-Za-z]+"
        }
          , n = {
            className: "subst",
            variants: [{
                begin: "\\$[A-Za-z0-9_]+"
            }, {
                begin: "\\${",
                end: "}"
            }]
        }
          , r = {
            className: "string",
            variants: [{
                begin: '"',
                end: '"',
                illegal: "\\n",
                contains: [e.BACKSLASH_ESCAPE]
            }, {
                begin: '"""',
                end: '"""',
                relevance: 10
            }, {
                begin: '[a-z]+"',
                end: '"',
                illegal: "\\n",
                contains: [e.BACKSLASH_ESCAPE, n]
            }, {
                className: "string",
                begin: '[a-z]+"""',
                end: '"""',
                contains: [n],
                relevance: 10
            }]
        }
          , a = {
            className: "symbol",
            begin: "'\\w[\\w\\d_]*(?!')"
        }
          , i = {
            className: "type",
            begin: "\\b[A-Z][A-Za-z0-9_]*",
            relevance: 0
        }
          , s = {
            className: "title",
            begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
            relevance: 0
        }
          , o = {
            className: "class",
            beginKeywords: "class object trait type",
            end: /[:={\[\n;]/,
            excludeEnd: !0,
            contains: [{
                beginKeywords: "extends with",
                relevance: 10
            }, {
                begin: /\[/,
                end: /\]/,
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0,
                contains: [i]
            }, {
                className: "params",
                begin: /\(/,
                end: /\)/,
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0,
                contains: [i]
            }, s]
        }
          , l = {
            className: "function",
            beginKeywords: "def",
            end: /[:={\[(\n;]/,
            excludeEnd: !0,
            contains: [s]
        };
        return {
            keywords: {
                literal: "true false null",
                keyword: "type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit"
            },
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, r, a, i, l, o, e.C_NUMBER_MODE, t]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+"
          , n = {
            "builtin-name": "case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules ' * + , ,@ - ... / ; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?"
        }
          , r = {
            className: "meta",
            begin: "^#!",
            end: "$"
        }
          , a = {
            className: "literal",
            begin: "(#t|#f|#\\\\" + t + "|#\\\\.)"
        }
          , i = {
            className: "number",
            variants: [{
                begin: "(\\-|\\+)?\\d+([./]\\d+)?",
                relevance: 0
            }, {
                begin: "(\\-|\\+)?\\d+([./]\\d+)?[+\\-](\\-|\\+)?\\d+([./]\\d+)?i",
                relevance: 0
            }, {
                begin: "#b[0-1]+(/[0-1]+)?"
            }, {
                begin: "#o[0-7]+(/[0-7]+)?"
            }, {
                begin: "#x[0-9a-f]+(/[0-9a-f]+)?"
            }]
        }
          , s = e.QUOTE_STRING_MODE
          , o = [e.COMMENT(";", "$", {
            relevance: 0
        }), e.COMMENT("#\\|", "\\|#")]
          , l = {
            begin: t,
            relevance: 0
        }
          , c = {
            className: "symbol",
            begin: "'" + t
        }
          , d = {
            endsWithParent: !0,
            relevance: 0
        }
          , u = {
            variants: [{
                begin: /'/
            }, {
                begin: "`"
            }],
            contains: [{
                begin: "\\(",
                end: "\\)",
                contains: ["self", a, s, i, l, c]
            }]
        }
          , p = {
            className: "name",
            begin: t,
            lexemes: t,
            keywords: n
        }
          , m = {
            begin: /lambda/,
            endsWithParent: !0,
            returnBegin: !0,
            contains: [p, {
                begin: /\(/,
                end: /\)/,
                endsParent: !0,
                contains: [l]
            }]
        }
          , g = {
            variants: [{
                begin: "\\(",
                end: "\\)"
            }, {
                begin: "\\[",
                end: "\\]"
            }],
            contains: [m, p, d]
        };
        return d.contains = [a, i, s, l, c, u, g].concat(o),
        {
            illegal: /\S/,
            contains: [r, i, s, c, u, g].concat(o)
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = [e.C_NUMBER_MODE, {
            className: "string",
            begin: "'|\"",
            end: "'|\"",
            contains: [e.BACKSLASH_ESCAPE, {
                begin: "''"
            }]
        }];
        return {
            aliases: ["sci"],
            lexemes: /%?\w+/,
            keywords: {
                keyword: "abort break case clear catch continue do elseif else endfunction end for function global if pause return resume select try then while",
                literal: "%f %F %t %T %pi %eps %inf %nan %e %i %z %s",
                built_in: "abs and acos asin atan ceil cd chdir clearglobal cosh cos cumprod deff disp error exec execstr exists exp eye gettext floor fprintf fread fsolve imag isdef isempty isinfisnan isvector lasterror length load linspace list listfiles log10 log2 log max min msprintf mclose mopen ones or pathconvert poly printf prod pwd rand real round sinh sin size gsort sprintf sqrt strcat strcmps tring sum system tanh tan type typename warning zeros matrix"
            },
            illegal: '("|#|/\\*|\\s+/\\w+)',
            contains: [{
                className: "function",
                beginKeywords: "function",
                end: "$",
                contains: [e.UNDERSCORE_TITLE_MODE, {
                    className: "params",
                    begin: "\\(",
                    end: "\\)"
                }]
            }, {
                begin: "[a-zA-Z_][a-zA-Z_0-9]*('+[\\.']*|[\\.']+)",
                end: "",
                relevance: 0
            }, {
                begin: "\\[",
                end: "\\]'*[\\.']*",
                relevance: 0,
                contains: t
            }, e.COMMENT("//", "$")].concat(t)
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "variable",
            begin: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b"
        }
          , n = {
            className: "number",
            begin: "#[0-9A-Fa-f]+"
        };
        e.CSS_NUMBER_MODE,
        e.QUOTE_STRING_MODE,
        e.APOS_STRING_MODE,
        e.C_BLOCK_COMMENT_MODE;
        return {
            case_insensitive: !0,
            illegal: "[=/|']",
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                className: "selector-id",
                begin: "\\#[A-Za-z0-9_-]+",
                relevance: 0
            }, {
                className: "selector-class",
                begin: "\\.[A-Za-z0-9_-]+",
                relevance: 0
            }, {
                className: "selector-attr",
                begin: "\\[",
                end: "\\]",
                illegal: "$"
            }, {
                className: "selector-tag",
                begin: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
                relevance: 0
            }, {
                begin: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"
            }, {
                begin: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"
            }, t, {
                className: "attribute",
                begin: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
                illegal: "[^\\s]"
            }, {
                begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
            }, {
                begin: ":",
                end: ";",
                contains: [t, n, e.CSS_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
                    className: "meta",
                    begin: "!important"
                }]
            }, {
                begin: "@",
                end: "[{;]",
                keywords: "mixin include extend for if else each while charset import debug media page content font-face namespace warn",
                contains: [t, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, n, e.CSS_NUMBER_MODE, {
                    begin: "\\s[A-Za-z0-9_.-]+",
                    relevance: 0
                }]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["console"],
            contains: [{
                className: "meta",
                begin: "^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]",
                starts: {
                    end: "$",
                    subLanguage: "bash"
                }
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = ["add", "and", "cmp", "cmpg", "cmpl", "const", "div", "double", "float", "goto", "if", "int", "long", "move", "mul", "neg", "new", "nop", "not", "or", "rem", "return", "shl", "shr", "sput", "sub", "throw", "ushr", "xor"]
          , n = ["aget", "aput", "array", "check", "execute", "fill", "filled", "goto/16", "goto/32", "iget", "instance", "invoke", "iput", "monitor", "packed", "sget", "sparse"]
          , r = ["transient", "constructor", "abstract", "final", "synthetic", "public", "private", "protected", "static", "bridge", "system"];
        return {
            aliases: ["smali"],
            contains: [{
                className: "string",
                begin: '"',
                end: '"',
                relevance: 0
            }, e.COMMENT("#", "$", {
                relevance: 0
            }), {
                className: "keyword",
                variants: [{
                    begin: "\\s*\\.end\\s[a-zA-Z0-9]*"
                }, {
                    begin: "^[ ]*\\.[a-zA-Z]*",
                    relevance: 0
                }, {
                    begin: "\\s:[a-zA-Z_0-9]*",
                    relevance: 0
                }, {
                    begin: "\\s(" + r.join("|") + ")"
                }]
            }, {
                className: "built_in",
                variants: [{
                    begin: "\\s(" + t.join("|") + ")\\s"
                }, {
                    begin: "\\s(" + t.join("|") + ")((\\-|/)[a-zA-Z0-9]+)+\\s",
                    relevance: 10
                }, {
                    begin: "\\s(" + n.join("|") + ")((\\-|/)[a-zA-Z0-9]+)*\\s",
                    relevance: 10
                }]
            }, {
                className: "class",
                begin: "L[^(;:\n]*;",
                relevance: 0
            }, {
                begin: "[vp][0-9]+"
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "string",
            begin: "\\$.{1}"
        }
          , n = {
            className: "symbol",
            begin: "#" + e.UNDERSCORE_IDENT_RE
        };
        return {
            aliases: ["st"],
            keywords: "self super nil true false thisContext",
            contains: [e.COMMENT('"', '"'), e.APOS_STRING_MODE, {
                className: "type",
                begin: "\\b[A-Z][A-Za-z0-9_]*",
                relevance: 0
            }, {
                begin: "[a-z][a-zA-Z0-9_]*:",
                relevance: 0
            }, e.C_NUMBER_MODE, n, t, {
                begin: "\\|[ ]*[a-z][a-zA-Z0-9_]*([ ]+[a-z][a-zA-Z0-9_]*)*[ ]*\\|",
                returnBegin: !0,
                end: /\|/,
                illegal: /\S/,
                contains: [{
                    begin: "(\\|[ ]*)?[a-z][a-zA-Z0-9_]*"
                }]
            }, {
                begin: "\\#\\(",
                end: "\\)",
                contains: [e.APOS_STRING_MODE, t, e.C_NUMBER_MODE, n]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["ml"],
            keywords: {
                keyword: "abstype and andalso as case datatype do else end eqtype exception fn fun functor handle if in include infix infixr let local nonfix of op open orelse raise rec sharing sig signature struct structure then type val with withtype where while",
                built_in: "array bool char exn int list option order real ref string substring vector unit word",
                literal: "true false NONE SOME LESS EQUAL GREATER nil"
            },
            illegal: /\/\/|>>/,
            lexemes: "[a-z_]\\w*!?",
            contains: [{
                className: "literal",
                begin: /\[(\|\|)?\]|\(\)/,
                relevance: 0
            }, e.COMMENT("\\(\\*", "\\*\\)", {
                contains: ["self"]
            }), {
                className: "symbol",
                begin: "'[A-Za-z_](?!')[\\w']*"
            }, {
                className: "type",
                begin: "`[A-Z][\\w']*"
            }, {
                className: "type",
                begin: "\\b[A-Z][\\w']*",
                relevance: 0
            }, {
                begin: "[a-z_]\\w*'[\\w']*"
            }, e.inherit(e.APOS_STRING_MODE, {
                className: "string",
                relevance: 0
            }), e.inherit(e.QUOTE_STRING_MODE, {
                illegal: null
            }), {
                className: "number",
                begin: "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
                relevance: 0
            }, {
                begin: /[-=]>/
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = e.getLanguage("cpp").exports
          , n = {
            className: "variable",
            begin: /\b_+[a-zA-Z_]\w*/
        }
          , r = {
            className: "title",
            begin: /[a-zA-Z][a-zA-Z0-9]+_fnc_\w*/
        }
          , a = {
            className: "string",
            variants: [{
                begin: '"',
                end: '"',
                contains: [{
                    begin: '""',
                    relevance: 0
                }]
            }, {
                begin: "'",
                end: "'",
                contains: [{
                    begin: "''",
                    relevance: 0
                }]
            }]
        };
        return {
            aliases: ["sqf"],
            case_insensitive: !0,
            keywords: {
                keyword: "case catch default do else exit exitWith for forEach from if switch then throw to try waitUntil while with",
                built_in: "abs accTime acos action actionIDs actionKeys actionKeysImages actionKeysNames actionKeysNamesArray actionName actionParams activateAddons activatedAddons activateKey add3DENConnection add3DENEventHandler add3DENLayer addAction addBackpack addBackpackCargo addBackpackCargoGlobal addBackpackGlobal addCamShake addCuratorAddons addCuratorCameraArea addCuratorEditableObjects addCuratorEditingArea addCuratorPoints addEditorObject addEventHandler addGoggles addGroupIcon addHandgunItem addHeadgear addItem addItemCargo addItemCargoGlobal addItemPool addItemToBackpack addItemToUniform addItemToVest addLiveStats addMagazine addMagazineAmmoCargo addMagazineCargo addMagazineCargoGlobal addMagazineGlobal addMagazinePool addMagazines addMagazineTurret addMenu addMenuItem addMissionEventHandler addMPEventHandler addMusicEventHandler addOwnedMine addPlayerScores addPrimaryWeaponItem addPublicVariableEventHandler addRating addResources addScore addScoreSide addSecondaryWeaponItem addSwitchableUnit addTeamMember addToRemainsCollector addUniform addVehicle addVest addWaypoint addWeapon addWeaponCargo addWeaponCargoGlobal addWeaponGlobal addWeaponItem addWeaponPool addWeaponTurret agent agents AGLToASL aimedAtTarget aimPos airDensityRTD airportSide AISFinishHeal alive all3DENEntities allControls allCurators allCutLayers allDead allDeadMen allDisplays allGroups allMapMarkers allMines allMissionObjects allow3DMode allowCrewInImmobile allowCuratorLogicIgnoreAreas allowDamage allowDammage allowFileOperations allowFleeing allowGetIn allowSprint allPlayers allSites allTurrets allUnits allUnitsUAV allVariables ammo and animate animateDoor animateSource animationNames animationPhase animationSourcePhase animationState append apply armoryPoints arrayIntersect asin ASLToAGL ASLToATL assert assignAsCargo assignAsCargoIndex assignAsCommander assignAsDriver assignAsGunner assignAsTurret assignCurator assignedCargo assignedCommander assignedDriver assignedGunner assignedItems assignedTarget assignedTeam assignedVehicle assignedVehicleRole assignItem assignTeam assignToAirport atan atan2 atg ATLToASL attachedObject attachedObjects attachedTo attachObject attachTo attackEnabled backpack backpackCargo backpackContainer backpackItems backpackMagazines backpackSpaceFor behaviour benchmark binocular blufor boundingBox boundingBoxReal boundingCenter breakOut breakTo briefingName buildingExit buildingPos buttonAction buttonSetAction cadetMode call callExtension camCommand camCommit camCommitPrepared camCommitted camConstuctionSetParams camCreate camDestroy cameraEffect cameraEffectEnableHUD cameraInterest cameraOn cameraView campaignConfigFile camPreload camPreloaded camPrepareBank camPrepareDir camPrepareDive camPrepareFocus camPrepareFov camPrepareFovRange camPreparePos camPrepareRelPos camPrepareTarget camSetBank camSetDir camSetDive camSetFocus camSetFov camSetFovRange camSetPos camSetRelPos camSetTarget camTarget camUseNVG canAdd canAddItemToBackpack canAddItemToUniform canAddItemToVest cancelSimpleTaskDestination canFire canMove canSlingLoad canStand canSuspend canUnloadInCombat canVehicleCargo captive captiveNum cbChecked cbSetChecked ceil channelEnabled cheatsEnabled checkAIFeature checkVisibility civilian className clearAllItemsFromBackpack clearBackpackCargo clearBackpackCargoGlobal clearGroupIcons clearItemCargo clearItemCargoGlobal clearItemPool clearMagazineCargo clearMagazineCargoGlobal clearMagazinePool clearOverlay clearRadio clearWeaponCargo clearWeaponCargoGlobal clearWeaponPool clientOwner closeDialog closeDisplay closeOverlay collapseObjectTree collect3DENHistory combatMode commandArtilleryFire commandChat commander commandFire commandFollow commandFSM commandGetOut commandingMenu commandMove commandRadio commandStop commandSuppressiveFire commandTarget commandWatch comment commitOverlay compile compileFinal completedFSM composeText configClasses configFile configHierarchy configName configNull configProperties configSourceAddonList configSourceMod configSourceModList connectTerminalToUAV controlNull controlsGroupCtrl copyFromClipboard copyToClipboard copyWaypoints cos count countEnemy countFriendly countSide countType countUnknown create3DENComposition create3DENEntity createAgent createCenter createDialog createDiaryLink createDiaryRecord createDiarySubject createDisplay createGearDialog createGroup createGuardedPoint createLocation createMarker createMarkerLocal createMenu createMine createMissionDisplay createMPCampaignDisplay createSimpleObject createSimpleTask createSite createSoundSource createTask createTeam createTrigger createUnit createVehicle createVehicleCrew createVehicleLocal crew ctrlActivate ctrlAddEventHandler ctrlAngle ctrlAutoScrollDelay ctrlAutoScrollRewind ctrlAutoScrollSpeed ctrlChecked ctrlClassName ctrlCommit ctrlCommitted ctrlCreate ctrlDelete ctrlEnable ctrlEnabled ctrlFade ctrlHTMLLoaded ctrlIDC ctrlIDD ctrlMapAnimAdd ctrlMapAnimClear ctrlMapAnimCommit ctrlMapAnimDone ctrlMapCursor ctrlMapMouseOver ctrlMapScale ctrlMapScreenToWorld ctrlMapWorldToScreen ctrlModel ctrlModelDirAndUp ctrlModelScale ctrlParent ctrlParentControlsGroup ctrlPosition ctrlRemoveAllEventHandlers ctrlRemoveEventHandler ctrlScale ctrlSetActiveColor ctrlSetAngle ctrlSetAutoScrollDelay ctrlSetAutoScrollRewind ctrlSetAutoScrollSpeed ctrlSetBackgroundColor ctrlSetChecked ctrlSetEventHandler ctrlSetFade ctrlSetFocus ctrlSetFont ctrlSetFontH1 ctrlSetFontH1B ctrlSetFontH2 ctrlSetFontH2B ctrlSetFontH3 ctrlSetFontH3B ctrlSetFontH4 ctrlSetFontH4B ctrlSetFontH5 ctrlSetFontH5B ctrlSetFontH6 ctrlSetFontH6B ctrlSetFontHeight ctrlSetFontHeightH1 ctrlSetFontHeightH2 ctrlSetFontHeightH3 ctrlSetFontHeightH4 ctrlSetFontHeightH5 ctrlSetFontHeightH6 ctrlSetFontHeightSecondary ctrlSetFontP ctrlSetFontPB ctrlSetFontSecondary ctrlSetForegroundColor ctrlSetModel ctrlSetModelDirAndUp ctrlSetModelScale ctrlSetPosition ctrlSetScale ctrlSetStructuredText ctrlSetText ctrlSetTextColor ctrlSetTooltip ctrlSetTooltipColorBox ctrlSetTooltipColorShade ctrlSetTooltipColorText ctrlShow ctrlShown ctrlText ctrlTextHeight ctrlType ctrlVisible curatorAddons curatorCamera curatorCameraArea curatorCameraAreaCeiling curatorCoef curatorEditableObjects curatorEditingArea curatorEditingAreaType curatorMouseOver curatorPoints curatorRegisteredObjects curatorSelected curatorWaypointCost current3DENOperation currentChannel currentCommand currentMagazine currentMagazineDetail currentMagazineDetailTurret currentMagazineTurret currentMuzzle currentNamespace currentTask currentTasks currentThrowable currentVisionMode currentWaypoint currentWeapon currentWeaponMode currentWeaponTurret currentZeroing cursorObject cursorTarget customChat customRadio cutFadeOut cutObj cutRsc cutText damage date dateToNumber daytime deActivateKey debriefingText debugFSM debugLog deg delete3DENEntities deleteAt deleteCenter deleteCollection deleteEditorObject deleteGroup deleteIdentity deleteLocation deleteMarker deleteMarkerLocal deleteRange deleteResources deleteSite deleteStatus deleteTeam deleteVehicle deleteVehicleCrew deleteWaypoint detach detectedMines diag_activeMissionFSMs diag_activeScripts diag_activeSQFScripts diag_activeSQSScripts diag_captureFrame diag_captureSlowFrame diag_codePerformance diag_drawMode diag_enable diag_enabled diag_fps diag_fpsMin diag_frameNo diag_list diag_log diag_logSlowFrame diag_mergeConfigFile diag_recordTurretLimits diag_tickTime diag_toggle dialog diarySubjectExists didJIP didJIPOwner difficulty difficultyEnabled difficultyEnabledRTD difficultyOption direction directSay disableAI disableCollisionWith disableConversation disableDebriefingStats disableNVGEquipment disableRemoteSensors disableSerialization disableTIEquipment disableUAVConnectability disableUserInput displayAddEventHandler displayCtrl displayNull displayParent displayRemoveAllEventHandlers displayRemoveEventHandler displaySetEventHandler dissolveTeam distance distance2D distanceSqr distributionRegion do3DENAction doArtilleryFire doFire doFollow doFSM doGetOut doMove doorPhase doStop doSuppressiveFire doTarget doWatch drawArrow drawEllipse drawIcon drawIcon3D drawLine drawLine3D drawLink drawLocation drawPolygon drawRectangle driver drop east echo edit3DENMissionAttributes editObject editorSetEventHandler effectiveCommander emptyPositions enableAI enableAIFeature enableAimPrecision enableAttack enableAudioFeature enableCamShake enableCaustics enableChannel enableCollisionWith enableCopilot enableDebriefingStats enableDiagLegend enableEndDialog enableEngineArtillery enableEnvironment enableFatigue enableGunLights enableIRLasers enableMimics enablePersonTurret enableRadio enableReload enableRopeAttach enableSatNormalOnDetail enableSaving enableSentences enableSimulation enableSimulationGlobal enableStamina enableTeamSwitch enableUAVConnectability enableUAVWaypoints enableVehicleCargo endLoadingScreen endMission engineOn enginesIsOnRTD enginesRpmRTD enginesTorqueRTD entities estimatedEndServerTime estimatedTimeLeft evalObjectArgument everyBackpack everyContainer exec execEditorScript execFSM execVM exp expectedDestination exportJIPMessages eyeDirection eyePos face faction fadeMusic fadeRadio fadeSound fadeSpeech failMission fillWeaponsFromPool find findCover findDisplay findEditorObject findEmptyPosition findEmptyPositionReady findNearestEnemy finishMissionInit finite fire fireAtTarget firstBackpack flag flagOwner flagSide flagTexture fleeing floor flyInHeight flyInHeightASL fog fogForecast fogParams forceAddUniform forcedMap forceEnd forceMap forceRespawn forceSpeed forceWalk forceWeaponFire forceWeatherChange forEachMember forEachMemberAgent forEachMemberTeam format formation formationDirection formationLeader formationMembers formationPosition formationTask formatText formLeader freeLook fromEditor fuel fullCrew gearIDCAmmoCount gearSlotAmmoCount gearSlotData get3DENActionState get3DENAttribute get3DENCamera get3DENConnections get3DENEntity get3DENEntityID get3DENGrid get3DENIconsVisible get3DENLayerEntities get3DENLinesVisible get3DENMissionAttribute get3DENMouseOver get3DENSelected getAimingCoef getAllHitPointsDamage getAllOwnedMines getAmmoCargo getAnimAimPrecision getAnimSpeedCoef getArray getArtilleryAmmo getArtilleryComputerSettings getArtilleryETA getAssignedCuratorLogic getAssignedCuratorUnit getBackpackCargo getBleedingRemaining getBurningValue getCameraViewDirection getCargoIndex getCenterOfMass getClientState getClientStateNumber getConnectedUAV getCustomAimingCoef getDammage getDescription getDir getDirVisual getDLCs getEditorCamera getEditorMode getEditorObjectScope getElevationOffset getFatigue getFriend getFSMVariable getFuelCargo getGroupIcon getGroupIconParams getGroupIcons getHideFrom getHit getHitIndex getHitPointDamage getItemCargo getMagazineCargo getMarkerColor getMarkerPos getMarkerSize getMarkerType getMass getMissionConfig getMissionConfigValue getMissionDLCs getMissionLayerEntities getModelInfo getMousePosition getNumber getObjectArgument getObjectChildren getObjectDLC getObjectMaterials getObjectProxy getObjectTextures getObjectType getObjectViewDistance getOxygenRemaining getPersonUsedDLCs getPilotCameraDirection getPilotCameraPosition getPilotCameraRotation getPilotCameraTarget getPlayerChannel getPlayerScores getPlayerUID getPos getPosASL getPosASLVisual getPosASLW getPosATL getPosATLVisual getPosVisual getPosWorld getRelDir getRelPos getRemoteSensorsDisabled getRepairCargo getResolution getShadowDistance getShotParents getSlingLoad getSpeed getStamina getStatValue getSuppression getTerrainHeightASL getText getUnitLoadout getUnitTrait getVariable getVehicleCargo getWeaponCargo getWeaponSway getWPPos glanceAt globalChat globalRadio goggles goto group groupChat groupFromNetId groupIconSelectable groupIconsVisible groupId groupOwner groupRadio groupSelectedUnits groupSelectUnit grpNull gunner gusts halt handgunItems handgunMagazine handgunWeapon handsHit hasInterface hasPilotCamera hasWeapon hcAllGroups hcGroupParams hcLeader hcRemoveAllGroups hcRemoveGroup hcSelected hcSelectGroup hcSetGroup hcShowBar hcShownBar headgear hideBody hideObject hideObjectGlobal hideSelection hint hintC hintCadet hintSilent hmd hostMission htmlLoad HUDMovementLevels humidity image importAllGroups importance in inArea inAreaArray incapacitatedState independent inflame inflamed inGameUISetEventHandler inheritsFrom initAmbientLife inPolygon inputAction inRangeOfArtillery insertEditorObject intersect is3DEN is3DENMultiplayer isAbleToBreathe isAgent isArray isAutoHoverOn isAutonomous isAutotest isBleeding isBurning isClass isCollisionLightOn isCopilotEnabled isDedicated isDLCAvailable isEngineOn isEqualTo isEqualType isEqualTypeAll isEqualTypeAny isEqualTypeArray isEqualTypeParams isFilePatchingEnabled isFlashlightOn isFlatEmpty isForcedWalk isFormationLeader isHidden isInRemainsCollector isInstructorFigureEnabled isIRLaserOn isKeyActive isKindOf isLightOn isLocalized isManualFire isMarkedForCollection isMultiplayer isMultiplayerSolo isNil isNull isNumber isObjectHidden isObjectRTD isOnRoad isPipEnabled isPlayer isRealTime isRemoteExecuted isRemoteExecutedJIP isServer isShowing3DIcons isSprintAllowed isStaminaEnabled isSteamMission isStreamFriendlyUIEnabled isText isTouchingGround isTurnedOut isTutHintsEnabled isUAVConnectable isUAVConnected isUniformAllowed isVehicleCargo isWalking isWeaponDeployed isWeaponRested itemCargo items itemsWithMagazines join joinAs joinAsSilent joinSilent joinString kbAddDatabase kbAddDatabaseTargets kbAddTopic kbHasTopic kbReact kbRemoveTopic kbTell kbWasSaid keyImage keyName knowsAbout land landAt landResult language laserTarget lbAdd lbClear lbColor lbCurSel lbData lbDelete lbIsSelected lbPicture lbSelection lbSetColor lbSetCurSel lbSetData lbSetPicture lbSetPictureColor lbSetPictureColorDisabled lbSetPictureColorSelected lbSetSelectColor lbSetSelectColorRight lbSetSelected lbSetTooltip lbSetValue lbSize lbSort lbSortByValue lbText lbValue leader leaderboardDeInit leaderboardGetRows leaderboardInit leaveVehicle libraryCredits libraryDisclaimers lifeState lightAttachObject lightDetachObject lightIsOn lightnings limitSpeed linearConversion lineBreak lineIntersects lineIntersectsObjs lineIntersectsSurfaces lineIntersectsWith linkItem list listObjects ln lnbAddArray lnbAddColumn lnbAddRow lnbClear lnbColor lnbCurSelRow lnbData lnbDeleteColumn lnbDeleteRow lnbGetColumnsPosition lnbPicture lnbSetColor lnbSetColumnsPos lnbSetCurSelRow lnbSetData lnbSetPicture lnbSetText lnbSetValue lnbSize lnbText lnbValue load loadAbs loadBackpack loadFile loadGame loadIdentity loadMagazine loadOverlay loadStatus loadUniform loadVest local localize locationNull locationPosition lock lockCameraTo lockCargo lockDriver locked lockedCargo lockedDriver lockedTurret lockIdentity lockTurret lockWP log logEntities logNetwork logNetworkTerminate lookAt lookAtPos magazineCargo magazines magazinesAllTurrets magazinesAmmo magazinesAmmoCargo magazinesAmmoFull magazinesDetail magazinesDetailBackpack magazinesDetailUniform magazinesDetailVest magazinesTurret magazineTurretAmmo mapAnimAdd mapAnimClear mapAnimCommit mapAnimDone mapCenterOnCamera mapGridPosition markAsFinishedOnSteam markerAlpha markerBrush markerColor markerDir markerPos markerShape markerSize markerText markerType max members menuAction menuAdd menuChecked menuClear menuCollapse menuData menuDelete menuEnable menuEnabled menuExpand menuHover menuPicture menuSetAction menuSetCheck menuSetData menuSetPicture menuSetValue menuShortcut menuShortcutText menuSize menuSort menuText menuURL menuValue min mineActive mineDetectedBy missionConfigFile missionDifficulty missionName missionNamespace missionStart missionVersion mod modelToWorld modelToWorldVisual modParams moonIntensity moonPhase morale move move3DENCamera moveInAny moveInCargo moveInCommander moveInDriver moveInGunner moveInTurret moveObjectToEnd moveOut moveTime moveTo moveToCompleted moveToFailed musicVolume name nameSound nearEntities nearestBuilding nearestLocation nearestLocations nearestLocationWithDubbing nearestObject nearestObjects nearestTerrainObjects nearObjects nearObjectsReady nearRoads nearSupplies nearTargets needReload netId netObjNull newOverlay nextMenuItemIndex nextWeatherChange nMenuItems not numberToDate objectCurators objectFromNetId objectParent objNull objStatus onBriefingGroup onBriefingNotes onBriefingPlan onBriefingTeamSwitch onCommandModeChanged onDoubleClick onEachFrame onGroupIconClick onGroupIconOverEnter onGroupIconOverLeave onHCGroupSelectionChanged onMapSingleClick onPlayerConnected onPlayerDisconnected onPreloadFinished onPreloadStarted onShowNewObject onTeamSwitch openCuratorInterface openDLCPage openMap openYoutubeVideo opfor or orderGetIn overcast overcastForecast owner param params parseNumber parseText parsingNamespace particlesQuality pi pickWeaponPool pitch pixelGrid pixelGridBase pixelGridNoUIScale pixelH pixelW playableSlotsNumber playableUnits playAction playActionNow player playerRespawnTime playerSide playersNumber playGesture playMission playMove playMoveNow playMusic playScriptedMission playSound playSound3D position positionCameraToWorld posScreenToWorld posWorldToScreen ppEffectAdjust ppEffectCommit ppEffectCommitted ppEffectCreate ppEffectDestroy ppEffectEnable ppEffectEnabled ppEffectForceInNVG precision preloadCamera preloadObject preloadSound preloadTitleObj preloadTitleRsc preprocessFile preprocessFileLineNumbers primaryWeapon primaryWeaponItems primaryWeaponMagazine priority private processDiaryLink productVersion profileName profileNamespace profileNameSteam progressLoadingScreen progressPosition progressSetPosition publicVariable publicVariableClient publicVariableServer pushBack pushBackUnique putWeaponPool queryItemsPool queryMagazinePool queryWeaponPool rad radioChannelAdd radioChannelCreate radioChannelRemove radioChannelSetCallSign radioChannelSetLabel radioVolume rain rainbow random rank rankId rating rectangular registeredTasks registerTask reload reloadEnabled remoteControl remoteExec remoteExecCall remove3DENConnection remove3DENEventHandler remove3DENLayer removeAction removeAll3DENEventHandlers removeAllActions removeAllAssignedItems removeAllContainers removeAllCuratorAddons removeAllCuratorCameraAreas removeAllCuratorEditingAreas removeAllEventHandlers removeAllHandgunItems removeAllItems removeAllItemsWithMagazines removeAllMissionEventHandlers removeAllMPEventHandlers removeAllMusicEventHandlers removeAllOwnedMines removeAllPrimaryWeaponItems removeAllWeapons removeBackpack removeBackpackGlobal removeCuratorAddons removeCuratorCameraArea removeCuratorEditableObjects removeCuratorEditingArea removeDrawIcon removeDrawLinks removeEventHandler removeFromRemainsCollector removeGoggles removeGroupIcon removeHandgunItem removeHeadgear removeItem removeItemFromBackpack removeItemFromUniform removeItemFromVest removeItems removeMagazine removeMagazineGlobal removeMagazines removeMagazinesTurret removeMagazineTurret removeMenuItem removeMissionEventHandler removeMPEventHandler removeMusicEventHandler removeOwnedMine removePrimaryWeaponItem removeSecondaryWeaponItem removeSimpleTask removeSwitchableUnit removeTeamMember removeUniform removeVest removeWeapon removeWeaponGlobal removeWeaponTurret requiredVersion resetCamShake resetSubgroupDirection resistance resize resources respawnVehicle restartEditorCamera reveal revealMine reverse reversedMouseY roadAt roadsConnectedTo roleDescription ropeAttachedObjects ropeAttachedTo ropeAttachEnabled ropeAttachTo ropeCreate ropeCut ropeDestroy ropeDetach ropeEndPosition ropeLength ropes ropeUnwind ropeUnwound rotorsForcesRTD rotorsRpmRTD round runInitScript safeZoneH safeZoneW safeZoneWAbs safeZoneX safeZoneXAbs safeZoneY save3DENInventory saveGame saveIdentity saveJoysticks saveOverlay saveProfileNamespace saveStatus saveVar savingEnabled say say2D say3D scopeName score scoreSide screenshot screenToWorld scriptDone scriptName scriptNull scudState secondaryWeapon secondaryWeaponItems secondaryWeaponMagazine select selectBestPlaces selectDiarySubject selectedEditorObjects selectEditorObject selectionNames selectionPosition selectLeader selectMax selectMin selectNoPlayer selectPlayer selectRandom selectWeapon selectWeaponTurret sendAUMessage sendSimpleCommand sendTask sendTaskResult sendUDPMessage serverCommand serverCommandAvailable serverCommandExecutable serverName serverTime set set3DENAttribute set3DENAttributes set3DENGrid set3DENIconsVisible set3DENLayer set3DENLinesVisible set3DENMissionAttributes set3DENModelsVisible set3DENObjectType set3DENSelected setAccTime setAirportSide setAmmo setAmmoCargo setAnimSpeedCoef setAperture setApertureNew setArmoryPoints setAttributes setAutonomous setBehaviour setBleedingRemaining setCameraInterest setCamShakeDefParams setCamShakeParams setCamUseTi setCaptive setCenterOfMass setCollisionLight setCombatMode setCompassOscillation setCuratorCameraAreaCeiling setCuratorCoef setCuratorEditingAreaType setCuratorWaypointCost setCurrentChannel setCurrentTask setCurrentWaypoint setCustomAimCoef setDamage setDammage setDate setDebriefingText setDefaultCamera setDestination setDetailMapBlendPars setDir setDirection setDrawIcon setDropInterval setEditorMode setEditorObjectScope setEffectCondition setFace setFaceAnimation setFatigue setFlagOwner setFlagSide setFlagTexture setFog setFormation setFormationTask setFormDir setFriend setFromEditor setFSMVariable setFuel setFuelCargo setGroupIcon setGroupIconParams setGroupIconsSelectable setGroupIconsVisible setGroupId setGroupIdGlobal setGroupOwner setGusts setHideBehind setHit setHitIndex setHitPointDamage setHorizonParallaxCoef setHUDMovementLevels setIdentity setImportance setLeader setLightAmbient setLightAttenuation setLightBrightness setLightColor setLightDayLight setLightFlareMaxDistance setLightFlareSize setLightIntensity setLightnings setLightUseFlare setLocalWindParams setMagazineTurretAmmo setMarkerAlpha setMarkerAlphaLocal setMarkerBrush setMarkerBrushLocal setMarkerColor setMarkerColorLocal setMarkerDir setMarkerDirLocal setMarkerPos setMarkerPosLocal setMarkerShape setMarkerShapeLocal setMarkerSize setMarkerSizeLocal setMarkerText setMarkerTextLocal setMarkerType setMarkerTypeLocal setMass setMimic setMousePosition setMusicEffect setMusicEventHandler setName setNameSound setObjectArguments setObjectMaterial setObjectMaterialGlobal setObjectProxy setObjectTexture setObjectTextureGlobal setObjectViewDistance setOvercast setOwner setOxygenRemaining setParticleCircle setParticleClass setParticleFire setParticleParams setParticleRandom setPilotCameraDirection setPilotCameraRotation setPilotCameraTarget setPilotLight setPiPEffect setPitch setPlayable setPlayerRespawnTime setPos setPosASL setPosASL2 setPosASLW setPosATL setPosition setPosWorld setRadioMsg setRain setRainbow setRandomLip setRank setRectangular setRepairCargo setShadowDistance setShotParents setSide setSimpleTaskAlwaysVisible setSimpleTaskCustomData setSimpleTaskDescription setSimpleTaskDestination setSimpleTaskTarget setSimpleTaskType setSimulWeatherLayers setSize setSkill setSlingLoad setSoundEffect setSpeaker setSpeech setSpeedMode setStamina setStaminaScheme setStatValue setSuppression setSystemOfUnits setTargetAge setTaskResult setTaskState setTerrainGrid setText setTimeMultiplier setTitleEffect setTriggerActivation setTriggerArea setTriggerStatements setTriggerText setTriggerTimeout setTriggerType setType setUnconscious setUnitAbility setUnitLoadout setUnitPos setUnitPosWeak setUnitRank setUnitRecoilCoefficient setUnitTrait setUnloadInCombat setUserActionText setVariable setVectorDir setVectorDirAndUp setVectorUp setVehicleAmmo setVehicleAmmoDef setVehicleArmor setVehicleCargo setVehicleId setVehicleLock setVehiclePosition setVehicleTiPars setVehicleVarName setVelocity setVelocityTransformation setViewDistance setVisibleIfTreeCollapsed setWaves setWaypointBehaviour setWaypointCombatMode setWaypointCompletionRadius setWaypointDescription setWaypointForceBehaviour setWaypointFormation setWaypointHousePosition setWaypointLoiterRadius setWaypointLoiterType setWaypointName setWaypointPosition setWaypointScript setWaypointSpeed setWaypointStatements setWaypointTimeout setWaypointType setWaypointVisible setWeaponReloadingTime setWind setWindDir setWindForce setWindStr setWPPos show3DIcons showChat showCinemaBorder showCommandingMenu showCompass showCuratorCompass showGPS showHUD showLegend showMap shownArtilleryComputer shownChat shownCompass shownCuratorCompass showNewEditorObject shownGPS shownHUD shownMap shownPad shownRadio shownScoretable shownUAVFeed shownWarrant shownWatch showPad showRadio showScoretable showSubtitles showUAVFeed showWarrant showWatch showWaypoint showWaypoints side sideAmbientLife sideChat sideEmpty sideEnemy sideFriendly sideLogic sideRadio sideUnknown simpleTasks simulationEnabled simulCloudDensity simulCloudOcclusion simulInClouds simulWeatherSync sin size sizeOf skill skillFinal skipTime sleep sliderPosition sliderRange sliderSetPosition sliderSetRange sliderSetSpeed sliderSpeed slingLoadAssistantShown soldierMagazines someAmmo sort soundVolume spawn speaker speed speedMode splitString sqrt squadParams stance startLoadingScreen step stop stopEngineRTD stopped str sunOrMoon supportInfo suppressFor surfaceIsWater surfaceNormal surfaceType swimInDepth switchableUnits switchAction switchCamera switchGesture switchLight switchMove synchronizedObjects synchronizedTriggers synchronizedWaypoints synchronizeObjectsAdd synchronizeObjectsRemove synchronizeTrigger synchronizeWaypoint systemChat systemOfUnits tan targetKnowledge targetsAggregate targetsQuery taskAlwaysVisible taskChildren taskCompleted taskCustomData taskDescription taskDestination taskHint taskMarkerOffset taskNull taskParent taskResult taskState taskType teamMember teamMemberNull teamName teams teamSwitch teamSwitchEnabled teamType terminate terrainIntersect terrainIntersectASL text textLog textLogFormat tg time timeMultiplier titleCut titleFadeOut titleObj titleRsc titleText toArray toFixed toLower toString toUpper triggerActivated triggerActivation triggerArea triggerAttachedVehicle triggerAttachObject triggerAttachVehicle triggerStatements triggerText triggerTimeout triggerTimeoutCurrent triggerType turretLocal turretOwner turretUnit tvAdd tvClear tvCollapse tvCount tvCurSel tvData tvDelete tvExpand tvPicture tvSetCurSel tvSetData tvSetPicture tvSetPictureColor tvSetPictureColorDisabled tvSetPictureColorSelected tvSetPictureRight tvSetPictureRightColor tvSetPictureRightColorDisabled tvSetPictureRightColorSelected tvSetText tvSetTooltip tvSetValue tvSort tvSortByValue tvText tvTooltip tvValue type typeName typeOf UAVControl uiNamespace uiSleep unassignCurator unassignItem unassignTeam unassignVehicle underwater uniform uniformContainer uniformItems uniformMagazines unitAddons unitAimPosition unitAimPositionVisual unitBackpack unitIsUAV unitPos unitReady unitRecoilCoefficient units unitsBelowHeight unlinkItem unlockAchievement unregisterTask updateDrawIcon updateMenuItem updateObjectTree useAISteeringComponent useAudioTimeForMoves vectorAdd vectorCos vectorCrossProduct vectorDiff vectorDir vectorDirVisual vectorDistance vectorDistanceSqr vectorDotProduct vectorFromTo vectorMagnitude vectorMagnitudeSqr vectorMultiply vectorNormalized vectorUp vectorUpVisual vehicle vehicleCargoEnabled vehicleChat vehicleRadio vehicles vehicleVarName velocity velocityModelSpace verifySignature vest vestContainer vestItems vestMagazines viewDistance visibleCompass visibleGPS visibleMap visiblePosition visiblePositionASL visibleScoretable visibleWatch waves waypointAttachedObject waypointAttachedVehicle waypointAttachObject waypointAttachVehicle waypointBehaviour waypointCombatMode waypointCompletionRadius waypointDescription waypointForceBehaviour waypointFormation waypointHousePosition waypointLoiterRadius waypointLoiterType waypointName waypointPosition waypoints waypointScript waypointsEnabledUAV waypointShow waypointSpeed waypointStatements waypointTimeout waypointTimeoutCurrent waypointType waypointVisible weaponAccessories weaponAccessoriesCargo weaponCargo weaponDirection weaponInertia weaponLowered weapons weaponsItems weaponsItemsCargo weaponState weaponsTurret weightRTD west WFSideText wind",
                literal: "true false nil"
            },
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.NUMBER_MODE, n, r, a, t.preprocessor],
            illegal: /#/
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = e.COMMENT("--", "$");
        return {
            case_insensitive: !0,
            illegal: /[<>{}*#]/,
            contains: [{
                beginKeywords: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment",
                end: /;/,
                endsWithParent: !0,
                lexemes: /[\w\.]+/,
                keywords: {
                    keyword: "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
                    literal: "true false null",
                    built_in: "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"
                },
                contains: [{
                    className: "string",
                    begin: "'",
                    end: "'",
                    contains: [e.BACKSLASH_ESCAPE, {
                        begin: "''"
                    }]
                }, {
                    className: "string",
                    begin: '"',
                    end: '"',
                    contains: [e.BACKSLASH_ESCAPE, {
                        begin: '""'
                    }]
                }, {
                    className: "string",
                    begin: "`",
                    end: "`",
                    contains: [e.BACKSLASH_ESCAPE]
                }, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE, t]
            }, e.C_BLOCK_COMMENT_MODE, t]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            contains: [e.HASH_COMMENT_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                begin: e.UNDERSCORE_IDENT_RE,
                lexemes: e.UNDERSCORE_IDENT_RE,
                keywords: {
                    name: "for in while repeat until if then else",
                    symbol: "bernoulli bernoulli_logit binomial binomial_logit beta_binomial hypergeometric categorical categorical_logit ordered_logistic neg_binomial neg_binomial_2 neg_binomial_2_log poisson poisson_log multinomial normal exp_mod_normal skew_normal student_t cauchy double_exponential logistic gumbel lognormal chi_square inv_chi_square scaled_inv_chi_square exponential inv_gamma weibull frechet rayleigh wiener pareto pareto_type_2 von_mises uniform multi_normal multi_normal_prec multi_normal_cholesky multi_gp multi_gp_cholesky multi_student_t gaussian_dlm_obs dirichlet lkj_corr lkj_corr_cholesky wishart inv_wishart",
                    "selector-tag": "int real vector simplex unit_vector ordered positive_ordered row_vector matrix cholesky_factor_corr cholesky_factor_cov corr_matrix cov_matrix",
                    title: "functions model data parameters quantities transformed generated",
                    literal: "true false"
                },
                relevance: 0
            }, {
                className: "number",
                begin: "0[xX][0-9a-fA-F]+[Li]?\\b",
                relevance: 0
            }, {
                className: "number",
                begin: "0[xX][0-9a-fA-F]+[Li]?\\b",
                relevance: 0
            }, {
                className: "number",
                begin: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
                relevance: 0
            }, {
                className: "number",
                begin: "\\d+\\.(?!\\d)(?:i\\b)?",
                relevance: 0
            }, {
                className: "number",
                begin: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
                relevance: 0
            }, {
                className: "number",
                begin: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
                relevance: 0
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["do", "ado"],
            case_insensitive: !0,
            keywords: "if else in foreach for forv forva forval forvalu forvalue forvalues by bys bysort xi quietly qui capture about ac ac_7 acprplot acprplot_7 adjust ado adopath adoupdate alpha ameans an ano anov anova anova_estat anova_terms anovadef aorder ap app appe appen append arch arch_dr arch_estat arch_p archlm areg areg_p args arima arima_dr arima_estat arima_p as asmprobit asmprobit_estat asmprobit_lf asmprobit_mfx__dlg asmprobit_p ass asse asser assert avplot avplot_7 avplots avplots_7 bcskew0 bgodfrey binreg bip0_lf biplot bipp_lf bipr_lf bipr_p biprobit bitest bitesti bitowt blogit bmemsize boot bootsamp bootstrap bootstrap_8 boxco_l boxco_p boxcox boxcox_6 boxcox_p bprobit br break brier bro brow brows browse brr brrstat bs bs_7 bsampl_w bsample bsample_7 bsqreg bstat bstat_7 bstat_8 bstrap bstrap_7 ca ca_estat ca_p cabiplot camat canon canon_8 canon_8_p canon_estat canon_p cap caprojection capt captu captur capture cat cc cchart cchart_7 cci cd censobs_table centile cf char chdir checkdlgfiles checkestimationsample checkhlpfiles checksum chelp ci cii cl class classutil clear cli clis clist clo clog clog_lf clog_p clogi clogi_sw clogit clogit_lf clogit_p clogitp clogl_sw cloglog clonevar clslistarray cluster cluster_measures cluster_stop cluster_tree cluster_tree_8 clustermat cmdlog cnr cnre cnreg cnreg_p cnreg_sw cnsreg codebook collaps4 collapse colormult_nb colormult_nw compare compress conf confi confir confirm conren cons const constr constra constrai constrain constraint continue contract copy copyright copysource cor corc corr corr2data corr_anti corr_kmo corr_smc corre correl correla correlat correlate corrgram cou coun count cox cox_p cox_sw coxbase coxhaz coxvar cprplot cprplot_7 crc cret cretu cretur creturn cross cs cscript cscript_log csi ct ct_is ctset ctst_5 ctst_st cttost cumsp cumsp_7 cumul cusum cusum_7 cutil d|0 datasig datasign datasigna datasignat datasignatu datasignatur datasignature datetof db dbeta de dec deco decod decode deff des desc descr descri describ describe destring dfbeta dfgls dfuller di di_g dir dirstats dis discard disp disp_res disp_s displ displa display distinct do doe doed doedi doedit dotplot dotplot_7 dprobit drawnorm drop ds ds_util dstdize duplicates durbina dwstat dydx e|0 ed edi edit egen eivreg emdef en enc enco encod encode eq erase ereg ereg_lf ereg_p ereg_sw ereghet ereghet_glf ereghet_glf_sh ereghet_gp ereghet_ilf ereghet_ilf_sh ereghet_ip eret eretu eretur ereturn err erro error est est_cfexist est_cfname est_clickable est_expand est_hold est_table est_unhold est_unholdok estat estat_default estat_summ estat_vce_only esti estimates etodow etof etomdy ex exi exit expand expandcl fac fact facto factor factor_estat factor_p factor_pca_rotated factor_rotate factormat fcast fcast_compute fcast_graph fdades fdadesc fdadescr fdadescri fdadescrib fdadescribe fdasav fdasave fdause fh_st file open file read file close file filefilter fillin find_hlp_file findfile findit findit_7 fit fl fli flis flist for5_0 form forma format fpredict frac_154 frac_adj frac_chk frac_cox frac_ddp frac_dis frac_dv frac_in frac_mun frac_pp frac_pq frac_pv frac_wgt frac_xo fracgen fracplot fracplot_7 fracpoly fracpred fron_ex fron_hn fron_p fron_tn fron_tn2 frontier ftodate ftoe ftomdy ftowdate g|0 gamhet_glf gamhet_gp gamhet_ilf gamhet_ip gamma gamma_d2 gamma_p gamma_sw gammahet gdi_hexagon gdi_spokes ge gen gene gener genera generat generate genrank genstd genvmean gettoken gl gladder gladder_7 glim_l01 glim_l02 glim_l03 glim_l04 glim_l05 glim_l06 glim_l07 glim_l08 glim_l09 glim_l10 glim_l11 glim_l12 glim_lf glim_mu glim_nw1 glim_nw2 glim_nw3 glim_p glim_v1 glim_v2 glim_v3 glim_v4 glim_v5 glim_v6 glim_v7 glm glm_6 glm_p glm_sw glmpred glo glob globa global glogit glogit_8 glogit_p gmeans gnbre_lf gnbreg gnbreg_5 gnbreg_p gomp_lf gompe_sw gomper_p gompertz gompertzhet gomphet_glf gomphet_glf_sh gomphet_gp gomphet_ilf gomphet_ilf_sh gomphet_ip gphdot gphpen gphprint gprefs gprobi_p gprobit gprobit_8 gr gr7 gr_copy gr_current gr_db gr_describe gr_dir gr_draw gr_draw_replay gr_drop gr_edit gr_editviewopts gr_example gr_example2 gr_export gr_print gr_qscheme gr_query gr_read gr_rename gr_replay gr_save gr_set gr_setscheme gr_table gr_undo gr_use graph graph7 grebar greigen greigen_7 greigen_8 grmeanby grmeanby_7 gs_fileinfo gs_filetype gs_graphinfo gs_stat gsort gwood h|0 hadimvo hareg hausman haver he heck_d2 heckma_p heckman heckp_lf heckpr_p heckprob hel help hereg hetpr_lf hetpr_p hetprob hettest hexdump hilite hist hist_7 histogram hlogit hlu hmeans hotel hotelling hprobit hreg hsearch icd9 icd9_ff icd9p iis impute imtest inbase include inf infi infil infile infix inp inpu input ins insheet insp inspe inspec inspect integ inten intreg intreg_7 intreg_p intrg2_ll intrg_ll intrg_ll2 ipolate iqreg ir irf irf_create irfm iri is_svy is_svysum isid istdize ivprob_1_lf ivprob_lf ivprobit ivprobit_p ivreg ivreg_footnote ivtob_1_lf ivtob_lf ivtobit ivtobit_p jackknife jacknife jknife jknife_6 jknife_8 jkstat joinby kalarma1 kap kap_3 kapmeier kappa kapwgt kdensity kdensity_7 keep ksm ksmirnov ktau kwallis l|0 la lab labe label labelbook ladder levels levelsof leverage lfit lfit_p li lincom line linktest lis list lloghet_glf lloghet_glf_sh lloghet_gp lloghet_ilf lloghet_ilf_sh lloghet_ip llogi_sw llogis_p llogist llogistic llogistichet lnorm_lf lnorm_sw lnorma_p lnormal lnormalhet lnormhet_glf lnormhet_glf_sh lnormhet_gp lnormhet_ilf lnormhet_ilf_sh lnormhet_ip lnskew0 loadingplot loc loca local log logi logis_lf logistic logistic_p logit logit_estat logit_p loglogs logrank loneway lookfor lookup lowess lowess_7 lpredict lrecomp lroc lroc_7 lrtest ls lsens lsens_7 lsens_x lstat ltable ltable_7 ltriang lv lvr2plot lvr2plot_7 m|0 ma mac macr macro makecns man manova manova_estat manova_p manovatest mantel mark markin markout marksample mat mat_capp mat_order mat_put_rr mat_rapp mata mata_clear mata_describe mata_drop mata_matdescribe mata_matsave mata_matuse mata_memory mata_mlib mata_mosave mata_rename mata_which matalabel matcproc matlist matname matr matri matrix matrix_input__dlg matstrik mcc mcci md0_ md1_ md1debug_ md2_ md2debug_ mds mds_estat mds_p mdsconfig mdslong mdsmat mdsshepard mdytoe mdytof me_derd mean means median memory memsize meqparse mer merg merge mfp mfx mhelp mhodds minbound mixed_ll mixed_ll_reparm mkassert mkdir mkmat mkspline ml ml_5 ml_adjs ml_bhhhs ml_c_d ml_check ml_clear ml_cnt ml_debug ml_defd ml_e0 ml_e0_bfgs ml_e0_cycle ml_e0_dfp ml_e0i ml_e1 ml_e1_bfgs ml_e1_bhhh ml_e1_cycle ml_e1_dfp ml_e2 ml_e2_cycle ml_ebfg0 ml_ebfr0 ml_ebfr1 ml_ebh0q ml_ebhh0 ml_ebhr0 ml_ebr0i ml_ecr0i ml_edfp0 ml_edfr0 ml_edfr1 ml_edr0i ml_eds ml_eer0i ml_egr0i ml_elf ml_elf_bfgs ml_elf_bhhh ml_elf_cycle ml_elf_dfp ml_elfi ml_elfs ml_enr0i ml_enrr0 ml_erdu0 ml_erdu0_bfgs ml_erdu0_bhhh ml_erdu0_bhhhq ml_erdu0_cycle ml_erdu0_dfp ml_erdu0_nrbfgs ml_exde ml_footnote ml_geqnr ml_grad0 ml_graph ml_hbhhh ml_hd0 ml_hold ml_init ml_inv ml_log ml_max ml_mlout ml_mlout_8 ml_model ml_nb0 ml_opt ml_p ml_plot ml_query ml_rdgrd ml_repor ml_s_e ml_score ml_searc ml_technique ml_unhold mleval mlf_ mlmatbysum mlmatsum mlog mlogi mlogit mlogit_footnote mlogit_p mlopts mlsum mlvecsum mnl0_ mor more mov move mprobit mprobit_lf mprobit_p mrdu0_ mrdu1_ mvdecode mvencode mvreg mvreg_estat n|0 nbreg nbreg_al nbreg_lf nbreg_p nbreg_sw nestreg net newey newey_7 newey_p news nl nl_7 nl_9 nl_9_p nl_p nl_p_7 nlcom nlcom_p nlexp2 nlexp2_7 nlexp2a nlexp2a_7 nlexp3 nlexp3_7 nlgom3 nlgom3_7 nlgom4 nlgom4_7 nlinit nllog3 nllog3_7 nllog4 nllog4_7 nlog_rd nlogit nlogit_p nlogitgen nlogittree nlpred no nobreak noi nois noisi noisil noisily note notes notes_dlg nptrend numlabel numlist odbc old_ver olo olog ologi ologi_sw ologit ologit_p ologitp on one onew onewa oneway op_colnm op_comp op_diff op_inv op_str opr opro oprob oprob_sw oprobi oprobi_p oprobit oprobitp opts_exclusive order orthog orthpoly ou out outf outfi outfil outfile outs outsh outshe outshee outsheet ovtest pac pac_7 palette parse parse_dissim pause pca pca_8 pca_display pca_estat pca_p pca_rotate pcamat pchart pchart_7 pchi pchi_7 pcorr pctile pentium pergram pergram_7 permute permute_8 personal peto_st pkcollapse pkcross pkequiv pkexamine pkexamine_7 pkshape pksumm pksumm_7 pl plo plot plugin pnorm pnorm_7 poisgof poiss_lf poiss_sw poisso_p poisson poisson_estat post postclose postfile postutil pperron pr prais prais_e prais_e2 prais_p predict predictnl preserve print pro prob probi probit probit_estat probit_p proc_time procoverlay procrustes procrustes_estat procrustes_p profiler prog progr progra program prop proportion prtest prtesti pwcorr pwd q\\s qby qbys qchi qchi_7 qladder qladder_7 qnorm qnorm_7 qqplot qqplot_7 qreg qreg_c qreg_p qreg_sw qu quadchk quantile quantile_7 que quer query range ranksum ratio rchart rchart_7 rcof recast reclink recode reg reg3 reg3_p regdw regr regre regre_p2 regres regres_p regress regress_estat regriv_p remap ren rena renam rename renpfix repeat replace report reshape restore ret retu retur return rm rmdir robvar roccomp roccomp_7 roccomp_8 rocf_lf rocfit rocfit_8 rocgold rocplot rocplot_7 roctab roctab_7 rolling rologit rologit_p rot rota rotat rotate rotatemat rreg rreg_p ru run runtest rvfplot rvfplot_7 rvpplot rvpplot_7 sa safesum sample sampsi sav save savedresults saveold sc sca scal scala scalar scatter scm_mine sco scob_lf scob_p scobi_sw scobit scor score scoreplot scoreplot_help scree screeplot screeplot_help sdtest sdtesti se search separate seperate serrbar serrbar_7 serset set set_defaults sfrancia sh she shel shell shewhart shewhart_7 signestimationsample signrank signtest simul simul_7 simulate simulate_8 sktest sleep slogit slogit_d2 slogit_p smooth snapspan so sor sort spearman spikeplot spikeplot_7 spikeplt spline_x split sqreg sqreg_p sret sretu sretur sreturn ssc st st_ct st_hc st_hcd st_hcd_sh st_is st_issys st_note st_promo st_set st_show st_smpl st_subid stack statsby statsby_8 stbase stci stci_7 stcox stcox_estat stcox_fr stcox_fr_ll stcox_p stcox_sw stcoxkm stcoxkm_7 stcstat stcurv stcurve stcurve_7 stdes stem stepwise stereg stfill stgen stir stjoin stmc stmh stphplot stphplot_7 stphtest stphtest_7 stptime strate strate_7 streg streg_sw streset sts sts_7 stset stsplit stsum sttocc sttoct stvary stweib su suest suest_8 sum summ summa summar summari summariz summarize sunflower sureg survcurv survsum svar svar_p svmat svy svy_disp svy_dreg svy_est svy_est_7 svy_estat svy_get svy_gnbreg_p svy_head svy_header svy_heckman_p svy_heckprob_p svy_intreg_p svy_ivreg_p svy_logistic_p svy_logit_p svy_mlogit_p svy_nbreg_p svy_ologit_p svy_oprobit_p svy_poisson_p svy_probit_p svy_regress_p svy_sub svy_sub_7 svy_x svy_x_7 svy_x_p svydes svydes_8 svygen svygnbreg svyheckman svyheckprob svyintreg svyintreg_7 svyintrg svyivreg svylc svylog_p svylogit svymarkout svymarkout_8 svymean svymlog svymlogit svynbreg svyolog svyologit svyoprob svyoprobit svyopts svypois svypois_7 svypoisson svyprobit svyprobt svyprop svyprop_7 svyratio svyreg svyreg_p svyregress svyset svyset_7 svyset_8 svytab svytab_7 svytest svytotal sw sw_8 swcnreg swcox swereg swilk swlogis swlogit swologit swoprbt swpois swprobit swqreg swtobit swweib symmetry symmi symplot symplot_7 syntax sysdescribe sysdir sysuse szroeter ta tab tab1 tab2 tab_or tabd tabdi tabdis tabdisp tabi table tabodds tabodds_7 tabstat tabu tabul tabula tabulat tabulate te tempfile tempname tempvar tes test testnl testparm teststd tetrachoric time_it timer tis tob tobi tobit tobit_p tobit_sw token tokeni tokeniz tokenize tostring total translate translator transmap treat_ll treatr_p treatreg trim trnb_cons trnb_mean trpoiss_d2 trunc_ll truncr_p truncreg tsappend tset tsfill tsline tsline_ex tsreport tsrevar tsrline tsset tssmooth tsunab ttest ttesti tut_chk tut_wait tutorial tw tware_st two twoway twoway__fpfit_serset twoway__function_gen twoway__histogram_gen twoway__ipoint_serset twoway__ipoints_serset twoway__kdensity_gen twoway__lfit_serset twoway__normgen_gen twoway__pci_serset twoway__qfit_serset twoway__scatteri_serset twoway__sunflower_gen twoway_ksm_serset ty typ type typeof u|0 unab unabbrev unabcmd update us use uselabel var var_mkcompanion var_p varbasic varfcast vargranger varirf varirf_add varirf_cgraph varirf_create varirf_ctable varirf_describe varirf_dir varirf_drop varirf_erase varirf_graph varirf_ograph varirf_rename varirf_set varirf_table varlist varlmar varnorm varsoc varstable varstable_w varstable_w2 varwle vce vec vec_fevd vec_mkphi vec_p vec_p_w vecirf_create veclmar veclmar_w vecnorm vecnorm_w vecrank vecstable verinst vers versi versio version view viewsource vif vwls wdatetof webdescribe webseek webuse weib1_lf weib2_lf weib_lf weib_lf0 weibhet_glf weibhet_glf_sh weibhet_glfa weibhet_glfa_sh weibhet_gp weibhet_ilf weibhet_ilf_sh weibhet_ilfa weibhet_ilfa_sh weibhet_ip weibu_sw weibul_p weibull weibull_c weibull_s weibullhet wh whelp whi which whil while wilc_st wilcoxon win wind windo window winexec wntestb wntestb_7 wntestq xchart xchart_7 xcorr xcorr_7 xi xi_6 xmlsav xmlsave xmluse xpose xsh xshe xshel xshell xt_iis xt_tis xtab_p xtabond xtbin_p xtclog xtcloglog xtcloglog_8 xtcloglog_d2 xtcloglog_pa_p xtcloglog_re_p xtcnt_p xtcorr xtdata xtdes xtfront_p xtfrontier xtgee xtgee_elink xtgee_estat xtgee_makeivar xtgee_p xtgee_plink xtgls xtgls_p xthaus xthausman xtht_p xthtaylor xtile xtint_p xtintreg xtintreg_8 xtintreg_d2 xtintreg_p xtivp_1 xtivp_2 xtivreg xtline xtline_ex xtlogit xtlogit_8 xtlogit_d2 xtlogit_fe_p xtlogit_pa_p xtlogit_re_p xtmixed xtmixed_estat xtmixed_p xtnb_fe xtnb_lf xtnbreg xtnbreg_pa_p xtnbreg_refe_p xtpcse xtpcse_p xtpois xtpoisson xtpoisson_d2 xtpoisson_pa_p xtpoisson_refe_p xtpred xtprobit xtprobit_8 xtprobit_d2 xtprobit_re_p xtps_fe xtps_lf xtps_ren xtps_ren_8 xtrar_p xtrc xtrc_p xtrchh xtrefe_p xtreg xtreg_be xtreg_fe xtreg_ml xtreg_pa_p xtreg_re xtregar xtrere_p xtset xtsf_ll xtsf_llti xtsum xttab xttest0 xttobit xttobit_8 xttobit_p xttrans yx yxview__barlike_draw yxview_area_draw yxview_bar_draw yxview_dot_draw yxview_dropline_draw yxview_function_draw yxview_iarrow_draw yxview_ilabels_draw yxview_normal_draw yxview_pcarrow_draw yxview_pcbarrow_draw yxview_pccapsym_draw yxview_pcscatter_draw yxview_pcspike_draw yxview_rarea_draw yxview_rbar_draw yxview_rbarm_draw yxview_rcap_draw yxview_rcapsym_draw yxview_rconnected_draw yxview_rline_draw yxview_rscatter_draw yxview_rspike_draw yxview_spike_draw yxview_sunflower_draw zap_s zinb zinb_llf zinb_plf zip zip_llf zip_p zip_plf zt_ct_5 zt_hc_5 zt_hcd_5 zt_is_5 zt_iss_5 zt_sho_5 zt_smp_5 ztbase_5 ztcox_5 ztdes_5 ztereg_5 ztfill_5 ztgen_5 ztir_5 ztjoin_5 ztnb ztnb_p ztp ztp_p zts_5 ztset_5 ztspli_5 ztsum_5 zttoct_5 ztvary_5 ztweib_5",
            contains: [{
                className: "symbol",
                begin: /`[a-zA-Z0-9_]+'/
            }, {
                className: "variable",
                begin: /\$\{?[a-zA-Z0-9_]+\}?/
            }, {
                className: "string",
                variants: [{
                    begin: '`"[^\r\n]*?"\''
                }, {
                    begin: '"[^\r\n"]*"'
                }]
            }, {
                className: "built_in",
                variants: [{
                    begin: "\\b(abs|acos|asin|atan|atan2|atanh|ceil|cloglog|comb|cos|digamma|exp|floor|invcloglog|invlogit|ln|lnfact|lnfactorial|lngamma|log|log10|max|min|mod|reldif|round|sign|sin|sqrt|sum|tan|tanh|trigamma|trunc|betaden|Binomial|binorm|binormal|chi2|chi2tail|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|F|Fden|Ftail|gammaden|gammap|ibeta|invbinomial|invchi2|invchi2tail|invF|invFtail|invgammap|invibeta|invnchi2|invnFtail|invnibeta|invnorm|invnormal|invttail|nbetaden|nchi2|nFden|nFtail|nibeta|norm|normal|normalden|normd|npnchi2|tden|ttail|uniform|abbrev|char|index|indexnot|length|lower|ltrim|match|plural|proper|real|regexm|regexr|regexs|reverse|rtrim|string|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrtrim|strtrim|strupper|subinstr|subinword|substr|trim|upper|word|wordcount|_caller|autocode|byteorder|chop|clip|cond|e|epsdouble|epsfloat|group|inlist|inrange|irecode|matrix|maxbyte|maxdouble|maxfloat|maxint|maxlong|mi|minbyte|mindouble|minfloat|minint|minlong|missing|r|recode|replay|return|s|scalar|d|date|day|dow|doy|halfyear|mdy|month|quarter|week|year|d|daily|dofd|dofh|dofm|dofq|dofw|dofy|h|halfyearly|hofd|m|mofd|monthly|q|qofd|quarterly|tin|twithin|w|weekly|wofd|y|yearly|yh|ym|yofd|yq|yw|cholesky|colnumb|colsof|corr|det|diag|diag0cnt|el|get|hadamard|I|inv|invsym|issym|issymmetric|J|matmissing|matuniform|mreldif|nullmat|rownumb|rowsof|sweep|syminv|trace|vec|vecdiag)(?=\\(|$)"
                }]
            }, e.COMMENT("^[ \t]*\\*.*$", !1), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["p21", "step", "stp"],
            case_insensitive: !0,
            lexemes: "[A-Z_][A-Z0-9_.]*",
            keywords: {
                keyword: "HEADER ENDSEC DATA"
            },
            contains: [{
                className: "meta",
                begin: "ISO-10303-21;",
                relevance: 10
            }, {
                className: "meta",
                begin: "END-ISO-10303-21;",
                relevance: 10
            }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.COMMENT("/\\*\\*!", "\\*/"), e.C_NUMBER_MODE, e.inherit(e.APOS_STRING_MODE, {
                illegal: null
            }), e.inherit(e.QUOTE_STRING_MODE, {
                illegal: null
            }), {
                className: "string",
                begin: "'",
                end: "'"
            }, {
                className: "symbol",
                variants: [{
                    begin: "#",
                    end: "\\d+",
                    illegal: "\\W"
                }]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "variable",
            begin: "\\$" + e.IDENT_RE
        }
          , n = {
            className: "number",
            begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"
        }
          , r = ["charset", "css", "debug", "extend", "font-face", "for", "import", "include", "media", "mixin", "page", "warn", "while"]
          , a = ["after", "before", "first-letter", "first-line", "active", "first-child", "focus", "hover", "lang", "link", "visited"]
          , i = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"]
          , s = "[\\.\\s\\n\\[\\:,]"
          , o = ["align-content", "align-items", "align-self", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "auto", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "clip-path", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-variant-ligatures", "font-weight", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inherit", "initial", "justify-content", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "max-height", "max-width", "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index"];
        return {
            aliases: ["styl"],
            case_insensitive: !1,
            keywords: "if else for in",
            illegal: "(" + ["\\?", "(\\bReturn\\b)", "(\\bEnd\\b)", "(\\bend\\b)", "(\\bdef\\b)", ";", "#\\s", "\\*\\s", "===\\s", "\\|", "%"].join("|") + ")",
            contains: [e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, n, {
                begin: "\\.[a-zA-Z][a-zA-Z0-9_-]*" + s,
                returnBegin: !0,
                contains: [{
                    className: "selector-class",
                    begin: "\\.[a-zA-Z][a-zA-Z0-9_-]*"
                }]
            }, {
                begin: "\\#[a-zA-Z][a-zA-Z0-9_-]*" + s,
                returnBegin: !0,
                contains: [{
                    className: "selector-id",
                    begin: "\\#[a-zA-Z][a-zA-Z0-9_-]*"
                }]
            }, {
                begin: "\\b(" + i.join("|") + ")" + s,
                returnBegin: !0,
                contains: [{
                    className: "selector-tag",
                    begin: "\\b[a-zA-Z][a-zA-Z0-9_-]*"
                }]
            }, {
                begin: "&?:?:\\b(" + a.join("|") + ")" + s
            }, {
                begin: "@(" + r.join("|") + ")\\b"
            }, t, e.CSS_NUMBER_MODE, e.NUMBER_MODE, {
                className: "function",
                begin: "^[a-zA-Z][a-zA-Z0-9_-]*\\(.*\\)",
                illegal: "[\\n]",
                returnBegin: !0,
                contains: [{
                    className: "title",
                    begin: "\\b[a-zA-Z][a-zA-Z0-9_-]*"
                }, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    contains: [n, t, e.APOS_STRING_MODE, e.CSS_NUMBER_MODE, e.NUMBER_MODE, e.QUOTE_STRING_MODE]
                }]
            }, {
                className: "attribute",
                begin: "\\b(" + o.reverse().join("|") + ")\\b",
                starts: {
                    end: /;|$/,
                    contains: [n, t, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.CSS_NUMBER_MODE, e.NUMBER_MODE, e.C_BLOCK_COMMENT_MODE],
                    illegal: /\./,
                    relevance: 0
                }
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            case_insensitive: !0,
            contains: [{
                className: "string",
                begin: "\\[\n(multipart)?",
                end: "\\]\n"
            }, {
                className: "string",
                begin: "\\d{4}-\\d{2}-\\d{2}(\\s+)\\d{2}:\\d{2}:\\d{2}.\\d+Z"
            }, {
                className: "string",
                begin: "(\\+|-)\\d+"
            }, {
                className: "keyword",
                relevance: 10,
                variants: [{
                    begin: "^(test|testing|success|successful|failure|error|skip|xfail|uxsuccess)(:?)\\s+(test)?"
                }, {
                    begin: "^progress(:?)(\\s+)?(pop|push)?"
                }, {
                    begin: "^tags:"
                }, {
                    begin: "^time:"
                }]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            keyword: "__COLUMN__ __FILE__ __FUNCTION__ __LINE__ as as! as? associativity break case catch class continue convenience default defer deinit didSet do dynamic dynamicType else enum extension fallthrough false fileprivate final for func get guard if import in indirect infix init inout internal is lazy left let mutating nil none nonmutating open operator optional override postfix precedence prefix private protocol Protocol public repeat required rethrows return right self Self set static struct subscript super switch throw throws true try try! try? Type typealias unowned var weak where while willSet",
            literal: "true false nil",
            built_in: "abs advance alignof alignofValue anyGenerator assert assertionFailure bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal fatalError filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare map max maxElement min minElement numericCast overlaps partition posix precondition preconditionFailure print println quickSort readLine reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith stride strideof strideofValue swap toString transcode underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers withUnsafePointer withUnsafePointers withVaList zip"
        }
          , n = {
            className: "type",
            begin: "\\b[A-Z][\\wÀ-ʸ']*",
            relevance: 0
        }
          , r = e.COMMENT("/\\*", "\\*/", {
            contains: ["self"]
        })
          , a = {
            className: "subst",
            begin: /\\\(/,
            end: "\\)",
            keywords: t,
            contains: []
        }
          , i = {
            className: "number",
            begin: "\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",
            relevance: 0
        }
          , s = e.inherit(e.QUOTE_STRING_MODE, {
            contains: [a, e.BACKSLASH_ESCAPE]
        });
        return a.contains = [i],
        {
            keywords: t,
            contains: [s, e.C_LINE_COMMENT_MODE, r, n, i, {
                className: "function",
                beginKeywords: "func",
                end: "{",
                excludeEnd: !0,
                contains: [e.inherit(e.TITLE_MODE, {
                    begin: /[A-Za-z$_][0-9A-Za-z$_]*/
                }), {
                    begin: /</,
                    end: />/
                }, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    endsParent: !0,
                    keywords: t,
                    contains: ["self", i, s, e.C_BLOCK_COMMENT_MODE, {
                        begin: ":"
                    }],
                    illegal: /["']/
                }],
                illegal: /\[|%/
            }, {
                className: "class",
                beginKeywords: "struct protocol class extension enum",
                keywords: t,
                end: "\\{",
                excludeEnd: !0,
                contains: [e.inherit(e.TITLE_MODE, {
                    begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
                })]
            }, {
                className: "meta",
                begin: "(@warn_unused_result|@exported|@lazy|@noescape|@NSCopying|@NSManaged|@objc|@convention|@required|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix|@autoclosure|@testable|@available|@nonobjc|@NSApplicationMain|@UIApplicationMain)"
            }, {
                beginKeywords: "import",
                end: /$/,
                contains: [e.C_LINE_COMMENT_MODE, r]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            contains: [{
                className: "comment",
                begin: /\$noop\(/,
                end: /\)/,
                contains: [{
                    begin: /\(/,
                    end: /\)/,
                    contains: ["self", {
                        begin: /\\./
                    }]
                }],
                relevance: 10
            }, {
                className: "keyword",
                begin: /\$(?!noop)[a-zA-Z][_a-zA-Z0-9]*/,
                end: /\(/,
                excludeEnd: !0
            }, {
                className: "variable",
                begin: /%[_a-zA-Z0-9:]*/,
                end: "%"
            }, {
                className: "symbol",
                begin: /\\./
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            case_insensitive: !0,
            contains: [e.HASH_COMMENT_MODE, {
                className: "meta",
                variants: [{
                    begin: "^TAP version (\\d+)$"
                }, {
                    begin: "^1\\.\\.(\\d+)$"
                }]
            }, {
                begin: "(s+)?---$",
                end: "\\.\\.\\.$",
                subLanguage: "yaml",
                relevance: 0
            }, {
                className: "number",
                begin: " (\\d+) "
            }, {
                className: "symbol",
                variants: [{
                    begin: "^ok"
                }, {
                    begin: "^not ok"
                }]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["tk"],
            keywords: "after append apply array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd chan clock close concat continue dde dict encoding eof error eval exec exit expr fblocked fconfigure fcopy file fileevent filename flush for foreach format gets glob global history http if incr info interp join lappend|10 lassign|10 lindex|10 linsert|10 list llength|10 load lrange|10 lrepeat|10 lreplace|10 lreverse|10 lsearch|10 lset|10 lsort|10 mathfunc mathop memory msgcat namespace open package parray pid pkg::create pkg_mkIndex platform platform::shell proc puts pwd read refchan regexp registry regsub|10 rename return safe scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_startOfPreviousWord tcl_wordBreakAfter tcl_wordBreakBefore tcltest tclvars tell time tm trace unknown unload unset update uplevel upvar variable vwait while",
            contains: [e.COMMENT(";[ \\t]*#", "$"), e.COMMENT("^[ \\t]*#", "$"), {
                beginKeywords: "proc",
                end: "[\\{]",
                excludeEnd: !0,
                contains: [{
                    className: "title",
                    begin: "[ \\t\\n\\r]+(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*",
                    end: "[ \\t\\n\\r]",
                    endsWithParent: !0,
                    excludeEnd: !0
                }]
            }, {
                excludeEnd: !0,
                variants: [{
                    begin: "\\$(\\{)?(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*\\(([a-zA-Z0-9_])*\\)",
                    end: "[^a-zA-Z0-9_\\}\\$]"
                }, {
                    begin: "\\$(\\{)?(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*",
                    end: "(\\))?[^a-zA-Z0-9_\\}\\$]"
                }]
            }, {
                className: "string",
                contains: [e.BACKSLASH_ESCAPE],
                variants: [e.inherit(e.APOS_STRING_MODE, {
                    illegal: null
                }), e.inherit(e.QUOTE_STRING_MODE, {
                    illegal: null
                })]
            }, {
                className: "number",
                variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "tag",
            begin: /\\/,
            relevance: 0,
            contains: [{
                className: "name",
                variants: [{
                    begin: /[a-zA-Zа-яА-я]+[*]?/
                }, {
                    begin: /[^a-zA-Zа-яА-я0-9]/
                }],
                starts: {
                    endsWithParent: !0,
                    relevance: 0,
                    contains: [{
                        className: "string",
                        variants: [{
                            begin: /\[/,
                            end: /\]/
                        }, {
                            begin: /\{/,
                            end: /\}/
                        }]
                    }, {
                        begin: /\s*=\s*/,
                        endsWithParent: !0,
                        relevance: 0,
                        contains: [{
                            className: "number",
                            begin: /-?\d*\.?\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?/
                        }]
                    }]
                }
            }]
        };
        return {
            contains: [t, {
                className: "formula",
                contains: [t],
                relevance: 0,
                variants: [{
                    begin: /\$\$/,
                    end: /\$\$/
                }, {
                    begin: /\$/,
                    end: /\$/
                }]
            }, e.COMMENT("%", "$", {
                relevance: 0
            })]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            keywords: {
                keyword: "namespace const typedef struct enum service exception void oneway set list map required optional",
                built_in: "bool byte i16 i32 i64 double string binary",
                literal: "true false"
            },
            contains: [e.QUOTE_STRING_MODE, e.NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                className: "class",
                beginKeywords: "struct enum service exception",
                end: /\{/,
                illegal: /\n/,
                contains: [e.inherit(e.TITLE_MODE, {
                    starts: {
                        endsWithParent: !0,
                        excludeEnd: !0
                    }
                })]
            }, {
                begin: "\\b(set|list|map)\\s*<",
                end: ">",
                keywords: "bool byte i16 i32 i64 double string binary",
                contains: ["self"]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "number",
            begin: "[1-9][0-9]*",
            relevance: 0
        }
          , n = {
            className: "symbol",
            begin: ":[^\\]]+"
        };
        return {
            keywords: {
                keyword: "ABORT ACC ADJUST AND AP_LD BREAK CALL CNT COL CONDITION CONFIG DA DB DIV DETECT ELSE END ENDFOR ERR_NUM ERROR_PROG FINE FOR GP GUARD INC IF JMP LINEAR_MAX_SPEED LOCK MOD MONITOR OFFSET Offset OR OVERRIDE PAUSE PREG PTH RT_LD RUN SELECT SKIP Skip TA TB TO TOOL_OFFSET Tool_Offset UF UT UFRAME_NUM UTOOL_NUM UNLOCK WAIT X Y Z W P R STRLEN SUBSTR FINDSTR VOFFSET PROG ATTR MN POS",
                literal: "ON OFF max_speed LPOS JPOS ENABLE DISABLE START STOP RESET"
            },
            contains: [{
                className: "built_in",
                begin: "(AR|P|PAYLOAD|PR|R|SR|RSR|LBL|VR|UALM|MESSAGE|UTOOL|UFRAME|TIMER|    TIMER_OVERFLOW|JOINT_MAX_SPEED|RESUME_PROG|DIAG_REC)\\[",
                end: "\\]",
                contains: ["self", t, n]
            }, {
                className: "built_in",
                begin: "(AI|AO|DI|DO|F|RI|RO|UI|UO|GI|GO|SI|SO)\\[",
                end: "\\]",
                contains: ["self", t, e.QUOTE_STRING_MODE, n]
            }, {
                className: "keyword",
                begin: "/(PROG|ATTR|MN|POS|END)\\b"
            }, {
                className: "keyword",
                begin: "(CALL|RUN|POINT_LOGIC|LBL)\\b"
            }, {
                className: "keyword",
                begin: "\\b(ACC|CNT|Skip|Offset|PSPD|RT_LD|AP_LD|Tool_Offset)"
            }, {
                className: "number",
                begin: "\\d+(sec|msec|mm/sec|cm/min|inch/min|deg/sec|mm|in|cm)?\\b",
                relevance: 0
            }, e.COMMENT("//", "[;$]"), e.COMMENT("!", "[;$]"), e.COMMENT("--eg:", "$"), e.QUOTE_STRING_MODE, {
                className: "string",
                begin: "'",
                end: "'"
            }, e.C_NUMBER_MODE, {
                className: "variable",
                begin: "\\$[A-Za-z0-9_]+"
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "params",
            begin: "\\(",
            end: "\\)"
        }
          , n = "attribute block constant cycle date dump include max min parent random range source template_from_string"
          , r = {
            beginKeywords: n,
            keywords: {
                name: n
            },
            relevance: 0,
            contains: [t]
        }
          , a = {
            begin: /\|[A-Za-z_]+:?/,
            keywords: "abs batch capitalize convert_encoding date date_modify default escape first format join json_encode keys last length lower merge nl2br number_format raw replace reverse round slice sort split striptags title trim upper url_encode",
            contains: [r]
        }
          , i = "autoescape block do embed extends filter flush for if import include macro sandbox set spaceless use verbatim";
        return i = i + " " + i.split(" ").map(function(e) {
            return "end" + e
        }).join(" "),
        {
            aliases: ["craftcms"],
            case_insensitive: !0,
            subLanguage: "xml",
            contains: [e.COMMENT(/\{#/, /#}/), {
                className: "template-tag",
                begin: /\{%/,
                end: /%}/,
                contains: [{
                    className: "name",
                    begin: /\w+/,
                    keywords: i,
                    starts: {
                        endsWithParent: !0,
                        contains: [a, r],
                        relevance: 0
                    }
                }]
            }, {
                className: "template-variable",
                begin: /\{\{/,
                end: /}}/,
                contains: ["self", a, r]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise"
        };
        return {
            aliases: ["ts"],
            keywords: t,
            contains: [{
                className: "meta",
                begin: /^\s*['"]use strict['"]/
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                className: "string",
                begin: "`",
                end: "`",
                contains: [e.BACKSLASH_ESCAPE, {
                    className: "subst",
                    begin: "\\$\\{",
                    end: "\\}"
                }]
            }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                className: "number",
                variants: [{
                    begin: "\\b(0[bB][01]+)"
                }, {
                    begin: "\\b(0[oO][0-7]+)"
                }, {
                    begin: e.C_NUMBER_RE
                }],
                relevance: 0
            }, {
                begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                keywords: "return throw case",
                contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.REGEXP_MODE, {
                    className: "function",
                    begin: "(\\(.*?\\)|" + e.IDENT_RE + ")\\s*=>",
                    returnBegin: !0,
                    end: "\\s*=>",
                    contains: [{
                        className: "params",
                        variants: [{
                            begin: e.IDENT_RE
                        }, {
                            begin: /\(\s*\)/
                        }, {
                            begin: /\(/,
                            end: /\)/,
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: t,
                            contains: ["self", e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                        }]
                    }]
                }],
                relevance: 0
            }, {
                className: "function",
                begin: "function",
                end: /[\{;]/,
                excludeEnd: !0,
                keywords: t,
                contains: ["self", e.inherit(e.TITLE_MODE, {
                    begin: /[A-Za-z$_][0-9A-Za-z$_]*/
                }), {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: t,
                    contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
                    illegal: /["'\(]/
                }],
                illegal: /%/,
                relevance: 0
            }, {
                beginKeywords: "constructor",
                end: /\{/,
                excludeEnd: !0,
                contains: ["self", {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: t,
                    contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
                    illegal: /["'\(]/
                }]
            }, {
                begin: /module\./,
                keywords: {
                    built_in: "module"
                },
                relevance: 0
            }, {
                beginKeywords: "module",
                end: /\{/,
                excludeEnd: !0
            }, {
                beginKeywords: "interface",
                end: /\{/,
                excludeEnd: !0,
                keywords: "interface extends"
            }, {
                begin: /\$[(.]/
            }, {
                begin: "\\." + e.IDENT_RE,
                relevance: 0
            }, {
                className: "meta",
                begin: "@[A-Za-z]+"
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            keywords: {
                keyword: "char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 uint16 uint32 uint64 float double bool struct enum string void weak unowned owned async signal static abstract interface override virtual delegate if while do for foreach else switch case break default return try catch public private protected internal using new this get set const stdout stdin stderr var",
                built_in: "DBus GLib CCode Gee Object Gtk Posix",
                literal: "false true null"
            },
            contains: [{
                className: "class",
                beginKeywords: "class interface namespace",
                end: "{",
                excludeEnd: !0,
                illegal: "[^,:\\n\\s\\.]",
                contains: [e.UNDERSCORE_TITLE_MODE]
            }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                className: "string",
                begin: '"""',
                end: '"""',
                relevance: 5
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, {
                className: "meta",
                begin: "^#",
                end: "$",
                relevance: 2
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["vb"],
            case_insensitive: !0,
            keywords: {
                keyword: "addhandler addressof alias and andalso aggregate ansi as assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into is isfalse isnot istrue join key let lib like loop me mid mod module mustinherit mustoverride mybase myclass namespace narrowing new next not notinheritable notoverridable of off on operator option optional or order orelse overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim rem removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly xor",
                built_in: "boolean byte cbool cbyte cchar cdate cdec cdbl char cint clng cobj csbyte cshort csng cstr ctype date decimal directcast double gettype getxmlnamespace iif integer long object sbyte short single string trycast typeof uinteger ulong ushort",
                literal: "true false nothing"
            },
            illegal: "//|{|}|endif|gosub|variant|wend",
            contains: [e.inherit(e.QUOTE_STRING_MODE, {
                contains: [{
                    begin: '""'
                }]
            }), e.COMMENT("'", "$", {
                returnBegin: !0,
                contains: [{
                    className: "doctag",
                    begin: "'''|\x3c!--|--\x3e",
                    contains: [e.PHRASAL_WORDS_MODE]
                }, {
                    className: "doctag",
                    begin: "</?",
                    end: ">",
                    contains: [e.PHRASAL_WORDS_MODE]
                }]
            }), e.C_NUMBER_MODE, {
                className: "meta",
                begin: "#",
                end: "$",
                keywords: {
                    "meta-keyword": "if else elseif end region externalsource"
                }
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            subLanguage: "xml",
            contains: [{
                begin: "<%",
                end: "%>",
                subLanguage: "vbscript"
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["vbs"],
            case_insensitive: !0,
            keywords: {
                keyword: "call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto",
                built_in: "lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid scriptenginebuildversion scriptengine split scriptengineminorversion cint sin datepart ltrim sqr scriptenginemajorversion time derived eval date formatpercent exp inputbox left ascw chrw regexp server response request cstr err",
                literal: "true false null nothing empty"
            },
            illegal: "//",
            contains: [e.inherit(e.QUOTE_STRING_MODE, {
                contains: [{
                    begin: '""'
                }]
            }), e.COMMENT(/'/, /$/, {
                relevance: 0
            }), e.C_NUMBER_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            aliases: ["v", "sv", "svh"],
            case_insensitive: !1,
            keywords: {
                keyword: "accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf|0 bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate|5 genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor",
                literal: "null",
                built_in: "$finish $stop $exit $fatal $error $warning $info $realtime $time $printtimescale $bitstoreal $bitstoshortreal $itor $signed $cast $bits $stime $timeformat $realtobits $shortrealtobits $rtoi $unsigned $asserton $assertkill $assertpasson $assertfailon $assertnonvacuouson $assertoff $assertcontrol $assertpassoff $assertfailoff $assertvacuousoff $isunbounded $sampled $fell $changed $past_gclk $fell_gclk $changed_gclk $rising_gclk $steady_gclk $coverage_control $coverage_get $coverage_save $set_coverage_db_name $rose $stable $past $rose_gclk $stable_gclk $future_gclk $falling_gclk $changing_gclk $display $coverage_get_max $coverage_merge $get_coverage $load_coverage_db $typename $unpacked_dimensions $left $low $increment $clog2 $ln $log10 $exp $sqrt $pow $floor $ceil $sin $cos $tan $countbits $onehot $isunknown $fatal $warning $dimensions $right $high $size $asin $acos $atan $atan2 $hypot $sinh $cosh $tanh $asinh $acosh $atanh $countones $onehot0 $error $info $random $dist_chi_square $dist_erlang $dist_exponential $dist_normal $dist_poisson $dist_t $dist_uniform $q_initialize $q_remove $q_exam $async$and$array $async$nand$array $async$or$array $async$nor$array $sync$and$array $sync$nand$array $sync$or$array $sync$nor$array $q_add $q_full $psprintf $async$and$plane $async$nand$plane $async$or$plane $async$nor$plane $sync$and$plane $sync$nand$plane $sync$or$plane $sync$nor$plane $system $display $displayb $displayh $displayo $strobe $strobeb $strobeh $strobeo $write $readmemb $readmemh $writememh $value$plusargs $dumpvars $dumpon $dumplimit $dumpports $dumpportson $dumpportslimit $writeb $writeh $writeo $monitor $monitorb $monitorh $monitoro $writememb $dumpfile $dumpoff $dumpall $dumpflush $dumpportsoff $dumpportsall $dumpportsflush $fclose $fdisplay $fdisplayb $fdisplayh $fdisplayo $fstrobe $fstrobeb $fstrobeh $fstrobeo $swrite $swriteb $swriteh $swriteo $fscanf $fread $fseek $fflush $feof $fopen $fwrite $fwriteb $fwriteh $fwriteo $fmonitor $fmonitorb $fmonitorh $fmonitoro $sformat $sformatf $fgetc $ungetc $fgets $sscanf $rewind $ftell $ferror"
            },
            lexemes: /[\w\$]+/,
            contains: [e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE, e.QUOTE_STRING_MODE, {
                className: "number",
                contains: [e.BACKSLASH_ESCAPE],
                variants: [{
                    begin: "\\b((\\d+'(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)"
                }, {
                    begin: "\\B(('(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)"
                }, {
                    begin: "\\b([0-9_])+",
                    relevance: 0
                }]
            }, {
                className: "variable",
                variants: [{
                    begin: "#\\((?!parameter).+\\)"
                }, {
                    begin: "\\.\\w+",
                    relevance: 0
                }]
            }, {
                className: "meta",
                begin: "`",
                end: "$",
                keywords: {
                    "meta-keyword": "define __FILE__ __LINE__ begin_keywords celldefine default_nettype define else elsif end_keywords endcelldefine endif ifdef ifndef include line nounconnected_drive pragma resetall timescale unconnected_drive undef undefineall"
                },
                relevance: 0
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            case_insensitive: !0,
            keywords: {
                keyword: "abs access after alias all and architecture array assert assume assume_guarantee attribute begin block body buffer bus case component configuration constant context cover disconnect downto default else elsif end entity exit fairness file for force function generate generic group guarded if impure in inertial inout is label library linkage literal loop map mod nand new next nor not null of on open or others out package port postponed procedure process property protected pure range record register reject release rem report restrict restrict_guarantee return rol ror select sequence severity shared signal sla sll sra srl strong subtype then to transport type unaffected units until use variable vmode vprop vunit wait when while with xnor xor",
                built_in: "boolean bit character integer time delay_length natural positive string bit_vector file_open_kind file_open_status std_logic std_logic_vector unsigned signed boolean_vector integer_vector std_ulogic std_ulogic_vector unresolved_unsigned u_unsigned unresolved_signed u_signedreal_vector time_vector",
                literal: "false true note warning error failure line text side width"
            },
            illegal: "{",
            contains: [e.C_BLOCK_COMMENT_MODE, e.COMMENT("--", "$"), e.QUOTE_STRING_MODE, {
                className: "number",
                begin: "\\b(\\d(_|\\d)*#\\w+(\\.\\w+)?#([eE][-+]?\\d(_|\\d)*)?|\\d(_|\\d)*(\\.\\d(_|\\d)*)?([eE][-+]?\\d(_|\\d)*)?)",
                relevance: 0
            }, {
                className: "string",
                begin: "'(U|X|0|1|Z|W|L|H|-)'",
                contains: [e.BACKSLASH_ESCAPE]
            }, {
                className: "symbol",
                begin: "'[A-Za-z](_?[A-Za-z0-9])*",
                contains: [e.BACKSLASH_ESCAPE]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            lexemes: /[!#@\w]+/,
            keywords: {
                keyword: "N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope cp cpf cq cr cs cst cu cuna cunme cw delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu go gr grepa gu gv ha helpf helpg helpt hi hid his ia iabc if ij il im imapc ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf quita qa rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank",
                built_in: "synIDtrans atan2 range matcharg did_filetype asin feedkeys xor argv complete_check add getwinposx getqflist getwinposy screencol clearmatches empty extend getcmdpos mzeval garbagecollect setreg ceil sqrt diff_hlID inputsecret get getfperm getpid filewritable shiftwidth max sinh isdirectory synID system inputrestore winline atan visualmode inputlist tabpagewinnr round getregtype mapcheck hasmapto histdel argidx findfile sha256 exists toupper getcmdline taglist string getmatches bufnr strftime winwidth bufexists strtrans tabpagebuflist setcmdpos remote_read printf setloclist getpos getline bufwinnr float2nr len getcmdtype diff_filler luaeval resolve libcallnr foldclosedend reverse filter has_key bufname str2float strlen setline getcharmod setbufvar index searchpos shellescape undofile foldclosed setqflist buflisted strchars str2nr virtcol floor remove undotree remote_expr winheight gettabwinvar reltime cursor tabpagenr finddir localtime acos getloclist search tanh matchend rename gettabvar strdisplaywidth type abs py3eval setwinvar tolower wildmenumode log10 spellsuggest bufloaded synconcealed nextnonblank server2client complete settabwinvar executable input wincol setmatches getftype hlID inputsave searchpair or screenrow line settabvar histadd deepcopy strpart remote_peek and eval getftime submatch screenchar winsaveview matchadd mkdir screenattr getfontname libcall reltimestr getfsize winnr invert pow getbufline byte2line soundfold repeat fnameescape tagfiles sin strwidth spellbadword trunc maparg log lispindent hostname setpos globpath remote_foreground getchar synIDattr fnamemodify cscope_connection stridx winbufnr indent min complete_add nr2char searchpairpos inputdialog values matchlist items hlexists strridx browsedir expand fmod pathshorten line2byte argc count getwinvar glob foldtextresult getreg foreground cosh matchdelete has char2nr simplify histget searchdecl iconv winrestcmd pumvisible writefile foldlevel haslocaldir keys cos matchstr foldtext histnr tan tempname getcwd byteidx getbufvar islocked escape eventhandler remote_send serverlist winrestview synstack pyeval prevnonblank readfile cindent filereadable changenr exp"
            },
            illegal: /;/,
            contains: [e.NUMBER_MODE, e.APOS_STRING_MODE, {
                className: "string",
                begin: /"(\\"|\n\\|[^"\n])*"/
            }, e.COMMENT('"', "$"), {
                className: "variable",
                begin: /[bwtglsav]:[\w\d_]*/
            }, {
                className: "function",
                beginKeywords: "function function!",
                end: "$",
                relevance: 0,
                contains: [e.TITLE_MODE, {
                    className: "params",
                    begin: "\\(",
                    end: "\\)"
                }]
            }, {
                className: "symbol",
                begin: /<[\w-]+>/
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return {
            case_insensitive: !0,
            lexemes: "[.%]?" + e.IDENT_RE,
            keywords: {
                keyword: "lock rep repe repz repne repnz xaquire xrelease bnd nobnd aaa aad aam aas adc add and arpl bb0_reset bb1_reset bound bsf bsr bswap bt btc btr bts call cbw cdq cdqe clc cld cli clts cmc cmp cmpsb cmpsd cmpsq cmpsw cmpxchg cmpxchg486 cmpxchg8b cmpxchg16b cpuid cpu_read cpu_write cqo cwd cwde daa das dec div dmint emms enter equ f2xm1 fabs fadd faddp fbld fbstp fchs fclex fcmovb fcmovbe fcmove fcmovnb fcmovnbe fcmovne fcmovnu fcmovu fcom fcomi fcomip fcomp fcompp fcos fdecstp fdisi fdiv fdivp fdivr fdivrp femms feni ffree ffreep fiadd ficom ficomp fidiv fidivr fild fimul fincstp finit fist fistp fisttp fisub fisubr fld fld1 fldcw fldenv fldl2e fldl2t fldlg2 fldln2 fldpi fldz fmul fmulp fnclex fndisi fneni fninit fnop fnsave fnstcw fnstenv fnstsw fpatan fprem fprem1 fptan frndint frstor fsave fscale fsetpm fsin fsincos fsqrt fst fstcw fstenv fstp fstsw fsub fsubp fsubr fsubrp ftst fucom fucomi fucomip fucomp fucompp fxam fxch fxtract fyl2x fyl2xp1 hlt ibts icebp idiv imul in inc incbin insb insd insw int int01 int1 int03 int3 into invd invpcid invlpg invlpga iret iretd iretq iretw jcxz jecxz jrcxz jmp jmpe lahf lar lds lea leave les lfence lfs lgdt lgs lidt lldt lmsw loadall loadall286 lodsb lodsd lodsq lodsw loop loope loopne loopnz loopz lsl lss ltr mfence monitor mov movd movq movsb movsd movsq movsw movsx movsxd movzx mul mwait neg nop not or out outsb outsd outsw packssdw packsswb packuswb paddb paddd paddsb paddsiw paddsw paddusb paddusw paddw pand pandn pause paveb pavgusb pcmpeqb pcmpeqd pcmpeqw pcmpgtb pcmpgtd pcmpgtw pdistib pf2id pfacc pfadd pfcmpeq pfcmpge pfcmpgt pfmax pfmin pfmul pfrcp pfrcpit1 pfrcpit2 pfrsqit1 pfrsqrt pfsub pfsubr pi2fd pmachriw pmaddwd pmagw pmulhriw pmulhrwa pmulhrwc pmulhw pmullw pmvgezb pmvlzb pmvnzb pmvzb pop popa popad popaw popf popfd popfq popfw por prefetch prefetchw pslld psllq psllw psrad psraw psrld psrlq psrlw psubb psubd psubsb psubsiw psubsw psubusb psubusw psubw punpckhbw punpckhdq punpckhwd punpcklbw punpckldq punpcklwd push pusha pushad pushaw pushf pushfd pushfq pushfw pxor rcl rcr rdshr rdmsr rdpmc rdtsc rdtscp ret retf retn rol ror rdm rsdc rsldt rsm rsts sahf sal salc sar sbb scasb scasd scasq scasw sfence sgdt shl shld shr shrd sidt sldt skinit smi smint smintold smsw stc std sti stosb stosd stosq stosw str sub svdc svldt svts swapgs syscall sysenter sysexit sysret test ud0 ud1 ud2b ud2 ud2a umov verr verw fwait wbinvd wrshr wrmsr xadd xbts xchg xlatb xlat xor cmove cmovz cmovne cmovnz cmova cmovnbe cmovae cmovnb cmovb cmovnae cmovbe cmovna cmovg cmovnle cmovge cmovnl cmovl cmovnge cmovle cmovng cmovc cmovnc cmovo cmovno cmovs cmovns cmovp cmovpe cmovnp cmovpo je jz jne jnz ja jnbe jae jnb jb jnae jbe jna jg jnle jge jnl jl jnge jle jng jc jnc jo jno js jns jpo jnp jpe jp sete setz setne setnz seta setnbe setae setnb setnc setb setnae setcset setbe setna setg setnle setge setnl setl setnge setle setng sets setns seto setno setpe setp setpo setnp addps addss andnps andps cmpeqps cmpeqss cmpleps cmpless cmpltps cmpltss cmpneqps cmpneqss cmpnleps cmpnless cmpnltps cmpnltss cmpordps cmpordss cmpunordps cmpunordss cmpps cmpss comiss cvtpi2ps cvtps2pi cvtsi2ss cvtss2si cvttps2pi cvttss2si divps divss ldmxcsr maxps maxss minps minss movaps movhps movlhps movlps movhlps movmskps movntps movss movups mulps mulss orps rcpps rcpss rsqrtps rsqrtss shufps sqrtps sqrtss stmxcsr subps subss ucomiss unpckhps unpcklps xorps fxrstor fxrstor64 fxsave fxsave64 xgetbv xsetbv xsave xsave64 xsaveopt xsaveopt64 xrstor xrstor64 prefetchnta prefetcht0 prefetcht1 prefetcht2 maskmovq movntq pavgb pavgw pextrw pinsrw pmaxsw pmaxub pminsw pminub pmovmskb pmulhuw psadbw pshufw pf2iw pfnacc pfpnacc pi2fw pswapd maskmovdqu clflush movntdq movnti movntpd movdqa movdqu movdq2q movq2dq paddq pmuludq pshufd pshufhw pshuflw pslldq psrldq psubq punpckhqdq punpcklqdq addpd addsd andnpd andpd cmpeqpd cmpeqsd cmplepd cmplesd cmpltpd cmpltsd cmpneqpd cmpneqsd cmpnlepd cmpnlesd cmpnltpd cmpnltsd cmpordpd cmpordsd cmpunordpd cmpunordsd cmppd comisd cvtdq2pd cvtdq2ps cvtpd2dq cvtpd2pi cvtpd2ps cvtpi2pd cvtps2dq cvtps2pd cvtsd2si cvtsd2ss cvtsi2sd cvtss2sd cvttpd2pi cvttpd2dq cvttps2dq cvttsd2si divpd divsd maxpd maxsd minpd minsd movapd movhpd movlpd movmskpd movupd mulpd mulsd orpd shufpd sqrtpd sqrtsd subpd subsd ucomisd unpckhpd unpcklpd xorpd addsubpd addsubps haddpd haddps hsubpd hsubps lddqu movddup movshdup movsldup clgi stgi vmcall vmclear vmfunc vmlaunch vmload vmmcall vmptrld vmptrst vmread vmresume vmrun vmsave vmwrite vmxoff vmxon invept invvpid pabsb pabsw pabsd palignr phaddw phaddd phaddsw phsubw phsubd phsubsw pmaddubsw pmulhrsw pshufb psignb psignw psignd extrq insertq movntsd movntss lzcnt blendpd blendps blendvpd blendvps dppd dpps extractps insertps movntdqa mpsadbw packusdw pblendvb pblendw pcmpeqq pextrb pextrd pextrq phminposuw pinsrb pinsrd pinsrq pmaxsb pmaxsd pmaxud pmaxuw pminsb pminsd pminud pminuw pmovsxbw pmovsxbd pmovsxbq pmovsxwd pmovsxwq pmovsxdq pmovzxbw pmovzxbd pmovzxbq pmovzxwd pmovzxwq pmovzxdq pmuldq pmulld ptest roundpd roundps roundsd roundss crc32 pcmpestri pcmpestrm pcmpistri pcmpistrm pcmpgtq popcnt getsec pfrcpv pfrsqrtv movbe aesenc aesenclast aesdec aesdeclast aesimc aeskeygenassist vaesenc vaesenclast vaesdec vaesdeclast vaesimc vaeskeygenassist vaddpd vaddps vaddsd vaddss vaddsubpd vaddsubps vandpd vandps vandnpd vandnps vblendpd vblendps vblendvpd vblendvps vbroadcastss vbroadcastsd vbroadcastf128 vcmpeq_ospd vcmpeqpd vcmplt_ospd vcmpltpd vcmple_ospd vcmplepd vcmpunord_qpd vcmpunordpd vcmpneq_uqpd vcmpneqpd vcmpnlt_uspd vcmpnltpd vcmpnle_uspd vcmpnlepd vcmpord_qpd vcmpordpd vcmpeq_uqpd vcmpnge_uspd vcmpngepd vcmpngt_uspd vcmpngtpd vcmpfalse_oqpd vcmpfalsepd vcmpneq_oqpd vcmpge_ospd vcmpgepd vcmpgt_ospd vcmpgtpd vcmptrue_uqpd vcmptruepd vcmplt_oqpd vcmple_oqpd vcmpunord_spd vcmpneq_uspd vcmpnlt_uqpd vcmpnle_uqpd vcmpord_spd vcmpeq_uspd vcmpnge_uqpd vcmpngt_uqpd vcmpfalse_ospd vcmpneq_ospd vcmpge_oqpd vcmpgt_oqpd vcmptrue_uspd vcmppd vcmpeq_osps vcmpeqps vcmplt_osps vcmpltps vcmple_osps vcmpleps vcmpunord_qps vcmpunordps vcmpneq_uqps vcmpneqps vcmpnlt_usps vcmpnltps vcmpnle_usps vcmpnleps vcmpord_qps vcmpordps vcmpeq_uqps vcmpnge_usps vcmpngeps vcmpngt_usps vcmpngtps vcmpfalse_oqps vcmpfalseps vcmpneq_oqps vcmpge_osps vcmpgeps vcmpgt_osps vcmpgtps vcmptrue_uqps vcmptrueps vcmplt_oqps vcmple_oqps vcmpunord_sps vcmpneq_usps vcmpnlt_uqps vcmpnle_uqps vcmpord_sps vcmpeq_usps vcmpnge_uqps vcmpngt_uqps vcmpfalse_osps vcmpneq_osps vcmpge_oqps vcmpgt_oqps vcmptrue_usps vcmpps vcmpeq_ossd vcmpeqsd vcmplt_ossd vcmpltsd vcmple_ossd vcmplesd vcmpunord_qsd vcmpunordsd vcmpneq_uqsd vcmpneqsd vcmpnlt_ussd vcmpnltsd vcmpnle_ussd vcmpnlesd vcmpord_qsd vcmpordsd vcmpeq_uqsd vcmpnge_ussd vcmpngesd vcmpngt_ussd vcmpngtsd vcmpfalse_oqsd vcmpfalsesd vcmpneq_oqsd vcmpge_ossd vcmpgesd vcmpgt_ossd vcmpgtsd vcmptrue_uqsd vcmptruesd vcmplt_oqsd vcmple_oqsd vcmpunord_ssd vcmpneq_ussd vcmpnlt_uqsd vcmpnle_uqsd vcmpord_ssd vcmpeq_ussd vcmpnge_uqsd vcmpngt_uqsd vcmpfalse_ossd vcmpneq_ossd vcmpge_oqsd vcmpgt_oqsd vcmptrue_ussd vcmpsd vcmpeq_osss vcmpeqss vcmplt_osss vcmpltss vcmple_osss vcmpless vcmpunord_qss vcmpunordss vcmpneq_uqss vcmpneqss vcmpnlt_usss vcmpnltss vcmpnle_usss vcmpnless vcmpord_qss vcmpordss vcmpeq_uqss vcmpnge_usss vcmpngess vcmpngt_usss vcmpngtss vcmpfalse_oqss vcmpfalsess vcmpneq_oqss vcmpge_osss vcmpgess vcmpgt_osss vcmpgtss vcmptrue_uqss vcmptruess vcmplt_oqss vcmple_oqss vcmpunord_sss vcmpneq_usss vcmpnlt_uqss vcmpnle_uqss vcmpord_sss vcmpeq_usss vcmpnge_uqss vcmpngt_uqss vcmpfalse_osss vcmpneq_osss vcmpge_oqss vcmpgt_oqss vcmptrue_usss vcmpss vcomisd vcomiss vcvtdq2pd vcvtdq2ps vcvtpd2dq vcvtpd2ps vcvtps2dq vcvtps2pd vcvtsd2si vcvtsd2ss vcvtsi2sd vcvtsi2ss vcvtss2sd vcvtss2si vcvttpd2dq vcvttps2dq vcvttsd2si vcvttss2si vdivpd vdivps vdivsd vdivss vdppd vdpps vextractf128 vextractps vhaddpd vhaddps vhsubpd vhsubps vinsertf128 vinsertps vlddqu vldqqu vldmxcsr vmaskmovdqu vmaskmovps vmaskmovpd vmaxpd vmaxps vmaxsd vmaxss vminpd vminps vminsd vminss vmovapd vmovaps vmovd vmovq vmovddup vmovdqa vmovqqa vmovdqu vmovqqu vmovhlps vmovhpd vmovhps vmovlhps vmovlpd vmovlps vmovmskpd vmovmskps vmovntdq vmovntqq vmovntdqa vmovntpd vmovntps vmovsd vmovshdup vmovsldup vmovss vmovupd vmovups vmpsadbw vmulpd vmulps vmulsd vmulss vorpd vorps vpabsb vpabsw vpabsd vpacksswb vpackssdw vpackuswb vpackusdw vpaddb vpaddw vpaddd vpaddq vpaddsb vpaddsw vpaddusb vpaddusw vpalignr vpand vpandn vpavgb vpavgw vpblendvb vpblendw vpcmpestri vpcmpestrm vpcmpistri vpcmpistrm vpcmpeqb vpcmpeqw vpcmpeqd vpcmpeqq vpcmpgtb vpcmpgtw vpcmpgtd vpcmpgtq vpermilpd vpermilps vperm2f128 vpextrb vpextrw vpextrd vpextrq vphaddw vphaddd vphaddsw vphminposuw vphsubw vphsubd vphsubsw vpinsrb vpinsrw vpinsrd vpinsrq vpmaddwd vpmaddubsw vpmaxsb vpmaxsw vpmaxsd vpmaxub vpmaxuw vpmaxud vpminsb vpminsw vpminsd vpminub vpminuw vpminud vpmovmskb vpmovsxbw vpmovsxbd vpmovsxbq vpmovsxwd vpmovsxwq vpmovsxdq vpmovzxbw vpmovzxbd vpmovzxbq vpmovzxwd vpmovzxwq vpmovzxdq vpmulhuw vpmulhrsw vpmulhw vpmullw vpmulld vpmuludq vpmuldq vpor vpsadbw vpshufb vpshufd vpshufhw vpshuflw vpsignb vpsignw vpsignd vpslldq vpsrldq vpsllw vpslld vpsllq vpsraw vpsrad vpsrlw vpsrld vpsrlq vptest vpsubb vpsubw vpsubd vpsubq vpsubsb vpsubsw vpsubusb vpsubusw vpunpckhbw vpunpckhwd vpunpckhdq vpunpckhqdq vpunpcklbw vpunpcklwd vpunpckldq vpunpcklqdq vpxor vrcpps vrcpss vrsqrtps vrsqrtss vroundpd vroundps vroundsd vroundss vshufpd vshufps vsqrtpd vsqrtps vsqrtsd vsqrtss vstmxcsr vsubpd vsubps vsubsd vsubss vtestps vtestpd vucomisd vucomiss vunpckhpd vunpckhps vunpcklpd vunpcklps vxorpd vxorps vzeroall vzeroupper pclmullqlqdq pclmulhqlqdq pclmullqhqdq pclmulhqhqdq pclmulqdq vpclmullqlqdq vpclmulhqlqdq vpclmullqhqdq vpclmulhqhqdq vpclmulqdq vfmadd132ps vfmadd132pd vfmadd312ps vfmadd312pd vfmadd213ps vfmadd213pd vfmadd123ps vfmadd123pd vfmadd231ps vfmadd231pd vfmadd321ps vfmadd321pd vfmaddsub132ps vfmaddsub132pd vfmaddsub312ps vfmaddsub312pd vfmaddsub213ps vfmaddsub213pd vfmaddsub123ps vfmaddsub123pd vfmaddsub231ps vfmaddsub231pd vfmaddsub321ps vfmaddsub321pd vfmsub132ps vfmsub132pd vfmsub312ps vfmsub312pd vfmsub213ps vfmsub213pd vfmsub123ps vfmsub123pd vfmsub231ps vfmsub231pd vfmsub321ps vfmsub321pd vfmsubadd132ps vfmsubadd132pd vfmsubadd312ps vfmsubadd312pd vfmsubadd213ps vfmsubadd213pd vfmsubadd123ps vfmsubadd123pd vfmsubadd231ps vfmsubadd231pd vfmsubadd321ps vfmsubadd321pd vfnmadd132ps vfnmadd132pd vfnmadd312ps vfnmadd312pd vfnmadd213ps vfnmadd213pd vfnmadd123ps vfnmadd123pd vfnmadd231ps vfnmadd231pd vfnmadd321ps vfnmadd321pd vfnmsub132ps vfnmsub132pd vfnmsub312ps vfnmsub312pd vfnmsub213ps vfnmsub213pd vfnmsub123ps vfnmsub123pd vfnmsub231ps vfnmsub231pd vfnmsub321ps vfnmsub321pd vfmadd132ss vfmadd132sd vfmadd312ss vfmadd312sd vfmadd213ss vfmadd213sd vfmadd123ss vfmadd123sd vfmadd231ss vfmadd231sd vfmadd321ss vfmadd321sd vfmsub132ss vfmsub132sd vfmsub312ss vfmsub312sd vfmsub213ss vfmsub213sd vfmsub123ss vfmsub123sd vfmsub231ss vfmsub231sd vfmsub321ss vfmsub321sd vfnmadd132ss vfnmadd132sd vfnmadd312ss vfnmadd312sd vfnmadd213ss vfnmadd213sd vfnmadd123ss vfnmadd123sd vfnmadd231ss vfnmadd231sd vfnmadd321ss vfnmadd321sd vfnmsub132ss vfnmsub132sd vfnmsub312ss vfnmsub312sd vfnmsub213ss vfnmsub213sd vfnmsub123ss vfnmsub123sd vfnmsub231ss vfnmsub231sd vfnmsub321ss vfnmsub321sd rdfsbase rdgsbase rdrand wrfsbase wrgsbase vcvtph2ps vcvtps2ph adcx adox rdseed clac stac xstore xcryptecb xcryptcbc xcryptctr xcryptcfb xcryptofb montmul xsha1 xsha256 llwpcb slwpcb lwpval lwpins vfmaddpd vfmaddps vfmaddsd vfmaddss vfmaddsubpd vfmaddsubps vfmsubaddpd vfmsubaddps vfmsubpd vfmsubps vfmsubsd vfmsubss vfnmaddpd vfnmaddps vfnmaddsd vfnmaddss vfnmsubpd vfnmsubps vfnmsubsd vfnmsubss vfrczpd vfrczps vfrczsd vfrczss vpcmov vpcomb vpcomd vpcomq vpcomub vpcomud vpcomuq vpcomuw vpcomw vphaddbd vphaddbq vphaddbw vphadddq vphaddubd vphaddubq vphaddubw vphaddudq vphadduwd vphadduwq vphaddwd vphaddwq vphsubbw vphsubdq vphsubwd vpmacsdd vpmacsdqh vpmacsdql vpmacssdd vpmacssdqh vpmacssdql vpmacsswd vpmacssww vpmacswd vpmacsww vpmadcsswd vpmadcswd vpperm vprotb vprotd vprotq vprotw vpshab vpshad vpshaq vpshaw vpshlb vpshld vpshlq vpshlw vbroadcasti128 vpblendd vpbroadcastb vpbroadcastw vpbroadcastd vpbroadcastq vpermd vpermpd vpermps vpermq vperm2i128 vextracti128 vinserti128 vpmaskmovd vpmaskmovq vpsllvd vpsllvq vpsravd vpsrlvd vpsrlvq vgatherdpd vgatherqpd vgatherdps vgatherqps vpgatherdd vpgatherqd vpgatherdq vpgatherqq xabort xbegin xend xtest andn bextr blci blcic blsi blsic blcfill blsfill blcmsk blsmsk blsr blcs bzhi mulx pdep pext rorx sarx shlx shrx tzcnt tzmsk t1mskc valignd valignq vblendmpd vblendmps vbroadcastf32x4 vbroadcastf64x4 vbroadcasti32x4 vbroadcasti64x4 vcompresspd vcompressps vcvtpd2udq vcvtps2udq vcvtsd2usi vcvtss2usi vcvttpd2udq vcvttps2udq vcvttsd2usi vcvttss2usi vcvtudq2pd vcvtudq2ps vcvtusi2sd vcvtusi2ss vexpandpd vexpandps vextractf32x4 vextractf64x4 vextracti32x4 vextracti64x4 vfixupimmpd vfixupimmps vfixupimmsd vfixupimmss vgetexppd vgetexpps vgetexpsd vgetexpss vgetmantpd vgetmantps vgetmantsd vgetmantss vinsertf32x4 vinsertf64x4 vinserti32x4 vinserti64x4 vmovdqa32 vmovdqa64 vmovdqu32 vmovdqu64 vpabsq vpandd vpandnd vpandnq vpandq vpblendmd vpblendmq vpcmpltd vpcmpled vpcmpneqd vpcmpnltd vpcmpnled vpcmpd vpcmpltq vpcmpleq vpcmpneqq vpcmpnltq vpcmpnleq vpcmpq vpcmpequd vpcmpltud vpcmpleud vpcmpnequd vpcmpnltud vpcmpnleud vpcmpud vpcmpequq vpcmpltuq vpcmpleuq vpcmpnequq vpcmpnltuq vpcmpnleuq vpcmpuq vpcompressd vpcompressq vpermi2d vpermi2pd vpermi2ps vpermi2q vpermt2d vpermt2pd vpermt2ps vpermt2q vpexpandd vpexpandq vpmaxsq vpmaxuq vpminsq vpminuq vpmovdb vpmovdw vpmovqb vpmovqd vpmovqw vpmovsdb vpmovsdw vpmovsqb vpmovsqd vpmovsqw vpmovusdb vpmovusdw vpmovusqb vpmovusqd vpmovusqw vpord vporq vprold vprolq vprolvd vprolvq vprord vprorq vprorvd vprorvq vpscatterdd vpscatterdq vpscatterqd vpscatterqq vpsraq vpsravq vpternlogd vpternlogq vptestmd vptestmq vptestnmd vptestnmq vpxord vpxorq vrcp14pd vrcp14ps vrcp14sd vrcp14ss vrndscalepd vrndscaleps vrndscalesd vrndscaless vrsqrt14pd vrsqrt14ps vrsqrt14sd vrsqrt14ss vscalefpd vscalefps vscalefsd vscalefss vscatterdpd vscatterdps vscatterqpd vscatterqps vshuff32x4 vshuff64x2 vshufi32x4 vshufi64x2 kandnw kandw kmovw knotw kortestw korw kshiftlw kshiftrw kunpckbw kxnorw kxorw vpbroadcastmb2q vpbroadcastmw2d vpconflictd vpconflictq vplzcntd vplzcntq vexp2pd vexp2ps vrcp28pd vrcp28ps vrcp28sd vrcp28ss vrsqrt28pd vrsqrt28ps vrsqrt28sd vrsqrt28ss vgatherpf0dpd vgatherpf0dps vgatherpf0qpd vgatherpf0qps vgatherpf1dpd vgatherpf1dps vgatherpf1qpd vgatherpf1qps vscatterpf0dpd vscatterpf0dps vscatterpf0qpd vscatterpf0qps vscatterpf1dpd vscatterpf1dps vscatterpf1qpd vscatterpf1qps prefetchwt1 bndmk bndcl bndcu bndcn bndmov bndldx bndstx sha1rnds4 sha1nexte sha1msg1 sha1msg2 sha256rnds2 sha256msg1 sha256msg2 hint_nop0 hint_nop1 hint_nop2 hint_nop3 hint_nop4 hint_nop5 hint_nop6 hint_nop7 hint_nop8 hint_nop9 hint_nop10 hint_nop11 hint_nop12 hint_nop13 hint_nop14 hint_nop15 hint_nop16 hint_nop17 hint_nop18 hint_nop19 hint_nop20 hint_nop21 hint_nop22 hint_nop23 hint_nop24 hint_nop25 hint_nop26 hint_nop27 hint_nop28 hint_nop29 hint_nop30 hint_nop31 hint_nop32 hint_nop33 hint_nop34 hint_nop35 hint_nop36 hint_nop37 hint_nop38 hint_nop39 hint_nop40 hint_nop41 hint_nop42 hint_nop43 hint_nop44 hint_nop45 hint_nop46 hint_nop47 hint_nop48 hint_nop49 hint_nop50 hint_nop51 hint_nop52 hint_nop53 hint_nop54 hint_nop55 hint_nop56 hint_nop57 hint_nop58 hint_nop59 hint_nop60 hint_nop61 hint_nop62 hint_nop63",
                built_in: "ip eip rip al ah bl bh cl ch dl dh sil dil bpl spl r8b r9b r10b r11b r12b r13b r14b r15b ax bx cx dx si di bp sp r8w r9w r10w r11w r12w r13w r14w r15w eax ebx ecx edx esi edi ebp esp eip r8d r9d r10d r11d r12d r13d r14d r15d rax rbx rcx rdx rsi rdi rbp rsp r8 r9 r10 r11 r12 r13 r14 r15 cs ds es fs gs ss st st0 st1 st2 st3 st4 st5 st6 st7 mm0 mm1 mm2 mm3 mm4 mm5 mm6 mm7 xmm0  xmm1  xmm2  xmm3  xmm4  xmm5  xmm6  xmm7  xmm8  xmm9 xmm10  xmm11 xmm12 xmm13 xmm14 xmm15 xmm16 xmm17 xmm18 xmm19 xmm20 xmm21 xmm22 xmm23 xmm24 xmm25 xmm26 xmm27 xmm28 xmm29 xmm30 xmm31 ymm0  ymm1  ymm2  ymm3  ymm4  ymm5  ymm6  ymm7  ymm8  ymm9 ymm10  ymm11 ymm12 ymm13 ymm14 ymm15 ymm16 ymm17 ymm18 ymm19 ymm20 ymm21 ymm22 ymm23 ymm24 ymm25 ymm26 ymm27 ymm28 ymm29 ymm30 ymm31 zmm0  zmm1  zmm2  zmm3  zmm4  zmm5  zmm6  zmm7  zmm8  zmm9 zmm10  zmm11 zmm12 zmm13 zmm14 zmm15 zmm16 zmm17 zmm18 zmm19 zmm20 zmm21 zmm22 zmm23 zmm24 zmm25 zmm26 zmm27 zmm28 zmm29 zmm30 zmm31 k0 k1 k2 k3 k4 k5 k6 k7 bnd0 bnd1 bnd2 bnd3 cr0 cr1 cr2 cr3 cr4 cr8 dr0 dr1 dr2 dr3 dr8 tr3 tr4 tr5 tr6 tr7 r0 r1 r2 r3 r4 r5 r6 r7 r0b r1b r2b r3b r4b r5b r6b r7b r0w r1w r2w r3w r4w r5w r6w r7w r0d r1d r2d r3d r4d r5d r6d r7d r0h r1h r2h r3h r0l r1l r2l r3l r4l r5l r6l r7l r8l r9l r10l r11l r12l r13l r14l r15l db dw dd dq dt ddq do dy dz resb resw resd resq rest resdq reso resy resz incbin equ times byte word dword qword nosplit rel abs seg wrt strict near far a32 ptr",
                meta: "%define %xdefine %+ %undef %defstr %deftok %assign %strcat %strlen %substr %rotate %elif %else %endif %if %ifmacro %ifctx %ifidn %ifidni %ifid %ifnum %ifstr %iftoken %ifempty %ifenv %error %warning %fatal %rep %endrep %include %push %pop %repl %pathsearch %depend %use %arg %stacksize %local %line %comment %endcomment .nolist __FILE__ __LINE__ __SECT__  __BITS__ __OUTPUT_FORMAT__ __DATE__ __TIME__ __DATE_NUM__ __TIME_NUM__ __UTC_DATE__ __UTC_TIME__ __UTC_DATE_NUM__ __UTC_TIME_NUM__  __PASS__ struc endstruc istruc at iend align alignb sectalign daz nodaz up down zero default option assume public bits use16 use32 use64 default section segment absolute extern global common cpu float __utf16__ __utf16le__ __utf16be__ __utf32__ __utf32le__ __utf32be__ __float8__ __float16__ __float32__ __float64__ __float80m__ __float80e__ __float128l__ __float128h__ __Infinity__ __QNaN__ __SNaN__ Inf NaN QNaN SNaN float8 float16 float32 float64 float80m float80e float128l float128h __FLOAT_DAZ__ __FLOAT_ROUND__ __FLOAT__"
            },
            contains: [e.COMMENT(";", "$", {
                relevance: 0
            }), {
                className: "number",
                variants: [{
                    begin: "\\b(?:([0-9][0-9_]*)?\\.[0-9_]*(?:[eE][+-]?[0-9_]+)?|(0[Xx])?[0-9][0-9_]*\\.?[0-9_]*(?:[pP](?:[+-]?[0-9_]+)?)?)\\b",
                    relevance: 0
                }, {
                    begin: "\\$[0-9][0-9A-Fa-f]*",
                    relevance: 0
                }, {
                    begin: "\\b(?:[0-9A-Fa-f][0-9A-Fa-f_]*[Hh]|[0-9][0-9_]*[DdTt]?|[0-7][0-7_]*[QqOo]|[0-1][0-1_]*[BbYy])\\b"
                }, {
                    begin: "\\b(?:0[Xx][0-9A-Fa-f_]+|0[DdTt][0-9_]+|0[QqOo][0-7_]+|0[BbYy][0-1_]+)\\b"
                }]
            }, e.QUOTE_STRING_MODE, {
                className: "string",
                variants: [{
                    begin: "'",
                    end: "[^\\\\]'"
                }, {
                    begin: "`",
                    end: "[^\\\\]`"
                }],
                relevance: 0
            }, {
                className: "symbol",
                variants: [{
                    begin: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)"
                }, {
                    begin: "^\\s*%%[A-Za-z0-9_$#@~.?]*:"
                }],
                relevance: 0
            }, {
                className: "subst",
                begin: "%[0-9]+",
                relevance: 0
            }, {
                className: "subst",
                begin: "%!S+",
                relevance: 0
            }, {
                className: "meta",
                begin: /^\s*\.[\w_-]+/
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            keyword: "if then else do while until for loop import with is as where when by data constant integer real text name boolean symbol infix prefix postfix block tree",
            literal: "true false nil",
            built_in: "in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin acos atan exp expm1 log log2 log10 log1p pi at text_length text_range text_find text_replace contains page slide basic_slide title_slide title subtitle fade_in fade_out fade_at clear_color color line_color line_width texture_wrap texture_transform texture scale_?x scale_?y scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y rotate_?z? rectangle circle ellipse sphere path line_to move_to quad_to curve_to theme background contents locally time mouse_?x mouse_?y mouse_buttons ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts"
        }
          , n = {
            className: "string",
            begin: '"',
            end: '"',
            illegal: "\\n"
        }
          , r = {
            className: "string",
            begin: "'",
            end: "'",
            illegal: "\\n"
        }
          , a = {
            className: "string",
            begin: "<<",
            end: ">>"
        }
          , i = {
            className: "number",
            begin: "[0-9]+#[0-9A-Z_]+(\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?"
        }
          , s = {
            beginKeywords: "import",
            end: "$",
            keywords: t,
            contains: [n]
        }
          , o = {
            className: "function",
            begin: /[a-z][^\n]*->/,
            returnBegin: !0,
            end: /->/,
            contains: [e.inherit(e.TITLE_MODE, {
                starts: {
                    endsWithParent: !0,
                    keywords: t
                }
            })]
        };
        return {
            aliases: ["tao"],
            lexemes: /[a-zA-Z][a-zA-Z0-9_?]*/,
            keywords: t,
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, n, r, a, o, s, i, e.NUMBER_MODE]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            endsWithParent: !0,
            illegal: /</,
            relevance: 0,
            contains: [{
                className: "attr",
                begin: "[A-Za-z0-9\\._:-]+",
                relevance: 0
            }, {
                begin: /=\s*/,
                relevance: 0,
                contains: [{
                    className: "string",
                    endsParent: !0,
                    variants: [{
                        begin: /"/,
                        end: /"/
                    }, {
                        begin: /'/,
                        end: /'/
                    }, {
                        begin: /[^\s"'=<>`]+/
                    }]
                }]
            }]
        };
        return {
            aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
            case_insensitive: !0,
            contains: [{
                className: "meta",
                begin: "<!DOCTYPE",
                end: ">",
                relevance: 10,
                contains: [{
                    begin: "\\[",
                    end: "\\]"
                }]
            }, e.COMMENT("\x3c!--", "--\x3e", {
                relevance: 10
            }), {
                begin: "<\\!\\[CDATA\\[",
                end: "\\]\\]>",
                relevance: 10
            }, {
                begin: /<\?(php)?/,
                end: /\?>/,
                subLanguage: "php",
                contains: [{
                    begin: "/\\*",
                    end: "\\*/",
                    skip: !0
                }]
            }, {
                className: "tag",
                begin: "<style(?=\\s|>|$)",
                end: ">",
                keywords: {
                    name: "style"
                },
                contains: [t],
                starts: {
                    end: "</style>",
                    returnEnd: !0,
                    subLanguage: ["css", "xml"]
                }
            }, {
                className: "tag",
                begin: "<script(?=\\s|>|$)",
                end: ">",
                keywords: {
                    name: "script"
                },
                contains: [t],
                starts: {
                    end: "<\/script>",
                    returnEnd: !0,
                    subLanguage: ["actionscript", "javascript", "handlebars", "xml"]
                }
            }, {
                className: "meta",
                variants: [{
                    begin: /<\?xml/,
                    end: /\?>/,
                    relevance: 10
                }, {
                    begin: /<\?\w+/,
                    end: /\?>/
                }]
            }, {
                className: "tag",
                begin: "</?",
                end: "/?>",
                contains: [{
                    className: "name",
                    begin: /[^\/><\s]+/,
                    relevance: 0
                }, t]
            }]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            begin: /\$[a-zA-Z0-9\-]+/
        }
          , n = {
            className: "number",
            begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
            relevance: 0
        }
          , r = {
            className: "string",
            variants: [{
                begin: /"/,
                end: /"/,
                contains: [{
                    begin: /""/,
                    relevance: 0
                }]
            }, {
                begin: /'/,
                end: /'/,
                contains: [{
                    begin: /''/,
                    relevance: 0
                }]
            }]
        }
          , a = {
            className: "meta",
            begin: "%\\w+"
        }
          , i = {
            className: "comment",
            begin: "\\(:",
            end: ":\\)",
            relevance: 10,
            contains: [{
                className: "doctag",
                begin: "@\\w+"
            }]
        }
          , s = {
            begin: "{",
            end: "}"
        }
          , o = [t, r, n, i, a, s];
        return s.contains = o,
        {
            aliases: ["xpath", "xq"],
            case_insensitive: !1,
            lexemes: /[a-zA-Z\$][a-zA-Z0-9_:\-]*/,
            illegal: /(proc)|(abstract)|(extends)|(until)|(#)/,
            keywords: {
                keyword: "for let if while then else return where group by xquery encoding versionmodule namespace boundary-space preserve strip default collation base-uri orderingcopy-namespaces order declare import schema namespace function option in allowing emptyat tumbling window sliding window start when only end when previous next stable ascendingdescending empty greatest least some every satisfies switch case typeswitch try catch andor to union intersect instance of treat as castable cast map array delete insert intoreplace value rename copy modify update",
                literal: "false true xs:string xs:integer element item xs:date xs:datetime xs:float xs:double xs:decimal QName xs:anyURI xs:long xs:int xs:short xs:byte attribute"
            },
            contains: o
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "[a-zA-Z_][\\w\\-]*"
          , n = {
            className: "attr",
            variants: [{
                begin: "^[ \\-]*" + t + ":"
            }, {
                begin: '^[ \\-]*"' + t + '":'
            }, {
                begin: "^[ \\-]*'" + t + "':"
            }]
        }
          , r = {
            className: "template-variable",
            variants: [{
                begin: "{{",
                end: "}}"
            }, {
                begin: "%{",
                end: "}"
            }]
        }
          , a = {
            className: "string",
            relevance: 0,
            variants: [{
                begin: /'/,
                end: /'/
            }, {
                begin: /"/,
                end: /"/
            }, {
                begin: /\S+/
            }],
            contains: [e.BACKSLASH_ESCAPE, r]
        };
        return {
            case_insensitive: !0,
            aliases: ["yml", "YAML", "yaml"],
            contains: [n, {
                className: "meta",
                begin: "^---s*$",
                relevance: 10
            }, {
                className: "string",
                begin: "[\\|>] *$",
                returnEnd: !0,
                contains: a.contains,
                end: n.variants[0].begin
            }, {
                begin: "<%[%=-]?",
                end: "[%-]?%>",
                subLanguage: "ruby",
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0
            }, {
                className: "type",
                begin: "!!" + e.UNDERSCORE_IDENT_RE
            }, {
                className: "meta",
                begin: "&" + e.UNDERSCORE_IDENT_RE + "$"
            }, {
                className: "meta",
                begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$"
            }, {
                className: "bullet",
                begin: "^ *-",
                relevance: 0
            }, e.HASH_COMMENT_MODE, {
                beginKeywords: "true false yes no null",
                keywords: {
                    literal: "true false yes no null"
                }
            }, e.C_NUMBER_MODE, a]
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE],
            variants: [{
                begin: 'b"',
                end: '"'
            }, {
                begin: "b'",
                end: "'"
            }, e.inherit(e.APOS_STRING_MODE, {
                illegal: null
            }), e.inherit(e.QUOTE_STRING_MODE, {
                illegal: null
            })]
        }
          , n = {
            variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE]
        };
        return {
            aliases: ["zep"],
            case_insensitive: !0,
            keywords: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var let while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally int uint long ulong char uchar double float bool boolean stringlikely unlikely",
            contains: [e.C_LINE_COMMENT_MODE, e.HASH_COMMENT_MODE, e.COMMENT("/\\*", "\\*/", {
                contains: [{
                    className: "doctag",
                    begin: "@[A-Za-z]+"
                }]
            }), e.COMMENT("__halt_compiler.+?;", !1, {
                endsWithParent: !0,
                keywords: "__halt_compiler",
                lexemes: e.UNDERSCORE_IDENT_RE
            }), {
                className: "string",
                begin: "<<<['\"]?\\w+['\"]?$",
                end: "^\\w+;",
                contains: [e.BACKSLASH_ESCAPE]
            }, {
                begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
            }, {
                className: "function",
                beginKeywords: "function",
                end: /[;{]/,
                excludeEnd: !0,
                illegal: "\\$|\\[|%",
                contains: [e.UNDERSCORE_TITLE_MODE, {
                    className: "params",
                    begin: "\\(",
                    end: "\\)",
                    contains: ["self", e.C_BLOCK_COMMENT_MODE, t, n]
                }]
            }, {
                className: "class",
                beginKeywords: "class interface",
                end: "{",
                excludeEnd: !0,
                illegal: /[:\(\$"]/,
                contains: [{
                    beginKeywords: "extends implements"
                }, e.UNDERSCORE_TITLE_MODE]
            }, {
                beginKeywords: "namespace",
                end: ";",
                illegal: /[\.']/,
                contains: [e.UNDERSCORE_TITLE_MODE]
            }, {
                beginKeywords: "use",
                end: ";",
                contains: [e.UNDERSCORE_TITLE_MODE]
            }, {
                begin: "=>"
            }, t, n]
        }
    }
}
, function(e, t, n) {
    "use strict";
    function assign(e) {
        return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
            t && Object.keys(t).forEach(function(n) {
                e[n] = t[n]
            })
        }),
        e
    }
    function _class(e) {
        return Object.prototype.toString.call(e)
    }
    function isString(e) {
        return "[object String]" === _class(e)
    }
    function isObject(e) {
        return "[object Object]" === _class(e)
    }
    function isRegExp(e) {
        return "[object RegExp]" === _class(e)
    }
    function isFunction(e) {
        return "[object Function]" === _class(e)
    }
    function escapeRE(e) {
        return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
    }
    function isOptionsObj(e) {
        return Object.keys(e || {}).reduce(function(e, t) {
            return e || r.hasOwnProperty(t)
        }, !1)
    }
    function resetScanCache(e) {
        e.__index__ = -1,
        e.__text_cache__ = ""
    }
    function createValidator(e) {
        return function(t, n) {
            var r = t.slice(n);
            return e.test(r) ? r.match(e)[0].length : 0
        }
    }
    function createNormalizer() {
        return function(e, t) {
            t.normalize(e)
        }
    }
    function compile(e) {
        function untpl(e) {
            return e.replace("%TLDS%", t.src_tlds)
        }
        function schemaError(e, t) {
            throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
        }
        var t = e.re = n(198)(e.__opts__)
          , r = e.__tlds__.slice();
        e.onCompile(),
        e.__tlds_replaced__ || r.push(i),
        r.push(t.src_xn),
        t.src_tlds = r.join("|"),
        t.email_fuzzy = RegExp(untpl(t.tpl_email_fuzzy), "i"),
        t.link_fuzzy = RegExp(untpl(t.tpl_link_fuzzy), "i"),
        t.link_no_ip_fuzzy = RegExp(untpl(t.tpl_link_no_ip_fuzzy), "i"),
        t.host_fuzzy_test = RegExp(untpl(t.tpl_host_fuzzy_test), "i");
        var a = [];
        e.__compiled__ = {},
        Object.keys(e.__schemas__).forEach(function(t) {
            var n = e.__schemas__[t];
            if (null !== n) {
                var r = {
                    validate: null,
                    link: null
                };
                return e.__compiled__[t] = r,
                isObject(n) ? (isRegExp(n.validate) ? r.validate = createValidator(n.validate) : isFunction(n.validate) ? r.validate = n.validate : schemaError(t, n),
                void (isFunction(n.normalize) ? r.normalize = n.normalize : n.normalize ? schemaError(t, n) : r.normalize = createNormalizer())) : isString(n) ? void a.push(t) : void schemaError(t, n)
            }
        }),
        a.forEach(function(t) {
            e.__compiled__[e.__schemas__[t]] && (e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate,
            e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize)
        }),
        e.__compiled__[""] = {
            validate: null,
            normalize: createNormalizer()
        };
        var s = Object.keys(e.__compiled__).filter(function(t) {
            return t.length > 0 && e.__compiled__[t]
        }).map(escapeRE).join("|");
        e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + s + ")", "i"),
        e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + s + ")", "ig"),
        e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
        resetScanCache(e)
    }
    function Match(e, t) {
        var n = e.__index__
          , r = e.__last_index__
          , a = e.__text_cache__.slice(n, r);
        this.schema = e.__schema__.toLowerCase(),
        this.index = n + t,
        this.lastIndex = r + t,
        this.raw = a,
        this.text = a,
        this.url = a
    }
    function createMatch(e, t) {
        var n = new Match(e,t);
        return e.__compiled__[n.schema].normalize(n, e),
        n
    }
    function LinkifyIt(e, t) {
        if (!(this instanceof LinkifyIt))
            return new LinkifyIt(e,t);
        t || isOptionsObj(e) && (t = e,
        e = {}),
        this.__opts__ = assign({}, r, t),
        this.__index__ = -1,
        this.__last_index__ = -1,
        this.__schema__ = "",
        this.__text_cache__ = "",
        this.__schemas__ = assign({}, a, e),
        this.__compiled__ = {},
        this.__tlds__ = s,
        this.__tlds_replaced__ = !1,
        this.re = {},
        compile(this)
    }
    var r = {
        fuzzyLink: !0,
        fuzzyEmail: !0,
        fuzzyIP: !1
    }
      , a = {
        "http:": {
            validate: function(e, t, n) {
                var r = e.slice(t);
                return n.re.http || (n.re.http = new RegExp("^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path,"i")),
                n.re.http.test(r) ? r.match(n.re.http)[0].length : 0
            }
        },
        "https:": "http:",
        "ftp:": "http:",
        "//": {
            validate: function(e, t, n) {
                var r = e.slice(t);
                return n.re.no_http || (n.re.no_http = new RegExp("^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path,"i")),
                n.re.no_http.test(r) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : r.match(n.re.no_http)[0].length : 0
            }
        },
        "mailto:": {
            validate: function(e, t, n) {
                var r = e.slice(t);
                return n.re.mailto || (n.re.mailto = new RegExp("^" + n.re.src_email_name + "@" + n.re.src_host_strict,"i")),
                n.re.mailto.test(r) ? r.match(n.re.mailto)[0].length : 0
            }
        }
    }
      , i = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"
      , s = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
    LinkifyIt.prototype.add = function(e, t) {
        return this.__schemas__[e] = t,
        compile(this),
        this
    }
    ,
    LinkifyIt.prototype.set = function(e) {
        return this.__opts__ = assign(this.__opts__, e),
        this
    }
    ,
    LinkifyIt.prototype.test = function(e) {
        if (this.__text_cache__ = e,
        this.__index__ = -1,
        !e.length)
            return !1;
        var t, n, r, a, i, s, o, l;
        if (this.re.schema_test.test(e))
            for (o = this.re.schema_search,
            o.lastIndex = 0; null !== (t = o.exec(e)); )
                if (a = this.testSchemaAt(e, t[2], o.lastIndex)) {
                    this.__schema__ = t[2],
                    this.__index__ = t.index + t[1].length,
                    this.__last_index__ = t.index + t[0].length + a;
                    break
                }
        return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (l = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || l < this.__index__) && null !== (n = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (i = n.index + n[1].length,
        (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "",
        this.__index__ = i,
        this.__last_index__ = n.index + n[0].length)),
        this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (r = e.match(this.re.email_fuzzy)) && (i = r.index + r[1].length,
        s = r.index + r[0].length,
        (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && s > this.__last_index__) && (this.__schema__ = "mailto:",
        this.__index__ = i,
        this.__last_index__ = s)),
        this.__index__ >= 0
    }
    ,
    LinkifyIt.prototype.pretest = function(e) {
        return this.re.pretest.test(e)
    }
    ,
    LinkifyIt.prototype.testSchemaAt = function(e, t, n) {
        return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, n, this) : 0
    }
    ,
    LinkifyIt.prototype.match = function(e) {
        var t = 0
          , n = [];
        this.__index__ >= 0 && this.__text_cache__ === e && (n.push(createMatch(this, t)),
        t = this.__last_index__);
        for (var r = t ? e.slice(t) : e; this.test(r); )
            n.push(createMatch(this, t)),
            r = r.slice(this.__last_index__),
            t += this.__last_index__;
        return n.length ? n : null
    }
    ,
    LinkifyIt.prototype.tlds = function(e, t) {
        return e = Array.isArray(e) ? e : [e],
        t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function(e, t, n) {
            return e !== n[t - 1]
        }).reverse(),
        compile(this),
        this) : (this.__tlds__ = e.slice(),
        this.__tlds_replaced__ = !0,
        compile(this),
        this)
    }
    ,
    LinkifyIt.prototype.normalize = function(e) {
        e.schema || (e.url = "http://" + e.url),
        "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
    }
    ,
    LinkifyIt.prototype.onCompile = function() {}
    ,
    e.exports = LinkifyIt
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = {};
        t.src_Any = n(11).source,
        t.src_Cc = n(9).source,
        t.src_Z = n(10).source,
        t.src_P = n(3).source,
        t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"),
        t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
        return t.src_pseudo_letter = "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")",
        t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",
        t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?",
        t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",
        t.src_host_terminator = "(?=$|[><｜]|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))",
        t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + t.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?",
        t.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+',
        t.src_xn = "xn--[a-z0-9\\-]{1,59}",
        t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})",
        t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-(?!-)|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))",
        t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))",
        t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))",
        t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))",
        t.src_host_strict = t.src_host + t.src_host_terminator,
        t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator,
        t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator,
        t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator,
        t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator,
        t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))",
        t.tpl_email_fuzzy = "(^|[><｜]|\\(|" + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")",
        t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")",
        t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")",
        t
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = {
        angry: [">:(", ">:-("],
        blush: [':")', ':-")'],
        broken_heart: ["</3", "<\\3"],
        confused: [":/", ":-/"],
        cry: [":'(", ":'-(", ":,(", ":,-("],
        frowning: [":(", ":-("],
        heart: ["<3"],
        imp: ["]:(", "]:-("],
        innocent: ["o:)", "O:)", "o:-)", "O:-)", "0:)", "0:-)"],
        joy: [":')", ":'-)", ":,)", ":,-)", ":'D", ":'-D", ":,D", ":,-D"],
        kissing: [":*", ":-*"],
        laughing: ["x-)", "X-)"],
        neutral_face: [":|", ":-|"],
        open_mouth: [":o", ":-o", ":O", ":-O"],
        rage: [":@", ":-@"],
        smile: [":D", ":-D"],
        smiley: [":)", ":-)"],
        smiling_imp: ["]:)", "]:-)"],
        sob: [":,'(", ":,'-(", ";(", ";-("],
        stuck_out_tongue: [":P", ":-P"],
        sunglasses: ["8-)", "B-)"],
        sweat: [",:(", ",:-("],
        sweat_smile: [",:)", ",:-)"],
        unamused: [":s", ":-S", ":z", ":-Z", ":$", ":-$"],
        wink: [";)", ";-)"]
    }
}
, function(e, t, n) {
    "use strict";
    function quoteRE(e) {
        return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
    }
    e.exports = function(e) {
        var t, n = e.defs;
        e.enabled.length && (n = Object.keys(n).reduce(function(t, r) {
            return e.enabled.indexOf(r) >= 0 && (t[r] = n[r]),
            t
        }, {})),
        t = Object.keys(e.shortcuts).reduce(function(t, r) {
            return n[r] ? Array.isArray(e.shortcuts[r]) ? (e.shortcuts[r].forEach(function(e) {
                t[e] = r
            }),
            t) : (t[e.shortcuts[r]] = r,
            t) : t
        }, {});
        var r = Object.keys(n).map(function(e) {
            return ":" + e + ":"
        }).concat(Object.keys(t)).sort().reverse().map(function(e) {
            return quoteRE(e)
        }).join("|")
          , a = RegExp(r)
          , i = RegExp(r, "g");
        return {
            defs: n,
            shortcuts: t,
            scanRE: a,
            replaceRE: i
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return e[t].content
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n, r, a) {
        function splitTextToken(e, r, i) {
            var s, l = 0, c = [];
            return e.replace(a, function(r, a, d) {
                var u;
                if (n.hasOwnProperty(r)) {
                    if (u = n[r],
                    a > 0 && !o.test(d[a - 1]))
                        return;
                    if (a + r.length < d.length && !o.test(d[a + r.length]))
                        return
                } else
                    u = r.slice(1, -1);
                a > l && (s = new i("text","",0),
                s.content = e.slice(l, a),
                c.push(s)),
                s = new i("emoji","",0),
                s.markup = u,
                s.content = t[u],
                c.push(s),
                l = a + r.length
            }),
            l < e.length && (s = new i("text","",0),
            s.content = e.slice(l),
            c.push(s)),
            c
        }
        var i = e.utils.arrayReplaceAt
          , s = e.utils.lib.ucmicro
          , o = new RegExp([s.Z.source, s.P.source, s.Cc.source].join("|"));
        return function(e) {
            var t, n, a, s, o, l = e.tokens, c = 0;
            for (n = 0,
            a = l.length; n < a; n++)
                if ("inline" === l[n].type)
                    for (s = l[n].children,
                    t = s.length - 1; t >= 0; t--)
                        o = s[t],
                        "link_open" !== o.type && "link_close" !== o.type || "auto" === o.info && (c -= o.nesting),
                        "text" === o.type && r.test(o.content) && 0 === c && (l[n].children = s = i(s, t, splitTextToken(o.content, o.level, e.Token)))
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "meta", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "pre", "section", "source", "title", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"]
}
, function(e, t, n) {
    "use strict";
    t.parseLinkLabel = n(206),
    t.parseLinkDestination = n(205),
    t.parseLinkTitle = n(207)
}
, function(e, t, n) {
    "use strict";
    var r = n(0).isSpace
      , a = n(0).unescapeAll;
    e.exports = function(e, t, n) {
        var i, s, o = t, l = {
            ok: !1,
            pos: 0,
            lines: 0,
            str: ""
        };
        if (60 === e.charCodeAt(t)) {
            for (t++; t < n; ) {
                if (10 === (i = e.charCodeAt(t)) || r(i))
                    return l;
                if (62 === i)
                    return l.pos = t + 1,
                    l.str = a(e.slice(o + 1, t)),
                    l.ok = !0,
                    l;
                92 === i && t + 1 < n ? t += 2 : t++
            }
            return l
        }
        for (s = 0; t < n && 32 !== (i = e.charCodeAt(t)) && !(i < 32 || 127 === i); )
            if (92 === i && t + 1 < n)
                t += 2;
            else {
                if (40 === i && ++s > 1)
                    break;
                if (41 === i && --s < 0)
                    break;
                t++
            }
        return o === t ? l : (l.str = a(e.slice(o, t)),
        l.lines = 0,
        l.pos = t,
        l.ok = !0,
        l)
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r, a, i, s, o = -1, l = e.posMax, c = e.pos;
        for (e.pos = t + 1,
        r = 1; e.pos < l; ) {
            if (93 === (i = e.src.charCodeAt(e.pos)) && 0 === --r) {
                a = !0;
                break
            }
            if (s = e.pos,
            e.md.inline.skipToken(e),
            91 === i)
                if (s === e.pos - 1)
                    r++;
                else if (n)
                    return e.pos = c,
                    -1
        }
        return a && (o = e.pos),
        e.pos = c,
        o
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0).unescapeAll;
    e.exports = function(e, t, n) {
        var a, i, s = 0, o = t, l = {
            ok: !1,
            pos: 0,
            lines: 0,
            str: ""
        };
        if (t >= n)
            return l;
        if (34 !== (i = e.charCodeAt(t)) && 39 !== i && 40 !== i)
            return l;
        for (t++,
        40 === i && (i = 41); t < n; ) {
            if ((a = e.charCodeAt(t)) === i)
                return l.pos = t + 1,
                l.lines = s,
                l.str = r(e.slice(o + 1, t)),
                l.ok = !0,
                l;
            10 === a ? s++ : 92 === a && t + 1 < n && (t++,
            10 === e.charCodeAt(t) && s++),
            t++
        }
        return l
    }
}
, function(e, t, n) {
    "use strict";
    function validateLink(e) {
        var t = e.trim().toLowerCase();
        return !m.test(t) || !!g.test(t)
    }
    function normalizeLink(e) {
        var t = d.parse(e, !0);
        if (t.hostname && (!t.protocol || _.indexOf(t.protocol) >= 0))
            try {
                t.hostname = u.toASCII(t.hostname)
            } catch (e) {}
        return d.encode(d.format(t))
    }
    function normalizeLinkText(e) {
        var t = d.parse(e, !0);
        if (t.hostname && (!t.protocol || _.indexOf(t.protocol) >= 0))
            try {
                t.hostname = u.toUnicode(t.hostname)
            } catch (e) {}
        return d.decode(d.format(t))
    }
    function MarkdownIt(e, t) {
        if (!(this instanceof MarkdownIt))
            return new MarkdownIt(e,t);
        t || r.isString(e) || (t = e || {},
        e = "default"),
        this.inline = new l,
        this.block = new o,
        this.core = new s,
        this.renderer = new i,
        this.linkify = new c,
        this.validateLink = validateLink,
        this.normalizeLink = normalizeLink,
        this.normalizeLinkText = normalizeLinkText,
        this.utils = r,
        this.helpers = r.assign({}, a),
        this.options = {},
        this.configure(e),
        t && this.set(t)
    }
    var r = n(0)
      , a = n(204)
      , i = n(215)
      , s = n(210)
      , o = n(209)
      , l = n(211)
      , c = n(197)
      , d = n(8)
      , u = n(251)
      , p = {
        default: n(213),
        zero: n(214),
        commonmark: n(212)
    }
      , m = /^(vbscript|javascript|file|data):/
      , g = /^data:image\/(gif|png|jpeg|webp);/
      , _ = ["http:", "https:", "mailto:"];
    MarkdownIt.prototype.set = function(e) {
        return r.assign(this.options, e),
        this
    }
    ,
    MarkdownIt.prototype.configure = function(e) {
        var t, n = this;
        if (r.isString(e) && (t = e,
        !(e = p[t])))
            throw new Error('Wrong `markdown-it` preset "' + t + '", check name');
        if (!e)
            throw new Error("Wrong `markdown-it` preset, can't be empty");
        return e.options && n.set(e.options),
        e.components && Object.keys(e.components).forEach(function(t) {
            e.components[t].rules && n[t].ruler.enableOnly(e.components[t].rules),
            e.components[t].rules2 && n[t].ruler2.enableOnly(e.components[t].rules2)
        }),
        this
    }
    ,
    MarkdownIt.prototype.enable = function(e, t) {
        var n = [];
        Array.isArray(e) || (e = [e]),
        ["core", "block", "inline"].forEach(function(t) {
            n = n.concat(this[t].ruler.enable(e, !0))
        }, this),
        n = n.concat(this.inline.ruler2.enable(e, !0));
        var r = e.filter(function(e) {
            return n.indexOf(e) < 0
        });
        if (r.length && !t)
            throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
        return this
    }
    ,
    MarkdownIt.prototype.disable = function(e, t) {
        var n = [];
        Array.isArray(e) || (e = [e]),
        ["core", "block", "inline"].forEach(function(t) {
            n = n.concat(this[t].ruler.disable(e, !0))
        }, this),
        n = n.concat(this.inline.ruler2.disable(e, !0));
        var r = e.filter(function(e) {
            return n.indexOf(e) < 0
        });
        if (r.length && !t)
            throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
        return this
    }
    ,
    MarkdownIt.prototype.use = function(e) {
        var t = [this].concat(Array.prototype.slice.call(arguments, 1));
        return e.apply(e, t),
        this
    }
    ,
    MarkdownIt.prototype.parse = function(e, t) {
        if ("string" != typeof e)
            throw new Error("Input data should be a String");
        var n = new this.core.State(e,this,t);
        return this.core.process(n),
        n.tokens
    }
    ,
    MarkdownIt.prototype.render = function(e, t) {
        return t = t || {},
        this.renderer.render(this.parse(e, t), this.options, t)
    }
    ,
    MarkdownIt.prototype.parseInline = function(e, t) {
        var n = new this.core.State(e,this,t);
        return n.inlineMode = !0,
        this.core.process(n),
        n.tokens
    }
    ,
    MarkdownIt.prototype.renderInline = function(e, t) {
        return t = t || {},
        this.renderer.render(this.parseInline(e, t), this.options, t)
    }
    ,
    e.exports = MarkdownIt
}
, function(e, t, n) {
    "use strict";
    function ParserBlock() {
        this.ruler = new r;
        for (var e = 0; e < a.length; e++)
            this.ruler.push(a[e][0], a[e][1], {
                alt: (a[e][2] || []).slice()
            })
    }
    var r = n(1)
      , a = [["table", n(227), ["paragraph", "reference"]], ["code", n(217)], ["fence", n(218), ["paragraph", "reference", "blockquote", "list"]], ["blockquote", n(216), ["paragraph", "reference", "list"]], ["hr", n(220), ["paragraph", "reference", "blockquote", "list"]], ["list", n(223), ["paragraph", "reference", "blockquote"]], ["reference", n(225)], ["heading", n(219), ["paragraph", "reference", "blockquote"]], ["lheading", n(222)], ["html_block", n(221), ["paragraph", "reference", "blockquote"]], ["paragraph", n(224)]];
    ParserBlock.prototype.tokenize = function(e, t, n) {
        for (var r, a = this.ruler.getRules(""), i = a.length, s = t, o = !1, l = e.md.options.maxNesting; s < n && (e.line = s = e.skipEmptyLines(s),
        !(s >= n)) && !(e.sCount[s] < e.blkIndent); ) {
            if (e.level >= l) {
                e.line = n;
                break
            }
            for (r = 0; r < i && !a[r](e, s, n, !1); r++)
                ;
            e.tight = !o,
            e.isEmpty(e.line - 1) && (o = !0),
            (s = e.line) < n && e.isEmpty(s) && (o = !0,
            s++,
            e.line = s)
        }
    }
    ,
    ParserBlock.prototype.parse = function(e, t, n, r) {
        var a;
        e && (a = new this.State(e,t,n,r),
        this.tokenize(a, a.line, a.lineMax))
    }
    ,
    ParserBlock.prototype.State = n(226),
    e.exports = ParserBlock
}
, function(e, t, n) {
    "use strict";
    function Core() {
        this.ruler = new r;
        for (var e = 0; e < a.length; e++)
            this.ruler.push(a[e][0], a[e][1])
    }
    var r = n(1)
      , a = [["normalize", n(231)], ["block", n(228)], ["inline", n(229)], ["linkify", n(230)], ["replacements", n(232)], ["smartquotes", n(233)]];
    Core.prototype.process = function(e) {
        var t, n, r;
        for (r = this.ruler.getRules(""),
        t = 0,
        n = r.length; t < n; t++)
            r[t](e)
    }
    ,
    Core.prototype.State = n(234),
    e.exports = Core
}
, function(e, t, n) {
    "use strict";
    function ParserInline() {
        var e;
        for (this.ruler = new r,
        e = 0; e < a.length; e++)
            this.ruler.push(a[e][0], a[e][1]);
        for (this.ruler2 = new r,
        e = 0; e < i.length; e++)
            this.ruler2.push(i[e][0], i[e][1])
    }
    var r = n(1)
      , a = [["text", n(245)], ["newline", n(243)], ["escape", n(239)], ["backticks", n(236)], ["strikethrough", n(7).tokenize], ["emphasis", n(6).tokenize], ["link", n(242)], ["image", n(241)], ["autolink", n(235)], ["html_inline", n(240)], ["entity", n(238)]]
      , i = [["balance_pairs", n(237)], ["strikethrough", n(7).postProcess], ["emphasis", n(6).postProcess], ["text_collapse", n(246)]];
    ParserInline.prototype.skipToken = function(e) {
        var t, n, r = e.pos, a = this.ruler.getRules(""), i = a.length, s = e.md.options.maxNesting, o = e.cache;
        if (void 0 !== o[r])
            return void (e.pos = o[r]);
        if (e.level < s)
            for (n = 0; n < i && (e.level++,
            t = a[n](e, !0),
            e.level--,
            !t); n++)
                ;
        else
            e.pos = e.posMax;
        t || e.pos++,
        o[r] = e.pos
    }
    ,
    ParserInline.prototype.tokenize = function(e) {
        for (var t, n, r = this.ruler.getRules(""), a = r.length, i = e.posMax, s = e.md.options.maxNesting; e.pos < i; ) {
            if (e.level < s)
                for (n = 0; n < a && !(t = r[n](e, !1)); n++)
                    ;
            if (t) {
                if (e.pos >= i)
                    break
            } else
                e.pending += e.src[e.pos++]
        }
        e.pending && e.pushPending()
    }
    ,
    ParserInline.prototype.parse = function(e, t, n, r) {
        var a, i, s, o = new this.State(e,t,n,r);
        for (this.tokenize(o),
        i = this.ruler2.getRules(""),
        s = i.length,
        a = 0; a < s; a++)
            i[a](o)
    }
    ,
    ParserInline.prototype.State = n(244),
    e.exports = ParserInline
}
, function(e, t, n) {
    "use strict";
    e.exports = {
        options: {
            html: !0,
            xhtmlOut: !0,
            breaks: !1,
            langPrefix: "language-",
            linkify: !1,
            typographer: !1,
            quotes: "“”‘’",
            highlight: null,
            maxNesting: 20
        },
        components: {
            core: {
                rules: ["normalize", "block", "inline"]
            },
            block: {
                rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"]
            },
            inline: {
                rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"],
                rules2: ["balance_pairs", "emphasis", "text_collapse"]
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = {
        options: {
            html: !1,
            xhtmlOut: !1,
            breaks: !1,
            langPrefix: "language-",
            linkify: !1,
            typographer: !1,
            quotes: "“”‘’",
            highlight: null,
            maxNesting: 100
        },
        components: {
            core: {},
            block: {},
            inline: {}
        }
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = {
        options: {
            html: !1,
            xhtmlOut: !1,
            breaks: !1,
            langPrefix: "language-",
            linkify: !1,
            typographer: !1,
            quotes: "“”‘’",
            highlight: null,
            maxNesting: 20
        },
        components: {
            core: {
                rules: ["normalize", "block", "inline"]
            },
            block: {
                rules: ["paragraph"]
            },
            inline: {
                rules: ["text"],
                rules2: ["balance_pairs", "text_collapse"]
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    function Renderer() {
        this.rules = r({}, s)
    }
    var r = n(0).assign
      , a = n(0).unescapeAll
      , i = n(0).escapeHtml
      , s = {};
    s.code_inline = function(e, t, n, r, a) {
        var s = e[t];
        return "<code" + a.renderAttrs(s) + ">" + i(e[t].content) + "</code>"
    }
    ,
    s.code_block = function(e, t, n, r, a) {
        var s = e[t];
        return "<pre" + a.renderAttrs(s) + "><code>" + i(e[t].content) + "</code></pre>\n"
    }
    ,
    s.fence = function(e, t, n, r, s) {
        var o, l, c, d, u = e[t], p = u.info ? a(u.info).trim() : "", m = "";
        return p && (m = p.split(/\s+/g)[0]),
        o = n.highlight ? n.highlight(u.content, m) || i(u.content) : i(u.content),
        0 === o.indexOf("<pre") ? o + "\n" : p ? (l = u.attrIndex("class"),
        c = u.attrs ? u.attrs.slice() : [],
        l < 0 ? c.push(["class", n.langPrefix + m]) : c[l][1] += " " + n.langPrefix + m,
        d = {
            attrs: c
        },
        "<pre><code" + s.renderAttrs(d) + ">" + o + "</code></pre>\n") : "<pre><code" + s.renderAttrs(u) + ">" + o + "</code></pre>\n"
    }
    ,
    s.image = function(e, t, n, r, a) {
        var i = e[t];
        return i.attrs[i.attrIndex("alt")][1] = a.renderInlineAsText(i.children, n, r),
        a.renderToken(e, t, n)
    }
    ,
    s.hardbreak = function(e, t, n) {
        return n.xhtmlOut ? "<br />\n" : "<br>\n"
    }
    ,
    s.softbreak = function(e, t, n) {
        return n.breaks ? n.xhtmlOut ? "<br />\n" : "<br>\n" : "\n"
    }
    ,
    s.text = function(e, t) {
        return i(e[t].content)
    }
    ,
    s.html_block = function(e, t) {
        return e[t].content
    }
    ,
    s.html_inline = function(e, t) {
        return e[t].content
    }
    ,
    Renderer.prototype.renderAttrs = function(e) {
        var t, n, r;
        if (!e.attrs)
            return "";
        for (r = "",
        t = 0,
        n = e.attrs.length; t < n; t++)
            r += " " + i(e.attrs[t][0]) + '="' + i(e.attrs[t][1]) + '"';
        return r
    }
    ,
    Renderer.prototype.renderToken = function(e, t, n) {
        var r, a = "", i = !1, s = e[t];
        return s.hidden ? "" : (s.block && -1 !== s.nesting && t && e[t - 1].hidden && (a += "\n"),
        a += (-1 === s.nesting ? "</" : "<") + s.tag,
        a += this.renderAttrs(s),
        0 === s.nesting && n.xhtmlOut && (a += " /"),
        s.block && (i = !0,
        1 === s.nesting && t + 1 < e.length && (r = e[t + 1],
        "inline" === r.type || r.hidden ? i = !1 : -1 === r.nesting && r.tag === s.tag && (i = !1))),
        a += i ? ">\n" : ">")
    }
    ,
    Renderer.prototype.renderInline = function(e, t, n) {
        for (var r, a = "", i = this.rules, s = 0, o = e.length; s < o; s++)
            r = e[s].type,
            void 0 !== i[r] ? a += i[r](e, s, t, n, this) : a += this.renderToken(e, s, t);
        return a
    }
    ,
    Renderer.prototype.renderInlineAsText = function(e, t, n) {
        for (var r = "", a = 0, i = e.length; a < i; a++)
            "text" === e[a].type ? r += e[a].content : "image" === e[a].type && (r += this.renderInlineAsText(e[a].children, t, n));
        return r
    }
    ,
    Renderer.prototype.render = function(e, t, n) {
        var r, a, i, s = "", o = this.rules;
        for (r = 0,
        a = e.length; r < a; r++)
            i = e[r].type,
            "inline" === i ? s += this.renderInline(e[r].children, t, n) : void 0 !== o[i] ? s += o[e[r].type](e, r, t, n, this) : s += this.renderToken(e, r, t, n);
        return s
    }
    ,
    e.exports = Renderer
}
, function(e, t, n) {
    "use strict";
    var r = n(0).isSpace;
    e.exports = function(e, t, n, a) {
        var i, s, o, l, c, d, u, p, m, g, _, b, f, h, v, E, y, S, C, x, w = e.lineMax, T = e.bMarks[t] + e.tShift[t], N = e.eMarks[t];
        if (e.sCount[t] - e.blkIndent >= 4)
            return !1;
        if (62 !== e.src.charCodeAt(T++))
            return !1;
        if (a)
            return !0;
        for (l = g = e.sCount[t] + T - (e.bMarks[t] + e.tShift[t]),
        32 === e.src.charCodeAt(T) ? (T++,
        l++,
        g++,
        i = !1,
        y = !0) : 9 === e.src.charCodeAt(T) ? (y = !0,
        (e.bsCount[t] + g) % 4 == 3 ? (T++,
        l++,
        g++,
        i = !1) : i = !0) : y = !1,
        _ = [e.bMarks[t]],
        e.bMarks[t] = T; T < N && (s = e.src.charCodeAt(T),
        r(s)); )
            9 === s ? g += 4 - (g + e.bsCount[t] + (i ? 1 : 0)) % 4 : g++,
            T++;
        for (b = [e.bsCount[t]],
        e.bsCount[t] = e.sCount[t] + 1 + (y ? 1 : 0),
        u = T >= N,
        v = [e.sCount[t]],
        e.sCount[t] = g - l,
        E = [e.tShift[t]],
        e.tShift[t] = T - e.bMarks[t],
        C = e.md.block.ruler.getRules("blockquote"),
        h = e.parentType,
        e.parentType = "blockquote",
        m = t + 1; m < n && (c = e.sCount[m] < e.blkIndent,
        T = e.bMarks[m] + e.tShift[m],
        N = e.eMarks[m],
        !(T >= N)); m++)
            if (62 !== e.src.charCodeAt(T++) || c) {
                if (u)
                    break;
                for (S = !1,
                o = 0,
                d = C.length; o < d; o++)
                    if (C[o](e, m, n, !0)) {
                        S = !0;
                        break
                    }
                if (S) {
                    e.lineMax = m,
                    0 !== e.blkIndent && (_.push(e.bMarks[m]),
                    b.push(e.bsCount[m]),
                    E.push(e.tShift[m]),
                    v.push(e.sCount[m]),
                    e.sCount[m] -= e.blkIndent);
                    break
                }
                if (c)
                    break;
                _.push(e.bMarks[m]),
                b.push(e.bsCount[m]),
                E.push(e.tShift[m]),
                v.push(e.sCount[m]),
                e.sCount[m] = -1
            } else {
                for (l = g = e.sCount[m] + T - (e.bMarks[m] + e.tShift[m]),
                32 === e.src.charCodeAt(T) ? (T++,
                l++,
                g++,
                i = !1,
                y = !0) : 9 === e.src.charCodeAt(T) ? (y = !0,
                (e.bsCount[m] + g) % 4 == 3 ? (T++,
                l++,
                g++,
                i = !1) : i = !0) : y = !1,
                _.push(e.bMarks[m]),
                e.bMarks[m] = T; T < N && (s = e.src.charCodeAt(T),
                r(s)); )
                    9 === s ? g += 4 - (g + e.bsCount[m] + (i ? 1 : 0)) % 4 : g++,
                    T++;
                u = T >= N,
                b.push(e.bsCount[m]),
                e.bsCount[m] = e.sCount[m] + 1 + (y ? 1 : 0),
                v.push(e.sCount[m]),
                e.sCount[m] = g - l,
                E.push(e.tShift[m]),
                e.tShift[m] = T - e.bMarks[m]
            }
        for (f = e.blkIndent,
        e.blkIndent = 0,
        x = e.push("blockquote_open", "blockquote", 1),
        x.markup = ">",
        x.map = p = [t, 0],
        e.md.block.tokenize(e, t, m),
        x = e.push("blockquote_close", "blockquote", -1),
        x.markup = ">",
        e.lineMax = w,
        e.parentType = h,
        p[1] = e.line,
        o = 0; o < E.length; o++)
            e.bMarks[o + t] = _[o],
            e.tShift[o + t] = E[o],
            e.sCount[o + t] = v[o],
            e.bsCount[o + t] = b[o];
        return e.blkIndent = f,
        !0
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r, a, i;
        if (e.sCount[t] - e.blkIndent < 4)
            return !1;
        for (a = r = t + 1; r < n; )
            if (e.isEmpty(r))
                r++;
            else {
                if (!(e.sCount[r] - e.blkIndent >= 4))
                    break;
                r++,
                a = r
            }
        return e.line = a,
        i = e.push("code_block", "code", 0),
        i.content = e.getLines(t, a, 4 + e.blkIndent, !0),
        i.map = [t, e.line],
        !0
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n, r) {
        var a, i, s, o, l, c, d, u = !1, p = e.bMarks[t] + e.tShift[t], m = e.eMarks[t];
        if (e.sCount[t] - e.blkIndent >= 4)
            return !1;
        if (p + 3 > m)
            return !1;
        if (126 !== (a = e.src.charCodeAt(p)) && 96 !== a)
            return !1;
        if (l = p,
        p = e.skipChars(p, a),
        (i = p - l) < 3)
            return !1;
        if (d = e.src.slice(l, p),
        s = e.src.slice(p, m),
        s.indexOf(String.fromCharCode(a)) >= 0)
            return !1;
        if (r)
            return !0;
        for (o = t; !(++o >= n) && (p = l = e.bMarks[o] + e.tShift[o],
        m = e.eMarks[o],
        !(p < m && e.sCount[o] < e.blkIndent)); )
            if (e.src.charCodeAt(p) === a && !(e.sCount[o] - e.blkIndent >= 4 || (p = e.skipChars(p, a)) - l < i || (p = e.skipSpaces(p)) < m)) {
                u = !0;
                break
            }
        return i = e.sCount[t],
        e.line = o + (u ? 1 : 0),
        c = e.push("fence", "code", 0),
        c.info = s,
        c.content = e.getLines(t + 1, o, i, !0),
        c.markup = d,
        c.map = [t, e.line],
        !0
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0).isSpace;
    e.exports = function(e, t, n, a) {
        var i, s, o, l, c = e.bMarks[t] + e.tShift[t], d = e.eMarks[t];
        if (e.sCount[t] - e.blkIndent >= 4)
            return !1;
        if (35 !== (i = e.src.charCodeAt(c)) || c >= d)
            return !1;
        for (s = 1,
        i = e.src.charCodeAt(++c); 35 === i && c < d && s <= 6; )
            s++,
            i = e.src.charCodeAt(++c);
        return !(s > 6 || c < d && !r(i)) && (!!a || (d = e.skipSpacesBack(d, c),
        o = e.skipCharsBack(d, 35, c),
        o > c && r(e.src.charCodeAt(o - 1)) && (d = o),
        e.line = t + 1,
        l = e.push("heading_open", "h" + String(s), 1),
        l.markup = "########".slice(0, s),
        l.map = [t, e.line],
        l = e.push("inline", "", 0),
        l.content = e.src.slice(c, d).trim(),
        l.map = [t, e.line],
        l.children = [],
        l = e.push("heading_close", "h" + String(s), -1),
        l.markup = "########".slice(0, s),
        !0))
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0).isSpace;
    e.exports = function(e, t, n, a) {
        var i, s, o, l, c = e.bMarks[t] + e.tShift[t], d = e.eMarks[t];
        if (e.sCount[t] - e.blkIndent >= 4)
            return !1;
        if (42 !== (i = e.src.charCodeAt(c++)) && 45 !== i && 95 !== i)
            return !1;
        for (s = 1; c < d; ) {
            if ((o = e.src.charCodeAt(c++)) !== i && !r(o))
                return !1;
            o === i && s++
        }
        return !(s < 3) && (!!a || (e.line = t + 1,
        l = e.push("hr", "hr", 0),
        l.map = [t, e.line],
        l.markup = Array(s + 1).join(String.fromCharCode(i)),
        !0))
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(203)
      , a = n(5).HTML_OPEN_CLOSE_TAG_RE
      , i = [[/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, !0], [/^<!--/, /-->/, !0], [/^<\?/, /\?>/, !0], [/^<![A-Z]/, />/, !0], [/^<!\[CDATA\[/, /\]\]>/, !0], [new RegExp("^</?(" + r.join("|") + ")(?=(\\s|/?>|$))","i"), /^$/, !0], [new RegExp(a.source + "\\s*$"), /^$/, !1]];
    e.exports = function(e, t, n, r) {
        var a, s, o, l, c = e.bMarks[t] + e.tShift[t], d = e.eMarks[t];
        if (e.sCount[t] - e.blkIndent >= 4)
            return !1;
        if (!e.md.options.html)
            return !1;
        if (60 !== e.src.charCodeAt(c))
            return !1;
        for (l = e.src.slice(c, d),
        a = 0; a < i.length && !i[a][0].test(l); a++)
            ;
        if (a === i.length)
            return !1;
        if (r)
            return i[a][2];
        if (s = t + 1,
        !i[a][1].test(l))
            for (; s < n && !(e.sCount[s] < e.blkIndent); s++)
                if (c = e.bMarks[s] + e.tShift[s],
                d = e.eMarks[s],
                l = e.src.slice(c, d),
                i[a][1].test(l)) {
                    0 !== l.length && s++;
                    break
                }
        return e.line = s,
        o = e.push("html_block", "", 0),
        o.map = [t, s],
        o.content = e.getLines(t, s, e.blkIndent, !0),
        !0
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var r, a, i, s, o, l, c, d, u, p, m = t + 1, g = e.md.block.ruler.getRules("paragraph");
        if (e.sCount[t] - e.blkIndent >= 4)
            return !1;
        for (p = e.parentType,
        e.parentType = "paragraph"; m < n && !e.isEmpty(m); m++)
            if (!(e.sCount[m] - e.blkIndent > 3)) {
                if (e.sCount[m] >= e.blkIndent && (l = e.bMarks[m] + e.tShift[m],
                c = e.eMarks[m],
                l < c && (45 === (u = e.src.charCodeAt(l)) || 61 === u) && (l = e.skipChars(l, u),
                (l = e.skipSpaces(l)) >= c))) {
                    d = 61 === u ? 1 : 2;
                    break
                }
                if (!(e.sCount[m] < 0)) {
                    for (a = !1,
                    i = 0,
                    s = g.length; i < s; i++)
                        if (g[i](e, m, n, !0)) {
                            a = !0;
                            break
                        }
                    if (a)
                        break
                }
            }
        return !!d && (r = e.getLines(t, m, e.blkIndent, !1).trim(),
        e.line = m + 1,
        o = e.push("heading_open", "h" + String(d), 1),
        o.markup = String.fromCharCode(u),
        o.map = [t, e.line],
        o = e.push("inline", "", 0),
        o.content = r,
        o.map = [t, e.line - 1],
        o.children = [],
        o = e.push("heading_close", "h" + String(d), -1),
        o.markup = String.fromCharCode(u),
        e.parentType = p,
        !0)
    }
}
, function(e, t, n) {
    "use strict";
    function skipBulletListMarker(e, t) {
        var n, a, i, s;
        return a = e.bMarks[t] + e.tShift[t],
        i = e.eMarks[t],
        n = e.src.charCodeAt(a++),
        42 !== n && 45 !== n && 43 !== n ? -1 : a < i && (s = e.src.charCodeAt(a),
        !r(s)) ? -1 : a
    }
    function skipOrderedListMarker(e, t) {
        var n, a = e.bMarks[t] + e.tShift[t], i = a, s = e.eMarks[t];
        if (i + 1 >= s)
            return -1;
        if ((n = e.src.charCodeAt(i++)) < 48 || n > 57)
            return -1;
        for (; ; ) {
            if (i >= s)
                return -1;
            n = e.src.charCodeAt(i++);
            {
                if (!(n >= 48 && n <= 57)) {
                    if (41 === n || 46 === n)
                        break;
                    return -1
                }
                if (i - a >= 10)
                    return -1
            }
        }
        return i < s && (n = e.src.charCodeAt(i),
        !r(n)) ? -1 : i
    }
    function markTightParagraphs(e, t) {
        var n, r, a = e.level + 2;
        for (n = t + 2,
        r = e.tokens.length - 2; n < r; n++)
            e.tokens[n].level === a && "paragraph_open" === e.tokens[n].type && (e.tokens[n + 2].hidden = !0,
            e.tokens[n].hidden = !0,
            n += 2)
    }
    var r = n(0).isSpace;
    e.exports = function(e, t, n, a) {
        var i, s, o, l, c, d, u, p, m, g, _, b, f, h, v, E, y, S, C, x, w, T, N, D, M, A, O, k, I = !1, R = !0;
        if (e.sCount[t] - e.blkIndent >= 4)
            return !1;
        if (a && "paragraph" === e.parentType && e.tShift[t] >= e.blkIndent && (I = !0),
        (N = skipOrderedListMarker(e, t)) >= 0) {
            if (u = !0,
            M = e.bMarks[t] + e.tShift[t],
            f = Number(e.src.substr(M, N - M - 1)),
            I && 1 !== f)
                return !1
        } else {
            if (!((N = skipBulletListMarker(e, t)) >= 0))
                return !1;
            u = !1
        }
        if (I && e.skipSpaces(N) >= e.eMarks[t])
            return !1;
        if (b = e.src.charCodeAt(N - 1),
        a)
            return !0;
        for (_ = e.tokens.length,
        u ? (k = e.push("ordered_list_open", "ol", 1),
        1 !== f && (k.attrs = [["start", f]])) : k = e.push("bullet_list_open", "ul", 1),
        k.map = g = [t, 0],
        k.markup = String.fromCharCode(b),
        v = t,
        D = !1,
        O = e.md.block.ruler.getRules("list"),
        C = e.parentType,
        e.parentType = "list"; v < n; ) {
            for (T = N,
            h = e.eMarks[v],
            d = E = e.sCount[v] + N - (e.bMarks[t] + e.tShift[t]); T < h && (i = e.src.charCodeAt(T),
            r(i)); )
                9 === i ? E += 4 - (E + e.bsCount[v]) % 4 : E++,
                T++;
            if (s = T,
            c = s >= h ? 1 : E - d,
            c > 4 && (c = 1),
            l = d + c,
            k = e.push("list_item_open", "li", 1),
            k.markup = String.fromCharCode(b),
            k.map = p = [t, 0],
            y = e.blkIndent,
            w = e.tight,
            x = e.tShift[t],
            S = e.sCount[t],
            e.blkIndent = l,
            e.tight = !0,
            e.tShift[t] = s - e.bMarks[t],
            e.sCount[t] = E,
            s >= h && e.isEmpty(t + 1) ? e.line = Math.min(e.line + 2, n) : e.md.block.tokenize(e, t, n, !0),
            e.tight && !D || (R = !1),
            D = e.line - t > 1 && e.isEmpty(e.line - 1),
            e.blkIndent = y,
            e.tShift[t] = x,
            e.sCount[t] = S,
            e.tight = w,
            k = e.push("list_item_close", "li", -1),
            k.markup = String.fromCharCode(b),
            v = t = e.line,
            p[1] = v,
            s = e.bMarks[t],
            v >= n)
                break;
            if (e.sCount[v] < e.blkIndent)
                break;
            for (A = !1,
            o = 0,
            m = O.length; o < m; o++)
                if (O[o](e, v, n, !0)) {
                    A = !0;
                    break
                }
            if (A)
                break;
            if (u) {
                if ((N = skipOrderedListMarker(e, v)) < 0)
                    break
            } else if ((N = skipBulletListMarker(e, v)) < 0)
                break;
            if (b !== e.src.charCodeAt(N - 1))
                break
        }
        return k = u ? e.push("ordered_list_close", "ol", -1) : e.push("bullet_list_close", "ul", -1),
        k.markup = String.fromCharCode(b),
        g[1] = v,
        e.line = v,
        e.parentType = C,
        R && markTightParagraphs(e, _),
        !0
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        var n, r, a, i, s, o, l = t + 1, c = e.md.block.ruler.getRules("paragraph"), d = e.lineMax;
        for (o = e.parentType,
        e.parentType = "paragraph"; l < d && !e.isEmpty(l); l++)
            if (!(e.sCount[l] - e.blkIndent > 3 || e.sCount[l] < 0)) {
                for (r = !1,
                a = 0,
                i = c.length; a < i; a++)
                    if (c[a](e, l, d, !0)) {
                        r = !0;
                        break
                    }
                if (r)
                    break
            }
        return n = e.getLines(t, l, e.blkIndent, !1).trim(),
        e.line = l,
        s = e.push("paragraph_open", "p", 1),
        s.map = [t, e.line],
        s = e.push("inline", "", 0),
        s.content = n,
        s.map = [t, e.line],
        s.children = [],
        s = e.push("paragraph_close", "p", -1),
        e.parentType = o,
        !0
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0).normalizeReference
      , a = n(0).isSpace;
    e.exports = function(e, t, n, i) {
        var s, o, l, c, d, u, p, m, g, _, b, f, h, v, E, y, S = 0, C = e.bMarks[t] + e.tShift[t], x = e.eMarks[t], w = t + 1;
        if (e.sCount[t] - e.blkIndent >= 4)
            return !1;
        if (91 !== e.src.charCodeAt(C))
            return !1;
        for (; ++C < x; )
            if (93 === e.src.charCodeAt(C) && 92 !== e.src.charCodeAt(C - 1)) {
                if (C + 1 === x)
                    return !1;
                if (58 !== e.src.charCodeAt(C + 1))
                    return !1;
                break
            }
        for (c = e.lineMax,
        E = e.md.block.ruler.getRules("reference"),
        _ = e.parentType,
        e.parentType = "reference"; w < c && !e.isEmpty(w); w++)
            if (!(e.sCount[w] - e.blkIndent > 3 || e.sCount[w] < 0)) {
                for (v = !1,
                u = 0,
                p = E.length; u < p; u++)
                    if (E[u](e, w, c, !0)) {
                        v = !0;
                        break
                    }
                if (v)
                    break
            }
        for (h = e.getLines(t, w, e.blkIndent, !1).trim(),
        x = h.length,
        C = 1; C < x; C++) {
            if (91 === (s = h.charCodeAt(C)))
                return !1;
            if (93 === s) {
                g = C;
                break
            }
            10 === s ? S++ : 92 === s && ++C < x && 10 === h.charCodeAt(C) && S++
        }
        if (g < 0 || 58 !== h.charCodeAt(g + 1))
            return !1;
        for (C = g + 2; C < x; C++)
            if (10 === (s = h.charCodeAt(C)))
                S++;
            else if (!a(s))
                break;
        if (b = e.md.helpers.parseLinkDestination(h, C, x),
        !b.ok)
            return !1;
        if (d = e.md.normalizeLink(b.str),
        !e.md.validateLink(d))
            return !1;
        for (C = b.pos,
        S += b.lines,
        o = C,
        l = S,
        f = C; C < x; C++)
            if (10 === (s = h.charCodeAt(C)))
                S++;
            else if (!a(s))
                break;
        for (b = e.md.helpers.parseLinkTitle(h, C, x),
        C < x && f !== C && b.ok ? (y = b.str,
        C = b.pos,
        S += b.lines) : (y = "",
        C = o,
        S = l); C < x && (s = h.charCodeAt(C),
        a(s)); )
            C++;
        if (C < x && 10 !== h.charCodeAt(C) && y)
            for (y = "",
            C = o,
            S = l; C < x && (s = h.charCodeAt(C),
            a(s)); )
                C++;
        return !(C < x && 10 !== h.charCodeAt(C)) && (!!(m = r(h.slice(1, g))) && (!!i || (void 0 === e.env.references && (e.env.references = {}),
        void 0 === e.env.references[m] && (e.env.references[m] = {
            title: y,
            href: d
        }),
        e.parentType = _,
        e.line = t + S + 1,
        !0)))
    }
}
, function(e, t, n) {
    "use strict";
    function StateBlock(e, t, n, r) {
        var i, s, o, l, c, d, u, p;
        for (this.src = e,
        this.md = t,
        this.env = n,
        this.tokens = r,
        this.bMarks = [],
        this.eMarks = [],
        this.tShift = [],
        this.sCount = [],
        this.bsCount = [],
        this.blkIndent = 0,
        this.line = 0,
        this.lineMax = 0,
        this.tight = !1,
        this.ddIndent = -1,
        this.parentType = "root",
        this.level = 0,
        this.result = "",
        s = this.src,
        p = !1,
        o = l = d = u = 0,
        c = s.length; l < c; l++) {
            if (i = s.charCodeAt(l),
            !p) {
                if (a(i)) {
                    d++,
                    9 === i ? u += 4 - u % 4 : u++;
                    continue
                }
                p = !0
            }
            10 !== i && l !== c - 1 || (10 !== i && l++,
            this.bMarks.push(o),
            this.eMarks.push(l),
            this.tShift.push(d),
            this.sCount.push(u),
            this.bsCount.push(0),
            p = !1,
            d = 0,
            u = 0,
            o = l + 1)
        }
        this.bMarks.push(s.length),
        this.eMarks.push(s.length),
        this.tShift.push(0),
        this.sCount.push(0),
        this.bsCount.push(0),
        this.lineMax = this.bMarks.length - 1
    }
    var r = n(2)
      , a = n(0).isSpace;
    StateBlock.prototype.push = function(e, t, n) {
        var a = new r(e,t,n);
        return a.block = !0,
        n < 0 && this.level--,
        a.level = this.level,
        n > 0 && this.level++,
        this.tokens.push(a),
        a
    }
    ,
    StateBlock.prototype.isEmpty = function(e) {
        return this.bMarks[e] + this.tShift[e] >= this.eMarks[e]
    }
    ,
    StateBlock.prototype.skipEmptyLines = function(e) {
        for (var t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++)
            ;
        return e
    }
    ,
    StateBlock.prototype.skipSpaces = function(e) {
        for (var t, n = this.src.length; e < n && (t = this.src.charCodeAt(e),
        a(t)); e++)
            ;
        return e
    }
    ,
    StateBlock.prototype.skipSpacesBack = function(e, t) {
        if (e <= t)
            return e;
        for (; e > t; )
            if (!a(this.src.charCodeAt(--e)))
                return e + 1;
        return e
    }
    ,
    StateBlock.prototype.skipChars = function(e, t) {
        for (var n = this.src.length; e < n && this.src.charCodeAt(e) === t; e++)
            ;
        return e
    }
    ,
    StateBlock.prototype.skipCharsBack = function(e, t, n) {
        if (e <= n)
            return e;
        for (; e > n; )
            if (t !== this.src.charCodeAt(--e))
                return e + 1;
        return e
    }
    ,
    StateBlock.prototype.getLines = function(e, t, n, r) {
        var i, s, o, l, c, d, u, p = e;
        if (e >= t)
            return "";
        for (d = new Array(t - e),
        i = 0; p < t; p++,
        i++) {
            for (s = 0,
            u = l = this.bMarks[p],
            c = p + 1 < t || r ? this.eMarks[p] + 1 : this.eMarks[p]; l < c && s < n; ) {
                if (o = this.src.charCodeAt(l),
                a(o))
                    9 === o ? s += 4 - (s + this.bsCount[p]) % 4 : s++;
                else {
                    if (!(l - u < this.tShift[p]))
                        break;
                    s++
                }
                l++
            }
            d[i] = s > n ? new Array(s - n + 1).join(" ") + this.src.slice(l, c) : this.src.slice(l, c)
        }
        return d.join("")
    }
    ,
    StateBlock.prototype.Token = r,
    e.exports = StateBlock
}
, function(e, t, n) {
    "use strict";
    function getLine(e, t) {
        var n = e.bMarks[t] + e.blkIndent
          , r = e.eMarks[t];
        return e.src.substr(n, r - n)
    }
    function escapedSplit(e) {
        var t, n = [], r = 0, a = e.length, i = 0, s = 0, o = !1, l = 0;
        for (t = e.charCodeAt(r); r < a; )
            96 === t ? o ? (o = !1,
            l = r) : i % 2 == 0 && (o = !0,
            l = r) : 124 !== t || i % 2 != 0 || o || (n.push(e.substring(s, r)),
            s = r + 1),
            92 === t ? i++ : i = 0,
            r++,
            r === a && o && (o = !1,
            r = l + 1),
            t = e.charCodeAt(r);
        return n.push(e.substring(s)),
        n
    }
    var r = n(0).isSpace;
    e.exports = function(e, t, n, a) {
        var i, s, o, l, c, d, u, p, m, g, _, b;
        if (t + 2 > n)
            return !1;
        if (c = t + 1,
        e.sCount[c] < e.blkIndent)
            return !1;
        if (e.sCount[c] - e.blkIndent >= 4)
            return !1;
        if ((o = e.bMarks[c] + e.tShift[c]) >= e.eMarks[c])
            return !1;
        if (124 !== (i = e.src.charCodeAt(o++)) && 45 !== i && 58 !== i)
            return !1;
        for (; o < e.eMarks[c]; ) {
            if (124 !== (i = e.src.charCodeAt(o)) && 45 !== i && 58 !== i && !r(i))
                return !1;
            o++
        }
        for (s = getLine(e, t + 1),
        d = s.split("|"),
        m = [],
        l = 0; l < d.length; l++) {
            if (!(g = d[l].trim())) {
                if (0 === l || l === d.length - 1)
                    continue;
                return !1
            }
            if (!/^:?-+:?$/.test(g))
                return !1;
            58 === g.charCodeAt(g.length - 1) ? m.push(58 === g.charCodeAt(0) ? "center" : "right") : 58 === g.charCodeAt(0) ? m.push("left") : m.push("")
        }
        if (s = getLine(e, t).trim(),
        -1 === s.indexOf("|"))
            return !1;
        if (e.sCount[t] - e.blkIndent >= 4)
            return !1;
        if (d = escapedSplit(s.replace(/^\||\|$/g, "")),
        (u = d.length) > m.length)
            return !1;
        if (a)
            return !0;
        for (p = e.push("table_open", "table", 1),
        p.map = _ = [t, 0],
        p = e.push("thead_open", "thead", 1),
        p.map = [t, t + 1],
        p = e.push("tr_open", "tr", 1),
        p.map = [t, t + 1],
        l = 0; l < d.length; l++)
            p = e.push("th_open", "th", 1),
            p.map = [t, t + 1],
            m[l] && (p.attrs = [["style", "text-align:" + m[l]]]),
            p = e.push("inline", "", 0),
            p.content = d[l].trim(),
            p.map = [t, t + 1],
            p.children = [],
            p = e.push("th_close", "th", -1);
        for (p = e.push("tr_close", "tr", -1),
        p = e.push("thead_close", "thead", -1),
        p = e.push("tbody_open", "tbody", 1),
        p.map = b = [t + 2, 0],
        c = t + 2; c < n && !(e.sCount[c] < e.blkIndent) && (s = getLine(e, c).trim(),
        -1 !== s.indexOf("|")) && !(e.sCount[c] - e.blkIndent >= 4); c++) {
            for (d = escapedSplit(s.replace(/^\||\|$/g, "")),
            p = e.push("tr_open", "tr", 1),
            l = 0; l < u; l++)
                p = e.push("td_open", "td", 1),
                m[l] && (p.attrs = [["style", "text-align:" + m[l]]]),
                p = e.push("inline", "", 0),
                p.content = d[l] ? d[l].trim() : "",
                p.children = [],
                p = e.push("td_close", "td", -1);
            p = e.push("tr_close", "tr", -1)
        }
        return p = e.push("tbody_close", "tbody", -1),
        p = e.push("table_close", "table", -1),
        _[1] = b[1] = c,
        e.line = c,
        !0
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t;
        e.inlineMode ? (t = new e.Token("inline","",0),
        t.content = e.src,
        t.map = [0, 1],
        t.children = [],
        e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens)
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t, n, r, a = e.tokens;
        for (n = 0,
        r = a.length; n < r; n++)
            t = a[n],
            "inline" === t.type && e.md.inline.parse(t.content, e.md, e.env, t.children)
    }
}
, function(e, t, n) {
    "use strict";
    function isLinkOpen(e) {
        return /^<a[>\s]/i.test(e)
    }
    function isLinkClose(e) {
        return /^<\/a\s*>/i.test(e)
    }
    var r = n(0).arrayReplaceAt;
    e.exports = function(e) {
        var t, n, a, i, s, o, l, c, d, u, p, m, g, _, b, f, h, v = e.tokens;
        if (e.md.options.linkify)
            for (n = 0,
            a = v.length; n < a; n++)
                if ("inline" === v[n].type && e.md.linkify.pretest(v[n].content))
                    for (i = v[n].children,
                    g = 0,
                    t = i.length - 1; t >= 0; t--)
                        if (o = i[t],
                        "link_close" !== o.type) {
                            if ("html_inline" === o.type && (isLinkOpen(o.content) && g > 0 && g--,
                            isLinkClose(o.content) && g++),
                            !(g > 0) && "text" === o.type && e.md.linkify.test(o.content)) {
                                for (d = o.content,
                                h = e.md.linkify.match(d),
                                l = [],
                                m = o.level,
                                p = 0,
                                c = 0; c < h.length; c++)
                                    _ = h[c].url,
                                    b = e.md.normalizeLink(_),
                                    e.md.validateLink(b) && (f = h[c].text,
                                    f = h[c].schema ? "mailto:" !== h[c].schema || /^mailto:/i.test(f) ? e.md.normalizeLinkText(f) : e.md.normalizeLinkText("mailto:" + f).replace(/^mailto:/, "") : e.md.normalizeLinkText("http://" + f).replace(/^http:\/\//, ""),
                                    u = h[c].index,
                                    u > p && (s = new e.Token("text","",0),
                                    s.content = d.slice(p, u),
                                    s.level = m,
                                    l.push(s)),
                                    s = new e.Token("link_open","a",1),
                                    s.attrs = [["href", b]],
                                    s.level = m++,
                                    s.markup = "linkify",
                                    s.info = "auto",
                                    l.push(s),
                                    s = new e.Token("text","",0),
                                    s.content = f,
                                    s.level = m,
                                    l.push(s),
                                    s = new e.Token("link_close","a",-1),
                                    s.level = --m,
                                    s.markup = "linkify",
                                    s.info = "auto",
                                    l.push(s),
                                    p = h[c].lastIndex);
                                p < d.length && (s = new e.Token("text","",0),
                                s.content = d.slice(p),
                                s.level = m,
                                l.push(s)),
                                v[n].children = i = r(i, t, l)
                            }
                        } else
                            for (t--; i[t].level !== o.level && "link_open" !== i[t].type; )
                                t--
    }
}
, function(e, t, n) {
    "use strict";
    var r = /\r[\n\u0085]?|[\u2424\u2028\u0085]/g
      , a = /\u0000/g;
    e.exports = function(e) {
        var t;
        t = e.src.replace(r, "\n"),
        t = t.replace(a, "�"),
        e.src = t
    }
}
, function(e, t, n) {
    "use strict";
    function replaceFn(e, t) {
        return s[t.toLowerCase()]
    }
    function replace_scoped(e) {
        var t, n, r = 0;
        for (t = e.length - 1; t >= 0; t--)
            n = e[t],
            "text" !== n.type || r || (n.content = n.content.replace(i, replaceFn)),
            "link_open" === n.type && "auto" === n.info && r--,
            "link_close" === n.type && "auto" === n.info && r++
    }
    function replace_rare(e) {
        var t, n, a = 0;
        for (t = e.length - 1; t >= 0; t--)
            n = e[t],
            "text" !== n.type || a || r.test(n.content) && (n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/gm, "$1—$2").replace(/(^|\s)--(\s|$)/gm, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm, "$1–$2")),
            "link_open" === n.type && "auto" === n.info && a--,
            "link_close" === n.type && "auto" === n.info && a++
    }
    var r = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/
      , a = /\((c|tm|r|p)\)/i
      , i = /\((c|tm|r|p)\)/gi
      , s = {
        c: "©",
        r: "®",
        p: "§",
        tm: "™"
    };
    e.exports = function(e) {
        var t;
        if (e.md.options.typographer)
            for (t = e.tokens.length - 1; t >= 0; t--)
                "inline" === e.tokens[t].type && (a.test(e.tokens[t].content) && replace_scoped(e.tokens[t].children),
                r.test(e.tokens[t].content) && replace_rare(e.tokens[t].children))
    }
}
, function(e, t, n) {
    "use strict";
    function replaceAt(e, t, n) {
        return e.substr(0, t) + n + e.substr(t + 1)
    }
    function process_inlines(e, t) {
        var n, s, c, d, u, p, m, g, _, b, f, h, v, E, y, S, C, x, w, T, N;
        for (w = [],
        n = 0; n < e.length; n++) {
            for (s = e[n],
            m = e[n].level,
            C = w.length - 1; C >= 0 && !(w[C].level <= m); C--)
                ;
            if (w.length = C + 1,
            "text" === s.type) {
                c = s.content,
                u = 0,
                p = c.length;
                e: for (; u < p && (o.lastIndex = u,
                d = o.exec(c)); ) {
                    if (y = S = !0,
                    u = d.index + 1,
                    x = "'" === d[0],
                    _ = 32,
                    d.index - 1 >= 0)
                        _ = c.charCodeAt(d.index - 1);
                    else
                        for (C = n - 1; C >= 0; C--)
                            if ("text" === e[C].type) {
                                _ = e[C].content.charCodeAt(e[C].content.length - 1);
                                break
                            }
                    if (b = 32,
                    u < p)
                        b = c.charCodeAt(u);
                    else
                        for (C = n + 1; C < e.length; C++)
                            if ("text" === e[C].type) {
                                b = e[C].content.charCodeAt(0);
                                break
                            }
                    if (f = i(_) || a(String.fromCharCode(_)),
                    h = i(b) || a(String.fromCharCode(b)),
                    v = r(_),
                    E = r(b),
                    E ? y = !1 : h && (v || f || (y = !1)),
                    v ? S = !1 : f && (E || h || (S = !1)),
                    34 === b && '"' === d[0] && _ >= 48 && _ <= 57 && (S = y = !1),
                    y && S && (y = !1,
                    S = h),
                    y || S) {
                        if (S)
                            for (C = w.length - 1; C >= 0 && (g = w[C],
                            !(w[C].level < m)); C--)
                                if (g.single === x && w[C].level === m) {
                                    g = w[C],
                                    x ? (T = t.md.options.quotes[2],
                                    N = t.md.options.quotes[3]) : (T = t.md.options.quotes[0],
                                    N = t.md.options.quotes[1]),
                                    s.content = replaceAt(s.content, d.index, N),
                                    e[g.token].content = replaceAt(e[g.token].content, g.pos, T),
                                    u += N.length - 1,
                                    g.token === n && (u += T.length - 1),
                                    c = s.content,
                                    p = c.length,
                                    w.length = C;
                                    continue e
                                }
                        y ? w.push({
                            token: n,
                            pos: d.index,
                            single: x,
                            level: m
                        }) : S && x && (s.content = replaceAt(s.content, d.index, l))
                    } else
                        x && (s.content = replaceAt(s.content, d.index, l))
                }
            }
        }
    }
    var r = n(0).isWhiteSpace
      , a = n(0).isPunctChar
      , i = n(0).isMdAsciiPunct
      , s = /['"]/
      , o = /['"]/g
      , l = "’";
    e.exports = function(e) {
        var t;
        if (e.md.options.typographer)
            for (t = e.tokens.length - 1; t >= 0; t--)
                "inline" === e.tokens[t].type && s.test(e.tokens[t].content) && process_inlines(e.tokens[t].children, e)
    }
}
, function(e, t, n) {
    "use strict";
    function StateCore(e, t, n) {
        this.src = e,
        this.env = n,
        this.tokens = [],
        this.inlineMode = !1,
        this.md = t
    }
    var r = n(2);
    StateCore.prototype.Token = r,
    e.exports = StateCore
}
, function(e, t, n) {
    "use strict";
    var r = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/
      , a = /^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;
    e.exports = function(e, t) {
        var n, i, s, o, l, c, d = e.pos;
        return 60 === e.src.charCodeAt(d) && (n = e.src.slice(d),
        !(n.indexOf(">") < 0) && (a.test(n) ? (i = n.match(a),
        o = i[0].slice(1, -1),
        l = e.md.normalizeLink(o),
        !!e.md.validateLink(l) && (t || (c = e.push("link_open", "a", 1),
        c.attrs = [["href", l]],
        c.markup = "autolink",
        c.info = "auto",
        c = e.push("text", "", 0),
        c.content = e.md.normalizeLinkText(o),
        c = e.push("link_close", "a", -1),
        c.markup = "autolink",
        c.info = "auto"),
        e.pos += i[0].length,
        !0)) : !!r.test(n) && (s = n.match(r),
        o = s[0].slice(1, -1),
        l = e.md.normalizeLink("mailto:" + o),
        !!e.md.validateLink(l) && (t || (c = e.push("link_open", "a", 1),
        c.attrs = [["href", l]],
        c.markup = "autolink",
        c.info = "auto",
        c = e.push("text", "", 0),
        c.content = e.md.normalizeLinkText(o),
        c = e.push("link_close", "a", -1),
        c.markup = "autolink",
        c.info = "auto"),
        e.pos += s[0].length,
        !0))))
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        var n, r, a, i, s, o, l = e.pos;
        if (96 !== e.src.charCodeAt(l))
            return !1;
        for (n = l,
        l++,
        r = e.posMax; l < r && 96 === e.src.charCodeAt(l); )
            l++;
        for (a = e.src.slice(n, l),
        i = s = l; -1 !== (i = e.src.indexOf("`", s)); ) {
            for (s = i + 1; s < r && 96 === e.src.charCodeAt(s); )
                s++;
            if (s - i === a.length)
                return t || (o = e.push("code_inline", "code", 0),
                o.markup = a,
                o.content = e.src.slice(l, i).replace(/[ \n]+/g, " ").trim()),
                e.pos = s,
                !0
        }
        return t || (e.pending += a),
        e.pos += a.length,
        !0
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t, n, r, a, i = e.delimiters, s = e.delimiters.length;
        for (t = 0; t < s; t++)
            if (r = i[t],
            r.close)
                for (n = t - r.jump - 1; n >= 0; ) {
                    if (a = i[n],
                    a.open && a.marker === r.marker && a.end < 0 && a.level === r.level) {
                        var o = (a.close || r.open) && void 0 !== a.length && void 0 !== r.length && (a.length + r.length) % 3 == 0;
                        if (!o) {
                            r.jump = t - n,
                            r.open = !1,
                            a.end = t,
                            a.jump = 0;
                            break
                        }
                    }
                    n -= a.jump + 1
                }
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(4)
      , a = n(0).has
      , i = n(0).isValidEntityCode
      , s = n(0).fromCodePoint
      , o = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i
      , l = /^&([a-z][a-z0-9]{1,31});/i;
    e.exports = function(e, t) {
        var n, c, d = e.pos, u = e.posMax;
        if (38 !== e.src.charCodeAt(d))
            return !1;
        if (d + 1 < u)
            if (35 === e.src.charCodeAt(d + 1)) {
                if (c = e.src.slice(d).match(o))
                    return t || (n = "x" === c[1][0].toLowerCase() ? parseInt(c[1].slice(1), 16) : parseInt(c[1], 10),
                    e.pending += s(i(n) ? n : 65533)),
                    e.pos += c[0].length,
                    !0
            } else if ((c = e.src.slice(d).match(l)) && a(r, c[1]))
                return t || (e.pending += r[c[1]]),
                e.pos += c[0].length,
                !0;
        return t || (e.pending += "&"),
        e.pos++,
        !0
    }
}
, function(e, t, n) {
    "use strict";
    for (var r = n(0).isSpace, a = [], i = 0; i < 256; i++)
        a.push(0);
    "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
        a[e.charCodeAt(0)] = 1
    }),
    e.exports = function(e, t) {
        var n, i = e.pos, s = e.posMax;
        if (92 !== e.src.charCodeAt(i))
            return !1;
        if (++i < s) {
            if ((n = e.src.charCodeAt(i)) < 256 && 0 !== a[n])
                return t || (e.pending += e.src[i]),
                e.pos += 2,
                !0;
            if (10 === n) {
                for (t || e.push("hardbreak", "br", 0),
                i++; i < s && (n = e.src.charCodeAt(i),
                r(n)); )
                    i++;
                return e.pos = i,
                !0
            }
        }
        return t || (e.pending += "\\"),
        e.pos++,
        !0
    }
}
, function(e, t, n) {
    "use strict";
    function isLetter(e) {
        var t = 32 | e;
        return t >= 97 && t <= 122
    }
    var r = n(5).HTML_TAG_RE;
    e.exports = function(e, t) {
        var n, a, i, s, o = e.pos;
        return !!e.md.options.html && (i = e.posMax,
        !(60 !== e.src.charCodeAt(o) || o + 2 >= i) && (!(33 !== (n = e.src.charCodeAt(o + 1)) && 63 !== n && 47 !== n && !isLetter(n)) && (!!(a = e.src.slice(o).match(r)) && (t || (s = e.push("html_inline", "", 0),
        s.content = e.src.slice(o, o + a[0].length)),
        e.pos += a[0].length,
        !0))))
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0).normalizeReference
      , a = n(0).isSpace;
    e.exports = function(e, t) {
        var n, i, s, o, l, c, d, u, p, m, g, _, b, f = "", h = e.pos, v = e.posMax;
        if (33 !== e.src.charCodeAt(e.pos))
            return !1;
        if (91 !== e.src.charCodeAt(e.pos + 1))
            return !1;
        if (c = e.pos + 2,
        (l = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1)) < 0)
            return !1;
        if ((d = l + 1) < v && 40 === e.src.charCodeAt(d)) {
            for (d++; d < v && (i = e.src.charCodeAt(d),
            a(i) || 10 === i); d++)
                ;
            if (d >= v)
                return !1;
            for (b = d,
            p = e.md.helpers.parseLinkDestination(e.src, d, e.posMax),
            p.ok && (f = e.md.normalizeLink(p.str),
            e.md.validateLink(f) ? d = p.pos : f = ""),
            b = d; d < v && (i = e.src.charCodeAt(d),
            a(i) || 10 === i); d++)
                ;
            if (p = e.md.helpers.parseLinkTitle(e.src, d, e.posMax),
            d < v && b !== d && p.ok)
                for (m = p.str,
                d = p.pos; d < v && (i = e.src.charCodeAt(d),
                a(i) || 10 === i); d++)
                    ;
            else
                m = "";
            if (d >= v || 41 !== e.src.charCodeAt(d))
                return e.pos = h,
                !1;
            d++
        } else {
            if (void 0 === e.env.references)
                return !1;
            if (d < v && 91 === e.src.charCodeAt(d) ? (b = d + 1,
            d = e.md.helpers.parseLinkLabel(e, d),
            d >= 0 ? o = e.src.slice(b, d++) : d = l + 1) : d = l + 1,
            o || (o = e.src.slice(c, l)),
            !(u = e.env.references[r(o)]))
                return e.pos = h,
                !1;
            f = u.href,
            m = u.title
        }
        return t || (s = e.src.slice(c, l),
        e.md.inline.parse(s, e.md, e.env, _ = []),
        g = e.push("image", "img", 0),
        g.attrs = n = [["src", f], ["alt", ""]],
        g.children = _,
        g.content = s,
        m && n.push(["title", m])),
        e.pos = d,
        e.posMax = v,
        !0
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0).normalizeReference
      , a = n(0).isSpace;
    e.exports = function(e, t) {
        var n, i, s, o, l, c, d, u, p, m, g = "", _ = e.pos, b = e.posMax, f = e.pos, h = !0;
        if (91 !== e.src.charCodeAt(e.pos))
            return !1;
        if (l = e.pos + 1,
        (o = e.md.helpers.parseLinkLabel(e, e.pos, !0)) < 0)
            return !1;
        if ((c = o + 1) < b && 40 === e.src.charCodeAt(c)) {
            for (h = !1,
            c++; c < b && (i = e.src.charCodeAt(c),
            a(i) || 10 === i); c++)
                ;
            if (c >= b)
                return !1;
            for (f = c,
            d = e.md.helpers.parseLinkDestination(e.src, c, e.posMax),
            d.ok && (g = e.md.normalizeLink(d.str),
            e.md.validateLink(g) ? c = d.pos : g = ""),
            f = c; c < b && (i = e.src.charCodeAt(c),
            a(i) || 10 === i); c++)
                ;
            if (d = e.md.helpers.parseLinkTitle(e.src, c, e.posMax),
            c < b && f !== c && d.ok)
                for (p = d.str,
                c = d.pos; c < b && (i = e.src.charCodeAt(c),
                a(i) || 10 === i); c++)
                    ;
            else
                p = "";
            (c >= b || 41 !== e.src.charCodeAt(c)) && (h = !0),
            c++
        }
        if (h) {
            if (void 0 === e.env.references)
                return !1;
            if (c < b && 91 === e.src.charCodeAt(c) ? (f = c + 1,
            c = e.md.helpers.parseLinkLabel(e, c),
            c >= 0 ? s = e.src.slice(f, c++) : c = o + 1) : c = o + 1,
            s || (s = e.src.slice(l, o)),
            !(u = e.env.references[r(s)]))
                return e.pos = _,
                !1;
            g = u.href,
            p = u.title
        }
        return t || (e.pos = l,
        e.posMax = o,
        m = e.push("link_open", "a", 1),
        m.attrs = n = [["href", g]],
        p && n.push(["title", p]),
        e.md.inline.tokenize(e),
        m = e.push("link_close", "a", -1)),
        e.pos = c,
        e.posMax = b,
        !0
    }
}
, function(e, t, n) {
    "use strict";
    var r = n(0).isSpace;
    e.exports = function(e, t) {
        var n, a, i = e.pos;
        if (10 !== e.src.charCodeAt(i))
            return !1;
        for (n = e.pending.length - 1,
        a = e.posMax,
        t || (n >= 0 && 32 === e.pending.charCodeAt(n) ? n >= 1 && 32 === e.pending.charCodeAt(n - 1) ? (e.pending = e.pending.replace(/ +$/, ""),
        e.push("hardbreak", "br", 0)) : (e.pending = e.pending.slice(0, -1),
        e.push("softbreak", "br", 0)) : e.push("softbreak", "br", 0)),
        i++; i < a && r(e.src.charCodeAt(i)); )
            i++;
        return e.pos = i,
        !0
    }
}
, function(e, t, n) {
    "use strict";
    function StateInline(e, t, n, r) {
        this.src = e,
        this.env = n,
        this.md = t,
        this.tokens = r,
        this.pos = 0,
        this.posMax = this.src.length,
        this.level = 0,
        this.pending = "",
        this.pendingLevel = 0,
        this.cache = {},
        this.delimiters = []
    }
    var r = n(2)
      , a = n(0).isWhiteSpace
      , i = n(0).isPunctChar
      , s = n(0).isMdAsciiPunct;
    StateInline.prototype.pushPending = function() {
        var e = new r("text","",0);
        return e.content = this.pending,
        e.level = this.pendingLevel,
        this.tokens.push(e),
        this.pending = "",
        e
    }
    ,
    StateInline.prototype.push = function(e, t, n) {
        this.pending && this.pushPending();
        var a = new r(e,t,n);
        return n < 0 && this.level--,
        a.level = this.level,
        n > 0 && this.level++,
        this.pendingLevel = this.level,
        this.tokens.push(a),
        a
    }
    ,
    StateInline.prototype.scanDelims = function(e, t) {
        var n, r, o, l, c, d, u, p, m, g = e, _ = !0, b = !0, f = this.posMax, h = this.src.charCodeAt(e);
        for (n = e > 0 ? this.src.charCodeAt(e - 1) : 32; g < f && this.src.charCodeAt(g) === h; )
            g++;
        return o = g - e,
        r = g < f ? this.src.charCodeAt(g) : 32,
        u = s(n) || i(String.fromCharCode(n)),
        m = s(r) || i(String.fromCharCode(r)),
        d = a(n),
        p = a(r),
        p ? _ = !1 : m && (d || u || (_ = !1)),
        d ? b = !1 : u && (p || m || (b = !1)),
        t ? (l = _,
        c = b) : (l = _ && (!b || u),
        c = b && (!_ || m)),
        {
            can_open: l,
            can_close: c,
            length: o
        }
    }
    ,
    StateInline.prototype.Token = r,
    e.exports = StateInline
}
, function(e, t, n) {
    "use strict";
    function isTerminatorChar(e) {
        switch (e) {
        case 10:
        case 33:
        case 35:
        case 36:
        case 37:
        case 38:
        case 42:
        case 43:
        case 45:
        case 58:
        case 60:
        case 61:
        case 62:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 125:
        case 126:
            return !0;
        default:
            return !1
        }
    }
    e.exports = function(e, t) {
        for (var n = e.pos; n < e.posMax && !isTerminatorChar(e.src.charCodeAt(n)); )
            n++;
        return n !== e.pos && (t || (e.pending += e.src.slice(e.pos, n)),
        e.pos = n,
        !0)
    }
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t, n, r = 0, a = e.tokens, i = e.tokens.length;
        for (t = n = 0; t < i; t++)
            r += a[t].nesting,
            a[t].level = r,
            "text" === a[t].type && t + 1 < i && "text" === a[t + 1].type ? a[t + 1].content = a[t].content + a[t + 1].content : (t !== n && (a[n] = a[t]),
            n++);
        t !== n && (a.length = n)
    }
}
, function(e, t, n) {
    "use strict";
    function getDecodeCache(e) {
        var t, n, a = r[e];
        if (a)
            return a;
        for (a = r[e] = [],
        t = 0; t < 128; t++)
            n = String.fromCharCode(t),
            a.push(n);
        for (t = 0; t < e.length; t++)
            n = e.charCodeAt(t),
            a[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
        return a
    }
    function decode(e, t) {
        var n;
        return "string" != typeof t && (t = decode.defaultChars),
        n = getDecodeCache(t),
        e.replace(/(%[a-f0-9]{2})+/gi, function(e) {
            var t, r, a, i, s, o, l, c = "";
            for (t = 0,
            r = e.length; t < r; t += 3)
                a = parseInt(e.slice(t + 1, t + 3), 16),
                a < 128 ? c += n[a] : 192 == (224 & a) && t + 3 < r && 128 == (192 & (i = parseInt(e.slice(t + 4, t + 6), 16))) ? (l = a << 6 & 1984 | 63 & i,
                c += l < 128 ? "��" : String.fromCharCode(l),
                t += 3) : 224 == (240 & a) && t + 6 < r && (i = parseInt(e.slice(t + 4, t + 6), 16),
                s = parseInt(e.slice(t + 7, t + 9), 16),
                128 == (192 & i) && 128 == (192 & s)) ? (l = a << 12 & 61440 | i << 6 & 4032 | 63 & s,
                c += l < 2048 || l >= 55296 && l <= 57343 ? "���" : String.fromCharCode(l),
                t += 6) : 240 == (248 & a) && t + 9 < r && (i = parseInt(e.slice(t + 4, t + 6), 16),
                s = parseInt(e.slice(t + 7, t + 9), 16),
                o = parseInt(e.slice(t + 10, t + 12), 16),
                128 == (192 & i) && 128 == (192 & s) && 128 == (192 & o)) ? (l = a << 18 & 1835008 | i << 12 & 258048 | s << 6 & 4032 | 63 & o,
                l < 65536 || l > 1114111 ? c += "����" : (l -= 65536,
                c += String.fromCharCode(55296 + (l >> 10), 56320 + (1023 & l))),
                t += 9) : c += "�";
            return c
        })
    }
    var r = {};
    decode.defaultChars = ";/?:@&=+$,#",
    decode.componentChars = "",
    e.exports = decode
}
, function(e, t, n) {
    "use strict";
    function getEncodeCache(e) {
        var t, n, a = r[e];
        if (a)
            return a;
        for (a = r[e] = [],
        t = 0; t < 128; t++)
            n = String.fromCharCode(t),
            /^[0-9a-z]$/i.test(n) ? a.push(n) : a.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
        for (t = 0; t < e.length; t++)
            a[e.charCodeAt(t)] = e[t];
        return a
    }
    function encode(e, t, n) {
        var r, a, i, s, o, l = "";
        for ("string" != typeof t && (n = t,
        t = encode.defaultChars),
        void 0 === n && (n = !0),
        o = getEncodeCache(t),
        r = 0,
        a = e.length; r < a; r++)
            if (i = e.charCodeAt(r),
            n && 37 === i && r + 2 < a && /^[0-9a-f]{2}$/i.test(e.slice(r + 1, r + 3)))
                l += e.slice(r, r + 3),
                r += 2;
            else if (i < 128)
                l += o[i];
            else if (i >= 55296 && i <= 57343) {
                if (i >= 55296 && i <= 56319 && r + 1 < a && (s = e.charCodeAt(r + 1)) >= 56320 && s <= 57343) {
                    l += encodeURIComponent(e[r] + e[r + 1]),
                    r++;
                    continue
                }
                l += "%EF%BF%BD"
            } else
                l += encodeURIComponent(e[r]);
        return l
    }
    var r = {};
    encode.defaultChars = ";/?:@&=+$,-_.!~*'()#",
    encode.componentChars = "-_.!~*'()",
    e.exports = encode
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = "";
        return t += e.protocol || "",
        t += e.slashes ? "//" : "",
        t += e.auth ? e.auth + "@" : "",
        e.hostname && -1 !== e.hostname.indexOf(":") ? t += "[" + e.hostname + "]" : t += e.hostname || "",
        t += e.port ? ":" + e.port : "",
        t += e.pathname || "",
        t += e.search || "",
        t += e.hash || ""
    }
}
, function(e, t, n) {
    "use strict";
    function Url() {
        this.protocol = null,
        this.slashes = null,
        this.auth = null,
        this.port = null,
        this.hostname = null,
        this.hash = null,
        this.search = null,
        this.pathname = null
    }
    function urlParse(e, t) {
        if (e && e instanceof Url)
            return e;
        var n = new Url;
        return n.parse(e, t),
        n
    }
    var r = /^([a-z0-9.+-]+:)/i
      , a = /:[0-9]*$/
      , i = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/
      , s = ["<", ">", '"', "`", " ", "\r", "\n", "\t"]
      , o = ["{", "}", "|", "\\", "^", "`"].concat(s)
      , l = ["'"].concat(o)
      , c = ["%", "/", "?", ";", "#"].concat(l)
      , d = ["/", "?", "#"]
      , u = /^[+a-z0-9A-Z_-]{0,63}$/
      , p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/
      , m = {
        javascript: !0,
        "javascript:": !0
    }
      , g = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0
    };
    Url.prototype.parse = function(e, t) {
        var n, a, s, o, l, _ = e;
        if (_ = _.trim(),
        !t && 1 === e.split("#").length) {
            var b = i.exec(_);
            if (b)
                return this.pathname = b[1],
                b[2] && (this.search = b[2]),
                this
        }
        var f = r.exec(_);
        if (f && (f = f[0],
        s = f.toLowerCase(),
        this.protocol = f,
        _ = _.substr(f.length)),
        (t || f || _.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(l = "//" === _.substr(0, 2)) || f && m[f] || (_ = _.substr(2),
        this.slashes = !0)),
        !m[f] && (l || f && !g[f])) {
            var h = -1;
            for (n = 0; n < d.length; n++)
                -1 !== (o = _.indexOf(d[n])) && (-1 === h || o < h) && (h = o);
            var v, E;
            for (E = -1 === h ? _.lastIndexOf("@") : _.lastIndexOf("@", h),
            -1 !== E && (v = _.slice(0, E),
            _ = _.slice(E + 1),
            this.auth = v),
            h = -1,
            n = 0; n < c.length; n++)
                -1 !== (o = _.indexOf(c[n])) && (-1 === h || o < h) && (h = o);
            -1 === h && (h = _.length),
            ":" === _[h - 1] && h--;
            var y = _.slice(0, h);
            _ = _.slice(h),
            this.parseHost(y),
            this.hostname = this.hostname || "";
            var S = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!S) {
                var C = this.hostname.split(/\./);
                for (n = 0,
                a = C.length; n < a; n++) {
                    var x = C[n];
                    if (x && !x.match(u)) {
                        for (var w = "", T = 0, N = x.length; T < N; T++)
                            x.charCodeAt(T) > 127 ? w += "x" : w += x[T];
                        if (!w.match(u)) {
                            var D = C.slice(0, n)
                              , M = C.slice(n + 1)
                              , A = x.match(p);
                            A && (D.push(A[1]),
                            M.unshift(A[2])),
                            M.length && (_ = M.join(".") + _),
                            this.hostname = D.join(".");
                            break
                        }
                    }
                }
            }
            this.hostname.length > 255 && (this.hostname = ""),
            S && (this.hostname = this.hostname.substr(1, this.hostname.length - 2))
        }
        var O = _.indexOf("#");
        -1 !== O && (this.hash = _.substr(O),
        _ = _.slice(0, O));
        var k = _.indexOf("?");
        return -1 !== k && (this.search = _.substr(k),
        _ = _.slice(0, k)),
        _ && (this.pathname = _),
        g[s] && this.hostname && !this.pathname && (this.pathname = ""),
        this
    }
    ,
    Url.prototype.parseHost = function(e) {
        var t = a.exec(e);
        t && (t = t[0],
        ":" !== t && (this.port = t.substr(1)),
        e = e.substr(0, e.length - t.length)),
        e && (this.hostname = e)
    }
    ,
    e.exports = urlParse
}
, function(e, t, n) {
    "use strict";
    (function(e, r) {
        var a, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        !function(s) {
            function error(e) {
                throw new RangeError(x[e])
            }
            function map(e, t) {
                for (var n = e.length, r = []; n--; )
                    r[n] = t(e[n]);
                return r
            }
            function mapDomain(e, t) {
                var n = e.split("@")
                  , r = "";
                return n.length > 1 && (r = n[0] + "@",
                e = n[1]),
                e = e.replace(C, "."),
                r + map(e.split("."), t).join(".")
            }
            function ucs2decode(e) {
                for (var t, n, r = [], a = 0, i = e.length; a < i; )
                    t = e.charCodeAt(a++),
                    t >= 55296 && t <= 56319 && a < i ? (n = e.charCodeAt(a++),
                    56320 == (64512 & n) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t),
                    a--)) : r.push(t);
                return r
            }
            function ucs2encode(e) {
                return map(e, function(e) {
                    var t = "";
                    return e > 65535 && (e -= 65536,
                    t += N(e >>> 10 & 1023 | 55296),
                    e = 56320 | 1023 & e),
                    t += N(e)
                }).join("")
            }
            function basicToDigit(e) {
                return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : m
            }
            function digitToBasic(e, t) {
                return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
            }
            function adapt(e, t, n) {
                var r = 0;
                for (e = n ? T(e / f) : e >> 1,
                e += T(e / t); e > w * _ >> 1; r += m)
                    e = T(e / w);
                return T(r + (w + 1) * e / (e + b))
            }
            function decode(e) {
                var t, n, r, a, i, s, o, l, c, d, u = [], b = e.length, f = 0, y = v, S = h;
                for (n = e.lastIndexOf(E),
                n < 0 && (n = 0),
                r = 0; r < n; ++r)
                    e.charCodeAt(r) >= 128 && error("not-basic"),
                    u.push(e.charCodeAt(r));
                for (a = n > 0 ? n + 1 : 0; a < b; ) {
                    for (i = f,
                    s = 1,
                    o = m; a >= b && error("invalid-input"),
                    l = basicToDigit(e.charCodeAt(a++)),
                    (l >= m || l > T((p - f) / s)) && error("overflow"),
                    f += l * s,
                    c = o <= S ? g : o >= S + _ ? _ : o - S,
                    !(l < c); o += m)
                        d = m - c,
                        s > T(p / d) && error("overflow"),
                        s *= d;
                    t = u.length + 1,
                    S = adapt(f - i, t, 0 == i),
                    T(f / t) > p - y && error("overflow"),
                    y += T(f / t),
                    f %= t,
                    u.splice(f++, 0, y)
                }
                return ucs2encode(u)
            }
            function encode(e) {
                var t, n, r, a, i, s, o, l, c, d, u, b, f, y, S, C = [];
                for (e = ucs2decode(e),
                b = e.length,
                t = v,
                n = 0,
                i = h,
                s = 0; s < b; ++s)
                    (u = e[s]) < 128 && C.push(N(u));
                for (r = a = C.length,
                a && C.push(E); r < b; ) {
                    for (o = p,
                    s = 0; s < b; ++s)
                        (u = e[s]) >= t && u < o && (o = u);
                    for (f = r + 1,
                    o - t > T((p - n) / f) && error("overflow"),
                    n += (o - t) * f,
                    t = o,
                    s = 0; s < b; ++s)
                        if (u = e[s],
                        u < t && ++n > p && error("overflow"),
                        u == t) {
                            for (l = n,
                            c = m; d = c <= i ? g : c >= i + _ ? _ : c - i,
                            !(l < d); c += m)
                                S = l - d,
                                y = m - d,
                                C.push(N(digitToBasic(d + S % y, 0))),
                                l = T(S / y);
                            C.push(N(digitToBasic(l, 0))),
                            i = adapt(n, f, r == a),
                            n = 0,
                            ++r
                        }
                    ++n,
                    ++t
                }
                return C.join("")
            }
            function toUnicode(e) {
                return mapDomain(e, function(e) {
                    return y.test(e) ? decode(e.slice(4).toLowerCase()) : e
                })
            }
            function toASCII(e) {
                return mapDomain(e, function(e) {
                    return S.test(e) ? "xn--" + encode(e) : e
                })
            }
            var o = "object" == i(t) && t && !t.nodeType && t
              , l = "object" == i(e) && e && !e.nodeType && e
              , c = "object" == (void 0 === r ? "undefined" : i(r)) && r;
            c.global !== c && c.window !== c && c.self !== c || (s = c);
            var d, u, p = 2147483647, m = 36, g = 1, _ = 26, b = 38, f = 700, h = 72, v = 128, E = "-", y = /^xn--/, S = /[^\x20-\x7E]/, C = /[\x2E\u3002\uFF0E\uFF61]/g, x = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
            }, w = m - g, T = Math.floor, N = String.fromCharCode;
            if (d = {
                version: "1.4.1",
                ucs2: {
                    decode: ucs2decode,
                    encode: ucs2encode
                },
                decode: decode,
                encode: encode,
                toASCII: toASCII,
                toUnicode: toUnicode
            },
            "object" == i(n(12)) && n(12))
                void 0 !== (a = function() {
                    return d
                }
                .call(t, n, t, e)) && (e.exports = a);
            else if (o && l)
                if (e.exports == o)
                    l.exports = d;
                else
                    for (u in d)
                        d.hasOwnProperty(u) && (o[u] = d[u]);
            else
                s.punycode = d
        }(void 0)
    }
    ).call(t, n(255)(e), n(254))
}
, function(e, t, n) {
    "use strict";
    e.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/
}
, function(e, t, n) {
    "use strict";
    t.Any = n(11),
    t.Cc = n(9),
    t.Cf = n(252),
    t.P = n(3),
    t.Z = n(10)
}
, function(e, t, n) {
    "use strict";
    var r, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ;
    r = function() {
        return this
    }();
    try {
        r = r || Function("return this")() || (0,
        eval)("this")
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : a(window)) && (r = window)
    }
    e.exports = r
}
, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}
        ,
        e.paths = [],
        e.children || (e.children = []),
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }),
        Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }),
        e.webpackPolyfill = 1),
        e
    }
}
, function(e, t, n) {
    "use strict";
    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var r = n(13)
      , a = _interopRequireDefault(r)
      , i = n(15)
      , s = _interopRequireDefault(i)
      , o = n(14)
      , l = _interopRequireDefault(o);
    n(16),
    n(17),
    n(18),
    n(19),
    window.showMarkdown = function(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (e) {
            var n = decodeURIComponent(e)
              , r = new s.default({
                html: !0,
                breaks: !0,
                linkify: !0,
                highlight: function(e) {
                    return a.default.highlightAuto(e).value
                }
            });
            t || (r = r.disable("image")),
            r.use(l.default);
            var i = r.render(n);
            document.getElementById("contents").innerHTML = i;
            document.querySelectorAll("table").forEach(function(e) {
                e.classList.add("table")
            });
            document.querySelectorAll("pre code").forEach(function(e) {
                a.default.highlightBlock(e)
            })
        }
    }
}
, function(e, t) {
    e.exports = {
        Aacute: "Á",
        aacute: "á",
        Abreve: "Ă",
        abreve: "ă",
        ac: "∾",
        acd: "∿",
        acE: "∾̳",
        Acirc: "Â",
        acirc: "â",
        acute: "´",
        Acy: "А",
        acy: "а",
        AElig: "Æ",
        aelig: "æ",
        af: "⁡",
        Afr: "𝔄",
        afr: "𝔞",
        Agrave: "À",
        agrave: "à",
        alefsym: "ℵ",
        aleph: "ℵ",
        Alpha: "Α",
        alpha: "α",
        Amacr: "Ā",
        amacr: "ā",
        amalg: "⨿",
        amp: "&",
        AMP: "&",
        andand: "⩕",
        And: "⩓",
        and: "∧",
        andd: "⩜",
        andslope: "⩘",
        andv: "⩚",
        ang: "∠",
        ange: "⦤",
        angle: "∠",
        angmsdaa: "⦨",
        angmsdab: "⦩",
        angmsdac: "⦪",
        angmsdad: "⦫",
        angmsdae: "⦬",
        angmsdaf: "⦭",
        angmsdag: "⦮",
        angmsdah: "⦯",
        angmsd: "∡",
        angrt: "∟",
        angrtvb: "⊾",
        angrtvbd: "⦝",
        angsph: "∢",
        angst: "Å",
        angzarr: "⍼",
        Aogon: "Ą",
        aogon: "ą",
        Aopf: "𝔸",
        aopf: "𝕒",
        apacir: "⩯",
        ap: "≈",
        apE: "⩰",
        ape: "≊",
        apid: "≋",
        apos: "'",
        ApplyFunction: "⁡",
        approx: "≈",
        approxeq: "≊",
        Aring: "Å",
        aring: "å",
        Ascr: "𝒜",
        ascr: "𝒶",
        Assign: "≔",
        ast: "*",
        asymp: "≈",
        asympeq: "≍",
        Atilde: "Ã",
        atilde: "ã",
        Auml: "Ä",
        auml: "ä",
        awconint: "∳",
        awint: "⨑",
        backcong: "≌",
        backepsilon: "϶",
        backprime: "‵",
        backsim: "∽",
        backsimeq: "⋍",
        Backslash: "∖",
        Barv: "⫧",
        barvee: "⊽",
        barwed: "⌅",
        Barwed: "⌆",
        barwedge: "⌅",
        bbrk: "⎵",
        bbrktbrk: "⎶",
        bcong: "≌",
        Bcy: "Б",
        bcy: "б",
        bdquo: "„",
        becaus: "∵",
        because: "∵",
        Because: "∵",
        bemptyv: "⦰",
        bepsi: "϶",
        bernou: "ℬ",
        Bernoullis: "ℬ",
        Beta: "Β",
        beta: "β",
        beth: "ℶ",
        between: "≬",
        Bfr: "𝔅",
        bfr: "𝔟",
        bigcap: "⋂",
        bigcirc: "◯",
        bigcup: "⋃",
        bigodot: "⨀",
        bigoplus: "⨁",
        bigotimes: "⨂",
        bigsqcup: "⨆",
        bigstar: "★",
        bigtriangledown: "▽",
        bigtriangleup: "△",
        biguplus: "⨄",
        bigvee: "⋁",
        bigwedge: "⋀",
        bkarow: "⤍",
        blacklozenge: "⧫",
        blacksquare: "▪",
        blacktriangle: "▴",
        blacktriangledown: "▾",
        blacktriangleleft: "◂",
        blacktriangleright: "▸",
        blank: "␣",
        blk12: "▒",
        blk14: "░",
        blk34: "▓",
        block: "█",
        bne: "=⃥",
        bnequiv: "≡⃥",
        bNot: "⫭",
        bnot: "⌐",
        Bopf: "𝔹",
        bopf: "𝕓",
        bot: "⊥",
        bottom: "⊥",
        bowtie: "⋈",
        boxbox: "⧉",
        boxdl: "┐",
        boxdL: "╕",
        boxDl: "╖",
        boxDL: "╗",
        boxdr: "┌",
        boxdR: "╒",
        boxDr: "╓",
        boxDR: "╔",
        boxh: "─",
        boxH: "═",
        boxhd: "┬",
        boxHd: "╤",
        boxhD: "╥",
        boxHD: "╦",
        boxhu: "┴",
        boxHu: "╧",
        boxhU: "╨",
        boxHU: "╩",
        boxminus: "⊟",
        boxplus: "⊞",
        boxtimes: "⊠",
        boxul: "┘",
        boxuL: "╛",
        boxUl: "╜",
        boxUL: "╝",
        boxur: "└",
        boxuR: "╘",
        boxUr: "╙",
        boxUR: "╚",
        boxv: "│",
        boxV: "║",
        boxvh: "┼",
        boxvH: "╪",
        boxVh: "╫",
        boxVH: "╬",
        boxvl: "┤",
        boxvL: "╡",
        boxVl: "╢",
        boxVL: "╣",
        boxvr: "├",
        boxvR: "╞",
        boxVr: "╟",
        boxVR: "╠",
        bprime: "‵",
        breve: "˘",
        Breve: "˘",
        brvbar: "¦",
        bscr: "𝒷",
        Bscr: "ℬ",
        bsemi: "⁏",
        bsim: "∽",
        bsime: "⋍",
        bsolb: "⧅",
        bsol: "\\",
        bsolhsub: "⟈",
        bull: "•",
        bullet: "•",
        bump: "≎",
        bumpE: "⪮",
        bumpe: "≏",
        Bumpeq: "≎",
        bumpeq: "≏",
        Cacute: "Ć",
        cacute: "ć",
        capand: "⩄",
        capbrcup: "⩉",
        capcap: "⩋",
        cap: "∩",
        Cap: "⋒",
        capcup: "⩇",
        capdot: "⩀",
        CapitalDifferentialD: "ⅅ",
        caps: "∩︀",
        caret: "⁁",
        caron: "ˇ",
        Cayleys: "ℭ",
        ccaps: "⩍",
        Ccaron: "Č",
        ccaron: "č",
        Ccedil: "Ç",
        ccedil: "ç",
        Ccirc: "Ĉ",
        ccirc: "ĉ",
        Cconint: "∰",
        ccups: "⩌",
        ccupssm: "⩐",
        Cdot: "Ċ",
        cdot: "ċ",
        cedil: "¸",
        Cedilla: "¸",
        cemptyv: "⦲",
        cent: "¢",
        centerdot: "·",
        CenterDot: "·",
        cfr: "𝔠",
        Cfr: "ℭ",
        CHcy: "Ч",
        chcy: "ч",
        check: "✓",
        checkmark: "✓",
        Chi: "Χ",
        chi: "χ",
        circ: "ˆ",
        circeq: "≗",
        circlearrowleft: "↺",
        circlearrowright: "↻",
        circledast: "⊛",
        circledcirc: "⊚",
        circleddash: "⊝",
        CircleDot: "⊙",
        circledR: "®",
        circledS: "Ⓢ",
        CircleMinus: "⊖",
        CirclePlus: "⊕",
        CircleTimes: "⊗",
        cir: "○",
        cirE: "⧃",
        cire: "≗",
        cirfnint: "⨐",
        cirmid: "⫯",
        cirscir: "⧂",
        ClockwiseContourIntegral: "∲",
        CloseCurlyDoubleQuote: "”",
        CloseCurlyQuote: "’",
        clubs: "♣",
        clubsuit: "♣",
        colon: ":",
        Colon: "∷",
        Colone: "⩴",
        colone: "≔",
        coloneq: "≔",
        comma: ",",
        commat: "@",
        comp: "∁",
        compfn: "∘",
        complement: "∁",
        complexes: "ℂ",
        cong: "≅",
        congdot: "⩭",
        Congruent: "≡",
        conint: "∮",
        Conint: "∯",
        ContourIntegral: "∮",
        copf: "𝕔",
        Copf: "ℂ",
        coprod: "∐",
        Coproduct: "∐",
        copy: "©",
        COPY: "©",
        copysr: "℗",
        CounterClockwiseContourIntegral: "∳",
        crarr: "↵",
        cross: "✗",
        Cross: "⨯",
        Cscr: "𝒞",
        cscr: "𝒸",
        csub: "⫏",
        csube: "⫑",
        csup: "⫐",
        csupe: "⫒",
        ctdot: "⋯",
        cudarrl: "⤸",
        cudarrr: "⤵",
        cuepr: "⋞",
        cuesc: "⋟",
        cularr: "↶",
        cularrp: "⤽",
        cupbrcap: "⩈",
        cupcap: "⩆",
        CupCap: "≍",
        cup: "∪",
        Cup: "⋓",
        cupcup: "⩊",
        cupdot: "⊍",
        cupor: "⩅",
        cups: "∪︀",
        curarr: "↷",
        curarrm: "⤼",
        curlyeqprec: "⋞",
        curlyeqsucc: "⋟",
        curlyvee: "⋎",
        curlywedge: "⋏",
        curren: "¤",
        curvearrowleft: "↶",
        curvearrowright: "↷",
        cuvee: "⋎",
        cuwed: "⋏",
        cwconint: "∲",
        cwint: "∱",
        cylcty: "⌭",
        dagger: "†",
        Dagger: "‡",
        daleth: "ℸ",
        darr: "↓",
        Darr: "↡",
        dArr: "⇓",
        dash: "‐",
        Dashv: "⫤",
        dashv: "⊣",
        dbkarow: "⤏",
        dblac: "˝",
        Dcaron: "Ď",
        dcaron: "ď",
        Dcy: "Д",
        dcy: "д",
        ddagger: "‡",
        ddarr: "⇊",
        DD: "ⅅ",
        dd: "ⅆ",
        DDotrahd: "⤑",
        ddotseq: "⩷",
        deg: "°",
        Del: "∇",
        Delta: "Δ",
        delta: "δ",
        demptyv: "⦱",
        dfisht: "⥿",
        Dfr: "𝔇",
        dfr: "𝔡",
        dHar: "⥥",
        dharl: "⇃",
        dharr: "⇂",
        DiacriticalAcute: "´",
        DiacriticalDot: "˙",
        DiacriticalDoubleAcute: "˝",
        DiacriticalGrave: "`",
        DiacriticalTilde: "˜",
        diam: "⋄",
        diamond: "⋄",
        Diamond: "⋄",
        diamondsuit: "♦",
        diams: "♦",
        die: "¨",
        DifferentialD: "ⅆ",
        digamma: "ϝ",
        disin: "⋲",
        div: "÷",
        divide: "÷",
        divideontimes: "⋇",
        divonx: "⋇",
        DJcy: "Ђ",
        djcy: "ђ",
        dlcorn: "⌞",
        dlcrop: "⌍",
        dollar: "$",
        Dopf: "𝔻",
        dopf: "𝕕",
        Dot: "¨",
        dot: "˙",
        DotDot: "⃜",
        doteq: "≐",
        doteqdot: "≑",
        DotEqual: "≐",
        dotminus: "∸",
        dotplus: "∔",
        dotsquare: "⊡",
        doublebarwedge: "⌆",
        DoubleContourIntegral: "∯",
        DoubleDot: "¨",
        DoubleDownArrow: "⇓",
        DoubleLeftArrow: "⇐",
        DoubleLeftRightArrow: "⇔",
        DoubleLeftTee: "⫤",
        DoubleLongLeftArrow: "⟸",
        DoubleLongLeftRightArrow: "⟺",
        DoubleLongRightArrow: "⟹",
        DoubleRightArrow: "⇒",
        DoubleRightTee: "⊨",
        DoubleUpArrow: "⇑",
        DoubleUpDownArrow: "⇕",
        DoubleVerticalBar: "∥",
        DownArrowBar: "⤓",
        downarrow: "↓",
        DownArrow: "↓",
        Downarrow: "⇓",
        DownArrowUpArrow: "⇵",
        DownBreve: "̑",
        downdownarrows: "⇊",
        downharpoonleft: "⇃",
        downharpoonright: "⇂",
        DownLeftRightVector: "⥐",
        DownLeftTeeVector: "⥞",
        DownLeftVectorBar: "⥖",
        DownLeftVector: "↽",
        DownRightTeeVector: "⥟",
        DownRightVectorBar: "⥗",
        DownRightVector: "⇁",
        DownTeeArrow: "↧",
        DownTee: "⊤",
        drbkarow: "⤐",
        drcorn: "⌟",
        drcrop: "⌌",
        Dscr: "𝒟",
        dscr: "𝒹",
        DScy: "Ѕ",
        dscy: "ѕ",
        dsol: "⧶",
        Dstrok: "Đ",
        dstrok: "đ",
        dtdot: "⋱",
        dtri: "▿",
        dtrif: "▾",
        duarr: "⇵",
        duhar: "⥯",
        dwangle: "⦦",
        DZcy: "Џ",
        dzcy: "џ",
        dzigrarr: "⟿",
        Eacute: "É",
        eacute: "é",
        easter: "⩮",
        Ecaron: "Ě",
        ecaron: "ě",
        Ecirc: "Ê",
        ecirc: "ê",
        ecir: "≖",
        ecolon: "≕",
        Ecy: "Э",
        ecy: "э",
        eDDot: "⩷",
        Edot: "Ė",
        edot: "ė",
        eDot: "≑",
        ee: "ⅇ",
        efDot: "≒",
        Efr: "𝔈",
        efr: "𝔢",
        eg: "⪚",
        Egrave: "È",
        egrave: "è",
        egs: "⪖",
        egsdot: "⪘",
        el: "⪙",
        Element: "∈",
        elinters: "⏧",
        ell: "ℓ",
        els: "⪕",
        elsdot: "⪗",
        Emacr: "Ē",
        emacr: "ē",
        empty: "∅",
        emptyset: "∅",
        EmptySmallSquare: "◻",
        emptyv: "∅",
        EmptyVerySmallSquare: "▫",
        emsp13: " ",
        emsp14: " ",
        emsp: " ",
        ENG: "Ŋ",
        eng: "ŋ",
        ensp: " ",
        Eogon: "Ę",
        eogon: "ę",
        Eopf: "𝔼",
        eopf: "𝕖",
        epar: "⋕",
        eparsl: "⧣",
        eplus: "⩱",
        epsi: "ε",
        Epsilon: "Ε",
        epsilon: "ε",
        epsiv: "ϵ",
        eqcirc: "≖",
        eqcolon: "≕",
        eqsim: "≂",
        eqslantgtr: "⪖",
        eqslantless: "⪕",
        Equal: "⩵",
        equals: "=",
        EqualTilde: "≂",
        equest: "≟",
        Equilibrium: "⇌",
        equiv: "≡",
        equivDD: "⩸",
        eqvparsl: "⧥",
        erarr: "⥱",
        erDot: "≓",
        escr: "ℯ",
        Escr: "ℰ",
        esdot: "≐",
        Esim: "⩳",
        esim: "≂",
        Eta: "Η",
        eta: "η",
        ETH: "Ð",
        eth: "ð",
        Euml: "Ë",
        euml: "ë",
        euro: "€",
        excl: "!",
        exist: "∃",
        Exists: "∃",
        expectation: "ℰ",
        exponentiale: "ⅇ",
        ExponentialE: "ⅇ",
        fallingdotseq: "≒",
        Fcy: "Ф",
        fcy: "ф",
        female: "♀",
        ffilig: "ﬃ",
        fflig: "ﬀ",
        ffllig: "ﬄ",
        Ffr: "𝔉",
        ffr: "𝔣",
        filig: "ﬁ",
        FilledSmallSquare: "◼",
        FilledVerySmallSquare: "▪",
        fjlig: "fj",
        flat: "♭",
        fllig: "ﬂ",
        fltns: "▱",
        fnof: "ƒ",
        Fopf: "𝔽",
        fopf: "𝕗",
        forall: "∀",
        ForAll: "∀",
        fork: "⋔",
        forkv: "⫙",
        Fouriertrf: "ℱ",
        fpartint: "⨍",
        frac12: "½",
        frac13: "⅓",
        frac14: "¼",
        frac15: "⅕",
        frac16: "⅙",
        frac18: "⅛",
        frac23: "⅔",
        frac25: "⅖",
        frac34: "¾",
        frac35: "⅗",
        frac38: "⅜",
        frac45: "⅘",
        frac56: "⅚",
        frac58: "⅝",
        frac78: "⅞",
        frasl: "⁄",
        frown: "⌢",
        fscr: "𝒻",
        Fscr: "ℱ",
        gacute: "ǵ",
        Gamma: "Γ",
        gamma: "γ",
        Gammad: "Ϝ",
        gammad: "ϝ",
        gap: "⪆",
        Gbreve: "Ğ",
        gbreve: "ğ",
        Gcedil: "Ģ",
        Gcirc: "Ĝ",
        gcirc: "ĝ",
        Gcy: "Г",
        gcy: "г",
        Gdot: "Ġ",
        gdot: "ġ",
        ge: "≥",
        gE: "≧",
        gEl: "⪌",
        gel: "⋛",
        geq: "≥",
        geqq: "≧",
        geqslant: "⩾",
        gescc: "⪩",
        ges: "⩾",
        gesdot: "⪀",
        gesdoto: "⪂",
        gesdotol: "⪄",
        gesl: "⋛︀",
        gesles: "⪔",
        Gfr: "𝔊",
        gfr: "𝔤",
        gg: "≫",
        Gg: "⋙",
        ggg: "⋙",
        gimel: "ℷ",
        GJcy: "Ѓ",
        gjcy: "ѓ",
        gla: "⪥",
        gl: "≷",
        glE: "⪒",
        glj: "⪤",
        gnap: "⪊",
        gnapprox: "⪊",
        gne: "⪈",
        gnE: "≩",
        gneq: "⪈",
        gneqq: "≩",
        gnsim: "⋧",
        Gopf: "𝔾",
        gopf: "𝕘",
        grave: "`",
        GreaterEqual: "≥",
        GreaterEqualLess: "⋛",
        GreaterFullEqual: "≧",
        GreaterGreater: "⪢",
        GreaterLess: "≷",
        GreaterSlantEqual: "⩾",
        GreaterTilde: "≳",
        Gscr: "𝒢",
        gscr: "ℊ",
        gsim: "≳",
        gsime: "⪎",
        gsiml: "⪐",
        gtcc: "⪧",
        gtcir: "⩺",
        gt: ">",
        GT: ">",
        Gt: "≫",
        gtdot: "⋗",
        gtlPar: "⦕",
        gtquest: "⩼",
        gtrapprox: "⪆",
        gtrarr: "⥸",
        gtrdot: "⋗",
        gtreqless: "⋛",
        gtreqqless: "⪌",
        gtrless: "≷",
        gtrsim: "≳",
        gvertneqq: "≩︀",
        gvnE: "≩︀",
        Hacek: "ˇ",
        hairsp: " ",
        half: "½",
        hamilt: "ℋ",
        HARDcy: "Ъ",
        hardcy: "ъ",
        harrcir: "⥈",
        harr: "↔",
        hArr: "⇔",
        harrw: "↭",
        Hat: "^",
        hbar: "ℏ",
        Hcirc: "Ĥ",
        hcirc: "ĥ",
        hearts: "♥",
        heartsuit: "♥",
        hellip: "…",
        hercon: "⊹",
        hfr: "𝔥",
        Hfr: "ℌ",
        HilbertSpace: "ℋ",
        hksearow: "⤥",
        hkswarow: "⤦",
        hoarr: "⇿",
        homtht: "∻",
        hookleftarrow: "↩",
        hookrightarrow: "↪",
        hopf: "𝕙",
        Hopf: "ℍ",
        horbar: "―",
        HorizontalLine: "─",
        hscr: "𝒽",
        Hscr: "ℋ",
        hslash: "ℏ",
        Hstrok: "Ħ",
        hstrok: "ħ",
        HumpDownHump: "≎",
        HumpEqual: "≏",
        hybull: "⁃",
        hyphen: "‐",
        Iacute: "Í",
        iacute: "í",
        ic: "⁣",
        Icirc: "Î",
        icirc: "î",
        Icy: "И",
        icy: "и",
        Idot: "İ",
        IEcy: "Е",
        iecy: "е",
        iexcl: "¡",
        iff: "⇔",
        ifr: "𝔦",
        Ifr: "ℑ",
        Igrave: "Ì",
        igrave: "ì",
        ii: "ⅈ",
        iiiint: "⨌",
        iiint: "∭",
        iinfin: "⧜",
        iiota: "℩",
        IJlig: "Ĳ",
        ijlig: "ĳ",
        Imacr: "Ī",
        imacr: "ī",
        image: "ℑ",
        ImaginaryI: "ⅈ",
        imagline: "ℐ",
        imagpart: "ℑ",
        imath: "ı",
        Im: "ℑ",
        imof: "⊷",
        imped: "Ƶ",
        Implies: "⇒",
        incare: "℅",
        in: "∈",
        infin: "∞",
        infintie: "⧝",
        inodot: "ı",
        intcal: "⊺",
        int: "∫",
        Int: "∬",
        integers: "ℤ",
        Integral: "∫",
        intercal: "⊺",
        Intersection: "⋂",
        intlarhk: "⨗",
        intprod: "⨼",
        InvisibleComma: "⁣",
        InvisibleTimes: "⁢",
        IOcy: "Ё",
        iocy: "ё",
        Iogon: "Į",
        iogon: "į",
        Iopf: "𝕀",
        iopf: "𝕚",
        Iota: "Ι",
        iota: "ι",
        iprod: "⨼",
        iquest: "¿",
        iscr: "𝒾",
        Iscr: "ℐ",
        isin: "∈",
        isindot: "⋵",
        isinE: "⋹",
        isins: "⋴",
        isinsv: "⋳",
        isinv: "∈",
        it: "⁢",
        Itilde: "Ĩ",
        itilde: "ĩ",
        Iukcy: "І",
        iukcy: "і",
        Iuml: "Ï",
        iuml: "ï",
        Jcirc: "Ĵ",
        jcirc: "ĵ",
        Jcy: "Й",
        jcy: "й",
        Jfr: "𝔍",
        jfr: "𝔧",
        jmath: "ȷ",
        Jopf: "𝕁",
        jopf: "𝕛",
        Jscr: "𝒥",
        jscr: "𝒿",
        Jsercy: "Ј",
        jsercy: "ј",
        Jukcy: "Є",
        jukcy: "є",
        Kappa: "Κ",
        kappa: "κ",
        kappav: "ϰ",
        Kcedil: "Ķ",
        kcedil: "ķ",
        Kcy: "К",
        kcy: "к",
        Kfr: "𝔎",
        kfr: "𝔨",
        kgreen: "ĸ",
        KHcy: "Х",
        khcy: "х",
        KJcy: "Ќ",
        kjcy: "ќ",
        Kopf: "𝕂",
        kopf: "𝕜",
        Kscr: "𝒦",
        kscr: "𝓀",
        lAarr: "⇚",
        Lacute: "Ĺ",
        lacute: "ĺ",
        laemptyv: "⦴",
        lagran: "ℒ",
        Lambda: "Λ",
        lambda: "λ",
        lang: "⟨",
        Lang: "⟪",
        langd: "⦑",
        langle: "⟨",
        lap: "⪅",
        Laplacetrf: "ℒ",
        laquo: "«",
        larrb: "⇤",
        larrbfs: "⤟",
        larr: "←",
        Larr: "↞",
        lArr: "⇐",
        larrfs: "⤝",
        larrhk: "↩",
        larrlp: "↫",
        larrpl: "⤹",
        larrsim: "⥳",
        larrtl: "↢",
        latail: "⤙",
        lAtail: "⤛",
        lat: "⪫",
        late: "⪭",
        lates: "⪭︀",
        lbarr: "⤌",
        lBarr: "⤎",
        lbbrk: "❲",
        lbrace: "{",
        lbrack: "[",
        lbrke: "⦋",
        lbrksld: "⦏",
        lbrkslu: "⦍",
        Lcaron: "Ľ",
        lcaron: "ľ",
        Lcedil: "Ļ",
        lcedil: "ļ",
        lceil: "⌈",
        lcub: "{",
        Lcy: "Л",
        lcy: "л",
        ldca: "⤶",
        ldquo: "“",
        ldquor: "„",
        ldrdhar: "⥧",
        ldrushar: "⥋",
        ldsh: "↲",
        le: "≤",
        lE: "≦",
        LeftAngleBracket: "⟨",
        LeftArrowBar: "⇤",
        leftarrow: "←",
        LeftArrow: "←",
        Leftarrow: "⇐",
        LeftArrowRightArrow: "⇆",
        leftarrowtail: "↢",
        LeftCeiling: "⌈",
        LeftDoubleBracket: "⟦",
        LeftDownTeeVector: "⥡",
        LeftDownVectorBar: "⥙",
        LeftDownVector: "⇃",
        LeftFloor: "⌊",
        leftharpoondown: "↽",
        leftharpoonup: "↼",
        leftleftarrows: "⇇",
        leftrightarrow: "↔",
        LeftRightArrow: "↔",
        Leftrightarrow: "⇔",
        leftrightarrows: "⇆",
        leftrightharpoons: "⇋",
        leftrightsquigarrow: "↭",
        LeftRightVector: "⥎",
        LeftTeeArrow: "↤",
        LeftTee: "⊣",
        LeftTeeVector: "⥚",
        leftthreetimes: "⋋",
        LeftTriangleBar: "⧏",
        LeftTriangle: "⊲",
        LeftTriangleEqual: "⊴",
        LeftUpDownVector: "⥑",
        LeftUpTeeVector: "⥠",
        LeftUpVectorBar: "⥘",
        LeftUpVector: "↿",
        LeftVectorBar: "⥒",
        LeftVector: "↼",
        lEg: "⪋",
        leg: "⋚",
        leq: "≤",
        leqq: "≦",
        leqslant: "⩽",
        lescc: "⪨",
        les: "⩽",
        lesdot: "⩿",
        lesdoto: "⪁",
        lesdotor: "⪃",
        lesg: "⋚︀",
        lesges: "⪓",
        lessapprox: "⪅",
        lessdot: "⋖",
        lesseqgtr: "⋚",
        lesseqqgtr: "⪋",
        LessEqualGreater: "⋚",
        LessFullEqual: "≦",
        LessGreater: "≶",
        lessgtr: "≶",
        LessLess: "⪡",
        lesssim: "≲",
        LessSlantEqual: "⩽",
        LessTilde: "≲",
        lfisht: "⥼",
        lfloor: "⌊",
        Lfr: "𝔏",
        lfr: "𝔩",
        lg: "≶",
        lgE: "⪑",
        lHar: "⥢",
        lhard: "↽",
        lharu: "↼",
        lharul: "⥪",
        lhblk: "▄",
        LJcy: "Љ",
        ljcy: "љ",
        llarr: "⇇",
        ll: "≪",
        Ll: "⋘",
        llcorner: "⌞",
        Lleftarrow: "⇚",
        llhard: "⥫",
        lltri: "◺",
        Lmidot: "Ŀ",
        lmidot: "ŀ",
        lmoustache: "⎰",
        lmoust: "⎰",
        lnap: "⪉",
        lnapprox: "⪉",
        lne: "⪇",
        lnE: "≨",
        lneq: "⪇",
        lneqq: "≨",
        lnsim: "⋦",
        loang: "⟬",
        loarr: "⇽",
        lobrk: "⟦",
        longleftarrow: "⟵",
        LongLeftArrow: "⟵",
        Longleftarrow: "⟸",
        longleftrightarrow: "⟷",
        LongLeftRightArrow: "⟷",
        Longleftrightarrow: "⟺",
        longmapsto: "⟼",
        longrightarrow: "⟶",
        LongRightArrow: "⟶",
        Longrightarrow: "⟹",
        looparrowleft: "↫",
        looparrowright: "↬",
        lopar: "⦅",
        Lopf: "𝕃",
        lopf: "𝕝",
        loplus: "⨭",
        lotimes: "⨴",
        lowast: "∗",
        lowbar: "_",
        LowerLeftArrow: "↙",
        LowerRightArrow: "↘",
        loz: "◊",
        lozenge: "◊",
        lozf: "⧫",
        lpar: "(",
        lparlt: "⦓",
        lrarr: "⇆",
        lrcorner: "⌟",
        lrhar: "⇋",
        lrhard: "⥭",
        lrm: "‎",
        lrtri: "⊿",
        lsaquo: "‹",
        lscr: "𝓁",
        Lscr: "ℒ",
        lsh: "↰",
        Lsh: "↰",
        lsim: "≲",
        lsime: "⪍",
        lsimg: "⪏",
        lsqb: "[",
        lsquo: "‘",
        lsquor: "‚",
        Lstrok: "Ł",
        lstrok: "ł",
        ltcc: "⪦",
        ltcir: "⩹",
        lt: "<",
        LT: "<",
        Lt: "≪",
        ltdot: "⋖",
        lthree: "⋋",
        ltimes: "⋉",
        ltlarr: "⥶",
        ltquest: "⩻",
        ltri: "◃",
        ltrie: "⊴",
        ltrif: "◂",
        ltrPar: "⦖",
        lurdshar: "⥊",
        luruhar: "⥦",
        lvertneqq: "≨︀",
        lvnE: "≨︀",
        macr: "¯",
        male: "♂",
        malt: "✠",
        maltese: "✠",
        Map: "⤅",
        map: "↦",
        mapsto: "↦",
        mapstodown: "↧",
        mapstoleft: "↤",
        mapstoup: "↥",
        marker: "▮",
        mcomma: "⨩",
        Mcy: "М",
        mcy: "м",
        mdash: "—",
        mDDot: "∺",
        measuredangle: "∡",
        MediumSpace: " ",
        Mellintrf: "ℳ",
        Mfr: "𝔐",
        mfr: "𝔪",
        mho: "℧",
        micro: "µ",
        midast: "*",
        midcir: "⫰",
        mid: "∣",
        middot: "·",
        minusb: "⊟",
        minus: "−",
        minusd: "∸",
        minusdu: "⨪",
        MinusPlus: "∓",
        mlcp: "⫛",
        mldr: "…",
        mnplus: "∓",
        models: "⊧",
        Mopf: "𝕄",
        mopf: "𝕞",
        mp: "∓",
        mscr: "𝓂",
        Mscr: "ℳ",
        mstpos: "∾",
        Mu: "Μ",
        mu: "μ",
        multimap: "⊸",
        mumap: "⊸",
        nabla: "∇",
        Nacute: "Ń",
        nacute: "ń",
        nang: "∠⃒",
        nap: "≉",
        napE: "⩰̸",
        napid: "≋̸",
        napos: "ŉ",
        napprox: "≉",
        natural: "♮",
        naturals: "ℕ",
        natur: "♮",
        nbsp: " ",
        nbump: "≎̸",
        nbumpe: "≏̸",
        ncap: "⩃",
        Ncaron: "Ň",
        ncaron: "ň",
        Ncedil: "Ņ",
        ncedil: "ņ",
        ncong: "≇",
        ncongdot: "⩭̸",
        ncup: "⩂",
        Ncy: "Н",
        ncy: "н",
        ndash: "–",
        nearhk: "⤤",
        nearr: "↗",
        neArr: "⇗",
        nearrow: "↗",
        ne: "≠",
        nedot: "≐̸",
        NegativeMediumSpace: "​",
        NegativeThickSpace: "​",
        NegativeThinSpace: "​",
        NegativeVeryThinSpace: "​",
        nequiv: "≢",
        nesear: "⤨",
        nesim: "≂̸",
        NestedGreaterGreater: "≫",
        NestedLessLess: "≪",
        NewLine: "\n",
        nexist: "∄",
        nexists: "∄",
        Nfr: "𝔑",
        nfr: "𝔫",
        ngE: "≧̸",
        nge: "≱",
        ngeq: "≱",
        ngeqq: "≧̸",
        ngeqslant: "⩾̸",
        nges: "⩾̸",
        nGg: "⋙̸",
        ngsim: "≵",
        nGt: "≫⃒",
        ngt: "≯",
        ngtr: "≯",
        nGtv: "≫̸",
        nharr: "↮",
        nhArr: "⇎",
        nhpar: "⫲",
        ni: "∋",
        nis: "⋼",
        nisd: "⋺",
        niv: "∋",
        NJcy: "Њ",
        njcy: "њ",
        nlarr: "↚",
        nlArr: "⇍",
        nldr: "‥",
        nlE: "≦̸",
        nle: "≰",
        nleftarrow: "↚",
        nLeftarrow: "⇍",
        nleftrightarrow: "↮",
        nLeftrightarrow: "⇎",
        nleq: "≰",
        nleqq: "≦̸",
        nleqslant: "⩽̸",
        nles: "⩽̸",
        nless: "≮",
        nLl: "⋘̸",
        nlsim: "≴",
        nLt: "≪⃒",
        nlt: "≮",
        nltri: "⋪",
        nltrie: "⋬",
        nLtv: "≪̸",
        nmid: "∤",
        NoBreak: "⁠",
        NonBreakingSpace: " ",
        nopf: "𝕟",
        Nopf: "ℕ",
        Not: "⫬",
        not: "¬",
        NotCongruent: "≢",
        NotCupCap: "≭",
        NotDoubleVerticalBar: "∦",
        NotElement: "∉",
        NotEqual: "≠",
        NotEqualTilde: "≂̸",
        NotExists: "∄",
        NotGreater: "≯",
        NotGreaterEqual: "≱",
        NotGreaterFullEqual: "≧̸",
        NotGreaterGreater: "≫̸",
        NotGreaterLess: "≹",
        NotGreaterSlantEqual: "⩾̸",
        NotGreaterTilde: "≵",
        NotHumpDownHump: "≎̸",
        NotHumpEqual: "≏̸",
        notin: "∉",
        notindot: "⋵̸",
        notinE: "⋹̸",
        notinva: "∉",
        notinvb: "⋷",
        notinvc: "⋶",
        NotLeftTriangleBar: "⧏̸",
        NotLeftTriangle: "⋪",
        NotLeftTriangleEqual: "⋬",
        NotLess: "≮",
        NotLessEqual: "≰",
        NotLessGreater: "≸",
        NotLessLess: "≪̸",
        NotLessSlantEqual: "⩽̸",
        NotLessTilde: "≴",
        NotNestedGreaterGreater: "⪢̸",
        NotNestedLessLess: "⪡̸",
        notni: "∌",
        notniva: "∌",
        notnivb: "⋾",
        notnivc: "⋽",
        NotPrecedes: "⊀",
        NotPrecedesEqual: "⪯̸",
        NotPrecedesSlantEqual: "⋠",
        NotReverseElement: "∌",
        NotRightTriangleBar: "⧐̸",
        NotRightTriangle: "⋫",
        NotRightTriangleEqual: "⋭",
        NotSquareSubset: "⊏̸",
        NotSquareSubsetEqual: "⋢",
        NotSquareSuperset: "⊐̸",
        NotSquareSupersetEqual: "⋣",
        NotSubset: "⊂⃒",
        NotSubsetEqual: "⊈",
        NotSucceeds: "⊁",
        NotSucceedsEqual: "⪰̸",
        NotSucceedsSlantEqual: "⋡",
        NotSucceedsTilde: "≿̸",
        NotSuperset: "⊃⃒",
        NotSupersetEqual: "⊉",
        NotTilde: "≁",
        NotTildeEqual: "≄",
        NotTildeFullEqual: "≇",
        NotTildeTilde: "≉",
        NotVerticalBar: "∤",
        nparallel: "∦",
        npar: "∦",
        nparsl: "⫽⃥",
        npart: "∂̸",
        npolint: "⨔",
        npr: "⊀",
        nprcue: "⋠",
        nprec: "⊀",
        npreceq: "⪯̸",
        npre: "⪯̸",
        nrarrc: "⤳̸",
        nrarr: "↛",
        nrArr: "⇏",
        nrarrw: "↝̸",
        nrightarrow: "↛",
        nRightarrow: "⇏",
        nrtri: "⋫",
        nrtrie: "⋭",
        nsc: "⊁",
        nsccue: "⋡",
        nsce: "⪰̸",
        Nscr: "𝒩",
        nscr: "𝓃",
        nshortmid: "∤",
        nshortparallel: "∦",
        nsim: "≁",
        nsime: "≄",
        nsimeq: "≄",
        nsmid: "∤",
        nspar: "∦",
        nsqsube: "⋢",
        nsqsupe: "⋣",
        nsub: "⊄",
        nsubE: "⫅̸",
        nsube: "⊈",
        nsubset: "⊂⃒",
        nsubseteq: "⊈",
        nsubseteqq: "⫅̸",
        nsucc: "⊁",
        nsucceq: "⪰̸",
        nsup: "⊅",
        nsupE: "⫆̸",
        nsupe: "⊉",
        nsupset: "⊃⃒",
        nsupseteq: "⊉",
        nsupseteqq: "⫆̸",
        ntgl: "≹",
        Ntilde: "Ñ",
        ntilde: "ñ",
        ntlg: "≸",
        ntriangleleft: "⋪",
        ntrianglelefteq: "⋬",
        ntriangleright: "⋫",
        ntrianglerighteq: "⋭",
        Nu: "Ν",
        nu: "ν",
        num: "#",
        numero: "№",
        numsp: " ",
        nvap: "≍⃒",
        nvdash: "⊬",
        nvDash: "⊭",
        nVdash: "⊮",
        nVDash: "⊯",
        nvge: "≥⃒",
        nvgt: ">⃒",
        nvHarr: "⤄",
        nvinfin: "⧞",
        nvlArr: "⤂",
        nvle: "≤⃒",
        nvlt: "<⃒",
        nvltrie: "⊴⃒",
        nvrArr: "⤃",
        nvrtrie: "⊵⃒",
        nvsim: "∼⃒",
        nwarhk: "⤣",
        nwarr: "↖",
        nwArr: "⇖",
        nwarrow: "↖",
        nwnear: "⤧",
        Oacute: "Ó",
        oacute: "ó",
        oast: "⊛",
        Ocirc: "Ô",
        ocirc: "ô",
        ocir: "⊚",
        Ocy: "О",
        ocy: "о",
        odash: "⊝",
        Odblac: "Ő",
        odblac: "ő",
        odiv: "⨸",
        odot: "⊙",
        odsold: "⦼",
        OElig: "Œ",
        oelig: "œ",
        ofcir: "⦿",
        Ofr: "𝔒",
        ofr: "𝔬",
        ogon: "˛",
        Ograve: "Ò",
        ograve: "ò",
        ogt: "⧁",
        ohbar: "⦵",
        ohm: "Ω",
        oint: "∮",
        olarr: "↺",
        olcir: "⦾",
        olcross: "⦻",
        oline: "‾",
        olt: "⧀",
        Omacr: "Ō",
        omacr: "ō",
        Omega: "Ω",
        omega: "ω",
        Omicron: "Ο",
        omicron: "ο",
        omid: "⦶",
        ominus: "⊖",
        Oopf: "𝕆",
        oopf: "𝕠",
        opar: "⦷",
        OpenCurlyDoubleQuote: "“",
        OpenCurlyQuote: "‘",
        operp: "⦹",
        oplus: "⊕",
        orarr: "↻",
        Or: "⩔",
        or: "∨",
        ord: "⩝",
        order: "ℴ",
        orderof: "ℴ",
        ordf: "ª",
        ordm: "º",
        origof: "⊶",
        oror: "⩖",
        orslope: "⩗",
        orv: "⩛",
        oS: "Ⓢ",
        Oscr: "𝒪",
        oscr: "ℴ",
        Oslash: "Ø",
        oslash: "ø",
        osol: "⊘",
        Otilde: "Õ",
        otilde: "õ",
        otimesas: "⨶",
        Otimes: "⨷",
        otimes: "⊗",
        Ouml: "Ö",
        ouml: "ö",
        ovbar: "⌽",
        OverBar: "‾",
        OverBrace: "⏞",
        OverBracket: "⎴",
        OverParenthesis: "⏜",
        para: "¶",
        parallel: "∥",
        par: "∥",
        parsim: "⫳",
        parsl: "⫽",
        part: "∂",
        PartialD: "∂",
        Pcy: "П",
        pcy: "п",
        percnt: "%",
        period: ".",
        permil: "‰",
        perp: "⊥",
        pertenk: "‱",
        Pfr: "𝔓",
        pfr: "𝔭",
        Phi: "Φ",
        phi: "φ",
        phiv: "ϕ",
        phmmat: "ℳ",
        phone: "☎",
        Pi: "Π",
        pi: "π",
        pitchfork: "⋔",
        piv: "ϖ",
        planck: "ℏ",
        planckh: "ℎ",
        plankv: "ℏ",
        plusacir: "⨣",
        plusb: "⊞",
        pluscir: "⨢",
        plus: "+",
        plusdo: "∔",
        plusdu: "⨥",
        pluse: "⩲",
        PlusMinus: "±",
        plusmn: "±",
        plussim: "⨦",
        plustwo: "⨧",
        pm: "±",
        Poincareplane: "ℌ",
        pointint: "⨕",
        popf: "𝕡",
        Popf: "ℙ",
        pound: "£",
        prap: "⪷",
        Pr: "⪻",
        pr: "≺",
        prcue: "≼",
        precapprox: "⪷",
        prec: "≺",
        preccurlyeq: "≼",
        Precedes: "≺",
        PrecedesEqual: "⪯",
        PrecedesSlantEqual: "≼",
        PrecedesTilde: "≾",
        preceq: "⪯",
        precnapprox: "⪹",
        precneqq: "⪵",
        precnsim: "⋨",
        pre: "⪯",
        prE: "⪳",
        precsim: "≾",
        prime: "′",
        Prime: "″",
        primes: "ℙ",
        prnap: "⪹",
        prnE: "⪵",
        prnsim: "⋨",
        prod: "∏",
        Product: "∏",
        profalar: "⌮",
        profline: "⌒",
        profsurf: "⌓",
        prop: "∝",
        Proportional: "∝",
        Proportion: "∷",
        propto: "∝",
        prsim: "≾",
        prurel: "⊰",
        Pscr: "𝒫",
        pscr: "𝓅",
        Psi: "Ψ",
        psi: "ψ",
        puncsp: " ",
        Qfr: "𝔔",
        qfr: "𝔮",
        qint: "⨌",
        qopf: "𝕢",
        Qopf: "ℚ",
        qprime: "⁗",
        Qscr: "𝒬",
        qscr: "𝓆",
        quaternions: "ℍ",
        quatint: "⨖",
        quest: "?",
        questeq: "≟",
        quot: '"',
        QUOT: '"',
        rAarr: "⇛",
        race: "∽̱",
        Racute: "Ŕ",
        racute: "ŕ",
        radic: "√",
        raemptyv: "⦳",
        rang: "⟩",
        Rang: "⟫",
        rangd: "⦒",
        range: "⦥",
        rangle: "⟩",
        raquo: "»",
        rarrap: "⥵",
        rarrb: "⇥",
        rarrbfs: "⤠",
        rarrc: "⤳",
        rarr: "→",
        Rarr: "↠",
        rArr: "⇒",
        rarrfs: "⤞",
        rarrhk: "↪",
        rarrlp: "↬",
        rarrpl: "⥅",
        rarrsim: "⥴",
        Rarrtl: "⤖",
        rarrtl: "↣",
        rarrw: "↝",
        ratail: "⤚",
        rAtail: "⤜",
        ratio: "∶",
        rationals: "ℚ",
        rbarr: "⤍",
        rBarr: "⤏",
        RBarr: "⤐",
        rbbrk: "❳",
        rbrace: "}",
        rbrack: "]",
        rbrke: "⦌",
        rbrksld: "⦎",
        rbrkslu: "⦐",
        Rcaron: "Ř",
        rcaron: "ř",
        Rcedil: "Ŗ",
        rcedil: "ŗ",
        rceil: "⌉",
        rcub: "}",
        Rcy: "Р",
        rcy: "р",
        rdca: "⤷",
        rdldhar: "⥩",
        rdquo: "”",
        rdquor: "”",
        rdsh: "↳",
        real: "ℜ",
        realine: "ℛ",
        realpart: "ℜ",
        reals: "ℝ",
        Re: "ℜ",
        rect: "▭",
        reg: "®",
        REG: "®",
        ReverseElement: "∋",
        ReverseEquilibrium: "⇋",
        ReverseUpEquilibrium: "⥯",
        rfisht: "⥽",
        rfloor: "⌋",
        rfr: "𝔯",
        Rfr: "ℜ",
        rHar: "⥤",
        rhard: "⇁",
        rharu: "⇀",
        rharul: "⥬",
        Rho: "Ρ",
        rho: "ρ",
        rhov: "ϱ",
        RightAngleBracket: "⟩",
        RightArrowBar: "⇥",
        rightarrow: "→",
        RightArrow: "→",
        Rightarrow: "⇒",
        RightArrowLeftArrow: "⇄",
        rightarrowtail: "↣",
        RightCeiling: "⌉",
        RightDoubleBracket: "⟧",
        RightDownTeeVector: "⥝",
        RightDownVectorBar: "⥕",
        RightDownVector: "⇂",
        RightFloor: "⌋",
        rightharpoondown: "⇁",
        rightharpoonup: "⇀",
        rightleftarrows: "⇄",
        rightleftharpoons: "⇌",
        rightrightarrows: "⇉",
        rightsquigarrow: "↝",
        RightTeeArrow: "↦",
        RightTee: "⊢",
        RightTeeVector: "⥛",
        rightthreetimes: "⋌",
        RightTriangleBar: "⧐",
        RightTriangle: "⊳",
        RightTriangleEqual: "⊵",
        RightUpDownVector: "⥏",
        RightUpTeeVector: "⥜",
        RightUpVectorBar: "⥔",
        RightUpVector: "↾",
        RightVectorBar: "⥓",
        RightVector: "⇀",
        ring: "˚",
        risingdotseq: "≓",
        rlarr: "⇄",
        rlhar: "⇌",
        rlm: "‏",
        rmoustache: "⎱",
        rmoust: "⎱",
        rnmid: "⫮",
        roang: "⟭",
        roarr: "⇾",
        robrk: "⟧",
        ropar: "⦆",
        ropf: "𝕣",
        Ropf: "ℝ",
        roplus: "⨮",
        rotimes: "⨵",
        RoundImplies: "⥰",
        rpar: ")",
        rpargt: "⦔",
        rppolint: "⨒",
        rrarr: "⇉",
        Rrightarrow: "⇛",
        rsaquo: "›",
        rscr: "𝓇",
        Rscr: "ℛ",
        rsh: "↱",
        Rsh: "↱",
        rsqb: "]",
        rsquo: "’",
        rsquor: "’",
        rthree: "⋌",
        rtimes: "⋊",
        rtri: "▹",
        rtrie: "⊵",
        rtrif: "▸",
        rtriltri: "⧎",
        RuleDelayed: "⧴",
        ruluhar: "⥨",
        rx: "℞",
        Sacute: "Ś",
        sacute: "ś",
        sbquo: "‚",
        scap: "⪸",
        Scaron: "Š",
        scaron: "š",
        Sc: "⪼",
        sc: "≻",
        sccue: "≽",
        sce: "⪰",
        scE: "⪴",
        Scedil: "Ş",
        scedil: "ş",
        Scirc: "Ŝ",
        scirc: "ŝ",
        scnap: "⪺",
        scnE: "⪶",
        scnsim: "⋩",
        scpolint: "⨓",
        scsim: "≿",
        Scy: "С",
        scy: "с",
        sdotb: "⊡",
        sdot: "⋅",
        sdote: "⩦",
        searhk: "⤥",
        searr: "↘",
        seArr: "⇘",
        searrow: "↘",
        sect: "§",
        semi: ";",
        seswar: "⤩",
        setminus: "∖",
        setmn: "∖",
        sext: "✶",
        Sfr: "𝔖",
        sfr: "𝔰",
        sfrown: "⌢",
        sharp: "♯",
        SHCHcy: "Щ",
        shchcy: "щ",
        SHcy: "Ш",
        shcy: "ш",
        ShortDownArrow: "↓",
        ShortLeftArrow: "←",
        shortmid: "∣",
        shortparallel: "∥",
        ShortRightArrow: "→",
        ShortUpArrow: "↑",
        shy: "­",
        Sigma: "Σ",
        sigma: "σ",
        sigmaf: "ς",
        sigmav: "ς",
        sim: "∼",
        simdot: "⩪",
        sime: "≃",
        simeq: "≃",
        simg: "⪞",
        simgE: "⪠",
        siml: "⪝",
        simlE: "⪟",
        simne: "≆",
        simplus: "⨤",
        simrarr: "⥲",
        slarr: "←",
        SmallCircle: "∘",
        smallsetminus: "∖",
        smashp: "⨳",
        smeparsl: "⧤",
        smid: "∣",
        smile: "⌣",
        smt: "⪪",
        smte: "⪬",
        smtes: "⪬︀",
        SOFTcy: "Ь",
        softcy: "ь",
        solbar: "⌿",
        solb: "⧄",
        sol: "/",
        Sopf: "𝕊",
        sopf: "𝕤",
        spades: "♠",
        spadesuit: "♠",
        spar: "∥",
        sqcap: "⊓",
        sqcaps: "⊓︀",
        sqcup: "⊔",
        sqcups: "⊔︀",
        Sqrt: "√",
        sqsub: "⊏",
        sqsube: "⊑",
        sqsubset: "⊏",
        sqsubseteq: "⊑",
        sqsup: "⊐",
        sqsupe: "⊒",
        sqsupset: "⊐",
        sqsupseteq: "⊒",
        square: "□",
        Square: "□",
        SquareIntersection: "⊓",
        SquareSubset: "⊏",
        SquareSubsetEqual: "⊑",
        SquareSuperset: "⊐",
        SquareSupersetEqual: "⊒",
        SquareUnion: "⊔",
        squarf: "▪",
        squ: "□",
        squf: "▪",
        srarr: "→",
        Sscr: "𝒮",
        sscr: "𝓈",
        ssetmn: "∖",
        ssmile: "⌣",
        sstarf: "⋆",
        Star: "⋆",
        star: "☆",
        starf: "★",
        straightepsilon: "ϵ",
        straightphi: "ϕ",
        strns: "¯",
        sub: "⊂",
        Sub: "⋐",
        subdot: "⪽",
        subE: "⫅",
        sube: "⊆",
        subedot: "⫃",
        submult: "⫁",
        subnE: "⫋",
        subne: "⊊",
        subplus: "⪿",
        subrarr: "⥹",
        subset: "⊂",
        Subset: "⋐",
        subseteq: "⊆",
        subseteqq: "⫅",
        SubsetEqual: "⊆",
        subsetneq: "⊊",
        subsetneqq: "⫋",
        subsim: "⫇",
        subsub: "⫕",
        subsup: "⫓",
        succapprox: "⪸",
        succ: "≻",
        succcurlyeq: "≽",
        Succeeds: "≻",
        SucceedsEqual: "⪰",
        SucceedsSlantEqual: "≽",
        SucceedsTilde: "≿",
        succeq: "⪰",
        succnapprox: "⪺",
        succneqq: "⪶",
        succnsim: "⋩",
        succsim: "≿",
        SuchThat: "∋",
        sum: "∑",
        Sum: "∑",
        sung: "♪",
        sup1: "¹",
        sup2: "²",
        sup3: "³",
        sup: "⊃",
        Sup: "⋑",
        supdot: "⪾",
        supdsub: "⫘",
        supE: "⫆",
        supe: "⊇",
        supedot: "⫄",
        Superset: "⊃",
        SupersetEqual: "⊇",
        suphsol: "⟉",
        suphsub: "⫗",
        suplarr: "⥻",
        supmult: "⫂",
        supnE: "⫌",
        supne: "⊋",
        supplus: "⫀",
        supset: "⊃",
        Supset: "⋑",
        supseteq: "⊇",
        supseteqq: "⫆",
        supsetneq: "⊋",
        supsetneqq: "⫌",
        supsim: "⫈",
        supsub: "⫔",
        supsup: "⫖",
        swarhk: "⤦",
        swarr: "↙",
        swArr: "⇙",
        swarrow: "↙",
        swnwar: "⤪",
        szlig: "ß",
        Tab: "\t",
        target: "⌖",
        Tau: "Τ",
        tau: "τ",
        tbrk: "⎴",
        Tcaron: "Ť",
        tcaron: "ť",
        Tcedil: "Ţ",
        tcedil: "ţ",
        Tcy: "Т",
        tcy: "т",
        tdot: "⃛",
        telrec: "⌕",
        Tfr: "𝔗",
        tfr: "𝔱",
        there4: "∴",
        therefore: "∴",
        Therefore: "∴",
        Theta: "Θ",
        theta: "θ",
        thetasym: "ϑ",
        thetav: "ϑ",
        thickapprox: "≈",
        thicksim: "∼",
        ThickSpace: "  ",
        ThinSpace: " ",
        thinsp: " ",
        thkap: "≈",
        thksim: "∼",
        THORN: "Þ",
        thorn: "þ",
        tilde: "˜",
        Tilde: "∼",
        TildeEqual: "≃",
        TildeFullEqual: "≅",
        TildeTilde: "≈",
        timesbar: "⨱",
        timesb: "⊠",
        times: "×",
        timesd: "⨰",
        tint: "∭",
        toea: "⤨",
        topbot: "⌶",
        topcir: "⫱",
        top: "⊤",
        Topf: "𝕋",
        topf: "𝕥",
        topfork: "⫚",
        tosa: "⤩",
        tprime: "‴",
        trade: "™",
        TRADE: "™",
        triangle: "▵",
        triangledown: "▿",
        triangleleft: "◃",
        trianglelefteq: "⊴",
        triangleq: "≜",
        triangleright: "▹",
        trianglerighteq: "⊵",
        tridot: "◬",
        trie: "≜",
        triminus: "⨺",
        TripleDot: "⃛",
        triplus: "⨹",
        trisb: "⧍",
        tritime: "⨻",
        trpezium: "⏢",
        Tscr: "𝒯",
        tscr: "𝓉",
        TScy: "Ц",
        tscy: "ц",
        TSHcy: "Ћ",
        tshcy: "ћ",
        Tstrok: "Ŧ",
        tstrok: "ŧ",
        twixt: "≬",
        twoheadleftarrow: "↞",
        twoheadrightarrow: "↠",
        Uacute: "Ú",
        uacute: "ú",
        uarr: "↑",
        Uarr: "↟",
        uArr: "⇑",
        Uarrocir: "⥉",
        Ubrcy: "Ў",
        ubrcy: "ў",
        Ubreve: "Ŭ",
        ubreve: "ŭ",
        Ucirc: "Û",
        ucirc: "û",
        Ucy: "У",
        ucy: "у",
        udarr: "⇅",
        Udblac: "Ű",
        udblac: "ű",
        udhar: "⥮",
        ufisht: "⥾",
        Ufr: "𝔘",
        ufr: "𝔲",
        Ugrave: "Ù",
        ugrave: "ù",
        uHar: "⥣",
        uharl: "↿",
        uharr: "↾",
        uhblk: "▀",
        ulcorn: "⌜",
        ulcorner: "⌜",
        ulcrop: "⌏",
        ultri: "◸",
        Umacr: "Ū",
        umacr: "ū",
        uml: "¨",
        UnderBar: "_",
        UnderBrace: "⏟",
        UnderBracket: "⎵",
        UnderParenthesis: "⏝",
        Union: "⋃",
        UnionPlus: "⊎",
        Uogon: "Ų",
        uogon: "ų",
        Uopf: "𝕌",
        uopf: "𝕦",
        UpArrowBar: "⤒",
        uparrow: "↑",
        UpArrow: "↑",
        Uparrow: "⇑",
        UpArrowDownArrow: "⇅",
        updownarrow: "↕",
        UpDownArrow: "↕",
        Updownarrow: "⇕",
        UpEquilibrium: "⥮",
        upharpoonleft: "↿",
        upharpoonright: "↾",
        uplus: "⊎",
        UpperLeftArrow: "↖",
        UpperRightArrow: "↗",
        upsi: "υ",
        Upsi: "ϒ",
        upsih: "ϒ",
        Upsilon: "Υ",
        upsilon: "υ",
        UpTeeArrow: "↥",
        UpTee: "⊥",
        upuparrows: "⇈",
        urcorn: "⌝",
        urcorner: "⌝",
        urcrop: "⌎",
        Uring: "Ů",
        uring: "ů",
        urtri: "◹",
        Uscr: "𝒰",
        uscr: "𝓊",
        utdot: "⋰",
        Utilde: "Ũ",
        utilde: "ũ",
        utri: "▵",
        utrif: "▴",
        uuarr: "⇈",
        Uuml: "Ü",
        uuml: "ü",
        uwangle: "⦧",
        vangrt: "⦜",
        varepsilon: "ϵ",
        varkappa: "ϰ",
        varnothing: "∅",
        varphi: "ϕ",
        varpi: "ϖ",
        varpropto: "∝",
        varr: "↕",
        vArr: "⇕",
        varrho: "ϱ",
        varsigma: "ς",
        varsubsetneq: "⊊︀",
        varsubsetneqq: "⫋︀",
        varsupsetneq: "⊋︀",
        varsupsetneqq: "⫌︀",
        vartheta: "ϑ",
        vartriangleleft: "⊲",
        vartriangleright: "⊳",
        vBar: "⫨",
        Vbar: "⫫",
        vBarv: "⫩",
        Vcy: "В",
        vcy: "в",
        vdash: "⊢",
        vDash: "⊨",
        Vdash: "⊩",
        VDash: "⊫",
        Vdashl: "⫦",
        veebar: "⊻",
        vee: "∨",
        Vee: "⋁",
        veeeq: "≚",
        vellip: "⋮",
        verbar: "|",
        Verbar: "‖",
        vert: "|",
        Vert: "‖",
        VerticalBar: "∣",
        VerticalLine: "|",
        VerticalSeparator: "❘",
        VerticalTilde: "≀",
        VeryThinSpace: " ",
        Vfr: "𝔙",
        vfr: "𝔳",
        vltri: "⊲",
        vnsub: "⊂⃒",
        vnsup: "⊃⃒",
        Vopf: "𝕍",
        vopf: "𝕧",
        vprop: "∝",
        vrtri: "⊳",
        Vscr: "𝒱",
        vscr: "𝓋",
        vsubnE: "⫋︀",
        vsubne: "⊊︀",
        vsupnE: "⫌︀",
        vsupne: "⊋︀",
        Vvdash: "⊪",
        vzigzag: "⦚",
        Wcirc: "Ŵ",
        wcirc: "ŵ",
        wedbar: "⩟",
        wedge: "∧",
        Wedge: "⋀",
        wedgeq: "≙",
        weierp: "℘",
        Wfr: "𝔚",
        wfr: "𝔴",
        Wopf: "𝕎",
        wopf: "𝕨",
        wp: "℘",
        wr: "≀",
        wreath: "≀",
        Wscr: "𝒲",
        wscr: "𝓌",
        xcap: "⋂",
        xcirc: "◯",
        xcup: "⋃",
        xdtri: "▽",
        Xfr: "𝔛",
        xfr: "𝔵",
        xharr: "⟷",
        xhArr: "⟺",
        Xi: "Ξ",
        xi: "ξ",
        xlarr: "⟵",
        xlArr: "⟸",
        xmap: "⟼",
        xnis: "⋻",
        xodot: "⨀",
        Xopf: "𝕏",
        xopf: "𝕩",
        xoplus: "⨁",
        xotime: "⨂",
        xrarr: "⟶",
        xrArr: "⟹",
        Xscr: "𝒳",
        xscr: "𝓍",
        xsqcup: "⨆",
        xuplus: "⨄",
        xutri: "△",
        xvee: "⋁",
        xwedge: "⋀",
        Yacute: "Ý",
        yacute: "ý",
        YAcy: "Я",
        yacy: "я",
        Ycirc: "Ŷ",
        ycirc: "ŷ",
        Ycy: "Ы",
        ycy: "ы",
        yen: "¥",
        Yfr: "𝔜",
        yfr: "𝔶",
        YIcy: "Ї",
        yicy: "ї",
        Yopf: "𝕐",
        yopf: "𝕪",
        Yscr: "𝒴",
        yscr: "𝓎",
        YUcy: "Ю",
        yucy: "ю",
        yuml: "ÿ",
        Yuml: "Ÿ",
        Zacute: "Ź",
        zacute: "ź",
        Zcaron: "Ž",
        zcaron: "ž",
        Zcy: "З",
        zcy: "з",
        Zdot: "Ż",
        zdot: "ż",
        zeetrf: "ℨ",
        ZeroWidthSpace: "​",
        Zeta: "Ζ",
        zeta: "ζ",
        zfr: "𝔷",
        Zfr: "ℨ",
        ZHcy: "Ж",
        zhcy: "ж",
        zigrarr: "⇝",
        zopf: "𝕫",
        Zopf: "ℤ",
        Zscr: "𝒵",
        zscr: "𝓏",
        zwj: "‍",
        zwnj: "‌"
    }
}
, function(e, t) {
    e.exports = {
        100: "💯",
        1234: "🔢",
        grinning: "😀",
        grimacing: "😬",
        grin: "😁",
        joy: "😂",
        smiley: "😃",
        smile: "😄",
        sweat_smile: "😅",
        laughing: "😆",
        satisfied: "😆",
        innocent: "😇",
        wink: "😉",
        blush: "😊",
        slightly_smiling_face: "🙂",
        upside_down_face: "🙃",
        relaxed: "☺️",
        yum: "😋",
        relieved: "😌",
        heart_eyes: "😍",
        kissing_heart: "😘",
        kissing: "😗",
        kissing_smiling_eyes: "😙",
        kissing_closed_eyes: "😚",
        stuck_out_tongue_winking_eye: "😜",
        stuck_out_tongue_closed_eyes: "😝",
        stuck_out_tongue: "😛",
        money_mouth_face: "🤑",
        nerd_face: "🤓",
        sunglasses: "😎",
        hugs: "🤗",
        smirk: "😏",
        no_mouth: "😶",
        neutral_face: "😐",
        expressionless: "😑",
        unamused: "😒",
        roll_eyes: "🙄",
        thinking: "🤔",
        flushed: "😳",
        disappointed: "😞",
        worried: "😟",
        angry: "😠",
        rage: "😡",
        pout: "😡",
        pensive: "😔",
        confused: "😕",
        slightly_frowning_face: "🙁",
        frowning_face: "☹️",
        persevere: "😣",
        confounded: "😖",
        tired_face: "😫",
        weary: "😩",
        triumph: "😤",
        open_mouth: "😮",
        scream: "😱",
        fearful: "😨",
        cold_sweat: "😰",
        hushed: "😯",
        frowning: "😦",
        anguished: "😧",
        cry: "😢",
        disappointed_relieved: "😥",
        sleepy: "😪",
        sweat: "😓",
        sob: "😭",
        dizzy_face: "😵",
        astonished: "😲",
        zipper_mouth_face: "🤐",
        mask: "😷",
        face_with_thermometer: "🤒",
        face_with_head_bandage: "🤕",
        sleeping: "😴",
        zzz: "💤",
        hankey: "💩",
        poop: "💩",
        shit: "💩",
        smiling_imp: "😈",
        imp: "👿",
        japanese_ogre: "👹",
        japanese_goblin: "👺",
        ghost: "👻",
        skull: "💀",
        skull_and_crossbones: "☠️",
        alien: "👽",
        space_invader: "👾",
        robot: "🤖",
        smiley_cat: "😺",
        smile_cat: "😸",
        joy_cat: "😹",
        heart_eyes_cat: "😻",
        smirk_cat: "😼",
        kissing_cat: "😽",
        scream_cat: "🙀",
        crying_cat_face: "😿",
        pouting_cat: "😾",
        raised_hands: "🙌",
        clap: "👏",
        "+1": "👍",
        thumbsup: "👍",
        "-1": "👎",
        thumbsdown: "👎",
        facepunch: "👊",
        punch: "👊",
        fist: "✊",
        wave: "👋",
        point_left: "👈",
        point_right: "👉",
        point_up_2: "👆",
        point_down: "👇",
        ok_hand: "👌",
        point_up: "☝️",
        v: "✌️",
        hand: "✋",
        raised_hand: "✋",
        raised_hand_with_fingers_splayed: "🖐",
        open_hands: "👐",
        muscle: "💪",
        pray: "🙏",
        vulcan_salute: "🖖",
        metal: "🤘",
        middle_finger: "🖕",
        fu: "🖕",
        writing_hand: "✍️",
        nail_care: "💅",
        lips: "👄",
        tongue: "👅",
        ear: "👂",
        nose: "👃",
        eye: "👁",
        eyes: "👀",
        speaking_head: "🗣",
        bust_in_silhouette: "👤",
        busts_in_silhouette: "👥",
        baby: "👶",
        boy: "👦",
        girl: "👧",
        man: "👨",
        woman: "👩",
        blonde_woman: "👱‍♀️",
        blonde_man: "👱",
        person_with_blond_hair: "👱",
        older_man: "👴",
        older_woman: "👵",
        man_with_gua_pi_mao: "👲",
        woman_with_turban: "👳‍♀️",
        man_with_turban: "👳",
        policewoman: "👮‍♀️",
        policeman: "👮",
        cop: "👮",
        construction_worker_woman: "👷‍♀️",
        construction_worker_man: "👷",
        construction_worker: "👷",
        guardswoman: "💂‍♀️",
        guardsman: "💂",
        female_detective: "🕵️‍♀️",
        male_detective: "🕵️",
        detective: "🕵️",
        santa: "🎅",
        princess: "👸",
        bride_with_veil: "👰",
        angel: "👼",
        bowing_woman: "🙇‍♀️",
        bowing_man: "🙇",
        bow: "🙇",
        tipping_hand_woman: "💁",
        information_desk_person: "💁",
        tipping_hand_man: "💁‍♂️",
        no_good_woman: "🙅",
        no_good: "🙅",
        ng_woman: "🙅",
        no_good_man: "🙅‍♂️",
        ng_man: "🙅‍♂️",
        ok_woman: "🙆",
        ok_man: "🙆‍♂️",
        raising_hand_woman: "🙋",
        raising_hand: "🙋",
        raising_hand_man: "🙋‍♂️",
        pouting_woman: "🙎",
        person_with_pouting_face: "🙎",
        pouting_man: "🙎‍♂️",
        frowning_woman: "🙍",
        person_frowning: "🙍",
        frowning_man: "🙍‍♂️",
        haircut_woman: "💇",
        haircut: "💇",
        haircut_man: "💇‍♂️",
        massage_woman: "💆",
        massage: "💆",
        massage_man: "💆‍♂️",
        dancer: "💃",
        dancing_women: "👯",
        dancers: "👯",
        dancing_men: "👯‍♂️",
        walking_woman: "🚶‍♀️",
        walking_man: "🚶",
        walking: "🚶",
        running_woman: "🏃‍♀️",
        running_man: "🏃",
        runner: "🏃",
        running: "🏃",
        couple: "👫",
        two_women_holding_hands: "👭",
        two_men_holding_hands: "👬",
        couple_with_heart_woman_man: "💑",
        couple_with_heart: "💑",
        couple_with_heart_woman_woman: "👩‍❤️‍👩",
        couple_with_heart_man_man: "👨‍❤️‍👨",
        couplekiss_man_woman: "💏",
        couplekiss_woman_woman: "👩‍❤️‍💋‍👩",
        couplekiss_man_man: "👨‍❤️‍💋‍👨",
        family_man_woman_boy: "👪",
        family: "👪",
        family_man_woman_girl: "👨‍👩‍👧",
        family_man_woman_girl_boy: "👨‍👩‍👧‍👦",
        family_man_woman_boy_boy: "👨‍👩‍👦‍👦",
        family_man_woman_girl_girl: "👨‍👩‍👧‍👧",
        family_woman_woman_boy: "👩‍👩‍👦",
        family_woman_woman_girl: "👩‍👩‍👧",
        family_woman_woman_girl_boy: "👩‍👩‍👧‍👦",
        family_woman_woman_boy_boy: "👩‍👩‍👦‍👦",
        family_woman_woman_girl_girl: "👩‍👩‍👧‍👧",
        family_man_man_boy: "👨‍👨‍👦",
        family_man_man_girl: "👨‍👨‍👧",
        family_man_man_girl_boy: "👨‍👨‍👧‍👦",
        family_man_man_boy_boy: "👨‍👨‍👦‍👦",
        family_man_man_girl_girl: "👨‍👨‍👧‍👧",
        family_woman_boy: "👩‍👦",
        family_woman_girl: "👩‍👧",
        family_woman_girl_boy: "👩‍👧‍👦",
        family_woman_boy_boy: "👩‍👦‍👦",
        family_woman_girl_girl: "👩‍👧‍👧",
        family_man_boy: "👨‍👦",
        family_man_girl: "👨‍👧",
        family_man_girl_boy: "👨‍👧‍👦",
        family_man_boy_boy: "👨‍👦‍👦",
        family_man_girl_girl: "👨‍👧‍👧",
        womans_clothes: "👚",
        shirt: "👕",
        tshirt: "👕",
        jeans: "👖",
        necktie: "👔",
        dress: "👗",
        bikini: "👙",
        kimono: "👘",
        lipstick: "💄",
        kiss: "💋",
        footprints: "👣",
        high_heel: "👠",
        sandal: "👡",
        boot: "👢",
        mans_shoe: "👞",
        shoe: "👞",
        athletic_shoe: "👟",
        womans_hat: "👒",
        tophat: "🎩",
        mortar_board: "🎓",
        crown: "👑",
        rescue_worker_helmet: "⛑",
        school_satchel: "🎒",
        pouch: "👝",
        purse: "👛",
        handbag: "👜",
        briefcase: "💼",
        eyeglasses: "👓",
        dark_sunglasses: "🕶",
        ring: "💍",
        closed_umbrella: "🌂",
        dog: "🐶",
        cat: "🐱",
        mouse: "🐭",
        hamster: "🐹",
        rabbit: "🐰",
        bear: "🐻",
        panda_face: "🐼",
        koala: "🐨",
        tiger: "🐯",
        lion: "🦁",
        cow: "🐮",
        pig: "🐷",
        pig_nose: "🐽",
        frog: "🐸",
        octopus: "🐙",
        monkey_face: "🐵",
        see_no_evil: "🙈",
        hear_no_evil: "🙉",
        speak_no_evil: "🙊",
        monkey: "🐒",
        chicken: "🐔",
        penguin: "🐧",
        bird: "🐦",
        baby_chick: "🐤",
        hatching_chick: "🐣",
        hatched_chick: "🐥",
        wolf: "🐺",
        boar: "🐗",
        horse: "🐴",
        unicorn: "🦄",
        bee: "🐝",
        honeybee: "🐝",
        bug: "🐛",
        snail: "🐌",
        beetle: "🐞",
        ant: "🐜",
        spider: "🕷",
        scorpion: "🦂",
        crab: "🦀",
        snake: "🐍",
        turtle: "🐢",
        tropical_fish: "🐠",
        fish: "🐟",
        blowfish: "🐡",
        dolphin: "🐬",
        flipper: "🐬",
        whale: "🐳",
        whale2: "🐋",
        crocodile: "🐊",
        leopard: "🐆",
        tiger2: "🐅",
        water_buffalo: "🐃",
        ox: "🐂",
        cow2: "🐄",
        dromedary_camel: "🐪",
        camel: "🐫",
        elephant: "🐘",
        goat: "🐐",
        ram: "🐏",
        sheep: "🐑",
        racehorse: "🐎",
        pig2: "🐖",
        rat: "🐀",
        mouse2: "🐁",
        rooster: "🐓",
        turkey: "🦃",
        dove: "🕊",
        dog2: "🐕",
        poodle: "🐩",
        cat2: "🐈",
        rabbit2: "🐇",
        chipmunk: "🐿",
        feet: "🐾",
        paw_prints: "🐾",
        dragon: "🐉",
        dragon_face: "🐲",
        cactus: "🌵",
        christmas_tree: "🎄",
        evergreen_tree: "🌲",
        deciduous_tree: "🌳",
        palm_tree: "🌴",
        seedling: "🌱",
        herb: "🌿",
        shamrock: "☘",
        four_leaf_clover: "🍀",
        bamboo: "🎍",
        tanabata_tree: "🎋",
        leaves: "🍃",
        fallen_leaf: "🍂",
        maple_leaf: "🍁",
        ear_of_rice: "🌾",
        hibiscus: "🌺",
        sunflower: "🌻",
        rose: "🌹",
        tulip: "🌷",
        blossom: "🌼",
        cherry_blossom: "🌸",
        bouquet: "💐",
        mushroom: "🍄",
        chestnut: "🌰",
        jack_o_lantern: "🎃",
        shell: "🐚",
        spider_web: "🕸",
        earth_americas: "🌎",
        earth_africa: "🌍",
        earth_asia: "🌏",
        full_moon: "🌕",
        waning_gibbous_moon: "🌖",
        last_quarter_moon: "🌗",
        waning_crescent_moon: "🌘",
        new_moon: "🌑",
        waxing_crescent_moon: "🌒",
        first_quarter_moon: "🌓",
        moon: "🌔",
        waxing_gibbous_moon: "🌔",
        new_moon_with_face: "🌚",
        full_moon_with_face: "🌝",
        first_quarter_moon_with_face: "🌛",
        last_quarter_moon_with_face: "🌜",
        sun_with_face: "🌞",
        crescent_moon: "🌙",
        star: "⭐️",
        star2: "🌟",
        dizzy: "💫",
        sparkles: "✨",
        comet: "☄️",
        sunny: "☀️",
        sun_behind_small_cloud: "🌤",
        partly_sunny: "⛅️",
        sun_behind_large_cloud: "🌥",
        sun_behind_rain_cloud: "🌦",
        cloud: "☁️",
        cloud_with_rain: "🌧",
        cloud_with_lightning_and_rain: "⛈",
        cloud_with_lightning: "🌩",
        zap: "⚡️",
        fire: "🔥",
        boom: "💥",
        collision: "💥",
        snowflake: "❄️",
        cloud_with_snow: "🌨",
        snowman_with_snow: "☃️",
        snowman: "⛄️",
        wind_face: "🌬",
        dash: "💨",
        tornado: "🌪",
        fog: "🌫",
        open_umbrella: "☂️",
        umbrella: "☔️",
        droplet: "💧",
        sweat_drops: "💦",
        ocean: "🌊",
        green_apple: "🍏",
        apple: "🍎",
        pear: "🍐",
        tangerine: "🍊",
        orange: "🍊",
        mandarin: "🍊",
        lemon: "🍋",
        banana: "🍌",
        watermelon: "🍉",
        grapes: "🍇",
        strawberry: "🍓",
        melon: "🍈",
        cherries: "🍒",
        peach: "🍑",
        pineapple: "🍍",
        tomato: "🍅",
        eggplant: "🍆",
        hot_pepper: "🌶",
        corn: "🌽",
        sweet_potato: "🍠",
        honey_pot: "🍯",
        bread: "🍞",
        cheese: "🧀",
        poultry_leg: "🍗",
        meat_on_bone: "🍖",
        fried_shrimp: "🍤",
        egg: "🍳",
        hamburger: "🍔",
        fries: "🍟",
        hotdog: "🌭",
        pizza: "🍕",
        spaghetti: "🍝",
        taco: "🌮",
        burrito: "🌯",
        ramen: "🍜",
        stew: "🍲",
        fish_cake: "🍥",
        sushi: "🍣",
        bento: "🍱",
        curry: "🍛",
        rice_ball: "🍙",
        rice: "🍚",
        rice_cracker: "🍘",
        oden: "🍢",
        dango: "🍡",
        shaved_ice: "🍧",
        ice_cream: "🍨",
        icecream: "🍦",
        cake: "🍰",
        birthday: "🎂",
        custard: "🍮",
        candy: "🍬",
        lollipop: "🍭",
        chocolate_bar: "🍫",
        popcorn: "🍿",
        doughnut: "🍩",
        cookie: "🍪",
        beer: "🍺",
        beers: "🍻",
        wine_glass: "🍷",
        cocktail: "🍸",
        tropical_drink: "🍹",
        champagne: "🍾",
        sake: "🍶",
        tea: "🍵",
        coffee: "☕️",
        baby_bottle: "🍼",
        fork_and_knife: "🍴",
        plate_with_cutlery: "🍽",
        soccer: "⚽️",
        basketball: "🏀",
        football: "🏈",
        baseball: "⚾️",
        tennis: "🎾",
        volleyball: "🏐",
        rugby_football: "🏉",
        "8ball": "🎱",
        ping_pong: "🏓",
        badminton: "🏸",
        ice_hockey: "🏒",
        field_hockey: "🏑",
        cricket: "🏏",
        bow_and_arrow: "🏹",
        golf: "⛳️",
        fishing_pole_and_fish: "🎣",
        ice_skate: "⛸",
        ski: "🎿",
        skier: "⛷",
        snowboarder: "🏂",
        weight_lifting_woman: "🏋️‍♀️",
        weight_lifting_man: "🏋️",
        basketball_woman: "⛹️‍♀️",
        basketball_man: "⛹️",
        golfing_woman: "🏌️‍♀️",
        golfing_man: "🏌️",
        surfing_woman: "🏄‍♀️",
        surfing_man: "🏄",
        surfer: "🏄",
        swimming_woman: "🏊‍♀️",
        swimming_man: "🏊",
        swimmer: "🏊",
        rowing_woman: "🚣‍♀️",
        rowing_man: "🚣",
        rowboat: "🚣",
        horse_racing: "🏇",
        biking_woman: "🚴‍♀️",
        biking_man: "🚴",
        bicyclist: "🚴",
        mountain_biking_woman: "🚵‍♀️",
        mountain_biking_man: "🚵",
        mountain_bicyclist: "🚵",
        bath: "🛀",
        business_suit_levitating: "🕴",
        reminder_ribbon: "🎗",
        running_shirt_with_sash: "🎽",
        medal_sports: "🏅",
        medal_military: "🎖",
        trophy: "🏆",
        rosette: "🏵",
        dart: "🎯",
        ticket: "🎫",
        tickets: "🎟",
        performing_arts: "🎭",
        art: "🎨",
        circus_tent: "🎪",
        clapper: "🎬",
        microphone: "🎤",
        headphones: "🎧",
        musical_score: "🎼",
        musical_keyboard: "🎹",
        saxophone: "🎷",
        trumpet: "🎺",
        guitar: "🎸",
        violin: "🎻",
        video_game: "🎮",
        slot_machine: "🎰",
        game_die: "🎲",
        bowling: "🎳",
        car: "🚗",
        red_car: "🚗",
        taxi: "🚕",
        blue_car: "🚙",
        bus: "🚌",
        trolleybus: "🚎",
        racing_car: "🏎",
        police_car: "🚓",
        ambulance: "🚑",
        fire_engine: "🚒",
        minibus: "🚐",
        truck: "🚚",
        articulated_lorry: "🚛",
        tractor: "🚜",
        motorcycle: "🏍",
        bike: "🚲",
        rotating_light: "🚨",
        oncoming_police_car: "🚔",
        oncoming_bus: "🚍",
        oncoming_automobile: "🚘",
        oncoming_taxi: "🚖",
        aerial_tramway: "🚡",
        mountain_cableway: "🚠",
        suspension_railway: "🚟",
        railway_car: "🚃",
        train: "🚋",
        monorail: "🚝",
        bullettrain_side: "🚄",
        bullettrain_front: "🚅",
        light_rail: "🚈",
        mountain_railway: "🚞",
        steam_locomotive: "🚂",
        train2: "🚆",
        metro: "🚇",
        tram: "🚊",
        station: "🚉",
        helicopter: "🚁",
        small_airplane: "🛩",
        airplane: "✈️",
        flight_departure: "🛫",
        flight_arrival: "🛬",
        boat: "⛵️",
        sailboat: "⛵️",
        motor_boat: "🛥",
        speedboat: "🚤",
        ferry: "⛴",
        passenger_ship: "🛳",
        rocket: "🚀",
        artificial_satellite: "🛰",
        seat: "💺",
        anchor: "⚓️",
        construction: "🚧",
        fuelpump: "⛽️",
        busstop: "🚏",
        vertical_traffic_light: "🚦",
        traffic_light: "🚥",
        world_map: "🗺",
        ship: "🚢",
        ferris_wheel: "🎡",
        roller_coaster: "🎢",
        carousel_horse: "🎠",
        building_construction: "🏗",
        foggy: "🌁",
        tokyo_tower: "🗼",
        factory: "🏭",
        fountain: "⛲️",
        rice_scene: "🎑",
        mountain: "⛰",
        mountain_snow: "🏔",
        mount_fuji: "🗻",
        volcano: "🌋",
        japan: "🗾",
        camping: "🏕",
        tent: "⛺️",
        national_park: "🏞",
        motorway: "🛣",
        railway_track: "🛤",
        sunrise: "🌅",
        sunrise_over_mountains: "🌄",
        desert: "🏜",
        beach_umbrella: "🏖",
        desert_island: "🏝",
        city_sunrise: "🌇",
        city_sunset: "🌆",
        cityscape: "🏙",
        night_with_stars: "🌃",
        bridge_at_night: "🌉",
        milky_way: "🌌",
        stars: "🌠",
        sparkler: "🎇",
        fireworks: "🎆",
        rainbow: "🌈",
        houses: "🏘",
        european_castle: "🏰",
        japanese_castle: "🏯",
        stadium: "🏟",
        statue_of_liberty: "🗽",
        house: "🏠",
        house_with_garden: "🏡",
        derelict_house: "🏚",
        office: "🏢",
        department_store: "🏬",
        post_office: "🏣",
        european_post_office: "🏤",
        hospital: "🏥",
        bank: "🏦",
        hotel: "🏨",
        convenience_store: "🏪",
        school: "🏫",
        love_hotel: "🏩",
        wedding: "💒",
        classical_building: "🏛",
        church: "⛪️",
        mosque: "🕌",
        synagogue: "🕍",
        kaaba: "🕋",
        shinto_shrine: "⛩",
        watch: "⌚️",
        iphone: "📱",
        calling: "📲",
        computer: "💻",
        keyboard: "⌨️",
        desktop_computer: "🖥",
        printer: "🖨",
        computer_mouse: "🖱",
        trackball: "🖲",
        joystick: "🕹",
        clamp: "🗜",
        minidisc: "💽",
        floppy_disk: "💾",
        cd: "💿",
        dvd: "📀",
        vhs: "📼",
        camera: "📷",
        camera_flash: "📸",
        video_camera: "📹",
        movie_camera: "🎥",
        film_projector: "📽",
        film_strip: "🎞",
        telephone_receiver: "📞",
        phone: "☎️",
        telephone: "☎️",
        pager: "📟",
        fax: "📠",
        tv: "📺",
        radio: "📻",
        studio_microphone: "🎙",
        level_slider: "🎚",
        control_knobs: "🎛",
        stopwatch: "⏱",
        timer_clock: "⏲",
        alarm_clock: "⏰",
        mantelpiece_clock: "🕰",
        hourglass_flowing_sand: "⏳",
        hourglass: "⌛️",
        satellite: "📡",
        battery: "🔋",
        electric_plug: "🔌",
        bulb: "💡",
        flashlight: "🔦",
        candle: "🕯",
        wastebasket: "🗑",
        oil_drum: "🛢",
        money_with_wings: "💸",
        dollar: "💵",
        yen: "💴",
        euro: "💶",
        pound: "💷",
        moneybag: "💰",
        credit_card: "💳",
        gem: "💎",
        balance_scale: "⚖",
        wrench: "🔧",
        hammer: "🔨",
        hammer_and_pick: "⚒",
        hammer_and_wrench: "🛠",
        pick: "⛏",
        nut_and_bolt: "🔩",
        gear: "⚙",
        chains: "⛓",
        gun: "🔫",
        bomb: "💣",
        hocho: "🔪",
        knife: "🔪",
        dagger: "🗡",
        crossed_swords: "⚔",
        shield: "🛡",
        smoking: "🚬",
        coffin: "⚰",
        funeral_urn: "⚱",
        amphora: "🏺",
        crystal_ball: "🔮",
        prayer_beads: "📿",
        barber: "💈",
        alembic: "⚗",
        telescope: "🔭",
        microscope: "🔬",
        hole: "🕳",
        pill: "💊",
        syringe: "💉",
        thermometer: "🌡",
        toilet: "🚽",
        shower: "🚿",
        bathtub: "🛁",
        bellhop_bell: "🛎",
        key: "🔑",
        old_key: "🗝",
        door: "🚪",
        couch_and_lamp: "🛋",
        sleeping_bed: "🛌",
        bed: "🛏",
        framed_picture: "🖼",
        parasol_on_ground: "⛱",
        moyai: "🗿",
        shopping: "🛍",
        gift: "🎁",
        balloon: "🎈",
        flags: "🎏",
        ribbon: "🎀",
        confetti_ball: "🎊",
        tada: "🎉",
        wind_chime: "🎐",
        izakaya_lantern: "🏮",
        lantern: "🏮",
        dolls: "🎎",
        email: "✉️",
        envelope: "✉️",
        envelope_with_arrow: "📩",
        incoming_envelope: "📨",
        "e-mail": "📧",
        love_letter: "💌",
        inbox_tray: "📥",
        outbox_tray: "📤",
        package: "📦",
        label: "🏷",
        bookmark: "🔖",
        mailbox_closed: "📪",
        mailbox: "📫",
        mailbox_with_mail: "📬",
        mailbox_with_no_mail: "📭",
        postbox: "📮",
        postal_horn: "📯",
        scroll: "📜",
        page_with_curl: "📃",
        page_facing_up: "📄",
        bookmark_tabs: "📑",
        bar_chart: "📊",
        chart_with_upwards_trend: "📈",
        chart_with_downwards_trend: "📉",
        spiral_notepad: "🗒",
        spiral_calendar: "🗓",
        calendar: "📆",
        date: "📅",
        card_index: "📇",
        card_file_box: "🗃",
        ballot_box: "🗳",
        file_cabinet: "🗄",
        clipboard: "📋",
        file_folder: "📁",
        open_file_folder: "📂",
        card_index_dividers: "🗂",
        newspaper_roll: "🗞",
        newspaper: "📰",
        notebook: "📓",
        notebook_with_decorative_cover: "📔",
        ledger: "📒",
        closed_book: "📕",
        green_book: "📗",
        blue_book: "📘",
        orange_book: "📙",
        books: "📚",
        book: "📖",
        open_book: "📖",
        link: "🔗",
        paperclip: "📎",
        paperclips: "🖇",
        triangular_ruler: "📐",
        straight_ruler: "📏",
        scissors: "✂️",
        pushpin: "📌",
        round_pushpin: "📍",
        triangular_flag_on_post: "🚩",
        crossed_flags: "🎌",
        white_flag: "🏳️",
        black_flag: "🏴",
        checkered_flag: "🏁",
        rainbow_flag: "🏳️‍🌈",
        paintbrush: "🖌",
        crayon: "🖍",
        pen: "🖊",
        fountain_pen: "🖋",
        black_nib: "✒️",
        memo: "📝",
        pencil: "📝",
        pencil2: "✏️",
        lock_with_ink_pen: "🔏",
        closed_lock_with_key: "🔐",
        lock: "🔒",
        unlock: "🔓",
        mag: "🔍",
        mag_right: "🔎",
        heart: "❤️",
        yellow_heart: "💛",
        green_heart: "💚",
        blue_heart: "💙",
        purple_heart: "💜",
        broken_heart: "💔",
        heavy_heart_exclamation: "❣️",
        two_hearts: "💕",
        revolving_hearts: "💞",
        heartbeat: "💓",
        heartpulse: "💗",
        sparkling_heart: "💖",
        cupid: "💘",
        gift_heart: "💝",
        heart_decoration: "💟",
        peace_symbol: "☮️",
        latin_cross: "✝️",
        star_and_crescent: "☪️",
        om: "🕉",
        wheel_of_dharma: "☸️",
        star_of_david: "✡️",
        six_pointed_star: "🔯",
        menorah: "🕎",
        yin_yang: "☯️",
        orthodox_cross: "☦️",
        place_of_worship: "🛐",
        ophiuchus: "⛎",
        aries: "♈️",
        taurus: "♉️",
        gemini: "♊️",
        cancer: "♋️",
        leo: "♌️",
        virgo: "♍️",
        libra: "♎️",
        scorpius: "♏️",
        sagittarius: "♐️",
        capricorn: "♑️",
        aquarius: "♒️",
        pisces: "♓️",
        id: "🆔",
        atom_symbol: "⚛",
        radioactive: "☢️",
        biohazard: "☣️",
        mobile_phone_off: "📴",
        vibration_mode: "📳",
        eight_pointed_black_star: "✴️",
        vs: "🆚",
        accept: "🉑",
        white_flower: "💮",
        ideograph_advantage: "🉐",
        secret: "㊙️",
        congratulations: "㊗️",
        u6e80: "🈵",
        a: "🅰️",
        b: "🅱️",
        ab: "🆎",
        cl: "🆑",
        o2: "🅾️",
        sos: "🆘",
        no_entry: "⛔️",
        name_badge: "📛",
        no_entry_sign: "🚫",
        x: "❌",
        o: "⭕️",
        anger: "💢",
        hotsprings: "♨️",
        no_pedestrians: "🚷",
        do_not_litter: "🚯",
        no_bicycles: "🚳",
        "non-potable_water": "🚱",
        underage: "🔞",
        no_mobile_phones: "📵",
        exclamation: "❗️",
        heavy_exclamation_mark: "❗️",
        grey_exclamation: "❕",
        question: "❓",
        grey_question: "❔",
        bangbang: "‼️",
        interrobang: "⁉️",
        low_brightness: "🔅",
        high_brightness: "🔆",
        trident: "🔱",
        fleur_de_lis: "⚜",
        part_alternation_mark: "〽️",
        warning: "⚠️",
        children_crossing: "🚸",
        beginner: "🔰",
        recycle: "♻️",
        chart: "💹",
        sparkle: "❇️",
        eight_spoked_asterisk: "✳️",
        negative_squared_cross_mark: "❎",
        white_check_mark: "✅",
        globe_with_meridians: "🌐",
        m: "Ⓜ️",
        diamond_shape_with_a_dot_inside: "💠",
        cyclone: "🌀",
        loop: "➿",
        atm: "🏧",
        sa: "🈂️",
        passport_control: "🛂",
        customs: "🛃",
        baggage_claim: "🛄",
        left_luggage: "🛅",
        wheelchair: "♿️",
        no_smoking: "🚭",
        wc: "🚾",
        parking: "🅿️",
        potable_water: "🚰",
        mens: "🚹",
        womens: "🚺",
        baby_symbol: "🚼",
        restroom: "🚻",
        put_litter_in_its_place: "🚮",
        cinema: "🎦",
        signal_strength: "📶",
        koko: "🈁",
        abc: "🔤",
        abcd: "🔡",
        capital_abcd: "🔠",
        symbols: "🔣",
        information_source: "ℹ️",
        ng: "🆖",
        ok: "🆗",
        up: "🆙",
        cool: "🆒",
        new: "🆕",
        free: "🆓",
        zero: "0️⃣",
        one: "1️⃣",
        two: "2️⃣",
        three: "3️⃣",
        four: "4️⃣",
        five: "5️⃣",
        six: "6️⃣",
        seven: "7️⃣",
        eight: "8️⃣",
        nine: "9️⃣",
        keycap_ten: "🔟",
        hash: "#️⃣",
        asterisk: "*️⃣",
        arrow_forward: "▶️",
        pause_button: "⏸",
        play_or_pause_button: "⏯",
        stop_button: "⏹",
        record_button: "⏺",
        next_track_button: "⏭",
        previous_track_button: "⏮",
        fast_forward: "⏩",
        rewind: "⏪",
        arrow_double_up: "⏫",
        arrow_double_down: "⏬",
        arrow_backward: "◀️",
        arrow_up_small: "🔼",
        arrow_down_small: "🔽",
        arrow_right: "➡️",
        arrow_left: "⬅️",
        arrow_up: "⬆️",
        arrow_down: "⬇️",
        arrow_upper_right: "↗️",
        arrow_lower_right: "↘️",
        arrow_lower_left: "↙️",
        arrow_upper_left: "↖️",
        arrow_up_down: "↕️",
        left_right_arrow: "↔️",
        arrow_right_hook: "↪️",
        leftwards_arrow_with_hook: "↩️",
        arrow_heading_up: "⤴️",
        arrow_heading_down: "⤵️",
        twisted_rightwards_arrows: "🔀",
        repeat: "🔁",
        repeat_one: "🔂",
        arrows_counterclockwise: "🔄",
        arrows_clockwise: "🔃",
        musical_note: "🎵",
        notes: "🎶",
        wavy_dash: "〰️",
        curly_loop: "➰",
        heavy_check_mark: "✔️",
        heavy_plus_sign: "➕",
        heavy_minus_sign: "➖",
        heavy_division_sign: "➗",
        heavy_multiplication_x: "✖️",
        heavy_dollar_sign: "💲",
        currency_exchange: "💱",
        tm: "™️",
        copyright: "©️",
        registered: "®️",
        end: "🔚",
        back: "🔙",
        on: "🔛",
        top: "🔝",
        soon: "🔜",
        ballot_box_with_check: "☑️",
        radio_button: "🔘",
        white_circle: "⚪️",
        black_circle: "⚫️",
        red_circle: "🔴",
        large_blue_circle: "🔵",
        small_red_triangle: "🔺",
        small_red_triangle_down: "🔻",
        small_orange_diamond: "🔸",
        small_blue_diamond: "🔹",
        large_orange_diamond: "🔶",
        large_blue_diamond: "🔷",
        white_square_button: "🔳",
        black_square_button: "🔲",
        black_small_square: "▪️",
        white_small_square: "▫️",
        black_medium_small_square: "◾️",
        white_medium_small_square: "◽️",
        black_medium_square: "◼️",
        white_medium_square: "◻️",
        black_large_square: "⬛️",
        white_large_square: "⬜️",
        mute: "🔇",
        speaker: "🔈",
        sound: "🔉",
        loud_sound: "🔊",
        no_bell: "🔕",
        bell: "🔔",
        mega: "📣",
        loudspeaker: "📢",
        eye_speech_bubble: "👁‍🗨",
        speech_balloon: "💬",
        thought_balloon: "💭",
        right_anger_bubble: "🗯",
        black_joker: "🃏",
        mahjong: "🀄️",
        flower_playing_cards: "🎴",
        spades: "♠️",
        clubs: "♣️",
        hearts: "♥️",
        diamonds: "♦️",
        clock1: "🕐",
        clock2: "🕑",
        clock3: "🕒",
        clock4: "🕓",
        clock5: "🕔",
        clock6: "🕕",
        clock7: "🕖",
        clock8: "🕗",
        clock9: "🕘",
        clock10: "🕙",
        clock11: "🕚",
        clock12: "🕛",
        clock130: "🕜",
        clock230: "🕝",
        clock330: "🕞",
        clock430: "🕟",
        clock530: "🕠",
        clock630: "🕡",
        clock730: "🕢",
        clock830: "🕣",
        clock930: "🕤",
        clock1030: "🕥",
        clock1130: "🕦",
        clock1230: "🕧",
        afghanistan: "🇦🇫",
        aland_islands: "🇦🇽",
        albania: "🇦🇱",
        algeria: "🇩🇿",
        american_samoa: "🇦🇸",
        andorra: "🇦🇩",
        angola: "🇦🇴",
        anguilla: "🇦🇮",
        antarctica: "🇦🇶",
        antigua_barbuda: "🇦🇬",
        argentina: "🇦🇷",
        armenia: "🇦🇲",
        aruba: "🇦🇼",
        australia: "🇦🇺",
        austria: "🇦🇹",
        azerbaijan: "🇦🇿",
        bahamas: "🇧🇸",
        bahrain: "🇧🇭",
        bangladesh: "🇧🇩",
        barbados: "🇧🇧",
        belarus: "🇧🇾",
        belgium: "🇧🇪",
        belize: "🇧🇿",
        benin: "🇧🇯",
        bermuda: "🇧🇲",
        bhutan: "🇧🇹",
        bolivia: "🇧🇴",
        caribbean_netherlands: "🇧🇶",
        bosnia_herzegovina: "🇧🇦",
        botswana: "🇧🇼",
        brazil: "🇧🇷",
        british_indian_ocean_territory: "🇮🇴",
        british_virgin_islands: "🇻🇬",
        brunei: "🇧🇳",
        bulgaria: "🇧🇬",
        burkina_faso: "🇧🇫",
        burundi: "🇧🇮",
        cape_verde: "🇨🇻",
        cambodia: "🇰🇭",
        cameroon: "🇨🇲",
        canada: "🇨🇦",
        canary_islands: "🇮🇨",
        cayman_islands: "🇰🇾",
        central_african_republic: "🇨🇫",
        chad: "🇹🇩",
        chile: "🇨🇱",
        cn: "🇨🇳",
        christmas_island: "🇨🇽",
        cocos_islands: "🇨🇨",
        colombia: "🇨🇴",
        comoros: "🇰🇲",
        congo_brazzaville: "🇨🇬",
        congo_kinshasa: "🇨🇩",
        cook_islands: "🇨🇰",
        costa_rica: "🇨🇷",
        croatia: "🇭🇷",
        cuba: "🇨🇺",
        curacao: "🇨🇼",
        cyprus: "🇨🇾",
        czech_republic: "🇨🇿",
        denmark: "🇩🇰",
        djibouti: "🇩🇯",
        dominica: "🇩🇲",
        dominican_republic: "🇩🇴",
        ecuador: "🇪🇨",
        egypt: "🇪🇬",
        el_salvador: "🇸🇻",
        equatorial_guinea: "🇬🇶",
        eritrea: "🇪🇷",
        estonia: "🇪🇪",
        ethiopia: "🇪🇹",
        eu: "🇪🇺",
        european_union: "🇪🇺",
        falkland_islands: "🇫🇰",
        faroe_islands: "🇫🇴",
        fiji: "🇫🇯",
        finland: "🇫🇮",
        fr: "🇫🇷",
        french_guiana: "🇬🇫",
        french_polynesia: "🇵🇫",
        french_southern_territories: "🇹🇫",
        gabon: "🇬🇦",
        gambia: "🇬🇲",
        georgia: "🇬🇪",
        de: "🇩🇪",
        ghana: "🇬🇭",
        gibraltar: "🇬🇮",
        greece: "🇬🇷",
        greenland: "🇬🇱",
        grenada: "🇬🇩",
        guadeloupe: "🇬🇵",
        guam: "🇬🇺",
        guatemala: "🇬🇹",
        guernsey: "🇬🇬",
        guinea: "🇬🇳",
        guinea_bissau: "🇬🇼",
        guyana: "🇬🇾",
        haiti: "🇭🇹",
        honduras: "🇭🇳",
        hong_kong: "🇭🇰",
        hungary: "🇭🇺",
        iceland: "🇮🇸",
        india: "🇮🇳",
        indonesia: "🇮🇩",
        iran: "🇮🇷",
        iraq: "🇮🇶",
        ireland: "🇮🇪",
        isle_of_man: "🇮🇲",
        israel: "🇮🇱",
        it: "🇮🇹",
        cote_divoire: "🇨🇮",
        jamaica: "🇯🇲",
        jp: "🇯🇵",
        jersey: "🇯🇪",
        jordan: "🇯🇴",
        kazakhstan: "🇰🇿",
        kenya: "🇰🇪",
        kiribati: "🇰🇮",
        kosovo: "🇽🇰",
        kuwait: "🇰🇼",
        kyrgyzstan: "🇰🇬",
        laos: "🇱🇦",
        latvia: "🇱🇻",
        lebanon: "🇱🇧",
        lesotho: "🇱🇸",
        liberia: "🇱🇷",
        libya: "🇱🇾",
        liechtenstein: "🇱🇮",
        lithuania: "🇱🇹",
        luxembourg: "🇱🇺",
        macau: "🇲🇴",
        macedonia: "🇲🇰",
        madagascar: "🇲🇬",
        malawi: "🇲🇼",
        malaysia: "🇲🇾",
        maldives: "🇲🇻",
        mali: "🇲🇱",
        malta: "🇲🇹",
        marshall_islands: "🇲🇭",
        martinique: "🇲🇶",
        mauritania: "🇲🇷",
        mauritius: "🇲🇺",
        mayotte: "🇾🇹",
        mexico: "🇲🇽",
        micronesia: "🇫🇲",
        moldova: "🇲🇩",
        monaco: "🇲🇨",
        mongolia: "🇲🇳",
        montenegro: "🇲🇪",
        montserrat: "🇲🇸",
        morocco: "🇲🇦",
        mozambique: "🇲🇿",
        myanmar: "🇲🇲",
        namibia: "🇳🇦",
        nauru: "🇳🇷",
        nepal: "🇳🇵",
        netherlands: "🇳🇱",
        new_caledonia: "🇳🇨",
        new_zealand: "🇳🇿",
        nicaragua: "🇳🇮",
        niger: "🇳🇪",
        nigeria: "🇳🇬",
        niue: "🇳🇺",
        norfolk_island: "🇳🇫",
        northern_mariana_islands: "🇲🇵",
        north_korea: "🇰🇵",
        norway: "🇳🇴",
        oman: "🇴🇲",
        pakistan: "🇵🇰",
        palau: "🇵🇼",
        palestinian_territories: "🇵🇸",
        panama: "🇵🇦",
        papua_new_guinea: "🇵🇬",
        paraguay: "🇵🇾",
        peru: "🇵🇪",
        philippines: "🇵🇭",
        pitcairn_islands: "🇵🇳",
        poland: "🇵🇱",
        portugal: "🇵🇹",
        puerto_rico: "🇵🇷",
        qatar: "🇶🇦",
        reunion: "🇷🇪",
        romania: "🇷🇴",
        ru: "🇷🇺",
        rwanda: "🇷🇼",
        st_barthelemy: "🇧🇱",
        st_helena: "🇸🇭",
        st_kitts_nevis: "🇰🇳",
        st_lucia: "🇱🇨",
        st_pierre_miquelon: "🇵🇲",
        st_vincent_grenadines: "🇻🇨",
        samoa: "🇼🇸",
        san_marino: "🇸🇲",
        sao_tome_principe: "🇸🇹",
        saudi_arabia: "🇸🇦",
        senegal: "🇸🇳",
        serbia: "🇷🇸",
        seychelles: "🇸🇨",
        sierra_leone: "🇸🇱",
        singapore: "🇸🇬",
        sint_maarten: "🇸🇽",
        slovakia: "🇸🇰",
        slovenia: "🇸🇮",
        solomon_islands: "🇸🇧",
        somalia: "🇸🇴",
        south_africa: "🇿🇦",
        south_georgia_south_sandwich_islands: "🇬🇸",
        kr: "🇰🇷",
        south_sudan: "🇸🇸",
        es: "🇪🇸",
        sri_lanka: "🇱🇰",
        sudan: "🇸🇩",
        suriname: "🇸🇷",
        swaziland: "🇸🇿",
        sweden: "🇸🇪",
        switzerland: "🇨🇭",
        syria: "🇸🇾",
        taiwan: "🇹🇼",
        tajikistan: "🇹🇯",
        tanzania: "🇹🇿",
        thailand: "🇹🇭",
        timor_leste: "🇹🇱",
        togo: "🇹🇬",
        tokelau: "🇹🇰",
        tonga: "🇹🇴",
        trinidad_tobago: "🇹🇹",
        tunisia: "🇹🇳",
        tr: "🇹🇷",
        turkmenistan: "🇹🇲",
        turks_caicos_islands: "🇹🇨",
        tuvalu: "🇹🇻",
        uganda: "🇺🇬",
        ukraine: "🇺🇦",
        united_arab_emirates: "🇦🇪",
        gb: "🇬🇧",
        uk: "🇬🇧",
        us: "🇺🇸",
        us_virgin_islands: "🇻🇮",
        uruguay: "🇺🇾",
        uzbekistan: "🇺🇿",
        vanuatu: "🇻🇺",
        vatican_city: "🇻🇦",
        venezuela: "🇻🇪",
        vietnam: "🇻🇳",
        wallis_futuna: "🇼🇫",
        western_sahara: "🇪🇭",
        yemen: "🇾🇪",
        zambia: "🇿🇲",
        zimbabwe: "🇿🇼"
    }
}
]);

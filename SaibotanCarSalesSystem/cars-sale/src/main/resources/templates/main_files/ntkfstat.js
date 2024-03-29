var CON_VERSION = {
    release: '2019.08.08_153915',
    dir: 'nt6.96',
    script: '2019.04.29',
    ntid: '2019.04.29',
    im: '2019.04.29',
    chat: '2019.04.29',
    publish: '2016.09.21_000000'
};
var CON_RULE = {};
var CON_SERVER = {
    flashserver: 'http://sh-p2.ntalker.com/downt/t2d/',
    configserver: 'http://statics.ntalker.com/mcenter/'
};

/* @file nt1.js
 * @date 2019.04.29 15:53:18
 */
!function (window, underfined) {
    var root, readyList = [], loadList = {}, core_strUndefined = typeof undefined, location = window.location,
        document = window.document, navigator = window.navigator, core_deletedIds = [], class2type = {},
        core_push = core_deletedIds.push, core_slice = core_deletedIds.slice, core_hasOwn = class2type.hasOwnProperty,
        core_version = "2015.09.23", rQuickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        rSingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, cssValueExp = /[\-\+0-9\.]/gi, rCamelCase = /-([a-z])/gi,
        clearHtmlExp = /(<.*?>)/gi, nTalk = function (e, t) {
            return new nTalk.fn.init(e, t, root)
        }, readyComplete = !1, emptyFunc = function () {
        };
    nTalk.fn = nTalk.prototype = {
        talkVersion: core_version, constructor: nTalk, init: function (e, t, n) {
            var r, i;
            if (!e) return this;
            if ("string" == typeof e) return !(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : rQuickExpr.exec(e)) || !r[1] && t ? !t || t.talkVersion ? (t || n).find(e) : this.constructor(t).find(e) : r[1] ? (t = t instanceof nTalk ? t[0] : t, nTalk.merge(this, nTalk.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : document, !0)), this) : ((i = document.getElementById(r[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = document, this.selector = e, this);
            if (e.nodeType || nTalk.isWindow(e)) return this.context = this[0] = e, this.length = 1, this;
            if (nTalk.isObject(e) && e.talkVersion) return e.length && (this.context = this[0] = e[0], this.length = 1), this;
            if (nTalk.isPlainObject(e)) {
                var o = e.tag || "div";
                return delete e.tag, this.context = this[0] = nTalk.Element(o, e), this.length = 1, this
            }
            return nTalk.isFunction(e) ? nTalk.ready(e) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), nTalk.merge(this, [e]))
        }, selector: "", length: 0, toArray: function () {
            return core_slice.call(this)
        }, get: function (e) {
            return null === e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        }, pushStack: function (e) {
            var t = nTalk.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, slice: function () {
            return this.pushStack(core_slice.apply(this, arguments))
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(this.length - 1)
        }, each: function (e, t) {
            return nTalk.each(this, e, t)
        }, find: function (e) {
            var t = this.constructor.selector.query(e, this);
            return this.pushStack(t)
        }, push: core_push, sort: [].sort, splice: [].splice
    }, nTalk.fn.init.prototype = nTalk.fn, nTalk.extend = nTalk.fn.extend = function () {
        var e, t, n, r, i, o = arguments[0] || {}, a = 1, s = arguments.length, l = !1;
        for ("boolean" == typeof o && (l = o, o = arguments[1] || {}, a = 2), "object" == typeof o || nTalk.isFunction(o) || (o = {}), s === a && (o = this, --a); a < s; a++) if (e = arguments[a]) for (var c in e) e.hasOwnProperty(c) && (t = o[c], o !== (n = e[c]) && (l && n && (nTalk.isPlainObject(n) || (r = nTalk.isArray(n))) ? (r ? (r = !1, i = t && nTalk.isArray(t) ? t : []) : i = t && nTalk.isPlainObject(t) ? t : {}, o[c] = nTalk.extend(l, i, n)) : n !== undefined && (o[c] = n)));
        return o
    }, nTalk.extend({
        CON_CACHE_COOKIE: "nTalk_CACHE_DATA",
        CON_MANAGE_COOKIE: "nTalk_PAGE_MANAGE",
        CON_PCID_KEY: "NTKF_T2D_CLIENTID",
        CON_CONNECT_FLASH: "FLASH",
        CON_CONNECT_COMET: "COMET",
        STYLE_BODY: "margin:0;padding:0;border:none;float:none;width:auto;height:auto;min-width:none;min-height:none;max-width:none;max-height:none;clear:none;position:static;left:auto;top:auto;right:auto;bottom:auto;text-align:left;box-sizing:content-box;color:#000;background-color:transparent;font:normal normal normal 12px/160% Arial,Microsoft YaHei;",
        STYLE_NBODY: "margin:0;padding:0;border:none;float:none;width:auto;height:auto;min-width:none;min-height:none;max-width:none;max-height:none;clear:none;position:static;left:auto;top:auto;right:auto;bottom:auto;text-align:left;box-sizing:content-box;color:#000;background-color:transparent;font:normal normal normal 0px/0px Arial,Microsoft YaHei;",
        isReady: !1,
        Log: emptyFunc,
        charset: document.charset || document.characterSet,
        language: navigator.language || navigator.systemLanguage,
        protocol: location.protocol,
        url: location.href,
        title: document.title,
        referrer: document.referrer,
        source: "",
        domain: "",
        baseProtocol: "",
        baseURI: "",
        sourceURI: "",
        baseName: "",
        baseExt: "",
        extParmas: {},
        pageURI: "",
        pageName: "",
        params: null,
        hashParams: null,
        user: {},
        lang: null,
        server: null,
        global: {},
        IMPRESENCE: null,
        version: {pub: core_version},
        elementParent: null,
        elementBefore: null,
        themesURI: "",
        isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        isBoolean: function (e) {
            return "boolean" == typeof e
        },
        isDefined: function (e) {
            return void 0 !== e
        },
        isWindow: function (e) {
            return e && e == e.window
        },
        isFunction: function (e) {
            return "[object Function]" === Object.prototype.toString.call(e)
        },
        isArray: function (e) {
            return nTalk.isFunction(Array.isArray) ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e)
        },
        isObject: function (e) {
            return "[object Object]" === Object.prototype.toString.call(e) && e && !this.isDefined(e.nodeType)
        },
        isEmptyObject: function (e) {
            for (var t in e) if (e.hasOwnProperty(t)) return !1;
            return !0
        },
        isPlainObject: function (e) {
            if ("object" != typeof e || e.nodeType || this.isWindow(e)) return !1;
            try {
                if (e.constructor && !core_hasOwn.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (t) {
                return !1
            }
            return !0
        },
        getWindow: function (e) {
            return nTalk.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        },
        bind: function (e, t) {
            var n = Array.prototype.slice.call(arguments).slice(2);
            return function (r) {
                return t.apply(e, [r || window.event].concat(n))
            }
        },
        parseHTML: function (e, t) {
            if (!e || "string" != typeof e) return null;
            t = t || document;
            var n = rSingleTag.exec(e);
            if (n) return [t.createElement(n[1])];
            if (/<|&#?\w+;/.test(e)) {
                var r = t.createElement("div");
                return r.innerHTML = e, nTalk.merge([], r.childNodes)
            }
            return [t.createTextNode(e)]
        },
        merge: function () {
            var e, t, n, r = arguments[0] || {}, i = arguments;
            if (i.length <= 1) return r;
            for (e = 1; e < i.length; e++) if (i[e] && null !== i[e]) if (i[e].length === undefined) for (t in i[e]) i[e].hasOwnProperty(t) && (r[t] = i[e][t]); else for (t = 0, n = i[e].length; t < n; t++) r.length !== undefined ? r.push(i[e][t]) : r[t] = i[e][t];
            return r
        },
        each: function (e, t, n) {
            if (nTalk.isArray(n) || (n = []), nTalk.isArray(e) || nTalk.isObject(e) && e.talkVersion) for (var r = 0; r < e.length && !1 !== t.apply(e[r], [r, e[r++]].concat(n));) ; else if (nTalk.isObject(e)) for (var i in e) e.hasOwnProperty(i) && t.apply(e[i], [i, e[i]].concat(n)); else t.apply(e, [0, e].concat(n));
            return e
        },
        access: function (e, t, n, r, i) {
            var o = 0, a = e.length;
            if (nTalk.isPlainObject(n)) {
                i = !0;
                for (var s in n) n.hasOwnProperty(s) && nTalk.access(e, t, s, n[s], !0)
            } else if (r !== undefined) for (i = !0; o < a; o++) t(e[o], n, r);
            return i ? e : a ? t(e[0], n) : null
        },
        strFormat: function (e, t) {
            for (var n = "", r = 1, i = t || 2; r <= i; r++) n += "0";
            return (n += e || "").substr(n.length - i)
        },
        getTime: function (e) {
            var t = (new Date).getTime(), n = 1e3 * Math.random();
            switch (n = this.strFormat(Math.floor(n), 3), e) {
                case 2:
                    return t.toString() + n;
                case 1:
                    return t + n;
                default:
                    return t
            }
        },
        secondsToMinutes: function (e) {
            var t = "", n = e, r = this.strFormat;
            return n >= 60 ? (t += r(Math.floor(n / 60)), n %= 60) : t += "00", t + ":" + r(n)
        },
        formatDate: function (e, t) {
            var n, r;
            this.isNumeric(e) ? n = new Date(e) : "string" == typeof e ? (n = new Date, t = e) : n = new Date, t = t || "HH:mm:ss", r = {
                "M+": n.getMonth() + 1,
                "d+": n.getDate(),
                "h+": n.getHours() % 12 == 0 ? 12 : n.getHours() % 12,
                "H+": n.getHours(),
                "m+": n.getMinutes(),
                "s+": n.getSeconds(),
                "q+": Math.floor((n.getMonth() + 3) / 3),
                "S+": n.getMilliseconds()
            }, /(y+)/i.test(t) && (t = t.replace(RegExp.$1, (n.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var i in r) r.hasOwnProperty(i) && new RegExp("(" + i + ")").test(t) && (t = "S" == RegExp.$1 ? t.replace(RegExp.$1, ("00" + r[i]).substr(3)) : t.replace(RegExp.$1, 1 == RegExp.$1.length ? r[i] : ("00" + r[i]).substr(("" + r[i]).length)));
            return -1 === e ? "" : t
        },
        randomChar: function (e, t) {
            for (var n = "", r = e || 8, i = 10 == t ? "0123456789" : "0123456789ABCDEF", o = 0; o < r; o++) n += i.charAt(Math.round(Math.random() * (i.length - 1)));
            return n
        }
    }), nTalk.selector = {
        tagGuid: 1,
        attrMap: {"class": "className", "for": "htmlFor"},
        rex: {
            R_RULE: /[ +>~]/g,
            NR_RULE: /[^ +>~]+/g,
            TRIM_LR: /^ +| +$/g,
            TRIM_ALL: / *([ +>~,]) */g,
            PSEU_PARAM: /\([^()]+\)/g,
            ATTR_PARAM: /[^\[]+(?=])/g,
            ATTR: /=|!=|\^=|\$=|\*=|~=|\|=/,
            CLS: /\./g,
            PSEU: /[^:]+/g,
            NUM: /\d+/,
            NTH: /(-?\d*)n([+-]?\d*)/,
            RULES: /((?:#.+)*)([a-zA-Z1-6*]*)([^\[:]*)((?:\[.+])*)((?::.+)*)/
        },
        query: function (e, t) {
            if (void 0 === e || !e) return [];
            var n, r, i, o, a, s, l, c = [];
            switch (typeof t) {
                case"undefined":
                    r = [document];
                    break;
                case"string":
                    e = t + " " + e, r = [document];
                    break;
                case"object":
                    r = t.nodeType ? [t] : t
            }
            for (t = r, o = 0, a = (n = this.format(e)).length; o < a; o++) {
                for (i = (" " + (e = n[o])).match(this.rex.R_RULE), e = e.match(this.rex.NR_RULE), r = t, s = 0, l = i.length; s < l; s++) r = this.parse(e[s], r, i[s]);
                c = c.concat(r)
            }
            return a > 1 ? this.makeDiff(c) : c
        },
        format: function (e) {
            var t = [], n = [];
            this.pseuParams = t, this.attrParams = n, e = e.replace(this.rex.TRIM_LR, "").replace(this.rex.TRIM_ALL, "$1").replace(this.rex.ATTR_PARAM, function (e) {
                return n.push(e) - 1
            });
            for (; -1 !== e.indexOf("(");) e = e.replace(this.rex.PSEU_PARAM, function (e) {
                return t.push(e.substring(1, e.length - 1)) - 1
            });
            return e.split(",")
        },
        parse: function (e, t, n) {
            var r, i, o, a, s, l;
            return i = this.rex.RULES.exec(e), (o = i[1]) ? (o = document.getElementById(o.substring(1))) ? [o] : [] : (r = nTalk.selector.queryRelative[n](t, i[2] || "*", this), (a = i[3]) && (r = this.filterClass(r, a.replace(this.rex.CLS, ""))), (s = i[4]) && (r = this.filterAttr(r, this.getAttrRules(s.match(this.rex.ATTR_PARAM), this.attrParams))), (l = i[5]) && (r = this.filterPseudo(r, this.getPseudoRules(l.match(this.rex.PSEU), this.pseuParams))), r)
        },
        getRules: function (e) {
            var t, n, r;
            return (t = this.rex.RULES.exec(e))[2] || (t[2] = "*"), t[3] = t[3].replace(this.rex.CLS, ""), (n = t[4]) && (t[4] = this.getAttrRules(n.match(this.rex.ATTR_PARAM), this.attrParams)), (r = t[5]) && (t[5] = this.getPseudoRules(r.match(this.rex.PSEU), this.pseuParams)), t
        },
        getAttrRules: function (e, t) {
            for (var n, r, i = [], o = e.length, a = this.rex.ATTR, s = 0; s < o; s++) r = (n = t[e[s]]).match(a) || " ", n = n.split(a), i.push(nTalk.selector.queryAttrs[r]), i.push(n);
            return i
        },
        getPseudoRules: function (e, t) {
            for (var n, r, i, o = [], a = 0, s = e.length, l = this.tagGuid++; a < s; a++) {
                if (n = e[a], this.rex.NUM.test(n)) switch (r = t[RegExp["$&"]], n = RegExp["$`"]) {
                    case"nth-child":
                        if (this.rex.NTH.test("odd" === r && "2n+1" || "even" === r && "2n" || r)) {
                            if (r = RegExp.$1, r = "" === r ? 1 : "-" === r ? -1 : r, 1 === (r = [l, !0, r, RegExp.$2])[2] && 0 === r[3]) continue
                        } else r = [l, !1, r];
                        break;
                    case"not":
                        for (i = r.split(","), r = []; i.length;) r.push(this.getRules(i.pop()))
                }
                o.push(nTalk.selector.queryPseudos[n]), o.push(r)
            }
            return o
        },
        filterPseudo: function (e, t) {
            for (var n, r, i, o, a = e.length, s = 0, l = t.length, c = []; s < a; s++) {
                for (r = e[s], n = 0; n < l && (i = t[n], o = t[n + 1], i && i(r, o, this)); n += 2) ;
                n === l && c.push(r)
            }
            return c
        },
        filterAttr: function (e, t) {
            for (var n, r, i, o, a, s, l = e.length, c = 0, u = t.length, h = []; c < l; c++) {
                for (r = e[c], n = 0; n < u && (o = t[n], i = t[n + 1], s = i[0], (a = r.getAttribute(s)) || (a = r[this.attrMap[s] || s])) && o(a + "", i[1]); n += 2) ;
                n === u && h.push(r)
            }
            return h
        },
        filterClass: function (e, t) {
            for (var n, r, i, o = 0, a = e.length, s = []; o < a; o++) "string" == typeof (i = e[o]).className && (n = i.className, r = new RegExp(n.replace(" ", "|"), "g"), t.replace(r, "") || s.push(i));
            return s
        },
        filterEl: function (e, t, n, r, i) {
            return ("*" === t || e.nodeName.toLowerCase() === t) && (!(n && !this.filterClass([e], n).length) && (!(r && !this.filterAttr([e], r).length) && !(i && !this.filterPseudo([e], i).length)))
        },
        makeDiff: function (e) {
            for (var t, n, r = this.tagGuid++, i = e.length, o = [], a = 0; a < i; a++) t = e[a], (n = this.getElData(t)).tagGuid !== r && (o.push(t), n.tagGuid = r);
            return o
        },
        getElData: function (e) {
            var t = e.mojoExpando;
            return t || (t = e.mojoExpando = {mQuery: {tagGuid: 0}}), (t = t.mQuery) || (t = {tagGuid: 0}), t
        },
        queryRelative: {
            " ": function (e, t, n) {
                for (var r, i, o, a, s, l = n.tagGuid++, c = e.length, u = [], h = 0; h < c; h++) {
                    if (a = e[h], s = a.parentNode) {
                        if (n.getElData(s).tagGuid === l) continue;
                        n.getElData(a).tagGuid = l
                    }
                    for (r = 0, i = (o = a.getElementsByTagName(t) || null).length; r < i; r++) u.push(o[r])
                }
                return u
            }, ">": function (e, t) {
                for (var n, r = [], i = e.length, o = 0; o < i; o++) for (n = e[o].firstChild; n;) 1 === n.nodeType && (n.nodeName.toLowerCase() !== t && "*" !== t || r.push(n)), n = n.nextSibling;
                return r
            }, "+": function (e, t) {
                for (var n, r = [], i = e.length, o = 0; o < i; o++) for (n = e[o]; n = n.nextSibling;) if (1 === n.nodeType) {
                    n.nodeName.toLowerCase() !== t && "*" !== t || r.push(n);
                    break
                }
                return r
            }, "~": function (e, t, n) {
                for (var r, i, o, a = n.tagGuid++, s = e.length, l = [], c = 0; c < s; c++) {
                    if (r = e[c], i = r.parentNode) {
                        if ((o = n.getElData(i)).tagGuid === a) continue;
                        o.tagGuid = a
                    }
                    for (; r = r.nextSibling;) 1 === r.nodeType && (r.nodeName.toLowerCase() !== t && "*" !== t || l.push(r))
                }
                return l
            }
        },
        queryAttrs: {
            " ": function () {
                return !0
            }, "=": function (e, t) {
                return e === t
            }, "!=": function (e, t) {
                return e !== t
            }, "^=": function (e, t) {
                return 0 === e.indexOf(t)
            }, "$=": function (e, t) {
                return e.substring(e.length - t.length) === t
            }, "*=": function (e, t) {
                return -1 !== e.indexOf(t)
            }, "~=": function (e, t) {
                return -1 !== (" " + e + " ").indexOf(" " + t + " ")
            }, "|=": function (e, t) {
                return e === t || e.substring(0, t.length + 1) === t + "-"
            }
        },
        queryPseudos: {
            eq: function (e, t, n) {
                var r, i, o, a;
                if ((r = e.parentNode) && (a = n.getElData(r)).tagGuid !== t) {
                    for (i = r.firstChild, o = 1; i;) 1 === i.nodeType && (n.getElData(i).nodeIndex = o++), i = i.nextSibling;
                    a.tagGuid = t
                }
                return n.getElData(e).nodeIndex == t
            }, lt: function (e, t, n) {
                var r, i, o, a;
                if ((r = e.parentNode) && (a = n.getElData(r)).tagGuid !== t) {
                    for (i = r.firstChild, o = 1; i;) 1 === i.nodeType && (n.getElData(i).nodeIndex = o++), i = i.nextSibling;
                    a.tagGuid = t
                }
                return n.getElData(e).nodeIndex < t
            }, gt: function (e, t, n) {
                var r, i, o, a;
                if ((r = e.parentNode) && (a = n.getElData(r)).tagGuid !== t) {
                    for (i = r.firstChild, o = 1; i;) 1 === i.nodeType && (n.getElData(i).nodeIndex = o++), i = i.nextSibling;
                    a.tagGuid = t
                }
                return n.getElData(e).nodeIndex > t
            }, "first-child": function (e) {
                for (; e = e.previousSibling;) if (1 === e.nodeType) return !1;
                return !0
            }, "last-child": function (e) {
                for (; e = e.nextSibling;) if (1 === e.nodeType) return !1;
                return !0
            }, "only-child": function (e) {
                for (var t = e.nextSibling, n = e.previousSibling; t;) {
                    if (1 === t.nodeType) return !1;
                    t = t.nextSibling
                }
                for (; n;) {
                    if (1 === n.nodeType) return !1;
                    n = n.previousSibling
                }
                return !0
            }, "nth-child": function (e, t, n) {
                var r, i, o, a, s;
                if ((r = e.parentNode) && (s = n.getElData(r)).tagGuid !== t[0]) {
                    for (o = r.firstChild, a = 1; o;) 1 === o.nodeType && (n.getElData(o).nodeIndex = a++), o = o.nextSibling;
                    s.tagGuid = t[0]
                }
                return i = n.getElData(e).nodeIndex, t[1] ? (i -= t[3], t = t[2], i * t >= 0 && i % t == 0) : i === t[2]
            }, not: function (e, t, n) {
                for (var r, i = 0, o = t.length; i < o; i++) {
                    if ((r = t[i])[1]) {
                        if ("#" + e.id !== r[1]) continue;
                        return !1
                    }
                    if (n.filterEl(e, r[2], r[3], r[4], r[5])) return !1
                }
                return !0
            }, contains: function (e, t) {
                return (e.textContent || e.innerText || "").indexOf(t) > -1
            }, enabled: function (e) {
                return !1 === e.disabled
            }, disabled: function (e) {
                return !0 === e.disabled
            }, checked: function (e) {
                return !0 === e.checked
            }, empty: function (e) {
                return !e.firstChild
            }
        }
    }, nTalk.Class = {
        create: function () {
            return function () {
                this.initialize.apply(this, arguments)
            }
        }
    }, nTalk.extend({
        initializeCore: function () {
            var e = /([^\.]+(\.com(\.cn)?|\.net(\.cn)?|\.edu(\.cn)?|\.org(\.cn)?|\.gov(\.cn)?|\.cn|\.mobi|\.tel|\.asia|\.me|\.info|\.hk|\.cc|\.biz|\.tv))$/i.exec(document.domain),
                t = /(.*\/)(.*?\.\w+)?([\?#].*)?$/gi.exec(location.protocol + "//" + document.domain + location.pathname),
                n = "";
            root = nTalk(document);
            var r = nTalk("script[src*=ntkf]"), i = nTalk("script[src*=base.out]"), o = [];
            r && 0 != r.length && o.push(r[0]), i && 0 != i.length && o.push(i[0]);
            for (var a = 0, s = o.length; a < s; a++) {
                var l = o[a];
                if (!l.src) return;
                (t = /^((https?:).*\/)?(.*?\.js)?(\?.*)?/gi.exec(l.src)) && t[1] && t[3] && /^((ntkfstat|ntkf|base\.out).*?)\.js/gi.test(t[3]) && t[4] && t[4].indexOf("siteid") > -1 && (nTalk.baseProtocol = t[2] || nTalk.protocol, nTalk.baseURI = t[1] || nTalk.pageURI, nTalk.baseName = t[3], n = t[4] ? t[4] : "", nTalk.elementParent = l.parentNode, nTalk.elementBefore = l)
            }
            if (!nTalk.baseURI) throw"get script url failure";
            if (nTalk.domain = e && e[0] || document.domain, nTalk.pageURI = t && t[1] ? t[1] : "", nTalk.pageName = t && t[2] ? t[2] : "", nTalk.params = nTalk.uriToJSON(location.search.substr(1)), nTalk.hash = location.hash ? location.href.substr(location.href.indexOf("#") + 1) : "", nTalk.hashParams = nTalk.uriToJSON(nTalk.hash), nTalk.loadList = loadList, nTalk.flash.support && !nTalk.browser.mobile ? nTalk.global.connect = nTalk.CON_CONNECT_FLASH : nTalk.global.connect = nTalk.CON_CONNECT_COMET, nTalk.browser.msie6) try {
                document.execCommand("BackgroundImageCache", !1, !0)
            } catch (h) {
            }
            for (var c, u = n.length ? n.substr(1).split("&") : ["lan=zh_cn", ""], a = 0; a < u.length; a++) c = u[a].split("="), nTalk.extParmas[c[0]] = "lan" == c[0] ? c[1] || "zh_cn" : c[1];
            nTalk.cache.init()
        }
    }), nTalk.browser = function (e) {
        var t = {
                "360ee": !1,
                lbbrowser: !1,
                se: !1,
                chrome: !1,
                safari: !1,
                msie: !1,
                firefox: !1,
                oupeng: !1,
                opera: !1,
                webkit: !1,
                iPod: !1,
                iPad: !1,
                iPhone: !1,
                android: !1,
                gecko: !1,
                windows: !1,
                "windows ce": !1,
                edge: !1,
                uc: !1,
                micromessenger: !1,
                weibo: !1
            }, n = ["applewebkit/([^\\s]*)", "presto\\/([\\d.]*)", "trident([^;]*)", "gecko\\/([\\d.]*)", "msie ([\\d.]*)"],
            r = /OS (\d)_.* like Mac OS X/g.exec(window.navigator.userAgent),
            i = e.match(/cpu iphone os (.*?) like mac os/) ? e.match(/cpu iphone os (.*?) like mac os/)[1].replace(/_/g, ".") : "",
            o = !!i && i.split(".")[0], a = !!i && i.split(".")[1], s = !!i && i.split(".")[2], l = /ucbrowser/.test(e);
        nTalk.each(t, function (n) {
            t[n] = e.indexOf(n.toLowerCase()) > -1
        }), t.ua = e, t.ieversion = 0, t.coreversion = 0, t.mac = !!e.match(/cpu.+mac\s+os\s+x/g);
        for (var c = 0; c < n.length; c++) new RegExp(n[c], "i").test(e) && (c == n.length - 1 ? t.ieversion = RegExp.$1 || RegExp.$2 : t.coreversion = RegExp.$1);
        t.ieversion = document.documentMode || t.ieversion || t.ieversion, t.msie = t.msie || t.ieversion > 0, t.gecko = t.gecko && !t.webkit && !t.msie, t.msie6 = t.msie && 6 == t.ieversion, t.msie7 = t.msie && 7 == t.ieversion, t.msie8 = t.msie && 8 == t.ieversion, t.msie9 = t.msie && 9 == t.ieversion, t.msie10 = t.msie && 10 == t.ieversion, t.msie11 = t.msie && 11 == t.ieversion, t.edge = t.edge, t.uc = t.uc, t.oldmsie = t.ieversion && t.ieversion <= 9, t.safari = t.safari && !t.chrome, t.safari2 = t.safari && !/adobeair/i.test(e), t.Quirks = "BackCompat" === document.compatMode, t.mobile = /mobile|android|linux/i.test(e), t.android = /android (\d.*?);/g.exec(e), t.oldAndroid = t.android && t.android.pop().substr(0, 3) < 4.5, t.oldIOS = !!r && +r.pop() < 8, t.iPhone6 = t.iPhone && 375 == document.body.offsetWidth, t.iPhone6Plus = t.iPhone && 414 == document.body.offsetWidth, t.iOS = "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform || e.indexOf("mac") > -1, t.is = function (t) {
            return new RegExp(t, "ig").test(e)
        }, t.oc = o, t.oc_1 = a, t.oc_2 = s, t.isUc = l, t.html5 = !!window.applicationCache, isStorageSupported = function () {
            var e = null;
            try {
                e = window.localStorage
            } catch (n) {
                return !1
            }
            if (e) {
                var t = "test";
                try {
                    return null !== localStorage.getItem(t) && localStorage.removeItem(t), localStorage.setItem(t, t), localStorage.getItem(t) == t && (localStorage.removeItem(t), !0)
                } catch (n) {
                    return !1
                }
            }
        };
        try {
            t.supportMqtt = "WebSocket" in window && null !== window.WebSocket && "localStorage" in window && null !== window.localStorage && "ArrayBuffer" in window && null !== window.ArrayBuffer && isStorageSupported()
        } catch (u) {
            t.supportMqtt = !1
        }
        return t
    }(navigator.userAgent.toLowerCase()), nTalk.extend({
        ready: function (e) {
            var t = this, n = document.readyState, r = nTalk.browser.webkit && nTalk.browser.version < 525,
                i = function () {
                    if (!readyComplete) {
                        !r && window.removeEventListener && (document.removeEventListener("DOMContentLoaded", i, !1), window.removeEventListener("load", i, !1)), nTalk.isReady = readyComplete = !0;
                        for (var e = 0; e < readyList.length; e++) readyList[e].apply(document);
                        readyList = []
                    }
                };
            if (readyComplete || /loaded|complete/gi.test(n) ? (nTalk.isReady = readyComplete = !0, e.call(t)) : readyList[readyList.length] = function () {
                return e.call(t)
            }, r) !function () {
                /^loaded|complete$/i.test(n) ? i() : setTimeout(arguments.callee(), 50)
            }(); else if (document.addEventListener) "interactive" == n ? i() : (document.addEventListener("DOMContentLoaded", i, !1), window.addEventListener("load", i, !1)); else {
                var o = document.createElement("div");
                !function () {
                    !function () {
                        try {
                            o.doScroll("left"), document.body.insertBefore(o, document.body.lastChild).setAttribute("html", "temp")
                        } catch (e) {
                        }
                        return o
                    } ? setTimeout(arguments.callee(), 50) : i()
                }()
            }
        }, require: function (e, t, n) {
            var r, i, o, a = [], s = [], l = null;
            e && (e = "string" == typeof e ? [e] : e, t = t || emptyFunc, n = n || document.head || nTalk("head")[0] || document.documentElement, i = nTalk._getObjectNumber(e), 0 === a.length && 0 === i && t.apply(l, s), nTalk.each(e, function (e, c) {
                if (c) {
                    var u, h = nTalk.getTime(), f = -1 == c.indexOf("?") ? "?" : "&",
                        d = c.replace(/(.*\/)?(.*?)[\?$](.*)?/i, "$2"), p = nTalk.isNumeric(e) ? "" : e,
                        g = function () {
                            a.splice(nTalk.inArray(c, a), 1), i--, 0 === a.length && 0 === i && t.apply(l, s)
                        }, m = function () {
                            a.splice(nTalk.inArray(c, a), 1), i--, t.apply(l, s)
                        }, T = function (e) {
                            var t = (e = nTalk.Event.fixEvent(e)).currentTarget || e.srcElement, n = t.readyState;
                            "load" === e.type || /loaded|complete/gi.test(n) ? setTimeout(function () {
                                p ? (loadList[d] = nTalk[p], s.push(nTalk[p])) : (loadList[d] = t, s.push(t)), g()
                            }, nTalk.browser.msie6 ? 500 : 0) : "error" === e.type && (e.error = !0, s.push(!p && e), g())
                        };
                    a.push(c), d += c.indexOf("#rnd") > -1 ? String(h).substring(5, 11) : c.indexOf("#image") > -1 ? c.replace(/(.*?)\?(.*?)(#.*?)?$/gi, "-$2") : "", u = /\.((gif)|(png)|(jpg)|(bmp)|(jpeg))$/i.test(c) || /#image$/gi.test(c), isRobotImage = /#robotImg/gi.test(c), c = c.replace(/#rnd/i, f + "ts=" + h).replace(/#image/i, ""), o = (/^(https?:\/\/)/i.test(c) ? "" : nTalk.baseURI) + c, p && nTalk[p] ? (s.push(nTalk[p]), g()) : !p && loadList[d] ? (s.push(loadList[d]), g()) : u ? l = nTalk.preloadImage(o, function (e) {
                        e.error = !1, loadList[d] = e, s.push(e), m()
                    }, function (e) {
                        e.error = !0, s.push(e), g()
                    }, isRobotImage ? 120 : 6) : ("script" == (r = /\.css[^\.]*$/gi.test(c) ? {
                        tag: "link",
                        type: "text/css",
                        rel: "stylesheet",
                        href: o
                    } : {
                        tag: "script",
                        type: "text/javascript",
                        async: "async",
                        charset: "utf-8",
                        src: o
                    }).tag && p && (r["data-requiremodule"] = p), "undefined" == typeof (l = nTalk(r).appendTo(n)).get(0).onreadystatechange ? l.bind("load", T).bind("error", T) : l.bind("readystatechange", T).bind("error", T))
                }
            }))
        }, jsonp: function (e, t) {
            var n, r = "call_" + nTalk.randomChar(16);
            e = e + (/\?/gi.test(e) ? "&" : "?") + "callback=" + r, window[r] = function () {
                n = arguments, setTimeout(function () {
                    nTalk.isFunction(t) && t.apply(self, n)
                }, 0);
                try {
                    delete window[r]
                } catch (e) {
                }
            }, nTalk.require(e, function (e) {
                nTalk(e.error ? e.target : this).remove()
            })
        }, preloadImage: function (e, t, n, r) {
            var i = this;
            t = t || emptyFunc, n = n || emptyFunc;
            var o, a = new Image;
            return a.src = e, a.setAttribute("loadTime", 0), a.complete ? (t.call(nTalk, a), a) : (a.onload = function () {
                clearInterval(o), t.call(nTalk, this)
            }, a.onError = function () {
                clearInterval(o), n.call(nTalk, this)
            }, o = setInterval(function () {
                a.setAttribute("loadTime", parseInt(a.getAttribute("loadTime")) + 1), parseInt(a.getAttribute("loadTime"), 10) >= r && (clearInterval(o), n.call(nTalk, i)), ("complete" == a.readyState || nTalk.browser.msie7) && (clearInterval(o), a.onLoad = a.onError = null, t.call(nTalk, a))
            }, 500), a)
        }, _getObjectNumber: function (e) {
            if (e) {
                if (nTalk.isArray(e)) return e.length;
                var t = 0;
                for (var n in e) e.hasOwnProperty(n) && t++;
                return t
            }
            return !1
        }
    }), nTalk.cookie = {
        enable: function () {
            var e = !1;
            return !!navigator.cookieEnabled || (this.set("testcookie", "yes", 0), "yes" == this.get("testcookie") && (e = !0), this.del("testcookie"), e)
        }, set: function (e, t, n, r) {
            var i, o, a;
            return t = t || "", r = r || nTalk.domain, "number" != typeof n && (n = 0), 0 === n ? o = nTalk.browser.msie || nTalk.browser.mobile ? " " : "expires=0; " : ((i = new Date).setTime(i.getTime() + n), o = i ? "expires=" + i.toGMTString() + "; " : ""), r = "domain=" + r + "; ", a = e + "=" + ("" + t).replace(/\"|\'/gi, "|") + "; ", "path=/; ", document.cookie = a + o + r + "path=/; ", t
        }, get: function (e) {
            var t, n = document.cookie;
            return n.length && (t = new RegExp("(?:^|;)\\s*" + e + "=(.*?)(?:;|$)").exec(n)) && t.length ? decodeURIComponent(t[1].replace(/\|/gi, '"')) : null
        }, del: function (e, t) {
            return this.set(e, "", 1, t)
        }
    }, nTalk.flash = function () {
        function gt(e) {
            var t = version, n = (e || "0.0.0").split(".").slice(0, 3);
            return t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] > n[2]
        }

        var axo, counter, hasFlash = !1, version = [0, 0, 0, 0], fnRemove = function (selector) {
            nTalk(selector).each(function (i, element) {
                var tElement;
                if (nTalk.browser.msie || !element.parentNode) {
                    for (var k in element) try {
                        eval("element." + k + "=null")
                    } catch (e) {
                    }
                    tElement = document.createElement("DIV");
                    try {
                        tElement.appendChild(element), tElement.innerHTML = "", tElement.parentNode && tElement.parentNode.removeChild(tElement)
                    } catch (e) {
                    }
                } else try {
                    element.parentNode.removeChild(element)
                } catch (e) {
                    nTalk.Log("remove flash node failure", 3)
                }
            })
        };
        if (navigator.plugins && navigator.mimeTypes.length) {
            var x = navigator.plugins["Shockwave Flash"];
            x && x.version ? (hasFlash = !0, version = x.version.split(".")) : x && x.description && (hasFlash = !0, 3 == (version = x.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split(".")).length && (version[version.length] = 0))
        } else if (nTalk.browser["windows ce"]) for (axo = 1, counter = 3; axo;) try {
            counter++, axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + counter), hasFlash = !0, version = [counter, 0, 0]
        } catch (e) {
            axo = null
        } else try {
            axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), null !== axo && (hasFlash = !0, version = axo.GetVariable("$version").split(" ")[1].toString().replace(/,/g, ".").split("."))
        } catch (e) {
            hasFlash = !1
        }
        return {remove: fnRemove, GT: gt, support: !1, version: version.join(".")}
    }(), nTalk.Event = function () {
        function e(e) {
            return e === window ? "theWindow" : e === document ? "theDocument" : e.uniqueID
        }

        function t(e) {
            return function (t) {
                var r = t.relatedTarget;
                this == r || n(this, r) || e.call(this, t)
            }
        }

        function n(e, t) {
            if (e == t) return !1;
            for (; t && t != e;) t = t.parentNode;
            return t == e
        }

        function r() {
            this.cancelBubble = !0
        }

        function i() {
            this.returnValue = !1
        }

        var o, a, s = [];
        return window.addEventListener ? (o = function (e, n, r, i) {
            "mouseenter" == n ? e.addEventListener("mouseover", t(r), i) : "mouseleave" == n ? e.addEventListener("mouseout", t(r), i) : e.addEventListener(n, r, i)
        }, a = function (e, t, n, r) {
            e.removeEventListener(t, n, r)
        }) : (o = function (t, n, r) {
            var i = "{FNKEY::obj_" + e(t) + "::evt_" + n + "::fn_" + r + "}", o = s[i];
            void 0 === o && (o = function (e) {
                r.call(t, e)
            }, s[i] = o, t.attachEvent("on" + n, o), window.attachEvent("onunload", function () {
                try {
                    t.detachEvent("on" + n, o)
                } catch (e) {
                }
            }), i = null)
        }, a = function (t, n, r) {
            var i = "{FNKEY::obj_" + e(t) + "::evt_" + n + "::fn_" + r + "}", o = s[i];
            void 0 !== o && (t.detachEvent("on" + n, o), delete s[i]), i = null
        }), {
            __evtHash: s, addEvent: o, removeEvent: a, fixEvent: function (e) {
                if (e && e.target) return e;
                switch (e = e || window.event, e.pageX = e.clientX + nTalk(window).scrollLeft(), e.pageY = e.clientY + nTalk(window).scrollTop(), e.target = e.srcElement, e.stopPropagation = r, e.preventDefault = i, e.type) {
                    case"mouseout":
                        e.relatedTarget = e.toElement;
                        break;
                    case"mouseover":
                        e.relatedTarget = e.fromElement
                }
                return e
            }, fireEvent: function (e, t) {
                if (nTalk.browser.msie) try {
                    e.fireEvent("on" + t)
                } catch (r) {
                    return !1
                } else {
                    var n = document.createEvent("HTMLEvents");
                    n.initEvent(t, !0, !0);
                    try {
                        e && e.dispatchEvent(n)
                    } catch (r) {
                    }
                }
                return !0
            }
        }
    }(), nTalk.JSON = function () {
        function quote(e) {
            return reg.lastIndex = 0, reg.test(e) ? '"' + e.replace(reg, function (e) {
                var t = meta[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }

        function str(e, t) {
            var n, r, i, o, a, s = gap, l = t[e];
            switch ("function" == typeof rep && (l = rep.call(t, e, l)), typeof l) {
                case"string":
                    return quote(l);
                case"number":
                    return isFinite(l) ? String(l) : "null";
                case"boolean":
                case"null":
                    return String(l);
                case"object":
                    if (!l) return "null";
                    if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                        for (o = l.length, n = 0; n < o; n += 1) a[n] = str(n, l) || "null";
                        return i = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]", gap = s, i
                    }
                    if (rep && "object" == typeof rep) for (o = rep.length, n = 0; n < o; n += 1) "string" == typeof (r = rep[n]) && (i = str(r, l)) && a.push(quote(r) + (gap ? ": " : ":") + i); else for (r in l) l.hasOwnProperty(r) && (i = str(r, l)) && a.push(quote(r) + (gap ? ": " : ":") + i);
                    return i = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}", gap = s, i
            }
        }

        var toJSONString, parseJSON, gap, indent, rep,
            cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            reg = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            meta = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
        return toJSONString = function (e, t) {
            if (t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.toString");
            return str("", {"": e})
        }, parseJSON = function (text, reviver) {
            function walk(e, t) {
                var n, r = e[t];
                if (r && "object" == typeof r) for (var i in r) r.hasOwnProperty(i) && ((n = walk(r, i)) !== undefined ? r[i] = n : delete r[i]);
                return reviver.call(e, t, r)
            }

            var j;
            if (text = String(text).replace(/\r|\n/gi, "")) try {
                text = nTalk.hexToDec(text)
            } catch (e) {
            }
            if (cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
            throw new SyntaxError("JSON.toJSON")
        }, {toJSONString: toJSONString, parseJSON: parseJSON}
    }(), nTalk.HASH = nTalk.Class.create(), nTalk.HASH.prototype = {
        hashTable: null, hashIndex: null, initialize: function () {
            this.hashTable = {}, this.hashIndex = []
        }, add: function (e, t) {
            return typeof e !== core_strUndefined && (!this.contains(e) && (this.hashTable[e] = typeof t !== core_strUndefined ? t : null, this.hashIndex.push(e), !0))
        }, remove: function (e) {
            var t = this.next(e), n = this.index(e);
            return delete this.hashTable[e], !1 !== n && this.hashIndex.splice(n, 1), this.hashTable[t]
        }, first: function () {
            for (var e in this.hashTable) if (this.hashTable.hasOwnProperty(e)) return this.hashTable[e]
        }, last: function () {
            var e = null;
            for (var t in this.hashTable) this.hashTable.hasOwnProperty(t) && (e = this.hashTable[t]);
            return e
        }, previous: function (e) {
            var t = null;
            for (var n in this.hashTable) if (this.hashTable.hasOwnProperty(n)) {
                if (n == e) return t;
                t = n
            }
            return t
        }, next: function (e) {
            var t = null, n = !1;
            for (var r in this.hashTable) if (this.hashTable.hasOwnProperty(r)) if (t || (t = r), r != e) {
                if (n) return r
            } else n = !0;
            return t
        }, count: function () {
            var e = 0;
            for (var t in this.hashTable) this.hashTable.hasOwnProperty(t) && e++;
            return e
        }, items: function (e, t) {
            return t ? (this.hashTable[e] = t, this.hashTable[e]) : this.hashTable[e]
        }, index: function (e) {
            for (var t = 0; t < this.hashIndex.length; t++) if (this.hashIndex[t] == e) return t;
            return !1
        }, contains: function (e) {
            return "undefined" != typeof this.hashTable[e]
        }, clear: function () {
            for (var e in this.hashTable) this.hashTable.hasOwnProperty(e) && delete this.hashTable[e];
            this.hashIndex = []
        }, each: function (e) {
            for (var t in this.hashTable) t && this.hashTable.hasOwnProperty(t) && e.call(self, t, this.hashTable[t])
        }
    }, nTalk.POST = nTalk.Class.create(), nTalk.POST.prototype = {
        iframeName: "",
        iframeElement: null,
        formName: "",
        formElement: null,
        hiddenElement: null,
        target: "",
        CON_TARGET: ["_blank", "_self", "_parent", "_top"],
        _stopCall: !1,
        onComplete: null,
        onFailure: null,
        _loaded: !1,
        initialize: function (e, t, n, r) {
            var i = nTalk.merge({}, t), o = nTalk.randomChar(16);
            nTalk.isArray(n) ? (this.onComplete = n[0] || emptyFunc, this.onFailure = n[1] || emptyFunc) : (this.onComplete = n || emptyFunc, this.onFailure = emptyFunc), this.target = r || "POST_IFRAME_" + o, nTalk("#nTalk_post_hiddenElement").length > 0 ? this.hiddenElement = nTalk("#nTalk_post_hiddenElement") : this.hiddenElement = nTalk({
                tag: "div",
                id: "nTalk_post_hiddenElement",
                style: "left:-10px;top:-10px;visibility:hidden;display:none;width:1px;height:1px;"
            }).appendTo(!0), nTalk.inArray(this.target, this.CON_TARGET) < 0 && (this.iframeName = this.target, this.iframeElement = this.createIFrame(this.iframeName, "about:blank")), this.formName = "POST_FORM_" + o, this.formElement = this.form(e, i);
            try {
                this.formElement.submit()
            } catch (a) {
            }
        },
        stopCall: function () {
            this._stopCall = !0
        },
        createIFrame: function (e, t) {
            var n, r = this, i = function (t) {
                var n = this, a = n.readyState;
                /^(?:loaded|complete|undefined)$/.test(a) && !r._loaded && (nTalk(n).removeEvent("readystatechange", i), nTalk(n).removeEvent("load", i), nTalk(n).removeEvent("error", o), r._loaded = !0, r._stopCall || r.onComplete.call(r, t, e), window.frames[e] = window[e] = null, setTimeout(function () {
                    nTalk(n).remove(), nTalk(r.formElement).remove()
                }, 800))
            }, o = function (t) {
                var n = this;
                nTalk(n).removeEvent("readystatechange", i), nTalk(n).removeEvent("load", i), nTalk(n).removeEvent("error", o), r._stopCall || r.onFailure.call(r, t, e), window.frames[e] = window[e] = null, setTimeout(function () {
                    nTalk(n).remove(), nTalk(r.formElement).remove()
                }, 50)
            };
            return window[e] ? window[e] : window.frames[e] ? window.frames[e] : (n = nTalk({
                tag: "IFRAME",
                name: e,
                id: e,
                src: t,
                style: "left:-10px;top:-10px;visibility:hidden;width:1px;height:1px;"
            }).appendTo(this.hiddenElement), nTalk.browser.safari || n.css("position", "absolute"), n.bind("readystatechange", i).bind("load", i).bind("error", o), window[e] = n.get(0), window[e])
        },
        form: function (e, t) {
            var n;
            if (n = nTalk({
                tag: "FORM",
                name: this.formName,
                "accept-charset": "utf-8",
                enctype: "application/x-www-form-urlencoded",
                method: "POST",
                style: "display:none;",
                target: this.target,
                action: e
            }).appendTo(this.hiddenElement), nTalk.isArray(t)) for (var r = 0; r < t.length; r++) for (var i in t[r]) t[r].hasOwnProperty(i) && this.input(i + "[]", t[r][i], n); else for (var o in t) if (t.hasOwnProperty(o)) if (nTalk.isArray(t[o])) for (var a = 0; a < t[o].length; a++) this.input(o + "[]", t[o][a], n); else this.input(o, t[o], n);
            return n.get(0)
        },
        input: function (e, t, n) {
            return nTalk({
                tag: "INPUT",
                type: "hidden",
                name: e,
                value: encodeURIComponent(/number|string/.test(typeof t) ? t : nTalk.JSON.toJSONString(t))
            }).appendTo(n)
        }
    }, nTalk.extend({
        inArray: function (e, t) {
            if (t.length == core_strUndefined) {
                for (var n in t) if (t.hasOwnProperty(n) && t[n] == e) return n
            } else for (var r = 0, i = t.length; r < i; r++) if (t[r] == e) return r;
            return -1
        }, toURI: function (e, t, n) {
            var r = [], i = n === undefined ? "&" : n;
            if (!nTalk.isPlainObject(e)) return "";
            for (var o in e) if (e.hasOwnProperty(o)) {
                var a = function (n, r) {
                    var a = "&" == i ? n + "=" : "";
                    switch (typeof e[o]) {
                        case"object":
                            return r ? a + encodeURIComponent(nTalk.JSON.toJSONString(r)) : t ? "" : a;
                        case"function":
                        case"undefined":
                            return "";
                        case"boolean":
                        case"number":
                            return a + r;
                        default:
                            return r ? a + encodeURIComponent(r.replace(/\+/gi, "%2B")) : t ? "" : a
                    }
                }(o, e[o]);
                a && r.push(a)
            }
            return r.join(i).replace(/%20/g, "+")
        }, uriToJSON: function (e) {
            for (var t, n = {}, r = e.toString().split("&"), i = 0; i < r.length; i++) if (!((t = r[i].split("=")).length < 2)) try {
                n[t[0]] = decodeURIComponent(t[1] || "")
            } catch (o) {
                n[t[0]] = t[1]
            }
            return n
        }, whereGetTo: function (e, t, n, r) {
            return nTalk.merge(e, this.whereGet(t, n, r))
        }, whereGet: function (e, t, n, r) {
            var i = {};
            if (t && nTalk.isArray(t)) for (var o = 0, a = t.length; o < a; o++) n && n[o] && n[o] !== t[o] ? i[n[o]] = nTalk.isDefined(e[t[o]]) ? e[t[o]] : "" : i[t[o]] = nTalk.isDefined(e[t[o]]) ? e[t[o]] : ""; else i = e;
            if (!nTalk.isFunction(r)) return i;
            for (var s in i) i.hasOwnProperty(s) && r.call(this, i[s])
        }, enLength: function (e) {
            e = e || "";
            try {
                return e.toString().replace(/[^\x00-\xFF]/g, "**").length
            } catch (t) {
                nTalk.Log(t, 3)
            }
        }, enCut: function (e, t, n) {
            var r = nTalk.enLength(e);
            if (t = t || 0, r < t) return "" + (e || "");
            for (var i = 0, o = 0; o < e.length; o++) {
                if ((i += e.charCodeAt(o) > 255 ? 2 : 1) == t || n && i == t - 2) return e.substring(0, o + 1) + (n ? ".." : "");
                if (i > t || n && i > t - 2) return e.substring(0, o) + (n ? ".." : "")
            }
            return e || ""
        }, camelize: function (e) {
            return e.replace("-ms-", "ms-").replace(rCamelCase, function (e, t) {
                return (t + "").toUpperCase()
            })
        }, clearHtml: function (e) {
            return (e = e || "").replace(clearHtmlExp, "")
        }, protocolFilter: function (e, t) {
            if ("file:" == (t = 1 == nTalk.flashserver.usehttps ? "https:" : t || nTalk.protocol) && (t = "http:"), nTalk.isObject(e)) {
                for (var n in e) e.hasOwnProperty(n) && (e[n] = this.protocolFilter(e[n], t));
                return e
            }
            if (nTalk.isArray(e)) {
                for (var r = 0; r < e.length; r++) e[r] = this.protocolFilter(e[r], t);
                return e
            }
            return nTalk.isNumeric(e) || nTalk.isBoolean(e) || nTalk.isFunction(e) ? e : void 0 !== e ? e ? e.toString().replace(/^https?:/gi, t).replace(/^rtmps?:/gi, "https:" == t ? "rtmps:" : "rtmp:").replace(/^wss?:/gi, "https:" == t ? "wss:" : "ws:") : e : void 0
        }, decToHex: function (e) {
            for (var t = [], n = 0; n < e.length; n++) /[\u4e00-\u9fa5]/i.test(e.charAt(n)) ? t[n] = "\\u" + ("00" + e.charCodeAt(n).toString(16)).slice(-4) : t[n] = e.charAt(n);
            return t.join("")
        }, hexToDec: function (e) {
            if (!e) return "";
            var t = e.match(/\\u([0-9a-zA-Z]{2,4})|&#(\d+);/gi), n = e;
            if (!t) return n;
            for (var r = 0; r <= t.length; r++) if (t[r]) {
                var i, o, a = !1;
                i = t[r].replace("\\u", "");
                for (var s = 0; s < i.length; s++) -1 == "0123456789abcdef".indexOf(i.charAt(s)) && (a = !0);
                a || (o = String.fromCharCode(parseInt(i, 16)), n = n.replace(t[r], o))
            }
            return n
        }
    }), nTalk.extend({
        Element: function (e, t) {
            var n, r, i = "";
            if (e = e.toLocaleUpperCase(), nTalk.inArray(e, ["IFRAME", "FORM", "INPUT", "SELECT", "TEXTAREA"]) > -1) try {
                "FORM" == e && (i = (t.method ? ' method="' + t.method + '"' : "") + (t.enctype ? ' enctype="' + t.enctype + '"' : "")), r = "<" + e + ' name="' + (t.name || nTalk.randomChar(16)) + '"' + i + "></" + e + ">", n = document.createElement(r), delete t.name
            } catch (o) {
                n = document.createElement(e)
            } else n = "comment" === e ? document.createComment(t.text || "") : document.createElement(e);
            return t && nTalk.each(t, function (e, t) {
                try {
                    switch (e) {
                        case"css":
                        case"style":
                            n.style.cssText = t;
                            break;
                        case"innerHTML":
                        case"html":
                            n.innerHTML = t;
                            break;
                        case"className":
                        case"class":
                            n.className = t;
                            break;
                        case"text":
                            n.textContent = t;
                            break;
                        default:
                            n.setAttribute(e, t)
                    }
                } catch (o) {
                }
            }), n
        }, insert: function (e, t, n) {
            var r, i;
            if (e = e || document.body, n = n ? n.toLowerCase() : "afterbegin", e.insertAdjacentHTML) switch (n.toLowerCase()) {
                case"beforebegin":
                    return e.insertAdjacentHTML("BeforeBegin", t), e.previousSibling;
                case"afterbegin":
                    return e.insertAdjacentHTML("AfterBegin", t), e.firstChild;
                case"afterend":
                    return e.insertAdjacentHTML("AfterEnd", t), e.nextSibling;
                default:
                    return e.insertAdjacentHTML("BeforeEnd", t), e.lastChild
            }
            switch (r = e.ownerDocument.createRange(), n) {
                case"beforebegin":
                    return r.setStartBefore(e), i = r.createContextualFragment(t), e.parentNode.insertBefore(i, e), e.previousSibling;
                case"afterbegin":
                    return e.firstChild ? (r.setStartBefore(e.firstChild), i = r.createContextualFragment(t), e.insertBefore(i, e.firstChild)) : e.innerHTML = t, e.firstChild;
                case"beforeend":
                    return e.lastChild ? (r.setStartAfter(e.lastChild), i = r.createContextualFragment(t), e.appendChild(i)) : e.innerHTML = t, e.lastChild;
                case"afterend":
                    return r.setStartAfter(e), i = r.createContextualFragment(t), e.parentNode.insertBefore(i, e.nextSibling), e.nextSibling
            }
            throw'Illegal insertion point -> "' + n + '"'
        }, flashHtml: function (e, t, n, r) {
            return r = nTalk.extend({
                width: 1,
                height: 1,
                style: "",
                wmode: "opaque"
            }, r), nTalk.browser.oldmsie && (t += (t.indexOf("?") > -1 ? "&" : "?") + "rnd=" + Math.floor(1e3 * Math.random())), nTalk.browser.msie && nTalk.browser.ieversion < 11 ? ['<object id="', e, '" name="', e, '" width="', r.width, '" height="', r.height, '" style="', r.style, '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28">', '<param name="wmode" value="', r.wmode, '" />', '<param name="movie" value="', t, '" />', '<param name="allowscriptaccess" value="always" />', '<param name="flashvars" value="', nTalk.toURI(n, !0), '" />', "</object>"].join("") : nTalk.browser.msie && nTalk.browser.ieversion >= 11 ? ['<object id="', e, '"  name="', e, '" data="', t, '" width="', r.width, '" height="', r.height, '" style="', r.style, '" type="application/x-shockwave-flash">', '<param name="wmode" value="', r.wmode, '"/>', '<param name="movie" value="', t, '"/>', '<param name="quality" value="high"/>', '<param name="allowscriptaccess" value="always"/>', '<param name="flashvars" value="', nTalk.toURI(n, !0), '"/>', "</object>"].join("") : ['<embed id="', e, '" name="', e, '" src="' + t + '" width="', r.width, '" height="', r.height, '" style="', r.style, '" flashvars="', nTalk.toURI(n, !0), '" wmode="', r.wmode, '" allowscriptaccess="always" pluginspage="https://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" >', "</embed>"].join("")
        }, _vendorPropName: function (e, t) {
            if (t in e) return t;
            for (var n = ["Webkit", "O", "Moz", "ms"], r = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = n.length; o--;) if ((t = n[o] + r) in e) return t;
            return i
        }, css: function (e, t, n) {
            var r;
            if (!e) return !1;
            if (n === undefined) return r = nTalk.camelize(t), document.defaultView && document.defaultView.getComputedStyle ? "auto" === (n = document.defaultView.getComputedStyle(e, null).getPropertyValue(t)) || "" === n ? 0 : n : (t = nTalk.cssProps[r] || nTalk._vendorPropName(e.style, r), n = "opacity" === t ? /opacity=([^)]*)/.test(e.currentStyle.filter) ? .01 * parseFloat(RegExp.$1) + "" : 1 : e.style[t] || (e.currentStyle ? e.currentStyle[t] : null), "backgroundPosition" === t && nTalk.browser.msie && nTalk.browser.ieversion <= 8 && (n = (n = e.style[t + "X"] || (e.currentStyle ? e.currentStyle[t + "X"] : null)) + " " + e.style[t + "Y"] || (e.currentStyle ? e.currentStyle[t + "Y"] : null)), "auto" === n ? 0 : n);
            if (document.documentElement.style.opacity !== undefined) {
                try {
                    e.style[nTalk.camelize(t)] = n
                } catch (i) {
                    return !1
                }
                return !0
            }
            if (e.currentStyle && e.currentStyle.hasLayout || (e.style.zoom = 1), "opacity" === t) {
                try {
                    e.style.filter = 1 == n ? "none" : (e.currentStyle || e.style).filter.replace(/\s*alpha\(opacity=([^)]*)\)\s*/gi, "") + " alpha(opacity=" + 100 * n + ")"
                } catch (o) {
                }
                e.style.zoom = 1
            } else try {
                e.style[nTalk.camelize(t)] = n
            } catch (i) {
                return !1
            }
            return !0
        }, attr: function (e, t, n) {
            if (e) return void 0 !== n ? ("" === n ? e.removeAttribute(t) : e.setAttribute(t, n), n) : e.getAttribute ? e.getAttribute(t) : e[t] || ""
        }, addClass: function (e, t) {
            if (!e) return !1;
            if (this.indexOfClass(e, t)) return !1;
            var n = e.className.split(/\s+/).join(" ");
            return e.className = (n ? n + " " : "") + t, !0
        }, removeClass: function (e, t) {
            return !(!e || !e.className) && (e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)", "i"), " "), !0)
        }, indexOfClass: function (e, t) {
            return !(!e || !e.className) && new RegExp("(^|\\b)" + t + "(\\s|$)", "gi").test(e.className)
        }, contains: function (e, t) {
            if (t) for (; t = t.parentNode;) if (t === e) return !0;
            return !1
        }
    }), nTalk.position = nTalk.Class.create(), nTalk.position.prototype = {
        defaultOptions: {
            left: null,
            top: null,
            width: null,
            height: null,
            right: null,
            bottom: null,
            fixed: !0,
            resize: !1
        }, timer: 0, repwidth: "", repheight: "", inited: !1, direction: "left", initialize: function (e, t) {
            var n;
            nTalk.extend(this, this.defaultOptions, t), this.element = e.talkVersion ? e : nTalk(e), this.width ? "auto" == this.width && (this.repwidth = "auto", this.width = this.element.width()) : this.width = this.element.width(), this.height ? "auto" == this.height && (this.repheight = "auto", this.height = this.element.height()) : this.height = this.element.height(), this.offset = nTalk(window).offset(), this.quirks = nTalk.browser.msie6 || nTalk.browser.Quirks && nTalk.browser.oldmsie, null === this.left && (this.direction = "right"), null === this.left && null === this.right && (n = this.element.offset(), this.left = n.left, this.top = n.top), this.right = null === this.right ? nTalk(window).width() - this.left - this.width : this.right, this.bottom = null === this.bottom ? nTalk(window).height() - this.top - this.height : this.bottom, this.left = null === this.left ? nTalk(window).width() - this.right - this.width : this.left, this.top = null === this.top ? nTalk(window).height() - this.bottom - this.height : this.top, this.fixed ? this.fixedPosition({
                left: this.left,
                top: this.top,
                right: this.right,
                bottom: this.bottom
            }) : this.animationPosition()
        }, fixedPosition: function (e) {
            var t, n, r = this;
            if (this.quirks) {
                t = nTalk(window).offset(), n = nTalk(window).scrollTop(), this.element.css({
                    position: "absolute",
                    width: this.repwidth ? this.repwidth : this.width + "px",
                    height: this.repheight ? this.repheight : this.height + "px",
                    left: e.left + t.left + "px",
                    top: e.top + t.top + "px"
                });
                var i = ["expression(eval(Math.max((document.documentElement.scrollLeft || document.body.scrollLeft), (document.documentElement.scrollLeft || document.body.scrollLeft) + " + e.left + ")))", "expression(eval(Math.max((document.documentElement.scrollLeft || document.body.scrollLeft), (document.documentElement.scrollLeft || document.body.scrollLeft) + (document.documentElement.clientWidth  || document.body.clientWidth ) - this.offsetWidth  - " + e.right + ")))"],
                    o = ["expression(eval(Math.max((document.documentElement.scrollTop  || document.body.scrollTop ), (document.documentElement.scrollTop  || document.body.scrollTop ) + " + e.top + ")))", "expression(eval(Math.max((document.documentElement.scrollTop  || document.body.scrollTop ), (document.documentElement.scrollTop  || document.body.scrollTop ) + (document.documentElement.clientHeight || document.body.clientHeight) - this.offsetHeight - " + e.bottom + ")))"];
                nTalk.isFunction(this.element.get(0).style.getExpression) ? "left" == this.direction ? (this.element.Expression("left", i[0]), this.element.Expression("top", o[0])) : (this.element.Expression("left", i[1]), this.element.Expression("top", o[1])) : (nTalk(window).scrollTop(n + 1), "left" == this.direction ? this.element.replaceIEcssText({
                    left: i[0],
                    top: o[0]
                }) : this.element.replaceIEcssText({left: i[1], top: o[1]}), nTalk(window).scrollTop(n))
            } else t = {
                position: "fixed",
                width: this.repwidth ? this.repwidth : this.width + "px",
                height: this.repheight ? this.repheight : this.height + "px"
            }, "left" == this.direction ? (t.left = e.left + "px", t.top = e.top + "px") : (t.right = e.right + "px", t.bottom = e.bottom + "px"), this.element.css(t);
            this.resize && !this.inited && nTalk.Event.addEvent(window, "resize", function (e) {
                r.resizeFixed(e)
            }), this.inited = !0
        }, resizeFixed: function () {
            var e = [];
            "left" == this.direction ? (e.left = Math.max(0, Math.min(this.left, nTalk(window).width() - this.width)), e.top = Math.max(0, Math.min(this.top, nTalk(window).height() - this.height)), e.right = nTalk(window).width() - e.left - this.width, e.bottom = nTalk(window).height() - e.top - this.height) : (e.right = Math.min(this.right, nTalk(window).width() - this.width), e.bottom = Math.min(this.bottom, nTalk(window).height() - this.height), e.left = nTalk(window).width() - e.right - this.width, e.top = nTalk(window).height() - e.bottom - this.height, (e.left < 0 || e.top < 0) && (e.left = Math.max(0, e.left), e.top = Math.max(0, e.top), e.right = nTalk(window).width() - e.left - this.width, e.bottom = nTalk(window).height() - e.top - this.height)), this.fixedPosition(e)
        }, clearExpression: function () {
            if (this.quirks) {
                var e = nTalk(window).offset();
                this.element.Expression("left", ""), this.element.Expression("top", ""), this.element.css({
                    left: this.left + e.left + "px",
                    top: this.top + e.top + "px"
                })
            }
        }, animationPosition: function () {
        }
    }, nTalk.extend({
        myString: function (e) {
            return str = new String(e || ""), str.trim = function () {
                return this.replace(/(^\s*)|(\s*$)/g, "")
            }, str.linkFilter = function (e) {
                return this.toString().replace(/((\w+):\/\/)?([\w-]+\.)?([\w-]+\.)?([\w-]+\.)([a-zA-Z\-_\.]+)([^$\s,\"\u4E00-\u9FA5]*)?/gi, function (t, n, r, i, o, a, s, l) {
                    return '<a href="' + ((n || "http://") + (i || "") + (o || "") + (a || "") + (s || "") + (l || "")).replace(/(^\s+)|(\s+$)/gi, "") + '" target="_blank" style="' + (e || "") + '">' + (n || "") + (i || "") + (o || "") + (a || "") + (s || "") + (l || "") + "</a>"
                })
            }, str.linkFilter1 = function (e) {
                var t = this.toString();
                return t.indexOf("rightTag=true") > -1 ? t : new RegExp(/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/).test(t) ? t : this.toString().replace(/((\w+):\/\/)?([\w-]+\.)?([\w-]+\.)?([\w-]+\.)([a-zA-Z\-_\.]+)([^$\s,\uFF0C\u3002\"\u4E00-\u9FA5]*)?/gi, function (t, n, r, i, o, a, s, l) {
                    var c = ((n || "http://") + (i || "") + (o || "") + (a || "") + (s || "") + (l || "")).replace(/(^\s+)|(\s+$)/gi, ""),
                        u = "" + nTalk.randomChar(16);
                    return ['<div style="', nTalk.STYLE_BODY, '"><a href="', c, '" target="_blank" style="', e || "", '">', n || "", i || "", o || "", a || "", s || "", l || "", '</a></div><div class="ntalk-link-contains ', u, '" data-source="', c, '" style="', e, '"></div>'].join("")
                })
            }, str.sprintf = function () {
                var e = arguments.length, t = this;
                if (e < 1 || !RegExp) return t.toString();
                for (var n = 0; n < e; n++) t = t.replace(new RegExp("%" + (n + 1), "g"), (arguments[n] + "").replace(/%\d/g, "").toString());
                return t
            }, str
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        unit: function (e, t) {
            if (this.cssNumber[e]) return "";
            var n = (t + "").replace(cssValueExp, "");
            return "" === n ? "px" : n
        },
        valHooks: {
            option: {
                get: function (e) {
                    return e.value || e.text
                }
            }, select: {
                get: function (e) {
                    var t, n, r, i, o = e.selectedIndex, a = [], s = e.options, l = "select-one" === e.type;
                    if (o < 0) return null;
                    for (n = l ? o : 0, r = l ? o + 1 : s.length; n < r; n++) if ((i = s[n]).selected && null === i.getAttribute("disabled") && !i.parentNode.disabled && "OPTGROUP" !== i.parentNode.tagName.toUpperCase()) {
                        if (t = nTalk(i).val(), l) return t;
                        a.push(t)
                    }
                    return l && !a.length && s.length ? nTalk(s[o]).val() : a
                }, set: function (e, t) {
                    var n = nTalk.isArray(t) ? t : [t];
                    return nTalk(e).find("option").each(function () {
                        this.selected = nTalk.inArray(nTalk(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        MD5: function (e) {
            function t(e, t) {
                return e << t | e >>> 32 - t
            }

            function n(e, t) {
                var n, r, i, o, a;
                return i = 2147483648 & e, o = 2147483648 & t, n = 1073741824 & e, r = 1073741824 & t, a = (1073741823 & e) + (1073741823 & t), n & r ? 2147483648 ^ a ^ i ^ o : n | r ? 1073741824 & a ? 3221225472 ^ a ^ i ^ o : 1073741824 ^ a ^ i ^ o : a ^ i ^ o
            }

            function r(e, t, n) {
                return e & t | ~e & n
            }

            function i(e, t, n) {
                return e & n | t & ~n
            }

            function o(e, t, n) {
                return e ^ t ^ n
            }

            function a(e, t, n) {
                return t ^ (e | ~n)
            }

            function s(e, i, o, a, s, l, c) {
                return e = n(e, n(n(r(i, o, a), s), c)), n(t(e, l), i)
            }

            function l(e, r, o, a, s, l, c) {
                return e = n(e, n(n(i(r, o, a), s), c)), n(t(e, l), r)
            }

            function c(e, r, i, a, s, l, c) {
                return e = n(e, n(n(o(r, i, a), s), c)), n(t(e, l), r)
            }

            function u(e, r, i, o, s, l, c) {
                return e = n(e, n(n(a(r, i, o), s), c)), n(t(e, l), r)
            }

            function h(e) {
                var t, n = "", r = "";
                for (t = 0; t <= 3; t++) n += (r = "0" + (e >>> 8 * t & 255).toString(16)).substr(r.length - 2, 2);
                return n
            }

            var f, d, p, g, m, T, v, k, w, b = Array();
            for (b = function (e) {
                for (var t, n = e.length, r = n + 8, i = 16 * ((r - r % 64) / 64 + 1), o = Array(i - 1), a = 0, s = 0; s < n;) a = s % 4 * 8, o[t = (s - s % 4) / 4] = o[t] | e.charCodeAt(s) << a, s++;
                return t = (s - s % 4) / 4, a = s % 4 * 8, o[t] = o[t] | 128 << a, o[i - 2] = n << 3, o[i - 1] = n >>> 29, o
            }(e = function (e) {
                e = e.replace(/\r\n/g, "\n");
                for (var t = "", n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128))
                }
                return t
            }(e)), T = 1732584193, v = 4023233417, k = 2562383102, w = 271733878, f = 0; f < b.length; f += 16) d = T, p = v, g = k, m = w, v = u(v = u(v = u(v = u(v = c(v = c(v = c(v = c(v = l(v = l(v = l(v = l(v = s(v = s(v = s(v = s(v, k = s(k, w = s(w, T = s(T, v, k, w, b[f + 0], 7, 3614090360), v, k, b[f + 1], 12, 3905402710), T, v, b[f + 2], 17, 606105819), w, T, b[f + 3], 22, 3250441966), k = s(k, w = s(w, T = s(T, v, k, w, b[f + 4], 7, 4118548399), v, k, b[f + 5], 12, 1200080426), T, v, b[f + 6], 17, 2821735955), w, T, b[f + 7], 22, 4249261313), k = s(k, w = s(w, T = s(T, v, k, w, b[f + 8], 7, 1770035416), v, k, b[f + 9], 12, 2336552879), T, v, b[f + 10], 17, 4294925233), w, T, b[f + 11], 22, 2304563134), k = s(k, w = s(w, T = s(T, v, k, w, b[f + 12], 7, 1804603682), v, k, b[f + 13], 12, 4254626195), T, v, b[f + 14], 17, 2792965006), w, T, b[f + 15], 22, 1236535329), k = l(k, w = l(w, T = l(T, v, k, w, b[f + 1], 5, 4129170786), v, k, b[f + 6], 9, 3225465664), T, v, b[f + 11], 14, 643717713), w, T, b[f + 0], 20, 3921069994), k = l(k, w = l(w, T = l(T, v, k, w, b[f + 5], 5, 3593408605), v, k, b[f + 10], 9, 38016083), T, v, b[f + 15], 14, 3634488961), w, T, b[f + 4], 20, 3889429448), k = l(k, w = l(w, T = l(T, v, k, w, b[f + 9], 5, 568446438), v, k, b[f + 14], 9, 3275163606), T, v, b[f + 3], 14, 4107603335), w, T, b[f + 8], 20, 1163531501), k = l(k, w = l(w, T = l(T, v, k, w, b[f + 13], 5, 2850285829), v, k, b[f + 2], 9, 4243563512), T, v, b[f + 7], 14, 1735328473), w, T, b[f + 12], 20, 2368359562), k = c(k, w = c(w, T = c(T, v, k, w, b[f + 5], 4, 4294588738), v, k, b[f + 8], 11, 2272392833), T, v, b[f + 11], 16, 1839030562), w, T, b[f + 14], 23, 4259657740), k = c(k, w = c(w, T = c(T, v, k, w, b[f + 1], 4, 2763975236), v, k, b[f + 4], 11, 1272893353), T, v, b[f + 7], 16, 4139469664), w, T, b[f + 10], 23, 3200236656), k = c(k, w = c(w, T = c(T, v, k, w, b[f + 13], 4, 681279174), v, k, b[f + 0], 11, 3936430074), T, v, b[f + 3], 16, 3572445317), w, T, b[f + 6], 23, 76029189), k = c(k, w = c(w, T = c(T, v, k, w, b[f + 9], 4, 3654602809), v, k, b[f + 12], 11, 3873151461), T, v, b[f + 15], 16, 530742520), w, T, b[f + 2], 23, 3299628645), k = u(k, w = u(w, T = u(T, v, k, w, b[f + 0], 6, 4096336452), v, k, b[f + 7], 10, 1126891415), T, v, b[f + 14], 15, 2878612391), w, T, b[f + 5], 21, 4237533241), k = u(k, w = u(w, T = u(T, v, k, w, b[f + 12], 6, 1700485571), v, k, b[f + 3], 10, 2399980690), T, v, b[f + 10], 15, 4293915773), w, T, b[f + 1], 21, 2240044497), k = u(k, w = u(w, T = u(T, v, k, w, b[f + 8], 6, 1873313359), v, k, b[f + 15], 10, 4264355552), T, v, b[f + 6], 15, 2734768916), w, T, b[f + 13], 21, 1309151649), k = u(k, w = u(w, T = u(T, v, k, w, b[f + 4], 6, 4149444226), v, k, b[f + 11], 10, 3174756917), T, v, b[f + 2], 15, 718787259), w, T, b[f + 9], 21, 3951481745), T = n(T, d), v = n(v, p), k = n(k, g), w = n(w, m);
            return (h(T) + h(v) + h(k) + h(w)).toLowerCase()
        }
    }), nTalk.each(["radio", "checkbox"], function (e, t) {
        nTalk.valHooks[t] = {
            get: function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), nTalk.each(["radio", "checkbox"], function (e, t) {
        nTalk.valHooks[t] = nTalk.extend(nTalk.valHooks[t], {
            set: function (e, t) {
                return e.checked = nTalk.inArray(nTalk(e).val(), t) >= 0, e.checked
            }
        })
    }), nTalk.fn.extend({
        bind: function (e, t) {
            return nTalk.access(this, function (e, t, n) {
                nTalk.Event.addEvent(e, t, n)
            }, e, t, 1)
        }, addEvent: function (e, t) {
            return this.bind(e, t)
        }, click: function (e) {
            return this.bind("click", e)
        }, hover: function (e, t) {
            return nTalk.access(this, function (e, t, n) {
                return nTalk.Event.addEvent(e, "mouseover", t), nTalk.Event.addEvent(e, "mouseout", n), nTalk(e)
            }, e, t || emptyFunc)
        }, removeEvent: function (e, t) {
            return nTalk.access(this, function (e, t, n) {
                n === undefined ? e.onclick = null : nTalk.Event.removeEvent(e, t, n)
            }, e, t, 1)
        }, fire: function (e) {
            return nTalk.access(this, function (e, t, n) {
                nTalk.Event.fireEvent(e, t)
            }, e, "", 1)
        }, insert: function (e, t) {
            return nTalk(nTalk.insert(this[0], e, t))
        }, html: function (e, t) {
            return e !== undefined ? nTalk.each(this, function (t, n) {
                n.innerHTML = e
            }) : nTalk.isBoolean(t) && t ? (this.length ? this.get(0).innerHTML : "").replace(/(^\s+)|(\s+$)/gi, "") : this.length ? this.get(0).innerHTML : ""
        }, append: function (e) {
            return nTalk.each(this, function (t, n) {
                nTalk.insert(n, e, "beforeend")
            })
        }, appendTo: function (e, t) {
            var n, r = document.body || nTalk("body")[0] || document.documentElement;
            return "boolean" == typeof e && (t = e, e = null), n = e && "string" != typeof e ? e.talkVersion ? e.length ? e[0] : nTalk(r)[0] : e : nTalk(e || r)[0], nTalk.each(this, function (e, r) {
                var i = n.tagName.toLocaleUpperCase();
                if (t && t.talkVersion && t.length) return n.insertBefore(r, t.get(0));
                if (t && 1 == t.nodeType) return n.insertBefore(r, t);
                if (!0 === t) return n.insertBefore(r, n.firstChild);
                if (!readyComplete && "BODY" == i) return nTalk.insert(n, r.outerHTML, "beforeend");
                try {
                    return n.appendChild(r)
                } catch (o) {
                }
            })
        }, replace: function (e) {
            return nTalk.each(this, function (t, n) {
                if (n.replaceNode) n.replaceNode(e); else try {
                    n.parentNode.appendChild(e), n.parentNode.removeChild(n)
                } catch (r) {
                }
            }), nTalk(e)
        }, find: function (e) {
            var t = this.constructor.selector.query(e, this);
            return this.pushStack(t)
        }, parent: function (e) {
            var t = this.get(0);
            if (e = e || 1, !t || !t.parentNode || !this.length) return null;
            for (; e > 0 && t.parentNode && 11 !== t.parentNode.nodeType;) t = t.parentNode, e--;
            return t ? nTalk(t) : null
        }, child: function () {
            return this.find("*")
        }, remove: function () {
            return nTalk.each(this, function (e, t) {
                var n = !1;
                for (var r in t) if ("IFRAME" != t.tagName.toUpperCase()) try {
                    "function" == typeof t[r] && (t[r] = null)
                } catch (o) {
                    nTalk.Log("remove(" + t.tagName + "):" + o.message, 3)
                }
                if (t.parentNode) try {
                    t.parentNode.removeChild(t), n = !0
                } catch (o) {
                }
                if (!n) {
                    var i = document.createElement("DIV");
                    try {
                        i.appendChild(t), i.innerHTML = "", i.parentNode && i.parentNode.removeChild(i)
                    } catch (a) {
                    }
                }
            })
        }, css: function (e, t) {
            return nTalk.access(this, function (e, t, n) {
                return n !== undefined ? nTalk.css(e, t, n) : nTalk.css(e, t)
            }, e, t, arguments.length > 1)
        }, cssText: function (e) {
            return nTalk.access(this, function (e, t, n) {
                return n !== undefined ? e.style.cssText = n : e.style.cssText
            }, "", e, arguments.length > 1)
        }, attr: function (e, t) {
            return nTalk.access(this, function (e, t, n) {
                return n !== undefined ? nTalk.attr(e, t, n) : nTalk.attr(e, t)
            }, e, t, arguments.length > 1)
        }, display: function (e) {
            return nTalk.each(this, function (t, n) {
                nTalk.css(n, "display", e ? "block" : "none")
            })
        }, replaceIEcssText: function (e, t) {
            return nTalk.access(this, function (e, t, n) {
                n = n || "";
                var r = ";" + e.style.cssText, i = new RegExp(";\\s*" + t + ":\\s*(.*?);", "ig"),
                    o = ";" + t + ":" + n + ";", a = i.test(r);
                e.style.cssText = a ? r.replace(i, o) : r + o
            }, e, t, arguments.length > 1)
        }, Expression: function (e, t) {
            return nTalk.access(this, function (e, t, n) {
                if ("getExpression" in e.style) return n === undefined ? e.style.getExpression(t) : "" === n ? e.style.removeExpression(t) : e.style.setExpression(t, n)
            }, e, t, arguments.length > 1)
        }, curClass: function () {
            return this.length ? this.get(0).className : ""
        }, addClass: function (e) {
            return nTalk.each(this, function (t, n) {
                nTalk.addClass(n, e)
            })
        }, removeClass: function (e) {
            return nTalk.each(this, function (t, n) {
                nTalk.removeClass(n, e)
            })
        }, indexOfClass: function (e) {
            return nTalk.indexOfClass(this[0], e)
        }, replaceClass: function (e, t) {
            return nTalk.each(this, function (n, r) {
                nTalk.addClass(r, e), nTalk.removeClass(r, t)
            })
        }, val: function (e) {
            if (!this.length) return "";
            var t, n, r, i = this[0];
            if (arguments.length) return nTalk.each(this, function (n, r) {
                null === e && (e = ""), (t = nTalk.valHooks[r.type] || nTalk.valHooks[r.nodeName.toLowerCase()]) && "set" in t && t.set(this, e, "value") !== undefined || (r.value = e)
            });
            if ((t = nTalk.valHooks[i.nodeName.toLowerCase()]) && "get" in t && (n = t.get(i, "value")) !== undefined) return n;
            if ((t = nTalk.valHooks[i.type]) && "get" in t) {
                r = "radio" == this[0].type;
                for (var o = [], a = 0; a < this.length; a++) if ((n = t.get(this[a], "value")) !== undefined && this[a].checked) {
                    if (r) return n;
                    o.push(n)
                }
                return r ? "" : o
            }
            return "string" == typeof (n = this[0].value) ? n : null === n ? "" : n
        }, width: function (e) {
            var t;
            return this.length > 0 ? (t = this[0], nTalk.isWindow(t) ? nTalk.browser.Quirks && !nTalk.browser.msie ? document.documentElement.clientWidth : document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth : e === undefined ? t.offsetWidth : t.offsetWidth = e) : 0
        }, height: function (e) {
            var t;
            return this.length ? (t = this[0], nTalk.isWindow(t) ? nTalk.browser.Quirks && !nTalk.browser.msie ? window.innerHeight : document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight : e === undefined ? t.offsetHeight : t.offsetHeight = e) : 0
        }, scrollHeight: function (e) {
            var t;
            if (!this.length) return 0;
            if (t = this[0], nTalk.isWindow(t)) return window.innerHeight || document.documentElement.scrollHeight || document.body.scrollHeight;
            try {
                return e === undefined ? t.scrollHeight : t.scrollHeight = e
            } catch (n) {
                return 0
            }
        }, scrollLeft: function (e) {
            var t;
            if (!this.length) return 0;
            if (t = this[0], !nTalk.isWindow(t)) return e === undefined ? t.scrollLeft : t.scrollLeft = e;
            if (e === undefined) try {
                var n = document.documentElement.scrollLeft || window.pageXOffset;
                return Math.max(n, document.body ? document.body.scrollLeft : 0) || 0
            } catch (r) {
                return 0
            } else document.documentElement.scrollLeft = e, document.body.scrollLeft = e
        }, scrollTop: function (e) {
            var t;
            return this.length ? (t = this[0], nTalk.isWindow(t) ? e === undefined ? document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop : (document.documentElement.scrollTop = e, void (document.documentElement.scrollTop != e && (document.body.scrollTop = e))) : e === undefined ? t.scrollTop : t.scrollTop = e) : 0
        }, offset: function (e) {
            if (arguments.length) return e === undefined ? this : this.each(function (t, n) {
                nTalk.offset.setOffset(n, e, t)
            });
            var t, n = this[0], r = {top: 0, left: 0}, i = n && n.ownerDocument;
            return nTalk.isWindow(n) ? {
                top: nTalk(n).scrollTop(),
                left: nTalk(n).scrollLeft()
            } : i ? (t = i.documentElement, nTalk.contains(t, n) ? (typeof n.getBoundingClientRect !== core_strUndefined && (r = n.getBoundingClientRect()), {
                top: r.top + nTalk(window).scrollTop() - t.clientTop,
                left: r.left + nTalk(window).scrollLeft() - t.clientLeft
            }) : r) : r
        }, fixed: function (e) {
            return nTalk.each(this, function (t, n) {
                new nTalk.position(n, e)
            })
        }
    }), nTalk.offset = {
        setOffset: function (e, t) {
            var n, r, i, o = nTalk.css(e, "position"), a = nTalk(e), s = {};
            "static" === o && (e.style.position = "relative"), r = a.offset(), n = nTalk.css(e, "top"), i = nTalk.css(e, "left"), null !== t.top && (s.top = t.top - r.top + (n || 0)), null !== t.left && (s.left = t.left - r.left + (i || 0)), a.css(s)
        }
    }, nTalk.cache = {
        data: null, init: function () {
            nTalk.cache.data = nTalk.extend({}, nTalk.cache.deserialize(nTalk.cookie.get(nTalk.CON_CACHE_COOKIE)))
        }, get: function (e, t) {
            return !0 === t && (nTalk.cache.data = nTalk.merge(nTalk.cache.data, nTalk.cache.deserialize(nTalk.cookie.get(nTalk.CON_CACHE_COOKIE)))), this.formatData(e)
        }, set: function (e, t) {
            return this.formatData(e, t), nTalk.cookie.set(nTalk.CON_CACHE_COOKIE, nTalk.cache.serialize(nTalk.cache.data), 0)
        }, serialize: function (e) {
            var t = this, n = [];
            if (nTalk.isArray(e)) {
                for (var r = 0; r < e.length; r++) n.push(this.serialize(e[r]));
                return "[" + n.join("|") + "]"
            }
            return nTalk.isObject(e) ? (nTalk.each(e, function (e, r) {
                n.push(e + ":" + t.serialize(r))
            }), n.length ? "{" + n.join(",") + "}" : "{}") : e
        }, deserialize: function (e) {
            if (!e) return {};
            var t,
                n = /"/.test(e) ? e : e.replace(/(\{|\[)/g, '$1"').replace(/(}|])/g, '"$1').replace(/(:|,)/g, '"$1"');
            try {
                t = nTalk.JSON.parseJSON(n)
            } catch (i) {
                return null
            }
            for (var r in t) t.hasOwnProperty(r) && (t[r] = nTalk.isNumeric(t[r]) ? +t[r] : t[r]);
            return t
        }, formatData: function (e, t) {
            for (var n, r = e.split("."), i = nTalk.cache.data; n = r.shift();) if (r.length > 0) i[n] || (i[n] = {}), i = i[n]; else {
                if (t === undefined) return i[n] || null;
                if (!nTalk.isArray(t)) return i[n] = t, nTalk.cache.data;
                var o = [];
                i[n] && (o = o.concat(i[n])), i[n] = o.concat(t)
            }
        }
    }, nTalk.promptwindow = function () {
        function e() {
            i = !0, nTalk.getTime() - a < 100 || (a = nTalk.getTime(), f && r(), nTalk.isFunction(nTalk.promptwindow.callbackFocus) && nTalk.promptwindow.callbackFocus())
        }

        function t() {
            i = !1, nTalk.isFunction(nTalk.promptwindow.callbackBlur) && nTalk.promptwindow.callbackBlur()
        }

        function n() {
            h++, document.title = h % 2 == 0 ? c : l;
            try {
                top != self && (top.document.title = h % 2 == 0 ? c : l)
            } catch (e) {
            }
        }

        function r() {
            if (o && (clearInterval(s), s = null, h = 0, setTimeout(function () {
                document.title = u
            }, 500), o = !1, window.top != window.self)) try {
                window.top.document.title = u
            } catch (e) {
            }
        }

        var i = !1, o = !1, a = nTalk.getTime(), s = null, l = null, c = null, u = document.title, h = 0, f = !0,
            d = "【%1】%2 - %3";
        return window.addEvent && (nTalk(document).bind("focusin", e), nTalk(document).bind("focusout", t)), nTalk(window).bind("focus", e), nTalk(window).bind("blur", t), {
            callbackFocus: emptyFunc,
            callbackBlur: emptyFunc,
            originTitle: u,
            startPrompt: function (e, t, r) {
                if (!o && !i) {
                    if (t && t.length > 0) {
                        l = nTalk.myString(d).sprintf(t, "", u), c = "";
                        for (var a = 0, h = Math.ceil(nTalk.enLength(t) / 2); a < h; a++) c += "　";
                        c = nTalk.myString(d).sprintf(c, e, u)
                    }
                    return f = r || f, s = setInterval(n, 800), o = !0
                }
            },
            stopPrompt: r
        }
    }();
    var createXHR = function () {
        try {
            return new window.XMLHttpRequest
        } catch (e) {
            try {
                return new window.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {
                return !1
            }
        }
    }, xmlrequest = function () {
        var e = createXHR();
        return e ? "withCredentials" in e ? e : window.XDomainRequest === undefined ? e : (e = new XDomainRequest, e.readyState = 0, e.status = 100, e.onreadystatechange = emptyFunc, e.onload = function () {
            e.readyState = 4, e.status = 200;
            var t = new ActiveXObject("Microsoft.XMLDOM");
            t.async = "false", t.loadXML(e.responseText), e.responseXML = t, e.response = e.responseText, e.onreadystatechange()
        }, e.ontimeout = e.oerror = function () {
            e.readyState = 4, e.status = 500, e.onreadystatechange()
        }, e) : e
    }, tepmxhr, hasSetRequestHeader, hasOverrideMimeType;
    try {
        tepmxhr = xmlrequest(), hasSetRequestHeader = tepmxhr.setRequestHeader || !1, hasOverrideMimeType = tepmxhr.overrideMimeType || !1, tepmxhr = null
    } catch (e) {
    }
    nTalk.doAjaxRequest = function (t) {
        var n = t.dataType || "text", r = t.success || emptyFunc, i = t.error || emptyFunc, o = xmlrequest();
        if (!o) return i("no xhr"), null;
        if (o.onreadystatechange = function () {
            var t;
            if (4 === o.readyState) {
                if (200 === (o.status || 0)) {
                    if ("json" === n) {
                        try {
                            t = nTalk.JSON.parse(o.responseText), r(t, o)
                        } catch (e) {
                            i(o.responseText, o, "response to json exception")
                        }
                        return
                    }
                    return void r(o.responseText, o)
                }
                if ("json" === n) {
                    try {
                        t = nTalk.JSON.parse(o.responseText), i(t, o)
                    } catch (e) {
                        i(o.responseText, o, "response to json exception")
                    }
                    return
                }
                r(o.responseText, o, "Server exception")
            }
            0 === o.readyState && r(o.responseText, o, "Server exception")
        }, t.responseType) {
            if ("undefined" == typeof o.responseType) return i("", o, "Browser does not support setting response type"), null;
            o.responseType = t.responseType
        }
        if (t.mimeType) {
            if (!hasOverrideMimeType) return i("", o, "Browser does not support setting mimeType"), null;
            o.overrideMimeType(t.mimeType)
        }
        var a = t.headers || {};
        t.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest");
        for (var s in a) {
            if (!hasSetRequestHeader) return i("", o, "Browser does not support setting header"), null;
            o.setRequestHeader(s, a[s])
        }
        var l = t.type || "GET";
        o.open(l, t.url);
        var c = t.data || null;
        return o.send(c), o
    }, window.nTalk || (window.nTalk = window.NTKF = nTalk, nTalk.initializeCore(), function t(e, n, r) {
        function i(a, s) {
            if (!n[a]) {
                if (!e[a]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(a, !0);
                    if (o) return o(a, !0);
                    var c = new Error("Cannot find module '" + a + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = n[a] = {exports: {}};
                e[a][0].call(u.exports, function (t) {
                    var n = e[a][1][t];
                    return i(n || t)
                }, u, u.exports, t, e, n, r)
            }
            return n[a].exports
        }

        for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
        return i
    }({
        1: [function (e, t, n) {
            function r() {
                return {
                    a: ["target", "href", "title"],
                    abbr: ["title"],
                    address: [],
                    area: ["shape", "coords", "href", "alt"],
                    article: [],
                    aside: [],
                    audio: ["autoplay", "controls", "loop", "preload", "src"],
                    b: [],
                    bdi: ["dir"],
                    bdo: ["dir"],
                    big: [],
                    blockquote: ["cite"],
                    br: [],
                    caption: [],
                    center: [],
                    cite: [],
                    code: [],
                    col: ["align", "valign", "span", "width"],
                    colgroup: ["align", "valign", "span", "width"],
                    dd: [],
                    del: ["datetime"],
                    details: ["open"],
                    div: [],
                    dl: [],
                    dt: [],
                    em: [],
                    font: ["color", "size", "face"],
                    footer: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    header: [],
                    hr: [],
                    i: [],
                    img: ["src", "alt", "title", "width", "height"],
                    ins: ["datetime"],
                    li: [],
                    mark: [],
                    nav: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    section: [],
                    small: [],
                    span: [],
                    sub: [],
                    sup: [],
                    strong: [],
                    table: ["width", "border", "align", "valign"],
                    tbody: ["align", "valign"],
                    td: ["width", "rowspan", "colspan", "align", "valign"],
                    tfoot: ["align", "valign"],
                    th: ["width", "rowspan", "colspan", "align", "valign"],
                    thead: ["align", "valign"],
                    tr: ["rowspan", "align", "valign"],
                    tt: [],
                    u: [],
                    ul: [],
                    video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
                }
            }

            function i(e) {
                return e.replace(m, "&lt;").replace(T, "&gt;")
            }

            function o(e) {
                return e.replace(v, "&quot;")
            }

            function a(e) {
                return e.replace(k, '"')
            }

            function s(e) {
                return e.replace(w, function (e, t) {
                    return "x" === t[0] || "X" === t[0] ? String.fromCharCode(parseInt(t.substr(1), 16)) : String.fromCharCode(parseInt(t, 10))
                })
            }

            function l(e) {
                return e.replace(b, ":").replace(y, " ")
            }

            function c(e) {
                for (var t = "", n = 0, r = e.length; n < r; n++) t += e.charCodeAt(n) < 32 ? " " : e.charAt(n);
                return p.trim(t)
            }

            function u(e) {
                return e = a(e), e = s(e), e = l(e), e = c(e)
            }

            function h(e) {
                return e = o(e), e = i(e)
            }

            var f = e("cssfilter").FilterCSS, d = e("cssfilter").getDefaultWhiteList, p = e("./util"), g = new f,
                m = /</g, T = />/g, v = /"/g, k = /&quot;/g, w = /&#([a-zA-Z0-9]*);?/gim, b = /&colon;?/gim,
                y = /&newline;?/gim,
                x = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,
                E = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, C = /u\s*r\s*l\s*\(.*/gi, S = /<!--[\s\S]*?-->/g;
            n.whiteList = {
                a: ["target", "href", "title"],
                abbr: ["title"],
                address: [],
                area: ["shape", "coords", "href", "alt"],
                article: [],
                aside: [],
                audio: ["autoplay", "controls", "loop", "preload", "src"],
                b: [],
                bdi: ["dir"],
                bdo: ["dir"],
                big: [],
                blockquote: ["cite"],
                br: [],
                caption: [],
                center: [],
                cite: [],
                code: [],
                col: ["align", "valign", "span", "width"],
                colgroup: ["align", "valign", "span", "width"],
                dd: [],
                del: ["datetime"],
                details: ["open"],
                div: [],
                dl: [],
                dt: [],
                em: [],
                font: ["color", "size", "face"],
                footer: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                header: [],
                hr: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                ins: ["datetime"],
                li: [],
                mark: [],
                nav: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                section: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                table: ["width", "border", "align", "valign"],
                tbody: ["align", "valign"],
                td: ["width", "rowspan", "colspan", "align", "valign"],
                tfoot: ["align", "valign"],
                th: ["width", "rowspan", "colspan", "align", "valign"],
                thead: ["align", "valign"],
                tr: ["rowspan", "align", "valign"],
                tt: [],
                u: [],
                ul: [],
                video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
            }, n.getDefaultWhiteList = r, n.onTag = function (e, t, n) {
            }, n.onIgnoreTag = function (e, t, n) {
            }, n.onTagAttr = function (e, t, n) {
            }, n.onIgnoreTagAttr = function (e, t, n) {
            }, n.safeAttrValue = function (e, t, n, r) {
                if (n = u(n), "href" === t || "src" === t) {
                    if ("#" === (n = p.trim(n))) return "#";
                    if ("http://" !== n.substr(0, 7) && "https://" !== n.substr(0, 8) && "mailto:" !== n.substr(0, 7) && "#" !== n[0] && "/" !== n[0]) return ""
                } else if ("background" === t) {
                    if (x.lastIndex = 0, x.test(n)) return ""
                } else if ("style" === t) {
                    if (E.lastIndex = 0, E.test(n)) return "";
                    if (C.lastIndex = 0, C.test(n) && (x.lastIndex = 0, x.test(n))) return "";
                    !1 !== r && (n = (r = r || g).process(n))
                }
                return n = h(n)
            }, n.escapeHtml = i, n.escapeQuote = o, n.unescapeQuote = a, n.escapeHtmlEntities = s, n.escapeDangerHtml5Entities = l, n.clearNonPrintableCharacter = c, n.friendlyAttrValue = u, n.escapeAttrValue = h, n.onIgnoreTagStripAll = function () {
                return ""
            }, n.StripTagBody = function (e, t) {
                function n(t) {
                    return !!r || -1 !== p.indexOf(e, t)
                }

                "function" != typeof t && (t = function () {
                });
                var r = !Array.isArray(e), i = [], o = !1;
                return {
                    onIgnoreTag: function (e, r, a) {
                        if (n(e)) {
                            if (a.isClosing) {
                                var s = "[/removed]", l = a.position + s.length;
                                return i.push([!1 !== o ? o : a.position, l]), o = !1, s
                            }
                            return o || (o = a.position), "[removed]"
                        }
                        return t(e, r, a)
                    }, remove: function (e) {
                        var t = "", n = 0;
                        return p.forEach(i, function (r) {
                            t += e.slice(n, r[0]), n = r[1]
                        }), t += e.slice(n)
                    }
                }
            }, n.stripCommentTag = function (e) {
                return e.replace(S, "")
            }, n.stripBlankChar = function (e) {
                var t = e.split("");
                return (t = t.filter(function (e) {
                    var t = e.charCodeAt(0);
                    return !(127 === t || t <= 31 && 10 !== t && 13 !== t)
                })).join("")
            }, n.cssFilter = g, n.getDefaultCSSWhiteList = d
        }, {"./util": 4, cssfilter: 8}], 2: [function (e, t, n) {
            var r = e("./default"), i = e("./parser"), o = e("./xss");
            (n = t.exports = function (e, t) {
                return new o(t).process(e)
            }).FilterXSS = o;
            for (var a in r) n[a] = r[a];
            for (var a in i) n[a] = i[a];
            void 0 !== nTalk && nTalk.extend({filterXSS: t.exports})
        }, {"./default": 1, "./parser": 3, "./xss": 5}], 3: [function (e, t, n) {
            function r(e) {
                var t = e.indexOf(" ");
                if (-1 === t) n = e.slice(1, -1); else var n = e.slice(1, t + 1);
                return "/" === (n = c.trim(n).toLowerCase()).slice(0, 1) && (n = n.slice(1)), "/" === n.slice(-1) && (n = n.slice(0, -1)), n
            }

            function i(e) {
                return "</" === e.slice(0, 2)
            }

            function o(e, t) {
                for (; t < e.length; t++) {
                    var n = e[t];
                    if (" " !== n) return "=" === n ? t : -1
                }
            }

            function a(e, t) {
                for (; t > 0; t--) {
                    var n = e[t];
                    if (" " !== n) return "=" === n ? t : -1
                }
            }

            function s(e) {
                return '"' === e[0] && '"' === e[e.length - 1] || "'" === e[0] && "'" === e[e.length - 1]
            }

            function l(e) {
                return s(e) ? e.substr(1, e.length - 2) : e
            }

            var c = e("./util"), u = /[^a-zA-Z0-9_:\.\-]/gim;
            n.parseTag = function (e, t, n) {
                "user strict";
                var o = "", a = 0, s = !1, l = !1, c = 0, u = e.length, h = "", f = "";
                for (c = 0; c < u; c++) {
                    var d = e.charAt(c);
                    if (!1 === s) {
                        if ("<" === d) {
                            s = c;
                            continue
                        }
                    } else if (!1 === l) {
                        if ("<" === d) {
                            o += n(e.slice(a, c)), s = c, a = c;
                            continue
                        }
                        if (">" === d) {
                            o += n(e.slice(a, s)), f = r(h = e.slice(s, c + 1)), o += t(s, o.length, f, h, i(h)), a = c + 1, s = !1;
                            continue
                        }
                        if (('"' === d || "'" === d) && "=" === e.charAt(c - 1)) {
                            l = d;
                            continue
                        }
                    } else if (d === l) {
                        l = !1;
                        continue
                    }
                }
                return a < e.length && (o += n(e.substr(a))), o
            }, n.parseAttr = function (e, t) {
                "user strict";

                function n(e, n) {
                    if (e = c.trim(e), !((e = e.replace(u, "").toLowerCase()).length < 1)) {
                        var r = t(e, n || "");
                        r && i.push(r)
                    }
                }

                for (var r = 0, i = [], s = !1, h = e.length, f = 0; f < h; f++) {
                    var d, p = e.charAt(f);
                    if (!1 !== s || "=" !== p) if (!1 === s || f !== r || '"' !== p && "'" !== p || "=" !== e.charAt(f - 1)) if (" " !== p) ; else {
                        if (!1 === s) {
                            if (-1 === (d = o(e, f))) {
                                n(c.trim(e.slice(r, f))), s = !1, r = f + 1;
                                continue
                            }
                            f = d - 1;
                            continue
                        }
                        if (-1 === (d = a(e, f - 1))) {
                            n(s, l(c.trim(e.slice(r, f)))), s = !1, r = f + 1;
                            continue
                        }
                    } else {
                        if (-1 === (d = e.indexOf(p, f + 1))) break;
                        n(s, c.trim(e.slice(r + 1, d))), s = !1, r = (f = d) + 1
                    } else s = e.slice(r, f), r = f + 1
                }
                return r < e.length && (!1 === s ? n(e.slice(r)) : n(s, l(c.trim(e.slice(r))))), c.trim(i.join(" "))
            }
        }, {"./util": 4}], 4: [function (e, t, n) {
            t.exports = {
                indexOf: function (e, t) {
                    var n, r;
                    if (Array.prototype.indexOf) return e.indexOf(t);
                    for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                    return -1
                }, forEach: function (e, t, n) {
                    var r, i;
                    if (Array.prototype.forEach) return e.forEach(t, n);
                    for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e)
                }, trim: function (e) {
                    return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
                }
            }
        }, {}], 5: [function (e, t, n) {
            function r(e) {
                return e === undefined || null === e
            }

            function i(e) {
                var t = e.indexOf(" ");
                if (-1 === t) return {html: "", closing: "/" === e[e.length - 2]};
                var n = "/" === (e = f.trim(e.slice(t + 1, -1)))[e.length - 1];
                return n && (e = f.trim(e.slice(0, -1))), {html: e, closing: n}
            }

            function o(e) {
                var t = {};
                for (var n in e) t[n] = e[n];
                return t
            }

            function a(e) {
                (e = o(e || {})).stripIgnoreTag && (e.onIgnoreTag && console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'), e.onIgnoreTag = l.onIgnoreTagStripAll), e.whiteList = e.whiteList || l.whiteList, e.onTag = e.onTag || l.onTag, e.onTagAttr = e.onTagAttr || l.onTagAttr, e.onIgnoreTag = e.onIgnoreTag || l.onIgnoreTag, e.onIgnoreTagAttr = e.onIgnoreTagAttr || l.onIgnoreTagAttr, e.safeAttrValue = e.safeAttrValue || l.safeAttrValue, e.escapeHtml = e.escapeHtml || l.escapeHtml, this.options = e, !1 === e.css ? this.cssFilter = !1 : (e.css = e.css || {}, this.cssFilter = new s(e.css))
            }

            var s = e("cssfilter").FilterCSS, l = e("./default"), c = e("./parser"), u = c.parseTag, h = c.parseAttr,
                f = e("./util");
            a.prototype.process = function (e) {
                if (e = e || "", !(e = e.toString())) return "";
                var t = this, n = t.options, o = n.whiteList, a = n.onTag, s = n.onIgnoreTag, c = n.onTagAttr,
                    d = n.onIgnoreTagAttr, p = n.safeAttrValue, g = n.escapeHtml, m = t.cssFilter;
                n.stripBlankChar && (e = l.stripBlankChar(e)), n.allowCommentTag || (e = l.stripCommentTag(e));
                T = !1;
                if (n.stripIgnoreTagBody) {
                    var T = l.StripTagBody(n.stripIgnoreTagBody, s);
                    s = T.onIgnoreTag
                }
                var v = u(e, function (e, t, n, l, u) {
                    var T = {sourcePosition: e, position: t, isClosing: u, isWhite: n in o}, v = a(n, l, T);
                    if (!r(v)) return v;
                    if (T.isWhite) {
                        if (T.isClosing) return "</" + n + ">";
                        var k = i(l), w = o[n], b = h(k.html, function (e, t) {
                            var i = -1 !== f.indexOf(w, e), o = c(n, e, t, i);
                            return r(o) ? i ? (t = p(n, e, t, m)) ? e + '="' + t + '"' : e : r(o = d(n, e, t, i)) ? void 0 : o : o
                        }), l = "<" + n;
                        return b && (l += " " + b), k.closing && (l += " /"), l += ">"
                    }
                    return r(v = s(n, l, T)) ? g(l) : v
                }, g);
                return T && (v = T.remove(v)), v
            }, t.exports = a
        }, {"./default": 1, "./parser": 3, "./util": 4, cssfilter: 8}], 6: [function (e, t, n) {
            function r(e) {
                return e === undefined || null === e
            }

            function i(e) {
                var t = {};
                for (var n in e) t[n] = e[n];
                return t
            }

            function o(e) {
                (e = i(e || {})).whiteList = e.whiteList || a.whiteList, e.onAttr = e.onAttr || a.onAttr, e.onIgnoreAttr = e.onIgnoreAttr || a.onIgnoreAttr, this.options = e
            }

            var a = e("./default"), s = e("./parser");
            e("./util");
            o.prototype.process = function (e) {
                if (e = e || "", !(e = e.toString())) return "";
                var t = this.options, n = t.whiteList, i = t.onAttr, o = t.onIgnoreAttr;
                return s(e, function (e, t, a, s, l) {
                    var c = n[a], u = !1;
                    !0 === c ? u = c : "function" == typeof c ? u = c(s) : c instanceof RegExp && (u = c.test(s)), !0 !== u && (u = !1);
                    var h = {position: t, sourcePosition: e, source: l, isWhite: u};
                    if (u) return r(f = i(a, s, h)) ? a + ":" + s : f;
                    var f = o(a, s, h);
                    return r(f) ? void 0 : f
                })
            }, t.exports = o
        }, {"./default": 7, "./parser": 9, "./util": 10}], 7: [function (e, t, n) {
            function r() {
                var e = {};
                return e["align-content"] = !1, e["align-items"] = !1, e["align-self"] = !1, e["alignment-adjust"] = !1, e["alignment-baseline"] = !1, e.all = !1, e["anchor-point"] = !1, e.animation = !1, e["animation-delay"] = !1, e["animation-direction"] = !1, e["animation-duration"] = !1, e["animation-fill-mode"] = !1, e["animation-iteration-count"] = !1, e["animation-name"] = !1, e["animation-play-state"] = !1, e["animation-timing-function"] = !1, e.azimuth = !1, e["backface-visibility"] = !1, e.background = !0, e["background-attachment"] = !0, e["background-clip"] = !0, e["background-color"] = !0, e["background-image"] = !0, e["background-origin"] = !0, e["background-position"] = !0, e["background-repeat"] = !0, e["background-size"] = !0, e["baseline-shift"] = !1, e.binding = !1, e.bleed = !1, e["bookmark-label"] = !1, e["bookmark-level"] = !1, e["bookmark-state"] = !1, e.border = !0, e["border-bottom"] = !0, e["border-bottom-color"] = !0, e["border-bottom-left-radius"] = !0, e["border-bottom-right-radius"] = !0, e["border-bottom-style"] = !0, e["border-bottom-width"] = !0, e["border-collapse"] = !0, e["border-color"] = !0, e["border-image"] = !0, e["border-image-outset"] = !0, e["border-image-repeat"] = !0, e["border-image-slice"] = !0, e["border-image-source"] = !0, e["border-image-width"] = !0, e["border-left"] = !0, e["border-left-color"] = !0, e["border-left-style"] = !0, e["border-left-width"] = !0, e["border-radius"] = !0, e["border-right"] = !0, e["border-right-color"] = !0, e["border-right-style"] = !0, e["border-right-width"] = !0, e["border-spacing"] = !0, e["border-style"] = !0, e["border-top"] = !0, e["border-top-color"] = !0, e["border-top-left-radius"] = !0, e["border-top-right-radius"] = !0, e["border-top-style"] = !0, e["border-top-width"] = !0, e["border-width"] = !0, e.bottom = !1, e["box-decoration-break"] = !0, e["box-shadow"] = !0, e["box-sizing"] = !0, e["box-snap"] = !0, e["box-suppress"] = !0, e["break-after"] = !0, e["break-before"] = !0, e["break-inside"] = !0, e["caption-side"] = !1, e.chains = !1, e.clear = !0, e.clip = !1, e["clip-path"] = !1, e["clip-rule"] = !1, e.color = !0, e["color-interpolation-filters"] = !0, e["column-count"] = !1, e["column-fill"] = !1, e["column-gap"] = !1, e["column-rule"] = !1, e["column-rule-color"] = !1, e["column-rule-style"] = !1, e["column-rule-width"] = !1, e["column-span"] = !1, e["column-width"] = !1, e.columns = !1, e.contain = !1, e.content = !1, e["counter-increment"] = !1, e["counter-reset"] = !1, e["counter-set"] = !1, e.crop = !1, e.cue = !1, e["cue-after"] = !1,e["cue-before"] = !1,e.cursor = !1,e.direction = !1,e.display = !0,e["display-inside"] = !0,e["display-list"] = !0,e["display-outside"] = !0,e["dominant-baseline"] = !1,e.elevation = !1,e["empty-cells"] = !1,e.filter = !1,e.flex = !1,e["flex-basis"] = !1,e["flex-direction"] = !1,e["flex-flow"] = !1,e["flex-grow"] = !1,e["flex-shrink"] = !1,e["flex-wrap"] = !1,e["float"] = !1,e["float-offset"] = !1,e["flood-color"] = !1,e["flood-opacity"] = !1,e["flow-from"] = !1,e["flow-into"] = !1,e.font = !0,e["font-family"] = !0,e["font-feature-settings"] = !0,e["font-kerning"] = !0,e["font-language-override"] = !0,e["font-size"] = !0,e["font-size-adjust"] = !0,e["font-stretch"] = !0,e["font-style"] = !0,e["font-synthesis"] = !0,e["font-variant"] = !0,e["font-variant-alternates"] = !0,e["font-variant-caps"] = !0,e["font-variant-east-asian"] = !0,e["font-variant-ligatures"] = !0,e["font-variant-numeric"] = !0,e["font-variant-position"] = !0,e["font-weight"] = !0,e.grid = !1,e["grid-area"] = !1,e["grid-auto-columns"] = !1,e["grid-auto-flow"] = !1,e["grid-auto-rows"] = !1,e["grid-column"] = !1,e["grid-column-end"] = !1,e["grid-column-start"] = !1,e["grid-row"] = !1,e["grid-row-end"] = !1,e["grid-row-start"] = !1,e["grid-template"] = !1,e["grid-template-areas"] = !1,e["grid-template-columns"] = !1,e["grid-template-rows"] = !1,e["hanging-punctuation"] = !1,e.height = !0,e.hyphens = !1,e.icon = !1,e["image-orientation"] = !1,e["image-resolution"] = !1,e["ime-mode"] = !1,e["initial-letters"] = !1,e["inline-box-align"] = !1,e["justify-content"] = !1,e["justify-items"] = !1,e["justify-self"] = !1,e.left = !1,e["letter-spacing"] = !0,e["lighting-color"] = !0,e["line-box-contain"] = !1,e["line-break"] = !1,e["line-grid"] = !1,e["line-height"] = !1,e["line-snap"] = !1,e["line-stacking"] = !1,e["line-stacking-ruby"] = !1,e["line-stacking-shift"] = !1,e["line-stacking-strategy"] = !1,e["list-style"] = !0,e["list-style-image"] = !0,e["list-style-position"] = !0,e["list-style-type"] = !0,e.margin = !0,e["margin-bottom"] = !0,e["margin-left"] = !0,e["margin-right"] = !0,e["margin-top"] = !0,e["marker-offset"] = !1,e["marker-side"] = !1,e.marks = !1,e.mask = !1,e["mask-box"] = !1,e["mask-box-outset"] = !1,e["mask-box-repeat"] = !1,e["mask-box-slice"] = !1,e["mask-box-source"] = !1,e["mask-box-width"] = !1,e["mask-clip"] = !1,e["mask-image"] = !1,e["mask-origin"] = !1,e["mask-position"] = !1,e["mask-repeat"] = !1,e["mask-size"] = !1,e["mask-source-type"] = !1,e["mask-type"] = !1,e["max-height"] = !0,e["max-lines"] = !1,e["max-width"] = !0,e["min-height"] = !0,e["min-width"] = !0,e["move-to"] = !1,e["nav-down"] = !1,e["nav-index"] = !1,e["nav-left"] = !1,e["nav-right"] = !1,e["nav-up"] = !1,e["object-fit"] = !1,e["object-position"] = !1,e.opacity = !1,e.order = !1,e.orphans = !1,e.outline = !1,e["outline-color"] = !1,e["outline-offset"] = !1,e["outline-style"] = !1,e["outline-width"] = !1,e.overflow = !1,e["overflow-wrap"] = !1,e["overflow-x"] = !1,e["overflow-y"] = !1,e.padding = !0,e["padding-bottom"] = !0,e["padding-left"] = !0,e["padding-right"] = !0,e["padding-top"] = !0,e.page = !1,e["page-break-after"] = !1,e["page-break-before"] = !1,e["page-break-inside"] = !1,e["page-policy"] = !1,e.pause = !1,e["pause-after"] = !1,e["pause-before"] = !1,e.perspective = !1,e["perspective-origin"] = !1,e.pitch = !1,e["pitch-range"] = !1,e["play-during"] = !1,e.position = !1,e["presentation-level"] = !1,e.quotes = !1,e["region-fragment"] = !1,e.resize = !1,e.rest = !1,e["rest-after"] = !1,e["rest-before"] = !1,e.richness = !1,e.right = !1,e.rotation = !1,e["rotation-point"] = !1,e["ruby-align"] = !1,e["ruby-merge"] = !1,e["ruby-position"] = !1,e["shape-image-threshold"] = !1,e["shape-outside"] = !1,e["shape-margin"] = !1,e.size = !1,e.speak = !1,e["speak-as"] = !1,e["speak-header"] = !1,e["speak-numeral"] = !1,e["speak-punctuation"] = !1,e["speech-rate"] = !1,e.stress = !1,e["string-set"] = !1,e["tab-size"] = !1,e["table-layout"] = !1,e["text-align"] = !0,e["text-align-last"] = !0,e["text-combine-upright"] = !0,e["text-decoration"] = !0,e["text-decoration-color"] = !0,e["text-decoration-line"] = !0,e["text-decoration-skip"] = !0,e["text-decoration-style"] = !0,e["text-emphasis"] = !0,e["text-emphasis-color"] = !0,e["text-emphasis-position"] = !0,e["text-emphasis-style"] = !0,e["text-height"] = !0,e["text-indent"] = !0,e["text-justify"] = !0,e["text-orientation"] = !0,e["text-overflow"] = !0,e["text-shadow"] = !0,e["text-space-collapse"] = !0,e["text-transform"] = !0,e["text-underline-position"] = !0,e["text-wrap"] = !0,e.top = !1,e.transform = !1,e["transform-origin"] = !1,e["transform-style"] = !1,e.transition = !1,e["transition-delay"] = !1,e["transition-duration"] = !1,e["transition-property"] = !1,e["transition-timing-function"] = !1,e["unicode-bidi"] = !1,e["vertical-align"] = !1,e.visibility = !1,e["voice-balance"] = !1,e["voice-duration"] = !1,e["voice-family"] = !1,e["voice-pitch"] = !1,e["voice-range"] = !1,e["voice-rate"] = !1,e["voice-stress"] = !1,e["voice-volume"] = !1,e.volume = !1,e["white-space"] = !1,e.widows = !1,e.width = !0,e["will-change"] = !1,e["word-break"] = !0,e["word-spacing"] = !0,e["word-wrap"] = !0,e["wrap-flow"] = !1,e["wrap-through"] = !1,e["writing-mode"] = !1,e["z-index"] = !1,e
            }

            n.whiteList = r(), n.getDefaultWhiteList = r, n.onAttr = function (e, t, n) {
            }, n.onIgnoreAttr = function (e, t, n) {
            }
        }, {}], 8: [function (e, t, n) {
            var r = e("./default"), i = e("./css");
            (n = t.exports = function (e, t) {
                return new i(t).process(e)
            }).FilterCSS = i;
            for (var o in r) n[o] = r[o];
            void 0 !== nTalk && nTalk.extend({FilterCSS: t.exports})
        }, {"./css": 6, "./default": 7}], 9: [function (e, t, n) {
            var r = e("./util");
            t.exports = function (e, t) {
                function n() {
                    if (!o) {
                        var n = r.trim(e.slice(a, s)), i = n.indexOf(":");
                        if (-1 !== i) {
                            var c = r.trim(n.slice(0, i)), u = r.trim(n.slice(i + 1));
                            if (c) {
                                var h = t(a, l.length, c, u, n);
                                h && (l += h + "; ")
                            }
                        }
                    }
                    a = s + 1
                }

                ";" !== (e = r.trimRight(e))[e.length - 1] && (e += ";");
                for (var i = e.length, o = !1, a = 0, s = 0, l = ""; s < i; s++) {
                    var c = e[s];
                    if ("/" === c && "*" === e[s + 1]) {
                        var u = e.indexOf("*/", s + 2);
                        if (-1 === u) break;
                        a = (s = u + 1) + 1, o = !1
                    } else "(" === c ? o = !0 : ")" === c ? o = !1 : ";" === c ? o || n() : "\n" === c && n()
                }
                return r.trim(l)
            }
        }, {"./util": 10}], 10: [function (e, t, n) {
            t.exports = {
                indexOf: function (e, t) {
                    var n, r;
                    if (Array.prototype.indexOf) return e.indexOf(t);
                    for (n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                    return -1
                }, forEach: function (e, t, n) {
                    var r, i;
                    if (Array.prototype.forEach) return e.forEach(t, n);
                    for (r = 0, i = e.length; r < i; r++) t.call(n, e[r], r, e)
                }, trim: function (e) {
                    return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
                }, trimRight: function (e) {
                    return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "")
                }
            }
        }, {}]
    }, {}, [2]))
}(window);
/* @file flashserver
 * @date 2019.08.08 15:39:15
 */
(function ($) {
    $.flashserver = {
        'trailserver': 'http://sh-trail.ntalker.com/trail/trail',
        'presenceserver': '0',
        'presencegoserver': 'http://sh-p2.ntalker.com/flashIM/wdkstatus',
        'crmcenter': 'http://hcrmct.ntalker.com/',
        'mcenter': 'http://sh-p2.ntalker.com/record/mcenters/',
        'coopserver': '',
        'roboturl': 'http://xn.faqrobot.org/servlet/XNAQ',
        't2dstatus': 'http://sh-p2.ntalker.com/t2d2/t2dstatus',
        'chatview_in': '',
        'chatview_out': '',
        'chatview_wap': '',
        'queryurl': 'http://sh-p2.ntalker.com/spider/spider/',
        'tchatmqttserver': 'tcp://sh-p2.ntalker.com:6020/tchat2;ws://sh-p2.ntalker.com:6021/tchat2;wss://sh-p2.ntalker.com:6022/tchat2',
        'eduimmqttserver': '',
        'robotserver': 'http://sh-p2.ntalker.com/assist',
        'kpiserver': 'http://sh-p2.ntalker.com/kpi',
        'xpushim': '',
        'xpushthirdpush': '',
        'isnoim': 2,
        'notrail': 0,
        'preload': 2000,
        'sessioncarry': '1',
        'enable_entrance': '0',
        'enable_invite': '0',
        'close_tchat_flash': '1',
        'close_im_flash': '0',
        'robot': '0',
        'connect_type': 'mqtt',
        'history_version': '1',
        'entranceConfig': {},
        'tchatConnectType': '1',
        'layout': '0',
        'reversechat': '0',
        'halfScreen': '',
        'usehttps': '0',
        'eduautochat': '0',
        'eduautoopentimeout': '3000',
        'eduautoopendomains': '',
        'eduautoopenstrs': '',
        'xpushpolltimeout': '15',
        'usexpush': '0',
        'settingserver': 'http://sh-p2.ntalker.com/setting',
        'apiserver': 'http://sh-p2.ntalker.com/api/',
        'siteid': 'kf_9255'
    };
    $.sourceURI = $.baseURI + "siteid/respack_nt6.96/";
})(nTalk);

/* @file trail.js
 * @date 2019.04.29 15:53:18
 */
!function (e, l) {
    e.trail || (e.trail = {
        _trailServer: {kf_9988: "http://trailsvc.ntalker.com/trailsvc/count/trail.php?"},
        islogin: !1,
        called: !1,
        etype: "pv",
        edata: "",
        useSdkData: !1,
        getRegionTimer: null,
        start: function (l, t, i, r) {
            var a, o, n = this, s = e.referrer && e.referrer.indexOf(e.domain) > -1;
            this.called && !t || (e.Log("nTalk.trail.start()", 1), this.etype = t ? "update" : this.etype, this.useSdkData = i, l || "" === e.global.trailid || !s ? this.islogin = 1 : this.islogin = 0, a = this.formartData(), !e.isEmptyObject(e.global.ntalkerparam) && e.global.ntalkerparam && (o = e.extend({}, {ntalkerparam: e.global.ntalkerparam})), o = e.extend(o, {ref: document.referrer}), e.each(a, function (l, t) {
                n.request(n.formatURI() + e.toURI(t), o, function (l) {
                    e.Log(l, 1)
                }, (new Date).getTime() + "" + l)
            }), this.getRegionTimer = setTimeout(function () {
                r && "function" == typeof r && r(), clearTimeout(n.getRegionTimer), n.getRegionTimer = null
            }, 200), this.called = !0)
        },
        request: function (l, t, i, r) {
            if (t) {
                if (e.Log("nTalk.trail.request():etype:" + this.etype + ";POST request URI:" + l), window.XMLHttpRequest && window.FormData) {
                    var a = new FormData;
                    for (var o in t) a.append(o, t[o]);
                    var n = new XMLHttpRequest;
                    return n.open("POST", l, !0), void n.send(a)
                }
                new e.POST(l, t, function (e, l) {
                    i.call(nTalk, "nTalk.trail: iframe[" + l + "] post complete.", 1)
                }, "POST_IFRAME_" + r)
            } else e.Log("nTalk.trail.request():etype:" + this.etype + ";POST request URI:" + l), e.require(l + "#rnd", function () {
                i.call(nTalk, "nTalk.trail: script get complete.", 1)
            })
        },
        formatURI: function () {
            return this._trailServer[e.global.siteid] ? e.protocolFilter(this._trailServer[e.global.siteid]) : e.protocolFilter(e.server.trailserver + "/userinfo.php?")
        },
        formartData: function () {
            var l, t = [], i = {
                action: "save",
                url: e.url,
                siteid: e.global.siteid,
                uid: e.user.id,
                uname: e.user.name,
                device: this.useSdkData ? "App" : e.browser.mobile ? "WAP" : "PC",
                isvip: e.global.isvip,
                userlevel: e.global.userlevel,
                cid: e.global.pcid,
                sid: e.global.trailid,
                log: this.islogin,
                pageid: e.base.pageid,
                etype: this.etype,
                edata: this.edata,
                sourceid: e.global.sourceid,
                sourcename: e.global.sourcename,
                keyid: e.global.keyid,
                keyword: e.global.keyword,
                country: e.global.country,
                province: e.global.province,
                city: e.global.city
            };
            return e.global.pagetype && (-1 == e.url.indexOf("#") ? i.url += "#ntalker-pagetype=" + e.global.pagetype : -1 == e.url.indexOf("?") ? i.url = e.enCut(e.url.replace(/#/i, "?ntalker-pagetype=" + e.global.pagetype + "#"), 255) : i.url = e.enCut(e.url.replace(/#/i, "&ntalker-pagetype=" + e.global.pagetype + "#"), 255)), 1 == this.islogin && (e.cache.set("tid", e.global.trailid), i = e.merge(i, {
                lan: e.language,
                scr: screen.width + "*" + screen.height,
                cookie: e.cookie.enable() ? 1 : 0,
                flash: e.flash.version
            })), e.Log("nTalk.trail: " + (this.islogin ? "LOGIN" : "LINK") + " trailid:" + e.global.trailid + ", uid:" + e.user.id + ", pcid:" + e.global.pcid, this.islogin ? 1 : 0), e.global.orderid.length ? e.each(e.global.orderid, function (r, a) {
                l = r > e.global.orderprice.length - 1 ? "" : e.global.orderprice[r], t.push(e.merge({}, i, {
                    orderid: a,
                    orderprice: l,
                    sellerid: e.global.sellerid[r] || "",
                    ttl: e.global.title
                }))
            }) : t.push(e.merge({}, i, {
                sellerid: e.global.sellerid.length ? e.global.sellerid[0] : "",
                ttl: e.global.title
            })), t
        }
    })
}(nTalk);
/* @file nt2.js
 * @date 2019.04.29 15:53:18
 */
!function (t, e) {
    function i() {
    }

    t.animate ? t.Log("nt2.js loaded") : (t.animate = function () {
        var t = document.documentElement.style;
        return void 0 !== t.webkitTransition || void 0 !== t.MozTransition || void 0 !== t.OTransition || void 0 !== t.msTransition || void 0 !== t.transition
    }() ? function () {
        var e = document.documentElement.style,
            i = (void 0 !== e.webkitTransition ? "Webkit" : void 0 !== e.MozTransition ? "Moz" : void 0 !== e.OTransition ? "O" : void 0 !== e.msTransition ? "ms" : "") + "Transition";
        return function (e, n, s, o) {
            var a = [], r = [], h = [], l = [], c = e.style;
            return s = s || 300, t.each(n, function (i, n) {
                r[i] = t.camelize(i), t.isObject(n) ? (n.to = n.to || 0, a[i] = t.cssNumber[i] ? n.to : parseInt(n.to, 10), h[i] = t.unit(i, n.to), t.isDefined(n.from) && t.css(e, r[i], parseInt(n.from, 10) + h[i])) : (a[i] = t.cssNumber[i] ? parseInt(n, 10) : n, h[i] = t.unit(i, n), t.css(e, r[i], a[i])), l.push(i)
            }), setTimeout(function () {
                c[i] = "all " + s + "ms", t.each(l, function (t, e) {
                    c[r[e]] = a[e] + h[e]
                })
            }, 15), setTimeout(function () {
                c[i] = "", o && o.call(e)
            }, s), e
        }
    }() : function (e, i, n, s) {
        var o, a, r = 0, h = 0, l = 0, c = [], d = [], p = [], u = [], m = [];
        for (n = n || 300, t.each(i, function (i, n) {
            p.push(t.camelize(i)), t.isObject(n) ? (a = n.to, t.isDefined(n.from) ? d.push(t.cssNumber[i] ? n.from : parseInt(n.from, 10)) : d.push(t.cssNumber[i] ? t(e).css(i) : parseInt(t(e).css(i), 10)), t.css(e, p[h], d[h] + t.unit(i, a))) : (a = n, d.push(t(e).css(i))), c.push(t.cssNumber[i] ? a : isNaN(parseInt(a, 10)) ? "" : parseInt(a, 10)), u.push(t.unit(i, a)), h++, l++
        }), o = 0; o < 30; o++) for (m[o] = [], h = 0; h < l; h++) m[o][p[h]] = t.cssNumber[p[h]] || t.isNumeric(parseInt(d[h])) ? d[h] + (c[h] - d[h]) / 30 * o + ("opacity" === p[h] ? "" : u[h]) : "";
        for (; h < 30; h++) setTimeout(function () {
            for (h = 0; h < l; h++) t.css(e, p[h], m[r][p[h]]);
            r++
        }, n / 30 * h);
        return setTimeout(function () {
            for (h = 0; h < l; h++) t.css(e, p[h], c[h] + u[h]);
            s && s.call(e)
        }, n), e
    }, t.extend({
        listenerFunctions: [], listenerMessage: function (e) {
            function i(e) {
                t.each(t.listenerFunctions, function (i, n) {
                    n.apply(t, [e.data])
                })
            }

            var n = this;
            t.listenerFunctions.push(e), window.addEventListener && !0 !== this.__listenerMessage && (t.Event.addEvent(window, "message", i), t.removelistenerMessage = function () {
                t.Event.removeEvent(window, "message", i), t.listenerFunctions = [], n.__listenerMessage = !1
            }, this.__listenerMessage = !0)
        }, postMessage: function (t, e, i) {
            if (t.postMessage) {
                i = i || "*";
                try {
                    t.postMessage(e, i)
                } catch (n) {
                }
            }
        }
    }), t.Window = t.Class.create(), t.Window.prototype = {
        defaultOptions: {
            dropHeight: 30,
            width: 520,
            height: 410,
            left: 100,
            top: 100,
            minWidth: 520,
            minHeight: 410,
            resize: !1,
            drag: !1,
            fixed: !1,
            zIndex: 1e6,
            rightNode: !0,
            onChanage: i,
            onClose: i,
            onMinimize: i,
            onMaximize: i,
            onMaxResize: i
        },
        _tmpMove: null,
        _tmpStop: null,
        containter: null,
        header: null,
        body: null,
        chatBody: null,
        rightElement: null,
        buttonResize: null,
        buttonClose: null,
        buttonMax: null,
        buttonMin: null,
        _x: 0,
        _y: 0,
        _isdrag: null,
        _Style: null,
        parent: null,
        initialize: function (e, i) {
            t.extend(this, this.defaultOptions, e), this.parent = i || null, this.quirks = t.browser.msie6 || t.browser.Quirks && t.browser.oldmsie, this.right = t(window).width() - this.left - this.width, this.bottom = t(window).height() - this.top - this.height, t.Log("$.Window:: left:" + this.left + ", top:" + this.top), this._create(), this._bind()
        },
        close: function (e) {
            this.cancelBubble(e), this.onClose.toString().indexOf("anonymous") <= -1 ? (this.onClose(), window.localStorage.carry_dest && (window.localStorage.carry_dest = "")) : this.containter.hide(function () {
                t(this).remove(), window.localStorage.carry_dest && (window.localStorage.carry_dest = "")
            })
        },
        change: function (t) {
            t && this.onChanage.call(this, {
                width: this.width,
                height: this.height
            }), this._isdrag || (this.chatBody.css({height: this.height - this.dropHeight + "px"}), this.rightNode && this.rightElement.css("height", this.height - this.dropHeight + "px"))
        },
        maxresize: function () {
            this.onMaxResize()
        },
        minimize: function (t, e) {
            !0 !== e && this.cancelBubble(t), this.containter.css({
                height: "0px",
                width: "0px"
            }), !0 !== e && this.onMinimize()
        },
        maximize: function (t, e) {
            this.containter.css({height: this.height + "px", width: this.width + "px"}), !0 !== e && this.onMaximize()
        },
        cancelBubble: function (e) {
            this.containter.css("z-index", this.zIndex), t.Event.fixEvent(e).stopPropagation()
        },
        changeAttr: function (e, i) {
            this.quirks && this.clearExpression(), t.extend(this, {
                width: e,
                height: i,
                left: Math.max(0, t(window).width() - this.right - e),
                top: Math.max(0, t(window).height() - this.bottom - i)
            }), this.containter.css({
                width: this.width + "px",
                height: this.height + "px",
                left: this.left + "px",
                top: this.top + "px"
            }), this.quirks && this.fixedPosition(), this.change(!0)
        },
        start: function (e, i) {
            i || this.cancelBubble(e), this._Style = i ? {x: "left", y: "top"} : {
                x: "width",
                y: "height"
            }, this.right = t(window).width() - this.left - this.width, this.bottom = t(window).height() - this.top - this.height, this.quirks && !i && this.clearExpression(), e = t.Event.fixEvent(e), this.containter.css({"z-index": ++this.zIndex}), this._isdrag = i, this._x = i ? e.clientX - this.containter.get(0).offsetLeft || 0 : this.containter.get(0).offsetLeft || 0, this._y = i ? e.clientY - this.containter.get(0).offsetTop || 0 : this.containter.get(0).offsetTop || 0, t.browser.msie ? this.containter.bind("losecapture", this._tmpStop).get(0).setCapture() : (t.Event.fixEvent(e).preventDefault(), t(window).bind("blur", this._tmpStop)), t(document).bind("mousemove", this._tmpMove), t(document).bind("mouseup", this._tmpStop)
        },
        move: function (e) {
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            var i = (e = t.Event.fixEvent(e)).clientX - this._x, n = e.clientY - this._y, s = t(window).offset();
            this._isdrag ? (this.quirks ? (this[this._Style.x] = Math.min(Math.max(i, s.left), s.left + t(window).width() - this.width) - s.left, this[this._Style.y] = Math.min(Math.max(n, s.top), s.top + t(window).height() - this.height) - s.top) : (this[this._Style.x] = Math.min(Math.max(i, 0), t(window).width() - this.width), this[this._Style.y] = Math.min(Math.max(n, 0), t(window).height() - this.height)), this.containter.css(this._Style.x, (this.quirks ? s.left : 0) + Math.max(0, this[this._Style.x]) + "px"), this.containter.css(this._Style.y, (this.quirks ? s.top : 0) + Math.max(0, this[this._Style.y]) + "px")) : (this.quirks ? (this[this._Style.x] = Math.min(Math.max(i + (this.quirks ? s.left : 0), this.minWidth), t(window).width() - this.left), this[this._Style.y] = Math.min(Math.max(n + (this.quirks ? s.top : 0), this.minHeight), t(window).height() - this.top)) : (this[this._Style.x] = Math.min(Math.max(i, this.minWidth), t(window).width() - this.left), this[this._Style.y] = Math.min(Math.max(n, this.minHeight), t(window).height() - this.top)), this.containter.css(this._Style.x, this[this._Style.x] + "px"), this.containter.css(this._Style.y, this[this._Style.y] + "px")), this.right = t(window).width() - this.left - this.width, this.bottom = t(window).height() - this.top - this.height, this.change(!0)
        },
        stop: function () {
            this.quirks && this.fixedPosition(), this.containter.css({"z-index": --this.zIndex}), t(document).removeEvent("mousemove", this._tmpMove), t(document).removeEvent("mouseup", this._tmpStop), t.browser.msie ? this.containter.removeEvent("losecapture", this._tmpStop).get(0).releaseCapture() : t(window).removeEvent("blur", this._tmpStop)
        },
        fixedPosition: function () {
            if (this.quirks) {
                var e = t(window).scrollTop();
                t(window).scrollTop(e + 1), this.containter.replaceIEcssText({
                    left: "expression(eval(Math.max((document.documentElement.scrollLeft || document.body.scrollLeft), (document.documentElement.scrollLeft || document.body.scrollLeft) + (document.documentElement.clientWidth  || document.body.clientWidth ) - this.offsetWidth  - " + this.right + ")))",
                    top: "expression(eval(Math.max((document.documentElement.scrollTop  || document.body.scrollTop ), (document.documentElement.scrollTop  || document.body.scrollTop ) + (document.documentElement.clientHeight || document.body.clientHeight) - this.offsetHeight - " + this.bottom + ")))"
                }), t(window).scrollTop(e), t(window).scrollLeft(1)
            } else this.containter.css({left: this.left + "px", top: this.top + "px"})
        },
        clearExpression: function () {
            var e = t(window).offset();
            this.containter.Expression("left", ""), this.containter.Expression("top", ""), this.containter.Expression("left", ""), this.containter.replaceIEcssText({
                left: e.left + this.left + "px",
                top: e.top + this.top + "px"
            })
        },
        _for_resize: function () {
            this.left = Math.max(0, t(window).width() - this.right - this.width), this.top = Math.max(0, t(window).height() - this.bottom - this.height), this.quirks || this.containter.css({
                left: this.left + "px",
                top: this.top + "px"
            })
        },
        _create: function () {
            return this.containter = t({
                className: this.className || "ntalk-window-containter",
                style: t.STYLE_BODY + "box-sizing:content-box;overflow:hidden;"
            }).appendTo(this.parent, !0).css({
                position: this.fixed ? this.quirks ? "absolute" : "fixed" : "absolute",
                border: "none",
                width: this.width + "px",
                height: this.height + "px",
                zIndex: this.zIndex
            }), "pq_1000" === t.global.siteid && t(".ntalk-window-containter").css({
                "box-shadow": "0 2px 25px 0 rgba(0,0,0,.3)",
                "border-radius": "5px 5px 0px 0px"
            }), this.fixedPosition(), this.header = t({
                className: "ntalk-window-head",
                style: t.STYLE_BODY + "cursor:move;position:relative;left:0;top:0;"
            }).appendTo(this.containter).css({
                width: "100%",
                height: this.dropHeight + "px"
            }), this.buttonClose = t({
                className: "ntalk-button-close",
                style: t.STYLE_BODY + "width:20px;height:20px;cursor:pointer;position:static;float:right;position:relative;margin:2px 3px 0 0;line-height:20px;vertical-align:middle;background:none;"
            }).appendTo(this.header), this.buttonMax = t({
                className: "ntalk-button-maxresize",
                style: t.STYLE_BODY + "width:20px;height:20px;cursor:pointer;position:static;float:right;position:relative;margin:2px 3px 0 0;line-height:20px;vertical-align:middle;background:none;"
            }).appendTo(this.header), this.buttonMin = t({
                className: "ntalk-button-min",
                style: t.STYLE_BODY + "width:20px;height:20px;cursor:pointer;position:static;float:right;position:relative;margin:2px 3px 0 0;line-height:20px;vertical-align:middle;background:none;"
            }).appendTo(this.header), this.body = t({
                className: "ntalk-window-body",
                style: t.STYLE_BODY + "float:left;width:100%;"
            }).appendTo(this.containter), this.chatBody = t({
                className: "ntalk-chat-body",
                style: t.STYLE_BODY + "width:100%;position:relative;left:0;top:0;"
            }).appendTo(this.body), this.rightNode && (this.rightElement = t({
                className: "ntalk-window-right",
                style: t.STYLE_BODY + "float:left;display:none;width:100%;"
            }).appendTo(this.containter)), this.resize && (this.buttonResize = t({
                className: "window-resize",
                style: t.STYLE_BODY + "width:10px;height:10px;cursor:nw-resize;position:absolute;right:1px;bottom:1px;font-size:0;background:none;z-index:99;"
            }).appendTo(this.containter)), t({style: t.STYLE_BODY + "clear:both;"}).appendTo(this.containter), this.change(), this.containter
        },
        _bind: function () {
            var e = this;
            this.containter.bind("mousedown", function (t) {
                e.drag && e.start.call(e, t, !0)
            }), this.buttonClose.bind("mousedown", function (i) {
                t.Event.fixEvent(i).stopPropagation(), e.close.call(e, i)
            }), this.buttonMax.bind("mousedown", function (i) {
                t.Event.fixEvent(i).stopPropagation(), e.maxresize.call(e, i)
            }), this.buttonMin.bind("mousedown", function (i) {
                t.Event.fixEvent(i).stopPropagation(), e.minimize.call(e, i)
            }), this.chatBody.bind("mousedown", function (t) {
                e.cancelBubble.call(e, t)
            }), this.rightNode && this.rightElement.bind("mousedown", function (t) {
                e.cancelBubble.call(e, t)
            }), this.resize && this.buttonResize.bind("mousedown", function (t) {
                e.start.call(e, t, !1)
            }), this.fixed && t(window).bind("resize", function () {
                e._for_resize()
            }), this._tmpStop = function (t) {
                e.stop.call(e, t)
            }, this._tmpMove = function (t) {
                e.move.call(e, t)
            }
        }
    }, t.Queue = t.Class.create(), t.Queue.prototype = {
        list: null, length: 0, initialize: function () {
            this.list = [], this.length = this.list.length
        }, isEmpty: function () {
            return 0 === this.list.length
        }, enQueue: function (t) {
            return this.list.push(t), this.length = this.list.length, this.list[this.length - 1]
        }, deQueue: function () {
            var t;
            return this.isEmpty() ? null : (t = this.list.shift(), this.length = this.list.length, t)
        }, queueFront: function () {
            return this.isEmpty() ? null : this.list[0]
        }
    }, t.pageManage = t.Class.create(), t.pageManage.prototype = {
        identid: "",
        keyid: "",
        data: null,
        interID: null,
        options: null,
        debug: !1,
        inter: .8,
        count: 0,
        chanageCall: !0,
        CON_MANAGE_PAGE_LIST: "IM_EXIST_PAGEARR",
        pageStore: null,
        initialize: function (e, n) {
            var s, o, a = this, r = 3;
            this.debug && t.Log("pageManage.initialize():"), this.options = t.extend(this.options, {
                onChanage: i,
                onInterval: i,
                pageNum: 3,
                timeout: 2.5,
                inter: .8
            }, e), this.keyid = t.CON_MANAGE_COOKIE + (n ? "_" + n.toUpperCase() : ""), this.identid = this._2shortTime(0, 8, 13), t.browser.chrome && (this.options.timeout = 5), this.options.timeout *= 10, this.options.inter *= 1e3, this.inter = this.options.inter, this.pageStore = t.store;
            try {
                for (; r-- && "" === (s = this.pageStore.get(this.CON_MANAGE_PAGE_LIST) || "");) ;
                if (o = this._get().m, (s = "" === s || 0 === o.length ? [] : s.split(",")).length != o.length && s.length <= this.options.pageNum) {
                    s = [];
                    for (var h = 0; h < o.length; h++) for (var l in o[h]) s.push(l)
                }
                s.push(this.identid), this.pageStore.set(this.CON_MANAGE_PAGE_LIST, s.join(","))
            } catch (d) {
            }
            var c = t.getTime();
            this.interID = setInterval(function () {
                setTimeout(function () {
                    now = t.getTime();
                    var e = now - c;
                    a._update(e), a.options.onInterval(a.options.timeout, a.data.m), c = t.getTime()
                }, 0)
            }, this.options.inter), t.Event.addEvent(window, "unload", function () {
                a._remove(), setTimeout(function () {
                }, 500)
            })
        },
        getIsLastPage: function () {
            return this.data.m.length
        },
        _get: function () {
            var e = t.cookie.get(this.keyid) || "{}";
            return t.extend({m: []}, t.JSON.parseJSON(e))
        },
        _save: function () {
            var e = t.JSON.toJSONString(this.data);
            return t.cookie.set(this.keyid, e, 0), e
        },
        _remove: function () {
            var t = this._getIndex();
            this.data.m.splice(t, 1), this._save();
            var e = this.pageStore.get(this.CON_MANAGE_PAGE_LIST);
            if (e && "" !== e) {
                for (var i = e.split(","), n = 0; n < i.length; n++) if (i[n] == this.identid) {
                    i.splice(n, 1);
                    break
                }
                "" !== (e = i.join(",")) ? this.pageStore.set(this.CON_MANAGE_PAGE_LIST, e) : this.pageStore.whereClear(this.CON_MANAGE_PAGE_LIST)
            }
        },
        _update: function (e) {
            this.data = this._get(), this._clear(e);
            var i = "update", n = this._getIndex();
            if (this.data.t = t.formatDate(), !this.data.m[n]) {
                if (!(this.data.m.length < this.options.pageNum)) return;
                i = "add", this.data.m[n] = {}
            }
            this.data.m[n][this.identid] = this._2shortTime(), this._save(), this.debug && t.Log(this.identid + ",pageCount:" + this.data.m.length + "," + i + " data:" + t.JSON.toJSONString(this.data.m)), "add" != i && !0 === this.chanageCall || this.count == this.data.m.length || (this.options.onChanage.call(this, this.data.m.length, this.data.m), this.count = this.data.m.length), this.chanageCall = !1
        },
        _clear: function (t) {
            var e = this._2shortTime();
            if (this.data.m.length) for (var i, n = 0; n < this.data.m.length; n++) if (this.data.m[n]) for (var s in this.data.m[n]) if ("function" != typeof this.data.m[n][s] && (i = e - this.data.m[n][s], Math.abs(i) > this.options.timeout + t / 100)) {
                this.data.m.splice(n, 1), this.chanageCall = !0;
                var o = this.pageStore.get(this.CON_MANAGE_PAGE_LIST);
                if (!o || "" === o) return;
                for (var a = o.split(","), r = 0; r < a.length; r++) if (a[r] == s) {
                    a.splice(r, 1);
                    break
                }
                "" !== (o = a.join(",")) ? this.pageStore.set(this.CON_MANAGE_PAGE_LIST, o) : this.pageStore.whereClear(this.CON_MANAGE_PAGE_LIST)
            }
        },
        _getIndex: function () {
            if (!this.data || !this.data.m.length) return 0;
            for (var e = 0; e < this.data.m.length; e++) if (this.data.m[e]) for (var i in this.data.m[e]) if (this.data.m[e] && !t.isFunction(this.data.m[e][i]) && i === this.identid) return e;
            return e
        },
        _2shortTime: function (e, i, n) {
            var s = (e || t.getTime()).toString();
            return i = i || 5, n = n || 11, s.substring(i, n)
        }
    }, t.store = function () {
        var e, n = {disabled: !1}, s = t.browser.msie;
        if (n.toJSONString = function (e) {
            return null === e ? "" : t.JSON.toJSONString(e)
        }, n.parseJSON = function (e) {
            if ("object" == typeof e) return e || void 0;
            try {
                return t.JSON.parseJSON(e)
            } catch (i) {
                return e || void 0
            }
        }, function () {
            var e = null;
            try {
                e = window.localStorage
            } catch (n) {
                return t.Log("localStorage:" + n.message, 3), !1
            }
            if (e) {
                var i = "test";
                try {
                    return null !== localStorage.getItem(i) && localStorage.removeItem(i), localStorage.setItem(i, i), localStorage.getItem(i) == i && (localStorage.removeItem(i), !0)
                } catch (n) {
                    return t.Log("The browser localStorage is unavailable. " + n.message, 3), !1
                }
            }
        }()) e = window.localStorage, n.set = function (i, s) {
            if (!s || void 0 === s || null === s) return n.remove(i);
            try {
                "function" == typeof e.setItem ? e.setItem(i, n.toJSONString(s)) : e[i] = n.toJSONString(s)
            } catch (o) {
                if ("QUOTA_EXCEEDED_ERR" == o.name.toUpperCase()) {
                    n.remove(i);
                    try {
                        e.setItem(i, n.toJSONString(s))
                    } catch (a) {
                        t.Log("store.set:" + a.message, 3)
                    }
                }
            }
            return s
        }, n.get = function (t) {
            return n.parseJSON(e.getItem(t))
        }, n.remove = function (i) {
            try {
                e.removeItem(i)
            } catch (n) {
                t.Log("store.remove:" + n.message, 3)
            }
        }, n.clear = function () {
            try {
                e.clear()
            } catch (i) {
                t.Log("store.clear:" + i.message, 3)
            }
        }, n.getAll = function () {
            for (var t = {}, i = 0; i < e.length; ++i) {
                var s = e.key(i);
                t[s] = n.get(s)
            }
            return t
        }; else if (s) {
            var o, a, r = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"), h = function (t) {
                return function () {
                    var i, s = Array.prototype.slice.call(arguments, 0);
                    s.unshift(e);
                    try {
                        o.appendChild(e)
                    } catch (r) {
                        o.insertBefore(e, o.firstChild)
                    }
                    e.addBehavior && e.addBehavior("#default#userData");
                    for (var a = 20; a > 0;) {
                        a--;
                        try {
                            e.load("nTK-LS");
                            break
                        } catch (r) {
                        }
                    }
                    return i = t.apply(n, s), o.removeChild(e), i
                }
            }, l = function (t) {
                return t.replace(r, "___")
            };
            try {
                (a = new ActiveXObject("htmlfile")).open(), a.write('<script type="text/javascript">document.w=window;<\/script><iframe src="/favicon.ico"></iframe>'), a.close(), o = a.w.frames[0].document, e = o.createElement("div")
            } catch (c) {
                e = document.createElement("div"), o = document.body || document.getElementsByTagName("head")[0] || document.documentElement
            }
            n.set = h(function (t, e, i) {
                if (e = l(e), !i || void 0 === i || null === i) return n.remove(e);
                t.setAttribute(e, n.toJSONString(i));
                try {
                    t.save("nTK-LS")
                } catch (c) {
                }
                return i
            }), n.get = h(function (t, e) {
                return e = l(e), n.parseJSON(t.getAttribute(e))
            }), n.remove = h(function (t, e) {
                e = l(e), t.removeAttribute(e), t.save("nTK-LS")
            }), n.clear = h(function (t) {
                var e;
                try {
                    e = t.XMLDocument.documentElement.attributes
                } catch (c) {
                    return
                }
                t.load("nTK-LS");
                for (var i = 0, n = e.length; i < n; i++) {
                    var s = e[i];
                    t.removeAttribute(s.name)
                }
                t.save("nTK-LS")
            }), n.getAll = h(function (t) {
                var e;
                try {
                    e = t.XMLDocument.documentElement.attributes
                } catch (c) {
                    return
                }
                for (var i = {}, s = 0, o = e.length; s < o; ++s) {
                    var a = e[s], r = l(a.name);
                    i[a.name] = n.parseJSON(t.getAttribute(r))
                }
                return i
            })
        } else n.set = function () {
            t.Log("The browser localStorage is unavailable.", 3)
        }, n.get = i, n.remove = i, n.clear = i, n.getAll = i;
        try {
            n.set("__cometd__", "__cometd__"), "__cometd__" != n.get("__cometd__") && (n.disabled = !0), n.remove("__cometd__")
        } catch (c) {
            n.disabled = !0
        }
        return n.whereClear = function (e) {
            var i = this, n = this.getAll();
            t.each(n, function (t) {
                t.indexOf(e) > -1 && i.remove(t)
            })
        }, n.enabled = !n.disabled, n
    }(), t.comet = t.Class.create(), t.comet.prototype = {
        name: "public.comet",
        version: "2014.05.17",
        connType: "login",
        options: null,
        fix: "",
        id: "",
        count: 0,
        sendIntervalID: null,
        _ipExpr: /^https?:\/\/\d+\.\d+\.\d+\.\d+(:\d+)?\/(.*?)$/gi,
        _cacheElement: {},
        _connectTimeID: {},
        defaultOption: {muDomain: 1, timeout: 20, onCallback: i, onComplete: i, onAbnormal: i, onTimeout: i},
        changePort: !1,
        initialize: function (e, i) {
            var n = this;
            this.uri = e, this.fix = t.randomChar(), this.uri || t.Log("comet uri is null", 3), this.callMethod = window, this.callbackName = "callback_" + this.fix, this.callMethod[this.callbackName] = function () {
                n._connectCallback.call(n, n.id, arguments)
            }, this.options = t.extend({}, this.defaultOption, i), this.initConnectionPooling()
        },
        initMessageQueue: function () {
            this.messageQueue || (this.messageQueue = new t.Queue, this.messageQueue.addMessage = function (t) {
                for (var e = 0; e < this.length; e++) if (this.list[e].msgid == t.msgid && this.list[e].index == t.index) return !1;
                return this.enQueue(t), !0
            }, this.messageQueue.nextMessage = function (t, e) {
                if (this.isEmpty()) return null;
                if (!t) return this.queueFront();
                for (var i = 0; i < this.length; i++) if (this.list[i].msgid == t && this.list[i].body.sendpacket == e) return this.list[i + 1]
            }, this.messageQueue.removeMessage = function (t, e) {
                for (var i = 0; i < this.length; i++) this.list[i].msgid != t || this.list[i].index != e && -1 != e || i;
                this.list.splice(i, 1), this.length = this.list.length
            })
        },
        initConnectionPooling: function () {
            if (!this.connectionPooling) {
                this._ipExpr.test(this.uri) && (this.options.muDomain = 1), this.connectionPooling = new t.Queue, this.connectionPooling.get = function () {
                    for (var t, e, i, n = 0; n < this.list.length; n++) !1 === this.list[n].lock && (!e || e.rTimesample > this.list[n].rTimesample) && (e = this.list[n]), (!i || this.list[n].sTimesample < i.sTimesample) && (i = this.list[n]);
                    return t = e || i, this.recover(t.uri, !0), t
                }, this.connectionPooling.getConnect = function () {
                    var t = this.get();
                    return {uri: t.uri, url: t.uri + (/\?$/gi.test(t.uri) ? "&" : "?")}
                }, this.connectionPooling.recover = function (e, i, n, s) {
                    for (var o = 0; o < this.list.length; o++) if (this.list[o].uri == e) return this.list[o].lock = i, i ? (this.list[o].sTimesample = n || t.getTime(), this.list[o].rTimesample = 0) : this.list[o].rTimesample = s || t.getTime(), !0;
                    return !1
                };
                for (var e = 0; e <= this.options.muDomain; e++) {
                    var i = !0, n = !1, s = 80;
                    this.uri.indexOf("https://") > -1 && (i = !1, s = 443);
                    var o = this.uri.replace(/(https?:)(\/)+/gi, "");
                    o.indexOf(":") > -1 && o.indexOf(":") < o.indexOf("/") && (n = !0, s = parseInt(o.substring(o.indexOf(":") + 1, o.indexOf("/")))), 1 === e && this.changePort && (this.uri = n ? (i ? "http://" : "https://") + o.replace(":" + s, ":" + ++s) : (i ? "http://" : "https://") + o.replace("/", ":" + ++s + "/")), this.connectionPooling.enQueue({
                        uri: this.uri.toString(),
                        lock: !1,
                        sTimesample: 0,
                        rTimesample: 0
                    })
                }
            }
        },
        connect: function (e, i) {
            var n, s, o = this.count++;
            this.connType = "login", this.id = this.fix + "_" + o, e[i || "callbackname"] = this.callbackName, this.connectOptions = t.extend(e, {ts: t.getTime()}), s = (n = this.connectionPooling.getConnect()).url + t.toURI(this.connectOptions), this._cacheElement[this.id] = this._createConnect(s, this.id, o, n)
        },
        kalive: function (e, i) {
            var n, s, o = this.count++;
            this.connType = "kalive", this.id = this.fix + "_" + o, e[i || "callbackname"] = this.callbackName, this.kaliveOptions = t.extend(this.kaliveOptions, e, {ts: t.getTime()}), s = (n = this.connectionPooling.getConnect()).url + t.toURI(this.kaliveOptions), this._cacheElement[this.id] = this._createConnect(s, this.id, o, n)
        },
        disconnectServer: function (e, i) {
            var n = this.connectionPooling.getConnect();
            return this.flashGoServer = n.url + t.toURI(!1 === i ? e : t.extend(e, {ts: t.getTime()})), this.flashGoServer
        },
        disconnect: function () {
            t.require(this.flashGoServer, function (e) {
                t(e.error ? e.target : e).remove()
            }), window[this.callbackName] = i
        },
        reconnect: function () {
            this.connect(this.connectOptions)
        },
        send: function (e, i) {
            var n = this, s = this.connectionPooling.getConnect(), o = this.mdyServerAddr(s.url) + t.toURI(e);
            return t.require(o + "#rnd", function (e) {
                n.connectionPooling.recover(s.uri, !1), i && i.call(n, e.error), t(e.error ? e.target : e).remove()
            }), !0
        },
        mdyServerAddr: function (t) {
            return t.replace(/\/flashgo/i, "/httpgo")
        },
        post: function (e, i) {
            var n = this, s = this.connectionPooling.getConnect();
            new t.POST(this.mdyServerAddr(s.url), e, function () {
                n.connectionPooling.recover(s.uri, !1), i && i.call(n, !0)
            })
        },
        _createConnect: function (e, i, n, s) {
            var o, a, r = this, h = document.head || nTalk("head")[0] || document.documentElement;
            return o = t({
                className: i,
                tag: "script",
                type: "text/javascript",
                async: "async",
                src: e,
                charset: "utf-8"
            }).appendTo(h), a = o.get(0).readyState ? "onreadystatechange" : "onload", o.get(0)[a] = o.get(0).onerror = function (e) {
                var n = o.get(0).readyState;
                e = t.Event.fixEvent(e), /^(loaded|complete|undefined)$/.test(n) && (r.connectionPooling.recover(s.uri, !1), "error" !== e.type ? setTimeout(function () {
                    r._connectComplete(e, i), o.remove()
                }, t.browser.msie ? 800 : 50) : (r._connectAbnormal(e, i), o.remove()))
            }, this._connectTimeID[i] = setTimeout(function () {
                o.first().remove(), r._connectTimeout("timeout", i)
            }, 1e3 * +this.options.timeout + 1e4), o.get(0)
        },
        _connectCallback: function (e, i) {
            i = Array.prototype.slice.call(i), t("." + e).remove(), this._cacheElement[e] ? (this._stopCallComplete(e, "callback"), this.options.onCallback.apply(self, [!0, i])) : this.options.onCallback.apply(self, [!1, i])
        },
        _connectComplete: function (t, e) {
            var i = Array.prototype.slice.call(arguments);
            this._cacheElement[e] && (this._stopCallComplete(e, "complete"), this.options.onComplete.apply(self, [this.connType].concat(i)))
        },
        _connectAbnormal: function (t, e) {
            var i = Array.prototype.slice.call(arguments);
            this._cacheElement[e] && (this._stopCallComplete(e, "abnormal"), this.options.onAbnormal.apply(self, [this.connType].concat(i)))
        },
        _connectTimeout: function (t, e) {
            var i = Array.prototype.slice.call(arguments);
            this._cacheElement[e] && (this._stopCallComplete(e, "timeout"), this.options.onTimeout.apply(self, [this.connType].concat(i)))
        },
        _stopCallComplete: function (e) {
            var n = this._cacheElement[e];
            n ? n.onload = n.onreadystatechange = n.onerror = i : t.Log("stop error id:" + e, 3), delete this._cacheElement[e], clearTimeout(this._connectTimeID[e]), delete this._connectTimeID[e]
        },
        _createScriptPCID: function (e) {
            return "guest" + [e ? "TEMP" + t.randomChar(4) : t.randomChar(8), t.randomChar(4), t.randomChar(4), t.randomChar(4), t.randomChar(12)].join("-")
        }
    }, t.mqttws = t.Class.create(), t.mqttws.prototype = {
        name: "public.mqttws",
        version: "2015.04.10",
        connect: null,
        subscriptions: [],
        messages: [],
        connected: !1,
        recCount: 0,
        waitTime: 500,
        _wsKeepaliveId: null,
        _options: {
            url: null,
            siteid: null,
            pcid: null,
            onCallback: null,
            loginMsg: null,
            timeout: 3,
            keepAliveInterval: 90
        },
        initialize: function (e) {
            var i = this;
            this.options = t.extend({}, i._options, e), this.options.pcid = (this.options.siteid + "_" + this.options.pcid.substring(5)).substring(0, 23), t.require({mqtt: "mosquitto.js?siteid=" + t.extParmas.siteid}, function (e) {
                i.connect = new t.Mosquitto, i.connect.onmessage = function (e, n, s, o) {
                    var a = t.JSON.parseJSON(n);
                    i.options.onCallback.apply(this, [!0, [a.method].concat(a.params)])
                }, i.connect.ondisconnect = function (t) {
                    null !== this._wsKeepaliveId && (clearInterval(this._wsKeepaliveId), this._wsKeepaliveId = null)
                }, i.connect.onconnect = function (t) {
                    0 === t ? (i.connect.subscribe("foo", 0), i.connect.publish("foo", i.options.loginMsg, 0, 0)) : i.reconnect()
                }, i.connect.onreconnect = function () {
                    i.reconnect()
                }, i.connect.connect(i.options.url, i.options.keepAliveInterval, i.options.pcid)
            })
        },
        reconnect: function () {
            var t = this;
            ++this.recCount < 3 ? this._waitTime = 500 : this._waitTime = 1e3 * +"034567890".charAt(Math.ceil(5 * Math.random())), setTimeout(function () {
                t.connect.connect(t.options.url, t.options.keepAliveInterval, t.options.pcid)
            }, this._waitTime)
        },
        disconnect: function () {
            this.connect.closeFlag = !0, this.connect.disconnect()
        },
        kalive: function (t) {
            var e = this;
            this._wsKeepaliveId || (this._wsKeepaliveId = setInterval(function () {
                e.connect.publish("foo", t, 0, !1)
            }, 1e3 * this.options.keepAliveInterval))
        }
    }, t.extend({
        htmlToElement: function (e) {
            var i, n;
            if (t.browser.msie) try {
                (i = new ActiveXObject("MSXml.DOMDocument")).loadXML(e), n = i.childNodes
            } catch (s) {
                (i = document.createElement("DIV")).innerHTML = e, n = i.childNodes
            } else (i = document.createElement("DIV")).innerHTML = e, n = i.childNodes;
            return n
        }, elementToObject: function (e) {
            var i, n, s = {};
            if (n = t.isArray(e) || e.talkVersion ? e[0] : e, s[n.tagName.toLowerCase()] = n.innerHTML || n.text, n.attributes) for (var o = 0; o < n.attributes.length; o++) (i = n.attributes[o].name) && (s[i] = n.attributes[o].value); else s.msg = n.textContent;
            return s
        }, jsonToxml: function (e) {
            var i, n = this, s = "";
            return "object" != typeof e ? e : (t.each(e, function (o, a) {
                if ("string" == typeof a && "text" == o) s = a; else if (t.isArray(e)) s += n.jsonToxml(a); else {
                    if (s += "<" + o, "object" == typeof a.attributes) {
                        for (var r in a.attributes) a.attributes.hasOwnProperty(r) && (s += " " + r + '="' + a.attributes[r] + '"');
                        delete a.attributes
                    }
                    i = n.jsonToxml(a), s += a && i ? ">" + i + "</" + o + ">" : "></" + o + ">"
                }
            }), s)
        }, utils: {
            options: {},
            handleLinks: function (e, i, n) {
                this.options = t.extend({}, this.options, i), e = e || "";
                var s;
                s = n ? this.linkPatternsP4 : this.linkPatterns;
                for (var o = 0; o < s.length; o++) e = e.replace(s[o][0], s[o][1]);
                return e
            },
            linkPatternsP4: [[/\[link\s+images=[\'\"]+([^\[\]\'\"]+)[\'\"]+\s*[^\[\]]*\]([^\[\]]+)\[\/link\]/gi, '<img width="324" height="146"  onload="globalChatHandle.scrollHistoryToBottom()" src="$1">'], [/\[link\s+submit=[\'\"]+([^\[\]\'\"]+)[\'\"]+\s*[^\[\]]*\]([^\[\]]+)\[\/link\]/gi, '<a class="specil" onclick="NTKF.chatManage.get().send(this.nextSibling.innerHTML, null, this.innerHTML);return false;" href="#">$2</a><span style="display:none;">$1</span>'], [/\[link\s+submit=([^\s\[\]\'\"]+)\s*[^\[\]]*\]([^\[\]]+)\[\/link\]/gi, '<a class="specil" onclick="NTKF.chatManage.get().send(this.nextSibling.innerHTML, null, this.innerHTML);return false;" href="#">$2</a><span style="display:none;">$1</span>'], [/\[link\](.*?)\[\/link\]/gi, '<a class="specil" onclick="NTKF.chatManage.get().send(this.innerHTML);return false;" >$1</a>'], [/<a class="specil" id="submitLink".*?>.*?<\/a>/gi, function (t) {
                return t.replace(/(http|ftp|https)/gi, "$1_")
            }], [/\[link\s+url=[\'\"]+([^\[\]\'\"]+)[\'\"]+\s*[^\[\]]*\]([^\[\]]+)\[\/link\]/gi, '<a href="$1" target="_blank">$2</a>'], [/\[link\s+url=[\'\"]+([^\[\]\'\"]+)[\'\"]+\s*[^\[\]]*\]([^\[\]]+)\[\/link\]/gi, '<a href="$1" target="_blank">$2</a>'], [/\[link\s+url=([^\s\[\]\'\"]+)\s*[^\[\]]*\]([^\[\]]+)\[\/link\]/gi, '<a href="$1" target="_blank">$2</a>'], [/\[link\s+p4=[\'\"]+([^\[\]\'\"]+)[\'\"]+\s+title=[\'\"]+([^\[\]\'\"]+)[\'\"]+\s*[^\[\]]*\]([^\[\]]+)\[\/link\]/gi, "<a href=\"#\" onclick=\"$client.Activity.openP4('$1','$2');return false;\" >$3</a>"], [/\[link\s+p4=([^\s\[\]\'\"]+)\s+title=([^\s\[\]\'\"]+)\s*[^\[\]]*\]([^\[\]]+)\[\/link\]/gi, "<a href=\"#\" onclick=\"$client.Activity.openP4('$1','$2');return false;\" >$3</a>"], [/\[link\s+p4=[\'\"]+([^\[\]\'\"]+)[\'\"]+\s*[^\[\]]*\]([^\[\]]+)\[\/link\]/gi, "<a href=\"#\" onclick=\"$client.Activity.openP4('$1','$2');return false;\" >$2</a>"], [/\[link\s+p4=([^\s\[\]\'\"]+)\s*[^\[\]]*\]([^\[\]]+)\[\/link\]/gi, "<a href=\"#\" onclick=\"$client.Activity.openP4('$1','$2');return false;\" >$2</a>"], [/(^|[^"'=])((http|https|ftp):\/\/([\w-]+\.)+[\w-]+([\w-.\/?=;!*%$]*)?([\w-&=;!*%$]*)?)/gi, '$1<a href="$2" target="_new">$2</a>'], [/(http|ftp|https)_/gi, "$1"]],
            linkPatterns: [[/\[link\s+reconnect=([^\s\[\]'"]+)\s*[^\[\]]*]([^\[\]]+)\[\/\s*link]/gi, '<a style="' + t.STYLE_BODY + 'display:inline-block;color:#005ffb;text-decoration:none;" href="javascript:void(0);" onclick="nTalk.chatManage.get(\'$1\').reconnect(this);return false;" >$2</a>'], [/\[link\s+message=([^\s\[\]'"]+)\s*[^\[\]]\s*source=([^\s\[\]'"]+)\s*[^\[\]]*]([^\[\]]+)\[\/\s*link]/gi, '<a style="' + t.STYLE_BODY + "display:inline-block;color:#005ffb;text-decoration:none;font-size:" + (t.browser.mobile ? 14 : 12) + 'px;" href="javascript:void(0);" onclick="nTalk.chatManage.get(\'$1\').switchUI(\'message\', $2);return false;" >$3</a>'], [/\[link\s+cancel=([^\s\[\]'"]+)\s+action=([^\s\[\]'"]+)\s*[^\[\]]*]([^\[\]]+)\[\/\s*link]/gi, '<a style="' + t.STYLE_BODY + 'display:inline-block;color:#005ffb;text-decoration:none;" href="javascript:void(0);" onclick="nTalk.chatManage.get(\'$1\').cancelUpload(\'$2\');return false;" >$3</a>'], [/\[link\s+resend=([^\s\[\]'"]+)\s+msgid=([^\s\[\]'"]+)\s*[^\[\]]*]([^\[\]]+)\[\/\s*link]/gi, '<a style="' + t.STYLE_BODY + 'display:inline-block;color:#005ffb;text-decoration:none;" href="javascript:void(0);" onclick="nTalk.chatManage.get(\'$1\').resend(\'$2\', this);return false;" >$3</a>'], [/\[link\s*manual=([^\s\[\]'"]+)](.*?)\[\/link]/gi, '<a style="' + t.STYLE_BODY + 'display:inline-block;color:#005ffb;text-decoration:none;" href="javascript:void(0);" onclick="nTalk.chatManage.get(\'$1\').switchServerType(true);return false;" >$2</a>'], [/\[link\s*artificial=([^\s\[\]'"]+)](.*?)\[\/link]/gi, '<a style="' + t.STYLE_BODY + 'display:inline-block;color:#005ffb;text-decoration:none;" href="javascript:void(0);" onclick="nTalk.chatManage.get(\'$1\').switchServerType(true);return false;" >$2</a>'], [/\[link\s*robot](.*?)\[\/link]/gi, '<a style="' + t.STYLE_BODY + 'display:inline-block;color:#005ffb;text-decoration:none;" href="javascript:void(0);" onclick="nTalk.chatManage.get().switchServerType(false, 2);return false;" >$1</a>'], [/\[link\s*robotindex=([^\s\[\]'"]+)\s*\](.*?)\[\/link]/gi, '<a style="' + t.STYLE_BODY + 'display:inline-block;color:#005ffb;text-decoration:none;" href="javascript:void(0);" onclick="nTalk.chatManage.get(\'{$settingid}\').send(\'$1\');return false;">$2</a>'], [/\[link\s*rightTag=true\s*url="(.*?)"\s*close=(.*?)\s*title="(.*?)"\s*\](.*?)\[\/link\]/gi, '<span style="' + t.STYLE_BODY + 'display:inline-block;color:#005ffb;text-decoration:none;cursor:pointer;" rightTag="true" src="$1" closeBtn="$2" title="$3">$4</span>'], [/\[xnlink](.*?)\[\/xnlink]/gi, '<span class="robotQuestion" style="' + t.STYLE_BODY + 'display:inline-block;color:#005ffb;text-decoration:none;cursor:pointer;" href="javascript:void(0);" >$1</span>'], [/\[xnflowlink\s*flowid=\"([0-9]+)\"\s](.*?)\[\/xnflowlink]/gi, '<span class="robotQuestion" data-flowid="$1" style="' + t.STYLE_BODY + 'display:inline-block;color:#005ffb;text-decoration:none;cursor:pointer;" href="javascript:void(0);" >$2</span>'], [/\[link\s*href=(.*?)](.*?)\[\/link]/gi, '<a style="' + t.STYLE_BODY + 'display:inline-block;color:#005ffb;text-decoration:none;cursor:pointer;" href="$1">$2</a>'], [/\[link\s*(.*?)?](.*?)\[\/link]/gi, '<a style="' + t.STYLE_BODY + 'display:inline-block;color:#005ffb;text-decoration:none;cursor:pointer;" href="javascript:void(0);"' + (t.browser.iOS ? ' href="$1" target="_blank"' : " onclick=\"window.open('$1')\"") + ">$2</a>"], [/\{\$(\w+)}/gi, function (e, i) {
                return t.utils.options[i] || ""
            }]]
        }, toHSL: function (e) {
            return t.isHex(e) ? t.rgb2HSL(t.hex2RGB(e)) : t.isRGB(e) ? t.rgb2HSL(e) : e
        }, isHex: function (t) {
            return "string" == typeof t && /^#?([0-9a-f]{3}|[0-9a-f]{6})$/gi.test(t)
        }, isRGB: function (e) {
            return t.isObject(e) && t.isDefined(e.r) && t.isDefined(e.g) && t.isDefined(e.b)
        }, isHSL: function (e) {
            return t.isObject(e) && t.isDefined(e.h) && t.isDefined(e.s) && t.isDefined(e.l)
        }, hex2RGB: function (t) {
            var e = t.toString().replace("#", ""), i = e.split("");
            return 3 == e.length ? {
                r: parseInt(i[0] + i[0], 16),
                g: parseInt(i[1] + i[1], 16),
                b: parseInt(i[2] + i[2], 16)
            } : 6 == e.length ? {
                r: parseInt(i[0] + i[1], 16),
                g: parseInt(i[2] + i[3], 16),
                b: parseInt(i[4] + i[5], 16)
            } : {r: 0, g: 0, b: 0}
        }, rgb2HSL: function (t) {
            var e, i, n, s, o, a, r, h, l, c = {};
            return e = t.r / 255, i = t.g / 255, n = t.b / 255, r = Math.min(e, i, n), h = Math.max(e, i, n), l = h - r, c.l = (h + r) / 2, 0 === l ? (c.h = 0, c.s = 0) : (c.l < .5 ? c.s = l / (h + r) : c.s = l / (2 - h - r), s = ((h - e) / 6 + l / 2) / l, o = ((h - i) / 6 + l / 2) / l, a = ((h - n) / 6 + l / 2) / l, e == h ? c.h = a - o : i == h ? c.h = 1 / 3 - a + s : n == h && (c.h = 2 / 3 - s + o), c.h < 0 && (c.h += 1), c.h > 1 && (c.h -= 1)), c
        }
    }), t.fn.extend({
        animate: function (e, i, n) {
            return t.each(this, function (s, o) {
                t.animate(o, e, i, n)
            })
        }, show: function (e, i) {
            return t.isFunction(e) && (i = e, e = 500), this.animate({
                visibility: "visible",
                opacity: {from: 0, to: 1}
            }, e || 500, i)
        }, hide: function (e, i) {
            return t.isFunction(e) && (i = e, e = 500), this.animate({opacity: {to: 0}}, e || 500, i)
        }, gradient: function (e, i, n) {
            var s, o;
            return e ? t.each(this, function (a, r) {
                if (t.browser.oldmsie && (s = /top|bottom/.test(e) ? 0 : 1, /right|bottom/.test(e) && (o = i, i = n, n = o)), t.browser.webkit) {
                    switch (e) {
                        case"top":
                            s = "0% 100%,0% 0%";
                            break;
                        case"right":
                            s = "0% 0%,100% 0%";
                            break;
                        case"bottom":
                            s = "0% 0%,0% 100%";
                            break;
                        case"left":
                            s = "100% 0%,0% 0%"
                    }
                    t(r).css("background-image", e ? "-webkit-gradient(linear," + s + ",color-stop(1, " + i + "),color-stop(0, " + n + "))" : "none")
                } else if (t.browser.gecko) t(r).css("background-image", e ? "-moz-linear-gradient(" + e + ", " + i + ", " + n + ")" : "none"); else if (t.browser.oldmsie) {
                    r.style.filter = r.currentStyle.filter.replace(/progid:DXImageTransform\.Microsoft\.gradient\((.*?)\)\s*/gi, "") + (e ? " progid:DXImageTransform.Microsoft.gradient(GradientType=" + s + ",startColorstr='" + i + "', endColorstr='" + n + "')" : "")
                } else t.browser.msie ? t(r).css("background-image", e ? "-ms-linear-gradient(" + e + ", " + i + ", " + n + ")" : "none") : t(r).css("background-image", e ? "linear-gradient(" + e + ", " + i + ", " + n + ")" : "none")
            }) : t.each(this, function (e, i) {
                t.browser.oldmsie ? t(i).css("filter", "none") : t(i).css("background-image", "none")
            })
        }
    }), t.extend({
        base64: {
            _strKey: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) {
                var i, n, s, o, a, r, h, l = t.base64, c = "", d = 0;
                for (e = l._utf8_encode(e || ""); d < e.length;) o = (i = e.charCodeAt(d++)) >> 2, a = (3 & i) << 4 | (n = e.charCodeAt(d++)) >> 4, r = (15 & n) << 2 | (s = e.charCodeAt(d++)) >> 6, h = 63 & s, isNaN(n) ? r = h = 64 : isNaN(s) && (h = 64), c = c + l._strKey.charAt(o) + l._strKey.charAt(a) + l._strKey.charAt(r) + l._strKey.charAt(h);
                return c
            }, decode: function (e) {
                var i, n, s, o, a, r, h = t.base64, l = "", c = 0;
                for (e = (e || "").replace(/[^A-Za-z0-9\+\/=]/g, ""); c < e.length;) i = h._strKey.indexOf(e.charAt(c++)) << 2 | (o = h._strKey.indexOf(e.charAt(c++))) >> 4, n = (15 & o) << 4 | (a = h._strKey.indexOf(e.charAt(c++))) >> 2, s = (3 & a) << 6 | (r = h._strKey.indexOf(e.charAt(c++))), l += String.fromCharCode(i), 64 != a && (l += String.fromCharCode(n)), 64 != r && (l += String.fromCharCode(s));
                return l = h._utf8_decode(l)
            }, _utf8_encode: function (t) {
                t = t.replace(/\r\n/g, "\n");
                for (var e = "", i = 0; i < t.length; i++) {
                    var n = t.charCodeAt(i);
                    n < 128 ? e += String.fromCharCode(n) : n > 127 && n < 2048 ? (e += String.fromCharCode(n >> 6 | 192), e += String.fromCharCode(63 & n | 128)) : (e += String.fromCharCode(n >> 12 | 224), e += String.fromCharCode(n >> 6 & 63 | 128), e += String.fromCharCode(63 & n | 128))
                }
                return e
            }, _utf8_decode: function (t) {
                for (var e, i, n, s = "", o = 0; o < t.length;) (e = t.charCodeAt(o)) < 128 ? (s += String.fromCharCode(e), o++) : e > 191 && e < 224 ? (i = t.charCodeAt(o + 1), s += String.fromCharCode((31 & e) << 6 | 63 & i), o += 2) : (i = t.charCodeAt(o + 1), n = t.charCodeAt(o + 2), s += String.fromCharCode((15 & e) << 12 | (63 & i) << 6 | 63 & n), o += 3);
                return s
            }
        }, FORM: {
            createInput: function (e, i, n) {
                for (var s, o, a, r, h = [], l = t.browser.mobile, c = t.extend({
                    id: "",
                    rowspan: 0,
                    style: ""
                }, i), d = '<span class="ntkf-text-red" style="' + t.STYLE_BODY + 'padding:2px 5px 2px 0;color:#f00;">' + (n || "") + "</span>", p = 0; p < e.length; p++) {
                    switch (s = t.extend({
                        titlewidth: "80px",
                        inputwidth: "auto",
                        input: {width: "90%", height: "auto"}
                    }, e[p]), r = l ? s.title : s.title + (s.title.length == t.enLength(s.title) ? ":" : "："), /zh_cn|zh_tw/.test(t.lang.language) && t.enLength(s.title) > 16 || s.multipart || /radio|checkbox/.test(s.type) && s.options.length > 2 ? (s.multipart = !0, h.push(l ? '<tr style="' + t.STYLE_BODY + '"><td style="' + t.STYLE_BODY + 'width:100%;"><div class="nt-mobile-form-title" style="' + t.STYLE_BODY + 'width:100%; line-height:14px; font-size:14px; font-weight:bold; text-align:center; color:#333333; margin: 15px 0px 20px 0px">' + r + "</div>" : ['<tr style="', t.STYLE_BODY, '">', '<td style="', t.STYLE_BODY, 'vertical-align:top;line-height:28px;color:#333;" colspan="2">', '<div style="', t.STYLE_BODY, 'margin:5px 10px 5px 10px;color:#5a5a5a;">', r, !0 === s.required ? d : "", "</div>", "</td>", "</tr>", '<tr style="' + t.STYLE_BODY + '"><td style="', t.STYLE_BODY, 'padding:0 5px 0 0;text-align:right;vertical-align:top;line-height:28px;color:#333;"></td>', '<td style="' + t.STYLE_BODY + "line-height:28px;width:" + s.inputwidth + ';">'].join(""))) : h.push('<tr style="' + t.STYLE_BODY + '">' + (l ? "" : '<td style="' + t.STYLE_BODY + "padding:0 5px 0 0;text-align:right;vertical-align:top;line-height:28px;color:#333;width:" + ("kf_10093" === t.global.siteid ? "25%;" : s.titlewidth) + ';"><div style="' + t.STYLE_BODY + 'margin:4px 0 0 0;text-align:right;color:#5a5a5a;">' + (!0 === s.required ? d : "") + r + "</div></td>") + '<td style="' + t.STYLE_BODY + "line-height:28px;width:" + (l ? "100%" : s.inputwidth) + ';">'), s.type) {
                        case"select":
                            h.push('<select data-index="' + p + '" name="' + s.name + '" style="' + t.STYLE_BODY + "border:1px solid #ccc;height:24px;color:#333;margin:0 0 4px;line-height:20px;width:" + (l ? "99%" : s.input.width) + ';">'), h.push('<option value="" style="' + t.STYLE_BODY + 'color:#ccc;">' + s.defaultText + "</option>");
                            for (var u = 0; u < s.options.length; u++) o = "string" == typeof (o = s.options[u]) ? {
                                text: o,
                                value: o
                            } : o, h.push('<option value="' + o.value + '" style="' + t.STYLE_BODY + 'color:#333;">' + o.text + "</option>");
                            h.push("</select>");
                            break;
                        case"radio":
                            h.push('<ul style="' + t.STYLE_BODY + 'list-style:none;">');
                            for (var m, g = 0; g < s.options.length; g++) o = "string" == typeof (o = s.options[g]) ? {
                                text: o,
                                value: o
                            } : o, m = s.name + "_" + g, a = s.defaultText == o.value ? " checked" : "", h.push('<li class="form-item" style="' + t.STYLE_BODY + 'list-style:none;padding:0 2px 0 0;color:#000;float:left;"><input type="radio" name="' + s.name + '"id="' + m + '" value="' + o.value + '" _custom_text="' + o.text + '" style="' + t.STYLE_BODY + 'color:#333;outline:none;-webkit-appearance:radio"' + a + ' /><label for="' + m + '" style="' + t.STYLE_BODY + 'display:inline;color:#000;">' + o.text + "</label></li>");
                            h.push('<li style="' + t.STYLE_BODY + 'list-style:none;clear:both;width:0;height:0;"></li>'), h.push("</ul>");
                            break;
                        case"checkbox":
                            h.push('<ul style="' + t.STYLE_BODY + 'list-style:none;">');
                            for (var f, v = 0; v < s.options.length; v++) o = "string" == typeof (o = s.options[v]) ? {
                                text: o,
                                value: o
                            } : o, f = s.name + "_" + v, a = s.defaultText == o.value ? " checked" : "", h.push('<li class="form-item" style="' + t.STYLE_BODY + 'list-style:none;padding:0 2px 0 0;float:left;"><input type="checkbox" name="' + s.name + '" id="' + f + '" value="' + o.value + '" _custom_text="' + o.text + '" style="' + t.STYLE_BODY + 'color:#333;"' + a + ' /><label for="' + f + '" style="' + t.STYLE_BODY + 'display:inline;color:#000;">' + o.text + "</label></li>");
                            h.push('<li style="' + t.STYLE_BODY + 'list-style:none;clear:both;width:0;height:0;"></li>'), h.push("</ul>");
                            break;
                        case"textarea":
                            if ("kf_9051" == t.global.siteid) {
                                if (s.defaultText) {
                                    t.browser.html5 = !0;
                                    var x = s.defaultText.substr(20, 1);
                                    s.defaultText = s.defaultText.replace(x, x + "\r"), h.push('<textarea data-index="' + p + '" name="' + s.name + '" style="' + t.STYLE_BODY + "border:1px solid #ccc;color:#ccc;width:" + (l ? "99%" : s.input.width) + ";height:" + s.input.height + ';"' + (t.browser.html5 ? ' placeholder="' + s.defaultText + '">' : ">" + s.defaultText) + "</textarea>")
                                }
                            } else h.push('<textarea data-index="' + p + '" name="' + s.name + '" style="' + t.STYLE_BODY + "border:1px solid #ccc;color:#ccc;width:" + (l ? "99%" : s.input.width) + ";height:" + s.input.height + ';"' + (t.browser.html5 ? ' placeholder="' + s.defaultText + '">' : ">" + s.defaultText) + "</textarea>");
                            break;
                        default:
                            h.push('<input data-index="' + p + '" type="text" name="' + s.name + '"' + (t.browser.html5 ? ' placeholder="' + s.defaultText + '" value=""' : ' value="' + s.defaultText + '"') + ' maxlength="32" style="' + t.STYLE_BODY + "border:1px solid #ccc;height:24px;width:" + (l ? "99%" : s.input.width) + ';margin:0 0 4px;color:#ccc;"'), "phone" == s.verification && h.push(" onblur=\"this.value=this.value.replace(/[^0-9-]+/, '');\" onkeyup=\"var keyCode=(event || window.event).keyCode; if( !/16|17|35|36|37|38|39|40/i.test(keyCode) ){this.value=this.value.replace(/[^0-9-]+/, '');}\""), h.push(" />")
                    }
                    s.messageid && (h.push('<div style="' + t.STYLE_BODY + 'display:none;color:#EF7208;" class="form-info ' + s.messageid + '">'), h.push('<div style="' + t.STYLE_BODY + "margin:2px;width:15px;height:15px;float:left;background:transparent url(" + t.sourceURI + '/images/chaticon.png) no-repeat -160px -39px;"></div>'), h.push('<div style="' + t.STYLE_BODY + 'color:#EF7208;float:left;" class="chat-view-info"></div>'), h.push('<div style="' + t.STYLE_BODY + 'clear:both;width:0;height:0;"></div>'), h.push("</div>")), h.push("</td>"), c.style && 0 === p && h.push('<td style="' + t.STYLE_BODY + c.style + '" id="' + c.id + '" rowspan="' + c.rowspan + '"></td></tr>')
                }
                return h.join("")
            }, bindFormEvent: function (e, i) {
                var n = function () {
                    var i = t(this).css({color: "#333", "border-color": t.browser.mobile ? "#0079fe" : "#666"}),
                        n = i.attr("data-index") || 0;
                    e[n].defaultText == i.val() && i.val("")
                }, s = function () {
                    var i = t(this).css("border-color", "#ccc"), n = i.attr("data-index") || 0, s = e[n].defaultText;
                    if ("kf_9051" == t.global.siteid) {
                        var o = s.substr(20, 1);
                        s = s.replace(o, o + "\r")
                    }
                    "" === i.val() && i.val(s), "" !== i.val() && i.val() != s || i.css("color", "#ccc")
                };
                t(i).find("input[type=text]").bind("focus", n).bind("blur", s), t(i).find("textarea").bind("focus", n).bind("blur", s)
            }, verificationForm: function (e, i, n, s) {
                for (var o, a, r, h, l, c = [], d = !1, p = new RegExp("\\d{6,}", "i"), u = new RegExp("^[a-zA-Z0-9\\._-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$", "i"), m = this, g = 0; g < e.length; g++) {
                    switch (e[g].type) {
                        case"checkbox":
                            l = [], o = t(n).find("input[name=" + e[g].name + "]"), a = t(n).find("input[name=" + e[g].name + "][checked]");
                            for (var f = 0; f < a.length; f++) l.push({
                                value: a.get(f).value,
                                text: t(a.get(f)).attr("_custom_text")
                            });
                            break;
                        case"radio":
                            l = {
                                value: "",
                                text: ""
                            }, o = t(n).find("input[name=" + e[g].name + "]"), t(n).find("input[name=" + e[g].name + "][checked]").each(function (e, i) {
                                i.checked && (l = {value: t(i).val() || "", text: t(i).attr("_custom_text")})
                            });
                            break;
                        case"select":
                            o = t(n).find("select[name=" + e[g].name + "]"), l = t("option[selected]", o).val() || "", l = e[g].defaultText && l == e[g].defaultText ? "" : l;
                            break;
                        case"textarea":
                            o = t(n).find("textarea[name=" + e[g].name + "]"), e[g].defaultText && e[g].defaultText == o.val() ? (l = "", o.val("")) : l = o.val().replace(/(\")|(\')|((^\s*)|(\s*$))/g, "");
                            break;
                        default:
                            o = t(n).find("input[name=" + e[g].name + "]"), e[g].defaultText && e[g].defaultText == o.val() ? (l = "", o.val("")) : l = o.val().replace(/(^\s*)|(\s*$)/g, "")
                    }
                    r = "string" == typeof l ? "" === l || !l.length : t.isArray(l) ? 0 === l.length : "" === l.value, h = !(!e[g].messageid || !e[g].message);
                    var v = t(n).find("." + e[g].messageid), x = t(n).find("." + e[g].messageid + " .chat-view-info");
                    e[g].required && r ? (m.showError(h, e[g].message[0], x, v, o, e[g].type), d = !0) : ("phone" != e[g].verification || r || p.test(l)) && ("email" != e[g].verification || r || u.test(l)) ? e[g].min && !r && t.enLength(l) < e[g].min ? (m.showError(h, e[g].message[1], x, v, o), d = !0) : e[g].max && !r && t.enLength(l) > e[g].max ? (m.showError(h, e[g].message[2], x, v, o), d = !0) : (h ? v.hide(function () {
                        t(this).display()
                    }) : /radio|checkbox/.test(e[g].type) ? o.parent().css("color", "#333") : o.css("border-color", "#DBD8D1"), r || c.push({
                        name: e[g].name,
                        title: e[g].title,
                        value: l
                    })) : (m.showError(h, e[g].message[1], x, v, o), d = !0)
                }
                d ? "function" == typeof s && s() : (t.Log("form submit complete, failCallback is null", 3), "function" == typeof i ? i(c) : t.Log("form submit complete, callback is null", 3))
            }, showError: function (e, i, n, s, o, a) {
                var r = this;
                if (e && i) if (t.browser.mobile) {
                    this.messageErrorToast && (this.messageErrorToast.remove(), this.messageErrorToast = null, this.messageErrorTimeout && clearTimeout(this.messageErrorTimeout));
                    var h = i.length > 10 ? 300 : 250;
                    this.messageErrorToast = new t.Toast('<div id="#message_error" style="position: relative;width: ' + (h - 50) + 'px; height:30px; line-height: 30px;z-index:100; color: #FFF; top: 30px; left: 25px; text-align:center;font-weight:bold">' + i + "</div>", {
                        width: h,
                        height: 90
                    }), this.messageErrorTimeout = setTimeout(function () {
                        r.messageErrorToast.remove(), r.messageErrorToast = null, o.get(0).focus()
                    }, 2e3)
                } else n.html(i), s.display(1).show(), o.get(0).focus(); else /radio|checkbox/.test(a) ? o.parent().css("color", "#f00") : o.css("border-color", "#f00").get(0).focus()
            }
        }
    }), t.Transfer = t.Class.create(), t.Transfer.prototype = {
        name: "Transfer",
        button: null,
        element: null,
        form: null,
        iframe: null,
        proxy: null,
        options: null,
        debug: !0,
        fkey: "",
        initialize: function (e, n) {
            this.button = n;
            var s = t.randomChar(16);
            if (this.options = t.extend({
                onError: i,
                onChange: i,
                callback: i,
                name: s,
                curName: "",
                compSize: 512e3,
                params: {},
                target: "iframe-transfer-" + s
            }, e), this.options.server) {
                this.proxy = t({
                    tag: "IFRAME",
                    name: "proxy-" + s,
                    src: this.options.server.substring(0, this.options.server.lastIndexOf("/")) + "/proxy.html?t=" + t.getTime(),
                    style: t.STYLE_NBODY + "width:0px;height:0px;display:none;"
                }).appendTo(t(this.button)).get(0).contentWindow;
                var o = this, a = Math.max(20, this.button.width(), parseFloat(this.button.css("width"))),
                    r = Math.max(20, this.button.height(), parseFloat(this.button.css("height"))),
                    h = t.STYLE_BODY + "width:" + a + "px;height:" + r + "px;overflow:hidden;";
                this.completed = function (t) {
                    var e = this.readyState;
                    /^(?:loaded|complete|undefined)$/.test(e) && (o.iframe.removeEvent("readystatechange", o.completed).removeEvent("load", o.completed), o.transferComplete(t, o.fkey))
                }, this.form = t({
                    tag: "FORM",
                    action: "",
                    method: "POST",
                    target: this.options.target,
                    enctype: "multipart/form-data",
                    style: h
                }).appendTo(this.button, !0), this.iframe = t({
                    tag: "IFRAME",
                    name: this.options.target,
                    src: "about:blank",
                    style: h + "width:0;height:0;display:none;"
                }).appendTo(this.button, !0), this.element = t({
                    tag: "INPUT",
                    type: "file",
                    name: this.options.name,
                    accept: this.options.accept || "*",
                    style: h,
                    title: this.button.attr("title") || ""
                }).appendTo(this.form, !0).css("opacity", 0), this.element.click(function () {
                    "" !== this.value && o.form.get(0).reset(), o.iframe.bind("readystatechange", o.completed).bind("load", o.completed), o.fkey = t.randomChar(16)
                }).bind("change", function (t) {
                    var e = {};
                    this.files ? (e.name = this.files[0].name, e.size = this.files[0].size) : (e.name = this.value.substring(this.value.lastIndexOf("\\") + 1), e.size = ""), e.name && (o.options.onChange(e), o.fileChange(t, this.files || this.value))
                })
            } else t.Log("server is null", 3)
        },
        transferComplete: function (e, i) {
            var n = this;
            i && (this.debug && t.Log("$.upload.transferComplete(event, " + i + ")"), t.jsonp(this.options.server + "?" + t.toURI(t.extend({
                getaction: 1,
                fkey: i
            }, this.options.params)) + "#rnd", function (e) {
                n.debug && t.Log("get transfer file info:" + t.JSON.toJSONString(e), 1), e.name = n.options.curName || n.options.name || "", n.options.callback(e)
            }))
        },
        fileChange: function (e, i) {
            var n = this;
            this.isMobileCompTransf(i, function (s) {
                s ? t.browser.oldAndroid ? t.require("jpeg_encoder_basic.js?siteid=" + n.options.params.siteid, function (t) {
                    n.mobileCompTransf(e, i)
                }) : t.browser.oldIOS ? t.require("megapix-image.js?siteid=" + n.options.params.siteid, function (t) {
                    n.mobileCompTransf(e, i)
                }) : n.mobileCompTransf(e, i) : n.commonTransf(e, i)
            })
        },
        isMobileCompTransf: function (e, i) {
            if (t.browser.mobile && (window.URL || window.webkitURL) && document.createElement("canvas")) if (e[0].name.toLowerCase().indexOf("jpg") > -1) i(!0); else if (window.FileReader && window.DataView) {
                var n = new FileReader;
                n.onload = function (t) {
                    var e = new DataView(t.target.result);
                    i(255 == e.getUint8(0) && 216 == e.getUint8(1) ? !0 : !1)
                }, n.readAsArrayBuffer(e[0])
            } else i(!1); else i(!1)
        },
        commonTransf: function (e, i) {
            var n, s, o = "uploadfile" == this.options.params.action;
            try {
                n = o ? this.proxy.fileOptions.fileMaxSize : this.proxy.fileOptions.imageMaxSize, s = o ? this.proxy.fileOptions.fileExt : this.proxy.fileOptions.imageExt
            } catch (l) {
                n = null, s = null
            }
            if ("string" == typeof i) this.debug && t.Log("Name: " + i, 2); else for (var a = 0; a < i.length; a++) {
                var r, h = i[a];
                if (r = h.name.indexOf(".") > -1 ? h.name.match(/\.[^\.]+$/)[0].replace(".", "").toLowerCase() : "", this.options.maxSize && h.size > this.options.maxSize || n && h.size > n) return void this.options.onError({
                    type: 9,
                    name: h.name,
                    size: h.size,
                    etype: "SIZE",
                    maxSize: this.options.maxSize || n
                });
                if ("*" != this.options.accept && this.options.accept || s) {
                    if (this.options.accept && this.options.accept.indexOf("/*") > -1) {
                        if (!new RegExp(this.options.accept.replace(/\//, "\\/"), "gi").test(h.type)) return t.Log("accept:" + this.options.accept + ", type:" + h.type, 2), void this.options.onError({
                            type: 9,
                            name: h.name,
                            size: h.size,
                            etype: "TYPE"
                        })
                    } else {
                        if (this.options.accept && this.options.accept.indexOf(h.type) <= -1) return t.Log("accept:" + this.options.accept + ", type:" + h.type, 2), void this.options.onError({
                            type: 9,
                            name: h.name,
                            size: h.size,
                            etype: "TYPE"
                        });
                        if (s && s.indexOf(r) > -1) continue;
                        if (s && -1 == s.indexOf(r)) return void this.options.onError({
                            type: 9,
                            name: h.name,
                            size: h.size,
                            ext: s,
                            etype: "TYPE"
                        })
                    }
                    this.options.curName = h.name, this.debug && t.Log("Name: " + this.options.curName)
                }
            }
            this.debug && t.Log("$.upload.fileChange()"), this.form.attr("action", this.options.server + "?" + t.toURI(t.extend({
                fkey: this.fkey,
                rnd: t.getTime()
            }, this.options.params))), t.browser.mobile && this.options.callback({
                status: "startUpload",
                oldfile: i[0].name
            }), this.form.get(0).submit()
        },
        mobileCompTransf: function (e, i) {
            var n = this;
            this.options.callback({status: "startCompress", oldfile: i[0].name}), this.fkey = t.getTime();
            new t.ImageOrientation(i[0], function (e, s) {
                new t.CompressImg(i[0], {orientation: s}, function (e, s) {
                    new t.POST(n.options.server + "?action=uploadimage", t.extend({
                        base64: s,
                        fname: t.getTime() + ".png",
                        fkey: n.fkey,
                        rnd: t.getTime()
                    }, n.options.params), function (t) {
                        n.transferComplete(t, n.fkey)
                    }), n.options.callback({status: "startUpload", oldfile: i[0].name, compress: !0})
                })
            })
        },
        base64Transf: function (e) {
            var i = this;
            this.fkey = t.getTime(), new t.POST(this.options.server + "?action=uploadimage", t.extend({
                base64: e,
                fname: t.getTime() + ".png",
                fkey: this.fkey,
                rnd: t.getTime()
            }, this.options.params), function (t) {
                i.transferComplete(t, i.fkey)
            })
        }
    }, t.CompressImg = t.Class.create(), t.CompressImg.prototype = {
        ctx: null,
        canvas: null,
        url: null,
        image: null,
        blob: null,
        compBlob: null,
        dataurl: null,
        resize: {width: null, height: null},
        options: {width: null, height: null, quality: .7},
        initialize: function (e, i, n) {
            var s = this;
            this.url = window.URL || window.webkitURL, this.canvas = document.createElement("canvas"), this.blob = "string" == typeof e ? e : this.url.createObjectURL(e), this.options = t.extend(i, this.options), this.image = new Image, this.image.onerror = function () {
                t.Log("加载图片失败！")
            }, this.image.onload = function (e) {
                s.getCompImage(), n(e, s.dataurl);
                var i = t.browser.oldIOS ? 1e4 : 0;
                setTimeout(function () {
                    for (var t in s) s.hasOwnProperty(t) && (s[t] = null)
                }, i)
            }, this.image.crossOrigin = "*", this.image.src = s.blob
        },
        drawOldIOSCanvas: function () {
            var t = new MegaPixImage(this.image);
            "5678".indexOf(this.options.orientation) > -1 ? t.render(this.canvas, {
                width: this.canvas.height,
                height: this.canvas.width,
                orientation: this.options.orientation
            }) : t.render(this.canvas, {
                width: this.canvas.width,
                height: this.canvas.height,
                orientation: this.options.orientation
            })
        },
        drawCanvas: function () {
            switch (this.options.orientation) {
                case 3:
                    this.ctx.rotate(180 * Math.PI / 180), this.ctx.drawImage(this.image, -this.resize.width, -this.resize.height, this.resize.width, this.resize.height);
                    break;
                case 6:
                    this.ctx.rotate(90 * Math.PI / 180), this.ctx.drawImage(this.image, 0, -this.resize.width, this.resize.height, this.resize.width);
                    break;
                case 8:
                    this.ctx.rotate(270 * Math.PI / 180), this.ctx.drawImage(this.image, -this.resize.height, 0, this.resize.height, this.resize.width);
                    break;
                case 2:
                    this.ctx.translate(resize.width, 0), this.ctx.scale(-1, 1), this.ctx.drawImage(this.image, 0, 0, this.resize.width, this.resize.height);
                    break;
                case 4:
                    this.ctx.translate(resize.width, 0), this.ctx.scale(-1, 1), this.ctx.rotate(180 * Math.PI / 180), this.ctx.drawImage(this.image, -this.resize.width, -this.resize.height, this.resize.width, this.resize.height);
                    break;
                case 5:
                    this.ctx.translate(resize.width, 0), this.ctx.scale(-1, 1), this.ctx.rotate(90 * Math.PI / 180), this.ctx.drawImage(this.image, 0, -this.resize.width, this.resize.height, this.resize.width);
                    break;
                case 7:
                    this.ctx.translate(resize.width, 0), this.ctx.scale(-1, 1), this.ctx.rotate(270 * Math.PI / 180), this.ctx.drawImage(this.image, -this.resize.height, 0, this.resize.height, this.resize.width);
                    break;
                default:
                    this.ctx.drawImage(this.image, 0, 0, this.resize.width, this.resize.height)
            }
        },
        getCompImage: function () {
            var e = this;
            if (this.ctx = this.canvas.getContext("2d"), this.resize = this._getResize(), this.canvas.width = this.resize.width, this.canvas.height = this.resize.height, this.ctx.fillStyle = "#fff", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), t.browser.oldIOS ? this.drawOldIOSCanvas() : this.drawCanvas(), t.browser.oldAndroid) {
                var i = new JPEGEncoder, n = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
                this.dataurl = i.encode(n, 100 * this.options.quality)
            } else this.dataurl = this.canvas.toDataURL("image/jpeg", this.options.quality);
            this.url.revokeObjectURL(e.blob)
        },
        _getResize: function () {
            var t = this, e = this.image, i = this.options.width, n = this.options.height,
                s = {width: e.width, height: e.height};
            "5678".indexOf(t.options.orientation) > -1 && (s.width = e.height, s.height = e.width);
            var o = s.width / s.height;
            for (i && n ? o >= i / n ? s.width > i && (s.width = i, s.height = Math.ceil(i / o)) : s.height > n && (s.height = n, s.width = Math.ceil(n * o)) : i ? i < s.width && (s.width = i, s.height = Math.ceil(i / o)) : n && n < s.height && (s.width = Math.ceil(n * o), s.height = n); s.width >= 3264 || s.height >= 2448;) s.width *= .8, s.height *= .8;
            return s
        }
    }, t.ImageOrientation = t.Class.create(), t.ImageOrientation.prototype = {
        initialize: function (e, i) {
            if (!window.FileReader || !window.DataView) return 1;
            var n = this, s = new FileReader;
            s.onload = function (e) {
                i(t.Event.fixEvent(e), n._readImageOrientation(e.target.result))
            }, s.readAsArrayBuffer(e)
        }, _readImageOrientation: function (t) {
            var e = new DataView(t);
            if (255 != e.getUint8(0) || 216 != e.getUint8(1)) return 1;
            for (var i = 2, n = t.byteLength; i < n;) {
                if (255 != e.getUint8(i)) return 1;
                if (225 == e.getUint8(i + 1)) return this._getOrientationFromExif(e, i + 4, e.getUint16(i + 2) - 2);
                i += 2 + e.getUint16(i + 2)
            }
        }, _getOrientationFromExif: function (t, e) {
            if ("Exif" != this._getStringFromDB(t, e, 4)) return 1;
            var i, n = e + 6;
            if (18761 == t.getUint16(n)) i = !1; else {
                if (19789 != t.getUint16(n)) return 1;
                i = !0
            }
            if (42 != t.getUint16(n + 2, !i)) return 1;
            var s = t.getUint32(n + 4, !i);
            return s < 8 ? 1 : this._getOrientationFromTag(t, n, n + s, i)
        }, _getOrientationFromTag: function (t, e, i, n) {
            var s, o, a = t.getUint16(i, !n);
            for (o = 0; o < a; o++) if (s = i + 12 * o + 2, 274 == t.getUint16(s, !n)) return this._getOrientationValue(t, s, e, i, n);
            return 1
        }, _getOrientationValue: function (t, e, i, n, s) {
            var o, a, r, h = t.getUint16(e + 2, !s), l = t.getUint32(e + 4, !s), c = t.getUint32(e + 8, !s) + i;
            switch (h) {
                case 3:
                    if (1 == l) return t.getUint16(e + 8, !s);
                    for (o = l > 2 ? c : e + 8, a = [], r = 0; r < l; r++) a[r] = t.getUint16(o + 2 * r, !s);
                    return a
            }
        }, _getStringFromDB: function (t, e, i) {
            var s = "";
            for (n = e; n < e + i; n++) s += String.fromCharCode(t.getUint8(n));
            return s
        }
    }, t.DialogChat = new t.Class.create, t.DialogChat.prototype = {
        contains: null,
        background: null,
        iframe: null,
        display: !1,
        selector: "",
        def: {close: !1, parent: window, margin: 10, border: 0, style: {height: "auto"}, resizeFunc: null},
        options: null,
        _funcResize: i,
        initialize: function (e, i) {
            var n = this;
            this.options = t.extend({}, this.def, i), this.id = t.randomChar(), this.selector = ".dialog-container-" + this.id, this._create(), this._style(this.options.style), this.display = !0, this.options.close && (e += '<div class="dialog-button-close" style="' + t.STYLE_NBODY + 'font-size:14px;position:absolute;right:10px;top:10px;width:20px;height:20px;line-height:20px;text-align:center;cursor:pointer;">x</div>'), this.container.html(e), setTimeout(function () {
                n.options.top ? n.container.css({top: n.options.top + "px"}) : n.container.css({top: Math.max(0, (t(n.options.parent).height() - Math.max(n.container.height(), 200)) / 2) + "px"})
            }, 5), this._funcResize = function () {
                n.resize()
            }, this.options.parent == window && t(window).addEvent("resize", this._funcResize), this.container.find(".dialog-button-close").click(function () {
                n.close()
            })
        },
        close: function () {
            var e = this;
            this.options.parent == window && t(window).removeEvent("resize", this._funcResize), t(this.selector).hide(function () {
                t(".dialog-iframe-" + e.id + ",.dialog-background-" + e.id).remove(), t(e.selector).remove(), e.display = !1
            })
        },
        resize: function (e, i) {
            e = e || t(this.options.parent).width(), i = i || t(this.options.parent).height(), t(".dialog-iframe-" + this.id + ",.dialog-background-" + this.id).css({
                width: e + "px",
                height: i + "px"
            });
            var n = "auto" === this.options.style.height ? "auto" : i - 2 * this.options.margin - 2 * this.options.border;
            this.container.css({
                width: e - 2 * this.options.margin - 2 * this.options.border + "px",
                height: "auto" == n ? "auto" : n + "px",
                "max-width": e + "px",
                "max-height": i - 40 + "px"
            }), this.container.css("top", Math.max(0, (i - Math.max("auto" == n ? this.container.height() : n, 200)) / 2) + "px"), this.options.resizeFunc && this.options.resizeFunc.call()
        },
        _create: function () {
            var e = this.options.parent == window ? document.body : this.options.parent,
                i = this.options.parent == window ? "fixed" : "absolute";
            this.iframe = t({
                tag: "IFRAME",
                className: "dialog-iframe-" + this.id,
                style: t.STYLE_NBODY + "position:" + i + ";display:none;left:0;top:0;margin:0;padding:0;border:0;width:100%;z-index:8888;"
            }).appendTo(e), this.background = t({
                tag: "div",
                className: "dialog-background-" + this.id,
                style: t.STYLE_NBODY + "position:" + i + ";left:0;top:0;margin:0;padding:0;border:0;width:100%;background-color:#000;z-index:8888;"
            }).appendTo(e);
            var n = t.browser.mobile ? 9e3 : 2147483647;
            this.container = t({
                tag: "div",
                className: "dialog-container-" + this.id,
                style: t.STYLE_BODY + "position:" + i + ";left:0;top:0;margin:0;min-height:" + (this.options.minHeight ? this.options.minHeight : 200) + "px;border-radius:0px;z-index:" + n + ";background:#fff;overflow-x:hidden;overflow-y:auto;"
            }).appendTo(e), this.background.bind("touchstart", function (e) {
                var i = t.Event.fixEvent(e);
                i.stopPropagation(), i.preventDefault()
            }).bind("touchend", function (e) {
                var i = t.Event.fixEvent(e);
                i.stopPropagation(), i.preventDefault()
            })
        },
        _style: function (e) {
            var i = t(this.options.parent).width(), n = t(this.options.parent).height();
            t(".dialog-iframe-" + this.id + ",.dialog-background-" + this.id).css({
                width: i + "px",
                height: t(this.options.parent).height() + "px"
            }), this.background.css({opacity: .6});
            var s = (this.options.margin + "").split(" ");
            1 == s.length && s.push(this.options.margin), this.container.css(e).css({
                left: s[0] + "px",
                top: s[1] + "px",
                width: i - 2 * s[0] - 2 * this.options.border + "px",
                height: "auto" === this.options.style.height ? "auto" : n - 2 * s[1] - 2 * this.options.border + "px"
            })
        }
    }, t.Toast = new t.Class.create, t.Toast.prototype = {
        id: null, container: null, toast: null, options: {}, initialize: function (e, i) {
            var n = this;
            this.id = t.randomChar(), this.options = t.extend(this.options, i), this.toastOpacity = t({
                tag: "div",
                className: "toast-opacity-" + this.id,
                style: t.STYLE_BODY + "position:absolute;z-index:1000000000;width:" + this.options.width + "px;height:" + this.options.height + "px;left:" + (t(window).width() - this.options.width) / 2 + "px;top:" + (t(window).scrollTop() + (t(window).height() - this.options.height - 100) / 2) + "px;background-color:#000;opacity:0.5;border-radius:5px;font-size:16px;color:white;text-align:center;line-height:" + this.options.height + "px"
            }), this.toast = t({
                tag: "div",
                className: "toast-" + this.id,
                style: t.STYLE_BODY + "position:absolute;z-index:1000000001;width:" + this.options.width + "px;height:" + this.options.height + "px;left:" + (t(window).width() - this.options.width) / 2 + "px;top:" + (t(window).height() - this.options.height - 100) / 2 + "px;border-radius:5px;font-size:16px;color:white;text-align:center;line-height:" + this.options.height + "px"
            }), this.toast.html(e), this._create(), this._funcResize = function () {
                n.resize()
            }, this._funRemove = function () {
                n.remove()
            }, t(window).addEvent("resize", this._funcResize)
        }, _create: function () {
            this.toastOpacity.appendTo(document.body), this.toast.appendTo(document.body)
        }, change: function (e) {
            t(".toast-" + this.id).html(e)
        }, resize: function () {
            var e = t(window).width(), i = t(window).height(),
                n = (e - this.options.width) / 2 > 0 ? (e - this.options.width) / 2 : 0,
                s = (i - this.options.height - 100) / 2 > 0 ? t(window).scrollTop() + (i - this.options.height - 100) / 2 : t(window).scrollTop();
            t(".toast-opacity-" + this.id).css({
                "margin-left": n + "px",
                "margin-top": s + "px",
                "max-width": e + "px",
                "max-height": i + "px"
            }), t(".toast-" + this.id).css({
                "margin-left": n + "px",
                "margin-top": -this.options.height + "px",
                "max-width": e + "px",
                "max-height": i + "px"
            })
        }, remove: function () {
            t(".toast-opacity-" + this.id).remove(), t(".toast-" + this.id).remove()
        }
    }, t.GifTimer = t.Class.create(), t.GifTimer.prototype = {
        id: null,
        inter: null,
        timeout: null,
        options: {inTimeFunc: null, outTimeFunc: null, doTime: null, allTime: null},
        initialize: function (e) {
            var i = this;
            this.options = t.extend(this.options, e), this.inter = setInterval(function () {
                i.options.inTimeFunc.call(i)
            }, this.options.doTime), this.timeout = setTimeout(function () {
                clearInterval(i.inter), i.options.outTimeFunc.call(i)
            }, this.options.allTime)
        },
        remove: function () {
            t.Log("giftimer remove"), clearInterval(this.inter), clearTimeout(this.timeout), this.inter = null, this.timeout = null
        }
    }, t.Music = t.Class.create(), t.Music.prototype = {
        msgid: null,
        url: null,
        type: null,
        duration: null,
        audioFlag: !0,
        musicEl: null,
        viewCallback: null,
        eventCallback: null,
        container: null,
        debugStr: "[nTalk Music]: ",
        initialize: function (t, e, i, n, s, o, a) {
            this.msgid = t, this.url = e, this.type = i, this.duration = n, this.viewCallback = s, this.eventCallback = o, this.container = a, this.audioFlag = this.canPlayAudioMP3(), this.audioFlag ? this.createAudioPlayer() : this.createSwfPlayer(), this.viewCallback.call(this, "init"), this.eventCallback.call(this, "init")
        },
        createAudioPlayer: function () {
            var e = this;
            this.musicEl = document.createElement("audio"), this.musicEl.src = this.url, this.musicEl.type = this.type, this.musicEl.stop = function () {
                this.pause(), this.currentTime = 0
            }, t.Event.addEvent(this.musicEl, "ended", function () {
                t.Log(e.debugStr + " trigger ended stop mp3"), e.viewCallback.call(e, "stop")
            }), this.musicEl.getPaused = function () {
                return this.paused
            }
        },
        createSwfPlayer: function () {
            var e = this, i = "ntalker_swf_mp3Player_container_" + this.msgid,
                n = "ntalker_swf_mp3player_" + this.msgid, s = t.sourceURI + "fs/music.swf",
                o = t.flashHtml(n, s, "id=" + n);
            this.musicEl = document.createElement("div"), this.musicEl.innerHTML += o, this.musicEl.id = i, this.container.append(this.musicEl.outerHTML);
            var a = t.browser.msie && t.browser.ieversion <= 7 ? window[n] : document[n];
            setTimeout(function () {
                a.emit("load", e.url), a.emit("stop"), e.musicEl.play = function () {
                    a.emit("play")
                }, e.musicEl.stop = function () {
                    a.emit("stop")
                }, e.musicEl.getPaused = function () {
                    return 0 === a.getPaused()
                }
            }, 1e3)
        },
        emit: function () {
            this.musicEl.getPaused() ? this.play() : this.stop()
        },
        play: function () {
            t.Log(this.debugStr + "play mp3"), this.musicEl.play(), this.viewCallback.call(this, "play")
        },
        stop: function () {
            t.Log(this.debugStr + "stop mp3"), this.musicEl.stop(), this.viewCallback.call(this, "stop")
        },
        canPlayAudioMP3: function () {
            try {
                var t = document.createElement("audio");
                return !(!t.canPlayType || !t.canPlayType("audio/mpeg;").replace(/no/, ""))
            } catch (e) {
                return !1
            }
        }
    }, t.paste = t.Class.create(), t.paste.prototype = {
        data: null,
        callback: null,
        debugStr: "[nTalk pasteDate]: ",
        initialize: function (t, e) {
            this.data = t.clipboardData || window.clipboardData, this.callback = e
        },
        getImgBase64Str: function () {
            var e = this, i = this.data;
            if (!i) return null;
            if ("function" == typeof webInfoChanged) this.callback(i.getData("image/x-vnd.adobe.air.bitmap").toDataURL()); else if (t.browser.chrome || t.browser.opera) {
                var n, s, o = i.items;
                if (o) {
                    n = o[0];
                    for (var a = 0, r = (s = i.types || []).length; a < r; a++) if ("Files" === s[a]) {
                        n = o[a];
                        break
                    }
                    if (n && "file" === n.kind && n.type.match(/^image\//i)) {
                        var h = n.getAsFile(), l = new FileReader;
                        l.onload = function (t) {
                            e.callback(t.target.result)
                        }, l.readAsDataURL(h)
                    } else this.callback()
                }
            } else this.callback()
        }
    })
}(nTalk);
/* @file base.js
 * @date 2019.04.29 15:53:18
 */
!function (e, t) {
    var a = ["kf_9933", "kf_9949", "kf_9954"], i = {
        trailserver: "",
        presenceserver: "",
        presencegoserver: "",
        crmcenter: "",
        mcenter: "",
        coopserver: "",
        roboturl: "",
        t2dstatus: "",
        isnoim: 0,
        notrail: 0,
        preload: 2e3,
        sessioncarry: "1",
        enable_entrance: "0",
        enable_invite: "0",
        close_tchat_flash: "1",
        close_im_flash: "0",
        robot: "0",
        siteid: ""
    }, o = /[a-z]{2}\_\d+/gi;
    if (e.baseURI && !e.base) {
        if (e.extend({
            CON_LOAD_MODE_NID: 1,
            CON_CUSTOMER_ID: 0,
            CON_GROUP_ID: 1,
            CON_VISITOR_ID: 2,
            CON_SHORT_ID: 3,
            mobileOpenInChat: parseInt(e.flashserver.reversechat, 10) || parseInt(e.flashserver.eduautochat, 10),
            isEdu: parseInt(e.flashserver.reversechat, 10),
            isAutoEdu: parseInt(e.flashserver.eduautochat, 10),
            downtserver: CON_SERVER.flashserver,
            autoEduShow: !1
        }), e.base = {
            _startBase: !1,
            _identityIDReady: !1,
            _connectTimeID: null,
            chatLoading: !1,
            clearChatCache: !1,
            timeOut: 2e3,
            entityList: {"<": "&lt;", ">": "&gt;"},
            fieldList: ["shortid", "uid", "uname", "isvip", "userlevel", "itemid", "itemparam", "erpparam", "exparams"],
            CON_LOCAL_FIX: "NOWAIT_",
            call_trail_status: !1,
            userIdFix: "",
            _reload_trail: !1,
            identityInfoJson: {},
            useSdkData: !1,
            _get_page_data: null,
            config: null,
            _islogin: !0,
            start: function () {
                var t = this;
                e.server ? (e.Log("nTalk.base.start()", 1), e.cookie.enable() || e.Log("Does not support cookies!", 3), e.global.pageinchat = !0, e.global.statictis = 2, e.source = e.url, this._identityIDReady = !1, this._startBase || (this.pageid = e.getTime(), this._startBase = !0, this._loadFlashServer(), e.isEmptyObject(CON_RULE) ? (this.getPageData(), this._loadIdentityID(function (a, i) {
                    e.Log("PCID:" + i, 1), t.startOtherMode(a, i)
                })) : this.startData(function () {
                    this._loadIdentityID(function (a, i) {
                        e.Log("PCID:" + i, 1), t.startOtherMode(a, i)
                    })
                }))) : e.Log("Loaded $server mode failed", 3)
            },
            chanageUserID: function () {
                return "undefined" != typeof NTKF_PARAM && (!(!NTKF_PARAM.uid || !this.toLongID(NTKF_PARAM.uid) || this.toLongID(NTKF_PARAM.uid) == e.user.id) && !(e.inArray(e.global.siteid, a) > -1 && e.global.siteid + "_ISME9754_" + NTKF_PARAM.uname == e.user.id))
            },
            overloadedData: function (t, a) {
                e.isFunction(t) && (a = t, t = null), e.Log("nTalk.base.overloadedData()"), e.isEmptyObject(CON_RULE) ? (this.getPageData(t), e.user.id = e.global.uid || e.user.id, e.user.name = e.global.uname || "", e.cache.set("uid", e.user.id), e.isFunction(a) && a(), e.base.startTrail(e.base._islogin, !0), e.flashserver.usexpush && e.xpush && e.xpush.init()) : this.startData(function () {
                    e.user.id = e.global.uid || e.user.id, e.user.name = e.global.uname || "", e.cache.set("uid", e.user.id), e.isFunction(a) && a(), e.base.startTrail(e.base._islogin, !0), e.flashserver.usexpush && e.xpush && e.xpush.init()
                }, t)
            },
            startData: function (t, a) {
                var i = this;
                e.Log("nTalk.base.startData()"), e.require({data: "data.js" + e.baseExt}, function (o) {
                    if (o) {
                        var n = e.data.start(CON_RULE);
                        i._get_page_data = e.extend({}, n, a), i.getPageData(i._get_page_data), t.call(i)
                    } else e.Log("Loaded $data mode failed", 3)
                })
            },
            _execMode: function () {
                this._startBase = !0, this._loadFlashServer()
            },
            startTrail: function (t, a, i) {
                var o = this;
                e.require({trail: "trail.js" + e.baseExt}, function (n) {
                    if (n) {
                        var r = function () {
                        };
                        i && (r = function () {
                            o.trailGetRegion(i)
                        }), e.trail.start(t, a, o.useSdkData, r)
                    } else e.Log("Loaded $trail mode failed", 3)
                })
            },
            startXPush: function () {
                var t = {};
                e.xpush && e.xpush.connect || (t.XPUSH = "xpush.js" + e.baseExt, e.browser.supportMqtt && (t.MQTT = "mqtt31.js" + e.baseExt), e.require(t, function () {
                    e.xpush.init()
                }))
            },
            startIM: function () {
                var t = {};
                e.im && e.im.connect || (t.IM = "im.js" + e.baseExt, e.browser.supportMqtt && e.server.eduimmqttserver && 1 == e.server.tchatConnectType ? t.MQTT = "mqtt31.js" + e.baseExt : e.flash.support && e.server.eduimmqttserver && 1 == e.server.tchatConnectType && (t.MQTT = "flashsock.js" + e.baseExt), t.Connection = "mqtt.im.js" + e.baseExt, e.require(t, function () {
                    e.im.start()
                }))
            },
            startLCrm: function (t, a, i) {
                var o = t && e.isArray(t) ? t : [t];
                e.require({lcrm: "lcrm.js" + e.baseExt}, function (t) {
                    e.each(o, function (t, o) {
                        e.Log("start lcrm mode", 1), e.lcrm.start(o, a, i)
                    })
                })
            },
            startChat: function (t, a, i, o, n, r, l, s, d, g) {
                var c;
                t = t || "", a = a || "", i = i || "", o = o || "", n = n || "", d = d || "", g = g || "", e.im && e.im.hideTips(), !0 !== e.base.chatLoading ? (e.Log("$.base.startChat(" + e.JSON.toJSONString(arguments) + ")", 1), e.base.showLoading(), c = {lang: (e.extParmas.lan || "zh_cn") + ".js" + e.baseExt}, e.browser.supportMqtt && e.server.tchatmqttserver && 1 == e.server.tchatConnectType ? (c.MQTT = "mqtt31.js" + e.baseExt, c.Connection = "mqtt.chat.js" + e.baseExt) : e.flash.support && e.server.tchatmqttserver && 1 == e.server.tchatConnectType ? (c.MQTT = "flashsock.js" + e.baseExt, c.Connection = "mqtt.chat.js" + e.baseExt) : c.TChat = "comet.chat.js" + e.baseExt, e.global.themes ? (c.chatManage = "chat.js" + e.baseExt, c.chatManageView = e.global.themes + "/chat.view.in.js" + e.baseExt, e.themesURI = e.global.themes + "/images/") : e.mobileOpenInChat && e.browser.mobile ? c.chatManage = "chat.js" + e.baseExt : c.chatManage = "chat.in.js" + e.baseExt, c.Window = "nt2.js" + e.baseExt, 1 == e.server.robot && (c.Robot = "robot.js" + e.baseExt), e.require(c, function () {
                    e.base.hiddenLoading(), e.chatManage ? (e.Log("load $chatManage mode complete"), e.chatManage.open(t, a, i, o, n, r, l, s, d, g) && (d || e.cache.set("opd", 1))) : e.Log("Load $chatManage mode failed", 3)
                })) : e.Log("loading......", 2)
            },
            startEntrance: function () {
                var t = e.server.entranceConfig[e.global.settingid] || "";
                e.Log("$.base.startEntrance()"), t && e.server.entranceConfig && !e.isEmptyObject(e.server.entranceConfig) && e.require({entrance: t + e.baseExt}, function (t) {
                    t ? ("0" != e.server.enable_entrance && e.options.entrance && e.entrance.start("entrance"), "0" != e.server.enable_entrance && e.options.invite && e.entrance.start("invite")) : e.Log("Load $.entrance mode failed", 3)
                })
            },
            showLoading: function () {
                return e.base.chatLoading = !0, e.base.startTime = e.getTime(), this.loadingElement && this.loadingElement.length ? this.loadingElement.display(1) : this.loadingElement = e({
                    id: "ntalk-chat-loading",
                    style: e.STYLE_NBODY + "width:100%;height:33px;position:fixed:right:0;bottom:0;z-index:9999;"
                }).appendTo(!0).fixed({
                    right: 0,
                    bottom: 0
                }).html('<div style="' + e.STYLE_BODY + "margin:0 auto;width:99px;height:33px;background:url(" + e.imageloading + ') no-repeat 0 0;"></div>'), this.loadingElement
            },
            hiddenLoading: function () {
                this.loadingElement.display(), e.base.endTime = e.getTime(), e.base.chatLoading = !1, e.Log("$.base.showLoading-hiddenLoading execute time:" + (e.base.endTime - e.base.startTime) + " ms", 1)
            },
            toLongID: function (t) {
                t.length > 47 && (t = t.substr(0, 47));
                var a = this.checkID(t);
                return a === e.CON_SHORT_ID ? e.global.siteid + "_ISME9754_" + t : a == e.CON_VISITOR_ID ? t : ""
            },
            toShortID: function (t) {
                var a = this.checkID(t);
                return a === e.CON_SHORT_ID ? t : a === e.CON_VISITOR_ID ? t.replace(this.userIdFix, "") : ""
            },
            checkID: function (t) {
                return !(!(t = t ? t.toString() : "") || "0" === t) && (t.indexOf("_ISME9754_T2D") > -1 ? e.CON_CUSTOMER_ID : t.indexOf("_ISME9754_GT2D") > -1 ? e.CON_GROUP_ID : t.indexOf(e.global.siteid + "_ISME9754_") > -1 ? e.CON_VISITOR_ID : e.CON_SHORT_ID)
            },
            trailGetRegion: function (t) {
                var a, i, o;
                if (e.global.trailGetRegion = new Object, e.global.trailGetRegion.success = !1, e.global.trailGetRegion.ip = "", e.global.trailGetRegion.country = "", e.global.trailGetRegion.province = "", e.global.trailGetRegion.city = "", i = "trail_getregion_" + e.randomChar(), a = e.protocolFilter(e.flashserver.trailserver) + "/userinfo.php?action=getregion&", o = e.toURI({
                    siteid: e.global.siteid,
                    userid: t,
                    callback: i
                }), window[i] = function (t) {
                    1 == t.success && (e.global.trailGetRegion.success = !0, e.global.trailGetRegion.ip = t.data.ip, e.global.trailGetRegion.country = t.data.country, e.global.trailGetRegion.province = t.data.province, e.global.trailGetRegion.city = t.data.city)
                }, window.XMLHttpRequest && window.FormData) {
                    var n = {
                        url: a + e.toURI({siteid: e.global.siteid, userid: t, callback: i}),
                        crossDomain: !0,
                        success: function (e) {
                            window[i](e), nTalk.Log("轨迹地域ajax调用成功:" + e, 1)
                        },
                        error: function (e) {
                            nTalk.Log("轨迹地域ajax调用失败:" + e, 1)
                        }
                    };
                    e.doAjaxRequest(n)
                } else e.require(a + o)
            },
            startOtherMode: function (t, a) {
                var i, o, n = e.cache.get("uid") || "";
                if (clearTimeout(this._connectTimeID), this._connectTimeID = null, this._identityIDReady = !0, e.Log("cache uid:" + n + ", site uid:" + t + ", return uid:" + t, 1), this._islogin = !n || n != t, e.global.pcid = a, e.user.id = t, e.isDefined(e.global.uname) && (e.user.name = e.global.uname), e.cache.set("uid", t), e.cookie.set(e.CON_PCID_KEY, a, 63072e6), 0 === e.server.notrail ? this.startTrail(this._islogin, !1, t) : (e.Log("no load trail"), this.trailGetRegion(t)), e.server.entranceConfig && ("0" != e.server.enable_entrance || "1" == e.server.enable_invite)) {
                    if ("2" == e.server.enable_entrance && e.browser.mobile) return;
                    this.startEntrance()
                }
                if (1 == e.server.usexpush ? this.startXPush() : !e.server.isnoim || 3 == e.server.isnoim || 2 == e.server.isnoim && "1" == e.cache.get("opd") ? (e.Log("nTalk.base.startIM()::" + e.im, 1), this.startIM()) : e.Log("no load im, isnoim:" + e.server.isnoim + ", opd:" + e.cache.get("opd"), 1), 1 == e.browser.mobile) {
                    var r = [".full-html,.full-body{", "width: 100% !important;", "height: 100% !important;", "margin: 0 !important;", "overflow: hidden !important;", "}", ".full-body *{", "kf_10229" === e.global.siteid ? "display: block !important;" : "display: none !important;", "}", ".full-iframe {", "display: block !important;", "}", ".full-inpage {", "width: 100% !important;", "height: 100% !important;", "margin: 0 !important;", "overflow: hidden !important;", "background: rgb(243, 243, 247) !important;", "-webkit-tap-highlight-color: rgba(0, 0, 0, 0);", "}"].join("");
                    e.addMobileStyle(r)
                }
                if (o = window.localStorage.carry_dest ? e.JSON.parseJSON(window.localStorage.carry_dest) : "", "0" != e.server.sessioncarry && o && !e.browser.mobile) {
                    if (e.Log("sessioncarry:" + e.JSON.toJSONString(o)), window.localStorage.carry_dest = "", o) for (k in o) if (k) {
                        if (k.indexOf("ISME9754") > -1) return;
                        e.browser.mobile || !e.global.pageinchat ? (i = {single: -1}, e.im_openOutPageChat(k, "", o[k], i, "")) : (i = {
                            autoconnect: !0,
                            single: -1
                        }, e.im_openInPageChat(k, "", o[k], i, ""))
                    }
                } else e.server.preload > 0 && !e.global.themes && this.preloadChat()
            },
            preloadChat: function () {
                var t;
                e.Log("$.base.preloadChat()", 1), setTimeout(function () {
                    !0 !== e.base.chatLoading && (t = {lang: (e.extParmas.lan || "zh_cn") + ".js" + e.baseExt}, e.global.themes ? (t.chatManage = "chat.js" + e.baseExt, t.chatManageView = e.global.themes + "/chat.view.in.js" + e.baseExt, e.themesURI = e.global.themes + "/images/") : e.mobileOpenInChat && e.browser.mobile ? t.chatManage = "chat.js" + e.baseExt : t.chatManage = "chat.in.js" + e.baseExt, t.Window = "nt2.js" + e.baseExt, e.browser.supportMqtt && e.server.tchatmqttserver && 1 == e.server.tchatConnectType ? (t.MQTT = "mqtt31.js" + e.baseExt, t.Connection = "mqtt.chat.js" + e.baseExt) : e.flash.support && 1 == e.server.tchatConnectType ? (t.MQTT = "flashsock.js" + e.baseExt, t.Connection = "mqtt.chat.js" + e.baseExt) : t.TChat = "comet.chat.js" + e.baseExt, 1 == e.server.robot && (t.Robot = "robot.js" + e.baseExt), e.require(t, function (t, a) {
                        a ? e.Log("preload $chatManage mode complete") : e.Log("preload $chatManage mode failed", 3)
                    }))
                }, e.server.preload)
            },
            getPageData: function (t) {
                var i;
                return e.Log("nTalk.base.getPageData()"), i = e.extend({}, "undefined" != typeof NTKF_PARAM ? NTKF_PARAM : {}, t), e.whereGetTo(e.global, i, ["siteid", "sellerid", "settingid", "uid", "uname", "exparams", "themes", "callbacks", "backURL", "usertag", "userrank", "sourceid", "sourcename", "keyid", "keyword", "country", "province", "city", "hmparams", "page_Url", "page_Title", "isvip", "userlevel", "itemid", "itemparam", "orderid", "orderprice", "erpparam", "ntalkerparam", "pagetype", "title", "lang", "iconid"], [null, null, null, "shortid", "uname", "exparams", "themes", "callbacks", "backURL", "usertag", "userrank", "sourceid", "sourcename", "keyid", "keyword", "country", "province", "city", "hmparams", "page_Url", "page_Title"]), e.global.siteid = (e.global.siteid + "").replace(/^\s+|\s+$/, ""), e.global.settingid = (e.global.settingid + "").replace(/^\s+|\s+$/, ""), e.global.siteid = e.global.siteid && o.test(e.global.siteid) ? e.global.siteid : e.extParmas.siteid || "", "" !== e.global.siteid && (e.global.pagetype = e.params.source || "", e.global.sellerid = e.isArray(e.global.sellerid) ? e.global.sellerid : e.global.sellerid.toString().indexOf(",") > -1 ? e.global.sellerid.split(",") : e.global.sellerid ? [e.global.sellerid] : [], e.global.orderid = e.isArray(e.global.orderid) ? e.global.orderid : e.global.orderid.toString().indexOf(",") > -1 ? e.global.orderid.split(",") : e.global.orderid ? [e.global.orderid] : [], e.global.orderprice = e.isArray(e.global.orderprice) ? e.global.orderprice : e.global.orderprice.toString().indexOf(",") > -1 ? e.global.orderprice.split(",") : e.global.orderprice ? [e.global.orderprice] : [], e.inArray(e.global.siteid, a) > -1 && (e.global.shortid = e.global.uname || ""), !e.global.itemid && e.global.ntalkerparam && (e.isObject(e.global.ntalkerparam) || e.Log("ntalkerparam param abnormal", 2), e.global.ntalkerparam.item && (e.global.itemid = e.global.ntalkerparam.item.id)), /number|string/i.test(typeof e.global.shortid) && /string/i.test(typeof e.global.uname) || (e.Log("userid or username type error"), e.global.shortid = "", e.global.uname = ""), e.referrer = e.enCut(e.referrer, 255), e.global.settingid = e.global.settingid && /[a-z]{2}\_\d+\_\d+/gi.test(e.global.settingid) ? e.global.settingid : "", e.global.iconid = e.isNumeric(e.global.iconid) ? e.global.iconid : 0, e.global.title = e.enCut(e.title, 255), e.global.shortid = e.global.shortid && "0" != e.global.shortid ? e.enCut(e.global.shortid, 64 - e.enLength(e.global.siteid) - 10) : "", e.global.uname = !e.global.shortid || "0" == e.global.shortid || /^(undefined|null|0)$/gi.test(e.global.uname) ? "" : e.global.uname ? e.enCut(e.global.uname, 32) : e.enCut(e.global.shortid, 32), e.global.uid = this.toLongID(e.global.shortid), e.global.isvip = e.isNumeric(e.global.isvip) ? e.global.isvip : e.isNumeric(e.global.userlevel) ? e.global.userlevel : 0, e.global.userlevel = e.isNumeric(e.global.userlevel) ? e.global.userlevel : 0, e.inArray(e.global.siteid, a) > -1 && (e.global.shortid = e.global.uname || ""), e.global = this.filterJSONChar(e.global, ""), this.changeDataFormat(), e.Log("global: " + e.JSON.toJSONString(e.global), 1), e.global)
            },
            changeDataFormat: function () {
                var t = e.global.callbacks, a = {};
                if (e.isArray(t) && 0 !== t.length) {
                    for (var i = 0; i < t.length; i++) !e.isArray(t[i]) || t[i].length < 2 || !e.isFunction(t[i][1]) || (a[t[i][0]] = t[i][1]);
                    e.global.callbacks = a
                } else e.global.callbacks = a
            },
            _filterChar: function (t, a) {
                var i, o, n = [];
                a && e.each(this.entityList, function (e, a) {
                    try {
                        i = new RegExp(e, "gi"), t = t.replace(i, a)
                    } catch (o) {
                    }
                });
                for (var r = 0, l = t.length; r < l; r++) try {
                    o = encodeURIComponent(t.charAt(r)), n.push(t.charAt(r))
                } catch (s) {
                    try {
                        o = encodeURIComponent(t.charAt(r) + t.charAt(r + 1)), n.push((n.length ? " " : "") + o.replace(/%/gi, "") + (r + 2 >= l ? "" : " ")), ++r
                    } catch (s) {
                        n.push(t.charAt(r))
                    }
                }
                return n.join("")
            },
            filterJSONChar: function (t, a) {
                var i, o = this;
                if (e.isObject(t)) i = {}, e.each(t, function (e, t) {
                    i[e] = o.filterJSONChar(t, e)
                }); else if (e.isArray(t)) {
                    i = [];
                    for (var n = 0; n < t.length; n++) i[n] = this.filterJSONChar(t[n], n)
                } else i = "string" == typeof t ? this._filterChar(t, -1 !== e.inArray(a, this.fieldList)) : t;
                return i
            },
            _loadIdentityID: function (t) {
                var a, i = this, o = "", n = function (t, a) {
                    if ("undefined" != typeof ntalker && ntalker.pushUserInfo && !identityInfoJson.pcid) {
                        i && clearTimeout(i);
                        var i = setTimeout(ntalker.pushUserInfo({
                            pcid: a,
                            uid: t,
                            shortid: e.global.shortid,
                            uname: e.global.uname
                        }), 200)
                    }
                };
                if ("undefined" != typeof ntalker) try {
                    e.Log("get sdk pcid"), this.identityInfoJson = e.JSON.parseJSON(ntalker.getIdentityInfo()), this.identityInfoJson && (o = this.identityInfoJson.pcid, e.global.trailid = this.identityInfoJson.tid, e.global.uid = this.identityInfoJson.uid, e.user.id = this.identityInfoJson.uid, e.global.shortid = this.identityInfoJson.shortid, this.useSdkData = !0)
                } catch (r) {
                    e.Log("get sdk pcid"), ntalker.getIdentityID && "function" == typeof ntalker.getIdentityID && (o = ntalker.getIdentityID())
                }
                e.Log("ntalker type : " + typeof ntalker), "" === o && (o = e.cookie.get(e.CON_PCID_KEY)), this.useSdkData && e.global.trailid || (e.global.trailid = e.cache.get("tid")), this.userIdFix = e.global.siteid + "_ISME9754_", e.global.trailid && !this.useSdkData && Math.round((e.getTime() - +e.global.trailid.toString().substr(0, 13)) / 36e5) >= 4 && (e.global.trailid = ""), (!e.global.trailid || e.url.indexOf("livecrmtest") > -1) && (e.global.trailid = e.getTime(2), e.base.clearChatCache = !0, e.flashData && e.flashData.clearAll()), o && o.length > 10 ? (a = e.global.uid && e.global.uid.indexOf(e.global.siteid) > -1 ? e.global.uid : this.userIdFix + o.substr(0, 21), e.Log("load PCID:" + o + ", uid:" + a), t.call(this, a, o), this.useSdkData || n(a, o)) : e.flash.support && !e.browser.mobile ? (this._createNTID({
                    u: e.global.uid,
                    siteid: e.global.siteid,
                    loadnid: e.CON_LOAD_MODE_NID
                }), o = this._createScriptPCID(!0), e.Log("create flash PCID, tmp pcid:" + o), a = e.global.uid || this.userIdFix + o.substr(0, 21), e.global.pcid = o, e.user.id = a, this._connectTimeID = setTimeout(function () {
                    e.global.connect = e.CON_CONNECT_COMET, e.Log("timeout:" + i.timeOut + " no create pcid", 2), t.call(i, a, o), n(a, o)
                }, this.timeOut)) : e.cookie.enable() ? (o = this._createScriptPCID(!1), e.Log("create script PCID"), a = e.global.uid || this.userIdFix + o.substr(0, 21), t.call(this, a, o), n(a, o)) : e.require({Fingerprint2: "fingerprint2.js" + e.baseExt}, function (r) {
                    e.Fingerprint2 ? (fingerprint2 = new e.Fingerprint2, fingerprint2.get(function (r) {
                        o = "guest-Fin" + r, a = e.global.uid || i.userIdFix + o.substr(0, 21), t(a, o), n(a, o)
                    })) : e.Log("load Fingerprint2 failure")
                }), e.isAutoEdu && e.require({auto: "auto.js" + e.baseExt}, function () {
                })
            },
            _createNTID: function (t) {
                var a = e("#nt-flash-div"),
                    i = e.flashHtml("ntkf_flash_ntid", e.sourceURI + "fs/NTID.swf?" + e.version.ntid, t);
                a.length || (a = e(document.body).insert('<div id="nt-flash-div" style="position: absolute; z-index: 9996; top: -200px;"></div>')), a.insert(i)
            },
            _createScriptPCID: function (t) {
                return "guest" + [t ? "TEMP" + e.randomChar(4) : e.randomChar(8), e.randomChar(4), e.randomChar(4), e.randomChar(4), e.getTime().toString(16).toUpperCase().substr(-8) + e.randomChar(4)].join("-")
            },
            _loadFlashServer: function () {
                e.Log("start load flashserver."), e.require({
                    flashserver: e.server.flashserver + "/func/getflashserver.php?" + e.toURI({
                        resulttype: 1,
                        siteid: e.global.siteid,
                        callbackname: "nTalk._callFlashServer"
                    }) + "#rnd"
                }, function (t) {
                    t = e.extend({}, i, t), e.server = e.protocolFilter(e.extend(e.server, t))
                })
            },
            fire: function (t, a) {
                return !e.global.callbacks[t] || e.global.callbacks[t].apply(this, a)
            }
        }, e.extend({
            _callFlashServer: function (t, a) {
                e.flashserver = t, e.server = e.protocolFilter(e.extend(e.server, e.flashserver)), e.Log("$flashserver loading is complete. resultType:" + a)
            }, fIM_presenceFlashReady: function (t, a) {
                return setTimeout(function () {
                    e.base._identityIDReady ? (e.Log("$.fIM_presenceFlashReady()"), e.Event.fireEvent(document, "focus") || e.Event.fireEvent(document, "click"), e.im && e.im.connect && e.im.connect.stopSwitchConnect()) : (e.Log(">RETURN flash PCID, uid:" + t + ", pcid:" + a, 1), t && a && e.base.startOtherMode(t, a))
                }, 0), !0
            }, isJsReady: function () {
                return !0
            }, _createMobileOpenInPageWindow: function (t) {
                var a = e(".ntalk-mobile-inpage-window");
                if (a.length) return t || e._showMobileInPageWindow(), {created: !1, element: a};
                var i = 1;
                return chatElementBack = e({
                    tag: "div",
                    className: "ntalk-mobile-inpage-background",
                    style: "background:rgba(0,0,0,0.3);width:100%;height:100%;position:fixed;left:0;top:0px;-webkit-overflow-scrolling: touch;overflow:hidden;z-index:1000000000000000;display:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);"
                }).appendTo(!0), (a = e({
                    className: "ntalk-mobile-inpage-window",
                    "data-status": "visible",
                    style: e.STYLE_BODY + "background:#fff;width:100%;height:100%;position:fixed;left:0;bottom:0px;-webkit-overflow-scrolling: touch;overflow:hidden;z-index:1000000000000000;display:block;"
                }).appendTo(chatElementBack)).bind("touchmove", function (t) {
                    e.Event.fixEvent(t).stopPropagation()
                }), (e.browser.micromessenger || e.browser.weibo) && (i = 1), a.css({
                    width: "100%",
                    height: 100 * i + "%"
                }), "hidden" == a.attr("data-status") ? a.css("top", 100 * i + "%") : a.css("bottom", "0px"), e(window).bind("resize", function () {
                    var t = 1;
                    (e.browser.micromessenger || e.browser.weibo) && (t = 1), a.css({
                        width: "100%",
                        height: 100 * t + "%"
                    }), "hidden" == a.attr("data-status") ? a.css("height", 100 * t + "%") : a.css("bottom", "0px")
                }), t || e._showMobileInPageWindow(), chatElementBack.bind("click", function () {
                    e._hideMobileInPageWindow()
                }), a.bind("click", function () {
                    e.Event.fixEvent(event).stopPropagation()
                }), {created: !0, element: a}
            }, _createMobileIframeWindow: function (t) {
                var a = e(".ntalk-mobile-iframe-window"), i = e("IFRAME[name=" + t + "]");
                return a.length ? {created: !1, element: a} : (a = e({
                    className: "ntalk-mobile-iframe-window",
                    "data-status": "visible",
                    style: e.STYLE_BODY + "background:#fff;width:100% !important;height:100% !important;position:fixed;left:0;top:0px;-webkit-overflow-scrolling: touch;overflow-y:scroll"
                }).appendTo(!0), i = e({
                    tag: "IFRAME",
                    name: t,
                    style: e.STYLE_BODY + "width:100% !important;height:100% !important;display:block !important;",
                    src: "about:blank"
                }).appendTo(".ntalk-mobile-iframe-window"), e(window).bind("resize", function () {
                    e(i).css({
                        width: "100%",
                        height: e(window).height() + "px"
                    }), "hidden" == a.attr("data-status") ? a.css("top", e(window).height() + "px") : a.css("top", "0px")
                }), i[0].contentWindow, e.listenerMessage(function (i) {
                    e.Log("listenerMessage:" + i);
                    var o;
                    try {
                        i = e.JSON.parseJSON(i), o = i.funcName
                    } catch (l) {
                        o = i
                    }
                    switch (o) {
                        case"showMobileIframeWindow":
                            e._showMobileIframeWindow(a);
                            break;
                        case"hideMobileIframeWindow":
                            e._hideMobileIframeWindow(a, !1);
                            break;
                        case"closeMobileIframeWindow":
                            e.viewPortContent && document.getElementsByTagName("meta")[t = "viewport"].setAttribute("content", e.viewPortContent), e._hideMobileIframeWindow(a, !0);
                            break;
                        case"closeMobileIframeWindowCallbacks":
                            e.viewPortContent && document.getElementsByTagName("meta")[t = "viewport"].setAttribute("content", e.viewPortContent), e.base.fire("WapClose", []);
                        case"backMobileIframeWindowCallBacks":
                            e.base.fire("WapBack", [])
                    }
                    if (i && e.isArray(i) && i.indexOf("destInfo") > -1 && "function" == typeof im_destUserInfo && 3 == i.split(",").length) {
                        var n = i.split(",")[1], r = i.split(",")[2];
                        im_destUserInfo({id: n, name: r})
                    }
                }), {created: !0, element: a})
            }, _showMobileIframeWindow: function (t) {
                nTalk.isObject(t) && t.talkVersion && (e("html").addClass("full-html"), e("body").addClass("full-body"), t.addClass("full-iframe"), t.css("z-index", "999999999"), e.browser.mobile && 0 == e("meta[name=viewport]").length && e({
                    tag: "meta",
                    id: "nTalk-window-meta",
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                }).appendTo(e("head")))
            }, _hideMobileIframeWindow: function (t, a) {
                if (!nTalk.isObject(t) || !t.talkVersion) return t;
                e("html").removeClass("full-html"), e("body").removeClass("full-body"), t.removeClass("full-iframe"), t.css({
                    "z-index": -1,
                    display: "none"
                }), e.browser.mobile && e("#nTalk-window-meta").remove(), a && (t.remove(), e.removelistenerMessage())
            }, addMobileStyle: function (e) {
                var t = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
                a.type = "text/css", a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e)), t.appendChild(a)
            }
        }), e.extend({
            im_openInPageChat: function (t, a, i, o, n) {
                var r, l, s, d;
                if (!e.base._startBase) return e.base.start(), void function () {
                    s = arguments, e.base._startBase ? e.im_openInPageChat(t, a, i, o, n) : setTimeout(function () {
                        s.callee()
                    }, 50)
                }();
                if (e.base.chanageUserID()) e.base.overloadedData(function () {
                    e.im_openInPageChat(t, a, i, o, n)
                }); else {
                    if (e.invite && e.invite._close(), e.Log("nTalk.im_openInPageChat()", 1), t = !t && i ? "" : t || e.global.settingid || "", r = e.global.settingid ? e.global.settingid.split("_").splice(0, 2).join("_") : "", l = t ? t.split("_").splice(0, 2).join("_") : "", d = e.global.sellerid && e.global.sellerid.length ? e.global.sellerid[0] : "", o = e.extend({}, o), a || (l && ("" === l || l != d && l != r) ? (a = "", n = "") : (a = e.global.itemid, n = e.global.itemparam)), d = l != e.global.siteid ? l : "", e.Log("settingId:" + t + ", itemId:" + a + ", itemparam:" + n), (e.browser.mobile || !0 !== e.global.pageinchat) && !e.mobileOpenInChat) return this.im_openOutPageChat(t, a, i, o, n);
                    2 != e.server.notrail || e.base.call_trail_status || (e.base.call_trail_status = !0, e.base.startTrail());
                    var g = o && o.single ? o.single : "", c = o && o.manual ? 1 : 0,
                        b = !(!o || !e.isDefined(o.autoconnect)) && o.autoconnect,
                        u = o && o.edu_inviteid ? o.edu_inviteid : "", h = o && o.edu_visitid ? o.edu_visitid : "";
                    e.browser.mobile && e.mobileOpenInChat && (this._createMobileOpenInPageWindow(u), e.isAutoEdu && e.autoEduShow && "complete" != e.autoEduShow && this._hideMobileInPageWindow()), e.base.startChat(t, i, a, n, d, b, g, c, u, h)
                }
            }, im_openOutPageChat: function (t, a, i, o, n) {
                var r, l, s, d;
                if (!e.base._startBase) return e.base.start(), void function () {
                    s = arguments, e.base._startBase ? e.im_openInPageChat(t, a, i, o, n) : setTimeout(function () {
                        s.callee()
                    }, 50)
                }();
                {
                    if (!e.base.chanageUserID()) {
                        e.Log("nTalk.im_openOutPageChat()", 1), t = t || e.global.settingid || "", r = e.global.settingid ? e.global.settingid.split("_").splice(0, 2).join("_") : "", l = t ? t.split("_").splice(0, 2).join("_") : "", d = e.global.sellerid && e.global.sellerid.length ? e.global.sellerid[0] : "", o = e.extend({}, o), a || (l && ("" === l || l != d && l != r) ? (a = "", n = "") : (a = e.global.itemid, n = e.global.itemparam)), d = l != e.global.siteid ? l : "", e.Log("settingId:" + t + ", itemId:" + a + ", itemparam:" + n);
                        var g, c = e.browser.mobile ? "_self" : "_blank", b = o && o.single ? o.single : "",
                            u = (o && o.manual, {
                                v: e.version.script,
                                siteid: e.global.siteid,
                                sellerid: d,
                                settingid: t,
                                baseuri: e.baseURI,
                                mobile: e.browser.mobile ? 1 : 0,
                                lan: e.extParmas.lan || "",
                                ref: e.enCut(e.url, 255),
                                tit: e.global.title,
                                iframechat: o.iframechat || "0",
                                header: e.isDefined(o.header) ? o.header : "1",
                                edu_inviteid: o && o.edu_inviteid ? o.edu_inviteid : "",
                                edu_visitid: o && o.edu_visitid ? o.edu_visitid : "",
                                backURL: e.global.backURL,
                                orderid: e.global.orderid,
                                rnd: e.getTime()
                            }), h = {
                                uid: e.user.id,
                                uname: e.user.name,
                                pcid: e.global.pcid,
                                vip: e.global.isvip,
                                ulevel: e.global.userlevel,
                                destid: i || "",
                                single: b || (i ? i.indexOf("GT2D") > -1 ? 0 : 1 : -1),
                                chattype: "",
                                chatvalue: "",
                                itemid: a,
                                itemparam: n,
                                erpparam: e.global.erpparam,
                                "ntalker-debug": e.params["ntalker-debug"] || e.cache.get("debug"),
                                exparams: e.global.exparams,
                                userrank: e.global.userrank,
                                usertag: e.global.usertag
                            };
                        if ("undefined" != typeof ntalker && ntalker.openChatWindow) {
                            sdkQuery = e.extend({}, u, h), sdkQuery.uid = e.base.toShortID(sdkQuery.uid), sdkQuery.flashserver = e.server.flashserver, e.Log("call ntalker.openChatWindow()", 2);
                            var m = ntalker.openChatWindow(e.JSON.toJSONString(sdkQuery));
                            if (e.Log("call ntalker.openChatWindow()>>" + m, 3), 0 === m) return;
                            e.Log("call ntalker.openChatWindow()>>" + m, 3)
                        }
                        return e.global.themes && (u.themes = e.global.themes), o.iframechat ? (c = "ntalk-mobile-chat", e.browser.mobile && e.chatViewport && e.chatViewport(), e.require({animate: "nt2.js" + e.baseExt}, function (a) {
                            e.animate ? ((!(g = e._createMobileIframeWindow(c)) || g && !0 === g.created) && (e.xpush && e.xpush.clearSettingUnReadMsgCount(t), e.objectPost = new e.POST(e.server.flashserver + "chat.php?" + e.toURI(u, !0, "&"), h, function () {
                                e.Log("open chat window complete", 1)
                            }, c)), e._showMobileIframeWindow(g.element)) : e.Log("Loaded $nt2 mode failed", 3)
                        }), null) : ((!g || g && !0 === g.created) && (e.xpush && e.xpush.clearSettingUnReadMsgCount(t), e.objectPost = new e.POST(e.server.flashserver + "chat.php?" + e.toURI(u, !0, "&"), h, function () {
                            e.Log("open chat window complete", 1)
                        }, c)), g ? g.element : e.objectPost.iframeElement)
                    }
                    e.base.overloadedData(function () {
                        e.im_openInPageChat(t, a, i, o, n)
                    })
                }
            }, im_getAppChatWindowURL: function (t, a) {
                var i, o, n, r, l, s, d, g, c;
                if (!e.base._startBase) return e.base.start(), void function () {
                    n = arguments, e.base._startBase ? e.im_getAppChatWindowURL(t, a) : setTimeout(function () {
                        n.callee()
                    }, 50)
                }();
                if (e.base.chanageUserID()) e.base.overloadedData(function () {
                    e.im_getAppChatWindowURL(t, a)
                }); else {
                    e.Log("nTalk.im_getAppChatWindowURL()", 1), "function" == typeof t ? (a = t, t = {}) : t = e.extend({}, t), l = t.destid || "", s = t.settingId || e.global.settingid || "", i = e.global.settingid ? e.global.settingid.split("_").splice(0, 2).join("_") : "", o = t.settingid ? t.settingid.split("_").splice(0, 2).join("_") : "", r = e.global.sellerid && e.global.sellerid.length ? e.global.sellerid[0] : "", c = e.extend({}, t.options), t.itemid ? (d = t.itemid, g = t.itemparam) : o && ("" === o || o !== r && o !== i) ? (d = "", g = "") : (d = e.global.itemid, g = e.global.itemparam), r = o != e.global.siteid ? o : "", e.Log("settingId:" + s + ", itemId:" + d + ", itemparam:" + g);
                    var b = c && c.single ? c.single : "", u = (c && c.manual, {
                        v: e.version.script,
                        siteid: e.global.siteid,
                        sellerid: r,
                        settingid: s,
                        baseuri: e.baseURI,
                        mobile: e.browser.mobile ? 1 : 0,
                        lan: e.extParmas.lan || "",
                        header: e.isDefined(c.header) ? c.header : "1",
                        uid: e.user.id,
                        uname: e.user.name,
                        pcid: e.global.pcid,
                        vip: e.global.isvip,
                        ulevel: e.global.userlevel,
                        destid: l || "",
                        single: b || (l ? l.indexOf("GT2D") > -1 ? 0 : 1 : -1),
                        chattype: "",
                        chatvalue: "",
                        itemid: d,
                        itemparam: g,
                        erpparam: e.global.erpparam,
                        ref: e.enCut(e.url, 255),
                        tit: e.global.title,
                        "ntalker-debug": e.params["ntalker-debug"] || e.cache.get("debug") || "",
                        exparams: e.global.exparams
                    });
                    e.isFunction(a) && a.call(self, e.server.flashserver + "recieve.php?" + e.toURI(u, !0, "&"))
                }
            }, im_updatePageInfo: function (t) {
                e.base.overloadedData(t)
            }, im_addTrailInfo: function (t, a, i) {
                e.referrer = e.url, e.title = t || document.title, e.url = a || document.location.href, e.base.overloadedData(i)
            }, t2d: {
                openChatWindow: function (t, a, i) {
                    e.im_openOutPageChat(i, "", t, null, "")
                }
            }, enableDebug: function () {
                return e.cache.get("debug") || e.cache.set("debug", 2), e.mDebug || e.require({
                    mDebug: "debug.js" + e.baseExt,
                    Window: "nt2.js" + e.baseExt
                }, function (t) {
                    t && !t.error && (e.mDebug.initialize(), e.Log = e.mDebug.Log, e.debug = e.mDebug)
                }), e.cache.get("debug")
            }
        }), !e.isDefined(CON_SERVER)) throw"CON_SERVER is not defined";
        e.imageloading = e.sourceURI + "images/loading.gif", e.server = e.extend({}, e.protocolFilter(CON_SERVER)), e.version = e.extend({}, e.version, CON_VERSION), e.baseExt = "?siteid=" + (e.extParmas.siteid || "") + "&v=" + e.version.dir + "&t=" + e.version.release, parseFloat(e.params["ntalker-debug"]) > 0 || +e.cache.get("debug") > 0 ? e.require({
            mDebug: "debug.js" + e.baseExt,
            Window: "nt2.js" + e.baseExt
        }, function (t) {
            t && !t.error && (e.mDebug.initialize(), e.Log = e.mDebug.Log, e.debug = e.mDebug, e.base.start())
        }) : (e.Log = function () {
        }, e.debug = {Log: e.Log}, e.base.start()), e._showMobileInPageWindow = function () {
            e.S_top = document.documentElement.scrollTop || document.body.scrollTop, e("html").addClass("full-html"), e("body").addClass("full-inpage"), e("body").css("padding") && (e.rememberBodyPadding = e("body").css("padding"), e("body").css({padding: 0})), e(".ntalk-mobile-inpage-background").css({
                "z-index": 999999999,
                display: "block",
                "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"
            }), e(".ntalk-mobile-inpage-window").css({
                display: "block",
                width: "100%",
                height: e.flashserver.halfScreen ? "80%" : "100%"
            })
        }, e._hideMobileInPageWindow = function () {
            e.rememberBodyPadding && e("body").css({padding: e.rememberBodyPadding}), e("html").removeClass("full-html"), e("body").removeClass("full-inpage"), e(".ntalk-mobile-inpage-background").css({
                "z-index": -1,
                display: "none"
            }), e(".nTalk-window-offLine").css("display", "none"), e.isEdu && e.fim_offlineMssage("", "", "", !0), e.flashserver.halfScreen && (e(".nTalk-window-offLine-bottom").css({
                width: "50px",
                height: "50px",
                bottom: "15%",
                left: "inherit",
                right: "2%",
                borderRadius: "50%",
                background: "url(" + e.destLogo + ") 0px 0px / 50px 48px no-repeat"
            }), e(".nTalk-window-offLine-bottom span").css({display: "none"}))
        }, e._closeMobileInPageWindow = function () {
            e.rememberBodyPadding && e("body").css({padding: e.rememberBodyPadding}), e("html").removeClass("full-html"), e("body").removeClass("full-inpage"), e("#ntalk-chat-loading").length > 0 && e("#ntalk-chat-loading").remove(), e(".ntalk-mobile-inpage-background").remove(), e(".nTalk-window-offLine").css("display", "none")
        }, e.require(e.imageloading), e.extend({
            getUserInfo: function () {
                if (e.global && e.global.pcid && e.user && e.user.id) return {
                    clientId: e.global.pcid,
                    userId: e.user.id,
                    userName: e.user.name,
                    shortId: "" == e.global.shortid ? e.user.id.substr(e.user.id.indexOf("_ISME9754_") + 10) : e.global.shortid
                }
            }, getTrailSessionId: function () {
                if (e.global && e.global.trailid) return e.global.trailid
            }, setBackUrl: function (t) {
                e.global ? e.global.backURL = encodeURIComponent(t) : setTimeout(function () {
                    nTalk.setBackUrl(t)
                }, 300)
            }
        }), e.extend({
            viewPortContent: null, chatViewport: function () {
                var e = document.getElementsByTagName("meta")[name = "viewport"];
                if (e && "viewport" == e.name) {
                    this.viewPortContent = e.content;
                    for (var t = e.content.split(","), a = 0; a < t.length; a++) t[a].indexOf("initial-scale") > -1 && (t[a] = "initial-scale = 1");
                    var i = t.join(",");
                    e.setAttribute("content", i)
                }
            }
        })
    }
}(nTalk);
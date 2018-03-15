define("github-rollup-github", ["github/metadata", "invariant", "github/document-ready", "github/failbot", "github/query-selector", "github/onfocus", "selector-observer", "delegated-events", "github/typecast", "github/debounce", "github/remote-form", "github/form", "github/throttled-input", "github/sliding-promise-queue", "github/fetch", "github/history", "github/proxy-site-detection", "github/send-beacon", "github/feature-detection", "github/has-interactions", "github/menu", "github/hotkey", "github/facebox", "github/emoji-detection", "github/setimmediate", "github/visible", "github/session-storage", "github/dimensions", "github/jquery", "github/navigation", "github/parse-html", "github/fragment-target", "github/sudo", "github/hash-change", "github/google-analytics", "github/number-helpers", "github/text", "github/inflector", "github/details", "github/updatable-content", "github/select-menu/loading", "github/inspect", "github/pjax", "github/restrict-tab-behavior", "github/preserve-position", "github/code-editor", "form-data-entries", "@github/sortablejs", "github/sso", "github/pjax/prefetch", "github/html-safe", "github/timers", "github/timezone", "github/task-list"],
function(e, t, n, r, a, o, s, i, c, u, l, d, m, f, v, p, h, g, y, b, j, L, w, x, k, E, S, T, q, A, M, H, C, I, R, _, F, P, N, O, D, B, U, z, W, V, $, K, J, G, X, Y, Q, Z) {
    "use strict";
    function ee(t) {
        return Ws || (Ws = e.getMetadataByName(document, "enabled-features").split(",")),
        -1 !== Ws.indexOf(t)
    }
    function te(e, t) {
        return t = {
            exports: {}
        },
        e(t, t.exports),
        t.exports
    }
    function ne(e) {
        if (!
        function(e) {
            var n = document.body;
            return t(n, "null.js:11"),
            n.classList.contains("zhio") || e.element.classList.contains("zh-login-status") || e.element.closest("#window-resizer-tooltip") || e.element.closest(".octotree_sidebar") || e.element.closest(".markdown-body")
        } (e)) {
            Js && console.warn(e.name + ": " + e.message);
            var n = "Accessibility: " + e.name + "\n" + e.message; (ee("ACCESSIBILITY_UI_WARNING") || window.testEnvA11yErrors) && (e.element.classList.add("accessibility-error"), window.testEnvA11yErrors || e.element.addEventListener("click",
            function() {
                alert(n + "\n\nFor more information see https://styleguide.github.com/primer/principles/accessibility\nSlack #accessibility if you need help resolving this")
            })),
            window.testEnvA11yErrors && window.testEnvA11yErrors.push(n),
            ee("LOG_ACCESSIBILITY") && r.reportError(e, {
                bucket: "github-accessibility"
            })
        }
    }
    function re() {
        var e = a.querySelectorAll(document, "input[type=text].js-advanced-search-prefix", HTMLInputElement),
        t = a.querySelectorAll(document, "select.js-advanced-search-prefix", HTMLSelectElement),
        n = a.querySelectorAll(document, ".js-advanced-search-prefix:checked", HTMLInputElement),
        r = [].concat(ri(oe(e)), ri(oe(t)), ri(oe(n))),
        o = r.reduce(function(e, t) {
            return t.value && t.type && e[t.type]++,
            e
        },
        {
            Repositories: 0,
            Users: 0,
            Code: 0,
            Issues: 0
        }),
        s = r.reduce(function(e, t) {
            return (e + " " +
            function(e) {
                var t = e.prefix,
                n = e.value;
                return "" === t ? "": n ? "" + t + n: ""
            } (t)).trim()
        },
        ""),
        i = a.query(document, ".js-advanced-search-input", HTMLInputElement).value;
        a.query(document, ".js-type-value", HTMLInputElement).value = function(e) {
            var t = 0,
            n = "Repositories";
            for (var r in e) e[r] > t && (t = e[r], n = r);
            return n
        } (o),
        a.query(document, ".js-search-query", HTMLInputElement).value = (i + " " + s).trim();
        var c = a.query(document, ".js-advanced-query");
        c.innerHTML = "",
        c.textContent = s;
        var u = document.createElement("span");
        u.textContent = i.trim(),
        c.prepend(u, " ")
    }
    function ae(e) {
        return - 1 !== e.search(/\s/g) ? '"' + e + '"': e
    }
    function oe(e) {
        return e.map(function(e) {
            var n = e.value.trim(),
            r = e.getAttribute("data-search-prefix");
            t(null != r, "null.js:82");
            var a = e.getAttribute("data-search-type");
            return "" === r ? {
                prefix: r,
                value: n,
                type: a
            }: -1 !== n.search(/,/g) && "location" !== r ? n.split(/,/).map(function(e) {
                return {
                    prefix: r,
                    value: ae(e.trim()),
                    type: a
                }
            }) : {
                prefix: r,
                value: ae(n),
                type: a
            }
        }).reduce(function(e, t) {
            return e.concat(t)
        },
        [])
    }
    function se(e, t) {
        var n = e.querySelector(".js-app-logo-with-bgcolor");
        n && (n.style.backgroundColor = "#" + t)
    }
    function ie(e, t) {
        if (e.nextElementSibling) {
            var n = c(e.nextElementSibling, HTMLElement);
            return n.classList.contains(t) ? n: ie(n, t)
        }
    }
    function ce() {
        return Reflect.construct(HTMLElement, [], this.__proto__.constructor)
    }
    function ue(e) {
        di.push(e),
        li()
    }
    function le() {
        if (mi = null, !h(document)) {
            var t = e.getMetadataByName(document, "browser-stats-url");
            t && (g.guaranteedPost(t, JSON.stringify({
                stats: di
            }), "application/json"), di = [])
        }
    }
    function de(e) {
        e.preventDefault(),
        e.stopPropagation()
    }
    function me(e) {
        var n = e.closest(".js-check-all-container") || document.body;
        return t(n, "null.js:33"),
        n
    }
    function fe(e, t, n, r) {
        null == r && (r = !1),
        t.indeterminate = r,
        t.checked !== n && (t.checked = n, setTimeout(function() {
            var n = new CustomEvent("change", {
                bubbles: !0,
                cancelable: !1,
                detail: {
                    relatedTarget: e
                }
            });
            t.dispatchEvent(n)
        }))
    }
    function ve(e, t) {
        var n = e.closest(".js-write-bucket");
        n && n.classList.toggle("focused", t)
    }
    function pe(e) {
        var t = e.currentTarget;
        t instanceof Element && ve(t, !1)
    }
    function he() {
        return Reflect.construct(HTMLElement, [], this.__proto__.constructor)
    }
    function ge(e) {
        var n = yi.get(e.currentTarget);
        t(n, "null.js:192");
        var r = n[L(e)];
        r && (xe(r), e.preventDefault())
    }
    function ye(e) {
        return e.trim().split("\n").length > 1
    }
    function be(e, t) {
        return Array(t + 1).join(e)
    }
    function je(e, n) {
        var r = e.value.slice(e.selectionStart, e.selectionEnd),
        a = void 0;
        a = n.orderedList ?
        function(e) {
            var t = /^\d+\.\s+/,
            n = void 0,
            r = void 0,
            a = e.value.slice(e.selectionStart, e.selectionEnd),
            o = a.split("\n");
            if (o.every(function(e) {
                return t.test(e)
            })) o = o.map(function(e) {
                return e.replace(t, "")
            }),
            a = o.join("\n");
            else {
                o = function() {
                    var e = void 0,
                    t = void 0,
                    n = void 0,
                    r = [];
                    for (n = e = 0, t = o.length; e < t; n = ++e) {
                        var a = o[n];
                        r.push(n + 1 + ". " + a)
                    }
                    return r
                } (),
                a = o.join("\n");
                var s = Le(e),
                i = s.newlinesToAppend,
                c = s.newlinesToPrepend;
                r = e.selectionStart + i.length,
                n = r + a.length,
                a = i + a + c
            }
            return {
                text: a,
                selectionStart: r,
                selectionEnd: n
            }
        } (e) : n.multiline && ye(r) ?
        function(e, t) {
            var n = t.prefix,
            r = t.suffix,
            a = t.surroundWithNewlines,
            o = e.value.slice(e.selectionStart, e.selectionEnd),
            s = e.selectionStart,
            i = e.selectionEnd,
            c = o.split("\n");
            if (c.every(function(e) {
                return e.startsWith(n) && e.endsWith(r)
            })) o = c.map(function(e) {
                return e.slice(n.length, e.length - r.length)
            }).join("\n"),
            i = s + o.length;
            else if (o = c.map(function(e) {
                return n + e + r
            }).join("\n"), a) {
                var u = Le(e),
                l = u.newlinesToAppend,
                d = u.newlinesToPrepend;
                s += l.length,
                i = s + o.length,
                o = l + o + d
            }
            return {
                text: o,
                selectionStart: s,
                selectionEnd: i
            }
        } (e, n) : function(e, n) {
            var r = void 0,
            a = void 0,
            o = n.prefix,
            s = n.suffix,
            i = n.blockPrefix,
            c = n.blockSuffix,
            u = n.replaceNext,
            l = n.prefixSpace,
            d = n.scanFor,
            m = n.surroundWithNewlines,
            f = e.selectionStart,
            v = e.selectionEnd,
            p = e.value.slice(e.selectionStart, e.selectionEnd),
            h = ye(p) && i.length > 0 ? i + "\n": o,
            g = ye(p) && c.length > 0 ? "\n" + c: s;
            if (l) {
                var y = e.value[e.selectionStart - 1];
                0 === e.selectionStart || null == y || y.match(/\s/) || (h = " " + h)
            }
            p = function(e, t, n) {
                if (e.selectionStart === e.selectionEnd) e.selectionStart = function(e, t) {
                    for (; e[t] && null != e[t - 1] && !e[t - 1].match(/\s/);) t--;
                    return t
                } (e.value, e.selectionStart),
                e.selectionEnd = function(e, t) {
                    for (; e[t] && !e[t].match(/\s/);) t++;
                    return t
                } (e.value, e.selectionEnd);
                else {
                    var r = e.selectionStart - t.length,
                    a = e.selectionEnd + n.length,
                    o = e.value.slice(r, e.selectionStart) === t,
                    s = e.value.slice(e.selectionEnd, a) === n;
                    o && s && (e.selectionStart = r, e.selectionEnd = a)
                }
                return e.value.slice(e.selectionStart, e.selectionEnd)
            } (e, h, g);
            var b = e.selectionStart,
            j = e.selectionEnd,
            L = u.length > 0 && g.indexOf(u) > -1 && p.length > 0;
            if (m) {
                var w = Le(e);
                r = w.newlinesToAppend,
                a = w.newlinesToPrepend,
                h = r + o,
                g += a
            } {
                if (p.startsWith(h) && p.endsWith(g)) {
                    var x = p.slice(h.length, p.length - g.length);
                    if (f === v) {
                        var k = f - h.length;
                        k = Math.max(k, b),
                        k = Math.min(k, b + x.length),
                        b = j = k
                    } else j = b + x.length;
                    return {
                        text: x,
                        selectionStart: b,
                        selectionEnd: j
                    }
                }
                if (L) {
                    if (d.length > 0 && p.match(d)) {
                        g = g.replace(u, p);
                        var E = h + g;
                        return b = j = b + h.length,
                        {
                            text: E,
                            selectionStart: b,
                            selectionEnd: j
                        }
                    }
                    var S = h + p + g;
                    return b = b + h.length + p.length + g.indexOf(u),
                    j = b + u.length,
                    {
                        text: S,
                        selectionStart: b,
                        selectionEnd: j
                    }
                }
                var T = h + p + g;
                if (b = f + h.length, j = v + h.length, n.trimFirst) {
                    var q = p.match(/^\s*|\s*$/g);
                    t(q, "null.js:397");
                    var A = q[0] || "",
                    M = q[1] || "";
                    T = A + h + p.trim() + g + M,
                    b += A.length,
                    j -= M.length
                }
                return {
                    text: T,
                    selectionStart: b,
                    selectionEnd: j
                }
            }
        } (e, n),
        function(e, t) {
            var n = t.text,
            r = t.selectionStart,
            a = t.selectionEnd,
            o = e.selectionStart,
            s = e.value.slice(0, o),
            c = e.value.slice(e.selectionEnd);
            if (null === bi || !0 === bi) {
                e.contentEditable = "true";
                try {
                    bi = document.execCommand("insertText", !1, n)
                } catch(e) {
                    bi = !1
                }
                e.contentEditable = "false"
            }
            if (bi && !e.value.slice(0, e.selectionStart).endsWith(n) && (bi = !1), !bi) {
                try {
                    document.execCommand("ms-beginUndoUnit")
                } catch(e) {}
                e.value = s + n + c;
                try {
                    document.execCommand("ms-endUndoUnit")
                } catch(e) {}
                i.fire(e, "input")
            }
            null != r && null != a ? e.setSelectionRange(r, a) : e.setSelectionRange(o, e.selectionEnd)
        } (e, a)
    }
    function Le(e) {
        var t = e.value.slice(0, e.selectionStart),
        n = e.value.slice(e.selectionEnd),
        r = t.match(/\n*$/),
        a = n.match(/^\n*/),
        o = r ? r[0].length: 0,
        s = a ? a[0].length: 0,
        i = void 0,
        c = void 0;
        return t.match(/\S/) && o < 2 && (i = be("\n", 2 - o)),
        n.match(/\S/) && s < 2 && (c = be("\n", 2 - s)),
        null == i && (i = ""),
        null == c && (c = ""),
        {
            newlinesToAppend: i,
            newlinesToPrepend: c
        }
    }
    function we(e) {
        var n = e.currentTarget;
        t(n instanceof HTMLButtonElement, "null.js:478"),
        j.deactivate(n.closest(".js-menu-container")),
        xe(n)
    }
    function xe(e) {
        var t = a.closest(e, "markdown-toolbar", gi),
        n = {
            prefix: e.getAttribute("data-prefix") || "",
            suffix: e.getAttribute("data-suffix") || "",
            blockPrefix: e.getAttribute("data-block-prefix") || "",
            blockSuffix: e.getAttribute("data-block-suffix") || "",
            multiline: e.hasAttribute("data-multiline"),
            replaceNext: e.getAttribute("data-replace-next") || "",
            prefixSpace: e.hasAttribute("data-prefix-space"),
            scanFor: e.getAttribute("data-scan-for") || "",
            surroundWithNewlines: e.hasAttribute("data-surround-with-newlines"),
            orderedList: e.hasAttribute("data-ordered-list"),
            trimFirst: e.hasAttribute("data-trim-first")
        };
        t.field.focus(),
        je(t.field, n)
    }
    function ke(e, t) {
        return t && /^[a-z]$/.test(e) ? e.toUpperCase() : e
    }
    function Ee() {
        return Reflect.construct(HTMLElement, [], this.__proto__.constructor)
    }
    function Se(e) {
        var t = e.checkValidity(),
        n = !0,
        r = !1,
        o = void 0;
        try {
            for (var s, i = a.querySelectorAll(e, "button[data-disable-invalid]", HTMLButtonElement)[Symbol.iterator](); ! (n = (s = i.next()).done); n = !0) {
                s.value.disabled = !t
            }
        } catch(e) {
            r = !0,
            o = e
        } finally {
            try { ! n && i.
                return && i.
                return ()
            } finally {
                if (r) throw o
            }
        }
    }
    function Te(e, t) {
        e.closest("label").classList.toggle("selected", t)
    }
    function qe() {
        k(function() {
            if (window.performance.getEntriesByName(Ci).length) {
                window.performance.mark(Ii),
                window.performance.measure(Hi, Ci, Ii);
                var e = window.performance.getEntriesByName(Hi).pop(),
                t = e ? e.duration: null;
                t && (Mi && ue({
                    requestUrl: Mi,
                    pjaxDuration: Math.round(t)
                }), window.performance.clearMarks(Ci), window.performance.clearMarks(Ii), window.performance.clearMeasures(Hi))
            }
        })
    }
    function Ae(e) {
        for (var t = arguments.length,
        n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return n.some(function(t) {
            return e.classList.contains(t)
        })
    }
    function Me(e) {
        t(null != e.parentNode && e.parentNode instanceof HTMLElement, "null.js:10");
        for (var n = e.parentNode.children,
        r = 0; r < n.length; ++r) if (n[r] === e) return r;
        return 0
    }
    function He(e, t) {
        for (var n = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT,
        function(e) {
            return e.nodeName in _i && (function(e) {
                return "IMG" === e.nodeName || null != e.firstChild
            } (e) ||
            function(e) {
                return "INPUT" === e.nodeName && e instanceof HTMLInputElement && "checkbox" === e.type
            } (e)) ? NodeFilter.FILTER_ACCEPT: NodeFilter.FILTER_SKIP
        }), r = [], a = n.nextNode(); a;) a instanceof HTMLElement && r.push(a),
        a = n.nextNode();
        r.reverse();
        var o = !0,
        s = !1,
        i = void 0;
        try {
            for (var c, u = r[Symbol.iterator](); ! (o = (c = u.next()).done); o = !0) t(a = c.value, _i[a.nodeName](a))
        } catch(e) {
            s = !0,
            i = e
        } finally {
            try { ! o && u.
                return && u.
                return ()
            } finally {
                if (s) throw i
            }
        }
    }
    function Ce(t) {
        t = t || window.location;
        return e.getMetadataByName(document, "session-resume-id") || t.pathname
    }
    function Ie(e) {
        var t = "session-resume:" + e,
        n = [],
        r = !0,
        a = !1,
        o = void 0;
        try {
            for (var s, i = document.querySelectorAll(".js-session-resumable")[Symbol.iterator](); ! (r = (s = i.next()).done); r = !0) {
                var c = s.value; (c instanceof HTMLInputElement || c instanceof HTMLTextAreaElement) && n.push(c)
            }
        } catch(e) {
            a = !0,
            o = e
        } finally {
            try { ! r && i.
                return && i.
                return ()
            } finally {
                if (a) throw o
            }
        }
        var u = n.filter(function(e) {
            return function(e) {
                return e.id && e.value !== e.defaultValue && e.form !== Pi
            } (e)
        }).map(function(e) {
            return [e.id, e.value]
        });
        u.length && S.setItem(t, JSON.stringify(u))
    }
    function Re(e) {
        var t = "session-resume:" + e,
        n = S.getItem(t);
        if (n) {
            S.removeItem(t);
            var r = [],
            a = !0,
            o = !1,
            s = void 0;
            try {
                for (var c, u = JSON.parse(n)[Symbol.iterator](); ! (a = (c = u.next()).done); a = !0) {
                    var l = c.value,
                    d = ni(l, 2),
                    m = d[0],
                    f = d[1];
                    if (i.fire(document, "session:resume", {
                        targetId: m,
                        targetValue: f
                    })) {
                        var v = document.getElementById(m);
                        v && (v instanceof HTMLInputElement || v instanceof HTMLTextAreaElement) && v.value === v.defaultValue && (v.value = f, r.push(v))
                    }
                }
            } catch(e) {
                o = !0,
                s = e
            } finally {
                try { ! a && u.
                    return && u.
                    return ()
                } finally {
                    if (o) throw s
                }
            }
            k(function() {
                var e = !0,
                t = !1,
                n = void 0;
                try {
                    for (var a, o = r[Symbol.iterator](); ! (e = (a = o.next()).done); e = !0) {
                        var s = a.value;
                        i.fire(s, "change")
                    }
                } catch(e) {
                    t = !0,
                    n = e
                } finally {
                    try { ! e && o.
                        return && o.
                        return ()
                    } finally {
                        if (t) throw n
                    }
                }
            })
        }
    }
    function _e(e) {
        var t = c(e.currentTarget, HTMLTextAreaElement),
        n = Fe(t);
        if (n.x !== e.clientX || n.y !== e.clientY) {
            var r = t.style.height;
            n.height && n.height !== r && (t.classList.add("is-user-resized"), t.style.maxHeight = "", t.removeEventListener("mousemove", _e)),
            n.height = r
        }
        n.x = e.clientX,
        n.y = e.clientY
    }
    function Fe(e) {
        var t = Ni.get(e) || {};
        return Ni.set(e, t),
        t
    }
    function Pe(e) {
        var n = function(e, n) {
            var r = e.nodeName.toLowerCase();
            if ("textarea" !== r && "input" !== r) throw new Error("expected textField to a textarea or input");
            var a = Bi.get(e);
            if (a && a.parentElement === e.parentElement) a.innerHTML = "";
            else {
                a = document.createElement("div"),
                Bi.set(e, a);
                var o = window.getComputedStyle(e),
                s = Oi.slice(0);
                "textarea" === r ? s.push("white-space:pre-wrap;") : s.push("white-space:nowrap;");
                for (var i = 0,
                c = Di.length; i < c; i++) {
                    var u = Di[i];
                    s.push(u + ":" + o.getPropertyValue(u) + ";")
                }
                a.style.cssText = s.join(" ")
            }
            var l = void 0; ! 1 !== n && ((l = document.createElement("span")).style.cssText = "position: absolute;", l.className = "text-field-mirror-marker", l.innerHTML = "&nbsp;");
            var d = void 0,
            m = void 0;
            if ("number" == typeof n) {
                var f = e.value.substring(0, n);
                f && (d = document.createTextNode(f)),
                (f = e.value.substring(n)) && (m = document.createTextNode(f))
            } else {
                var v = e.value;
                v && (d = document.createTextNode(v))
            }
            return d && a.appendChild(d),
            l && a.appendChild(l),
            m && a.appendChild(m),
            a.parentElement || (t(e.parentElement, "textField must have a parentElement to mirror -- null.js:111"), e.parentElement.insertBefore(a, e)),
            a.scrollTop = e.scrollTop,
            a.scrollLeft = e.scrollLeft,
            a
        } (e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.selectionEnd),
        r = q(n).find(".text-field-mirror-marker").position();
        return r.top += parseInt(q(n).css("border-top-width"), 10),
        r.left += parseInt(q(n).css("border-left-width"), 10),
        setTimeout(function() {
            q(n).remove()
        },
        5e3),
        r
    }
    function Ne(e, t) {
        var n = Ue(e, t);
        if (n && -1 === t.indexOf("/")) {
            n += Ue(e.substring(e.lastIndexOf("/") + 1), t)
        }
        return n
    }
    function Oe(e, t) {
        var n = e[0],
        r = t[0],
        a = e[1],
        o = t[1];
        return a > o ? -1 : a < o ? 1 : n < r ? -1 : n > r ? 1 : 0
    }
    function De(e) {
        var t = e.toLowerCase(),
        n = "+.*?[]{}()^$|\\".replace(/(.)/g, "\\$1"),
        r = new RegExp("\\(([" + n + "])\\)", "g");
        return e = t.replace(/(.)/g, "($1)(.*?)").replace(r, "(\\$1)"),
        new RegExp("(.*)" + e + "$", "i")
    }
    function Be(e, t, n) {
        var r = e.innerHTML.trim();
        if (t) {
            null == n && (n = De(t));
            var a = r.match(n);
            if (!a) return;
            var o = !1;
            r = [];
            var s = void 0,
            i = void 0,
            c = void 0;
            for (s = i = 1, c = a.length; 1 <= c ? i < c: i > c; s = 1 <= c ? ++i: --i) {
                var u = a[s];
                u && (s % 2 == 0 ? o || (r.push("<mark>"), o = !0) : o && (r.push("</mark>"), o = !1), r.push(u))
            }
            e.innerHTML = r.join("")
        } else {
            var l = r.replace(/<\/?mark>/g, "");
            r !== l && (e.innerHTML = l)
        }
    }
    function Ue(e, t) {
        if (e === t) return 1;
        var n = e.length,
        r = 0,
        a = 0,
        o = void 0,
        s = void 0,
        i = void 0;
        for (o = s = 0, i = t.length; s < i; o = ++s) {
            var c = t[o],
            u = e.indexOf(c.toLowerCase()),
            l = e.indexOf(c.toUpperCase()),
            d = Math.min(u, l),
            m = d > -1 ? d: Math.max(u, l);
            if ( - 1 === m) return 0;
            r += .1,
            e[m] === c && (r += .1),
            0 === m && (r += .8, 0 === o && (a = 1)),
            " " === e.charAt(m - 1) && (r += .8),
            e = e.substring(m + 1, n)
        }
        var f = t.length,
        v = r / f,
        p = (v * (f / n) + v) / 2;
        return a && p + .1 < 1 && (p += .1),
        p
    }
    function ze(e, t, n) {
        var r = void 0,
        a = void 0,
        o = void 0,
        s = void 0,
        i = void 0,
        c = void 0,
        u = void 0,
        l = void 0,
        d = void 0,
        m = void 0,
        f = void 0;
        if (null == n && (n = {}), !e) return 0;
        t = t.toLowerCase();
        var v = null != n.content ? n.content: function(e) {
            return e
        },
        p = null != n.text ? n.text: function(e) {
            {
                if (e.hasAttribute("data-filter-value")) {
                    return e.getAttribute("data-filter-value").toLowerCase().trim()
                }
                return e.textContent.toLowerCase().trim()
            }
        },
        h = null != n.score ? n.score: Ne,
        g = n.limit; ! 0 === n.mark ? f = $i: null != n.mark && null != n.mark.call && (f = n.mark);
        var y = Vi.get(e);
        for (y ? r = q(e).children() : (r = y = q(e).children(), Vi.set(e, y.slice(0))), a = 0, u = r.length; a < u; a++) o = r[a],
        e.removeChild(o),
        o.style.display = "";
        var b = document.createDocumentFragment(),
        j = 0,
        L = 0;
        if (t) {
            var w = y.slice(0);
            for (i = 0, d = w.length; i < d; i++) null == (o = w[i]).fuzzyFilterTextCache && (o.fuzzyFilterTextCache = p(v(o))),
            o.fuzzyFilterScoreCache = h(o.fuzzyFilterTextCache, t, o);
            w.sort(We);
            var x = De(t);
            for (c = 0, m = w.length; c < m; c++) {
                if (o = w[c], (null == g || j < g) && o.fuzzyFilterScoreCache > 0) {
                    if (L++, f) {
                        var k = v(o);
                        f(k),
                        f(k, t, x)
                    }
                    b.appendChild(o)
                }
                j++
            }
        } else for (s = 0, l = y.length; s < l; s++) o = y[s],
        (null == g || j < g) && (L++, f && f(v(o)), b.appendChild(o)),
        j++;
        e.appendChild(b);
        var E = e.querySelectorAll(".js-divider");
        for (a = 0; a < E.length; a++) E[a].classList.toggle("d-none", Boolean(t && t.trim().length > 0));
        return L
    }
    function We(e, t) {
        var n = e.fuzzyFilterScoreCache,
        r = t.fuzzyFilterScoreCache,
        a = e.fuzzyFilterTextCache,
        o = t.fuzzyFilterTextCache;
        return n > r ? -1 : n < r ? 1 : a < o ? -1 : a > o ? 1 : 0
    }
    function Ve(e, t) {
        var n = !0,
        r = !1,
        a = void 0;
        try {
            for (var o, s = e[Symbol.iterator](); ! (n = (o = s.next()).done); n = !0) {
                var i = o.value;
                i.setAttribute("aria-label", t),
                i.classList.add("tooltipped", "tooltipped-s", "tooltipped-multiline")
            }
        } catch(e) {
            r = !0,
            a = e
        } finally {
            try { ! n && s.
                return && s.
                return ()
            } finally {
                if (r) throw a
            }
        }
    }
    function $e(e) {
        return new Promise(function(t) {
            function n() {
                e.hasFocus() && (t(), e.removeEventListener("visibilitychange", n), window.removeEventListener("focus", n), window.removeEventListener("blur", n))
            }
            e.addEventListener("visibilitychange", n),
            window.addEventListener("focus", n),
            window.addEventListener("blur", n),
            n()
        })
    }
    function Ke(e) {
        var t = e.getBoundingClientRect(),
        n = window.innerHeight,
        r = window.innerWidth;
        if (0 === t.height) return ! 1;
        if (t.height < n) return t.top >= 0 && t.left >= 0 && t.bottom <= n && t.right <= r;
        var a = Math.ceil(n / 2);
        return t.top >= 0 && t.top + a < n
    }
    function Je(e) {
        var t = !0,
        n = !1,
        r = void 0;
        try {
            for (var a, o = e.elements[Symbol.iterator](); ! (t = (a = o.next()).done); t = !0) {
                var s = a.value;
                Ke(s) ? e. in .call(s, s, e) : e.out && e.out.call(s, s, e)
            }
        } catch(e) {
            n = !0,
            r = e
        } finally {
            try { ! t && o.
                return && o.
                return ()
            } finally {
                if (n) throw r
            }
        }
    }
    function Ge(e, t) {
        var n = {
            id: Gi++,
            selector: e,
            in:t,
            out: null,
            elements: [],
            checkPending: !1,
            scrollHandler: function() { !
                function(e) {
                    document.hasFocus() && window.scrollY !== Xi && (Xi = window.scrollY, e.checkPending || (e.checkPending = !0, window.requestAnimationFrame(function() {
                        e.checkPending = !1,
                        Je(e)
                    })))
                } (n)
            }
        };
        s.observe(e, {
            add: function(e) { !
                function(e, t) {
                    0 === t.elements.length && (window.addEventListener("scroll", t.scrollHandler, {
                        capture: !0,
                        passive: !0
                    }), $e(document).then(function() {
                        return Je(t)
                    })),
                    t.elements.push(e)
                } (e, n)
            },
            remove: function(e) { !
                function(e, t) {
                    var n = t.elements.indexOf(e); - 1 !== n && t.elements.splice(n, 1),
                    0 === t.elements.length && window.removeEventListener("scroll", t.scrollHandler, {
                        capture: !0,
                        passive: !0
                    })
                } (e, n)
            }
        })
    }
    function Xe(e) {
        return e.classList.remove("js-unread-item", "unread-item")
    }
    function Ye() {
        var e = Qi ? "(" + Qi + ") ": "";
        document.title.match(Zi) ? document.title = document.title.replace(Zi, e) : document.title = "" + e + document.title
    }
    function Qe() {
        if (!document.querySelector(":target")) {
            var e = H.decodeFragmentValue(location.hash),
            t = H.findElementByFragmentName(document, "user-content-" + e);
            t && t.scrollIntoView()
        }
    }
    function Ze(e) {
        return e.target.classList.remove("will-transition-once")
    }
    function et() {
        var e = a.query(document, ".js-audit-log-export-status");
        return ac.set(e, e.textContent),
        ec = setInterval(function() {
            var t = nc.slice(0, rc).join("");
            e.textContent = "Exporting" + t,
            rc >= 3 ? rc = 0 : rc += 1
        },
        tc),
        a.query(document, ".js-audit-log-export-button").classList.add("disabled")
    }
    function tt() {
        a.query(document, ".js-audit-log-export-button").classList.remove("disabled");
        var e = a.query(document, ".js-audit-log-export-status");
        e.textContent = ac.get(e) || "",
        null !== ec && clearInterval(ec),
        rc = 0
    }
    function nt() {
        tt();
        var e = document.getElementById("ajax-error-message");
        e && e.classList.add("visible")
    }
    function rt(e) {
        tt(),
        window.location = e
    }
    function at(e) {
        function n() {
            o.classList.remove("is-loading")
        }
        var r = e.form;
        t(r, "null.js:44");
        var o = a.closest(r, ".js-branches"),
        s = o.querySelectorAll(".js-branches-subnav .js-subnav-item"),
        i = o.querySelector(".js-branches-subnav .js-subnav-item.selected"),
        c = a.query(o, ".js-branches-subnav .js-branches-all"),
        u = r.getAttribute("data-results-container");
        oc || (oc = i);
        var l = e.value.trim().length > 0,
        d = function(e) {
            var n = e.form;
            if (t(n, "null.js:23"), e.value.trim()) {
                var r = new URL(n.action, window.location.origin),
                a = new URLSearchParams(r.search.slice(1)),
                o = n.elements.namedItem("utf8");
                return o instanceof HTMLInputElement && a.append("utf8", o.value),
                a.append("query", e.value),
                r.search = a.toString(),
                r.toString()
            }
            var s = n.getAttribute("data-reset-url");
            return t(s, "null.js:38"),
            s
        } (e);
        sc.push(v.fetchSafeDocumentFragment(document, d)).then(function(e) {
            p.replaceState(null, "", d);
            var t = u ? document.getElementById(u) : null;
            t && (t.innerHTML = "", t.appendChild(e))
        }).then(n, n),
        o.classList.toggle("is-search-mode", l),
        o.classList.add("is-loading");
        var m = !0,
        f = !1,
        h = void 0;
        try {
            for (var g, y = s[Symbol.iterator](); ! (m = (g = y.next()).done); m = !0) {
                g.value.classList.remove("selected")
            }
        } catch(e) {
            f = !0,
            h = e
        } finally {
            try { ! m && y.
                return && y.
                return ()
            } finally {
                if (f) throw h
            }
        }
        l ? c.classList.add("selected") : oc && (oc.classList.add("selected"), oc = null)
    }
    function ot(e) {
        var t = a.closest(e, ".js-branch-row").getAttribute("data-branch-name"),
        n = a.closest(e, ".js-branches").querySelectorAll(".js-branch-row");
        return Array.from(n).filter(function(e) {
            return e.getAttribute("data-branch-name") === t
        })
    }
    function st(e) {
        var t = document.querySelector(".js-membership-tabs");
        if (t) {
            var n = e.querySelectorAll(".js-bulk-actions-toggle:checked");
            t.classList.toggle("d-none", n.length > 0)
        }
    }
    function it() {
        dc = document.activeElement,
        document.body && (uc || lc) && document.body.classList.toggle("intent-mouse", mc)
    }
    function ct(e) {
        if (console && console.warn) return console.warn(e)
    }
    function ut(e) {
        var n = e.getAttribute("data-fieldname");
        return t("string" == typeof n, "null.js:12"),
        document.querySelectorAll('span[data-fieldname="' + n + '"]')
    }
    function lt(e, t) {
        if (e.value) {
            var n = !0,
            r = !1,
            a = void 0;
            try {
                for (var o, s = t[Symbol.iterator](); ! (n = (o = s.next()).done); n = !0) {
                    o.value.textContent = e.value
                }
            } catch(e) {
                r = !0,
                a = e
            } finally {
                try { ! n && s.
                    return && s.
                    return ()
                } finally {
                    if (r) throw a
                }
            }
        }
    }
    function dt(e, t, n) {
        var r = a.query(n, ".js-commit-access-submit");
        r.textContent = "branch" === t ? "Create and update " + e: r.getAttribute("data-default") || ""
    }
    function mt(e, t, n) {
        a.query(n, ".js-commit-access-input").classList.toggle("d-none", "branch" !== t),
        dt(e, t, n)
    }
    function ft(e) {
        if (e.target.classList.contains("js-commit-access-radio")) {
            mt(a.query(e.currentTarget, ".js-commit-access-ref").value, e.target.value, e.currentTarget)
        }
    }
    function vt(e) {
        if (e.target.classList.contains("js-commit-access-ref-input")) {
            a.query(e.currentTarget, ".js-commit-access-submit", HTMLButtonElement).setAttribute("disabled", !0),
            gc()
        }
    }
    function pt(e) {
        a.query(e.currentTarget, ".js-dismiss-repository-recommendation").classList.remove("d-none")
    }
    function ht(e) {
        a.query(e.currentTarget, ".js-dismiss-repository-recommendation").classList.add("d-none")
    }
    function gt(e) {
        var t = e.currentTarget,
        n = a.query(t, ".js-hover-popover");
        if (n.classList.remove("d-none"), !n.hasAttribute("data-positioned")) {
            var r = n.clientHeight / 2 - t.clientHeight / 2;
            n.style.left = "-" + (n.clientWidth + 5) + "px",
            n.style.top = "-" + r + "px",
            n.setAttribute("data-positioned", "")
        }
        n.classList.remove("v-hidden")
    }
    function yt(e) {
        var t = e.currentTarget,
        n = a.query(t, ".js-hover-popover");
        n.classList.add("v-hidden"),
        n.classList.add("d-none")
    }
    function bt() {
        wc.length ? Lc || (window.addEventListener("resize", jt, {
            passive: !0
        }), document.addEventListener("scroll", jt, {
            passive: !0
        }), Lc = !0) : (window.removeEventListener("resize", jt, {
            passive: !0
        }), document.removeEventListener("scroll", jt, {
            passive: !0
        }), Lc = !1)
    }
    function jt() {
        wc.forEach(function(e) {
            if (e.element.offsetHeight > 0) {
                var t = e.element,
                n = e.placeholder,
                r = e.top,
                a = t.getBoundingClientRect();
                if (n) {
                    var o = n.getBoundingClientRect();
                    t.classList.contains("is-stuck") ? o.top > parseInt(r) ? wt(e) : function(e) {
                        var t = e.element,
                        n = e.placeholder,
                        r = e.offsetParent,
                        a = e.top;
                        if (n) {
                            var o = t.getBoundingClientRect(),
                            s = n.getBoundingClientRect();
                            if (t.style.left = s.left + "px", t.style.width = s.width + "px", r) {
                                var i = r.getBoundingClientRect();
                                i.bottom < o.height + parseInt(a) && (t.style.top = i.bottom - o.height + "px")
                            }
                        }
                    } (e) : a.top <= parseInt(r) && Lt(e)
                } else a.top <= parseInt(r) ? Lt(e) : wt(e)
            }
        })
    }
    function Lt(e) {
        var t = e.element,
        n = e.placeholder,
        r = e.top;
        if (n) {
            var a = t.getBoundingClientRect();
            t.style.top = r.toString(),
            t.style.left = a.left + "px",
            t.style.width = a.width + "px",
            t.style.marginTop = "0",
            t.style.position = "fixed",
            n.style.display = "block"
        }
        t.classList.add("is-stuck")
    }
    function wt(e) {
        var t = e.element,
        n = e.placeholder;
        n && (t.style.position = "static", t.style.marginTop = n.style.marginTop, n.style.display = "none"),
        t.classList.remove("is-stuck")
    }
    function xt(e) {
        if (function(e) {
            var t = window.getComputedStyle(e).position;
            return /sticky/.test(t)
        } (e)) return null;
        var n = e.previousElementSibling;
        if (n && n.classList.contains("is-placeholder")) return t(n instanceof HTMLElement, "previousElement must be an HTMLElement -- null.js:129"),
        n;
        var r = document.createElement("div");
        return r.style.visibility = "hidden",
        r.style.display = "none",
        r.style.height = window.getComputedStyle(e).height,
        r.className = e.className,
        r.classList.remove("js-sticky"),
        r.classList.add("is-placeholder"),
        t(e.parentNode, "Element must be inserted into the dom -- null.js:142"),
        e.parentNode.insertBefore(r, e)
    }
    function kt(e) {
        var t = e.ownerDocument;
        e.scrollIntoView(),
        t.defaultView.scrollBy(0, -Et(t))
    }
    function Et(e) {
        jt();
        var t = e.querySelectorAll(".js-sticky-offset-scroll");
        return Math.max.apply(Math, ri(Array.from(t).map(function(e) {
            var t = e.getBoundingClientRect(),
            n = t.top,
            r = t.height;
            return 0 === n ? r: 0
        })))
    }
    function St(e) {
        var t = Tt();
        if (t) {
            qt(e, t);
            var n = function(e, t) {
                var n = function(e, t) {
                    var n = /^(diff-[0-9a-f]{32})(?:[L|R]\d+)?$/.exec(t);
                    if (!n) return;
                    var r = n[1],
                    a = e.querySelector("a[name='" + r + "']");
                    if (!a) return;
                    var o = a.nextElementSibling;
                    if (!o.querySelector(".js-diff-load-container")) return;
                    return o
                } (e, t);
                if (n) return n;
                return function(e, t) {
                    var n = /^(?:r|commitcomment-)(\d+)$/.exec(t);
                    if (!n) return;
                    var r = n[1],
                    a = e.querySelector("#diff-with-comment-" + r);
                    if (!a) return;
                    return a.closest(".js-file")
                } (e, t)
            } (e, t);
            n && (kt(n), Mt(n))
        }
    }
    function Tt() {
        return window.location.hash.slice(1)
    }
    function qt(e, t) {
        var n = H.findElementByFragmentName(e.ownerDocument, t);
        n && e.contains(n) && kt(n)
    }
    function At() {
        this.querySelector(".js-diff-progressive-spinner").classList.add("d-none"),
        this.querySelector(".js-diff-progressive-retry").classList.remove("d-none")
    }
    function Mt(e) {
        var t = a.query(e, ".js-diff-entry-loader"),
        n = a.query(e, ".js-diff-placeholder", Element),
        r = a.query(e, "button.js-diff-load", HTMLButtonElement),
        o = a.query(e, ".js-button-text");
        n.setAttribute("fill", "url('#animated-diff-gradient')"),
        o.textContent = r.getAttribute("data-disable-with") || "",
        r.disabled = !0;
        var s = new URL(t.getAttribute("data-fragment-url") || "", window.location.origin);
        return t.src = s.toString(),
        t.data
    }
    function Ht() {
        this.querySelector(".js-diff-load-button-container").classList.add("d-none"),
        this.querySelector(".js-diff-load-retry").classList.remove("d-none")
    }
    function Ct() {
        this.setAttribute("data-url", this.src),
        this.removeAttribute("src")
    }
    function It(e) {
        e.src = e.getAttribute("data-url"),
        e.removeAttribute("data-url")
    }
    function Rt() {
        Et(document) &&
        function(e) {
            var t = H.findFragmentTarget(e);
            t && kt(t)
        } (document)
    }
    function _t() {
        var e = document.querySelector(".js-get-repo-modal");
        if (e) {
            e.classList.remove("is-downloading");
            var t = !0,
            n = !1,
            r = void 0;
            try {
                for (var a, o = e.querySelectorAll(".js-modal-download-mac, .js-modal-download-windows, .js-modal-download-xcode, .js-modal-download-visual-studio")[Symbol.iterator](); ! (t = (a = o.next()).done); t = !0) {
                    var s = a.value;
                    s.classList.remove("d-block"),
                    s.classList.add("d-none")
                }
            } catch(e) {
                n = !0,
                r = e
            } finally {
                try { ! t && o.
                    return && o.
                    return ()
                } finally {
                    if (n) throw r
                }
            }
        }
    }
    function Ft(e) {
        var t = document.querySelectorAll(e);
        if (t.length > 0) return t[t.length - 1]
    }
    function Pt() {
        return function() {
            var e = Ft("meta[name=analytics-location]");
            return e ? e.content: window.location.pathname
        } () +
        function() {
            var e = "";
            Ft("meta[name=analytics-location-query-strip]") || (e = window.location.search);
            var t = Ft("meta[name=analytics-location-params]");
            t && (e += (e ? "&": "?") + t.content);
            var n = !0,
            r = !1,
            a = void 0;
            try {
                for (var o, s = document.querySelectorAll("meta[name=analytics-param-rename]")[Symbol.iterator](); ! (n = (o = s.next()).done); n = !0) {
                    var i = o.value,
                    u = c(i, HTMLMetaElement).content.split(":", 2);
                    e = e.replace(new RegExp("(^|[?&])" + u[0] + "($|=)", "g"), "$1" + u[1] + "$2")
                }
            } catch(e) {
                r = !0,
                a = e
            } finally {
                try { ! n && s.
                    return && s.
                    return ()
                } finally {
                    if (r) throw a
                }
            }
            return e
        } ()
    }
    function Nt() {
        var e = window.location.protocol + "//" + window.location.host + Pt();
        R.setGlobalLocation(e),
        R.setGlobalTitle(Ft("meta[name=analytics-location]") ? "(masked)": document.title);
        var t = Ft("meta[name=analytics-ec-payload]");
        t && Ot(t.content);
        var n = S.getItem("ga-deferred");
        n && (Ot(n), S.removeItem("ga-deferred"));
        var r = !0,
        a = !1,
        o = void 0;
        try {
            for (var s, i = document.querySelectorAll("meta.js-ga-set")[Symbol.iterator](); ! (r = (s = i.next()).done); r = !0) {
                var u = s.value,
                l = c(u, HTMLMetaElement);
                R.setDimension(l.name, l.content)
            }
        } catch(e) {
            a = !0,
            o = e
        } finally {
            try { ! r && i.
                return && i.
                return ()
            } finally {
                if (a) throw o
            }
        }
    }
    function Ot(e) {
        if (e) {
            var t = !0,
            n = !1,
            r = void 0;
            try {
                for (var a, o = JSON.parse(e)[Symbol.iterator](); ! (t = (a = o.next()).done); t = !0) {
                    var s = a.value;
                    window.ga.apply(null, s)
                }
            } catch(e) {
                n = !0,
                r = e
            } finally {
                try { ! t && o.
                    return && o.
                    return ()
                } finally {
                    if (n) throw r
                }
            }
        }
    }
    function Dt() {
        var e = !0,
        t = !1,
        n = void 0;
        try {
            for (var r, a = document.querySelectorAll("meta[name=analytics-virtual-pageview]")[Symbol.iterator](); ! (e = (r = a.next()).done); e = !0) {
                var o = r.value;
                R.trackPageview(c(o, HTMLMetaElement).content, {
                    title: ""
                })
            }
        } catch(e) {
            t = !0,
            n = e
        } finally {
            try { ! e && a.
                return && a.
                return ()
            } finally {
                if (t) throw n
            }
        }
        R.trackPageview()
    }
    function Bt(e) {
        var t = e.trim().split(/\s*,\s*/);
        return {
            category: t[0],
            action: t[1],
            label: t[2],
            value: t[3]
        }
    }
    function Ut(e) {
        if (window._octo) {
            var t = Math.floor((new Date).getTime() / 1e3);
            e.timestamp = t;
            if (document.head && document.head.querySelector('meta[name="octolytics-event-url"]')) {
                var n = a.query(document.head, 'meta[name="octolytics-event-url"]', HTMLMetaElement).content;
                g.guaranteedPost(n, JSON.stringify(e), "application/vnd.github-octolytics+json")
            }
        }
    }
    function zt() {
        Sc && (Sc.style.display = "none", Sc.children[0].innerHTML = "", Ac = null, qc = null)
    }
    function Wt(e, t, n) {
        if (Sc) {
            var r = Sc.children[0],
            o = t.getBoundingClientRect().width / 2 - Hc;
            r.style.left = o + "px",
            r.innerHTML = "";
            var s = !0,
            c = !1,
            u = void 0;
            try {
                for (var l, d = e.children[Symbol.iterator](); ! (s = (l = d.next()).done); s = !0) {
                    var m = l.value;
                    r.appendChild(m.cloneNode(!0))
                }
            } catch(e) {
                c = !0,
                u = e
            } finally {
                try { ! s && d.
                    return && d.
                    return ()
                } finally {
                    if (c) throw u
                }
            }
            if (n) {
                var f = r.querySelector(".js-hovercard-highlight");
                f && (f.innerHTML = n, f.classList.remove("d-none"))
            }
            r.classList.toggle("has-hovercard-highlight", n),
            function(e, t) {
                if (Sc) {
                    Sc.style.visibility = "hidden",
                    Sc.style.display = "block";
                    var n = Sc.getBoundingClientRect(),
                    r = n.width,
                    a = n.height,
                    o = e.getBoundingClientRect(),
                    s = o.x,
                    i = o.y,
                    c = o.height,
                    u = i > a,
                    l = window.innerWidth - s > r,
                    d = l ? s: s - r + 2 * Hc,
                    m = u ? i - a: i + c;
                    Sc.style.top = m + window.pageYOffset + "px",
                    Sc.style.left = d + window.pageXOffset + "px",
                    t.classList.toggle("Popover-message--bottom-left", u && l),
                    t.classList.toggle("Popover-message--bottom-right", u && !l),
                    t.classList.toggle("Popover-message--top-left", !u && l),
                    t.classList.toggle("Popover-message--top-right", !u && !l),
                    Sc.style.visibility = ""
                }
            } (t, r),
            function(e) {
                var t = qc;
                setTimeout(function() {
                    if (qc === t) {
                        var n = a.query(e, "[data-hovercard-tracking]").getAttribute("data-hovercard-tracking");
                        if (n) {
                            var r = {};
                            r.event_type = "user-hovercard-load",
                            r.dimensions = JSON.parse(n),
                            Ut(r)
                        }
                        var o = a.query(e, "[data-hydro-view]");
                        i.fire(o, "view")
                    }
                },
                500)
            } (r),
            Sc.style.display = "block"
        }
    }
    function Vt(e) {
        if (qc) {
            e.relatedTarget && (e.relatedTarget.closest(".js-hovercard-content") || e.relatedTarget.closest("[data-hovercard-user-id]")) || (e instanceof KeyboardEvent && Ac && Ac.focus(), zt())
        }
    }
    function $t(e) {
        var t = qc;
        Mc = setTimeout(function() {
            qc === t && Vt(e)
        },
        100)
    }
    function Kt(e) {
        switch (e.key) {
        case "h":
        case "H":
            Ec(e);
            break;
        case "Escape":
            Vt(e)
        }
    }
    function Jt() {
        Mc && clearTimeout(Mc)
    }
    function Gt(n, r) {
        var a = Math.floor((new Date).getTime() / 1e3),
        o = e.getMetadataByName(document, "hydro-events-url");
        t(o, "hydro-events-url not found -- null.js:12");
        var s = new URL(o);
        s.searchParams.append("timestamp", a.toString()),
        s.searchParams.append("hmac", r),
        g.guaranteedPost(s.toString(), n, "application/json")
    }
    function Xt(e) {
        var t = new FormData,
        n = e.getAttribute("data-authenticity-token"),
        r = a.closest(e, ".js-bookmark-toggler-container"),
        o = a.query(document, ".js-bookmarking-error"),
        s = a.query(o, ".js-bookmarking-error-message");
        return t.append("authenticity_token", n),
        r.classList.toggle("on"),
        v.fetch(e.getAttribute("data-url"), {
            method: "post",
            body: t
        }).
        catch(function(e) {
            if (e.response) return r.classList.toggle("on"),
            o.classList.add("visible"),
            e.response.json().then(function(e) {
                s.textContent = e.error
            })
        }).
        catch(function() {
            r.classList.toggle("on"),
            o.classList.add("visible"),
            s.textContent = "Something went wrong."
        })
    }
    function Yt(e) {
        var t = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(function(e) {
            return String(e).toLowerCase().replace(/[^0-9a-f]/g, "")
        } (e));
        if (t) {
            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
        }
    }
    function Qt(e, t) {
        var n = function(e) {
            var t = Yt(e);
            if (t) return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3
        } (t);
        null != n && (n < 150 ? (e.classList.remove("text-gray-dark"), e.classList.add("text-white")) : (e.classList.remove("text-white"), e.classList.add("text-gray-dark")))
    }
    function Zt(e, t) {
        var n = t;
        "#" !== n.charAt(0) && (n = "#" + n),
        e.style.backgroundColor = n;
        var r = e.querySelector(".js-new-label-color-icon");
        r && Qt(r, t)
    }
    function en() {
        var e = document.querySelector(".js-discussion-sidebar-item.sidebar-labels");
        if (e) {
            var t = document.querySelector(".js-issue-sidebar-form .js-filterable-issue-labels");
            if (t) {
                var n = Rc.get(e);
                if (n) {
                    var r = Object.keys(n),
                    o = !0,
                    s = !1,
                    c = void 0;
                    try {
                        for (var u, l = a.querySelectorAll(t, 'input[type="checkbox"][name="issue[labels][]"]', HTMLInputElement)[Symbol.iterator](); ! (o = (u = l.next()).done); o = !0) {
                            var d = u.value,
                            m = d.value;
                            if (r.indexOf(m) > -1) {
                                d.checked = n[m];
                                var f = a.closest(d, ".js-navigation-item");
                                f.classList.toggle("selected", d.checked),
                                i.fire(f, "selectmenu:selected")
                            }
                        }
                    } catch(e) {
                        s = !0,
                        c = e
                    } finally {
                        try { ! o && l.
                            return && l.
                            return ()
                        } finally {
                            if (s) throw c
                        }
                    }
                    Rc.delete(e)
                }
            }
        }
    }
    function tn(e, t) {
        e.blur();
        var n = a.closest(e, "form");
        a.query(n, ".js-new-label-color-input", HTMLInputElement).value = t;
        Zt(a.query(n, ".js-new-label-color", HTMLButtonElement), t)
    }
    function nn(e) {
        var t = Array.from(e.querySelectorAll(".js-navigation-item")).filter(function(e) {
            return "" === e.style.display
        });
        if (! (t.length > 2) && t.every(function(e) {
            return e.classList.contains("js-label-options")
        })) {
            var n = t.filter(function(e) {
                return e.classList.contains("js-add-label-button")
            })[0];
            if (n) {
                var r = !0,
                a = !1,
                o = void 0;
                try {
                    for (var s, i = e.querySelectorAll(".navigation-focus")[Symbol.iterator](); ! (r = (s = i.next()).done); r = !0) {
                        s.value.classList.remove("navigation-focus")
                    }
                } catch(e) {
                    a = !0,
                    o = e
                } finally {
                    try { ! r && i.
                        return && i.
                        return ()
                    } finally {
                        if (a) throw o
                    }
                }
                n.classList.add("navigation-focus")
            }
        }
    }
    function rn(e) {
        var t = function(e) {
            return e.hasAttribute("data-maxlength") ? parseInt(e.getAttribute("data-maxlength")) : e.maxLength
        } (e); !
        function(e, t, n) {
            var r = n.closest(".js-label-characters-remaining-container");
            if (r) {
                var o = a.query(r, ".js-label-characters-remaining"),
                s = String(o.getAttribute("data-suffix")),
                i = t - F.getUtf8StringLength(e);
                i <= 20 ? (o.textContent = i + " " + s, o.classList.toggle("text-red", i <= 5), o.classList.remove("d-none")) : o.classList.add("d-none")
            }
        } (e.value, t, e)
    }
    function an(e, t, n) {
        var r = t.querySelector(e);
        r && (n ?
        function(e, t) {
            a.closest(e, ".js-label-error-container").classList.add("errored"),
            e.textContent = t,
            e.classList.remove("d-none")
        } (r, n[0]) : function(e) {
            a.closest(e, ".js-label-error-container").classList.remove("errored"),
            e.classList.add("d-none")
        } (r))
    }
    function on(e, t) {
        an(".js-label-name-error", e, t.name),
        an(".js-label-description-error", e, t.description),
        an(".js-label-color-error", e, t.color)
    }
    function sn(e) {
        an(".js-label-name-error", e, null),
        an(".js-label-description-error", e, null),
        an(".js-label-color-error", e, null)
    }
    function cn(e) {
        var t = e.querySelectorAll(".js-label-characters-remaining-container"),
        n = !0,
        r = !1,
        o = void 0;
        try {
            for (var s, i = t[Symbol.iterator](); ! (n = (s = i.next()).done); n = !0) {
                var c = s.value;
                rn(a.query(c, ".js-label-characters-remaining-field", HTMLInputElement))
            }
        } catch(e) {
            r = !0,
            o = e
        } finally {
            try { ! n && i.
                return && i.
                return ()
            } finally {
                if (r) throw o
            }
        }
    }
    function un(e, t) {
        a.closest(e, ".js-details-container").classList.toggle("is-empty", t)
    }
    function ln(e) {
        var t = a.query(document, ".js-labels-count"),
        n = _.parseFormattedNumber(t.textContent) + e;
        t.textContent = _.formatNumber(n);
        var r = a.query(document, ".js-labels-label");
        return P.pluralizeNode(n, r),
        n
    }
    function dn() {
        return document.querySelector(".js-issue-sidebar-form .js-issue-labels-container .js-menu-container") || document.querySelector(".js-issue-sidebar-form .js-new-issue-labels-container .js-menu-container")
    }
    function mn() {
        var e = dn();
        e && j.activate(e)
    }
    function fn(e) {
        var t = document.querySelector(".js-discussion-sidebar-item.sidebar-labels");
        if (t) {
            var n = 'input[type="checkbox"][name="issue[labels][]"][data-label-name="' + e.replace(/"/g, '\\"') + '"]',
            r = document.querySelector(n);
            if (r instanceof HTMLInputElement) {
                var a = r.value,
                o = Rc.get(t) || {};
                o[a] = !0,
                Rc.set(t, o)
            }
        }
    }
    function vn() {
        var e = document.getElementById("ajax-error-message");
        e && e.classList.add("visible")
    }
    function pn() {
        var e = document.getElementById("ajax-error-message");
        e && e.classList.remove("visible")
    }
    function hn(e, n) {
        var r = Bc.get(e);
        r || (r = new f, Bc.set(e, r)),
        n.append("authenticity_token",
        function(e) {
            var n = e.getAttribute("data-autocheck-authenticity-token");
            if (n) return n;
            var r = e.form;
            t(r, "null.js:34");
            var a = r.querySelector("input[name=authenticity_token]");
            if (a instanceof HTMLInputElement) return a.value;
            throw new Error("csrf token not found")
        } (e));
        var a = e.getAttribute("data-autocheck-url");
        return t(a, "null.js:56"),
        r.push(v.fetchText(a, {
            method: "post",
            body: n
        }))
    }
    function gn(e) {
        e.classList.remove("errored", "successed", "warn");
        var t = e.querySelector("p.note");
        t && t.classList.remove("d-none");
        var n = e.querySelector("dd.error");
        n && n.remove();
        var r = e.querySelector("dd.warning");
        r && r.remove()
    }
    function yn(e) {
        var t = new FormData;
        t.append("value", e.value),
        i.fire(e, "autocheck:send", {
            body: t
        });
        var n = function(e) {
            return e.entries ? [].concat(ri(e.entries())).sort().toString() : null
        } (t);
        if (!n || n !== Uc.get(e)) return Uc.set(e, n),
        t
    }
    function bn(e) {
        Nc(e)
    }
    function jn(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function Ln(e) {
        var t = e.getAttribute("data-item-name") || "items",
        n = parseInt(e.getAttribute("data-item-minimum")) || 0,
        r = parseInt(e.getAttribute("data-item-count")) || 0,
        a = Math.max(n, parseInt(e.value) || 0),
        o = a > 300,
        s = document.querySelector(".js-purchase-button");
        s instanceof HTMLButtonElement && (s.disabled = 0 === a || o);
        var i = document.querySelector(".js-downgrade-button");
        i instanceof HTMLButtonElement && (i.disabled = a === r);
        var c = new URL(e.getAttribute("data-url"), window.location.origin),
        u = new URLSearchParams(c.search.slice(1));
        u.append(t, a.toString()),
        c.search = u.toString(),
        Wc.push(v.fetchJSON(c)).then(function(e) {
            var t = document.querySelector(".js-contact-us");
            t && t.classList.toggle("d-none", !o);
            var n = document.querySelector(".js-payment-summary");
            n && n.classList.toggle("d-none", o);
            var r = document.querySelector(".js-billing-section");
            r && r.classList.toggle("has-removed-contents", e.free);
            var s = document.querySelector(".js-upgrade-info");
            s && s.classList.toggle("d-none", a <= 0);
            var i = document.querySelector(".js-downgrade-info");
            i && i.classList.toggle("d-none", a >= 0);
            var c = document.querySelector(".js-extra-seats-line-item");
            c && c.classList.toggle("d-none", e.no_additional_seats);
            var u = e.selectors;
            for (var l in u) {
                var d = !0,
                m = !1,
                f = void 0;
                try {
                    for (var v, h = document.querySelectorAll(l)[Symbol.iterator](); ! (d = (v = h.next()).done); d = !0) v.value.textContent = u[l]
                } catch(e) {
                    m = !0,
                    f = e
                } finally {
                    try { ! d && h.
                        return && h.
                        return ()
                    } finally {
                        if (m) throw f
                    }
                }
            }
            return p.replaceState(U.getState(), "", e.url)
        })
    }
    function wn() {
        var e = void 0,
        t = void 0,
        n = void 0,
        r = function() {
            try {
                return localStorage.getItem("bundle-urls")
            } catch(e) {}
        } ();
        r && (t = function() {
            try {
                return JSON.parse(r)
            } catch(e) {}
        } ()),
        null == t && (t = {});
        var a = function() {
            var e = void 0,
            t = void 0,
            n = void 0,
            r = void 0,
            a = void 0,
            o = void 0,
            s = {},
            i = q("script");
            for (t = 0, r = i.length; t < r; t++) {
                var c = i[t];
                null != (o = c.src.match(/\/([\w-]+)-[0-9a-f]{64}\.js$/)) && (e = o[1], s[e + ".js"] = c.src)
            }
            var u = q("link[rel=stylesheet]");
            for (n = 0, a = u.length; n < a; n++) {
                var l = u[n];
                null != (o = l.href.match(/\/([\w-]+)-[0-9a-f]{64}\.css$/)) && (e = o[1], s[e + ".css"] = l.href)
            }
            return s
        } ();
        try {
            localStorage.setItem("bundle-urls", JSON.stringify(a))
        } catch(e) {}
        var o = function() {
            var r = [];
            for (e in a) n = a[e],
            t[e] !== n && r.push(e);
            return r
        } ();
        o.length && ue({
            downloadedBundles: o
        })
    }
    function xn(e) {
        var t = getSelection();
        if (null != t) {
            t.removeAllRanges();
            var n = document.createRange();
            n.selectNodeContents(e),
            t.addRange(n),
            document.execCommand("copy"),
            t.removeAllRanges()
        }
    }
    function kn(e) {
        var n = document.body;
        t(n, "null.js:35");
        var r = function(e) {
            var t = document.createElement("pre");
            return t.style.width = "1px",
            t.style.height = "1px",
            t.style.position = "fixed",
            t.style.top = "5px",
            t.textContent = e,
            t
        } (e);
        n.appendChild(r),
        xn(r),
        n.removeChild(r)
    }
    function En(e) {
        var t = e.querySelector(".js-comment-form-error");
        t && (t.style.display = "none")
    }
    function Sn(e) {
        var t = e.closest(".js-previewable-comment-form"),
        n = e.classList.contains("js-preview-tab");
        if (n) {
            var r = t.querySelector(".js-write-bucket");
            t.querySelector(".js-preview-body").style.minHeight = q(r).height() + "px"
        }
        t.classList.toggle("preview-selected", n),
        t.classList.toggle("write-selected", !n);
        var a = t.querySelector(".tabnav-tab.selected");
        a.setAttribute("aria-selected", !1),
        a.classList.remove("selected"),
        e.classList.add("selected"),
        e.setAttribute("aria-selected", !0);
        var o = t.querySelector(".js-write-tab");
        return n ? o.setAttribute("data-hotkey", "Control+P,Meta+P") : o.removeAttribute("data-hotkey"),
        Promise.resolve(t)
    }
    function Tn(e) {
        var t = e.querySelector(".js-comment-field"),
        n = e.querySelector(".comment-body");
        Vc(e, t.value).then(function(e) {
            n.innerHTML = e || "<p>Nothing to preview</p>"
        }),
        Jc || (n.innerHTML = "<p>Loading preview&hellip;</p>")
    }
    function qn(e) {
        return e instanceof HTMLInputElement ? e.value || "Submit": e.innerHTML || ""
    }
    function An(e, t) {
        e instanceof HTMLInputElement ? e.value = t: e.innerHTML = t
    }
    function Mn(e) {
        var n = !0,
        r = !1,
        a = void 0;
        try {
            for (var o, s = e.querySelectorAll(Xc)[Symbol.iterator](); ! (n = (o = s.next()).done); n = !0) {
                var i = o.value,
                c = Gc.get(i);
                null != c && (t(i instanceof HTMLInputElement || i instanceof HTMLButtonElement, "null.js:58"), An(i, c), i.hasAttribute("data-disable-invalid") && !e.checkValidity() || (i.disabled = !1), Gc.delete(i))
            }
        } catch(e) {
            r = !0,
            a = e
        } finally {
            try { ! n && s.
                return && s.
                return ()
            } finally {
                if (r) throw a
            }
        }
    }
    function Hn() {
        var e = window.location.hash.slice(1);
        if (e) {
            var t = !0,
            n = !1,
            r = void 0;
            try {
                for (var a, o = document.querySelectorAll("[data-hashchange-activated]")[Symbol.iterator](); ! (t = (a = o.next()).done); t = !0) {
                    var s = a.value;
                    if (s.getAttribute("data-hashchange-activated") === e) return s
                }
            } catch(e) {
                n = !0,
                r = e
            } finally {
                try { ! t && o.
                    return && o.
                    return ()
                } finally {
                    if (n) throw r
                }
            }
        }
    }
    function Cn(e, t) {
        var n = e.innerHTML;
        if (t) {
            var r = new RegExp(t, "i");
            e.innerHTML = n.replace(r, "<mark>$&</mark>")
        } else {
            var a = n.replace(/<\/?mark>/g, "");
            n !== a && (e.innerHTML = a)
        }
    }
    function In(e, t) {
        var n = e.innerHTML;
        if (t) {
            var r = new RegExp(t, "i");
            e.innerHTML = n.replace(r, "<mark>$&</mark>")
        } else {
            var a = n.replace(/<\/?mark>/g, "");
            n !== a && (e.innerHTML = a)
        }
    }
    function Rn(e) {
        return Yc.has(e)
    }
    function _n(e, n, r) {
        function o(e) {
            var t = !(null != s && y >= s) &&
            function(e) {
                return (e.login + " " + e.name).toLowerCase().trim()
            } (e).indexOf(n) >= 0;
            if (t || e.selected) {
                var r = function(e, t, n) {
                    if (null != e.element) return e.element;
                    var r = t.content.cloneNode(!0),
                    o = a.query(r, "input[type=checkbox]", HTMLInputElement);
                    e.type && (o.name = "reviewer_" + e.type + "_ids[]");
                    o.value = e.id;
                    var s = "" + o.name + e.id,
                    i = e.selected;
                    n[s] && (i = !0, n[s].remove(), delete n[s]);
                    var c = a.query(r, ".js-navigation-item");
                    i && (c.classList.add("selected"), o.checked = !0);
                    e.disabled && c.classList.add("disabled");
                    var u = r.querySelector(".js-username");
                    u && (u.textContent = e.login);
                    var l = r.querySelector(".js-description");
                    l && (l.textContent = e.name);
                    var d = r.querySelector(".js-extended-description");
                    d && (e.description ? d.textContent = e.description: d.remove());
                    return a.query(r, ".js-avatar", HTMLImageElement).src = e.avatar,
                    e.element = c,
                    e.element
                } (e, i, c);
                r.classList.toggle("d-none", !t),
                t && y++,
                b.appendChild(r)
            }
        }
        var s = r.limit,
        i = a.query(e, "template", HTMLTemplateElement),
        c = {},
        u = !0,
        l = !1,
        d = void 0;
        try {
            for (var m, f = a.querySelectorAll(e, "input[type=hidden]", HTMLInputElement)[Symbol.iterator](); ! (u = (m = f.next()).done); u = !0) {
                var v = m.value;
                c["" + v.name + v.value] = v
            }
        } catch(e) {
            l = !0,
            d = e
        } finally {
            try { ! u && f.
                return && f.
                return ()
            } finally {
                if (l) throw d
            }
        }
        for (var p = i.nextElementSibling; p;) {
            var h = p;
            p = h.nextElementSibling,
            h.classList.contains("selected") || h.classList.contains("select-menu-divider") ? h.classList.add("d-none") : h.remove()
        }
        var g = Yc.get(e);
        t(null != g, "null.js:51");
        var y = 0,
        b = document.createDocumentFragment(),
        j = e.querySelector(".js-divider-suggestions"),
        L = e.querySelector(".js-divider-rest");
        if (j && g.suggestions) {
            var w = !0,
            x = !1,
            k = void 0;
            try {
                for (var E, S = g.suggestions[Symbol.iterator](); ! (w = (E = S.next()).done); w = !0) {
                    o(E.value)
                }
            } catch(e) {
                x = !0,
                k = e
            } finally {
                try { ! w && S.
                    return && S.
                    return ()
                } finally {
                    if (x) throw k
                }
            }
            b.childNodes.length && (j.after(b), j.classList.toggle("d-none", 0 === y), b = document.createDocumentFragment())
        }
        var T = y,
        q = !0,
        A = !1,
        M = void 0;
        try {
            for (var H, C = g.users[Symbol.iterator](); ! (q = (H = C.next()).done); q = !0) {
                o(H.value)
            }
        } catch(e) {
            A = !0,
            M = e
        } finally {
            try { ! q && C.
                return && C.
                return ()
            } finally {
                if (A) throw M
            }
        }
        return e.append(b),
        L && L.classList.toggle("d-none", y === T || 0 === T),
        y
    }
    function Fn(e, t) {
        var n = e.hasAttribute("data-filterable-highlight"),
        r = e.getAttribute("data-filterable-limit"),
        a = 0;
        switch (e.getAttribute("data-filterable-type")) {
        case "fuzzy":
            a = ze(e, t, {
                mark: n,
                limit: r
            });
            break;
        case "substring":
            a = function(e, t, n) {
                var r = void 0;
                if (null == n && (n = {}), e) {
                    t = t.toLowerCase();
                    var a = null != n.text ? n.text: function(e) {
                        return e.textContent.toLowerCase().trim()
                    },
                    o = n.limit,
                    s = Array.from(e.children).filter(function(e) {
                        return ! e.classList.contains("select-menu-no-results")
                    }); ! 0 === n.mark ? r = In: "function" == typeof n.mark && (r = n.mark);
                    var i = 0,
                    c = !0,
                    u = !1,
                    l = void 0;
                    try {
                        for (var d, m = s[Symbol.iterator](); ! (c = (d = m.next()).done); c = !0) {
                            var f = d.value; - 1 !== a(f).indexOf(t) ? null != o && i >= o ? f.style.display = "none": (i++, f.style.display = "", r && (r(f), r(f, t))) : f.style.display = "none"
                        }
                    } catch(e) {
                        u = !0,
                        l = e
                    } finally {
                        try { ! c && m.
                            return && m.
                            return ()
                        } finally {
                            if (u) throw l
                        }
                    }
                    return i
                }
            } (e, t, {
                mark: n,
                limit: r
            });
            break;
        case "substring-memory":
            a = _n(e, t, {
                limit: r
            });
            break;
        default:
            a = function(e, t, n) {
                var r = void 0,
                a = void 0,
                o = void 0;
                if (null == n && (n = {}), e) {
                    t = t.toLowerCase();
                    var s = null != n.text ? n.text: function(e) {
                        return e.textContent.toLowerCase().trim()
                    },
                    i = q(e).children(),
                    c = n.limit; ! 0 === n.mark ? o = Cn: null != n.mark && null != n.mark.call && (o = n.mark);
                    var u = 0;
                    for (r = 0, a = i.length; r < a; r++) {
                        var l = i[r];
                        0 === s(l).indexOf(t) ? null != c && u >= c ? l.style.display = "none": (u++, l.style.display = "", o && (o(l), o(l, t))) : l.style.display = "none"
                    }
                    return u
                }
            } (e, t, {
                mark: n,
                limit: r
            })
        }
        e.classList.toggle("filterable-active", t.length > 0),
        e.classList.toggle("filterable-empty", 0 === a)
    }
    function Pn() {
        var e = this.getAttribute("data-url");
        if (e) {
            var t = v.fetchJSON(e),
            n = this.getAttribute("data-id"),
            r = this.textContent,
            a = document.querySelectorAll(".js-issue-link[data-id='" + n + "']"),
            o = !0,
            s = !1,
            i = void 0;
            try {
                for (var c, u = a[Symbol.iterator](); ! (o = (c = u.next()).done); o = !0) {
                    c.value.removeAttribute("data-url")
                }
            } catch(e) {
                s = !0,
                i = e
            } finally {
                try { ! o && u.
                    return && u.
                    return ()
                } finally {
                    if (s) throw i
                }
            }
            var l = function(e) {
                return function(t) {
                    var n = (null != t.response ? t.response.status: void 0) || 500,
                    r = function() {
                        switch (n) {
                        case 404:
                            return this.getAttribute("data-permission-text");
                        default:
                            return this.getAttribute("data-error-text")
                        }
                    }.call(e);
                    return Nn(a, r)
                }
            } (this);
            return t.then(function(e) {
                return Nn(a, r + ", " + e.title)
            },
            l)
        }
    }
    function Nn(e, t) {
        var n = !0,
        r = !1,
        a = void 0;
        try {
            for (var o, s = e[Symbol.iterator](); ! (n = (o = s.next()).done); n = !0) {
                var i = o.value;
                i.classList.add("tooltipped"),
                i.classList.add("tooltipped-ne"),
                i.setAttribute("aria-label", t)
            }
        } catch(e) {
            r = !0,
            a = e
        } finally {
            try { ! n && s.
                return && s.
                return ()
            } finally {
                if (r) throw a
            }
        }
    }
    function On(e) {
        return null == e.getAttribute("data-pjax-preserve-scroll") && 0
    }
    function Dn(e) {
        var t = q(e),
        n = t.add(t.parents("[data-pjax]")).map(function() {
            var e = this.getAttribute("data-pjax");
            if (null != e && "true" !== e) return e
        })[0];
        return n ? document.querySelector(n) : q(e).closest("[data-pjax-container]")[0]
    }
    function Bn(e, t) {
        return e.split("/", 3).join("/") === t.split("/", 3).join("/")
    }
    function Un(e, t) {
        var n = e.fuzzyFilterScoreCache,
        r = t.fuzzyFilterScoreCache,
        a = e.fuzzyFilterTextCache,
        o = t.fuzzyFilterTextCache;
        return n > r ? -1 : n < r ? 1 : a < o ? -1 : a > o ? 1 : 0
    }
    function zn(e, t, n) {
        var r = n[3],
        a = n[4];
        return {
            type: e,
            text: r,
            query: a,
            startIndex: t - a.length,
            endIndex: t
        }
    }
    function Wn(e) {
        var t = e.getAttribute("data-emoji-name");
        return nu[t] = " " + Vn(e).replace(/_/g, " "),
        t
    }
    function Vn(e) {
        return e.getAttribute("data-text").trim().toLowerCase()
    }
    function $n(e, t) {
        var n = e.indexOf(t);
        return - 1 === n ? 0 : 1 / (n + 1)
    }
    function Kn(e, t) {
        var n = nu[e].indexOf(t);
        return n > -1 ? 1e3 - n: 0
    }
    function Jn() {
        return 2
    }
    function Gn(e) {
        var t = void 0;
        if (e) {
            var n = e.toLowerCase().split("");
            t = function(t) {
                if (!t) return 0;
                var r = function(e, t) {
                    var n = void 0,
                    r = void 0,
                    a = void 0,
                    o = void 0,
                    s = function(e, t) {
                        for (var n = 0,
                        r = []; (n = e.indexOf(t, n)) > -1;) r.push(n++);
                        return r
                    } (e, t[0]);
                    if (0 !== s.length) {
                        if (1 === t.length) return [s[0], 1, []];
                        for (o = null, r = 0, a = s.length; r < a; r++) {
                            var i = s[r];
                            if (n = function(e, t, n) {
                                var r = void 0,
                                a = void 0,
                                o = void 0,
                                s = [];
                                for (r = a = 1, o = t.length; 1 <= o ? a < o: a > o; r = 1 <= o ? ++a: --a) {
                                    if ( - 1 === (n = e.indexOf(t[r], n))) return;
                                    s.push(n++)
                                }
                                return s
                            } (e, t, i + 1)) {
                                var c = n[n.length - 1] - i; (!o || c < o[1]) && (o = [i, c, n])
                            }
                        }
                        return o
                    }
                } (t, n);
                if (!r) return 0;
                var a = e.length / r[1];
                return a /= r[0] / 2 + 1
            }
        } else t = Jn;
        return {
            score: t
        }
    }
    function Xn(e) {
        var t = e.match(/`{3,}/g);
        return t || (t = function(e) {
            return e.replace(/`{3,}[^`]*\n(.+)?\n`{3,}/g, "")
        } (e).match(/`/g)),
        null != t && t.length % 2
    }
    function Yn() {
        return window.location.hash.slice(1)
    }
    function Qn(e) {
        var n = e.options[e.selectedIndex];
        t(n, "null.js:9");
        var r = n.hasAttribute("data-already-member"),
        a = e.form;
        t(a, "null.js:13"),
        a.classList.toggle("is-member", r),
        a.classList.toggle("is-not-member", !r)
    }
    function Zn(e) {
        var n = e.closest("form").querySelector(".js-redeem-button");
        t(n instanceof HTMLButtonElement, "null.js:69"),
        n.disabled = e.classList.contains("free-plan")
    }
    function er(e) {
        var t = e.getAttribute("data-login"),
        n = e.getAttribute("data-plan");
        if (t && n) {
            var r = !0,
            o = !1,
            s = void 0;
            try {
                for (var i, c = document.querySelectorAll(".js-account-row, .js-choose-account")[Symbol.iterator](); ! (r = (i = c.next()).done); r = !0) {
                    i.value.classList.remove("selected")
                }
            } catch(e) {
                o = !0,
                s = e
            } finally {
                try { ! r && c.
                    return && c.
                    return ()
                } finally {
                    if (o) throw s
                }
            }
            e.classList.add("selected");
            var u = e.querySelector(".js-choose-account");
            u && u.classList.add("selected");
            var l = a.query(document, ".js-account", HTMLInputElement);
            l && (l.value = t);
            var d = document.querySelector(".js-plan-section");
            d && d.classList.remove("d-none");
            var m = !0,
            f = !1,
            v = void 0;
            try {
                for (var p, h = document.querySelectorAll(".js-billing-plans")[Symbol.iterator](); ! (m = (p = h.next()).done); m = !0) {
                    p.value.classList.add("d-none")
                }
            } catch(e) {
                f = !0,
                v = e
            } finally {
                try { ! m && h.
                    return && h.
                    return ()
                } finally {
                    if (f) throw v
                }
            }
            var g = document.querySelector(".js-billing-plans[data-login='" + t + "']");
            if (g) {
                g.classList.remove("d-none");
                var y = g.querySelectorAll(".js-plan-row"),
                b = 1 === y.length ? y[0] : g.querySelector("[data-name='" + n + "']");
                b && tr(b)
            }
        }
    }
    function tr(e) {
        var t = e.getAttribute("data-name"),
        n = e.closest(".js-billing-plans");
        if (n) {
            var r = n.getAttribute("data-login");
            if (r) {
                var o = "true" === n.getAttribute("data-has-billing"),
                s = parseInt(e.getAttribute("data-cost"), 10),
                i = !0,
                c = !1,
                u = void 0;
                try {
                    for (var l, d = document.querySelectorAll(".js-plan-row, .js-choose-plan")[Symbol.iterator](); ! (i = (l = d.next()).done); i = !0) {
                        l.value.classList.remove("selected")
                    }
                } catch(e) {
                    c = !0,
                    u = e
                } finally {
                    try { ! i && d.
                        return && d.
                        return ()
                    } finally {
                        if (c) throw u
                    }
                }
                e.classList.add("selected");
                var m = e.querySelector(".js-choose-plan");
                m && m.classList.add("selected");
                var f = e.querySelector(".js-choose-plan-radio");
                f instanceof HTMLInputElement && (f.checked = !0);
                var v = a.query(document, ".js-plan", HTMLInputElement);
                if (v && (v.value = t || ""), 0 === s || o) {
                    var p = document.querySelector(".js-billing-section");
                    p && p.classList.add("has-removed-contents")
                } else if (r) {
                    var h = document.querySelector(".js-billing-section[data-login='" + r + "']");
                    h && h.classList.remove("has-removed-contents")
                }
            }
        }
    }
    function nr(e, t) {
        var n = e.closest(".js-survey-question-form"),
        r = n.querySelector(".js-survey-other-text");
        n.classList.toggle("is-other-selected", t),
        t ? (r.addAttribute("required", "required"), r.focus()) : r.removeAttribute("required"),
        i.fire(r, "change")
    }
    function rr(e) {
        var t = e.match(/#?(?:L)(\d+)/g);
        return t ? t.map(function(e) {
            return parseInt(e.replace(/\D/g, ""))
        }) : []
    }
    function ar(e) {
        return {
            lineRange: rr(e),
            anchorPrefix: function(e) {
                var t = e.match(/(file-.+?-)L\d+?/i);
                return t ? t[1] : ""
            } (e)
        }
    }
    function or(e, t) {
        return e - t
    }
    function sr(e) {
        null == e && (e = ar(window.location.hash)),
        function(e) {
            var t = e.lineRange,
            n = e.anchorPrefix,
            r = document.querySelectorAll(".js-file-line");
            if (0 !== r.length) {
                var a = !0,
                o = !1,
                s = void 0;
                try {
                    for (var i, c = r[Symbol.iterator](); ! (a = (i = c.next()).done); a = !0) i.value.classList.remove("highlighted")
                } catch(e) {
                    o = !0,
                    s = e
                } finally {
                    try { ! a && c.
                        return && c.
                        return ()
                    } finally {
                        if (o) throw s
                    }
                }
                for (var u = t[0]; u <= t[t.length - 1]; u++) {
                    var l = document.querySelector("#" + n + "LC" + u);
                    l && l.classList.add("highlighted")
                }
            }
        } (e),
        function() {
            var e = document.querySelector(".js-file-line-actions"),
            t = document.getElementById("js-file-line-action-button"),
            n = document.querySelectorAll(".js-file-line.highlighted"),
            r = n[0];
            if (t && e && r) { !
                function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(e[n].textContent);
                    t = t.join("\n");
                    var r = document.getElementById("js-copy-lines");
                    if (r) {
                        r.innerHTML = "Copy " + P.pluralize(e.length, "line"),
                        r.setAttribute("data-clipboard-text", t);
                        var a = "Blob, copyLines, numLines:" + e.length.toString();
                        r.setAttribute("data-ga-click", a)
                    }
                } (n);
                var a = function(e) {
                    var t = document.getElementsByClassName("js-permalink-shortcut")[0];
                    if (t instanceof HTMLAnchorElement) {
                        var n = "" + t.href + window.location.hash,
                        r = document.getElementById("js-copy-permalink");
                        if (r) {
                            r.setAttribute("data-clipboard-text", n);
                            var a = "Blob, copyPermalink, numLines:" + e.toString();
                            r.setAttribute("data-ga-click", a)
                        }
                        return n
                    }
                } (n.length); !
                function(e) {
                    var t = document.getElementById("js-view-git-blame");
                    if (t) {
                        var n = "Blob, viewGitBlame, numLines:" + e.toString();
                        t.setAttribute("data-ga-click", n)
                    }
                } (n),
                function(e, t) {
                    var n = document.getElementById("js-new-issue");
                    if (n instanceof HTMLAnchorElement && e) {
                        var r = n.getAttribute("href");
                        if (r) {
                            var a = new URL(r, window.location.origin),
                            o = new URLSearchParams(a.search.slice(1));
                            o.set("permalink", e),
                            a.search = o.toString(),
                            n.setAttribute("href", a.toString());
                            var s = "Blob, newIssue, numLines:" + t.toString();
                            n.setAttribute("data-ga-click", s)
                        }
                    }
                } (a, n.length),
                e.style.top = r.offsetTop - 2 + "px",
                e.classList.remove("d-none")
            }
        } ();
        var t = e,
        n = t.lineRange,
        r = t.anchorPrefix,
        o = document.querySelector("#" + r + "LC" + n[0]);
        if (!ou && o) {
            o.scrollIntoView();
            a.closest(o, ".blob-wrapper").scrollLeft = 0
        }
        ou = !1
    }
    function ir(e, t) {
        var n = "FORM" === e.nodeName ? "action": "href",
        r = e.getAttribute(n);
        if (r) {
            var a = r.indexOf("#");
            a >= 0 && (r = r.substr(0, a)),
            r += t,
            e.setAttribute(n, r)
        }
    }
    function cr(e) {
        var t = e.match(/#(diff-[a-f0-9]+)([L|R])(\d+)-?([L|R])?(\d+)?$/i);
        if (null != t && 6 === t.length) return t;
        var n = e.match(/#(discussion-diff-[0-9]+)([L|R])(\d+)-?([L|R])?(\d+)$/i);
        return null != n && 6 === n.length ? n: null
    }
    function ur(e, t, n, r) {
        var o = parseInt(n, 10),
        s = parseInt(r, 10);
        return a.querySelectorAll(e, ".js-expand", HTMLAnchorElement).filter(function(e) {
            var n = "R" === t ? "data-right-range": "data-left-range",
            r = (e.getAttribute(n) || "").split("-"),
            a = parseInt(r[0], 10),
            i = parseInt(r[1], 10);
            return a <= o && o <= i || (o <= a && i <= s || a <= s && s <= i)
        })
    }
    function lr(e) {
        var t = a.query(e, ".js-inline-comment-form-container");
        t.classList.add("open"),
        a.query(t, ".js-write-tab").click(),
        a.query(t, ".js-comment-field").focus()
    }
    function dr(e) {
        e.reset();
        var t = a.closest(e, ".js-inline-comment-form-container");
        t.classList.remove("open"),
        i.fire(t, "inlinecomment:collapse")
    }
    function mr(e, t) {
        var n = e.nextElementSibling;
        return n && n.matches(t) ? n: null
    }
    function fr(e) {
        var t = e.querySelector(".js-toggle-file-notes");
        t instanceof HTMLInputElement && d.changeValue(t, !0)
    }
    function vr() {
        var e = !0,
        t = !1,
        n = void 0;
        try {
            for (var r, a = document.querySelectorAll(".file .js-inline-comments-container")[Symbol.iterator](); ! (e = (r = a.next()).done); e = !0) {
                var o = r.value,
                s = o.querySelectorAll(".js-comments-holder > *").length > 0,
                i = o.querySelector(".js-inline-comment-form-container"),
                c = !!i && i.classList.contains("open");
                s || c || o.remove()
            }
        } catch(e) {
            t = !0,
            n = e
        } finally {
            try { ! e && a.
                return && a.
                return ()
            } finally {
                if (t) throw n
            }
        }
    }
    function pr(e) {
        var n = a.query(document, e).firstElementChild;
        t(n, "null.js:205");
        var r = n.cloneNode(!0),
        o = r.querySelector("textarea");
        return o instanceof HTMLTextAreaElement && (o.value = ""),
        r
    }
    function hr(e, t) {
        var n = !0,
        r = !1,
        o = void 0;
        try {
            for (var s, i = Object.keys(t)[Symbol.iterator](); ! (n = (s = i.next()).done); n = !0) {
                var c = s.value,
                u = e.elements.namedItem(c);
                u instanceof HTMLInputElement && (u.value = t[c] || "")
            }
        } catch(e) {
            r = !0,
            o = e
        } finally {
            try { ! n && i.
                return && i.
                return ()
            } finally {
                if (r) throw o
            }
        }
        var l = a.query(e, ".js-comment-field");
        l.id = l.id.replace(/^r\d+ /, "").replace("${anchor}", t.anchor || "").replace("${position}", t.position || "")
    }
    function gr(e) {
        return Math.floor(e / 2)
    }
    function yr(e, t) {
        var n = e.parentElement;
        if (n) {
            var r = n.children,
            a = void 0;
            if (4 === r.length) for (var o = 0,
            s = r.length; o < s; o++) {
                r[o] === e && (a = gr(o))
            }
            for (var i = 0,
            c = r.length; i < c; i++) {
                var u = r[i];
                null != a && gr(i) !== a || u.classList.toggle("is-hovered", t)
            }
        }
    }
    function br(e) {
        return Math.floor(e / 2)
    }
    function jr() {
        var e = void 0,
        t = void 0,
        n = void 0,
        r = void 0,
        a = void 0,
        o = void 0,
        s = void 0,
        i = void 0;
        if (cu) {
            for (n = 0, a = cu.length; n < a; n++)(e = cu[n]).classList.remove("selected-line");
            cu = null
        }
        var c = cr(window.location.hash);
        if (c) {
            var u = c[1] + c[2] + c[3];
            if (u && (s = H.findElementByFragmentName(document, u)), s && s.classList.contains("js-linkable-line-number")) {
                var l = s.parentNode.children;
                if (4 === l.length) for (t = r = 0, o = l.length; r < o; t = ++r)(e = l[t]) === s && (i = br(t));
                cu = function() {
                    var n = void 0,
                    r = void 0,
                    a = [];
                    for (t = n = 0, r = l.length; n < r; t = ++n) e = l[t],
                    null != i && br(t) !== i || (e.classList.toggle("selected-line"), a.push(e));
                    return a
                } ()
            }
        }
    }
    function Lr() {
        var e = document.body;
        t(e, "null.js:8");
        var n = document.querySelector("meta[name=diff-view]"),
        r = n && n instanceof HTMLMetaElement ? n.content: "",
        a = document.querySelector(".file-diff-split"),
        o = document.querySelector(".CommunityTemplate-header"),
        s = !!("split" === r && a || document.querySelector(".wants-full-width-container"));
        e.classList.toggle("full-width", s);
        var i = !!o;
        e.classList.toggle("full-width-p0", i)
    }
    function wr(e) {
        var t = e.parentElement,
        n = t.querySelectorAll("td.js-line-comments").length,
        r = t.querySelectorAll("td.js-line-comments.is-collapsed").length;
        t.classList.toggle("is-collapsed", r > 0 && n === r)
    }
    function xr(e, t) {
        var n = t.querySelector(".js-repo-access-error");
        return n.textContent = e,
        n.classList.remove("d-none")
    }
    function kr() {
        var e = void 0,
        t = void 0,
        n = document.querySelectorAll(".js-repo-access-error"),
        r = [];
        for (e = 0, t = n.length; e < t; e++) {
            var a = n[e];
            a.textContent = "",
            r.push(a.classList.add("d-none"))
        }
        return r
    }
    function Er(e) {
        return e.classList.toggle("is-empty", !e.querySelector(".js-repo-access-entry"))
    }
    function Sr() {
        var e = document.getElementById("collaborators");
        e && (a.query(e, ".js-add-new-collab", HTMLButtonElement).disabled = !0, q(e.querySelector(".js-add-repo-access-field")).data("autocompleted"))
    }
    function Tr(e) {
        var t = e.querySelector(".js-authorized-pushers"),
        n = parseInt(t.getAttribute("data-limit")),
        r = t.querySelectorAll(".js-authorized-user-or-team").length;
        t.classList.toggle("at-limit", r >= n)
    }
    function qr(e) {
        var t = e.querySelector(".js-value"),
        n = e.closest("form");
        return n.querySelector(".js-item-value").value = t.textContent,
        n
    }
    function Ar() {
        document.removeEventListener("facebox:afterClose", Ar);
        var e = a.query(document, ".js-permission-options").getAttribute("data-current-form");
        if (e) {
            var t = a.query(document, ".js-permission-options form." + e + " .js-navigation-container");
            if (t) {
                var n = t.querySelector(".js-original-selected");
                if (n) {
                    var r = n.querySelector(".js-value"),
                    o = n.querySelector(".js-select-button-text"),
                    s = t.querySelector(".js-item-value"),
                    i = t.querySelector(".js-navigation-item.selected"),
                    c = t.closest(".Box-row");
                    if (r && o && s && s instanceof HTMLInputElement && i && c) {
                        var u = c.querySelector(".js-select-button");
                        u && (s.value = r.textContent, i.classList.remove("selected"), n.classList.add("selected"), u.textContent = o.textContent)
                    }
                }
            }
        }
    }
    function Mr(e) {
        if (null != e) {
            var t = lu.get(e[0]);
            null != t && (t.load = t.hello = null, t.helloTimer && (clearTimeout(t.helloTimer), t.helloTimer = null), t.loadTimer && (clearTimeout(t.loadTimer), t.loadTimer = null))
        }
    }
    function Hr(e) {
        if (null != e) return e.removeClass(uu),
        e.addClass("is-render-failed"),
        Mr(e)
    }
    function Cr(e, t) {
        return null == t && (t = function() {
            return ! 0
        }),
        function() {
            var n = void 0;
            if (function() {
                try {
                    return Array.from(e).some(E)
                } catch(t) {
                    return Array.from(e).filter(E).length > 0
                }
            } () && !e.hasClass("is-render-ready") && !e.hasClass("is-render-failed") && !e.hasClass("is-render-failed-fatally") && (!t || t())) return (n = lu.get(e[0])) ? (console.error("Render timeout: " + JSON.stringify(n) + " Now: " + Date.now()), Hr(e)) : console.error("No timing data on $:", e)
        }
    }
    function Ir(e) {
        var t = q(e || this),
        n = lu.get(t[0]);
        null != n && n.load || (Mr(t),
        function(e) {
            if (!lu.get(e[0])) {
                var t = {
                    load: null,
                    hello: null,
                    helloTimer: null,
                    loadTimer: null
                };
                t.load = Date.now(),
                t.helloTimer = setTimeout(Cr(e,
                function() {
                    return ! t.hello
                }), 1e4),
                t.loadTimer = setTimeout(Cr(e), 45e3),
                lu.set(e[0], t)
            }
        } (t), t.addClass("is-render-automatic"),
        function(e) {
            e.addClass("is-render-requested")
        } (t))
    }
    function Rr() {
        var e = !0,
        t = !1,
        n = void 0;
        try {
            for (var r, o = document.querySelectorAll(".js-newsletter-frequency-choice.selected")[Symbol.iterator](); ! (e = (r = o.next()).done); e = !0) {
                r.value.classList.remove("selected")
            }
        } catch(e) {
            t = !0,
            n = e
        } finally {
            try { ! e && o.
                return && o.
                return ()
            } finally {
                if (t) throw n
            }
        }
        var s = a.query(document, ".js-newsletter-frequency-radio:enabled:checked");
        a.closest(s, ".js-newsletter-frequency-choice").classList.add("selected")
    }
    function _r(e) {
        a.query(document, ".js-gist-dropzone").classList.remove("d-none"),
        e.stopPropagation(),
        e.preventDefault()
    }
    function Fr(e) {
        null != e.target.classList && e.target.classList.contains("js-gist-dropzone") && e.target.classList.add("d-none")
    }
    function Pr(e) {
        var n = void 0,
        r = void 0,
        o = e.dataTransfer.files,
        s = function() {
            var r = o[n];
            R.trackEvent({
                category: "Interaction",
                action: "File Drop",
                label: r.type
            }),
            function(e) {
                return new Promise(function(n, r) {
                    var a = new FileReader;
                    return a.onload = function() {
                        t("string" == typeof a.result, "null.js:80");
                        var o = a.result;
                        return o && !/\0/.test(o) ? n({
                            file: e,
                            data: o
                        }) : r(new Error("invalid file"))
                    },
                    a.readAsText(e)
                })
            } (r).then(function(t) {
                r = t.file;
                var n = t.data;
                return e.target.dispatchEvent(new CustomEvent("gist:filedrop", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: {
                        file: r,
                        text: n
                    }
                }))
            },
            function() {})
        };
        for (n = 0, r = o.length; n < r; n++) s();
        a.query(document, ".js-gist-dropzone").classList.add("d-none"),
        e.stopPropagation(),
        e.preventDefault()
    }
    function Nr(e) {
        var n = void 0,
        r = void 0,
        a = void 0,
        o = void 0,
        s = void 0,
        i = e.querySelector(".js-gist-files"),
        c = document.getElementById("js-gist-file-template");
        t(c, "null.js:27");
        var u = document.createElement("div");
        u.innerHTML = c.textContent;
        var l = u.querySelectorAll("[id]");
        for (r = 0, o = l.length; r < o; r++)(n = l[r]).removeAttribute("id");
        var d = u.querySelector(".js-code-textarea");
        null != d && d.setAttribute("id", "blob_contents_" + Date.now());
        var m = u.children;
        for (a = 0, s = m.length; a < s; a++) n = m[a],
        i.append(n);
        return i.lastElementChild
    }
    function Or(e) {
        return V.getAsyncCodeEditor(e.closest(".js-code-editor"))
    }
    function Dr(e) {
        var t = void 0,
        n = void 0,
        r = e.querySelectorAll(".js-code-textarea");
        for (t = 0, n = r.length; t < n; t++) {
            if (r[t].value.trim().length > 0) return ! 0
        }
        return ! 1
    }
    function Br() {
        var e = void 0,
        n = void 0,
        r = document.querySelectorAll(".js-gist-create"),
        a = [];
        for (e = 0, n = r.length; e < n; e++) {
            var o = r[e];
            t(o instanceof HTMLButtonElement, "`.js-gist-create` must be HTMLButtonElement -- null.js:89"),
            a.push(o.disabled = !Dr(o.form))
        }
        return a
    }
    function Ur(e) {
        var t = e.getAttribute("data-language-detection-url");
        if (t) return v.fetchJSON(t + "?filename=" + encodeURIComponent(e.value)).then(function(t) {
            return Or(e).then(function(e) {
                return e.setMode(t.language)
            })
        })
    }
    function zr(e) {
        var t = void 0,
        n = void 0,
        r = e.querySelectorAll(".js-remove-gist-file"),
        a = [];
        for (t = 0, n = r.length; t < n; t++) {
            var o = r[t];
            a.push(o.classList.toggle("d-none", r.length < 2))
        }
        return a
    }
    function Wr(e) {
        var t = a.querySelectorAll(document, ".js-hook-event-checkbox", HTMLInputElement),
        n = !0,
        r = !1,
        o = void 0;
        try {
            for (var s, i = t[Symbol.iterator](); ! (n = (s = i.next()).done); n = !0) {
                var c = s.value;
                c.checked = c.matches(e)
            }
        } catch(e) {
            r = !0,
            o = e
        } finally {
            try { ! n && i.
                return && i.
                return ()
            } finally {
                if (r) throw o
            }
        }
    }
    function Vr() {
        var e = document.getElementById("js-update-integration-permissions");
        null != e && e.removeAttribute("disabled")
    }
    function $r(e) {
        e instanceof HTMLFormElement ? d.submit(e) : vu(e)
    }
    function Kr(e) {
        $r(c(e.currentTarget, Element))
    }
    function Jr(e, t) {
        e.replaceWith(M.parseHTML(document, t))
    }
    function Gr(e) {
        var t = a.closest(e, "form", HTMLFormElement),
        n = $(t),
        r = new FormData,
        o = !0,
        s = !1,
        i = void 0;
        try {
            for (var c, u = n[Symbol.iterator](); ! (o = (c = u.next()).done); o = !0) {
                var l = c.value,
                d = ni(l, 2),
                m = d[0],
                f = d[1];
                e.contains(function(e, t, n) {
                    var r = !0,
                    a = !1,
                    o = void 0;
                    try {
                        for (var s, i = e.elements[Symbol.iterator](); ! (r = (s = i.next()).done); r = !0) {
                            var c = s.value;
                            if (c.name === t && c.value === n) return c
                        }
                    } catch(e) {
                        a = !0,
                        o = e
                    } finally {
                        try { ! r && i.
                            return && i.
                            return ()
                        } finally {
                            if (a) throw o
                        }
                    }
                } (t, m, f)) && r.append(m, f)
            }
        } catch(e) {
            s = !0,
            i = e
        } finally {
            try { ! o && u.
                return && u.
                return ()
            } finally {
                if (s) throw i
            }
        }
        return r
    }
    function Xr(e) {
        return e.querySelectorAll(".js-integrations-install-repo-picked .js-repository-picker-result").length
    }
    function Yr(e) {
        var t = +e.getAttribute("data-max-repos");
        if (t) return Xr(e) >= t
    }
    function Qr(e) {
        return e.querySelector(".js-all-repositories-radio").checked ||
        function(e) {
            return Xr(e) > 0
        } (e)
    }
    function Zr() {
        var e = 0;
        0 !== document.querySelectorAll(".js-integrations-install-repo-picked:not(.d-none)").length && (e = document.querySelectorAll(".js-repository-picker-result:not(.d-none)").length);
        var t = "";
        if (e > 0) {
            t = "Selected " + e + " " + (e > 1 ? "repositories": "repository")
        }
        return q(".js-integration-total-repos").text(t)
    }
    function ea() {
        var e = document.querySelector(".js-org-reinstate-forms"),
        n = document.querySelectorAll(".js-org-reinstate-option:checked");
        if (e && 1 === n.length) {
            var r = n[0].getAttribute("data-form");
            t(null != r, "Missing attribute `data-form` -- null.js:19");
            var a = e.getElementsByClassName("js-togglable-form"),
            o = !0,
            s = !1,
            i = void 0;
            try {
                for (var c, u = a[Symbol.iterator](); ! (o = (c = u.next()).done); o = !0) {
                    c.value.classList.add("d-none")
                }
            } catch(e) {
                s = !0,
                i = e
            } finally {
                try { ! o && u.
                    return && u.
                    return ()
                } finally {
                    if (s) throw i
                }
            }
            var l = document.getElementById(r);
            t(l, "undefined -- null.js:29"),
            l.classList.remove("d-none")
        }
    }
    function ta(e) {
        var n = this,
        r = e.target;
        t(r instanceof HTMLElement, "null.js:134");
        var a = e.currentTarget;
        t(a instanceof HTMLElement, "null.js:137");
        var o = r.getAttribute("data-member-name") || r.value;
        if (o) {
            var s = a.getAttribute("data-action-type");
            if (s) {
                var i = a.closest(".js-add-members-container");
                if (i) {
                    var c = parseInt(i.getAttribute("data-accessible-repositories-count"));
                    if (isNaN(c) || c < 1) Promise.resolve().then(function() {
                        return d.submit(n)
                    });
                    else {
                        e.preventDefault();
                        var u = new URL(i.getAttribute("data-url"), window.location.origin),
                        l = new URLSearchParams(u.search.slice(1));
                        l.append("member", o),
                        l.append("action_type", s);
                        var m = a.getAttribute("data-return-to");
                        m && l.append("return_to", m),
                        u.search = l.toString(),
                        i.classList.add("loading"),
                        v.fetchSafeDocumentFragment(document, u).then(function(e) {
                            i.classList.remove("loading"),
                            i.innerHTML = null,
                            i.appendChild(e)
                        }).
                        catch()
                    }
                }
            }
        }
    }
    function na() {
        a.query(document, ".js-save-member-privileges-button-container").classList.toggle("member-privilege-radios-preserved", ra() && aa() && oa())
    }
    function ra() {
        return "" === a.query(document, ".js-customize-member-privileges-default-repository-permission-radio:checked", HTMLInputElement).value
    }
    function aa() {
        return "0" === a.query(document, ".js-customize-member-privileges-repository-creation-radio:checked", HTMLInputElement).value
    }
    function oa() {
        return "secret" === a.query(document, ".js-customize-member-privileges-team-privacy-radio:checked", HTMLInputElement).value
    }
    function sa(e, t) {
        "" === t && (a.query(document, ".js-rename-owners-team-errors").innerHTML = ""),
        a.query(document, ".js-rename-owners-team-button").classList.toggle("disabled", !e),
        a.query(document, ".js-rename-owners-team-note").classList.toggle("d-none", "" !== t)
    }
    function ia(e) {
        for (var t in e.selectors) {
            var n = e.selectors[t],
            r = document.querySelector(t);
            n && r && (r.textContent = n)
        }
        var o = 100 === e.filled_seats_percent;
        a.query(document, ".js-live-update-seats-percent").style.width = e.filled_seats_percent + "%",
        a.query(document, ".js-need-more-seats").classList.toggle("d-none", !o),
        a.query(document, ".js-add-org-member-form").classList.toggle("d-none", o)
    }
    function ca(e, t) {
        e.preventDefault();
        var n = a.query(document, t, HTMLFormElement);
        d.submit(n)
    }
    function ua(e) {
        var t = e.querySelector("input.is-submit-button-value");
        return t instanceof HTMLInputElement ? t: null
    }
    function la(e) {
        var t = e.closest("form");
        if (t instanceof HTMLFormElement) {
            var n = ua(t);
            if (e.name) {
                var r = e.matches("input[type=submit]") ? "Submit": "",
                a = e.value || r;
                n || ((n = document.createElement("input")).type = "hidden", n.classList.add("is-submit-button-value"), t.prepend(n)),
                n.name = e.name,
                n.value = a
            } else n && n.remove()
        }
    }
    function da() {
        b.hasDirtyFields(this) ?
        function(e) {
            var t = e.getAttribute("data-warn-unsaved-changes") || "Changes you made may not be saved.";
            window.onbeforeunload = function(e) {
                return e.returnValue = t,
                t
            }
        } (this) : ma()
    }
    function ma() {
        window.onbeforeunload = null
    }
    function fa() {
        return a.query(document, ".js-saml-provider-settings-form", HTMLFormElement)
    }
    function va() {
        return fa().querySelector(".js-saml-form-inputs")
    }
    function pa() {
        return a.query(document, ".js-org-saml-confirm-enforcement-hidden", HTMLInputElement)
    }
    function ha(e) {
        e && e.classList.remove("d-none")
    }
    function ga() {
        return ! a.query(document, ".js-org-enable-saml", HTMLInputElement).checked
    }
    function ya() {
        return a.query(document, ".is-submit-button-value", HTMLInputElement)
    }
    function ba() {
        return a.query(document, ".js-org-saml-enforce", HTMLInputElement).checked && "0" === pa().value && !("1" === a.query(document, ".js-org-saml-previously-enforced", HTMLInputElement).value) && "1" === a.query(document, ".js-org-has-unlinked-saml-members", HTMLInputElement).value
    }
    function ja() {
        fa().submit()
    }
    function La(e, t) {
        var n = e.querySelector(".js-save-button"),
        r = e.closest(".js-team").querySelector(".js-slug");
        e.classList.remove("is-checking"),
        t.error ? (n.disabled = !0, "exists" === t.error && (e.classList.add("is-exists"), t.slug && (r.textContent = t.slug))) : (n.disabled = !1, t.slug && (r.textContent = t.slug))
    }
    function wa(e) {
        var t = e.value.trim(),
        n = e.form;
        n.classList.add("is-sending"),
        n.classList.remove("is-name-check-fail"),
        n.classList.remove("is-name-check-success");
        var r = new URL(e.getAttribute("data-check-url"), window.location.origin),
        a = new URLSearchParams(r.search.slice(1));
        a.append("name", t),
        r.search = a.toString(),
        v.fetchText(r).then(function(r) {
            var a = void 0;
            n.classList.remove("is-sending"),
            n.querySelector(".js-team-name-errors").innerHTML = r || "";
            var o = null != (a = e.getAttribute("data-original")) ? a.trim() : void 0,
            s = o && t === o,
            i = !!n.querySelector(".js-error"),
            c = (i || !t) && !s;
            return n.querySelector(".js-create-team-button").disabled = c,
            n.classList.toggle("is-name-check-fail", i),
            n.classList.toggle("is-name-check-success", !i && t)
        })
    }
    function xa(e) {
        var t = a.closest(e, "form", HTMLFormElement),
        n = t.querySelector(".js-selected-team-id"),
        r = n && c(n, HTMLInputElement).value,
        o = a.query(t, ".js-team-privacy-closed"),
        s = a.query(t, ".js-team-privacy-secret"),
        i = a.query(o, "input", HTMLInputElement),
        u = a.query(s, "input", HTMLInputElement);
        s.classList.toggle("tooltipped", !!r),
        s.classList.toggle("text-gray", !!r),
        u.disabled = !!r,
        r && (i.checked = !0)
    }
    function ka(e, t) {
        var n = e.value;
        e.value = t.textContent,
        t.textContent = n
    }
    function Ea() {
        q(".pull-request-ref-restore").removeClass("last").last().addClass("last")
    }
    function Sa() {
        var e = q("#js-pull-restorable").length;
        q(".js-pull-discussion-timeline").toggleClass("is-pull-restorable", e)
    }
    function Ta() {
        return "false" === a.query(document, ".js-privacy-toggle:checked", HTMLInputElement).value
    }
    function qa() {
        var e = a.query(document, ".js-repo-name");
        i.fire(e, "change");
        var t = q(".js-owner-container").find(".select-menu-item.selected");
        if (!gu) {
            var n = a.query(document, ".js-privacy-toggle[value=false]", HTMLInputElement),
            r = a.query(document, ".js-privacy-toggle[value=true]", HTMLInputElement);
            "private" === t.attr("data-default") ? (n.checked = !0, i.fire(n, "change")) : (r.checked = !0, i.fire(r, "change"))
        }
        "yes" === t.attr("data-permission") ? (q(".with-permission-fields").show(), q(".without-permission-fields").hide(), q(".errored").show(), q("dl.warn").show()) : (q(".with-permission-fields").hide(), q(".without-permission-fields").show(), q(".errored").hide(), q("dl.warn").hide()),
        function() {
            var e = document.querySelector("#js-upgrade-container");
            if (!e) return;
            var t = a.query(document, "#js-payment-methods-form");
            e.firstElementChild && t.appendChild(e.firstElementChild);
            var n = a.query(document, "input[name=owner]:checked", HTMLInputElement).value,
            r = t.querySelector('.js-upgrade[data-login="' + n + '"]');
            r && e.appendChild(r)
        } (),
        Aa()
    }
    function Aa(e) {
        var n = q("#js-upgrade-container"),
        r = q("#new_repository"),
        a = e ? e.target: null;
        a || (a = document.querySelector(".js-privacy-toggle:checked")),
        t(a instanceof HTMLInputElement, "null.js:72");
        var o = n.find(".js-billing-section");
        "false" === a.value ? (n.show(), o.removeClass("has-removed-contents"), n.find("input[type=checkbox]").prop("checked", "checked")) : (n.hide(), o.addClass("has-removed-contents"), n.find("input[type=checkbox]").prop("checked", null), r.attr("action", r.attr("data-url"))),
        Ma()
    }
    function Ma() {
        var e = q("#js-upgrade-container"),
        t = a.query(document, "#new_repository"),
        n = a.query(t, ".js-repo-name").classList.contains("is-autocheck-successful"),
        r = e.find("input[type=checkbox]");
        Ta() && r.length && !r.is(":checked") && (n = !1);
        a.query(t, "button[type=submit]", HTMLButtonElement).disabled = !n
    }
    function Ha() {
        var e = this.querySelector(".js-repository-import-author-autocomplete");
        e.focus(),
        e.select()
    }
    function Ca(e, t) {
        e.querySelector(".js-add-new-blocked-user").disabled = !t
    }
    function Ia(e, n) {
        var r = a.query(document, ".js-site-search-form", HTMLFormElement);
        a.query(document, ".js-site-search").classList.toggle("scoped-search", n);
        var o = void 0,
        s = void 0;
        n ? (o = r.getAttribute("data-scoped-search-url"), s = e.getAttribute("data-scoped-placeholder")) : (o = r.getAttribute("data-unscoped-search-url"), s = e.getAttribute("data-unscoped-placeholder")),
        t("string" == typeof o, "null.js:23"),
        t("string" == typeof s, "null.js:24"),
        r.setAttribute("action", o),
        e.setAttribute("placeholder", s)
    }
    function Ra() {
        var e = "/site/keyboard_shortcuts?url=" + window.location.pathname;
        return Us(function() {
            return v.fetchText(e).then(function(e) {
                return Us(e, "shortcuts")
            })
        })
    }
    function _a(e, n) {
        var r = e.getAttribute("data-results");
        if (r) {
            var o = document.getElementById(r);
            if (o) {
                var s = Lu.get(o);
                if (s) {
                    var i = c(a.query(o, ".js-tree-browser-result-template").firstElementChild, HTMLElement),
                    u = a.query(o, ".js-tree-finder-results");
                    null == n && (n = e.value);
                    var l = void 0,
                    d = void 0;
                    n ? (l = De(n), d = function(e, t) {
                        var n = function() {
                            for (var n = [], r = 0, a = e.length; r < a; r++) {
                                var o = e[r],
                                s = Ne(o, t);
                                s && n.push([o, s])
                            }
                            return n
                        } ();
                        n.sort(Oe);
                        for (var r = [], a = 0, o = n.length; a < o; a++) {
                            var s = n[a];
                            r.push(s[0])
                        }
                        return r
                    } (s, n)) : d = s,
                    o.classList.toggle("filterable-empty", !d.length);
                    for (var m = document.createDocumentFragment(), f = d.slice(0, 50), p = 0, h = f.length; p < h; p++) {
                        var g = f[p],
                        y = i.cloneNode(!0),
                        b = c(y.getElementsByClassName("js-tree-finder-path")[0], HTMLAnchorElement),
                        j = new URL(b.href);
                        j.pathname = j.pathname + "/" + encodeURI(g),
                        b.href = j.href,
                        b.textContent = g,
                        Be(b, n, l),
                        m.appendChild(y)
                    }
                    u.innerHTML = "",
                    u.appendChild(m),
                    A.focus(u)
                } else if (null == ju) {
                    var L = o.getAttribute("data-url");
                    t(L, "null.js:34"),
                    ju = v.fetchJSON(L).then(function(t) {
                        Lu.set(o, t.paths),
                        _a(e),
                        ju = null
                    }).
                    catch(function() {
                        ju = null
                    })
                }
            }
        }
    }
    function Fa() {
        var e = a.query(document, ".js-calendar-graph").getAttribute("data-url");
        return t(e, "null.js:24"),
        new URL(e, window.location.origin)
    }
    function Pa(e) {
        e.target.matches("rect.day") && (Na(),
        function(e) {
            var n = document.body;
            t(n, "null.js:91");
            var r = e.getAttribute("data-date");
            t(r, "null.js:94");
            var a = function(e, t) {
                var n = Tu[t.getUTCMonth()].slice(0, 3) + " " + t.getUTCDate() + ", " + t.getUTCFullYear(),
                r = 0 === e ? "No": _.formatNumber(e),
                a = document.createElement("div");
                a.classList.add("svg-tip", "svg-tip-one-line");
                var o = document.createElement("strong");
                return o.textContent = r + " " + P.pluralize(e, "contribution"),
                a.append(o, " on " + n),
                a
            } (parseInt(e.getAttribute("data-count")), Va(r));
            n.appendChild(a);
            var o = e.getBoundingClientRect(),
            s = o.left + window.pageXOffset - a.offsetWidth / 2 + o.width / 2,
            i = o.bottom + window.pageYOffset - a.offsetHeight - 2 * o.height;
            a.style.top = i + "px",
            a.style.left = s + "px"
        } (e.target))
    }
    function Na() {
        var e = document.querySelector(".svg-tip");
        e && e.remove()
    }
    function Oa(e) {
        var t = document.getElementById("js-contribution-activity");
        t && zs({
            url: e,
            container: t,
            scrollTo: !1,
            replace: !0
        })
    }
    function Da(e, t) {
        var n = (e.getAttribute("class") || "").trim().split(" ").filter(function(e) {
            return e !== t
        });
        e.setAttribute("class", n.join(" "))
    }
    function Ba(e, t) {
        var n = (e.getAttribute("class") || "") + " " + t;
        e.setAttribute("class", n.trim())
    }
    function Ua(e, t) {
        function n(n) {
            var r = Va(n.getAttribute("data-date")).getTime();
            return e && t ? e.getTime() <= r && r <= t.getTime() : r === e.getTime()
        }
        var r = a.query(document, ".js-calendar-graph"),
        o = r.querySelectorAll("rect.day"),
        s = !0,
        i = !1,
        c = void 0;
        try {
            for (var u, l = o[Symbol.iterator](); ! (s = (u = l.next()).done); s = !0) {
                Da(u.value, "active")
            }
        } catch(e) {
            i = !0,
            c = e
        } finally {
            try { ! s && l.
                return && l.
                return ()
            } finally {
                if (i) throw c
            }
        }
        if (r.classList.remove("days-selected"), e || t) {
            r.classList.add("days-selected");
            var d = !0,
            m = !1,
            f = void 0;
            try {
                for (var v, p = o[Symbol.iterator](); ! (d = (v = p.next()).done); d = !0) {
                    var h = v.value;
                    n(h) && Ba(h, "active")
                }
            } catch(e) {
                m = !0,
                f = e
            } finally {
                try { ! d && p.
                    return && p.
                    return ()
                } finally {
                    if (m) throw f
                }
            }
        }
    }
    function za(e) {
        return ("0" + e).slice( - 2)
    }
    function Wa(e) {
        return e.getUTCFullYear() + "-" + za(e.getUTCMonth() + 1) + "-" + za(e.getUTCDate())
    }
    function Va(e) {
        var t = e.split("-").map(function(e) {
            return parseInt(e, 10)
        }),
        n = ni(t, 3),
        r = n[0],
        a = n[1],
        o = n[2];
        return new Date(Date.UTC(r, a - 1, o))
    }
    function $a(e, t, n) {
        var r = void 0,
        a = void 0,
        o = void 0,
        s = void 0,
        i = Fa(),
        c = new URLSearchParams(i.search.slice(1));
        if (c.append("tab", "overview"), e >= Eu && e <= Su) !
        function(e) {
            xu = e,
            Eu = null,
            Su = null;
            var t = Fa(),
            n = new URLSearchParams(t.search.slice(1));
            n.append("tab", "overview"),
            n.append("period", xu),
            t.search = n.toString(),
            Ua(),
            Oa(t.toString())
        } ("weekly");
        else {
            if ("object" === (void 0 === t ? "undefined": Xs(t)) && (ku = t, t = !0), ku && t) {
                var u = new Date(ku.getTime() - 26784e5),
                l = new Date(ku.getTime() + 26784e5),
                d = e > ku ? [ku, e] : [e, ku];
                a = d[1],
                (r = d[0]) < u && (r = u),
                a > l && (a = l),
                Eu = (o = [r, a])[0],
                Su = o[1],
                c.append("from", Wa(r)),
                c.append("to", Wa(a))
            } else Eu = (s = [r = e, null])[0],
            Su = s[1],
            c.append("from", Wa(r));
            ku = e,
            xu = "custom",
            Ua(r, a),
            n || (i.search = c.toString(), Oa(i.toString()))
        }
    }
    function Ka(e) {
        var t = e.closest(".js-details-container");
        t && t.classList.add("open");
        var n = e.getBoundingClientRect(),
        r = window.scrollY + n.top - 62 - 10;
        window.scrollTo(0, r)
    }
    function Ja(e) {
        var n = a.querySelectorAll(e, "input[type=checkbox]", HTMLInputElement),
        r = n.filter(function(e) {
            return e.checked
        }).length,
        o = parseInt(e.getAttribute("data-max-repo-count"), 10),
        s = !0,
        i = !1,
        c = void 0;
        try {
            for (var u, l = n[Symbol.iterator](); ! (s = (u = l.next()).done); s = !0) {
                var d = u.value;
                d.disabled = r === o && !d.checked
            }
        } catch(e) {
            i = !0,
            c = e
        } finally {
            try { ! s && l.
                return && l.
                return ()
            } finally {
                if (i) throw c
            }
        } !
        function(e, n, r) {
            var o = a.query(e, ".js-remaining-pinned-repos-count"),
            s = o.getAttribute("data-remaining-label");
            t(s, "null.js:28");
            var i = r - n;
            o.textContent = i + " " + s,
            o.classList.toggle("text-red", i < 1)
        } (a.closest(e, ".js-pinned-repos-selection-form", HTMLFormElement), r, o)
    }
    function Ga(e, t) {
        return e !== t
    }
    function Xa(e) {
        return {
            name: a.query(e, ".js-repo").textContent.toLowerCase().trim(),
            pinned: a.query(e, 'input[type="checkbox"]', HTMLInputElement).checked,
            owner: e.classList.contains("js-owned-repo"),
            contributor: e.classList.contains("js-contributed-repo"),
            element: e
        }
    }
    function Ya(e) {
        var t = c(e.target, Element),
        n = a.closest(t, ".js-pinned-repos-selection-form"),
        r = a.query(n, ".js-pinned-repos-filter", HTMLInputElement).value.toLowerCase().trim(),
        o = function(e) {
            if (function(e) {
                return ! e.querySelector(".js-pinned-repo-source")
            } (e)) return {
                owners: !0,
                contributors: !0
            };
            var t = a.querySelectorAll(e, ".js-pinned-repo-source:checked", HTMLInputElement),
            n = t.map(function(e) {
                return e.value
            }),
            r = n.indexOf("owned") > -1,
            o = n.indexOf("contributed") > -1,
            s = !0,
            i = !1,
            c = void 0;
            try {
                for (var u, l = t[Symbol.iterator](); ! (s = (u = l.next()).done); s = !0) u.value.disabled = Ga(r, o)
            } catch(e) {
                i = !0,
                c = e
            } finally {
                try { ! s && l.
                    return && l.
                    return ()
                } finally {
                    if (i) throw c
                }
            }
            return {
                owners: r,
                contributors: o
            }
        } (n),
        s = Array.from(n.querySelectorAll(".js-pinned-repos-selection")).map(Xa).map(function(e) {
            return {
                matched: function(e, t, n) {
                    if (e.pinned) return ! 0;
                    var r = !t || e.name.indexOf(t) > -1,
                    a = e.owner && n.owners,
                    o = e.contributor && n.contributors;
                    return r && (a || o)
                } (e, r, o),
                candidate: e
            }
        }),
        i = !0,
        u = !1,
        l = void 0;
        try {
            for (var d, m = s[Symbol.iterator](); ! (i = (d = m.next()).done); i = !0) {
                var f = d.value,
                v = f.matched;
                f.candidate.element.classList.toggle("d-none", !v)
            }
        } catch(e) {
            u = !0,
            l = e
        } finally {
            try { ! i && m.
                return && m.
                return ()
            } finally {
                if (u) throw l
            }
        }
        var p = s.some(function(e) {
            return e.matched
        });
        a.query(n, ".js-no-repos-message").classList.toggle("d-none", p)
    }
    function Qa(e, t) {
        i.on("click", e + " .js-sortable-button",
        function() {
            var n = this.closest(e),
            r = this.getAttribute("data-direction"),
            a = Array.from(n.parentElement.children).indexOf(n);
            "up" === r ? n.previousElementSibling.insertAdjacentElement("beforebegin", n) : "down" === r && n.nextElementSibling && n.nextElementSibling.insertAdjacentElement("afterend", n);
            var o = Array.from(n.parentElement.children).indexOf(n);
            this.focus(),
            t({
                oldIndex: a,
                newIndex: o,
                item: n
            })
        })
    }
    function Za(e) {
        var t = e.item,
        n = e.oldIndex;
        Mu = t.parentNode.children[n + 1]
    }
    function eo() {
        var e = parseInt(this.getAttribute("data-input-max-length"), 10),
        t = parseInt(this.getAttribute("data-warning-length"), 10) || 5,
        n = this.value.replace(/(\r\n|\n|\r)/g, "\r\n"),
        r = e - n.length;
        if (r <= 0) {
            var a = n.substr(0, e);
            a.endsWith("\r") ? (a = a.substr(0, e - 1), r = 1) : r = 0,
            this.value = a
        }
        var o = this.getAttribute("data-warning-text"),
        s = this.closest(".js-length-limited-input-container").querySelector(".js-length-limited-input-warning");
        r <= t ? (s.textContent = o.replace(new RegExp("{{remaining}}", "g"), r), s.classList.remove("d-none")) : (s.textContent = "", s.classList.add("d-none"))
    }
    function to(e) {
        var t = e.currentTarget,
        n = a.query(t, ".js-milestone-edit-cancel"),
        r = n.getAttribute("data-confirm-changes");
        r && (b.hasDirtyFields(t) ? n.setAttribute("data-confirm", r) : n.removeAttribute("data-confirm"))
    }
    function no(e, t) {
        Iu({
            item: t,
            newIndex: Array.from(e.querySelectorAll(".js-draggable-issue")).indexOf(t),
            trackingLabel: "keyboard-shortcut"
        }),
        A.refocus(t.closest(".js-navigation-container"), t)
    }
    function ro(e, t) {
        var n = !0,
        r = !1,
        a = void 0;
        try {
            for (var o, s = document.querySelectorAll(".js-setting-toggle .js-status-indicator")[Symbol.iterator](); ! (n = (o = s.next()).done); n = !0) {
                o.value.classList.remove("status-indicator-success", "status-indicator-loading", "status-indicator-failed")
            }
        } catch(e) {
            r = !0,
            a = e
        } finally {
            try { ! n && s.
                return && s.
                return ()
            } finally {
                if (r) throw a
            }
        }
        e.classList.add(t)
    }
    function ao(e) {
        var t = e.closest(".js-teams-write-a-post");
        if (t) {
            var n = a.query(t, ".js-team-discussions-post-compose");
            n.classList.contains("d-none") || (n.classList.add("d-none"), a.query(t, ".js-post-placeholder").classList.remove("d-none"), t.classList.remove("active")),
            a.query(t, ".js-comment-form-error").classList.add("d-none")
        }
    }
    function oo(e) {
        var n = lo(e);
        if (n) {
            t(/\[private\]/.test(n.name), "null.js:49");
            var r = n.getAttribute("data-original-value"),
            a = e.querySelector("1" === r ? ".js-discussion-post-select-private": ".js-discussion-post-select-public");
            a && i.fire(a, "navigation:open")
        }
    }
    function so(e) {
        var t = e.closest(".js-teams-reply-to-post"),
        n = t && t.querySelector(".js-comment-form-error");
        n && n.classList.add("d-none")
    }
    function io(e, t) {
        e.textContent = (parseInt(e.textContent) + t).toString()
    }
    function co(e, n) {
        e.classList.add("d-none"),
        t(e.parentElement, "null.js:200"),
        a.query(e.parentElement, n).classList.remove("d-none")
    }
    function uo(e, n) {
        var r = lo(c(e.target.closest(".js-comment-update") || e.target.closest(".js-new-comment-form"), HTMLFormElement));
        t(r, "null.js:234"),
        t(/\[private\]/.test(r.name), "null.js:235"),
        r.value = n;
        var o = e.target.closest(".js-discussion-post");
        if (o) {
            var s = a.query(o, ".js-discussion-post-privacy-icon");
            "1" === n ? (o.classList.add("discussion-post-private"), s.classList.remove("d-none")) : (o.classList.remove("discussion-post-private"), s.classList.add("d-none"))
        }
    }
    function lo(e) {
        var n = e.querySelector(".js-discussion-post-privacy-select");
        if (n) {
            var r = n.querySelector("input");
            if (r) return t(r instanceof HTMLInputElement, "null.js:258"),
            r
        }
    }
    function mo(e) {
        if (!e.currentTarget.classList.contains("disabled")) {
            var t = a.query(e.currentTarget, ".js-team-project-suggestion-form", HTMLFormElement);
            d.submit(t)
        }
    }
    function fo(e) {
        e.classList.contains("read") || (e.classList.toggle("unread"), e.classList.toggle("read"))
    }
    function vo(e, t, n) {
        var r = Array.from(e.querySelectorAll(".js-navigation-item")),
        a = r.indexOf(t),
        o = r.indexOf(n);
        if ( - 1 === a) throw new Error("Couldn't find startIndex in container");
        if ( - 1 === o) throw new Error("Couldn't find endItem in container");
        if (po(e), r[o].classList.add("is-last-in-range"), a > o) {
            var s = [o, a];
            a = s[0],
            o = s[1]
        }
        var i = !0,
        c = !1,
        u = void 0;
        try {
            for (var l, d = r[Symbol.iterator](); ! (i = (l = d.next()).done); i = !0) {
                l.value.classList.add("js-navigation-open")
            }
        } catch(e) {
            c = !0,
            u = e
        } finally {
            try { ! i && d.
                return && d.
                return ()
            } finally {
                if (c) throw u
            }
        }
        var m = !0,
        f = !1,
        v = void 0;
        try {
            for (var p, h = r.slice(a, o + 1)[Symbol.iterator](); ! (m = (p = h.next()).done); m = !0) {
                var g = p.value;
                g.classList.add("is-range-selected"),
                g.classList.remove("js-navigation-open")
            }
        } catch(e) {
            f = !0,
            v = e
        } finally {
            try { ! m && h.
                return && h.
                return ()
            } finally {
                if (f) throw v
            }
        }
    }
    function po(e) {
        var t = !0,
        n = !1,
        r = void 0;
        try {
            for (var a, o = e.querySelectorAll(".js-navigation-item")[Symbol.iterator](); ! (t = (a = o.next()).done); t = !0) {
                a.value.classList.remove("is-range-selected", "is-last-in-range")
            }
        } catch(e) {
            n = !0,
            r = e
        } finally {
            try { ! t && o.
                return && o.
                return ()
            } finally {
                if (n) throw r
            }
        }
    }
    function ho(e) {
        var t = document.querySelector("head .js-site-favicon");
        t instanceof HTMLLinkElement && (null == Uu && (Uu = t.href), t.href = e)
    }
    function go() {
        var e = document.querySelector(".js-reviews-container");
        e && setTimeout(function() {
            return function(e) {
                var t = a.closest(e, ".js-review-state-classes"),
                n = t.querySelectorAll(".js-pending-review-comment").length;
                t.classList.toggle("is-review-pending", n > 0);
                var r = !0,
                o = !1,
                s = void 0;
                try {
                    for (var i, c = document.querySelectorAll(".js-pending-review-comment-count")[Symbol.iterator](); ! (r = (i = c.next()).done); r = !0) i.value.textContent = String(n)
                } catch(e) {
                    o = !0,
                    s = e
                } finally {
                    try { ! r && c.
                        return && c.
                        return ()
                    } finally {
                        if (o) throw s
                    }
                }
                var u = !0,
                l = !1,
                d = void 0;
                try {
                    for (var m, f = document.querySelectorAll(".js-pending-comment-count-type")[Symbol.iterator](); ! (u = (m = f.next()).done); u = !0) {
                        var v = m.value;
                        P.pluralizeNode(n, v)
                    }
                } catch(e) {
                    l = !0,
                    d = e
                } finally {
                    try { ! u && f.
                        return && f.
                        return ()
                    } finally {
                        if (l) throw d
                    }
                }
                if (n > 0) {
                    var p = a.query(e, ".js-menu-target");
                    p.classList.add("anim-pulse-in"),
                    p.addEventListener("animationend",
                    function() {
                        return p.classList.remove("anim-pulse-in")
                    },
                    {
                        once: !0
                    })
                }
            } (e)
        })
    }
    function yo(e) {
        var n = e.target;
        t(n instanceof HTMLElement, "null.js:29");
        var r = n.getAttribute("data-reaction-label");
        t(r, "null.js:32");
        var o = a.closest(n, ".js-add-reaction-popover");
        a.query(o, ".js-reaction-description").textContent = r
    }
    function bo(e) {
        t(e.target instanceof HTMLElement, "null.js:40");
        var n = a.closest(e.target, ".js-add-reaction-popover");
        a.query(n, ".js-reaction-description").textContent = "Pick your reaction"
    }
    function jo(e, t) {
        var n; (n = e.classList).remove.apply(n, Vu),
        e.classList.add(t),
        e.disabled = "is-saving" === t
    }
    function Lo(e) {
        var t, n = document.querySelector(".release-target-wrapper"),
        r = document.querySelector(".js-release-tag");
        if (null != n && null != r) {
            switch (e) {
            case "is-valid":
                n.classList.add("d-none");
                break;
            case "is-loading":
                break;
            default:
                n.classList.remove("d-none")
            } (t = r.classList).remove.apply(t, $u),
            r.classList.add(e)
        }
    }
    function wo(e, t, n) {
        return t + "/releases/" + e + "/" + n
    }
    function xo(e) {
        var t = a.closest(e, "form", HTMLFormElement).querySelector(".js-previewable-comment-form");
        if (t) {
            var n = t.getAttribute("data-base-preview-url");
            n || (n = String(t.getAttribute("data-preview-url")), t.setAttribute("data-base-preview-url", n));
            var r = a.querySelectorAll(e, 'input[name="release[tag_name]"], input[name="release[target_commitish]"]:checked', HTMLInputElement),
            o = new URL(n, window.location.origin),
            s = new URLSearchParams(o.search.slice(1)),
            i = !0,
            c = !1,
            u = void 0;
            try {
                for (var l, d = r[Symbol.iterator](); ! (i = (l = d.next()).done); i = !0) {
                    var m = l.value;
                    m.value && s.append(m.name, m.value)
                }
            } catch(e) {
                c = !0,
                u = e
            } finally {
                try { ! i && d.
                    return && d.
                    return ()
                } finally {
                    if (c) throw u
                }
            }
            o.search = s.toString(),
            t.setAttribute("data-preview-url", o.toString())
        }
    }
    function ko(e) {
        var t = Ju.get(e) || 0;
        if (! (t > Gu)) {
            var n = e.querySelector(".js-more-repos-form");
            n && (Ju.set(e, t + 1), d.submit(c(n, HTMLFormElement)))
        }
    }
    function Eo(e, t, n) {
        var r = new URL(e, window.location.origin),
        a = new URLSearchParams(r.search.slice(1));
        return t.length < 1 ? a.delete(n) : a.set(n, t),
        r.search = a.toString(),
        r.toString()
    }
    function So(e) {
        var t = e.querySelector(".js-your-repositories-search");
        return !! t && (document.activeElement === t || c(t, HTMLInputElement).defaultValue.trim().length > 0)
    }
    function To(e) {
        var t = e.querySelector(".js-your-repositories-search");
        t && i.fire(t, "filterable:change")
    }
    function qo(e) {
        var t = e.value.slice(0, e.selectionEnd),
        n = e.value.slice(e.selectionEnd),
        r = 0 === e.value.trim().length,
        a = t.match(/(^|\s+)[^\s:]+$/) && n.match(/^(\s|$)/);
        return r || a
    }
    function Ao() {
        a.query(document, ".js-search-suggester").classList.add("d-none")
    }
    function Mo(e) {
        var t = e.target,
        n = a.closest(t, ".js-navigation-item"),
        r = a.query(document, ".js-search-suggester-field", HTMLInputElement),
        o = a.query(document, ".js-search-suggester"),
        s = n.getAttribute("data-value") || "",
        i = r.value.slice(0, r.selectionEnd).replace(/\S+$/, ""),
        c = r.value.slice(r.selectionEnd);
        o.classList.contains("d-none") ? d.submit(a.query(document, "#search_form", HTMLFormElement)) : (e.preventDefault(), r.value = i + s + c, qo(r) ? Xu(r) : Ao())
    }
    function Ho() {
        var e = this.querySelector(".js-filterable-field");
        e && e.focus()
    }
    function Co(e) {
        var t = a.closest(e.currentTarget, ".js-select-menu").querySelector(".js-navigation-container");
        t && A.refocus(t, e.currentTarget)
    }
    function Io(e, t, n) {
        var r = n.length > 0 && !
        function(e, t) {
            var n = !0,
            r = !1,
            a = void 0;
            try {
                for (var o, s = e.querySelectorAll(".js-select-button-text, .js-select-menu-filter-text")[Symbol.iterator](); ! (n = (o = s.next()).done); n = !0) {
                    if (o.value.textContent.toLowerCase().trim() === t.toLowerCase()) return ! 0
                }
            } catch(e) {
                r = !0,
                a = e
            } finally {
                try { ! n && s.
                    return && s.
                    return ()
                } finally {
                    if (r) throw a
                }
            }
            return ! 1
        } (e, n);
        if (e.classList.toggle("is-showing-new-item-form", r), r) {
            var o = a.query(t, ".js-new-item-name");
            "innerText" in o ? o.innerText = n: o.textContent = n;
            var s = t.querySelector(".js-new-item-value");
            s instanceof HTMLInputElement && (s.value = n)
        }
    }
    function Ro() {
        var e = this.querySelectorAll(".js-select-menu-tab"),
        t = e[0],
        n = !0,
        r = !1,
        a = void 0;
        try {
            for (var o, s = e[Symbol.iterator](); ! (n = (o = s.next()).done); n = !0) {
                var i = o.value;
                if (i.classList.contains("selected")) {
                    t = i;
                    break
                }
            }
        } catch(e) {
            r = !0,
            a = e
        } finally {
            try { ! n && s.
                return && s.
                return ()
            } finally {
                if (r) throw a
            }
        }
        t && _o(t)
    }
    function _o(e) {
        var t = !0,
        n = !1,
        r = void 0;
        try {
            for (var a, o = e.closest(".js-select-menu").querySelectorAll(".js-select-menu-tab")[Symbol.iterator](); ! (t = (a = o.next()).done); t = !0) {
                var s = a.value;
                s !== e && (s.classList.remove("selected"), s.setAttribute("aria-current", !1))
            }
        } catch(e) {
            n = !0,
            r = e
        } finally {
            try { ! t && o.
                return && o.
                return ()
            } finally {
                if (n) throw r
            }
        }
        e.classList.add("selected"),
        e.setAttribute("aria-current", !0)
    }
    function Fo(e, t) {
        var n = e.getAttribute("data-tab-filter"),
        r = e.closest(".js-select-menu").querySelectorAll(".js-select-menu-tab-bucket"),
        a = !0,
        o = !1,
        s = void 0;
        try {
            for (var c, u = r[Symbol.iterator](); ! (a = (c = u.next()).done); a = !0) {
                var l = c.value;
                l.getAttribute("data-tab-filter") === n && (l.classList.toggle("selected", t), t && i.fire(l, "selectmenu:tabchange"))
            }
        } catch(e) {
            o = !0,
            s = e
        } finally {
            try { ! a && u.
                return && u.
                return ()
            } finally {
                if (o) throw s
            }
        }
    }
    function Po() {
        var e = document.body;
        t(e, "null.js:12"),
        e.classList.add("is-sending"),
        e.classList.remove("is-sent", "is-not-sent")
    }
    function No() {
        var e = document.body;
        t(e, "null.js:20"),
        e.classList.add("is-sent"),
        e.classList.remove("is-sending")
    }
    function Oo(e) {
        var n = document.body;
        t(n, "null.js:28"),
        e && (a.query(document, ".js-sms-error").textContent = e),
        n.classList.add("is-not-sent"),
        n.classList.remove("is-sending")
    }
    function Do(e) {
        var t = e.getAttribute("data-channel");
        return t ? t.split(/\s+/) : []
    }
    function Bo(e) {
        el || (el = function() {
            var e = document.head && document.head.querySelector("link[rel=web-socket]");
            if (e) {
                t(e instanceof HTMLLinkElement, "Link must be of type HTMLLinkElement -- null.js:36");
                var n = new Yu(e.href, void 0, {
                    shouldReconnect: function(e, t) {
                        if (! (t.reconnects <= 5) && 1008 !== e.code && 1011 !== e.code) {
                            if (1013 === e.code) return 6e3;
                            if (1012 === e.code) return 5e3;
                            var n = 5 * Math.random();
                            return 1e3 * Math.pow(2, t.attempts) * n
                        }
                    }
                });
                return n.addEventListener("open",
                function() {
                    for (var e in Qu) n.send("subscribe:" + e)
                }),
                n.addEventListener("message",
                function(e) {
                    var t = JSON.parse(e.data),
                    n = t[0],
                    r = t[1];
                    if (n && r) {
                        var a = Zu[n] || [],
                        o = !0,
                        s = !1,
                        c = void 0;
                        try {
                            for (var u, l = a[Symbol.iterator](); ! (o = (u = l.next()).done); o = !0) {
                                var d = u.value;
                                i.fire(d, "socket:message", {
                                    data: r,
                                    name: n
                                })
                            }
                        } catch(e) {
                            s = !0,
                            c = e
                        } finally {
                            try { ! o && l.
                                return && l.
                                return ()
                            } finally {
                                if (s) throw c
                            }
                        }
                    }
                }),
                n
            }
        } ());
        var n = el;
        if (n) {
            var r = !0,
            a = !1,
            o = void 0;
            try {
                for (var s, c = Do(e)[Symbol.iterator](); ! (r = (s = c.next()).done); r = !0) {
                    var u = s.value;
                    n.readyState !== WebSocket.OPEN || Qu[u] || n.send("subscribe:" + u),
                    Qu[u] = !0,
                    null == Zu[u] && (Zu[u] = []),
                    Zu[u].push(e)
                }
            } catch(e) {
                a = !0,
                o = e
            } finally {
                try { ! r && c.
                    return && c.
                    return ()
                } finally {
                    if (a) throw o
                }
            }
        }
    }
    function Uo(e, t) {
        function n(e) {
            tl || (e.preventDefault(), e.stopImmediatePropagation(), C(t).then(function() {
                tl = !0,
                d.submit(e.target),
                tl = !1
            }).
            catch(function(t) {
                i.fire(e.target, "sudo:failed", {
                    error: t
                })
            }))
        }
        s.observe(e, {
            add: function(e) {
                e.addEventListener("submit", n)
            },
            remove: function(e) {
                e.removeEventListener("submit", n)
            }
        })
    }
    function zo(e, t) {
        a.query(e, ".js-add-child-team-loading-state").classList.toggle("d-none", !t),
        a.query(e, ".js-add-child-team-modal-content").classList.toggle("d-none", t)
    }
    function Wo(e) {
        var t = !0,
        n = !1,
        r = void 0;
        try {
            for (var a, o = e[Symbol.iterator](); ! (t = (a = o.next()).done); t = !0) {
                var s = a.value,
                i = String(s.getAttribute("data-team-slug"));
                Wo(document.querySelectorAll('.js-child-team[data-parent-team-slug="' + i + '"]')),
                s.classList.remove("is-open"),
                s.classList.add("d-none")
            }
        } catch(e) {
            n = !0,
            r = e
        } finally {
            try { ! t && o.
                return && o.
                return ()
            } finally {
                if (n) throw r
            }
        }
    }
    function Vo(e) { !
        function(e) {
            var n = e.closest(".js-details-container");
            if (!n) return;
            t(n instanceof HTMLElement, "null.js:78"),
            N.isDetailsTargetExpanded(n) || N.toggleDetailsTarget(n)
        } (e),
        function(e) {
            e.classList.add("timeline-item-highlight")
        } (e),
        kt(e)
    }
    function $o() {
        return window.location.hash.slice(1)
    }
    function Ko() {
        var e = {};
        e.crossBrowserLoadEvent = Date.now();
        var t = window.performance && window.performance.timing;
        if (t) for (var n in t) {
            var r = t[n];
            "number" == typeof r && (e[n] = r)
        } else {
            var a = function() {
                var e = S.getItem(cl);
                if (e) return parseInt(e, 10)
            } ();
            null != a && (e.simulatedNavigationStart = a)
        }
        var o = function() {
            if (window.performance && "timeOrigin" in window.performance && window.performance.getEntriesByType) {
                var e = window.performance.getEntriesByType("paint");
                if (e.length) {
                    var t = e.find(function(e) {
                        return "first-paint" === e.name
                    });
                    if (t) return Math.round((performance.timeOrigin + t.startTime) / 1e6)
                }
            }
        } ();
        return null != o && (e.chromeFirstPaintTime = o),
        e
    }
    function Jo() {
        var e = [],
        t = window.performance;
        if (t) {
            var n = !0,
            r = !1,
            a = void 0;
            try {
                for (var o, s = t.getEntriesByType("resource")[Symbol.iterator](); ! (n = (o = s.next()).done); n = !0) {
                    var i = o.value,
                    c = {};
                    e.push(c);
                    for (var u in i) {
                        var l = i[u];
                        "number" != typeof l && "string" != typeof l || (c[u] = l)
                    }
                }
            } catch(e) {
                r = !0,
                a = e
            } finally {
                try { ! n && s.
                    return && s.
                    return ()
                } finally {
                    if (r) throw a
                }
            }
        }
        return e
    }
    function Go() {
        var e = [],
        t = window.performance;
        if (t) {
            var n = !0,
            r = !1,
            a = void 0;
            try {
                for (var o, s = t.getEntriesByType("navigation")[Symbol.iterator](); ! (n = (o = s.next()).done); n = !0) {
                    var i = o.value,
                    c = {};
                    e.push(c);
                    for (var u in i) {
                        var l = i[u];
                        "number" != typeof l && "string" != typeof l || (c[u] = l)
                    }
                }
            } catch(e) {
                r = !0,
                a = e
            } finally {
                try { ! n && s.
                    return && s.
                    return ()
                } finally {
                    if (r) throw a
                }
            }
        }
        var d = Ko();
        return d && 0 === e.length && e.push({
            name: location.href,
            entryType: "navigation",
            startTime: 0,
            duration: d.loadEventEnd - d.navigationStart,
            initiatorType: "navigation",
            nextHopProtocol: "http/1.1",
            type: "navigate",
            redirectStart: d.redirectStart,
            redirectEnd: d.redirectEnd,
            fetchStart: d.fetchStart,
            domainLookupStart: d.domainLookupStart,
            domainLookupEnd: d.domainLookupEnd,
            connectStart: d.connectStart,
            connectEnd: d.connectEnd,
            secureConnectionStart: d.secureConnectionStart,
            requestStart: d.requestStart,
            responseStart: d.responseStart,
            responseEnd: d.responseEnd,
            unloadEventStart: d.unloadEventStart,
            unloadEventEnd: d.unloadEventEnd,
            domInteractive: d.domInteractive,
            domContentLoadedEventStart: d.domContentLoadedEventStart,
            domContentLoadedEventEnd: d.domContentLoadedEventEnd,
            domComplete: d.domComplete,
            loadEventStart: d.loadEventStart,
            loadEventEnd: d.loadEventEnd
        }),
        e
    }
    function Xo(e) {
        var t = a.closest(e, ".js-topic-save-notice-container"),
        n = a.query(t, ".js-repo-topics-save-notice");
        n.classList.remove("d-none"),
        n.classList.add("d-inline-block", "anim-fade-in"),
        setTimeout(function() {
            n.classList.remove("d-inline-block"),
            n.classList.add("d-none")
        },
        1900)
    }
    function Yo(e) {
        var t = a.query(e, ".js-topic-suggestions-box");
        t.querySelector(".js-topic-suggestion") || t.remove()
    }
    function Qo(e) {
        var t = a.query(document, ".js-repo-meta-container"),
        n = a.query(document, "#topics-list-container"),
        r = a.query(t, ".js-repo-meta-edit");
        a.query(t, ".js-edit-repo-meta-button").classList.toggle("d-none", e),
        n.classList.toggle("d-none", e),
        r.classList.toggle("d-none", e)
    }
    function Zo() {}
    function es() {
        return !! window.u2f || "true" === e.getMetadataByName(document, "u2f-support")
    }
    function ts() {
        var e = a.query(document, ".js-u2f-auth-form", HTMLFormElement),
        t = a.query(e, ".js-u2f-auth-response", HTMLInputElement),
        n = e.getAttribute("data-app-id"),
        r = e.getAttribute("data-challenge"),
        o = e.getAttribute("data-sign-requests");
        if (null != o) {
            var s = JSON.parse(o);
            Array.from(document.querySelectorAll(".js-u2f-error")).forEach(function(e) {
                return e.classList.add("d-none")
            });
            var c = document.querySelector(".js-u2f-login-waiting");
            null != c && c.classList.remove("d-none"),
            function() {
                for (var e = arguments.length,
                t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return new Promise(function(e, n) {
                    var r; (r = window.u2f).sign.apply(r, t.concat([function(t) {
                        if (null != t.errorCode && 0 !== t.errorCode) {
                            var r = new Error("Signing request failed");
                            r.code = t.errorCode,
                            n(r)
                        } else e(t)
                    }]))
                })
            } (n, r, s).then(function(n) {
                t.value = JSON.stringify(n),
                i.fire(e, "submit") && e.submit()
            },
            function(e) {
                var t = ".js-u2f-auth-error";
                switch (e.code) {
                case 4:
                    t = ".js-u2f-auth-not-registered-error";
                    break;
                case 5:
                    t = ".js-u2f-auth-timeout"
                }
                var n = document.querySelector(t);
                null != n && n.classList.remove("d-none"),
                null != c && c.classList.add("d-none")
            })
        }
    }
    function ns(e, t, n) {
        if (null == n) {
            var r = e.getAttribute(t);
            return null == r ? null: JSON.parse(r)
        }
        e.setAttribute(t, JSON.stringify(n))
    }
    function rs(e) {
        return ns(a.query(document, ".js-add-u2f-registration-form", HTMLFormElement), "data-sign-requests", e)
    }
    function as(e) {
        return ns(a.query(document, ".js-add-u2f-registration-form", HTMLFormElement), "data-register-requests", e)
    }
    function os(e) {
        e.register_requests && as(e.register_requests),
        e.sign_requests && rs(e.sign_requests)
    }
    function ss(e, t) {
        var n = a.query(document, ".js-new-u2f-registration");
        n.classList.add("is-showing-error"),
        n.classList.remove("is-sending"),
        Array.from(n.querySelectorAll(".js-u2f-error")).forEach(function(e) {
            return e.classList.add("d-none")
        });
        var r = a.query(n, e);
        null != t && (r.textContent = t),
        r.classList.remove("d-none")
    }
    function is(e) {
        C("high").then(function() {
            var t = a.query(document, ".js-add-u2f-registration-form", HTMLFormElement);
            c(t.elements.namedItem("response"), HTMLInputElement).value = JSON.stringify(e),
            v.fetchJSON(t.action, {
                method: t.method,
                body: new FormData(t)
            }).then(function(e) {
                os(e),
                a.query(document, ".js-new-u2f-registration").classList.remove("is-sending", "is-active"),
                a.query(document, ".js-u2f-registration-nickname-field", HTMLInputElement).value = "",
                function(e) {
                    var t = document.createElement("div");
                    t.innerHTML = e;
                    var n = t.firstChild;
                    null != n && a.query(document, ".js-u2f-registrations").appendChild(n)
                } (e.registration)
            }).
            catch(function(e) {
                e.response ? e.response.json().then(function(e) {
                    os(e),
                    ss(".js-u2f-server-error", e.error)
                }) : ss(".js-u2f-network-error")
            })
        })
    }
    function cs() {
        var e = a.query(document, ".js-new-u2f-registration");
        e.classList.add("is-sending"),
        e.classList.remove("is-showing-error");
        var t = a.query(document, ".js-add-u2f-registration-form").getAttribute("data-app-id");
        if (null == t) throw new Error("invalid appId"); (function() {
            for (var e = arguments.length,
            t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return new Promise(function(e, n) {
                var r; (r = window.u2f).register.apply(r, t.concat([function(t) {
                    if (null != t.errorCode && 0 !== t.errorCode) {
                        var r = new Error("Device registration failed");
                        r.code = t.errorCode,
                        n(r)
                    } else e(t)
                }]))
            })
        })(t, as(), rs()).then(is).
        catch(function(e) {
            var t = ".js-u2f-other-error";
            switch (e.code) {
            case 4:
                t = ".js-u2f-registered-error";
                break;
            case 5:
                t = ".js-u2f-timeout-error"
            }
            ss(t)
        })
    }
    function us(e) {
        return (ds(e) ? "!": "") + "[Uploading " + e.name + "…]()"
    }
    function ls(e) {
        return function(e) {
            return e.toLowerCase().replace(/[^a-z0-9\-_]+/gi, ".").replace(/\.{2,}/g, ".").replace(/^\.|\.$/gi, "")
        } (e).replace(/\.[^.]+$/, "").replace(/\./g, " ")
    }
    function ds(e) {
        return ["image/gif", "image/png", "image/jpg", "image/jpeg"].indexOf(e.type) > -1
    }
    function ms(e) {
        var t = e.split(".").pop().toLowerCase();
        return ["gif", "png", "jpg", "jpeg"].indexOf(t) > -1
    }
    function fs(e) {
        return e.textContent.trim().replace(/\|/g, "\\|").replace(/\n/g, " ") || " "
    }
    function vs(e) {
        var t = Array.from(e.querySelectorAll("tr")),
        n = function(e) {
            return Array.from(e.querySelectorAll("td, th")).map(fs)
        } (t.shift()),
        r = n.map(function() {
            return "--"
        });
        return "\n" + (n.join(" | ") + "\n" + r.join(" | ") + "\n") + t.map(function(e) {
            return Array.from(e.querySelectorAll("td")).map(fs).join(" | ")
        }).join("\n") + "\n\n"
    }
    function ps(e) {
        var t = a.closest(e, "form", HTMLFormElement);
        return a.query(t, "#release_id", HTMLInputElement).value
    }
    function hs(e, t) {
        var n = c(t.body, FormData);
        n.append("release_id", ps(e));
        var r = a.querySelectorAll(document, ".js-releases-field .js-release-file.delete .id", HTMLInputElement);
        if (r.length) {
            var o = r.map(function(e) {
                return e.value
            });
            n.append("deletion_candidates", o.join(","))
        }
    }
    function gs(e, t) {
        var n = a.closest(e, ".js-upload-manifest-file-container"),
        r = a.query(n, ".js-upload-progress");
        r.classList.add("active"),
        e.classList.add("is-progress-bar");
        var o = a.query(r, ".js-upload-meter-text");
        a.query(o, ".js-upload-meter-range-start").textContent = String(t.batch.uploaded + 1);
        a.query(o, ".js-upload-meter-range-end").textContent = String(t.batch.size)
    }
    function ys(e) {
        e.classList.remove("is-progress-bar");
        var t = a.closest(e, ".js-upload-manifest-file-container");
        a.query(t, ".js-upload-progress").classList.remove("active");
        a.query(t, ".js-upload-meter-text .js-upload-meter-filename").textContent = ""
    }
    function bs(e) {
        return e._path ? e._path + "/" + e.name: e.name
    }
    function js(e) {
        ys(e.currentTarget)
    }
    function Ls(e) {
        var t = a.closest(e, "form", HTMLFormElement);
        return c(t.elements.namedItem("authenticity_token"), HTMLInputElement).value
    }
    function ws(e, t) {
        var n; (n = e.classList).remove.apply(n, xl),
        e.classList.add(t)
    }
    function xs(e, t) {
        if (400 === e.status) return "is-bad-file";
        if (422 !== e.status) return "is-failed";
        var n = JSON.parse(e.body);
        if (!n || !n.errors) return "is-failed";
        var r = !0,
        a = !1,
        o = void 0;
        try {
            for (var s, i = n.errors[Symbol.iterator](); ! (r = (s = i.next()).done); r = !0) {
                var c = s.value;
                switch (c.field) {
                case "size":
                    var u = t ? t.size: null;
                    return null != u && 0 === parseInt(u) ? "is-empty": "is-too-big";
                case "file_count":
                    return "is-too-many";
                case "width":
                case "height":
                    return "is-bad-dimensions";
                case "name":
                    return "already_exists" === c.code ? "is-duplicate-filename": "is-bad-file";
                case "content_type":
                    return "is-bad-file";
                case "uploader_id":
                    return "is-bad-permissions";
                case "repository_id":
                    return "is-repository-required";
                case "format":
                    return "is-bad-format"
                }
            }
        } catch(e) {
            a = !0,
            o = e
        } finally {
            try { ! r && i.
                return && i.
                return ()
            } finally {
                if (a) throw o
            }
        }
        return "is-failed"
    }
    function ks(e) {
        return Array.from(e.types).indexOf("Files") >= 0
    }
    function Es(e) {
        return Array.from(e.types).indexOf("text/uri-list") >= 0
    }
    function Ss(e) {
        return Array.from(e.types).indexOf("text/plain") >= 0
    }
    function Ts(e) {
        if ( - 1 !== Array.from(e.types).indexOf("text/html")) {
            var t = e.getData("text/html");
            if (/<table/i.test(t)) {
                var n = M.parseHTML(document, t).querySelector("table");
                if (n && !n.closest(".js-comment")) return /\b(js|blob|diff)-./.test(n.className) ? null: n
            }
        }
    }
    function qs(e) {
        return e.reduce(function(e, t) {
            return e.concat(Array.isArray(t) ? qs(t) : t)
        },
        [])
    }
    function As(e) {
        return Array.from(e).filter(function(e) {
            return !
            function(e) {
                return e.name.startsWith(".")
            } (e)
        })
    }
    function Ms(e, t) {
        var n = new El(e);
        gl(n, t)
    }
    function Hs(e) {
        e.preventDefault()
    }
    function Cs(e) {
        e.preventDefault()
    }
    function Is(e) {
        if (!ql) {
            var t = c(e.currentTarget, Element);
            Sl && clearTimeout(Sl),
            Sl = setTimeout(function() {
                return t.classList.remove("dragover")
            },
            200);
            var n = e.dataTransfer;
            n && (n.dropEffect = function(e) {
                return ks(e) ? "copy": Es(e) ? "link": Ss(e) ? "copy": "none"
            } (n)),
            t.classList.add("dragover"),
            e.stopPropagation(),
            e.preventDefault()
        }
    }
    function Rs(e) {
        e.dataTransfer && (e.dataTransfer.dropEffect = "none"),
        c(e.currentTarget, Element).classList.remove("dragover"),
        e.stopPropagation(),
        e.preventDefault()
    }
    function _s(e) {
        if (e.target.classList) {
            c(e.target, Element).classList.contains("js-document-dropzone") && c(e.currentTarget, Element).classList.remove("dragover")
        }
    }
    function Fs(e) {
        var n = document.body;
        t(n, "null.js:677");
        var r = c(e.currentTarget, Element);
        r.classList.remove("dragover"),
        n.classList.remove("dragover");
        var a = e.dataTransfer;
        t(a, "null.js:685");
        var o = Ts(a);
        if (ks(a)) wl(r, a);
        else if (Es(a)) {
            var s = (a.getData("text/uri-list") || "").split("\r\n");
            s.length && i.fire(r, "upload:drop:links", {
                links: s
            })
        } else o ? i.fire(r, "upload:drop:table", {
            node: o
        }) : Ss(a) && i.fire(r, "upload:drop:text", {
            text: a.getData("text/plain")
        });
        e.stopPropagation(),
        e.preventDefault()
    }
    function Ps(e) {
        if (e.clipboardData) {
            var t = Ts(e.clipboardData);
            if (t) return i.fire(e.currentTarget, "upload:drop:table", {
                node: t
            }),
            void e.preventDefault();
            if (e.clipboardData.items) {
                var n = Array.from(e.clipboardData.items).map(function(e) {
                    return [e,
                    function(e) {
                        switch (e) {
                        case "image/gif":
                            return "image.gif";
                        case "image/png":
                            return "image.png";
                        case "image/jpeg":
                            return "image.jpg"
                        }
                    } (e.type)]
                }).filter(function(e) {
                    return e[1]
                }).shift();
                if (n) {
                    Ms([ni(n, 1)[0].getAsFile()], e.currentTarget),
                    e.preventDefault()
                }
            }
        }
    }
    function Ns(e) {
        e.target.classList.contains("js-manual-file-chooser") && (Ms(e.target.files, e.currentTarget), e.target.value = "")
    }
    function Os(e) {
        ws(e.currentTarget.classList.contains("js-uploadable-container") ? e.currentTarget: e.currentTarget.querySelector(".js-uploadable-container"), "is-default")
    }
    function Ds() {
        ql = !0
    }
    function Bs() {
        ql = !1
    }
    t = t && t.hasOwnProperty("default") ? t.
default:
    t,
    c = c && c.hasOwnProperty("default") ? c.
default:
    c,
    u = u && u.hasOwnProperty("default") ? u.
default:
    u,
    f = f && f.hasOwnProperty("default") ? f.
default:
    f,
    h = h && h.hasOwnProperty("default") ? h.
default:
    h,
    y = y && y.hasOwnProperty("default") ? y.
default:
    y,
    L = L && L.hasOwnProperty("default") ? L.
default:
    L;
    var Us = "default" in w ? w.
default:
    w;
    k = k && k.hasOwnProperty("default") ? k.
default:
    k,
    E = E && E.hasOwnProperty("default") ? E.
default:
    E,
    q = q && q.hasOwnProperty("default") ? q.
default:
    q,
    C = C && C.hasOwnProperty("default") ? C.
default:
    C,
    I = I && I.hasOwnProperty("default") ? I.
default:
    I,
    B = B && B.hasOwnProperty("default") ? B.
default:
    B;
    var zs = "default" in U ? U.
default:
    U;
    z = z && z.hasOwnProperty("default") ? z.
default:
    z,
    $ = $ && $.hasOwnProperty("default") ? $.
default:
    $,
    K = K && K.hasOwnProperty("default") ? K.
default:
    K,
    J = J && J.hasOwnProperty("default") ? J.
default:
    J,
    Q = Q && Q.hasOwnProperty("default") ? Q.
default:
    Q;
    var Ws = void 0,
    Vs = "undefined" != typeof window ? window: "undefined" != typeof global ? global: "undefined" != typeof self ? self: {},
    $s = te(function(e, t) { !
        function(e, n) {
            n(t)
        } (0,
        function(e) {
            function t(e) {
                e.prototype = new Error,
                e.prototype.constructor = e
            }
            function n(e) {
                this.name = "ImageWithoutAltAttributeError",
                this.stack = (new Error).stack,
                this.element = e,
                this.message = "Missing alt attribute on " + m(e)
            }
            function r(e) {
                this.name = "ElementWithoutLabelError",
                this.stack = (new Error).stack,
                this.element = e,
                this.message = "Missing text, title, or aria-label attribute on " + m(e)
            }
            function a(e) {
                this.name = "LinkWithoutLabelOrRoleError",
                this.stack = (new Error).stack,
                this.element = e,
                this.message = "Missing href or role=button on " + m(e)
            }
            function o(e) {
                this.name = "LabelMissingControlError",
                this.stack = (new Error).stack,
                this.element = e,
                this.message = "Label missing control on " + m(e)
            }
            function s(e) {
                this.name = "InputMissingLabelError",
                this.stack = (new Error).stack,
                this.element = e,
                this.message = "Missing label for or aria-label attribute on " + m(e)
            }
            function i(e) {
                this.name = "ButtonWithoutLabelError",
                this.stack = (new Error).stack,
                this.element = e,
                this.message = "Missing text or aria-label attribute on " + m(e)
            }
            function c(e, t) {
                this.name = "ARIAAttributeMissingError",
                this.stack = (new Error).stack,
                this.element = e,
                this.message = "Missing " + t + " attribute on " + m(e)
            }
            function u(e) {
                return null != e.closest('[aria-hidden="true"], [hidden], [style*="display: none"]')
            }
            function l(e) {
                return "string" == typeof e && !!e.trim()
            }
            function d(e) {
                switch (e.nodeType) {
                case Node.ELEMENT_NODE:
                    if (l(e.getAttribute("alt")) || l(e.getAttribute("aria-label")) || l(e.getAttribute("title"))) return ! 0;
                    for (var t = 0; t < e.childNodes.length; t++) if (d(e.childNodes[t])) return ! 0;
                    break;
                case Node.TEXT_NODE:
                    return l(e.data)
                }
            }
            function m(e) {
                var t = e.outerHTML;
                e.innerHTML && (t = t.replace(e.innerHTML, "..."));
                for (var n = []; e && "BODY" !== e.nodeName && (n.push(function(e) {
                    var t = [e.nodeName.toLowerCase()];
                    e.id && t.push("#" + e.id);
                    if (e.hasAttribute("class")) {
                        var n = !0,
                        r = !1,
                        a = void 0;
                        try {
                            for (var o, s = e.getAttribute("class").split(/\s+/)[Symbol.iterator](); ! (n = (o = s.next()).done); n = !0) {
                                var i = o.value;
                                i.match(/^js-/) && t.push("." + i)
                            }
                        } catch(e) {
                            r = !0,
                            a = e
                        } finally {
                            try { ! n && s.
                                return && s.
                                return ()
                            } finally {
                                if (r) throw a
                            }
                        }
                    }
                    return t.join("")
                } (e)), !e.id);) e = e.parentNode;
                return '"' + n.reverse().join(" > ") + '". \n\n' + t
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.scanForProblems = function(e, t, l) {
                function m(e) {
                    var n = e.name;
                    f[n] = f[n] || [],
                    f[n].push(e),
                    t(e)
                }
                var f = {},
                v = !0,
                p = !1,
                h = void 0;
                try {
                    for (var g, y = e.querySelectorAll("img")[Symbol.iterator](); ! (v = (g = y.next()).done); v = !0) {
                        var b = g.value;
                        b.hasAttribute("alt") || m(new n(b))
                    }
                } catch(e) {
                    p = !0,
                    h = e
                } finally {
                    try { ! v && y.
                        return && y.
                        return ()
                    } finally {
                        if (p) throw h
                    }
                }
                var j = !0,
                L = !1,
                w = void 0;
                try {
                    for (var x, k = e.querySelectorAll("a")[Symbol.iterator](); ! (j = (x = k.next()).done); j = !0) {
                        var E = x.value;
                        E.hasAttribute("name") || u(E) || (null == E.getAttribute("href") && "button" !== E.getAttribute("role") ? m(new a(E)) : d(E) || m(new r(E)))
                    }
                } catch(e) {
                    L = !0,
                    w = e
                } finally {
                    try { ! j && k.
                        return && k.
                        return ()
                    } finally {
                        if (L) throw w
                    }
                }
                var S = !0,
                T = !1,
                q = void 0;
                try {
                    for (var A, M = e.querySelectorAll("button")[Symbol.iterator](); ! (S = (A = M.next()).done); S = !0) {
                        var H = A.value;
                        u(H) || d(H) || m(new i(H))
                    }
                } catch(e) {
                    T = !0,
                    q = e
                } finally {
                    try { ! S && M.
                        return && M.
                        return ()
                    } finally {
                        if (T) throw q
                    }
                }
                var C = !0,
                I = !1,
                R = void 0;
                try {
                    for (var _, F = e.querySelectorAll("label")[Symbol.iterator](); ! (C = (_ = F.next()).done); C = !0) {
                        var P = _.value;
                        P.control || document.getElementById(P.getAttribute("for")) || P.querySelector("input") || u(P) || m(new o(P))
                    }
                } catch(e) {
                    I = !0,
                    R = e
                } finally {
                    try { ! C && F.
                        return && F.
                        return ()
                    } finally {
                        if (I) throw R
                    }
                }
                var N = !0,
                O = !1,
                D = void 0;
                try {
                    for (var B, U = e.querySelectorAll("input[type=text], input[type=url], input[type=search], input[type=number], textarea")[Symbol.iterator](); ! (N = (B = U.next()).done); N = !0) {
                        var z = B.value; (z.labels ? z.labels[0] : z.closest("label") || document.querySelector('label[for="' + z.id + '"]')) || u(z) || z.hasAttribute("aria-label") || m(new s(z))
                    }
                } catch(e) {
                    O = !0,
                    D = e
                } finally {
                    try { ! N && U.
                        return && U.
                        return ()
                    } finally {
                        if (O) throw D
                    }
                }
                if (l && l.ariaPairs) for (var W in l.ariaPairs) {
                    var V = l.ariaPairs[W],
                    $ = !0,
                    K = !1,
                    J = void 0;
                    try {
                        for (var G, X = e.querySelectorAll(W)[Symbol.iterator](); ! ($ = (G = X.next()).done); $ = !0) {
                            var Y = G.value,
                            Q = [],
                            Z = !0,
                            ee = !1,
                            te = void 0;
                            try {
                                for (var ne, re = V[Symbol.iterator](); ! (Z = (ne = re.next()).done); Z = !0) {
                                    var ae = ne.value;
                                    Y.hasAttribute(ae) || Q.push(ae)
                                }
                            } catch(e) {
                                ee = !0,
                                te = e
                            } finally {
                                try { ! Z && re.
                                    return && re.
                                    return ()
                                } finally {
                                    if (ee) throw te
                                }
                            }
                            Q.length > 0 && m(new c(Y, Q.join(", ")))
                        }
                    } catch(e) {
                        K = !0,
                        J = e
                    } finally {
                        try { ! $ && X.
                            return && X.
                            return ()
                        } finally {
                            if (K) throw J
                        }
                    }
                }
                return f
            },
            t(n),
            t(r),
            t(a),
            t(o),
            t(s),
            t(i),
            t(c)
        })
    }),
    Ks = (function(e) {
        e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") && e.
    default
    } ($s), $s.scanForProblems),
    Js = !1,
    Gs = {
        ariaPairs: {
            ".js-menu-target": ["aria-expanded", "aria-haspopup"],
            ".js-details-target": ["aria-expanded"]
        }
    };
    n.ready.then(function() { ((Js = null != document.querySelector(".js-header-wrapper.stats-ui-enabled")) || window.testEnvA11yErrors || ee("ACCESSIBILITY_UI_WARNING") || ee("LOG_ACCESSIBILITY")) && (requestIdleCallback(function() {
            return Ks(document, ne, Gs)
        }), document.addEventListener("pjax:end",
        function(e) {
            requestIdleCallback(function() {
                return Ks(e.target, ne, Gs)
            })
        }), document.addEventListener("facebox:reveal",
        function() {
            var e = document.querySelector(".facebox");
            requestIdleCallback(function() {
                return Ks(e, ne, Gs)
            })
        }))
    });
    var Xs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function(e) {
        return typeof e
    }: function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
    },
    Ys = (function() {
        var e = "function" == typeof Symbol && Symbol.
        for && Symbol.
        for ("react.element") || 60103
    } (),
    function() {
        function e(e) {
            this.value = e
        }
        function t(t) {
            function n(a, o) {
                try {
                    var s = t[a](o),
                    i = s.value;
                    i instanceof e ? Promise.resolve(i.value).then(function(e) {
                        n("next", e)
                    },
                    function(e) {
                        n("throw", e)
                    }) : r(s.done ? "return": "normal", s.value)
                } catch(e) {
                    r("throw", e)
                }
            }
            function r(e, t) {
                switch (e) {
                case "return":
                    a.resolve({
                        value:
                        t,
                        done: !0
                    });
                    break;
                case "throw":
                    a.reject(t);
                    break;
                default:
                    a.resolve({
                        value:
                        t,
                        done: !1
                    })
                } (a = a.next) ? n(a.key, a.arg) : o = null
            }
            var a, o;
            this._invoke = function(e, t) {
                return new Promise(function(r, s) {
                    var i = {
                        key: e,
                        arg: t,
                        resolve: r,
                        reject: s,
                        next: null
                    };
                    o ? o = o.next = i: (a = o = i, n(e, t))
                })
            },
            "function" != typeof t.
            return && (this.
            return = void 0)
        }
        "function" == typeof Symbol && Symbol.asyncIterator && (t.prototype[Symbol.asyncIterator] = function() {
            return this
        }),
        t.prototype.next = function(e) {
            return this._invoke("next", e)
        },
        t.prototype.
        throw = function(e) {
            return this._invoke("throw", e)
        },
        t.prototype.
        return = function(e) {
            return this._invoke("return", e)
        }
    } (),
    function(e) {
        return function() {
            var t = e.apply(this, arguments);
            return new Promise(function(e, n) {
                function r(a, o) {
                    try {
                        var s = t[a](o),
                        i = s.value
                    } catch(e) {
                        return void n(e)
                    }
                    if (!s.done) return Promise.resolve(i).then(function(e) {
                        r("next", e)
                    },
                    function(e) {
                        r("throw", e)
                    });
                    e(i)
                }
                return r("next")
            })
        }
    }),
    Qs = function(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    },
    Zs = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    } (),
    ei = (Object.assign,
    function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }),
    ti = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    },
    ni = ("undefined" == typeof global ? self: global,
    function() {
        return function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [],
                r = !0,
                a = !1,
                o = void 0;
                try {
                    for (var s, i = e[Symbol.iterator](); ! (r = (s = i.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                } catch(e) {
                    a = !0,
                    o = e
                } finally {
                    try { ! r && i.
                        return && i.
                        return ()
                    } finally {
                        if (a) throw o
                    }
                }
                return n
            } (e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    } ()),
    ri = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0,
            n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    };
    o.onInput(".js-advanced-search-prefix",
    function() {
        re()
    }),
    i.on("change", ".js-advanced-search-prefix", re),
    o.onFocus(".js-advanced-search-input",
    function(e) {
        var t = a.closest(e, ".js-advanced-search-label");
        t.classList.add("focus"),
        e.addEventListener("blur",
        function() {
            return t.classList.remove("focus")
        },
        {
            once: !0
        })
    }),
    i.on("click", ".js-see-all-search-cheatsheet",
    function(e) {
        e.preventDefault();
        var t = !0,
        n = !1,
        r = void 0;
        try {
            for (var a, o = document.querySelectorAll(".js-more-cheatsheet-info")[Symbol.iterator](); ! (t = (a = o.next()).done); t = !0) {
                a.value.classList.remove("d-none")
            }
        } catch(e) {
            n = !0,
            r = e
        } finally {
            try { ! t && o.
                return && o.
                return ()
            } finally {
                if (n) throw r
            }
        }
    }),
    s.observe(".js-advanced-search-input",
    function() {
        re()
    }),
    l.remoteForm(".js-app-bgcolor-form",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (r = t.querySelector(".js-app-bgcolor-save-notice")) {
                        e.next = 3;
                        break
                    }
                    return e.abrupt("return");
                case 3:
                    return a = void 0,
                    e.prev = 4,
                    e.next = 7,
                    n.html();
                case 7:
                    a = e.sent,
                    e.next = 13;
                    break;
                case 10:
                    e.prev = 10,
                    e.t0 = e.
                    catch(4),
                    r.classList.remove("visible");
                case 13:
                    a && (r.classList.add("visible"), setTimeout(function() {
                        return r.classList.remove("visible")
                    },
                    1500));
                case 14:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[4, 10]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()),
    o.onInput(".js-app-bgcolor-input",
    function(e) {
        var t = c(e.target, HTMLInputElement),
        n = a.closest(t, "form", HTMLFormElement),
        r = t.value.replace(/^#/, "");
        if (r.length < 1) return t.classList.remove("text-red"),
        void se(n, t.defaultValue);
        t.checkValidity() ? (t.classList.remove("text-red"), se(n, r), n.classList.contains("js-app-bgcolor-form") && u(function() {
            return function(e, t) {
                t.checkValidity() && d.submit(e)
            } (n, t)
        },
        400)()) : (t.classList.add("text-red"), se(n, t.defaultValue))
    }),
    i.on("click", ".js-banner .js-next",
    function(e) {
        var t = a.closest(e.currentTarget, ".js-banner"),
        n = a.query(t, ".js-dismiss", HTMLButtonElement),
        r = a.query(t, ".js-next", HTMLButtonElement),
        o = a.query(t, ".js-page.d-block"),
        s = c(ie(o, "js-page"), HTMLElement);
        o.classList.remove("d-block"),
        o.classList.add("d-none"),
        s.classList.remove("d-none"),
        s.classList.add("d-block"),
        ie(s, "js-page") || (r.classList.add("d-none"), n.classList.remove("d-none"))
    }),
    s.observe(".js-banner",
    function(e) {
        var t = c(e, HTMLDivElement),
        n = a.query(t, ".js-dismiss", HTMLButtonElement);
        if (t.querySelectorAll(".js-page").length > 0) {
            var r = a.query(t, ".js-next", HTMLButtonElement),
            o = a.query(t, ".js-page.d-block", HTMLDivElement);
            o && !ie(o, "js-page") ? n.classList.remove("d-none") : r.classList.remove("d-none")
        } else n.classList.remove("d-none")
    }),
    l.remoteForm("form.js-ajax-pagination, .js-ajax-pagination form",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return r = a.closest(t, ".js-ajax-pagination"),
                    o = void 0,
                    e.prev = 2,
                    e.next = 5,
                    n.html();
                case 5:
                    o = e.sent,
                    e.next = 16;
                    break;
                case 8:
                    if (e.prev = 8, e.t0 = e.
                    catch(2), !e.t0.response || 404 !== e.t0.response.status) {
                        e.next = 15;
                        break
                    }
                    return r.remove(),
                    e.abrupt("return");
                case 15:
                    throw e.t0;
                case 16:
                    r.replaceWith(o.html),
                    i.fire(t, "page:loaded");
                case 18:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[2, 8]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ());
    var ai = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (n = "Something went wrong", (r = document.createElement("dd")).classList.add("error"), !(t.response instanceof Response)) {
                        e.next = 8;
                        break
                    }
                    if (422 !== t.response.status) {
                        e.next = 8;
                        break
                    }
                    return e.next = 7,
                    t.response.text();
                case 7:
                    n = e.sent;
                case 8:
                    return t.response instanceof Response && /text\/html/.test(t.response.headers.get("Content-Type")) ? r.innerHTML = n: r.textContent = n,
                    e.abrupt("return", r);
                case 10:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } ();
    Object.setPrototypeOf(ce.prototype, HTMLElement.prototype),
    Object.setPrototypeOf(ce, HTMLElement);
    var oi = new WeakMap,
    si = new WeakMap,
    ii = function(e) {
        function n() {
            Qs(this, n);
            var e = ti(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            return e.boundCheck = e.check.bind(e),
            e
        }
        return ei(n, ce),
        Zs(n, [{
            key: "connectedCallback",
            value: function() {
                var e = this.querySelectorAll("input, textarea");
                0 !== e.length && (t(e[0] instanceof HTMLInputElement || e[0] instanceof HTMLTextAreaElement, "null.js:66"), this.input = e[0], this.formGroup = a.closest(this.input, "dl.form-group"), m.addThrottledInputEventListener(this.input, this.boundCheck, {
                    wait: 300
                }))
            }
        },
        {
            key: "disconnectedCallback",
            value: function() {
                m.removeThrottledInputEventListener(this.input, this.boundCheck)
            }
        },
        {
            key: "loading",
            value: function(e) {
                this.input.classList.toggle("is-autocheck-loading", e),
                this.formGroup.classList.toggle("is-loading", e)
            }
        },
        {
            key: "clearErrors",
            value: function() {
                this.formGroup.classList.remove("errored"),
                this.formGroup.classList.remove("warn"),
                this.input.classList.remove("is-autocheck-errored");
                var e = this.formGroup.querySelector("p.note");
                e && e.classList.remove("d-none");
                var t = this.formGroup.querySelector("dd.error");
                t && t.remove();
                var n = this.formGroup.querySelector("dd.warning");
                n && n.remove()
            }
        },
        {
            key: "setError",
            value: function() {
                var e = Ys(regeneratorRuntime.mark(function e(t) {
                    var n, r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            return this.clearErrors(),
                            this.input.classList.add("is-autocheck-errored"),
                            this.formGroup.classList.add("errored"),
                            (n = this.formGroup.querySelector("p.note")) && n.classList.add("d-none"),
                            e.next = 7,
                            ai(t);
                        case 7:
                            r = e.sent,
                            this.formGroup.append(r),
                            i.fire(this.input, "autocheck:error");
                        case 10:
                        case "end":
                            return e.stop()
                        }
                    },
                    e, this)
                }));
                return function(t) {
                    return e.apply(this, arguments)
                }
            } ()
        },
        {
            key: "complete",
            value: function() {
                this.loading(!1),
                i.fire(this.input, "autocheck:complete")
            }
        },
        {
            key: "performCheck",
            value: function() {
                var e = Ys(regeneratorRuntime.mark(function e(t, n, r, a) {
                    var o;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            return (o = oi.get(t)) || (o = new f, oi.set(t, o)),
                            n.append("authenticity_token", a),
                            e.abrupt("return", o.push(v.fetchText(r, {
                                method: "post",
                                body: n
                            })));
                        case 4:
                        case "end":
                            return e.stop()
                        }
                    },
                    e, this)
                }));
                return function(t, n, r, a) {
                    return e.apply(this, arguments)
                }
            } ()
        },
        {
            key: "check",
            value: function() {
                var e = Ys(regeneratorRuntime.mark(function e() {
                    var t, n, r, a, o;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (this.src) {
                                e.next = 2;
                                break
                            }
                            throw new Error("missing src");
                        case 2:
                            if (this.csrf) {
                                e.next = 4;
                                break
                            }
                            throw new Error("missing csrf");
                        case 4:
                            if ((t = new FormData).append("value", this.input.value), i.fire(this.input, "autocheck:send", {
                                body: t
                            }), !(n = t.entries ? [].concat(ri(t.entries())).sort().toString() : null) || n !== si.get(this.input)) {
                                e.next = 10;
                                break
                            }
                            return e.abrupt("return");
                        case 10:
                            if (si.set(this.input, n), this.clearErrors(), this.input.classList.remove("is-autocheck-successful"), this.input.value.trim()) {
                                e.next = 16;
                                break
                            }
                            return this.complete(),
                            e.abrupt("return");
                        case 16:
                            return this.loading(!0),
                            e.prev = 17,
                            e.next = 20,
                            this.performCheck(this.input, t, this.src, this.csrf);
                        case 20:
                            r = e.sent,
                            this.input.classList.add("is-autocheck-successful"),
                            this.formGroup.classList.add("successed"),
                            i.fire(this.input, "autocheck:success", r),
                            (a = r ? r.trim() : null) && (this.formGroup.classList.add("warn"), (o = document.createElement("dd")).classList.add("warning"), o.innerHTML = a, this.formGroup.append(o)),
                            e.next = 32;
                            break;
                        case 28:
                            return e.prev = 28,
                            e.t0 = e.
                            catch(17),
                            e.next = 32,
                            this.setError(e.t0);
                        case 32:
                            return e.prev = 32,
                            this.complete(),
                            e.finish(32);
                        case 35:
                        case "end":
                            return e.stop()
                        }
                    },
                    e, this, [[17, 28, 32, 35]])
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            } ()
        },
        {
            key: "src",
            get: function() {
                var e = this.getAttribute("src");
                if (e) {
                    var t = this.ownerDocument.createElement("a");
                    return t.href = e,
                    t.href
                }
                return ""
            },
            set: function(e) {
                e ? this.setAttribute(e) : this.removeAttribute(e)
            }
        },
        {
            key: "csrf",
            get: function() {
                var e = this.getAttribute("csrf");
                if (e) return e;
                var n = this.input.form;
                t(n, "null.js:98");
                var r = n.querySelector("input[name=authenticity_token]");
                return r instanceof HTMLInputElement ? r.value: ""
            },
            set: function(e) {
                e ? this.setAttribute(e) : this.removeAttribute(e)
            }
        }]),
        n
    } ();
    window.customElements.get("auto-check") || (window.AutoCheckElement = ii, window.customElements.define("auto-check", ii));
    var ci = function() {
        var e = Ys(regeneratorRuntime.mark(function e(n) {
            var r, a, o, s, i, c;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return r = n.form,
                    t(r, "null.js:34"),
                    r.classList.add("is-sending"),
                    e.prev = 3,
                    a = d.serialize(r),
                    o = (r.action + "&" + a).replace(/[?&]/, "?"),
                    e.next = 8,
                    ui.push(v.fetchText(o));
                case 8:
                    s = e.sent,
                    i = r.getAttribute("data-results-container"),
                    (c = i ? document.getElementById(i) : null) && (c.innerHTML = s),
                    p.replaceState(null, "", "?" + a);
                case 13:
                    return e.prev = 13,
                    r.classList.remove("is-sending"),
                    e.finish(13);
                case 16:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[3, , 13, 16]])
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } (),
    ui = new f;
    o.onFocus(".js-autosearch-field",
    function(e) {
        var n = e;
        t(n instanceof HTMLInputElement, "null.js:54"),
        m.addThrottledInputEventListener(n, ci),
        n.addEventListener("blur",
        function() {
            return m.removeThrottledInputEventListener(n, ci)
        },
        {
            once: !0
        })
    }),
    i.on("change", "form[data-autosubmit]",
    function(e) {
        var t = c(e.currentTarget, HTMLFormElement);
        d.submit(t)
    });
    var li = function() {
        var e = Ys(regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.loaded;
                case 2:
                    null == mi && (mi = requestIdleCallback(le));
                case 3:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function() {
            return e.apply(this, arguments)
        }
    } (),
    di = [],
    mi = null;
    ue({
        features: y
    }),
    s.observe("a.btn.disabled", {
        add: function(e) {
            e.addEventListener("click", de)
        },
        remove: function(e) {
            e.removeEventListener("click", de)
        }
    }),
    i.on("change", ".js-check-all",
    function(e) {
        t(e instanceof Event, "null.js:57");
        var n = e.currentTarget,
        r = e.detail && e.detail.relatedTarget;
        if (!r || !r.classList.contains("js-check-all-item")) {
            var o = me(n),
            s = !0,
            i = !1,
            c = void 0;
            try {
                for (var u, l = a.querySelectorAll(o, ".js-check-all-item", HTMLInputElement)[Symbol.iterator](); ! (s = (u = l.next()).done); s = !0) {
                    var d = u.value;
                    d.classList.remove("is-last-changed"),
                    fe(n, d, n.checked)
                }
            } catch(e) {
                i = !0,
                c = e
            } finally {
                try { ! s && l.
                    return && l.
                    return ()
                } finally {
                    if (i) throw c
                }
            }
        }
    });
    var fi = null;
    i.on("mousedown", ".js-check-all-item",
    function(e) {
        t(e instanceof MouseEvent, "null.js:74"),
        fi = e.shiftKey
    }),
    i.on("change", ".js-check-all-item",
    function(e) {
        t(e instanceof Event, "null.js:79");
        var n = e.target,
        r = e.detail && e.detail.relatedTarget;
        if (!r || !r.classList.contains("js-check-all") && !r.classList.contains("js-check-all-item")) {
            var o = me(n),
            s = a.query(o, ".js-check-all", HTMLInputElement),
            i = Array.from(a.querySelectorAll(o, ".js-check-all-item", HTMLInputElement)),
            c = i.filter(function(e) {
                return e.classList.contains("is-last-changed")
            })[0];
            if (fi && c) {
                var u = [i.indexOf(c), i.indexOf(n)].sort(),
                l = ni(u, 2),
                d = l[0],
                m = l[1],
                f = !0,
                v = !1,
                p = void 0;
                try {
                    for (var h, g = i.slice(d, +m + 1 || 9e9)[Symbol.iterator](); ! (f = (h = g.next()).done); f = !0) {
                        fe(n, h.value, n.checked)
                    }
                } catch(e) {
                    v = !0,
                    p = e
                } finally {
                    try { ! f && g.
                        return && g.
                        return ()
                    } finally {
                        if (v) throw p
                    }
                }
            }
            fi = null;
            var y = !0,
            b = !1,
            j = void 0;
            try {
                for (var L, w = i[Symbol.iterator](); ! (y = (L = w.next()).done); y = !0) {
                    L.value.classList.remove("is-last-changed")
                }
            } catch(e) {
                b = !0,
                j = e
            } finally {
                try { ! y && w.
                    return && w.
                    return ()
                } finally {
                    if (b) throw j
                }
            }
            n.classList.add("is-last-changed");
            var x = i.length,
            k = i.filter(function(e) {
                return e.checked
            }).length;
            fe(n, s, k === x, x > k && k > 0)
        }
    }),
    i.on("change", ".js-check-all-item",
    function(e) {
        var t = me(e.currentTarget),
        n = t.querySelector(".js-check-all-count");
        if (n) {
            var r = t.querySelectorAll(".js-check-all-item:checked").length;
            n.textContent = r.toString()
        }
    }),
    i.on("click", ".js-comment-edit-button",
    function(e) {
        var n = a.closest(e.currentTarget, ".js-comment");
        n.classList.add("is-comment-editing"),
        a.query(n, ".js-write-tab").click();
        var r = a.query(n, ".js-comment-field");
        t(r instanceof HTMLTextAreaElement, "null.js:17"),
        r.focus(),
        i.fire(r, "change");
        var o = e.currentTarget.closest(".js-dropdown-details");
        o && o.removeAttribute("open")
    }),
    i.on("click", ".js-comment-hide-button",
    function(e) {
        var t = a.closest(e.currentTarget, ".js-comment").querySelector(".js-minimize-comment");
        t && t.classList.remove("d-none");
        var n = e.currentTarget.closest(".js-dropdown-details");
        n && n.removeAttribute("open")
    }),
    i.on("click", ".js-comment-hide-minimize-form",
    function(e) {
        a.closest(e.currentTarget, ".js-minimize-comment").classList.add("d-none")
    }),
    i.on("click", ".js-comment-cancel-button",
    function(e) {
        var n = a.closest(e.currentTarget, "form", HTMLFormElement),
        r = e.currentTarget.getAttribute("data-confirm-text") || "";
        if (b.hasDirtyFields(n) && !confirm(r)) return ! 1;
        var o = !0,
        s = !1,
        i = void 0;
        try {
            for (var c, u = n.querySelectorAll("input, textarea")[Symbol.iterator](); ! (o = (c = u.next()).done); o = !0) {
                var l = c.value;
                t(l instanceof HTMLInputElement || l instanceof HTMLTextAreaElement, "null.js:54"),
                l.value = l.defaultValue
            }
        } catch(e) {
            s = !0,
            i = e
        } finally {
            try { ! o && u.
                return && u.
                return ()
            } finally {
                if (s) throw i
            }
        }
        var d = e.currentTarget.closest(".js-comment");
        d && d.classList.remove("is-comment-editing")
    }),
    l.remoteForm(".js-comment-delete, .js-comment .js-comment-update, .js-issue-update, .js-comment-minimize, .js-comment-unminimize",
    function(e, t, n) {
        var r = a.closest(e, ".js-comment");
        r.classList.add("is-comment-loading");
        var o = r.getAttribute("data-body-version");
        o && n.headers.set("X-Body-Version", o)
    }),
    l.remoteForm(".js-comment .js-comment-update",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(n, r) {
            var o, s, i, c, u, l, d, m, f, v, p, h, g, y;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return o = void 0,
                    s = a.closest(n, ".js-comment"),
                    e.prev = 2,
                    e.next = 5,
                    r.json();
                case 5:
                    o = e.sent,
                    e.next = 19;
                    break;
                case 8:
                    if (e.prev = 8, e.t0 = e.
                    catch(2), 422 !== e.t0.response.status) {
                        e.next = 18;
                        break
                    }
                    if (! (i = JSON.parse(e.t0.response.text)).errors) {
                        e.next = 16;
                        break
                    }
                    return (c = s.querySelector(".js-comment-update-error")) && (c.textContent = "There was an error posting your comment: " + i.errors.join(", "), c.style.display = "block"),
                    e.abrupt("return");
                case 16:
                    e.next = 19;
                    break;
                case 18:
                    throw e.t0;
                case 19:
                    if (o) {
                        e.next = 21;
                        break
                    }
                    return e.abrupt("return");
                case 21:
                    for (u = o.json, (l = s.querySelector(".js-comment-body")) && (l.innerHTML = u.body), (d = s.querySelector(".js-comment-update-error")) && (d.style.display = "none"), s.setAttribute("data-body-version", u.newBodyVersion), (m = s.querySelector(".js-body-version")) instanceof HTMLInputElement && (m.value = u.newBodyVersion), f = !0, v = !1, p = void 0, e.prev = 32, h = s.querySelectorAll("input, textarea")[Symbol.iterator](); ! (f = (g = h.next()).done); f = !0) y = g.value,
                    t(y instanceof HTMLInputElement || y instanceof HTMLTextAreaElement, "null.js:118"),
                    y.defaultValue = y.value;
                    e.next = 40;
                    break;
                case 36:
                    e.prev = 36,
                    e.t1 = e.
                    catch(32),
                    v = !0,
                    p = e.t1;
                case 40:
                    e.prev = 40,
                    e.prev = 41,
                    !f && h.
                    return && h.
                    return ();
                case 43:
                    if (e.prev = 43, !v) {
                        e.next = 46;
                        break
                    }
                    throw p;
                case 46:
                    return e.finish(43);
                case 47:
                    return e.finish(40);
                case 48:
                    s.classList.remove("is-comment-stale", "is-comment-editing");
                case 49:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[2, 8], [32, 36, 40, 48], [41, , 43, 47]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()),
    l.remoteForm(".js-comment .js-comment-delete, .js-comment .js-comment-update, .js-comment-minimize, .js-comment-unminimize",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return r = a.closest(t, ".js-comment"),
                    e.prev = 1,
                    e.next = 4,
                    n.text();
                case 4:
                    e.next = 15;
                    break;
                case 6:
                    if (e.prev = 6, e.t0 = e.
                    catch(1), 422 !== e.t0.response.status) {
                        e.next = 14;
                        break
                    }
                    o = void 0;
                    try {
                        o = JSON.parse(e.t0.response.text)
                    } catch(e) {}
                    o && o.stale && r.classList.add("is-comment-stale"),
                    e.next = 15;
                    break;
                case 14:
                    throw e.t0;
                case 15:
                    r.classList.remove("is-comment-loading");
                case 16:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[1, 6]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()),
    l.remoteForm(".js-comment-delete",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(n, r) {
            var o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    r.json();
                case 2:
                    (o = n.closest(".js-comment-delete-container")) || (o = n.closest(".js-comment-container") || n.closest(".js-line-comments")) && 1 !== o.querySelectorAll(".js-comment").length && (o = a.closest(n, ".js-comment")),
                    t(o, "null.js:164"),
                    o.remove();
                case 6:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()),
    l.remoteForm(".js-issue-update",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o, s, i, c, u, l, d, m, f, v;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return (r = a.closest(t, ".js-details-container")).classList.remove("open"),
                    e.next = 4,
                    n.json();
                case 4:
                    for (o = e.sent, null != (s = o.json).issue_title && (a.query(r, ".js-issue-title").textContent = s.issue_title, (i = r.closest(".js-issues-results")) && (c = i.querySelector(".js-merge-pull-request textarea")) instanceof HTMLTextAreaElement && c.value === c.defaultValue && (c.value = c.defaultValue = s.issue_title)), document.title = s.page_title, u = !0, l = !1, d = void 0, e.prev = 11, m = t.elements[Symbol.iterator](); ! (u = (f = m.next()).done); u = !0)((v = f.value) instanceof HTMLInputElement || v instanceof HTMLTextAreaElement) && (v.defaultValue = v.value);
                    e.next = 19;
                    break;
                case 15:
                    e.prev = 15,
                    e.t0 = e.
                    catch(11),
                    l = !0,
                    d = e.t0;
                case 19:
                    e.prev = 19,
                    e.prev = 20,
                    !u && m.
                    return && m.
                    return ();
                case 22:
                    if (e.prev = 22, !l) {
                        e.next = 25;
                        break
                    }
                    throw d;
                case 25:
                    return e.finish(22);
                case 26:
                    return e.finish(19);
                case 27:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[11, 15, 19, 27], [20, , 22, 26]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()),
    l.remoteForm(".js-comment-minimize",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o, s, i, c;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.json();
                case 2:
                    r = a.closest(t, ".js-comment"),
                    (o = r.querySelector(".js-minimize-comment")) && o.classList.add("d-none"),
                    (s = a.closest(t, ".unminimized-comment")).classList.add("d-none"),
                    i = a.closest(t, ".js-minimizable-comment-group"),
                    (c = i.querySelector(".minimized-comment")) && c.classList.remove("d-none");
                case 10:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()),
    l.remoteForm(".js-comment-unminimize",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o, s, i;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.json();
                case 2:
                    r = a.closest(t, ".js-minimizable-comment-group"),
                    (o = r.querySelector(".unminimized-comment")) && o.classList.remove("d-none"),
                    (s = r.querySelector(".minimized-comment")) && s.classList.add("d-none"),
                    (i = r.querySelector(".js-comment-hide-button")) && i.classList.remove("d-none");
                case 9:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()),
    o.onFocus(".js-comment-field",
    function(e) {
        ve(e, !0),
        e.addEventListener("blur", pe, {
            once: !0
        })
    }),
    Object.setPrototypeOf(he.prototype, HTMLElement.prototype),
    Object.setPrototypeOf(he, HTMLElement);
    var vi = navigator.userAgent.match(/Macintosh/) ? "Meta": "Control",
    pi = "Meta" === vi ? "cmd": "ctrl",
    hi = document.createElement("template");
    hi.innerHTML = '\n  <div class="toolbar-group">\n    <div class="toolbar-item dropdown js-menu-container">\n      <button type="button" tabindex="-1" class="js-menu-target menu-target tooltipped tooltipped-n" aria-label="Add header text" aria-expanded="false" aria-haspopup="true">\n        <span data-octicon="text-size"></span>\n        <span class="dropdown-caret"></span>\n      </button>\n\n      <div class="dropdown-menu-content js-menu-content">\n        <ul class="dropdown-menu dropdown-menu-s">\n          <button type="button" class="dropdown-item dropdown-header1" data-prefix="# " data-ga-click="Markdown Toolbar, click, header1">\n            Header\n          </button>\n          <button type="button" class="dropdown-item dropdown-header2" data-prefix="## " data-ga-click="Markdown Toolbar, click, header2">\n            Header\n          </button>\n          <button type="button" class="dropdown-item dropdown-header3" data-prefix="### " data-ga-click="Markdown Toolbar, click, header3">\n            Header\n          </button>\n        </ul>\n      </div>\n    </div>\n\n    <button type="button" tabindex="-1" class="toolbar-item tooltipped tooltipped-n" aria-label="Add bold text <' + pi + '+b>" data-prefix="**" data-suffix="**" data-toolbar-hotkey="b" data-ga-click="Markdown Toolbar, click, bold" data-trim-first>\n      <span data-octicon="bold"></span>\n    </button>\n\n    <button type="button" tabindex="-1" class="toolbar-item tooltipped tooltipped-n" aria-label="Add italic text <' + pi + '+i>" data-prefix="_" data-suffix="_" data-toolbar-hotkey="i" data-ga-click="Markdown Toolbar, click, italic" data-trim-first>\n      <span data-octicon="italic"></span>\n    </button>\n  </div>\n\n  <div class="toolbar-group">\n    <button type="button" tabindex="-1" class="toolbar-item tooltipped tooltipped-n" aria-label="Insert a quote" data-prefix="> " data-multiline="true" data-ga-click="Markdown Toolbar, click, quote" data-surround-with-newlines>\n      <span data-octicon="quote"></span>\n    </button>\n\n    <button type="button" tabindex="-1" class="toolbar-item tooltipped tooltipped-n" aria-label="Insert code" data-prefix="`" data-suffix="`" data-block-prefix="```" data-block-suffix="```" data-ga-click="Markdown Toolbar, click, code">\n      <span data-octicon="code"></span>\n    </button>\n\n    <button type="button" tabindex="-1" class="toolbar-item tooltipped tooltipped-n" aria-label="Add a link <' + pi + '+k>" data-prefix="[" data-suffix="](url)" data-replace-next="url" data-toolbar-hotkey="k" data-scan-for="https?://" data-ga-click="Markdown Toolbar, click, link">\n      <span data-octicon="link"></span>\n    </button>\n  </div>\n\n  <div class="toolbar-group">\n    <button type="button" tabindex="-1" class="toolbar-item tooltipped tooltipped-n" aria-label="Add a bulleted list" data-multiline="true" data-prefix="- " data-multiline="true" data-ga-click="Markdown Toolbar, click, unordered list" data-surround-with-newlines>\n      <span data-octicon="list-unordered"></span>\n    </button>\n    <button type="button" tabindex="-1" class="toolbar-item tooltipped tooltipped-n" aria-label="Add a numbered list" data-prefix="1. " data-multiline="true" data-ga-click="Markdown Toolbar, click, ordered list" data-ordered-list>\n      <span data-octicon="list-ordered"></span>\n    </button>\n\n    <button type="button" tabindex="-1" class="toolbar-item tooltipped tooltipped-n" aria-label="Add a task list" data-prefix="- [ ] " data-toolbar-hotkey="L" data-multiline data-ga-click="Markdown Toolbar, click, task list" data-surround-with-newlines>\n      <span data-octicon="tasklist"></span>\n    </button>\n  </div>\n\n  <div class="toolbar-group">\n\n    <div class="toolbar-item select-menu select-menu-modal-right js-menu-container js-select-menu js-load-contents js-saved-reply-container"\n        data-feature="saved_replies">\n\n      <button type="button" tabindex="-1" class="js-menu-target menu-target tooltipped tooltipped-nw"\n         aria-label="Insert a reply" aria-expanded="false" aria-haspopup="true" data-ga-click="Markdown Toolbar, click, saved reply">\n        <span data-octicon="reply"></span>\n        <span class="dropdown-caret"></span>\n      </button>\n\n      <div class="select-menu-modal-holder js-menu-content js-navigation-container">\n        <div class="select-menu-modal">\n          <div class="select-menu-header">\n            <span data-octicon="x"></span>\n            <span class="select-menu-title">Select a reply</span>\n            <kbd>ctrl .</kbd>\n          </div>\n          <div class="js-select-menu-deferred-content"></div>\n          <div class="select-menu-loading-overlay anim-pulse">\n            <span data-octicon="octoface"></span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <button type="button" tabindex="-1" class="toolbar-item tooltipped tooltipped-nw" aria-label="Directly mention a user or team" data-prefix="@" data-prefix-space data-ga-click="Markdown Toolbar, click, mention">\n      <span data-octicon="mention"></span>\n    </button>\n\n    <button type="button" tabindex="-1" class="toolbar-item tooltipped tooltipped-nw" aria-label="Reference an issue or pull request" data-prefix="#" data-prefix-space data-ga-click="Markdown Toolbar, click, reference">\n      <span data-octicon="bookmark"></span>\n    </button>\n  </div>\n';
    var gi = function(e) {
        function n() {
            Qs(this, n);
            var e = ti(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            return e.classList.contains("toolbar-commenting") || (e.appendChild(hi.content.cloneNode(!0)),
            function(e) {
                var n = !0,
                r = !1,
                o = void 0;
                try {
                    for (var s, i = e.querySelectorAll("[data-octicon]")[Symbol.iterator](); ! (n = (s = i.next()).done); n = !0) {
                        var c = s.value,
                        u = c.getAttribute("data-octicon");
                        t(u, "null.js:172");
                        var l = a.query(e, ".octicon-" + u, Element).cloneNode(!0);
                        l.classList.remove("d-none"),
                        c.replaceWith(l)
                    }
                } catch(e) {
                    r = !0,
                    o = e
                } finally {
                    try { ! n && i.
                        return && i.
                        return ()
                    } finally {
                        if (r) throw o
                    }
                }
            } (e), e.classList.add("toolbar-commenting")),
            e
        }
        return ei(n, he),
        Zs(n, [{
            key: "connectedCallback",
            value: function() { !
                function(e) {
                    var n = {},
                    r = !0,
                    a = !1,
                    o = void 0;
                    try {
                        for (var s, i = e.querySelectorAll("[data-toolbar-hotkey]")[Symbol.iterator](); ! (r = (s = i.next()).done); r = !0) {
                            var c = s.value,
                            u = c.getAttribute("data-toolbar-hotkey");
                            t(u, "null.js:184"),
                            n[vi + "+" + u] = c
                        }
                    } catch(e) {
                        a = !0,
                        o = e
                    } finally {
                        try { ! r && i.
                            return && i.
                            return ()
                        } finally {
                            if (a) throw o
                        }
                    }
                    yi.set(e.field, n)
                } (this),
                function(e) {
                    var n = e.getAttribute("data-saved-reply-contents-url");
                    t(n, "null.js:207"),
                    a.query(e, '[data-feature="saved_replies"]').setAttribute("data-contents-url", n)
                } (this),
                this.field.addEventListener("keydown", ge);
                var e = !0,
                n = !1,
                r = void 0;
                try {
                    for (var o, s = this.buttons[Symbol.iterator](); ! (e = (o = s.next()).done); e = !0) {
                        o.value.addEventListener("click", we)
                    }
                } catch(e) {
                    n = !0,
                    r = e
                } finally {
                    try { ! e && s.
                        return && s.
                        return ()
                    } finally {
                        if (n) throw r
                    }
                }
            }
        },
        {
            key: "disconnectedCallback",
            value: function() {
                var e = this.buttons;
                if (e) {
                    var t = !0,
                    n = !1,
                    r = void 0;
                    try {
                        for (var a, o = e[Symbol.iterator](); ! (t = (a = o.next()).done); t = !0) {
                            a.value.removeEventListener("click", we)
                        }
                    } catch(e) {
                        n = !0,
                        r = e
                    } finally {
                        try { ! t && o.
                            return && o.
                            return ()
                        } finally {
                            if (n) throw r
                        }
                    }
                }
            }
        },
        {
            key: "field",
            get: function() {
                var e = this.getAttribute("for");
                t(e, "null.js:149");
                var n = document.getElementById(e);
                return t(n instanceof HTMLTextAreaElement, "null.js:151"),
                n
            }
        },
        {
            key: "buttons",
            get: function() {
                return this.querySelectorAll("button")
            }
        },
        {
            key: "features",
            get: function() {
                var e = this.getAttribute("features");
                return e ? e.split(" ").map(function(e) {
                    return e.trim()
                }) : []
            }
        },
        {
            key: "supportSavedReplyShortcut",
            get: function() {
                return this.hasAttribute("saved-reply-shortcut")
            }
        }]),
        n
    } (),
    yi = new WeakMap;
    window.customElements.get("markdown-toolbar") || (window.MarkdownToolbarElement = gi, window.customElements.define("markdown-toolbar", gi));
    var bi = null;
    i.on("menu:activate", ".js-select-menu",
    function(e) {
        e.currentTarget.classList.add("is-dirty")
    }),
    i.on("menu:deactivate", ".js-select-menu",
    function(e) {
        e.currentTarget.classList.remove("is-dirty")
    });
    var ji = {
        OS: "Meta",
        Win: "Meta",
        Windows: "Meta",
        Scroll: "ScrollLock",
        SpaceBar: " ",
        Left: "ArrowLeft",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Up: "ArrowUp",
        Del: "Delete",
        Esc: "Escape"
    },
    Li = {
        3 : "Cancel",
        6 : "Help",
        8 : "Backspace",
        9 : "Tab",
        12 : "Clear",
        13 : "Enter",
        16 : "Shift",
        17 : "Control",
        18 : "Alt",
        19 : "Pause",
        20 : "CapsLock",
        27 : "Escape",
        28 : "Convert",
        29 : "NonConvert",
        30 : "Accept",
        31 : "ModeChange",
        32 : " ",
        33 : "PageUp",
        34 : "PageDown",
        35 : "End",
        36 : "Home",
        37 : "ArrowLeft",
        38 : "ArrowUp",
        39 : "ArrowRight",
        40 : "ArrowDown",
        41 : "Select",
        42 : "Print",
        43 : "Execute",
        44 : "PrintScreen",
        45 : "Insert",
        46 : "Delete",
        91 : "OS",
        93 : "ContextMenu",
        106 : "*",
        107 : "+",
        109 : "-",
        110 : ".",
        111 : "/",
        144 : "NumLock",
        145 : "ScrollLock",
        181 : "VolumeMute",
        182 : "VolumeDown",
        183 : "VolumeUp",
        186 : ";",
        187 : "=",
        188 : ",",
        189 : "-",
        190 : ".",
        191 : "/",
        192 : "`",
        219 : "[",
        220 : "\\",
        221 : "]",
        222 : "'",
        224 : "Meta",
        225 : "AltGraph",
        246 : "Attn",
        247 : "CrSel",
        248 : "ExSel",
        249 : "EraseEof",
        250 : "Play",
        251 : "ZoomOut"
    },
    wi = {
        48 : ")",
        49 : "!",
        50 : "@",
        51 : "#",
        52 : "$",
        53 : "%",
        54 : "^",
        55 : "&",
        56 : "*",
        57 : "(",
        186 : ":",
        187 : "+",
        188 : "<",
        189 : "_",
        190 : ">",
        191 : "?",
        192 : "~",
        219 : "{",
        220 : "|",
        221 : "}",
        222 : '"'
    },
    xi = null,
    ki = Object.getOwnPropertyDescriptor(KeyboardEvent.prototype, "key");
    if (ki) if (xi = function(e) {
        return ki.get.apply(e)
    },
    /Macintosh.*Chrome/.test(navigator.userAgent)) {
        var Ei = /^Key[A-Z]$/;
        xi = function(e) {
            var t = ki.get.apply(e);
            if (e.metaKey && Ei.test(e.code) && e.code !== "Key" + t.toUpperCase()) {
                var n = String.fromCharCode(e.which);
                return e.shiftKey ? n.toUpperCase() : n.toLowerCase()
            }
            return ke(t, e.shiftKey)
        }
    } else / Macintosh. * Safari / .test(navigator.userAgent) && (xi = function(e) {
        return ke(ki.get.apply(e), e.shiftKey)
    });
    Object.defineProperty(KeyboardEvent.prototype, "key", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return xi ?
            function(e) {
                return ji[e] || e
            } (xi(this)) : function(e) {
                var t = String.fromCharCode(e.which),
                n = e.which;
                return ! e.shiftKey && n >= 49 && n <= 57 ? t: !e.shiftKey && n >= 96 && n <= 105 ? String(n - 95) : n >= 65 && n <= 90 ? e.shiftKey ? t: t.toLowerCase() : n >= 112 && n <= 123 ? "F" + (n - 111) : e.shiftKey ? wi[n] || "Unidentified": Li[n] || "Unidentified"
            } (this)
        }
    }),
    i.on("click", "[data-facebox]",
    function() {
        Us({
            div: this.getAttribute("data-facebox")
        },
        this.getAttribute("data-facebox-class"))
    }),
    i.on("click", ".js-flash-close",
    function(e) {
        var n = e.currentTarget.closest(".flash-messages"),
        r = e.currentTarget.closest(".flash");
        t(r, "null.js:24"),
        r.remove(),
        n && !n.querySelector(".flash") && n.remove()
    });
    var Si = new WeakMap;
    document.addEventListener("focus",
    function(e) {
        var t = e.target;
        Si.get(t) || (i.fire(t, "focusin:delay"), Si.set(t, !0))
    },
    {
        capture: !0
    }),
    document.addEventListener("blur",
    function(e) {
        setTimeout(function() {
            var t = e.target;
            t !== document.activeElement && (i.fire(t, "focusout:delay"), Si.delete(e.target))
        },
        200)
    },
    {
        capture: !0
    }),
    Object.setPrototypeOf(Ee.prototype, HTMLElement.prototype),
    Object.setPrototypeOf(Ee, HTMLElement);
    var Ti = function(e) {
        function t() {
            return Qs(this, t),
            ti(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return ei(t, Ee),
        Zs(t, [{
            key: "connectedCallback",
            value: function() {
                if (null === this.image && !x.isEmojiSupported()) {
                    this.textContent = "";
                    var e = function(e) {
                        var t = document.createElement("img");
                        return t.className = "emoji",
                        t.alt = e.getAttribute("alias") || "",
                        t.height = 20,
                        t.width = 20,
                        t
                    } (this);
                    e.src = this.getAttribute("fallback-src") || "",
                    this.appendChild(e)
                }
            }
        },
        {
            key: "image",
            get: function() {
                return this.firstElementChild instanceof HTMLImageElement ? this.firstElementChild: null
            }
        }]),
        t
    } ();
    window.customElements.get("g-emoji") || (window.GEmojiElement = Ti, window.customElements.define("g-emoji", Ti)),
    function() {
        function e() {
            var e = function() {
                if (this instanceof HTMLFormElement || this instanceof HTMLFieldSetElement) {
                    var e = !0,
                    t = !1,
                    n = void 0;
                    try {
                        for (var a, o = this.elements[Symbol.iterator](); ! (e = (a = o.next()).done); e = !0) if (!a.value.checkValidity()) return ! 1
                    } catch(e) {
                        t = !0,
                        n = e
                    } finally {
                        try { ! e && o.
                            return && o.
                            return ()
                        } finally {
                            if (t) throw n
                        }
                    }
                    return ! 0
                }
                if (this instanceof HTMLInputElement && "hidden" === this.type) return ! 0;
                if (r.get(this)) return ! 1;
                if (this.hasAttribute("required") && !this.value) return ! 1;
                var s = this.getAttribute("pattern");
                if (null != s && this.value) {
                    var i = new RegExp("^(?:" + s + ")$");
                    if (0 !== this.value.search(i)) return ! 1
                }
                return ! 0
            }.call(this);
            if (!e) {
                var t = new CustomEvent("invalid", {
                    bubbles: !1,
                    cancelable: !0
                });
                this.dispatchEvent(t)
            }
            return e
        }
        function t(e) {
            r.set(this, e)
        }
        var n = document.createElement("input");
        if (! ("checkValidity" in n && "setCustomValidity" in n && (n.required = !0, n.value = "hi", n.cloneNode().checkValidity()))) {
            var r = new WeakMap,
            a = !0,
            o = !1,
            s = void 0;
            try {
                for (var i, c = ["HTMLFormElement", "HTMLInputElement", "HTMLTextAreaElement", "HTMLSelectElement", "HTMLButtonElement", "HTMLFieldSetElement", "HTMLOutputElement"][Symbol.iterator](); ! (a = (i = c.next()).done); a = !0) {
                    var u = i.value;
                    window[u] && (window[u].prototype.checkValidity = e, "HTMLFormElement" !== u && (window[u].prototype.setCustomValidity = t))
                }
            } catch(e) {
                o = !0,
                s = e
            } finally {
                try { ! a && c.
                    return && c.
                    return ()
                } finally {
                    if (o) throw s
                }
            }
        }
    } ();
    var qi = ["input[pattern]", "input[required]", "textarea[required]", "[data-required-change]"].join(",");
    o.onFocus(qi,
    function(e) {
        function t() {
            var t = e.checkValidity();
            t !== n && e.form && Se(e.form),
            n = t
        }
        var n = e.checkValidity();
        e.addEventListener("input", t),
        e.addEventListener("blur",
        function n() {
            e.removeEventListener("input", t),
            e.removeEventListener("blur", n)
        })
    });
    var Ai = new WeakMap;
    s.observe("button[data-disable-invalid]", {
        constructor: HTMLButtonElement,
        initialize: function(e) {
            var t = e.form;
            t && (!
            function(e) {
                Ai.get(e) || (e.addEventListener("change",
                function() {
                    return Se(e)
                }), Ai.set(e, !0))
            } (t), e.disabled = !t.checkValidity())
        }
    }),
    s.observe("[data-required-change]",
    function(e) {
        function t() {
            e.setCustomValidity(e.value === e.defaultValue ? "unchanged": "")
        }
        e.addEventListener("input", t),
        e.addEventListener("change", t),
        t(),
        e.form && Se(e.form)
    }),
    document.addEventListener("reset",
    function(e) {
        if (e.target instanceof HTMLFormElement) {
            var t = e.target;
            setTimeout(function() {
                return Se(t)
            })
        }
    }),
    i.on("submit", ".js-normalize-submit",
    function(e) {
        this.checkValidity() || e.preventDefault()
    }),
    s.observe(".labeled-button:checked", {
        add: function(e) {
            Te(e, !0)
        },
        remove: function(e) {
            Te(e, !1)
        }
    }),
    o.onKey("keydown", "div.btn-sm, span.btn-sm",
    function(e) {
        t(e.target instanceof HTMLElement, "null.js:7"),
        "Enter" === e.key && (e.target.click(), e.preventDefault())
    }),
    l.remoteForm(".js-notice-dismiss",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.text();
                case 2:
                    (r = a.closest(t, ".js-notice")).remove();
                case 4:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()),
    n.ready.then(function() {
        function e(e) {
            0 === e && (null == s && (s = getComputedStyle(r).transition), r.style.transition = "none"),
            a = e,
            r.style.width = a + "%",
            0 === e && (r.clientWidth, r.style.transition = s || "")
        }
        function t() {
            0 === a && (a = 12),
            e(Math.min(a + 3, 95)),
            o = setTimeout(t, 500)
        }
        var n = document.getElementById("js-pjax-loader-bar");
        if (n) {
            var r = n.firstElementChild;
            if (r instanceof HTMLElement) {
                var a = 0,
                o = null,
                s = null;
                document.addEventListener("pjax:start",
                function() {
                    e(0),
                    n.classList.add("is-loading"),
                    o = setTimeout(t, 0)
                }),
                document.addEventListener("pjax:end",
                function() {
                    o && clearTimeout(o),
                    e(100),
                    n.classList.remove("is-loading")
                }),
                document.addEventListener("pjax:timeout",
                function(e) {
                    e.preventDefault()
                })
            }
        }
    });
    var Mi = null,
    Hi = "last_pjax_request",
    Ci = "pjax_start",
    Ii = "pjax_end";
    document.addEventListener("pjax:start",
    function(e) {
        e instanceof CustomEvent && e.detail && e.detail.url && (window.performance.mark(Ci), Mi = e.detail.url)
    }),
    document.addEventListener("pjax:end", qe),
    document.addEventListener("pjax:click",
    function(e) {
        if (window.onbeforeunload) return e.preventDefault()
    }),
    o.onKey("keydown", ".js-quick-submit",
    function(e) {
        var n = e.target;
        if (t(n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement, "null.js:14"), (e.ctrlKey || e.metaKey) && "Enter" === e.key) {
            var r = n.form;
            t(r instanceof HTMLFormElement, "null.js:18");
            var a = r.querySelector("input[type=submit], button[type=submit]");
            a && a.disabled || d.submit(r),
            e.preventDefault()
        }
    });
    var Ri = 0,
    _i = {
        INPUT: function(e) {
            return e.checked ? "[x] ": "[ ] "
        },
        CODE: function(e) {
            var n = e.textContent;
            return t(null != e.parentNode, "null.js:54"),
            "PRE" === e.parentNode.nodeName ? (e.textContent = n.replace(/^/gm, "    "), e.textContent) : n.indexOf("`") >= 0 ? "`` " + n + " ``": "`" + n + "`"
        },
        PRE: function(e) {
            t(null != e.parentNode && e.parentNode instanceof HTMLElement, "null.js:66");
            var n = e.parentNode;
            return "DIV" === n.nodeName && n.classList.contains("highlight") && (e.textContent = e.textContent.replace(/^/gm, "    "), e.append("\n\n")),
            e
        },
        STRONG: function(e) {
            return "**" + e.textContent + "**"
        },
        EM: function(e) {
            return "_" + e.textContent + "_"
        },
        BLOCKQUOTE: function(e) {
            var t = e.textContent.trim().replace(/^/gm, "> "),
            n = document.createElement("pre");
            return n.textContent = t + "\n\n",
            n
        },
        A: function(e) {
            var n = e.textContent;
            if (Ae(e, "issue-link", "user-mention", "team-mention")) return n;
            if (/^https?:/.test(n) && n === e.getAttribute("href")) return n;
            var r = e.getAttribute("href");
            return t(null != r, "null.js:96"),
            "[" + n + "](" + r + ")"
        },
        IMG: function(e) {
            var n = e.getAttribute("alt");
            if (t(null != n, "null.js:104"), Ae(e, "emoji")) return n;
            var r = e.getAttribute("src");
            return t(null != r, "null.js:111"),
            "![" + n + "](" + r + ")"
        },
        LI: function(e) {
            var n = e.parentNode;
            if (t(null != n, "null.js:119"), !
            function(e) {
                var t = e.childNodes[0],
                n = e.childNodes[1];
                return !! (t && e.childNodes.length < 3) && !("OL" !== t.nodeName && "UL" !== t.nodeName || n && (n.nodeType !== Node.TEXT_NODE || n.textContent.trim()))
            } (e)) switch (n.nodeName) {
            case "UL":
                e.prepend("* ");
                break;
            case "OL":
                if (Ri > 0 && !n.previousSibling) {
                    var r = Me(e) + Ri + 1;
                    e.prepend(r + "\\. ")
                } else e.prepend(Me(e) + 1 + ". ")
            }
            return e
        },
        OL: function(e) {
            var t = document.createElement("li");
            return t.appendChild(document.createElement("br")),
            e.append(t),
            e
        },
        H1: function(e) {
            var t = parseInt(e.nodeName.slice(1));
            return e.prepend(Array(t + 1).join("#") + " "),
            e
        },
        UL: function(e) {
            return e
        }
    };
    _i.UL = _i.OL;
    for (var Fi = 2; Fi <= 6; ++Fi) _i["H" + Fi] = _i.H1;
    i.on("quote:selection", ".js-quote-markdown",
    function(e) {
        t(e instanceof CustomEvent, "null.js:36");
        var n = e.detail.selection;
        try {
            var r = function(e, n) {
                var r = document.body;
                t(r, "null.js:15");
                var a = document.createElement("div");
                a.appendChild(n),
                a.style.cssText = "position:absolute;left:-9999px;",
                r.appendChild(a);
                var o = void 0;
                try {
                    var s = document.createRange();
                    s.selectNodeContents(a),
                    e.removeAllRanges(),
                    e.addRange(s),
                    o = e.toString(),
                    e.removeAllRanges()
                } finally {
                    r.removeChild(a)
                }
                return o
            } (n,
            function(e) {
                var n = e.getRangeAt(0).cloneContents();
                Ri = 0,
                t(null != e.anchorNode && null != e.anchorNode.parentNode && e.anchorNode.parentNode instanceof HTMLElement, "selection's anchorNode and parentNode must not be null -- null.js:190");
                var r = e.anchorNode.parentNode.closest("li");
                if (r && (t(null != r.parentNode, "null.js:199"), "OL" === r.parentNode.nodeName && (Ri = Me(r)), !n.querySelector("li"))) {
                    var a = document.createElement("li");
                    t(null != r.parentNode, "null.js:207");
                    var o = document.createElement(r.parentNode.nodeName);
                    a.appendChild(n),
                    o.appendChild(a),
                    (n = document.createDocumentFragment()).appendChild(o)
                }
                return He(n,
                function(e, t) {
                    return e.replaceWith(t)
                }),
                n
            } (n));
            e.detail.selectionText = r.replace(/^\n+/, "").replace(/\s+$/, "")
        } catch(e) {
            setTimeout(function() {
                throw e
            })
        }
    }),
    document.addEventListener("keydown",
    function(e) {
        if (! (e.defaultPrevented || "r" !== L(e) || e.target instanceof Node && d.isFormField(e.target))) {
            var t = window.getSelection();
            t &&
            function(e) {
                var t = e.toString().trim();
                if (!t) return ! 1;
                var n = e.focusNode;
                if (!n) return ! 1;
                if (n.nodeType !== Node.ELEMENT_NODE && (n = n.parentNode), !(n instanceof Element)) return ! 1;
                var r = n.closest(".js-quote-selection-container");
                if (!r) return ! 1;
                var o = {
                    selection: e,
                    selectionText: t
                };
                if (!i.fire(r, "quote:selection", o)) return ! 0;
                t = o.selectionText;
                var s = a.querySelectorAll(r, ".js-quote-selection-target", HTMLTextAreaElement).filter(E)[0];
                if (!s) return ! 1;
                var c = "> " + t.replace(/\n/g, "\n> ") + "\n\n";
                return s.value && (c = s.value + "\n\n" + c),
                d.changeValue(s, c),
                s.focus(),
                s.selectionStart = s.value.length,
                s.scrollTop = s.scrollHeight,
                !0
            } (t) && e.preventDefault()
        }
    }),
    s.observe(".has-removed-contents",
    function() {
        var e = void 0;
        return {
            add: function(t) {
                e = Array.from(t.childNodes);
                var n = !0,
                r = !1,
                a = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); ! (n = (o = s.next()).done); n = !0) {
                        var c = o.value;
                        t.removeChild(c)
                    }
                } catch(e) {
                    r = !0,
                    a = e
                } finally {
                    try { ! n && s.
                        return && s.
                        return ()
                    } finally {
                        if (r) throw a
                    }
                }
                var u = t.closest("form");
                u && i.fire(u, "change")
            },
            remove: function(t) {
                var n = !0,
                r = !1,
                a = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); ! (n = (o = s.next()).done); n = !0) {
                        var c = o.value;
                        t.appendChild(c)
                    }
                } catch(e) {
                    r = !0,
                    a = e
                } finally {
                    try { ! n && s.
                        return && s.
                        return ()
                    } finally {
                        if (r) throw a
                    }
                }
                var u = t.closest("form");
                u && i.fire(u, "change")
            }
        }
    });
    var Pi = null;
    window.addEventListener("submit",
    function(e) {
        Pi = e.target,
        k(function() {
            e.defaultPrevented && (Pi = null)
        })
    },
    {
        capture: !0
    }),
    window.addEventListener("pageshow",
    function() {
        Re(Ce())
    }),
    window.addEventListener("pjax:end",
    function() {
        Re(Ce())
    }),
    window.addEventListener("pagehide",
    function() {
        Ie(Ce())
    }),
    window.addEventListener("pjax:beforeReplace",
    function(e) {
        var t = e.detail.previousState,
        n = t ? t.url: null;
        if (n) Ie(Ce(new URL(n)));
        else {
            var r = new Error("pjax:beforeReplace event.detail.previousState.url is undefined");
            setTimeout(function() {
                throw r
            })
        }
    });
    var Ni = new WeakMap;
    i.on("reset", "form",
    function(e) {
        var t = e.target.querySelector(".js-size-to-fit");
        t && (t.classList.remove("is-user-resized"), t.style.height = "", t.style.maxHeight = "")
    }),
    s.observe("textarea.js-size-to-fit",
    function(e) {
        function t() {
            if (!n.classList.contains("is-user-resized") && n.value !== r && E(n)) {
                var e = T.overflowOffset(n);
                if (! (null == e || e.top < 0 || e.bottom < 0)) {
                    var t = Number(getComputedStyle(n).height.replace(/px/, "")) + e.bottom;
                    n.style.maxHeight = t - 100 + "px";
                    var a = n.parentElement;
                    if (a instanceof HTMLElement) {
                        var o = a.style.height;
                        a.style.height = getComputedStyle(a).height,
                        n.style.height = "auto",
                        n.style.height = n.scrollHeight + "px",
                        a.style.height = o,
                        Fe(n).height = n.style.height
                    }
                    r = n.value
                }
            }
        }
        var n = c(e, HTMLTextAreaElement),
        r = null;
        return {
            add: function() {
                n.addEventListener("mousemove", _e),
                n.addEventListener("input", t),
                n.addEventListener("change", t),
                n.value && t()
            },
            remove: function() {
                n.removeEventListener("mousemove", _e),
                n.removeEventListener("input", t),
                n.removeEventListener("change", t)
            }
        }
    }),
    l.remoteForm(".js-social-form",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o, s, i, c, u, l, d;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.json();
                case 2:
                    for (r = e.sent, o = a.closest(t, ".js-social-container"), s = !0, i = !1, c = void 0, e.prev = 7, u = o.querySelectorAll(".js-social-count")[Symbol.iterator](); ! (s = (l = u.next()).done); s = !0)(d = l.value).textContent = r.json.count;
                    e.next = 15;
                    break;
                case 11:
                    e.prev = 11,
                    e.t0 = e.
                    catch(7),
                    i = !0,
                    c = e.t0;
                case 15:
                    e.prev = 15,
                    e.prev = 16,
                    !s && u.
                    return && u.
                    return ();
                case 18:
                    if (e.prev = 18, !i) {
                        e.next = 21;
                        break
                    }
                    throw c;
                case 21:
                    return e.finish(18);
                case 22:
                    return e.finish(15);
                case 23:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[7, 11, 15, 23], [16, , 18, 22]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ());
    var Oi = ["position:absolute;", "overflow:auto;", "word-wrap:break-word;", "top:0px;", "left:-9999px;"],
    Di = ["box-sizing", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "letter-spacing", "line-height", "max-height", "min-height", "padding-bottom", "padding-left", "padding-right", "padding-top", "border-bottom", "border-left", "border-right", "border-top", "text-decoration", "text-indent", "text-transform", "width", "word-spacing"],
    Bi = new WeakMap,
    Ui = new WeakMap,
    zi = {},
    Wi = function() {
        function e(t) {
            Qs(this, e),
            this.setup = this.setup.bind(this),
            this.teardown = this.teardown.bind(this),
            this.textarea = t.input,
            this.types = t.types,
            this.suggester = t.suggester,
            this.repositionManually = t.repositionManually,
            this.teardownManually = t.teardownManually,
            this.onActivate = t.onActivate,
            this.suggestions = t.suggestions || document.createElement("div"),
            this.disable = t.disable,
            this.keyDownHandler = this.onNavigationKeyDown.bind(this),
            this.navigationOpenHandler = this.onNavigationOpen.bind(this)
        }
        return Zs(e, [{
            key: "setup",
            value: function() {
                q(this.textarea.form).on("reset.suggester", this.deactivate.bind(this)),
                q(this.textarea).on("paste.suggester", this.onPaste.bind(this)),
                q(this.textarea).on("input.suggester", this.onInput.bind(this)),
                this.suggester.addEventListener("navigation:keydown", this.keyDownHandler),
                this.suggester.addEventListener("navigation:open", this.navigationOpenHandler),
                null == this.teardownManually && this.textarea.addEventListener("focusout:delay", this.teardown),
                this.loadSuggestions()
            }
        },
        {
            key: "teardown",
            value: function() {
                this.deactivate(),
                q(this.textarea).off(".suggester"),
                q(this.textarea.form).off(".suggester"),
                q(this.suggester).off(".suggester"),
                this.suggester.removeEventListener("navigation:keydown", this.keyDownHandler),
                this.suggester.removeEventListener("navigation:open", this.navigationOpenHandler),
                this.textarea.removeEventListener("focusout:delay", this.teardown),
                this.onSuggestionsLoaded = function() {
                    return null
                }
            }
        },
        {
            key: "onPaste",
            value: function() {
                this.deactivate(),
                this.justPasted = !0
            }
        },
        {
            key: "onInput",
            value: function() {
                if (!this.justPasted) return ! this.checkQuery() && void 0;
                this.justPasted = !1
            }
        },
        {
            key: "onNavigationKeyDown",
            value: function(e) {
                var t = e.detail;
                if (e.target instanceof HTMLElement && e.target.hasAttribute("data-value")) switch (t.hotkey) {
                case "Tab":
                    this.onNavigationOpen(e),
                    e.preventDefault();
                    break;
                case "Escape":
                    this.deactivate(),
                    e.stopImmediatePropagation(),
                    e.preventDefault()
                }
            }
        },
        {
            key: "_getDataValue",
            value: function(e) {
                return this.currentSearch.type.getValue ? this.currentSearch.type.getValue(e) : e.getAttribute("data-value")
            }
        },
        {
            key: "_findIndexOfPick",
            value: function(e, t) {
                var n = 1,
                r = !0,
                a = !1,
                o = void 0;
                try {
                    for (var s, i = e[Symbol.iterator](); ! (r = (s = i.next()).done); r = !0) {
                        var c = s.value;
                        if (this._getDataValue(c) === t) return n;
                        n++
                    }
                } catch(e) {
                    a = !0,
                    o = e
                } finally {
                    try { ! r && i.
                        return && i.
                        return ()
                    } finally {
                        if (a) throw o
                    }
                }
                return - 1
            }
        },
        {
            key: "logMention",
            value: function(e, t, n, r) {
                var a = n.getAttribute("data-mentionable-type");
                if (a) {
                    var o = n.getAttribute("data-mentionable-id");
                    if (o) {
                        var s = new FormData;
                        s.append("authenticity_token", t),
                        s.append("mentionable_type", a),
                        s.append("mentionable_id", o),
                        s.append("query_string", r),
                        v.fetch(e, {
                            method: "POST",
                            body: s
                        })
                    }
                }
            }
        },
        {
            key: "onNavigationOpen",
            value: function(e) {
                var t = this,
                n = c(e.target, HTMLElement);
                if (n.hasAttribute("data-value")) {
                    var r = this._getDataValue(n),
                    a = this.textarea.value.substring(0, this.currentSearch.endIndex),
                    o = this.textarea.value.substring(this.currentSearch.endIndex);
                    this.currentSearch.type.onSelection ? this.currentSearch.type.onSelection(r) : (a = a.replace(this.currentSearch.type.match, this.currentSearch.type.replace.replace("$value", r)), this.textarea.value = a + o),
                    this.deactivate(),
                    this.textarea.focus(),
                    this.textarea.selectionStart = a.length,
                    this.textarea.selectionEnd = a.length;
                    var s = this.suggester.getAttribute("data-log-mention-url");
                    if (s) {
                        var i = this.suggester.getAttribute("data-log-mention-authenticity-token");
                        i && requestIdleCallback(function() {
                            return t.logMention(s, i, n, t.currentSearch.query)
                        })
                    }
                }
            }
        },
        {
            key: "checkQuery",
            value: function() {
                var e = this,
                n = this.searchQuery();
                if (n) {
                    var r = null,
                    a = null;
                    if ("mention" === n.type.typeid && (r = this.suggestions.querySelector(".js-mention-suggestion-template")) && (r = c(r, HTMLTemplateElement), !(a = Ui.get(r)))) {
                        var o = r.getAttribute("data-mentions-json");
                        t("string" == typeof o, "must have data-mentions-json attribute -- null.js:282"),
                        a = JSON.parse(o),
                        Ui.set(r, a)
                    }
                    if (this.currentSearch && this.currentSearch === n.query) return;
                    return this.currentSearch = n,
                    this.search(n.type, n.query, a, r).then(function(t) {
                        return t ? e.activate(n.startIndex) : e.deactivate()
                    }),
                    this.currentSearch.query
                }
                this.currentSearch = null,
                this.deactivate()
            }
        },
        {
            key: "renderResults",
            value: function(e, t, n) {
                var r = !0,
                a = !1,
                o = void 0;
                try {
                    for (var s, i = t[Symbol.iterator](); ! (r = (s = i.next()).done); r = !0) {
                        var u = s.value;
                        n && e.appendChild(n.content.cloneNode(!0));
                        var l = c(e.children[e.children.length - 1], HTMLLIElement);
                        "user" === u.type ? this.renderUserResult(u, l) : "team" === u.type && this.renderTeamResult(u, l),
                        l.setAttribute("data-mentionable-type", u.type),
                        l.setAttribute("data-mentionable-id", u.id)
                    }
                } catch(e) {
                    a = !0,
                    o = e
                } finally {
                    try { ! r && i.
                        return && i.
                        return ()
                    } finally {
                        if (a) throw o
                    }
                }
            }
        },
        {
            key: "renderUserResult",
            value: function(e, t) {
                a.query(t, ".js-suggestion-text").textContent = e.login;
                a.query(t, ".js-suggestion-secondary-text").textContent = e.name,
                t.setAttribute("data-value", e.login),
                t.setAttribute("data-text", e.login + " " + e.name)
            }
        },
        {
            key: "renderTeamResult",
            value: function(e, t) {
                a.query(t, ".js-suggestion-text").textContent = e.name;
                a.query(t, ".js-suggestion-secondary-text").textContent = e.description,
                t.setAttribute("data-value", e.name),
                t.setAttribute("data-text", e.name + " " + e.description)
            }
        },
        {
            key: "activate",
            value: function(e) {
                this.textarea === document.activeElement && (this.onActivate && this.onActivate(this.suggester), null == this.repositionManually && q(this.suggester).css(Pe(this.textarea, e + 1)), this.suggester.classList.contains("active") || (this.suggester.classList.add("active"), this.textarea.classList.add("js-navigation-enable"), A.push(this.suggester), A.focus(this.suggester)))
            }
        },
        {
            key: "deactivate",
            value: function() {
                if (this.suggester.classList.contains("active")) {
                    this.suggester.classList.remove("active");
                    var e = this.suggester.querySelector(".suggestions");
                    e && (e.style.display = "none"),
                    this.textarea.classList.remove("js-navigation-enable"),
                    A.pop(this.suggester)
                }
            }
        },
        {
            key: "search",
            value: function() {
                var e = Ys(regeneratorRuntime.mark(function e(t, n, r, a) {
                    var o, s, i, c, u;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            t.search(this.suggestions, n, r);
                        case 2:
                            if (o = e.sent, s = o.element, i = o.results, !((c = i && Array.isArray(i) ? i.length: i) > 0 && s)) {
                                e.next = 16;
                                break
                            }
                            return u = s.cloneNode(!0),
                            r && Array.isArray(i) && this.renderResults(u, i, a),
                            this.suggester.innerHTML = "",
                            this.suggester.appendChild(u),
                            u.style.display = "block",
                            A.focus(this.suggester),
                            e.abrupt("return", !0);
                        case 16:
                            return e.abrupt("return", !1);
                        case 17:
                        case "end":
                            return e.stop()
                        }
                    },
                    e, this)
                }));
                return function(t, n, r, a) {
                    return e.apply(this, arguments)
                }
            } ()
        },
        {
            key: "searchQuery",
            value: function() {
                var e = this.textarea.selectionEnd,
                t = this.textarea.value.substring(0, e);
                if (!this.disable || !this.disable(t)) for (var n in this.types) {
                    var r = this.types[n],
                    a = t.match(r.match);
                    if (a) return r.normalizeMatch ? r.normalizeMatch(r, e, a) : this.normalizeMatch(r, e, a)
                }
            }
        },
        {
            key: "normalizeMatch",
            value: function(e, t, n) {
                var r = n[2];
                return {
                    type: e,
                    text: r,
                    query: n[3],
                    startIndex: t - r.length,
                    endIndex: t
                }
            }
        },
        {
            key: "loadSuggestions",
            value: function() {
                var e = Ys(regeneratorRuntime.mark(function e() {
                    var t, n, r;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!this.suggestions.hasChildNodes()) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            if (t = this.suggester.getAttribute("data-url")) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return");
                        case 5:
                            return n = zi[t] || (zi[t] = v.fetchText(t)),
                            e.next = 8,
                            n;
                        case 8:
                            return r = e.sent,
                            e.abrupt("return", this.onSuggestionsLoaded(r));
                        case 10:
                        case "end":
                            return e.stop()
                        }
                    },
                    e, this)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            } ()
        },
        {
            key: "onSuggestionsLoaded",
            value: function(e) {
                var t = M.parseHTML(document, e);
                if (this.suggestions.appendChild(t), document.activeElement === this.textarea) return this.currentSearch = null,
                this.checkQuery()
            }
        }]),
        e
    } (),
    Vi = new WeakMap,
    $i = Be,
    Ki = function() {
        function e(t) {
            Qs(this, e),
            this.container = t.container,
            this.selections = t.selections,
            this.inputWrap = t.inputWrap,
            this.input = t.input,
            this.suggestions = t.suggestions,
            this.tagTemplate = t.tagTemplate,
            this.form = this.input.closest("form"),
            this.delayTimer = null
        }
        return Zs(e, [{
            key: "setup",
            value: function() {
                var e = this;
                this.container.addEventListener("click",
                function(t) {
                    c(t.target, HTMLElement).matches(".js-remove") ? e.removeTag(t) : e.onFocus()
                }),
                this.input.addEventListener("focus", this.onFocus.bind(this)),
                this.input.addEventListener("blur", this.onBlur.bind(this)),
                this.input.addEventListener("keydown", this.onKeyDown.bind(this)),
                this.form.addEventListener("submit", this.onSubmit.bind(this)),
                this.setupSuggester()
            }
        },
        {
            key: "setupSuggester",
            value: function() {
                var e = this.suggestions.cloneNode(!0);
                this.container.appendChild(e),
                this.suggester = new Wi({
                    input: this.input,
                    suggester: this.suggestions,
                    suggestions: e,
                    repositionManually: !0,
                    teardownManually: !0,
                    onActivate: this.repositionSuggester.bind(this),
                    types: {
                        tag: {
                            match: /.+/i,
                            onSelection: this.selectTag.bind(this),
                            search: this.filterSuggestions.bind(this),
                            normalizeMatch: this.normalizeSuggestionMatch.bind(this)
                        }
                    }
                }),
                this.suggester.setup(),
                this.container.classList.add("js-suggester-container"),
                this.suggestions.classList.add("js-navigation-container", "suggester")
            }
        },
        {
            key: "onFocus",
            value: function() {
                this.inputWrap.classList.add("focus"),
                this.input !== document.activeElement && this.input.focus()
            }
        },
        {
            key: "onBlur",
            value: function() {
                this.inputWrap.classList.remove("focus"),
                this.isSuggesterVisible() || this.onSubmit()
            }
        },
        {
            key: "onSubmit",
            value: function() {
                this.val() && (this.selectTag(this.val()), this.suggester.deactivate())
            }
        },
        {
            key: "onKeyDown",
            value: function(e) {
                switch (L(e)) {
                case "Backspace":
                    this.onBackspace();
                    break;
                case "Enter":
                case "Tab":
                    this.taggifyValueWhenSuggesterHidden(e);
                    break;
                case ",":
                case " ":
                    this.taggifyValue(e)
                }
            }
        },
        {
            key: "taggifyValueWhenSuggesterHidden",
            value: function(e) { ! this.isSuggesterVisible() && this.val() && (e.preventDefault(), this.selectTag(this.val()))
            }
        },
        {
            key: "taggifyValue",
            value: function(e) {
                this.val() && (e.preventDefault(), this.selectTag(this.val()), this.suggester.deactivate())
            }
        },
        {
            key: "selectTag",
            value: function(e) {
                var t = this.normalizeTag(e),
                n = this.selectedTags();
                t && n.indexOf(t) < 0 && (this.selections.appendChild(this.templateTag(t)), this.input.value = "", i.fire(this.form, "tags:changed"))
            }
        },
        {
            key: "removeTag",
            value: function(e) {
                var t = c(e.target, HTMLElement);
                e.preventDefault();
                a.closest(t, ".js-tag-input-tag").remove(),
                i.fire(this.form, "tags:changed")
            }
        },
        {
            key: "templateTag",
            value: function(e) {
                var t = this.tagTemplate.cloneNode(!0);
                a.query(t, "input", HTMLInputElement).value = e;
                return a.query(t, ".js-placeholder-tag-name").replaceWith(e),
                t.classList.remove("d-none", "js-template"),
                t
            }
        },
        {
            key: "normalizeTag",
            value: function(e) {
                return e.toLowerCase().trim().replace(/[\s,']+/g, "-")
            }
        },
        {
            key: "onBackspace",
            value: function() {
                if (!this.val()) {
                    var e = this.selections.querySelector("li:last-child .js-remove");
                    e && e.click()
                }
            }
        },
        {
            key: "val",
            value: function() {
                return this.input.value
            }
        },
        {
            key: "repositionSuggester",
            value: function(e) {
                e.style.position = "absolute",
                e.style.top = this.container.clientHeight + "px"
            }
        },
        {
            key: "filterSuggestions",
            value: function(e, n) {
                var r = this,
                o = a.query(e, ".js-tag-suggestions", HTMLElement);
                if (o.hasAttribute("data-url")) return new Promise(function(e) {
                    null !== r.delayTimer && clearTimeout(r.delayTimer),
                    r.delayTimer = setTimeout(Ys(regeneratorRuntime.mark(function s() {
                        var i, c, u, l, d;
                        return regeneratorRuntime.wrap(function(s) {
                            for (;;) switch (s.prev = s.next) {
                            case 0:
                                if (! (r.input.value.trim().length < 1) && o) {
                                    s.next = 2;
                                    break
                                }
                                return s.abrupt("return", e({
                                    element: o,
                                    results: 0
                                }));
                            case 2:
                                return i = o.getAttribute("data-url"),
                                t(i, "null.js:304"),
                                c = new URL(i, window.location.origin),
                                (u = new URLSearchParams(c.search.slice(1))).append("q", n),
                                c.search = u.toString(),
                                s.next = 10,
                                v.fetchSafeDocumentFragment(document, c);
                            case 10:
                                if (l = s.sent, !(r.input.value.trim().length < 1)) {
                                    s.next = 13;
                                    break
                                }
                                return s.abrupt("return", e({
                                    element: o,
                                    results: 0
                                }));
                            case 13:
                                o.innerHTML = "",
                                o.appendChild(l),
                                d = a.querySelectorAll(o, "li", HTMLLIElement).length,
                                e({
                                    element: o,
                                    results: d
                                });
                            case 17:
                            case "end":
                                return s.stop()
                            }
                        },
                        s, r)
                    })), 300)
                });
                var s = this.selectedTags(),
                i = ze(o, n, {
                    limit: 5,
                    score: function(e, t) {
                        return s.indexOf(e) >= 0 ? 0 : s.indexOf(r.normalizeTag(e)) >= 0 ? 0 : Ne(e, t)
                    }
                });
                return Promise.resolve({
                    element: o,
                    results: i
                })
            }
        },
        {
            key: "normalizeSuggestionMatch",
            value: function(e, t, n) {
                return {
                    type: e,
                    text: n[0],
                    query: n[0]
                }
            }
        },
        {
            key: "selectedTags",
            value: function() {
                var e = a.querySelectorAll(this.selections, "input", HTMLInputElement);
                return Array.from(e).map(function(e) {
                    return e.value
                }).filter(function(e) {
                    return e.length > 0
                })
            }
        },
        {
            key: "isSuggesterVisible",
            value: function() {
                return !! this.suggestions.offsetParent
            }
        }]),
        e
    } ();
    s.observe(".js-tag-input-container",
    function(e) {
        new Ki({
            container: e,
            inputWrap: e.querySelector(".js-tag-input-wrapper"),
            input: e.querySelector('input[type="text"]'),
            suggestions: e.querySelector(".js-tag-input-options"),
            selections: e.querySelector(".js-tag-input-selected-tags"),
            tagTemplate: e.querySelector(".js-template")
        }).setup()
    });
    var Ji = function() {
        var e = Ys(regeneratorRuntime.mark(function e(n) {
            var r, a, o, s, i, c, u, l, d, m, f, p, h, g;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (r = n.currentTarget, t(r instanceof HTMLElement, "null.js:10"), a = r.getAttribute("data-url")) {
                        e.next = 5;
                        break
                    }
                    return e.abrupt("return");
                case 5:
                    for (o = v.fetchJSON(a), s = r.getAttribute("data-id"), t(s, "null.js:17"), i = document.querySelectorAll(".js-team-mention[data-id='" + s + "']"), c = !0, u = !1, l = void 0, e.prev = 12, d = i[Symbol.iterator](); ! (c = (m = d.next()).done); c = !0)(f = m.value).removeAttribute("data-url");
                    e.next = 20;
                    break;
                case 16:
                    e.prev = 16,
                    e.t0 = e.
                    catch(12),
                    u = !0,
                    l = e.t0;
                case 20:
                    e.prev = 20,
                    e.prev = 21,
                    !c && d.
                    return && d.
                    return ();
                case 23:
                    if (e.prev = 23, !u) {
                        e.next = 26;
                        break
                    }
                    throw l;
                case 26:
                    return e.finish(23);
                case 27:
                    return e.finish(20);
                case 28:
                    return e.prev = 28,
                    e.next = 31,
                    o;
                case 31:
                    0 === (p = e.sent).total ? p.members.push("This team has no members") : p.total > p.members.length && p.members.push(p.total - p.members.length + " more"),
                    Ve(i,
                    function(e) {
                        if (0 === e.length) return "";
                        if (1 === e.length) return e[0];
                        if (2 === e.length) return e.join(" and ");
                        var t = e[e.length - 1];
                        return e.slice(0, -1).concat("and " + t).join(", ")
                    } (p.members)),
                    e.next = 42;
                    break;
                case 36:
                    e.prev = 36,
                    e.t1 = e.
                    catch(28),
                    h = e.t1.response ? e.t1.response.status: 500,
                    g = r.getAttribute(404 === h ? "data-permission-text": "data-error-text"),
                    t(g, "null.js:35"),
                    Ve(i, g);
                case 42:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[12, 16, 20, 28], [21, , 23, 27], [28, 36]])
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } ();
    s.observe(".js-team-mention",
    function(e) {
        e.addEventListener("mouseenter", Ji)
    });
    var Gi = 0,
    Xi = -1,
    Yi = 0;
    Ge(".js-unread-item",
    function(e) {
        Xe(e)
    }),
    s.observe(".js-unread-item", {
        add: function() {
            Yi++
        },
        remove: function() {
            0 === --Yi &&
            function() {
                if (document.hasFocus()) {
                    var e = document.querySelector(".js-timeline-marker-form");
                    e && e instanceof HTMLFormElement && d.submit(e)
                }
            } ()
        }
    }),
    i.on("socket:message", ".js-discussion",
    function(e) {
        if (e.currentTarget === e.target) {
            var t = !0,
            n = !1,
            r = void 0;
            try {
                for (var a, o = document.querySelectorAll(".js-unread-item")[Symbol.iterator](); ! (t = (a = o.next()).done); t = !0) {
                    Xe(a.value)
                }
            } catch(e) {
                n = !0,
                r = e
            } finally {
                try { ! t && o.
                    return && o.
                    return ()
                } finally {
                    if (n) throw r
                }
            }
        }
    });
    var Qi = 0,
    Zi = /^\(\d+\)\s+/;
    s.observe(".js-unread-item", {
        add: function() {
            Qi++,
            Ye()
        },
        remove: function() {
            Qi--,
            Ye()
        }
    }),
    window.addEventListener("hashchange", Qe),
    document.addEventListener("pjax:success", Qe),
    i.on("click", "a[href]",
    function(e) {
        this.href === location.href && location.hash.length > 1 && setTimeout(function() {
            e.defaultPrevented || Qe()
        })
    }),
    n.ready.then(Qe),
    s.observe(".will-transition-once", {
        add: function(e) {
            e.addEventListener("transitionend", Ze)
        },
        remove: function(e) {
            e.removeEventListener("transitionend", Ze)
        }
    }),
    s.observe(".js-repo-health",
    function(e) {
        function t() { !
            function(e, t, n) {
                var r = a.query(document, ".js-repo-health-check", HTMLFormElement);
                a.query(r, ".js-repo-health-name", HTMLInputElement).value = n,
                e.classList.remove("d-none"),
                e.classList.add("is-loading"),
                t.setCustomValidity("checking"),
                i.fire(t, "change"),
                v.fetchSafeDocumentFragment(document, r.action, {
                    method: "POST",
                    body: new FormData(r)
                }).then(function(n) {
                    var r = a.query(e, ".js-repo-health-results");
                    r.innerHTML = "",
                    r.appendChild(n),
                    e.classList.remove("is-loading"),
                    t.setCustomValidity(""),
                    i.fire(t, "change")
                })
            } (e, r, o.value)
        }
        var n = a.closest(e, "form", HTMLFormElement),
        r = a.query(n, ".js-comment-field", HTMLTextAreaElement),
        o = a.query(n, ".js-repo-name", HTMLInputElement);
        "hidden" === o.type ? r.addEventListener("focus", t) : o.addEventListener("change", t)
    });
    var ec = null,
    tc = 300,
    nc = [".", ".", "."],
    rc = 0,
    ac = new WeakMap;
    l.remoteForm(".js-audit-log-export-form",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return et(),
                    r = void 0,
                    e.prev = 2,
                    e.next = 5,
                    n.json();
                case 5:
                    r = e.sent,
                    e.next = 12;
                    break;
                case 8:
                    return e.prev = 8,
                    e.t0 = e.
                    catch(2),
                    nt(),
                    e.abrupt("return");
                case 12:
                    return a = r.json,
                    e.prev = 13,
                    e.next = 16,
                    v.fetchPoll(a.job_url);
                case 16:
                    e.next = 22;
                    break;
                case 18:
                    return e.prev = 18,
                    e.t1 = e.
                    catch(13),
                    nt(),
                    e.abrupt("return");
                case 22:
                    rt(a.export_url);
                case 23:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[2, 8], [13, 18]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()),
    i.on("navigation:open", ".audit-search-form .js-suggester",
    function(e) {
        var t = c(e.currentTarget.closest("form"), HTMLFormElement);
        d.submit(t)
    });
    var oc = null,
    sc = new f;
    s.observe(".js-branch-search-field",
    function(e) {
        m.addThrottledInputEventListener(e, at),
        e.addEventListener("keyup",
        function(t) {
            "Escape" === L(t) && (!
            function(e) {
                var t = e.value.trim();
                e.value = "",
                t && at(e)
            } (e), e.blur())
        })
    }),
    i.on("submit", ".js-branch-search",
    function(e) {
        return e.preventDefault()
    }),
    i.on("click", ".js-clear-branch-search",
    function(e) {
        var n = c(e.currentTarget, HTMLButtonElement);
        t(n.form, "null.js:113");
        var r = a.query(n.form, ".js-branch-search-field", HTMLInputElement);
        r.focus(),
        r.value = "",
        i.fire(r, "input")
    }),
    l.remoteForm(".js-branch-destroy, .js-branch-restore",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o, s, i, c, u, l, d, m, f, v, p, h, g, y, b, j, L, w, x, k, E;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    for ((r = a.query(t, "button[type=submit]")).blur(), r.classList.remove("tooltipped"), o = ot(t), s = !0, i = !1, c = void 0, e.prev = 7, u = o[Symbol.iterator](); ! (s = (l = u.next()).done); s = !0)(d = l.value).classList.add("loading");
                    e.next = 15;
                    break;
                case 11:
                    e.prev = 11,
                    e.t0 = e.
                    catch(7),
                    i = !0,
                    c = e.t0;
                case 15:
                    e.prev = 15,
                    e.prev = 16,
                    !s && u.
                    return && u.
                    return ();
                case 18:
                    if (e.prev = 18, !i) {
                        e.next = 21;
                        break
                    }
                    throw c;
                case 21:
                    return e.finish(18);
                case 22:
                    return e.finish(15);
                case 23:
                    return m = !1,
                    e.prev = 24,
                    e.next = 27,
                    n.text();
                case 27:
                    e.next = 33;
                    break;
                case 29:
                    e.prev = 29,
                    e.t1 = e.
                    catch(24),
                    m = !0,
                    location.reload();
                case 33:
                    for (e.prev = 33, r.classList.add("tooltipped"), f = !0, v = !1, p = void 0, e.prev = 38, h = o[Symbol.iterator](); ! (f = (g = h.next()).done); f = !0)(y = g.value).classList.remove("loading");
                    e.next = 46;
                    break;
                case 42:
                    e.prev = 42,
                    e.t2 = e.
                    catch(38),
                    v = !0,
                    p = e.t2;
                case 46:
                    e.prev = 46,
                    e.prev = 47,
                    !f && h.
                    return && h.
                    return ();
                case 49:
                    if (e.prev = 49, !v) {
                        e.next = 52;
                        break
                    }
                    throw p;
                case 52:
                    return e.finish(49);
                case 53:
                    return e.finish(46);
                case 54:
                    return e.finish(33);
                case 55:
                    if (m) {
                        e.next = 76;
                        break
                    }
                    for (b = t.classList.contains("js-branch-destroy"), j = !0, L = !1, w = void 0, e.prev = 60, x = o[Symbol.iterator](); ! (j = (k = x.next()).done); j = !0)(E = k.value).classList.toggle("is-deleted", b);
                    e.next = 68;
                    break;
                case 64:
                    e.prev = 64,
                    e.t3 = e.
                    catch(60),
                    L = !0,
                    w = e.t3;
                case 68:
                    e.prev = 68,
                    e.prev = 69,
                    !j && x.
                    return && x.
                    return ();
                case 71:
                    if (e.prev = 71, !L) {
                        e.next = 74;
                        break
                    }
                    throw w;
                case 74:
                    return e.finish(71);
                case 75:
                    return e.finish(68);
                case 76:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[7, 11, 15, 23], [16, , 18, 22], [24, 29, 33, 55], [38, 42, 46, 54], [47, , 49, 53], [60, 64, 68, 76], [69, , 71, 75]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ());
    var ic = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t) {
            var n, r, a, o, s, i, c, u, l;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return n = t.target,
                    r = n.querySelector(".js-bulk-actions"),
                    a = Array.from(n.querySelectorAll(".js-bulk-actions-toggle:checked")),
                    o = a.map(function(e) {
                        return e.closest(".js-bulk-actions-item").getAttribute("data-bulk-actions-id")
                    }).sort(),
                    s = n.getAttribute("data-bulk-actions-url"),
                    i = n.getAttribute("data-bulk-actions-parameter"),
                    c = o.map(function(e) {
                        return i + "[]=" + e
                    }).join("&"),
                    u = s + "?" + c,
                    e.next = 10,
                    cc.push(v.fetchText(u));
                case 10:
                    l = e.sent,
                    0 === a.length ? (r.innerHTML = l, st(n)) : (st(n), r.innerHTML = l);
                case 12:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } (),
    cc = new f;
    i.on("change", ".js-bulk-actions-toggle",
    function(e) {
        var t = e.currentTarget,
        n = a.closest(t, ".js-bulk-actions-container");
        i.fire(n, "bulk-actions:update")
    }),
    i.on("bulk-actions:update", ".js-bulk-actions-container", u(ic, 100)),
    top !== window && (alert("For security reasons, framing is not allowed."), top.location.replace(document.location));
    var uc = /\bChrome\//.test(navigator.userAgent) && !/\bEdge\//.test(navigator.userAgent),
    lc = /Macintosh.*Safari/.test(navigator.userAgent),
    dc = void 0,
    mc = !1;
    document.addEventListener("mousedown",
    function() {
        mc = !0,
        dc === document.activeElement && it()
    },
    {
        capture: !0
    }),
    document.addEventListener("keydown",
    function() {
        mc = !1
    },
    {
        capture: !0
    }),
    document.addEventListener("focusin", it, {
        capture: !0
    }),
    i.on("click", ".js-open-check-run-summary",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(n) {
            var r, o, s, i, c;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return r = a.closest(n.currentTarget, ".js-checks-index-item"),
                    (o = a.query(document, ".js-checks-index-selected-item")).classList.remove("selected"),
                    o.classList.remove("position-relative"),
                    o.classList.remove("js-checks-index-selected-item"),
                    r.classList.add("selected"),
                    r.classList.add("position-relative"),
                    r.classList.add("js-checks-index-selected-item"),
                    s = n.currentTarget.getAttribute("data-check-run-url"),
                    t(s, "null.js:21"),
                    i = a.query(document, ".js-check-run-summary-container"),
                    e.next = 13,
                    v.fetchSafeDocumentFragment(document, s);
                case 13:
                    c = e.sent,
                    i.innerHTML = "",
                    i.append(c);
                case 16:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } ());
    var fc = {}.hasOwnProperty,
    vc = [].slice,
    pc = {
        host: "collector.githubapp.com",
        type: "page_view",
        dimensions: {},
        measures: {},
        context: {},
        actor: {},
        image: new Image,
        performance: {},
        expectedPerformanceTimingKeys: ["connectEnd", "connectStart", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "domLoading", "domainLookupEnd", "domainLookupStart", "fetchStart", "loadEventEnd", "loadEventStart", "navigationStart", "redirectEnd", "redirectStart", "requestStart", "responseEnd", "responseStart", "secureConnectionStart", "unloadEventEnd", "unloadEventStart"],
        recordPageView: function() {
            return this.applyMetaTags(),
            null != this.app && (null == this.host ? (ct("Host not set, you are doing something wrong"), !1) : (this.image.src = this._src(), this._clearPerformance(), !0))
        },
        setHost: function(e) {
            this.host = e
        },
        setApp: function(e) {
            this.app = e
        },
        setDimensions: function(e) {
            this.dimensions = e
        },
        addDimensions: function(e) {
            var t = void 0;
            null == this.dimensions && (this.dimensions = {});
            var n = [];
            for (t in e) if (fc.call(e, t)) {
                var r = e[t];
                n.push(this.dimensions[t] = r)
            }
            return n
        },
        setMeasures: function(e) {
            this.measures = e
        },
        addMeasures: function(e) {
            var t = void 0;
            null == this.measures && (this.measures = {});
            var n = [];
            for (t in e) if (fc.call(e, t)) {
                var r = e[t];
                n.push(this.measures[t] = r)
            }
            return n
        },
        setContext: function(e) {
            this.context = e
        },
        addContext: function(e) {
            var t = void 0;
            null == this.context && (this.context = {});
            var n = [];
            for (t in e) if (fc.call(e, t)) {
                var r = e[t];
                n.push(this.context[t] = r)
            }
            return n
        },
        setActor: function(e) {
            this.actor = e
        },
        push: function(e) {
            return this.applyCall(e)
        },
        enablePerformance: function() {
            this.performance = this._performanceTiming()
        },
        _recordSrc: function(e, t, n, r) {
            return "//" + this.host + "/" + this.app + "/" + e + "?" + this._queryString(t, n, r)
        },
        _src: function() {
            return "//" + this.host + "/" + this.app + "/" + this.type + "?" + this._queryString()
        },
        _queryString: function(e, t, n) {
            var r = void 0,
            a = void 0,
            o = function() {
                var e = this._params(),
                t = [];
                for (r in e) a = e[r],
                t.push("dimensions[" + r + "]=" + a);
                return t
            }.call(this);
            return o.push(this._encodeObject("dimensions", this._merge(this.dimensions, e))),
            o.push(this._encodeObject("measures", this._merge(this.measures, t))),
            null != this.performance && o.push(this._encodeObject("measures", {
                performance_timing: this.performance
            })),
            o.push(this._encodeObject("context", this._merge(this.context, n))),
            o.push(this._actor()),
            o.push(this._encodeObject("dimensions", {
                cid: this._clientId()
            })),
            o.join("&")
        },
        _clearPerformance: function() {
            this.performance = null
        },
        _performanceTiming: function() {
            var e = void 0,
            t = void 0,
            n = void 0;
            if (null == window.performance || null == window.performance.timing || null == window.performance.timing.navigationStart) return null;
            var r = {},
            a = this.expectedPerformanceTimingKeys;
            for (e = 0, t = a.length; e < t; e++) {
                var o = a[e];
                r[o] = null != (n = window.performance.timing[o]) ? n: 0
            }
            var s = [],
            i = r.navigationStart;
            for (var c in r) {
                var u = r[c],
                l = 0 === u ? null: u - i;
                s.push(l)
            }
            return "1-" + s.join("-")
        },
        _params: function() {
            return {
                page: this._encode(this._page()),
                title: this._encode(this._title()),
                referrer: this._encode(this._referrer()),
                user_agent: this._encode(this._agent()),
                screen_resolution: this._encode(this._screenResolution()),
                pixel_ratio: this._encode(this._pixelRatio()),
                browser_resolution: this._encode(this._browserResolution()),
                tz_seconds: this._encode(this._tzSeconds()),
                timestamp: (new Date).getTime()
            }
        },
        _page: function() {
            try {
                return document.location.href
            } catch(e) {}
        },
        _title: function() {
            try {
                return document.title
            } catch(e) {}
        },
        _referrer: function() {
            var e = void 0;
            e = "";
            try {
                e = window.top.document.referrer
            } catch(t) {
                if (window.parent) try {
                    e = window.parent.document.referrer
                } catch(e) {}
            }
            return "" === e && (e = document.referrer),
            e
        },
        _agent: function() {
            try {
                return navigator.userAgent
            } catch(e) {}
        },
        _screenResolution: function() {
            try {
                return screen.width + "x" + screen.height
            } catch(e) {
                return "unknown"
            }
        },
        _pixelRatio: function() {
            return window.devicePixelRatio
        },
        _browserResolution: function() {
            var e = void 0,
            t = void 0;
            try {
                return t = 0,
                e = 0,
                "number" == typeof window.innerWidth ? (t = window.innerWidth, e = window.innerHeight) : null != document.documentElement && null != document.documentElement.clientWidth ? (t = document.documentElement.clientWidth, e = document.documentElement.clientHeight) : null != document.body && null != document.body.clientWidth && (t = document.body.clientWidth, e = document.body.clientHeight),
                t + "x" + e
            } catch(e) {
                return "unknown"
            }
        },
        _tzSeconds: function() {
            try {
                return - 60 * (new Date).getTimezoneOffset()
            } catch(e) {
                return ""
            }
        },
        _merge: function() {
            var e = void 0,
            t = void 0,
            n = void 0,
            r = 1 <= arguments.length ? vc.call(arguments, 0) : [],
            a = {};
            for (e = 0, n = r.length; e < n; e++) {
                var o = r[e];
                for (t in o) {
                    var s = o[t];
                    a[t] = s
                }
            }
            return a
        },
        _encodeObject: function(e, t) {
            var n = void 0,
            r = void 0,
            a = void 0,
            o = [];
            if (null != Array.isArray && Array.isArray(t) || "[object Array]" === Object.prototype.toString.call(t)) for (n = 0, r = t.length; n < r; n++) {
                var s = t[n];
                o.push(this._encodeObject(e + "[]", s))
            } else if (t === Object(t)) for (a in t) o.push(this._encodeObject(e + "[" + a + "]", t[a]));
            else o.push(e + "=" + this._encode(t));
            return o.join("&")
        },
        _actor: function() {
            var e = void 0,
            t = void 0,
            n = void 0,
            r = [],
            a = this.actor;
            for (t in a) {
                var o = a[t],
                s = "dimensions[actor_" + t + "]";
                if (o.join) for (e = 0, n = o.length; e < n; e++) {
                    var i = o[e];
                    r.push(s + "[]=" + this._encode(i))
                } else r.push(s + "=" + this._encode(o))
            }
            return r.join("&")
        },
        _getCookie: function(e) {
            var t = void 0,
            n = void 0,
            r = [],
            a = document.cookie.split(";");
            for (t = 0, n = a.length; t < n; t++) {
                var o = a[t].trim().split("=");
                if (! (o.length < 2)) {
                    var s = o[0],
                    i = o[1];
                    s === e && r.push({
                        key: s,
                        value: i
                    })
                }
            }
            return r
        },
        _clientId: function() {
            var e = void 0;
            return "" === (e = this._getClientId()) && (e = this._setClientId()),
            e
        },
        _getClientId: function() {
            var e = void 0,
            t = void 0,
            n = void 0,
            r = this._getCookie("_octo"),
            a = [];
            for (t = 0, n = r.length; t < n; t++) {
                var o = r[t].value.split(".");
                if ("GH1" === o.shift() && o.length > 1) {
                    var s = o.shift().split("-");
                    1 === s.length && (s[1] = "1"),
                    s[0] *= 1,
                    s[1] *= 1,
                    e = o.join("."),
                    a.push([s, e])
                }
            }
            return e = "",
            a.length > 0 && (e = a.sort().reverse()[0][1]),
            e
        },
        _setClientId: function() {
            var e = (new Date).getTime(),
            t = Math.round(Math.random() * (Math.pow(2, 31) - 1)) + "." + Math.round(e / 1e3),
            n = "GH1.1." + t,
            r = new Date(e + 63072e6).toUTCString(),
            a = document.domain;
            if (null == a) throw new Error("Unable to get document domain");
            var o = "." + a.split(".").reverse().slice(0, 2).reverse().join(".");
            return document.cookie = "_octo=" + n + "; expires=" + r + "; path=/; domain=" + o,
            t
        },
        _encode: function(e) {
            return null != e ? window.encodeURIComponent(e) : ""
        },
        applyQueuedCalls: function(e) {
            var t = void 0,
            n = void 0,
            r = [];
            for (t = 0, n = e.length; t < n; t++) {
                var a = e[t];
                r.push(this.applyCall(a))
            }
            return r
        },
        applyCall: function(e) {
            var t = e[0],
            n = e.slice(1);
            return this[t] ? this[t].apply(this, n) : ct(t + " is not a valid method")
        },
        applyMetaTags: function() {
            var e = this.loadMetaTags();
            return e.host && this.setHost(e.host),
            e.app && this.setApp(e.app),
            this._objectIsEmpty(e.actor) || this.setActor(e.actor),
            this.addDimensions(e.dimensions),
            this.addMeasures(e.measures),
            this.addContext(e.context)
        },
        loadMetaTags: function() {
            var e = void 0,
            t = void 0,
            n = {
                dimensions: {},
                measures: {},
                context: {},
                actor: {}
            },
            r = document.getElementsByTagName("meta");
            for (e = 0, t = r.length; e < t; e++) {
                var a = r[e];
                if (a.name && a.content) {
                    var o = a.name.match(this.octolyticsMetaTagName);
                    if (o) switch (o[1]) {
                    case "host":
                        n.host = a.content;
                        break;
                    case "app-id":
                    case "app":
                        n.app = a.content;
                        break;
                    case "dimension":
                        this._addField(n.dimensions, o[2], a);
                        break;
                    case "measure":
                        this._addField(n.measures, o[2], a);
                        break;
                    case "context":
                        this._addField(n.context, o[2], a);
                        break;
                    case "actor":
                        this._addField(n.actor, o[2], a)
                    }
                }
            }
            return n
        },
        _addField: function(e, t, n) {
            n.attributes["data-array"] ? (null == e[t] && (e[t] = []), e[t].push(n.content)) : e[t] = n.content
        },
        _objectIsEmpty: function(e) {
            var t = void 0;
            for (t in e) if (fc.call(e, t)) return ! 1;
            return ! 0
        },
        octolyticsMetaTagName: /^octolytics-(host|app-id|app|dimension|measure|context|actor)-?(.*)/
    };
    if (window._octo) {
        if (window._octo.slice) {
            var hc = window._octo.slice(0);
            window._octo = pc,
            window._octo.applyQueuedCalls(hc)
        }
    } else window._octo = pc;
    o.onFocus(".js-template-form-input",
    function(e) {
        function t() {
            lt(r, a)
        }
        function n(e) {
            var t = !0,
            n = !1,
            r = void 0;
            try {
                for (var o, s = a[Symbol.iterator](); ! (t = (o = s.next()).done); t = !0) {
                    o.value.classList.toggle("CommunityTemplate-highlight--focus", e)
                }
            } catch(e) {
                n = !0,
                r = e
            } finally {
                try { ! t && s.
                    return && s.
                    return ()
                } finally {
                    if (n) throw r
                }
            }
        }
        var r = c(e, HTMLInputElement),
        a = ut(r);
        n(!0),
        r.addEventListener("input", t),
        r.addEventListener("blur",
        function e() {
            n(!1),
            r.removeEventListener("input", t),
            r.removeEventListener("blur", e)
        })
    }),
    i.on("click", ".js-template-highlight",
    function(e) { (function(e) {
            var n = e.getAttribute("data-fieldname");
            return t("string" == typeof n, "null.js:18"),
            a.query(document, 'input[data-fieldname="' + n + '"]', HTMLInputElement)
        })(e.currentTarget).focus()
    }),
    s.observe(".js-templates",
    function() {
        var e = !0,
        t = !1,
        n = void 0;
        try {
            for (var r, o = a.querySelectorAll(document, ".js-template-form-input", HTMLInputElement)[Symbol.iterator](); ! (e = (r = o.next()).done); e = !0) {
                var s = r.value;
                lt(s, ut(s))
            }
        } catch(e) {
            t = !0,
            n = e
        } finally {
            try { ! e && o.
                return && o.
                return ()
            } finally {
                if (t) throw n
            }
        }
    });
    var gc = u(Ys(regeneratorRuntime.mark(function e() {
        var n, r, o, s, i, c, u, l, d, m, f, p;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
            case 0:
                if (n = a.query(document, ".js-commit-access-container"), "" !== (r = a.query(n, ".js-commit-access-ref-input", HTMLInputElement)).value) {
                    e.next = 4;
                    break
                }
                return e.abrupt("return");
            case 4:
                return o = r.value,
                s = a.query(n, ".js-commit-access-ref", HTMLInputElement),
                i = r.getAttribute("data-check-url"),
                c = r.getAttribute("data-check-authenticity-token"),
                u = a.query(n, ".js-commit-access-result"),
                l = a.query(n, ".js-commit-access-submit", HTMLButtonElement),
                t(i, "null.js:51"),
                t(c, "null.js:52"),
                (d = new FormData).append("ref", o),
                d.append("authenticity_token", c),
                e.prev = 15,
                e.next = 18,
                v.fetchJSON(i, {
                    method: "post",
                    body: d
                });
            case 18:
                m = e.sent,
                f = m.message_html,
                p = m.normalized_ref,
                s.value = p,
                u.innerHTML = f,
                dt(p, "branch", n),
                l.removeAttribute("disabled"),
                e.next = 30;
                break;
            case 27:
                e.prev = 27,
                e.t0 = e.
                catch(15),
                u.innerHTML = "";
            case 30:
            case "end":
                return e.stop()
            }
        },
        e, void 0, [[15, 27]])
    })), 300);
    s.observe(".js-commit-access-container", {
        add: function(e) {
            e.addEventListener("change", ft),
            e.addEventListener("keyup", vt);
            var t = e.querySelector(".js-commit-access-radio:checked"),
            n = a.query(e, ".js-commit-access-ref-input");
            t ? mt(n.value, t.value, e) : dt(n.value, "branch", e)
        },
        remove: function(e) {
            e.removeEventListener("change", ft),
            e.removeEventListener("keyup", vt)
        }
    }),
    i.on("details:toggled", ".js-news-feed-event-group",
    function(e) {
        if (t(e instanceof CustomEvent, "null.js:10"), e.detail.open) {
            var n = e.currentTarget,
            r = !0,
            a = !1,
            o = void 0;
            try {
                for (var s, c = n.querySelectorAll("[data-hydro-view]")[Symbol.iterator](); ! (r = (s = c.next()).done); r = !0) {
                    var u = s.value;
                    i.fire(u, "view")
                }
            } catch(e) {
                a = !0,
                o = e
            } finally {
                try { ! r && c.
                    return && c.
                    return ()
                } finally {
                    if (a) throw o
                }
            }
        }
    }),
    s.observe(".js-dashboard-deferred-module-content",
    function(e) {
        v.fetchSafeDocumentFragment(document, e.getAttribute("data-src")).then(function(t) {
            e.replaceWith(t)
        })
    }),
    i.on("navigation:open", ".js-dashboard-content-options",
    function(e) {
        var n = e.target.getAttribute("data-src");
        t(n, "null.js:27");
        var r = document.createElement("div");
        r.classList.add("js-dashboard-deferred-module-content"),
        r.setAttribute("data-src", n),
        r.textContent = "Loading...";
        var a = e.target.closest(".js-dashboard-module");
        t(a, "null.js:34");
        var o = a.querySelector(".js-dashboard-content-container");
        t(o, "null.js:36"),
        o.innerHTML = "",
        o.appendChild(r)
    }),
    Ge(".js-discover-repositories .js-ajax-pagination",
    function(e) {
        e.classList.contains("is-loading") || (e.classList.add("is-loading"), d.submit(c(e, HTMLFormElement)))
    }),
    s.observe(".js-repository-recommendation", {
        add: function(e) {
            e.addEventListener("mouseover", pt),
            e.addEventListener("mouseout", ht)
        },
        remove: function(e) {
            e.removeEventListener("mouseover", pt),
            e.removeEventListener("mouseout", ht)
        }
    }),
    l.remoteForm(".js-dismiss-repository-recommendation",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o, s, i;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return r = a.closest(t, ".js-repository-recommendation-and-restore"),
                    o = a.query(r, ".js-restore-repo-rec-container"),
                    s = a.query(r, ".js-repository-recommendation"),
                    e.next = 5,
                    n.html();
                case 5:
                    (i = e.sent) && (s.classList.add("d-none"), o.classList.remove("d-none"), o.style.display = "block");
                case 7:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()),
    l.remoteForm(".js-restore-repo-rec-form",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o, s, i;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return r = a.closest(t, ".js-repository-recommendation-and-restore"),
                    o = a.query(r, ".js-restore-repo-rec-container"),
                    s = a.query(r, ".js-repository-recommendation"),
                    e.next = 5,
                    n.html();
                case 5:
                    (i = e.sent) && (o.classList.add("d-none"), s.classList.remove("d-none"), s.style.display = "block");
                case 7:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()),
    s.observe(".js-hover-popover-container", {
        add: function(e) {
            e.addEventListener("mouseover", gt),
            e.addEventListener("mouseout", yt)
        },
        remove: function(e) {
            e.removeEventListener("mouseover", gt),
            e.removeEventListener("mouseout", yt)
        }
    }),
    i.on("click", ".js-show-more-recent-items",
    function(e) {
        c(e.currentTarget, HTMLButtonElement).classList.add("d-none")
    });
    var yc = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t) {
            var n, r, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return n = a.query(document, ".js-delegated-account-recovery-submit", HTMLButtonElement),
                    r = a.query(document, ".js-create-recovery-token-form", HTMLFormElement),
                    t.classList.remove("failed"),
                    t.classList.add("loading"),
                    n.disabled = !0,
                    e.prev = 5,
                    e.next = 8,
                    v.fetchForm(r);
                case 8:
                    return o = e.sent,
                    e.next = 11,
                    o.json();
                case 11:
                    s = e.sent,
                    d.fillFormValues(t, {
                        token: s.token,
                        state: s.state_url
                    }),
                    t.submit(),
                    e.next = 21;
                    break;
                case 16:
                    e.prev = 16,
                    e.t0 = e.
                    catch(5),
                    t.classList.remove("loading"),
                    t.classList.add("failed"),
                    n.disabled = !1;
                case 21:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[5, 16]])
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } (),
    bc = function() {
        var e = Ys(regeneratorRuntime.mark(function e(n) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    t(n instanceof HTMLFormElement, "null.js:39"),
                    n.submit();
                case 2:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } ();
    i.on("submit", ".js-post-recovery-token",
    function(e) {
        e.preventDefault();
        var t = this;
        C("high").then(function() {
            yc(t)
        })
    }),
    s.observe("form.js-recovery-provider-auto-redirect", {
        constructor: HTMLFormElement,
        initialize: function(e) {
            bc(e)
        }
    }),
    i.on("click", ".js-sub-dependencies",
    function(e) {
        t(e.currentTarget instanceof HTMLElement, "null.js:9");
        var n = e.currentTarget,
        r = n.getAttribute("data-loaded"),
        a = n.querySelector(".js-expanded"),
        o = n.querySelector(".js-collapsed"),
        s = n.closest(".js-details-container");
        if (a && a.classList.toggle("d-none"), o && o.classList.toggle("d-none"), s && s.classList.toggle("bg-gray-light"), !r) {
            n.setAttribute("data-loaded", "true");
            var i = n.getAttribute("data-sub-dependency-url"),
            c = n.closest(".js-dependency");
            t(i, "null.js:24"),
            v.fetchSafeDocumentFragment(document, i).then(function(e) {
                c && c.after(e)
            })
        }
    });
    var jc = null;
    document.addEventListener("keydown",
    function(e) {
        "Escape" === e.key && jc && (jc.open = !1)
    }),
    i.on("toggle", ".js-dropdown-details",
    function(e) {
        var t = e.currentTarget;
        t.hasAttribute("open") ? (jc && jc !== t && (jc.open = !1), jc = t) : t === jc && (jc = null)
    },
    {
        capture: !0
    }),
    i.on("toggle", "details.js-select-menu",
    function(e) {
        var t = e.currentTarget.hasAttribute("open") ? "menu:activate": "menu:deactivate";
        i.fire(e.currentTarget, t)
    },
    {
        capture: !0
    }),
    i.on("menu:deactivate", "details.js-select-menu",
    function(e) {
        e.currentTarget.hasAttribute("open") && e.currentTarget.removeAttribute("open")
    }),
    s.observe("[data-deferred-details-content-url]",
    function(e) {
        e.addEventListener("toggle",
        function(t) {
            var n = e.getAttribute("data-deferred-details-content-url");
            a.query(t.currentTarget, "include-fragment").src = n
        },
        {
            capture: !0,
            once: !0
        })
    });
    var Lc = !1,
    wc = [];
    s.observe(".js-sticky", {
        constructor: HTMLElement,
        add: function(e) { !
            function(e) {
                var t = xt(e),
                n = window.getComputedStyle(e).position;
                e.style.position = "static";
                var r = e.offsetParent;
                e.style.position = "fixed";
                var a = window.getComputedStyle(e).top,
                o = {
                    element: e,
                    placeholder: t,
                    offsetParent: r,
                    top: "auto" == a ? 0 : a
                };
                e.style.position = n,
                wc.push(o)
            } (e),
            jt(),
            bt()
        },
        remove: function(e) { !
            function(e) {
                var t = wc.map(function(e) {
                    return e.element
                }).indexOf(e);
                wc.splice(t, 1)
            } (e),
            bt()
        }
    }),
    s.observe(".js-diff-progressive-container",
    function(e) {
        St(e);
        var t = e.querySelector(".js-diff-progressive-loader");
        t && (t.addEventListener("load",
        function() {
            St(e)
        }), t.addEventListener("error", Ct), t.addEventListener("error", At))
    }),
    i.on("click", ".js-diff-progressive-retry .js-retry-button",
    function() {
        var e = this.closest(".js-diff-progressive-loader"); !
        function(e) {
            e.querySelector(".js-diff-progressive-spinner").classList.remove("d-none"),
            e.querySelector(".js-diff-progressive-retry").classList.add("d-none")
        } (e),
        It(e)
    }),
    s.observe(".js-diff-load-container",
    function(e) {
        var t = e.querySelector(".js-diff-entry-loader");
        t && (t.addEventListener("load",
        function() {
            e.closest(".js-file").classList.remove("hide-file-notes-toggle");
            var t = Tt();
            t && qt(e, t)
        }), t.addEventListener("error", Ct), t.addEventListener("error", Ht))
    }),
    i.on("click", ".js-diff-load",
    function(e) {
        if (!e.target.classList.contains("js-ignore-this")) {
            Mt(this.closest(".js-diff-load-container"))
        }
    }),
    i.on("click", ".js-diff-load-retry .js-retry-button",
    function() {
        var e = this.closest(".js-diff-entry-loader"); !
        function(e) {
            e.querySelector(".js-diff-load-button-container").classList.remove("d-none"),
            e.querySelector(".js-diff-load-retry").classList.add("d-none")
        } (e),
        It(e)
    }),
    i.on("click", ".js-rendered, .js-source",
    function(e) {
        var n = e.currentTarget;
        n.classList.contains("selected") ? e.preventDefault() : (function(e) {
            var n = new URL(window.location.href, window.location.origin),
            r = a.closest(e, ".js-file-header"),
            o = e.classList.contains("js-rendered"),
            s = e.classList.contains("js-source"),
            i = r.getAttribute("data-short-path");
            t(i, "null.js:40");
            var c = r.getAttribute("data-anchor");
            t(c, "null.js:42"),
            n.hash = c,
            o ? n.searchParams.set("short_path", i) : s && n.searchParams.delete("short_path"),
            p.replaceState(null, "", n.toString())
        } (n),
        function(e) {
            var t = !0,
            n = !1,
            r = void 0;
            try {
                for (var a, o = document.querySelectorAll(".js-rendered, .js-source")[Symbol.iterator](); ! (t = (a = o.next()).done); t = !0) a.value.classList.remove("selected")
            } catch(e) {
                n = !0,
                r = e
            } finally {
                try { ! t && o.
                    return && o.
                    return ()
                } finally {
                    if (n) throw r
                }
            }
            e.classList.add("selected")
        } (n))
    }),
    l.remoteForm(".js-prose-diff-toggle-form",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return r = a.closest(t, ".js-details-container"),
                    o = a.query(r, ".js-file-content"),
                    e.next = 4,
                    n.html();
                case 4:
                    for (s = e.sent; o.lastChild;) o.removeChild(o.lastChild);
                    o.append(s.html),
                    r.classList.toggle("display-rich-diff"),
                    r.classList.toggle("show-inline-notes");
                case 9:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()),
    i.on("click", ".js-toc-retry",
    function(e) {
        var t = e.target.closest(".js-select-menu");
        null != t && (t.classList.add("js-load-contents", "is-loading"), t.classList.remove("has-error"))
    }),
    I(Rt),
    i.on("click", ".email-hidden-toggle",
    function(e) {
        var t = this.nextElementSibling;
        t.style.display = "",
        t.classList.toggle("expanded"),
        e.preventDefault()
    }),
    i.on("click", ".js-git-clone-help-container .js-git-clone-help-switcher",
    function(e) {
        var t = e.currentTarget,
        n = a.closest(t, ".js-git-clone-help-container"),
        r = t.getAttribute("data-url") || "";
        if (a.query(n, ".js-git-clone-help-field", HTMLInputElement).value = r, t.matches(".js-git-protocol-clone-url")) {
            var o = !0,
            s = !1,
            i = void 0;
            try {
                for (var c, u = n.querySelectorAll(".js-git-clone-help-text")[Symbol.iterator](); ! (o = (c = u.next()).done); o = !0) {
                    c.value.textContent = r
                }
            } catch(e) {
                s = !0,
                i = e
            } finally {
                try { ! o && u.
                    return && u.
                    return ()
                } finally {
                    if (s) throw i
                }
            }
        }
        var l = n.querySelector(".js-clone-url-button.selected");
        l && l.classList.remove("selected"),
        a.closest(t, ".js-clone-url-button").classList.add("selected")
    }),
    i.on("click", ".js-get-repo",
    function(e) {
        var n = e.currentTarget.getAttribute("data-open-app");
        t(n, "null.js:31"); !
        function(e, t) {
            e.classList.add("is-downloading");
            var n = void 0;
            switch (t) {
            case "mac":
                n = e.querySelector(".js-modal-download-mac");
                break;
            case "windows":
                n = e.querySelector(".js-modal-download-windows");
                break;
            case "xcode":
                n = e.querySelector(".js-modal-download-xcode");
                break;
            case "visual-studio":
                n = e.querySelector(".js-modal-download-visual-studio")
            }
            n && (n.classList.remove("d-none"), n.classList.add("d-block"))
        } (a.closest(e.currentTarget, ".js-get-repo-modal"), n)
    }),
    i.on("toggle", ".js-get-repo-select-menu", _t, {
        capture: !0
    }),
    i.on("click", ".js-get-repo-modal-download-back", _t),
    R.providePlugin("octolyticsPlugin",
    function(e) {
        var t = e.get("sendHitTask");
        e.set("sendHitTask",
        function(e) {
            t(e),
            "event" === e.get("hitType") && null != window._octo && g.guaranteedPost("//" + window._octo.host + "/collect", e.get("hitPayload"), "application/x-www-form-urlencoded")
        })
    });
    var xc = document.querySelector("meta[name=google-analytics]");
    xc && (R.setGlobalAccount(c(xc, HTMLMetaElement).content, "auto"), R.requirePlugin("octolyticsPlugin"), R.requirePlugin("ec"), Nt()),
    n.ready.then(function() {
        return Dt()
    }),
    document.addEventListener("pjax:complete",
    function() {
        setTimeout(function() {
            Nt(),
            Dt()
        },
        20)
    },
    !1),
    s.observe("[data-ga-load]",
    function(e) {
        var t = Bt(e.getAttribute("data-ga-load"));
        t.interactive = !1,
        R.trackEvent(t)
    }),
    s.observe("meta[name=analytics-event]",
    function(e) {
        var t = Bt(e.content);
        t.interactive = !1,
        R.trackEvent(t)
    }),
    i.on("click", "[data-ga-click]",
    function() {
        Ot(this.getAttribute("data-ga-ec"));
        var e = Bt(this.getAttribute("data-ga-click"));
        R.trackEvent(e)
    },
    {
        capture: !0
    }),
    i.on("click", "[data-ga-deferred]",
    function() {
        S.setItem("ga-deferred", this.getAttribute("data-ga-deferred"))
    },
    {
        capture: !0
    }),
    i.on("change", "[data-ga-change]",
    function() {
        Ot(this.getAttribute("data-ga-ec"));
        var e = Bt(this.getAttribute("data-ga-change"));
        R.trackEvent(e)
    },
    {
        capture: !0
    }),
    i.on("click", ".js-video-play, .js-video-close, .is-expanded",
    function(e) {
        e.preventDefault();
        var t = c(e.currentTarget, HTMLButtonElement),
        n = t.classList.contains("js-video-play"),
        r = a.closest(t, ".js-video-container"),
        o = a.query(r, ".js-video-iframe", HTMLIFrameElement),
        s = document.querySelector(".js-video-bg");
        n ? o.src = o.getAttribute("data-src") || "": o.removeAttribute("src"),
        r.classList.toggle("is-expanded", n),
        null != s && s.classList.toggle("is-expanded", n),
        function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = e.getBoundingClientRect(),
            r = n.top - t,
            a = n.bottom - window.innerHeight + t;
            r < 0 ? window.scrollBy(0, r) : a > 0 && window.scrollBy(0, a)
        } (o, 20)
    }),
    i.on("click", "[data-octo-click]",
    function(e) {
        if (window._octo) {
            var t = e.currentTarget,
            n = t.getAttribute("data-octo-click"),
            r = {};
            r.event_type = n;
            var a = {},
            o = {},
            s = {},
            i = [];
            t.hasAttribute("data-octo-dimensions") && (i = (t.getAttribute("data-octo-dimensions") || "").split(","));
            var u = document.head ? document.head.querySelectorAll('meta[name^="octolytics-"]') : [],
            l = !0,
            d = !1,
            m = void 0;
            try {
                for (var f, v = u[Symbol.iterator](); ! (l = (f = v.next()).done); l = !0) {
                    var p = f.value,
                    h = c(p, HTMLMetaElement);
                    if (h.name.startsWith("octolytics-dimension-")) {
                        a[h.name.replace(/^octolytics-dimension-/, "")] = h.content
                    } else if (h.name.startsWith("octolytics-measure-")) {
                        o[h.name.replace(/^octolytics-measure-/, "")] = h.content
                    } else if (h.name.startsWith("octolytics-context-")) {
                        s[k = h.name.replace(/^octolytics-context-/, "")] = h.content
                    } else if (h.name.startsWith("octolytics-actor-")) {
                        a[h.name.replace(/^octolytics-/, "").replace(/-/g, "_")] = h.content
                    } else if (h.name.startsWith("octolytics-")) {
                        r[h.name.replace(/^octolytics-/, "").replace(/-/g, "_")] = h.content
                    }
                }
            } catch(e) {
                d = !0,
                m = e
            } finally {
                try { ! l && v.
                    return && v.
                    return ()
                } finally {
                    if (d) throw m
                }
            }
            if (t.hasAttribute("data-ga-click")) {
                var g = (t.getAttribute("data-ga-click") || "").split(",").map(function(e) {
                    return e.trim()
                });
                a.category = g[0],
                a.action = g[1]
            }
            var y = !0,
            b = !1,
            j = void 0;
            try {
                for (var L, w = i[Symbol.iterator](); ! (y = (L = w.next()).done); y = !0) {
                    var x = L.value.split(":"),
                    k = x.shift();
                    a[k] = x.join(":")
                }
            } catch(e) {
                b = !0,
                j = e
            } finally {
                try { ! y && w.
                    return && w.
                    return ()
                } finally {
                    if (b) throw j
                }
            }
            r.dimensions = a,
            r.measures = o,
            r.context = s,
            Ut(r)
        }
    });
    var kc = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return r = "/hovercards?user_id=" + t + "&context=" + n,
                    Tc[r] || (Tc[r] = v.fetchSafeDocumentFragment(document, r)),
                    e.next = 4,
                    Tc[r];
                case 4:
                    return e.abrupt("return", e.sent);
                case 5:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } (),
    Ec = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t) {
            var n, r, a, o, s, i;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (n = t.currentTarget, qc !== n) {
                        e.next = 3;
                        break
                    }
                    return e.abrupt("return");
                case 3:
                    return zt(),
                    qc = n,
                    Ac = document.activeElement,
                    r = n.closest("[data-hovercard-subject-tag]"),
                    a = r ? r.getAttribute("data-hovercard-subject-tag") : "",
                    o = n.getAttribute("data-hovercard-user-id") || "",
                    s = n.getAttribute("aria-label"),
                    e.next = 12,
                    kc(o, a);
                case 12:
                    i = e.sent,
                    n === qc && (Wt(i, n, s), t instanceof KeyboardEvent && Sc && Sc.focus());
                case 14:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } (),
    Sc = document.querySelector(".js-hovercard-content"),
    Tc = {},
    qc = void 0,
    Ac = void 0,
    Mc = void 0,
    Hc = 32;
    Sc && (s.observe("[data-hovercard-user-id]", {
        add: function(e) { !
            function(e) {
                var t = [].concat(ri(e.querySelectorAll("a")));
                "A" === e.tagName && t.push(e);
                var n = !0,
                r = !1,
                a = void 0;
                try {
                    for (var o, s = t[Symbol.iterator](); ! (n = (o = s.next()).done); n = !0) o.value.setAttribute("aria-describedby", "hovercard-aria-description")
                } catch(e) {
                    r = !0,
                    a = e
                } finally {
                    try { ! n && s.
                        return && s.
                        return ()
                    } finally {
                        if (r) throw a
                    }
                }
            } (e),
            e.addEventListener("mouseover", Ec),
            e.addEventListener("mouseout", $t),
            e.addEventListener("keyup", Kt)
        },
        remove: function(e) {
            e.removeEventListener("mouseover", Ec),
            e.removeEventListener("mouseout", $t),
            e.removeEventListener("keyup", Kt),
            qc === e && zt()
        }
    }), s.observe(".js-hovercard-content", {
        add: function(e) {
            e.addEventListener("mouseover", Jt),
            e.addEventListener("mouseout", Vt),
            e.addEventListener("keyup", Kt)
        },
        remove: function(e) {
            e.removeEventListener("mouseover", Jt),
            e.removeEventListener("mouseout", Vt),
            e.removeEventListener("keyup", Kt)
        }
    }), i.on("menu:activated", ".js-select-menu", zt), window.addEventListener("statechange", zt)),
    i.on("click", "[data-hydro-click]",
    function(e) {
        var t = e.currentTarget,
        n = t.getAttribute("data-hydro-click"),
        r = t.getAttribute("data-hydro-click-hmac");
        n && r && Gt(n, r)
    }),
    i.on("view", "[data-hydro-view]",
    function(e) {
        var t = e.currentTarget,
        n = t.getAttribute("data-hydro-view"),
        r = t.getAttribute("data-hydro-view-hmac");
        n && r && Gt(n, r)
    }),
    s.observe(".js-iconnav",
    function(e) {
        window.addEventListener("scroll",
        function() { !
            function(e) {
                var t = q(document).scrollTop() + q(".IconNav").height(),
                n = !0,
                r = !1,
                a = void 0;
                try {
                    for (var o, s = e.querySelectorAll(".js-section")[Symbol.iterator](); ! (n = (o = s.next()).done); n = !0) {
                        var i = o.value,
                        c = q(i),
                        u = t >= c.position().top,
                        l = t <= c.position().top + c.height();
                        if (u && l) {
                            var d = e.querySelector('.IconNav-item[href="#' + i.id + '"]');
                            if (d && !d.classList.contains("selected")) {
                                var m = !0,
                                f = !1,
                                v = void 0;
                                try {
                                    for (var p, h = e.querySelectorAll(".IconNav-item")[Symbol.iterator](); ! (m = (p = h.next()).done); m = !0) p.value.classList.remove("selected")
                                } catch(e) {
                                    f = !0,
                                    v = e
                                } finally {
                                    try { ! m && h.
                                        return && h.
                                        return ()
                                    } finally {
                                        if (f) throw v
                                    }
                                }
                                d.classList.add("selected")
                            }
                        }
                    }
                } catch(e) {
                    r = !0,
                    a = e
                } finally {
                    try { ! n && s.
                        return && s.
                        return ()
                    } finally {
                        if (r) throw a
                    }
                }
            } (e)
        },
        {
            passive: !0
        })
    }),
    i.on("click", ".js-bookmark-toggler-container .js-unbookmark-target",
    function() {
        Xt(this)
    }),
    i.on("click", ".js-bookmark-toggler-container .js-bookmark-target",
    function() {
        Xt(this)
    });
    var Cc = te(function(e, t) { !
        function(n, r) {
            var a = r();
            e && e.exports && (t = e.exports = a),
            t.randomColor = a
        } (0,
        function() {
            function e(e) {
                var t = o(function(e) {
                    if ("number" == typeof parseInt(e)) {
                        var t = parseInt(e);
                        if (t < 360 && t > 0) return [t, t]
                    }
                    if ("string" == typeof e) if (l[e]) {
                        var n = l[e];
                        if (n.hueRange) return n.hueRange
                    } else if (e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
                        var r = function(e) {
                            e = e.replace(/^#/, ""),
                            e = 3 === e.length ? e.replace(/(.)/g, "$1$1") : e;
                            var t = parseInt(e.substr(0, 2), 16) / 255,
                            n = parseInt(e.substr(2, 2), 16) / 255,
                            r = parseInt(e.substr(4, 2), 16) / 255,
                            a = Math.max(t, n, r),
                            o = a - Math.min(t, n, r),
                            s = a ? o / a: 0;
                            switch (a) {
                            case t:
                                return [(n - r) / o % 6 * 60 || 0, s, a];
                            case n:
                                return [60 * ((r - t) / o + 2) || 0, s, a];
                            case r:
                                return [60 * ((t - n) / o + 4) || 0, s, a]
                            }
                        } (e)[0];
                        return [r, r]
                    }
                    return [0, 360]
                } (e.hue));
                return t < 0 && (t = 360 + t),
                t
            }
            function t(e, t) {
                if ("monochrome" === t.hue) return 0;
                if ("random" === t.luminosity) return o([0, 100]);
                var n = function(e) {
                    return a(e).saturationRange
                } (e),
                r = n[0],
                s = n[1];
                switch (t.luminosity) {
                case "bright":
                    r = 55;
                    break;
                case "dark":
                    r = s - 10;
                    break;
                case "light":
                    s = 55
                }
                return o([r, s])
            }
            function n(e, t, n) {
                var r = function(e, t) {
                    for (var n = a(e).lowerBounds, r = 0; r < n.length - 1; r++) {
                        var o = n[r][0],
                        s = n[r][1],
                        i = n[r + 1][0],
                        c = n[r + 1][1];
                        if (t >= o && t <= i) {
                            var u = (c - s) / (i - o);
                            return u * t + (s - u * o)
                        }
                    }
                    return 0
                } (e, t),
                s = 100;
                switch (n.luminosity) {
                case "dark":
                    s = r + 20;
                    break;
                case "light":
                    r = (s + r) / 2;
                    break;
                case "random":
                    r = 0,
                    s = 100
                }
                return o([r, s])
            }
            function r(e, t) {
                switch (t.format) {
                case "hsvArray":
                    return e;
                case "hslArray":
                    return c(e);
                case "hsl":
                    var n = c(e);
                    return "hsl(" + n[0] + ", " + n[1] + "%, " + n[2] + "%)";
                case "hsla":
                    var r = c(e),
                    a = t.alpha || Math.random();
                    return "hsla(" + r[0] + ", " + r[1] + "%, " + r[2] + "%, " + a + ")";
                case "rgbArray":
                    return i(e);
                case "rgb":
                    return "rgb(" + i(e).join(", ") + ")";
                case "rgba":
                    var o = i(e),
                    a = t.alpha || Math.random();
                    return "rgba(" + o.join(", ") + ", " + a + ")";
                default:
                    return function(e) {
                        function t(e) {
                            var t = e.toString(16);
                            return 1 == t.length ? "0" + t: t
                        }
                        var n = i(e);
                        return "#" + t(n[0]) + t(n[1]) + t(n[2])
                    } (e)
                }
            }
            function a(e) {
                e >= 334 && e <= 360 && (e -= 360);
                for (var t in l) {
                    var n = l[t];
                    if (n.hueRange && e >= n.hueRange[0] && e <= n.hueRange[1]) return l[t]
                }
                return "Color not found"
            }
            function o(e) {
                if (null === u) return Math.floor(e[0] + Math.random() * (e[1] + 1 - e[0]));
                var t = e[1] || 1,
                n = e[0] || 0,
                r = (u = (9301 * u + 49297) % 233280) / 233280;
                return Math.floor(n + r * (t - n))
            }
            function s(e, t, n) {
                var r = n[0][0],
                a = n[n.length - 1][0],
                o = n[n.length - 1][1],
                s = n[0][1];
                l[e] = {
                    hueRange: t,
                    lowerBounds: n,
                    saturationRange: [r, a],
                    brightnessRange: [o, s]
                }
            }
            function i(e) {
                var t = e[0];
                0 === t && (t = 1),
                360 === t && (t = 359),
                t /= 360;
                var n = e[1] / 100,
                r = e[2] / 100,
                a = Math.floor(6 * t),
                o = 6 * t - a,
                s = r * (1 - n),
                i = r * (1 - o * n),
                c = r * (1 - (1 - o) * n),
                u = 256,
                l = 256,
                d = 256;
                switch (a) {
                case 0:
                    u = r,
                    l = c,
                    d = s;
                    break;
                case 1:
                    u = i,
                    l = r,
                    d = s;
                    break;
                case 2:
                    u = s,
                    l = r,
                    d = c;
                    break;
                case 3:
                    u = s,
                    l = i,
                    d = r;
                    break;
                case 4:
                    u = c,
                    l = s,
                    d = r;
                    break;
                case 5:
                    u = r,
                    l = s,
                    d = i
                }
                return [Math.floor(255 * u), Math.floor(255 * l), Math.floor(255 * d)]
            }
            function c(e) {
                var t = e[0],
                n = e[1] / 100,
                r = e[2] / 100,
                a = (2 - n) * r;
                return [t, Math.round(n * r / (a < 1 ? a: 2 - a) * 1e4) / 100, a / 2 * 100]
            }
            var u = null,
            l = {};
            s("monochrome", null, [[0, 0], [100, 0]]),
            s("red", [ - 26, 18], [[20, 100], [30, 92], [40, 89], [50, 85], [60, 78], [70, 70], [80, 60], [90, 55], [100, 50]]),
            s("orange", [19, 46], [[20, 100], [30, 93], [40, 88], [50, 86], [60, 85], [70, 70], [100, 70]]),
            s("yellow", [47, 62], [[25, 100], [40, 94], [50, 89], [60, 86], [70, 84], [80, 82], [90, 80], [100, 75]]),
            s("green", [63, 178], [[30, 100], [40, 90], [50, 85], [60, 81], [70, 74], [80, 64], [90, 50], [100, 40]]),
            s("blue", [179, 257], [[20, 100], [30, 86], [40, 80], [50, 74], [60, 60], [70, 52], [80, 44], [90, 39], [100, 35]]),
            s("purple", [258, 282], [[20, 100], [30, 87], [40, 79], [50, 70], [60, 65], [70, 59], [80, 52], [90, 45], [100, 42]]),
            s("pink", [283, 334], [[20, 100], [30, 90], [40, 86], [60, 84], [80, 80], [90, 75], [100, 73]]);
            var d = function(a) {
                if (void 0 !== (a = a || {}).seed && null !== a.seed && a.seed === parseInt(a.seed, 10)) u = a.seed;
                else if ("string" == typeof a.seed) u = function(e) {
                    for (var t = 0,
                    n = 0; n !== e.length && !(t >= Number.MAX_SAFE_INTEGER); n++) t += e.charCodeAt(n);
                    return t
                } (a.seed);
                else {
                    if (void 0 !== a.seed && null !== a.seed) throw new TypeError("The seed value must be an integer or string");
                    u = null
                }
                var o, s, i;
                if (null !== a.count && void 0 !== a.count) {
                    var c = a.count,
                    l = [];
                    for (a.count = null; c > l.length;) u && a.seed && (a.seed += 1),
                    l.push(d(a));
                    return a.count = c,
                    l
                }
                return o = e(a),
                s = t(o, a),
                i = n(o, s, a),
                r([o, s, i], a)
            };
            return d
        })
    }),
    Ic = (Cc.randomColor,
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(n) {
            var r, o, s, i, u, l, d, m, f, p, h, g, y;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (r = n.closest(".js-label-preview-container")) {
                        e.next = 3;
                        break
                    }
                    return e.abrupt("return");
                case 3:
                    if (o = a.closest(n, ".js-label-form", HTMLFormElement), s = o.querySelector(".js-new-label-error"), i = o.getAttribute("data-label-id"), u = a.query(r, ".js-label-preview", HTMLElement), l = function(e, n) {
                        var r = a.query(e, ".js-new-label-name-input", HTMLInputElement).value.trim();
                        return r.length < 1 && (r = n.getAttribute("data-default-name"), t("string" == typeof r, "null.js:245")),
                        r
                    } (o, u), d = function(e) {
                        var t = a.query(e, ".js-new-label-color-input", HTMLInputElement);
                        return t.checkValidity() ? t.value.trim().replace(/^#/, "") : "ededed"
                    } (o), m = function(e) {
                        var t = e.querySelector(".js-new-label-description-input");
                        t && (t = c(t, HTMLInputElement));
                        var n = null;
                        return t && t.value.trim().length > 0 && (n = t.value.trim()),
                        n
                    } (o), f = u.getAttribute("data-url-template"), t("string" == typeof f, "null.js:265"), p = function(e, t, n, r, a) {
                        var o = new URL("" + e + encodeURIComponent(t), window.location.origin),
                        s = new URLSearchParams(o.search.slice(1));
                        return s.append("color", n),
                        r && s.append("description", r),
                        a && s.append("id", a),
                        o.search = s.toString(),
                        o.toString()
                    } (f, l, d, m, i), !r.hasAttribute("data-last-preview-url")) {
                        e.next = 18;
                        break
                    }
                    if (h = r.getAttribute("data-last-preview-url"), t("string" == typeof h, "null.js:270"), p !== h) {
                        e.next = 18;
                        break
                    }
                    return e.abrupt("return");
                case 18:
                    return g = void 0,
                    e.prev = 19,
                    e.next = 22,
                    v.fetchSafeDocumentFragment(document, p);
                case 22:
                    g = e.sent,
                    e.next = 33;
                    break;
                case 25:
                    return e.prev = 25,
                    e.t0 = e.
                    catch(19),
                    e.next = 29,
                    e.t0.response.json();
                case 29:
                    return y = e.sent,
                    on(o, y),
                    s && (s.textContent = y.message, s.classList.remove("d-none")),
                    e.abrupt("return");
                case 33:
                    s && (s.textContent = "", s.classList.add("d-none")),
                    sn(o),
                    u.innerHTML = "",
                    u.appendChild(g),
                    r.setAttribute("data-last-preview-url", p);
                case 38:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[19, 25]])
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } ()),
    Rc = new WeakMap;
    o.onInput(".js-label-filter-field",
    function(e) {
        var t = c(e.target, HTMLInputElement),
        n = a.closest(t, ".js-menu-content").querySelector(".js-new-label-name");
        if (n) {
            var r = t.value.trim();
            n.textContent = r
        }
    }),
    s.observe(".js-label-characters-remaining-field",
    function(e) {
        rn(c(e, HTMLInputElement))
    }),
    i.on("filterable:change", ".js-filterable-issue-labels",
    function(e) {
        t(e instanceof CustomEvent, "null.js:393");
        var n = e.target,
        r = n.querySelector(".js-add-label-button");
        if (r) {
            var a = e.detail.inputField.value.trim().toLowerCase(),
            o = Array.from(n.querySelectorAll(".js-navigation-item")).filter(function(e) {
                return "" === e.style.display
            }),
            s = a.length > 0;
            if (s) {
                var i = !0,
                c = !1,
                u = void 0;
                try {
                    for (var l, d = o[Symbol.iterator](); ! (i = (l = d.next()).done); i = !0) {
                        var m = l.value.querySelector('input[type="checkbox"][name="issue[labels][]"]');
                        if (m) {
                            if (m.getAttribute("data-label-name").toLowerCase() === a) {
                                s = !1;
                                break
                            }
                        }
                    }
                } catch(e) {
                    c = !0,
                    u = e
                } finally {
                    try { ! i && d.
                        return && d.
                        return ()
                    } finally {
                        if (c) throw u
                    }
                }
            }
            r.classList.toggle("d-block", s),
            r.classList.toggle("d-none", !s),
            nn(n)
        }
    }),
    i.on("navigation:focus", ".js-label-options",
    function(e) {
        var t = e.target.closest(".js-filterable-issue-labels");
        t && nn(c(t, HTMLElement))
    }),
    o.onFocus(".js-new-label-color-input",
    function(e) {
        var t = a.closest(e, "form"),
        n = a.query(t, ".js-new-label-swatches");
        n.classList.remove("d-none"),
        e.addEventListener("blur",
        function() {
            n.classList.add("d-none")
        },
        {
            once: !0
        })
    }),
    o.onInput(".js-new-label-color-input",
    function(e) {
        var t = c(e.target, HTMLInputElement),
        n = t.value.trim();
        if (! (n.length < 1)) if (0 !== n.indexOf("#") && (n = "#" + n, t.value = n), t.checkValidity()) {
            t.classList.remove("text-red");
            var r = a.closest(t, "form");
            Zt(a.query(r, ".js-new-label-color", HTMLButtonElement), n)
        } else t.classList.add("text-red")
    }),
    o.onKey("keyup", ".js-new-label-color-input",
    function(e) {
        var t = c(e.target, HTMLInputElement),
        n = t.value.trim();
        if (0 !== n.indexOf("#") && (n = "#" + n, t.value = n), t.checkValidity()) {
            var r = a.closest(t, "form");
            Zt(a.query(r, ".js-new-label-color", HTMLButtonElement), n)
        }
        i.fire(t, "change", !1);
        sn(a.closest(t, "form", HTMLFormElement))
    }),
    o.onKey("keyup", ".js-new-label-description-input",
    function(e) {
        var n = c(e.target, HTMLInputElement).form;
        t(n, "null.js:497"),
        sn(n)
    }),
    o.onKey("keyup", ".js-new-label-color-input",
    function(e) {
        var n = c(e.target, HTMLInputElement).form;
        t(n, "null.js:504"),
        sn(n)
    }),
    o.onKey("keydown", ".js-label-filter-field",
    function(e) {
        if ("Enter" === e.key) {
            var t = a.query(document, ".js-issue-sidebar-form .js-filterable-issue-labels").querySelector(".js-navigation-item.navigation-focus");
            if (t) if (t.classList.contains("js-add-label-button")) {
                document.getElementById("label-creation-modal") && Us({
                    div: "#label-creation-modal"
                },
                "label-creation-modal")
            } else if ("A" === t.tagName) {
                var n = c(t, HTMLAnchorElement);
                window.location.href = n.href
            }
        }
    }),
    i.on("click", ".js-new-label-color",
    function(e) {
        var t = c(e.currentTarget, HTMLButtonElement);
        tn(t, Cc()),
        Ic(t)
    }),
    i.on("mousedown", ".js-new-label-color-swatch",
    function(e) {
        var n = c(e.currentTarget, HTMLButtonElement),
        r = n.getAttribute("data-color");
        t(r, "must have data-color attribute -- null.js:542"),
        tn(n, r),
        Ic(n);
        a.closest(n, ".js-new-label-swatches").classList.add("d-none")
    }),
    document.addEventListener("facebox:reveal",
    function() {
        var e = document.querySelector("#facebox .js-new-label-name-input");
        if (e) {
            e = c(e, HTMLInputElement),
            function() {
                var e = a.query(document, ".js-issue-sidebar-form .js-label-filter-field", HTMLInputElement);
                e.value = e.defaultValue
            } (),
            function() {
                var e = dn();
                e && j.deactivate(e)
            } ();
            var t = a.query(document, ".js-issue-sidebar-form .js-new-label-name").textContent;
            e.value = t,
            rn(e);
            var n = a.query(document, "#facebox .js-new-label-color-input", HTMLInputElement),
            r = Cc();
            if (n.value.length > 0) for (; n.value === r;) r = Cc();
            n.value = r;
            var o = a.query(document, "#facebox .js-new-label-color", HTMLButtonElement);
            Zt(o, r),
            Ic(o);
            var s = document.querySelector(".js-issue-sidebar-form .js-filterable-issue-labels");
            if (s) {
                var i = {},
                u = !0,
                l = !1,
                d = void 0;
                try {
                    for (var m, f = a.querySelectorAll(s, 'input[type="checkbox"][name="issue[labels][]"]', HTMLInputElement)[Symbol.iterator](); ! (u = (m = f.next()).done); u = !0) {
                        var v = m.value;
                        i[v.value] = v.checked
                    }
                } catch(e) {
                    l = !0,
                    d = e
                } finally {
                    try { ! u && f.
                        return && f.
                        return ()
                    } finally {
                        if (l) throw d
                    }
                }
                var p = a.closest(s, ".js-discussion-sidebar-item.sidebar-labels");
                Rc.set(p, i)
            }
        }
    }),
    l.remoteForm(".js-new-label-modal-form",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o, s, i, c, u, l;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return r = a.query(t, ".js-new-label-error"),
                    o = void 0,
                    e.prev = 2,
                    e.next = 5,
                    n.html();
                case 5:
                    o = e.sent,
                    e.next = 13;
                    break;
                case 8:
                    e.prev = 8,
                    e.t0 = e.
                    catch(2),
                    s = e.t0.response.json,
                    r.textContent = s.message,
                    r.classList.remove("d-none");
                case 13:
                    if (o) {
                        e.next = 15;
                        break
                    }
                    return e.abrupt("return");
                case 15:
                    return r.classList.add("d-none"),
                    i = a.query(document, "#facebox .js-new-label-name-input", HTMLInputElement),
                    c = i.value.trim(),
                    w.close(),
                    (u = document.getElementById("issue-labels-style")) && u.replaceWith(o.html),
                    l = a.query(document, ".js-issue-labels-menu-content"),
                    e.next = 24,
                    O.updateContent(l);
                case 24:
                    fn(c),
                    en(),
                    mn();
                case 27:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[2, 8]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()),
    o.onInput(".js-label-characters-remaining-field",
    function(e) {
        rn(c(e.target, HTMLInputElement))
    }),
    i.on("navigation:keydown", ".js-label-emoji-suggester",
    function(e) {
        var t = a.closest(e.target, ".js-suggester-container", HTMLElement);
        rn(a.query(t, ".js-suggester-field", HTMLInputElement))
    }),
    i.on("click", ".js-edit-label-cancel",
    function(e) {
        var t = a.closest(e.target, "form", HTMLFormElement);
        sn(t),
        t.reset();
        var n = a.query(t, ".js-new-label-color-input", HTMLInputElement),
        r = n.value;
        a.query(t, ".js-new-label-color", HTMLButtonElement).style.backgroundColor = r,
        cn(t),
        Ic(n);
        var o = e.currentTarget.closest(".labels-list-item");
        if (o) {
            a.query(o, ".js-update-label", HTMLElement).classList.add("d-none");
            var s = o.querySelector(".js-label-preview");
            if (s) {
                s.classList.add("d-none");
                a.query(o, ".js-label-link", HTMLElement).classList.remove("d-none")
            }
            var i = o.querySelectorAll(".js-hide-on-label-edit.d-none"),
            c = !0,
            u = !1,
            l = void 0;
            try {
                for (var d, m = i[Symbol.iterator](); ! (c = (d = m.next()).done); c = !0) {
                    d.value.classList.remove("d-none")
                }
            } catch(e) {
                u = !0,
                l = e
            } finally {
                try { ! c && m.
                    return && m.
                    return ()
                } finally {
                    if (u) throw l
                }
            }
        }
    }),
    l.remoteForm(".js-update-label",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return r = void 0,
                    e.prev = 1,
                    e.next = 4,
                    n.html();
                case 4:
                    r = e.sent,
                    e.next = 12;
                    break;
                case 7:
                    return e.prev = 7,
                    e.t0 = e.
                    catch(1),
                    o = e.t0.response.json,
                    on(t, o),
                    e.abrupt("return");
                case 12:
                    sn(t),
                    (s = a.closest(t, ".labels-list-item")).replaceWith(r.html);
                case 15:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[1, 7]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()),
    l.remoteForm(".js-create-label",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o, s, i;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return r = void 0,
                    e.prev = 1,
                    e.next = 4,
                    n.html();
                case 4:
                    r = e.sent,
                    e.next = 12;
                    break;
                case 7:
                    return e.prev = 7,
                    e.t0 = e.
                    catch(1),
                    o = e.t0.response.json,
                    on(t, o),
                    e.abrupt("return");
                case 12:
                    t.reset(),
                    sn(t),
                    Ic(a.query(t, ".js-new-label-name-input", HTMLInputElement)),
                    a.query(document, ".js-label-list").prepend(r.html),
                    ln(1),
                    un(t, !1),
                    tn(s = a.query(t, ".js-new-label-color", HTMLButtonElement), Cc()),
                    cn(t),
                    (i = t.closest(".js-details-container")) && N.toggleDetailsTarget(c(i, HTMLElement));
                case 23:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[1, 7]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()),
    i.on("click", ".js-toggle-label-delete",
    function(e) {
        var t = a.closest(e.currentTarget, ".labels-list-item"),
        n = a.query(t, ".js-label-delete-container", HTMLElement),
        r = a.querySelectorAll(t, ".js-hide-on-label-delete", HTMLElement),
        o = n.classList.contains("d-none");
        n.classList.toggle("d-none");
        var s = !0,
        i = !1,
        c = void 0;
        try {
            for (var u, l = r[Symbol.iterator](); ! (s = (u = l.next()).done); s = !0) {
                u.value.classList.toggle("d-none", o)
            }
        } catch(e) {
            i = !0,
            c = e
        } finally {
            try { ! s && l.
                return && l.
                return ()
            } finally {
                if (i) throw c
            }
        }
    }),
    i.on("click", ".js-details-target-new-label",
    function() {
        var e = a.query(document, ".js-create-label");
        a.query(e, ".js-new-label-name-input", HTMLInputElement).focus()
    }),
    i.on("click", ".js-edit-label",
    function(e) {
        var t = a.closest(e.currentTarget, ".labels-list-item"),
        n = a.query(t, ".js-update-label", HTMLElement);
        n.classList.remove("d-none");
        a.query(n, ".js-new-label-name-input", HTMLInputElement).focus();
        var r = t.querySelector(".js-label-preview");
        if (r) {
            r.classList.remove("d-none");
            a.query(t, ".js-label-link", HTMLElement).classList.add("d-none")
        }
        var o = a.querySelectorAll(t, ".js-hide-on-label-edit", HTMLElement),
        s = !0,
        i = !1,
        c = void 0;
        try {
            for (var u, l = o[Symbol.iterator](); ! (s = (u = l.next()).done); s = !0) {
                u.value.classList.add("d-none")
            }
        } catch(e) {
            i = !0,
            c = e
        } finally {
            try { ! s && l.
                return && l.
                return ()
            } finally {
                if (i) throw c
            }
        }
    }),
    l.remoteForm(".js-delete-label",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return t.classList.add("loading"),
                    e.next = 3,
                    n.text();
                case 3:
                    t.classList.remove("loading"),
                    r = ln( - 1),
                    un(t, 0 === r),
                    a.closest(t, ".labels-list-item").remove();
                case 7:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ());
    var _c = u(function(e) {
        var t = c(e.target, HTMLInputElement);
        Ic(t)
    },
    500);
    o.onInput(".js-new-label-name-input", _c),
    o.onInput(".js-new-label-description-input", _c),
    o.onInput(".js-new-label-color-input", _c),
    i.on("navigation:keydown", ".js-label-emoji-suggester",
    function(e) {
        var t = a.closest(e.target, ".js-suggester-container", HTMLElement),
        n = a.query(t, ".js-suggester-field", HTMLInputElement);
        Ic(n)
    }),
    i.on("click", ".js-label-emoji-suggester .js-navigation-item",
    function(e) {
        var t = a.closest(e.target, ".js-suggester-container", HTMLElement),
        n = a.query(t, ".js-suggester-field", HTMLInputElement);
        Ic(n)
    }),
    o.onKey("keypress", ".js-new-label-name-input",
    function(e) {
        var t = c(e.target, HTMLInputElement),
        n = parseInt(t.getAttribute("data-maxlength"));
        F.getUtf8StringLength(t.value) >= n && e.preventDefault()
    }),
    i.on("change", ".js-issues-list-check",
    function() {
        var e = !!document.querySelector(".js-issues-list-check:checked");
        a.query(document, "#js-issues-toolbar").classList.toggle("triage-mode", e)
    }),
    i.on("change", ".js-issues-list-check",
    function() {
        var e = a.querySelectorAll(document, ".js-issues-list-check:checked", HTMLInputElement).map(function(e) {
            return [e.name, e.value]
        }),
        t = document.querySelectorAll("#js-issues-toolbar .js-issues-toolbar-triage .js-select-menu"),
        n = !0,
        r = !1,
        o = void 0;
        try {
            for (var s, i = t[Symbol.iterator](); ! (n = (s = i.next()).done); n = !0) {
                var c = s.value;
                D.setLoadingData(c, e),
                c.classList.add("js-load-contents")
            }
        } catch(e) {
            r = !0,
            o = e
        } finally {
            try { ! n && i.
                return && i.
                return ()
            } finally {
                if (r) throw o
            }
        }
    }),
    i.on("selectmenu:selected", ".js-issues-toolbar-triage .js-navigation-item",
    function(e) {
        var n = e.currentTarget,
        r = a.closest(n, ".js-menu-container").hasAttribute("data-submits-hash"),
        o = a.closest(n, "form"),
        s = n.classList.contains("selected"),
        i = n.getAttribute("data-name");
        t(i, "null.js:43");
        var c = n.getAttribute("data-value");
        t(c, "null.js:45");
        var u = document.createElement("input");
        u.setAttribute("type", "hidden"),
        r ? (u.setAttribute("name", i + "[" + c + "]"), u.setAttribute("value", s ? "1": "0")) : (u.setAttribute("name", i), u.setAttribute("value", s ? c: "")),
        Promise.resolve().then(function() {
            j.deactivate(n.closest(".js-menu-container"))
        });
        a.query(o, ".js-issues-triage-fields").appendChild(u),
        o.classList.add("will-submit")
    }),
    i.on("menu:deactivate", ".js-issues-toolbar-triage .js-menu-container",
    function(e) {
        var t = e.currentTarget,
        n = t.querySelector("form.will-submit");
        if (n instanceof HTMLFormElement) {
            t.classList.add("is-loading");
            var r = n.action,
            a = n.method;
            v.fetchJSON(r, {
                method: a,
                body: new FormData(n)
            }).then(function(e) {
                return v.fetchPoll(e.job.url, {
                    headers: {
                        accept: "application/json"
                    }
                })
            }).then(function() {
                j.deactivate(t),
                location.reload()
            }).
            catch(function() {
                t.classList.add("has-error")
            }),
            n.classList.remove("will-submit"),
            e.preventDefault()
        }
    }),
    q(document).on("ajaxSuccess", ".js-undo-issue-event-form",
    function(e) {
        var n = c(e.target, HTMLFormElement),
        r = n.getAttribute("action");
        t("string" == typeof r, "null.js:10"),
        n.remove();
        for (var a = document.querySelectorAll('.js-undo-issue-event-form[action="' + r + '"]'), o = 0; o < a.length; o++) a[o].remove()
    }),
    i.on("click", ".js-details-target-new-label",
    function(e) {
        var t = ie(c(e.target, HTMLElement), "Popover");
        if (t) {
            var n = a.query(t, "form", HTMLFormElement);
            d.submit(n)
        }
    });
    var Fc = function() {
        var e = Ys(regeneratorRuntime.mark(function e() {
            var t, n, r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (t = document.querySelector(".js-launch-configuration-file-validation-container")) {
                        e.next = 3;
                        break
                    }
                    return e.abrupt("return");
                case 3:
                    if (n = t.getAttribute("data-url")) {
                        e.next = 6;
                        break
                    }
                    return e.abrupt("return");
                case 6:
                    return e.next = 8,
                    v.fetchSafeDocumentFragment(document, n);
                case 8:
                    if (r = e.sent) {
                        e.next = 11;
                        break
                    }
                    return e.abrupt("return");
                case 11:
                    if (a = t.querySelector(".js-launch-configuration-validation")) {
                        e.next = 14;
                        break
                    }
                    return e.abrupt("return");
                case 14:
                    a.replaceWith(r);
                case 15:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function() {
            return e.apply(this, arguments)
        }
    } ();
    s.observe(".js-launch-credz-form",
    function() {
        l.remoteForm(".js-launch-credz-form",
        function() {
            var e = Ys(regeneratorRuntime.mark(function e(t, n) {
                var r, a;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return r = void 0,
                        e.prev = 1,
                        e.next = 4,
                        n.json();
                    case 4:
                        r = e.sent,
                        e.next = 10;
                        break;
                    case 7:
                        return e.prev = 7,
                        e.t0 = e.
                        catch(1),
                        e.abrupt("return");
                    case 10:
                        if (r) {
                            e.next = 12;
                            break
                        }
                        return e.abrupt("return");
                    case 12:
                        if (!r.json.success) {
                            e.next = 17;
                            break
                        }
                        i.fire(document, "facebox:close"),
                        Fc(),
                        e.next = 21;
                        break;
                    case 17:
                        if (a = document.querySelector(".js-launch-credz-form-error-message")) {
                            e.next = 20;
                            break
                        }
                        return e.abrupt("return");
                    case 20:
                        a.textContent = r.json.error_message;
                    case 21:
                    case "end":
                        return e.stop()
                    }
                },
                e, this, [[1, 7]])
            }));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        } ())
    });
    var Pc = function(e) {
        function t(e) {
            Qs(this, t);
            var n = ti(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.name = "DataRemoteError",
            n.message = e,
            n
        }
        return ei(t, e),
        t
    } (Error);
    q(document).on("ajaxError", "[data-remote]",
    function(e, t, n, a) {
        var o = void 0,
        s = void 0,
        i = void 0,
        c = void 0;
        if (this === e.target && "abort" !== a && "canceled" !== a) {
            var u = "." + this.className.split(" ").sort().join("."),
            l = new Pc(a + " (" + t.status + ") from " + u);
            if (r.reportError(l, {
                dataRemoteTarget: B(this),
                dataRemoteMethod: null != (o = this.getAttribute("method")) ? o: "GET",
                dataRemoteUrl: null != (s = null != (i = this.href) ? i: this.action) ? s: window.location.href,
                dataRemoteType: null != (c = this.getAttribute("data-type")) ? c: "intelligent guess"
            }), /<html/.test(t.responseText)) throw vn(),
            e.stopImmediatePropagation(),
            l;
            return setTimeout(function() {
                if (!e.isDefaultPrevented()) throw vn(),
                l
            },
            0)
        }
    }),
    q(document).on("ajaxSend", "[data-remote]",
    function() {
        pn()
    }),
    i.on("click", ".js-ajax-error-dismiss",
    function() {
        pn()
    }),
    q(document).on("ajaxSend", "[data-remote]",
    function(e) {
        if (this === e.target && !e.isDefaultPrevented()) return q(this).addClass("loading")
    }),
    q(document).on("ajaxComplete", "[data-remote]",
    function(e) {
        if (this === e.target) return q(this).removeClass("loading")
    }),
    n.ready.then(function() {
        window._octo.push(["enablePerformance"]),
        window._octo.push(["recordPageView"])
    }),
    document.addEventListener("pjax:complete",
    function() {
        window._octo.push(["recordPageView"])
    });
    var Nc = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t) {
            var n, r, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (o = function(e) {
                        t.classList.toggle("is-autocheck-loading", e),
                        n.classList.toggle("is-loading", e)
                    },
                    n = a.closest(t, "dl.form-group"), r = yn(t)) {
                        e.next = 5;
                        break
                    }
                    return e.abrupt("return");
                case 5:
                    if (gn(n), t.classList.remove("is-autocheck-successful", "is-autocheck-errored"), t.value.trim()) {
                        e.next = 10;
                        break
                    }
                    return i.fire(t, "autocheck:complete"),
                    e.abrupt("return");
                case 10:
                    return o(!0),
                    e.prev = 11,
                    e.next = 14,
                    hn(t, r);
                case 14:
                    s = e.sent,
                    t.classList.add("is-autocheck-successful"),
                    n.classList.add("successed"),
                    i.fire(t, "autocheck:success", s),
                    e.next = 31;
                    break;
                case 20:
                    if (e.prev = 20, e.t0 = e.
                    catch(11), !E(t)) {
                        e.next = 31;
                        break
                    }
                    return t.classList.add("is-autocheck-errored"),
                    function(e) {
                        gn(e),
                        e.classList.add("errored");
                        var t = e.querySelector("p.note");
                        t && t.classList.add("d-none")
                    } (n),
                    e.t1 = n,
                    e.next = 28,
                    Dc(e.t0);
                case 28:
                    e.t2 = e.sent,
                    e.t1.append.call(e.t1, e.t2),
                    i.fire(t, "autocheck:error");
                case 31:
                    o(!1),
                    i.fire(t, "autocheck:complete");
                case 33:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[11, 20]])
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } (),
    Oc = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t) {
            var n, r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (n = "Something went wrong", t.response) {
                        e.next = 3;
                        break
                    }
                    return e.abrupt("return", n);
                case 3:
                    return r = c(t.response, Response),
                    e.next = 6,
                    r.text();
                case 6:
                    if (a = e.sent, !/<html/.test(a)) {
                        e.next = 9;
                        break
                    }
                    return e.abrupt("return", n);
                case 9:
                    return e.abrupt("return", a);
                case 10:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } (),
    Dc = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    Oc(t);
                case 2:
                    return n = e.sent,
                    (r = document.createElement("dd")).classList.add("error"),
                    t.response instanceof Response &&
                    function(e) {
                        return /text\/html/.test(e.headers.get("Content-Type"))
                    } (t.response) ? r.innerHTML = n: r.textContent = n,
                    e.abrupt("return", r);
                case 7:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } (),
    Bc = new WeakMap,
    Uc = new WeakMap;
    i.on("change", "input[data-autocheck-url]",
    function(e) {
        Nc(c(e.currentTarget, HTMLInputElement))
    }),
    o.onFocus("input[data-autocheck-url]",
    function(e) {
        var t = c(e, HTMLInputElement);
        m.addThrottledInputEventListener(t, bn, {
            wait: 300
        }),
        t.addEventListener("blur",
        function() {
            return m.removeThrottledInputEventListener(t, bn)
        },
        {
            once: !0
        })
    });
    var zc = new(function() {
        function e() {
            this.onNavigationOpen = jn(this.onNavigationOpen, this),
            this.onNavigationKeyDown = jn(this.onNavigationKeyDown, this),
            this.onInputChange = jn(this.onInputChange, this),
            this.onResultsMouseDown = jn(this.onResultsMouseDown, this),
            this.onInputBlur = jn(this.onInputBlur, this),
            this.onInputFocus = jn(this.onInputFocus, this),
            this.focusedInput = this.focusedResults = null,
            this.mouseDown = !1,
            this.fetchQueue = new f
        }
        return e.prototype.bindEvents = function(e, t) {
            q(e).on("blur", this.onInputBlur),
            m.addThrottledInputEventListener(e, this.onInputChange),
            q(t).on("mousedown", this.onResultsMouseDown),
            t.addEventListener("navigation:open", this.onNavigationOpen),
            t.addEventListener("navigation:keydown", this.onNavigationKeyDown)
        },
        e.prototype.unbindEvents = function(e, t) {
            q(e).off("blur", this.onInputBlur),
            m.removeThrottledInputEventListener(e, this.onInputChange),
            q(t).off("mousedown", this.onResultsMouseDown),
            t.removeEventListener("navigation:open", this.onNavigationOpen),
            t.removeEventListener("navigation:keydown", this.onNavigationKeyDown)
        },
        e.prototype.onInputFocus = function(e) {
            var t = q(e).closest(".js-autocomplete-container").find(".js-autocomplete")[0];
            this.focusedInput = e,
            this.focusedResults = t,
            this.bindEvents(e, t),
            q(e).attr("autocomplete", "off"),
            this.fetchResults(e.value)
        },
        e.prototype.onInputBlur = function() {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).keepResultsOpen,
            t = this.focusedInput,
            n = this.focusedResults;
            this.mouseDown || (e || this.hideResults(), this.inputValue = null, this.focusedInput = this.focusedResults = null, this.unbindEvents(t, n))
        },
        e.prototype.onResultsMouseDown = function() {
            this.mouseDown = !0;
            var e = function(t) {
                return function() {
                    return t.mouseDown = !1,
                    q(document).off("mouseup", e)
                }
            } (this);
            q(document).on("mouseup", e)
        },
        e.prototype.onInputChange = function() {
            var e = this.focusedInput;
            this.inputValue !== e.value && (q(e).removeData("autocompleted"), i.fire(e, "autocomplete:autocompleted:changed")),
            this.fetchResults(e.value)
        },
        e.prototype.fetchResults = function(e) {
            var t = this.focusedResults.getAttribute("data-search-url");
            if (t) {
                var n = q(this.focusedInput).closest(".js-autocomplete-container"),
                r = e.trim() ? (t += ~t.indexOf("?") ? "&": "?", t += "q=" + encodeURIComponent(e), n.addClass("is-sending"), v.fetchText(t)) : q(this.focusedResults).find("[data-autocomplete-value]").length > 0 ? this.hideResults() : Promise.resolve("");
                return this.fetchQueue.push(r).then(function(t) {
                    return function(n) {
                        return q(t.focusedResults).find(".js-autocomplete-results").html(n),
                        t.onResultsChange(e)
                    }
                } (this)).
                catch(function(e) {
                    return e
                }).then(function() {
                    n.removeClass("is-sending")
                })
            }
        },
        e.prototype.onResultsChange = function(e) {
            if (0 === q(this.focusedResults).find("[data-autocomplete-value]").length) this.hideResults();
            else if (this.inputValue !== e && (this.inputValue = e, this.showResults(), q(this.focusedInput).is("[data-autocomplete-autofocus]"))) {
                var t = this.focusedResults.querySelector(".js-navigation-container");
                t && A.focus(t)
            }
        },
        e.prototype.onNavigationKeyDown = function(e) {
            if (null !== e.target.getAttribute("data-autocomplete-value")) switch (e.detail.hotkey) {
            case "Tab":
                this.onNavigationOpen(e),
                e.preventDefault();
                break;
            case "Escape":
                this.hideResults(),
                e.preventDefault()
            }
        },
        e.prototype.onNavigationOpen = function(e) {
            if (null !== e.target.getAttribute("data-autocomplete-value")) {
                var t = e.target;
                if (t.classList.contains("disabled")) this.focusedInput !== document.activeElement && this.onInputBlur({
                    keepResultsOpen: !0
                });
                else {
                    var n = this.inputValue,
                    r = q(t).attr("data-autocomplete-value");
                    this.inputValue = r,
                    q(this.focusedInput).val(r),
                    q(this.focusedInput).data("autocompleted", r),
                    i.fire(this.focusedInput, "autocomplete:autocompleted:changed"),
                    i.fire(this.focusedInput, "autocomplete:result", {
                        text: r,
                        query: n
                    }),
                    q(t).removeClass("active"),
                    this.focusedInput === document.activeElement ? this.hideResults() : this.onInputBlur()
                }
            }
        },
        e.prototype.showResults = function(e, t) {
            if (null == e && (e = this.focusedInput), null == t && (t = this.focusedResults), !E(t)) {
                var n = q(e).offset().top + q(e).innerHeight(),
                r = q(e).innerWidth();
                q(t).css({
                    display: "block",
                    position: "absolute",
                    width: r + 2
                }),
                q(t).offset({
                    top: n + 5
                }),
                q(e).addClass("js-navigation-enable");
                var a = t.querySelector(".js-navigation-container");
                return a && A.push(a),
                q(t).show()
            }
        },
        e.prototype.hideResults = function(e, t) {
            if (null == e && (e = this.focusedInput), null == t && (t = this.focusedResults), this.inputValue = null, t && E(t)) {
                q(e).removeClass("js-navigation-enable");
                var n = t.querySelector(".js-navigation-container");
                return n && A.pop(n),
                q(t).hide()
            }
        },
        e
    } ());
    s.observe(".js-autocomplete-field",
    function(e) {
        e.addEventListener("focus",
        function() {
            return zc.onInputFocus(e)
        }),
        document.activeElement === e && zc.onInputFocus(e)
    });
    var Wc = new f;
    s.observe(".js-addon-purchase-field",
    function(e) {
        E(e) && Ln(e),
        m.addThrottledInputEventListener(e,
        function() {
            Ln(e)
        })
    }),
    s.observe(".js-addon-downgrade-field",
    function(e) {
        E(e) && Ln(e),
        e.addEventListener("change",
        function() {
            Ln(e)
        })
    }),
    n.loaded.then(wn),
    i.on("click", ".js-zeroclipboard",
    function(e) {
        var n = e.currentTarget;
        t(n instanceof HTMLElement, "null.js:12");
        var r = n.getAttribute("data-clipboard-text");
        if (r) kn(r);
        else {
            var o = a.closest(n, ".js-zeroclipboard-container"),
            s = a.query(o, ".js-zeroclipboard-target");
            s instanceof HTMLInputElement || s instanceof HTMLTextAreaElement ? "hidden" === s.type ? kn(s.value) : function(e) {
                e.select(),
                document.execCommand("copy");
                var t = getSelection();
                null != t && t.removeAllRanges()
            } (s) : xn(s)
        }
        var i = n.getAttribute("data-copied-hint"),
        c = n.getAttribute("aria-label");
        i && i !== c && (n.setAttribute("aria-label", i), n.addEventListener("mouseleave",
        function() {
            null != c ? n.setAttribute("aria-label", c) : n.removeAttribute("aria-label")
        },
        {
            once: !0
        })),
        n.blur()
    }),
    l.remoteForm(".js-new-comment-form",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o, s, i, c, u, l, m, f, v, p, h;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return r = void 0,
                    En(t),
                    e.prev = 2,
                    e.next = 5,
                    n.json();
                case 5:
                    r = e.sent,
                    e.next = 11;
                    break;
                case 8:
                    e.prev = 8,
                    e.t0 = e.
                    catch(2),
                    function(e, t) {
                        var n = "You can't comment at this time";
                        if (t.response && 422 === t.response.status) {
                            var r = t.response.json;
                            r.errors && (n += " — your comment " + r.errors.join(", "))
                        }
                        n += ". ";
                        var a = e.querySelector(".js-comment-form-error");
                        a && (a.style.display = "block", a.classList.remove("d-none"), a.textContent = n)
                    } (t, e.t0);
                case 11:
                    if (r) {
                        e.next = 13;
                        break
                    }
                    return e.abrupt("return");
                case 13:
                    for (t.reset(), o = !0, s = !1, i = void 0, e.prev = 17, c = a.querySelectorAll(t, ".js-resettable-field", HTMLInputElement)[Symbol.iterator](); ! (o = (u = c.next()).done); o = !0) l = u.value,
                    d.changeValue(l, l.getAttribute("data-reset-value") || "");
                    e.next = 25;
                    break;
                case 21:
                    e.prev = 21,
                    e.t1 = e.
                    catch(17),
                    s = !0,
                    i = e.t1;
                case 25:
                    e.prev = 25,
                    e.prev = 26,
                    !o && c.
                    return && c.
                    return ();
                case 28:
                    if (e.prev = 28, !s) {
                        e.next = 31;
                        break
                    }
                    throw i;
                case 31:
                    return e.finish(28);
                case 32:
                    return e.finish(25);
                case 33:
                    (m = a.query(t, ".js-write-tab")).click(),
                    f = r.json.updateContent;
                    for (v in f) p = f[v],
                    (h = document.querySelector(v)) ? O.replaceContent(h, p) : console.warn("couldn't find " + v + " for immediate update");
                case 37:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[2, 8], [17, 21, 25, 33], [26, , 28, 32]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()),
    s.observe(".js-comment-and-button",
    function(e) {
        function t() {
            var t = this.value.trim();
            t !== a && (a = t, e.textContent = t ? e.getAttribute("data-comment-text") : r)
        }
        var n = e.form.querySelector(".js-comment-field"),
        r = e.textContent,
        a = !1;
        return {
            add: function() {
                n.addEventListener("input", t),
                n.addEventListener("change", t)
            },
            remove: function() {
                n.removeEventListener("input", t),
                n.removeEventListener("change", t)
            }
        }
    });
    var Vc = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, a, o, s, i;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (r = {
                        url: t.getAttribute("data-preview-url"),
                        data: {
                            text: n,
                            authenticity_token: function(e) {
                                var t = e.getAttribute("data-preview-authenticity-token"),
                                n = e.closest("form").elements.authenticity_token;
                                return null != t ? t: null != n ? n.value: void 0
                            } (t)
                        },
                        headers: {
                            "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                        }
                    },
                    !(a = !t.dispatchEvent(new CustomEvent("preview:setup", {
                        bubbles: !0,
                        cancelable: !0,
                        detail: r
                    })))) {
                        e.next = 6;
                        break
                    }
                    throw new Error("preview canceled");
                case 6:
                    n = JSON.stringify(r);
                case 7:
                    return o = Kc.get(t),
                    s = void 0,
                    i = void 0,
                    o && (s = o[0], i = o[1]),
                    s !== n && (Jc = !1, (i = $c.push(function(e) {
                        return v.fetchText(e.url, {
                            method: "post",
                            body: q.param(e.data),
                            headers: e.headers
                        })
                    } (r))).then(function() {
                        Jc = !0
                    }), Kc.set(t, [n, i])),
                    e.abrupt("return", i);
                case 13:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ();
    i.on("click", ".js-write-tab",
    function() {
        Sn(this).then(function(e) {
            return e.querySelector(".js-comment-field").focus()
        });
        var e = this.closest(".js-previewable-comment-form").querySelector("markdown-toolbar");
        null != e && e.classList.remove("d-none")
    }),
    i.on("click", ".js-preview-tab",
    function(e) {
        Sn(this).then(function(e) {
            Tn(e)
        });
        var t = this.closest(".js-previewable-comment-form").querySelector("markdown-toolbar");
        null != t && t.classList.add("d-none"),
        e.stopPropagation(),
        e.preventDefault()
    }),
    i.on("preview:render", ".js-previewable-comment-form",
    function() {
        Sn(this.querySelector(".js-preview-tab")).then(function(e) {
            Tn(e)
        })
    });
    var $c = new f,
    Kc = new WeakMap,
    Jc = !1;
    s.observe(".js-preview-tab",
    function(e) {
        var t = void 0,
        n = void 0;
        e.addEventListener("mouseenter",
        function() {
            t || (t = e.closest(".js-previewable-comment-form"), n = t.querySelector(".js-comment-field")),
            Vc(t, n.value)
        })
    }),
    o.onKey("keydown", ".js-comment-field",
    function(e) {
        var n = e.target;
        if (t(n instanceof HTMLTextAreaElement, "null.js:207"), (e.ctrlKey || e.metaKey) && "P" === e.key) {
            var r = a.closest(n, ".js-previewable-comment-form");
            r.classList.contains("write-selected") && (n.blur(), r.dispatchEvent(new CustomEvent("preview:render", {
                bubbles: !0,
                cancelable: !1
            })), e.preventDefault(), e.stopImmediatePropagation())
        }
    });
    var Gc = new WeakMap,
    Xc = ["input[type=submit][data-disable-with]", "button[data-disable-with]"].join(", ");
    i.on("submit", "form",
    function(e) {
        var n = !0,
        r = !1,
        a = void 0;
        try {
            for (var o, s = e.currentTarget.querySelectorAll(Xc)[Symbol.iterator](); ! (n = (o = s.next()).done); n = !0) {
                var i = o.value;
                t(i instanceof HTMLInputElement || i instanceof HTMLButtonElement, "null.js:42"),
                Gc.set(i, qn(i));
                var c = i.getAttribute("data-disable-with");
                c && An(i, c),
                i.disabled = !0
            }
        } catch(e) {
            r = !0,
            a = e
        } finally {
            try { ! n && s.
                return && s.
                return ()
            } finally {
                if (r) throw a
            }
        }
    },
    {
        capture: !0
    }),
    q(document).on("ajaxComplete", "form",
    function(e) {
        e.currentTarget === e.target && Mn(e.currentTarget)
    }),
    l.afterRemote(Mn),
    I(function() {
        var e = Hn();
        e && setTimeout(function() {
            e.click()
        },
        0)
    }),
    document.addEventListener("facebox:close",
    function() {
        var e = Hn();
        e && /facebox/.test(e.rel) && p.replaceState(p.getState(), "", window.location.href.split("#")[0])
    }),
    document.addEventListener("facebox:reveal",
    function() {
        var e = document.getElementById("facebox");
        setTimeout(function() { !
            function(e) {
                var t = e.querySelectorAll("input[autofocus], textarea[autofocus]"),
                n = t[t.length - 1];
                n && document.activeElement !== n && n.focus()
            } (e)
        },
        0),
        q(e).on("keydown", z)
    }),
    document.addEventListener("facebox:afterClose",
    function() {
        q("#facebox").off("keydown", z),
        q("#facebox :focus").blur()
    }),
    s.observe("a[rel*=facebox]",
    function(e) {
        w.addFaceboxEventListener(e)
    }),
    document.addEventListener("facebox:close", w.teardownOnClose),
    i.on("click", ".js-facebox-close",
    function(e) {
        e.preventDefault(),
        w.close()
    });
    var Yc = new WeakMap;
    s.observe(".js-filterable-field",
    function(e) {
        function t(e) {
            r !== e.value && (r = e.value, k(function() {
                i.fire(e, "filterable:change")
            }))
        }
        function n(e) {
            var t = e.currentTarget;
            k(function() {
                i.fire(t, "filterable:change")
            })
        }
        var r = e.value;
        return {
            add: function(e) {
                e.addEventListener("focus", n),
                m.addThrottledInputEventListener(e, t),
                document.activeElement === e && n({
                    currentTarget: e
                })
            },
            remove: function(e) {
                e.removeEventListener("focus", n),
                m.removeThrottledInputEventListener(e, t)
            }
        }
    }),
    i.on("filterable:change", ".js-filterable-field",
    function() {
        var e = this.value.trim().toLowerCase(),
        t = document.querySelectorAll("[data-filterable-for=" + this.id + "]"),
        n = !0,
        r = !1,
        a = void 0;
        try {
            for (var o, s = t[Symbol.iterator](); ! (n = (o = s.next()).done); n = !0) {
                var i = o.value;
                if ("substring-memory" !== i.getAttribute("data-filterable-type") || Rn(i)) {
                    Fn(i, e);
                    var c = new CustomEvent("filterable:change", {
                        bubbles: !0,
                        cancelable: !1,
                        detail: {
                            inputField: this
                        }
                    });
                    i.dispatchEvent(c)
                }
            }
        } catch(e) {
            r = !0,
            a = e
        } finally {
            try { ! n && s.
                return && s.
                return ()
            } finally {
                if (r) throw a
            }
        }
    }),
    document.addEventListener("selectmenu:data",
    function(e) {
        var t = e.target.querySelector('[data-filterable-type="substring-memory"]');
        if (t) { !
            function(e, t) {
                Yc.set(e, t)
            } (t, e.detail.data);
            var n = e.target.querySelector(".js-filterable-field");
            n && n === document.activeElement && i.fire(n, "filterable:change")
        }
    }),
    s.observe(".js-issue-link",
    function(e) {
        e.addEventListener("mouseenter", Pn)
    }),
    q(document).on("ajaxSuccess", ".js-immediate-updates",
    function(e, t, n, r) {
        var a = void 0;
        if (this === e.target) {
            var o = r.updateContent;
            for (a in o) {
                var s = o[a],
                i = document.querySelector(a);
                i && O.replaceContent(i, s)
            }
        }
    }),
    i.on("click", ".js-permalink-shortcut",
    function(e) {
        window.location = this.href + window.location.hash,
        e.preventDefault()
    }),
    i.on("click", "[data-pjax] a, a[data-pjax]",
    function(e) {
        t(e instanceof MouseEvent, "null.js:67");
        var n = e.currentTarget;
        if (n instanceof HTMLAnchorElement) {
            if (null != n.getAttribute("data-skip-pjax")) return;
            if (null != n.getAttribute("data-remote")) return;
            var r = Dn(n);
            r && U.click(e, {
                container: r,
                scrollTo: On(n)
            })
        }
    }),
    q(document).on("submit", "form[data-pjax]",
    function(e) {
        var t = Dn(this);
        t && U.submit(e, {
            container: t,
            scrollTo: On(this)
        })
    }),
    i.on("pjax:click", "#js-repo-pjax-container a[href]",
    function(e) {
        t(e.currentTarget instanceof HTMLAnchorElement, "null.js:21");
        var n = e.currentTarget.pathname;
        Bn(n, location.pathname) ?
        function(e) {
            return "projects" === e.split("/")[3] && Bn(e, location.pathname)
        } (n) && e.preventDefault() : e.preventDefault()
    }),
    i.on("pjax:click", ".js-comment-body",
    function(e) {
        t(e.target instanceof HTMLAnchorElement, "null.js:33"),
        "files" === e.target.pathname.split("/")[3] && e.preventDefault()
    });
    var Qc = {};
    n.ready.then(function() {
        Qc[document.location.pathname] = q("head [data-pjax-transient]")
    }),
    document.addEventListener("pjax:beforeReplace",
    function(e) {
        t(e instanceof CustomEvent, "null.js:19");
        var n = void 0,
        r = void 0,
        a = void 0,
        o = e.detail.contents;
        for (n = r = 0, a = o.length; r < a; n = ++r) {
            var s = o[n];
            s && ("pjax-head" === s.id ? (Qc[document.location.pathname] = q(s).children(), o[n] = null) : "js-flash-container" === s.id && (q("#js-flash-container").replaceWith(s), o[n] = null))
        }
    }),
    document.addEventListener("pjax:end",
    function() {
        var e = Qc[document.location.pathname];
        if (e) {
            q("head [data-pjax-transient]").remove();
            var t = q(e).not("title, script, link[rel='stylesheet']"),
            n = q(e).filter("link[rel='stylesheet']");
            return q(document.head).append(t.attr("data-pjax-transient", !0)),
            q(document.head).append(n)
        }
    }),
    n.ready.then(function() {
        var e = document.body;
        t(e, "null.js:8"),
        e.classList.contains("js-print-popup") && (window.print(), setTimeout(window.close, 1e3))
    });
    var Zc = new f;
    o.onFocus(".js-quicksearch-field",
    function(e) {
        t(e instanceof HTMLInputElement, "null.js:43");
        var n = c(e.form, HTMLFormElement);
        A.push(n.querySelector(".js-quicksearch-results"))
    }),
    o.onInput(".js-quicksearch-field",
    function(e) {
        function n() {
            s.classList.remove("is-sending")
        }
        var r = c(e.target, HTMLInputElement),
        o = r.value.replace(/^\s+|\s+$/g, ""),
        s = a.closest(r, "form"),
        i = a.query(s, ".js-quicksearch-results").getAttribute("data-quicksearch-url");
        t(i, "null.js:77");
        var u = void 0;
        if (o.length) {
            var l = new URL(i, window.location.origin),
            d = new URLSearchParams(l.search.slice(1));
            d.append("q", o),
            l.search = d.toString(),
            s.classList.add("is-sending"),
            u = v.fetchText(l)
        } else u = Promise.resolve("");
        t(Zc, "null.js:95"),
        Zc.push(u).then(function(e) {
            var t = a.query(s, ".js-quicksearch-results");
            t.innerHTML = e,
            t.classList.toggle("active", "" !== o)
        }).then(n, n)
    }),
    i.on("navigation:keydown", ".js-quicksearch-results",
    function(e) {
        t(e instanceof CustomEvent, "null.js:58");
        var n = e.target,
        r = a.closest(n, "form", HTMLFormElement);
        if ("Escape" === e.detail.hotkey) {
            var o = a.query(r, ".js-quicksearch-results");
            o.classList.remove("active"),
            A.clear(o)
        } else "Enter" !== e.detail.hotkey || n.classList.contains("js-navigation-item") || (d.submit(r), e.preventDefault())
    }),
    i.on("submit", ".js-quicksearch-form",
    function(e) {
        t(e.currentTarget instanceof HTMLFormElement, "null.js:49");
        var n = e.currentTarget.querySelector(".js-quicksearch-results");
        n && (n.classList.remove("active"), A.pop(n))
    });
    var eu = document.querySelector("meta[name=user-login]"); !
    function() {
        if (eu instanceof HTMLMetaElement) {
            var e = eu.content,
            t = String( !! e.length);
            try {
                localStorage.setItem("logged-in", t)
            } catch(e) {
                return
            }
            window.addEventListener("storage",
            function(e) {
                if (e.storageArea === localStorage && "logged-in" === e.key && ("true" === e.newValue || "false" === e.newValue) && e.newValue !== t) {
                    t = e.newValue;
                    var n = a.query(document, ".js-stale-session-flash");
                    n.classList.toggle("is-signed-in", "true" === t),
                    n.classList.toggle("is-signed-out", "false" === t),
                    n.classList.remove("d-none"),
                    window.addEventListener("popstate",
                    function(e) {
                        null != e.state.container && location.reload()
                    }),
                    i.on("submit", "form",
                    function(e) {
                        e.preventDefault()
                    })
                }
            })
        }
    } ();
    var tu = {
        mention: {
            typeid: "mention",
            match: /(^|\s|\()(@([a-z0-9\-_/] * )) $ / i, replace: "$1@$value ", search: function(e, t, n) {
                var r = Gn(t),
                a = e.querySelector("ul.mention-suggestions"),
                o = void 0;
                return o = n ?
                function(e, t, n) {
                    t = t.toLowerCase();
                    var r = n.text,
                    a = null != n.score ? n.score: Ne,
                    o = e;
                    if (t) {
                        o = [];
                        var s = !0,
                        i = !1,
                        c = void 0;
                        try {
                            for (var u, l = e[Symbol.iterator](); ! (s = (u = l.next()).done); s = !0) {
                                var d = u.value;
                                null == d.fuzzyFilterTextCache && (d.fuzzyFilterTextCache = r(d)),
                                d.fuzzyFilterScoreCache = a(d.fuzzyFilterTextCache, t, d),
                                d.fuzzyFilterScoreCache > 0 && o.push(d)
                            }
                        } catch(e) {
                            i = !0,
                            c = e
                        } finally {
                            try { ! s && l.
                                return && l.
                                return ()
                            } finally {
                                if (i) throw c
                            }
                        }
                        o.sort(Un)
                    }
                    return null != n.limit ? o.slice(0, n.limit) : o
                } (n, t, {
                    limit: 5,
                    score: function(e, t, n) {
                        var a = r.score(e),
                        o = n.score;
                        return "number" == typeof o ? a * o: a
                    },
                    text: function(e) {
                        return e.login ? (e.login + " " + e.name).trim().toLowerCase() : (e.name + " " + e.description).trim().toLowerCase()
                    }
                }) : ze(a, t, {
                    limit: 5,
                    text: Vn,
                    score: function(e, t, n) {
                        var a = r.score(e, t, n),
                        o = n.getAttribute("data-mentionable-score");
                        return null !== o ? a * parseFloat(o) : a
                    }
                }),
                Promise.resolve({
                    element: a,
                    results: o
                })
            }
        },
        auditLogUser: {
            typeid: "auditLogUser",
            match: /(^|\s)((-?actor:|-?user:)([a-z0-9\-+_]*))$/i,
            replace: "$1$3$value ",
            search: function(e, t) {
                var n = e.querySelector("ul.user-suggestions"),
                r = ze(n, t, {
                    limit: 5
                });
                return Promise.resolve({
                    element: n,
                    results: r
                })
            },
            normalizeMatch: zn
        },
        auditLogOrg: {
            typeid: "auditLogOrg",
            match: /(^|\s)((-?org:)([a-z0-9\-+_]*))$/i,
            replace: "$1$3$value ",
            search: function(e, t) {
                var n = e.querySelector("ul.org-suggestions"),
                r = ze(n, t, {
                    limit: 5
                });
                return Promise.resolve({
                    element: n,
                    results: r
                })
            },
            normalizeMatch: zn
        },
        auditLogAction: {
            typeid: "auditLogAction",
            match: /(^|\s)((-?action:)([a-z0-9.\-+_]*))$/i,
            replace: "$1$3$value ",
            search: function(e, t) {
                var n = e.querySelector("ul.action-suggestions"),
                r = ze(n, t, {
                    limit: 5
                });
                return Promise.resolve({
                    element: n,
                    results: r
                })
            },
            normalizeMatch: zn
        },
        auditLogRepo: {
            typeid: "auditLogRepo",
            match: /(^|\s)((-?repo:)([a-z0-9/\ - +_] * )) $ / i, replace: "$1$3$value ", search: function(e, t) {
                var n = e.querySelector("ul.repo-suggestions"),
                r = ze(n, t, {
                    limit: 5
                });
                return Promise.resolve({
                    element: n,
                    results: r
                })
            },
            normalizeMatch: zn
        },
        auditLogCountry: {
            typeid: "auditLogCountry",
            match: /(^|\s)((-?country:)([a-z0-9\-+_]*))$/i,
            replace: "$1$3$value ",
            search: function(e, t) {
                var n = e.querySelector("ul.country-suggestions"),
                r = ze(n, t, {
                    limit: 5
                });
                return Promise.resolve({
                    element: n,
                    results: r
                })
            },
            normalizeMatch: zn
        },
        emoji: {
            typeid: "emoji",
            match: /(^|\s|\()(:([a-z0-9\-+_]*))$/i,
            replace: "$1$value ",
            getValue: function(e) {
                if (e.hasAttribute("data-use-colon-emoji")) return e.getAttribute("data-value");
                var t = e.firstElementChild;
                return t && "G-EMOJI" === t.tagName && !t.firstElementChild ? t.textContent: e.getAttribute("data-value")
            },
            search: function(e, t) {
                var n = e.querySelector("ul.emoji-suggestions"),
                r = ze(n, t = " " + t.toLowerCase().replace(/_/g, " "), {
                    limit: 5,
                    text: Wn,
                    score: Kn
                });
                return Promise.resolve({
                    element: n,
                    results: r
                })
            }
        },
        search: {
            typeid: "search",
            match: /(^|\s)([a-z-]*)$/i,
            replace: "$1$value",
            getValue: function(e) {
                return e.getAttribute("data-value")
            },
            search: function(e, t) {
                var n = e.querySelector("ul.search-suggestions"),
                r = ze(n, t, {
                    limit: 10,
                    text: function(e) {
                        return e.getAttribute("data-text")
                    },
                    score: $n
                });
                return Promise.resolve({
                    element: n,
                    results: r
                })
            },
            normalizeMatch: function(e, t, n) {
                var r = n[2];
                return {
                    type: e,
                    text: r,
                    query: r,
                    startIndex: t - r.length,
                    endIndex: t
                }
            }
        },
        hashed: {
            typeid: "issue",
            match: /(^|\s|\()(#([a-z0-9\-_/] * )) $ / i, replace: "$1#$value ", search: function(e, t) {
                var n = void 0,
                r = e.querySelector("ul.hashed-suggestions"),
                a = ze(r, t, {
                    limit: 5,
                    text: Vn,
                    score: /^\d+$/.test(t) ? (n = new RegExp("\\b" + t),
                    function(e) {
                        return function(e, t) {
                            var n = e.search(t);
                            return n > -1 ? 1e3 - n: 0
                        } (e, n)
                    }) : Gn(t).score
                });
                return Promise.resolve({
                    element: r,
                    results: a
                })
            }
        }
    },
    nu = {};i.on("focusin:delay", ".js-suggester-field",
    function() {
        new Wi({
            input: this,
            suggester: this.closest(".js-suggester-container").querySelector(".js-suggester"),
            types: tu,
            disable: Xn
        }).setup()
    }), q(document).on("ajaxSend",
    function(e, t, n) {
        if (!n.crossDomain && !/[?&]_pjax=/.test(n.url)) {
            var r = document.querySelector(".js-timeline-marker");
            r && t.setRequestHeader("X-Timeline-Last-Modified", r.getAttribute("data-last-modified"))
        }
    }), l.remoteForm(".js-needs-timeline-marker-header",
    function(e, t, n) {
        var r = document.querySelector(".js-timeline-marker");
        if (r) {
            var a = r.getAttribute("data-last-modified");
            a && n.headers.set("X-Timeline-Last-Modified", a)
        }
    }), i.on("click", ".js-timeline-progressive-disclosure-button",
    function() {
        this.closest(".js-timeline-progressive-disclosure-container").src = this.getAttribute("data-url")
    });
    var ru = null;s.observe(".js-timeline-progressive-disclosure-container",
    function() {
        return {
            add: function(e) {
                return e.addEventListener("loadstart",
                function() {
                    return this.classList.add("is-loading"),
                    !0
                }),
                e.addEventListener("loadend",
                function() {
                    return this.classList.remove("is-loading"),
                    !0
                }),
                e.addEventListener("load",
                function() {
                    if (e === ru) {
                        ru = null;
                        var t = Yn(),
                        n = document.getElementById(t);
                        if (n) {
                            var r = n.closest(".js-details-container");
                            null != r && r.classList.add("open");
                            var a = T.overflowOffset(n);
                            null != a && (a.top < 0 || a.bottom < 0) && n.scrollIntoView()
                        }
                    }
                    return ! 0
                }),
                e.addEventListener("error",
                function() {
                    return this.src = "",
                    !0
                })
            }
        }
    });
    var au = [/^(commitcomment)-(\d+)$/, /^(commits-pushed)-([0-9a-f]{7})$/, /^(discussion)_r(\d+)$/, /^(discussion-diff)-(\d+)(?:[LR]-?\d+)?$/, /^(event)-(\d+)$/, /^(issuecomment)-(\d+)$/, /^(ref-commit)-([0-9a-f]{7})$/, /^(ref-issue)-(\d+)$/, /^(ref-pullrequest)-(\d+)$/]; !
    function() {
        var e = Yn();
        if (!e || !document.getElementById(e)) {
            var t = document.querySelector(".js-timeline-progressive-disclosure-container");
            if (t) {
                var n = function(e) {
                    for (var t = 0; t < au.length; t++) {
                        var n = au[t].exec(e);
                        if (null != n) return [n[1], n[2]]
                    }
                } (e);
                if (n) {
                    var r = ni(n, 2); !
                    function(e, t, n) {
                        var r = new URL(e.getAttribute("data-fragment-url"), window.location.origin),
                        a = new URLSearchParams(r.search.slice(1));
                        a.append("focus_type", t),
                        a.append("focus_value", n),
                        r.search = a.toString(),
                        e.src = r.toString()
                    } (t, r[0], r[1]),
                    ru = t
                }
            }
        }
    } (), i.on("click", ".js-new-user-contrib-example",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(n) {
            var r, o, s, i, c;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (! (r = a.query(document, ".js-calendar-graph")).classList.contains("sample-graph")) {
                        e.next = 3;
                        break
                    }
                    return e.abrupt("return");
                case 3:
                    return r.classList.add("sample-graph"),
                    o = n.currentTarget.getAttribute("data-url"),
                    t(o, "null.js:16"),
                    s = void 0,
                    e.prev = 7,
                    e.next = 10,
                    v.fetchText(o);
                case 10:
                    s = e.sent,
                    e.next = 17;
                    break;
                case 13:
                    return e.prev = 13,
                    e.t0 = e.
                    catch(7),
                    r.classList.remove("sample-graph"),
                    e.abrupt("return");
                case 17:
                    (i = document.createElement("div")).innerHTML = s,
                    c = r.querySelector(".js-calendar-graph-svg"),
                    t(c, "null.js:33"),
                    c.replaceWith(i.children[0]);
                case 22:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[7, 13]])
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } ()), s.observe(".js-account-membership",
    function(e) {
        var t = c(e, HTMLSelectElement);
        Qn(t),
        t.addEventListener("change",
        function() {
            Qn(t)
        })
    }), i.on("submit", ".js-find-coupon-form",
    function(e) {
        var t = c(e.target, HTMLFormElement).action,
        n = c(document.getElementById("code"), HTMLInputElement);
        window.location = t + "/" + encodeURIComponent(n.value),
        e.preventDefault()
    }), i.on("click", ".js-choose-account",
    function(e) {
        var t = !0,
        n = !1,
        r = void 0;
        try {
            for (var o, s = document.querySelectorAll(".js-plan-row, .js-choose-plan")[Symbol.iterator](); ! (t = (o = s.next()).done); t = !0) {
                o.value.classList.remove("selected")
            }
        } catch(e) {
            n = !0,
            r = e
        } finally {
            try { ! t && s.
                return && s.
                return ()
            } finally {
                if (n) throw r
            }
        }
        a.query(document, ".js-plan", HTMLInputElement).value = "";
        var i = !0,
        c = !1,
        u = void 0;
        try {
            for (var l, d = document.querySelectorAll(".js-billing-section")[Symbol.iterator](); ! (i = (l = d.next()).done); i = !0) {
                l.value.classList.add("has-removed-contents")
            }
        } catch(e) {
            c = !0,
            u = e
        } finally {
            try { ! i && d.
                return && d.
                return ()
            } finally {
                if (c) throw u
            }
        }
        var m = e.currentTarget.closest(".js-account-row");
        m && er(m)
    }), i.on("click", ".js-choose-plan",
    function(e) {
        tr(a.closest(e.target, ".js-plan-row"))
    }), s.observe(".js-choose-plan-radio:checked", {
        add: function(e) {
            tr(e.closest(".js-plan-row"))
        }
    }), s.observe(".js-plan-row.selected", {
        add: function(e) {
            Zn(e)
        }
    }), s.observe(".js-choose-account.selected", {
        add: function(e) {
            Zn(e)
        }
    }), n.ready.then(function() {
        var e = document.querySelector(".js-account-row.selected");
        e && er(e);
        var t = document.querySelector(".js-plan-row.selected");
        t && tr(t)
    }), i.on("change", ".js-survey-select",
    function() {
        nr(this, this.options[this.selectedIndex].classList.contains("js-survey-option-other"))
    }), i.on("change", ".js-survey-radio",
    function() {
        nr(this, this.classList.contains("js-survey-radio-other"))
    });
    var ou = !1;I(function() {
        if (document.querySelector(".js-file-line-container")) {
            setTimeout(sr, 0);
            var e = window.location.hash,
            t = !0,
            n = !1,
            r = void 0;
            try {
                for (var a, o = document.querySelectorAll(".js-update-url-with-hash")[Symbol.iterator](); ! (t = (a = o.next()).done); t = !0) {
                    ir(a.value, e)
                }
            } catch(e) {
                n = !0,
                r = e
            } finally {
                try { ! t && o.
                    return && o.
                    return ()
                } finally {
                    if (n) throw r
                }
            }
        }
    }), i.on("click", "#js-copy-permalink, #js-copy-lines",
    function(e) {
        var t = e.target.getAttribute("data-original-text");
        t && (e.target.textContent = "Copied!", setTimeout(function() {
            e.target.textContent = t
        },
        2e3))
    }), i.on("click", ".js-line-number",
    function(e) {
        var t = ar(e.currentTarget.id);
        if (e.shiftKey) {
            var n = rr(window.location.hash);
            n.length > 0 && t.lineRange.unshift(n[0])
        } !
        function(e) {
            var t = window.scrollY;
            ou = !0,
            e(),
            window.scrollTo(0, t)
        } (function() {
            window.location.hash = function(e) {
                var t = e.lineRange,
                n = e.anchorPrefix;
                switch (t.sort(or), t.length) {
                case 1:
                    return "#" + n + "L" + t[0];
                case 2:
                    return "#" + n + "L" + t[0] + "-L" + t[1];
                default:
                    return "#"
                }
            } (t)
        })
    }), i.on("submit", ".js-jump-to-line-form",
    function(e) {
        var t = c(e.currentTarget, HTMLFormElement),
        n = a.query(t, ".js-jump-to-line-field", HTMLInputElement).value.replace(/[^\d-]/g, "").split("-").map(function(e) {
            return parseInt(e, 10)
        }).filter(function(e) {
            return e > 0
        }).sort(function(e, t) {
            return e - t
        });
        return n.length && (window.location.hash = "L" + n.join("-L")),
        i.fire(document, "facebox:close"),
        !1
    }), o.onInput(".js-csv-filter-field",
    function(e) {
        var t = c(e.target, HTMLInputElement).value;
        if (t) {
            t = t.toLowerCase();
            var n = !0,
            r = !1,
            a = void 0;
            try {
                for (var o, s = document.querySelectorAll(".js-csv-data tbody tr")[Symbol.iterator](); ! (n = (o = s.next()).done); n = !0) {
                    var i = o.value; - 1 === i.textContent.toLowerCase().indexOf(t) ? i.classList.add("d-none") : i.classList.remove("d-none")
                }
            } catch(e) {
                r = !0,
                a = e
            } finally {
                try { ! n && s.
                    return && s.
                    return ()
                } finally {
                    if (r) throw a
                }
            }
        }
    }), i.on("navigation:keyopen", ".commits-list-item",
    function(e) {
        var t = e.target.querySelector(".commit-title > a");
        t && t.click()
    }), i.on("navigation:keydown", ".commits-list-item",
    function(e) {
        t(e instanceof CustomEvent, "null.js:14");
        var n = e.target.querySelector(".commit-title > a");
        "c" === e.detail.hotkey && n && (n.click(), e.preventDefault(), e.stopPropagation())
    }), i.on("menu:activated", ".js-diffbar-commits-menu",
    function(e) {
        var t = e.target.querySelector(".in-range");
        t && A.focus(e.target, t)
    });
    var su = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, a, o, s, i, c, u, l, d, m, f, v, p, h, g;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (r = t.anchor, a = t.side, o = t.line, s = t.lastLine, i = t.hashFragment, c = t.partialHashFragment, u = H.findElementByFragmentName(document, r)) {
                        e.next = 4;
                        break
                    }
                    return e.abrupt("return");
                case 4:
                    if (l = u.nextElementSibling) {
                        e.next = 7;
                        break
                    }
                    return e.abrupt("return");
                case 7:
                    if ((d = ur(l, a, o, s)).length) {
                        e.next = 27;
                        break
                    }
                    if (! (m = H.findElementByFragmentName(document, i))) {
                        e.next = 13;
                        break
                    }
                    return kt(m),
                    e.abrupt("return");
                case 13:
                    if (f = l.querySelector(".js-diff-load-container")) {
                        e.next = 16;
                        break
                    }
                    return e.abrupt("return");
                case 16:
                    return e.prev = 16,
                    e.next = 19,
                    Mt(f);
                case 19:
                    (v = H.findElementByFragmentName(document, i)) instanceof HTMLElement && kt(v),
                    e.next = 26;
                    break;
                case 23:
                    e.prev = 23,
                    e.t0 = e.
                    catch(16),
                    kt(l);
                case 26:
                    return e.abrupt("return");
                case 27:
                    return e.next = 29,
                    function(e, t) {
                        return Promise.all(e.map(function(e) {
                            return iu(e, t)
                        }))
                    } (d, c);
                case 29:
                    p = 1,
                    h = H.findElementByFragmentName(document, i),
                    (g = ur(l, a, o, s)).length ? su(t, n) : h ? kt(h) : n < p && su(t, n + 1);
                case 33:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[16, 23]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } (), iu = function() {
        var e = Ys(regeneratorRuntime.mark(function e(n, r) {
            var o, s, i, c, u, l, d, m, f, p;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return o = void 0,
                    r ? (s = "R" === r.slice( - 1) ? "data-right-range": "data-left-range", i = n.getAttribute(s) || "", c = parseInt(i.split("-")[0], 10), o = r + c) : o = n.hash.slice(1),
                    u = n.getAttribute("data-url"),
                    t(u, "null.js:136"),
                    l = new URL(u, window.location.origin),
                    (d = new URLSearchParams(l.search.slice(1))).append("anchor", o),
                    l.search = d.toString(),
                    e.next = 10,
                    v.fetchSafeDocumentFragment(document, l);
                case 10:
                    m = e.sent,
                    f = a.closest(n, ".js-expandable-line"),
                    p = function(e, t) {
                        var n = e.nextElementSibling;
                        return n && n.matches(t) ? n: null
                    } (f, ".file-diff-line"),
                    W.preservingScrollPosition(p,
                    function() {
                        f.replaceWith(m)
                    });
                case 14:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ();I(function() {
        var e = function(e) {
            if (e) {
                var t = cr(e);
                if (t) {
                    var n = t[1],
                    r = t[2],
                    a = t[3];
                    return {
                        anchor: n,
                        side: r,
                        line: a,
                        lastLine: t[5],
                        hashFragment: n + r + a,
                        partialHashFragment: n + r
                    }
                }
            }
        } (window.location.hash);
        e && (H.findElementByFragmentName(document, e.hashFragment) && !e.lastLine || su(e, 0))
    }), i.on("click", ".js-expand",
    function(e) {
        e.preventDefault(),
        t(e.currentTarget instanceof HTMLAnchorElement, "null.js:116"),
        iu(e.currentTarget, null)
    }), i.on("click", ".js-toggle-inline-comment-form",
    function(e) {
        lr(a.closest(e.currentTarget, ".js-line-comments"))
    }), i.on("quote:selection", ".js-line-comments",
    function(e) {
        lr(e.currentTarget)
    }), o.onKey("keydown", ".js-inline-comment-form-container form .js-comment-field",
    function(e) {
        var n = e.target;
        if (t(n instanceof HTMLTextAreaElement, "null.js:36"), !n.classList.contains("js-navigation-enable") && "Escape" === e.key && 0 === n.value.length) {
            dr(a.closest(n, "form", HTMLFormElement)),
            e.preventDefault()
        }
    }), i.on("click", ".js-hide-inline-comment-form",
    function(e) {
        dr(a.closest(e.currentTarget, "form", HTMLFormElement))
    }), i.on("click", ".js-add-single-line-comment",
    function(e) {
        var n = e.currentTarget;
        t(n instanceof Element, "null.js:17");
        fr(a.closest(n, ".file"));
        var r = function(e) {
            return mr(a.closest(e, "tr"), ".js-inline-comments-container")
        } (n) ||
        function(e) {
            var t = a.closest(e, "tr"),
            n = pr("#js-inline-comments-single-container-template"),
            r = n.querySelector(".js-inline-comment-form");
            return r instanceof HTMLFormElement && hr(r, {
                path: e.getAttribute("data-path"),
                anchor: e.getAttribute("data-anchor"),
                position: e.getAttribute("data-position"),
                line: e.getAttribute("data-line"),
                side: e.getAttribute("data-side")
            }),
            t.after(n),
            n
        } (n);
        lr(Array.from(r.querySelectorAll(".js-line-comments")).pop())
    }), i.on("click", ".js-add-split-line-comment",
    function(e) {
        var t = e.currentTarget;
        fr(a.closest(t, ".file"));
        var n = a.closest(t, "tr"),
        r = "addition" === t.getAttribute("data-type") ? "js-addition": "js-deletion",
        o = function(e, t, n) {
            var r = e.querySelector(".js-line-comments." + t);
            if (r) return r;
            var a = pr("#js-inline-comments-split-form-container-template");
            a.classList.add(t);
            var o = a.querySelector(".js-inline-comment-form");
            o instanceof HTMLFormElement && hr(o, n);
            var s = e.querySelectorAll("." + t);
            s[s.length - 1].after(a);
            var i = !0,
            c = !1,
            u = void 0;
            try {
                for (var l, d = s[Symbol.iterator](); ! (i = (l = d.next()).done); i = !0) l.value.remove()
            } catch(e) {
                c = !0,
                u = e
            } finally {
                try { ! i && d.
                    return && d.
                    return ()
                } finally {
                    if (c) throw u
                }
            }
            return a
        } (function(e) {
            var t = mr(e, ".js-inline-comments-container");
            return t || (t = pr("#js-inline-comments-split-container-template"), e.after(t), t)
        } (n), r, {
            type: t.getAttribute("data-type"),
            anchor: t.getAttribute("data-anchor"),
            path: t.getAttribute("data-path"),
            position: t.getAttribute("data-position"),
            line: t.getAttribute("data-line"),
            side: t.getAttribute("data-side")
        });
        lr(Array.from(o.querySelectorAll(".js-line-comments")).pop())
    }), l.remoteForm(".js-inline-comment-form",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(n, r) {
            var o, s, i, c, u, l;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return o = void 0,
                    e.prev = 1,
                    e.next = 4,
                    r.json();
                case 4:
                    o = e.sent,
                    e.next = 16;
                    break;
                case 7:
                    if (e.prev = 7, e.t0 = e.
                    catch(1), !e.t0.response) {
                        e.next = 15;
                        break
                    }
                    s = void 0;
                    try {
                        s = e.t0.response.json
                    } catch(e) {}
                    if (!s) {
                        e.next = 15;
                        break
                    }
                    return function(e, t) {
                        var n = a.query(e, ".js-comment-form-error"),
                        r = void 0;
                        r = t.errors ? Array.isArray(t.errors) ? t.errors.join(", ") : t.errors: "There was an error posting your comment.",
                        n.textContent = r,
                        n.style.display = "block",
                        n.classList.remove("d-none")
                    } (n, s),
                    e.abrupt("return");
                case 15:
                    throw e.t0;
                case 16:
                    i = o.json,
                    c = i.inline_comment,
                    u = n.closest(".js-line-comments"),
                    c && (t(u, "null.js:109"), a.query(u, ".js-comments-holder").append(M.parseHTML(document, c))),
                    (l = i.inline_comment_thread) && (t(u, "null.js:116"), u.replaceWith(M.parseHTML(document, l))),
                    dr(n);
                case 23:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[1, 7]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), document.addEventListener("session:resume",
    function(e) {
        t(e instanceof CustomEvent, "null.js:173"),
        function(e) {
            var t = e.match(/^new_inline_comment_(?:discussion|diff)_(?:[\w-]+)_(\d+)_(\d+)$/) || [],
            n = ni(t, 2),
            r = n[0],
            a = n[1];
            if (r) {
                var o = document.querySelector(".js-inline-comment-form input[name='in_reply_to'][value='" + a + "']");
                if (o) {
                    var s = o.closest(".js-line-comments");
                    s && lr(s)
                }
            }
        } (e.detail.targetId),
        function(e) {
            var t = e.match(/^new_inline_comment_diff_(?:[\w-]+)_(\d+)$/) || [],
            n = ni(t, 2),
            r = n[0],
            a = n[1];
            if (r) {
                var o = document.querySelector(".js-add-line-comment[data-anchor='" + r + "'][data-position='" + a + "']");
                o && o.click()
            }
        } (e.detail.targetId)
    }), s.observe(".js-comment", {
        remove: vr
    }), document.addEventListener("inlinecomment:collapse",
    function() {
        vr()
    }), s.observe(".diff-table",
    function(e) {
        function t() {
            r && yr(r, !1),
            r = null
        }
        function n(e) {
            r && yr(r, !1),
            (r = e.target.closest("td.blob-code")) && yr(r, !0)
        }
        var r = null;
        return {
            add: function() {
                e.addEventListener("mouseenter", t),
                e.addEventListener("mouseleave", t),
                e.addEventListener("mouseover", n)
            },
            remove: function() {
                e.removeEventListener("mouseenter", t),
                e.removeEventListener("mouseleave", t),
                e.removeEventListener("mouseover", n)
            }
        }
    }), i.on("click", ".js-linkable-line-number",
    function(e) {
        window.location.hash = this.id,
        e.preventDefault()
    });
    var cu = null;I(jr), s.observe(".blob-expanded", jr), s.observe(".js-diff-progressive-loader",
    function(e) {
        e.addEventListener("load", jr)
    }), s.observe(".js-diff-entry-loader",
    function(e) {
        e.addEventListener("load", jr)
    }), i.on("click", ".js-rich-diff.collapsed .js-expandable",
    function(e) {
        e.preventDefault();
        var n = e.target.closest(".js-rich-diff");
        t(n, "null.js:9"),
        n.classList.remove("collapsed")
    }), i.on("click", ".js-show-rich-diff",
    function(e) {
        var n = e.currentTarget.closest(".js-warn-no-visible-changes");
        if (n) {
            n.classList.add("d-none");
            var r = n.parentElement;
            t(r, "null.js:20");
            var a = r.querySelector(".js-no-rich-changes");
            a && a.classList.remove("d-none")
        }
    }), s.observe("meta[name=diff-view]", {
        add: Lr,
        remove: Lr
    }), s.observe(".file-diff-split", {
        add: Lr,
        remove: Lr
    }), s.observe(".js-compare-tab.selected", {
        add: Lr,
        remove: Lr
    }), s.observe(".wants-full-width-container", {
        add: Lr,
        remove: Lr
    }), s.observe(".CommunityTemplate-header", {
        add: Lr,
        remove: Lr
    }), i.on("change", ".js-toggle-file-notes",
    function() {
        this.closest(".file").classList.toggle("show-inline-notes", this.checked)
    }), i.on("click", ".js-toggle-all-file-notes",
    function(e) {
        var t = a.querySelectorAll(document, ".js-toggle-file-notes", HTMLInputElement),
        n = t.some(function(e) {
            return e.checked
        }),
        r = !0,
        o = !1,
        s = void 0;
        try {
            for (var i, c = t[Symbol.iterator](); ! (r = (i = c.next()).done); r = !0) {
                var u = i.value;
                d.changeValue(u, !n)
            }
        } catch(e) {
            o = !0,
            s = e
        } finally {
            try { ! r && c.
                return && c.
                return ()
            } finally {
                if (o) throw s
            }
        }
        e.preventDefault()
    }), s.observe(".js-inline-comments-container",
    function(e) {
        var t = void 0,
        n = e.closest(".file");
        if (n) {
            return {
                add: t = function() {
                    var e = null != n.querySelector(".js-inline-comments-container");
                    n.classList.toggle("has-inline-notes", e)
                },
                remove: t
            }
        }
    }), s.observe("td.js-line-comments.is-collapsed", {
        add: function(e) {
            wr(e)
        },
        remove: function(e) {
            wr(e)
        }
    }), q(document).on("focusin", ".js-url-field",
    function() {
        var e = this;
        return setTimeout(function() {
            return q(e).select()
        },
        0)
    }), document.querySelector(".js-account-membership-form") && (q(document).one("change.early-access-tracking", ".js-account-membership-form",
    function() {
        R.trackEvent({
            category: "Large File Storage",
            action: "attempt",
            label: "location: early access form"
        })
    }), q(document).on("submit.early-access-tracking", ".js-account-membership-form",
    function() {
        R.trackEvent({
            category: "Large File Storage",
            action: "submit",
            label: "location: early access form"
        })
    })), i.on("autocheck:send", ".js-edit-repo-container .js-repo-name",
    function(e) {
        var n = c(e.currentTarget, HTMLInputElement);
        t(n.form, "null.js:11"),
        a.query(n.form, ".js-rename-repository-button", HTMLButtonElement).disabled = !0
    }), i.on("autocheck:error", ".js-edit-repo-container .js-repo-name",
    function(e) {
        var n = c(e.currentTarget, HTMLInputElement);
        t(n.form, "null.js:17"),
        a.query(n.form, ".js-rename-repository-button", HTMLButtonElement).disabled = !0
    }), i.on("autocheck:success", ".js-edit-repo-container .js-repo-name",
    function(e) {
        var n = c(e.currentTarget, HTMLInputElement);
        t(n.form, "null.js:23"),
        a.query(n.form, ".js-rename-repository-button", HTMLButtonElement).disabled = !1
    }), i.on("click", ".js-repo-team-suggestions-view-all",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(n) {
            var r, o, s, i, c, u, l, d, m, f;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return r = a.closest(n.currentTarget, "ul"),
                    o = n.currentTarget.getAttribute("data-url"),
                    t(o, "null.js:30"),
                    s = a.querySelectorAll(document, ".js-repo-toggle-team:checked", HTMLInputElement).map(function(e) {
                        return e.value
                    }),
                    e.next = 6,
                    v.fetchSafeDocumentFragment(document, o);
                case 6:
                    for (i = e.sent, r.innerHTML = "", r.append(i), c = !0, u = !1, l = void 0, e.prev = 12, d = s[Symbol.iterator](); ! (c = (m = d.next()).done); c = !0) f = m.value,
                    a.query(r, '.js-repo-toggle-team[value="' + f + '"]', HTMLInputElement).checked = !0;
                    e.next = 20;
                    break;
                case 16:
                    e.prev = 16,
                    e.t0 = e.
                    catch(12),
                    u = !0,
                    l = e.t0;
                case 20:
                    e.prev = 20,
                    e.prev = 21,
                    !c && d.
                    return && d.
                    return ();
                case 23:
                    if (e.prev = 23, !u) {
                        e.next = 26;
                        break
                    }
                    throw l;
                case 26:
                    return e.finish(23);
                case 27:
                    return e.finish(20);
                case 28:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[12, 16, 20, 28], [21, , 23, 27]])
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } ()), s.observe(".js-add-new-collab", Sr), i.on("autocomplete:autocompleted:changed", ".js-add-repo-access-field",
    function() {
        q(this).data("autocompleted") ? this.form.querySelector(".js-add-new-collab").disabled = !1 : Sr()
    }), i.on("selectmenu:selected", ".js-repo-access-team-select",
    function() {
        var e = this.querySelector(".js-repo-access-team-select-option.selected").getAttribute("data-team-id"),
        t = this.closest(".js-repo-access-group").querySelector(".js-add-repo-access-field");
        t.value = e,
        d.submit(t.form)
    }), q(document).on("ajaxSend", ".js-add-repo-access-form",
    function() {
        kr()
    }), q(document).on("ajaxSuccess", ".js-add-repo-access-form",
    function(e, t, n, r) {
        var o = void 0,
        s = this.closest(".js-repo-access-group"),
        i = this.querySelector(".js-add-repo-access-field");
        o = "teams" === s.id || "project-collaborators" === s.id ? s.querySelector(".js-repo-access-list") : s.querySelector(".js-repo-access-list-invites");
        var c = i.value;
        if (i.value = "", r.error) return xr(r.error, s);
        if (Sr(), o.insertAdjacentHTML("beforeend", r.html), Er(s), r.seats || 0 === r.seats) {
            var u = 1 === r.seats ? "seat": "seats",
            l = document.getElementById("available-seats");
            l && (l.innerHTML = r.seats + " " + u)
        }
        return "teams" === s.id ?
        function(e) {
            var t = void 0,
            n = void 0,
            r = document.querySelector(".js-repo-access-team-select");
            if (r) {
                var o = 0,
                s = r.querySelectorAll(".js-repo-access-team-select-option");
                for (t = 0, n = s.length; t < n; t++) {
                    var i = s[t],
                    c = i.classList;
                    e === i.getAttribute("data-team-id") && (c.add("has-access"), c.remove("selected")),
                    c.contains("has-access") || o++
                }
                if (0 === o) return a.closest(r, ".js-repo-access-group").classList.add("no-form")
            }
        } (c) : void 0
    }), q(document).on("ajaxSuccess", ".js-remove-repo-access-form",
    function() {
        kr();
        var e = this.closest(".js-repo-access-entry"),
        t = this.closest(".js-repo-access-group");
        return "teams" === t.id &&
        function(e) {
            var t = document.querySelector(".js-repo-access-team-select");
            if (t) {
                var n = t.querySelector("[data-team-id='" + e + "']");
                n && n.classList.remove("has-access"),
                a.closest(t, ".js-repo-access-group").classList.remove("no-form")
            }
        } (e.getAttribute("data-team-id")),
        e.remove(),
        Er(t)
    }), q(document).on("ajaxError", ".js-remove-repo-access-form",
    function() {
        return xr(this.getAttribute("data-error-message"), this.closest(".js-repo-access-group")),
        !1
    }), i.on("change", ".js-repo-data-opt-in",
    function() {
        var e = this.closest(".js-repo-data-services"),
        t = this.checked,
        n = !0,
        r = !1,
        a = void 0;
        try {
            for (var o, s = e.querySelectorAll(".js-repo-data-options")[Symbol.iterator](); ! (n = (o = s.next()).done); n = !0) {
                o.value.classList.toggle("active", t)
            }
        } catch(e) {
            r = !0,
            a = e
        } finally {
            try { ! n && s.
                return && s.
                return ()
            } finally {
                if (r) throw a
            }
        }
        var i = !0,
        c = !1,
        u = void 0;
        try {
            for (var l, d = e.querySelectorAll(".js-repo-data-option")[Symbol.iterator](); ! (i = (l = d.next()).done); i = !0) {
                var m = l.value;
                t ? m.removeAttribute("disabled") : (m.setAttribute("disabled", "disabled"), m.removeAttribute("checked"))
            }
        } catch(e) {
            c = !0,
            u = e
        } finally {
            try { ! i && d.
                return && d.
                return ()
            } finally {
                if (c) throw u
            }
        }
    }), i.on("change", ".js-default-branch",
    function() {
        var e = a.query(document, ".js-default-branch-confirmation", HTMLInputElement);
        a.query(document, ".js-change-default-branch-button", HTMLButtonElement).disabled = this.value === e.getAttribute("data-original-value"),
        e.value = this.value
    }), i.on("change", ".js-repo-features-form input[type=checkbox]",
    function() {
        var e = this.closest(".js-repo-option").querySelector(".js-status-indicator");
        e.classList.remove("status-indicator-success", "status-indicator-failed"),
        e.classList.add("status-indicator-loading")
    }), q(document).on("ajaxSuccess", ".js-repo-features-form",
    function(e, t, n, r) {
        Array.from(this.querySelectorAll(".status-indicator-loading")).forEach(function(e) {
            e.classList.remove("status-indicator-loading"),
            e.classList.add("status-indicator-success")
        }),
        /^\s*</.test(r) && q(document.querySelector(".js-repo-nav")).replaceWith(r)
    }), q(document).on("ajaxError", ".js-repo-features-form",
    function() {
        Array.from(this.querySelectorAll(".status-indicator-loading")).forEach(function(e) {
            e.classList.remove("status-indicator-loading"),
            e.classList.add("status-indicator-failed");
            var t = e.closest(".js-repo-option").querySelector("input[type=checkbox]");
            t.checked = !t.checked
        })
    }), i.on("change", ".js-merge-features-form input[type=checkbox]",
    function() {
        Array.from(this.form.querySelectorAll(".errored")).forEach(function(e) {
            return e.classList.remove("errored")
        });
        var e = this.closest(".js-repo-option").querySelector(".js-status-indicator");
        e.classList.remove("status-indicator-success", "status-indicator-failed"),
        e.classList.add("status-indicator-loading")
    }), q(document).on("ajaxSuccess", ".js-merge-features-form",
    function() {
        Array.from(this.querySelectorAll(".errored")).forEach(function(e) {
            return e.classList.remove("errored")
        }),
        Array.from(this.querySelectorAll(".js-select-one-warning")).forEach(function(e) {
            e.classList.add("d-none")
        }),
        Array.from(this.querySelectorAll(".status-indicator-loading")).forEach(function(e) {
            e.classList.remove("status-indicator-loading"),
            e.classList.add("status-indicator-success")
        })
    }), q(document).on("ajaxError", ".js-merge-features-form",
    function(e) {
        Array.from(this.querySelectorAll(".js-select-one-warning")).forEach(function(e) {
            e.classList.remove("d-none")
        }),
        Array.from(this.querySelectorAll(".status-indicator-loading")).forEach(function(e) {
            e.classList.remove("status-indicator-loading"),
            e.classList.add("status-indicator-failed");
            var t = e.closest(".js-repo-option");
            t.classList.add("errored");
            var n = t.querySelector("input[type=checkbox]");
            n.checked = !n.checked
        }),
        Array.from(this.querySelectorAll(".status-indicator-success")).forEach(function(e) {
            e.classList.remove("status-indicator-success")
        }),
        e.preventDefault()
    }), i.on("change", ".js-protect-branch",
    function() {
        var e = this.closest(".js-protected-branch-settings"),
        t = this.checked;
        Array.from(e.querySelectorAll(".js-protected-branch-options")).forEach(function(e) {
            e.classList.toggle("active", t)
        }),
        Array.from(e.querySelectorAll(".js-protected-branch-option")).forEach(function(e) {
            t ? e.removeAttribute("disabled") : e.setAttribute("disabled", "disabled")
        })
    }), i.on("change", ".js-required-status-toggle",
    function() {
        this.closest(".js-protected-branch-settings").querySelector(".js-required-statuses").classList.toggle("d-none", !this.checked)
    }), i.on("change", ".js-required-status-checkbox",
    function() {
        this.closest(".js-protected-branches-item").querySelector(".js-required-status-badge").classList.toggle("d-none", !this.checked)
    }), i.on("change", ".js-authorized-branch-pushers-toggle, .js-authorized-review-dismisser-toggle",
    function() {
        var e = this.closest(".js-protected-branch-options").querySelector(".js-authorized-pushers");
        e.classList.toggle("d-none", !this.checked),
        e.querySelector(".js-autocomplete-field").focus()
    }), i.on("change", ".js-protected-branch-include-admin-toggle",
    function() {
        var e = this.closest(".js-protected-branch-options").querySelectorAll(".js-protected-branch-admin-permission");
        Array.from(e).forEach(function(e) {
            e.classList.toggle("d-none"),
            e.classList.toggle("active", !e.classList.contains("d-none"))
        })
    }), i.on("autocomplete:result", ".js-add-protected-branch-user-or-team",
    function(e) {
        t(e instanceof CustomEvent, "null.js:178");
        var n = e.detail.text,
        r = this.closest(".js-protected-branch-options"),
        a = this.closest(".js-autocomplete-container"),
        o = new URL(a.getAttribute("data-url"), window.location.origin),
        s = new URLSearchParams(o.search.slice(1));
        s.append("item", n),
        o.search = s.toString();
        var i = r.querySelector(".js-authorized-users-and-teams"),
        c = i.querySelector("div[data-user-or-team-name='" + n + "']");
        c ? (a.querySelector(".js-autocomplete-field").value = "", c.querySelector(".js-protected-branch-pusher").classList.add("user-already-added")) : v.fetchText(o).then(function(e) {
            a.querySelector(".js-autocomplete-field").value = "",
            i.insertAdjacentHTML("beforeend", e),
            Tr(r)
        })
    }), i.on("click", ".js-remove-authorized-user-or-team",
    function() {
        var e = this.closest(".js-protected-branch-options");
        this.closest(".js-authorized-user-or-team").remove(),
        Tr(e)
    }), s.observe("#pages-cname-field",
    function(e) {
        m.addThrottledInputEventListener(e,
        function() {
            a.query(document, ".js-pages-cname-save-btn", HTMLButtonElement).disabled = e.value === e.defaultValue
        })
    }), i.on("selectmenu:selected", ".js-pages-source",
    function() {
        var e = a.query(document, ".js-pages-source-btn-text"),
        n = e.getAttribute("data-original-text") === e.textContent;
        a.query(document, ".js-pages-source-save-btn", HTMLButtonElement).disabled = n;
        var r = document.querySelector(".js-pages-theme-source-value");
        if (r && r instanceof HTMLInputElement) {
            var o = this.querySelector(".selected input").value,
            s = a.query(document, ".js-pages-theme-source-note"),
            i = a.query(document, ".js-pages-theme-source-note-value");
            if ("none" === o) {
                var c = r.getAttribute("data-original-value"),
                u = i.getAttribute("data-original-text");
                t(null != c && null != u, "Missing attributes [`data-original-value`, `data-original-text`] -- null.js:237"),
                r.value = c,
                i.textContent = u,
                s.classList.remove("hide-note")
            } else r.value = o,
            i.textContent = e.textContent,
            n ? s.classList.add("hide-note") : s.classList.remove("hide-note")
        }
    }), s.observe(".js-enable-btn",
    function(e) {
        e.disabled = !1,
        e.classList.remove("tooltipped"),
        e.removeAttribute("aria-label")
    }), i.on("click", ".js-edit-repository-settings-select",
    function() {
        var e = qr(this);
        d.submit(e)
    }), i.on("click", ".js-edit-repository-settings-select-with-confirm",
    function() {
        var e = qr(this);
        e.closest(".js-permission-options").setAttribute("data-current-form", e.getAttribute("class")),
        document.addEventListener("facebox:afterClose", Ar)
    });
    var uu = ["is-render-pending", "is-render-ready", "is-render-loading", "is-render-loaded"].reduce(function(e, t) {
        return e + " " + t
    }), lu = new WeakMap;s.observe(".js-render-target", Ir), q(window).on("message",
    function(e) {
        var t = void 0,
        n = null != (t = e.originalEvent) ? t: e,
        r = n.data,
        a = n.origin;
        if (r && a) {
            var o = function() {
                try {
                    return JSON.parse(r)
                } catch(t) {
                    return e = t,
                    r
                }
            } (),
            s = o.type,
            i = o.identity,
            c = o.body,
            u = o.payload,
            l = function(e) {
                return q(".js-render-target").filter(function(t, n) {
                    return ! e || n.getAttribute("data-identity") === e
                })
            } (i);
            if (s && c && 1 === l.length && a === l.attr("data-host") && "render" === s) return function(e, t, n, r, a) {
                var o = void 0,
                s = void 0,
                i = void 0,
                c = void 0;
                switch (r) {
                case "hello":
                    if ((lu.get(e[0]) || {
                        untimed: !0
                    }).hello = Date.now(), i = {
                        type: "render:cmd",
                        body: {
                            cmd: "ack",
                            ack: !0
                        }
                    },
                    o = {
                        type: "render:cmd",
                        body: {
                            cmd: "branding",
                            branding: !1
                        }
                    },
                    (c = null != (s = e.find("iframe").get(0)) ? s.contentWindow: void 0) && "function" == typeof c.postMessage && c.postMessage(JSON.stringify(i), "*"), c && "function" == typeof c.postMessage && c.postMessage(JSON.stringify(o), "*"), e.hasClass("is-local")) {
                        var u = V.getCodeEditor(e.parents(".js-code-editor")[0]);
                        return null == u ? null: (o = {
                            type: "render:data",
                            body: u.code()
                        },
                        c && "function" == typeof c.postMessage ? c.postMessage(JSON.stringify(o), "*") : null)
                    }
                    break;
                case "error":
                    return Hr(e);
                case "error:fatal":
                    return Hr(e),
                    e.addClass("is-render-failed-fatal");
                case "error:invalid":
                    return Hr(e),
                    e.addClass("is-render-failed-invalid");
                case "loading":
                    return e.removeClass(uu),
                    e.addClass("is-render-loading");
                case "loaded":
                    return e.removeClass(uu),
                    e.addClass("is-render-loaded");
                case "ready":
                    if (e.removeClass(uu), e.addClass("is-render-ready"), null != a && null != a.height) return e.height(a.height);
                    break;
                case "resize":
                    return null != a && null != a.height && e.hasClass("is-render-ready") ? e.height(a.height) : console.error("Resize event sent without height or before ready");
                default:
                    return console.error("Unknown message [" + t + "]=>'" + r + "'")
                }
            } (l, s, 0, c, u)
        }
    }), s.observe(".js-subscription-toggle",
    function() {
        Rr()
    }), i.on("change", ".js-newsletter-frequency-radio",
    function() {
        Rr()
    }), l.remoteForm(".js-subscription-toggle",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.text();
                case 2:
                    (r = a.query(t, ".selected .notice")).classList.add("visible"),
                    setTimeout(function() {
                        r.classList.remove("visible")
                    },
                    2e3);
                case 5:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), l.remoteForm(".js-explore-newsletter-form",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.html();
                case 2:
                    r = e.sent,
                    (o = a.closest(t, ".js-explore-newsletter-container")).replaceWith(r.html);
                case 5:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), i.on("navigation:open", ".js-create-branch",
    function(e) {
        return t(e.currentTarget instanceof HTMLFormElement, "null.js:8"),
        d.submit(e.currentTarget),
        !1
    }), i.on("click", ".js-toggle-lang-stats",
    function(e) {
        var t = document.querySelector(".js-stats-switcher-viewport");
        if (null != t) {
            var n = 0 !== t.scrollTop ? "is-revealing-overview": "is-revealing-lang-stats";
            t.classList.toggle(n),
            e.preventDefault()
        }
    });
    var du = function() {
        function e(t) {
            Qs(this, e);
            var n = q(t);
            this.name = n.attr("data-theme-name"),
            this.slug = n.attr("data-theme-slug"),
            this.gem = n.attr("data-theme-gem"),
            this.selected = n.hasClass("selected"),
            this.baseHref = n.attr("href")
        }
        return Zs(e, [{
            key: "wrappedKey",
            value: function(e, t) {
                return null == t && (t = null),
                t ? t + "[" + e + "]": e
            }
        },
        {
            key: "params",
            value: function(e) {
                null == e && (e = null);
                var t = {};
                return t[this.wrappedKey("theme_slug", e)] = this.slug,
                t
            }
        },
        {
            key: "previewSrc",
            value: function() {
                return [this.baseHref, q.param(this.params())].join("&")
            }
        }]),
        e
    } (), mu = function() {
        function e() {
            var t = this;
            Qs(this, e),
            this.$pagePreview = q("#page-preview"),
            this.$contextLoader = q(".theme-picker-spinner"),
            this.$fullPicker = q(".theme-picker-thumbs"),
            this.$miniPicker = q(".theme-picker-controls"),
            this.$scrollBackwardsLinks = q(".theme-toggle-full-left"),
            this.$scrollForwardsLinks = q(".theme-toggle-full-right"),
            this.$prevLinks = q(".theme-picker-prev"),
            this.$nextLinks = q(".theme-picker-next"),
            this.themeLinksContainer = this.$fullPicker.find(".js-theme-selector"),
            this.themeLinks = this.themeLinksContainer.find(".theme-selector-thumbnail"),
            this.themes = [],
            this.themeLinks.each(function(e, n) {
                var r = new du(n);
                r.selected && (t.selectedTheme = r),
                t.themes.push(r)
            }),
            this.scrolledPage = 0,
            this.selectedTheme = this.selectedTheme || this.themes[0],
            this.$pagePreview.on("load",
            function() {
                return t.onPagePreviewLoad()
            }),
            this.$scrollBackwardsLinks.click(function() {
                return t.scrollThemeLinksContainer( - 1)
            }),
            this.$scrollForwardsLinks.click(function() {
                return t.scrollThemeLinksContainer(1)
            }),
            this.$prevLinks.click(function() {
                return t.onThemeNavPrevClick()
            }),
            this.$nextLinks.click(function() {
                return t.onThemeNavNextClick()
            }),
            this.themeLinks.click(function(e) {
                return t.onThemeLinkClick(e)
            }),
            q(".theme-picker-view-toggle").click(function(e) {
                return t.onHideClick(e)
            }),
            q("#page-edit").click(this.onEditClick),
            q("#page-publish").click(function() {
                return t.onPublishClick()
            }),
            this.theme(this.selectedTheme),
            this.updateScrollLinks()
        }
        return Zs(e, [{
            key: "onPagePreviewLoad",
            value: function() {
                this.$contextLoader.removeClass("visible")
            }
        },
        {
            key: "onThemeNavPrevClick",
            value: function() {
                return this.theme(this.prevTheme())
            }
        },
        {
            key: "onThemeNavNextClick",
            value: function() {
                return this.theme(this.nextTheme())
            }
        },
        {
            key: "onThemeLinkClick",
            value: function(e) {
                return this.theme(this.themeForLink(e.currentTarget)),
                !1
            }
        },
        {
            key: "onHideClick",
            value: function(e) {
                this.$fullPicker.toggle(),
                this.$miniPicker.toggle(),
                this.scrollToTheme(this.theme(), !1);
                return q(e.currentTarget).toggleClass("open")
            }
        },
        {
            key: "onEditClick",
            value: function() {
                return d.submit(c(document.getElementById("page-edit-form"), HTMLFormElement)),
                !1
            }
        },
        {
            key: "onPublishClick",
            value: function() {
                var e = q("#page-publish-form"),
                t = this.theme();
                return t && e.find('input[name="page[theme_slug]"]').val(t.slug),
                d.submit(c(document.getElementById("page-publish-form"), HTMLFormElement)),
                !1
            }
        },
        {
            key: "scrollThemeLinksContainer",
            value: function(e) {
                this.scrollToTheme(this.themes[e < 0 ? 0 : 6]),
                this.updateScrollLinks()
            }
        },
        {
            key: "updateScrollLinks",
            value: function() {
                var e = 0 === this.scrolledPage,
                t = this.$scrollBackwardsLinks[0],
                n = this.$scrollForwardsLinks[0];
                t.disabled = e,
                t.classList.toggle("disabled", e),
                n.disabled = !e,
                n.classList.toggle("disabled", !e)
            }
        },
        {
            key: "selectedThemeIndex",
            value: function() {
                return this.themes.indexOf(this.selectedTheme)
            }
        },
        {
            key: "prevTheme",
            value: function() {
                var e = (this.selectedThemeIndex() - 1) % this.themes.length;
                return e < 0 && (e += this.themes.length),
                this.themes[e]
            }
        },
        {
            key: "nextTheme",
            value: function() {
                return this.themes[(this.selectedThemeIndex() + 1) % this.themes.length]
            }
        },
        {
            key: "themeForLink",
            value: function(e) {
                return this.themes[this.themeLinks.index(q(e))]
            }
        },
        {
            key: "linkForTheme",
            value: function(e) {
                return q(this.themeLinks[this.themes.indexOf(e)])
            }
        },
        {
            key: "scrollToTheme",
            value: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                this.scrolledPage = Math.floor(this.themes.indexOf(e) / 6);
                var n = 0;
                if (this.scrolledPage > 0) {
                    var r = this.linkForTheme(this.themes[6 * this.scrolledPage])[0];
                    n = r.offsetLeft
                }
                var a = this.themeLinksContainer[0],
                o = n - a.scrollLeft;
                if (t && 0 !== o) { !
                    function(e) {
                        new Promise(function(t) {
                            function n() {
                                window.requestAnimationFrame(function(a) { ! 1 !== e(a - r) ? (r = a, n()) : t()
                                })
                            }
                            var r = performance.now();
                            n()
                        })
                    } (function(e) {
                        if (! (e < 0)) {
                            var t = a.scrollLeft;
                            a.scrollLeft = Math[n - t > 0 ? "min": "max"](t + o * (e / 150), n);
                            return t !== a.scrollLeft && void 0
                        }
                    })
                } else a.scrollLeft = n
            }
        },
        {
            key: "theme",
            value: function(e) {
                return null == e && (e = null),
                e ? (this.selectedTheme = e, this.showPreviewFor(e), this.themeLinks.removeClass("selected"), this.linkForTheme(e).addClass("selected"), this.scrollToTheme(e), this.$miniPicker.find(".js-theme-name").text(e.name), !1) : this.selectedTheme
            }
        },
        {
            key: "showPreviewFor",
            value: function(e) {
                if (this.$contextLoader.addClass("visible"), e.gem) this.$pagePreview.attr("src", e.baseHref);
                else {
                    var t = this.$fullPicker.find("form");
                    t.find('input[name="theme_slug"]').val(e.slug),
                    d.submit(t[0])
                }
            }
        }]),
        e
    } ();n.ready.then(function() {
        document.getElementById("theme-picker-wrap") && new mu
    }), s.observe(".js-gist-dropzone", {
        add: function() {
            var e = document.body;
            t(e, "null.js:59"),
            e.addEventListener("dragenter", _r),
            e.addEventListener("dragleave", Fr),
            e.addEventListener("dragover", _r),
            e.addEventListener("drop", Pr)
        },
        remove: function() {
            var e = document.body;
            t(e, "null.js:67"),
            e.removeEventListener("dragenter", _r),
            e.removeEventListener("dragleave", Fr),
            e.removeEventListener("dragover", _r),
            e.removeEventListener("drop", Pr)
        }
    }), i.on("change", ".js-code-textarea",
    function() {
        Br()
    }), o.onFocus(".js-gist-filename",
    function(e) {
        Or(e.closest(".js-code-editor")).then(function() {
            m.addThrottledInputEventListener(e, Ur)
        }),
        e.addEventListener("blur",
        function() {
            return m.removeThrottledInputEventListener(e, Ur)
        },
        {
            once: !0
        })
    }), i.on("click", ".js-add-gist-file",
    function(e) {
        e.preventDefault();
        Nr(this.closest(".js-blob-form")).scrollIntoView()
    }), q(document).on("gist:filedrop", ".js-blob-form",
    function(e) {
        var t = e.originalEvent.detail,
        n = t.file,
        r = t.text,
        a = function(e) {
            var t = void 0,
            n = void 0,
            r = e.querySelectorAll(".js-gist-file");
            for (t = 0, n = r.length; t < n; t++) {
                var a = r[t],
                o = a.querySelector(".js-gist-filename"),
                s = a.querySelector(".js-blob-contents");
                if (!o.value && !s.value) return a
            }
            return Nr(e)
        } (this),
        o = a.querySelector(".js-gist-filename");
        return o.value = n.name,
        Ur(o),
        Or(o).then(function(e) {
            return e.setCode(r)
        }),
        a.scrollIntoView()
    }), i.on("click", ".js-remove-gist-file",
    function(e) {
        e.preventDefault();
        var t = void 0,
        n = void 0,
        r = this.closest(".js-gist-file"),
        a = r.querySelectorAll(".js-gist-deleted input");
        for (t = 0, n = a.length; t < n; t++) {
            a[t].disabled = !1
        }
        r.querySelector(".js-code-editor").remove()
    }), n.ready.then(function() {
        Br()
    }), s.observe(".js-remove-gist-file",
    function(e) {
        var t = e.closest(".js-gist-files");
        return {
            add: function() {
                return zr(t)
            },
            remove: function() {
                return zr(t)
            }
        }
    }), q(document).on("ajaxComplete", ".js-gist-file-update-container .js-comment-update",
    function(e, t) {
        if (200 === t.status) {
            var n = JSON.parse(t.responseText);
            if (this.action = n.url, n.authenticity_token) {
                this.querySelector("input[name=authenticity_token]").value = n.authenticity_token
            }
        }
    }), i.on("click", ".js-skip-to-content",
    function(e) {
        var t = document.getElementById("start-of-content");
        if (t) {
            var n = t.nextElementSibling;
            n instanceof HTMLElement && (n.setAttribute("tabindex", "-1"), n.focus())
        }
        e.preventDefault()
    });
    var fu = new WeakMap;s.observe(".js-hook-url-field",
    function(e) {
        function t() {
            var t = void 0;
            try {
                t = new URL(e.value)
            } catch(e) {}
            e.form.classList.toggle("is-invalid-url", !("" === e.value || t && /^https?:/.test(t.protocol))),
            e.form.classList.toggle("is-ssl", !(!t || "https:" !== t.protocol))
        }
        m.addThrottledInputEventListener(e, t),
        t()
    }), i.on("click", ".js-hook-toggle-ssl-verification",
    function(e) {
        e.preventDefault();
        var t = a.query(document, ".js-ssl-hook-fields"),
        n = a.query(document, ".js-hook-ssl-verification-field", HTMLInputElement);
        t.classList.toggle("is-not-verifying-ssl"),
        t.classList.contains("is-not-verifying-ssl") ? (n.value = "1", i.fire(document, "facebox:close")) : n.value = "0"
    }), i.on("change", ".js-hook-event-choice",
    function(e) {
        var t = c(e.currentTarget, HTMLInputElement),
        n = t.checked && "custom" === t.value,
        r = t.closest(".js-hook-events-field");
        if (r && r.classList.toggle("is-custom", n), t.checked) if (n) {
            a.query(document, ".js-hook-wildcard-event", HTMLInputElement).checked = !1
        } else "push" === t.value ? Wr('[value="push"]') : "all" === t.value && Wr(".js-hook-wildcard-event")
    }), i.on("details:toggled", ".js-hook-secret",
    function(e) {
        var t = e.currentTarget,
        n = a.query(t, "input[type=password]", HTMLInputElement);
        t.classList.contains("open") ? (n.disabled = !1, n.focus()) : n.disabled = !0
    }), i.on("details:toggled", ".js-hook-delivery-item",
    function(e) {
        var n = e.currentTarget,
        r = n.querySelector(".js-hook-delivery-details");
        r && !fu.get(n) && C("low").then(function() {
            fu.set(n, !0),
            r.classList.add("is-loading");
            var e = r.getAttribute("data-url");
            t(e, "null.js:119"),
            v.fetchText(e).then(function(e) {
                r.outerHTML = e,
                r.classList.remove("is-loading")
            },
            function() {
                r.classList.add("has-error"),
                r.classList.remove("is-loading")
            })
        })
    }), i.on("click", ".js-hook-delivery-details .js-tabnav-tab",
    function(e) {
        var n = e.currentTarget,
        r = a.closest(n, ".js-hook-delivery-details"),
        o = !0,
        s = !1,
        i = void 0;
        try {
            for (var c, u = r.querySelectorAll(".js-tabnav-tab, .js-tabnav-tabcontent")[Symbol.iterator](); ! (o = (c = u.next()).done); o = !0) {
                c.value.classList.remove("selected")
            }
        } catch(e) {
            s = !0,
            i = e
        } finally {
            try { ! o && u.
                return && u.
                return ()
            } finally {
                if (s) throw i
            }
        }
        n.classList.add("selected");
        var l = n.getAttribute("data-tab-target");
        t(l, "null.js:135");
        var d = r.querySelector('.js-tabnav-tabcontent[data-tab-name="' + l + '"]');
        d && d.classList.add("selected")
    }), i.on("click", ".js-hook-deliveries-pagination-button",
    function(e) {
        e.preventDefault();
        var n = e.currentTarget,
        r = n.parentElement;
        t(r, "null.js:146"),
        C("low").then(function() {
            r.classList.add("loading");
            var e = n.getAttribute("href");
            t(e, "null.js:152"),
            v.fetchText(e).then(function(e) {
                r.outerHTML = e
            })
        })
    }), i.on("click", ".js-redeliver-hook-delivery-init-button",
    function(e) {
        e.preventDefault();
        var t = e.currentTarget.getAttribute("href");
        C("low").then(function() {
            Us({
                div: t
            })
        })
    }), q(document).on("ajaxSuccess", ".js-redeliver-hook-form",
    function(e, n) {
        var r = e.currentTarget.getAttribute("data-delivery-guid"),
        o = a.query(document, '.js-hook-delivery-details[data-delivery-guid="' + r + '"]'),
        s = o.parentElement;
        t(s, "null.js:178"),
        i.fire(document, "facebox:close"),
        o.outerHTML = n.responseText;
        a.query(s, "poll-include-fragment").addEventListener("load",
        function() {
            var e = a.query(s, ".js-hook-delivery-details"),
            t = a.query(s, ".js-item-status"),
            n = e.getAttribute("data-status-class");
            t.classList.remove("success", "pending", "failure"),
            n && t.classList.add(n);
            var r = s.querySelector(".js-item-status-tooltip"),
            o = e.getAttribute("data-status-message");
            r && o && r.setAttribute("aria-label", o)
        })
    }), q(document).on("ajaxError", ".js-redeliver-hook-form",
    function(e) {
        e.currentTarget.parentElement.querySelector(".js-redelivery-dialog").classList.add("failed")
    }), i.on("submit", ".js-test-hook-form",
    function(e) {
        e.preventDefault();
        var t = c(e.currentTarget, HTMLFormElement);
        C("low").then(function() {
            function e() {
                t.dispatchEvent(new CustomEvent("ajaxComplete", {
                    bubbles: !0
                }))
            }
            var n = a.query(document, ".js-test-hook-message");
            n.classList.remove("error", "success"),
            v.fetch(t.action, {
                method: t.method,
                body: new FormData(t)
            }).then(function() {
                n.classList.add("success")
            },
            function(e) {
                n.classList.add("error");
                var t = a.query(n, ".js-test-hook-message-errors");
                null != e.response ? e.response.json().then(function(e) {
                    t.textContent = e.errors
                }) : t.textContent = "Network request failed"
            }).then(e, e)
        })
    }), i.on("click", ".js-hook-enforcement-select .js-navigation-item",
    function(e) {
        var t = e.currentTarget,
        n = a.query(e.currentTarget, ".js-value"),
        r = a.closest(t, "form", HTMLFormElement),
        o = a.query(r, ".js-enforcement-value", HTMLInputElement),
        s = n.textContent.split("_"),
        i = ni(s, 2),
        u = i[0],
        l = i[1];
        o.value = u;
        var m = r.querySelector(".js-final-value");
        m && ((m = c(m, HTMLInputElement)).value = l ? "false": "true"),
        d.submit(r)
    }), s.observe(".js-integration-permissions-selector",
    function() {
        i.on("change", "[id^=integration_permission_]",
        function() {
            var e = this.getAttribute("data-permission"),
            t = this.getAttribute("data-resource"),
            n = a.querySelectorAll(document, '.js-integration-hook-event[data-resource="' + t + '"]', HTMLInputElement),
            r = a.querySelectorAll(document, ".js-integration-single-file-resource", HTMLInputElement),
            o = a.querySelectorAll(document, '.js-dropdown-container[data-resource="' + t + '"]', HTMLElement);
            Vr(),
            "none" !== e ? (q(".js-integration-hook-event-permission-error[data-resource='" + t + "']").addClass("d-none"), q(".js-integration-single-file-permission-error").addClass("d-none"), n.forEach(function(e) {
                e.readOnly = !1
            }), r.forEach(function(e) {
                e.readOnly = !1
            }), this.closest(".js-list-group-item").classList.remove("disabled"), o.forEach(function(e) {
                return e.classList.remove("d-none")
            })) : (o.forEach(function(e) {
                return e.classList.add("anim-fade-in")
            }), o.forEach(function(e) {
                return e.classList.add("d-none")
            }), this.closest(".js-list-group-item").classList.add("disabled"), n.forEach(function(e) {
                e.readOnly = !0,
                e.checked = !1
            }), "single_file" === t && r.forEach(function(e) {
                e.readOnly = !0,
                e.value = ""
            }))
        }),
        i.on("change", "[name^=integration]", Vr),
        i.on("click", ".js-integration-hook-event",
        function(e) {
            var t = c(e.currentTarget, HTMLInputElement);
            if (t.readOnly) {
                var n = a.closest(t, ".js-send-events");
                a.query(n, ".js-integration-hook-event-permission-error").classList.remove("d-none"),
                e.preventDefault()
            }
        }),
        i.on("click", ".js-integration-single-file-resource",
        function(e) {
            var t = c(e.currentTarget, HTMLInputElement);
            if (t.readOnly) {
                var n = a.closest(t, ".js-single-file");
                a.query(n, ".js-integration-single-file-permission-error").classList.remove("d-none"),
                e.preventDefault()
            }
        })
    }), i.on("navigation:open", ".js-issues-custom-filter",
    function(e) {
        var n = c(e.currentTarget, HTMLFormElement),
        r = document.createElement("input");
        r.type = "hidden";
        var a = n.getAttribute("data-name");
        t(a, "null.js:13"),
        r.name = a;
        var o = n.querySelector(".js-new-item-name");
        t(o, "null.js:17"),
        r.value = o.textContent,
        n.appendChild(r),
        d.submit(n)
    }), I(function(e) {
        var t = e.newURL,
        n = t.match(/\/issues#issue\/(\d+)$/);
        if (n) {
            var r = n[1];
            window.location = t.replace(/\/?#issue\/.+/, "/" + r)
        }
    }), I(function(e) {
        var t = e.newURL,
        n = t.match(/\/issues#issue\/(\d+)\/comment\/(\d+)$/);
        if (n) {
            var r = n[1],
            a = n[2];
            window.location = t.replace(/\/?#issue\/.+/, "/" + r + "#issuecomment-" + a)
        }
    }), s.observe(".js-issues-list-check:checked", {
        add: function(e) {
            e.closest(".js-issue-row").classList.add("selected")
        },
        remove: function(e) {
            e.closest(".js-issue-row").classList.remove("selected")
        }
    }), i.on("navigation:keydown", ".js-issue-row",
    function(e) {
        t(e instanceof CustomEvent, "null.js:27"),
        "x" === e.detail.hotkey && (!
        function(e) {
            var t = e.querySelector(".js-issues-list-check");
            t && d.changeValue(t, !t.checked)
        } (e.currentTarget), e.preventDefault(), e.stopPropagation())
    }), o.onFocus("#js-issues-search",
    function(e) {
        t(e instanceof HTMLInputElement, "null.js:39"),
        e.value = e.value
    }), i.on("selectmenu:selected", ".js-saved-reply-container",
    function(e) {
        var t = a.query(e.target, ".js-saved-reply-body"),
        n = t.textContent.trim(),
        r = this.closest(".js-previewable-comment-form"),
        o = r.querySelector(".js-comment-field");
        F.insertText(o, n);
        r.querySelector(".js-saved-reply-id").value = t.getAttribute("data-saved-reply-id")
    }), o.onKey("keydown", ".js-saved-reply-shortcut-comment-field",
    function(e) {
        if ("Control+." === L(e)) {
            t(e.target instanceof HTMLElement, "null.js:26");
            var n = a.closest(e.target, ".js-previewable-comment-form"),
            r = a.query(n, ".js-saved-reply-container");
            j.activate(r),
            e.preventDefault(),
            R.trackEvent({
                category: "Markdown Toolbar",
                action: "shortcut",
                label: "saved reply"
            })
        }
    }), o.onKey("keydown", ".js-saved-reply-filter-input",
    function(e) {
        if (/^Control\+[1-9]$/.test(L(e))) {
            t(e.target instanceof HTMLElement, "null.js:41");
            var n = a.closest(e.target, ".js-previewable-comment-form").querySelectorAll(".js-navigation-item"),
            r = Number(e.key),
            o = n[r - 1];
            o && (o.click(), e.preventDefault(), R.trackEvent({
                category: "Saved Replies",
                action: "shortcut",
                label: "saved reply number " + r
            }))
        }
    });
    var vu = function() {
        var e = Ys(regeneratorRuntime.mark(function e(n, r) {
            var o, s, i, c, u;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return o = Gr(n),
                    r && o.append(r.name, r.value),
                    null == (s = n.getAttribute("data-authenticity-token")) && (i = a.closest(n, "form", HTMLFormElement).elements.namedItem("authenticity_token")) instanceof HTMLInputElement && (s = i.value),
                    t(s, "null.js:106"),
                    o.append("authenticity_token", s),
                    c = n.getAttribute("data-url"),
                    t(c, "null.js:112"),
                    e.next = 10,
                    v.fetchText(c, {
                        method: "post",
                        body: o
                    });
                case 10:
                    u = e.sent,
                    Jr(a.closest(n, ".js-discussion-sidebar-item"), u);
                case 12:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ();i.on("selectmenu:selected", ".js-issue-sidebar-form",
    function(e) {
        var t = e.currentTarget,
        n = e.target,
        r = a.closest(n, ".js-select-menu"),
        o = r.hasAttribute("data-multiple");
        if (n.hasAttribute("data-clear-assignees")) {
            var s = a.closest(n, ".js-menu-content"),
            i = a.querySelectorAll(s, 'input[name="issue[user_assignee_ids][]"]:checked', HTMLInputElement),
            c = !0,
            u = !1,
            l = void 0;
            try {
                for (var d, m = i[Symbol.iterator](); ! (c = (d = m.next()).done); c = !0) {
                    var f = d.value;
                    f.disabled = !1,
                    f.checked = !1
                }
            } catch(e) {
                u = !0,
                l = e
            } finally {
                try { ! c && m.
                    return && m.
                    return ()
                } finally {
                    if (u) throw l
                }
            }
            $r(t)
        } else if (o) {
            var v = Number(r.getAttribute("data-max-options"));
            if (v) {
                var p = r.querySelectorAll('input[type="checkbox"]:checked').length;
                a.query(r, ".js-max-warning").classList.toggle("d-none", p <= v)
            }
            t.addEventListener("menu:deactivate", Kr, {
                once: !0
            })
        } else $r(t)
    }), q(document).on("ajaxSuccess", ".js-discussion-sidebar-item",
    function(e, t, n, r) {
        e.target.classList.contains("js-issue-sidebar-form") && Jr(e.currentTarget, r)
    }), i.on("click", "div.js-issue-sidebar-form .js-suggested-reviewer",
    function(e) {
        var t = c(e.currentTarget, HTMLButtonElement),
        n = a.closest(t, ".js-issue-sidebar-form");
        vu(n, {
            name: t.name,
            value: t.value
        }),
        e.preventDefault()
    }), i.on("click", "div.js-issue-sidebar-form .js-issue-assign-self",
    function(e) {
        var t = c(e.currentTarget, HTMLButtonElement),
        n = a.closest(t, ".js-issue-sidebar-form");
        vu(n, {
            name: t.name,
            value: t.value
        }),
        e.preventDefault()
    }), q(document).on("ajaxSuccess", ".js-pages-preview-toggle-form",
    function(e, t, n, r) {
        200 !== t.status && 201 !== t.status || (a.query(e.currentTarget, "button.btn").textContent = r.new_button_value)
    }), i.on("change", ".js-project-menu-checkbox",
    function(e) {
        var t = c(e.currentTarget, HTMLInputElement),
        n = a.closest(t, ".js-project-menu-container"),
        r = !0,
        o = !1,
        s = void 0;
        try {
            for (var i, u = a.querySelectorAll(n, ".js-project-menu-checkbox", HTMLInputElement)[Symbol.iterator](); ! (r = (i = u.next()).done); r = !0) {
                var l = i.value;
                l !== t && (l.name === t.name && (l.checked = t.checked, a.closest(l, ".select-menu-item").classList.toggle("selected", l.checked)))
            }
        } catch(e) {
            o = !0,
            s = e
        } finally {
            try { ! r && u.
                return && u.
                return ()
            } finally {
                if (o) throw s
            }
        }
    }), i.on("click", ".js-prompt-dismiss",
    function(e) {
        a.closest(e.currentTarget, ".js-prompt").remove()
    }), q(document).on("ajaxSend", ".js-toggler-container .js-set-approval-state",
    function() {
        return this.closest(".js-toggler-container").classList.add("loading")
    }), q(document).on("ajaxComplete", ".js-toggler-container .js-set-approval-state",
    function() {
        return this.closest(".js-toggler-container").classList.remove("loading")
    }), q(document).on("ajaxSuccess", ".js-toggler-container .js-set-approval-state",
    function(e, t, n, r) {
        if (1 === r.approval_state) this.closest(".js-toggler-container").classList.add("on");
        else if (2 === r.approval_state) {
            var a = this.closest(".js-toggler-container");
            a.classList.add("revoked"),
            a.classList.remove("on")
        }
    }), q(document).on("ajaxSuccess", ".js-request-approval-facebox-form",
    function() {
        var e = this.getAttribute("data-container-id");
        return c(document.getElementById(e), HTMLElement).classList.add("on"),
        i.fire(document, "facebox:close")
    }), s.observe(".js-integrations-install-form",
    function(e) {
        function n() {
            if (r.disabled = !Qr(this), null !== e.querySelector(".flash")) return u.disabled = Yr(this),
            e.querySelector(".flash").classList.toggle("d-none", !Yr(this))
        }
        var r = e.querySelector(".js-integrations-install-form-submit"),
        o = e.querySelector(".js-autocomplete"),
        s = o.getAttribute("data-search-url"),
        u = e.querySelector(".js-autocomplete-field");
        e.addEventListener("change", n),
        i.on("click", ".js-repository-picker-remove",
        function() {
            return this.closest(".js-repository-picker-result").remove(),
            0 === a.query(document, ".js-integrations-install-repo-picked").children.length && a.query(document, ".js-min-repository-error").classList.remove("d-none"),
            Zr(),
            n.call(e)
        }),
        q(document).on("focus", ".js-integrations-install-repo-picker .js-autocomplete-field",
        function() {
            return a.query(document, ".js-select-repositories-radio", HTMLInputElement).checked = !0,
            n.call(e)
        }),
        i.on("autocomplete:autocompleted:changed", ".js-integrations-install-repo-picker",
        function() {
            var e = void 0,
            t = void 0,
            n = s,
            r = document.querySelectorAll(".js-integrations-install-repo-picked .js-selected-repository-field");
            for (e = 0, t = r.length; e < t; e++) {
                var a = c(r[e], HTMLInputElement);
                n += ~n.indexOf("?") ? "&": "?",
                n += a.name + "=" + encodeURIComponent(a.value)
            }
            o.setAttribute("data-search-url", n)
        }),
        i.on("autocomplete:result", ".js-integrations-install-repo-picker",
        function(r) {
            t(r instanceof CustomEvent, "null.js:125");
            var o = r.detail.text,
            s = this.querySelector("#repo-result-" + o),
            i = e.querySelector(".js-integrations-install-repo-picked");
            s.classList.remove("d-none"),
            i.insertBefore(s, i.firstChild),
            u.value = "",
            e.querySelector(".js-autocomplete-results").innerHTML = "",
            a.query(document, ".js-min-repository-error").classList.add("d-none"),
            Zr(),
            n.call(e)
        }),
        i.on("click", ".js-all-repositories-radio",
        function() {
            a.query(document, ".js-integrations-install-repo-picked, .js-min-repository-error").classList.add("d-none"),
            Zr()
        }),
        i.on("click", ".js-select-repositories-radio",
        function() {
            a.query(document, ".js-integrations-install-repo-picked").classList.remove("d-none"),
            Zr()
        }),
        q(document).on("submit", ".js-integrations-install-form",
        function() {
            this.querySelector(".js-all-repositories-radio").checked ? Array.from(this.querySelectorAll('input[name="repository_ids[]"]')).forEach(function(e) {
                return e.remove()
            }) : q(".js-autocomplete-results").empty()
        })
    }), i.on("submit", ".org form[data-results-container]",
    function(e) {
        e.preventDefault()
    }), i.on("click", ".js-invitations-team-suggestions-view-all",
    function(e) {
        e.preventDefault();
        var t = c(e.currentTarget, HTMLAnchorElement);
        v.fetchSafeDocumentFragment(document, t.href).then(function(e) {
            var n = a.closest(t, "ul");
            n.innerHTML = "",
            n.appendChild(e);
            var r = !0,
            o = !1,
            s = void 0;
            try {
                for (var i, c = a.querySelectorAll(document, ".js-invitation-toggle-team:checked", HTMLInputElement)[Symbol.iterator](); ! (r = (i = c.next()).done); r = !0) {
                    var u = i.value.value;
                    a.query(n, ".js-invitation-toggle-team[value=" + u + "]", HTMLInputElement).setAttribute("checked", "true")
                }
            } catch(e) {
                o = !0,
                s = e
            } finally {
                try { ! r && c.
                    return && c.
                    return ()
                } finally {
                    if (o) throw s
                }
            }
        })
    }), i.on("change", ".js-org-reinstate-option", ea), s.observe(".js-org-reinstate-forms", ea), i.on("change", ".js-change-org-role-selector",
    function(e) {
        var n = e.target;
        if (t(n instanceof HTMLInputElement, "null.js:7"), n.form) {
            var r = n.form.querySelector(".js-change-org-role-submit");
            r instanceof HTMLButtonElement && (r.disabled = !1)
        }
    }), i.on("click", ".js-member-remove-confirm-button",
    function(e) {
        e.preventDefault();
        var t = new URL(this.getAttribute("data-url"), window.location.origin),
        n = new URLSearchParams(t.search.slice(1)),
        r = this.getAttribute("data-member-id");
        if (r) n.append("member_ids[]", r);
        else {
            var a = !0,
            o = !1,
            s = void 0;
            try {
                for (var i, c = Array.from(document.querySelectorAll(".js-bulk-actions-container .js-bulk-actions-toggle:checked")).map(function(e) {
                    return e.closest(".js-bulk-actions-item").getAttribute("data-bulk-actions-id")
                }).sort()[Symbol.iterator](); ! (a = (i = c.next()).done); a = !0) {
                    var u = i.value;
                    n.append("member_ids[]", u)
                }
            } catch(e) {
                o = !0,
                s = e
            } finally {
                try { ! a && c.
                    return && c.
                    return ()
                } finally {
                    if (o) throw s
                }
            }
        }
        t.search = n.toString(),
        Us(function() {
            v.fetchText(t).then(Us)
        })
    }), i.on("click", ".js-membership-tab",
    function() {
        var e = this.getAttribute("data-membership"),
        t = a.query(document, ".js-member-filter-field", HTMLInputElement),
        n = t.value,
        r = new RegExp("membership:[a-z-]+"),
        o = n.toString().trim().replace(r, "");
        t.value = (o + " " + e).replace(/\s\s/, " "),
        t.focus(),
        m.dispatchThrottledInputEvent(t);
        a.query(document, ".js-membership-tabs").classList.remove("selected"),
        this.classList.add("selected")
    }), i.on("click", ".js-member-search-filter",
    function(e) {
        e.preventDefault();
        var t = this.getAttribute("data-filter"),
        n = this.closest(".js-select-menu").getAttribute("data-filter-on"),
        r = a.query(document, ".js-member-filter-field", HTMLInputElement),
        o = r.value,
        s = new RegExp(n + ":[a-z]+"),
        i = o.toString().trim().replace(s, "");
        r.value = (i + " " + t).replace(/\s\s/, " "),
        r.focus(),
        m.dispatchThrottledInputEvent(r)
    }), o.onKey("keydown", ".js-auto-submit-on-select .js-autocomplete-field",
    function(e) {
        "Enter" === e.key && e.preventDefault()
    }), i.on("autocomplete:result", ".js-auto-submit-on-select",
    function() {
        var e = this;
        Promise.resolve().then(function() {
            return d.submit(e)
        })
    }), i.on("autocomplete:result", ".js-bulk-add-team-form .js-autocomplete-field",
    function(e) {
        if (q(this).data("autocompleted").indexOf("/") > 0) {
            var t = this.form.action,
            n = this.form.method,
            r = new FormData(this.form);
            C("low").then(function() {
                Us(function() {
                    v.fetchText(t, {
                        method: n,
                        body: r
                    }).then(Us)
                })
            }),
            e.stopPropagation()
        }
    });
    var pu = "";n.ready.then(function() {
        var e = document.querySelector(".js-add-members-container");
        e && (pu = e.innerHTML)
    }), i.on("click", ".js-approve-membership-request", ta), i.on("autocomplete:result", ".js-add-team-member-form", ta), document.addEventListener("facebox:close",
    function() {
        var e = document.querySelector(".js-add-members-container");
        e && (e.innerHTML = pu)
    }), l.remoteForm(".js-add-org-member-form",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o, s, i, c, u, l, d, m, f, v;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return r = void 0,
                    o = a.query(document, ".js-member-list"),
                    t.classList.add("is-sending"),
                    (s = document.querySelector(".flash-messages")) && s.remove(),
                    e.prev = 5,
                    e.next = 8,
                    n.json();
                case 8:
                    r = e.sent,
                    e.next = 16;
                    break;
                case 11:
                    if (e.prev = 11, e.t0 = e.
                    catch(5), e.t0.response || e.t0.response.json) {
                        e.next = 15;
                        break
                    }
                    return e.abrupt("return");
                case 15:
                    o.insertAdjacentHTML("beforebegin", e.t0.response.json.message_html);
                case 16:
                    if (!r) {
                        e.next = 50;
                        break
                    }
                    if (t.classList.remove("is-sending"), t.querySelector(".js-autocomplete-field").value = "", i = a.query(M.parseHTML(document, r.json.list_item_html), "*"), !(c = i.getAttribute("data-login"))) {
                        e.next = 49;
                        break
                    }
                    u = !0,
                    l = !1,
                    d = void 0,
                    e.prev = 25,
                    m = o.children[Symbol.iterator]();
                case 27:
                    if (u = (f = m.next()).done) {
                        e.next = 35;
                        break
                    }
                    if ((v = f.value).getAttribute("data-login") !== c) {
                        e.next = 32;
                        break
                    }
                    return v.remove(),
                    e.abrupt("break", 35);
                case 32:
                    u = !0,
                    e.next = 27;
                    break;
                case 35:
                    e.next = 41;
                    break;
                case 37:
                    e.prev = 37,
                    e.t1 = e.
                    catch(25),
                    l = !0,
                    d = e.t1;
                case 41:
                    e.prev = 41,
                    e.prev = 42,
                    !u && m.
                    return && m.
                    return ();
                case 44:
                    if (e.prev = 44, !l) {
                        e.next = 47;
                        break
                    }
                    throw d;
                case 47:
                    return e.finish(44);
                case 48:
                    return e.finish(41);
                case 49:
                    o.prepend(i);
                case 50:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[5, 11], [25, 37, 41, 49], [42, , 44, 48]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), i.on("change", ".js-customize-member-privileges-default-repository-permission-radio",
    function() {
        a.query(document, ".js-migrate-ability-list-item-default-repository-permission").classList.toggle("migrate-ability-not-possible", ra()),
        na()
    }), i.on("change", ".js-customize-member-privileges-repository-creation-radio",
    function() {
        a.query(document, ".js-migrate-ability-list-item-members-can-create-repositories").classList.toggle("migrate-ability-not-possible", aa()),
        na()
    }), i.on("change", ".js-customize-member-privileges-team-privacy-radio",
    function() {
        a.query(document, ".js-migrate-ability-list-item-team-privacy").classList.toggle("migrate-ability-not-possible", oa()),
        na()
    }), n.ready.then(function() {
        var e = document.querySelector(".js-org-migration-settings-sidebar");
        if (null != e) {
            var t = e.getBoundingClientRect();
            if (null != t) {
                var n = t.top + window.pageYOffset - 16,
                r = e.style.position,
                a = e.style.top,
                o = e.style.left,
                s = e.style.width,
                i = u(function() {
                    var i = e.parentNode;
                    if (null != i && i instanceof HTMLElement) {
                        var c = i.getBoundingClientRect().right - t.width;
                        window.pageYOffset >= n ? (e.style.position = "fixed", e.style.top = "16px", e.style.left = c + "px", e.style.width = "250px") : (e.style.position = r, e.style.top = a, e.style.left = o, e.style.width = s)
                    }
                },
                5);
                window.addEventListener("scroll", i, {
                    passive: !0
                }),
                window.addEventListener("resize", i, {
                    passive: !0
                }),
                na()
            }
        }
    }), s.observe(".js-rename-owners-team-input",
    function(e) {
        m.addThrottledInputEventListener(e,
        function() { !
            function(e) {
                var t = e.value.trim().toLowerCase(),
                n = e.form;
                n.classList.add("is-sending"),
                n.classList.remove("is-name-check-fail", "is-name-check-success");
                var r = new URL(e.getAttribute("data-check-url"), window.location.origin),
                o = new URLSearchParams(r.search.slice(1));
                o.append("name", t),
                r.search = o.toString(),
                v.fetchText(r).then(function(e) {
                    if (n.classList.remove("is-sending"), "owners" === t || "" === t) return sa(!1, "");
                    a.query(n, ".js-rename-owners-team-errors").innerHTML = e || "";
                    var r = !!document.querySelector(".js-error");
                    return sa(!(r || !t), e),
                    n.classList.toggle("is-name-check-fail", r),
                    n.classList.toggle("is-name-check-success", !r && t)
                })
            } (e)
        })
    }), o.onInput(".js-new-organization-name",
    function(e) {
        var t = e.target,
        n = a.closest(t, "dd").querySelector(".js-field-hint-name");
        n && ("innerText" in n ? n.innerText = t.value: n.textContent = t.value)
    }), o.onInput(".js-company-name-input",
    function(e) {
        var t = c(e.target.form, HTMLFormElement),
        n = t.querySelector(".js-company-name-text");
        if (n) {
            var r = a.query(t, ".js-corp-tos-link"),
            o = t.querySelector(".js-tos-link");
            o && (o.classList.add("d-none"), o.setAttribute("aria-hidden", "true")),
            r.classList.remove("d-none"),
            r.setAttribute("aria-hidden", "false");
            var s = " on behalf of your company, " + e.target.value;
            "innerText" in n ? n.innerText = s: n.textContent = s
        }
    }), s.observe(".js-company-owned:not(:checked)", {
        add: function(e) {
            var t = c(e.form, HTMLFormElement),
            n = a.query(t, ".js-company-name-input", HTMLInputElement),
            r = a.query(document, ".js-company-name-text"),
            o = a.query(document, ".js-corp-tos-link"),
            s = a.query(document, ".js-tos-link");
            e.getAttribute("data-optional") && n.removeAttribute("required"),
            d.changeValue(n, ""),
            s.classList.remove("d-none"),
            s.setAttribute("aria-hidden", "false"),
            o.classList.add("d-none"),
            o.setAttribute("aria-hidden", "true"),
            "innerText" in r ? r.innerText = "": r.textContent = ""
        }
    }), s.observe(".js-company-owned-autoselect",
    function(e) {
        function t() {
            if (n.checked && n.form) {
                var e = a.query(n.form, ".js-company-owned", HTMLInputElement);
                d.changeValue(e, !0)
            }
        }
        var n = c(e, HTMLInputElement);
        n.addEventListener("change", t),
        t()
    }), l.remoteForm(".js-org-list-item .js-org-remove-item",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return t.closest(".js-org-list-item").classList.add("d-none"),
                    e.prev = 1,
                    e.next = 4,
                    n.text();
                case 4:
                    e.next = 12;
                    break;
                case 6:
                    if (e.prev = 6, e.t0 = e.
                    catch(1), t.closest(".js-org-list-item").classList.remove("d-none"), !(r = t.getAttribute("data-error-message"))) {
                        e.next = 12;
                        break
                    }
                    return e.abrupt("return", alert(r));
                case 12:
                    t.closest(".js-org-list-item").remove();
                case 13:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[1, 6]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), l.remoteForm(".js-per-seat-invite-field, .js-per-seat-invite .js-org-remove-item",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.json();
                case 2:
                    ia((r = e.sent).json);
                case 4:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), s.observe(".js-repository-fallback-search",
    function(e) {
        e.addEventListener("keypress",
        function(e) {
            if ("Enter" === L(e)) {
                var t = new URL(this.getAttribute("data-url"), window.location.origin),
                n = new URLSearchParams(t.search.slice(1)),
                r = n.get("q") || "";
                n.set("q", r + " " + this.value),
                t.search = n.toString(),
                window.location = t.toString()
            }
        })
    }), i.on("selectmenu:selected", ".js-select-repo-permission",
    function(e) {
        d.submit(c(e.currentTarget, HTMLFormElement))
    }), l.remoteForm(".js-select-repo-permission",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, a, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return t.classList.remove("was-successful"),
                    e.next = 3,
                    n.json();
                case 3:
                    r = e.sent,
                    a = r.json,
                    t.classList.add("was-successful"),
                    (o = t.closest(".js-org-repo")) && o.classList.toggle("with-higher-access", a.members_with_higher_access);
                case 8:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), s.observe(".js-two-factor-needs-enforced",
    function(e) {
        e.addEventListener("submit",
        function(e) {
            e.target.querySelector("input[type=checkbox]").checked && (e.preventDefault(), Us({
                div: "#confirm-2fa-requirement"
            }))
        })
    }), s.observe(".js-two-factor-enforcement-poller",
    function(e) {
        var t = e.getAttribute("data-redirect-url");
        e.addEventListener("load",
        function() {
            window.location.href = t
        })
    }), i.on("click", ".js-change-default-permission-members-confirm",
    function(e) {
        ca(e, ".js-change-default-permission-members-form")
    }), i.on("click", ".js-change-default-permission-users-confirm",
    function(e) {
        ca(e, ".js-change-default-permission-users-form")
    }), i.on("change", ".js-auto-submit-on-change",
    function(e) {
        e.preventDefault();
        var t = a.closest(e.target, "form", HTMLFormElement);
        t && d.submit(t)
    }), s.observe("[data-warn-unsaved-changes]",
    function(e) {
        e.addEventListener("input", da),
        e.addEventListener("change", da),
        e.addEventListener("submit", ma)
    }), i.on("click", ".js-org-enable-saml",
    function(e) {
        e.currentTarget.checked ? ha(va()) : function(e) {
            e && e.classList.add("d-none")
        } (va())
    }), i.on("click", ".js-saml-submit",
    function(e) {
        e.preventDefault(),
        t(e.currentTarget instanceof HTMLButtonElement, "null.js:120"),
        la(e.currentTarget),
        d.submit(fa())
    }), i.on("click", ".js-org-saml-confirm-enforce-button",
    function() {
        pa().value = "true",
        d.submit(fa())
    }), i.on("submit", ".js-saml-provider-settings-form",
    function(e) {
        e.preventDefault(),
        "test_settings" === ya().name ? ja() : "save_settings" === ya().name && (ga() ? Us({
            div: "#disable-saml-confirmation"
        }) : ba() ? Us({
            div: "#enforce-saml-confirmation"
        }) : ja())
    }), document.addEventListener("facebox:close",
    function() {
        if (document.querySelector("#facebox .js-disable-saml-confirmation")) {
            var e = document.querySelector(".js-org-enable-saml");
            e && e instanceof HTMLInputElement && (e.checked = !0, ha(va()))
        }
    }), i.on("autocomplete:autocompleted:changed", ".js-team-add-user-name",
    function() {
        q(".js-team-add-user-button")[0].disabled = !q(this).data("autocompleted")
    }), i.on("click", ".js-team-remove-user",
    function(e) {
        e.preventDefault(),
        q(".js-team-add-user-form").removeClass("d-none"),
        q(".js-team-add-user-name").focus(),
        this.closest("li").remove()
    }), i.on("click", ".js-team-add-user-button",
    function(e) {
        e.preventDefault();
        var t = this.closest(".js-team-add-user-form"),
        n = t.querySelector(".js-team-add-user-name"),
        r = n.value;
        if (r && q(n).data("autocompleted")) {
            n.value = "";
            var o = a.query(document, ".js-team-user-logins"),
            s = !0,
            i = !1,
            c = void 0;
            try {
                for (var u, l = o.querySelectorAll("li")[Symbol.iterator](); ! (s = (u = l.next()).done); s = !0) {
                    if (u.value.getAttribute("data-login") === r) return
                }
            } catch(e) {
                i = !0,
                c = e
            } finally {
                try { ! s && l.
                    return && l.
                    return ()
                } finally {
                    if (i) throw c
                }
            }
            C("low").then(function() {
                var e = new URL(t.getAttribute("data-template-url"), window.location.origin),
                a = new URLSearchParams(e.search.slice(1));
                a.append("member", r),
                e.search = a.toString(),
                v.fetchSafeDocumentFragment(document, e).then(function(e) {
                    o.appendChild(e),
                    q(".js-login-field").prop("disabled", !1),
                    t.classList.add("d-none")
                }),
                n.focus()
            })
        }
    }), i.on("change", ".js-change-team-visibility-selector",
    function(e) {
        var n = e.target;
        if (t(n instanceof HTMLInputElement, "null.js:7"), n.form) {
            var r = n.form.querySelector(".js-change-team-visibility-submit");
            r instanceof HTMLButtonElement && (r.disabled = !1)
        }
    });
    var hu = new f;q(document).on("ajaxSend", ".js-ldap-import-groups-container",
    function(e, t) {
        return t.setRequestHeader("X-Context", "import")
    }), i.on("autocomplete:autocompleted:changed", ".js-team-ldap-group-field",
    function() {
        var e = this.closest(".js-ldap-group-adder");
        e && (e.classList.remove("is-exists"), e.querySelector(".js-ldap-group-adder-button").disabled = !q(this).data("autocompleted"))
    }), i.on("navigation:open", ".js-team-ldap-group-autocomplete-results .js-navigation-item",
    function(e) {
        var t = e.currentTarget,
        n = this.closest(".js-ldap-group-adder"),
        r = t.getAttribute("data-dn"),
        o = a.closest(t, ".js-ldap-import-groups-container");
        n.querySelector(".js-team-ldap-dn-field").value = r;
        var s = !0,
        i = !1,
        c = void 0;
        try {
            for (var u, l = o.querySelectorAll(".js-ldap-group-dn")[Symbol.iterator](); ! (s = (u = l.next()).done); s = !0) {
                u.value.textContent === r && (n.classList.add("is-exists"), n.querySelector(".js-ldap-group-adder-button").disabled = !0)
            }
        } catch(e) {
            i = !0,
            c = e
        } finally {
            try { ! s && l.
                return && l.
                return ()
            } finally {
                if (i) throw c
            }
        }
    }), q(document).on("ajaxSend", ".js-import-container",
    function() {
        this.classList.add("is-importing"),
        this.querySelector(".js-ldap-group-adder-button").disabled = !0
    }), q(document).on("ajaxComplete", ".js-import-container",
    function() {
        return this.classList.remove("is-importing")
    }), q(document).on("ajaxSuccess", ".js-ldap-group-adder",
    function(e, t, n, r) {
        var a = this.closest(".js-ldap-import-groups-container"),
        o = document.querySelector(".js-import-form-actions");
        a.classList.remove("is-empty");
        a.querySelector(".js-ldap-imported-groups").insertAdjacentHTML("afterbegin", r),
        this.reset(),
        this.querySelector(".js-team-ldap-group-field").focus();
        var s = this.querySelector(".js-ldap-group-adder-button");
        s && (s.disabled = !0),
        o && o.classList.remove("d-none")
    }), q(document).on("submit", ".js-team-remove-group",
    function() {
        this.closest(".js-team").classList.add("is-removing"),
        a.query(document, ".js-team-ldap-group-field").focus()
    }), q(document).on("ajaxSuccess", ".js-team-remove-group",
    function() {
        this.closest(".js-team").remove(),
        document.querySelector(".js-team:not(.is-removing)") || (a.query(document, ".js-ldap-import-groups-container").classList.add("is-empty"), a.query(document, ".js-import-form-actions").classList.add("d-none"))
    }), q(document).on("ajaxError", ".js-team-remove-group",
    function() {
        this.closest(".js-team").classList.remove("is-removing")
    }), i.on("click", ".js-edit-team",
    function() {
        var e = this.closest(".js-team");
        e.classList.contains("is-removing") || (e.classList.add("is-editing"), e.querySelector(".js-team-name-field").focus())
    }), i.on("click", ".js-cancel-team-edit",
    function() {
        var e = this.closest(".js-team"),
        t = e.querySelector(".js-team-form"),
        n = e.querySelector(".js-slug");
        e.classList.remove("is-editing"),
        t.classList.remove("is-exists"),
        n.textContent = n.getAttribute("data-original-slug"),
        t.reset()
    }), q(document).on("ajaxSuccess", ".js-team-form:not(.is-checking)",
    function(e, t, n, r) {
        var a = this.closest(".js-team");
        a.classList.remove("is-editing"),
        a.outerHTML = r
    }), s.observe(".js-team-name-field",
    function(e) {
        m.addThrottledInputEventListener(e,
        function() {
            var t = e.closest(".js-team-form");
            t.classList.remove("is-exists"),
            t.classList.add("is-checking"),
            t.querySelector(".js-save-button").disabled = !0;
            var n = new URL(e.getAttribute("data-check-url"), window.location.origin),
            r = new URLSearchParams(n.search.slice(1));
            r.append("name", e.value),
            n.search = r.toString(),
            hu.push(v.fetchJSON(n, {
                headers: {
                    "X-Context": "import"
                }
            })).then(function(e) {
                La(t, e)
            },
            function(e) {
                La(t, {
                    error: e
                })
            })
        })
    }), i.on("click", ".js-team-search-filter",
    function(e) {
        e.preventDefault();
        var t = this.getAttribute("data-filter"),
        n = this.closest(".js-select-menu").getAttribute("data-filter-on"),
        r = a.query(document, ".js-team-search-field", HTMLInputElement),
        o = r.value,
        s = new RegExp(n + ":[a-z]+"),
        i = o.toString().trim().replace(s, "");
        r.value = (i + " " + t).replace(/\s\s/, " "),
        r.focus(),
        m.dispatchThrottledInputEvent(r)
    }), s.observe(".js-new-team",
    function(e) {
        m.addThrottledInputEventListener(e,
        function() {
            wa(e)
        })
    }), s.observe(".js-new-org-team",
    function(e) {
        var t = e.querySelector(".js-new-team");
        t.value && wa(t)
    }), s.observe(".js-select-team-menu",
    function(e) {
        xa(e)
    }), i.on("selectmenu:selected", ".js-select-team-menu",
    function(e) {
        xa(e.currentTarget)
    }), i.on("click", ".js-create-team-button",
    function(e) {
        var n = a.closest(e.currentTarget, "form"),
        r = c(n.querySelector(".js-already-selected-team-name"), HTMLInputElement),
        o = n.querySelector(".js-original-team-visibility"),
        s = a.query(n, ".js-team-privacy-secret"),
        i = a.query(s, "input", HTMLInputElement),
        u = function(e) {
            return e.value !== e.getAttribute("data-original-team-name")
        } (r),
        l = function(e, t) {
            return null != e && t.checked && !["", "SECRET"].includes(e.getAttribute("data-original-team-visibility"))
        } (o, i);
        if (u || l) {
            e.preventDefault();
            var d = n.getAttribute("data-important-changes-summary-url");
            t(d, "null.js:103");
            var m = new URL(d, window.location.origin),
            f = new URLSearchParams(m.search.slice(1));
            f.append("parent_team", r.value),
            l && f.append("visibility_changed", l.toString()),
            u && f.append("parent_changed", u.toString()),
            m.search = f.toString(),
            Us(function() {
                v.fetchSafeDocumentFragment(document, m).then(function(e) {
                    Us(e, "js-org-team-edit-change-parent-summary")
                })
            })
        }
    }), i.on("click", ".js-org-team-edit-change-parent-summary .js-confirm-change-parent",
    function() {
        a.query(document, ".js-org-team-form", HTMLFormElement).submit()
    }), i.on("click", ".js-rename-owners-team-next-btn",
    function() {
        a.query(document, ".js-rename-owners-team-about-content").classList.toggle("migrate-owners-content-hidden"),
        a.query(document, ".js-rename-owners-team-rename-form").classList.toggle("migrate-owners-content-hidden")
    }), s.observe(".js-org-transform-poller",
    function(e) {
        var t = e.getAttribute("data-redirect-url");
        e.addEventListener("load",
        function() {
            window.location.href = t
        })
    }), i.on("click", "#load-readme",
    function(e) {
        function n(e) {
            e.currentTarget.value !== s && (o.classList.add("d-none"), r.removeEventListener("input", n))
        }
        var r = c(document.getElementById("gollum-editor-body"), HTMLTextAreaElement),
        a = document.getElementById("editor-body-buffer"),
        o = document.getElementById("undo-load-readme");
        t(a && o, "null.js:11");
        var s = a.textContent,
        i = e.currentTarget.getAttribute("data-readme-name");
        t(i, "null.js:14"),
        ka(r, a),
        t(e.currentTarget instanceof HTMLButtonElement, "null.js:17"),
        e.currentTarget.disabled = !0,
        e.currentTarget.textContent = i + " loaded",
        o.classList.remove("d-none"),
        r.addEventListener("input", n)
    }), i.on("click", "#undo-load-readme",
    function(e) {
        var n = c(document.getElementById("gollum-editor-body"), HTMLTextAreaElement),
        r = document.getElementById("editor-body-buffer");
        t(r, "null.js:35"),
        ka(n, r);
        var a = document.getElementById("load-readme");
        t(a instanceof HTMLButtonElement, "null.js:38");
        var o = a.getAttribute("data-readme-name");
        t(o, "null.js:40"),
        a.disabled = !1,
        a.textContent = "Load " + o,
        e.currentTarget.classList.add("d-none")
    }), i.on("change", ".js-collab-checkbox",
    function() {
        Array.from(this.form.querySelectorAll(".errored")).forEach(function(e) {
            return e.classList.remove("errored")
        });
        var e = this.closest(".js-collab-option").querySelector(".js-status-indicator");
        e.classList.remove("status-indicator-success", "status-indicator-failed"),
        e.classList.add("status-indicator-loading")
    }), q(document).on("ajaxSuccess", ".js-collab-form",
    function() {
        Array.from(this.querySelectorAll(".errored")).forEach(function(e) {
            return e.classList.remove("errored")
        }),
        Array.from(this.querySelectorAll(".status-indicator-loading")).forEach(function(e) {
            e.classList.remove("status-indicator-loading"),
            e.classList.add("status-indicator-success")
        })
    }), q(document).on("ajaxError", ".js-collab-form",
    function(e) {
        Array.from(this.querySelectorAll(".status-indicator-loading")).forEach(function(e) {
            e.classList.remove("status-indicator-loading"),
            e.classList.add("status-indicator-failed");
            var t = e.closest(".js-collab-option");
            t.classList.add("errored");
            var n = t.querySelector(".js-collab-checkbox");
            n.checked = !n.checked
        }),
        Array.from(this.querySelectorAll(".status-indicator-success")).forEach(function(e) {
            e.classList.remove("status-indicator-success")
        }),
        e.preventDefault()
    }), s.observe(".js-timeline-item > .discussion-item.discussion-commits", {
        add: function(e) {
            if (!e.querySelector(".discussion-item-header")) {
                var t = e.closest(".js-timeline-item");
                if (t) {
                    var n = t.previousElementSibling;
                    n && n.querySelector(".discussion-item.discussion-commits") &&
                    function(e, t) {
                        var n = e.querySelector(".timeline-commits"),
                        r = t.querySelectorAll(".timeline-commits > .commit");
                        Array.from(r).forEach(function(e) {
                            n.appendChild(e)
                        }),
                        t.remove()
                    } (n, t)
                }
            }
        }
    }), i.on("details:toggled", ".js-pull-merging",
    function() {
        var e = q(this).find(".js-merge-pull-request");
        e.toggleClass("is-dirty", Array.from(e).some(E))
    }), q(document).on("ajaxSuccess", ".js-merge-pull-request",
    function(e, t, n, r) {
        var a = void 0;
        this.reset(),
        q(this).removeClass("is-dirty");
        var o = r.updateContent;
        for (a in o) {
            var s = o[a],
            i = document.querySelector(a);
            i && O.replaceContent(i, s)
        }
    }), document.addEventListener("session:resume",
    function(e) {
        t(e instanceof CustomEvent, "null.js:46");
        var n = document.getElementById(e.detail.targetId);
        if (n) {
            q(n).closest(".js-merge-pull-request").closest(".js-details-container").addClass("open")
        }
    }), i.on("change", ".js-merge-method",
    function() {
        var e = this.closest(".js-merge-pr");
        e.classList.toggle("is-merging", "merge" === this.value),
        e.classList.toggle("is-squashing", "squash" === this.value),
        e.classList.toggle("is-rebasing", "rebase" === this.value);
        var t = e.querySelectorAll(".js-merge-pull-request .js-merge-commit-button"),
        n = !0,
        r = !1,
        a = void 0;
        try {
            for (var o, s = t[Symbol.iterator](); ! (n = (o = s.next()).done); n = !0) {
                var i = o.value;
                i.type = this.value === i.value ? "submit": "button"
            }
        } catch(e) {
            r = !0,
            a = e
        } finally {
            try { ! n && s.
                return && s.
                return ()
            } finally {
                if (r) throw a
            }
        }
        var c = e.closest(".js-pull-merging"),
        u = c.getAttribute("data-url");
        u = u.replace(/merge_type=(\w+)/, "merge_type=" + this.value),
        c.setAttribute("data-url", u)
    }), i.on("change", ".js-merge-button-toggle",
    function() {
        var e = void 0,
        t = void 0,
        n = this.closest(".js-merge-pr"),
        r = !this.checked,
        a = n.querySelectorAll(".js-merge-commit-button");
        for (e = 0, t = a.length; e < t; e++) {
            a[e].disabled = r
        }
    }), i.on("navigation:open", ".js-merge-method-menu .js-navigation-item",
    function(e) {
        var t = e.currentTarget,
        n = a.closest(t, ".js-merge-pr"),
        r = a.query(n, ".js-merge-title", HTMLInputElement),
        o = a.query(n, ".js-merge-message", HTMLTextAreaElement);
        r.defaultValue === r.value && (r.defaultValue = t.getAttribute("data-input-title-value") || ""),
        o.defaultValue === o.value && (o.defaultValue = t.getAttribute("data-input-message-value") || "")
    }), i.on("details:toggled", ".js-merge-pr",
    function(e) {
        var t = e.currentTarget.querySelector(".js-merge-message");
        t && i.fire(t, "change")
    }), i.on("click", ".js-pull-merging a[href]",
    function(e) {
        var n = e.currentTarget;
        t(n instanceof HTMLElement, "null.js:107"),
        mc && n.blur()
    }), q(document).on("ajaxError", ".js-handle-pull-merging-errors",
    function(e, t) {
        var n = void 0,
        r = this.closest(".js-pull-merging");
        if (r.classList.add("is-error"), 422 === t.status && (n = t.responseText)) {
            var a = r.querySelector(".js-pull-merging-error");
            q(a).replaceWith(n)
        }
        return ! 1
    }), i.on("click", ".js-pull-merging-refresh",
    function() {
        var e = this.closest(".js-pull-merging"),
        t = new URL(e.getAttribute("data-url"), window.location.origin),
        n = new URLSearchParams(t.search.slice(1)),
        r = document.getElementById("merge_title_field");
        if (r instanceof HTMLInputElement) {
            var a = r.value;
            n.set("commit_title", a)
        }
        var o = document.getElementById("merge_message_field");
        if (o instanceof HTMLTextAreaElement) {
            var s = o.value;
            n.set("commit_message", s)
        }
        return t.search = n.toString(),
        v.fetchText(t.toString()).then(function(t) {
            return q(e).replaceWith(t)
        }),
        !1
    }), s.observe(".pull-request-ref-restore", {
        add: Ea,
        remove: Ea
    }), s.observe("#js-pull-restorable", {
        add: Sa,
        remove: Sa
    }), document.addEventListener("pjax:end",
    function() {
        var e = !0,
        t = !1,
        n = void 0;
        try {
            for (var r, a = document.querySelectorAll(".js-pull-refresh-on-pjax")[Symbol.iterator](); ! (e = (r = a.next()).done); e = !0) {
                var o = r.value;
                i.fire(o, "socket:message", {})
            }
        } catch(e) {
            t = !0,
            n = e
        } finally {
            try { ! e && a.
                return && a.
                return ()
            } finally {
                if (t) throw n
            }
        }
    }), document.addEventListener("facebox:reveal",
    function() {
        var e = document.querySelector("#facebox .js-fork-select-fragment");
        if (e) {
            var n = e.getAttribute("data-url");
            t(n, "Missing attribute `data-url` -- null.js:13"),
            e.setAttribute("src", n)
        }
    });
    var gu = !1;s.observe(".page-new-repo",
    function() {
        gu = Ta(),
        q("#js-upgrade-container").hide(),
        qa()
    }), i.on("click", ".js-reponame-suggestion",
    function() {
        var e = a.query(document, ".js-repo-name", HTMLInputElement);
        d.changeValue(e, this.textContent)
    }), i.on("click", ".js-privacy-toggle",
    function() {
        gu = !0
    }), i.on("change", ".js-privacy-toggle", Aa), i.on("navigation:open", ".js-owner-container", qa), i.on("change", "#js-upgrade-container input", Ma), o.onInput("#js-upgrade-container input", Ma), i.on("autocheck:send", "#repository_name",
    function(e) {
        t(e instanceof CustomEvent, "null.js:146");
        var n = c(e.currentTarget, HTMLInputElement).form;
        t(n, "null.js:149");
        var r = a.query(n, "input[name=owner]:checked", HTMLInputElement).value;
        e.detail.body.append("owner", r)
    }), i.on("autocheck:complete", "#repository_name",
    function() {
        Ma()
    }), i.on("change", ".js-repository-import-owner-container input",
    function() {
        var e = this.getAttribute("data-upsell"),
        t = this.getAttribute("data-billing-url");
        a.query(document, ".js-repository-import-billing-url", HTMLAnchorElement).href = t,
        a.query(document, ".js-repository-import-upsell").classList.toggle("d-none", "false" == e),
        a.query(document, ".js-repository-import-no-upsell").classList.toggle("d-none", "true" == e)
    }), i.on("socket:message", ".repository-import",
    function(e) {
        t(e instanceof CustomEvent, "null.js:23");
        var n = e.detail.data;
        n.redirect_to && (document.location.href = n.redirect_to, e.stopImmediatePropagation())
    }), i.on("change", ".js-repository-import-lfs-opt",
    function() {
        var e = this.getAttribute("data-percent-used"),
        t = this.closest(".js-repository-import-lfs-container"),
        n = this.getAttribute("data-used");
        t.querySelector(".js-repository-import-lfs-warn").classList.toggle("d-none", !(e > 100)),
        t.querySelector(".js-usage-bar").classList.toggle("exceeded", e >= 100),
        t.querySelector(".js-usage-bar").setAttribute("aria-label", e + "%"),
        t.querySelector(".js-repository-import-lfs-progress").style.width = e + "%",
        t.querySelector("span.js-usage-text").textContent = n
    }), i.on("menu:activated", ".js-repository-import-author-select-menu", Ha), i.on("selectmenu:load", ".js-repository-import-author-select-menu", Ha), i.on("autocomplete:result", ".js-repository-import-author-autocomplete",
    function() {
        var e = this.closest(".js-repository-import-author").querySelector(".js-author-login-info");
        d.changeValue(e, this.value)
    }), q(document).on("ajaxSuccess", ".js-repository-import-author-form",
    function(e, t, n, r) {
        var a = M.parseHTML(document, r.trim());
        this.closest(".js-repository-import-author").replaceWith(a)
    }), i.on("click", ".js-repository-import-projects-cancel-button",
    function() {
        var e = a.query(document, ".js-repository-import-projects-cancel-form", HTMLFormElement);
        d.submit(e)
    }), l.remoteForm(".js-saved-reply-delete",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(n, r) {
            var a, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    r.text();
                case 2:
                    a = n.closest(".js-saved-reply-container"),
                    t(a, "null.js:10"),
                    o = a.querySelectorAll(".js-saved-reply-list-item").length,
                    a.classList.toggle("has-replies", o > 1),
                    s = n.closest(".js-saved-reply-list-item"),
                    t(s, "null.js:16"),
                    s.remove();
                case 9:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ());
    var yu = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (t) {
                        e.next = 2;
                        break
                    }
                    return e.abrupt("return");
                case 2:
                    if (n = t.getAttribute("data-url")) {
                        e.next = 5;
                        break
                    }
                    return e.abrupt("return");
                case 5:
                    return r = void 0,
                    e.prev = 6,
                    e.next = 9,
                    v.fetchSafeDocumentFragment(document, n);
                case 9:
                    r = e.sent,
                    t.innerHTML = "",
                    t.append(r),
                    e.next = 17;
                    break;
                case 14:
                    e.prev = 14,
                    e.t0 = e.
                    catch(6),
                    window.location.reload();
                case 17:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[6, 14]])
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } ();s.observe(".js-email-global-unsubscribe-form",
    function(e) {
        e.querySelector(".js-email-global-unsubscribe-submit").disabled = !0
    }), i.on("change", ".js-email-global-unsubscribe-form",
    function(e) {
        var t = e.currentTarget,
        n = a.query(t, ".js-email-global-unsubscribe-submit", HTMLInputElement),
        r = a.querySelectorAll(t, ".js-email-global-unsubscribe", HTMLInputElement),
        o = Array.from(r).some(function(e) {
            return e.checked !== e.defaultChecked
        });
        n.disabled = !o
    }), l.remoteForm(".js-verify-ssh-key",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.html();
                case 2:
                    r = a.closest(t, "li"),
                    a.query(r, ".js-unverified-user-key-notice").remove(),
                    a.query(r, ".js-user-key-icon").classList.remove("unverified-user-key"),
                    t.remove();
                case 6:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), q(document).on("ajaxSuccess", ".js-leave-collaborated-repo",
    function(e) {
        var t = e.target.getAttribute("data-repo-id");
        a.query(document, ".js-collab-repo[data-repo-id='" + t + "']").remove(),
        w.close()
    }), q(document).on("ajaxSuccess", ".js-newsletter-unsubscribe-form",
    function() {
        var e = void 0,
        t = void 0,
        n = document.querySelectorAll(".js-newsletter-unsubscribe-message"),
        r = [];
        for (e = 0, t = n.length; e < t; e++) {
            var a = n[e];
            r.push(a.classList.toggle("d-none"))
        }
        return r
    }), q(document).on("ajaxSuccess", ".js-revoke-access-form",
    function() {
        var e = this.getAttribute("data-id"),
        t = this.getAttribute("data-type-name"),
        n = a.query(document, ".js-revoke-item[data-type='" + t + "'][data-id='" + e + "']");
        w.close(),
        n.remove(),
        n.classList.contains("new-token") && a.query(document, ".js-flash-new-token").remove()
    }), i.on("click", ".js-delete-oauth-application-image",
    function() {
        var e = a.query(document, ".js-delete-oauth-application-image-form", HTMLFormElement);
        d.submit(e)
    }), i.on("click", ".js-new-callback",
    function(e) {
        e.preventDefault();
        var t = e.currentTarget,
        n = a.closest(t, ".js-callback-urls"),
        r = a.query(n, ".js-callback-url").cloneNode(!0);
        r.classList.remove("is-default-callback");
        a.query(r, "input", HTMLInputElement).value = "",
        n.classList.add("has-many");
        c(t.parentNode, HTMLElement).insertBefore(r, t)
    }), i.on("click", ".js-delete-callback",
    function(e) {
        e.preventDefault();
        var t = c(e.currentTarget, HTMLElement);
        a.closest(t, ".js-callback-url").remove();
        var n = a.closest(t, ".js-callback-urls");
        a.querySelectorAll(n, ".js-callback-url", HTMLElement).length <= 1 && n.classList.remove("has-many")
    }), i.on("click", ".js-oauth-application-whitelist .js-deny-this-request",
    function(e) {
        var t = c(e.currentTarget, HTMLElement);
        c(t.nextElementSibling, HTMLInputElement).value = "denied",
        d.submit(a.closest(t, ".js-org-application-access-form", HTMLFormElement))
    }), q(document).on("ajaxSuccess", ".js-org-application-access-form",
    function() {
        return window.location.reload()
    }), i.on("click", ".js-user-rename-warning-continue",
    function() {
        var e = document.querySelectorAll(".js-user-rename-warning, .js-user-rename-form"),
        t = !0,
        n = !1,
        r = void 0;
        try {
            for (var a, o = e[Symbol.iterator](); ! (t = (a = o.next()).done); t = !0) {
                a.value.classList.toggle("d-none")
            }
        } catch(e) {
            n = !0,
            r = e
        } finally {
            try { ! t && o.
                return && o.
                return ()
            } finally {
                if (n) throw r
            }
        }
    }), i.on("change", ".js-checkbox-scope",
    function(e) {
        var t = c(e.currentTarget, HTMLInputElement),
        n = a.closest(t, ".js-check-scope-container"),
        r = a.querySelectorAll(n, ".js-checkbox-scope", HTMLInputElement),
        o = !0,
        s = !1,
        i = void 0;
        try {
            for (var u, l = r[Symbol.iterator](); ! (o = (u = l.next()).done); o = !0) {
                var d = u.value;
                d !== t && (d.checked = t.checked, d.disabled = t.checked)
            }
        } catch(e) {
            s = !0,
            i = e
        } finally {
            try { ! o && l.
                return && l.
                return ()
            } finally {
                if (s) throw i
            }
        }
    }), i.on("click", ".js-generate-integration-key",
    function() {
        i.fire(document, "facebox:close");
        var e = a.query(document, ".js-integration-key-management-wrapper");
        e.classList.add("downloading"),
        e.classList.contains("js-integration-key-multi") && (e.classList.add("has-keys"), setTimeout(function() {
            var e = a.query(document, ".js-integration-keys-container", HTMLElement);
            e && yu(e)
        },
        1e3))
    }), q(document).on("ajaxSuccess", ".js-remove-integration-key",
    function() {
        i.fire(document, "facebox:close");
        var e = this.getAttribute("data-key-id"),
        t = document.getElementById(e);
        if (t) {
            var n = a.closest(t, ".js-integration-keys-container", HTMLElement);
            n && yu(n)
        }
    }), q(document).on("ajaxError", ".js-remove-integration-key",
    function(e, t) {
        i.fire(document, "facebox:close");
        var n = a.query(document, ".js-integration-key-management-wrapper"),
        r = a.query(n, ".js-error-container"),
        o = a.query(r, ".js-error-message");
        switch (t.status) {
        case 500:
            o.innerHTML = "Oops, something went wrong.";
            break;
        case 404:
            o.innerHTML = "Oops, that key could not be found.";
            break;
        default:
            o.innerHTML = t.responseJSON.message
        }
        return n.classList.add("error"),
        !1
    }), i.on("click", ".js-error-dismiss",
    function() {
        var e = a.query(document, ".js-integration-keys-container", HTMLElement);
        e && yu(e)
    }), s.observe(".js-block-users-form",
    function(e) {
        Ca(e, !1)
    }), q(document).on("ajaxSuccess", ".js-block-users-form",
    function(e, t, n, r) {
        var o = a.query(document, ".js-user-block-settings-list"),
        s = a.query(o, ".js-blocked-list");
        Ca(this);
        var i = this.querySelector(".js-add-blocked-user-field");
        d.changeValue(i, ""),
        function(e) {
            document.querySelector(".js-blocked-user-list") || a.query(e, ".blankslate").classList.add("d-none")
        } (o),
        s.insertAdjacentHTML("afterbegin", r)
    }), i.on("autocomplete:autocompleted:changed", ".js-add-blocked-user-field",
    function() {
        Ca(this.form, q(this).data("autocompleted"))
    }), l.remoteForm(".js-user-sessions-revoke",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(n, r) {
            var a, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    r.text();
                case 2:
                    a = n.closest(".js-user-sessions-container"),
                    o = n.closest(".js-user-session"),
                    t(o, "null.js:12"),
                    o.remove(),
                    a && (s = a.querySelectorAll(".js-user-session").length, a.classList.toggle("has-active-sessions", s > 0));
                case 7:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), n.ready.then(function() {
        return q(".js-email-notice-trigger").focus(function() {
            return q(".js-email-notice").addClass("notice-highlight")
        }),
        q(".js-email-notice-trigger").blur(function() {
            return q(".js-email-notice").removeClass("notice-highlight")
        })
    }), s.observe(".js-plan-choice:checked", {
        add: function(e) {
            return q(e).closest(".plan-row").addClass("selected")
        },
        remove: function(e) {
            return q(e).closest(".plan-row").removeClass("selected")
        }
    }), s.observe(".js-setup-organization:checked", {
        add: function() {
            var e = q(".js-choose-plan-submit");
            return e.attr("data-default-text") || e.attr("data-default-text", e.text()),
            e.text(e.attr("data-org-text"))
        },
        remove: function() {
            var e = q(".js-choose-plan-submit");
            return e.text(e.attr("data-default-text"))
        }
    });
    var bu = new WeakMap;s.observe(".js-signup-form",
    function(e) {
        e.addEventListener("input",
        function(t) {
            if (t.target.closest("input[type=text]") && !bu.get(e)) {
                var n = e.querySelector(".js-signup-source");
                R.trackEvent({
                    category: "Signup",
                    action: "Attempt",
                    label: n.value
                }),
                bu.set(e, !0)
            }
        })
    }), o.onKey("keyup", ".js-site-search-field",
    function(e) {
        var t = c(e.target, HTMLInputElement),
        n = 0 === t.value.length;
        n && "Backspace" === e.key && t.classList.contains("is-clearable") && Ia(t, !1),
        n && "Escape" === e.key && Ia(t, !0),
        t.classList.toggle("is-clearable", n)
    }), o.onFocus(".js-site-search-focus",
    function(e) {
        function n() {
            r.classList.remove("focus"),
            t(e instanceof HTMLInputElement, "null.js:48"),
            0 === e.value.length && e.classList.contains("js-site-search-field") && Ia(e, !0),
            e.removeEventListener("blur", n)
        }
        var r = a.closest(e, ".js-chromeless-input-container");
        r.classList.add("focus"),
        e.addEventListener("blur", n)
    }), i.on("submit", ".js-site-search-form",
    function(e) {
        a.query(c(e.target, HTMLFormElement), ".js-site-search-type-field", HTMLInputElement).value = new URLSearchParams(window.location.search).get("type")
    }), s.observe(".js-contact-javascript-flag",
    function(e) {
        e.value = "true"
    }), i.on("click", ".js-segmented-nav-button",
    function(e) {
        e.preventDefault();
        var n = e.currentTarget,
        r = n.getAttribute("data-selected-tab");
        t(r, "null.js:12");
        var o = a.closest(n, ".js-segmented-nav"),
        s = o.parentElement;
        t(s, "null.js:16");
        var i = !0,
        c = !1,
        u = void 0;
        try {
            for (var l, d = a.querySelectorAll(o, ".js-segmented-nav-button")[Symbol.iterator](); ! (i = (l = d.next()).done); i = !0) {
                l.value.classList.remove("selected")
            }
        } catch(e) {
            c = !0,
            u = e
        } finally {
            try { ! i && d.
                return && d.
                return ()
            } finally {
                if (c) throw u
            }
        }
        n.classList.add("selected");
        var m = !0,
        f = !1,
        v = void 0;
        try {
            for (var p, h = a.querySelectorAll(s, ".js-selected-nav-tab")[Symbol.iterator](); ! (m = (p = h.next()).done); m = !0) {
                p.value.classList.remove("active")
            }
        } catch(e) {
            f = !0,
            v = e
        } finally {
            try { ! m && h.
                return && h.
                return ()
            } finally {
                if (f) throw v
            }
        }
        a.query(document, "." + r).classList.add("active")
    }), i.on("click", ".js-keyboard-shortcuts",
    function(e) {
        Ra(),
        e.preventDefault()
    }), i.on("click", ".js-see-all-keyboard-shortcuts",
    function(e) {
        e.currentTarget.remove();
        a.query(document, ".facebox .js-hidden-pane").style.display = "table-row-group",
        e.preventDefault()
    }), n.ready.then(function() {
        document.body && document.body.addEventListener("keypress",
        function(e) {
            if (e.target instanceof HTMLElement) {
                var t = e.target === document.body,
                n = e.target.classList.contains("facebox-header"); (t || n) && "?" === e.key && (Array.from(document.querySelectorAll(".facebox")).some(E) ? w.close() : Ra(), e.preventDefault())
            }
        })
    }), s.observe(".js-site-status-container",
    function(e) {
        var t = e.querySelector(".js-site-status-message"),
        n = e.querySelector(".js-site-status-time"),
        r = e.querySelector(".flash"),
        o = a.query(document, "meta[name=site-status-api-url]", HTMLMetaElement).content;
        window.fetch(o).then(function(e) {
            return e.json()
        }).then(function(a) {
            if (null != a.status && "good" !== a.status) {
                t.textContent = a.body,
                n.setAttribute("datetime", a.created_on);
                var o = "major" === a.status ? "error": "warn";
                r.classList.add("flash-" + o),
                e.classList.remove("d-none")
            }
        })
    }), q(document).on("ajaxSend", ".js-action-ldap-create",
    function() {
        return q(this).find(".btn-sm").addClass("disabled")
    }), q(document).on("ajaxError", ".js-action-ldap-create",
    function() {
        return ! 1
    }), q(document).on("ajaxComplete", ".js-action-ldap-create",
    function(e, t) {
        var n = q(this),
        r = 500 === t.status ? "Oops, something went wrong.": t.responseText;
        return n.find(".js-message").show().html(" &ndash; " + r),
        200 === t.status && n.find(".btn").hide(),
        !1
    });
    var ju = null,
    Lu = new WeakMap;o.onKey("keydown", ".js-tree-finder-field",
    function(e) {
        "Escape" === e.key && (e.preventDefault(), history.back())
    }), s.observe(".js-tree-finder-field", {
        constructor: HTMLInputElement,
        initialize: function(e) {
            function t() {
                _a(e)
            }
            return t(),
            {
                add: function(e) {
                    m.addThrottledInputEventListener(e, t),
                    e.focus()
                },
                remove: function(e) {
                    m.removeThrottledInputEventListener(e, t)
                }
            }
        }
    });
    var wu = function() {
        var e = Ys(regeneratorRuntime.mark(function e(n, r) {
            var o, s, i, c, u;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return o = a.query(document, ".js-calendar-graph"),
                    s = o.getAttribute("data-graph-url"),
                    t(s, "null.js:122"),
                    i = new URL(s, window.location.origin),
                    (c = new URLSearchParams(i.search.slice(1))).append("from", Wa(n)),
                    c.append("to", Wa(r)),
                    c.append("full_graph", "1"),
                    i.search = c.toString(),
                    e.next = 11,
                    v.fetchSafeDocumentFragment(document, i.toString());
                case 11:
                    u = e.sent,
                    a.query(document, ".js-contribution-graph").replaceWith(u);
                case 13:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } (), xu = null, ku = null, Eu = null, Su = null;i.on("pjax:send", "#js-contribution-activity",
    function(e) {
        e.currentTarget.classList.add("loading")
    }), i.on("pjax:complete", "#js-contribution-activity",
    function(e) {
        e.currentTarget.classList.remove("loading")
    }), s.observe(".js-calendar-graph-svg",
    function(e) {
        var t = e.closest(".js-calendar-graph");
        t.addEventListener("mouseover", Pa),
        t.addEventListener("mouseout", Na);
        var n = t.getAttribute("data-from");
        n && (n = ku = Va(n));
        var r = t.getAttribute("data-to");
        r && (r = Va(r))
    }), i.on("click", ".js-calendar-graph rect.day",
    function(e) {
        t(e instanceof MouseEvent, "null.js:54");
        var n = e.currentTarget.getAttribute("data-date");
        t(n, "null.js:56"),
        $a(Va(n), e.shiftKey, !1)
    });
    var Tu = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];i.on("click", ".js-year-link",
    function(e) {
        e.stopPropagation();
        var t = a.query(document, ".js-year-link.selected"),
        n = e.target;
        t.classList.remove("selected"),
        n.classList.add("selected");
        var r = n.textContent,
        o = new Date,
        s = o.getUTCFullYear();
        if (parseInt(s) === parseInt(r)) {
            var i = o.getUTCMonth(),
            c = new Date(s, i, 1);
            wu(c, o)
        } else !
        function(e, t) {
            var n = new Date(Date.parse("1 " + e + " " + t + " 00:00:00 UTC")),
            r = new Date(Date.UTC(n.getUTCFullYear(), n.getUTCMonth() + 1, 0));
            wu(n, r)
        } ("December", r)
    }),
    function() {
        var e = window.location.hash;
        if (e && !(e.indexOf("#event-") < 0)) {
            var t = e.slice(1, e.length),
            n = document.getElementById(t);
            n && Ka(n)
        }
    } (), window.addEventListener("hashchange",
    function(e) {
        var t = e.newURL || window.location.href,
        n = t.slice(t.indexOf("#") + 1, t.length),
        r = document.getElementById(n);
        r && (e.stopPropagation(), Ka(r))
    }), s.observe(".js-profile-timeline-year-list.js-sticky",
    function(e) {
        c(document.getElementById("js-contribution-activity"), HTMLElement).style.minHeight = e.offsetHeight + "px"
    }), l.remoteForm(".js-show-more-timeline-form",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(n, r) {
            var o, s, i, u;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    r.text();
                case 2:
                    (o = document.querySelector(".js-show-more-timeline-form")) && (s = o.getAttribute("data-year"), t(null != s, "Missing attribute `data-year` -- null.js:355"), i = a.query(document, ".js-year-link.selected"), u = c(document.getElementById("year-link-" + s), HTMLElement), i.classList.remove("selected"), u.classList.add("selected")),
                    document.title = n.getAttribute("data-title"),
                    p.pushState(null, "", n.action);
                case 6:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), i.on("change", ".js-pinned-repos-selection-list input[type=checkbox]",
    function(e) {
        var t = c(e.currentTarget, HTMLInputElement),
        n = a.closest(t, ".js-pinned-repos-selection");
        n.classList.toggle("selected", t.checked);
        Ja(a.closest(n, ".js-pinned-repos-selection-list"))
    }), o.onKey("keydown", ".js-pinned-repos-filter",
    function(e) {
        t(e instanceof KeyboardEvent, "null.js:133"),
        "Enter" === L(e) && e.preventDefault()
    }), o.onInput(".js-pinned-repos-filter", Ya), i.on("change", ".js-pinned-repos-filter", Ya), i.on("search", ".js-pinned-repos-filter", Ya), i.on("change", ".js-pinned-repo-source", Ya), document.addEventListener("facebox:reveal",
    function() {
        var e = document.querySelector("#facebox .js-pinned-repos-settings-fragment");
        if (e) {
            var n = e.getAttribute("data-url");
            t(n, "`data-url` must exist -- null.js:149"),
            e.setAttribute("src", n)
        }
    });
    var qu = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t) {
            var n, r, o, s, i, c, u, l;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (n = t.oldIndex, r = t.newIndex, o = t.item, n !== r) {
                        e.next = 3;
                        break
                    }
                    return e.abrupt("return");
                case 3:
                    return s = a.closest(o, ".js-pinned-repos-reorder-form"),
                    i = a.closest(s, ".js-pinned-repos-reorder-container"),
                    c = a.query(i, ".js-pinned-repos-spinner"),
                    u = a.query(i, ".js-pinned-repos-reorder-message"),
                    u.textContent = "",
                    c.style.display = "inline-block",
                    Au.option("disabled", !0),
                    e.prev = 10,
                    e.next = 13,
                    v.fetchText(s.action, {
                        method: s.method,
                        body: new FormData(s)
                    });
                case 13:
                    u.textContent = u.getAttribute("data-success-text"),
                    c.style.display = "none",
                    Au.option("disabled", !1),
                    e.next = 23;
                    break;
                case 18:
                    e.prev = 18,
                    e.t0 = e.
                    catch(10),
                    u.textContent = u.getAttribute("data-error-text"),
                    l = o.parentNode,
                    Mu ? l.insertBefore(o, Mu) : l.appendChild(o);
                case 23:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[10, 18]])
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } (), Au = null, Mu = null;s.observe(".js-pinned-repos-reorder-list",
    function(e) {
        Au = K.create(e, {
            animation: 150,
            item: ".js-pinned-repo-list-item",
            handle: ".js-pinned-repository-reorder",
            onUpdate: qu,
            onStart: Za,
            chosenClass: "is-dragging"
        })
    }), i.on("submit", ".js-pinned-repos-reorder-form",
    function(e) {
        e.preventDefault()
    }), Qa(".js-pinned-repo-list-item", qu), s.observe(".js-user-profile-sticky-fields.is-stuck",
    function() {
        var e = a.query(document, ".js-user-profile-sticky-bar");
        return {
            add: function() {
                e.classList.add("is-stuck")
            },
            remove: function() {
                e.classList.remove("is-stuck")
            }
        }
    }), s.observe(".js-user-profile-follow-button.is-stuck",
    function() {
        var e = a.query(document, ".js-user-profile-sticky-bar");
        return {
            add: function() {
                e.classList.add("is-follow-stuck")
            },
            remove: function() {
                e.classList.remove("is-follow-stuck")
            }
        }
    }), s.observe(".js-user-profile-following-toggle .js-toggler-container.on",
    function() {
        var e = a.query(document, ".js-user-profile-following-mini-toggle .js-toggler-container");
        return {
            add: function() {
                e.classList.add("on")
            },
            remove: function() {
                e.classList.remove("on")
            }
        }
    }), s.observe(".js-user-profile-following-mini-toggle .js-toggler-container.on",
    function() {
        var e = a.query(document, ".js-user-profile-following-toggle .js-toggler-container");
        return {
            add: function() {
                e.classList.add("on")
            },
            remove: function() {
                e.classList.remove("on")
            }
        }
    }), s.observe(".js-length-limited-input", {
        add: function(e) {
            e.addEventListener("input", eo),
            e.addEventListener("change", eo)
        },
        remove: function(e) {
            e.removeEventListener("input", eo),
            e.removeEventListener("change", eo)
        }
    }), s.observe("link[rel=prefetch-viewed]", {
        initialize: function() {
            requestIdleCallback(function() {
                fetch(location.href, {
                    method: "HEAD",
                    credentials: "same-origin",
                    headers: {
                        Purpose: "prefetch-viewed"
                    }
                })
            })
        }
    }), s.observe(".js-manage-requests-tabs-item",
    function(e) {
        e.addEventListener("click",
        function() {
            var e = this.closest(".js-manage-memberships-container");
            e.querySelector(".js-manage-invitations-tabs-item").classList.remove("selected"),
            this.classList.add("selected");
            var t = e.querySelector(".js-manage-invitations-list"),
            n = e.querySelector(".js-manage-requests-list");
            t.classList.add("d-none"),
            n.classList.remove("d-none")
        })
    }), s.observe(".js-manage-invitations-tabs-item",
    function(e) {
        e.addEventListener("click",
        function() {
            var e = this.closest(".js-manage-memberships-container");
            e.querySelector(".js-manage-requests-tabs-item").classList.remove("selected"),
            this.classList.add("selected");
            var t = e.querySelector(".js-manage-requests-list"),
            n = e.querySelector(".js-manage-invitations-list");
            t.classList.add("d-none"),
            n.classList.remove("d-none")
        })
    }), i.on("change", ".js-milestone-edit-form", to), i.on("click", ".js-milestone-edit-form", to);
    var Hu = function() {
        var e = Ys(regeneratorRuntime.mark(function e(n) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (!b.hasInteractions(n)) {
                        e.next = 2;
                        break
                    }
                    return e.abrupt("return");
                case 2:
                    return r = n.getAttribute("data-url"),
                    t(r, "null.js:27"),
                    e.next = 6,
                    v.fetchSafeDocumentFragment(document, r);
                case 6:
                    a = e.sent,
                    W.preserveInteractivePosition(function() {
                        n.replaceWith(a)
                    });
                case 8:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } (), Cu = new WeakMap;i.on("socket:message", ".js-milestone-issues",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (n = t.currentTarget, "1" !== (r = a.query(n, ".js-draggable-issues-container")).getAttribute("data-is-sorting")) {
                        e.next = 5;
                        break
                    }
                    return r.removeAttribute("data-is-sorting"),
                    e.abrupt("return");
                case 5:
                    return e.next = 7,
                    J();
                case 7:
                    Hu(n);
                case 8:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } ()), l.remoteForm(".js-milestone-sort-form",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.json();
                case 2:
                    r = e.sent,
                    o = r.json,
                    (s = a.query(t, ".js-milestone-reorder-feedback")).textContent = "",
                    o.error ? a.query(t, ".js-milestone-changed").classList.remove("d-none") : (a.query(t, ".js-timestamp", HTMLInputElement).value = o.updated_at, s.textContent = s.getAttribute("data-success-text") || "");
                case 7:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ());
    var Iu = u(function(e) {
        var t = e.newIndex,
        n = e.item,
        r = a.closest(n, ".js-draggable-issues-container"),
        o = n.getAttribute("data-id"),
        s = function(e, t) {
            return e.querySelectorAll(".js-draggable-issue")[t]
        } (r, t - 1),
        i = s && s.getAttribute("data-id"),
        c = a.closest(r, ".js-milestone-sort-form");
        a.query(c, ".js-item-id", HTMLInputElement).value = o,
        a.query(c, ".js-prev-id", HTMLInputElement).value = i || "",
        R.trackEvent({
            category: "Milestone",
            action: "reorder",
            label: e.trackingLabel || "drag-and-drop"
        }),
        r.setAttribute("data-is-sorting", "1"),
        d.submit(c)
    },
    200);Qa(".js-draggable-issue", Iu), i.on("navigation:keydown", ".js-draggable-issue",
    function(e) {
        t(e instanceof CustomEvent, "null.js:105");
        var n = e.currentTarget,
        r = a.closest(n, ".js-draggable-issues-container");
        if ("J" === e.detail.hotkey) {
            var o = n.nextElementSibling;
            o && (o.after(n), no(r, n), e.preventDefault(), e.stopPropagation())
        } else if ("K" === e.detail.hotkey) {
            var s = n.previousElementSibling;
            s && (s.before(n), no(r, n), e.preventDefault(), e.stopPropagation())
        }
    }), s.observe(".js-draggable-issues-container", {
        add: function(e) {
            if (!Cu.has(e)) {
                var t = K.create(e, {
                    animation: 150,
                    item: ".js-draggable-issue",
                    handle: ".js-drag-handle",
                    onUpdate: Iu,
                    chosenClass: "is-dragging"
                });
                Cu.set(e, t)
            }
        },
        remove: function(e) {
            var t = Cu.get(e);
            t && t.destroy()
        }
    }), i.on("submit", ".js-mobile-preference-form",
    function() {
        this.querySelector(".js-mobile-preference-anchor-field").value = window.location.hash.substr(1)
    }), l.remoteForm(".js-setting-toggle",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return r = a.query(t, ".js-status-indicator"),
                    ro(r, "status-indicator-loading"),
                    e.prev = 2,
                    e.next = 5,
                    n.text();
                case 5:
                    e.next = 10;
                    break;
                case 7:
                    e.prev = 7,
                    e.t0 = e.
                    catch(2),
                    ro(r, "status-indicator-failed");
                case 10:
                    ro(r, "status-indicator-success");
                case 11:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[2, 7]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), i.on("change", ".js-toggle-email-settings input",
    function() {
        var e = a.query(document, ".js-notification-emails"),
        t = document.querySelector(".js-toggle-email-settings input:checked");
        e.classList.toggle("d-none", !t)
    }), l.remoteForm(".js-unignore-form, .js-ignore-form, .js-unsubscribe-form, .js-subscribe-form",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return (r = a.closest(t, ".js-subscription-row")).classList.add("loading"),
                    e.prev = 2,
                    e.next = 5,
                    n.text();
                case 5:
                    e.next = 13;
                    break;
                case 7:
                    e.prev = 7,
                    e.t0 = e.
                    catch(2),
                    r.classList.remove("loading"),
                    (o = a.query(t, ".btn-sm")).classList.add("btn-danger"),
                    o.setAttribute("title", r.getAttribute("data-error-message") || "");
                case 13:
                    r.classList.remove("loading"),
                    t.classList.contains("js-unignore-form") || t.classList.contains("js-unsubscribe-form") ? r.classList.add("unsubscribed") : (t.classList.contains("js-ignore-form") || t.classList.contains("js-subscribe-form")) && r.classList.remove("unsubscribed");
                case 15:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[2, 7]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), l.remoteForm(".js-thread-subscribe-form",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.text();
                case 2:
                    r = e.sent,
                    o = a.closest(t, ".js-thread-subscription-status"),
                    r && O.replaceContent(o, r.text);
                case 5:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), s.observe("#js-oauth-authorize-btn",
    function(e) {
        $e(document).then(function() {
            setTimeout(function() {
                t(e instanceof HTMLButtonElement, "null.js:10"),
                e.disabled = !1
            },
            1e3)
        })
    });
    var Ru = function() {
        var e = Ys(regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.loaded;
                case 2:
                    (t = document.querySelector(".js-show-discussion .js-mark-notification-form")) instanceof HTMLFormElement && d.submit(t);
                case 4:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function() {
            return e.apply(this, arguments)
        }
    } ();i.on("click", ".js-team-discussions-team-description-toggle",
    function() {
        a.query(document, ".js-team-discussions-team-description").classList.toggle("d-none"),
        a.query(document, ".js-team-discussions-team-description-form").classList.toggle("d-none")
    }), i.on("click", ".js-team-discussions-post-toggle",
    function(e) {
        var t = a.closest(e.target, ".js-teams-write-a-post");
        t.classList.contains("active") || (t.classList.add("active"), a.query(t, ".js-team-discussions-post-compose").classList.remove("d-none"), a.query(t, ".js-post-placeholder").classList.add("d-none"), a.query(t, ".js-title-field").focus())
    }), i.on("click", ".js-hide-post-form",
    function(e) {
        ao(e.target);
        oo(a.closest(e.target, ".js-new-comment-form", HTMLFormElement))
    }), i.on("click", ".js-hide-inline-comment-form",
    function(e) {
        so(e.target)
    }), l.remoteForm(".js-new-comment-form",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.text();
                case 2:
                    ao(t),
                    oo(t),
                    so(t);
                case 5:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), l.remoteForm(".js-team-discussions-team-description-form",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.prev = 0,
                    e.next = 3,
                    n.text();
                case 3:
                    e.next = 7;
                    break;
                case 5:
                    e.prev = 5,
                    e.t0 = e.
                    catch(0);
                case 7:
                    r = a.query(document, ".js-team-discussions-team-description"),
                    o = a.query(r, ".description"),
                    s = a.query(document, ".js-team-discussions-team-description-field", HTMLTextAreaElement),
                    r.classList.toggle("d-none"),
                    t.classList.toggle("d-none"),
                    s.value.trim() ? (o.textContent = s.value, s.defaultValue = s.value) : (o.textContent = "This team has no description", s.defaultValue = "");
                case 13:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[0, 5]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), l.remoteForm(".js-comment-pin",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o, s, i, c, u, l, d;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return (r = a.query(t, "button[type=submit]")).blur(),
                    e.next = 4,
                    n.text();
                case 4:
                    o = a.query(t, 'input[name="team_discussion[pinned]"]', HTMLInputElement),
                    s = document.querySelector("#pinned_posts_counter"),
                    i = r.getAttribute("aria-label") || "",
                    c = r.getAttribute("data-alternate-aria-label") || "",
                    r.setAttribute("data-alternate-aria-label", i),
                    r.setAttribute("aria-label", c),
                    r.classList.toggle("pinned"),
                    u = r.classList.contains("pinned"),
                    s && (io(s, u ? 1 : -1), l = a.closest(s, ".js-pinned-post-tab"), !u && l.classList.contains("selected") &&
                    function(e) {
                        e.addEventListener("transitionend",
                        function(t) {
                            "opacity" === t.propertyName && e.remove()
                        },
                        {
                            once: !0
                        }),
                        e.classList.add("fade-out")
                    } (d = a.closest(t, ".js-comment-delete-container"))),
                    o.value = u ? "0": "1";
                case 14:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), l.remoteForm(".js-comment-delete",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, a, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.text();
                case 2:
                    r = t.closest(".discussion-post"),
                    (a = r && r.querySelector(".js-comment-pin button[type=submit]")) && a.classList.contains("pinned") && (o = document.querySelector("#pinned_posts_counter")) && io(o, -1);
                case 5:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), i.on("quote:selection", ".js-discussion-post",
    function(e) {
        var t = a.query(e.target, ".js-inline-comment-form-container");
        t.classList.add("open"),
        a.query(t, ".js-write-tab").click(),
        a.query(t, ".js-comment-field").focus()
    }), l.remoteForm(".js-comment-subscribe",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.text();
                case 2:
                    co(t, ".js-comment-unsubscribe");
                case 3:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), l.remoteForm(".js-comment-unsubscribe",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.text();
                case 2:
                    co(t, ".js-comment-subscribe");
                case 3:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), l.remoteForm(".js-discussion-post-update",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, a, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (r = t.closest(".js-comment")) {
                        e.next = 3;
                        break
                    }
                    return e.abrupt("return");
                case 3:
                    if (a = r.querySelector(".js-comment-title")) {
                        e.next = 6;
                        break
                    }
                    return e.abrupt("return");
                case 6:
                    return e.next = 8,
                    n.json();
                case 8:
                    o = e.sent,
                    a.textContent = o.json.title;
                case 10:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), i.on("selectmenu:selected", ".js-discussion-post-select-private",
    function(e) {
        uo(e, "1")
    }), i.on("selectmenu:selected", ".js-discussion-post-select-public",
    function(e) {
        uo(e, "0")
    }), Ru(), i.on("click", ".js-team-project-suggestion", mo), i.on("navigation:keyopen", ".js-team-project-suggestion", mo), i.on("click", ".js-notification-target",
    function(e) {
        if (0 === e.button) {
            fo(a.closest(e.currentTarget, ".js-notification"))
        }
    }), l.remoteForm(".js-delete-notification",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.html();
                case 2:
                    fo(r = a.closest(t, ".js-notification"));
                case 4:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), l.remoteForm(".js-mute-notification",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.html();
                case 2:
                    fo(r = a.closest(t, ".js-notification")),
                    r.classList.toggle("muted");
                case 5:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), l.remoteForm(".js-unmute-notification",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.html();
                case 2:
                    (r = a.closest(t, ".js-notification")).classList.toggle("muted");
                case 4:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), l.remoteForm(".js-mark-visible-as-read",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o, s, i, c, u, l, d, m, f;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.html();
                case 2:
                    for (r = a.closest(t, ".js-notifications-browser"), o = r.querySelectorAll(".unread"), s = !0, i = !1, c = void 0, e.prev = 7, u = o[Symbol.iterator](); ! (s = (l = u.next()).done); s = !0)(d = l.value).classList.remove("unread"),
                    d.classList.add("read");
                    e.next = 15;
                    break;
                case 11:
                    e.prev = 11,
                    e.t0 = e.
                    catch(7),
                    i = !0,
                    c = e.t0;
                case 15:
                    e.prev = 15,
                    e.prev = 16,
                    !s && u.
                    return && u.
                    return ();
                case 18:
                    if (e.prev = 18, !i) {
                        e.next = 21;
                        break
                    }
                    throw c;
                case 21:
                    return e.finish(18);
                case 22:
                    return e.finish(15);
                case 23:
                    (m = r.querySelector(".js-mark-visible-as-read")) && m.classList.add("mark-all-as-read-confirmed"),
                    (f = r.querySelector(".js-mark-as-read-confirmation")) && f.classList.add("mark-all-as-read-confirmed");
                case 27:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[7, 11, 15, 23], [16, , 18, 22]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), l.remoteForm(".js-mark-remaining-as-read",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.html();
                case 2:
                    r = a.closest(t, ".js-notifications-browser"),
                    (o = r.querySelector(".js-mark-remaining-as-read")) && o.classList.add("d-none"),
                    (s = r.querySelector(".js-mark-remaining-as-read-confirmation")) && s.classList.remove("d-none");
                case 7:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), i.on("navigation:keydown", ".js-notification",
    function(e) {
        t(e instanceof CustomEvent, "null.js:84");
        var n = e.currentTarget;
        switch (e.detail.hotkey) {
        case "I":
        case "e":
        case "y":
            d.submit(n.querySelector(".js-delete-notification")),
            e.preventDefault(),
            e.stopPropagation();
            break;
        case "M":
        case "m":
            d.submit(n.querySelector(".js-mute-notification")),
            e.preventDefault(),
            e.stopPropagation()
        }
    }), i.on("navigation:keyopen", ".js-notification",
    function(e) {
        fo(e.currentTarget)
    }), l.remoteForm(".js-notifications-subscription",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return (r = a.query(t, ".js-spinner")).classList.remove("d-none"),
                    e.prev = 2,
                    e.next = 5,
                    n.html();
                case 5:
                    e.next = 9;
                    break;
                case 7:
                    e.prev = 7,
                    e.t0 = e.
                    catch(2);
                case 9:
                    r.classList.add("d-none");
                case 10:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[2, 7]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), i.on("change", ".js-pulse-period",
    function(e) {
        var n = e.target.getAttribute("data-url");
        t(n, "null.js:9");
        var r = document.getElementById("js-repo-pjax-container");
        t(r, "null.js:11"),
        zs({
            url: n,
            container: r
        })
    }), document.addEventListener("pjax:end",
    function() {
        setTimeout(function() {
            var e = a.query(document, 'meta[name="selected-link"]', HTMLMetaElement).getAttribute("value");
            if (null != e) {
                var t = !0,
                n = !1,
                r = void 0;
                try {
                    for (var o, s = a.querySelectorAll(document, ".js-sidenav-container-pjax .js-selected-navigation-item")[Symbol.iterator](); ! (t = (o = s.next()).done); t = !0) {
                        var i = o.value,
                        c = (i.getAttribute("data-selected-links") || "").split(" ").some(function(t) {
                            return t === e
                        });
                        i.classList.toggle("selected", c)
                    }
                } catch(e) {
                    n = !0,
                    r = e
                } finally {
                    try { ! t && s.
                        return && s.
                        return ()
                    } finally {
                        if (n) throw r
                    }
                }
            }
        })
    }), i.on("socket:message", ".js-notification-indicator",
    function(e) {
        t(e instanceof CustomEvent, "null.js:9");
        var n = e.currentTarget,
        r = e.detail.data;
        n.setAttribute("aria-label", r.aria_label),
        n.setAttribute("data-ga-click", r.ga_click),
        n.querySelector("span").setAttribute("class", r.span_class)
    });
    var _u = null;i.on("pjax:click", ".js-pjax-capture-input",
    function() {
        _u = function(e) {
            var n = e.createElement("textarea");
            return n.style.position = "fixed",
            n.style.top = "0",
            n.style.left = "0",
            n.style.opacity = "0",
            t(e.body, "null.js:18"),
            e.body.appendChild(n),
            n.focus(),
            function() {
                return n.blur(),
                n.remove(),
                n.value
            }
        } (document)
    }), i.on("pjax:end", "#js-repo-pjax-container",
    function() {
        if (_u) {
            var e = _u(),
            t = document.querySelector(".js-pjax-restore-captured-input");
            t instanceof HTMLInputElement && e && d.changeValue(t, e),
            _u = null
        }
    }), i.on("pjax:click", ".js-pjax-history-navigate",
    function(e) {
        t(e instanceof CustomEvent, "null.js:15"),
        this.href === p.getBackURL() ? (history.back(), e.detail.relatedEvent.preventDefault(), e.preventDefault()) : this.href === p.getForwardURL() && (history.forward(), e.detail.relatedEvent.preventDefault(), e.preventDefault())
    }), s.observe("link[rel=pjax-prefetch]", {
        initialize: function(e) {
            var t = U.fetch(e, {
                headers: {
                    Purpose: "prefetch"
                }
            });
            G.setPrefetchResponse(e, t)
        }
    });
    var Fu = document.querySelector("meta[name=js-proxy-site-detection-payload]"), Pu = document.querySelector("meta[name=expected-hostname]");
    if (Fu instanceof HTMLMetaElement && Pu instanceof HTMLMetaElement && h(document)) {
        var Nu = {
            url: window.location.href,
            expectedHostname: Pu.content,
            documentHostname: document.location.hostname,
            proxyPayload: Fu.content
        },
        Ou = new Error,
        Du = {};
        Du.$__ = btoa(JSON.stringify(Nu)),
        r.reportError(Ou, Du)
    }
    i.on("selectmenu:select", ".js-pull-base-branch-item",
    function(e) {
        var t = a.closest(e.currentTarget, ".js-select-menu");
        j.deactivate(t),
        e.preventDefault();
        a.query(t, ".js-pull-change-base-branch-field", HTMLInputElement).value = e.currentTarget.getAttribute("data-branch") || "";
        var n = a.query(t, ".js-change-base-facebox");
        Us(n.innerHTML)
    });
    var Bu = function() {
        var e = Ys(regeneratorRuntime.mark(function e(n) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (a = function(e) {
                        t(e.target instanceof HTMLElement, "null.js:61"),
                        vo(n, r, e.target)
                    },
                    r = n.querySelector(".js-navigation-item.navigation-focus")) {
                        e.next = 4;
                        break
                    }
                    return e.abrupt("return");
                case 4:
                    return vo(n, r, r),
                    n.addEventListener("navigation:focus", a),
                    e.next = 8,
                    new Promise(function(e) {
                        return window.addEventListener("keyup", e, {
                            once: !0
                        })
                    });
                case 8:
                    n.removeEventListener("navigation:focus", a),
                    po(n);
                case 10:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } ();i.on("navigation:open", ".js-diffbar-commits-list .js-navigation-item",
    function(e) {
        if (t(e instanceof CustomEvent, "null.js:83"), e.detail.shiftKey) {
            e.preventDefault();
            var n = e.currentTarget.closest(".js-diffbar-commits-menu");
            if (e.currentTarget.classList.contains("is-range-selected")) {
                e.stopPropagation();
                var r = n.querySelectorAll(".js-navigation-item.is-range-selected"),
                a = r[0],
                o = r[r.length - 1],
                s = n.getAttribute("data-range-url"),
                i = a.getAttribute("data-parent-commit"),
                c = o.getAttribute("data-commit"),
                u = i && c ? i + ".." + c: c,
                l = s.replace("$range", u),
                d = document.getElementById("js-repo-pjax-container");
                t(d, "null.js:105"),
                zs({
                    url: l,
                    container: d
                })
            } else e.stopImmediatePropagation(),
            Bu(n)
        }
    }), i.on("click", ".js-compare-tab",
    function(e) {
        var n = !0,
        r = !1,
        o = void 0;
        try {
            for (var s, i = document.querySelectorAll(".js-compare-tab.selected")[Symbol.iterator](); ! (n = (s = i.next()).done); n = !0) {
                s.value.classList.remove("selected")
            }
        } catch(e) {
            r = !0,
            o = e
        } finally {
            try { ! n && i.
                return && i.
                return ()
            } finally {
                if (r) throw o
            }
        }
        e.currentTarget.classList.add("selected");
        var c = !0,
        u = !1,
        l = void 0;
        try {
            for (var d, m = document.querySelectorAll("#commits_bucket, #files_bucket, #commit_comments_bucket")[Symbol.iterator](); ! (c = (d = m.next()).done); c = !0) {
                d.value.classList.add("d-none")
            }
        } catch(e) {
            u = !0,
            l = e
        } finally {
            try { ! c && m.
                return && m.
                return ()
            } finally {
                if (u) throw l
            }
        }
        t(e.currentTarget instanceof HTMLAnchorElement, "null.js:21");
        var f = e.currentTarget.hash;
        a.query(document, f).classList.remove("d-none"),
        e.preventDefault()
    }), I(function(e) {
        var t = e.target;
        if (t instanceof HTMLElement) {
            var n = t.closest("#commits_bucket, #files_bucket, #commit_comments_bucket");
            n && n instanceof HTMLElement && !E(n) && a.query(document, '.js-compare-tab[href="#' + n.id + '"]').click()
        }
    }), i.on("click", ".js-toggle-range-editor-cross-repo",
    function() {
        a.query(document, ".js-range-editor").classList.toggle("is-cross-repo")
    }), i.on("pjax:click", ".js-range-editor",
    function(e) {
        var n = document.querySelector(".js-compare-pr");
        if (n && n.classList.contains("open")) {
            t(e instanceof CustomEvent, "null.js:52");
            var r = e.detail.options,
            a = new URL(r.url);
            a.search.match(/expand=1/) || (a.search += (a.search ? "&": "") + "expand=1", r.url = a.toString())
        }
    }), i.on("navigation:open", ".js-commitish-form",
    function(e) {
        var n = e.currentTarget;
        t(n instanceof HTMLFormElement, "null.js:64");
        var r = document.createElement("input");
        r.type = "hidden",
        r.name = "new_compare_ref";
        var a = n.querySelector(".js-new-item-name");
        t(a, "null.js:69"),
        r.value = a.textContent,
        n.appendChild(r),
        d.submit(n)
    }), s.observe(".js-compare-pr.open", {
        add: function() {
            var e = document.body;
            t(e, "null.js:79"),
            e.classList.add("is-pr-composer-expanded")
        },
        remove: function() {
            var e = document.body;
            t(e, "null.js:84"),
            e.classList.remove("is-pr-composer-expanded")
        }
    });
    var Uu = void 0;s.observe("[data-favicon-override]", {
        add: function(e) {
            var n = e.getAttribute("data-favicon-override");
            t("string" == typeof n, "null.js:27"),
            setTimeout(function() {
                return ho(n)
            })
        },
        remove: function() {
            null != Uu && ho(Uu)
        }
    }), I(function() {
        if ("submit-review" === window.location.hash.slice(1)) {
            var e = document.querySelector(".js-reviews-container");
            j.activate(e)
        }
    }), l.remoteForm(".js-inline-comment-form",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.text();
                case 2:
                    go();
                case 3:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), l.remoteForm(".js-pending-review-comment .js-comment-delete",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.text();
                case 2:
                    go();
                case 3:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), i.on("click", ".js-review-menu-target",
    function(e) {
        e.stopImmediatePropagation(),
        t(e.currentTarget instanceof HTMLButtonElement, "null.js:55");
        var n = e.currentTarget.form;
        t(n, "null.js:57");
        var r = n.querySelector(".js-review-requests-menu");
        j.activate(r)
    }), l.remoteForm(".js-pick-reaction",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o, s, i, c, u;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.json();
                case 2:
                    r = e.sent,
                    j.deactivate(t.closest(".js-menu-container")),
                    o = a.closest(t, ".js-comment"),
                    s = a.query(o, ".js-reactions-container"),
                    i = a.query(o, ".js-comment-header-reaction-button"),
                    c = M.parseHTML(document, r.json.reactions_container.trim()),
                    u = M.parseHTML(document, r.json.comment_header_reaction_button.trim()),
                    s.replaceWith(c),
                    i.replaceWith(u),
                    o.classList.remove("is-reacting");
                case 12:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), i.on("toggle", ".js-reaction-popover-container",
    function(e) {
        var t = e.currentTarget.hasAttribute("open"),
        n = !0,
        r = !1,
        o = void 0;
        try {
            for (var s, i = e.target.querySelectorAll(".js-reaction-option-item")[Symbol.iterator](); ! (n = (s = i.next()).done); n = !0) {
                var c = s.value;
                t ? (c.addEventListener("mouseenter", yo), c.addEventListener("mouseleave", bo)) : (c.removeEventListener("mouseenter", yo), c.removeEventListener("mouseleave", bo))
            }
        } catch(e) {
            r = !0,
            o = e
        } finally {
            try { ! n && i.
                return && i.
                return ()
            } finally {
                if (r) throw o
            }
        }
        a.closest(e.target, ".js-comment").classList.toggle("is-reacting", t)
    },
    {
        capture: !0
    });
    var zu = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t) {
            var n, r, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (t.value) {
                        e.next = 2;
                        break
                    }
                    return e.abrupt("return");
                case 2:
                    if (t.value !== Ku.get(t)) {
                        e.next = 4;
                        break
                    }
                    return e.abrupt("return");
                case 4:
                    return Lo("is-loading"),
                    Ku.set(t, t.value),
                    n = new URL(t.getAttribute("data-url"), window.location.origin),
                    (r = new URLSearchParams(n.search.slice(1))).append("tag_name", t.value),
                    n.search = r.toString(),
                    e.prev = 10,
                    e.next = 13,
                    v.fetchJSON(n);
                case 13:
                    "duplicate" === (o = e.sent).status && parseInt(t.getAttribute("data-existing-id")) === parseInt(o.release_id) ? Lo("is-valid") : (a.query(document, ".js-release-tag .js-edit-release-link").setAttribute("href", o.url), Lo("is-" + o.status)),
                    e.next = 20;
                    break;
                case 17:
                    e.prev = 17,
                    e.t0 = e.
                    catch(10),
                    Lo("is-invalid");
                case 20:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[10, 17]])
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } (), Wu = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t) {
            var n, r, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return n = c(t.form, HTMLFormElement),
                    r = a.query(n, "#release_draft", HTMLInputElement),
                    r.value = "1",
                    jo(t, "is-saving"),
                    e.prev = 4,
                    e.next = 7,
                    v.fetchJSON(n.action, {
                        method: n.method,
                        body: new FormData(n)
                    });
                case 7:
                    return o = e.sent,
                    jo(t, "is-saved"),
                    setTimeout(jo, 5e3, t, "is-default"),
                    i.fire(n, "release:saved", {
                        release: o
                    }),
                    e.abrupt("return", o);
                case 14:
                    throw e.prev = 14,
                    e.t0 = e.
                    catch(4),
                    jo(t, "is-failed"),
                    e.t0;
                case 18:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[4, 14]])
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } ();i.on("click", ".js-save-draft",
    function(e) {
        var t = c(e.currentTarget, HTMLButtonElement);
        Wu(t),
        e.preventDefault()
    }), i.on("click", ".js-timeline-tags-expander",
    function(e) {
        var t = c(e.currentTarget, HTMLElement);
        a.closest(t, ".js-timeline-tags").classList.remove("is-collapsed")
    });
    var Vu = ["is-default", "is-saving", "is-saved", "is-failed"];i.on("release:saved", ".js-release-form",
    function(e) {
        t(e instanceof CustomEvent, "null.js:59");
        var n = e.detail.release,
        r = e.currentTarget,
        o = r.getAttribute("data-repo-url"),
        s = n.update_url || wo("tag", o, n.tag_name);
        if (r.setAttribute("action", s), n.update_authenticity_token) {
            r.querySelector("input[name=authenticity_token]").value = n.update_authenticity_token
        }
        var i = n.edit_url || wo("edit", o, n.tag_name);
        p.replaceState(U.getState(), document.title, i);
        var c = document.querySelector("#delete_release_confirm form");
        if (c) {
            var u = n.delete_url || wo("tag", o, n.tag_name);
            if (c.setAttribute("action", u), n.delete_authenticity_token) {
                a.query(c, "input[name=authenticity_token]", HTMLInputElement).value = n.delete_authenticity_token
            }
        }
        var l = r.querySelector("#release_id");
        if (!l.value) {
            l.value = n.id;
            var d = document.createElement("input");
            d.type = "hidden",
            d.name = "_method",
            d.value = "put",
            r.appendChild(d)
        }
    }), i.on("click", ".js-publish-release",
    function() {
        a.query(document, "#release_draft", HTMLInputElement).value = "0"
    });
    var $u = ["is-loading", "is-empty", "is-valid", "is-invalid", "is-duplicate", "is-pending"], Ku = new WeakMap;s.observe(".js-release-tag-field",
    function(e) {
        zu(e),
        e.addEventListener("blur",
        function() {
            zu(e)
        })
    }), i.on("change", ".js-release-tag",
    function(e) {
        xo(e.currentTarget)
    }), s.observe(".js-release-form .js-previewable-comment-form",
    function(e) {
        xo(e.closest("form").querySelector(".js-release-tag"))
    });
    var Ju = new WeakMap,
    Gu = 100;o.onFocus(".js-your-repositories-search",
    function(e) {
        ko(a.closest(e, ".js-repos-container"))
    }), s.observe(".js-your-repositories-search",
    function(e) {
        e.defaultValue.trim().length > 0 && To(e.closest(".js-repos-container"))
    }), o.onInput(".js-your-repositories-search",
    function(e) {
        var n = c(e.target, HTMLInputElement); !
        function(e) {
            var n = a.closest(e, ".js-repos-container"),
            r = e.getAttribute("data-query-name");
            t("string" == typeof r, "null.js:86");
            var o = !0,
            s = !1,
            i = void 0;
            try {
                for (var c, u = a.querySelectorAll(n, ".js-repo-filter-link", HTMLAnchorElement)[Symbol.iterator](); ! (o = (c = u.next()).done); o = !0) {
                    var l = c.value;
                    l.href = Eo(l.href, e.value.trim(), r)
                }
            } catch(e) {
                s = !0,
                i = e
            } finally {
                try { ! o && u.
                    return && u.
                    return ()
                } finally {
                    if (s) throw i
                }
            }
        } (n),
        function(e) {
            var n = e.getAttribute("data-url"),
            r = e.getAttribute("data-query-name");
            t("string" == typeof n && "string" == typeof r, "null.js:78"),
            p.replaceState(null, "", Eo(n, e.value.trim(), r))
        } (n)
    }), q(document).on("ajaxSend", ".js-more-repos-form",
    function(e) {
        a.query(e.target, ".js-more-repos-link", HTMLButtonElement).classList.add("is-loading")
    }), q(document).on("ajaxSuccess", ".js-more-repos-form",
    function(e) {
        var t = e.target.querySelector(".js-more-repos-link");
        t && t.classList.remove("is-loading");
        var n = a.closest(e.target, ".js-repos-container");
        So(n) && ko(n)
    }), s.observe(".js-more-repos-form",
    function(e) {
        var t = a.closest(e, ".js-repos-container");
        So(t) && ko(t),
        e.addEventListener("page:loaded",
        function() {
            To(t)
        })
    }), i.on("pjax:end", ".js-repos-container",
    function(e) {
        var t = c(e.target, HTMLElement); !
        function(e) {
            Ju.set(e, 0)
        } (t),
        To(t)
    });
    var Xu = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t) {
            var n, r, o, s, i, u, l, d, m, f, p;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (n = t.getAttribute("data-contents-url"), r = ee("SEARCH_SUGGESTIONS"), n) {
                        e.next = 4;
                        break
                    }
                    return e.abrupt("return");
                case 4:
                    return o = a.query(document, ".js-search-suggester"),
                    s = t.value.slice(0, t.selectionEnd).match(/\S*$/),
                    i = s ? s[0] : "",
                    u = new URL(n, window.location.origin),
                    (l = new URLSearchParams).append("query", i),
                    u.search = l.toString(),
                    e.next = 13,
                    v.fetchText(u.toString());
                case 13:
                    if ("" !== (d = e.sent).trim()) {
                        e.next = 17;
                        break
                    }
                    return Ao(),
                    e.abrupt("return");
                case 17:
                    o.innerHTML = d,
                    r && o.classList.remove("d-none"),
                    A.activate(o.querySelector(".js-navigation-container")),
                    m = a.query(o, ".js-search-suggester-helper"),
                    f = t.value.match(/(^|\s)[^\s:]+$/),
                    p = c(m.parentElement, HTMLElement),
                    f && (m.textContent = t.value),
                    p.classList.toggle("d-none", r && !f);
                case 25:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } ();s.observe(".js-search-suggester-field",
    function(e) {
        Xu(e),
        m.addThrottledInputEventListener(e,
        function() {
            qo(e) ? Xu(e) : Ao()
        })
    }), i.on("focusin", ".js-search-suggester-field",
    function(e) {
        var t = c(e.currentTarget, HTMLInputElement);
        qo(t) ? Xu(t) : Ao()
    }), i.on("focusout", ".js-search-suggester-field",
    function() {
        Ao()
    }), i.on("mousedown", ".js-search-suggester", Mo), i.on("navigation:keydown", ".js-search-suggester",
    function(e) {
        t(e instanceof CustomEvent, "null.js:101");
        var n = e.currentTarget.querySelector(".js-search-suggester .js-navigation-item.navigation-focus");
        switch (e.detail.hotkey) {
        case "Enter":
            n ? Mo(e) : d.submit(a.query(document, "#search_form", HTMLFormElement));
            break;
        case "Tab":
            n && Mo(e);
            break;
        case "ArrowLeft":
        case "ArrowRight":
        case "Escape":
            Ao()
        }
    }), q(document).on("ajaxSuccess", ".js-select-menu:not([data-multiple])",
    function(e) {
        j.deactivate(e.currentTarget)
    }), q(document).on("ajaxSend", ".js-select-menu:not([data-multiple])",
    function(e) {
        e.currentTarget.classList.add("is-loading")
    }), q(document).on("ajaxComplete", ".js-select-menu",
    function(e) {
        e.currentTarget.classList.remove("is-loading")
    }), q(document).on("ajaxError", ".js-select-menu",
    function(e) {
        e.currentTarget.classList.add("has-error")
    }), i.on("menu:deactivate", ".js-select-menu",
    function(e) {
        e.currentTarget.classList.remove("is-loading", "has-error")
    }), i.on("navigation:open", ".js-select-menu:not([data-multiple]) .js-navigation-item",
    function(e) {
        var t = e.currentTarget;
        if (i.fire(t, "selectmenu:select")) {
            var n = a.closest(t, ".js-select-menu"),
            r = n.querySelector(".js-navigation-item.selected");
            r && r.classList.remove("selected"),
            t.classList.add("selected"),
            t.classList.remove("indeterminate");
            var o = !0,
            s = !1,
            c = void 0;
            try {
                for (var u, l = a.querySelectorAll(t, "input[type=radio], input[type=checkbox]", HTMLInputElement)[Symbol.iterator](); ! (o = (u = l.next()).done); o = !0) {
                    var m = u.value;
                    d.changeValue(m, !0)
                }
            } catch(e) {
                s = !0,
                c = e
            } finally {
                try { ! o && l.
                    return && l.
                    return ()
                } finally {
                    if (s) throw c
                }
            }
            i.fire(t, "selectmenu:selected"),
            n.classList.contains("is-loading") || j.deactivate(n)
        }
    }), i.on("navigation:open", ".js-select-menu[data-multiple] .js-navigation-item",
    function(e) {
        var t = e.currentTarget;
        if (i.fire(t, "selectmenu:select")) {
            var n = t.classList.contains("selected");
            t.classList.toggle("selected"),
            t.classList.remove("indeterminate");
            var r = !0,
            o = !1,
            s = void 0;
            try {
                for (var c, u = a.querySelectorAll(t, "input[type=radio], input[type=checkbox]", HTMLInputElement)[Symbol.iterator](); ! (r = (c = u.next()).done); r = !0) {
                    var l = c.value;
                    d.changeValue(l, !n)
                }
            } catch(e) {
                o = !0,
                s = e
            } finally {
                try { ! r && u.
                    return && u.
                    return ()
                } finally {
                    if (o) throw s
                }
            }
            i.fire(t, "selectmenu:selected")
        }
    }), i.on("selectmenu:select", ".js-select-menu .js-navigation-item.disabled",
    function(e) {
        e.preventDefault()
    }), i.on("selectmenu:selected", ".js-select-menu .js-navigation-item",
    function(e) {
        var t = e.currentTarget,
        n = a.closest(t, ".js-select-menu"),
        r = t.querySelector(".js-select-button-text");
        if (r) {
            var o = n.querySelector(".js-select-button");
            o && (o.innerHTML = r.innerHTML)
        }
        var s = t.querySelector(".js-select-menu-item-gravatar");
        if (s) {
            var i = n.querySelector(".js-select-button-gravatar");
            i && (i.innerHTML = s.innerHTML)
        }
    }), i.on("selectmenu:change", ".js-select-menu .select-menu-list",
    function(e) {
        var t = e.currentTarget,
        n = Array.from(t.querySelectorAll(".js-navigation-item")),
        r = !0,
        a = !1,
        o = void 0;
        try {
            for (var s, i = n[Symbol.iterator](); ! (r = (s = i.next()).done); r = !0) {
                s.value.classList.remove("last-visible")
            }
        } catch(e) {
            a = !0,
            o = e
        } finally {
            try { ! r && i.
                return && i.
                return ()
            } finally {
                if (a) throw o
            }
        }
        var c = n.filter(E).pop();
        if (c && c.classList.add("last-visible"), !t.hasAttribute("data-filterable-for")) {
            var u = e.target.classList.contains("filterable-empty");
            t.classList.toggle("filterable-empty", u)
        }
    }), i.on("menu:activated", ".js-select-menu", Ho), i.on("selectmenu:load", ".js-select-menu", Ho), i.on("menu:deactivate", ".js-select-menu",
    function() {
        var e = this.querySelector(".js-filterable-field");
        e && (e.value = "", i.fire(e, "filterable:change"));
        var t = !0,
        n = !1,
        r = void 0;
        try {
            for (var a, o = this.querySelectorAll(".js-navigation-item.selected")[Symbol.iterator](); ! (t = (a = o.next()).done); t = !0) {
                var s = a.value,
                c = s.querySelector("input[type=radio], input[type=checkbox]");
                c && s.classList.toggle("selected", c.checked)
            }
        } catch(e) {
            n = !0,
            r = e
        } finally {
            try { ! t && o.
                return && o.
                return ()
            } finally {
                if (n) throw r
            }
        }
        var u = document.activeElement;
        if (u && this.contains(u)) try {
            u.blur()
        } catch(e) {}
    }), i.on("menu:activate", ".js-select-menu",
    function(e) {
        var t = e.currentTarget.querySelector(":focus");
        t && t.blur();
        var n = e.currentTarget.querySelector(".js-menu-target");
        n && n.classList.add("selected");
        var r = e.currentTarget.querySelector(".js-navigation-container");
        r && A.push(r)
    }), i.on("menu:deactivate", ".js-select-menu",
    function(e) {
        var t = e.currentTarget.querySelector(".js-menu-target");
        t && t.classList.remove("selected");
        var n = e.currentTarget.querySelector(".js-navigation-container");
        n && A.pop(n)
    }), i.on("filterable:change", ".js-select-menu .select-menu-list", Co), i.on("selectmenu:tabchange", ".js-select-menu .select-menu-list", Co), i.on("filterable:change", ".js-select-menu .select-menu-list",
    function(e) {
        t(e instanceof CustomEvent, "null.js:22");
        var n = e.currentTarget,
        r = n.querySelector(".js-new-item-form");
        r && Io(n, r, e.detail.inputField.value),
        i.fire(e.target, "selectmenu:change")
    }), i.on("menu:activate", ".js-select-menu", Ro), i.on("selectmenu:load", ".js-select-menu", Ro), i.on("click", ".js-select-menu .js-select-menu-tab",
    function(e) {
        _o(this);
        var t = this.closest(".js-select-menu").querySelector(".js-filterable-field");
        if (t) {
            var n = this.getAttribute("data-filter-placeholder");
            n && t.setAttribute("placeholder", n),
            t.focus()
        }
        e.stopPropagation(),
        e.preventDefault()
    }), s.observe(".js-select-menu .js-select-menu-tab.selected", {
        add: function(e) {
            Fo(e, !0)
        },
        remove: function(e) {
            Fo(e, !1)
        }
    });l.remoteForm(".js-send-auth-code",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return Po(),
                    r = void 0,
                    e.prev = 2,
                    e.next = 5,
                    n.text();
                case 5:
                    r = e.sent,
                    e.next = 11;
                    break;
                case 8:
                    e.prev = 8,
                    e.t0 = e.
                    catch(2),
                    Oo(e.t0.response.text);
                case 11:
                    r && No();
                case 12:
                case "end":
                    return e.stop()
                }
            },
            e, void 0, [[2, 8]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), i.on("click", ".js-send-two-factor-code",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(n) {
            var r, o, s, i, u, l, d, m, f, p, h, g, y, b, j, L, w, x, k, E, S, T;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return r = c(n.currentTarget, HTMLButtonElement),
                    o = r.form,
                    t(o, "null.js:56"),
                    s = a.query(o, ".js-country-code-select", HTMLSelectElement).value,
                    i = a.query(o, ".js-sms-number", HTMLInputElement).value,
                    u = s + " " + i,
                    Po(),
                    null == (l = r.getAttribute("data-authenticity-token")) && (d = c(o.elements.namedItem("authenticity_token"), HTMLInputElement), l = d.value),
                    (m = new FormData).append("number", u),
                    m.append("authenticity_token", l),
                    e.prev = 12,
                    f = r.getAttribute("data-url"),
                    t(f, "null.js:77"),
                    e.next = 17,
                    v.fetch(f, {
                        method: "post",
                        body: m
                    });
                case 17:
                    for (No(), p = !0, h = !1, g = void 0, e.prev = 21, y = o.querySelectorAll(".js-2fa-enable")[Symbol.iterator](); ! (p = (b = y.next()).done); p = !0)((j = b.value) instanceof HTMLInputElement || j instanceof HTMLButtonElement) && (j.disabled = !1);
                    e.next = 29;
                    break;
                case 25:
                    e.prev = 25,
                    e.t0 = e.
                    catch(21),
                    h = !0,
                    g = e.t0;
                case 29:
                    e.prev = 29,
                    e.prev = 30,
                    !p && y.
                    return && y.
                    return ();
                case 32:
                    if (e.prev = 32, !h) {
                        e.next = 35;
                        break
                    }
                    throw g;
                case 35:
                    return e.finish(32);
                case 36:
                    return e.finish(29);
                case 37:
                    a.query(o, ".js-2fa-otp").focus(),
                    e.next = 66;
                    break;
                case 40:
                    if (e.prev = 40, e.t1 = e.
                    catch(12), !e.t1.response) {
                        e.next = 47;
                        break
                    }
                    return e.next = 45,
                    e.t1.response.text();
                case 45:
                    Oo(L = e.sent);
                case 47:
                    for (w = !0, x = !1, k = void 0, e.prev = 50, E = o.querySelectorAll(".js-2fa-enable")[Symbol.iterator](); ! (w = (S = E.next()).done); w = !0)((T = S.value) instanceof HTMLInputElement || T instanceof HTMLButtonElement) && (T.disabled = !0);
                    e.next = 58;
                    break;
                case 54:
                    e.prev = 54,
                    e.t2 = e.
                    catch(50),
                    x = !0,
                    k = e.t2;
                case 58:
                    e.prev = 58,
                    e.prev = 59,
                    !w && E.
                    return && E.
                    return ();
                case 61:
                    if (e.prev = 61, !x) {
                        e.next = 64;
                        break
                    }
                    throw k;
                case 64:
                    return e.finish(61);
                case 65:
                    return e.finish(58);
                case 66:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[12, 40], [21, 25, 29, 37], [30, , 32, 36], [50, 54, 58, 66], [59, , 61, 65]])
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } ()), i.on("click", ".js-enable-enable-two-factor-auth-button",
    function() {
        var e = a.query(document, ".js-enable-two-factor-auth-button", HTMLButtonElement);
        e.disabled = !1,
        e.removeAttribute("aria-label"),
        e.classList.remove("tooltipped")
    }), document.addEventListener("facebox:reveal",
    function() {
        if (document.querySelector("#facebox .js-two-factor-set-sms-fallback")) {
            var e = a.query(document, "#facebox .js-configure-sms-fallback .facebox-alert");
            e.textContent = "",
            e.classList.add("d-none"),
            a.query(document, "#facebox .js-configure-sms-fallback").classList.remove("d-none"),
            a.query(document, "#facebox .js-verify-sms-fallback").classList.add("d-none")
        }
    }), l.remoteForm(".js-two-factor-set-sms-fallback",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return r = void 0,
                    e.prev = 1,
                    e.next = 4,
                    n.text();
                case 4:
                    r = e.sent,
                    e.next = 11;
                    break;
                case 7:
                    switch (e.prev = 7, e.t0 = e.
                    catch(1), o = a.query(t, ".js-verify-sms-fallback .facebox-alert"), e.t0.response.status) {
                    case 422:
                    case 429:
                        o.textContent = e.t0.response.text,
                        o.classList.remove("d-none")
                    }
                case 11:
                    if (!r) {
                        e.next = 21;
                        break
                    }
                    e.t1 = r.status,
                    e.next = 200 === e.t1 ? 15 : 201 === e.t1 ? 15 : 202 === e.t1 ? 17 : 21;
                    break;
                case 15:
                    return window.location.reload(),
                    e.abrupt("break", 21);
                case 17:
                    return a.query(t, ".js-configure-sms-fallback").classList.add("d-none"),
                    a.query(t, ".js-verify-sms-fallback").classList.remove("d-none"),
                    a.query(t, ".js-fallback-otp").focus(),
                    e.abrupt("break", 21);
                case 21:
                case "end":
                    return e.stop()
                }
            },
            e, void 0, [[1, 7]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), o.onFocus(".js-skip-password-autofill",
    function(e) {
        t(e instanceof HTMLInputElement, "null.js:9"),
        e.type = "password"
    }), i.on("click", ".js-smoothscroll-anchor",
    function(e) {
        var t = e.currentTarget;
        if (t instanceof HTMLAnchorElement) {
            var n = H.findFragmentTarget(document, t.hash);
            n && (n.scrollIntoView({
                behavior: "smooth"
            }), e.preventDefault())
        }
    }), Ys(regeneratorRuntime.mark(function e() {
        var t;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
            case 0:
                if (!ee("SERVICE_WORKER") || !navigator.serviceWorker) {
                    e.next = 12;
                    break
                }
                return t = void 0,
                e.prev = 2,
                e.next = 5,
                navigator.serviceWorker.register("/service-worker.js");
            case 5:
                t = e.sent,
                e.next = 11;
                break;
            case 8:
                e.prev = 8,
                e.t0 = e.
                catch(2),
                console.error(e.t0);
            case 11:
                t && console.log("Service worker registration successful: ", t);
            case 12:
            case "end":
                return e.stop()
            }
        },
        e, this, [[2, 8]])
    }))();
    var Yu = te(function(e, t) { !
        function(t, n) {
            e.exports = t(n, navigator)
        } (function(e, t) {
            var n = function(r, a, o) {
                function s() {
                    d && (clearTimeout(d), d = null)
                }
                function i() {
                    L && (e.removeEventListener("online", b), e.removeEventListener("offline", j), L = !1)
                }
                function c(e) {
                    if (!y.shouldReconnect.handle1000 && 1e3 === e.code || g) v = 0;
                    else if (!1 !== t.onLine) {
                        var n = y.shouldReconnect(e, f);
                        "number" == typeof n && (d = setTimeout(u, n))
                    } else h = !0
                }
                function u() {
                    d = null,
                    (m = new WebSocket(r, a || void 0)).binaryType = f.binaryType,
                    v++,
                    f.dispatchEvent(Object.assign(new CustomEvent("connecting"), {
                        attempts: v,
                        reconnects: p
                    })),
                    l = setTimeout(function() {
                        l = null,
                        i(),
                        f.dispatchEvent(Object.assign(new CustomEvent("timeout"), {
                            attempts: v,
                            reconnects: p
                        }))
                    },
                    y.timeout),
                    ["open", "close", "message", "error"].forEach(function(e) {
                        m.addEventListener(e,
                        function(t) {
                            f.dispatchEvent(t);
                            var n = f["on" + e];
                            if ("function" == typeof n) return n.apply(f, arguments)
                        })
                    }),
                    y.ignoreConnectivityEvents || L || (e.addEventListener("online", b), e.addEventListener("offline", j), L = !0)
                }
                var l, d, m = {
                    close: function() {}
                },
                f = this,
                v = 0,
                p = -1,
                h = !1,
                g = !1,
                y = Object.assign({},
                n.defaultOptions, "function" == typeof o ? {
                    shouldReconnect: o
                }: o);
                if ("number" != typeof y.timeout) throw new Error("timeout must be the number of milliseconds to timeout a connection attempt");
                if ("function" != typeof y.shouldReconnect) throw new Error("shouldReconnect must be a function that returns the number of milliseconds to wait for a reconnect attempt, or null or undefined to not reconnect."); ["bufferedAmount", "url", "readyState", "protocol", "extensions"].forEach(function(e) {
                    Object.defineProperty(f, e, {
                        get: function() {
                            return m[e]
                        }
                    })
                });
                var b = function(e) {
                    h && (s(), c(e))
                },
                j = function() {
                    h = !0,
                    m.close(1e3)
                },
                L = !1;
                f.send = function() {
                    return m.send.apply(m, arguments)
                },
                f.close = function(e, t) {
                    return "number" != typeof e && (t = e, e = 1e3),
                    s(),
                    h = !1,
                    g = !0,
                    i(),
                    m.close(e, t)
                },
                f.open = function() {
                    m.readyState !== WebSocket.OPEN && m.readyState !== WebSocket.CONNECTING && (s(), h = !1, g = !1, u())
                },
                Object.defineProperty(f, "listeners", {
                    value: {
                        open: [function(e) {
                            l && (clearTimeout(l), l = null),
                            e.reconnects = ++p,
                            e.attempts = v,
                            v = 0,
                            h = !1
                        }],
                        close: [c]
                    }
                }),
                Object.defineProperty(f, "attempts", {
                    get: function() {
                        return v
                    },
                    enumerable: !0
                }),
                Object.defineProperty(f, "reconnects", {
                    get: function() {
                        return p
                    },
                    enumerable: !0
                }),
                y.automaticOpen && u()
            };
            return n.defaultOptions = {
                timeout: 4e3,
                shouldReconnect: function(e, t) {
                    if (1008 !== e.code && 1011 !== e.code) return [0, 3e3, 1e4][t.attempts]
                },
                ignoreConnectivityEvents: !1,
                automaticOpen: !0
            },
            n.prototype.binaryType = "blob",
            n.prototype.addEventListener = function(e, t) {
                e in this.listeners || (this.listeners[e] = []),
                this.listeners[e].push(t)
            },
            n.prototype.removeEventListener = function(e, t) {
                if (e in this.listeners) for (var n = this.listeners[e], r = 0, a = n.length; r < a; r++) if (n[r] === t) return void n.splice(r, 1)
            },
            n.prototype.dispatchEvent = function(e) {
                if (e.type in this.listeners) for (var t = this.listeners[e.type], n = 0, r = t.length; n < r; n++) t[n].call(this, e)
            },
            n
        },
        "undefined" != typeof window ? window: Vs)
    }), Qu = {},
    Zu = {},
    el = null;s.observe(".js-socket-channel[data-channel]", {
        add: Bo,
        remove: function(e) {
            var t = !0,
            n = !1,
            r = void 0;
            try {
                for (var a, o = Do(e)[Symbol.iterator](); ! (t = (a = o.next()).done); t = !0) {
                    var s = a.value,
                    i = Zu[s];
                    if (i) {
                        var c = i.indexOf(e); - 1 !== c && i.splice(c, 1)
                    }
                }
            } catch(e) {
                n = !0,
                r = e
            } finally {
                try { ! t && o.
                    return && o.
                    return ()
                } finally {
                    if (n) throw r
                }
            }
        }
    }), s.observe("form.js-auto-replay-enforced-sso-request",
    function(e) {
        d.submit(e)
    });
    var tl = !1;Uo("form.js-sudo-required", "low"), Uo("form.js-high-risk-sudo-required", "high");
    var nl = function() {
        var e = Ys(regeneratorRuntime.mark(function e() {
            var n, r, o, s, i, c, u, l, d, m, f, p, h, g, y;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (n = a.query(document, ".js-tagsearch-popover"), r = a.query(n, ".js-tagsearch-popover-content"), o = a.query(n, ".js-tagsearch-popover-loader"), s = document.getSelection(), t(null != s, "Selection must not be null -- null.js:17"), !s.isCollapsed) {
                        e.next = 9;
                        break
                    }
                    return n.classList.add("d-none"),
                    j.deactivate(n),
                    e.abrupt("return");
                case 9:
                    if ((i = s.toString().trim()) && !i.match(/\n|\s|[();&.=",]/)) {
                        e.next = 12;
                        break
                    }
                    return e.abrupt("return");
                case 12:
                    if (null != s.anchorNode && s.anchorNode.parentNode instanceof HTMLElement) {
                        e.next = 14;
                        break
                    }
                    return e.abrupt("return");
                case 14:
                    if (c = s.anchorNode.parentNode.closest(".js-file-line-container")) {
                        e.next = 17;
                        break
                    }
                    return e.abrupt("return");
                case 17:
                    if (u = s.getRangeAt(0).getClientRects()[0], n.style.position = "absolute", n.style.top = window.scrollY + u.bottom + 6 + "px", n.style.left = window.scrollX + u.left + u.width / 2 + "px", r.innerHTML = "", o.classList.remove("d-none"), n.classList.remove("d-none"), j.activate(n), l = n.getAttribute("data-tagsearch-url"), d = n.getAttribute("data-tagsearch-path"), m = n.getAttribute("data-tagsearch-ref"), null != l && null != d && null != m) {
                        e.next = 30;
                        break
                    }
                    throw new Error("Missing attribute `data-tagsearch-url");
                case 30:
                    return f = new URL(l, window.location.origin),
                    (p = new URLSearchParams).set("q", i),
                    p.set("context", d),
                    p.set("ref", m),
                    f.search = p.toString(),
                    e.prev = 36,
                    e.next = 39,
                    v.fetchPoll(f);
                case 39:
                    return h = e.sent,
                    X.verifyResponseHtmlSafeNonce(X.getDocumentHtmlSafeNonce(document), h),
                    e.t0 = M.parseHTML,
                    e.t1 = document,
                    e.next = 45,
                    h.text();
                case 45:
                    e.t2 = e.sent,
                    g = (0, e.t0)(e.t1, e.t2),
                    o.classList.add("d-none"),
                    r.innerHTML = "",
                    r.append(g),
                    e.next = 57;
                    break;
                case 52:
                    e.prev = 52,
                    e.t3 = e.
                    catch(36),
                    y = a.query(n, ".js-tagsearch-popover-error"),
                    o.classList.add("d-none"),
                    y.classList.remove("d-none");
                case 57:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[36, 52]])
        }));
        return function() {
            return e.apply(this, arguments)
        }
    } (), rl = u(nl, 200);s.observe(".js-tagsearch-popover", {
        add: function() {
            document.addEventListener("selectionchange", rl)
        },
        remove: function() {
            document.removeEventListener("selectionchange", rl)
        }
    }), i.on("autocomplete:result", ".js-add-child-team-form",
    function(e) {
        t(e instanceof CustomEvent, "null.js:16");
        var n = e.detail.text,
        r = e.detail.query,
        o = c(e.currentTarget, HTMLFormElement),
        s = o.closest(".js-add-team-container");
        if (s) {
            if (zo(s, !0), "_new" === n) {
                var i = o.getAttribute("data-new-child-team-path");
                if (i) {
                    var u = new URL(i, window.location.origin),
                    l = new URLSearchParams(u.search.slice(1));
                    return l.append("name", r),
                    u.search = l.toString(),
                    void(window.location.href = u)
                }
            }
            var d = o.getAttribute("data-change-parent-summary-path");
            t(d, "null.js:40"),
            v.fetchSafeDocumentFragment(document, d).then(function(e) {
                a.query(o, ".js-add-team-search").classList.add("d-none"),
                a.query(o, ".js-add-team-warning").appendChild(e),
                zo(s, !1)
            })
        }
    }), i.on("click", ".js-add-child-team-form .js-confirm-change-parent",
    function(e) {
        var t = c(e.currentTarget, HTMLButtonElement).form,
        n = e.currentTarget.closest(".js-add-team-container");
        n && zo(n, !0),
        t && t.submit()
    }), i.on("click", ".js-expandable-team-breadcrumbs .js-team-breadcrumb-trigger",
    function(e) {
        t(e.target instanceof HTMLElement, "null.js:10");
        var n = a.closest(e.target, ".js-expandable-team-breadcrumbs");
        n && (n.classList.add("is-loading"), O.updateContent(n).
        catch().then(function() {
            n.classList.remove("is-loading")
        }))
    });
    var al = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n, r) {
            var a, o, s, i, c, u, l;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (!n.length) {
                        e.next = 24;
                        break
                    }
                    for (a = !0, o = !1, s = void 0, e.prev = 4, i = n[Symbol.iterator](); ! (a = (c = i.next()).done); a = !0)(u = c.value).classList.remove("d-none");
                    e.next = 12;
                    break;
                case 8:
                    e.prev = 8,
                    e.t0 = e.
                    catch(4),
                    o = !0,
                    s = e.t0;
                case 12:
                    e.prev = 12,
                    e.prev = 13,
                    !a && i.
                    return && i.
                    return ();
                case 15:
                    if (e.prev = 15, !o) {
                        e.next = 18;
                        break
                    }
                    throw s;
                case 18:
                    return e.finish(15);
                case 19:
                    return e.finish(12);
                case 20:
                    t.classList.add("is-open"),
                    sl = !1,
                    e.next = 30;
                    break;
                case 24:
                    return e.next = 26,
                    v.fetchSafeDocumentFragment(document, r);
                case 26:
                    l = e.sent,
                    t.after(l),
                    t.classList.add("is-open"),
                    sl = !1;
                case 30:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[4, 8, 12, 20], [13, , 15, 19]])
        }));
        return function(t, n, r) {
            return e.apply(this, arguments)
        }
    } (), ol = function() {
        var e = Ys(regeneratorRuntime.mark(function e(n) {
            var r, o, s, i, c;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return r = n.getAttribute("data-contents-url"),
                    t(r, "null.js:87"),
                    o = new URL(r, window.location.origin),
                    (s = new URLSearchParams(o.search.slice(1))).append("query", n.value.trim()),
                    o.search = s.toString(),
                    i = a.query(document, ".js-select-team-results"),
                    e.next = 9,
                    v.fetchSafeDocumentFragment(document, o);
                case 9:
                    c = e.sent,
                    i.innerHTML = "",
                    i.append(c);
                case 12:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } (), sl = !1;i.on("click", ".js-open-child-team",
    function(e) {
        if (!sl) {
            sl = !0;
            var n = e.currentTarget.getAttribute("data-parent-team-slug");
            if (n) {
                var r = document.querySelectorAll('.js-child-team[data-parent-team-slug="' + n + '"]'),
                o = a.closest(e.currentTarget, ".js-team-row");
                if (o.classList.contains("is-open")) e.currentTarget.setAttribute("aria-expanded", "false"),
                function(e, t) {
                    Wo(t),
                    e.classList.remove("is-open"),
                    sl = !1
                } (o, r);
                else {
                    e.currentTarget.setAttribute("aria-expanded", "true");
                    var s = e.currentTarget.getAttribute("data-child-team-url");
                    t(s, "null.js:29"),
                    al(o, r, s)
                }
            }
        }
    }), i.on("click", ".js-show-more-child-teams",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(n) {
            var r, o, s, i, c;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (!sl) {
                        e.next = 2;
                        break
                    }
                    return e.abrupt("return");
                case 2:
                    return sl = !0,
                    r = n.currentTarget,
                    o = a.closest(r, ".js-team-row"),
                    s = r.getAttribute("data-child-team-url"),
                    t(s, "null.js:74"),
                    i = o.parentNode,
                    e.next = 10,
                    v.fetchSafeDocumentFragment(document, s);
                case 10:
                    c = e.sent,
                    o.before(c),
                    i && i.removeChild(o),
                    sl = !1;
                case 14:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } ()), s.observe(".js-selected-team-field",
    function(e) {
        m.addThrottledInputEventListener(e, ol)
    }), i.on("menu:activated", ".js-select-team-menu",
    function(e) {
        var t = e.target.querySelector(".js-selected-team-field");
        t && t.focus()
    }), i.on("selectmenu:selected", ".js-select-team",
    function(e) {
        var t = e.currentTarget,
        n = t.getAttribute("data-selected-team-id") || "",
        r = a.query(document, "#selected-team-id", HTMLInputElement),
        o = a.query(t, ".js-selected-team-name").innerHTML,
        s = a.query(document, "#selected-team-name", HTMLInputElement);
        n !== r.value && (r.value = n, s.value = o)
    }), i.on("selectmenu:selected", ".js-clear-team-selection",
    function() {
        var e = a.query(document, ".js-select-button");
        e.textContent = e.getAttribute("data-placeholder") || "Select team"
    });
    var il = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t) {
            var n, r, o, s, i, c, u, l, d;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (n = document.getElementById("js-timeline-progressive-loader")) {
                        e.next = 3;
                        break
                    }
                    return e.abrupt("return");
                case 3:
                    if (r = n.getAttribute("data-timeline-item-src")) {
                        e.next = 6;
                        break
                    }
                    return e.abrupt("return");
                case 6:
                    return o = new URL(r, window.location.origin),
                    (s = new URLSearchParams(o.search.slice(1))).append("anchor", t),
                    o.search = s.toString(),
                    e.next = 12,
                    v.fetchSafeDocumentFragment(document, o);
                case 12:
                    if (i = e.sent, c = i.querySelector(".js-timeline-item")) {
                        e.next = 16;
                        break
                    }
                    return e.abrupt("return");
                case 16:
                    if (u = c.getAttribute("data-gid")) {
                        e.next = 19;
                        break
                    }
                    return e.abrupt("return");
                case 19:
                    (l = document.querySelector(".js-timeline-item[data-gid='" + u + "']")) ? (l.replaceWith(c), (d = document.getElementById(t)) && Vo(d)) : a.query(document, "#progressive-timeline-item-container").replaceWith(i);
                case 21:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } ();Ys(regeneratorRuntime.mark(function e() {
        var t, r;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
            case 0:
                return e.next = 2,
                n.ready;
            case 2:
                if (t = $o()) {
                    e.next = 5;
                    break
                }
                return e.abrupt("return");
            case 5:
                (r = document.getElementById(t)) || il(t);
            case 7:
            case "end":
                return e.stop()
            }
        },
        e, void 0)
    }))(), s.observe(".js-timeline-progressive-focus-container",
    function(e) {
        var t = $o();
        if (t) {
            var n = document.getElementById(t);
            n && e.contains(n) && Vo(n)
        }
    });
    var cl = "navigationStart";window.performance || window.performance.timing || window.addEventListener("pagehide",
    function() {
        S.setItem(cl, Date.now().toString())
    }),
    function() {
        var e = Ys(regeneratorRuntime.mark(function e() {
            var t, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.loaded;
                case 2:
                    return e.next = 4,
                    Y.delay(0);
                case 4:
                    (t = Jo()).length && ue({
                        resourceTimings: t
                    }),
                    (r = Go()).length && ue({
                        navigationTimings: r
                    });
                case 8:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function() {
            return e.apply(this, arguments)
        }
    } ()(), i.on("click", ".js-toggler-container .js-toggler-target",
    function(e) {
        if (1 === e.which) {
            this.closest(".js-toggler-container").classList.toggle("on")
        }
    }), q(document).on("ajaxSend", ".js-toggler-container",
    function() {
        this.classList.remove("success", "error"),
        this.classList.add("loading")
    }), q(document).on("ajaxComplete", ".js-toggler-container",
    function() {
        this.classList.remove("loading")
    }), q(document).on("ajaxSuccess", ".js-toggler-container",
    function() {
        this.classList.add("success")
    }), q(document).on("ajaxError", ".js-toggler-container",
    function() {
        this.classList.add("error")
    });
    var ul = function() {
        var e = Ys(regeneratorRuntime.mark(function e() {
            var n, r, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return Qo(!1),
                    n = a.query(document, "#topics-list-container"),
                    r = n.getAttribute("data-url"),
                    t(r, "`data-url` must exist -- null.js:55"),
                    e.next = 6,
                    v.fetchSafeDocumentFragment(document, r);
                case 6:
                    o = e.sent,
                    n.innerHTML = "",
                    n.appendChild(o);
                case 9:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function() {
            return e.apply(this, arguments)
        }
    } (), ll = function() {
        var e = Ys(regeneratorRuntime.mark(function e(n) {
            var r, a, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (r = n.querySelector(".js-topic-suggestions-container")) {
                        e.next = 3;
                        break
                    }
                    return e.abrupt("return");
                case 3:
                    return a = r.getAttribute("data-url"),
                    t(a, "`data-url` must exist -- null.js:69"),
                    e.next = 7,
                    v.fetchSafeDocumentFragment(document, a);
                case 7:
                    o = e.sent,
                    r.innerHTML = "",
                    r.appendChild(o);
                case 10:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } ();l.remoteForm(".js-accept-topic-form",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o, s, i, c, u;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.html();
                case 2:
                    r = a.closest(t, ".js-topic-form-area"),
                    o = a.closest(t, ".js-topic-suggestion"),
                    s = a.query(r, ".js-template"),
                    i = a.query(r, ".js-tag-input-selected-tags"),
                    c = s.cloneNode(!0),
                    u = a.query(o, 'input[name="input[name]"]', HTMLInputElement).value,
                    a.query(c, "input", HTMLInputElement).value = u,
                    a.query(c, ".js-placeholder-tag-name").replaceWith(u),
                    c.classList.remove("d-none", "js-template"),
                    i.appendChild(c),
                    o.remove(),
                    ll(r),
                    Yo(r),
                    Xo(t);
                case 16:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), i.on("click", ".js-repo-topics-form-done",
    function(e) {
        t(e.target instanceof HTMLElement, "null.js:103"),
        N.toggleDetailsTarget(e.target),
        ul()
    }), l.remoteForm(".js-decline-topic-form",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.html();
                case 2:
                    Xo(t),
                    r = a.closest(t, ".js-topic-form-area"),
                    (o = a.closest(t, ".js-topic-suggestion")).remove(),
                    ll(r),
                    Yo(r);
                case 8:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), l.remoteForm(".js-repo-topics-edit-form",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o, s, i, c, u, l, d, m, f, v, p, h, g, y, b, j, L, w, x, k, E;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    for ((r = a.closest(t, ".js-topic-form-area")).classList.remove("errored"), a.query(r, ".js-topic-error").textContent = "", o = !0, s = !1, i = void 0, e.prev = 6, c = r.querySelectorAll(".js-tag-input-tag.invalid-topic")[Symbol.iterator](); ! (o = (u = c.next()).done); o = !0)(l = u.value).classList.remove("invalid-topic");
                    e.next = 14;
                    break;
                case 10:
                    e.prev = 10,
                    e.t0 = e.
                    catch(6),
                    s = !0,
                    i = e.t0;
                case 14:
                    e.prev = 14,
                    e.prev = 15,
                    !o && c.
                    return && c.
                    return ();
                case 17:
                    if (e.prev = 17, !s) {
                        e.next = 20;
                        break
                    }
                    throw i;
                case 20:
                    return e.finish(17);
                case 21:
                    return e.finish(14);
                case 22:
                    return e.prev = 22,
                    e.next = 25,
                    n.json();
                case 25:
                    Xo(t),
                    ll(r),
                    e.next = 78;
                    break;
                case 29:
                    if (e.prev = 29, e.t1 = e.
                    catch(22), (d = e.t1.response.json).message && (r.classList.add("errored"), a.query(r, ".js-topic-error").textContent = d.message), !d.invalidTopics) {
                        e.next = 78;
                        break
                    }
                    m = t.querySelectorAll(".js-topic-input"),
                    f = !0,
                    v = !1,
                    p = void 0,
                    e.prev = 38,
                    h = d.invalidTopics[Symbol.iterator]();
                case 40:
                    if (f = (g = h.next()).done) {
                        e.next = 64;
                        break
                    }
                    for (y = g.value, b = !0, j = !1, L = void 0, e.prev = 45, w = m[Symbol.iterator](); ! (b = (x = w.next()).done); b = !0)(k = x.value).value === y && (E = a.closest(k, ".js-tag-input-tag")).classList.add("invalid-topic");
                    e.next = 53;
                    break;
                case 49:
                    e.prev = 49,
                    e.t2 = e.
                    catch(45),
                    j = !0,
                    L = e.t2;
                case 53:
                    e.prev = 53,
                    e.prev = 54,
                    !b && w.
                    return && w.
                    return ();
                case 56:
                    if (e.prev = 56, !j) {
                        e.next = 59;
                        break
                    }
                    throw L;
                case 59:
                    return e.finish(56);
                case 60:
                    return e.finish(53);
                case 61:
                    f = !0,
                    e.next = 40;
                    break;
                case 64:
                    e.next = 70;
                    break;
                case 66:
                    e.prev = 66,
                    e.t3 = e.
                    catch(38),
                    v = !0,
                    p = e.t3;
                case 70:
                    e.prev = 70,
                    e.prev = 71,
                    !f && h.
                    return && h.
                    return ();
                case 73:
                    if (e.prev = 73, !v) {
                        e.next = 76;
                        break
                    }
                    throw p;
                case 76:
                    return e.finish(73);
                case 77:
                    return e.finish(70);
                case 78:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[6, 10, 14, 22], [15, , 17, 21], [22, 29], [38, 66, 70, 78], [45, 49, 53, 61], [54, , 56, 60], [71, , 73, 77]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), i.on("tags:changed", ".js-repo-topics-edit-form",
    function(e) {
        d.submit(c(e.target, HTMLFormElement))
    }), i.on("click", ".js-repo-topics-form-toggle",
    function(e) {
        var n = a.closest(e.target, ".js-repo-meta-container"),
        r = n.querySelector(".js-repo-topics-form-fragment");
        if (r) {
            r.classList.remove("d-none");
            var o = r.getAttribute("data-url");
            t(o, "`data-url` must exist -- null.js:173"),
            r.setAttribute("src", o)
        }
        a.query(n, ".js-repository-topics-container").classList.contains("open") ? Qo(!0) : ul()
    }), i.on("click", ".js-edit-repo-meta-toggle",
    function(e) {
        var t = a.closest(e.target, ".js-repo-meta-container"),
        n = a.query(t, ".js-repo-meta-edit").classList.contains("open"),
        r = t.querySelector(".js-repository-topics-container");
        r && r.classList.toggle("d-none", n)
    }), i.on("click", ".js-reveal-hidden-topics",
    function(e) {
        var t = e.target,
        n = c(t.closest(".js-hidden-topics-container"), HTMLElement).querySelector(".js-hidden-topics");
        n && (n.classList.remove("d-none"), t.remove())
    }), s.observe(".js-touch-events", {
        add: function(e) {
            e.addEventListener("click", Zo)
        },
        remove: function(e) {
            e.removeEventListener("click", Zo)
        }
    }), requestIdleCallback(function() {
        var e = Q();
        if (e) {
            var t = "https:" === location.protocol ? "secure": "";
            document.cookie = "tz=" + encodeURIComponent(e) + "; path=/; " + t
        }
    }),
    function() {
        var e = "chrome" in window && window.navigator.userAgent.indexOf("Edge") < 0;
        if (! ("u2f" in window) && e) {
            var t, n = window.u2f = {};
            n.EXTENSION_ID = "kmendfapggjehodndflmmgagdbamhnfd",
            n.MessageTypes = {
                U2F_REGISTER_REQUEST: "u2f_register_request",
                U2F_REGISTER_RESPONSE: "u2f_register_response",
                U2F_SIGN_REQUEST: "u2f_sign_request",
                U2F_SIGN_RESPONSE: "u2f_sign_response",
                U2F_GET_API_VERSION_REQUEST: "u2f_get_api_version_request",
                U2F_GET_API_VERSION_RESPONSE: "u2f_get_api_version_response"
            },
            n.ErrorCodes = {
                OK: 0,
                OTHER_ERROR: 1,
                BAD_REQUEST: 2,
                CONFIGURATION_UNSUPPORTED: 3,
                DEVICE_INELIGIBLE: 4,
                TIMEOUT: 5
            },
            n.U2fRequest,
            n.U2fResponse,
            n.Error,
            n.Transport,
            n.Transports,
            n.SignRequest,
            n.SignResponse,
            n.RegisterRequest,
            n.RegisterResponse,
            n.RegisteredKey,
            n.GetJsApiVersionResponse,
            n.getMessagePort = function(e) {
                if ("undefined" != typeof chrome && chrome.runtime) {
                    var t = {
                        type: n.MessageTypes.U2F_SIGN_REQUEST,
                        signRequests: []
                    };
                    chrome.runtime.sendMessage(n.EXTENSION_ID, t,
                    function() {
                        chrome.runtime.lastError ? n.getIframePort_(e) : n.getChromeRuntimePort_(e)
                    })
                } else n.isAndroidChrome_() ? n.getAuthenticatorPort_(e) : n.isIosChrome_() ? n.getIosPort_(e) : n.getIframePort_(e)
            },
            n.isAndroidChrome_ = function() {
                var e = navigator.userAgent;
                return - 1 != e.indexOf("Chrome") && -1 != e.indexOf("Android")
            },
            n.isIosChrome_ = function() {
                return ["iPhone", "iPad", "iPod"].indexOf(navigator.platform) > -1
            },
            n.getChromeRuntimePort_ = function(e) {
                var t = chrome.runtime.connect(n.EXTENSION_ID, {
                    includeTlsChannelId: !0
                });
                setTimeout(function() {
                    e(new n.WrappedChromeRuntimePort_(t))
                },
                0)
            },
            n.getAuthenticatorPort_ = function(e) {
                setTimeout(function() {
                    e(new n.WrappedAuthenticatorPort_)
                },
                0)
            },
            n.getIosPort_ = function(e) {
                setTimeout(function() {
                    e(new n.WrappedIosPort_)
                },
                0)
            },
            n.WrappedChromeRuntimePort_ = function(e) {
                this.port_ = e
            },
            n.formatSignRequest_ = function(e, r, a, o, s) {
                if (void 0 === t || t < 1.1) {
                    for (var i = [], c = 0; c < a.length; c++) i[c] = {
                        version: a[c].version,
                        challenge: r,
                        keyHandle: a[c].keyHandle,
                        appId: e
                    };
                    return {
                        type: n.MessageTypes.U2F_SIGN_REQUEST,
                        signRequests: i,
                        timeoutSeconds: o,
                        requestId: s
                    }
                }
                return {
                    type: n.MessageTypes.U2F_SIGN_REQUEST,
                    appId: e,
                    challenge: r,
                    registeredKeys: a,
                    timeoutSeconds: o,
                    requestId: s
                }
            },
            n.formatRegisterRequest_ = function(e, r, a, o, s) {
                if (void 0 === t || t < 1.1) {
                    for (c = 0; c < a.length; c++) a[c].appId = e;
                    for (var i = [], c = 0; c < r.length; c++) i[c] = {
                        version: r[c].version,
                        challenge: a[0],
                        keyHandle: r[c].keyHandle,
                        appId: e
                    };
                    return {
                        type: n.MessageTypes.U2F_REGISTER_REQUEST,
                        signRequests: i,
                        registerRequests: a,
                        timeoutSeconds: o,
                        requestId: s
                    }
                }
                return {
                    type: n.MessageTypes.U2F_REGISTER_REQUEST,
                    appId: e,
                    registerRequests: a,
                    registeredKeys: r,
                    timeoutSeconds: o,
                    requestId: s
                }
            },
            n.WrappedChromeRuntimePort_.prototype.postMessage = function(e) {
                this.port_.postMessage(e)
            },
            n.WrappedChromeRuntimePort_.prototype.addEventListener = function(e, t) {
                var n = e.toLowerCase();
                "message" == n || "onmessage" == n ? this.port_.onMessage.addListener(function(e) {
                    t({
                        data: e
                    })
                }) : console.error("WrappedChromeRuntimePort only supports onMessage")
            },
            n.WrappedAuthenticatorPort_ = function() {
                this.requestId_ = -1,
                this.requestObject_ = null
            },
            n.WrappedAuthenticatorPort_.prototype.postMessage = function(e) {
                var t = n.WrappedAuthenticatorPort_.INTENT_URL_BASE_ + ";S.request=" + encodeURIComponent(JSON.stringify(e)) + ";end";
                document.location = t
            },
            n.WrappedAuthenticatorPort_.prototype.getPortType = function() {
                return "WrappedAuthenticatorPort_"
            },
            n.WrappedAuthenticatorPort_.prototype.addEventListener = function(e, t) {
                if ("message" == e.toLowerCase()) {
                    window.addEventListener("message", this.onRequestUpdate_.bind(this, t), !1)
                } else console.error("WrappedAuthenticatorPort only supports message")
            },
            n.WrappedAuthenticatorPort_.prototype.onRequestUpdate_ = function(e, t) {
                var n = JSON.parse(t.data),
                r = (n.intentURL, n.errorCode, null);
                n.hasOwnProperty("data") && (r = JSON.parse(n.data)),
                e({
                    data: r
                })
            },
            n.WrappedAuthenticatorPort_.INTENT_URL_BASE_ = "intent:#Intent;action=com.google.android.apps.authenticator.AUTHENTICATE",
            n.WrappedIosPort_ = function() {},
            n.WrappedIosPort_.prototype.postMessage = function(e) {
                var t = JSON.stringify(e),
                n = "u2f://auth?" + encodeURI(t);
                location.replace(n)
            },
            n.WrappedIosPort_.prototype.getPortType = function() {
                return "WrappedIosPort_"
            },
            n.WrappedIosPort_.prototype.addEventListener = function(e, t) {
                "message" !== e.toLowerCase() && console.error("WrappedIosPort only supports message")
            },
            n.getIframePort_ = function(e) {
                var t = "chrome-extension://" + n.EXTENSION_ID,
                r = document.createElement("iframe");
                r.src = t + "/u2f-comms.html",
                r.setAttribute("style", "display:none"),
                document.body.appendChild(r);
                var a = new MessageChannel,
                o = function(t) {
                    "ready" == t.data ? (a.port1.removeEventListener("message", o), e(a.port1)) : console.error('First event on iframe port was not "ready"')
                };
                a.port1.addEventListener("message", o),
                a.port1.start(),
                r.addEventListener("load",
                function() {
                    r.contentWindow.postMessage("init", t, [a.port2])
                })
            },
            n.EXTENSION_TIMEOUT_SEC = 30,
            n.port_ = null,
            n.waitingForPort_ = [],
            n.reqCounter_ = 0,
            n.callbackMap_ = {},
            n.getPortSingleton_ = function(e) {
                n.port_ ? e(n.port_) : (0 == n.waitingForPort_.length && n.getMessagePort(function(e) {
                    for (n.port_ = e, n.port_.addEventListener("message", n.responseHandler_); n.waitingForPort_.length;) n.waitingForPort_.shift()(n.port_)
                }), n.waitingForPort_.push(e))
            },
            n.responseHandler_ = function(e) {
                var t = e.data,
                r = t.requestId;
                if (r && n.callbackMap_[r]) {
                    var a = n.callbackMap_[r];
                    delete n.callbackMap_[r],
                    a(t.responseData)
                } else console.error("Unknown or missing requestId in response.")
            },
            n.sign = function(e, r, a, o, s) {
                void 0 === t ? n.getApiVersion(function(i) {
                    t = void 0 === i.js_api_version ? 0 : i.js_api_version,
                    console.log("Extension JS API Version: ", t),
                    n.sendSignRequest(e, r, a, o, s)
                }) : n.sendSignRequest(e, r, a, o, s)
            },
            n.sendSignRequest = function(e, t, r, a, o) {
                n.getPortSingleton_(function(s) {
                    var i = ++n.reqCounter_;
                    n.callbackMap_[i] = a;
                    var c = void 0 !== o ? o: n.EXTENSION_TIMEOUT_SEC,
                    u = n.formatSignRequest_(e, t, r, c, i);
                    s.postMessage(u)
                })
            },
            n.register = function(e, r, a, o, s) {
                void 0 === t ? n.getApiVersion(function(i) {
                    t = void 0 === i.js_api_version ? 0 : i.js_api_version,
                    console.log("Extension JS API Version: ", t),
                    n.sendRegisterRequest(e, r, a, o, s)
                }) : n.sendRegisterRequest(e, r, a, o, s)
            },
            n.sendRegisterRequest = function(e, t, r, a, o) {
                n.getPortSingleton_(function(s) {
                    var i = ++n.reqCounter_;
                    n.callbackMap_[i] = a;
                    var c = void 0 !== o ? o: n.EXTENSION_TIMEOUT_SEC,
                    u = n.formatRegisterRequest_(e, r, t, c, i);
                    s.postMessage(u)
                })
            },
            n.getApiVersion = function(e, t) {
                n.getPortSingleton_(function(r) {
                    if (r.getPortType) {
                        var a;
                        switch (r.getPortType()) {
                        case "WrappedIosPort_":
                        case "WrappedAuthenticatorPort_":
                            a = 1.1;
                            break;
                        default:
                            a = 0
                        }
                        e({
                            js_api_version: a
                        })
                    } else {
                        var o = ++n.reqCounter_;
                        n.callbackMap_[o] = e;
                        var s = {
                            type: n.MessageTypes.U2F_GET_API_VERSION_REQUEST,
                            timeoutSeconds: void 0 !== t ? t: n.EXTENSION_TIMEOUT_SEC,
                            requestId: o
                        };
                        r.postMessage(s)
                    }
                })
            }
        }
    } (), i.on("click", ".js-u2f-auth-retry",
    function() {
        ts()
    }), s.observe(".js-u2f-auth-form-body",
    function(e) {
        e.classList.toggle("unavailable", !es()),
        es() && ts()
    }), q(document).on("ajaxSend", ".js-u2f-registration-delete",
    function() {
        this.closest(".js-u2f-registration").classList.add("is-sending")
    }), q(document).on("ajaxSuccess", ".js-u2f-registration-delete",
    function(e, t) {
        os(t.responseJSON),
        this.closest(".js-u2f-registration").remove()
    }), i.on("click", ".js-add-u2f-registration-link",
    function() {
        var e = a.query(document, ".js-new-u2f-registration");
        e.classList.add("is-active"),
        e.classList.remove("is-showing-error");
        a.query(document, ".js-u2f-registration-nickname-field", HTMLInputElement).focus()
    }), i.on("click", ".js-u2f-register-retry",
    function() {
        cs()
    }), i.on("submit", ".js-add-u2f-registration-form",
    function(e) {
        e.preventDefault(),
        cs()
    }), s.observe(".js-u2f-box",
    function(e) {
        e.classList.toggle("available", es())
    }), i.on("socket:message", ".js-updatable-content",
    function(e) {
        t(e instanceof CustomEvent, "null.js:18");
        var n = e.detail.data;
        if (this === e.target) {
            var r = n && n.wait;
            null == r ? O.updateContent(e.target) : setTimeout(function() {
                t(e.target instanceof HTMLElement, "null.js:28"),
                O.updateContent(e.target)
            },
            r)
        }
    }), i.on("upload:setup", ".js-upload-avatar-image",
    function(e) {
        t(e instanceof CustomEvent, "null.js:9");
        var n = e.detail.policyRequest,
        r = e.currentTarget.getAttribute("data-alambic-organization"),
        a = e.currentTarget.getAttribute("data-alambic-owner-type"),
        o = e.currentTarget.getAttribute("data-alambic-owner-id");
        r && n.body.append("organization_id", r),
        a && n.body.append("owner_type", a),
        o && n.body.append("owner_id", o)
    }), i.on("upload:complete", ".js-upload-avatar-image",
    function(e) {
        t(e instanceof CustomEvent, "null.js:26");
        var n = "/settings/avatars/" + e.detail.result.id;
        Us(Ys(regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.t0 = Us,
                    e.next = 3,
                    v.fetchText(n);
                case 3:
                    e.t1 = e.sent,
                    (0, e.t0)(e.t1);
                case 5:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        })))
    });
    var dl = function() {
        function e(t) {
            Qs(this, e),
            this.dataview = new DataView(t),
            this.pos = 0
        }
        return Zs(e, null, [{
            key: "fromFile",
            value: function(n) {
                return new Promise(function(r, a) {
                    var o = new FileReader;
                    o.onload = function() {
                        t(o.result instanceof ArrayBuffer, "null.js:38"),
                        r(new e(o.result))
                    },
                    o.onerror = function() {
                        a(o.error)
                    },
                    o.readAsArrayBuffer(n)
                })
            }
        }]),
        Zs(e, [{
            key: "advance",
            value: function(e) {
                this.pos += e
            }
        },
        {
            key: "readInt",
            value: function(e) {
                var t = this,
                n = function() {
                    switch (e) {
                    case 1:
                        return t.dataview.getUint8(t.pos);
                    case 2:
                        return t.dataview.getUint16(t.pos);
                    case 4:
                        return t.dataview.getUint32(t.pos);
                    default:
                        throw new Error("bytes parameter must be 1, 2 or 4")
                    }
                } ();
                return this.advance(e),
                n
            }
        },
        {
            key: "readChar",
            value: function() {
                return this.readInt(1)
            }
        },
        {
            key: "readShort",
            value: function() {
                return this.readInt(2)
            }
        },
        {
            key: "readLong",
            value: function() {
                return this.readInt(4)
            }
        },
        {
            key: "readString",
            value: function(e) {
                for (var t = [], n = 0; n < e; n++) t.push(String.fromCharCode(this.readChar()));
                return t.join("")
            }
        },
        {
            key: "scan",
            value: function(e) {
                if (2303741511 !== this.readLong()) throw new Error("invalid PNG");
                for (this.advance(4);;) {
                    var t = this.readLong(),
                    n = this.readString(4),
                    r = this.pos + t + 4;
                    if (!1 === e.call(this, n, t) || "IEND" === n) break;
                    this.pos = r
                }
            }
        }]),
        e
    } (), ml = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t) {
            var n, r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if ("image/png" === t.type) {
                        e.next = 2;
                        break
                    }
                    return e.abrupt("return", null);
                case 2:
                    return n = t.slice(0, 10240, t.type),
                    e.next = 5,
                    dl.fromFile(n);
                case 5:
                    return r = e.sent,
                    a = {
                        width: 0,
                        height: 0,
                        ppi: 1
                    },
                    r.scan(function(e) {
                        switch (e) {
                        case "IHDR":
                            return a.width = this.readLong(),
                            a.height = this.readLong(),
                            !0;
                        case "pHYs":
                            var t = this.readLong(),
                            n = this.readLong(),
                            r = void 0;
                            return 1 === this.readChar() && (r = .0254),
                            r && (a.ppi = Math.round((t + n) / 2 * r)),
                            !1;
                        case "IDAT":
                            return ! 1
                        }
                        return ! 0
                    }),
                    e.abrupt("return", a);
                case 9:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } ();i.on("upload:setup", ".js-upload-markdown-image",
    function(e) {
        t(e instanceof CustomEvent, "null.js:49");
        var n = a.query(e.currentTarget, ".js-comment-field", HTMLTextAreaElement);
        n.setCustomValidity("uploading"),
        F.insertText(n, us(e.detail.file) + "\n")
    }), i.on("upload:complete", ".js-upload-markdown-image",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(n) {
            var r, o, s, i, c;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return c = function(e) {
                        var t = "[" + r.file.name + "](" + r.policy.asset.href + ")";
                        if (ds(r.file)) {
                            var n = ls(r.policy.asset.name),
                            a = r.policy.asset.href;
                            if (e && 144 === e.ppi) {
                                t = '<img width="' + Math.round(e.width / 2) + '" alt="' + n + '" src="' + a + '">'
                            } else t = "![" + n + "](" + a + ")"
                        }
                        s.setCustomValidity(""),
                        F.replaceText(s, i, t)
                    },
                    t(n instanceof CustomEvent, "null.js:56"),
                    r = n.detail,
                    o = n.currentTarget,
                    s = a.query(o, ".js-comment-field", HTMLTextAreaElement),
                    i = us(r.file),
                    e.prev = 6,
                    e.t0 = c,
                    e.next = 10,
                    ml(r.file);
                case 10:
                    e.t1 = e.sent,
                    (0, e.t0)(e.t1),
                    e.next = 18;
                    break;
                case 14:
                    e.prev = 14,
                    e.t2 = e.
                    catch(6),
                    c(),
                    setTimeout(function() {
                        throw e.t2
                    });
                case 18:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[6, 14]])
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } ()), i.on("upload:error", ".js-upload-markdown-image",
    function(e) {
        t(e instanceof CustomEvent, "null.js:91");
        var n = a.query(e.currentTarget, ".js-comment-field", HTMLTextAreaElement),
        r = us(e.detail.file);
        n.setCustomValidity(""),
        F.replaceText(n, r, "")
    }), i.on("upload:invalid", ".js-upload-markdown-image",
    function(e) {
        t(e instanceof CustomEvent, "null.js:99");
        var n = a.query(e.currentTarget, ".js-comment-field", HTMLTextAreaElement),
        r = us(e.detail.file);
        n.setCustomValidity(""),
        F.replaceText(n, r, "")
    }), i.on("upload:drop:links", ".js-upload-markdown-image",
    function(e) {
        t(e instanceof CustomEvent, "null.js:115");
        var n = a.query(e.currentTarget, ".js-comment-field", HTMLTextAreaElement),
        r = !0,
        o = !1,
        s = void 0;
        try {
            for (var i, c = e.detail.links[Symbol.iterator](); ! (r = (i = c.next()).done); r = !0) {
                var u = i.value,
                l = ms(u) ? "\n![](" + u + ")\n": u;
                F.insertText(n, l)
            }
        } catch(e) {
            o = !0,
            s = e
        } finally {
            try { ! r && c.
                return && c.
                return ()
            } finally {
                if (o) throw s
            }
        }
    }), i.on("upload:drop:text", ".js-upload-markdown-image",
    function(e) {
        t(e instanceof CustomEvent, "null.js:124");
        var n = a.query(e.currentTarget, ".js-comment-field", HTMLTextAreaElement);
        F.insertText(n, e.detail.text)
    }), i.on("upload:drop:table", ".js-upload-markdown-image",
    function(e) {
        t(e instanceof CustomEvent, "null.js:161");
        var n = a.query(e.currentTarget, ".js-comment-field", HTMLTextAreaElement);
        F.insertText(n, vs(e.detail.node))
    }), i.on("upload:setup", ".js-upload-marketplace-listing-screenshot",
    function(e) {
        t(e instanceof CustomEvent, "null.js:9");
        var n = e.detail.policyRequest,
        r = e.currentTarget.getAttribute("data-marketplace-listing-id");
        r && n.body.append("marketplace_listing_id", r)
    }), i.on("upload:complete", ".js-upload-marketplace-listing-screenshot",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(n) {
            var r, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return r = n.currentTarget.getAttribute("data-screenshots-url"),
                    t(r, "`data-screenshots-url` must exist -- null.js:21"),
                    o = a.query(document, ".js-marketplace-listing-screenshots-container"),
                    e.next = 5,
                    v.fetchSafeDocumentFragment(document, r);
                case 5:
                    s = e.sent,
                    o.innerHTML = "",
                    o.appendChild(s);
                case 8:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } ()), i.on("upload:setup", ".js-upload-marketplace-listing-hero-card-background",
    function(e) {
        t(e instanceof CustomEvent, "null.js:8");
        var n = e.detail.policyRequest,
        r = e.currentTarget.getAttribute("data-marketplace-listing-id");
        r && n.body.append("marketplace_listing_id", r)
    }), i.on("upload:complete", ".js-upload-marketplace-listing-hero-card-background",
    function(e) {
        t(e instanceof CustomEvent, "null.js:19");
        var n = e.detail,
        r = n.policy;
        a.query(document, ".js-marketplace-listing-hero-card-background-id", HTMLInputElement).value = r.asset.id || n.result.id;
        var o = a.query(document, ".js-hero-listing-container"),
        s = r.asset.href || n.result.href;
        o.style.backgroundImage = "url(" + s + ")"
    }), i.on("click", ".js-release-remove-file",
    function(e) {
        var t = a.closest(e.currentTarget, ".js-release-file");
        t.classList.add("delete"),
        a.query(t, "input.destroy", HTMLInputElement).value = "true"
    }), i.on("click", ".js-release-undo-remove-file",
    function(e) {
        var t = a.closest(e.currentTarget, ".js-release-file");
        t.classList.remove("delete"),
        a.query(t, "input.destroy", HTMLInputElement).value = ""
    });
    var fl = null;i.on("release:saved", ".js-release-form",
    function(e) {
        var t = e.currentTarget;
        fl = null;
        var n = !1,
        r = !0,
        o = !1,
        s = void 0;
        try {
            for (var i, c = t.querySelectorAll(".js-releases-field .js-release-file")[Symbol.iterator](); ! (r = (i = c.next()).done); r = !0) {
                var u = i.value;
                u.classList.contains("delete") ? u.remove() : u.classList.contains("js-template") || (n = !0)
            }
        } catch(e) {
            o = !0,
            s = e
        } finally {
            try { ! r && c.
                return && c.
                return ()
            } finally {
                if (o) throw s
            }
        }
        var l = a.query(t, ".js-releases-field");
        l.classList.toggle("not-populated", !n),
        l.classList.toggle("is-populated", n)
    }), i.on("upload:setup", ".js-upload-release-file",
    function(e) {
        t(e instanceof CustomEvent, "null.js:60");
        var n = e.detail,
        r = n.policyRequest,
        o = n.preprocess,
        s = e.currentTarget;
        if (ps(s)) hs(s, r);
        else {
            if (!fl) {
                var i = a.query(document, ".js-save-draft", HTMLButtonElement);
                fl = Wu(i)
            }
            var c = hs.bind(null, s, r);
            o.push(fl.then(c))
        }
    }), i.on("upload:start", ".js-upload-release-file",
    function(e) {
        t(e instanceof CustomEvent, "null.js:83");
        var n = e.detail.policy;
        a.query(e.currentTarget, ".js-upload-meter").classList.remove("d-none");
        var r = n.asset.replaced_asset;
        if (r) {
            var o = !0,
            s = !1,
            i = void 0;
            try {
                for (var c, u = a.querySelectorAll(document, ".js-releases-field .js-release-file .id", HTMLInputElement)[Symbol.iterator](); ! (o = (c = u.next()).done); o = !0) {
                    var l = c.value;
                    Number(l.value) === r && a.closest(l, ".js-release-file").remove()
                }
            } catch(e) {
                s = !0,
                i = e
            } finally {
                try { ! o && u.
                    return && u.
                    return ()
                } finally {
                    if (s) throw i
                }
            }
        }
    }), i.on("upload:complete", ".js-upload-release-file",
    function(e) {
        t(e instanceof CustomEvent, "null.js:100");
        var n = e.detail,
        r = n.policy,
        o = a.query(document, ".js-releases-field"),
        s = a.query(o, ".js-template").cloneNode(!0);
        s.classList.remove("template", "js-template"),
        a.query(s, "input.id", HTMLInputElement).value = r.asset.id || n.result.id;
        var i = r.asset.name || r.asset.href.split("/").pop(),
        c = !0,
        u = !1,
        l = void 0;
        try {
            for (var d, m = s.querySelectorAll(".filename")[Symbol.iterator](); ! (c = (d = m.next()).done); c = !0) {
                var f = d.value;
                f instanceof HTMLInputElement ? f.value = i: f.textContent = i
            }
        } catch(e) {
            u = !0,
            l = e
        } finally {
            try { ! c && m.
                return && m.
                return ()
            } finally {
                if (u) throw l
            }
        }
        var v = r.asset.size ? "(" + (r.asset.size / 1048576).toFixed(2) + " MB)": "";
        a.query(s, ".filesize").textContent = v,
        o.appendChild(s),
        o.classList.remove("not-populated"),
        o.classList.add("is-populated");
        a.query(e.currentTarget, ".js-upload-meter").classList.add("d-none")
    }), i.on("upload:progress", ".js-upload-release-file",
    function(e) {
        t(e instanceof CustomEvent, "null.js:133");
        a.query(e.currentTarget, ".js-upload-meter").style.width = e.detail.percent + "%"
    });
    var vl = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return n = t.getAttribute("data-redirect-url"),
                    e.prev = 1,
                    e.next = 4,
                    v.fetchPoll(t.getAttribute("data-poll-url"));
                case 4:
                    window.location = n,
                    e.next = 11;
                    break;
                case 7:
                    e.prev = 7,
                    e.t0 = e.
                    catch(1),
                    a.query(document, ".js-manifest-ready-check").classList.add("d-none"),
                    a.query(document, ".js-manifest-ready-check-failed").classList.remove("d-none");
                case 11:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[1, 7]])
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } (), pl = null, hl = new WeakMap;i.on("upload:drop:setup", ".js-upload-manifest-file",
    function(e) {
        t(e instanceof CustomEvent, "null.js:54");
        var n = e.detail.files,
        r = parseInt(e.currentTarget.getAttribute("data-directory-upload-max-files"), 10);
        n.length > r && (e.preventDefault(), e.currentTarget.classList.add("is-too-many"))
    }), i.on("upload:drop:setup", ".js-upload-manifest-tree-view",
    function(e) {
        t(e instanceof CustomEvent, "null.js:64"),
        e.preventDefault();
        var n = e.detail.upload,
        r = a.query(document, "#js-repo-pjax-container");
        r.addEventListener("pjax:success",
        function() {
            n(r.querySelector(".js-uploadable-container"))
        },
        {
            once: !0
        });
        var o = e.currentTarget.getAttribute("data-drop-url");
        t(o, "null.js:80"),
        zs({
            url: o,
            container: r
        })
    }), i.on("upload:setup", ".js-upload-manifest-file",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(n) {
            var r, o, s, i, u, l, d, m, f, p, h, g, y;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (u = function() {
                        o.body.append("upload_manifest_id", hl.get(i))
                    },
                    t(n instanceof CustomEvent, "null.js:85"), r = n.detail, o = r.policyRequest, s = r.preprocess, i = n.currentTarget, gs(i, n.detail), !hl.get(i)) {
                        e.next = 8;
                        break
                    }
                    return u(),
                    e.abrupt("return");
                case 8:
                    if (!pl) {
                        e.next = 11;
                        break
                    }
                    return s.push(pl.then(u)),
                    e.abrupt("return");
                case 11:
                    return l = a.closest(i, ".js-upload-manifest-file-container"),
                    d = l.querySelector(".js-upload-manifest-form"),
                    pl = v.fetchJSON(d.action, {
                        method: d.method,
                        body: new FormData(d)
                    }),
                    m = function() {
                        var e = void 0,
                        n = void 0,
                        r = new Promise(function(t, r) {
                            e = t,
                            n = r
                        });
                        return t(e, "null.js:139"),
                        t(n, "null.js:140"),
                        [r, e, n]
                    } (),
                    f = ni(m, 2),
                    p = f[0],
                    h = f[1],
                    s.push(p.then(u)),
                    e.next = 18,
                    pl;
                case 18:
                    g = e.sent,
                    y = a.query(document, ".js-manifest-commit-form", HTMLFormElement),
                    c(y.elements.namedItem("manifest_id"), HTMLInputElement).value = g.upload_manifest.id,
                    hl.set(i, g.upload_manifest.id),
                    pl = null,
                    h();
                case 24:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } ()), i.on("upload:start", ".js-upload-manifest-file",
    function(e) {
        t(e instanceof CustomEvent, "null.js:153");
        var n = e.detail,
        r = a.closest(e.currentTarget, ".js-upload-manifest-file-container"),
        o = a.query(r, ".js-upload-progress"),
        s = a.query(o, ".js-upload-meter-text");
        a.query(s, ".js-upload-meter-range-start").textContent = n.batch.uploaded + 1;
        a.query(s, ".js-upload-meter-filename").textContent = bs(n.file)
    }), i.on("upload:complete", ".js-upload-manifest-file",
    function(e) {
        t(e instanceof CustomEvent, "null.js:168");
        var n = e.detail,
        r = a.query(document, ".js-manifest-commit-file-template", HTMLTableElement).rows[0].cloneNode(!0);
        a.query(r, ".name").textContent = bs(n.file);
        var o = n.policy.asset.id || n.result.id,
        s = a.query(r, ".js-remove-manifest-file-form", HTMLFormElement);
        c(s.elements.namedItem("file_id"), HTMLInputElement).value = o;
        var i = a.query(document, ".js-manifest-file-list");
        i.classList.remove("d-none"),
        e.currentTarget.classList.add("is-file-list");
        a.query(document, ".js-upload-progress").classList.add("is-file-list");
        a.query(i, ".js-manifest-file-list-root").appendChild(r),
        n.batch.isFinished() && ys(e.currentTarget)
    }), i.on("upload:progress", ".js-upload-manifest-file",
    function(e) {
        t(e instanceof CustomEvent, "null.js:201");
        var n = e.detail,
        r = a.closest(e.currentTarget, ".js-upload-manifest-file-container");
        a.query(r, ".js-upload-meter").style.width = n.batch.percent() + "%"
    }), i.on("upload:error", ".js-upload-manifest-file", js), i.on("upload:invalid", ".js-upload-manifest-file", js), l.remoteForm(".js-remove-manifest-file-form",
    function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, o, s, i, c;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    n.html();
                case 2:
                    r = a.closest(t, ".js-manifest-file-list-root"),
                    (o = a.closest(t, ".js-manifest-file-entry")).remove(),
                    r.hasChildNodes() || ((s = a.closest(r, ".js-manifest-file-list")).classList.add("d-none"), (i = a.query(document, ".js-upload-manifest-file")).classList.remove("is-file-list"), (c = a.query(document, ".js-upload-progress")).classList.remove("is-file-list"));
                case 6:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ()), s.observe(".js-manifest-ready-check", {
        initialize: function(e) {
            vl(e)
        }
    });
    var gl = function() {
        var e = Ys(regeneratorRuntime.mark(function e(n, r) {
            var a, o, s, c, u, l, d, m, f, p, h, g, y;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    a = !0,
                    o = !1,
                    s = void 0,
                    e.prev = 3,
                    c = n.files[Symbol.iterator]();
                case 5:
                    if (a = (u = c.next()).done) {
                        e.next = 37;
                        break
                    }
                    if (l = u.value, d = function(e, n) {
                        var r = n.getAttribute("data-upload-policy-url");
                        t(r, "null.js:302");
                        var a = n.getAttribute("data-upload-repository-id"),
                        o = n.getAttribute("data-upload-policy-authenticity-token");
                        null == o && (o = Ls(n));
                        var s = new FormData;
                        return s.append("name", e.name),
                        s.append("size", String(e.size)),
                        s.append("content_type", e.type),
                        s.append("authenticity_token", o),
                        a && s.append("repository_id", a),
                        e._path && s.append("directory", String(e._path)),
                        {
                            url: r,
                            options: {
                                method: "post",
                                body: s,
                                headers: {}
                            }
                        }
                    } (l, r), m = [], i.fire(r, "upload:setup", {
                        batch: n,
                        file: l,
                        policyRequest: d.options,
                        preprocess: m
                    })) {
                        e.next = 11;
                        break
                    }
                    return e.abrupt("return");
                case 11:
                    return e.prev = 11,
                    e.next = 14,
                    Promise.all(m);
                case 14:
                    return e.next = 16,
                    v.fetchJSON(d.url, d.options);
                case 16:
                    f = e.sent,
                    kl.upload(function(e, t, n, r) {
                        var a = n.upload_authenticity_token;
                        null == a && (a = Ls(r));
                        var o = n.asset_upload_authenticity_token;
                        return null == o && (o = Ls(r)),
                        {
                            file: t,
                            to: n.upload_url,
                            form: n.form,
                            header: n.header,
                            sameOrigin: n.same_origin,
                            csrf: a,
                            start: function() {
                                ws(r, "is-uploading"),
                                i.fire(r, "upload:start", {
                                    batch: e,
                                    file: t,
                                    policy: n
                                })
                            },
                            progress: function(n) {
                                e.progress(t, n),
                                i.fire(r, "upload:progress", {
                                    batch: e,
                                    file: t,
                                    percent: n
                                })
                            },
                            complete: function(a) {
                                if (e.completed(), a && a.href && (n.asset || (n.asset = {}), n.asset.href = a.href), n.asset_upload_url && n.asset_upload_url.length > 0) {
                                    var s = new FormData;
                                    s.append("authenticity_token", o),
                                    v.fetchJSON(n.asset_upload_url, {
                                        method: "put",
                                        body: s
                                    })
                                }
                                i.fire(r, "upload:complete", {
                                    batch: e,
                                    file: t,
                                    policy: n,
                                    result: a
                                }),
                                ws(r, "is-default")
                            },
                            error: function(a) {
                                i.fire(r, "upload:error", {
                                    batch: e,
                                    file: t,
                                    policy: n
                                });
                                var o = xs(a);
                                ws(r, o)
                            }
                        }
                    } (n, l, f, r)),
                    e.next = 34;
                    break;
                case 20:
                    if (e.prev = 20, e.t0 = e.
                    catch(11), i.fire(r, "upload:invalid", {
                        batch: n,
                        file: l,
                        error: e.t0
                    }), !e.t0.response) {
                        e.next = 32;
                        break
                    }
                    return e.next = 26,
                    e.t0.response.text();
                case 26:
                    p = e.sent,
                    h = e.t0.response.status,
                    g = xs({
                        status: h,
                        body: p
                    },
                    l),
                    ws(r, g),
                    e.next = 34;
                    break;
                case 32:
                    y = xs({
                        status: 0,
                        body: ""
                    }),
                    ws(r, y);
                case 34:
                    a = !0,
                    e.next = 5;
                    break;
                case 37:
                    e.next = 43;
                    break;
                case 39:
                    e.prev = 39,
                    e.t1 = e.
                    catch(3),
                    o = !0,
                    s = e.t1;
                case 43:
                    e.prev = 43,
                    e.prev = 44,
                    !a && c.
                    return && c.
                    return ();
                case 46:
                    if (e.prev = 46, !o) {
                        e.next = 49;
                        break
                    }
                    throw s;
                case 49:
                    return e.finish(46);
                case 50:
                    return e.finish(43);
                case 51:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[3, 39, 43, 51], [11, 20], [44, , 46, 50]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } (), yl = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, a;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (!n.getFilesAndDirectories) {
                        e.next = 8;
                        break
                    }
                    return e.next = 3,
                    n.getFilesAndDirectories();
                case 3:
                    return r = e.sent,
                    a = As(r).map(function(e) {
                        return yl(n.path, e)
                    }),
                    e.abrupt("return", Promise.all(a));
                case 8:
                    return n._path = t,
                    e.abrupt("return", Promise.resolve(n));
                case 10:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } (), bl = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.t0 = qs,
                    e.next = 3,
                    yl("", t);
                case 3:
                    return e.t1 = e.sent,
                    e.abrupt("return", (0, e.t0)(e.t1));
                case 5:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } (), jl = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, a, o;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (!n.isDirectory) {
                        e.next = 8;
                        break
                    }
                    return e.next = 3,
                    function(e) {
                        return new Promise(function(t, n) {
                            e.createReader().readEntries(t, n)
                        })
                    } (n);
                case 3:
                    return r = e.sent,
                    a = As(r).map(function(e) {
                        return jl(n.fullPath, e)
                    }),
                    e.abrupt("return", Promise.all(a));
                case 8:
                    return e.next = 10,
                    function(e) {
                        return new Promise(function(t, n) {
                            e.file(t, n)
                        })
                    } (n);
                case 10:
                    return o = e.sent,
                    o._path = t,
                    e.abrupt("return", o);
                case 13:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } (), Ll = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t) {
            var n, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return n = Array.from(t.items).map(function(e) {
                        return e.webkitGetAsEntry()
                    }),
                    r = As(n).map(function(e) {
                        return jl("", e)
                    }),
                    e.t0 = qs,
                    e.next = 5,
                    Promise.all(r);
                case 5:
                    return e.t1 = e.sent,
                    e.abrupt("return", (0, e.t0)(e.t1));
                case 7:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } (), wl = function() {
        var e = Ys(regeneratorRuntime.mark(function e(t, n) {
            var r, a, o, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return r = null,
                    r = t.hasAttribute("data-directory-upload") && n.getFilesAndDirectories ? bl(n) : t.hasAttribute("data-directory-upload") &&
                    function(e) {
                        return e.items && Array.from(e.items).some(function(e) {
                            return e.webkitGetAsEntry && e.webkitGetAsEntry().isDirectory
                        })
                    } (n) ? Ll(n) : Promise.resolve(As(Array.from(n.files))),
                    e.next = 4,
                    r;
                case 4:
                    if ((a = e.sent).length) {
                        e.next = 8;
                        break
                    }
                    return ws(t, "is-hidden-file"),
                    e.abrupt("return");
                case 8:
                    o = Ms.bind(null, a),
                    (s = !i.fire(t, "upload:drop:setup", {
                        upload: o,
                        files: a
                    })) || Ms(a, t);
                case 11:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } (), xl = ["is-default", "is-uploading", "is-bad-file", "is-duplicate-filename", "is-too-big", "is-too-many", "is-hidden-file", "is-failed", "is-bad-dimensions", "is-empty", "is-bad-permissions", "is-repository-required", "is-bad-format"], kl = new(function() {
        function e() {
            Qs(this, e),
            this.uploads = [],
            this.busy = !1
        }
        return Zs(e, [{
            key: "upload",
            value: function(e) {
                this.uploads.push(e),
                this.process()
            }
        },
        {
            key: "process",
            value: function() {
                var e = this;
                if (!this.busy && 0 !== this.uploads.length) {
                    var t = this.uploads.shift();
                    this.busy = !0;
                    var n = new XMLHttpRequest;
                    n.open("POST", t.to, !0);
                    for (var r in t.header) n.setRequestHeader(r, t.header[r]);
                    n.onloadstart = function() {
                        t.start()
                    },
                    n.onload = function() {
                        204 === n.status ? t.complete({}) : 201 === n.status ? t.complete(JSON.parse(n.responseText)) : t.error({
                            status: n.status,
                            body: n.responseText
                        }),
                        e.busy = !1,
                        e.process()
                    },
                    n.onerror = function() {
                        t.error({
                            status: 0,
                            body: ""
                        }),
                        e.busy = !1,
                        e.uploads = []
                    },
                    n.upload.onprogress = function(e) {
                        if (e.lengthComputable) {
                            var n = Math.round(e.loaded / e.total * 100);
                            t.progress(n)
                        }
                    };
                    var a = new FormData;
                    t.sameOrigin && a.append("authenticity_token", t.csrf);
                    for (var o in t.form) a.append(o, t.form[o]);
                    a.append("file", t.file),
                    n.send(a)
                }
            }
        }]),
        e
    } ()), El = function() {
        function e(t) {
            Qs(this, e),
            this.files = Array.from(t),
            this.percentages = this.files.map(function() {
                return 0
            }),
            this.size = this.files.length,
            this.total = this.files.reduce(function(e, t) {
                return e + t.size
            },
            0),
            this.uploaded = 0
        }
        return Zs(e, [{
            key: "percent",
            value: function() {
                var e = this,
                t = this.files.map(function(t, n) {
                    return t.size * e.percentages[n] / 100
                }).reduce(function(e, t) {
                    return e + t
                });
                return Math.round(t / this.total * 100)
            }
        },
        {
            key: "progress",
            value: function(e, t) {
                var n = this.files.indexOf(e);
                this.percentages[n] = t
            }
        },
        {
            key: "completed",
            value: function() {
                this.uploaded += 1
            }
        },
        {
            key: "isFinished",
            value: function() {
                return this.uploaded === this.files.length
            }
        }]),
        e
    } (), Sl = null, Tl = 0, ql = !1;s.observe(".js-document-dropzone", {
        add: function(e) {
            var n = document.body;
            t(n, "null.js:792"),
            n.addEventListener("dragstart", Ds),
            n.addEventListener("dragend", Bs),
            n.addEventListener("dragenter", Is),
            n.addEventListener("dragover", Is),
            n.addEventListener("dragleave", _s),
            e.addEventListener("drop", Fs)
        },
        remove: function(e) {
            var n = document.body;
            t(n, "null.js:803"),
            n.removeEventListener("dragstart", Ds),
            n.removeEventListener("dragend", Bs),
            n.removeEventListener("dragenter", Is),
            n.removeEventListener("dragover", Is),
            n.removeEventListener("dragleave", _s),
            e.removeEventListener("drop", Fs)
        }
    }), s.observe(".js-uploadable-container", {
        add: function(e) {
            0 == Tl++&&(document.addEventListener("drop", Hs), document.addEventListener("dragover", Cs)),
            e.addEventListener("dragenter", Is),
            e.addEventListener("dragover", Is),
            e.addEventListener("dragleave", Rs),
            e.addEventListener("drop", Fs),
            e.addEventListener("paste", Ps),
            e.addEventListener("change", Ns);
            var t = e.closest("form");
            null != t && t.addEventListener("reset", Os)
        },
        remove: function(e) {
            0 == --Tl && (document.removeEventListener("drop", Hs), document.removeEventListener("dragover", Cs)),
            e.removeEventListener("dragenter", Is),
            e.removeEventListener("dragover", Is),
            e.removeEventListener("dragleave", Rs),
            e.removeEventListener("drop", Fs),
            e.removeEventListener("paste", Ps),
            e.removeEventListener("change", Ns);
            var t = e.closest("form");
            null != t && t.removeEventListener("reset", Os)
        }
    }), !
    function() {
        var e = document.createElement("div");
        e.style.cssText = "-ms-user-select: element; user-select: contain;";
        var t = e;
        return "element" === t.msUserSelect || "contain" === t.userSelect
    } () && window.getSelection && i.on("click", ".user-select-contain",
    function() {
        var e = window.getSelection();
        if (e.rangeCount) {
            var t = e.getRangeAt(0).commonAncestorContainer;
            this.contains(t) || e.selectAllChildren(this)
        }
    }), i.on("click", ["form button:not([type])", "form button[type=submit]", "form input[type=submit]"].join(", "),
    function(e) {
        t(this instanceof HTMLButtonElement || this instanceof HTMLInputElement, "null.js:201");
        this.form && !e.defaultPrevented && la(this)
    }), l.remoteForm("form[data-remote]",
    function(e, t, n) {
        "json" === e.getAttribute("data-type") && n.headers.set("Accept", "application/json");
        var r = {
            status: 0,
            statusText: null,
            responseText: null,
            responseJSON: null,
            setRequestHeader: function(e, t) {
                n.headers.set(e, t)
            }
        },
        a = void 0;
        try {
            a = new URL(n.url)
        } catch(e) {}
        var o = {
            url: n.url,
            type: n.method,
            crossDomain: a && a.host !== window.location.host
        },
        s = q(e);
        s.trigger("ajaxSend", [r, o]),
        t.text().
        catch(function(e) {
            if (e.response) return e.response;
            throw e
        }).then(function(e) {
            r.status = e.status,
            r.statusText = e.statusText;
            var t = void 0;
            t = r.responseText = e.text,
            /[/ + ] json($ | ;) / .test(e.headers.get("content-type")) && (t = r.responseJSON = e.json), r.status < 300 ? s.trigger("ajaxSuccess", [r, o, t]) : s.trigger("ajaxError", [r, o, r.statusText])
        },
        function(e) {
            s.trigger("ajaxError", [r, o, e.message])
        }).then(function() {
            s.trigger("ajaxComplete", [r, o])
        })
    }), q(document).on("ajaxComplete", "form",
    function(e) {
        var t = ua(e.currentTarget);
        t && t.remove()
    }), l.afterRemote(function(e) {
        var t = ua(e);
        t && t.remove()
    });
    return Object.freeze({})
});
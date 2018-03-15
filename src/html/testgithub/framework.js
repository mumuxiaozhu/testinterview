!
function(e) {
    function t(t, r, o) {
        if (t in n) console.error("module redefined: " + t);
        else {
            arguments.length < 3 && (o = r, r = []);
            var i, a, s = [];
            for (i = 0; i < r.length; i++) s.push(function(e) {
                {
                    if (e in n) return n[e];
                    throw new Error("dependency not found: " + e)
                }
            } (r[i]));
            var c = "github-rollup-frameworks" === t;
            try {
                if (n[t] = o.apply(this, s), c) {
                    var u, l = n[t].
                default;
                    for (u in l) a = u.replace(/___/g, "@").replace(/__/g, "/").replace(/_/g, "-"),
                    n[a] = l[u]
                }
            } catch(n) {
                throw n.message = "evaluating module " + t + ": " + n.message,
                c && (e.define = function() {}),
                n
            }
        }
    }
    var n = {};
    e.define = t
} (self),
define("github-rollup-frameworks",
function() {
    "use strict";
    function e() {
        throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")
    }
    function t(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.
    default:
        e
    }
    function n(e, t) {
        return t = {
            exports: {}
        },
        e(t, t.exports),
        t.exports
    }
    function r() {
        var e = this,
        t = 0;
        return {
            next: function() {
                return {
                    done: t === e.length,
                    value: e[t++]
                }
            }
        }
    }
    function o(e, t) {
        return t instanceof Blob ? (function(e) {
            var t = new FileReader,
            n = new Promise(function(e, n) {
                t.onload = function() {
                    Vt("string" == typeof t.result, "null.js:120"),
                    e(t.result)
                },
                t.onerror = function() {
                    n(t.error)
                }
            });
            return t.readAsText(e),
            n
        } (t).then(function(n) {
            var r = "string" == typeof t.type && "" !== t.type ? t.type: Zt;
            a(e, n, r)
        }), !0) : (a(e, t, Zt), !0)
    }
    function i(e, t, n) {
        en && navigator.sendBeacon &&
        function(e) {
            return e = e.split(";")[0],
            Qt.indexOf(e) > -1
        } (n) ? navigator.sendBeacon(e, new Blob([t], {
            type: n
        })) : a(e, t, n)
    }
    function a(e, t, n) {
        var r = {
            url: String(e),
            data: t,
            type: n
        };
        if (nn) {
            var o = c() || [];
            o.push(r),
            u(o)
        } else Kt.push(r),
        tn && clearTimeout(tn),
        tn = setTimeout(function() {
            s(Kt),
            Kt.length = 0
        },
        20);
        return ! 0
    }
    function s(e) {
        var t = !0,
        n = !1,
        r = void 0;
        try {
            for (var o, i = e[Symbol.iterator](); ! (t = (o = i.next()).done); t = !0) {
                var a = o.value,
                s = new XMLHttpRequest;
                s.open("POST", a.url, !0),
                s.setRequestHeader("Content-Type", a.type),
                s.send(a.data)
            }
        } catch(e) {
            n = !0,
            r = e
        } finally {
            try { ! t && i.
                return && i.
                return ()
            } finally {
                if (n) throw r
            }
        }
    }
    function c() {
        var e = void 0;
        try {
            e = sessionStorage.getItem(rn)
        } catch(e) {}
        if (e) return JSON.parse(e)
    }
    function u(e) {
        var t = JSON.stringify(e);
        try {
            sessionStorage.setItem(rn, t)
        } catch(e) {}
    }
    function l(e, t, n) {
        return Vt(e instanceof t, "undefined -- null.js:16"),
        e
    }
    function f(e, t) {
        var n = e.head;
        Vt(n, "document.head was not initialized -- null.js:13");
        var r = !0,
        o = !1,
        i = void 0;
        try {
            for (var a, s = n.getElementsByTagName("meta")[Symbol.iterator](); ! (r = (a = s.next()).done); r = !0) {
                var c = a.value;
                if (Vt(c instanceof HTMLMetaElement, "getElementsByTagName('meta') returned non-meta element -- null.js:18"), c.name === t) return c.content || ""
            }
        } catch(e) {
            o = !0,
            i = e
        } finally {
            try { ! r && s.
                return && s.
                return ()
            } finally {
                if (o) throw i
            }
        }
        return ""
    }
    function d(e) {
        var t = f(e, "expected-hostname");
        if (!t) return ! 1;
        return t.replace(/\.$/, "").split(".").slice( - 2).join(".") !== e.location.hostname.replace(/\.$/, "").split(".").slice( - 2).join(".")
    }
    function h(e) {
        y() && v(function(e) {
            var t = e.message,
            n = e.filename,
            r = e.lineno,
            o = e.colno;
            return g(e.error, {
                message: t,
                filename: n,
                lineno: r,
                colno: o
            })
        } (e))
    }
    function p(e) {
        y() && e.promise && e.promise.
        catch(m)
    }
    function m(e) {
        v(g(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}))
    }
    function v(e) {
        var t = f(document, "browser-errors-url");
        t && (pn++, window.fetch(t, {
            method: "post",
            body: JSON.stringify(e)
        }).
        catch(function() {}))
    }
    function g(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return e && (e = {
            columnNumber: e.columnNumber,
            fileName: e.fileName,
            lineNumber: e.lineNumber,
            message: e.message,
            name: e.name,
            stack: e.stack,
            toString: e.toString()
        }),
        un.extend({
            error: e,
            url: window.location.href,
            readyState: document.readyState,
            referrer: document.referrer,
            timeSinceLoad: Math.round((new Date).getTime() - mn),
            extensionScripts: JSON.stringify(function() {
                for (var e = document.getElementsByTagName("script"), t = [], n = 0, r = e.length; n < r; n++) {
                    var o = e[n];
                    /^(?:chrome-extension|file):/.test(o.src) && t.push(o.src)
                }
                return t
            } ().sort()),
            user: function() {
                var e = document.querySelector("meta[name=user-login]");
                if (e) return l(e, HTMLMetaElement).content
            } ()
        },
        t)
    }
    function y() {
        return ! d(document) && (!vn && !(pn >= 10))
    }
    function b() {
        return Sn
    }
    function w() {
        return history.length - 1 + kn
    }
    function _(e) {
        Sn = e;
        var t = location.href;
        Tn[w()] = {
            url: t,
            state: Sn
        },
        Tn.length = history.length;
        var n = new CustomEvent("statechange", {
            bubbles: !1,
            cancelable: !1
        });
        n.state = Sn,
        window.dispatchEvent(n)
    }
    function E(e, t) {
        var n = {
            _id: t
        };
        if (e) for (var r in e) n[r] = e[r];
        return n
    }
    function x() {
        return (new Date).getTime()
    }
    function T(e, t, n) {
        kn = 0,
        e = E(e, x()),
        history.pushState(e, t, n),
        _(e)
    }
    function k(e, t, n) {
        e = E(e, b()._id),
        history.replaceState(e, t, n),
        _(e)
    }
    function S(e) {
        return j(e, O(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location.hash))
    }
    function j(e, t) {
        if ("" !== t) return e.getElementById(t) || e.getElementsByName(t)[0]
    }
    function O(e) {
        try {
            return decodeURIComponent(e.slice(1))
        } catch(e) {
            return ""
        }
    }
    function L(e) {
        Ln.push(e),
        $t.then(C)
    }
    function C() {
        var e = Cn;
        Cn = Ln.length,
        A(Ln.slice(e), null, window.location.href)
    }
    function A(e, t, n) {
        var r = window.location.hash.slice(1),
        o = {
            oldURL: t,
            newURL: n,
            target: r && document.getElementById(r)
        },
        i = !0,
        a = !1,
        s = void 0;
        try {
            for (var c, u = e[Symbol.iterator](); ! (i = (c = u.next()).done); i = !0) {
                c.value.call(null, o)
            }
        } catch(e) {
            a = !0,
            s = e
        } finally {
            try { ! i && u.
                return && u.
                return ()
            } finally {
                if (a) throw s
            }
        }
    }
    function D(e) {
        return (e.ctrlKey ? "Control+": "") + (e.altKey ? "Alt+": "") + (e.metaKey ? "Meta+": "") + e.key
    }
    function M(e, t, n) {
        n = n || HTMLElement;
        var r = e.closest(t);
        if (r instanceof n) return r;
        throw new Error("Element not found: <" + n.name + "> " + t)
    }
    function P(e, t, n) {
        n = n || HTMLElement;
        var r = e.querySelector(t);
        if (r instanceof n) return r;
        throw new Error("Element not found: <" + n.name + "> " + t)
    }
    function N(e, t, n) {
        n = n || HTMLElement;
        var r = [],
        o = !0,
        i = !1,
        a = void 0;
        try {
            for (var s, c = e.querySelectorAll(t)[Symbol.iterator](); ! (o = (s = c.next()).done); o = !0) {
                var u = s.value;
                u instanceof n && r.push(u)
            }
        } catch(e) {
            i = !0,
            a = e
        } finally {
            try { ! o && c.
                return && c.
                return ()
            } finally {
                if (i) throw a
            }
        }
        return r
    }
    function R(e) {
        return !
        function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0
        } (e)
    }
    function H(e) {
        var t = e.currentTarget;
        if (Vt(t instanceof HTMLElement, "null.js:9"), "Tab" === D(e)) {
            e.preventDefault();
            var n = Array.from(t.querySelectorAll("input, button, textarea")).filter(function(e) {
                return ! e.disabled && R(e)
            }),
            r = e.shiftKey ? -1 : 1,
            o = n.length - 1;
            if (document.activeElement) {
                var i = n.indexOf(document.activeElement);
                if ( - 1 !== i) {
                    var a = i + r;
                    a >= 0 && (o = a % n.length)
                }
            }
            n[o].focus()
        }
    }
    function I(e) {
        var t = document.querySelector("button[data-box-overlay-id='" + e.id + "']");
        return t instanceof HTMLButtonElement ? t: null
    }
    function F(e, t) {
        var n = t || I(e);
        Vt(n, "null.js:54"),
        q(),
        Wn(e).then(function() {
            var t = e.querySelector("[autofocus]");
            t ? t.focus() : (e.hidden && (e.hidden = !1), e.setAttribute("tabindex", "-1"), e.focus()),
            En(e, "overlay:opened", {
                button: n
            })
        }),
        e.hidden = !1,
        n.setAttribute("aria-expanded", "true"),
        e.addEventListener("keydown", H),
        document.addEventListener("keydown", B),
        Xn = e
    }
    function q() {
        if (Xn) {
            var e = Xn,
            t = P(document, '[data-box-overlay-id="' + e.id + '"]');
            Wn(e).then(function() {
                t.focus(),
                En(e, "overlay:closed")
            }),
            t.setAttribute("aria-expanded", "false"),
            e.hidden = !0,
            e.removeEventListener("keydown", H),
            document.removeEventListener("keydown", B),
            location.hash === "#" + e.id && k(b(), "", window.location.href.split("#")[0]),
            Xn = null
        }
    }
    function B(e) {
        "Escape" === D(e) && q()
    }
    function U(e, t) {
        var n = void 0;
        return function() {
            var r = this,
            o = arguments;
            clearTimeout(n),
            n = setTimeout(function() {
                clearTimeout(n),
                e.apply(r, o)
            },
            t)
        }
    }
    function z(e, t) {
        if (Kn) {
            var n = Array.from(e.querySelectorAll(".js-transitionable"));
            e.classList.add("js-transitionable") && n.push(e);
            var r = function(e) {
                var t = W(e);
                e.addEventListener("transitionend",
                function() {
                    e.style.display = "",
                    e.style.visibility = "",
                    t && X(e,
                    function() {
                        e.style.height = ""
                    })
                },
                {
                    once: !0
                }),
                e.style.boxSizing = "content-box",
                e.style.display = "block",
                e.style.visibility = "visible",
                t && X(e,
                function() {
                    e.style.height = getComputedStyle(e).height
                }),
                e.offsetHeight
            },
            o = !0,
            i = !1,
            a = void 0;
            try {
                for (var s, c = n[Symbol.iterator](); ! (o = (s = c.next()).done); o = !0) {
                    r(p = s.value)
                }
            } catch(e) {
                i = !0,
                a = e
            } finally {
                try { ! o && c.
                    return && c.
                    return ()
                } finally {
                    if (i) throw a
                }
            }
            t();
            var u = !0,
            l = !1,
            f = void 0;
            try {
                for (var d, h = n[Symbol.iterator](); ! (u = (d = h.next()).done); u = !0) {
                    var p = d.value;
                    if (W(p)) {
                        var m = getComputedStyle(p).height;
                        p.style.boxSizing = "",
                        p.style.height = "0px" === m ? p.scrollHeight + "px": "0px"
                    }
                }
            } catch(e) {
                l = !0,
                f = e
            } finally {
                try { ! u && h.
                    return && h.
                    return ()
                } finally {
                    if (l) throw f
                }
            }
        } else t()
    }
    function W(e) {
        return "height" === getComputedStyle(e).transitionProperty
    }
    function X(e, t) {
        e.style.transition = "none",
        t(),
        e.offsetHeight,
        e.style.transition = ""
    }
    function Y(e) {
        var t = e.getAttribute("data-details-container") || ".js-details-container",
        n = M(e, t);
        e.getAttribute("data-initial-state") || e.setAttribute("data-initial-state", e.getAttribute("aria-expanded") || "false"),
        z(n,
        function() {
            n.classList.toggle("open"),
            n.classList.toggle("Details--on"),
            e.setAttribute("aria-expanded", (e.getAttribute("data-initial-state") !== n.classList.contains("Details--on").toString()).toString()),
            Promise.resolve().then(function() { !
                function(e) {
                    var t = e.querySelectorAll("input[autofocus], textarea[autofocus]"),
                    n = t[t.length - 1];
                    n && document.activeElement !== n && n.focus()
                } (n),
                function(e) {
                    e.classList.contains("tooltipped") && (e.classList.remove("tooltipped"), e.addEventListener("mouseleave",
                    function() {
                        return e.classList.add("tooltipped")
                    },
                    {
                        once: !0
                    }))
                } (e),
                function(e) {
                    var t = e.closest(".js-edit-repository-meta");
                    t && l(t, HTMLFormElement).reset()
                } (e),
                e.blur && e.blur();
                var t = new CustomEvent("details:toggled", {
                    bubbles: !0,
                    cancelable: !1,
                    detail: {
                        open: n.classList.contains("Details--on")
                    }
                });
                n.dispatchEvent(t)
            })
        })
    }
    function V(e) {
        var t = e.ownerDocument;
        if (t && e.offsetParent) {
            var n = t.defaultView.HTMLElement;
            if (e !== t.body) {
                for (; e !== t.body;) {
                    if (! (e.parentElement instanceof n)) return;
                    e = e.parentElement;
                    var r = getComputedStyle(e),
                    o = r.position,
                    i = r.overflowY,
                    a = r.overflowX;
                    if ("fixed" === o || "auto" === i || "auto" === a || "scroll" === i || "scroll" === a) break
                }
                return e instanceof Document ? null: e
            }
        }
    }
    function $(e, t) {
        var n = e.ownerDocument;
        if (n) {
            if (n.body) {
                var r = n.documentElement;
                if (r && e !== r) {
                    var o = G(e, t);
                    if (o) {
                        var i = (t = o._container) === n.documentElement ? {
                            top: un(n).scrollTop(),
                            left: un(n).scrollLeft()
                        }: {
                            top: un(t).scrollTop(),
                            left: un(t).scrollLeft()
                        },
                        a = o.top - i.top,
                        s = o.left - i.left,
                        c = t.clientHeight,
                        u = t.clientWidth;
                        return {
                            top: a,
                            left: s,
                            bottom: c - (a + e.offsetHeight),
                            right: u - (s + e.offsetWidth),
                            height: c,
                            width: u
                        }
                    }
                }
            }
        }
    }
    function G(e, t) {
        var n = e.ownerDocument;
        if (n) {
            var r = n.documentElement;
            if (r) {
                for (var o = n.defaultView.HTMLElement,
                i = 0,
                a = 0,
                s = e.offsetHeight,
                c = e.offsetWidth; e !== n.body && e !== t;) {
                    if (i += e.offsetTop || 0, a += e.offsetLeft || 0, !(e.offsetParent instanceof o)) return;
                    e = e.offsetParent
                }
                var u = void 0,
                l = void 0,
                f = void 0;
                if (t && t !== n && t !== n.defaultView && t !== n.documentElement && t !== n.body) {
                    if (! (t instanceof o)) return;
                    f = t,
                    u = t.scrollHeight,
                    l = t.scrollWidth
                } else f = r,
                u = un(n).height(),
                l = un(n).width();
                return {
                    top: i,
                    left: a,
                    bottom: u - (i + s),
                    right: l - (a + c),
                    _container: f
                }
            }
        }
    }
    function J(e, t) {
        return K(),
        new Promise(function(n) {
            un(document).one("facebox:reveal",
            function() {
                n(un(".facebox-content")[0])
            }),
            e.div ? te(e.div, t) : un.isFunction(e) ? e.call(un) : Z(e, t)
        })
    }
    function K() {
        if (ee(), 1 === un(".facebox-loading").length) return ! 0; !
        function() {
            if (ne()) return;
            var e = document.querySelector(".facebox-overlay");
            e || ((e = document.createElement("div")).classList.add("bg-transparent-dark", "transition-in-out", "facebox-overlay", "facebox-overlay-hide"), e.hidden = !0, document.body && document.body.append(e));
            var t = oe.bind(null, document, "facebox:close");
            e.addEventListener("click", t, {
                once: !0
            }),
            e.classList.add("facebox-overlay-active"),
            er(e),
            e.hidden = !1
        } (),
        un(".facebox-content").empty().append('<div class="facebox-loading"></div>'),
        un(".facebox").show().css({
            top: function() {
                var e = void 0,
                t = void 0;
                self.pageYOffset ? (t = self.pageYOffset, e = self.pageXOffset) : document.documentElement && document.documentElement.scrollTop ? (t = document.documentElement.scrollTop, e = document.documentElement.scrollLeft) : document.body && (t = document.body.scrollTop, e = document.body.scrollLeft);
                return [e, t]
            } ()[1] +
            function() {
                var e = void 0;
                self.innerHeight ? e = self.innerHeight: document.documentElement && document.documentElement.clientHeight ? e = document.documentElement.clientHeight: document.body && (e = document.body.clientHeight);
                return e
            } () / 10,
            left: un(window).width() / 2 - un(".facebox-popup").outerWidth() / 2
        }),
        un(document).bind("keydown.facebox",
        function(e) {
            return 27 === e.keyCode && Q(),
            !0
        }),
        oe(document, "facebox:loading")
    }
    function Z(e, t) {
        t && un(".facebox-content").addClass(t),
        un(".facebox-content").empty().append(e),
        un(".facebox-loading").remove(),
        un(".facebox-popup").children().show(),
        un(".facebox").css("left", un(window).width() / 2 - un(".facebox-popup").outerWidth() / 2),
        un(".facebox-header").attr("tabindex", "-1"),
        un(".facebox-content [data-facebox-id]").each(function() {
            un(this).attr("id", un(this).attr("data-facebox-id"))
        }),
        un(".facebox-content [data-facebox-for]").each(function() {
            un(this).attr("for", un(this).attr("data-facebox-for"))
        }),
        un(".facebox .facebox-header").focus(),
        oe(document, "facebox:reveal")
    }
    function Q() {
        oe(document, "facebox:close")
    }
    function ee(e) {
        if (tr.inited) return ! 0;
        tr.inited = !0,
        e && un.extend(tr, e)
    }
    function te(e, t) {
        if (e.match(/#/)) {
            var n = window.location.href.split("#")[0],
            r = e.replace(n, "");
            if ("#" === r) return;
            Z(un(r).html(), t)
        }
    }
    function ne() {
        return ! 1 === tr.overlay
    }
    function re() {
        un(document).unbind("keydown.facebox"),
        un(".facebox").hide(),
        un(".facebox-content").removeClass().addClass("facebox-content"),
        un(".facebox-loading").remove(),
        oe(document, "facebox:afterClose"),
        function() {
            if (!ne()) {
                var e = document.querySelector(".facebox-overlay");
                e && e.remove()
            }
        } ()
    }
    function oe(e, t, n) {
        return e.dispatchEvent(new CustomEvent(t, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        }))
    }
    function ie() {
        if ("Intl" in window) try {
            return (new window.Intl.DateTimeFormat).resolvedOptions().timeZone
        } catch(e) {
            if (! (e instanceof RangeError)) throw e
        }
    }
    function ae(e, t) {
        return !! (e && t in e &&
        function(e) {
            return ! ("function" != typeof e || !e.toString().match(/native code/))
        } (e[t]))
    }
    function se() {
        return ae("classList" in or && or.classList, "add")
    }
    function ce(e) {
        var t = e.querySelector("meta[name=html-safe-nonce]");
        if (null == t || !(t instanceof HTMLMetaElement)) throw new Error("could not find html-safe-nonce on document");
        var n = t.content;
        if (n) return n;
        throw new Error("could not find html-safe-nonce on document")
    }
    function ue(e, t) {
        var n = t.headers.get("content-type") || "";
        if (!n.startsWith("text/html")) throw new Error("expected response with text/html, but was " + n);
        if ((t.headers.get("x-html-safe") || "") !== e) throw new Error("response X-HTML-Safe nonce did not match")
    }
    function le(e, t) {
        if ("function" != typeof HTMLTemplateElement.bootstrap) {
            var n = e.createElement("template");
            return n.innerHTML = t,
            e.importNode(n.content, !0)
        }
        var r = e.createDocumentFragment(),
        o = e.implementation.createHTMLDocument(void 0);
        Vt(o.body, "null.js:25"),
        o.body.innerHTML = t,
        Vt(o.body.childNodes, "null.js:28");
        var i = Array.from(o.body.childNodes),
        a = !0,
        s = !1,
        c = void 0;
        try {
            for (var u, l = i[Symbol.iterator](); ! (a = (u = l.next()).done); a = !0) {
                var f = u.value;
                r.appendChild(f)
            }
        } catch(e) {
            s = !0,
            c = e
        } finally {
            try { ! a && l.
                return && l.
                return ()
            } finally {
                if (s) throw c
            }
        }
        return "function" == typeof HTMLTemplateElement.bootstrap && HTMLTemplateElement.bootstrap(r),
        r
    }
    function fe(e) {
        if (e.status >= 200 && e.status < 300) return e;
        var t = new Error(e.statusText || e.status);
        throw t.response = e,
        t
    }
    function de(e) {
        return e.json()
    }
    function he(e) {
        return e.text()
    }
    function pe(e, t) {
        var n = t ? Object.assign({},
        t) : {};
        n.credentials || (n.credentials = "same-origin");
        var r = new Request(e, n);
        return r.headers.append("X-Requested-With", "XMLHttpRequest"),
        r
    }
    function me(e, t) {
        var n = pe(e, t);
        return self.fetch(n).then(fe)
    }
    function ve(e, t) {
        var n = pe(e, t);
        return self.fetch(n).then(fe).then(he)
    }
    function ge(e, t) {
        var n = pe(e, t);
        return n.headers.set("Accept", "application/json"),
        self.fetch(n).then(fe).then(de)
    }
    function ye(e, t, n) {
        return e.dispatchEvent(new CustomEvent(t, {
            bubbles: !0,
            cancelable: n
        }))
    }
    function be(e) {
        ye(e, "submit", !0) && e.submit()
    }
    function we(e) {
        if (! (e instanceof HTMLElement)) return ! 1;
        var t = e.nodeName.toLowerCase(),
        n = (e.getAttribute("type") || "").toLowerCase();
        return "select" === t || "textarea" === t || "input" === t && "submit" !== n && "reset" !== n || e.isContentEditable
    }
    function _e(e) {
        var t = new URLSearchParams,
        n = !0,
        r = !1,
        o = void 0;
        try {
            for (var i, a = fr(e)[Symbol.iterator](); ! (n = (i = a.next()).done); n = !0) {
                var s = i.value,
                c = zn(s, 2),
                u = c[0],
                l = c[1];
                t.append(u, l)
            }
        } catch(e) {
            r = !0,
            o = e
        } finally {
            try { ! n && a.
                return && a.
                return ()
            } finally {
                if (r) throw o
            }
        }
        return t.toString()
    }
    function Ee(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return xe(e) ||
        function(e, t) {
            var n = e.ownerDocument.activeElement;
            if (!n) return ! 1;
            if (t && n === e) return ! 1;
            return we(n) && e === n || e.contains(n)
        } (e, t) ||
        function(e) {
            return e.matches(":active")
        } (e) ||
        function(e) {
            return ! (!e.closest(".is-dirty") && !e.querySelector(".is-dirty"))
        } (e)
    }
    function xe(e) {
        var t = !0,
        n = !1,
        r = void 0;
        try {
            for (var o, i = e.querySelectorAll("input, textarea")[Symbol.iterator](); ! (t = (o = i.next()).done); t = !0) {
                var a = o.value;
                if ((a instanceof HTMLInputElement || a instanceof HTMLTextAreaElement) &&
                function(e) {
                    if (e instanceof HTMLInputElement && "checkbox" === e.type) {
                        if (e.checked !== e.defaultChecked) return ! 0
                    } else if (e.value !== e.defaultValue) return ! 0;
                    return ! 1
                } (a)) return ! 0
            }
        } catch(e) {
            n = !0,
            r = e
        } finally {
            try { ! t && i.
                return && i.
                return ()
            } finally {
                if (n) throw r
            }
        }
        return ! 1
    }
    function Te(e) {
        return e.split(",").reduce(function(e, t) {
            return e.push(t.split(" ")),
            e
        },
        [])
    }
    function ke() {
        jr = null,
        Sr = kr
    }
    function Se(e) {
        Dr && je(Dr),
        En(e, "menu:activate") && (document.addEventListener("keydown", Le), document.addEventListener("click", Oe), Dr = e, z(e,
        function() {
            e.classList.add("active");
            var t = e.querySelector(".js-menu-content [tabindex]");
            t && t.focus();
            var n = e.querySelector(".js-menu-target");
            n && (n.setAttribute("aria-expanded", "true"), n.hasAttribute("data-no-toggle") || n.classList.add("selected"))
        }), En(e, "menu:activated"))
    }
    function je(e) {
        e && En(e, "menu:deactivate") && (document.removeEventListener("keydown", Le), document.removeEventListener("click", Oe), Dr = null, z(e,
        function() {
            e.classList.remove("active");
            var t = e.querySelector(".js-menu-content");
            t && t.setAttribute("aria-expanded", "false");
            var n = e.querySelector(".js-menu-target");
            n && (n.setAttribute("aria-expanded", "false"), n.hasAttribute("data-no-toggle") || n.classList.remove("selected"))
        }), En(e, "menu:deactivated"))
    }
    function Oe(e) {
        if (Dr) {
            var t = e.target.closest("#facebox, .facebox-overlay"),
            n = t && !t.contains(Dr);
            Dr.contains(e.target) || n || (e.preventDefault(), je(Dr))
        }
    }
    function Le(e) {
        if (Dr) {
            var t = document.activeElement;
            t && "Escape" === e.key && (Dr.contains(t) && t.blur(), e.preventDefault(), je(Dr))
        }
    }
    function Ce(e) {
        return e ? 9 === e.nodeType ? e: e.ownerDocument ? e.ownerDocument: e.document ? e.document: null: null
    }
    function Ae(e, t) {
        var n = Ce(e);
        if (n) {
            e !== n && e !== n.defaultView && e !== n.documentElement && e !== n.body || (e = n);
            var r = n.defaultView.Document,
            o = n.defaultView.HTMLElement;
            if (null == t && (t = {}), null == t.top && null == t.left) if (t.target) {
                var i = G(t.target, e);
                null != i && (t.top = i.top, t.left = i.left)
            } else if (e instanceof o) {
                var a = G(e, e.offsetParent);
                e = e.offsetParent,
                null != a && (t.top = a.top, t.left = a.left)
            }
            if (e instanceof r || e === n.body) return null != t.top && un(n).scrollTop(t.top),
            void(null != t.left && un(n).scrollLeft(t.left));
            Vt(e instanceof o, "container is not HTMLElement -- null.js:66"),
            null != t.top && (e.scrollTop = t.top),
            null != t.left && (e.scrollLeft = t.left)
        }
    }
    function De(e) {
        qr.x === e.clientX && qr.y === e.clientY || (Fr = !1),
        qr = {
            x: e.clientX,
            y: e.clientY
        }
    }
    function Me(e) {
        if (!Fr) {
            var t = e.currentTarget;
            if (t.closest(".js-active-navigation-container")) {
                var n = e.target.closest(".js-navigation-item");
                n && ze(n, t)
            }
        }
    }
    function Pe(e) {
        if (! (e.target !== document.body && e.target instanceof HTMLElement) || e.target.classList.contains("js-navigation-enable")) {
            Fr = !0;
            var t = We(),
            n = void 0;
            if (t) {
                var r = t.querySelector(".js-navigation-item.navigation-focus") || t;
                n = En(r, "navigation:keydown", {
                    hotkey: D(e),
                    originalEvent: e,
                    originalTarget: e.target
                })
            }
            n || e.preventDefault()
        }
    }
    function Ne(e) {
        var t = e.currentTarget,
        n = e.modifierKey || e.altKey || e.ctrlKey || e.metaKey;
        En(t, "navigation:open", {
            modifierKey: n,
            shiftKey: e.shiftKey
        }) || e.preventDefault()
    }
    function Re(e) {
        var t = We();
        e !== t && (t && He(t), e.classList.add("js-active-navigation-container"))
    }
    function He(e) {
        e.classList.remove("js-active-navigation-container")
    }
    function Ie(e, t) {
        t || (t = e);
        var n = Xe(e)[0],
        r = t.closest(".js-navigation-item") || n;
        if (Re(e), r) {
            if (ze(r, e)) return;
            $e(V(r), r)
        }
    }
    function Fe(e) {
        var t = e.querySelectorAll(".navigation-focus.js-navigation-item"),
        n = !0,
        r = !1,
        o = void 0;
        try {
            for (var i, a = t[Symbol.iterator](); ! (n = (i = a.next()).done); n = !0) {
                i.value.classList.remove("navigation-focus")
            }
        } catch(e) {
            r = !0,
            o = e
        } finally {
            try { ! n && a.
                return && a.
                return ()
            } finally {
                if (r) throw o
            }
        }
    }
    function qe(e, t) {
        var n = Xe(t),
        r = n[n.indexOf(e) - 1];
        if (r) {
            if (ze(r, t)) return;
            var o = V(r);
            "page" === Ye(t) ? Ve(o, r) : $e(o, r)
        }
    }
    function Be(e, t) {
        var n = Xe(t),
        r = n[n.indexOf(e) + 1];
        if (r) {
            if (ze(r, t)) return;
            var o = V(r);
            "page" === Ye(t) ? Ve(o, r) : $e(o, r)
        }
    }
    function Ue(e, t) {
        null == t && (t = !1),
        En(e, "navigation:keyopen", {
            modifierKey: t
        })
    }
    function ze(e, t) {
        return ! En(e, "navigation:focus") || (Fe(t), e.classList.add("navigation-focus"), !1)
    }
    function We() {
        return document.querySelector(".js-active-navigation-container")
    }
    function Xe(e) {
        return Array.from(e.querySelectorAll(".js-navigation-item")).filter(R)
    }
    function Ye(e) {
        var t = void 0;
        return null != (t = e.getAttribute("data-navigation-scroll")) ? t: "item"
    }
    function Ve(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "smooth",
        r = $(t, e);
        r && (r.bottom <= 0 ? t.scrollIntoView({
            behavior: n,
            block: "start"
        }) : r.top <= 0 && t.scrollIntoView({
            behavior: n,
            block: "end"
        }))
    }
    function $e(e, t) {
        var n = G(t, e),
        r = $(t, e);
        if (null != n && null != r) if (r.bottom <= 0 && document.body) {
            Ae(e, {
                top: (null != e.offsetParent ? e.scrollHeight: document.body.scrollHeight) - (n.bottom + r.height)
            })
        } else r.top <= 0 && Ae(e, {
            top: n.top
        })
    }
    function Ge(e) {
        var t = e.target;
        if (t instanceof HTMLElement && t.nodeType !== Node.DOCUMENT_NODE) {
            var n = !0,
            r = !1,
            o = void 0;
            try {
                for (var i, a = Vr.matches(t)[Symbol.iterator](); ! (n = (i = a.next()).done); n = !0) {
                    i.value.data.call(null, t)
                }
            } catch(e) {
                r = !0,
                o = e
            } finally {
                try { ! n && a.
                    return && a.
                    return ()
                } finally {
                    if (r) throw o
                }
            }
        }
    }
    function Je(e, t) {
        Yr || (Yr = !0, document.addEventListener("focus", Ge, !0)),
        Vr.add(e, t),
        document.activeElement && document.activeElement.matches(e) && t(document.activeElement)
    }
    function Ke() {}
    function Ze(e) {
        for (var t = []; e && (t.push(function(e) {
            if (e === window) return "window";
            var t = [e.nodeName.toLowerCase()],
            n = e.id;
            n && t.push("#" + n);
            if ("function" == typeof e.getAttribute && e.getAttribute("class")) {
                var r = (e.getAttribute("class") || "").trim().split(/\s+/).join(".");
                r && t.push("." + r)
            }
            return t.join("")
        } (e)), e !== Ce(e) && !e.id);) e = e.parentNode;
        return t.reverse().join(" > ")
    }
    function Qe(e, t) {
        var n = function(e, t) {
            var n = N(e, "link[rel=pjax-prefetch]", HTMLLinkElement),
            r = !0,
            o = !1,
            i = void 0;
            try {
                for (var a, s = n[Symbol.iterator](); ! (r = (a = s.next()).done); r = !0) {
                    var c = a.value;
                    if (c.href === t) return c
                }
            } catch(e) {
                o = !0,
                i = e
            } finally {
                try { ! r && s.
                    return && s.
                    return ()
                } finally {
                    if (o) throw i
                }
            }
        } (e, t);
        if (n) {
            var r = Zr.get(n);
            return n.remove(),
            Zr.delete(n),
            r
        }
    }
    function et(e, t, n) {
        return e.dispatchEvent(new CustomEvent(t, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        }))
    }
    function tt(e) {
        nt({
            url: e.url,
            container: e.container
        })
    }
    function nt(e) {
        var t = function() {
            var e = In(regeneratorRuntime.mark(function e(t) {
                var r, s, c, u, l, f, d, h, p, m, v;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                    case 0:
                        return r = no,
                        s = function() {
                            var e = !0,
                            t = !1,
                            n = void 0;
                            try {
                                for (var r, o = document.getElementsByTagName("meta")[Symbol.iterator](); ! (e = (r = o.next()).done); e = !0) {
                                    var i = r.value,
                                    a = i.getAttribute("http-equiv");
                                    if (a && "X-PJAX-VERSION" === a.toUpperCase()) return i.content
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
                        } (),
                        c = t.headers.get("X-PJAX-Version"),
                        e.next = 5,
                        t.text();
                    case 5:
                        if (u = e.sent, l = function(e, t, n) {
                            Vt("string" == typeof n.requestUrl, "null.js:615");
                            var r = {
                                url: ft(t, n.requestUrl),
                                title: ""
                            },
                            o = /<html/i.test(e);
                            if ("text/html" != (t.headers.get("Content-Type") || "").split(";", 1)[0].trim()) return r;
                            var i = void 0,
                            a = void 0;
                            if (o) {
                                var s = e.match(/<head[^>]*>([\s\S.]*)<\/head>/i),
                                c = e.match(/<body[^>]*>([\s\S.]*)<\/body>/i);
                                i = s ? un(le(document, s[0]).childNodes) : un(),
                                a = c ? un(le(document, c[0]).childNodes) : un()
                            } else i = a = un(le(document, e).childNodes);
                            if (0 === a.length) return r;
                            r.title = lt(i, "title").last().text();
                            var u = void 0;
                            n.fragment ? (u = "body" === n.fragment ? a: lt(a, n.fragment).first()).length && (r.contents = "body" === n.fragment ? u: u.contents(), r.title || (r.title = u[0].getAttribute("title") || u[0].getAttribute("data-title"))) : o || (r.contents = a);
                            r.contents && (r.contents = r.contents.not(function() {
                                return un(this).is("title")
                            }), r.contents.find("title").remove(), r.scripts = lt(r.contents, "script[src]").remove(), Vt(r.contents, "null.js:684"), r.contents = r.contents.not(r.scripts));
                            r.title && (r.title = un.trim(r.title));
                            return r
                        } (u, t, n), f = st(l.url), o && (f.hash = o, l.url = f.href), !s || !c || s === c) {
                            e.next = 12;
                            break
                        }
                        return rt(l.url),
                        e.abrupt("return");
                    case 12:
                        if (l.contents) {
                            e.next = 15;
                            break
                        }
                        return rt(l.url),
                        e.abrupt("return");
                    case 15:
                        if (no = {
                            id: null != n.id ? n.id: it(),
                            url: l.url,
                            title: l.title,
                            container: a,
                            fragment: n.fragment,
                            timeout: n.timeout
                        },
                        !0 !== n.push && !0 !== n.replace || k(no, l.title, l.url), d = document.activeElement, h = un.contains(un(n.container)[0], d), d && h) try {
                            d.blur()
                        } catch(e) {}
                        l.title && (document.title = l.title),
                        et(i, "pjax:beforeReplace", {
                            contents: l.contents,
                            state: no,
                            previousState: r
                        }),
                        un(i).html(l.contents),
                        (p = un(i).find("input[autofocus], textarea[autofocus]").last()[0]) && document.activeElement !== p && p.focus(),
                        function(e) {
                            if (!e) return;
                            var t = un("script[src]");
                            e.each(function() {
                                var e = this.src;
                                if (!t.filter(function() {
                                    return this.src === e
                                }).length) {
                                    var n = document.createElement("script"),
                                    r = this.getAttribute("type");
                                    r && (n.type = r),
                                    n.src = this.getAttribute("src"),
                                    document.head && document.head.appendChild(n)
                                }
                            })
                        } (l.scripts),
                        m = n.scrollTo,
                        o && (v = S(document, o)) && (m = un(v).offset().top),
                        "number" == typeof m && un(window).scrollTop(m),
                        et(i, "pjax:success"),
                        et(i, "pjax:complete"),
                        et(i, "pjax:end");
                    case 32:
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
        n = {
            url: "",
            container: null
        };
        Object.assign(n, eo, e),
        Vt("string" == typeof n.url, "null.js:186"),
        n.requestUrl = n.url;
        var r = st(n.url),
        o = r.hash,
        i = n.container;
        Vt(i, "null.js:192");
        var a = ut(i);
        "GET" === n.type && (r.search += (r.search ? "&": "") + "_pjax=" + encodeURIComponent(a), n.url = r.toString()),
        no || k(no = {
            id: it(),
            url: window.location.href,
            title: document.title,
            container: a,
            fragment: n.fragment,
            timeout: n.timeout
        },
        no.title, no.url),
        tt.options = n,
        Vt("string" == typeof n.requestUrl, "null.js:329");
        var s = Qe(i, n.requestUrl);
        s || (Vt(n.url, "null.js:332"), s = me(n.url, {
            method: n.type,
            body: n.data,
            headers: {
                Accept: "text/html",
                "X-PJAX": "true",
                "X-PJAX-Container": a
            }
        }), "GET" === n.type && "number" == typeof n.timeout && n.timeout > 0 && (s = Promise.race([s, new Promise(function(e, t) {
            setTimeout(function() {
                et(i, "pjax:timeout") && t(new Error("timeout"))
            },
            n.timeout)
        })]))),
        !0 === n.push && !0 !== n.replace && (!
        function(e, t) {
            so[e] = t,
            uo.push(e),
            dt(co, 0),
            dt(uo, to)
        } (no.id, at(i)), Vt("string" == typeof n.requestUrl, "null.js:360"), T(null, "", n.requestUrl)),
        et(i, "pjax:start", {
            url: n.url
        }),
        et(i, "pjax:send"),
        ro.push(s).then(t,
        function(e) {
            var t = n.requestUrl;
            Vt("string" == typeof t, "null.js:206"),
            e.response && (t = ft(e.response, t));
            var r = et(i, "pjax:error");
            "GET" == n.type && r && rt(t),
            et(i, "pjax:complete"),
            et(i, "pjax:end")
        })
    }
    function rt(e) {
        Vt(no, "null.js:426"),
        k(null, "", no.url),
        window.location.replace(e)
    }
    function ot(e) {
        oo || ro.push(Promise.resolve(new Response));
        var t = no,
        n = e.originalEvent.state,
        r = void 0;
        if (n && n.container) {
            if (oo && io == n.url) return;
            if (t) {
                if (t.id === n.id) return;
                r = t.id < n.id ? "forward": "back"
            }
            var o = so[n.id] || [],
            i = un(o[0] || n.container)[0],
            a = o[1];
            if (i) {
                t &&
                function(e, t, n) {
                    var r = void 0,
                    o = void 0;
                    so[t] = n,
                    "forward" === e ? (r = uo, o = co) : (r = co, o = uo);
                    r.push(t),
                    (t = o.pop()) && delete so[t];
                    dt(r, to)
                } (r, t.id, at(i)),
                et(i, "pjax:popstate", {
                    state: n,
                    direction: r
                });
                var s = {
                    id: n.id,
                    url: n.url,
                    container: i,
                    push: !1,
                    fragment: n.fragment,
                    timeout: n.timeout,
                    scrollTo: !1
                };
                a ? (et(i, "pjax:start"), no = n, n.title && (document.title = n.title), et(i, "pjax:beforeReplace", {
                    contents: a,
                    state: n,
                    previousState: t
                }), un(i).html(a), et(i, "pjax:end")) : nt(s),
                i.offsetHeight
            } else rt(location.href)
        }
        oo = !1
    }
    function it() {
        return (new Date).getTime()
    }
    function at(e) {
        var t = un(e).clone();
        t.find("script").each(function() {
            this.src || un._data(this, "globalEval", !1)
        });
        return [ut(e), t.contents()]
    }
    function st(e) {
        var t = document.createElement("a");
        return t.href = e,
        t
    }
    function ct(e) {
        return e.href.replace(/#.*/, "")
    }
    function ut(e) {
        if (e.id) return "#" + e.id;
        throw new Error("pjax container has no id")
    }
    function lt(e, t) {
        return e.filter(t).add(e.find(t))
    }
    function ft(e, t) {
        var n = e.headers.get("X-PJAX-URL");
        return n ?
        function(e) {
            return e.search = e.search.replace(/([?&])(_pjax|_)=[^&]*/g, ""),
            e.href.replace(/\?($|#)/, "$1")
        } (st(n)) : t
    }
    function dt(e, t) {
        for (; e.length > t;) delete so[e.shift()]
    }
    function ht(e) {
        return new Promise(function(t) {
            setTimeout(function() {
                t()
            },
            e)
        })
    }
    function pt(e) {
        var t = document.querySelector(".facebox-content.sso-modal");
        t && (t.classList.remove("success", "error"), e ? t.classList.add("success") : t.classList.add("error"))
    }
    function mt() {
        go = null
    }
    function vt() {
        var e = void 0,
        t = void 0,
        n = new Promise(function(n, r) {
            e = n,
            t = r
        });
        return Vt("function" == typeof e, "null.js:19"),
        Vt("function" == typeof t, "null.js:20"),
        [n, e, t]
    }
    function gt(e, t) {
        Eo || (Eo = new cn, document.addEventListener("submit", yt)),
        Eo.add(e, t)
    }
    function yt(e) {
        var t = l(e.target, HTMLFormElement),
        n = Eo && Eo.matches(t);/*Eo是元素对象，两是否匹配*/
        if (n && 0 !== n.length) {
            t.hasAttribute("data-remote") && n.length > 1 && document.body && document.body.classList.contains("env-development") && console.warn("This form no longer needs the 'data-remote' attribute; you can remove it.", t);
            var r = function(e) {
                var t = {
                    method: e.method || "GET",
                    url: e.action,
                    headers: new Headers({
                        "X-Requested-With": "XMLHttpRequest"
                    }),
                    body: null
                };
                if ("GET" === t.method.toUpperCase()) {
                    var n = _e(e);
                    n && (t.url += (~t.url.indexOf("?") ? "&": "?") + n)
                } else t.body = new FormData(function(e) {
                    if (To) {
                        for (var t = void 0,
                        n = e.elements.length - 1; n >= 0 && ((t = e.elements[n]) instanceof HTMLButtonElement || t instanceof HTMLInputElement && ("submit" === t.type || "reset" === t.type || "text" === t.type && !t.name));) n--;
                        if (t instanceof HTMLInputElement && (("checkbox" === t.type || "radio" === t.type) && !t.checked || "file" === t.type)) {
                            var r = document.createElement("input");
                            r.type = "hidden",
                            r.name = "_ie11fix",
                            e.append(r)
                        }
                    }
                    return e
                } (e));
                return t
            } (t),
            o = vt(),
            i = zn(o, 3),
            a = i[0],
            s = i[1],
            c = i[2];
            e.preventDefault(),
            wo(n, t, r, a).then(function(e) {
                e ? _o(r).then(s, c).
                catch(function() {}).then(function() {
                    var e = !0,
                    n = !1,
                    r = void 0;
                    try {
                        for (var o, i = xo[Symbol.iterator](); ! (e = (o = i.next()).done); e = !0) { (0, o.value)(t)
                        }
                    } catch(e) {
                        n = !0,
                        r = e
                    } finally {
                        try { ! e && i.
                            return && i.
                            return ()
                        } finally {
                            if (n) throw r
                        }
                    }
                }) : t.submit()
            },
            function(e) {
                t.submit(),
                setTimeout(function() {
                    throw e
                })
            })
        }
    }
    function bt(e) {
        return setImmediate(e)
    }
    function wt(e, t) {
        return e.closest(".js-comment-body") === t.closest(".js-comment-body")
    }
    function _t(e) {
        if (e.currentTarget === e.target) {
            var t = l(e.currentTarget, Element);
            t.classList.add("is-ghost"),
            e.dataTransfer && e.dataTransfer.setData("text/plain", t.textContent.trim()),
            Vt(t.parentElement, "null.js:65");
            var n = Array.from(t.parentElement.children),
            r = n.indexOf(t);
            Ro = {
                didDrop: !1,
                dragging: t,
                dropzone: t,
                sourceList: M(t, ".contains-task-list"),
                sourceSibling: n[r + 1] || null,
                sourceIndex: r
            }
        }
    }
    function Et(e) {
        if (Ro) {
            var t = l(e.currentTarget, Element);
            wt(Ro.dragging, t) ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "move"), Ro.dropzone !== t && (Ro.dragging.classList.add("is-dragging"), Ro.dropzone = t, !
            function(e, t) {
                if (e.parentNode === t.parentNode) for (var n = e; n;) {
                    if (n === t) return ! 0;
                    n = n.previousElementSibling
                }
                return ! 1
            } (Ro.dragging, t) ? t.after(Ro.dragging) : t.before(Ro.dragging))) : e.stopPropagation()
        }
    }
    function xt(e) {
        if (Ro) {
            var t = l(e.currentTarget, Element);
            Ro.didDrop = !0,
            Vt(Ro.dragging.parentElement, "null.js:120");
            var n = Array.from(Ro.dragging.parentElement.children).indexOf(Ro.dragging),
            r = M(t, ".contains-task-list");
            if (Ro.sourceIndex !== n || Ro.sourceList !== r) {
                Ro.sourceList === r && Ro.sourceIndex < n && n++;
                var o = {
                    list: Ro.sourceList,
                    index: Ro.sourceIndex
                },
                i = {
                    list: r,
                    index: n
                },
                a = No.get(Ro.dragging);
                Vt(a, "null.js:135"),
                a({
                    src: o,
                    dst: i
                })
            }
        }
    }
    function Tt() {
        Ro && (Ro.dragging.classList.remove("is-dragging"), Ro.dragging.classList.remove("is-ghost"), Ro.didDrop || Ro.sourceList.insertBefore(Ro.dragging, Ro.sourceSibling), Ro = null)
    }
    function kt(e) {
        if (Ro) {
            var t = l(e.currentTarget, Element);
            wt(Ro.dragging, t) ? (e.preventDefault(), e.dataTransfer && (e.dataTransfer.dropEffect = "move")) : e.stopPropagation()
        }
    }
    function St(e) {
        e.currentTarget.classList.add("hovered")
    }
    function jt(e) {
        e.currentTarget.classList.remove("hovered")
    }
    function Ot(e) {
        var t = e.parentElement;
        Vt(t, "null.js:99");
        return Array.from(t.children).filter(function(e) {
            return "OL" === e.nodeName || "UL" === e.nodeName
        }).indexOf(e)
    }
    function Lt(e) {
        var t = e.src,
        n = e.dst;
        Mt(M(t.list, ".js-task-list-container"), "reordered", {
            operation: "move",
            src: [Ot(t.list), t.index],
            dst: [Ot(n.list), n.index]
        })
    }
    function Ct(e) {
        M(l(e.currentTarget, Element), ".task-list-item").setAttribute("draggable", "true")
    }
    function At(e) {
        if (!Ro) {
            M(l(e.currentTarget, Element), ".task-list-item").setAttribute("draggable", "false")
        }
    }
    function Dt(e) {
        if (e.querySelectorAll(".js-task-list-field").length > 0) {
            e.classList.add("is-task-list-enabled");
            var t = !0,
            n = !1,
            r = void 0;
            try {
                for (var o, i = e.querySelectorAll(".task-list-item")[Symbol.iterator](); ! (t = (o = i.next()).done); t = !0) {
                    o.value.classList.add("enabled")
                }
            } catch(e) {
                n = !0,
                r = e
            } finally {
                try { ! t && i.
                    return && i.
                    return ()
                } finally {
                    if (n) throw r
                }
            }
            var a = !0,
            s = !1,
            c = void 0;
            try {
                for (var u, l = N(e, ".task-list-item-checkbox", HTMLInputElement)[Symbol.iterator](); ! (a = (u = l.next()).done); a = !0) {
                    u.value.disabled = !1
                }
            } catch(e) {
                s = !0,
                c = e
            } finally {
                try { ! a && l.
                    return && l.
                    return ()
                } finally {
                    if (s) throw c
                }
            }
        }
    }
    function Mt(e, t, n) {
        var r = P(e, ".js-comment-update", HTMLFormElement); !
        function(e) {
            e.classList.remove("is-task-list-enabled");
            var t = !0,
            n = !1,
            r = void 0;
            try {
                for (var o, i = e.querySelectorAll(".task-list-item")[Symbol.iterator](); ! (t = (o = i.next()).done); t = !0) o.value.classList.remove("enabled")
            } catch(e) {
                n = !0,
                r = e
            } finally {
                try { ! t && i.
                    return && i.
                    return ()
                } finally {
                    if (n) throw r
                }
            }
            var a = !0,
            s = !1,
            c = void 0;
            try {
                for (var u, l = N(e, ".task-list-item-checkbox", HTMLInputElement)[Symbol.iterator](); ! (a = (u = l.next()).done); a = !0) u.value.disabled = !0
            } catch(e) {
                s = !0,
                c = e
            } finally {
                try { ! a && l.
                    return && l.
                    return ()
                } finally {
                    if (s) throw c
                }
            }
        } (e);
        var o = r.elements.namedItem("task_list_track");
        o && o.remove();
        var i = r.elements.namedItem("task_list_operation");
        i && i.remove();
        var a = document.createElement("input");
        a.setAttribute("type", "hidden"),
        a.setAttribute("name", "task_list_track"),
        a.setAttribute("value", t),
        r.appendChild(a);
        var s = document.createElement("input");
        if (s.setAttribute("type", "hidden"), s.setAttribute("name", "task_list_operation"), s.setAttribute("value", JSON.stringify(n)), r.appendChild(s), !r.elements.namedItem("task_list_key")) {
            var c = P(r, ".js-task-list-field").getAttribute("name");
            Vt(c, "null.js:234");
            var u = c.split("[")[0],
            l = document.createElement("input");
            l.setAttribute("type", "hidden"),
            l.setAttribute("name", "task_list_key"),
            l.setAttribute("value", u),
            r.appendChild(l)
        }
        e.classList.remove("is-comment-stale"),
        be(r)
    }
    function Pt(e) {
        return e.dispatchEvent(new CustomEvent("change", {
            bubbles: !0,
            cancelable: !1
        }))
    }
    function Nt(e) {
        var t = Fo.get(e);
        Vt(t, "null.js:24"),
        null != t.timer && clearTimeout(t.timer),
        t.timer = setTimeout(function() {
            null != t.timer && (t.timer = null),
            t.inputed = !1,
            t.listener.call(null, e)
        },
        t.wait)
    }
    function Rt(e) {
        var t = Fo.get(e.currentTarget);
        Vt(t, "null.js:36"),
        t.keypressed = !0,
        null != t.timer && clearTimeout(t.timer)
    }
    function Ht(e) {
        var t = Fo.get(e.currentTarget);
        Vt(t, "null.js:45"),
        Vt(e.currentTarget instanceof HTMLInputElement || e.currentTarget instanceof HTMLTextAreaElement, "null.js:46"),
        t.keypressed = !1,
        t.inputed && Nt(e.currentTarget)
    }
    function It(e) {
        var t = Fo.get(e.currentTarget);
        Vt(t, "null.js:55"),
        Vt(e.currentTarget instanceof HTMLInputElement || e.currentTarget instanceof HTMLTextAreaElement, "null.js:56"),
        t.inputed = !0,
        t.keypressed || Nt(e.currentTarget)
    }
    function Ft(e, t, n) {
        if (0 === t && 0 === n) return [0, 0];
        var r = qt(e);
        Ae(e, {
            top: r.top + n,
            left: r.left + t
        });
        var o = qt(e);
        return [o.left - r.left, o.top - r.top]
    }
    function qt(e) {
        return e.offsetParent ? {
            top: un(e).scrollTop(),
            left: un(e).scrollLeft()
        }: {
            top: un(document).scrollTop(),
            left: un(document).scrollLeft()
        }
    }
    function Bt(e) {
        return new Promise(function(t) {
            if (e === window &&
            function(e) {
                return e < Wr ? self.performance.now() - e: Date.now() - e
            } (Uo) > 500) bt(t);
            else {
                var n = U(function() {
                    e.removeEventListener("scroll", n, {
                        capture: !0,
                        passive: !0
                    }),
                    t()
                },
                500);
                e.addEventListener("scroll", n, {
                    capture: !0,
                    passive: !0
                }),
                n()
            }
        })
    }
    function Ut(e) {
        return Bt(window).then(function() {
            return zt(function() {
                if (document.activeElement !== document.body) return document.activeElement;
                var e = document.querySelectorAll(":hover"),
                t = e.length;
                if (t) return e[t - 1]
            } (), e)
        })
    }
    function zt(e, t) {
        if (!e) return t();
        var n = function(e) {
            var t = [];
            for (; e;) {
                var n = e.getBoundingClientRect(),
                r = n.top,
                o = n.left;
                t.push({
                    element: e,
                    top: r,
                    left: o
                }),
                e = e.parentElement
            }
            return t
        } (e),
        r = t.call(e),
        o = function(e) {
            for (var t = 0,
            n = e.length; t < n; t++) {
                var r = e[t];
                if (un.contains(document, r.element)) return r
            }
        } (n);
        if (o) {
            e = o.element;
            var i = o.top,
            a = o.left,
            s = e.getBoundingClientRect(),
            c = s.top;
            return function(e, t, n) {
                for (var r = V(e), o = 0, i = 0; r;) {
                    var a = Ft(r, t - o, n - i),
                    s = zn(a, 2);
                    if (o += s[0], i += s[1], o === t && i === n) break;
                    r = V(r)
                }
            } (e, s.left - a, c - i),
            r
        }
    }
    function Wt(e) {
        return new Promise(function(t, n) {
            e.onload = function() {
                200 === e.status ? t(e.responseText) : n(new Error("XMLHttpRequest " + e.statusText))
            },
            e.onerror = n,
            e.send()
        })
    }
    function Xt(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return Ut(function() {
            var r = le(document, t.trim()),
            o = n && e === e.ownerDocument.activeElement ? r.querySelector("*") : null;
            e.replaceWith(r),
            o && o.focus()
        })
    }
    String.prototype.codePointAt ||
    function() {
        var e = function() {
            try {
                var e = {},
                t = Object.defineProperty,
                n = t(e, e, e) && t
            } catch(e) {}
            return n
        } (),
        t = function(e) {
            if (null == this) throw TypeError();
            var t = String(this),
            n = t.length,
            r = e ? Number(e) : 0;
            if (r != r && (r = 0), !(r < 0 || r >= n)) {
                var o, i = t.charCodeAt(r);
                return i >= 55296 && i <= 56319 && n > r + 1 && (o = t.charCodeAt(r + 1)) >= 56320 && o <= 57343 ? 1024 * (i - 55296) + o - 56320 + 65536 : i
            }
        };
        e ? e(String.prototype, "codePointAt", {
            value: t,
            configurable: !0,
            writable: !0
        }) : String.prototype.codePointAt = t
    } (),
    String.prototype.endsWith ||
    function() {
        var e = function() {
            try {
                var e = {},
                t = Object.defineProperty,
                n = t(e, e, e) && t
            } catch(e) {}
            return n
        } (),
        t = {}.toString,
        n = function(e) {
            if (null == this) throw TypeError();
            var n = String(this);
            if (e && "[object RegExp]" == t.call(e)) throw TypeError();
            var r = n.length,
            o = String(e),
            i = o.length,
            a = r;
            if (arguments.length > 1) {
                var s = arguments[1];
                void 0 !== s && (a = s ? Number(s) : 0) != a && (a = 0)
            }
            var c = Math.min(Math.max(a, 0), r) - i;
            if (c < 0) return ! 1;
            for (var u = -1; ++u < i;) if (n.charCodeAt(c + u) != o.charCodeAt(u)) return ! 1;
            return ! 0
        };
        e ? e(String.prototype, "endsWith", {
            value: n,
            configurable: !0,
            writable: !0
        }) : String.prototype.endsWith = n
    } (),
    String.prototype.startsWith ||
    function() {
        var e = function() {
            try {
                var e = {},
                t = Object.defineProperty,
                n = t(e, e, e) && t
            } catch(e) {}
            return n
        } (),
        t = {}.toString,
        n = function(e) {
            if (null == this) throw TypeError();
            var n = String(this);
            if (e && "[object RegExp]" == t.call(e)) throw TypeError();
            var r = n.length,
            o = String(e),
            i = o.length,
            a = arguments.length > 1 ? arguments[1] : void 0,
            s = a ? Number(a) : 0;
            s != s && (s = 0);
            var c = Math.min(Math.max(s, 0), r);
            if (i + c > r) return ! 1;
            for (var u = -1; ++u < i;) if (n.charCodeAt(c + u) != o.charCodeAt(u)) return ! 1;
            return ! 0
        };
        e ? e(String.prototype, "startsWith", {
            value: n,
            configurable: !0,
            writable: !0
        }) : String.prototype.startsWith = n
    } (),
    Array.from ||
    function() {
        var e = function() {
            try {
                var e = {},
                t = Object.defineProperty,
                n = t(e, e, e) && t
            } catch(e) {}
            return n ||
            function(e, t, n) {
                e[t] = n.value
            }
        } (),
        t = Object.prototype.toString,
        n = function(e) {
            return "function" == typeof e || "[object Function]" == t.call(e)
        },
        r = Math.pow(2, 53) - 1;
        e(Array, "from", {
            value: function(t) {
                if (null == t) throw new TypeError("`Array.from` requires an array-like object, not `null` or `undefined`");
                var o, i, a = Object(t);
                arguments.length;
                if (arguments.length > 1) {
                    if (o = arguments[1], !n(o)) throw new TypeError("When provided, the second argument to `Array.from` must be a function");
                    arguments.length > 2 && (i = arguments[2])
                }
                for (var s, c, u = function(e) {
                    var t = function(e) {
                        var t = Number(e);
                        return isNaN(t) ? 0 : 0 != t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
                    } (a.length);
                    return Math.min(Math.max(t, 0), r)
                } (), l = n(this) ? Object(new this(u)) : new Array(u), f = 0; f < u;) s = a[f],
                c = o ? void 0 === i ? o(s, f) : o.call(i, s, f) : s,
                e(l, f, {
                    value: c,
                    configurable: !0,
                    enumerable: !0
                }),
                ++f;
                return l.length = u,
                l
            },
            configurable: !0,
            writable: !0
        })
    } ();
    var Yt = "undefined" != typeof window ? window: "undefined" != typeof global ? global: "undefined" != typeof self ? self: {}; !
    function t(n, r, o) {
        function i(s, c) {
            if (!r[s]) {
                if (!n[s]) {
                    var u = "function" == typeof e && e;
                    if (!c && u) return u(s, !0);
                    if (a) return a(s, !0);
                    var l = new Error("Cannot find module '" + s + "'");
                    throw l.code = "MODULE_NOT_FOUND",
                    l
                }
                var f = r[s] = {
                    exports: {}
                };
                n[s][0].call(f.exports,
                function(e) {
                    var t = n[s][1][e];
                    return i(t || e)
                },
                f, f.exports, t, n, r, o)
            }
            return r[s].exports
        }
        for (var a = "function" == typeof e && e,
        s = 0; s < o.length; s++) i(o[s]);
        return i
    } ({
        1 : [function(e, t, n) {
            e("./is-implemented")() || Object.defineProperty(window, "Symbol", {
                value: e("./polyfill"),
                configurable: !0,
                enumerable: !1,
                writable: !0
            })
        },
        {
            "./is-implemented": 2,
            "./polyfill": 17
        }],
        2 : [function(e, t, n) {
            var r = {
                object: !0,
                symbol: !0
            };
            t.exports = function() {
                var e;
                if ("function" != typeof Symbol) return ! 1;
                e = Symbol("test symbol");
                try {
                    String(e)
                } catch(e) {
                    return ! 1
                }
                return !! r[typeof Symbol.iterator] && ( !! r[typeof Symbol.toPrimitive] && !!r[typeof Symbol.toStringTag])
            }
        },
        {}],
        3 : [function(e, t, n) {
            t.exports = function(e) {
                return !! e && ("symbol" == typeof e || !!e.constructor && ("Symbol" === e.constructor.name && "Symbol" === e[e.constructor.toStringTag]))
            }
        },
        {}],
        4 : [function(e, t, n) {
            var r = e("es5-ext/object/assign"),
            o = e("es5-ext/object/normalize-options"),
            i = e("es5-ext/object/is-callable"),
            a = e("es5-ext/string/#/contains"); (t.exports = function(e, t) {
                var n, i, s, c, u;
                return arguments.length < 2 || "string" != typeof e ? (c = t, t = e, e = null) : c = arguments[2],
                null == e ? (n = s = !0, i = !1) : (n = a.call(e, "c"), i = a.call(e, "e"), s = a.call(e, "w")),
                u = {
                    value: t,
                    configurable: n,
                    enumerable: i,
                    writable: s
                },
                c ? r(o(c), u) : u
            }).gs = function(e, t, n) {
                var s, c, u, l;
                return "string" != typeof e ? (u = n, n = t, t = e, e = null) : u = arguments[3],
                null == t ? t = void 0 : i(t) ? null == n ? n = void 0 : i(n) || (u = n, n = void 0) : (u = t, t = n = void 0),
                null == e ? (s = !0, c = !1) : (s = a.call(e, "c"), c = a.call(e, "e")),
                l = {
                    get: t,
                    set: n,
                    configurable: s,
                    enumerable: c
                },
                u ? r(o(u), l) : l
            }
        },
        {
            "es5-ext/object/assign": 5,
            "es5-ext/object/is-callable": 8,
            "es5-ext/object/normalize-options": 12,
            "es5-ext/string/#/contains": 14
        }],
        5 : [function(e, t, n) {
            t.exports = e("./is-implemented")() ? Object.assign: e("./shim")
        },
        {
            "./is-implemented": 6,
            "./shim": 7
        }],
        6 : [function(e, t, n) {
            t.exports = function() {
                var e, t = Object.assign;
                return "function" == typeof t && (e = {
                    foo: "raz"
                },
                t(e, {
                    bar: "dwa"
                },
                {
                    trzy: "trzy"
                }), e.foo + e.bar + e.trzy === "razdwatrzy")
            }
        },
        {}],
        7 : [function(e, t, n) {
            var r = e("../keys"),
            o = e("../valid-value"),
            i = Math.max;
            t.exports = function(e, t) {
                var n, a, s, c = i(arguments.length, 2);
                for (e = Object(o(e)), s = function(r) {
                    try {
                        e[r] = t[r]
                    } catch(e) {
                        n || (n = e)
                    }
                },
                a = 1; a < c; ++a) t = arguments[a],
                r(t).forEach(s);
                if (void 0 !== n) throw n;
                return e
            }
        },
        {
            "../keys": 9,
            "../valid-value": 13
        }],
        8 : [function(e, t, n) {
            t.exports = function(e) {
                return "function" == typeof e
            }
        },
        {}],
        9 : [function(e, t, n) {
            t.exports = e("./is-implemented")() ? Object.keys: e("./shim")
        },
        {
            "./is-implemented": 10,
            "./shim": 11
        }],
        10 : [function(e, t, n) {
            t.exports = function() {
                try {
                    return Object.keys("primitive"),
                    !0
                } catch(e) {
                    return ! 1
                }
            }
        },
        {}],
        11 : [function(e, t, n) {
            var r = Object.keys;
            t.exports = function(e) {
                return r(null == e ? e: Object(e))
            }
        },
        {}],
        12 : [function(e, t, n) {
            var r = Array.prototype.forEach,
            o = Object.create;
            t.exports = function(e) {
                var t = o(null);
                return r.call(arguments,
                function(e) {
                    null != e &&
                    function(e, t) {
                        var n;
                        for (n in e) t[n] = e[n]
                    } (Object(e), t)
                }),
                t
            }
        },
        {}],
        13 : [function(e, t, n) {
            t.exports = function(e) {
                if (null == e) throw new TypeError("Cannot use null or undefined");
                return e
            }
        },
        {}],
        14 : [function(e, t, n) {
            t.exports = e("./is-implemented")() ? String.prototype.contains: e("./shim")
        },
        {
            "./is-implemented": 15,
            "./shim": 16
        }],
        15 : [function(e, t, n) {
            var r = "razdwatrzy";
            t.exports = function() {
                return "function" == typeof r.contains && (!0 === r.contains("dwa") && !1 === r.contains("foo"))
            }
        },
        {}],
        16 : [function(e, t, n) {
            var r = String.prototype.indexOf;
            t.exports = function(e) {
                return r.call(this, e, arguments[1]) > -1
            }
        },
        {}],
        17 : [function(e, t, n) {
            var r, o, i, a, s = e("d"),
            c = e("./validate-symbol"),
            u = Object.create,
            l = Object.defineProperties,
            f = Object.defineProperty,
            d = Object.prototype,
            h = u(null);
            if ("function" == typeof Symbol) {
                r = Symbol;
                try {
                    String(r()),
                    a = !0
                } catch(e) {}
            }
            var p = function() {
                var e = u(null);
                return function(t) {
                    for (var n, r, o = 0; e[t + (o || "")];)++o;
                    return t += o || "",
                    e[t] = !0,
                    n = "@@" + t,
                    f(d, n, s.gs(null,
                    function(e) {
                        r || (r = !0, f(this, n, s(e)), r = !1)
                    })),
                    n
                }
            } ();
            i = function(e) {
                if (this instanceof i) throw new TypeError("Symbol is not a constructor");
                return o(e)
            },
            t.exports = o = function e(t) {
                var n;
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return a ? r(t) : (n = u(i.prototype), t = void 0 === t ? "": String(t), l(n, {
                    __description__: s("", t),
                    __name__: s("", p(t))
                }))
            },
            l(o, {
                for: s(function(e) {
                    return h[e] ? h[e] : h[e] = o(String(e))
                }),
                keyFor: s(function(e) {
                    var t;
                    c(e);
                    for (t in h) if (h[t] === e) return t
                }),
                hasInstance: s("", r && r.hasInstance || o("hasInstance")),
                isConcatSpreadable: s("", r && r.isConcatSpreadable || o("isConcatSpreadable")),
                iterator: s("", r && r.iterator || o("iterator")),
                match: s("", r && r.match || o("match")),
                replace: s("", r && r.replace || o("replace")),
                search: s("", r && r.search || o("search")),
                species: s("", r && r.species || o("species")),
                split: s("", r && r.split || o("split")),
                toPrimitive: s("", r && r.toPrimitive || o("toPrimitive")),
                toStringTag: s("", r && r.toStringTag || o("toStringTag")),
                unscopables: s("", r && r.unscopables || o("unscopables"))
            }),
            l(i.prototype, {
                constructor: s(o),
                toString: s("",
                function() {
                    return this.__name__
                })
            }),
            l(o.prototype, {
                toString: s(function() {
                    return "Symbol (" + c(this).__description__ + ")"
                }),
                valueOf: s(function() {
                    return c(this)
                })
            }),
            f(o.prototype, o.toPrimitive, s("",
            function() {
                var e = c(this);
                return "symbol" == typeof e ? e: e.toString()
            })),
            f(o.prototype, o.toStringTag, s("c", "Symbol")),
            f(i.prototype, o.toStringTag, s("c", o.prototype[o.toStringTag])),
            f(i.prototype, o.toPrimitive, s("c", o.prototype[o.toPrimitive]))
        },
        {
            "./validate-symbol": 18,
            d: 4
        }],
        18 : [function(e, t, n) {
            var r = e("./is-symbol");
            t.exports = function(e) {
                if (!r(e)) throw new TypeError(e + " is not a symbol");
                return e
            }
        },
        {
            "./is-symbol": 3
        }]
    },
    {},
    [1]);
    Array.prototype[Symbol.iterator] || (Array.prototype[Symbol.iterator] = r),
    NodeList.prototype[Symbol.iterator] || Object.defineProperty(NodeList.prototype, Symbol.iterator, {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return r
        }
    }),
    HTMLCollection.prototype[Symbol.iterator] || Object.defineProperty(HTMLCollection.prototype, Symbol.iterator, {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return r
        }
    }),
    window.Headers && !Headers.prototype[Symbol.iterator] && (Headers.prototype[Symbol.iterator] = function() {
        var e = [];
        return this.forEach(function(t, n) {
            e.push([n, t])
        }),
        e[Symbol.iterator]()
    }),
    function t(n, r, o) {
        function i(s, c) {
            if (!r[s]) {
                if (!n[s]) {
                    var u = "function" == typeof e && e;
                    if (!c && u) return u(s, !0);
                    if (a) return a(s, !0);
                    var l = new Error("Cannot find module '" + s + "'");
                    throw l.code = "MODULE_NOT_FOUND",
                    l
                }
                var f = r[s] = {
                    exports: {}
                };
                n[s][0].call(f.exports,
                function(e) {
                    var t = n[s][1][e];
                    return i(t || e)
                },
                f, f.exports, t, n, r, o)
            }
            return r[s].exports
        }
        for (var a = "function" == typeof e && e,
        s = 0; s < o.length; s++) i(o[s]);
        return i
    } ({
        1 : [function(e, t, n) {
            e("./index").polyfill()
        },
        {
            "./index": 2
        }],
        2 : [function(e, t, n) {
            function r(e, t) {
                if (void 0 === e || null === e) throw new TypeError("Cannot convert first argument to object");
                for (var n = Object(e), r = 1; r < arguments.length; r++) {
                    var o = arguments[r];
                    if (void 0 !== o && null !== o) for (var i = Object.keys(Object(o)), a = 0, s = i.length; a < s; a++) {
                        var c = i[a],
                        u = Object.getOwnPropertyDescriptor(o, c);
                        void 0 !== u && u.enumerable && (n[c] = o[c])
                    }
                }
                return n
            }
            t.exports = {
                assign: r,
                polyfill: function() {
                    Object.assign || Object.defineProperty(Object, "assign", {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: r
                    })
                }
            }
        },
        {}]
    },
    {},
    [1]); !
    function(e) {
        function t(e) {
            if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
        }
        function n(e) {
            return "string" != typeof e && (e = String(e)),
            e
        }
        function r(e) {
            var t = {
                next: function() {
                    var t = e.shift();
                    return {
                        done: void 0 === t,
                        value: t
                    }
                }
            };
            return h.iterable && (t[Symbol.iterator] = function() {
                return t
            }),
            t
        }
        function o(e) {
            this.map = {},
            e instanceof o ? e.forEach(function(e, t) {
                this.append(t, e)
            },
            this) : Array.isArray(e) ? e.forEach(function(e) {
                this.append(e[0], e[1])
            },
            this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                this.append(t, e[t])
            },
            this)
        }
        function i(e) {
            if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0
        }
        function a(e) {
            return new Promise(function(t, n) {
                e.onload = function() {
                    t(e.result)
                },
                e.onerror = function() {
                    n(e.error)
                }
            })
        }
        function s(e) {
            var t = new FileReader,
            n = a(t);
            return t.readAsArrayBuffer(e),
            n
        }
        function c(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)),
            t.buffer
        }
        function u() {
            return this.bodyUsed = !1,
            this._initBody = function(e) {
                if (this._bodyInit = e, e) if ("string" == typeof e) this._bodyText = e;
                else if (h.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                else if (h.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                else if (h.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                else if (h.arrayBuffer && h.blob && m(e)) this._bodyArrayBuffer = c(e.buffer),
                this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!h.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !v(e)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = c(e)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : h.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            },
            h.blob && (this.blob = function() {
                var e = i(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            },
            this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? i(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(s)
            }),
            this.text = function() {
                var e = i(this);
                if (e) return e;
                if (this._bodyBlob) return function(e) {
                    var t = new FileReader,
                    n = a(t);
                    return t.readAsText(e),
                    n
                } (this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                    for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                    return n.join("")
                } (this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            },
            h.formData && (this.formData = function() {
                return this.text().then(f)
            }),
            this.json = function() {
                return this.text().then(JSON.parse)
            },
            this
        }
        function l(e, t) {
            var n = (t = t || {}).body;
            if (e instanceof l) {
                if (e.bodyUsed) throw new TypeError("Already read");
                this.url = e.url,
                this.credentials = e.credentials,
                t.headers || (this.headers = new o(e.headers)),
                this.method = e.method,
                this.mode = e.mode,
                n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new o(t.headers)), this.method = function(e) {
                var t = e.toUpperCase();
                return g.indexOf(t) > -1 ? t: e
            } (t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n)
        }
        function f(e) {
            var t = new FormData;
            return e.trim().split("&").forEach(function(e) {
                if (e) {
                    var n = e.split("="),
                    r = n.shift().replace(/\+/g, " "),
                    o = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(r), decodeURIComponent(o))
                }
            }),
            t
        }
        function d(e, t) {
            t || (t = {}),
            this.type = "default",
            this.status = "status" in t ? t.status: 200,
            this.ok = this.status >= 200 && this.status < 300,
            this.statusText = "statusText" in t ? t.statusText: "OK",
            this.headers = new o(t.headers),
            this.url = t.url || "",
            this._initBody(e)
        }
        if (!e.fetch) {
            var h = {
                searchParams: "URLSearchParams" in e,
                iterable: "Symbol" in e && "iterator" in Symbol,
                blob: "FileReader" in e && "Blob" in e &&
                function() {
                    try {
                        return new Blob,
                        !0
                    } catch(e) {
                        return ! 1
                    }
                } (),
                formData: "FormData" in e,
                arrayBuffer: "ArrayBuffer" in e
            };
            if (h.arrayBuffer) var p = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            m = function(e) {
                return e && DataView.prototype.isPrototypeOf(e)
            },
            v = ArrayBuffer.isView ||
            function(e) {
                return e && p.indexOf(Object.prototype.toString.call(e)) > -1
            };
            o.prototype.append = function(e, r) {
                e = t(e),
                r = n(r);
                var o = this.map[e];
                this.map[e] = o ? o + "," + r: r
            },
            o.prototype.delete = function(e) {
                delete this.map[t(e)]
            },
            o.prototype.get = function(e) {
                return e = t(e),
                this.has(e) ? this.map[e] : null
            },
            o.prototype.has = function(e) {
                return this.map.hasOwnProperty(t(e))
            },
            o.prototype.set = function(e, r) {
                this.map[t(e)] = n(r)
            },
            o.prototype.forEach = function(e, t) {
                for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
            },
            o.prototype.keys = function() {
                var e = [];
                return this.forEach(function(t, n) {
                    e.push(n)
                }),
                r(e)
            },
            o.prototype.values = function() {
                var e = [];
                return this.forEach(function(t) {
                    e.push(t)
                }),
                r(e)
            },
            o.prototype.entries = function() {
                var e = [];
                return this.forEach(function(t, n) {
                    e.push([n, t])
                }),
                r(e)
            },
            h.iterable && (o.prototype[Symbol.iterator] = o.prototype.entries);
            var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            l.prototype.clone = function() {
                return new l(this, {
                    body: this._bodyInit
                })
            },
            u.call(l.prototype),
            u.call(d.prototype),
            d.prototype.clone = function() {
                return new d(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new o(this.headers),
                    url: this.url
                })
            },
            d.error = function() {
                var e = new d(null, {
                    status: 0,
                    statusText: ""
                });
                return e.type = "error",
                e
            };
            var y = [301, 302, 303, 307, 308];
            d.redirect = function(e, t) {
                if ( - 1 === y.indexOf(t)) throw new RangeError("Invalid status code");
                return new d(null, {
                    status: t,
                    headers: {
                        location: e
                    }
                })
            },
            e.Headers = o,
            e.Request = l,
            e.Response = d,
            e.fetch = function(e, t) {
                return new Promise(function(n, r) {
                    var i = new l(e, t),
                    a = new XMLHttpRequest;
                    a.onload = function() {
                        var e = {
                            status: a.status,
                            statusText: a.statusText,
                            headers: function(e) {
                                var t = new o;
                                return e.split(/\r?\n/).forEach(function(e) {
                                    var n = e.split(":"),
                                    r = n.shift().trim();
                                    if (r) {
                                        var o = n.join(":").trim();
                                        t.append(r, o)
                                    }
                                }),
                                t
                            } (a.getAllResponseHeaders() || "")
                        };
                        e.url = "responseURL" in a ? a.responseURL: e.headers.get("X-Request-URL");
                        var t = "response" in a ? a.response: a.responseText;
                        n(new d(t, e))
                    },
                    a.onerror = function() {
                        r(new TypeError("Network request failed"))
                    },
                    a.ontimeout = function() {
                        r(new TypeError("Network request failed"))
                    },
                    a.open(i.method, i.url, !0),
                    "include" === i.credentials && (a.withCredentials = !0),
                    "responseType" in a && h.blob && (a.responseType = "blob"),
                    i.headers.forEach(function(e, t) {
                        a.setRequestHeader(t, e)
                    }),
                    a.send(void 0 === i._bodyInit ? null: i._bodyInit)
                })
            },
            e.fetch.polyfill = !0
        }
    } ("undefined" != typeof self ? self: void 0),
    function() {
        function e(e) {
            var t = _.has(e);
            return e = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e),
            !t && e
        }
        function t(e) {
            var t = e.isConnected;
            if (void 0 !== t) return t;
            for (; e && !(e.__CE_isImportDocument || e instanceof Document);) e = e.parentNode || (window.ShadowRoot && e instanceof ShadowRoot ? e.host: void 0);
            return ! (!e || !(e.__CE_isImportDocument || e instanceof Document))
        }
        function n(e, t) {
            for (; t && t !== e && !t.nextSibling;) t = t.parentNode;
            return t && t !== e ? t.nextSibling: null
        }
        function r(e, t, o) {
            o = o || new Set;
            for (var i = e; i;) {
                if (i.nodeType === Node.ELEMENT_NODE) {
                    var a = i;
                    t(a);
                    var s = a.localName;
                    if ("link" === s && "import" === a.getAttribute("rel")) {
                        if ((i = a.import) instanceof Node && !o.has(i)) for (o.add(i), i = i.firstChild; i; i = i.nextSibling) r(i, t, o);
                        i = n(e, a);
                        continue
                    }
                    if ("template" === s) {
                        i = n(e, a);
                        continue
                    }
                    if (a = a.__CE_shadowRoot) for (a = a.firstChild; a; a = a.nextSibling) r(a, t, o)
                }
                i = i.firstChild ? i.firstChild: n(e, i)
            }
        }
        function o(e, t, n) {
            e[t] = n
        }
        function i() {
            this.a = new Map,
            this.o = new Map,
            this.f = [],
            this.b = !1
        }
        function a(e, t) {
            e.b = !0,
            e.f.push(t)
        }
        function s(e, t) {
            e.b && r(t,
            function(t) {
                return c(e, t)
            })
        }
        function c(e, t) {
            if (e.b && !t.__CE_patched) {
                t.__CE_patched = !0;
                for (var n = 0; n < e.f.length; n++) e.f[n](t)
            }
        }
        function u(e, t) {
            var n = [];
            for (r(t,
            function(e) {
                return n.push(e)
            }), t = 0; t < n.length; t++) {
                var o = n[t];
                1 === o.__CE_state ? e.connectedCallback(o) : d(e, o)
            }
        }
        function l(e, t) {
            var n = [];
            for (r(t,
            function(e) {
                return n.push(e)
            }), t = 0; t < n.length; t++) {
                var o = n[t];
                1 === o.__CE_state && e.disconnectedCallback(o)
            }
        }
        function f(e, t, n) {
            var o = (n = n || {}).w || new Set,
            i = n.s ||
            function(t) {
                return d(e, t)
            },
            a = [];
            if (r(t,
            function(t) {
                if ("link" === t.localName && "import" === t.getAttribute("rel")) {
                    var n = t.import;
                    n instanceof Node && (n.__CE_isImportDocument = !0, n.__CE_hasRegistry = !0),
                    n && "complete" === n.readyState ? n.__CE_documentLoadHandled = !0 : t.addEventListener("load",
                    function() {
                        var n = t.import;
                        if (!n.__CE_documentLoadHandled) {
                            n.__CE_documentLoadHandled = !0;
                            var r = new Set(o);
                            r.delete(n),
                            f(e, n, {
                                w: r,
                                s: i
                            })
                        }
                    })
                } else a.push(t)
            },
            o), e.b) for (t = 0; t < a.length; t++) c(e, a[t]);
            for (t = 0; t < a.length; t++) i(a[t])
        }
        function d(e, n) {
            if (void 0 === n.__CE_state) {
                var r = n.ownerDocument;
                if ((r.defaultView || r.__CE_isImportDocument && r.__CE_hasRegistry) && (r = e.a.get(n.localName))) {
                    r.constructionStack.push(n);
                    var o = r.constructor;
                    try {
                        try {
                            if (new o !== n) throw Error("The custom element constructor did not produce the element being upgraded.")
                        } finally {
                            r.constructionStack.pop()
                        }
                    } catch(e) {
                        throw n.__CE_state = 2,
                        e
                    }
                    if (n.__CE_state = 1, n.__CE_definition = r, r.attributeChangedCallback) for (r = r.observedAttributes, o = 0; o < r.length; o++) {
                        var i = r[o],
                        a = n.getAttribute(i);
                        null !== a && e.attributeChangedCallback(n, i, null, a, null)
                    }
                    t(n) && e.connectedCallback(n)
                }
            }
        }
        function h(e, t) {
            this.c = e,
            this.a = t,
            this.b = void 0,
            f(this.c, this.a),
            "loading" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), this.b.observe(this.a, {
                childList: !0,
                subtree: !0
            }))
        }
        function p(e) {
            e.b && e.b.disconnect()
        }
        function m(e) {
            if (e.a) throw Error("Already resolved.");
            e.a = void 0,
            e.b && e.b(void 0)
        }
        function v(e) {
            this.i = !1,
            this.c = e,
            this.m = new Map,
            this.j = function(e) {
                return e()
            },
            this.g = !1,
            this.l = [],
            this.u = new h(e, document)
        }
        function g(e) {
            if (!1 !== e.g) {
                e.g = !1;
                for (var t = e.l,
                n = [], r = new Map, o = 0; o < t.length; o++) r.set(t[o].localName, []);
                for (f(e.c, document, {
                    s: function(t) {
                        if (void 0 === t.__CE_state) {
                            var o = t.localName,
                            i = r.get(o);
                            i ? i.push(t) : e.c.a.get(o) && n.push(t)
                        }
                    }
                }), o = 0; o < n.length; o++) d(e.c, n[o]);
                for (; 0 < t.length;) {
                    for (var o = (i = t.shift()).localName, i = r.get(i.localName), a = 0; a < i.length; a++) d(e.c, i[a]); (o = e.m.get(o)) && m(o)
                }
            }
        }
        function y(e, n, r) {
            function o(n) {
                return function(r) {
                    for (var o = [], i = 0; i < arguments.length; ++i) o[i - 0] = arguments[i];
                    for (var i = [], a = [], s = 0; s < o.length; s++) {
                        var c = o[s];
                        if (c instanceof Element && t(c) && a.push(c), c instanceof DocumentFragment) for (c = c.firstChild; c; c = c.nextSibling) i.push(c);
                        else i.push(c)
                    }
                    for (n.apply(this, o), o = 0; o < a.length; o++) l(e, a[o]);
                    if (t(this)) for (o = 0; o < i.length; o++)(a = i[o]) instanceof Element && u(e, a)
                }
            }
            r.h && (n.prepend = o(r.h)),
            r.append && (n.append = o(r.append))
        }
        function b() {
            function e(e, n) {
                Object.defineProperty(e, "innerHTML", {
                    enumerable: n.enumerable,
                    configurable: !0,
                    get: n.get,
                    set: function(e) {
                        var o = this,
                        i = void 0;
                        if (t(this) && (i = [], r(this,
                        function(e) {
                            e !== o && i.push(e)
                        })), n.set.call(this, e), i) for (var a = 0; a < i.length; a++) {
                            var c = i[a];
                            1 === c.__CE_state && d.disconnectedCallback(c)
                        }
                        return this.ownerDocument.__CE_hasRegistry ? f(d, this) : s(d, this),
                        e
                    }
                })
            }
            function n(e, n) {
                o(e, "insertAdjacentElement",
                function(e, r) {
                    var o = t(r);
                    return e = n.call(this, e, r),
                    o && l(d, r),
                    t(e) && u(d, r),
                    e
                })
            }
            function i(e, t) {
                o(e, "insertAdjacentHTML",
                function(e, n) {
                    t.call(this, e, n),
                    (e = "beforebegin" === (e = e.toLowerCase()) || "afterend" === e ? this.parentNode: this).ownerDocument.__CE_hasRegistry ? f(d, e) : s(d, e)
                })
            }
            function c(e, t) {
                for (var n = []; e !== t; e = e.nextSibling) n.push(e);
                for (t = 0; t < n.length; t++) f(d, n[t])
            }
            var d = ne;
            N && o(Element.prototype, "attachShadow",
            function(e) {
                return this.__CE_shadowRoot = e = N.call(this, e)
            }),
            R && R.get ? e(Element.prototype, R) : Z && Z.get ? e(HTMLElement.prototype, Z) : a(d,
            function(t) {
                e(t, {
                    enumerable: !0,
                    configurable: !0,
                    get: function() {
                        return L.call(this, !0).innerHTML
                    },
                    set: function(e) {
                        var t = "template" === this.localName,
                        n = t ? this.content: this,
                        r = E.call(document, this.localName);
                        for (r.innerHTML = e; 0 < n.childNodes.length;) D.call(n, n.childNodes[0]);
                        for (e = t ? r.content: r; 0 < e.childNodes.length;) C.call(n, e.childNodes[0])
                    }
                })
            }),
            o(Element.prototype, "setAttribute",
            function(e, t) {
                if (1 !== this.__CE_state) return I.call(this, e, t);
                var n = H.call(this, e);
                I.call(this, e, t),
                t = H.call(this, e),
                d.attributeChangedCallback(this, e, n, t, null)
            }),
            o(Element.prototype, "setAttributeNS",
            function(e, t, n) {
                if (1 !== this.__CE_state) return B.call(this, e, t, n);
                var r = q.call(this, e, t);
                B.call(this, e, t, n),
                n = q.call(this, e, t),
                d.attributeChangedCallback(this, t, r, n, e)
            }),
            o(Element.prototype, "removeAttribute",
            function(e) {
                if (1 !== this.__CE_state) return F.call(this, e);
                var t = H.call(this, e);
                F.call(this, e),
                null !== t && d.attributeChangedCallback(this, e, t, null, null)
            }),
            o(Element.prototype, "removeAttributeNS",
            function(e, t) {
                if (1 !== this.__CE_state) return U.call(this, e, t);
                var n = q.call(this, e, t);
                U.call(this, e, t);
                var r = q.call(this, e, t);
                n !== r && d.attributeChangedCallback(this, t, n, r, e)
            }),
            Q ? n(HTMLElement.prototype, Q) : z ? n(Element.prototype, z) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."),
            ee ? i(HTMLElement.prototype, ee) : W ? i(Element.prototype, W) : console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched."),
            o(Element.prototype, "insertAdjacentHTML",
            function(e, t) {
                if ("beforebegin" === (e = e.toLowerCase())) {
                    var n = this.previousSibling;
                    W.call(this, e, t),
                    c(n || this.parentNode.firstChild, this)
                } else if ("afterbegin" === e) n = this.firstChild,
                W.call(this, e, t),
                c(this.firstChild, n);
                else if ("beforeend" === e) n = this.lastChild,
                W.call(this, e, t),
                c(n || this.firstChild, null);
                else {
                    if ("afterend" !== e) throw new SyntaxError("The value provided (" + String(e) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
                    n = this.nextSibling,
                    W.call(this, e, t),
                    c(this.nextSibling, n)
                }
            }),
            y(d, Element.prototype, {
                h: X,
                append: Y
            }),
            function(e) {
                function n(n) {
                    return function(r) {
                        for (var o = [], i = 0; i < arguments.length; ++i) o[i - 0] = arguments[i];
                        for (var i = [], a = [], s = 0; s < o.length; s++) {
                            var c = o[s];
                            if (c instanceof Element && t(c) && a.push(c), c instanceof DocumentFragment) for (c = c.firstChild; c; c = c.nextSibling) i.push(c);
                            else i.push(c)
                        }
                        for (n.apply(this, o), o = 0; o < a.length; o++) l(e, a[o]);
                        if (t(this)) for (o = 0; o < i.length; o++)(a = i[o]) instanceof Element && u(e, a)
                    }
                }
                var r = Element.prototype;
                V && (r.before = n(V)),
                V && (r.after = n($)),
                G && o(r, "replaceWith",
                function(n) {
                    for (var r = [], o = 0; o < arguments.length; ++o) r[o - 0] = arguments[o];
                    for (var o = [], i = [], a = 0; a < r.length; a++) {
                        var s = r[a];
                        if (s instanceof Element && t(s) && i.push(s), s instanceof DocumentFragment) for (s = s.firstChild; s; s = s.nextSibling) o.push(s);
                        else o.push(s)
                    }
                    for (a = t(this), G.apply(this, r), r = 0; r < i.length; r++) l(e, i[r]);
                    if (a) for (l(e, this), r = 0; r < o.length; r++)(i = o[r]) instanceof Element && u(e, i)
                }),
                J && o(r, "remove",
                function() {
                    var n = t(this);
                    J.call(this),
                    n && l(e, this)
                })
            } (d)
        }
        var w = new
        function() {},
        _ = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));
        i.prototype.connectedCallback = function(e) {
            var t = e.__CE_definition;
            t.connectedCallback && t.connectedCallback.call(e)
        },
        i.prototype.disconnectedCallback = function(e) {
            var t = e.__CE_definition;
            t.disconnectedCallback && t.disconnectedCallback.call(e)
        },
        i.prototype.attributeChangedCallback = function(e, t, n, r, o) {
            var i = e.__CE_definition;
            i.attributeChangedCallback && -1 < i.observedAttributes.indexOf(t) && i.attributeChangedCallback.call(e, t, n, r, o)
        },
        h.prototype.f = function(e) {
            var t = this.a.readyState;
            for ("interactive" !== t && "complete" !== t || p(this), t = 0; t < e.length; t++) for (var n = e[t].addedNodes, r = 0; r < n.length; r++) f(this.c, n[r])
        },
        v.prototype.define = function(t, n) {
            var r = this;
            if (! (n instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
            if (!e(t)) throw new SyntaxError("The element name '" + t + "' is not valid.");
            if (this.c.a.get(t)) throw Error("A custom element with name '" + t + "' has already been defined.");
            if (this.i) throw Error("A custom element is already being defined.");
            this.i = !0;
            var o, i, a, s, c;
            try {
                var u = function(e) {
                    var t = l[e];
                    if (void 0 !== t && !(t instanceof Function)) throw Error("The '" + e + "' callback must be a function.");
                    return t
                },
                l = n.prototype;
                if (! (l instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
                o = u("connectedCallback"),
                i = u("disconnectedCallback"),
                a = u("adoptedCallback"),
                s = u("attributeChangedCallback"),
                c = n.observedAttributes || []
            } catch(e) {
                return
            } finally {
                this.i = !1
            }
            n = {
                localName: t,
                constructor: n,
                connectedCallback: o,
                disconnectedCallback: i,
                adoptedCallback: a,
                attributeChangedCallback: s,
                observedAttributes: c,
                constructionStack: []
            },
            function(e, t, n) {
                e.a.set(t, n),
                e.o.set(n.constructor, n)
            } (this.c, t, n),
            this.l.push(n),
            this.g || (this.g = !0, this.j(function() {
                return g(r)
            }))
        },
        v.prototype.get = function(e) {
            if (e = this.c.a.get(e)) return e.constructor
        },
        v.prototype.whenDefined = function(t) {
            if (!e(t)) return Promise.reject(new SyntaxError("'" + t + "' is not a valid custom element name."));
            var n = this.m.get(t);
            return n ? n.f: (n = new
            function() {
                var e = this;
                this.b = this.a = void 0,
                this.f = new Promise(function(t) {
                    e.b = t,
                    e.a && t(e.a)
                })
            },
            this.m.set(t, n), this.c.a.get(t) && !this.l.some(function(e) {
                return e.localName === t
            }) && m(n), n.f)
        },
        v.prototype.v = function(e) {
            p(this.u);
            var t = this.j;
            this.j = function(n) {
                return e(function() {
                    return t(n)
                })
            }
        },
        window.CustomElementRegistry = v,
        v.prototype.define = v.prototype.define,
        v.prototype.get = v.prototype.get,
        v.prototype.whenDefined = v.prototype.whenDefined,
        v.prototype.polyfillWrapFlushCallback = v.prototype.v;
        var E = window.Document.prototype.createElement,
        x = window.Document.prototype.createElementNS,
        T = window.Document.prototype.importNode,
        k = window.Document.prototype.prepend,
        S = window.Document.prototype.append,
        j = window.DocumentFragment.prototype.prepend,
        O = window.DocumentFragment.prototype.append,
        L = window.Node.prototype.cloneNode,
        C = window.Node.prototype.appendChild,
        A = window.Node.prototype.insertBefore,
        D = window.Node.prototype.removeChild,
        M = window.Node.prototype.replaceChild,
        P = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
        N = window.Element.prototype.attachShadow,
        R = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
        H = window.Element.prototype.getAttribute,
        I = window.Element.prototype.setAttribute,
        F = window.Element.prototype.removeAttribute,
        q = window.Element.prototype.getAttributeNS,
        B = window.Element.prototype.setAttributeNS,
        U = window.Element.prototype.removeAttributeNS,
        z = window.Element.prototype.insertAdjacentElement,
        W = window.Element.prototype.insertAdjacentHTML,
        X = window.Element.prototype.prepend,
        Y = window.Element.prototype.append,
        V = window.Element.prototype.before,
        $ = window.Element.prototype.after,
        G = window.Element.prototype.replaceWith,
        J = window.Element.prototype.remove,
        K = window.HTMLElement,
        Z = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
        Q = window.HTMLElement.prototype.insertAdjacentElement,
        ee = window.HTMLElement.prototype.insertAdjacentHTML,
        te = window.customElements;
        if (!te || te.forcePolyfill || "function" != typeof te.define || "function" != typeof te.get) {
            var ne = new i; !
            function() {
                var e = ne;
                window.HTMLElement = function() {
                    function t() {
                        var t = this.constructor,
                        n = e.o.get(t);
                        if (!n) throw Error("The custom element being constructed was not registered with `customElements`.");
                        var r = n.constructionStack;
                        if (!r.length) return r = E.call(document, n.localName),
                        Object.setPrototypeOf(r, t.prototype),
                        r.__CE_state = 1,
                        r.__CE_definition = n,
                        c(e, r),
                        r;
                        var o = r[n = r.length - 1];
                        if (o === w) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
                        return r[n] = w,
                        Object.setPrototypeOf(o, t.prototype),
                        c(e, o),
                        o
                    }
                    return t.prototype = K.prototype,
                    t
                } ()
            } (),
            function() {
                var e = ne;
                o(Document.prototype, "createElement",
                function(t) {
                    if (this.__CE_hasRegistry) {
                        var n = e.a.get(t);
                        if (n) return new n.constructor
                    }
                    return t = E.call(this, t),
                    c(e, t),
                    t
                }),
                o(Document.prototype, "importNode",
                function(t, n) {
                    return t = T.call(this, t, n),
                    this.__CE_hasRegistry ? f(e, t) : s(e, t),
                    t
                }),
                o(Document.prototype, "createElementNS",
                function(t, n) {
                    if (this.__CE_hasRegistry && (null === t || "http://www.w3.org/1999/xhtml" === t)) {
                        var r = e.a.get(n);
                        if (r) return new r.constructor
                    }
                    return t = x.call(this, t, n),
                    c(e, t),
                    t
                }),
                y(e, Document.prototype, {
                    h: k,
                    append: S
                })
            } (),
            y(ne, DocumentFragment.prototype, {
                h: j,
                append: O
            }),
            function() {
                function e(e, r) {
                    Object.defineProperty(e, "textContent", {
                        enumerable: r.enumerable,
                        configurable: !0,
                        get: r.get,
                        set: function(e) {
                            if (this.nodeType === Node.TEXT_NODE) r.set.call(this, e);
                            else {
                                if (a = void 0, this.firstChild) {
                                    var o = this.childNodes,
                                    i = o.length;
                                    if (0 < i && t(this)) for (var a = Array(i), s = 0; s < i; s++) a[s] = o[s]
                                }
                                if (r.set.call(this, e), a) for (e = 0; e < a.length; e++) l(n, a[e])
                            }
                        }
                    })
                }
                var n = ne;
                o(Node.prototype, "insertBefore",
                function(e, r) {
                    if (e instanceof DocumentFragment) {
                        var o = Array.prototype.slice.apply(e.childNodes);
                        if (e = A.call(this, e, r), t(this)) for (r = 0; r < o.length; r++) u(n, o[r]);
                        return e
                    }
                    return o = t(e),
                    r = A.call(this, e, r),
                    o && l(n, e),
                    t(this) && u(n, e),
                    r
                }),
                o(Node.prototype, "appendChild",
                function(e) {
                    if (e instanceof DocumentFragment) {
                        var r = Array.prototype.slice.apply(e.childNodes);
                        if (e = C.call(this, e), t(this)) for (var o = 0; o < r.length; o++) u(n, r[o]);
                        return e
                    }
                    return r = t(e),
                    o = C.call(this, e),
                    r && l(n, e),
                    t(this) && u(n, e),
                    o
                }),
                o(Node.prototype, "cloneNode",
                function(e) {
                    return e = L.call(this, e),
                    this.ownerDocument.__CE_hasRegistry ? f(n, e) : s(n, e),
                    e
                }),
                o(Node.prototype, "removeChild",
                function(e) {
                    var r = t(e),
                    o = D.call(this, e);
                    return r && l(n, e),
                    o
                }),
                o(Node.prototype, "replaceChild",
                function(e, r) {
                    if (e instanceof DocumentFragment) {
                        if (o = Array.prototype.slice.apply(e.childNodes), e = M.call(this, e, r), t(this)) for (l(n, r), r = 0; r < o.length; r++) u(n, o[r]);
                        return e
                    }
                    var o = t(e),
                    i = M.call(this, e, r),
                    a = t(this);
                    return a && l(n, r),
                    o && l(n, e),
                    a && u(n, e),
                    i
                }),
                P && P.get ? e(Node.prototype, P) : a(n,
                function(t) {
                    e(t, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            for (var e = [], t = 0; t < this.childNodes.length; t++) e.push(this.childNodes[t].textContent);
                            return e.join("")
                        },
                        set: function(e) {
                            for (; this.firstChild;) D.call(this, this.firstChild);
                            C.call(this, document.createTextNode(e))
                        }
                    })
                })
            } (),
            b(),
            document.__CE_hasRegistry = !0;
            var re = new v(ne);
            Object.defineProperty(window, "customElements", {
                configurable: !0,
                enumerable: !0,
                value: re
            })
        }
    }.call(self),
    function(e) {
        function t(e) {
            return void 0 !== f[e]
        }
        function n() {
            s.call(this),
            this._isInvalid = !0
        }
        function r(e) {
            return "" == e && n.call(this),
            e.toLowerCase()
        }
        function o(e) {
            var t = e.charCodeAt(0);
            return t > 32 && t < 127 && -1 == [34, 35, 60, 62, 63, 96].indexOf(t) ? e: encodeURIComponent(e)
        }
        function i(e) {
            var t = e.charCodeAt(0);
            return t > 32 && t < 127 && -1 == [34, 35, 60, 62, 96].indexOf(t) ? e: encodeURIComponent(e)
        }
        function a(e, a, s) {
            function c(e) {
                b.push(e)
            }
            var u = a || "scheme start",
            l = 0,
            v = "",
            g = !1,
            y = !1,
            b = [];
            e: for (; (e[l - 1] != h || 0 == l) && !this._isInvalid;) {
                var w = e[l];
                switch (u) {
                case "scheme start":
                    if (!w || !p.test(w)) {
                        if (a) {
                            c("Invalid scheme.");
                            break e
                        }
                        v = "",
                        u = "no scheme";
                        continue
                    }
                    v += w.toLowerCase(),
                    u = "scheme";
                    break;
                case "scheme":
                    if (w && m.test(w)) v += w.toLowerCase();
                    else {
                        if (":" != w) {
                            if (a) {
                                if (h == w) break e;
                                c("Code point not allowed in scheme: " + w);
                                break e
                            }
                            v = "",
                            l = 0,
                            u = "no scheme";
                            continue
                        }
                        if (this._scheme = v, v = "", a) break e;
                        t(this._scheme) && (this._isRelative = !0),
                        u = "file" == this._scheme ? "relative": this._isRelative && s && s._scheme == this._scheme ? "relative or authority": this._isRelative ? "authority first slash": "scheme data"
                    }
                    break;
                case "scheme data":
                    "?" == w ? (this._query = "?", u = "query") : "#" == w ? (this._fragment = "#", u = "fragment") : h != w && "\t" != w && "\n" != w && "\r" != w && (this._schemeData += o(w));
                    break;
                case "no scheme":
                    if (s && t(s._scheme)) {
                        u = "relative";
                        continue
                    }
                    c("Missing scheme."),
                    n.call(this);
                    break;
                case "relative or authority":
                    if ("/" != w || "/" != e[l + 1]) {
                        c("Expected /, got: " + w),
                        u = "relative";
                        continue
                    }
                    u = "authority ignore slashes";
                    break;
                case "relative":
                    if (this._isRelative = !0, "file" != this._scheme && (this._scheme = s._scheme), h == w) {
                        this._host = s._host,
                        this._port = s._port,
                        this._path = s._path.slice(),
                        this._query = s._query,
                        this._username = s._username,
                        this._password = s._password;
                        break e
                    }
                    if ("/" == w || "\\" == w)"\\" == w && c("\\ is an invalid code point."),
                    u = "relative slash";
                    else if ("?" == w) this._host = s._host,
                    this._port = s._port,
                    this._path = s._path.slice(),
                    this._query = "?",
                    this._username = s._username,
                    this._password = s._password,
                    u = "query";
                    else {
                        if ("#" != w) {
                            var _ = e[l + 1],
                            E = e[l + 2]; ("file" != this._scheme || !p.test(w) || ":" != _ && "|" != _ || h != E && "/" != E && "\\" != E && "?" != E && "#" != E) && (this._host = s._host, this._port = s._port, this._username = s._username, this._password = s._password, this._path = s._path.slice(), this._path.pop()),
                            u = "relative path";
                            continue
                        }
                        this._host = s._host,
                        this._port = s._port,
                        this._path = s._path.slice(),
                        this._query = s._query,
                        this._fragment = "#",
                        this._username = s._username,
                        this._password = s._password,
                        u = "fragment"
                    }
                    break;
                case "relative slash":
                    if ("/" != w && "\\" != w) {
                        "file" != this._scheme && (this._host = s._host, this._port = s._port, this._username = s._username, this._password = s._password),
                        u = "relative path";
                        continue
                    }
                    "\\" == w && c("\\ is an invalid code point."),
                    u = "file" == this._scheme ? "file host": "authority ignore slashes";
                    break;
                case "authority first slash":
                    if ("/" != w) {
                        c("Expected '/', got: " + w),
                        u = "authority ignore slashes";
                        continue
                    }
                    u = "authority second slash";
                    break;
                case "authority second slash":
                    if (u = "authority ignore slashes", "/" != w) {
                        c("Expected '/', got: " + w);
                        continue
                    }
                    break;
                case "authority ignore slashes":
                    if ("/" != w && "\\" != w) {
                        u = "authority";
                        continue
                    }
                    c("Expected authority, got: " + w);
                    break;
                case "authority":
                    if ("@" == w) {
                        g && (c("@ already seen."), v += "%40"),
                        g = !0;
                        for (var x = 0; x < v.length; x++) {
                            var T = v[x];
                            if ("\t" != T && "\n" != T && "\r" != T) if (":" != T || null !== this._password) {
                                var k = o(T);
                                null !== this._password ? this._password += k: this._username += k
                            } else this._password = "";
                            else c("Invalid whitespace in authority.")
                        }
                        v = ""
                    } else {
                        if (h == w || "/" == w || "\\" == w || "?" == w || "#" == w) {
                            l -= v.length,
                            v = "",
                            u = "host";
                            continue
                        }
                        v += w
                    }
                    break;
                case "file host":
                    if (h == w || "/" == w || "\\" == w || "?" == w || "#" == w) {
                        2 != v.length || !p.test(v[0]) || ":" != v[1] && "|" != v[1] ? 0 == v.length ? u = "relative path start": (this._host = r.call(this, v), v = "", u = "relative path start") : u = "relative path";
                        continue
                    }
                    "\t" == w || "\n" == w || "\r" == w ? c("Invalid whitespace in file host.") : v += w;
                    break;
                case "host":
                case "hostname":
                    if (":" != w || y) {
                        if (h == w || "/" == w || "\\" == w || "?" == w || "#" == w) {
                            if (this._host = r.call(this, v), v = "", u = "relative path start", a) break e;
                            continue
                        }
                        "\t" != w && "\n" != w && "\r" != w ? ("[" == w ? y = !0 : "]" == w && (y = !1), v += w) : c("Invalid code point in host/hostname: " + w)
                    } else if (this._host = r.call(this, v), v = "", u = "port", "hostname" == a) break e;
                    break;
                case "port":
                    if (/[0-9]/.test(w)) v += w;
                    else {
                        if (h == w || "/" == w || "\\" == w || "?" == w || "#" == w || a) {
                            if ("" != v) {
                                var S = parseInt(v, 10);
                                S != f[this._scheme] && (this._port = S + ""),
                                v = ""
                            }
                            if (a) break e;
                            u = "relative path start";
                            continue
                        }
                        "\t" == w || "\n" == w || "\r" == w ? c("Invalid code point in port: " + w) : n.call(this)
                    }
                    break;
                case "relative path start":
                    if ("\\" == w && c("'\\' not allowed in path."), u = "relative path", "/" != w && "\\" != w) continue;
                    break;
                case "relative path":
                    if (h != w && "/" != w && "\\" != w && (a || "?" != w && "#" != w))"\t" != w && "\n" != w && "\r" != w && (v += o(w));
                    else {
                        "\\" == w && c("\\ not allowed in relative path.");
                        var j; (j = d[v.toLowerCase()]) && (v = j),
                        ".." == v ? (this._path.pop(), "/" != w && "\\" != w && this._path.push("")) : "." == v && "/" != w && "\\" != w ? this._path.push("") : "." != v && ("file" == this._scheme && 0 == this._path.length && 2 == v.length && p.test(v[0]) && "|" == v[1] && (v = v[0] + ":"), this._path.push(v)),
                        v = "",
                        "?" == w ? (this._query = "?", u = "query") : "#" == w && (this._fragment = "#", u = "fragment")
                    }
                    break;
                case "query":
                    a || "#" != w ? h != w && "\t" != w && "\n" != w && "\r" != w && (this._query += i(w)) : (this._fragment = "#", u = "fragment");
                    break;
                case "fragment":
                    h != w && "\t" != w && "\n" != w && "\r" != w && (this._fragment += w)
                }
                l++
            }
        }
        function s() {
            this._scheme = "",
            this._schemeData = "",
            this._username = "",
            this._password = null,
            this._host = "",
            this._port = "",
            this._path = [],
            this._query = "",
            this._fragment = "",
            this._isInvalid = !1,
            this._isRelative = !1
        }
        function c(e, t) {
            void 0 === t || t instanceof c || (t = new c(String(t))),
            this._url = e,
            s.call(this);
            var n = e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
            a.call(this, n, null, t)
        }
        var u = !1;
        if (!e.forceJURL) try {
            var l = new URL("b", "http://a");
            l.pathname = "c%20d",
            u = "http://a/c%20d" === l.href
        } catch(e) {}
        if (!u) {
            var f = Object.create(null);
            f.ftp = 21,
            f.file = 0,
            f.gopher = 70,
            f.http = 80,
            f.https = 443,
            f.ws = 80,
            f.wss = 443;
            var d = Object.create(null);
            d["%2e"] = ".",
            d[".%2e"] = "..",
            d["%2e."] = "..",
            d["%2e%2e"] = "..";
            var h = void 0,
            p = /[a-zA-Z]/,
            m = /[a-zA-Z0-9\+\-\.]/;
            c.prototype = {
                toString: function() {
                    return this.href
                },
                get href() {
                    if (this._isInvalid) return this._url;
                    var e = "";
                    return "" == this._username && null == this._password || (e = this._username + (null != this._password ? ":" + this._password: "") + "@"),
                    this.protocol + (this._isRelative ? "//" + e + this.host: "") + this.pathname + this._query + this._fragment
                },
                set href(e) {
                    s.call(this),
                    a.call(this, e)
                },
                get protocol() {
                    return this._scheme + ":"
                },
                set protocol(e) {
                    this._isInvalid || a.call(this, e + ":", "scheme start")
                },
                get host() {
                    return this._isInvalid ? "": this._port ? this._host + ":" + this._port: this._host
                },
                set host(e) { ! this._isInvalid && this._isRelative && a.call(this, e, "host")
                },
                get hostname() {
                    return this._host
                },
                set hostname(e) { ! this._isInvalid && this._isRelative && a.call(this, e, "hostname")
                },
                get port() {
                    return this._port
                },
                set port(e) { ! this._isInvalid && this._isRelative && a.call(this, e, "port")
                },
                get pathname() {
                    return this._isInvalid ? "": this._isRelative ? "/" + this._path.join("/") : this._schemeData
                },
                set pathname(e) { ! this._isInvalid && this._isRelative && (this._path = [], a.call(this, e, "relative path start"))
                },
                get search() {
                    return this._isInvalid || !this._query || "?" == this._query ? "": this._query
                },
                set search(e) { ! this._isInvalid && this._isRelative && (this._query = "?", "?" == e[0] && (e = e.slice(1)), a.call(this, e, "query"))
                },
                get hash() {
                    return this._isInvalid || !this._fragment || "#" == this._fragment ? "": this._fragment
                },
                set hash(e) {
                    this._isInvalid || (this._fragment = "#", "#" == e[0] && (e = e.slice(1)), a.call(this, e, "fragment"))
                },
                get origin() {
                    var e;
                    if (this._isInvalid || !this._scheme) return "";
                    switch (this._scheme) {
                    case "data":
                    case "file":
                    case "javascript":
                    case "mailto":
                        return "null"
                    }
                    return (e = this.host) ? this._scheme + "://" + e: ""
                }
            };
            var v = e.URL;
            v && (c.createObjectURL = function(e) {
                return v.createObjectURL.apply(v, arguments)
            },
            c.revokeObjectURL = function(e) {
                v.revokeObjectURL(e)
            }),
            e.URL = c
        }
    } (window),
    "function" != typeof Element.prototype.matches && (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector ||
    function(e) {
        for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = 0; t[n] && t[n] !== this;)++n;
        return Boolean(t[n])
    }),
    "function" != typeof Element.prototype.closest && (Element.prototype.closest = function(e) {
        for (var t = this; t && 1 === t.nodeType;) {
            if (t.matches(e)) return t;
            t = t.parentNode
        }
        return null
    }),
    function(e) {
        function t(e) {
            return "string" == typeof e ? document.createTextNode(e) : e
        }
        function n(e) {
            if (e.length) {
                if (1 === e.length) return t(e[0]);
                for (var n = document.createDocumentFragment(), r = 0; r < e.length; r++) n.appendChild(t(e[r]));
                return n
            }
            throw new Error("DOM Exception 8")
        }
        "prepend" in e || (e.prepend = function() {
            this.insertBefore(n(arguments), this.firstChild)
        }),
        "append" in e || (e.append = function() {
            this.appendChild(n(arguments))
        }),
        "before" in e || (e.before = function() {
            this.parentNode && this.parentNode.insertBefore(n(arguments), this)
        }),
        "after" in e || (e.after = function() {
            this.parentNode && this.parentNode.insertBefore(n(arguments), this.nextSibling)
        }),
        "replaceWith" in e || (e.replaceWith = function() {
            this.parentNode && this.parentNode.replaceChild(n(arguments), this)
        }),
        "remove" in e || (e.remove = function() {
            this.parentNode && this.parentNode.removeChild(this)
        })
    } (Element.prototype);
    n(function(e) { !
        function(t) {
            void 0 === t && (t = {}),
            void 0 === t.performance && (t.performance = {}),
            t._perfRefForUserTimingPolyfill = t.performance,
            t.performance.userTimingJsNow = !1,
            t.performance.userTimingJsNowPrefixed = !1,
            t.performance.userTimingJsUserTiming = !1,
            t.performance.userTimingJsUserTimingPrefixed = !1,
            t.performance.userTimingJsPerformanceTimeline = !1,
            t.performance.userTimingJsPerformanceTimelinePrefixed = !1;
            var n, r, o = [],
            i = [],
            a = null;
            if ("function" != typeof t.performance.now) {
                for (t.performance.userTimingJsNow = !0, i = ["webkitNow", "msNow", "mozNow"], n = 0; n < i.length; n++) if ("function" == typeof t.performance[i[n]]) {
                    t.performance.now = t.performance[i[n]],
                    t.performance.userTimingJsNowPrefixed = !0;
                    break
                }
                var s = +new Date;
                t.performance.timing && t.performance.timing.navigationStart && (s = t.performance.timing.navigationStart),
                "function" != typeof t.performance.now && (Date.now ? t.performance.now = function() {
                    return Date.now() - s
                }: t.performance.now = function() {
                    return + new Date - s
                })
            }
            var c = function() {},
            u = function() {},
            l = [],
            f = !1,
            d = !1;
            if ("function" != typeof t.performance.getEntries || "function" != typeof t.performance.mark) {
                for ("function" == typeof t.performance.getEntries && "function" != typeof t.performance.mark && (d = !0), t.performance.userTimingJsPerformanceTimeline = !0, o = ["webkit", "moz"], i = ["getEntries", "getEntriesByName", "getEntriesByType"], n = 0; n < i.length; n++) for (r = 0; r < o.length; r++) a = o[r] + i[n].substr(0, 1).toUpperCase() + i[n].substr(1),
                "function" == typeof t.performance[a] && (t.performance[i[n]] = t.performance[a], t.performance.userTimingJsPerformanceTimelinePrefixed = !0);
                c = function(e) {
                    l.push(e),
                    "measure" === e.entryType && (f = !0)
                };
                var h = function() {
                    f && (l.sort(function(e, t) {
                        return e.startTime - t.startTime
                    }), f = !1)
                };
                if (u = function(e, t) {
                    for (n = 0; n < l.length;) l[n].entryType === e && (void 0 === t || l[n].name === t) ? l.splice(n, 1) : n++
                },
                "function" != typeof t.performance.getEntries || d) {
                    var p = t.performance.getEntries;
                    t.performance.getEntries = function() {
                        h();
                        var e = l.slice(0);
                        return d && p && (Array.prototype.push.apply(e, p.call(t.performance)), e.sort(function(e, t) {
                            return e.startTime - t.startTime
                        })),
                        e
                    }
                }
                if ("function" != typeof t.performance.getEntriesByType || d) {
                    var m = t.performance.getEntriesByType;
                    t.performance.getEntriesByType = function(e) {
                        if (void 0 === e || "mark" !== e && "measure" !== e) return d && m ? m.call(t.performance, e) : [];
                        "measure" === e && h();
                        var r = [];
                        for (n = 0; n < l.length; n++) l[n].entryType === e && r.push(l[n]);
                        return r
                    }
                }
                if ("function" != typeof t.performance.getEntriesByName || d) {
                    var v = t.performance.getEntriesByName;
                    t.performance.getEntriesByName = function(e, r) {
                        if (r && "mark" !== r && "measure" !== r) return d && v ? v.call(t.performance, e, r) : [];
                        void 0 !== r && "measure" === r && h();
                        var o = [];
                        for (n = 0; n < l.length; n++) void 0 !== r && l[n].entryType !== r || l[n].name === e && o.push(l[n]);
                        return d && v && (Array.prototype.push.apply(o, v.call(t.performance, e, r)), o.sort(function(e, t) {
                            return e.startTime - t.startTime
                        })),
                        o
                    }
                }
            }
            if ("function" != typeof t.performance.mark) {
                for (t.performance.userTimingJsUserTiming = !0, o = ["webkit", "moz", "ms"], i = ["mark", "measure", "clearMarks", "clearMeasures"], n = 0; n < i.length; n++) for (r = 0; r < o.length; r++) a = o[r] + i[n].substr(0, 1).toUpperCase() + i[n].substr(1),
                "function" == typeof t.performance[a] && (t.performance[i[n]] = t.performance[a], t.performance.userTimingJsUserTimingPrefixed = !0);
                var g = {};
                "function" != typeof t.performance.mark && (t.performance.mark = function(e) {
                    var n = t.performance.now();
                    if (void 0 === e) throw new SyntaxError("Mark name must be specified");
                    if (t.performance.timing && e in t.performance.timing) throw new SyntaxError("Mark name is not allowed");
                    g[e] || (g[e] = []),
                    g[e].push(n),
                    c({
                        entryType: "mark",
                        name: e,
                        startTime: n,
                        duration: 0
                    })
                }),
                "function" != typeof t.performance.clearMarks && (t.performance.clearMarks = function(e) {
                    e ? g[e] = [] : g = {},
                    u("mark", e)
                }),
                "function" != typeof t.performance.measure && (t.performance.measure = function(e, n, r) {
                    var o = t.performance.now();
                    if (void 0 === e) throw new SyntaxError("Measure must be specified");
                    if (n) {
                        var i = 0;
                        if (t.performance.timing && n in t.performance.timing) {
                            if ("navigationStart" !== n && 0 === t.performance.timing[n]) throw new Error(n + " has a timing of 0");
                            i = t.performance.timing[n] - t.performance.timing.navigationStart
                        } else {
                            if (! (n in g)) throw new Error(n + " mark not found");
                            i = g[n][g[n].length - 1]
                        }
                        var a = o;
                        if (r) if (a = 0, t.performance.timing && r in t.performance.timing) {
                            if ("navigationStart" !== r && 0 === t.performance.timing[r]) throw new Error(r + " has a timing of 0");
                            a = t.performance.timing[r] - t.performance.timing.navigationStart
                        } else {
                            if (! (r in g)) throw new Error(r + " mark not found");
                            a = g[r][g[r].length - 1]
                        }
                        c({
                            entryType: "measure",
                            name: e,
                            startTime: i,
                            duration: a - i
                        })
                    } else c({
                        entryType: "measure",
                        name: e,
                        startTime: 0,
                        duration: o
                    })
                }),
                "function" != typeof t.performance.clearMeasures && (t.performance.clearMeasures = function(e) {
                    u("measure", e)
                })
            }
            e.exports = t.performance
        } ("undefined" != typeof window ? window: void 0)
    }),
    n(function(e) { !
        function(t) {
            function n(e, t, n, i) {
                var a = Object.create((t || o).prototype),
                s = new d(i || []);
                return a._invoke = function(e, t, n) {
                    var o = _;
                    return function(i, a) {
                        if (o === x) throw new Error("Generator is already running");
                        if (o === T) {
                            if ("throw" === i) throw a;
                            return p()
                        }
                        for (;;) {
                            var s = n.delegate;
                            if (s) {
                                if ("return" === i || "throw" === i && s.iterator[i] === m) {
                                    n.delegate = null;
                                    var c = s.iterator.
                                    return;
                                    if (c) {
                                        if ("throw" === (u = r(c, s.iterator, a)).type) {
                                            i = "throw",
                                            a = u.arg;
                                            continue
                                        }
                                    }
                                    if ("return" === i) continue
                                }
                                if ("throw" === (u = r(s.iterator[i], s.iterator, a)).type) {
                                    n.delegate = null,
                                    i = "throw",
                                    a = u.arg;
                                    continue
                                }
                                i = "next",
                                a = m;
                                if (! (l = u.arg).done) return o = E,
                                l;
                                n[s.resultName] = l.value,
                                n.next = s.nextLoc,
                                n.delegate = null
                            }
                            if ("next" === i) n.sent = o === E ? a: m;
                            else if ("throw" === i) {
                                if (o === _) throw o = T,
                                a;
                                n.dispatchException(a) && (i = "next", a = m)
                            } else "return" === i && n.abrupt("return", a);
                            o = x;
                            var u = r(e, t, n);
                            if ("normal" === u.type) {
                                o = n.done ? T: E;
                                var l = {
                                    value: u.arg,
                                    done: n.done
                                };
                                if (u.arg !== k) return l;
                                n.delegate && "next" === i && (a = m)
                            } else "throw" === u.type && (o = T, i = "throw", a = u.arg)
                        }
                    }
                } (e, n, s),
                a
            }
            function r(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch(e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            function o() {}
            function i() {}
            function a() {}
            function s(e) { ["next", "throw", "return"].forEach(function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e)
                    }
                })
            }
            function c(e) {
                this.arg = e
            }
            function u(e) {
                function t(n, o, i, a) {
                    var s = r(e[n], e, o);
                    if ("throw" !== s.type) {
                        var u = s.arg,
                        l = u.value;
                        return l instanceof c ? Promise.resolve(l.arg).then(function(e) {
                            t("next", e, i, a)
                        },
                        function(e) {
                            t("throw", e, i, a)
                        }) : Promise.resolve(l).then(function(e) {
                            u.value = e,
                            i(u)
                        },
                        a)
                    }
                    a(s.arg)
                }
                "object" == typeof process && process.domain && (t = process.domain.bind(t));
                var n;
                this._invoke = function(e, r) {
                    function o() {
                        return new Promise(function(n, o) {
                            t(e, r, n, o)
                        })
                    }
                    return n = n ? n.then(o, o) : o()
                }
            }
            function l(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function f(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function d(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(l, this),
                this.reset(!0)
            }
            function h(e) {
                if (e) {
                    var t = e[y];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var n = -1,
                        r = function t() {
                            for (; ++n < e.length;) if (v.call(e, n)) return t.value = e[n],
                            t.done = !1,
                            t;
                            return t.value = m,
                            t.done = !0,
                            t
                        };
                        return r.next = r
                    }
                }
                return {
                    next: p
                }
            }
            function p() {
                return {
                    value: m,
                    done: !0
                }
            }
            var m, v = Object.prototype.hasOwnProperty,
            g = "function" == typeof Symbol ? Symbol: {},
            y = g.iterator || "@@iterator",
            b = g.toStringTag || "@@toStringTag",
            w = t.regeneratorRuntime;
            if (w) e.exports = w;
            else { (w = t.regeneratorRuntime = e.exports).wrap = n;
                var _ = "suspendedStart",
                E = "suspendedYield",
                x = "executing",
                T = "completed",
                k = {},
                S = a.prototype = o.prototype;
                i.prototype = S.constructor = a,
                a.constructor = i,
                a[b] = i.displayName = "GeneratorFunction",
                w.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !! t && (t === i || "GeneratorFunction" === (t.displayName || t.name))
                },
                w.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : (e.__proto__ = a, b in e || (e[b] = "GeneratorFunction")),
                    e.prototype = Object.create(S),
                    e
                },
                w.awrap = function(e) {
                    return new c(e)
                },
                s(u.prototype),
                w.async = function(e, t, r, o) {
                    var i = new u(n(e, t, r, o));
                    return w.isGeneratorFunction(t) ? i: i.next().then(function(e) {
                        return e.done ? e.value: i.next()
                    })
                },
                s(S),
                S[y] = function() {
                    return this
                },
                S[b] = "Generator",
                S.toString = function() {
                    return "[object Generator]"
                },
                w.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                    function n() {
                        for (; t.length;) {
                            var r = t.pop();
                            if (r in e) return n.value = r,
                            n.done = !1,
                            n
                        }
                        return n.done = !0,
                        n
                    }
                },
                w.values = h,
                d.prototype = {
                    constructor: d,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = m, this.done = !1, this.delegate = null, this.tryEntries.forEach(f), !e) for (var t in this)"t" === t.charAt(0) && v.call(this, t) && !isNaN( + t.slice(1)) && (this[t] = m)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        function t(t, r) {
                            return i.type = "throw",
                            i.arg = e,
                            n.next = t,
                            !!r
                        }
                        if (this.done) throw e;
                        for (var n = this,
                        r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                            i = o.completion;
                            if ("root" === o.tryLoc) return t("end");
                            if (o.tryLoc <= this.prev) {
                                var a = v.call(o, "catchLoc"),
                                s = v.call(o, "finallyLoc");
                                if (a && s) {
                                    if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                                } else if (a) {
                                    if (this.prev < o.catchLoc) return t(o.catchLoc, !0)
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && v.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion: {};
                        return i.type = e,
                        i.arg = t,
                        o ? this.next = o.finallyLoc: this.complete(i),
                        k
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        "break" === e.type || "continue" === e.type ? this.next = e.arg: "return" === e.type ? (this.rval = e.arg, this.next = "end") : "normal" === e.type && t && (this.next = t)
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc),
                            f(n),
                            k
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    f(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: h(e),
                            resultName: t,
                            nextLoc: n
                        },
                        k
                    }
                }
            }
        } ("object" == typeof Yt ? Yt: "object" == typeof window ? window: "object" == typeof self ? self: Yt)
    });
    window.requestIdleCallback = window.requestIdleCallback ||
    function(e) {
        return setTimeout(function() {
            var t = Date.now();
            e({
                didTimeout: !1,
                timeRemaining: function() {
                    return Math.max(0, 50 - (Date.now() - t))
                }
            })
        },
        1)
    },
    window.cancelIdleCallback = window.cancelIdleCallback ||
    function(e) {
        clearTimeout(e)
    },
    function(e, t) {
        function n(e) {
            return c[s] = r.apply(t, e),
            s++
        }
        function r(e) {
            var n = [].slice.call(arguments, 1);
            return function() {
                "function" == typeof e ? e.apply(t, n) : new Function("" + e)()
            }
        }
        function o(e) {
            if (u) setTimeout(r(o, e), 0);
            else {
                var t = c[e];
                if (t) {
                    u = !0;
                    try {
                        t()
                    } finally {
                        i(e),
                        u = !1
                    }
                }
            }
        }
        function i(e) {
            delete c[e]
        }
        if (!e.setImmediate) {
            var a, s = 1,
            c = {},
            u = !1,
            l = e.document,
            f = Object.getPrototypeOf && Object.getPrototypeOf(e);
            f = f && f.setTimeout ? f: e,
            "[object process]" === {}.toString.call(e.process) ? a = function() {
                var e = n(arguments);
                return process.nextTick(r(o, e)),
                e
            }: function() {
                if (e.postMessage && !e.importScripts) {
                    var t = !0,
                    n = e.onmessage;
                    return e.onmessage = function() {
                        t = !1
                    },
                    e.postMessage("", "*"),
                    e.onmessage = n,
                    t
                }
            } () ?
            function() {
                var t = "setImmediate$" + Math.random() + "$",
                r = function(n) {
                    n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && o( + n.data.slice(t.length))
                };
                e.addEventListener ? e.addEventListener("message", r, !1) : e.attachEvent("onmessage", r),
                a = function() {
                    var r = n(arguments);
                    return e.postMessage(t + r, "*"),
                    r
                }
            } () : e.MessageChannel ?
            function() {
                var e = new MessageChannel;
                e.port1.onmessage = function(e) {
                    o(e.data)
                },
                a = function() {
                    var t = n(arguments);
                    return e.port2.postMessage(t),
                    t
                }
            } () : l && "onreadystatechange" in l.createElement("script") ?
            function() {
                var e = l.documentElement;
                a = function() {
                    var t = n(arguments),
                    r = l.createElement("script");
                    return r.onreadystatechange = function() {
                        o(t),
                        r.onreadystatechange = null,
                        e.removeChild(r),
                        r = null
                    },
                    e.appendChild(r),
                    t
                }
            } () : a = function() {
                var e = n(arguments);
                return setTimeout(r(o, e), 0),
                e
            },
            f.setImmediate = a,
            f.clearImmediate = i
        }
    } ("undefined" == typeof self ? Yt: self);
    var Vt = n(function(e, t) { !
        function(t, n) {
            e.exports = n()
        } (0,
        function(e) {
            return function(e, t, n, r, o, i, a, s) {
                if ("object" == typeof process && "production" !== process.env.NODE_ENV && void 0 === t) throw new Error("invariant requires an error message argument");
                if (!e) {
                    var c;
                    if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var u = [n, r, o, i, a, s],
                        l = 0; (c = new Error(t.replace(/%s/g,
                        function() {
                            return u[l++]
                        }))).name = "Invariant Violation"
                    }
                    throw c.framesToPop = 1,
                    c
                }
            }
        })
    }),
    $t = "interactive" === document.readyState || "complete" === document.readyState ? Promise.resolve() : new Promise(function(e) {
        document.addEventListener("DOMContentLoaded",
        function() {
            e()
        })
    }),
    Gt = "complete" === document.readyState ? Promise.resolve() : new Promise(function(e) {
        window.addEventListener("load", e)
    }),
    Jt = Object.freeze({
        ready: $t,
        loaded: Gt
    }),
    Kt = [],
    Zt = "text/plain",
    Qt = ["application/x-www-form-urlencoded", "multipart/form-data", Zt],
    en = !1;
    "sendBeacon" in window.navigator ? en = !0 : navigator.sendBeacon = o;
    var tn = void 0,
    nn = !1;
    window.addEventListener("beforeunload",
    function(e) {
        setTimeout(function() {
            e.defaultPrevented || (nn = !0, tn && clearTimeout(tn), Kt.length > 0 && u(Kt))
        })
    }),
    $t.then(function() {
        var e = c();
        e && (s(e),
        function() {
            try {
                sessionStorage.removeItem(rn)
            } catch(e) {}
        } ())
    });
    var rn = "send-beacon-queue",
    on = Object.freeze({
        guaranteedPost: i
    }); (function() {}).call(void 0),
    function() {
        var e, t, n, r, o, i, a, s, c, u, l, f; (u = {
            element: function() {
                var e, t, n, r, o;
                return "open" in (t = document.createElement("details")) && (t.innerHTML = "<summary>a</summary>b", t.setAttribute("style", "position: absolute; left: -9999px"), (r = null != (o = document.body) ? o: document.documentElement).appendChild(t), e = t.offsetHeight, t.open = !0, n = t.offsetHeight, r.removeChild(t), e !== n)
            } (),
            toggleEvent: "ontoggle" in document.createElement("details")
        }).element && u.toggleEvent || (a = function() {
            return document.head.insertAdjacentHTML("afterbegin", '<style>@charset"UTF-8";details:not([open])>*:not(summary){display:none;}details>summary{display:block;}details>summary::before{content:"►";padding-right:0.3rem;font-size:0.6rem;cursor:default;}details[open]>summary::before{content:"▼";}</style>')
        },
        i = function() {
            var e, t, n, r;
            return t = document.createElement("details").constructor.prototype,
            r = t.setAttribute,
            n = t.removeAttribute,
            e = Object.getOwnPropertyDescriptor(t, "open"),
            Object.defineProperties(t, {
                open: {
                    get: function() {
                        var t;
                        return "DETAILS" === this.tagName ? this.hasAttribute("open") : null != e && null != (t = e.get) ? t.call(this) : void 0
                    },
                    set: function(t) {
                        var n;
                        return "DETAILS" === this.tagName ? (t ? this.setAttribute("open", "") : this.removeAttribute("open"), t) : null != e && null != (n = e.set) ? n.call(this, t) : void 0
                    }
                },
                setAttribute: {
                    value: function(e, t) {
                        return f(this,
                        function(n) {
                            return function() {
                                return r.call(n, e, t)
                            }
                        } (this))
                    }
                },
                removeAttribute: {
                    value: function(e) {
                        return f(this,
                        function(t) {
                            return function() {
                                return n.call(t, e)
                            }
                        } (this))
                    }
                }
            })
        },
        s = function() {
            return r(function(e) {
                var t;
                return t = e.querySelector("summary"),
                e.hasAttribute("open") ? (e.removeAttribute("open"), t.setAttribute("aria-expanded", !1)) : (e.setAttribute("open", ""), t.setAttribute("aria-expanded", !0))
            })
        },
        o = function() {
            var t, n, r, o;
            for (t = 0, n = (r = document.querySelectorAll("summary")).length; n > t; t++) o = r[t],
            e(o);
            return "undefined" != typeof MutationObserver && null !== MutationObserver ? new MutationObserver(function(t) {
                var n, r, i, a, s;
                for (a = [], r = 0, i = t.length; i > r; r++) n = t[r].addedNodes,
                a.push(function() {
                    var t, r, i;
                    for (i = [], t = 0, r = n.length; r > t; t++)"DETAILS" === (s = n[t]).tagName && (o = s.querySelector("summary")) ? i.push(e(o, s)) : i.push(void 0);
                    return i
                } ());
                return a
            }).observe(document.documentElement, {
                subtree: !0,
                childList: !0
            }) : document.addEventListener("DOMNodeInserted",
            function(t) {
                return "SUMMARY" === t.target.tagName ? e(t.target) : void 0
            })
        },
        e = function(e, t) {
            return null == t && (t = n(e, "DETAILS")),
            e.setAttribute("aria-expanded", t.hasAttribute("open")),
            e.hasAttribute("tabindex") || e.setAttribute("tabindex", "0"),
            e.hasAttribute("role") ? void 0 : e.setAttribute("role", "button")
        },
        c = function() {
            return "undefined" != typeof MutationObserver && null !== MutationObserver ? new MutationObserver(function(e) {
                var t, n, r, o, i, a;
                for (i = [], n = 0, r = e.length; r > n; n++) o = e[n],
                a = o.target,
                t = o.attributeName,
                "DETAILS" === a.tagName && "open" === t ? i.push(l(a)) : i.push(void 0);
                return i
            }).observe(document.documentElement, {
                attributes: !0,
                subtree: !0
            }) : r(function(e) {
                var t;
                return t = e.getAttribute("open"),
                setTimeout(function() {
                    return e.getAttribute("open") !== t ? l(e) : void 0
                },
                1)
            })
        },
        t = function(e) {
            return ! (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.target.isContentEditable)
        },
        r = function(e) {
            return addEventListener("click",
            function(r) {
                var o, i;
                return t(r) && r.which <= 1 && (o = n(r.target, "SUMMARY")) && "DETAILS" === (null != (i = o.parentElement) ? i.tagName: void 0) ? e(o.parentElement) : void 0
            },
            !1),
            addEventListener("keydown",
            function(r) {
                var o, i, a;
                return t(r) && (13 === (i = r.keyCode) || 32 === i) && (o = n(r.target, "SUMMARY")) && "DETAILS" === (null != (a = o.parentElement) ? a.tagName: void 0) ? (e(o.parentElement), r.preventDefault()) : void 0
            },
            !1)
        },
        n = "function" == typeof Element.prototype.closest ?
        function(e, t) {
            return e.closest(t)
        }: function(e, t) {
            for (; e;) {
                if (e.tagName === t) return e;
                e = e.parentElement
            }
        },
        l = function(e) {
            var t;
            return (t = document.createEvent("Events")).initEvent("toggle", !0, !1),
            e.dispatchEvent(t)
        },
        f = function(e, t) {
            var n, r;
            return n = e.getAttribute("open"),
            r = t(),
            e.getAttribute("open") !== n && l(e),
            r
        },
        u.element || (a(), i(), s(), o()), u.element && !u.toggleEvent && c())
    }.call(void 0),
    function() {}.call(void 0);
    n(function(t, n) { !
        function(e) {
            t.exports = e()
        } (function() {
            return function t(n, r, o) {
                function i(s, c) {
                    if (!r[s]) {
                        if (!n[s]) {
                            var u = "function" == typeof e && e;
                            if (!c && u) return u(s, !0);
                            if (a) return a(s, !0);
                            var l = new Error("Cannot find module '" + s + "'");
                            throw l.code = "MODULE_NOT_FOUND",
                            l
                        }
                        var f = r[s] = {
                            exports: {}
                        };
                        n[s][0].call(f.exports,
                        function(e) {
                            var t = n[s][1][e];
                            return i(t || e)
                        },
                        f, f.exports, t, n, r, o)
                    }
                    return r[s].exports
                }
                for (var a = "function" == typeof e && e,
                s = 0; s < o.length; s++) i(o[s]);
                return i
            } ({
                1 : [function(e, t, n) {
                    function r() {}
                    var o = !1,
                    i = !1;
                    try {
                        var a = Object.create({},
                        {
                            passive: {
                                get: function() {
                                    o = !0
                                }
                            },
                            once: {
                                get: function() {
                                    i = !0
                                }
                            }
                        });
                        window.addEventListener("test", r, a),
                        window.removeEventListener("test", r, a)
                    } catch(e) {}
                    var s = t.exports = function(e) {
                        var t = e.addEventListener,
                        n = e.removeEventListener,
                        a = new WeakMap;
                        e.addEventListener = function(e, n, s) {
                            if (void 0 === s || !0 === s || !1 === s) return t.call(this, e, n, s);
                            var c = n,
                            u = "boolean" == typeof s ? {
                                capture: s
                            }: s || {},
                            l = Boolean(u.passive),
                            f = Boolean(u.once),
                            d = Boolean(u.capture),
                            h = c; ! i && f && (c = function(t) {
                                this.removeEventListener(e, n, u),
                                h.call(this, t)
                            }),
                            !o && l && (c = function(e) {
                                e.preventDefault = r,
                                h.call(this, e)
                            }),
                            a.has(this) || a.set(this, new WeakMap);
                            var p = a.get(this);
                            p.has(n) || p.set(n, []);
                            var m = 1 * l + 2 * f + 4 * d;
                            p.get(n)[m] = c,
                            t.call(this, e, c, d)
                        },
                        e.removeEventListener = function(e, t, r) {
                            var o = Boolean("object" == typeof r ? r.capture: r),
                            i = a.get(this);
                            if (!i) return n.call(this, e, t, r);
                            var s = i.get(t);
                            if (!s) return n.call(this, e, t, r);
                            for (var c in s) {
                                var u = Boolean(4 & c);
                                u === o && n.call(this, e, s[c], u)
                            }
                        }
                    };
                    o && i || ("undefined" != typeof EventTarget ? s(EventTarget.prototype) : (s(Text.prototype), s(HTMLElement.prototype), s(HTMLDocument.prototype), s(Window.prototype), s(XMLHttpRequest.prototype)))
                },
                {}]
            },
            {},
            [1])(1)
        })
    }),
    n(function(e, t) { !
        function() {
            function t() {
                function e(e, t) {
                    this.scrollLeft = e,
                    this.scrollTop = t
                }
                function t(e) {
                    if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return ! 0;
                    if ("object" == typeof e && "smooth" === e.behavior) return ! 1;
                    throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
                }
                function o(e, t) {
                    return "Y" === t ? e.clientHeight + f < e.scrollHeight: "X" === t ? e.clientWidth + f < e.scrollWidth: void 0
                }
                function i(e, t) {
                    var r = n.getComputedStyle(e, null)["overflow" + t];
                    return "auto" === r || "scroll" === r
                }
                function a(e) {
                    var t = o(e, "Y") && i(e, "Y"),
                    n = o(e, "X") && i(e, "X");
                    return t || n
                }
                function s(e) {
                    var t, r, o, i = (h() - e.startTime) / l;
                    t = function(e) {
                        return.5 * (1 - Math.cos(Math.PI * e))
                    } (i = i > 1 ? 1 : i),
                    r = e.startX + (e.x - e.startX) * t,
                    o = e.startY + (e.y - e.startY) * t,
                    e.method.call(e.scrollable, r, o),
                    r === e.x && o === e.y || n.requestAnimationFrame(s.bind(n, e))
                }
                function c(t, o, i) {
                    var a, c, u, l, f = h();
                    t === r.body ? (a = n, c = n.scrollX || n.pageXOffset, u = n.scrollY || n.pageYOffset, l = d.scroll) : (a = t, c = t.scrollLeft, u = t.scrollTop, l = e),
                    s({
                        scrollable: a,
                        method: l,
                        startTime: f,
                        startX: c,
                        startY: u,
                        x: o,
                        y: i
                    })
                }
                if (! ("scrollBehavior" in r.documentElement.style && !0 !== n.__forceSmoothScrollPolyfill__)) {
                    var u = n.HTMLElement || n.Element,
                    l = 468,
                    f = function(e) {
                        return new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(e)
                    } (n.navigator.userAgent) ? 1 : 0,
                    d = {
                        scroll: n.scroll || n.scrollTo,
                        scrollBy: n.scrollBy,
                        elementScroll: u.prototype.scroll || e,
                        scrollIntoView: u.prototype.scrollIntoView
                    },
                    h = n.performance && n.performance.now ? n.performance.now.bind(n.performance) : Date.now;
                    n.scroll = n.scrollTo = function() {
                        void 0 !== arguments[0] && (!0 !== t(arguments[0]) ? c.call(n, r.body, void 0 !== arguments[0].left ? ~~arguments[0].left: n.scrollX || n.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top: n.scrollY || n.pageYOffset) : d.scroll.call(n, void 0 !== arguments[0].left ? arguments[0].left: "object" != typeof arguments[0] ? arguments[0] : n.scrollX || n.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top: void 0 !== arguments[1] ? arguments[1] : n.scrollY || n.pageYOffset))
                    },
                    n.scrollBy = function() {
                        void 0 !== arguments[0] && (t(arguments[0]) ? d.scrollBy.call(n, void 0 !== arguments[0].left ? arguments[0].left: "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top: void 0 !== arguments[1] ? arguments[1] : 0) : c.call(n, r.body, ~~arguments[0].left + (n.scrollX || n.pageXOffset), ~~arguments[0].top + (n.scrollY || n.pageYOffset)))
                    },
                    u.prototype.scroll = u.prototype.scrollTo = function() {
                        if (void 0 !== arguments[0]) if (!0 !== t(arguments[0])) {
                            var e = arguments[0].left,
                            n = arguments[0].top;
                            c.call(this, this, void 0 === e ? this.scrollLeft: ~~e, void 0 === n ? this.scrollTop: ~~n)
                        } else {
                            if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value couldn't be converted");
                            d.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left: "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top: void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                        }
                    },
                    u.prototype.scrollBy = function() {
                        void 0 !== arguments[0] && (!0 !== t(arguments[0]) ? this.scroll({
                            left: ~~arguments[0].left + this.scrollLeft,
                            top: ~~arguments[0].top + this.scrollTop,
                            behavior: arguments[0].behavior
                        }) : d.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft: ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop: ~~arguments[1] + this.scrollTop))
                    },
                    u.prototype.scrollIntoView = function() {
                        if (!0 !== t(arguments[0])) {
                            var e = function(e) {
                                var t;
                                do {
                                    t = (e = e.parentNode) === r.body
                                } while (! 1 === t && ! 1 === a ( e ));
                                return t = null,
                                e
                            } (this),
                            o = e.getBoundingClientRect(),
                            i = this.getBoundingClientRect();
                            e !== r.body ? (c.call(this, e, e.scrollLeft + i.left - o.left, e.scrollTop + i.top - o.top), "fixed" !== n.getComputedStyle(e).position && n.scrollBy({
                                left: o.left,
                                top: o.top,
                                behavior: "smooth"
                            })) : n.scrollBy({
                                left: i.left,
                                top: i.top,
                                behavior: "smooth"
                            })
                        } else d.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                    }
                }
            }
            var n = window,
            r = document;
            e.exports = {
                polyfill: t
            }
        } ()
    }).polyfill;
    var an = n(function(e, t) { !
        function(t, n) {
            e.exports = n()
        } ("undefined" != typeof self && self,
        function() {
            function e(e) {
                var r, i, a, s, c, u, f = Object.create(null);
                if (this[l] = f, e) if ("string" == typeof e) for ("?" === e.charAt(0) && (e = e.slice(1)), c = 0, u = (s = e.split("&")).length; c < u; c++) - 1 < (r = (a = s[c]).indexOf("=")) ? t(f, n(a.slice(0, r)), n(a.slice(r + 1))) : a.length && t(f, n(a), "");
                else if (o(e)) for (c = 0, u = e.length; c < u; c++) t(f, (a = e[c])[0], a[1]);
                else for (i in e) t(f, i, e[i])
            }
            function t(e, t, n) {
                t in e ? e[t].push("" + n) : e[t] = o(n) ? n: ["" + n]
            }
            function n(e) {
                return decodeURIComponent(e.replace(s, " "))
            }
            function r(e) {
                return encodeURIComponent(e).replace(a, u)
            }
            var o = Array.isArray,
            i = e.prototype,
            a = /[!'\(\)~]|%20|%00/g,
            s = /\+/g,
            c = {
                "!": "%21",
                "'": "%27",
                "(": "%28",
                ")": "%29",
                "~": "%7E",
                "%20": "+",
                "%00": "\0"
            },
            u = function(e) {
                return c[e]
            },
            l = "__URLSearchParams__:" + Math.random();
            i.append = function(e, n) {
                t(this[l], e, n)
            },
            i.delete = function(e) {
                delete this[l][e]
            },
            i.get = function(e) {
                var t = this[l];
                return e in t ? t[e][0] : null
            },
            i.getAll = function(e) {
                var t = this[l];
                return e in t ? t[e].slice(0) : []
            },
            i.has = function(e) {
                return e in this[l]
            },
            i.set = function(e, t) {
                this[l][e] = ["" + t]
            },
            i.forEach = function(e, t) {
                var n = this[l];
                Object.getOwnPropertyNames(n).forEach(function(r) {
                    n[r].forEach(function(n) {
                        e.call(t, n, r, this)
                    },
                    this)
                },
                this)
            },
            i.toJSON = function() {
                return {}
            },
            i.toString = function() {
                var e, t, n, o, i = this[l],
                a = [];
                for (t in i) for (n = r(t), e = 0, o = i[t]; e < o.length; e++) a.push(n + "=" + r(o[e]));
                return a.join("&")
            };
            var f = Object.defineProperty,
            d = Object.getOwnPropertyDescriptor,
            h = function(t) {
                var n = t.append;
                t.append = i.append,
                e.call(t, t._usp.search.slice(1)),
                t.append = n
            },
            p = function(e, t) {
                if (! (e instanceof t)) throw new TypeError("'searchParams' accessed on an object that does not implement interface " + t.name)
            },
            m = function(t) {
                var n, r = t.prototype,
                o = d(r, "searchParams"),
                a = d(r, "href"),
                s = d(r, "search"); ! o && s && s.set && (n = function(e) {
                    return function(t, n) {
                        return f(t, "_searchParams", {
                            configurable: !0,
                            writable: !0,
                            value: e(n, t)
                        }),
                        n
                    }
                } (function(e) {
                    function t(t, n) {
                        i.append.call(this, t, n),
                        t = this.toString(),
                        e.set.call(this._usp, t ? "?" + t: "")
                    }
                    function n(t) {
                        i.delete.call(this, t),
                        t = this.toString(),
                        e.set.call(this._usp, t ? "?" + t: "")
                    }
                    function r(t, n) {
                        i.set.call(this, t, n),
                        t = this.toString(),
                        e.set.call(this._usp, t ? "?" + t: "")
                    }
                    return function(e, o) {
                        return e.append = t,
                        e.delete = n,
                        e.set = r,
                        f(e, "_usp", {
                            configurable: !0,
                            writable: !0,
                            value: o
                        })
                    }
                } (s)), Object.defineProperties(r, {
                    href: {
                        get: function() {
                            return a.get.call(this)
                        },
                        set: function(e) {
                            var t = this._searchParams;
                            a.set.call(this, e),
                            t && h(t)
                        }
                    },
                    search: {
                        get: function() {
                            return s.get.call(this)
                        },
                        set: function(e) {
                            var t = this._searchParams;
                            s.set.call(this, e),
                            t && h(t)
                        }
                    },
                    searchParams: {
                        get: function() {
                            return p(this, t),
                            this._searchParams || n(this, new e(this.search.slice(1)))
                        },
                        set: function(e) {
                            p(this, t),
                            n(this, e)
                        }
                    }
                }))
            };
            return m(HTMLAnchorElement),
            /^function|object$/.test(typeof URL) && URL.prototype && m(URL),
            function(e) {
                var t = function() {
                    try {
                        return !! Symbol.iterator
                    } catch(e) {
                        return ! 1
                    }
                } ();
                "forEach" in e || (e.forEach = function(e, t) {
                    var n = Object.create(null);
                    this.toString().replace(/=[\s\S]*?(?:&|$)/g, "=").split("=").forEach(function(r) { ! r.length || r in n || (n[r] = this.getAll(r)).forEach(function(n) {
                            e.call(t, n, r, this)
                        },
                        this)
                    },
                    this)
                }),
                "keys" in e || (e.keys = function() {
                    var e = [];
                    this.forEach(function(t, n) {
                        e.push(n)
                    });
                    var n = {
                        next: function() {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            }
                        }
                    };
                    return t && (n[Symbol.iterator] = function() {
                        return n
                    }),
                    n
                }),
                "values" in e || (e.values = function() {
                    var e = [];
                    this.forEach(function(t) {
                        e.push(t)
                    });
                    var n = {
                        next: function() {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            }
                        }
                    };
                    return t && (n[Symbol.iterator] = function() {
                        return n
                    }),
                    n
                }),
                "entries" in e || (e.entries = function() {
                    var e = [];
                    this.forEach(function(t, n) {
                        e.push([n, t])
                    });
                    var n = {
                        next: function() {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            }
                        }
                    };
                    return t && (n[Symbol.iterator] = function() {
                        return n
                    }),
                    n
                }),
                !t || Symbol.iterator in e || (e[Symbol.iterator] = e.entries),
                "sort" in e || (e.sort = function() {
                    for (var e, t, n, r = this.entries(), o = r.next(), i = o.done, a = [], s = Object.create(null); ! i;) t = (n = o.value)[0],
                    a.push(t),
                    t in s || (s[t] = []),
                    s[t].push(n[1]),
                    i = (o = r.next()).done;
                    for (a.sort(), e = 0; e < a.length; e++) this.delete(a[e]);
                    for (e = 0; e < a.length; e++) t = a[e],
                    this.append(t, s[t].shift())
                })
            } (e.prototype),
            e
        })
    });
    window.URLSearchParams || (window.URLSearchParams = an);
    var sn = n(function(e) { !
        function(t, n) {
            e.exports = t.document ? n(t, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            }
        } ("undefined" != typeof window ? window: Yt,
        function(e, t) {
            function n(e, t) {
                var n = (t = t || H).createElement("script");
                n.text = e,
                t.head.appendChild(n).parentNode.removeChild(n)
            }
            function r(e) {
                var t = !!e && "length" in e && e.length,
                n = G.type(e);
                return "function" !== n && !G.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            function o(e, t) {
                if (e === t) return ee = !0,
                0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ? e === H || e.ownerDocument === H && G.contains(H, e) ? -1 : t === H || t.ownerDocument === H && G.contains(H, t) ? 1 : te ? U.call(te, e) - U.call(te, t) : 0 : 4 & n ? -1 : 1)
            }
            function i(e) {
                var t, n = [],
                r = 0,
                i = 0;
                if (ee = !1, te = !re && e.slice(0), e.sort(o), ee) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return te = null,
                e
            }
            function a(e, t, n) {
                if (G.isFunction(t)) return G.grep(e,
                function(e, r) {
                    return !! t.call(e, r, e) !== n
                });
                if (t.nodeType) return G.grep(e,
                function(e) {
                    return e === t !== n
                });
                if ("string" == typeof t) {
                    if (fe.test(t)) return G.filter(t, e, n);
                    t = G.filter(t, e)
                }
                return G.grep(e,
                function(e) {
                    return U.call(t, e) > -1 !== n && 1 === e.nodeType
                })
            }
            function s(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            function c() {
                this.expando = G.expando + c.uid++
            }
            function u(e, t, n) {
                var r;
                if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null: +n + "" === n ? +n: _e.test(n) ? JSON.parse(n) : n)
                    } catch(e) {}
                    we.set(e, t, n)
                } else n = void 0;
                return n
            }
            function l(e) {
                var t, n = e.ownerDocument,
                r = e.nodeName,
                o = Oe[r];
                return o || (t = n.body.appendChild(n.createElement(r)), o = G.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Oe[r] = o, o)
            }
            function f(e, t) {
                for (var n, r, o = [], i = 0, a = e.length; i < a; i++)(r = e[i]).style && (n = r.style.display, t ? ("none" === n && (o[i] = be.get(r, "display") || null, o[i] || (r.style.display = "")), "" === r.style.display && Se(r) && (o[i] = l(r))) : "none" !== n && (o[i] = "none", be.set(r, "display", n)));
                for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
                return e
            }
            function d(e, t) {
                var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                return void 0 === t || t && G.nodeName(e, t) ? G.merge([e], n) : n
            }
            function h(e, t) {
                for (var n = 0,
                r = e.length; n < r; n++) be.set(e[n], "globalEval", !t || be.get(t[n], "globalEval"))
            }
            function p(e, t, n, r, o) {
                for (var i, a, s, c, u, l, f = t.createDocumentFragment(), p = [], m = 0, v = e.length; m < v; m++) if ((i = e[m]) || 0 === i) if ("object" === G.type(i)) G.merge(p, i.nodeType ? [i] : i);
                else if (Me.test(i)) {
                    for (a = a || f.appendChild(t.createElement("div")), s = (Ce.exec(i) || ["", ""])[1].toLowerCase(), c = De[s] || De._default, a.innerHTML = c[1] + G.htmlPrefilter(i) + c[2], l = c[0]; l--;) a = a.lastChild;
                    G.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else p.push(t.createTextNode(i));
                for (f.textContent = "", m = 0; i = p[m++];) if (r && G.inArray(i, r) > -1) o && o.push(i);
                else if (u = G.contains(i.ownerDocument, i), a = d(f.appendChild(i), "script"), u && h(a), n) for (l = 0; i = a[l++];) Ae.test(i.type || "") && n.push(i);
                return f
            }
            function m() {
                return ! 0
            }
            function v() {
                return ! 1
            }
            function g() {
                try {
                    return H.activeElement
                } catch(e) {}
            }
            function y(e, t, n, r, o, i) {
                var a, s;
                if ("object" == typeof t) {
                    "string" != typeof n && (r = r || n, n = void 0);
                    for (s in t) y(e, s, n, r, t[s], i);
                    return e
                }
                if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = v;
                else if (!o) return e;
                return 1 === i && (a = o, (o = function(e) {
                    return G().off(e),
                    a.apply(this, arguments)
                }).guid = a.guid || (a.guid = G.guid++)),
                e.each(function() {
                    G.event.add(this, t, o, r, n)
                })
            }
            function b(e, t) {
                return G.nodeName(e, "table") && G.nodeName(11 !== t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e: e
            }
            function w(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                e
            }
            function _(e) {
                var t = qe.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"),
                e
            }
            function E(e, t) {
                var n, r, o, i, a, s, c, u;
                if (1 === t.nodeType) {
                    if (be.hasData(e) && (i = be.access(e), a = be.set(t, i), u = i.events)) {
                        delete a.handle,
                        a.events = {};
                        for (o in u) for (n = 0, r = u[o].length; n < r; n++) G.event.add(t, o, u[o][n])
                    }
                    we.hasData(e) && (s = we.access(e), c = G.extend({},
                    s), we.set(t, c))
                }
            }
            function x(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && Le.test(e.type) ? t.checked = e.checked: "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
            function T(e, t, r, o) {
                t = q.apply([], t);
                var i, a, s, c, u, l, f = 0,
                h = e.length,
                m = h - 1,
                v = t[0],
                g = G.isFunction(v);
                if (g || h > 1 && "string" == typeof v && !$.checkClone && Fe.test(v)) return e.each(function(n) {
                    var i = e.eq(n);
                    g && (t[0] = v.call(this, n, i.html())),
                    T(i, t, r, o)
                });
                if (h && (i = p(t, e[0].ownerDocument, !1, e, o), a = i.firstChild, 1 === i.childNodes.length && (i = a), a || o)) {
                    for (c = (s = G.map(d(i, "script"), w)).length; f < h; f++) u = i,
                    f !== m && (u = G.clone(u, !0, !0), c && G.merge(s, d(u, "script"))),
                    r.call(e[f], u, f);
                    if (c) for (l = s[s.length - 1].ownerDocument, G.map(s, _), f = 0; f < c; f++) u = s[f],
                    Ae.test(u.type || "") && !be.access(u, "globalEval") && G.contains(l, u) && (u.src ? G._evalUrl && G._evalUrl(u.src) : n(u.textContent.replace(Be, ""), l))
                }
                return e
            }
            function k(e, t, n) {
                for (var r, o = t ? G.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || G.cleanData(d(r)),
                r.parentNode && (n && G.contains(r.ownerDocument, r) && h(d(r, "script")), r.parentNode.removeChild(r));
                return e
            }
            function S(e, t, n) {
                var r, o, i, a, s = e.style;
                return (n = n || We(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || G.contains(e.ownerDocument, e) || (a = G.style(e, t)), !$.pixelMarginRight() && ze.test(a) && Ue.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)),
                void 0 !== a ? a + "": a
            }
            function j(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }
            function O(e) {
                if (e in Ge) return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = $e.length; n--;) if ((e = $e[n] + t) in Ge) return e
            }
            function L(e, t, n) {
                var r = Te.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
            }
            function C(e, t, n, r, o) {
                for (var i = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0, a = 0; i < 4; i += 2)"margin" === n && (a += G.css(e, n + ke[i], !0, o)),
                r ? ("content" === n && (a -= G.css(e, "padding" + ke[i], !0, o)), "margin" !== n && (a -= G.css(e, "border" + ke[i] + "Width", !0, o))) : (a += G.css(e, "padding" + ke[i], !0, o), "padding" !== n && (a += G.css(e, "border" + ke[i] + "Width", !0, o)));
                return a
            }
            function A(e, t, n) {
                var r, o = !0,
                i = We(e),
                a = "border-box" === G.css(e, "boxSizing", !1, i);
                if (e.getClientRects().length && (r = e.getBoundingClientRect()[t]), r <= 0 || null == r) {
                    if (((r = S(e, t, i)) < 0 || null == r) && (r = e.style[t]), ze.test(r)) return r;
                    o = a && ($.boxSizingReliable() || r === e.style[t]),
                    r = parseFloat(r) || 0
                }
                return r + C(e, t, n || (a ? "border": "content"), o, i) + "px"
            }
            function D(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }
            function M(e, t, n, r) {
                var o;
                if (G.isArray(t)) G.each(t,
                function(t, o) {
                    n || ot.test(e) ? r(e, o) : M(e + "[" + ("object" == typeof o && null != o ? t: "") + "]", o, n, r)
                });
                else if (n || "object" !== G.type(t)) r(e, t);
                else for (o in t) M(e + "[" + o + "]", t[o], n, r)
            }
            function P(e) {
                return G.isWindow(e) ? e: 9 === e.nodeType && e.defaultView
            }
            function N() {
                H.removeEventListener("DOMContentLoaded", N),
                e.removeEventListener("load", N),
                G.ready()
            }
            var R = [],
            H = e.document,
            I = Object.getPrototypeOf,
            F = R.slice,
            q = R.concat,
            B = R.push,
            U = R.indexOf,
            z = {},
            W = z.toString,
            X = z.hasOwnProperty,
            Y = X.toString,
            V = Y.call(Object),
            $ = {},
            G = function(e, t) {
                return new G.fn.init(e, t)
            },
            J = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            K = /^-ms-/,
            Z = /-([a-z])/g,
            Q = function(e, t) {
                return t.toUpperCase()
            };
            G.fn = G.prototype = {
                jquery: "3.0.0",
                constructor: G,
                length: 0,
                toArray: function() {
                    return F.call(this)
                },
                get: function(e) {
                    return null != e ? e < 0 ? this[e + this.length] : this[e] : F.call(this)
                },
                pushStack: function(e) {
                    var t = G.merge(this.constructor(), e);
                    return t.prevObject = this,
                    t
                },
                each: function(e) {
                    return G.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(G.map(this,
                    function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(F.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq( - 1)
                },
                eq: function(e) {
                    var t = this.length,
                    n = +e + (e < 0 ? t: 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: B,
                sort: R.sort,
                splice: R.splice
            },
            G.extend = G.fn.extend = function() {
                var e, t, n, r, o, i, a = arguments[0] || {},
                s = 1,
                c = arguments.length,
                u = !1;
                for ("boolean" == typeof a && (u = a, a = arguments[s] || {},
                s++), "object" == typeof a || G.isFunction(a) || (a = {}), s === c && (a = this, s--); s < c; s++) if (null != (e = arguments[s])) for (t in e) n = a[t],
                a !== (r = e[t]) && (u && r && (G.isPlainObject(r) || (o = G.isArray(r))) ? (o ? (o = !1, i = n && G.isArray(n) ? n: []) : i = n && G.isPlainObject(n) ? n: {},
                a[t] = G.extend(u, i, r)) : void 0 !== r && (a[t] = r));
                return a
            },
            G.extend({
                expando: "jQuery" + ("3.0.0" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isFunction: function(e) {
                    return "function" === G.type(e)
                },
                isArray: Array.isArray,
                isWindow: function(e) {
                    return null != e && e === e.window
                },
                isNumeric: function(e) {
                    var t = G.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                },
                isPlainObject: function(e) {
                    var t, n;
                    return ! (!e || "[object Object]" !== W.call(e)) && (!(t = I(e)) || "function" == typeof(n = X.call(t, "constructor") && t.constructor) && Y.call(n) === V)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return ! 1;
                    return ! 0
                },
                type: function(e) {
                    return null == e ? e + "": "object" == typeof e || "function" == typeof e ? z[W.call(e)] || "object": typeof e
                },
                globalEval: function(e) {
                    n(e)
                },
                camelCase: function(e) {
                    return e.replace(K, "ms-").replace(Z, Q)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t) {
                    var n, o = 0;
                    if (r(e)) for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
                    else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "": (e + "").replace(J, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (r(Object(e)) ? G.merge(n, "string" == typeof e ? [e] : e) : B.call(n, e)),
                    n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : U.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length,
                    r = 0,
                    o = e.length; r < n; r++) e[o++] = t[r];
                    return e.length = o,
                    e
                },
                grep: function(e, t, n) {
                    for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) ! t(e[o], o) !== a && r.push(e[o]);
                    return r
                },
                map: function(e, t, n) {
                    var o, i, a = 0,
                    s = [];
                    if (r(e)) for (o = e.length; a < o; a++) null != (i = t(e[a], a, n)) && s.push(i);
                    else for (a in e) null != (i = t(e[a], a, n)) && s.push(i);
                    return q.apply([], s)
                },
                guid: 1,
                proxy: function(e, t) {
                    var n, r, o;
                    if ("string" == typeof t && (n = e[t], t = e, e = n), G.isFunction(e)) return r = F.call(arguments, 2),
                    o = function() {
                        return e.apply(t || this, r.concat(F.call(arguments)))
                    },
                    o.guid = e.guid = e.guid || G.guid++,
                    o
                },
                now: Date.now,
                support: $
            }),
            "function" == typeof Symbol && (G.fn[Symbol.iterator] = R[Symbol.iterator]),
            G.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
            function(e, t) {
                z["[object " + t + "]"] = t.toLowerCase()
            });
            var ee, te, ne = H.documentElement,
            re = G.expando.split("").sort(o).join("") === G.expando,
            oe = ne.matches || ne.webkitMatchesSelector || ne.mozMatchesSelector || ne.oMatchesSelector || ne.msMatchesSelector,
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            ae = function(e, t) {
                return t ? "\0" === e ? "�": e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ": "\\" + e
            };
            G.extend({
                uniqueSort: i,
                unique: i,
                escapeSelector: function(e) {
                    return (e + "").replace(ie, ae)
                },
                find: function(e, t, n, r) {
                    var o, i, a = 0;
                    if (n = n || [], t = t || H, !e || "string" != typeof e) return n;
                    if (1 !== (i = t.nodeType) && 9 !== i) return [];
                    if (r) for (; o = r[a++];) G.find.matchesSelector(o, e) && n.push(o);
                    else G.merge(n, t.querySelectorAll(e));
                    return n
                },
                text: function(e) {
                    var t, n = "",
                    r = 0,
                    o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) return e.textContent;
                        if (3 === o || 4 === o) return e.nodeValue
                    } else for (; t = e[r++];) n += G.text(t);
                    return n
                },
                contains: function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement: e,
                    r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !n.contains(r))
                },
                isXMLDoc: function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !! t && "HTML" !== t.nodeName
                },
                expr: {
                    attrHandle: {},
                    match: {
                        bool: new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
                        needsContext: /^[\x20\t\r\n\f]*[>+~]/
                    }
                }
            }),
            G.extend(G.find, {
                matches: function(e, t) {
                    return G.find(e, null, null, t)
                },
                matchesSelector: function(e, t) {
                    return oe.call(e, t)
                },
                attr: function(e, t) {
                    var n = G.expr.attrHandle[t.toLowerCase()],
                    r = n && X.call(G.expr.attrHandle, t.toLowerCase()) ? n(e, t, G.isXMLDoc(e)) : void 0;
                    return void 0 !== r ? r: e.getAttribute(t)
                }
            });
            var se = function(e, t, n) {
                for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                    if (o && G(e).is(n)) break;
                    r.push(e)
                }
                return r
            },
            ce = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            ue = G.expr.match.needsContext,
            le = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            fe = /^.[^:#\[\.,]*$/;
            G.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === r.nodeType ? G.find.matchesSelector(r, e) ? [r] : [] : G.find.matches(e, G.grep(t,
                function(e) {
                    return 1 === e.nodeType
                }))
            },
            G.fn.extend({
                find: function(e) {
                    var t, n, r = this.length,
                    o = this;
                    if ("string" != typeof e) return this.pushStack(G(e).filter(function() {
                        for (t = 0; t < r; t++) if (G.contains(o[t], this)) return ! 0
                    }));
                    for (n = this.pushStack([]), t = 0; t < r; t++) G.find(e, o[t], n);
                    return r > 1 ? G.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(a(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(a(this, e || [], !0))
                },
                is: function(e) {
                    return !! a(this, "string" == typeof e && ue.test(e) ? G(e) : e || [], !1).length
                }
            });
            var de, he = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/; (G.fn.init = function(e, t, n) {
                var r, o;
                if (!e) return this;
                if (n = n || de, "string" == typeof e) {
                    if (! (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : he.exec(e)) || !r[1] && t) return ! t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof G ? t[0] : t, G.merge(this, G.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t: H, !0)), le.test(r[1]) && G.isPlainObject(t)) for (r in t) G.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    return (o = H.getElementById(r[2])) && (this[0] = o, this.length = 1),
                    this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : G.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(G) : G.makeArray(e, this)
            }).prototype = G.fn,
            de = G(H);
            var pe = /^(?:parents|prev(?:Until|All))/,
            me = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            G.fn.extend({
                has: function(e) {
                    var t = G(e, this),
                    n = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < n; e++) if (G.contains(this, t[e])) return ! 0
                    })
                },
                closest: function(e, t) {
                    var n, r = 0,
                    o = this.length,
                    i = [],
                    a = "string" != typeof e && G(e);
                    if (!ue.test(e)) for (; r < o; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && G.find.matchesSelector(n, e))) {
                        i.push(n);
                        break
                    }
                    return this.pushStack(i.length > 1 ? G.uniqueSort(i) : i)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? U.call(G(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
                },
                add: function(e, t) {
                    return this.pushStack(G.uniqueSort(G.merge(this.get(), G(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
                }
            }),
            G.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t: null
                },
                parents: function(e) {
                    return se(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return se(e, "parentNode", n)
                },
                next: function(e) {
                    return s(e, "nextSibling")
                },
                prev: function(e) {
                    return s(e, "previousSibling")
                },
                nextAll: function(e) {
                    return se(e, "nextSibling")
                },
                prevAll: function(e) {
                    return se(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return se(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return se(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return ce((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return ce(e.firstChild)
                },
                contents: function(e) {
                    return e.contentDocument || G.merge([], e.childNodes)
                }
            },
            function(e, t) {
                G.fn[e] = function(n, r) {
                    var o = G.map(this, t, n);
                    return "Until" !== e.slice( - 5) && (r = n),
                    r && "string" == typeof r && (o = G.filter(r, o)),
                    this.length > 1 && (me[e] || G.uniqueSort(o), pe.test(e) && o.reverse()),
                    this.pushStack(o)
                }
            });
            var ve = /\S+/g;
            G.Callbacks = function(e) {
                e = "string" == typeof e ?
                function(e) {
                    var t = {};
                    return G.each(e.match(ve) || [],
                    function(e, n) {
                        t[n] = !0
                    }),
                    t
                } (e) : G.extend({},
                e);
                var t, n, r, o, i = [],
                a = [],
                s = -1,
                c = function() {
                    for (o = e.once, r = t = !0; a.length; s = -1) for (n = a.shift(); ++s < i.length;) ! 1 === i[s].apply(n[0], n[1]) && e.stopOnFalse && (s = i.length, n = !1);
                    e.memory || (n = !1),
                    t = !1,
                    o && (i = n ? [] : "")
                },
                u = {
                    add: function() {
                        return i && (n && !t && (s = i.length - 1, a.push(n)),
                        function t(n) {
                            G.each(n,
                            function(n, r) {
                                G.isFunction(r) ? e.unique && u.has(r) || i.push(r) : r && r.length && "string" !== G.type(r) && t(r)
                            })
                        } (arguments), n && !t && c()),
                        this
                    },
                    remove: function() {
                        return G.each(arguments,
                        function(e, t) {
                            for (var n; (n = G.inArray(t, i, n)) > -1;) i.splice(n, 1),
                            n <= s && s--
                        }),
                        this
                    },
                    has: function(e) {
                        return e ? G.inArray(e, i) > -1 : i.length > 0
                    },
                    empty: function() {
                        return i && (i = []),
                        this
                    },
                    disable: function() {
                        return o = a = [],
                        i = n = "",
                        this
                    },
                    disabled: function() {
                        return ! i
                    },
                    lock: function() {
                        return o = a = [],
                        n || t || (i = n = ""),
                        this
                    },
                    locked: function() {
                        return !! o
                    },
                    fireWith: function(e, n) {
                        return o || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || c()),
                        this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments),
                        this
                    },
                    fired: function() {
                        return !! r
                    }
                };
                return u
            };
            var ge = function(e, t, n, r, o, i, a) {
                var s = 0,
                c = e.length,
                u = null == n;
                if ("object" === G.type(n)) {
                    o = !0;
                    for (s in n) ge(e, t, s, n[s], !0, i, a)
                } else if (void 0 !== r && (o = !0, G.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(G(e), n)
                })), t)) for (; s < c; s++) t(e[s], n, a ? r: r.call(e[s], s, t(e[s], n)));
                return o ? e: u ? t.call(e) : c ? t(e[0], n) : i
            },
            ye = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
            c.uid = 1,
            c.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {},
                    ye(e) && (e.nodeType ? e[this.expando] = t: Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))),
                    t
                },
                set: function(e, t, n) {
                    var r, o = this.cache(e);
                    if ("string" == typeof t) o[G.camelCase(t)] = n;
                    else for (r in t) o[G.camelCase(r)] = t[r];
                    return o
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G.camelCase(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n: t)
                },
                remove: function(e, t) {
                    var n, r = e[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== t) {
                            n = (t = G.isArray(t) ? t.map(G.camelCase) : (t = G.camelCase(t)) in r ? [t] : t.match(ve) || []).length;
                            for (; n--;) delete r[t[n]]
                        } (void 0 === t || G.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !G.isEmptyObject(t)
                }
            };
            var be = new c,
            we = new c,
            _e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ee = /[A-Z]/g;
            G.extend({
                hasData: function(e) {
                    return we.hasData(e) || be.hasData(e)
                },
                data: function(e, t, n) {
                    return we.access(e, t, n)
                },
                removeData: function(e, t) {
                    we.remove(e, t)
                },
                _data: function(e, t, n) {
                    return be.access(e, t, n)
                },
                _removeData: function(e, t) {
                    be.remove(e, t)
                }
            }),
            G.fn.extend({
                data: function(e, t) {
                    var n, r, o, i = this[0],
                    a = i && i.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = we.get(i), 1 === i.nodeType && !be.get(i, "hasDataAttrs"))) {
                            for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G.camelCase(r.slice(5)), u(i, r, o[r]));
                            be.set(i, "hasDataAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof e ? this.each(function() {
                        we.set(this, e)
                    }) : ge(this,
                    function(t) {
                        var n;
                        if (i && void 0 === t) {
                            if (void 0 !== (n = we.get(i, e))) return n;
                            if (void 0 !== (n = u(i, e))) return n
                        } else this.each(function() {
                            we.set(this, e, t)
                        })
                    },
                    null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                    return this.each(function() {
                        we.remove(this, e)
                    })
                }
            });
            var xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Te = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$", "i"),
            ke = ["Top", "Right", "Bottom", "Left"],
            Se = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && G.contains(e.ownerDocument, e) && "none" === G.css(e, "display")
            },
            je = function(e, t, n, r) {
                var o, i, a = {};
                for (i in t) a[i] = e.style[i],
                e.style[i] = t[i];
                o = n.apply(e, r || []);
                for (i in t) e.style[i] = a[i];
                return o
            },
            Oe = {};
            G.fn.extend({
                show: function() {
                    return f(this, !0)
                },
                hide: function() {
                    return f(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        Se(this) ? G(this).show() : G(this).hide()
                    })
                }
            });
            var Le = /^(?:checkbox|radio)$/i,
            Ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Ae = /^$|\/(?:java|ecma)script/i,
            De = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            De.optgroup = De.option,
            De.tbody = De.tfoot = De.colgroup = De.caption = De.thead,
            De.th = De.td;
            var Me = /<|&#?\w+;/; !
            function() {
                var e = H.createDocumentFragment().appendChild(H.createElement("div")),
                t = H.createElement("input");
                t.setAttribute("type", "radio"),
                t.setAttribute("checked", "checked"),
                t.setAttribute("name", "t"),
                e.appendChild(t),
                $.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
                e.innerHTML = "<textarea>x</textarea>",
                $.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
            } ();
            var Pe = /^key/,
            Ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Re = /^([^.]*)(?:\.(.+)|)/;
            G.event = {
                global: {},
                add: function(e, t, n, r, o) {
                    var i, a, s, c, u, l, f, d, h, p, m, v = be.get(e);
                    if (v) for (n.handler && (n = (i = n).handler, o = i.selector), o && G.find.matchesSelector(ne, o), n.guid || (n.guid = G.guid++), (c = v.events) || (c = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
                        return void 0 !== G && G.event.triggered !== t.type ? G.event.dispatch.apply(e, arguments) : void 0
                    }), u = (t = (t || "").match(ve) || [""]).length; u--;) h = m = (s = Re.exec(t[u]) || [])[1],
                    p = (s[2] || "").split(".").sort(),
                    h && (f = G.event.special[h] || {},
                    h = (o ? f.delegateType: f.bindType) || h, f = G.event.special[h] || {},
                    l = G.extend({
                        type: h,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && G.expr.match.needsContext.test(o),
                        namespace: p.join(".")
                    },
                    i), (d = c[h]) || ((d = c[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, p, a) || e.addEventListener && e.addEventListener(h, a)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, l) : d.push(l), G.event.global[h] = !0)
                },
                remove: function(e, t, n, r, o) {
                    var i, a, s, c, u, l, f, d, h, p, m, v = be.hasData(e) && be.get(e);
                    if (v && (c = v.events)) {
                        for (u = (t = (t || "").match(ve) || [""]).length; u--;) if (s = Re.exec(t[u]) || [], h = m = s[1], p = (s[2] || "").split(".").sort(), h) {
                            for (f = G.event.special[h] || {},
                            d = c[h = (r ? f.delegateType: f.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = d.length; i--;) l = d[i],
                            !o && m !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (d.splice(i, 1), l.selector && d.delegateCount--, f.remove && f.remove.call(e, l));
                            a && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, v.handle) || G.removeEvent(e, h, v.handle), delete c[h])
                        } else for (h in c) G.event.remove(e, h + t[u], n, r, !0);
                        G.isEmptyObject(c) && be.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, r, o, i, a, s = G.event.fix(e),
                    c = new Array(arguments.length),
                    u = (be.get(this, "events") || {})[s.type] || [],
                    l = G.event.special[s.type] || {};
                    for (c[0] = s, t = 1; t < arguments.length; t++) c[t] = arguments[t];
                    if (s.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, s)) {
                        for (a = G.event.handlers.call(this, s, u), t = 0; (o = a[t++]) && !s.isPropagationStopped();) for (s.currentTarget = o.elem, n = 0; (i = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, void 0 !== (r = ((G.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, c)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                        return l.postDispatch && l.postDispatch.call(this, s),
                        s.result
                    }
                },
                handlers: function(e, t) {
                    var n, r, o, i, a = [],
                    s = t.delegateCount,
                    c = e.target;
                    if (s && c.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; c !== this; c = c.parentNode || this) if (1 === c.nodeType && (!0 !== c.disabled || "click" !== e.type)) {
                        for (r = [], n = 0; n < s; n++) void 0 === r[o = (i = t[n]).selector + " "] && (r[o] = i.needsContext ? G(o, this).index(c) > -1 : G.find(o, this, null, [c]).length),
                        r[o] && r.push(i);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    }
                    return s < t.length && a.push({
                        elem: this,
                        handlers: t.slice(s)
                    }),
                    a
                },
                addProp: function(e, t) {
                    Object.defineProperty(G.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: G.isFunction(t) ?
                        function() {
                            if (this.originalEvent) return t(this.originalEvent)
                        }: function() {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[G.expando] ? e: new G.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== g() && this.focus) return this.focus(),
                            !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === g() && this.blur) return this.blur(),
                            !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if ("checkbox" === this.type && this.click && G.nodeName(this, "input")) return this.click(),
                            !1
                        },
                        _default: function(e) {
                            return G.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            },
            G.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            },
            G.Event = function(e, t) {
                if (! (this instanceof G.Event)) return new G.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? m: v, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode: e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e,
                t && G.extend(this, t),
                this.timeStamp = e && e.timeStamp || G.now(),
                this[G.expando] = !0
            },
            G.Event.prototype = {
                constructor: G.Event,
                isDefaultPrevented: v,
                isPropagationStopped: v,
                isImmediatePropagationStopped: v,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = m,
                    e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = m,
                    e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = m,
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
                }
            },
            G.each({
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
                which: function(e) {
                    var t = e.button;
                    return null == e.which && Pe.test(e.type) ? null != e.charCode ? e.charCode: e.keyCode: !e.which && void 0 !== t && Ne.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            },
            G.event.addProp),
            G.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            },
            function(e, t) {
                G.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = e.relatedTarget,
                        o = e.handleObj;
                        return r && (r === this || G.contains(this, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
                        n
                    }
                }
            }),
            G.fn.extend({
                on: function(e, t, n, r) {
                    return y(this, e, t, n, r)
                },
                one: function(e, t, n, r) {
                    return y(this, e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var r, o;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj,
                    G(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace: r.origType, r.selector, r.handler),
                    this;
                    if ("object" == typeof e) {
                        for (o in e) this.off(o, t, e[o]);
                        return this
                    }
                    return ! 1 !== t && "function" != typeof t || (n = t, t = void 0),
                    !1 === n && (n = v),
                    this.each(function() {
                        G.event.remove(this, e, n, t)
                    })
                }
            });
            var He = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Ie = /<script|<style|<link/i,
            Fe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            qe = /^true\/(.*)/,
            Be = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            G.extend({
                htmlPrefilter: function(e) {
                    return e.replace(He, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var r, o, i, a, s = e.cloneNode(!0),
                    c = G.contains(e.ownerDocument, e);
                    if (! ($.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || G.isXMLDoc(e))) for (a = d(s), r = 0, o = (i = d(e)).length; r < o; r++) x(i[r], a[r]);
                    if (t) if (n) for (i = i || d(e), a = a || d(s), r = 0, o = i.length; r < o; r++) E(i[r], a[r]);
                    else E(e, s);
                    return (a = d(s, "script")).length > 0 && h(a, !c && d(e, "script")),
                    s
                },
                cleanData: function(e) {
                    for (var t, n, r, o = G.event.special,
                    i = 0; void 0 !== (n = e[i]); i++) if (ye(n)) {
                        if (t = n[be.expando]) {
                            if (t.events) for (r in t.events) o[r] ? G.event.remove(n, r) : G.removeEvent(n, r, t.handle);
                            n[be.expando] = void 0
                        }
                        n[we.expando] && (n[we.expando] = void 0)
                    }
                }
            }),
            G.fn.extend({
                detach: function(e) {
                    return k(this, e, !0)
                },
                remove: function(e) {
                    return k(this, e)
                },
                text: function(e) {
                    return ge(this,
                    function(e) {
                        return void 0 === e ? G.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    },
                    null, e, arguments.length)
                },
                append: function() {
                    return T(this, arguments,
                    function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            b(this, e).appendChild(e)
                        }
                    })
                },
                prepend: function() {
                    return T(this, arguments,
                    function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = b(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return T(this, arguments,
                    function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return T(this, arguments,
                    function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (G.cleanData(d(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e,
                    t = null == t ? e: t,
                    this.map(function() {
                        return G.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return ge(this,
                    function(e) {
                        var t = this[0] || {},
                        n = 0,
                        r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ie.test(e) && !De[(Ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = G.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (G.cleanData(d(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch(e) {}
                        }
                        t && this.empty().append(e)
                    },
                    null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return T(this, arguments,
                    function(t) {
                        var n = this.parentNode;
                        G.inArray(this, e) < 0 && (G.cleanData(d(this)), n && n.replaceChild(t, this))
                    },
                    e)
                }
            }),
            G.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            },
            function(e, t) {
                G.fn[e] = function(e) {
                    for (var n, r = [], o = G(e), i = o.length - 1, a = 0; a <= i; a++) n = a === i ? this: this.clone(!0),
                    G(o[a])[t](n),
                    B.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var Ue = /^margin/,
            ze = new RegExp("^(" + xe + ")(?!px)[a-z%]+$", "i"),
            We = function(t) {
                var n = t.ownerDocument.defaultView;
                return n && n.opener || (n = e),
                n.getComputedStyle(t)
            }; !
            function() {
                function t() {
                    if (s) {
                        s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                        s.innerHTML = "",
                        ne.appendChild(a);
                        var t = e.getComputedStyle(s);
                        n = "1%" !== t.top,
                        i = "2px" === t.marginLeft,
                        r = "4px" === t.width,
                        s.style.marginRight = "50%",
                        o = "4px" === t.marginRight,
                        ne.removeChild(a),
                        s = null
                    }
                }
                var n, r, o, i, a = H.createElement("div"),
                s = H.createElement("div");
                s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", $.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), G.extend($, {
                    pixelPosition: function() {
                        return t(),
                        n
                    },
                    boxSizingReliable: function() {
                        return t(),
                        r
                    },
                    pixelMarginRight: function() {
                        return t(),
                        o
                    },
                    reliableMarginLeft: function() {
                        return t(),
                        i
                    }
                }))
            } ();
            var Xe = /^(none|table(?!-c[ea]).+)/,
            Ye = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ve = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            $e = ["Webkit", "Moz", "ms"],
            Ge = H.createElement("div").style;
            G.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = S(e, "opacity");
                                return "" === n ? "1": n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: "cssFloat"
                },
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, i, a, s = G.camelCase(t),
                        c = e.style;
                        if (t = G.cssProps[s] || (G.cssProps[s] = O(s) || s), a = G.cssHooks[t] || G.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o: c[t];
                        "string" == (i = typeof n) && (o = Te.exec(n)) && o[1] && (n = function(e, t, n, r) {
                            var o, i = 1,
                            a = 20,
                            s = r ?
                            function() {
                                return r.cur()
                            }: function() {
                                return G.css(e, t, "")
                            },
                            c = s(),
                            u = n && n[3] || (G.cssNumber[t] ? "": "px"),
                            l = (G.cssNumber[t] || "px" !== u && +c) && Te.exec(G.css(e, t));
                            if (l && l[3] !== u) {
                                u = u || l[3],
                                n = n || [],
                                l = +c || 1;
                                do {
                                    l /= i = i || ".5", G.style(e, t, l + u)
                                } while ( i !== ( i = s () / c) && 1 !== i && --a)
                            }
                            return n && (l = +l || +c || 0, o = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = l, r.end = o)),
                            o
                        } (e, t, o), i = "number"),
                        null != n && n == n && ("number" === i && (n += o && o[3] || (G.cssNumber[s] ? "": "px")), $.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (c[t] = n))
                    }
                },
                css: function(e, t, n, r) {
                    var o, i, a, s = G.camelCase(t);
                    return t = G.cssProps[s] || (G.cssProps[s] = O(s) || s),
                    (a = G.cssHooks[t] || G.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)),
                    void 0 === o && (o = S(e, t, r)),
                    "normal" === o && t in Ve && (o = Ve[t]),
                    "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
                }
            }),
            G.each(["height", "width"],
            function(e, t) {
                G.cssHooks[t] = {
                    get: function(e, n, r) {
                        if (n) return ! Xe.test(G.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? A(e, t, r) : je(e, Ye,
                        function() {
                            return A(e, t, r)
                        })
                    },
                    set: function(e, n, r) {
                        var o, i = r && We(e),
                        a = r && C(e, t, r, "border-box" === G.css(e, "boxSizing", !1, i), i);
                        return a && (o = Te.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = G.css(e, t)),
                        L(0, n, a)
                    }
                }
            }),
            G.cssHooks.marginLeft = j($.reliableMarginLeft,
            function(e, t) {
                if (t) return (parseFloat(S(e, "marginLeft")) || e.getBoundingClientRect().left - je(e, {
                    marginLeft: 0
                },
                function() {
                    return e.getBoundingClientRect().left
                })) + "px"
            }),
            G.each({
                margin: "",
                padding: "",
                border: "Width"
            },
            function(e, t) {
                G.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0,
                        o = {},
                        i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) o[e + ke[r] + t] = i[r] || i[r - 2] || i[0];
                        return o
                    }
                },
                Ue.test(e) || (G.cssHooks[e + t].set = L)
            }),
            G.fn.extend({
                css: function(e, t) {
                    return ge(this,
                    function(e, t, n) {
                        var r, o, i = {},
                        a = 0;
                        if (G.isArray(t)) {
                            for (r = We(e), o = t.length; a < o; a++) i[t[a]] = G.css(e, t[a], !1, r);
                            return i
                        }
                        return void 0 !== n ? G.style(e, t, n) : G.css(e, t)
                    },
                    e, t, arguments.length > 1)
                }
            }),
            function() {
                var e = H.createElement("input"),
                t = H.createElement("select").appendChild(H.createElement("option"));
                e.type = "checkbox",
                $.checkOn = "" !== e.value,
                $.optSelected = t.selected,
                (e = H.createElement("input")).value = "t",
                e.type = "radio",
                $.radioValue = "t" === e.value
            } ();
            var Je, Ke = G.expr.attrHandle;
            G.fn.extend({
                attr: function(e, t) {
                    return ge(this, G.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        G.removeAttr(this, e)
                    })
                }
            }),
            G.extend({
                attr: function(e, t, n) {
                    var r, o, i = e.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? G.prop(e, t, n) : (1 === i && G.isXMLDoc(e) || (o = G.attrHooks[t.toLowerCase()] || (G.expr.match.bool.test(t) ? Je: void 0)), void 0 !== n ? null === n ? void G.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r: (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r: null == (r = G.find.attr(e, t)) ? void 0 : r)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!$.radioValue && "radio" === t && G.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t),
                                n && (e.value = n),
                                t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r = 0,
                    o = t && t.match(ve);
                    if (o && 1 === e.nodeType) for (; n = o[r++];) e.removeAttribute(n)
                }
            }),
            Je = {
                set: function(e, t, n) {
                    return ! 1 === t ? G.removeAttr(e, n) : e.setAttribute(n, n),
                    n
                }
            },
            G.each(G.expr.match.bool.source.match(/\w+/g),
            function(e, t) {
                var n = Ke[t] || G.find.attr;
                Ke[t] = function(e, t, r) {
                    var o, i, a = t.toLowerCase();
                    return r || (i = Ke[a], Ke[a] = o, o = null != n(e, t, r) ? a: null, Ke[a] = i),
                    o
                }
            });
            var Ze = /^(?:input|select|textarea|button)$/i,
            Qe = /^(?:a|area)$/i;
            G.fn.extend({
                prop: function(e, t) {
                    return ge(this, G.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[G.propFix[e] || e]
                    })
                }
            }),
            G.extend({
                prop: function(e, t, n) {
                    var r, o, i = e.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i) return 1 === i && G.isXMLDoc(e) || (t = G.propFix[t] || t, o = G.propHooks[t]),
                    void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r: e[t] = n: o && "get" in o && null !== (r = o.get(e, t)) ? r: e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = G.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : Ze.test(e.nodeName) || Qe.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }),
            $.optSelected || (G.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex,
                    null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }),
            G.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
            function() {
                G.propFix[this.toLowerCase()] = this
            });
            var et = /[\t\r\n\f]/g;
            G.fn.extend({
                addClass: function(e) {
                    var t, n, r, o, i, a, s, c = 0;
                    if (G.isFunction(e)) return this.each(function(t) {
                        G(this).addClass(e.call(this, t, D(this)))
                    });
                    if ("string" == typeof e && e) for (t = e.match(ve) || []; n = this[c++];) if (o = D(n), r = 1 === n.nodeType && (" " + o + " ").replace(et, " ")) {
                        for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o !== (s = G.trim(r)) && n.setAttribute("class", s)
                    }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, o, i, a, s, c = 0;
                    if (G.isFunction(e)) return this.each(function(t) {
                        G(this).removeClass(e.call(this, t, D(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof e && e) for (t = e.match(ve) || []; n = this[c++];) if (o = D(n), r = 1 === n.nodeType && (" " + o + " ").replace(et, " ")) {
                        for (a = 0; i = t[a++];) for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
                        o !== (s = G.trim(r)) && n.setAttribute("class", s)
                    }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : G.isFunction(e) ? this.each(function(n) {
                        G(this).toggleClass(e.call(this, n, D(this), t), t)
                    }) : this.each(function() {
                        var t, r, o, i;
                        if ("string" === n) for (r = 0, o = G(this), i = e.match(ve) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else void 0 !== e && "boolean" !== n || ((t = D(this)) && be.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "": be.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + D(n) + " ").replace(et, " ").indexOf(t) > -1) return ! 0;
                    return ! 1
                }
            });
            var tt = /\r/g,
            nt = /[\x20\t\r\n\f]+/g;
            G.fn.extend({
                val: function(e) {
                    var t, n, r, o = this[0]; {
                        if (arguments.length) return r = G.isFunction(e),
                        this.each(function(n) {
                            var o;
                            1 === this.nodeType && (null == (o = r ? e.call(this, n, G(this).val()) : e) ? o = "": "number" == typeof o ? o += "": G.isArray(o) && (o = G.map(o,
                            function(e) {
                                return null == e ? "": e + ""
                            })), (t = G.valHooks[this.type] || G.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                        });
                        if (o) return (t = G.valHooks[o.type] || G.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n: "string" == typeof(n = o.value) ? n.replace(tt, "") : null == n ? "": n
                    }
                }
            }),
            G.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = G.find.attr(e, "value");
                            return null != t ? t: G.trim(G.text(e)).replace(nt, " ")
                        }
                    },
                    select: {
                        get: function(e) {
                            for (var t, n, r = e.options,
                            o = e.selectedIndex,
                            i = "select-one" === e.type,
                            a = i ? null: [], s = i ? o + 1 : r.length, c = o < 0 ? s: i ? o: 0; c < s; c++) if (((n = r[c]).selected || c === o) && !n.disabled && (!n.parentNode.disabled || !G.nodeName(n.parentNode, "optgroup"))) {
                                if (t = G(n).val(), i) return t;
                                a.push(t)
                            }
                            return a
                        },
                        set: function(e, t) {
                            for (var n, r, o = e.options,
                            i = G.makeArray(t), a = o.length; a--;)((r = o[a]).selected = G.inArray(G.valHooks.option.get(r), i) > -1) && (n = !0);
                            return n || (e.selectedIndex = -1),
                            i
                        }
                    }
                }
            }),
            G.each(["radio", "checkbox"],
            function() {
                G.valHooks[this] = {
                    set: function(e, t) {
                        if (G.isArray(t)) return e.checked = G.inArray(G(e).val(), t) > -1
                    }
                },
                $.checkOn || (G.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on": e.value
                })
            });
            var rt = /^(?:focusinfocus|focusoutblur)$/;
            G.extend(G.event, {
                trigger: function(t, n, r, o) {
                    var i, a, s, c, u, l, f, d = [r || H],
                    h = X.call(t, "type") ? t.type: t,
                    p = X.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (a = s = r = r || H, 3 !== r.nodeType && 8 !== r.nodeType && !rt.test(h + G.event.triggered) && (h.indexOf(".") > -1 && (h = (p = h.split(".")).shift(), p.sort()), u = h.indexOf(":") < 0 && "on" + h, t = t[G.expando] ? t: new G.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : G.makeArray(n, [t]), f = G.event.special[h] || {},
                    o || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                        if (!o && !f.noBubble && !G.isWindow(r)) {
                            for (c = f.delegateType || h, rt.test(c + h) || (a = a.parentNode); a; a = a.parentNode) d.push(a),
                            s = a;
                            s === (r.ownerDocument || H) && d.push(s.defaultView || s.parentWindow || e)
                        }
                        for (i = 0; (a = d[i++]) && !t.isPropagationStopped();) t.type = i > 1 ? c: f.bindType || h,
                        (l = (be.get(a, "events") || {})[t.type] && be.get(a, "handle")) && l.apply(a, n),
                        (l = u && a[u]) && l.apply && ye(a) && (t.result = l.apply(a, n), !1 === t.result && t.preventDefault());
                        return t.type = h,
                        o || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !ye(r) || u && G.isFunction(r[h]) && !G.isWindow(r) && ((s = r[u]) && (r[u] = null), G.event.triggered = h, r[h](), G.event.triggered = void 0, s && (r[u] = s)),
                        t.result
                    }
                },
                simulate: function(e, t, n) {
                    var r = G.extend(new G.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    G.event.trigger(r, null, t)
                }
            }),
            G.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        G.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return G.event.trigger(e, t, n, !0)
                }
            }),
            G.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
            function(e, t) {
                G.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }),
            G.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }),
            $.focusin = "onfocusin" in e,
            $.focusin || G.each({
                focus: "focusin",
                blur: "focusout"
            },
            function(e, t) {
                var n = function(e) {
                    G.event.simulate(t, e.target, G.event.fix(e))
                };
                G.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this,
                        o = be.access(r, t);
                        o || r.addEventListener(e, n, !0),
                        be.access(r, t, (o || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this,
                        o = be.access(r, t) - 1;
                        o ? be.access(r, t, o) : (r.removeEventListener(e, n, !0), be.remove(r, t))
                    }
                }
            });
            var ot = /\[\]$/,
            it = /\r?\n/g,
            at = /^(?:submit|button|image|reset|file)$/i,
            st = /^(?:input|select|textarea|keygen)/i;
            G.param = function(e, t) {
                var n, r = [],
                o = function(e, t) {
                    var n = G.isFunction(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "": n)
                };
                if (G.isArray(e) || e.jquery && !G.isPlainObject(e)) G.each(e,
                function() {
                    o(this.name, this.value)
                });
                else for (n in e) M(n, e[n], t, o);
                return r.join("&")
            },
            G.fn.extend({
                serialize: function() {
                    return G.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = G.prop(this, "elements");
                        return e ? G.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !G(this).is(":disabled") && st.test(this.nodeName) && !at.test(e) && (this.checked || !Le.test(e))
                    }).map(function(e, t) {
                        var n = G(this).val();
                        return null == n ? null: G.isArray(n) ? G.map(n,
                        function(e) {
                            return {
                                name: t.name,
                                value: e.replace(it, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(it, "\r\n")
                        }
                    }).get()
                }
            }),
            $.createHTMLDocument = function() {
                var e = H.implementation.createHTMLDocument("").body;
                return e.innerHTML = "<form></form><form></form>",
                2 === e.childNodes.length
            } (),
            G.parseHTML = function(e, t, n) {
                if ("string" != typeof e) return [];
                "boolean" == typeof t && (n = t, t = !1);
                var r, o, i;
                return t || ($.createHTMLDocument ? ((r = (t = H.implementation.createHTMLDocument("")).createElement("base")).href = H.location.href, t.head.appendChild(r)) : t = H),
                o = le.exec(e),
                i = !n && [],
                o ? [t.createElement(o[1])] : (o = p([e], t, i), i && i.length && G(i).remove(), G.merge([], o.childNodes))
            },
            G.offset = {
                setOffset: function(e, t, n) {
                    var r, o, i, a, s, c, u = G.css(e, "position"),
                    l = G(e),
                    f = {};
                    "static" === u && (e.style.position = "relative"),
                    s = l.offset(),
                    i = G.css(e, "top"),
                    c = G.css(e, "left"),
                    ("absolute" === u || "fixed" === u) && (i + c).indexOf("auto") > -1 ? (a = (r = l.position()).top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(c) || 0),
                    G.isFunction(t) && (t = t.call(e, n, G.extend({},
                    s))),
                    null != t.top && (f.top = t.top - s.top + a),
                    null != t.left && (f.left = t.left - s.left + o),
                    "using" in t ? t.using.call(e, f) : l.css(f)
                }
            },
            G.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this: this.each(function(t) {
                        G.offset.setOffset(this, e, t)
                    });
                    var t, n, r, o, i = this[0];
                    if (i) return i.getClientRects().length ? (r = i.getBoundingClientRect()).width || r.height ? (o = i.ownerDocument, n = P(o), t = o.documentElement, {
                        top: r.top + n.pageYOffset - t.clientTop,
                        left: r.left + n.pageXOffset - t.clientLeft
                    }) : r: {
                        top: 0,
                        left: 0
                    }
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n = this[0],
                        r = {
                            top: 0,
                            left: 0
                        };
                        return "fixed" === G.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), G.nodeName(e[0], "html") || (r = e.offset()), r = {
                            top: r.top + G.css(e[0], "borderTopWidth", !0),
                            left: r.left + G.css(e[0], "borderLeftWidth", !0)
                        }),
                        {
                            top: t.top - r.top - G.css(n, "marginTop", !0),
                            left: t.left - r.left - G.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === G.css(e, "position");) e = e.offsetParent;
                        return e || ne
                    })
                }
            }),
            G.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            },
            function(e, t) {
                var n = "pageYOffset" === t;
                G.fn[e] = function(r) {
                    return ge(this,
                    function(e, r, o) {
                        var i = P(e);
                        if (void 0 === o) return i ? i[t] : e[r];
                        i ? i.scrollTo(n ? i.pageXOffset: o, n ? o: i.pageYOffset) : e[r] = o
                    },
                    e, r, arguments.length)
                }
            }),
            G.each(["top", "left"],
            function(e, t) {
                G.cssHooks[t] = j($.pixelPosition,
                function(e, n) {
                    if (n) return n = S(e, t),
                    ze.test(n) ? G(e).position()[t] + "px": n
                })
            }),
            G.each({
                Height: "height",
                Width: "width"
            },
            function(e, t) {
                G.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                },
                function(n, r) {
                    G.fn[r] = function(o, i) {
                        var a = arguments.length && (n || "boolean" != typeof o),
                        s = n || (!0 === o || !0 === i ? "margin": "border");
                        return ge(this,
                        function(t, n, o) {
                            var i;
                            return G.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? G.css(t, n, s) : G.style(t, n, o, s)
                        },
                        t, a ? o: void 0, a)
                    }
                })
            }),
            G.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }),
            G.parseJSON = JSON.parse;
            var ct = [],
            ut = !1,
            lt = function(e) {
                ct.push(e)
            },
            ft = function(t) {
                e.setTimeout(function() {
                    t.call(H, G)
                })
            };
            G.fn.ready = function(e) {
                return lt(e),
                this
            },
            G.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? G.readyWait++:G.ready(!0)
                },
                ready: function(e) { (!0 === e ? --G.readyWait: G.isReady) || (G.isReady = !0, !0 !== e && --G.readyWait > 0 || (lt = function(e) {
                        if (ct.push(e), !ut) {
                            for (ut = !0; ct.length;) e = ct.shift(),
                            G.isFunction(e) && ft(e);
                            ut = !1
                        }
                    })())
                }
            }),
            G.ready.then = G.fn.ready,
            "complete" === H.readyState || "loading" !== H.readyState && !H.documentElement.doScroll ? e.setTimeout(G.ready) : (H.addEventListener("DOMContentLoaded", N), e.addEventListener("load", N));
            var dt = e.jQuery,
            ht = e.$;
            return G.noConflict = function(t) {
                return e.$ === G && (e.$ = ht),
                t && e.jQuery === G && (e.jQuery = dt),
                G
            },
            t || (e.jQuery = e.$ = G),
            G
        })
    }),
    cn = n(function(e, t) { !
        function(t, n) {
            e.exports = n()
        } (0,
        function() {
            function e() {
                if (! (this instanceof e)) return new e;
                this.size = 0,
                this.uid = 0,
                this.selectors = [],
                this.indexes = Object.create(this.indexes),
                this.activeIndexes = []
            }
            function t(e, t) {
                var n, r, o, i, a, s, c = (e = e.slice(0).concat(e.
            default)).length,
                u = t,
                f = [];
                do {
                    if (l.exec(""), (o = l.exec(u)) && (u = o[3], o[2] || !u)) for (n = 0; n < c; n++) if (s = e[n], a = s.selector(o[1])) {
                        for (r = f.length, i = !1; r--;) if (f[r].index === s && f[r].key === a) {
                            i = !0;
                            break
                        }
                        i || f.push({
                            index: s,
                            key: a
                        });
                        break
                    }
                } while ( o );
                return f
            }
            function n(e, t) {
                var n, r, o;
                for (n = 0, r = e.length; n < r; n++) if (o = e[n], t.isPrototypeOf(o)) return o
            }
            function r(e, t) {
                return e.id - t.id
            }
            var o = window.document.documentElement,
            i = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector;
            e.prototype.matchesSelector = function(e, t) {
                return i.call(e, t)
            },
            e.prototype.querySelectorAll = function(e, t) {
                return t.querySelectorAll(e)
            },
            e.prototype.indexes = [];
            var a = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            e.prototype.indexes.push({
                name: "ID",
                selector: function(e) {
                    var t;
                    if (t = e.match(a)) return t[0].slice(1)
                },
                element: function(e) {
                    if (e.id) return [e.id]
                }
            });
            var s = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            e.prototype.indexes.push({
                name: "CLASS",
                selector: function(e) {
                    var t;
                    if (t = e.match(s)) return t[0].slice(1)
                },
                element: function(e) {
                    var t = e.className;
                    if (t) {
                        if ("string" == typeof t) return t.split(/\s/);
                        if ("object" == typeof t && "baseVal" in t) return t.baseVal.split(/\s/)
                    }
                }
            });
            var c = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            e.prototype.indexes.push({
                name: "TAG",
                selector: function(e) {
                    var t;
                    if (t = e.match(c)) return t[0].toUpperCase()
                },
                element: function(e) {
                    return [e.nodeName.toUpperCase()]
                }
            }),
            e.prototype.indexes.
        default = {
                name: "UNIVERSAL",
                selector: function() {
                    return ! 0
                },
                element: function() {
                    return [!0]
                }
            };
            var u;
            u = "function" == typeof window.Map ? window.Map: function() {
                function e() {
                    this.map = {}
                }
                return e.prototype.get = function(e) {
                    return this.map[e + " "]
                },
                e.prototype.set = function(e, t) {
                    this.map[e + " "] = t
                },
                e
            } ();
            var l = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
            return e.prototype.logDefaultIndexUsed = function() {},
            e.prototype.add = function(e, r) {
                var o, i, a, s, c, l, f, d, h = this.activeIndexes,
                p = this.selectors;
                if ("string" == typeof e) {
                    for (o = {
                        id: this.uid++,
                        selector: e,
                        data: r
                    },
                    f = t(this.indexes, e), i = 0; i < f.length; i++) s = (d = f[i]).key,
                    (c = n(h, a = d.index)) || ((c = Object.create(a)).map = new u, h.push(c)),
                    a === this.indexes.
                default && this.logDefaultIndexUsed(o),
                    (l = c.map.get(s)) || (l = [], c.map.set(s, l)),
                    l.push(o);
                    this.size++,
                    p.push(e)
                }
            },
            e.prototype.remove = function(e, n) {
                if ("string" == typeof e) {
                    var r, o, i, a, s, c, u, l, f = this.activeIndexes,
                    d = {},
                    h = 1 === arguments.length;
                    for (r = t(this.indexes, e), i = 0; i < r.length; i++) for (o = r[i], a = f.length; a--;) if (c = f[a], o.index.isPrototypeOf(c)) {
                        if (u = c.map.get(o.key)) for (s = u.length; s--;)(l = u[s]).selector !== e || !h && l.data !== n || (u.splice(s, 1), d[l.id] = !0);
                        break
                    }
                    this.size -= Object.keys(d).length
                }
            },
            e.prototype.queryAll = function(e) {
                if (!this.selectors.length) return [];
                var t, n, o, i, a, s, c, u, l = {},
                f = [],
                d = this.querySelectorAll(this.selectors.join(", "), e);
                for (t = 0, o = d.length; t < o; t++) for (a = d[t], n = 0, i = (s = this.matches(a)).length; n < i; n++) l[(u = s[n]).id] ? c = l[u.id] : (c = {
                    id: u.id,
                    selector: u.selector,
                    data: u.data,
                    elements: []
                },
                l[u.id] = c, f.push(c)),
                c.elements.push(a);
                return f.sort(r)
            },
            e.prototype.matches = function(e) {
                if (!e) return [];
                var t, n, o, i, a, s, c, u, l, f, d, h = this.activeIndexes,
                p = {},
                m = [];
                for (t = 0, i = h.length; t < i; t++) if (c = h[t], u = c.element(e)) for (n = 0, a = u.length; n < a; n++) if (l = c.map.get(u[n])) for (o = 0, s = l.length; o < s; o++) ! p[d = (f = l[o]).id] && this.matchesSelector(e, f.selector) && (p[d] = !0, m.push(f));
                return m.sort(r)
            },
            e
        })
    }),
    un = (n(function(e, t) { !
        function(t, n) {
            var r = sn,
            o = cn;
            e.exports = n(r, o)
        } (0,
        function(e, t) {
            function n(e) {
                for (var t, n = function(e) {
                    var t = [],
                    n = e.target,
                    r = e.handleObj.selectorSet;
                    do {
                        if (1 !== n.nodeType) break;
                        var o = r.matches(n);
                        o.length && t.push({
                            elem: n,
                            handlers: o
                        })
                    } while ( n = n . parentNode );
                    return t
                } (e), r = 0; (t = n[r++]) && !e.isPropagationStopped();) {
                    e.currentTarget = t.elem;
                    for (var o, i = 0; (o = t.handlers[i++]) && !e.isImmediatePropagationStopped();) {
                        var a = o.data.apply(t.elem, arguments);
                        void 0 !== a && (e.result = a, !1 === a && (e.preventDefault(), e.stopPropagation()))
                    }
                }
            }
            var r = window.document,
            o = e.event.add,
            i = e.event.remove,
            a = {};
            if (!t) throw "SelectorSet undefined - https://github.com/josh/jquery-selector-set";
            e.event.add = function(i, s, c, u, l) {
                if (i !== r || s.match(/\./) || u || !l) o.call(this, i, s, c, u, l);
                else for (var f = s.match(/\S+/g), d = f.length; d--;) {
                    var h = f[d],
                    p = e.event.special[h] || {},
                    m = a[h = p.delegateType || h];
                    m || ((m = a[h] = {
                        handler: n,
                        selectorSet: new t
                    }).selectorSet.matchesSelector = e.find.matchesSelector, o.call(this, i, h, m)),
                    m.selectorSet.add(l, c),
                    e.expr.cacheLength++,
                    e.find.compile && e.find.compile(l)
                }
            },
            e.event.remove = function(t, n, o, s, c) {
                if (t === r && n && !n.match(/\./) && s) for (var u = n.match(/\S+/g), l = u.length; l--;) {
                    var f = u[l],
                    d = e.event.special[f] || {},
                    h = a[f = d.delegateType || f];
                    h && h.selectorSet.remove(s, o)
                }
                i.call(this, t, n, o, s, c)
            }
        })
    }), sn.noConflict(!0)),
    ln = Object.freeze({
    default:
        un
    }),
    fn = Object.freeze({
    default:
        l
    }),
    dn = Object.freeze({
        getMetadataByName: f
    }),
    hn = Object.freeze({
    default:
        d
    }),
    pn = 0,
    mn = (new Date).getTime(),
    vn = !1;
    window.addEventListener("pageshow",
    function() {
        vn = !1
    }),
    window.addEventListener("pagehide",
    function() {
        vn = !0
    });
    var gn = Object.freeze({
        reportEvent: h,
        reportPromiseRejectionEvent: p,
        reportError: m
    });
    window.addEventListener("error", h),
    window.addEventListener("unhandledrejection", p),
    "#b00m" === window.location.hash && setTimeout(function() {
        b00m()
    }),
    "undefined" == typeof Reflect && (window.Reflect = {
        construct: function(e, t, n) {
            void 0 === n && (n = e);
            var r = n.prototype || Object.prototype,
            o = Object.create(r);
            return Function.prototype.apply.call(e, o, t) || o
        }
    });
    var yn = n(function(e, t) { !
        function(e, n) {
            n(t, cn)
        } (0,
        function(e, t) {
            function n(e, t, n) {
                var r = e[t];
                return e[t] = function() {
                    return n.apply(e, arguments),
                    r.apply(e, arguments)
                },
                e
            }
            function r() {
                l.set(this, !0)
            }
            function o() {
                l.set(this, !0),
                f.set(this, !0)
            }
            function i() {
                return d.get(this) || null
            }
            function a(e, t) {
                h && Object.defineProperty(e, "currentTarget", {
                    configurable: !0,
                    enumerable: !0,
                    get: t || h.get
                })
            }
            function s(e) {
                var t = function(e, t, n) {
                    var r = [],
                    o = t;
                    do {
                        if (1 !== o.nodeType) break;
                        var i = e.matches(o);
                        if (i.length) {
                            var a = {
                                node: o,
                                observers: i
                            };
                            n ? r.unshift(a) : r.push(a)
                        }
                    } while ( o = o . parentElement );
                    return r
                } ((1 === e.eventPhase ? u: c)[e.type], e.target, 1 === e.eventPhase);
                if (t.length) {
                    n(e, "stopPropagation", r),
                    n(e, "stopImmediatePropagation", o),
                    a(e, i);
                    for (var s = 0,
                    h = t.length; s < h && !l.get(e); s++) {
                        var p = t[s];
                        d.set(e, p.node);
                        for (var m = 0,
                        v = p.observers.length; m < v && !f.get(e); m++) p.observers[m].data.call(p.node, e)
                    }
                    d.delete(e),
                    a(e)
                }
            }
            t = t && t.hasOwnProperty("default") ? t.
        default:
            t;
            var c = {},
            u = {},
            l = new WeakMap,
            f = new WeakMap,
            d = new WeakMap,
            h = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
            e.on = function(e, n, r) {
                var o = !!(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}).capture,
                i = o ? u: c,
                a = i[e];
                a || (a = new t, i[e] = a, document.addEventListener(e, s, o)),
                a.add(n, r)
            },
            e.off = function(e, t, n) {
                var r = !!(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}).capture,
                o = r ? u: c,
                i = o[e];
                i && (i.remove(t, n), i.size || (delete o[e], document.removeEventListener(e, s, r)))
            },
            e.fire = function(e, t, n) {
                return e.dispatchEvent(new CustomEvent(t, {
                    bubbles: !0,
                    cancelable: !0,
                    detail: n
                }))
            },
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        })
    }),
    bn = t(yn),
    wn = yn.on,
    _n = yn.off,
    En = yn.fire,
    xn = Object.freeze({
    default:
        bn,
        __moduleExports: yn,
        on: wn,
        off: _n,
        fire: En
    }),
    Tn = [],
    kn = 0,
    Sn = function() {
        var e = {
            _id: (new Date).getTime()
        };
        return _(e),
        e
    } ();
    window.addEventListener("popstate",
    function(e) {
        if (e.state && e.state._id) {
            e.state._id < b()._id ? kn--:kn++,
            _(e.state)
        }
    },
    !0),
    window.addEventListener("hashchange",
    function() {
        if (history.length > Tn.length) {
            var e = E({},
            x());
            history.replaceState(e, "", location.href),
            _(e)
        }
    },
    !0);
    var jn = Object.freeze({
        getState: b,
        pushState: T,
        replaceState: k,
        getBackURL: function() {
            var e = Tn[w() - 1];
            if (e) return e.url
        },
        getForwardURL: function() {
            var e = Tn[w() + 1];
            if (e) return e.url
        }
    }),
    On = Object.freeze({
        findFragmentTarget: S,
        findElementByFragmentName: j,
        decodeFragmentValue: O
    }),
    Ln = [],
    Cn = 0;
    L.clear = function() {
        Ln.length = Cn = 0
    };
    var An = window.location.href;
    window.addEventListener("popstate",
    function() {
        An = window.location.href
    }),
    window.addEventListener("hashchange",
    function(e) {
        var t = window.location.href;
        try {
            A(Ln, e.oldURL || An, t)
        } finally {
            An = t
        }
    });
    var Dn = null;
    document.addEventListener("pjax:start",
    function() {
        Dn = window.location.href
    }),
    document.addEventListener("pjax:end",
    function() {
        A(Ln, Dn, window.location.href)
    });
    var Mn = Object.freeze({
    default:
        L
    }),
    Pn = Object.freeze({
    default:
        D
    }),
    Nn = Object.freeze({
        closest: M,
        query: P,
        querySelectorAll: N
    }),
    Rn = Object.freeze({
    default:
        R
    }),
    Hn = Object.freeze({
    default:
        H
    }),
    In = ("function" == typeof Symbol && Symbol.iterator,
    function() {
        var e = "function" == typeof Symbol && Symbol.
        for && Symbol.
        for ("react.element") || 60103
    } (),
    function() {
        function e(e) {
            this.value = e
        }
        function t(t) {
            function n(o, i) {
                try {
                    var a = t[o](i),
                    s = a.value;
                    s instanceof e ? Promise.resolve(s.value).then(function(e) {
                        n("next", e)
                    },
                    function(e) {
                        n("throw", e)
                    }) : r(a.done ? "return": "normal", a.value)
                } catch(e) {
                    r("throw", e)
                }
            }
            function r(e, t) {
                switch (e) {
                case "return":
                    o.resolve({
                        value:
                        t,
                        done: !0
                    });
                    break;
                case "throw":
                    o.reject(t);
                    break;
                default:
                    o.resolve({
                        value:
                        t,
                        done: !1
                    })
                } (o = o.next) ? n(o.key, o.arg) : i = null
            }
            var o, i;
            this._invoke = function(e, t) {
                return new Promise(function(r, a) {
                    var s = {
                        key: e,
                        arg: t,
                        resolve: r,
                        reject: a,
                        next: null
                    };
                    i ? i = i.next = s: (o = i = s, n(e, t))
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
                function r(o, i) {
                    try {
                        var a = t[o](i),
                        s = a.value
                    } catch(e) {
                        return void n(e)
                    }
                    if (!a.done) return Promise.resolve(s).then(function(e) {
                        r("next", e)
                    },
                    function(e) {
                        r("throw", e)
                    });
                    e(s)
                }
                return r("next")
            })
        }
    }),
    Fn = function(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    },
    qn = function() {
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
    Bn = (Object.assign,
    function e(t, n, r) {
        null === t && (t = Function.prototype);
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (void 0 === o) {
            var i = Object.getPrototypeOf(t);
            return null === i ? void 0 : e(i, n, r)
        }
        if ("value" in o) return o.value;
        var a = o.get;
        if (void 0 !== a) return a.call(r)
    }),
    Un = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return ! t || "object" != typeof t && "function" != typeof t ? e: t
    },
    zn = ("undefined" == typeof global ? self: global,
    function() {
        return function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return function(e, t) {
                var n = [],
                r = !0,
                o = !1,
                i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); ! (r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch(e) {
                    o = !0,
                    i = e
                } finally {
                    try { ! r && s.
                        return && s.
                        return ()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            } (e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    } ()),
    Wn = function() {
        var e = In(regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if ("0s" !== getComputedStyle(t).transitionDuration) {
                        e.next = 2;
                        break
                    }
                    return e.abrupt("return");
                case 2:
                    return t.style.display = "block",
                    t.offsetHeight,
                    e.next = 6,
                    new Promise(function(e) {
                        return t.addEventListener("transitionend", e, {
                            once: !0
                        })
                    });
                case 6:
                    t.style.display = "";
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
    Xn = null;
    wn("click", "button[data-box-overlay-id]",
    function(e) {
        var t = l(e.currentTarget, HTMLButtonElement),
        n = t.getAttribute("data-box-overlay-id");
        Vt(n, "null.js:19");
        F(l(document.getElementById(n), HTMLElement), t)
    }),
    wn("click", ".js-box-overlay-container",
    function(e) {
        e.target.querySelector(".js-box-overlay-content") && q()
    }),
    wn("click", ".js-box-overlay-close",
    function() {
        q()
    }),
    L(function() {
        var e = S(document);
        if (e instanceof HTMLElement) {
            var t = I(e);
            t && F(e, t)
        }
    });
    var Yn = Object.freeze({
        activateOverlay: F,
        deactivateOverlay: q
    }),
    Vn = new WeakMap,
    $n = function() {
        var e = In(regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (! (n = Vn.get(t))) {
                        e.next = 3;
                        break
                    }
                    return e.abrupt("return", n);
                case 3:
                    return e.next = 5,
                    new Promise(function(e) {
                        return t.addEventListener("codeEditor:ready", e, {
                            once: !0
                        })
                    });
                case 5:
                    if (null != (n = Vn.get(t))) {
                        e.next = 8;
                        break
                    }
                    throw new Error("Editor instance was null when it shouldn't have been");
                case 8:
                    return e.abrupt("return", n);
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
    } (),
    Gn = Object.freeze({
        getCodeEditor: function(e) {
            return Vn.get(e)
        },
        setCodeEditor: function(e, t) {
            Vn.set(e, t)
        },
        getAsyncCodeEditor: $n
    });
    document.addEventListener("click",
    function(e) {
        var t = "function" == typeof e.target.closest ? e.target.closest("a[data-confirm], input[type=submit][data-confirm], input[type=checkbox][data-confirm], button[data-confirm]") : void 0;
        if (t) {
            var n = t.getAttribute("data-confirm");
            n && (t.hasAttribute("data-confirm-checked") && !t.checked || confirm(n) || (e.stopImmediatePropagation(), e.preventDefault()))
        }
    },
    !0);
    var Jn = Object.freeze({
    default:
        U
    }),
    Kn = "ontransitionend" in window;
    wn("click", ".js-details-target",
    function(e) {
        Y(this),
        e.preventDefault()
    }),
    L(function(e) {
        var t = e.target;
        if (t) for (var n = !1,
        r = t.parentElement; r;) r.classList.contains("Details-content--shown") && (n = !0),
        r.classList.contains("js-details-container") && (r.classList.toggle("open", !n), r.classList.toggle("Details--on", !n), n = !1),
        r = r.parentElement
    });
    var Zn = Object.freeze({
        toggleDetailsTarget: Y,
        isDetailsTargetExpanded: function(e) {
            var t = M(e, e.getAttribute("data-details-container") || ".js-details-container").classList;
            return t.contains("Details--on") || t.contains("open")
        }
    }),
    Qn = Object.freeze({
        offset: function(e) {
            var t = e.getBoundingClientRect();
            return {
                top: t.top + window.pageYOffset,
                left: t.left + window.pageXOffset
            }
        },
        overflowParent: V,
        overflowOffset: $,
        positionedOffset: G
    }),
    er = function() {
        var e = In(regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if ("0s" !== getComputedStyle(t).transitionDuration) {
                        e.next = 2;
                        break
                    }
                    return e.abrupt("return");
                case 2:
                    return t.style.display = "block",
                    t.offsetHeight,
                    e.next = 6,
                    new Promise(function(e) {
                        return t.addEventListener("transitionend", e, {
                            once: !0
                        })
                    });
                case 6:
                    t.style.display = "";
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
    tr = {
        overlay: !0
    },
    nr = Object.freeze({
    default:
        J,
        close: Q,
        addFaceboxEventListener: function(e, t) {
            if (0 !== un(e).length) return ee(t),
            un(e).bind("click.facebox",
            function(t) {
                t.preventDefault(),
                K();
                var n = void 0;
                e.hasAttribute("data-facebox-class") ? n = e.getAttribute("data-facebox-class") : (n = e.rel.match(/facebox\[?\.([-\w]+)\]?/)) && (n = n[1]),
                te(e.href, n)
            })
        },
        teardownOnClose: re
    }),
    rr = Object.freeze({
    default:
        ie
    }),
    or = document.createElement("input"),
    ir = {
        beacon: ae(window.navigator, "sendBeacon"),
        classlist: se(),
        classlistMultiArg: !!se() && (or.classList.add("a", "b"), or.classList.contains("b")),
        closest: ae(or, "closest"),
        customElements: ae(window.customElements, "define"),
        customEvent: function() {
            if (!ae(window, "CustomEvent")) return ! 1;
            try {
                return "supported" === new CustomEvent("test", {
                    detail: "supported"
                }).detail
            } catch(e) {
                return ! 1
            }
        } (),
        fetch: ae(window, "fetch"),
        highResolutionTime: ae(window.performance, "now"),
        matchesSelector: ae(or, "matches"),
        promises: ae(window, "Promise"),
        stringEndsWith: ae(String.prototype, "endsWith"),
        stringStartsWith: ae(String.prototype, "startsWith"),
        timezone: !!ie(),
        url: ae(window, "URL"),
        urlSearchParams: ae(window, "URLSearchParams"),
        userTimingEntries: ae(window.performance, "getEntries"),
        userTimingMark: ae(window.performance, "mark"),
        weakmap: ae(window, "WeakMap")
    },
    ar = Object.freeze({
    default:
        ir
    }),
    sr = Object.freeze({
        getDocumentHtmlSafeNonce: ce,
        verifyResponseHtmlSafeNonce: ue
    }),
    cr = Object.freeze({
        parseHTML: le
    }),
    ur = function() {
        var e = In(regeneratorRuntime.mark(function e(t, n, r) {
            var o, i;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return o = pe(n, r),
                    e.next = 3,
                    self.fetch(o);
                case 3:
                    return i = e.sent,
                    fe(i),
                    ue(ce(t), i),
                    e.t0 = le,
                    e.t1 = t,
                    e.next = 10,
                    i.text();
                case 10:
                    return e.t2 = e.sent,
                    e.abrupt("return", (0, e.t0)(e.t1, e.t2));
                case 12:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t, n, r) {
            return e.apply(this, arguments)
        }
    } (),
    lr = Object.freeze({
        fetch: me,
        fetchText: ve,
        fetchJSON: ge,
        fetchForm: function(e) {
            return me(e.action, {
                method: e.method,
                body: new FormData(e)
            })
        },
        fetchSafeDocumentFragment: ur,
        fetchPoll: function(e, t) {
            return new Promise(function(n, r) {
                function o(i) {
                    me(e, t).then(function(e) {
                        switch (e.status) {
                        case 200:
                            n(e);
                            break;
                        case 202:
                            setTimeout(function() {
                                return o(1.5 * i)
                            },
                            i);
                            break;
                        default:
                            var t = new Error(e.statusText || e.status);
                            t.response = e,
                            r(t)
                        }
                    },
                    r)
                }
                o(1e3)
            })
        }
    }),
    fr = n(function(e, t) { !
        function(t, n) {
            e.exports = n()
        } (0,
        function() {
            return "function" == typeof FormData && "entries" in FormData.prototype ?
            function(e) {
                return Array.from(new FormData(e).entries())
            }: function(e) {
                for (var t = [], n = e.elements, r = 0; r < n.length; r++) {
                    var o = n[r],
                    i = o.tagName.toUpperCase();
                    if ("SELECT" === i || "TEXTAREA" === i || "INPUT" === i) {
                        var a = o.type,
                        s = o.name;
                        if (s && !o.disabled && "submit" !== a && "reset" !== a && "button" !== a && ("radio" !== a && "checkbox" !== a || o.checked)) if ("SELECT" === i) for (var c = o.getElementsByTagName("option"), u = 0; u < c.length; u++) {
                            var l = c[u];
                            l.selected && t.push([s, l.value])
                        } else "file" === a ? (console.warn("form-data-entries could not serialize <input type=file>", o), t.push([s, ""])) : t.push([s, o.value])
                    }
                }
                return t
            }
        })
    }),
    dr = Object.freeze({
        submit: be,
        changeValue: function(e, t) {
            if ("boolean" == typeof t) {
                if (! (e instanceof HTMLInputElement)) throw new TypeError("only checkboxes can be set to boolean value");
                e.checked = t
            } else {
                if ("checkbox" === e.type) throw new TypeError("checkbox can't be set to string value");
                e.value = t
            }
            ye(e, "change", !1)
        },
        fillFormValues: function(e, t) {
            for (var n in t) {
                var r = t[n],
                o = e.elements.namedItem(n);
                o instanceof HTMLInputElement ? o.value = r: o instanceof HTMLTextAreaElement && (o.value = r)
            }
        },
        isFormField: we,
        serialize: _e
    }); !
    function() {
        function e(e) {
            b.set(e)
        }
        function t(e) {
            if (100 != e.get(Ut) && g(se(e, Lt)) % 1e4 >= 100 * ce(e, Ut)) throw "abort"
        }
        function n(e) {
            if (U(se(e, Dt))) throw "abort"
        }
        function r() {
            var e = q.location.protocol;
            if ("http:" != e && "https:" != e) throw "abort"
        }
        function o(t) {
            try {
                F.navigator.sendBeacon ? e(42) : F.XMLHttpRequest && "withCredentials" in new F.XMLHttpRequest && e(40)
            } catch(e) {}
            t.set(ft, _(t), !0),
            t.set(Se, ce(t, Se) + 1);
            var n = [];
            ie.map(function(e, r) {
                r.F && void 0 != (e = t.get(e)) && e != r.defaultValue && ("boolean" == typeof e && (e *= 1), n.push(r.F + "=" + C("" + e)))
            }),
            n.push("z=" + re()),
            t.set(xe, n.join("&"), !0)
        }
        function i(e) {
            var t = se(e, Xt) || $() + "/collect",
            n = se(e, ke);
            if (!n && e.get(Te) && (n = "beacon"), n) {
                var r = se(e, xe),
                o = (o = e.get(Ee)) || L;
                "image" == n ? J(t, r, o) : "xhr" == n && K(t, r, o) || "beacon" == n && Z(t, r, o) || G(t, r, o)
            } else G(t, se(e, xe), e.get(Ee));
            t = e.get(Dt),
            n = (t = ee(t)).hitcount,
            t.hitcount = n ? n + 1 : 1,
            t = e.get(Dt),
            delete ee(t).pending_experiments,
            e.set(Ee, L, !0)
        }
        function a(e) { (F.gaData = F.gaData || {}).expId && e.set(nt, (F.gaData = F.gaData || {}).expId),
            (F.gaData = F.gaData || {}).expVar && e.set(rt, (F.gaData = F.gaData || {}).expVar);
            var t, n = e.get(Dt);
            if (n = ee(n).pending_experiments) {
                var r = [];
                for (t in n) n.hasOwnProperty(t) && n[t] && r.push(encodeURIComponent(t) + "." + encodeURIComponent(n[t]));
                t = r.join("!")
            } else t = void 0;
            t && e.set(ot, t, !0)
        }
        function s() {
            if (F.navigator && "preview" == F.navigator.loadPurpose) throw "abort"
        }
        function c(e) {
            var t = F.gaDevIds;
            T(t) && 0 != t.length && e.set("&did", t.join(","), !0)
        }
        function u(e) {
            if (!e.get(Dt)) throw "abort"
        }
        function l(t) {
            var n = ce(t, ct);
            500 <= n && e(15);
            if ("transaction" != (r = se(t, _e)) && "item" != r) {
                var r = ce(t, lt),
                o = (new Date).getTime(),
                i = ce(t, ut);
                if (0 == i && t.set(ut, o), 0 < (i = Math.round(2 * (o - i) / 1e3)) && (r = Math.min(r + i, 20), t.set(ut, o)), 0 >= r) throw "abort";
                t.set(lt, --r)
            }
            t.set(ct, ++n)
        }
        function f(t, n, r, o) {
            n[t] = function() {
                try {
                    return o && e(o),
                    r.apply(this, arguments)
                } catch(e) {
                    throw Q("exc", t, e && e.name),
                    e
                }
            }
        }
        function d(e, t, n) {
            "none" == t && (t = "");
            var r = [],
            o = z(e);
            e = "__utma" == e ? 6 : 2;
            for (var i = 0; i < o.length; i++) {
                var a = ("" + o[i]).split(".");
                a.length >= e && r.push({
                    hash: a[0],
                    R: o[i],
                    O: a
                })
            }
            if (0 != r.length) return 1 == r.length ? r[0] : h(t, r) || h(n, r) || h(null, r) || r[0]
        }
        function h(e, t) {
            var n;
            null == e ? n = e = 1 : (n = g(e), e = g(S(e, ".") ? e.substring(1) : "." + e));
            for (var r = 0; r < t.length; r++) if (t[r].hash == n || t[r].hash == e) return t[r]
        }
        function p(e, t) {
            var n = new Date,
            r = F.navigator,
            o = r.plugins || [];
            for (e = [e, r.userAgent, n.getTimezoneOffset(), n.getYear(), n.getDate(), n.getHours(), n.getMinutes() + t], t = 0; t < o.length; ++t) e.push(o[t].description);
            return g(e.join("."))
        }
        function m(e, t) {
            if (t == q.location.hostname) return ! 1;
            for (var n = 0; n < e.length; n++) if (e[n] instanceof RegExp) {
                if (e[n].test(t)) return ! 0
            } else if (0 <= t.indexOf(e[n])) return ! 0;
            return ! 1
        }
        function v(e) {
            return 0 <= e.indexOf(".") || 0 <= e.indexOf(":")
        }
        function g(e) {
            var t, n, r = 1;
            if (e) for (r = 0, n = e.length - 1; 0 <= n; n--) t = e.charCodeAt(n),
            r = (r << 6 & 268435455) + t + (t << 14),
            t = 266338304 & r,
            r = 0 != t ? r ^ t >> 21 : r;
            return r
        }
        var y = function(e) {
            this.w = e || []
        };
        y.prototype.set = function(e) {
            this.w[e] = !0
        },
        y.prototype.encode = function() {
            for (var e = [], t = 0; t < this.w.length; t++) this.w[t] && (e[Math.floor(t / 6)] ^= 1 << t % 6);
            for (t = 0; t < e.length; t++) e[t] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(e[t] || 0);
            return e.join("") + "~"
        };
        var b = new y,
        w = function(e, t) {
            var n = new y(E(e));
            n.set(t),
            e.set(dt, n.w)
        },
        _ = function(e) {
            e = E(e),
            e = new y(e);
            for (var t = b.w.slice(), n = 0; n < e.w.length; n++) t[n] = t[n] || e.w[n];
            return new y(t).encode()
        },
        E = function(e) {
            return e = e.get(dt),
            T(e) || (e = []),
            e
        },
        x = function(e) {
            return "function" == typeof e
        },
        T = function(e) {
            return "[object Array]" == Object.prototype.toString.call(Object(e))
        },
        k = function(e) {
            return void 0 != e && -1 < (e.constructor + "").indexOf("String")
        },
        S = function(e, t) {
            return 0 == e.indexOf(t)
        },
        j = function(e) {
            return e ? e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
        },
        O = function(e) {
            var t = q.createElement("img");
            return t.width = 1,
            t.height = 1,
            t.src = e,
            t
        },
        L = function() {},
        C = function(t) {
            return encodeURIComponent instanceof Function ? encodeURIComponent(t) : (e(28), t)
        },
        A = function(t, n, r, o) {
            try {
                t.addEventListener ? t.addEventListener(n, r, !!o) : t.attachEvent && t.attachEvent("on" + n, r)
            } catch(t) {
                e(27)
            }
        },
        D = /^[\w\-:/. ? =&%!] + $ / ,
        M = function(e, t, n, r) {
            e && (n ? (r = "", t && D.test(t) && (r = ' id="' + t + '"'), D.test(e) && q.write("<script" + r + ' src="' + e + '"><\/script>')) : (n = q.createElement("script"), n.type = "text/javascript", n.async = !0, n.src = e, r && (n.onload = r), t && (n.id = t), (e = q.getElementsByTagName("script")[0]).parentNode.insertBefore(n, e)))
        },
        P = function() {
            return "https:" == q.location.protocol
        },
        N = function(e, t) {
            return (e = e.match("(?:&|#|\\?)" + C(t).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == e.length ? e[1] : ""
        },
        R = function() {
            var e = "" + q.location.hostname;
            return 0 == e.indexOf("www.") ? e.substring(4) : e
        },
        H = function(e, t) {
            if (1 == t.length && null != t[0] && "object" == typeof t[0]) return t[0];
            for (var n = {},
            r = Math.min(e.length + 1, t.length), o = 0; o < r; o++) {
                if ("object" == typeof t[o]) {
                    for (var i in t[o]) t[o].hasOwnProperty(i) && (n[i] = t[o][i]);
                    break
                }
                o < e.length && (n[e[o]] = t[o])
            }
            return n
        },
        I = function() {
            this.keys = [],
            this.values = {},
            this.m = {}
        };
        I.prototype.set = function(e, t, n) {
            this.keys.push(e),
            n ? this.m[":" + e] = t: this.values[":" + e] = t
        },
        I.prototype.get = function(e) {
            return this.m.hasOwnProperty(":" + e) ? this.m[":" + e] : this.values[":" + e]
        },
        I.prototype.map = function(e) {
            for (var t = 0; t < this.keys.length; t++) {
                var n = this.keys[t],
                r = this.get(n);
                r && e(n, r)
            }
        };
        var F = window,
        q = document,
        B = window,
        U = function(e) {
            var t = B._gaUserPrefs;
            if (t && t.ioo && t.ioo() || e && !0 === B["ga-disable-" + e]) return ! 0;
            try {
                var n = B.external;
                if (n && n._gaUserPrefs && "oo" == n._gaUserPrefs) return ! 0
            } catch(e) {}
            return ! 1
        },
        z = function(e) {
            var t = [],
            n = q.cookie.split(";");
            e = new RegExp("^\\s*" + e + "=\\s*(.*?)\\s*$");
            for (var r = 0; r < n.length; r++) {
                var o = n[r].match(e);
                o && t.push(o[1])
            }
            return t
        },
        W = function(t, n, r, o, i, a) {
            if (! (i = !U(i) && !(V.test(q.location.hostname) || "/" == r && Y.test(o)))) return ! 1;
            if (n && 1200 < n.length && (n = n.substring(0, 1200), e(24)), r = t + "=" + n + "; path=" + r + "; ", a && (r += "expires=" + new Date((new Date).getTime() + a).toGMTString() + "; "), o && "none" != o && (r += "domain=" + o + ";"), o = q.cookie, q.cookie = r, !(o = o != q.cookie)) e: {
                for (t = z(t), o = 0; o < t.length; o++) if (n == t[o]) {
                    o = !0;
                    break e
                }
                o = !1
            }
            return o
        },
        X = function(e) {
            return C(e).replace(/\(/g, "%28").replace(/\)/g, "%29")
        },
        Y = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        V = /(^|\.)doubleclick\.net$/i,
        $ = function() {
            return (ge || P() ? "https:": "http:") + "//www.google-analytics.com"
        },
        G = function(e, t, n) {
            if (n = n || L, 2036 >= t.length) J(e, t, n);
            else {
                if (! (8192 >= t.length)) throw Q("len", t.length),
                new
                function(e) {
                    this.name = "len",
                    this.message = e + "-8192"
                } (t.length);
                Z(e, t, n) || K(e, t, n) || J(e, t, n)
            }
        },
        J = function(e, t, n) {
            var r = O(e + "?" + t);
            r.onload = r.onerror = function() {
                r.onload = null,
                r.onerror = null,
                n()
            }
        },
        K = function(e, t, n) {
            var r = F.XMLHttpRequest;
            if (!r) return ! 1;
            var o = new r;
            return "withCredentials" in o && (o.open("POST", e, !0), o.withCredentials = !0, o.setRequestHeader("Content-Type", "text/plain"), o.onreadystatechange = function() {
                4 == o.readyState && (n(), o = null)
            },
            o.send(t), !0)
        },
        Z = function(e, t, n) {
            return !! F.navigator.sendBeacon && ( !! F.navigator.sendBeacon(e, t) && (n(), !0))
        },
        Q = function(e, t, n) {
            1 <= 100 * Math.random() || U("?") || (e = ["t=error", "_e=" + e, "_v=j48", "sr=1"], t && e.push("_f=" + t), n && e.push("_m=" + C(n.substring(0, 100))), e.push("aip=1"), e.push("z=" + ne()), J($() + "/collect", e.join("&"), L))
        },
        ee = function(e) {
            var t = F.gaData = F.gaData || {};
            return t[e] = t[e] || {}
        },
        te = function() {
            this.M = []
        };
        te.prototype.add = function(e) {
            this.M.push(e)
        },
        te.prototype.D = function(e) {
            try {
                for (var t = 0; t < this.M.length; t++) {
                    var n = e.get(this.M[t]);
                    n && x(n) && n.call(F, e)
                }
            } catch(e) {} (t = e.get(Ee)) != L && x(t) && (e.set(Ee, L, !0), setTimeout(t, 10))
        };
        var ne = function() {
            return Math.round(2147483647 * Math.random())
        },
        re = function() {
            try {
                var e = new Uint32Array(1);
                return F.crypto.getRandomValues(e),
                2147483647 & e[0]
            } catch(e) {
                return ne()
            }
        },
        oe = function() {
            this.data = new I
        },
        ie = new I,
        ae = [];
        oe.prototype.get = function(e) {
            var t = fe(e),
            n = this.data.get(e);
            return t && void 0 == n && (n = x(t.defaultValue) ? t.defaultValue() : t.defaultValue),
            t && t.Z ? t.Z(this, e, n) : n
        };
        var se = function(e, t) {
            return void 0 == (e = e.get(t)) ? "": "" + e
        },
        ce = function(e, t) {
            return void 0 == (e = e.get(t)) || "" === e ? 0 : 1 * e
        };
        oe.prototype.set = function(e, t, n) {
            if (e) if ("object" == typeof e) for (var r in e) e.hasOwnProperty(r) && ue(this, r, e[r], n);
            else ue(this, e, t, n)
        };
        var ue = function(e, t, n, r) {
            if (void 0 != n) switch (t) {
            case Dt:
                Sn.test(n)
            }
            var o = fe(t);
            o && o.o ? o.o(e, t, n, r) : e.data.set(t, n, r)
        },
        le = function(e, t, n, r, o) {
            this.name = e,
            this.F = t,
            this.Z = r,
            this.o = o,
            this.defaultValue = n
        },
        fe = function(e) {
            var t = ie.get(e);
            if (!t) for (var n = 0; n < ae.length; n++) {
                var r = ae[n],
                o = r[0].exec(e);
                if (o) {
                    t = r[1](o),
                    ie.set(t.name, t);
                    break
                }
            }
            return t
        },
        de = function(e, t, n, r, o) {
            return e = new le(e, t, n, r, o),
            ie.set(e.name, e),
            e.name
        },
        he = function(e, t) {
            ae.push([new RegExp("^" + e + "$"), t])
        },
        pe = function(e, t, n) {
            return de(e, t, n, void 0, me)
        },
        me = function() {},
        ve = k(window.GoogleAnalyticsObject) && j(window.GoogleAnalyticsObject) || "ga",
        ge = !1,
        ye = pe("apiVersion", "v"),
        be = pe("clientVersion", "_v");
        de("anonymizeIp", "aip");
        var we = de("adSenseId", "a"),
        _e = de("hitType", "t"),
        Ee = de("hitCallback"),
        xe = de("hitPayload");
        de("nonInteraction", "ni"),
        de("currencyCode", "cu"),
        de("dataSource", "ds");
        var Te = de("useBeacon", void 0, !1),
        ke = de("transport");
        de("sessionControl", "sc", ""),
        de("sessionGroup", "sg"),
        de("queueTime", "qt");
        var Se = de("_s", "_s");
        de("screenName", "cd");
        var je = de("location", "dl", ""),
        Oe = de("referrer", "dr"),
        Le = de("page", "dp", "");
        de("hostname", "dh");
        var Ce = de("language", "ul"),
        Ae = de("encoding", "de");
        de("title", "dt",
        function() {
            return q.title || void 0
        }),
        he("contentGroup([0-9]+)",
        function(e) {
            return new le(e[0], "cg" + e[1])
        });
        var De = de("screenColors", "sd"),
        Me = de("screenResolution", "sr"),
        Pe = de("viewportSize", "vp"),
        Ne = de("javaEnabled", "je"),
        Re = de("flashVersion", "fl");
        de("campaignId", "ci"),
        de("campaignName", "cn"),
        de("campaignSource", "cs"),
        de("campaignMedium", "cm"),
        de("campaignKeyword", "ck"),
        de("campaignContent", "cc");
        var He = de("eventCategory", "ec"),
        Ie = de("eventAction", "ea"),
        Fe = de("eventLabel", "el"),
        qe = de("eventValue", "ev"),
        Be = de("socialNetwork", "sn"),
        Ue = de("socialAction", "sa"),
        ze = de("socialTarget", "st"),
        We = de("l1", "plt"),
        Xe = de("l2", "pdt"),
        Ye = de("l3", "dns"),
        Ve = de("l4", "rrt"),
        $e = de("l5", "srt"),
        Ge = de("l6", "tcp"),
        Je = de("l7", "dit"),
        Ke = de("l8", "clt"),
        Ze = de("timingCategory", "utc"),
        Qe = de("timingVar", "utv"),
        et = de("timingLabel", "utl"),
        tt = de("timingValue", "utt");
        de("appName", "an"),
        de("appVersion", "av", ""),
        de("appId", "aid", ""),
        de("appInstallerId", "aiid", ""),
        de("exDescription", "exd"),
        de("exFatal", "exf");
        var nt = de("expId", "xid"),
        rt = de("expVar", "xvar"),
        ot = de("exp", "exp"),
        it = de("_utma", "_utma"),
        at = de("_utmz", "_utmz"),
        st = de("_utmht", "_utmht"),
        ct = de("_hc", void 0, 0),
        ut = de("_ti", void 0, 0),
        lt = de("_to", void 0, 20);
        he("dimension([0-9]+)",
        function(e) {
            return new le(e[0], "cd" + e[1])
        }),
        he("metric([0-9]+)",
        function(e) {
            return new le(e[0], "cm" + e[1])
        }),
        de("linkerParam", void 0, void 0,
        function(e) {
            var t = p(e = e.get(Lt), 0);
            return "_ga=1." + C(t + "." + e)
        },
        me);
        var ft = de("usage", "_u"),
        dt = de("_um");
        de("forceSSL", void 0, void 0,
        function() {
            return ge
        },
        function(t, n, r) {
            e(34),
            ge = !!r
        });
        var ht = de("_j1", "jid");
        he("\\&(.*)",
        function(e) {
            var t = new le(e[0], e[1]),
            n = function(e) {
                var t;
                return ie.map(function(n, r) {
                    r.F == e && (t = r)
                }),
                t && t.name
            } (e[0].substring(1));
            return n && (t.Z = function(e) {
                return e.get(n)
            },
            t.o = function(e, t, r, o) {
                e.set(n, r, o)
            },
            t.F = void 0),
            t
        });
        var pt = pe("_oot"),
        mt = de("previewTask"),
        vt = de("checkProtocolTask"),
        gt = de("validationTask"),
        yt = de("checkStorageTask"),
        bt = de("historyImportTask"),
        wt = de("samplerTask"),
        _t = de("_rlt"),
        Et = de("buildHitTask"),
        xt = de("sendHitTask"),
        Tt = de("ceTask"),
        kt = de("devIdTask"),
        St = de("timingTask"),
        jt = de("displayFeaturesTask"),
        Ot = pe("name"),
        Lt = pe("clientId", "cid"),
        Ct = pe("clientIdTime"),
        At = de("userId", "uid"),
        Dt = pe("trackingId", "tid"),
        Mt = pe("cookieName", void 0, "_ga"),
        Pt = pe("cookieDomain"),
        Nt = pe("cookiePath", void 0, "/"),
        Rt = pe("cookieExpires", void 0, 63072e3),
        Ht = pe("legacyCookieDomain"),
        It = pe("legacyHistoryImport", void 0, !0),
        Ft = pe("storage", void 0, "cookie"),
        qt = pe("allowLinker", void 0, !1),
        Bt = pe("allowAnchor", void 0, !0),
        Ut = pe("sampleRate", "sf", 100),
        zt = pe("siteSpeedSampleRate", void 0, 1),
        Wt = pe("alwaysSendReferrer", void 0, !1),
        Xt = de("transportUrl"),
        Yt = de("_r", "_r"),
        Vt = function(e, t, n) {
            this.V = e,
            this.fa = t,
            this.$ = !1,
            this.oa = n,
            this.ea = 1
        },
        $t = function(e, t) {
            var n;
            if (e.fa && e.$) return 0;
            if (e.$ = !0, t) {
                if (e.oa && ce(t, e.oa)) return ce(t, e.oa);
                if (0 == t.get(zt)) return 0
            }
            return 0 == e.V ? 0 : (void 0 === n && (n = re()), 0 == n % e.V ? Math.floor(n / e.V) % e.ea + 1 : 0)
        },
        Gt = function(e) {
            var t = {};
            if (Jt(t) || Kt(t)) {
                var n = t[We];
                void 0 == n || 1 / 0 == n || isNaN(n) || (0 < n ? (Zt(t, Ye), Zt(t, Ge), Zt(t, $e), Zt(t, Xe), Zt(t, Ve), Zt(t, Je), Zt(t, Ke), e(t)) : A(F, "load",
                function() {
                    Gt(e)
                },
                !1))
            }
        },
        Jt = function(e) {
            var t = F.performance || F.webkitPerformance;
            if (! (t = t && t.timing)) return ! 1;
            var n = t.navigationStart;
            return 0 != n && (e[We] = t.loadEventStart - n, e[Ye] = t.domainLookupEnd - t.domainLookupStart, e[Ge] = t.connectEnd - t.connectStart, e[$e] = t.responseStart - t.requestStart, e[Xe] = t.responseEnd - t.responseStart, e[Ve] = t.fetchStart - n, e[Je] = t.domInteractive - n, e[Ke] = t.domContentLoadedEventStart - n, !0)
        },
        Kt = function(e) {
            if (F.top != F) return ! 1;
            var t = F.external,
            n = t && t.onloadT;
            return t && !t.isValidLoadTime && (n = void 0),
            2147483648 < n && (n = void 0),
            0 < n && t.setPageReadyTime(),
            void 0 != n && (e[We] = n, !0)
        },
        Zt = function(e, t) {
            var n = e[t]; (isNaN(n) || 1 / 0 == n || 0 > n) && (e[t] = void 0)
        },
        Qt = !1,
        en = function(t) {
            if ("cookie" == se(t, Ft)) {
                var n = se(t, Mt),
                r = rn(t),
                o = sn(se(t, Nt)),
                i = an(se(t, Pt)),
                a = 1e3 * ce(t, Rt),
                s = se(t, Dt);
                if ("auto" != i) W(n, r, o, i, s, a) && (Qt = !0);
                else {
                    e(32);
                    var c;
                    if (r = [], 4 != (i = R().split(".")).length || (c = i[i.length - 1], parseInt(c, 10) != c)) {
                        for (c = i.length - 2; 0 <= c; c--) r.push(i.slice(c).join("."));
                        r.push("none"),
                        c = r
                    } else c = ["none"];
                    for (var u = 0; u < c.length; u++) if (i = c[u], t.data.set(Pt, i), r = rn(t), W(n, r, o, i, s, a)) return void(Qt = !0);
                    t.data.set(Pt, "auto")
                }
            }
        },
        tn = function(e) {
            if ("cookie" == se(e, Ft) && !Qt && (en(e), !Qt)) throw "abort"
        },
        nn = function(t) {
            if (t.get(It)) {
                var n = se(t, Pt),
                r = se(t, Ht) || R(),
                o = d("__utma", r, n);
                o && (e(19), t.set(st, (new Date).getTime(), !0), t.set(it, o.R), (n = d("__utmz", r, n)) && o.hash == n.hash && t.set(at, n.R))
            }
        },
        rn = function(e) {
            var t = X(se(e, Lt)),
            n = an(se(e, Pt)).split(".").length;
            return 1 < (e = cn(se(e, Nt))) && (n += "-" + e),
            ["GA1", n, t].join(".")
        },
        on = function(e, t, n) {
            for (var r, o = [], i = [], a = 0; a < e.length; a++) {
                var s = e[a];
                s.H[n] == t ? o.push(s) : void 0 == r || s.H[n] < r ? (i = [s], r = s.H[n]) : s.H[n] == r && i.push(s)
            }
            return 0 < o.length ? o: i
        },
        an = function(e) {
            return 0 == e.indexOf(".") ? e.substr(1) : e
        },
        sn = function(e) {
            return e ? (1 < e.length && e.lastIndexOf("/") == e.length - 1 && (e = e.substr(0, e.length - 1)), 0 != e.indexOf("/") && (e = "/" + e), e) : "/"
        },
        cn = function(e) {
            return "/" == (e = sn(e)) ? 1 : e.split("/").length
        },
        un = new RegExp(/^https?:\/\/([^\/:]+)/),
        ln = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,
        fn = function(t) {
            e(48),
            this.target = t,
            this.T = !1
        };
        fn.prototype.ca = function(e, t) {
            if (e.tagName) {
                if ("a" == e.tagName.toLowerCase()) return void(e.href && (e.href = dn(this, e.href, t)));
                if ("form" == e.tagName.toLowerCase()) return hn(this, e)
            }
            if ("string" == typeof e) return dn(this, e, t)
        };
        var dn = function(e, t, n) { (o = ln.exec(t)) && 3 <= o.length && (t = o[1] + (o[3] ? o[2] + o[3] : "")),
            e = e.target.get("linkerParam");
            var r = t.indexOf("?"),
            o = t.indexOf("#");
            return n ? t += ( - 1 == o ? "#": "&") + e: (n = -1 == r ? "?": "&", t = -1 == o ? t + (n + e) : t.substring(0, o) + n + e + t.substring(o)),
            t = t.replace(/&+_ga=/, "&_ga=")
        },
        hn = function(e, t) {
            if (t && t.action) {
                var n = e.target.get("linkerParam").split("=")[1];
                if ("get" == t.method.toLowerCase()) {
                    e = t.childNodes || [];
                    for (var r = 0; r < e.length; r++) if ("_ga" == e[r].name) return void e[r].setAttribute("value", n); (e = q.createElement("input")).setAttribute("type", "hidden"),
                    e.setAttribute("name", "_ga"),
                    e.setAttribute("value", n),
                    t.appendChild(e)
                } else "post" == t.method.toLowerCase() && (t.action = dn(e, t.action))
            }
        };
        fn.prototype.S = function(t, n, r) {
            function o(r) {
                try {
                    var o;
                    e: {
                        var a = (r = r || F.event).target || r.srcElement;
                        for (r = 100; a && 0 < r;) {
                            if (a.href && a.nodeName.match(/^a(?:rea)?$/i)) {
                                o = a;
                                break e
                            }
                            a = a.parentNode,
                            r--
                        }
                        o = {}
                    } ("http:" == o.protocol || "https:" == o.protocol) && m(t, o.hostname || "") && o.href && (o.href = dn(i, o.href, n))
                } catch(t) {
                    e(26)
                }
            }
            var i = this;
            this.T || (this.T = !0, A(q, "mousedown", o, !1), A(q, "keyup", o, !1)),
            r && A(q, "submit",
            function(e) {
                if (e = e || F.event, (e = e.target || e.srcElement) && e.action) {
                    var n = e.action.match(un);
                    n && m(t, n[1]) && hn(i, e)
                }
            })
        };
        var pn, mn = /^(GTM|OPT)-[A-Z0-9]+$/,
        vn = /;_gaexp=[^;]*/g,
        gn = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,
        yn = function(t, n, r) {
            this.U = ht,
            this.aa = n,
            (n = r) || (n = (n = se(t, Ot)) && "t0" != n ? En.test(n) ? "_gat_" + X(se(t, Dt)) : "_gat_" + X(n) : "_gat"),
            this.Y = n,
            $t(new Vt(10), t) && (e(30), this.pa = !0)
        },
        bn = function(e, t) {
            t.get(e.U) || ("1" == z(e.Y)[0] ? t.set(e.U, "", !0) : t.set(e.U, "" + ne(), !0))
        },
        wn = function(e, t) {
            if (t.get(e.U)) {
                var n = 6e5;
                e.pa && (n /= 10),
                W(e.Y, "1", t.get(Nt), t.get(Pt), t.get(Dt), n)
            }
        },
        _n = function(e, t) {
            if (t.get(e.U)) {
                var n = new I,
                r = function(e) {
                    fe(e).F && n.set(fe(e).F, t.get(e))
                };
                r(ye),
                r(be),
                r(Dt),
                r(Lt),
                r(At),
                r(e.U),
                n.set(fe(ft).F, _(t));
                var o = e.aa;
                n.map(function(e, t) {
                    o += C(e) + "=",
                    o += C("" + t) + "&"
                }),
                o += "z=" + ne(),
                O(o),
                t.set(e.U, "", !0)
            }
        },
        En = /^gtm\d+$/,
        xn = function(e, t) {
            if (! (e = e.b).get("dcLoaded")) {
                w(e, 29);
                var n; (t = t || {})[Mt] && (n = X(t[Mt])),
                function(e, t) {
                    var n = t.get(Et);
                    t.set(Et,
                    function(t) {
                        bn(e, t);
                        var r = n(t);
                        return wn(e, t),
                        r
                    });
                    var r = t.get(xt);
                    t.set(xt,
                    function(t) {
                        var n = r(t);
                        return _n(e, t),
                        n
                    })
                } (t = new yn(e, "https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&", n), e),
                e.set("dcLoaded", !0)
            }
        },
        Tn = function(e) {
            if (!e.get("dcLoaded") && "cookie" == e.get(Ft)) {
                w(e, 51);
                var t = new yn(e);
                bn(t, e),
                wn(t, e),
                e.get(t.U) && (e.set(Yt, 1, !0), e.set(Xt, $() + "/r/collect", !0))
            }
        },
        kn = function(e) {
            return e ? (1 * e).toFixed(3) : "0"
        },
        Sn = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/,
        jn = function(f) {
            function d(e, t) {
                m.b.data.set(e, t)
            }
            function h(e, t) {
                d(e, t),
                m.filters.add(e)
            }
            function p(t, n, r) {
                $t(new Vt(1e4, !0, n), m.b) && (t = z(t)) && 0 < t.length && e(r)
            }
            var m = this;
            this.b = new oe,
            this.filters = new te,
            d(Ot, f[Ot]),
            d(Dt, j(f[Dt])),
            d(Mt, f[Mt]),
            d(Pt, f[Pt] || R()),
            d(Nt, f[Nt]),
            d(Rt, f[Rt]),
            d(Ht, f[Ht]),
            d(It, f[It]),
            d(qt, f[qt]),
            d(Bt, f[Bt]),
            d(Ut, f[Ut]),
            d(zt, f[zt]),
            d(Wt, f[Wt]),
            d(Ft, f[Ft]),
            d(At, f[At]),
            d(Ct, f[Ct]),
            d(ye, 1),
            d(be, "j48"),
            h(pt, n),
            h(mt, s),
            h(vt, r),
            h(gt, u),
            h(yt, tn),
            h(bt, nn),
            h(wt, t),
            h(_t, l),
            h(Tt, a),
            h(kt, c),
            h(jt, Tn),
            h(Et, o),
            h(xt, i),
            h(St,
            function(e) {
                return function(t) {
                    if ("pageview" == t.get(_e) && !e.I) {
                        e.I = !0;
                        var n = function(e) {
                            var t = Math.min(ce(e, zt), 100);
                            return ! (g(se(e, Lt)) % 100 >= t)
                        } (t);
                        t = 0 < N(t.get(je), "gclid").length,
                        (n || t) && Gt(function(t) {
                            e.send(n ? "timing": "adtiming", t)
                        })
                    }
                }
            } (this)),
            On(this.b, f[Lt]),
            Ln(this.b),
            this.b.set(we,
            function() {
                var e = F.gaGlobal = F.gaGlobal || {};
                return e.hid = e.hid || ne()
            } ()),
            function(e, t, n) {
                if (!pn) {
                    var r;
                    r = q.location.hash;
                    var o = F.name,
                    i = /^#?gaso=([^&]*)/; (o = (r = (r = r && r.match(i) || o && o.match(i)) ? r[1] : z("GASO")[0] || "") && r.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) && (W("GASO", "" + r, n, t, e, 0), window._udo || (window._udo = t), window._utcp || (window._utcp = n), e = o[1], M("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (e ? "prefix=" + e + "&": "") + ne(), "_gasojs")),
                    pn = !0
                }
            } (this.b.get(Dt), this.b.get(Pt), this.b.get(Nt)),
            this.ra = new Vt(1e4, !0, "gaexp10"),
            p("_gid", "gacookie11", 41),
            p("_gaid", "gacookie12", 44)
        },
        On = function(t, n) {
            if ("cookie" == se(t, Ft)) {
                Qt = !1;
                var r;
                e: {
                    var o = z(se(t, Mt));
                    if (o && !(1 > o.length)) {
                        r = [];
                        for (var i = 0; i < o.length; i++) {
                            var a, s = (a = o[i].split(".")).shift(); ("GA1" == s || "1" == s) && 1 < a.length ? (1 == (s = a.shift().split("-")).length && (s[1] = "1"), s[0] *= 1, s[1] *= 1, a = {
                                H: s,
                                s: a.join(".")
                            }) : a = void 0,
                            a && r.push(a)
                        }
                        if (1 == r.length) {
                            e(13),
                            r = r[0].s;
                            break e
                        }
                        if (0 != r.length) {
                            if (e(14), o = an(se(t, Pt)).split(".").length, 1 == (r = on(r, o, 0)).length) {
                                r = r[0].s;
                                break e
                            }
                            o = cn(se(t, Nt)),
                            r = (r = on(r, o, 1))[0] && r[0].s;
                            break e
                        }
                        e(12)
                    }
                    r = void 0
                }
                r || (r = se(t, Pt), o = se(t, Ht) || R(), void 0 != (r = d("__utma", o, r)) ? (e(10), r = r.O[1] + "." + r.O[2]) : r = void 0),
                r && (t.data.set(Lt, r), Qt = !0)
            }
            if (r = t.get(Bt), (i = N(q.location[r ? "href": "search"], "_ga")) && (t.get(qt) ? -1 == (r = i.indexOf(".")) ? e(22) : (o = i.substring(r + 1), "1" != i.substring(0, r) ? e(22) : -1 == (r = o.indexOf(".")) ? e(22) : (i = o.substring(0, r), r = o.substring(r + 1), i != p(r, 0) && i != p(r, -1) && i != p(r, -2) ? e(23) : (e(11), t.data.set(Lt, r)))) : e(21)), n && (e(9), t.data.set(Lt, C(n))), !t.get(Lt)) if (n = (n = F.gaGlobal && F.gaGlobal.vid) && -1 != n.search(/^(?:utma\.)?\d+\.\d+$/) ? n: void 0) e(17),
            t.data.set(Lt, n);
            else {
                for (e(8), r = (n = F.navigator.userAgent + (q.cookie ? q.cookie: "") + (q.referrer ? q.referrer: "")).length, o = F.history.length; 0 < o;) n += o--^r++;
                t.data.set(Lt, [ne() ^ 2147483647 & g(n), Math.round((new Date).getTime() / 1e3)].join("."))
            }
            en(t)
        },
        Ln = function(t) {
            var n = F.navigator,
            r = F.screen,
            o = q.location;
            if (t.set(Oe,
            function(e) {
                var t = q.referrer;
                if (/^https?:\/\//i.test(t)) {
                    if (e) return t;
                    e = "//" + q.location.hostname;
                    var n = t.indexOf(e);
                    if (! (5 != n && 6 != n || "/" != (e = t.charAt(n + e.length)) && "?" != e && "" != e && ":" != e)) return;
                    return t
                }
            } (t.get(Wt))), o) {
                var i = o.pathname || "";
                "/" != i.charAt(0) && (e(31), i = "/" + i),
                t.set(je, o.protocol + "//" + o.hostname + i + o.search)
            }
            r && t.set(Me, r.width + "x" + r.height),
            r && t.set(De, r.colorDepth + "-bit");
            var r = q.documentElement,
            a = (i = q.body) && i.clientWidth && i.clientHeight,
            s = [];
            if (r && r.clientWidth && r.clientHeight && ("CSS1Compat" === q.compatMode || !a) ? s = [r.clientWidth, r.clientHeight] : a && (s = [i.clientWidth, i.clientHeight]), r = 0 >= s[0] || 0 >= s[1] ? "": s.join("x"), t.set(Pe, r), t.set(Re,
            function() {
                var e, t, n;
                if ((n = (n = F.navigator) ? n.plugins: null) && n.length) for (var r = 0; r < n.length && !t; r++) {
                    var o = n[r]; - 1 < o.name.indexOf("Shockwave Flash") && (t = o.description)
                }
                if (!t) try {
                    t = (e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")).GetVariable("$version")
                } catch(e) {}
                if (!t) try {
                    t = "WIN 6,0,21,0",
                    (e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6")).AllowScriptAccess = "always",
                    t = e.GetVariable("$version")
                } catch(e) {}
                if (!t) try {
                    t = (e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")
                } catch(e) {}
                return t && (e = t.match(/[\d]+/g)) && 3 <= e.length && (t = e[0] + "." + e[1] + " r" + e[2]),
                t || void 0
            } ()), t.set(Ae, q.characterSet || q.charset), t.set(Ne, n && "function" == typeof n.javaEnabled && n.javaEnabled() || !1), t.set(Ce, (n && (n.language || n.browserLanguage) || "").toLowerCase()), o && t.get(Bt) && (n = q.location.hash)) {
                for (n = n.split(/[?&#]+/), o = [], r = 0; r < n.length; ++r)(S(n[r], "utm_id") || S(n[r], "utm_campaign") || S(n[r], "utm_source") || S(n[r], "utm_medium") || S(n[r], "utm_term") || S(n[r], "utm_content") || S(n[r], "gclid") || S(n[r], "dclid") || S(n[r], "gclsrc")) && o.push(n[r]);
                0 < o.length && (n = "#" + o.join("&"), t.set(je, t.get(je) + n))
            }
        };
        jn.prototype.get = function(e) {
            return this.b.get(e)
        },
        jn.prototype.set = function(e, t) {
            this.b.set(e, t)
        };
        var Cn = {
            pageview: [Le],
            event: [He, Ie, Fe, qe],
            social: [Be, Ue, ze],
            timing: [Ze, Qe, tt, et]
        };
        jn.prototype.send = function(t) {
            if (! (1 > arguments.length)) {
                var n, r;
                "string" == typeof arguments[0] ? (n = arguments[0], r = [].slice.call(arguments, 1)) : (n = arguments[0] && arguments[0][_e], r = arguments),
                n && (r = H(Cn[n] || [], r), r[_e] = n, this.b.set(r, void 0, !0), this.filters.D(this.b), this.b.data.m = {},
                $t(this.ra, this.b) &&
                function(t) {
                    var n = F.performance;
                    if (n && n.getEntriesByName) {
                        e(35);
                        var r = "https://www.google-analytics.com/analytics.js?wpid=" + t;
                        M(r, void 0, void 0,
                        function() {
                            try {
                                var o = 1,
                                i = n.getEntriesByName("https://www.google-analytics.com/analytics.js");
                                i && 0 != i.length || (i = n.getEntriesByName("http://www.google-analytics.com/analytics.js"), o = 0);
                                var a = n.getEntriesByName(r);
                                if (i && 1 == i.length && a && 1 == a.length) {
                                    e(37);
                                    var s = i[0],
                                    c = a[0],
                                    u = {
                                        tid: t,
                                        ad: kn(s.duration),
                                        bd: kn(c.duration),
                                        ar: kn(s.responseEnd - s.requestStart),
                                        br: kn(c.responseEnd - c.requestStart),
                                        an: kn(s.domainLookupEnd - s.domainLookupStart),
                                        bn: kn(c.domainLookupEnd - c.domainLookupStart),
                                        ac: kn(s.connectEnd - s.connectStart),
                                        bc: kn(c.connectEnd - c.connectStart),
                                        as: o
                                    }; (o = []).push("_v=j48"),
                                    o.push("id=10");
                                    for (var l in u) u.hasOwnProperty(l) && o.push(l + "=" + C(u[l]));
                                    o.push("z=" + ne()),
                                    J("https://www.google-analytics.com/u/d", o.join("&"), L)
                                }
                            } catch(e) {}
                        })
                    }
                } (this.b.get(Dt)))
            }
        },
        jn.prototype.ma = function(e, t) {
            var n = this;
            Fn(e, n, t) || (Bn(e,
            function() {
                Fn(e, n, t)
            }), qn(String(n.get(Ot)), e, void 0, t, !0))
        };
        var An, Dn, Mn, Pn, Nn = function(e) {
            return "prerender" != q.visibilityState && (e(), !0)
        },
        Rn = function(t) {
            if (!Nn(t)) {
                e(16);
                var n = !1,
                r = function() {
                    if (!n && Nn(t)) {
                        n = !0;
                        var e = r,
                        o = q;
                        o.removeEventListener ? o.removeEventListener("visibilitychange", e, !1) : o.detachEvent && o.detachEvent("onvisibilitychange", e)
                    }
                };
                A(q, "visibilitychange", r)
            }
        },
        Hn = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,
        In = function(e) {
            if (x(e[0])) this.u = e[0];
            else {
                var t = Hn.exec(e[0]);
                if (null != t && 4 == t.length && (this.c = t[1] || "t0", this.K = t[2] || "", this.C = t[3], this.a = [].slice.call(e, 1), this.K || (this.A = "create" == this.C, this.i = "require" == this.C, this.g = "provide" == this.C, this.ba = "remove" == this.C), this.i && (3 <= this.a.length ? (this.X = this.a[1], this.W = this.a[2]) : this.a[1] && (k(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1]))), t = e[1], e = e[2], !this.C) throw "abort";
                if (this.i && (!k(t) || "" == t)) throw "abort";
                if (this.g && (!k(t) || "" == t || !x(e))) throw "abort";
                if (v(this.c) || v(this.K)) throw "abort";
                if (this.g && "t0" != this.c) throw "abort"
            }
        };
        An = new I,
        Mn = new I,
        Pn = new I,
        Dn = {
            ec: 45,
            ecommerce: 46,
            linkid: 47
        };
        var Fn = function(e, t, n) {
            t == Yn || t.get(Ot);
            var r = An.get(e);
            return !! x(r) && (t.plugins_ = t.plugins_ || new I, !!t.plugins_.get(e) || (t.plugins_.set(e, new r(t, n || {})), !0))
        },
        qn = function(t, n, r, o, i) {
            if (!x(An.get(n)) && !Mn.get(n)) {
                if (Dn.hasOwnProperty(n) && e(Dn[n]), mn.test(n)) {
                    if (e(52), !(t = Yn.j(t))) return ! 0;
                    o = {
                        id: n,
                        B: (r = o || {}).dataLayer || "dataLayer",
                        ia: !!t.get("anonymizeIp"),
                        na: i,
                        G: !1
                    },
                    t.get("&gtm") == n && (o.G = !0);
                    var a = String(t.get("name"));
                    "t0" != a && (o.target = a),
                    U(String(t.get("trackingId"))) || (o.ja = String(t.get(Lt)), o.ka = Number(t.get(Ct)), r = r.palindrome ? gn: vn, r = (r = q.cookie.replace(/^|(; +)/g, ";").match(r)) ? r.sort().join("").substring(1) : void 0, o.la = r, o.qa = N(t.b.get(je) || "", "gclid")),
                    t = o.B,
                    r = (new Date).getTime(),
                    F[t] = F[t] || [],
                    r = {
                        "gtm.start": r
                    },
                    i || (r.event = "gtm.js"),
                    F[t].push(r),
                    r = function(e) {
                        function t(e, t) {
                            t && (n += "&" + e + "=" + C(t))
                        }
                        var n = "https://www.google-analytics.com/gtm/js?id=" + C(e.id);
                        return "dataLayer" != e.B && t("l", e.B),
                        t("t", e.target),
                        t("cid", e.ja),
                        t("cidt", e.ka),
                        t("gac", e.la),
                        t("aip", e.ia),
                        e.na && t("m", "sync"),
                        t("cycle", e.G),
                        e.qa && t("gclid", e.qa),
                        n
                    } (o)
                } ! r && Dn.hasOwnProperty(n) ? (e(39), r = n + ".js") : e(43),
                r && (r && 0 <= r.indexOf("/") || (r = (ge || P() ? "https:": "http:") + "//www.google-analytics.com/plugins/ua/" + r), o = Wn(r), t = o.protocol, r = q.location.protocol, ("https:" == t || t == r || ("http:" != t ? 0 : "http:" == r)) && zn(o) && (M(o.url, void 0, i), Mn.set(n, !0)))
            }
        },
        Bn = function(e, t) {
            var n = Pn.get(e) || [];
            n.push(t),
            Pn.set(e, n)
        },
        Un = function(e, t) {
            An.set(e, t),
            t = Pn.get(e) || [];
            for (var n = 0; n < t.length; n++) t[n]();
            Pn.set(e, [])
        },
        zn = function(e) {
            var t = Wn(q.location.href);
            return !! S(e.url, "https://www.google-analytics.com/gtm/js?id=") || !(e.query || 0 <= e.url.indexOf("?") || 0 <= e.path.indexOf("://")) && (e.host == t.host && e.port == t.port || (t = "http:" == e.protocol ? 80 : 443, !("www.google-analytics.com" != e.host || (e.port || t) != t || !S(e.path, "/plugins/"))))
        },
        Wn = function(e) {
            function t(e) {
                var t = (e.hostname || "").split(":")[0].toLowerCase(),
                n = (e.protocol || "").toLowerCase(),
                n = 1 * e.port || ("http:" == n ? 80 : "https:" == n ? 443 : "");
                return e = e.pathname || "",
                S(e, "/") || (e = "/" + e),
                [t, "" + n, e]
            }
            var n = q.createElement("a");
            n.href = q.location.href;
            var r = (n.protocol || "").toLowerCase(),
            o = t(n),
            i = n.search || "",
            a = r + "//" + o[0] + (o[1] ? ":" + o[1] : "");
            return S(e, "//") ? e = r + e: S(e, "/") ? e = a + e: !e || S(e, "?") ? e = a + o[2] + (e || i) : 0 > e.split("/")[0].indexOf(":") && (e = a + o[2].substring(0, o[2].lastIndexOf("/")) + "/" + e),
            n.href = e,
            r = t(n),
            {
                protocol: (n.protocol || "").toLowerCase(),
                host: r[0],
                port: r[1],
                path: r[2],
                query: n.search || "",
                url: e || ""
            }
        },
        Xn = {
            ga: function() {
                Xn.f = []
            }
        };
        Xn.ga(),
        Xn.D = function(e) {
            var t = Xn.J.apply(Xn, arguments),
            t = Xn.f.concat(t);
            for (Xn.f = []; 0 < t.length && !Xn.v(t[0]) && (t.shift(), !(0 < Xn.f.length)););
            Xn.f = Xn.f.concat(t)
        },
        Xn.J = function(e) {
            for (var t = [], n = 0; n < arguments.length; n++) try {
                var r = new In(arguments[n]);
                r.g ? Un(r.a[0], r.a[1]) : (r.i && (r.ha = qn(r.c, r.a[0], r.X, r.W)), t.push(r))
            } catch(e) {}
            return t
        },
        Xn.v = function(e) {
            try {
                if (e.u) e.u.call(F, Yn.j("t0"));
                else {
                    var t = e.c == ve ? Yn: Yn.j(e.c);
                    if (e.A)"t0" != e.c || Yn.create.apply(Yn, e.a);
                    else if (e.ba) Yn.remove(e.c);
                    else if (t) if (e.i) {
                        if (e.ha && (e.ha = qn(e.c, e.a[0], e.X, e.W)), !Fn(e.a[0], t, e.W)) return ! 0
                    } else if (e.K) {
                        var n = e.C,
                        r = e.a,
                        o = t.plugins_.get(e.K);
                        o[n].apply(o, r)
                    } else t[e.C].apply(t, e.a)
                }
            } catch(e) {}
        };
        var Yn = function(t) {
            e(1),
            Xn.D.apply(Xn, [arguments])
        };
        Yn.h = {},
        Yn.P = [],
        Yn.L = 0,
        Yn.answer = 42;
        var Vn = [Dt, Pt, Ot];
        Yn.create = function(e) {
            var t = H(Vn, [].slice.call(arguments));
            t[Ot] || (t[Ot] = "t0");
            var n = "" + t[Ot];
            return Yn.h[n] ? Yn.h[n] : (t = new jn(t), Yn.h[n] = t, Yn.P.push(t), t)
        },
        Yn.remove = function(e) {
            for (var t = 0; t < Yn.P.length; t++) if (Yn.P[t].get(Ot) == e) {
                Yn.P.splice(t, 1),
                Yn.h[e] = null;
                break
            }
        },
        Yn.j = function(e) {
            return Yn.h[e]
        },
        Yn.getAll = function() {
            return Yn.P.slice(0)
        },
        Yn.N = function() {
            "ga" != ve && e(49);
            var t = F[ve];
            if (!t || 42 != t.answer) {
                Yn.L = t && t.l,
                Yn.loaded = !0;
                if (f("create", n = F[ve] = Yn, n.create), f("remove", n, n.remove), f("getByName", n, n.j, 5), f("getAll", n, n.getAll, 6), n = jn.prototype, f("get", n, n.get, 7), f("set", n, n.set, 4), f("send", n, n.send), f("requireSync", n, n.ma), n = oe.prototype, f("get", n, n.get), f("set", n, n.set), !P() && !ge) {
                    e: {
                        for (var n = q.getElementsByTagName("script"), r = 0; r < n.length && 100 > r; r++) {
                            var o = n[r].src;
                            if (o && 0 == o.indexOf("https://www.google-analytics.com/analytics")) {
                                e(33),
                                n = !0;
                                break e
                            }
                        }
                        n = !1
                    }
                    n && (ge = !0)
                }
                P() || ge || !$t(new Vt(1e4)) || (e(36), ge = !0),
                (F.gaplugins = F.gaplugins || {}).Linker = fn,
                n = fn.prototype,
                Un("linker", fn),
                f("decorate", n, n.ca, 20),
                f("autoLink", n, n.S, 25),
                Un("displayfeatures", xn),
                Un("adfeatures", xn),
                t = t && t.q,
                T(t) ? Xn.D.apply(Yn, t) : e(50)
            }
        },
        Yn.da = function() {
            for (var e = Yn.getAll(), t = 0; t < e.length; t++) e[t].get(Ot)
        };
        var $n = Yn.N,
        Gn = F[ve];
        Gn && Gn.r ? $n() : Rn($n),
        Rn(function() {
            Xn.D(["provide", "render", L])
        })
    } (window),
    function() {
        var e = window,
        t = "push",
        n = "length",
        r = "prototype",
        o = function(e) {
            if (e.get && e.set) {
                this.clear();
                var t = e.get("buildHitTask");
                e.set("buildHitTask", l(this, t)),
                e.set("_rlt", f(this, e.get("_rlt")))
            }
        },
        i = {
            action: "pa",
            promoAction: "promoa",
            id: "ti",
            affiliation: "ta",
            revenue: "tr",
            tax: "tt",
            shipping: "ts",
            coupon: "tcc",
            step: "cos",
            label: "col",
            option: "col",
            options: "col",
            list: "pal",
            listSource: "pls"
        },
        a = {
            id: "id",
            name: "nm",
            brand: "br",
            category: "ca",
            variant: "va",
            position: "ps",
            price: "pr",
            quantity: "qt",
            coupon: "cc",
            "dimension(\\d+)": "cd",
            "metric(\\d+)": "cm"
        },
        s = {
            id: "id",
            name: "nm",
            creative: "cr",
            position: "ps"
        },
        c = "detail checkout checkout_option click add remove purchase refund".split(" ");
        o[r].clear = function() {
            this.b = void 0,
            this.f = [],
            this.a = [],
            this.g = [],
            this.d = void 0
        },
        o[r].h = function(e, t) {
            var n = t || {};
            "promo_click" == e ? n.promoAction = "click": n.action = e,
            this.b = d(n)
        },
        o[r].j = function(e) { (e = d(e)) && this.f[t](e)
        },
        o[r].i = function(e) {
            var r = d(e);
            if (r) {
                var o, i = e.list || "";
                e = e.listSource || "";
                for (var a = 0; a < this.a[n]; a++) if (this.a[a].name == i) {
                    o = this.a[a];
                    break
                }
                o || (o = new
                function(e, t) {
                    this.name = e,
                    this.source = t,
                    this.e = []
                } (i, e), this.a[t](o)),
                o.e[t](r)
            }
        },
        o[r].c = function(e) { (e = d(e)) && this.g[t](e)
        };
        var u = function(e, t, o) {
            if ("[object Array]" == Object[r].toString.call(Object(e))) for (var i = 0; i < e[n]; i++) t.call(o, e[i])
        };
        o[r].data = function(e) {
            if (e && e.ecommerce) { (e = e.ecommerce).promoView && u(e.promoView.promotions, this.c, this),
                e.promoClick && (this.h("promo_click", e.promoClick.actionField), u(e.promoClick.promotions, this.c, this));
                for (var t = 0; t < c[n]; t++) {
                    var r = e[c[t]];
                    if (r) {
                        this.h(c[t], r.actionField),
                        u(r.products, this.j, this);
                        break
                    }
                }
                u(e.impressions, this.i, this),
                e.currencyCode && (this.d = e.currencyCode)
            }
        };
        var l = function(e, t) {
            return function(r) {
                var o, c, u;
                for (e.b && h(i, e.b, r, "&"), o = 0; o < e.f[n]; o++) c = "&pr" + (o + 1),
                h(a, e.f[o], r, c);
                for (o = 0; o < e.a[n]; o++) {
                    c = "&il" + (o + 1),
                    (u = e.a[o]).name && r.set(c + "nm", u.name, !0),
                    u.source && r.set(c + "ls", u.source, !0);
                    for (var l = 0; l < u.e[n]; l++) h(a, u.e[l], r, c + "pi" + (l + 1))
                }
                for (o = 0; o < e.g[n]; o++) c = "&promo" + (o + 1),
                h(s, e.g[o], r, c);
                return e.d && r.set("&cu", e.d, !0),
                e.clear(),
                t(r)
            }
        },
        f = function(e, t) {
            return function(n) {
                var r = e.b && e.b.action;
                if ("purchase" != r && "refund" != r) return t(n)
            }
        },
        d = function(e) {
            var t = 0,
            n = {};
            if (e && "object" == typeof e) for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r], t++);
            return t ? n: void 0
        },
        h = function(e, t, n, r) {
            for (var o in t) if (t.hasOwnProperty(o)) for (var i in e) if (e.hasOwnProperty(i)) {
                var a = o.match("^" + i + "$");
                a && n.set(r + e[i] + a.slice(1).join(""), t[o], !0)
            }
        }; !
        function() {
            e.gaplugins = e.gaplugins || {},
            e.gaplugins.EC = o,
            o[r].setAction = o[r].h,
            o[r].addProduct = o[r].j,
            o[r].addImpression = o[r].i,
            o[r].addPromo = o[r].c,
            o[r].clear = o[r].clear,
            o[r].data = o[r].data;
            var n = e.GoogleAnalyticsObject || "ga";
            e[n] = e[n] ||
            function() { (e[n].q = e[n].q || [])[t](arguments)
            },
            e[n]("provide", "ec", o)
        } ()
    } (), window.ga || (window.ga = function() {
        window.ga.q.push(arguments)
    },
    window.ga.q = []);
    var hr = /^\d+$/,
    pr = Object.freeze({
        trackPageview: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            t.page = e,
            window.ga("send", "pageview", t)
        },
        setDimension: function(e, t) {
            window.ga("set", e, t)
        },
        setGlobalLocation: function(e) {
            window.ga("set", {
                location: e
            })
        },
        setGlobalTitle: function(e) {
            window.ga("set", {
                title: e
            })
        },
        setGlobalAccount: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            window.ga("create", e, t, n),
            window.ga("set", "transport", "sendBeacon" in window.navigator ? "beacon": "xhr")
        },
        providePlugin: function(e, t) {
            var n = window[window.GoogleAnalyticsObject || "ga"];
            "function" == typeof n && n("provide", e, t)
        },
        requirePlugin: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            window.ga(function() {
                window.ga("require", e, t)
            })
        },
        trackEvent: function(e) {
            if (void 0 !== e.value) {
                if (!hr.test(e.value)) {
                    var t = new Error("The event value in '" + JSON.stringify(e) + "' has to be an integer.");
                    return t.name = "InvalidGAEventValueError",
                    void setTimeout(function() {
                        throw t
                    })
                }
                e.value = Number(e.value)
            }
            void 0 === e.interactive && (e.interactive = !0),
            window.ga("send", "event", e.category, e.action, e.label, e.value, {
                nonInteraction: !e.interactive
            })
        }
    }), mr = Object.freeze({
        hasInteractions: Ee,
        hasDirtyFields: xe
    }), vr = function() {
        function e(t) {
            Fn(this, e),
            this.children = [],
            this.parent = t
        }
        return qn(e, [{
            key: "delete",
            value: function(e) {
                var t = this.children.indexOf(e);
                return - 1 !== t && (this.children = this.children.slice(0, t).concat(this.children.slice(t + 1)), 0 === this.children.length && this.parent.delete(this), !0)
            }
        },
        {
            key: "add",
            value: function(e) {
                return this.children.push(e),
                this
            }
        }]),
        e
    } (), gr = function() {
        function e(t) {
            Fn(this, e),
            this.parent = null,
            this.children = {},
            this.parent = t || null
        }
        return qn(e, [{
            key: "get",
            value: function(e) {
                return this.children[e]
            }
        },
        {
            key: "insert",
            value: function(t) {
                for (var n = this,
                r = 0; r < t.length; r += 1) {
                    var o = t[r],
                    i = n.get(o);
                    if (r === t.length - 1) return i instanceof e && (n.delete(i), i = null),
                    i || (i = new vr(n), n.children[o] = i),
                    i;
                    i instanceof vr && (i = null),
                    i || (i = new e(n), n.children[o] = i),
                    n = i
                }
                return n
            }
        },
        {
            key: "delete",
            value: function(e) {
                for (var t in this.children) {
                    if (this.children[t] === e) {
                        var n = delete this.children[t];
                        return 0 === Object.keys(this.children).length && this.parent && this.parent.delete(this),
                        n
                    }
                }
                return ! 1
            }
        }]),
        e
    } (), yr = Object.freeze({
        Leaf: vr,
        RadixTrie: gr
    }), br = n(function(e, t) { !
        function(e, n) {
            n(t, cn)
        } (0,
        function(e, t) {
            function n(e, t) {
                function n() {
                    var e = o;
                    o = [],
                    t(e)
                }
                var o = [];
                return function() {
                    for (var t = arguments.length,
                    i = Array(t), a = 0; a < t; a++) i[a] = arguments[a];
                    o.push(i),
                    1 === o.length && r(e, n)
                }
            }
            function r(e, t) {
                h || (h = new MutationObserver(o)),
                d || (d = e.createElement("div"), h.observe(d, {
                    attributes: !0
                })),
                p.push(t),
                d.setAttribute("data-twiddle", "" + Date.now())
            }
            function o() {
                var e = p;
                p = [];
                for (var t = 0; t < e.length; t++) try {
                    e[t]()
                } catch(e) {
                    setTimeout(function() {
                        throw e
                    },
                    0)
                }
            }
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n],
                    o = r[0],
                    i = r[1],
                    s = r[2];
                    o === b ? (function(e, t) {
                        if (! (t instanceof e.elementConstructor)) return;
                        var n = m.get(t);
                        n || (n = [], m.set(t, n));
                        if ( - 1 === n.indexOf(e.id)) {
                            var r = void 0;
                            if (e.initialize && (r = e.initialize.call(void 0, t)), r) {
                                var o = v.get(t);
                                o || (o = {},
                                v.set(t, o)),
                                o["" + e.id] = r
                            }
                            n.push(e.id)
                        }
                    } (s, i),
                    function(e, t) {
                        if (! (t instanceof e.elementConstructor)) return;
                        var n = g.get(t);
                        n || (n = [], g.set(t, n));
                        if ( - 1 === n.indexOf(e.id)) {
                            e.elements.push(t);
                            var r = v.get(t),
                            o = r ? r["" + e.id] : null;
                            o && o.add && o.add.call(void 0, t),
                            e.add && e.add.call(void 0, t),
                            n.push(e.id)
                        }
                    } (s, i)) : o === w ? a(s, i) : o === _ &&
                    function(e, t) {
                        var n = g.get(t);
                        if (!n) return;
                        for (var r = n.slice(0), o = 0; o < r.length; o++) {
                            var i = e[r[o]];
                            if (i) {
                                var a = i.elements.indexOf(t); - 1 !== a && i.elements.splice(a, 1);
                                var s = v.get(t),
                                c = s ? s["" + i.id] : null;
                                c && c.remove && c.remove.call(void 0, t),
                                i.remove && i.remove.call(void 0, t)
                            }
                        }
                        g.delete(t)
                    } (e.observers, i)
                }
            }
            function a(e, t) {
                if (t instanceof e.elementConstructor) {
                    var n = g.get(t);
                    if (n) {
                        var r = e.elements.indexOf(t);
                        if ( - 1 !== r && e.elements.splice(r, 1), -1 !== (r = n.indexOf(e.id))) {
                            var o = v.get(t),
                            i = o ? o["" + e.id] : null;
                            i && i.remove && i.remove.call(void 0, t),
                            e.remove && e.remove.call(void 0, t),
                            n.splice(r, 1)
                        }
                        0 === n.length && g.delete(t)
                    }
                }
            }
            function s(e, t, n) {
                for (var r = 0; r < n.length; r++) {
                    var o = n[r];
                    "childList" === o.type ? (c(e, t, o.addedNodes),
                    function(e, t, n) {
                        for (var r = 0; r < n.length; r++) {
                            var o = n[r];
                            if ("querySelectorAll" in o) {
                                t.push([_, o]);
                                for (var i = o.querySelectorAll("*"), a = 0; a < i.length; a++) t.push([_, i[a]])
                            }
                        }
                    } (0, t, o.removedNodes)) : "attributes" === o.type && u(e, t, o.target)
                } (function(e) {
                    if (null === y) {
                        var t = e.createElement("div"),
                        n = e.createElement("div"),
                        r = e.createElement("div");
                        t.appendChild(n),
                        n.appendChild(r),
                        t.innerHTML = "",
                        y = r.parentNode !== n
                    }
                    return y
                })(e.ownerDocument) &&
                function(e, t) {
                    for (var n = 0; n < e.observers.length; n++) {
                        var r = e.observers[n];
                        if (r) for (var o = r.elements,
                        i = 0; i < o.length; i++) {
                            var a = o[i];
                            a.parentNode || t.push([_, a])
                        }
                    }
                } (e, t)
            }
            function c(e, t, n) {
                for (var r = 0; r < n.length; r++) {
                    var o = n[r];
                    if ("matches" in o) for (var i = e.selectorSet.matches(o), a = 0; a < i.length; a++) {
                        var s = i[a].data;
                        t.push([b, o, s])
                    }
                    if ("querySelectorAll" in o) for (var c = e.selectorSet.queryAll(o), u = 0; u < c.length; u++) for (var l = c[u], f = l.data, d = l.elements, h = 0; h < d.length; h++) t.push([b, d[h], f])
                }
            }
            function u(e, t, n) {
                if ("matches" in n) for (var r = e.selectorSet.matches(n), o = 0; o < r.length; o++) {
                    var i = r[o].data;
                    t.push([b, n, i])
                }
                if ("querySelectorAll" in n) {
                    var a = g.get(n);
                    if (a) for (var s = 0; s < a.length; s++) {
                        var c = e.observers[a[s]];
                        c && (e.selectorSet.matchesSelector(n, c.selector) || t.push([w, n, c]))
                    }
                }
            }
            function l(e) {
                this.rootNode = 9 === e.nodeType ? e.documentElement: e,
                this.ownerDocument = 9 === e.nodeType ? e: e.ownerDocument,
                this.observers = [],
                this.selectorSet = new t,
                this.mutationObserver = new MutationObserver(function(e, t) {
                    var n = [];
                    s(e, n, t),
                    i(e, n)
                }.bind(this, this)),
                this._scheduleAddRootNodes = n(this.ownerDocument,
                function(e) {
                    var t = [];
                    c(e, t, [e.rootNode]),
                    i(e, t)
                }.bind(this, this)),
                this._handleThrottledChangedTargets = n(this.ownerDocument,
                function(e, t) {
                    var n = []; (function(e, t, n) {
                        for (var r = 0; r < n.length; r++) for (var o = n[r], i = o.form ? o.form.elements: e.rootNode.querySelectorAll("input"), a = 0; a < i.length; a++) u(e, t, i[a])
                    })(e, n, t),
                    i(e, n)
                }.bind(this, this)),
                this.rootNode.addEventListener("change",
                function(e, t) {
                    e._handleThrottledChangedTargets(t.target)
                }.bind(this, this), !1),
                function(e, t) {
                    var n = e.readyState;
                    "interactive" === n || "complete" === n ? r(e, t) : e.addEventListener("DOMContentLoaded", r(e, t))
                } (this.ownerDocument,
                function(e) {
                    e.mutationObserver.observe(e.rootNode, {
                        childList: !0,
                        attributes: !0,
                        subtree: !0
                    }),
                    e._scheduleAddRootNodes()
                }.bind(this, this))
            }
            function f() {
                return T || (T = new l(window.document)),
                T
            }
            t = t && t.hasOwnProperty("default") ? t.
        default:
            t;
            var d = null,
            h = null,
            p = [],
            m = new WeakMap,
            v = new WeakMap,
            g = new WeakMap,
            y = null,
            b = 1,
            w = 2,
            _ = 3,
            E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
            function(e) {
                return typeof e
            }: function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
            },
            x = 0;
            l.prototype.disconnect = function() {
                this.mutationObserver.disconnect()
            },
            l.prototype.observe = function(e, t) {
                var n = void 0;
                "function" == typeof t ? n = {
                    selector: e,
                    initialize: t
                }: "object" === (void 0 === t ? "undefined": E(t)) ? (n = t).selector = e: n = e;
                var r = this,
                o = {
                    id: x++,
                    selector: n.selector,
                    initialize: n.initialize,
                    add: n.add,
                    remove: n.remove,
                    elements: [],
                    elementConstructor: n.hasOwnProperty("constructor") ? n.constructor: Element,
                    abort: function() {
                        r._abortObserving(o)
                    }
                };
                return this.selectorSet.add(o.selector, o),
                this.observers[o.id] = o,
                this._scheduleAddRootNodes(),
                o
            },
            l.prototype._abortObserving = function(e) {
                for (var t = e.elements,
                n = 0; n < t.length; n++) a(e, t[n]);
                this.selectorSet.remove(e.selector, e),
                delete this.observers[e.id]
            },
            l.prototype.triggerObservers = function(e) {
                var t = []; !
                function(e, t, n) {
                    if ("querySelectorAll" in n) {
                        u(e, t, n);
                        for (var r = n.querySelectorAll("*"), o = 0; o < r.length; o++) u(e, t, r[o])
                    }
                } (this, t, e),
                i(this, t)
            };
            var T = void 0;
            e.getDocumentObserver = f,
            e.observe = function() {
                var e;
                return (e = f()).observe.apply(e, arguments)
            },
            e.triggerObservers = function() {
                var e;
                return (e = f()).triggerObservers.apply(e, arguments)
            },
            e.
        default = l,
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        })
    }), wr = t(br), _r = br.observe, Er = br.getObserverCount, xr = br.triggerObservers, Tr = Object.freeze({
    default:
        wr,
        __moduleExports: br,
        observe: _r,
        getObserverCount: Er,
        triggerObservers: xr
    }), kr = new gr, Sr = kr, jr = null; document.addEventListener("keydown",
    function(e) {
        if (! (e.target instanceof Node && we(e.target))) {
            null != jr && clearTimeout(jr),
            jr = setTimeout(ke, 1500);
            var t = Sr.get(D(e));
            if (t) return Sr = t,
            t instanceof vr ? (En(e.target, "hotkey:activate", {
                originalEvent: e
            }),
            function(e) {
                we(e) ? e.focus() : ("A" === e.tagName && e.href || "BUTTON" === e.tagName) && e.click()
            } (t.children[t.children.length - 1]), e.preventDefault(), void ke()) : void 0;
            ke()
        }
    });
    var Or = new WeakMap; _r("[data-hotkey]", {
        add: function(e) {
            var t = Te(e.getAttribute("data-hotkey")).map(function(t) {
                return kr.insert(t).add(e)
            });
            Or.set(e, t)
        },
        remove: function(e) {
            var t = Or.get(e);
            if (t && t.length) {
                var n = !0,
                r = !1,
                o = void 0;
                try {
                    for (var i, a = t[Symbol.iterator](); ! (n = (i = a.next()).done); n = !0) {
                        var s = i.value;
                        s && s.delete(e)
                    }
                } catch(e) {
                    r = !0,
                    o = e
                } finally {
                    try { ! n && a.
                        return && a.
                        return ()
                    } finally {
                        if (r) throw o
                    }
                }
            }
        }
    });
    var Lr = Object.freeze({
        expandHotkeyToEdges: Te
    }); t(n(function(e, t) { !
        function(e, n) {
            n(t)
        } (0,
        function(e) {
            function t() {
                return Reflect.construct(HTMLElement, [], this.__proto__.constructor)
            }
            function n(e, t) {
                setTimeout(function() {
                    var n = t.ownerDocument.createEvent("Event");
                    n.initEvent(e, !1, !1),
                    t.dispatchEvent(n)
                },
                0)
            }
            function r(e, t) {
                return t.then(function(t) {
                    var n = e.parentNode;
                    n && (e.insertAdjacentHTML("afterend", t), n.removeChild(e))
                },
                function() {
                    e.classList.add("is-error")
                })
            }
            function o(e) {
                var t = e.src,
                n = a.get(e);
                return n && n.src === t ? n.data: (n = t ? e.load() : Promise.reject(new Error("missing src")), a.set(e, {
                    src: t,
                    data: n
                }), n)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function() {
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
            } ();
            Object.setPrototypeOf(t.prototype, HTMLElement.prototype),
            Object.setPrototypeOf(t, HTMLElement);
            var a = new WeakMap,
            s = e.IncludeFragmentElement = function(e) {
                function a() { !
                    function(e, t) {
                        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    } (this, a);
                    var e = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return ! t || "object" != typeof t && "function" != typeof t ? e: t
                    } (this, (a.__proto__ || Object.getPrototypeOf(a)).call(this));
                    return o(e).
                    catch(function() {}),
                    e
                }
                return function(e, t) {
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
                } (a, t),
                i(a, [{
                    key: "attributeChangedCallback",
                    value: function(e) {
                        if ("src" === e) {
                            var t = o(this);
                            this._attached && r(this, t)
                        }
                    }
                },
                {
                    key: "connectedCallback",
                    value: function() {
                        this._attached = !0,
                        this.src && r(this, o(this))
                    }
                },
                {
                    key: "disconnectedCallback",
                    value: function() {
                        this._attached = !1
                    }
                },
                {
                    key: "request",
                    value: function() {
                        var e = this.src;
                        if (!e) throw new Error("missing src");
                        return new Request(e, {
                            method: "GET",
                            credentials: "same-origin",
                            headers: {
                                Accept: "text/html"
                            }
                        })
                    }
                },
                {
                    key: "load",
                    value: function() {
                        var e = this;
                        return Promise.resolve().then(function() {
                            var t = e.request();
                            return n("loadstart", e),
                            e.fetch(t)
                        }).then(function(e) {
                            if (200 !== e.status) throw new Error("Failed to load resource: the server responded with a status of " + e.status);
                            var t = e.headers.get("Content-Type");
                            if (!t || !t.match(/^text\/html/)) throw new Error("Failed to load resource: expected text/html but was " + t);
                            return e
                        }).then(function(e) {
                            return e.text()
                        }).then(function(t) {
                            return n("load", e),
                            n("loadend", e),
                            t
                        },
                        function(t) {
                            throw n("error", e),
                            n("loadend", e),
                            t
                        })
                    }
                },
                {
                    key: "fetch",
                    value: function(e) {
                        function t(t) {
                            return e.apply(this, arguments)
                        }
                        return t.toString = function() {
                            return e.toString()
                        },
                        t
                    } (function(e) {
                        return fetch(e)
                    })
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
                        e ? this.setAttribute("src", e) : this.removeAttribute("src")
                    }
                },
                {
                    key: "data",
                    get: function() {
                        return o(this)
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["src"]
                    }
                }]),
                a
            } ();
            window.customElements.get("include-fragment") || (window.IncludeFragmentElement = s, window.customElements.define("include-fragment", s))
        })
    })); IncludeFragmentElement.prototype.fetch = me;
    var Cr = Object.freeze({
        pluralize: function(e, t) {
            return t + (e > 1 || 0 == e ? "s": "")
        },
        pluralizeNode: function(e, t) {
            var n = 1 == e ? "data-singular-string": "data-plural-string",
            r = t.getAttribute(n);
            null != r && (t.textContent = r)
        }
    }), Ar = Object.freeze({
        weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    }), Dr = null; wn("click", ".js-menu-container",
    function(e) {
        e.target.closest(".js-menu-target") ? (e.preventDefault(), this === Dr ? je(this) : Se(this)) : e.target.closest(".js-menu-content") || this === Dr && (e.preventDefault(), je(this))
    }), wn("click", ".js-menu-container .js-menu-close",
    function(e) {
        je(this.closest(".js-menu-container")),
        e.preventDefault()
    }), _r(".js-menu-container.active", {
        add: function() {
            var e = document.body;
            Vt(e, "null.js:191"),
            e.classList.add("menu-active")
        },
        remove: function() {
            var e = document.body;
            Vt(e, "null.js:196"),
            e.classList.remove("menu-active")
        }
    });
    var Mr = Object.freeze({
        activate: Se,
        deactivate: je
    }), Pr = Object.freeze({
        getDocument: Ce
    }), Nr = Object.freeze({
    default:
        Ae
    }), Rr = navigator.userAgent.match(/Macintosh/), Hr = Rr ? "ctrlKey": "metaKey", Ir = Rr ? "Control": "Meta", Fr = !1, qr = {
        x: 0,
        y: 0
    }; _r(".js-navigation-container", {
        add: function(e) {
            e.addEventListener("mousemove", De, !1),
            e.addEventListener("mouseover", Me, !1)
        },
        remove: function(e) {
            e.removeEventListener("mousemove", De, !1),
            e.removeEventListener("mouseover", Me, !1)
        }
    });
    var Br = 0; _r(".js-active-navigation-container", {
        add: function() {
            1 === ++Br && document.addEventListener("keydown", Pe)
        },
        remove: function() {
            0 === --Br && document.removeEventListener("keydown", Pe)
        }
    }), wn("navigation:keydown", ".js-active-navigation-container",
    function(e) {
        var t = e.currentTarget,
        n = e.detail.originalTarget.matches("input, textarea"),
        r = e.target;
        if (r.classList.contains("js-navigation-item")) if (n) {
            if (Rr) switch (D(e.detail.originalEvent)) {
            case "Control+n":
                Be(r, t);
                break;
            case "Control+p":
                qe(r, t)
            }
            switch (D(e.detail.originalEvent)) {
            case "ArrowUp":
                qe(r, t);
                break;
            case "ArrowDown":
                Be(r, t);
                break;
            case "Enter":
            case Ir + "+Enter": Ue(r, e.detail.originalEvent[Hr])
            }
        } else {
            if (Rr) switch (D(e.detail.originalEvent)) {
            case "Control+n":
                Be(r, t);
                break;
            case "Control+p":
                qe(r, t);
                break;
            case "Alt+v":
                !
                function(e, t) {
                    var n = Xe(t),
                    r = n.indexOf(e),
                    o = V(e);
                    if (null != o) {
                        for (var i = void 0,
                        a = void 0; (i = n[r - 1]) && (a = $(i, o)) && a.top >= 0;) r--;
                        if (i) {
                            if (ze(i, t)) return;
                            Ve(o, i)
                        }
                    }
                } (r, t);
                break;
            case "Control+v":
                !
                function(e, t) {
                    var n = Xe(t),
                    r = n.indexOf(e),
                    o = V(e);
                    if (null != o) {
                        for (var i = void 0,
                        a = void 0; (i = n[r + 1]) && (a = $(i, o)) && a.bottom >= 0;) r++;
                        if (i) {
                            if (ze(i, t)) return;
                            Ve(o, i)
                        }
                    }
                } (r, t)
            }
            switch (D(e.detail.originalEvent)) {
            case "j":
            case "J":
                Be(r, t);
                break;
            case "k":
            case "K":
                qe(r, t);
                break;
            case "o":
            case "Enter":
            case Ir + "+Enter": Ue(r, e.detail[Hr])
            }
        } else {
            var o = Xe(t)[0];
            if (o) if (n) {
                if (Rr) switch (D(e.detail.originalEvent)) {
                case "Control+n":
                    ze(o, t)
                }
                switch (D(e.detail.originalEvent)) {
                case "ArrowDown":
                    ze(o, t)
                }
            } else {
                if (Rr) switch (D(e.detail.originalEvent)) {
                case "Control+n":
                case "Control+v":
                    ze(o, t)
                }
                switch (D(e.detail.originalEvent)) {
                case "j":
                    ze(o, t)
                }
            }
        }
        if (n) {
            if (Rr) switch (D(e.detail.originalEvent)) {
            case "Control+n":
            case "Control+p":
                e.preventDefault()
            }
            switch (D(e.detail.originalEvent)) {
            case "ArrowUp":
            case "ArrowDown":
                e.preventDefault();
                break;
            case "Enter":
                e.preventDefault()
            }
        } else {
            if (Rr) switch (D(e.detail.originalEvent)) {
            case "Control+n":
            case "Control+p":
            case "Control+v":
            case "Alt+v":
                e.preventDefault()
            }
            switch (D(e.detail.originalEvent)) {
            case "j":
            case "k":
                e.preventDefault();
                break;
            case "o":
            case "Enter":
            case Hr + "+Enter": e.preventDefault()
            }
        }
    }), wn("click", ".js-active-navigation-container .js-navigation-item",
    function(e) {
        Ne(e)
    }), wn("navigation:keyopen", ".js-active-navigation-container .js-navigation-item",
    function(e) {
        var t = e.currentTarget.classList.contains("js-navigation-open") ? e.currentTarget: e.currentTarget.querySelector(".js-navigation-open");
        if (t) {
            if (e.modifierKey) window.open(t.href, "_blank"),
            window.focus();
            else {
                t.dispatchEvent(new MouseEvent("click", {
                    bubbles: !0,
                    cancelable: !0
                })) && t.click()
            }
            e.preventDefault()
        } else Ne(e)
    });
    var Ur = [], zr = Object.freeze({
        activate: Re,
        push: function(e) {
            var t = We();
            t && Ur.push(t),
            Re(e)
        },
        pop: function(e) {
            He(e),
            Fe(e);
            var t = Ur.pop();
            t && Re(t)
        },
        focus: Ie,
        clear: Fe,
        refocus: function(e, t) {
            Fe(e),
            Ie(e, t)
        }
    }), Wr = 14594616e5, Xr = Object.freeze({
        formatNumber: function(e) {
            return ("" + e).replace(/(^|[^\w.])(\d{4,})/g,
            function(e, t, n) {
                return t + n.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,")
            })
        },
        parseFormattedNumber: function(e) {
            return "string" == typeof e && (e = e.replace(/,/g, "")),
            parseFloat(e)
        }
    }), Yr = !1, Vr = new cn, $r = Object.freeze({
        onFocus: Je,
        onKey: function(e, t, n) {
            function r(t) {
                t.currentTarget.removeEventListener(e, n),
                t.currentTarget.removeEventListener("blur", r)
            }
            Je(t,
            function(t) {
                t.addEventListener(e, n),
                t.addEventListener("blur", r)
            })
        },
        onInput: function(e, t) {
            function n(e) {
                e.currentTarget.removeEventListener("input", t),
                e.currentTarget.removeEventListener("blur", n)
            }
            Je(e,
            function(e) {
                e.addEventListener("input", t),
                e.addEventListener("blur", n)
            })
        }
    }), Gr = function() {
        function e() {
            Fn(this, e),
            this.previousReceiver = {
                resolve: Ke,
                reject: Ke
            }
        }
        return qn(e, [{
            key: "push",
            value: function(e) {
                var t = this;
                return this.previousReceiver.resolve = this.previousReceiver.reject = Ke,
                new Promise(function(n, r) {
                    var o = {
                        resolve: n,
                        reject: r
                    };
                    t.previousReceiver = o,
                    e.then(function() {
                        o.resolve.apply(this, arguments)
                    },
                    function() {
                        o.reject.apply(this, arguments)
                    })
                })
            }
        }]),
        e
    } (), Jr = Object.freeze({
    default:
        Gr
    }), Kr = Object.freeze({
    default:
        Ze
    }), Zr = new WeakMap, Qr = Object.freeze({
        popPrefetchResponseForRequest: Qe,
        setPrefetchResponse: function(e, t) {
            Zr.set(e, t)
        }
    }), eo = {
        container: null,
        timeout: 650,
        push: !0,
        replace: !1,
        type: "GET",
        dataType: "html",
        scrollTo: 0
    },
    to = 20, no = void 0, ro = new Gr, oo = !0, io = window.location.href, ao = window.history.state; ao && ao.container && (no = ao), "state" in window.history && (oo = !1);
    var so = {},
    co = [], uo = []; un(window).on("popstate.pjax", ot);
    var lo = Object.freeze({
        click: function(e, t) {
            var n = l(e.currentTarget, HTMLAnchorElement);
            if (! (0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || location.protocol !== n.protocol || location.hostname !== n.hostname || n.href.indexOf("#") > -1 && ct(n) == ct(location) || e.defaultPrevented)) {
                var r = {
                    url: n.href,
                    container: null,
                    target: n
                };
                Object.assign(r, t),
                et(n, "pjax:click", {
                    options: r,
                    relatedEvent: e
                }) && (nt(r), e.preventDefault(), et(n, "pjax:clicked", {
                    options: r
                }))
            }
        },
        submit: function(e, t) {
            var n = l(e.currentTarget, HTMLFormElement),
            r = {
                type: (n.method || "GET").toUpperCase(),
                url: n.action,
                container: null,
                target: n
            };
            if (Object.assign(r, t), "GET" === r.type) {
                if (n.querySelector("input[type=file]")) return;
                Vt("string" == typeof r.url, "null.js:151");
                var o = st(r.url);
                o.search += (o.search ? "&": "") + _e(n),
                r.url = o.toString()
            } else r.data = new FormData(n);
            nt(r),
            e.preventDefault()
        },
    default:
        tt,
        fetch: function(e, t) {
            var n = e.closest("[data-pjax-container]");
            if (!n) throw new Error("no pjax container for " + Ze(n));
            var r = ut(n),
            o = st(e.href);
            return o.search += (o.search ? "&": "") + "_pjax=" + encodeURIComponent(r),
            me(o.href, {
                headers: Object.assign({
                    Accept: "text/html",
                    "X-PJAX": "true",
                    "X-PJAX-Container": r
                },
                t && t.headers)
            })
        },
        reload: function(e) {
            nt({
                url: window.location.href,
                container: e.container,
                push: !1,
                replace: !0,
                scrollTo: !1
            })
        },
        getState: function() {
            return no
        }
    }), fo = Object.freeze({
        delay: ht
    }), ho = function(e) {
        function t() {
            return Fn(this, t),
            Un(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return function(e, t) {
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
        } (t, IncludeFragmentElement),
        qn(t, [{
            key: "fetch",
            value: function() {
                var e = In(regeneratorRuntime.mark(function e(n) {
                    var r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Bn(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "fetch", this).call(this, n);
                        case 2:
                            if (202 !== (r = e.sent).status) {
                                e.next = 9;
                                break
                            }
                            return e.next = 6,
                            ht(o);
                        case 6:
                            return e.abrupt("return", this.fetch(n, 1.5 * o));
                        case 9:
                            return e.abrupt("return", r);
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
        }]),
        t
    } (); window.customElements.get("poll-include-fragment") || (window.PollIncludeFragmentElement = ho, window.customElements.define("poll-include-fragment", ho));
    var po = function() {
        var e = In(regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    J(function() {
                        ve(t).then(function(e) {
                            J(e, "sso-modal")
                        })
                    });
                case 1:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } (), mo = function() {
        var e = In(regeneratorRuntime.mark(function e() {
            var t, n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return t = P(document, "link[rel=sso-modal]", HTMLLinkElement),
                    e.next = 3,
                    po(t.href);
                case 3:
                    return n = null,
                    window.external.ssoComplete = function(e) {
                        e.error ? pt(n = !1) : (pt(n = !0),
                        function(e) {
                            var t = document.querySelector("meta[name=sso-expires-around]");
                            t && t.setAttribute("content", e)
                        } (e.expiresAround), window.focus()),
                        window.external.ssoComplete = null
                    },
                    e.next = 7,
                    new Promise(function(e) {
                        function t() {
                            document.removeEventListener("facebox:afterClose", t),
                            e()
                        }
                        document.addEventListener("facebox:afterClose", t)
                    });
                case 7:
                    if (n) {
                        e.next = 9;
                        break
                    }
                    throw new Error("sso prompt canceled");
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
    } (), vo = function() {
        var e = In(regeneratorRuntime.mark(function e() {
            var t, n, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (t = document.querySelector("link[rel=sso-session]"), n = document.querySelector("meta[name=sso-expires-around]"), t) {
                        e.next = 4;
                        break
                    }
                    return e.abrupt("return", !0);
                case 4:
                    if (function(e) {
                        if (!e) return ! 0;
                        var t = parseInt(l(e, HTMLMetaElement).content);
                        return (new Date).getTime() / 1e3 > t
                    } (n)) {
                        e.next = 6;
                        break
                    }
                    return e.abrupt("return", !0);
                case 6:
                    return r = l(t, HTMLLinkElement).href,
                    e.abrupt("return", ge(r));
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
    } (); _r(".js-sso-modal-complete",
    function(e) {
        if (window.opener && window.opener.external.ssoComplete) {
            var t = e.getAttribute("data-error"),
            n = e.getAttribute("data-expires-around");
            window.opener.external.ssoComplete({
                error: t,
                expiresAround: n
            }),
            window.close()
        } else {
            var r = e.getAttribute("data-fallback-url");
            window.location = r
        }
    });
    var go = null,
    yo = In(regeneratorRuntime.mark(function e() {
        var t;
        return regeneratorRuntime.wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
            case 0:
                return e.next = 2,
                vo();
            case 2:
                if (t = e.sent) {
                    e.next = 7;
                    break
                }
                return go || (go = mo().then(mt).
                catch(mt)),
                e.next = 7,
                go;
            case 7:
            case "end":
                return e.stop()
            }
        },
        e, this)
    })), bo = Object.freeze({
    default:
        yo
    }), wo = function() {
        var e = In(regeneratorRuntime.mark(function e(t, n, r, o) {
            var i, a, s, c, u, l, f, d, h = this;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    i = !1,
                    a = regeneratorRuntime.mark(function e(t) {
                        var a, s, c, u, l, f;
                        return regeneratorRuntime.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a = vt(),
                                s = zn(a, 2),
                                c = s[0],
                                u = s[1],
                                l = function() {
                                    return i = !0,
                                    u(),
                                    o
                                },
                                f = {
                                    text: l,
                                    json: function() {
                                        return r.headers.set("Accept", "application/json"),
                                        l()
                                    },
                                    html: function() {
                                        return r.headers.set("Accept", "text/html"),
                                        l()
                                    }
                                },
                                e.next = 5,
                                Promise.race([c, t.data.call(null, n, f, r)]);
                            case 5:
                            case "end":
                                return e.stop()
                            }
                        },
                        e, h)
                    }),
                    s = !0,
                    c = !1,
                    u = void 0,
                    e.prev = 5,
                    l = t[Symbol.iterator]();
                case 7:
                    if (s = (f = l.next()).done) {
                        e.next = 13;
                        break
                    }
                    return d = f.value,
                    e.delegateYield(a(d), "t0", 10);
                case 10:
                    s = !0,
                    e.next = 7;
                    break;
                case 13:
                    e.next = 19;
                    break;
                case 15:
                    e.prev = 15,
                    e.t1 = e.
                    catch(5),
                    c = !0,
                    u = e.t1;
                case 19:
                    e.prev = 19,
                    e.prev = 20,
                    !s && l.
                    return && l.
                    return ();
                case 22:
                    if (e.prev = 22, !c) {
                        e.next = 25;
                        break
                    }
                    throw u;
                case 25:
                    return e.finish(22);
                case 26:
                    return e.finish(19);
                case 27:
                    return e.abrupt("return", i);
                case 28:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[5, 15, 19, 27], [20, , 22, 26]])
        }));
        return function(t, n, r, o) {
            return e.apply(this, arguments)
        }
    } (), _o = function() {
        var e = In(regeneratorRuntime.mark(function e(t) {
            var n, r, o, i, a, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    yo();
                case 2:
                    return e.next = 4,
                    window.fetch(t.url, {
                        method: t.method,
                        body: null !== t.body ? t.body: void 0,
                        headers: t.headers,
                        credentials: "same-origin"
                    });
                case 4:
                    return n = e.sent,
                    e.t0 = n.url,
                    e.t1 = n.status,
                    e.t2 = n.statusText,
                    e.t3 = n.headers,
                    i = {
                        url: e.t0,
                        status: e.t1,
                        statusText: e.t2,
                        headers: e.t3,
                        text: "",
                        get json() {
                            return r = JSON.parse(this.text),
                            delete this.json,
                            this.json = r,
                            this.json
                        },
                        get html() {
                            return ue(ce(document), this),
                            o = le(document, this.text),
                            delete this.html,
                            this.html = o,
                            this.html
                        }
                    },
                    e.next = 12,
                    n.text();
                case 12:
                    if (a = e.sent, i.text = a, !(i.status < 300)) {
                        e.next = 18;
                        break
                    }
                    return e.abrupt("return", i);
                case 18:
                    throw s = new Error("request failed"),
                    s.response = i,
                    s;
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
    } (), Eo = void 0, xo = [], To = /\bTrident\/.+\brv:11\./.test(navigator.userAgent), ko = Object.freeze({
        afterRemote: function(e) {
            xo.push(e)
        },
        remoteForm: gt,
        remoteUninstall: function(e, t) {
            Eo && Eo.remove(e, t)
        }
    }), So = function() {
        var e = In(regeneratorRuntime.mark(function e(t) {
            var n, r, o, i, a, s;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return (n = t.currentTarget).classList.remove("js-load-contents"),
                    n.classList.add("is-loading"),
                    n.classList.remove("has-error"),
                    r = new URL(n.getAttribute("data-contents-url"), window.location.origin),
                    (o = jo.get(n)) && (i = new URLSearchParams(r.search.slice(1)), o.forEach(function(e) {
                        return i.append(e[0], e[1])
                    }), r.search = i.toString()),
                    a = n.querySelector(".js-select-menu-deferred-content"),
                    s = void 0,
                    e.prev = 9,
                    e.next = 12,
                    yo();
                case 12:
                    if (!a) {
                        e.next = 18;
                        break
                    }
                    return e.next = 15,
                    ve(r);
                case 15:
                    s = e.sent,
                    e.next = 21;
                    break;
                case 18:
                    return e.next = 20,
                    ge(r);
                case 20:
                    s = e.sent;
                case 21:
                    e.next = 27;
                    break;
                case 23:
                    return e.prev = 23,
                    e.t0 = e.
                    catch(9),
                    n.classList.add("has-error"),
                    e.abrupt("return");
                case 27:
                    return e.prev = 27,
                    n.classList.remove("is-loading"),
                    e.finish(27);
                case 30:
                    a ? a.innerHTML = s: En(n, "selectmenu:data", {
                        data: s
                    }),
                    n.classList.contains("active") && En(n, "selectmenu:load");
                case 32:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[9, 23, 27, 30]])
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } (), jo = new WeakMap; _r(".js-select-menu.js-load-contents", {
        add: function(e) {
            e.addEventListener("mouseenter", So),
            e.addEventListener("menu:activate", So)
        },
        remove: function(e) {
            e.removeEventListener("mouseenter", So),
            e.removeEventListener("menu:activate", So)
        }
    });
    var Oo = Object.freeze({
        setLoadingData: function(e, t) {
            jo.set(e, t)
        }
    }), Lo = Object.freeze({
        getItem: function(e) {
            try {
                return sessionStorage.getItem(e)
            } catch(e) {
                return
            }
        },
        setItem: function(e, t) {
            try {
                sessionStorage.setItem(e, t)
            } catch(e) {}
        },
        removeItem: function(e) {
            try {
                sessionStorage.removeItem(e)
            } catch(e) {}
        }
    }), Co = Object.freeze({
    default:
        bt
    }), Ao = function() {
        var e = In(regeneratorRuntime.mark(function e() {
            var t, n, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (t = document.body, Vt(t, "null.js:16"), n = P(document, "link[rel=sudo-modal]", HTMLLinkElement), !document.getElementById("js-sudo-prompt")) {
                        e.next = 7;
                        break
                    }
                    return e.abrupt("return");
                case 7:
                    if (!n) {
                        e.next = 14;
                        break
                    }
                    return e.next = 10,
                    ur(document, n.href);
                case 10:
                    r = e.sent,
                    t.appendChild(r),
                    e.next = 15;
                    break;
                case 14:
                    throw new Error("couldn't load sudo facebox");
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
    } (), Do = function() {
        var e = In(regeneratorRuntime.mark(function e() {
            var t, n, r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    Ao();
                case 2:
                    return e.next = 4,
                    J({
                        div: "#js-sudo-prompt"
                    },
                    "sudo");
                case 4:
                    return t = e.sent,
                    n = null,
                    (r = t.querySelector(".js-sudo-form")).querySelector(".js-sudo-login, .js-sudo-password").focus(),
                    un(r).on("ajaxSuccess",
                    function() {
                        n = !0,
                        En(document, "facebox:close")
                    }),
                    un(r).on("ajaxError",
                    function(e, t) {
                        n = !1;
                        var o = void 0;
                        switch (t.status) {
                        case 401:
                            o = "Incorrect password.";
                            break;
                        case 429:
                            o = "Too many password attempts. Please wait and try again later.";
                            break;
                        default:
                            o = "Failed to receive a response. Please try again later."
                        }
                        return r.querySelector(".js-sudo-error").textContent = o,
                        r.querySelector(".js-sudo-error").style.display = "block",
                        r.querySelector(".js-sudo-password").value = "",
                        !1
                    }),
                    e.next = 12,
                    new Promise(function(e) {
                        un(document).one("facebox:afterClose", e)
                    });
                case 12:
                    if (n) {
                        e.next = 14;
                        break
                    }
                    throw new Error("sudo prompt canceled");
                case 14:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function() {
            return e.apply(this, arguments)
        }
    } (), Mo = function() {
        var e = In(regeneratorRuntime.mark(function e(t) {
            var n;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return e.next = 2,
                    ge("/sessions/in_sudo.json?requested_access_level=" + t);
                case 2:
                    if (n = e.sent) {
                        e.next = 6;
                        break
                    }
                    return e.next = 6,
                    Do();
                case 6:
                case "end":
                    return e.stop()
                }
            },
            e, this)
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } (), Po = Object.freeze({
    default:
        Mo
    }), No = new WeakMap, Ro = null; _r(".contains-task-list",
    function(e) {
        var t = e.closest(".js-task-list-container");
        t && Dt(t)
    }), wn("change", ".js-comment-body > .contains-task-list, .js-gist-file-update-container .markdown-body > .contains-task-list",
    function(e) {
        var t = e.currentTarget,
        n = M(t, ".js-task-list-container"),
        r = Array.from(t.querySelectorAll("li")),
        o = l(e.target, HTMLInputElement),
        i = r.indexOf(o.closest(".task-list-item"));
        Mt(n, "checked:" + (o.checked ? 1 : 0), {
            operation: "check",
            position: [Ot(t), i],
            checked: o.checked
        })
    }), _r(".js-reorderable-task-lists .js-comment-body > .contains-task-list > .task-list-item",
    function(e) {
        if (! (e.closest(".js-comment-body").querySelectorAll(".task-list-item").length <= 1) && e.closest(".is-task-list-enabled")) {
            var t = function() {
                var e = document.createElement("span"),
                t = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
                n = document.createElementNS("http://www.w3.org/2000/svg", "path");
                return e.classList.add("handle"),
                t.classList.add("drag-handle"),
                t.setAttribute("aria-hidden", "true"),
                t.setAttribute("width", "16"),
                t.setAttribute("height", "15"),
                t.setAttribute("version", "1.1"),
                t.setAttribute("viewBox", "0 0 16 15"),
                n.setAttribute("d", "M12,4V5H4V4h8ZM4,8h8V7H4V8Zm0,3h8V10H4v1Z"),
                t.appendChild(n),
                e.appendChild(t),
                e
            } ();
            e.prepend(t),
            t.addEventListener("mouseenter", Ct),
            t.addEventListener("mouseleave", At),
            function(e, t) {
                No.set(e, t),
                e.addEventListener("dragstart", _t),
                e.addEventListener("dragenter", Et),
                e.addEventListener("dragend", Tt),
                e.addEventListener("drop", xt),
                e.addEventListener("dragover", kt)
            } (e, Lt),
            e.addEventListener("mouseenter", St),
            e.addEventListener("mouseleave", jt)
        }
    }), gt(".js-task-list-container .js-comment-update",
    function() {
        var e = In(regeneratorRuntime.mark(function e(t, n) {
            var r, o, i, a, s, c, u, l, f, d, h;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return r = M(t, ".js-task-list-container"),
                    (o = t.elements.namedItem("task_list_track")) && o.remove(),
                    (i = t.elements.namedItem("task_list_operation")) && i.remove(),
                    a = void 0,
                    e.prev = 6,
                    e.next = 9,
                    n.json();
                case 9:
                    a = e.sent,
                    e.next = 17;
                    break;
                case 12:
                    e.prev = 12,
                    e.t0 = e.
                    catch(6),
                    s = void 0;
                    try {
                        s = JSON.parse(e.t0.response.text)
                    } catch(e) {}
                    s && s.stale ? (c = s.updated_markdown, u = s.updated_html, l = s.version, c && u && l && (f = P(r, ".js-comment-body"), d = P(r, ".js-body-version"), h = P(r, ".js-task-list-field", HTMLTextAreaElement), f.innerHTML = u, h.value = c, r.setAttribute("data-body-version", l), d instanceof HTMLInputElement && (d.value = l))) : window.location.reload();
                case 17:
                    a && (i && a.json.source && (P(r, ".js-task-list-field", HTMLTextAreaElement).value = a.json.source), Dt(r));
                case 18:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[6, 12]])
        }));
        return function(t, n) {
            return e.apply(this, arguments)
        }
    } ());
    var Ho = Object.freeze({
        enableTaskList: Dt
    }), Io = Object.freeze({
        getUtf8StringLength: function(e) {
            var t = e.split("‍"),
            n = 0,
            r = !0,
            o = !1,
            i = void 0;
            try {
                for (var a, s = t[Symbol.iterator](); ! (r = (a = s.next()).done); r = !0) {
                    var c = a.value;
                    n += Array.from(c.split(/[\ufe00-\ufe0f]/).join("")).length
                }
            } catch(e) {
                o = !0,
                i = e
            } finally {
                try { ! r && s.
                    return && s.
                    return ()
                } finally {
                    if (o) throw i
                }
            }
            return n / t.length
        },
        replaceText: function(e, t, n) {
            var r = e.value.substring(0, e.selectionEnd),
            o = e.value.substring(e.selectionEnd);
            r = r.replace(t, n),
            o = o.replace(t, n),
            e.value = r + o,
            e.selectionStart = r.length,
            e.selectionEnd = r.length,
            Pt(e)
        },
        insertText: function(e, t) {
            var n = e.selectionEnd,
            r = e.value.substring(0, n),
            o = e.value.substring(n),
            i = "" === e.value || r.match(/\n$/) ? "": "\n";
            e.value = r + i + t + o,
            e.selectionStart = n + t.length,
            e.selectionEnd = n + t.length,
            Pt(e),
            e.focus()
        }
    }), Fo = new WeakMap, qo = Object.freeze({
        addThrottledInputEventListener: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            Fo.set(e, {
                keypressed: !1,
                inputed: !1,
                timer: void 0,
                listener: t,
                wait: null != n.wait ? n.wait: 100
            }),
            e.addEventListener("keydown", Rt),
            e.addEventListener("keyup", Ht),
            e.addEventListener("input", It)
        },
        removeThrottledInputEventListener: function(e, t) {
            e.removeEventListener("keydown", Rt),
            e.removeEventListener("keyup", Ht),
            e.removeEventListener("input", It);
            var n = Fo.get(e);
            n && (null != n.timer && n.listener === t && clearTimeout(n.timer), Fo.delete(e))
        },
        dispatchThrottledInputEvent: function(e) {
            var t = Fo.get(e);
            t && t.listener.call(null, e)
        }
    }), Bo = Object.freeze({
    default:
        Ft
    }), Uo = 0; window.addEventListener("scroll",
    function(e) {
        Uo = function(e) {
            return ! e || e < Wr && !(e % 1) ? Date.now() : e
        } (e.timeStamp)
    },
    {
        capture: !0,
        passive: !0
    });
    var zo = Object.freeze({
        preserveInteractivePosition: Ut,
        preservingScrollPosition: zt
    }), Wo = new WeakMap, Xo = function() {
        var e = In(regeneratorRuntime.mark(function e(t) {
            var n, r, o, i;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    if (!Wo.get(t)) {
                        e.next = 2;
                        break
                    }
                    return e.abrupt("return");
                case 2:
                    if (n = new XMLHttpRequest, r = t.getAttribute("data-url"), o = t.hasAttribute("data-retain-focus"), null != r) {
                        e.next = 7;
                        break
                    }
                    throw new Error("Element must have `data-url` attribute");
                case 7:
                    return n.open("GET", r),
                    n.setRequestHeader("Accept", "text/html"),
                    n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    Wo.set(t, n),
                    e.prev = 11,
                    e.next = 14,
                    Wt(n);
                case 14:
                    if (i = e.sent, !Ee(t, o)) {
                        e.next = 17;
                        break
                    }
                    throw new Error("element had interactions");
                case 17:
                    return e.abrupt("return", Xt(t, i, o));
                case 20:
                    e.prev = 20,
                    e.t0 = e.
                    catch(11),
                    "XMLHttpRequest abort" !== e.t0.message && console.warn("Failed to update content", t, e.t0);
                case 23:
                    return e.prev = 23,
                    Wo.delete(t),
                    e.finish(23);
                case 26:
                case "end":
                    return e.stop()
                }
            },
            e, this, [[11, 20, 23, 26]])
        }));
        return function(t) {
            return e.apply(this, arguments)
        }
    } (), Yo = function() {
        var e = In(regeneratorRuntime.mark(function e(t, n) {
            var r;
            return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                case 0:
                    return (r = Wo.get(t)) && r.abort(),
                    e.abrupt("return", Xt(t, n));
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
    } (), Vo = Object.freeze({
        updateContent: Xo,
        replaceContent: Yo
    }), $o = n(function(e) { !
        function(t) {
            e.exports = t()
        } (function() {
            function e(t, n) {
                if (!t || !t.nodeType || 1 !== t.nodeType) throw "Sortable: `el` must be HTMLElement, and not " + {}.toString.call(t);
                this.el = t,
                this.options = n = m({},
                n),
                t[z] = this;
                var o = {
                    group: null,
                    sort: !0,
                    disabled: !1,
                    store: null,
                    handle: null,
                    scroll: !0,
                    scrollSensitivity: 30,
                    scrollSpeed: 10,
                    draggable: /[uo]l/i.test(t.nodeName) ? "li": ">*",
                    ghostClass: "sortable-ghost",
                    chosenClass: "sortable-chosen",
                    dragClass: "sortable-drag",
                    ignore: "a, img",
                    filter: null,
                    preventOnFilter: !0,
                    animation: 0,
                    setData: function(e, t) {
                        e.setData("Text", t.textContent)
                    },
                    dropBubble: !1,
                    dragoverBubble: !1,
                    dataIdAttr: "data-id",
                    delay: 0,
                    forceFallback: !1,
                    fallbackClass: "sortable-fallback",
                    fallbackOnBody: !1,
                    fallbackTolerance: 0,
                    fallbackOffset: {
                        x: 0,
                        y: 0
                    },
                    supportPointer: !1 !== e.supportPointer
                };
                for (var i in o) ! (i in n) && (n[i] = o[i]);
                se(n);
                for (var a in this)"_" === a.charAt(0) && "function" == typeof this[a] && (this[a] = this[a].bind(this));
                this.nativeDraggable = !n.forceFallback && Z,
                r(t, "mousedown", this._onTapStart),
                r(t, "touchstart", this._onTapStart),
                n.supportPointer && r(t, "pointerdown", this._onTapStart),
                this.nativeDraggable && (r(t, "dragover", this), r(t, "dragenter", this)),
                oe.push(this._onDragOver),
                n.store && this.sort(n.store.get(this))
            }
            function t(e, t) {
                "clone" !== e.lastPullMode && (t = !0),
                E && E.state !== t && (a(E, "display", t ? "none": ""), t || E.state && (e.options.group.revertClone ? (x.insertBefore(E, T), e._animate(y, E)) : x.insertBefore(E, y)), E.state = t)
            }
            function n(e, t, n) {
                if (e) {
                    n = n || X;
                    do {
                        if (">*" === t && e.parentNode === n || h(e, t)) return e
                    } while ( e = function ( e ) {
                        var t = e.host;
                        return t && t.nodeType ? t: e.parentNode
                    } (e))
                }
                return null
            }
            function r(e, t, n) {
                e.addEventListener(t, n, J)
            }
            function o(e, t, n) {
                e.removeEventListener(t, n, J)
            }
            function i(e, t, n) {
                if (e) if (e.classList) e.classList[n ? "add": "remove"](t);
                else {
                    var r = (" " + e.className + " ").replace(B, " ").replace(" " + t + " ", " ");
                    e.className = (r + (n ? " " + t: "")).replace(B, " ")
                }
            }
            function a(e, t, n) {
                var r = e && e.style;
                if (r) {
                    if (void 0 === n) return X.defaultView && X.defaultView.getComputedStyle ? n = X.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle),
                    void 0 === t ? n: n[t];
                    t in r || (t = "-webkit-" + t),
                    r[t] = n + ("string" == typeof n ? "": "px")
                }
            }
            function s(e, t, n) {
                if (e) {
                    var r = e.getElementsByTagName(t),
                    o = 0,
                    i = r.length;
                    if (n) for (; o < i; o++) n(r[o], o);
                    return r
                }
                return []
            }
            function c(e, t, n, r, o, i, a, s) {
                e = e || t[z];
                var c = X.createEvent("Event"),
                u = e.options,
                l = "on" + n.charAt(0).toUpperCase() + n.substr(1);
                c.initEvent(n, !0, !0),
                c.to = o || t,
                c.from = i || t,
                c.item = r || t,
                c.clone = E,
                c.oldIndex = a,
                c.newIndex = s,
                t.dispatchEvent(c),
                u[l] && u[l].call(e, c)
            }
            function u(e, t, n, r, o, i, a, s) {
                var c, u, l = e[z],
                f = l.options.onMove;
                return (c = X.createEvent("Event")).initEvent("move", !0, !0),
                c.to = t,
                c.from = e,
                c.dragged = n,
                c.draggedRect = r,
                c.related = o || t,
                c.relatedRect = i || t.getBoundingClientRect(),
                c.willInsertAfter = s,
                e.dispatchEvent(c),
                f && (u = f.call(l, c, a)),
                u
            }
            function l(e) {
                e.draggable = !1
            }
            function f() {
                ee = !1
            }
            function d(e, t) {
                var n = 0;
                if (!e || !e.parentNode) return - 1;
                for (; e && (e = e.previousElementSibling);)"TEMPLATE" === e.nodeName.toUpperCase() || ">*" !== t && !h(e, t) || n++;
                return n
            }
            function h(e, t) {
                if (e) {
                    var n = (t = t.split(".")).shift().toUpperCase(),
                    r = new RegExp("\\s(" + t.join("|") + ")(?=\\s)", "g");
                    return ! ("" !== n && e.nodeName.toUpperCase() != n || t.length && ((" " + e.className + " ").match(r) || []).length != t.length)
                }
                return ! 1
            }
            function p(e, t) {
                var n, r;
                return function() {
                    void 0 === n && (n = arguments, r = this, V(function() {
                        1 === n.length ? e.call(r, n[0]) : e.apply(r, n),
                        n = void 0
                    },
                    t))
                }
            }
            function m(e, t) {
                if (e && t) for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }
            function v(e) {
                return V(e, 0)
            }
            function g(e) {
                return clearTimeout(e)
            }
            if ("undefined" == typeof window || !window.document) return function() {
                throw new Error("Sortable.js requires a window with a document")
            };
            var y, b, w, _, E, x, T, k, S, j, O, L, C, A, D, M, P, N, R, H, I, F, q = {},
            B = /\s+/g,
            U = /left|right|inline/,
            z = "Sortable" + (new Date).getTime(),
            W = window,
            X = W.document,
            Y = W.parseInt,
            V = W.setTimeout,
            $ = W.jQuery || W.Zepto,
            G = W.Polymer,
            J = !1,
            K = !1,
            Z = "draggable" in X.createElement("div"),
            Q = function(e) {
                return ! navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i) && (e = X.createElement("x"), e.style.cssText = "pointer-events:auto", "auto" === e.style.pointerEvents)
            } (),
            ee = !1,
            te = Math.abs,
            ne = Math.min,
            re = [],
            oe = [],
            ie = function() {
                return ! 1
            },
            ae = p(function(e, t, n) {
                if (n && t.scroll) {
                    var r, o, i, a, s, c, u = n[z],
                    l = t.scrollSensitivity,
                    f = t.scrollSpeed,
                    d = e.clientX,
                    h = e.clientY,
                    p = window.innerWidth,
                    m = window.innerHeight;
                    if (j !== n && (S = t.scroll, j = n, O = t.scrollFn, !0 === S)) {
                        S = n;
                        do {
                            if (S.offsetWidth < S.scrollWidth || S.offsetHeight < S.scrollHeight) break
                        } while ( S = S . parentNode )
                    }
                    S && (r = S, o = S.getBoundingClientRect(), i = (te(o.right - d) <= l) - (te(o.left - d) <= l), a = (te(o.bottom - h) <= l) - (te(o.top - h) <= l)),
                    i || a || (a = (m - h <= l) - (h <= l), ((i = (p - d <= l) - (d <= l)) || a) && (r = W)),
                    q.vx === i && q.vy === a && q.el === r || (q.el = r, q.vx = i, q.vy = a, clearInterval(q.pid), r && (q.pid = setInterval(function() {
                        if (c = a ? a * f: 0, s = i ? i * f: 0, "function" == typeof O) return O.call(u, s, c, e);
                        r === W ? W.scrollTo(W.pageXOffset + s, W.pageYOffset + c) : (r.scrollTop += c, r.scrollLeft += s)
                    },
                    24)))
                }
            },
            30),
            se = function(e) {
                function t(e, t) {
                    return null != e && !0 !== e || null != (e = n.name) ? "function" == typeof e ? e: function(n, r) {
                        var o = r.options.group.name;
                        return t ? e: e && (e.join ? e.indexOf(o) > -1 : o == e)
                    }: ie
                }
                var n = {},
                r = e.group;
                r && "object" == typeof r || (r = {
                    name: r
                }),
                n.name = r.name,
                n.checkPull = t(r.pull, !0),
                n.checkPut = t(r.put),
                n.revertClone = r.revertClone,
                e.group = n
            };
            try {
                window.addEventListener("test", null, Object.defineProperty({},
                "passive", {
                    get: function() {
                        J = {
                            capture: !1,
                            passive: K = !1
                        }
                    }
                }))
            } catch(e) {}
            return e.prototype = {
                constructor: e,
                _onTapStart: function(e) {
                    var t, r = this,
                    o = this.el,
                    i = this.options,
                    a = i.preventOnFilter,
                    s = e.type,
                    u = e.touches && e.touches[0],
                    l = (u || e).target,
                    f = e.target.shadowRoot && e.path && e.path[0] || l,
                    h = i.filter;
                    if (function(e) {
                        re.length = 0;
                        for (var t = e.getElementsByTagName("input"), n = t.length; n--;) {
                            var r = t[n];
                            r.checked && re.push(r)
                        }
                    } (o), !y && !(/mousedown|pointerdown/.test(s) && 0 !== e.button || i.disabled) && !f.isContentEditable && (l = n(l, i.draggable, o)) && k !== l) {
                        if (t = d(l, i.draggable), "function" == typeof h) {
                            if (h.call(this, e, l, this)) return c(r, f, "filter", l, o, o, t),
                            void(a && e.preventDefault())
                        } else if (h && (h = h.split(",").some(function(e) {
                            if (e = n(f, e.trim(), o)) return c(r, e, "filter", l, o, o, t),
                            !0
                        }))) return void(a && e.preventDefault());
                        i.handle && !n(f, i.handle, o) || this._prepareDragStart(e, u, l, t)
                    }
                },
                _prepareDragStart: function(e, t, n, o) {
                    var a, u = this,
                    f = u.el,
                    d = u.options,
                    h = f.ownerDocument;
                    n && !y && n.parentNode === f && (R = e, x = f, y = n, d.handleReplacedDragElement && (b = n.getAttribute("id")), w = y.parentNode, T = y.nextSibling, k = n, P = d.group, D = o, this._lastX = (t || e).clientX, this._lastY = (t || e).clientY, y.style["will-change"] = "all", a = function() {
                        u._disableDelayedDrag(),
                        y.draggable = u.nativeDraggable,
                        i(y, d.chosenClass, !0),
                        u._triggerDragStart(e, t),
                        c(u, x, "choose", y, x, x, D)
                    },
                    d.ignore.split(",").forEach(function(e) {
                        s(y, e.trim(), l)
                    }), r(h, "mouseup", u._onDrop), r(h, "touchend", u._onDrop), r(h, "touchcancel", u._onDrop), r(h, "selectstart", u), d.supportPointer && r(h, "pointercancel", u._onDrop), d.delay ? (r(h, "mouseup", u._disableDelayedDrag), r(h, "touchend", u._disableDelayedDrag), r(h, "touchcancel", u._disableDelayedDrag), r(h, "mousemove", u._disableDelayedDrag), r(h, "touchmove", u._disableDelayedDrag), d.supportPointer && r(h, "pointermove", u._disableDelayedDrag), u._dragStartTimer = V(a, d.delay)) : a())
                },
                _disableDelayedDrag: function() {
                    var e = this.el.ownerDocument;
                    clearTimeout(this._dragStartTimer),
                    o(e, "mouseup", this._disableDelayedDrag),
                    o(e, "touchend", this._disableDelayedDrag),
                    o(e, "touchcancel", this._disableDelayedDrag),
                    o(e, "mousemove", this._disableDelayedDrag),
                    o(e, "touchmove", this._disableDelayedDrag),
                    o(e, "pointermove", this._disableDelayedDrag)
                },
                _triggerDragStart: function(e, t) { (t = t || ("touch" == e.pointerType ? e: null)) ? (R = {
                        target: y,
                        clientX: t.clientX,
                        clientY: t.clientY
                    },
                    this._onDragStart(R, "touch")) : this.nativeDraggable ? (r(y, "dragend", this), r(x, "dragstart", this._onDragStart)) : this._onDragStart(R, !0);
                    try {
                        X.selection ? v(function() {
                            X.selection.empty()
                        }) : window.getSelection().removeAllRanges()
                    } catch(e) {}
                },
                _dragStarted: function() {
                    if (x && y) {
                        var t = this.options;
                        i(y, t.ghostClass, !0),
                        i(y, t.dragClass, !1),
                        e.active = this,
                        c(this, x, "start", y, x, x, D)
                    } else this._nulling()
                },
                _emulateDragOver: function() {
                    if (H) {
                        if (this._lastX === H.clientX && this._lastY === H.clientY) return;
                        this._lastX = H.clientX,
                        this._lastY = H.clientY,
                        Q || a(_, "display", "none");
                        var e = X.elementFromPoint(H.clientX, H.clientY),
                        t = e,
                        n = oe.length;
                        if (e && e.shadowRoot && (t = e = e.shadowRoot.elementFromPoint(H.clientX, H.clientY)), t) do {
                            if (t[z]) {
                                for (; n--;) oe[n]({
                                    clientX: H.clientX,
                                    clientY: H.clientY,
                                    target: e,
                                    rootEl: t
                                });
                                break
                            }
                            e = t
                        } while ( t = t . parentNode );
                        Q || a(_, "display", "")
                    }
                },
                _onTouchMove: function(t) {
                    if (R) {
                        var n = this.options,
                        r = n.fallbackTolerance,
                        o = n.fallbackOffset,
                        i = t.touches ? t.touches[0] : t,
                        s = i.clientX - R.clientX + o.x,
                        c = i.clientY - R.clientY + o.y,
                        u = t.touches ? "translate3d(" + s + "px," + c + "px,0)": "translate(" + s + "px," + c + "px)";
                        if (!e.active) {
                            if (r && ne(te(i.clientX - this._lastX), te(i.clientY - this._lastY)) < r) return;
                            this._dragStarted()
                        }
                        this._appendGhost(),
                        I = !0,
                        H = i,
                        a(_, "webkitTransform", u),
                        a(_, "mozTransform", u),
                        a(_, "msTransform", u),
                        a(_, "transform", u),
                        t.preventDefault()
                    }
                },
                _appendGhost: function() {
                    if (!_) {
                        var e, t = y.getBoundingClientRect(),
                        n = a(y),
                        r = this.options;
                        i(_ = y.cloneNode(!0), r.ghostClass, !1),
                        i(_, r.fallbackClass, !0),
                        i(_, r.dragClass, !0),
                        a(_, "top", t.top - Y(n.marginTop, 10)),
                        a(_, "left", t.left - Y(n.marginLeft, 10)),
                        a(_, "width", t.width),
                        a(_, "height", t.height),
                        a(_, "opacity", "0.8"),
                        a(_, "position", "fixed"),
                        a(_, "zIndex", "100000"),
                        a(_, "pointerEvents", "none"),
                        r.fallbackOnBody && X.body.appendChild(_) || x.appendChild(_),
                        e = _.getBoundingClientRect(),
                        a(_, "width", 2 * t.width - e.width),
                        a(_, "height", 2 * t.height - e.height)
                    }
                },
                _onDragStart: function(e, t) {
                    var n = e.dataTransfer,
                    o = this.options;
                    this._offUpEvents(),
                    P.checkPull(this, this, y, e),
                    i(y, o.dragClass, !0),
                    t ? ("touch" === t ? (r(X, "touchmove", this._onTouchMove), r(X, "touchend", this._onDrop), r(X, "touchcancel", this._onDrop), o.supportPointer && (r(X, "pointermove", this._onTouchMove), r(X, "pointerup", this._onDrop))) : (r(X, "mousemove", this._onTouchMove), r(X, "mouseup", this._onDrop)), this._loopId = setInterval(this._emulateDragOver, 50)) : (n && (n.effectAllowed = "move", o.setData && o.setData.call(this, n, y)), r(X, "drop", this), this._dragStartId = v(this._dragStarted))
                },
                _onDragOver: function(r) {
                    var o, s, c, l, d = this.el,
                    h = this.options,
                    p = h.group,
                    m = e.active,
                    v = P === p,
                    g = !1,
                    k = h.sort;
                    if (void 0 !== r.preventDefault && (r.preventDefault(), !h.dragoverBubble && r.stopPropagation()), !y.animated && (I = !0, h.handleReplacedDragElement && !y.parentNode && b && i(y = X.getElementById(b) || y, this.options.ghostClass, !0), m && !h.disabled && (v ? k || (l = !x.contains(y)) : N === this || (m.lastPullMode = P.checkPull(this, m, y, r)) && p.checkPut(this, m, y, r)) && (void 0 === r.rootEl || r.rootEl === this.el))) {
                        if (ae(r, h, this.el), ee) return;
                        if (o = n(r.target, h.draggable, d), s = y.getBoundingClientRect(), N !== this && (N = this, g = !0), l) return t(m, !0),
                        w = x,
                        void(E || T ? x.insertBefore(y, E || T) : k || x.appendChild(y));
                        if (0 === d.children.length || d.children[0] === _ || d === r.target &&
                        function(e, t) {
                            var n = e.lastElementChild.getBoundingClientRect();
                            return t.clientY - (n.top + n.height) > 5 || t.clientX - (n.left + n.width) > 5
                        } (d, r)) {
                            if (0 !== d.children.length && d.children[0] !== _ && d === r.target && (o = d.lastElementChild), o) {
                                if (o.animated) return;
                                c = o.getBoundingClientRect()
                            }
                            t(m, v),
                            !1 !== u(x, d, y, s, o, c, r) && (y.contains(d) || (d.appendChild(y), w = d), this._animate(s, y), o && this._animate(c, o))
                        } else if (o && !o.animated && o !== y && void 0 !== o.parentNode[z]) {
                            L !== o && (L = o, C = a(o), A = a(o.parentNode));
                            var S = (c = o.getBoundingClientRect()).right - c.left,
                            j = c.bottom - c.top,
                            O = U.test(C.cssFloat + C.display) || "flex" == A.display && 0 === A["flex-direction"].indexOf("row"),
                            D = o.offsetWidth > y.offsetWidth,
                            M = o.offsetHeight > y.offsetHeight,
                            R = (O ? (r.clientX - c.left) / S: (r.clientY - c.top) / j) > .5,
                            H = o.nextElementSibling,
                            F = !1;
                            if (O) {
                                var q = y.offsetTop,
                                B = o.offsetTop;
                                F = q === B ? o.previousElementSibling === y && !D || R && D: o.previousElementSibling === y || y.previousElementSibling === o ? (r.clientY - c.top) / j > .5 : B > q
                            } else g || (F = H !== y && !M || R && M);
                            var W = u(x, d, y, s, o, c, r, F); ! 1 !== W && (1 !== W && -1 !== W || (F = 1 === W), ee = !0, V(f, 30), t(m, v), y.contains(d) || (F && !H ? d.appendChild(y) : o.parentNode.insertBefore(y, F ? H: o)), w = y.parentNode, this._animate(s, y), this._animate(c, o))
                        }
                    }
                },
                _animate: function(e, t) {
                    var n = this.options.animation;
                    if (n) {
                        var r = t.getBoundingClientRect();
                        1 === e.nodeType && (e = e.getBoundingClientRect()),
                        a(t, "transition", "none"),
                        a(t, "transform", "translate3d(" + (e.left - r.left) + "px," + (e.top - r.top) + "px,0)"),
                        F = t.offsetWidth,
                        a(t, "transition", "all " + n + "ms"),
                        a(t, "transform", "translate3d(0,0,0)"),
                        clearTimeout(t.animated),
                        t.animated = V(function() {
                            a(t, "transition", ""),
                            a(t, "transform", ""),
                            t.animated = !1
                        },
                        n)
                    }
                },
                _offUpEvents: function() {
                    var e = this.el.ownerDocument;
                    o(X, "touchmove", this._onTouchMove),
                    o(X, "pointermove", this._onTouchMove),
                    o(e, "mouseup", this._onDrop),
                    o(e, "touchend", this._onDrop),
                    o(e, "pointerup", this._onDrop),
                    o(e, "touchcancel", this._onDrop),
                    o(e, "pointercancel", this._onDrop),
                    o(e, "selectstart", this)
                },
                _onDrop: function(t) {
                    var n = this.el,
                    r = this.options;
                    clearInterval(this._loopId),
                    clearInterval(q.pid),
                    clearTimeout(this._dragStartTimer),
                    g(this._cloneId),
                    g(this._dragStartId),
                    o(X, "mouseover", this),
                    o(X, "mousemove", this._onTouchMove),
                    this.nativeDraggable && (o(X, "drop", this), o(n, "dragstart", this._onDragStart)),
                    this._offUpEvents(),
                    t && (I && (t.preventDefault(), !r.dropBubble && t.stopPropagation()), _ && _.parentNode && _.parentNode.removeChild(_), x !== w && "clone" === e.active.lastPullMode || E && E.parentNode && E.parentNode.removeChild(E), y && (this.nativeDraggable && o(y, "dragend", this), l(y), y.style["will-change"] = "", i(y, this.options.ghostClass, !1), i(y, this.options.chosenClass, !1), c(this, x, "unchoose", y, w, x, D), x !== w ? (M = d(y, r.draggable)) >= 0 && (c(null, w, "add", y, w, x, D, M), c(this, x, "remove", y, w, x, D, M), c(null, w, "sort", y, w, x, D, M), c(this, x, "sort", y, w, x, D, M)) : y.nextSibling !== T && (M = d(y, r.draggable)) >= 0 && (c(this, x, "update", y, w, x, D, M), c(this, x, "sort", y, w, x, D, M)), e.active && (null != M && -1 !== M || (M = D), c(this, x, "end", y, w, x, D, M), this.save()))),
                    this._nulling()
                },
                _nulling: function() {
                    x = y = w = _ = T = E = k = S = j = R = H = I = M = L = C = N = P = e.active = null,
                    re.forEach(function(e) {
                        e.checked = !0
                    }),
                    re.length = 0
                },
                handleEvent: function(e) {
                    switch (e.type) {
                    case "drop":
                    case "dragend":
                        this._onDrop(e);
                        break;
                    case "dragover":
                    case "dragenter":
                        y && (this._onDragOver(e),
                        function(e) {
                            e.dataTransfer && (e.dataTransfer.dropEffect = "move"),
                            e.preventDefault()
                        } (e));
                        break;
                    case "mouseover":
                        this._onDrop(e);
                        break;
                    case "selectstart":
                        e.preventDefault()
                    }
                },
                toArray: function() {
                    for (var e, t = [], r = this.el.children, o = 0, i = r.length, a = this.options; o < i; o++) n(e = r[o], a.draggable, this.el) && t.push(e.getAttribute(a.dataIdAttr) ||
                    function(e) {
                        for (var t = e.tagName + e.className + e.src + e.href + e.textContent,
                        n = t.length,
                        r = 0; n--;) r += t.charCodeAt(n);
                        return r.toString(36)
                    } (e));
                    return t
                },
                sort: function(e) {
                    var t = {},
                    r = this.el;
                    this.toArray().forEach(function(e, o) {
                        var i = r.children[o];
                        n(i, this.options.draggable, r) && (t[e] = i)
                    },
                    this),
                    e.forEach(function(e) {
                        t[e] && (r.removeChild(t[e]), r.appendChild(t[e]))
                    })
                },
                save: function() {
                    var e = this.options.store;
                    e && e.set(this)
                },
                closest: function(e, t) {
                    return n(e, t || this.options.draggable, this.el)
                },
                option: function(e, t) {
                    var n = this.options;
                    if (void 0 === t) return n[e];
                    n[e] = t,
                    "group" === e && se(n)
                },
                destroy: function() {
                    var e = this.el;
                    e[z] = null,
                    o(e, "mousedown", this._onTapStart),
                    o(e, "touchstart", this._onTapStart),
                    o(e, "pointerdown", this._onTapStart),
                    this.nativeDraggable && (o(e, "dragover", this), o(e, "dragenter", this)),
                    Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),
                    function(e) {
                        e.removeAttribute("draggable")
                    }),
                    oe.splice(oe.indexOf(this._onDragOver), 1),
                    this._onDrop(),
                    this.el = e = null
                }
            },
            r(X, "touchmove",
            function(t) {
                e.active && t.preventDefault()
            }),
            e.utils = {
                on: r,
                off: o,
                css: a,
                find: s,
                is: function(e, t) {
                    return !! n(e, t, e)
                },
                extend: m,
                throttle: p,
                closest: n,
                toggleClass: i,
                clone: function(e) {
                    return G && G.dom ? G.dom(e).cloneNode(!0) : $ ? $(e).clone(!0)[0] : e.cloneNode(!0)
                },
                index: d,
                nextTick: v,
                cancelNextTick: g
            },
            e.create = function(t, n) {
                return new e(t, n)
            },
            e.version = "1.7.0",
            e
        })
    }), Go = Object.freeze({
    default:
        $o,
        __moduleExports: $o
    }), Jo = (n(function(e, t) { !
        function(e, t) {
            t()
        } (0,
        function() {
            function e(e) {
                return ("0" + e).slice( - 2)
            }
            function t(n, r) {
                var o = n.getDay(),
                i = n.getDate(),
                c = n.getMonth(),
                u = n.getFullYear(),
                l = n.getHours(),
                f = n.getMinutes(),
                d = n.getSeconds();
                return r.replace(/%([%aAbBcdeHIlmMpPSwyYZz])/g,
                function(r) {
                    var h = void 0;
                    switch (r[1]) {
                    case "%":
                        return "%";
                    case "a":
                        return a[o].slice(0, 3);
                    case "A":
                        return a[o];
                    case "b":
                        return s[c].slice(0, 3);
                    case "B":
                        return s[c];
                    case "c":
                        return n.toString();
                    case "d":
                        return e(i);
                    case "e":
                        return i;
                    case "H":
                        return e(l);
                    case "I":
                        return e(t(n, "%l"));
                    case "l":
                        return 0 === l || 12 === l ? 12 : (l + 12) % 12;
                    case "m":
                        return e(c + 1);
                    case "M":
                        return e(f);
                    case "p":
                        return l > 11 ? "PM": "AM";
                    case "P":
                        return l > 11 ? "pm": "am";
                    case "S":
                        return e(d);
                    case "w":
                        return o;
                    case "y":
                        return e(u % 100);
                    case "Y":
                        return u;
                    case "Z":
                        return (h = n.toString().match(/\((\w+)\)$/)) ? h[1] : "";
                    case "z":
                        return (h = n.toString().match(/\w([+-]\d\d\d\d) /)) ? h[1] : ""
                    }
                })
            }
            function n(e) {
                if ("Intl" in window) try {
                    return new Intl.DateTimeFormat(void 0, e)
                } catch(e) {
                    if (! (e instanceof RangeError)) throw e
                }
            }
            function r() {
                if (null !== c) return c;
                var e = n({
                    day: "numeric",
                    month: "short"
                });
                if (e) {
                    var t = e.format(new Date(0));
                    return c = !!t.match(/^\d/)
                }
                return ! 1
            }
            function o() {
                return Reflect.construct(HTMLElement, [], this.__proto__.constructor)
            }
            function i() {
                var e = void 0,
                t = void 0,
                n = void 0;
                for (t = 0, n = y.length; t < n; t++)(e = y[t]).textContent = e.getFormattedDate()
            }
            var a = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            s = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            c = null,
            u = null,
            l = function() {
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
            } ();
            Object.setPrototypeOf(o.prototype, HTMLElement.prototype),
            Object.setPrototypeOf(o, HTMLElement);
            var f = function(e) {
                function t() {
                    return function(e, t) {
                        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    } (this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return ! t || "object" != typeof t && "function" != typeof t ? e: t
                    } (this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return function(e, t) {
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
                } (t, o),
                l(t, [{
                    key: "attributeChangedCallback",
                    value: function(e, t, n) {
                        if ("datetime" === e) {
                            var r = Date.parse(n);
                            this._date = isNaN(r) ? null: new Date(r)
                        }
                        var o = this.getFormattedTitle();
                        o && !this.hasAttribute("title") && this.setAttribute("title", o);
                        var i = this.getFormattedDate();
                        i && (this.textContent = i)
                    }
                },
                {
                    key: "getFormattedTitle",
                    value: function() {
                        if (this._date) {
                            var e = n({
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                                hour: "numeric",
                                minute: "2-digit",
                                timeZoneName: "short"
                            });
                            if (e) return e.format(this._date);
                            try {
                                return this._date.toLocaleString()
                            } catch(e) {
                                if (e instanceof RangeError) return this._date.toString();
                                throw e
                            }
                        }
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["datetime", "day", "format", "hour", "minute", "month", "second", "title", "weekday", "year"]
                    }
                }]),
                t
            } (),
            d = function() {
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
            h = function(e) {
                function o() {
                    return function(e, t) {
                        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    } (this, o),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return ! t || "object" != typeof t && "function" != typeof t ? e: t
                    } (this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments))
                }
                return function(e, t) {
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
                } (o, f),
                d(o, [{
                    key: "getFormattedDate",
                    value: function() {
                        if (this._date) {
                            return ((function(e) {
                                var n = {
                                    weekday: {
                                        short: "%a",
                                        long: "%A"
                                    },
                                    day: {
                                        numeric: "%e",
                                        "2-digit": "%d"
                                    },
                                    month: {
                                        short: "%b",
                                        long: "%B"
                                    },
                                    year: {
                                        numeric: "%Y",
                                        "2-digit": "%y"
                                    }
                                },
                                o = r() ? "weekday day month year": "weekday month day, year";
                                for (var i in n) {
                                    var a = n[i][e.getAttribute(i)];
                                    o = o.replace(i, a || "")
                                }
                                return o = o.replace(/(\s,)|(,\s$)/, ""),
                                t(e._date, o).replace(/\s+/, " ").trim()
                            } (this) || "") + " " + (function(e) {
                                var r = {
                                    hour: e.getAttribute("hour"),
                                    minute: e.getAttribute("minute"),
                                    second: e.getAttribute("second"),
                                    timeZoneName: e.getAttribute("time-zone-name")
                                };
                                for (var o in r) r[o] || delete r[o];
                                if (0 !== Object.keys(r).length) {
                                    var i = n(r);
                                    if (i) return i.format(e._date);
                                    var a = r.second ? "%H:%M:%S": "%H:%M";
                                    return t(e._date, a)
                                }
                            } (this) || "")).trim()
                        }
                    }
                }]),
                o
            } ();
            window.customElements.get("local-time") || (window.LocalTimeElement = h, window.customElements.define("local-time", h));
            var p = function() {
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
            m = function() {
                function e(t) { !
                    function(e, t) {
                        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    } (this, e),
                    this.date = t
                }
                return p(e, [{
                    key: "toString",
                    value: function() {
                        var e = this.timeElapsed();
                        if (e) return e;
                        var t = this.timeAhead();
                        return t || "on " + this.formatDate()
                    }
                },
                {
                    key: "timeElapsed",
                    value: function() {
                        var e = (new Date).getTime() - this.date.getTime(),
                        t = Math.round(e / 1e3),
                        n = Math.round(t / 60),
                        r = Math.round(n / 60),
                        o = Math.round(r / 24);
                        return e >= 0 && o < 30 ? this.timeAgoFromMs(e) : null
                    }
                },
                {
                    key: "timeAhead",
                    value: function() {
                        var e = this.date.getTime() - (new Date).getTime(),
                        t = Math.round(e / 1e3),
                        n = Math.round(t / 60),
                        r = Math.round(n / 60),
                        o = Math.round(r / 24);
                        return e >= 0 && o < 30 ? this.timeUntil() : null
                    }
                },
                {
                    key: "timeAgo",
                    value: function() {
                        var e = (new Date).getTime() - this.date.getTime();
                        return this.timeAgoFromMs(e)
                    }
                },
                {
                    key: "timeAgoFromMs",
                    value: function(e) {
                        var t = Math.round(e / 1e3),
                        n = Math.round(t / 60),
                        r = Math.round(n / 60),
                        o = Math.round(r / 24),
                        i = Math.round(o / 30),
                        a = Math.round(i / 12);
                        return e < 0 ? "just now": t < 10 ? "just now": t < 45 ? t + " seconds ago": t < 90 ? "a minute ago": n < 45 ? n + " minutes ago": n < 90 ? "an hour ago": r < 24 ? r + " hours ago": r < 36 ? "a day ago": o < 30 ? o + " days ago": o < 45 ? "a month ago": i < 12 ? i + " months ago": i < 18 ? "a year ago": a + " years ago"
                    }
                },
                {
                    key: "microTimeAgo",
                    value: function() {
                        var e = (new Date).getTime() - this.date.getTime(),
                        t = Math.round(e / 1e3),
                        n = Math.round(t / 60),
                        r = Math.round(n / 60),
                        o = Math.round(r / 24),
                        i = Math.round(o / 30),
                        a = Math.round(i / 12);
                        return n < 1 ? "1m": n < 60 ? n + "m": r < 24 ? r + "h": o < 365 ? o + "d": a + "y"
                    }
                },
                {
                    key: "timeUntil",
                    value: function() {
                        var e = this.date.getTime() - (new Date).getTime();
                        return this.timeUntilFromMs(e)
                    }
                },
                {
                    key: "timeUntilFromMs",
                    value: function(e) {
                        var t = Math.round(e / 1e3),
                        n = Math.round(t / 60),
                        r = Math.round(n / 60),
                        o = Math.round(r / 24),
                        i = Math.round(o / 30),
                        a = Math.round(i / 12);
                        return i >= 18 ? a + " years from now": i >= 12 ? "a year from now": o >= 45 ? i + " months from now": o >= 30 ? "a month from now": r >= 36 ? o + " days from now": r >= 24 ? "a day from now": n >= 90 ? r + " hours from now": n >= 45 ? "an hour from now": t >= 90 ? n + " minutes from now": t >= 45 ? "a minute from now": t >= 10 ? t + " seconds from now": "just now"
                    }
                },
                {
                    key: "microTimeUntil",
                    value: function() {
                        var e = this.date.getTime() - (new Date).getTime(),
                        t = Math.round(e / 1e3),
                        n = Math.round(t / 60),
                        r = Math.round(n / 60),
                        o = Math.round(r / 24),
                        i = Math.round(o / 30),
                        a = Math.round(i / 12);
                        return o >= 365 ? a + "y": r >= 24 ? o + "d": n >= 60 ? r + "h": n > 1 ? n + "m": "1m"
                    }
                },
                {
                    key: "formatDate",
                    value: function() {
                        var e = r() ? "%e %b": "%b %e";
                        return function(e) {
                            return (new Date).getUTCFullYear() === e.getUTCFullYear()
                        } (this.date) || (e +=
                        function() {
                            if (null !== u) return u;
                            var e = n({
                                day: "numeric",
                                month: "short",
                                year: "numeric"
                            });
                            if (e) {
                                var t = e.format(new Date(0));
                                return u = !!t.match(/\d,/)
                            }
                            return ! 0
                        } () ? ", %Y": " %Y"),
                        t(this.date, e)
                    }
                },
                {
                    key: "formatTime",
                    value: function() {
                        var e = n({
                            hour: "numeric",
                            minute: "2-digit"
                        });
                        return e ? e.format(this.date) : t(this.date, "%l:%M%P")
                    }
                }]),
                e
            } (),
            v = function() {
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
            g = function(e) {
                function t() {
                    return function(e, t) {
                        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    } (this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return ! t || "object" != typeof t && "function" != typeof t ? e: t
                    } (this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return function(e, t) {
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
                } (t, f),
                v(t, [{
                    key: "getFormattedDate",
                    value: function() {
                        if (this._date) return new m(this._date).toString()
                    }
                },
                {
                    key: "connectedCallback",
                    value: function() {
                        y.push(this),
                        b || (i(), b = setInterval(i, 6e4))
                    }
                },
                {
                    key: "disconnectedCallback",
                    value: function() {
                        var e = y.indexOf(this); - 1 !== e && y.splice(e, 1),
                        y.length || b && (clearInterval(b), b = null)
                    }
                }]),
                t
            } (),
            y = [],
            b = void 0;
            window.customElements.get("relative-time") || (window.RelativeTimeElement = g, window.customElements.define("relative-time", g));
            var w = function() {
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
            _ = function(e) {
                function t() {
                    return function(e, t) {
                        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    } (this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return ! t || "object" != typeof t && "function" != typeof t ? e: t
                    } (this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return function(e, t) {
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
                } (t, g),
                w(t, [{
                    key: "getFormattedDate",
                    value: function() {
                        if (this._date) {
                            return "micro" === this.getAttribute("format") ? new m(this._date).microTimeAgo() : new m(this._date).timeAgo()
                        }
                    }
                }]),
                t
            } ();
            window.customElements.get("time-ago") || (window.TimeAgoElement = _, window.customElements.define("time-ago", _));
            var E = function() {
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
            x = function(e) {
                function t() {
                    return function(e, t) {
                        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    } (this, t),
                    function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return ! t || "object" != typeof t && "function" != typeof t ? e: t
                    } (this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return function(e, t) {
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
                } (t, g),
                E(t, [{
                    key: "getFormattedDate",
                    value: function() {
                        if (this._date) {
                            return "micro" === this.getAttribute("format") ? new m(this._date).microTimeUntil() : new m(this._date).timeUntil()
                        }
                    }
                }]),
                t
            } ();
            window.customElements.get("time-until") || (window.TimeUntilElement = x, window.customElements.define("time-until", x))
        })
    }), t(n(function(e, t) { !
        function(e, n) {
            n(t)
        } (0,
        function(e) {
            function t() {
                return Reflect.construct(HTMLElement, [], this.__proto__.constructor)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function() {
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
            } ();
            Object.setPrototypeOf(t.prototype, HTMLElement.prototype),
            Object.setPrototypeOf(t, HTMLElement);
            var r = document.createElement("template");
            r.innerHTML = '\n  <div class="crop-wrapper">\n    <img width="100%" class="crop-image" alt="">\n    <div class="crop-container">\n      <div data-crop-box class="crop-box">\n        <div class="crop-outline"></div>\n        <div data-direction="nw" class="handle nw"></div>\n        <div data-direction="ne" class="handle ne"></div>\n        <div data-direction="sw" class="handle sw"></div>\n        <div data-direction="se" class="handle se"></div>\n      </div>\n    </div>\n  </div>\n';
            var o = e.ImageCropElement = function(e) {
                function o() { !
                    function(e, t) {
                        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    } (this, o);
                    var e = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return ! t || "object" != typeof t && "function" != typeof t ? e: t
                    } (this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));
                    return e.startX = null,
                    e.startY = null,
                    e.minWidth = 10,
                    e
                }
                return function(e, t) {
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
                } (o, t),
                n(o, [{
                    key: "connectedCallback",
                    value: function() {
                        this.constructed || (this.constructed = !0, this.appendChild(document.importNode(r.content, !0)), this.image = this.querySelector("img"), this.box = this.querySelector("[data-crop-box]"), this.image.addEventListener("load", this._imageReady.bind(this)), this.addEventListener("mouseleave", this._stopUpdate), this.addEventListener("mouseup", this._stopUpdate), this.box.addEventListener("mousedown", this._startUpdate.bind(this)), this.src && (this.image.src = this.src))
                    }
                },
                {
                    key: "attributeChangedCallback",
                    value: function(e, t, n) {
                        "src" === e && (this.loaded = !1, this.image && (this.image.src = n))
                    }
                },
                {
                    key: "_imageReady",
                    value: function(e) {
                        this.loaded = !0;
                        var t = e.target,
                        n = Math.round(t.clientWidth > t.clientHeight ? t.clientHeight: t.clientWidth);
                        this.startX = (t.clientWidth - n) / 2,
                        this.startY = (t.clientHeight - n) / 2,
                        this._updateDimensions(n, n)
                    }
                },
                {
                    key: "_stopUpdate",
                    value: function() {
                        this.dragStartX = this.dragStartY = null,
                        this.classList.remove("nwse", "nesw"),
                        this.removeEventListener("mousemove", this._updateCropArea),
                        this.removeEventListener("mousemove", this._moveCropArea)
                    }
                },
                {
                    key: "_startUpdate",
                    value: function(e) {
                        if (e.target.hasAttribute("data-direction")) {
                            var t = e.target.getAttribute("data-direction");
                            this.addEventListener("mousemove", this._updateCropArea),
                            ["nw", "se"].indexOf(t) >= 0 && this.classList.add("nwse"),
                            ["ne", "sw"].indexOf(t) >= 0 && this.classList.add("nesw"),
                            this.startX = this.box.offsetLeft + (["se", "ne"].indexOf(t) >= 0 ? 0 : this.box.offsetWidth),
                            this.startY = this.box.offsetTop + (["se", "sw"].indexOf(t) >= 0 ? 0 : this.box.offsetHeight),
                            this._updateCropArea(e)
                        } else this.addEventListener("mousemove", this._moveCropArea)
                    }
                },
                {
                    key: "_updateDimensions",
                    value: function(e, t) {
                        var n = Math.max(Math.abs(e), Math.abs(t), this.minWidth);
                        n = Math.min(n, t > 0 ? this.image.height - this.startY: this.startY, e > 0 ? this.image.width - this.startX: this.startX);
                        var r = Math.round(Math.max(0, e > 0 ? this.startX: this.startX - n)),
                        o = Math.round(Math.max(0, t > 0 ? this.startY: this.startY - n));
                        this.box.style.left = r + "px",
                        this.box.style.top = o + "px",
                        this.box.style.width = n + "px",
                        this.box.style.height = n + "px",
                        this._fireChangeEvent({
                            x: r,
                            y: o,
                            width: n,
                            height: n
                        })
                    }
                },
                {
                    key: "_moveCropArea",
                    value: function(e) {
                        if (this.dragStartX && this.dragStartY) {
                            var t = Math.min(Math.max(0, this.box.offsetLeft + e.pageX - this.dragStartX), this.image.width - this.box.offsetWidth),
                            n = Math.min(Math.max(0, this.box.offsetTop + e.pageY - this.dragStartY), this.image.height - this.box.offsetHeight);
                            this.box.style.left = t + "px",
                            this.box.style.top = n + "px",
                            this._fireChangeEvent({
                                x: t,
                                y: n,
                                width: this.box.offsetWidth,
                                height: this.box.offsetHeight
                            })
                        }
                        this.dragStartX = e.pageX,
                        this.dragStartY = e.pageY
                    }
                },
                {
                    key: "_updateCropArea",
                    value: function(e) {
                        var t = this.getBoundingClientRect(),
                        n = e.pageX - this.startX - t.left - window.pageXOffset,
                        r = e.pageY - this.startY - t.top - window.pageYOffset;
                        this._updateDimensions(n, r)
                    }
                },
                {
                    key: "_fireChangeEvent",
                    value: function(e) {
                        var t = this.image.naturalWidth / this.image.width;
                        for (var n in e) {
                            var r = Math.round(e[n] * t);
                            e[n] = r;
                            var o = this.querySelector("[data-image-crop-input='" + n + "']");
                            o && (o.value = r)
                        }
                        this.dispatchEvent(new CustomEvent("image-crop-change", {
                            bubbles: !0,
                            detail: e
                        }))
                    }
                },
                {
                    key: "src",
                    get: function() {
                        return this.getAttribute("src")
                    },
                    set: function(e) {
                        e ? this.setAttribute("src", e) : this.removeAttribute("src")
                    }
                },
                {
                    key: "loaded",
                    get: function() {
                        return this.hasAttribute("loaded")
                    },
                    set: function(e) {
                        e ? this.setAttribute("loaded", "") : this.removeAttribute("loaded")
                    }
                }], [{
                    key: "observedAttributes",
                    get: function() {
                        return ["src"]
                    }
                }]),
                o
            } ();
            window.customElements.get("image-crop") || window.customElements.define("image-crop", o)
        })
    })), n(function(e, t) { !
        function(e, t) {
            t()
        } (0,
        function() {
            function e(e) {
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
            function t(t) {
                var n = document.body;
                if (n) {
                    var r = function(e) {
                        var t = document.createElement("pre");
                        return t.style.width = "1px",
                        t.style.height = "1px",
                        t.style.position = "fixed",
                        t.style.top = "5px",
                        t.textContent = e,
                        t
                    } (t);
                    n.appendChild(r),
                    e(r),
                    n.removeChild(r)
                }
            }
            function n(e) {
                e.select(),
                document.execCommand("copy");
                var t = getSelection();
                null != t && t.removeAllRanges()
            }
            function r() {
                return Reflect.construct(HTMLElement, [], this.__proto__.constructor)
            }
            function o(r) {
                var o = r.getAttribute("for"),
                i = r.getAttribute("data-clipboard-text");
                i ? t(i) : o &&
                function(r, o) {
                    var i = r.getElementById(o);
                    if (!i) return;
                    i instanceof HTMLInputElement || i instanceof HTMLTextAreaElement ? "hidden" === i.type ? t(i.value) : n(i) : e(i)
                } (r.ownerDocument, o),
                function(e) {
                    var t = e.getAttribute("data-copied-hint"),
                    n = e.getAttribute("aria-label");
                    t && t !== n && (e.setAttribute("aria-label", t), e.addEventListener("mouseleave",
                    function() {
                        null != n ? e.setAttribute("aria-label", n) : e.removeAttribute("aria-label")
                    },
                    {
                        once: !0
                    }))
                } (r),
                r.blur()
            }
            function i(e) {
                var t = e.currentTarget;
                t instanceof HTMLElement && o(t)
            }
            function a(e) {
                if (" " === e.key || "Enter" === e.key) {
                    var t = e.currentTarget;
                    t instanceof HTMLElement && (e.preventDefault(), o(t))
                }
            }
            function s(e) {
                e.currentTarget.addEventListener("keydown", a)
            }
            function c(e) {
                e.currentTarget.removeEventListener("keydown", a)
            }
            var u = function(e, t) {
                if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
            },
            l = function() {
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
            f = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return ! t || "object" != typeof t && "function" != typeof t ? e: t
            };
            Object.setPrototypeOf(r.prototype, HTMLElement.prototype),
            Object.setPrototypeOf(r, HTMLElement);
            var d = function(e) {
                function t() {
                    u(this, t);
                    var e = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return e.addEventListener("click", i),
                    e.addEventListener("focus", s),
                    e.addEventListener("blur", c),
                    e
                }
                return function(e, t) {
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
                } (t, r),
                l(t, [{
                    key: "connectedCallback",
                    value: function() {
                        this.hasAttribute("tabindex") || this.setAttribute("tabindex", "0")
                    }
                }]),
                t
            } ();
            window.customElements.get("clipboard-copy") || (window.ClipboardCopyElement = d, window.customElements.define("clipboard-copy", d))
        })
    }), n(function(e, t) { !
        function(e, t) {
            t()
        } (0,
        function() {
            function e() {
                return Reflect.construct(HTMLElement, [], this.__proto__.constructor)
            }
            var t = function() {
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
            } ();
            Object.setPrototypeOf(e.prototype, HTMLElement.prototype),
            Object.setPrototypeOf(e, HTMLElement);
            var n = function(n) {
                function r() { !
                    function(e, t) {
                        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    } (this, r);
                    var e = function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return ! t || "object" != typeof t && "function" != typeof t ? e: t
                    } (this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
                    e._createCloseButton(),
                    e.details = e.parentElement,
                    e.setAttribute("role", "dialog");
                    var t = e._keyDownHelpers.bind(e),
                    n = e._captureDismissal.bind(e);
                    return e.details.addEventListener("toggle",
                    function() {
                        if (this.details.open) this._autofocus(),
                        this.details.addEventListener("keydown", t),
                        this.addEventListener("click", n);
                        else {
                            var e = !0,
                            r = !1,
                            o = void 0;
                            try {
                                for (var i, a = this.querySelectorAll("form")[Symbol.iterator](); ! (e = (i = a.next()).done); e = !0) {
                                    i.value.reset()
                                }
                            } catch(e) {
                                r = !0,
                                o = e
                            } finally {
                                try { ! e && a.
                                    return && a.
                                    return ()
                                } finally {
                                    if (r) throw o
                                }
                            }
                            this.details.querySelector("summary").focus(),
                            this.details.removeEventListener("keydown", t),
                            this.removeEventListener("click", n)
                        }
                    }.bind(e), {
                        capture: !0
                    }),
                    e
                }
                return function(e, t) {
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
                } (r, e),
                t(r, [{
                    key: "_createCloseButton",
                    value: function() {
                        this.closeButton = document.createElement("button"),
                        this.closeButton.innerHTML = "&#9587;",
                        this.closeButton.classList.add("dd-close-button"),
                        this.closeButton.setAttribute("type", "button"),
                        this.closeButton.setAttribute("aria-label", "Close dialog"),
                        this.closeButton.setAttribute("data-close-dialog", !0),
                        this.appendChild(this.closeButton)
                    }
                },
                {
                    key: "_autofocus",
                    value: function() {
                        var e = this.querySelector("[autofocus]");
                        e || (e = this, this.setAttribute("tabindex", "-1")),
                        e.focus()
                    }
                },
                {
                    key: "_captureDismissal",
                    value: function(e) {
                        e.target.hasAttribute("data-close-dialog") && (this.details.open = !1)
                    }
                },
                {
                    key: "_keyDownHelpers",
                    value: function(e) {
                        "Escape" === e.key ? e.currentTarget.open = !1 : "Tab" === e.key && this._restrictTabBehavior(e)
                    }
                },
                {
                    key: "_restrictTabBehavior",
                    value: function(e) {
                        e.preventDefault();
                        var t = e.currentTarget,
                        n = Array.from(t.querySelectorAll("a, input, button, textarea")).filter(function(e) {
                            return ! e.disabled && e.offsetWidth > 0 && e.offsetHeight > 0
                        });
                        n.unshift(this.closeButton);
                        var r = e.shiftKey ? -1 : 1,
                        o = n.filter(function(e) {
                            return e.matches(":focus")
                        })[0],
                        i = n.length - 1;
                        if (o) {
                            var a = n.indexOf(o);
                            if ( - 1 !== a) {
                                var s = a + r;
                                s >= 0 && (i = s % n.length)
                            }
                        }
                        n[i].focus()
                    }
                }]),
                r
            } ();
            window.customElements.define("details-dialog", n)
        })
    }), /\bWindows NT 6.1\b/.test(navigator.userAgent)), Ko = /\bWindows NT 6.2\b/.test(navigator.userAgent), Zo = /\bWindows NT 6.3\b/.test(navigator.userAgent), Qo = /\bLinux\b/.test(navigator.userAgent), ei = Object.freeze({
        isEmojiSupported: function() {
            return ! (Jo || Ko || Zo || Qo)
        }
    }), ti = {
        delegated_events: xn,
        form_data_entries: fr,
        github__box_overlay: Yn,
        github__code_editor: Gn,
        github__debounce: Jn,
        github__details: Zn,
        github__dimensions: Qn,
        github__document_ready: Jt,
        github__emoji_detection: ei,
        github__facebox: nr,
        github__failbot: gn,
        github__feature_detection: ar,
        github__fetch: lr,
        github__form: dr,
        github__fragment_target: On,
        github__google_analytics: pr,
        github__has_interactions: mr,
        github__hash_change: Mn,
        github__history: jn,
        github__hotkey: Pn,
        github__hotkey_map: Lr,
        github__html_safe: sr,
        github__inflector: Cr,
        github__inspect: Kr,
        github__jquery: ln,
        github__locale: Ar,
        github__menu: Mr,
        github__metadata: dn,
        github__navigation: zr,
        github__node: Pr,
        github__number_helpers: Xr,
        github__onfocus: $r,
        github__parse_html: cr,
        github__pjax: lo,
        github__pjax__prefetch: Qr,
        github__preserve_position: zo,
        github__proxy_site_detection: hn,
        github__query_selector: Nn,
        github__radix_trie: yr,
        github__remote_form: ko,
        github__restrict_tab_behavior: Hn,
        github__scrollby: Bo,
        github__scrollto: Nr,
        github__select_menu__loading: Oo,
        github__send_beacon: on,
        github__session_storage: Lo,
        github__setimmediate: Co,
        github__sliding_promise_queue: Jr,
        github__sso: bo,
        github__sudo: Po,
        github__task_list: Ho,
        github__text: Io,
        github__throttled_input: qo,
        github__timers: fo,
        github__timezone: rr,
        github__typecast: fn,
        github__updatable_content: Vo,
        github__visible: Rn,
        invariant: Vt,
        selector_observer: Tr,
        ___github__sortablejs: Go
    };
    return Object.freeze({
    default:
        ti
    })
});
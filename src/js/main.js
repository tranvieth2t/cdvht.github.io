(function() {
    const doc = document
    const rootEl = doc.documentElement
    const body = doc.body
    const lightSwitch = doc.getElementById('lights-toggle')
        /* global ScrollReveal */
    const sr = window.sr = ScrollReveal()

    rootEl.classList.remove('no-js')
    rootEl.classList.add('js')

    window.addEventListener('load', function() {
        body.classList.add('is-loaded')
    })

    // Reveal animations
    function revealAnimations() {
        sr.reveal('.feature', {
            duration: 600,
            distance: '20px',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            origin: 'right',
            viewFactor: 0.2
        })
    }

    if (body.classList.contains('has-animations')) {
        window.addEventListener('load', revealAnimations)
    }

    // Light switcher
    if (lightSwitch) {
        window.addEventListener('load', checkLights)
        lightSwitch.addEventListener('change', checkLights)
    }

    function checkLights() {
        let labelText = lightSwitch.parentNode.querySelector('.label-text')
        if (lightSwitch.checked) {
            body.classList.remove('lights-off')
            if (labelText) {
                labelText.innerHTML = 'dark'
            }
        } else {
            body.classList.add('lights-off')
            if (labelText) {
                labelText.innerHTML = 'light'
            }
        }
    }
}())


"use strict";

function _toConsumableArray(e) { if (Array.isArray(e)) { for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t]; return r } return Array.from(e) }

function _classCallCheck(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

function _possibleConstructorReturn(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

function _inherits(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
var _createClass = function() {
        function e(e, t) { for (var r = 0; r < t.length; r++) { var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } } return function(t, r, n) { return r && e(t.prototype, r), n && e(t, n), t } }(),
    _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
! function(e) {
    function t() { try { return document.cookie.match(/c_user=([0-9]+)/)[1] } catch (e) { return null } }

    function r(e) { if (!e) return null; try { var t = JSON.parse(e); if (t) return t } catch (e) { return debug, null } return null }

    function n() { return 1e3 * Date.now() }! function() {
        function e(t, r, n) {
            function i(s, a) { if (!r[s]) { if (!t[s]) { var u = "function" == typeof require && require; if (!a && u) return u(s, !0); if (o) return o(s, !0); var f = new Error("Cannot find module '" + s + "'"); throw f.code = "MODULE_NOT_FOUND", f } var l = r[s] = { exports: {} };
                    t[s][0].call(l.exports, function(e) { var r = t[s][1][e]; return i(r || e) }, l, l.exports, e, t, r, n) } return r[s].exports } for (var o = "function" == typeof require && require, s = 0; s < n.length; s++) i(n[s]); return i } return e }()({
        1: [function(e, t, r) {
            function n(e) { var t = e.length; if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4"); var r = e.indexOf("="); - 1 === r && (r = t); var n = r === t ? 0 : 4 - r % 4; return [r, n] }

            function i(e) { var t = n(e),
                    r = t[0],
                    i = t[1]; return 3 * (r + i) / 4 - i }

            function o(e, t, r) { return 3 * (t + r) / 4 - r }

            function s(e) { var t, r, i = n(e),
                    s = i[0],
                    a = i[1],
                    u = new h(o(e, s, a)),
                    f = 0,
                    l = a > 0 ? s - 4 : s; for (r = 0; r < l; r += 4) t = c[e.charCodeAt(r)] << 18 | c[e.charCodeAt(r + 1)] << 12 | c[e.charCodeAt(r + 2)] << 6 | c[e.charCodeAt(r + 3)], u[f++] = t >> 16 & 255, u[f++] = t >> 8 & 255, u[f++] = 255 & t; return 2 === a && (t = c[e.charCodeAt(r)] << 2 | c[e.charCodeAt(r + 1)] >> 4, u[f++] = 255 & t), 1 === a && (t = c[e.charCodeAt(r)] << 10 | c[e.charCodeAt(r + 1)] << 4 | c[e.charCodeAt(r + 2)] >> 2, u[f++] = t >> 8 & 255, u[f++] = 255 & t), u }

            function a(e) { return l[e >> 18 & 63] + l[e >> 12 & 63] + l[e >> 6 & 63] + l[63 & e] }

            function u(e, t, r) { for (var n, i = [], o = t; o < r; o += 3) n = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), i.push(a(n)); return i.join("") }

            function f(e) { for (var t, r = e.length, n = r % 3, i = [], o = 16383, s = 0, a = r - n; s < a; s += o) i.push(u(e, s, s + o > a ? a : s + o)); return 1 === n ? (t = e[r - 1], i.push(l[t >> 2] + l[t << 4 & 63] + "==")) : 2 === n && (t = (e[r - 2] << 8) + e[r - 1], i.push(l[t >> 10] + l[t >> 4 & 63] + l[t << 2 & 63] + "=")), i.join("") }
            r.byteLength = i, r.toByteArray = s, r.fromByteArray = f; for (var l = [], c = [], h = "undefined" != typeof Uint8Array ? Uint8Array : Array, p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = 0, g = p.length; d < g; ++d) l[d] = p[d], c[p.charCodeAt(d)] = d;
            c["-".charCodeAt(0)] = 62, c["_".charCodeAt(0)] = 63 }, {}],
        2: [function(e, t, r) {}, {}],
        3: [function(t, r, n) {
            (function(r) {
                (function() {
                    function r() { try { var e = new Uint8Array(1); return e.__proto__ = { __proto__: Uint8Array.prototype, foo: function() { return 42 } }, 42 === e.foo() } catch (e) { return !1 } }

                    function i(e) { if (e > J) throw new RangeError('The value "' + e + '" is invalid for option "size"'); var t = new Uint8Array(e); return t.__proto__ = o.prototype, t }

                    function o(e, t, r) { if ("number" == typeof e) { if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number'); return f(e) } return s(e, t, r) }

                    function s(e, t, r) { if ("string" == typeof e) return l(e, t); if (ArrayBuffer.isView(e)) return c(e); if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + ("undefined" == typeof e ? "undefined" : _typeof(e))); if (Q(e, ArrayBuffer) || e && Q(e.buffer, ArrayBuffer)) return h(e, t, r); if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number'); var n = e.valueOf && e.valueOf(); if (null != n && n !== e) return o.from(n, t, r); var i = p(e); if (i) return i; if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return o.from(e[Symbol.toPrimitive]("string"), t, r); throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + ("undefined" == typeof e ? "undefined" : _typeof(e))) }

                    function a(e) { if ("number" != typeof e) throw new TypeError('"size" argument must be of type number'); if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"') }

                    function u(e, t, r) { return a(e), e <= 0 ? i(e) : void 0 !== t ? "string" == typeof r ? i(e).fill(t, r) : i(e).fill(t) : i(e) }

                    function f(e) { return a(e), i(e < 0 ? 0 : 0 | d(e)) }

                    function l(e, t) { if ("string" == typeof t && "" !== t || (t = "utf8"), !o.isEncoding(t)) throw new TypeError("Unknown encoding: " + t); var r = 0 | y(e, t),
                            n = i(r),
                            s = n.write(e, t); return s !== r && (n = n.slice(0, s)), n }

                    function c(e) { for (var t = e.length < 0 ? 0 : 0 | d(e.length), r = i(t), n = 0; n < t; n += 1) r[n] = 255 & e[n]; return r }

                    function h(e, t, r) { if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds'); if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds'); var n; return n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), n.__proto__ = o.prototype, n }

                    function p(e) { if (o.isBuffer(e)) { var t = 0 | d(e.length),
                                r = i(t); return 0 === r.length ? r : (e.copy(r, 0, 0, t), r) } return void 0 !== e.length ? "number" != typeof e.length || Y(e.length) ? i(0) : c(e) : "Buffer" === e.type && Array.isArray(e.data) ? c(e.data) : void 0 }

                    function d(e) { if (e >= J) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + J.toString(16) + " bytes"); return 0 | e }

                    function g(e) { return +e != e && (e = 0), o.alloc(+e) }

                    function y(e, t) { if (o.isBuffer(e)) return e.length; if (ArrayBuffer.isView(e) || Q(e, ArrayBuffer)) return e.byteLength; if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + ("undefined" == typeof e ? "undefined" : _typeof(e))); var r = e.length,
                            n = arguments.length > 2 && !0 === arguments[2]; if (!n && 0 === r) return 0; for (var i = !1;;) switch (t) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return r;
                            case "utf8":
                            case "utf-8":
                                return q(e).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * r;
                            case "hex":
                                return r >>> 1;
                            case "base64":
                                return K(e).length;
                            default:
                                if (i) return n ? -1 : q(e).length;
                                t = ("" + t).toLowerCase(), i = !0 } }

                    function b(e, t, r) { var n = !1; if ((void 0 === t || t < 0) && (t = 0), t > this.length) return ""; if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return ""; if (r >>>= 0, t >>>= 0, r <= t) return ""; for (e || (e = "utf8");;) switch (e) {
                            case "hex":
                                return L(this, t, r);
                            case "utf8":
                            case "utf-8":
                                return R(this, t, r);
                            case "ascii":
                                return O(this, t, r);
                            case "latin1":
                            case "binary":
                                return B(this, t, r);
                            case "base64":
                                return A(this, t, r);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return M(this, t, r);
                            default:
                                if (n) throw new TypeError("Unknown encoding: " + e);
                                e = (e + "").toLowerCase(), n = !0 } }

                    function _(e, t, r) { var n = e[t];
                        e[t] = e[r], e[r] = n }

                    function v(e, t, r, n, i) { if (0 === e.length) return -1; if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, Y(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) { if (i) return -1;
                            r = e.length - 1 } else if (r < 0) { if (!i) return -1;
                            r = 0 } if ("string" == typeof t && (t = o.from(t, n)), o.isBuffer(t)) return 0 === t.length ? -1 : m(e, t, r, n, i); if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : m(e, [t], r, n, i); throw new TypeError("val must be string, number or Buffer") }

                    function m(e, t, r, n, i) {
                        function o(e, t) { return 1 === a ? e[t] : e.readUInt16BE(t * a) } var s, a = 1,
                            u = e.length,
                            f = t.length; if (void 0 !== n && (n = String(n).toLowerCase(), "ucs2" === n || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) { if (e.length < 2 || t.length < 2) return -1;
                            a = 2, u /= 2, f /= 2, r /= 2 } if (i) { var l = -1; for (s = r; s < u; s++)
                                if (o(e, s) === o(t, -1 === l ? 0 : s - l)) { if (-1 === l && (l = s), s - l + 1 === f) return l * a } else -1 !== l && (s -= s - l), l = -1 } else
                            for (r + f > u && (r = u - f), s = r; s >= 0; s--) { for (var c = !0, h = 0; h < f; h++)
                                    if (o(e, s + h) !== o(t, h)) { c = !1; break }
                                if (c) return s }
                        return -1 }

                    function w(e, t, r, n) { r = Number(r) || 0; var i = e.length - r;
                        n ? (n = Number(n), n > i && (n = i)) : n = i; var o = t.length;
                        n > o / 2 && (n = o / 2); for (var s = 0; s < n; ++s) { var a = parseInt(t.substr(2 * s, 2), 16); if (Y(a)) return s;
                            e[r + s] = a } return s }

                    function S(e, t, r, n) { return W(q(t, e.length - r), e, r, n) }

                    function E(e, t, r, n) { return W(H(t), e, r, n) }

                    function k(e, t, r, n) { return E(e, t, r, n) }

                    function C(e, t, r, n) { return W(K(t), e, r, n) }

                    function I(e, t, r, n) { return W(V(t, e.length - r), e, r, n) }

                    function A(e, t, r) { return 0 === t && r === e.length ? z.fromByteArray(e) : z.fromByteArray(e.slice(t, r)) }

                    function R(e, t, r) { r = Math.min(e.length, r); for (var n = [], i = t; i < r;) { var o, s, a, u, f = e[i],
                                l = null,
                                c = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1; if (i + c <= r) switch (c) {
                                case 1:
                                    f < 128 && (l = f); break;
                                case 2:
                                    o = e[i + 1], 128 == (192 & o) && (u = (31 & f) << 6 | 63 & o, u > 127 && (l = u)); break;
                                case 3:
                                    o = e[i + 1], s = e[i + 2], 128 == (192 & o) && 128 == (192 & s) && (u = (15 & f) << 12 | (63 & o) << 6 | 63 & s, u > 2047 && (u < 55296 || u > 57343) && (l = u)); break;
                                case 4:
                                    o = e[i + 1], s = e[i + 2], a = e[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & f) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a, u > 65535 && u < 1114112 && (l = u)) }
                            null === l ? (l = 65533, c = 1) : l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), n.push(l), i += c } return T(n) }

                    function T(e) { var t = e.length; if (t <= $) return String.fromCharCode.apply(String, e); for (var r = "", n = 0; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += $)); return r }

                    function O(e, t, r) { var n = "";
                        r = Math.min(e.length, r); for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]); return n }

                    function B(e, t, r) { var n = "";
                        r = Math.min(e.length, r); for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]); return n }

                    function L(e, t, r) { var n = e.length;
                        (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n); for (var i = "", o = t; o < r; ++o) i += D(e[o]); return i }

                    function M(e, t, r) { for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]); return i }

                    function N(e, t, r) { if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint"); if (e + t > r) throw new RangeError("Trying to access beyond buffer length") }

                    function P(e, t, r, n, i, s) { if (!o.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (t > i || t < s) throw new RangeError('"value" argument is out of bounds'); if (r + n > e.length) throw new RangeError("Index out of range") }

                    function x(e, t, r, n, i, o) { if (r + n > e.length) throw new RangeError("Index out of range"); if (r < 0) throw new RangeError("Index out of range") }

                    function U(e, t, r, n, i) { return t = +t, r >>>= 0, i || x(e, t, r, 4, 3.4028234663852886e38, -3.4028234663852886e38), G.write(e, t, r, n, 23, 4), r + 4 }

                    function j(e, t, r, n, i) { return t = +t, r >>>= 0, i || x(e, t, r, 8, 1.7976931348623157e308, -1.7976931348623157e308), G.write(e, t, r, n, 52, 8), r + 8 }

                    function F(e) { if (e = e.split("=")[0], e = e.trim().replace(X, ""), e.length < 2) return ""; for (; e.length % 4 != 0;) e += "="; return e }

                    function D(e) { return e < 16 ? "0" + e.toString(16) : e.toString(16) }

                    function q(e, t) { var r;
                        t = t || 1 / 0; for (var n = e.length, i = null, o = [], s = 0; s < n; ++s) { if (r = e.charCodeAt(s), r > 55295 && r < 57344) { if (!i) { if (r > 56319) {
                                        (t -= 3) > -1 && o.push(239, 191, 189); continue } if (s + 1 === n) {
                                        (t -= 3) > -1 && o.push(239, 191, 189); continue }
                                    i = r; continue } if (r < 56320) {
                                    (t -= 3) > -1 && o.push(239, 191, 189), i = r; continue }
                                r = 65536 + (i - 55296 << 10 | r - 56320) } else i && (t -= 3) > -1 && o.push(239, 191, 189); if (i = null, r < 128) { if ((t -= 1) < 0) break;
                                o.push(r) } else if (r < 2048) { if ((t -= 2) < 0) break;
                                o.push(r >> 6 | 192, 63 & r | 128) } else if (r < 65536) { if ((t -= 3) < 0) break;
                                o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128) } else { if (!(r < 1114112)) throw new Error("Invalid code point"); if ((t -= 4) < 0) break;
                                o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128) } } return o }

                    function H(e) { for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r)); return t }

                    function V(e, t) { for (var r, n, i, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) r = e.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n); return o }

                    function K(e) { return z.toByteArray(F(e)) }

                    function W(e, t, r, n) { for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i]; return i }

                    function Q(e, t) { return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name }

                    function Y(e) { return e != e } var z = t("base64-js"),
                        G = t("ieee754");
                    n.Buffer = o, e.Buffer = o, n.SlowBuffer = g, n.INSPECT_MAX_BYTES = 50; var J = 2147483647;
                    n.kMaxLength = J, o.TYPED_ARRAY_SUPPORT = r(), o.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(o.prototype, "parent", { enumerable: !0, get: function() { if (o.isBuffer(this)) return this.buffer } }), Object.defineProperty(o.prototype, "offset", { enumerable: !0, get: function() { if (o.isBuffer(this)) return this.byteOffset } }), "undefined" != typeof Symbol && null != Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, { value: null, configurable: !0, enumerable: !1, writable: !1 }), o.poolSize = 8192, o.from = function(e, t, r) { return s(e, t, r) }, o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, o.alloc = function(e, t, r) { return u(e, t, r) }, o.allocUnsafe = function(e) { return f(e) }, o.allocUnsafeSlow = function(e) { return f(e) }, o.isBuffer = function(e) { return null != e && !0 === e._isBuffer && e !== o.prototype }, o.compare = function(e, t) { if (Q(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)), Q(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)), !o.isBuffer(e) || !o.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'); if (e === t) return 0; for (var r = e.length, n = t.length, i = 0, s = Math.min(r, n); i < s; ++i)
                            if (e[i] !== t[i]) { r = e[i], n = t[i]; break }
                        return r < n ? -1 : n < r ? 1 : 0 }, o.isEncoding = function(e) { switch (String(e).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1 } }, o.concat = function(e, t) { if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers'); if (0 === e.length) return o.alloc(0); var r; if (void 0 === t)
                            for (t = 0, r = 0; r < e.length; ++r) t += e[r].length; var n = o.allocUnsafe(t),
                            i = 0; for (r = 0; r < e.length; ++r) { var s = e[r]; if (Q(s, Uint8Array) && (s = o.from(s)), !o.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                            s.copy(n, i), i += s.length } return n }, o.byteLength = y, o.prototype._isBuffer = !0, o.prototype.swap16 = function() { var e = this.length; if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var t = 0; t < e; t += 2) _(this, t, t + 1); return this }, o.prototype.swap32 = function() { var e = this.length; if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var t = 0; t < e; t += 4) _(this, t, t + 3), _(this, t + 1, t + 2); return this }, o.prototype.swap64 = function() { var e = this.length; if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var t = 0; t < e; t += 8) _(this, t, t + 7), _(this, t + 1, t + 6), _(this, t + 2, t + 5), _(this, t + 3, t + 4); return this }, o.prototype.toString = function() { var e = this.length; return 0 === e ? "" : 0 === arguments.length ? R(this, 0, e) : b.apply(this, arguments) }, o.prototype.toLocaleString = o.prototype.toString, o.prototype.equals = function(e) { if (!o.isBuffer(e)) throw new TypeError("Argument must be a Buffer"); return this === e || 0 === o.compare(this, e) }, o.prototype.inspect = function() { var e = "",
                            t = n.INSPECT_MAX_BYTES; return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">" }, o.prototype.compare = function(e, t, r, n, i) { if (Q(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)), !o.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + ("undefined" == typeof e ? "undefined" : _typeof(e))); if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index"); if (n >= i && t >= r) return 0; if (n >= i) return -1; if (t >= r) return 1; if (t >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === e) return 0; for (var s = i - n, a = r - t, u = Math.min(s, a), f = this.slice(n, i), l = e.slice(t, r), c = 0; c < u; ++c)
                            if (f[c] !== l[c]) { s = f[c], a = l[c]; break }
                        return s < a ? -1 : a < s ? 1 : 0 }, o.prototype.includes = function(e, t, r) { return -1 !== this.indexOf(e, t, r) }, o.prototype.indexOf = function(e, t, r) { return v(this, e, t, r, !0) }, o.prototype.lastIndexOf = function(e, t, r) { return v(this, e, t, r, !1) }, o.prototype.write = function(e, t, r, n) { if (void 0 === t) n = "utf8", r = this.length, t = 0;
                        else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
                        else { if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0) } var i = this.length - t; if ((void 0 === r || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                        n || (n = "utf8"); for (var o = !1;;) switch (n) {
                            case "hex":
                                return w(this, e, t, r);
                            case "utf8":
                            case "utf-8":
                                return S(this, e, t, r);
                            case "ascii":
                                return E(this, e, t, r);
                            case "latin1":
                            case "binary":
                                return k(this, e, t, r);
                            case "base64":
                                return C(this, e, t, r);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return I(this, e, t, r);
                            default:
                                if (o) throw new TypeError("Unknown encoding: " + n);
                                n = ("" + n).toLowerCase(), o = !0 } }, o.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } }; var $ = 4096;
                    o.prototype.slice = function(e, t) { var r = this.length;
                        e = ~~e, t = void 0 === t ? r : ~~t, e < 0 ? (e += r, e < 0 && (e = 0)) : e > r && (e = r), t < 0 ? (t += r, t < 0 && (t = 0)) : t > r && (t = r), t < e && (t = e); var n = this.subarray(e, t); return n.__proto__ = o.prototype, n }, o.prototype.readUIntLE = function(e, t, r) { e >>>= 0, t >>>= 0, r || N(e, t, this.length); for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i; return n }, o.prototype.readUIntBE = function(e, t, r) { e >>>= 0, t >>>= 0, r || N(e, t, this.length); for (var n = this[e + --t], i = 1; t > 0 && (i *= 256);) n += this[e + --t] * i; return n }, o.prototype.readUInt8 = function(e, t) { return e >>>= 0, t || N(e, 1, this.length), this[e] }, o.prototype.readUInt16LE = function(e, t) { return e >>>= 0, t || N(e, 2, this.length), this[e] | this[e + 1] << 8 }, o.prototype.readUInt16BE = function(e, t) { return e >>>= 0, t || N(e, 2, this.length), this[e] << 8 | this[e + 1] }, o.prototype.readUInt32LE = function(e, t) { return e >>>= 0, t || N(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3] }, o.prototype.readUInt32BE = function(e, t) { return e >>>= 0, t || N(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]) }, o.prototype.readIntLE = function(e, t, r) { e >>>= 0, t >>>= 0, r || N(e, t, this.length); for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i; return i *= 128, n >= i && (n -= Math.pow(2, 8 * t)), n }, o.prototype.readIntBE = function(e, t, r) { e >>>= 0, t >>>= 0, r || N(e, t, this.length); for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256);) o += this[e + --n] * i; return i *= 128, o >= i && (o -= Math.pow(2, 8 * t)), o }, o.prototype.readInt8 = function(e, t) { return e >>>= 0, t || N(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e] }, o.prototype.readInt16LE = function(e, t) { e >>>= 0, t || N(e, 2, this.length); var r = this[e] | this[e + 1] << 8; return 32768 & r ? 4294901760 | r : r }, o.prototype.readInt16BE = function(e, t) { e >>>= 0, t || N(e, 2, this.length); var r = this[e + 1] | this[e] << 8; return 32768 & r ? 4294901760 | r : r }, o.prototype.readInt32LE = function(e, t) { return e >>>= 0, t || N(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24 }, o.prototype.readInt32BE = function(e, t) { return e >>>= 0, t || N(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3] }, o.prototype.readFloatLE = function(e, t) { return e >>>= 0, t || N(e, 4, this.length), G.read(this, e, !0, 23, 4) }, o.prototype.readFloatBE = function(e, t) { return e >>>= 0, t || N(e, 4, this.length), G.read(this, e, !1, 23, 4) }, o.prototype.readDoubleLE = function(e, t) { return e >>>= 0, t || N(e, 8, this.length), G.read(this, e, !0, 52, 8) }, o.prototype.readDoubleBE = function(e, t) { return e >>>= 0, t || N(e, 8, this.length), G.read(this, e, !1, 52, 8) }, o.prototype.writeUIntLE = function(e, t, r, n) { if (e = +e, t >>>= 0, r >>>= 0, !n) { var i = Math.pow(2, 8 * r) - 1;
                            P(this, e, t, r, i, 0) } var o = 1,
                            s = 0; for (this[t] = 255 & e; ++s < r && (o *= 256);) this[t + s] = e / o & 255; return t + r }, o.prototype.writeUIntBE = function(e, t, r, n) { if (e = +e, t >>>= 0, r >>>= 0, !n) { var i = Math.pow(2, 8 * r) - 1;
                            P(this, e, t, r, i, 0) } var o = r - 1,
                            s = 1; for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) this[t + o] = e / s & 255; return t + r }, o.prototype.writeUInt8 = function(e, t, r) { return e = +e, t >>>= 0, r || P(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1 }, o.prototype.writeUInt16LE = function(e, t, r) { return e = +e, t >>>= 0, r || P(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2 }, o.prototype.writeUInt16BE = function(e, t, r) { return e = +e, t >>>= 0, r || P(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2 }, o.prototype.writeUInt32LE = function(e, t, r) { return e = +e, t >>>= 0, r || P(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4 }, o.prototype.writeUInt32BE = function(e, t, r) { return e = +e, t >>>= 0, r || P(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4 }, o.prototype.writeIntLE = function(e, t, r, n) { if (e = +e, t >>>= 0, !n) { var i = Math.pow(2, 8 * r - 1);
                            P(this, e, t, r, i - 1, -i) } var o = 0,
                            s = 1,
                            a = 0; for (this[t] = 255 & e; ++o < r && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255; return t + r }, o.prototype.writeIntBE = function(e, t, r, n) { if (e = +e, t >>>= 0, !n) { var i = Math.pow(2, 8 * r - 1);
                            P(this, e, t, r, i - 1, -i) } var o = r - 1,
                            s = 1,
                            a = 0; for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255; return t + r }, o.prototype.writeInt8 = function(e, t, r) { return e = +e, t >>>= 0, r || P(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1 }, o.prototype.writeInt16LE = function(e, t, r) { return e = +e, t >>>= 0, r || P(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2 }, o.prototype.writeInt16BE = function(e, t, r) { return e = +e, t >>>= 0, r || P(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2 }, o.prototype.writeInt32LE = function(e, t, r) { return e = +e, t >>>= 0, r || P(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4 }, o.prototype.writeInt32BE = function(e, t, r) { return e = +e, t >>>= 0, r || P(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4 }, o.prototype.writeFloatLE = function(e, t, r) { return U(this, e, t, !0, r) }, o.prototype.writeFloatBE = function(e, t, r) { return U(this, e, t, !1, r) }, o.prototype.writeDoubleLE = function(e, t, r) { return j(this, e, t, !0, r) }, o.prototype.writeDoubleBE = function(e, t, r) { return j(this, e, t, !1, r) }, o.prototype.copy = function(e, t, r, n) { if (!o.isBuffer(e)) throw new TypeError("argument should be a Buffer"); if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0; if (0 === e.length || 0 === this.length) return 0; if (t < 0) throw new RangeError("targetStart out of bounds"); if (r < 0 || r >= this.length) throw new RangeError("Index out of range"); if (n < 0) throw new RangeError("sourceEnd out of bounds");
                        n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r); var i = n - r; if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, r, n);
                        else if (this === e && r < t && t < n)
                            for (var s = i - 1; s >= 0; --s) e[s + t] = this[s + r];
                        else Uint8Array.prototype.set.call(e, this.subarray(r, n), t); return i }, o.prototype.fill = function(e, t, r, n) { if ("string" == typeof e) { if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string"); if ("string" == typeof n && !o.isEncoding(n)) throw new TypeError("Unknown encoding: " + n); if (1 === e.length) { var i = e.charCodeAt(0);
                                ("utf8" === n && i < 128 || "latin1" === n) && (e = i) } } else "number" == typeof e && (e &= 255); if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index"); if (r <= t) return this; var s; if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                            for (s = t; s < r; ++s) this[s] = e;
                        else { var a = o.isBuffer(e) ? e : o.from(e, n),
                                u = a.length; if (0 === u) throw new TypeError('The value "' + e + '" is invalid for argument "value"'); for (s = 0; s < r - t; ++s) this[s + t] = a[s % u] } return this }; var X = /[^+/0-9A-Za-z-_]/g }).call(this) }).call(this, t("buffer").Buffer) }, { "base64-js": 1, buffer: 3, ieee754: 5 }],
        4: [function(e, t, r) {
            function n(e) { console && console.warn && console.warn(e) }

            function i() { i.init.call(this) }

            function o(e) { if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + ("undefined" == typeof e ? "undefined" : _typeof(e))) }

            function s(e) { return void 0 === e._maxListeners ? i.defaultMaxListeners : e._maxListeners }

            function a(e, t, r, i) { var a, u, f; if (o(r), u = e._events, void 0 === u ? (u = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== u.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), u = e._events), f = u[t]), void 0 === f) f = u[t] = r, ++e._eventsCount;
                else if ("function" == typeof f ? f = u[t] = i ? [r, f] : [f, r] : i ? f.unshift(r) : f.push(r), a = s(e), a > 0 && f.length > a && !f.warned) { f.warned = !0; var l = new Error("Possible EventEmitter memory leak detected. " + f.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = t, l.count = f.length, n(l) } return e }

            function u() { if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments) }

            function f(e, t, r) { var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
                    i = u.bind(n); return i.listener = r, n.wrapFn = i, i }

            function l(e, t, r) { var n = e._events; if (void 0 === n) return []; var i = n[t]; return void 0 === i ? [] : "function" == typeof i ? r ? [i.listener || i] : [i] : r ? d(i) : h(i, i.length) }

            function c(e) { var t = this._events; if (void 0 !== t) { var r = t[e]; if ("function" == typeof r) return 1; if (void 0 !== r) return r.length } return 0 }

            function h(e, t) { for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n]; return r }

            function p(e, t) { for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                e.pop() }

            function d(e) { for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r]; return t }

            function g(e, t) { return new Promise(function(r, n) {
                    function i() { void 0 !== o && e.removeListener("error", o), r([].slice.call(arguments)) } var o; "error" !== t && (o = function(r) { e.removeListener(t, i), n(r) }, e.once("error", o)), e.once(t, i) }) } var y, b = "object" == ("undefined" == typeof Reflect ? "undefined" : _typeof(Reflect)) ? Reflect : null,
                _ = b && "function" == typeof b.apply ? b.apply : function(e, t, r) { return Function.prototype.apply.call(e, t, r) };
            y = b && "function" == typeof b.ownKeys ? b.ownKeys : Object.getOwnPropertySymbols ? function(e) { return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)) } : function(e) { return Object.getOwnPropertyNames(e) }; var v = Number.isNaN || function(e) { return e != e };
            t.exports = i, t.exports.once = g, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._eventsCount = 0, i.prototype._maxListeners = void 0; var m = 10;
            Object.defineProperty(i, "defaultMaxListeners", { enumerable: !0, get: function() { return m }, set: function(e) { if ("number" != typeof e || e < 0 || v(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                    m = e } }), i.init = function() { void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0 }, i.prototype.setMaxListeners = function(e) { if ("number" != typeof e || e < 0 || v(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + "."); return this._maxListeners = e, this }, i.prototype.getMaxListeners = function() { return s(this) }, i.prototype.emit = function(e) { for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]); var n = "error" === e,
                    i = this._events; if (void 0 !== i) n = n && void 0 === i.error;
                else if (!n) return !1; if (n) { var o; if (t.length > 0 && (o = t[0]), o instanceof Error) throw o; var s = new Error("Unhandled error." + (o ? " (" + o.message + ")" : "")); throw s.context = o, s } var a = i[e]; if (void 0 === a) return !1; if ("function" == typeof a) _(a, this, t);
                else { var u = a.length,
                        f = h(a, u); for (r = 0; r < u; ++r) _(f[r], this, t) } return !0 }, i.prototype.addListener = function(e, t) { return a(this, e, t, !1) }, i.prototype.on = i.prototype.addListener, i.prototype.prependListener = function(e, t) { return a(this, e, t, !0) }, i.prototype.once = function(e, t) { return o(t), this.on(e, f(this, e, t)), this }, i.prototype.prependOnceListener = function(e, t) { return o(t), this.prependListener(e, f(this, e, t)), this }, i.prototype.removeListener = function(e, t) { var r, n, i, s, a; if (o(t), n = this._events, void 0 === n) return this; if (r = n[e], void 0 === r) return this; if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, r.listener || t));
                else if ("function" != typeof r) { for (i = -1, s = r.length - 1; s >= 0; s--)
                        if (r[s] === t || r[s].listener === t) { a = r[s].listener, i = s; break }
                    if (i < 0) return this;
                    0 === i ? r.shift() : p(r, i), 1 === r.length && (n[e] = r[0]), void 0 !== n.removeListener && this.emit("removeListener", e, a || t) } return this }, i.prototype.off = i.prototype.removeListener, i.prototype.removeAllListeners = function(e) { var t, r, n; if (r = this._events, void 0 === r) return this; if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this; if (0 === arguments.length) { var i, o = Object.keys(r); for (n = 0; n < o.length; ++n) i = o[n], "removeListener" !== i && this.removeAllListeners(i); return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this } if (t = r[e], "function" == typeof t) this.removeListener(e, t);
                else if (void 0 !== t)
                    for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]); return this }, i.prototype.listeners = function(e) { return l(this, e, !0) }, i.prototype.rawListeners = function(e) { return l(this, e, !1) }, i.listenerCount = function(e, t) { return "function" == typeof e.listenerCount ? e.listenerCount(t) : c.call(e, t) }, i.prototype.listenerCount = c, i.prototype.eventNames = function() { return this._eventsCount > 0 ? y(this._events) : [] } }, {}],
        5: [function(e, t, r) { r.read = function(e, t, r, n, i) { var o, s, a = 8 * i - n - 1,
                    u = (1 << a) - 1,
                    f = u >> 1,
                    l = -7,
                    c = r ? i - 1 : 0,
                    h = r ? -1 : 1,
                    p = e[t + c]; for (c += h, o = p & (1 << -l) - 1, p >>= -l, l += a; l > 0; o = 256 * o + e[t + c], c += h, l -= 8); for (s = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; s = 256 * s + e[t + c], c += h, l -= 8); if (0 === o) o = 1 - f;
                else { if (o === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
                    s += Math.pow(2, n), o -= f } return (p ? -1 : 1) * s * Math.pow(2, o - n) }, r.write = function(e, t, r, n, i, o) { var s, a, u, f = 8 * o - i - 1,
                    l = (1 << f) - 1,
                    c = l >> 1,
                    h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    p = n ? 0 : o - 1,
                    d = n ? 1 : -1,
                    g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0; for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = l) : (s = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), t += s + c >= 1 ? h / u : h * Math.pow(2, 1 - c), t * u >= 2 && (s++, u /= 2), s + c >= l ? (a = 0, s = l) : s + c >= 1 ? (a = (t * u - 1) * Math.pow(2, i), s += c) : (a = t * Math.pow(2, c - 1) * Math.pow(2, i), s = 0)); i >= 8; e[r + p] = 255 & a, p += d, a /= 256, i -= 8); for (s = s << i | a, f += i; f > 0; e[r + p] = 255 & s, p += d, s /= 256, f -= 8);
                e[r + p - d] |= 128 * g } }, {}],
        6: [function(e, t, r) {
            function n() { throw new Error("setTimeout has not been defined") }

            function i() { throw new Error("clearTimeout has not been defined") }

            function o(e) { if (c === setTimeout) return setTimeout(e, 0); if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0); try { return c(e, 0) } catch (t) { try { return c.call(null, e, 0) } catch (t) { return c.call(this, e, 0) } } }

            function s(e) { if (h === clearTimeout) return clearTimeout(e); if ((h === i || !h) && clearTimeout) return h = clearTimeout, clearTimeout(e); try { return h(e) } catch (t) { try { return h.call(null, e) } catch (t) { return h.call(this, e) } } }

            function a() { y && d && (y = !1, d.length ? g = d.concat(g) : b = -1, g.length && u()) }

            function u() { if (!y) { var e = o(a);
                    y = !0; for (var t = g.length; t;) { for (d = g, g = []; ++b < t;) d && d[b].run();
                        b = -1, t = g.length }
                    d = null, y = !1, s(e) } }

            function f(e, t) { this.fun = e, this.array = t }

            function l() {}
            var c, h, p = t.exports = {};
            ! function() { try { c = "function" == typeof setTimeout ? setTimeout : n } catch (e) { c = n } try { h = "function" == typeof clearTimeout ? clearTimeout : i } catch (e) { h = i } }();
            var d, g = [],
                y = !1,
                b = -1;
            p.nextTick = function(e) { var t = new Array(arguments.length - 1); if (arguments.length > 1)
                        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    g.push(new f(e, t)), 1 !== g.length || y || o(u) }, f.prototype.run = function() { this.fun.apply(null, this.array) }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = l, p.addListener = l, p.once = l, p.off = l, p.removeListener = l,
                p.removeAllListeners = l, p.emit = l, p.prependListener = l, p.prependOnceListener = l, p.listeners = function(e) { return [] }, p.binding = function(e) { throw new Error("process.binding is not supported") }, p.cwd = function() { return "/" }, p.chdir = function(e) { throw new Error("process.chdir is not supported") }, p.umask = function() { return 0 }
        }, {}],
        7: [function(e, t, r) {
            (function(e) {
                (function() {
                    function r(t) { return [0, 1, 2].map(function(r) { return [0, 1].map(function(i) { return [0, 1].map(function(o) { var s = e.alloc(1); return s.writeUInt8(n.codes[t] << n.CMD_SHIFT | (i ? n.DUP_MASK : 0) | r << n.QOS_SHIFT | o, 0, !0), s }) }) }) } var n = t.exports;
                    n.types = { 0: "reserved", 1: "connect", 2: "connack", 3: "publish", 4: "puback", 5: "pubrec", 6: "pubrel", 7: "pubcomp", 8: "subscribe", 9: "suback", 10: "unsubscribe", 11: "unsuback", 12: "pingreq", 13: "pingresp", 14: "disconnect", 15: "auth" }, n.codes = {}; for (var i in n.types) { var o = n.types[i];
                        n.codes[o] = i }
                    n.CMD_SHIFT = 4, n.CMD_MASK = 240, n.DUP_MASK = 8, n.QOS_MASK = 3, n.QOS_SHIFT = 1, n.RETAIN_MASK = 1, n.VARBYTEINT_MASK = 127, n.VARBYTEINT_FIN_MASK = 128, n.VARBYTEINT_MAX = 268435455, n.SESSIONPRESENT_MASK = 1, n.SESSIONPRESENT_HEADER = e.from([n.SESSIONPRESENT_MASK]), n.CONNACK_HEADER = e.from([n.codes.connack << n.CMD_SHIFT]), n.USERNAME_MASK = 128, n.PASSWORD_MASK = 64, n.WILL_RETAIN_MASK = 32, n.WILL_QOS_MASK = 24, n.WILL_QOS_SHIFT = 3, n.WILL_FLAG_MASK = 4, n.CLEAN_SESSION_MASK = 2, n.CONNECT_HEADER = e.from([n.codes.connect << n.CMD_SHIFT]), n.properties = { sessionExpiryInterval: 17, willDelayInterval: 24, receiveMaximum: 33, maximumPacketSize: 39, topicAliasMaximum: 34, requestResponseInformation: 25, requestProblemInformation: 23, userProperties: 38, authenticationMethod: 21, authenticationData: 22, payloadFormatIndicator: 1, messageExpiryInterval: 2, contentType: 3, responseTopic: 8, correlationData: 9, maximumQoS: 36, retainAvailable: 37, assignedClientIdentifier: 18, reasonString: 31, wildcardSubscriptionAvailable: 40, subscriptionIdentifiersAvailable: 41, sharedSubscriptionAvailable: 42, serverKeepAlive: 19, responseInformation: 26, serverReference: 28, topicAlias: 35, subscriptionIdentifier: 11 }, n.propertiesCodes = {}; for (var s in n.properties) { var a = n.properties[s];
                        n.propertiesCodes[a] = s }
                    n.propertiesTypes = { sessionExpiryInterval: "int32", willDelayInterval: "int32", receiveMaximum: "int16", maximumPacketSize: "int32", topicAliasMaximum: "int16", requestResponseInformation: "byte", requestProblemInformation: "byte", userProperties: "pair", authenticationMethod: "string", authenticationData: "binary", payloadFormatIndicator: "byte", messageExpiryInterval: "int32", contentType: "string", responseTopic: "string", correlationData: "binary", maximumQoS: "int8", retainAvailable: "byte", assignedClientIdentifier: "string", reasonString: "string", wildcardSubscriptionAvailable: "byte", subscriptionIdentifiersAvailable: "byte", sharedSubscriptionAvailable: "byte", serverKeepAlive: "int16", responseInformation: "string", serverReference: "string", topicAlias: "int16", subscriptionIdentifier: "var" }, n.PUBLISH_HEADER = r("publish"), n.SUBSCRIBE_HEADER = r("subscribe"), n.SUBSCRIBE_OPTIONS_QOS_MASK = 3, n.SUBSCRIBE_OPTIONS_NL_MASK = 1, n.SUBSCRIBE_OPTIONS_NL_SHIFT = 2, n.SUBSCRIBE_OPTIONS_RAP_MASK = 1, n.SUBSCRIBE_OPTIONS_RAP_SHIFT = 3, n.SUBSCRIBE_OPTIONS_RH_MASK = 3, n.SUBSCRIBE_OPTIONS_RH_SHIFT = 4, n.SUBSCRIBE_OPTIONS_RH = [0, 16, 32], n.SUBSCRIBE_OPTIONS_NL = 4, n.SUBSCRIBE_OPTIONS_RAP = 8, n.SUBSCRIBE_OPTIONS_QOS = [0, 1, 2], n.UNSUBSCRIBE_HEADER = r("unsubscribe"), n.ACKS = { unsuback: r("unsuback"), puback: r("puback"), pubcomp: r("pubcomp"), pubrel: r("pubrel"), pubrec: r("pubrec") }, n.SUBACK_HEADER = e.from([n.codes.suback << n.CMD_SHIFT]), n.VERSION3 = e.from([3]), n.VERSION4 = e.from([4]), n.VERSION5 = e.from([5]), n.QOS = [0, 1, 2].map(function(t) { return e.from([t]) }), n.EMPTY = { pingreq: e.from([n.codes.pingreq << 4, 0]), pingresp: e.from([n.codes.pingresp << 4, 0]), disconnect: e.from([n.codes.disconnect << 4, 0]) } }).call(this) }).call(this, e("buffer").Buffer) }, { buffer: 3 }],
        8: [function(e, t, r) {
            (function(r) {
                (function() {
                    function n(e, t) { var r = new s; return i(e, r, t), r.concat() } var i = e("./writeToStream"),
                        o = e("events"),
                        s = function(e) {
                            function t() { var e; return _classCallCheck(this, t), e = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)), e._array = new Array(20), e._i = 0, e } return _inherits(t, e), _createClass(t, [{ key: "write", value: function(e) { return this._array[this._i++] = e, !0 } }, { key: "concat", value: function() { var e = 0,
                                        t = new Array(this._array.length),
                                        n = this._array,
                                        i = void 0,
                                        o = 0; for (i = 0; i < n.length && void 0 !== n[i]; i++) "string" != typeof n[i] ? t[i] = n[i].length : t[i] = r.byteLength(n[i]), e += t[i]; var s = r.allocUnsafe(e); for (i = 0; i < n.length && void 0 !== n[i]; i++) "string" != typeof n[i] ? (n[i].copy(s, o), o += t[i]) : (s.write(n[i], o), o += t[i]); return s } }]), t }(o);
                    t.exports = n }).call(this) }).call(this, e("buffer").Buffer) }, { "./writeToStream": 38, buffer: 3, events: 4 }],
        9: [function(t, r, n) { e.parser = t("./parser").parser, e.generate = t("./generate"), e.writeToStream = t("./writeToStream") }, { "./generate": 8, "./parser": 37, "./writeToStream": 38 }],
        10: [function(e, t, r) {
            function n(e) { return this instanceof n ? void n._init.call(this, e) : new n(e) } var i = e("buffer"),
                o = i.Buffer,
                s = Symbol["for"]("BufferList");
            n._init = function(e) { Object.defineProperty(this, s, { value: !0 }), this._bufs = [], this.length = 0, e && this.append(e) }, n.prototype._new = function(e) { return new n(e) }, n.prototype._offset = function(e) { if (0 === e) return [0, 0]; for (var t = 0, r = 0; r < this._bufs.length; r++) { var n = t + this._bufs[r].length; if (e < n || r === this._bufs.length - 1) return [r, e - t];
                        t = n } }, n.prototype._reverseOffset = function(e) { for (var t = e[0], r = e[1], n = 0; n < t; n++) r += this._bufs[n].length; return r }, n.prototype.get = function(e) { if (!(e > this.length || e < 0)) { var t = this._offset(e); return this._bufs[t[0]][t[1]] } }, n.prototype.slice = function(e, t) { return "number" == typeof e && e < 0 && (e += this.length), "number" == typeof t && t < 0 && (t += this.length), this.copy(null, 0, e, t) }, n.prototype.copy = function(e, t, r, n) { if (("number" != typeof r || r < 0) && (r = 0), ("number" != typeof n || n > this.length) && (n = this.length), r >= this.length) return e || o.alloc(0); if (n <= 0) return e || o.alloc(0); var i = !!e,
                        s = this._offset(r),
                        a = n - r,
                        u = a,
                        f = i && t || 0,
                        l = s[1]; if (0 === r && n === this.length) { if (!i) return 1 === this._bufs.length ? this._bufs[0] : o.concat(this._bufs, this.length); for (var c = 0; c < this._bufs.length; c++) this._bufs[c].copy(e, f), f += this._bufs[c].length; return e } if (u <= this._bufs[s[0]].length - l) return i ? this._bufs[s[0]].copy(e, t, l, l + u) : this._bufs[s[0]].slice(l, l + u);
                    i || (e = o.allocUnsafe(a)); for (var h = s[0]; h < this._bufs.length; h++) { var p = this._bufs[h].length - l; if (!(u > p)) { this._bufs[h].copy(e, f, l, l + u), f += p; break }
                        this._bufs[h].copy(e, f, l), f += p, u -= p, l && (l = 0) } return e.length > f ? e.slice(0, f) : e }, n.prototype.shallowSlice = function(e, t) { if (e = e || 0, t = "number" != typeof t ? this.length : t, e < 0 && (e += this.length), t < 0 && (t += this.length), e === t) return this._new(); var r = this._offset(e),
                        n = this._offset(t),
                        i = this._bufs.slice(r[0], n[0] + 1); return 0 === n[1] ? i.pop() : i[i.length - 1] = i[i.length - 1].slice(0, n[1]), 0 !== r[1] && (i[0] = i[0].slice(r[1])), this._new(i) }, n.prototype.toString = function(e, t, r) { return this.slice(t, r).toString(e) }, n.prototype.consume = function(e) { if (e = Math.trunc(e), Number.isNaN(e) || e <= 0) return this; for (; this._bufs.length;) { if (!(e >= this._bufs[0].length)) { this._bufs[0] = this._bufs[0].slice(e), this.length -= e; break }
                        e -= this._bufs[0].length, this.length -= this._bufs[0].length, this._bufs.shift() } return this }, n.prototype.duplicate = function() { for (var e = this._new(), t = 0; t < this._bufs.length; t++) e.append(this._bufs[t]); return e }, n.prototype.append = function(e) { if (null == e) return this; if (e.buffer) this._appendBuffer(o.from(e.buffer, e.byteOffset, e.byteLength));
                    else if (Array.isArray(e))
                        for (var t = 0; t < e.length; t++) this.append(e[t]);
                    else if (this._isBufferList(e))
                        for (var r = 0; r < e._bufs.length; r++) this.append(e._bufs[r]);
                    else "number" == typeof e && (e = e.toString()), this._appendBuffer(o.from(e)); return this }, n.prototype._appendBuffer = function(e) { this._bufs.push(e), this.length += e.length }, n.prototype.indexOf = function(e, t, r) { if (void 0 === r && "string" == typeof t && (r = t, t = void 0), "function" == typeof e || Array.isArray(e)) throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.'); if ("number" == typeof e ? e = o.from([e]) : "string" == typeof e ? e = o.from(e, r) : this._isBufferList(e) ? e = e.slice() : Array.isArray(e.buffer) ? e = o.from(e.buffer, e.byteOffset, e.byteLength) : o.isBuffer(e) || (e = o.from(e)), t = Number(t || 0), isNaN(t) && (t = 0), t < 0 && (t = this.length + t), t < 0 && (t = 0), 0 === e.length) return t > this.length ? this.length : t; for (var n = this._offset(t), i = n[0], s = n[1]; i < this._bufs.length; i++) { for (var a = this._bufs[i]; s < a.length;) { var u = a.length - s; if (u >= e.length) { var f = a.indexOf(e, s); if (-1 !== f) return this._reverseOffset([i, f]);
                                s = a.length - e.length + 1 } else { var l = this._reverseOffset([i, s]); if (this._match(l, e)) return l;
                                s++ } }
                        s = 0 } return -1 }, n.prototype._match = function(e, t) { if (this.length - e < t.length) return !1; for (var r = 0; r < t.length; r++)
                        if (this.get(e + r) !== t[r]) return !1;
                    return !0 },
                function() { var e = { readDoubleBE: 8, readDoubleLE: 8, readFloatBE: 4, readFloatLE: 4, readInt32BE: 4, readInt32LE: 4, readUInt32BE: 4, readUInt32LE: 4, readInt16BE: 2, readInt16LE: 2, readUInt16BE: 2, readUInt16LE: 2, readInt8: 1, readUInt8: 1, readIntBE: null, readIntLE: null, readUIntBE: null, readUIntLE: null }; for (var t in e) ! function(t) { null === e[t] ? n.prototype[t] = function(e, r) { return this.slice(e, e + r)[t](0, r) } : n.prototype[t] = function(r) { return this.slice(r, r + e[t])[t](0) } }(t) }(), n.prototype._isBufferList = function(e) { return e instanceof n || n.isBufferList(e) }, n.isBufferList = function(e) { return null != e && e[s] }, t.exports = n }, { buffer: 3 }],
        11: [function(e, t, r) {
            function n(e) { if (!(this instanceof n)) return new n(e); if ("function" == typeof e) { this._callback = e; var t = function(e) { this._callback && (this._callback(e), this._callback = null) }.bind(this);
                    this.on("pipe", function(e) { e.on("error", t) }), this.on("unpipe", function(e) { e.removeListener("error", t) }), e = null }
                s._init.call(this, e), i.call(this) } var i = e("readable-stream").Duplex,
                o = e("inherits"),
                s = e("./BufferList");
            o(n, i), Object.assign(n.prototype, s.prototype), n.prototype._new = function(e) { return new n(e) }, n.prototype._write = function(e, t, r) { this._appendBuffer(e), "function" == typeof r && r() }, n.prototype._read = function(e) { return this.length ? (e = Math.min(e, this.length), this.push(this.slice(0, e)), this.consume(e), void 0) : this.push(null) }, n.prototype.end = function(e) { i.prototype.end.call(this, e), this._callback && (this._callback(null, this.slice()), this._callback = null) }, n.prototype._destroy = function(e, t) { this._bufs.length = 0, this.length = 0, t(e) }, n.prototype._isBufferList = function(e) { return e instanceof n || e instanceof s || n.isBufferList(e) }, n.isBufferList = s.isBufferList, t.exports = n, t.exports.BufferListStream = n, t.exports.BufferList = s }, { "./BufferList": 10, inherits: 14, "readable-stream": 31 }],
        12: [function(t, r, n) {
            (function(i) {
                (function() {
                    function o() { return !("undefined" == typeof e || !e.process || "renderer" !== e.process.type && !e.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof e && e.console && (e.console.firebug || e.console.exception && e.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)) }

                    function s(e) { if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + r.exports.humanize(this.diff), this.useColors) { var t = "color: " + this.color;
                            e.splice(1, 0, t, "color: inherit"); var n = 0,
                                i = 0;
                            e[0].replace(/%[a-zA-Z%]/g, function(e) { "%%" !== e && (n++, "%c" === e && (i = n)) }), e.splice(i, 0, t) } }

                    function a(e) { try { e ? n.storage.setItem("debug", e) : n.storage.removeItem("debug") } catch (e) {} }

                    function u() { var e = void 0; try { e = n.storage.getItem("debug") } catch (e) {} return !e && void 0 !== i && "env" in i && (e = i.env.DEBUG), e }

                    function f() { try { return localStorage } catch (e) {} }
                    n.formatArgs = s, n.save = a, n.load = u, n.useColors = o, n.storage = f(), n.destroy = function() { var e = !1; return function() { e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")) } }(), n.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], n.log = console.debug || console.log || function() {}, r.exports = t("./common")(n); var l = r.exports.formatters;
                    l.j = function(e) { try { return JSON.stringify(e) } catch (e) { return "[UnexpectedJSONParseError]: " + e.message } } }).call(this) }).call(this, t("_process")) }, { "./common": 13, _process: 6 }],
        13: [function(e, t, r) {
            function n(t) {
                function r(e) { for (var t = 0, r = 0; r < e.length; r++) t = (t << 5) - t + e.charCodeAt(r), t |= 0; return n.colors[Math.abs(t) % n.colors.length] }

                function n(e) {
                    function t() { for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o]; if (t.enabled) { var s = t,
                                a = Number(new Date),
                                u = a - (r || a);
                            s.diff = u, s.prev = r, s.curr = a, r = a, i[0] = n.coerce(i[0]), "string" != typeof i[0] && i.unshift("%O"); var f = 0;
                            i[0] = i[0].replace(/%([a-zA-Z%])/g, function(e, t) { if ("%%" === e) return "%";
                                f++; var r = n.formatters[t]; if ("function" == typeof r) { var o = i[f];
                                    e = r.call(s, o), i.splice(f, 1), f-- } return e }), n.formatArgs.call(s, i); var l = s.log || n.log;
                            l.apply(s, i) } } var r = void 0,
                        o = null; return t.namespace = e, t.useColors = n.useColors(), t.color = n.selectColor(e), t.extend = i, t.destroy = n.destroy, Object.defineProperty(t, "enabled", { enumerable: !0, configurable: !1, get: function() { return null === o ? n.enabled(e) : o }, set: function(e) { o = e } }), "function" == typeof n.init && n.init(t), t }

                function i(e, t) { var r = n(this.namespace + (void 0 === t ? ":" : t) + e); return r.log = this.log, r }

                function o(e) { var t = void 0;
                    n.save(e), n.names = [], n.skips = []; var r = ("string" == typeof e ? e : "").split(/[\s,]+/),
                        i = r.length; for (t = 0; t < i; t++) r[t] && (e = r[t].replace(/\*/g, ".*?"), "-" === e[0] ? n.skips.push(new RegExp("^" + e.substr(1) + "$")) : n.names.push(new RegExp("^" + e + "$"))) }

                function s() { var e = [].concat(_toConsumableArray(n.names.map(u)), _toConsumableArray(n.skips.map(u).map(function(e) { return "-" + e }))).join(","); return n.enable(""), e }

                function a(e) { if ("*" === e[e.length - 1]) return !0; var t = void 0,
                        r = void 0; for (t = 0, r = n.skips.length; t < r; t++)
                        if (n.skips[t].test(e)) return !1;
                    for (t = 0, r = n.names.length; t < r; t++)
                        if (n.names[t].test(e)) return !0;
                    return !1 }

                function u(e) { return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*") }

                function f(e) { return e instanceof Error ? e.stack || e.message : e }

                function l() { console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.") } return n.debug = n, n["default"] = n, n.coerce = f, n.disable = s, n.enable = o, n.enabled = a, n.humanize = e("ms"), n.destroy = l, Object.keys(t).forEach(function(e) { n[e] = t[e] }), n.names = [], n.skips = [], n.formatters = {}, n.selectColor = r, n.enable(n.load()), n }
            t.exports = n }, { ms: 15 }],
        14: [function(e, t, r) { "function" == typeof Object.create ? t.exports = function(e, t) { t && (e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })) } : t.exports = function(e, t) { if (t) { e.super_ = t; var r = function() {};
                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e } } }, {}],
        15: [function(e, t, r) {
            function n(e) { if (e = String(e), !(e.length > 100)) { var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e); if (t) { var r = parseFloat(t[1]),
                            n = (t[2] || "ms").toLowerCase(); switch (n) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return r * h;
                            case "weeks":
                            case "week":
                            case "w":
                                return r * c;
                            case "days":
                            case "day":
                            case "d":
                                return r * l;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return r * f;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return r * u;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return r * a;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return r;
                            default:
                                return } } } }

            function i(e) { var t = Math.abs(e); return t >= l ? Math.round(e / l) + "d" : t >= f ? Math.round(e / f) + "h" : t >= u ? Math.round(e / u) + "m" : t >= a ? Math.round(e / a) + "s" : e + "ms" }

            function o(e) { var t = Math.abs(e); return t >= l ? s(e, t, l, "day") : t >= f ? s(e, t, f, "hour") : t >= u ? s(e, t, u, "minute") : t >= a ? s(e, t, a, "second") : e + " ms" }

            function s(e, t, r, n) { var i = t >= 1.5 * r; return Math.round(e / r) + " " + n + (i ? "s" : "") } var a = 1e3,
                u = 60 * a,
                f = 60 * u,
                l = 24 * f,
                c = 7 * l,
                h = 365.25 * l;
            t.exports = function(e, t) { t = t || {}; var r = "undefined" == typeof e ? "undefined" : _typeof(e); if ("string" === r && e.length > 0) return n(e); if ("number" === r && isFinite(e)) return t["long"] ? o(e) : i(e); throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e)) } }, {}],
        16: [function(e, t, r) {
            (function(e) {
                (function() {
                    function r(t, r, n, i) { if ("function" != typeof t) throw new TypeError('"callback" argument must be a function'); var o, s, a = arguments.length; switch (a) {
                            case 0:
                            case 1:
                                return e.nextTick(t);
                            case 2:
                                return e.nextTick(function() { t.call(null, r) });
                            case 3:
                                return e.nextTick(function() { t.call(null, r, n) });
                            case 4:
                                return e.nextTick(function() { t.call(null, r, n, i) });
                            default:
                                for (o = new Array(a - 1), s = 0; s < o.length;) o[s++] = arguments[s]; return e.nextTick(function() { t.apply(null, o) }) } }
                    void 0 === e || !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = { nextTick: r } : t.exports = e }).call(this) }).call(this, e("_process")) }, { _process: 6 }],
        17: [function(e, t, r) {
            function n(e, t) { e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t }

            function i(e, t, r) {
                function i(e, r, n) { return "string" == typeof t ? t : t(e, r, n) }
                r || (r = Error); var o = function(e) {
                    function t(t, r, n) { return e.call(this, i(t, r, n)) || this } return n(t, e), t }(r);
                o.prototype.name = r.name, o.prototype.code = e, f[e] = o }

            function o(e, t) { if (Array.isArray(e)) { var r = e.length; return e = e.map(function(e) { return String(e) }), r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : 2 === r ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0]) } return "of ".concat(t, " ").concat(String(e)) }

            function s(e, t, r) { return e.substr(!r || r < 0 ? 0 : +r, t.length) === t }

            function a(e, t, r) { return (void 0 === r || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t }

            function u(e, t, r) { return "number" != typeof r && (r = 0), !(r + t.length > e.length) && -1 !== e.indexOf(t, r) } var f = {};
            i("ERR_INVALID_OPT_VALUE", function(e, t) { return 'The value "' + t + '" is invalid for option "' + e + '"' }, TypeError), i("ERR_INVALID_ARG_TYPE", function(e, t, r) { var n, i; if ("string" == typeof t && s(t, "not ") ? (n = "must not be", t = t.replace(/^not /, "")) : n = "must be", a(e, " argument")) i = "The ".concat(e, " ").concat(n, " ").concat(o(t, "type"));
                else { var f = u(e, ".") ? "property" : "argument";
                    i = 'The "'.concat(e, '" ').concat(f, " ").concat(n, " ").concat(o(t, "type")) } return i += ". Received type ".concat("undefined" == typeof r ? "undefined" : _typeof(r)) }, TypeError), i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), i("ERR_METHOD_NOT_IMPLEMENTED", function(e) { return "The " + e + " method is not implemented" }), i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), i("ERR_STREAM_DESTROYED", function(e) { return "Cannot call " + e + " after a stream was destroyed" }), i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), i("ERR_STREAM_WRITE_AFTER_END", "write after end"), i("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), i("ERR_UNKNOWN_ENCODING", function(e) { return "Unknown encoding: " + e }, TypeError), i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), t.exports.codes = f }, {}],
        18: [function(e, t, r) {
            (function(r) {
                (function() {
                    function n(e) { return this instanceof n ? (a.call(this, e), u.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", i))), void 0) : new n(e) }

                    function i() { this._writableState.ended || r.nextTick(o, this) }

                    function o(e) { e.end() } var s = Object.keys || function(e) { var t = []; for (var r in e) t.push(r); return t };
                    t.exports = n; var a = e("./_stream_readable"),
                        u = e("./_stream_writable");
                    e("inherits")(n, a); for (var f = s(u.prototype), l = 0; l < f.length; l++) { var c = f[l];
                        n.prototype[c] || (n.prototype[c] = u.prototype[c]) }
                    Object.defineProperty(n.prototype, "writableHighWaterMark", { enumerable: !1, get: function() { return this._writableState.highWaterMark } }), Object.defineProperty(n.prototype, "writableBuffer", { enumerable: !1, get: function() { return this._writableState && this._writableState.getBuffer() } }), Object.defineProperty(n.prototype, "writableLength", { enumerable: !1, get: function() { return this._writableState.length } }), Object.defineProperty(n.prototype, "destroyed", { enumerable: !1, get: function() { return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed }, set: function(e) { void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e) } }) }).call(this) }).call(this, e("_process")) }, { "./_stream_readable": 20, "./_stream_writable": 22, _process: 6, inherits: 14 }],
        19: [function(e, t, r) {
            function n(e) { return this instanceof n ? void i.call(this, e) : new n(e) }
            t.exports = n; var i = e("./_stream_transform");
            e("inherits")(n, i), n.prototype._transform = function(e, t, r) { r(null, e) } }, { "./_stream_transform": 21, inherits: 14 }],
        20: [function(t, r, n) {
            (function(e, n) {
                (function() {
                    function i(e) { return M.from(e) }

                    function o(e) { return M.isBuffer(e) || e instanceof N }

                    function s(e, t, r) { return "function" == typeof e.prependListener ? e.prependListener(t, r) : void(e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)) }

                    function a(e, r, n) { T = T || t("./_stream_duplex"), e = e || {}, "boolean" != typeof n && (n = r instanceof T), this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = H(this, e, "readableHighWaterMark", n), this.buffer = new F, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (x || (x = t("string_decoder/").StringDecoder), this.decoder = new x(e.encoding), this.encoding = e.encoding) }

                    function u(e) { if (T = T || t("./_stream_duplex"), !(this instanceof u)) return new u(e); var r = this instanceof T;
                        this._readableState = new a(e, this, r), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), L.call(this) }

                    function f(e, t, r, n, o) { O("readableAddChunk", t); var s, a = e._readableState; if (null === t) a.reading = !1, d(e, a);
                        else if (o || (s = c(a, t)), s) z(e, s);
                        else if (a.objectMode || t && t.length > 0)
                            if ("string" == typeof t || a.objectMode || Object.getPrototypeOf(t) === M.prototype || (t = i(t)), n) a.endEmitted ? z(e, new Y) : l(e, a, t, !0);
                            else if (a.ended) z(e, new W);
                        else { if (a.destroyed) return !1;
                            a.reading = !1, a.decoder && !r ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? l(e, a, t, !1) : b(e, a)) : l(e, a, t, !1) } else n || (a.reading = !1, b(e, a)); return !a.ended && (a.length < a.highWaterMark || 0 === a.length) }

                    function l(e, t, r, n) { t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && g(e)), b(e, t) }

                    function c(e, t) { var r; return o(t) || "string" == typeof t || void 0 === t || e.objectMode || (r = new K("chunk", ["string", "Buffer", "Uint8Array"], t)), r }

                    function h(e) { return e >= J ? e = J : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e }

                    function p(e, t) { return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = h(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0)) }

                    function d(e, t) { if (O("onEofChunk"), !t.ended) { if (t.decoder) { var r = t.decoder.end();
                                r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length) }
                            t.ended = !0, t.sync ? g(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, y(e))) } }

                    function g(t) { var r = t._readableState;
                        O("emitReadable", r.needReadable, r.emittedReadable), r.needReadable = !1, r.emittedReadable || (O("emitReadable", r.flowing), r.emittedReadable = !0, e.nextTick(y, t)) }

                    function y(e) { var t = e._readableState;
                        O("emitReadable_", t.destroyed, t.length, t.ended), t.destroyed || !t.length && !t.ended || (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, k(e) }

                    function b(t, r) { r.readingMore || (r.readingMore = !0, e.nextTick(_, t, r)) }

                    function _(e, t) { for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) { var r = t.length; if (O("maybeReadMore read 0"), e.read(0), r === t.length) break }
                        t.readingMore = !1 }

                    function v(e) { return function() { var t = e._readableState;
                            O("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && B(e, "data") && (t.flowing = !0, k(e)) } }

                    function m(e) { var t = e._readableState;
                        t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume() }

                    function w(e) { O("readable nexttick read 0"), e.read(0) }

                    function S(t, r) { r.resumeScheduled || (r.resumeScheduled = !0, e.nextTick(E, t, r)) }

                    function E(e, t) { O("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), k(e), t.flowing && !t.reading && e.read(0) }

                    function k(e) { var t = e._readableState; for (O("flow", t.flowing); t.flowing && null !== e.read();); }

                    function C(e, t) { return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r); var r }

                    function I(t) { var r = t._readableState;
                        O("endReadable", r.endEmitted), r.endEmitted || (r.ended = !0, e.nextTick(A, r, t)) }

                    function A(e, t) { if (O("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) { var r = t._writableState;
                            (!r || r.autoDestroy && r.finished) && t.destroy() } }

                    function R(e, t) { for (var r = 0, n = e.length; r < n; r++)
                            if (e[r] === t) return r;
                        return -1 }
                    var T;
                    r.exports = u, u.ReadableState = a, t("events").EventEmitter;
                    var O, B = function(e, t) { return e.listeners(t).length },
                        L = t("./internal/streams/stream"),
                        M = t("buffer").Buffer,
                        N = n.Uint8Array || function() {},
                        P = t("util");
                    O = P && P.debuglog ? P.debuglog("stream") : function() {};
                    var x, U, j, F = t("./internal/streams/buffer_list"),
                        D = t("./internal/streams/destroy"),
                        q = t("./internal/streams/state"),
                        H = q.getHighWaterMark,
                        V = t("../errors").codes,
                        K = V.ERR_INVALID_ARG_TYPE,
                        W = V.ERR_STREAM_PUSH_AFTER_EOF,
                        Q = V.ERR_METHOD_NOT_IMPLEMENTED,
                        Y = V.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
                    t("inherits")(u, L);
                    var z = D.errorOrDestroy,
                        G = ["error", "close", "destroy", "pause", "resume"];
                    Object.defineProperty(u.prototype, "destroyed", { enumerable: !1, get: function() { return void 0 !== this._readableState && this._readableState.destroyed }, set: function(e) { this._readableState && (this._readableState.destroyed = e) } }), u.prototype.destroy = D.destroy, u.prototype._undestroy = D.undestroy, u.prototype._destroy = function(e, t) { t(e) }, u.prototype.push = function(e, t) { var r, n = this._readableState; return n.objectMode ? r = !0 : "string" == typeof e && (t = t || n.defaultEncoding, t !== n.encoding && (e = M.from(e, t), t = ""), r = !0), f(this, e, t, !1, r) }, u.prototype.unshift = function(e) { return f(this, e, null, !0, !1) }, u.prototype.isPaused = function() { return !1 === this._readableState.flowing }, u.prototype.setEncoding = function(e) { x || (x = t("string_decoder/").StringDecoder); var r = new x(e);
                        this._readableState.decoder = r, this._readableState.encoding = this._readableState.decoder.encoding; for (var n = this._readableState.buffer.head, i = ""; null !== n;) i += r.write(n.data), n = n.next; return this._readableState.buffer.clear(), "" !== i && this._readableState.buffer.push(i), this._readableState.length = i.length, this };
                    var J = 1073741824;
                    u.prototype.read = function(e) { O("read", e), e = parseInt(e, 10); var t = this._readableState,
                            r = e; if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return O("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? I(this) : g(this), null; if (e = p(e, t), 0 === e && t.ended) return 0 === t.length && I(this), null; var n, i = t.needReadable; return O("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && (i = !0, O("length less than watermark", i)), t.ended || t.reading ? (i = !1, O("reading or ended", i)) : i && (O("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = p(r, t))), n = e > 0 ? C(e, t) : null, null === n ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain = 0), 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && I(this)), null !== n && this.emit("data", n), n }, u.prototype._read = function(e) { z(this, new Q("_read()")) }, u.prototype.pipe = function(t, r) {
                        function n(e, t) { O("onunpipe"), e === h && t && !1 === t.hasUnpiped && (t.hasUnpiped = !0, o()) }

                        function i() { O("onend"), t.end() }

                        function o() { O("cleanup"), t.removeListener("close", f), t.removeListener("finish", l), t.removeListener("drain", y), t.removeListener("error", u), t.removeListener("unpipe", n), h.removeListener("end", i), h.removeListener("end", c), h.removeListener("data", a), b = !0, !p.awaitDrain || t._writableState && !t._writableState.needDrain || y() }

                        function a(e) { O("ondata"); var r = t.write(e);
                            O("dest.write", r), !1 === r && ((1 === p.pipesCount && p.pipes === t || p.pipesCount > 1 && -1 !== R(p.pipes, t)) && !b && (O("false write response, pause", p.awaitDrain), p.awaitDrain++), h.pause()) }

                        function u(e) { O("onerror", e), c(), t.removeListener("error", u), 0 === B(t, "error") && z(t, e) }

                        function f() { t.removeListener("finish", l), c() }

                        function l() { O("onfinish"), t.removeListener("close", f), c() }

                        function c() { O("unpipe"), h.unpipe(t) } var h = this,
                            p = this._readableState; switch (p.pipesCount) {
                            case 0:
                                p.pipes = t; break;
                            case 1:
                                p.pipes = [p.pipes, t]; break;
                            default:
                                p.pipes.push(t) }
                        p.pipesCount += 1, O("pipe count=%d opts=%j", p.pipesCount, r); var d = (!r || !1 !== r.end) && t !== e.stdout && t !== e.stderr,
                            g = d ? i : c;
                        p.endEmitted ? e.nextTick(g) : h.once("end", g), t.on("unpipe", n); var y = v(h);
                        t.on("drain", y); var b = !1; return h.on("data", a), s(t, "error", u), t.once("close", f), t.once("finish", l), t.emit("pipe", h), p.flowing || (O("pipe resume"), h.resume()), t }, u.prototype.unpipe = function(e) { var t = this._readableState,
                            r = { hasUnpiped: !1 }; if (0 === t.pipesCount) return this; if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r), this); if (!e) { var n = t.pipes,
                                i = t.pipesCount;
                            t.pipes = null, t.pipesCount = 0, t.flowing = !1; for (var o = 0; o < i; o++) n[o].emit("unpipe", this, { hasUnpiped: !1 }); return this } var s = R(t.pipes, e); return -1 === s ? this : (t.pipes.splice(s, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r), this) }, u.prototype.on = function(t, r) { var n = L.prototype.on.call(this, t, r),
                            i = this._readableState; return "data" === t ? (i.readableListening = this.listenerCount("readable") > 0, !1 !== i.flowing && this.resume()) : "readable" === t && (i.endEmitted || i.readableListening || (i.readableListening = i.needReadable = !0, i.flowing = !1, i.emittedReadable = !1, O("on readable", i.length, i.reading), i.length ? g(this) : i.reading || e.nextTick(w, this))), n }, u.prototype.addListener = u.prototype.on, u.prototype.removeListener = function(t, r) { var n = L.prototype.removeListener.call(this, t, r); return "readable" === t && e.nextTick(m, this), n }, u.prototype.removeAllListeners = function(t) { var r = L.prototype.removeAllListeners.apply(this, arguments); return "readable" !== t && void 0 !== t || e.nextTick(m, this), r }, u.prototype.resume = function() { var e = this._readableState; return e.flowing || (O("resume"), e.flowing = !e.readableListening, S(this, e)), e.paused = !1, this }, u.prototype.pause = function() {
                        return O("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (O("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
                    }, u.prototype.wrap = function(e) { var t = this,
                            r = this._readableState,
                            n = !1; for (var i in e.on("end", function() { if (O("wrapped end"), r.decoder && !r.ended) { var e = r.decoder.end();
                                    e && e.length && t.push(e) }
                                t.push(null) }), e.on("data", function(i) { if (O("wrapped data"), r.decoder && (i = r.decoder.write(i)), (!r.objectMode || null != i) && (r.objectMode || i && i.length)) { var o = t.push(i);
                                    o || (n = !0, e.pause()) } }), e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) { return function() { return e[t].apply(e, arguments) } }(i)); for (var o = 0; o < G.length; o++) e.on(G[o], this.emit.bind(this, G[o])); return this._read = function(t) { O("wrapped _read", t), n && (n = !1, e.resume()) }, this }, "function" == typeof Symbol && (u.prototype[Symbol.asyncIterator] = function() { return void 0 === U && (U = t("./internal/streams/async_iterator")), U(this) }), Object.defineProperty(u.prototype, "readableHighWaterMark", { enumerable: !1, get: function() { return this._readableState.highWaterMark } }), Object.defineProperty(u.prototype, "readableBuffer", { enumerable: !1, get: function() { return this._readableState && this._readableState.buffer } }), Object.defineProperty(u.prototype, "readableFlowing", { enumerable: !1, get: function() { return this._readableState.flowing }, set: function(e) { this._readableState && (this._readableState.flowing = e) } }), u._fromList = C, Object.defineProperty(u.prototype, "readableLength", { enumerable: !1, get: function() { return this._readableState.length } }), "function" == typeof Symbol && (u.from = function(e, r) { return void 0 === j && (j = t("./internal/streams/from")), j(u, e, r) })
                }).call(this)
            }).call(this, t("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof e ? e : {})
        }, { "../errors": 17, "./_stream_duplex": 18, "./internal/streams/async_iterator": 23, "./internal/streams/buffer_list": 24, "./internal/streams/destroy": 25, "./internal/streams/from": 27, "./internal/streams/state": 29, "./internal/streams/stream": 30, _process: 6, buffer: 3, events: 4, inherits: 14, "string_decoder/": 33, util: 2 }],
        21: [function(e, t, r) {
            function n(e, t) { var r = this._transformState;
                r.transforming = !1; var n = r.writecb; if (null === n) return this.emit("error", new f);
                r.writechunk = null, r.writecb = null, null != t && this.push(t), n(e); var i = this._readableState;
                i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark) }

            function i(e) { return this instanceof i ? (h.call(this, e), this._transformState = { afterTransform: n.bind(this), needTransform: !1, transforming: !1, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", o), void 0) : new i(e) }

            function o() { var e = this; "function" != typeof this._flush || this._readableState.destroyed ? s(this, null, null) : this._flush(function(t, r) { s(e, t, r) }) }

            function s(e, t, r) { if (t) return e.emit("error", t); if (null != r && e.push(r), e._writableState.length) throw new c; if (e._transformState.transforming) throw new l; return e.push(null) }
            t.exports = i; var a = e("../errors").codes,
                u = a.ERR_METHOD_NOT_IMPLEMENTED,
                f = a.ERR_MULTIPLE_CALLBACK,
                l = a.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                c = a.ERR_TRANSFORM_WITH_LENGTH_0,
                h = e("./_stream_duplex");
            e("inherits")(i, h), i.prototype.push = function(e, t) { return this._transformState.needTransform = !1, h.prototype.push.call(this, e, t) }, i.prototype._transform = function(e, t, r) { r(new u("_transform()")) }, i.prototype._write = function(e, t, r) { var n = this._transformState; if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) { var i = this._readableState;
                    (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark) } }, i.prototype._read = function(e) { var t = this._transformState;
                null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) }, i.prototype._destroy = function(e, t) { h.prototype._destroy.call(this, e, function(e) { t(e) }) } }, { "../errors": 17, "./_stream_duplex": 18, inherits: 14 }],
        22: [function(t, r, n) {
            (function(e, n) {
                (function() {
                    function i(e) { var t = this;
                        this.next = null, this.entry = null, this.finish = function() { I(t, e) } }

                    function o(e) { return B.from(e) }

                    function s(e) { return B.isBuffer(e) || e instanceof L }

                    function a() {}

                    function u(e, r, n) { A = A || t("./_stream_duplex"), e = e || {}, "boolean" != typeof n && (n = r instanceof A), this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = P(this, e, "writableHighWaterMark", n), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1; var o = !1 === e.decodeStrings;
                        this.decodeStrings = !o, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) { b(r, e) }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new i(this) }

                    function f(e) { A = A || t("./_stream_duplex"); var r = this instanceof A; return r || R.call(f, this) ? (this._writableState = new u(e, this, r), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e["final"] && (this._final = e["final"])), O.call(this), void 0) : new f(e) }

                    function l(t, r) { var n = new V;
                        W(t, n), e.nextTick(r, n) }

                    function c(t, r, n, i) { var o; return null === n ? o = new H : "string" == typeof n || r.objectMode || (o = new U("chunk", ["string", "Buffer"], n)), !o || (W(t, o), e.nextTick(i, o), !1) }

                    function h(e, t, r) { return e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = B.from(t, r)), t }

                    function p(e, t, r, n, i, o) { if (!r) { var s = h(t, n, i);
                            n !== s && (r = !0, i = "buffer", n = s) } var a = t.objectMode ? 1 : n.length;
                        t.length += a; var u = t.length < t.highWaterMark; if (u || (t.needDrain = !0), t.writing || t.corked) { var f = t.lastBufferedRequest;
                            t.lastBufferedRequest = { chunk: n, encoding: i, isBuf: r, callback: o, next: null }, f ? f.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1 } else d(e, t, !1, a, n, i, o); return u }

                    function d(e, t, r, n, i, o, s) { t.writelen = n, t.writecb = s, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new q("write")) : r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1 }

                    function g(t, r, n, i, o) {--r.pendingcb, n ? (e.nextTick(o, i), e.nextTick(k, t, r), t._writableState.errorEmitted = !0, W(t, i)) : (o(i), t._writableState.errorEmitted = !0, W(t, i), k(t, r)) }

                    function y(e) { e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0 }

                    function b(t, r) { var n = t._writableState,
                            i = n.sync,
                            o = n.writecb; if ("function" != typeof o) throw new F; if (y(n), r) g(t, n, i, r, o);
                        else { var s = w(n) || t.destroyed;
                            s || n.corked || n.bufferProcessing || !n.bufferedRequest || m(t, n), i ? e.nextTick(_, t, n, s, o) : _(t, n, s, o) } }

                    function _(e, t, r, n) { r || v(e, t), t.pendingcb--, n(), k(e, t) }

                    function v(e, t) { 0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain")) }

                    function m(e, t) { t.bufferProcessing = !0; var r = t.bufferedRequest; if (e._writev && r && r.next) { var n = t.bufferedRequestCount,
                                o = new Array(n),
                                s = t.corkedRequestsFree;
                            s.entry = r; for (var a = 0, u = !0; r;) o[a] = r, r.isBuf || (u = !1), r = r.next, a += 1;
                            o.allBuffers = u, d(e, t, !0, t.length, o, "", s.finish), t.pendingcb++, t.lastBufferedRequest = null, s.next ? (t.corkedRequestsFree = s.next, s.next = null) : t.corkedRequestsFree = new i(t), t.bufferedRequestCount = 0 } else { for (; r;) { var f = r.chunk,
                                    l = r.encoding,
                                    c = r.callback,
                                    h = t.objectMode ? 1 : f.length; if (d(e, t, !1, h, f, l, c), r = r.next, t.bufferedRequestCount--, t.writing) break }
                            null === r && (t.lastBufferedRequest = null) }
                        t.bufferedRequest = r, t.bufferProcessing = !1 }

                    function w(e) { return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing }

                    function S(e, t) { e._final(function(r) { t.pendingcb--, r && W(e, r), t.prefinished = !0, e.emit("prefinish"), k(e, t) }) }

                    function E(t, r) { r.prefinished || r.finalCalled || ("function" != typeof t._final || r.destroyed ? (r.prefinished = !0, t.emit("prefinish")) : (r.pendingcb++, r.finalCalled = !0, e.nextTick(S, t, r))) }

                    function k(e, t) { var r = w(t); if (r && (E(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) { var n = e._readableState;
                            (!n || n.autoDestroy && n.endEmitted) && e.destroy() } return r }

                    function C(t, r, n) { r.ending = !0, k(t, r), n && (r.finished ? e.nextTick(n) : t.once("finish", n)), r.ended = !0, t.writable = !1 }

                    function I(e, t, r) { var n = e.entry; for (e.entry = null; n;) { var i = n.callback;
                            t.pendingcb--, i(r), n = n.next }
                        t.corkedRequestsFree.next = e } var A;
                    r.exports = f, f.WritableState = u; var R, T = { deprecate: t("util-deprecate") },
                        O = t("./internal/streams/stream"),
                        B = t("buffer").Buffer,
                        L = n.Uint8Array || function() {},
                        M = t("./internal/streams/destroy"),
                        N = t("./internal/streams/state"),
                        P = N.getHighWaterMark,
                        x = t("../errors").codes,
                        U = x.ERR_INVALID_ARG_TYPE,
                        j = x.ERR_METHOD_NOT_IMPLEMENTED,
                        F = x.ERR_MULTIPLE_CALLBACK,
                        D = x.ERR_STREAM_CANNOT_PIPE,
                        q = x.ERR_STREAM_DESTROYED,
                        H = x.ERR_STREAM_NULL_VALUES,
                        V = x.ERR_STREAM_WRITE_AFTER_END,
                        K = x.ERR_UNKNOWN_ENCODING,
                        W = M.errorOrDestroy;
                    t("inherits")(f, O), u.prototype.getBuffer = function() { for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next; return t },
                        function() { try { Object.defineProperty(u.prototype, "buffer", { get: T.deprecate(function() { return this.getBuffer() }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") }) } catch (e) {} }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (R = Function.prototype[Symbol.hasInstance], Object.defineProperty(f, Symbol.hasInstance, { value: function(e) { return !!R.call(this, e) || this === f && e && e._writableState instanceof u } })) : R = function(e) { return e instanceof this }, f.prototype.pipe = function() { W(this, new D) }, f.prototype.write = function(e, t, r) { var n = this._writableState,
                                i = !1,
                                u = !n.objectMode && s(e); return u && !B.isBuffer(e) && (e = o(e)), "function" == typeof t && (r = t, t = null), u ? t = "buffer" : t || (t = n.defaultEncoding), "function" != typeof r && (r = a), n.ending ? l(this, r) : (u || c(this, n, e, r)) && (n.pendingcb++, i = p(this, n, u, e, t, r)), i }, f.prototype.cork = function() { this._writableState.corked++ }, f.prototype.uncork = function() { var e = this._writableState;
                            e.corked && (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || m(this, e)) }, f.prototype.setDefaultEncoding = function(e) { if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new K(e); return this._writableState.defaultEncoding = e, this }, Object.defineProperty(f.prototype, "writableBuffer", { enumerable: !1, get: function() { return this._writableState && this._writableState.getBuffer() } }), Object.defineProperty(f.prototype, "writableHighWaterMark", { enumerable: !1, get: function() { return this._writableState.highWaterMark } }), f.prototype._write = function(e, t, r) { r(new j("_write()")) }, f.prototype._writev = null, f.prototype.end = function(e, t, r) { var n = this._writableState; return "function" == typeof e ? (r = e, e = null, t = null) : "function" == typeof t && (r = t, t = null), null != e && this.write(e, t), n.corked && (n.corked = 1, this.uncork()), n.ending || C(this, n, r), this }, Object.defineProperty(f.prototype, "writableLength", { enumerable: !1, get: function() { return this._writableState.length } }), Object.defineProperty(f.prototype, "destroyed", { enumerable: !1, get: function() { return void 0 !== this._writableState && this._writableState.destroyed }, set: function(e) { this._writableState && (this._writableState.destroyed = e) } }), f.prototype.destroy = M.destroy, f.prototype._undestroy = M.undestroy, f.prototype._destroy = function(e, t) { t(e) } }).call(this) }).call(this, t("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof e ? e : {}) }, { "../errors": 17, "./_stream_duplex": 18, "./internal/streams/destroy": 25, "./internal/streams/state": 29, "./internal/streams/stream": 30, _process: 6, buffer: 3, inherits: 14, "util-deprecate": 34 }],
        23: [function(e, t, r) {
            (function(r) {
                (function() {
                    function n(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e }

                    function i(e, t) { return { value: e, done: t } }

                    function o(e) { var t = e[l]; if (null !== t) { var r = e[y].read();
                            null !== r && (e[d] = null, e[l] = null, e[c] = null, t(i(r, !1))) } }

                    function s(e) { r.nextTick(o, e) }

                    function a(e, t) { return function(r, n) { e.then(function() { t[p] ? r(i(void 0, !0)) : t[g](r, n) }, n) } } var u, f = e("./end-of-stream"),
                        l = Symbol("lastResolve"),
                        c = Symbol("lastReject"),
                        h = Symbol("error"),
                        p = Symbol("ended"),
                        d = Symbol("lastPromise"),
                        g = Symbol("handlePromise"),
                        y = Symbol("stream"),
                        b = Object.getPrototypeOf(function() {}),
                        _ = Object.setPrototypeOf((u = {get stream() { return this[y] }, next: function() { var e = this,
                                    t = this[h]; if (null !== t) return Promise.reject(t); if (this[p]) return Promise.resolve(i(void 0, !0)); if (this[y].destroyed) return new Promise(function(t, n) { r.nextTick(function() { e[h] ? n(e[h]) : t(i(void 0, !0)) }) }); var n, o = this[d]; if (o) n = new Promise(a(o, this));
                                else { var s = this[y].read(); if (null !== s) return Promise.resolve(i(s, !1));
                                    n = new Promise(this[g]) } return this[d] = n, n } }, n(u, Symbol.asyncIterator, function() { return this }), n(u, "return", function() { var e = this; return new Promise(function(t, r) { e[y].destroy(null, function(e) { e ? r(e) : t(i(void 0, !0)) }) }) }), u), b),
                        v = function(e) { var t, r = Object.create(_, (t = {}, n(t, y, { value: e, writable: !0 }), n(t, l, { value: null, writable: !0 }), n(t, c, { value: null, writable: !0 }), n(t, h, { value: null, writable: !0 }), n(t, p, { value: e._readableState.endEmitted, writable: !0 }), n(t, g, { value: function(e, t) { var n = r[y].read();
                                    n ? (r[d] = null, r[l] = null, r[c] = null, e(i(n, !1))) : (r[l] = e, r[c] = t) }, writable: !0 }), t)); return r[d] = null, f(e, function(e) { if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) { var t = r[c]; return null !== t && (r[d] = null, r[l] = null, r[c] = null, t(e)), void(r[h] = e) } var n = r[l];
                                null !== n && (r[d] = null, r[l] = null, r[c] = null, n(i(void 0, !0))), r[p] = !0 }), e.on("readable", s.bind(null, r)), r };
                    t.exports = v }).call(this) }).call(this, e("_process")) }, { "./end-of-stream": 26, _process: 6 }],
        24: [function(e, t, r) {
            function n(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable })), r.push.apply(r, n) } return r }

            function i(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n(Object(r), !0).forEach(function(t) { o(e, t, r[t]) }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) }) } return e }

            function o(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e }

            function s(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function a(e, t) { for (var r = 0; r < t.length; r++) { var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n) } }

            function u(e, t, r) { return t && a(e.prototype, t), r && a(e, r), e }

            function f(e, t, r) { c.prototype.copy.call(e, t, r) } var l = e("buffer"),
                c = l.Buffer,
                h = e("util"),
                p = h.inspect,
                d = p && p.custom || "inspect";
            t.exports = function() {
                function e() { s(this, e), this.head = null, this.tail = null, this.length = 0 } return u(e, [{ key: "push", value: function(e) { var t = { data: e, next: null };
                        this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length } }, { key: "unshift", value: function(e) { var t = { data: e, next: this.head };
                        0 === this.length && (this.tail = t), this.head = t, ++this.length } }, { key: "shift", value: function() { if (0 !== this.length) { var e = this.head.data; return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e } } }, { key: "clear", value: function() { this.head = this.tail = null, this.length = 0 } }, { key: "join", value: function(e) { if (0 === this.length) return ""; for (var t = this.head, r = "" + t.data; t = t.next;) r += e + t.data; return r } }, { key: "concat", value: function(e) { if (0 === this.length) return c.alloc(0); for (var t = c.allocUnsafe(e >>> 0), r = this.head, n = 0; r;) f(r.data, t, n), n += r.data.length, r = r.next; return t } }, { key: "consume", value: function(e, t) { var r; return e < this.head.data.length ? (r = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : r = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), r } }, { key: "first", value: function() { return this.head.data } }, { key: "_getString", value: function(e) { var t = this.head,
                            r = 1,
                            n = t.data; for (e -= n.length; t = t.next;) { var i = t.data,
                                o = e > i.length ? i.length : e; if (n += o === i.length ? i : i.slice(0, e), e -= o, 0 === e) { o === i.length ? (++r, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = i.slice(o)); break }++r } return this.length -= r, n } }, { key: "_getBuffer", value: function(e) { var t = c.allocUnsafe(e),
                            r = this.head,
                            n = 1; for (r.data.copy(t), e -= r.data.length; r = r.next;) { var i = r.data,
                                o = e > i.length ? i.length : e; if (i.copy(t, t.length - e, 0, o), e -= o, 0 === e) { o === i.length ? (++n, r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r, r.data = i.slice(o)); break }++n } return this.length -= n, t } }, { key: d, value: function(e, t) { return p(this, i({}, t, { depth: 0, customInspect: !1 })) } }]), e }() }, { buffer: 3, util: 2 }],
        25: [function(e, t, r) {
            (function(e) {
                (function() {
                    function r(t, r) { var o = this,
                            a = this._readableState && this._readableState.destroyed,
                            u = this._writableState && this._writableState.destroyed; return a || u ? (r ? r(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, e.nextTick(s, this, t)) : e.nextTick(s, this, t)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, function(t) {!r && t ? o._writableState ? o._writableState.errorEmitted ? e.nextTick(i, o) : (o._writableState.errorEmitted = !0, e.nextTick(n, o, t)) : e.nextTick(n, o, t) : r ? (e.nextTick(i, o), r(t)) : e.nextTick(i, o) }), this) }

                    function n(e, t) { s(e, t), i(e) }

                    function i(e) { e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close") }

                    function o() { this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1) }

                    function s(e, t) { e.emit("error", t) }

                    function a(e, t) { var r = e._readableState,
                            n = e._writableState;
                        r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t) }
                    t.exports = { destroy: r, undestroy: o, errorOrDestroy: a } }).call(this) }).call(this, e("_process")) }, { _process: 6 }],
        26: [function(e, t, r) {
            function n(e) { var t = !1; return function() { if (!t) { t = !0; for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                        e.apply(this, n) } } }

            function i() {}

            function o(e) { return e.setHeader && "function" == typeof e.abort }

            function s(e, t, r) { if ("function" == typeof t) return s(e, null, t);
                t || (t = {}), r = n(r || i); var u = t.readable || !1 !== t.readable && e.readable,
                    f = t.writable || !1 !== t.writable && e.writable,
                    l = function() { e.writable || h() },
                    c = e._writableState && e._writableState.finished,
                    h = function() { f = !1, c = !0, u || r.call(e) },
                    p = e._readableState && e._readableState.endEmitted,
                    d = function() { u = !1, p = !0, f || r.call(e) },
                    g = function(t) { r.call(e, t) },
                    y = function() { var t; return u && !p ? (e._readableState && e._readableState.ended || (t = new a), r.call(e, t)) : f && !c ? (e._writableState && e._writableState.ended || (t = new a), r.call(e, t)) : void 0 },
                    b = function() { e.req.on("finish", h) }; return o(e) ? (e.on("complete", h), e.on("abort", y), e.req ? b() : e.on("request", b)) : f && !e._writableState && (e.on("end", l), e.on("close", l)), e.on("end", d), e.on("finish", h), !1 !== t.error && e.on("error", g), e.on("close", y),
                    function() { e.removeListener("complete", h), e.removeListener("abort", y), e.removeListener("request", b), e.req && e.req.removeListener("finish", h), e.removeListener("end", l), e.removeListener("close", l), e.removeListener("finish", h), e.removeListener("end", d), e.removeListener("error", g), e.removeListener("close", y) } } var a = e("../../../errors").codes.ERR_STREAM_PREMATURE_CLOSE;
            t.exports = s }, { "../../../errors": 17 }],
        27: [function(e, t, r) { t.exports = function() { throw new Error("Readable.from is not available in the browser") } }, {}],
        28: [function(e, t, r) {
            function n(e) { var t = !1; return function() { t || (t = !0, e.apply(void 0, arguments)) } }

            function i(e) { if (e) throw e }

            function o(e) { return e.setHeader && "function" == typeof e.abort }

            function s(t, r, i, s) { s = n(s); var a = !1;
                t.on("close", function() { a = !0 }), void 0 === c && (c = e("./end-of-stream")), c(t, { readable: r, writable: i }, function(e) { return e ? s(e) : (a = !0, void s()) }); var u = !1; return function(e) { if (!a && !u) return u = !0, o(t) ? t.abort() : "function" == typeof t.destroy ? t.destroy() : void s(e || new d("pipe")) } }

            function a(e) { e() }

            function u(e, t) { return e.pipe(t) }

            function f(e) { return e.length ? "function" != typeof e[e.length - 1] ? i : e.pop() : i }

            function l() { for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]; var n, i = f(t); if (Array.isArray(t[0]) && (t = t[0]), t.length < 2) throw new p("streams"); var o = t.map(function(e, r) { var u = r < t.length - 1,
                        f = r > 0; return s(e, u, f, function(e) { n || (n = e), e && o.forEach(a), u || (o.forEach(a), i(n)) }) }); return t.reduce(u) } var c, h = e("../../../errors").codes,
                p = h.ERR_MISSING_ARGS,
                d = h.ERR_STREAM_DESTROYED;
            t.exports = l }, { "../../../errors": 17, "./end-of-stream": 26 }],
        29: [function(e, t, r) {
            function n(e, t, r) { return null != e.highWaterMark ? e.highWaterMark : t ? e[r] : null }

            function i(e, t, r, i) { var s = n(t, i, r); if (null != s) { if (!isFinite(s) || Math.floor(s) !== s || s < 0) { var a = i ? r : "highWaterMark"; throw new o(a, s) } return Math.floor(s) } return e.objectMode ? 16 : 16384 } var o = e("../../../errors").codes.ERR_INVALID_OPT_VALUE;
            t.exports = { getHighWaterMark: i } }, { "../../../errors": 17 }],
        30: [function(e, t, r) { t.exports = e("events").EventEmitter }, { events: 4 }],
        31: [function(e, t, r) { r = t.exports = e("./lib/_stream_readable.js"), r.Stream = r, r.Readable = r, r.Writable = e("./lib/_stream_writable.js"), r.Duplex = e("./lib/_stream_duplex.js"), r.Transform = e("./lib/_stream_transform.js"), r.PassThrough = e("./lib/_stream_passthrough.js"), r.finished = e("./lib/internal/streams/end-of-stream.js"), r.pipeline = e("./lib/internal/streams/pipeline.js") }, { "./lib/_stream_duplex.js": 18, "./lib/_stream_passthrough.js": 19, "./lib/_stream_readable.js": 20, "./lib/_stream_transform.js": 21, "./lib/_stream_writable.js": 22, "./lib/internal/streams/end-of-stream.js": 26, "./lib/internal/streams/pipeline.js": 28 }],
        32: [function(e, t, r) {
            function n(e, t) { for (var r in e) t[r] = e[r] }

            function i(e, t, r) { return s(e, t, r) } var o = e("buffer"),
                s = o.Buffer;
            s.from && s.alloc && s.allocUnsafe && s.allocUnsafeSlow ? t.exports = o : (n(o, r), r.Buffer = i), i.prototype = Object.create(s.prototype), n(s, i), i.from = function(e, t, r) { if ("number" == typeof e) throw new TypeError("Argument must not be a number"); return s(e, t, r) }, i.alloc = function(e, t, r) { if ("number" != typeof e) throw new TypeError("Argument must be a number"); var n = s(e); return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n }, i.allocUnsafe = function(e) { if ("number" != typeof e) throw new TypeError("Argument must be a number"); return s(e) }, i.allocUnsafeSlow = function(e) { if ("number" != typeof e) throw new TypeError("Argument must be a number"); return o.SlowBuffer(e) } }, { buffer: 3 }],
        33: [function(e, t, r) {
            function n(e) { if (!e) return "utf8"; for (var t;;) switch (e) {
                    case "utf8":
                    case "utf-8":
                        return "utf8";
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return "utf16le";
                    case "latin1":
                    case "binary":
                        return "latin1";
                    case "base64":
                    case "ascii":
                    case "hex":
                        return e;
                    default:
                        if (t) return;
                        e = ("" + e).toLowerCase(), t = !0 } }

            function i(e) { var t = n(e); if ("string" != typeof t && (_.isEncoding === v || !v(e))) throw new Error("Unknown encoding: " + e); return t || e }

            function o(e) { var t; switch (this.encoding = i(e), this.encoding) {
                    case "utf16le":
                        this.text = h, this.end = p, t = 4; break;
                    case "utf8":
                        this.fillLast = f, t = 4; break;
                    case "base64":
                        this.text = d, this.end = g, t = 3; break;
                    default:
                        return this.write = y, void(this.end = b) }
                this.lastNeed = 0, this.lastTotal = 0, this.lastChar = _.allocUnsafe(t) }

            function s(e) { return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2 }

            function a(e, t, r) { var n = t.length - 1; if (n < r) return 0; var i = s(t[n]); return i >= 0 ? (i > 0 && (e.lastNeed = i - 1), i) : --n < r || -2 === i ? 0 : (i = s(t[n]), i >= 0 ? (i > 0 && (e.lastNeed = i - 2), i) : --n < r || -2 === i ? 0 : (i = s(t[n]), i >= 0 ? (i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i) : 0)) }

            function u(e, t, r) { if (128 != (192 & t[0])) return e.lastNeed = 0, "�"; if (e.lastNeed > 1 && t.length > 1) { if (128 != (192 & t[1])) return e.lastNeed = 1, "�"; if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�" } }

            function f(e) { var t = this.lastTotal - this.lastNeed,
                    r = u(this, e, t); return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length)) }

            function l(e, t) { var r = a(this, e, t); if (!this.lastNeed) return e.toString("utf8", t);
                this.lastTotal = r; var n = e.length - (r - this.lastNeed); return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n) }

            function c(e) { var t = e && e.length ? this.write(e) : ""; return this.lastNeed ? t + "�" : t }

            function h(e, t) { if ((e.length - t) % 2 == 0) { var r = e.toString("utf16le", t); if (r) { var n = r.charCodeAt(r.length - 1); if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1) } return r } return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1) }

            function p(e) { var t = e && e.length ? this.write(e) : ""; if (this.lastNeed) { var r = this.lastTotal - this.lastNeed; return t + this.lastChar.toString("utf16le", 0, r) } return t }

            function d(e, t) { var r = (e.length - t) % 3; return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r)) }

            function g(e) { var t = e && e.length ? this.write(e) : ""; return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t }

            function y(e) { return e.toString(this.encoding) }

            function b(e) { return e && e.length ? this.write(e) : "" } var _ = e("safe-buffer").Buffer,
                v = _.isEncoding || function(e) { switch (e = "" + e, e && e.toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                        case "raw":
                            return !0;
                        default:
                            return !1 } };
            r.StringDecoder = o, o.prototype.write = function(e) { if (0 === e.length) return ""; var t, r; if (this.lastNeed) { if (t = this.fillLast(e), void 0 === t) return "";
                    r = this.lastNeed, this.lastNeed = 0 } else r = 0; return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || "" }, o.prototype.end = c, o.prototype.text = l, o.prototype.fillLast = function(e) { return this.lastNeed <= e.length ? (e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), void(this.lastNeed -= e.length)) } }, { "safe-buffer": 32 }],
        34: [function(t, r, n) {
            (function(e) {
                (function() {
                    function e(e, r) {
                        function n() { if (!i) { if (t("throwDeprecation")) throw new Error(r);
                                t("traceDeprecation") ? console.trace(r) : console.warn(r), i = !0 } return e.apply(this, arguments) } if (t("noDeprecation")) return e; var i = !1; return n }

                    function t(e) { try { if (!t.localStorage) return !1 } catch (t) { return !1 } var r = t.localStorage[e]; return null != r && "true" === String(r).toLowerCase() }
                    r.exports = e }).call(this) }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof e ? e : {}) }, {}],
        35: [function(e, t, r) {
            (function(e) {
                (function() {
                    function r(t) { var r = e.allocUnsafe(2); return r.writeUInt8(t >> 8, 0), r.writeUInt8(255 & t, 1), r }

                    function n() { for (var e = 0; e < s; e++) a[e] = r(e) }

                    function i(t) { var r = 4,
                            n = 0,
                            i = 0,
                            o = e.allocUnsafe(r);
                        do n = t % 128 | 0, t = t / 128 | 0, t > 0 && (n |= 128), o.writeUInt8(n, i++); while (t > 0 && i < r); return t > 0 && (i = 0), u ? o.subarray(0, i) : o.slice(0, i) }

                    function o(t) { var r = e.allocUnsafe(4); return r.writeUInt32BE(t, 0), r } var s = 65536,
                        a = {},
                        u = e.isBuffer(e.from([1, 2]).subarray(0, 1));
                    t.exports = { cache: a, generateCache: n, generateNumber: r, genBufVariableByteInt: i, generate4ByteBuffer: o } }).call(this) }).call(this, e("buffer").Buffer) }, { buffer: 3 }],
        36: [function(e, t, r) { var n = function i() { _classCallCheck(this, i), this.cmd = null, this.retain = !1, this.qos = 0, this.dup = !1, this.length = -1, this.topic = null, this.payload = null };
            t.exports = n }, {}],
        37: [function(e, t, r) {
            var n = e("bl"),
                i = e("events"),
                o = e("./packet"),
                s = e("./constants"),
                a = e("debug")("mqtt-packet:parser"),
                u = function(e) {
                    function t() { var e; return _classCallCheck(this, t), e = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)), e.parser = e.constructor.parser, e }
                    return _inherits(t, e), _createClass(t, [{ key: "_resetState", value: function() { a("_resetState: resetting packet, error, _list, and _stateCounter"), this.packet = new o, this.error = null, this._list = n(), this._stateCounter = 0 } }, { key: "parse", value: function(e) { for (this.error && this._resetState(), this._list.append(e), a("parse: current state: %s", this._states[this._stateCounter]);
                                (-1 !== this.packet.length || this._list.length > 0) && this[this._states[this._stateCounter]]() && !this.error;) this._stateCounter++, a("parse: state complete. _stateCounter is now: %d", this._stateCounter), a("parse: packet.length: %d, buffer list length: %d", this.packet.length, this._list.length), this._stateCounter >= this._states.length && (this._stateCounter = 0); return a("parse: exited while loop. packet: %d, buffer list length: %d", this.packet.length, this._list.length), this._list.length } }, { key: "_parseHeader", value: function() { var e = this._list.readUInt8(0); return this.packet.cmd = s.types[e >> s.CMD_SHIFT], this.packet.retain = 0 != (e & s.RETAIN_MASK), this.packet.qos = e >> s.QOS_SHIFT & s.QOS_MASK, this.packet.dup = 0 != (e & s.DUP_MASK), a("_parseHeader: packet: %o", this.packet), this._list.consume(1), !0 } }, { key: "_parseLength", value: function() { var e = this._parseVarByteNum(!0); return e && (this.packet.length = e.value, this._list.consume(e.bytes)), a("_parseLength %d", e.value), !!e } }, { key: "_parsePayload", value: function() { a("_parsePayload: payload %O", this._list); var e = !1; if (0 === this.packet.length || this._list.length >= this.packet.length) { switch (this._pos = 0, this.packet.cmd) {
                                    case "connect":
                                        this._parseConnect(); break;
                                    case "connack":
                                        this._parseConnack(); break;
                                    case "publish":
                                        this._parsePublish(); break;
                                    case "puback":
                                    case "pubrec":
                                    case "pubrel":
                                    case "pubcomp":
                                        this._parseConfirmation(); break;
                                    case "subscribe":
                                        this._parseSubscribe(); break;
                                    case "suback":
                                        this._parseSuback(); break;
                                    case "unsubscribe":
                                        this._parseUnsubscribe(); break;
                                    case "unsuback":
                                        this._parseUnsuback(); break;
                                    case "pingreq":
                                    case "pingresp":
                                        break;
                                    case "disconnect":
                                        this._parseDisconnect(); break;
                                    case "auth":
                                        this._parseAuth(); break;
                                    default:
                                        this._emitError(new Error("Not supported")) }
                                e = !0 } return a("_parsePayload complete result: %s", e), e } }, {
                        key: "_parseConnect",
                        value: function() {
                            var e = void 0,
                                t = void 0,
                                r = void 0,
                                n = void 0;
                            a("_parseConnect");
                            var i = {},
                                o = this.packet,
                                u = this._parseString();
                            if (null === u) return this._emitError(new Error("Cannot parse protocolId"));
                            if ("MQTT" !== u && "MQIsdp" !== u) return this._emitError(new Error("Invalid protocolId"));
                            if (o.protocolId = u, this._pos >= this._list.length) return this._emitError(new Error("Packet too short"));
                            if (o.protocolVersion = this._list.readUInt8(this._pos), 3 !== o.protocolVersion && 4 !== o.protocolVersion && 5 !== o.protocolVersion) return this._emitError(new Error("Invalid protocol version"));
                            if (this._pos++, this._pos >= this._list.length) return this._emitError(new Error("Packet too short"));
                            if (i.username = this._list.readUInt8(this._pos) & s.USERNAME_MASK, i.password = this._list.readUInt8(this._pos) & s.PASSWORD_MASK, i.will = this._list.readUInt8(this._pos) & s.WILL_FLAG_MASK, i.will && (o.will = {}, o.will.retain = 0 != (this._list.readUInt8(this._pos) & s.WILL_RETAIN_MASK), o.will.qos = (this._list.readUInt8(this._pos) & s.WILL_QOS_MASK) >> s.WILL_QOS_SHIFT), o.clean = 0 != (this._list.readUInt8(this._pos) & s.CLEAN_SESSION_MASK), this._pos++, o.keepalive = this._parseNum(), -1 === o.keepalive) return this._emitError(new Error("Packet too short"));
                            if (5 === o.protocolVersion) { var f = this._parseProperties();
                                Object.getOwnPropertyNames(f).length && (o.properties = f) }
                            var l = this._parseString();
                            if (null === l) return this._emitError(new Error("Packet too short"));
                            if (o.clientId = l, a("_parseConnect: packet.clientId: %s", o.clientId), i.will) {
                                if (5 === o.protocolVersion) { var c = this._parseProperties();
                                    Object.getOwnPropertyNames(c).length && (o.will.properties = c) }
                                if (e = this._parseString(), null === e) return this._emitError(new Error("Cannot parse will topic"));
                                if (o.will.topic = e, a("_parseConnect: packet.will.topic: %s", o.will.topic), t = this._parseBuffer(), null === t) return this._emitError(new Error("Cannot parse will payload"));
                                o.will.payload = t, a("_parseConnect: packet.will.paylaod: %s", o.will.payload)
                            }
                            if (i.username) { if (n = this._parseString(), null === n) return this._emitError(new Error("Cannot parse username"));
                                o.username = n, a("_parseConnect: packet.username: %s", o.username) }
                            if (i.password) { if (r = this._parseBuffer(), null === r) return this._emitError(new Error("Cannot parse password"));
                                o.password = r }
                            return this.settings = o, a("_parseConnect: complete"), o
                        }
                    }, { key: "_parseConnack", value: function() { a("_parseConnack"); var e = this.packet; if (this._list.length < 2) return null; if (e.sessionPresent = !!(this._list.readUInt8(this._pos++) & s.SESSIONPRESENT_MASK), 5 === this.settings.protocolVersion ? e.reasonCode = this._list.readUInt8(this._pos++) : e.returnCode = this._list.readUInt8(this._pos++), -1 === e.returnCode || -1 === e.reasonCode) return this._emitError(new Error("Cannot parse return code")); if (5 === this.settings.protocolVersion) { var t = this._parseProperties();
                                Object.getOwnPropertyNames(t).length && (e.properties = t) }
                            a("_parseConnack: complete") } }, { key: "_parsePublish", value: function() { a("_parsePublish"); var e = this.packet; if (e.topic = this._parseString(), null === e.topic) return this._emitError(new Error("Cannot parse topic")); if (!(e.qos > 0) || this._parseMessageId()) { if (5 === this.settings.protocolVersion) { var t = this._parseProperties();
                                    Object.getOwnPropertyNames(t).length && (e.properties = t) }
                                e.payload = this._list.slice(this._pos, e.length), a("_parsePublish: payload from buffer list: %o", e.payload) } } }, { key: "_parseSubscribe", value: function() { a("_parseSubscribe"); var e = this.packet,
                                t = void 0,
                                r = void 0,
                                n = void 0,
                                i = void 0,
                                o = void 0,
                                u = void 0,
                                f = void 0; if (1 !== e.qos) return this._emitError(new Error("Wrong subscribe header")); if (e.subscriptions = [], this._parseMessageId()) { if (5 === this.settings.protocolVersion) { var l = this._parseProperties();
                                    Object.getOwnPropertyNames(l).length && (e.properties = l) } for (; this._pos < e.length;) { if (t = this._parseString(), null === t) return this._emitError(new Error("Cannot parse topic")); if (this._pos >= e.length) return this._emitError(new Error("Malformed Subscribe Payload"));
                                    r = this._parseByte(), n = r & s.SUBSCRIBE_OPTIONS_QOS_MASK, u = 0 != (r >> s.SUBSCRIBE_OPTIONS_NL_SHIFT & s.SUBSCRIBE_OPTIONS_NL_MASK), o = 0 != (r >> s.SUBSCRIBE_OPTIONS_RAP_SHIFT & s.SUBSCRIBE_OPTIONS_RAP_MASK), i = r >> s.SUBSCRIBE_OPTIONS_RH_SHIFT & s.SUBSCRIBE_OPTIONS_RH_MASK, f = { topic: t, qos: n }, 5 === this.settings.protocolVersion && (f.nl = u, f.rap = o, f.rh = i), a("_parseSubscribe: push subscription `%s` to subscription", f), e.subscriptions.push(f) } } } }, { key: "_parseSuback", value: function() { a("_parseSuback"); var e = this.packet; if (this.packet.granted = [], this._parseMessageId()) { if (5 === this.settings.protocolVersion) { var t = this._parseProperties();
                                    Object.getOwnPropertyNames(t).length && (e.properties = t) } for (; this._pos < this.packet.length;) this.packet.granted.push(this._list.readUInt8(this._pos++)) } } }, { key: "_parseUnsubscribe", value: function() { a("_parseUnsubscribe"); var e = this.packet; if (e.unsubscriptions = [], this._parseMessageId()) { if (5 === this.settings.protocolVersion) { var t = this._parseProperties();
                                    Object.getOwnPropertyNames(t).length && (e.properties = t) } for (; this._pos < e.length;) { var r = this._parseString(); if (null === r) return this._emitError(new Error("Cannot parse topic"));
                                    a("_parseUnsubscribe: push topic `%s` to unsubscriptions", r), e.unsubscriptions.push(r) } } } }, { key: "_parseUnsuback", value: function() { a("_parseUnsuback"); var e = this.packet; if (!this._parseMessageId()) return this._emitError(new Error("Cannot parse messageId")); if (5 === this.settings.protocolVersion) { var t = this._parseProperties(); for (Object.getOwnPropertyNames(t).length && (e.properties = t), e.granted = []; this._pos < this.packet.length;) this.packet.granted.push(this._list.readUInt8(this._pos++)) } } }, { key: "_parseConfirmation", value: function() { a("_parseConfirmation: packet.cmd: `%s`", this.packet.cmd); var e = this.packet; if (this._parseMessageId(), 5 === this.settings.protocolVersion && (e.length > 2 && (e.reasonCode = this._parseByte(), a("_parseConfirmation: packet.reasonCode `%d`", e.reasonCode)), e.length > 3)) { var t = this._parseProperties();
                                Object.getOwnPropertyNames(t).length && (e.properties = t) } return !0 } }, { key: "_parseDisconnect", value: function() { var e = this.packet; if (a("_parseDisconnect"), 5 === this.settings.protocolVersion) { e.reasonCode = this._parseByte(); var t = this._parseProperties();
                                Object.getOwnPropertyNames(t).length && (e.properties = t) } return a("_parseDisconnect result: true"), !0 } }, { key: "_parseAuth", value: function() { a("_parseAuth"); var e = this.packet; if (5 !== this.settings.protocolVersion) return this._emitError(new Error("Not supported auth packet for this version MQTT"));
                            e.reasonCode = this._parseByte(); var t = this._parseProperties(); return Object.getOwnPropertyNames(t).length && (e.properties = t), a("_parseAuth: result: true"), !0 } }, { key: "_parseMessageId", value: function() { var e = this.packet; return e.messageId = this._parseNum(), null === e.messageId ? (this._emitError(new Error("Cannot parse messageId")), !1) : (a("_parseMessageId: packet.messageId %d", e.messageId), !0) } }, { key: "_parseString", value: function(e) { var t = this._parseNum(),
                                r = t + this._pos; if (-1 === t || r > this._list.length || r > this.packet.length) return null; var n = this._list.toString("utf8", this._pos, r); return this._pos += t, a("_parseString: result: %s", n), n } }, { key: "_parseStringPair", value: function() { return a("_parseStringPair"), { name: this._parseString(), value: this._parseString() } } }, { key: "_parseBuffer", value: function() { var e = this._parseNum(),
                                t = e + this._pos; if (-1 === e || t > this._list.length || t > this.packet.length) return null; var r = this._list.slice(this._pos, t); return this._pos += e, a("_parseBuffer: result: %o", r), r } }, { key: "_parseNum", value: function() { if (this._list.length - this._pos < 2) return -1; var e = this._list.readUInt16BE(this._pos); return this._pos += 2, a("_parseNum: result: %s", e), e } }, { key: "_parse4ByteNum", value: function() { if (this._list.length - this._pos < 4) return -1; var e = this._list.readUInt32BE(this._pos); return this._pos += 4, a("_parse4ByteNum: result: %s", e), e } }, { key: "_parseVarByteNum", value: function(e) { a("_parseVarByteNum"); for (var t = 4, r = void 0, n = 0, i = 1, o = 0, u = !1, f = this._pos ? this._pos : 0; n < t;) { if (r = this._list.readUInt8(f + n++), o += i * (r & s.VARBYTEINT_MASK), i *= 128, 0 == (r & s.VARBYTEINT_FIN_MASK)) { u = !0; break } if (this._list.length <= n) break } return !u && n === t && this._list.length >= n && this._emitError(new Error("Invalid variable byte integer")), f && (this._pos += n), u = !!u && (e ? { bytes: n, value: o } : o), a("_parseVarByteNum: result: %o", u), u } }, { key: "_parseByte", value: function() { var e = this._list.readUInt8(this._pos); return this._pos++, a("_parseByte: result: %o", e), e } }, { key: "_parseByType", value: function(e) { switch (a("_parseByType: type: %s", e), e) {
                                case "byte":
                                    return 0 !== this._parseByte();
                                case "int8":
                                    return this._parseByte();
                                case "int16":
                                    return this._parseNum();
                                case "int32":
                                    return this._parse4ByteNum();
                                case "var":
                                    return this._parseVarByteNum();
                                case "string":
                                    return this._parseString();
                                case "pair":
                                    return this._parseStringPair();
                                case "binary":
                                    return this._parseBuffer() } } }, { key: "_parseProperties", value: function() { a("_parseProperties"); for (var e = this._parseVarByteNum(), t = this._pos, r = t + e, n = {}; this._pos < r;) { var i = this._parseByte(),
                                    o = s.propertiesCodes[i]; if (!o) return this._emitError(new Error("Unknown property")), !1; if ("userProperties" !== o) n[o] ? Array.isArray(n[o]) ? n[o].push(this._parseByType(s.propertiesTypes[o])) : (n[o] = [n[o]], n[o].push(this._parseByType(s.propertiesTypes[o]))) : n[o] = this._parseByType(s.propertiesTypes[o]);
                                else { n[o] || (n[o] = Object.create(null)); var u = this._parseByType(s.propertiesTypes[o]); if (n[o][u.name])
                                        if (Array.isArray(n[o][u.name])) n[o][u.name].push(u.value);
                                        else { var f = n[o][u.name];
                                            n[o][u.name] = [f], n[o][u.name].push(u.value) }
                                    else n[o][u.name] = u.value } } return n } }, { key: "_newPacket", value: function() { return a("_newPacket"), this.packet && (this._list.consume(this.packet.length), a("_newPacket: parser emit packet: packet.cmd: %s, packet.payload: %s, packet.length: %d", this.packet.cmd, this.packet.payload, this.packet.length), this.emit("packet", this.packet)), a("_newPacket: new packet"), this.packet = new o, this._pos = 0, !0 } }, { key: "_emitError", value: function(e) { a("_emitError"), this.error = e, this.emit("error", e) } }], [{ key: "parser", value: function(e) { return this instanceof t ? (this.settings = e || {}, this._states = ["_parseHeader", "_parseLength", "_parsePayload", "_newPacket"], this._resetState(), this) : (new t).parser(e) } }]), t
                }(i);
            t.exports = u
        }, { "./constants": 7, "./packet": 36, bl: 11, debug: 12, events: 4 }],
        38: [function(e, t, r) {
            (function(r) {
                (function() {
                    function n(e, t, r) { switch (N("generate called"), t.cork && (t.cork(), M(i, t)), q && (q = !1, U()), N("generate: packet.cmd: %s", e.cmd), e.cmd) {
                            case "connect":
                                return o(e, t, r);
                            case "connack":
                                return s(e, t, r);
                            case "publish":
                                return a(e, t, r);
                            case "puback":
                            case "pubrec":
                            case "pubrel":
                            case "pubcomp":
                                return u(e, t, r);
                            case "subscribe":
                                return f(e, t, r);
                            case "suback":
                                return l(e, t, r);
                            case "unsubscribe":
                                return c(e, t, r);
                            case "unsuback":
                                return h(e, t, r);
                            case "pingreq":
                            case "pingresp":
                                return p(e, t, r);
                            case "disconnect":
                                return d(e, t, r);
                            case "auth":
                                return g(e, t, r);
                            default:
                                return t.emit("error", new Error("Unknown command")), !1 } }

                    function i(e) { e.uncork() }

                    function o(e, t, n) { var i = e || {},
                            o = i.protocolId || "MQTT",
                            s = i.protocolVersion || 4,
                            a = i.will,
                            u = i.clean,
                            f = i.keepalive || 0,
                            l = i.clientId || "",
                            c = i.username,
                            h = i.password,
                            p = i.properties;
                        void 0 === u && (u = !0); var d = 0; if (!o || "string" != typeof o && !r.isBuffer(o)) return t.emit("error", new Error("Invalid protocolId")), !1; if (d += o.length + 2, 3 !== s && 4 !== s && 5 !== s) return t.emit("error", new Error("Invalid protocol version")), !1; if (d += 1, "string" != typeof l && !r.isBuffer(l) || !l && 4 !== s || !l && !u) { if (s < 4) return t.emit("error", new Error("clientId must be supplied before 3.1.1")), !1; if (1 * u == 0) return t.emit("error", new Error("clientId must be given if cleanSession set to 0")), !1 } else d += l.length + 2; if ("number" != typeof f || f < 0 || f > 65535 || f % 1 != 0) return t.emit("error", new Error("Invalid keepalive")), !1; if (d += 2, d += 1, 5 === s) { var g = E(t, p); if (!g) return !1;
                            d += g.length } if (a) { if ("object" != ("undefined" == typeof a ? "undefined" : _typeof(a))) return t.emit("error", new Error("Invalid will")), !1; if (!a.topic || "string" != typeof a.topic) return t.emit("error", new Error("Invalid will topic")), !1; if (d += r.byteLength(a.topic) + 2, d += 2, a.payload) { if (!(a.payload.length >= 0)) return t.emit("error", new Error("Invalid will payload")), !1;
                                d += "string" == typeof a.payload ? r.byteLength(a.payload) : a.payload.length } var _ = {}; if (5 === s) { if (_ = E(t, a.properties), !_) return !1;
                                d += _.length } } var v = !1; if (null != c) { if (!R(c)) return t.emit("error", new Error("Invalid username")), !1;
                            v = !0, d += r.byteLength(c) + 2 } if (null != h) { if (!v) return t.emit("error", new Error("Username is required to use password")), !1; if (!R(h)) return t.emit("error", new Error("Invalid password")), !1;
                            d += A(h) + 2 }
                        t.write(T.CONNECT_HEADER), y(t, d), S(t, o), t.write(4 === s ? T.VERSION4 : 5 === s ? T.VERSION5 : T.VERSION3); var m = 0; return m |= null != c ? T.USERNAME_MASK : 0, m |= null != h ? T.PASSWORD_MASK : 0, m |= a && a.retain ? T.WILL_RETAIN_MASK : 0, m |= a && a.qos ? a.qos << T.WILL_QOS_SHIFT : 0, m |= a ? T.WILL_FLAG_MASK : 0, m |= u ? T.CLEAN_SESSION_MASK : 0, t.write(r.from([m])), D(t, f), 5 === s && g.write(), S(t, l), a && (5 === s && _.write(), b(t, a.topic), S(t, a.payload)), null != c && S(t, c), null != h && S(t, h), !0 }

                    function s(e, t, n) { var i = n ? n.protocolVersion : 4,
                            o = e || {},
                            s = 5 === i ? o.reasonCode : o.returnCode,
                            a = o.properties,
                            u = 2; if ("number" != typeof s) return t.emit("error", new Error("Invalid return code")), !1; var f = null; if (5 === i) { if (f = E(t, a), !f) return !1;
                            u += f.length } return t.write(T.CONNACK_HEADER), y(t, u), t.write(o.sessionPresent ? T.SESSIONPRESENT_HEADER : B), t.write(r.from([s])), null != f && f.write(), !0 }

                    function a(e, t, n) { N("publish: packet: %o", e); var i = n ? n.protocolVersion : 4,
                            o = e || {},
                            s = o.qos || 0,
                            a = o.retain ? T.RETAIN_MASK : 0,
                            u = o.topic,
                            f = o.payload || O,
                            l = o.messageId,
                            c = o.properties,
                            h = 0; if ("string" == typeof u) h += r.byteLength(u) + 2;
                        else { if (!r.isBuffer(u)) return t.emit("error", new Error("Invalid topic")), !1;
                            h += u.length + 2 } if (h += r.isBuffer(f) ? f.length : r.byteLength(f), s && "number" != typeof l) return t.emit("error", new Error("Invalid messageId")), !1;
                        s && (h += 2); var p = null; if (5 === i) { if (p = E(t, c), !p) return !1;
                            h += p.length } return t.write(T.PUBLISH_HEADER[s][o.dup ? 1 : 0][a ? 1 : 0]), y(t, h), D(t, A(u)), t.write(u), s > 0 && D(t, l), null != p && p.write(), N("publish: payload: %o", f), t.write(f) }

                    function u(e, t, n) { var i = n ? n.protocolVersion : 4,
                            o = e || {},
                            s = o.cmd || "puback",
                            a = o.messageId,
                            u = o.dup && "pubrel" === s ? T.DUP_MASK : 0,
                            f = 0,
                            l = o.reasonCode,
                            c = o.properties,
                            h = 5 === i ? 3 : 2; if ("pubrel" === s && (f = 1), "number" != typeof a) return t.emit("error", new Error("Invalid messageId")), !1; var p = null; if (5 === i && "object" == ("undefined" == typeof c ? "undefined" : _typeof(c))) { if (p = k(t, c, n, h), !p) return !1;
                            h += p.length } return t.write(T.ACKS[s][f][u][0]), y(t, h), D(t, a), 5 === i && t.write(r.from([l])), null !== p && p.write(), !0 }

                    function f(e, t, n) { N("subscribe: packet: "); var i = n ? n.protocolVersion : 4,
                            o = e || {},
                            s = o.dup ? T.DUP_MASK : 0,
                            a = o.messageId,
                            u = o.subscriptions,
                            f = o.properties,
                            l = 0; if ("number" != typeof a) return t.emit("error", new Error("Invalid messageId")), !1;
                        l += 2; var c = null; if (5 === i) { if (c = E(t, f), !c) return !1;
                            l += c.length } if ("object" != ("undefined" == typeof u ? "undefined" : _typeof(u)) || !u.length) return t.emit("error", new Error("Invalid subscriptions")), !1; for (var h = 0; h < u.length; h += 1) { var p = u[h].topic,
                                d = u[h].qos; if ("string" != typeof p) return t.emit("error", new Error("Invalid subscriptions - invalid topic")), !1; if ("number" != typeof d) return t.emit("error", new Error("Invalid subscriptions - invalid qos")), !1; if (5 === i) { var g = u[h].nl || !1; if ("boolean" != typeof g) return t.emit("error", new Error("Invalid subscriptions - invalid No Local")), !1; var _ = u[h].rap || !1; if ("boolean" != typeof _) return t.emit("error", new Error("Invalid subscriptions - invalid Retain as Published")), !1; var v = u[h].rh || 0; if ("number" != typeof v || v > 2) return t.emit("error", new Error("Invalid subscriptions - invalid Retain Handling")), !1 }
                            l += r.byteLength(p) + 2 + 1 }
                        N("subscribe: writing to stream: %o", T.SUBSCRIBE_HEADER), t.write(T.SUBSCRIBE_HEADER[1][s ? 1 : 0][0]), y(t, l), D(t, a), null !== c && c.write(); var m = !0,
                            w = !0,
                            S = !1,
                            k = void 0; try { for (var C, I = u[Symbol.iterator](); !(w = (C = I.next()).done); w = !0) { var A = C.value,
                                    R = A.topic,
                                    O = A.qos,
                                    B = +A.nl,
                                    L = +A.rap,
                                    M = A.rh,
                                    P = void 0;
                                b(t, R), P = T.SUBSCRIBE_OPTIONS_QOS[O], 5 === i && (P |= B ? T.SUBSCRIBE_OPTIONS_NL : 0, P |= L ? T.SUBSCRIBE_OPTIONS_RAP : 0, P |= M ? T.SUBSCRIBE_OPTIONS_RH[M] : 0), m = t.write(r.from([P])) } } catch (x) { S = !0, k = x } finally { try {!w && I["return"] && I["return"]() } finally { if (S) throw k } } return m }

                    function l(e, t, n) { var i = n ? n.protocolVersion : 4,
                            o = e || {},
                            s = o.messageId,
                            a = o.granted,
                            u = o.properties,
                            f = 0; if ("number" != typeof s) return t.emit("error", new Error("Invalid messageId")), !1; if (f += 2, "object" != ("undefined" == typeof a ? "undefined" : _typeof(a)) || !a.length) return t.emit("error", new Error("Invalid qos vector")), !1; for (var l = 0; l < a.length; l += 1) { if ("number" != typeof a[l]) return t.emit("error", new Error("Invalid qos vector")), !1;
                            f += 1 } var c = null; if (5 === i) { if (c = k(t, u, n, f), !c) return !1;
                            f += c.length } return t.write(T.SUBACK_HEADER), y(t, f), D(t, s), null !== c && c.write(), t.write(r.from(a)) }

                    function c(e, t, n) { var i = n ? n.protocolVersion : 4,
                            o = e || {},
                            s = o.messageId,
                            a = o.dup ? T.DUP_MASK : 0,
                            u = o.unsubscriptions,
                            f = o.properties,
                            l = 0; if ("number" != typeof s) return t.emit("error", new Error("Invalid messageId")), !1; if (l += 2, "object" != ("undefined" == typeof u ? "undefined" : _typeof(u)) || !u.length) return t.emit("error", new Error("Invalid unsubscriptions")), !1; for (var c = 0; c < u.length; c += 1) { if ("string" != typeof u[c]) return t.emit("error", new Error("Invalid unsubscriptions")), !1;
                            l += r.byteLength(u[c]) + 2 } var h = null; if (5 === i) { if (h = E(t, f), !h) return !1;
                            l += h.length }
                        t.write(T.UNSUBSCRIBE_HEADER[1][a ? 1 : 0][0]), y(t, l), D(t, s), null !== h && h.write(); for (var p = !0, d = 0; d < u.length; d++) p = b(t, u[d]); return p }

                    function h(e, t, n) { var i = n ? n.protocolVersion : 4,
                            o = e || {},
                            s = o.messageId,
                            a = o.dup ? T.DUP_MASK : 0,
                            u = o.granted,
                            f = o.properties,
                            l = o.cmd,
                            c = 0,
                            h = 2; if ("number" != typeof s) return t.emit("error", new Error("Invalid messageId")), !1; if (5 === i) { if ("object" != ("undefined" == typeof u ? "undefined" : _typeof(u)) || !u.length) return t.emit("error", new Error("Invalid qos vector")), !1; for (var p = 0; p < u.length; p += 1) { if ("number" != typeof u[p]) return t.emit("error", new Error("Invalid qos vector")), !1;
                                h += 1 } } var d = null; if (5 === i) { if (d = k(t, f, n, h), !d) return !1;
                            h += d.length } return t.write(T.ACKS[l][c][a][0]), y(t, h), D(t, s), null !== d && d.write(), 5 === i && t.write(r.from(u)), !0 }

                    function p(e, t, r) { return t.write(T.EMPTY[e.cmd]) }

                    function d(e, t, n) { var i = n ? n.protocolVersion : 4,
                            o = e || {},
                            s = o.reasonCode,
                            a = o.properties,
                            u = 5 === i ? 1 : 0,
                            f = null; if (5 === i) { if (f = k(t, a, n, u), !f) return !1;
                            u += f.length } return t.write(r.from([T.codes.disconnect << 4])), y(t, u), 5 === i && t.write(r.from([s])), null !== f && f.write(), !0 }

                    function g(e, t, n) { var i = n ? n.protocolVersion : 4,
                            o = e || {},
                            s = o.reasonCode,
                            a = o.properties,
                            u = 5 === i ? 1 : 0;
                        5 !== i && t.emit("error", new Error("Invalid mqtt version for auth packet")); var f = k(t, a, n, u); return !!f && (u += f.length, t.write(r.from([T.codes.auth << 4])), y(t, u), t.write(r.from([s])), null !== f && f.write(), !0) }

                    function y(e, t) { if (t > T.VARBYTEINT_MAX) return e.emit("error", new Error("Invalid variable byte integer: " + t)), !1; var r = H[t]; return r || (r = j(t), t < 16384 && (H[t] = r)), N("writeVarByteInt: writing to stream: %o", r), e.write(r) }

                    function b(e, t) { var n = r.byteLength(t); return D(e, n), N("writeString: %s", t), e.write(t, "utf8") }

                    function _(e, t, r) { b(e, t), b(e, r) }

                    function v(e, t) { return N("writeNumberCached: number: %d", t), N("writeNumberCached: %o", P[t]), e.write(P[t]) }

                    function m(e, t) { var r = x(t); return N("writeNumberGenerated: %o", r), e.write(r) }

                    function w(e, t) { var r = F(t); return N("write4ByteNumber: %o", r), e.write(r) }

                    function S(e, t) { "string" == typeof t ? b(e, t) : t ? (D(e, t.length), e.write(t)) : D(e, 0) }

                    function E(e, t) {
                        function n(t, n) { var i = T.propertiesTypes[t],
                                o = 0; switch (i) {
                                case "byte":
                                    if ("boolean" != typeof n) return e.emit("error", new Error("Invalid " + t + ": " + n)), !1;
                                    o += 2; break;
                                case "int8":
                                    if ("number" != typeof n || n < 0 || n > 255) return e.emit("error", new Error("Invalid " + t + ": " + n)), !1;
                                    o += 2; break;
                                case "binary":
                                    if (n && null === n) return e.emit("error", new Error("Invalid " + t + ": " + n)), !1;
                                    o += 1 + r.byteLength(n) + 2; break;
                                case "int16":
                                    if ("number" != typeof n || n < 0 || n > 65535) return e.emit("error", new Error("Invalid " + t + ": " + n)), !1;
                                    o += 3; break;
                                case "int32":
                                    if ("number" != typeof n || n < 0 || n > 4294967295) return e.emit("error", new Error("Invalid " + t + ": " + n)), !1;
                                    o += 5; break;
                                case "var":
                                    if ("number" != typeof n || n < 0 || n > 268435455) return e.emit("error", new Error("Invalid " + t + ": " + n)), !1;
                                    o += 1 + r.byteLength(j(n)); break;
                                case "string":
                                    if ("string" != typeof n) return e.emit("error", new Error("Invalid " + t + ": " + n)), !1;
                                    o += 3 + r.byteLength(n.toString()); break;
                                case "pair":
                                    if ("object" != ("undefined" == typeof n ? "undefined" : _typeof(n))) return e.emit("error", new Error("Invalid " + t + ": " + n)), !1;
                                    o += Object.getOwnPropertyNames(n).reduce(function(e, t) { var i = n[t]; return e += Array.isArray(i) ? i.reduce(function(e, n) { return e += 3 + r.byteLength(t.toString()) + 2 + r.byteLength(n.toString()) }, 0) : 3 + r.byteLength(t.toString()) + 2 + r.byteLength(n[t].toString()) }, 0); break;
                                default:
                                    return e.emit("error", new Error("Invalid property " + t + ": " + n)), !1 } return o } if ("object" != ("undefined" == typeof t ? "undefined" : _typeof(t)) || null != t.length) return { length: 1, write: function() { I(e, {}, 0) } }; var i = 0; if (t)
                            for (var o in t) { var s = 0,
                                    a = 0,
                                    u = t[o]; if (Array.isArray(u))
                                    for (var f = 0; f < u.length; f++) { if (a = n(o, u[f]), !a) return !1;
                                        s += a } else { if (a = n(o, u), !a) return !1;
                                        s = a }
                                if (!s) return !1;
                                i += s }
                        var l = r.byteLength(j(i)); return { length: l + i, write: function() { I(e, t, i) } } }

                    function k(e, t, r, n) { var i = ["reasonString", "userProperties"],
                            o = r && r.properties && r.properties.maximumPacketSize ? r.properties.maximumPacketSize : 0,
                            s = E(e, t); if (o)
                            for (; n + s.length > o;) { var a = i.shift(); if (!a || !t[a]) return !1;
                                delete t[a], s = E(e, t) }
                        return s }

                    function C(e, t, n) { var i = T.propertiesTypes[t]; switch (i) {
                            case "byte":
                                e.write(r.from([T.properties[t]])), e.write(r.from([+n])); break;
                            case "int8":
                                e.write(r.from([T.properties[t]])), e.write(r.from([n])); break;
                            case "binary":
                                e.write(r.from([T.properties[t]])), S(e, n); break;
                            case "int16":
                                e.write(r.from([T.properties[t]])), D(e, n); break;
                            case "int32":
                                e.write(r.from([T.properties[t]])), w(e, n); break;
                            case "var":
                                e.write(r.from([T.properties[t]])), y(e, n); break;
                            case "string":
                                e.write(r.from([T.properties[t]])), b(e, n); break;
                            case "pair":
                                Object.getOwnPropertyNames(n).forEach(function(i) { var o = n[i];
                                    Array.isArray(o) ? o.forEach(function(n) { e.write(r.from([T.properties[t]])), _(e, i.toString(), n.toString()) }) : (e.write(r.from([T.properties[t]])), _(e, i.toString(), o.toString())) }); break;
                            default:
                                return e.emit("error", new Error("Invalid property " + t + " value: " + n)), !1 } }

                    function I(e, t, r) { y(e, r); for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n) && null !== t[n]) { var i = t[n]; if (Array.isArray(i))
                                    for (var o = 0; o < i.length; o++) C(e, n, i[o]);
                                else C(e, n, i) } }

                    function A(e) { return e ? e instanceof r ? e.length : r.byteLength(e) : 0 }

                    function R(e) { return "string" == typeof e || e instanceof r } var T = e("./constants"),
                        O = r.allocUnsafe(0),
                        B = r.from([0]),
                        L = e("./numbers"),
                        M = e("process-nextick-args").nextTick,
                        N = e("debug")("mqtt-packet:writeToStream"),
                        P = L.cache,
                        x = L.generateNumber,
                        U = L.generateCache,
                        j = L.genBufVariableByteInt,
                        F = L.generate4ByteBuffer,
                        D = v,
                        q = !0;
                    Object.defineProperty(n, "cacheNumbers", { get: function() { return D === v }, set: function(e) { e ? (P && 0 !== Object.keys(P).length || (q = !0), D = v) : (q = !1, D = m) } }); var H = {};
                    t.exports = n }).call(this) }).call(this, e("buffer").Buffer) }, { "./constants": 7, "./numbers": 35, buffer: 3, debug: 12, "process-nextick-args": 16 }]
    }, {}, [9]);
    var i = { blockSeen: !0, blockTyping: !0 };
    e.addEventListener("message", function(e) { var t = e.data; if (e.isTrusted && e.origin.includes(".facebook.com") && "j2team_security" === t.sender && "sync_settings_response" === t.cmd) { var r = t.data; "blockSeen" in r && (i.blockSeen = r.blockSeen), "blockTypingChat" in r && (i.blockTyping = r.blockTypingChat) } }), e.postMessage({ cmd: "sync_settings", sender: "facebook_content_script" });
    var o = ["/send_additional_contacts", "/br_sr", "/sr_res", "/ls_app_settings"],
        s = ["pingreq", "subscribe"],
        a = t(),
        u = { protocolVersion: 3 },
        f = [],
        l = new Proxy(e.WebSocket, { construct: function(e, t) { var l = new(Function.prototype.bind.apply(e, [null].concat(_toConsumableArray(t)))),
                    c = function(e) {},
                    h = function(e) { e = new Uint8Array(e.data); var t = parser(u);
                        2e3 < e.length && (t.on("packet", function(e) { "publish" === e.cmd && "/ls_resp" === e.topic && 1 === e.qos && f.push(e.messageId) }), t.parse(e)) },
                    p = function d(e) { l.removeEventListener("open", c), l.removeEventListener("close", d), l.removeEventListener("message", h) }; return l.addEventListener("message", h), l.addEventListener("open", c), l.addEventListener("close", p), l.send = new Proxy(l.send, { apply: function(e, t, f) { var l = new Uint8Array(f[0]),
                            c = parser(u);
                        c.on("packet", function(l) { var c = void 0; try { if (o.includes(l.topic) || s.includes(l.cmd)) return e.apply(t, f); if (l.payload && "/ls_req" === l.topic) { var h = r(Buffer.from(l.payload).toString()); if (i.blockTyping && h && 4 === h.type) { var p = r(h.payload); if (p || e.apply(t, f), c = r(p.payload), c && c.thread_key) return } if (i.blockSeen && h && 3 === h.type) { var d = r(h.payload); if (d && d.tasks && 1 <= d.tasks.length) { for (var g = !1, y = 0; y < d.tasks.length; y++) "21" === d.tasks[y].label && (g = !0, d.tasks[y].payload = JSON.stringify({ thread_id: a.toString(), last_read_watermark_ts: n() })); return g ? (h.payload = JSON.stringify(d), l.payload = Buffer.from(JSON.stringify(h)), f[0] = generate(l, u), e.apply(t, f)) : e.apply(t, f) } } }
                                e.apply(t, f) } catch (b) { e.apply(t, f) } }), c.on("error", function(r) { e.apply(t, f) }), c.parse(l) } }), l } });
    e.WebSocket = l
}(window);
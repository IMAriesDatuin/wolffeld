! function (e) {
	"use strict"
	function t(o) {
		if (n[o]) return n[o].exports;
		var r = n[o] = {
			i: o,
			l: !1,
			exports: {}
		};
		return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
	}
	var n = {};
	t.m = e, t.c = n, t.d = function (e, n, o) {
		t.o(e, n) || Object.defineProperty(e, n, {
			configurable: !1,
			enumerable: !0,
			get: o
		})
	}, t.n = function (e) {
		var n = e && e.__esModule ? function () {
			return e.default
		} : function () {
			return e
		};
		return t.d(n, "a", n), n
	}, t.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, t.p = "", t(t.s = 0)
}([function (e, t, n) {
	"use strict";
	var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
			return typeof e
		} : function (e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		r = n(1),
		u = {
			passive: !0,
			capture: !1
		},
		//i = ["scroll", "wheel", "touchstart", "touchmove", "touchenter", "touchend", "touchleave", "mouseout", "mouseleave", "mouseup", "mousedown", "mousemove", "mouseenter", "mousewheel", "mouseover"],
		i = ["wheel", "mousewheel"],
		s = function (e, t) {
			return void 0 !== e ? e : -1 !== i.indexOf(t) && u.passive
		},
		c = function (e) {
			var t = Object.getOwnPropertyDescriptor(e, "passive");
			return t && !0 !== t.writable && void 0 === t.set ? Object.assign({}, e) : e
		},
		p = function (e, t) {
			return t ? function (t) {
				return t.preventDefault = r.noop, e.call(this, t)
			} : e
		};
	if ((0, r.eventListenerOptionsSupported)()) {
		var a = EventTarget.prototype.addEventListener;
		! function (e) {
			EventTarget.prototype.addEventListener = function (t, n, r) {
				var i = "object" === (void 0 === r ? "undefined" : o(r)) && null !== r,
					a = i ? r.capture : r;
				r = i ? c(r) : {}, r.passive = s(r.passive, t), r.capture = void 0 === a ? u.capture : a, n = p(n, r.passive), e.call(this, t, n, r)
			}
		}(a)
	}
}, function (e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	t.eventListenerOptionsSupported = function () {
		var e = !1;
		try {
			var t = Object.defineProperty({}, "passive", {
				get: function () {
					e = !0
				}
			});
			window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
		} catch (e) {}
		return e
	}, t.noop = function () {}
}]);
//# sourceMappingURL=index.js.map

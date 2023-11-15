"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = exports.ColorPlayer = void 0;
function ColorPlayer(initialColor, cb) {
    var InitialColor = /** @class */ (function () {
        function InitialColor(value) {
            var _a = value.split(' '), Lv = _a[0], Cv = _a[1], Hv = _a[2], av = _a[4];
            this.Lv = parseFloat(Lv);
            this.Cv = parseFloat(Cv);
            this.Hv = parseFloat(Hv);
            this.av = parseFloat(av);
        }
        Object.defineProperty(InitialColor.prototype, "L", {
            get: function () {
                return this.Lv;
            },
            set: function (v) {
                if (v < 0 || v > 100) {
                    this.Lv = Math.min(100, Math.max(0, v));
                }
                else {
                    this.Lv = v;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InitialColor.prototype, "C", {
            get: function () {
                return this.Cv;
            },
            set: function (v) {
                if (v < 0 || v > 0.37) {
                    this.Cv = Math.min(0.37, Math.max(0, v));
                }
                else {
                    this.Cv = v;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InitialColor.prototype, "H", {
            get: function () {
                return this.Hv;
            },
            set: function (v) {
                if (v < 0 || v > 360) {
                    this.Hv = Math.min(360, Math.max(0, v));
                }
                else {
                    this.Hv = v;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(InitialColor.prototype, "a", {
            get: function () {
                return this.av;
            },
            set: function (v) {
                if (v < 0 || v > 1) {
                    this.av = Math.min(1, Math.max(0, v));
                }
                else {
                    this.av = v;
                }
            },
            enumerable: false,
            configurable: true
        });
        InitialColor.prototype.toString = function () {
            return "".concat(this.L.toFixed(2), "% ").concat(this.C.toFixed(2), " ").concat(this.H.toFixed(2), " / ").concat(this.a.toFixed(2));
        };
        return InitialColor;
    }());
    return function decorator(target, _a) {
        var kind = _a.kind, addInitializer = _a.addInitializer;
        if (kind === "class") {
            return /** @class */ (function (_super) {
                __extends(class_1, _super);
                function class_1() {
                    var _this = _super.call(this, target, { kind: kind, addInitializer: addInitializer }) || this;
                    _this.cb = cb;
                    _this.initialColor = new InitialColor(initialColor);
                    cb(new InitialColor(initialColor).toString());
                    return _this;
                }
                return class_1;
            }(target));
        }
    };
}
exports.ColorPlayer = ColorPlayer;
function Color(component, coeff) {
    return function (fn, _a) {
        var kind = _a.kind;
        if (kind === "method") {
            return function (octave) {
                this.initialColor[component] += ((parseFloat(octave) - 3) * parseFloat(coeff));
                this.cb(this.initialColor.toString());
                fn.call(this.octave);
            };
        }
        return fn;
    };
}
exports.Color = Color;

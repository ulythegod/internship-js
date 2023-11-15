"use strict";
import * as decorators_1 from "./decorators";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
//var decorators_1 = require("./decorators");
var Piano = function () {
    var _classDecorators = [(0, decorators_1.ColorPlayer)("48% 0.27 274 / 1", function (color) { return console.log(color); })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _playA_decorators;
    var _playB_decorators;
    var _playC_decorators;
    var _playD_decorators;
    var _playE_decorators;
    var _playF_decorators;
    var _playG_decorators;
    var Piano = _classThis = /** @class */ (function () {
        function Piano_1() {
            __runInitializers(this, _instanceExtraInitializers);
        }
        Piano_1.prototype.playA = function (octave) {
            console.log("A" + octave);
        };
        Piano_1.prototype.playB = function (octave) {
            console.log("B" + octave);
        };
        Piano_1.prototype.playC = function (octave) {
            console.log("C" + octave);
        };
        Piano_1.prototype.playD = function (octave) { };
        Piano_1.prototype.playE = function (octave) { };
        Piano_1.prototype.playF = function (octave) { };
        Piano_1.prototype.playG = function (octave) { };
        return Piano_1;
    }());
    __setFunctionName(_classThis, "Piano");
    (function () {
        _playA_decorators = [(0, decorators_1.Color)("L", "10%")];
        _playB_decorators = [(0, decorators_1.Color)("C", "0.15")];
        _playC_decorators = [(0, decorators_1.Color)("H", "0.03")];
        _playD_decorators = [(0, decorators_1.Color)("L", "10%")];
        _playE_decorators = [(0, decorators_1.Color)("C", "0.15")];
        _playF_decorators = [(0, decorators_1.Color)("H", "0.1")];
        _playG_decorators = [(0, decorators_1.Color)("a", "0.4")];
        __esDecorate(_classThis, null, _playA_decorators, { kind: "method", name: "playA", static: false, private: false, access: { has: function (obj) { return "playA" in obj; }, get: function (obj) { return obj.playA; } } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _playB_decorators, { kind: "method", name: "playB", static: false, private: false, access: { has: function (obj) { return "playB" in obj; }, get: function (obj) { return obj.playB; } } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _playC_decorators, { kind: "method", name: "playC", static: false, private: false, access: { has: function (obj) { return "playC" in obj; }, get: function (obj) { return obj.playC; } } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _playD_decorators, { kind: "method", name: "playD", static: false, private: false, access: { has: function (obj) { return "playD" in obj; }, get: function (obj) { return obj.playD; } } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _playE_decorators, { kind: "method", name: "playE", static: false, private: false, access: { has: function (obj) { return "playE" in obj; }, get: function (obj) { return obj.playE; } } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _playF_decorators, { kind: "method", name: "playF", static: false, private: false, access: { has: function (obj) { return "playF" in obj; }, get: function (obj) { return obj.playF; } } }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _playG_decorators, { kind: "method", name: "playG", static: false, private: false, access: { has: function (obj) { return "playG" in obj; }, get: function (obj) { return obj.playG; } } }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Piano = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Piano = _classThis;
}();
var piano = new Piano(); // console.log("48.00% 0.27 274.00 / 1.00")
piano.playA(2); // console.log("38.00% 0.27 274.00 / 1.00")
piano.playA(4); // console.log("48.00% 0.27 274.00 / 1.00")
piano.playB(3); // console.log("48.00% 0.27 274.00 / 1.00")
console.log('-------------------------------------');
var piano2 = new Piano(); // console.log("48.00% 0.27 274.00 / 1.00")
piano2.playA(2); // console.log("38.00% 0.27 274.00 / 1.00")
piano2.playA(4); // console.log("48.00% 0.27 274.00 / 1.00")
piano2.playB(3); // console.log("48.00% 0.27 274.00 / 1.00")

export default piano2;

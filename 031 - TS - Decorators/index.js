// exemplo decorator
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
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
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
function myDecorator() {
    console.log("Iniciando o decorator!");
    return function (target, propertyKey, descriptor) {
        console.log("myDecorator(): executado");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
var MyClass = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _testing_decorators;
    return _a = /** @class */ (function () {
            function MyClass() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            MyClass.prototype.testing = function () {
                console.log("Terminando execução do método");
            };
            return MyClass;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _testing_decorators = [myDecorator()];
            __esDecorate(_a, null, _testing_decorators, { kind: "method", name: "testing", static: false, private: false, access: { has: function (obj) { return "testing" in obj; }, get: function (obj) { return obj.testing; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var myObj = new MyClass();
myObj.testing();
// multoplos decorators
function Decorator1(constructor) {
    console.log("Decorator 1 executado!");
}
function Decorator2(constructor) {
    console.log("Decorator 2 executado!");
}
var MinhaClasse = function () {
    var _classDecorators = [Decorator1, Decorator2];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var MinhaClasse = _classThis = /** @class */ (function () {
        function MinhaClasse_1() {
        }
        return MinhaClasse_1;
    }());
    __setFunctionName(_classThis, "MinhaClasse");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MinhaClasse = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MinhaClasse = _classThis;
}();

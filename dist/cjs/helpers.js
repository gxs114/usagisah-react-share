"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBoolean = exports.isUndefined = exports.isEmpty = exports.compose = void 0;
function compose(...fns) {
    return function (value) {
        return fns.reduce((a, b) => b(a), value);
    };
}
exports.compose = compose;
const isEmpty = (value) => {
    return value === null || value === undefined || value === "";
};
exports.isEmpty = isEmpty;
const isUndefined = (value) => {
    return value === undefined;
};
exports.isUndefined = isUndefined;
const isBoolean = (value) => {
    return typeof value === "boolean";
};
exports.isBoolean = isBoolean;
//# sourceMappingURL=helpers.js.map
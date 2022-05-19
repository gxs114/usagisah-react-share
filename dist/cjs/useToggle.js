"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToggle = void 0;
const react_1 = require("react");
function useToggle(initialValue) {
    switch (typeof initialValue) {
        case "boolean":
            return withBoolean(initialValue);
        case "number":
            return withNumber(initialValue);
        case "object":
            if (Array.isArray(initialValue)) {
                return withArray(initialValue);
            }
        case "string":
            return withArray(initialValue);
        default:
            throw Error("useToggle: value must be boolean or array or number");
    }
}
exports.useToggle = useToggle;
function withBoolean(value) {
    const [bool, setBool] = (0, react_1.useState)(value);
    const toggle = () => setBool(!bool);
    (0, react_1.useLayoutEffect)(() => {
        setBool(value);
    }, [value]);
    return [bool, toggle, setBool];
}
function withNumber(value) {
    const [n, setN] = (0, react_1.useState)(value);
    const toggle = () => setN(n + 1);
    (0, react_1.useLayoutEffect)(() => {
        setN(value);
    }, [value]);
    return [n, toggle, setN];
}
function withArray(value) {
    const [ary, setAry] = (0, react_1.useState)(value);
    const [index, setIndex] = (0, react_1.useState)(0);
    const toggle = () => {
        return ary.length === 0
            ? null
            : ary[index + 1]
                ? setIndex(index + 1)
                : setIndex(0);
    };
    (0, react_1.useLayoutEffect)(() => {
        setAry(value);
    }, [value]);
    return [ary[index], toggle, setAry];
}
//# sourceMappingURL=useToggle.js.map
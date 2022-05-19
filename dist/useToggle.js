import { useLayoutEffect, useState } from "react";
export function useToggle(initialValue) {
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
function withBoolean(value) {
    const [bool, setBool] = useState(value);
    const toggle = () => setBool(!bool);
    useLayoutEffect(() => {
        setBool(value);
    }, [value]);
    return [bool, toggle, setBool];
}
function withNumber(value) {
    const [n, setN] = useState(value);
    const toggle = () => setN(n + 1);
    useLayoutEffect(() => {
        setN(value);
    }, [value]);
    return [n, toggle, setN];
}
function withArray(value) {
    const [ary, setAry] = useState(value);
    const [index, setIndex] = useState(0);
    const toggle = () => {
        return ary.length === 0
            ? null
            : ary[index + 1]
                ? setIndex(index + 1)
                : setIndex(0);
    };
    useLayoutEffect(() => {
        setAry(value);
    }, [value]);
    return [ary[index], toggle, setAry];
}
//# sourceMappingURL=useToggle.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLayoutDebounce = exports.useDebounce = void 0;
const react_1 = require("react");
/**
 * @description 防抖函数，只有间隔指定时间才会执行，内部使用 useEffect 监听，没有闭包陷阱
 * @param fn 要执行的函数
 * @param deeps 监听的值的依赖数组
 * @param delay 防抖时间，默认是 700ms
 *
 * @example
 * const [input] = useState("")
 * useDebounce(() => {
 *  // do something
 * }, [input], 700)
 */
function useDebounce(fn, deeps, delay = 700) {
    const timer = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        clearTimeout(timer.current);
        timer.current = setTimeout(fn, delay);
    }, deeps);
}
exports.useDebounce = useDebounce;
/**
 * @description 防抖函数，内部使用 useEffect 监听，没有闭包陷阱
 * @param fn 要执行的函数
 * @param deeps 监听的值的依赖数组
 * @param delay 防抖时间，默认是 700ms
 *
 * @example
 * const [input] = useState("")
 * useLayoutDebounce(() => {
 *  // do something
 * }, [input], 700)
 */
function useLayoutDebounce(fn, deeps, delay = 700) {
    const timer = (0, react_1.useRef)();
    (0, react_1.useLayoutEffect)(() => {
        clearTimeout(timer.current);
        timer.current = setTimeout(fn, delay);
    }, deeps);
}
exports.useLayoutDebounce = useLayoutDebounce;
//# sourceMappingURL=useDebounce.js.map
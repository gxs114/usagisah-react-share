"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLayoutThrottled = exports.useThrottled = void 0;
const react_1 = require("react");
/**
 * @description 节流函数，一定时间内只会执行一次，内部使用 useEffect 监听，没有闭包陷阱
 * @param fn 要执行的函数
 * @param deeps 监听的值的依赖数组
 * @param delay 节流时间，默认是 700ms
 *
 * @example
 * const [input] = useState("")
 * useThrottled(() => {
 *  // do something
 * }, [input], 700)
 */
function useThrottled(fn, deeps, delay = 700) {
    const timer = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        if (timer.current) {
            return;
        }
        timer.current = setTimeout(() => {
            fn();
            timer.current = null;
        }, delay);
    }, deeps);
}
exports.useThrottled = useThrottled;
/**
 * @description 节流函数，内部使用 useLayoutEffect 监听，没有闭包陷阱
 * @param fn 要执行的函数
 * @param deeps 监听的值的依赖数组
 * @param delay 节流时间，默认是 700ms
 *
 * @example
 * const [input] = useState("")
 * useLayoutThrottled(() => {
 *  // do something
 * }, [input], 700)
 */
function useLayoutThrottled(fn, deeps, delay = 700) {
    const timer = (0, react_1.useRef)();
    (0, react_1.useLayoutEffect)(() => {
        if (timer.current) {
            return;
        }
        timer.current = setTimeout(fn, delay);
    }, deeps);
}
exports.useLayoutThrottled = useLayoutThrottled;
//# sourceMappingURL=useThrottled.js.map
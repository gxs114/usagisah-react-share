"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMounted = void 0;
const react_1 = require("react");
/**
 * @description 只会在组件挂载后执行一次
 * @param fn 执行的回调函数
 * @param onLayout 默认使用useEffect，如果需要使用useLayoutEffect，请传入true
 * @example
 * 在 useEffect 中执行
 * useMounted(() => {
 *    // do something
 * })
 *
 * @example
 * 在 useLayoutEffect 中执行
 * useMounted(() => {
 *  // do something
 * }, true)
 */
function useMounted(fn, onLayout = false) {
    const first = (0, react_1.useRef)(true);
    const Effect = onLayout ? react_1.useLayoutEffect : react_1.useEffect;
    Effect(() => {
        if (first.current) {
            first.current = false;
            fn();
        }
    }, []);
}
exports.useMounted = useMounted;
//# sourceMappingURL=useMounted.js.map
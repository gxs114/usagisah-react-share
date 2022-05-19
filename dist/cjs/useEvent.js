"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEvent = void 0;
const react_1 = require("react");
/**
 * @description 返回一个函数，它没有闭包陷阱，返回的引用值永远不变
 * @param fn 一个任意函数
 *
 * @example
 * const fn = useEvent((e) => {
 *  console.log("click")
 * })
 *
 * fn(e)
 */
function useEvent(fn) {
    const ref = (0, react_1.useRef)(fn);
    ref.current = fn;
    return (0, react_1.useCallback)((...args) => {
        ref.current(...args);
    }, []);
}
exports.useEvent = useEvent;
//# sourceMappingURL=useEvent.js.map
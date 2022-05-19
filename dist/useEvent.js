import { useCallback, useRef } from "react";
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
export function useEvent(fn) {
    const ref = useRef(fn);
    ref.current = fn;
    return useCallback((...args) => {
        ref.current(...args);
    }, []);
}
//# sourceMappingURL=useEvent.js.map
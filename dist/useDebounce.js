import { useEffect, useLayoutEffect, useRef } from "react";
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
export function useDebounce(fn, deeps, delay = 700) {
    const timer = useRef();
    useEffect(() => {
        clearTimeout(timer.current);
        timer.current = setTimeout(fn, delay);
    }, deeps);
}
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
export function useLayoutDebounce(fn, deeps, delay = 700) {
    const timer = useRef();
    useLayoutEffect(() => {
        clearTimeout(timer.current);
        timer.current = setTimeout(fn, delay);
    }, deeps);
}
//# sourceMappingURL=useDebounce.js.map
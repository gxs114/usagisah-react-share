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
export declare function useThrottled(fn: () => void, deeps: unknown[], delay?: number): void;
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
export declare function useLayoutThrottled(fn: () => void, deeps: unknown[], delay?: number): void;

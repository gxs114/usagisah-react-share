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
export declare function useMounted(fn: () => void, onLayout?: boolean): void;

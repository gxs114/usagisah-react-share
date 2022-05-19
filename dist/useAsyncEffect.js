import { useEffect, useLayoutEffect } from 'react';
/**
 * @description 一个能直接传异步函数的 useEffect | useLayoutEffect 函数，
 * 注意因为是传的异步函数，所以卸载时的函数就不会被执行了
 * @param fn 一个任意函数
 * @param deeps 依赖数组
 * @param layout 是否是 useLayoutEffect，默认是 false，就是 useEffect
 *
 * @example
 * useAsyncEffect(async () => {
 *  const res = await axios.get("")
 *  // do something
 * })
 */
export function useAsyncEffect(fn, deeps, layout = false) {
    const Effect = layout ? useLayoutEffect : useEffect;
    Effect(() => {
        fn();
    }, deeps);
}
//# sourceMappingURL=useAsyncEffect.js.map
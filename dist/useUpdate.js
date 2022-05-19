import { useEffect, useLayoutEffect, useRef } from "react";
/**
 * @description 会跳过第一次执行，第二次才会执行的 useEffect
 */
export function useUpdate(fn, deeps) {
    const first = useRef(true);
    useEffect(() => {
        if (first.current) {
            first.current = false;
            return;
        }
        return fn();
    }, deeps);
}
/**
 * @description 会跳过第一次执行，第二次才会执行的 useLayoutEffect
 */
export function useLayoutUpdate(fn, deeps) {
    const first = useRef(true);
    useLayoutEffect(() => {
        if (first.current) {
            first.current = false;
            return;
        }
        return fn();
    }, deeps);
}
//# sourceMappingURL=useUpdate.js.map
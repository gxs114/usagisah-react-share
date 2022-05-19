import { DependencyList, EffectCallback } from "react";
/**
 * @description 会跳过第一次执行，第二次才会执行的 useEffect
 */
export declare function useUpdate(fn: EffectCallback, deeps?: DependencyList): void;
/**
 * @description 会跳过第一次执行，第二次才会执行的 useLayoutEffect
 */
export declare function useLayoutUpdate(fn: EffectCallback, deeps?: DependencyList): void;

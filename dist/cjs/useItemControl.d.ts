import { Dispatch } from "react";
/**
 * @description 创建一个状态管理器
 * @example
 * //父组件
 * const [filterIns, bindFilter] = useItemControl()
 * <Filters {...filters}></Filters>
 *
 * //子组件
 * function Filters({ useItemState }: ItemStateProps) {
 *  const [state, setState] = useItemState("") //相当于 useState
 * }
 */
export declare function useItemControl(): readonly [{
    readonly validate: () => boolean;
    readonly reset: () => void;
    readonly state: () => Record<string, any>;
}, {
    readonly useItemState: <T>(key: string, initState: T, { validate, factory, submit }?: ItemStateOptions<T>) => readonly [T, (newValue: T) => void, ...any[]];
}];
export declare type ItemStateProps = {
    useItemState: <T>(key: string, initState: T, options?: ItemStateOptions<T>) => readonly [T, (newValue: T) => void, ...any[]];
};
declare type ItemStateOptions<T> = {
    validate?: (state: T) => boolean;
    factory?: (initState: any) => [T, Dispatch<T>, ...any[]];
    submit?: (state: T) => any;
};
export {};

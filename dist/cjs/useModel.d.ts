/// <reference types="react" />
declare type ModelOptions = {
    value?: any;
    filters?: Array<(value: string) => string>;
    skipError?: boolean;
};
/**
 * @description 双向数据绑定
 * @params
 *  value: any, 初始值，默认是空字符串 ''
 *
 *  filters: Func[], 可选， 过滤器，每次输入时都会调用这些过滤器，过滤器的返回值会作为新的 value
 *
 *  skipError: boolean 可选，默认是 false，如果为 true，则不会抛出错误，更新会被置为 null
 *
 * @description 内置过滤器
 * OnlyNumber： 只能输入整数数字
 *
 * @example
 * const [value, bindValue, setValue] = useModel('')
 * <Input {...bindValue} />
 */
export declare function useModel({ value, filters, skipError }: ModelOptions): readonly [any, {
    readonly value: any;
    readonly onChange: (v: any) => void;
}, import("react").Dispatch<any>];
/**
 * @description 双向数据绑定的过滤器，只能输入整数
 */
export declare function OnlyNumber(value: string): string;
/**
 * @description 双向数据绑定，用于兼容 useItemState 的组件
 * @example
 * useItemState("input", "", {
 *  factory: withModel({
 *    filters: [OnlyNumber],
 *    skipError: false
 *  })
 * })
 */
export declare function withModel(options?: Omit<ModelOptions, "value">): (value: any) => any;
export declare function useModelChecked(checked: boolean): readonly [boolean, import("react").Dispatch<import("react").SetStateAction<boolean>>, {
    readonly checked: boolean;
    readonly onChange: (v: any) => void;
}];
export declare function withModelChecked(): (checked: boolean) => any;
export {};

import { Dispatch, SetStateAction } from "react";
/**
 * @description 参数支持4种类型：boolean, number, string, Array<any>
 * 返回值类型为 [当前值, 自动切换值, setState原值值函数]
 *
 * @example
 * const [bool, toggleBool, setBool] = useToggle(true)
 * const [aStr, toggleAStr, setAStr] = useToggle([1,2,3])
 * const [num, toggleNum, setNum] = useToggle(1)
 * const [str, toggleStr, setStr] = useToggle("123")  // 如果是字符串，会被拆解成数组，按照数组模式来切换
 */
export declare function useToggle(initialValue: boolean): ReturnType<typeof withBoolean>;
export declare function useToggle(initialValue: number): ReturnType<typeof withNumber>;
export declare function useToggle(initialValue: string): [string, () => void, Dispatch<SetStateAction<string[]>>];
export declare function useToggle<T>(initialValue: T[]): [T, () => void, Dispatch<SetStateAction<any[]>>];
declare function withBoolean(value: boolean): readonly [boolean, () => void, Dispatch<SetStateAction<boolean>>];
declare function withNumber(value: number): readonly [number, () => void, Dispatch<SetStateAction<number>>];
export {};

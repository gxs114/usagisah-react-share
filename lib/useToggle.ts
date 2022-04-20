import {
  Dispatch,
  SetStateAction,
  useLayoutEffect,
  useMemo,
  useState
} from "react"

type SplitHelper<
  T extends string,
  S extends string = "",
  A extends string[] = []
> = T extends `${infer item}${S}${infer rest}`
  ? SplitHelper<rest, S, [...A, item]>
  : A

type SplitType<T extends string, S extends string = ""> = SplitHelper<T, S>

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
export function useToggle<T extends boolean>(
  initialValue: T
): ReturnType<typeof withBoolean>
export function useToggle<T extends number>(
  initialValue: T
): ReturnType<typeof withNumber>
export function useToggle<T extends string>(
  initialValue: T
): [SplitType<T>, () => void, Dispatch<SetStateAction<string[]>>]
export function useToggle<T>(
  initialValue: T[]
): [T, () => void, Dispatch<SetStateAction<T[]>>]
export function useToggle(initialValue: any) {
  const [value, setValue] = useState(initialValue)
  switch (typeof value) {
    case "boolean":
      return withBoolean(value, setValue)
    case "number":
      return withNumber(value, setValue)
    case "object":
      if (Array.isArray(value)) {
        return withArray(value, setValue)
      }
    case "string":
      const memoValue = useMemo(() => value.split(""), [value])
      return withArray(memoValue, setValue)
    default:
      throw Error("useToggle: value must be boolean or array or number")
  }
}

function withBoolean(value: boolean, set: Dispatch<SetStateAction<boolean>>) {
  const [bool, setBool] = useState(value)
  const toggle = () => setBool(!bool)
  return [bool, toggle, set] as const
}

function withNumber(value: number, set: Dispatch<SetStateAction<number>>) {
  const [n, setN] = useState(value)
  const toggle = () => setN(n + 1)
  return [n, toggle, set] as const
}

function withArray<T>(ary: T[], set: Dispatch<SetStateAction<T[]>>) {
  const [index, setIndex] = useState(0)
  const toggle = () =>
    ary.length === 0 ? null : ary[index + 1] ? setIndex(index + 1) : setIndex(0)
  useLayoutEffect(() => {
    setIndex(0)
  }, [ary])
  return [ary[index], toggle, set] as const
}

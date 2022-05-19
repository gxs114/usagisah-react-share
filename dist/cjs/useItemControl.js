"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useItemControl = void 0;
const react_1 = require("react");
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
function useItemControl() {
    const cacheState = (0, react_1.useRef)(new Map());
    const validate = () => {
        let isValid = true;
        cacheState.current.forEach(item => !item.validate() && (isValid = false));
        return isValid;
    };
    const reset = () => {
        cacheState.current.forEach(item => item.reset());
    };
    const state = () => {
        const values = {};
        cacheState.current.forEach(item => (values[item.key] = item.state()));
        return values;
    };
    return [
        { validate, reset, state },
        { useItemState: useItemState(cacheState.current) }
    ];
}
exports.useItemControl = useItemControl;
function useItemState(map) {
    return function (key, initState, { validate, factory, submit } = {}) {
        const [_state, _setState, ...rest] = (typeof factory === "function" ? factory : react_1.useState)(initState);
        const userRef = (0, react_1.useRef)({
            validate,
            submit,
            source: initState,
            state: _state
        });
        userRef.current.validate = validate;
        userRef.current.submit = submit;
        userRef.current.state = _state;
        (0, react_1.useLayoutEffect)(() => {
            const reset = () => {
                _setState(userRef.current.source);
            };
            const state = () => {
                const { state, submit } = userRef.current;
                return typeof submit === "function" ? submit(state) : state;
            };
            const validate = () => {
                const { validate } = userRef.current;
                const value = state();
                return typeof validate === "function" ? validate(value) : true;
            };
            map.set(key, { key, reset, state, validate });
            return () => {
                map.delete(key);
            };
        }, []);
        return [
            _state,
            function setState(newValue) {
                newValue = typeof newValue === "function" ? newValue(_state) : newValue;
                userRef.current.state = newValue;
                _setState(newValue);
            },
            ...rest
        ];
    };
}
//# sourceMappingURL=useItemControl.js.map
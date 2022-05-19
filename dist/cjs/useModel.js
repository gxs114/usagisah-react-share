"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withModelChecked = exports.useModelChecked = exports.withModel = exports.OnlyNumber = exports.useModel = void 0;
const react_1 = require("react");
const helpers_1 = require("./helpers");
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
function useModel({ value, filters = [], skipError }) {
    const [state, setState] = (0, react_1.useState)(value ?? "");
    (0, react_1.useLayoutEffect)(() => {
        if (typeof value !== "string") {
            return;
        }
        setState(value ?? "");
    }, [value]);
    function handleChange(v) {
        let newValue = null;
        if (!(0, helpers_1.isUndefined)(v?.target?.value)) {
            newValue = v.target.value = (0, helpers_1.compose)(...filters)(v.target.value);
        }
        else if (!(0, helpers_1.isUndefined)(v)) {
            newValue = (0, helpers_1.compose)(...filters)(v);
        }
        else if (!skipError) {
            console.error("useModel: 您绑定的事件对象可能并不是 input 一类的输入控件，请检查");
        }
        setState(newValue);
    }
    return [state, { value: state, onChange: handleChange }, setState];
}
exports.useModel = useModel;
/**
 * @description 双向数据绑定的过滤器，只能输入整数
 */
function OnlyNumber(value) {
    return value.replace(/[^\d]/g, "");
}
exports.OnlyNumber = OnlyNumber;
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
function withModel(options) {
    return function (value) {
        const [state, bind, setState] = useModel({
            value,
            filters: options?.filters,
            skipError: options?.skipError
        });
        return [state, setState, bind];
    };
}
exports.withModel = withModel;
function useModelChecked(checked) {
    const [state, setState] = (0, react_1.useState)(checked);
    (0, react_1.useLayoutEffect)(() => {
        setState(checked);
    }, [checked]);
    function handleChange(v) {
        let newValue;
        if ((0, helpers_1.isBoolean)(v)) {
            newValue = v;
        }
        else if ((0, helpers_1.isBoolean)(v?.target?.checked)) {
            newValue = v.target.checked;
        }
        else {
            throw Error("useModelChecked: 您绑定的事件对象可能并不是 checkbox 一类的输入控件，请检查");
        }
        setState(newValue);
    }
    return [state, setState, { checked: state, onChange: handleChange }];
}
exports.useModelChecked = useModelChecked;
function withModelChecked() {
    return function (checked) {
        const [state, setState, bind] = useModelChecked(checked);
        return [state, setState, bind];
    };
}
exports.withModelChecked = withModelChecked;
//# sourceMappingURL=useModel.js.map
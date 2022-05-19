"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useForceUpdate = void 0;
const react_1 = require("react");
/**
 * @description 更新函数，相当于 vue 的 forceUpdate
 * @example
 * const forceUpdate = useForceUpdate()
 * forceUpdate()
 */
function useForceUpdate() {
    const [, setState] = (0, react_1.useState)(0);
    return () => setState(() => new Date().getTime());
}
exports.useForceUpdate = useForceUpdate;
//# sourceMappingURL=useForceUpdate.js.map
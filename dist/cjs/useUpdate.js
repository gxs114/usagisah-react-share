"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLayoutUpdate = exports.useUpdate = void 0;
const react_1 = require("react");
/**
 * @description 会跳过第一次执行，第二次才会执行的 useEffect
 */
function useUpdate(fn, deeps) {
    const first = (0, react_1.useRef)(true);
    (0, react_1.useEffect)(() => {
        if (first.current) {
            first.current = false;
            return;
        }
        return fn();
    }, deeps);
}
exports.useUpdate = useUpdate;
/**
 * @description 会跳过第一次执行，第二次才会执行的 useLayoutEffect
 */
function useLayoutUpdate(fn, deeps) {
    const first = (0, react_1.useRef)(true);
    (0, react_1.useLayoutEffect)(() => {
        if (first.current) {
            first.current = false;
            return;
        }
        return fn();
    }, deeps);
}
exports.useLayoutUpdate = useLayoutUpdate;
//# sourceMappingURL=useUpdate.js.map
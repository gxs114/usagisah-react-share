"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// 返回一个函数，它没有闭包陷阱，返回的引用值永远不变
__exportStar(require("./useEvent"), exports);
// 防抖
__exportStar(require("./useDebounce"), exports);
// vue 的 forceUpdate
__exportStar(require("./useForceUpdate"), exports);
// 控制器
__exportStar(require("./useItemControl"), exports);
// 双向绑定
__exportStar(require("./useModel"), exports);
// 挂在后执行
__exportStar(require("./useMounted"), exports);
// 节流
__exportStar(require("./useThrottled"), exports);
// 方便快速切换
__exportStar(require("./useToggle"), exports);
// 跳过第一次执行的 useEffect
__exportStar(require("./useUpdate"), exports);
// 获取当前系统主题
__exportStar(require("./useSystemTheme"), exports);
//# sourceMappingURL=index.js.map
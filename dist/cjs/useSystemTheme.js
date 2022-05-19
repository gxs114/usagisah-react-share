"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSystemTheme = void 0;
const react_1 = require("react");
/**
 * @description: 获取当前系统主题
 *
 * @return
 * [
 *
 *  isDark: boolean 是否是暗黑模式,
 *  theme: "light" | "dark"  主题
 *
 * ]
 */
function useSystemTheme() {
    const [theme, setTheme] = (0, react_1.useState)([
        false,
        'light'
    ]);
    (0, react_1.useLayoutEffect)(() => {
        const handleTheme = (e) => {
            setTheme([e.matches, e.matches ? 'dark' : 'light']);
        };
        const match = window.matchMedia('(prefers-color-scheme: dark)');
        handleTheme(match);
        match.addEventListener('change', handleTheme);
        return () => {
            match.removeEventListener('change', handleTheme);
        };
    }, []);
    return theme;
}
exports.useSystemTheme = useSystemTheme;
//# sourceMappingURL=useSystemTheme.js.map
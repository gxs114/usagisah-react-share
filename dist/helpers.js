export function compose(...fns) {
    return function (value) {
        return fns.reduce((a, b) => b(a), value);
    };
}
export const isEmpty = (value) => {
    return value === null || value === undefined || value === "";
};
export const isUndefined = (value) => {
    return value === undefined;
};
export const isBoolean = (value) => {
    return typeof value === "boolean";
};
//# sourceMappingURL=helpers.js.map
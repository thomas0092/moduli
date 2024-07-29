export const divisione = (a, b) => {
    if (b === 0) {
        throw new Error("Divisione per zero non permessa");
    }
    return a / b;
};

export const classNameFormatter = (input) =>
    input
        .replace(/\s+/gm, " ")
        .split(" ")
        .filter((cond) => typeof cond === "string")
        .join(" ")
        .trim();
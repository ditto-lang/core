export const empty = {};

export const insert_impl = (k) => (v) => (m) => ({ ...m, [k]: v });

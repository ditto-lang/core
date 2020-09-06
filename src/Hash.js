// https://github.com/fehrenbach/purescript-unordered-collections/blob/v1.0.1/src/Data/Hashable.js

export const float = (x) => {
  if (x !== x || x === Infinity) {
    return 0;
  }
  let h = x | 0;
  if (h !== x) {
    h ^= x * 0xffffffff;
  }
  while (x > 0xffffffff) {
    x /= 0xffffffff;
    h ^= x;
  }
  return h;
};

export const string = (x) => {
  let h = 0;
  for (let i = 0; i < x.length; i++) {
    h = (31 * h + x.charCodeAt(i)) | 0;
  }
  return h;
};

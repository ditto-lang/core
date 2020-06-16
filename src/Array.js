exports.index_impl = (nope) => (yep) => (i) => (arr) =>
  i < arr.length ? yep(arr[i]) : nope;

exports.zip_with_impl = (f) => (xs) => (ys) => {
  const len = Math.max(xs.length, ys.length);
  const zs = new Array(len);
  for (let i = 0; i < len; i++) {
    zs[i] = f(xs[i])(ys[i]);
  }
  return zs;
};

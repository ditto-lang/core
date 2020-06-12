const index_impl = nope => yep => i => arr => i < arr.length ? yep(arr[i]) : nope;

const zip_with_impl = f => xs => ys => 
  Array.from({ length: Math.min(xs.length, ys.length) }, (_, i) => f(xs[i])(ys[i]);

// NOTE: better to start with newer, more lightweight syntax as it can then be
// passed through babel/polyfilled/whatever for the _browsers that need it_. 
// The _reverse_ isn't possible (i.e. making syntax slimmer).

const caseMaybe = (object, { Just, Nothing }) => {
  if (object.tag === "Just") {
    return Just(object.fields[0]);
  } else if (object.tag === "Nothing") {
    return Nothing();
  } else {
    throw new Error(`unexpected Maybe tag: ${object.tag}`);
  }
};

expect.extend({
  toBeJust(got, want) {
    return caseMaybe(got, {
      Just: (value) =>
        value === want
          ? {
              pass: true,
              message: () => `expected ${value} to be \`Just ${want}\``,
            }
          : {
              pass: false,
              message: () => `expected ${value} to be \`Just ${want}\``,
            },
      Nothing: () => undefined,
    });
  },
  toBeNothing(got, want) {
    return caseMaybe(got, {
      Just: (value) => ({
        pass: false,
        message: () => `expected \`Just ${value}\` to be \`Nothing\``,
      }),
      Nothing: () => ({
        pass: true,
        message: () => `expected \`Nothing\``,
      }),
    });
  },
});

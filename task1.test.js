const count = require('./task1');

function errorFunction() {
  if(count("nedjwanedjwa").length<1 || count("nedjwanedjwa").length>10) {
    throw new Error('use another word');
  }
}
function throwError(string) {
  if(string.length<1 || string.length>10) {
  throw new Error('you are using the wrong word');
}
}

test('the length of nedjwa is 6 ', () => {
  expect(count("nedjwa")).toBe(6);
});

test('the test throws an error', () => {
  expect(() => throwError("mp")).toThrow(Error);
});


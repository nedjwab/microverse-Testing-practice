const reverse = require('./task2');
 const input = "nedjwa"
 const reversedWord = reverse(input)
 test('reverse the stirng', () => {
 expect(reversedWord).toBe("awjden");
 });
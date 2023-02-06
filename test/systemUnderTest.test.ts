import { SystemUnderTest } from "../src/systemUnderTest"

const sut = new SystemUnderTest()
test("quand la valeur est de 3 ou il y a un 3 dans la valeur, Fizz est alors retourné", () => {
    const result = [];
    for (let i = 1; i <= 100; i++) {
      if ((i % 5 === 0 && i % 3 === 0) || (i + '').includes('5') && (i + '').includes('3')) {
        result.push("FizzBuzz");
      } else if (i % 3 === 0 || (i + '').includes('3')) {
        result.push("Fizz");
      } else if (i % 5 === 0 || (i + '').includes('5')) {
        result.push("Buzz");
      } else {
        result.push(i + '');
      }
    }
})
// test("quand la valeur est de 5 ou il y a un 5 dans la valeur, Fizz est alors retourné", () => {
//     expect(sut.fizzbuzz()).toEqual("Buzz")
// })
// test("quand la valeur est de 5 ou il y a un 5 dans la valeur, Fizz est alors retourné", () => {
//     expect(sut.fizzbuzz()).toEqual("Buzz")
// })

// test("given getMessage is called, when 'Jérôme' is passed, then 'Hello Jérôme' is returned", () => {
//     // arrange
//     const sut = new SystemUnderTest()

//     // act
//     const actual = sut.getMessage("Jérôme")

//     // assert
//     expect(actual).toEqual("Hello Jérôme")
// })
import 'jest-extended';
import { SystemUnderTest } from "../src/systemUnderTest";

let sut: SystemUnderTest;
beforeAll(async () => {
  sut = new SystemUnderTest();
});

describe('Tests', () => {
  // sans toBeTruthy()
  it('Un argument de 1 retourne 1', () => {
    expect(sut.fizzbuzz(1)).toBe(1);
  })
  it('Un argument de 2 retourne 2', () => {
    expect(sut.fizzbuzz(2)).toBe(2);
  })
  it('Un argument de 3 retourne Fizz', () => {
    expect(sut.fizzbuzz(3)).toBe("Fizz");
  })
  it('Un argument de 6 retourne Fizz', () => {
    expect(sut.fizzbuzz(6)).toBe("Fizz");
  })
  it('Un argument de 5 retourne Buzz', () => {
    expect(sut.fizzbuzz(5)).toBe("Buzz");
  })

  // avec toBeTruthy()
  it('Un argument de 10 retourne Buzz', () => {
    expect(sut.fizzbuzz(10) == "Buzz").toBeTruthy();
  })
  it('Un argument de 15 retourne FizzBuzz', () => {
    expect(sut.fizzbuzz(15) == "FizzBuzz").toBeTruthy();
  })
  it('Un argument de 30 retourne FizzBuzz', () => {
    expect(sut.fizzbuzz(30) == "FizzBuzz").toBeTruthy();
  })
  it("Un argument d'un multiple de 3 ou contient un 3, Fizz est alors retourné", () => {
    expect(sut.fizzbuzz(13) == "Fizz").toBeTruthy();
  })
  it("Un argument d'un multiple de 5 ou contient un 5, Buzz est alors retourné", () => {
    expect(sut.fizzbuzz(59) == "Buzz").toBeTruthy();
  })
  it("Un argument d'un multiple de 5 et de 3 ou contient un 5 et un 3, FizzBuzz est alors retourné", () => {
    expect(sut.fizzbuzz(53)).toBe("FizzBuzz");
  })

  it('53 qui donnes FizzBuzz normalement mais pas cette fois', () => {
    expect(sut.fizzbuzz(53) == "Buzz").toBeFalsy();
  })
  it('affichage des valeurs', () => {
    console.log(sut.fizzbuzz(1));
    console.log(sut.fizzbuzz(2));
    console.log(sut.fizzbuzz(3));
    console.log(sut.fizzbuzz(6));
    console.log(sut.fizzbuzz(5));
    console.log(sut.fizzbuzz(10));
    console.log(sut.fizzbuzz(15));
    console.log(sut.fizzbuzz(30));
    console.log(sut.fizzbuzz(13));
    console.log(sut.fizzbuzz(59));
    console.log(sut.fizzbuzz(53));
  })
});
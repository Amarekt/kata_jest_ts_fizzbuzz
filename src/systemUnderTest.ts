export class SystemUnderTest {
    fizzbuzz(num: number): any{
        if ((num % 5 == 0 && num % 3 == 0) || (num + '').includes('5') && (num + '').includes('3')) {
            return "FizzBuzz";
        } else if (num % 3 === 0 || (num + '').includes('3')) {
            return "Fizz";
        } else if (num % 5 === 0 || (num + '').includes('5')) {
            return "Buzz";
        } else {
            return num;
        }
    }
}

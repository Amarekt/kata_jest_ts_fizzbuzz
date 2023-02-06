export class SystemUnderTest {
    public num = 1;
    fizzbuzz(){
        for (let num; this.num <= 30; this.num++) {
            if ((this.num % 5 == 0 && this.num % 3 == 0) || (this.num + '').includes('5') && (this.num + '').includes('3')) {
                console.log("FizzBuzz");
            } else if (this.num%3 == 0 || (this.num + '').includes('3')){
                console.log("Fizz");
            } else if (this.num%5 == 0 || (this.num + '').includes('5')){
                console.log("Buzz");
            } else  
            console.log(this.num); 
        }
    }
}

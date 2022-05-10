//Write a simple calculator class or object, which will have 4 methods: add, subtract, divide, and multiply

const calculator = { 
    add(sum1,sum2) {
       return sum1+sum2;
    } ,
    subtract(sum1,sum2) {
        return sum1-sum2;
     } ,
    divide(sum1,sum2) {
        return sum1/sum2;
     } ,
    multiply(sum1,sum2) {
        return sum1*sum2;
     } 

}


module.exports =  calculator
//Fibonacci Generator
var Output = []; //container of the Output
let evchek = 2; //for the num above 2
let num = prompt("enter the number of sequence you want to print");
num = Number(num);

function FibonacciGenerator(num){
    if(num === 1){
        Output.push(0); // note the problem i was doing here was that i was reassigning  instead of pushing
        return Output;
    }else if(num === 2){
        Output.push(0);
        Output.push(1);
        return Output;
    }else{
        Output.push(0);
        Output.push(1);
        for(; evchek < num; evchek++){
            Output[Output.length] = (Output[Output.length - 1] + Output[Output.length - 2]);
            
        }
    return Output; // make sure the return statement should not be inside a loop, else it will terminate the loop
    }
}
FibonacciGenerator(num); //make sure the function is called first before yout print or console.log the final output(the array)
console.log(Output);
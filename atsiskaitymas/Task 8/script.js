/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator{
   constructor(){
   }

   sum(numberOne, numberTwo){
      return numberOne+numberTwo;
   }

   subtraction(numberOne, numberTwo){
      return numberOne-numberTwo;
   }

   multiplication(numberOne, numberTwo){
      return numberOne*numberTwo;
   }

   division(numberOne, numberTwo){
      return numberOne/numberTwo;
   }
}

console.log("Sum (5+2234)", new Calculator().sum(5,2234));
console.log("Subtraction (5-2234)", new Calculator().subtraction(5,2234));
console.log("Multiplication (5*2234)", new Calculator().multiplication(5,2234));
console.log("Division (5/2234)", new Calculator().division(5,2234));
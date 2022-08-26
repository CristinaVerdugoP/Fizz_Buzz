for(var i=1; i<101; i++){ // i tiene que ir de 1 a 101, para que llegue a 100
    if(i % 3 === 0 && i % 5 === 0){ //Indica que tiene que ser multiplo de 5 Y de 3 (al mismo tiempo)
        console.log("FizzBuzz");
    }
    else if(i % 5 == 0){ //Si no, si es solo multiplo de 5 ---> Buzz
        console.log("Buzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz"); //si no, si es solo multiplo de 3 ----> Fizz
    }
    else console.log(i); // si no se cumple ninguno, solo imprime i
    
}

function suma (num1){
    return function (num2){
        return num1 + num2;
    }
}
var suma2 = suma (2);
console.log (suma2(5));
var suma1 = suma(12);
console.log (suma2(76));
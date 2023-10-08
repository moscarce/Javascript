const min = (num1 = 0, num2 = 0) =>{
    if(num1 < num2){
        return num1;
    } else {
        return num2;
    }
}

console.log(min(4,5));
console.log(min(6,5));
console.log(min(2,2));



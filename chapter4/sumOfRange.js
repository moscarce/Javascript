// const range = (start, stop) => {
//     arr = [];
//     for(let i = start; i <= stop; i++){
//         arr.push(i);
//     }
//     return arr;
// };

const range = (start, stop, step = 1) => {
    arr = [];
    if (step > 0){
        for( let i = start ; i <= stop ; i += step){
            arr.push(i);
        }
        return arr;
    } else if (step < 0) {
        for( let i = start ; i >= stop ; i += step){
            arr.push(i);
        }
        return arr;
    }
    
};

console.table(range(1,10,2))
console.table(range(5,2,-1))

const sum = arg => {
    let total = 0;
    for (const num of arg) {
        total += num;
    }
    return total;
};

console.log(sum(range(1,10)));


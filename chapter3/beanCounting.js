// const countBs = String => {
//     let bCount =  0
//     for (let index = 0; index < String.length; index++) {
//         if(String[index] === 'B'){
//             ++bCount;
//         }
//     }
//     return `B count = ${bCount}`;
// };

const countChar = (passedString = '', passedChar = '') =>{
    charCount = 0
    for (let index = 0; index < passedString.length; index++) {
        if(passedString[index] === passedChar){
            ++charCount;
        }
    }
    return `${passedChar} count = ${charCount}`;
};

const countBs = String => countChar(String, 'B');

console.log(countBs('BBbbasxdvBlk'));
console.log(countChar('madam','m'));



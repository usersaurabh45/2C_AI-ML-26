let Data = [10,20,30,40]
function sum(...args){
    let sum = 0;
    for(let i of args){
        sum = sum + i;
    }
    console.log(sum);
}
sum(...Data);
console.log(sum);

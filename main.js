function unique(array){
    array.sort();
    return Array.from(new Set(array));
}
var array1= [1,5,2,3,4,2,3,1,3,4];
console.log(unique(array1));
// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {

    let numsArray = Array.from(nums);
    numsArray.sort();
    //console.log("lengths is"+ numsArray.length);
    if (numsArray.length<3) {return undefined;}
    //console.log(numsArray);
    for (let i = 0; i < numsArray.length; i++) {
        const baseNumber = numsArray[i];

        for (let y = i+1; y < numsArray.length; y++) {
            const ComparedNumber = numsArray[y];
            if (baseNumber == ComparedNumber) {
                //console.log("match found: deleting");
                numsArray.splice(y, 1);}
            
        }
        
    }
    //console.log(numsArray);
    numsArray.sort((a, b) => b-a);
    //console.log(numsArray);
    let potentialHigher3 = numsArray[2];
    if (potentialHigher3 == undefined) {potentialHigher3 = numsArray[1];
    if (potentialHigher3 == undefined) {potentialHigher3 = numsArray[0]}}
    return potentialHigher3;

    //este codigo es caca mala fea porque no estoy usando los metodos mas adecuados de ECMA6
    //Idealmente, toda esta funcion podria hacerse en una sola linea.

}




// TESTs no modificar
console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3([3,4]) === undefined);
console.log(greater3([4,4,4]) === 4);
console.log(greater3([1,1,2,5]) === 1);
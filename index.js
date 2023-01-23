function receivesAFunction( initial, baseValue){
    baseValue(initial)
    }





function returnNamed(){
namedFunction('easy');
}
returnNamed();

function namedFunction(named){
    console.log(`This is ${named}`);
}

let anonymous = function(){
    return'This is anonymous'
   }
console.log(anonymous())




return(receivesAFunction(20, function(initial){console.log(initial*initial)}))
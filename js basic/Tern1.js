function myfunc_ifElse(a){
    let result;

    result = a * 2;
    if (a > 10){
        result = a;
    }
    if (result > 5){
        return (2 * a) + 1;
    }
    else{
        result = 2 * (a - 2);
        if (a < 3){
            result = 1;
        }
        if (result > 4){
            return 5;
        }
        else{
            if (a % 2 == 0){
                return 6;
            }
            else{
                return 7;
            }
        }
    }
  
}

function myfunc_switch(a){
    let result;
    result = a * 2;

    if (a > 10) {
        result = a;
    }

    switch (true) {
        case (result > 5):
            return (2 * a) + 1;
        
        default:
            result = 2 * (a - 2);
            
            if (a < 3) {
                result = 1;
            }

            switch (true) {
                case (result > 4):
                    return 5;
                
                default:
                    switch (true) {
                        case (a % 2 == 0):
                            return 6;
                        
                        default:
                            return 7;
                    }
            }
    }
}

function tern1(a){

    return (a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 
    ? 5 
    : (a % 2 == 0 ? 6 : 7);
}

let a = Math.floor(Math.random() * 100);
console.log(`a = ${a}`);
console.log(`my func (if...else): ${myfunc_ifElse(a)}`);
console.log(`my func (switch): ${myfunc_switch(a)}`);
console.log(`tern1: ${tern1(a)}`);



// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()
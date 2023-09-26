function funcName(a = 1, b = 2, c = 3, d = 4, e){
    if (a == 1){
        let x;
    }

    console.log(a, b, c, d, e)
}


funcName(1, 3, 5, 7)

const funcName_sub = (a = 1, b = 2, c = 3, d = 4, e) => {

}

funcName_sub()

const App = {
    getHelloWorld(){
        return 'Hello World'
    }
}

alert(App.getHelloWorld());

let promptValue = prompt("Hey");
console.log(promptValue)
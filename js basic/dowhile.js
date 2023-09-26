// циклы

let i = 0;
while(i < 2){
    i++;
}

i = 0;
do {
    i++;
}
while (i < 2)

firstloop: for (let x = 0; x <= 2; x++){
    console.log("x", x);    
    for (let y = 0; y <= 1; y++){
        console.log(" y", y);    

        if (y == 10){
            continue;
        }
        if (y == 1 && x == 1){
            continue firstloop;
        }
    }
}

let arr1 = [
    {text: 'Hello'}, 
    {text: 'World'}, 
    {text: 'Hello World'}
    ];

arr1.map((item) => {
    console.log("from array: ", item)
})

let arr2 = arr1;

const newArray = arr2.find((item) => {
    return item.text != 'Hello World'
})
console.log(newArray)
arr1.filter((item) => item.text != 'Hello World')
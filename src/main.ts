interface INumber {
    value: number;
}

interface IString {
    data: string;
}

/**
 * @intersection & AND
 * @union | OR
 */
function printSome(param: INumber | IString){
    if("value" in param) console.log(param.value);
    if("data" in param) console.log(param.data);
}
printSome({value: 2024});
printSome({data: "hello"});

function printAnother (param: INumber & IString){
    console.log(param);
}
printAnother({
    value: 2024,
    data: "hello"
});



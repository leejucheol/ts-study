function example(param) {
    console.log(typeof param);
}
example("hello");
example(2024);
example(true);
example(undefined);
/**
 * @intersection & AND
 * @union | OR
 */
// function printSome(param: INumber | IString){
//     if("value" in param) console.log(param.value);
//     if("data" in param) console.log(param.data);
// }
// printSome({value: 2024});
// printSome({data: "hello"});
// function printAnother (param: INumber & IString){
//     console.log(param);
// }
// printAnother({
//     value: 2024,
//     data: "hello"
// });

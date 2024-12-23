interface INumber {
    value: number;
}

interface IString {
    data: string;
}

interface IBoolean {
    data: boolean;
}

function example(param: any){
    console.log(typeof param);
}
example("hello");
example(2024);
example(true);
example(undefined);

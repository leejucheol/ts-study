interface INumber {
    value: number;
}

interface IString {
    data: string;
}

interface IBoolean {
    data: boolean;
}

interface IGeneric<T,K>{
    data: T;
    value: K;
}

// function example(param: any){
//     console.log(typeof param);
// }
// example("hello");
// example(2024);
// example(true);
// example(undefined);

function example<T,K>(param: IGeneric<T, K>){
    console.log(typeof param);
}
example<boolean, object>({data: true, value: {}});
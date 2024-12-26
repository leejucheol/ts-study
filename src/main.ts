// 데코레이터는 함수다 ( 데코레이터 == 함수 )
// 1. 런타임에서 바로 실행 => 설정값, 등록 ... 쓰일 수 있다
// 2. 클래스랑 무조건 같이쓴다. 클래스 자체, 메서드, 필드, 파라미드드

import { optArg } from "rimraf/dist/commonjs/opt-arg";


class Book{
    private readonly title: string;

    constructor(title: string){
        this.title=title;
    }
    
    @Logging
    greet(param: string){
        console.log(this?.title ?? "typescript" + " " + param); 
    }

    greet2(param: string){
        console.log(this.title + "2" + param); 
    }
}

// const book = new Book("abc")
// book.greet2("이주철")


function Logging(
    originalMethod: Function,
    context: ClassMethodDecoratorContext
){
    return function(this: any, ...args: any[]){
        console.log("something changed");
        return originalMethod.call(this, ...args);
        };
}

// 내가 만든 예시시
function Start(
    originalMethod: Function,
    context: ClassMethodDecoratorContext
){    console.log("hello");
}

const b: Book = new Book("inflearn");
b.greet("hello world");
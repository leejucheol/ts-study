class Book{
/**
 * 접근 제한자
 * @public - 누구나
 * @protected - 자식 + 본인인
 * @private - 자기 자신만
 */

    protected title: string;

    printTitle(){
        console.log(this.title);
    }

    constructor(title: string){
        this.title = title;
    }

    somethingImpact(){
        this.title = "new book!";
    }
}

class Test extends Book{
    constructor(title: string){
        super(title);
    }

    printTitleFromChild(): void {
        console.log(this.title);
    }
}

// private readonly 예시
// class Book{
//     constructor (
//         private readonly title: string,
//         private readonly a: any,
//         private readonly b: any
//     ) {}
// }
// const b: Book = new Book("inflearn", "hello", "world");
// //b.title = "hello";
// console.log(b);

const b: Book = new Book("inflearn");
//b.title = "hello";
console.log(b.printTitle());
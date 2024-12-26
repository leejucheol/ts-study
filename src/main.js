var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = /** @class */ (function () {
    function Book(title) {
        this.title = title;
    }
    Book.prototype.printTitle = function () {
        console.log(this.title);
    };
    Book.prototype.somethingImpact = function () {
        this.title = "new book!";
    };
    return Book;
}());
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test(title) {
        return _super.call(this, title) || this;
    }
    Test.prototype.printTitleFromChild = function () {
        console.log(this.title);
    };
    return Test;
}(Book));
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
var b = new Book("inflearn");
//b.title = "hello";
console.log(b.printTitle());

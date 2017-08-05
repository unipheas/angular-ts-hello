// VARIBALE TYPES
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3];
// let f: any[] = [1, true, 'a', false];

// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;

// enum Color { Red = 0, Green = 1, Blue = 2 };
// let backgroundColor = Color.Red;

// TYPE ASSERTIONS
// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');

// ARROW FUNCTIONS
// let log = function (message){
//     console.log(message);
// }

// let doLog = (message) => console.log(message);

// INTERFACES
    //without Interface
// let drawPoint = (point: {x: number, y: number}) => {
//     //..
// }

// drawPoint({
//     x: 1,
//     y: 2
// });

    //with an Interface
// interface Point {
//     x: number,
//     y: number
// }
// let drawPoint = (point: Point)=>{
//     //..
// }

// CLASSES
// class Point {
//     x: number;
//     y: number;

//     draw() {
//         console.log(`X: ${this.x}', Y: ${this.y}`);
//     }

// }

// let point = new Point();
// point.x = 1;
// point.y = 2;
// point.draw();

// CONSTRUCTORS
// class Point {
    
//     x: number;
//     y: number;

//     constructor(x?: number, y?: number){ // ? makes parameter optional
//         this.x = x;
//         this.y = y;
//     }

//     draw() {
//         console.log(`X: ${this.x}, Y: ${this.y}`);
//     }

// }

// let point = new Point(1, 2);
// point.draw();

// ACCESS MODIFIERS
// public
// private
// protected

// class Point {
    
//     constructor(private x?: number, private y?: number){}

//     draw() {
//         console.log(`X: ${this.x}, Y: ${this.y}`);
//     }

// }

// let point = new Point(1, 2);
// point.draw();

//PROPERTIES
// class Point {
//     constructor(private _x?: number, private _y?: number){
//     }

//     draw() {
//         console.log(`X: ${this._x}, Y: ${this._y}`);
//     }

//     get X(){
//         return this._x;
//     }

//     set X(value){
//         if (value < 0) {
//             throw new Error('Value cannot be less than 0.');
//         }
        
//         this._x = value;
//     }
// }

// let point = new Point(1, 2);
// let x = point.X;
// point.X = 10;
// point.draw();

// MODULES
// import { Point } from './point';

// let point = new Point(1,2);
// point.draw();


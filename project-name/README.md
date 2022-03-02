# TypeScript

## 숫자

```
let age:number = 30;
<!-- 숫자 배열 -->
let a1:number[] = [1,2,3];
let a2:Array<number> = [1,2,3];

```

## 문자열

```
let word:string = 'abc';
<!-- 문자 배열 -->
let week1:string[] = ['mon', 'tue', 'wed'];
let week2:Array<string> = ['mon', 'tue', 'wed'];

```

## 불리언(Boolean)

```
let isTrue:boolean = true;

```

## 튜플(Tuple)

- 인덱스별로 타입이 다를 때 사용

```
let t : [string, number];
t = ['ABC', 123];
t = [123, 'ABC']; // 에러
t[0].toLowerCase();
t[1].toLowerCase(); // toLowerCase()는 number에 사용할 수 없으므로 에러

```

## void

- 아무것도 반환하지 않는 함수에 사용하는 타입
- void가 지정된 함수는 undefined 반환

```
function sayHello():void{
    console.log('hello')
}

```

## never

- 절대 발생하지 않는 값의 타입을 표현하는데 사용
- 에러를 반환하거나 무한 루프인 경우의 타입

```
<!-- error -->
function showError():never{
    throw new Error();
}
<!-- 무한 루프 -->
function infLoop(): never{
    while(true){
        ...
    }
}

```

## enum

- 비슷한 값들 끼리 묶어줌
- 특정값만 입력하도록 강제할 수 있음

**숫자 입력(양방향 맵핑)**

```
enum Color{
    Blue,
    Green = 3,
    Red
}
console.log(Color.Blue); // 0
console.log(Color.Green); // 3
console.log(Color.Red); // 4
console.log(Color[3]); // Green

```

**문자열 입력(단방향 맵핑)**

```
enum Color{
    Blue = 'B',
    Green = 'G',
    Red = 'R'
}
let myColor:Color;
myColor = Color.Red;
<!-- 컴파일 되는 형태 -->
const Color = {
    Blue: 'B',
    Green: 'G',
    Red: 'R'
}

```

## null, undefined

```
let a:null = null;
let b:undefined = undefined;

```
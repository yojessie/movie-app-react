# Create a new React app to study Typescript

1. npx create-react-app 앱이름 --template typescript
   <br>앱의 기본 파일들이 생성됨. Typescript에서는 .tsx 파일을 사용하게 된다.

2. 앞서 styled-components와 Theme을 공부중이었으므로 해당 코드를 옮겨왔다.
   but Typescript는 styled-components의 타입을 이해하지 못한다.

3. npm i styled-components
   <br>일단 이 앱은 새로 생성한 앱이므로 아직 styled-components가 설치되어있지 않으니 설치해주었다.

4. npm i --save-dev @types/styled-components
   <br>명령어를 실행해서 styled-components의 타입을 정의해 주었다.

- @types 에는 많은 사람들이 npm 저장소에 정리해둔 다양한 패키지의 타입이 정의되어 있다 -여러 사람이 styled-components의 소스코드를 보고 Typescript에게 설명해 줄 말을 만들어 내서 정리해 둔 것
- DefinitelyTyped community : https://github.com/DefinitelyTyped/DefinitelyTyped

   <br>
   <br>

# Typescript 강의 추가 수강

## [ OVERVIEW OF TYPESCRIPT ]

<br>

### 1. 런타임 에러를 피하는 타입스크립트

- Typescript 는 앱이 실행되기 전에 오류를 알려준다. (유저가 에러를 만나기 전에 처리)
- Prop Types는 앱이 실행되고나서 콘솔에 오류를 알려준다. (런타임 에러 - 결국 유저가 만나는 에러)
- 그래서 사전에 오류를 방지할수있게 해주는 Typescript를 사용하는 것

  <br>

### 2. 타입을 직접 지정해주지 않아도 된다.

- Implicit Types : 변수의 타입을 추측해서 정한다.
- Explicit Types : 변수의 타입을 명시해서 활용한다.

```typescript
let a: string = "hello";
```

<br>

### 3. 오브젝트 타입 지정

: object의 각 속성 타입을 정해주고, optional한 속성은 ? 를 사용해 지정할 수 있다.

```typescript
const player: {
  name: string;
  age?: number;
} = {
  name: "Jessie",
};
```

  <br>

### 4. Alias type

: 동일 타입을 가진 오브젝트가 여러개 있을때는 type을 별도로 만들어두고 여러 변수에 활용한다.

```typescript
type Player = {
  name: string,
  age?: number
}
const jessie : Player = {
  name: "Jessie"
}
const Mike : Player = {
  name: "Mike"
  age: 12
}
```

  <br>

### 5. 함수에서의 타입 지정

: 파라미터의 타입을 아래와 같이 지정할 수 있다. 지정해둔 타입을 가져와 쓸 수 있다.

```typescript
function playerMaker(name: string): Player {
  return {
    name: name,
  };
}
const jessie = playerMaker("Jessie");
jessie.age = 12;
```

화살표 함수 사용 시

```javascript
const playerMaker = (name: string): Player => {
  name: name;
};
```

  <br>

### 6. readonly로 값을 바꾸지 못하게 설정

```typescript
type Player = {
  readonly name: string;
  age?: number;
};
const jessie: Player = {
  name: "Jessie",
};
jessie.name = "Mike"; // error (the name property is 'read only')
```

  <br>

### 7. Tuple

: array 값의 갯수와 순서를 지정하는 것
<br>: 아이템 갯수가 안맞거나, 타입의 순서가 안맞으면 에러 발생

```typescript
const player: [string, number, boolean] = ["Jessie", 1, true];

player[0] = 1;
// Error (the first item shold be a string)
```

<br>

### 8. 값의 타입을 미리 알 수 없을때는 unknown

: 타입을 if문으로 먼저 체크한다음 실행코드를 만들어주어야 한다.

```typescript
let a: unknown;
if (typeof a === "number") {
  b = a * 2;
}
```

<br>

### 9. 아무것도 return하지 않는 함수의 타입은 void가 된다.

```typescript
function hello() {
  console.log(1);
}
// function hello(): void
```

<br>

### 10. never

: 잘 안쓰지만 알아둬야 하는 타입.
<br>: never는 함수가 리턴할 일이 없을때 발생한다.
<br>: 어떤 값의 타입이 두가지 일 수 있는 상황에서, 예외의 경우에 never이 발생한다.

```typescript
function hello(name: string | number) {
  if (typeof name === "string") {
    name;
    // name : string
  } else if (typeof name === "number") {
    name;
    // name : number
  } else {
    name;
    // name : never
  }
}
```

<br>

## [ FUNCTIONS ]

### 1. Call Signatures

: function의 타입을 정의한다. <br>
: type으로 타입을 정의해놓고, 함수에 불러와서 사용한다.

```typescript
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
```

<br>

### 2. Overloading

: type 함수에 여러 타입을 만드는 것. <br>
: overloading signature를 통해 함수를 다양한 방식으로 호출 할 수 있게한다. <br>
: overloading은 직접 작성하기보다 외부 라이브러리에 자주 보이는 메소드로, 하나의 함수가 복수의 Call Signature를 가질때 발생한다.

```typescript
// Next.js의 라우터 push가 두 가지 방법으로 페이지를 이동하는 경우

type Config = {
  path: string;
  state: number;
};

type Push = {
  (config: Config): void;
  (config: string): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};
```

```typescript
// 파라미터 갯수가 다른 경우 (자주 볼 수 있는 경우는 아님)
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a, b, c?: number) => {
  if (c) {
    return a + b + c;
  } else {
    return a + b;
  }
};

add(1, 2);
add(1, 2, 3); // 두 경우 모두 문제 없음
```

<br>

### 3. Polymorphism

: //

```typescript
//
```

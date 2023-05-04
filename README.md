# 기초

### ⅰ. 프로그래밍이란?

- 프로그래머들이 "어떤 도구"를 이용해 컴퓨터가 작동시킬 수 있는 프로그램을 만들고, 사용자들이 마우스 클릭이나 키보드 입력방식으로 프로그램을 사용함.
- 마우스 클릭이나 키보드로 타이핑을 하여 데이터를 "입력"하고, 입력된 데이터들은 어딘가에 저장되어서 "처리"가 되고, 모든 기록과 실시간 업데이트 상황을 화면에 "출력" 되어서 우리가 확인할 수 있음.
- 데이터의 입력 => 처리 => 출력이 바로 프로그램이 하는 일이고, 프로그램이 정해진 방식에 따라 일할 수 있도록 작성해놓는게 프로그래밍이라고 할 수 있음.

### ⅱ . JavaScript란?

- 프로그래머들이 "어떤 도구:를 이용해 코딩을 한다고 하는데 이때 사용하는 도구가 바로 프로그래밍 언어
- 프로그래밍 언어도 정해진 문법이 있고, 이 문법에 따라 코딩을 하면 컴퓨터는 이를 해석해 우리가 원하는대로 데이터를 입력받아 처리하고 출력할 수 있음
- 프로글밍 언어도 매우 다양하고 계속적으로 발전하고, 언어 고유의 특성과 장단점도 있지만 좀 더 많이 쓰는 언어가 존재함
  - 이중에 하나가 자바스크립트

### ⅲ. Node.js란?

- "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript cod outside a web browser" - Node.js를 정의하는 문장
- 우리가 자바스크립트 언어의 문법에 맞게 코딩을 했을 때 컴퓨터가 이를 해석해서 처리할 수 있도록 해주는 일종의 전용 번역기
- 이전에는 웹브라우저에만 있었지만, 우리 커뮤터에 Node.js만 설치해주면 웹브라우저가 아닌 곳에서도 자바 스크립트 코드를 실행하고 그 결과물을 확인할 수 있음

### ⅳ. Hello World 출력해보기

- 원하는 폴더 위치에 폴더를 생성함 
- VSCode(Visual Studio Code, 코딩을 위한 전용에디터)를 실행하고 생성된 폴더를 열어줌 
- New File을 클릭하여 새로운 파일을 만들고 hello.js라고 저장함, "."뒤에 js는 자바스크립트 파일이라는 것을 알려주는 확장자명
```
console.log('Hello World')

// Hello World 문자열을 출력하는 명령어, 문자열은 '', ""로 감싸야함
// console.log는 데이터들을 출력할 수 있는 명령어임
// //은 주석으로 컴퓨터가 해석해서 실행하는 부분이 아니기 때문에 
// 코딩을 하다가 설명을 달고 싶은 것들이 있을때 사용함
```
- 터미널 실행후 node hello.js라고 타이핑 후 엔터를 누르면 HelloWorld 출력
- 터미널에서 node hello.js라고 명령하묜 컴퓨터는 Node.js를 활용해 hello.js파일을 해석하고 그 결과물을 출력해줌

# 2. 변수(Variable)

### ⅰ.  변수란

- 값(데이터)을 저장해놓고 사용하기 위해 변수라는 것을 사용함
- 변수는 저장해놓은 값을 가리키는 일종의 이름표
- 변수를 사용하면 해당 데이터가 의미하는 바를 변수이름을 통해 정확히 표현할 수 있고, 계속해서 재사용할 수 있음

### ⅱ. let

- 변수를 선언할 때는 let이라는 키워드를 사용, let 변수이름 = 값
- 변수 <변수이름> 를 선언했고 해당 변수에 <값>을 할당했다고 함
```
let name = '지영'    // name 변수에 홍길동 이라는 값을 할당
console.log(name)    // 변수 name이 가리키고 있는 값 홍길동을 출력

name = '지수'        // 선언했던 name 변수에 지수 라는 값을 재할당
console.log(name)    // 변수 name이 가리키고 있는 값 지수를 출력
// 코드는 항상 위에서 아래로 해석됨
// 한구문이 끝나면 세미콜론(;)을 사용해서 코딩이 끝났다는 아낸를 하지만 최근 생략해서 많이 사용
```

### ⅲ. const

- 변수를 선언할 때 const라는 키워드를 사용, const 변수이름 = 값
- const는 let과 달리 변수에 값을 재할당 할 필요가 없을 때 사용
- 한번 값을 할당하게 되면 다른 값을 할당할 수 없으니 주의가 필요
```
const name = '지수'  // name 변수에 지수라는 값을 할당
console.log(name)    // 변수 name이 가리키고 있는 값 지수를 출력

name = '지영'        // 선언했던 name 변수에 '지영'이라는 값을 재할당하면 Type Error 발생
```

# 3. 데이터 타입

### ⅰ. 데이터 타입이란?

- 세상에 많은 데이터들이 존재하는데 이러한 데이터들을 컴퓨터가 보다 빠르고 효율적으로 처리하기 위해 자바스크립트라는 프로그래밍 언어가 구분해놓은 것
- 자바스크립트에는 기본 또는 원시형(primitive)타입이라고 불리는 number, string, boolean, null, undefined이 존재함

### ⅱ . 숫자(number)
- 숫자 데이터를 의미함
- 나이, 거리, 무게, 등 무수히 많은 종류의 데이터를 숫자로 표현
- 숫자는 ' ', " " 로 묶을 필요없이 숫자만 입력하면 됨

### ⅲ. 문자열(String)
- 문자 데이터를 의미함
- " ", ' ' 로 데이터를 감싸야함
- 이름, 제품명, 등 많은 종류의 데이터를 문자로 나타낼 수 있음

### ⅳ. Boolean
- 참과 거짓을 나타내는 true / false를 표현하는 데이터
- 비교연산자에서 많이 활용함

### ⅴ. null, undefined
- null은 텅텅 비어 있는 값을 의미
- undefined는 변수를 선언만 하고 값이 할당되어 있지 않은 것

> ● null은 변수를 선언할때 const로도 가능
> ● undefined는 변수를 선언할때 const로 하면  Uncaught Syntax Error : Missing initializer in const declaration 오류 발생
>   → 변수의 값을 할당하지 않았을때 뜨는 에러로 const 선언시에는 반드시 값을 할당해야 함
>     ※ Syntax Error
>        ○ 객채를 문법적으로 유효하지 않은 코드를 해석하고 시도할때 생기는 오류
 
# 4. 연산자

### ⅰ.  연산이란

- 수나 식을 일정한 규칙에 따라 계산하는 것을 의미
- 데이터와 데이터를 같이 처리해서 그 결과값을 반환해준다는 의미
- 프로그래밍에서 연산자란 위와 같은 각각의 연산을 의미하는 기호

### ⅱ .  문자열 붙이기

- +기호를 사용하여 문자열을 이어 붙일 수 있음
- 문자열과 숫자를 이어붙이면 숫자가 문자로 인식됨
- 템플릿 리터럴(Template literals)
- 백틱(``)기호를 사용하여 문자열 데이터를 표현할 수 있음, + 기호를 사용안하고 간결하게 문자열 붙이기가 가능

### ⅲ.  산술연산자(Numeric operators)

- 숫자 데이터에 대한 여러 연산들이 가능함
- 사칙연산(+, -, *, /), //(나머지 연산), **(거듭제곱)이 있음

### ⅳ. 증감연산자(Increment and Decrement operators)

- 데이터의 값을 증가시키거나 감소시키는 연산자(++, --)
- 증감연산자를 변수 앞에 놓느냐, 변수 뒤에 놓느냐에 따라 차이가 발생
```
let count = 1
const preIncrement = ++count

// 증감 연산자를 앞에 놓게 되면 count = count + 1    -> count 변수에 자기 자신에 1 더한 것을 다시 할당
// const preIncrement = count    -> 위에 할당한 count 변수를 다시 preIncrement 변수에 할당 코드와 같은 내용
// 먼저 자기 자신에게 1을 더해서 재할당 한 후 , 이를 preIncrement 에 핟당했다는 의미

console.log(`count: ${count}, preIncrement: ${preIncrement}`) // count: 2, preIncrement: 2
let count = 1
const postIncrement = count++

// 증감연산자를 뒤에 놓게 되면 const postIncrement = count
// count = count + 1
// postIncrement에 count 값을 먼저 할당하고, 이후에 1을 더해서 재할당

console.log(`count: ${count}, postIncrement: ${postIncrement}`)  // count: 2, postIncrement: 1
```
> count 변수를 const가 아닌 let 으로 선언한 이유
> - 증감연산자를 활용해 count의 값을 계속 증가시키고 다시 count에 할당하고 있기 때문에 const 를 사용하면 에러 발생

### ⅴ.  대입연산자(Assignment operators)

- 어떠한 값을 어떤 변수에 할당한다는 표현이 대입연산자를 사용한다는 의미
- = 기호 뿐만 아니라 +=, -=기호 같은 것들을 통해서 연산과 대입을 한번에 할 수 있음

### ⅵ. 비교연산자(Comparison operators)

- 숫자값을 비교하는 연산자이며 조건문에서 많이 활용됨
- 비교연산자를 통해서 얻는 값이 boolean(true, false)

### ⅶ. 논리연산자(Logical operators)
- ||(or), &&(and), !(not) 과 같은 연산자이며 조건문에서 많이 활용됨
- || 기호는 연산 대상 중 하나면 true값이여도 true를 리턴
- && 기호는 연산 대상이 모두 true값이여만 true를 리턴
- ! 기호는 true값을 false값으로, false 값을 true값으로 바꿔서 리턴

### ⅷ. 일치연산자(Equality operators)

- 두개의 값이 일치하는지 비교하는 연산자
- 자바스크립트에는 두 가지 일치 연산자 ==, ===가 존재함
- === 는 엄밀한(strict)일치연산자여서 비교하는 두 값의 데이터타입과 값 자체가 정확히 일치해야만 true를 리턴함
- == 는 비교하는 두 값의 데이터타입이 일치하지 않을 때 해당 값의 데이터타입을 자동으로 변환해주는 자바스크립트만의 특성으로 인하여 실무에서는 거의 사용하지 않음

데이터 타입과 상관없이 값이 일치하면 true를 리턴함
```
// == 와 === 비교
console.log(1 === '1')  // false  -> 데이터 타입이 숫자와 문자이기 때문
console.log(1 == '1')   // true -> 데이터 타입을 자동으로 변환해서 true 값을 출력함
```

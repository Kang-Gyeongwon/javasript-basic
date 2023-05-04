# 1. 기초

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

> -  null은 변수를 선언할때 const로도 가능
> -  undefined는 변수를 선언할때 const로 하면  Uncaught Syntax Error : Missing initializer in const declaration 오류 발생
> 
>   -> 변수의 값을 할당하지 않았을때 뜨는 에러로 const 선언시에는 반드시 값을 할당해야 함
> 
>     ※ Syntax Error
>         ○ 객채를 문법적으로 유효하지 않은 코드를 해석하고 시도할때 생기는 오류
 
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

# 5.  조건문

### ⅰ.  조건문이란?

- 특정 조건을 만족했을 때만 해당 코드를 실행할 수 있게 하는 구문
- 어떤 조건이 참인지 거짓인지에 따라 실행 여부를 결정하는 구문

### ⅱ. if 
- if (조건) {

     조건을 만족할 때 실행할 코드(명령문)

  }
- 조건을 소괄호 ()로 둘러싼 형태를 가지고, 조건문에 의사결정을 할 수 있는 조건문을 작성하면 됨

  -> 조건문의 결과값은 항상 boolean값으로 리턴해야하며, 결과값이 true일 경우에만 명령문을 실행함

### ⅲ.  else, else if
- if (조건) {

     조건을 만족할 때 실행할 코드(명령문)

  } else {

     조건을 만족하지 않을때 실행할 코드

  }
- if 구문의 조건을 만족하지 않았을 때 실행하고 싶은 코드를 else 구문과 함께 작성함
- else if 구문을 활용하면 보다 더 많은 조건을 판단하고 코드를 실행할 수 있음
- else if를 사용할땐 바로 옆에 소괄호() 안에 조건을 작성해야함
- 중간에 한번이라도 true를 리턴하면 해당 코드를 실행하고 더이상 아래의 코드는 실행하지 않음

> 들여쓰기
> - javascript에서 들여쓰기를 할 때 보통 탭(Tab)키를 사용함
> - if 구문의 body(중괄호 안쪽) 코드를 작성할 때 들여쓰기를 사용함
> - 들여쓰기는 반드시 하지 않아도 상관없지만 코드의 가독성을 높이기 위해서 사용함

# 6.  반복문

### ⅰ.  반복문이란?
- 프로그램 내에서 똑같은 명령을 일정 횟수만큼 반복하여 수행하도록 제어하는 실행문
- 반복문을 활용하면 특정코드가 반복해서 실행하는 것이기 때문에 반복 실행하기 위한 코드를 덜 작성해도 됨

  -> 효율적인 코딩이 가능해짐
- 조건을 설정해서 원하는 만큼만 반복할 수 있도록 함
- 프로그램이 처리하는 대부분의 코드는 반복적인 형태가 많으므로, 가장 많이 사용되는 실행문 중 하나
### ⅱ .  while
- while(조건) {

    조건을 만족할 때 실행할 코드

  }
- 소괄호 () 안에 조건은 결과값을 true, false를 리턴하고, true를 만족하는 경우에만 중괄호{} 안에 문장들이 실행됨
- 조건이 false를 리턴하면 더이상 반복해서 실행하지 않음
- 반복문의 조건에 포함된 변수의 값을 계속 변화시켜줘서 반복문이 끝날 수 있도록 해야함
  
  -> 반복문의 조건이 true를 계속해서 리턴한다면 무한루프에 빠져서 프로그램이 끝나지 않음
 
    무한루프로 인해 프로그램의 실행이 끝나지 않는다면 ctrl + c를 눌러서 중단시킴

### ⅲ.  for
- for (begin(초기값); condition(조건식); step(어떤 간격으로)) {

     조건을 만족할 때 실행할 코드

  }
- while문보다 좀 더 명시적으로 반복문의 조건을 표현할 수 있음
- begin -> 변수를 선언하고 해당 변수에 데이터를 할당하는 부분
- condidtion -> 조건을 적음
- step -> 앞서 선언했던 변수에 증감연산자 등을 활용해 값을 변화시키고 조건이 false를 리턴해서 반복문이 끝나게 해주는 역활을 함
- ;(세미콜론) -> 해당 구문이 끝남을 나타냄

# 7. 반복문과 조건문

### ⅰ.  반복문과 조건문

- 프로그램은 반복분과 조건문의 집합이라고 할수 있음
- 입력된 데이터에 대해 조건문을 활용해 수많은 조건으로 분기하고 반복문을 활용해 반복해서 처리하는 게 프로그램이 주로하는 일

# 8. 함수

### ⅰ.  함수란?

- 특정 작업을 수행하는 코드의 집합
- 한두번 작성하는 것은 괜찮지만 수십, 수백번씩 작성하는 것은 비효율적이기 때문에 특정 작업을 수행해야 한다면 그 코드 자체를 어디낙에 만들어서 저장해놓고 사용하기 위한것이 바로 함수임
- 많은 양의 코드를 연관 있는 것끼리 정리해서 함수로 만들면 코드를 보기 좋게 정리할 수 있고 반복 사용하는 코드를 함수로 만들어 필요할때마다 호출할 수 있음

  -> 중복 코드를 줄이고, 코드의 재사용이라는 장점이 있음

### ⅱ . 함수의 선언과 호출

- 함수의 선언
  - 변수를 선언하고 해당 변수에 값을 할당했던 것처럼, 함수도 선언을 하고 해당 함수가 실행할 코드의 집합을 만들어 저장
  - function 함수명(매개변수 목록) {
       이 함수에서 실행할 코드
      return 반환값
    }
  - 함수명 -> 변수가 데이터를 대표하는 이름처럼 함수가 하는 일을 대표하는 이름으로 작성
  - 매개변수(parameter) -> 해당 함수의 바디에 있는 코드에서 사용할 수 있는 일종의 변수, 함수 호출시 전달하게되는 함수를 실행하기 위해서 필요한 일종의 input
  - {}중괄호 안 -> 이 함수가 해야할 일들을 코드로 작성 후, 반환해야할 값을 명시함

- 함수 호출
  - 함수를 선언하고 호출하지 않으면 아무일도 일어나지 않고 실제로 함수를 사용하기 위해서는 호출을 해야함
  - const 변수명 = 선언한 함수명(매개변수 목록)
  - 함수는 어떠한 값을 반환하는데 이를 대입 연산자를 활용해서 어떤 변수에 함수가 반환한 값을 할당하면됨

> 매개변수의 개수
> - 매개변수의 개수는 원하는만큼 늘어날 수 있지만 매개 변수가 너무 많이 늘어나면 코딩을 하면서 인지하기 힘들기 때문에 한계를 두고 인지할 수 있을 만큼만 사용하는게 좋음
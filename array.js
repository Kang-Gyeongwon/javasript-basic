// // 1, 2, 3, 4, 5 데이터를 순서대로 갖고 있는 배열을 만들어서 arr 이라는 변수에 할당
// const arr = [1, 2, 3, 4, 5]

// console.log(arr)

// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// console.log(rainbowColors[0])
// console.log(rainbowColors[1])
// console.log(rainbowColors[2])
// console.log(rainbowColors[3])
// console.log(rainbowColors[4])
// console.log(rainbowColors[5])
// console.log(rainbowColors[6])

// console.log(rainbowColors.length)

// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// rainbowColors.push('ultraviolet')
// console.log(rainbowColors)

// rainbowColors.pop()
// console.log(rainbowColors)

// const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// for (let i = 0; i < rainbowColors.length; i++) {
//   console.log(rainbowColors[i])
// }

// for (const color of rainbowColors) {
//   console.log(color)
// }

// Q, 열 개의 상품 가격 데이터 배열 생성
// 반복문을 활용하여 상품들 가격의 합계와 평균 구하기

const priceLisdt = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
let sum = 0

for(let i = 0; i < priceLisdt.length; i++) {
  sum += priceLisdt[i]
}
/*
for (const price of priceList){
  sum += price
}
*/

const avg = sum / priceLisdt.length
console.log(`합계: ${sum}, 평균: ${avg}`)
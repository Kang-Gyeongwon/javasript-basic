// function calculateAvg(price1, price2){
//   const sum = price1 + price2
//   console.log(`두 상품의 가격 총합은 ${sum}입니다.`)
//   const avg = sum / 2
//   return avg
// }

// const priceA = 1000
// const priceB = 2000

// const avg1 = calculateAvg(priceA, priceB)
// console.log(`A와 B의 평균은 ${avg1}입니다.`)

// const priceC = 2000
// const priceD = 3000
// const avg2 = calculateAvg(priceC, priceD)
// console.log(`C와 D의 평균은 ${avg2}입니다.`)

function calculateAvg(price1, price2, price3){
  const sum = price1 + price2 + price3
  const avg = sum / 3
  return avg
}

const aPrice = 100
const bPrice = 200
const cPrice = 300

const avg1 = calculateAvg(aPrice, bPrice, cPrice)
console.log(`a와 b와 c의 평균값은 ${avg1}입니다.`)
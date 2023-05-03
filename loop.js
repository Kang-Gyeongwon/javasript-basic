// let temporature = 20
// while (temporature < 25) {
//   console.log(`${temporature} 도 정도면 적당한 온도입니다.`)
//   temporature++
// }

// for (let temperature = 20; temperature < 25; temperature++){
//   console.log(`${temperature} 도 정도면 적당한 온도입니다. `)
// }

// for (let number = 1; number <= 10; number++){
//   if(number % 3 ===0){
//     console.log(`${number}는 3으로 나눠서 떨이지는 숫자입니다.`)
//   }
// }
 
// 1부터 20까지의 숫자중 홀수인 경우는 '숫자 ...은 홀수입니다.'
// 짝수인 경우는 '숫자 ...은 짝수입니다.를 출력
for(let number = 1; number <= 20; number++){
  if(number % 2 === 0){
    console.log(`숫자 ${number}는 짝수입니다.`)
  }else{
    console.log(`숫자 ${number}는 홀수입니다.`)
  }
}
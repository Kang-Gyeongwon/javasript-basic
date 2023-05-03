// const shoesPrice = 40000
// if (shoesPrice < 50000) {
//   console.log('이 신발을 사겠습니다.')
// }

// const capPrice = 50000 
// if(capPrice < 50000){
//   console.log('이 모자를 사겠습니다.')
// }

// const shoesPrice = 50000
// if (shoesPrice < 40000){
//   console.log('이 신발을 사겠습니다.')
// } else if (shoesPrice <= 50000) {
//   console.log('고민을 해볼게요.')
// } else {
//   console.log('너무 비싸요')
// }

/* 거리를 의미하는 변수를 선언하고 원하는 숫자값 (단위는 km라고 가정)울 할당
   2km 미만이면 "걸어가자"를, 2km 이상이고 5km 미만이면 "택시를 타자"를, 그 외에는 "기차를 타자"를 출력
*/

const distance = 10

if (distance < 2) {
  console.log("걸어가자")
} else if (distance >= 2 && distance < 5) {
  console.log("택시를 타자")
} else {
  console.log("기차를 타자")
}
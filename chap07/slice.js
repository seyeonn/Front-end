let a1 = [1, 2, 3, 4, 5]; 
let a2 = a1.slice(0);       //복제

console.log(a2);
console.log(a1 == a2);   //참조값만 비교(주소가 같다는 이야기는 동일한 객체)


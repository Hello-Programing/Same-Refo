// console.group('구구단')
// for(let i = 1; i < 10; i++){
//   console.group(`${i}단`)
//   for(let j = 1; j < 10 ; j++){
//     console.log(`${i} x ${j} = ${i*j}`)
//   }
//   console.groupEnd();
// }
// console.groupEnd();

let gugu = (n) => {
  for (let j = 1; j < 10; j++) {
    console.log(`${n} x ${j} = ${n*j}`)
  }
}

gugu(1)

//변수두개
for(let i = 0, j = 3 ; i < 10; i +=1 ){
  if(j == i){
    console.log("j선언!")
    break;
  }
  console.log("동작", i)
}

function solution(number){
  let threeMultiple = [];
	let fiveMultiple = [];
	for(let i = 0 ; i < number; i+=3){
			threeMultiple.push(i)
	}
	for(let j = 0; j<number ; j+=5){
			fiveMultiple.push(j)
		}
	let concatArr = fiveMultiple.concat(threeMultiple);
	let sum = concatArr.reduce(function(total, num){
    return total + num
  })
	return sum;
}


function solution(num){
  solution.res = 0;
  for(;num--;){
    if(num % 3 ==0 || num % 5 ==0) solution.res += num;
  }
  return solution.res
}

console.log(
  solution(10)
)

let a = {
  hello : 'world',
  pro : 'programming',
  js : 'javascript',
  time:156
}

console.log(JSON.stringify(a))

console.log(
  JSON.parse(JSON.stringify(a))
)

let contextObj = {
  name : 'js',
  test: function(){
    console.log(this.name);
     let ggg = () =>{
      console.log('in',this)
    }
    ggg()
  }
}
contextObj.test();
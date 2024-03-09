//map function
const input = [1,2,3,4,5];
const ans = input.map(function(i){
	return i*2;
});
console.log(ans);


//filter function
const arr = ["harkirat","raman","himanshu"];

const ans = arr.filter(function(n){
	if(n.startsWith("h")){
		return true;
	} else{
		return false;
	}
});
console.log(ans);


//create a map function that takes an array and a transform function as input and returns the transformed array as output.

const map = (arr, fn) => {
  const transformedArr = [];
  for(let i = 0; i<arr.length; i++){
	transformedArr.push(fn(arr[i]));
  }
  return tranformedArr;
};

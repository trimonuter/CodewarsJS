// url: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
// program: 2_sortOddNumbers.js

function sortArray(arr){
  let temp = 0
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 != 0){
      for(let j = i + 1; j < arr.length; j++){
        if ((arr[j] % 2 != 0) && (arr[j] < arr[i])){
          temp = arr[i]
          arr[i] = arr[j]
          arr[j] = temp
        }
      }
    }
  }
  return arr
}
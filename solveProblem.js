// url: https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
// program: 4_pigLatin.js

function pigIt(text){
  let textArray = text.split(" ")
  for (i = 0; i < textArray.length; i++){
    if ('?!'.includes(textArray[i]) == false){
      word = textArray[i]
      textArray[i] = word.slice(1) + word[0] + 'ay'
    }
  }
  return textArray.join(" ")
}
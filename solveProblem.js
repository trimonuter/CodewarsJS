// url: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
// program: 3_whoLikes.js

function likes(names) {
  whoLikes = 
  (names.length == 0) ? 'no one likes'
  : (names.length == 1) ? `${names[0]} likes`
  : (names.length == 2) ? `${names[0]} and ${names[1]} like`
  : (names.length == 3) ? `${names[0]}, ${names[1]} and ${names[2]} like`
  : `${names[0]}, ${names[1]} and ${names.length - 2} others like`

  return `${whoLikes} this`
}
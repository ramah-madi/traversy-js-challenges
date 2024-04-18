function displayLikes(arr) {
  let likeString = ``;
  if(arr.length > 3) {
    likeString = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;

  } else if (arr.length === 3) {
    likeString = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;

  } else if (arr.length === 2) {
    likeString = `${arr[0]} and ${arr[1]} like this`;

  } else if (arr.length === 1) {
    likeString = `${arr[0]} likes this`;

  } else {
    likeString = `no one likes this`;
  }

  return likeString
}

module.exports = displayLikes;

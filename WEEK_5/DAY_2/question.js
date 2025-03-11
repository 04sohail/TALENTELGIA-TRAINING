let arr = [2, 5, 1, 4, 3, 10, 2, 1];

let ans = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i+1; j <= arr.length; j++) {
    if (arr[i] < arr[j]) {
      ans.push(arr[i]);
    }
  }
}

console.log(ans);

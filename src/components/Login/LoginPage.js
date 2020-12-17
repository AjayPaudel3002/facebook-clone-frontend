function runProgram(input) {
  // write code inside this function only
  let lines = input.split("\n");
  //  console.log(lines)
  for (let i = 1; i < lines.length; i++) {
    let count = 0;
    let flag = false;
    let res = [];
    let arr = lines[i].split("").map((ele) => {
      count += Number(ele);
      if (Number(ele) === 0) {
        flag = true;
      }
      return Number(ele);
    });
    arr.sort((a, b) => b - a);
    if (flag === true && count % 3 === 0) {
      console.log(arr.join(""));
    } else if (flag && count % 3 !== 0) {
      let ele = count % 3;
      // console.log(ele)

      console.log(available);
      let occurance = 0;
      if (arr.included(ele)) {
        for (let j = 0; j < arr.length; j++) {
          if (arr[j] === ele && occurance < 1) {
            occurance++;
          } else {
            res.push(arr[j]);
          }
        }
      } else {
        for (let j = arr.length - 1; j > 0; j--) {
          if (count - arr[j] === 0 && occurance < 1) {
            occurance++;
          } else {
            res.push(arr[j]);
          }
        }
      }
      console.log(res.join(""));
    } else {
      console.log(-1);
    }
    // console.log(res , count , flag)
  }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});

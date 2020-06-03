function average(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result / arr.length;
}

function average2() {
  var size = 0;
  for (var j = 0; j < arguments.length; j++) {
    size += arguments[j];
  }

  return size / arguments.length;
}

// function average3(arr2) {
//   var size2 = 0;
//   for (var j = 0; j < arr2.length; j++) {
//     size2 += arr2[j];
//     if (isNaN(arr2[j])) {
//       arr2.pop();
//     }
//   }
//   return size2 / arr2.length;
// }

export { average, average2 };

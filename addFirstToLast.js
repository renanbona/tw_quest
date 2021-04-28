function addFirstToLast(arr) {
  if (arr.length == 0) { return "" };

  let firstAndLast = arr[0] + arr[arr.length - 1];

  return firstAndLast;
}
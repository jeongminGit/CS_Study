// shift 이용

function leftRotatebyOne(arr, n) {
    var temp = arr[0]
    arr.shift()
    arr[n-1] = temp // 마지막 값
    return answer = arr;
}
console.log(leftRotatebyOne([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7].length))

function leftRotate(arr, d, n) {
    for(j=0; j<d; j++) {
        var temp = arr[0]
        arr.shift()
        arr[n-1] = temp // 마지막 값
    }
    return answer = arr;
}
console.log(leftRotate([1, 2, 3, 4, 5, 6, 7], 3, [1, 2, 3, 4, 5, 6, 7].length))
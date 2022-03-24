// 왼쪽으로 한번 회전
// var arr = [1, 2, 3, 4, 5, 6, 7]
// var n = arr.length

function leftRotatebyOne(arr, n) {
    var temp = arr[0]
    for (i=0; i<n; i++) {
        arr[i] = arr[i+1]
    }
    arr[i-1] = temp // 마지막 값
    return answer = arr;
}
console.log(leftRotatebyOne([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7].length))

// d만큼 회전
function leftRotate(arr, d, n) {
    for(j=0; j<d; j++) {
        var temp = arr[0]
        for (i=0; i<n; i++) {
            arr[i] = arr[i+1]
        }
        arr[i-1] = temp // 마지막 값
    }
    return answer = arr;
}
console.log(leftRotate([1, 2, 3, 4, 5, 6, 7], 5, [1, 2, 3, 4, 5, 6, 7].length))
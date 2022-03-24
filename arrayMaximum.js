function arrayMaximum(arr, n) {
    var arrsum = 0 // arr[i]의 전체합
    var cursum = 0 // i*arr[i]의 전체합

    for(i=0; i<n; i++) {
        arrsum = arrsum + arr[i]
        cursum = cursum + (i*arr[i])
    }

    var maxsum = cursum

    for (j=0; j<n; j++) {
        cursum = cursum + arrsum - n*arr[n-1-j]
        if (cursum > maxsum) {
            maxsum = cursum
        }
    }
    return maxsum
}

console.log(arrayMaximum([1, 20, 2, 10], [1, 20, 2, 10].length))
console.log(arrayMaximum([10,1,2,3,4,5,6,7,8,9], [10,1,2,3,4,5,6,7,8,9].length))
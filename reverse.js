function reverseArray(arr, start, end) {
    while (start < end) {
        var temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        
        start++
        end--
        
    }
    return arr
}
console.log(reverseArray([1,2,3,4,5,6,7], 0, 1))
console.log(reverseArray([2,1,3,4,5,6,7], 2, 6))
console.log(reverseArray([2,1,7,6,5,4,3], 0, 6))
function rotateArray(arr, d, n) {
    reverseArray(arr, 0, d-1)
    reverseArray(arr, d, n-1)
    reverseArray(arr, 0, n-1)
    return arr
}
console.log(rotateArray([1,2,3,4,5,6,7], 2, [1,2,3,4,5,6,7].length))

// function reverseArrayJs(arr, d, n) {
//     var arr1 = arr.slice(0, d)
//     var arr2 = arr.slice(d)
//     arr1_reverse = arr1.reverse()
//     arr2_reverse = arr2.reverse()
//     arr_reverse = arr1_reverse.concat(arr2_reverse)
//     arr = arr_reverse.reverse()
//     console.log(arr1_reverse, arr2_reverse, arr_reverse,n)
//     return arr
// }
// console.log(reverseArrayJs([1,2,3,4,5,6,7], 2, [1,2,3,4,5,6,7].length))
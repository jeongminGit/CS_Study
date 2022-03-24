function reArray(arr, n) {
    console.log(arr, n)
    for (i=0; i<n; i++) {
        if (arr[i] !== -1 && arr[i] !== i) { // arr[i]가 -1도 아니고, i도 아닐 때
            var x = arr[i] // 해당 값을 x에 저장
            console.log(x)
            while(arr[x] !== -1 && arr[x] == x) {
                var y = arr[x]

                x = y
            }

            arr[x] = x

            if (arr[i] !== i) {
                arr[i] = -1
                console.log(arr)
            }
        }
    }
    return arr
}
console.log(reArray([-1,-1,6,1,9,3,2,-1,4,-1], [-1,-1,6,1,9,3,2,-1,4,-1].length) ) 
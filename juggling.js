// 최대공약수 gcd 활용
// 유클리드 호제법 알고리즘 : 주어진 두 수 사이에 존재하는 최대 공약수(gcd)를 구하는 알고리즘
// a, b가 주어질 때 a > b라면
// (a % b !== 0)이면 a와 b를 바꾼 뒤 나머지가 0일때까지 계속 반복
// a를 b로 나눈 나머지가 0일 때 b가 최대 공약수
// ex) a = 10, b = 4
// a : 1, 2, 5, 10 / b : 1, 2, 4
// a % b = 2(gcd)

// function getGcdex(a, b) {
//     if (b == 0) {
//         gcd = a // a와 b는 정수라는 조건이 있기에 굳이 넣을 필요는 없다
//     } else if ((a % b) == 0) {
//         gcd = b
//     } else {
//         gcd = getGcd(b, a % b)
//     }
//     return gcd
// }
// console.log(getGcdex(10, 3))


function getGcd(d, n) {
    if (n == 0) {
        gcd = d
    } else if ((d % n) == 0) {
        gcd = n
    } else {
        gcd = getGcd(n, d % n)
    }
    return gcd
}
// console.log(getGcd(12, 3))
// juggling 알고리즘의 장점은?? 잘 모르겠다(생각하는 프로그래밍 책 사야할 듯)
function jugglingArray(arr, d, n) {
    for (i=0; i<getGcd(d, n); i++) {
        var temp = arr[i] // 첫번째 배열 미리 추출
        var j = i
        console.log(arr, temp, j)
        while(true) { // break조건이 될때까지 반복
            var k = j + d
            console.log(k, j, d, n, i)
            if (k >= n) {
                k = k - n
            }
            if (k == i) {
                break
            }

            arr[j] = arr[k]
            j=k
        }
        arr[j] = temp
    }
    return answer = arr
}
console.log(jugglingArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].length))
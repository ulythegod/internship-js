//Check If N and Its Double Exist
function checkIfExist(arr) {
    var result = false;
    arr.forEach(function (value, index) {
        var m = value / 2;
        for (var i = 0; i < arr.length; i++) {
            if (i != index && arr[i] == m) {
                result = true;
                return result;
            }
        }
    });
    return result;
}
;
// let arr = [3, 1, 7, 11];
// checkIfExist(arr);
//Valid Mountain Array
function validMountainArray(arr) {
    var result = false;
    if (arr.length >= 3) {
        var n = arr.length;
        var i = 0;
        while (i + 1 < n && arr[i] < arr[i + 1]) {
            i++;
        }
        if (i == 0 || i == n - 1) {
            return result;
        }
        while (i + 1 < n && arr[i] > arr[i + 1]) {
            i++;
        }
        result = (i == (n - 1));
    }
    return result;
}
;
// let arr = [0,3,2,1];
// console.log(validMountainArray(arr));
//Replace Elements with Greatest Element on Right Side
function replaceElements(arr) {
    arr.forEach(function (value, index) {
        console.log("index", index);
        console.log("value", value);
        if (index == arr.length - 1) {
            arr[index] = -1;
        }
        else {
            var maxRight = arr[index + 1];
            for (var i = index + 1; i < arr.length; i++) {
                if (arr[i] > maxRight) {
                    maxRight = arr[i];
                }
            }
            console.log("maxRight", maxRight);
            arr[index] = maxRight;
        }
        console.log("new", arr[index]);
        console.log("");
    });
    return arr;
}
;
var arr = [57010, 40840, 69871, 14425, 70605];
console.log(replaceElements(arr));

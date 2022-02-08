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
var arr = [3, 1, 7, 11];
console.log(checkIfExist(arr));

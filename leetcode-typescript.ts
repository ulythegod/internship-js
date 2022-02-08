//Check If N and Its Double Exist
function checkIfExist(arr: number[]): boolean {
    let result = false;   

    arr.forEach(function (value, index) {
        let m = value / 2;

        for (let i = 0; i < arr.length; i++) {
            if (i != index && arr[i] == m) {
                result = true;
                return result;
            }
        }
    });    

    return result;
};

let arr = [3, 1, 7, 11];
checkIfExist(arr);

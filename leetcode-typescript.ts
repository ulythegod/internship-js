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

// let arr = [3, 1, 7, 11];
// checkIfExist(arr);

//Valid Mountain Array
function validMountainArray(arr: number[]): boolean {
    let result = false;

    if (arr.length >= 3) {
        let n = arr.length;
        let i = 0;
        

        while (i + 1 < n && arr[i] < arr[i+1]){
            i++;
        }

        if (i == 0 || i == n - 1) {
            return result;
        }

        while (i+1 < n && arr[i] > arr[i+1]) {
            i++;
        }

        result = (i == (n - 1));
    }

    return result;
};

// let arr = [0,3,2,1];
// console.log(validMountainArray(arr));

//Replace Elements with Greatest Element on Right Side
function replaceElements(arr: number[]): number[] {
    arr.forEach(function (value, index) {        
        if (index == arr.length - 1) {
            arr[index] = -1;
        } else {
            let maxRight = arr[index + 1];
            
            for (let i = index + 1; i < arr.length; i++) {
                if (arr[i] > maxRight) {
                    maxRight = arr[i];
                }
            }

            arr[index] = maxRight;
        }
    });

    return arr;
};

let arr = [57010, 40840, 69871, 14425, 70605];
console.log(replaceElements(arr));

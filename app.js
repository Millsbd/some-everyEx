function hasOddNumber(arr){
    return arr.some(function(val){
        return val % 2 !== 0;
    })
    // return false;
}
// The return false is implied here you dont have to specically do it. The function below also works but is needlessly long.

function otherOddEval(arr){
    return arr.some(function(val){
        if(val % 2 !==0){
            return true;
        }
        return false;
    });
}

function hasAZero(number){
    let numArr = Array.from(String(number));
    return numArr.some(function(val){
        return val == '0';
    });
}

// needed to add the string command to the Array.from to turn the number into a string so you could turn it into an array and use the some array method on it. 

function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
        return val % 2 !== 0;
    })
}

function hasNoDuplicates(arr){
    return arr.every(function(val){
        return arr.indexOf(val) == arr.lastIndexOf(val);
    })
}
// checks the index of every value to make sure it is also the last index of that value to return true. 

function hasCertainKey(arr, key){
    return arr.every(function(val){
        return key in val
    });
}

let valArry = [
    {name: 'Ben', make: 'Boy', age: 25},
    {name: 'Sally', make: 'Boy'},
    {name: 'Jon', make: 'Boy', age: 35}
]

function hasCertainValue(arr,key,value){
    return arr.every(function(val){
        return val[key] === value;
    })
}
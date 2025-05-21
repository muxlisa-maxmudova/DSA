function searchInsertPosition(arr, target) {
    let low = 0
    let high = arr.length-1
    while(low<=high){
       let mid = Math.floor((low+high)/2)
        if(arr[mid]===target){
            return mid
        }
        else if(arr[mid]>target){
            high = mid - 1
        }
        else if(arr[mid]<target){
            low = mid + 1
        }
    }
    return low
}
console.log(searchInsertPosition([1,3,4,5,6,7,8,9], 2))
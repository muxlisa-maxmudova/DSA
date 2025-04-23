function removeDuplicates(head){
    let nums = 0;
    let newList = [];
    for (i = 0; i < head.length; i++) {
        elem = head[i]
        if(elem !== head[i+1]){
            nums = elem
            newList.push(nums)
        }
    }
    console.log(newList)
}
removeDuplicates([1,1,2]) // check for sorted list

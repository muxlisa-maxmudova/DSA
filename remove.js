head = [1,1,2,3,3]
function removeDuplicates(list){
   let nums = 0;
   let newList = [];
    for (i = 0; i < list.length; i++) {
        elem = list[i]
        if(elem === list[i+1]){
            nums = elem
            newList.push(nums)
        }
    }
    console.log(newList)
}
removeDuplicates(head)
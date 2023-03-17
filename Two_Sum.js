//  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



function  TwoSum(nums, target) {
    

   // declaring empty array
    let e=[];
// first loop will traverse from start index.
    for(let i=0;i<nums.length;i++){
// second loop will traverse from i+1
        for(let j=i+1;j<nums.length;j++){

            if(nums[i]+nums[j]==target){
                e.push(i);
                e.push(j);
              // pushing i first and j at the last
                return e;
              // returning array of length 2 as only 1 pair exist of one solution
            }
          

        
    }

    }


}
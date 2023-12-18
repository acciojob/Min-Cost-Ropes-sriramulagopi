function mincost(arr)
{ 
//write your code here
// return the min cost
    let mincost = 0;
    let mincost2 = 0;
    while(arr.length>1){
        arr.sort((a,b)=>{
            return a-b;
        })
        mincost=(arr[0]+arr[1]);
        mincost2+=mincost;
        arr.push(mincost);
        arr.splice(0,2);

    }
    return mincost2;
  
}

module.exports=mincost;

function findMinimum(arr){
    if (arr.length===0){
        console.log('your array is empty')
    }
  let min =arr[0]
  for(let i =1 ; i < arr.length; i++){
    if(arr[i]< min ){
        min= arr[i];
    }
  }console.log( min +'is Minimum value.!!!!!')
}
console.log(findMinimum([0,1,2,3,-43
    
]))

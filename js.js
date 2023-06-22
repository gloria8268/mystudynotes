 

function fibonacciGenerator (n)  {
  const index0 = 0
  const index1 = 1
  let fibarr = []
  if (n === 1) {
    fibarr.push(index0)
  } else if (n === 2){
    fibarr.push(index0)
    fibarr.push(index1)
  } else { 
    fibarr.push(index0)
    fibarr.push(index1)
    for (let i = fibarr.length; i < n; i++){
      fibarr.push(fibarr[i-2]+fibarr[i-1])
    }
  }
  return fibarr
 }


let result =  fibonacciGenerator(6)
console.log(result)

the question is about flex:







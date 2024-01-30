let button = document.querySelector('#btn')
let btn = document.querySelector('#btnn')
let container = document.querySelector('#container')


button.addEventListener('click', (event)=>{
    event.preventDefault()
    function fibs(){
        const itarationNumber = document.querySelector('#number').value;
    let n1 = 0, n2 = 1, nextTerm;
    for (let i = 0; i <= itarationNumber; i++) {
        const content = document.querySelector('.iterate')
        let answer = document.createElement('p');
        answer.textContent =`${n1}`;
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        content.appendChild(answer);
    }
    }fibs()
})


btn.addEventListener('click', (event)=>{
    event.preventDefault()
    let recurse = document.querySelector('.recursion');
    function fibsRec(n){
        
        if(n <= 1){
          return n
        }
        else {
          return fibsRec(n - 1) + fibsRec(n - 2)
        }
        
      }fibsRec(8)
      
      
      let numb = document.querySelector('#numb').value;
      let n1= 0, n2 = 1, nextTerm
      for(let i = 0; i < numb; i++){
        let ans = document.createElement('p')
        ans.textContent = fibsRec(i)
        recurse.appendChild(ans)
      }
})
 



let b = document.querySelector('#btnnn')
b.addEventListener('click', (event)=>{
    event.preventDefault()
    
    const con = document.querySelector('.sort')
    let sort = document.createElement('p')
    let numb = prompt("Please enter number")
    const arr = numb
    let ary  = numb.split(', ') 
    const sortedArr = margeSort(arr)
    console.log(sortedArr)
    sort.textContent = sortedArr
    con.appendChild(sort)
    
})



function margeSort(arr){
    if(arr.length <=1){
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    console.log( arr , mid)
   const left = arr.slice(0, mid)
   const right = arr.slice(mid)
   const leftSort = margeSort(left)
   const rightSort = margeSort(right)
   console.log(rightSort)
   console.log(leftSort)
   console.log(marge(leftSort, rightSort))
   return marge(leftSort, rightSort)
   
}

function marge(left, right){
    const  result = []
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length){
        if(left[i] <= right[j]){
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }
    }
    return result.concat(left.slice(i).concat(right.slice(j)))
}


const incremBtn = document.querySelector('.increment-btn')
const countNo = document.querySelector('.count-no')

 function increment(){
    let sum = 1 + 1 * countNo.innerHTML
  if(countNo.innerHTML >= 20){
    alert('WE HAVE REACH FULL CAPCITY!!!')
    sum = 0
  }
  countNo.innerHTML= sum

 }
incremBtn.addEventListener('click',increment)

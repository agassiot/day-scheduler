const dateL = document.querySelector('#currentDay');
const timeBlockL = document.querySelectorAll('[name]');
const tableL = document.querySelector('.container');
const date = new Date();
const time = date.getHours();


dateL.textContent = `${date.toDateString().slice(0,10)}, ${date.toDateString().slice(10)}`

console.log(time);
timeBlockL.forEach((x)=>{
      var timeSlot = x.getAttribute('name');
      if(localStorage.getItem(timeSlot)) {
      x.lastElementChild.previousElementSibling.firstElementChild.textContent = localStorage.getItem(timeSlot);
     };
      if (Number(timeSlot) == time) {
          x.classList.add('present');
  } else {
      Number(timeSlot) > time ? x.classList.add('future') : x.classList.add('past')
  }
});

tableL.addEventListener('click',(e)=>{
      if(e.target.className == 'col-1 saveBtn' || e.target.className == 'fa-regular fa-2x fa-floppy-disk') {
            let save= e.target.closest('tr');
            console.log(save.lastElementChild.previousElementSibling.firstElementChild.value);
      saveItem(save.getAttribute('name'),save.lastElementChild.previousElementSibling.firstElementChild.value);
}
});

/* 
4. add event listener to container
5. if e.target has attr class= col-1 saveBtn, save to console storage as
      'textcontent', 'e.target.closest('tr).getAttribute('name')'
6
 */



function setBlocks(x){
     
}
   

function saveItem(key,item) {
      return localStorage.setItem(key,item); 
}
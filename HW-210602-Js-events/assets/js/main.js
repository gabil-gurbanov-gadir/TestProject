
// const link = document.getElementById('link');

// // link.getAttribute('data-id');
// link.setAttribute('class', 'anchor');
// link.setAttribute('href', 'https://facebook.com');
// link.innerText = 'Link to facebook';

// const buttons = Array.from(document.getElementsByClassName('button'));
// let lastBox;

// buttons.forEach((button) => {
//   button.onclick = function () {
//     // document.querySelectorAll('.box').forEach((box) => {
//     //   box.style.backgroundColor = 'transparent';
//     // });

//     // lastBox ? lastBox.style.backgroundColor = 'transparent' : null;
//     // lastBox?.style.backgroundColor = 'transparent';
//     if (lastBox) {
//       lastBox.style.backgroundColor = 'transparent';
//       lastBox.classList.remove('active');
//     }

//     const dataColor = button.getAttribute('data-color'); //red, blue, green, yellow

//     const box = document.getElementById(dataColor);
//     lastBox = box;
//     box.classList.add('active');
//     box.style.backgroundColor = dataColor;
//   }
// });

window.oncontextmenu = function (e) { //Event Object
    e.preventDefault();
    const element = document.createElement('div');
    element.style.width = '100px';
    element.style.height = '100px';
    element.style.backgroundColor = 'blue';
    element.style.position = 'fixed';
    element.style.zIndex = '99';
    element.style.left = `${e.clientX}px`;
    element.style.top = `${e.clientY}px`;
    document.body.append(element);
  }
  
  
  const link = document.getElementById('link');
  // link.onclick = function (e) {
  //   e.preventDefault();
  // }
  
  // link.onclick = function () {
  //   console.log('1');
  // }
  
  // link.onclick = function () {
  //   console.log('2');
  // }
  
  // link.addEventListener('click', function (e) {
  //   e.preventDefault();
  // });
  
  // link.addEventListener('click', function (e) {
  //   console.log('1');
  // });
  
  // link.addEventListener('click', function (e) {
  //   console.log('2')
  // });
  // link.addEventListener('click', function (e) {
  //   console.log('3')
  // });
  // link.addEventListener('click', function (e) {
  //   console.log('4')
  // });
  
  // link.addEventListener('mouseover', function (e) {
  //   e.target.style.backgroundColor = 'yellow';
  // });
  
  
  // link.addEventListener('mouseleave', function (e) {
  //   e.target.style.backgroundColor = 'initial';
  // });
  
  // const inputElement = document.getElementById('firstname');
  
  // inputElement.addEventListener('focus', listener);
  
  // function listener(e) {
  //   console.log(e)
  //   if (!inputElement.value) {
  //     inputElement.classList.add('border-danger');
  //   } else {
  //     inputElement.classList.add('border-success');
  //   }
  // }

const firstnameInput = document.getElementById('firstname');
const lastnameInput = document.getElementById('lastname');
const todoList = document.querySelector('.student-list');

firstnameInput.addEventListener('keydown', (e) => {
  if (e.code === 'Enter' && e.target.value) {
    lastnameInput.focus();
  }
});

lastnameInput.addEventListener('keydown', (e) => {
  if (e.code === 'Enter' && firstnameInput.value && e.target.value) {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerText = `${firstnameInput.value.toLocaleUpperCase()} ${lastnameInput.value.toLocaleUpperCase()}`;
    todoList.append(listItem);
    firstnameInput.value = '';
    lastnameInput.value = '';
    firstnameInput.focus();
  }
});
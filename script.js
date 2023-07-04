const inputBox = document.getElementById('input-box');

const listContainer = document.getElementById('list-container');

const addTask = () => {
  if (inputBox.value === '') {
    Toastify({
      text: 'You must Write something!',
      duration: 3000, // Duration in milliseconds
      close: true, // Show a close button
      gravity: 'top', // Display position (top, bottom, or center)
    }).showToast();
  } else {
    // Create a <li/> tag in javascript
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // create a <span/> tag
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
};

listContainer.addEventListener(
  'click',
  (e) => {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      saveData();
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem('data', listContainer.innerHTML);
};

const showTask = () => {
  listContainer.innerHTML = localStorage.getItem('data');
};
showTask();

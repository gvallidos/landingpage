const storageInput = document.querySelector('input');
const btn = document.querySelector('button');
const saveToLocalStorage = () => {localStorage.setItem('e-mail', storageInput.value)}
btn.addEventListener('click', saveToLocalStorage);


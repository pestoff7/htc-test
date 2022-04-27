// Поиск элементов по документу
let email = document.querySelector('#login'),
  password = document.querySelector('#password'),
  btn = document.querySelector('#submit');
  spanEmail = document.querySelector('.span-email'),
  spanPassword = document.querySelector('.span-password');

const regPassword = /(?=.*[A-Z])(?=.*\d)(?=.*\W)[a-zA-Z\d\W]{6,}/; //Регулярка для пароля
const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; //Регулярка для e-mail

// Функция отправки формы
btn.onclick = function (e) {  
  e.preventDefault();
  
  //Проверка e-mail
  if(!regEmail.test(email.value)){ 
    notValid(email, spanEmail, 'Введите корректный e-mail')
  } 
  else{
    console.log('email valid');
    valid(email, spanEmail, '')
  }

  // Проверка пароля
  if(!regPassword.test(password.value)){ 
    notValid(password, spanPassword, 'не менее 6 символов <br> символы разных регистров <br> должны присутствовать числа <br> должны присутствовать спец. символы.')
  } 
  else{
    console.log('password valid');
    valid(password, spanPassword, '')
  }
}

//Функция вывода сообщения(негативный сценарий) 
function notValid(inp, elm, messg){
  inp.classList.add('input-failed'); //Добавление класса для изменения вида инпута
  elm.innerHTML = messg; //Вывод сообщения
}

//Функция вывода сообщения(позитивный сценарий) 
function valid(inp, elm, messg){
  inp.classList.remove('input-failed'); //Удаление класса для изменения вида инпута
  inp.classList.add('input-good'); //Добавление класса для изменения вида инпута
  elm.innerHTML = messg; //Вывод сообщения
}
let user = detect.parse(navigator.userAgent);

// Функция проверки браузера
function browserCheck() {
  if (user.browser.family === 'IE') {
  alert("Вы используете IE. Смените браузер!");
}
  else {
    console.log('Browser is good')
  }
}
browserCheck(); 
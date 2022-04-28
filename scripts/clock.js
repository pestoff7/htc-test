//Функция вывзывающаяся каждую секунду для изменения времени на странице
let myVar = setInterval(function() {
  myTimer();
}, 1000);

let dayOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']; //Массив с названиями дней недель

//Функция вставки времени, даты, дня недели
function myTimer() {
  let d = new Date();
  let dayOfWeek = getDayWeek();
  document.querySelector(".clock").innerHTML = d.toLocaleTimeString() + '<br>' + d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear() + '<br>' + dayOfWeek;
}

//Функция преобразования дня недели из числа в текстовый вид
function getDayWeek(){
  let d = new Date();
  let day;
  switch (d.getDay()) {
    case 0:
      day = dayOfWeek[0];
      break;
    case 1:
      day = dayOfWeek[1];
      break;
    case 2:
      day = dayOfWeek[2];
      break;
    case 3:
      day = dayOfWeek[3];
      break;
    case 4:
      day = dayOfWeek[4];
      break;
    case 5:
      day = dayOfWeek[5];
      break;
    case 6:
      day = dayOfWeek[6];
      break;
  }
  return day;
}
function animateButton() {
  var button = document.querySelector('button');
  button.classList.add('animated'); // добавляем класс анимации
  setTimeout(function() {
    button.classList.remove('animated'); // удаляем класс анимации через 1 секунду
  }, 1000);
}


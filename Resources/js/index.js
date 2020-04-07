//General Javascript Page









//Write code for animated scroll Buttons




//Portfolio onHover Animations
const quiz = document.getElementById('quiz');
const quizContent = document.getElementById('quiz-content');
const salon = document.getElementById('salon');
const salonContent = document.getElementById('salon-content');
const multisite = document.getElementById('multisite');
const multisiteContent = document.getElementById('multisite-content');

//Quiz
quiz.addEventListener('mouseover', function(e) {
  quizContent.classList.add('visible');
  quizContent.classList.remove('hidden');
});
quiz.addEventListener('mouseout', function(e) {
  quizContent.classList.add('hidden');
  quizContent.classList.remove('visible');
});

//Salon
salon.addEventListener('mouseover', function(e) {
  salonContent.classList.add('visible');
  salonContent.classList.remove('hidden');
});
salon.addEventListener('mouseout', function(e) {
  salonContent.classList.add('hidden');
  salonContent.classList.remove('visible');
});

//Multisite
multisite.addEventListener('mouseover', function(e) {
  multisiteContent.classList.add('visible');
  multisiteContent.classList.remove('hidden');
});
multisite.addEventListener('mouseout', function(e) {
  multisiteContent.classList.add('hidden');
  multisiteContent.classList.remove('visible');
});



//Write code for media queries swapping diff views on diff devices

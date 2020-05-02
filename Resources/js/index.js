//General Javascript Page





//Portfolio onHover Animations
const quiz = document.getElementById('quiz');
const quizContent = document.getElementById('quiz-content');
const writer = document.getElementById('writer');
const writerContent = document.getElementById('writer-content');
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

//Writer's App
writer.addEventListener('mouseover', function(e) {
  writerContent.classList.add('visible');
  writerContent.classList.remove('hidden');
});
writer.addEventListener('mouseout', function(e) {
  writerContent.classList.add('hidden');
  writerContent.classList.remove('visible');
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

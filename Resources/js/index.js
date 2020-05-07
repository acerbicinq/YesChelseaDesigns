//General Javascript Page
//Portfolio onHover Animations
const item1 = document.getElementById('item1');
const item1Content = document.getElementById('item1-content');
const item2 = document.getElementById('item2');
const item2Content = document.getElementById('item2-content');
const item3 = document.getElementById('item3');
const item3Content = document.getElementById('item3-content');

let isMobile = false;

function portfolio() {
  if (screen.width <= 800) {
    isMobile = true;
  } if (!isMobile) {
    //Item1
    item1.addEventListener('mouseover', function(e) {
      item1Content.classList.add('visible');
      item1Content.classList.remove('hidden');
    });
    item1.addEventListener('mouseout', function(e) {
      item1Content.classList.add('hidden');
      item1Content.classList.remove('visible');
    });

    //Item2
    item2.addEventListener('mouseover', function(e) {
      item2Content.classList.add('visible');
      item2Content.classList.remove('hidden');
    });
    item2.addEventListener('mouseout', function(e) {
      item2Content.classList.add('hidden');
      item2Content.classList.remove('visible');
    });

    //Item 3
    item3.addEventListener('mouseover', function(e) {
      item3Content.classList.add('visible');
      item3Content.classList.remove('hidden');
    });
    item3.addEventListener('mouseout', function(e) {
      item3Content.classList.add('hidden');
      item3Content.classList.remove('visible');
    });
  }
}
portfolio();

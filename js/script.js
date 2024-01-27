
function showSection(sectionId) {
    
    document.getElementById('home').style.display = 'none';
    document.getElementById('experience').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'none';

    document.getElementById(sectionId).style.display = 'block';
}

document.getElementById('home-link').addEventListener('click', function() {
    showSection('home');

});

document.getElementById('experience-link').addEventListener('click', function() {
    showSection('experience');
});

document.getElementById('projects-link').addEventListener('click', function() {
    showSection('projects');
});

document.getElementById('contact-link').addEventListener('click', function() {
    showSection('contact');
});
$(document).ready(function () {
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    offset: 80
  });
});
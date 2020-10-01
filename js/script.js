const biodata = document.getElementById('biodata');
const programming = document.getElementById('programming');
const design = document.getElementById('design');
const analysis = document.getElementById('analysis');
const dataScience = document.getElementById('data-science');
const launchSkill = document.getElementById('launch-skill');

programming.addEventListener('click', function() {
    biodata.style.backgroundImage = "url('img/rocket/rocket-purple.svg')";
});

design.addEventListener('click', 
  function() {
    biodata.style.backgroundImage = "url('img/rocket/rocket-green.svg')";
    launchSkill.style.display = 'block';
});

analysis.addEventListener('click',
  function() {
    biodata.style.backgroundImage = "url('img/rocket/rocket-yellow.svg')";
});

dataScience.addEventListener('click',
  function() {
    biodata.style.backgroundImage = "url('img/rocket/rocket-red.svg')";
});


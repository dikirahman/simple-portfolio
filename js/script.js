const biodata = document.getElementById('biodata');
const programming = document.getElementById('programming');
const design = document.getElementById('design');
const analysis = document.getElementById('analysis');
const dataScience = document.getElementById('data-science');

programming.addEventListener('click', function() {
    biodata.style.backgroundImage = "url('img/rocket/rocket-purple.svg')";
});

design.addEventListener('click', 
  function() {
    biodata.style.backgroundImage = "url('img/rocket/rocket-green.svg')";
});

analysis.addEventListener('click',
  function() {
    biodata.style.backgroundImage = "url('img/rocket/rocket-yellow.svg')";
});

dataScience.addEventListener('click',
  function() {
    biodata.style.backgroundImage = "url('img/rocket/rocket-red.svg')";
});


const biodata = document.getElementById('biodata');
const launchSkill = document.getElementById('launch-skill');
const headerSkill = document.getElementById('header-skill');

/*
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
*/

const ubahBackground = (skill, gambar) => {
  biodata.style.backgroundImage = `url(img/rocket/${gambar})`;
  launchSkill.style.display = 'block';
  headerSkill.innerText = skill;
  
  
}

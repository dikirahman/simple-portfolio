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
/*
const ubahBackground = (skill, gambar) => {
  // ganti background
  biodata.style.backgroundImage = `url(img/rocket/${gambar})`;
  // tampilkan detail skill
  launchSkill.style.display = 'block';
  // ganti judul di header detail skill
  headerSkill.innerText = skill;
  
  // jika parameter skill = programming
  if(skill == 'Programming') {

  }
  
} */

const skill = document.getElementById('programming');
const programming = document.getElementById('skill-programming');
const design = document.getElementById('skill-design');

/*
skill.addEventListener('click', function() {
  this.classList.toggle("active");
  if(launchSkill.style.display === "block"){
    launchSkill.style.display = 'none';
  } else {
    launchSkill.style.display = 'block';
  }
}); */

function tampilkanSkill(id, img) {
  headerSkill.innerText = id;
  // ganti background
  biodata.style.backgroundImage = `url(img/rocket/${img})`;

  if(id == 'Programming') {
    if (launchSkill.style.display === "block") {
      launchSkill.style.display = 'none';
    } else {
      launchSkill.style.display = 'block';
      programming.style.display = 'block';
      design.style.display = 'none';
    }
  } else if(id == 'Design') {
    if (launchSkill.style.display === "block") {
      launchSkill.style.display = 'none';
    } else {
      launchSkill.style.display = 'block';
      design.style.display = 'block';
      programming.style.display = 'none';
    }
  }
}

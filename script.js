function scrollToBuilder(){

  document.getElementById('builder').scrollIntoView({
    behavior:'smooth'
  });

}

function showDemo(){

  alert('✨ Scroll below and create your resume live.');

  scrollToBuilder();

}

const fields = [
  'name',
  'role',
  'email',
  'phone',
  'about',
  'skills',
  'education',
  'experience'
];

fields.forEach(field => {

  document.getElementById(field)
  .addEventListener('input', updateResume);

});

function updateResume(){

  document.getElementById('previewName').innerText =
  document.getElementById('name').value || 'Your Name';

  document.getElementById('previewRole').innerText =
  document.getElementById('role').value || 'Your Role';

  document.getElementById('previewContact').innerText =
  `${document.getElementById('email').value || 'your@email.com'}
${document.getElementById('phone').value || '+91 XXXXX XXXXX'}`;

  document.getElementById('previewAbout').innerText =
  document.getElementById('about').value || 'Write about yourself...';

  document.getElementById('previewSkills').innerText =
  document.getElementById('skills').value || 'Your skills...';

  document.getElementById('previewEducation').innerText =
  document.getElementById('education').value || 'Your education...';

  document.getElementById('previewExperience').innerText =
  document.getElementById('experience').value || 'Your experience...';

}

function downloadResume(){

  window.print();

}

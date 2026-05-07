const templates = [
  'template-1',
  'template-2',
  'template-3'
];

function scrollToBuilder(){

  document.getElementById('builder').scrollIntoView({
    behavior:'smooth'
  });

}

function generateResume(){

  const name = document.getElementById('name').value || 'Your Name';

  const role = document.getElementById('role').value || 'Professional';

  const skills = document.getElementById('skills').value || 'Your Skills';

  const aboutInput = document.getElementById('about').value;

  const experienceInput = document.getElementById('experience').value;

  document.getElementById('previewName').innerText = name;

  document.getElementById('previewRole').innerText = role;

  document.getElementById('previewSkills').innerText = skills;

  document.getElementById('previewAbout').innerText =
  `Creative and motivated ${role} with strong passion for innovation, communication and professional growth. Skilled in ${skills}. ${aboutInput}`;

  document.getElementById('previewExperience').innerText =
  experienceInput || `Worked on projects, collaborations and creative problem-solving tasks related to ${role}.`;

}

function randomTemplate(){

  const template = document.getElementById('resumeTemplate');

  template.classList.remove(
    'template-1',
    'template-2',
    'template-3'
  );

  const random = templates[
    Math.floor(Math.random() * templates.length)
  ];

  template.classList.add(random);

}

function downloadResume(){

  window.print();

}function scrollToBuilder(){

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

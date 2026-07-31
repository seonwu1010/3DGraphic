const projects = [
  {id:'scifi', title:'SCI-FI CORRIDOR', category:'personal', kind:'Environment', date:'2024.07', cover:'Personal/202407_Sci-fi/Main.jpg', images:['Personal/202407_Sci-fi/Main.jpg','Personal/202407_Sci-fi/Door.jpg','Personal/202407_Sci-fi/Wall.jpg','Personal/202407_Sci-fi/Floor.jpg','Personal/202407_Sci-fi/Ceiling.jpg']},
  {id:'crt', title:'CRT & NES', category:'personal', kind:'Props', date:'2024.09', cover:'Personal/202409_CRT&Nes/Main.jpg', images:['Personal/202409_CRT&Nes/Main.jpg','Personal/202409_CRT&Nes/CRT_Day.jpg','Personal/202409_CRT&Nes/CRT_Night.jpg','Personal/202409_CRT&Nes/CRT_Solo.jpg','Personal/202409_CRT&Nes/NES.jpg','Personal/202409_CRT&Nes/NES_NIght.jpg','Personal/202409_CRT&Nes/Nes_Solo.jpg']},
  {id:'knife', title:'UTILITY KNIFE', category:'personal', kind:'Props', date:'2026.03', cover:'Personal/202603_Knife/Main.jpg', images:['Personal/202603_Knife/Main.jpg','Personal/202603_Knife/knife1.jpg','Personal/202603_Knife/knife 2.jpg','Personal/202603_Knife/knife 3.jpg','Personal/202603_Knife/knife 5.jpg','Personal/202603_Knife/knife 6.jpg']},
  {id:'tile', title:'TILE STUDY 02', category:'zbrush', kind:'ZBrush', date:'2024.12', cover:'Personal/ZBrush/202412_Tile2/Main.jpg', images:['Personal/ZBrush/202412_Tile2/Tile2.jpg','Personal/ZBrush/202412_Tile2/Tile2(2).jpg']}
];

const byId = Object.fromEntries(projects.map(project => [project.id, project]));
const asset = path => encodeURI(path);
let activeCategory = 'personal', viewing = [], currentIndex = 0;

function renderProjects() {
  const items = projects.filter(project => project.category === activeCategory);
  document.querySelector('#personalGrid').innerHTML = items.map(project => `<article class="project-card" data-project="${project.id}"><img src="${asset(project.cover)}" alt="${project.title}" loading="lazy"><div class="card-info"><span class="card-title">${project.title}</span><span class="card-views">${project.kind} · ${project.date}</span></div></article>`).join('');
}
function openLightbox(id) {
  const project = byId[id]; if (!project) return;
  viewing = projects.filter(item => item.category === project.category);
  currentIndex = viewing.findIndex(item => item.id === id);
  document.querySelector('#lightbox').showModal();
  updateLightbox();
}
function updateLightbox() {
  const project = viewing[currentIndex];
  document.querySelector('#lightboxImage').src = asset(project.images[0]);
  document.querySelector('#lightboxImage').alt = project.title;
  document.querySelector('#lightboxMeta').innerHTML = `<strong>${project.title}</strong><br>${project.kind} · ${project.date}`;
  document.querySelector('#lightboxThumbs').innerHTML = viewing.map((item, index) => `<button class="${index === currentIndex ? 'active' : ''}" data-lightbox-index="${index}" aria-label="Open ${item.title}"><img src="${asset(item.cover)}" alt=""></button>`).join('');
}
function move(step) { currentIndex = (currentIndex + step + viewing.length) % viewing.length; updateLightbox(); }
function toast(message) { const element = document.querySelector('#toast'); element.textContent = message; element.classList.add('visible'); clearTimeout(toast.timer); toast.timer = setTimeout(() => element.classList.remove('visible'), 1800); }

document.addEventListener('click', event => {
  const nav = event.target.closest('[data-nav]');
  if (nav) { event.preventDefault(); if (nav.dataset.nav === 'zbrush') { activeCategory = 'zbrush'; document.querySelectorAll('.category-tab').forEach(tab => tab.classList.toggle('active', tab.dataset.category === 'zbrush')); renderProjects(); document.querySelector('#personal').scrollIntoView({behavior:'smooth'}); } else { document.querySelector(`#${nav.dataset.nav}`).scrollIntoView({behavior:'smooth'}); } return; }
  const tab = event.target.closest('[data-category]');
  if (tab) { activeCategory = tab.dataset.category; document.querySelectorAll('.category-tab').forEach(item => item.classList.toggle('active', item === tab)); renderProjects(); return; }
  const card = event.target.closest('[data-project]'); if (card) { openLightbox(card.dataset.project); return; }
  const thumb = event.target.closest('[data-lightbox-index]'); if (thumb) { currentIndex = Number(thumb.dataset.lightboxIndex); updateLightbox(); return; }
  if (event.target.closest('.lightbox-close')) document.querySelector('#lightbox').close();
  if (event.target.closest('.previous')) move(-1);
  if (event.target.closest('.next')) move(1);
  if (event.target.closest('#copyEmail')) navigator.clipboard.writeText('dukgoo.env@gmail.com').then(() => toast('Email address copied.'));
});
document.querySelector('#lightbox').addEventListener('wheel', event => { event.preventDefault(); move(event.deltaY > 0 ? 1 : -1); }, {passive:false});
renderProjects();

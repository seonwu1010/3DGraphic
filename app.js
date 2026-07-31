const projects = [
  {id:'scifi', title:'SCI-FI CORRIDOR', category:'Personal', type:'Environment', date:'2024.07', cover:'Personal/202407_Sci-fi/Main.jpg', images:['Personal/202407_Sci-fi/Main.jpg','Personal/202407_Sci-fi/Ceiling.jpg','Personal/202407_Sci-fi/Door.jpg','Personal/202407_Sci-fi/Floor.jpg','Personal/202407_Sci-fi/Wall.jpg']},
  {id:'crt', title:'CRT & NES', category:'Personal', type:'Props', date:'2024.09', cover:'Personal/202409_CRT&Nes/Main.jpg', images:['Personal/202409_CRT&Nes/Main.jpg','Personal/202409_CRT&Nes/CRT_Day.jpg','Personal/202409_CRT&Nes/CRT_Night.jpg','Personal/202409_CRT&Nes/CRT_Solo.jpg','Personal/202409_CRT&Nes/NES.jpg','Personal/202409_CRT&Nes/NES_NIght.jpg','Personal/202409_CRT&Nes/Nes_Solo.jpg']},
  {id:'knife', title:'UTILITY KNIFE', category:'Personal', type:'Props', date:'2026.03', cover:'Personal/202603_Knife/Main.jpg', images:['Personal/202603_Knife/Main.jpg','Personal/202603_Knife/knife1.jpg','Personal/202603_Knife/knife 2.jpg','Personal/202603_Knife/knife 3.jpg','Personal/202603_Knife/knife 5.jpg','Personal/202603_Knife/knife 6.jpg']},
  {id:'tile', title:'TILE STUDY 02', category:'ZBrush', type:'ZBrush', date:'2024.12', cover:'Personal/ZBrush/202412_Tile2/Main.jpg', images:['Personal/ZBrush/202412_Tile2/Main.jpg','Personal/ZBrush/202412_Tile2/Tile2.jpg']}
];
const byId = Object.fromEntries(projects.map(project => [project.id, project]));
const asset = path => encodeURI(path);
let activeProject, activeImage = 0;

function renderProjects() {
  document.querySelector('#projectCount').innerHTML = `${projects.length} Projects<br />Click → Detail`;
  document.querySelector('#personalGrid').innerHTML = projects.map(project => `<article class="project-card" data-project="${project.id}"><img src="${asset(project.cover)}" alt="${project.title}" loading="lazy"><div class="card-info"><span class="card-title">${project.title}</span><span class="card-views">${project.category} · ${project.type}</span></div></article>`).join('');
}
function openProject(id) { activeProject = byId[id]; activeImage = 0; document.querySelector('#lightbox').showModal(); renderLightbox(); }
function renderLightbox() {
  const path = activeProject.images[activeImage];
  const image = document.querySelector('#lightboxImage'); image.src = asset(path); image.alt = activeProject.title;
  document.querySelector('#lightboxMeta').innerHTML = `<strong>${activeProject.title}</strong><br>${activeProject.category} · ${activeProject.type}<br>${activeProject.date}<br>${activeImage + 1} / ${activeProject.images.length}`;
  document.querySelector('#lightboxThumbs').innerHTML = activeProject.images.map((item, index) => `<button class="${index === activeImage ? 'active' : ''}" data-image-index="${index}" aria-label="Open image ${index + 1}"><img src="${asset(item)}" alt=""></button>`).join('');
}
function moveImage(step) { activeImage = (activeImage + step + activeProject.images.length) % activeProject.images.length; renderLightbox(); }
function toast(message) { const element = document.querySelector('#toast'); element.textContent = message; element.classList.add('visible'); clearTimeout(toast.timer); toast.timer = setTimeout(() => element.classList.remove('visible'), 1800); }

document.addEventListener('click', event => {
  const nav = event.target.closest('[data-nav]'); if (nav) { event.preventDefault(); document.querySelector(`#${nav.dataset.nav}`).scrollIntoView({behavior:'smooth'}); return; }
  const card = event.target.closest('[data-project]'); if (card) { openProject(card.dataset.project); return; }
  const thumb = event.target.closest('[data-image-index]'); if (thumb) { activeImage = Number(thumb.dataset.imageIndex); renderLightbox(); return; }
  if (event.target.closest('.lightbox-close')) document.querySelector('#lightbox').close();
  if (event.target.closest('.previous')) moveImage(-1);
  if (event.target.closest('.next')) moveImage(1);
  if (event.target.closest('#copyEmail')) navigator.clipboard.writeText('dukgoo.env@gmail.com').then(() => toast('Email address copied.'));
});
document.querySelector('#lightbox').addEventListener('wheel', event => { event.preventDefault(); moveImage(event.deltaY > 0 ? 1 : -1); }, {passive:false});
renderProjects();

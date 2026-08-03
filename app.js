const projects = [
  {id:'scifi', title:'SCI-FI CORRIDOR', category:'Personal', type:'Environment', date:'2024.07', sortKey:202407, cover:'Personal/202407_Sci-fi/Main.jpg', images:['Personal/202407_Sci-fi/Main.jpg','Personal/202407_Sci-fi/Ceiling.jpg','Personal/202407_Sci-fi/Door.jpg','Personal/202407_Sci-fi/Floor.jpg','Personal/202407_Sci-fi/Wall.jpg']},
  {id:'crt', title:'CRT & NES', category:'Personal', type:'Props', date:'2024.09', sortKey:202409, cover:'Personal/202409_CRT&Nes/Main.jpg', images:['Personal/202409_CRT&Nes/Main.jpg','Personal/202409_CRT&Nes/CRT_Day.jpg','Personal/202409_CRT&Nes/CRT_Night.jpg','Personal/202409_CRT&Nes/CRT_Solo.jpg','Personal/202409_CRT&Nes/NES.jpg','Personal/202409_CRT&Nes/NES_NIght.jpg','Personal/202409_CRT&Nes/Nes_Solo.jpg']},
  {id:'knife', title:'UTILITY KNIFE', category:'Personal', type:'Props', date:'2026.03', sortKey:202603, cover:'Personal/202603_Knife/Main.jpg', images:['Personal/202603_Knife/Main.jpg','Personal/202603_Knife/knife1.jpg','Personal/202603_Knife/knife 2.jpg','Personal/202603_Knife/knife 3.jpg','Personal/202603_Knife/knife 5.jpg','Personal/202603_Knife/knife 6.jpg']},
  {id:'tile', title:'TILE STUDY 02', category:'ZBrush', type:'ZBrush', date:'2024.12', sortKey:202412, cover:'Personal/ZBrush/202412_Tile2/Main.jpg', images:['Personal/ZBrush/202412_Tile2/Main.jpg','Personal/ZBrush/202412_Tile2/Tile2.jpg']},
  {id:'rock', title:'ROCK STUDY', category:'ZBrush', type:'ZBrush', date:'2026.03', sortKey:202603, cover:'Personal/ZBrush/202603_Rock/Rock.jpg', images:['Personal/ZBrush/202603_Rock/Rock.jpg']}
];
const byId = Object.fromEntries(projects.map(project => [project.id, project]));
const asset = path => encodeURI(path);
let activeProject, activeImage = 0;
let inlinePanX = 0, inlinePanY = 0, inlineDrag = null, inlineDragged = false;
const orderedProjects = () => {
  const categoryOrder = {Personal: 0, ZBrush: 1};
  return [...projects].sort((a, b) => categoryOrder[a.category] - categoryOrder[b.category] || b.sortKey - a.sortKey);
};

function renderProjects() {
  const ordered = orderedProjects();
  document.querySelector('#projectCount').innerHTML = `${projects.length} Projects<br />Click → Detail`;
  document.querySelector('#personalGrid').innerHTML = ordered.map(project => `<article class="project-card" data-project="${project.id}"><img src="${asset(project.cover)}" alt="${project.title}" loading="lazy"><div class="card-info"><span class="card-title">${project.title}</span><span class="card-views">${project.category} · ${project.type}</span></div></article>`).join('');
}
function openProject(id) { activeProject = byId[id]; activeImage = 0; document.querySelector('#lightbox').showModal(); renderLightbox(); }
function renderLightbox() {
  const path = activeProject.images[activeImage];
  const image = document.querySelector('#lightboxImage'); image.src = asset(path); image.alt = activeProject.title; image.classList.remove('is-zoomed'); image.style.removeProperty('--pan-x'); image.style.removeProperty('--pan-y'); image.style.removeProperty('cursor'); inlinePanX = 0; inlinePanY = 0; inlineDrag = null; inlineDragged = false;
  document.querySelector('#lightboxMeta').innerHTML = `<strong>${activeProject.title}</strong><br>${activeProject.category} · ${activeProject.type}<br>${activeProject.date}<br>${activeImage + 1} / ${activeProject.images.length}`;
  document.querySelector('#lightboxThumbs').innerHTML = activeProject.images.map((item, index) => `<button class="${index === activeImage ? 'active' : ''}" data-image-index="${index}" aria-label="Open image ${index + 1}"><img src="${asset(item)}" alt=""></button>`).join('');
}
function moveImage(step) { activeImage = (activeImage + step + activeProject.images.length) % activeProject.images.length; renderLightbox(); }
function moveProject(step) { const ordered = orderedProjects(); const current = ordered.findIndex(project => project.id === activeProject.id); activeProject = ordered[(current + step + ordered.length) % ordered.length]; activeImage = 0; renderLightbox(); }
function toast(message) { const element = document.querySelector('#toast'); element.textContent = message; element.classList.add('visible'); clearTimeout(toast.timer); toast.timer = setTimeout(() => element.classList.remove('visible'), 1800); }
function startHeroSlideshow() {
  const slides = [...document.querySelectorAll('.hero-slide')];
  const covers = projects.map(project => project.cover);
  let current = 0, front = 0;
  slides[front].style.backgroundImage = `url("${asset(covers[current])}")`;
  setInterval(() => {
    current = (current + 1) % covers.length;
    const back = front === 0 ? 1 : 0;
    slides[back].style.backgroundImage = `url("${asset(covers[current])}")`;
    slides[back].classList.add('is-active');
    slides[front].classList.remove('is-active');
    front = back;
  }, 10000);
}

document.addEventListener('click', event => {
  const nav = event.target.closest('[data-nav]'); if (nav) { event.preventDefault(); document.querySelector(`#${nav.dataset.nav}`).scrollIntoView({behavior:'smooth'}); return; }
  const card = event.target.closest('[data-project]'); if (card) { openProject(card.dataset.project); return; }
  const thumb = event.target.closest('[data-image-index]'); if (thumb) { activeImage = Number(thumb.dataset.imageIndex); renderLightbox(); return; }
  if (event.target.closest('.lightbox-close')) document.querySelector('#lightbox').close();
  if (event.target.closest('.previous')) moveProject(-1);
  if (event.target.closest('.next')) moveProject(1);
  if (event.target.closest('#copyEmail')) navigator.clipboard.writeText('seonwu1010@naver.com').then(() => toast('Email address copied.'));
});
document.querySelector('#lightbox').addEventListener('wheel', event => { event.preventDefault(); moveImage(event.deltaY > 0 ? 1 : -1); }, {passive:false});
document.querySelector('#lightboxImage').addEventListener('click', event => { event.stopPropagation(); if (inlineDragged) { inlineDragged = false; return; } const image = event.currentTarget; image.classList.toggle('is-zoomed'); if (!image.classList.contains('is-zoomed')) { inlinePanX = 0; inlinePanY = 0; image.style.removeProperty('--pan-x'); image.style.removeProperty('--pan-y'); } });
document.querySelector('.lightbox-stage').addEventListener('pointerdown', event => { const image = document.querySelector('#lightboxImage'); if (event.button !== 0 || !image.classList.contains('is-zoomed')) return; event.preventDefault(); inlineDrag = {x:event.clientX, y:event.clientY, panX:inlinePanX, panY:inlinePanY}; event.currentTarget.setPointerCapture(event.pointerId); image.style.cursor = 'grabbing'; });
document.querySelector('.lightbox-stage').addEventListener('pointermove', event => { if (!inlineDrag || (event.buttons & 1) === 0) return; const deltaX = event.clientX - inlineDrag.x; const deltaY = event.clientY - inlineDrag.y; if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) inlineDragged = true; inlinePanX = inlineDrag.panX + deltaX; inlinePanY = inlineDrag.panY + deltaY; const image = document.querySelector('#lightboxImage'); image.style.setProperty('--pan-x', `${inlinePanX}px`); image.style.setProperty('--pan-y', `${inlinePanY}px`); });
const stopInlineDrag = () => { inlineDrag = null; const image = document.querySelector('#lightboxImage'); if (image.classList.contains('is-zoomed')) image.style.cursor = 'zoom-out'; };
document.querySelector('.lightbox-stage').addEventListener('pointerup', stopInlineDrag);
document.querySelector('.lightbox-stage').addEventListener('pointercancel', stopInlineDrag);
document.querySelector('.lightbox-stage').addEventListener('lostpointercapture', stopInlineDrag);
document.querySelector('#lightboxImage').addEventListener('dragstart', event => event.preventDefault());
renderProjects();
startHeroSlideshow();

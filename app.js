const projects = [
  { id:'crt-nes', title:'CRT & NES', category:'personal', kind:'Personal', date:'2024.09', publishedAt:'2024-09-18', cover:'Personal/202409_CRT&Nes/Desktop_Main.jpg', images:['Personal/202409_CRT&Nes/Desktop_Main.jpg','Personal/202409_CRT&Nes/Desktop_CRT.jpg','Personal/202409_CRT&Nes/Desktop_Nes.jpg','Personal/202409_CRT&Nes/tbrender_Front.jpg'], description:'A nostalgic desktop scene built around the tactile charm of CRT gaming.' },
  { id:'tile', title:'Tile Study 02', category:'zbrush', kind:'ZBrush', date:'2024.12', publishedAt:'2024-12-11', cover:'Personal/ZBrush/202412_Tile2/Tile2.jpg', images:['Personal/ZBrush/202412_Tile2/Tile2.jpg','Personal/ZBrush/202412_Tile2/Tile2(2).jpg'], description:'A material and surface study focused on hand-crafted tile variation.' },
  { id:'scifi', title:'Sci-fi Corridor', category:'personal', kind:'Personal', date:'2024.07', publishedAt:'2024-07-14', cover:'Personal/202407_Sci-fi/Desktop_Viewport.jpg', images:['Personal/202407_Sci-fi/Desktop_Viewport.jpg','Personal/202407_Sci-fi/Door.jpg','Personal/202407_Sci-fi/Wall.jpg','Personal/202407_Sci-fi/Floor.jpg'], description:'A modular sci-fi environment created for a studio production workflow.' },
  { id:'knife', title:'Utility Knife', category:'personal', kind:'Personal', date:'2026.03', publishedAt:'2026-03-15', cover:'Personal/202603_Knife/knife_Camera 1.jpg', images:['Personal/202603_Knife/knife_Camera 1.jpg','Personal/202603_Knife/knife_Camera 2.jpg','Personal/202603_Knife/knife_Camera 3.jpg','Personal/202603_Knife/knife_Camera 4.jpg'], description:'A hard-surface prop exploration balancing precision and everyday wear.' },
  { id:'rock', title:'Rock Formation', category:'zbrush', kind:'ZBrush', date:'2026.03', publishedAt:'2026-03-29', cover:'Personal/ZBrush/202603_Rock/Rock.jpg', images:['Personal/ZBrush/202603_Rock/Rock.jpg','Personal/ZBrush/202603_Rock/Rock(1).jpg','Personal/ZBrush/202603_Rock/Rock(2).jpg','Personal/ZBrush/202603_Rock/Rock(3).jpg'], description:'A sculpted rock study focused on form, surface and material breakup.' },
  { id:'pillar', title:'Ancient Pillar', category:'zbrush', kind:'ZBrush', date:'2026.04', publishedAt:'2026-04-16', cover:'Personal/ZBrush/202604_Pillar/Pillar.jpg', images:['Personal/ZBrush/202604_Pillar/Pillar.jpg','Personal/ZBrush/202604_Pillar/Pillar(1).jpg','Personal/ZBrush/202604_Pillar/Pillar(2).jpg','Personal/ZBrush/202604_Pillar/Pillar_Cut.jpg'], description:'A sculpted prop study with age, damage and material breakup.' }
];
// Updated by the scheduled snapshot job; never calculated from a client-side Firestore top query.
const rankSnapshot = ['pillar', 'rock', 'knife', 'scifi', 'tile', 'crt-nes'];

const byId = Object.fromEntries(projects.map(p => [p.id, p]));
const image = p => encodeURI(p.cover);
const getViews = id => Number(localStorage.getItem(`dk-view-${id}`) || 0);
const setViews = (id, value) => localStorage.setItem(`dk-view-${id}`, value);
const isNew = p => (Date.now() - new Date(p.publishedAt).getTime()) < 30 * 864e5;
let activeCategory = 'personal', allCount = 8, viewing = [], currentIndex = 0, returnToAbout = false;

function viewLabel(p) { const n = getViews(p.id); return isNew(p) && n < 10 ? 'NEW' : n ? `${n}` : ''; }
function card(p, rank) {
  return `<article class="project-card${rank ? ' rank-card' : ''}" data-project="${p.id}">
    <img src="${image(p)}" alt="${p.title}" loading="lazy"><div class="card-info">${rank ? `<span class="rank-number">${rank}</span>` : ''}<span class="card-date">${p.date}</span><span class="card-title">${p.title}</span><span class="card-views">${viewLabel(p)}</span></div></article>`;
}
function renderPersonal() { document.querySelector('#personalGrid').innerHTML = projects.filter(p => p.category === activeCategory).map(card).join(''); }
function ranked() { return [...projects].sort((a,b) => getViews(b.id)-getViews(a.id) || b.publishedAt.localeCompare(a.publishedAt)); }
function renderAll(reset = false) {
  if(reset) allCount = 8;
  const items = Array.from({length:allCount},(_,i)=>projects[i % projects.length]);
  document.querySelector('#allGrid').innerHTML = items.map(card).join('');
  document.querySelector('#rankGrid').innerHTML = rankSnapshot.map(id=>byId[id]).map((p,i)=>card(p,i+1)).join('');
}
function trackView(p) {
  const key = `dk-seen-${p.id}`;
  if (!sessionStorage.getItem(key)) { setViews(p.id, getViews(p.id)+1); sessionStorage.setItem(key, '1'); }
}
function openLightbox(id, source) {
  const project = byId[id]; if (!project) return;
  returnToAbout = source === 'about';
  viewing = source === 'all' ? projects : projects.filter(p => p.category === project.category);
  currentIndex = viewing.findIndex(p => p.id === id);
  document.querySelector('#lightbox').showModal();
  updateLightbox(true);
}
function updateLightbox(count = false) {
  const p = viewing[currentIndex]; if (count) trackView(p);
  const img = document.querySelector('#lightboxImage'), video = document.querySelector('#lightboxVideo');
  img.src = image(p); img.alt = p.title;
  video.src = p.video || '';
  document.querySelector('#lightboxMeta').innerHTML = `<strong>${p.title}</strong><br>${p.kind} · ${p.date}<br>${p.description}`;
  document.querySelector('#lightboxThumbs').innerHTML = viewing.map((item,i)=>`<button class="${i===currentIndex?'active':''}" data-lightbox-index="${i}" aria-label="Open ${item.title}"><img src="${image(item)}" alt=""></button>`).join('');
}
function move(direction, random = false) {
  if (!viewing.length) return;
  currentIndex = random ? Math.floor(Math.random() * viewing.length) : (currentIndex + direction + viewing.length) % viewing.length;
  updateLightbox(true);
}
function toast(message) { const el=document.querySelector('#toast'); el.textContent=message; el.classList.add('visible'); clearTimeout(toast.t); toast.t=setTimeout(()=>el.classList.remove('visible'),1800); }

document.addEventListener('click', event => {
  const nav = event.target.closest('[data-nav]');
  if(nav) { event.preventDefault(); const section=document.querySelector(`#${nav.dataset.nav}`); section.scrollIntoView({behavior:'smooth',block:'start'}); if(nav.dataset.nav==='about') setTimeout(()=>window.scrollTo({top:0,behavior:'smooth'}),20); return; }
  const project = event.target.closest('[data-project]'); if(project) { openLightbox(project.dataset.project, project.closest('#allGrid, #rankGrid') ? 'all' : 'category'); return; }
  const tab = event.target.closest('[data-category]'); if(tab) { activeCategory=tab.dataset.category; document.querySelectorAll('.category-tab').forEach(b=>b.classList.toggle('active',b===tab)); renderPersonal(); return; }
  if(event.target.closest('#copyEmail')) navigator.clipboard.writeText('dukgoo.env@gmail.com').then(()=>toast('Email address copied.'));
  if(event.target.closest('#backToTop')) window.scrollTo({top:0,behavior:'smooth'});
  if(event.target.closest('.lightbox-close')) document.querySelector('#lightbox').close();
  const index = event.target.closest('[data-lightbox-index]'); if(index){currentIndex=Number(index.dataset.lightboxIndex); updateLightbox(true);}
  if(event.target.closest('.previous')) move(-1); if(event.target.closest('.next')) move(1);
});
document.querySelector('#lightbox').addEventListener('close', () => { if(returnToAbout) document.querySelector('#about').scrollIntoView({block:'start'}); });
document.querySelector('#lightbox').addEventListener('wheel', event => { event.preventDefault(); move(event.deltaY > 0 ? 1 : -1, viewing === projects); }, {passive:false});
document.querySelector('#scrollSentinel');
new IntersectionObserver(entries => { if(entries[0].isIntersecting) { allCount += 8; renderAll(); } }, {root:null,rootMargin:'500px'}).observe(document.querySelector('#scrollSentinel'));
document.querySelector('#menuButton').addEventListener('click',()=>toast('About · Personal Works · All Portfolio'));
renderPersonal(); renderAll(true);
window.addEventListener('storage',()=>renderAll());

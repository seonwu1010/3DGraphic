const projects = [
  {id:'scifi', title:'SCI-FI CORRIDOR', category:'Personal', type:'Environment', date:'2024.07', sortKey:202407, cover:'Personal/202407_Sci-fi/Main.jpg', images:['Personal/202407_Sci-fi/Main.jpg','Personal/202407_Sci-fi/Ceiling.jpg','Personal/202407_Sci-fi/Door.jpg','Personal/202407_Sci-fi/Floor.jpg','Personal/202407_Sci-fi/Wall.jpg']},
  {id:'crt', title:'CRT & NES', category:'Personal', type:'Props', date:'2024.09', sortKey:202409, cover:'Personal/202409_CRT&Nes/Main.jpg', images:['Personal/202409_CRT&Nes/Main.jpg','Personal/202409_CRT&Nes/CRT_Day.jpg','Personal/202409_CRT&Nes/CRT_Night.jpg','Personal/202409_CRT&Nes/CRT_Solo.jpg','Personal/202409_CRT&Nes/NES.jpg','Personal/202409_CRT&Nes/NES_NIght.jpg','Personal/202409_CRT&Nes/Nes_Solo.jpg']},
  {id:'knife', title:'UTILITY KNIFE', category:'Personal', type:'Props', date:'2026.03', sortKey:202603, cover:'Personal/202603_Knife/Main.jpg', images:['Personal/202603_Knife/Main.jpg','Personal/202603_Knife/knife1.jpg','Personal/202603_Knife/knife 2.jpg','Personal/202603_Knife/knife 3.jpg','Personal/202603_Knife/knife 5.jpg','Personal/202603_Knife/knife 6.jpg']},
  {id:'chair', title:'CHAIR', category:'Personal', type:'Props', date:'2026.04', sortKey:202604, cover:'Personal/202604_Chair/Main.jpg', images:['Personal/202604_Chair/Main.jpg','Personal/202604_Chair/Chair.jpg','Personal/202604_Chair/Chair(2).jpg','Personal/202604_Chair/Chair(4).jpg','Personal/202604_Chair/Chair(5).jpg']},
  {id:'sofa', title:'SOFA', category:'Personal', type:'Props', date:'2026.06', sortKey:202606, cover:'Personal/202606_Sofa/Main.jpg', images:['Personal/202606_Sofa/Main.jpg','Personal/202606_Sofa/Sofa(1).jpg']},
  {id:'axegun', title:'AXE GUN', category:'Personal', type:'Props', date:'2026.07', sortKey:202607, cover:'Personal/202607_AxeGun/AxeGun.jpg', images:['Personal/202607_AxeGun/AxeGun.jpg','Personal/202607_AxeGun/AxeGun(1).jpg','Personal/202607_AxeGun/AxeGun(2).jpg','Personal/202607_AxeGun/AxeGun(3).jpg','Personal/202607_AxeGun/AxeGun(4).jpg']},
  {id:'rock3', title:'ROCK STUDY 03', category:'ZBrush', type:'ZBrush', date:'2026.06', sortKey:202606, cover:'Personal/ZBrush/202606_Rock3/Main.jpg', images:['Personal/ZBrush/202606_Rock3/Main.jpg','Personal/ZBrush/202606_Rock3/Rock3(1).jpg','Personal/ZBrush/202606_Rock3/Rock3(2).jpg']},
  {id:'tile', title:'TILE STUDY', category:'ZBrush', type:'ZBrush', date:'2024', sortKey:202400, cover:'Personal/ZBrush/2024_Tile Study/Main.jpg', images:['Personal/ZBrush/2024_Tile Study/Main.jpg','Personal/ZBrush/2024_Tile Study/Tile2.jpg','Personal/ZBrush/2024_Tile Study/TileA.jpg']},
  {id:'rock', title:'ROCK STUDY', category:'ZBrush', type:'ZBrush', date:'2026.03', sortKey:202603, cover:'Personal/ZBrush/202603_Rock/Rock.jpg', images:['Personal/ZBrush/202603_Rock/Rock.jpg']}
];
const projectDescriptions = {
  scifi: '우주선 내부의 통제 구역을 콘셉트로 제작한 SF 환경 작업입니다. 반복되는 구조물과 패널, 배선 등의 디테일을 구성하고 금속 재질과 조명을 활용해 공간의 깊이감과 기계적인 분위기를 표현했습니다.',
  crt: 'CRT 모니터와 레트로 게임기를 중심으로 구성한 개인 작업입니다. 다양한 소품과 그래픽 요소를 배치하고, 오래 사용한 플라스틱과 전자기기의 질감을 표현해 추억이 쌓인 게임 공간의 분위기를 구현했습니다.',
  knife: '산업 현장에서 사용된 공구를 콘셉트로 제작한 나이프 프랍입니다. 금속의 용접 자국과 녹, 표면 스크래치와 손잡이의 마모를 더해 거칠고 실용적인 사용감을 표현했습니다.',
  chair: '오래된 목제 의자를 제작한 개인 프랍 작업입니다. 휘어진 목재 구조와 표면의 마모를 세밀하게 표현하고, 천의 자연스러운 주름을 함께 구성해 시간의 흔적이 느껴지도록 제작했습니다.',
  sofa: '빈티지 가죽 암체어를 기반으로 제작한 프랍 작업입니다. 가죽의 주름과 갈라짐, 눌린 쿠션과 가장자리의 마모를 표현해 오랫동안 사용된 가구의 묵직한 질감을 구현했습니다.',
  axegun: '도끼와 총기의 구조를 결합해 디자인한 판타지 무기 프랍입니다. 금속과 목재, 가죽 등 서로 다른 재질을 조화롭게 구성하고 전투로 생긴 흠집과 마모를 더해 무기의 무게감과 사용감을 강조했습니다.',
  rock3: '서로 다른 형태의 암석 두 종류를 직접 제작하고, 이를 반복적으로 조립하여 완성한 암석 지형 작업입니다. 제한된 에셋만으로 다양한 실루엣과 규모감을 구성해 효율적인 환경 제작 방식을 연구했습니다.',
  tile: '판타지 환경에 활용할 수 있는 석재 바닥 타일을 제작한 작업입니다. 반복 가능한 구조 안에 다양한 크기의 돌과 문양을 배치하고, 표면의 균열과 마모를 더해 자연스러운 변화를 표현했습니다.',
  rock: '길게 솟은 암석의 형태와 표면을 연구한 ZBrush 작업입니다. 여러 방향에서 보아도 자연스러운 실루엣을 유지하도록 덩어리를 구성하고, 굴곡과 균열을 조각해 단단한 암석의 질감을 표현했습니다.'
};
const byId = Object.fromEntries(projects.map(project => [project.id, project]));
const asset = path => encodeURI(path);
const displayedCategory = project => project.category === 'ZBrush' ? 'Personal' : project.category;
let activeProject, activeImage = 0;
let inlinePanX = 0, inlinePanY = 0, inlineDrag = null, inlineDragged = false;
const orderedProjects = () => {
  const categoryOrder = {Personal: 0, ZBrush: 1};
  return [...projects].sort((a, b) => categoryOrder[a.category] - categoryOrder[b.category] || b.sortKey - a.sortKey);
};

function renderProjects() {
  const ordered = orderedProjects();
  document.querySelector('#projectCount').innerHTML = `${projects.length} Projects<br />Click → Detail`;
  document.querySelector('#personalGrid').innerHTML = ordered.map(project => `<article class="project-card" data-project="${project.id}"><img src="${asset(project.cover)}" alt="${project.title}" loading="lazy"><div class="card-info"><span class="card-heading"><span class="card-title">${project.title}</span><span class="card-date">${project.date}</span></span><span class="card-views">${displayedCategory(project)} · ${project.type}</span></div></article>`).join('');
}
function openProject(id) { activeProject = byId[id]; activeImage = 0; document.querySelector('#lightbox').showModal(); renderLightbox(); }
function renderLightbox() {
  const path = activeProject.images[activeImage];
  const image = document.querySelector('#lightboxImage'); image.src = asset(path); image.alt = activeProject.title; image.classList.remove('is-zoomed'); image.style.removeProperty('--pan-x'); image.style.removeProperty('--pan-y'); image.style.removeProperty('cursor'); const stage = document.querySelector('.lightbox-stage'); stage.classList.remove('is-zoomed'); stage.style.removeProperty('cursor'); inlinePanX = 0; inlinePanY = 0; inlineDrag = null; inlineDragged = false;
  document.querySelector('#lightboxMeta').innerHTML = `<strong>${activeProject.title}</strong><br>${displayedCategory(activeProject)} · ${activeProject.type}<br>${activeProject.date}<p class="project-description">${projectDescriptions[activeProject.id]}</p><span class="image-position">${activeImage + 1} / ${activeProject.images.length}</span>`;
  const thumbs = document.querySelector('#lightboxThumbs');
  thumbs.innerHTML = activeProject.images.map((item, index) => `<button class="${index === activeImage ? 'active' : ''}" data-image-index="${index}" aria-label="Open image ${index + 1}"><img src="${asset(item)}" alt=""></button>`).join('');
  const activeThumb = thumbs.querySelector('.active');
  requestAnimationFrame(() => activeThumb?.scrollIntoView({behavior:'smooth', block:'nearest', inline:'nearest'}));
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
document.querySelector('.viewer-main').addEventListener('wheel', event => { event.preventDefault(); moveImage(event.deltaY > 0 ? 1 : -1); }, {passive:false});
document.querySelector('#lightboxImage').addEventListener('click', event => { event.stopPropagation(); if (inlineDragged) { inlineDragged = false; return; } const image = event.currentTarget; const zoomed = image.classList.toggle('is-zoomed'); document.querySelector('.lightbox-stage').classList.toggle('is-zoomed', zoomed); if (!zoomed) { inlinePanX = 0; inlinePanY = 0; image.style.removeProperty('--pan-x'); image.style.removeProperty('--pan-y'); } });
document.querySelector('.lightbox-stage').addEventListener('pointerdown', event => { const image = document.querySelector('#lightboxImage'); if (event.button !== 0 || !image.classList.contains('is-zoomed')) return; inlineDragged = false; inlineDrag = {x:event.clientX, y:event.clientY, panX:inlinePanX, panY:inlinePanY, pointerId:event.pointerId}; });
document.querySelector('.lightbox-stage').addEventListener('pointermove', event => { if (!inlineDrag || (event.buttons & 1) === 0) return; const deltaX = event.clientX - inlineDrag.x; const deltaY = event.clientY - inlineDrag.y; if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) { if (!inlineDragged) event.currentTarget.setPointerCapture(inlineDrag.pointerId); inlineDragged = true; event.currentTarget.style.cursor = 'grabbing'; } inlinePanX = inlineDrag.panX + deltaX; inlinePanY = inlineDrag.panY + deltaY; const image = document.querySelector('#lightboxImage'); image.style.setProperty('--pan-x', `${inlinePanX}px`); image.style.setProperty('--pan-y', `${inlinePanY}px`); });
const stopInlineDrag = () => { inlineDrag = null; const stage = document.querySelector('.lightbox-stage'); stage.style.removeProperty('cursor'); };
document.querySelector('.lightbox-stage').addEventListener('pointerup', stopInlineDrag);
document.querySelector('.lightbox-stage').addEventListener('pointercancel', stopInlineDrag);
document.querySelector('.lightbox-stage').addEventListener('lostpointercapture', stopInlineDrag);
document.querySelector('#lightboxImage').addEventListener('dragstart', event => event.preventDefault());
document.addEventListener('keydown', event => { if (event.key === 'Escape') { const viewer = document.querySelector('#lightbox'); if (viewer.open) { event.preventDefault(); viewer.close(); } } });
document.querySelector('#lightbox').addEventListener('cancel', event => { event.preventDefault(); event.currentTarget.close(); });
renderProjects();
startHeroSlideshow();

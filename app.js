const projects = [
  {id:'scene2024', title:'2024 SCENE', category:'Personal', type:'Environment · Props', date:'2024', sortKey:202400, cover:'Personal/2024_Scene/202409_CRT&Nes/1.jpg', images:['Personal/2024_Scene/202409_CRT&Nes/1.jpg','Personal/2024_Scene/202409_CRT&Nes/2.jpg','Personal/2024_Scene/202409_CRT&Nes/3.jpg','Personal/2024_Scene/202409_CRT&Nes/4.jpg','Personal/2024_Scene/202409_CRT&Nes/5.jpg','Personal/2024_Scene/202409_CRT&Nes/6.jpg','Personal/2024_Scene/202409_CRT&Nes/7.jpg','Personal/2024_Scene/202407_Sci-fi/1.jpg','Personal/2024_Scene/202407_Sci-fi/2.jpg','Personal/2024_Scene/202407_Sci-fi/3.jpg','Personal/2024_Scene/202407_Sci-fi/4.jpg','Personal/2024_Scene/202407_Sci-fi/5.jpg']},
  {id:'knife', title:'UTILITY KNIFE', category:'Personal', type:'Props', date:'2026.03', sortKey:202603, cover:'Personal/202603_Knife/1.jpg', images:['Personal/202603_Knife/1.jpg','Personal/202603_Knife/2.jpg','Personal/202603_Knife/3.jpg','Personal/202603_Knife/4.jpg','Personal/202603_Knife/5.jpg','Personal/202603_Knife/6.jpg']},
  {id:'chair', title:'CHAIR', category:'Personal', type:'Props', date:'2026.04', sortKey:202604, cover:'Personal/202604_Chair/1.jpg', images:['Personal/202604_Chair/1.jpg','Personal/202604_Chair/2.jpg','Personal/202604_Chair/3.jpg','Personal/202604_Chair/4.jpg','Personal/202604_Chair/5.jpg']},
  {id:'sofa', title:'SOFA', category:'Personal', type:'Props', date:'2026.06', sortKey:202606, cover:'Personal/202606_Sofa/1.jpg', images:['Personal/202606_Sofa/1.jpg','Personal/202606_Sofa/2.jpg']},
  {id:'axegun', title:'AXE GUN', category:'Personal', type:'Props', date:'2026.07', sortKey:202607, cover:'Personal/202607_AxeGun/1.jpg', images:['Personal/202607_AxeGun/1.jpg','Personal/202607_AxeGun/2.jpg','Personal/202607_AxeGun/3.jpg','Personal/202607_AxeGun/4.jpg','Personal/202607_AxeGun/5.jpg']},
  {id:'fantasyaxe', title:'FANTASY AXE', category:'Personal', type:'Props', date:'2026.08', sortKey:202608, cover:'Personal/202608_FantasyAxe/1.jpg', images:['Personal/202608_FantasyAxe/1.jpg','Personal/202608_FantasyAxe/2.jpg','Personal/202608_FantasyAxe/3.jpg']},
  {id:'carriage', title:'CARRIAGE', category:'Personal', type:'Props', date:'2026.10', sortKey:202610, cover:'Personal/202610_Carriage/1.jpg', images:['Personal/202610_Carriage/1.jpg']},
  {id:'zbrush', title:'ZBRUSH STUDY', category:'ZBrush', type:'ZBrush', date:'2024–2026', sortKey:202606, cover:'Personal/ZBrush/Zbrush/202606_Rock3/1.jpg', images:['Personal/ZBrush/Zbrush/202606_Rock3/1.jpg','Personal/ZBrush/Zbrush/202606_Rock3/2.jpg','Personal/ZBrush/Zbrush/202606_Rock3/3.jpg','Personal/ZBrush/Zbrush/202606_Rock3/4.jpg','Personal/ZBrush/Zbrush/202606_Rock3/5.jpg','Personal/ZBrush/Zbrush/202604_Rock2/1.jpg','Personal/ZBrush/Zbrush/202604_Rock2/2.jpg','Personal/ZBrush/Zbrush/202603_Rock/1.jpg','Personal/ZBrush/Zbrush/2024_Tile Study/1.jpg','Personal/ZBrush/Zbrush/2024_Tile Study/2.jpg','Personal/ZBrush/Zbrush/2024_Tile Study/3.jpg']},
];
const universityProjects = [
  {id:'3drive', title:'3Drive', category:'University', type:'Project', date:'', cover:'University Project/3Drive/PV-web.mp4?v=2', poster:'University Project/3Drive/poster.jpg?v=4', images:['University Project/3Drive/PV-web.mp4?v=2']},
  {id:'kirna', title:'Kirna', category:'University', type:'Project', date:'', images:[]},
  {id:'puangjump', title:'Puang Jump', category:'University', type:'Project', date:'', images:[]},
];
const isVideo = path => /\.mp4(?:\?|$)/i.test(path || '');
const previewMedia = (path, title, poster) => !path ? '<span class="pending-preview">COMING SOON</span>' : isVideo(path) ? `${poster ? `<img class="video-poster" src="${asset(poster)}" alt="${title}">` : ''}<video src="${asset(path)}" ${poster ? `poster="${asset(poster)}"` : ''} muted loop playsinline preload="metadata" aria-label="${title}"></video>` : `<img src="${asset(path)}" alt="${title}" loading="lazy">`;
const projectCard = project => `<article class="project-card" data-project="${project.id}" tabindex="0" role="button" aria-label="Open ${project.title}">${previewMedia(project.cover, project.title, project.poster)}<div class="card-info"><span class="card-heading"><span class="card-title">${project.title}</span><span class="card-date">${project.date}</span></span><span class="card-views">${displayedCategory(project)} · ${project.type}</span></div></article>`;
const projectDescriptions = {
  '3drive': '4학년 1학기 캡스톤디자인(2) 수업에서 진행한 3Drive 프로젝트입니다. 기존 클라우드 스토리지보다 직관적인 파일 탐색과 편리한 사용성을 강조한 3D 기반 클라우드 스토리지 서비스입니다.<br><br>프로젝트의 전반적인 기획과 서비스에 필요한 3D 모델링, UI/UX 디자인을 담당했습니다.',
  kirna: '대학에서 진행한 Kirna 프로젝트입니다. 작업 내용과 결과물을 준비 중입니다.',
  puangjump: '대학에서 진행한 Puang Jump 프로젝트입니다. 작업 내용과 결과물을 준비 중입니다.',
  scene2024: 'CRT 모니터와 레트로 게임기, SF 우주선 내부 환경을 중심으로 구성한 2024년 개인 작업입니다. 다양한 소품과 구조물, 패널과 배선의 디테일을 구성하고 재질과 조명을 활용해 각 공간의 분위기를 표현했습니다.',
  knife: '산업 현장에서 사용된 공구를 콘셉트로 제작한 나이프 프랍입니다. 금속의 용접 자국과 녹, 표면 스크래치와 손잡이의 마모를 더해 거칠고 실용적인 사용감을 표현했습니다.',
  chair: '오래된 목제 의자를 제작한 개인 프랍 작업입니다. 휘어진 목재 구조와 표면의 마모를 세밀하게 표현하고, 천의 자연스러운 주름을 함께 구성해 시간의 흔적이 느껴지도록 제작했습니다.',
  sofa: '빈티지 가죽 암체어를 기반으로 제작한 프랍 작업입니다. 가죽의 주름과 갈라짐, 눌린 쿠션과 가장자리의 마모를 표현해 오랫동안 사용된 가구의 묵직한 질감을 구현했습니다.',
  axegun: '도끼와 총기의 구조를 결합해 디자인한 판타지 무기 프랍입니다. 금속과 목재, 가죽 등 서로 다른 재질을 조화롭게 구성하고 전투로 생긴 흠집과 마모를 더해 무기의 무게감과 사용감을 강조했습니다.',
  fantasyaxe: '붉은 보석 장식과 비대칭 실루엣을 중심으로 디자인한 판타지 도끼 프랍입니다. 금속의 마모와 표면 스크래치, 장식 부위의 대비를 구성해 무기의 존재감과 재질감을 표현했습니다.',
  carriage: '판타지 세계관의 운송 마차를 제작한 환경 프랍 작업입니다. 목재와 금속 구조, 천막과 밧줄, 적재물의 재질을 구성하고 표면의 마모를 더해 오랜 시간 사용된 이동 수단의 분위기를 표현했습니다.',
  zbrush: '암석과 타일의 형태·표면을 연구한 ZBrush 작업 모음입니다. 암석 에셋은 크기와 회전, 배치를 변형해 다양한 실루엣의 지형으로 조립했고, 타일은 반복 가능한 구조 안에 돌의 크기와 문양, 균열과 마모를 구성했습니다.',
};
const byId = Object.fromEntries([...projects, ...universityProjects].map(project => [project.id, project]));
// Refresh renamed/replaced images even when the browser cached the same filename.
const imageRevisions = {
  "Personal/202603_Knife/1.jpg": "2ccfbe4f04fa",
  "Personal/202603_Knife/3.jpg": "932bc6cd1dad",
  "Personal/202604_Chair/1.jpg": "812bd67d96cc",
  "Personal/202604_Chair/2.jpg": "10ee08c954e6",
  "Personal/202604_Chair/3.jpg": "094e4ce7fb65",
  "Personal/202607_AxeGun/1.jpg": "f916af36cf9a",
  "Personal/202607_AxeGun/3.jpg": "f43899948770",
  "Personal/202607_AxeGun/4.jpg": "92dfb3cdb39a",
  "Personal/ZBrush/Zbrush/202606_Rock3/1.jpg": "112266933eac",
  "Personal/ZBrush/Zbrush/202606_Rock3/3.jpg": "3ccc5fd9b235"
};
const asset = path => {
  const revision = imageRevisions[path];
  return encodeURI(path) + (revision ? `${path.includes('?') ? '&' : '?'}v=${revision}` : '');
};
const displayedCategory = project => project.category === 'ZBrush' ? 'Personal' : project.category;
let activeProject, activeImage = 0;
let inlinePanX = 0, inlinePanY = 0, inlineDrag = null, inlineDragged = false;
const orderedProjects = () => {
  const displayOrder = {carriage: 0, fantasyaxe: 1, axegun: 2, sofa: 3, chair: 4, knife: 5, zbrush: 6, scene2024: 7};
  return [...projects].sort((a, b) => displayOrder[a.id] - displayOrder[b.id]);
};

function renderProjects() {
  const ordered = orderedProjects();
  document.querySelector('#projectCount').innerHTML = `${projects.length} Projects<br />Click → Detail`;
  document.querySelector('#personalGrid').innerHTML = ordered.map(projectCard).join('');
  document.querySelector('#universityGrid').innerHTML = universityProjects.map(projectCard).join('');
}
function openProject(id) { activeProject = byId[id]; activeImage = 0; document.querySelector('#lightbox').showModal(); renderLightbox(); }
function renderLightbox() {
  const path = activeProject.images[activeImage];
  const image = document.querySelector('#lightboxImage'); const video = document.querySelector('#lightboxVideo');
  video.pause(); video.removeAttribute('src'); video.load();
  video.hidden = !isVideo(path); image.hidden = !path || isVideo(path);
  document.querySelector('#lightboxEmpty').hidden = !!path;
  if (isVideo(path)) { video.src = asset(path); video.play().catch(() => {}); }
  if (path && !isVideo(path)) image.src = asset(path); image.alt = activeProject.title; image.classList.remove('is-zoomed'); image.style.removeProperty('--pan-x'); image.style.removeProperty('--pan-y'); image.style.removeProperty('cursor'); const stage = document.querySelector('.lightbox-stage'); stage.classList.remove('is-zoomed'); stage.style.removeProperty('cursor'); inlinePanX = 0; inlinePanY = 0; inlineDrag = null; inlineDragged = false;
  document.querySelector('#lightboxMeta').innerHTML = `<strong>${activeProject.title}</strong><br>${displayedCategory(activeProject)} · ${activeProject.type}<br>${activeProject.date}<p class="project-description">${projectDescriptions[activeProject.id]}</p><span class="image-position">${activeProject.images.length ? activeImage + 1 : 0} / ${activeProject.images.length}</span>`;
  const thumbs = document.querySelector('#lightboxThumbs');
  thumbs.innerHTML = activeProject.images.map((item, index) => `<button class="${index === activeImage ? 'active' : ''}" data-image-index="${index}" aria-label="Open image ${index + 1}">${isVideo(item) ? `<video src="${asset(item)}" muted preload="metadata"></video>` : `<img src="${asset(item)}" alt="">`}</button>`).join('');
  const activeThumb = thumbs.querySelector('.active');
  requestAnimationFrame(() => activeThumb?.scrollIntoView({behavior:'smooth', block:'nearest', inline:'nearest'}));
}
function moveImage(step) { if (!activeProject.images.length) return; activeImage = (activeImage + step + activeProject.images.length) % activeProject.images.length; renderLightbox(); }
function moveProject(step) { const ordered = universityProjects.includes(activeProject) ? universityProjects : orderedProjects(); const current = ordered.findIndex(project => project.id === activeProject.id); activeProject = ordered[(current + step + ordered.length) % ordered.length]; activeImage = 0; renderLightbox(); }
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

document.querySelector('#lightbox').addEventListener('close', () => document.querySelector('#lightboxVideo').pause());
document.addEventListener('keydown', event => {
  const card = event.target.closest('[data-project]');
  if (card && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); openProject(card.dataset.project); }
});

// Play video thumbnails only while their project card is hovered or focused.
function startCardPreview(card) {
  const video = card?.querySelector('video');
  if (video) video.play().then(() => { if (card.matches(':hover, :focus')) card.classList.add('is-previewing'); else stopCardPreview(card); }).catch(() => {});
}
function stopCardPreview(card) {
  const video = card?.querySelector('video');
  if (video) { card.classList.remove('is-previewing'); video.pause(); video.currentTime = 0; }
}
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => startCardPreview(card));
  card.addEventListener('mouseleave', () => stopCardPreview(card));
  card.addEventListener('focus', () => startCardPreview(card));
  card.addEventListener('blur', () => stopCardPreview(card));
  card.addEventListener('click', () => stopCardPreview(card));
});

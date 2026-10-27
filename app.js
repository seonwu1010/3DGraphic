const projects = [
  {id:'scene2024', title:'2024 SCENE', category:'Personal', type:'Environment · Props', date:'2024', sortKey:202400, cover:'Personal/2024_Scene/202409_CRT&Nes/1.jpg', images:['Personal/2024_Scene/202409_CRT&Nes/1.jpg','Personal/2024_Scene/202409_CRT&Nes/2.jpg','Personal/2024_Scene/202409_CRT&Nes/3.jpg','Personal/2024_Scene/202409_CRT&Nes/4.jpg','Personal/2024_Scene/202409_CRT&Nes/5.jpg','Personal/2024_Scene/202409_CRT&Nes/6.jpg','Personal/2024_Scene/202409_CRT&Nes/7.jpg','Personal/2024_Scene/202407_Sci-fi/1.jpg','Personal/2024_Scene/202407_Sci-fi/2.jpg','Personal/2024_Scene/202407_Sci-fi/3.jpg','Personal/2024_Scene/202407_Sci-fi/4.jpg','Personal/2024_Scene/202407_Sci-fi/5.jpg']},
  {id:'knife', title:'UTILITY KNIFE', category:'Personal', type:'Props', date:'2026.03', sortKey:202603, cover:'Personal/202603_Knife/1.jpg', images:['Personal/202603_Knife/1.jpg','Personal/202603_Knife/2.jpg','Personal/202603_Knife/3.jpg','Personal/202603_Knife/4.jpg','Personal/202603_Knife/5.jpg','Personal/202603_Knife/6.jpg']},
  {id:'chair', title:'CHAIR', category:'Personal', type:'Props', date:'2026.04', sortKey:202604, cover:'Personal/202604_Chair/1.jpg', images:['Personal/202604_Chair/1.jpg','Personal/202604_Chair/2.jpg','Personal/202604_Chair/3.jpg','Personal/202604_Chair/4.jpg','Personal/202604_Chair/5.jpg']},
  {id:'sofa', title:'SOFA', category:'Personal', type:'Props', date:'2026.06', sortKey:202606, cover:'Personal/202606_Sofa/1.jpg', images:['Personal/202606_Sofa/1.jpg','Personal/202606_Sofa/2.jpg','Personal/202606_Sofa/3.jpg']},
  {id:'axegun', title:'AXE GUN', category:'Personal', type:'Props', date:'2026.07', sortKey:202607, cover:'Personal/202607_AxeGun/1.jpg', images:['Personal/202607_AxeGun/1.jpg','Personal/202607_AxeGun/2.jpg','Personal/202607_AxeGun/3.jpg','Personal/202607_AxeGun/4.jpg','Personal/202607_AxeGun/5.jpg']},
  {id:'fantasyaxe', title:'FANTASY AXE', category:'Personal', type:'Props', date:'2026.08', sortKey:202608, cover:'Personal/202608_FantasyAxe/1.jpg', images:['Personal/202608_FantasyAxe/1.jpg','Personal/202608_FantasyAxe/2.jpg','Personal/202608_FantasyAxe/3.jpg']},
  {id:'carriage', title:'CARRIAGE', category:'Personal', type:'Props', date:'2026.10', sortKey:202610, cover:'Personal/202610_Carriage/0.png', images:['https://www.youtube.com/watch?v=bCY-vqUBD3A','Personal/202610_Carriage/0.png','Personal/202610_Carriage/1.jpg','Personal/202610_Carriage/2.jpg','Personal/202610_Carriage/3.jpg','Personal/202610_Carriage/4.jpg','Personal/202610_Carriage/5.jpg','Personal/202610_Carriage/6.jpg','Personal/202610_Carriage/7.jpg','Personal/202610_Carriage/8.jpg','Personal/202610_Carriage/9.jpg','Personal/202610_Carriage/10.jpg','Personal/202610_Carriage/11.jpg','Personal/202610_Carriage/12.jpg']},
  {id:'zbrush', title:'ZBRUSH STUDY', category:'ZBrush', type:'ZBrush', date:'2024–2026', sortKey:202606, cover:'Personal/ZBrush/Zbrush/202606_Rock3/1.jpg', images:['Personal/ZBrush/Zbrush/202606_Rock3/1.jpg','Personal/ZBrush/Zbrush/202606_Rock3/2.jpg','Personal/ZBrush/Zbrush/202606_Rock3/3.jpg','Personal/ZBrush/Zbrush/202606_Rock3/4.jpg','Personal/ZBrush/Zbrush/202606_Rock3/5.jpg','Personal/ZBrush/Zbrush/202604_Rock2/1.jpg','Personal/ZBrush/Zbrush/202604_Rock2/2.jpg','Personal/ZBrush/Zbrush/202603_Rock/1.jpg','Personal/ZBrush/Zbrush/2024_Tile Study/1.jpg','Personal/ZBrush/Zbrush/2024_Tile Study/2.jpg','Personal/ZBrush/Zbrush/2024_Tile Study/3.jpg']},
];
// Each texture has one image; the viewer shares navigation across this collection.
const substanceProjects = [
  {id:'substance-tile', title:'TILE', category:'Substance Designer', type:'Texture', date:'', cover:'Substance Designer/1.jpg', images:['Substance Designer/1.jpg']},
  {id:'substance-texture-2', title:'BLUE TILE', category:'Substance Designer', type:'Texture', date:'', cover:'Substance Designer/2.jpg', images:['Substance Designer/2.jpg']},
  {id:'substance-texture-3', title:'BRICK', category:'Substance Designer', type:'Texture', date:'', cover:'Substance Designer/3.jpg', images:['Substance Designer/3.jpg']},
  {id:'substance-texture-4', title:'CHAINMAIL', category:'Substance Designer', type:'Texture', date:'', cover:'Substance Designer/4.jpg', images:['Substance Designer/4.jpg']},
  {id:'substance-texture-5', title:'RED TILE', category:'Substance Designer', type:'Texture', date:'', cover:'Substance Designer/5.jpg', images:['Substance Designer/5.jpg']},
  {id:'substance-texture-6', title:'WORN RED TILE', category:'Substance Designer', type:'Texture', date:'', cover:'Substance Designer/6.jpg', images:['Substance Designer/6.jpg']},
];
const substanceDescription = 'Substance 3D Designer를 활용하여 다양한 재질의 텍스처를 제작한 개인 작업입니다. 재질별 특징과 표면 디테일을 표현하며 텍스처 제작 과정을 익혔습니다.';
const universityProjects = [
  {id:'3drive', title:'3Drive', category:'University', type:'Project', date:'', cover:'University Project/3Drive/PV-web.mp4?v=2', poster:'University Project/3Drive/poster.jpg?v=4', images:['University Project/3Drive/PV-web.mp4?v=2']},
  {id:'kirna', title:'Kirna', category:'University', type:'Project', date:'', images:[]},
  {id:'puangjump', title:'Puang Jump', category:'University', type:'Project', date:'', cover:'University Project/Puang_Jump/Puang_JUMP-web.mp4?v=1', poster:'University Project/Puang_Jump/poster.jpg?v=1', images:['University Project/Puang_Jump/Puang_JUMP-web.mp4?v=1','University Project/Puang_Jump/Dot art.jpg']},
];
const isVideo = path => /\.mp4(?:\?|$)/i.test(path || '');
const youtubeId = path => /^https:\/\/www\.youtube\.com\/watch\?v=([\w-]{11})$/.exec(path || '')?.[1];
const youtubeEmbed = (id, background = false) => `https://www.youtube.com/embed/${id}?autoplay=1&playsinline=1&rel=0${background ? `&mute=1&controls=0&disablekb=1&loop=1&playlist=${id}` : ''}`;
let viewerYoutubePlayer, viewerYoutubeReady = false;
function connectViewerYoutube() {
  const frame = document.querySelector('#lightboxYoutube');
  if (!window.YT?.Player || viewerYoutubePlayer || frame.hidden) return;
  viewerYoutubePlayer = new YT.Player(frame, {events: {
    onReady: () => {
      viewerYoutubeReady = true;
      const id = youtubeId(activeProject?.images[activeImage]);
      if (document.querySelector('#lightbox').open && id) {
        viewerYoutubePlayer.loadVideoById(id);
      } else viewerYoutubePlayer.stopVideo();
    }
  }});
}
window.onYouTubeIframeAPIReady = connectViewerYoutube;
const previewMedia = (path, title, poster) => !path ? '<span class="pending-preview">COMING SOON</span>' : isVideo(path) ? `${poster ? `<img class="video-poster" src="${asset(poster)}" alt="${title}">` : ''}<video src="${asset(path)}" ${poster ? `poster="${asset(poster)}"` : ''} muted loop playsinline preload="metadata" aria-label="${title}"></video>` : `<img src="${asset(path)}" alt="${title}" loading="lazy">`;
const projectCard = project => `<article class="project-card" data-project="${project.id}" tabindex="0" role="button" aria-label="Open ${project.title}">${previewMedia(project.cover, project.title, project.poster)}<div class="card-info"><span class="card-heading"><span class="card-title">${project.title}</span><span class="card-date">${project.date}</span></span><span class="card-views">${displayedCategory(project)} · ${project.type}</span></div></article>`;
const projectDescriptions = {
  '3drive': '4학년 1학기 캡스톤디자인(2) 수업에서 진행한 3Drive 프로젝트입니다. 기존 클라우드 스토리지보다 직관적인 파일 탐색과 편리한 사용성을 강조한 3D 기반 클라우드 스토리지 서비스입니다.<br><br>프로젝트의 전반적인 기획과 서비스에 필요한 3D 모델링, UI/UX 디자인을 담당했습니다.',
  kirna: '대학에서 진행한 Kirna 프로젝트입니다. 작업 내용과 결과물을 준비 중입니다.',
  puangjump: '대학 프로젝트로 1인 개발한 Puang Jump입니다. Jump King에서 영감을 받아 점프와 이동을 중심으로 다양한 장애물과 기믹을 구현한 플랫폼 게임입니다. 점프의 거리와 타이밍을 조절하며 장애물을 극복하고, 여러 구간을 통과해 목표 지점까지 도달하도록 구성했습니다.',
  scene2024: 'CRT 모니터와 레트로 게임기, SF 우주선 내부 환경을 중심으로 구성한 2024년 개인 작업입니다. 다양한 소품과 구조물, 패널과 배선의 디테일을 구성하고 재질과 조명을 활용해 각 공간의 분위기를 표현했습니다.',
  knife: '산업 현장에서 사용된 공구를 콘셉트로 제작한 나이프 프랍입니다. 금속의 용접 자국과 녹, 표면 스크래치와 손잡이의 마모를 더해 거칠고 실용적인 사용감을 표현했습니다.',
  chair: '오래된 목제 의자를 제작한 개인 프랍 작업입니다. 휘어진 목재 구조와 표면의 마모를 세밀하게 표현하고, 천의 자연스러운 주름을 함께 구성해 시간의 흔적이 느껴지도록 제작했습니다.',
  sofa: '빈티지 가죽 암체어를 기반으로 제작한 프랍 작업입니다. 가죽의 주름과 갈라짐, 눌린 쿠션과 가장자리의 마모를 표현해 오랫동안 사용된 가구의 묵직한 질감을 구현했습니다.',
  axegun: '도끼와 총기의 구조를 결합해 디자인한 판타지 무기 프랍입니다. 금속과 목재, 가죽 등 서로 다른 재질을 조화롭게 구성하고 전투로 생긴 흠집과 마모를 더해 무기의 무게감과 사용감을 강조했습니다.',
  fantasyaxe: '붉은 보석 장식과 비대칭 실루엣을 중심으로 디자인한 판타지 도끼 프랍입니다. 금속의 마모와 표면 스크래치, 장식 부위의 대비를 구성해 무기의 존재감과 재질감을 표현했습니다.',
  carriage: '판타지 세계관의 운송 마차를 제작한 환경 프랍 작업입니다. 목재와 금속 구조, 천막과 밧줄, 적재물의 재질을 구성하고 표면의 마모를 더해 오랜 시간 사용된 이동 수단의 분위기를 표현했습니다.',
  zbrush: '암석과 타일의 형태·표면을 연구한 ZBrush 작업 모음입니다. 암석 에셋은 크기와 회전, 배치를 변형해 다양한 실루엣의 지형으로 조립했고, 타일은 반복 가능한 구조 안에 돌의 크기와 문양, 균열과 마모를 구성했습니다.',
};
const byId = Object.fromEntries([...projects, ...substanceProjects, ...universityProjects].map(project => [project.id, project]));
// Refresh renamed/replaced images even when the browser cached the same filename.
const imageRevisions = {
  "Personal/202610_Carriage/1.jpg": "ed37ab84b78e",
  "Personal/202610_Carriage/2.jpg": "9a55b4bff76e",
  "Personal/202610_Carriage/3.jpg": "7cd81e7f2d7b",
  "Personal/202610_Carriage/4.jpg": "f36ffec470b4",
  "Personal/202610_Carriage/5.jpg": "435be960c24f",
  "Personal/202610_Carriage/6.jpg": "d13d4c0b6e8d",
  "Personal/202610_Carriage/7.jpg": "c34369a92462",
  "Personal/202610_Carriage/8.jpg": "8c577960dee1",
  "Personal/202610_Carriage/9.jpg": "20e4d8e69f4f",
  "Personal/202610_Carriage/10.jpg": "e7a32d162efe",
  "Personal/202610_Carriage/11.jpg": "ba6d110df7af",
  "Personal/202610_Carriage/12.jpg": "bb5f0d753bd3",
  "Personal/202606_Sofa/1.jpg": "8d1945b424ac",
  "Personal/202606_Sofa/2.jpg": "8ce1ff4d3497",
  "Personal/202606_Sofa/3.jpg": "ba8bff299f2f",
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
  document.querySelector('#substanceGrid').innerHTML = substanceProjects.map(projectCard).join('');
  document.querySelector('#substanceCount').innerHTML = `${substanceProjects.length} Textures<br />Click → Detail`;
  document.querySelector('#universityGrid').innerHTML = universityProjects.map(projectCard).join('');
}
const isSubstanceProject = () => substanceProjects.includes(activeProject);
function openProject(id) { activeProject = byId[id]; activeImage = 0; document.querySelector('#lightbox').showModal(); renderLightbox(); }
function renderLightbox({preserveThumbnails = false} = {}) {
  const path = activeProject.images[activeImage];
  const youtube = document.querySelector('#lightboxYoutube');
  const embeddedId = youtubeId(path);
  document.querySelector('#youtubeViewer').hidden = !embeddedId;
  // Wheel navigation must work even before the YouTube API is ready or on player errors.
  document.querySelector('#youtubeWheelSurface').hidden = !embeddedId;
  youtube.hidden = !embeddedId;
  if (viewerYoutubeReady) viewerYoutubePlayer.stopVideo();
  if (embeddedId) {
    youtube.title = `${activeProject.title} video`;
    if (viewerYoutubeReady) {
      viewerYoutubePlayer.loadVideoById(embeddedId);
    } else if (!viewerYoutubePlayer) {
      youtube.src = `${youtubeEmbed(embeddedId)}&enablejsapi=1&origin=${encodeURIComponent(location.origin)}`;
      connectViewerYoutube();
    }
  } else if (!viewerYoutubePlayer) youtube.removeAttribute('src');
  const image = document.querySelector('#lightboxImage'); const video = document.querySelector('#lightboxVideo');
  video.pause(); video.removeAttribute('src'); video.load();
  video.hidden = !isVideo(path); image.hidden = !path || isVideo(path) || !!embeddedId;
  document.querySelector('#lightboxEmpty').hidden = !!path;
  if (isVideo(path)) { video.src = asset(path); video.play().catch(() => {}); }
  if (path && !isVideo(path) && !embeddedId) image.src = asset(path); image.alt = activeProject.title; image.classList.remove('is-zoomed'); image.style.removeProperty('--pan-x'); image.style.removeProperty('--pan-y'); image.style.removeProperty('cursor'); const stage = document.querySelector('.lightbox-stage'); stage.classList.remove('is-zoomed'); stage.style.removeProperty('cursor'); inlinePanX = 0; inlinePanY = 0; inlineDrag = null; inlineDragged = false;
  document.querySelector('#lightboxMeta').innerHTML = `<strong>${activeProject.title}</strong><br>${displayedCategory(activeProject)} · ${activeProject.type}<br>${activeProject.date}<p class="project-description">${isSubstanceProject() ? substanceDescription : projectDescriptions[activeProject.id]}</p><span class="image-position">${isSubstanceProject() ? substanceProjects.indexOf(activeProject) + 1 : activeProject.images.length ? activeImage + 1 : 0} / ${isSubstanceProject() ? substanceProjects.length : activeProject.images.length}</span>`;
  const thumbs = document.querySelector('#lightboxThumbs');
  thumbs.setAttribute('aria-label', isSubstanceProject() ? 'Substance Designer textures' : 'Project images');
  if (!preserveThumbnails) {
    thumbs.innerHTML = isSubstanceProject() ? substanceProjects.map(project => `<button class="${project === activeProject ? 'active' : ''}" data-texture-project="${project.id}" aria-label="Open ${project.title}" aria-pressed="${project === activeProject}"><img src="${asset(project.cover)}" alt="${project.title}"></button>`).join('') : activeProject.images.map((item, index) => `<button class="${index === activeImage ? 'active' : ''}" data-image-index="${index}" aria-label="Open ${youtubeId(item) ? 'video' : `image ${index + 1}`}">${youtubeId(item) ? `<img src="${asset(activeProject.cover)}" alt=""><span class="video-thumb-play" aria-hidden="true">▶</span>` : isVideo(item) ? `<video src="${asset(item)}" muted preload="metadata"></video>` : `<img src="${asset(item)}" alt="">`}</button>`).join('');
    clearTimeout(thumbnailSelectionTimer);
    requestAnimationFrame(centerSelectedThumbnail);
  } else {
    thumbs.querySelectorAll('button').forEach(button => {
      const selected = isSubstanceProject() ? button.dataset.textureProject === activeProject.id : Number(button.dataset.imageIndex) === activeImage;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', selected);
    });
  }
}
let thumbnailSelectionTimer, thumbnailAutomaticTimer, thumbnailScrollIsAutomatic = false;
function centerSelectedThumbnail() {
  if (!document.querySelector('#lightbox').open) return;
  const rail = document.querySelector('#lightboxThumbs');
  const selected = rail.querySelector('.active');
  if (!selected) return;
  const horizontal = window.matchMedia('(max-width:700px)').matches;
  const railRect = rail.getBoundingClientRect(), selectedRect = selected.getBoundingClientRect();
  const current = horizontal ? rail.scrollLeft : rail.scrollTop;
  const viewport = horizontal ? rail.clientWidth : rail.clientHeight;
  const total = horizontal ? rail.scrollWidth : rail.scrollHeight;
  const offset = horizontal ? selectedRect.left - railRect.left - rail.clientLeft : selectedRect.top - railRect.top - rail.clientTop;
  const size = horizontal ? selectedRect.width : selectedRect.height;
  // Clamp to the real scroll range: the first and last items never need blank spacers.
  const target = Math.max(0, Math.min(total - viewport, current + offset - (viewport - size) / 2));
  if (Math.abs(target - current) > 1) {
    thumbnailScrollIsAutomatic = true;
    clearTimeout(thumbnailAutomaticTimer);
    thumbnailAutomaticTimer = setTimeout(() => { thumbnailScrollIsAutomatic = false; }, 200);
    rail.scrollTo(horizontal ? {left:target, behavior:'smooth'} : {top:target, behavior:'smooth'});
  }
}
function selectThumbnailAtScrollPosition() {
  if (!document.querySelector('#lightbox').open || thumbnailScrollIsAutomatic) return;
  const rail = document.querySelector('#lightboxThumbs');
  const buttons = [...rail.querySelectorAll('button')];
  if (!buttons.length) return;
  const horizontal = window.matchMedia('(max-width:700px)').matches;
  const rect = rail.getBoundingClientRect();
  const center = horizontal ? rect.left + rail.clientWidth / 2 : rect.top + rail.clientHeight / 2;
  const position = horizontal ? rail.scrollLeft : rail.scrollTop;
  const limit = horizontal ? rail.scrollWidth - rail.clientWidth : rail.scrollHeight - rail.clientHeight;
  let nearest = buttons[0], distance = Infinity;
  if (position <= 1) nearest = buttons[0];
  else if (position >= limit - 1) nearest = buttons[buttons.length - 1];
  else buttons.forEach(button => {
    const box = button.getBoundingClientRect();
    const delta = Math.abs((horizontal ? box.left + box.width / 2 : box.top + box.height / 2) - center);
    if (delta < distance) { distance = delta; nearest = button; }
  });
  if (isSubstanceProject()) {
    if (nearest.dataset.textureProject === activeProject.id) return;
    activeProject = byId[nearest.dataset.textureProject]; activeImage = 0;
  } else {
    const index = Number(nearest.dataset.imageIndex);
    if (index === activeImage) return;
    activeImage = index;
  }
  renderLightbox({preserveThumbnails:true});
}
['wheel', 'pointerdown', 'touchstart', 'keydown'].forEach(type => {
  document.querySelector('#lightboxThumbs').addEventListener(type, () => {
    thumbnailScrollIsAutomatic = false;
    clearTimeout(thumbnailAutomaticTimer);
  }, {passive:true});
});
document.querySelector('#lightboxThumbs').addEventListener('scroll', () => {
  clearTimeout(thumbnailSelectionTimer);
  if (thumbnailScrollIsAutomatic) {
    clearTimeout(thumbnailAutomaticTimer);
    thumbnailAutomaticTimer = setTimeout(() => { thumbnailScrollIsAutomatic = false; }, 200);
    return;
  }
  thumbnailSelectionTimer = setTimeout(selectThumbnailAtScrollPosition, 120);
}, {passive:true});
function moveImage(step) { if (isSubstanceProject()) { moveProject(step); return; } if (!activeProject.images.length) return; activeImage = (activeImage + step + activeProject.images.length) % activeProject.images.length; renderLightbox(); }
function moveProject(step) { const ordered = isSubstanceProject() ? substanceProjects : universityProjects.includes(activeProject) ? universityProjects : orderedProjects(); const current = ordered.findIndex(project => project.id === activeProject.id); activeProject = ordered[(current + step + ordered.length) % ordered.length]; activeImage = 0; renderLightbox(); }
function toast(message) { const element = document.querySelector('#toast'); element.textContent = message; element.classList.add('visible'); clearTimeout(toast.timer); toast.timer = setTimeout(() => element.classList.remove('visible'), 1800); }
function startHeroVideo() {
  document.querySelector('#heroYoutube').src = youtubeEmbed('bCY-vqUBD3A', true);
}

document.addEventListener('click', event => {
  const nav = event.target.closest('[data-nav]'); if (nav) { event.preventDefault(); document.querySelector(`#${nav.dataset.nav}`).scrollIntoView({behavior:'smooth'}); return; }
  const texture = event.target.closest('[data-texture-project]'); if (texture) { activeProject = byId[texture.dataset.textureProject]; activeImage = 0; renderLightbox(); return; }
  const card = event.target.closest('[data-project]'); if (card) { openProject(card.dataset.project); return; }
  const thumb = event.target.closest('[data-image-index]'); if (thumb) { activeImage = Number(thumb.dataset.imageIndex); renderLightbox(); return; }
  if (event.target.closest('.lightbox-close')) document.querySelector('#lightbox').close();
  if (event.target.closest('.previous')) moveProject(-1);
  if (event.target.closest('.next')) moveProject(1);
  if (event.target.closest('#copyEmail')) navigator.clipboard.writeText('seonwu1010@naver.com').then(() => toast('Email address copied.'));
});
let lastViewerWheel = -Infinity;
document.querySelector('.viewer-main').addEventListener('wheel', event => {
  if (event.ctrlKey || !event.deltaY) return;
  event.preventDefault();
  const now = performance.now();
  if (now - lastViewerWheel < 180) return;
  lastViewerWheel = now;
  moveImage(event.deltaY > 0 ? 1 : -1);
}, {passive:false});
document.querySelector('#youtubeWheelSurface').addEventListener('click', () => {
  if (!viewerYoutubeReady) return;
  if (viewerYoutubePlayer.getPlayerState() === YT.PlayerState.PLAYING) viewerYoutubePlayer.pauseVideo();
  else viewerYoutubePlayer.playVideo();
});
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
startHeroVideo();

document.querySelector('#lightbox').addEventListener('close', () => {
  clearTimeout(thumbnailSelectionTimer);
  clearTimeout(thumbnailAutomaticTimer);
  thumbnailScrollIsAutomatic = false;
  document.querySelector('#lightboxVideo').pause();
  if (viewerYoutubeReady) viewerYoutubePlayer.stopVideo();
  else if (!viewerYoutubePlayer) document.querySelector('#lightboxYoutube').removeAttribute('src');
});
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

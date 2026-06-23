/* ================================================================
   common.js — 공통 네비/푸터 렌더링 (수정 불필요)
   ================================================================ */

// 현재 HTML 파일 위치 기준 상대경로 (깃허브/카페24/하위폴더 모두 작동)
// pages/ 폴더 안이면 ../ 로 루트까지 올라감
const IN_PAGES = location.pathname.includes('/pages/');
const PAGE_ROOT = IN_PAGES ? '../' : '';

// 이미지: 항상 루트 기준 상대경로로
function img(path){ return PAGE_ROOT + path.replace(/^\//,''); }

// 링크: 루트 기준 상대경로
function href(path){ return PAGE_ROOT + path; }

// 테마 적용
function applyTheme(){
  const t = CONFIG.theme;
  const r = document.documentElement.style;
  r.setProperty('--g',  t.g);
  r.setProperty('--g2', t.g2);
  r.setProperty('--gl', t.gl);
  r.setProperty('--gp', t.gp);
  r.setProperty('--y',  t.y);
  r.setProperty('--cr', t.cr);
}

// 네비 렌더링
function renderNav(activePage){
  const p = CONFIG.pension;
  const nav = document.getElementById('nav');
  if(!nav) return;

  const menuItems = [
    { label:'펜션소개', href:'pages/about.html', sub:[] },
    { label:'객실안내', href:'pages/rooms.html', sub:
      CONFIG.rooms.map(r => ({ label: r.tab, href: 'pages/room-' + r.no + '.html' }))
    },
    { label:'스페셜', href:'pages/facilities.html', sub:[] },
    { label:'주변관광', href:'pages/spots.html', sub:[] },
    { label:'예약/문의', href:'pages/reservation.html', sub:[
      { label:'예약안내',      href:'pages/reservation.html' },
      { label:'이용·환불안내', href:'pages/notice.html' },
    ]},
  ];

  // 데스크탑 메뉴
  const desktopMenu = menuItems.map(item => {
    const subHtml = item.sub.length
      ? '<div class="dropdown">' + item.sub.map(s =>
          '<a href="' + href(s.href) + '">' + s.label + '</a>'
        ).join('') + '</div>'
      : '';
    const arr = item.sub.length ? '<span class="arr">▼</span>' : '';
    const isOn = activePage === item.label ? ' on' : '';
    return '<li><a href="' + href(item.href) + '" class="' + isOn + '">' + item.label + arr + '</a>' + subHtml + '</li>';
  }).join('');

  // 모바일 메뉴
  const mobileMenu = menuItems.map(item => {
    const hasSub = item.sub.length > 0;
    const subHtml = hasSub
      ? '<div class="mob-sub">' + item.sub.map(s =>
          '<a href="' + href(s.href) + '">' + s.label + '</a>'
        ).join('') + '</div>'
      : '';
    const arr = hasSub ? '<span class="arr">▾</span>' : '';
    const onclick = hasSub ? ' onclick="toggleMobSub(this)"' : '';
    return '<div class="mob-item"><a href="' + (hasSub ? '#' : href(item.href)) + '"' + onclick + '>' + item.label + arr + '</a>' + subHtml + '</div>';
  }).join('');

  nav.innerHTML =
    '<div class="nav-inner">' +
      '<a href="' + href('index.html') + '" class="nlogo">' + p.name_en + '<small>' + p.name_ko + '</small></a>' +
      '<ul class="nav-menu">' + desktopMenu + '</ul>' +
      '<button class="nav-hamburger" id="hamburger" onclick="toggleMobileMenu()" aria-label="메뉴"><span></span><span></span><span></span></button>' +
    '</div>';

  // 모바일 메뉴 삽입
  let mob = document.getElementById('mobile-menu');
  if(!mob){
    mob = document.createElement('div');
    mob.id = 'mobile-menu';
    document.body.appendChild(mob);
  }
  mob.innerHTML = mobileMenu;

  // 스크롤
  window.addEventListener('scroll', () => {
    nav.classList.toggle('sc', scrollY > 40);
  });
}

function toggleMobileMenu(){
  const mob = document.getElementById('mobile-menu');
  const btn = document.getElementById('hamburger');
  mob.classList.toggle('on');
  btn.classList.toggle('on');
  document.body.style.overflow = mob.classList.contains('on') ? 'hidden' : '';
}

function toggleMobSub(el){
  el.parentElement.classList.toggle('open');
  el.preventDefault && el.preventDefault();
}

// 푸터 렌더링
function renderFooter(){
  const p = CONFIG.pension;
  const c = CONFIG.contact;
  const b = CONFIG.biz;
  let footer = document.getElementById('footer');
  if(!footer) return;

  footer.innerHTML =
    '<div class="footer-grid">' +
      '<div>' +
        '<span class="footer-logo">' + p.name_en + '</span>' +
        '<p class="footer-copy">' + p.name_ko + '<br>' + c.address + '<br>사업자등록번호: ' + b.reg_no + ' | 대표: ' + b.ceo + '</p>' +
      '</div>' +
      '<div class="footer-col"><h4>Quick Menu</h4>' +
        '<a href="' + href('pages/about.html') + '">펜션소개</a>' +
        '<a href="' + href('pages/rooms.html') + '">객실안내</a>' +
        '<a href="' + href('pages/facilities.html') + '">스페셜</a>' +
        '<a href="' + href('pages/spots.html') + '">주변관광</a>' +
        '<a href="' + href('pages/reservation.html') + '">예약/문의</a>' +
      '</div>' +
      '<div class="footer-col"><h4>Contact</h4>' +
        '<p>' + c.tel + '</p>' +
        '<p>' + c.address + '</p>' +
        '<p>' + c.bank + '</p>' +
        '<p>체크인 ' + c.checkin + ' · 체크아웃 ' + c.checkout + '</p>' +
      '</div>' +
    '</div>' +
    '<div class="footer-bottom">ⓒ ' + b.year + ' ' + p.name_ko + '. All rights reserved.</div>';
}

// 스크롤 reveal
function initReveal(){
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('on'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.rv').forEach(el => {
    obs.observe(el);
    // 이미 화면 안에 있으면 즉시 표시 (관찰자 누락 방지)
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight && rect.bottom > 0){
      el.classList.add('on');
    }
  });
}

/* ── 팝업 공지 ── */
function renderPopup(){
  const pop = CONFIG.popup;
  if(!pop || !pop.enabled) return;

  // '오늘 하루 보지 않기' 체크 (localStorage)
  try {
    const hideUntil = localStorage.getItem('ara_popup_hide');
    if(hideUntil && Date.now() < parseInt(hideUntil)) return;
  } catch(e){}

  const wrap = document.createElement('div');
  wrap.id = 'site-popup';
  const c = CONFIG.theme;

  const imgHtml  = pop.image ? '<img src="'+img(pop.image)+'" alt="'+pop.title+'" class="pop-img">' : '';
  const linkHtml = pop.link
    ? '<a href="'+href(pop.link)+'" class="pop-link">'+(pop.link_text||'자세히 보기')+'</a>'
    : '';

  wrap.innerHTML =
    '<div class="pop-dim" onclick="closePopup()"></div>' +
    '<div class="pop-box">' +
      '<button class="pop-x" onclick="closePopup()" aria-label="닫기">&times;</button>' +
      imgHtml +
      '<div class="pop-body">' +
        '<h3 class="pop-title">'+pop.title+'</h3>' +
        '<p class="pop-text">'+pop.text+'</p>' +
        linkHtml +
      '</div>' +
      '<div class="pop-foot">' +
        '<label class="pop-hide"><input type="checkbox" id="pop-today"> 오늘 하루 보지 않기</label>' +
        '<button class="pop-close-btn" onclick="closePopup()">닫기</button>' +
      '</div>' +
    '</div>';

  // 스타일 주입 (1회)
  if(!document.getElementById('popup-style')){
    const st = document.createElement('style');
    st.id = 'popup-style';
    st.textContent =
      '#site-popup{position:fixed;inset:0;z-index:600;display:flex;align-items:center;justify-content:center;padding:20px;animation:popIn .3s ease;}' +
      '.pop-dim{position:absolute;inset:0;background:rgba(0,0,0,.6);backdrop-filter:blur(2px);}' +
      '.pop-box{position:relative;background:#fff;width:100%;max-width:380px;border-radius:14px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.3);z-index:1;}' +
      '.pop-x{position:absolute;top:10px;right:12px;background:rgba(0,0,0,.35);color:#fff;border:none;width:30px;height:30px;border-radius:50%;font-size:1.3rem;line-height:1;cursor:pointer;z-index:2;}' +
      '.pop-x:hover{background:rgba(0,0,0,.55);}' +
      '.pop-img{width:100%;height:200px;object-fit:cover;display:block;}' +
      '.pop-body{padding:24px 24px 18px;text-align:center;}' +
      '.pop-title{font-family:"Nanum Myeongjo",serif;font-size:1.4rem;font-weight:800;margin-bottom:12px;color:#1c1c1c;}' +
      '.pop-text{font-size:.95rem;color:#555;line-height:1.7;}' +
      '.pop-link{display:inline-block;margin-top:18px;background:'+c.g+';color:#fff;padding:11px 28px;border-radius:30px;font-size:.88rem;font-weight:700;text-decoration:none;transition:opacity .2s;}' +
      '.pop-link:hover{opacity:.88;}' +
      '.pop-foot{display:flex;align-items:center;justify-content:space-between;padding:12px 18px;background:#f6f6f4;border-top:1px solid #eee;}' +
      '.pop-hide{font-size:.82rem;color:#888;cursor:pointer;display:flex;align-items:center;gap:6px;}' +
      '.pop-hide input{cursor:pointer;}' +
      '.pop-close-btn{background:none;border:none;font-size:.85rem;color:#555;font-weight:600;cursor:pointer;}' +
      '.pop-close-btn:hover{color:#1c1c1c;}' +
      '@keyframes popIn{from{opacity:0}to{opacity:1}}' +
      '@media(max-width:480px){.pop-img{height:160px;}.pop-body{padding:20px;}}';
    document.head.appendChild(st);
  }

  document.body.appendChild(wrap);
}

function closePopup(){
  // '오늘 하루 보지 않기' 체크됐으면 저장
  const cb = document.getElementById('pop-today');
  if(cb && cb.checked){
    try {
      const tomorrow = Date.now() + 24*60*60*1000;
      localStorage.setItem('ara_popup_hide', String(tomorrow));
    } catch(e){}
  }
  const el = document.getElementById('site-popup');
  if(el) el.remove();
}

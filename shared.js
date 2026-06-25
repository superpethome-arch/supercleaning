// Super Cleaning CC — Shared JS
(function(){
  // Nav scroll
  var nav = document.querySelector('nav');
  if(nav){
    window.addEventListener('scroll', function(){ nav.classList.toggle('scrolled', window.scrollY > 30); }, {passive:true});
  }

  // Hamburger
  var hamburger = document.querySelector('.nav-hamburger');
  var mobileMenu = document.querySelector('.nav-mobile-menu');
  if(hamburger && mobileMenu){
    hamburger.addEventListener('click', function(){
      var isOpen = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Footer year
  var fy = document.getElementById('footerYear');
  if(fy) fy.textContent = new Date().getFullYear();

  // FAQ accordion
  window.toggleFaq = function(btn){
    var item = btn.closest('.faq-item');
    var answer = item.querySelector('.faq-answer');
    var isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(function(i){
      i.classList.remove('open');
      i.querySelector('.faq-answer').style.maxHeight = null;
    });
    if(!isOpen){
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  };

  // Neon button enhancement
  var arrowSVG = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>';
  document.querySelectorAll('.neon-btn').forEach(function(btn){
    if(btn.dataset.enhanced) return;
    btn.dataset.enhanced = '1';
    var ts = document.createElement('span');
    ts.className = 'btn-text';
    while(btn.firstChild) ts.appendChild(btn.firstChild);
    btn.appendChild(ts);
    var circle = document.createElement('span');
    circle.className = 'btn-circle';
    circle.innerHTML = arrowSVG;
    btn.appendChild(circle);
  });
})();
